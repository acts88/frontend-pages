(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,48271,e=>{"use strict";var t=e.i(9735);e.i(3159);var n=e.i(46907),i=e.i(7744),l=e.i(43174),o=e.i(7665),a=e.i(4153);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var d=(0,i.forwardRef)(function(e,t){var n=e.color,l=e.size,o=void 0===l?24:l,a=function(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["color","size"]);return i.default.createElement("svg",r({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),i.default.createElement("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),i.default.createElement("circle",{cx:"12",cy:"12",r:"3"}))});function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}d.propTypes={color:a.default.string,size:a.default.oneOfType([a.default.string,a.default.number])},d.displayName="Eye";var c=(0,i.forwardRef)(function(e,t){var n=e.color,l=e.size,o=void 0===l?24:l,a=function(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["color","size"]);return i.default.createElement("svg",s({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),i.default.createElement("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"}),i.default.createElement("line",{x1:"1",y1:"1",x2:"23",y2:"23"}))});c.propTypes={color:a.default.string,size:a.default.oneOfType([a.default.string,a.default.number])},c.displayName="EyeOff";var f=e.i(22803),h=e.i(25521);let u=(0,n.observer)(function(){let{loginId:e,setLoginId:n,loginIdErrMsg:a,password:r,setPassword:s,isShowPwd:f,setIsShowPwd:u,pwdErrMsg:k,login:E}=l.default.auth.login,[T,S]=(0,i.useState)(!1),$=(0,i.useRef)(null),O=(0,i.useRef)(!1),L=(0,i.useRef)(null),A=(0,i.useRef)(null),R=e=>{let t=e.getModifierState("CapsLock");t!==O.current&&(O.current=t,t&&l.default.ui.layout.toast.info("Caps Lock이 켜져 있습니다.",void 0,$.current))};return(0,i.useEffect)(()=>{L.current?.focus()},[]),(0,t.jsx)(p,{children:(0,t.jsxs)(x,{ref:$,children:[(0,t.jsxs)(g,{children:[(0,t.jsx)(o.default,{src:`${h.default.env.PUBLIC_PATH}/icon/logo-symbol.svg`,width:1,height:1,style:{width:85,height:"auto"},loading:"eager",alt:"Logo"}),(0,t.jsxs)(m,{children:[(0,t.jsx)(b,{children:"자이언 허브"}),(0,t.jsx)(w,{children:"기관용"})]})]}),(0,t.jsxs)(y,{children:[(0,t.jsxs)(v,{$error:null!==a,$hasValue:e.length>0,children:[(0,t.jsx)(j,{$error:null!==a,children:"아이디"}),(0,t.jsx)(_,{ref:L,value:e,onChange:e=>n(e.target.value),placeholder:"영문 아이디"})]}),null!==a?(0,t.jsx)(z,{children:a}):null,(0,t.jsxs)(v,{$error:null!==k,$hasValue:r.length>0,children:[(0,t.jsx)(j,{$error:null!==k,children:"비밀번호"}),(0,t.jsx)(_,{ref:A,type:f?"text":"password",value:r,onChange:e=>s(e.target.value),onFocus:()=>S(!0),onBlur:()=>{S(!1),O.current=!1},onKeyDown:e=>{R(e),"Enter"===e.key&&E()},onKeyUp:e=>{R(e)},placeholder:"영문,숫자,특수문자"}),(0,t.jsx)(C,{type:"button",$active:T,$error:null!==k,onClick:()=>u(!f),onFocus:()=>S(!0),onBlur:()=>S(!1),children:f?(0,t.jsx)(d,{size:24}):(0,t.jsx)(c,{size:24})})]}),null!==k?(0,t.jsx)(z,{children:k}):null,(0,t.jsx)(I,{type:"button",onClick:()=>void E(),children:"로그인"})]})]})})}),p=f.default.main.withConfig({componentId:"zh__sc-9eaa5006-0"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;
`,x=f.default.div.withConfig({componentId:"zh__sc-9eaa5006-1"})`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 48px;

  width: 375px;
`,g=f.default.div.withConfig({componentId:"zh__sc-9eaa5006-2"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,m=f.default.div.withConfig({componentId:"zh__sc-9eaa5006-3"})`
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 30px;
  font-weight: 700;
  line-height: 1;
`,b=f.default.span.withConfig({componentId:"zh__sc-9eaa5006-4"})`
  color: #1c1d22;
`,w=f.default.span.withConfig({componentId:"zh__sc-9eaa5006-5"})`
  color: #4f39f6;
`,y=f.default.div.withConfig({componentId:"zh__sc-9eaa5006-6"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,j=f.default.span.withConfig({componentId:"zh__sc-9eaa5006-7"})`
  flex-shrink: 0;

  width: 105px;

  font-size: 20px;
  font-weight: 500;
  line-height: 1;
  color: ${({$error:e})=>!0===e?"#ff3b6b":"#6e7079"};
`,v=f.default.div.withConfig({componentId:"zh__sc-9eaa5006-8"})`
  display: flex;
  gap: 16px;
  align-items: center;

  box-sizing: border-box;
  height: 55px;
  padding: 8px 16px;
  border: 1px solid
    ${({$error:e,$hasValue:t})=>!0===e?"#ff003e":!0===t?"#45464e":"#ced0d9"};
  border-radius: 8px;

  &:focus-within {
    border-color: #4f39f6;
  }

  &:focus-within ${j} {
    color: #4f39f6;
  }
`,_=f.default.input.withConfig({componentId:"zh__sc-9eaa5006-9"})`
  flex: 1;

  min-width: 0;
  border: none;

  font-size: 20px;
  font-weight: 400;
  color: #1c1d22;

  background: transparent;
  outline: none;

  /* Hide native password reveal controls (e.g., Edge/IE) */
  &::-ms-reveal {
    display: none;
  }

  &::placeholder {
    color: #ced0d9;
  }
`,C=f.default.button.withConfig({componentId:"zh__sc-9eaa5006-10"})`
  cursor: pointer;

  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;

  padding: 0;
  border: none;

  color: ${({$active:e,$error:t})=>!0===e?"#4f39f6":!0===t?"#ff3b6b":"#ced0d9"};

  background: none;
`,z=f.default.div.withConfig({componentId:"zh__sc-9eaa5006-11"})`
  font-size: 12px;
  color: #ff3b6b;
`,I=f.default.button.withConfig({componentId:"zh__sc-9eaa5006-12"})`
  cursor: pointer;

  width: 100%;
  height: 55px;
  border: none;
  border-radius: 8px;

  font-size: 20px;
  font-weight: 500;
  color: white;

  background: #a49af6;

  &:hover {
    background: #9183fa;
  }
`,k=(0,n.observer)(({children:e})=>{let{isAuthed:n}=l.default.auth,[o,a]=(0,i.useState)(!0);return((0,i.useEffect)(()=>{let e=!0;return(async()=>{await l.default.auth.restoreSession(),e&&a(!1)})(),()=>{e=!1}},[]),o)?null:(0,t.jsx)(t.Fragment,{children:n?e:(0,t.jsx)(u,{})})});e.s(["default",0,k],48271)},47753,e=>{"use strict";var t=e.i(9735),n=e.i(7744),i=e.i(22803),l=e.i(43174);let o=i.default.div.withConfig({componentId:"zh__sc-914b0b37-0"})`
  position: relative;

  display: flex;

  width: 100%;
  min-height: 100vh;

  background-color: #f9fafb;
`;e.s(["default",0,function({children:e}){let i=(0,n.useRef)(null);return(0,n.useEffect)(()=>(l.default.ui.layout.setAppContainer(i.current),()=>{l.default.ui.layout.setAppContainer(null)}),[]),(0,t.jsx)(o,{ref:i,children:e})}])},56655,69477,e=>{"use strict";var t=e.i(7744),n=e.i(4153);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var l=(0,t.forwardRef)(function(e,n){var l=e.color,o=e.size,a=void 0===o?24:o,r=function(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["color","size"]);return t.default.createElement("svg",i({ref:n,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:void 0===l?"currentColor":l,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},r),t.default.createElement("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),t.default.createElement("circle",{cx:"12",cy:"7",r:"4"}))});function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}l.propTypes={color:n.default.string,size:n.default.oneOfType([n.default.string,n.default.number])},l.displayName="User",e.s(["User",0,l],56655);var a=(0,t.forwardRef)(function(e,n){var i=e.color,l=e.size,a=void 0===l?24:l,r=function(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["color","size"]);return t.default.createElement("svg",o({ref:n,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:void 0===i?"currentColor":i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},r),t.default.createElement("polyline",{points:"23 4 23 10 17 10"}),t.default.createElement("path",{d:"M20.49 15a9 9 0 1 1-2.12-9.36L23 10"}))});a.propTypes={color:n.default.string,size:n.default.oneOfType([n.default.string,n.default.number])},a.displayName="RotateCw",e.s(["RotateCw",0,a],69477)},73060,e=>{"use strict";var t=e.i(9735);e.i(3159);var n=e.i(46907),i=e.i(7744),l=e.i(15695),o=e.i(69477),a=e.i(56655),r=e.i(22803),d=e.i(64954),s=e.i(43174);let c=(0,n.observer)(function(){let{oldestSyncedAt:e,refetchAll:n}=s.default.ui.layout.header,{meNameWithPosition:r,logout:d}=s.default.auth,[c,y]=(0,i.useState)(()=>new Date),[j,v]=(0,i.useState)("idle"),_=(()=>{if(null===e)return null;let t=Math.max(0,Math.floor((c.getTime()-e.getTime())/1e3/60)),n=Math.floor(t/60);return t<60?`오늘 ${t}분 전 최신정보`:`오늘 ${n}시간 전 최신정보`})();(0,i.useEffect)(()=>{if(null===e)return;let t=window.setInterval(()=>{y(new Date)},6e4);return()=>{window.clearInterval(t)}},[e]),(0,i.useEffect)(()=>{if("completed"!==j)return;let e=window.setTimeout(()=>{v("idle")},2e3);return()=>{window.clearTimeout(e)}},[j]);let C=async()=>{v("loading");try{await n(),v("completed")}catch{v("idle")}},z=(()=>{switch(j){case"idle":default:return null;case"loading":return(0,t.jsx)(o.RotateCw,{size:15});case"completed":return(0,t.jsx)(l.Check,{size:20})}})(),I=(()=>{switch(j){case"idle":default:return"최신 정보로 업데이트하기";case"loading":return"업데이트 중";case"completed":return"업데이트 완료"}})(),k=null===e||"idle"!==j;return(0,t.jsxs)(f,{children:[(0,t.jsxs)(h,{children:[null===_?null:(0,t.jsx)(u,{children:_}),(0,t.jsxs)(p,{$status:"loading"===j?"processing":"completed"===j?"success":void 0,onClick:k?void 0:()=>void C(),disabled:k,children:[z,I]})]}),(0,t.jsxs)(x,{children:[null===r?null:(0,t.jsxs)(g,{children:[(0,t.jsx)(m,{children:(0,t.jsx)(a.User,{size:20,color:"#ff6900"})}),(0,t.jsx)(b,{children:r})]}),(0,t.jsx)(w,{onClick:()=>{d()},children:"로그아웃"})]})]})}),f=r.default.div.withConfig({componentId:"zh__sc-bc883191-0"})`
  display: flex;
  gap: 40px;
  align-items: center;
  justify-content: flex-end;

  height: 64px;
  padding: 10px 24px;
  border: 1px solid #e5e7eb;
  border-top: none;
  border-left: none;

  background: #fff;
`,h=r.default.div.withConfig({componentId:"zh__sc-bc883191-1"})`
  display: flex;
  gap: 12px;
  align-items: center;
  height: 36px;
`,u=r.default.div.withConfig({componentId:"zh__sc-bc883191-2"})`
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px;
  color: #4a5565;
  letter-spacing: -0.076px;
`,p=(0,r.default)(d.default.Button.Outlined).withConfig({componentId:"zh__sc-bc883191-3"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;
  justify-content: center;

  width: 203px;
  padding: 8px 16px;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px;
  text-align: center;
`,x=r.default.div.withConfig({componentId:"zh__sc-bc883191-4"})`
  display: flex;
  gap: 16px;
  align-items: center;
`,g=r.default.div.withConfig({componentId:"zh__sc-bc883191-5"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,m=r.default.div.withConfig({componentId:"zh__sc-bc883191-6"})`
  display: flex;
  align-items: center;
  justify-content: center;

  aspect-ratio: 1/1;
  width: 32px;
  height: 32px;
  padding: 0 6px;
  border-radius: 999px;

  background: #fff4ed;
`,b=r.default.div.withConfig({componentId:"zh__sc-bc883191-7"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: 20px;
  color: #1c1d22;
`,w=(0,r.default)(d.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-bc883191-8"})`
  display: flex;
  gap: 10px;
  align-items: center;
  align-self: stretch;

  padding: 8px 16px;

  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: 20px;
  text-align: center;
`;e.s(["default",0,c])},79109,e=>{"use strict";var t=e.i(9735);e.i(3159);var n=e.i(46907),i=e.i(7744),l=e.i(43174),o=e.i(26170);let a=(0,n.observer)(function(){let{isLoading:e}=l.default.api,[n,a]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{if(!e)return;let t=window.setTimeout(()=>{a(!0)},1e3);return()=>{a(!1),window.clearTimeout(t)}},[e]),e&&n?(0,t.jsx)(o.default,{isLoading:!0,children:null}):null});e.s(["default",0,a])},55357,e=>{"use strict";var t=e.i(9735);e.i(3159);var n=e.i(46907),i=e.i(7744),l=e.i(22803),o=e.i(43174),a=e.i(26170),r=e.i(33261),d=e.i(15695),s=e.i(64954);let c=(0,n.observer)(function(){let e=(0,r.useRouter)(),{clientDraft:n,isSaving:i,resetToUploadStep:l,saveClientDraft:a}=o.default.modal.clientCreate,{currentServiceType:s,setSelectedClientId:c,resetSort:h}=o.default.client.info.byClient,x=async()=>{let t=n?.serviceType,i=await a();if(null===i)return;let l=i.serviceType??t??null;if(null!==l){s===l&&(h(),o.default.data.contract.list.refetch());let t=(()=>{switch(l){case"MEAL":return"meal";case"NUTRITION":return"nutrition";default:return"unknown"}})();e.push(`/client/info/by-client/${t}/basic`)}"string"==typeof i.clientId&&i.clientId.length>0&&c(i.clientId)};return(0,t.jsxs)(f,{children:[(0,t.jsx)(u,{disabled:!n||i,onClick:l,children:"다시 업로드하기"}),(0,t.jsxs)(p,{disabled:!n||i,onClick:()=>void x(),children:[(0,t.jsx)(d.Check,{size:16}),"최종확인 및 저장"]})]})}),f=l.default.div.withConfig({componentId:"zh__sc-759c17e6-0"})`
  display: flex;
  gap: 16px;
  align-items: center;
  align-self: stretch;
  justify-content: flex-end;

  padding: 16px;
  border-top: 1px solid #e5e7eb;
`,h=l.css`
  display: flex;
  gap: 10px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,u=(0,l.default)(s.default.Button.Outlined).withConfig({componentId:"zh__sc-759c17e6-1"})`
  ${h}
`,p=(0,l.default)(s.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-759c17e6-2"})`
  ${h}
`;var x=e.i(74515),g=e.i(4153);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var b=(0,i.forwardRef)(function(e,t){var n=e.color,l=e.size,o=void 0===l?24:l,a=function(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["color","size"]);return i.default.createElement("svg",m({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),i.default.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),i.default.createElement("polyline",{points:"12 5 19 12 12 19"}))});b.propTypes={color:g.default.string,size:g.default.oneOfType([g.default.string,g.default.number])},b.displayName="ArrowRight";let w=(0,n.observer)(function(){let{analyzeSelectedFile:e,isAnalyzing:n,selectedFile:i}=o.default.modal.clientCreate;return(0,t.jsx)(y,{children:(0,t.jsxs)(j,{disabled:null===i||n,onClick:()=>{e()},children:["분석 시작",(0,t.jsx)(b,{size:16})]})})}),y=l.default.div.withConfig({componentId:"zh__sc-d7f6cfb5-0"})`
  display: flex;
  gap: 10px;
  align-self: stretch;
  justify-content: flex-end;
`,j=(0,l.default)(s.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-d7f6cfb5-1"})`
  display: flex;
  flex-shrink: 0;
  gap: 10px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`;var v=e.i(8179),_=e.i(98273),C=e.i(25521);let{FILE_EXTENSION_WHITELIST_BY_GROUP:z}=C.default.file,I=(0,n.observer)(function(){var e;let n,{clearSelectedFile:i,selectedFile:l,isAnalyzing:a}=o.default.modal.clientCreate;if(null===l)return null;let r=-1===(n=(e=l.name).lastIndexOf("."))?"":e.slice(n).toLowerCase();return(0,t.jsx)(k,{children:(0,t.jsxs)(E,{children:[(0,t.jsxs)(T,{children:[(0,t.jsx)(S,{children:z.IMAGE.some(e=>e===r)?(0,t.jsx)(_.default.Photo,{size:17,color:"#FA8E43"}):z.AUDIO.some(e=>e===r)?(0,t.jsx)(_.default.SpeechToText,{size:17,color:"#A855F7"}):z.DOCUMENT.some(e=>e===r)?(0,t.jsx)(_.default.News,{size:17,color:"#2264E8"}):null}),(0,t.jsx)($,{children:(0,t.jsx)(O,{children:l.name})})]}),(0,t.jsxs)(L,{onClick:i,disabled:a,children:["삭제",(0,t.jsx)(v.X,{size:16})]})]},`${l.name}-${l.size}-${l.lastModified}`)})}),k=l.default.div.withConfig({componentId:"zh__sc-8227d071-0"})`
  overflow: auto hidden;
  display: flex;
  gap: 12px;
  align-items: flex-start;

  width: 100%;
  min-width: 0;
  padding-bottom: 6px;

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 999px;
    background: #d1d5db;
  }
`,E=l.default.div.withConfig({componentId:"zh__sc-8227d071-1"})`
  display: flex;
  flex-shrink: 0;
  gap: 24px;
  align-items: center;

  padding: 12px 16px;
  border-radius: 8px;

  background: #f6f8fb;
`,T=l.default.div.withConfig({componentId:"zh__sc-8227d071-2"})`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`,S=l.default.div.withConfig({componentId:"zh__sc-8227d071-3"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;
  border-radius: 4px;

  background: #fff;
`,$=l.default.div.withConfig({componentId:"zh__sc-8227d071-4"})`
  display: flex;
  align-items: center;
  align-self: stretch;

  width: 196px;
  height: 40px;

  color: #0a0a0a;
`,O=l.default.div.withConfig({componentId:"zh__sc-8227d071-5"})`
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #0a0a0a;
`,L=l.default.button.withConfig({componentId:"zh__sc-8227d071-6"})`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;

  padding: 8px;
  border: 1px solid #45464e;
  border-radius: 99px;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 16px; /* 100% */
  color: #0a0a0a;
  letter-spacing: -1px;

  background: #fff;

  &:hover {
    background: #f9fafb;
  }

  &:active {
    background: #f3f4f6;
  }

  &:disabled {
    border-color: #d1d5db;
    color: #9ca3af;
    background-color: #f9fafb;
  }
`;var A=e.i(24045),R=e.i(9454);function F(){let[e,n]=(0,i.useState)(0);return(0,i.useEffect)(()=>{let e=performance.now(),t=0,i=l=>{n(Math.min(100*(1-Math.exp(-((l-e)/1e3*.05))),98)),t=window.requestAnimationFrame(i)};return t=window.requestAnimationFrame(i),()=>{window.cancelAnimationFrame(t)}},[]),(0,t.jsx)(N,{children:(0,t.jsx)(D,{$progress:e})})}let N=l.default.div.withConfig({componentId:"zh__sc-aa649b54-0"})`
  overflow: hidden;
  display: flex;

  width: 362px;
  height: ${8}px;
  border-radius: 99px;

  background: #e6e0ff;
  background-color: #e5e2ff;
`,D=l.default.div.attrs(({$progress:e})=>({style:{transform:`scaleX(${e/100})`}})).withConfig({componentId:"zh__sc-aa649b54-1"})`
  transform-origin: left center;
  width: 100%;
  height: 100%;
  background-color: #5635ff;
`,M=(0,n.observer)(function(){let{isWindowFileDragging:e}=o.default.ui.layout,{selectedFile:n,isError:i,isAnalyzing:l,abortAnalyze:a}=o.default.modal.clientCreate,r=i?"지원하지 않는 파일 형식입니다.":e?"파일을 여기에 놓으면 업로드 됩니다.":l?"업로드한 파일을 분석하고 있습니다.":"이곳에 파일을 끌어다 놓거나 (드래그 앤 드롭), 클릭하여 업로드하세요.",d=null===n||l?"지원 파일 형식: 사진 이미지, 서류, 음성 녹음":"새 파일을 업로드하면 기존 파일이 교체됩니다.";return(0,t.jsxs)(B,{children:[null===n&&!i&&(0,t.jsx)(U,{children:(0,t.jsx)(A.Upload,{size:26,color:P[100]})}),(0,t.jsxs)(W,{children:[(0,t.jsx)(H,{$isError:i,children:r}),(0,t.jsx)(V,{children:d})]}),l&&(0,t.jsx)(F,{}),l&&(0,t.jsx)(Y,{onClick:a,children:"중단하기"})]})}),{PRIMARY:P}=R.default.style.color,B=l.default.div.withConfig({componentId:"zh__sc-47e9a3b3-0"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  align-self: stretch;
  justify-content: center;
`,U=l.default.div.withConfig({componentId:"zh__sc-47e9a3b3-1"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;
`,W=l.default.div.withConfig({componentId:"zh__sc-47e9a3b3-2"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  align-self: stretch;
  justify-content: center;
`,H=l.default.div.withConfig({componentId:"zh__sc-47e9a3b3-3"})`
  font-size: 14px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 142.857% */
  color: ${({$isError:e})=>e?"#ff4d4f":"#4f39f6"};
  text-align: center;
`,V=l.default.div.withConfig({componentId:"zh__sc-47e9a3b3-4"})`
  font-size: 14px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 142.857% */
  color: #99a1af;
`,Y=(0,l.default)(s.default.Button.Outlined).withConfig({componentId:"zh__sc-47e9a3b3-5"})`
  display: flex;
  gap: 10px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,G=(0,n.observer)(function(){let{isWindowFileDragging:e}=o.default.ui.layout,{acceptFileTypes:n,setSelectedFile:l,selectedFile:a,isError:r}=o.default.modal.clientCreate,d=(0,i.useRef)(null);return(0,x.default)(e=>{if(0===e.length)return;let t=e[0];void 0!==t&&l(t)}),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(X,{ref:d,type:"file",accept:n,onChange:e=>{let t=Array.from(e.target.files??[]);if(0===t.length)return;let n=t[0];void 0!==n&&(l(n),e.target.value="")}}),(0,t.jsxs)(K,{$isWindowFileDragging:e,onDragOver:e=>{e.preventDefault()},onDrop:e=>{e.preventDefault();let t=Array.from(e.dataTransfer.files);if(0===t.length)return;let n=t[0];void 0!==n&&l(n)},onClick:e=>{e.target instanceof HTMLElement&&(e.target.closest("button")||d.current?.click())},$isError:r,children:[null!==a&&(0,t.jsx)(I,{}),(0,t.jsx)(M,{}),(0,t.jsx)(w,{})]})]})}),X=l.default.input.withConfig({componentId:"zh__sc-35541df3-0"})`
  display: none;
`,K=l.default.div.withConfig({componentId:"zh__sc-35541df3-1"})`
  cursor: pointer;

  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  align-self: stretch;

  min-width: 0;
  padding: 24px 40px;
  border: 1px solid ${({$isError:e})=>e?"#ff4d4f":"#4f39f6"};
  border-style: ${({$isWindowFileDragging:e})=>e?"dashed":"solid"};
  border-radius: 16px;

  background: ${({$isWindowFileDragging:e,$isError:t})=>t?"#FFF5F5":e?"#f6f3ff":"#fff"};

  &:hover {
    background-color: ${({$isError:e})=>e?"#FFF5F5":"#f6f3ff"};
  }

  &:active {
    background-color: ${({$isError:e})=>e?"#FFF5F5":"#efeaff"};
  }
`,q=(0,n.observer)(function(){let{analyzedFile:e,mode:n}=o.default.modal.clientCreate;return(0,t.jsxs)(J,{$flex1:null===e,children:[null===e&&(0,t.jsx)(Q,{children:"renew"===n?"새로운 전자바우처 캡쳐 화면을 아래에 업로드하고, 다음 버튼을 클릭하세요.":"전자바우처 캡쳐 화면을 아래에 업로드하고, 다음 버튼을 클릭하세요."}),(0,t.jsx)(G,{})]})}),J=l.default.div.withConfig({componentId:"zh__sc-8fa7e82c-0"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-width: 0;

  ${({$flex1:e})=>!0===e&&`
    flex: 1;
  `}
`,Q=l.default.div.withConfig({componentId:"zh__sc-8fa7e82c-1"})`
  font-size: 18px;
  font-weight: 700;
  font-style: normal;
  line-height: 24px; /* 133.333% */
  color: #101828;
`;var Z=e.i(9670);let{FILE_EXTENSION_WHITELIST_BY_GROUP:ee}=C.default.file,et=(0,n.observer)(function(){var e;let n,{analyzedFile:l}=o.default.modal.clientCreate,{ref:a,fire:r}=(0,Z.default)();if((0,i.useEffect)(()=>{null!==l&&r()},[l,r]),null===l)return null;let d=-1===(n=(e=l.name).lastIndexOf("."))?"":e.slice(n).toLowerCase();return(0,t.jsxs)(en,{ref:a,children:[(0,t.jsxs)(ei,{children:[(0,t.jsxs)(el,{children:[(0,t.jsx)(_.default.FindInPage,{size:18}),"AI 문서 인식 완료"]}),(0,t.jsxs)(eo,{children:["업로드된 서류들에서 정보를 성공적으로 추출했습니다. ",(0,t.jsx)("br",{}),"우측의 [이용자 기본 정보]가 올바르게 연동되었는지 확인 후, [최종 확인] 버튼을 눌러주세요."]})]}),(0,t.jsxs)(ea,{children:[(0,t.jsxs)(er,{children:[(0,t.jsx)(_.default.CheckCircle,{size:18}),"분석 완료된 첨부 서류 (1건)"]}),(0,t.jsx)(ed,{children:(0,t.jsxs)(es,{children:[(0,t.jsxs)(ec,{children:[(0,t.jsx)(ef,{children:ee.IMAGE.some(e=>e===d)?(0,t.jsx)(_.default.Photo,{size:17,color:"#FA8E43"}):ee.AUDIO.some(e=>e===d)?(0,t.jsx)(_.default.SpeechToText,{size:17,color:"#A855F7"}):ee.DOCUMENT.some(e=>e===d)?(0,t.jsx)(_.default.News,{size:17,color:"#2264E8"}):null}),(0,t.jsx)(eh,{children:(0,t.jsx)(eu,{children:l.name})})]}),(0,t.jsx)(ep,{children:"추출 완료"})]},`${l.name}-${l.size}-${l.lastModified}`)})]})]})}),en=l.default.div.withConfig({componentId:"zh__sc-a40fcee8-0"})`
  overflow: hidden;
  display: flex;
  flex: 0 1 auto;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  align-self: stretch;

  min-height: 0;
  max-height: 100%;
  padding: 24px 40px;
  border-radius: 16px;

  background: #fff;
`,ei=l.default.div.withConfig({componentId:"zh__sc-a40fcee8-1"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  align-self: stretch;
`,el=l.default.div.withConfig({componentId:"zh__sc-a40fcee8-2"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #0a0a0a;
`,eo=l.default.div.withConfig({componentId:"zh__sc-a40fcee8-3"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;

  padding-left: 26px;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #0a0a0a;
`,ea=l.default.div.withConfig({componentId:"zh__sc-a40fcee8-4"})`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  align-self: stretch;

  min-height: 0;
`,er=l.default.div.withConfig({componentId:"zh__sc-a40fcee8-5"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #0a0a0a;
`,ed=l.default.div.withConfig({componentId:"zh__sc-a40fcee8-6"})`
  overflow-y: auto;
  display: flex;
  flex: 1 1 auto;
  flex-wrap: wrap;
  row-gap: 12px;
  place-content: flex-start space-between;
  align-items: flex-start;
  align-self: stretch;

  min-height: 0;
  max-height: 100%;
  padding-right: 4px;
`,es=l.default.div.withConfig({componentId:"zh__sc-a40fcee8-7"})`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 355px;
  height: 64px;
  padding: 12px 16px;
  border-radius: 8px;

  background: #f6f8fb;
`,ec=l.default.div.withConfig({componentId:"zh__sc-a40fcee8-8"})`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`,ef=l.default.div.withConfig({componentId:"zh__sc-a40fcee8-9"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;
  border-radius: 4px;

  background: #fff;
`,eh=l.default.div.withConfig({componentId:"zh__sc-a40fcee8-10"})`
  display: flex;
  align-items: center;
  align-self: stretch;

  width: 196px;
  height: 40px;

  color: #0a0a0a;
`,eu=l.default.div.withConfig({componentId:"zh__sc-a40fcee8-11"})`
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #0a0a0a;
`,ep=l.default.div.withConfig({componentId:"zh__sc-a40fcee8-12"})`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;

  padding: 8px;
  border: 1px solid #4f39f6;
  border-radius: 99px;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 16px; /* 100% */
  color: #fff;
  letter-spacing: -1px;

  background: #4f39f6;
`,ex=(0,n.observer)(function(){let{analyzedFile:e}=o.default.modal.clientCreate;return(0,t.jsxs)(eg,{children:[null!==e&&(0,t.jsx)(et,{}),(0,t.jsx)(q,{})]})}),eg=l.default.div.withConfig({componentId:"zh__sc-a077b87a-0"})`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  justify-content: space-between;

  min-width: 0;
  min-height: 0;
  padding: 32px 24px;
  border-right: 1px solid #e5e7eb;
`;var em=e.i(25644),eb=e.i(65782),ew=e.i(56655),ey=e.i(34944),ej=e.i(21771),ev=e.i(43090);let e_=e=>{let t=e.trim().match(/^(\d{6})-?(\d)(\d{0,6})$/);if(null===t)return"unknown";switch(t[2]){case"1":case"3":return"MALE";case"2":case"4":return"FEMALE";default:return"unknown"}},eC=e=>{switch(e){case"MALE":return"남성";case"FEMALE":return"여성";case"unknown":return""}},ez=(0,n.observer)(function(){let{clientDraft:e,ocrDraft:n,updateClientDraft:i,getClientDraftFieldError:l,clearClientDraftFieldError:a}=o.default.modal.clientCreate;if(null===e)return null;let r=e.clientName??"",d=e.residentRegistrationNumber??"",c=e.businessType??"DAY_CARE",f=e.serviceType??"MEAL",h=e.contractStatus??ey.default.ACTIVE,u=e.serviceGrade??1,p=e.contractStartDate??"",x=e.serviceStartDate??"",g=e.serviceEndDate??"",m=e.contact??"",b=e.phoneNumber??"",w=e.address??"",y=e.postCode??"",j=e.addressDetail??"",v=e_(d),_="MEAL"===f?"식사관리 서비스":"영양관리 서비스",C="MEAL"===f?"500901":"500401",z=(e,t)=>""===l(e)?t:{...t,borderColor:"#ff4d4f",background:"#fff5f5"},I=e=>{let n=l(e);return""===n?null:(0,t.jsx)(eS,{children:n})},k=(e,t)=>{let n=String(t??"").trim();return""!==n&&String(e).trim()===n},E=(e,t)=>{ej.default.is(e)&&i(n=>t(n,e))};return(0,t.jsxs)(eI,{children:[(0,t.jsxs)(ek,{children:[(0,t.jsxs)(eE,{children:[(0,t.jsx)(eT,{children:"성명"}),(0,t.jsx)(s.default.Input.Text,{$autoFilled:k(r,n?.clientName??""),style:z("clientName",e$),value:r,onChange:e=>{a("clientName"),i(t=>({...t,clientName:e.target.value.trim()}))}}),I("clientName")]}),(0,t.jsxs)(eE,{children:[(0,t.jsx)(eT,{children:"주민등록번호"}),(0,t.jsx)(s.default.Input.Text,{$autoFilled:k(d,n?.residentRegistrationNumber??""),style:z("residentRegistrationNumber",e$),value:d,onChange:e=>{var t;let n,l=e.target.value,o=e.currentTarget.selectionStart??l.length,r=(l.slice(0,o).match(/\d/g)??[]).length;a("residentRegistrationNumber");let d=ev.default.format(l);i(e=>({...e,residentRegistrationNumber:d})),t=e.currentTarget,n=((e,t)=>{if(t<=0)return 0;let n=0;for(let i=0;i<e.length;i+=1){let l=e[i];if(void 0!==l&&/\d/.test(l)&&(n+=1)===t)return i+1}return e.length})(d,r),"-"===d[n]&&(n+=1),requestAnimationFrame(()=>{document.activeElement===t&&t.setSelectionRange(n,n)})}}),I("residentRegistrationNumber")]}),(0,t.jsxs)(eE,{children:[(0,t.jsx)(eT,{children:"성별"}),(0,t.jsx)(s.default.Input.Text,{$autoFilled:k(eC(v),eC(e_(n?.residentRegistrationNumber??""))),style:e$,value:eC(v),readOnly:!0})]})]}),(0,t.jsxs)(ek,{children:[(0,t.jsxs)(eE,{children:[(0,t.jsx)(eT,{children:"사업구분"}),(0,t.jsx)(s.default.Input.Select,{$autoFilled:!0,style:e$,value:c,onChange:e=>{let t=e.target.value;i(e=>({...e,businessType:"DAY_CARE"===t?"DAY_CARE":e.businessType}))},children:(0,t.jsx)("option",{value:"DAY_CARE",children:"일상돌봄서비스"})})]}),(0,t.jsxs)(eE,{children:[(0,t.jsx)(eT,{children:"서비스명"}),(0,t.jsxs)(s.default.Input.Select,{$autoFilled:k(f,n?.serviceType??""),style:e$,value:_,onChange:e=>{let t=e.target.value;i(e=>({...e,serviceType:"식사관리 서비스"===t?"MEAL":"NUTRITION"}))},children:[(0,t.jsx)("option",{value:"식사관리 서비스",children:"식사관리 서비스"}),(0,t.jsx)("option",{value:"영양관리 서비스",children:"영양관리 서비스"})]})]}),(0,t.jsxs)(eE,{children:[(0,t.jsx)(eT,{children:"사업코드"}),(0,t.jsx)(s.default.Input.Text,{$autoFilled:k(f,n?.serviceType??""),style:e$,value:C,readOnly:!0})]})]}),(0,t.jsxs)(ek,{children:[(0,t.jsxs)(eE,{$width:191,children:[(0,t.jsx)(eT,{children:"계약상태"}),(0,t.jsxs)(s.default.Input.Select,{$autoFilled:k(h,n?.contractStatus??""),style:e$,value:h,onChange:e=>{let t=e.target.value;(0,ey.isSelectableContractStatus)(t)&&i(e=>({...e,contractStatus:t}))},children:[(0,t.jsx)("option",{value:ey.default.ACTIVE,children:"계약중"}),(0,t.jsx)("option",{value:ey.default.TERMINATED,children:"해지"})]})]}),(0,t.jsxs)(eE,{$width:191,children:[(0,t.jsx)(eT,{children:"등급"}),(0,t.jsxs)(s.default.Input.Select,{$autoFilled:k(u,n?.serviceGrade??""),style:e$,value:String(u),onChange:e=>{let t=Number(e.target.value);switch(t){case 1:case 2:case 3:case 4:i(e=>({...e,serviceGrade:t}));return;default:return}},children:[(0,t.jsx)("option",{value:"1",children:"1등급"}),(0,t.jsx)("option",{value:"2",children:"2등급"}),(0,t.jsx)("option",{value:"3",children:"3등급"}),(0,t.jsx)("option",{value:"4",children:"4등급"})]})]})]}),(0,t.jsxs)(ek,{children:[(0,t.jsxs)(eE,{$width:191,children:[(0,t.jsx)(eT,{children:"계약 시작일"}),(0,t.jsx)(s.default.Input.Date,{$autoFilled:k(p,n?.contractStartDate??""),style:z("contractStartDate",eO),value:p,onChange:e=>{a("contractStartDate"),E(e,(e,t)=>({...e,contractStartDate:t}))}}),I("contractStartDate")]}),(0,t.jsxs)(eE,{$width:191,children:[(0,t.jsx)(eT,{children:"계약 만료일"}),(0,t.jsx)(s.default.Input.Date,{$autoFilled:k(g,n?.serviceEndDate??""),style:eO,value:g,readOnly:!0})]})]}),(0,t.jsxs)(ek,{children:[(0,t.jsxs)(eE,{$width:191,children:[(0,t.jsx)(eT,{children:"서비스 시작일"}),(0,t.jsx)(s.default.Input.Date,{$autoFilled:k(x,n?.serviceStartDate??""),style:z("serviceStartDate",eO),value:x,onChange:e=>{a("serviceStartDate"),E(e,(e,t)=>{let n=(e=>{let[t,n,i]=e.split("-"),l=new Date(Number(t),Number(n)-1,Number(i));l.setFullYear(l.getFullYear()+1),l.setDate(l.getDate()-1);let[o,a]=ej.default.create(l.getFullYear(),l.getMonth()+1,l.getDate());return null!==o||null===a?null:a})(t);return null===n?e:{...e,serviceStartDate:t,serviceEndDate:n}})}}),I("serviceStartDate")]}),(0,t.jsxs)(eE,{$width:191,children:[(0,t.jsx)(eT,{children:"서비스 만료일"}),(0,t.jsx)(s.default.Input.Date,{$autoFilled:k(g,n?.serviceEndDate??""),style:z("serviceEndDate",eO),value:g,onChange:e=>{a("serviceEndDate"),E(e,(e,t)=>({...e,serviceEndDate:t}))}}),I("serviceEndDate")]})]}),(0,t.jsxs)(ek,{children:[(0,t.jsxs)(eE,{children:[(0,t.jsx)(eT,{children:"휴대폰"}),(0,t.jsx)(s.default.Input.Phone,{$autoFilled:k(b,n?.phoneNumber??""),style:z("phoneNumber",e$),value:b,onChange:e=>{a("phoneNumber"),i(t=>({...t,phoneNumber:e}))}}),I("phoneNumber")]}),(0,t.jsxs)(eE,{children:[(0,t.jsx)(eT,{children:"연락처"}),(0,t.jsx)(s.default.Input.Contact,{$autoFilled:k(m,n?.contact??""),style:z("contact",e$),value:m,onChange:e=>{a("contact"),i(t=>({...t,contact:e}))}}),I("contact")]})]}),(0,t.jsxs)(ek,{children:[(0,t.jsxs)(eE,{children:[(0,t.jsx)(eT,{children:"주소"}),(0,t.jsx)(s.default.Input.Text,{$autoFilled:k(w,n?.address??""),style:z("address",e$),value:w,onChange:e=>{a("address"),i(t=>({...t,address:e.target.value}))}}),I("address")]}),(0,t.jsxs)(eE,{$width:191,children:[(0,t.jsx)(eT,{children:"우편번호"}),(0,t.jsx)(s.default.Input.PostCode,{$autoFilled:k(y,n?.postCode??""),style:z("postCode",e$),value:y,onChange:e=>{a("postCode"),i(t=>({...t,postCode:e}))}}),I("postCode")]})]}),(0,t.jsx)(ek,{children:(0,t.jsxs)(eE,{children:[(0,t.jsx)(eT,{children:"상세주소"}),(0,t.jsx)(s.default.Input.Text,{$autoFilled:k(j,n?.addressDetail??""),style:z("addressDetail",e$),value:j,onChange:e=>{a("addressDetail"),i(t=>({...t,addressDetail:e.target.value}))}}),I("addressDetail")]})})]})}),eI=l.default.div.withConfig({componentId:"zh__sc-27162cff-0"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;

  width: 664px;
`,ek=l.default.div.withConfig({componentId:"zh__sc-27162cff-1"})`
  display: flex;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;

  min-height: 59px;
`,eE=l.default.div.withConfig({componentId:"zh__sc-27162cff-2"})`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
  align-self: stretch;
  justify-content: flex-start;

  min-height: 59px;

  ${({$width:e})=>void 0!==e?`
        width: ${e}px;
      `:`
        flex: 1;
        min-width: 0;
      `}
`,eT=l.default.div.withConfig({componentId:"zh__sc-27162cff-3"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #000;
  text-align: center;
`,eS=l.default.div.withConfig({componentId:"zh__sc-27162cff-4"})`
  position: absolute;
  top: calc(100% + 2px);
  left: 0;

  font-size: 12px;
  line-height: 16px;
  color: #ff4d4f;
`,e$={display:"flex",padding:"4px 16px",alignItems:"center",gap:"10px",flex:"1 0 0",alignSelf:"stretch",fontSize:16},eO={...e$,height:36,lineHeight:"36px"},eL=(0,n.observer)(function(){let{clientDraft:e}=o.default.modal.clientCreate,n=function(e){let t=e.trim().match(/^(\d{6})-?(\d{1})(\d{0,6})$/);if(null===t)return"unknown";let n=t[2];return"1"===n||"3"===n?"male":"2"===n||"4"===n?"female":"unknown"}(e?.residentRegistrationNumber??"");return(0,t.jsxs)(eA,{children:[(0,t.jsx)(eR,{children:"이용자 기본 정보"}),(0,t.jsxs)(eF,{children:[(0,t.jsxs)(eN,{children:[(0,t.jsx)(eD,{children:"사진"}),(0,t.jsx)(eM,{children:"male"===n?(0,t.jsx)(em.default,{sx:{fontSize:66},htmlColor:"#C6D2FF"}):"female"===n?(0,t.jsx)(eb.default,{sx:{fontSize:66},htmlColor:"#C6D2FF"}):(0,t.jsx)(ew.User,{size:66,color:"#C6D2FF"})})]}),(0,t.jsx)(ez,{})]})]})}),eA=l.default.div.withConfig({componentId:"zh__sc-52495c18-0"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;

  padding: 32px 24px;

  background: #fff;
  box-shadow: -8px 0 8px 0 rgb(0 0 0 / 8%);
`,eR=l.default.div.withConfig({componentId:"zh__sc-52495c18-1"})`
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
  text-align: center;
`,eF=l.default.div.withConfig({componentId:"zh__sc-52495c18-2"})`
  display: flex;
  gap: 24px;
  align-items: flex-start;
  align-self: stretch;
`,eN=l.default.div.withConfig({componentId:"zh__sc-52495c18-3"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
`,eD=l.default.div.withConfig({componentId:"zh__sc-52495c18-4"})`
  display: flex;
  gap: 24px;
  align-items: flex-start;
  align-self: stretch;

  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #000;
  text-align: center;
`,eM=l.default.div.withConfig({componentId:"zh__sc-52495c18-5"})`
  display: flex;
  align-items: center;
  justify-content: center;

  aspect-ratio: 1/1;
  width: 120px;
  height: 120px;
  border-radius: 4px;

  background: #f4f2ff;
`,eP=(0,n.observer)(function(){let{clientDraft:e}=o.default.modal.clientCreate;return(0,t.jsxs)(eB,{children:[(0,t.jsx)(ex,{}),e&&(0,t.jsx)(eL,{})]})}),eB=l.default.div.withConfig({componentId:"zh__sc-cfc6108c-0"})`
  overflow-y: auto;
  display: flex;
  align-self: stretch;
  justify-content: center;

  min-height: 830px;
  max-height: 830px;

  background: #f9fafb;
`;function eU(){let{close:e,mode:n}=o.default.modal.clientCreate;return(0,t.jsxs)(eW,{children:[(0,t.jsx)(eH,{children:"renew"===n?"재계약 이용자 등록하기":"신규 이용자 등록하기"}),(0,t.jsxs)(eV,{onClick:e,children:[(0,t.jsx)(v.X,{size:16}),"닫기"]})]})}let eW=l.default.div.withConfig({componentId:"zh__sc-f50634fa-0"})`
  display: flex;
  gap: 24px;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;

  height: 69px;
  padding: 16px;
  border-bottom: 1px solid #e5e7eb;
  border-radius: 16px 16px 0 0;

  background: #fff;
`,eH=l.default.div.withConfig({componentId:"zh__sc-f50634fa-1"})`
  font-size: 18px;
  font-weight: 700;
  font-style: normal;
  line-height: 28px; /* 155.556% */
  color: #101828;
  letter-spacing: -0.439px;
`,eV=(0,l.default)(s.default.Button.Outlined).withConfig({componentId:"zh__sc-f50634fa-2"})`
  display: flex;
  gap: 6px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,eY=(0,n.observer)(function(){let e=o.default.modal.clientCreate,{status:n}=e,l=(0,i.useRef)(null);return((0,i.useEffect)(()=>"ready"!==n?void e.setToastContainer(null):(e.setToastContainer(l.current),()=>{e.setToastContainer(null)}),[e,n]),"ready"!==n)?null:(0,t.jsx)(a.default,{children:(0,t.jsxs)(eG,{ref:l,children:[(0,t.jsx)(eU,{}),(0,t.jsx)(eP,{}),(0,t.jsx)(c,{})]})})}),eG=l.default.div.withConfig({componentId:"zh__sc-21fa7296-0"})`
  position: relative;

  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  align-items: center;

  width: 1712px;
  min-width: 1712px;
  border-radius: 8px;

  background: #fff;
`;function eX(){return(eX=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var eK=(0,i.forwardRef)(function(e,t){var n=e.color,l=e.size,o=void 0===l?24:l,a=function(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["color","size"]);return i.default.createElement("svg",eX({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),i.default.createElement("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),i.default.createElement("polyline",{points:"19 12 12 19 5 12"}))});function eq(){return(eq=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}eK.propTypes={color:g.default.string,size:g.default.oneOfType([g.default.string,g.default.number])},eK.displayName="ArrowDown";var eJ=(0,i.forwardRef)(function(e,t){var n=e.color,l=e.size,o=void 0===l?24:l,a=function(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["color","size"]);return i.default.createElement("svg",eq({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),i.default.createElement("line",{x1:"12",y1:"19",x2:"12",y2:"5"}),i.default.createElement("polyline",{points:"5 12 12 5 19 12"}))});eJ.propTypes={color:g.default.string,size:g.default.oneOfType([g.default.string,g.default.number])},eJ.displayName="ArrowUp";var eQ=e.i(26546),eZ=e.i(71723),e0=e.i(25699),e1=e.i(28124);let e2=function({isOpen:e,actionType:n,isProcessing:i=!1,onClickSecondary:l,onClickPrimary:o}){if(!e)return null;let a="move"===n,r=a?"이동":"닫기";return(0,t.jsx)(e4,{children:(0,t.jsxs)(e6,{children:[(0,t.jsxs)(e3,{children:[(0,t.jsx)(e5,{children:"수정된 정보가 있습니다."}),(0,t.jsxs)(e8,{children:["지금 화면을 나가면 수정하신 내용이 저장되지 않습니다.",(0,t.jsx)("br",{}),`[저장하고 ${r}]${a?"을":"를"} 누르면 정보가 안전하게 저장됩니다.`]})]}),(0,t.jsxs)(e9,{children:[(0,t.jsx)(e7,{type:"button",disabled:i,onClick:l,children:`저장없이 ${a?"이동":"나가기"}`}),(0,t.jsx)(te,{type:"button",disabled:i,onClick:o,children:`저장하고 ${r}`})]})]})})},e4=l.default.div.withConfig({componentId:"zh__sc-22c1af4d-0"})`
  position: fixed;
  z-index: 3000;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgb(17 24 39 / 36%);
`,e6=l.default.div.withConfig({componentId:"zh__sc-22c1af4d-1"})`
  display: flex;
  flex-direction: column;
  gap: 48px;
  align-items: center;
  justify-content: center;

  width: 501px;
  max-width: calc(100vw - 32px);
  padding: 32px 24px;
  border: 1px solid #e5e9ef;
  border-radius: 8px;

  background: #fff;
  box-shadow: 0 4px 2px rgb(0 0 0 / 10%);
`,e3=l.default.div.withConfig({componentId:"zh__sc-22c1af4d-2"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;

  width: 100%;
`,e5=l.default.h3.withConfig({componentId:"zh__sc-22c1af4d-3"})`
  margin: 0;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px;
  color: #000;
`,e8=l.default.p.withConfig({componentId:"zh__sc-22c1af4d-4"})`
  margin: 0;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px;
  color: #000;
`,e9=l.default.div.withConfig({componentId:"zh__sc-22c1af4d-5"})`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: flex-end;

  width: 100%;
`,e7=(0,l.default)(s.default.Button.Outlined).withConfig({componentId:"zh__sc-22c1af4d-6"})`
  height: 36px;
  padding: 8px 16px;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px;
  color: #4f39f6;
`,te=(0,l.default)(s.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-22c1af4d-7"})`
  height: 36px;
  padding: 8px 16px;

  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: 20px;
`;var tt=e.i(24655),tn=e.i(39635);let ti=l.default.div.withConfig({componentId:"zh__sc-67d06bce-0"})`
  position: absolute;
  top: 0;
  right: 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 417px;
  height: 100%;
  border-top: 1px solid #e5e7eb;
  border-bottom: 1px solid #e5e7eb;
  border-left: 1px solid #e5e7eb;

  background: #fff;
  box-shadow: -2px 9px 16px 0 rgb(0 0 0 / 16%);
`,tl=l.default.div.withConfig({componentId:"zh__sc-67d06bce-1"})`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;

  padding: 16px;
`,to=l.css`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;

  width: 56px;
  height: 36px;
  padding: 8px;
`,ta=(0,l.default)(s.default.Button.Outlined).withConfig({componentId:"zh__sc-67d06bce-2"})`
  ${to}
`,tr=l.default.div.withConfig({componentId:"zh__sc-67d06bce-3"})`
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
  text-align: center;
`,td=(0,l.default)(s.default.Button.Outlined).withConfig({componentId:"zh__sc-67d06bce-4"})`
  ${to}
`,ts=l.default.div.withConfig({componentId:"zh__sc-67d06bce-5"})`
  align-self: stretch;
  height: 1px;
  background: #e5e7eb;
`,tc=l.default.div.withConfig({componentId:"zh__sc-67d06bce-6"})`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
`,tf=[{key:"state1",index:"01",label:"청구 사유를 선택해주세요.",options:["option1","option2","option3","option4","option5","option6","option7"],optionLabels:{option1:"카드 미소지",option2:"카드 분실",option3:"카드 파손",option4:"시스템 오류",option5:"단말기 오류",option6:"사망",option7:"수술"}},{key:"state2",index:"02",label:"처리 현황을 선택해주세요.",options:["option1","option2"],optionLabels:{option1:"계약 종결",option2:"서비스 종료"}}],th={state1:null,state2:null},tu={option1:"대상자 바우처 카드 미소지로 인하여 소급결제 진행하려 하였으나",option2:"대상자 바우처 카드 분실로 인하여 소급결제 진행하려 하였으나",option3:"대상자 바우처 카드 파손으로 인하여 소급결제 진행하려 하였으나",option4:"결제 시스템 오류로 인하여 소급결제 진행하려 하였으나",option5:"단말기 오류로 인하여 소급결제 진행하려 하였으나",option6:"대상자 사망으로 인하여 소급결제 진행하려 하였으나",option7:"대상자 수술로 인하여 소급결제 진행하려 하였으나"},tp={option1:"일상돌봄 식사영양서비스 계약종결됨에 따라 지원금이 소멸하여",option2:"일상돌봄 식사영양서비스 종료됨에 따라 지원금이 소멸하여"},tx=(e,t)=>e[t]??"",tg=(e,t,n)=>Math.min(n,Math.max(t,e)),tm=["boxSizing","fontFamily","fontSize","fontWeight","fontStyle","lineHeight","letterSpacing","textTransform","textIndent","textDecoration","wordSpacing","tabSize","paddingTop","paddingRight","paddingBottom","paddingLeft"],tb=(e,t,n,i=.08)=>{let l=tg(n,0,t.length),o=document.createElement("div"),a=document.createElement("span"),r=window.getComputedStyle(e);o.style.position="absolute",o.style.left="-99999px",o.style.top="0",o.style.visibility="hidden",o.style.pointerEvents="none",o.style.width=`${e.clientWidth}px`,o.style.whiteSpace="pre-wrap",o.style.overflowWrap="break-word",o.style.wordBreak="break-word",tm.forEach(e=>{o.style[e]=r[e]}),o.textContent=t.slice(0,l),a.textContent="​",o.appendChild(a),document.body.appendChild(o);let d=a.offsetTop;o.remove();let s=Math.max(e.scrollHeight-e.clientHeight,0);return tg(d-e.clientHeight*i,0,s)},tw=l.keyframes`
	from {
		transform: translateX(100%);
		opacity: 0;
	}

	to {
		transform: translateX(0);
		opacity: 1;
	}
`,ty=(0,l.default)(ti).withConfig({componentId:"zh__sc-1f96f242-0"})`
  will-change: transform, opacity;
  animation: ${tw} 0.28s cubic-bezier(0.32, 0.72, 0, 1) forwards;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,tj=l.default.div.withConfig({componentId:"zh__sc-1f96f242-1"})`
  width: 36px;
  height: 36px;
`,tv=l.default.div.withConfig({componentId:"zh__sc-1f96f242-2"})`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 24px;

  width: 100%;
  padding: 16px;
`,t_=l.default.div.withConfig({componentId:"zh__sc-1f96f242-3"})`
  display: flex;
  gap: 4px;
  align-items: flex-start;
  align-self: stretch;

  padding: 12px;
  border: 1px solid #e5e7eb;
  border-radius: 6px;

  background: #f5f8ff;
`,tC=l.default.div.withConfig({componentId:"zh__sc-1f96f242-4"})`
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
`,tz=l.default.div.withConfig({componentId:"zh__sc-1f96f242-5"})`
  display: flex;
  flex-direction: column;
  gap: 24px;

  width: 100%;
  padding: 0;
`,tI=l.default.div.withConfig({componentId:"zh__sc-1f96f242-6"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;
`,tk=l.default.div.withConfig({componentId:"zh__sc-1f96f242-7"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;
`,tE=l.default.div.withConfig({componentId:"zh__sc-1f96f242-8"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 24px;
  height: 24px;
  border-radius: 12px;

  font-size: 12px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #fff;

  background: #4f39f6;
`,tT=l.default.div.withConfig({componentId:"zh__sc-1f96f242-9"})`
  font-size: 14px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
`,tS=l.default.div.withConfig({componentId:"zh__sc-1f96f242-10"})`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,t$=l.default.button.withConfig({componentId:"zh__sc-1f96f242-11"})`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;

  padding: 8px;
  border: 1px solid #e5e7eb;
  border-radius: 99px;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 16px;
  color: #0a0a0a;
  letter-spacing: -1px;

  background: #fff;

  ${({$selected:e})=>e&&`
		border-color: #4f39f6;
		color: #fff;
		background: #4f39f6;
	`}
`,tO=l.default.div.withConfig({componentId:"zh__sc-1f96f242-12"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;
`,tL=l.default.div.withConfig({componentId:"zh__sc-1f96f242-13"})`
  display: flex;
  gap: 4px;
  align-items: center;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #000;
  text-align: center;
  letter-spacing: -0.5px;
`,tA=(0,l.default)(s.default.Input.Textarea).withConfig({componentId:"zh__sc-1f96f242-14"})`
  resize: none;
  scrollbar-gutter: stable;

  overflow: auto;
  display: flex;
  align-items: flex-start;
  align-self: stretch;

  height: 160px;
  padding: 16px;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    margin-block: 6px;
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    border: 2px solid transparent;
    border-radius: 999px;
    background-color: #cfd3dc;
    background-clip: padding-box;
  }

  &::-webkit-scrollbar-corner {
    background: transparent;
  }

  &&:read-only {
    pointer-events: auto;
    border: 1px solid #e9ecef;
    border-radius: 8px;
    background: #f5f3ff;
  }
`,tR=l.default.div.withConfig({componentId:"zh__sc-1f96f242-15"})`
  display: flex;
  gap: 10px;
  align-items: center;
  align-self: stretch;
`,tF=(0,l.default)(s.default.Button.Outlined).withConfig({componentId:"zh__sc-1f96f242-16"})`
  display: flex;
  gap: 4px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,tN=(0,l.default)(s.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-1f96f242-17"})`
  display: flex;
  flex: 1 0 0;
  gap: 4px;
  align-items: center;
  justify-content: center;

  height: 36px;
  padding: 8px 16px;
`,tD=[{key:"state1",index:"01",label:"영양 상태 — 이용자의 영양 변화 정도를 선택해주세요.",sentences:{positive:"☐ 영양 상태: 정기적이고 꾸준한 영양식 식사 제공 및 방문 관리를 밀착 모니터링한 결과, 영양 체크리스트 점수가 서비스 참여 전 대비 크게 향상되었으며 안색과 전반적인 신체 기력 상태가 매우 양호하게 개선되었습니다.",neutral:"☐ 영양 상태: 현재 제공받고 있는 모든 건강 식단에 비교적 안정적이고 매우 높은 순응도를 보이고 있으며, 저체중이나 기타 체중 감소 등의 기왕 병력 이전의 안정적인 건강 수치를 계속해서 유지하고 있습니다.",negative:"☐ 영양 상태: 최근 들어 식사 흡수 기능 저하를 자주 호소하시며 일일 섭취하는 식사량이 전보다 감소하셨음이 확인되었습니다. 식사 조절과 아울러 이에 대한 의료적 치료 등 병원의 조기 개입이 필요합니다."}},{key:"state2",index:"02",label:"식욕 상태 — 이용자의 식욕 변화 정도를 선택해주세요.",sentences:{positive:"☐ 식욕 상태: 식사 시간에 맞춰 스스로 음식을 찾으실 정도로 식욕이 크게 왕성해지셨으며, 제공되는 반찬과 밥을 남김없이 골고루 섭취하시어 전반적인 음식 섭취 순응도가 매우 높게 나타납니다.",neutral:"☐ 식욕 상태: 식사량이나 음식을 대하는 태도에 특별한 저하나 항진 없이 평소 수준을 그대로 유지하고 계십니다. 거부감 없이 매 끼니 적정량의 식사를 무난하게 마치시는 상태입니다.",negative:"☐ 식욕 상태: 일시적인 재원 변화나 체력 감소 등으로 극심한 우울감과 음식 거부 반응이 가끔 관찰되며, 이로 인해 신체 면역력 결핍 우려가 또한 생김에 따라 돌봄 과정이나 수행 다음 심리 유형을 수정할 필요가 있습니다."}},{key:"state3",index:"03",label:"상담·정서 상태 — 이용자의 심리·정서 변화 정도를 선택해주세요.",sentences:{positive:"☐ 상담·정서 상태: 정기적인 맞춤 상담 시나리오를 통해 정밀 분석 기법을 지속적으로 러닝한 결과, 기분이 좋고 전보다 웃음 가득한, 유쾌하고 우울감 없는 일상을 마주하고 계실뿐더러 감정이 정돈된 가장 이상적인 심리적 안정을 변함없이 나타내십니다.",neutral:"☐ 상담·정서 상태: 시기적(계절별/월별) 환경 변화 기능을 통하거나 매일매일 발생 및 부여되는 질문과 과제들에 대해 감정의 변화가 미미하며, 사회복지사 등 면담 평정 가이드라인에서 무난하고 일률적인 심리 현황을 보여주고 계십니다.",negative:"☐ 상담·정서 상태: 가끔 위축적 성향을 활발히 높은 빈도로, 신경 감정적 상태가 일어났으며 스스로 감정을 제어하는 등의 부여가 부족합니다. 정기적 상담을 연계하여 가장 신속히 지도가 반복적으로 이루어져야 할 필요성이 있습니다."}}],tM={state1:null,state2:null,state3:null},tP={positive:"긍정 변화 / 개선됨",neutral:"변화 없음 / 유지됨",negative:"부정적 변화 / 결과 요망"},tB=["positive","neutral","negative"],tU=(e,t,n)=>Math.min(n,Math.max(t,e)),tW=["boxSizing","fontFamily","fontSize","fontWeight","fontStyle","lineHeight","letterSpacing","textTransform","textIndent","textDecoration","wordSpacing","tabSize","paddingTop","paddingRight","paddingBottom","paddingLeft"],tH=(e,t,n,i=.08)=>{let l=tU(n,0,t.length),o=document.createElement("div"),a=document.createElement("span"),r=window.getComputedStyle(e);o.style.position="absolute",o.style.left="-99999px",o.style.top="0",o.style.visibility="hidden",o.style.pointerEvents="none",o.style.width=`${e.clientWidth}px`,o.style.whiteSpace="pre-wrap",o.style.overflowWrap="break-word",o.style.wordBreak="break-word",tW.forEach(e=>{o.style[e]=r[e]}),o.textContent=t.slice(0,l),a.textContent="​",o.appendChild(a),document.body.appendChild(o);let d=a.offsetTop;o.remove();let s=Math.max(e.scrollHeight-e.clientHeight,0);return tU(d-e.clientHeight*i,0,s)},tV=l.keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }

  to {
    transform: translateX(0);
    opacity: 1;
  }
`,tY=(0,l.default)(ti).withConfig({componentId:"zh__sc-42312189-0"})`
  will-change: transform, opacity;
  animation: ${tV} 0.28s cubic-bezier(0.32, 0.72, 0, 1) forwards;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,tG=l.default.div.withConfig({componentId:"zh__sc-42312189-1"})`
  width: 36px;
  height: 36px;
`,tX=l.default.div.withConfig({componentId:"zh__sc-42312189-2"})`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 24px;

  width: 100%;
  padding: 16px;
`,tK=l.default.div.withConfig({componentId:"zh__sc-42312189-3"})`
  display: flex;
  gap: 4px;
  align-items: flex-start;
  align-self: stretch;

  padding: 12px;
  border: 1px solid #e5e7eb;
  border-radius: 6px;

  background: #f5f8ff;
`,tq=l.default.div.withConfig({componentId:"zh__sc-42312189-4"})`
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
`,tJ=l.default.div.withConfig({componentId:"zh__sc-42312189-5"})`
  display: flex;
  flex-direction: column;
  gap: 24px;

  width: 100%;
  padding: 0;
`,tQ=l.default.div.withConfig({componentId:"zh__sc-42312189-6"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;
`,tZ=l.default.div.withConfig({componentId:"zh__sc-42312189-7"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;
`,t0=l.default.div.withConfig({componentId:"zh__sc-42312189-8"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 24px;
  height: 24px;
  border-radius: 12px;

  font-size: 12px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #fff;

  background: #4f39f6;
`,t1=l.default.div.withConfig({componentId:"zh__sc-42312189-9"})`
  font-size: 14px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
`,t2=l.default.div.withConfig({componentId:"zh__sc-42312189-10"})`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,t4=l.default.button.withConfig({componentId:"zh__sc-42312189-11"})`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;

  padding: 8px;
  border: 1px solid #e5e7eb;
  border-radius: 99px;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 16px; /* 100% */
  color: #0a0a0a;
  letter-spacing: -1px;

  background: #fff;

  ${({$selected:e})=>e&&`
    border-color: #4f39f6;
    color: #fff;
    background: #4f39f6;
  `}
`,t6=l.default.div.withConfig({componentId:"zh__sc-42312189-12"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;
`,t3=l.default.div.withConfig({componentId:"zh__sc-42312189-13"})`
  display: flex;
  gap: 4px;
  align-items: center;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #000;
  text-align: center;
  letter-spacing: -0.5px;
`,t5=(0,l.default)(s.default.Input.Textarea).withConfig({componentId:"zh__sc-42312189-14"})`
  resize: none;
  scrollbar-gutter: stable;

  overflow: auto;
  display: flex;
  align-items: flex-start;
  align-self: stretch;

  height: 160px;
  padding: 16px;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    margin-block: 6px;
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    border: 2px solid transparent;
    border-radius: 999px;
    background-color: #cfd3dc;
    background-clip: padding-box;
  }

  &::-webkit-scrollbar-corner {
    background: transparent;
  }

  &&:read-only {
    pointer-events: auto;
    border: 1px solid #e9ecef;
    border-radius: 8px;
    background: #f5f3ff;
  }
`,t8=l.default.div.withConfig({componentId:"zh__sc-42312189-15"})`
  display: flex;
  gap: 10px;
  align-items: center;
  align-self: stretch;
`,t9=(0,l.default)(s.default.Button.Outlined).withConfig({componentId:"zh__sc-42312189-16"})`
  display: flex;
  gap: 4px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,t7=(0,l.default)(s.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-42312189-17"})`
  display: flex;
  flex: 1 0 0;
  gap: 4px;
  align-items: center;
  justify-content: center;

  height: 36px;
  padding: 8px 16px;
`;function ne(){return(ne=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var nt=(0,i.forwardRef)(function(e,t){var n=e.color,l=e.size,o=void 0===l?24:l,a=function(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["color","size"]);return i.default.createElement("svg",ne({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),i.default.createElement("line",{x1:"19",y1:"12",x2:"5",y2:"12"}),i.default.createElement("polyline",{points:"12 19 5 12 12 5"}))});nt.propTypes={color:g.default.string,size:g.default.oneOfType([g.default.string,g.default.number])},nt.displayName="ArrowLeft",(0,n.observer)(function({goBack:e,close:n,showToast:l}){let o=async e=>!1,[a,r]=(0,i.useState)({name:"",relation:"",phone:"",address:""}),[s,c]=(0,i.useState)({name:"",relation:"",phone:"",address:""}),f=(e,t)=>{r(n=>({...n,[e]:t})),c(t=>({...t,[e]:""}))},h=async()=>{let e=!0;""===a.name.trim()&&(c(e=>({...e,name:"필수 입력값입니다."})),e=!1),""===a.relation.trim()&&(c(e=>({...e,relation:"필수 입력값입니다."})),e=!1),""===a.phone.trim()&&(c(e=>({...e,phone:"필수 입력값입니다."})),e=!1),e&&await o({name:a.name,relation:a.relation,phone:a.phone,address:a.address})};return(0,t.jsxs)(ti,{children:[(0,t.jsxs)(tl,{children:[(0,t.jsx)(ta,{onClick:e,children:(0,t.jsx)(nt,{size:16})}),(0,t.jsx)(tr,{children:"신규 보호자 추가"}),(0,t.jsx)(td,{onClick:n,children:(0,t.jsx)(v.X,{size:16})})]}),(0,t.jsx)(ts,{}),(0,t.jsx)(tc,{children:(0,t.jsx)(nn,{children:(0,t.jsxs)(ni,{children:[(0,t.jsxs)(nl,{children:[(0,t.jsxs)(no,{children:[(0,t.jsx)(na,{children:"성명"}),(0,t.jsx)(nr,{type:"text",placeholder:"보호자 성명을 입력하세요.",value:a.name,onChange:e=>f("name",e.target.value),$error:""!==s.name}),(0,t.jsx)(ns,{$show:""!==s.name,children:s.name})]}),(0,t.jsxs)(no,{children:[(0,t.jsx)(na,{children:"이용자와의 관계"}),(0,t.jsx)(nr,{type:"text",placeholder:"예: 자녀(딸), 자녀(아들), 자녀(며느리)",value:a.relation,onChange:e=>f("relation",e.target.value),$error:""!==s.relation}),(0,t.jsx)(ns,{$show:""!==s.relation,children:s.relation})]}),(0,t.jsxs)(no,{children:[(0,t.jsx)(na,{children:"연락처"}),(0,t.jsx)(nr,{type:"tel",placeholder:"보호자 연락처를 입력하세요.",value:a.phone,onChange:e=>f("phone",e.target.value),$error:""!==s.phone}),(0,t.jsx)(ns,{$show:""!==s.phone,children:s.phone})]}),(0,t.jsxs)(no,{children:[(0,t.jsx)(na,{children:"주소"}),(0,t.jsx)(nd,{placeholder:"보호자 주소를 입력하세요.",value:a.address,onChange:e=>f("address",e.target.value),$error:""!==s.address,rows:2}),(0,t.jsx)(ns,{$show:""!==s.address,children:s.address})]})]}),(0,t.jsxs)(nc,{onClick:()=>void h(),children:[(0,t.jsx)(d.Check,{size:20}),"추가 후 계약서에 반영하기"]})]})})})]})});let nn=l.default.div.withConfig({componentId:"zh__sc-f12494e7-0"})`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  align-self: stretch;

  padding: 16px;
`,ni=l.default.div.withConfig({componentId:"zh__sc-f12494e7-1"})`
  display: flex;
  flex-direction: column;
  gap: 16px;

  width: 100%;
  padding: 16px;
  border: 1px solid #e5e9ef;
  border-radius: 8px;

  background: #fff;
`,nl=l.default.div.withConfig({componentId:"zh__sc-f12494e7-2"})`
  display: flex;
  flex-direction: column;
`,no=l.default.div.withConfig({componentId:"zh__sc-f12494e7-3"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`,na=l.default.label.withConfig({componentId:"zh__sc-f12494e7-4"})`
  font-size: 16px;
  font-weight: 500;
  color: #000;
`,nr=l.default.input.withConfig({componentId:"zh__sc-f12494e7-5"})`
  padding: 8px 16px;
  border: 1px solid #e5e9ef;
  border-radius: 4px;
  font-size: 16px;

  &::placeholder {
    color: #9ca3af;
  }

  &:focus {
    border-color: ${R.default.style.color.PRIMARY[100]};
    outline: none;
  }

  ${({$error:e})=>!0===e&&l.css`
      border: 1px solid #ef4444;
    `}
`,nd=l.default.textarea.withConfig({componentId:"zh__sc-f12494e7-6"})`
  resize: none;

  padding: 8px 16px;
  border: 1px solid #e5e9ef;
  border-radius: 4px;

  font-size: 16px;

  &::placeholder {
    color: #9ca3af;
  }

  &:focus {
    border-color: ${R.default.style.color.PRIMARY[100]};
    outline: none;
  }

  ${({$error:e})=>!0===e&&l.css`
      border: 1px solid #ef4444;
    `}
`,ns=l.default.div.withConfig({componentId:"zh__sc-f12494e7-7"})`
  display: flex;

  height: 24px;

  font-size: 14px;
  font-weight: 400;
  font-style: normal;
  line-height: 18px; /* 128.571% */
  color: #ef4444;

  visibility: ${({$show:e})=>!0===e?"visible":"hidden"};
`,nc=(0,l.default)(s.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-f12494e7-8"})`
  display: flex;
  gap: 4px;
  align-items: center;
  align-self: stretch;
  justify-content: center;

  padding: 8px;
`,{PRIMARY:nf}=((0,n.observer)(function({close:e,showToast:n}){let l=[],o=(void 0)??null,a=(0,i.useMemo)(()=>{let e=l??[];if(null===o)return e;let t=e.find(e=>e.uuid===o);return t?[t,...e.filter(e=>e.uuid!==o)]:e},[l,o]);return(0,t.jsx)(nh,{children:a.map(i=>(0,t.jsxs)(nu,{onClick:()=>{i.uuid,n(),e()},$selected:void 0===i.uuid,children:[(0,t.jsxs)(np,{children:[(0,t.jsxs)(nx,{children:[(0,t.jsx)(ng,{children:`${i.name.family} ${i.name.given}`}),(0,t.jsx)(nm,{children:i.relation})]}),(0,t.jsxs)(nb,{children:[(0,t.jsxs)(nw,{children:[(0,t.jsx)(ny,{children:"전화번호"}),(0,t.jsx)(nj,{}),(0,t.jsx)(ny,{children:i.phone.mobile??"-"})]}),(0,t.jsxs)(nw,{children:[(0,t.jsx)(ny,{children:"주소"}),(0,t.jsx)(nj,{}),(0,t.jsx)(ny,{children:i.address})]})]})]}),(0,t.jsx)(nv,{children:void 0===i.uuid?(0,t.jsx)(nC,{children:"지금 선택됨"}):(0,t.jsxs)(n_,{children:["선택",(0,t.jsx)(b,{size:16})]})})]},i.uuid))})}),R.default.style.color),nh=l.default.div.withConfig({componentId:"zh__sc-3bbaa2f0-0"})`
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;

  height: 729px;
  padding: 16px;

  background: #f9fafb;
`,nu=l.default.div.withConfig({componentId:"zh__sc-3bbaa2f0-1"})`
  cursor: pointer;

  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
  align-self: stretch;

  padding: 16px;
  border: 1px solid #e5e9ef;
  border-radius: 8px;

  background: #fff;

  &:hover {
    border: 1px solid #5635ff;
    background: #f7f5ff;
  }

  &:active {
    box-shadow: 0 0 6px 0 #ddd8ff;
  }

  ${({$selected:e})=>!0===e&&l.css`
      border: 1px solid #5635ff;
      background: #f7f5ff;
      box-shadow: 0 0 6px 0 #ddd8ff;
    `}
`,np=l.default.div.withConfig({componentId:"zh__sc-3bbaa2f0-2"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;
`,nx=l.default.div.withConfig({componentId:"zh__sc-3bbaa2f0-3"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;
`,ng=l.default.div.withConfig({componentId:"zh__sc-3bbaa2f0-4"})`
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
`,nm=l.default.div.withConfig({componentId:"zh__sc-3bbaa2f0-5"})`
  display: flex;
  gap: 10px;
  align-items: center;

  padding: 2px 8px;
  border: 1px solid #45464e;
  border-radius: 99px;

  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  line-height: 20px; /* 142.857% */
  color: #45464e;
  text-align: center;

  background: #fff;
`,nb=l.default.div.withConfig({componentId:"zh__sc-3bbaa2f0-6"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
  align-self: stretch;
`,nw=l.default.div.withConfig({componentId:"zh__sc-3bbaa2f0-7"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;
`,ny=l.default.div.withConfig({componentId:"zh__sc-3bbaa2f0-8"})`
  min-width: 50px;

  font-size: 14px;
  font-weight: 400;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
  text-align: left;
`,nj=l.default.div.withConfig({componentId:"zh__sc-3bbaa2f0-9"})`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;

  width: 1px;
  height: 20px;

  background: #e5e7eb;
`,nv=l.default.div.withConfig({componentId:"zh__sc-3bbaa2f0-10"})`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-end;
  align-self: stretch;
  justify-content: center;
`,n_=l.default.button.withConfig({componentId:"zh__sc-3bbaa2f0-11"})`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;

  padding: 8px;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 16px; /* 100% */
  color: ${nf[100]};
  letter-spacing: -1px;
`,nC=(0,l.default)(n_).withConfig({componentId:"zh__sc-3bbaa2f0-12"})`
  border-radius: 99px;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 16px; /* 100% */
  color: #fff;
  letter-spacing: -1px;

  background: #4f39f6;
`;var nz=e.i(5543);(0,n.observer)(function({setSelectedDrawerKey:e}){return(0,t.jsxs)(nk,{children:[(0,t.jsxs)(nE,{children:[(0,t.jsx)(_.default.Search,{size:17,color:"#9CA3AF"}),(0,t.jsx)(nT,{placeholder:"보호자 이름을 검색하세요.",value:"",onChange:e=>{e.target.value}})]}),(0,t.jsxs)(nS,{onClick:()=>e?.("add"),children:[(0,t.jsx)(nz.Plus,{size:18}),"신규 대리인(보호자) 추가하기"]})]})});let{PRIMARY:nI}=R.default.style.color,nk=l.default.div.withConfig({componentId:"zh__sc-612601c-0"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  align-self: stretch;

  padding: 16px;
`,nE=l.default.div.withConfig({componentId:"zh__sc-612601c-1"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;

  height: 36px;
  padding: 8px 16px;
  border: 1px solid ${nI[100]};
  border-radius: 4px;

  background: #fff;
`,nT=l.default.input.withConfig({componentId:"zh__sc-612601c-2"})`
  flex: 1;

  border: none;

  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #9ca3af;
  text-align: left;

  &::placeholder {
    color: #9ca3af;
  }

  &:focus {
    outline: none;
  }
`,nS=(0,l.default)(s.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-612601c-3"})`
  display: flex;
  gap: 4px;
  align-items: center;
  align-self: stretch;
  justify-content: center;

  padding: 8px;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 16px; /* 100% */
  color: #fff;
`,n$=function({value:e,onChange:n,onApply:l,onClose:o}){let[a,r]=(0,i.useState)(()=>{let t,n;return t=e.replace(/\s+/g," ").trim(),n={...th},tf.forEach(e=>{let i=e.options.find(n=>{let i=tx(e.optionLabels,n),l="state1"===e.key?tu[n]:tp[n]??"";return""!==i&&t.includes(i)||""!==l&&t.includes(l)});n[e.key]=i??null}),n}),{ref:d,fire:s}=(0,Z.default)(),c=(0,i.useRef)(!1),f=(0,i.useRef)(0),h=(0,i.useRef)(null);(0,i.useEffect)(()=>{if(!c.current)return;let t=d.current;if(null!==t)if(null!==h.current){let e=Math.max(t.scrollHeight-t.clientHeight,0);t.scrollTop=tg(h.current,0,e),h.current=null}else t.scrollTop=tb(t,e,f.current);c.current=!1},[d,e]);let u=""!==e.trim(),p=Object.values(a).filter(e=>null!==e).length,x=p===tf.length;return(0,t.jsxs)(ty,{children:[(0,t.jsxs)(tl,{children:[(0,t.jsx)(tj,{}),(0,t.jsx)(tr,{children:"자동으로 문장 생성하기"}),(0,t.jsx)(td,{onClick:o,children:(0,t.jsx)(v.X,{size:16})})]}),(0,t.jsx)(ts,{}),(0,t.jsx)(tc,{children:(0,t.jsxs)(tv,{children:[(0,t.jsxs)(t_,{children:[(0,t.jsx)(tn.default,{sx:{fontSize:16}}),(0,t.jsx)(tC,{children:"각 카테고리와 세부 항목을 선택하면, 내용에 맞는 문장이 하단에 자동으로 생성됩니다."})]}),(0,t.jsx)(tz,{children:tf.map(i=>{let l=a[i.key];return(0,t.jsxs)(tI,{children:[(0,t.jsxs)(tk,{children:[(0,t.jsx)(tE,{children:i.index}),(0,t.jsx)(tT,{children:i.label})]}),(0,t.jsx)(tS,{children:i.options.map(o=>(0,t.jsxs)(t$,{type:"button",$selected:l===o,onClick:()=>((t,i)=>{let l=a[t];if(l===i){let n=d.current,i="state1"===t?tu[l]:tp[l]??"",o=""===i?-1:e.indexOf(i);null!==n&&o>=0&&(h.current=tb(n,e,o,.5))}else h.current=null;let o={...a,[t]:l===i?null:i};r(o);let u=(e=>{let t=e.state1,n=e.state2;if(null===t||null===n)return"";let i=tu[t],l=tp[n]??"";return""===i.trim()||""===l.trim()?"":`○ 대상자의 식사영양관리 서비스 비용 청구 기간 중 ${i} ${l} 이에 따라 예외지급을 청구합니다.`.trim()})(o);""!==u.trim()&&s(),f.current=((e,t,n)=>{if(""===n.trim())return 0;let i=t[e];if(null===i)return 0;let l="state1"===e?tu[i]:tp[i]??"",o=""===l?-1:n.indexOf(l);return o>=0?o:0})(t,o,u),c.current=!0,n(u)})(i.key,o),children:[tx(i.optionLabels,o),l===o&&(0,t.jsx)(tt.default,{sx:{fontSize:16}})]},`${i.key}-${o}`))})]},i.key)})}),(0,t.jsx)(ts,{style:{marginTop:"auto"}}),(0,t.jsxs)(tO,{children:[(0,t.jsxs)(tL,{children:[(0,t.jsx)(_.default.AI,{size:16,color:"#4f39f6"}),"자동 생성 문장"]}),(0,t.jsx)(tA,{ref:d,value:e,placeholder:"카테고리/키워드와 세부 상태를 선택하면 문서에 사용할 문장이 자동으로 생성됩니다.",readOnly:!0})]}),(0,t.jsxs)(tR,{children:[(0,t.jsx)(tF,{type:"button",onClick:()=>{r({...th}),n("")},disabled:!u,children:"다시 생성하기"}),(0,t.jsxs)(tN,{type:"button",onClick:l,disabled:!(0===p||x),children:[(0,t.jsx)(tt.default,{sx:{fontSize:16}}),"보고서에 반영하기"]})]})]})})]})},nO=function({value:e,onChange:n,onApply:l,onClose:o}){let a=(0,i.useMemo)(()=>{let t,n;return t=e.split("\n").map(e=>e.trim()).filter(e=>""!==e),n={...tM},tD.forEach(e=>{let i=tB.find(n=>t.includes(e.sentences[n]));n[e.key]=i??null}),n},[e]),{ref:r,fire:d}=(0,Z.default)(),s=(0,i.useRef)(!1),c=(0,i.useRef)(0),f=(0,i.useRef)(null);(0,i.useEffect)(()=>{if(!s.current)return;let t=r.current;if(null!==t)if(null!==f.current){let e=Math.max(t.scrollHeight-t.clientHeight,0);t.scrollTop=tU(f.current,0,e),f.current=null}else t.scrollTop=tH(t,e,c.current);s.current=!1},[r,e]);let h=""!==e.trim();return(0,t.jsxs)(tY,{children:[(0,t.jsxs)(tl,{children:[(0,t.jsx)(tG,{}),(0,t.jsx)(tr,{children:"자동으로 문장 생성하기"}),(0,t.jsx)(td,{onClick:o,children:(0,t.jsx)(v.X,{size:16})})]}),(0,t.jsx)(ts,{}),(0,t.jsx)(tc,{children:(0,t.jsxs)(tX,{children:[(0,t.jsxs)(tK,{children:[(0,t.jsx)(tn.default,{sx:{fontSize:16}}),(0,t.jsx)(tq,{children:"각 카테고리와 세부 항목을 선택하면, 내용에 맞는 문장이 하단에 자동으로 생성됩니다."})]}),(0,t.jsx)(tJ,{children:tD.map(i=>{let l=a[i.key];return(0,t.jsxs)(tQ,{children:[(0,t.jsxs)(tZ,{children:[(0,t.jsx)(t0,{children:i.index}),(0,t.jsx)(t1,{children:i.label})]}),(0,t.jsx)(t2,{children:tB.map(o=>(0,t.jsxs)(t4,{type:"button",$selected:l===o,onClick:()=>((t,i)=>{let l=a[t];if(null!==l&&null===i){let n=r.current,i=tD.find(e=>e.key===t)?.sentences[l]??"",o=""===i?-1:e.indexOf(i);null!==n&&o>=0&&(f.current=tH(n,e,o,.5))}else f.current=null;let o={...a,[t]:i},h=tD.map(e=>{let t=o[e.key];return null===t?null:e.sentences[t]}).filter(e=>null!==e).join("\n\n");""!==h.trim()&&d(),c.current=((e,t,n)=>{if(""===n.trim())return 0;let i=t[e];if(null===i){let e=tD.findIndex(e=>null!==t[e.key]);if(e<0)return 0;let i=tD[e];if(void 0===i)return 0;let l=t[i.key];if(null===l)return 0;let o=i.sentences[l],a=n.indexOf(o);return a>=0?a:0}let l=tD.find(t=>t.key===e)?.sentences[i]??"",o=""===l?-1:n.indexOf(l);return o>=0?o:0})(t,o,h),s.current=!0,n(h)})(i.key,l===o?null:o),children:[tP[o],l===o&&(0,t.jsx)(tt.default,{sx:{fontSize:16}})]},`${i.key}-${o}`))})]},i.key)})}),(0,t.jsx)(ts,{style:{marginTop:"auto"}}),(0,t.jsxs)(t6,{children:[(0,t.jsxs)(t3,{children:[(0,t.jsx)(_.default.AI,{size:16,color:"#4f39f6"}),"자동 생성 문장"]}),(0,t.jsx)(t5,{ref:r,value:e,placeholder:"카테고리/키워드와 세부 상태를 선택하면 문서에 사용할 문장이 자동으로 생성됩니다.",readOnly:!0})]}),(0,t.jsxs)(t8,{children:[(0,t.jsx)(t9,{type:"button",onClick:()=>{n("")},disabled:!h,children:"다시 생성하기"}),(0,t.jsxs)(t7,{type:"button",onClick:l,children:[(0,t.jsx)(tt.default,{sx:{fontSize:16}}),"보고서에 반영하기"]})]})]})})]})};var nL=e.i(28095),nA=e.i(71274),nR=e.i(62897);let nF=(0,n.observer)(function(){let e=o.default.modal.documentView,[n,l]=(0,i.useState)(""),[a,r]=(0,i.useState)(!1),d=e.selectedTemplateId,s=e.selectedTemplate,c=(0,i.useMemo)(()=>null===d?[]:e.documents.filter(e=>e.templateId===d).sort((e,t)=>{let n=t.occurrenceKey.localeCompare(e.occurrenceKey);return 0!==n?n:t.createdAt.localeCompare(e.createdAt)}),[e.documents,d]),f=(0,i.useMemo)(()=>c[0]?.id??"",[c]),h=(0,i.useMemo)(()=>{let t=e.selectedDocumentId;return"string"==typeof t&&c.some(e=>e.id===t)?t:c.some(e=>e.id===n)?n:f},[c,f,e.selectedDocumentId,n]),u=c.some(e=>"COMPLETED"!==e.displayStatus),p=null!==s&&"MANUAL"===s.creationMode&&!1===u&&!1===a,x=async()=>{if(p&&null!==d){r(!0);try{await e.createDocumentFromTemplate(d)}finally{r(!1)}}};return(0,t.jsxs)(nN,{children:[(0,t.jsxs)(nD,{children:[(0,t.jsxs)(nM,{children:[(0,t.jsx)(_.default.Ballot,{size:16}),"서류 목록"]}),(0,t.jsxs)(nB,{disabled:!p,onClick:()=>void x(),children:[(0,t.jsx)(nL.default,{sx:{fontSize:20}}),"새 서류 생성하기"]})]}),(0,t.jsx)(nP,{value:h,onChange:t=>{let n=t.target.value;l(n),""!==n&&e.open(n)},disabled:0===c.length||a,children:c.map(e=>{let n=(0,nA.getDocumentStatusUi)(e.displayStatus),i=function(e){if(!nR.default.yearMonth.is(e))return null;let[t,n]=e.split("-"),i=Number(n);return!Number.isInteger(i)||i<1||i>12?null:`${t}년 ${i}월`}(e.occurrenceKey)??function(e){let t=new Date(e);if(Number.isNaN(t.getTime()))return e;let n=new Map(new Intl.DateTimeFormat("ko-KR",{timeZone:"Asia/Seoul",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}).formatToParts(t).map(e=>[e.type,e.value])),i=n.get("year")??"0000",l=n.get("month")??"00",o=n.get("day")??"00",a=n.get("hour")??"00",r=n.get("minute")??"00",d=n.get("second")??"00";return`${i}년 ${l}월 ${o}일 (${a}:${r}:${d}) 생성됨`}(e.createdAt);return(0,t.jsx)("option",{value:e.id,"data-badge":n.badge.label,"data-badge-tone":n.badge.color,children:i},e.id)})})]})}),nN=l.default.div.withConfig({componentId:"zh__sc-70c07d1f-0"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;

  padding: 16px 12px;
  border: 1px solid #d8dee7;
  border-radius: 8px;

  background: #fcfdff;
`,nD=l.default.div.withConfig({componentId:"zh__sc-70c07d1f-1"})`
  display: flex;
  justify-content: space-between;
  width: 100%;
`,nM=l.default.div.withConfig({componentId:"zh__sc-70c07d1f-2"})`
  display: flex;
  gap: 8px;
  align-items: center;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 16px; /* 100% */
  color: #0a0a0a;
`,nP=(0,l.default)(s.default.Input.Select).withConfig({componentId:"zh__sc-70c07d1f-3"})`
  width: 100%;
`,nB=(0,l.default)(s.default.Button.Outlined).withConfig({componentId:"zh__sc-70c07d1f-4"})`
  display: flex;
  gap: 4px;
  align-items: center;

  height: 40px;
  padding: 8px 16px;
`,nU=(0,n.observer)(function(){let{selectedOcrFile:e,isOcrAnalyzing:n,analyzeSelectedOcrFile:i,clearSelectedOcrFile:l}=o.default.modal.documentView;return(0,t.jsxs)(nW,{children:[(0,t.jsxs)(nY,{disabled:null===e||n,onClick:()=>{i()},children:["분석 시작",(0,t.jsx)(b,{size:16})]}),null!==e&&(0,t.jsx)(nV,{onClick:()=>{l()},children:"취소"})]})}),nW=l.default.div.withConfig({componentId:"zh__sc-11817043-0"})`
  display: flex;
  flex-flow: row-reverse;
  gap: 10px;
  align-self: stretch;
  justify-content: space-between;
`,nH=l.css`
  display: flex;
  flex-shrink: 0;
  gap: 10px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,nV=(0,l.default)(s.default.Button.Outlined).withConfig({componentId:"zh__sc-11817043-1"})`
  ${nH}
  visibility: hidden;
`,nY=(0,l.default)(s.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-11817043-2"})`
  ${nH}
`,{FILE_EXTENSION_WHITELIST_BY_GROUP:nG}=C.default.file,nX=(0,n.observer)(function(){var e;let n,{selectedOcrFile:i,isOcrAnalyzing:l,clearSelectedOcrFile:a}=o.default.modal.documentView;if(null===i)return null;let r=-1===(n=(e=i.name).lastIndexOf("."))?"":e.slice(n).toLowerCase();return(0,t.jsx)(nK,{children:(0,t.jsxs)(nq,{children:[(0,t.jsxs)(nJ,{children:[(0,t.jsx)(nQ,{children:nG.IMAGE.some(e=>e===r)?(0,t.jsx)(_.default.Photo,{size:17,color:"#FA8E43"}):nG.AUDIO.some(e=>e===r)?(0,t.jsx)(_.default.SpeechToText,{size:17,color:"#A855F7"}):nG.DOCUMENT.some(e=>e===r)?(0,t.jsx)(_.default.News,{size:17,color:"#2264E8"}):null}),(0,t.jsx)(nZ,{children:(0,t.jsx)(n0,{children:i.name})})]}),(0,t.jsxs)(n1,{onClick:a,disabled:l,children:["삭제",(0,t.jsx)(v.X,{size:16})]})]},`${i.name}-${i.size}-${i.lastModified}`)})}),nK=l.default.div.withConfig({componentId:"zh__sc-4e7cda26-0"})`
  overflow: auto hidden;
  display: flex;
  gap: 12px;
  align-items: flex-start;

  width: 100%;
  min-width: 0;
  padding-bottom: 6px;

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 999px;
    background: #d1d5db;
  }
`,nq=l.default.div.withConfig({componentId:"zh__sc-4e7cda26-1"})`
  display: flex;
  flex-shrink: 0;
  gap: 24px;
  align-items: center;

  padding: 12px 16px;
  border-radius: 8px;

  background: #f6f8fb;
`,nJ=l.default.div.withConfig({componentId:"zh__sc-4e7cda26-2"})`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`,nQ=l.default.div.withConfig({componentId:"zh__sc-4e7cda26-3"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;
  border-radius: 4px;

  background: #fff;
`,nZ=l.default.div.withConfig({componentId:"zh__sc-4e7cda26-4"})`
  display: flex;
  align-items: center;
  align-self: stretch;

  width: 196px;
  height: 40px;

  color: #0a0a0a;
`,n0=l.default.div.withConfig({componentId:"zh__sc-4e7cda26-5"})`
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #0a0a0a;
`,n1=l.default.button.withConfig({componentId:"zh__sc-4e7cda26-6"})`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;

  padding: 8px;
  border: 1px solid #45464e;
  border-radius: 99px;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 16px; /* 100% */
  color: #0a0a0a;
  letter-spacing: -1px;

  background: #fff;

  &:hover {
    background: #f9fafb;
  }

  &:active {
    background: #f3f4f6;
  }

  &:disabled {
    border-color: #d1d5db;
    color: #9ca3af;
    background-color: #f9fafb;
  }
`;function n2(){let[e,n]=(0,i.useState)(0);return(0,i.useEffect)(()=>{let e=performance.now(),t=0,i=l=>{n(Math.min(100*(1-Math.exp(-((l-e)/1e3*.05))),98)),t=window.requestAnimationFrame(i)};return t=window.requestAnimationFrame(i),()=>{window.cancelAnimationFrame(t)}},[]),(0,t.jsx)(n4,{children:(0,t.jsx)(n6,{$progress:e})})}let n4=l.default.div.withConfig({componentId:"zh__sc-c9208651-0"})`
  overflow: hidden;
  display: flex;
  align-self: stretch;

  width: 100%;
  height: ${8}px;
  border-radius: 99px;

  background: #e6e0ff;
  background-color: #e5e2ff;
`,n6=l.default.div.attrs(({$progress:e})=>({style:{transform:`scaleX(${e/100})`}})).withConfig({componentId:"zh__sc-c9208651-1"})`
  transform-origin: left center;
  width: 100%;
  height: 100%;
  background-color: #5635ff;
`,n3=(0,n.observer)(function({disabled:e}){let{isWindowFileDragging:n}=o.default.ui.layout,{selectedOcrFile:i,isOcrFileError:l,isOcrAnalyzing:a}=o.default.modal.documentView,r=l?"지원하지 않는 파일 형식입니다.":!e&&n?"파일을 여기에 놓으면 업로드 됩니다.":a?"업로드한 파일을 분석하고 있습니다.":"이곳에 파일을 끌어다 놓거나 (드래그 앤 드롭), 클릭하여 업로드하세요.";return(0,t.jsxs)(n8,{children:[null===i&&!l&&(0,t.jsx)(n9,{children:(0,t.jsx)(A.Upload,{size:26,color:e?"#9ca3af":n5[100]})}),(0,t.jsxs)(n7,{children:[(0,t.jsx)(ie,{$disabled:e,$isError:l,children:r}),(0,t.jsx)(it,{$disabled:e,children:null===i||a?"지원 파일 형식: 사진 이미지":"새 파일을 업로드하면 기존 파일이 교체됩니다."})]}),a&&(0,t.jsx)(n2,{})]})}),{PRIMARY:n5}=R.default.style.color,n8=l.default.div.withConfig({componentId:"zh__sc-cdea1a21-0"})`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  align-self: stretch;
  justify-content: center;
`,n9=l.default.div.withConfig({componentId:"zh__sc-cdea1a21-1"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;
`,n7=l.default.div.withConfig({componentId:"zh__sc-cdea1a21-2"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  align-self: stretch;
  justify-content: center;
`,ie=l.default.div.withConfig({componentId:"zh__sc-cdea1a21-3"})`
  font-size: 14px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 142.857% */
  color: ${({$disabled:e,$isError:t})=>t?"#ff4d4f":e?"#9ca3af":"#4f39f6"};
  text-align: center;
`,it=l.default.div.withConfig({componentId:"zh__sc-cdea1a21-4"})`
  font-size: 14px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 142.857% */
  color: ${({$disabled:e})=>e?"#9ca3af":"#99a1af"};
`,ii=C.default.file.FILE_EXTENSION_WHITELIST_BY_GROUP.IMAGE.join(","),il=(0,n.observer)(function(){let{isWindowFileDragging:e}=o.default.ui.layout,n=o.default.modal.documentView,{selectedDocument:l,selectedOcrFile:a,isOcrFileError:r}=n,d=(0,i.useRef)(null),s=l?.displayStatus!=="WAITING_TO_DRAFT"&&l?.displayStatus!=="NEED_UPDATE",c=e=>{n.setSelectedOcrFile(e)};return(0,x.default)(e=>{if(s)return;let t=e[0];void 0!==t&&c(t)}),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(io,{ref:d,type:"file",accept:ii,disabled:s,onChange:e=>{if(s)return;let t=Array.from(e.target.files??[]);if(0===t.length)return;let n=t[0];void 0!==n&&(c(n),e.target.value="")}}),(0,t.jsxs)(ia,{$isWindowFileDragging:e,$disabled:s,onDragOver:e=>{if(e.preventDefault(),s)return},onDrop:e=>{if(e.preventDefault(),s)return;let t=Array.from(e.dataTransfer.files);if(0===t.length)return;let n=t[0];void 0!==n&&c(n)},onClick:e=>{!s&&e.target instanceof HTMLElement&&(e.target.closest("button")||d.current?.click())},$isError:r,children:[null!==a&&(0,t.jsx)(nX,{}),(0,t.jsx)(n3,{disabled:s}),(0,t.jsx)(nU,{})]})]})}),io=l.default.input.withConfig({componentId:"zh__sc-c05f4a71-0"})`
  display: none;
`,ia=l.default.div.withConfig({componentId:"zh__sc-c05f4a71-1"})`
  pointer-events: ${({$disabled:e})=>e?"none":"auto"};
  cursor: ${({$disabled:e})=>e?"default":"pointer"};

  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  align-self: stretch;

  min-width: 0;
  padding: 24px 40px;
  border: 1px solid
    ${({$disabled:e,$isError:t})=>e?"#d1d5db":t?"#ff4d4f":"#4f39f6"};
  border-style: ${({$disabled:e,$isWindowFileDragging:t})=>e?"solid":t?"dashed":"solid"};
  border-radius: 16px;

  background: ${({$disabled:e,$isWindowFileDragging:t,$isError:n})=>e?"#F6F8FA":n?"#FFF5F5":t?"#f6f3ff":"#fff"};

  &:hover {
    background-color: ${({$disabled:e,$isError:t})=>e?"#F6F8FA":t?"#FFF5F5":"#f6f3ff"};
  }

  &:active {
    background-color: ${({$disabled:e,$isError:t})=>e?"#F6F8FA":t?"#FFF5F5":"#efeaff"};
  }
`,{FILE_EXTENSION_WHITELIST_BY_GROUP:ir}=C.default.file,id=(0,n.observer)(function(){var e;let n,{analyzedOcrFile:l}=o.default.modal.documentView,{ref:a,fire:r}=(0,Z.default)();if((0,i.useEffect)(()=>{null!==l&&r()},[l,r]),null===l)return null;let d=-1===(n=(e=l.name).lastIndexOf("."))?"":e.slice(n).toLowerCase();return(0,t.jsxs)(is,{ref:a,children:[(0,t.jsxs)(ic,{children:[(0,t.jsxs)(ih,{children:[(0,t.jsx)(_.default.FindInPage,{size:18}),"AI 문서 인식 완료"]}),(0,t.jsxs)(iu,{children:["업로드된 서류들에서 정보를 성공적으로 추출했습니다. ",(0,t.jsx)("br",{})]})]}),(0,t.jsxs)(ip,{children:[(0,t.jsxs)(ix,{children:[(0,t.jsx)(_.default.CheckCircle,{size:18}),"분석 완료된 첨부 서류 (1건)"]}),(0,t.jsx)(ig,{children:(0,t.jsxs)(im,{children:[(0,t.jsxs)(ib,{children:[(0,t.jsx)(iw,{children:ir.IMAGE.some(e=>e===d)?(0,t.jsx)(_.default.Photo,{size:17,color:"#FA8E43"}):ir.AUDIO.some(e=>e===d)?(0,t.jsx)(_.default.SpeechToText,{size:17,color:"#A855F7"}):ir.DOCUMENT.some(e=>e===d)?(0,t.jsx)(_.default.News,{size:17,color:"#2264E8"}):null}),(0,t.jsx)(iy,{children:(0,t.jsx)(ij,{children:l.name})})]}),(0,t.jsx)(iv,{children:"추출 완료"})]},`${l.name}-${l.size}-${l.lastModified}`)})]})]})}),is=l.default.div.withConfig({componentId:"zh__sc-91a1d4f6-0"})`
  overflow: hidden;
  display: flex;
  flex: 0 1 auto;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  align-self: stretch;

  min-height: 0;
  max-height: 100%;
  padding: 24px 40px;
  border-radius: 16px;

  background: #fff;
`,ic=l.default.div.withConfig({componentId:"zh__sc-91a1d4f6-1"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  align-self: stretch;
`,ih=l.default.div.withConfig({componentId:"zh__sc-91a1d4f6-2"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #0a0a0a;
`,iu=l.default.div.withConfig({componentId:"zh__sc-91a1d4f6-3"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;

  padding-left: 26px;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #0a0a0a;
`,ip=l.default.div.withConfig({componentId:"zh__sc-91a1d4f6-4"})`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  align-self: stretch;

  min-height: 0;
`,ix=l.default.div.withConfig({componentId:"zh__sc-91a1d4f6-5"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #0a0a0a;
`,ig=l.default.div.withConfig({componentId:"zh__sc-91a1d4f6-6"})`
  overflow-y: auto;
  display: flex;
  flex: 1 1 auto;
  flex-wrap: wrap;
  row-gap: 12px;
  place-content: flex-start space-between;
  align-items: flex-start;
  align-self: stretch;

  min-height: 0;
  max-height: 116px;
  padding-right: 4px;
`,im=l.default.div.withConfig({componentId:"zh__sc-91a1d4f6-7"})`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 359px;
  height: 64px;
  padding: 12px 16px;
  border-radius: 8px;

  background: #f6f8fb;
`,ib=l.default.div.withConfig({componentId:"zh__sc-91a1d4f6-8"})`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`,iw=l.default.div.withConfig({componentId:"zh__sc-91a1d4f6-9"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;
  border-radius: 4px;

  background: #fff;
`,iy=l.default.div.withConfig({componentId:"zh__sc-91a1d4f6-10"})`
  display: flex;
  align-items: center;
  align-self: stretch;

  width: 196px;
  height: 40px;

  color: #0a0a0a;
`,ij=l.default.div.withConfig({componentId:"zh__sc-91a1d4f6-11"})`
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #0a0a0a;
`,iv=l.default.div.withConfig({componentId:"zh__sc-91a1d4f6-12"})`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;

  padding: 8px;
  border: 1px solid #4f39f6;
  border-radius: 99px;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 16px; /* 100% */
  color: #fff;
  letter-spacing: -1px;

  background: #4f39f6;
`,i_=(0,n.observer)(function(){let{analyzedOcrFile:e}=o.default.modal.documentView;return(0,t.jsxs)(iC,{children:[(0,t.jsx)(il,{}),null!==e&&(0,t.jsx)(id,{})]})}),iC=l.default.div.withConfig({componentId:"zh__sc-b3f3f20d-0"})`
  display: flex;
  flex: 1 0 0;
  flex-flow: column-reverse;
  gap: 12px;
  align-items: center;
  justify-content: space-between;

  width: 517px;
  padding: 32px 24px;
  border-radius: 16px;

  background: #f9fafb;
`,iz=l.default.div.withConfig({componentId:"zh__sc-80a26ee5-0"})`
  position: relative;
  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 16px;
  height: 16px;
  border: 1px solid
    ${({$status:e})=>"done"===e||"current"===e?"#0bb984":"#d9d9d9"};
  border-radius: 999px;

  background: ${({$status:e})=>"done"===e?"#0bb984":"#ffffff"};
`,iI=(0,n.observer)(function(){let e=o.default.client.info.byClient.selectedContractId,n=(o.default.data.contract.list.data??[]).find(t=>t.id===e)??null,i=function(e){if(null==e||""===e.trim())return"-";let t=new Date(e);if(Number.isNaN(t.getTime()))return"-";let n=String(t.getFullYear()),i=String(t.getMonth()+1).padStart(2,"0"),l=String(t.getDate()).padStart(2,"0"),o=String(t.getHours()).padStart(2,"0"),a=String(t.getMinutes()).padStart(2,"0");return`${n}-${i}-${l} ${o}:${a}`}(n?.client.createdAt??n?.createdAt),l=n?.client.name??"-";return(0,t.jsx)(ik,{children:(0,t.jsxs)(iE,{children:[(0,t.jsxs)(iT,{children:[(0,t.jsx)(iS,{children:(0,t.jsxs)(i$,{children:[(0,t.jsx)(iz,{$status:"done",children:(0,t.jsx)(d.Check,{size:12,color:"#ffffff",strokeWidth:3})}),"기존 이용자 정보 연동 완료"]})}),(0,t.jsx)(iO,{children:(0,t.jsx)(iL,{children:`업로드 일시: ${i}`})})]}),(0,t.jsx)(iA,{children:(0,t.jsx)(iR,{children:`이용자 ${l}님의 기존 이용 내역과 갱신된 요금 정보가 성공적으로 양식에 매핑되었습니다.`})})]})})}),ik=l.default.div.withConfig({componentId:"zh__sc-a82a8c4-0"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;
`,iE=l.default.div.withConfig({componentId:"zh__sc-a82a8c4-1"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;

  height: 146px;
  padding: 16px 12px;
  border: 1px solid #d8dee7;
  border-radius: 8px;

  background: #fcfdff;
`,iT=l.default.div.withConfig({componentId:"zh__sc-a82a8c4-2"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  align-self: stretch;
`,iS=l.default.div.withConfig({componentId:"zh__sc-a82a8c4-3"})`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;
`,i$=l.default.div.withConfig({componentId:"zh__sc-a82a8c4-4"})`
  display: flex;
  gap: 4px;
  align-items: center;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 16px; /* 100% */
  color: #0a0a0a;
`,iO=l.default.div.withConfig({componentId:"zh__sc-a82a8c4-5"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  align-self: stretch;

  padding-left: 24px;
`,iL=l.default.div.withConfig({componentId:"zh__sc-a82a8c4-6"})`
  display: flex;
  flex: 1 0 0;
  gap: 10px;
  align-items: center;
  align-self: stretch;

  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  line-height: 16px; /* 114.286% */
  color: #45464e;
`,iA=l.default.div.withConfig({componentId:"zh__sc-a82a8c4-7"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  align-self: stretch;

  padding-left: 24px;
`,iR=l.default.div.withConfig({componentId:"zh__sc-a82a8c4-8"})`
  display: flex;
  gap: 10px;
  align-items: center;
  align-self: stretch;
  justify-content: center;

  font-size: 14px;
  font-weight: 400;
  font-style: normal;
  line-height: 18px; /* 128.571% */
  color: #45464e;
`,iF=(0,n.observer)(function(){let e=o.default.modal.documentView,{selectedTemplate:n}=e,i=n?.creationMode==="MANUAL",l=null===n?0:e.documents.filter(e=>e.templateId===n.id).length,a=i||null!==n&&l>=2;return(0,t.jsxs)(iN,{children:[(0,t.jsx)(iD,{children:(0,t.jsx)(iM,{children:n?.name??"계약서 자동 생성"})}),(0,t.jsxs)(iP,{children:[a?(0,t.jsx)(nF,{}):null,(0,t.jsx)(iI,{}),(0,t.jsx)(i_,{})]})]})}),iN=l.default.div.withConfig({componentId:"zh__sc-61494f9e-0"})`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  justify-content: space-between;

  width: 541px;
  border-right: 1px solid #e5e7eb;

  background: #fff;
`,iD=l.default.div.withConfig({componentId:"zh__sc-61494f9e-1"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;

  padding: 16px 20px;
  border-bottom: 1px solid #e5e7eb;

  background: #fff;
`,iM=l.default.div.withConfig({componentId:"zh__sc-61494f9e-2"})`
  display: flex;
  flex: 1 0 0;
  gap: 10px;
  align-items: center;

  font-size: 20px;
  font-weight: 700;
  font-style: normal;
  line-height: 28px; /* 140% */
  color: #0a0a0a;
  letter-spacing: -1px;
`,iP=l.default.div.withConfig({componentId:"zh__sc-61494f9e-3"})`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;

  padding: 16px 12px;
`;function iB(){return(iB=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var iU=(0,i.forwardRef)(function(e,t){var n=e.color,l=e.size,o=void 0===l?24:l,a=function(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["color","size"]);return i.default.createElement("svg",iB({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),i.default.createElement("polyline",{points:"6 9 6 2 18 2 18 9"}),i.default.createElement("path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"}),i.default.createElement("rect",{x:"6",y:"14",width:"12",height:"8"}))});iU.propTypes={color:g.default.string,size:g.default.oneOfType([g.default.string,g.default.number])},iU.displayName="Printer";var iW=e.i(69477),iH=e.i(68339),iV=e.i(70888);let iY=(0,n.observer)(function({isSaving:e,setIsSaving:n,resetLocalStates:l}){let{close:a,selectedDocument:r}=o.default.modal.documentView,s=o.default.modal.documentView,c=o.default.client.info.byClient.representativeContract?.client.name?.trim()??"",[f,h]=(0,i.useState)(!1),[u,p]=(0,i.useState)(!1),x=s.selectedTemplateImagePaths.filter(e=>""!==e),g=null!==r&&x.length>0,m=(0,nA.getDocumentStatusUi)(r?.displayStatus).badge,b=(0,iV.shouldSaveDocumentBeforePrint)(r?.displayStatus),w=async()=>{if(g&&!u&&!e){p(!0);try{if(b){n(!0);try{await s.saveSelectedFieldChanges()}finally{n(!1)}await new Promise(e=>{window.setTimeout(e,600)})}let e=s.selectedTemplateId;if(null===e)return;let t=x.map((t,n)=>({id:`${e}-${n+1}`,templateId:e,imagePath:t,page:n+1}));if(0===t.length)return;let i=s.selectedTemplate?.name?.trim()??"",l=""===i?"Print":i,a=""===c?l:`${l} - ${c}`;await (0,iH.renderDocumentPrintView)({pages:t,fields:s.selectedTemplateFields,printTitle:a,onImageLoadFailure:e=>{o.default.ui.layout.toast.error(`서류 이미지 ${e}개 로딩에 실패하여 출력을 중단했습니다.`)}})}finally{p(!1)}}},y=()=>{l(),a()},j=async()=>{if(!e){n(!0);try{await s.saveSelectedFieldChanges()}finally{n(!1)}}},C=async()=>{if(!e){n(!0);try{await s.patchSelectedDocumentStatusPrevious()}finally{n(!1)}}},z=async()=>{if(!e){n(!0);try{await s.saveSelectedFieldChanges(),h(!1),y()}finally{n(!1)}}};return(0,t.jsxs)(iG,{children:[(0,t.jsxs)(iX,{children:[(0,t.jsxs)(iK,{children:[(0,t.jsx)(iq,{children:"서류 상태"}),(0,t.jsxs)(iJ,{$color:m.color,children:[m.icon,m.label]})]}),(0,t.jsx)(iQ,{}),(0,t.jsxs)(iZ,{children:[(0,t.jsxs)(i0,{type:"button",disabled:!g||u||e,onClick:()=>{w()},children:[(0,t.jsx)(iU,{size:16}),"출력하기"]}),r?.displayStatus==="COMPLETED"?(0,t.jsxs)(i0,{$processing:e,onClick:()=>void C(),children:[(0,t.jsx)(_.default.Undo,{size:14}),"확인 취소"]}):r?.displayStatus==="NEED_UPDATE"?(0,t.jsxs)(i0,{$processing:e,onClick:()=>void j(),children:[e?(0,t.jsx)(iW.RotateCw,{size:16}):(0,t.jsx)(d.Check,{size:16}),e?"저장중":"최종확인 및 저장"]}):null,(0,t.jsxs)(i1,{type:"button",onClick:()=>{s.hasSelectedFieldChanges?h(!0):y()},children:[(0,t.jsx)(v.X,{size:16}),"닫기"]})]})]}),(0,t.jsx)(e2,{isOpen:f,actionType:"exit",isProcessing:e,onClickSecondary:()=>{h(!1),y()},onClickPrimary:()=>{z()}})]})}),iG=l.default.div.withConfig({componentId:"zh__sc-fa5a83d4-0"})`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: flex-end;

  padding: 12px 24px;
  border-bottom: 1px solid #e5e7eb;

  background: #fff;
`,iX=l.default.div.withConfig({componentId:"zh__sc-fa5a83d4-1"})`
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: flex-end;
`,iK=l.default.div.withConfig({componentId:"zh__sc-fa5a83d4-2"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,iq=l.default.div.withConfig({componentId:"zh__sc-fa5a83d4-3"})`
  font-size: 14px;
  font-weight: 400;
  font-style: normal;
  line-height: normal;
  color: #737380;
`,iJ=l.default.div.withConfig({componentId:"zh__sc-fa5a83d4-4"})`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 4px 8px;
  border-radius: 99px;

  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #fff;

  background: ${({$color:e})=>{switch(e){case"lightBlue":return"#9FBFFF";case"blue":return"#2264E8";case"orange":return"#FF6900";case"black":return"#0A0A0A";default:return"#77798B"}}};
`,iQ=l.default.div.withConfig({componentId:"zh__sc-fa5a83d4-5"})`
  width: 1px;
  height: 24px;
  background: #d1d1d9;
`,iZ=l.default.div.withConfig({componentId:"zh__sc-fa5a83d4-6"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,i0=(0,l.default)(s.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-fa5a83d4-7"})`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;

  height: 36px;
  padding: 8px 16px;

  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: 20px;
`,i1=(0,l.default)(s.default.Button.Outlined).withConfig({componentId:"zh__sc-fa5a83d4-8"})`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;

  height: 36px;
  padding: 8px 16px;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px;
  color: #4f39f6;
`,i2=(0,n.observer)(function(){let e=o.default.modal.documentView,n=e.selectedDocument?.displayStatus!=="COMPLETED",l=e.autocompleteServiceEndReportUserChangeLevelUIState,r=e.autocompleteCaseManagementRecordCaseContentUIState,[d,s]=(0,i.useState)(1),[c,f]=(0,i.useState)(null),[h,u]=(0,i.useState)(!1),[p,x]=(0,i.useState)(!1),[g,m]=(0,i.useState)(null),[b,w]=(0,i.useState)(""),[y,j]=(0,i.useState)(""),v=(0,i.useRef)(null),_=(0,i.useRef)(null),C=(0,i.useRef)([]),z=e.selectedTemplateImagePaths,I=Math.max(z?.length??0,1),k=Math.min(d,I),E=(0,i.useCallback)((e,t="instant")=>{let n=_.current,i=C.current[e-1];if(!n||!i)return;let l=Math.max(i.offsetTop-n.offsetTop-12,0);n.scrollTo({top:l,behavior:t})},[]),T=t=>(-1!==t||!1!==e.canMovePrevTemplate)&&(1!==t||!1!==e.canMoveNextTemplate)&&(-1===t?e.movePrevTemplate():e.moveNextTemplate(),s(1),f(null),u(!1),_.current?.scrollTo({top:0,behavior:"auto"}),!0),S=async()=>e.hasSelectedFieldChanges?(m(-1),x(!0),!1):T(-1),$=async()=>e.hasSelectedFieldChanges?(m(1),x(!0),!1):T(1),O=async()=>{if(!h&&null!==g){u(!0);try{await e.saveSelectedFieldChanges(),T(g),m(null),x(!1)}finally{u(!1)}}};(0,i.useEffect)(()=>{let t=t=>{"ready"===e.status&&!1!==e.hasSelectedFieldChanges&&t.preventDefault()};return window.addEventListener("beforeunload",t),()=>{window.removeEventListener("beforeunload",t)}},[e.hasSelectedFieldChanges,e.status]),(0,i.useEffect)(()=>"ready"!==e.status?void e.setToastContainer(null):(e.setToastContainer(v.current),()=>{e.setToastContainer(null)}),[e,e.status]);let L=()=>{if(null===c)return;let e=c.replace(/[^\d]/g,"");if(""===e)return void f(null);let t=Number(e);if(!Number.isFinite(t))return void f(null);let n=Math.min(Math.max(t,1),I);s(n),f(null),E(n)};return"ready"!==e.status?null:(0,t.jsx)(a.default,{children:(0,t.jsxs)(i4,{ref:v,children:[(0,t.jsx)(iF,{}),(0,t.jsxs)(i6,{children:[(0,t.jsx)(iY,{isSaving:h,setIsSaving:u,resetLocalStates:()=>{s(1),f(null),u(!1)}}),(0,t.jsxs)(i3,{children:[(0,t.jsx)(le,{type:"button","aria-label":"이전 문서",onClick:()=>void S(),children:(0,t.jsx)(eQ.ChevronLeft,{size:24})}),(0,t.jsx)(i5,{ref:_,onScroll:()=>{let e=_.current;if(!e)return;let t=e.scrollTop,n=1,i=1/0;C.current.forEach((l,o)=>{if(!l)return;let a=Math.abs(l.offsetTop-e.offsetTop-t);a<i&&(i=a,n=o+1)}),n!==d&&s(n)},children:Array.from({length:I},(i,o)=>{let a,d,s;return(0,t.jsx)(i8,{$active:!0,ref:e=>{C.current[o]=e},children:(0,t.jsx)(i9,{children:(d="string"==typeof(a=z?.[o])?""===a?null:a:null,s=e.getSelectedTemplateFieldsByPage(o+1),null===d?(0,t.jsx)(i7,{}):(0,t.jsx)(e0.default,{imagePath:d,fields:s,readOnly:!n,onAssistTriggerClick:({triggerKey:t,field:n})=>{if(t===e1.default.SOURCE_CLICK_AUTOCOMPLETE_SERVICE_END_REPORT_USER_CHANGE_LEVEL_BUTTON){w(e.getAutocompleteServiceEndReportUserChangeLevelTargetValue()),e.openAutocompleteServiceEndReportUserChangeLevelDrawer(n);return}if(t===e1.default.SOURCE_CLICK_AUTOCOMPLETE_CASE_MANAGEMENT_RECORD_CASE_CONTENT_BUTTON){j(e.getAutocompleteCaseManagementRecordCaseContentTargetValue()),e.openAutocompleteCaseManagementRecordCaseContentDrawer(n);return}t===e1.default.SOURCE_CLICK_SELECT_ALL_GENERAL_MEAL?e.selectAllMealTypeForSelectedDocument("GENERAL"):t===e1.default.SOURCE_CLICK_SELECT_ALL_THERAPEUTIC_MEAL?e.selectAllMealTypeForSelectedDocument("THERAPEUTIC"):t===e1.default.SOURCE_CLICK_SELECT_ALL_TEXTURE_MODIFIED_MEAL&&e.selectAllMealTypeForSelectedDocument("TEXTURE_MODIFIED")},isAssistButtonDisabled:({triggerKey:e})=>e===e1.default.SOURCE_CLICK_AUTOCOMPLETE_SERVICE_END_REPORT_USER_CHANGE_LEVEL_BUTTON?!n||!0===l.isDrawerOpen:e===e1.default.SOURCE_CLICK_AUTOCOMPLETE_CASE_MANAGEMENT_RECORD_CASE_CONTENT_BUTTON?!n||!0===r.isDrawerOpen:void 0,resolveAssistButtonLabel:({triggerKey:t})=>t===e1.default.SOURCE_CLICK_AUTOCOMPLETE_SERVICE_END_REPORT_USER_CHANGE_LEVEL_BUTTON?e.autocompleteServiceEndReportUserChangeLevelButtonLabel:t===e1.default.SOURCE_CLICK_AUTOCOMPLETE_CASE_MANAGEMENT_RECORD_CASE_CONTENT_BUTTON?e.autocompleteCaseManagementRecordCaseContentButtonLabel:t===e1.default.SOURCE_CLICK_SELECT_ALL_GENERAL_MEAL?"일반식 전체":t===e1.default.SOURCE_CLICK_SELECT_ALL_THERAPEUTIC_MEAL?"치료식 전체":t===e1.default.SOURCE_CLICK_SELECT_ALL_TEXTURE_MODIFIED_MEAL?"저작 및 연하 도움식 전체":void 0,resolveAssistButtonChecked:({triggerKey:t})=>t===e1.default.SOURCE_CLICK_SELECT_ALL_GENERAL_MEAL?e.isGeneralMealTypeAllSelected:t===e1.default.SOURCE_CLICK_SELECT_ALL_THERAPEUTIC_MEAL?e.isTherapeuticMealTypeAllSelected:t===e1.default.SOURCE_CLICK_SELECT_ALL_TEXTURE_MODIFIED_MEAL?e.isTextureModifiedMealTypeAllSelected:void 0,isFieldEditable:t=>e.isSelectedFieldEditable(t),isFieldAutoFilled:t=>e.isSelectedFieldAutoFilled(t),onChangeField:(t,n)=>{if("radio"===t.uiProps.fieldType){"true"===n&&e.toggleSelectedRadioGroup(t);return}e.updateSelectedFieldValue({page:t.page,fieldKey:t.fieldKey,value:n})}}))})},`screen-page-${o+1}`)})}),(0,t.jsx)(le,{type:"button","aria-label":"다음 문서",onClick:()=>void $(),$right:!0,children:(0,t.jsx)(eZ.ChevronRight,{size:24})}),(0,t.jsx)(lt,{children:(0,t.jsxs)(ln,{children:[(0,t.jsxs)(li,{type:"button",disabled:1===k,onClick:()=>{let e=Math.max(k-1,1);s(e),f(null),E(e)},children:[(0,t.jsx)(eJ,{size:16,color:1===k?"#9ca3af":"#0a0a0a"}),(0,t.jsx)(ll,{$muted:1===k,children:"이전"})]}),(0,t.jsxs)(lo,{children:[(0,t.jsx)(la,{children:(0,t.jsx)(lr,{type:"text",inputMode:"numeric","aria-label":"페이지 번호 입력",value:c??String(k),onFocus:()=>{f(String(k))},onChange:e=>{f(e.target.value)},onBlur:L,onKeyDown:e=>{"Enter"===e.key&&(e.preventDefault(),L(),e.currentTarget.blur())}})}),(0,t.jsx)(la,{children:(0,t.jsx)(ls,{children:"/"})}),(0,t.jsx)(la,{children:(0,t.jsx)(lc,{children:I})})]}),(0,t.jsxs)(li,{type:"button",disabled:k===I,onClick:()=>{let e=Math.min(k+1,I);s(e),f(null),E(e)},children:[(0,t.jsx)(ll,{$muted:k===I,children:"다음"}),(0,t.jsx)(eK,{size:16,color:k===I?"#9ca3af":"#0a0a0a"})]})]})}),!0===l.isDrawerOpen?(0,t.jsx)(nO,{value:b,onChange:w,onClose:()=>e.closeAutocompleteServiceEndReportUserChangeLevelDrawer(),onApply:()=>e.applyAutocompleteServiceEndReportUserChangeLevelResult(b)}):null,!0===r.isDrawerOpen?(0,t.jsx)(n$,{value:y,onChange:j,onClose:()=>e.closeAutocompleteCaseManagementRecordCaseContentDrawer(),onApply:()=>e.applyAutocompleteCaseManagementRecordCaseContentResult(y)}):null]}),(0,t.jsx)(e2,{isOpen:p,actionType:"move",isProcessing:h,onClickSecondary:()=>{m(null),x(!1),null!==g&&(e.discardSelectedFieldChanges(),T(g))},onClickPrimary:()=>{O()}})]})]})})}),i4=l.default.div.withConfig({componentId:"zh__sc-7a537607-0"})`
  position: relative;

  overflow: hidden;
  display: flex;
  flex-shrink: 0;
  align-items: flex-start;

  width: 1712px;
  min-width: 1712px;
  border-radius: 8px;
`,i6=l.default.div.withConfig({componentId:"zh__sc-7a537607-1"})`
  position: relative;

  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;

  height: 989px;
`,i3=l.default.div.withConfig({componentId:"zh__sc-7a537607-2"})`
  position: relative;

  display: flex;
  flex: 1 0 0;
  align-self: stretch;

  min-height: 0;
`,i5=l.default.div.withConfig({componentId:"zh__sc-7a537607-3"})`
  overflow-y: auto;
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  align-self: stretch;

  min-height: 0;
  padding: 12px 24px 64px;
  border-bottom: 1px solid #e5e7eb;

  background: #f9fafb;
`,i8=l.default.div.withConfig({componentId:"zh__sc-7a537607-4"})`
  display: ${({$active:e})=>e?"block":"none"};
  width: calc(210mm * ${.75});
  height: calc(297mm * ${.75});
  box-shadow: 0 0 8px 0 rgb(0 0 0 / 10%);
`,i9=l.default.div.withConfig({componentId:"zh__sc-7a537607-5"})`
  transform-origin: top left;
  transform: scale(${.75});
  width: 210mm;
  height: 297mm;
`,i7=l.default.div.withConfig({componentId:"zh__sc-7a537607-6"})`
  width: 210mm;
  height: 297mm;
  background: #f9fafb;
`,le=l.default.button.withConfig({componentId:"zh__sc-7a537607-7"})`
  position: absolute;
  top: 50%;
  ${({$right:e})=>!0===e?"right: 18px;":"left: 18px;"}
  transform: translateY(-50%);

  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 40px;
  height: 40px;
  padding: 0;
  border: 1px solid #e5e9ef;
  border-radius: 999px;

  color: #0a0a0a;

  background: #fff;

  &:hover {
    border: 1px solid #4f39f6;
    color: #4f39f6;
    background: #f7f5ff;
  }
`,lt=l.default.div.withConfig({componentId:"zh__sc-7a537607-8"})`
  pointer-events: none;

  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 55px;

  background: linear-gradient(180deg, rgb(249 250 251 / 70%) -0.93%, #f9fafb 72.63%);
`,ln=l.default.div.withConfig({componentId:"zh__sc-7a537607-9"})`
  pointer-events: auto;

  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: center;

  padding: 8px 16px;
  border: 1px solid #e5e9ef;
  border-radius: 99px;

  background: #fff;
`,li=l.default.button.withConfig({componentId:"zh__sc-7a537607-10"})`
  display: flex;
  gap: 4px;
  align-items: center;

  padding: 0;
  border: none;

  background: transparent;

  &:not(:disabled) {
    cursor: pointer;
  }

  &:disabled {
    cursor: not-allowed;
  }
`,ll=l.default.span.withConfig({componentId:"zh__sc-7a537607-11"})`
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 16px;
  color: ${({$muted:e})=>!0===e?"#9ca3af":"#0a0a0a"};
  letter-spacing: -1px;
`,lo=l.default.div.withConfig({componentId:"zh__sc-7a537607-12"})`
  display: flex;
  gap: 2px;
  align-items: center;
`,la=l.default.div.withConfig({componentId:"zh__sc-7a537607-13"})`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 20px;
`,lr=l.default.input.withConfig({componentId:"zh__sc-7a537607-14"})`
  width: 40px;
  height: 27px;
  border: 1px solid #e5e9ef;
  border-radius: 4px;

  font-size: 16px;
  color: #0a0a0a;
  text-align: center;
  letter-spacing: -1px;

  background: #fff;

  &:hover {
    border-color: #b8c0d0;
    background: #fbfcff;
  }

  &:focus {
    border-color: #5635ff;
    background: #fbfcff;
    outline: none;
  }
`,ld=l.default.span.withConfig({componentId:"zh__sc-7a537607-15"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: 16px;
  text-align: center;
  letter-spacing: -1px;
`,ls=(0,l.default)(ld).withConfig({componentId:"zh__sc-7a537607-16"})`
  color: #0a0a0a;
`,lc=(0,l.default)(ld).withConfig({componentId:"zh__sc-7a537607-17"})`
  color: #0a0a0a;
`;var lf=e.i(84673),lh=e.i(89656);let{SERVICE_TYPE:lu,BANK_NAME:lp}=R.default.enums;function lx(){let e=o.default.modal.organization.accountAdd,n="edit"===e.mode,[l,r]=(0,i.useState)(e.serviceType),[d,s]=(0,i.useState)(e.accountNumber),[c,f]=(0,i.useState)(e.bankName),[h,u]=(0,i.useState)(e.accountHolder),[p,x]=(0,i.useState)(e.useFlag),[g,m]=(0,i.useState)(""),[b,w]=(0,i.useState)(""),[y,j]=(0,i.useState)(!1),v=d.trim(),_=h.trim(),C=e.accountNumber.trim(),z=e.accountHolder.trim(),I=l!==e.serviceType||v!==C||c!==e.bankName||_!==z||p!==e.useFlag,k=()=>{y||(r(e.serviceType),s(e.accountNumber),f(e.bankName),u(e.accountHolder),x(e.useFlag),m(""),w(""),e.close())},E=async()=>{if(y)return;let t=d.trim(),i=h.trim(),a=o.default.organizationSetting.staff.organizationId;if(""===t)return void m("필수 입력값입니다.");if(""===i)return void w("필수 입력값입니다.");if(null===a)return void o.default.ui.layout.toast.error(n?"기관 식별자가 없어 계좌를 수정할 수 없습니다.":"기관 식별자가 없어 계좌를 생성할 수 없습니다.");m(""),w(""),j(!0);let r={serviceType:l,accountNumber:t,bankName:c,accountHolder:i,useFlag:p},[s]=n&&null!==e.accountId?await o.default.data.organization.bankAccountList.patch({orgId:a,accountId:e.accountId,payload:r}):await o.default.data.organization.bankAccountList.create({orgId:a,payload:r});if(null!==s){j(!1),o.default.ui.layout.toast.error(s.message);return}let f=o.default.data.organization.cardList.query;null!==f&&f.orgId===a&&await o.default.data.organization.cardList.refetch(),j(!1),k()};return(0,t.jsx)(a.default,{children:(0,t.jsxs)(lh.Container,{children:[(0,t.jsxs)(lh.Header,{children:[(0,t.jsx)(lh.HeaderLeft,{children:(0,t.jsx)(lh.HeaderTitle,{children:n?"계좌 정보 수정하기":"계좌 정보 추가하기"})}),(0,t.jsx)(lh.HeaderRight,{children:(0,t.jsxs)(lg,{onClick:k,disabled:y,children:[(0,t.jsx)(lf.default,{sx:{fontSize:20}}),"닫기"]})})]}),(0,t.jsxs)(lh.Body,{children:[(0,t.jsxs)(lh.BodyRow,{children:[(0,t.jsx)(lh.BodyRowLabel,{children:"서비스 종류를 선택해주세요."}),(0,t.jsx)(lm,{value:l,onChange:e=>{let t=e.target.value;t in lu&&r(t)},children:Object.entries(lu).map(([e,n])=>(0,t.jsxs)("option",{value:e,children:[n.label," 서비스"]},e))})]}),(0,t.jsxs)(lh.BodyRow,{children:[(0,t.jsx)(lh.BodyRowLabel,{children:"계좌번호를 입력해주세요."}),(0,t.jsx)(lb,{placeholder:"000-0000-0000-00",value:d,onChange:e=>{m(""),s(e.target.value.replace(/[^0-9-]/g,""))}}),(0,t.jsx)(lh.BodyRowErrorText,{$isVisible:g.trim().length>0,children:g})]}),(0,t.jsxs)(lh.BodyRow,{children:[(0,t.jsx)(lh.BodyRowLabel,{children:"은행을 선택해주세요."}),(0,t.jsx)(lm,{value:c,onChange:e=>{let t=e.target.value;t in lp&&f(t)},children:Object.entries(lp).map(([e,n])=>(0,t.jsx)("option",{value:e,children:n.label},e))})]}),(0,t.jsxs)(lh.BodyRow,{children:[(0,t.jsx)(lh.BodyRowLabel,{children:"예금주를 입력해주세요."}),(0,t.jsx)(lb,{placeholder:"기관명 또는 성명",value:h,onChange:e=>{w(""),u(e.target.value)}}),(0,t.jsx)(lh.BodyRowErrorText,{$isVisible:b.trim().length>0,children:b})]}),(0,t.jsxs)(lh.BodyRow,{children:[(0,t.jsx)(lh.BodyRowLabel,{children:"서류 반영 여부를 선택해주세요."}),(0,t.jsxs)(lh.RadioCheckContainer,{children:[(0,t.jsxs)(lh.RadioCheckLabel,{children:[(0,t.jsx)(lw,{checked:p,onChange:()=>{x(!0)}}),"반영"]}),(0,t.jsxs)(lh.RadioCheckLabel,{children:[(0,t.jsx)(lw,{checked:!1===p,onChange:()=>{x(!1)}}),"미반영"]})]})]})]}),(0,t.jsxs)(lh.Footer,{children:[(0,t.jsx)(ly,{onClick:()=>{y||(r("MEAL"),s(""),f("NONGHYUP"),u(""),x(!0),m(""),w(""))},disabled:y,children:"내용 삭제 후 새로 입력 (초기화)"}),(0,t.jsxs)(lj,{onClick:()=>{E()},disabled:y||n&&!1===I,children:[(0,t.jsx)(tt.default,{sx:{fontSize:20}}),"저장"]})]})]})})}let lg=(0,l.default)(s.default.Button.Outlined).withConfig({componentId:"zh__sc-e7085db1-0"})`
  ${lh.btnStyle}
`,lm=(0,l.default)(s.default.Input.Select).withConfig({componentId:"zh__sc-e7085db1-1"})`
  ${lh.inputStyle}
`,lb=(0,l.default)(s.default.Input.Text).withConfig({componentId:"zh__sc-e7085db1-2"})`
  ${lh.inputStyle}
  width: 100%;
`,lw=(0,l.default)(s.default.Input.Radio).withConfig({componentId:"zh__sc-e7085db1-3"})``,ly=(0,l.default)(s.default.Button.Outlined).withConfig({componentId:"zh__sc-e7085db1-4"})`
  ${lh.btnStyle}
`,lj=(0,l.default)(s.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-e7085db1-5"})`
  ${lh.btnStyle}
`,lv=(0,n.observer)(function(){return"ready"!==o.default.modal.organization.accountAdd.status?null:(0,t.jsx)(lx,{})});var l_=e.i(38797);let lC=(0,l_.default)((0,t.jsx)("path",{d:"M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3z"}),"OpenInNew");var lz=e.i(10957);let{CARD_USAGE:lI,BANK_NAME:lk,SERVICE_TYPE:lE}=R.default.enums;function lT(){let e=o.default.modal.organization.cardAdd,n="edit"===e.mode,l=o.default.organizationSetting.staff.organizationId,r=o.default.data.organization.bankAccountList,d=r.data??[],[s,c]=(0,i.useState)(e.cardUsage),[f,h]=(0,i.useState)(""===e.bankAccountId?lz.SELECT_EMPTY_VALUE:e.bankAccountId),[u,p]=(0,i.useState)(e.cardNumberHead),[x,g]=(0,i.useState)(e.cardNumberTail),[m,b]=(0,i.useState)(""),[w,y]=(0,i.useState)(!1),j=f===lz.SELECT_EMPTY_VALUE?"":f,v=s!==e.cardUsage||j!==e.bankAccountId||u!==e.cardNumberHead||x!==e.cardNumberTail;(0,i.useEffect)(()=>{if(null===l)return void r.reset();let e=r.query;(null===e||e.orgId!==l)&&r.setQuery({orgId:l})},[r,l]);let _=()=>{w||(c(e.cardUsage),h(""===e.bankAccountId?lz.SELECT_EMPTY_VALUE:e.bankAccountId),p(e.cardNumberHead),g(e.cardNumberTail),b(""),e.close())},C=async()=>{if(w||n&&!1===v)return;if(4!==u.length)return void b("카드번호 앞 4자리를 입력해주세요.");if(x.length<3||x.length>4)return void b("카드번호 끝 3~4자리를 입력해주세요.");if(null===l)return void o.default.ui.layout.toast.error(n?"기관 식별자가 없어 카드를 수정할 수 없습니다.":"기관 식별자가 없어 카드를 생성할 수 없습니다.");b(""),y(!0);let t={cardNumber:`${u}-****-****-${x}`,bankAccountId:f===lz.SELECT_EMPTY_VALUE?void 0:f,cardUsage:s},[i]=n&&null!==e.cardId?await o.default.data.organization.cardList.patch({orgId:l,cardId:e.cardId,payload:t}):await o.default.data.organization.cardList.create({orgId:l,payload:t});if(null!==i){y(!1),o.default.ui.layout.toast.error(i.message);return}y(!1),_()};return(0,t.jsx)(a.default,{children:(0,t.jsxs)(lh.Container,{children:[(0,t.jsxs)(lh.Header,{children:[(0,t.jsx)(lh.HeaderLeft,{children:(0,t.jsx)(lh.HeaderTitle,{children:n?"카드 정보 수정하기":"카드 정보 추가하기"})}),(0,t.jsx)(lh.HeaderRight,{children:(0,t.jsxs)(lS,{onClick:_,disabled:w,children:[(0,t.jsx)(lf.default,{sx:{fontSize:20}}),"닫기"]})})]}),(0,t.jsxs)(lh.Body,{children:[(0,t.jsxs)(lh.BodyRow,{children:[(0,t.jsx)(lh.BodyRowLabel,{children:"카드번호의 앞 4자리와 끝 3~4자리를 입력해주세요."}),(0,t.jsxs)(lL,{children:[(0,t.jsx)(lA,{placeholder:"0000",maxLength:4,value:u,onChange:e=>{p(e.target.value.replace(/[^0-9]/g,"")),b("")}}),(0,t.jsx)(lA,{placeholder:"****",value:"****",disabled:!0}),(0,t.jsx)(lA,{placeholder:"****",value:"****",disabled:!0}),(0,t.jsx)(lA,{placeholder:"0000",maxLength:4,value:x,onChange:e=>{g(e.target.value.replace(/[^0-9]/g,"")),b("")}})]}),(0,t.jsx)(lh.BodyRowErrorText,{$isVisible:m.trim().length>0,children:m}),(0,t.jsx)(lR,{$isVisible:0===m.trim().length,children:"⚠ 가운데 8자리는 입력하지 않습니다."})]}),(0,t.jsxs)(lh.BodyRow,{children:[(0,t.jsx)(lh.BodyRowLabel,{children:"카드와 연결된 계좌가 있는 경우, 등록된 계좌를 선택해주세요."}),(0,t.jsxs)(lO,{$isEmptySelected:f===lz.SELECT_EMPTY_VALUE,value:f,onChange:e=>{h(e.target.value)},disabled:"loading"===r.status,children:[(0,t.jsx)("option",{value:lz.SELECT_EMPTY_VALUE,disabled:!0,children:"계좌 없음"}),d.map(e=>(0,t.jsxs)("option",{value:e.id,children:[e.serviceType?`${lE[e.serviceType].label} 서비스 `:"- ",e.accountNumber," (은행 ",lk[e.bankName].label,", 예금주"," ",e.accountHolder??"-",")"]},e.id))]}),(0,t.jsxs)(lF,{children:[(0,t.jsx)(lN,{children:"⚠ 원하는 계좌가 목록에 없나요?"}),(0,t.jsxs)(lD,{onClick:()=>{w||(_(),o.default.modal.organization.accountAdd.show())},type:"button",disabled:w,children:["계좌 먼저 등록하기",(0,t.jsx)(lC,{sx:{fontSize:16,position:"relative",top:-1}})]})]})]}),(0,t.jsxs)(lh.BodyRow,{children:[(0,t.jsx)(lh.BodyRowLabel,{children:"카드 용도를 선택하세요."}),(0,t.jsx)(l$,{value:s,onChange:e=>{let t=e.target.value;t in lI&&c(t)},children:Object.entries(lI).map(([e,n])=>(0,t.jsx)("option",{value:e,children:n.label},e))})]})]}),(0,t.jsxs)(lh.Footer,{children:[(0,t.jsx)(lM,{onClick:()=>{w||(c("OPERATING"),h(lz.SELECT_EMPTY_VALUE),p(""),g(""),b(""))},disabled:w,children:"내용 삭제 후 새로 입력 (초기화)"}),(0,t.jsxs)(lP,{onClick:()=>{C()},disabled:w||n&&!1===v,children:[(0,t.jsx)(tt.default,{sx:{fontSize:20}}),"저장"]})]})]})})}let lS=(0,l.default)(s.default.Button.Outlined).withConfig({componentId:"zh__sc-4440bebb-0"})`
  ${lh.btnStyle}
`,l$=(0,l.default)(s.default.Input.Select).withConfig({componentId:"zh__sc-4440bebb-1"})`
  ${lh.inputStyle}
  width: 180px;
`,lO=(0,l.default)(s.default.Input.Select).withConfig({componentId:"zh__sc-4440bebb-2"})`
  ${lh.inputStyle}
  width: 100%;
  color: ${({$isEmptySelected:e})=>e?"#9ca3af":"#0a0a0a"};
`,lL=l.default.div.withConfig({componentId:"zh__sc-4440bebb-3"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,lA=(0,l.default)(s.default.Input.Text).withConfig({componentId:"zh__sc-4440bebb-4"})`
  ${lh.inputStyle}
  width: 75px;
  text-align: center;

  &:disabled {
    color: #6b7280;
    background: #f3f4f6;
  }
`,lR=(0,l.default)(lh.BodyRowErrorText).withConfig({componentId:"zh__sc-4440bebb-5"})`
  color: #ff6900;
`,lF=l.default.div.withConfig({componentId:"zh__sc-4440bebb-6"})`
  position: absolute;
  right: 0;
  bottom: -24px;
  left: 0;

  display: flex;
  gap: 10px;
  align-items: center;
`,lN=l.default.div.withConfig({componentId:"zh__sc-4440bebb-7"})`
  font-size: 13px;
  line-height: 1.35;
  color: #ff6900;
`,lD=l.default.button.withConfig({componentId:"zh__sc-4440bebb-8"})`
  cursor: pointer;

  display: inline-flex;
  gap: 2px;
  align-items: center;

  padding: 0;
  border: 0;

  font-size: 15px;
  color: #256ef4;
  text-decoration: underline;

  background: transparent;
`,lM=(0,l.default)(s.default.Button.Outlined).withConfig({componentId:"zh__sc-4440bebb-9"})`
  ${lh.btnStyle}
`,lP=(0,l.default)(s.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-4440bebb-10"})`
  ${lh.btnStyle}
`,lB=(0,n.observer)(function(){return"ready"!==o.default.modal.organization.cardAdd.status?null:(0,t.jsx)(lT,{})});var lU=e.i(93847),lW=e.i(58315),lH=e.i(7242),lV=e.i(86400);function lY(){let e=o.default.modal.organization.contactAdd,n="edit"===e.mode,l=o.default.organizationSetting.staff.staffAccountList,[r,d]=(0,i.useState)(e.serviceType??lz.SELECT_EMPTY_VALUE),[s,c]=(0,i.useState)(e.staffId??lz.SELECT_EMPTY_VALUE),[f,h]=(0,i.useState)(e.phoneNumber),[u,p]=(0,i.useState)(e.mobileProvider),[x,g]=(0,i.useState)(""),[m,b]=(0,i.useState)(!1),w=()=>{d(e.serviceType??lz.SELECT_EMPTY_VALUE),c(e.staffId??lz.SELECT_EMPTY_VALUE),h(e.phoneNumber),p(e.mobileProvider),g("")},y=()=>{m||(w(),e.close())},j=async()=>{if(m)return;let t=f.trim();if(""===t)return void g("휴대폰 번호는 필수 입력값입니다.");if(!0!==lV.default.brand.phoneNumber.is(t))return void g("휴대폰 번호 형식이 올바르지 않습니다.");g(""),b(!0);let i={serviceType:r===lz.SELECT_EMPTY_VALUE?void 0:r,staffId:s===lz.SELECT_EMPTY_VALUE?void 0:s,phoneNumber:t,mobileProvider:u},[l]=n&&null!==e.contactId?await o.default.organizationSetting.staff.patchContact({contactId:e.contactId,payload:i}):await o.default.organizationSetting.staff.createContact(i);if(null!==l){b(!1),o.default.ui.layout.toast.error(l.message);return}b(!1),y()};return(0,t.jsx)(a.default,{children:(0,t.jsxs)(lh.Container,{children:[(0,t.jsxs)(lh.Header,{children:[(0,t.jsx)(lh.HeaderLeft,{children:(0,t.jsx)(lh.HeaderTitle,{children:n?"연락처 수정하기":"연락처 추가하기"})}),(0,t.jsx)(lh.HeaderRight,{children:(0,t.jsxs)(lX,{onClick:y,disabled:m,children:[(0,t.jsx)(lf.default,{sx:{fontSize:20}}),"닫기"]})})]}),(0,t.jsxs)(lh.Body,{children:[(0,t.jsxs)(lh.BodyRow,{children:[(0,t.jsxs)(lh.BodyRowLabelRow,{children:[(0,t.jsx)(lh.BodyRowLabel,{children:"서비스 종류를 선택해주세요."}),(0,t.jsx)(lh.BodyRowHelperText,{children:"필수 입력값이 아닙니다. 입력란을 비워둘 수 있습니다."})]}),(0,t.jsxs)(lK,{value:r,onChange:e=>{let t=e.target.value;d(t in lH.default?t:lz.SELECT_EMPTY_VALUE)},children:[Object.entries(lH.default).map(([e,n])=>(0,t.jsxs)("option",{value:e,children:[n.label," 서비스"]},e)),(0,t.jsx)("option",{value:lz.SELECT_EMPTY_VALUE,children:"선택 안함"})]})]}),(0,t.jsxs)(lh.BodyRow,{children:[(0,t.jsxs)(lh.BodyRowLabelRow,{children:[(0,t.jsx)(lh.BodyRowLabel,{children:"담당자를 선택해주세요."}),(0,t.jsx)(lh.BodyRowHelperText,{children:"필수 입력값이 아닙니다. 입력란을 비워둘 수 있습니다."})]}),(0,t.jsxs)(lK,{style:{width:263},value:s,onChange:e=>{c(e.target.value)},children:[l.map(e=>(0,t.jsx)("option",{value:e.id,children:`${e.name} (직급 ${lW.default[e.position].label})`},e.id)),(0,t.jsx)("option",{value:lz.SELECT_EMPTY_VALUE,children:"선택 안함"})]})]}),(0,t.jsxs)(lh.BodyRow,{children:[(0,t.jsxs)(lh.BodyRowLabelRow,{children:[(0,t.jsx)(lh.BodyRowLabel,{children:"휴대폰 번호 및 통신사를 선택해주세요."}),(0,t.jsx)(lh.BodyRowHelperText,{children:"필수 입력값 입니다."})]}),(0,t.jsxs)(lJ,{children:[(0,t.jsx)(lq,{style:{width:191},placeholder:"010-0000-0000",value:f,onChange:e=>{var t;t=e.target.value,g(""),h(lV.default.brand.phoneNumber.format(t))}}),(0,t.jsx)(lK,{style:{width:131},value:u,onChange:e=>{let t=e.target.value;t in lU.default&&p(t)},children:Object.entries(lU.default).map(([e,n])=>(0,t.jsx)("option",{value:e,children:n.label},e))})]}),(0,t.jsx)(lh.BodyRowErrorText,{$isVisible:x.trim().length>0,children:x})]})]}),(0,t.jsxs)(lh.Footer,{children:[(0,t.jsx)(lQ,{onClick:()=>{m||w()},disabled:m,children:"내용 삭제 후 새로 입력 (초기화)"}),(0,t.jsxs)(lZ,{onClick:()=>{j()},disabled:m,children:[(0,t.jsx)(tt.default,{sx:{fontSize:20}}),n?"수정":"저장"]})]})]})})}let lG=(0,n.observer)(function(){return"ready"!==o.default.modal.organization.contactAdd.status?null:(0,t.jsx)(lY,{})}),lX=(0,l.default)(s.default.Button.Outlined).withConfig({componentId:"zh__sc-665cc4f2-0"})`
  ${lh.btnStyle}
`,lK=(0,l.default)(s.default.Input.Select).withConfig({componentId:"zh__sc-665cc4f2-1"})`
  ${lh.inputStyle}
  width: 131px;
`,lq=(0,l.default)(s.default.Input.Text).withConfig({componentId:"zh__sc-665cc4f2-2"})`
  ${lh.inputStyle}
`,lJ=l.default.div.withConfig({componentId:"zh__sc-665cc4f2-3"})`
  display: flex;
  gap: 12px;
  align-items: center;
`,lQ=(0,l.default)(s.default.Button.Outlined).withConfig({componentId:"zh__sc-665cc4f2-4"})`
  ${lh.btnStyle}
`,lZ=(0,l.default)(s.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-665cc4f2-5"})`
  ${lh.btnStyle}
`,l0=(0,n.observer)(function({acceptFileTypes:e,isError:n,onSelectFile:l}){let{isWindowFileDragging:a}=o.default.ui.layout,r=(0,i.useRef)(null);(0,x.default)(e=>{let t=e[0];void 0!==t&&l(t)});let d=n?"지원하지 않는 파일 형식입니다.":a?"파일을 여기에 놓으면 업로드 됩니다.":"이곳에 파일을 끌어다 놓거나 (드래그 앤 드롭), 클릭하여 업로드하세요.";return(0,t.jsxs)(l1,{children:[(0,t.jsx)(l2,{children:"로고 또는 도장 이미지를 업로드해 주세요."}),(0,t.jsxs)(l6,{$isWindowFileDragging:a,$isError:n,onDragOver:e=>{e.preventDefault()},onDrop:e=>{e.preventDefault();let t=e.dataTransfer.files[0];void 0!==t&&l(t)},onClick:e=>{e.target instanceof HTMLElement&&(e.target.closest("button")||r.current?.click())},children:[!n&&(0,t.jsx)(l3,{children:(0,t.jsx)(A.Upload,{size:26,color:"#4f39f6"})}),(0,t.jsxs)(l5,{children:[(0,t.jsx)(l8,{$isError:n,children:d}),(0,t.jsx)(l9,{children:"지원 파일 형식: PNG, JPG, JPEG"})]})]}),(0,t.jsx)(l4,{ref:r,type:"file",accept:e,onChange:e=>{let t=e.target.files?.[0];void 0!==t&&(l(t),e.target.value="")}})]})}),l1=l.default.div.withConfig({componentId:"zh__sc-f01fc0e2-0"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  align-self: stretch;
  justify-content: center;

  width: 100%;
  height: 100%;
  height: 457px;
  padding: 32px 24px;
`,l2=l.default.div.withConfig({componentId:"zh__sc-f01fc0e2-1"})`
  font-size: 18px;
  font-weight: 700;
  font-style: normal;
  line-height: 24px; /* 133.333% */
  color: #101828;
  text-align: center;
`,l4=l.default.input.withConfig({componentId:"zh__sc-f01fc0e2-2"})`
  display: none;
`,l6=l.default.div.withConfig({componentId:"zh__sc-f01fc0e2-3"})`
  cursor: pointer;

  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-width: 0;
  height: 168px;
  padding: 24px 40px;
  border: 1px solid ${({$isError:e})=>e?"#ff4d4f":"#4f39f6"};
  border-style: ${({$isWindowFileDragging:e})=>e?"dashed":"solid"};
  border-radius: 16px;

  background: ${({$isWindowFileDragging:e,$isError:t})=>t?"#fff5f5":e?"#f6f3ff":"#fff"};

  &:hover {
    background-color: ${({$isError:e})=>e?"#fff5f5":"#f6f3ff"};
  }

  &:active {
    background-color: ${({$isError:e})=>e?"#fff5f5":"#efeaff"};
  }
`,l3=l.default.div.withConfig({componentId:"zh__sc-f01fc0e2-4"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;
`,l5=l.default.div.withConfig({componentId:"zh__sc-f01fc0e2-5"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: center;
`,l8=l.default.div.withConfig({componentId:"zh__sc-f01fc0e2-6"})`
  font-size: 14px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px;
  color: ${({$isError:e})=>e?"#ff4d4f":"#4f39f6"};
  text-align: center;
`,l9=l.default.div.withConfig({componentId:"zh__sc-f01fc0e2-7"})`
  font-size: 14px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px;
  color: #99a1af;
`,l7=(0,l_.default)((0,t.jsx)("path",{d:"M19 13H5v-2h14z"}),"Remove");var oe=e.i(47885),ot=e.i(11974);let on=async(e,t)=>""===e||1===t?e:new Promise(n=>{let i=new Image;i.onload=()=>{let l=document.createElement("canvas");l.width=235,l.height=235;let o=l.getContext("2d");if(null===o)return void n(e);let a=Math.min(l.width/i.width,l.height/i.height),r=i.width*a*t,d=i.height*a*t,s=(l.width-r)/2,c=(l.height-d)/2;o.clearRect(0,0,l.width,l.height),o.drawImage(i,s,c,r,d),n(l.toDataURL("image/png"))},i.onerror=()=>{n(e)},i.src=e});function oi({file:e,onProcessedImageChange:n}){let[l,o]=(0,i.useState)(100),[a,r]=(0,i.useState)(100),[d,s]=(0,i.useState)(100),[c,f]=(0,i.useState)(""),[h,u]=(0,i.useState)(""),p=(0,i.useRef)(0),x=(0,i.useRef)(0);return(0,i.useEffect)(()=>{let e=window.setTimeout(()=>{s(a)},120);return()=>{window.clearTimeout(e)}},[a]),(0,i.useEffect)(()=>{let t=p.current+1;p.current=t,(async()=>{let{adjustedUrl:n}=await (0,ot.processBackgroundRemoval)({file:e,whiteThreshold:oe.DEFAULT_WHITE_THRESHOLD,softness:oe.DEFAULT_SOFTNESS,contrast:d,selectionRect:null});p.current===t&&f(n)})()},[d,e,n]),(0,i.useEffect)(()=>{if(""===c)return;let e=x.current+1;x.current=e,(async()=>{let t=await on(c,l/100);x.current===e&&(u(t),n(t))})()},[c,l,n]),(0,t.jsxs)(ol,{children:[(0,t.jsxs)(oo,{children:[(0,t.jsx)(oa,{children:(0,t.jsx)(_.default.BackgroundReplace,{size:16,color:"#1C1B1F"})}),(0,t.jsxs)(or,{children:["업로드된 ",e.name," 이미지의 배경을 제거했습니다.",(0,t.jsx)("br",{}),"아래에서 크기와 선명도를 확인한 뒤 저장을 완료해주세요!"]})]}),(0,t.jsxs)(od,{children:[(0,t.jsx)(os,{children:"이미지 미리보기"}),(0,t.jsxs)(oc,{children:[(0,t.jsxs)(of,{children:[(0,t.jsx)(oh,{children:""!==h&&(0,t.jsx)(ou,{src:h,alt:`${e.name} 미리보기`})}),(0,t.jsxs)(op,{children:[(0,t.jsx)(ox,{children:(0,t.jsx)(tn.default,{sx:{fontSize:22}})}),(0,t.jsx)(og,{children:"체크 무늬는 투명 배경을 뜻합니다. 실제 저장 시에는 배경 없이 저장됩니다."})]})]}),(0,t.jsxs)(om,{children:[(0,t.jsxs)(ob,{children:[(0,t.jsx)(ow,{children:"크기 조정하기"}),(0,t.jsxs)(oy,{children:[(0,t.jsxs)(oj,{children:[(0,t.jsx)(ov,{onClick:()=>{o(e=>Math.max(e-10,100))},disabled:l<=100,children:(0,t.jsx)(l7,{sx:{fontSize:24}})}),(0,t.jsx)(o_,{children:"작게"})]}),(0,t.jsx)(oC,{min:100,max:500,value:l,onChange:o}),(0,t.jsxs)(oj,{children:[(0,t.jsx)(ov,{onClick:()=>{o(e=>Math.min(e+10,500))},disabled:l>=500,children:(0,t.jsx)(nL.default,{sx:{fontSize:24}})}),(0,t.jsx)(o_,{children:"크게"})]})]})]}),(0,t.jsx)(oz,{}),(0,t.jsxs)(ob,{children:[(0,t.jsx)(ow,{children:"선명도 조정하기"}),(0,t.jsxs)(oy,{children:[(0,t.jsxs)(oj,{children:[(0,t.jsx)(ov,{onClick:()=>{r(e=>{let t=Math.max(e-5,oe.MIN_CONTRAST);return s(t),t})},disabled:a<=oe.MIN_CONTRAST,children:(0,t.jsx)(l7,{sx:{fontSize:24}})}),(0,t.jsx)(o_,{children:"부드럽게"})]}),(0,t.jsx)(oC,{min:oe.MIN_CONTRAST,max:oe.MAX_CONTRAST,value:a,onChange:r,onChangeEnd:s}),(0,t.jsxs)(oj,{children:[(0,t.jsx)(ov,{onClick:()=>{r(e=>{let t=Math.min(e+5,oe.MAX_CONTRAST);return s(t),t})},disabled:a>=oe.MAX_CONTRAST,children:(0,t.jsx)(nL.default,{sx:{fontSize:24}})}),(0,t.jsx)(o_,{children:"선명하게"})]})]})]})]})]})]})]})}let ol=l.default.div.withConfig({componentId:"zh__sc-3b741e84-0"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  align-self: stretch;

  height: 100%;
  padding: 32px 24px;

  background: #fff;
`,oo=l.default.div.withConfig({componentId:"zh__sc-3b741e84-1"})`
  display: flex;
  gap: 4px;
  align-items: flex-start;
  align-self: stretch;

  padding: 12px;
  border: 1px solid #e5e7eb;
  border-radius: 6px;

  background: #f5f8ff;
`,oa=l.default.div.withConfig({componentId:"zh__sc-3b741e84-2"})``,or=l.default.div.withConfig({componentId:"zh__sc-3b741e84-3"})`
  font-size: 14px;
  font-weight: 400;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
`,od=l.default.div.withConfig({componentId:"zh__sc-3b741e84-4"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;
`,os=l.default.div.withConfig({componentId:"zh__sc-3b741e84-5"})`
  font-size: 14px;
  font-weight: 700;
  font-style: normal;
  line-height: 16px; /* 114.286% */
  color: #0a0a0a;
`,oc=l.default.div.withConfig({componentId:"zh__sc-3b741e84-6"})`
  display: flex;
  gap: 24px;
  align-items: flex-start;
  align-self: stretch;
`,of=l.default.section.withConfig({componentId:"zh__sc-3b741e84-7"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;

  width: 235px;
`,oh=l.default.div.withConfig({componentId:"zh__sc-3b741e84-8"})`
  position: relative;

  overflow: hidden;
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: center;

  width: ${235}px;
  height: ${235}px;
  border: 1px solid #d1d5db;
  border-radius: 6px;

  background-color: #fff;
  background-image:
    linear-gradient(45deg, #ececec 25%, transparent 25%),
    linear-gradient(-45deg, #ececec 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, #ececec 75%),
    linear-gradient(-45deg, transparent 75%, #ececec 75%);
  background-position:
    0 0,
    0 8px,
    8px -8px,
    -8px 0;
  background-size: 16px 16px;
`,ou=l.default.img.withConfig({componentId:"zh__sc-3b741e84-9"})`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`,op=l.default.div.withConfig({componentId:"zh__sc-3b741e84-10"})`
  display: flex;
  gap: 4px;
  align-items: flex-start;
  align-self: stretch;

  color: #0a0a0a;
`,ox=l.default.div.withConfig({componentId:"zh__sc-3b741e84-11"})`
  position: relative;
  top: -3px;
`,og=l.default.div.withConfig({componentId:"zh__sc-3b741e84-12"})`
  font-size: 14px;
  font-weight: 400;
  font-style: normal;
  line-height: 16px; /* 114.286% */
`,om=l.default.section.withConfig({componentId:"zh__sc-3b741e84-13"})`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
`,ob=l.default.div.withConfig({componentId:"zh__sc-3b741e84-14"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;
`,ow=l.default.h5.withConfig({componentId:"zh__sc-3b741e84-15"})`
  font-size: 14px;
  font-weight: 700;
  font-style: normal;
  line-height: 16px; /* 114.286% */
  color: #0a0a0a;
`,oy=l.default.div.withConfig({componentId:"zh__sc-3b741e84-16"})`
  display: flex;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;
  justify-content: center;
`,oj=l.default.div.withConfig({componentId:"zh__sc-3b741e84-17"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 56px;
`,ov=(0,l.default)(s.default.Button.Outlined).withConfig({componentId:"zh__sc-3b741e84-18"})`
  display: flex;
  gap: 4px;
  align-items: center;
  align-self: stretch;

  height: 36px;
  padding: 8px 16px;
`,o_=l.default.div.withConfig({componentId:"zh__sc-3b741e84-19"})`
  display: flex;
  justify-content: center;

  font-size: 14px;
  font-weight: 400;
  font-style: normal;
  line-height: normal;
  color: #4f39f6;
  text-align: center;
`,oC=(0,l.default)(s.default.Input.Slider).withConfig({componentId:"zh__sc-3b741e84-20"})`
  position: relative;
  top: 10px;
`,oz=l.default.div.withConfig({componentId:"zh__sc-3b741e84-21"})`
  align-self: stretch;
  border-top: 1px solid #d1d5db;
`,oI=(0,n.observer)(function(){let e=o.default.modal.organization.imageAdjustUpload,{status:n,close:l,resetToUploadStep:r,selectedFile:d}=e,[s,c]=(0,i.useState)(!1),f=(0,i.useRef)(null);if((0,i.useEffect)(()=>"ready"!==n?void e.setToastContainer(null):(e.setToastContainer(f.current),()=>{e.setToastContainer(null)}),[e,n]),"ready"!==n)return null;let h=null===d,u="logo"===e.target?"로고":"도장",p=async()=>{!0===await e.save()&&c(!1)};return(0,t.jsx)(a.default,{children:(0,t.jsxs)(ok,{ref:f,children:[(0,t.jsxs)(lh.Header,{children:[(0,t.jsx)(lh.HeaderLeft,{children:(0,t.jsx)(lh.HeaderTitle,{children:"이미지 업로드하기"})}),(0,t.jsx)(lh.HeaderRight,{children:(0,t.jsxs)(oE,{onClick:()=>{c(!1),l()},children:[(0,t.jsx)(lf.default,{sx:{fontSize:20}}),"닫기"]})})]}),(0,t.jsx)(oT,{children:h?(0,t.jsx)(l0,{acceptFileTypes:e.acceptFileTypes,isError:e.isError,onSelectFile:e.setSelectedFile}):(0,t.jsx)(oi,{file:d,onProcessedImageChange:e.setProcessedImageDataUrl})}),(0,t.jsxs)(lh.Footer,{children:[(0,t.jsx)(oS,{onClick:()=>{c(!1),r()},disabled:h||e.isSaving,children:"다시 업로드하기"}),(0,t.jsxs)(o$,{onClick:()=>{c(!0)},disabled:h||e.isSaving,children:[(0,t.jsx)(tt.default,{sx:{fontSize:20}}),"최종확인 및 저장"]})]}),(0,t.jsx)(oO,{isOpen:s,targetLabel:u,isSaving:e.isSaving,onCancel:()=>{e.isSaving||c(!1)},onConfirm:()=>{p()}})]})})}),ok=(0,l.default)(lh.Container).withConfig({componentId:"zh__sc-665af392-0"})`
  position: relative;
  width: 626px;
`,oE=(0,l.default)(s.default.Button.Outlined).withConfig({componentId:"zh__sc-665af392-1"})`
  ${lh.btnStyle}
`,oT=(0,l.default)(lh.Body).withConfig({componentId:"zh__sc-665af392-2"})`
  padding: 0;
`,oS=(0,l.default)(s.default.Button.Outlined).withConfig({componentId:"zh__sc-665af392-3"})`
  ${lh.btnStyle}
`,o$=(0,l.default)(s.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-665af392-4"})`
  ${lh.btnStyle}
`;function oO({isOpen:e,targetLabel:n,isSaving:i,onCancel:l,onConfirm:o}){return!0!==e?null:(0,t.jsx)(oL,{children:(0,t.jsxs)(oA,{children:[(0,t.jsxs)(oR,{children:[(0,t.jsxs)(oF,{children:[n," 이미지를 저장할까요?"]}),(0,t.jsxs)(oN,{children:["저장된 ",n," 이미지는 출력용 서류에서 사용할 수 있습니다.",(0,t.jsx)("br",{}),"이미 출력했거나 최종확인한 서류는 다시 확인이 필요할 수 있습니다."]})]}),(0,t.jsxs)(oD,{children:[(0,t.jsx)(oM,{type:"button",onClick:l,disabled:!0===i,children:"취소하기"}),(0,t.jsx)(oP,{type:"button",onClick:o,disabled:!0===i,children:"저장하기"})]})]})})}let oL=l.default.div.withConfig({componentId:"zh__sc-665af392-5"})`
  position: fixed;
  z-index: 3100;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgb(17 24 39 / 36%);
`,oA=l.default.div.withConfig({componentId:"zh__sc-665af392-6"})`
  display: flex;
  flex-direction: column;
  gap: 48px;
  align-items: center;
  justify-content: center;

  width: 501px;
  max-width: calc(100vw - 32px);
  padding: 32px 24px;
  border: 1px solid #e5e9ef;
  border-radius: 8px;

  background: #fff;
  box-shadow: 0 4px 2px rgb(0 0 0 / 10%);
`,oR=l.default.div.withConfig({componentId:"zh__sc-665af392-7"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;

  width: 100%;
`,oF=l.default.h3.withConfig({componentId:"zh__sc-665af392-8"})`
  margin: 0;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px;
  color: #000;
`,oN=l.default.p.withConfig({componentId:"zh__sc-665af392-9"})`
  margin: 0;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px;
  color: #000;
`,oD=l.default.div.withConfig({componentId:"zh__sc-665af392-10"})`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: flex-end;

  width: 100%;
`,oM=(0,l.default)(s.default.Button.Outlined).withConfig({componentId:"zh__sc-665af392-11"})`
  height: 36px;
  padding: 8px 16px;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px;
`,oP=(0,l.default)(s.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-665af392-12"})`
  height: 36px;
  padding: 8px 16px;

  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: 20px;
`;var oB=e.i(23416),oU=e.i(6412),oW=e.i(13269);function oH(){let e=o.default.modal.organization.staffAccountAdd,n="edit"===e.mode,[l,r]=(0,i.useState)(e.name),[d,s]=(0,i.useState)(e.position??lz.SELECT_EMPTY_VALUE),[c,f]=(0,i.useState)(e.phoneNumber),[h,u]=(0,i.useState)(e.sealImagePath),[p,x]=(0,i.useState)(""),[g,m]=(0,i.useState)(""),[b,w]=(0,i.useState)(!1),y=()=>{r(e.name),s(e.position??lz.SELECT_EMPTY_VALUE),f(e.phoneNumber),u(e.sealImagePath),x(""),m("")},j=()=>{b||(y(),e.close())},v=async e=>{try{let t=await fetch(e);if(!0!==t.ok)return[Error("Failed to convert data URL to blob"),null];let n=await t.blob();return[null,n]}catch(e){return[e instanceof Error?e:Error("Failed to convert data URL to blob"),null]}},C=async(e,t,n)=>{let[i,l]=await v(e);if(null!==i)return[i,null];let[o,a]=await oB.default.upload.createPresignedUploadUrl({category:oW.default.STAFF_SEAL,contentType:oU.default.PNG,organizationId:n,staffAccountId:t});if(null!==o)return[o,null];let[r]=await oB.default.upload.putFileToPresignedUploadUrl({uploadUrl:a.uploadUrl,contentType:oU.default.PNG,file:l});return null!==r?[r,null]:[null,a.path]},z=async e=>{let t=o.default.data.organization.contactList.query;if(!0==(null!==t&&t.orgId===e))try{await o.default.data.organization.contactList.refetch()}catch{o.default.ui.layout.toast.error("서비스별 업무 연락처 목록을 새로고침하지 못했습니다.")}},I=async()=>{if(b)return;let t=l.trim();""===t?x("이름은 필수 입력값입니다."):x("");let i=c.trim();if(""!==i&&!0!==lV.default.brand.phoneNumber.is(i))return void m("휴대폰 번호 형식이 올바르지 않습니다.");if(m(""),""===t)return;w(!0);let a=e.staffAccountId,r=o.default.organizationSetting.staff.organizationId;if(!0!==n){if(null===r){w(!1),o.default.ui.layout.toast.error("기관 식별자가 없어 근무자를 생성할 수 없습니다.");return}let[e,n]=await o.default.organizationSetting.staff.createStaffAccount({organizationId:r,name:t,role:"STAFF",position:d===lz.SELECT_EMPTY_VALUE?void 0:d,phoneNumber:""===i?void 0:i});if(null!==e||null===n){w(!1),o.default.ui.layout.toast.error(e?.message??"근무자 생성에 실패했습니다.");return}a=n.id,r=n.organizationId}else{if(null===a){w(!1),o.default.ui.layout.toast.error("수정할 근무자 정보를 찾지 못했습니다.");return}let[e]=await o.default.data.staffAccount.patch({id:a,payload:{name:t,position:d===lz.SELECT_EMPTY_VALUE?void 0:d,phoneNumber:""===i?void 0:i}});if(null!==e){w(!1),o.default.ui.layout.toast.error("근무자 수정에 실패했습니다.");return}null!==r&&await z(r)}let s=h.trim();if(s.startsWith("data:")){if(null===a||null===r){w(!1),o.default.ui.layout.toast.error("도장 업로드 대상 정보를 찾지 못했습니다.");return}let[e,t]=await C(s,a,r);if(null!==e||null===t){w(!1),o.default.ui.layout.toast.error(n?"근무자 정보는 수정되었지만 도장 업로드에 실패했습니다. 다시 시도해 주세요.":"근무자는 생성되었지만 도장 업로드에 실패했습니다. 수정에서 다시 업로드해 주세요."),j();return}let[i]=await o.default.data.staffAccount.patch({id:a,payload:{sealImagePath:t}});if(null!==i){w(!1),o.default.ui.layout.toast.error(n?"근무자 도장 경로 저장에 실패했습니다. 다시 시도해 주세요.":"근무자는 생성되었지만 도장 경로 저장에 실패했습니다. 수정에서 다시 저장해 주세요."),j();return}}w(!1),j()};return(0,t.jsx)(a.default,{children:(0,t.jsxs)(lh.Container,{children:[(0,t.jsxs)(lh.Header,{children:[(0,t.jsx)(lh.HeaderLeft,{children:(0,t.jsx)(lh.HeaderTitle,{children:n?"근무자 수정하기":"근무자 추가하기"})}),(0,t.jsx)(lh.HeaderRight,{children:(0,t.jsxs)(oY,{onClick:j,disabled:b,children:[(0,t.jsx)(lf.default,{sx:{fontSize:20}}),"닫기"]})})]}),(0,t.jsxs)(lh.Body,{children:[(0,t.jsxs)(lh.BodyRow,{children:[(0,t.jsx)(lh.BodyRowLabel,{children:"이름을 입력해주세요."}),(0,t.jsx)(oX,{placeholder:"이름을 입력해주세요",value:l,onChange:e=>{x(""),r(e.target.value)}}),(0,t.jsx)(lh.BodyRowErrorText,{$isVisible:p.trim().length>0,children:p})]}),(0,t.jsxs)(lh.BodyRow,{children:[(0,t.jsx)(lh.BodyRowLabel,{children:"직급을 선택해주세요."}),(0,t.jsxs)(oG,{value:d,onChange:e=>{let t=e.target.value;s(t in lW.default?t:lz.SELECT_EMPTY_VALUE)},children:[Object.entries(lW.default).map(([e,n])=>(0,t.jsx)("option",{value:e,children:n.label},e)),(0,t.jsx)("option",{value:lz.SELECT_EMPTY_VALUE,children:"없음"})]})]}),(0,t.jsxs)(lh.BodyRow,{children:[(0,t.jsx)(lh.BodyRowLabel,{children:"휴대폰 번호를 입력해주세요."}),(0,t.jsx)(oX,{placeholder:"010-0000-0000",value:c,onChange:e=>{var t;t=e.target.value,m(""),f(lV.default.brand.phoneNumber.format(t))}}),(0,t.jsx)(lh.BodyRowErrorText,{$isVisible:g.trim().length>0,children:g})]}),(0,t.jsxs)(lh.BodyRow,{children:[(0,t.jsxs)(lh.BodyRowLabelRow,{children:[(0,t.jsx)(lh.BodyRowLabel,{children:"도장 이미지를 업로드 해주세요."}),(0,t.jsxs)(lh.BodyRowHelperText,{children:[(0,t.jsx)(tn.default,{sx:{fontSize:18},style:{marginRight:4,position:"relative",top:3}}),"해당 이미지는 서류에서 근무자의 도장이 필요시 사용됩니다."]})]}),(0,t.jsx)(oK,{children:(0,t.jsxs)(oq,{children:[(0,t.jsx)(oJ,{$hasImage:h.trim().length>0,children:0===h.trim().length?(0,t.jsx)(_.default.Imagesmode,{size:34,color:"#d1d5db"}):(0,t.jsx)(oQ,{src:h,alt:"도장 이미지 미리보기"})}),(0,t.jsx)(oZ,{onClick:()=>{o.default.modal.organization.imageAdjustUpload.show("seal",h,{saveMode:"external",onProcessedImageDataUrl:e=>{u(e)}})},disabled:b,children:"업로드하기"})]})})]})]}),(0,t.jsxs)(lh.Footer,{children:[(0,t.jsx)(o0,{onClick:()=>{b||y()},disabled:b,children:"내용 삭제 후 새로 입력 (초기화)"}),(0,t.jsxs)(o1,{onClick:()=>{I()},disabled:b,children:[(0,t.jsx)(tt.default,{sx:{fontSize:20}}),"저장"]})]})]})})}let oV=(0,n.observer)(function(){return"ready"!==o.default.modal.organization.staffAccountAdd.status?null:(0,t.jsx)(oH,{})}),oY=(0,l.default)(s.default.Button.Outlined).withConfig({componentId:"zh__sc-2a48cfd9-0"})`
  ${lh.btnStyle}
`,oG=(0,l.default)(s.default.Input.Select).withConfig({componentId:"zh__sc-2a48cfd9-1"})`
  ${lh.inputStyle}
  width: 131px;
`,oX=(0,l.default)(s.default.Input.Text).withConfig({componentId:"zh__sc-2a48cfd9-2"})`
  ${lh.inputStyle}
  width: 100%;
`,oK=l.default.div.withConfig({componentId:"zh__sc-2a48cfd9-3"})`
  display: flex;
  gap: 12px;
  align-items: center;
`,oq=l.default.div.withConfig({componentId:"zh__sc-2a48cfd9-4"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
`,oJ=l.default.div.withConfig({componentId:"zh__sc-2a48cfd9-5"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 160px;
  height: 160px;
  border: 1px dashed #d1d5db;
  border-radius: 6px;

  background-color: #fff;

  ${({$hasImage:e})=>e?`
        border: 1px solid #d1d5db;
        background-image:
          linear-gradient(45deg, #ececec 25%, transparent 25%),
          linear-gradient(-45deg, #ececec 25%, transparent 25%),
          linear-gradient(45deg, transparent 75%, #ececec 75%),
          linear-gradient(-45deg, transparent 75%, #ececec 75%);
        background-position:
          0 0,
          0 6px,
          6px -6px,
          -6px 0;
        background-size: 12px 12px;
      `:""}
`,oQ=l.default.img.withConfig({componentId:"zh__sc-2a48cfd9-6"})`
  width: 100%;
  height: 100%;
  border-radius: 6px;
  object-fit: cover;
`,oZ=(0,l.default)(s.default.Button.Outlined).withConfig({componentId:"zh__sc-2a48cfd9-7"})`
  ${lh.btnStyle}
  width: fit-content;
`,o0=(0,l.default)(s.default.Button.Outlined).withConfig({componentId:"zh__sc-2a48cfd9-8"})`
  ${lh.btnStyle}
`,o1=(0,l.default)(s.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-2a48cfd9-9"})`
  ${lh.btnStyle}
`;function o2(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(lG,{}),(0,t.jsx)(lv,{}),(0,t.jsx)(lB,{}),(0,t.jsx)(oV,{}),(0,t.jsx)(oI,{})]})}let o4=(0,n.observer)(function(){let{serviceWorkerDraft:e,isSaving:n,resetToUploadStep:i,saveServiceWorkerDraft:l}=o.default.modal.serviceWorkerCreate,a=async()=>{await l()};return(0,t.jsxs)(o6,{children:[(0,t.jsx)(o5,{disabled:!e||n,onClick:i,children:"다시 업로드하기"}),(0,t.jsxs)(o8,{disabled:!e||n,onClick:()=>void a(),children:[(0,t.jsx)(d.Check,{size:16}),"최종확인 및 저장"]})]})}),o6=l.default.div.withConfig({componentId:"zh__sc-d659ae78-0"})`
  display: flex;
  gap: 16px;
  align-items: center;
  align-self: stretch;
  justify-content: flex-end;

  padding: 16px;
  border-top: 1px solid #e5e7eb;
`,o3=l.css`
  display: flex;
  gap: 10px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,o5=(0,l.default)(s.default.Button.Outlined).withConfig({componentId:"zh__sc-d659ae78-1"})`
  ${o3}
`,o8=(0,l.default)(s.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-d659ae78-2"})`
  ${o3}
`,o9=(0,n.observer)(function(){let{analyzeSelectedFile:e,isAnalyzing:n,selectedFile:i}=o.default.modal.serviceWorkerCreate;return(0,t.jsx)(o7,{children:(0,t.jsxs)(ae,{disabled:null===i||n,onClick:()=>{e()},children:["분석 시작",(0,t.jsx)(b,{size:16})]})})}),o7=l.default.div.withConfig({componentId:"zh__sc-3f938d0e-0"})`
  display: flex;
  gap: 10px;
  align-self: stretch;
  justify-content: flex-end;
`,ae=(0,l.default)(s.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-3f938d0e-1"})`
  display: flex;
  flex-shrink: 0;
  gap: 10px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,{FILE_EXTENSION_WHITELIST_BY_GROUP:at}=C.default.file,an=(0,n.observer)(function(){var e;let n,{clearSelectedFile:i,selectedFile:l,isAnalyzing:a}=o.default.modal.serviceWorkerCreate;if(null===l)return null;let r=-1===(n=(e=l.name).lastIndexOf("."))?"":e.slice(n).toLowerCase();return(0,t.jsx)(ai,{children:(0,t.jsxs)(al,{children:[(0,t.jsxs)(ao,{children:[(0,t.jsx)(aa,{children:at.IMAGE.some(e=>e===r)?(0,t.jsx)(_.default.Photo,{size:17,color:"#FA8E43"}):at.AUDIO.some(e=>e===r)?(0,t.jsx)(_.default.SpeechToText,{size:17,color:"#A855F7"}):at.DOCUMENT.some(e=>e===r)?(0,t.jsx)(_.default.News,{size:17,color:"#2264E8"}):null}),(0,t.jsx)(ar,{children:(0,t.jsx)(ad,{children:l.name})})]}),(0,t.jsxs)(as,{onClick:i,disabled:a,children:["삭제",(0,t.jsx)(v.X,{size:16})]})]},`${l.name}-${l.size}-${l.lastModified}`)})}),ai=l.default.div.withConfig({componentId:"zh__sc-9108dce9-0"})`
  overflow: auto hidden;
  display: flex;
  gap: 12px;
  align-items: flex-start;

  width: 100%;
  min-width: 0;
  padding-bottom: 6px;

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 999px;
    background: #d1d5db;
  }
`,al=l.default.div.withConfig({componentId:"zh__sc-9108dce9-1"})`
  display: flex;
  flex-shrink: 0;
  gap: 24px;
  align-items: center;

  padding: 12px 16px;
  border-radius: 8px;

  background: #f6f8fb;
`,ao=l.default.div.withConfig({componentId:"zh__sc-9108dce9-2"})`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`,aa=l.default.div.withConfig({componentId:"zh__sc-9108dce9-3"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;
  border-radius: 4px;

  background: #fff;
`,ar=l.default.div.withConfig({componentId:"zh__sc-9108dce9-4"})`
  display: flex;
  align-items: center;
  align-self: stretch;

  width: 196px;
  height: 40px;

  color: #0a0a0a;
`,ad=l.default.div.withConfig({componentId:"zh__sc-9108dce9-5"})`
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #0a0a0a;
`,as=l.default.button.withConfig({componentId:"zh__sc-9108dce9-6"})`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;

  padding: 8px;
  border: 1px solid #45464e;
  border-radius: 99px;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 16px; /* 100% */
  color: #0a0a0a;
  letter-spacing: -1px;

  background: #fff;

  &:hover {
    background: #f9fafb;
  }

  &:active {
    background: #f3f4f6;
  }

  &:disabled {
    border-color: #d1d5db;
    color: #9ca3af;
    background-color: #f9fafb;
  }
`;function ac(){let[e,n]=(0,i.useState)(0);return(0,i.useEffect)(()=>{let e=performance.now(),t=0,i=l=>{n(Math.min(100*(1-Math.exp(-((l-e)/1e3*.05))),98)),t=window.requestAnimationFrame(i)};return t=window.requestAnimationFrame(i),()=>{window.cancelAnimationFrame(t)}},[]),(0,t.jsx)(af,{children:(0,t.jsx)(ah,{$progress:e})})}let af=l.default.div.withConfig({componentId:"zh__sc-4ad7a7ff-0"})`
  overflow: hidden;
  display: flex;

  width: 362px;
  height: ${8}px;
  border-radius: 99px;

  background: #e6e0ff;
  background-color: #e5e2ff;
`,ah=l.default.div.attrs(({$progress:e})=>({style:{transform:`scaleX(${e/100})`}})).withConfig({componentId:"zh__sc-4ad7a7ff-1"})`
  transform-origin: left center;
  width: 100%;
  height: 100%;
  background-color: #5635ff;
`,au=(0,n.observer)(function({disabled:e=!1}){let{isWindowFileDragging:n}=o.default.ui.layout,{selectedFile:i,isError:l,isAnalyzing:a,abortAnalyze:r}=o.default.modal.serviceWorkerCreate;return(0,t.jsxs)(ax,{children:[null===i&&!1===l&&(0,t.jsx)(ag,{children:(0,t.jsx)(A.Upload,{size:26,color:e?"#9CA3AF":ap[100]})}),(0,t.jsxs)(am,{children:[(0,t.jsx)(ab,{$isError:l,$disabled:e,children:!0===l?"지원하지 않는 파일 형식입니다.":!0===n?"파일을 여기에 놓으면 업로드 됩니다.":!0===a?"업로드한 파일을 분석하고 있습니다.":"이곳에 파일을 끌어다 놓거나 (드래그 앤 드롭), 클릭하여 업로드하세요."}),(0,t.jsx)(aw,{$disabled:e,children:null!==i&&!1===a?"새 파일을 업로드하면 기존 파일이 교체됩니다.":"지원 파일 형식: 엑셀 파일"})]}),!0===a&&(0,t.jsx)(ac,{}),!0===a&&(0,t.jsx)(ay,{onClick:r,children:"중단하기"})]})}),{PRIMARY:ap}=R.default.style.color,ax=l.default.div.withConfig({componentId:"zh__sc-7f4896ee-0"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  align-self: stretch;
  justify-content: center;
`,ag=l.default.div.withConfig({componentId:"zh__sc-7f4896ee-1"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;
`,am=l.default.div.withConfig({componentId:"zh__sc-7f4896ee-2"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  align-self: stretch;
  justify-content: center;
`,ab=l.default.div.withConfig({componentId:"zh__sc-7f4896ee-3"})`
  font-size: 14px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 142.857% */
  color: ${({$isError:e,$disabled:t})=>t?"#9CA3AF":e?"#ff4d4f":"#4f39f6"};
  text-align: center;
`,aw=l.default.div.withConfig({componentId:"zh__sc-7f4896ee-4"})`
  font-size: 14px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 142.857% */
  color: ${({$disabled:e})=>e?"#9CA3AF":"#99a1af"};
`,ay=(0,l.default)(s.default.Button.Outlined).withConfig({componentId:"zh__sc-7f4896ee-5"})`
  display: flex;
  gap: 10px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,aj=(0,n.observer)(function({disabled:e=!1}){let{isWindowFileDragging:n}=o.default.ui.layout,{acceptFileTypes:l,setSelectedFile:a,selectedFile:r,isError:d}=o.default.modal.serviceWorkerCreate,s=(0,i.useRef)(null);return(0,x.default)(t=>{if(e||0===t.length)return;let n=t[0];void 0!==n&&a(n)}),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(av,{ref:s,type:"file",accept:l,onChange:t=>{if(e)return;let n=Array.from(t.target.files??[]);if(0===n.length)return;let i=n[0];void 0!==i&&(a(i),t.target.value="")},disabled:e}),(0,t.jsxs)(a_,{$isWindowFileDragging:n,$disabled:e,onDragOver:t=>{if(t.preventDefault(),e)return},onDrop:t=>{if(t.preventDefault(),e)return;let n=Array.from(t.dataTransfer.files);if(0===n.length)return;let i=n[0];void 0!==i&&a(i)},onClick:t=>{!e&&t.target instanceof HTMLElement&&(t.target.closest("button")||s.current?.click())},$isError:d,children:[null!==r&&(0,t.jsx)(an,{}),(0,t.jsx)(au,{disabled:e}),(0,t.jsx)(o9,{})]})]})}),av=l.default.input.withConfig({componentId:"zh__sc-37be1ed1-0"})`
  display: none;
`,a_=l.default.div.withConfig({componentId:"zh__sc-37be1ed1-1"})`
  cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};

  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  align-self: stretch;

  min-width: 0;
  padding: 24px 40px;
  border: 1px solid
    ${({$isError:e,$disabled:t})=>t?"#D1D5DB":e?"#ff4d4f":"#4f39f6"};
  border-style: ${({$isWindowFileDragging:e})=>e?"dashed":"solid"};
  border-radius: 16px;

  background: ${({$isWindowFileDragging:e,$isError:t,$disabled:n})=>n?"#F6F8FA":t?"#FFF5F5":e?"#f6f3ff":"#fff"};

  &:hover {
    background-color: ${({$isError:e,$disabled:t})=>t?"#F6F8FA":e?"#FFF5F5":"#f6f3ff"};
  }

  &:active {
    background-color: ${({$isError:e,$disabled:t})=>t?"#F6F8FA":e?"#FFF5F5":"#efeaff"};
  }
`,aC=(0,n.observer)(function(){return(0,t.jsx)(az,{children:(0,t.jsx)(aj,{disabled:!0})})}),az=l.default.div.withConfig({componentId:"zh__sc-f40ff2c5-0"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-width: 0;

  ${({$flex1:e})=>!0===e&&`
    flex: 1;
  `}
`,{FILE_EXTENSION_WHITELIST_BY_GROUP:aI}=C.default.file,ak=(0,n.observer)(function(){var e;let n,{analyzedFile:l}=o.default.modal.serviceWorkerCreate,{ref:a,fire:r}=(0,Z.default)();if((0,i.useEffect)(()=>{null!==l&&r()},[l,r]),null===l)return null;let d=-1===(n=(e=l.name).lastIndexOf("."))?"":e.slice(n).toLowerCase();return(0,t.jsxs)(aE,{ref:a,children:[(0,t.jsxs)(aT,{children:[(0,t.jsxs)(aS,{children:[(0,t.jsx)(_.default.FindInPage,{size:18}),"AI 문서 인식 완료"]}),(0,t.jsxs)(a$,{children:["업로드된 서류들에서 정보를 성공적으로 추출했습니다. ",(0,t.jsx)("br",{}),"우측의 [제공인력 기본 정보]가 올바르게 연동되었는지 확인 후, [최종 확인] 버튼을 눌러주세요."]})]}),(0,t.jsxs)(aO,{children:[(0,t.jsxs)(aL,{children:[(0,t.jsx)(_.default.CheckCircle,{size:18}),"분석 완료된 첨부 서류 (1건)"]}),(0,t.jsx)(aA,{children:(0,t.jsxs)(aR,{children:[(0,t.jsxs)(aF,{children:[(0,t.jsx)(aN,{children:aI.IMAGE.some(e=>e===d)?(0,t.jsx)(_.default.Photo,{size:17,color:"#FA8E43"}):aI.AUDIO.some(e=>e===d)?(0,t.jsx)(_.default.SpeechToText,{size:17,color:"#A855F7"}):aI.DOCUMENT.some(e=>e===d)?(0,t.jsx)(_.default.News,{size:17,color:"#2264E8"}):null}),(0,t.jsx)(aD,{children:(0,t.jsx)(aM,{children:l.name})})]}),(0,t.jsx)(aP,{children:"추출 완료"})]},`${l.name}-${l.size}-${l.lastModified}`)})]})]})}),aE=l.default.div.withConfig({componentId:"zh__sc-635d6973-0"})`
  overflow: hidden;
  display: flex;
  flex: 0 1 auto;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  align-self: stretch;

  min-height: 0;
  max-height: 100%;
  padding: 24px 40px;
  border-radius: 16px;

  background: #fff;
`,aT=l.default.div.withConfig({componentId:"zh__sc-635d6973-1"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  align-self: stretch;
`,aS=l.default.div.withConfig({componentId:"zh__sc-635d6973-2"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #0a0a0a;
`,a$=l.default.div.withConfig({componentId:"zh__sc-635d6973-3"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;

  padding-left: 26px;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #0a0a0a;
`,aO=l.default.div.withConfig({componentId:"zh__sc-635d6973-4"})`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  align-self: stretch;

  min-height: 0;
`,aL=l.default.div.withConfig({componentId:"zh__sc-635d6973-5"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #0a0a0a;
`,aA=l.default.div.withConfig({componentId:"zh__sc-635d6973-6"})`
  overflow-y: auto;
  display: flex;
  flex: 1 1 auto;
  flex-wrap: wrap;
  row-gap: 12px;
  place-content: flex-start space-between;
  align-items: flex-start;
  align-self: stretch;

  min-height: 0;
  max-height: 100%;
  padding-right: 4px;
`,aR=l.default.div.withConfig({componentId:"zh__sc-635d6973-7"})`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 355px;
  height: 64px;
  padding: 12px 16px;
  border-radius: 8px;

  background: #f6f8fb;
`,aF=l.default.div.withConfig({componentId:"zh__sc-635d6973-8"})`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`,aN=l.default.div.withConfig({componentId:"zh__sc-635d6973-9"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;
  border-radius: 4px;

  background: #fff;
`,aD=l.default.div.withConfig({componentId:"zh__sc-635d6973-10"})`
  display: flex;
  align-items: center;
  align-self: stretch;

  width: 196px;
  height: 40px;

  color: #0a0a0a;
`,aM=l.default.div.withConfig({componentId:"zh__sc-635d6973-11"})`
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #0a0a0a;
`,aP=l.default.div.withConfig({componentId:"zh__sc-635d6973-12"})`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;

  padding: 8px;
  border: 1px solid #4f39f6;
  border-radius: 99px;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 16px; /* 100% */
  color: #fff;
  letter-spacing: -1px;

  background: #4f39f6;
`,aB=(0,n.observer)(function(){let{analyzedFile:e}=o.default.modal.serviceWorkerCreate;return(0,t.jsxs)(aU,{children:[null!==e&&(0,t.jsx)(ak,{}),(0,t.jsx)(aC,{})]})}),aU=l.default.div.withConfig({componentId:"zh__sc-9bac733d-0"})`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 24px;
  align-items: center;

  /* justify-content: space-between; */
  justify-content: flex-end;

  min-width: 0;
  min-height: 0;
  padding: 32px 24px;
  border-right: 1px solid #e5e7eb;
`,{BANK_NAME:aW}=R.default.enums,aH=e=>{let t=e.trim().match(/^(\d{6})-?(\d)(\d{0,6})$/);if(null===t)return"unknown";switch(t[2]){case"1":case"3":return"MALE";case"2":case"4":return"FEMALE";default:return"unknown"}},aV=e=>{switch(e){case"MALE":return"남성";case"FEMALE":return"여성";case"unknown":return""}},aY=e=>e in aW,aG=Object.keys(aW).filter(aY)[0],aX=()=>{let e=new Date,[t,n]=ej.default.create(e.getFullYear(),e.getMonth()+1,e.getDate());return null!==t||null===n?null:n},aK=(0,n.observer)(function(){let{serviceWorkerDraft:e,analyzedServiceWorkerDraft:n,updateServiceWorkerDraft:l,getServiceWorkerDraftFieldError:a,clearServiceWorkerDraftFieldError:r}=o.default.modal.serviceWorkerCreate,d=(0,i.useRef)(!1);if((0,i.useEffect)(()=>{if(null===e||d.current||(d.current=!0,""!==(e.firstRegisteredDate??"").trim()))return;let t=aX();null!==t&&l(e=>({...e,firstRegisteredDate:t}))},[e,l]),null===e)return null;let c=e.serviceWorkerName??"",f=e.residentRegistrationNumber??"",h=e.firstRegisteredDate??"",u=e.phoneNumber??"",p=e.contact??"",x=e.address??"",g=e.postCode??"",m=e.addressDetail??"",b=e.bankName??aG,w=e.accountNumber??"",y=e.accountHolder??"",j=aH(f),v=(e,t)=>""===a(e)?t:{...t,borderColor:"#ff4d4f",background:"#fff5f5"},_=e=>{let n=a(e);return""===n?null:(0,t.jsx)(a6,{children:n})},C=(e,t)=>{let n=String(t??"").trim();return""!==n&&String(e).trim()===n},z=aX(),I=""===(n?.firstRegisteredDate??"").trim()&&null!==z&&h===z,k=C(h,n?.firstRegisteredDate??"")||I;return(0,t.jsxs)(aJ,{children:[(0,t.jsx)(aQ,{children:"인적사항"}),(0,t.jsxs)(aZ,{children:[(0,t.jsxs)(a1,{children:[(0,t.jsxs)(a2,{children:["성명",(0,t.jsx)(aq,{})]}),(0,t.jsx)(s.default.Input.Text,{$autoFilled:C(c,n?.serviceWorkerName??""),style:v("serviceWorkerName",a8),value:c,onChange:e=>{r("serviceWorkerName"),l(t=>({...t,serviceWorkerName:e.target.value.trim()}))}}),_("serviceWorkerName")]}),(0,t.jsxs)(a1,{children:[(0,t.jsx)(a2,{children:"주민등록번호"}),(0,t.jsx)(s.default.Input.Text,{$autoFilled:C(f,n?.residentRegistrationNumber??""),style:v("residentRegistrationNumber",a8),value:f,onChange:e=>{var t;let n,i=e.target.value,o=e.currentTarget.selectionStart??i.length,a=(i.slice(0,o).match(/\d/g)??[]).length;r("residentRegistrationNumber");let d=ev.default.format(i);l(e=>({...e,residentRegistrationNumber:d})),t=e.currentTarget,n=((e,t)=>{if(t<=0)return 0;let n=0;for(let i=0;i<e.length;i+=1){let l=e[i];if(void 0!==l&&/\d/.test(l)&&(n+=1)===t)return i+1}return e.length})(d,a),"-"===d[n]&&(n+=1),requestAnimationFrame(()=>{document.activeElement===t&&t.setSelectionRange(n,n)})}}),_("residentRegistrationNumber")]}),(0,t.jsxs)(a1,{style:{flex:"none",width:266},children:[(0,t.jsx)(a2,{children:"성별"}),(0,t.jsx)(a3,{$autoFilled:C(aV(j),aV(aH(n?.residentRegistrationNumber??""))),style:a8,value:aV(j),placeholder:"주민등록번호와 연동되어 보여집니다.",readOnly:!0})]})]}),(0,t.jsxs)(aZ,{children:[(0,t.jsxs)(a1,{children:[(0,t.jsxs)(a2,{children:["휴대전화번호",(0,t.jsx)(aq,{})]}),(0,t.jsx)(s.default.Input.Phone,{$autoFilled:C(u,n?.phoneNumber??""),style:v("phoneNumber",a8),value:u,onChange:e=>{r("phoneNumber"),l(t=>({...t,phoneNumber:e}))}}),_("phoneNumber")]}),(0,t.jsxs)(a1,{children:[(0,t.jsx)(a2,{children:"자택전화번호"}),(0,t.jsx)(s.default.Input.Contact,{$autoFilled:C(p,n?.contact??""),style:v("contact",a8),value:p,onChange:e=>{r("contact"),l(t=>({...t,contact:e}))}}),_("contact")]})]}),(0,t.jsxs)(a0,{children:[(0,t.jsxs)(aZ,{children:[(0,t.jsxs)(a1,{children:[(0,t.jsx)(a2,{children:"주소"}),(0,t.jsx)(s.default.Input.Text,{$autoFilled:C(x,n?.address??""),style:v("address",a8),value:x,onChange:e=>{r("address"),l(t=>({...t,address:e.target.value}))}}),_("address")]}),(0,t.jsxs)(a1,{style:{flex:"none",width:191},children:[(0,t.jsx)(a2,{children:"우편번호"}),(0,t.jsx)(s.default.Input.PostCode,{$autoFilled:C(g,n?.postCode??""),style:v("postCode",a8),value:g,onChange:e=>{r("postCode"),l(t=>({...t,postCode:e}))}}),_("postCode")]})]}),(0,t.jsx)(aZ,{children:(0,t.jsxs)(a1,{children:[(0,t.jsx)(a2,{children:"상세주소"}),(0,t.jsx)(s.default.Input.Text,{$autoFilled:C(m,n?.addressDetail??""),style:v("addressDetail",a8),value:m,onChange:e=>{r("addressDetail"),l(t=>({...t,addressDetail:e.target.value}))}}),_("addressDetail")]})})]}),(0,t.jsxs)(aZ,{children:[(0,t.jsxs)(a1,{style:{flex:"none",width:191},children:[(0,t.jsx)(a2,{children:"은행명"}),(0,t.jsx)(a5,{style:v("bankName",a8),value:b??"",onChange:e=>{let t=e.target.value;r("bankName"),l(e=>({...e,bankName:aY(t)?t:void 0}))},children:Object.entries(aW).map(([e,n])=>(0,t.jsx)("option",{value:e,children:n.label},e))}),_("bankName")]}),(0,t.jsxs)(a1,{children:[(0,t.jsx)(a2,{children:"계좌번호"}),(0,t.jsx)(s.default.Input.Text,{$autoFilled:C(w,n?.accountNumber??""),style:v("accountNumber",a8),value:w,onChange:e=>{r("accountNumber"),l(t=>({...t,accountNumber:e.target.value}))}}),_("accountNumber")]}),(0,t.jsxs)(a1,{children:[(0,t.jsx)(a2,{children:"예금주"}),(0,t.jsx)(s.default.Input.Text,{$autoFilled:C(y,n?.accountHolder??""),style:v("accountHolder",a8),value:y,onChange:e=>{r("accountHolder"),l(t=>({...t,accountHolder:e.target.value}))}}),_("accountHolder")]})]}),(0,t.jsx)(aZ,{children:(0,t.jsxs)(a1,{style:{flex:"none",width:191},children:[(0,t.jsx)(a2,{children:"접수일"}),(0,t.jsx)(s.default.Input.Date,{$autoFilled:k,style:v("firstRegisteredDate",{...a8,height:36}),value:h,onChange:e=>{(r("firstRegisteredDate"),""===e.trim())?l(e=>({...e,firstRegisteredDate:void 0})):ej.default.is(e)&&l(t=>({...t,firstRegisteredDate:e}))}}),_("firstRegisteredDate")]})})]})});function aq(){return(0,t.jsx)(a4,{children:" *"})}let aJ=l.default.div.withConfig({componentId:"zh__sc-b1e5df68-0"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  align-self: stretch;
`,aQ=l.default.div.withConfig({componentId:"zh__sc-b1e5df68-1"})`
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
  text-align: center;
`,aZ=l.default.div.withConfig({componentId:"zh__sc-b1e5df68-2"})`
  display: flex;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;

  min-height: 59px;
`,a0=l.default.div.withConfig({componentId:"zh__sc-b1e5df68-3"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-self: stretch;
`,a1=l.default.div.withConfig({componentId:"zh__sc-b1e5df68-4"})`
  position: relative;

  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
  align-self: stretch;
  justify-content: flex-start;

  min-width: 0;
  min-height: 59px;
`,a2=l.default.div.withConfig({componentId:"zh__sc-b1e5df68-5"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #000;
  text-align: center;
`,a4=l.default.span.withConfig({componentId:"zh__sc-b1e5df68-6"})`
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: normal;
  color: #e7000b;
`,a6=l.default.div.withConfig({componentId:"zh__sc-b1e5df68-7"})`
  font-size: 12px;
  line-height: 16px;
  color: #ff4d4f;
`,a3=(0,l.default)(s.default.Input.Text).withConfig({componentId:"zh__sc-b1e5df68-8"})`
  &::placeholder {
    color: #0a0a0a;
  }
`,a5=(0,l.default)(s.default.Input.Select).withConfig({componentId:"zh__sc-b1e5df68-9"})`
  width: 100%;
`,a8={display:"flex",padding:"4px 16px",alignItems:"center",gap:"10px",flex:"1 0 0",alignSelf:"stretch",fontSize:16,maxHeight:36};var a9=e.i(62150),a7=e.i(74659);let re=Object.keys(a9.default).filter(function(e){return e in a9.default}),rt=Object.keys(a7.default).filter(function(e){return e in a7.default}),rn=["소지","미소지"],ri=(0,n.observer)(function(){let{serviceWorkerDraft:e,updateServiceWorkerDraft:n,getServiceWorkerDraftFieldError:i,clearServiceWorkerDraftFieldError:l}=o.default.modal.serviceWorkerCreate;if(null===e)return null;let a=e.availableTimes??[],r=e.regions??[],d=e.serviceTypes??[],s=e.hasVehicle,c=e.preferredWeeklyWorkingHours,f=(e,t)=>t.includes(e)?t.filter(t=>t!==e):[...t,e],h=i("availableTimes"),u=i("preferredWeeklyWorkingHours"),p=i("regions"),x=i("serviceTypes"),g=i("hasVehicle");return(0,t.jsxs)(rl,{children:[(0,t.jsxs)(ro,{children:[(0,t.jsx)(ra,{children:"근무 가능 시간"}),(0,t.jsxs)(rr,{children:[(0,t.jsx)(tn.default,{sx:{fontSize:20}}),(0,t.jsx)(rd,{children:"시간대를 추가하고, 추가한 시간대를 클릭하면 수정하거나 삭제할 수 있습니다."})]})]}),(0,t.jsx)(rs,{value:a,onChange:e=>{let t=e.target.value;l("availableTimes"),n(e=>({...e,availableTimes:t}))}}),""!==h&&(0,t.jsx)(ry,{children:h}),(0,t.jsxs)(rc,{children:[(0,t.jsx)(rf,{children:"희망 근로 시간"}),(0,t.jsxs)(rh,{children:[(0,t.jsx)(rp,{children:"총"}),(0,t.jsx)(ru,{value:void 0===c?"":String(c),placeholder:"00",maxLength:2,style:""===u?void 0:{borderColor:"#ff4d4f",background:"#fff5f5"},onChange:e=>{let t=e.target.value.replace(/\D/g,"");if(""===t){l("preferredWeeklyWorkingHours"),n(e=>({...e,preferredWeeklyWorkingHours:void 0}));return}let i=Math.min(Number(t),99);l("preferredWeeklyWorkingHours"),n(e=>({...e,preferredWeeklyWorkingHours:i}))}}),(0,t.jsx)(rp,{children:"시간"})]})]}),""!==u&&(0,t.jsx)(ry,{children:u}),(0,t.jsxs)(rx,{children:[(0,t.jsx)(rg,{children:"서비스 가능 지역 (복수 선택 가능)"}),(0,t.jsx)(rm,{children:re.map(e=>(0,t.jsxs)(rb,{children:[(0,t.jsx)(rj,{checked:r.includes(e),onChange:()=>{let t=f(e,r);l("regions"),n(e=>({...e,regions:t}))}}),(0,t.jsx)(rw,{children:a9.default[e].label})]},e))}),""!==p&&(0,t.jsx)(ry,{children:p})]}),(0,t.jsxs)(rx,{children:[(0,t.jsx)(rg,{children:"가능한 근무 내용 (복수 선택 가능)"}),(0,t.jsx)(rm,{children:rt.map(e=>(0,t.jsxs)(rb,{children:[(0,t.jsx)(rj,{checked:d.includes(e),onChange:()=>{let t=f(e,d);l("serviceTypes"),n(e=>({...e,serviceTypes:t}))}}),(0,t.jsx)(rw,{children:a7.default[e].label})]},e))}),""!==x&&(0,t.jsx)(ry,{children:x})]}),(0,t.jsxs)(rx,{children:[(0,t.jsx)(rg,{children:"차량 소지"}),(0,t.jsx)(rm,{children:rn.map(e=>(0,t.jsxs)(rb,{children:[(0,t.jsx)(rv,{name:"service-worker-car-ownership",checked:s===("소지"===e),onChange:()=>{l("hasVehicle"),n(t=>({...t,hasVehicle:"소지"===e}))}}),(0,t.jsx)(rw,{children:e})]},e))}),""!==g&&(0,t.jsx)(ry,{children:g})]})]})}),rl=l.default.div.withConfig({componentId:"zh__sc-1335978d-0"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  align-self: stretch;
`,ro=l.default.div.withConfig({componentId:"zh__sc-1335978d-1"})`
  display: flex;
  gap: 16px;
  align-items: center;
  align-self: stretch;

  height: 30px;
`,ra=l.default.div.withConfig({componentId:"zh__sc-1335978d-2"})`
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
  text-align: center;
`,rr=l.default.div.withConfig({componentId:"zh__sc-1335978d-3"})`
  display: flex;
  flex: 1 0 0;
  gap: 4px;
  align-items: center;

  color: #464c53;
`,rd=l.default.div.withConfig({componentId:"zh__sc-1335978d-4"})`
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px; /* 125% */
`,rs=(0,l.default)(s.default.Input.TimeSlider).withConfig({componentId:"zh__sc-1335978d-5"})`
  align-self: stretch;
`,rc=l.default.div.withConfig({componentId:"zh__sc-1335978d-6"})`
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
  align-self: stretch;
`,rf=l.default.div.withConfig({componentId:"zh__sc-1335978d-7"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #000;
  text-align: center;
`,rh=l.default.div.withConfig({componentId:"zh__sc-1335978d-8"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,ru=(0,l.default)(s.default.Input.Text).withConfig({componentId:"zh__sc-1335978d-9"})`
  width: 59px;
  height: 36px;
  text-align: center;

  &::placeholder {
    color: #0a0a0a;
    opacity: 1;
  }
`,rp=l.default.div.withConfig({componentId:"zh__sc-1335978d-10"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #000;
  text-align: center;
`,rx=l.default.div.withConfig({componentId:"zh__sc-1335978d-11"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
  align-self: stretch;
`,rg=l.default.div.withConfig({componentId:"zh__sc-1335978d-12"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #000;
  text-align: center;
`,rm=l.default.div.withConfig({componentId:"zh__sc-1335978d-13"})`
  display: flex;
  flex-wrap: wrap;
  gap: 0 24px;
  align-items: center;
`,rb=l.default.label.withConfig({componentId:"zh__sc-1335978d-14"})`
  display: inline-flex;
  gap: 8px;
  align-items: center;
  height: 36px;
`,rw=l.default.span.withConfig({componentId:"zh__sc-1335978d-15"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #000;
  text-align: center;
`,ry=l.default.div.withConfig({componentId:"zh__sc-1335978d-16"})`
  font-size: 12px;
  line-height: 16px;
  color: #ff4d4f;
`,rj=(0,l.default)(s.default.Input.Check).attrs({$iconSizeRatio:1.5}).withConfig({componentId:"zh__sc-1335978d-17"})`
  width: 24px;
  height: 24px;
`,rv=(0,l.default)(s.default.Input.Radio).withConfig({componentId:"zh__sc-1335978d-18"})`
  width: 20px;
  height: 20px;
`,r_=(0,n.observer)(function(){return(0,t.jsxs)(rC,{children:[(0,t.jsx)(rz,{children:"제공인력 기본 정보"}),(0,t.jsx)(aK,{}),(0,t.jsx)(rI,{}),(0,t.jsx)(ri,{})]})}),rC=l.default.div.withConfig({componentId:"zh__sc-7b7809b5-0"})`
  overflow-y: auto;
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  gap: 32px;
  align-items: flex-start;
  align-self: stretch;

  min-height: 0;
  padding: 32px 24px;

  background: #fff;
  box-shadow: -8px 0 8px 0 rgb(0 0 0 / 8%);
`,rz=l.default.div.withConfig({componentId:"zh__sc-7b7809b5-1"})`
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
  text-align: center;
`,rI=l.default.div.withConfig({componentId:"zh__sc-7b7809b5-2"})`
  flex-shrink: 0;

  width: 100%;
  height: 1px;
  min-height: 1px;

  background: #e5e7eb;
`,rk=(0,n.observer)(function(){let{serviceWorkerDraft:e}=o.default.modal.serviceWorkerCreate;return(0,t.jsxs)(rE,{children:[(0,t.jsx)(aB,{}),e&&(0,t.jsx)(r_,{})]})}),rE=l.default.div.withConfig({componentId:"zh__sc-e5134819-0"})`
  overflow-y: auto;
  display: flex;
  align-self: stretch;
  justify-content: center;

  min-height: 830px;
  max-height: 830px;

  background: #f9fafb;
`;function rT(){let{close:e}=o.default.modal.serviceWorkerCreate;return(0,t.jsxs)(rS,{children:[(0,t.jsx)(r$,{children:"신규 제공인력 등록하기"}),(0,t.jsxs)(rO,{onClick:e,children:[(0,t.jsx)(v.X,{size:16}),"닫기"]})]})}let rS=l.default.div.withConfig({componentId:"zh__sc-e97a276c-0"})`
  display: flex;
  gap: 24px;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;

  height: 69px;
  padding: 16px;
  border-bottom: 1px solid #e5e7eb;
  border-radius: 16px 16px 0 0;

  background: #fff;
`,r$=l.default.div.withConfig({componentId:"zh__sc-e97a276c-1"})`
  font-size: 18px;
  font-weight: 700;
  font-style: normal;
  line-height: 28px; /* 155.556% */
  color: #101828;
  letter-spacing: -0.439px;
`,rO=(0,l.default)(s.default.Button.Outlined).withConfig({componentId:"zh__sc-e97a276c-2"})`
  display: flex;
  gap: 6px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,rL=(0,n.observer)(function(){let e=o.default.modal.serviceWorkerCreate,{status:n}=e,l=(0,i.useRef)(null);return((0,i.useEffect)(()=>"ready"!==n?void e.setToastContainer(null):(e.setToastContainer(l.current),()=>{e.setToastContainer(null)}),[e,n]),"ready"!==n)?null:(0,t.jsx)(a.default,{children:(0,t.jsxs)(rA,{ref:l,children:[(0,t.jsx)(rT,{}),(0,t.jsx)(rk,{}),(0,t.jsx)(o4,{})]})})}),rA=l.default.div.withConfig({componentId:"zh__sc-cb4ab18d-0"})`
  position: relative;

  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  align-items: center;

  width: 1712px;
  min-width: 1712px;
  border-radius: 8px;

  background: #fff;
`;var rR=e.i(39555),rF=e.i(84527),rN=e.i(74483);let rD=e=>null!==e&&lV.default.brand.calendarDateString.is(e)?e.replaceAll("-",""):"-",rM=(0,n.observer)(function(){let e=o.default.modal.serviceWorkerDetail,n=o.default.data.serviceWorker.contractList;(0,i.useEffect)(()=>null===e.serviceWorkerId?void n.reset():(n.setQuery({id:e.serviceWorkerId}),()=>{n.reset()}),[n,e.serviceWorkerId]);let l=n.data??[];return(0,t.jsxs)(rP,{children:[(0,t.jsxs)(rB,{children:[(0,t.jsx)(rU,{children:"연결된 이용자 정보"}),(0,t.jsxs)(rW,{children:[(0,t.jsxs)(rH,{type:"button",disabled:!0,children:[(0,t.jsx)(rF.default,{sx:{fontSize:20}}),"수정하기"]}),(0,t.jsxs)(rH,{type:"button",disabled:!0,children:[(0,t.jsx)(rR.default,{sx:{fontSize:20}}),"추가하기"]})]})]}),0===l.length?(0,t.jsxs)(r1,{children:[(0,t.jsx)(rN.default,{sx:{fontSize:24,color:"#494F53"}}),(0,t.jsxs)(r2,{children:[(0,t.jsx)(r4,{children:"연결된 이용자가 없습니다."}),(0,t.jsx)(r6,{children:"[+추가하기] 버튼을 클릭해 이용자를 연결해주세요."})]})]}):(0,t.jsx)(rV,{children:l.map((e,n)=>(0,t.jsxs)(rY,{$isSelected:0===n,children:[(0,t.jsx)(rG,{children:(0,t.jsx)(rX,{children:e.client.name})}),(0,t.jsxs)(rK,{children:[(0,t.jsxs)(rq,{children:[(0,t.jsx)(rJ,{children:"생년월일"}),(0,t.jsx)(rQ,{}),(0,t.jsx)(r0,{children:(e=>{if(null===e||!lV.default.brand.calendarDateString.is(e))return"-";let[t="",n="",i=""]=e.split("-");return 4!==t.length||2!==n.length||2!==i.length?"-":`${t.slice(-2)}${n}${i}`})(e.client.birthDate)})]}),(0,t.jsxs)(rq,{children:[(0,t.jsx)(rJ,{children:"시작일자"}),(0,t.jsx)(rQ,{}),(0,t.jsx)(rZ,{children:rD(e.serviceStartDate)})]}),(0,t.jsxs)(rq,{children:[(0,t.jsx)(rJ,{children:"종료일자"}),(0,t.jsx)(rQ,{}),(0,t.jsx)(rZ,{children:rD(e.serviceEndDate)})]})]})]},`${e.client.name}-${e.client.birthDate??""}-${e.serviceStartDate??""}-${e.serviceEndDate??""}`))})]})}),rP=l.default.section.withConfig({componentId:"zh__sc-e43c7362-0"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;

  width: 100%;
`,rB=l.default.div.withConfig({componentId:"zh__sc-e43c7362-1"})`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;

  width: 100%;
  min-height: 40px;
`,rU=l.default.h3.withConfig({componentId:"zh__sc-e43c7362-2"})`
  font-size: 18px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px;
  color: #101828;
`,rW=l.default.div.withConfig({componentId:"zh__sc-e43c7362-3"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,rH=(0,l.default)(s.default.Button.Outlined).withConfig({componentId:"zh__sc-e43c7362-4"})`
  display: flex;
  gap: 4px;
  align-items: center;

  height: 40px;
  padding: 8px 16px;
`,rV=l.default.div.withConfig({componentId:"zh__sc-e43c7362-5"})`
  overflow-x: auto;
  display: flex;
  gap: 10px;
  align-items: flex-start;

  width: 100%;
`,rY=l.default.div.withConfig({componentId:"zh__sc-e43c7362-6"})`
  display: flex;
  flex: 0 0 320px;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;

  min-height: 186px;
  padding: 16px;
  border: 1px solid ${e=>e.$isSelected?"#5635ff":"#e5e9ef"};
  border-radius: 8px;

  background: ${e=>e.$isSelected?"#f7f5ff":"#fff"};
  box-shadow: ${e=>e.$isSelected?"0 0 6px #ddd8ff":"none"};
`,rG=l.default.div.withConfig({componentId:"zh__sc-e43c7362-7"})`
  display: flex;
  align-items: center;
  width: 100%;
`,rX=l.default.div.withConfig({componentId:"zh__sc-e43c7362-8"})`
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  color: #0a0a0a;
`,rK=l.default.div.withConfig({componentId:"zh__sc-e43c7362-9"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`,rq=l.default.div.withConfig({componentId:"zh__sc-e43c7362-10"})`
  display: flex;
  gap: 8px;
  align-items: flex-start;
  width: 100%;
`,rJ=l.default.span.withConfig({componentId:"zh__sc-e43c7362-11"})`
  width: 52px;
  min-width: 52px;

  font-size: 14px;
  line-height: 20px;
  color: #0a0a0a;
`,rQ=l.default.span.withConfig({componentId:"zh__sc-e43c7362-12"})`
  width: 1px;
  height: 20px;
  background: #e5e7eb;
`,rZ=l.default.span.withConfig({componentId:"zh__sc-e43c7362-13"})`
  min-width: 0;

  font-size: 14px;
  line-height: 20px;
  color: #0a0a0a;
  overflow-wrap: anywhere;
`,r0=(0,l.default)(rZ).withConfig({componentId:"zh__sc-e43c7362-14"})`
  color: #45464e;
`,r1=l.default.div.withConfig({componentId:"zh__sc-e43c7362-15"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-height: 186px;
  padding: 16px;
  border: 1px solid #e5e9ef;
  border-radius: 8px;

  background: #fff;
`,r2=l.default.div.withConfig({componentId:"zh__sc-e43c7362-16"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: center;
`,r4=l.default.div.withConfig({componentId:"zh__sc-e43c7362-17"})`
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  color: #494f53;
`,r6=l.default.div.withConfig({componentId:"zh__sc-e43c7362-18"})`
  font-size: 16px;
  line-height: 20px;
  color: #494f53;
  text-align: center;
`;var r3=e.i(12945);let r5={residentRegistrationNumberText:"",genderText:"",mobileText:"",contactText:"",addressBaseText:"",addressDetailText:"",postCodeText:""},r8={mobileText:"",contactText:"",postCodeText:""},r9=(0,n.observer)(function(){let e=o.default.modal.serviceWorkerDetail,n=o.default.modal.serviceWorkerDetail.serviceWorker,l=null===n?r5:{residentRegistrationNumberText:n.residentRegistrationNumber??"",genderText:null===n.gender?"":r3.default[n.gender].label,mobileText:n.phoneNumber??"",contactText:n.contact??"",addressBaseText:n.address??"",addressDetailText:n.addressDetail??"",postCodeText:n.postCode??""},a=(0,i.useRef)(null),[r,d]=(0,i.useState)(!1),[s,c]=(0,i.useState)(!1),[f,h]=(0,i.useState)(r5),[u,p]=(0,i.useState)(r8),x=r?f:l,g=(e,t)=>{h(n=>({...n,[e]:t})),("mobileText"===e||"contactText"===e||"postCodeText"===e)&&p(t=>({...t,[e]:""}))},m=(0,i.useCallback)(()=>{s||(h(l),p(r8),d(!1))},[s,l]);if((0,i.useEffect)(()=>{if(!r||s)return;let e=e=>{let t=e.target;t instanceof Node&&null!==a.current&&a.current.contains(t)||m()};return document.addEventListener("pointerdown",e),()=>{document.removeEventListener("pointerdown",e)}},[m,r,s]),null===n)return null;let b=async()=>{let t,i,a,r,u,x,g;if(s)return;let m=(t={},i={},(a=f.mobileText.trim())!==l.mobileText.trim()&&(i.phoneNumber=a),(r=f.contactText.trim())!==l.contactText.trim()&&(i.contact=r),(u=f.postCodeText.trim())!==l.postCodeText.trim()&&(i.postCode=u),Object.assign(t,i),(x=f.addressBaseText.trim())!==l.addressBaseText.trim()&&(t.address=x),(g=f.addressDetailText.trim())!==l.addressDetailText.trim()&&(t.addressDetail=g),t);if(!(Object.keys(m).length>0)){h(l),p(r8),d(!1);return}let b=((e,t)=>{let n={...r8},i=e.mobileText.trim()!==t.mobileText.trim(),l=e.contactText.trim()!==t.contactText.trim(),o=e.postCodeText.trim()!==t.postCodeText.trim();if(i){let t=e.mobileText.trim();""===t||lV.default.brand.phoneNumber.is(t)||(n.mobileText="유효한 휴대폰 형식이 아닙니다.")}if(l){let t=e.contactText.trim();""===t||lV.default.brand.contactNumber.is(t)||(n.contactText="유효한 연락처 형식이 아닙니다.")}if(o){let t=e.postCodeText.trim();if(""!==t){let[e]=lV.default.brand.postCode.sanitize(t);null!==e&&(n.postCodeText="유효한 우편번호 형식이 아닙니다.")}}return n})(f,l);if(""!==b.mobileText||""!==b.contactText||""!==b.postCodeText)return void p(b);p(r8),c(!0);let[w]=await oB.default.data.serviceWorker.patch({id:n.id,payload:m});if(c(!1),null!==w)return;e.markListRefreshNeeded(),h(l),d(!1);let y=o.default.data.serviceWorker.detail;null!==y.query&&y.refetch()};return(0,t.jsxs)(r7,{ref:a,children:[(0,t.jsxs)(de,{children:[(0,t.jsx)(dt,{children:"인적사항"}),r?(0,t.jsxs)(dn,{children:[(0,t.jsxs)(di,{type:"button",onClick:m,disabled:s,children:[(0,t.jsx)(lf.default,{sx:{fontSize:20}}),"수정 취소"]}),(0,t.jsxs)(di,{type:"button",onClick:()=>void b(),disabled:s,children:[(0,t.jsx)(tt.default,{sx:{fontSize:20}}),"수정 저장"]})]}):(0,t.jsxs)(di,{type:"button",onClick:()=>{h(l),d(!0)},children:[(0,t.jsx)(rF.default,{sx:{fontSize:20}}),"수정하기"]})]}),(0,t.jsxs)(dl,{children:[(0,t.jsxs)(da,{$columns:4,children:[(0,t.jsxs)(dr,{children:["주민등록번호",(0,t.jsx)(ds,{value:x.residentRegistrationNumberText,readOnly:!0})]}),(0,t.jsxs)(dr,{children:["성별",(0,t.jsx)(ds,{value:x.genderText,readOnly:!0})]}),(0,t.jsxs)(dr,{children:["휴대폰",(0,t.jsx)(dc,{value:x.mobileText,style:""!==u.mobileText?du:void 0,readOnly:!r,onChange:e=>g("mobileText",e)}),""!==u.mobileText?(0,t.jsx)(dd,{children:u.mobileText}):null]}),(0,t.jsxs)(dr,{children:["연락처",(0,t.jsx)(df,{value:x.contactText,style:""!==u.contactText?du:void 0,readOnly:!r,onChange:e=>g("contactText",e)}),""!==u.contactText?(0,t.jsx)(dd,{children:u.contactText}):null]})]}),(0,t.jsxs)(da,{$columns:3,children:[(0,t.jsxs)(dr,{children:["주소",(0,t.jsx)(ds,{value:x.addressBaseText,readOnly:!r,onChange:e=>g("addressBaseText",e.target.value)})]}),(0,t.jsxs)(dr,{children:["상세주소",(0,t.jsx)(ds,{value:x.addressDetailText,readOnly:!r,onChange:e=>g("addressDetailText",e.target.value)})]}),(0,t.jsxs)(dr,{children:["우편번호",(0,t.jsx)(dh,{value:x.postCodeText,style:""!==u.postCodeText?du:void 0,readOnly:!r,onChange:e=>g("postCodeText",e)}),""!==u.postCodeText?(0,t.jsx)(dd,{children:u.postCodeText}):null]})]})]})]})}),r7=l.default.section.withConfig({componentId:"zh__sc-319b784e-0"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;

  width: 100%;
`,de=l.default.div.withConfig({componentId:"zh__sc-319b784e-1"})`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;

  width: 100%;
  min-height: 40px;
`,dt=l.default.h3.withConfig({componentId:"zh__sc-319b784e-2"})`
  font-size: 18px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 111.111% */
  color: #101828;
`,dn=l.default.div.withConfig({componentId:"zh__sc-319b784e-3"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,di=(0,l.default)(s.default.Button.Outlined).withConfig({componentId:"zh__sc-319b784e-4"})`
  display: flex;
  gap: 4px;
  align-items: center;

  height: 40px;
  padding: 8px 16px;
`,dl=l.default.div.withConfig({componentId:"zh__sc-319b784e-5"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-self: stretch;

  width: 100%;
`,da=l.default.div.withConfig({componentId:"zh__sc-319b784e-6"})`
  display: grid;
  grid-template-columns: ${({$columns:e})=>4===e?"repeat(4, minmax(0, 1fr))":"repeat(3, minmax(0, 1fr))"};
  gap: 12px;
  width: 100%;
`,dr=l.default.label.withConfig({componentId:"zh__sc-319b784e-7"})`
  display: flex;
  flex-direction: column;
  gap: 4px;

  min-width: 0;

  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: #000;
`,dd=l.default.div.withConfig({componentId:"zh__sc-319b784e-8"})`
  margin-top: 2px;
  font-size: 12px;
  line-height: 16px;
  color: #ff4d4f;
`,ds=(0,l.default)(s.default.Input.Text).withConfig({componentId:"zh__sc-319b784e-9"})`
  height: 36px;
  padding: 0 16px;
  font-size: 16px;
  line-height: 20px;
`,dc=(0,l.default)(s.default.Input.Phone).withConfig({componentId:"zh__sc-319b784e-10"})`
  height: 36px;
  padding: 0 16px;
  font-size: 16px;
  line-height: 20px;
`,df=(0,l.default)(s.default.Input.Contact).withConfig({componentId:"zh__sc-319b784e-11"})`
  height: 36px;
  padding: 0 16px;
  font-size: 16px;
  line-height: 20px;
`,dh=(0,l.default)(s.default.Input.PostCode).withConfig({componentId:"zh__sc-319b784e-12"})`
  height: 36px;
  padding: 0 16px;
  font-size: 16px;
  line-height: 20px;
`,du={borderColor:"#ff4d4f",background:"#fff5f5"},dp={availableTimes:[],preferredWeeklyWorkingHours:null,regions:[],serviceTypes:[],hasVehicle:null},dx=Object.keys(a9.default).filter(function(e){return e in a9.default}),dg=Object.keys(a7.default).filter(function(e){return e in a7.default}),dm=[{label:"소지",value:!0},{label:"미소지",value:!1}],db=e=>[...new Set(e)].sort(),dw=e=>`${e.dayOfWeek}-${e.hour}`,dy=(e,t)=>{let n=db(e),i=db(t);return n.length===i.length&&n.every((e,t)=>e===i[t])},dj=(0,n.observer)(function(){let e=o.default.modal.serviceWorkerDetail,n=o.default.modal.serviceWorkerDetail.serviceWorker,l=null===n?dp:{availableTimes:n.availableTimes,preferredWeeklyWorkingHours:n.preferredWeeklyWorkingHours??null,regions:n.regions,serviceTypes:n.serviceTypes,hasVehicle:n.hasVehicle??null},a=(0,i.useRef)(null),[r,d]=(0,i.useState)(!1),[s,c]=(0,i.useState)(!1),[f,h]=(0,i.useState)(dp),u=r?f:l,p=(0,i.useCallback)(()=>{s||(h(l),d(!1))},[s,l]);if((0,i.useEffect)(()=>{if(!r||s)return;let e=e=>{let t=e.target;t instanceof Node&&null!==a.current&&a.current.contains(t)||p()};return document.addEventListener("pointerdown",e),()=>{document.removeEventListener("pointerdown",e)}},[p,r,s]),null===n)return null;let x=(e,t)=>r?t.includes(e)?t.filter(t=>t!==e):[...t,e]:t,g=async()=>{let t;if(s)return;let i=(t={},((e,t)=>{if(e.length!==t.length)return!1;let n=e.map(dw).sort(),i=t.map(dw).sort();return n.every((e,t)=>e===i[t])})(f.availableTimes,l.availableTimes)||(t.availableTimes=f.availableTimes),dy(f.regions,l.regions)||(t.regions=f.regions),dy(f.serviceTypes,l.serviceTypes)||(t.serviceTypes=f.serviceTypes),f.preferredWeeklyWorkingHours!==l.preferredWeeklyWorkingHours&&(t.preferredWeeklyWorkingHours=f.preferredWeeklyWorkingHours??void 0),f.hasVehicle!==l.hasVehicle&&null!==f.hasVehicle&&(t.hasVehicle=f.hasVehicle),t);if(!(Object.keys(i).length>0)){h(l),d(!1);return}c(!0);let[a]=await oB.default.data.serviceWorker.patch({id:n.id,payload:i});if(c(!1),null!==a)return;e.markListRefreshNeeded(),h(l),d(!1);let r=o.default.data.serviceWorker.detail;null!==r.query&&r.refetch()};return(0,t.jsx)(dv,{ref:a,children:(0,t.jsxs)(dz,{children:[(0,t.jsxs)(dI,{children:[(0,t.jsxs)(dk,{children:[(0,t.jsx)(dE,{children:"근무 가능 시간"}),(0,t.jsxs)(dT,{children:[(0,t.jsx)(tn.default,{sx:{fontSize:20}}),(0,t.jsx)(dS,{children:"시간대를 추가하고, 추가한 시간대를 클릭하면 수정하거나 삭제할 수 있습니다."})]}),r&&(0,t.jsx)(d$,{children:"수정 진행중"})]}),r?(0,t.jsxs)(d_,{children:[(0,t.jsxs)(dC,{type:"button",onClick:p,disabled:s,children:[(0,t.jsx)(lf.default,{sx:{fontSize:20}}),"수정 취소"]}),(0,t.jsxs)(dC,{type:"button",onClick:()=>void g(),disabled:s,children:[(0,t.jsx)(tt.default,{sx:{fontSize:20}}),"수정 저장"]})]}):(0,t.jsxs)(dC,{type:"button",onClick:()=>{h(l),d(!0)},children:[(0,t.jsx)(rF.default,{sx:{fontSize:20}}),"수정하기"]})]}),(0,t.jsx)(dO,{value:u.availableTimes,disabled:!r,readOnly:!r,onChange:e=>{if(!r)return;let t=e.target.value;h(e=>({...e,availableTimes:t}))}}),(0,t.jsxs)(dL,{children:[(0,t.jsx)(dA,{children:"희망 근로 시간"}),(0,t.jsxs)(dR,{children:[(0,t.jsx)(dN,{children:"총"}),(0,t.jsx)(dF,{value:null===u.preferredWeeklyWorkingHours?"":String(u.preferredWeeklyWorkingHours),placeholder:"00",maxLength:2,disabled:!r,onChange:e=>{if(!r)return;let t=e.target.value.replace(/\D/g,"");if(""===t)return void h(e=>({...e,preferredWeeklyWorkingHours:null}));let n=Math.min(Number(t),99);h(e=>({...e,preferredWeeklyWorkingHours:n}))}}),(0,t.jsx)(dN,{children:"시간"})]})]}),(0,t.jsxs)(dD,{children:[(0,t.jsx)(dM,{children:"서비스 가능 지역 (복수 선택 가능)"}),(0,t.jsx)(dP,{children:dx.map(e=>(0,t.jsxs)(dB,{children:[(0,t.jsx)(dW,{disabled:!r,checked:u.regions.includes(e),onChange:()=>{let t=x(e,u.regions);h(e=>({...e,regions:t}))}}),(0,t.jsx)(dU,{children:a9.default[e].label})]},e))})]}),(0,t.jsxs)(dD,{children:[(0,t.jsx)(dM,{children:"가능한 근무 내용 (복수 선택 가능)"}),(0,t.jsx)(dP,{children:dg.map(e=>(0,t.jsxs)(dB,{children:[(0,t.jsx)(dW,{disabled:!r,checked:u.serviceTypes.includes(e),onChange:()=>{let t=x(e,u.serviceTypes);h(e=>({...e,serviceTypes:t}))}}),(0,t.jsx)(dU,{children:a7.default[e].label})]},e))})]}),(0,t.jsxs)(dD,{children:[(0,t.jsx)(dM,{children:"차량 소지"}),(0,t.jsx)(dP,{children:dm.map(e=>(0,t.jsxs)(dB,{children:[(0,t.jsx)(dH,{name:"detail-service-worker-car-ownership",checked:u.hasVehicle===e.value,disabled:!r,onChange:()=>{r&&h(t=>({...t,hasVehicle:e.value}))}}),(0,t.jsx)(dU,{children:e.label})]},e.label))})]})]})})}),dv=l.default.section.withConfig({componentId:"zh__sc-3656833f-0"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;

  width: 100%;
`,d_=l.default.div.withConfig({componentId:"zh__sc-3656833f-1"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,dC=(0,l.default)(s.default.Button.Outlined).withConfig({componentId:"zh__sc-3656833f-2"})`
  display: flex;
  gap: 4px;
  align-items: center;

  height: 40px;
  padding: 8px 16px;
`,dz=l.default.div.withConfig({componentId:"zh__sc-3656833f-3"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  align-self: stretch;
`,dI=l.default.div.withConfig({componentId:"zh__sc-3656833f-4"})`
  display: flex;
  gap: 16px;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;

  width: 100%;
`,dk=l.default.div.withConfig({componentId:"zh__sc-3656833f-5"})`
  display: flex;
  flex: 1 1 auto;
  gap: 16px;
  align-items: center;
`,dE=l.default.div.withConfig({componentId:"zh__sc-3656833f-6"})`
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
  text-align: center;
`,dT=l.default.div.withConfig({componentId:"zh__sc-3656833f-7"})`
  display: flex;
  gap: 4px;
  align-items: center;
  color: #464c53;
`,dS=l.default.div.withConfig({componentId:"zh__sc-3656833f-8"})`
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px;
`,d$=l.default.div.withConfig({componentId:"zh__sc-3656833f-9"})`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;

  padding: 8px;
  border-radius: 99px;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 16px; /* 100% */
  color: #fff;

  background: #4f39f6;
`,dO=(0,l.default)(s.default.Input.TimeSlider).withConfig({componentId:"zh__sc-3656833f-10"})`
  align-self: stretch;
`,dL=l.default.div.withConfig({componentId:"zh__sc-3656833f-11"})`
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
  align-self: stretch;
`,dA=l.default.div.withConfig({componentId:"zh__sc-3656833f-12"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #000;
  text-align: center;
`,dR=l.default.div.withConfig({componentId:"zh__sc-3656833f-13"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,dF=(0,l.default)(s.default.Input.Text).withConfig({componentId:"zh__sc-3656833f-14"})`
  width: 59px;
  height: 36px;
  text-align: center;

  &::placeholder {
    color: #0a0a0a;
    opacity: 1;
  }
`,dN=l.default.div.withConfig({componentId:"zh__sc-3656833f-15"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #000;
  text-align: center;
`,dD=l.default.div.withConfig({componentId:"zh__sc-3656833f-16"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
  align-self: stretch;
`,dM=l.default.div.withConfig({componentId:"zh__sc-3656833f-17"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #000;
  text-align: center;
`,dP=l.default.div.withConfig({componentId:"zh__sc-3656833f-18"})`
  display: flex;
  flex-wrap: wrap;
  gap: 0 24px;
  align-items: center;
`,dB=l.default.label.withConfig({componentId:"zh__sc-3656833f-19"})`
  display: inline-flex;
  gap: 8px;
  align-items: center;
  height: 36px;
`,dU=l.default.span.withConfig({componentId:"zh__sc-3656833f-20"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #000;
  text-align: center;
`,dW=(0,l.default)(s.default.Input.Check).attrs({$iconSizeRatio:1.5}).withConfig({componentId:"zh__sc-3656833f-21"})`
  width: 24px;
  height: 24px;
`,dH=(0,l.default)(s.default.Input.Radio).withConfig({componentId:"zh__sc-3656833f-22"})`
  width: 20px;
  height: 20px;
`;function dV(){return(0,t.jsxs)(dY,{children:[(0,t.jsx)(r9,{}),(0,t.jsx)(rM,{}),(0,t.jsx)(dj,{})]})}let dY=l.default.div.withConfig({componentId:"zh__sc-d3727a60-0"})`
  overflow-y: auto;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 48px;
  align-items: flex-start;
  align-self: stretch;

  width: 100%;
  min-height: 0;
  padding: 24px;
  border-radius: 10px;

  background: #fcfdff;
`,dG=(0,n.observer)(function(){let e=o.default.modal.serviceWorkerDetail;return(0,t.jsx)(dX,{role:"tablist","aria-label":"제공인력 상세 탭",children:e.tabs.map(n=>(0,t.jsx)(dK,{type:"button",role:"tab","aria-selected":n.active,disabled:n.disabled,$active:n.active,$disabled:n.disabled,onClick:()=>e.setActiveTab(n.key),children:n.label},n.key))})}),dX=l.default.div.withConfig({componentId:"zh__sc-53613c76-0"})`
  display: flex;
  align-self: flex-start;

  width: 100%;
  height: 56px;
  border-bottom: 1px solid #e5e7eb;

  background-color: #fff;
`,dK=l.default.button.withConfig({componentId:"zh__sc-53613c76-1"})`
  cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};

  position: relative;

  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;

  width: 180px;
  height: 56px;

  font-size: 18px;
  font-weight: 700;
  line-height: 1.5;
  color: ${({$active:e,$disabled:t})=>e?"#052b57":t?"#8A949E":"#464c53"};

  &::after {
    content: '';

    position: absolute;
    bottom: -1px;
    left: 0;

    width: 100%;
    height: 4px;

    background-color: ${({$active:e})=>e?"#052b57":"transparent"};
  }
`;var dq=e.i(19740);let dJ=e=>{if(null===e||!lV.default.brand.calendarDateString.is(e))return null;let[t,n,i]=e.split("-"),l=Number(t),o=Number(n),a=Number(i);return Number.isFinite(l)&&Number.isFinite(o)&&Number.isFinite(a)?new Date(l,o-1,a):null},dQ=e=>{if(null===e||!lV.default.brand.calendarDateString.is(e))return"-";let[t,n,i]=e.split("-");return`${t}년 ${Number(n)}월 ${Number(i)}일`},dZ=(0,n.observer)(function(){let e=o.default.modal.serviceWorkerDetail.serviceWorker;if(null===e)return null;let{name:n,status:i,firstRegisteredDate:l,workStartDate:a,workEndDate:r}=e,d=dQ(l),s=dQ(a),c=null===r?null:dQ(r),f=((e,t)=>{if(null===e)return"-";let n=dJ(e),i=dJ(t)??new Date;if(null===n)return"-";let l=n.getFullYear(),o=n.getMonth(),a=n.getDate(),r=i.getFullYear(),d=i.getMonth(),s=i.getDate(),c=(r-l)*12+(d-o);s<a&&(c-=1),c<0&&(c=0,r=l,d=o);let f=Math.floor(c/12),h=c%12,u=f>0?`${f}년`:"",p=h>0?`${h}개월`:"";return`${u} ${p}`.trim()||"0개월"})(a,r);return(0,t.jsxs)(d0,{children:[(0,t.jsxs)(d1,{children:[(0,t.jsx)(d2,{children:n}),(0,t.jsx)(d4,{children:dq.SERVICE_WORKER_STATUS[i]})]}),(0,t.jsxs)(d6,{children:[(0,t.jsxs)(d3,{children:[(0,t.jsx)(d5,{children:"접수일"}),(0,t.jsx)(d8,{children:d})]}),(0,t.jsx)(d9,{}),(0,t.jsxs)(d3,{children:[(0,t.jsx)(d5,{children:"입사일 - 퇴사일"}),(0,t.jsx)(d8,{children:null===a?"-":(0,t.jsxs)(t.Fragment,{children:[s," -",null===c?(0,t.jsx)(d7,{}):` ${c}`]})})]}),(0,t.jsx)(d9,{}),(0,t.jsxs)(d3,{children:[(0,t.jsx)(d5,{children:"근속기간"}),(0,t.jsx)(d8,{children:f})]})]})]})}),d0=l.default.div.withConfig({componentId:"zh__sc-3c59ca1c-0"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;
  justify-content: center;

  height: 136px;
  padding: 16px 24px;
  border-bottom: 1px solid #e5e7eb;

  background: #fff;
`,d1=l.default.div.withConfig({componentId:"zh__sc-3c59ca1c-1"})`
  display: flex;
  gap: 12px;
  align-items: center;
`,d2=l.default.div.withConfig({componentId:"zh__sc-3c59ca1c-2"})`
  font-size: 24px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 83.333% */
  color: #0a0a0a;
`,d4=l.default.div.withConfig({componentId:"zh__sc-3c59ca1c-3"})`
  display: flex;
  gap: 10px;
  align-items: center;

  padding: 2px 12px;
  border: 1px solid #d1d5db;
  border-radius: 99px;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 24px; /* 150% */
  color: #0a0a0a;
  text-align: center;
`,d6=l.default.div.withConfig({componentId:"zh__sc-3c59ca1c-4"})`
  display: flex;
  gap: 12px;
  align-items: center;
`,d3=l.default.div.withConfig({componentId:"zh__sc-3c59ca1c-5"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,d5=l.default.div.withConfig({componentId:"zh__sc-3c59ca1c-6"})`
  font-size: 18px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 111.111% */
  color: #0a0a0a;
`,d8=l.default.div.withConfig({componentId:"zh__sc-3c59ca1c-7"})`
  font-size: 18px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px; /* 111.111% */
  color: #0a0a0a;
`,d9=l.default.div.withConfig({componentId:"zh__sc-3c59ca1c-8"})`
  width: 1px;
  height: 24px;
  background: #dadee6;
`,d7=l.default.span.withConfig({componentId:"zh__sc-3c59ca1c-9"})`
  display: inline-block;
  width: 114px;
`,se=(0,n.observer)(function(){let e=o.default.modal.serviceWorkerDetail;return"ready"!==e.status?null:(0,t.jsx)(a.default,{children:(0,t.jsxs)(st,{children:[(0,t.jsxs)(sn,{children:[(0,t.jsx)(si,{children:"제공인력 상세보기"}),(0,t.jsxs)(sl,{onClick:e.close,children:[(0,t.jsx)(v.X,{size:16}),"닫기"]})]}),(0,t.jsx)(dZ,{}),(0,t.jsx)(dG,{}),(0,t.jsx)(so,{children:"basic"===e.activeTab&&(0,t.jsx)(dV,{})})]})})}),st=l.default.div.withConfig({componentId:"zh__sc-731779e3-0"})`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;

  width: 1050px;
  height: 90vh;
  border-radius: 8px;

  background: #fff;
`,sn=l.default.div.withConfig({componentId:"zh__sc-731779e3-1"})`
  display: flex;
  gap: 24px;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;

  height: 69px;
  padding: 16px;
  border-bottom: 1px solid #e5e7eb;
  border-radius: 8px 8px 0 0;

  background: #fff;
`,si=l.default.h2.withConfig({componentId:"zh__sc-731779e3-2"})`
  margin: 0;

  font-size: 18px;
  font-weight: 700;
  font-style: normal;
  line-height: 28px;
  color: #101828;
  letter-spacing: -0.439px;
`,sl=(0,l.default)(s.default.Button.Outlined).withConfig({componentId:"zh__sc-731779e3-3"})`
  display: flex;
  gap: 6px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,so=l.default.div.withConfig({componentId:"zh__sc-731779e3-4"})`
  display: flex;
  flex: 1;
  min-height: 0;
`,sa=(0,n.observer)(function(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(eY,{}),(0,t.jsx)(rL,{}),(0,t.jsx)(se,{}),(0,t.jsx)(i2,{}),(0,t.jsx)(o2,{})]})});e.s(["default",0,sa],55357)},31239,e=>{"use strict";e.i(3159);var t=e.i(46907),n=e.i(33261),i=e.i(7744),l=e.i(43174);let o=(0,t.observer)(function(){let e=(0,n.usePathname)(),t=(0,n.useRouter)(),o=l.default.ui.layout.targetPathname;return(0,i.useEffect)(()=>{e&&l.default.ui.layout.setPathname(e)},[e]),(0,i.useEffect)(()=>{null!==o&&(t.push(o),l.default.ui.layout.clearTargetPathname())},[t,o]),null});e.s(["default",0,o])},44997,e=>{"use strict";var t=e.i(9735),n=e.i(70682),i=e.i(33261),l=e.i(7744),o=e.i(4153);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var r=(0,l.forwardRef)(function(e,t){var n=e.color,i=e.size,o=void 0===i?24:i,r=function(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["color","size"]);return l.default.createElement("svg",a({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},r),l.default.createElement("polyline",{points:"6 9 12 15 18 9"}))});function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}r.propTypes={color:o.default.string,size:o.default.oneOfType([o.default.string,o.default.number])},r.displayName="ChevronDown";var s=(0,l.forwardRef)(function(e,t){var n=e.color,i=e.size,o=void 0===i?24:i,a=function(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["color","size"]);return l.default.createElement("svg",d({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),l.default.createElement("polyline",{points:"18 15 12 9 6 15"}))});s.propTypes={color:o.default.string,size:o.default.oneOfType([o.default.string,o.default.number])},s.displayName="ChevronUp";var c=e.i(22803),f=e.i(9454);function h(e){return null===e?"/":e.length>1&&e.endsWith("/")?e.slice(0,-1):e}function u(e,t){let n=h(e),i=h(t);return"/"===i?"/"===n:n===i||n.startsWith(`${i}/`)}function p(e,t){return t.startsWith("/")?"/"===e?t:`${h(e)}${t}`:""}function x(e,t){return p(e,t.matchSubpath??t.subpath)}let g=c.default.div.withConfig({componentId:"zh__sc-2fa5d58c-0"})`
  overflow-y: auto;
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
  align-self: stretch;

  padding: 16px 12px;
`,m=c.default.div.withConfig({componentId:"zh__sc-2fa5d58c-1"})`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
`,b=c.default.div.withConfig({componentId:"zh__sc-2fa5d58c-2"})`
  cursor: ${({$clickable:e})=>e?"pointer":"default"};

  position: relative;

  flex-shrink: 0;

  width: 100%;
  height: 40px;
  border-radius: 8px;

  background: ${({$active:e})=>e?"#F1F0FA":"transparent"};
`,w=c.default.div.withConfig({componentId:"zh__sc-2fa5d58c-3"})`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
  height: 100%;
  padding: 8px 8px 8px 16px;
`,y=c.default.div.withConfig({componentId:"zh__sc-2fa5d58c-4"})`
  flex-shrink: 0;
  width: 100%;
  height: 24px;
`,j=c.default.div.withConfig({componentId:"zh__sc-2fa5d58c-5"})`
  display: flex;
  gap: 10px;
  align-items: center;

  width: 100%;
  height: 100%;
`,v=c.default.div.withConfig({componentId:"zh__sc-2fa5d58c-6"})`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;

  width: 20px;
  height: 20px; /* size-20 */
`,_=(0,c.default)(v).withConfig({componentId:"zh__sc-2fa5d58c-7"})``,C=c.default.div.withConfig({componentId:"zh__sc-2fa5d58c-8"})`
  flex: 1 0 0;

  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: 20px;
  color: ${({$active:e})=>e?"#4F39F6":"#45464E"};
`,z=c.default.div.withConfig({componentId:"zh__sc-2fa5d58c-9"})`
  position: relative;
  flex-shrink: 0;
  align-self: stretch;
`,I=c.default.div.withConfig({componentId:"zh__sc-2fa5d58c-10"})`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
  height: 100%;
`,k=c.default.div.withConfig({componentId:"zh__sc-2fa5d58c-11"})`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  align-items: flex-start;
  justify-content: center;

  width: 100%;
  height: 32px;
  padding: 0 8px 0 44px;
  border-radius: 8px;
`,E=c.default.div.withConfig({componentId:"zh__sc-2fa5d58c-12"})`
  flex-shrink: 0;
  width: 100%;
  height: 24px;
`,T=c.default.div.withConfig({componentId:"zh__sc-2fa5d58c-13"})`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
`,S=c.default.div.withConfig({componentId:"zh__sc-2fa5d58c-14"})`
  display: flex;
  flex: 1 0 0;
  gap: 10px;
  align-items: center;

  min-width: 1px;
  height: 100%;
`,$=c.default.div.withConfig({componentId:"zh__sc-2fa5d58c-15"})`
  overflow: hidden;
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  min-width: 1px;
  height: 100%;
  padding: 1px 0;
`,O=c.default.div.withConfig({componentId:"zh__sc-2fa5d58c-16"})`
  flex-shrink: 0;

  width: 100%;

  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  line-height: 20px;
  color: ${({$active:e})=>e?"#4F39F6":"#45464E"};
`;e.s(["default",0,function(){let e=h((0,i.usePathname)()),o=f.default.routes,[a,d]=(0,l.useState)(()=>Object.fromEntries(o.map((t,n)=>[n,t.children?.some(n=>{let i=x(t.subpath,n);return!!i&&u(e,i)})??!1])));return(0,t.jsx)(g,{children:o.map((i,l)=>{if(0===l)return null;let o=i.children??[],c=o.length>0,f=o.some(t=>{let n=x(i.subpath,t);return!!n&&u(e,n)}),h=u(e,i.subpath)||f,g=f||(a[l]??!1);return(0,t.jsxs)(m,{children:[(0,t.jsx)(b,{$active:h,$clickable:!!(i.hasPage||c),as:i.hasPage?n.default:"div",href:i.hasPage?i.subpath:void 0,onClick:c?()=>{d(e=>({...e,[l]:!g}))}:void 0,children:(0,t.jsx)(w,{children:(0,t.jsx)(y,{children:(0,t.jsxs)(j,{children:[(0,t.jsx)(v,{children:i.icon?(0,t.jsx)(i.icon,{size:16,color:h?"#4F39F6":"#6E7079"}):null}),(0,t.jsx)(C,{$active:h,children:`${l}. ${i.label}`}),c?(0,t.jsx)(_,{children:g?(0,t.jsx)(s,{size:16,color:"#6E7079"}):(0,t.jsx)(r,{size:16,color:"#6E7079"})}):null]})})})}),c&&g?(0,t.jsx)(z,{children:(0,t.jsx)(I,{children:o.map((o,a)=>{let r=p(i.subpath,o.subpath),d=x(i.subpath,o),s=!!d&&u(e,d);return(0,t.jsx)(k,{as:o.hasPage?n.default:"div",href:o.hasPage&&r||void 0,children:(0,t.jsx)(E,{children:(0,t.jsx)(T,{children:(0,t.jsx)(S,{children:(0,t.jsx)($,{children:(0,t.jsx)(O,{$active:s,children:`${l}-${a+1}. ${o.label}`})})})})})},`${i.subpath}-${o.subpath}`)})})}):null]},i.subpath)})})}],44997)},57738,e=>{"use strict";var t=e.i(9735);e.i(3159);var n=e.i(46907),i=e.i(20276),l=e.i(8179),o=e.i(22803),a=e.i(9454),r=e.i(43174);let d=(0,n.observer)(function(){let{items:e,remove:n}=r.default.ui.layout.toast,o=new Map;e.forEach(e=>{let t=o.get(e.container)??[];t.push(e),o.set(e.container,t)});let a=Array.from(o.entries()).map(([e,t])=>({container:e,items:t}));return(0,t.jsx)(t.Fragment,{children:a.map(({container:e,items:o})=>{let a=(0,t.jsx)(c,{$isFixed:null===e,children:o.map(e=>(0,t.jsxs)(f,{$type:e.type,role:"status","aria-live":"polite",children:[(0,t.jsx)(h,{children:e.message}),(0,t.jsx)(u,{type:"button",onClick:()=>n(e.id),"aria-label":"토스트 닫기",children:(0,t.jsx)(l.X,{size:14})})]},e.id))});return null===e?(0,t.jsx)(s,{children:a},"fallback-container"):(0,i.createPortal)(a,e,`toast-container-${o[0]?.id??"default"}`)})})}),s=o.default.div.withConfig({componentId:"zh__sc-7dcaecab-0"})`
  position: relative;
`,c=o.default.div.withConfig({componentId:"zh__sc-7dcaecab-1"})`
  pointer-events: none;

  position: ${({$isFixed:e})=>e?"fixed":"absolute"};
  z-index: ${a.default.style.numeric.Z_INDEX.TOAST};
  top: ${({$isFixed:e})=>e?"96px":"32px"};
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  flex-direction: column;
  gap: 8px;

  max-width: min(
    420px,
    ${({$isFixed:e})=>e?"calc(100vw - 32px)":"calc(100% - 32px)"}
  );
`,f=o.default.div.withConfig({componentId:"zh__sc-7dcaecab-2"})`
  pointer-events: auto;

  display: flex;
  gap: 10px;
  align-items: flex-start;

  padding: 10px 12px;
  border: 1px solid
    ${({$type:e})=>"success"===e?"#86efac":"error"===e?"#fca5a5":"#93c5fd"};
  border-radius: 8px;

  color: #0f172a;

  background: ${({$type:e})=>"success"===e?"#f0fdf4":"error"===e?"#fef2f2":"#eff6ff"};
  box-shadow: 0 6px 16px rgb(15 23 42 / 12%);
`,h=o.default.p.withConfig({componentId:"zh__sc-7dcaecab-3"})`
  flex: 1;

  margin: 0;

  font-size: 16px;
  font-weight: 700;
  line-height: 1.4;
  overflow-wrap: anywhere;
`,u=o.default.button.withConfig({componentId:"zh__sc-7dcaecab-4"})`
  cursor: pointer;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 22px;
  height: 22px;
  margin: -2px -2px 0 0;
  border: 0;
  border-radius: 4px;

  color: #475569;

  background: transparent;

  &:hover {
    color: #0f172a;
    background: rgb(15 23 42 / 6%);
  }
`;e.s(["default",0,d])},16342,e=>{"use strict";var t=e.i(7744),n=e.i(43174);let i=e=>Array.from(e.dataTransfer?.types??[]).includes("Files");e.s(["default",0,function(){let[e,l]=(0,t.useState)(!1),o=(0,t.useRef)(0),{setIsWindowFileDragging:a}=n.default.ui.layout;return(0,t.useEffect)(()=>{let e=e=>{i(e)&&(o.current+=1,l(!0))},t=e=>{i(e)&&(o.current=Math.max(0,o.current-1),0===o.current&&l(!1))},n=e=>{i(e)&&e.preventDefault()},a=e=>{i(e)&&(e.preventDefault(),o.current=0,l(!1))};return window.addEventListener("dragenter",e),window.addEventListener("dragleave",t),window.addEventListener("dragover",n),window.addEventListener("drop",a),()=>{window.removeEventListener("dragenter",e),window.removeEventListener("dragleave",t),window.removeEventListener("dragover",n),window.removeEventListener("drop",a)}},[]),(0,t.useEffect)(()=>(a(e),()=>{a(!1)}),[e,a]),null}])}]);