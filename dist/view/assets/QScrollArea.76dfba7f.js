var pe=Object.defineProperty,ze=Object.defineProperties;var Se=Object.getOwnPropertyDescriptors;var Y=Object.getOwnPropertySymbols;var ge=Object.prototype.hasOwnProperty,ye=Object.prototype.propertyIsEnumerable;var k=(a,n,i)=>n in a?pe(a,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):a[n]=i,y=(a,n)=>{for(var i in n||(n={}))ge.call(n,i)&&k(a,i,n[i]);if(Y)for(var i of Y(n))ye.call(n,i)&&k(a,i,n[i]);return a},M=(a,n)=>ze(a,Se(n));import{u as Ce,a as _e}from"./use-dark.f89e8300.js";import{g as V,s as R,Q as N}from"./touch.1d111f56.js";import{a as te,w as qe,o as Pe,L as le,Z as ae,g as oe,aa as Ee,a1 as Me,a2 as _,a3 as Te,a4 as T,a5 as A,ab as K,ac as O,p as F,a6 as D,V as we,r as p,c as m,ad as Ae,$ as Oe,a0 as De,h as S,W as He,e as U}from"./index.e18600f8.js";import{g as je,a as Fe,b as xe,s as I,c as W}from"./use-prevent-scroll.d4f2a0d7.js";import{c as Be}from"./QList.68ba6ad8.js";import{b as w}from"./uid.81432f81.js";const{passive:Z}=Ee,Le=["both","horizontal","vertical"];var $e=te({name:"QScrollObserver",props:{axis:{type:String,validator:a=>Le.includes(a),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(a,{emit:n}){const i={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let v=null,e,l;qe(()=>a.scrollTarget,()=>{d(),t()});function r(){v!==null&&v();const b=Math.max(0,Fe(e)),h=xe(e),f={top:b-i.position.top,left:h-i.position.left};if(a.axis==="vertical"&&f.top===0||a.axis==="horizontal"&&f.left===0)return;const g=Math.abs(f.top)>=Math.abs(f.left)?f.top<0?"up":"down":f.left<0?"left":"right";i.position={top:b,left:h},i.directionChanged=i.direction!==g,i.delta=f,i.directionChanged===!0&&(i.direction=g,i.inflectionPoint=i.position),n("scroll",y({},i))}function t(){e=je(l,a.scrollTarget),e.addEventListener("scroll",s,Z),s(!0)}function d(){e!==void 0&&(e.removeEventListener("scroll",s,Z),e=void 0)}function s(b){if(b===!0||a.debounce===0||a.debounce==="0")r();else if(v===null){const[h,f]=a.debounce?[setTimeout(r,a.debounce),clearTimeout]:[requestAnimationFrame(r),cancelAnimationFrame];v=()=>{f(h),v=null}}}const z=oe();return Pe(()=>{l=z.proxy.$el.parentNode,t()}),le(()=>{v!==null&&v(),d()}),Object.assign(z.proxy,{trigger:s,getPosition:()=>i}),ae}});function H(a,n,i){const v=F(a);let e,l=v.left-n.event.x,r=v.top-n.event.y,t=Math.abs(l),d=Math.abs(r);const s=n.direction;s.horizontal===!0&&s.vertical!==!0?e=l<0?"left":"right":s.horizontal!==!0&&s.vertical===!0?e=r<0?"up":"down":s.up===!0&&r<0?(e="up",t>d&&(s.left===!0&&l<0?e="left":s.right===!0&&l>0&&(e="right"))):s.down===!0&&r>0?(e="down",t>d&&(s.left===!0&&l<0?e="left":s.right===!0&&l>0&&(e="right"))):s.left===!0&&l<0?(e="left",t<d&&(s.up===!0&&r<0?e="up":s.down===!0&&r>0&&(e="down"))):s.right===!0&&l>0&&(e="right",t<d&&(s.up===!0&&r<0?e="up":s.down===!0&&r>0&&(e="down")));let z=!1;if(e===void 0&&i===!1){if(n.event.isFirst===!0||n.event.lastDir===void 0)return{};e=n.event.lastDir,z=!0,e==="left"||e==="right"?(v.left-=l,t=0,l=0):(v.top-=r,d=0,r=0)}return{synthetic:z,payload:{evt:a,touch:n.event.mouse!==!0,mouse:n.event.mouse===!0,position:v,direction:e,isFirst:n.event.isFirst,isFinal:i===!0,duration:Date.now()-n.event.time,distance:{x:t,y:d},offset:{x:l,y:r},delta:{x:v.left-n.event.lastX,y:v.top-n.event.lastY}}}}let Qe=0;var G=Me({name:"touch-pan",beforeMount(a,{value:n,modifiers:i}){if(i.mouse!==!0&&_.has.touch!==!0)return;function v(l,r){i.mouse===!0&&r===!0?we(l):(i.stop===!0&&O(l),i.prevent===!0&&K(l))}const e={uid:"qvtp_"+Qe++,handler:n,modifiers:i,direction:V(i),noop:ae,mouseStart(l){R(l,e)&&Te(l)&&(T(e,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),e.start(l,!0))},touchStart(l){if(R(l,e)){const r=l.target;T(e,"temp",[[r,"touchmove","move","notPassiveCapture"],[r,"touchcancel","end","passiveCapture"],[r,"touchend","end","passiveCapture"]]),e.start(l)}},start(l,r){if(_.is.firefox===!0&&A(a,!0),e.lastEvt=l,r===!0||i.stop===!0){if(e.direction.all!==!0&&(r!==!0||e.modifiers.mouseAllDir!==!0)){const s=l.type.indexOf("mouse")>-1?new MouseEvent(l.type,l):new TouchEvent(l.type,l);l.defaultPrevented===!0&&K(s),l.cancelBubble===!0&&O(s),Object.assign(s,{qKeyEvent:l.qKeyEvent,qClickOutside:l.qClickOutside,qAnchorHandled:l.qAnchorHandled,qClonedBy:l.qClonedBy===void 0?[e.uid]:l.qClonedBy.concat(e.uid)}),e.initialEvent={target:l.target,event:s}}O(l)}const{left:t,top:d}=F(l);e.event={x:t,y:d,time:Date.now(),mouse:r===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:t,lastY:d}},move(l){if(e.event===void 0)return;const r=F(l),t=r.left-e.event.x,d=r.top-e.event.y;if(t===0&&d===0)return;e.lastEvt=l;const s=e.event.mouse===!0,z=()=>{v(l,s),i.preserveCursor!==!0&&(document.documentElement.style.cursor="grabbing"),s===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Be(),e.styleCleanup=f=>{if(e.styleCleanup=void 0,i.preserveCursor!==!0&&(document.documentElement.style.cursor=""),document.body.classList.remove("non-selectable"),s===!0){const g=()=>{document.body.classList.remove("no-pointer-events--children")};f!==void 0?setTimeout(()=>{g(),f()},50):g()}else f!==void 0&&f()}};if(e.event.detected===!0){e.event.isFirst!==!0&&v(l,e.event.mouse);const{payload:f,synthetic:g}=H(l,e,!1);f!==void 0&&(e.handler(f)===!1?e.end(l):(e.styleCleanup===void 0&&e.event.isFirst===!0&&z(),e.event.lastX=f.position.left,e.event.lastY=f.position.top,e.event.lastDir=g===!0?void 0:f.direction,e.event.isFirst=!1));return}if(e.direction.all===!0||s===!0&&e.modifiers.mouseAllDir===!0){z(),e.event.detected=!0,e.move(l);return}const b=Math.abs(t),h=Math.abs(d);b!==h&&(e.direction.horizontal===!0&&b>h||e.direction.vertical===!0&&b<h||e.direction.up===!0&&b<h&&d<0||e.direction.down===!0&&b<h&&d>0||e.direction.left===!0&&b>h&&t<0||e.direction.right===!0&&b>h&&t>0?(e.event.detected=!0,e.move(l)):e.end(l,!0))},end(l,r){if(e.event!==void 0){if(D(e,"temp"),_.is.firefox===!0&&A(a,!1),r===!0)e.styleCleanup!==void 0&&e.styleCleanup(),e.event.detected!==!0&&e.initialEvent!==void 0&&e.initialEvent.target.dispatchEvent(e.initialEvent.event);else if(e.event.detected===!0){e.event.isFirst===!0&&e.handler(H(l===void 0?e.lastEvt:l,e).payload);const{payload:t}=H(l===void 0?e.lastEvt:l,e,!0),d=()=>{e.handler(t)};e.styleCleanup!==void 0?e.styleCleanup(d):d()}e.event=void 0,e.initialEvent=void 0,e.lastEvt=void 0}}};a.__qtouchpan=e,i.mouse===!0&&T(e,"main",[[a,"mousedown","mouseStart",`passive${i.mouseCapture===!0?"Capture":""}`]]),_.has.touch===!0&&T(e,"main",[[a,"touchstart","touchStart",`passive${i.capture===!0?"Capture":""}`],[a,"touchmove","noop","notPassiveCapture"]])},updated(a,n){const i=a.__qtouchpan;i!==void 0&&(n.oldValue!==n.value&&(typeof value!="function"&&i.end(),i.handler=n.value),i.direction=V(n.modifiers))},beforeUnmount(a){const n=a.__qtouchpan;n!==void 0&&(n.event!==void 0&&n.end(),D(n,"main"),D(n,"temp"),_.is.firefox===!0&&A(a,!1),n.styleCleanup!==void 0&&n.styleCleanup(),delete a.__qtouchpan)}});const J=["vertical","horizontal"],j={vertical:{offset:"offsetY",scroll:"scrollTop",dir:"down",dist:"y"},horizontal:{offset:"offsetX",scroll:"scrollLeft",dir:"right",dist:"x"}},ee={prevent:!0,mouse:!0,mouseAllDir:!0};var Ue=te({name:"QScrollArea",props:M(y({},Ce),{thumbStyle:Object,verticalThumbStyle:Object,horizontalThumbStyle:Object,barStyle:[Array,String,Object],verticalBarStyle:[Array,String,Object],horizontalBarStyle:[Array,String,Object],contentStyle:[Array,String,Object],contentActiveStyle:[Array,String,Object],delay:{type:[String,Number],default:1e3},visible:{type:Boolean,default:null},tabindex:[String,Number],onScroll:Function}),setup(a,{slots:n,emit:i}){const v=p(!1),e=p(!1),l=p(!1),r={vertical:p(0),horizontal:p(0)},t={vertical:{ref:p(null),position:p(0),size:p(0)},horizontal:{ref:p(null),position:p(0),size:p(0)}},d=oe(),s=_e(a,d.proxy.$q);let z,b;const h=p(null),f=m(()=>"q-scrollarea"+(s.value===!0?" q-scrollarea--dark":""));t.vertical.percentage=m(()=>{const o=t.vertical.size.value-r.vertical.value;if(o<=0)return 0;const u=w(t.vertical.position.value/o,0,1);return Math.round(u*1e4)/1e4}),t.vertical.thumbHidden=m(()=>(a.visible===null?l.value:a.visible)!==!0&&v.value===!1&&e.value===!1||t.vertical.size.value<=r.vertical.value+1),t.vertical.thumbStart=m(()=>t.vertical.percentage.value*(r.vertical.value-t.vertical.thumbSize.value)),t.vertical.thumbSize=m(()=>Math.round(w(r.vertical.value*r.vertical.value/t.vertical.size.value,50,r.vertical.value))),t.vertical.style=m(()=>M(y(y({},a.thumbStyle),a.verticalThumbStyle),{top:`${t.vertical.thumbStart.value}px`,height:`${t.vertical.thumbSize.value}px`})),t.vertical.thumbClass=m(()=>"q-scrollarea__thumb q-scrollarea__thumb--v absolute-right"+(t.vertical.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),t.vertical.barClass=m(()=>"q-scrollarea__bar q-scrollarea__bar--v absolute-right"+(t.vertical.thumbHidden.value===!0?" q-scrollarea__bar--invisible":"")),t.horizontal.percentage=m(()=>{const o=t.horizontal.size.value-r.horizontal.value;if(o<=0)return 0;const u=w(t.horizontal.position.value/o,0,1);return Math.round(u*1e4)/1e4}),t.horizontal.thumbHidden=m(()=>(a.visible===null?l.value:a.visible)!==!0&&v.value===!1&&e.value===!1||t.horizontal.size.value<=r.horizontal.value+1),t.horizontal.thumbStart=m(()=>t.horizontal.percentage.value*(r.horizontal.value-t.horizontal.thumbSize.value)),t.horizontal.thumbSize=m(()=>Math.round(w(r.horizontal.value*r.horizontal.value/t.horizontal.size.value,50,r.horizontal.value))),t.horizontal.style=m(()=>M(y(y({},a.thumbStyle),a.horizontalThumbStyle),{left:`${t.horizontal.thumbStart.value}px`,width:`${t.horizontal.thumbSize.value}px`})),t.horizontal.thumbClass=m(()=>"q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom"+(t.horizontal.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),t.horizontal.barClass=m(()=>"q-scrollarea__bar q-scrollarea__bar--h absolute-bottom"+(t.horizontal.thumbHidden.value===!0?" q-scrollarea__bar--invisible":""));const g=m(()=>t.vertical.thumbHidden.value===!0&&t.horizontal.thumbHidden.value===!0?a.contentStyle:a.contentActiveStyle),re=[[G,o=>{$(o,"vertical")},void 0,y({vertical:!0},ee)]],ie=[[G,o=>{$(o,"horizontal")},void 0,y({horizontal:!0},ee)]];function x(){const o={};return J.forEach(u=>{const c=t[u];o[u+"Position"]=c.position.value,o[u+"Percentage"]=c.percentage.value,o[u+"Size"]=c.size.value,o[u+"ContainerSize"]=r[u].value}),o}const B=Ae(()=>{const o=x();o.ref=d.proxy,i("scroll",o)},0);function L(o,u,c){if(J.includes(o)===!1){console.error("[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)");return}(o==="vertical"?I:W)(h.value,u,c)}function ne({height:o,width:u}){let c=!1;r.vertical.value!==o&&(r.vertical.value=o,c=!0),r.horizontal.value!==u&&(r.horizontal.value=u,c=!0),c===!0&&q()}function ue({position:o}){let u=!1;t.vertical.position.value!==o.top&&(t.vertical.position.value=o.top,u=!0),t.horizontal.position.value!==o.left&&(t.horizontal.position.value=o.left,u=!0),u===!0&&q()}function se({height:o,width:u}){t.horizontal.size.value!==u&&(t.horizontal.size.value=u,q()),t.vertical.size.value!==o&&(t.vertical.size.value=o,q())}function $(o,u){const c=t[u];if(o.isFirst===!0){if(c.thumbHidden.value===!0)return;b=c.position.value,e.value=!0}else if(e.value!==!0)return;o.isFinal===!0&&(e.value=!1);const C=j[u],E=r[u].value,he=(c.size.value-E)/(E-c.thumbSize.value),me=o.distance[C.dist],be=b+(o.direction===C.dir?1:-1)*me*he;X(be,u)}function Q(o,u){const c=t[u];if(c.thumbHidden.value!==!0){const C=o[j[u].offset];if(C<c.thumbStart.value||C>c.thumbStart.value+c.thumbSize.value){const E=C-c.thumbSize.value/2;X(E/r[u].value*c.size.value,u)}c.ref.value!==null&&c.ref.value.dispatchEvent(new MouseEvent(o.type,o))}}function ce(o){Q(o,"vertical")}function ve(o){Q(o,"horizontal")}function q(){v.value===!0?clearTimeout(z):v.value=!0,z=setTimeout(()=>{v.value=!1},a.delay),a.onScroll!==void 0&&B()}function X(o,u){h.value[j[u].scroll]=o}function de(){l.value=!0}function fe(){l.value=!1}Object.assign(d.proxy,{getScrollTarget:()=>h.value,getScroll:x,getScrollPosition:()=>({top:t.vertical.position.value,left:t.horizontal.position.value}),getScrollPercentage:()=>({top:t.vertical.percentage.value,left:t.horizontal.percentage.value}),setScrollPosition:L,setScrollPercentage(o,u,c){L(o,u*(t[o].size.value-r[o].value),c)}});let P=null;return Oe(()=>{P={top:t.vertical.position.value,left:t.horizontal.position.value}}),De(()=>{if(P===null)return;const o=h.value;o!==null&&(W(o,P.left),I(o,P.top))}),le(B.cancel),()=>S("div",{class:f.value,onMouseenter:de,onMouseleave:fe},[S("div",{ref:h,class:"q-scrollarea__container scroll relative-position fit hide-scrollbar",tabindex:a.tabindex!==void 0?a.tabindex:void 0},[S("div",{class:"q-scrollarea__content absolute",style:g.value},He(n.default,[S(N,{debounce:0,onResize:se})])),S($e,{axis:"both",onScroll:ue})]),S(N,{debounce:0,onResize:ne}),S("div",{class:t.vertical.barClass.value,style:[a.barStyle,a.verticalBarStyle],"aria-hidden":"true",onMousedown:ce}),S("div",{class:t.horizontal.barClass.value,style:[a.barStyle,a.horizontalBarStyle],"aria-hidden":"true",onMousedown:ve}),U(S("div",{ref:t.vertical.ref,class:t.vertical.thumbClass.value,style:t.vertical.style.value,"aria-hidden":"true"}),re),U(S("div",{ref:t.horizontal.ref,class:t.horizontal.thumbClass.value,style:t.horizontal.style.value,"aria-hidden":"true"}),ie)])}});export{Ue as Q,G as T,$e as a};
