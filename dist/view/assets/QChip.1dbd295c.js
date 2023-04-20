var he=Object.defineProperty,me=Object.defineProperties;var ge=Object.getOwnPropertyDescriptors;var V=Object.getOwnPropertySymbols;var be=Object.prototype.hasOwnProperty,ke=Object.prototype.propertyIsEnumerable;var j=(e,a,n)=>a in e?he(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n,u=(e,a)=>{for(var n in a||(a={}))be.call(a,n)&&j(e,n,a[n]);if(V)for(var n of V(a))ke.call(a,n)&&j(e,n,a[n]);return e},q=(e,a)=>me(e,ge(a));import{a as G,r as z,c as l,w as $,p as qe,h as r,T as Se,L as Ce,g as J,b as ye,c3 as xe,V as X,cd as Te,cc as Be,a9 as Pe,N as Oe,v as R,cn as _e}from"./index.e18600f8.js";import{u as Re,v as L,b as we,c as Ee,a as Fe,r as N,s as De,p as W,d as Me}from"./position-engine.e707f0b1.js";import{d as Ae,e as Qe,u as He,f as Ie,g as Ke}from"./use-prevent-scroll.d4f2a0d7.js";import{u as Y,a as Z}from"./use-dark.f89e8300.js";import{c as Ve,u as je,d as ze,e as $e,h as Le,r as Ne,i as U,j as We,k as Ue}from"./QDialog.07d9a48e.js";import{b as Ge}from"./focus-manager.32f8d49a.js";var nt=G({name:"QMenu",inheritAttrs:!1,props:q(u(u(u(u({},Re),Ae),Y),Ve),{persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:L},self:{type:String,validator:L},offset:{type:Array,validator:we},scrollTarget:{default:void 0},touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}}),emits:[...Qe,"click","escape-key"],setup(e,{slots:a,emit:n,attrs:d}){let f=null,m,v,b;const S=J(),{proxy:h}=S,{$q:c}=h,i=z(null),s=z(!1),C=l(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),y=Z(e,c),{registerTick:T,removeTick:o}=je(),{registerTimeout:x,removeTimeout:w}=He(),{transition:p,transitionStyle:ee}=ze(e,s),{localScrollTarget:E,changeScrollEvent:te,unconfigureScrollTarget:oe}=Ee(e,I),{anchorEl:g,canShow:ne}=Fe({showing:s}),{hide:F}=Ie({showing:s,canShow:ne,handleShow:ce,handleHide:se,hideOnRouteChange:C,processOnMount:!0}),{showPortal:D,hidePortal:M,renderPortal:ae}=$e(S,i,de),B={anchorEl:g,innerRef:i,onClickOutside(t){if(e.persistent!==!0&&s.value===!0)return F(t),(t.type==="touchstart"||t.target.classList.contains("q-dialog__backdrop"))&&X(t),!0}},A=l(()=>W(e.anchor||(e.cover===!0?"center middle":"bottom start"),c.lang.rtl)),le=l(()=>e.cover===!0?A.value:W(e.self||"top start",c.lang.rtl)),ie=l(()=>(e.square===!0?" q-menu--square":"")+(y.value===!0?" q-menu--dark q-dark":"")),ue=l(()=>e.autoClose===!0?{onClick:re}:{}),Q=l(()=>s.value===!0&&e.persistent!==!0);$(Q,t=>{t===!0?(We(O),Me(B)):(U(O),N(B))});function P(){Ge(()=>{let t=i.value;t&&t.contains(document.activeElement)!==!0&&(t=t.querySelector("[autofocus], [data-autofocus]")||t,t.focus({preventScroll:!0}))})}function ce(t){if(o(),w(),f=e.noRefocus===!1?document.activeElement:null,Le(K),D(),I(),m=void 0,t!==void 0&&(e.touchPosition||e.contextMenu)){const _=qe(t);if(_.left!==void 0){const{top:fe,left:ve}=g.value.getBoundingClientRect();m={left:_.left-ve,top:_.top-fe}}}v===void 0&&(v=$(()=>c.screen.width+"|"+c.screen.height+"|"+e.self+"|"+e.anchor+"|"+c.lang.rtl,k)),e.noFocus!==!0&&document.activeElement.blur(),T(()=>{k(),e.noFocus!==!0&&P()}),x(()=>{c.platform.is.ios===!0&&(b=e.autoClose,i.value.click()),k(),D(!0),n("show",t)},e.transitionDuration)}function se(t){o(),w(),M(),H(!0),f!==null&&(t===void 0||t.qClickOutside!==!0)&&(f.focus(),f=null),x(()=>{M(!0),n("hide",t)},e.transitionDuration)}function H(t){m=void 0,v!==void 0&&(v(),v=void 0),(t===!0||s.value===!0)&&(Ne(K),oe(),N(B),U(O)),t!==!0&&(f=null)}function I(){(g.value!==null||e.scrollTarget!==void 0)&&(E.value=Ke(g.value,e.scrollTarget),te(E.value,k))}function re(t){b!==!0?(Ue(h,t),n("click",t)):b=!1}function K(t){Q.value===!0&&e.noFocus!==!0&&xe(i.value,t.target)!==!0&&P()}function O(t){n("escape-key"),F(t)}function k(){const t=i.value;t===null||g.value===null||De({el:t,offset:e.offset,anchorEl:g.value,anchorOrigin:A.value,selfOrigin:le.value,absoluteOffset:m,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function de(){return r(Se,{name:p.value,appear:!0},()=>s.value===!0?r("div",u(q(u({},d),{ref:i,tabindex:-1,class:["q-menu q-position-engine scroll"+ie.value,d.class],style:[d.style,ee.value]}),ue.value),ye(a.default)):null)}return Ce(H),Object.assign(h,{focus:P,updatePosition:k}),ae}});const Je={xs:8,sm:10,md:14,lg:20,xl:24};var at=G({name:"QChip",props:q(u(u({},Y),Te),{dense:Boolean,icon:String,iconRight:String,iconRemove:String,iconSelected:String,label:[String,Number],color:String,textColor:String,modelValue:{type:Boolean,default:!0},selected:{type:Boolean,default:null},square:Boolean,outline:Boolean,clickable:Boolean,removable:Boolean,tabindex:[String,Number],disable:Boolean,ripple:{type:[Boolean,Object],default:!0}}),emits:["update:modelValue","update:selected","remove","click"],setup(e,{slots:a,emit:n}){const{proxy:{$q:d}}=J(),f=Z(e,d),m=Be(e,Je),v=l(()=>e.selected===!0||e.icon!==void 0),b=l(()=>e.selected===!0?e.iconSelected||d.iconSet.chip.selected:e.icon),S=l(()=>e.iconRemove||d.iconSet.chip.remove),h=l(()=>e.disable===!1&&(e.clickable===!0||e.selected!==null)),c=l(()=>{const o=e.outline===!0&&e.color||e.textColor;return"q-chip row inline no-wrap items-center"+(e.outline===!1&&e.color!==void 0?` bg-${e.color}`:"")+(o?` text-${o} q-chip--colored`:"")+(e.disable===!0?" disabled":"")+(e.dense===!0?" q-chip--dense":"")+(e.outline===!0?" q-chip--outline":"")+(e.selected===!0?" q-chip--selected":"")+(h.value===!0?" q-chip--clickable cursor-pointer non-selectable q-hoverable":"")+(e.square===!0?" q-chip--square":"")+(f.value===!0?" q-chip--dark q-dark":"")}),i=l(()=>e.disable===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:e.tabindex||0});function s(o){o.keyCode===13&&C(o)}function C(o){e.disable||(n("update:selected",!e.selected),n("click",o))}function y(o){(o.keyCode===void 0||o.keyCode===13)&&(X(o),e.disable===!1&&(n("update:modelValue",!1),n("remove")))}function T(){const o=[];h.value===!0&&o.push(r("div",{class:"q-focus-helper"})),v.value===!0&&o.push(r(R,{class:"q-chip__icon q-chip__icon--left",name:b.value}));const x=e.label!==void 0?[r("div",{class:"ellipsis"},[e.label])]:void 0;return o.push(r("div",{class:"q-chip__content col row no-wrap items-center q-anchor--skip"},_e(a.default,x))),e.iconRight&&o.push(r(R,{class:"q-chip__icon q-chip__icon--right",name:e.iconRight})),e.removable===!0&&o.push(r(R,q(u({class:"q-chip__icon q-chip__icon--remove cursor-pointer",name:S.value},i.value),{onClick:y,onKeyup:y}))),o}return()=>{if(e.modelValue===!1)return;const o={class:c.value,style:m.value};return h.value===!0&&Object.assign(o,i.value,{onClick:C,onKeyup:s}),Pe("div",o,T(),"ripple",e.ripple!==!1&&e.disable!==!0,()=>[[Oe,e.ripple]])}}});export{nt as Q,at as a};
