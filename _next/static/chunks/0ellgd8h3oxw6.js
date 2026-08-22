(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,48271,e=>{"use strict";var t=e.i(9735);e.i(3159);var n=e.i(46907),i=e.i(7744),l=e.i(43174),a=e.i(7665),d=e.i(4153);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var r=(0,i.forwardRef)(function(e,t){var n=e.color,l=e.size,a=void 0===l?24:l,d=function(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["color","size"]);return i.default.createElement("svg",o({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),i.default.createElement("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),i.default.createElement("circle",{cx:"12",cy:"12",r:"3"}))});function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}r.propTypes={color:d.default.string,size:d.default.oneOfType([d.default.string,d.default.number])},r.displayName="Eye";var c=(0,i.forwardRef)(function(e,t){var n=e.color,l=e.size,a=void 0===l?24:l,d=function(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["color","size"]);return i.default.createElement("svg",s({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),i.default.createElement("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"}),i.default.createElement("line",{x1:"1",y1:"1",x2:"23",y2:"23"}))});c.propTypes={color:d.default.string,size:d.default.oneOfType([d.default.string,d.default.number])},c.displayName="EyeOff";var f=e.i(38803),h=e.i(25521);let p=(0,n.observer)(function(){let{loginId:e,setLoginId:n,loginIdErrMsg:d,password:o,setPassword:s,isShowPwd:f,setIsShowPwd:p,pwdErrMsg:T,login:E}=l.default.auth.login,[k,S]=(0,i.useState)(!1),O=(0,i.useRef)(null),A=(0,i.useRef)(!1),$=(0,i.useRef)(null),D=(0,i.useRef)(null),L=e=>{let t=e.getModifierState("CapsLock");t!==A.current&&(A.current=t,t&&l.default.ui.layout.toast.info("Caps Lock이 켜져 있습니다.",void 0,O.current))};return(0,i.useEffect)(()=>{$.current?.focus()},[]),(0,t.jsx)(u,{children:(0,t.jsxs)(x,{ref:O,children:[(0,t.jsxs)(g,{children:[(0,t.jsx)(a.default,{src:`${h.default.env.PUBLIC_PATH}/icon/logo-symbol.svg`,width:1,height:1,style:{width:85,height:"auto"},loading:"eager",alt:"Logo"}),(0,t.jsxs)(m,{children:[(0,t.jsx)(b,{children:"자이언 허브"}),(0,t.jsx)(j,{children:"기관용"})]})]}),(0,t.jsxs)(w,{children:[(0,t.jsxs)(y,{$error:null!==d,$hasValue:e.length>0,children:[(0,t.jsx)(_,{$error:null!==d,children:"아이디"}),(0,t.jsx)(v,{ref:$,value:e,onChange:e=>n(e.target.value),placeholder:"영문 아이디"})]}),null!==d?(0,t.jsx)(I,{children:d}):null,(0,t.jsxs)(y,{$error:null!==T,$hasValue:o.length>0,children:[(0,t.jsx)(_,{$error:null!==T,children:"비밀번호"}),(0,t.jsx)(v,{ref:D,type:f?"text":"password",value:o,onChange:e=>s(e.target.value),onFocus:()=>S(!0),onBlur:()=>{S(!1),A.current=!1},onKeyDown:e=>{L(e),"Enter"===e.key&&E()},onKeyUp:e=>{L(e)},placeholder:"영문,숫자,특수문자"}),(0,t.jsx)(C,{type:"button",$active:k,$error:null!==T,onClick:()=>p(!f),onFocus:()=>S(!0),onBlur:()=>S(!1),children:f?(0,t.jsx)(r,{size:24}):(0,t.jsx)(c,{size:24})})]}),null!==T?(0,t.jsx)(I,{children:T}):null,(0,t.jsx)(z,{type:"button",onClick:()=>void E(),children:"로그인"})]})]})})}),u=f.default.main.withConfig({componentId:"zh__sc-9eaa5006-0"})`
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
`,j=f.default.span.withConfig({componentId:"zh__sc-9eaa5006-5"})`
  color: #4f39f6;
`,w=f.default.div.withConfig({componentId:"zh__sc-9eaa5006-6"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,_=f.default.span.withConfig({componentId:"zh__sc-9eaa5006-7"})`
  flex-shrink: 0;

  width: 105px;

  font-size: 20px;
  font-weight: 500;
  line-height: 1;
  color: ${({$error:e})=>!0===e?"#ff3b6b":"#6e7079"};
`,y=f.default.div.withConfig({componentId:"zh__sc-9eaa5006-8"})`
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

  &:focus-within ${_} {
    color: #4f39f6;
  }
`,v=f.default.input.withConfig({componentId:"zh__sc-9eaa5006-9"})`
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
`,I=f.default.div.withConfig({componentId:"zh__sc-9eaa5006-11"})`
  font-size: 12px;
  color: #ff3b6b;
`,z=f.default.button.withConfig({componentId:"zh__sc-9eaa5006-12"})`
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
`,T=(0,n.observer)(({children:e})=>{let{isAuthed:n}=l.default.auth,[a,d]=(0,i.useState)(!0);return((0,i.useEffect)(()=>{let e=!0;return(async()=>{await l.default.auth.restoreSession(),e&&d(!1)})(),()=>{e=!1}},[]),a)?null:(0,t.jsx)(t.Fragment,{children:n?e:(0,t.jsx)(p,{})})});e.s(["default",0,T],48271)},47753,e=>{"use strict";var t=e.i(9735),n=e.i(7744),i=e.i(38803),l=e.i(43174);let a=i.default.div.withConfig({componentId:"zh__sc-914b0b37-0"})`
  position: relative;

  display: flex;

  width: 100%;
  min-height: 100vh;

  background-color: #f9fafb;
`;e.s(["default",0,function({children:e}){let i=(0,n.useRef)(null);return(0,n.useEffect)(()=>(l.default.ui.layout.setAppContainer(i.current),()=>{l.default.ui.layout.setAppContainer(null)}),[]),(0,t.jsx)(a,{ref:i,children:e})}])},69477,e=>{"use strict";var t=e.i(7744),n=e.i(4153);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var l=(0,t.forwardRef)(function(e,n){var l=e.color,a=e.size,d=void 0===a?24:a,o=function(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["color","size"]);return t.default.createElement("svg",i({ref:n,xmlns:"http://www.w3.org/2000/svg",width:d,height:d,viewBox:"0 0 24 24",fill:"none",stroke:void 0===l?"currentColor":l,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),t.default.createElement("polyline",{points:"23 4 23 10 17 10"}),t.default.createElement("path",{d:"M20.49 15a9 9 0 1 1-2.12-9.36L23 10"}))});l.propTypes={color:n.default.string,size:n.default.oneOfType([n.default.string,n.default.number])},l.displayName="RotateCw",e.s(["RotateCw",0,l],69477)},73060,e=>{"use strict";var t=e.i(9735);e.i(3159);var n=e.i(46907),i=e.i(7744),l=e.i(15695),a=e.i(69477),d=e.i(4153);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var r=(0,i.forwardRef)(function(e,t){var n=e.color,l=e.size,a=void 0===l?24:l,d=function(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["color","size"]);return i.default.createElement("svg",o({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),i.default.createElement("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),i.default.createElement("circle",{cx:"12",cy:"7",r:"4"}))});r.propTypes={color:d.default.string,size:d.default.oneOfType([d.default.string,d.default.number])},r.displayName="User";var s=e.i(38803),c=e.i(64954),f=e.i(43174);let h=(0,n.observer)(function(){let{oldestSyncedAt:e,refetchAll:n}=f.default.ui.layout.header,{meNameWithPosition:d,logout:o}=f.default.auth,[s,c]=(0,i.useState)(()=>new Date),[h,y]=(0,i.useState)("idle"),v=(()=>{if(null===e)return null;let t=Math.max(0,Math.floor((s.getTime()-e.getTime())/1e3/60)),n=Math.floor(t/60);return t<60?`오늘 ${t}분 전 최신정보`:`오늘 ${n}시간 전 최신정보`})();(0,i.useEffect)(()=>{if(null===e)return;let t=window.setInterval(()=>{c(new Date)},6e4);return()=>{window.clearInterval(t)}},[e]),(0,i.useEffect)(()=>{if("completed"!==h)return;let e=window.setTimeout(()=>{y("idle")},2e3);return()=>{window.clearTimeout(e)}},[h]);let C=async()=>{y("loading");try{await n(),y("completed")}catch{y("idle")}},I=(()=>{switch(h){case"idle":default:return null;case"loading":return(0,t.jsx)(a.RotateCw,{size:15});case"completed":return(0,t.jsx)(l.Check,{size:20})}})(),z=(()=>{switch(h){case"idle":default:return"최신 정보로 업데이트하기";case"loading":return"업데이트 중";case"completed":return"업데이트 완료"}})(),T=null===e||"idle"!==h;return(0,t.jsxs)(p,{children:[(0,t.jsxs)(u,{children:[null===v?null:(0,t.jsx)(x,{children:v}),(0,t.jsxs)(g,{$status:"loading"===h?"processing":"completed"===h?"success":void 0,onClick:T?void 0:()=>void C(),disabled:T,children:[I,z]})]}),(0,t.jsxs)(m,{children:[null===d?null:(0,t.jsxs)(b,{children:[(0,t.jsx)(j,{children:(0,t.jsx)(r,{size:20,color:"#ff6900"})}),(0,t.jsx)(w,{children:d})]}),(0,t.jsx)(_,{onClick:()=>{o()},children:"로그아웃"})]})]})}),p=s.default.div.withConfig({componentId:"zh__sc-bc883191-0"})`
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
`,u=s.default.div.withConfig({componentId:"zh__sc-bc883191-1"})`
  display: flex;
  gap: 12px;
  align-items: center;
  height: 36px;
`,x=s.default.div.withConfig({componentId:"zh__sc-bc883191-2"})`
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px;
  color: #4a5565;
  letter-spacing: -0.076px;
`,g=(0,s.default)(c.default.Button.Outlined).withConfig({componentId:"zh__sc-bc883191-3"})`
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
`,m=s.default.div.withConfig({componentId:"zh__sc-bc883191-4"})`
  display: flex;
  gap: 16px;
  align-items: center;
`,b=s.default.div.withConfig({componentId:"zh__sc-bc883191-5"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,j=s.default.div.withConfig({componentId:"zh__sc-bc883191-6"})`
  display: flex;
  align-items: center;
  justify-content: center;

  aspect-ratio: 1/1;
  width: 32px;
  height: 32px;
  padding: 0 6px;
  border-radius: 999px;

  background: #fff4ed;
`,w=s.default.div.withConfig({componentId:"zh__sc-bc883191-7"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: 20px;
  color: #1c1d22;
`,_=(0,s.default)(c.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-bc883191-8"})`
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
`;e.s(["default",0,h],73060)},79109,e=>{"use strict";var t=e.i(9735);e.i(3159);var n=e.i(46907),i=e.i(7744),l=e.i(43174),a=e.i(26170);let d=(0,n.observer)(function(){let{isLoading:e}=l.default.api,[n,d]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{if(!e)return;let t=window.setTimeout(()=>{d(!0)},300);return()=>{d(!1),window.clearTimeout(t)}},[e]),e&&n?(0,t.jsx)(a.default,{isLoading:!0,children:null}):null});e.s(["default",0,d])},55357,e=>{"use strict";var t=e.i(9735);e.i(3159);var n=e.i(46907),i=e.i(7744),l=e.i(38803),a=e.i(43174),d=e.i(26170),o=e.i(15695),r=e.i(64954);let s=(0,n.observer)(function(){let{clientDraft:e,isSaving:n,resetToUploadStep:i,saveClientDraft:l}=a.default.modal.clientCreate,{resetSort:d,setCurrentServiceType:r,setHighlightedClientId:s}=a.default.client.info.byClient,f=async()=>{let t=e?.serviceType,n=await l();if(null===n)return;let i=n.serviceType??t??null;null!==i&&(r(i),d(),a.default.data.client.list.setQuery({serviceType:i}),await a.default.data.client.list.refetch()),"string"==typeof n.clientId&&n.clientId.length>0&&s(n.clientId)};return(0,t.jsxs)(c,{children:[(0,t.jsx)(h,{disabled:!e||n,onClick:i,children:"다시 업로드하기"}),(0,t.jsxs)(p,{disabled:!e||n,onClick:()=>void f(),children:[(0,t.jsx)(o.Check,{size:16}),"최종확인 및 저장"]})]})}),c=l.default.div.withConfig({componentId:"zh__sc-759c17e6-0"})`
  display: flex;
  gap: 16px;
  align-items: center;
  align-self: stretch;
  justify-content: flex-end;

  padding: 16px;
  border-top: 1px solid #e5e7eb;
`,f=l.css`
  display: flex;
  gap: 10px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,h=(0,l.default)(r.default.Button.Outlined).withConfig({componentId:"zh__sc-759c17e6-1"})`
  ${f}
`,p=(0,l.default)(r.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-759c17e6-2"})`
  ${f}
`,u=(0,n.observer)(function(){let e=a.default.modal.clientCreate;return!0!==e.isContractPeriodOverlapDialogOpen?null:(0,t.jsx)(x,{children:(0,t.jsxs)(g,{children:[(0,t.jsxs)(m,{children:[(0,t.jsx)(b,{children:"계약기간이 중복되어 등록할 수 없습니다."}),(0,t.jsxs)(j,{children:["동일한 이름과 주민등록번호로 등록된 이용자의 계약•서비스 기간 중 겹치는 기간이 있습니다.",(0,t.jsx)("br",{}),"계약•서비스 기간이 겹치지 않도록 수정한 후 다시 등록해주세요."]})]}),(0,t.jsxs)(w,{children:[(0,t.jsx)(_,{type:"button",onClick:e.cancelContractPeriodOverlapRegistration,children:"등록 취소하기"}),(0,t.jsx)(y,{type:"button",onClick:e.closeContractPeriodOverlapDialog,children:"계약/서비스 기간 수정하기"})]})]})})}),x=l.default.div.withConfig({componentId:"zh__sc-79ae8371-0"})`
  position: fixed;
  z-index: 3100;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgb(17 24 39 / 36%);
`,g=l.default.div.withConfig({componentId:"zh__sc-79ae8371-1"})`
  display: inline-flex;
  flex-direction: column;
  gap: 48px;
  align-items: center;
  justify-content: center;

  padding: 32px 24px;
  border: 1px solid #e5e9ef;
  border-radius: 8px;

  background: #fff;
  box-shadow: 0 4px 4px 0 rgb(0 0 0 / 10%);
`,m=l.default.div.withConfig({componentId:"zh__sc-79ae8371-2"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;
`,b=l.default.h3.withConfig({componentId:"zh__sc-79ae8371-3"})`
  align-self: stretch;

  margin: 0;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px;
  color: #000;
`,j=l.default.p.withConfig({componentId:"zh__sc-79ae8371-4"})`
  margin: 0;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px;
  color: #000;
`,w=l.default.div.withConfig({componentId:"zh__sc-79ae8371-5"})`
  display: flex;
  gap: 12px;
  align-self: stretch;
  justify-content: flex-end;
`,_=(0,l.default)(r.default.Button.Outlined).withConfig({componentId:"zh__sc-79ae8371-6"})`
  display: flex;
  gap: 10px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,y=(0,l.default)(r.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-79ae8371-7"})`
  display: flex;
  gap: 10px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`;var v=e.i(74515),C=e.i(4153);function I(){return(I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var z=(0,i.forwardRef)(function(e,t){var n=e.color,l=e.size,a=void 0===l?24:l,d=function(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["color","size"]);return i.default.createElement("svg",I({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),i.default.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),i.default.createElement("polyline",{points:"12 5 19 12 12 19"}))});z.propTypes={color:C.default.string,size:C.default.oneOfType([C.default.string,C.default.number])},z.displayName="ArrowRight";let T=(0,n.observer)(function(){let{analyzeSelectedFile:e,isAnalyzing:n,selectedFile:i}=a.default.modal.clientCreate;return(0,t.jsx)(E,{children:(0,t.jsxs)(k,{disabled:null===i||n,onClick:()=>{e()},children:["분석 시작",(0,t.jsx)(z,{size:16})]})})}),E=l.default.div.withConfig({componentId:"zh__sc-d7f6cfb5-0"})`
  display: flex;
  gap: 10px;
  align-self: stretch;
  justify-content: flex-end;
`,k=(0,l.default)(r.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-d7f6cfb5-1"})`
  display: flex;
  flex-shrink: 0;
  gap: 10px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`;var S=e.i(8179),O=e.i(98273),A=e.i(25521);let{FILE_EXTENSION_WHITELIST_BY_GROUP:$}=A.default.file,D=(0,n.observer)(function(){var e;let n,{clearSelectedFile:i,selectedFile:l,isAnalyzing:d}=a.default.modal.clientCreate;if(null===l)return null;let o=-1===(n=(e=l.name).lastIndexOf("."))?"":e.slice(n).toLowerCase();return(0,t.jsx)(L,{children:(0,t.jsxs)(R,{children:[(0,t.jsxs)(N,{children:[(0,t.jsx)(P,{children:$.IMAGE.some(e=>e===o)?(0,t.jsx)(O.default.Photo,{size:17,color:"#FA8E43"}):$.AUDIO.some(e=>e===o)?(0,t.jsx)(O.default.SpeechToText,{size:17,color:"#A855F7"}):$.DOCUMENT.some(e=>e===o)?(0,t.jsx)(O.default.News,{size:17,color:"#2264E8"}):null}),(0,t.jsx)(F,{children:(0,t.jsx)(M,{children:l.name})})]}),(0,t.jsxs)(B,{onClick:i,disabled:d,children:["삭제",(0,t.jsx)(S.X,{size:16})]})]},`${l.name}-${l.size}-${l.lastModified}`)})}),L=l.default.div.withConfig({componentId:"zh__sc-8227d071-0"})`
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
`,R=l.default.div.withConfig({componentId:"zh__sc-8227d071-1"})`
  display: flex;
  flex-shrink: 0;
  gap: 24px;
  align-items: center;

  padding: 12px 16px;
  border-radius: 8px;

  background: #f6f8fb;
`,N=l.default.div.withConfig({componentId:"zh__sc-8227d071-2"})`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`,P=l.default.div.withConfig({componentId:"zh__sc-8227d071-3"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;
  border-radius: 4px;

  background: #fff;
`,F=l.default.div.withConfig({componentId:"zh__sc-8227d071-4"})`
  display: flex;
  align-items: center;
  align-self: stretch;

  width: 196px;
  height: 40px;

  color: #0a0a0a;
`,M=l.default.div.withConfig({componentId:"zh__sc-8227d071-5"})`
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #0a0a0a;
`,B=l.default.button.withConfig({componentId:"zh__sc-8227d071-6"})`
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
`;var U=e.i(24045),W=e.i(9454);function V(){let[e,n]=(0,i.useState)(0);return(0,i.useEffect)(()=>{let e=performance.now(),t=0,i=l=>{n(Math.min(100*(1-Math.exp(-((l-e)/1e3*.05))),98)),t=window.requestAnimationFrame(i)};return t=window.requestAnimationFrame(i),()=>{window.cancelAnimationFrame(t)}},[]),(0,t.jsx)(Y,{children:(0,t.jsx)(H,{$progress:e})})}let Y=l.default.div.withConfig({componentId:"zh__sc-aa649b54-0"})`
  overflow: hidden;
  display: flex;

  width: 362px;
  height: ${8}px;
  border-radius: 99px;

  background: #e6e0ff;
  background-color: #e5e2ff;
`,H=l.default.div.attrs(({$progress:e})=>({style:{transform:`scaleX(${e/100})`}})).withConfig({componentId:"zh__sc-aa649b54-1"})`
  transform-origin: left center;
  width: 100%;
  height: 100%;
  background-color: #5635ff;
`,G=(0,n.observer)(function(){let{isWindowFileDragging:e}=a.default.ui.layout,{selectedFile:n,isError:i,isAnalyzing:l,abortAnalyze:d}=a.default.modal.clientCreate,o=i?"지원하지 않는 파일 형식입니다.":e?"파일을 여기에 놓으면 업로드 됩니다.":l?"업로드한 파일을 분석하고 있습니다.":"이곳에 파일을 끌어다 놓거나 (드래그 앤 드롭), 클릭하여 업로드하세요.",r=null===n||l?"지원 파일 형식: 사진 이미지, 서류, 음성 녹음":"새 파일을 업로드하면 기존 파일이 교체됩니다.";return(0,t.jsxs)(X,{children:[null===n&&!i&&(0,t.jsx)(q,{children:(0,t.jsx)(U.Upload,{size:26,color:K[100]})}),(0,t.jsxs)(Q,{children:[(0,t.jsx)(J,{$isError:i,children:o}),(0,t.jsx)(Z,{children:r})]}),l&&(0,t.jsx)(V,{}),l&&(0,t.jsx)(ee,{onClick:d,children:"중단하기"})]})}),{PRIMARY:K}=W.default.style.color,X=l.default.div.withConfig({componentId:"zh__sc-47e9a3b3-0"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  align-self: stretch;
  justify-content: center;
`,q=l.default.div.withConfig({componentId:"zh__sc-47e9a3b3-1"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;
`,Q=l.default.div.withConfig({componentId:"zh__sc-47e9a3b3-2"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  align-self: stretch;
  justify-content: center;
`,J=l.default.div.withConfig({componentId:"zh__sc-47e9a3b3-3"})`
  font-size: 14px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 142.857% */
  color: ${({$isError:e})=>e?"#ff4d4f":"#4f39f6"};
  text-align: center;
`,Z=l.default.div.withConfig({componentId:"zh__sc-47e9a3b3-4"})`
  font-size: 14px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 142.857% */
  color: #99a1af;
`,ee=(0,l.default)(r.default.Button.Outlined).withConfig({componentId:"zh__sc-47e9a3b3-5"})`
  display: flex;
  gap: 10px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,et=(0,n.observer)(function(){let{isWindowFileDragging:e}=a.default.ui.layout,{acceptFileTypes:n,setSelectedFile:l,selectedFile:d,isError:o}=a.default.modal.clientCreate,r=(0,i.useRef)(null);return(0,v.default)(e=>{if(0===e.length)return;let t=e[0];void 0!==t&&l(t)}),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(en,{ref:r,type:"file",accept:n,onChange:e=>{let t=Array.from(e.target.files??[]);if(0===t.length)return;let n=t[0];void 0!==n&&(l(n),e.target.value="")}}),(0,t.jsxs)(ei,{$isWindowFileDragging:e,onDragOver:e=>{e.preventDefault()},onDrop:e=>{e.preventDefault();let t=Array.from(e.dataTransfer.files);if(0===t.length)return;let n=t[0];void 0!==n&&l(n)},onClick:e=>{e.target instanceof HTMLElement&&(e.target.closest("button")||r.current?.click())},$isError:o,children:[null!==d&&(0,t.jsx)(D,{}),(0,t.jsx)(G,{}),(0,t.jsx)(T,{})]})]})}),en=l.default.input.withConfig({componentId:"zh__sc-35541df3-0"})`
  display: none;
`,ei=l.default.div.withConfig({componentId:"zh__sc-35541df3-1"})`
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
`,el=(0,n.observer)(function(){let{analyzedFile:e,mode:n}=a.default.modal.clientCreate;return(0,t.jsxs)(ea,{$flex1:null===e,children:[null===e&&(0,t.jsx)(ed,{children:"renew"===n?"새로운 전자바우처 캡쳐 화면을 아래에 업로드하고, 다음 버튼을 클릭하세요.":"전자바우처 캡쳐 화면을 아래에 업로드하고, 다음 버튼을 클릭하세요."}),(0,t.jsx)(et,{})]})}),ea=l.default.div.withConfig({componentId:"zh__sc-8fa7e82c-0"})`
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
`,ed=l.default.div.withConfig({componentId:"zh__sc-8fa7e82c-1"})`
  font-size: 18px;
  font-weight: 700;
  font-style: normal;
  line-height: 24px; /* 133.333% */
  color: #101828;
`,eo="border-highlight-style-tag",er="border-highlight-sweep",es="--border-highlight-sweep",ec=`
  linear-gradient(transparent, transparent) padding-box,
  conic-gradient(
    from -90deg,
    #fff 0deg,
    #ede9fe 8deg,
    #a78bfa 22deg,
    #7c3aed calc(var(${es}) * 0.28),
    #4f39f6 calc(var(${es}) * 0.45),
    #818cf8 calc(var(${es}) * 0.65),
    #a78bfa calc(var(${es}) * 0.8),
    #ddd6fe calc(var(${es}) * 0.93),
    #fff var(${es}),
    #fff 360deg
  ) border-box
`,ef=function(){let e=(0,i.useRef)(null),t=(0,i.useRef)(null),n=(0,i.useRef)(null),l=(0,i.useRef)(null),a=(0,i.useRef)(null),d=(0,i.useRef)(null),o=(0,i.useRef)(null),r=(0,i.useCallback)(()=>{null!==l.current&&(window.clearTimeout(l.current),l.current=null),null!==a.current&&(window.cancelAnimationFrame(a.current),a.current=null)},[]),s=(0,i.useCallback)(()=>{let i=e.current,l=t.current,a=n.current;null!==i&&null!==l&&null!==a&&(l.style.top=`${i.offsetTop-1}px`,l.style.left=`${i.offsetLeft-1}px`,l.style.width=`${i.offsetWidth+2}px`,l.style.height=`${i.offsetHeight+2}px`,l.style.borderRadius=window.getComputedStyle(i).borderRadius)},[]),c=(0,i.useCallback)(()=>{let i=e.current;if(null===i)return null;(()=>{if("u"<typeof document||null!==document.getElementById(eo))return;let e=document.createElement("style");e.id=eo,e.textContent=`
    @property ${es} {
      inherits: false;
      initial-value: 0deg;
      syntax: '<angle>';
    }

    @keyframes ${er} {
      from {
        ${es}: 0deg;
      }

      to {
        ${es}: 360deg;
      }
    }
  `,document.head.append(e)})();let l=i.parentElement;if(null===l)return null;if(n.current=l,null===d.current&&(d.current={position:i.style.position,zIndex:i.style.zIndex}),null===o.current&&(o.current=l.style.position),"static"===window.getComputedStyle(l).position&&(l.style.position="relative"),""===i.style.position&&(i.style.position="relative"),""===i.style.zIndex&&(i.style.zIndex="1"),null===t.current){let e=document.createElement("div");e.style.pointerEvents="none",e.style.position="absolute",e.style.zIndex="0",e.style.boxSizing="border-box",e.style.border="1px solid transparent",e.style.background="none",l.append(e),t.current=e}return s(),t.current},[s]),f=(0,i.useCallback)(()=>{let e=c();null===e||window.matchMedia("(prefers-reduced-motion: reduce)").matches||(r(),e.style.animation="none",e.style.background=ec,e.style.setProperty(es,"0deg"),e.offsetWidth,a.current=window.requestAnimationFrame(()=>{s(),e.style.animation=`${er} 600ms ease-in-out forwards`,a.current=null,l.current=window.setTimeout(()=>{e.style.animation="",e.style.background="none",l.current=null},600)}))},[r,c,s]);return(0,i.useEffect)(()=>{let i=e.current,l=n.current,a=t.current,s=d.current,c=o.current;return()=>{r(),null!==a&&(a.style.animation="",a.style.background="none"),a?.remove(),null!==i&&null!==s&&(i.style.position=s.position,i.style.zIndex=s.zIndex),null!==l&&null!==c&&(l.style.position=c)}},[r]),{ref:e,fire:f}},{FILE_EXTENSION_WHITELIST_BY_GROUP:eh}=A.default.file,ep=(0,n.observer)(function(){var e;let n,{analyzedFile:l}=a.default.modal.clientCreate,{ref:d,fire:o}=ef();if((0,i.useEffect)(()=>{null!==l&&o()},[l,o]),null===l)return null;let r=-1===(n=(e=l.name).lastIndexOf("."))?"":e.slice(n).toLowerCase();return(0,t.jsxs)(eu,{ref:d,children:[(0,t.jsxs)(ex,{children:[(0,t.jsxs)(eg,{children:[(0,t.jsx)(O.default.FindInPage,{size:18}),"AI 문서 인식 완료"]}),(0,t.jsxs)(em,{children:["업로드된 서류들에서 정보를 성공적으로 추출했습니다. ",(0,t.jsx)("br",{}),"우측의 [이용자 기본 정보]가 올바르게 연동되었는지 확인 후, [최종 확인] 버튼을 눌러주세요."]})]}),(0,t.jsxs)(eb,{children:[(0,t.jsxs)(ej,{children:[(0,t.jsx)(O.default.CheckCircle,{size:18}),"분석 완료된 첨부 서류 (1건)"]}),(0,t.jsx)(ew,{children:(0,t.jsxs)(e_,{children:[(0,t.jsxs)(ey,{children:[(0,t.jsx)(ev,{children:eh.IMAGE.some(e=>e===r)?(0,t.jsx)(O.default.Photo,{size:17,color:"#FA8E43"}):eh.AUDIO.some(e=>e===r)?(0,t.jsx)(O.default.SpeechToText,{size:17,color:"#A855F7"}):eh.DOCUMENT.some(e=>e===r)?(0,t.jsx)(O.default.News,{size:17,color:"#2264E8"}):null}),(0,t.jsx)(eC,{children:(0,t.jsx)(eI,{children:l.name})})]}),(0,t.jsx)(ez,{children:"추출 완료"})]},`${l.name}-${l.size}-${l.lastModified}`)})]})]})}),eu=l.default.div.withConfig({componentId:"zh__sc-a40fcee8-0"})`
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
`,ex=l.default.div.withConfig({componentId:"zh__sc-a40fcee8-1"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  align-self: stretch;
`,eg=l.default.div.withConfig({componentId:"zh__sc-a40fcee8-2"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #0a0a0a;
`,em=l.default.div.withConfig({componentId:"zh__sc-a40fcee8-3"})`
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
`,eb=l.default.div.withConfig({componentId:"zh__sc-a40fcee8-4"})`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  align-self: stretch;

  min-height: 0;
`,ej=l.default.div.withConfig({componentId:"zh__sc-a40fcee8-5"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #0a0a0a;
`,ew=l.default.div.withConfig({componentId:"zh__sc-a40fcee8-6"})`
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
`,e_=l.default.div.withConfig({componentId:"zh__sc-a40fcee8-7"})`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 355px;
  height: 64px;
  padding: 12px 16px;
  border-radius: 8px;

  background: #f6f8fb;
`,ey=l.default.div.withConfig({componentId:"zh__sc-a40fcee8-8"})`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`,ev=l.default.div.withConfig({componentId:"zh__sc-a40fcee8-9"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;
  border-radius: 4px;

  background: #fff;
`,eC=l.default.div.withConfig({componentId:"zh__sc-a40fcee8-10"})`
  display: flex;
  align-items: center;
  align-self: stretch;

  width: 196px;
  height: 40px;

  color: #0a0a0a;
`,eI=l.default.div.withConfig({componentId:"zh__sc-a40fcee8-11"})`
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #0a0a0a;
`,ez=l.default.div.withConfig({componentId:"zh__sc-a40fcee8-12"})`
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
`,eT=(0,n.observer)(function(){let{analyzedFile:e}=a.default.modal.clientCreate;return(0,t.jsxs)(eE,{children:[null!==e&&(0,t.jsx)(ep,{}),(0,t.jsx)(el,{})]})}),eE=l.default.div.withConfig({componentId:"zh__sc-a077b87a-0"})`
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
`;var ek=e.i(10957),eS=e.i(21771),eO=e.i(43090);let eA=l.default.div.withConfig({componentId:"zh__sc-1e1c9c9-0"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`,e$=l.default.div.withConfig({componentId:"zh__sc-1e1c9c9-1"})`
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
`,eD=l.default.div.withConfig({componentId:"zh__sc-1e1c9c9-2"})`
  display: flex;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;

  min-height: 59px;
`,eL=l.default.div.withConfig({componentId:"zh__sc-1e1c9c9-3"})`
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
`,eR=l.default.div.withConfig({componentId:"zh__sc-1e1c9c9-4"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #000;
  text-align: center;
`,eN={display:"flex",padding:"4px 16px",alignItems:"center",gap:"10px",flex:"1 0 0",alignSelf:"stretch",fontSize:16},eP=(0,n.observer)(function(){let{clientDraft:e,updateClientDraft:n}=a.default.modal.clientCreate;return null===e?null:(0,t.jsxs)(eA,{children:[(0,t.jsx)(e$,{children:"보호자 정보"}),(0,t.jsxs)(eD,{children:[(0,t.jsxs)(eL,{$width:260,children:[(0,t.jsx)(eR,{children:"보호자명"}),(0,t.jsx)(r.default.Input.Text,{style:eN,value:e.guardianName??"",onChange:e=>{n(t=>({...t,guardianName:e.target.value}))},placeholder:"보호자 성명을 입력하세요."})]}),(0,t.jsxs)(eL,{$width:260,children:[(0,t.jsx)(eR,{children:"보호자 관계"}),(0,t.jsx)(r.default.Input.Text,{style:eN,value:e.guardianRelationship??"",onChange:e=>{n(t=>({...t,guardianRelationship:e.target.value}))},placeholder:"관계를 입력하세요."})]})]}),(0,t.jsxs)(eD,{children:[(0,t.jsxs)(eL,{children:[(0,t.jsx)(eR,{children:"보호자 휴대전화번호"}),(0,t.jsx)(r.default.Input.Text,{style:eN,value:e.guardianPhoneNumber??"",onChange:e=>{n(t=>({...t,guardianPhoneNumber:e.target.value}))},placeholder:"휴대전화번호를 입력해주세요."})]}),(0,t.jsxs)(eL,{children:[(0,t.jsx)(eR,{children:"보호자 자택전화번호"}),(0,t.jsx)(r.default.Input.Contact,{style:eN,value:e.guardianContact??"",onChange:e=>{n(t=>({...t,guardianContact:e}))},placeholder:"자택전화번호를 입력해주세요."})]})]}),(0,t.jsxs)(eL,{children:[(0,t.jsx)(eR,{children:"보호자 주소"}),(0,t.jsx)(r.default.Input.Text,{style:eN,value:e.guardianAddress??"",onChange:e=>{n(t=>({...t,guardianAddress:e.target.value}))},placeholder:"보호자 주소를 입력해주세요."})]})]})}),eF=e=>{let t=e.trim().match(/^(\d{6})-?(\d)(\d{0,6})$/);if(null===t)return"unknown";switch(t[2]){case"1":case"3":return"MALE";case"2":case"4":return"FEMALE";default:return"unknown"}},eM=e=>{switch(e){case"MALE":return"남성";case"FEMALE":return"여성";case"unknown":return""}},eB=e=>{switch(e){case"MEAL":return"식사관리 서비스";case"NUTRITION":return"영양관리 서비스";case"DISABILITY_ACTIVITY_SUPPORT":return"장애인 활동지원"}},eU=(0,n.observer)(function(){let{clientDraft:e,ocrDraft:n,updateClientDraft:i,getClientDraftFieldError:l,clearClientDraftFieldError:d}=a.default.modal.clientCreate;if(null===e)return null;let o=e.clientName??"",s=e.residentRegistrationNumber??"",c=e.businessType??"DAY_CARE",f=e.serviceType??"MEAL",h=e.serviceGrade??ek.default.SELECT_EMPTY_VALUE,p=e.contractStartDate??"",u=e.serviceStartDate??"",x=e.serviceEndDate??"",g=e.note??"",m=e.vehicleFuelCostGuided??!0,b=e.contact??"",j=e.phoneNumber??"",w=e.address??"",_=e.postCode??"",y=e.addressDetail??"",v=(()=>{let e=new Date,[t,n]=eS.default.create(e.getFullYear(),e.getMonth()+1,e.getDate());return null===t?n:null})(),C=eF(s),I=eB(f),z="DISABILITY_ACTIVITY_SUPPORT"===c?"장애인 활동지원":"일상돌봄 서비스",T="DISABILITY_ACTIVITY_SUPPORT"===f?"활동보조":eB(f),E=(e=>{switch(e){case"MEAL":return"500901";case"NUTRITION":return"500401";case"DISABILITY_ACTIVITY_SUPPORT":return"HWG001"}})(f),k=(e,t)=>""===l(e)?t:{...t,borderColor:"#ff4d4f",background:"#fff5f5"},S=e=>{let n=l(e);return""===n?null:(0,t.jsx)(eX,{children:n})},O=(e,t)=>{let n=String(t??"").trim();return""!==n&&String(e).trim()===n},A=(e,t)=>{eS.default.is(e)&&i(n=>t(n,e))};return(0,t.jsxs)(eA,{children:[(0,t.jsx)(e$,{children:"인적사항"}),(0,t.jsxs)(eD,{children:[(0,t.jsxs)(eL,{children:[(0,t.jsxs)(eR,{children:["성명",(0,t.jsx)(eW,{})]}),(0,t.jsx)(r.default.Input.Text,{$autoFilled:O(o,n?.clientName??""),style:k("clientName",eN),value:o,onChange:e=>{d("clientName"),i(t=>({...t,clientName:e.target.value.trim()}))},placeholder:"성명을 입력해주세요."}),S("clientName")]}),(0,t.jsxs)(eL,{children:[(0,t.jsx)(eR,{children:"주민등록번호"}),(0,t.jsx)(r.default.Input.Text,{$autoFilled:O(s,n?.residentRegistrationNumber??""),style:k("residentRegistrationNumber",eN),value:s,onChange:e=>{var t;let n,l=e.target.value,a=e.currentTarget.selectionStart??l.length,o=(l.slice(0,a).match(/\d/g)??[]).length;d("residentRegistrationNumber");let r=eO.default.format(l);i(e=>({...e,residentRegistrationNumber:r})),t=e.currentTarget,n=((e,t)=>{if(t<=0)return 0;let n=0;for(let i=0;i<e.length;i+=1){let l=e[i];if(void 0!==l&&/\d/.test(l)&&(n+=1)===t)return i+1}return e.length})(r,o),"-"===r[n]&&(n+=1),requestAnimationFrame(()=>{document.activeElement===t&&t.setSelectionRange(n,n)})},placeholder:"주민등록번호를 입력해주세요."}),S("residentRegistrationNumber")]}),(0,t.jsxs)(eL,{$width:266,children:[(0,t.jsx)(eR,{children:"성별"}),(0,t.jsx)(eQ,{$autoFilled:O(eM(C),eM(eF(n?.residentRegistrationNumber??""))),style:eN,value:eM(C),placeholder:"주민등록번호와 연동되어 보여집니다.",readOnly:!0})]})]}),(0,t.jsxs)(eD,{children:[(0,t.jsxs)(eL,{children:[(0,t.jsxs)(eR,{children:["휴대전화번호",(0,t.jsx)(eW,{})]}),(0,t.jsx)(r.default.Input.Phone,{$autoFilled:O(j,n?.phoneNumber??""),style:k("phoneNumber",eN),value:j,onChange:e=>{d("phoneNumber"),i(t=>({...t,phoneNumber:e}))},placeholder:"휴대전화번호를 입력해주세요."}),S("phoneNumber")]}),(0,t.jsxs)(eL,{children:[(0,t.jsx)(eR,{children:"자택전화번호"}),(0,t.jsx)(r.default.Input.Contact,{$autoFilled:O(b,n?.contact??""),style:k("contact",eN),value:b,onChange:e=>{d("contact"),i(t=>({...t,contact:e}))},placeholder:"자택전화번호를 입력해주세요."}),S("contact")]})]}),(0,t.jsxs)(eD,{children:[(0,t.jsxs)(eL,{children:[(0,t.jsx)(eR,{children:"주소"}),(0,t.jsx)(r.default.Input.Text,{$autoFilled:O(w,n?.address??""),style:k("address",eN),value:w,onChange:e=>{d("address"),i(t=>({...t,address:e.target.value}))},placeholder:"주소를 입력해주세요."}),S("address")]}),(0,t.jsxs)(eL,{$width:191,children:[(0,t.jsx)(eR,{children:"우편번호"}),(0,t.jsx)(r.default.Input.PostCode,{$autoFilled:O(_,n?.postCode??""),style:k("postCode",eN),value:_,onChange:e=>{d("postCode"),i(t=>({...t,postCode:e}))},placeholder:"우편번호를 입력해주세요."}),S("postCode")]})]}),(0,t.jsx)(eD,{children:(0,t.jsxs)(eL,{children:[(0,t.jsx)(eR,{children:"상세주소"}),(0,t.jsx)(r.default.Input.Text,{$autoFilled:O(y,n?.addressDetail??""),style:k("addressDetail",eN),value:y,onChange:e=>{d("addressDetail"),i(t=>({...t,addressDetail:e.target.value}))},placeholder:"상세주소를 입력해주세요."}),S("addressDetail")]})}),(0,t.jsxs)(eD,{children:[(0,t.jsxs)(eL,{children:[(0,t.jsx)(eR,{children:"특이사항(메모)"}),(0,t.jsx)(r.default.Input.Text,{style:eN,value:g,onChange:e=>{i(t=>({...t,note:e.target.value}))},placeholder:"메모가 필요한 사항을 입력해주세요."})]}),"DISABILITY_ACTIVITY_SUPPORT"===f&&(0,t.jsxs)(eL,{$width:191,children:[(0,t.jsx)(eR,{children:"차량 유류비 안내"}),(0,t.jsxs)(eY,{children:[(0,t.jsxs)(eH,{children:[(0,t.jsx)(eG,{checked:m,onChange:()=>{i(e=>({...e,vehicleFuelCostGuided:!0}))}}),"완료"]}),(0,t.jsxs)(eH,{children:[(0,t.jsx)(eG,{checked:!m,onChange:()=>{i(e=>({...e,vehicleFuelCostGuided:!1}))}}),"미완료"]})]})]})]}),"DISABILITY_ACTIVITY_SUPPORT"===f&&(0,t.jsx)(eP,{}),(0,t.jsxs)(eD,{children:["DISABILITY_ACTIVITY_SUPPORT"===f&&(0,t.jsxs)(eL,{$width:191,children:[(0,t.jsxs)(eR,{children:["접수일",(0,t.jsx)(eW,{})]}),(0,t.jsx)(r.default.Input.Date,{$autoFilled:e.receivedDate===v,style:k("receivedDate",eq),value:e.receivedDate??"",onChange:e=>{d("receivedDate"),A(e,(e,t)=>({...e,receivedDate:t}))}})]}),(0,t.jsxs)(eL,{$width:191,children:[(0,t.jsx)(eR,{children:"계약 시작일"}),(0,t.jsx)(r.default.Input.Date,{$autoFilled:O(p,n?.contractStartDate??""),style:k("contractStartDate",eq),value:p,onChange:e=>{d("contractStartDate"),A(e,(e,t)=>({...e,contractStartDate:t}))}}),S("contractStartDate")]}),(0,t.jsxs)(eL,{$width:191,children:[(0,t.jsx)(eR,{children:"계약 종료일"}),(0,t.jsx)(r.default.Input.Date,{$autoFilled:O(x,n?.serviceEndDate??""),style:eq,value:x,readOnly:!0})]})]}),"DISABILITY_ACTIVITY_SUPPORT"!==f&&(0,t.jsxs)(eD,{children:[(0,t.jsxs)(eL,{$width:191,children:[(0,t.jsx)(eR,{children:"서비스 시작일"}),(0,t.jsx)(r.default.Input.Date,{$autoFilled:O(u,n?.serviceStartDate??""),style:k("serviceStartDate",eq),value:u,onChange:e=>{d("serviceStartDate"),A(e,(e,t)=>{let n=(e=>{let[t,n,i]=e.split("-"),l=new Date(Number(t),Number(n)-1,Number(i));l.setFullYear(l.getFullYear()+1),l.setDate(l.getDate()-1);let[a,d]=eS.default.create(l.getFullYear(),l.getMonth()+1,l.getDate());return null!==a||null===d?null:d})(t);return null===n?e:{...e,serviceStartDate:t,serviceEndDate:n}})}}),S("serviceStartDate")]}),(0,t.jsxs)(eL,{$width:191,children:[(0,t.jsx)(eR,{children:"서비스 종료일"}),(0,t.jsx)(r.default.Input.Date,{$autoFilled:O(x,n?.serviceEndDate??""),style:k("serviceEndDate",eq),value:x,onChange:e=>{d("serviceEndDate"),A(e,(e,t)=>({...e,serviceEndDate:t}))}}),S("serviceEndDate")]})]}),(0,t.jsxs)(eD,{children:[(0,t.jsxs)(eL,{children:[(0,t.jsxs)(eR,{children:["사업구분",(0,t.jsx)(eW,{})]}),(0,t.jsx)(r.default.Input.Select,{style:eN,value:c,disabled:!0,children:(0,t.jsx)("option",{value:c,children:z})})]}),(0,t.jsxs)(eL,{children:[(0,t.jsxs)(eR,{children:["서비스명",(0,t.jsx)(eW,{})]}),(0,t.jsx)(r.default.Input.Select,{style:eN,value:f,disabled:!0,children:(0,t.jsx)("option",{value:f,children:I})})]}),(0,t.jsxs)(eL,{children:[(0,t.jsxs)(eR,{children:["서비스코드",(0,t.jsx)(eW,{})]}),(0,t.jsx)(r.default.Input.Text,{style:eN,value:E,readOnly:!0})]}),(0,t.jsxs)(eL,{children:[(0,t.jsxs)(eR,{children:["서비스유형",(0,t.jsx)(eW,{})]}),(0,t.jsx)(r.default.Input.Select,{style:eN,value:f,disabled:!0,children:(0,t.jsx)("option",{value:f,children:T})})]})]}),"DISABILITY_ACTIVITY_SUPPORT"!==f&&(0,t.jsx)(eD,{children:(0,t.jsxs)(eL,{$width:181,children:[(0,t.jsxs)(eR,{children:["바우처 등급",(0,t.jsx)(eW,{})]}),(0,t.jsxs)(eV,{$isEmptySelected:h===ek.default.SELECT_EMPTY_VALUE,$autoFilled:O(h,n?.serviceGrade??""),style:k("serviceGrade",eN),value:h,onChange:e=>{d("serviceGrade");let t=e.target.value;switch(t){case ek.default.SELECT_EMPTY_VALUE:i(e=>({...e,serviceGrade:void 0}));return;case"1":case"2":case"3":case"4":i(e=>({...e,serviceGrade:t}));return;default:return}},children:[(0,t.jsx)("option",{value:ek.default.SELECT_EMPTY_VALUE,disabled:!0,children:"등급을 선택해주세요."}),(0,t.jsx)("option",{value:"1",children:"1등급"}),(0,t.jsx)("option",{value:"2",children:"2등급"}),(0,t.jsx)("option",{value:"3",children:"3등급"}),(0,t.jsx)("option",{value:"4",children:"4등급"})]}),S("serviceGrade")]})})]})});function eW(){return(0,t.jsx)(eK,{children:" *"})}let eV=(0,l.default)(r.default.Input.Select).withConfig({componentId:"zh__sc-2ea09a12-0"})`
  color: ${({$isEmptySelected:e})=>e?"#9ca3af":"#0a0a0a"};
`,eY=l.default.div.withConfig({componentId:"zh__sc-2ea09a12-1"})`
  display: flex;
  gap: 16px;
  align-items: center;
  height: 36px;
`,eH=l.default.label.withConfig({componentId:"zh__sc-2ea09a12-2"})`
  cursor: pointer;

  display: inline-flex;
  gap: 8px;
  align-items: center;

  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  color: #000;
`,eG=(0,l.default)(r.default.Input.Radio).withConfig({componentId:"zh__sc-2ea09a12-3"})``,eK=l.default.span.withConfig({componentId:"zh__sc-2ea09a12-4"})`
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: normal;
  color: #e7000b;
`,eX=l.default.div.withConfig({componentId:"zh__sc-2ea09a12-5"})`
  position: absolute;
  top: calc(100% + 2px);
  left: 0;

  font-size: 12px;
  line-height: 16px;
  color: #ff4d4f;
`,eq={...eN,height:36,lineHeight:"36px"},eQ=(0,l.default)(r.default.Input.Text).withConfig({componentId:"zh__sc-2ea09a12-6"})`
  &::placeholder {
    color: #0a0a0a;
  }
`;var eJ=e.i(39635),eZ=e.i(58362),e0=e.i(12945),e1=e.i(62150),e2=e.i(41417),e6=e.i(17306);let e4=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15"];var e5=e.i(79786);let e3=["1인가구","취약가구","출산가구","자립준비","학교생활","직장생활","보호자 일시 부재","나머지 가구구성원의 직장생활 등"],e9=["MON","TUE","WED","THU","FRI","SAT","SUN"],e8=[["ministry","보건복지부"],["metropolitan","광역지자체"],["local","기초지자체"],["other","기타"]],e7=new Set(e4),te="SPECIAL";function tt(e){return e in e5.default}let tn=function(){let{clientDraft:e,updateClientDraft:n}=a.default.modal.clientCreate,[l,d]=(0,i.useState)(e?.serviceGrade?.startsWith("SPECIAL")===!0),[o,s]=(0,i.useState)(e?.serviceGrade?.startsWith("SPECIAL")===!0?e.serviceGrade.replace("SPECIAL",""):"");if(null===e)return null;let c=e.serviceGrade??ek.default.SELECT_EMPTY_VALUE,f=l||c.startsWith("SPECIAL"),h=e.incomeCategory??ek.default.SELECT_EMPTY_VALUE,p=e.benefitDecisionPeriod??"",u=e.copaymentAmount??"",x=e.virtualAccountNumber??"",g=e.additionalBenefitTypes??[],m=e.workplace??"",b=e.schoolName??"",j=e.schoolStartTime??"",w=e.schoolEndTime??"",_=e.schoolDays??[],y=e.shortTermCareCenterName??"",v=e.shortTermCareCenterStartTime??"",C=e.shortTermCareCenterEndTime??"",I=e.shortTermCareCenterDays??[],z=e.judgmentTimes??{},T=e.primaryDisabilityName??"",E=e.primaryDisabilityGrade??"",k=e.primaryDisabilitySeverity??"",S=e.secondaryDisabilityName??"",O=e.secondaryDisabilityGrade??"",A=e.secondaryDisabilitySeverity??"",$=e.medicalHistory??"",D=e.medicationInfo??"",L=e.communicationOther??"",R=e.familyOther??"",N=a.default.data.serviceWorker.list,P=N.data??[];return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(eD,{children:[(0,t.jsxs)(eL,{children:[(0,t.jsxs)(eR,{children:["활동지원급여 구간 ",(0,t.jsx)(td,{})]}),(0,t.jsxs)(to,{$isEmptySelected:!f&&c===ek.default.SELECT_EMPTY_VALUE,value:f?te:c,onChange:e=>{let t=e.target.value;if(t===te){d(!0),n(e=>({...e,serviceGrade:void 0}));return}e7.has(t)&&(d(!1),s(""),n(e=>({...e,serviceGrade:t})))},style:eN,children:[(0,t.jsx)("option",{value:ek.default.SELECT_EMPTY_VALUE,disabled:!0,children:"구간을 입력해주세요."}),e4.map(e=>(0,t.jsxs)("option",{value:e,children:[e,"구간"]},e)),(0,t.jsx)("option",{value:te,children:"특례"})]})]}),(0,t.jsxs)(eL,{children:[(0,t.jsxs)(eR,{children:["특례 구간 ",(0,t.jsx)(td,{})]}),(0,t.jsx)(r.default.Input.Text,{value:o,disabled:!f,onChange:e=>{let t=e.target.value;if(""!==t&&!/^([1-9]\d{0,2}|1000)$/.test(t))return;let i=function(e){if(/^([1-9]\d{0,2}|1000)$/.test(e))return`SPECIAL${e}`}(t);s(t),n(e=>({...e,serviceGrade:i}))},placeholder:"숫자를 입력하세요.",inputMode:"numeric",maxLength:4,style:eN})]}),(0,t.jsxs)(eL,{children:[(0,t.jsxs)(eR,{children:["소득 유형 ",(0,t.jsx)(td,{})]}),(0,t.jsxs)(to,{$isEmptySelected:h===ek.default.SELECT_EMPTY_VALUE,value:h,onChange:e=>{let t=e.target.value;tt(t)&&n(e=>({...e,incomeCategory:t}))},style:eN,children:[(0,t.jsx)("option",{value:ek.default.SELECT_EMPTY_VALUE,disabled:!0,children:"유형을 선택해주세요."}),Object.keys(e5.default).filter(tt).map(e=>(0,t.jsx)("option",{value:e,children:e5.default[e].label},e))]})]})]}),(0,t.jsxs)(eD,{children:[(0,t.jsxs)(eL,{children:[(0,t.jsx)(eR,{children:"수급결정시기"}),(0,t.jsx)(r.default.Input.Date,{value:p,onChange:e=>{""===e?n(e=>({...e,benefitDecisionPeriod:void 0})):eS.default.is(e)&&n(t=>({...t,benefitDecisionPeriod:e}))},style:{...eN,width:"100%",height:36}})]}),(0,t.jsxs)(eL,{children:[(0,t.jsxs)(eR,{children:["본인부담금(원) ",(0,t.jsx)(td,{})]}),(0,t.jsx)(r.default.Input.Money,{value:u,onChange:e=>{n(t=>({...t,copaymentAmount:e}))},placeholder:"금액을 입력해주세요.",style:eN})]}),(0,t.jsxs)(eL,{children:[(0,t.jsxs)(eR,{children:["가상계좌 ",(0,t.jsx)(td,{})]}),(0,t.jsx)(r.default.Input.Text,{value:x,onChange:e=>{n(t=>({...t,virtualAccountNumber:e.target.value}))},placeholder:"가상계좌를 입력해주세요.",inputMode:"numeric",style:eN})]})]}),(0,t.jsx)(eD,{children:(0,t.jsxs)(eL,{children:[(0,t.jsx)(eR,{children:"추가급여대상 여부"}),(0,t.jsx)(tr,{children:e3.map(e=>(0,t.jsxs)(tm,{children:[(0,t.jsx)(tj,{checked:g.includes(e),onChange:()=>{let t=g.includes(e)?g.filter(t=>t!==e):[...g,e];n(e=>({...e,additionalBenefitTypes:t}))}}),(0,t.jsx)(tb,{children:e})]},e))})]})}),(0,t.jsxs)(eD,{children:[(0,t.jsxs)(eL,{$width:193,children:[(0,t.jsxs)(eR,{children:["연결할 제공인력 ",(0,t.jsx)(td,{})]}),(0,t.jsxs)(to,{$isEmptySelected:void 0===e.serviceWorkerId,value:e.serviceWorkerId??ek.default.SELECT_EMPTY_VALUE,onOpenChange:t=>{t&&(N.setQuery({serviceType:e.serviceType,regions:e.desiredRegions,times:e.desiredServiceTimes,status:"ACTIVE"}),N.refetch())},onChange:e=>{n(t=>({...t,serviceWorkerId:e.target.value===ek.default.SELECT_EMPTY_VALUE?void 0:e.target.value}))},style:eN,children:[(0,t.jsx)("option",{value:ek.default.SELECT_EMPTY_VALUE,disabled:!0,children:"loading"===N.status?"조회 중...":"미정"}),P.map(e=>(0,t.jsx)("option",{value:e.id,children:e.name},e.id))]})]}),(0,t.jsxs)(eL,{$width:400,children:[(0,t.jsx)(eR,{children:"직장"}),(0,t.jsx)(r.default.Input.Text,{value:m,onChange:e=>{n(t=>({...t,workplace:e.target.value}))},placeholder:"직장명을 입력하세요.",style:eN})]})]}),(0,t.jsx)(e$,{children:"학교"}),(0,t.jsxs)(eD,{children:[(0,t.jsxs)(eL,{$width:395,children:[(0,t.jsx)(eR,{children:"학교명"}),(0,t.jsx)(r.default.Input.Text,{value:b,onChange:e=>{n(t=>({...t,schoolName:e.target.value}))},placeholder:"학교명을 입력하세요.",style:eN})]}),(0,t.jsxs)(eL,{$width:190,children:[(0,t.jsx)(eR,{children:"시작 시간"}),(0,t.jsx)(r.default.Input.Text,{type:"time",value:j,onChange:e=>{n(t=>({...t,schoolStartTime:e.target.value}))},placeholder:"00:00",style:eN})]}),(0,t.jsx)(t_,{children:"~"}),(0,t.jsxs)(eL,{$width:190,children:[(0,t.jsx)(eR,{children:"종료 시간"}),(0,t.jsx)(r.default.Input.Text,{type:"time",value:w,onChange:e=>{n(t=>({...t,schoolEndTime:e.target.value}))},placeholder:"00:00",style:eN})]})]}),(0,t.jsx)(tl,{label:"등교 요일",selectedDays:_,onChange:e=>n(t=>({...t,schoolDays:e}))}),(0,t.jsx)(e$,{children:"주단기보호센터"}),(0,t.jsxs)(eD,{children:[(0,t.jsxs)(eL,{$width:395,children:[(0,t.jsx)(eR,{children:"주단기보호센터명"}),(0,t.jsx)(r.default.Input.Text,{value:y,onChange:e=>{n(t=>({...t,shortTermCareCenterName:e.target.value}))},placeholder:"센터명을 입력하세요.",style:eN})]}),(0,t.jsx)(ti,{label:"시작 시간",value:v,onChange:e=>{n(t=>({...t,shortTermCareCenterStartTime:e}))}}),(0,t.jsx)(t_,{children:"~"}),(0,t.jsx)(ti,{label:"종료 시간",value:C,onChange:e=>{n(t=>({...t,shortTermCareCenterEndTime:e}))}})]}),(0,t.jsx)(tl,{label:"등원 요일",selectedDays:I,onChange:e=>n(t=>({...t,shortTermCareCenterDays:e}))}),(0,t.jsx)(e$,{children:"판정시간"}),(0,t.jsx)(eD,{children:e8.map(([e,i])=>(0,t.jsxs)(eL,{children:[(0,t.jsx)(eR,{children:i}),(0,t.jsxs)(tf,{children:[(0,t.jsx)(r.default.Input.Text,{value:z[e]??"",onChange:t=>{n(n=>({...n,judgmentTimes:{...n.judgmentTimes,[e]:t.target.value}}))},placeholder:"00",inputMode:"numeric",style:{...eN,width:140,textAlign:"center"}}),(0,t.jsx)(th,{children:"시간"})]})]},e))}),(0,t.jsxs)(eD,{children:[(0,t.jsxs)(eL,{children:[(0,t.jsxs)(eR,{children:["주장애명 ",(0,t.jsx)(td,{})]}),(0,t.jsx)(r.default.Input.Text,{value:T,onChange:e=>n(t=>({...t,primaryDisabilityName:e.target.value})),placeholder:"주장애명을 입력해주세요.",style:eN})]}),(0,t.jsxs)(eL,{children:[(0,t.jsx)(eR,{children:"장애급수"}),(0,t.jsx)(r.default.Input.Text,{value:E,onChange:e=>n(t=>({...t,primaryDisabilityGrade:e.target.value})),placeholder:"장애급수를 입력해주세요.",style:eN})]}),(0,t.jsxs)(eL,{children:[(0,t.jsx)(eR,{children:"주장애 장애정도"}),(0,t.jsx)(r.default.Input.Text,{value:k,onChange:e=>n(t=>({...t,primaryDisabilitySeverity:e.target.value})),placeholder:"주장애 장애정도를 입력해주세요.",style:eN})]})]}),(0,t.jsxs)(eD,{children:[(0,t.jsxs)(eL,{children:[(0,t.jsx)(eR,{children:"부장애명"}),(0,t.jsx)(r.default.Input.Text,{value:S,onChange:e=>n(t=>({...t,secondaryDisabilityName:e.target.value})),placeholder:"부장애명을 입력해주세요.",style:eN})]}),(0,t.jsxs)(eL,{children:[(0,t.jsx)(eR,{children:"장애급수"}),(0,t.jsx)(r.default.Input.Text,{value:O,onChange:e=>n(t=>({...t,secondaryDisabilityGrade:e.target.value})),placeholder:"장애급수를 입력해주세요.",style:eN})]}),(0,t.jsxs)(eL,{children:[(0,t.jsx)(eR,{children:"부장애 장애정도"}),(0,t.jsx)(r.default.Input.Text,{value:A,onChange:e=>n(t=>({...t,secondaryDisabilitySeverity:e.target.value})),placeholder:"부장애 장애정도를 입력해주세요.",style:eN})]})]}),(0,t.jsxs)(eD,{children:[(0,t.jsxs)(eL,{children:[(0,t.jsx)(eR,{children:"보유질환명"}),(0,t.jsx)(r.default.Input.Text,{value:$,onChange:e=>n(t=>({...t,medicalHistory:e.target.value})),placeholder:"보유질환에 대해 입력해주세요.",style:eN})]}),(0,t.jsxs)(eL,{children:[(0,t.jsx)(eR,{children:"투약정보"}),(0,t.jsx)(r.default.Input.Text,{value:D,onChange:e=>n(t=>({...t,medicationInfo:e.target.value})),placeholder:"투약정보에 대해 입력해주세요.",style:eN})]})]}),(0,t.jsxs)(eD,{children:[(0,t.jsx)(ta,{label:"외상장애 여부",name:"bedriddenStatus",width:158,options:[["NOT_APPLICABLE","미해당"],["APPLICABLE","해당"]],value:e.bedriddenStatus??"NOT_APPLICABLE",onChange:e=>n(t=>({...t,bedriddenStatus:e}))}),(0,t.jsx)(ta,{label:"의사소통",name:"communicationAbility",width:443,required:!0,options:[["AVAILABLE","가능"],["UNAVAILABLE","불가능"],["OTHER","기타"]],value:e.communicationAbility??"AVAILABLE",onChange:e=>n(t=>({...t,communicationAbility:e})),otherValue:L,onOtherChange:e=>n(t=>({...t,communicationOther:e}))}),(0,t.jsx)(ta,{label:"휠체어 유무",name:"wheelchairStatus",width:116,required:!0,options:[["AVAILABLE","유"],["UNAVAILABLE","무"]],value:e.wheelchairStatus??"AVAILABLE",onChange:e=>n(t=>({...t,wheelchairStatus:e}))})]}),(0,t.jsxs)(eD,{children:[(0,t.jsx)(ta,{label:"결혼여부",name:"maritalStatus",options:[["SINGLE","미혼"],["MARRIED","기혼"]],width:144,value:e.maritalStatus??"SINGLE",onChange:e=>n(t=>({...t,maritalStatus:e}))}),(0,t.jsx)(ta,{label:"가족사항",name:"familyStatus",options:[["LIVING_ALONE","독거"],["COUPLE","부부"],["SINGLE_PARENT","한부모"],["OTHER","기타"]],width:530,value:e.familyStatus??"LIVING_ALONE",onChange:e=>n(t=>({...t,familyStatus:e})),otherValue:R,onOtherChange:e=>n(t=>({...t,familyOther:e}))})]})]})};function ti({label:e,value:n,onChange:i}){return(0,t.jsxs)(eL,{children:[(0,t.jsx)(eR,{children:e}),(0,t.jsx)(r.default.Input.Text,{type:"time",value:n,onChange:e=>i(e.target.value),placeholder:"00:00",style:eN})]})}function tl({label:e,selectedDays:n,onChange:i}){return(0,t.jsxs)(eL,{children:[(0,t.jsx)(eR,{children:e}),(0,t.jsx)(ts,{children:e9.map(e=>(0,t.jsxs)(tc,{children:[(0,t.jsx)(tj,{checked:n.includes(e),onChange:()=>i(n.includes(e)?n.filter(t=>t!==e):[...n,e])}),(0,t.jsx)(tb,{children:e6.default[e].label})]},e))})]})}function ta({label:e,name:n,width:i,options:l,value:a,onChange:d,required:o=!1,otherValue:s,onOtherChange:c}){return(0,t.jsxs)(tp,{$width:i,children:[(0,t.jsxs)(eR,{children:[e," ",o&&(0,t.jsx)(td,{})]}),(0,t.jsx)(tu,{children:l.map(([e,i])=>(0,t.jsxs)(tx,{children:[(0,t.jsx)(tg,{type:"radio",name:n,value:e,checked:a===e,onChange:()=>d(e)}),(0,t.jsx)(tb,{children:i}),"OTHER"===e&&c&&(0,t.jsx)(r.default.Input.Text,{value:s??"",onChange:e=>c(e.target.value),placeholder:"관련 내용을 입력해주세요.",style:{...eN,width:193}})]},e))})]})}function td(){return(0,t.jsx)(tw,{children:" *"})}let to=(0,l.default)(r.default.Input.Select).withConfig({componentId:"zh__sc-d7ceea08-0"})`
  color: ${({$isEmptySelected:e})=>e?"#9ca3af":"#0a0a0a"};
`,tr=l.default.div.withConfig({componentId:"zh__sc-d7ceea08-1"})`
  display: flex;
  flex-wrap: wrap;
  gap: 0 24px;
  align-items: center;
`,ts=l.default.div.withConfig({componentId:"zh__sc-d7ceea08-2"})`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 24px;
  align-items: center;

  padding: 4px 0;
`,tc=l.default.label.withConfig({componentId:"zh__sc-d7ceea08-3"})`
  display: inline-flex;
  gap: 8px;
  align-items: center;
  height: 36px;
`,tf=l.default.div.withConfig({componentId:"zh__sc-d7ceea08-4"})`
  display: flex;
  gap: 10px;
  align-items: center;
  width: 100%;
`,th=l.default.span.withConfig({componentId:"zh__sc-d7ceea08-5"})`
  flex-shrink: 0;
  font-size: 16px;
  color: #000;
`,tp=l.default.div.withConfig({componentId:"zh__sc-d7ceea08-6"})`
  display: flex;
  flex: ${({$width:e})=>void 0===e?1:"none"};
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;

  width: ${({$width:e})=>void 0===e?"auto":`${e}px`};
  min-width: 0;
`,tu=l.default.div.withConfig({componentId:"zh__sc-d7ceea08-7"})`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 24px;
  align-items: center;

  min-height: 36px;
`,tx=l.default.label.withConfig({componentId:"zh__sc-d7ceea08-8"})`
  display: inline-flex;
  gap: 8px;
  align-items: center;
  min-height: 36px;
`,tg=l.default.input.withConfig({componentId:"zh__sc-d7ceea08-9"})`
  flex-shrink: 0;

  width: 24px;
  height: 24px;
  margin: 0;

  accent-color: #256ef4;
`,tm=l.default.label.withConfig({componentId:"zh__sc-d7ceea08-10"})`
  display: inline-flex;
  gap: 8px;
  align-items: center;
  height: 36px;
`,tb=l.default.span.withConfig({componentId:"zh__sc-d7ceea08-11"})`
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  color: #000;
`,tj=(0,l.default)(r.default.Input.Check).attrs({$iconSizeRatio:1.5}).withConfig({componentId:"zh__sc-d7ceea08-12"})`
  width: 24px;
  height: 24px;
`,tw=l.default.span.withConfig({componentId:"zh__sc-d7ceea08-13"})`
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: normal;
  color: #e7000b;
`,t_=l.default.span.withConfig({componentId:"zh__sc-d7ceea08-14"})`
  align-self: flex-end;
  padding-bottom: 8px;
  font-size: 16px;
  color: #000;
`,ty=Object.keys(e1.default).filter(function(e){return e in e1.default}),tv=["PHYSICAL_ACTIVITY_SUPPORT","HOUSEKEEPING_SUPPORT","SOCIAL_ACTIVITY_SUPPORT"],tC=["MALE","FEMALE"],tI=["TWENTIES_OR_YONGER","THIRTIES","FORTIES","FIFTIES","SIXTIES","SEVENTIES_OR_OLDER"],tz=(0,n.observer)(function(){let{clientDraft:e,updateClientDraft:n,getClientDraftFieldError:i,clearClientDraftFieldError:l}=a.default.modal.clientCreate;if(null===e)return null;let d=e.desiredServiceHours,o=e.desiredRegions??[],s=e.desiredCareTypes??[],c=e.desiredServiceWorkerGender,f=e.desiredAgeRanges??[],h="DISABILITY_ACTIVITY_SUPPORT"===e.serviceType,p=ty.every(e=>o.includes(e)),u=tv.every(e=>s.includes(e)),x=tI.every(e=>f.includes(e));return(0,t.jsxs)(tE,{children:[(0,t.jsxs)(tS,{children:[(0,t.jsxs)(tO,{children:["서비스 희망 시간",(0,t.jsx)(tT,{})]}),(0,t.jsxs)(t$,{children:[(0,t.jsx)(eJ.default,{sx:{fontSize:20}}),(0,t.jsx)(tD,{children:"시간대를 추가하고, 추가한 시간대를 클릭하면 수정하거나 삭제할 수 있습니다."})]})]}),(0,t.jsx)(tL,{value:e.desiredServiceTimes,onChange:e=>{l("desiredServiceTimes"),n(t=>({...t,desiredServiceTimes:e.target.value}))}}),""!==i("desiredServiceTimes")&&(0,t.jsx)(tB,{children:i("desiredServiceTimes")}),(0,t.jsxs)(tR,{children:[(0,t.jsx)(tN,{children:"희망 서비스 시간"}),(0,t.jsxs)(tP,{children:[(0,t.jsx)(tM,{children:"총"}),(0,t.jsx)(tF,{value:void 0===d?"":String(d),placeholder:"00",maxLength:2,onChange:e=>{let t=e.target.value.replace(/\D/g,"");n(e=>({...e,desiredServiceHours:""===t?void 0:Math.min(Number(t),99)}))}}),(0,t.jsx)(tM,{children:"시간"})]})]}),(0,t.jsxs)(tU,{children:[(0,t.jsxs)(tW,{children:["서비스 가능 지역 (복수 선택 가능)",(0,t.jsx)(tT,{})]}),(0,t.jsxs)(tV,{children:[(0,t.jsxs)(tY,{children:[(0,t.jsx)(tq,{checked:p,onChange:()=>{l("desiredRegions"),n(e=>({...e,desiredRegions:p?[]:ty}))}}),(0,t.jsx)(tH,{children:"전체 선택"})]},ek.default.CHECK_ALL_VALUE),ty.map(e=>(0,t.jsxs)(tY,{children:[(0,t.jsx)(tq,{checked:o.includes(e),onChange:()=>{l("desiredRegions"),n(t=>({...t,desiredRegions:o.includes(e)?o.filter(t=>t!==e):[...o,e]}))}}),(0,t.jsx)(tH,{children:e1.default[e].label})]},e))]}),""!==i("desiredRegions")&&(0,t.jsx)(tB,{children:i("desiredRegions")})]}),h&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(tU,{children:[(0,t.jsxs)(tW,{children:["희망 활동 내용 (복수 선택 가능)",(0,t.jsx)(tT,{})]}),(0,t.jsxs)(tV,{children:[(0,t.jsxs)(tY,{children:[(0,t.jsx)(tq,{checked:u,onChange:()=>{l("desiredCareTypes"),n(e=>({...e,desiredCareTypes:u?[]:tv}))}}),(0,t.jsx)(tH,{children:"전체 선택"})]}),tv.map(e=>(0,t.jsxs)(tY,{children:[(0,t.jsx)(tq,{checked:s.includes(e),onChange:()=>{l("desiredCareTypes"),n(t=>({...t,desiredCareTypes:s.includes(e)?s.filter(t=>t!==e):[...s,e]}))}}),(0,t.jsx)(tH,{children:"PHYSICAL_ACTIVITY_SUPPORT"===e?"신체 활동":e2.default[e].label.replace("활동"," 활동")})]},e))]}),""!==i("desiredCareTypes")&&(0,t.jsx)(tB,{children:i("desiredCareTypes")})]}),(0,t.jsxs)(tU,{children:[(0,t.jsxs)(tW,{children:["제공인력 희망 성별",(0,t.jsx)(tT,{})]}),(0,t.jsxs)(tV,{children:[(0,t.jsxs)(tY,{children:[(0,t.jsx)(r.default.Input.Radio,{name:"desired-service-worker-gender",checked:void 0===c,onChange:()=>{n(e=>({...e,desiredServiceWorkerGender:void 0}))}}),(0,t.jsx)(tH,{children:"전체"})]}),tC.map(e=>(0,t.jsxs)(tY,{children:[(0,t.jsx)(r.default.Input.Radio,{name:"desired-service-worker-gender",checked:c===e,onChange:()=>{n(t=>({...t,desiredServiceWorkerGender:e}))}}),(0,t.jsx)(tH,{children:e0.default[e].label})]},e))]})]}),(0,t.jsxs)(tU,{children:[(0,t.jsxs)(tW,{children:["제공인력 희망 연령 (복수 선택 가능)",(0,t.jsx)(tT,{})]}),(0,t.jsxs)(tV,{children:[(0,t.jsxs)(tY,{children:[(0,t.jsx)(tq,{checked:x,onChange:()=>{n(e=>({...e,desiredAgeRanges:x?[]:tI}))}}),(0,t.jsx)(tH,{children:"전체 선택"})]}),tI.map(e=>(0,t.jsxs)(tY,{children:[(0,t.jsx)(tq,{checked:f.includes(e),onChange:()=>{l("desiredAgeRanges"),n(t=>({...t,desiredAgeRanges:f.includes(e)?f.filter(t=>t!==e):[...f,e]}))}}),(0,t.jsx)(tH,{children:"TWENTIES_OR_YONGER"===e||"SEVENTIES_OR_OLDER"===e?eZ.default[e].label.replace(" 이하","").replace(" 이상",""):eZ.default[e].label})]},e))]})]}),h&&e.contractStartDate&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(tk,{}),(0,t.jsx)(tn,{})]}),(0,t.jsxs)(tU,{children:[(0,t.jsx)(tW,{children:"(타기관) 이용경험"}),(0,t.jsx)(tG,{value:e.otherInstitutionExperience??"",onChange:e=>{n(t=>({...t,otherInstitutionExperience:e.target.value}))},placeholder:"텍스트를 입력해주세요."})]}),(0,t.jsxs)(tU,{children:[(0,t.jsx)(tW,{children:"특이사항 (장애특성 및 일상생활)"}),(0,t.jsx)(tK,{value:e.disabilityNote??"",onChange:e=>{n(t=>({...t,disabilityNote:e.target.value}))},placeholder:"특이사항을 입력해주세요."})]}),(0,t.jsxs)(tU,{children:[(0,t.jsx)(tW,{children:"종합소견"}),(0,t.jsx)(tX,{value:e.overallOpinion??"",onChange:e=>{n(t=>({...t,overallOpinion:e.target.value}))},placeholder:"종합소견을 입력해주세요."})]})]})]})});function tT(){return(0,t.jsx)(tA,{children:" *"})}let tE=l.default.div.withConfig({componentId:"zh__sc-51651a13-0"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  align-self: stretch;
`,tk=l.default.div.withConfig({componentId:"zh__sc-51651a13-1"})`
  flex-shrink: 0;
  width: 100%;
  height: 1px;
  background: #e5e7eb;
`,tS=l.default.div.withConfig({componentId:"zh__sc-51651a13-2"})`
  display: flex;
  gap: 16px;
  align-items: center;
  align-self: stretch;

  height: 30px;
`,tO=l.default.div.withConfig({componentId:"zh__sc-51651a13-3"})`
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
  text-align: center;
`,tA=l.default.span.withConfig({componentId:"zh__sc-51651a13-4"})`
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: normal;
  color: #e7000b;
`,t$=l.default.div.withConfig({componentId:"zh__sc-51651a13-5"})`
  display: flex;
  flex: 1 0 0;
  gap: 4px;
  align-items: center;

  color: #464c53;
`,tD=l.default.div.withConfig({componentId:"zh__sc-51651a13-6"})`
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px;
`,tL=(0,l.default)(r.default.Input.TimeSlider).withConfig({componentId:"zh__sc-51651a13-7"})`
  align-self: stretch;
`,tR=l.default.div.withConfig({componentId:"zh__sc-51651a13-8"})`
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
  align-self: stretch;
`,tN=l.default.div.withConfig({componentId:"zh__sc-51651a13-9"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #000;
  text-align: center;
`,tP=l.default.div.withConfig({componentId:"zh__sc-51651a13-10"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,tF=(0,l.default)(r.default.Input.Text).withConfig({componentId:"zh__sc-51651a13-11"})`
  width: 59px;
  height: 36px;
  text-align: center;
`,tM=l.default.div.withConfig({componentId:"zh__sc-51651a13-12"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #000;
  text-align: center;
`,tB=l.default.div.withConfig({componentId:"zh__sc-51651a13-13"})`
  font-size: 12px;
  line-height: 16px;
  color: #ff4d4f;
`,tU=l.default.div.withConfig({componentId:"zh__sc-51651a13-14"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
  align-self: stretch;
`,tW=l.default.div.withConfig({componentId:"zh__sc-51651a13-15"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #000;
  text-align: center;
`,tV=l.default.div.withConfig({componentId:"zh__sc-51651a13-16"})`
  display: flex;
  flex-wrap: wrap;
  gap: 0 24px;
  align-items: center;
`,tY=l.default.label.withConfig({componentId:"zh__sc-51651a13-17"})`
  display: inline-flex;
  gap: 8px;
  align-items: center;
  height: 36px;
`,tH=l.default.span.withConfig({componentId:"zh__sc-51651a13-18"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #000;
  text-align: center;
`,tG=(0,l.default)(r.default.Input.Textarea).withConfig({componentId:"zh__sc-51651a13-19"})`
  resize: vertical;

  width: 100%;
  min-height: 100px;
  padding: 12px 16px;

  font-size: 16px;
`,tK=(0,l.default)(r.default.Input.Text).withConfig({componentId:"zh__sc-51651a13-20"})`
  width: 100%;
  padding: 4px 16px;
  font-size: 16px;
`,tX=(0,l.default)(r.default.Input.Textarea).withConfig({componentId:"zh__sc-51651a13-21"})`
  resize: vertical;

  width: 100%;
  min-height: 156px;
  padding: 12px 16px;

  font-size: 16px;
`,tq=(0,l.default)(r.default.Input.Check).attrs({$iconSizeRatio:1.5}).withConfig({componentId:"zh__sc-51651a13-22"})`
  width: 24px;
  height: 24px;
`,tQ=(0,n.observer)(function(){let{clientDraft:e,updateClientDraft:n}=a.default.modal.clientCreate,i=a.default.data.serviceWorker.list,l=e?.contractStartDate??"",d=i.data??[];return e?.serviceType==="DISABILITY_ACTIVITY_SUPPORT"?null:(0,t.jsxs)(tJ,{children:[(0,t.jsxs)(tZ,{children:["연결할 제공인력",(0,t.jsx)(t0,{})]}),(0,t.jsxs)(t6,{$isEmptySelected:e?.serviceWorkerId===void 0,style:t2,value:e?.serviceWorkerId??ek.default.SELECT_EMPTY_VALUE,disabled:""===l,onOpenChange:t=>{t&&null!==e&&(i.setQuery({serviceType:e.serviceType,regions:e.desiredRegions,times:e.desiredServiceTimes,status:"ACTIVE"}),i.refetch())},onChange:e=>{n(t=>({...t,serviceWorkerId:e.target.value===ek.default.SELECT_EMPTY_VALUE?void 0:e.target.value}))},children:[(0,t.jsx)("option",{value:ek.default.SELECT_EMPTY_VALUE,disabled:!0,children:"loading"===i.status?"조회 중...":"미정"}),d.map(e=>(0,t.jsx)("option",{value:e.id,children:e.name},e.id))]})]})}),tJ=l.default.div.withConfig({componentId:"zh__sc-fe78af34-0"})`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
  align-self: stretch;

  width: 181px;
  min-height: 59px;
`,tZ=l.default.div.withConfig({componentId:"zh__sc-fe78af34-1"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #000;
`;function t0(){return(0,t.jsx)(t1,{children:" *"})}let t1=l.default.span.withConfig({componentId:"zh__sc-fe78af34-2"})`
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: normal;
  color: #e7000b;
`,t2={display:"flex",padding:"4px 16px",alignItems:"center",gap:"10px",flex:"1 0 0",alignSelf:"stretch",fontSize:16,width:200},t6=(0,l.default)(r.default.Input.Select).withConfig({componentId:"zh__sc-fe78af34-3"})`
  min-height: 36px;
  color: ${({$isEmptySelected:e})=>e?"#9ca3af":"#0a0a0a"};
`,t4=(0,n.observer)(function(){let e=a.default.modal.clientCreate.clientDraft?.serviceType==="DISABILITY_ACTIVITY_SUPPORT";return(0,t.jsxs)(t5,{children:[(0,t.jsx)(t3,{children:"이용자 기본 정보"}),(0,t.jsx)(eU,{}),(0,t.jsx)(t9,{}),(0,t.jsx)(tz,{}),!e&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(t9,{}),(0,t.jsx)(tQ,{})]})]})}),t5=l.default.div.withConfig({componentId:"zh__sc-52495c18-0"})`
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: flex-start;

  width: 808px;
  min-height: 0;
  padding: 32px 24px;

  background: #fff;
  box-shadow: -8px 0 8px 0 rgb(0 0 0 / 8%);
`,t3=l.default.div.withConfig({componentId:"zh__sc-52495c18-1"})`
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
  text-align: center;
`,t9=l.default.div.withConfig({componentId:"zh__sc-52495c18-2"})`
  flex-shrink: 0;
  width: 100%;
  height: 1px;
  background: #e5e7eb;
`,t8=(0,n.observer)(function(){let{clientDraft:e}=a.default.modal.clientCreate;return(0,t.jsxs)(t7,{children:[(0,t.jsx)(eT,{}),e&&(0,t.jsx)(t4,{})]})}),t7=l.default.div.withConfig({componentId:"zh__sc-cfc6108c-0"})`
  overflow: hidden;
  display: flex;
  flex: 1 1 auto;
  align-self: stretch;
  justify-content: center;

  min-height: 0;
  max-height: none;

  background: #f9fafb;
`;function ne(){let{close:e,mode:n}=a.default.modal.clientCreate;return(0,t.jsxs)(nt,{children:[(0,t.jsx)(nn,{children:"renew"===n?"재계약 이용자 등록하기":"신규 이용자 등록하기"}),(0,t.jsxs)(ni,{onClick:e,children:[(0,t.jsx)(S.X,{size:16}),"닫기"]})]})}let nt=l.default.div.withConfig({componentId:"zh__sc-f50634fa-0"})`
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
`,nn=l.default.div.withConfig({componentId:"zh__sc-f50634fa-1"})`
  font-size: 18px;
  font-weight: 700;
  font-style: normal;
  line-height: 28px; /* 155.556% */
  color: #101828;
  letter-spacing: -0.439px;
`,ni=(0,l.default)(r.default.Button.Outlined).withConfig({componentId:"zh__sc-f50634fa-2"})`
  display: flex;
  gap: 6px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,nl=(0,n.observer)(function(){let e=a.default.modal.clientCreate,{status:n}=e,l=(0,i.useRef)(null);return((0,i.useEffect)(()=>"ready"!==n?void e.setToastContainer(null):(e.setToastContainer(l.current),()=>{e.setToastContainer(null)}),[e,n]),"ready"!==n)?null:(0,t.jsx)(d.default,{children:(0,t.jsxs)(na,{ref:l,children:[(0,t.jsx)(ne,{}),(0,t.jsx)(t8,{}),(0,t.jsx)(s,{}),(0,t.jsx)(u,{})]})})}),na=l.default.div.withConfig({componentId:"zh__sc-21fa7296-0"})`
  position: relative;

  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  align-items: center;

  width: 1712px;
  min-width: 1712px;
  height: 90vh;
  min-height: 830px;
  max-height: 90vh;
  border-radius: 8px;

  background: #fff;
`;var nd=e.i(38797);let no=(0,nd.default)((0,t.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"}),"AddOutlined"),nr=(0,nd.default)((0,t.jsx)("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"CheckOutlined");var ns=e.i(17510);let nc=(0,nd.default)((0,t.jsx)("path",{d:"m15 5-1.41 1.41L18.17 11H2v2h16.17l-4.59 4.59L15 19l7-7z"}),"EastOutlined");var nf=e.i(84527),nh=e.i(74483);let np=l.default.div.withConfig({componentId:"zh__sc-422803e4-0"})`
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

  background: #fcfdff;
`,nu=l.default.div.withConfig({componentId:"zh__sc-422803e4-1"})`
  padding: 16px;
  border: 1px dashed #d1d5db;
  border-radius: 10px;

  font-size: 14px;
  color: #6b7280;
`,nx=l.default.div.withConfig({componentId:"zh__sc-422803e4-2"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;

  width: 100%;
`,ng=l.default.div.withConfig({componentId:"zh__sc-422803e4-3"})`
  display: flex;
  align-items: center;
  align-self: stretch;
  min-height: 40px;
`,nm=l.default.div.withConfig({componentId:"zh__sc-422803e4-4"})`
  display: flex;
  flex: 1 0 0;
  align-items: center;
  justify-content: space-between;

  min-width: 0;
  min-height: 40px;
`,nb=l.default.h3.withConfig({componentId:"zh__sc-422803e4-5"})`
  margin: 0;

  font-size: 18px;
  font-weight: 700;
  line-height: 20px;
  color: #101828;
`,nj=l.default.div.withConfig({componentId:"zh__sc-422803e4-6"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,nw=(0,l.default)(r.default.Button.Outlined).withConfig({componentId:"zh__sc-422803e4-7"})`
  display: flex;
  gap: 4px;
  align-items: center;

  height: 40px;
  padding: 8px 16px;
  border-radius: 6px;

  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: #4f39f6;

  &:disabled {
    cursor: not-allowed;

    border-color: #d1d5db;

    color: #9ca3af;

    opacity: 1;
    background: #f9fafb;
  }
`;l.default.span.withConfig({componentId:"zh__sc-422803e4-8"})`
  padding: 2px 12px;
  border: 1px solid #d1d5db;
  border-radius: 99px;

  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: #45464e;
`;let n_=l.default.span.withConfig({componentId:"zh__sc-422803e4-9"})`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;

  padding: 8px;
  border-radius: 99px;

  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  color: #fff;
  white-space: nowrap;

  background: #4f39f6;
`,ny=(0,l.default)(r.default.Input.Text).withConfig({componentId:"zh__sc-422803e4-10"})`
  width: 100%;
  height: 28px;
  padding: 0 16px;

  font-size: 16px;
  line-height: 16px;
`,nv=(0,l.default)(r.default.Input.Phone).withConfig({componentId:"zh__sc-422803e4-11"})`
  width: 100%;
  height: 28px;
  padding: 0 16px;

  font-size: 16px;
  line-height: 16px;
`,nC=(0,l.default)(r.default.Input.Contact).withConfig({componentId:"zh__sc-422803e4-12"})`
  width: 100%;
  height: 28px;
  padding: 0 16px;

  font-size: 16px;
  line-height: 16px;
`,nI=(0,l.default)(r.default.Input.PostCode).withConfig({componentId:"zh__sc-422803e4-13"})`
  width: 100%;
  height: 28px;
  padding: 0 16px;

  font-size: 16px;
  line-height: 16px;
`;(0,l.default)(r.default.Input.Select).withConfig({componentId:"zh__sc-422803e4-14"})`
  width: 100%;
  height: 28px;
  font-size: 16px;
  line-height: 16px;
`;let nz=(0,l.default)(r.default.Button.Outlined).withConfig({componentId:"zh__sc-422803e4-15"})`
  display: flex;
  gap: 8px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,nT=l.default.div.withConfig({componentId:"zh__sc-422803e4-16"})`
  position: fixed;
  z-index: 1000;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgb(10 10 10 / 35%);
`,nE=l.default.div.withConfig({componentId:"zh__sc-422803e4-17"})`
  position: relative;

  display: inline-flex;
  flex-direction: column;
  gap: 48px;
  align-items: center;
  justify-content: center;

  padding: 32px 24px;
  border: 1px solid #e5e9ef;
  border-radius: 8px;

  background: #fff;
  box-shadow: 0 4px 4px 0 rgb(0 0 0 / 10%);
`,nk=l.default.div.withConfig({componentId:"zh__sc-422803e4-18"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;
`,nS=l.default.h2.withConfig({componentId:"zh__sc-422803e4-19"})`
  align-self: stretch;

  margin: 0;

  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  color: #000;
`,nO=l.default.p.withConfig({componentId:"zh__sc-422803e4-20"})`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: #000;
`,nA=l.default.div.withConfig({componentId:"zh__sc-422803e4-21"})`
  display: flex;
  gap: 12px;
  align-items: center;
  align-self: stretch;
  justify-content: flex-end;
`,n$=(0,l.default)(r.default.Button.Outlined).withConfig({componentId:"zh__sc-422803e4-22"})`
  height: 36px;
  padding: 8px 16px;
`,nD=(0,l.default)(r.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-422803e4-23"})`
  height: 36px;
  padding: 8px 16px;
`,nL=(0,n.observer)(function({guardianList:e,selectedGuardianId:n,onAddGuardian:l,onUpdateGuardian:a}){let d=e.length>0,[o,s]=(0,i.useState)(!1),[c,f]=(0,i.useState)(!1),[h,p]=(0,i.useState)(!1),[u,x]=(0,i.useState)(!1),[g,m]=(0,i.useState)(""),[b,j]=(0,i.useState)({name:"",relation:"",phone:"",address:""}),[w,_]=(0,i.useState)({name:"",relation:"",phone:"",address:""}),y=null!==n&&e.some(e=>e.id===n)?n:null,v=(0,i.useMemo)(()=>{if(null===y)return e;let t=e.find(e=>e.id===y);return t?[t,...e.filter(e=>e.id!==y)]:e},[y,e]),C=()=>{j({name:"",relation:"",phone:"",address:""}),_({name:"",relation:"",phone:"",address:""}),m("")},I=()=>{s(!1),f(!1),p(!1),C()},z=(e,t)=>{j(n=>({...n,[e]:t})),_(t=>({...t,[e]:""})),m("")},T=async()=>{x(!0);let e={name:b.name,relation:b.relation,phone:b.phone,address:b.address},t=c&&null!==y?await a(y,e):await l(e);(x(!1),p(!1),null===t)?m("보호자 정보를 저장하지 못했습니다. 잠시 후 다시 시도해 주세요."):I()},E=o?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(nZ,{onClick:I,children:(0,t.jsxs)(n0,{onClick:e=>e.stopPropagation(),children:[(0,t.jsxs)(n1,{children:[(0,t.jsx)(n2,{}),(0,t.jsx)(n6,{children:c?"보호자 정보 수정":"신규 보호자 추가"}),(0,t.jsx)(r.default.Button.Outlined,{type:"button",style:{width:56,height:36,padding:8},onClick:I,children:(0,t.jsx)(ns.default,{sx:{fontSize:20}})})]}),(0,t.jsx)(n4,{}),(0,t.jsx)(n5,{children:(0,t.jsxs)(n3,{children:[(0,t.jsxs)(n9,{children:[(0,t.jsxs)(n7,{children:[(0,t.jsx)(ie,{children:"성명"}),(0,t.jsx)(it,{type:"text",placeholder:"보호자 성명을 입력하세요.",value:b.name,onChange:e=>z("name",e.target.value),$hasError:""!==w.name}),(0,t.jsx)(il,{children:w.name})]}),(0,t.jsxs)(n7,{children:[(0,t.jsx)(ie,{children:"이용자와의 관계"}),(0,t.jsx)(it,{type:"text",placeholder:"예: 자녀(딸), 자녀(아들), 자녀(며느리)",value:b.relation,onChange:e=>z("relation",e.target.value),$hasError:""!==w.relation}),(0,t.jsx)(il,{children:w.relation})]}),(0,t.jsxs)(n7,{children:[(0,t.jsx)(ie,{children:"연락처"}),(0,t.jsx)(it,{type:"tel",placeholder:"보호자 연락처를 입력하세요.",value:b.phone,onChange:e=>z("phone",e.target.value),$hasError:""!==w.phone}),(0,t.jsx)(il,{children:w.phone})]}),(0,t.jsxs)(n7,{children:[(0,t.jsx)(ie,{children:"주소"}),(0,t.jsx)(ii,{rows:3,placeholder:"보호자 주소를 입력하세요.",value:b.address,onChange:e=>z("address",e.target.value),$hasError:""!==w.address}),(0,t.jsx)(il,{children:w.address})]})]}),(0,t.jsxs)(n8,{children:[(0,t.jsx)(ia,{children:g}),(0,t.jsxs)(r.default.Button.Filled.Primary,{type:"button",style:{display:"flex",gap:4,alignItems:"center",height:36,padding:"8px 16px"},onClick:()=>{if(u)return;let e={name:""===b.name.trim()?"필수 입력값입니다.":"",relation:"",phone:"",address:""};_(e),Object.values(e).some(e=>""!==e)||p(!0)},children:[(0,t.jsx)(nr,{sx:{fontSize:20}}),c?"수정 완료":"추가 완료"]})]})]})})]})}),h?(0,t.jsx)(id,{children:(0,t.jsxs)(io,{children:[(0,t.jsx)(ir,{children:(0,t.jsx)(is,{children:c?"보호자 정보를 수정할까요?":"신규 보호자 정보를 추가할까요?"})}),(0,t.jsxs)(ic,{children:[(0,t.jsx)(r.default.Button.Outlined,{type:"button",style:{width:91,height:36,padding:"8px 16px"},disabled:u,onClick:()=>p(!1),children:"취소하기"}),(0,t.jsx)(r.default.Button.Filled.Primary,{type:"button",style:{width:91,height:36,padding:"8px 16px"},disabled:u,onClick:()=>void T(),children:u?"저장 중...":c?"수정하기":"추가하기"})]})]})}):null]}):null;return(0,t.jsxs)(nx,{children:[(0,t.jsx)(ng,{children:(0,t.jsxs)(nm,{children:[(0,t.jsx)(nb,{children:"보호자 정보"}),(0,t.jsxs)(nj,{children:[(0,t.jsxs)(nw,{type:"button",disabled:null===y,onClick:()=>{let t=e.find(e=>e.id===y);t&&(f(!0),j({name:t.name,relation:t.relationship??"",phone:t.phoneNumber??"",address:t.address??""}),_({name:"",relation:"",phone:"",address:""}),m(""),s(!0))},children:[(0,t.jsx)(nf.default,{sx:{fontSize:20}}),"수정하기"]}),(0,t.jsxs)(nw,{type:"button",onClick:()=>{f(!1),C(),s(!0)},children:[(0,t.jsx)(no,{sx:{fontSize:20}}),"추가하기"]})]})]})}),d?(0,t.jsx)(nR,{children:v.map(e=>{let n=e.id===y;return(0,t.jsxs)(nN,{$isSelected:n,children:[(0,t.jsxs)(nP,{children:[(0,t.jsx)(nF,{children:e.name}),(0,t.jsx)(nM,{children:null===e.relationship||""===e.relationship?"이용자와의 관계: -":`이용자와의 관계: ${e.relationship}`})]}),(0,t.jsxs)(nB,{children:[(0,t.jsxs)(nU,{children:[(0,t.jsx)(nW,{children:"주소"}),(0,t.jsx)(nV,{}),(0,t.jsx)(nY,{children:e.address??"-"})]}),(0,t.jsxs)(nU,{children:[(0,t.jsx)(nW,{children:"연락처"}),(0,t.jsx)(nV,{}),(0,t.jsx)(nY,{children:e.phoneNumber??"-"})]}),(0,t.jsxs)(nU,{children:[(0,t.jsx)(nW,{children:"이메일"}),(0,t.jsx)(nV,{}),(0,t.jsx)(nY,{children:"-"})]})]}),(0,t.jsx)(nH,{children:n?(0,t.jsx)(nG,{children:"지금 선택됨"}):(0,t.jsxs)(nK,{type:"button",disabled:!0,children:["선택",(0,t.jsx)(nc,{sx:{fontSize:16}})]})})]},e.id)})}):(0,t.jsxs)(nX,{children:[(0,t.jsx)(nh.default,{sx:{fontSize:24,color:"#494F53"}}),(0,t.jsxs)(nq,{children:[(0,t.jsx)(nQ,{children:"등록된 보호자 정보가 없습니다."}),(0,t.jsx)(nJ,{children:"보호자 정보 등록이 필요한 경우 [+추가하기] 버튼을 클릭하고 등록할 수 있습니다."})]})]}),E]})}),nR=l.default.div.withConfig({componentId:"zh__sc-b1996503-0"})`
  overflow: auto hidden;
  display: flex;
  flex-wrap: nowrap;
  gap: 10px;

  width: 100%;
`,nN=l.default.div.withConfig({componentId:"zh__sc-b1996503-1"})`
  position: relative;

  display: flex;
  flex: 0 0 319px;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;

  height: 186px;
  padding: 16px;
  border: 1px solid ${e=>e.$isSelected?"#5635ff":"#e5e9ef"};
  border-radius: 8px;

  background: ${e=>e.$isSelected?"#f7f5ff":"#fff"};
  box-shadow: ${e=>e.$isSelected?"0 0 3px #ddd8ff":"none"};
`,nP=l.default.div.withConfig({componentId:"zh__sc-b1996503-2"})`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;

  width: 100%;
`,nF=l.default.div.withConfig({componentId:"zh__sc-b1996503-3"})`
  flex-shrink: 0;

  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  color: #0a0a0a;
`,nM=l.default.div.withConfig({componentId:"zh__sc-b1996503-4"})`
  display: flex;
  align-items: center;

  min-width: 0;
  padding: 2px 12px;
  border: 1px solid #d1d5db;
  border-radius: 999px;

  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: #45464e;

  background: #fff;
`,nB=l.default.div.withConfig({componentId:"zh__sc-b1996503-5"})`
  display: flex;
  flex-direction: column;
  gap: 4px;

  width: 100%;
  padding-bottom: 36px;
`,nU=l.default.div.withConfig({componentId:"zh__sc-b1996503-6"})`
  display: flex;
  gap: 8px;
  align-items: flex-start;
  width: 100%;
`,nW=l.default.span.withConfig({componentId:"zh__sc-b1996503-7"})`
  width: 52px;
  min-width: 52px;

  font-size: 14px;
  line-height: 20px;
  color: #0a0a0a;
`,nV=l.default.span.withConfig({componentId:"zh__sc-b1996503-8"})`
  width: 1px;
  height: 20px;
  background: #e5e7eb;
`,nY=l.default.span.withConfig({componentId:"zh__sc-b1996503-9"})`
  min-width: 0;

  font-size: 14px;
  line-height: 20px;
  color: #45464e;
  overflow-wrap: anywhere;
`,nH=l.default.div.withConfig({componentId:"zh__sc-b1996503-10"})`
  position: absolute;
  right: 16px;
  bottom: 16px;

  display: flex;
  justify-content: flex-end;
`,nG=l.default.div.withConfig({componentId:"zh__sc-b1996503-11"})`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 8px;
  border-radius: 999px;

  font-size: 16px;
  line-height: 16px;
  color: #fff;
  letter-spacing: -1px;

  background: #4f39f6;
`,nK=l.default.button.withConfig({componentId:"zh__sc-b1996503-12"})`
  cursor: not-allowed;

  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;

  padding: 8px;
  border: 0;
  border-radius: 999px;

  font-size: 16px;
  line-height: 16px;
  color: #9ca3af;
  letter-spacing: -1px;

  background: transparent;
`,nX=l.default.div.withConfig({componentId:"zh__sc-b1996503-13"})`
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
`,nq=l.default.div.withConfig({componentId:"zh__sc-b1996503-14"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: center;
`,nQ=l.default.div.withConfig({componentId:"zh__sc-b1996503-15"})`
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  color: #494f53;
`,nJ=l.default.div.withConfig({componentId:"zh__sc-b1996503-16"})`
  font-size: 14px;
  line-height: 20px;
  color: #494f53;
  text-align: center;
`,nZ=l.default.div.withConfig({componentId:"zh__sc-b1996503-17"})`
  position: absolute;
  z-index: 20;
  inset: 0;

  display: flex;
  justify-content: flex-end;

  background: rgb(17 24 39 / 28%);
`,n0=l.default.div.withConfig({componentId:"zh__sc-b1996503-18"})`
  display: flex;
  flex-direction: column;

  width: min(417px, 100%);
  height: 100%;

  background: #fff;
  box-shadow: -2px 9px 16px rgb(0 0 0 / 16%);
`,n1=l.default.div.withConfig({componentId:"zh__sc-b1996503-19"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
`,n2=l.default.div.withConfig({componentId:"zh__sc-b1996503-20"})`
  flex-shrink: 0;
  width: 36px;
  height: 36px;
`,n6=l.default.div.withConfig({componentId:"zh__sc-b1996503-21"})`
  flex: 1;

  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  color: #0a0a0a;
  text-align: center;
`,n4=l.default.div.withConfig({componentId:"zh__sc-b1996503-22"})`
  height: 1px;
  background: #e5e7eb;
`,n5=l.default.div.withConfig({componentId:"zh__sc-b1996503-23"})`
  overflow-y: auto;
  display: flex;
  flex: 1;
  flex-direction: column;

  padding: 16px;
`,n3=l.default.div.withConfig({componentId:"zh__sc-b1996503-24"})`
  display: flex;
  flex-direction: column;
  gap: 16px;

  padding: 16px;
  border: 1px solid #e5e9ef;
  border-radius: 8px;

  background: #fff;
`,n9=l.default.div.withConfig({componentId:"zh__sc-b1996503-25"})`
  display: flex;
  flex-direction: column;
`,n8=l.default.div.withConfig({componentId:"zh__sc-b1996503-26"})`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: flex-end;
`,n7=l.default.div.withConfig({componentId:"zh__sc-b1996503-27"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,ie=l.default.label.withConfig({componentId:"zh__sc-b1996503-28"})`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: #0a0a0a;
`,it=l.default.input.withConfig({componentId:"zh__sc-b1996503-29"})`
  width: 100%;
  height: 36px;
  padding: 4px 16px;
  border: 1px solid ${e=>e.$hasError?"#ef4444":"#e5e9ef"};
  border-radius: 4px;

  font-size: 16px;
  color: #0a0a0a;

  &::placeholder {
    color: #9ca3af;
  }

  &:focus {
    border-color: #4f39f6;
    outline: none;
  }
`,ii=l.default.textarea.withConfig({componentId:"zh__sc-b1996503-30"})`
  resize: none;

  width: 100%;
  padding: 4px 16px;
  border: 1px solid ${e=>e.$hasError?"#ef4444":"#e5e9ef"};
  border-radius: 4px;

  font-size: 16px;
  color: #0a0a0a;

  &::placeholder {
    color: #9ca3af;
  }

  &:focus {
    border-color: #4f39f6;
    outline: none;
  }
`,il=l.default.div.withConfig({componentId:"zh__sc-b1996503-31"})`
  min-height: 20px;
  font-size: 12px;
  line-height: 20px;
  color: #ef4444;
`,ia=l.default.div.withConfig({componentId:"zh__sc-b1996503-32"})`
  min-height: 20px;
  font-size: 12px;
  line-height: 20px;
  color: #ef4444;
`,id=l.default.div.withConfig({componentId:"zh__sc-b1996503-33"})`
  position: absolute;
  z-index: 30;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgb(17 24 39 / 12%);
`,io=l.default.div.withConfig({componentId:"zh__sc-b1996503-34"})`
  display: flex;
  flex-direction: column;
  gap: 48px;

  width: 501px;
  padding: 32px 24px;
  border: 1px solid #e5e9ef;
  border-radius: 8px;

  background: #fff;
  box-shadow: 0 4px 2px rgb(0 0 0 / 10%);
`,ir=l.default.div.withConfig({componentId:"zh__sc-b1996503-35"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`,is=l.default.div.withConfig({componentId:"zh__sc-b1996503-36"})`
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  color: #000;
`,ic=l.default.div.withConfig({componentId:"zh__sc-b1996503-37"})`
  display: flex;
  gap: 12px;
  justify-content: flex-end;
`;var ih=e.i(84673);let ip=Object.keys(e1.default).filter(function(e){return e in e1.default}),iu=["PHYSICAL_ACTIVITY_SUPPORT","HOUSEKEEPING_SUPPORT","SOCIAL_ACTIVITY_SUPPORT"],ix=["MALE","FEMALE"],ig=["TWENTIES_OR_YONGER","THIRTIES","FORTIES","FIFTIES","SIXTIES","SEVENTIES_OR_OLDER"],im=["MON","TUE","WED","THU","FRI","SAT","SUN"],ib=[["ministry","보건복지부"],["metropolitan","광역지자체"],["local","기초지자체"],["other","기타"]],ij=(0,n.observer)(function(){let e=a.default.client.info.byClient,n=e.isServiceConditionEditing,i=e.selectedContract,l=null!==i?i:null,d=e.selectedServiceConditionDraft,o=d?.desiredServiceTimes??l?.desiredServiceTimes??[],s=d?.desiredRegions??l?.desiredRegions??[],c=l?.desiredCareTypes??[],f=l?.desiredServiceWorkerGender,h=l?.desiredAgeRanges??[],p=l?.desiredServiceHours,u="string"==typeof l?.workplace?l.workplace:"",x="string"==typeof l?.schoolName?l.schoolName:"",g="string"==typeof l?.schoolStartTime?l.schoolStartTime:"",m="string"==typeof l?.schoolEndTime?l.schoolEndTime:"",b=l?.schoolDays??[],j="string"==typeof l?.shortTermCareCenterName?l.shortTermCareCenterName:"",w="string"==typeof l?.shortTermCareCenterStartTime?l.shortTermCareCenterStartTime:"",_="string"==typeof l?.shortTermCareCenterEndTime?l.shortTermCareCenterEndTime:"",y=l?.shortTermCareCenterDays??[],v=l?.primaryDisabilityName??"",C=l?.primaryDisabilityGrade??"",I=l?.primaryDisabilitySeverity??"",z=l?.secondaryDisabilityName??"",T=l?.secondaryDisabilityGrade??"",E=l?.secondaryDisabilitySeverity??"",k=l?.medicalHistory??"",S=l?.medicationInfo??"",O=l?.bedriddenStatus,A=l?.communicationAbility,$=l?.communicationOther??"",D=l?.wheelchairStatus,L=l?.maritalStatus,R=l?.familyStatus,N=l?.familyOther??"",P=l?.judgmentTimes??{},F=l?.otherInstitutionExperience??"",M=l?.disabilityNote??"",B=l?.overallOpinion??"",U="DISABILITY_ACTIVITY_SUPPORT"===e.currentServiceType,W=ip.every(e=>s.includes(e)),V=iu.every(e=>c.includes(e)),Y=ig.every(e=>h.includes(e));return(0,t.jsxs)(nx,{children:[(0,t.jsxs)(i_,{children:[(0,t.jsxs)(iv,{children:[(0,t.jsx)(iy,{children:"서비스 희망 시간"}),n?(0,t.jsx)(n_,{children:"수정 진행중"}):null]}),(0,t.jsxs)(iC,{children:[(0,t.jsx)(eJ.default,{sx:{fontSize:20}}),(0,t.jsx)(iI,{children:"시간대를 추가하고, 추가한 시간대를 클릭하면 수정하거나 삭제할 수 있습니다."})]}),n?(0,t.jsxs)(nj,{children:[(0,t.jsxs)(nw,{type:"button",onClick:e.cancelServiceConditionEdit,children:[(0,t.jsx)(ih.default,{sx:{fontSize:20}}),"수정 취소"]}),(0,t.jsxs)(nw,{type:"button",onClick:()=>void e.saveSelectedServiceConditionDraft(),children:[(0,t.jsx)(nr,{sx:{fontSize:20}}),"수정 저장"]})]}):(0,t.jsxs)(nw,{type:"button",onClick:e.startServiceConditionEdit,disabled:!0,children:[(0,t.jsx)(nf.default,{sx:{fontSize:20}}),"수정하기"]})]}),(0,t.jsx)(iz,{value:o,disabled:!n,readOnly:!n,onChange:t=>e.updateSelectedServiceConditionDraftTimes(t.target.value)}),(0,t.jsxs)(iT,{children:[(0,t.jsx)(iE,{children:"희망 서비스 시간"}),(0,t.jsxs)(ik,{children:[(0,t.jsx)(iO,{children:"총"}),(0,t.jsx)(iS,{value:void 0===p?"":String(p),placeholder:"00",disabled:!n,readOnly:!n}),(0,t.jsx)(iO,{children:"시간"})]})]}),(0,t.jsxs)(iw,{children:[(0,t.jsx)(iA,{children:"서비스 가능 지역 (복수 선택 가능)"}),(0,t.jsxs)(i$,{children:[(0,t.jsxs)(iD,{children:[(0,t.jsx)(iL,{disabled:!0,checked:W}),(0,t.jsx)(iN,{children:"전체 선택"})]}),ip.map(i=>(0,t.jsxs)(iD,{children:[(0,t.jsx)(iL,{disabled:!n,checked:s.includes(i),onChange:()=>{let t=s.includes(i)?s.filter(e=>e!==i):[...s,i];e.updateSelectedServiceConditionDraftRegions(t)}}),(0,t.jsx)(iN,{children:e1.default[i].label})]},i))]})]}),U?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(iw,{children:[(0,t.jsx)(iA,{children:"희망 활동 내용 (복수 선택 가능)"}),(0,t.jsxs)(i$,{children:[(0,t.jsxs)(iD,{children:[(0,t.jsx)(iL,{disabled:!0,checked:V}),(0,t.jsx)(iN,{children:"전체 선택"})]}),iu.map(e=>(0,t.jsxs)(iD,{children:[(0,t.jsx)(iL,{disabled:!0,checked:c.includes(e)}),(0,t.jsx)(iN,{children:"PHYSICAL_ACTIVITY_SUPPORT"===e?"신체 활동":e2.default[e].label.replace("활동"," 활동")})]},e))]})]}),(0,t.jsxs)(iw,{children:[(0,t.jsx)(iA,{children:"제공인력 희망 성별"}),(0,t.jsxs)(i$,{children:[(0,t.jsxs)(iD,{children:[(0,t.jsx)(iR,{disabled:!0,checked:void 0===f}),(0,t.jsx)(iN,{children:"전체"})]}),ix.map(e=>(0,t.jsxs)(iD,{children:[(0,t.jsx)(iR,{disabled:!0,checked:f===e}),(0,t.jsx)(iN,{children:e0.default[e].label})]},e))]})]}),(0,t.jsxs)(iw,{children:[(0,t.jsx)(iA,{children:"제공인력 희망 연령 (복수 선택 가능)"}),(0,t.jsxs)(i$,{children:[(0,t.jsxs)(iD,{children:[(0,t.jsx)(iL,{disabled:!0,checked:Y}),(0,t.jsx)(iN,{children:"전체 선택"})]}),ig.map(e=>(0,t.jsxs)(iD,{children:[(0,t.jsx)(iL,{disabled:!0,checked:h.includes(e)}),(0,t.jsx)(iN,{children:"TWENTIES_OR_YONGER"===e||"SEVENTIES_OR_OLDER"===e?eZ.default[e].label.replace(" 이하","").replace(" 이상",""):eZ.default[e].label})]},e))]})]}),(0,t.jsx)(iP,{children:"직장"}),(0,t.jsx)(iF,{children:(0,t.jsxs)(iM,{children:[(0,t.jsx)(iB,{children:"직장"}),(0,t.jsx)(r.default.Input.Text,{value:u,placeholder:"직장명을 입력하세요.",readOnly:!0,style:iX})]})}),(0,t.jsx)(iP,{children:"학교"}),(0,t.jsxs)(iF,{children:[(0,t.jsxs)(iM,{$width:395,children:[(0,t.jsx)(iB,{children:"학교명"}),(0,t.jsx)(r.default.Input.Text,{value:x,placeholder:"학교명을 입력하세요.",readOnly:!0,style:iX})]}),(0,t.jsxs)(iM,{$width:273,children:[(0,t.jsx)(iB,{children:"시작 시간"}),(0,t.jsx)(r.default.Input.Text,{type:"time",value:g,placeholder:"00:00",readOnly:!0,style:iX})]}),(0,t.jsx)(iU,{children:"~"}),(0,t.jsxs)(iM,{$width:273,children:[(0,t.jsx)(iB,{children:"종료 시간"}),(0,t.jsx)(r.default.Input.Text,{type:"time",value:m,placeholder:"00:00",readOnly:!0,style:iX})]})]}),(0,t.jsxs)(iW,{children:[(0,t.jsx)(iB,{children:"등교 요일"}),(0,t.jsx)(i$,{children:im.map(e=>(0,t.jsxs)(iD,{children:[(0,t.jsx)(iL,{disabled:!0,checked:b.includes(e)}),(0,t.jsx)(iN,{children:e6.default[e].label})]},e))})]}),(0,t.jsx)(iP,{children:"주단기보호센터"}),(0,t.jsxs)(iF,{children:[(0,t.jsxs)(iM,{$width:395,children:[(0,t.jsx)(iB,{children:"주단기보호센터명"}),(0,t.jsx)(r.default.Input.Text,{value:j,placeholder:"센터명을 입력하세요.",readOnly:!0,style:iX})]}),(0,t.jsxs)(iM,{$width:273,children:[(0,t.jsx)(iB,{children:"시작 시간"}),(0,t.jsx)(r.default.Input.Text,{type:"time",value:w,placeholder:"00:00",readOnly:!0,style:iX})]}),(0,t.jsx)(iU,{children:"~"}),(0,t.jsxs)(iM,{$width:273,children:[(0,t.jsx)(iB,{children:"종료 시간"}),(0,t.jsx)(r.default.Input.Text,{type:"time",value:_,placeholder:"00:00",readOnly:!0,style:iX})]})]}),(0,t.jsxs)(iW,{children:[(0,t.jsx)(iB,{children:"등원 요일"}),(0,t.jsx)(i$,{children:im.map(e=>(0,t.jsxs)(iD,{children:[(0,t.jsx)(iL,{disabled:!0,checked:y.includes(e)}),(0,t.jsx)(iN,{children:e6.default[e].label})]},e))})]}),(0,t.jsx)(iP,{children:"판정시간"}),(0,t.jsx)(iF,{children:ib.map(([e,n])=>(0,t.jsxs)(iM,{children:[(0,t.jsx)(iB,{children:n}),(0,t.jsxs)(iV,{children:[(0,t.jsx)(r.default.Input.Text,{value:P[e]??"",placeholder:"00",inputMode:"numeric",readOnly:!0,style:{...iX,width:140,textAlign:"center"}}),(0,t.jsx)(iY,{children:"시간"})]})]},e))}),(0,t.jsxs)(iF,{children:[(0,t.jsxs)(iM,{children:[(0,t.jsx)(iB,{children:"주장애명"}),(0,t.jsx)(r.default.Input.Text,{value:v,placeholder:"주장애명을 입력해주세요.",readOnly:!0,style:iX})]}),(0,t.jsxs)(iM,{children:[(0,t.jsx)(iB,{children:"장애급수"}),(0,t.jsx)(r.default.Input.Text,{value:C,placeholder:"장애급수를 입력해주세요.",readOnly:!0,style:iX})]}),(0,t.jsxs)(iM,{children:[(0,t.jsx)(iB,{children:"주장애 장애정도"}),(0,t.jsx)(r.default.Input.Text,{value:I,placeholder:"주장애 장애정도를 입력해주세요.",readOnly:!0,style:iX})]})]}),(0,t.jsxs)(iF,{children:[(0,t.jsxs)(iM,{children:[(0,t.jsx)(iB,{children:"부장애명"}),(0,t.jsx)(r.default.Input.Text,{value:z,placeholder:"부장애명을 입력해주세요.",readOnly:!0,style:iX})]}),(0,t.jsxs)(iM,{children:[(0,t.jsx)(iB,{children:"장애급수"}),(0,t.jsx)(r.default.Input.Text,{value:T,placeholder:"장애급수를 입력해주세요.",readOnly:!0,style:iX})]}),(0,t.jsxs)(iM,{children:[(0,t.jsx)(iB,{children:"부장애 장애정도"}),(0,t.jsx)(r.default.Input.Text,{value:E,placeholder:"부장애 장애정도를 입력해주세요.",readOnly:!0,style:iX})]})]}),(0,t.jsxs)(iF,{children:[(0,t.jsxs)(iM,{children:[(0,t.jsx)(iB,{children:"보유질환명"}),(0,t.jsx)(r.default.Input.Text,{value:k,placeholder:"보유질환에 대해 입력해주세요.",readOnly:!0,style:iX})]}),(0,t.jsxs)(iM,{children:[(0,t.jsx)(iB,{children:"투약정보"}),(0,t.jsx)(r.default.Input.Text,{value:S,placeholder:"투약정보에 대해 입력해주세요.",readOnly:!0,style:iX})]})]}),(0,t.jsxs)(iF,{children:[(0,t.jsxs)(iM,{$width:158,children:[(0,t.jsx)(iB,{children:"외상장애 여부"}),(0,t.jsxs)(i$,{children:[(0,t.jsxs)(iD,{children:[(0,t.jsx)(iR,{disabled:!0,checked:"NOT_APPLICABLE"===O}),(0,t.jsx)(iN,{children:"미해당"})]}),(0,t.jsxs)(iD,{children:[(0,t.jsx)(iR,{disabled:!0,checked:"APPLICABLE"===O}),(0,t.jsx)(iN,{children:"해당"})]})]})]}),(0,t.jsxs)(iM,{$width:443,children:[(0,t.jsx)(iB,{children:"의사소통"}),(0,t.jsxs)(i$,{children:[(0,t.jsxs)(iD,{children:[(0,t.jsx)(iR,{disabled:!0,checked:"AVAILABLE"===A}),(0,t.jsx)(iN,{children:"가능"})]}),(0,t.jsxs)(iD,{children:[(0,t.jsx)(iR,{disabled:!0,checked:"UNAVAILABLE"===A}),(0,t.jsx)(iN,{children:"불가능"})]}),(0,t.jsxs)(iD,{children:[(0,t.jsx)(iR,{disabled:!0,checked:"OTHER"===A}),(0,t.jsx)(iN,{children:"기타"})]}),(0,t.jsx)(r.default.Input.Text,{value:$,placeholder:"관련 내용을 입력해주세요.",readOnly:!0,style:{...iX,width:193}})]})]}),(0,t.jsxs)(iM,{$width:116,children:[(0,t.jsx)(iB,{children:"휠체어 유무"}),(0,t.jsxs)(i$,{children:[(0,t.jsxs)(iD,{children:[(0,t.jsx)(iR,{disabled:!0,checked:"AVAILABLE"===D}),(0,t.jsx)(iN,{children:"유"})]}),(0,t.jsxs)(iD,{children:[(0,t.jsx)(iR,{disabled:!0,checked:"UNAVAILABLE"===D}),(0,t.jsx)(iN,{children:"무"})]})]})]})]}),(0,t.jsxs)(iF,{children:[(0,t.jsxs)(iM,{$width:144,children:[(0,t.jsx)(iB,{children:"결혼여부"}),(0,t.jsxs)(i$,{children:[(0,t.jsxs)(iD,{children:[(0,t.jsx)(iR,{disabled:!0,checked:"SINGLE"===L}),(0,t.jsx)(iN,{children:"미혼"})]}),(0,t.jsxs)(iD,{children:[(0,t.jsx)(iR,{disabled:!0,checked:"MARRIED"===L}),(0,t.jsx)(iN,{children:"기혼"})]})]})]}),(0,t.jsxs)(iM,{$width:530,children:[(0,t.jsx)(iB,{children:"가족사항"}),(0,t.jsxs)(i$,{children:[[["LIVING_ALONE","독거"],["COUPLE","부부"],["SINGLE_PARENT","한부모"],["OTHER","기타"]].map(([e,n])=>(0,t.jsxs)(iD,{children:[(0,t.jsx)(iR,{disabled:!0,checked:R===e}),(0,t.jsx)(iN,{children:n})]},e)),(0,t.jsx)(r.default.Input.Text,{value:N,placeholder:"관련 내용을 입력해주세요.",readOnly:!0,style:{...iX,width:193}})]})]})]}),(0,t.jsx)(iP,{children:"(타기관) 이용경험"}),(0,t.jsx)(iH,{value:F,placeholder:"텍스트를 입력해주세요.",readOnly:!0}),(0,t.jsx)(iP,{children:"특이사항 (장애특성 및 일상생활)"}),(0,t.jsx)(iK,{value:M,placeholder:"특이사항을 입력해주세요.",readOnly:!0,style:iX}),(0,t.jsx)(iP,{children:"종합소견"}),(0,t.jsx)(iG,{value:B,placeholder:"종합소견을 입력해주세요.",readOnly:!0})]}):null]})}),iw=l.default.div.withConfig({componentId:"zh__sc-9e650079-0"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
  align-self: stretch;
`,i_=l.default.div.withConfig({componentId:"zh__sc-9e650079-1"})`
  display: flex;
  gap: 16px;
  align-items: center;
  align-self: stretch;

  height: 30px;
`,iy=l.default.div.withConfig({componentId:"zh__sc-9e650079-2"})`
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
  color: #0a0a0a;
`,iv=l.default.div.withConfig({componentId:"zh__sc-9e650079-3"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,iC=l.default.div.withConfig({componentId:"zh__sc-9e650079-4"})`
  display: flex;
  flex: 1 0 0;
  gap: 4px;
  align-items: center;

  color: #464c53;
`,iI=l.default.div.withConfig({componentId:"zh__sc-9e650079-5"})`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
`,iz=(0,l.default)(r.default.Input.TimeSlider).withConfig({componentId:"zh__sc-9e650079-6"})`
  width: 800px;
`,iT=l.default.div.withConfig({componentId:"zh__sc-9e650079-7"})`
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
  align-self: stretch;
`,iE=l.default.div.withConfig({componentId:"zh__sc-9e650079-8"})`
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  color: #000;
`,ik=l.default.div.withConfig({componentId:"zh__sc-9e650079-9"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,iS=(0,l.default)(r.default.Input.Text).withConfig({componentId:"zh__sc-9e650079-10"})`
  width: 59px;
  height: 36px;
  text-align: center;
`,iO=l.default.div.withConfig({componentId:"zh__sc-9e650079-11"})`
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  color: #000;
`,iA=l.default.div.withConfig({componentId:"zh__sc-9e650079-12"})`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: #000;
`,i$=l.default.div.withConfig({componentId:"zh__sc-9e650079-13"})`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 24px;
  align-items: center;

  min-height: 36px;
`,iD=l.default.div.withConfig({componentId:"zh__sc-9e650079-14"})`
  display: inline-flex;
  gap: 8px;
  align-items: center;
  min-height: 36px;
`,iL=(0,l.default)(r.default.Input.Check).attrs({$iconSizeRatio:1.5}).withConfig({componentId:"zh__sc-9e650079-15"})`
  width: 24px;
  height: 24px;
`,iR=(0,l.default)(r.default.Input.Radio).withConfig({componentId:"zh__sc-9e650079-16"})``,iN=l.default.span.withConfig({componentId:"zh__sc-9e650079-17"})`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: #000;
`,iP=l.default.div.withConfig({componentId:"zh__sc-9e650079-18"})`
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
  color: #0a0a0a;
`,iF=l.default.div.withConfig({componentId:"zh__sc-9e650079-19"})`
  display: flex;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;

  min-height: 59px;
`,iM=l.default.div.withConfig({componentId:"zh__sc-9e650079-20"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
  align-self: stretch;

  min-height: 59px;

  ${({$width:e})=>void 0!==e?`width: ${e}px;`:"flex: 1; min-width: 0;"}
`,iB=l.default.div.withConfig({componentId:"zh__sc-9e650079-21"})`
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  color: #000;
  text-align: center;
`,iU=l.default.span.withConfig({componentId:"zh__sc-9e650079-22"})`
  flex: 0 0 auto;
  align-self: center;
  padding-top: 24px;
`,iW=l.default.div.withConfig({componentId:"zh__sc-9e650079-23"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
  align-self: stretch;
`,iV=l.default.div.withConfig({componentId:"zh__sc-9e650079-24"})`
  display: flex;
  gap: 10px;
  align-items: center;
  width: 100%;
`,iY=l.default.span.withConfig({componentId:"zh__sc-9e650079-25"})`
  flex-shrink: 0;
  font-size: 16px;
  color: #000;
`,iH=(0,l.default)(r.default.Input.Textarea).withConfig({componentId:"zh__sc-9e650079-26"})`
  resize: vertical;

  width: 100%;
  min-height: 100px;
  padding: 12px 16px;

  font-size: 16px;
`,iG=(0,l.default)(iH).withConfig({componentId:"zh__sc-9e650079-27"})`
  min-height: 156px;
`,iK=(0,l.default)(r.default.Input.Text).withConfig({componentId:"zh__sc-9e650079-28"})`
  width: 100%;
  padding: 4px 16px;
  font-size: 16px;
`,iX={display:"flex",padding:"4px 16px",alignItems:"center",gap:"10px",flex:"1 0 0",alignSelf:"stretch",fontSize:16};var iq=e.i(24655);let iQ=(0,nd.default)((0,t.jsx)("path",{d:"M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9m-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8z"}),"History");function iJ({type:e,onClose:n}){let l=a.default.client.info.byClient.selectedClient,o=a.default.client.info.byClient.selectedClientId,[r,s]=(0,i.useState)([]),[c,f]=(0,i.useState)(!0);return(0,i.useEffect)(()=>{let t=!0;return(async()=>{var n,i,d,r,c;let h;if(null===o)return f(!1);if("address"===e){let e,r,c,h,[p,u]=await Promise.all([a.default.client.info.byClient.getClientChangeHistory(o,"address"),a.default.client.info.byClient.getClientChangeHistory(o,"addressDetail")]);if(!t||(f(!1),null!==p[0]||null!==u[0]||null===p[1]||null===u[1]))return;s((n=p[1],i=u[1],d=l?.createdAt??"",e=new Map,(r=(t,n)=>{t.slice().sort((e,t)=>new Date(e.createdAt).getTime()-new Date(t.createdAt).getTime()).forEach(({oldValue:t,newValue:i,createdAt:l},a)=>{if(0===a&&null!==t&&""!==t.trim()){let i=e.get(d)??{};i[n]=t.trim(),e.set(d,i)}if(null!==i&&""!==i.trim()){let t=e.get(l)??{};t[n]=i.trim(),e.set(l,t)}})})(n,"address"),r(i,"addressDetail"),c="",h="",Array.from(e.entries()).sort(([e],[t])=>new Date(e).getTime()-new Date(t).getTime()).map(([e,t])=>(c=t.address??c,h=t.addressDetail??h,{address:c,addressDetail:h,changedAt:e,value:""})).reverse()));return}let[p,u]=await a.default.client.info.byClient.getClientChangeHistory(o,"phoneNumber");t&&(f(!1),null===p&&null!==u&&s((r=u,c=l?.createdAt??"",h=[],r.slice().sort((e,t)=>new Date(e.createdAt).getTime()-new Date(t.createdAt).getTime()).forEach(({oldValue:e,newValue:t,createdAt:n})=>{null!==e&&""!==e.trim()&&h.push({address:"",addressDetail:"",changedAt:c,value:e.trim()}),null!==t&&""!==t.trim()&&h.push({address:"",addressDetail:"",changedAt:n,value:t.trim()})}),h.sort((e,t)=>new Date(t.changedAt).getTime()-new Date(e.changedAt).getTime()))))})(),()=>{t=!1}},[l?.createdAt,o,e]),(0,t.jsx)(d.default,{children:(0,t.jsxs)(iZ,{children:[(0,t.jsxs)(i0,{children:[(0,t.jsxs)(i1,{children:["address"===e?"주소/상세주소":"휴대폰"," 변경 이력 보기"]}),(0,t.jsxs)(i2,{type:"button",onClick:n,children:[(0,t.jsx)(S.X,{size:14}),"닫기"]})]}),(0,t.jsx)(i6,{children:c?(0,t.jsx)(i7,{children:"변경 이력을 불러오는 중입니다."}):(0,t.jsxs)(i4,{children:[(0,t.jsxs)(i5,{$isAddress:"address"===e,children:[(0,t.jsx)(i8,{children:"address"===e?"주소":"휴대폰"}),"address"===e?(0,t.jsx)(i8,{children:"상세주소"}):null,(0,t.jsx)(i8,{children:"변경 일자"})]}),0===r.length?(0,t.jsx)(i7,{children:"변경 이력이 없습니다."}):r.map(n=>{let i;return(0,t.jsxs)(i3,{$isAddress:"address"===e,children:[(0,t.jsx)(i9,{children:"address"===e?n.address:n.value}),"address"===e?(0,t.jsx)(i9,{children:n.addressDetail}):null,(0,t.jsx)(i9,{children:Number.isNaN((i=new Date(n.changedAt)).getTime())?"YYYY-MM-DD":`${i.getFullYear()}-${String(i.getMonth()+1).padStart(2,"0")}-${String(i.getDate()).padStart(2,"0")}`})]},`${n.changedAt}-${n.address}-${n.addressDetail}-${n.value}`)})]})})]})})}let iZ=l.default.div.withConfig({componentId:"zh__sc-cc1c5725-0"})`
  display: flex;
  flex-direction: column;

  width: min(980px, calc(100vw - 32px));
  border-radius: 8px;

  background: #fff;
  box-shadow: 0 4px 16px rgb(0 0 0 / 10%);
`,i0=l.default.div.withConfig({componentId:"zh__sc-cc1c5725-1"})`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 69px;
  padding: 16px;
  border-bottom: 1px solid #e5e7eb;
`,i1=l.default.h2.withConfig({componentId:"zh__sc-cc1c5725-2"})`
  margin: 0;

  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  color: #101828;
`,i2=(0,l.default)(r.default.Button.Outlined).withConfig({componentId:"zh__sc-cc1c5725-3"})`
  display: flex;
  gap: 6px;
  align-items: center;

  height: 34px;
  padding: 6px 16px;

  color: #4f39f6;
`,i6=l.default.div.withConfig({componentId:"zh__sc-cc1c5725-4"})`
  border-radius: 0 0 8px 8px;
  background: #f9fafb;
`,i4=l.default.div.withConfig({componentId:"zh__sc-cc1c5725-5"})`
  overflow: hidden;
  display: flex;
  flex-direction: column;

  margin: 28px 24px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
`,i5=l.default.div.withConfig({componentId:"zh__sc-cc1c5725-6"})`
  display: grid;
  grid-template-columns: ${({$isAddress:e})=>e?"repeat(3, minmax(0, 1fr))":"repeat(2, minmax(0, 1fr))"};
  min-height: 41px;
  background: #f8fafc;
`,i3=l.default.div.withConfig({componentId:"zh__sc-cc1c5725-7"})`
  display: grid;
  grid-template-columns: ${({$isAddress:e})=>e?"repeat(3, minmax(0, 1fr))":"repeat(2, minmax(0, 1fr))"};

  min-height: 81px;
  border-top: 1px solid #e5e7eb;

  background: white;
`,i9=l.default.div.withConfig({componentId:"zh__sc-cc1c5725-8"})`
  display: flex;
  align-items: center;
  justify-content: center;

  min-width: 0;
  padding: 12px 16px;

  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: #464c53;
  text-align: center;
  overflow-wrap: anywhere;
`,i8=(0,l.default)(i9).withConfig({componentId:"zh__sc-cc1c5725-9"})`
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 19px; /* 118.75% */
  color: #1c1d22;
  text-align: center;
`,i7=l.default.div.withConfig({componentId:"zh__sc-cc1c5725-10"})`
  padding: 32px 16px;
  font-size: 14px;
  color: #667085;
  text-align: center;
`;function le({values:e,errorFlags:n,errorMessages:l,isEditing:a,isDisabilityActivitySupport:d,onChangeField:o}){let[s,c]=(0,i.useState)(null),f=l?.mobileText??"",h=l?.contactText??"",p=l?.postCodeText??"";return(0,t.jsxs)(lt,{children:[(0,t.jsxs)(ln,{children:[(0,t.jsxs)(li,{children:["주민등록번호",(0,t.jsx)(lc,{value:e.residentRegistrationNumberText,readOnly:!0})]}),(0,t.jsxs)(li,{children:["성별",(0,t.jsx)(lc,{value:e.genderText,readOnly:!0})]}),(0,t.jsxs)(li,{children:[(0,t.jsxs)(ll,{children:[(0,t.jsx)(la,{children:"휴대폰"}),(0,t.jsxs)(ld,{type:"button",disabled:a,onClick:()=>c("phone"),children:[(0,t.jsx)(iQ,{sx:{fontSize:12}})," 변경 이력 보기"]})]}),(0,t.jsx)(lf,{value:e.mobileText,style:n?.mobileText===!0?lu:void 0,readOnly:!a,onChange:e=>o("mobileText",e)}),""!==f?(0,t.jsx)(lo,{children:f}):null]}),(0,t.jsxs)(li,{children:["연락처",(0,t.jsx)(lh,{value:e.contactText,style:n?.contactText===!0?lu:void 0,readOnly:!a,onChange:e=>o("contactText",e)}),""!==h?(0,t.jsx)(lo,{children:h}):null]})]}),(0,t.jsxs)(ln,{children:[(0,t.jsxs)(li,{children:[(0,t.jsxs)(ll,{children:[(0,t.jsx)(la,{children:"주소"}),(0,t.jsxs)(ld,{type:"button",disabled:a,onClick:()=>c("address"),children:[(0,t.jsx)(iQ,{sx:{fontSize:12}})," 변경 이력 보기"]})]}),(0,t.jsx)(lc,{value:e.addressBaseText,readOnly:!a,onChange:e=>o("addressBaseText",e.target.value)})]}),(0,t.jsxs)(li,{children:["상세주소",(0,t.jsx)(lc,{value:e.addressDetailText,readOnly:!a,onChange:e=>o("addressDetailText",e.target.value)})]}),(0,t.jsxs)(li,{children:["우편번호",(0,t.jsx)(lp,{value:e.postCodeText,style:n?.postCodeText===!0?lu:void 0,readOnly:!a,onChange:e=>o("postCodeText",e)}),""!==p?(0,t.jsx)(lo,{children:p}):null]})]}),(0,t.jsxs)(ln,{$hasVehicleGuidance:d,children:[(0,t.jsxs)(li,{children:["메모",(0,t.jsx)(lc,{value:e.memoText,readOnly:!a,onChange:e=>o("memoText",e.target.value)})]}),d?(0,t.jsxs)(li,{children:["차량 유류비 안내",(0,t.jsxs)(lr,{children:[(0,t.jsxs)(ls,{children:[(0,t.jsx)(r.default.Input.Radio,{disabled:!0,checked:!0===e.vehicleFuelCostGuided}),"완료"]}),(0,t.jsxs)(ls,{children:[(0,t.jsx)(r.default.Input.Radio,{disabled:!0,checked:!1===e.vehicleFuelCostGuided}),"미완료"]})]})]}):null]}),null!==s?(0,t.jsx)(iJ,{type:s,onClose:()=>c(null)}):null]})}let lt=l.default.div.withConfig({componentId:"zh__sc-481703bc-0"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`,ln=l.default.div.withConfig({componentId:"zh__sc-481703bc-1"})`
  display: grid;
  gap: 12px;
  width: 100%;

  &:nth-child(1) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  &:nth-child(2) {
    grid-template-columns: 1.2fr 1.2fr 1fr;
  }

  &:nth-child(3) {
    grid-template-columns: ${({$hasVehicleGuidance:e})=>!0===e?"minmax(0, 1fr) 191px":"minmax(0, 1fr)"};
  }

  @media (width <= 900px) {
    grid-template-columns: minmax(0, 1fr) !important;
  }
`,li=l.default.label.withConfig({componentId:"zh__sc-481703bc-2"})`
  display: flex;
  flex-direction: column;
  gap: 4px;

  min-width: 0;

  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: #000;
`,ll=l.default.div.withConfig({componentId:"zh__sc-481703bc-3"})`
  display: flex;
  gap: 2px;
  align-items: center;
  min-height: 20px;
`,la=l.default.span.withConfig({componentId:"zh__sc-481703bc-4"})`
  flex-shrink: 0;
`,ld=(0,l.default)(r.default.Button.Outlined).withConfig({componentId:"zh__sc-481703bc-5"})`
  gap: 2px;
  padding: 2px 4px;
  font-size: 12px;
  line-height: 1;
`,lo=l.default.div.withConfig({componentId:"zh__sc-481703bc-6"})`
  margin-top: 2px;
  font-size: 12px;
  line-height: 16px;
  color: #ff4d4f;
`,lr=l.default.div.withConfig({componentId:"zh__sc-481703bc-7"})`
  display: flex;
  gap: 16px;
  align-items: center;
  height: 36px;
`,ls=l.default.label.withConfig({componentId:"zh__sc-481703bc-8"})`
  display: inline-flex;
  gap: 4px;
  align-items: center;

  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: #000;
`,lc=(0,l.default)(ny).withConfig({componentId:"zh__sc-481703bc-9"})`
  height: 36px;
  padding: 0 16px;
  font-size: 16px;
  line-height: 20px;
`,lf=(0,l.default)(nv).withConfig({componentId:"zh__sc-481703bc-10"})`
  height: 36px;
  padding: 0 16px;
  font-size: 16px;
  line-height: 20px;
`,lh=(0,l.default)(nC).withConfig({componentId:"zh__sc-481703bc-11"})`
  height: 36px;
  padding: 0 16px;
  font-size: 16px;
  line-height: 20px;
`,lp=(0,l.default)(nI).withConfig({componentId:"zh__sc-481703bc-12"})`
  height: 36px;
  padding: 0 16px;
  font-size: 16px;
  line-height: 20px;
`,lu={borderColor:"#ff4d4f",background:"#fff5f5"};function lx({isOpen:e,onCancel:n,onConfirm:i,title:l="이용자 기본정보를 저장할까요?",description:a="수정된 정보는 연결된 서류의 자동입력 항목에 함께 반영됩니다.\n이미 출력했거나 최종확인한 서류는 다시 확인이 필요할 수 있습니다.",cancelLabel:o="취소하기",confirmLabel:r="저장 및 모든 서류에 반영"}){return e?(0,t.jsx)(d.default,{children:(0,t.jsxs)(lg,{children:[(0,t.jsxs)(lm,{children:[(0,t.jsx)(lb,{children:l}),(0,t.jsx)(lj,{children:a})]}),(0,t.jsxs)(lw,{children:[(0,t.jsx)(ly,{onClick:n,children:o}),(0,t.jsx)(lv,{onClick:i,children:r})]})]})}):null}let lg=l.default.div.withConfig({componentId:"zh__sc-952cde00-0"})`
  display: inline-flex;
  flex-direction: column;
  gap: 48px;
  align-items: center;
  justify-content: center;

  padding: 32px 24px;
  border: 1px solid #e5e9ef;
  border-radius: 8px;

  background: #fff;
  box-shadow: 0 4px 4px 0 rgb(0 0 0 / 10%);
`,lm=l.default.div.withConfig({componentId:"zh__sc-952cde00-1"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;
`,lb=l.default.p.withConfig({componentId:"zh__sc-952cde00-2"})`
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #000;
`,lj=l.default.p.withConfig({componentId:"zh__sc-952cde00-3"})`
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #000;
  white-space: pre-line;
`,lw=l.default.div.withConfig({componentId:"zh__sc-952cde00-4"})`
  display: flex;
  gap: 12px;
  align-items: center;
  align-self: stretch;
  justify-content: flex-end;
`,l_=l.css`
  height: 36px;
  padding: 8px 16px;
  font-size: 16px;
`,ly=(0,l.default)(r.default.Button.Outlined).withConfig({componentId:"zh__sc-952cde00-5"})`
  ${l_}
`,lv=(0,l.default)(r.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-952cde00-6"})`
  ${l_}
`,lC=(0,n.observer)(function({detailFormValues:e,errorFlags:n,errorMessages:l,isEditing:d,onStartEdit:o,onCancelEdit:r,requestOpenSaveConfirm:s,requestSaveEdit:c,onChangeField:f}){let h=a.default.client.info.byClient,[p,u]=(0,i.useState)(!1),x=(0,i.useRef)(null);(0,i.useEffect)(()=>{if(!d||p)return;let e=e=>{let t=e.target,n=t instanceof Node&&null!==x.current&&x.current.contains(t),i=t instanceof Element&&(null!==t.closest('[role="listbox"]')||null!==t.closest('[role="option"]')||null!==t.closest("[data-radix-select-viewport]")||null!==t.closest("[data-radix-popper-content-wrapper]"));n||i||r()};return document.addEventListener("pointerdown",e),()=>{document.removeEventListener("pointerdown",e)}},[p,d,r]);let g=async()=>{!0===await c()&&u(!1)};return(0,t.jsxs)(nx,{ref:x,children:[(0,t.jsx)(ng,{children:(0,t.jsxs)(nm,{children:[(0,t.jsxs)(lI,{children:[(0,t.jsx)(nb,{children:"인적사항"}),d?(0,t.jsx)(n_,{children:"수정 진행중"}):null]}),d?(0,t.jsxs)(nj,{children:[(0,t.jsxs)(nw,{type:"button",onClick:r,children:[(0,t.jsx)(ih.default,{sx:{fontSize:20}}),"수정 취소"]}),(0,t.jsxs)(nw,{type:"button",onClick:()=>{s()&&u(!0)},children:[(0,t.jsx)(iq.default,{sx:{fontSize:20}}),"수정 저장"]})]}):(0,t.jsxs)(nw,{type:"button",onClick:o,children:[(0,t.jsx)(nf.default,{sx:{fontSize:20}}),"수정하기"]})]})}),(0,t.jsx)(le,{values:e,isDisabilityActivitySupport:"DISABILITY_ACTIVITY_SUPPORT"===h.currentServiceType,errorFlags:n,errorMessages:l,isEditing:d,onChangeField:f}),(0,t.jsx)(lx,{isOpen:p,onCancel:()=>{u(!1)},onConfirm:()=>{g()}})]})}),lI=l.default.div.withConfig({componentId:"zh__sc-6d1cdb58-0"})`
  display: flex;
  gap: 10px;
  align-items: center;
`,lz=(0,n.observer)(function(){let e=a.default.client.info.byClient,n=e.selectedClientId,l=e.selectedClient,d=e.selectedContract,o=l?.name??"",r=e.selectedUserInfoDraft,s=e.selectedUserInfoValidationErrors,c=e.isUserInfoEditing,f=e.selectedGuardianList,h=a.default.client.info.byClient.selectedGuardianId,p=(0,i.useRef)(null),u=(0,i.useRef)(null),x=(0,i.useMemo)(()=>({genderText:l?.gender==="MALE"?"남성":l?.gender==="FEMALE"?"여성":"",residentRegistrationNumberText:l?.residentRegistrationNumber??"",contactText:l?.contact??"",mobileText:l?.phoneNumber??"",addressBaseText:l?.address??"",addressDetailText:l?.addressDetail??"",postCodeText:l?.postCode??"",memoText:l?.note??"",vehicleFuelCostGuided:null!==d&&"vehicleFuelCostGuided"in d&&"boolean"==typeof d.vehicleFuelCostGuided?d.vehicleFuelCostGuided:void 0}),[l?.gender,l?.residentRegistrationNumber,l?.contact,l?.phoneNumber,l?.address,l?.addressDetail,l?.postCode,l?.note,d]);if((0,i.useEffect)(()=>{p.current?.scrollTo({top:0,behavior:"auto"})},[n]),(0,i.useEffect)(()=>(e.setToastContainer(e.isDeleteConfirmOpen?u.current:p.current),()=>{e.setToastContainer(null)}),[e,e.isDeleteConfirmOpen]),null===n)return(0,t.jsx)(nu,{children:"서비스를 선택한 뒤 이용자를 선택해 주세요."});let g=async()=>e.saveSelectedUserInfoDraft(),m={...x,contactText:c?r.contact??x.contactText:x.contactText,mobileText:c?r.phoneNumber??x.mobileText:x.mobileText,addressBaseText:c?r.address??x.addressBaseText:x.addressBaseText,addressDetailText:c?r.addressDetail??x.addressDetailText:x.addressDetailText,postCodeText:c?r.postCode??x.postCodeText:x.postCodeText,memoText:c?r.note??x.memoText:x.memoText},b={mobileText:void 0!==s.phoneNumber,contactText:void 0!==s.contact,postCodeText:void 0!==s.postCode},j={mobileText:s.phoneNumber,contactText:s.contact,postCodeText:s.postCode};return(0,t.jsxs)(np,{ref:p,children:[(0,t.jsx)(lC,{detailFormValues:m,isEditing:c,onStartEdit:()=>{e.startUserInfoEdit()},onCancelEdit:()=>{e.cancelUserInfoEdit()},requestOpenSaveConfirm:()=>e.validateSelectedUserInfoDraftBeforeConfirm(),requestSaveEdit:g,errorFlags:b,errorMessages:j,onChangeField:(t,n)=>{"contactText"===t?e.updateSelectedUserInfoDraftField("contact",n):"mobileText"===t?e.updateSelectedUserInfoDraftField("phoneNumber",n):"addressBaseText"===t?e.updateSelectedUserInfoDraftField("address",n):"addressDetailText"===t?e.updateSelectedUserInfoDraftField("addressDetail",n):"postCodeText"===t?e.updateSelectedUserInfoDraftField("postCode",n):"memoText"===t&&e.updateSelectedUserInfoDraftField("note",n)}}),(0,t.jsx)(nL,{guardianList:f,selectedGuardianId:h,onAddGuardian:t=>e.createGuardian({name:t.name,phoneNumber:t.phone,relationship:t.relation,address:t.address}),onUpdateGuardian:(t,n)=>e.updateGuardian(t,{name:n.name,phoneNumber:n.phone,relationship:n.relation,address:n.address})}),(0,t.jsx)(ij,{}),(0,t.jsxs)(nz,{type:"button",disabled:e.isDeleting,onClick:()=>{e.openDeleteConfirm()},children:[(0,t.jsx)(O.default.Delete,{size:16}),"삭제하기"]}),e.isDeleteConfirmOpen?(0,t.jsx)(nT,{children:(0,t.jsxs)(nE,{ref:u,children:[(0,t.jsxs)(nk,{children:[(0,t.jsxs)(nS,{children:[o," 이용자를 삭제하시겠어요?"]}),(0,t.jsxs)(nO,{children:["삭제한 이용자 정보는 복구할 수 없습니다.",(0,t.jsx)("br",{}),"서비스를 제공 받은 이력이 없는 이용자만 삭제할 수 있습니다."]})]}),(0,t.jsxs)(nA,{children:[(0,t.jsx)(n$,{type:"button",disabled:e.isDeleting,onClick:()=>{e.closeDeleteConfirm()},children:"취소하기"}),(0,t.jsx)(nD,{type:"button",disabled:e.isDeleting,onClick:()=>{e.confirmDelete()},children:"삭제하기"})]})]})}):null]})});var lT=e.i(23416),lE=e.i(98733);l.default.div.withConfig({componentId:"zh__sc-b19bd4fc-0"})`
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

  background: #fcfdff;
`,l.default.div.withConfig({componentId:"zh__sc-b19bd4fc-1"})`
  padding: 16px;
  border: 1px dashed #d1d5db;
  border-radius: 10px;

  font-size: 14px;
  color: #6b7280;
`;let lk=l.default.div.withConfig({componentId:"zh__sc-b19bd4fc-2"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;

  width: 100%;
`,lS=l.default.div.withConfig({componentId:"zh__sc-b19bd4fc-3"})`
  display: flex;
  align-items: center;
  align-self: stretch;
  min-height: 40px;
`,lO=l.default.div.withConfig({componentId:"zh__sc-b19bd4fc-4"})`
  display: flex;
  flex: 1 0 0;
  align-items: center;
  justify-content: space-between;

  min-width: 0;
  min-height: 40px;
`,lA=l.default.h3.withConfig({componentId:"zh__sc-b19bd4fc-5"})`
  margin: 0;

  font-size: 18px;
  font-weight: 700;
  line-height: 20px;
  color: #101828;
`,l$=l.default.div.withConfig({componentId:"zh__sc-b19bd4fc-6"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,lD=(0,l.default)(r.default.Button.Outlined).withConfig({componentId:"zh__sc-b19bd4fc-7"})`
  display: flex;
  gap: 4px;
  align-items: center;

  height: 40px;
  padding: 8px 16px;
  border-radius: 6px;

  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: #4f39f6;

  &:disabled {
    cursor: not-allowed;

    border-color: #d1d5db;

    color: #9ca3af;

    opacity: 1;
    background: #f9fafb;
  }
`,lL=l.default.span.withConfig({componentId:"zh__sc-b19bd4fc-8"})`
  padding: 2px 12px;
  border: 1px solid #d1d5db;
  border-radius: 99px;

  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: #45464e;
`;l.default.span.withConfig({componentId:"zh__sc-b19bd4fc-9"})`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;

  padding: 8px;
  border-radius: 99px;

  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  color: #fff;
  white-space: nowrap;

  background: #4f39f6;
`,(0,l.default)(r.default.Input.Text).withConfig({componentId:"zh__sc-b19bd4fc-10"})`
  width: 100%;
  height: 28px;
  padding: 0 16px;

  font-size: 16px;
  line-height: 16px;
`,(0,l.default)(r.default.Input.Phone).withConfig({componentId:"zh__sc-b19bd4fc-11"})`
  width: 100%;
  height: 28px;
  padding: 0 16px;

  font-size: 16px;
  line-height: 16px;
`,(0,l.default)(r.default.Input.Contact).withConfig({componentId:"zh__sc-b19bd4fc-12"})`
  width: 100%;
  height: 28px;
  padding: 0 16px;

  font-size: 16px;
  line-height: 16px;
`,(0,l.default)(r.default.Input.PostCode).withConfig({componentId:"zh__sc-b19bd4fc-13"})`
  width: 100%;
  height: 28px;
  padding: 0 16px;

  font-size: 16px;
  line-height: 16px;
`,(0,l.default)(r.default.Input.Select).withConfig({componentId:"zh__sc-b19bd4fc-14"})`
  width: 100%;
  height: 28px;
  font-size: 16px;
  line-height: 16px;
`,(0,l.default)(r.default.Button.Outlined).withConfig({componentId:"zh__sc-b19bd4fc-15"})`
  display: flex;
  gap: 8px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,l.default.div.withConfig({componentId:"zh__sc-b19bd4fc-16"})`
  position: fixed;
  z-index: 1000;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgb(10 10 10 / 35%);
`,l.default.div.withConfig({componentId:"zh__sc-b19bd4fc-17"})`
  position: relative;

  display: inline-flex;
  flex-direction: column;
  gap: 48px;
  align-items: center;
  justify-content: center;

  padding: 32px 24px;
  border: 1px solid #e5e9ef;
  border-radius: 8px;

  background: #fff;
  box-shadow: 0 4px 4px 0 rgb(0 0 0 / 10%);
`,l.default.div.withConfig({componentId:"zh__sc-b19bd4fc-18"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;
`,l.default.h2.withConfig({componentId:"zh__sc-b19bd4fc-19"})`
  align-self: stretch;

  margin: 0;

  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  color: #000;
`,l.default.p.withConfig({componentId:"zh__sc-b19bd4fc-20"})`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: #000;
`,l.default.div.withConfig({componentId:"zh__sc-b19bd4fc-21"})`
  display: flex;
  gap: 12px;
  align-items: center;
  align-self: stretch;
  justify-content: flex-end;
`,(0,l.default)(r.default.Button.Outlined).withConfig({componentId:"zh__sc-b19bd4fc-22"})`
  height: 36px;
  padding: 8px 16px;
`,(0,l.default)(r.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-b19bd4fc-23"})`
  height: 36px;
  padding: 8px 16px;
`;let lR=(0,n.observer)(function(){let e=a.default.client.info.byClient,n=a.default.data.serviceWorker.detail,l=e.selectedContract?.serviceWorkerId??null,d=n.data,o=null!==l&&d?.id===l;return(0,i.useEffect)(()=>{null!==l&&n.setQuery({id:l})},[n,l]),(0,t.jsxs)(lk,{children:[(0,t.jsx)(lS,{children:(0,t.jsxs)(lO,{children:[(0,t.jsx)(lA,{children:"연결된 제공인력 정보"}),(0,t.jsxs)(l$,{children:[(0,t.jsxs)(lD,{type:"button",disabled:!0,children:[(0,t.jsx)(nf.default,{sx:{fontSize:20}}),"수정하기"]}),(0,t.jsxs)(lD,{type:"button",disabled:!0,children:[(0,t.jsx)(no,{sx:{fontSize:20}}),"추가하기"]})]})]})}),o?(0,t.jsx)(lP,{children:(0,t.jsxs)(lN,{$isSelected:o,children:[(0,t.jsx)(lF,{children:(0,t.jsx)(lM,{children:d.name})}),(0,t.jsxs)(lB,{children:[(0,t.jsxs)(lU,{children:[(0,t.jsx)(lW,{children:"주소"}),(0,t.jsx)(lV,{}),(0,t.jsx)(lY,{children:[d.address,d.addressDetail].filter(e=>null!==e&&""!==e.trim()).join(" ")||"-"})]}),(0,t.jsxs)(lU,{children:[(0,t.jsx)(lW,{children:"연락처"}),(0,t.jsx)(lV,{}),(0,t.jsx)(lY,{children:d.phoneNumber??d.contact??"-"})]}),(0,t.jsxs)(lU,{children:[(0,t.jsx)(lW,{children:"이메일"}),(0,t.jsx)(lV,{}),(0,t.jsx)(lY,{children:"-"})]})]}),(0,t.jsx)(lH,{children:(0,t.jsx)(lG,{children:"연결됨"})})]})}):(0,t.jsxs)(lK,{children:[(0,t.jsx)(nh.default,{sx:{fontSize:24,color:"#494F53"}}),(0,t.jsxs)(lX,{children:[(0,t.jsx)(lq,{children:"연결된 제공인력이 없습니다."}),(0,t.jsx)(lQ,{children:"[+추가하기] 버튼을 클릭해 제공인력을 연결해주세요."})]})]})]})}),lN=l.default.div.withConfig({componentId:"zh__sc-bfa96d56-0"})`
  position: relative;

  display: flex;
  flex: 0 0 319px;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;

  width: 319px;
  height: 186px;
  padding: 16px;
  border: 1px solid ${e=>e.$isSelected?"#5635ff":"#e5e9ef"};
  border-radius: 8px;

  background: ${e=>e.$isSelected?"#f7f5ff":"#fff"};
  box-shadow: ${e=>e.$isSelected?"0 0 3px #ddd8ff":"none"};
`,lP=l.default.div.withConfig({componentId:"zh__sc-bfa96d56-1"})`
  overflow: auto hidden;
  display: flex;
  flex-wrap: nowrap;
  gap: 10px;

  width: 100%;
`,lF=l.default.div.withConfig({componentId:"zh__sc-bfa96d56-2"})`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;

  width: 100%;
`,lM=l.default.h4.withConfig({componentId:"zh__sc-bfa96d56-3"})`
  margin: 0;

  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  color: #0a0a0a;
`,lB=l.default.div.withConfig({componentId:"zh__sc-bfa96d56-4"})`
  display: flex;
  flex-direction: column;
  gap: 4px;

  width: 100%;
  padding-bottom: 36px;
`,lU=l.default.div.withConfig({componentId:"zh__sc-bfa96d56-5"})`
  display: flex;
  gap: 8px;
  align-items: flex-start;
  width: 100%;
`,lW=l.default.span.withConfig({componentId:"zh__sc-bfa96d56-6"})`
  width: 52px;
  min-width: 52px;

  font-size: 14px;
  line-height: 20px;
  color: #0a0a0a;
`,lV=l.default.span.withConfig({componentId:"zh__sc-bfa96d56-7"})`
  width: 1px;
  height: 20px;
  background: #e5e7eb;
`,lY=l.default.span.withConfig({componentId:"zh__sc-bfa96d56-8"})`
  min-width: 0;

  font-size: 14px;
  line-height: 20px;
  color: #45464e;
  overflow-wrap: anywhere;
`,lH=l.default.div.withConfig({componentId:"zh__sc-bfa96d56-9"})`
  position: absolute;
  right: 16px;
  bottom: 16px;

  display: flex;
  justify-content: flex-end;
`,lG=l.default.div.withConfig({componentId:"zh__sc-bfa96d56-10"})`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 8px;
  border-radius: 999px;

  font-size: 16px;
  line-height: 16px;
  color: #fff;
  letter-spacing: -1px;

  background: #4f39f6;
`,lK=l.default.div.withConfig({componentId:"zh__sc-bfa96d56-11"})`
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
`,lX=l.default.div.withConfig({componentId:"zh__sc-bfa96d56-12"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: center;
`,lq=l.default.div.withConfig({componentId:"zh__sc-bfa96d56-13"})`
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  color: #494f53;
`,lQ=l.default.div.withConfig({componentId:"zh__sc-bfa96d56-14"})`
  font-size: 14px;
  line-height: 20px;
  color: #494f53;
  text-align: center;
`;var lJ=e.i(93384),lZ=e.i(95649),l0=e.i(2615);function l1(e){return""===e.trim()?"-":e}let l2=["수급자, 차상위","120% 이하","120~160%","160% 초과"],l6=["meal","nutrition"];function l4(e){return`${e.toLocaleString("ko-KR")} 원`}function l5(e){return`${e.toLocaleString("ko-KR")}원`}function l3({serviceCode:e,grade:n,paymentMethodText:l,paymentDayText:a,monthlyUsage:d,serviceFees:o}){let[r,s]=(0,i.useState)(!0),c=e??"meal",f=null===n||!1===Number.isInteger(n)?null:Math.max(0,n-1),h=`${new Date().getMonth()+1}월`,p=d?.providedCount??0,u=d?.scheduledCount??0,x=d?.expectedGovernmentSupportAmount??0,g=d?.expectedCopaymentAmount??0,m=d?.expectedTotalAmount??0,b=u>0?Math.floor(x/u):0,j=u>0?Math.floor(g/u):0;return(0,t.jsxs)(lk,{children:[(0,t.jsx)(lS,{children:(0,t.jsx)(lO,{children:(0,t.jsxs)(l9,{children:[(0,t.jsx)(lA,{children:"계약서 세부내역"}),(0,t.jsx)(lL,{children:"30일 기준"})]})})}),(0,t.jsxs)(l8,{children:[(0,t.jsxs)(l7,{children:[(0,t.jsxs)(ae,{children:["납부방법",(0,t.jsx)(at,{children:l1(l)})]}),(0,t.jsxs)(ae,{children:["납입일",(0,t.jsx)(at,{children:l1(a)})]})]}),(0,t.jsxs)(an,{children:[(0,t.jsxs)(ai,{children:[(0,t.jsxs)(al,{children:[(0,t.jsxs)(aa,{children:[(0,t.jsxs)(ad,{children:[h," 사회서비스 금액 총계"]}),(0,t.jsxs)(ao,{children:[(0,t.jsxs)("span",{children:["정부지원금(",l5(x),")"]}),(0,t.jsx)("span",{"aria-hidden":!0,children:"+"}),(0,t.jsxs)("span",{children:["본인부담금 결제액(",l5(g),")"]})]})]}),(0,t.jsxs)(ar,{children:["총 ",l4(m)]})]}),(0,t.jsx)(as,{}),(0,t.jsxs)(ac,{children:[(0,t.jsx)(af,{children:"세부내역"}),(0,t.jsxs)(au,{children:[(0,t.jsxs)(ax,{children:[(0,t.jsxs)(ag,{children:[(0,t.jsx)(ah,{children:"정부지원금(바우처) 결제액"}),(0,t.jsxs)(am,{children:[(0,t.jsxs)(ab,{children:["1회당 정부지원금(",l5(b),")"]}),(0,t.jsx)(ab,{children:"x"}),(0,t.jsxs)(ab,{$highlighted:!0,children:["당월 이용 ",p,"회"]})]})]}),(0,t.jsx)(ap,{children:l4(x)})]}),(0,t.jsxs)(ax,{children:[(0,t.jsxs)(ag,{children:[(0,t.jsx)(ah,{children:"본인부담금 결제액"}),(0,t.jsxs)(am,{children:[(0,t.jsxs)(ab,{children:["1회당 본인 부담금(",l5(j),")"]}),(0,t.jsx)(ab,{children:"x"}),(0,t.jsxs)(ab,{$highlighted:!0,children:["당월 이용 ",p,"회"]})]})]}),(0,t.jsx)(ap,{children:l4(g)})]})]})]})]}),(0,t.jsxs)(aj,{children:[(0,t.jsx)(aw,{children:(0,t.jsxs)(a_,{type:"button","aria-controls":"monthly-fee-guide-table","aria-expanded":r,onClick:()=>{s(e=>!e)},children:[(0,t.jsxs)(ay,{children:[(0,t.jsx)(lJ.default,{sx:{fontSize:24,color:"#1C1B1F"}}),(0,t.jsxs)(aI,{children:["월별 서비스 이용금액 안내 예시 (",n??"-","등급/",u,"회 기준 )"]})]}),!0===r?(0,t.jsx)(av,{"aria-hidden":!0,htmlColor:"#0a0a0a"}):(0,t.jsx)(aC,{"aria-hidden":!0,htmlColor:"#0a0a0a"})]})}),!0===r?(0,t.jsxs)(az,{id:"monthly-fee-guide-table",children:[(0,t.jsxs)("colgroup",{children:[(0,t.jsx)("col",{style:{width:"23px"}}),(0,t.jsx)("col",{style:{width:"40px"}}),(0,t.jsx)("col",{style:{width:"27px"}}),(0,t.jsx)("col",{style:{width:"103px"}}),(0,t.jsx)("col",{style:{width:"auto"}}),(0,t.jsx)("col",{style:{width:"auto"}}),(0,t.jsx)("col",{style:{width:"auto"}})]}),(0,t.jsxs)("thead",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)(aT,{colSpan:3,rowSpan:2,children:"서비스 종류"}),(0,t.jsx)(aT,{rowSpan:2,children:"바우처 총액 (월)"}),(0,t.jsx)(aT,{colSpan:3,children:"소득수준별 금액"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)(aT,{children:"소득수준"}),(0,t.jsx)(aT,{children:"본인부담금"}),(0,t.jsx)(aT,{children:"정부지원금"})]})]}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)(ak,{rowSpan:9}),(0,t.jsx)(aE,{colSpan:6,children:"본인부담 : 월 단위 결제"})]}),l6.flatMap(e=>(o[e]??[]).map((n,i)=>{let l=null!==f&&e===c&&i===f;return(0,t.jsxs)("tr",{children:["meal"===e&&0===i?(0,t.jsxs)(aS,{rowSpan:8,children:[(0,t.jsx)("div",{style:{fontSize:10,fontWeight:400},children:"중장년, 청년"}),(0,t.jsx)("span",{children:"식사∙영양관리"})]}):null,0===i?(0,t.jsx)(aO,{rowSpan:4,children:"meal"===e?"식사관리":"영양관리"}):null,0===i?(0,t.jsx)(aA,{rowSpan:4,children:l5((o[e]??[]).reduce((e,t)=>e+t.copay+t.voucher,0))}):null,(0,t.jsx)(a$,{$highlighted:l,$isFirstHighlightCell:!0,children:l2[i]}),(0,t.jsx)(a$,{$highlighted:l,children:l5(n.copay)}),(0,t.jsx)(a$,{$highlighted:l,$isLastHighlightCell:!0,children:l5(n.voucher)})]},`${e}-${l2[i]}`)}))]})]}):null]})]})]})]})}let l9=l.default.div.withConfig({componentId:"zh__sc-27bdacd5-0"})`
  display: flex;
  gap: 10px;
  align-items: center;
`,l8=l.default.div.withConfig({componentId:"zh__sc-27bdacd5-1"})`
  display: flex;
  gap: 20px;
  align-items: flex-start;

  width: 100%;
  padding: 20px 16px;
  border: 1px solid #e5e9ef;
  border-radius: 8px;

  background: #f6f8ff;
`,l7=l.default.div.withConfig({componentId:"zh__sc-27bdacd5-2"})`
  display: flex;
  flex-direction: column;
  gap: 16px;

  width: 212px;
  min-width: 0;
`,ae=l.default.label.withConfig({componentId:"zh__sc-27bdacd5-3"})`
  display: flex;
  flex-direction: column;
  gap: 4px;

  min-width: 0;

  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: #0a0a0a;
`,at=l.default.div.withConfig({componentId:"zh__sc-27bdacd5-4"})`
  overflow: hidden;
  display: flex;
  align-items: center;

  height: 36px;
  padding: 0 16px;
  border: 1px solid #d1d5db;
  border-radius: 4px;

  font-size: 16px;
  line-height: 20px;
  color: #0a0a0a;
  text-overflow: ellipsis;
  white-space: nowrap;

  background: #f9fafb;
`,an=l.default.div.withConfig({componentId:"zh__sc-27bdacd5-5"})`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 12px;

  min-width: 0;
`,ai=l.default.div.withConfig({componentId:"zh__sc-27bdacd5-6"})`
  display: flex;
  flex-direction: column;
  gap: 24px;

  width: 100%;
  min-width: 0;
  padding: 20px 16px;
  border: 1px solid #cdd8ec;
  border-radius: 8px;

  background: #fff;
`,al=l.default.div.withConfig({componentId:"zh__sc-27bdacd5-7"})`
  display: flex;
  gap: 16px;
  align-items: flex-start;
  justify-content: space-between;

  width: 100%;
`,aa=l.default.div.withConfig({componentId:"zh__sc-27bdacd5-8"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 0;
`,ad=l.default.h4.withConfig({componentId:"zh__sc-27bdacd5-9"})`
  margin: 0;

  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  color: #0a0a0a;
`,ao=l.default.div.withConfig({componentId:"zh__sc-27bdacd5-10"})`
  display: flex;
  gap: 4px;
  align-items: center;

  font-size: 16px;
  line-height: 20px;
  color: #0a0a0a;

  span {
    white-space: nowrap;
  }

  span:first-child,
  span:last-child {
    font-size: 14px;
  }
`,ar=l.default.div.withConfig({componentId:"zh__sc-27bdacd5-11"})`
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  color: #e7000b;
`,as=l.default.hr.withConfig({componentId:"zh__sc-27bdacd5-12"})`
  width: 100%;
  margin: 0;
  border: 0;
  border-top: 1px solid #e5e7eb;
`,ac=l.default.div.withConfig({componentId:"zh__sc-27bdacd5-13"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`,af=l.default.div.withConfig({componentId:"zh__sc-27bdacd5-14"})`
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  color: #0a0a0a;
`,ah=l.default.div.withConfig({componentId:"zh__sc-27bdacd5-15"})`
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  color: #0a0a0a;
`,ap=l.default.div.withConfig({componentId:"zh__sc-27bdacd5-16"})`
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  color: #0a0a0a;
`,au=l.default.div.withConfig({componentId:"zh__sc-27bdacd5-17"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`,ax=l.default.div.withConfig({componentId:"zh__sc-27bdacd5-18"})`
  display: flex;
  gap: 16px;
  align-items: flex-start;
  justify-content: space-between;

  width: 100%;
`,ag=l.default.div.withConfig({componentId:"zh__sc-27bdacd5-19"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 0;
`,am=l.default.div.withConfig({componentId:"zh__sc-27bdacd5-20"})`
  display: flex;
  gap: 4px;
  align-items: center;
  min-width: 0;
`,ab=l.default.span.withConfig({componentId:"zh__sc-27bdacd5-21"})`
  font-size: 14px;
  font-weight: ${({$highlighted:e})=>!0===e?700:400};
  line-height: 20px;
  color: ${({$highlighted:e})=>!0===e?"#e7000b":"#0a0a0a"};
  white-space: nowrap;
`,aj=l.default.div.withConfig({componentId:"zh__sc-27bdacd5-22"})`
  display: flex;
  flex-direction: column;
  gap: 24px;

  width: 100%;
  padding: 20px 16px;
  border: 1px solid #e5e9ef;
  border-radius: 8px;

  background: #fff;
`,aw=l.default.div.withConfig({componentId:"zh__sc-27bdacd5-23"})`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: space-between;

  width: 100%;
`,a_=l.default.button.withConfig({componentId:"zh__sc-27bdacd5-24"})`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 0;
  border: 0;

  background: transparent;
`,ay=l.default.div.withConfig({componentId:"zh__sc-27bdacd5-25"})`
  display: flex;
  gap: 4px;
  align-items: center;
  min-width: 0;
`,av=(0,l.default)(l0.default).withConfig({componentId:"zh__sc-27bdacd5-26"})`
  flex-shrink: 0;
  font-size: 24px;
`,aC=(0,l.default)(lZ.default).withConfig({componentId:"zh__sc-27bdacd5-27"})`
  flex-shrink: 0;
  font-size: 24px;
`,aI=l.default.h4.withConfig({componentId:"zh__sc-27bdacd5-28"})`
  margin: 0;

  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  color: #494f53;
  white-space: nowrap;
`,az=l.default.table.withConfig({componentId:"zh__sc-27bdacd5-29"})`
  table-layout: fixed;
  border-collapse: collapse;
  width: 100%;
  border: 1px solid #58616a;

  @media (width <= 900px) {
    font-size: 12px;
  }
`,aT=l.default.th.withConfig({componentId:"zh__sc-27bdacd5-30"})`
  padding: 8px 4px;
  border: 1px solid #58616a;

  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  color: #0a0a0a;
  text-align: center;
  vertical-align: middle;

  background: #f0f0f0;
`,aE=l.default.td.withConfig({componentId:"zh__sc-27bdacd5-31"})`
  padding: 4px;
  border: 1px solid #58616a;

  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  color: #0a0a0a;
  text-align: center;

  background: #fafafa;
`,ak=l.default.td.withConfig({componentId:"zh__sc-27bdacd5-32"})`
  padding: 4px;
  border: 1px solid #58616a;

  font-size: 10px;
  line-height: 14px;
  color: #0a0a0a;
  text-align: center;

  background: #fafafa;
`,aS=l.default.td.withConfig({componentId:"zh__sc-27bdacd5-33"})`
  padding: 4px;
  border: 1px solid #58616a;

  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  color: #0a0a0a;
  text-align: center;
  vertical-align: middle;

  background: #fafafa;
`,aO=l.default.td.withConfig({componentId:"zh__sc-27bdacd5-34"})`
  padding: 4px;
  border: 1px solid #58616a;

  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  color: #0a0a0a;
  text-align: center;
  vertical-align: middle;

  background: #fafafa;
`,aA=l.default.td.withConfig({componentId:"zh__sc-27bdacd5-35"})`
  padding: 4px;
  border: 1px solid #58616a;

  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  color: #0a0a0a;
  text-align: center;
  vertical-align: middle;

  background: #fff;
`,a$=l.default.td.withConfig({componentId:"zh__sc-27bdacd5-36"})`
  padding: 4px;
  border: 1px solid #58616a;

  font-size: 14px;
  line-height: 18px;
  color: #0a0a0a;
  text-align: center;

  background: #fff;

  ${({$highlighted:e,$isFirstHighlightCell:t,$isLastHighlightCell:n})=>!0!==e?"":`
      border-top: 2px solid #fb2c36;
      border-bottom: 2px solid #fb2c36;
      ${!0===t?"border-left: 2px solid #fb2c36;":""}
      ${!0===n?"border-right: 2px solid #fb2c36;":""}
    `}
`,aD=["1인가구","취약가구","출산가구","자립준비","학교생활","직장생활","보호자 일시 부재","나머지 가구구성원의 직장생활 등"],aL=[["1구간","465점 이상","8,293,000","면제","20,000","216,200","216,200","216,200","216,200"],["2구간","435~465미만","7,774,000","면제","20,000","216,200","216,200","216,200","216,200"],["3구간","405~435미만","7,257,000","면제","20,000","216,200","216,200","216,200","216,200"],["4구간","375~405미만","6,739,000","면제","20,000","216,200","216,200","216,200","216,200"],["5구간","345~375미만","6,221,000","면제","20,000","216,200","216,200","216,200","216,200"],["6구간","315~345미만","5,703,000","면제","20,000","216,200","216,200","216,200","216,200"],["7구간","285~315미만","5,181,000","면제","20,000","207,200","216,200","216,200","216,200"],["8구간","255~285미만","4,665,000","면제","20,000","186,600","216,200","216,200","216,200"],["9구간","225~255미만","4,148,000","면제","20,000","165,900","216,200","216,200","216,200"],["10구간","195~225미만","3,629,000","면제","20,000","145,100","216,200","216,200","216,200"],["11구간","165~195미만","3,112,000","면제","20,000","124,400","186,700","216,200","216,200"],["12구간","135~165미만","2,593,000","면제","20,000","103,700","155,500","207,400","216,200"],["13구간","105~135미만","2,076,000","면제","20,000","83,000","124,500","166,000","207,600"],["14구간","75~105미만","1,558,000","면제","20,000","62,300","93,400","124,600","155,800"],["15구간","42~75미만","1,040,000","면제","20,000","41,600","62,400","83,200","104,000"],["특례","특례 대상","7,257,000","면제","20,000","29,300","44,000","58,700","73,400"]],aR=["grade","score","monthlyLimit","typeA","typeB","typeC","typeD","typeE","typeF"];function aN({additionalBenefitTypes:e,benefitDecisionPeriod:n,grade:l,incomeCategory:a,monthlyUsage:d,virtualAccountNumber:o}){var s,c;let f,h,[p,u]=(0,i.useState)(!0),x=aF(l),g=aM(a),m=function(e,t){if(null===e||null===t)return null;let n=aF(e),i=aL.find(e=>e[0]===n);if(void 0===i)return null;let l=aM(t);if(null===l)return null;let a=i[l];if(void 0===a)return null;let d="면제"===a?0:Number(a.replaceAll(",","")),o=Number(i[2].replaceAll(",",""));return Number.isNaN(d)||Number.isNaN(o)?null:{copaymentAmount:d,monthlyLimitAmount:o}}(l,a),b=m?.monthlyLimitAmount??d?.expectedTotalAmount??0,j=m?.copaymentAmount??d?.expectedCopaymentAmount??0,w=null===m?d?.expectedGovernmentSupportAmount??0:b-j,_=`${new Date().getMonth()+1}월`;return(0,t.jsxs)(lk,{children:[(0,t.jsx)(lS,{children:(0,t.jsx)(lO,{children:(0,t.jsx)(lA,{children:"계약서 세부내역"})})}),(0,t.jsxs)(eD,{children:[(0,t.jsxs)(eL,{$width:193,children:[(0,t.jsx)(eR,{children:"수급결정시기"}),(0,t.jsx)(r.default.Input.Date,{value:n??"",readOnly:!0,style:{...eN,width:"100%",height:36}})]}),(0,t.jsxs)(eL,{$width:213,children:[(0,t.jsx)(eR,{children:"가상계좌번호"}),(0,t.jsx)(r.default.Input.Text,{value:o??"",placeholder:"가상계좌를 입력해주세요.",inputMode:"numeric",readOnly:!0,style:eN})]}),(0,t.jsxs)(eL,{children:[(0,t.jsx)(eR,{children:"수급여부"}),(0,t.jsxs)(aU,{children:[(0,t.jsxs)(aW,{children:[(0,t.jsx)(aB,{checked:"TYPE_A"===a,disabled:!0}),"기초생활수급자"]}),(0,t.jsxs)(aW,{children:[(0,t.jsx)(aB,{checked:"TYPE_B"===a,disabled:!0}),"차상위계층"]}),(0,t.jsxs)(aW,{children:[(0,t.jsx)(aB,{checked:"TYPE_C"===a||"TYPE_D"===a||"TYPE_E"===a||"TYPE_F"===a,disabled:!0}),"일반"]})]})]})]}),(0,t.jsx)(eD,{children:(0,t.jsxs)(eL,{children:[(0,t.jsx)(eR,{children:"추가급여대상 여부"}),(0,t.jsx)(aV,{children:aD.map(n=>(0,t.jsxs)(aY,{children:[(0,t.jsx)(aB,{checked:e?.includes(n)===!0,disabled:!0}),n]},n))})]})}),(0,t.jsxs)(aH,{children:[(0,t.jsxs)(aG,{children:[(0,t.jsxs)(aK,{children:[_," 바우처 월 한도액 및 정산 총액"]}),(0,t.jsxs)(aX,{children:[(0,t.jsxs)(aq,{children:[(0,t.jsx)(aQ,{children:"총 월한도액"}),(0,t.jsx)(aJ,{children:"월한도액 + 본인부담금"}),(0,t.jsx)(aZ,{children:aP(b)})]}),(0,t.jsx)(a1,{"aria-hidden":!0,children:"="}),(0,t.jsxs)(aq,{children:[(0,t.jsx)(aQ,{children:"정부지원금"}),(0,t.jsx)(aJ,{children:"월한도액 - 본인부담금"}),(0,t.jsx)(aZ,{children:aP(w)})]}),(0,t.jsx)(a1,{"aria-hidden":!0,children:"+"}),(0,t.jsxs)(aq,{children:[(0,t.jsx)(aQ,{children:"본인부담금"}),(0,t.jsx)(aJ,{children:(s=l,c=a,f=null===s?"":s.startsWith("SPECIAL")?"특례":`${s}구간`,h="TYPE_A"===c?"[가]형 생계·의료급여 수급자":"TYPE_B"===c?"[나]형 차상위계층":"TYPE_C"===c?"[다]형 중위소득 70% 이하":"TYPE_D"===c?"[라]형 중위소득 120% 이하":"TYPE_E"===c?"[마]형 중위소득 180% 이하":"TYPE_F"===c?"[바]형 중위소득 180% 초과":"",`${f} ${h}`.trim())}),(0,t.jsxs)(aZ,{$accent:!0,children:[j.toLocaleString("ko-KR")," ",(0,t.jsx)(a0,{children:"원"})]})]})]})]}),(0,t.jsxs)(a2,{children:[(0,t.jsxs)(a6,{type:"button","aria-expanded":p,"aria-controls":"disability-benefit-guide",onClick:()=>u(e=>!e),children:[(0,t.jsxs)(a4,{children:[(0,t.jsx)(lJ.default,{sx:{fontSize:24,color:"#1c1b1f"}}),"활동지원급여 월한도액 및 소득구분별 본인부담금 통합 기준표"]}),p?(0,t.jsx)(l0.default,{"aria-hidden":!0}):(0,t.jsx)(lZ.default,{"aria-hidden":!0})]}),p?(0,t.jsxs)(a5,{id:"disability-benefit-guide",children:[(0,t.jsxs)("thead",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)(a3,{rowSpan:2,$muted:!0,children:"구간"}),(0,t.jsx)(a3,{rowSpan:2,children:"종합점수"}),(0,t.jsx)(a3,{rowSpan:2,$monthlyLimit:!0,children:"월한도액"}),(0,t.jsx)(a3,{colSpan:6,$benefitHeader:!0,children:"본인부담금"})]}),(0,t.jsx)("tr",{children:["[가형]\n생계·의료급여 수급자","[나형]\n차상위계층","[다형]\n중위소득\n70% 이하","[라형]\n중위소득\n120% 이하","[마형]\n중위소득\n180% 이하","[바형]\n중위소득\n180% 초과"].map(e=>(0,t.jsx)(a3,{children:e},e))})]}),(0,t.jsx)("tbody",{children:aL.map(e=>(0,t.jsx)("tr",{children:e.map((n,i)=>(0,t.jsx)(a9,{$muted:0===i||2===i,$monthlyLimit:2===i,$selected:e[0]===x&&(2===i||i===g),children:n},`${e[0]}-${aR[i]}`))},e[0]))})]}):null]})]})]})}function aP(e){return`${e.toLocaleString("ko-KR")} 원`}function aF(e){return null===e?null:e.startsWith("SPECIAL")?"특례":`${e}구간`}function aM(e){return null===e?null:({TYPE_A:3,TYPE_B:4,TYPE_C:5,TYPE_D:6,TYPE_E:7,TYPE_F:8})[e]}let aB=(0,l.default)(r.default.Input.Check).attrs({$iconSizeRatio:1.5}).withConfig({componentId:"zh__sc-bcf5d5b7-0"})`
  width: 24px;
  height: 24px;
`,aU=l.default.div.withConfig({componentId:"zh__sc-bcf5d5b7-1"})`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 16px;
  align-items: center;

  min-height: 36px;
`,aW=l.default.label.withConfig({componentId:"zh__sc-bcf5d5b7-2"})`
  display: inline-flex;
  gap: 8px;
  align-items: center;

  min-height: 36px;

  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: #000;
  white-space: nowrap;
`,aV=l.default.div.withConfig({componentId:"zh__sc-bcf5d5b7-3"})`
  display: flex;
  flex-wrap: wrap;
  gap: 0 24px;
  align-items: center;
`,aY=l.default.label.withConfig({componentId:"zh__sc-bcf5d5b7-4"})`
  display: inline-flex;
  gap: 8px;
  align-items: center;

  height: 36px;

  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  color: #000;
`,aH=l.default.div.withConfig({componentId:"zh__sc-bcf5d5b7-5"})`
  display: flex;
  flex-direction: column;
  gap: 10px;

  width: 100%;
  padding: 20px 16px;
  border: 1px solid #e5e9ef;
  border-radius: 8px;

  background: #f6f8ff;
`,aG=l.default.div.withConfig({componentId:"zh__sc-bcf5d5b7-6"})`
  display: flex;
  flex-direction: column;
  gap: 10px;

  padding: 16px;
  border: 1px solid #e5e9ef;
  border-radius: 8px;

  background: #fff;
`,aK=l.default.h3.withConfig({componentId:"zh__sc-bcf5d5b7-7"})`
  margin: 0;

  font-size: 18px;
  font-weight: 700;
  line-height: normal;
  color: #0a0a0a;
`,aX=l.default.div.withConfig({componentId:"zh__sc-bcf5d5b7-8"})`
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: space-between;
`,aq=l.default.div.withConfig({componentId:"zh__sc-bcf5d5b7-9"})`
  position: relative;

  flex: 1;

  min-width: 0;
  padding: 20px 16px;
  border: 1px solid #cdd8ec;
  border-radius: 8px;

  background: #fff;
`,aQ=l.default.strong.withConfig({componentId:"zh__sc-bcf5d5b7-10"})`
  display: block;
  font-size: 18px;
  font-weight: 700;
  line-height: normal;
`,aJ=l.default.span.withConfig({componentId:"zh__sc-bcf5d5b7-11"})`
  display: block;
  margin-top: 8px;
  font-size: 14px;
  line-height: normal;
`,aZ=l.default.strong.withConfig({componentId:"zh__sc-bcf5d5b7-12"})`
  position: absolute;
  top: 20px;
  right: 16px;

  font-size: 18px;
  font-weight: 700;
  line-height: normal;
  color: ${({$accent:e})=>!0===e?"#f00":"#0a0a0a"};
`,a0=l.default.span.withConfig({componentId:"zh__sc-bcf5d5b7-13"})`
  color: #0a0a0a;
`,a1=l.default.strong.withConfig({componentId:"zh__sc-bcf5d5b7-14"})`
  flex: 0 0 20px;
  font-size: 18px;
  text-align: center;
`,a2=l.default.div.withConfig({componentId:"zh__sc-bcf5d5b7-15"})`
  overflow-x: auto;

  padding: 16px 10px 10px;
  border: 1px solid #e5e9ef;
  border-radius: 8px;

  background: #fff;
`,a6=l.default.button.withConfig({componentId:"zh__sc-bcf5d5b7-16"})`
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 0 0 16px;
  border: 0;

  color: #494f53;
  text-align: left;

  background: transparent;
`,a4=l.default.span.withConfig({componentId:"zh__sc-bcf5d5b7-17"})`
  display: flex;
  gap: 4px;
  align-items: center;

  font-size: 18px;
  font-weight: 700;
  white-space: nowrap;
`,a5=l.default.table.withConfig({componentId:"zh__sc-bcf5d5b7-18"})`
  table-layout: fixed;
  border-collapse: collapse;

  width: 100%;
  min-width: 915px;

  font-size: 14px;
  color: #0a0a0a;
`,a3=l.default.th.withConfig({componentId:"zh__sc-bcf5d5b7-19"})`
  height: ${({$benefitHeader:e})=>!0===e?25:64}px;
  padding: 4px 6px;
  border: 1px solid #58616a;

  font-weight: 700;
  line-height: normal;
  text-align: center;
  word-break: keep-all;
  white-space: pre-line;
  vertical-align: middle;

  background: ${({$monthlyLimit:e,$muted:t})=>!0===e?"#f6f8ff":!0===t?"#f9fafb":"#f0f0f0"};
`,a9=l.default.td.withConfig({componentId:"zh__sc-bcf5d5b7-20"})`
  height: 40px;
  padding: 4px 6px;
  border: ${({$selected:e})=>!0===e?"2px solid #FB2C36":"1px solid #58616a"};

  line-height: normal;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;

  background: ${({$monthlyLimit:e,$muted:t})=>!0===e?"#f6f8ff":!0===t?"#f9fafb":"#fff"};
`,a8=(0,n.observer)(function(){let e=a.default.client.info.byClient,n=e.currentServiceType,l=e.selectedContract,d="DISABILITY_ACTIVITY_SUPPORT"===n,[o,r]=(0,i.useState)(null),s=function(e){if(null===e)return null;if(1===e||2===e||3===e||4===e)return e;if("string"==typeof e){let t=Number(e.trim().replace("등급",""));if(1===t||2===t||3===t||4===t)return t}return null}(l?.grade??null),c=a.default.data.organization.serviceList.data?.serviceStandardFee.reduce((e,t)=>{let n="MEAL"===t.type?"meal":"NUTRITION"===t.type?"nutrition":null;return null!==n&&(e[n]=t.fee),e},{})??{};return(0,i.useEffect)(()=>{let e=l?.id,[t,i]=lE.default.create(new Date().getFullYear(),new Date().getMonth()+1);if(null===n||void 0===e||null!==t||null===i)return;let a=!0;return(async t=>{let[i,l]=await lT.default.data.serviceProvision.getMonthlyStatus({serviceType:n,targetYearMonth:t});if(!a)return;let d=l?.rows.find(t=>t.contractId===e);null!==i||void 0===d?r(null):r({expectedCopaymentAmount:d.expectedCopaymentAmount,expectedGovernmentSupportAmount:d.expectedGovernmentSupportAmount,expectedTotalAmount:d.expectedTotalAmount,providedCount:d.providedCount,scheduledCount:l.schedule.length})})(i),()=>{a=!1}},[l?.id,n]),(0,t.jsxs)(a7,{children:[(0,t.jsx)(lR,{}),d?(0,t.jsx)(aN,{additionalBenefitTypes:l?.additionalBenefitTypes??null,benefitDecisionPeriod:function(e){if(null!==e&&"benefitDecisionPeriod"in e)return"string"==typeof e.benefitDecisionPeriod?e.benefitDecisionPeriod:void 0}(l),grade:l?.grade??null,incomeCategory:l?.incomeCategory??null,monthlyUsage:o,virtualAccountNumber:l?.virtualAccountNumber??null}):(0,t.jsx)(l3,{serviceCode:null===n?null:"MEAL"===n?"meal":"nutrition",grade:s,paymentMethodText:"CMS 자동이체",paymentDayText:"매월 25일",monthlyUsage:o,serviceFees:c})]})}),a7=l.default.div.withConfig({componentId:"zh__sc-cbb8903d-0"})`
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

  background: #fcfdff;
`;var de=e.i(27997),dt=e.i(34944),dn=e.i(44968);let di=(0,n.observer)(function({disabled:e=!1}){let n=a.default.client.info.byClient.docs,i=a.default.client.info.byClient,l=n.contractsOfSelectedClient,d=i.selectedContractId,o=l.some(e=>e.status===dt.default.ACTIVE);return(0,t.jsxs)(dl,{children:[(0,t.jsx)(da,{children:"계약 회차"}),(0,t.jsx)(dd,{value:d??"",disabled:e||0===l.length,onChange:e=>{let t=e.target.value;i.setSelectedContractId(""===t?null:t)},children:l.map((e,n)=>{let i,a,d,r,s,c;return i=e.serviceStartDate??"",a=e.serviceEndDate??"",d=e.status===dt.default.ACTIVE,r=o&&""!==i&&(0,dn.isFutureContractStart)(i),s=""!==i&&""!==a?`${i.replaceAll("-",".")} ~ ${a.replaceAll("-",".")}`:"-",c=`${l.length-n}차 계약 (${s})${d?" [진행중]":r?" [재계약 중]":""}`,(0,t.jsx)("option",{value:e.id,children:c},e.id)})})]})}),dl=l.default.div.withConfig({componentId:"zh__sc-4a58d4b2-0"})`
  display: flex;
  gap: 8px;
  align-items: center;
  min-width: 0;
`,da=l.default.p.withConfig({componentId:"zh__sc-4a58d4b2-1"})`
  margin: 0;

  font-size: 18px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 111.111% */
  color: #0a0a0a;
  text-align: center;
  white-space: nowrap;
`,dd=(0,l.default)(r.default.Input.Select).withConfig({componentId:"zh__sc-4a58d4b2-2"})`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 28px;
  border: 1px solid #e5e9ef;
  border-radius: 6px;

  font-size: 16px;
  line-height: 20px; /* 111.111% */
  color: #0a0a0a;

  background-color: #fff;
  background-position: right 10px center;
  background-size: 12px;

  &:hover,
  &:focus {
    background-position: right 10px center;
    background-size: 12px;
  }
`;var dr=e.i(62897);function ds(e){if(!eS.default.is(e))return"-";let[t,n,i]=e.split("-");return`${t}년 ${Number(n)}월 ${Number(i)}일`}function dc(e){if(!eS.default.is(e))return"-";let[t,n,i]=e.split("-");return`${t}.${n}.${i}`}let df=(0,n.observer)(function(){let e,[n,l]=(0,i.useState)(!1),[d,o]=(0,i.useState)(!1),[s,c]=(0,i.useState)(!1),[f,h]=(0,i.useState)({key:"",date:""}),p=(0,i.useRef)(null),u=a.default.client.info.byClient,x=a.default.modal.clientCreate,{selectedClientId:g,selectedContract:m,currentServiceType:b}=u,j=u.contractsOfSelectedClient,w=u.selectedClient,_=null!==g&&null!==w,y=u.isContractDetailEditing,v=u.selectedContractDetailDraftContractStartDate,C=u.selectedContractDetailDraftContractEndDate,I=u.selectedContractDetailDraftStatus,z=[m?.id??"",b??"",v??m?.contractStartDate??"",y?"editing":"readonly",I??m?.status??""].join("|"),T=f.key===z?f.date:"";if((0,i.useEffect)(()=>{if(!_||!y||n||d||s)return;let e=e=>{let t=e.target;t instanceof Element&&null!==t.closest('[aria-label="Date picker"]')||t instanceof Element&&(null!==t.closest('[role="listbox"]')||null!==t.closest('[role="option"]')||null!==t.closest("[data-radix-select-viewport]")||null!==t.closest("[data-radix-popper-content-wrapper]"))||t instanceof Node&&null!==p.current&&p.current.contains(t)||u.cancelContractDetailEdit()};return document.addEventListener("pointerdown",e),()=>{document.removeEventListener("pointerdown",e)}},[u,_,y,n,d,s]),(0,i.useEffect)(()=>{let e=m?.id,t=m?.contractStartDate??"",n=m?.status??dt.default.ACTIVE,i=(I??n)===dt.default.TERMINATED;if(!_||!y||!i||void 0===e||null===b||!eS.default.is(t))return;let l=function(e,t){if(!eS.default.is(e)||!eS.default.is(t))return[];let[n,i]=e.split("-"),[l,a]=t.split("-"),d=Number(n),o=Number(i),r=Number(l),s=Number(a);if(!Number.isInteger(d)||!Number.isInteger(o)||!Number.isInteger(r)||!Number.isInteger(s))return[];let c=new Date(d,o-1,1),f=new Date(r,s-1,1);if(c.getTime()>f.getTime())return[];let h=[],p=new Date(c);for(;p.getTime()<=f.getTime();){let[e,t]=dr.default.yearMonth.create(p.getFullYear(),p.getMonth()+1);null===e&&h.push(t),p.setMonth(p.getMonth()+1)}return h}(t,(0,dn.getTodayCalendarDateString)());if(0===l.length)return;let a=!0;return(async()=>{let t=await Promise.all(l.map(e=>lT.default.data.serviceProvision.getMonthlyStatus({serviceType:b,targetYearMonth:e})));a&&h({key:z,date:t.reduce((t,[n,i])=>{if(null!==n||null===i)return t;let l=function(e,t){let n=e.find(e=>e.contractId===t);if(void 0===n)return"";let i=(0,dn.getTodayCalendarDateString)();return n.cells.reduce((e,t)=>!1===t.isPending&&"PROVIDED"!==t.status||!eS.default.is(t.serviceDate)||i<t.serviceDate?e:!eS.default.is(e)||e<t.serviceDate?t.serviceDate:e,"")}(i.rows,e);return eS.default.is(l)&&(!eS.default.is(t)||t<l)?l:t},"")})})(),()=>{a=!1}},[v,I,b,_,y,z,m?.contractStartDate,m?.id,m?.status]),!_||null===w)return(0,t.jsx)(dD,{children:"서비스를 선택한 뒤 이용자를 선택해 주세요."});let E=w.name,k=m?.grade,S="string"==typeof k&&k.trim().length>0?k.includes("등급")?k:`${k}등급`:"-",A=null===b?"-":`일상돌봄 ${function(e){switch(e){case"MEAL":return"식사관리 서비스";case"NUTRITION":return"영양관리 서비스";case"DISABILITY_ACTIVITY_SUPPORT":return"장애인 활동지원 서비스"}}(b)} - ${function(e){switch(e){case"MEAL":return"500901";case"NUTRITION":return"500401";case"DISABILITY_ACTIVITY_SUPPORT":return"HWG001"}}(b)}`,$=m?.status??dt.default.ACTIVE,D=I??$,L=D===dt.default.COMPLETED,R=D===dt.default.TERMINATED,N=m?.contractStartDate??"",P=v??N,F=ds(P),M=m?.contractEndDate??"",B=C??M,U=ds(B),W=ds(m?.serviceStartDate??""),V=m?.serviceEndDate??"",Y=ds(V),H=(0,dn.getContractExpirationReminder)({contractStatus:D,contractEndDate:M,hasRenewingContract:(0,dn.hasRenewingContract)(j)}),G=!y&&null!==H,K=R?U:Y,X=(0,dn.getTodayCalendarDateString)().replaceAll("-","."),q=(e=(0,dn.getTodayCalendarDateString)(),eS.default.is(V)&&V<e?V:e),Q=!!eS.default.is(V)&&(0,dn.getTodayCalendarDateString)()<V,J=Q?`오늘(${X})로 계약이 해지되며, 계약 종료일이 변경됩니다.`:`계약이 해지되며, 계약 종료일이 ${ds(q)}로 변경됩니다.`,Z=`${dc(N)} ~ ${dc(M)}`;return(0,t.jsxs)(dh,{ref:p,children:[(0,t.jsx)(dp,{children:(0,t.jsxs)(du,{children:[(0,t.jsxs)(dx,{children:[(0,t.jsxs)(dg,{children:[(0,t.jsx)(dm,{children:E}),(0,t.jsxs)(db,{children:[(0,t.jsx)(dj,{children:S}),(0,t.jsx)(dj,{children:A})]}),y?(0,t.jsx)(n_,{children:"수정 진행중"}):null]}),!0===y?(0,t.jsxs)(nj,{children:[(0,t.jsxs)(nw,{type:"button",onClick:()=>{u.cancelContractDetailEdit()},children:[(0,t.jsx)(ih.default,{sx:{fontSize:20}}),"수정 취소"]}),(0,t.jsxs)(nw,{type:"button",onClick:()=>{l(!0)},children:[(0,t.jsx)(iq.default,{sx:{fontSize:20}}),"수정 저장"]})]}):(0,t.jsxs)(nw,{type:"button",disabled:L,onClick:()=>{L||u.startContractDetailEdit()},children:[(0,t.jsx)(nf.default,{sx:{fontSize:20}}),"수정하기"]})]}),(0,t.jsxs)(d_,{children:[(0,t.jsxs)(dv,{children:[(0,t.jsx)(dS,{children:"계약 상태"}),(0,t.jsx)(dz,{children:(0,t.jsxs)(dT,{value:D,disabled:!y,onChange:e=>{let t=e.target.value;if((0,dt.isSelectableContractStatus)(t)&&t!==D){if(t===dt.default.TERMINATED)return void o(!0);if(t===dt.default.ACTIVE)return void c(!0);u.updateSelectedContractDetailDraftStatus(t)}},children:[(0,t.jsx)("option",{value:dt.default.ACTIVE,children:"계약중"}),(0,t.jsx)("option",{value:dt.default.TERMINATED,children:"해지"}),D===dt.default.COMPLETED?(0,t.jsx)("option",{value:dt.default.COMPLETED,children:"완료"}):null]})})]}),G?(0,t.jsxs)(dE,{children:[null!==H?(0,t.jsxs)(de.default,{$color:H.color,children:["계약 만료 ",H.remainingDays,"일 남음"]}):null,(0,t.jsxs)(dk,{type:"button",onClick:()=>{x.show("renew",m?.serviceType??"MEAL")},children:[(0,t.jsx)(O.default.ContractEdit,{size:16}),"재계약 하기"]})]}):null]}),(0,t.jsx)(dy,{children:(0,t.jsx)(di,{disabled:y})}),(0,t.jsxs)(dw,{children:[(0,t.jsxs)(dv,{children:[(0,t.jsx)(dS,{children:"계약 기간"}),!0!==y||R?(0,t.jsx)(dO,{children:F}):(0,t.jsx)(dC,{children:(0,t.jsx)(r.default.Input.Date,{style:{width:180,height:28,paddingLeft:16,fontSize:16},value:P,readOnly:!1,isDateSelectable:e=>!eS.default.is(V)||e<=V,onChange:e=>{u.updateSelectedContractDetailDraftContractStartDate(e)},placeholder:"YYYY-MM-DD"})}),(0,t.jsx)(dA,{children:"~"}),!0===y&&R?(0,t.jsx)(dI,{children:(0,t.jsx)(r.default.Input.Date,{style:{width:180,height:28,paddingLeft:16,fontSize:16},value:B,readOnly:!1,isDateSelectable:e=>!(eS.default.is(P)&&e<P||eS.default.is(T)&&e<T||eS.default.is(V)&&V<e),onChange:e=>{u.updateSelectedContractDetailDraftContractEndDate(e)},placeholder:"YYYY-MM-DD"})}):(0,t.jsx)(dO,{children:K})]}),(0,t.jsx)(d$,{}),(0,t.jsxs)(dv,{children:[(0,t.jsx)(dS,{children:"서비스 기간"}),(0,t.jsx)(dO,{children:W}),(0,t.jsx)(dA,{children:"~"}),(0,t.jsx)(dO,{children:Y})]})]})]})}),(0,t.jsx)(lx,{isOpen:n,title:"계약 정보를 저장할까요?",description:`수정된 정보는 연결된 서류의 자동입력 항목에 함께 반영됩니다.
이미 출력했거나 최종확인한 서류는 다시 확인이 필요할 수 있습니다.`,cancelLabel:"취소하기",confirmLabel:"저장 및 모든 서류에 반영",onCancel:()=>{l(!1)},onConfirm:()=>{u.saveSelectedContractDetailDraft().then(e=>{!0===e&&l(!1)})}}),(0,t.jsx)(lx,{isOpen:d,title:Q?"계약을 중도 해지 하시겠습니까?":"계약을 해지 하시겠습니까?",description:`${J}
해지 시, 계약 시작일은 수정할 수 없으며 계약 종료일은 수정할 수 있습니다.`,cancelLabel:"취소하기",confirmLabel:"변경하기",onCancel:()=>{o(!1)},onConfirm:()=>{u.updateSelectedContractDetailDraftContractStartDate(N),u.updateSelectedContractDetailDraftContractEndDate(q),u.updateSelectedContractDetailDraftStatus(dt.default.TERMINATED),o(!1)}}),(0,t.jsx)(lx,{isOpen:s,title:"계약중 상태로 되돌리시겠습니까?",description:`이전 계약 기간 (${Z})으로 되돌리며, 해지에서 계약중으로 변경됩니다.
계약중일 시, 계약 시작일을 수정할 수 있으며 계약 종료일은 수정할 수 없습니다.`,cancelLabel:"취소하기",confirmLabel:"변경하기",onCancel:()=>{c(!1)},onConfirm:()=>{u.updateSelectedContractDetailDraftContractEndDate(V),u.updateSelectedContractDetailDraftStatus(dt.default.ACTIVE),c(!1)}})]})}),dh=l.default.div.withConfig({componentId:"zh__sc-a64f020c-0"})`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  width: 100%;
  min-height: 156px;
  padding: 16px 24px;
  border-bottom: 1px solid #e5e7eb;

  background: #fff;
`,dp=l.default.div.withConfig({componentId:"zh__sc-a64f020c-1"})`
  display: flex;
  gap: 24px;
  width: 100%;
`,du=l.default.div.withConfig({componentId:"zh__sc-a64f020c-2"})`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  gap: 16px;
  justify-content: center;

  min-width: 0;
`,dx=l.default.div.withConfig({componentId:"zh__sc-a64f020c-3"})`
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  min-width: 0;
`,dg=l.default.div.withConfig({componentId:"zh__sc-a64f020c-4"})`
  display: flex;
  gap: 16px;
  align-items: center;
  min-width: 0;
`,dm=l.default.div.withConfig({componentId:"zh__sc-a64f020c-5"})`
  font-size: 24px;
  font-weight: 700;
  line-height: 20px;
  color: #0a0a0a;
`,db=l.default.div.withConfig({componentId:"zh__sc-a64f020c-6"})`
  overflow: hidden;
  display: flex;
  gap: 4px;
  align-items: center;

  min-width: 0;
`,dj=l.default.div.withConfig({componentId:"zh__sc-a64f020c-7"})`
  overflow: hidden;

  padding: 2px 12px;
  border: 1px solid #d1d5db;
  border-radius: 99px;

  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: #0a0a0a;
  white-space: nowrap;
`,dw=l.default.div.withConfig({componentId:"zh__sc-a64f020c-8"})`
  display: flex;
  gap: 12px;
  align-items: center;
  min-width: 0;
`,d_=l.default.div.withConfig({componentId:"zh__sc-a64f020c-9"})`
  display: flex;
  gap: 16px;
  align-items: center;
  min-width: 0;
`,dy=l.default.div.withConfig({componentId:"zh__sc-a64f020c-10"})`
  display: flex;
  gap: 8px;
  align-items: center;
  min-width: 0;
`,dv=l.default.div.withConfig({componentId:"zh__sc-a64f020c-11"})`
  display: flex;
  gap: 8px;
  align-items: center;

  min-width: 0;

  font-size: 18px;
  line-height: 20px;
  color: #0a0a0a;
  white-space: nowrap;
`,dC=l.default.div.withConfig({componentId:"zh__sc-a64f020c-12"})`
  display: flex;
  flex-direction: column;
  min-width: 0;
`,dI=l.default.div.withConfig({componentId:"zh__sc-a64f020c-13"})`
  display: flex;
  flex-direction: column;
  min-width: 0;
`,dz=l.default.div.withConfig({componentId:"zh__sc-a64f020c-14"})`
  display: flex;
  flex-direction: column;
  min-width: 0;
`,dT=(0,l.default)(r.default.Input.Select).withConfig({componentId:"zh__sc-a64f020c-15"})`
  width: 94px;
  height: 28px;
`,dE=l.default.div.withConfig({componentId:"zh__sc-a64f020c-16"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,dk=(0,l.default)(r.default.Button.Outlined).withConfig({componentId:"zh__sc-a64f020c-17"})`
  gap: 8px;
  padding: 0 16px;
`,dS=l.default.span.withConfig({componentId:"zh__sc-a64f020c-18"})`
  font-weight: 700;
`,dO=l.default.span.withConfig({componentId:"zh__sc-a64f020c-19"})`
  font-weight: 400;
`,dA=l.default.span.withConfig({componentId:"zh__sc-a64f020c-20"})`
  font-weight: 400;
`,d$=l.default.div.withConfig({componentId:"zh__sc-a64f020c-21"})`
  width: 1px;
  height: 24px;
  background: #e5e7eb;
`,dD=l.default.div.withConfig({componentId:"zh__sc-a64f020c-22"})`
  width: 100%;
  padding: 16px 24px;
  border-bottom: 1px solid #e5e7eb;

  font-size: 14px;
  color: #6b7280;

  background: #fff;
`;var dL=e.i(7665);function dR(){return(dR=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var dN=(0,i.forwardRef)(function(e,t){var n=e.color,l=e.size,a=void 0===l?24:l,d=function(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["color","size"]);return i.default.createElement("svg",dR({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),i.default.createElement("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),i.default.createElement("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),i.default.createElement("polyline",{points:"21 15 16 10 5 21"}))});dN.propTypes={color:C.default.string,size:C.default.oneOfType([C.default.string,C.default.number])},dN.displayName="Image";let dP={badge:{label:"데이터 없음",color:"black"},action:{label:"파일 미첨부",color:"black"}};function dF(e){if(null==e)return dP;switch(e){case"WAITING_TO_LINK":return{badge:{label:"연동 대기",color:"lightBlue"},action:{label:"연동 대기중...",color:"blue",disabled:!0}};case"WAITING_TO_DRAFT":return{badge:{label:"작성 대기",color:"lightBlue"},action:{label:"서류 작성 시작하기",color:"blue"}};case"WAITING_TO_PRINT":return{badge:{label:"출력 대기",color:"blue"},action:{label:"초안 검토하기",color:"blue"}};case"NEED_UPDATE":return{badge:{label:"업데이트 필요",color:"orange"},action:{label:"수기 서류 업로드하기",color:"orange"}};case"NEED_MATCHING":return{badge:{label:"서류 대조",color:"orange"},action:{label:"수기 서류 업로드하기",color:"orange"}};case"LINKED_COMPLETED":return{badge:{label:"연동 완료",color:"orange",icon:(0,t.jsx)(O.default.WandShine,{size:16})},action:{label:"서류 최종 확인하기",color:"orange"}};case"COMPLETED":return{badge:{label:"전산 완료",color:"gray"},action:{label:"문서 확인하기",color:"indigo"}};default:return dP}}var dM=e.i(70888);let dB=(0,nd.default)((0,t.jsx)("path",{fillRule:"evenodd",d:"M4 11h16v2H4z"}),"HorizontalRule");function dU({status:e,onClick:n,disabled:i=!1}){return(0,t.jsx)(dW,{$status:e,$disabled:i,onClick:i?void 0:n,children:"checked"===e?(0,t.jsx)(iq.default,{sx:{fontSize:18}}):"indeterminate"===e?(0,t.jsx)(dB,{sx:{fontSize:20}}):null})}let dW=l.default.div.withConfig({componentId:"zh__sc-a3965854-0"})`
  cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};

  display: flex;
  align-items: center;
  justify-content: center;

  width: 24px;
  height: 24px;
  padding: 2px;
  border: 1px solid #58616a;
  border-color: ${({$status:e})=>"unchecked"===e?"#58616a":"#256EF4"};
  border-radius: 4px;

  color: #fff;

  background: ${({$status:e})=>"unchecked"===e?"#fff":"#256EF4"};
`;function dV(e,t){return 0===t||0===e?"unchecked":e===t?"checked":"indeterminate"}let dY=(0,n.observer)(function({template:e,isChecked:n,hasDocument:l,statusChangeToken:d,toggleSelectedTemplateId:o}){let{id:r,name:s,templateImagePath:c}=e,f=c?.[0]??null,h=a.default.client.info.byClient.docs.documentStatusByTemplateId.get(r)??null,p=a.default.client.info.byClient.docs.documentByTemplateId.get(r)??null,u=dF(h),x=l&&(0,dM.canSelectDocumentInList)(p?.displayStatus),{ref:g,fire:m}=ef(),b=(0,i.useRef)(d);return(0,i.useEffect)(()=>{if(d<=b.current){b.current=d;return}b.current=d,m()},[m,d]),(0,t.jsxs)(dQ,{ref:g,children:[(0,t.jsx)(dJ,{children:(0,t.jsx)(dU,{status:n?"checked":"unchecked",disabled:!x,onClick:()=>o(r)})}),(0,t.jsxs)(dZ,{$color:u.badge.color,children:[u.badge.icon,u.badge.label]}),(0,t.jsx)(d0,{children:null!==f&&""!==f?(0,t.jsx)(dL.default,{src:f,width:210,height:297,style:{width:"auto",height:"90%",maxWidth:"90%",objectFit:"contain"},loading:"eager",alt:s}):(0,t.jsx)(dN,{size:40,color:"#D1D5DC"})}),(0,t.jsxs)(d1,{children:[(0,t.jsx)(d2,{children:(0,t.jsx)(d6,{children:s})}),(0,t.jsx)(d4,{$color:u.action.color,disabled:!0===u.action.disabled||"black"===u.action.color,onClick:()=>{if(null===p){"WAITING_TO_DRAFT"===h&&a.default.modal.documentView.openTemplateWithoutDocument(e.id);return}a.default.modal.documentView.open(p.id)},children:u.action.label})]})]})}),dH=(0,n.observer)(function(){let e=a.default.client.info.byClient.docs,n=e.selectedTemplateIdSet,{toggleSelectedTemplateId:i,addSelectedTemplateIds:l,removeSelectedTemplateIds:d}=e,o=e.documentByTemplateId;return null===a.default.client.info.byClient.selectedClientId?"no client selected":(0,t.jsx)(dG,{children:e.templateTypeGroups.map(a=>{let{type:r,typeLabel:s,templates:c}=a,f=c.map(e=>e.id),h=f.filter(e=>{let t;return null!==(t=o.get(e)??null)&&(0,dM.canSelectDocumentInList)(t.displayStatus)}),p=new Set(h),u=dV(f.filter(e=>n.has(e)).length,f.length),x=dV(h.filter(e=>n.has(e)).length,h.length);return(0,t.jsxs)(dK,{children:[(0,t.jsxs)(dX,{onClick:()=>{"checked"===x?d([...p]):l([...p])},children:[(0,t.jsx)(dU,{status:u}),"[",s,"]"]}),(0,t.jsx)(dq,{children:c.map(l=>{let{id:a}=l,d=n.has(a),r=o.get(a)??null;return(0,t.jsx)(dY,{template:l,isChecked:d,hasDocument:null!==r,statusChangeToken:e.getDocumentStatusChangeToken(a),toggleSelectedTemplateId:i},a)})})]},r)})})}),dG=l.default.div.withConfig({componentId:"zh__sc-723cdbd7-0"})`
  overflow-y: auto;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 20px;

  width: 100%;
  min-height: 0;
`,dK=l.default.div.withConfig({componentId:"zh__sc-723cdbd7-1"})`
  display: flex;
  flex-direction: column;
  gap: 9px;
  align-items: flex-start;
  align-self: stretch;
`,dX=l.default.div.withConfig({componentId:"zh__sc-723cdbd7-2"})`
  cursor: pointer;

  display: flex;
  gap: 8px;
  align-items: center;

  font-size: 18px;
  font-weight: 500;
  font-style: normal;
  line-height: 20px; /* 142.857% */
  color: #0a0a0a;
  text-align: center;
`,dq=l.default.div.withConfig({componentId:"zh__sc-723cdbd7-3"})`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: stretch;
  align-self: stretch;
`,dQ=l.default.div.withConfig({componentId:"zh__sc-723cdbd7-4"})`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 188px;
  height: 232px;
  border: 1px solid #d1d5dc;
  border-radius: 8px;

  background: #fff;
`,dJ=l.default.div.withConfig({componentId:"zh__sc-723cdbd7-5"})`
  position: absolute;
  top: 8px;
  left: 8px;
`,dZ=l.default.div.withConfig({componentId:"zh__sc-723cdbd7-6"})`
  position: absolute;
  top: 8px;
  right: 8px;

  display: flex;
  gap: 2px;
  align-items: center;

  padding: 4px 6px;
  border-radius: 99px;

  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  line-height: 16px; /* 114.286% */
  color: #fff;
  text-align: center;

  background: ${({$color:e})=>{switch(e){case"lightBlue":return"#9FBFFF";case"orange":return"#FF6900";case"gray":return"#77798B";case"black":return"#0a0a0a";case"blue":return"#2264E8"}}};
`,d0=l.default.div.withConfig({componentId:"zh__sc-723cdbd7-7"})`
  overflow: hidden;
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: center;

  height: 140px;
  border-radius: 7px 7px 0 0;

  background: #f3f4f6;
`,d1=l.default.div.withConfig({componentId:"zh__sc-723cdbd7-8"})`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  gap: 2px;
  align-items: center;
  align-self: stretch;
  justify-content: center;

  padding: 8px;
`,d2=l.default.div.withConfig({componentId:"zh__sc-723cdbd7-9"})`
  display: flex;
  gap: 10px;
  align-items: center;
  align-self: stretch;
  justify-content: center;
`,d6=l.default.div.withConfig({componentId:"zh__sc-723cdbd7-10"})`
  overflow: hidden;
  display: -webkit-box;
  flex: 1 0 0;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;

  height: 45px;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 1.3;
  color: #0a0a0a;
  white-space: normal;
`,d4=l.default.button.withConfig({componentId:"zh__sc-723cdbd7-11"})`
  display: flex;
  gap: 10px;
  align-items: center;
  align-self: stretch;
  justify-content: center;

  height: 32px;
  border-radius: 4px;

  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  color: #fff;
  text-align: center;

  background: ${({$color:e})=>{switch(e){case"indigo":return"#505794";case"orange":return"#FF6900";case"gray":return"#77798B";case"black":return"#0A0A0A";default:return"#2264E8"}}};

  &:disabled {
    cursor: not-allowed;
    border: 1px solid #d1d5db;
    color: #9ca3af;
    background: #f9fafb;
  }
`;var d5=e.i(92091);let d3=(0,n.observer)(function(){var e,n;let i=a.default.client.info.byClient.docs,l=i.selectedTemplateIdSet,d=i.documentByTemplateId,o=Array.from(new Set(i.templates.map(e=>e.id))),r=o.filter(e=>{let t=d.get(e)??null;return null!==t&&(0,dM.canSelectDocumentInList)(t.displayStatus)}),s=(e=r.filter(e=>l.has(e)).length,0===(n=r.length)||0===e?"unchecked":e===n?"checked":"indeterminate"),c=o.length>0,f=o.filter(e=>l.has(e)).length;return(0,t.jsxs)(d9,{children:[(0,t.jsxs)(d7,{onClick:()=>{"checked"===s?i.removeSelectedTemplateIds(r):i.addSelectedTemplateIds(r)},children:[(0,t.jsx)(dU,{status:s}),"전체 선택하기"]}),(0,t.jsxs)(d8,{children:[(0,t.jsxs)(oe,{disabled:0===f,onClick:()=>void i.printSelectedTemplates(),children:[(0,t.jsx)(d5.default,{sx:{fontSize:16}}),"선택한 서류 출력하기"]}),(0,t.jsxs)(oe,{disabled:!c,onClick:()=>void i.printAllTemplates(),children:[(0,t.jsx)(d5.default,{sx:{fontSize:16}}),"전체 출력하기"]})]})]})}),d9=l.default.div.withConfig({componentId:"zh__sc-b979553a-0"})`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;
`,d8=l.default.div.withConfig({componentId:"zh__sc-b979553a-1"})`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: flex-end;
`,d7=l.default.button.withConfig({componentId:"zh__sc-b979553a-2"})`
  cursor: pointer;

  display: flex;
  gap: 8px;
  align-items: center;

  width: fit-content;
  padding: 0;
  border: 0;

  font-size: 18px;
  font-weight: 500;
  font-style: normal;
  line-height: 20px;
  color: #0a0a0a;
  text-align: center;

  background: transparent;
`,oe=(0,l.default)(r.default.Button.Outlined).withConfig({componentId:"zh__sc-b979553a-3"})`
  display: flex;
  gap: 4px;
  align-items: center;

  height: 40px;
  padding: 8px 16px;

  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #4f39f6;
  text-align: center;
`;function ot(){return(0,t.jsxs)(on,{children:[(0,t.jsx)(d3,{}),(0,t.jsx)(dH,{})]})}let on=l.default.div.withConfig({componentId:"zh__sc-5553a9a-0"})`
  overflow: hidden;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  align-self: stretch;

  min-height: 0;
  padding: 24px;
  border-radius: 10px;

  background: #fff;
`,oi=(0,n.observer)(function(){let e=a.default.client.info.byClient,[n,l]=(0,i.useState)("basic");return e.isClientDetailOpen&&null!==e.selectedClientId?(0,t.jsx)(d.default,{children:(0,t.jsxs)(ol,{children:[(0,t.jsxs)(oa,{children:[(0,t.jsx)(od,{children:"이용자 상세보기"}),(0,t.jsxs)(oo,{type:"button",onClick:()=>{e.cancelUserInfoEdit(),e.cancelContractDetailEdit(),e.closeClientDetail(),e.setSelectedClientId(null)},children:[(0,t.jsx)(S.X,{size:16}),"닫기"]})]}),(0,t.jsx)(df,{}),(0,t.jsxs)(or,{children:[(0,t.jsx)(os,{type:"button",$active:"basic"===n,onClick:()=>l("basic"),children:"기본정보"}),(0,t.jsx)(os,{type:"button",$active:"contract"===n,onClick:()=>l("contract"),children:"계약정보"}),(0,t.jsx)(os,{type:"button",$active:"docs"===n,onClick:()=>l("docs"),children:"서류관리"})]}),(0,t.jsx)(oc,{children:"basic"===n?(0,t.jsx)(lz,{}):"contract"===n?(0,t.jsx)(a8,{}):(0,t.jsx)(ot,{})})]})}):null}),ol=l.default.div.withConfig({componentId:"zh__sc-3cfc0852-0"})`
  position: relative;

  display: flex;
  flex-direction: column;
  flex-shrink: 0;

  width: 1050px;
  height: 90vh;
  border-radius: 8px;

  background: #fff;
`,oa=l.default.div.withConfig({componentId:"zh__sc-3cfc0852-1"})`
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
`,od=l.default.h2.withConfig({componentId:"zh__sc-3cfc0852-2"})`
  margin: 0;

  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  color: #101828;
  letter-spacing: -0.439px;
`,oo=(0,l.default)(r.default.Button.Outlined).withConfig({componentId:"zh__sc-3cfc0852-3"})`
  display: flex;
  gap: 6px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,or=l.default.div.withConfig({componentId:"zh__sc-3cfc0852-4"})`
  display: flex;
  align-self: flex-start;

  width: 100%;
  height: 56px;
  border-bottom: 1px solid #e5e7eb;

  background: #fff;
`,os=l.default.button.withConfig({componentId:"zh__sc-3cfc0852-5"})`
  cursor: pointer;

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
  color: ${({$active:e})=>e?"#052b57":"#464c53"};

  &::after {
    content: '';

    position: absolute;
    bottom: -1px;
    left: 0;

    width: 100%;
    height: 4px;

    background-color: ${({$active:e})=>e?"#052b57":"transparent"};
  }
`,oc=l.default.div.withConfig({componentId:"zh__sc-3cfc0852-6"})`
  display: flex;
  flex: 1;
  min-height: 0;
`,of=(0,nd.default)((0,t.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"}),"ArrowBack");var oh=e.i(88552);function op(){return(op=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var ou=(0,i.forwardRef)(function(e,t){var n=e.color,l=e.size,a=void 0===l?24:l,d=function(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["color","size"]);return i.default.createElement("svg",op({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),i.default.createElement("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),i.default.createElement("polyline",{points:"19 12 12 19 5 12"}))});function ox(){return(ox=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}ou.propTypes={color:C.default.string,size:C.default.oneOfType([C.default.string,C.default.number])},ou.displayName="ArrowDown";var og=(0,i.forwardRef)(function(e,t){var n=e.color,l=e.size,a=void 0===l?24:l,d=function(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["color","size"]);return i.default.createElement("svg",ox({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),i.default.createElement("line",{x1:"12",y1:"19",x2:"12",y2:"5"}),i.default.createElement("polyline",{points:"5 12 12 5 19 12"}))});og.propTypes={color:C.default.string,size:C.default.oneOfType([C.default.string,C.default.number])},og.displayName="ArrowUp";var om=e.i(26546),ob=e.i(71723),oj=e.i(25699),ow=e.i(28124);let o_=function({isOpen:e,actionType:n,isProcessing:i=!1,onClickSecondary:l,onClickPrimary:a}){if(!e)return null;let d="move"===n,o=d?"이동":"닫기";return(0,t.jsx)(oy,{children:(0,t.jsxs)(ov,{children:[(0,t.jsxs)(oC,{children:[(0,t.jsx)(oI,{children:"수정된 정보가 있습니다."}),(0,t.jsxs)(oz,{children:["지금 화면을 나가면 수정하신 내용이 저장되지 않습니다.",(0,t.jsx)("br",{}),`[저장하고 ${o}]${d?"을":"를"} 누르면 정보가 안전하게 저장됩니다.`]})]}),(0,t.jsxs)(oT,{children:[(0,t.jsx)(oE,{type:"button",disabled:i,onClick:l,children:`저장없이 ${d?"이동":"나가기"}`}),(0,t.jsx)(ok,{type:"button",disabled:i,onClick:a,children:`저장하고 ${o}`})]})]})})},oy=l.default.div.withConfig({componentId:"zh__sc-22c1af4d-0"})`
  position: fixed;
  z-index: 3000;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgb(17 24 39 / 36%);
`,ov=l.default.div.withConfig({componentId:"zh__sc-22c1af4d-1"})`
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
`,oC=l.default.div.withConfig({componentId:"zh__sc-22c1af4d-2"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;

  width: 100%;
`,oI=l.default.h3.withConfig({componentId:"zh__sc-22c1af4d-3"})`
  margin: 0;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px;
  color: #000;
`,oz=l.default.p.withConfig({componentId:"zh__sc-22c1af4d-4"})`
  margin: 0;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px;
  color: #000;
`,oT=l.default.div.withConfig({componentId:"zh__sc-22c1af4d-5"})`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: flex-end;

  width: 100%;
`,oE=(0,l.default)(r.default.Button.Outlined).withConfig({componentId:"zh__sc-22c1af4d-6"})`
  height: 36px;
  padding: 8px 16px;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px;
  color: #4f39f6;
`,ok=(0,l.default)(r.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-22c1af4d-7"})`
  height: 36px;
  padding: 8px 16px;

  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: 20px;
`,oS=l.default.div.withConfig({componentId:"zh__sc-67d06bce-0"})`
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
`,oO=l.default.div.withConfig({componentId:"zh__sc-67d06bce-1"})`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;

  padding: 16px;
`,oA=l.css`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;

  width: 56px;
  height: 36px;
  padding: 8px;
`,o$=(0,l.default)(r.default.Button.Outlined).withConfig({componentId:"zh__sc-67d06bce-2"})`
  ${oA}
`,oD=l.default.div.withConfig({componentId:"zh__sc-67d06bce-3"})`
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
  text-align: center;
`,oL=(0,l.default)(r.default.Button.Outlined).withConfig({componentId:"zh__sc-67d06bce-4"})`
  ${oA}
`,oR=l.default.div.withConfig({componentId:"zh__sc-67d06bce-5"})`
  align-self: stretch;
  height: 1px;
  background: #e5e7eb;
`,oN=l.default.div.withConfig({componentId:"zh__sc-67d06bce-6"})`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
`,oP=[{key:"state1",index:"01",label:"청구 사유를 선택해주세요.",options:["option1","option2","option3","option4","option5","option6","option7"],optionLabels:{option1:"카드 미소지",option2:"카드 분실",option3:"카드 파손",option4:"시스템 오류",option5:"단말기 오류",option6:"사망",option7:"수술"}},{key:"state2",index:"02",label:"처리 현황을 선택해주세요.",options:["option1","option2"],optionLabels:{option1:"계약 종결",option2:"서비스 종료"}}],oF={state1:null,state2:null},oM={option1:"대상자 바우처 카드 미소지로 인하여 소급결제 진행하려 하였으나",option2:"대상자 바우처 카드 분실로 인하여 소급결제 진행하려 하였으나",option3:"대상자 바우처 카드 파손으로 인하여 소급결제 진행하려 하였으나",option4:"결제 시스템 오류로 인하여 소급결제 진행하려 하였으나",option5:"단말기 오류로 인하여 소급결제 진행하려 하였으나",option6:"대상자 사망으로 인하여 소급결제 진행하려 하였으나",option7:"대상자 수술로 인하여 소급결제 진행하려 하였으나"},oB={option1:"일상돌봄 식사영양서비스 계약종결됨에 따라 지원금이 소멸하여",option2:"일상돌봄 식사영양서비스 종료됨에 따라 지원금이 소멸하여"},oU=(e,t)=>e[t]??"",oW=(e,t,n)=>Math.min(n,Math.max(t,e)),oV=["boxSizing","fontFamily","fontSize","fontWeight","fontStyle","lineHeight","letterSpacing","textTransform","textIndent","textDecoration","wordSpacing","tabSize","paddingTop","paddingRight","paddingBottom","paddingLeft"],oY=(e,t,n,i=.08)=>{let l=oW(n,0,t.length),a=document.createElement("div"),d=document.createElement("span"),o=window.getComputedStyle(e);a.style.position="absolute",a.style.left="-99999px",a.style.top="0",a.style.visibility="hidden",a.style.pointerEvents="none",a.style.width=`${e.clientWidth}px`,a.style.whiteSpace="pre-wrap",a.style.overflowWrap="break-word",a.style.wordBreak="break-word",oV.forEach(e=>{a.style[e]=o[e]}),a.textContent=t.slice(0,l),d.textContent="​",a.appendChild(d),document.body.appendChild(a);let r=d.offsetTop;a.remove();let s=Math.max(e.scrollHeight-e.clientHeight,0);return oW(r-e.clientHeight*i,0,s)},oH=l.keyframes`
	from {
		transform: translateX(100%);
		opacity: 0;
	}

	to {
		transform: translateX(0);
		opacity: 1;
	}
`,oG=(0,l.default)(oS).withConfig({componentId:"zh__sc-1f96f242-0"})`
  will-change: transform, opacity;
  animation: ${oH} 0.28s cubic-bezier(0.32, 0.72, 0, 1) forwards;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,oK=l.default.div.withConfig({componentId:"zh__sc-1f96f242-1"})`
  width: 36px;
  height: 36px;
`,oX=l.default.div.withConfig({componentId:"zh__sc-1f96f242-2"})`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 24px;

  width: 100%;
  padding: 16px;
`,oq=l.default.div.withConfig({componentId:"zh__sc-1f96f242-3"})`
  display: flex;
  gap: 4px;
  align-items: flex-start;
  align-self: stretch;

  padding: 12px;
  border: 1px solid #e5e7eb;
  border-radius: 6px;

  background: #f5f8ff;
`,oQ=l.default.div.withConfig({componentId:"zh__sc-1f96f242-4"})`
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
`,oJ=l.default.div.withConfig({componentId:"zh__sc-1f96f242-5"})`
  display: flex;
  flex-direction: column;
  gap: 24px;

  width: 100%;
  padding: 0;
`,oZ=l.default.div.withConfig({componentId:"zh__sc-1f96f242-6"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;
`,o0=l.default.div.withConfig({componentId:"zh__sc-1f96f242-7"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;
`,o1=l.default.div.withConfig({componentId:"zh__sc-1f96f242-8"})`
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
`,o2=l.default.div.withConfig({componentId:"zh__sc-1f96f242-9"})`
  font-size: 14px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
`,o6=l.default.div.withConfig({componentId:"zh__sc-1f96f242-10"})`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,o4=l.default.button.withConfig({componentId:"zh__sc-1f96f242-11"})`
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
`,o5=l.default.div.withConfig({componentId:"zh__sc-1f96f242-12"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;
`,o3=l.default.div.withConfig({componentId:"zh__sc-1f96f242-13"})`
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
`,o9=(0,l.default)(r.default.Input.Textarea).withConfig({componentId:"zh__sc-1f96f242-14"})`
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
`,o8=l.default.div.withConfig({componentId:"zh__sc-1f96f242-15"})`
  display: flex;
  gap: 10px;
  align-items: center;
  align-self: stretch;
`,o7=(0,l.default)(r.default.Button.Outlined).withConfig({componentId:"zh__sc-1f96f242-16"})`
  display: flex;
  gap: 4px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,re=(0,l.default)(r.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-1f96f242-17"})`
  display: flex;
  flex: 1 0 0;
  gap: 4px;
  align-items: center;
  justify-content: center;

  height: 36px;
  padding: 8px 16px;
`;var rt=e.i(8582);let rn=l.keyframes`
	from {
		transform: translateX(100%);
		opacity: 0;
	}

	to {
		transform: translateX(0);
		opacity: 1;
	}
`,ri=(0,l.default)(oS).withConfig({componentId:"zh__sc-c3e70251-0"})`
  will-change: transform, opacity;
  width: 634px;
  animation: ${rn} 0.28s cubic-bezier(0.32, 0.72, 0, 1) forwards;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,rl=l.default.div.withConfig({componentId:"zh__sc-c3e70251-1"})`
  width: 36px;
  height: 36px;
`,ra=(0,l.default)(oL).withConfig({componentId:"zh__sc-c3e70251-2"})`
  width: 56px;
  height: 36px;
  border: 1px solid #4f39f6;
  border-radius: 4px;

  color: #4f39f6;
`,rd=(0,l.default)(oN).withConfig({componentId:"zh__sc-c3e70251-3"})`
  min-height: 0;
`,ro=l.default.div.withConfig({componentId:"zh__sc-c3e70251-4"})`
  overflow: hidden;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 24px;

  width: 100%;
  min-height: 0;
  padding: 16px;
`,rr=l.default.div.withConfig({componentId:"zh__sc-c3e70251-5"})`
  display: flex;
  gap: 4px;
  align-items: flex-start;
  align-self: stretch;
`,rs=l.default.div.withConfig({componentId:"zh__sc-c3e70251-6"})`
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
`,rc=l.default.div.withConfig({componentId:"zh__sc-c3e70251-7"})`
  overflow: hidden;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;

  min-height: 0;
`,rf=l.default.div.withConfig({componentId:"zh__sc-c3e70251-8"})`
  overflow-y: auto;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;

  min-height: 0;
`,rh=l.default.div.withConfig({componentId:"zh__sc-c3e70251-9"})`
  display: flex;
  flex-direction: column;
  gap: 24px;

  width: 100%;
  padding: 16px;
  border: 1px solid #e5e7eb;
  border-radius: 6px;

  background: #f5f8ff;
`,rp=l.default.div.withConfig({componentId:"zh__sc-c3e70251-10"})`
  display: flex;
  gap: 8px;
  align-items: center;
  width: 100%;
`,ru=(0,l.default)(r.default.Input.Text).withConfig({componentId:"zh__sc-c3e70251-11"})`
  flex: 1;

  height: 36px;
  padding: 4px 16px;
  border: 1px solid #e5e9ef;
  border-radius: 4px;

  font-size: 16px;
  line-height: 20px;
  color: #0a0a0a;

  &::placeholder {
    color: #9ca3af;
  }
`,rx=(0,l.default)(r.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-c3e70251-12"})`
  height: 36px;
  padding: 8px 16px;
  border-radius: 4px;

  font-size: 16px;
  font-weight: 500;
`,rg=l.default.div.withConfig({componentId:"zh__sc-c3e70251-13"})`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,rm=l.default.button.withConfig({componentId:"zh__sc-c3e70251-14"})`
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

  ${({$selected:e})=>e?`
    border-color: #4f39f6;
    color: #fff;
    background: #4f39f6;
  `:""}
`,rb=l.default.div.withConfig({componentId:"zh__sc-c3e70251-15"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;
`,rj=l.default.div.withConfig({componentId:"zh__sc-c3e70251-16"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;
`,rw=l.default.div.withConfig({componentId:"zh__sc-c3e70251-17"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;
`,r_=l.default.div.withConfig({componentId:"zh__sc-c3e70251-18"})`
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
`,ry=l.default.div.withConfig({componentId:"zh__sc-c3e70251-19"})`
  font-size: 14px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
`,rv=l.default.div.withConfig({componentId:"zh__sc-c3e70251-20"})`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,rC=l.default.button.withConfig({componentId:"zh__sc-c3e70251-21"})`
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

  ${({$selected:e})=>e?`
    border-color: #4f39f6;
    color: #fff;
    background: #4f39f6;
  `:""}
`,rI=l.default.div.withConfig({componentId:"zh__sc-c3e70251-22"})`
  display: flex;
  flex: 0 0 auto;
  align-items: flex-end;
  justify-content: flex-end;

  width: 100%;
`,rz=(0,l.default)(r.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-c3e70251-23"})`
  height: 36px;
  padding: 8px 16px;
  border-radius: 4px;

  font-size: 16px;
  font-weight: 500;
`,rT=l.default.div.withConfig({componentId:"zh__sc-c3e70251-24"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;
`,rE=l.default.div.withConfig({componentId:"zh__sc-c3e70251-25"})`
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
`,rk=(0,l.default)(r.default.Input.Textarea).withConfig({componentId:"zh__sc-c3e70251-26"})`
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

  ${({$isAutoFilled:e})=>e?`
    border: 1px solid #e9ecef;
    border-radius: 8px;
    background: #f5f3ff;
  `:""}
`,rS=l.default.div.withConfig({componentId:"zh__sc-c3e70251-27"})`
  display: flex;
  gap: 10px;
  align-items: center;
  align-self: stretch;
`,rO=(0,l.default)(r.default.Button.Outlined).withConfig({componentId:"zh__sc-c3e70251-28"})`
  display: flex;
  gap: 4px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;

  font-size: 16px;
  font-weight: 400;
`,rA=(0,l.default)(r.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-c3e70251-29"})`
  display: flex;
  flex: 1 0 0;
  gap: 4px;
  align-items: center;
  justify-content: center;

  height: 36px;
  padding: 8px 16px;

  font-size: 16px;
  font-weight: 400;
`,r$=[{key:"state1",index:"01",label:"영양 상태 — 이용자의 영양 변화 정도를 선택해주세요.",sentences:{positive:"☐ 영양 상태: 정기적이고 꾸준한 영양식 식사 제공 및 방문 관리를 밀착 모니터링한 결과, 영양 체크리스트 점수가 서비스 참여 전 대비 크게 향상되었으며 안색과 전반적인 신체 기력 상태가 매우 양호하게 개선되었습니다.",neutral:"☐ 영양 상태: 현재 제공받고 있는 모든 건강 식단에 비교적 안정적이고 매우 높은 순응도를 보이고 있으며, 저체중이나 기타 체중 감소 등의 기왕 병력 이전의 안정적인 건강 수치를 계속해서 유지하고 있습니다.",negative:"☐ 영양 상태: 최근 들어 식사 흡수 기능 저하를 자주 호소하시며 일일 섭취하는 식사량이 전보다 감소하셨음이 확인되었습니다. 식사 조절과 아울러 이에 대한 의료적 치료 등 병원의 조기 개입이 필요합니다."}},{key:"state2",index:"02",label:"식욕 상태 — 이용자의 식욕 변화 정도를 선택해주세요.",sentences:{positive:"☐ 식욕 상태: 식사 시간에 맞춰 스스로 음식을 찾으실 정도로 식욕이 크게 왕성해지셨으며, 제공되는 반찬과 밥을 남김없이 골고루 섭취하시어 전반적인 음식 섭취 순응도가 매우 높게 나타납니다.",neutral:"☐ 식욕 상태: 식사량이나 음식을 대하는 태도에 특별한 저하나 항진 없이 평소 수준을 그대로 유지하고 계십니다. 거부감 없이 매 끼니 적정량의 식사를 무난하게 마치시는 상태입니다.",negative:"☐ 식욕 상태: 일시적인 재원 변화나 체력 감소 등으로 극심한 우울감과 음식 거부 반응이 가끔 관찰되며, 이로 인해 신체 면역력 결핍 우려가 또한 생김에 따라 돌봄 과정이나 수행 다음 심리 유형을 수정할 필요가 있습니다."}},{key:"state3",index:"03",label:"상담·정서 상태 — 이용자의 심리·정서 변화 정도를 선택해주세요.",sentences:{positive:"☐ 상담·정서 상태: 정기적인 맞춤 상담 시나리오를 통해 정밀 분석 기법을 지속적으로 러닝한 결과, 기분이 좋고 전보다 웃음 가득한, 유쾌하고 우울감 없는 일상을 마주하고 계실뿐더러 감정이 정돈된 가장 이상적인 심리적 안정을 변함없이 나타내십니다.",neutral:"☐ 상담·정서 상태: 시기적(계절별/월별) 환경 변화 기능을 통하거나 매일매일 발생 및 부여되는 질문과 과제들에 대해 감정의 변화가 미미하며, 사회복지사 등 면담 평정 가이드라인에서 무난하고 일률적인 심리 현황을 보여주고 계십니다.",negative:"☐ 상담·정서 상태: 가끔 위축적 성향을 활발히 높은 빈도로, 신경 감정적 상태가 일어났으며 스스로 감정을 제어하는 등의 부여가 부족합니다. 정기적 상담을 연계하여 가장 신속히 지도가 반복적으로 이루어져야 할 필요성이 있습니다."}}],rD={state1:null,state2:null,state3:null},rL={positive:"긍정 변화 / 개선됨",neutral:"변화 없음 / 유지됨",negative:"부정적 변화 / 결과 요망"},rR=["positive","neutral","negative"],rN=(e,t,n)=>Math.min(n,Math.max(t,e)),rP=["boxSizing","fontFamily","fontSize","fontWeight","fontStyle","lineHeight","letterSpacing","textTransform","textIndent","textDecoration","wordSpacing","tabSize","paddingTop","paddingRight","paddingBottom","paddingLeft"],rF=(e,t,n,i=.08)=>{let l=rN(n,0,t.length),a=document.createElement("div"),d=document.createElement("span"),o=window.getComputedStyle(e);a.style.position="absolute",a.style.left="-99999px",a.style.top="0",a.style.visibility="hidden",a.style.pointerEvents="none",a.style.width=`${e.clientWidth}px`,a.style.whiteSpace="pre-wrap",a.style.overflowWrap="break-word",a.style.wordBreak="break-word",rP.forEach(e=>{a.style[e]=o[e]}),a.textContent=t.slice(0,l),d.textContent="​",a.appendChild(d),document.body.appendChild(a);let r=d.offsetTop;a.remove();let s=Math.max(e.scrollHeight-e.clientHeight,0);return rN(r-e.clientHeight*i,0,s)},rM=l.keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }

  to {
    transform: translateX(0);
    opacity: 1;
  }
`,rB=(0,l.default)(oS).withConfig({componentId:"zh__sc-42312189-0"})`
  will-change: transform, opacity;
  animation: ${rM} 0.28s cubic-bezier(0.32, 0.72, 0, 1) forwards;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,rU=l.default.div.withConfig({componentId:"zh__sc-42312189-1"})`
  width: 36px;
  height: 36px;
`,rW=l.default.div.withConfig({componentId:"zh__sc-42312189-2"})`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 24px;

  width: 100%;
  padding: 16px;
`,rV=l.default.div.withConfig({componentId:"zh__sc-42312189-3"})`
  display: flex;
  gap: 4px;
  align-items: flex-start;
  align-self: stretch;

  padding: 12px;
  border: 1px solid #e5e7eb;
  border-radius: 6px;

  background: #f5f8ff;
`,rY=l.default.div.withConfig({componentId:"zh__sc-42312189-4"})`
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
`,rH=l.default.div.withConfig({componentId:"zh__sc-42312189-5"})`
  display: flex;
  flex-direction: column;
  gap: 24px;

  width: 100%;
  padding: 0;
`,rG=l.default.div.withConfig({componentId:"zh__sc-42312189-6"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;
`,rK=l.default.div.withConfig({componentId:"zh__sc-42312189-7"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;
`,rX=l.default.div.withConfig({componentId:"zh__sc-42312189-8"})`
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
`,rq=l.default.div.withConfig({componentId:"zh__sc-42312189-9"})`
  font-size: 14px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
`,rQ=l.default.div.withConfig({componentId:"zh__sc-42312189-10"})`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,rJ=l.default.button.withConfig({componentId:"zh__sc-42312189-11"})`
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
`,rZ=l.default.div.withConfig({componentId:"zh__sc-42312189-12"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;
`,r0=l.default.div.withConfig({componentId:"zh__sc-42312189-13"})`
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
`,r1=(0,l.default)(r.default.Input.Textarea).withConfig({componentId:"zh__sc-42312189-14"})`
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
`,r2=l.default.div.withConfig({componentId:"zh__sc-42312189-15"})`
  display: flex;
  gap: 10px;
  align-items: center;
  align-self: stretch;
`,r6=(0,l.default)(r.default.Button.Outlined).withConfig({componentId:"zh__sc-42312189-16"})`
  display: flex;
  gap: 4px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,r4=(0,l.default)(r.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-42312189-17"})`
  display: flex;
  flex: 1 0 0;
  gap: 4px;
  align-items: center;
  justify-content: center;

  height: 36px;
  padding: 8px 16px;
`;function r5(){return(r5=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var r3=(0,i.forwardRef)(function(e,t){var n=e.color,l=e.size,a=void 0===l?24:l,d=function(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["color","size"]);return i.default.createElement("svg",r5({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),i.default.createElement("line",{x1:"19",y1:"12",x2:"5",y2:"12"}),i.default.createElement("polyline",{points:"12 19 5 12 12 5"}))});r3.propTypes={color:C.default.string,size:C.default.oneOfType([C.default.string,C.default.number])},r3.displayName="ArrowLeft",(0,n.observer)(function({goBack:e,close:n,showToast:l}){let a=async e=>!1,[d,r]=(0,i.useState)({name:"",relation:"",phone:"",address:""}),[s,c]=(0,i.useState)({name:"",relation:"",phone:"",address:""}),f=(e,t)=>{r(n=>({...n,[e]:t})),c(t=>({...t,[e]:""}))},h=async()=>{let e=!0;""===d.name.trim()&&(c(e=>({...e,name:"필수 입력값입니다."})),e=!1),""===d.relation.trim()&&(c(e=>({...e,relation:"필수 입력값입니다."})),e=!1),""===d.phone.trim()&&(c(e=>({...e,phone:"필수 입력값입니다."})),e=!1),e&&await a({name:d.name,relation:d.relation,phone:d.phone,address:d.address})};return(0,t.jsxs)(oS,{children:[(0,t.jsxs)(oO,{children:[(0,t.jsx)(o$,{onClick:e,children:(0,t.jsx)(r3,{size:16})}),(0,t.jsx)(oD,{children:"신규 보호자 추가"}),(0,t.jsx)(oL,{onClick:n,children:(0,t.jsx)(S.X,{size:16})})]}),(0,t.jsx)(oR,{}),(0,t.jsx)(oN,{children:(0,t.jsx)(r9,{children:(0,t.jsxs)(r8,{children:[(0,t.jsxs)(r7,{children:[(0,t.jsxs)(se,{children:[(0,t.jsx)(st,{children:"성명"}),(0,t.jsx)(sn,{type:"text",placeholder:"보호자 성명을 입력하세요.",value:d.name,onChange:e=>f("name",e.target.value),$error:""!==s.name}),(0,t.jsx)(sl,{$show:""!==s.name,children:s.name})]}),(0,t.jsxs)(se,{children:[(0,t.jsx)(st,{children:"이용자와의 관계"}),(0,t.jsx)(sn,{type:"text",placeholder:"예: 자녀(딸), 자녀(아들), 자녀(며느리)",value:d.relation,onChange:e=>f("relation",e.target.value),$error:""!==s.relation}),(0,t.jsx)(sl,{$show:""!==s.relation,children:s.relation})]}),(0,t.jsxs)(se,{children:[(0,t.jsx)(st,{children:"연락처"}),(0,t.jsx)(sn,{type:"tel",placeholder:"보호자 연락처를 입력하세요.",value:d.phone,onChange:e=>f("phone",e.target.value),$error:""!==s.phone}),(0,t.jsx)(sl,{$show:""!==s.phone,children:s.phone})]}),(0,t.jsxs)(se,{children:[(0,t.jsx)(st,{children:"주소"}),(0,t.jsx)(si,{placeholder:"보호자 주소를 입력하세요.",value:d.address,onChange:e=>f("address",e.target.value),$error:""!==s.address,rows:2}),(0,t.jsx)(sl,{$show:""!==s.address,children:s.address})]})]}),(0,t.jsxs)(sa,{onClick:()=>void h(),children:[(0,t.jsx)(o.Check,{size:20}),"추가 후 계약서에 반영하기"]})]})})})]})});let r9=l.default.div.withConfig({componentId:"zh__sc-f12494e7-0"})`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  align-self: stretch;

  padding: 16px;
`,r8=l.default.div.withConfig({componentId:"zh__sc-f12494e7-1"})`
  display: flex;
  flex-direction: column;
  gap: 16px;

  width: 100%;
  padding: 16px;
  border: 1px solid #e5e9ef;
  border-radius: 8px;

  background: #fff;
`,r7=l.default.div.withConfig({componentId:"zh__sc-f12494e7-2"})`
  display: flex;
  flex-direction: column;
`,se=l.default.div.withConfig({componentId:"zh__sc-f12494e7-3"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`,st=l.default.label.withConfig({componentId:"zh__sc-f12494e7-4"})`
  font-size: 16px;
  font-weight: 500;
  color: #000;
`,sn=l.default.input.withConfig({componentId:"zh__sc-f12494e7-5"})`
  padding: 8px 16px;
  border: 1px solid #e5e9ef;
  border-radius: 4px;
  font-size: 16px;

  &::placeholder {
    color: #9ca3af;
  }

  &:focus {
    border-color: ${W.default.style.color.PRIMARY[100]};
    outline: none;
  }

  ${({$error:e})=>!0===e&&l.css`
      border: 1px solid #ef4444;
    `}
`,si=l.default.textarea.withConfig({componentId:"zh__sc-f12494e7-6"})`
  resize: none;

  padding: 8px 16px;
  border: 1px solid #e5e9ef;
  border-radius: 4px;

  font-size: 16px;

  &::placeholder {
    color: #9ca3af;
  }

  &:focus {
    border-color: ${W.default.style.color.PRIMARY[100]};
    outline: none;
  }

  ${({$error:e})=>!0===e&&l.css`
      border: 1px solid #ef4444;
    `}
`,sl=l.default.div.withConfig({componentId:"zh__sc-f12494e7-7"})`
  display: flex;

  height: 24px;

  font-size: 14px;
  font-weight: 400;
  font-style: normal;
  line-height: 18px; /* 128.571% */
  color: #ef4444;

  visibility: ${({$show:e})=>!0===e?"visible":"hidden"};
`,sa=(0,l.default)(r.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-f12494e7-8"})`
  display: flex;
  gap: 4px;
  align-items: center;
  align-self: stretch;
  justify-content: center;

  padding: 8px;
`,{PRIMARY:sd}=((0,n.observer)(function({close:e,showToast:n}){let l=[],a=(void 0)??null,d=(0,i.useMemo)(()=>{let e=l??[];if(null===a)return e;let t=e.find(e=>e.uuid===a);return t?[t,...e.filter(e=>e.uuid!==a)]:e},[l,a]);return(0,t.jsx)(so,{children:d.map(i=>(0,t.jsxs)(sr,{onClick:()=>{i.uuid,n(),e()},$selected:void 0===i.uuid,children:[(0,t.jsxs)(ss,{children:[(0,t.jsxs)(sc,{children:[(0,t.jsx)(sf,{children:`${i.name.family} ${i.name.given}`}),(0,t.jsx)(sh,{children:i.relation})]}),(0,t.jsxs)(sp,{children:[(0,t.jsxs)(su,{children:[(0,t.jsx)(sx,{children:"전화번호"}),(0,t.jsx)(sg,{}),(0,t.jsx)(sx,{children:i.phone.mobile??"-"})]}),(0,t.jsxs)(su,{children:[(0,t.jsx)(sx,{children:"주소"}),(0,t.jsx)(sg,{}),(0,t.jsx)(sx,{children:i.address})]})]})]}),(0,t.jsx)(sm,{children:void 0===i.uuid?(0,t.jsx)(sj,{children:"지금 선택됨"}):(0,t.jsxs)(sb,{children:["선택",(0,t.jsx)(z,{size:16})]})})]},i.uuid))})}),W.default.style.color),so=l.default.div.withConfig({componentId:"zh__sc-3bbaa2f0-0"})`
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;

  height: 729px;
  padding: 16px;

  background: #f9fafb;
`,sr=l.default.div.withConfig({componentId:"zh__sc-3bbaa2f0-1"})`
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
`,ss=l.default.div.withConfig({componentId:"zh__sc-3bbaa2f0-2"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;
`,sc=l.default.div.withConfig({componentId:"zh__sc-3bbaa2f0-3"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;
`,sf=l.default.div.withConfig({componentId:"zh__sc-3bbaa2f0-4"})`
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
`,sh=l.default.div.withConfig({componentId:"zh__sc-3bbaa2f0-5"})`
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
`,sp=l.default.div.withConfig({componentId:"zh__sc-3bbaa2f0-6"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
  align-self: stretch;
`,su=l.default.div.withConfig({componentId:"zh__sc-3bbaa2f0-7"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;
`,sx=l.default.div.withConfig({componentId:"zh__sc-3bbaa2f0-8"})`
  min-width: 50px;

  font-size: 14px;
  font-weight: 400;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
  text-align: left;
`,sg=l.default.div.withConfig({componentId:"zh__sc-3bbaa2f0-9"})`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;

  width: 1px;
  height: 20px;

  background: #e5e7eb;
`,sm=l.default.div.withConfig({componentId:"zh__sc-3bbaa2f0-10"})`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-end;
  align-self: stretch;
  justify-content: center;
`,sb=l.default.button.withConfig({componentId:"zh__sc-3bbaa2f0-11"})`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;

  padding: 8px;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 16px; /* 100% */
  color: ${sd[100]};
  letter-spacing: -1px;
`,sj=(0,l.default)(sb).withConfig({componentId:"zh__sc-3bbaa2f0-12"})`
  border-radius: 99px;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 16px; /* 100% */
  color: #fff;
  letter-spacing: -1px;

  background: #4f39f6;
`;var sw=e.i(5543);(0,n.observer)(function({setSelectedDrawerKey:e}){return(0,t.jsxs)(sy,{children:[(0,t.jsxs)(sv,{children:[(0,t.jsx)(O.default.Search,{size:17,color:"#9CA3AF"}),(0,t.jsx)(sC,{placeholder:"보호자 이름을 검색하세요.",value:"",onChange:e=>{e.target.value}})]}),(0,t.jsxs)(sI,{onClick:()=>e?.("add"),children:[(0,t.jsx)(sw.Plus,{size:18}),"신규 대리인(보호자) 추가하기"]})]})});let{PRIMARY:s_}=W.default.style.color,sy=l.default.div.withConfig({componentId:"zh__sc-612601c-0"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  align-self: stretch;

  padding: 16px;
`,sv=l.default.div.withConfig({componentId:"zh__sc-612601c-1"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;

  height: 36px;
  padding: 8px 16px;
  border: 1px solid ${s_[100]};
  border-radius: 4px;

  background: #fff;
`,sC=l.default.input.withConfig({componentId:"zh__sc-612601c-2"})`
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
`,sI=(0,l.default)(r.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-612601c-3"})`
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
`,sz=function({value:e,onChange:n,onApply:l,onClose:a}){let[d,o]=(0,i.useState)(()=>{let t,n;return t=e.replace(/\s+/g," ").trim(),n={...oF},oP.forEach(e=>{let i=e.options.find(n=>{let i=oU(e.optionLabels,n),l="state1"===e.key?oM[n]:oB[n]??"";return""!==i&&t.includes(i)||""!==l&&t.includes(l)});n[e.key]=i??null}),n}),{ref:r,fire:s}=ef(),c=(0,i.useRef)(!1),f=(0,i.useRef)(0),h=(0,i.useRef)(null);(0,i.useEffect)(()=>{if(!c.current)return;let t=r.current;if(null!==t)if(null!==h.current){let e=Math.max(t.scrollHeight-t.clientHeight,0);t.scrollTop=oW(h.current,0,e),h.current=null}else t.scrollTop=oY(t,e,f.current);c.current=!1},[r,e]);let p=""!==e.trim(),u=Object.values(d).filter(e=>null!==e).length,x=u===oP.length;return(0,t.jsxs)(oG,{children:[(0,t.jsxs)(oO,{children:[(0,t.jsx)(oK,{}),(0,t.jsx)(oD,{children:"자동으로 문장 생성하기"}),(0,t.jsx)(oL,{onClick:a,children:(0,t.jsx)(S.X,{size:16})})]}),(0,t.jsx)(oR,{}),(0,t.jsx)(oN,{children:(0,t.jsxs)(oX,{children:[(0,t.jsxs)(oq,{children:[(0,t.jsx)(eJ.default,{sx:{fontSize:16}}),(0,t.jsx)(oQ,{children:"각 카테고리와 세부 항목을 선택하면, 내용에 맞는 문장이 하단에 자동으로 생성됩니다."})]}),(0,t.jsx)(oJ,{children:oP.map(i=>{let l=d[i.key];return(0,t.jsxs)(oZ,{children:[(0,t.jsxs)(o0,{children:[(0,t.jsx)(o1,{children:i.index}),(0,t.jsx)(o2,{children:i.label})]}),(0,t.jsx)(o6,{children:i.options.map(a=>(0,t.jsxs)(o4,{type:"button",$selected:l===a,onClick:()=>((t,i)=>{let l=d[t];if(l===i){let n=r.current,i="state1"===t?oM[l]:oB[l]??"",a=""===i?-1:e.indexOf(i);null!==n&&a>=0&&(h.current=oY(n,e,a,.5))}else h.current=null;let a={...d,[t]:l===i?null:i};o(a);let p=(e=>{let t=e.state1,n=e.state2;if(null===t||null===n)return"";let i=oM[t],l=oB[n]??"";return""===i.trim()||""===l.trim()?"":`○ 대상자의 식사영양관리 서비스 비용 청구 기간 중 ${i} ${l} 이에 따라 예외지급을 청구합니다.`.trim()})(a);""!==p.trim()&&s(),f.current=((e,t,n)=>{if(""===n.trim())return 0;let i=t[e];if(null===i)return 0;let l="state1"===e?oM[i]:oB[i]??"",a=""===l?-1:n.indexOf(l);return a>=0?a:0})(t,a,p),c.current=!0,n(p)})(i.key,a),children:[oU(i.optionLabels,a),l===a&&(0,t.jsx)(iq.default,{sx:{fontSize:16}})]},`${i.key}-${a}`))})]},i.key)})}),(0,t.jsx)(oR,{style:{marginTop:"auto"}}),(0,t.jsxs)(o5,{children:[(0,t.jsxs)(o3,{children:[(0,t.jsx)(O.default.AI,{size:16,color:"#4f39f6"}),"자동 생성 문장"]}),(0,t.jsx)(o9,{ref:r,value:e,placeholder:"카테고리/키워드와 세부 상태를 선택하면 문서에 사용할 문장이 자동으로 생성됩니다.",readOnly:!0})]}),(0,t.jsxs)(o8,{children:[(0,t.jsx)(o7,{type:"button",onClick:()=>{o({...oF}),n("")},disabled:!p,children:"다시 생성하기"}),(0,t.jsxs)(re,{type:"button",onClick:l,disabled:!(0===u||x),children:[(0,t.jsx)(iq.default,{sx:{fontSize:16}}),"보고서에 반영하기"]})]})]})})]})},sT=function({value:e,autoFilledReferenceValue:n,keywords:l,isKeywordListLoading:a,isKeywordCreating:d,isGenerating:o,onAddKeyword:r,onGenerate:s,onChange:c,onApply:f,onClose:h}){let{ref:p,fire:u}=ef(),[x,g]=(0,i.useState)(""),[m,b]=(0,i.useState)([]),[j,w]=(0,i.useState)({}),_=["POSITIVE","NEUTRAL","NEGATIVE"],y=m.filter(e=>l.includes(e)),v=""!==e.trim(),C=x.trim(),I=""!==C&&!1===d&&!1===a,z=y.every(e=>void 0!==j[e]),T=!1===a&&!1===o&&y.length>0&&z,E=""!==e&&e===n,k=async()=>{I&&(await r(C),g(""))},A=async()=>{if(!T)return;let e=y.reduce((e,t)=>{let n=j[t];return void 0===n||e.push({keyword:t,detailStatus:n}),e},[]),t=await s({selectedKeywordDetailStatuses:e});null!==t&&(""!==t.trim()&&u(),c(t))};return(0,t.jsxs)(ri,{children:[(0,t.jsxs)(oO,{children:[(0,t.jsx)(rl,{}),(0,t.jsx)(oD,{children:"자동으로 문장 생성하기"}),(0,t.jsx)(ra,{onClick:h,children:(0,t.jsx)(S.X,{size:16})})]}),(0,t.jsx)(oR,{}),(0,t.jsx)(rd,{children:(0,t.jsxs)(ro,{children:[(0,t.jsxs)(rc,{children:[(0,t.jsxs)(rf,{children:[(0,t.jsxs)(rr,{children:[(0,t.jsx)(eJ.default,{sx:{fontSize:16}}),(0,t.jsx)(rs,{children:"각 키워드와 변화 정도를 선택한 후, [문장 생성하기] 버튼을 클릭해주세요. 키워드와 내용에 맞는 문장이 하단에 자동으로 생성됩니다."})]}),(0,t.jsxs)(rh,{children:[(0,t.jsxs)(rp,{children:[(0,t.jsx)(ru,{value:x,placeholder:"추가할 키워드를 입력해주세요. (예: 복지관 연계)",onChange:e=>{g(e.target.value)},onKeyDown:e=>{"Enter"===e.key&&(e.preventDefault(),k())}}),(0,t.jsx)(rx,{type:"button",disabled:!I,onClick:()=>{k()},children:"새 키워드 추가"})]}),(0,t.jsx)(rg,{children:l.map(e=>(0,t.jsx)(rm,{type:"button",$selected:y.includes(e),onClick:()=>{b(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e]),w(t=>{if(!1===m.includes(e))return t;let n={...t};return delete n[e],n})},children:e},e))})]}),y.length>0?(0,t.jsx)(rb,{children:y.map((e,n)=>(0,t.jsxs)(rj,{children:[(0,t.jsxs)(rw,{children:[(0,t.jsx)(r_,{children:String(n+1).padStart(2,"0")}),(0,t.jsxs)(ry,{children:["[",e,"]에 대한 세부 상태를 선택해주세요."]})]}),(0,t.jsx)(rv,{children:_.map(n=>(0,t.jsx)(rC,{type:"button",$selected:j[e]===n,onClick:()=>{w(t=>({...t,[e]:n}))},children:rt.default[n].label},`${e}:${n}`))})]},e))}):null]}),(0,t.jsx)(rI,{children:(0,t.jsx)(rz,{type:"button",disabled:!T,onClick:()=>{A()},children:"문장 생성하기"})})]}),(0,t.jsx)(oR,{style:{marginTop:"auto"}}),(0,t.jsxs)(rT,{children:[(0,t.jsxs)(rE,{children:[(0,t.jsx)(O.default.AI,{size:16,color:"#4f39f6"}),"자동 생성 문장"]}),(0,t.jsx)(rk,{$isAutoFilled:E,ref:p,value:e,placeholder:"카테고리/키워드와 세부 상태를 선택하면 문서에 사용할 문장이 자동으로 생성됩니다.",onChange:e=>{c(e.target.value)}})]}),(0,t.jsxs)(rS,{children:[(0,t.jsx)(rO,{type:"button",onClick:()=>{c(""),b([]),w({})},disabled:!v,children:"다시 생성하기"}),(0,t.jsxs)(rA,{type:"button",onClick:()=>{f()},children:[(0,t.jsx)(iq.default,{sx:{fontSize:16}}),"보고서에 반영하기"]})]})]})})]})},sE=function({value:e,onChange:n,onApply:l,onClose:a}){let d=(0,i.useMemo)(()=>{let t,n;return t=e.split("\n").map(e=>e.trim()).filter(e=>""!==e),n={...rD},r$.forEach(e=>{let i=rR.find(n=>t.includes(e.sentences[n]));n[e.key]=i??null}),n},[e]),{ref:o,fire:r}=ef(),s=(0,i.useRef)(!1),c=(0,i.useRef)(0),f=(0,i.useRef)(null);(0,i.useEffect)(()=>{if(!s.current)return;let t=o.current;if(null!==t)if(null!==f.current){let e=Math.max(t.scrollHeight-t.clientHeight,0);t.scrollTop=rN(f.current,0,e),f.current=null}else t.scrollTop=rF(t,e,c.current);s.current=!1},[o,e]);let h=""!==e.trim();return(0,t.jsxs)(rB,{children:[(0,t.jsxs)(oO,{children:[(0,t.jsx)(rU,{}),(0,t.jsx)(oD,{children:"자동으로 문장 생성하기"}),(0,t.jsx)(oL,{onClick:a,children:(0,t.jsx)(S.X,{size:16})})]}),(0,t.jsx)(oR,{}),(0,t.jsx)(oN,{children:(0,t.jsxs)(rW,{children:[(0,t.jsxs)(rV,{children:[(0,t.jsx)(eJ.default,{sx:{fontSize:16}}),(0,t.jsx)(rY,{children:"각 카테고리와 세부 항목을 선택하면, 내용에 맞는 문장이 하단에 자동으로 생성됩니다."})]}),(0,t.jsx)(rH,{children:r$.map(i=>{let l=d[i.key];return(0,t.jsxs)(rG,{children:[(0,t.jsxs)(rK,{children:[(0,t.jsx)(rX,{children:i.index}),(0,t.jsx)(rq,{children:i.label})]}),(0,t.jsx)(rQ,{children:rR.map(a=>(0,t.jsxs)(rJ,{type:"button",$selected:l===a,onClick:()=>((t,i)=>{let l=d[t];if(null!==l&&null===i){let n=o.current,i=r$.find(e=>e.key===t)?.sentences[l]??"",a=""===i?-1:e.indexOf(i);null!==n&&a>=0&&(f.current=rF(n,e,a,.5))}else f.current=null;let a={...d,[t]:i},h=r$.map(e=>{let t=a[e.key];return null===t?null:e.sentences[t]}).filter(e=>null!==e).join("\n\n");""!==h.trim()&&r(),c.current=((e,t,n)=>{if(""===n.trim())return 0;let i=t[e];if(null===i){let e=r$.findIndex(e=>null!==t[e.key]);if(e<0)return 0;let i=r$[e];if(void 0===i)return 0;let l=t[i.key];if(null===l)return 0;let a=i.sentences[l],d=n.indexOf(a);return d>=0?d:0}let l=r$.find(t=>t.key===e)?.sentences[i]??"",a=""===l?-1:n.indexOf(l);return a>=0?a:0})(t,a,h),s.current=!0,n(h)})(i.key,l===a?null:a),children:[rL[a],l===a&&(0,t.jsx)(iq.default,{sx:{fontSize:16}})]},`${i.key}-${a}`))})]},i.key)})}),(0,t.jsx)(oR,{style:{marginTop:"auto"}}),(0,t.jsxs)(rZ,{children:[(0,t.jsxs)(r0,{children:[(0,t.jsx)(O.default.AI,{size:16,color:"#4f39f6"}),"자동 생성 문장"]}),(0,t.jsx)(r1,{ref:o,value:e,placeholder:"카테고리/키워드와 세부 상태를 선택하면 문서에 사용할 문장이 자동으로 생성됩니다.",readOnly:!0})]}),(0,t.jsxs)(r2,{children:[(0,t.jsx)(r6,{type:"button",onClick:()=>{n("")},disabled:!h,children:"다시 생성하기"}),(0,t.jsxs)(r4,{type:"button",onClick:l,children:[(0,t.jsx)(iq.default,{sx:{fontSize:16}}),"보고서에 반영하기"]})]})]})})]})};var sk=e.i(28095);let sS=function({isOpen:e,contractId:n,onClose:l,onConfirm:a}){let[d,o]=(0,i.useState)("idle"),[r,s]=(0,i.useState)([]),[c,f]=(0,i.useState)("");(0,i.useEffect)(()=>{let t=!1;return e?((async()=>{if(null===n){if(t)return;o("error"),s([]),f("");return}if(t)return;o("loading");let[e,i]=await lT.default.data.contractPayment.getDepositList({contractId:n});if(t)return;if(null!==e||null===i)return o("error");let l=i.slice().sort((e,t)=>{let n=t.depositDate.localeCompare(e.depositDate);return 0!==n?n:t.id.localeCompare(e.id)});s(l),f(l[0]?.id??""),o("success")})(),()=>{t=!0}):()=>{t=!0}},[n,e]);let h=(0,i.useMemo)(()=>r.find(e=>e.id===c)??null,[r,c]);return e?(0,t.jsx)(sO,{children:(0,t.jsxs)(sA,{onClick:e=>e.stopPropagation(),children:[(0,t.jsxs)(s$,{children:[(0,t.jsx)(sD,{children:"본인부담금 영수증을 작성할 입금 내역을 선택해주세요."}),(0,t.jsx)(sL,{children:"아래 선택한 입금 내역이 본인부담금 영수증에 반영되며, 반영 이후에도 자유롭게 수정할 수 있습니다."}),(0,t.jsxs)(sR,{children:[(0,t.jsx)(sN,{children:"입금 내역"}),"success"===d&&r.length>0?(0,t.jsx)(sP,{value:c,onChange:e=>{f(e.target.value)},children:r.map(e=>{var n;return(0,t.jsx)("option",{value:e.id,children:`${function(e){let t=e.match(/^(\d{4})-(\d{2})-(\d{2})$/);if(null===t)return e;let[,n,i,l]=t;return`${n}년 ${i}월 ${l}일`}(e.depositDate)} - ${(n=e.amount,`${Math.max(0,Math.floor(n)).toLocaleString("ko-KR")}원`)} 입금`},e.id)})}):(0,t.jsx)(sP,{value:"",disabled:!0,children:(0,t.jsx)("option",{value:"",children:"loading"===d?"입금 내역을 불러오는 중입니다.":"error"===d?"입금 내역을 불러오지 못했습니다.":"선택 가능한 입금 내역이 없습니다."})})]}),"error"===d?(0,t.jsx)(sF,{children:"잠시 후 다시 시도해 주세요."}):null]}),(0,t.jsxs)(sM,{children:[(0,t.jsx)(sB,{type:"button",onClick:l,children:"취소하기"}),(0,t.jsx)(sU,{type:"button",disabled:"loading"===d,onClick:()=>{"loading"!==d&&a(h)},children:"success"===d&&0===r.length?"내역 없이 작성하기":"내역 반영하기"})]})]})}):null},sO=l.default.div.withConfig({componentId:"zh__sc-8efbebf8-0"})`
  position: fixed;
  z-index: 3000;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgb(10 10 10 / 48%);
`,sA=l.default.div.withConfig({componentId:"zh__sc-8efbebf8-1"})`
  display: flex;
  display: inline-flex;
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
  box-shadow: 0 4px 4px 0 rgb(0 0 0 / 10%);
`,s$=l.default.div.withConfig({componentId:"zh__sc-8efbebf8-2"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;

  width: 453px;
`,sD=l.default.h3.withConfig({componentId:"zh__sc-8efbebf8-3"})`
  align-self: stretch;

  margin: 0;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #000;
`,sL=l.default.p.withConfig({componentId:"zh__sc-8efbebf8-4"})`
  align-self: stretch;

  margin: 0;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #000;
`,sR=l.default.div.withConfig({componentId:"zh__sc-8efbebf8-5"})`
  display: flex;
  gap: 10px;
  align-items: center;
  align-self: stretch;
  justify-content: center;

  width: 100%;
`,sN=l.default.div.withConfig({componentId:"zh__sc-8efbebf8-6"})`
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #000;
`,sP=(0,l.default)(r.default.Input.Select).withConfig({componentId:"zh__sc-8efbebf8-7"})`
  flex: 1;
  height: 36px;
`,sF=l.default.div.withConfig({componentId:"zh__sc-8efbebf8-8"})`
  display: flex;
  align-items: center;

  min-height: 20px;

  font-size: 16px;
  line-height: 20px;
  color: #6b7280;
`,sM=l.default.div.withConfig({componentId:"zh__sc-8efbebf8-9"})`
  display: flex;
  gap: 12px;
  align-items: center;
  align-self: stretch;
  justify-content: flex-end;
`,sB=(0,l.default)(r.default.Button.Outlined).withConfig({componentId:"zh__sc-8efbebf8-10"})`
  height: 36px;
  padding: 8px 14px;
`,sU=(0,l.default)(r.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-8efbebf8-11"})`
  height: 36px;
  padding: 8px 14px;
`,sW="__preview__",sV=(e,t)=>e?.includes(t)===!0,sY=e=>sV(e,ow.default.TARGET_COPAYMENT_RECEIPT_AMOUNT)||sV(e,"COPAYMENT_RECEIPT_AMOUNT"),sH=e=>sV(e,ow.default.TARGET_COPAYMENT_RECEIPT_RECEIVED_DATE)||sV(e,"COPAYMENT_RECEIPT_RECEIVED_DATE"),sG=(0,n.observer)(function(){let e=a.default.modal.documentView,n=a.default.client.info.byClient.selectedContractId,l=a.default.data.docs.list.query?.contractId??null,[d,o]=(0,i.useState)(""),[r,s]=(0,i.useState)(null),[c,f]=(0,i.useState)(!1),[h,p]=(0,i.useState)(!1),[u,x]=(0,i.useState)(!1),g=(0,i.useRef)(null),m=e.selectedTemplateId,b=e.selectedTemplate,j=null===e.selectedDocumentId&&null!==m,w=(0,i.useMemo)(()=>null===m?[]:e.documents.filter(e=>e.templateId===m).sort((e,t)=>{let n=t.occurrenceKey.localeCompare(e.occurrenceKey);return 0!==n?n:t.createdAt.localeCompare(e.createdAt)}),[e.documents,m]),_=(0,i.useMemo)(()=>w[0]?.id??"",[w]),y=(0,i.useMemo)(()=>{if(j)return sW;let t=e.selectedDocumentId;return"string"==typeof t&&w.some(e=>e.id===t)?t:w.some(e=>e.id===d)?d:_},[w,_,j,e.selectedDocumentId,d]),v=w.some(e=>"COMPLETED"!==e.displayStatus),C=null!==b&&"MANUAL"===b.creationMode&&!1===v,I=e.hasSelectedTemplatePreviewSession,z=e.hasSelectedFieldChanges||j,T=e.selectedTemplateFields.some(e=>{let t=e.uiProps.triggerKeys;return sV(t,ow.default.COPAYMENT_RECEIPT_TRANSACTION_NUMBER)||sY(t)||sH(t)});(0,i.useEffect)(()=>{let t=g.current;if(null===t||e.selectedTemplateId!==t.templateId)return;let n=e.selectedTemplateFields;if(0===n.length)return;let i=n.filter(e=>sY(e.uiProps.triggerKeys)),l=n.filter(e=>sH(e.uiProps.triggerKeys));if(0===i.length&&0===l.length){g.current=null;return}i.forEach(n=>{e.updateSelectedFieldValue({page:n.page,fieldKey:n.fieldKey,value:t.amountText})}),l.forEach(n=>{e.updateSelectedFieldValue({page:n.page,fieldKey:n.fieldKey,value:t.receivedDate})}),g.current=null},[e,e.selectedTemplateFields]);let E=t=>{if(t===sW){null!==m&&e.openTemplateWithoutDocument(m);return}e.open(t)},k=async()=>{if(null!==r&&!h){p(!0);try{let t=await e.saveSelectedFieldChanges();if(null===t)return;E(r),s(null),f(!1)}finally{p(!1)}}};return(0,t.jsxs)(sK,{children:[(0,t.jsxs)(sX,{children:[(0,t.jsxs)(sq,{children:[(0,t.jsx)(O.default.Ballot,{size:16}),"서류 목록"]}),(0,t.jsxs)(sJ,{disabled:!C,onClick:()=>void(()=>{if(C&&null!==m){if(T)return x(!0);e.openTemplateWithoutDocument(m)}})(),children:[(0,t.jsx)(sk.default,{sx:{fontSize:20}}),"새 서류 생성하기"]})]}),(0,t.jsxs)(sQ,{value:y,onChange:e=>{let t=e.target.value;if(o(t),t!==y){if(z){s(t),f(!0);return}E(t)}},disabled:0===w.length&&!1===I,children:[I?(0,t.jsx)("option",{value:sW,children:"새 서류 미리보기 (저장 전)"}):null,w.map(e=>{let n=dF(e.displayStatus),i=function(e){if(!dr.default.yearMonth.is(e))return null;let[t,n]=e.split("-"),i=Number(n);return!Number.isInteger(i)||i<1||i>12?null:`${t}년 ${i}월`}(e.occurrenceKey)??function(e){let t=new Date(e);if(Number.isNaN(t.getTime()))return e;let n=new Map(new Intl.DateTimeFormat("ko-KR",{timeZone:"Asia/Seoul",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}).formatToParts(t).map(e=>[e.type,e.value])),i=n.get("year")??"0000",l=n.get("month")??"00",a=n.get("day")??"00",d=n.get("hour")??"00",o=n.get("minute")??"00",r=n.get("second")??"00";return`${i}년 ${l}월 ${a}일 (${d}:${o}:${r}) 생성됨`}(e.createdAt);return(0,t.jsx)("option",{value:e.id,"data-badge":n.badge.label,"data-badge-tone":n.badge.color,children:i},e.id)})]}),(0,t.jsx)(o_,{isOpen:c,actionType:"move",isProcessing:h,onClickSecondary:()=>{null===r||(e.discardSelectedFieldChanges(),E(r),s(null)),f(!1)},onClickPrimary:()=>{k()}}),(0,t.jsx)(sS,{isOpen:u,contractId:n??l,onClose:()=>{x(!1)},onConfirm:t=>{if(null===m)return void x(!1);if(null===t){x(!1),e.openTemplateWithoutDocument(m);return}g.current={templateId:m,amountText:String(Math.max(0,Math.floor(t.amount))),receivedDate:t.depositDate},x(!1),e.openTemplateWithoutDocument(m)}})]})}),sK=l.default.div.withConfig({componentId:"zh__sc-70c07d1f-0"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;

  padding: 16px 12px;
  border: 1px solid #d8dee7;
  border-radius: 8px;

  background: #fcfdff;
`,sX=l.default.div.withConfig({componentId:"zh__sc-70c07d1f-1"})`
  display: flex;
  justify-content: space-between;
  width: 100%;
`,sq=l.default.div.withConfig({componentId:"zh__sc-70c07d1f-2"})`
  display: flex;
  gap: 8px;
  align-items: center;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 16px; /* 100% */
  color: #0a0a0a;
`,sQ=(0,l.default)(r.default.Input.Select).withConfig({componentId:"zh__sc-70c07d1f-3"})`
  width: 100%;
`,sJ=(0,l.default)(r.default.Button.Outlined).withConfig({componentId:"zh__sc-70c07d1f-4"})`
  display: flex;
  gap: 4px;
  align-items: center;

  height: 40px;
  padding: 8px 16px;
`,sZ=(0,n.observer)(function(){let{selectedOcrFile:e,isOcrAnalyzing:n,analyzeSelectedOcrFile:i,clearSelectedOcrFile:l}=a.default.modal.documentView;return(0,t.jsxs)(s0,{children:[(0,t.jsxs)(s6,{disabled:null===e||n,onClick:()=>{i()},children:["분석 시작",(0,t.jsx)(z,{size:16})]}),null!==e&&(0,t.jsx)(s2,{onClick:()=>{l()},children:"취소"})]})}),s0=l.default.div.withConfig({componentId:"zh__sc-11817043-0"})`
  display: flex;
  flex-flow: row-reverse;
  gap: 10px;
  align-self: stretch;
  justify-content: space-between;
`,s1=l.css`
  display: flex;
  flex-shrink: 0;
  gap: 10px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,s2=(0,l.default)(r.default.Button.Outlined).withConfig({componentId:"zh__sc-11817043-1"})`
  ${s1}
  visibility: hidden;
`,s6=(0,l.default)(r.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-11817043-2"})`
  ${s1}
`,{FILE_EXTENSION_WHITELIST_BY_GROUP:s4}=A.default.file,s5=(0,n.observer)(function(){var e;let n,{selectedOcrFile:i,isOcrAnalyzing:l,clearSelectedOcrFile:d}=a.default.modal.documentView;if(null===i)return null;let o=-1===(n=(e=i.name).lastIndexOf("."))?"":e.slice(n).toLowerCase();return(0,t.jsx)(s3,{children:(0,t.jsxs)(s9,{children:[(0,t.jsxs)(s8,{children:[(0,t.jsx)(s7,{children:s4.IMAGE.some(e=>e===o)?(0,t.jsx)(O.default.Photo,{size:17,color:"#FA8E43"}):s4.AUDIO.some(e=>e===o)?(0,t.jsx)(O.default.SpeechToText,{size:17,color:"#A855F7"}):s4.DOCUMENT.some(e=>e===o)?(0,t.jsx)(O.default.News,{size:17,color:"#2264E8"}):null}),(0,t.jsx)(ce,{children:(0,t.jsx)(ct,{children:i.name})})]}),(0,t.jsxs)(cn,{onClick:d,disabled:l,children:["삭제",(0,t.jsx)(S.X,{size:16})]})]},`${i.name}-${i.size}-${i.lastModified}`)})}),s3=l.default.div.withConfig({componentId:"zh__sc-4e7cda26-0"})`
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
`,s9=l.default.div.withConfig({componentId:"zh__sc-4e7cda26-1"})`
  display: flex;
  flex-shrink: 0;
  gap: 24px;
  align-items: center;

  padding: 12px 16px;
  border-radius: 8px;

  background: #f6f8fb;
`,s8=l.default.div.withConfig({componentId:"zh__sc-4e7cda26-2"})`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`,s7=l.default.div.withConfig({componentId:"zh__sc-4e7cda26-3"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;
  border-radius: 4px;

  background: #fff;
`,ce=l.default.div.withConfig({componentId:"zh__sc-4e7cda26-4"})`
  display: flex;
  align-items: center;
  align-self: stretch;

  width: 196px;
  height: 40px;

  color: #0a0a0a;
`,ct=l.default.div.withConfig({componentId:"zh__sc-4e7cda26-5"})`
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #0a0a0a;
`,cn=l.default.button.withConfig({componentId:"zh__sc-4e7cda26-6"})`
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
`;function ci(){let[e,n]=(0,i.useState)(0);return(0,i.useEffect)(()=>{let e=performance.now(),t=0,i=l=>{n(Math.min(100*(1-Math.exp(-((l-e)/1e3*.05))),98)),t=window.requestAnimationFrame(i)};return t=window.requestAnimationFrame(i),()=>{window.cancelAnimationFrame(t)}},[]),(0,t.jsx)(cl,{children:(0,t.jsx)(ca,{$progress:e})})}let cl=l.default.div.withConfig({componentId:"zh__sc-c9208651-0"})`
  overflow: hidden;
  display: flex;
  align-self: stretch;

  width: 100%;
  height: ${8}px;
  border-radius: 99px;

  background: #e6e0ff;
  background-color: #e5e2ff;
`,ca=l.default.div.attrs(({$progress:e})=>({style:{transform:`scaleX(${e/100})`}})).withConfig({componentId:"zh__sc-c9208651-1"})`
  transform-origin: left center;
  width: 100%;
  height: 100%;
  background-color: #5635ff;
`,cd=(0,n.observer)(function({disabled:e}){let{isWindowFileDragging:n}=a.default.ui.layout,{selectedOcrFile:i,isOcrFileError:l,isOcrAnalyzing:d}=a.default.modal.documentView,o=l?"지원하지 않는 파일 형식입니다.":!e&&n?"파일을 여기에 놓으면 업로드 됩니다.":d?"업로드한 파일을 분석하고 있습니다.":"이곳에 파일을 끌어다 놓거나 (드래그 앤 드롭), 클릭하여 업로드하세요.";return(0,t.jsxs)(cr,{children:[null===i&&!l&&(0,t.jsx)(cs,{children:(0,t.jsx)(U.Upload,{size:26,color:e?"#9ca3af":co[100]})}),(0,t.jsxs)(cc,{children:[(0,t.jsx)(cf,{$disabled:e,$isError:l,children:o}),(0,t.jsx)(ch,{$disabled:e,children:null===i||d?"지원 파일 형식: 사진 이미지":"새 파일을 업로드하면 기존 파일이 교체됩니다."})]}),d&&(0,t.jsx)(ci,{})]})}),{PRIMARY:co}=W.default.style.color,cr=l.default.div.withConfig({componentId:"zh__sc-cdea1a21-0"})`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  align-self: stretch;
  justify-content: center;
`,cs=l.default.div.withConfig({componentId:"zh__sc-cdea1a21-1"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;
`,cc=l.default.div.withConfig({componentId:"zh__sc-cdea1a21-2"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  align-self: stretch;
  justify-content: center;
`,cf=l.default.div.withConfig({componentId:"zh__sc-cdea1a21-3"})`
  font-size: 14px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 142.857% */
  color: ${({$disabled:e,$isError:t})=>t?"#ff4d4f":e?"#9ca3af":"#4f39f6"};
  text-align: center;
`,ch=l.default.div.withConfig({componentId:"zh__sc-cdea1a21-4"})`
  font-size: 14px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 142.857% */
  color: ${({$disabled:e})=>e?"#9ca3af":"#99a1af"};
`,cp=A.default.file.FILE_EXTENSION_WHITELIST_BY_GROUP.IMAGE.join(","),cu=(0,n.observer)(function(){let{isWindowFileDragging:e}=a.default.ui.layout,n=a.default.modal.documentView,{selectedDocument:l,selectedOcrFile:d,isOcrFileError:o}=n,r=(0,i.useRef)(null),s=!n.isOcrSupported||l?.displayStatus!=="WAITING_TO_DRAFT"&&l?.displayStatus!=="NEED_UPDATE"&&l?.displayStatus!=="NEED_MATCHING",c=e=>{n.setSelectedOcrFile(e)};return(0,v.default)(e=>{if(s)return;let t=e[0];void 0!==t&&c(t)}),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(cx,{ref:r,type:"file",accept:cp,disabled:s,onChange:e=>{if(s)return;let t=Array.from(e.target.files??[]);if(0===t.length)return;let n=t[0];void 0!==n&&(c(n),e.target.value="")}}),(0,t.jsxs)(cg,{$isWindowFileDragging:e,$disabled:s,onDragOver:e=>{if(e.preventDefault(),s)return},onDrop:e=>{if(e.preventDefault(),s)return;let t=Array.from(e.dataTransfer.files);if(0===t.length)return;let n=t[0];void 0!==n&&c(n)},onClick:e=>{!s&&e.target instanceof HTMLElement&&(e.target.closest("button")||r.current?.click())},$isError:o,children:[null!==d&&(0,t.jsx)(s5,{}),(0,t.jsx)(cd,{disabled:s}),(0,t.jsx)(sZ,{})]})]})}),cx=l.default.input.withConfig({componentId:"zh__sc-c05f4a71-0"})`
  display: none;
`,cg=l.default.div.withConfig({componentId:"zh__sc-c05f4a71-1"})`
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
`,{FILE_EXTENSION_WHITELIST_BY_GROUP:cm}=A.default.file,cb=(0,n.observer)(function(){var e;let n,l=a.default.modal.documentView,{analyzedOcrFile:d,selectedDocument:o}=l,{ref:r,fire:s}=ef(),c=!l.isOcrSupported||o?.displayStatus!=="WAITING_TO_DRAFT"&&o?.displayStatus!=="NEED_UPDATE"&&o?.displayStatus!=="NEED_MATCHING";if((0,i.useEffect)(()=>{null!==d&&s()},[d,s]),c||null===d)return null;let f=-1===(n=(e=d.name).lastIndexOf("."))?"":e.slice(n).toLowerCase();return(0,t.jsxs)(cj,{ref:r,children:[(0,t.jsxs)(cw,{children:[(0,t.jsxs)(c_,{children:[(0,t.jsx)(O.default.FindInPage,{size:18}),"AI 문서 인식 완료"]}),(0,t.jsxs)(cy,{children:["업로드된 서류들에서 정보를 성공적으로 추출했습니다. ",(0,t.jsx)("br",{})]})]}),(0,t.jsxs)(cv,{children:[(0,t.jsxs)(cC,{children:[(0,t.jsx)(O.default.CheckCircle,{size:18}),"분석 완료된 첨부 서류 (1건)"]}),(0,t.jsx)(cI,{children:(0,t.jsxs)(cz,{children:[(0,t.jsxs)(cT,{children:[(0,t.jsx)(cE,{children:cm.IMAGE.some(e=>e===f)?(0,t.jsx)(O.default.Photo,{size:17,color:"#FA8E43"}):cm.AUDIO.some(e=>e===f)?(0,t.jsx)(O.default.SpeechToText,{size:17,color:"#A855F7"}):cm.DOCUMENT.some(e=>e===f)?(0,t.jsx)(O.default.News,{size:17,color:"#2264E8"}):null}),(0,t.jsx)(ck,{children:(0,t.jsx)(cS,{children:d.name})})]}),(0,t.jsx)(cO,{children:"추출 완료"})]},`${d.name}-${d.size}-${d.lastModified}`)})]})]})}),cj=l.default.div.withConfig({componentId:"zh__sc-91a1d4f6-0"})`
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
`,cw=l.default.div.withConfig({componentId:"zh__sc-91a1d4f6-1"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  align-self: stretch;
`,c_=l.default.div.withConfig({componentId:"zh__sc-91a1d4f6-2"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #0a0a0a;
`,cy=l.default.div.withConfig({componentId:"zh__sc-91a1d4f6-3"})`
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
`,cv=l.default.div.withConfig({componentId:"zh__sc-91a1d4f6-4"})`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  align-self: stretch;

  min-height: 0;
`,cC=l.default.div.withConfig({componentId:"zh__sc-91a1d4f6-5"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #0a0a0a;
`,cI=l.default.div.withConfig({componentId:"zh__sc-91a1d4f6-6"})`
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
`,cz=l.default.div.withConfig({componentId:"zh__sc-91a1d4f6-7"})`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 359px;
  height: 64px;
  padding: 12px 16px;
  border-radius: 8px;

  background: #f6f8fb;
`,cT=l.default.div.withConfig({componentId:"zh__sc-91a1d4f6-8"})`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`,cE=l.default.div.withConfig({componentId:"zh__sc-91a1d4f6-9"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;
  border-radius: 4px;

  background: #fff;
`,ck=l.default.div.withConfig({componentId:"zh__sc-91a1d4f6-10"})`
  display: flex;
  align-items: center;
  align-self: stretch;

  width: 196px;
  height: 40px;

  color: #0a0a0a;
`,cS=l.default.div.withConfig({componentId:"zh__sc-91a1d4f6-11"})`
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #0a0a0a;
`,cO=l.default.div.withConfig({componentId:"zh__sc-91a1d4f6-12"})`
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
`,cA=(0,n.observer)(function(){let{analyzedOcrFile:e}=a.default.modal.documentView;return(0,t.jsxs)(c$,{children:[(0,t.jsx)(cu,{}),null!==e&&(0,t.jsx)(cb,{})]})}),c$=l.default.div.withConfig({componentId:"zh__sc-b3f3f20d-0"})`
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
`,cD=l.default.div.withConfig({componentId:"zh__sc-80a26ee5-0"})`
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
`;function cL(e){if(null==e||""===e.trim())return"-";let t=new Date(e);if(Number.isNaN(t.getTime()))return"-";let n=String(t.getFullYear()),i=String(t.getMonth()+1).padStart(2,"0"),l=String(t.getDate()).padStart(2,"0"),a=String(t.getHours()).padStart(2,"0"),d=String(t.getMinutes()).padStart(2,"0");return`${n}-${i}-${l} ${a}:${d}`}let cR=(0,n.observer)(function(){let e=a.default.modal.documentView,n=e.isClientMode,i=a.default.client.info.byClient.selectedContractId,l=(a.default.data.contract.list.data??[]).find(e=>e.id===i)??null,d=n?cL(l?.client.createdAt??l?.createdAt):cL(e.selectedDocument?.createdAt),r=l?.client.name??"-",s=a.default.modal.serviceWorkerDetail.serviceWorker?.name??"-",c=n?`이용자 ${r}님의 기존 이용 내역과 갱신된 요금 정보가 성공적으로 양식에 매핑되었습니다.`:`제공인력 ${s}님의 계약/서류 정보가 현재 양식에 반영되었습니다.`;return(0,t.jsx)(cN,{children:(0,t.jsxs)(cP,{children:[(0,t.jsxs)(cF,{children:[(0,t.jsx)(cM,{children:(0,t.jsxs)(cB,{children:[(0,t.jsx)(cD,{$status:"done",children:(0,t.jsx)(o.Check,{size:12,color:"#ffffff",strokeWidth:3})}),n?"기존 이용자 정보 연동 완료":"제공인력 서류 데이터 반영 완료"]})}),(0,t.jsx)(cU,{children:(0,t.jsx)(cW,{children:`${n?"업로드 일시":"문서 생성 일시"}: ${d}`})})]}),(0,t.jsx)(cV,{children:(0,t.jsx)(cY,{children:c})})]})})}),cN=l.default.div.withConfig({componentId:"zh__sc-a82a8c4-0"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;
`,cP=l.default.div.withConfig({componentId:"zh__sc-a82a8c4-1"})`
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
`,cF=l.default.div.withConfig({componentId:"zh__sc-a82a8c4-2"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  align-self: stretch;
`,cM=l.default.div.withConfig({componentId:"zh__sc-a82a8c4-3"})`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;
`,cB=l.default.div.withConfig({componentId:"zh__sc-a82a8c4-4"})`
  display: flex;
  gap: 4px;
  align-items: center;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 16px; /* 100% */
  color: #0a0a0a;
`,cU=l.default.div.withConfig({componentId:"zh__sc-a82a8c4-5"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  align-self: stretch;

  padding-left: 24px;
`,cW=l.default.div.withConfig({componentId:"zh__sc-a82a8c4-6"})`
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
`,cV=l.default.div.withConfig({componentId:"zh__sc-a82a8c4-7"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  align-self: stretch;

  padding-left: 24px;
`,cY=l.default.div.withConfig({componentId:"zh__sc-a82a8c4-8"})`
  display: flex;
  gap: 10px;
  align-items: center;
  align-self: stretch;
  justify-content: flex-start;

  font-size: 14px;
  font-weight: 400;
  font-style: normal;
  line-height: 18px; /* 128.571% */
  color: #45464e;
  text-align: left;
`,cH=(0,n.observer)(function(){let e=a.default.modal.documentView,{selectedTemplate:n}=e,i=e.isClientMode,l=n?.creationMode==="MANUAL",d=null===n?0:e.documents.filter(e=>e.templateId===n.id).length,o=i&&(l||null!==n&&d>=2);return(0,t.jsxs)(cG,{children:[(0,t.jsx)(cK,{children:(0,t.jsx)(cX,{children:n?.name??"계약서 자동 생성"})}),(0,t.jsxs)(cq,{children:[o?(0,t.jsx)(sG,{}):null,(0,t.jsx)(cR,{}),(0,t.jsx)(cA,{})]})]})}),cG=l.default.div.withConfig({componentId:"zh__sc-61494f9e-0"})`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  justify-content: space-between;

  width: 541px;
  border-right: 1px solid #e5e7eb;

  background: #fff;
`,cK=l.default.div.withConfig({componentId:"zh__sc-61494f9e-1"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;

  padding: 16px 20px;
  border-bottom: 1px solid #e5e7eb;

  background: #fff;
`,cX=l.default.div.withConfig({componentId:"zh__sc-61494f9e-2"})`
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
`,cq=l.default.div.withConfig({componentId:"zh__sc-61494f9e-3"})`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;

  padding: 16px 12px;
`,cQ=function(e){return(0,t.jsxs)(cJ,{children:[(0,t.jsx)(cZ,{children:"오른쪽에서 년월을 선택하면 실제 제공일 리스트가 채워집니다."}),(0,t.jsx)(r.default.Input.Date,{value:e.value,valueType:"year-month",readOnly:e.disabled,pickerOptions:{hideDate:!0},style:{width:136,height:28,textAlign:"center"},onChange:t=>{e.onChangeYearMonth(t)}}),null!==e.errorMessage?(0,t.jsx)(c0,{children:e.errorMessage}):null]})},cJ=l.default.div.withConfig({componentId:"zh__sc-698d13d5-0"})`
  position: absolute;
  z-index: 3;
  top: 14px;
  left: 24px;

  display: inline-flex;
  gap: 16px;
  align-items: center;
  justify-content: center;

  max-width: 600px;
  padding: 16px 24px;
  border: 1px solid #6366f1;
  border-radius: 99px;

  background: #fff;
  box-shadow: 0 0 8px 0 rgb(0 0 0 / 20%);
`,cZ=l.default.div.withConfig({componentId:"zh__sc-698d13d5-1"})`
  font-size: 16px;
  font-weight: 500;
  color: #000;
`,c0=l.default.div.withConfig({componentId:"zh__sc-698d13d5-2"})`
  font-size: 12px;
  line-height: 18px;
  color: #dc2626;
`;function c1(){return(c1=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var c2=(0,i.forwardRef)(function(e,t){var n=e.color,l=e.size,a=void 0===l?24:l,d=function(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["color","size"]);return i.default.createElement("svg",c1({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),i.default.createElement("polyline",{points:"6 9 6 2 18 2 18 9"}),i.default.createElement("path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"}),i.default.createElement("rect",{x:"6",y:"14",width:"12",height:"8"}))});c2.propTypes={color:C.default.string,size:C.default.oneOfType([C.default.string,C.default.number])},c2.displayName="Printer";var c6=e.i(69477),c4=e.i(68339);let c5=(0,n.observer)(function({isSaving:e,setIsSaving:n,resetLocalStates:l}){let{close:d,selectedDocument:r}=a.default.modal.documentView,s=a.default.modal.documentView,[c,f]=(0,i.useState)(!1),[h,p]=(0,i.useState)(!1),u=s.selectedTemplateImagePaths.filter(e=>""!==e),x=null!==s.selectedTemplateId&&u.length>0,g=s.hasSelectedFieldChanges||null===s.selectedDocumentId,m=null===r?{label:"미리보기",color:"lightBlue"}:dF(r.displayStatus).badge,b=null===r||(0,dM.shouldSaveDocumentBeforePrint)(r.displayStatus),j=async()=>{if(x&&!h&&!e){p(!0);try{if(b){n(!0);try{let e=await s.saveSelectedFieldChanges();if(null===e)return}finally{n(!1)}await new Promise(e=>{window.setTimeout(e,600)})}let e=s.selectedTemplateId;if(null===e)return;let t=u.map((t,n)=>({id:`${e}-${n+1}`,templateId:e,imagePath:t,page:n+1}));if(0===t.length)return;let i=s.selectedTemplate?.name?.trim()??"",l=""===i?"Print":i,d=""===s.printTitleSuffix?l:`${l} - ${s.printTitleSuffix}`;await (0,c4.renderDocumentPrintView)({pages:t,fields:s.selectedTemplateFields,printTitle:d,onImageLoadFailure:e=>{a.default.ui.layout.toast.error(`서류 이미지 ${e}개 로딩에 실패하여 출력을 중단했습니다.`)}})}finally{p(!1)}}},w=()=>{l(),d()},_=async()=>{if(!e){n(!0);try{await s.saveSelectedFieldChanges()}finally{n(!1)}}},y=async()=>{if(!e){n(!0);try{await s.patchSelectedDocumentStatusPrevious()}finally{n(!1)}}},v=async()=>{if(!e){n(!0);try{let e=await s.saveSelectedFieldChanges();if(null===e)return;f(!1),w()}finally{n(!1)}}};return(0,t.jsxs)(c3,{children:[(0,t.jsxs)(c9,{children:[(0,t.jsxs)(c8,{children:[(0,t.jsx)(c7,{children:"서류 상태"}),(0,t.jsxs)(fe,{$color:m.color,children:[m.icon,m.label]})]}),(0,t.jsx)(ft,{}),(0,t.jsxs)(fn,{children:[(0,t.jsxs)(fi,{type:"button",disabled:!x||h||e,onClick:()=>{j()},children:[(0,t.jsx)(c2,{size:16}),"출력하기"]}),r?.displayStatus==="COMPLETED"?(0,t.jsxs)(fi,{$processing:e,onClick:()=>void y(),children:[(0,t.jsx)(O.default.Undo,{size:14}),"확인 취소"]}):null===r||"NEED_UPDATE"===r.displayStatus||"NEED_MATCHING"===r.displayStatus?(0,t.jsxs)(fi,{$processing:e,onClick:()=>void _(),children:[e?(0,t.jsx)(c6.RotateCw,{size:16}):(0,t.jsx)(o.Check,{size:16}),e?"저장중":"최종확인 및 저장"]}):null,(0,t.jsxs)(fl,{type:"button",onClick:()=>{g?f(!0):w()},children:[(0,t.jsx)(S.X,{size:16}),"닫기"]})]})]}),(0,t.jsx)(o_,{isOpen:c,actionType:"exit",isProcessing:e,onClickSecondary:()=>{f(!1),w()},onClickPrimary:()=>{v()}})]})}),c3=l.default.div.withConfig({componentId:"zh__sc-fa5a83d4-0"})`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: flex-end;

  padding: 12px 24px;
  border-bottom: 1px solid #e5e7eb;

  background: #fff;
`,c9=l.default.div.withConfig({componentId:"zh__sc-fa5a83d4-1"})`
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: flex-end;
`,c8=l.default.div.withConfig({componentId:"zh__sc-fa5a83d4-2"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,c7=l.default.div.withConfig({componentId:"zh__sc-fa5a83d4-3"})`
  font-size: 14px;
  font-weight: 400;
  font-style: normal;
  line-height: normal;
  color: #737380;
`,fe=l.default.div.withConfig({componentId:"zh__sc-fa5a83d4-4"})`
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
`,ft=l.default.div.withConfig({componentId:"zh__sc-fa5a83d4-5"})`
  width: 1px;
  height: 24px;
  background: #d1d1d9;
`,fn=l.default.div.withConfig({componentId:"zh__sc-fa5a83d4-6"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,fi=(0,l.default)(r.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-fa5a83d4-7"})`
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
`,fl=(0,l.default)(r.default.Button.Outlined).withConfig({componentId:"zh__sc-fa5a83d4-8"})`
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
`,fa=(0,n.observer)(function(){let e=a.default.modal.documentView,n=e.selectedDocument?.displayStatus!=="COMPLETED",l=e.autocompleteServiceEndReportUserChangeLevelUIState,o=e.autocompleteServiceEndReportStaffOpinionUIState,r=e.autocompleteCaseManagementRecordCaseContentUIState,s=e.shouldShowRetroactiveActualServiceDatePanel,c=e.retroactiveActualServiceDatePanelYearMonth,f=e.isRetroactiveActualServiceDatePanelLoading,h=e.retroactiveActualServiceDatePanelErrorMessage,[p,u]=(0,i.useState)(1),[x,g]=(0,i.useState)(null),[m,b]=(0,i.useState)(!1),[j,w]=(0,i.useState)(!1),[_,y]=(0,i.useState)(null),[v,C]=(0,i.useState)(""),[I,z]=(0,i.useState)(""),[T,E]=(0,i.useState)(""),[k,S]=(0,i.useState)({}),[O,A]=(0,i.useState)(null),$=(0,i.useRef)(null),D=(0,i.useRef)(null),L=(0,i.useRef)([]),R=e.selectedTemplateImagePaths,N=Math.max(R?.length??0,1),P=Math.min(p,N),F=e.selectedDocument?.displayStatus==="NEED_MATCHING",M=e.selectedOcrFile??e.analyzedOcrFile,B=(0,i.useMemo)(()=>F&&null!==M?URL.createObjectURL(M):null,[M,F]);(0,i.useEffect)(()=>()=>{null!==B&&URL.revokeObjectURL(B)},[B]);let U=null===B?.75:.64,W=(0,i.useCallback)(e=>{if(0===e.length)return null;let t=e.map(e=>e.x),n=e.map(e=>e.y),i=Math.min(...t),l=Math.max(...t),a=Math.min(...n),d=Math.max(...n);if(!Number.isFinite(i)||!Number.isFinite(l)||!Number.isFinite(a)||!Number.isFinite(d))return null;let o=Math.max(l,d),r=o<=1?1:O?.width??0,s=o<=1?1:O?.height??0;if(r<=0||s<=0)return null;let c=Math.max(i,0)/r*100,f=Math.max(a,0)/s*100,h=(l-i)/r*100,p=(d-a)/s*100;return h<=0||p<=0?null:{left:`${Math.min(c,100)}%`,top:`${Math.min(f,100)}%`,width:`${Math.min(h,100)}%`,height:`${Math.min(p,100)}%`}},[O]),V=(0,i.useCallback)((e,t="instant")=>{let n=D.current,i=L.current[e-1];if(!n||!i)return;let l=Math.max(i.offsetTop-n.offsetTop-12,0);n.scrollTo({top:l,behavior:t})},[]),Y=t=>(-1!==t||!1!==e.canMovePrevTemplate)&&(1!==t||!1!==e.canMoveNextTemplate)&&(-1===t?e.movePrevTemplate():e.moveNextTemplate(),u(1),g(null),b(!1),D.current?.scrollTo({top:0,behavior:"auto"}),!0),H=e.hasSelectedFieldChanges||null===e.selectedDocumentId&&null!==e.selectedTemplateId,G=async()=>H?(y(-1),w(!0),!1):Y(-1),K=async()=>H?(y(1),w(!0),!1):Y(1),X=async()=>{if(!m&&null!==_){b(!0);try{let t=await e.saveSelectedFieldChanges();if(null===t)return;Y(_),y(null),w(!1)}finally{b(!1)}}};(0,i.useEffect)(()=>{let t=t=>{"ready"===e.status&&!1!==e.hasSelectedFieldChanges&&t.preventDefault()};return window.addEventListener("beforeunload",t),()=>{window.removeEventListener("beforeunload",t)}},[e.hasSelectedFieldChanges,e.status]),(0,i.useEffect)(()=>"ready"!==e.status?void e.setToastContainer(null):(e.setToastContainer($.current),()=>{e.setToastContainer(null)}),[e,e.status]),(0,i.useEffect)(()=>{"ready"===e.status&&!0===s&&e.ensureRetroactiveActualServiceDatePanelState()},[e,e.status,s]);let q=()=>{if(null===x)return;let e=x.replace(/[^\d]/g,"");if(""===e)return void g(null);let t=Number(e);if(!Number.isFinite(t))return void g(null);let n=Math.min(Math.max(t,1),N);u(n),g(null),V(n)};return"ready"!==e.status?null:(0,t.jsx)(d.default,{children:(0,t.jsxs)(fd,{ref:$,children:[(0,t.jsx)(cH,{}),(0,t.jsxs)(fo,{children:[(0,t.jsx)(c5,{isSaving:m,setIsSaving:b,resetLocalStates:()=>{u(1),g(null),b(!1)}}),(0,t.jsxs)(fr,{children:[s?(0,t.jsx)(cQ,{value:c??"",disabled:f,errorMessage:h,onChangeYearMonth:t=>{e.applyRetroactiveActualServiceDatePanelYearMonth(t)}}):null,(0,t.jsx)(fA,{type:"button","aria-label":"이전 문서",disabled:e.isTemplateNavigationLocked||!1===e.canMovePrevTemplate,onClick:()=>void G(),children:(0,t.jsx)(om.ChevronLeft,{size:24})}),(0,t.jsx)(fs,{ref:D,onScroll:()=>{let e=D.current;if(!e)return;let t=e.scrollTop,n=1,i=1/0;L.current.forEach((l,a)=>{if(!l)return;let d=Math.abs(l.offsetTop-e.offsetTop-t);d<i&&(i=d,n=a+1)}),n!==p&&u(n)},children:Array.from({length:N},(i,a)=>{let d,s,c=a+1,f=e.getSelectedTemplateFieldsByPage(c),h=e.getOcrMismatchBoundingBoxesByPage(c),p=Math.min(Math.max(k[c]??0,0),Math.max(h.length-1,0)),u=h[p]??null,x=null===u?null:W(u.vertices),g=u?.fieldRuntimeKey.split("::")[1]??null,m=null===g?null:f.find(e=>e.fieldKey===g)?.uiProps.label?.field.name??null;return(0,t.jsxs)(ff,{children:[null!==B&&(0,t.jsxs)(fh,{children:[(0,t.jsx)(fu,{$variant:"manual",children:"수기서류 원본 · 비교 근거 / 수정 불가"}),(0,t.jsxs)(fp,{$scale:U,children:[(0,t.jsxs)(fx,{$scale:U,children:[(0,t.jsx)(fg,{src:B,alt:"대조 이미지",onLoad:e=>{A({width:e.currentTarget.naturalWidth,height:e.currentTarget.naturalHeight})}}),(0,t.jsx)(fm,{children:h.map((e,n)=>{let i=W(e.vertices);if(null===i)return null;let l=e.vertices.map(e=>`${e.x}:${e.y}`).join("|");return(0,t.jsx)(fb,{style:i,type:"button",onClick:()=>{S(e=>({...e,[c]:n}))},children:p===n?(0,t.jsx)(fj,{children:"확인 필요"}):null},`ocr-mismatch-${c}-${e.fieldRuntimeKey}-${l}`)})})]}),null!==u&&null!==x&&(0,t.jsxs)(fw,{style:{left:x.left,top:`calc(${x.top} + ${x.height})`},children:[(0,t.jsxs)(f_,{children:[(0,t.jsx)(fy,{children:`정보 불일치  \xb7  ${p+1} / ${h.length}`}),(0,t.jsxs)(fv,{children:[m??g??"필드 값"," ","비교"]}),(0,t.jsx)(fC,{children:"수기 서류 인식값과 전자 바우처 엑셀 기반 값이 다릅니다."})]}),(0,t.jsxs)(fI,{children:[(0,t.jsx)(fz,{$variant:"manual",children:"수기 작성 서류"}),(0,t.jsx)(fT,{children:""===u.manualValue?"-":u.manualValue})]}),(0,t.jsxs)(fI,{children:[(0,t.jsx)(fz,{$variant:"voucher",children:"전산 데이터 서류"}),(0,t.jsx)(fT,{children:""===u.electronicValue?"-":u.electronicValue})]}),(0,t.jsxs)(fE,{children:[(0,t.jsxs)(fk,{type:"button",disabled:p<=0,onClick:()=>{S(e=>({...e,[c]:Math.max(p-1,0)}))},children:[(0,t.jsx)(of,{sx:{fontSize:16}}),"이전"]}),(0,t.jsxs)(fk,{type:"button",disabled:p>=h.length-1,onClick:()=>{S(e=>({...e,[c]:Math.min(p+1,h.length-1)}))},children:["다음",(0,t.jsx)(oh.default,{sx:{fontSize:16}})]})]})]})]})]}),(0,t.jsxs)(fh,{children:[null!==B&&(0,t.jsx)(fu,{$variant:"voucher",children:"전자바우처 엑셀 기반 · 비교 근거 / 수정 불가"}),(0,t.jsx)(fc,{$active:!0,$scale:U,ref:e=>{L.current[a]=e},children:(0,t.jsx)(fS,{$scale:U,children:null===(s="string"==typeof(d=R?.[a])?""===d?null:d:null)?(0,t.jsx)(fO,{}):(0,t.jsx)(oj.default,{imagePath:s,fields:f,readOnly:!n,onAssistTriggerClick:({triggerKey:t,field:n})=>{if(t===ow.default.SOURCE_CLICK_AUTOCOMPLETE_SERVICE_END_REPORT_USER_CHANGE_LEVEL_BUTTON){C(e.getAutocompleteServiceEndReportUserChangeLevelTargetValue()),e.openAutocompleteServiceEndReportUserChangeLevelDrawer(n);return}if(t===ow.default.SOURCE_CLICK_AUTOCOMPLETE_SERVICE_END_REPORT_STAFF_OPINION_BUTTON){z(""),e.openAutocompleteServiceEndReportStaffOpinionDrawer(n);return}if(t===ow.default.SOURCE_CLICK_AUTOCOMPLETE_CASE_MANAGEMENT_RECORD_CASE_CONTENT_BUTTON){E(e.getAutocompleteCaseManagementRecordCaseContentTargetValue()),e.openAutocompleteCaseManagementRecordCaseContentDrawer(n);return}t===ow.default.SOURCE_CLICK_SELECT_ALL_GENERAL_MEAL?e.selectAllMealTypeForSelectedDocument("GENERAL"):t===ow.default.SOURCE_CLICK_SELECT_ALL_THERAPEUTIC_MEAL?e.selectAllMealTypeForSelectedDocument("THERAPEUTIC"):t===ow.default.SOURCE_CLICK_SELECT_ALL_TEXTURE_MODIFIED_MEAL&&e.selectAllMealTypeForSelectedDocument("TEXTURE_MODIFIED")},isAssistButtonDisabled:({triggerKey:e})=>e===ow.default.SOURCE_CLICK_AUTOCOMPLETE_SERVICE_END_REPORT_USER_CHANGE_LEVEL_BUTTON?!n||!0===l.isDrawerOpen:e===ow.default.SOURCE_CLICK_AUTOCOMPLETE_SERVICE_END_REPORT_STAFF_OPINION_BUTTON?!n||!0===o.isDrawerOpen:e===ow.default.SOURCE_CLICK_AUTOCOMPLETE_CASE_MANAGEMENT_RECORD_CASE_CONTENT_BUTTON?!n||!0===r.isDrawerOpen:void 0,resolveAssistButtonLabel:({triggerKey:t})=>t===ow.default.SOURCE_CLICK_AUTOCOMPLETE_SERVICE_END_REPORT_USER_CHANGE_LEVEL_BUTTON?e.autocompleteServiceEndReportUserChangeLevelButtonLabel:t===ow.default.SOURCE_CLICK_AUTOCOMPLETE_SERVICE_END_REPORT_STAFF_OPINION_BUTTON?e.autocompleteServiceEndReportStaffOpinionButtonLabel:t===ow.default.SOURCE_CLICK_AUTOCOMPLETE_CASE_MANAGEMENT_RECORD_CASE_CONTENT_BUTTON?e.autocompleteCaseManagementRecordCaseContentButtonLabel:t===ow.default.SOURCE_CLICK_SELECT_ALL_GENERAL_MEAL?"일반식 전체":t===ow.default.SOURCE_CLICK_SELECT_ALL_THERAPEUTIC_MEAL?"치료식 전체":t===ow.default.SOURCE_CLICK_SELECT_ALL_TEXTURE_MODIFIED_MEAL?"저작 및 연하 도움식 전체":void 0,resolveAssistButtonChecked:({triggerKey:t})=>t===ow.default.SOURCE_CLICK_SELECT_ALL_GENERAL_MEAL?e.isGeneralMealTypeAllSelected:t===ow.default.SOURCE_CLICK_SELECT_ALL_THERAPEUTIC_MEAL?e.isTherapeuticMealTypeAllSelected:t===ow.default.SOURCE_CLICK_SELECT_ALL_TEXTURE_MODIFIED_MEAL?e.isTextureModifiedMealTypeAllSelected:void 0,isFieldEditable:t=>e.isSelectedFieldEditable(t),isFieldAutoFilled:t=>e.isSelectedFieldAutoFilled(t),onChangeField:(t,n)=>{if("radio"===t.uiProps.fieldType){"true"===n&&e.toggleSelectedRadioGroup(t);return}e.updateSelectedFieldValue({page:t.page,fieldKey:t.fieldKey,value:n})}})})})]})]},`screen-page-${c}`)})}),(0,t.jsx)(fA,{type:"button","aria-label":"다음 문서",disabled:e.isTemplateNavigationLocked||!1===e.canMoveNextTemplate,onClick:()=>void K(),$right:!0,children:(0,t.jsx)(ob.ChevronRight,{size:24})}),(0,t.jsx)(f$,{children:(0,t.jsxs)(fD,{children:[(0,t.jsxs)(fL,{type:"button",disabled:1===P,onClick:()=>{let e=Math.max(P-1,1);u(e),g(null),V(e)},children:[(0,t.jsx)(og,{size:16,color:1===P?"#9ca3af":"#0a0a0a"}),(0,t.jsx)(fR,{$muted:1===P,children:"이전"})]}),(0,t.jsxs)(fN,{children:[(0,t.jsx)(fP,{children:(0,t.jsx)(fF,{type:"text",inputMode:"numeric","aria-label":"페이지 번호 입력",value:x??String(P),onFocus:()=>{g(String(P))},onChange:e=>{g(e.target.value)},onBlur:q,onKeyDown:e=>{"Enter"===e.key&&(e.preventDefault(),q(),e.currentTarget.blur())}})}),(0,t.jsx)(fP,{children:(0,t.jsx)(fB,{children:"/"})}),(0,t.jsx)(fP,{children:(0,t.jsx)(fU,{children:N})})]}),(0,t.jsxs)(fL,{type:"button",disabled:P===N,onClick:()=>{let e=Math.min(P+1,N);u(e),g(null),V(e)},children:[(0,t.jsx)(fR,{$muted:P===N,children:"다음"}),(0,t.jsx)(ou,{size:16,color:P===N?"#9ca3af":"#0a0a0a"})]})]})}),!0===l.isDrawerOpen?(0,t.jsx)(sE,{value:v,onChange:C,onClose:()=>e.closeAutocompleteServiceEndReportUserChangeLevelDrawer(),onApply:()=>e.applyAutocompleteServiceEndReportUserChangeLevelResult(v)}):null,!0===o.isDrawerOpen?(0,t.jsx)(sT,{value:I,autoFilledReferenceValue:e.autocompleteServiceEndReportStaffOpinionAutoFilledReferenceValue,keywords:e.autocompleteServiceEndReportStaffOpinionKeywords,isKeywordListLoading:e.isAutocompleteServiceEndReportStaffOpinionKeywordListLoading,isKeywordCreating:e.isAutocompleteServiceEndReportStaffOpinionKeywordCreating,isGenerating:e.isAutocompleteServiceEndReportStaffOpinionGenerating,onAddKeyword:t=>e.createAutocompleteServiceEndReportStaffOpinionKeyword(t),onGenerate:t=>e.generateAutocompleteServiceEndReportStaffOpinionDraft(t),onChange:z,onClose:()=>e.closeAutocompleteServiceEndReportStaffOpinionDrawer(),onApply:()=>e.applyAutocompleteServiceEndReportStaffOpinionResult(I)}):null,!0===r.isDrawerOpen?(0,t.jsx)(sz,{value:T,onChange:E,onClose:()=>e.closeAutocompleteCaseManagementRecordCaseContentDrawer(),onApply:()=>e.applyAutocompleteCaseManagementRecordCaseContentResult(T)}):null]}),(0,t.jsx)(o_,{isOpen:j,actionType:"move",isProcessing:m,onClickSecondary:()=>{y(null),w(!1),null!==_&&(e.discardSelectedFieldChanges(),Y(_))},onClickPrimary:()=>{X()}})]})]})})}),fd=l.default.div.withConfig({componentId:"zh__sc-7a537607-0"})`
  position: relative;

  overflow: hidden;
  display: flex;
  flex-shrink: 0;
  align-items: flex-start;

  width: 1712px;
  min-width: 1712px;
  border-radius: 8px;
`,fo=l.default.div.withConfig({componentId:"zh__sc-7a537607-1"})`
  position: relative;

  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;

  height: 989px;
`,fr=l.default.div.withConfig({componentId:"zh__sc-7a537607-2"})`
  position: relative;

  display: flex;
  flex: 1 0 0;
  align-self: stretch;

  min-height: 0;
`,fs=l.default.div.withConfig({componentId:"zh__sc-7a537607-3"})`
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
`,fc=l.default.div.withConfig({componentId:"zh__sc-7a537607-4"})`
  display: ${({$active:e})=>e?"block":"none"};
  width: calc(210mm * ${({$scale:e})=>e});
  height: calc(297mm * ${({$scale:e})=>e});
  box-shadow: 0 0 8px 0 rgb(0 0 0 / 10%);
`,ff=l.default.div.withConfig({componentId:"zh__sc-7a537607-5"})`
  display: flex;
  gap: 10px;
  align-items: flex-start;
`,fh=l.default.div.withConfig({componentId:"zh__sc-7a537607-6"})`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
`,fp=l.default.div.withConfig({componentId:"zh__sc-7a537607-7"})`
  position: relative;
  width: calc(210mm * ${({$scale:e})=>e});
  height: calc(297mm * ${({$scale:e})=>e});
`,fu=l.default.div.withConfig({componentId:"zh__sc-7a537607-8"})`
  display: flex;
  gap: 10px;
  align-items: center;
  align-self: stretch;
  justify-content: center;

  padding: 5px 14px;
  border-radius: 4px;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: ${({$variant:e})=>"voucher"===e?"#4030ed":"#ad570d"};

  background: ${({$variant:e})=>"voucher"===e?"#f2f0ff":"#fff7eb"};
`,fx=l.default.div.withConfig({componentId:"zh__sc-7a537607-9"})`
  position: relative;

  overflow: hidden;

  width: calc(210mm * ${({$scale:e})=>e});
  height: calc(297mm * ${({$scale:e})=>e});
  border: 1px solid #e5e7eb;
  border-radius: 8px;

  background: #fff;
  box-shadow: 0 0 8px 0 rgb(0 0 0 / 8%);
`,fg=l.default.img.withConfig({componentId:"zh__sc-7a537607-10"})`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
`,fm=l.default.div.withConfig({componentId:"zh__sc-7a537607-11"})`
  pointer-events: none;
  position: absolute;
  inset: 0;
`,fb=l.default.button.withConfig({componentId:"zh__sc-7a537607-12"})`
  pointer-events: auto;
  cursor: pointer;

  position: absolute;

  padding: 0;
  border: 2px solid #4f39f6;
  border-radius: 2px;

  background: transparent;
`,fj=l.default.span.withConfig({componentId:"zh__sc-7a537607-13"})`
  pointer-events: none;

  position: absolute;
  top: -2px;
  left: -2px;
  transform: translateY(-100%);

  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;

  padding: 2px 4px;
  border-radius: 2px 2px 0 0;

  font-size: 8px;
  font-weight: 600;
  font-style: normal;
  line-height: 12px;
  line-height: normal;
  color: #fff;
  text-align: center;
  white-space: nowrap;

  background: #4f39f6;
`,fw=l.default.div.withConfig({componentId:"zh__sc-7a537607-14"})`
  pointer-events: auto;

  position: absolute;
  z-index: 2;

  display: flex;
  flex-direction: column;
  gap: 16px;

  width: 340px;
  padding: 16px;
  border: 1px solid #d6d1f0;
  border-radius: 8px;

  background: #fff;
  box-shadow: 0 8px 11px 0 rgb(26 20 56 / 18%);
`,f_=l.default.div.withConfig({componentId:"zh__sc-7a537607-15"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,fy=l.default.div.withConfig({componentId:"zh__sc-7a537607-16"})`
  font-size: 12px;
  font-weight: 700;
  line-height: normal;
  color: #e8660f;
`,fv=l.default.div.withConfig({componentId:"zh__sc-7a537607-17"})`
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
  color: #1a1729;
`,fC=l.default.div.withConfig({componentId:"zh__sc-7a537607-18"})`
  font-size: 12px;
  font-weight: 400;
  line-height: normal;
  color: #6b697a;
`,fI=l.default.div.withConfig({componentId:"zh__sc-7a537607-19"})`
  display: flex;
  flex-direction: column;
  gap: 5px;

  width: 100%;
  padding: 12px 14px;
  border: 1px solid #e5e9ef;
  border-radius: 8px;

  background: #fff;
`,fz=l.default.div.withConfig({componentId:"zh__sc-7a537607-20"})`
  font-size: 12px;
  font-weight: 500;
  line-height: normal;
  color: ${({$variant:e})=>"manual"===e?"#e8660f":"#5942f2"};
`,fT=l.default.div.withConfig({componentId:"zh__sc-7a537607-21"})`
  font-size: 12px;
  font-weight: 700;
  line-height: normal;
  color: #1a1729;
`,fE=l.default.div.withConfig({componentId:"zh__sc-7a537607-22"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,fk=l.default.button.withConfig({componentId:"zh__sc-7a537607-23"})`
  cursor: pointer;

  display: flex;

  padding: 4px 0;
  border: none;

  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: #4f39f6;

  background: transparent;

  &:disabled {
    cursor: not-allowed;
    color: #9ca3af;
  }
`,fS=l.default.div.withConfig({componentId:"zh__sc-7a537607-24"})`
  transform-origin: top left;
  transform: scale(${({$scale:e})=>e});
  width: 210mm;
  height: 297mm;
`,fO=l.default.div.withConfig({componentId:"zh__sc-7a537607-25"})`
  width: 210mm;
  height: 297mm;
  background: #f9fafb;
`,fA=l.default.button.withConfig({componentId:"zh__sc-7a537607-26"})`
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

  &:disabled {
    cursor: not-allowed;
    border: 1px solid #e5e9ef;
    color: #9ca3af;
    background: #f9fafb;
  }

  &:disabled:hover {
    border: 1px solid #e5e9ef;
    color: #9ca3af;
    background: #f9fafb;
  }
`,f$=l.default.div.withConfig({componentId:"zh__sc-7a537607-27"})`
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
`,fD=l.default.div.withConfig({componentId:"zh__sc-7a537607-28"})`
  pointer-events: auto;

  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: center;

  padding: 8px 16px;
  border: 1px solid #e5e9ef;
  border-radius: 99px;

  background: #fff;
`,fL=l.default.button.withConfig({componentId:"zh__sc-7a537607-29"})`
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
`,fR=l.default.span.withConfig({componentId:"zh__sc-7a537607-30"})`
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 16px;
  color: ${({$muted:e})=>!0===e?"#9ca3af":"#0a0a0a"};
  letter-spacing: -1px;
`,fN=l.default.div.withConfig({componentId:"zh__sc-7a537607-31"})`
  display: flex;
  gap: 2px;
  align-items: center;
`,fP=l.default.div.withConfig({componentId:"zh__sc-7a537607-32"})`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 20px;
`,fF=l.default.input.withConfig({componentId:"zh__sc-7a537607-33"})`
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
`,fM=l.default.span.withConfig({componentId:"zh__sc-7a537607-34"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: 16px;
  text-align: center;
  letter-spacing: -1px;
`,fB=(0,l.default)(fM).withConfig({componentId:"zh__sc-7a537607-35"})`
  color: #0a0a0a;
`,fU=(0,l.default)(fM).withConfig({componentId:"zh__sc-7a537607-36"})`
  color: #0a0a0a;
`;var fW=e.i(89656);let{SERVICE_TYPE:fV,BANK_NAME:fY}=W.default.enums;function fH(){let e=a.default.modal.organization.accountAdd,n="edit"===e.mode,[l,o]=(0,i.useState)(e.serviceType),[r,s]=(0,i.useState)(e.accountNumber),[c,f]=(0,i.useState)(e.bankName),[h,p]=(0,i.useState)(e.accountHolder),[u,x]=(0,i.useState)(e.useFlag),[g,m]=(0,i.useState)(""),[b,j]=(0,i.useState)(""),[w,_]=(0,i.useState)(!1),y=r.trim(),v=h.trim(),C=e.accountNumber.trim(),I=e.accountHolder.trim(),z=l!==e.serviceType||y!==C||c!==e.bankName||v!==I||u!==e.useFlag,T=()=>{w||(o(e.serviceType),s(e.accountNumber),f(e.bankName),p(e.accountHolder),x(e.useFlag),m(""),j(""),e.close())},E=async()=>{if(w)return;let t=r.trim(),i=h.trim(),d=a.default.organizationSetting.staff.organizationId;if(""===t)return void m("필수 입력값입니다.");if(""===i)return void j("필수 입력값입니다.");if(null===d)return void a.default.ui.layout.toast.error(n?"기관 식별자가 없어 계좌를 수정할 수 없습니다.":"기관 식별자가 없어 계좌를 생성할 수 없습니다.");m(""),j(""),_(!0);let o={serviceType:l,accountNumber:t,bankName:c,accountHolder:i,useFlag:u},[s]=n&&null!==e.accountId?await a.default.data.organization.bankAccountList.patch({orgId:d,accountId:e.accountId,payload:o}):await a.default.data.organization.bankAccountList.create({orgId:d,payload:o});if(null!==s){_(!1),a.default.ui.layout.toast.error(s.message);return}let f=a.default.data.organization.cardList.query;null!==f&&f.orgId===d&&await a.default.data.organization.cardList.refetch(),_(!1),T()};return(0,t.jsx)(d.default,{children:(0,t.jsxs)(fW.Container,{children:[(0,t.jsxs)(fW.Header,{children:[(0,t.jsx)(fW.HeaderLeft,{children:(0,t.jsx)(fW.HeaderTitle,{children:n?"계좌 정보 수정하기":"계좌 정보 추가하기"})}),(0,t.jsx)(fW.HeaderRight,{children:(0,t.jsxs)(fG,{onClick:T,disabled:w,children:[(0,t.jsx)(ih.default,{sx:{fontSize:20}}),"닫기"]})})]}),(0,t.jsxs)(fW.Body,{children:[(0,t.jsxs)(fW.BodyRow,{children:[(0,t.jsx)(fW.BodyRowLabel,{children:"서비스 종류를 선택해주세요."}),(0,t.jsx)(fK,{value:l,onChange:e=>{let t=e.target.value;t in fV&&o(t)},children:Object.entries(fV).map(([e,n])=>(0,t.jsxs)("option",{value:e,children:[n.label," 서비스"]},e))})]}),(0,t.jsxs)(fW.BodyRow,{children:[(0,t.jsx)(fW.BodyRowLabel,{children:"계좌번호를 입력해주세요."}),(0,t.jsx)(fX,{placeholder:"000-0000-0000-00",value:r,onChange:e=>{m(""),s(e.target.value.replace(/[^0-9-]/g,""))}}),(0,t.jsx)(fW.BodyRowErrorText,{$isVisible:g.trim().length>0,children:g})]}),(0,t.jsxs)(fW.BodyRow,{children:[(0,t.jsx)(fW.BodyRowLabel,{children:"은행을 선택해주세요."}),(0,t.jsx)(fK,{value:c,onChange:e=>{let t=e.target.value;t in fY&&f(t)},children:Object.entries(fY).map(([e,n])=>(0,t.jsx)("option",{value:e,children:n.label},e))})]}),(0,t.jsxs)(fW.BodyRow,{children:[(0,t.jsx)(fW.BodyRowLabel,{children:"예금주를 입력해주세요."}),(0,t.jsx)(fX,{placeholder:"기관명 또는 성명",value:h,onChange:e=>{j(""),p(e.target.value)}}),(0,t.jsx)(fW.BodyRowErrorText,{$isVisible:b.trim().length>0,children:b})]}),(0,t.jsxs)(fW.BodyRow,{children:[(0,t.jsx)(fW.BodyRowLabel,{children:"서류 반영 여부를 선택해주세요."}),(0,t.jsxs)(fW.RadioCheckContainer,{children:[(0,t.jsxs)(fW.RadioCheckLabel,{children:[(0,t.jsx)(fq,{checked:u,onChange:()=>{x(!0)}}),"반영"]}),(0,t.jsxs)(fW.RadioCheckLabel,{children:[(0,t.jsx)(fq,{checked:!1===u,onChange:()=>{x(!1)}}),"미반영"]})]})]})]}),(0,t.jsxs)(fW.Footer,{children:[(0,t.jsx)(fQ,{onClick:()=>{w||(o("MEAL"),s(""),f("NONGHYUP"),p(""),x(!0),m(""),j(""))},disabled:w,children:"내용 삭제 후 새로 입력 (초기화)"}),(0,t.jsxs)(fJ,{onClick:()=>{E()},disabled:w||n&&!1===z,children:[(0,t.jsx)(iq.default,{sx:{fontSize:20}}),"저장"]})]})]})})}let fG=(0,l.default)(r.default.Button.Outlined).withConfig({componentId:"zh__sc-e7085db1-0"})`
  ${fW.btnStyle}
`,fK=(0,l.default)(r.default.Input.Select).withConfig({componentId:"zh__sc-e7085db1-1"})`
  ${fW.inputStyle}
`,fX=(0,l.default)(r.default.Input.Text).withConfig({componentId:"zh__sc-e7085db1-2"})`
  ${fW.inputStyle}
  width: 100%;
`,fq=(0,l.default)(r.default.Input.Radio).withConfig({componentId:"zh__sc-e7085db1-3"})``,fQ=(0,l.default)(r.default.Button.Outlined).withConfig({componentId:"zh__sc-e7085db1-4"})`
  ${fW.btnStyle}
`,fJ=(0,l.default)(r.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-e7085db1-5"})`
  ${fW.btnStyle}
`,fZ=(0,n.observer)(function(){return"ready"!==a.default.modal.organization.accountAdd.status?null:(0,t.jsx)(fH,{})}),f0=(0,nd.default)((0,t.jsx)("path",{d:"M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3z"}),"OpenInNew"),{CARD_USAGE:f1,BANK_NAME:f2,SERVICE_TYPE:f6}=W.default.enums;function f4(){let e=a.default.modal.organization.cardAdd,n="edit"===e.mode,l=a.default.organizationSetting.staff.organizationId,o=a.default.data.organization.bankAccountList,r=o.data??[],[s,c]=(0,i.useState)(e.cardUsage),[f,h]=(0,i.useState)(""===e.bankAccountId?ek.SELECT_EMPTY_VALUE:e.bankAccountId),[p,u]=(0,i.useState)(e.cardNumberHead),[x,g]=(0,i.useState)(e.cardNumberTail),[m,b]=(0,i.useState)(""),[j,w]=(0,i.useState)(!1),_=f===ek.SELECT_EMPTY_VALUE?"":f,y=s!==e.cardUsage||_!==e.bankAccountId||p!==e.cardNumberHead||x!==e.cardNumberTail;(0,i.useEffect)(()=>{if(null===l)return void o.reset();let e=o.query;(null===e||e.orgId!==l)&&o.setQuery({orgId:l})},[o,l]);let v=()=>{j||(c(e.cardUsage),h(""===e.bankAccountId?ek.SELECT_EMPTY_VALUE:e.bankAccountId),u(e.cardNumberHead),g(e.cardNumberTail),b(""),e.close())},C=async()=>{if(j||n&&!1===y)return;if(4!==p.length)return void b("카드번호 앞 4자리를 입력해주세요.");if(x.length<3||x.length>4)return void b("카드번호 끝 3~4자리를 입력해주세요.");if(null===l)return void a.default.ui.layout.toast.error(n?"기관 식별자가 없어 카드를 수정할 수 없습니다.":"기관 식별자가 없어 카드를 생성할 수 없습니다.");b(""),w(!0);let t={cardNumber:`${p}-****-****-${x}`,bankAccountId:f===ek.SELECT_EMPTY_VALUE?void 0:f,cardUsage:s},[i]=n&&null!==e.cardId?await a.default.data.organization.cardList.patch({orgId:l,cardId:e.cardId,payload:t}):await a.default.data.organization.cardList.create({orgId:l,payload:t});if(null!==i){w(!1),a.default.ui.layout.toast.error(i.message);return}w(!1),v()};return(0,t.jsx)(d.default,{children:(0,t.jsxs)(fW.Container,{children:[(0,t.jsxs)(fW.Header,{children:[(0,t.jsx)(fW.HeaderLeft,{children:(0,t.jsx)(fW.HeaderTitle,{children:n?"카드 정보 수정하기":"카드 정보 추가하기"})}),(0,t.jsx)(fW.HeaderRight,{children:(0,t.jsxs)(f5,{onClick:v,disabled:j,children:[(0,t.jsx)(ih.default,{sx:{fontSize:20}}),"닫기"]})})]}),(0,t.jsxs)(fW.Body,{children:[(0,t.jsxs)(fW.BodyRow,{children:[(0,t.jsx)(fW.BodyRowLabel,{children:"카드번호의 앞 4자리와 끝 3~4자리를 입력해주세요."}),(0,t.jsxs)(f8,{children:[(0,t.jsx)(f7,{placeholder:"0000",maxLength:4,value:p,onChange:e=>{u(e.target.value.replace(/[^0-9]/g,"")),b("")}}),(0,t.jsx)(f7,{placeholder:"****",value:"****",disabled:!0}),(0,t.jsx)(f7,{placeholder:"****",value:"****",disabled:!0}),(0,t.jsx)(f7,{placeholder:"0000",maxLength:4,value:x,onChange:e=>{g(e.target.value.replace(/[^0-9]/g,"")),b("")}})]}),(0,t.jsx)(fW.BodyRowErrorText,{$isVisible:m.trim().length>0,children:m}),(0,t.jsx)(he,{$isVisible:0===m.trim().length,children:"⚠ 가운데 8자리는 입력하지 않습니다."})]}),(0,t.jsxs)(fW.BodyRow,{children:[(0,t.jsx)(fW.BodyRowLabel,{children:"카드와 연결된 계좌가 있는 경우, 등록된 계좌를 선택해주세요."}),(0,t.jsxs)(f9,{$isEmptySelected:f===ek.SELECT_EMPTY_VALUE,value:f,onChange:e=>{h(e.target.value)},disabled:"loading"===o.status,children:[(0,t.jsx)("option",{value:ek.SELECT_EMPTY_VALUE,disabled:!0,children:"계좌 없음"}),r.map(e=>(0,t.jsxs)("option",{value:e.id,children:[e.serviceType?`${f6[e.serviceType].label} 서비스 `:"- ",e.accountNumber," (은행 ",f2[e.bankName].label,", 예금주"," ",e.accountHolder??"-",")"]},e.id))]}),(0,t.jsxs)(ht,{children:[(0,t.jsx)(hn,{children:"⚠ 원하는 계좌가 목록에 없나요?"}),(0,t.jsxs)(hi,{onClick:()=>{j||(v(),a.default.modal.organization.accountAdd.show())},type:"button",disabled:j,children:["계좌 먼저 등록하기",(0,t.jsx)(f0,{sx:{fontSize:16,position:"relative",top:-1}})]})]})]}),(0,t.jsxs)(fW.BodyRow,{children:[(0,t.jsx)(fW.BodyRowLabel,{children:"카드 용도를 선택하세요."}),(0,t.jsx)(f3,{value:s,onChange:e=>{let t=e.target.value;t in f1&&c(t)},children:Object.entries(f1).map(([e,n])=>(0,t.jsx)("option",{value:e,children:n.label},e))})]})]}),(0,t.jsxs)(fW.Footer,{children:[(0,t.jsx)(hl,{onClick:()=>{j||(c("OPERATING"),h(ek.SELECT_EMPTY_VALUE),u(""),g(""),b(""))},disabled:j,children:"내용 삭제 후 새로 입력 (초기화)"}),(0,t.jsxs)(ha,{onClick:()=>{C()},disabled:j||n&&!1===y,children:[(0,t.jsx)(iq.default,{sx:{fontSize:20}}),"저장"]})]})]})})}let f5=(0,l.default)(r.default.Button.Outlined).withConfig({componentId:"zh__sc-4440bebb-0"})`
  ${fW.btnStyle}
`,f3=(0,l.default)(r.default.Input.Select).withConfig({componentId:"zh__sc-4440bebb-1"})`
  ${fW.inputStyle}
  width: 180px;
`,f9=(0,l.default)(r.default.Input.Select).withConfig({componentId:"zh__sc-4440bebb-2"})`
  ${fW.inputStyle}
  width: 100%;
  color: ${({$isEmptySelected:e})=>e?"#9ca3af":"#0a0a0a"};
`,f8=l.default.div.withConfig({componentId:"zh__sc-4440bebb-3"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,f7=(0,l.default)(r.default.Input.Text).withConfig({componentId:"zh__sc-4440bebb-4"})`
  ${fW.inputStyle}
  width: 75px;
  text-align: center;

  &:disabled {
    color: #6b7280;
    background: #f3f4f6;
  }
`,he=(0,l.default)(fW.BodyRowErrorText).withConfig({componentId:"zh__sc-4440bebb-5"})`
  color: #ff6900;
`,ht=l.default.div.withConfig({componentId:"zh__sc-4440bebb-6"})`
  position: absolute;
  right: 0;
  bottom: -24px;
  left: 0;

  display: flex;
  gap: 10px;
  align-items: center;
`,hn=l.default.div.withConfig({componentId:"zh__sc-4440bebb-7"})`
  font-size: 13px;
  line-height: 1.35;
  color: #ff6900;
`,hi=l.default.button.withConfig({componentId:"zh__sc-4440bebb-8"})`
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
`,hl=(0,l.default)(r.default.Button.Outlined).withConfig({componentId:"zh__sc-4440bebb-9"})`
  ${fW.btnStyle}
`,ha=(0,l.default)(r.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-4440bebb-10"})`
  ${fW.btnStyle}
`,hd=(0,n.observer)(function(){return"ready"!==a.default.modal.organization.cardAdd.status?null:(0,t.jsx)(f4,{})});var ho=e.i(93847),hr=e.i(58315),hs=e.i(7242),hc=e.i(86400);function hf(){let e=a.default.modal.organization.contactAdd,n="edit"===e.mode,l=a.default.organizationSetting.staff.staffAccountList,[o,r]=(0,i.useState)(e.serviceType??ek.SELECT_EMPTY_VALUE),[s,c]=(0,i.useState)(e.staffId??ek.SELECT_EMPTY_VALUE),[f,h]=(0,i.useState)(e.phoneNumber),[p,u]=(0,i.useState)(e.mobileProvider),[x,g]=(0,i.useState)(""),[m,b]=(0,i.useState)(!1),j=()=>{r(ek.SELECT_EMPTY_VALUE),c(ek.SELECT_EMPTY_VALUE),h(""),u("KT"),g("")},w=()=>{m||(j(),e.close())},_=async()=>{if(m)return;let t=f.trim();if(""===t)return void g("휴대폰 번호는 필수 입력값입니다.");if(!0!==hc.default.brand.phoneNumber.is(t))return void g("휴대폰 번호 형식이 올바르지 않습니다.");g(""),b(!0);let[i]=n&&null!==e.contactId?await a.default.organizationSetting.staff.patchContact({contactId:e.contactId,payload:{serviceType:o===ek.SELECT_EMPTY_VALUE?null:o,staffId:s===ek.SELECT_EMPTY_VALUE?null:s,phoneNumber:t,mobileProvider:p}}):await a.default.organizationSetting.staff.createContact({serviceType:o===ek.SELECT_EMPTY_VALUE?void 0:o,staffId:s===ek.SELECT_EMPTY_VALUE?void 0:s,phoneNumber:t,mobileProvider:p});if(null!==i){b(!1),a.default.ui.layout.toast.error(i.message);return}b(!1),w()};return(0,t.jsx)(d.default,{children:(0,t.jsxs)(fW.Container,{children:[(0,t.jsxs)(fW.Header,{children:[(0,t.jsx)(fW.HeaderLeft,{children:(0,t.jsx)(fW.HeaderTitle,{children:n?"연락처 수정하기":"연락처 추가하기"})}),(0,t.jsx)(fW.HeaderRight,{children:(0,t.jsxs)(hp,{onClick:w,disabled:m,children:[(0,t.jsx)(ih.default,{sx:{fontSize:20}}),"닫기"]})})]}),(0,t.jsxs)(fW.Body,{children:[(0,t.jsxs)(fW.BodyRow,{children:[(0,t.jsxs)(fW.BodyRowLabelRow,{children:[(0,t.jsx)(fW.BodyRowLabel,{children:"서비스 종류를 선택해주세요."}),(0,t.jsx)(fW.BodyRowHelperText,{children:"필수 입력값이 아닙니다. 입력란을 비워둘 수 있습니다."})]}),(0,t.jsxs)(hu,{value:o,onChange:e=>{let t=e.target.value;r(t in hs.default?t:ek.SELECT_EMPTY_VALUE)},children:[Object.entries(hs.default).map(([e,n])=>(0,t.jsxs)("option",{value:e,children:[n.label," 서비스"]},e)),(0,t.jsx)("option",{value:ek.SELECT_EMPTY_VALUE,children:"선택 안함"})]})]}),(0,t.jsxs)(fW.BodyRow,{children:[(0,t.jsxs)(fW.BodyRowLabelRow,{children:[(0,t.jsx)(fW.BodyRowLabel,{children:"담당자를 선택해주세요."}),(0,t.jsx)(fW.BodyRowHelperText,{children:"필수 입력값이 아닙니다. 입력란을 비워둘 수 있습니다."})]}),(0,t.jsxs)(hu,{style:{width:263},value:s,onChange:e=>{c(e.target.value)},children:[l.map(e=>(0,t.jsx)("option",{value:e.id,children:null===e.position?e.name:`${e.name} (직급 ${hr.default[e.position].label})`},e.id)),(0,t.jsx)("option",{value:ek.SELECT_EMPTY_VALUE,children:"선택 안함"})]})]}),(0,t.jsxs)(fW.BodyRow,{children:[(0,t.jsxs)(fW.BodyRowLabelRow,{children:[(0,t.jsx)(fW.BodyRowLabel,{children:"휴대폰 번호 및 통신사를 선택해주세요."}),(0,t.jsx)(fW.BodyRowHelperText,{children:"필수 입력값 입니다."})]}),(0,t.jsxs)(hg,{children:[(0,t.jsx)(hx,{style:{width:191},placeholder:"010-0000-0000",value:f,onChange:e=>{var t;t=e.target.value,g(""),h(hc.default.brand.phoneNumber.format(t))}}),(0,t.jsx)(hu,{style:{width:131},value:p,onChange:e=>{let t=e.target.value;t in ho.default&&u(t)},children:Object.entries(ho.default).map(([e,n])=>(0,t.jsx)("option",{value:e,children:n.label},e))})]}),(0,t.jsx)(fW.BodyRowErrorText,{$isVisible:x.trim().length>0,children:x})]})]}),(0,t.jsxs)(fW.Footer,{children:[(0,t.jsx)(hm,{onClick:()=>{m||j()},disabled:m,children:"내용 삭제 후 새로 입력 (초기화)"}),(0,t.jsxs)(hb,{onClick:()=>{_()},disabled:m,children:[(0,t.jsx)(iq.default,{sx:{fontSize:20}}),n?"수정":"저장"]})]})]})})}let hh=(0,n.observer)(function(){return"ready"!==a.default.modal.organization.contactAdd.status?null:(0,t.jsx)(hf,{})}),hp=(0,l.default)(r.default.Button.Outlined).withConfig({componentId:"zh__sc-665cc4f2-0"})`
  ${fW.btnStyle}
`,hu=(0,l.default)(r.default.Input.Select).withConfig({componentId:"zh__sc-665cc4f2-1"})`
  ${fW.inputStyle}
  width: 131px;
`,hx=(0,l.default)(r.default.Input.Text).withConfig({componentId:"zh__sc-665cc4f2-2"})`
  ${fW.inputStyle}
`,hg=l.default.div.withConfig({componentId:"zh__sc-665cc4f2-3"})`
  display: flex;
  gap: 12px;
  align-items: center;
`,hm=(0,l.default)(r.default.Button.Outlined).withConfig({componentId:"zh__sc-665cc4f2-4"})`
  ${fW.btnStyle}
`,hb=(0,l.default)(r.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-665cc4f2-5"})`
  ${fW.btnStyle}
`,hj=(0,n.observer)(function({acceptFileTypes:e,isError:n,onSelectFile:l}){let{isWindowFileDragging:d}=a.default.ui.layout,o=(0,i.useRef)(null);(0,v.default)(e=>{let t=e[0];void 0!==t&&l(t)});let r=n?"지원하지 않는 파일 형식입니다.":d?"파일을 여기에 놓으면 업로드 됩니다.":"이곳에 파일을 끌어다 놓거나 (드래그 앤 드롭), 클릭하여 업로드하세요.";return(0,t.jsxs)(hw,{children:[(0,t.jsx)(h_,{children:"로고 또는 도장 이미지를 업로드해 주세요."}),(0,t.jsxs)(hv,{$isWindowFileDragging:d,$isError:n,onDragOver:e=>{e.preventDefault()},onDrop:e=>{e.preventDefault();let t=e.dataTransfer.files[0];void 0!==t&&l(t)},onClick:e=>{e.target instanceof HTMLElement&&(e.target.closest("button")||o.current?.click())},children:[!n&&(0,t.jsx)(hC,{children:(0,t.jsx)(U.Upload,{size:26,color:"#4f39f6"})}),(0,t.jsxs)(hI,{children:[(0,t.jsx)(hz,{$isError:n,children:r}),(0,t.jsx)(hT,{children:"지원 파일 형식: PNG, JPG, JPEG"})]})]}),(0,t.jsx)(hy,{ref:o,type:"file",accept:e,onChange:e=>{let t=e.target.files?.[0];void 0!==t&&(l(t),e.target.value="")}})]})}),hw=l.default.div.withConfig({componentId:"zh__sc-f01fc0e2-0"})`
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
`,h_=l.default.div.withConfig({componentId:"zh__sc-f01fc0e2-1"})`
  font-size: 18px;
  font-weight: 700;
  font-style: normal;
  line-height: 24px; /* 133.333% */
  color: #101828;
  text-align: center;
`,hy=l.default.input.withConfig({componentId:"zh__sc-f01fc0e2-2"})`
  display: none;
`,hv=l.default.div.withConfig({componentId:"zh__sc-f01fc0e2-3"})`
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
`,hC=l.default.div.withConfig({componentId:"zh__sc-f01fc0e2-4"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;
`,hI=l.default.div.withConfig({componentId:"zh__sc-f01fc0e2-5"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: center;
`,hz=l.default.div.withConfig({componentId:"zh__sc-f01fc0e2-6"})`
  font-size: 14px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px;
  color: ${({$isError:e})=>e?"#ff4d4f":"#4f39f6"};
  text-align: center;
`,hT=l.default.div.withConfig({componentId:"zh__sc-f01fc0e2-7"})`
  font-size: 14px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px;
  color: #99a1af;
`,hE=(0,nd.default)((0,t.jsx)("path",{d:"M19 13H5v-2h14z"}),"Remove");var hk=e.i(47885),hS=e.i(11974);let hO=async(e,t)=>""===e||1===t?e:new Promise(n=>{let i=new Image;i.onload=()=>{let l=document.createElement("canvas");l.width=235,l.height=235;let a=l.getContext("2d");if(null===a)return void n(e);let d=Math.min(l.width/i.width,l.height/i.height),o=i.width*d*t,r=i.height*d*t,s=(l.width-o)/2,c=(l.height-r)/2;a.clearRect(0,0,l.width,l.height),a.drawImage(i,s,c,o,r),n(l.toDataURL("image/png"))},i.onerror=()=>{n(e)},i.src=e});function hA({file:e,onProcessedImageChange:n}){let[l,a]=(0,i.useState)(100),[d,o]=(0,i.useState)(100),[r,s]=(0,i.useState)(100),[c,f]=(0,i.useState)(""),[h,p]=(0,i.useState)(""),u=(0,i.useRef)(0),x=(0,i.useRef)(0);return(0,i.useEffect)(()=>{let e=window.setTimeout(()=>{s(d)},120);return()=>{window.clearTimeout(e)}},[d]),(0,i.useEffect)(()=>{let t=u.current+1;u.current=t,(async()=>{let{adjustedUrl:n}=await (0,hS.processBackgroundRemoval)({file:e,whiteThreshold:hk.DEFAULT_WHITE_THRESHOLD,softness:hk.DEFAULT_SOFTNESS,contrast:r,selectionRect:null});u.current===t&&f(n)})()},[r,e,n]),(0,i.useEffect)(()=>{if(""===c)return;let e=x.current+1;x.current=e,(async()=>{let t=await hO(c,l/100);x.current===e&&(p(t),n(t))})()},[c,l,n]),(0,t.jsxs)(h$,{children:[(0,t.jsxs)(hD,{children:[(0,t.jsx)(hL,{children:(0,t.jsx)(O.default.BackgroundReplace,{size:16,color:"#1C1B1F"})}),(0,t.jsxs)(hR,{children:["업로드된 ",e.name," 이미지의 배경을 제거했습니다.",(0,t.jsx)("br",{}),"아래에서 크기와 선명도를 확인한 뒤 저장을 완료해주세요!"]})]}),(0,t.jsxs)(hN,{children:[(0,t.jsx)(hP,{children:"이미지 미리보기"}),(0,t.jsxs)(hF,{children:[(0,t.jsxs)(hM,{children:[(0,t.jsx)(hB,{children:""!==h&&(0,t.jsx)(hU,{src:h,alt:`${e.name} 미리보기`})}),(0,t.jsxs)(hW,{children:[(0,t.jsx)(hV,{children:(0,t.jsx)(eJ.default,{sx:{fontSize:22}})}),(0,t.jsx)(hY,{children:"체크 무늬는 투명 배경을 뜻합니다. 실제 저장 시에는 배경 없이 저장됩니다."})]})]}),(0,t.jsxs)(hH,{children:[(0,t.jsxs)(hG,{children:[(0,t.jsx)(hK,{children:"크기 조정하기"}),(0,t.jsxs)(hX,{children:[(0,t.jsxs)(hq,{children:[(0,t.jsx)(hQ,{onClick:()=>{a(e=>Math.max(e-10,100))},disabled:l<=100,children:(0,t.jsx)(hE,{sx:{fontSize:24}})}),(0,t.jsx)(hJ,{children:"작게"})]}),(0,t.jsx)(hZ,{min:100,max:500,value:l,onChange:a}),(0,t.jsxs)(hq,{children:[(0,t.jsx)(hQ,{onClick:()=>{a(e=>Math.min(e+10,500))},disabled:l>=500,children:(0,t.jsx)(sk.default,{sx:{fontSize:24}})}),(0,t.jsx)(hJ,{children:"크게"})]})]})]}),(0,t.jsx)(h0,{}),(0,t.jsxs)(hG,{children:[(0,t.jsx)(hK,{children:"선명도 조정하기"}),(0,t.jsxs)(hX,{children:[(0,t.jsxs)(hq,{children:[(0,t.jsx)(hQ,{onClick:()=>{o(e=>{let t=Math.max(e-5,hk.MIN_CONTRAST);return s(t),t})},disabled:d<=hk.MIN_CONTRAST,children:(0,t.jsx)(hE,{sx:{fontSize:24}})}),(0,t.jsx)(hJ,{children:"부드럽게"})]}),(0,t.jsx)(hZ,{min:hk.MIN_CONTRAST,max:hk.MAX_CONTRAST,value:d,onChange:o,onChangeEnd:s}),(0,t.jsxs)(hq,{children:[(0,t.jsx)(hQ,{onClick:()=>{o(e=>{let t=Math.min(e+5,hk.MAX_CONTRAST);return s(t),t})},disabled:d>=hk.MAX_CONTRAST,children:(0,t.jsx)(sk.default,{sx:{fontSize:24}})}),(0,t.jsx)(hJ,{children:"선명하게"})]})]})]})]})]})]})]})}let h$=l.default.div.withConfig({componentId:"zh__sc-3b741e84-0"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  align-self: stretch;

  height: 100%;
  padding: 32px 24px;

  background: #fff;
`,hD=l.default.div.withConfig({componentId:"zh__sc-3b741e84-1"})`
  display: flex;
  gap: 4px;
  align-items: flex-start;
  align-self: stretch;

  padding: 12px;
  border: 1px solid #e5e7eb;
  border-radius: 6px;

  background: #f5f8ff;
`,hL=l.default.div.withConfig({componentId:"zh__sc-3b741e84-2"})``,hR=l.default.div.withConfig({componentId:"zh__sc-3b741e84-3"})`
  font-size: 14px;
  font-weight: 400;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
`,hN=l.default.div.withConfig({componentId:"zh__sc-3b741e84-4"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;
`,hP=l.default.div.withConfig({componentId:"zh__sc-3b741e84-5"})`
  font-size: 14px;
  font-weight: 700;
  font-style: normal;
  line-height: 16px; /* 114.286% */
  color: #0a0a0a;
`,hF=l.default.div.withConfig({componentId:"zh__sc-3b741e84-6"})`
  display: flex;
  gap: 24px;
  align-items: flex-start;
  align-self: stretch;
`,hM=l.default.section.withConfig({componentId:"zh__sc-3b741e84-7"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;

  width: 235px;
`,hB=l.default.div.withConfig({componentId:"zh__sc-3b741e84-8"})`
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
`,hU=l.default.img.withConfig({componentId:"zh__sc-3b741e84-9"})`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`,hW=l.default.div.withConfig({componentId:"zh__sc-3b741e84-10"})`
  display: flex;
  gap: 4px;
  align-items: flex-start;
  align-self: stretch;

  color: #0a0a0a;
`,hV=l.default.div.withConfig({componentId:"zh__sc-3b741e84-11"})`
  position: relative;
  top: -3px;
`,hY=l.default.div.withConfig({componentId:"zh__sc-3b741e84-12"})`
  font-size: 14px;
  font-weight: 400;
  font-style: normal;
  line-height: 16px; /* 114.286% */
`,hH=l.default.section.withConfig({componentId:"zh__sc-3b741e84-13"})`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
`,hG=l.default.div.withConfig({componentId:"zh__sc-3b741e84-14"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;
`,hK=l.default.h5.withConfig({componentId:"zh__sc-3b741e84-15"})`
  font-size: 14px;
  font-weight: 700;
  font-style: normal;
  line-height: 16px; /* 114.286% */
  color: #0a0a0a;
`,hX=l.default.div.withConfig({componentId:"zh__sc-3b741e84-16"})`
  display: flex;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;
  justify-content: center;
`,hq=l.default.div.withConfig({componentId:"zh__sc-3b741e84-17"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 56px;
`,hQ=(0,l.default)(r.default.Button.Outlined).withConfig({componentId:"zh__sc-3b741e84-18"})`
  display: flex;
  gap: 4px;
  align-items: center;
  align-self: stretch;

  height: 36px;
  padding: 8px 16px;
`,hJ=l.default.div.withConfig({componentId:"zh__sc-3b741e84-19"})`
  display: flex;
  justify-content: center;

  font-size: 14px;
  font-weight: 400;
  font-style: normal;
  line-height: normal;
  color: #4f39f6;
  text-align: center;
`,hZ=(0,l.default)(r.default.Input.Slider).withConfig({componentId:"zh__sc-3b741e84-20"})`
  position: relative;
  top: 10px;
`,h0=l.default.div.withConfig({componentId:"zh__sc-3b741e84-21"})`
  align-self: stretch;
  border-top: 1px solid #d1d5db;
`,h1=(0,n.observer)(function(){let e=a.default.modal.organization.imageAdjustUpload,{status:n,close:l,resetToUploadStep:o,selectedFile:r}=e,[s,c]=(0,i.useState)(!1),f=(0,i.useRef)(null);if((0,i.useEffect)(()=>"ready"!==n?void e.setToastContainer(null):(e.setToastContainer(f.current),()=>{e.setToastContainer(null)}),[e,n]),"ready"!==n)return null;let h=null===r,p="logo"===e.target?"로고":"도장",u=async()=>{!0===await e.save()&&c(!1)};return(0,t.jsx)(d.default,{children:(0,t.jsxs)(h2,{ref:f,children:[(0,t.jsxs)(fW.Header,{children:[(0,t.jsx)(fW.HeaderLeft,{children:(0,t.jsx)(fW.HeaderTitle,{children:"이미지 업로드하기"})}),(0,t.jsx)(fW.HeaderRight,{children:(0,t.jsxs)(h6,{onClick:()=>{c(!1),l()},children:[(0,t.jsx)(ih.default,{sx:{fontSize:20}}),"닫기"]})})]}),(0,t.jsx)(h4,{children:h?(0,t.jsx)(hj,{acceptFileTypes:e.acceptFileTypes,isError:e.isError,onSelectFile:e.setSelectedFile}):(0,t.jsx)(hA,{file:r,onProcessedImageChange:e.setProcessedImageDataUrl})}),(0,t.jsxs)(fW.Footer,{children:[(0,t.jsx)(h5,{onClick:()=>{c(!1),o()},disabled:h||e.isSaving,children:"다시 업로드하기"}),(0,t.jsxs)(h3,{onClick:()=>{c(!0)},disabled:h||e.isSaving,children:[(0,t.jsx)(iq.default,{sx:{fontSize:20}}),"최종확인 및 저장"]})]}),(0,t.jsx)(h9,{isOpen:s,targetLabel:p,isSaving:e.isSaving,onCancel:()=>{e.isSaving||c(!1)},onConfirm:()=>{u()}})]})})}),h2=(0,l.default)(fW.Container).withConfig({componentId:"zh__sc-665af392-0"})`
  position: relative;
  width: 626px;
`,h6=(0,l.default)(r.default.Button.Outlined).withConfig({componentId:"zh__sc-665af392-1"})`
  ${fW.btnStyle}
`,h4=(0,l.default)(fW.Body).withConfig({componentId:"zh__sc-665af392-2"})`
  padding: 0;
`,h5=(0,l.default)(r.default.Button.Outlined).withConfig({componentId:"zh__sc-665af392-3"})`
  ${fW.btnStyle}
`,h3=(0,l.default)(r.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-665af392-4"})`
  ${fW.btnStyle}
`;function h9({isOpen:e,targetLabel:n,isSaving:i,onCancel:l,onConfirm:a}){return!0!==e?null:(0,t.jsx)(h8,{children:(0,t.jsxs)(h7,{children:[(0,t.jsxs)(pe,{children:[(0,t.jsxs)(pt,{children:[n," 이미지를 저장할까요?"]}),(0,t.jsxs)(pn,{children:["저장된 ",n," 이미지는 출력용 서류에서 사용할 수 있습니다.",(0,t.jsx)("br",{}),"이미 출력했거나 최종확인한 서류는 다시 확인이 필요할 수 있습니다."]})]}),(0,t.jsxs)(pi,{children:[(0,t.jsx)(pl,{type:"button",onClick:l,disabled:!0===i,children:"취소하기"}),(0,t.jsx)(pa,{type:"button",onClick:a,disabled:!0===i,children:"저장하기"})]})]})})}let h8=l.default.div.withConfig({componentId:"zh__sc-665af392-5"})`
  position: fixed;
  z-index: 3100;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgb(17 24 39 / 36%);
`,h7=l.default.div.withConfig({componentId:"zh__sc-665af392-6"})`
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
`,pe=l.default.div.withConfig({componentId:"zh__sc-665af392-7"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;

  width: 100%;
`,pt=l.default.h3.withConfig({componentId:"zh__sc-665af392-8"})`
  margin: 0;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px;
  color: #000;
`,pn=l.default.p.withConfig({componentId:"zh__sc-665af392-9"})`
  margin: 0;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px;
  color: #000;
`,pi=l.default.div.withConfig({componentId:"zh__sc-665af392-10"})`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: flex-end;

  width: 100%;
`,pl=(0,l.default)(r.default.Button.Outlined).withConfig({componentId:"zh__sc-665af392-11"})`
  height: 36px;
  padding: 8px 16px;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px;
`,pa=(0,l.default)(r.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-665af392-12"})`
  height: 36px;
  padding: 8px 16px;

  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: 20px;
`;var pd=e.i(6412),po=e.i(13269);function pr(){let e=a.default.modal.organization.staffAccountAdd,n="edit"===e.mode,[l,o]=(0,i.useState)(e.name),[r,s]=(0,i.useState)(e.position??ek.SELECT_EMPTY_VALUE),[c,f]=(0,i.useState)(e.phoneNumber),[h,p]=(0,i.useState)(e.sealImagePath),[u,x]=(0,i.useState)(""),[g,m]=(0,i.useState)(""),[b,j]=(0,i.useState)(!1),w=()=>{o(""),s(ek.SELECT_EMPTY_VALUE),f(""),p(""),x(""),m("")},_=()=>{b||(w(),e.close())},y=async e=>{try{let t=await fetch(e);if(!0!==t.ok)return[Error("Failed to convert data URL to blob"),null];let n=await t.blob();return[null,n]}catch(e){return[e instanceof Error?e:Error("Failed to convert data URL to blob"),null]}},v=async(e,t,n)=>{let[i,l]=await y(e);if(null!==i)return[i,null];let[a,d]=await lT.default.upload.createPresignedUploadUrl({category:po.default.STAFF_SEAL,contentType:pd.default.PNG,organizationId:n,staffAccountId:t});if(null!==a)return[a,null];let[o]=await lT.default.upload.putFileToPresignedUploadUrl({uploadUrl:d.uploadUrl,contentType:pd.default.PNG,file:l});return null!==o?[o,null]:[null,d.path]},C=async e=>{let t=a.default.data.organization.contactList.query;if(!0==(null!==t&&t.orgId===e))try{await a.default.data.organization.contactList.refetch()}catch{a.default.ui.layout.toast.error("서비스별 업무 연락처 목록을 새로고침하지 못했습니다.")}},I=async()=>{if(b)return;let t=l.trim();""===t?x("이름은 필수 입력값입니다."):x("");let i=c.trim();if(""!==i&&!0!==hc.default.brand.phoneNumber.is(i))return void m("휴대폰 번호 형식이 올바르지 않습니다.");if(m(""),""===t)return;j(!0);let d=e.staffAccountId,o=a.default.organizationSetting.staff.organizationId;if(!0!==n){if(null===o){j(!1),a.default.ui.layout.toast.error("기관 식별자가 없어 근무자를 생성할 수 없습니다.");return}let[e,n]=await a.default.organizationSetting.staff.createStaffAccount({organizationId:o,name:t,role:"STAFF",position:r===ek.SELECT_EMPTY_VALUE?void 0:r,phoneNumber:""===i?void 0:i});if(null!==e||null===n){j(!1),a.default.ui.layout.toast.error(e?.message??"근무자 생성에 실패했습니다.");return}d=n.id,o=n.organizationId}else{if(null===d){j(!1),a.default.ui.layout.toast.error("수정할 근무자 정보를 찾지 못했습니다.");return}let[e]=await a.default.data.staffAccount.patch({id:d,payload:{name:t,position:r===ek.SELECT_EMPTY_VALUE?void 0:r,phoneNumber:""===i?void 0:i}});if(null!==e){j(!1),a.default.ui.layout.toast.error("근무자 수정에 실패했습니다.");return}null!==o&&await C(o)}let s=h.trim();if(s.startsWith("data:")){if(null===d||null===o){j(!1),a.default.ui.layout.toast.error("도장 업로드 대상 정보를 찾지 못했습니다.");return}let[e,t]=await v(s,d,o);if(null!==e||null===t){j(!1),a.default.ui.layout.toast.error(n?"근무자 정보는 수정되었지만 도장 업로드에 실패했습니다. 다시 시도해 주세요.":"근무자는 생성되었지만 도장 업로드에 실패했습니다. 수정에서 다시 업로드해 주세요."),_();return}let[i]=await a.default.data.staffAccount.patch({id:d,payload:{sealImagePath:t}});if(null!==i){j(!1),a.default.ui.layout.toast.error(n?"근무자 도장 경로 저장에 실패했습니다. 다시 시도해 주세요.":"근무자는 생성되었지만 도장 경로 저장에 실패했습니다. 수정에서 다시 저장해 주세요."),_();return}}j(!1),_()};return(0,t.jsx)(d.default,{children:(0,t.jsxs)(fW.Container,{children:[(0,t.jsxs)(fW.Header,{children:[(0,t.jsx)(fW.HeaderLeft,{children:(0,t.jsx)(fW.HeaderTitle,{children:n?"근무자 수정하기":"근무자 추가하기"})}),(0,t.jsx)(fW.HeaderRight,{children:(0,t.jsxs)(pc,{onClick:_,disabled:b,children:[(0,t.jsx)(ih.default,{sx:{fontSize:20}}),"닫기"]})})]}),(0,t.jsxs)(fW.Body,{children:[(0,t.jsxs)(fW.BodyRow,{children:[(0,t.jsx)(fW.BodyRowLabel,{children:"이름을 입력해주세요."}),(0,t.jsx)(ph,{placeholder:"이름을 입력해주세요",value:l,onChange:e=>{x(""),o(e.target.value)}}),(0,t.jsx)(fW.BodyRowErrorText,{$isVisible:u.trim().length>0,children:u})]}),(0,t.jsxs)(fW.BodyRow,{children:[(0,t.jsx)(fW.BodyRowLabel,{children:"직급을 선택해주세요."}),(0,t.jsxs)(pf,{value:r,onChange:e=>{let t=e.target.value;s(t in hr.default?t:ek.SELECT_EMPTY_VALUE)},children:[Object.entries(hr.default).map(([e,n])=>(0,t.jsx)("option",{value:e,children:n.label},e)),(0,t.jsx)("option",{value:ek.SELECT_EMPTY_VALUE,children:"없음"})]})]}),(0,t.jsxs)(fW.BodyRow,{children:[(0,t.jsx)(fW.BodyRowLabel,{children:"휴대폰 번호를 입력해주세요."}),(0,t.jsx)(ph,{placeholder:"010-0000-0000",value:c,onChange:e=>{var t;t=e.target.value,m(""),f(hc.default.brand.phoneNumber.format(t))}}),(0,t.jsx)(fW.BodyRowErrorText,{$isVisible:g.trim().length>0,children:g})]}),(0,t.jsxs)(fW.BodyRow,{children:[(0,t.jsxs)(fW.BodyRowLabelRow,{children:[(0,t.jsx)(fW.BodyRowLabel,{children:"도장 이미지를 업로드 해주세요."}),(0,t.jsxs)(fW.BodyRowHelperText,{children:[(0,t.jsx)(eJ.default,{sx:{fontSize:18},style:{marginRight:4,position:"relative",top:3}}),"해당 이미지는 서류에서 근무자의 도장이 필요시 사용됩니다."]})]}),(0,t.jsx)(pp,{children:(0,t.jsxs)(pu,{children:[(0,t.jsx)(px,{$hasImage:h.trim().length>0,children:0===h.trim().length?(0,t.jsx)(O.default.Imagesmode,{size:34,color:"#d1d5db"}):(0,t.jsx)(pg,{src:h,alt:"도장 이미지 미리보기"})}),(0,t.jsx)(pm,{onClick:()=>{a.default.modal.organization.imageAdjustUpload.show("seal",h,{saveMode:"external",onProcessedImageDataUrl:e=>{p(e)}})},disabled:b,children:"업로드하기"})]})})]})]}),(0,t.jsxs)(fW.Footer,{children:[(0,t.jsx)(pb,{onClick:()=>{b||w()},disabled:b,children:"내용 삭제 후 새로 입력 (초기화)"}),(0,t.jsxs)(pj,{onClick:()=>{I()},disabled:b,children:[(0,t.jsx)(iq.default,{sx:{fontSize:20}}),"저장"]})]})]})})}let ps=(0,n.observer)(function(){return"ready"!==a.default.modal.organization.staffAccountAdd.status?null:(0,t.jsx)(pr,{})}),pc=(0,l.default)(r.default.Button.Outlined).withConfig({componentId:"zh__sc-2a48cfd9-0"})`
  ${fW.btnStyle}
`,pf=(0,l.default)(r.default.Input.Select).withConfig({componentId:"zh__sc-2a48cfd9-1"})`
  ${fW.inputStyle}
  width: 131px;
`,ph=(0,l.default)(r.default.Input.Text).withConfig({componentId:"zh__sc-2a48cfd9-2"})`
  ${fW.inputStyle}
  width: 100%;
`,pp=l.default.div.withConfig({componentId:"zh__sc-2a48cfd9-3"})`
  display: flex;
  gap: 12px;
  align-items: center;
`,pu=l.default.div.withConfig({componentId:"zh__sc-2a48cfd9-4"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
`,px=l.default.div.withConfig({componentId:"zh__sc-2a48cfd9-5"})`
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
`,pg=l.default.img.withConfig({componentId:"zh__sc-2a48cfd9-6"})`
  width: 100%;
  height: 100%;
  border-radius: 6px;
  object-fit: cover;
`,pm=(0,l.default)(r.default.Button.Outlined).withConfig({componentId:"zh__sc-2a48cfd9-7"})`
  ${fW.btnStyle}
  width: fit-content;
`,pb=(0,l.default)(r.default.Button.Outlined).withConfig({componentId:"zh__sc-2a48cfd9-8"})`
  ${fW.btnStyle}
`,pj=(0,l.default)(r.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-2a48cfd9-9"})`
  ${fW.btnStyle}
`;function pw(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(hh,{}),(0,t.jsx)(fZ,{}),(0,t.jsx)(hd,{}),(0,t.jsx)(ps,{}),(0,t.jsx)(h1,{})]})}let p_=(0,n.observer)(function(){let{serviceWorkerDraft:e,isSaving:n,resetToUploadStep:i,saveServiceWorkerDraft:l}=a.default.modal.serviceWorkerCreate,d=async()=>{await l()};return(0,t.jsxs)(py,{children:[(0,t.jsx)(pC,{disabled:!e||n,onClick:i,children:"다시 업로드하기"}),(0,t.jsxs)(pI,{disabled:!e||n,onClick:()=>void d(),children:[(0,t.jsx)(o.Check,{size:16}),"최종확인 및 저장"]})]})}),py=l.default.div.withConfig({componentId:"zh__sc-d659ae78-0"})`
  display: flex;
  gap: 16px;
  align-items: center;
  align-self: stretch;
  justify-content: flex-end;

  padding: 16px;
  border-top: 1px solid #e5e7eb;
`,pv=l.css`
  display: flex;
  gap: 10px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,pC=(0,l.default)(r.default.Button.Outlined).withConfig({componentId:"zh__sc-d659ae78-1"})`
  ${pv}
`,pI=(0,l.default)(r.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-d659ae78-2"})`
  ${pv}
`,pz=(0,n.observer)(function(){let e=a.default.modal.serviceWorkerCreate;return!0!==e.isDuplicateServiceWorkerDialogOpen?null:(0,t.jsx)(pT,{children:(0,t.jsxs)(pE,{children:[(0,t.jsxs)(pk,{children:[(0,t.jsx)(pS,{children:"같은 정보의 제공인력이 이미 등록되어 있어요."}),(0,t.jsxs)(pO,{children:["이름과 생년월일이 같은 제공인력이 이미 등록되어 있습니다.",(0,t.jsx)("br",{}),"동일한 제공인력이라면 기존 정보에서 계약을 수정하거나 추가해주세요.",(0,t.jsx)("br",{}),"다른 제공인력이라면, 수정 후 신규 등록을 계속할 수 있습니다."]})]}),(0,t.jsxs)(pA,{children:[(0,t.jsx)(p$,{type:"button",onClick:e.cancelDuplicateServiceWorkerRegistration,children:"등록 취소하기"}),(0,t.jsx)(pD,{type:"button",onClick:e.closeDuplicateServiceWorkerDialog,children:"신규 등록 수정하고 계속하기"})]})]})})}),pT=l.default.div.withConfig({componentId:"zh__sc-75646160-0"})`
  position: fixed;
  z-index: 3100;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgb(17 24 39 / 36%);
`,pE=l.default.div.withConfig({componentId:"zh__sc-75646160-1"})`
  display: inline-flex;
  flex-direction: column;
  gap: 48px;
  align-items: center;
  justify-content: center;

  padding: 32px 24px;
  border: 1px solid #e5e9ef;
  border-radius: 8px;

  background: #fff;
  box-shadow: 0 4px 4px 0 rgb(0 0 0 / 10%);
`,pk=l.default.div.withConfig({componentId:"zh__sc-75646160-2"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;
`,pS=l.default.h3.withConfig({componentId:"zh__sc-75646160-3"})`
  align-self: stretch;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #000;
`,pO=l.default.p.withConfig({componentId:"zh__sc-75646160-4"})`
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #000;
`,pA=l.default.div.withConfig({componentId:"zh__sc-75646160-5"})`
  display: flex;
  gap: 12px;
  align-self: stretch;
  justify-content: flex-end;
`,p$=(0,l.default)(r.default.Button.Outlined).withConfig({componentId:"zh__sc-75646160-6"})`
  display: flex;
  gap: 10px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,pD=(0,l.default)(r.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-75646160-7"})`
  display: flex;
  gap: 10px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,pL=(0,n.observer)(function(){let{analyzeSelectedFile:e,isAnalyzing:n,selectedFile:i}=a.default.modal.serviceWorkerCreate;return(0,t.jsx)(pR,{children:(0,t.jsxs)(pN,{disabled:null===i||n,onClick:()=>{e()},children:["분석 시작",(0,t.jsx)(z,{size:16})]})})}),pR=l.default.div.withConfig({componentId:"zh__sc-3f938d0e-0"})`
  display: flex;
  gap: 10px;
  align-self: stretch;
  justify-content: flex-end;
`,pN=(0,l.default)(r.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-3f938d0e-1"})`
  display: flex;
  flex-shrink: 0;
  gap: 10px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,{FILE_EXTENSION_WHITELIST_BY_GROUP:pP}=A.default.file,pF=(0,n.observer)(function(){var e;let n,{clearSelectedFile:i,selectedFile:l,isAnalyzing:d}=a.default.modal.serviceWorkerCreate;if(null===l)return null;let o=-1===(n=(e=l.name).lastIndexOf("."))?"":e.slice(n).toLowerCase();return(0,t.jsx)(pM,{children:(0,t.jsxs)(pB,{children:[(0,t.jsxs)(pU,{children:[(0,t.jsx)(pW,{children:pP.IMAGE.some(e=>e===o)?(0,t.jsx)(O.default.Photo,{size:17,color:"#FA8E43"}):pP.AUDIO.some(e=>e===o)?(0,t.jsx)(O.default.SpeechToText,{size:17,color:"#A855F7"}):pP.DOCUMENT.some(e=>e===o)?(0,t.jsx)(O.default.News,{size:17,color:"#2264E8"}):null}),(0,t.jsx)(pV,{children:(0,t.jsx)(pY,{children:l.name})})]}),(0,t.jsxs)(pH,{onClick:i,disabled:d,children:["삭제",(0,t.jsx)(S.X,{size:16})]})]},`${l.name}-${l.size}-${l.lastModified}`)})}),pM=l.default.div.withConfig({componentId:"zh__sc-9108dce9-0"})`
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
`,pB=l.default.div.withConfig({componentId:"zh__sc-9108dce9-1"})`
  display: flex;
  flex-shrink: 0;
  gap: 24px;
  align-items: center;

  padding: 12px 16px;
  border-radius: 8px;

  background: #f6f8fb;
`,pU=l.default.div.withConfig({componentId:"zh__sc-9108dce9-2"})`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`,pW=l.default.div.withConfig({componentId:"zh__sc-9108dce9-3"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;
  border-radius: 4px;

  background: #fff;
`,pV=l.default.div.withConfig({componentId:"zh__sc-9108dce9-4"})`
  display: flex;
  align-items: center;
  align-self: stretch;

  width: 196px;
  height: 40px;

  color: #0a0a0a;
`,pY=l.default.div.withConfig({componentId:"zh__sc-9108dce9-5"})`
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #0a0a0a;
`,pH=l.default.button.withConfig({componentId:"zh__sc-9108dce9-6"})`
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
`;function pG(){let[e,n]=(0,i.useState)(0);return(0,i.useEffect)(()=>{let e=performance.now(),t=0,i=l=>{n(Math.min(100*(1-Math.exp(-((l-e)/1e3*.05))),98)),t=window.requestAnimationFrame(i)};return t=window.requestAnimationFrame(i),()=>{window.cancelAnimationFrame(t)}},[]),(0,t.jsx)(pK,{children:(0,t.jsx)(pX,{$progress:e})})}let pK=l.default.div.withConfig({componentId:"zh__sc-4ad7a7ff-0"})`
  overflow: hidden;
  display: flex;

  width: 362px;
  height: ${8}px;
  border-radius: 99px;

  background: #e6e0ff;
  background-color: #e5e2ff;
`,pX=l.default.div.attrs(({$progress:e})=>({style:{transform:`scaleX(${e/100})`}})).withConfig({componentId:"zh__sc-4ad7a7ff-1"})`
  transform-origin: left center;
  width: 100%;
  height: 100%;
  background-color: #5635ff;
`,pq=(0,n.observer)(function({disabled:e=!1}){let{isWindowFileDragging:n}=a.default.ui.layout,{selectedFile:i,isError:l,isAnalyzing:d,abortAnalyze:o}=a.default.modal.serviceWorkerCreate;return(0,t.jsxs)(pJ,{children:[null===i&&!1===l&&(0,t.jsx)(pZ,{children:(0,t.jsx)(U.Upload,{size:26,color:e?"#9CA3AF":pQ[100]})}),(0,t.jsxs)(p0,{children:[(0,t.jsx)(p1,{$isError:l,$disabled:e,children:!0===l?"지원하지 않는 파일 형식입니다.":!0===n?"파일을 여기에 놓으면 업로드 됩니다.":!0===d?"업로드한 파일을 분석하고 있습니다.":"이곳에 파일을 끌어다 놓거나 (드래그 앤 드롭), 클릭하여 업로드하세요."}),(0,t.jsx)(p2,{$disabled:e,children:null!==i&&!1===d?"새 파일을 업로드하면 기존 파일이 교체됩니다.":"지원 파일 형식: 엑셀 파일"})]}),!0===d&&(0,t.jsx)(pG,{}),!0===d&&(0,t.jsx)(p6,{onClick:o,children:"중단하기"})]})}),{PRIMARY:pQ}=W.default.style.color,pJ=l.default.div.withConfig({componentId:"zh__sc-7f4896ee-0"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  align-self: stretch;
  justify-content: center;
`,pZ=l.default.div.withConfig({componentId:"zh__sc-7f4896ee-1"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;
`,p0=l.default.div.withConfig({componentId:"zh__sc-7f4896ee-2"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  align-self: stretch;
  justify-content: center;
`,p1=l.default.div.withConfig({componentId:"zh__sc-7f4896ee-3"})`
  font-size: 14px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 142.857% */
  color: ${({$isError:e,$disabled:t})=>t?"#9CA3AF":e?"#ff4d4f":"#4f39f6"};
  text-align: center;
`,p2=l.default.div.withConfig({componentId:"zh__sc-7f4896ee-4"})`
  font-size: 14px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 142.857% */
  color: ${({$disabled:e})=>e?"#9CA3AF":"#99a1af"};
`,p6=(0,l.default)(r.default.Button.Outlined).withConfig({componentId:"zh__sc-7f4896ee-5"})`
  display: flex;
  gap: 10px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,p4=(0,n.observer)(function({disabled:e=!1}){let{isWindowFileDragging:n}=a.default.ui.layout,{acceptFileTypes:l,setSelectedFile:d,selectedFile:o,isError:r}=a.default.modal.serviceWorkerCreate,s=(0,i.useRef)(null);return(0,v.default)(t=>{if(e||0===t.length)return;let n=t[0];void 0!==n&&d(n)}),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(p5,{ref:s,type:"file",accept:l,onChange:t=>{if(e)return;let n=Array.from(t.target.files??[]);if(0===n.length)return;let i=n[0];void 0!==i&&(d(i),t.target.value="")},disabled:e}),(0,t.jsxs)(p3,{$isWindowFileDragging:n,$disabled:e,onDragOver:t=>{if(t.preventDefault(),e)return},onDrop:t=>{if(t.preventDefault(),e)return;let n=Array.from(t.dataTransfer.files);if(0===n.length)return;let i=n[0];void 0!==i&&d(i)},onClick:t=>{!e&&t.target instanceof HTMLElement&&(t.target.closest("button")||s.current?.click())},$isError:r,children:[null!==o&&(0,t.jsx)(pF,{}),(0,t.jsx)(pq,{disabled:e}),(0,t.jsx)(pL,{})]})]})}),p5=l.default.input.withConfig({componentId:"zh__sc-37be1ed1-0"})`
  display: none;
`,p3=l.default.div.withConfig({componentId:"zh__sc-37be1ed1-1"})`
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
`,p9=(0,n.observer)(function(){return(0,t.jsx)(p8,{children:(0,t.jsx)(p4,{disabled:!0})})}),p8=l.default.div.withConfig({componentId:"zh__sc-f40ff2c5-0"})`
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
`,{FILE_EXTENSION_WHITELIST_BY_GROUP:p7}=A.default.file,ue=(0,n.observer)(function(){var e;let n,{analyzedFile:l}=a.default.modal.serviceWorkerCreate,{ref:d,fire:o}=ef();if((0,i.useEffect)(()=>{null!==l&&o()},[l,o]),null===l)return null;let r=-1===(n=(e=l.name).lastIndexOf("."))?"":e.slice(n).toLowerCase();return(0,t.jsxs)(ut,{ref:d,children:[(0,t.jsxs)(un,{children:[(0,t.jsxs)(ui,{children:[(0,t.jsx)(O.default.FindInPage,{size:18}),"AI 문서 인식 완료"]}),(0,t.jsxs)(ul,{children:["업로드된 서류들에서 정보를 성공적으로 추출했습니다. ",(0,t.jsx)("br",{}),"우측의 [제공인력 기본 정보]가 올바르게 연동되었는지 확인 후, [최종 확인] 버튼을 눌러주세요."]})]}),(0,t.jsxs)(ua,{children:[(0,t.jsxs)(ud,{children:[(0,t.jsx)(O.default.CheckCircle,{size:18}),"분석 완료된 첨부 서류 (1건)"]}),(0,t.jsx)(uo,{children:(0,t.jsxs)(ur,{children:[(0,t.jsxs)(us,{children:[(0,t.jsx)(uc,{children:p7.IMAGE.some(e=>e===r)?(0,t.jsx)(O.default.Photo,{size:17,color:"#FA8E43"}):p7.AUDIO.some(e=>e===r)?(0,t.jsx)(O.default.SpeechToText,{size:17,color:"#A855F7"}):p7.DOCUMENT.some(e=>e===r)?(0,t.jsx)(O.default.News,{size:17,color:"#2264E8"}):null}),(0,t.jsx)(uf,{children:(0,t.jsx)(uh,{children:l.name})})]}),(0,t.jsx)(up,{children:"추출 완료"})]},`${l.name}-${l.size}-${l.lastModified}`)})]})]})}),ut=l.default.div.withConfig({componentId:"zh__sc-635d6973-0"})`
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
`,un=l.default.div.withConfig({componentId:"zh__sc-635d6973-1"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  align-self: stretch;
`,ui=l.default.div.withConfig({componentId:"zh__sc-635d6973-2"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #0a0a0a;
`,ul=l.default.div.withConfig({componentId:"zh__sc-635d6973-3"})`
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
`,ua=l.default.div.withConfig({componentId:"zh__sc-635d6973-4"})`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  align-self: stretch;

  min-height: 0;
`,ud=l.default.div.withConfig({componentId:"zh__sc-635d6973-5"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #0a0a0a;
`,uo=l.default.div.withConfig({componentId:"zh__sc-635d6973-6"})`
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
`,ur=l.default.div.withConfig({componentId:"zh__sc-635d6973-7"})`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 355px;
  height: 64px;
  padding: 12px 16px;
  border-radius: 8px;

  background: #f6f8fb;
`,us=l.default.div.withConfig({componentId:"zh__sc-635d6973-8"})`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`,uc=l.default.div.withConfig({componentId:"zh__sc-635d6973-9"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;
  border-radius: 4px;

  background: #fff;
`,uf=l.default.div.withConfig({componentId:"zh__sc-635d6973-10"})`
  display: flex;
  align-items: center;
  align-self: stretch;

  width: 196px;
  height: 40px;

  color: #0a0a0a;
`,uh=l.default.div.withConfig({componentId:"zh__sc-635d6973-11"})`
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #0a0a0a;
`,up=l.default.div.withConfig({componentId:"zh__sc-635d6973-12"})`
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
`,uu=(0,n.observer)(function(){let{analyzedFile:e}=a.default.modal.serviceWorkerCreate;return(0,t.jsxs)(ux,{children:[null!==e&&(0,t.jsx)(ue,{}),(0,t.jsx)(p9,{})]})}),ux=l.default.div.withConfig({componentId:"zh__sc-9bac733d-0"})`
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
`;var ug=e.i(99696);let{BANK_NAME:um,SERVICE_WORKER_EMPLOYMENT_CONTRACT_CATEGORY:ub}=W.default.enums,uj="2026-09-04",uw=Object.keys(ub).filter(e=>e in ub).map(e=>({key:e,label:ub[e].label})),u_=Object.keys(ug.default).filter(function(e){return e in ug.default}),uy=Object.keys(hs.default).filter(uv);function uv(e){return e in hs.default}let uC=e=>{let t=e.trim().match(/^(\d{6})-?(\d)(\d{0,6})$/);if(null===t)return"unknown";switch(t[2]){case"1":case"3":return"MALE";case"2":case"4":return"FEMALE";default:return"unknown"}},uI=e=>{switch(e){case"MALE":return"남성";case"FEMALE":return"여성";case"unknown":return""}},uz=e=>e in um,uT=Object.keys(um).filter(uz)[0],uE=()=>{let e=new Date,[t,n]=eS.default.create(e.getFullYear(),e.getMonth()+1,e.getDate());return null!==t||null===n?null:n},uk=(0,n.observer)(function(){let{serviceWorkerDraft:e,analyzedServiceWorkerDraft:n,mode:l,updateServiceWorkerDraft:d,getServiceWorkerDraftFieldError:o,clearServiceWorkerDraftFieldError:s}=a.default.modal.serviceWorkerCreate,c=(0,i.useRef)(!1);if((0,i.useEffect)(()=>{if(null===e||c.current||(c.current=!0,""!==(e.firstRegisteredDate??"").trim()))return;let t=uE();null!==t&&d(e=>({...e,firstRegisteredDate:t}))},[e,d]),(0,i.useEffect)(()=>{let t=uy[0];null!==e&&void 0===e.serviceType&&void 0!==t&&d(e=>({...e,serviceType:t}))},[e,d]),null===e)return null;let f="renew"===l,h=e.serviceWorkerName??"",p=e.residentRegistrationNumber??"",u=e.firstRegisteredDate??"",x=e.contractStartDate??"",g=e.phoneNumber??"",m=e.contact??"",b=e.address??"",j=e.postCode??"",w=e.addressDetail??"",_=e.bankName??uT,y=e.accountNumber??"",v=e.accountHolder??"",C=e.employmentContractCategory??"GENERAL",I=e.serviceType,z=void 0===I?null:u_.find(e=>ug.BUSINESS_TYPE_SERVICE_TYPES[e].includes(I))??null,T=e.gender??uC(p),E=(e,t)=>""===o(e)?t:{...t,borderColor:"#ff4d4f",background:"#fff5f5"},k=e=>{let n=o(e);return""===n?null:(0,t.jsx)(uP,{children:n})},S=(e,t)=>{let n=String(t??"").trim();return""!==n&&String(e).trim()===n},O=uE(),A=""===(n?.firstRegisteredDate??"").trim()&&null!==O&&u===O,$=S(u,n?.firstRegisteredDate??"")||A;return(0,t.jsxs)(uO,{children:[(0,t.jsx)(uA,{children:"인적사항"}),(0,t.jsxs)(u$,{children:[(0,t.jsxs)(uL,{children:[(0,t.jsxs)(uR,{children:["성명",(0,t.jsx)(uS,{})]}),(0,t.jsx)(r.default.Input.Text,{disabled:f,placeholder:"성명을 입력하세요.",$autoFilled:S(h,n?.serviceWorkerName??""),style:E("serviceWorkerName",uB),value:h,onChange:e=>{s("serviceWorkerName"),d(t=>({...t,serviceWorkerName:e.target.value.trim()}))}}),k("serviceWorkerName")]}),(0,t.jsxs)(uL,{children:[(0,t.jsx)(uR,{children:"주민등록번호"}),(0,t.jsx)(r.default.Input.Text,{disabled:f,placeholder:"주민등록번호를 입력해주세요.",$autoFilled:S(p,n?.residentRegistrationNumber??""),style:E("residentRegistrationNumber",uB),value:p,onChange:e=>{var t;let n,i=e.target.value,l=e.currentTarget.selectionStart??i.length,a=(i.slice(0,l).match(/\d/g)??[]).length;s("residentRegistrationNumber");let o=eO.default.format(i);d(e=>({...e,residentRegistrationNumber:o})),t=e.currentTarget,n=((e,t)=>{if(t<=0)return 0;let n=0;for(let i=0;i<e.length;i+=1){let l=e[i];if(void 0!==l&&/\d/.test(l)&&(n+=1)===t)return i+1}return e.length})(o,a),"-"===o[n]&&(n+=1),requestAnimationFrame(()=>{document.activeElement===t&&t.setSelectionRange(n,n)})}}),k("residentRegistrationNumber")]}),(0,t.jsxs)(uL,{style:{flex:"none",width:266},children:[(0,t.jsx)(uR,{children:"성별"}),(0,t.jsx)(uF,{$autoFilled:S(uI(T),uI(uC(n?.residentRegistrationNumber??""))),style:uB,value:uI(T),placeholder:"주민등록번호와 연동되어 보여집니다.",readOnly:!0})]})]}),(0,t.jsxs)(u$,{children:[(0,t.jsxs)(uL,{children:[(0,t.jsxs)(uR,{children:["휴대전화번호",(0,t.jsx)(uS,{})]}),(0,t.jsx)(r.default.Input.Phone,{disabled:f,placeholder:"휴대전화번호를 입력해주세요.",$autoFilled:S(g,n?.phoneNumber??""),style:E("phoneNumber",uB),value:g,onChange:e=>{s("phoneNumber"),d(t=>({...t,phoneNumber:e}))}}),k("phoneNumber")]}),(0,t.jsxs)(uL,{children:[(0,t.jsx)(uR,{children:"자택전화번호"}),(0,t.jsx)(r.default.Input.Contact,{disabled:f,placeholder:"자택전화번호를 입력해주세요.",$autoFilled:S(m,n?.contact??""),style:E("contact",uB),value:m,onChange:e=>{s("contact"),d(t=>({...t,contact:e}))}}),k("contact")]})]}),(0,t.jsxs)(uD,{children:[(0,t.jsxs)(u$,{children:[(0,t.jsxs)(uL,{children:[(0,t.jsx)(uR,{children:"주소"}),(0,t.jsx)(r.default.Input.Text,{disabled:f,placeholder:"주소를 입력해주세요.",$autoFilled:S(b,n?.address??""),style:E("address",uB),value:b,onChange:e=>{s("address"),d(t=>({...t,address:e.target.value}))}}),k("address")]}),(0,t.jsxs)(uL,{style:{flex:"none",width:191},children:[(0,t.jsx)(uR,{children:"우편번호"}),(0,t.jsx)(r.default.Input.PostCode,{disabled:f,placeholder:"우편번호를 입력해주세요.",$autoFilled:S(j,n?.postCode??""),style:E("postCode",uB),value:j,onChange:e=>{s("postCode"),d(t=>({...t,postCode:e}))}}),k("postCode")]})]}),(0,t.jsx)(u$,{children:(0,t.jsxs)(uL,{children:[(0,t.jsx)(uR,{children:"상세주소"}),(0,t.jsx)(r.default.Input.Text,{disabled:f,placeholder:"상세주소를 입력해주세요.",$autoFilled:S(w,n?.addressDetail??""),style:E("addressDetail",uB),value:w,onChange:e=>{s("addressDetail"),d(t=>({...t,addressDetail:e.target.value}))}}),k("addressDetail")]})})]}),(0,t.jsxs)(u$,{children:[(0,t.jsxs)(uL,{style:{flex:"none",width:191},children:[(0,t.jsx)(uR,{children:"은행명"}),(0,t.jsx)(uM,{disabled:f,style:E("bankName",uB),value:_??"",onChange:e=>{let t=e.target.value;s("bankName"),d(e=>({...e,bankName:uz(t)?t:void 0}))},children:Object.entries(um).map(([e,n])=>(0,t.jsx)("option",{value:e,children:n.label},e))}),k("bankName")]}),(0,t.jsxs)(uL,{children:[(0,t.jsx)(uR,{children:"계좌번호"}),(0,t.jsx)(r.default.Input.Text,{disabled:f,placeholder:"계좌번호를 입력해주세요.",$autoFilled:S(y,n?.accountNumber??""),style:E("accountNumber",uB),value:y,onChange:e=>{s("accountNumber"),d(t=>({...t,accountNumber:e.target.value}))}}),k("accountNumber")]}),(0,t.jsxs)(uL,{children:[(0,t.jsx)(uR,{children:"예금주"}),(0,t.jsx)(r.default.Input.Text,{disabled:f,placeholder:"예금주를 입력해주세요.",$autoFilled:S(v,n?.accountHolder??""),style:E("accountHolder",uB),value:v,onChange:e=>{s("accountHolder"),d(t=>({...t,accountHolder:e.target.value}))}}),k("accountHolder")]})]}),(0,t.jsxs)(u$,{children:[(0,t.jsxs)(uL,{children:[(0,t.jsxs)(uR,{children:["접수일",(0,t.jsx)(uS,{})]}),(0,t.jsx)(r.default.Input.Date,{disabled:f,$autoFilled:$,style:E("firstRegisteredDate",{...uB,height:36}),value:u,onChange:e=>{(s("firstRegisteredDate"),""===e.trim())?d(e=>({...e,firstRegisteredDate:void 0})):eS.default.is(e)&&d(t=>({...t,firstRegisteredDate:e}))}}),k("firstRegisteredDate")]}),(0,t.jsxs)(uL,{children:[(0,t.jsx)(uR,{children:"계약 시작일"}),(0,t.jsx)(r.default.Input.Date,{value:x,style:{...uB,height:36},isDateSelectable:e=>e<=uj,onChange:e=>{(s("contractStartDate"),""===e.trim())?d(e=>({...e,contractStartDate:void 0})):eS.default.is(e)&&d(t=>({...t,contractStartDate:e}))}}),k("contractStartDate")]}),(0,t.jsxs)(uL,{children:[(0,t.jsx)(uR,{children:"사업 운영 종료일"}),(0,t.jsx)(r.default.Input.Date,{value:uj,style:{...uB,height:36},disabled:!0})]}),(0,t.jsxs)(uL,{children:[(0,t.jsx)(uR,{children:"계약상태"}),(0,t.jsx)(r.default.Input.Select,{style:uB,value:"default",disabled:!0,children:(0,t.jsx)("option",{value:"default",children:"계약중"})})]})]}),(0,t.jsxs)(u$,{children:[(0,t.jsxs)(uL,{children:[(0,t.jsxs)(uR,{children:["사업구분",(0,t.jsx)(uS,{})]}),(0,t.jsx)(r.default.Input.Select,{style:uB,value:z??"",disabled:!0,children:u_.map(e=>(0,t.jsx)("option",{value:e,children:"DAY_CARE"===e?`${ug.default[e].label}서비스`:ug.default[e].label},e))})]}),(0,t.jsxs)(uL,{children:[(0,t.jsxs)(uR,{children:["서비스명",(0,t.jsx)(uS,{})]}),(0,t.jsxs)(r.default.Input.Select,{style:uB,value:I??"",disabled:f,onChange:e=>{let t=e.target.value;uv(t)&&d(e=>({...e,serviceType:t}))},children:[(0,t.jsx)("option",{value:"",children:"서비스 타입을 선택하세요"}),uy.map(e=>(0,t.jsx)("option",{value:e,children:"MEAL"===e||"NUTRITION"===e?`${hs.default[e].label}관리 서비스`:hs.default[e].label},e))]})]}),(0,t.jsxs)(uL,{children:[(0,t.jsxs)(uR,{children:["사업코드",(0,t.jsx)(uS,{})]}),(0,t.jsx)(r.default.Input.Select,{style:uB,value:I??"",disabled:!0,children:void 0===I?null:(0,t.jsx)("option",{value:I,children:hs.default[I].code})})]})]}),(0,t.jsx)(u$,{children:(0,t.jsxs)(uL,{children:[(0,t.jsxs)(uR,{children:["인력 유형",(0,t.jsx)(uS,{})]}),(0,t.jsx)(uU,{children:uw.map(e=>(0,t.jsxs)(uW,{children:[(0,t.jsx)(uV,{disabled:f,name:"service-worker-employment-contract-category",checked:C===e.key,onChange:()=>{s("employmentContractCategory"),d(t=>({...t,employmentContractCategory:e.key}))}}),(0,t.jsx)(uY,{children:e.label})]},e.key))})]})})]})});function uS(){return(0,t.jsx)(uN,{children:" *"})}let uO=l.default.div.withConfig({componentId:"zh__sc-b1e5df68-0"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  align-self: stretch;
`,uA=l.default.div.withConfig({componentId:"zh__sc-b1e5df68-1"})`
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
  text-align: center;
`,u$=l.default.div.withConfig({componentId:"zh__sc-b1e5df68-2"})`
  display: flex;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;

  min-height: 59px;
`,uD=l.default.div.withConfig({componentId:"zh__sc-b1e5df68-3"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-self: stretch;
`,uL=l.default.div.withConfig({componentId:"zh__sc-b1e5df68-4"})`
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
`,uR=l.default.div.withConfig({componentId:"zh__sc-b1e5df68-5"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #000;
  text-align: center;
`,uN=l.default.span.withConfig({componentId:"zh__sc-b1e5df68-6"})`
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: normal;
  color: #e7000b;
`,uP=l.default.div.withConfig({componentId:"zh__sc-b1e5df68-7"})`
  font-size: 12px;
  line-height: 16px;
  color: #ff4d4f;
`,uF=(0,l.default)(r.default.Input.Text).withConfig({componentId:"zh__sc-b1e5df68-8"})`
  &::placeholder {
    color: #0a0a0a;
  }
`,uM=(0,l.default)(r.default.Input.Select).withConfig({componentId:"zh__sc-b1e5df68-9"})`
  width: 100%;
`,uB={display:"flex",padding:"4px 16px",alignItems:"center",gap:"10px",flex:"1 0 0",alignSelf:"stretch",fontSize:16,maxHeight:36},uU=l.default.div.withConfig({componentId:"zh__sc-b1e5df68-10"})`
  display: flex;
  gap: 24px;
  height: 36px;
`,uW=l.default.label.withConfig({componentId:"zh__sc-b1e5df68-11"})`
  cursor: pointer;
  display: flex;
  gap: 8px;
  align-items: center;
`,uV=(0,l.default)(r.default.Input.Radio).withConfig({componentId:"zh__sc-b1e5df68-12"})`
  width: 24px;
  height: 24px;
`,uY=l.default.div.withConfig({componentId:"zh__sc-b1e5df68-13"})`
  font-size: 16px;
  font-weight: 500;
  color: #000;
`,uH=Object.keys(e1.default).filter(function(e){return e in e1.default}),uG=Object.keys(e2.default).filter(function(e){return e in e2.default}),uK=["소지","미소지"],uX=(0,n.observer)(function(){let{serviceWorkerDraft:e,updateServiceWorkerDraft:n,getServiceWorkerDraftFieldError:i,clearServiceWorkerDraftFieldError:l}=a.default.modal.serviceWorkerCreate;if(null===e)return null;let d=e.availableTimes??[],o=e.regions??[],r=e.careTypes??[],s=e.hasVehicle,c=e.preferredWeeklyWorkingHours,f=(e,t)=>t.includes(e)?t.filter(t=>t!==e):[...t,e],h=i("availableTimes"),p=i("preferredWeeklyWorkingHours"),u=i("regions"),x=i("careTypes"),g=i("hasVehicle");return(0,t.jsxs)(uq,{children:[(0,t.jsxs)(uQ,{children:[(0,t.jsx)(uJ,{children:"근무 가능 시간"}),(0,t.jsxs)(uZ,{children:[(0,t.jsx)(eJ.default,{sx:{fontSize:20}}),(0,t.jsx)(u0,{children:"시간대를 추가하고, 추가한 시간대를 클릭하면 수정하거나 삭제할 수 있습니다."})]})]}),(0,t.jsx)(u1,{value:d,onChange:e=>{let t=e.target.value;l("availableTimes"),n(e=>({...e,availableTimes:t}))}}),""!==h&&(0,t.jsx)(xn,{children:h}),(0,t.jsxs)(u2,{children:[(0,t.jsx)(u6,{children:"희망 근로 시간"}),(0,t.jsxs)(u4,{children:[(0,t.jsx)(u3,{children:"총"}),(0,t.jsx)(u5,{value:void 0===c?"":String(c),placeholder:"00",maxLength:2,style:""===p?void 0:{borderColor:"#ff4d4f",background:"#fff5f5"},onChange:e=>{let t=e.target.value.replace(/\D/g,"");if(""===t){l("preferredWeeklyWorkingHours"),n(e=>({...e,preferredWeeklyWorkingHours:void 0}));return}let i=Math.min(Number(t),99);l("preferredWeeklyWorkingHours"),n(e=>({...e,preferredWeeklyWorkingHours:i}))}}),(0,t.jsx)(u3,{children:"시간"})]})]}),""!==p&&(0,t.jsx)(xn,{children:p}),(0,t.jsxs)(u9,{children:[(0,t.jsx)(u8,{children:"서비스 가능 지역 (복수 선택 가능)"}),(0,t.jsx)(u7,{children:uH.map(e=>(0,t.jsxs)(xe,{children:[(0,t.jsx)(xi,{checked:o.includes(e),onChange:()=>{let t=f(e,o);l("regions"),n(e=>({...e,regions:t}))}}),(0,t.jsx)(xt,{children:e1.default[e].label})]},e))}),""!==u&&(0,t.jsx)(xn,{children:u})]}),(0,t.jsxs)(u9,{children:[(0,t.jsx)(u8,{children:"가능한 근무 내용 (복수 선택 가능)"}),(0,t.jsx)(u7,{children:uG.map(e=>(0,t.jsxs)(xe,{children:[(0,t.jsx)(xi,{checked:r.includes(e),onChange:()=>{let t=f(e,r);l("careTypes"),n(e=>({...e,careTypes:t}))}}),(0,t.jsx)(xt,{children:e2.default[e].label})]},e))}),""!==x&&(0,t.jsx)(xn,{children:x})]}),(0,t.jsxs)(u9,{children:[(0,t.jsx)(u8,{children:"차량 소지"}),(0,t.jsx)(u7,{children:uK.map(e=>(0,t.jsxs)(xe,{children:[(0,t.jsx)(xl,{name:"service-worker-car-ownership",checked:s===("소지"===e),onChange:()=>{l("hasVehicle"),n(t=>({...t,hasVehicle:"소지"===e}))}}),(0,t.jsx)(xt,{children:e})]},e))}),""!==g&&(0,t.jsx)(xn,{children:g})]})]})}),uq=l.default.div.withConfig({componentId:"zh__sc-1335978d-0"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  align-self: stretch;
`,uQ=l.default.div.withConfig({componentId:"zh__sc-1335978d-1"})`
  display: flex;
  gap: 16px;
  align-items: center;
  align-self: stretch;

  height: 30px;
`,uJ=l.default.div.withConfig({componentId:"zh__sc-1335978d-2"})`
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
  text-align: center;
`,uZ=l.default.div.withConfig({componentId:"zh__sc-1335978d-3"})`
  display: flex;
  flex: 1 0 0;
  gap: 4px;
  align-items: center;

  color: #464c53;
`,u0=l.default.div.withConfig({componentId:"zh__sc-1335978d-4"})`
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px; /* 125% */
`,u1=(0,l.default)(r.default.Input.TimeSlider).withConfig({componentId:"zh__sc-1335978d-5"})`
  align-self: stretch;
`,u2=l.default.div.withConfig({componentId:"zh__sc-1335978d-6"})`
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
  align-self: stretch;
`,u6=l.default.div.withConfig({componentId:"zh__sc-1335978d-7"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #000;
  text-align: center;
`,u4=l.default.div.withConfig({componentId:"zh__sc-1335978d-8"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,u5=(0,l.default)(r.default.Input.Text).withConfig({componentId:"zh__sc-1335978d-9"})`
  width: 59px;
  height: 36px;
  text-align: center;
`,u3=l.default.div.withConfig({componentId:"zh__sc-1335978d-10"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #000;
  text-align: center;
`,u9=l.default.div.withConfig({componentId:"zh__sc-1335978d-11"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
  align-self: stretch;
`,u8=l.default.div.withConfig({componentId:"zh__sc-1335978d-12"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #000;
  text-align: center;
`,u7=l.default.div.withConfig({componentId:"zh__sc-1335978d-13"})`
  display: flex;
  flex-wrap: wrap;
  gap: 0 24px;
  align-items: center;
`,xe=l.default.label.withConfig({componentId:"zh__sc-1335978d-14"})`
  display: inline-flex;
  gap: 8px;
  align-items: center;
  height: 36px;
`,xt=l.default.span.withConfig({componentId:"zh__sc-1335978d-15"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #000;
  text-align: center;
`,xn=l.default.div.withConfig({componentId:"zh__sc-1335978d-16"})`
  font-size: 12px;
  line-height: 16px;
  color: #ff4d4f;
`,xi=(0,l.default)(r.default.Input.Check).attrs({$iconSizeRatio:1.5}).withConfig({componentId:"zh__sc-1335978d-17"})`
  width: 24px;
  height: 24px;
`,xl=(0,l.default)(r.default.Input.Radio).withConfig({componentId:"zh__sc-1335978d-18"})`
  width: 20px;
  height: 20px;
`,xa=(0,n.observer)(function(){return(0,t.jsxs)(xd,{children:[(0,t.jsx)(xo,{children:"제공인력 기본 정보"}),(0,t.jsx)(uk,{}),(0,t.jsx)(xr,{}),(0,t.jsx)(uX,{})]})}),xd=l.default.div.withConfig({componentId:"zh__sc-7b7809b5-0"})`
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
`,xo=l.default.div.withConfig({componentId:"zh__sc-7b7809b5-1"})`
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
  text-align: center;
`,xr=l.default.div.withConfig({componentId:"zh__sc-7b7809b5-2"})`
  flex-shrink: 0;

  width: 100%;
  height: 1px;
  min-height: 1px;

  background: #e5e7eb;
`,xs=(0,n.observer)(function(){let{serviceWorkerDraft:e}=a.default.modal.serviceWorkerCreate;return(0,t.jsxs)(xc,{children:[(0,t.jsx)(uu,{}),e&&(0,t.jsx)(xa,{})]})}),xc=l.default.div.withConfig({componentId:"zh__sc-e5134819-0"})`
  overflow-y: auto;
  display: flex;
  align-self: stretch;
  justify-content: center;

  min-height: 830px;
  max-height: 830px;

  background: #f9fafb;
`;function xf(){let{close:e,mode:n}=a.default.modal.serviceWorkerCreate;return(0,t.jsxs)(xh,{children:[(0,t.jsx)(xp,{children:"renew"===n?"제공인력 재계약하기":"신규 제공인력 등록하기"}),(0,t.jsxs)(xu,{onClick:e,children:[(0,t.jsx)(S.X,{size:16}),"닫기"]})]})}let xh=l.default.div.withConfig({componentId:"zh__sc-e97a276c-0"})`
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
`,xp=l.default.div.withConfig({componentId:"zh__sc-e97a276c-1"})`
  font-size: 18px;
  font-weight: 700;
  font-style: normal;
  line-height: 28px; /* 155.556% */
  color: #101828;
  letter-spacing: -0.439px;
`,xu=(0,l.default)(r.default.Button.Outlined).withConfig({componentId:"zh__sc-e97a276c-2"})`
  display: flex;
  gap: 6px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,xx=(0,n.observer)(function(){let e=a.default.modal.serviceWorkerCreate,{status:n}=e,l=(0,i.useRef)(null);return((0,i.useEffect)(()=>"ready"!==n?void e.setToastContainer(null):(e.setToastContainer(l.current),()=>{e.setToastContainer(null)}),[e,n]),"ready"!==n)?null:(0,t.jsx)(d.default,{children:(0,t.jsxs)(xg,{ref:l,children:[(0,t.jsx)(xf,{}),(0,t.jsx)(xs,{}),(0,t.jsx)(p_,{}),(0,t.jsx)(pz,{})]})})}),xg=l.default.div.withConfig({componentId:"zh__sc-cb4ab18d-0"})`
  position: relative;

  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  align-items: center;

  width: 1712px;
  min-width: 1712px;
  border-radius: 8px;

  background: #fff;
`,xm=(0,nd.default)((0,t.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"}),"Search");var xb=e.i(44534);let xj=(0,n.observer)(function({onClose:e,onSelectClient:n,serviceWorkerId:l,serviceType:d}){let[o,s]=(0,i.useState)(""),c=a.default.data.serviceWorker.availableClientList;(0,i.useEffect)(()=>null===d?void c.reset():(c.setQuery({serviceWorkerId:l,serviceType:d}),()=>c.reset()),[c,d,l]);let f=(0,i.useMemo)(()=>c.data?.map(e=>({...e,_searchableName:xb.default.create(e.client.name)}))??[],[c.data]).filter(({_searchableName:e})=>xb.default.isMatch(e,o));return(0,t.jsx)(xw,{children:(0,t.jsxs)(x_,{onClick:e=>e.stopPropagation(),children:[(0,t.jsxs)(xy,{children:[(0,t.jsx)(xv,{}),(0,t.jsx)(xC,{children:"연결할 이용자 선택하기"}),(0,t.jsx)(r.default.Button.Outlined,{type:"button",style:{width:56,height:36},onClick:e,children:(0,t.jsx)(ns.default,{sx:{fontSize:20}})})]}),(0,t.jsx)(xI,{}),(0,t.jsx)(xz,{children:(0,t.jsxs)(xT,{children:[(0,t.jsx)(xm,{sx:{fontSize:22},style:{position:"absolute",left:16,top:"50%",transform:"translateY(-50%)",color:"#9CA3AF"}}),(0,t.jsx)(xE,{placeholder:"이용자 이름을 검색하세요.",value:o,onChange:e=>s(e.target.value)})]})}),(0,t.jsxs)(xS,{children:["loading"===c.status?(0,t.jsx)(xk,{children:"이용자를 불러오는 중..."}):null,"error"===c.status?(0,t.jsx)(xk,{children:"이용자 목록을 불러오지 못했습니다."}):null,"success"===c.status&&0===f.length?(0,t.jsx)(xk,{children:"연결할 수 있는 이용자가 없습니다."}):null,f.map(({client:e,latestContractId:i})=>(0,t.jsxs)(xO,{children:[(0,t.jsxs)(xA,{children:[(0,t.jsx)(x$,{children:e.name}),(0,t.jsx)(xD,{children:(0,t.jsxs)(xL,{children:[(0,t.jsx)(xR,{children:"주소"}),(0,t.jsx)(xN,{}),(0,t.jsx)(xP,{$variant:"gray",children:e.address??"-"})]})})]}),(0,t.jsx)(xF,{children:(0,t.jsxs)(xM,{type:"button",disabled:null===i,onClick:()=>{null!==i&&n?.(i)},children:["선택",(0,t.jsx)(oh.default,{sx:{fontSize:18}})]})})]},e.id))]})]})})}),xw=l.default.div.withConfig({componentId:"zh__sc-636b69a3-0"})`
  position: absolute;
  z-index: 1000;
  inset: 0;

  display: flex;
  justify-content: flex-end;

  padding-top: 69px;
`,x_=l.default.div.withConfig({componentId:"zh__sc-636b69a3-1"})`
  display: flex;
  flex-direction: column;

  width: min(417px, 100%);
  height: 100%;

  background: #fff;
  box-shadow: -2px 9px 16px rgb(0 0 0 / 16%);
`,xy=l.default.div.withConfig({componentId:"zh__sc-636b69a3-2"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
`,xv=l.default.div.withConfig({componentId:"zh__sc-636b69a3-3"})`
  flex-shrink: 0;
  width: 36px;
  height: 36px;
`,xC=l.default.div.withConfig({componentId:"zh__sc-636b69a3-4"})`
  flex: 1;

  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  color: #101828;
  text-align: center;
`,xI=l.default.div.withConfig({componentId:"zh__sc-636b69a3-5"})`
  height: 1px;
  background: #e5e7eb;
`,xz=l.default.div.withConfig({componentId:"zh__sc-636b69a3-6"})`
  padding: 16px;
`,xT=l.default.div.withConfig({componentId:"zh__sc-636b69a3-7"})`
  position: relative;
`,xE=(0,l.default)(r.default.Input.Text).withConfig({componentId:"zh__sc-636b69a3-8"})`
  width: 100%;
  height: 36px;
  padding-left: 48px;
`,xk=l.default.div.withConfig({componentId:"zh__sc-636b69a3-9"})`
  padding: 24px 0;
  font-size: 14px;
  color: #667085;
  text-align: center;
`,xS=l.default.div.withConfig({componentId:"zh__sc-636b69a3-10"})`
  overflow-y: auto;
  flex: 1;
  gap: 12px;

  padding: 16px;

  background: #f9fafb;
`,xO=l.default.div.withConfig({componentId:"zh__sc-636b69a3-11"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;

  height: 148px;
  padding: 16px;
  border: 1px solid #e5e9ef;
  border-radius: 8px;

  background: #fff;
`,xA=l.default.div.withConfig({componentId:"zh__sc-636b69a3-12"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;
`,x$=l.default.div.withConfig({componentId:"zh__sc-636b69a3-13"})`
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
`,xD=l.default.div.withConfig({componentId:"zh__sc-636b69a3-14"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
  align-self: stretch;
`,xL=l.default.div.withConfig({componentId:"zh__sc-636b69a3-15"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;
`,xR=l.default.div.withConfig({componentId:"zh__sc-636b69a3-16"})`
  font-size: 14px;
  font-weight: 400;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
  text-align: center;
`,xN=l.default.div.withConfig({componentId:"zh__sc-636b69a3-17"})`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;

  width: 1px;
  height: 20px;

  background: #e5e7eb;
`,xP=l.default.div.withConfig({componentId:"zh__sc-636b69a3-18"})`
  font-size: 14px;
  font-weight: 400;
  font-style: normal;
  line-height: normal;
  color: ${({$variant:e})=>"gray"===e?"#45464E":"#0a0a0a"};
`,xF=l.default.div.withConfig({componentId:"zh__sc-636b69a3-19"})`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-end;
  align-self: stretch;
  justify-content: center;
`,xM=l.default.button.withConfig({componentId:"zh__sc-636b69a3-20"})`
  cursor: pointer;

  display: flex;
  align-items: center;

  padding: 4px 0;
  border: 0;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 16px; /* 100% */
  color: #4f39f6;
  letter-spacing: -1px;

  background: transparent;

  &:disabled {
    cursor: not-allowed;
    color: #98a2b3;
  }
`,xB=(0,n.observer)(function(){let[e,n]=(0,i.useState)(!1),[l,d]=(0,i.useState)(!1),[o,r]=(0,i.useState)({}),s=a.default.data.serviceWorker.detail.data?.assignedContracts,c=s??[];(0,i.useEffect)(()=>{let e=!0;return Promise.all((s??[]).map(async({contractId:e})=>{let[t,n]=await lT.default.data.contract.get({id:e});return null===t?[e,n]:null})).then(t=>{e&&r(Object.fromEntries(t.filter(e=>null!==e)))}),()=>{e=!1}},[s]);let f=async e=>{let t=a.default.modal.serviceWorkerDetail.serviceWorkerId;if(null===t||l)return;d(!0);let[i]=await lT.default.data.contract.update({id:e,payload:{serviceWorkerId:t}});if(d(!1),null!==i)return void a.default.ui.layout.toast.error("이용자 연결에 실패했습니다. 잠시 후 다시 시도해 주세요.");let o=a.default.data.serviceWorker.detail;null!==o.query&&await o.refetch(),n(!1),a.default.ui.layout.toast.success("이용자를 연결했습니다.")};return(0,t.jsxs)(xU,{children:[(0,t.jsxs)(xY,{children:[(0,t.jsx)(xH,{children:"연결된 이용자 정보"}),(0,t.jsxs)(xG,{children:[(0,t.jsxs)(xK,{type:"button",disabled:!0,children:[(0,t.jsx)(nf.default,{sx:{fontSize:20}}),"수정하기"]}),(0,t.jsxs)(xK,{type:"button",onClick:()=>n(!0),children:[(0,t.jsx)(no,{sx:{fontSize:20}}),"추가하기"]})]})]}),0===c.length?(0,t.jsxs)(xX,{children:[(0,t.jsx)(nh.default,{sx:{fontSize:24,color:"#494F53"}}),(0,t.jsxs)(x5,{children:[(0,t.jsx)(x3,{children:"연결된 이용자가 없습니다."}),(0,t.jsx)(x9,{children:"[+추가하기] 버튼을 클릭해 이용자를 연결해주세요."})]})]}):(0,t.jsx)(xq,{children:c.map(({contractId:e,clientName:n,clientBirthDate:i})=>{let l=o[e];return(0,t.jsxs)(xQ,{children:[(0,t.jsx)(xJ,{children:n}),(0,t.jsxs)(xZ,{children:[(0,t.jsxs)(x0,{children:[(0,t.jsx)(x1,{children:"생년월일"}),(0,t.jsx)(x2,{}),(0,t.jsx)(x4,{children:xV(i)})]}),(0,t.jsxs)(x0,{children:[(0,t.jsx)(x1,{children:"시작일자"}),(0,t.jsx)(x2,{}),(0,t.jsx)(x6,{children:xW(l?.contractStartDate)})]}),(0,t.jsxs)(x0,{children:[(0,t.jsx)(x1,{children:"종료일자"}),(0,t.jsx)(x2,{}),(0,t.jsx)(x6,{children:xW(l?.contractEndDate)})]})]})]},e)})}),e&&null!==a.default.modal.serviceWorkerDetail.serviceWorkerId?(0,t.jsx)(xj,{onClose:()=>n(!1),onSelectClient:e=>void f(e),serviceWorkerId:a.default.modal.serviceWorkerDetail.serviceWorkerId,serviceType:a.default.modal.serviceWorkerDetail.selectedEmploymentContract?.serviceType??null}):null]})}),xU=l.default.section.withConfig({componentId:"zh__sc-e43c7362-0"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;

  width: 100%;
`,xW=e=>e?.replaceAll("-","")??"-",xV=e=>{let t=xW(e);return 8===t.length?t.slice(2):t},xY=l.default.div.withConfig({componentId:"zh__sc-e43c7362-1"})`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;

  width: 100%;
  min-height: 40px;
`,xH=l.default.h3.withConfig({componentId:"zh__sc-e43c7362-2"})`
  font-size: 18px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px;
  color: #101828;
`,xG=l.default.div.withConfig({componentId:"zh__sc-e43c7362-3"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,xK=(0,l.default)(r.default.Button.Outlined).withConfig({componentId:"zh__sc-e43c7362-4"})`
  display: flex;
  gap: 4px;
  align-items: center;

  height: 40px;
  padding: 8px 16px;
`,xX=l.default.div.withConfig({componentId:"zh__sc-e43c7362-5"})`
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
`,xq=l.default.div.withConfig({componentId:"zh__sc-e43c7362-6"})`
  overflow: auto hidden;
  display: flex;
  flex-wrap: nowrap;
  gap: 10px;

  width: 100%;
`,xQ=l.default.div.withConfig({componentId:"zh__sc-e43c7362-7"})`
  display: flex;
  flex: 0 0 319px;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;

  height: 186px;
  padding: 16px;
  border: 1px solid #5635ff;
  border-radius: 8px;

  background: #f7f5ff;
  box-shadow: 0 0 3px #ddd8ff;
`,xJ=l.default.div.withConfig({componentId:"zh__sc-e43c7362-8"})`
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
  color: #0a0a0a;
`,xZ=l.default.div.withConfig({componentId:"zh__sc-e43c7362-9"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
`,x0=l.default.div.withConfig({componentId:"zh__sc-e43c7362-10"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,x1=l.default.div.withConfig({componentId:"zh__sc-e43c7362-11"})`
  width: 52px;
  font-size: 14px;
  line-height: normal;
  color: #0a0a0a;
`,x2=l.default.div.withConfig({componentId:"zh__sc-e43c7362-12"})`
  width: 1px;
  height: 20px;
  background: #e5e7eb;
`,x6=l.default.div.withConfig({componentId:"zh__sc-e43c7362-13"})`
  font-size: 14px;
  line-height: normal;
  color: #0a0a0a;
`,x4=(0,l.default)(x6).withConfig({componentId:"zh__sc-e43c7362-14"})`
  color: #45464e;
`,x5=l.default.div.withConfig({componentId:"zh__sc-e43c7362-15"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: center;
`,x3=l.default.div.withConfig({componentId:"zh__sc-e43c7362-16"})`
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  color: #494f53;
`,x9=l.default.div.withConfig({componentId:"zh__sc-e43c7362-17"})`
  font-size: 16px;
  line-height: 20px;
  color: #494f53;
  text-align: center;
`,x8={residentRegistrationNumberText:"",genderText:"",mobileText:"",contactText:"",addressBaseText:"",addressDetailText:"",postCodeText:""},x7={mobileText:"",contactText:"",postCodeText:""},ge=(0,n.observer)(function(){let e=a.default.modal.serviceWorkerDetail,n=a.default.modal.serviceWorkerDetail.serviceWorker,l=null===n?x8:{residentRegistrationNumberText:n.residentRegistrationNumber??"",genderText:null===n.gender?"":e0.default[n.gender].label,mobileText:n.phoneNumber??"",contactText:n.contact??"",addressBaseText:n.address??"",addressDetailText:n.addressDetail??"",postCodeText:n.postCode??""},d=(0,i.useRef)(null),[o,r]=(0,i.useState)(!1),[s,c]=(0,i.useState)(!1),[f,h]=(0,i.useState)(x8),[p,u]=(0,i.useState)(x7),x=o?f:l,g=(e,t)=>{h(n=>({...n,[e]:t})),("mobileText"===e||"contactText"===e||"postCodeText"===e)&&u(t=>({...t,[e]:""}))},m=(0,i.useCallback)(()=>{s||(h(l),u(x7),r(!1))},[s,l]);if((0,i.useEffect)(()=>{if(!o||s)return;let e=e=>{let t=e.target;t instanceof Node&&null!==d.current&&d.current.contains(t)||m()};return document.addEventListener("pointerdown",e),()=>{document.removeEventListener("pointerdown",e)}},[m,o,s]),null===n)return null;let b=async()=>{let t,i,d,o,p,x,g;if(s)return;let m=(t={},i={},(d=f.mobileText.trim())!==l.mobileText.trim()&&(i.phoneNumber=d),(o=f.contactText.trim())!==l.contactText.trim()&&(i.contact=o),(p=f.postCodeText.trim())!==l.postCodeText.trim()&&(i.postCode=p),Object.assign(t,i),(x=f.addressBaseText.trim())!==l.addressBaseText.trim()&&(t.address=x),(g=f.addressDetailText.trim())!==l.addressDetailText.trim()&&(t.addressDetail=g),t);if(!(Object.keys(m).length>0)){h(l),u(x7),r(!1);return}let b=((e,t)=>{let n={...x7},i=e.mobileText.trim()!==t.mobileText.trim(),l=e.contactText.trim()!==t.contactText.trim(),a=e.postCodeText.trim()!==t.postCodeText.trim();if(i){let t=e.mobileText.trim();""===t||hc.default.brand.phoneNumber.is(t)||(n.mobileText="유효한 휴대폰 형식이 아닙니다.")}if(l){let t=e.contactText.trim();""===t||hc.default.brand.contactNumber.is(t)||(n.contactText="유효한 연락처 형식이 아닙니다.")}if(a){let t=e.postCodeText.trim();if(""!==t){let[e]=hc.default.brand.postCode.sanitize(t);null!==e&&(n.postCodeText="유효한 우편번호 형식이 아닙니다.")}}return n})(f,l);if(""!==b.mobileText||""!==b.contactText||""!==b.postCodeText)return void u(b);u(x7),c(!0);let[j]=await lT.default.data.serviceWorker.patch({id:n.id,payload:m});if(c(!1),null!==j)return;e.markListRefreshNeeded(),h(l),r(!1);let w=a.default.data.serviceWorker.detail;null!==w.query&&w.refetch()};return(0,t.jsxs)(gt,{ref:d,children:[(0,t.jsxs)(gn,{children:[(0,t.jsx)(gi,{children:"인적사항"}),o?(0,t.jsxs)(gl,{children:[(0,t.jsxs)(ga,{type:"button",onClick:m,disabled:s,children:[(0,t.jsx)(ih.default,{sx:{fontSize:20}}),"수정 취소"]}),(0,t.jsxs)(ga,{type:"button",onClick:()=>void b(),disabled:s,children:[(0,t.jsx)(iq.default,{sx:{fontSize:20}}),"수정 저장"]})]}):(0,t.jsxs)(ga,{type:"button",onClick:()=>{h(l),r(!0)},children:[(0,t.jsx)(nf.default,{sx:{fontSize:20}}),"수정하기"]})]}),(0,t.jsxs)(gd,{children:[(0,t.jsxs)(go,{$columns:4,children:[(0,t.jsxs)(gr,{children:["주민등록번호",(0,t.jsx)(gc,{value:x.residentRegistrationNumberText,readOnly:!0})]}),(0,t.jsxs)(gr,{children:["성별",(0,t.jsx)(gc,{value:x.genderText,readOnly:!0})]}),(0,t.jsxs)(gr,{children:["휴대폰",(0,t.jsx)(gf,{value:x.mobileText,style:""!==p.mobileText?gu:void 0,readOnly:!o,onChange:e=>g("mobileText",e)}),""!==p.mobileText?(0,t.jsx)(gs,{children:p.mobileText}):null]}),(0,t.jsxs)(gr,{children:["연락처",(0,t.jsx)(gh,{value:x.contactText,style:""!==p.contactText?gu:void 0,readOnly:!o,onChange:e=>g("contactText",e)}),""!==p.contactText?(0,t.jsx)(gs,{children:p.contactText}):null]})]}),(0,t.jsxs)(go,{$columns:3,children:[(0,t.jsxs)(gr,{children:["주소",(0,t.jsx)(gc,{value:x.addressBaseText,readOnly:!o,onChange:e=>g("addressBaseText",e.target.value)})]}),(0,t.jsxs)(gr,{children:["상세주소",(0,t.jsx)(gc,{value:x.addressDetailText,readOnly:!o,onChange:e=>g("addressDetailText",e.target.value)})]}),(0,t.jsxs)(gr,{children:["우편번호",(0,t.jsx)(gp,{value:x.postCodeText,style:""!==p.postCodeText?gu:void 0,readOnly:!o,onChange:e=>g("postCodeText",e)}),""!==p.postCodeText?(0,t.jsx)(gs,{children:p.postCodeText}):null]})]})]})]})}),gt=l.default.section.withConfig({componentId:"zh__sc-319b784e-0"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;

  width: 100%;
`,gn=l.default.div.withConfig({componentId:"zh__sc-319b784e-1"})`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;

  width: 100%;
  min-height: 40px;
`,gi=l.default.h3.withConfig({componentId:"zh__sc-319b784e-2"})`
  font-size: 18px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 111.111% */
  color: #101828;
`,gl=l.default.div.withConfig({componentId:"zh__sc-319b784e-3"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,ga=(0,l.default)(r.default.Button.Outlined).withConfig({componentId:"zh__sc-319b784e-4"})`
  display: flex;
  gap: 4px;
  align-items: center;

  height: 40px;
  padding: 8px 16px;
`,gd=l.default.div.withConfig({componentId:"zh__sc-319b784e-5"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-self: stretch;

  width: 100%;
`,go=l.default.div.withConfig({componentId:"zh__sc-319b784e-6"})`
  display: grid;
  grid-template-columns: ${({$columns:e})=>4===e?"repeat(4, minmax(0, 1fr))":"repeat(3, minmax(0, 1fr))"};
  gap: 12px;
  width: 100%;
`,gr=l.default.label.withConfig({componentId:"zh__sc-319b784e-7"})`
  display: flex;
  flex-direction: column;
  gap: 4px;

  min-width: 0;

  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: #000;
`,gs=l.default.div.withConfig({componentId:"zh__sc-319b784e-8"})`
  margin-top: 2px;
  font-size: 12px;
  line-height: 16px;
  color: #ff4d4f;
`,gc=(0,l.default)(r.default.Input.Text).withConfig({componentId:"zh__sc-319b784e-9"})`
  height: 36px;
  padding: 0 16px;
  font-size: 16px;
  line-height: 20px;
`,gf=(0,l.default)(r.default.Input.Phone).withConfig({componentId:"zh__sc-319b784e-10"})`
  height: 36px;
  padding: 0 16px;
  font-size: 16px;
  line-height: 20px;
`,gh=(0,l.default)(r.default.Input.Contact).withConfig({componentId:"zh__sc-319b784e-11"})`
  height: 36px;
  padding: 0 16px;
  font-size: 16px;
  line-height: 20px;
`,gp=(0,l.default)(r.default.Input.PostCode).withConfig({componentId:"zh__sc-319b784e-12"})`
  height: 36px;
  padding: 0 16px;
  font-size: 16px;
  line-height: 20px;
`,gu={borderColor:"#ff4d4f",background:"#fff5f5"},gx={availableTimes:[],preferredWeeklyWorkingHours:null,regions:[],careTypes:[],hasVehicle:null},gg=Object.keys(e1.default).filter(function(e){return e in e1.default}),gm=Object.keys(e2.default).filter(function(e){return e in e2.default}),gb=[{label:"소지",value:!0},{label:"미소지",value:!1}],gj=e=>[...new Set(e)].sort(),gw=e=>`${e.dayOfWeek}-${e.hour}`,g_=(e,t)=>{let n=gj(e),i=gj(t);return n.length===i.length&&n.every((e,t)=>e===i[t])},gy=(0,n.observer)(function(){let e=a.default.modal.serviceWorkerDetail,n=a.default.modal.serviceWorkerDetail.serviceWorker,l=null===n?gx:{availableTimes:n.availableTimes,preferredWeeklyWorkingHours:n.preferredWeeklyWorkingHours??null,regions:n.regions,careTypes:n.careTypes,hasVehicle:n.hasVehicle??null},d=(0,i.useRef)(null),[o,r]=(0,i.useState)(!1),[s,c]=(0,i.useState)(!1),[f,h]=(0,i.useState)(gx),p=o?f:l,u=(0,i.useCallback)(()=>{s||(h(l),r(!1))},[s,l]);if((0,i.useEffect)(()=>{if(!o||s)return;let e=e=>{let t=e.target;t instanceof Node&&null!==d.current&&d.current.contains(t)||u()};return document.addEventListener("pointerdown",e),()=>{document.removeEventListener("pointerdown",e)}},[u,o,s]),null===n)return null;let x=(e,t)=>o?t.includes(e)?t.filter(t=>t!==e):[...t,e]:t,g=async()=>{var t;let i;if(s)return;let d=(t=e.selectedEmploymentContract?.serviceType??null,i={},null===t||((e,t)=>{if(e.length!==t.length)return!1;let n=e.map(gw).sort(),i=t.map(gw).sort();return n.every((e,t)=>e===i[t])})(f.availableTimes,l.availableTimes)||(i.availableTimes=f.availableTimes.map(e=>({...e,serviceType:t}))),g_(f.regions,l.regions)||(i.regions=f.regions),g_(f.careTypes,l.careTypes)||(i.careTypes=f.careTypes),f.preferredWeeklyWorkingHours!==l.preferredWeeklyWorkingHours&&(i.preferredWeeklyWorkingHours=f.preferredWeeklyWorkingHours??void 0),f.hasVehicle!==l.hasVehicle&&null!==f.hasVehicle&&(i.hasVehicle=f.hasVehicle),i);if(!(Object.keys(d).length>0)){h(l),r(!1);return}c(!0);let[o]=await lT.default.data.serviceWorker.patch({id:n.id,payload:d});if(c(!1),null!==o)return;e.markListRefreshNeeded(),h(l),r(!1);let p=a.default.data.serviceWorker.detail;null!==p.query&&p.refetch()};return(0,t.jsx)(gv,{ref:d,children:(0,t.jsxs)(gz,{children:[(0,t.jsxs)(gT,{children:[(0,t.jsxs)(gE,{children:[(0,t.jsx)(gk,{children:"근무 가능 시간"}),(0,t.jsxs)(gS,{children:[(0,t.jsx)(eJ.default,{sx:{fontSize:20}}),(0,t.jsx)(gO,{children:"시간대를 추가하고, 추가한 시간대를 클릭하면 수정하거나 삭제할 수 있습니다."})]}),o&&(0,t.jsx)(gA,{children:"수정 진행중"})]}),o?(0,t.jsxs)(gC,{children:[(0,t.jsxs)(gI,{type:"button",onClick:u,disabled:s,children:[(0,t.jsx)(ih.default,{sx:{fontSize:20}}),"수정 취소"]}),(0,t.jsxs)(gI,{type:"button",onClick:()=>void g(),disabled:s,children:[(0,t.jsx)(iq.default,{sx:{fontSize:20}}),"수정 저장"]})]}):(0,t.jsxs)(gI,{type:"button",onClick:()=>{h(l),r(!0)},children:[(0,t.jsx)(nf.default,{sx:{fontSize:20}}),"수정하기"]})]}),(0,t.jsx)(g$,{value:p.availableTimes,disabled:!o,readOnly:!o,onChange:e=>{if(!o)return;let t=e.target.value;h(e=>({...e,availableTimes:t}))}}),(0,t.jsxs)(gD,{children:[(0,t.jsx)(gL,{children:"희망 근로 시간"}),(0,t.jsxs)(gR,{children:[(0,t.jsx)(gP,{children:"총"}),(0,t.jsx)(gN,{value:null===p.preferredWeeklyWorkingHours?"":String(p.preferredWeeklyWorkingHours),placeholder:"00",maxLength:2,disabled:!o,onChange:e=>{if(!o)return;let t=e.target.value.replace(/\D/g,"");if(""===t)return void h(e=>({...e,preferredWeeklyWorkingHours:null}));let n=Math.min(Number(t),99);h(e=>({...e,preferredWeeklyWorkingHours:n}))}}),(0,t.jsx)(gP,{children:"시간"})]})]}),(0,t.jsxs)(gF,{children:[(0,t.jsx)(gM,{children:"서비스 가능 지역 (복수 선택 가능)"}),(0,t.jsx)(gB,{children:gg.map(e=>(0,t.jsxs)(gU,{children:[(0,t.jsx)(gV,{disabled:!o,checked:p.regions.includes(e),onChange:()=>{let t=x(e,p.regions);h(e=>({...e,regions:t}))}}),(0,t.jsx)(gW,{children:e1.default[e].label})]},e))})]}),(0,t.jsxs)(gF,{children:[(0,t.jsx)(gM,{children:"가능한 근무 내용 (복수 선택 가능)"}),(0,t.jsx)(gB,{children:gm.map(e=>(0,t.jsxs)(gU,{children:[(0,t.jsx)(gV,{disabled:!o,checked:p.careTypes.includes(e),onChange:()=>{let t=x(e,p.careTypes);h(e=>({...e,careTypes:t}))}}),(0,t.jsx)(gW,{children:e2.default[e].label})]},e))})]}),(0,t.jsxs)(gF,{children:[(0,t.jsx)(gM,{children:"차량 소지"}),(0,t.jsx)(gB,{children:gb.map(e=>(0,t.jsxs)(gU,{children:[(0,t.jsx)(gY,{name:"detail-service-worker-car-ownership",checked:p.hasVehicle===e.value,disabled:!o,onChange:()=>{o&&h(t=>({...t,hasVehicle:e.value}))}}),(0,t.jsx)(gW,{children:e.label})]},e.label))})]})]})})}),gv=l.default.section.withConfig({componentId:"zh__sc-3656833f-0"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;

  width: 100%;
`,gC=l.default.div.withConfig({componentId:"zh__sc-3656833f-1"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,gI=(0,l.default)(r.default.Button.Outlined).withConfig({componentId:"zh__sc-3656833f-2"})`
  display: flex;
  gap: 4px;
  align-items: center;

  height: 40px;
  padding: 8px 16px;
`,gz=l.default.div.withConfig({componentId:"zh__sc-3656833f-3"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  align-self: stretch;
`,gT=l.default.div.withConfig({componentId:"zh__sc-3656833f-4"})`
  display: flex;
  gap: 16px;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;

  width: 100%;
`,gE=l.default.div.withConfig({componentId:"zh__sc-3656833f-5"})`
  display: flex;
  flex: 1 1 auto;
  gap: 16px;
  align-items: center;
`,gk=l.default.div.withConfig({componentId:"zh__sc-3656833f-6"})`
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
  text-align: center;
`,gS=l.default.div.withConfig({componentId:"zh__sc-3656833f-7"})`
  display: flex;
  gap: 4px;
  align-items: center;
  color: #464c53;
`,gO=l.default.div.withConfig({componentId:"zh__sc-3656833f-8"})`
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px;
`,gA=l.default.div.withConfig({componentId:"zh__sc-3656833f-9"})`
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
`,g$=(0,l.default)(r.default.Input.TimeSlider).withConfig({componentId:"zh__sc-3656833f-10"})`
  align-self: stretch;
`,gD=l.default.div.withConfig({componentId:"zh__sc-3656833f-11"})`
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
  align-self: stretch;
`,gL=l.default.div.withConfig({componentId:"zh__sc-3656833f-12"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #000;
  text-align: center;
`,gR=l.default.div.withConfig({componentId:"zh__sc-3656833f-13"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,gN=(0,l.default)(r.default.Input.Text).withConfig({componentId:"zh__sc-3656833f-14"})`
  width: 59px;
  height: 36px;
  text-align: center;
`,gP=l.default.div.withConfig({componentId:"zh__sc-3656833f-15"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #000;
  text-align: center;
`,gF=l.default.div.withConfig({componentId:"zh__sc-3656833f-16"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
  align-self: stretch;
`,gM=l.default.div.withConfig({componentId:"zh__sc-3656833f-17"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #000;
  text-align: center;
`,gB=l.default.div.withConfig({componentId:"zh__sc-3656833f-18"})`
  display: flex;
  flex-wrap: wrap;
  gap: 0 24px;
  align-items: center;
`,gU=l.default.label.withConfig({componentId:"zh__sc-3656833f-19"})`
  display: inline-flex;
  gap: 8px;
  align-items: center;
  height: 36px;
`,gW=l.default.span.withConfig({componentId:"zh__sc-3656833f-20"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #000;
  text-align: center;
`,gV=(0,l.default)(r.default.Input.Check).attrs({$iconSizeRatio:1.5}).withConfig({componentId:"zh__sc-3656833f-21"})`
  width: 24px;
  height: 24px;
`,gY=(0,l.default)(r.default.Input.Radio).withConfig({componentId:"zh__sc-3656833f-22"})`
  width: 20px;
  height: 20px;
`,gH=(0,n.observer)(function(){let e=a.default.modal.serviceWorkerDetail,n=e.serviceWorker?.name??"";return(0,t.jsxs)(gG,{children:[(0,t.jsx)(ge,{}),(0,t.jsx)(xB,{}),(0,t.jsx)(gy,{}),(0,t.jsxs)(gK,{type:"button",disabled:e.isDeleting,onClick:()=>{e.openDeleteConfirm()},children:[(0,t.jsx)(O.default.Delete,{size:16}),"삭제하기"]}),e.isDeleteConfirmOpen?(0,t.jsx)(gX,{children:(0,t.jsxs)(gq,{children:[(0,t.jsxs)(gQ,{children:[(0,t.jsxs)(gJ,{children:[n," 제공인력을 삭제하시겠어요?"]}),(0,t.jsxs)(gZ,{children:["삭제한 제공인력 정보는 복구할 수 없습니다.",(0,t.jsx)("br",{}),"계약 및 근무 이력이 없는 제공인력만 삭제할 수 있습니다."]})]}),(0,t.jsxs)(g0,{children:[(0,t.jsx)(g1,{type:"button",disabled:e.isDeleting,onClick:()=>{e.closeDeleteConfirm()},children:"취소하기"}),(0,t.jsx)(g2,{type:"button",disabled:e.isDeleting,onClick:()=>{e.confirmDelete()},children:"삭제하기"})]})]})}):null]})}),gG=l.default.div.withConfig({componentId:"zh__sc-d3727a60-0"})`
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
`,gK=(0,l.default)(r.default.Button.Outlined).withConfig({componentId:"zh__sc-d3727a60-1"})`
  gap: 8px;
  height: 36px;
  padding: 8px 16px;
`,gX=l.default.div.withConfig({componentId:"zh__sc-d3727a60-2"})`
  position: fixed;
  z-index: 1000;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgb(10 10 10 / 35%);
`,gq=l.default.div.withConfig({componentId:"zh__sc-d3727a60-3"})`
  display: inline-flex;
  flex-direction: column;
  gap: 48px;
  align-items: center;
  justify-content: center;

  padding: 32px 24px;
  border: 1px solid #e5e9ef;
  border-radius: 8px;

  background: #fff;
  box-shadow: 0 4px 4px 0 rgb(0 0 0 / 10%);
`,gQ=l.default.div.withConfig({componentId:"zh__sc-d3727a60-4"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;
`,gJ=l.default.h2.withConfig({componentId:"zh__sc-d3727a60-5"})`
  align-self: stretch;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #000;
`,gZ=l.default.p.withConfig({componentId:"zh__sc-d3727a60-6"})`
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #000;
`,g0=l.default.div.withConfig({componentId:"zh__sc-d3727a60-7"})`
  display: flex;
  gap: 12px;
  align-items: center;
  align-self: stretch;
  justify-content: flex-end;
`,g1=(0,l.default)(r.default.Button.Outlined).withConfig({componentId:"zh__sc-d3727a60-8"})`
  height: 36px;
  padding: 8px 16px;
`,g2=(0,l.default)(r.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-d3727a60-9"})`
  height: 36px;
  padding: 8px 16px;
`;var g6=e.i(75419);let g4={badge:{label:"데이터 없음",color:"black"},action:{label:"상태 확인 필요",color:"black",disabled:!0}};function g5(e,t){return 0===t||0===e?"unchecked":e===t?"checked":"indeterminate"}function g3({status:e,onClick:n}){return(0,t.jsx)(mx,{$status:e,onClick:n,children:"checked"===e?(0,t.jsx)(iq.default,{sx:{fontSize:18}}):"indeterminate"===e?(0,t.jsx)(dB,{sx:{fontSize:20}}):null})}let g9=(0,n.observer)(function(){let e=a.default.modal.serviceWorkerDetail,n=e.documentTemplateListStatus,l=e.employmentContractDocumentListStatus,d=e.documentTemplates,o=e.employmentContractDocuments,r=e.selectedEmploymentContractId,[s,c]=(0,i.useState)(new Set),[f,h]=(0,i.useState)(!1),p=(0,i.useMemo)(()=>{let e=new Map;return d.forEach(t=>{e.set(t.id,t)}),e},[d]),u=(0,i.useMemo)(()=>o.reduce((e,t)=>{let n=p.get(t.templateId);return void 0===n||e.push({phaseGroup:n.phaseGroup,phaseGroupLabel:n.phaseGroupLabel,templateId:n.id,templateName:t.templateName,templateImagePath:n.templateImagePath,document:t}),e},[]),[o,p]),x=(0,i.useMemo)(()=>{let e=new Map;return u.forEach(t=>{let n=e.get(t.phaseGroup);void 0===n?e.set(t.phaseGroup,{key:t.phaseGroup,label:t.phaseGroupLabel,cards:[t]}):n.cards.push(t)}),Array.from(e.values())},[u]),g=(0,i.useMemo)(()=>Array.from(new Set(u.map(e=>e.document.id))),[u]),m=g.filter(e=>s.has(e)).length,b=g5(m,g.length),j=e=>{c(t=>{let n=new Set(t);return e.forEach(e=>n.add(e)),n})},w=e=>{c(t=>{let n=new Set(t);return e.forEach(e=>n.delete(e)),n})},_=t=>{let n=new Set(t);return e.employmentContractDocuments.reduce((e,t)=>{if(!n.has(t.id))return e;let i=p.get(t.templateId);return void 0===i||e.push({phaseGroup:i.phaseGroup,phaseGroupLabel:i.phaseGroupLabel,templateId:i.id,templateName:t.templateName,templateImagePath:i.templateImagePath,document:t}),e},[])},y=async t=>{let n=e.serviceWorkerId;if(null===n)return a.default.ui.layout.toast.error("제공인력 정보를 찾을 수 없어 출력을 진행할 수 없습니다."),null;let i=Array.from(new Set(t.filter(e=>e.document.status===g6.default.AUTO_CREATED).map(e=>e.document.id)));if(0===i.length)return!1;let l=await Promise.all(i.map(e=>lT.default.data.serviceWorker.patchDocument({id:n,documentId:e,payload:{fields:[]}}))),d=l.find(([e])=>null!==e)?.[0]??null;return null!==d?(a.default.ui.layout.toast.error(d.message??"서류 상태 저장에 실패했습니다."),null):(await a.default.data.serviceWorker.employmentContractDocumentList.refetch(),!0)},v=async e=>{let[t,n]=await lT.default.data.serviceWorker.getDocumentTemplate({templateId:e.templateId});return null!==t||null===n?null:n.map(t=>{let n=e.document.inputData.find(e=>e.page===t.page&&e.fieldKey===t.fieldKey);return{...t,value:n?.value??null}})},C=async(e,t)=>{if(0!==e.length){h(!0);try{let n=_(e),i=await y(n);if(null===i)return;i&&await new Promise(e=>{window.setTimeout(e,600)});let l=_(e),d=[],o=[],r=0;for(let e of l){let t=await v(e);if(null===t)return void a.default.ui.layout.toast.error(`서류 서식 정보를 불러오지 못했습니다. (${e.templateName})`);(e.templateImagePath??[]).forEach((n,i)=>{if(""===n)return;let l=i+1;r+=1,d.push({id:`${e.document.id}-${l}`,templateId:e.templateId,imagePath:n,page:r}),t.filter(e=>e.page===l).forEach(e=>{o.push({...e,page:r})})})}if(0===d.length)return void a.default.ui.layout.toast.error("출력할 서류 이미지가 없습니다.");let s=1===l.length?l[0]?.templateName??"제공인력 서류 출력":`제공인력 서류 ${l.length}건`,f=!1;await (0,c4.renderDocumentPrintView)({pages:d,fields:o,printTitle:s,onImageLoadFailure:e=>{f=!0,a.default.ui.layout.toast.error(`서류 이미지 ${e}개 로딩에 실패하여 출력을 중단했습니다.`)}}),t&&!f&&c(new Set)}finally{h(!1)}}};return null===r?(0,t.jsx)(mu,{children:"선택 가능한 계약이 없습니다."}):("loading"===n||"loading"===l)&&0===u.length?(0,t.jsx)(mu,{children:"서류 목록을 불러오는 중입니다."}):"error"===n||"error"===l?(0,t.jsx)(mu,{children:"서류 목록을 불러오지 못했습니다. 잠시 후 다시 시도해 주세요."}):0===u.length?(0,t.jsx)(mu,{children:"등록된 서류가 없습니다."}):(0,t.jsxs)(g8,{children:[(0,t.jsxs)(g7,{children:[(0,t.jsxs)(mt,{onClick:()=>{"checked"===b?w(g):j(g)},children:[(0,t.jsx)(g3,{status:b}),"전체 선택하기"]}),(0,t.jsxs)(me,{children:[(0,t.jsxs)(mn,{disabled:0===m||f,onClick:()=>void C(Array.from(s),!0),children:[(0,t.jsx)(d5.default,{sx:{fontSize:16}}),"선택한 서류 출력하기"]}),(0,t.jsxs)(mn,{disabled:0===g.length||f,onClick:()=>void C(g,!1),children:[(0,t.jsx)(d5.default,{sx:{fontSize:16}}),"전체 출력하기"]})]})]}),x.map(e=>(0,t.jsxs)(mi,{children:[(0,t.jsxs)(ml,{onClick:()=>{let t=e.cards.map(e=>e.document.id);"checked"===g5(t.filter(e=>s.has(e)).length,t.length)?w(t):j(t)},children:[(0,t.jsx)(g3,{status:g5(e.cards.filter(e=>s.has(e.document.id)).length,e.cards.length)}),"[",e.label,"]"]}),(0,t.jsx)(ma,{children:e.cards.map(e=>{let n=e.templateImagePath?.[0]??null,i=s.has(e.document.id),l=function(e){switch(e){case g6.default.AUTO_CREATED:return{badge:{label:"출력 대기",color:"blue"},action:{label:"초안 검토하기",color:"blue"}};case g6.default.COMPLETED:return{badge:{label:"전산 완료",color:"gray"},action:{label:"문서 확인하기",color:"indigo"}};default:return g4}}(e.document.status);return(0,t.jsxs)(md,{children:[(0,t.jsx)(mo,{children:(0,t.jsx)(g3,{status:i?"checked":"unchecked",onClick:()=>{var t;return t=e.document.id,void c(e=>{let n=new Set(e);return n.has(t)?n.delete(t):n.add(t),n})}})}),(0,t.jsx)(mr,{$color:l.badge.color,children:l.badge.label}),(0,t.jsx)(ms,{children:null!==n&&""!==n?(0,t.jsx)(dL.default,{src:n,width:210,height:297,style:{width:"auto",height:"90%",maxWidth:"90%",objectFit:"contain"},loading:"eager",alt:e.templateName}):(0,t.jsx)(dN,{size:40,color:"#D1D5DC"})}),(0,t.jsxs)(mc,{children:[(0,t.jsx)(mf,{children:(0,t.jsx)(mh,{children:e.templateName})}),(0,t.jsx)(mp,{$color:l.action.color,disabled:!0===l.action.disabled||f||null===n||""===n,onClick:()=>{a.default.modal.documentView.openServiceWorkerDocument(e.document.id)},children:null===n||""===n?"이미지 없음":l.action.label})]})]},e.document.id)})})]},e.key))]})}),g8=l.default.div.withConfig({componentId:"zh__sc-10675099-0"})`
  overflow-y: auto;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 20px;

  width: 100%;
  min-height: 0;
  padding: 24px;

  background: #fcfdff;
`,g7=l.default.div.withConfig({componentId:"zh__sc-10675099-1"})`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;
`,me=l.default.div.withConfig({componentId:"zh__sc-10675099-2"})`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: flex-end;
`,mt=l.default.button.withConfig({componentId:"zh__sc-10675099-3"})`
  cursor: pointer;

  display: flex;
  gap: 8px;
  align-items: center;

  width: fit-content;
  padding: 0;
  border: 0;

  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  color: #0a0a0a;

  background: transparent;
`,mn=(0,l.default)(r.default.Button.Outlined).withConfig({componentId:"zh__sc-10675099-4"})`
  display: flex;
  gap: 4px;
  align-items: center;

  height: 40px;
  padding: 8px 16px;

  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: #4f39f6;
`,mi=l.default.div.withConfig({componentId:"zh__sc-10675099-5"})`
  display: flex;
  flex-direction: column;
  gap: 9px;
  align-items: flex-start;
  align-self: stretch;
`,ml=l.default.div.withConfig({componentId:"zh__sc-10675099-6"})`
  cursor: pointer;

  display: flex;
  gap: 8px;
  align-items: center;

  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  color: #0a0a0a;
`,ma=l.default.div.withConfig({componentId:"zh__sc-10675099-7"})`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: stretch;
  align-self: stretch;
`,md=l.default.div.withConfig({componentId:"zh__sc-10675099-8"})`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 188px;
  height: 232px;
  border: 1px solid #d1d5dc;
  border-radius: 8px;

  background: #fff;
`,mo=l.default.div.withConfig({componentId:"zh__sc-10675099-9"})`
  position: absolute;
  z-index: 1;
  top: 8px;
  left: 8px;
`,mr=l.default.div.withConfig({componentId:"zh__sc-10675099-10"})`
  position: absolute;
  top: 8px;
  right: 8px;

  display: inline-flex;
  align-items: center;

  padding: 4px 6px;
  border-radius: 99px;

  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  color: #fff;

  background: ${({$color:e})=>{switch(e){case"lightBlue":return"#9FBFFF";case"orange":return"#FF6900";case"gray":return"#77798B";case"black":return"#0a0a0a";default:return"#2264E8"}}};
`,ms=l.default.div.withConfig({componentId:"zh__sc-10675099-11"})`
  overflow: hidden;
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: center;

  height: 140px;
  border-radius: 7px 7px 0 0;

  background: #f3f4f6;
`,mc=l.default.div.withConfig({componentId:"zh__sc-10675099-12"})`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  gap: 2px;
  align-items: center;
  align-self: stretch;
  justify-content: center;

  padding: 8px;
`,mf=l.default.div.withConfig({componentId:"zh__sc-10675099-13"})`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: center;
`,mh=l.default.div.withConfig({componentId:"zh__sc-10675099-14"})`
  overflow: hidden;
  display: -webkit-box;
  flex: 1 0 0;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;

  height: 45px;

  font-size: 16px;
  font-weight: 700;
  line-height: 1.3;
  color: #0a0a0a;
  white-space: normal;
`,mp=l.default.button.withConfig({componentId:"zh__sc-10675099-15"})`
  display: flex;
  gap: 10px;
  align-items: center;
  align-self: stretch;
  justify-content: center;

  height: 32px;
  border-radius: 4px;

  font-size: 16px;
  font-weight: 500;
  color: #fff;
  text-align: center;

  background: ${({$color:e})=>{switch(e){case"indigo":return"#505794";case"orange":return"#FF6900";case"gray":return"#77798B";case"black":return"#0A0A0A";default:return"#2264E8"}}};

  &:disabled {
    cursor: not-allowed;
    border: 1px solid #d1d5db;
    color: #9ca3af;
    background: #f9fafb;
  }
`,mu=l.default.div.withConfig({componentId:"zh__sc-10675099-16"})`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;

  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: #4b5563;
`,mx=l.default.div.withConfig({componentId:"zh__sc-10675099-17"})`
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 24px;
  height: 24px;
  padding: 2px;
  border: 1px solid #58616a;
  border-color: ${({$status:e})=>"unchecked"===e?"#58616a":"#256EF4"};
  border-radius: 4px;

  color: #fff;

  background: ${({$status:e})=>"unchecked"===e?"#fff":"#256EF4"};
`,mg=(0,n.observer)(function(){let e=a.default.modal.serviceWorkerDetail;return(0,t.jsx)(mm,{role:"tablist","aria-label":"제공인력 상세 탭",children:e.tabs.map(n=>(0,t.jsx)(mb,{type:"button",role:"tab","aria-selected":n.active,disabled:n.disabled,$active:n.active,$disabled:n.disabled,onClick:()=>e.setActiveTab(n.key),children:n.label},n.key))})}),mm=l.default.div.withConfig({componentId:"zh__sc-53613c76-0"})`
  display: flex;
  align-self: flex-start;

  width: 100%;
  height: 56px;
  border-bottom: 1px solid #e5e7eb;

  background-color: #fff;
`,mb=l.default.button.withConfig({componentId:"zh__sc-53613c76-1"})`
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
`;var mj=e.i(37163),mw=e.i(19740);function m_({isOpen:e,onCancel:n,onConfirm:i}){return e?(0,t.jsx)(d.default,{children:(0,t.jsxs)(my,{children:[(0,t.jsxs)(mv,{children:[(0,t.jsx)(mC,{children:"계약 정보를 저장할까요?"}),(0,t.jsxs)(mI,{children:["수정된 정보는 연결된 서류의 자동입력 항목에 함께 반영됩니다.","\n","이미 출력했거나 최종확인한 서류는 다시 확인이 필요할 수 있습니다."]})]}),(0,t.jsxs)(mz,{children:[(0,t.jsx)(mE,{type:"button",onClick:n,children:"취소하기"}),(0,t.jsx)(mk,{type:"button",onClick:i,children:"저장 및 모든 서류에 반영"})]})]})}):null}let my=l.default.div.withConfig({componentId:"zh__sc-e1c0716c-0"})`
  display: inline-flex;
  flex-direction: column;
  gap: 48px;
  align-items: center;
  justify-content: center;

  padding: 32px 24px;
  border: 1px solid #e5e9ef;
  border-radius: 8px;

  background: #fff;
  box-shadow: 0 4px 4px 0 rgb(0 0 0 / 10%);
`,mv=l.default.div.withConfig({componentId:"zh__sc-e1c0716c-1"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;
`,mC=l.default.p.withConfig({componentId:"zh__sc-e1c0716c-2"})`
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  color: #000;
`,mI=l.default.p.withConfig({componentId:"zh__sc-e1c0716c-3"})`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: #000;
  white-space: pre-line;
`,mz=l.default.div.withConfig({componentId:"zh__sc-e1c0716c-4"})`
  display: flex;
  gap: 12px;
  align-items: center;
  align-self: stretch;
  justify-content: flex-end;
`,mT=l.css`
  height: 36px;
  padding: 8px 16px;
  font-size: 16px;
`,mE=(0,l.default)(r.default.Button.Outlined).withConfig({componentId:"zh__sc-e1c0716c-5"})`
  ${mT}
`,mk=(0,l.default)(r.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-e1c0716c-6"})`
  ${mT}
`;function mS({isOpen:e,title:n,description:i,onCancel:l,onConfirm:a}){return e?(0,t.jsx)(d.default,{children:(0,t.jsxs)(mO,{children:[(0,t.jsxs)(mA,{children:[(0,t.jsx)(m$,{children:n}),(0,t.jsx)(mD,{children:i})]}),(0,t.jsxs)(mL,{children:[(0,t.jsx)(mN,{type:"button",onClick:l,children:"취소하기"}),(0,t.jsx)(mP,{type:"button",onClick:a,children:"변경하기"})]})]})}):null}let mO=l.default.div.withConfig({componentId:"zh__sc-b641051-0"})`
  display: inline-flex;
  flex-direction: column;
  gap: 48px;
  align-items: center;
  justify-content: center;

  padding: 32px 24px;
  border: 1px solid #e5e9ef;
  border-radius: 8px;

  background: #fff;
  box-shadow: 0 4px 4px 0 rgb(0 0 0 / 10%);
`,mA=l.default.div.withConfig({componentId:"zh__sc-b641051-1"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;
`,m$=l.default.p.withConfig({componentId:"zh__sc-b641051-2"})`
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  color: #000;
`,mD=l.default.p.withConfig({componentId:"zh__sc-b641051-3"})`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: #000;
  white-space: pre-line;
`,mL=l.default.div.withConfig({componentId:"zh__sc-b641051-4"})`
  display: flex;
  gap: 12px;
  align-items: center;
  align-self: stretch;
  justify-content: flex-end;
`,mR=l.css`
  height: 36px;
  padding: 8px 16px;
  font-size: 16px;
`,mN=(0,l.default)(r.default.Button.Outlined).withConfig({componentId:"zh__sc-b641051-5"})`
  ${mR}
`,mP=(0,l.default)(r.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-b641051-6"})`
  ${mR}
`,mF=e=>{if(null===e||!hc.default.brand.calendarDateString.is(e))return"-";let[t,n,i]=e.split("-");return`${t}년 ${Number(n)}월 ${Number(i)}일`},mM=e=>e in ug.default,mB=(0,n.observer)(function(){var e;let[n,l]=(0,i.useState)(!1),[d,o]=(0,i.useState)(!1),[r,s]=(0,i.useState)(!1),c=a.default.modal.serviceWorkerDetail,f=c.serviceWorker,h=f?.name??"",p=f?.status,u=f?.firstRegisteredDate??null,x=c.employmentContractStatusOptions,g=c.selectedEmploymentContractStatus??"",m=c.selectedEmploymentContractDraftStatus??"",b=c.selectedEmploymentContractExpirationReminder,j=c.employmentContractRoundOptions,w=c.selectedEmploymentContractId??"",_=c.isEmploymentContractEditing,y=c.selectedEmploymentContractDraftContractStartDate??"",v=c.selectedEmploymentContractDraftContractEndDate??"",C=c.selectedEmploymentContract,I=C?.serviceType,z=null===(e=I??null)?null:Object.keys(ug.default).filter(mM).find(t=>ug.BUSINESS_TYPE_SERVICE_TYPES[t].includes(e))??null,T=C?.contractStartDate??null,E=C?.contractEndDate??null,k=g===mj.default.COMPLETED,S=m===mj.default.TERMINATED,A=(0,dn.getTodayCalendarDateString)(),$=A.replaceAll("-","."),D=`${T?.replaceAll("-",".")??"-"} ~ ${E?.replaceAll("-",".")??"-"}`,L=mF(u),R=mF(T),N=null===E?null:mF(E),P=(0,dn.getEmploymentContractTenureLabel)(f?.employmentContracts??[]);return null===f||void 0===p?null:(0,t.jsxs)(mU,{children:[(0,t.jsxs)(mW,{children:[(0,t.jsx)(mX,{children:h}),(0,t.jsxs)(mq,{children:[(0,t.jsx)(mQ,{children:mw.SERVICE_WORKER_STATUS[p]}),(0,t.jsx)(mQ,{children:null===z||null==I?"-":`${ug.default[z].label} ${hs.default[I].label}${"MEAL"===I||"NUTRITION"===I?"관리":""} 서비스 - ${hs.default[I].code}`})]}),(0,t.jsx)(mJ,{children:_?(0,t.jsx)(mZ,{children:"수정 진행중"}):null}),(0,t.jsx)(m0,{children:_?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(m1,{type:"button",onClick:()=>{c.cancelEmploymentContractEdit()},children:[(0,t.jsx)(ih.default,{sx:{fontSize:20}}),"수정 취소"]}),(0,t.jsxs)(m1,{type:"button",onClick:()=>{l(!0)},children:[(0,t.jsx)(iq.default,{sx:{fontSize:20}}),"수정 저장"]})]}):(0,t.jsxs)(m1,{type:"button",disabled:k,onClick:()=>{k||c.startEmploymentContractEdit()},children:[(0,t.jsx)(nf.default,{sx:{fontSize:20}}),"수정하기"]})})]}),(0,t.jsx)(m2,{children:(0,t.jsxs)(m6,{children:[(0,t.jsx)(m4,{children:"계약 상태"}),(0,t.jsxs)(m3,{value:_?m:g,disabled:!_,onChange:e=>{let t=e.target.value;if(""!==t){if(t===mj.default.TERMINATED&&t!==m)return void o(!0);if(t===mj.default.ACTIVE&&t!==m)return void s(!0);c.updateSelectedEmploymentContractDraftStatus(t)}},children:[0===x.length?(0,t.jsx)("option",{value:"",children:"-"}):null,x.map(e=>(0,t.jsx)("option",{value:e.value,children:e.label},e.value))]}),null!==b?(0,t.jsxs)(mY,{children:[(0,t.jsxs)(de.default,{$color:b.color,children:["계약 만료 ",b.remainingDays,"일 남음"]}),(0,t.jsxs)(mH,{type:"button",onClick:()=>{a.default.modal.serviceWorkerCreate.show("renew"),a.default.modal.serviceWorkerDetail.close()},children:[(0,t.jsx)(O.default.ContractEdit,{size:16}),"재계약 하기"]})]}):null]})}),(0,t.jsx)(m2,{children:(0,t.jsxs)(m6,{children:[(0,t.jsx)(m4,{children:"계약 회차"}),(0,t.jsxs)(m9,{value:w,disabled:_||0===j.length,onChange:e=>{let t=e.target.value;c.setSelectedEmploymentContractId(""===t?null:t)},children:[0===j.length?(0,t.jsx)("option",{value:"",children:"-"}):null,j.map(e=>(0,t.jsx)("option",{value:e.id,children:e.label},e.id))]})]})}),(0,t.jsxs)(m2,{children:[(0,t.jsxs)(m6,{children:[(0,t.jsx)(m4,{children:"접수일"}),(0,t.jsx)(m5,{children:L})]}),(0,t.jsx)(m8,{}),(0,t.jsxs)(m6,{children:[(0,t.jsx)(m4,{children:"계약 기간"}),_?(0,t.jsxs)(mV,{children:[S?(0,t.jsx)(m5,{children:mF(T)}):(0,t.jsx)(mK,{value:y,readOnly:!1,onChange:e=>{c.updateSelectedEmploymentContractDraftContractStartDate(e)},placeholder:"YYYY-MM-DD"}),(0,t.jsx)(mG,{children:"~"}),S?(0,t.jsx)(mK,{value:v,readOnly:!1,onChange:e=>{c.updateSelectedEmploymentContractDraftContractEndDate(e)},placeholder:"YYYY-MM-DD"}):(0,t.jsx)(m5,{children:mF(E)})]}):(0,t.jsx)(m5,{children:null===C?"-":`${R} - ${N??"-"}`})]}),(0,t.jsx)(m8,{}),(0,t.jsxs)(m6,{children:[(0,t.jsx)(m4,{children:"근속기간"}),(0,t.jsx)(m5,{children:P})]})]}),(0,t.jsx)(mS,{isOpen:d,title:"계약 상태를 퇴사로 변경 하시겠습니까?",description:`오늘(${$})로 퇴사 상태로 변경되며, 계약 종료일이 변경됩니다.
퇴사 상태로 변경 시, 계약 시작일은 수정할 수 없으며 계약 종료일은 수정할 수 있습니다.`,onCancel:()=>{o(!1)},onConfirm:()=>{c.updateSelectedEmploymentContractDraftContractEndDate(A),c.updateSelectedEmploymentContractDraftStatus(mj.default.TERMINATED),o(!1)}}),(0,t.jsx)(mS,{isOpen:r,title:"계약중 상태로 되돌리시겠습니까?",description:`이전 계약 기간 (${D})으로 되돌리며, 해지에서 계약중으로 변경됩니다.
계약중일 시, 계약 시작일을 수정할 수 있으며 계약 종료일은 수정할 수 없습니다.`,onCancel:()=>{s(!1)},onConfirm:()=>{c.updateSelectedEmploymentContractDraftStatus(mj.default.ACTIVE),s(!1)}}),(0,t.jsx)(m_,{isOpen:n,onCancel:()=>{l(!1)},onConfirm:()=>{c.saveSelectedEmploymentContractDraft().then(e=>{!0===e&&l(!1)})}})]})}),mU=l.default.div.withConfig({componentId:"zh__sc-3c59ca1c-0"})`
  display: flex;
  flex-direction: column;
  gap: 16px 24px;
  align-items: flex-start;
  align-self: stretch;
  justify-content: center;

  padding: 16px 24px;
  border-bottom: 1px solid #e5e7eb;

  background: #fff;
`,mW=l.default.div.withConfig({componentId:"zh__sc-3c59ca1c-1"})`
  display: flex;
  gap: 16px;
  align-items: center;
  width: 100%;
`,mV=l.default.div.withConfig({componentId:"zh__sc-3c59ca1c-2"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,mY=l.default.div.withConfig({componentId:"zh__sc-3c59ca1c-3"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,mH=(0,l.default)(r.default.Button.Outlined).withConfig({componentId:"zh__sc-3c59ca1c-4"})`
  gap: 8px;
  padding: 0 16px;
`,mG=l.default.span.withConfig({componentId:"zh__sc-3c59ca1c-5"})`
  font-size: 16px;
  line-height: 24px;
  color: #475467;
`,mK=(0,l.default)(r.default.Input.Date).attrs({style:{textAlign:"center"}}).withConfig({componentId:"zh__sc-3c59ca1c-6"})`
  width: 180px;
  height: 28px;
  font-size: 16px;
`,mX=l.default.div.withConfig({componentId:"zh__sc-3c59ca1c-7"})`
  font-size: 24px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 83.333% */
  color: #0a0a0a;
`,mq=l.default.div.withConfig({componentId:"zh__sc-3c59ca1c-8"})`
  display: flex;
  gap: 4px;
`,mQ=l.default.div.withConfig({componentId:"zh__sc-3c59ca1c-9"})`
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
`,mJ=l.default.div.withConfig({componentId:"zh__sc-3c59ca1c-10"})`
  display: flex;
  flex: 1;
`,mZ=l.default.div.withConfig({componentId:"zh__sc-3c59ca1c-11"})`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;

  padding: 8px;
  border-radius: 999px;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 16px;
  color: #fff;

  background: #4f39f6;
`,m0=l.default.div.withConfig({componentId:"zh__sc-3c59ca1c-12"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,m1=(0,l.default)(r.default.Button.Outlined).withConfig({componentId:"zh__sc-3c59ca1c-13"})`
  display: flex;
  gap: 4px;
  align-items: center;

  height: 40px;
  padding: 8px 16px;

  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
`,m2=l.default.div.withConfig({componentId:"zh__sc-3c59ca1c-14"})`
  display: flex;
  gap: 12px;
  align-items: center;
`,m6=l.default.div.withConfig({componentId:"zh__sc-3c59ca1c-15"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,m4=l.default.div.withConfig({componentId:"zh__sc-3c59ca1c-16"})`
  font-size: 18px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 111.111% */
  color: #0a0a0a;
`,m5=l.default.div.withConfig({componentId:"zh__sc-3c59ca1c-17"})`
  font-size: 18px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px; /* 111.111% */
  color: #0a0a0a;
`,m3=(0,l.default)(r.default.Input.Select).withConfig({componentId:"zh__sc-3c59ca1c-18"})`
  height: 28px;
`,m9=(0,l.default)(r.default.Input.Select).withConfig({componentId:"zh__sc-3c59ca1c-19"})`
  height: 36px;
`,m8=l.default.div.withConfig({componentId:"zh__sc-3c59ca1c-20"})`
  width: 1px;
  height: 24px;
  background: #dadee6;
`,m7=(0,n.observer)(function(){let e=a.default.modal.serviceWorkerDetail;return"ready"!==e.status?null:(0,t.jsx)(d.default,{children:(0,t.jsxs)(be,{children:[(0,t.jsxs)(bt,{children:[(0,t.jsx)(bn,{children:"제공인력 상세보기"}),(0,t.jsxs)(bi,{onClick:e.close,children:[(0,t.jsx)(S.X,{size:16}),"닫기"]})]}),(0,t.jsx)(mB,{}),(0,t.jsx)(mg,{}),(0,t.jsxs)(bl,{children:["basic"===e.activeTab&&(0,t.jsx)(gH,{}),"docs"===e.activeTab&&(0,t.jsx)(g9,{})]})]})})}),be=l.default.div.withConfig({componentId:"zh__sc-731779e3-0"})`
  position: relative;

  display: flex;
  flex-direction: column;
  flex-shrink: 0;

  width: 1050px;
  height: 90vh;
  border-radius: 8px;

  background: #fff;
`,bt=l.default.div.withConfig({componentId:"zh__sc-731779e3-1"})`
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
`,bn=l.default.h2.withConfig({componentId:"zh__sc-731779e3-2"})`
  margin: 0;

  font-size: 18px;
  font-weight: 700;
  font-style: normal;
  line-height: 28px;
  color: #101828;
  letter-spacing: -0.439px;
`,bi=(0,l.default)(r.default.Button.Outlined).withConfig({componentId:"zh__sc-731779e3-3"})`
  display: flex;
  gap: 6px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,bl=l.default.div.withConfig({componentId:"zh__sc-731779e3-4"})`
  display: flex;
  flex: 1;
  min-height: 0;
`,ba=(0,n.observer)(function(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(nl,{}),(0,t.jsx)(oi,{}),(0,t.jsx)(xx,{}),(0,t.jsx)(m7,{}),(0,t.jsx)(fa,{}),(0,t.jsx)(pw,{})]})});e.s(["default",0,ba],55357)},31239,e=>{"use strict";e.i(3159);var t=e.i(46907),n=e.i(33261),i=e.i(7744),l=e.i(43174);let a=(0,t.observer)(function(){let e=(0,n.usePathname)(),t=(0,n.useRouter)(),a=l.default.ui.layout.targetPathname;return(0,i.useEffect)(()=>{e&&l.default.ui.layout.setPathname(e)},[e]),(0,i.useEffect)(()=>{null!==a&&(t.push(a),l.default.ui.layout.clearTargetPathname())},[t,a]),null});e.s(["default",0,a])},44997,e=>{"use strict";var t=e.i(9735),n=e.i(94586),i=e.i(33261),l=e.i(7744),a=e.i(4153);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var o=(0,l.forwardRef)(function(e,t){var n=e.color,i=e.size,a=void 0===i?24:i,o=function(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["color","size"]);return l.default.createElement("svg",d({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),l.default.createElement("polyline",{points:"6 9 12 15 18 9"}))});function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}o.propTypes={color:a.default.string,size:a.default.oneOfType([a.default.string,a.default.number])},o.displayName="ChevronDown";var s=(0,l.forwardRef)(function(e,t){var n=e.color,i=e.size,a=void 0===i?24:i,d=function(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["color","size"]);return l.default.createElement("svg",r({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),l.default.createElement("polyline",{points:"18 15 12 9 6 15"}))});s.propTypes={color:a.default.string,size:a.default.oneOfType([a.default.string,a.default.number])},s.displayName="ChevronUp";var c=e.i(38803),f=e.i(9454);function h(e){return null===e?"/":e.length>1&&e.endsWith("/")?e.slice(0,-1):e}function p(e,t){let n=h(e),i=h(t);return"/"===i?"/"===n:n===i||n.startsWith(`${i}/`)}function u(e,t){return t.startsWith("/")?"/"===e?t:`${h(e)}${t}`:""}function x(e,t){return u(e,t.matchSubpath??t.subpath)}let g=c.default.div.withConfig({componentId:"zh__sc-2fa5d58c-0"})`
  display: flex;
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
`,j=c.default.div.withConfig({componentId:"zh__sc-2fa5d58c-3"})`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
  height: 100%;
  padding: 8px 8px 8px 16px;
`,w=c.default.div.withConfig({componentId:"zh__sc-2fa5d58c-4"})`
  flex-shrink: 0;
  width: 100%;
  height: 24px;
`,_=c.default.div.withConfig({componentId:"zh__sc-2fa5d58c-5"})`
  display: flex;
  gap: 10px;
  align-items: center;

  width: 100%;
  height: 100%;
`,y=c.default.div.withConfig({componentId:"zh__sc-2fa5d58c-6"})`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;

  width: 20px;
  height: 20px; /* size-20 */
`,v=(0,c.default)(y).withConfig({componentId:"zh__sc-2fa5d58c-7"})``,C=c.default.div.withConfig({componentId:"zh__sc-2fa5d58c-8"})`
  flex: 1 0 0;

  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: 20px;
  color: ${({$active:e})=>e?"#4F39F6":"#45464E"};
`,I=c.default.div.withConfig({componentId:"zh__sc-2fa5d58c-9"})`
  position: relative;
  flex-shrink: 0;
  align-self: stretch;
`,z=c.default.div.withConfig({componentId:"zh__sc-2fa5d58c-10"})`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
  height: 100%;
`,T=c.default.div.withConfig({componentId:"zh__sc-2fa5d58c-11"})`
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
`,k=c.default.div.withConfig({componentId:"zh__sc-2fa5d58c-13"})`
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
`,O=c.default.div.withConfig({componentId:"zh__sc-2fa5d58c-15"})`
  overflow: hidden;
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  min-width: 1px;
  height: 100%;
  padding: 1px 0;
`,A=c.default.div.withConfig({componentId:"zh__sc-2fa5d58c-16"})`
  flex-shrink: 0;

  width: 100%;

  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  line-height: 20px;
  color: ${({$active:e})=>e?"#4F39F6":"#45464E"};
`;e.s(["default",0,function(){let e=h((0,i.usePathname)()),a=f.default.routes,[d,r]=(0,l.useState)(()=>Object.fromEntries(a.map((t,n)=>[n,t.children?.some(n=>{let i=x(t.subpath,n);return!!i&&p(e,i)})??!1])));return(0,t.jsx)(g,{children:a.map((i,l)=>{if(0===l)return null;let a=i.children??[],c=a.length>0,f=a.some(t=>{let n=x(i.subpath,t);return!!n&&p(e,n)}),h=p(e,i.subpath)||f,g=f||(d[l]??!1);return(0,t.jsxs)(m,{children:[(0,t.jsx)(b,{$active:h,$clickable:!!(i.hasPage||c),as:i.hasPage?n.default:"div",href:i.hasPage?i.subpath:void 0,onClick:c?()=>{r(e=>({...e,[l]:!g}))}:void 0,children:(0,t.jsx)(j,{children:(0,t.jsx)(w,{children:(0,t.jsxs)(_,{children:[(0,t.jsx)(y,{children:i.icon?(0,t.jsx)(i.icon,{size:16,color:h?"#4F39F6":"#6E7079"}):null}),(0,t.jsx)(C,{$active:h,children:`${l}. ${i.label}`}),c?(0,t.jsx)(v,{children:g?(0,t.jsx)(s,{size:16,color:"#6E7079"}):(0,t.jsx)(o,{size:16,color:"#6E7079"})}):null]})})})}),c&&g?(0,t.jsx)(I,{children:(0,t.jsx)(z,{children:a.map((a,d)=>{let o=u(i.subpath,a.subpath),r=x(i.subpath,a),s=!!r&&p(e,r);return(0,t.jsx)(T,{as:a.hasPage?n.default:"div",href:a.hasPage&&o||void 0,children:(0,t.jsx)(E,{children:(0,t.jsx)(k,{children:(0,t.jsx)(S,{children:(0,t.jsx)(O,{children:(0,t.jsx)(A,{$active:s,children:`${l}-${d+1}. ${a.label}`})})})})})},`${i.subpath}-${a.subpath}`)})})}):null]},i.subpath)})})}],44997)},70552,e=>{"use strict";var t=e.i(9735),n=e.i(39635);e.i(3159);var i=e.i(46907),l=e.i(38803),a=e.i(7744),d=e.i(24045),o=e.i(8179),r=e.i(23416),s=e.i(98273),c=e.i(64954),f=e.i(43174);let h=[".xlsx"];function p(e){return Array.from(e.dataTransfer?.types??[]).includes("Files")}let u=(0,i.observer)(function(){let{isWindowFileDragging:e}=f.default.ui.layout,n=(0,a.useRef)(null),i=(0,a.useRef)(null),l=(0,a.useRef)(null),[c,u]=(0,a.useState)(!1),[z,T]=(0,a.useState)(!1),[E,k]=(0,a.useState)(!1),[S,O]=(0,a.useState)(null),A=c||e;(0,a.useEffect)(()=>()=>{null!==l.current&&clearTimeout(l.current)},[]);let $=e=>{let t,n;null!==e&&(n=(t=e.name.lastIndexOf("."))>=0?e.name.slice(t).toLowerCase():"",(h.includes(n)||(null!==l.current&&clearTimeout(l.current),k(!0),l.current=setTimeout(()=>{k(!1),l.current=null},2e3),0))&&O(e))},D=async()=>{if(null===S||z)return;T(!0);let[e]=await r.default.data.serviceWorker.importActivityRecordsExcel({file:S});if(T(!1),null!==e)return void f.default.ui.layout.toast.error(e.message??"파일 업로드에 실패했습니다. 잠시 후 다시 시도해 주세요.",3e3,n.current);k(!1),O(null);let t=f.default.data.serviceWorker.activityRecordList;null===t.query?t.setQuery({}):await t.refetch(),f.default.ui.layout.toast.success("파일 업로드를 완료했습니다.",3e3,n.current)};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(x,{ref:i,type:"file",accept:".xlsx",onChange:e=>{$(e.target.files?.[0]??null),e.target.value=""}}),(0,t.jsx)(g,{ref:n,children:(0,t.jsxs)(m,{$isDragging:A,$isError:E,$isUploading:z,$isFileSelected:null!==S,onClick:e=>{e.target instanceof HTMLElement&&null!==e.target.closest("button")||null===S&&(z||i.current?.click())},onDragOver:e=>{!p(e)||(e.preventDefault(),z||u(!0))},onDragLeave:e=>{p(e)&&(e.preventDefault(),u(!1))},onDrop:e=>{!p(e)||(e.preventDefault(),z||(u(!1),$(e.dataTransfer.files?.[0]??null)))},children:[null===S?(0,t.jsxs)(t.Fragment,{children:[!1===E&&(0,t.jsx)(d.Upload,{size:20,color:"#4F39F6"}),(0,t.jsx)(b,{$isError:E,children:E?"지원하지 않는 파일 형식입니다.":A?"파일을 여기에 놓으면 업로드 됩니다.":z?"파일을 업로드하고 있습니다.":"[전자바우처 - 서비스 이용내역] 엑셀 파일을 이곳에 끌어다 놓거나 (드래그 앤 드롭), 클릭하여 업로드하세요."}),(0,t.jsx)(j,{children:"지원 파일 형식: 엑셀(.xlsx)"})]}):(0,t.jsxs)(w,{children:[(0,t.jsxs)(_,{children:[(0,t.jsx)(y,{children:(0,t.jsx)(s.default.News,{size:17,color:"#2264E8"})}),(0,t.jsx)(v,{children:S.name})]}),(0,t.jsxs)(C,{type:"button",onClick:()=>{O(null)},disabled:z,children:["삭제",(0,t.jsx)(o.X,{size:14})]})]}),(0,t.jsx)(I,{type:"button",onClick:()=>{D()},disabled:null===S||z,$processing:z,children:"업로드하기"})]})})]})}),x=l.default.input.withConfig({componentId:"zh__sc-280fbc38-0"})`
  display: none;
`,g=l.default.div.withConfig({componentId:"zh__sc-280fbc38-1"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-self: stretch;
`,m=l.default.div.withConfig({componentId:"zh__sc-280fbc38-2"})`
  cursor: ${({$isUploading:e,$isFileSelected:t})=>e?"default":t?"auto":"pointer"};

  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  align-self: stretch;
  justify-content: center;

  min-width: 0;
  min-height: 136px;
  padding: 24px;
  border: 1px solid ${({$isError:e})=>e?"#ff4d4f":"#4f39f6"};
  border-style: ${({$isDragging:e})=>e?"dashed":"solid"};
  border-radius: 16px;

  background: ${({$isDragging:e,$isError:t,$isUploading:n})=>n?"#f5f6fa":t?"#fff5f5":e?"#f6f3ff":"#fff"};

  &:hover {
    background-color: ${({$isUploading:e,$isError:t,$isFileSelected:n})=>e?"#f5f6fa":t?"#fff5f5":n?"#fff":"#f6f3ff"};
  }

  &:active {
    background-color: ${({$isUploading:e,$isError:t,$isFileSelected:n})=>e?"#f5f6fa":t?"#fff5f5":n?"#fff":"#efeaff"};
  }
`,b=l.default.p.withConfig({componentId:"zh__sc-280fbc38-3"})`
  margin: 0;

  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  color: ${({$isError:e})=>e?"#ff4d4f":"#4f39f6"};
  text-align: center;
`,j=l.default.p.withConfig({componentId:"zh__sc-280fbc38-4"})`
  margin: 0;

  font-size: 12px;
  font-weight: 700;
  font-style: normal;
  line-height: 24px; /* 200% */
  color: #99a1af;
  text-align: center;
`,w=l.default.div.withConfig({componentId:"zh__sc-280fbc38-5"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-end;
  align-self: stretch;
  justify-content: space-between;

  min-height: 136px;
  padding: 16px;
  border-radius: 16px;

  background: #f3f4f6;
`,_=l.default.div.withConfig({componentId:"zh__sc-280fbc38-6"})`
  overflow: hidden;
  display: flex;
  gap: 10px;
  align-items: center;
  align-self: stretch;

  min-width: 0;
`,y=l.default.div.withConfig({componentId:"zh__sc-280fbc38-7"})`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;
  border-radius: 6px;

  background: #fff;
`,v=l.default.div.withConfig({componentId:"zh__sc-280fbc38-8"})`
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;

  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: #0a0a0a;
`,C=l.default.button.withConfig({componentId:"zh__sc-280fbc38-9"})`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;

  padding: 8px;
  border: 1px solid #45464e;
  border-radius: 99px;

  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  color: #0a0a0a;

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
`,I=(0,l.default)(c.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-280fbc38-10"})`
  align-self: stretch;
  height: 36px;
  padding: 8px 16px;
`,z=(0,i.observer)(function(){return(0,t.jsxs)(T,{children:[(0,t.jsx)(u,{}),(0,t.jsxs)(E,{children:[(0,t.jsxs)(k,{children:[(0,t.jsx)(n.default,{sx:{fontSize:16}}),(0,t.jsx)(S,{children:"가장 최근 엑셀 파일 업로드한 날짜"})]}),(0,t.jsx)(O,{})]}),(0,t.jsxs)(E,{children:[(0,t.jsxs)(k,{children:[(0,t.jsx)(n.default,{sx:{fontSize:16}}),(0,t.jsx)(S,{children:"전자바우처에서 엑셀 파일 내려받는 과정"})]}),(0,t.jsx)(O,{children:"⑴ 부정결제 찾기 > ⑵ 전자바우처 내역 검색 > ⑶ 매출 및 정산 > ⑷ 바우처 이용내역 조회(신규) > ⑸ 엑셀 다운로드"})]})]})}),T=l.default.div.withConfig({componentId:"zh__sc-f8534ef-0"})`
  position: sticky;
  z-index: 1;
  bottom: 0;

  display: flex;
  flex-direction: column;
  gap: 8px;
  align-self: stretch;

  margin-top: auto;
  padding: 16px;

  background: #fff;
`,E=l.default.div.withConfig({componentId:"zh__sc-f8534ef-1"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  align-self: stretch;

  padding: 16px;
  border: 1px solid #cdd8ec;
  border-radius: 8px;

  background: #f6f8ff;
`,k=l.default.div.withConfig({componentId:"zh__sc-f8534ef-2"})`
  display: flex;
  gap: 4px;
  align-items: center;
`,S=l.default.div.withConfig({componentId:"zh__sc-f8534ef-3"})`
  font-size: 12px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
`,O=l.default.div.withConfig({componentId:"zh__sc-f8534ef-4"})`
  font-size: 12px;
  font-weight: 400;
  color: #0a0a0a;
`;e.s(["default",0,z],70552)},57738,e=>{"use strict";var t=e.i(9735);e.i(3159);var n=e.i(46907),i=e.i(20276),l=e.i(8179),a=e.i(38803),d=e.i(9454),o=e.i(43174);let r=(0,n.observer)(function(){let{items:e,remove:n}=o.default.ui.layout.toast,a=new Map;e.forEach(e=>{let t=a.get(e.container)??[];t.push(e),a.set(e.container,t)});let d=Array.from(a.entries()).map(([e,t])=>({container:e,items:t}));return(0,t.jsx)(t.Fragment,{children:d.map(({container:e,items:a})=>{let d=(0,t.jsx)(c,{$isFixed:null===e,children:a.map(e=>(0,t.jsxs)(f,{$type:e.type,role:"status","aria-live":"polite",children:[(0,t.jsx)(h,{children:e.message}),(0,t.jsx)(p,{type:"button",onClick:()=>n(e.id),"aria-label":"토스트 닫기",children:(0,t.jsx)(l.X,{size:14})})]},e.id))});return null===e?(0,t.jsx)(s,{children:d},"fallback-container"):(0,i.createPortal)(d,e,`toast-container-${a[0]?.id??"default"}`)})})}),s=a.default.div.withConfig({componentId:"zh__sc-7dcaecab-0"})`
  position: relative;
`,c=a.default.div.withConfig({componentId:"zh__sc-7dcaecab-1"})`
  pointer-events: none;

  position: ${({$isFixed:e})=>e?"fixed":"absolute"};
  z-index: ${d.default.style.numeric.Z_INDEX.TOAST};
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
`,f=a.default.div.withConfig({componentId:"zh__sc-7dcaecab-2"})`
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
`,h=a.default.p.withConfig({componentId:"zh__sc-7dcaecab-3"})`
  flex: 1;

  margin: 0;

  font-size: 16px;
  font-weight: 700;
  line-height: 1.4;
  overflow-wrap: anywhere;
`,p=a.default.button.withConfig({componentId:"zh__sc-7dcaecab-4"})`
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
`;e.s(["default",0,r])},16342,e=>{"use strict";var t=e.i(7744),n=e.i(43174);let i=e=>Array.from(e.dataTransfer?.types??[]).includes("Files");e.s(["default",0,function(){let[e,l]=(0,t.useState)(!1),a=(0,t.useRef)(0),{setIsWindowFileDragging:d}=n.default.ui.layout;return(0,t.useEffect)(()=>{let e=e=>{i(e)&&(a.current+=1,l(!0))},t=e=>{i(e)&&(a.current=Math.max(0,a.current-1),0===a.current&&l(!1))},n=e=>{i(e)&&e.preventDefault()},d=e=>{i(e)&&(e.preventDefault(),a.current=0,l(!1))};return window.addEventListener("dragenter",e),window.addEventListener("dragleave",t),window.addEventListener("dragover",n),window.addEventListener("drop",d),()=>{window.removeEventListener("dragenter",e),window.removeEventListener("dragleave",t),window.removeEventListener("dragover",n),window.removeEventListener("drop",d)}},[]),(0,t.useEffect)(()=>(d(e),()=>{d(!1)}),[e,d]),null}])}]);