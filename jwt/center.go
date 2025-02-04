package jwt

import (
	"context"
	"encoding/json"
	"fmt"
	"reflect"
	"strings"
	"time"

	"github.com/dgrijalva/jwt-go"
	"github.com/holdno/gopherCron/common"
	"github.com/spacegrower/watermelon/infra/middleware"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/metadata"
	"google.golang.org/grpc/status"
)

type agentProjectIdsKey struct{}

type ProjectAuthor struct {
	projectIDs map[int64]bool
}

func (p *ProjectAuthor) Allow(pid int64) bool {
	if p == nil {
		return false
	}
	return p.projectIDs[pid]
}

func CenterAuthMiddleware(publicKey []byte) func(ctx context.Context) error {
	return func(ctx context.Context) error {
		md, exist := metadata.FromIncomingContext(ctx)
		if !exist {
			return status.Error(codes.Unauthenticated, codes.Unauthenticated.String())
		}

		jwt := md.Get(common.GOPHERCRON_AGENT_AUTH_KEY)
		if len(jwt) == 0 {
			// TODO 迁移完成后下个版本移除nil
			return nil
			return status.Error(codes.Unauthenticated, "agent auth key is undefined")
		}
		claims, err := ParseAgentJWT(jwt[0], publicKey)
		if err != nil {
			return err
		}

		if len(claims.ProjectIDs) != 0 {
			projectAuthor := &ProjectAuthor{
				projectIDs: make(map[int64]bool),
			}
			for _, v := range claims.ProjectIDs {
				projectAuthor.projectIDs[v] = true
			}
			middleware.SetInto(ctx, agentProjectIdsKey{}, projectAuthor)
		}
		return nil
	}
}

func GetProjectAuthor(ctx context.Context) interface{ Allow(int64) bool } {
	author := middleware.GetFrom(ctx, agentProjectIdsKey{})
	if author != nil {
		return author.(*ProjectAuthor)
	}
	return nil
}

type CenterTokenClaims struct {
	Biz    string `json:"biz"`
	UserID int64  `json:"user_id"`
	Exp    int64  `json:"exp"`
	Iat    int64  `json:"iat"`
}

func BuildCenterJWT(info CenterTokenClaims, pk []byte) (string, error) {
	claims := jwt.MapClaims{}

	_t := reflect.TypeOf(info)
	v := reflect.ValueOf(info)

	for i := 0; i < _t.NumField(); i++ {
		tag := _t.Field(i).Tag.Get("json")
		claims[tag] = v.Field(i).Interface()
	}

	_token := jwt.NewWithClaims(jwt.SigningMethodRS256, claims)
	privateKey, err := jwt.ParseRSAPrivateKeyFromPEM(pk)
	if err != nil {
		return "", err
	}
	return _token.SignedString(privateKey)
}

func ParseCenterJWT(tokenString string, key []byte) (*CenterTokenClaims, error) {
	result := CenterTokenClaims{}
	_token, err := jwt.Parse(tokenString, func(i2 *jwt.Token) (i interface{}, e error) {
		publicKey, err := jwt.ParseRSAPublicKeyFromPEM(key)
		if err != nil {
			return nil, fmt.Errorf("invalied public key, %w", err)
		}
		return publicKey, nil
	})

	if err != nil {
		return nil, err
	}

	if !_token.Valid {
		return nil, err
	}

	// 验证token是否过期
	claims, ok := _token.Claims.(jwt.MapClaims)
	if !ok {
		return nil, err
	}

	if !claims.VerifyExpiresAt(time.Now().Unix(), false) {
		return nil, err
	}

	parts := strings.Split(tokenString, ".")
	claimBytes, _ := jwt.DecodeSegment(parts[1])

	if err = json.Unmarshal(claimBytes, &result); err != nil {
		return nil, err
	}
	return &result, nil
}
