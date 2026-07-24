(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,48271,e=>{"use strict";var t=e.i(9735);e.i(3159);var n=e.i(46907),i=e.i(7744),l=e.i(43174),o=e.i(7665),r=e.i(4153);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var d=(0,i.forwardRef)(function(e,t){var n=e.color,l=e.size,o=void 0===l?24:l,r=function(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["color","size"]);return i.default.createElement("svg",a({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},r),i.default.createElement("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),i.default.createElement("circle",{cx:"12",cy:"12",r:"3"}))});function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}d.propTypes={color:r.default.string,size:r.default.oneOfType([r.default.string,r.default.number])},d.displayName="Eye";var c=(0,i.forwardRef)(function(e,t){var n=e.color,l=e.size,o=void 0===l?24:l,r=function(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["color","size"]);return i.default.createElement("svg",s({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},r),i.default.createElement("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"}),i.default.createElement("line",{x1:"1",y1:"1",x2:"23",y2:"23"}))});c.propTypes={color:r.default.string,size:r.default.oneOfType([r.default.string,r.default.number])},c.displayName="EyeOff";var f=e.i(22803),u=e.i(25521);let h=(0,n.observer)(function(){let{loginId:e,setLoginId:n,isNeedLoginId:r,loginIdErrMsg:a,password:s,setPassword:f,isShowPwd:h,setIsShowPwd:k,pwdErrMsg:E,login:T}=l.default.auth.login,[S,O]=(0,i.useState)(!1),$=(0,i.useRef)(null),F=(0,i.useRef)(null);return(0,i.useEffect)(()=>{$.current?.focus()},[]),(0,t.jsx)(p,{children:(0,t.jsxs)(x,{children:[(0,t.jsxs)(g,{children:[(0,t.jsx)(o.default,{src:`${u.default.env.PUBLIC_PATH}/icon/logo-symbol.svg`,width:1,height:1,style:{width:85,height:"auto"},loading:"eager",alt:"Logo"}),(0,t.jsxs)(m,{children:[(0,t.jsx)(b,{children:"자이언 허브"}),(0,t.jsx)(w,{children:"기관용"})]})]}),(0,t.jsxs)(v,{children:[(0,t.jsxs)(y,{$error:r||null!==a,$hasValue:e.length>0,children:[(0,t.jsx)(j,{$error:r||null!==a,children:"아이디"}),(0,t.jsx)(_,{ref:$,value:e,onChange:e=>n(e.target.value),placeholder:"영문 아이디"})]}),null!==a?(0,t.jsx)(z,{children:a}):null,(0,t.jsxs)(y,{$error:null!==E,$hasValue:s.length>0,children:[(0,t.jsx)(j,{$error:null!==E,children:"비밀번호"}),(0,t.jsx)(_,{ref:F,type:h?"text":"password",value:s,onChange:e=>f(e.target.value),onFocus:()=>O(!0),onBlur:()=>O(!1),onKeyDown:e=>{"Enter"===e.key&&T()},placeholder:"영문,숫자,특수문자"}),(0,t.jsx)(C,{type:"button",$active:S,$error:null!==E,onClick:()=>k(!h),onFocus:()=>O(!0),onBlur:()=>O(!1),children:h?(0,t.jsx)(d,{size:24}):(0,t.jsx)(c,{size:24})})]}),null!==E?(0,t.jsx)(z,{children:E}):null,(0,t.jsx)(I,{type:"button",onClick:()=>void T(),children:"로그인"})]})]})})}),p=f.default.main.withConfig({componentId:"zh__sc-9eaa5006-0"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;
`,x=f.default.div.withConfig({componentId:"zh__sc-9eaa5006-1"})`
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
`,v=f.default.div.withConfig({componentId:"zh__sc-9eaa5006-6"})`
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
`,k=(0,n.observer)(({children:e})=>{let{isAuthed:n}=l.default.auth,[o,r]=(0,i.useState)(!0);return((0,i.useEffect)(()=>{let e=!0;return(async()=>{await l.default.auth.restoreSession(),e&&r(!1)})(),()=>{e=!1}},[]),o)?null:(0,t.jsx)(t.Fragment,{children:n?e:(0,t.jsx)(h,{})})});e.s(["default",0,k],48271)},47753,e=>{"use strict";var t=e.i(9735),n=e.i(7744),i=e.i(22803),l=e.i(43174);let o=i.default.div.withConfig({componentId:"zh__sc-914b0b37-0"})`
  position: relative;

  display: flex;

  width: 100%;
  min-height: 100vh;

  background-color: #f9fafb;
`;e.s(["default",0,function({children:e}){let i=(0,n.useRef)(null);return(0,n.useEffect)(()=>(l.default.ui.layout.setAppContainer(i.current),()=>{l.default.ui.layout.setAppContainer(null)}),[]),(0,t.jsx)(o,{ref:i,children:e})}])},15695,56655,69477,e=>{"use strict";var t=e.i(7744),n=e.i(4153);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var l=(0,t.forwardRef)(function(e,n){var l=e.color,o=e.size,r=void 0===o?24:o,a=function(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["color","size"]);return t.default.createElement("svg",i({ref:n,xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:void 0===l?"currentColor":l,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),t.default.createElement("polyline",{points:"20 6 9 17 4 12"}))});function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}l.propTypes={color:n.default.string,size:n.default.oneOfType([n.default.string,n.default.number])},l.displayName="Check",e.s(["Check",0,l],15695);var r=(0,t.forwardRef)(function(e,n){var i=e.color,l=e.size,r=void 0===l?24:l,a=function(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["color","size"]);return t.default.createElement("svg",o({ref:n,xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:void 0===i?"currentColor":i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),t.default.createElement("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),t.default.createElement("circle",{cx:"12",cy:"7",r:"4"}))});function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}r.propTypes={color:n.default.string,size:n.default.oneOfType([n.default.string,n.default.number])},r.displayName="User",e.s(["User",0,r],56655);var d=(0,t.forwardRef)(function(e,n){var i=e.color,l=e.size,o=void 0===l?24:l,r=function(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["color","size"]);return t.default.createElement("svg",a({ref:n,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:void 0===i?"currentColor":i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},r),t.default.createElement("polyline",{points:"23 4 23 10 17 10"}),t.default.createElement("path",{d:"M20.49 15a9 9 0 1 1-2.12-9.36L23 10"}))});d.propTypes={color:n.default.string,size:n.default.oneOfType([n.default.string,n.default.number])},d.displayName="RotateCw",e.s(["RotateCw",0,d],69477)},73060,e=>{"use strict";var t=e.i(9735);e.i(3159);var n=e.i(46907),i=e.i(7744),l=e.i(15695),o=e.i(69477),r=e.i(56655),a=e.i(22803),d=e.i(64954),s=e.i(43174);let c=(0,n.observer)(function(){let{oldestSyncedAt:e,refetchAll:n}=s.default.ui.layout.header,{meNameWithPosition:a,logout:d}=s.default.auth,[c,v]=(0,i.useState)(()=>new Date),[j,y]=(0,i.useState)("idle"),_=(()=>{if(null===e)return null;let t=Math.max(0,Math.floor((c.getTime()-e.getTime())/1e3/60)),n=Math.floor(t/60);return t<60?`오늘 ${t}분 전 최신정보`:`오늘 ${n}시간 전 최신정보`})();(0,i.useEffect)(()=>{if(null===e)return;let t=window.setInterval(()=>{v(new Date)},6e4);return()=>{window.clearInterval(t)}},[e]),(0,i.useEffect)(()=>{if("completed"!==j)return;let e=window.setTimeout(()=>{y("idle")},2e3);return()=>{window.clearTimeout(e)}},[j]);let C=async()=>{y("loading");try{await n(),y("completed")}catch{y("idle")}},z=(()=>{switch(j){case"idle":default:return null;case"loading":return(0,t.jsx)(o.RotateCw,{size:15});case"completed":return(0,t.jsx)(l.Check,{size:20})}})(),I=(()=>{switch(j){case"idle":default:return"최신 정보로 업데이트하기";case"loading":return"업데이트 중";case"completed":return"업데이트 완료"}})(),k=null===e||"idle"!==j;return(0,t.jsxs)(f,{children:[(0,t.jsxs)(u,{children:[null===_?null:(0,t.jsx)(h,{children:_}),(0,t.jsxs)(p,{$status:"loading"===j?"processing":"completed"===j?"success":void 0,onClick:k?void 0:()=>void C(),disabled:k,children:[z,I]})]}),(0,t.jsxs)(x,{children:[null===a?null:(0,t.jsxs)(g,{children:[(0,t.jsx)(m,{children:(0,t.jsx)(r.User,{size:20,color:"#ff6900"})}),(0,t.jsx)(b,{children:a})]}),(0,t.jsx)(w,{onClick:()=>{d()},children:"로그아웃"})]})]})}),f=a.default.div.withConfig({componentId:"zh__sc-bc883191-0"})`
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
`,u=a.default.div.withConfig({componentId:"zh__sc-bc883191-1"})`
  display: flex;
  gap: 12px;
  align-items: center;
  height: 36px;
`,h=a.default.div.withConfig({componentId:"zh__sc-bc883191-2"})`
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px;
  color: #4a5565;
  letter-spacing: -0.076px;
`,p=(0,a.default)(d.default.Button.Outlined).withConfig({componentId:"zh__sc-bc883191-3"})`
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
`,x=a.default.div.withConfig({componentId:"zh__sc-bc883191-4"})`
  display: flex;
  gap: 16px;
  align-items: center;
`,g=a.default.div.withConfig({componentId:"zh__sc-bc883191-5"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,m=a.default.div.withConfig({componentId:"zh__sc-bc883191-6"})`
  display: flex;
  align-items: center;
  justify-content: center;

  aspect-ratio: 1/1;
  width: 32px;
  height: 32px;
  padding: 0 6px;
  border-radius: 999px;

  background: #fff4ed;
`,b=a.default.div.withConfig({componentId:"zh__sc-bc883191-7"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: 20px;
  color: #1c1d22;
`,w=(0,a.default)(d.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-bc883191-8"})`
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
`;e.s(["default",0,c])},79109,e=>{"use strict";var t=e.i(9735);e.i(3159);var n=e.i(46907),i=e.i(7744),l=e.i(43174),o=e.i(26170);let r=(0,n.observer)(function(){let{isLoading:e}=l.default.api,[n,r]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{if(!e)return;let t=window.setTimeout(()=>{r(!0)},1e3);return()=>{r(!1),window.clearTimeout(t)}},[e]),e&&n?(0,t.jsx)(o.default,{isLoading:!0,children:null}):null});e.s(["default",0,r])},8179,e=>{"use strict";var t=e.i(7744),n=e.i(4153);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var l=(0,t.forwardRef)(function(e,n){var l=e.color,o=e.size,r=void 0===o?24:o,a=function(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["color","size"]);return t.default.createElement("svg",i({ref:n,xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:void 0===l?"currentColor":l,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),t.default.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),t.default.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"}))});l.propTypes={color:n.default.string,size:n.default.oneOfType([n.default.string,n.default.number])},l.displayName="X",e.s(["X",0,l],8179)},55357,e=>{"use strict";var t=e.i(9735);e.i(3159);var n=e.i(46907),i=e.i(7744),l=e.i(22803),o=e.i(43174),r=e.i(26170),a=e.i(33261),d=e.i(15695),s=e.i(64954);let c=(0,n.observer)(function(){let e=(0,a.useRouter)(),{clientDraft:n,isSaving:i,resetToUploadStep:l,saveClientDraft:r}=o.default.modal.clientCreate,{currentServiceType:s,setSelectedClientId:c}=o.default.client.info.byClient,u=async()=>{let t=n?.serviceType,i=await r();if(null===i)return;let l=i.serviceType??t??null;if(null!==l){s===l&&o.default.data.contract.list.refetch();let t=(()=>{switch(l){case"MEAL":return"meal";case"NUTRITION":return"nutrition";default:return"unknown"}})();e.push(`/client/info/by-client/${t}/basic`)}"string"==typeof i.clientId&&i.clientId.length>0&&c(i.clientId)};return(0,t.jsxs)(f,{children:[(0,t.jsx)(h,{disabled:!n||i,onClick:l,children:"다시 업로드하기"}),(0,t.jsxs)(p,{disabled:!n||i,onClick:()=>void u(),children:[(0,t.jsx)(d.Check,{size:16}),"최종확인 및 저장"]})]})}),f=l.default.div.withConfig({componentId:"zh__sc-759c17e6-0"})`
  display: flex;
  gap: 16px;
  align-items: center;
  align-self: stretch;
  justify-content: flex-end;

  padding: 16px;
  border-top: 1px solid #e5e7eb;
`,u=l.css`
  display: flex;
  gap: 10px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,h=(0,l.default)(s.default.Button.Outlined).withConfig({componentId:"zh__sc-759c17e6-1"})`
  ${u}
`,p=(0,l.default)(s.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-759c17e6-2"})`
  ${u}
`,x=function(e,t=!0){(0,i.useEffect)(()=>{if(!t)return;let n=t=>{var n;if((n=t.target)instanceof HTMLElement&&(n.isContentEditable||null!==n.closest("input, textarea, [contenteditable]")))return;let i=(e=>{if(null===e)return[];let t=Array.from(e.files);return t.length>0?t:Array.from(e.items).filter(e=>"file"===e.kind).map(e=>e.getAsFile()).filter(e=>null!==e)})(t.clipboardData);0!==i.length&&(t.preventDefault(),e(i))};return window.addEventListener("paste",n),()=>{window.removeEventListener("paste",n)}},[t,e])};var g=e.i(4153);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var b=(0,i.forwardRef)(function(e,t){var n=e.color,l=e.size,o=void 0===l?24:l,r=function(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["color","size"]);return i.default.createElement("svg",m({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},r),i.default.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),i.default.createElement("polyline",{points:"12 5 19 12 12 19"}))});b.propTypes={color:g.default.string,size:g.default.oneOfType([g.default.string,g.default.number])},b.displayName="ArrowRight";let w=(0,n.observer)(function(){let{analyzeSelectedFile:e,isAnalyzing:n,selectedFile:i}=o.default.modal.clientCreate;return(0,t.jsx)(v,{children:(0,t.jsxs)(j,{disabled:null===i||n,onClick:()=>{e()},children:["분석 시작",(0,t.jsx)(b,{size:16})]})})}),v=l.default.div.withConfig({componentId:"zh__sc-d7f6cfb5-0"})`
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
`;var y=e.i(8179),_=e.i(98273),C=e.i(25521);let{FILE_EXTENSION_WHITELIST_BY_GROUP:z}=C.default.file,I=(0,n.observer)(function(){var e;let n,{clearSelectedFile:i,selectedFile:l,isAnalyzing:r}=o.default.modal.clientCreate;if(null===l)return null;let a=-1===(n=(e=l.name).lastIndexOf("."))?"":e.slice(n).toLowerCase();return(0,t.jsx)(k,{children:(0,t.jsxs)(E,{children:[(0,t.jsxs)(T,{children:[(0,t.jsx)(S,{children:z.IMAGE.some(e=>e===a)?(0,t.jsx)(_.default.Photo,{size:17,color:"#FA8E43"}):z.AUDIO.some(e=>e===a)?(0,t.jsx)(_.default.SpeechToText,{size:17,color:"#A855F7"}):z.DOCUMENT.some(e=>e===a)?(0,t.jsx)(_.default.News,{size:17,color:"#2264E8"}):null}),(0,t.jsx)(O,{children:(0,t.jsx)($,{children:l.name})})]}),(0,t.jsxs)(F,{onClick:i,disabled:r,children:["삭제",(0,t.jsx)(y.X,{size:16})]})]},`${l.name}-${l.size}-${l.lastModified}`)})}),k=l.default.div.withConfig({componentId:"zh__sc-8227d071-0"})`
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
`,O=l.default.div.withConfig({componentId:"zh__sc-8227d071-4"})`
  display: flex;
  align-items: center;
  align-self: stretch;

  width: 196px;
  height: 40px;

  color: #0a0a0a;
`,$=l.default.div.withConfig({componentId:"zh__sc-8227d071-5"})`
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #0a0a0a;
`,F=l.default.button.withConfig({componentId:"zh__sc-8227d071-6"})`
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
`;function A(){return(A=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var N=(0,i.forwardRef)(function(e,t){var n=e.color,l=e.size,o=void 0===l?24:l,r=function(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["color","size"]);return i.default.createElement("svg",A({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},r),i.default.createElement("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),i.default.createElement("polyline",{points:"17 8 12 3 7 8"}),i.default.createElement("line",{x1:"12",y1:"3",x2:"12",y2:"15"}))});N.propTypes={color:g.default.string,size:g.default.oneOfType([g.default.string,g.default.number])},N.displayName="Upload";var L=e.i(9454);function P(){let[e,n]=(0,i.useState)(0);return(0,i.useEffect)(()=>{let e=performance.now(),t=0,i=l=>{n(Math.min(100*(1-Math.exp(-((l-e)/1e3*.05))),98)),t=window.requestAnimationFrame(i)};return t=window.requestAnimationFrame(i),()=>{window.cancelAnimationFrame(t)}},[]),(0,t.jsx)(R,{children:(0,t.jsx)(D,{$progress:e})})}let R=l.default.div.withConfig({componentId:"zh__sc-aa649b54-0"})`
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
`,M=(0,n.observer)(function(){let{isWindowFileDragging:e}=o.default.ui.layout,{selectedFile:n,isError:i,isAnalyzing:l,abortAnalyze:r}=o.default.modal.clientCreate,a=i?"지원하지 않는 파일 형식입니다.":e?"파일을 여기에 놓으면 업로드 됩니다.":l?"업로드한 파일을 분석하고 있습니다.":"이곳에 파일을 끌어다 놓거나 (드래그 앤 드롭), 클릭하여 업로드하세요.",d=null===n||l?"지원 파일 형식: 사진 이미지, 서류, 음성 녹음":"새 파일을 업로드하면 기존 파일이 교체됩니다.";return(0,t.jsxs)(W,{children:[null===n&&!i&&(0,t.jsx)(B,{children:(0,t.jsx)(N,{size:26,color:U[100]})}),(0,t.jsxs)(V,{children:[(0,t.jsx)(H,{$isError:i,children:a}),(0,t.jsx)(Y,{children:d})]}),l&&(0,t.jsx)(P,{}),l&&(0,t.jsx)(X,{onClick:r,children:"중단하기"})]})}),{PRIMARY:U}=L.default.style.color,W=l.default.div.withConfig({componentId:"zh__sc-47e9a3b3-0"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  align-self: stretch;
  justify-content: center;
`,B=l.default.div.withConfig({componentId:"zh__sc-47e9a3b3-1"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;
`,V=l.default.div.withConfig({componentId:"zh__sc-47e9a3b3-2"})`
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
`,Y=l.default.div.withConfig({componentId:"zh__sc-47e9a3b3-4"})`
  font-size: 14px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 142.857% */
  color: #99a1af;
`,X=(0,l.default)(s.default.Button.Outlined).withConfig({componentId:"zh__sc-47e9a3b3-5"})`
  display: flex;
  gap: 10px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,G=(0,n.observer)(function(){let{isWindowFileDragging:e}=o.default.ui.layout,{acceptFileTypes:n,setSelectedFile:l,selectedFile:r,isError:a}=o.default.modal.clientCreate,d=(0,i.useRef)(null);return x(e=>{if(0===e.length)return;let t=e[0];void 0!==t&&l(t)}),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(K,{ref:d,type:"file",accept:n,onChange:e=>{let t=Array.from(e.target.files??[]);if(0===t.length)return;let n=t[0];void 0!==n&&(l(n),e.target.value="")}}),(0,t.jsxs)(q,{$isWindowFileDragging:e,onDragOver:e=>{e.preventDefault()},onDrop:e=>{e.preventDefault();let t=Array.from(e.dataTransfer.files);if(0===t.length)return;let n=t[0];void 0!==n&&l(n)},onClick:e=>{e.target instanceof HTMLElement&&(e.target.closest("button")||d.current?.click())},$isError:a,children:[null!==r&&(0,t.jsx)(I,{}),(0,t.jsx)(M,{}),(0,t.jsx)(w,{})]})]})}),K=l.default.input.withConfig({componentId:"zh__sc-35541df3-0"})`
  display: none;
`,q=l.default.div.withConfig({componentId:"zh__sc-35541df3-1"})`
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
`,J=(0,n.observer)(function(){let{analyzedFile:e}=o.default.modal.clientCreate;return(0,t.jsxs)(Q,{$flex1:null===e,children:[null===e&&(0,t.jsx)(Z,{children:"전자바우처 캡쳐 화면을 아래에 업로드하고, 다음 버튼을 클릭하세요."}),(0,t.jsx)(G,{})]})}),Q=l.default.div.withConfig({componentId:"zh__sc-8fa7e82c-0"})`
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
`,Z=l.default.div.withConfig({componentId:"zh__sc-8fa7e82c-1"})`
  font-size: 18px;
  font-weight: 700;
  font-style: normal;
  line-height: 24px; /* 133.333% */
  color: #101828;
`;var ee=e.i(9670);let{FILE_EXTENSION_WHITELIST_BY_GROUP:et}=C.default.file,en=(0,n.observer)(function(){var e;let n,{analyzedFile:l}=o.default.modal.clientCreate,{ref:r,fire:a}=(0,ee.default)();if((0,i.useEffect)(()=>{null!==l&&a()},[l,a]),null===l)return null;let d=-1===(n=(e=l.name).lastIndexOf("."))?"":e.slice(n).toLowerCase();return(0,t.jsxs)(ei,{ref:r,children:[(0,t.jsxs)(el,{children:[(0,t.jsxs)(eo,{children:[(0,t.jsx)(_.default.FindInPage,{size:18}),"AI 문서 인식 완료"]}),(0,t.jsxs)(er,{children:["업로드된 서류들에서 정보를 성공적으로 추출했습니다. ",(0,t.jsx)("br",{}),"우측의 [이용자 기본 정보]가 올바르게 연동되었는지 확인 후, [최종 확인] 버튼을 눌러주세요."]})]}),(0,t.jsxs)(ea,{children:[(0,t.jsxs)(ed,{children:[(0,t.jsx)(_.default.CheckCircle,{size:18}),"분석 완료된 첨부 서류 (1건)"]}),(0,t.jsx)(es,{children:(0,t.jsxs)(ec,{children:[(0,t.jsxs)(ef,{children:[(0,t.jsx)(eu,{children:et.IMAGE.some(e=>e===d)?(0,t.jsx)(_.default.Photo,{size:17,color:"#FA8E43"}):et.AUDIO.some(e=>e===d)?(0,t.jsx)(_.default.SpeechToText,{size:17,color:"#A855F7"}):et.DOCUMENT.some(e=>e===d)?(0,t.jsx)(_.default.News,{size:17,color:"#2264E8"}):null}),(0,t.jsx)(eh,{children:(0,t.jsx)(ep,{children:l.name})})]}),(0,t.jsx)(ex,{children:"추출 완료"})]},`${l.name}-${l.size}-${l.lastModified}`)})]})]})}),ei=l.default.div.withConfig({componentId:"zh__sc-a40fcee8-0"})`
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
`,el=l.default.div.withConfig({componentId:"zh__sc-a40fcee8-1"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  align-self: stretch;
`,eo=l.default.div.withConfig({componentId:"zh__sc-a40fcee8-2"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #0a0a0a;
`,er=l.default.div.withConfig({componentId:"zh__sc-a40fcee8-3"})`
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
`,ed=l.default.div.withConfig({componentId:"zh__sc-a40fcee8-5"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #0a0a0a;
`,es=l.default.div.withConfig({componentId:"zh__sc-a40fcee8-6"})`
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
`,ec=l.default.div.withConfig({componentId:"zh__sc-a40fcee8-7"})`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 355px;
  height: 64px;
  padding: 12px 16px;
  border-radius: 8px;

  background: #f6f8fb;
`,ef=l.default.div.withConfig({componentId:"zh__sc-a40fcee8-8"})`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`,eu=l.default.div.withConfig({componentId:"zh__sc-a40fcee8-9"})`
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
`,ep=l.default.div.withConfig({componentId:"zh__sc-a40fcee8-11"})`
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #0a0a0a;
`,ex=l.default.div.withConfig({componentId:"zh__sc-a40fcee8-12"})`
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
`,eg=(0,n.observer)(function(){let{analyzedFile:e}=o.default.modal.clientCreate;return(0,t.jsxs)(em,{children:[null!==e&&(0,t.jsx)(en,{}),(0,t.jsx)(J,{})]})}),em=l.default.div.withConfig({componentId:"zh__sc-a077b87a-0"})`
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
`;var eb=e.i(25644),ew=e.i(65782),ev=e.i(56655),ej=e.i(21771),ey=e.i(43090);let e_=e=>{let t=e.trim().match(/^(\d{6})-?(\d)(\d{0,6})$/);if(null===t)return"unknown";switch(t[2]){case"1":case"3":return"MALE";case"2":case"4":return"FEMALE";default:return"unknown"}},eC=e=>{switch(e){case"MALE":return"남성";case"FEMALE":return"여성";case"unknown":return""}},ez=(0,n.observer)(function(){let{clientDraft:e,ocrDraft:n,updateClientDraft:i,getClientDraftFieldError:l,clearClientDraftFieldError:r}=o.default.modal.clientCreate;if(null===e)return null;let a=e.clientName??"",d=e.residentRegistrationNumber??"",c=e.businessType??"DAY_CARE",f=e.serviceType??"MEAL",u=e.contractStatus??"ACTIVE",h=e.serviceGrade??1,p=e.contractStartDate??"",x=e.serviceStartDate??"",g=e.serviceEndDate??"",m=e.contact??"",b=e.phoneNumber??"",w=e.address??"",v=e.postCode??"",j=e.addressDetail??"",y=e_(d),_="MEAL"===f?"식사관리 서비스":"영양관리 서비스",C="MEAL"===f?"500901":"500401",z=(e,t)=>""===l(e)?t:{...t,borderColor:"#ff4d4f",background:"#fff5f5"},I=e=>{let n=l(e);return""===n?null:(0,t.jsx)(eS,{children:n})},k=(e,t)=>{let n=String(t??"").trim();return""!==n&&String(e).trim()===n},E=(e,t)=>{ej.default.is(e)&&i(n=>t(n,e))};return(0,t.jsxs)(eI,{children:[(0,t.jsxs)(ek,{children:[(0,t.jsxs)(eE,{children:[(0,t.jsx)(eT,{children:"성명"}),(0,t.jsx)(s.default.Input.Text,{$autoFilled:k(a,n?.clientName??""),style:z("clientName",eO),value:a,onChange:e=>{r("clientName"),i(t=>({...t,clientName:e.target.value.trim()}))}}),I("clientName")]}),(0,t.jsxs)(eE,{children:[(0,t.jsx)(eT,{children:"주민등록번호"}),(0,t.jsx)(s.default.Input.Text,{$autoFilled:k(d,n?.residentRegistrationNumber??""),style:z("residentRegistrationNumber",eO),value:d,onChange:e=>{var t;let n,l=e.target.value,o=e.currentTarget.selectionStart??l.length,a=(l.slice(0,o).match(/\d/g)??[]).length;r("residentRegistrationNumber");let d=ey.default.format(l);i(e=>({...e,residentRegistrationNumber:d})),t=e.currentTarget,n=((e,t)=>{if(t<=0)return 0;let n=0;for(let i=0;i<e.length;i+=1){let l=e[i];if(void 0!==l&&/\d/.test(l)&&(n+=1)===t)return i+1}return e.length})(d,a),"-"===d[n]&&(n+=1),requestAnimationFrame(()=>{document.activeElement===t&&t.setSelectionRange(n,n)})}}),I("residentRegistrationNumber")]}),(0,t.jsxs)(eE,{children:[(0,t.jsx)(eT,{children:"성별"}),(0,t.jsx)(s.default.Input.Text,{$autoFilled:k(eC(y),eC(e_(n?.residentRegistrationNumber??""))),style:eO,value:eC(y),readOnly:!0})]})]}),(0,t.jsxs)(ek,{children:[(0,t.jsxs)(eE,{children:[(0,t.jsx)(eT,{children:"사업구분"}),(0,t.jsx)(s.default.Input.Select,{$autoFilled:!0,style:eO,value:c,onChange:e=>{let t=e.target.value;i(e=>({...e,businessType:"DAY_CARE"===t?"DAY_CARE":e.businessType}))},children:(0,t.jsx)("option",{value:"DAY_CARE",children:"일상돌봄서비스"})})]}),(0,t.jsxs)(eE,{children:[(0,t.jsx)(eT,{children:"서비스명"}),(0,t.jsxs)(s.default.Input.Select,{$autoFilled:k(f,n?.serviceType??""),style:eO,value:_,onChange:e=>{let t=e.target.value;i(e=>({...e,serviceType:"식사관리 서비스"===t?"MEAL":"NUTRITION"}))},children:[(0,t.jsx)("option",{value:"식사관리 서비스",children:"식사관리 서비스"}),(0,t.jsx)("option",{value:"영양관리 서비스",children:"영양관리 서비스"})]})]}),(0,t.jsxs)(eE,{children:[(0,t.jsx)(eT,{children:"사업코드"}),(0,t.jsx)(s.default.Input.Text,{$autoFilled:k(f,n?.serviceType??""),style:eO,value:C,readOnly:!0})]})]}),(0,t.jsxs)(ek,{children:[(0,t.jsxs)(eE,{$width:191,children:[(0,t.jsx)(eT,{children:"계약상태"}),(0,t.jsxs)(s.default.Input.Select,{$autoFilled:k(u,n?.contractStatus??""),style:eO,value:u,onChange:e=>{let t=e.target.value;("ACTIVE"===t||"TERMINATED"===t)&&i(e=>({...e,contractStatus:t}))},children:[(0,t.jsx)("option",{value:"ACTIVE",children:"계약중"}),(0,t.jsx)("option",{value:"TERMINATED",children:"해지"})]})]}),(0,t.jsxs)(eE,{$width:191,children:[(0,t.jsx)(eT,{children:"등급"}),(0,t.jsxs)(s.default.Input.Select,{$autoFilled:k(h,n?.serviceGrade??""),style:eO,value:String(h),onChange:e=>{let t=Number(e.target.value);switch(t){case 1:case 2:case 3:case 4:i(e=>({...e,serviceGrade:t}));return;default:return}},children:[(0,t.jsx)("option",{value:"1",children:"1등급"}),(0,t.jsx)("option",{value:"2",children:"2등급"}),(0,t.jsx)("option",{value:"3",children:"3등급"}),(0,t.jsx)("option",{value:"4",children:"4등급"})]})]})]}),(0,t.jsxs)(ek,{children:[(0,t.jsxs)(eE,{$width:191,children:[(0,t.jsx)(eT,{children:"계약 시작일"}),(0,t.jsx)(s.default.Input.Date,{$autoFilled:k(p,n?.contractStartDate??""),style:z("contractStartDate",e$),value:p,onChange:e=>{r("contractStartDate"),E(e,(e,t)=>({...e,contractStartDate:t}))},disableHolidaySelection:!0}),I("contractStartDate")]}),(0,t.jsxs)(eE,{$width:191,children:[(0,t.jsx)(eT,{children:"계약 만료일"}),(0,t.jsx)(s.default.Input.Date,{$autoFilled:k(g,n?.serviceEndDate??""),style:e$,value:g,readOnly:!0})]})]}),(0,t.jsxs)(ek,{children:[(0,t.jsxs)(eE,{$width:191,children:[(0,t.jsx)(eT,{children:"서비스 시작일"}),(0,t.jsx)(s.default.Input.Date,{$autoFilled:k(x,n?.serviceStartDate??""),style:z("serviceStartDate",e$),value:x,onChange:e=>{r("serviceStartDate"),E(e,(e,t)=>{let n=(e=>{let[t,n,i]=e.split("-"),l=new Date(Number(t),Number(n)-1,Number(i));l.setFullYear(l.getFullYear()+1),l.setDate(l.getDate()-1);let[o,r]=ej.default.create(l.getFullYear(),l.getMonth()+1,l.getDate());return null!==o||null===r?null:r})(t);return null===n?e:{...e,serviceStartDate:t,serviceEndDate:n}})}}),I("serviceStartDate")]}),(0,t.jsxs)(eE,{$width:191,children:[(0,t.jsx)(eT,{children:"서비스 만료일"}),(0,t.jsx)(s.default.Input.Date,{$autoFilled:k(g,n?.serviceEndDate??""),style:z("serviceEndDate",e$),value:g,onChange:e=>{r("serviceEndDate"),E(e,(e,t)=>({...e,serviceEndDate:t}))}}),I("serviceEndDate")]})]}),(0,t.jsxs)(ek,{children:[(0,t.jsxs)(eE,{children:[(0,t.jsx)(eT,{children:"휴대폰"}),(0,t.jsx)(s.default.Input.Phone,{$autoFilled:k(b,n?.phoneNumber??""),style:z("phoneNumber",eO),value:b,onChange:e=>{r("phoneNumber"),i(t=>({...t,phoneNumber:e}))}}),I("phoneNumber")]}),(0,t.jsxs)(eE,{children:[(0,t.jsx)(eT,{children:"연락처"}),(0,t.jsx)(s.default.Input.Contact,{$autoFilled:k(m,n?.contact??""),style:z("contact",eO),value:m,onChange:e=>{r("contact"),i(t=>({...t,contact:e}))}}),I("contact")]})]}),(0,t.jsxs)(ek,{children:[(0,t.jsxs)(eE,{children:[(0,t.jsx)(eT,{children:"주소"}),(0,t.jsx)(s.default.Input.Text,{$autoFilled:k(w,n?.address??""),style:z("address",eO),value:w,onChange:e=>{r("address"),i(t=>({...t,address:e.target.value}))}}),I("address")]}),(0,t.jsxs)(eE,{$width:191,children:[(0,t.jsx)(eT,{children:"우편번호"}),(0,t.jsx)(s.default.Input.PostCode,{$autoFilled:k(v,n?.postCode??""),style:z("postCode",eO),value:v,onChange:e=>{r("postCode"),i(t=>({...t,postCode:e}))}}),I("postCode")]})]}),(0,t.jsx)(ek,{children:(0,t.jsxs)(eE,{children:[(0,t.jsx)(eT,{children:"상세주소"}),(0,t.jsx)(s.default.Input.Text,{$autoFilled:k(j,n?.addressDetail??""),style:z("addressDetail",eO),value:j,onChange:e=>{r("addressDetail"),i(t=>({...t,addressDetail:e.target.value}))}}),I("addressDetail")]})})]})}),eI=l.default.div.withConfig({componentId:"zh__sc-27162cff-0"})`
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
`,eO={display:"flex",padding:"4px 16px",alignItems:"center",gap:"10px",flex:"1 0 0",alignSelf:"stretch",fontSize:16},e$={...eO,height:36,lineHeight:"36px"},eF=(0,n.observer)(function(){let{clientDraft:e}=o.default.modal.clientCreate,n=function(e){let t=e.trim().match(/^(\d{6})-?(\d{1})(\d{0,6})$/);if(null===t)return"unknown";let n=t[2];return"1"===n||"3"===n?"male":"2"===n||"4"===n?"female":"unknown"}(e?.residentRegistrationNumber??"");return(0,t.jsxs)(eA,{children:[(0,t.jsx)(eN,{children:"이용자 기본 정보"}),(0,t.jsxs)(eL,{children:[(0,t.jsxs)(eP,{children:[(0,t.jsx)(eR,{children:"사진"}),(0,t.jsx)(eD,{children:"male"===n?(0,t.jsx)(eb.default,{sx:{fontSize:66},htmlColor:"#C6D2FF"}):"female"===n?(0,t.jsx)(ew.default,{sx:{fontSize:66},htmlColor:"#C6D2FF"}):(0,t.jsx)(ev.User,{size:66,color:"#C6D2FF"})})]}),(0,t.jsx)(ez,{})]})]})}),eA=l.default.div.withConfig({componentId:"zh__sc-52495c18-0"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;

  padding: 32px 24px;

  background: #fff;
  box-shadow: -8px 0 8px 0 rgb(0 0 0 / 8%);
`,eN=l.default.div.withConfig({componentId:"zh__sc-52495c18-1"})`
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
  text-align: center;
`,eL=l.default.div.withConfig({componentId:"zh__sc-52495c18-2"})`
  display: flex;
  gap: 24px;
  align-items: flex-start;
  align-self: stretch;
`,eP=l.default.div.withConfig({componentId:"zh__sc-52495c18-3"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
`,eR=l.default.div.withConfig({componentId:"zh__sc-52495c18-4"})`
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
`,eD=l.default.div.withConfig({componentId:"zh__sc-52495c18-5"})`
  display: flex;
  align-items: center;
  justify-content: center;

  aspect-ratio: 1/1;
  width: 120px;
  height: 120px;
  border-radius: 4px;

  background: #f4f2ff;
`,eM=(0,n.observer)(function(){let{clientDraft:e}=o.default.modal.clientCreate;return(0,t.jsxs)(eU,{children:[(0,t.jsx)(eg,{}),e&&(0,t.jsx)(eF,{})]})}),eU=l.default.div.withConfig({componentId:"zh__sc-cfc6108c-0"})`
  overflow-y: auto;
  display: flex;
  align-self: stretch;
  justify-content: center;

  min-height: 830px;
  max-height: 830px;

  background: #f9fafb;
`;function eW(){let{close:e}=o.default.modal.clientCreate;return(0,t.jsxs)(eB,{children:[(0,t.jsx)(eV,{children:"신규 이용자 등록하기"}),(0,t.jsxs)(eH,{onClick:e,children:[(0,t.jsx)(y.X,{size:16}),"닫기"]})]})}let eB=l.default.div.withConfig({componentId:"zh__sc-f50634fa-0"})`
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
`,eV=l.default.div.withConfig({componentId:"zh__sc-f50634fa-1"})`
  font-size: 18px;
  font-weight: 700;
  font-style: normal;
  line-height: 28px; /* 155.556% */
  color: #101828;
  letter-spacing: -0.439px;
`,eH=(0,l.default)(s.default.Button.Outlined).withConfig({componentId:"zh__sc-f50634fa-2"})`
  display: flex;
  gap: 6px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,eY=(0,n.observer)(function(){let e=o.default.modal.clientCreate,{status:n}=e,l=(0,i.useRef)(null);return((0,i.useEffect)(()=>"ready"!==n?void e.setToastContainer(null):(e.setToastContainer(l.current),()=>{e.setToastContainer(null)}),[e,n]),"ready"!==n)?null:(0,t.jsx)(r.default,{children:(0,t.jsxs)(eX,{ref:l,children:[(0,t.jsx)(eW,{}),(0,t.jsx)(eM,{}),(0,t.jsx)(c,{})]})})}),eX=l.default.div.withConfig({componentId:"zh__sc-21fa7296-0"})`
  position: relative;

  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  align-items: center;

  width: 1712px;
  min-width: 1712px;
  border-radius: 8px;

  background: #fff;
`;function eG(){return(eG=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var eK=(0,i.forwardRef)(function(e,t){var n=e.color,l=e.size,o=void 0===l?24:l,r=function(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["color","size"]);return i.default.createElement("svg",eG({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},r),i.default.createElement("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),i.default.createElement("polyline",{points:"19 12 12 19 5 12"}))});function eq(){return(eq=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}eK.propTypes={color:g.default.string,size:g.default.oneOfType([g.default.string,g.default.number])},eK.displayName="ArrowDown";var eJ=(0,i.forwardRef)(function(e,t){var n=e.color,l=e.size,o=void 0===l?24:l,r=function(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["color","size"]);return i.default.createElement("svg",eq({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},r),i.default.createElement("line",{x1:"12",y1:"19",x2:"12",y2:"5"}),i.default.createElement("polyline",{points:"5 12 12 5 19 12"}))});eJ.propTypes={color:g.default.string,size:g.default.oneOfType([g.default.string,g.default.number])},eJ.displayName="ArrowUp";var eQ=e.i(26546),eZ=e.i(71723),e0=e.i(25699),e1=e.i(28124);let e2=function({isOpen:e,actionType:n,isProcessing:i=!1,onClickSecondary:l,onClickPrimary:o}){if(!e)return null;let r="move"===n,a=r?"이동":"닫기";return(0,t.jsx)(e4,{children:(0,t.jsxs)(e6,{children:[(0,t.jsxs)(e3,{children:[(0,t.jsx)(e5,{children:"수정된 정보가 있습니다."}),(0,t.jsxs)(e8,{children:["지금 화면을 나가면 수정하신 내용이 저장되지 않습니다.",(0,t.jsx)("br",{}),`[저장하고 ${a}]${r?"을":"를"} 누르면 정보가 안전하게 저장됩니다.`]})]}),(0,t.jsxs)(e9,{children:[(0,t.jsx)(e7,{type:"button",disabled:i,onClick:l,children:`저장없이 ${r?"이동":"나가기"}`}),(0,t.jsx)(te,{type:"button",disabled:i,onClick:o,children:`저장하고 ${a}`})]})]})})},e4=l.default.div.withConfig({componentId:"zh__sc-22c1af4d-0"})`
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
`,tr=(0,l.default)(s.default.Button.Outlined).withConfig({componentId:"zh__sc-67d06bce-2"})`
  ${to}
`,ta=l.default.div.withConfig({componentId:"zh__sc-67d06bce-3"})`
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
`,tf=[{key:"state1",index:"01",label:"청구 사유를 선택해주세요.",options:["option1","option2","option3","option4","option5","option6","option7"],optionLabels:{option1:"카드 미소지",option2:"카드 분실",option3:"카드 파손",option4:"시스템 오류",option5:"단말기 오류",option6:"사망",option7:"수술"}},{key:"state2",index:"02",label:"처리 현황을 선택해주세요.",options:["option1","option2"],optionLabels:{option1:"계약 종결",option2:"서비스 종료"}}],tu={state1:null,state2:null},th={option1:"대상자 바우처 카드 미소지로 인하여 소급결제 진행하려 하였으나",option2:"대상자 바우처 카드 분실로 인하여 소급결제 진행하려 하였으나",option3:"대상자 바우처 카드 파손으로 인하여 소급결제 진행하려 하였으나",option4:"결제 시스템 오류로 인하여 소급결제 진행하려 하였으나",option5:"단말기 오류로 인하여 소급결제 진행하려 하였으나",option6:"대상자 사망으로 인하여 소급결제 진행하려 하였으나",option7:"대상자 수술로 인하여 소급결제 진행하려 하였으나"},tp={option1:"일상돌봄 식사영양서비스 계약종결됨에 따라 지원금이 소멸하여",option2:"일상돌봄 식사영양서비스 종료됨에 따라 지원금이 소멸하여"},tx=(e,t)=>e[t]??"",tg=(e,t,n)=>Math.min(n,Math.max(t,e)),tm=["boxSizing","fontFamily","fontSize","fontWeight","fontStyle","lineHeight","letterSpacing","textTransform","textIndent","textDecoration","wordSpacing","tabSize","paddingTop","paddingRight","paddingBottom","paddingLeft"],tb=(e,t,n,i=.08)=>{let l=tg(n,0,t.length),o=document.createElement("div"),r=document.createElement("span"),a=window.getComputedStyle(e);o.style.position="absolute",o.style.left="-99999px",o.style.top="0",o.style.visibility="hidden",o.style.pointerEvents="none",o.style.width=`${e.clientWidth}px`,o.style.whiteSpace="pre-wrap",o.style.overflowWrap="break-word",o.style.wordBreak="break-word",tm.forEach(e=>{o.style[e]=a[e]}),o.textContent=t.slice(0,l),r.textContent="​",o.appendChild(r),document.body.appendChild(o);let d=r.offsetTop;o.remove();let s=Math.max(e.scrollHeight-e.clientHeight,0);return tg(d-e.clientHeight*i,0,s)},tw=l.keyframes`
	from {
		transform: translateX(100%);
		opacity: 0;
	}

	to {
		transform: translateX(0);
		opacity: 1;
	}
`,tv=(0,l.default)(ti).withConfig({componentId:"zh__sc-1f96f242-0"})`
  will-change: transform, opacity;
  animation: ${tw} 0.28s cubic-bezier(0.32, 0.72, 0, 1) forwards;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,tj=l.default.div.withConfig({componentId:"zh__sc-1f96f242-1"})`
  width: 36px;
  height: 36px;
`,ty=l.default.div.withConfig({componentId:"zh__sc-1f96f242-2"})`
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
`,tO=l.default.button.withConfig({componentId:"zh__sc-1f96f242-11"})`
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
`,t$=l.default.div.withConfig({componentId:"zh__sc-1f96f242-12"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;
`,tF=l.default.div.withConfig({componentId:"zh__sc-1f96f242-13"})`
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
`,tN=l.default.div.withConfig({componentId:"zh__sc-1f96f242-15"})`
  display: flex;
  gap: 10px;
  align-items: center;
  align-self: stretch;
`,tL=(0,l.default)(s.default.Button.Outlined).withConfig({componentId:"zh__sc-1f96f242-16"})`
  display: flex;
  gap: 4px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,tP=(0,l.default)(s.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-1f96f242-17"})`
  display: flex;
  flex: 1 0 0;
  gap: 4px;
  align-items: center;
  justify-content: center;

  height: 36px;
  padding: 8px 16px;
`,tR=[{key:"state1",index:"01",label:"영양 상태 — 이용자의 영양 변화 정도를 선택해주세요.",sentences:{positive:"☐ 영양 상태: 정기적이고 꾸준한 영양식 식사 제공 및 방문 관리를 밀착 모니터링한 결과, 영양 체크리스트 점수가 서비스 참여 전 대비 크게 향상되었으며 안색과 전반적인 신체 기력 상태가 매우 양호하게 개선되었습니다.",neutral:"☐ 영양 상태: 현재 제공받고 있는 모든 건강 식단에 비교적 안정적이고 매우 높은 순응도를 보이고 있으며, 저체중이나 기타 체중 감소 등의 기왕 병력 이전의 안정적인 건강 수치를 계속해서 유지하고 있습니다.",negative:"☐ 영양 상태: 최근 들어 식사 흡수 기능 저하를 자주 호소하시며 일일 섭취하는 식사량이 전보다 감소하셨음이 확인되었습니다. 식사 조절과 아울러 이에 대한 의료적 치료 등 병원의 조기 개입이 필요합니다."}},{key:"state2",index:"02",label:"식욕 상태 — 이용자의 식욕 변화 정도를 선택해주세요.",sentences:{positive:"☐ 식욕 상태: 식사 시간에 맞춰 스스로 음식을 찾으실 정도로 식욕이 크게 왕성해지셨으며, 제공되는 반찬과 밥을 남김없이 골고루 섭취하시어 전반적인 음식 섭취 순응도가 매우 높게 나타납니다.",neutral:"☐ 식욕 상태: 식사량이나 음식을 대하는 태도에 특별한 저하나 항진 없이 평소 수준을 그대로 유지하고 계십니다. 거부감 없이 매 끼니 적정량의 식사를 무난하게 마치시는 상태입니다.",negative:"☐ 식욕 상태: 일시적인 재원 변화나 체력 감소 등으로 극심한 우울감과 음식 거부 반응이 가끔 관찰되며, 이로 인해 신체 면역력 결핍 우려가 또한 생김에 따라 돌봄 과정이나 수행 다음 심리 유형을 수정할 필요가 있습니다."}},{key:"state3",index:"03",label:"상담·정서 상태 — 이용자의 심리·정서 변화 정도를 선택해주세요.",sentences:{positive:"☐ 상담·정서 상태: 정기적인 맞춤 상담 시나리오를 통해 정밀 분석 기법을 지속적으로 러닝한 결과, 기분이 좋고 전보다 웃음 가득한, 유쾌하고 우울감 없는 일상을 마주하고 계실뿐더러 감정이 정돈된 가장 이상적인 심리적 안정을 변함없이 나타내십니다.",neutral:"☐ 상담·정서 상태: 시기적(계절별/월별) 환경 변화 기능을 통하거나 매일매일 발생 및 부여되는 질문과 과제들에 대해 감정의 변화가 미미하며, 사회복지사 등 면담 평정 가이드라인에서 무난하고 일률적인 심리 현황을 보여주고 계십니다.",negative:"☐ 상담·정서 상태: 가끔 위축적 성향을 활발히 높은 빈도로, 신경 감정적 상태가 일어났으며 스스로 감정을 제어하는 등의 부여가 부족합니다. 정기적 상담을 연계하여 가장 신속히 지도가 반복적으로 이루어져야 할 필요성이 있습니다."}}],tD={state1:null,state2:null,state3:null},tM={positive:"긍정 변화 / 개선됨",neutral:"변화 없음 / 유지됨",negative:"부정적 변화 / 결과 요망"},tU=["positive","neutral","negative"],tW=(e,t,n)=>Math.min(n,Math.max(t,e)),tB=["boxSizing","fontFamily","fontSize","fontWeight","fontStyle","lineHeight","letterSpacing","textTransform","textIndent","textDecoration","wordSpacing","tabSize","paddingTop","paddingRight","paddingBottom","paddingLeft"],tV=(e,t,n,i=.08)=>{let l=tW(n,0,t.length),o=document.createElement("div"),r=document.createElement("span"),a=window.getComputedStyle(e);o.style.position="absolute",o.style.left="-99999px",o.style.top="0",o.style.visibility="hidden",o.style.pointerEvents="none",o.style.width=`${e.clientWidth}px`,o.style.whiteSpace="pre-wrap",o.style.overflowWrap="break-word",o.style.wordBreak="break-word",tB.forEach(e=>{o.style[e]=a[e]}),o.textContent=t.slice(0,l),r.textContent="​",o.appendChild(r),document.body.appendChild(o);let d=r.offsetTop;o.remove();let s=Math.max(e.scrollHeight-e.clientHeight,0);return tW(d-e.clientHeight*i,0,s)},tH=l.keyframes`
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
  animation: ${tH} 0.28s cubic-bezier(0.32, 0.72, 0, 1) forwards;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,tX=l.default.div.withConfig({componentId:"zh__sc-42312189-1"})`
  width: 36px;
  height: 36px;
`,tG=l.default.div.withConfig({componentId:"zh__sc-42312189-2"})`
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
`;function ne(){return(ne=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var nt=(0,i.forwardRef)(function(e,t){var n=e.color,l=e.size,o=void 0===l?24:l,r=function(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["color","size"]);return i.default.createElement("svg",ne({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},r),i.default.createElement("line",{x1:"19",y1:"12",x2:"5",y2:"12"}),i.default.createElement("polyline",{points:"12 19 5 12 12 5"}))});nt.propTypes={color:g.default.string,size:g.default.oneOfType([g.default.string,g.default.number])},nt.displayName="ArrowLeft",(0,n.observer)(function({goBack:e,close:n,showToast:l}){let o=async e=>!1,[r,a]=(0,i.useState)({name:"",relation:"",phone:"",address:""}),[s,c]=(0,i.useState)({name:"",relation:"",phone:"",address:""}),f=(e,t)=>{a(n=>({...n,[e]:t})),c(t=>({...t,[e]:""}))},u=async()=>{let e=!0;""===r.name.trim()&&(c(e=>({...e,name:"필수 입력값입니다."})),e=!1),""===r.relation.trim()&&(c(e=>({...e,relation:"필수 입력값입니다."})),e=!1),""===r.phone.trim()&&(c(e=>({...e,phone:"필수 입력값입니다."})),e=!1),e&&await o({name:r.name,relation:r.relation,phone:r.phone,address:r.address})};return(0,t.jsxs)(ti,{children:[(0,t.jsxs)(tl,{children:[(0,t.jsx)(tr,{onClick:e,children:(0,t.jsx)(nt,{size:16})}),(0,t.jsx)(ta,{children:"신규 보호자 추가"}),(0,t.jsx)(td,{onClick:n,children:(0,t.jsx)(y.X,{size:16})})]}),(0,t.jsx)(ts,{}),(0,t.jsx)(tc,{children:(0,t.jsx)(nn,{children:(0,t.jsxs)(ni,{children:[(0,t.jsxs)(nl,{children:[(0,t.jsxs)(no,{children:[(0,t.jsx)(nr,{children:"성명"}),(0,t.jsx)(na,{type:"text",placeholder:"보호자 성명을 입력하세요.",value:r.name,onChange:e=>f("name",e.target.value),$error:""!==s.name}),(0,t.jsx)(ns,{$show:""!==s.name,children:s.name})]}),(0,t.jsxs)(no,{children:[(0,t.jsx)(nr,{children:"이용자와의 관계"}),(0,t.jsx)(na,{type:"text",placeholder:"예: 자녀(딸), 자녀(아들), 자녀(며느리)",value:r.relation,onChange:e=>f("relation",e.target.value),$error:""!==s.relation}),(0,t.jsx)(ns,{$show:""!==s.relation,children:s.relation})]}),(0,t.jsxs)(no,{children:[(0,t.jsx)(nr,{children:"연락처"}),(0,t.jsx)(na,{type:"tel",placeholder:"보호자 연락처를 입력하세요.",value:r.phone,onChange:e=>f("phone",e.target.value),$error:""!==s.phone}),(0,t.jsx)(ns,{$show:""!==s.phone,children:s.phone})]}),(0,t.jsxs)(no,{children:[(0,t.jsx)(nr,{children:"주소"}),(0,t.jsx)(nd,{placeholder:"보호자 주소를 입력하세요.",value:r.address,onChange:e=>f("address",e.target.value),$error:""!==s.address,rows:2}),(0,t.jsx)(ns,{$show:""!==s.address,children:s.address})]})]}),(0,t.jsxs)(nc,{onClick:()=>void u(),children:[(0,t.jsx)(d.Check,{size:20}),"추가 후 계약서에 반영하기"]})]})})})]})});let nn=l.default.div.withConfig({componentId:"zh__sc-f12494e7-0"})`
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
`,nr=l.default.label.withConfig({componentId:"zh__sc-f12494e7-4"})`
  font-size: 16px;
  font-weight: 500;
  color: #000;
`,na=l.default.input.withConfig({componentId:"zh__sc-f12494e7-5"})`
  padding: 8px 16px;
  border: 1px solid #e5e9ef;
  border-radius: 4px;
  font-size: 16px;

  &::placeholder {
    color: #9ca3af;
  }

  &:focus {
    border-color: ${L.default.style.color.PRIMARY[100]};
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
    border-color: ${L.default.style.color.PRIMARY[100]};
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
`,{PRIMARY:nf}=((0,n.observer)(function({close:e,showToast:n}){let l=[],o=(void 0)??null,r=(0,i.useMemo)(()=>{let e=l??[];if(null===o)return e;let t=e.find(e=>e.uuid===o);return t?[t,...e.filter(e=>e.uuid!==o)]:e},[l,o]);return(0,t.jsx)(nu,{children:r.map(i=>(0,t.jsxs)(nh,{onClick:()=>{i.uuid,n(),e()},$selected:void 0===i.uuid,children:[(0,t.jsxs)(np,{children:[(0,t.jsxs)(nx,{children:[(0,t.jsx)(ng,{children:`${i.name.family} ${i.name.given}`}),(0,t.jsx)(nm,{children:i.relation})]}),(0,t.jsxs)(nb,{children:[(0,t.jsxs)(nw,{children:[(0,t.jsx)(nv,{children:"전화번호"}),(0,t.jsx)(nj,{}),(0,t.jsx)(nv,{children:i.phone.mobile??"-"})]}),(0,t.jsxs)(nw,{children:[(0,t.jsx)(nv,{children:"주소"}),(0,t.jsx)(nj,{}),(0,t.jsx)(nv,{children:i.address})]})]})]}),(0,t.jsx)(ny,{children:void 0===i.uuid?(0,t.jsx)(nC,{children:"지금 선택됨"}):(0,t.jsxs)(n_,{children:["선택",(0,t.jsx)(b,{size:16})]})})]},i.uuid))})}),L.default.style.color),nu=l.default.div.withConfig({componentId:"zh__sc-3bbaa2f0-0"})`
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;

  height: 729px;
  padding: 16px;

  background: #f9fafb;
`,nh=l.default.div.withConfig({componentId:"zh__sc-3bbaa2f0-1"})`
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
`,nv=l.default.div.withConfig({componentId:"zh__sc-3bbaa2f0-8"})`
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
`,ny=l.default.div.withConfig({componentId:"zh__sc-3bbaa2f0-10"})`
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
`;var nz=e.i(5543);(0,n.observer)(function({setSelectedDrawerKey:e}){return(0,t.jsxs)(nk,{children:[(0,t.jsxs)(nE,{children:[(0,t.jsx)(_.default.Search,{size:17,color:"#9CA3AF"}),(0,t.jsx)(nT,{placeholder:"보호자 이름을 검색하세요.",value:"",onChange:e=>{e.target.value}})]}),(0,t.jsxs)(nS,{onClick:()=>e?.("add"),children:[(0,t.jsx)(nz.Plus,{size:18}),"신규 대리인(보호자) 추가하기"]})]})});let{PRIMARY:nI}=L.default.style.color,nk=l.default.div.withConfig({componentId:"zh__sc-612601c-0"})`
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
`,nO=function({value:e,onChange:n,onApply:l,onClose:o}){let[r,a]=(0,i.useState)(()=>{let t,n;return t=e.replace(/\s+/g," ").trim(),n={...tu},tf.forEach(e=>{let i=e.options.find(n=>{let i=tx(e.optionLabels,n),l="state1"===e.key?th[n]:tp[n]??"";return""!==i&&t.includes(i)||""!==l&&t.includes(l)});n[e.key]=i??null}),n}),{ref:d,fire:s}=(0,ee.default)(),c=(0,i.useRef)(!1),f=(0,i.useRef)(0),u=(0,i.useRef)(null);(0,i.useEffect)(()=>{if(!c.current)return;let t=d.current;if(null!==t)if(null!==u.current){let e=Math.max(t.scrollHeight-t.clientHeight,0);t.scrollTop=tg(u.current,0,e),u.current=null}else t.scrollTop=tb(t,e,f.current);c.current=!1},[d,e]);let h=""!==e.trim(),p=Object.values(r).filter(e=>null!==e).length,x=p===tf.length;return(0,t.jsxs)(tv,{children:[(0,t.jsxs)(tl,{children:[(0,t.jsx)(tj,{}),(0,t.jsx)(ta,{children:"자동으로 문장 생성하기"}),(0,t.jsx)(td,{onClick:o,children:(0,t.jsx)(y.X,{size:16})})]}),(0,t.jsx)(ts,{}),(0,t.jsx)(tc,{children:(0,t.jsxs)(ty,{children:[(0,t.jsxs)(t_,{children:[(0,t.jsx)(tn.default,{sx:{fontSize:16}}),(0,t.jsx)(tC,{children:"각 카테고리와 세부 항목을 선택하면, 내용에 맞는 문장이 하단에 자동으로 생성됩니다."})]}),(0,t.jsx)(tz,{children:tf.map(i=>{let l=r[i.key];return(0,t.jsxs)(tI,{children:[(0,t.jsxs)(tk,{children:[(0,t.jsx)(tE,{children:i.index}),(0,t.jsx)(tT,{children:i.label})]}),(0,t.jsx)(tS,{children:i.options.map(o=>(0,t.jsxs)(tO,{type:"button",$selected:l===o,onClick:()=>((t,i)=>{let l=r[t];if(l===i){let n=d.current,i="state1"===t?th[l]:tp[l]??"",o=""===i?-1:e.indexOf(i);null!==n&&o>=0&&(u.current=tb(n,e,o,.5))}else u.current=null;let o={...r,[t]:l===i?null:i};a(o);let h=(e=>{let t=e.state1,n=e.state2;if(null===t||null===n)return"";let i=th[t],l=tp[n]??"";return""===i.trim()||""===l.trim()?"":`○ 대상자의 식사영양관리 서비스 비용 청구 기간 중 ${i} ${l} 이에 따라 예외지급을 청구합니다.`.trim()})(o);""!==h.trim()&&s(),f.current=((e,t,n)=>{if(""===n.trim())return 0;let i=t[e];if(null===i)return 0;let l="state1"===e?th[i]:tp[i]??"",o=""===l?-1:n.indexOf(l);return o>=0?o:0})(t,o,h),c.current=!0,n(h)})(i.key,o),children:[tx(i.optionLabels,o),l===o&&(0,t.jsx)(tt.default,{sx:{fontSize:16}})]},`${i.key}-${o}`))})]},i.key)})}),(0,t.jsx)(ts,{style:{marginTop:"auto"}}),(0,t.jsxs)(t$,{children:[(0,t.jsxs)(tF,{children:[(0,t.jsx)(_.default.AI,{size:16,color:"#4f39f6"}),"자동 생성 문장"]}),(0,t.jsx)(tA,{ref:d,value:e,placeholder:"카테고리/키워드와 세부 상태를 선택하면 문서에 사용할 문장이 자동으로 생성됩니다.",readOnly:!0})]}),(0,t.jsxs)(tN,{children:[(0,t.jsx)(tL,{type:"button",onClick:()=>{a({...tu}),n("")},disabled:!h,children:"다시 생성하기"}),(0,t.jsxs)(tP,{type:"button",onClick:l,disabled:!(0===p||x),children:[(0,t.jsx)(tt.default,{sx:{fontSize:16}}),"보고서에 반영하기"]})]})]})})]})},n$=function({value:e,onChange:n,onApply:l,onClose:o}){let r=(0,i.useMemo)(()=>{let t,n;return t=e.split("\n").map(e=>e.trim()).filter(e=>""!==e),n={...tD},tR.forEach(e=>{let i=tU.find(n=>t.includes(e.sentences[n]));n[e.key]=i??null}),n},[e]),{ref:a,fire:d}=(0,ee.default)(),s=(0,i.useRef)(!1),c=(0,i.useRef)(0),f=(0,i.useRef)(null);(0,i.useEffect)(()=>{if(!s.current)return;let t=a.current;if(null!==t)if(null!==f.current){let e=Math.max(t.scrollHeight-t.clientHeight,0);t.scrollTop=tW(f.current,0,e),f.current=null}else t.scrollTop=tV(t,e,c.current);s.current=!1},[a,e]);let u=""!==e.trim();return(0,t.jsxs)(tY,{children:[(0,t.jsxs)(tl,{children:[(0,t.jsx)(tX,{}),(0,t.jsx)(ta,{children:"자동으로 문장 생성하기"}),(0,t.jsx)(td,{onClick:o,children:(0,t.jsx)(y.X,{size:16})})]}),(0,t.jsx)(ts,{}),(0,t.jsx)(tc,{children:(0,t.jsxs)(tG,{children:[(0,t.jsxs)(tK,{children:[(0,t.jsx)(tn.default,{sx:{fontSize:16}}),(0,t.jsx)(tq,{children:"각 카테고리와 세부 항목을 선택하면, 내용에 맞는 문장이 하단에 자동으로 생성됩니다."})]}),(0,t.jsx)(tJ,{children:tR.map(i=>{let l=r[i.key];return(0,t.jsxs)(tQ,{children:[(0,t.jsxs)(tZ,{children:[(0,t.jsx)(t0,{children:i.index}),(0,t.jsx)(t1,{children:i.label})]}),(0,t.jsx)(t2,{children:tU.map(o=>(0,t.jsxs)(t4,{type:"button",$selected:l===o,onClick:()=>((t,i)=>{let l=r[t];if(null!==l&&null===i){let n=a.current,i=tR.find(e=>e.key===t)?.sentences[l]??"",o=""===i?-1:e.indexOf(i);null!==n&&o>=0&&(f.current=tV(n,e,o,.5))}else f.current=null;let o={...r,[t]:i},u=tR.map(e=>{let t=o[e.key];return null===t?null:e.sentences[t]}).filter(e=>null!==e).join("\n\n");""!==u.trim()&&d(),c.current=((e,t,n)=>{if(""===n.trim())return 0;let i=t[e];if(null===i){let e=tR.findIndex(e=>null!==t[e.key]);if(e<0)return 0;let i=tR[e];if(void 0===i)return 0;let l=t[i.key];if(null===l)return 0;let o=i.sentences[l],r=n.indexOf(o);return r>=0?r:0}let l=tR.find(t=>t.key===e)?.sentences[i]??"",o=""===l?-1:n.indexOf(l);return o>=0?o:0})(t,o,u),s.current=!0,n(u)})(i.key,l===o?null:o),children:[tM[o],l===o&&(0,t.jsx)(tt.default,{sx:{fontSize:16}})]},`${i.key}-${o}`))})]},i.key)})}),(0,t.jsx)(ts,{style:{marginTop:"auto"}}),(0,t.jsxs)(t6,{children:[(0,t.jsxs)(t3,{children:[(0,t.jsx)(_.default.AI,{size:16,color:"#4f39f6"}),"자동 생성 문장"]}),(0,t.jsx)(t5,{ref:a,value:e,placeholder:"카테고리/키워드와 세부 상태를 선택하면 문서에 사용할 문장이 자동으로 생성됩니다.",readOnly:!0})]}),(0,t.jsxs)(t8,{children:[(0,t.jsx)(t9,{type:"button",onClick:()=>{n("")},disabled:!u,children:"다시 생성하기"}),(0,t.jsxs)(t7,{type:"button",onClick:l,children:[(0,t.jsx)(tt.default,{sx:{fontSize:16}}),"보고서에 반영하기"]})]})]})})]})},nF=(0,n.observer)(function(){let{selectedOcrFile:e,isOcrAnalyzing:n,analyzeSelectedOcrFile:i,clearSelectedOcrFile:l}=o.default.modal.documentView;return(0,t.jsxs)(nA,{children:[(0,t.jsxs)(nP,{disabled:null===e||n,onClick:()=>{i()},children:["분석 시작",(0,t.jsx)(b,{size:16})]}),null!==e&&(0,t.jsx)(nL,{onClick:()=>{l()},children:"취소"})]})}),nA=l.default.div.withConfig({componentId:"zh__sc-11817043-0"})`
  display: flex;
  flex-flow: row-reverse;
  gap: 10px;
  align-self: stretch;
  justify-content: space-between;
`,nN=l.css`
  display: flex;
  flex-shrink: 0;
  gap: 10px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,nL=(0,l.default)(s.default.Button.Outlined).withConfig({componentId:"zh__sc-11817043-1"})`
  ${nN}
  visibility: hidden;
`,nP=(0,l.default)(s.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-11817043-2"})`
  ${nN}
`,{FILE_EXTENSION_WHITELIST_BY_GROUP:nR}=C.default.file,nD=(0,n.observer)(function(){var e;let n,{selectedOcrFile:i,isOcrAnalyzing:l,clearSelectedOcrFile:r}=o.default.modal.documentView;if(null===i)return null;let a=-1===(n=(e=i.name).lastIndexOf("."))?"":e.slice(n).toLowerCase();return(0,t.jsx)(nM,{children:(0,t.jsxs)(nU,{children:[(0,t.jsxs)(nW,{children:[(0,t.jsx)(nB,{children:nR.IMAGE.some(e=>e===a)?(0,t.jsx)(_.default.Photo,{size:17,color:"#FA8E43"}):nR.AUDIO.some(e=>e===a)?(0,t.jsx)(_.default.SpeechToText,{size:17,color:"#A855F7"}):nR.DOCUMENT.some(e=>e===a)?(0,t.jsx)(_.default.News,{size:17,color:"#2264E8"}):null}),(0,t.jsx)(nV,{children:(0,t.jsx)(nH,{children:i.name})})]}),(0,t.jsxs)(nY,{onClick:r,disabled:l,children:["삭제",(0,t.jsx)(y.X,{size:16})]})]},`${i.name}-${i.size}-${i.lastModified}`)})}),nM=l.default.div.withConfig({componentId:"zh__sc-4e7cda26-0"})`
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
`,nU=l.default.div.withConfig({componentId:"zh__sc-4e7cda26-1"})`
  display: flex;
  flex-shrink: 0;
  gap: 24px;
  align-items: center;

  padding: 12px 16px;
  border-radius: 8px;

  background: #f6f8fb;
`,nW=l.default.div.withConfig({componentId:"zh__sc-4e7cda26-2"})`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`,nB=l.default.div.withConfig({componentId:"zh__sc-4e7cda26-3"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;
  border-radius: 4px;

  background: #fff;
`,nV=l.default.div.withConfig({componentId:"zh__sc-4e7cda26-4"})`
  display: flex;
  align-items: center;
  align-self: stretch;

  width: 196px;
  height: 40px;

  color: #0a0a0a;
`,nH=l.default.div.withConfig({componentId:"zh__sc-4e7cda26-5"})`
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #0a0a0a;
`,nY=l.default.button.withConfig({componentId:"zh__sc-4e7cda26-6"})`
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
`;function nX(){let[e,n]=(0,i.useState)(0);return(0,i.useEffect)(()=>{let e=performance.now(),t=0,i=l=>{n(Math.min(100*(1-Math.exp(-((l-e)/1e3*.05))),98)),t=window.requestAnimationFrame(i)};return t=window.requestAnimationFrame(i),()=>{window.cancelAnimationFrame(t)}},[]),(0,t.jsx)(nG,{children:(0,t.jsx)(nK,{$progress:e})})}let nG=l.default.div.withConfig({componentId:"zh__sc-c9208651-0"})`
  overflow: hidden;
  display: flex;
  align-self: stretch;

  width: 100%;
  height: ${8}px;
  border-radius: 99px;

  background: #e6e0ff;
  background-color: #e5e2ff;
`,nK=l.default.div.attrs(({$progress:e})=>({style:{transform:`scaleX(${e/100})`}})).withConfig({componentId:"zh__sc-c9208651-1"})`
  transform-origin: left center;
  width: 100%;
  height: 100%;
  background-color: #5635ff;
`,nq=(0,n.observer)(function({disabled:e}){let{isWindowFileDragging:n}=o.default.ui.layout,{selectedOcrFile:i,isOcrFileError:l,isOcrAnalyzing:r}=o.default.modal.documentView,a=l?"지원하지 않는 파일 형식입니다.":!e&&n?"파일을 여기에 놓으면 업로드 됩니다.":r?"업로드한 파일을 분석하고 있습니다.":"이곳에 파일을 끌어다 놓거나 (드래그 앤 드롭), 클릭하여 업로드하세요.";return(0,t.jsxs)(nQ,{children:[null===i&&!l&&(0,t.jsx)(nZ,{children:(0,t.jsx)(N,{size:26,color:e?"#9ca3af":nJ[100]})}),(0,t.jsxs)(n0,{children:[(0,t.jsx)(n1,{$disabled:e,$isError:l,children:a}),(0,t.jsx)(n2,{$disabled:e,children:null===i||r?"지원 파일 형식: 사진 이미지":"새 파일을 업로드하면 기존 파일이 교체됩니다."})]}),r&&(0,t.jsx)(nX,{})]})}),{PRIMARY:nJ}=L.default.style.color,nQ=l.default.div.withConfig({componentId:"zh__sc-cdea1a21-0"})`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  align-self: stretch;
  justify-content: center;
`,nZ=l.default.div.withConfig({componentId:"zh__sc-cdea1a21-1"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;
`,n0=l.default.div.withConfig({componentId:"zh__sc-cdea1a21-2"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  align-self: stretch;
  justify-content: center;
`,n1=l.default.div.withConfig({componentId:"zh__sc-cdea1a21-3"})`
  font-size: 14px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 142.857% */
  color: ${({$disabled:e,$isError:t})=>t?"#ff4d4f":e?"#9ca3af":"#4f39f6"};
  text-align: center;
`,n2=l.default.div.withConfig({componentId:"zh__sc-cdea1a21-4"})`
  font-size: 14px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 142.857% */
  color: ${({$disabled:e})=>e?"#9ca3af":"#99a1af"};
`,n4=C.default.file.FILE_EXTENSION_WHITELIST_BY_GROUP.IMAGE.join(","),n6=(0,n.observer)(function(){let{isWindowFileDragging:e}=o.default.ui.layout,n=o.default.modal.documentView,{selectedDocument:l,selectedOcrFile:r,isOcrFileError:a}=n,d=(0,i.useRef)(null),s=l?.displayStatus!=="WAITING_TO_DRAFT"&&l?.displayStatus!=="NEED_UPDATE",c=e=>{n.setSelectedOcrFile(e)};return x(e=>{if(s)return;let t=e[0];void 0!==t&&c(t)}),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n3,{ref:d,type:"file",accept:n4,disabled:s,onChange:e=>{if(s)return;let t=Array.from(e.target.files??[]);if(0===t.length)return;let n=t[0];void 0!==n&&(c(n),e.target.value="")}}),(0,t.jsxs)(n5,{$isWindowFileDragging:e,$disabled:s,onDragOver:e=>{if(e.preventDefault(),s)return},onDrop:e=>{if(e.preventDefault(),s)return;let t=Array.from(e.dataTransfer.files);if(0===t.length)return;let n=t[0];void 0!==n&&c(n)},onClick:e=>{!s&&e.target instanceof HTMLElement&&(e.target.closest("button")||d.current?.click())},$isError:a,children:[null!==r&&(0,t.jsx)(nD,{}),(0,t.jsx)(nq,{disabled:s}),(0,t.jsx)(nF,{})]})]})}),n3=l.default.input.withConfig({componentId:"zh__sc-c05f4a71-0"})`
  display: none;
`,n5=l.default.div.withConfig({componentId:"zh__sc-c05f4a71-1"})`
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
`,{FILE_EXTENSION_WHITELIST_BY_GROUP:n8}=C.default.file,n9=(0,n.observer)(function(){var e;let n,{analyzedOcrFile:l}=o.default.modal.documentView,{ref:r,fire:a}=(0,ee.default)();if((0,i.useEffect)(()=>{null!==l&&a()},[l,a]),null===l)return null;let d=-1===(n=(e=l.name).lastIndexOf("."))?"":e.slice(n).toLowerCase();return(0,t.jsxs)(n7,{ref:r,children:[(0,t.jsxs)(ie,{children:[(0,t.jsxs)(it,{children:[(0,t.jsx)(_.default.FindInPage,{size:18}),"AI 문서 인식 완료"]}),(0,t.jsxs)(ii,{children:["업로드된 서류들에서 정보를 성공적으로 추출했습니다. ",(0,t.jsx)("br",{})]})]}),(0,t.jsxs)(il,{children:[(0,t.jsxs)(io,{children:[(0,t.jsx)(_.default.CheckCircle,{size:18}),"분석 완료된 첨부 서류 (1건)"]}),(0,t.jsx)(ir,{children:(0,t.jsxs)(ia,{children:[(0,t.jsxs)(id,{children:[(0,t.jsx)(is,{children:n8.IMAGE.some(e=>e===d)?(0,t.jsx)(_.default.Photo,{size:17,color:"#FA8E43"}):n8.AUDIO.some(e=>e===d)?(0,t.jsx)(_.default.SpeechToText,{size:17,color:"#A855F7"}):n8.DOCUMENT.some(e=>e===d)?(0,t.jsx)(_.default.News,{size:17,color:"#2264E8"}):null}),(0,t.jsx)(ic,{children:(0,t.jsx)(iu,{children:l.name})})]}),(0,t.jsx)(ih,{children:"추출 완료"})]},`${l.name}-${l.size}-${l.lastModified}`)})]})]})}),n7=l.default.div.withConfig({componentId:"zh__sc-91a1d4f6-0"})`
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
`,ie=l.default.div.withConfig({componentId:"zh__sc-91a1d4f6-1"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  align-self: stretch;
`,it=l.default.div.withConfig({componentId:"zh__sc-91a1d4f6-2"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #0a0a0a;
`,ii=l.default.div.withConfig({componentId:"zh__sc-91a1d4f6-3"})`
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
`,il=l.default.div.withConfig({componentId:"zh__sc-91a1d4f6-4"})`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  align-self: stretch;

  min-height: 0;
`,io=l.default.div.withConfig({componentId:"zh__sc-91a1d4f6-5"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #0a0a0a;
`,ir=l.default.div.withConfig({componentId:"zh__sc-91a1d4f6-6"})`
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
`,ia=l.default.div.withConfig({componentId:"zh__sc-91a1d4f6-7"})`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 359px;
  height: 64px;
  padding: 12px 16px;
  border-radius: 8px;

  background: #f6f8fb;
`,id=l.default.div.withConfig({componentId:"zh__sc-91a1d4f6-8"})`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`,is=l.default.div.withConfig({componentId:"zh__sc-91a1d4f6-9"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;
  border-radius: 4px;

  background: #fff;
`,ic=l.default.div.withConfig({componentId:"zh__sc-91a1d4f6-10"})`
  display: flex;
  align-items: center;
  align-self: stretch;

  width: 196px;
  height: 40px;

  color: #0a0a0a;
`,iu=l.default.div.withConfig({componentId:"zh__sc-91a1d4f6-11"})`
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #0a0a0a;
`,ih=l.default.div.withConfig({componentId:"zh__sc-91a1d4f6-12"})`
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
`,ip=(0,n.observer)(function(){let{analyzedOcrFile:e}=o.default.modal.documentView;return(0,t.jsxs)(ix,{children:[(0,t.jsx)(n6,{}),null!==e&&(0,t.jsx)(n9,{})]})}),ix=l.default.div.withConfig({componentId:"zh__sc-b3f3f20d-0"})`
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
`,ig=l.default.div.withConfig({componentId:"zh__sc-80a26ee5-0"})`
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
`,im=(0,n.observer)(function(){let e=o.default.client.info.byClient.docs.selectedContractId,n=(o.default.data.contract.list.data??[]).find(t=>t.id===e)??null,i=function(e){if(null==e||""===e.trim())return"-";let t=new Date(e);if(Number.isNaN(t.getTime()))return"-";let n=String(t.getFullYear()),i=String(t.getMonth()+1).padStart(2,"0"),l=String(t.getDate()).padStart(2,"0"),o=String(t.getHours()).padStart(2,"0"),r=String(t.getMinutes()).padStart(2,"0");return`${n}-${i}-${l} ${o}:${r}`}(n?.client.createdAt??n?.createdAt),l=n?.client.name??"-";return(0,t.jsx)(ib,{children:(0,t.jsxs)(iw,{children:[(0,t.jsxs)(iv,{children:[(0,t.jsx)(ij,{children:(0,t.jsxs)(iy,{children:[(0,t.jsx)(ig,{$status:"done",children:(0,t.jsx)(d.Check,{size:12,color:"#ffffff",strokeWidth:3})}),"기존 이용자 정보 연동 완료"]})}),(0,t.jsx)(i_,{children:(0,t.jsx)(iC,{children:`업로드 일시: ${i}`})})]}),(0,t.jsx)(iz,{children:(0,t.jsx)(iI,{children:`이용자 ${l}님의 기존 이용 내역과 갱신된 요금 정보가 성공적으로 양식에 매핑되었습니다.`})})]})})}),ib=l.default.div.withConfig({componentId:"zh__sc-a82a8c4-0"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;
`,iw=l.default.div.withConfig({componentId:"zh__sc-a82a8c4-1"})`
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
`,iv=l.default.div.withConfig({componentId:"zh__sc-a82a8c4-2"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  align-self: stretch;
`,ij=l.default.div.withConfig({componentId:"zh__sc-a82a8c4-3"})`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;
`,iy=l.default.div.withConfig({componentId:"zh__sc-a82a8c4-4"})`
  display: flex;
  gap: 4px;
  align-items: center;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 16px; /* 100% */
  color: #0a0a0a;
`,i_=l.default.div.withConfig({componentId:"zh__sc-a82a8c4-5"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  align-self: stretch;

  padding-left: 24px;
`,iC=l.default.div.withConfig({componentId:"zh__sc-a82a8c4-6"})`
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
`,iz=l.default.div.withConfig({componentId:"zh__sc-a82a8c4-7"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  align-self: stretch;

  padding-left: 24px;
`,iI=l.default.div.withConfig({componentId:"zh__sc-a82a8c4-8"})`
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
`,ik=(0,n.observer)(function(){let{selectedTemplate:e}=o.default.modal.documentView;return(0,t.jsxs)(iE,{children:[(0,t.jsx)(iT,{children:(0,t.jsx)(iS,{children:e?.name??"계약서 자동 생성"})}),(0,t.jsxs)(iO,{children:[(0,t.jsx)(im,{}),(0,t.jsx)(ip,{})]})]})}),iE=l.default.div.withConfig({componentId:"zh__sc-61494f9e-0"})`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  justify-content: space-between;

  width: 541px;
  border-right: 1px solid #e5e7eb;

  background: #fff;
`,iT=l.default.div.withConfig({componentId:"zh__sc-61494f9e-1"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;

  padding: 16px 20px;
  border-bottom: 1px solid #e5e7eb;

  background: #fff;
`,iS=l.default.div.withConfig({componentId:"zh__sc-61494f9e-2"})`
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
`,iO=l.default.div.withConfig({componentId:"zh__sc-61494f9e-3"})`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;

  padding: 16px 12px;
`;function i$(){return(i$=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var iF=(0,i.forwardRef)(function(e,t){var n=e.color,l=e.size,o=void 0===l?24:l,r=function(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["color","size"]);return i.default.createElement("svg",i$({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},r),i.default.createElement("polyline",{points:"6 9 6 2 18 2 18 9"}),i.default.createElement("path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"}),i.default.createElement("rect",{x:"6",y:"14",width:"12",height:"8"}))});iF.propTypes={color:g.default.string,size:g.default.oneOfType([g.default.string,g.default.number])},iF.displayName="Printer";var iA=e.i(69477),iN=e.i(71274),iL=e.i(68339),iP=e.i(70888);let iR=(0,n.observer)(function({isSaving:e,setIsSaving:n,resetLocalStates:l}){let{close:r,selectedDocument:a}=o.default.modal.documentView,s=o.default.modal.documentView,c=o.default.client.info.byClient.representativeContract?.client.name?.trim()??"",[f,u]=(0,i.useState)(!1),[h,p]=(0,i.useState)(!1),x=s.selectedTemplateImagePaths.filter(e=>""!==e),g=null!==a&&x.length>0,m=(0,iN.getDocumentStatusUi)(a?.displayStatus).badge,b=(0,iP.shouldSaveDocumentBeforePrint)(a?.displayStatus),w=async()=>{if(g&&!h&&!e){p(!0);try{if(b){n(!0);try{await s.saveSelectedFieldChanges()}finally{n(!1)}await new Promise(e=>{window.setTimeout(e,600)})}let e=s.selectedTemplateId;if(null===e)return;let t=x.map((t,n)=>({id:`${e}-${n+1}`,templateId:e,imagePath:t,page:n+1}));if(0===t.length)return;let i=s.selectedTemplate?.name?.trim()??"",l=""===i?"Print":i,r=""===c?l:`${l} - ${c}`;await (0,iL.renderDocumentPrintView)({pages:t,fields:s.selectedTemplateFields,printTitle:r,onImageLoadFailure:e=>{o.default.ui.layout.toast.error(`서류 이미지 ${e}개 로딩에 실패하여 출력을 중단했습니다.`)}})}finally{p(!1)}}},v=()=>{l(),r()},j=async()=>{if(!e){n(!0);try{await s.saveSelectedFieldChanges()}finally{n(!1)}}},C=async()=>{if(!e){n(!0);try{await s.patchSelectedDocumentStatusPrevious()}finally{n(!1)}}},z=async()=>{if(!e){n(!0);try{await s.saveSelectedFieldChanges(),u(!1),v()}finally{n(!1)}}};return(0,t.jsxs)(iD,{children:[(0,t.jsxs)(iM,{children:[(0,t.jsxs)(iU,{children:[(0,t.jsx)(iW,{children:"서류 상태"}),(0,t.jsxs)(iB,{$color:m.color,children:[m.icon,m.label]})]}),(0,t.jsx)(iV,{}),(0,t.jsxs)(iH,{children:[(0,t.jsxs)(iY,{type:"button",disabled:!g||h||e,onClick:()=>{w()},children:[(0,t.jsx)(iF,{size:16}),"출력하기"]}),a?.displayStatus==="COMPLETED"?(0,t.jsxs)(iY,{$processing:e,onClick:()=>void C(),children:[(0,t.jsx)(_.default.Undo,{size:14}),"확인 취소"]}):a?.displayStatus==="NEED_UPDATE"?(0,t.jsxs)(iY,{$processing:e,onClick:()=>void j(),children:[e?(0,t.jsx)(iA.RotateCw,{size:16}):(0,t.jsx)(d.Check,{size:16}),e?"저장중":"최종확인 및 저장"]}):null,(0,t.jsxs)(iX,{type:"button",onClick:()=>{s.hasSelectedFieldChanges?u(!0):v()},children:[(0,t.jsx)(y.X,{size:16}),"닫기"]})]})]}),(0,t.jsx)(e2,{isOpen:f,actionType:"exit",isProcessing:e,onClickSecondary:()=>{u(!1),v()},onClickPrimary:()=>{z()}})]})}),iD=l.default.div.withConfig({componentId:"zh__sc-fa5a83d4-0"})`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: flex-end;

  padding: 12px 24px;
  border-bottom: 1px solid #e5e7eb;

  background: #fff;
`,iM=l.default.div.withConfig({componentId:"zh__sc-fa5a83d4-1"})`
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: flex-end;
`,iU=l.default.div.withConfig({componentId:"zh__sc-fa5a83d4-2"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,iW=l.default.div.withConfig({componentId:"zh__sc-fa5a83d4-3"})`
  font-size: 14px;
  font-weight: 400;
  font-style: normal;
  line-height: normal;
  color: #737380;
`,iB=l.default.div.withConfig({componentId:"zh__sc-fa5a83d4-4"})`
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
`,iV=l.default.div.withConfig({componentId:"zh__sc-fa5a83d4-5"})`
  width: 1px;
  height: 24px;
  background: #d1d1d9;
`,iH=l.default.div.withConfig({componentId:"zh__sc-fa5a83d4-6"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,iY=(0,l.default)(s.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-fa5a83d4-7"})`
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
`,iX=(0,l.default)(s.default.Button.Outlined).withConfig({componentId:"zh__sc-fa5a83d4-8"})`
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
`,iG=(0,n.observer)(function(){let e=o.default.modal.documentView,n=e.selectedDocument?.displayStatus!=="COMPLETED",l=e.autocompleteServiceEndReportUserChangeLevelUIState,a=e.autocompleteCaseManagementRecordCaseContentUIState,[d,s]=(0,i.useState)(1),[c,f]=(0,i.useState)(null),[u,h]=(0,i.useState)(!1),[p,x]=(0,i.useState)(!1),[g,m]=(0,i.useState)(null),[b,w]=(0,i.useState)(""),[v,j]=(0,i.useState)(""),y=(0,i.useRef)(null),_=(0,i.useRef)(null),C=(0,i.useRef)([]),z=e.selectedTemplateImagePaths,I=Math.max(z?.length??0,1),k=Math.min(d,I),E=(0,i.useCallback)((e,t="instant")=>{let n=_.current,i=C.current[e-1];if(!n||!i)return;let l=Math.max(i.offsetTop-n.offsetTop-12,0);n.scrollTo({top:l,behavior:t})},[]),T=t=>(-1!==t||!1!==e.canMovePrevTemplate)&&(1!==t||!1!==e.canMoveNextTemplate)&&(-1===t?e.movePrevTemplate():e.moveNextTemplate(),s(1),f(null),h(!1),_.current?.scrollTo({top:0,behavior:"auto"}),!0),S=async()=>e.hasSelectedFieldChanges?(m(-1),x(!0),!1):T(-1),O=async()=>e.hasSelectedFieldChanges?(m(1),x(!0),!1):T(1),$=async()=>{if(!u&&null!==g){h(!0);try{await e.saveSelectedFieldChanges(),T(g),m(null),x(!1)}finally{h(!1)}}};(0,i.useEffect)(()=>{let t=t=>{"ready"===e.status&&!1!==e.hasSelectedFieldChanges&&t.preventDefault()};return window.addEventListener("beforeunload",t),()=>{window.removeEventListener("beforeunload",t)}},[e.hasSelectedFieldChanges,e.status]),(0,i.useEffect)(()=>"ready"!==e.status?void e.setToastContainer(null):(e.setToastContainer(y.current),()=>{e.setToastContainer(null)}),[e,e.status]);let F=()=>{if(null===c)return;let e=c.replace(/[^\d]/g,"");if(""===e)return void f(null);let t=Number(e);if(!Number.isFinite(t))return void f(null);let n=Math.min(Math.max(t,1),I);s(n),f(null),E(n)};return"ready"!==e.status?null:(0,t.jsx)(r.default,{children:(0,t.jsxs)(iK,{ref:y,children:[(0,t.jsx)(ik,{}),(0,t.jsxs)(iq,{children:[(0,t.jsx)(iR,{isSaving:u,setIsSaving:h,resetLocalStates:()=>{s(1),f(null),h(!1)}}),(0,t.jsxs)(iJ,{children:[(0,t.jsx)(i2,{type:"button","aria-label":"이전 문서",onClick:()=>void S(),children:(0,t.jsx)(eQ.ChevronLeft,{size:24})}),(0,t.jsx)(iQ,{ref:_,onScroll:()=>{let e=_.current;if(!e)return;let t=e.scrollTop,n=1,i=1/0;C.current.forEach((l,o)=>{if(!l)return;let r=Math.abs(l.offsetTop-e.offsetTop-t);r<i&&(i=r,n=o+1)}),n!==d&&s(n)},children:Array.from({length:I},(i,o)=>{let r,d,s;return(0,t.jsx)(iZ,{$active:!0,ref:e=>{C.current[o]=e},children:(0,t.jsx)(i0,{children:(d="string"==typeof(r=z?.[o])?""===r?null:r:null,s=e.getSelectedTemplateFieldsByPage(o+1),null===d?(0,t.jsx)(i1,{}):(0,t.jsx)(e0.default,{imagePath:d,fields:s,readOnly:!n,onAssistTriggerClick:({triggerKey:t,field:n})=>{if(t===e1.default.SOURCE_CLICK_AUTOCOMPLETE_SERVICE_END_REPORT_USER_CHANGE_LEVEL_BUTTON){w(e.getAutocompleteServiceEndReportUserChangeLevelTargetValue()),e.openAutocompleteServiceEndReportUserChangeLevelDrawer(n);return}t===e1.default.SOURCE_CLICK_AUTOCOMPLETE_CASE_MANAGEMENT_RECORD_CASE_CONTENT_BUTTON&&(j(e.getAutocompleteCaseManagementRecordCaseContentTargetValue()),e.openAutocompleteCaseManagementRecordCaseContentDrawer(n))},isAssistButtonDisabled:({triggerKey:e})=>e===e1.default.SOURCE_CLICK_AUTOCOMPLETE_SERVICE_END_REPORT_USER_CHANGE_LEVEL_BUTTON?!n||!0===l.isDrawerOpen:e===e1.default.SOURCE_CLICK_AUTOCOMPLETE_CASE_MANAGEMENT_RECORD_CASE_CONTENT_BUTTON?!n||!0===a.isDrawerOpen:void 0,resolveAssistButtonLabel:({triggerKey:t})=>t===e1.default.SOURCE_CLICK_AUTOCOMPLETE_SERVICE_END_REPORT_USER_CHANGE_LEVEL_BUTTON?e.autocompleteServiceEndReportUserChangeLevelButtonLabel:t===e1.default.SOURCE_CLICK_AUTOCOMPLETE_CASE_MANAGEMENT_RECORD_CASE_CONTENT_BUTTON?e.autocompleteCaseManagementRecordCaseContentButtonLabel:void 0,isFieldEditable:t=>e.isSelectedFieldEditable(t),isFieldAutoFilled:t=>e.isSelectedFieldAutoFilled(t),onChangeField:(t,n)=>{if("radio"===t.uiProps.fieldType){"true"===n&&e.toggleSelectedRadioGroup(t);return}e.updateSelectedFieldValue({page:t.page,fieldKey:t.fieldKey,value:n})}}))})},`screen-page-${o+1}`)})}),(0,t.jsx)(i2,{type:"button","aria-label":"다음 문서",onClick:()=>void O(),$right:!0,children:(0,t.jsx)(eZ.ChevronRight,{size:24})}),(0,t.jsx)(i4,{children:(0,t.jsxs)(i6,{children:[(0,t.jsxs)(i3,{type:"button",disabled:1===k,onClick:()=>{let e=Math.max(k-1,1);s(e),f(null),E(e)},children:[(0,t.jsx)(eJ,{size:16,color:1===k?"#9ca3af":"#0a0a0a"}),(0,t.jsx)(i5,{$muted:1===k,children:"이전"})]}),(0,t.jsxs)(i8,{children:[(0,t.jsx)(i9,{children:(0,t.jsx)(i7,{type:"text",inputMode:"numeric","aria-label":"페이지 번호 입력",value:c??String(k),onFocus:()=>{f(String(k))},onChange:e=>{f(e.target.value)},onBlur:F,onKeyDown:e=>{"Enter"===e.key&&(e.preventDefault(),F(),e.currentTarget.blur())}})}),(0,t.jsx)(i9,{children:(0,t.jsx)(lt,{children:"/"})}),(0,t.jsx)(i9,{children:(0,t.jsx)(ln,{children:I})})]}),(0,t.jsxs)(i3,{type:"button",disabled:k===I,onClick:()=>{let e=Math.min(k+1,I);s(e),f(null),E(e)},children:[(0,t.jsx)(i5,{$muted:k===I,children:"다음"}),(0,t.jsx)(eK,{size:16,color:k===I?"#9ca3af":"#0a0a0a"})]})]})}),!0===l.isDrawerOpen?(0,t.jsx)(n$,{value:b,onChange:w,onClose:()=>e.closeAutocompleteServiceEndReportUserChangeLevelDrawer(),onApply:()=>e.applyAutocompleteServiceEndReportUserChangeLevelResult(b)}):null,!0===a.isDrawerOpen?(0,t.jsx)(nO,{value:v,onChange:j,onClose:()=>e.closeAutocompleteCaseManagementRecordCaseContentDrawer(),onApply:()=>e.applyAutocompleteCaseManagementRecordCaseContentResult(v)}):null]}),(0,t.jsx)(e2,{isOpen:p,actionType:"move",isProcessing:u,onClickSecondary:()=>{m(null),x(!1),null!==g&&(e.discardSelectedFieldChanges(),T(g))},onClickPrimary:()=>{$()}})]})]})})}),iK=l.default.div.withConfig({componentId:"zh__sc-7a537607-0"})`
  position: relative;

  overflow: hidden;
  display: flex;
  flex-shrink: 0;
  align-items: flex-start;

  width: 1712px;
  min-width: 1712px;
  border-radius: 8px;
`,iq=l.default.div.withConfig({componentId:"zh__sc-7a537607-1"})`
  position: relative;

  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;

  height: 989px;
`,iJ=l.default.div.withConfig({componentId:"zh__sc-7a537607-2"})`
  position: relative;

  display: flex;
  flex: 1 0 0;
  align-self: stretch;

  min-height: 0;
`,iQ=l.default.div.withConfig({componentId:"zh__sc-7a537607-3"})`
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
`,iZ=l.default.div.withConfig({componentId:"zh__sc-7a537607-4"})`
  display: ${({$active:e})=>e?"block":"none"};
  width: calc(210mm * ${.75});
  height: calc(297mm * ${.75});
  box-shadow: 0 0 8px 0 rgb(0 0 0 / 10%);
`,i0=l.default.div.withConfig({componentId:"zh__sc-7a537607-5"})`
  transform-origin: top left;
  transform: scale(${.75});
  width: 210mm;
  height: 297mm;
`,i1=l.default.div.withConfig({componentId:"zh__sc-7a537607-6"})`
  width: 210mm;
  height: 297mm;
  background: #f9fafb;
`,i2=l.default.button.withConfig({componentId:"zh__sc-7a537607-7"})`
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
  border: 0.8px solid #e5e9ef;
  border-radius: 999px;

  color: #0a0a0a;

  background: #fff;

  &:hover {
    border: 1px solid #4f39f6;
    color: #4f39f6;
    background: #f7f5ff;
  }
`,i4=l.default.div.withConfig({componentId:"zh__sc-7a537607-8"})`
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
`,i6=l.default.div.withConfig({componentId:"zh__sc-7a537607-9"})`
  pointer-events: auto;

  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: center;

  padding: 8px 16px;
  border: 1px solid #e5e9ef;
  border-radius: 99px;

  background: #fff;
`,i3=l.default.button.withConfig({componentId:"zh__sc-7a537607-10"})`
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
`,i5=l.default.span.withConfig({componentId:"zh__sc-7a537607-11"})`
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 16px;
  color: ${({$muted:e})=>!0===e?"#9ca3af":"#0a0a0a"};
  letter-spacing: -1px;
`,i8=l.default.div.withConfig({componentId:"zh__sc-7a537607-12"})`
  display: flex;
  gap: 2px;
  align-items: center;
`,i9=l.default.div.withConfig({componentId:"zh__sc-7a537607-13"})`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 20px;
`,i7=l.default.input.withConfig({componentId:"zh__sc-7a537607-14"})`
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
`,le=l.default.span.withConfig({componentId:"zh__sc-7a537607-15"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: 16px;
  text-align: center;
  letter-spacing: -1px;
`,lt=(0,l.default)(le).withConfig({componentId:"zh__sc-7a537607-16"})`
  color: #0a0a0a;
`,ln=(0,l.default)(le).withConfig({componentId:"zh__sc-7a537607-17"})`
  color: #0a0a0a;
`;var li=e.i(84673);let ll=l.default.div.withConfig({componentId:"zh__sc-48b6a536-0"})`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-items: flex-start;

  width: 730px;
  border-radius: 8px;

  background: #fff;
`,lo=l.default.div.withConfig({componentId:"zh__sc-48b6a536-1"})`
  display: flex;
  gap: 24px;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;

  height: 69px;
  padding: 16px;
  border-bottom: 1px solid #e5e7eb;

  background: #fff;
`,lr=l.default.div.withConfig({componentId:"zh__sc-48b6a536-2"})``,la=l.default.div.withConfig({componentId:"zh__sc-48b6a536-3"})`
  font-size: 18px;
  font-weight: 700;
  font-style: normal;
  line-height: 28px; /* 155.556% */
  color: #0a0a0a;
  letter-spacing: -0.439px;
`,ld=l.default.div.withConfig({componentId:"zh__sc-48b6a536-4"})``,ls=l.css`
  gap: 4px;
  height: 36px;
  padding: 8px 16px;
`,lc=l.default.div.withConfig({componentId:"zh__sc-48b6a536-5"})`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-self: stretch;

  padding: 32px 24px;

  background: #f9fafb;
`,lf=l.default.div.withConfig({componentId:"zh__sc-48b6a536-6"})`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
`,lu=l.default.div.withConfig({componentId:"zh__sc-48b6a536-7"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,lh=l.default.div.withConfig({componentId:"zh__sc-48b6a536-8"})`
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
`,lp=l.css`
  width: 180px;
  height: 36px;
  padding: 4px 16px;
`,lx=l.default.div.withConfig({componentId:"zh__sc-48b6a536-9"})`
  display: flex;
  gap: 16px;
`,lg=l.default.label.withConfig({componentId:"zh__sc-48b6a536-10"})`
  cursor: pointer;
  display: flex;
  gap: 4px;
  align-items: center;
`,lm=l.default.div.withConfig({componentId:"zh__sc-48b6a536-11"})`
  font-size: 16px;
  color: #0a0a0a;
`,lb=l.default.div.withConfig({componentId:"zh__sc-48b6a536-12"})`
  pointer-events: none;

  position: absolute;
  bottom: -22px;
  left: 0;

  font-size: 13px;
  line-height: 1.35;
  color: #dc2626;

  opacity: ${({$isVisible:e})=>+!!e};
`,lw=l.default.div.withConfig({componentId:"zh__sc-48b6a536-13"})`
  display: flex;
  gap: 16px;
  align-items: center;
  align-self: stretch;
  justify-content: flex-end;

  padding: 16px;
  border-top: 1px solid #e5e7eb;
`,{SERVICE_TYPE:lv,BANK_NAME:lj}=L.default.enums;function ly(){let e=o.default.modal.organization.accountAdd,n="edit"===e.mode,[l,a]=(0,i.useState)(e.serviceType),[d,s]=(0,i.useState)(e.accountNumber),[c,f]=(0,i.useState)(e.bankName),[u,h]=(0,i.useState)(e.accountHolder),[p,x]=(0,i.useState)(e.useFlag),[g,m]=(0,i.useState)(""),[b,w]=(0,i.useState)(""),[v,j]=(0,i.useState)(!1),y=d.trim(),_=u.trim(),C=e.accountNumber.trim(),z=e.accountHolder.trim(),I=l!==e.serviceType||y!==C||c!==e.bankName||_!==z||p!==e.useFlag,k=()=>{v||(a(e.serviceType),s(e.accountNumber),f(e.bankName),h(e.accountHolder),x(e.useFlag),m(""),w(""),e.close())},E=async()=>{if(v)return;let t=d.trim(),i=u.trim(),r=o.default.organizationSetting.staff.organizationId;if(""===t)return void m("필수 입력값입니다.");if(""===i)return void w("필수 입력값입니다.");if(null===r)return void o.default.ui.layout.toast.error(n?"기관 식별자가 없어 계좌를 수정할 수 없습니다.":"기관 식별자가 없어 계좌를 생성할 수 없습니다.");m(""),w(""),j(!0);let a={serviceType:l,accountNumber:t,bankName:c,accountHolder:i,useFlag:p},[s]=n&&null!==e.accountId?await o.default.data.organization.bankAccountList.patch({orgId:r,accountId:e.accountId,payload:a}):await o.default.data.organization.bankAccountList.create({orgId:r,payload:a});if(null!==s){j(!1),o.default.ui.layout.toast.error(s.message);return}let f=o.default.data.organization.cardList.query;null!==f&&!0!==f&&f.orgId===r&&await o.default.data.organization.cardList.refetch(),j(!1),k()};return(0,t.jsx)(r.default,{children:(0,t.jsxs)(ll,{children:[(0,t.jsxs)(lo,{children:[(0,t.jsx)(lr,{children:(0,t.jsx)(la,{children:n?"계좌 정보 수정하기":"계좌 정보 추가하기"})}),(0,t.jsx)(ld,{children:(0,t.jsxs)(l_,{onClick:k,disabled:v,children:[(0,t.jsx)(li.default,{sx:{fontSize:20}}),"닫기"]})})]}),(0,t.jsxs)(lc,{children:[(0,t.jsxs)(lf,{children:[(0,t.jsx)(lh,{children:"서비스 종류를 선택해주세요."}),(0,t.jsx)(lC,{value:l,onChange:e=>{let t=e.target.value;t in lv&&a(t)},children:Object.entries(lv).map(([e,n])=>(0,t.jsxs)("option",{value:e,children:[n.label," 서비스"]},e))})]}),(0,t.jsxs)(lf,{children:[(0,t.jsx)(lh,{children:"계좌번호를 입력해주세요."}),(0,t.jsx)(lz,{placeholder:"000-0000-0000-00",value:d,onChange:e=>{m(""),s(e.target.value.replace(/[^0-9-]/g,""))}}),(0,t.jsx)(lb,{$isVisible:g.trim().length>0,children:g})]}),(0,t.jsxs)(lf,{children:[(0,t.jsx)(lh,{children:"은행을 선택해주세요."}),(0,t.jsx)(lC,{value:c,onChange:e=>{let t=e.target.value;t in lj&&f(t)},children:Object.entries(lj).map(([e,n])=>(0,t.jsx)("option",{value:e,children:n.label},e))})]}),(0,t.jsxs)(lf,{children:[(0,t.jsx)(lh,{children:"예금주를 입력해주세요."}),(0,t.jsx)(lz,{placeholder:"기관명 또는 성명",value:u,onChange:e=>{w(""),h(e.target.value)}}),(0,t.jsx)(lb,{$isVisible:b.trim().length>0,children:b})]}),(0,t.jsxs)(lf,{children:[(0,t.jsx)(lh,{children:"서류 반영 여부를 선택해주세요."}),(0,t.jsxs)(lx,{children:[(0,t.jsxs)(lg,{children:[(0,t.jsx)(lI,{checked:p,onChange:()=>{x(!0)}}),"반영"]}),(0,t.jsxs)(lg,{children:[(0,t.jsx)(lI,{checked:!1===p,onChange:()=>{x(!1)}}),"미반영"]})]})]})]}),(0,t.jsxs)(lw,{children:[(0,t.jsx)(lk,{onClick:()=>{v||(a("MEAL"),s(""),f("NONGHYUP"),h(""),x(!0),m(""),w(""))},disabled:v,children:"내용 삭제 후 새로 입력 (초기화)"}),(0,t.jsxs)(lE,{onClick:()=>{E()},disabled:v||n&&!1===I,children:[(0,t.jsx)(tt.default,{sx:{fontSize:20}}),"저장"]})]})]})})}let l_=(0,l.default)(s.default.Button.Outlined).withConfig({componentId:"zh__sc-e7085db1-0"})`
  ${ls}
`,lC=(0,l.default)(s.default.Input.Select).withConfig({componentId:"zh__sc-e7085db1-1"})`
  ${lp}
`,lz=(0,l.default)(s.default.Input.Text).withConfig({componentId:"zh__sc-e7085db1-2"})`
  ${lp}
  width: 100%;
`,lI=(0,l.default)(s.default.Input.Radio).withConfig({componentId:"zh__sc-e7085db1-3"})``,lk=(0,l.default)(s.default.Button.Outlined).withConfig({componentId:"zh__sc-e7085db1-4"})`
  ${ls}
`,lE=(0,l.default)(s.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-e7085db1-5"})`
  ${ls}
`,lT=(0,n.observer)(function(){return"ready"!==o.default.modal.organization.accountAdd.status?null:(0,t.jsx)(ly,{})});var lS=e.i(38797);let lO=(0,lS.default)((0,t.jsx)("path",{d:"M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3z"}),"OpenInNew");var l$=e.i(10957);let{CARD_USAGE:lF,BANK_NAME:lA,SERVICE_TYPE:lN}=L.default.enums;function lL(){let e=o.default.modal.organization.cardAdd,n="edit"===e.mode,l=o.default.organizationSetting.staff.organizationId,a=o.default.data.organization.bankAccountList,d=a.data??[],[s,c]=(0,i.useState)(e.cardUsage),[f,u]=(0,i.useState)(""===e.bankAccountId?l$.SELECT_EMPTY_VALUE:e.bankAccountId),[h,p]=(0,i.useState)(e.cardNumberHead),[x,g]=(0,i.useState)(e.cardNumberTail),[m,b]=(0,i.useState)(""),[w,v]=(0,i.useState)(!1),j=f===l$.SELECT_EMPTY_VALUE?"":f,y=s!==e.cardUsage||j!==e.bankAccountId||h!==e.cardNumberHead||x!==e.cardNumberTail;(0,i.useEffect)(()=>{if(null===l)return void a.reset();let e=a.query;(null===e||!0===e||e.orgId!==l)&&a.setQuery({orgId:l})},[a,l]);let _=()=>{w||(c(e.cardUsage),u(""===e.bankAccountId?l$.SELECT_EMPTY_VALUE:e.bankAccountId),p(e.cardNumberHead),g(e.cardNumberTail),b(""),e.close())},C=async()=>{if(w||n&&!1===y)return;if(4!==h.length)return void b("카드번호 앞 4자리를 입력해주세요.");if(x.length<3||x.length>4)return void b("카드번호 끝 3~4자리를 입력해주세요.");if(null===l)return void o.default.ui.layout.toast.error(n?"기관 식별자가 없어 카드를 수정할 수 없습니다.":"기관 식별자가 없어 카드를 생성할 수 없습니다.");b(""),v(!0);let t={cardNumber:`${h}-****-****-${x}`,bankAccountId:f===l$.SELECT_EMPTY_VALUE?void 0:f,cardUsage:s},[i]=n&&null!==e.cardId?await o.default.data.organization.cardList.patch({orgId:l,cardId:e.cardId,payload:t}):await o.default.data.organization.cardList.create({orgId:l,payload:t});if(null!==i){v(!1),o.default.ui.layout.toast.error(i.message);return}v(!1),_()};return(0,t.jsx)(r.default,{children:(0,t.jsxs)(ll,{children:[(0,t.jsxs)(lo,{children:[(0,t.jsx)(lr,{children:(0,t.jsx)(la,{children:n?"카드 정보 수정하기":"카드 정보 추가하기"})}),(0,t.jsx)(ld,{children:(0,t.jsxs)(lP,{onClick:_,disabled:w,children:[(0,t.jsx)(li.default,{sx:{fontSize:20}}),"닫기"]})})]}),(0,t.jsxs)(lc,{children:[(0,t.jsxs)(lf,{children:[(0,t.jsx)(lh,{children:"카드번호의 앞 4자리와 끝 3~4자리를 입력해주세요."}),(0,t.jsxs)(lM,{children:[(0,t.jsx)(lU,{placeholder:"0000",maxLength:4,value:h,onChange:e=>{p(e.target.value.replace(/[^0-9]/g,"")),b("")}}),(0,t.jsx)(lU,{placeholder:"****",value:"****",disabled:!0}),(0,t.jsx)(lU,{placeholder:"****",value:"****",disabled:!0}),(0,t.jsx)(lU,{placeholder:"0000",maxLength:4,value:x,onChange:e=>{g(e.target.value.replace(/[^0-9]/g,"")),b("")}})]}),(0,t.jsx)(lb,{$isVisible:m.trim().length>0,children:m}),(0,t.jsx)(lW,{$isVisible:0===m.trim().length,children:"⚠ 가운데 8자리는 입력하지 않습니다."})]}),(0,t.jsxs)(lf,{children:[(0,t.jsx)(lh,{children:"카드와 연결된 계좌가 있는 경우, 등록된 계좌를 선택해주세요."}),(0,t.jsxs)(lD,{$isEmptySelected:f===l$.SELECT_EMPTY_VALUE,value:f,onChange:e=>{u(e.target.value)},disabled:"loading"===a.status,children:[(0,t.jsx)("option",{value:l$.SELECT_EMPTY_VALUE,disabled:!0,children:"계좌 없음"}),d.map(e=>(0,t.jsxs)("option",{value:e.id,children:[e.serviceType?`${lN[e.serviceType].label} 서비스 `:"- ",e.accountNumber," (은행 ",lA[e.bankName].label,", 예금주"," ",e.accountHolder??"-",")"]},e.id))]}),(0,t.jsxs)(lB,{children:[(0,t.jsx)(lV,{children:"⚠ 원하는 계좌가 목록에 없나요?"}),(0,t.jsxs)(lH,{onClick:()=>{w||(_(),o.default.modal.organization.accountAdd.show())},type:"button",disabled:w,children:["계좌 먼저 등록하기",(0,t.jsx)(lO,{sx:{fontSize:16,position:"relative",top:-1}})]})]})]}),(0,t.jsxs)(lf,{children:[(0,t.jsx)(lh,{children:"카드 용도를 선택하세요."}),(0,t.jsx)(lR,{value:s,onChange:e=>{let t=e.target.value;t in lF&&c(t)},children:Object.entries(lF).map(([e,n])=>(0,t.jsx)("option",{value:e,children:n.label},e))})]})]}),(0,t.jsxs)(lw,{children:[(0,t.jsx)(lY,{onClick:()=>{w||(c("OPERATING"),u(l$.SELECT_EMPTY_VALUE),p(""),g(""),b(""))},disabled:w,children:"내용 삭제 후 새로 입력 (초기화)"}),(0,t.jsxs)(lX,{onClick:()=>{C()},disabled:w||n&&!1===y,children:[(0,t.jsx)(tt.default,{sx:{fontSize:20}}),"저장"]})]})]})})}let lP=(0,l.default)(s.default.Button.Outlined).withConfig({componentId:"zh__sc-4440bebb-0"})`
  ${ls}
`,lR=(0,l.default)(s.default.Input.Select).withConfig({componentId:"zh__sc-4440bebb-1"})`
  ${lp}
  width: 180px;
`,lD=(0,l.default)(s.default.Input.Select).withConfig({componentId:"zh__sc-4440bebb-2"})`
  ${lp}
  width: 100%;
  color: ${({$isEmptySelected:e})=>e?"#9ca3af":"#0a0a0a"};
`,lM=l.default.div.withConfig({componentId:"zh__sc-4440bebb-3"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,lU=(0,l.default)(s.default.Input.Text).withConfig({componentId:"zh__sc-4440bebb-4"})`
  ${lp}
  width: 75px;
  text-align: center;

  &:disabled {
    color: #6b7280;
    background: #f3f4f6;
  }
`,lW=(0,l.default)(lb).withConfig({componentId:"zh__sc-4440bebb-5"})`
  color: #ff6900;
`,lB=l.default.div.withConfig({componentId:"zh__sc-4440bebb-6"})`
  position: absolute;
  right: 0;
  bottom: -24px;
  left: 0;

  display: flex;
  gap: 10px;
  align-items: center;
`,lV=l.default.div.withConfig({componentId:"zh__sc-4440bebb-7"})`
  font-size: 13px;
  line-height: 1.35;
  color: #ff6900;
`,lH=l.default.button.withConfig({componentId:"zh__sc-4440bebb-8"})`
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
`,lY=(0,l.default)(s.default.Button.Outlined).withConfig({componentId:"zh__sc-4440bebb-9"})`
  ${ls}
`,lX=(0,l.default)(s.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-4440bebb-10"})`
  ${ls}
`,lG=(0,n.observer)(function(){return"ready"!==o.default.modal.organization.cardAdd.status?null:(0,t.jsx)(lL,{})});var lK=e.i(93847),lq=e.i(58315),lJ=e.i(7242),lQ=e.i(86400);function lZ(){let e=o.default.modal.organization.contactAdd,n="edit"===e.mode,l=o.default.organizationSetting.staff.staffAccountList,[a,d]=(0,i.useState)(e.serviceType??l$.SELECT_EMPTY_VALUE),[s,c]=(0,i.useState)(e.staffId??l$.SELECT_EMPTY_VALUE),[f,u]=(0,i.useState)(e.phoneNumber),[h,p]=(0,i.useState)(e.mobileProvider),[x,g]=(0,i.useState)(""),[m,b]=(0,i.useState)(!1),w=()=>{d(e.serviceType??l$.SELECT_EMPTY_VALUE),c(e.staffId??l$.SELECT_EMPTY_VALUE),u(e.phoneNumber),p(e.mobileProvider),g("")},v=()=>{m||(w(),e.close())},j=async()=>{if(m)return;let t=f.trim();if(""===t)return void g("휴대폰 번호는 필수 입력값입니다.");if(!0!==lQ.default.brand.phoneNumber.is(t))return void g("휴대폰 번호 형식이 올바르지 않습니다.");g(""),b(!0);let i={serviceType:a===l$.SELECT_EMPTY_VALUE?void 0:a,staffId:s===l$.SELECT_EMPTY_VALUE?void 0:s,phoneNumber:t,mobileProvider:h},[l]=n&&null!==e.contactId?await o.default.organizationSetting.staff.patchContact({contactId:e.contactId,payload:i}):await o.default.organizationSetting.staff.createContact(i);if(null!==l){b(!1),o.default.ui.layout.toast.error(l.message);return}b(!1),v()};return(0,t.jsx)(r.default,{children:(0,t.jsxs)(ll,{children:[(0,t.jsxs)(lo,{children:[(0,t.jsx)(lr,{children:(0,t.jsx)(la,{children:n?"연락처 수정하기":"연락처 추가하기"})}),(0,t.jsx)(ld,{children:(0,t.jsxs)(l1,{onClick:v,disabled:m,children:[(0,t.jsx)(li.default,{sx:{fontSize:20}}),"닫기"]})})]}),(0,t.jsxs)(lc,{children:[(0,t.jsxs)(lf,{children:[(0,t.jsxs)(lu,{children:[(0,t.jsx)(lh,{children:"서비스 종류를 선택해주세요."}),(0,t.jsx)(lm,{children:"필수 입력값이 아닙니다. 입력란을 비워둘 수 있습니다."})]}),(0,t.jsxs)(l2,{value:a,onChange:e=>{let t=e.target.value;d(t in lJ.default?t:l$.SELECT_EMPTY_VALUE)},children:[Object.entries(lJ.default).map(([e,n])=>(0,t.jsxs)("option",{value:e,children:[n.label," 서비스"]},e)),(0,t.jsx)("option",{value:l$.SELECT_EMPTY_VALUE,children:"선택 안함"})]})]}),(0,t.jsxs)(lf,{children:[(0,t.jsxs)(lu,{children:[(0,t.jsx)(lh,{children:"담당자를 선택해주세요."}),(0,t.jsx)(lm,{children:"필수 입력값이 아닙니다. 입력란을 비워둘 수 있습니다."})]}),(0,t.jsxs)(l2,{style:{width:263},value:s,onChange:e=>{c(e.target.value)},children:[l.map(e=>(0,t.jsx)("option",{value:e.id,children:`${e.name} (직급 ${lq.default[e.position].label})`},e.id)),(0,t.jsx)("option",{value:l$.SELECT_EMPTY_VALUE,children:"선택 안함"})]})]}),(0,t.jsxs)(lf,{children:[(0,t.jsxs)(lu,{children:[(0,t.jsx)(lh,{children:"휴대폰 번호 및 통신사를 선택해주세요."}),(0,t.jsx)(lm,{children:"필수 입력값 입니다."})]}),(0,t.jsxs)(l6,{children:[(0,t.jsx)(l4,{style:{width:191},placeholder:"010-0000-0000",value:f,onChange:e=>{var t;t=e.target.value,g(""),u(lQ.default.brand.phoneNumber.format(t))}}),(0,t.jsx)(l2,{style:{width:131},value:h,onChange:e=>{let t=e.target.value;t in lK.default&&p(t)},children:Object.entries(lK.default).map(([e,n])=>(0,t.jsx)("option",{value:e,children:n.label},e))})]}),(0,t.jsx)(lb,{$isVisible:x.trim().length>0,children:x})]})]}),(0,t.jsxs)(lw,{children:[(0,t.jsx)(l3,{onClick:()=>{m||w()},disabled:m,children:"내용 삭제 후 새로 입력 (초기화)"}),(0,t.jsxs)(l5,{onClick:()=>{j()},disabled:m,children:[(0,t.jsx)(tt.default,{sx:{fontSize:20}}),n?"수정":"저장"]})]})]})})}let l0=(0,n.observer)(function(){return"ready"!==o.default.modal.organization.contactAdd.status?null:(0,t.jsx)(lZ,{})}),l1=(0,l.default)(s.default.Button.Outlined).withConfig({componentId:"zh__sc-665cc4f2-0"})`
  ${ls}
`,l2=(0,l.default)(s.default.Input.Select).withConfig({componentId:"zh__sc-665cc4f2-1"})`
  ${lp}
  width: 131px;
`,l4=(0,l.default)(s.default.Input.Text).withConfig({componentId:"zh__sc-665cc4f2-2"})`
  ${lp}
`,l6=l.default.div.withConfig({componentId:"zh__sc-665cc4f2-3"})`
  display: flex;
  gap: 12px;
  align-items: center;
`,l3=(0,l.default)(s.default.Button.Outlined).withConfig({componentId:"zh__sc-665cc4f2-4"})`
  ${ls}
`,l5=(0,l.default)(s.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-665cc4f2-5"})`
  ${ls}
`,l8=(0,n.observer)(function({acceptFileTypes:e,isError:n,onSelectFile:l}){let{isWindowFileDragging:r}=o.default.ui.layout,a=(0,i.useRef)(null);x(e=>{let t=e[0];void 0!==t&&l(t)});let d=n?"지원하지 않는 파일 형식입니다.":r?"파일을 여기에 놓으면 업로드 됩니다.":"이곳에 파일을 끌어다 놓거나 (드래그 앤 드롭), 클릭하여 업로드하세요.";return(0,t.jsxs)(l9,{children:[(0,t.jsx)(l7,{children:"로고 또는 도장 이미지를 업로드해 주세요."}),(0,t.jsxs)(ot,{$isWindowFileDragging:r,$isError:n,onDragOver:e=>{e.preventDefault()},onDrop:e=>{e.preventDefault();let t=e.dataTransfer.files[0];void 0!==t&&l(t)},onClick:e=>{e.target instanceof HTMLElement&&(e.target.closest("button")||a.current?.click())},children:[!n&&(0,t.jsx)(on,{children:(0,t.jsx)(N,{size:26,color:"#4f39f6"})}),(0,t.jsxs)(oi,{children:[(0,t.jsx)(ol,{$isError:n,children:d}),(0,t.jsx)(oo,{children:"지원 파일 형식: PNG, JPG, JPEG"})]})]}),(0,t.jsx)(oe,{ref:a,type:"file",accept:e,onChange:e=>{let t=e.target.files?.[0];void 0!==t&&(l(t),e.target.value="")}})]})}),l9=l.default.div.withConfig({componentId:"zh__sc-f01fc0e2-0"})`
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
`,l7=l.default.div.withConfig({componentId:"zh__sc-f01fc0e2-1"})`
  font-size: 18px;
  font-weight: 700;
  font-style: normal;
  line-height: 24px; /* 133.333% */
  color: #101828;
  text-align: center;
`,oe=l.default.input.withConfig({componentId:"zh__sc-f01fc0e2-2"})`
  display: none;
`,ot=l.default.div.withConfig({componentId:"zh__sc-f01fc0e2-3"})`
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
`,on=l.default.div.withConfig({componentId:"zh__sc-f01fc0e2-4"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;
`,oi=l.default.div.withConfig({componentId:"zh__sc-f01fc0e2-5"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: center;
`,ol=l.default.div.withConfig({componentId:"zh__sc-f01fc0e2-6"})`
  font-size: 14px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px;
  color: ${({$isError:e})=>e?"#ff4d4f":"#4f39f6"};
  text-align: center;
`,oo=l.default.div.withConfig({componentId:"zh__sc-f01fc0e2-7"})`
  font-size: 14px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px;
  color: #99a1af;
`;var or=e.i(28095);let oa=(0,lS.default)((0,t.jsx)("path",{d:"M19 13H5v-2h14z"}),"Remove");var od=e.i(47885),os=e.i(11974);let oc=async(e,t)=>""===e||1===t?e:new Promise(n=>{let i=new Image;i.onload=()=>{let l=document.createElement("canvas");l.width=235,l.height=235;let o=l.getContext("2d");if(null===o)return void n(e);let r=Math.min(l.width/i.width,l.height/i.height),a=i.width*r*t,d=i.height*r*t,s=(l.width-a)/2,c=(l.height-d)/2;o.clearRect(0,0,l.width,l.height),o.drawImage(i,s,c,a,d),n(l.toDataURL("image/png"))},i.onerror=()=>{n(e)},i.src=e});function of({file:e,onProcessedImageChange:n}){let[l,o]=(0,i.useState)(100),[r,a]=(0,i.useState)(100),[d,s]=(0,i.useState)(100),[c,f]=(0,i.useState)(""),[u,h]=(0,i.useState)(""),p=(0,i.useRef)(0),x=(0,i.useRef)(0);return(0,i.useEffect)(()=>{let e=window.setTimeout(()=>{s(r)},120);return()=>{window.clearTimeout(e)}},[r]),(0,i.useEffect)(()=>{let t=p.current+1;p.current=t,(async()=>{let{adjustedUrl:n}=await (0,os.processBackgroundRemoval)({file:e,whiteThreshold:od.DEFAULT_WHITE_THRESHOLD,softness:od.DEFAULT_SOFTNESS,contrast:d,selectionRect:null});p.current===t&&f(n)})()},[d,e,n]),(0,i.useEffect)(()=>{if(""===c)return;let e=x.current+1;x.current=e,(async()=>{let t=await oc(c,l/100);x.current===e&&(h(t),n(t))})()},[c,l,n]),(0,t.jsxs)(ou,{children:[(0,t.jsxs)(oh,{children:[(0,t.jsx)(op,{children:(0,t.jsx)(_.default.BackgroundReplace,{size:16,color:"#1C1B1F"})}),(0,t.jsxs)(ox,{children:["업로드된 ",e.name," 이미지의 배경을 제거했습니다.",(0,t.jsx)("br",{}),"아래에서 크기와 선명도를 확인한 뒤 저장을 완료해주세요!"]})]}),(0,t.jsxs)(og,{children:[(0,t.jsx)(om,{children:"이미지 미리보기"}),(0,t.jsxs)(ob,{children:[(0,t.jsxs)(ow,{children:[(0,t.jsx)(ov,{children:""!==u&&(0,t.jsx)(oj,{src:u,alt:`${e.name} 미리보기`})}),(0,t.jsxs)(oy,{children:[(0,t.jsx)(o_,{children:(0,t.jsx)(tn.default,{sx:{fontSize:22}})}),(0,t.jsx)(oC,{children:"체크 무늬는 투명 배경을 뜻합니다. 실제 저장 시에는 배경 없이 저장됩니다."})]})]}),(0,t.jsxs)(oz,{children:[(0,t.jsxs)(oI,{children:[(0,t.jsx)(ok,{children:"크기 조정하기"}),(0,t.jsxs)(oE,{children:[(0,t.jsxs)(oT,{children:[(0,t.jsx)(oS,{onClick:()=>{o(e=>Math.max(e-10,100))},disabled:l<=100,children:(0,t.jsx)(oa,{sx:{fontSize:24}})}),(0,t.jsx)(oO,{children:"작게"})]}),(0,t.jsx)(o$,{min:100,max:500,value:l,onChange:o}),(0,t.jsxs)(oT,{children:[(0,t.jsx)(oS,{onClick:()=>{o(e=>Math.min(e+10,500))},disabled:l>=500,children:(0,t.jsx)(or.default,{sx:{fontSize:24}})}),(0,t.jsx)(oO,{children:"크게"})]})]})]}),(0,t.jsx)(oF,{}),(0,t.jsxs)(oI,{children:[(0,t.jsx)(ok,{children:"선명도 조정하기"}),(0,t.jsxs)(oE,{children:[(0,t.jsxs)(oT,{children:[(0,t.jsx)(oS,{onClick:()=>{a(e=>{let t=Math.max(e-5,od.MIN_CONTRAST);return s(t),t})},disabled:r<=od.MIN_CONTRAST,children:(0,t.jsx)(oa,{sx:{fontSize:24}})}),(0,t.jsx)(oO,{children:"부드럽게"})]}),(0,t.jsx)(o$,{min:od.MIN_CONTRAST,max:od.MAX_CONTRAST,value:r,onChange:a,onChangeEnd:s}),(0,t.jsxs)(oT,{children:[(0,t.jsx)(oS,{onClick:()=>{a(e=>{let t=Math.min(e+5,od.MAX_CONTRAST);return s(t),t})},disabled:r>=od.MAX_CONTRAST,children:(0,t.jsx)(or.default,{sx:{fontSize:24}})}),(0,t.jsx)(oO,{children:"선명하게"})]})]})]})]})]})]})]})}let ou=l.default.div.withConfig({componentId:"zh__sc-3b741e84-0"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  align-self: stretch;

  height: 100%;
  padding: 32px 24px;

  background: #fff;
`,oh=l.default.div.withConfig({componentId:"zh__sc-3b741e84-1"})`
  display: flex;
  gap: 4px;
  align-items: flex-start;
  align-self: stretch;

  padding: 12px;
  border: 1px solid #e5e7eb;
  border-radius: 6px;

  background: #f5f8ff;
`,op=l.default.div.withConfig({componentId:"zh__sc-3b741e84-2"})``,ox=l.default.div.withConfig({componentId:"zh__sc-3b741e84-3"})`
  font-size: 14px;
  font-weight: 400;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
`,og=l.default.div.withConfig({componentId:"zh__sc-3b741e84-4"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;
`,om=l.default.div.withConfig({componentId:"zh__sc-3b741e84-5"})`
  font-size: 14px;
  font-weight: 700;
  font-style: normal;
  line-height: 16px; /* 114.286% */
  color: #0a0a0a;
`,ob=l.default.div.withConfig({componentId:"zh__sc-3b741e84-6"})`
  display: flex;
  gap: 24px;
  align-items: flex-start;
  align-self: stretch;
`,ow=l.default.section.withConfig({componentId:"zh__sc-3b741e84-7"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;

  width: 235px;
`,ov=l.default.div.withConfig({componentId:"zh__sc-3b741e84-8"})`
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
`,oj=l.default.img.withConfig({componentId:"zh__sc-3b741e84-9"})`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`,oy=l.default.div.withConfig({componentId:"zh__sc-3b741e84-10"})`
  display: flex;
  gap: 4px;
  align-items: flex-start;
  align-self: stretch;

  color: #0a0a0a;
`,o_=l.default.div.withConfig({componentId:"zh__sc-3b741e84-11"})`
  position: relative;
  top: -3px;
`,oC=l.default.div.withConfig({componentId:"zh__sc-3b741e84-12"})`
  font-size: 14px;
  font-weight: 400;
  font-style: normal;
  line-height: 16px; /* 114.286% */
`,oz=l.default.section.withConfig({componentId:"zh__sc-3b741e84-13"})`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
`,oI=l.default.div.withConfig({componentId:"zh__sc-3b741e84-14"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;
`,ok=l.default.h5.withConfig({componentId:"zh__sc-3b741e84-15"})`
  font-size: 14px;
  font-weight: 700;
  font-style: normal;
  line-height: 16px; /* 114.286% */
  color: #0a0a0a;
`,oE=l.default.div.withConfig({componentId:"zh__sc-3b741e84-16"})`
  display: flex;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;
  justify-content: center;
`,oT=l.default.div.withConfig({componentId:"zh__sc-3b741e84-17"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 56px;
`,oS=(0,l.default)(s.default.Button.Outlined).withConfig({componentId:"zh__sc-3b741e84-18"})`
  display: flex;
  gap: 4px;
  align-items: center;
  align-self: stretch;

  height: 36px;
  padding: 8px 16px;
`,oO=l.default.div.withConfig({componentId:"zh__sc-3b741e84-19"})`
  display: flex;
  justify-content: center;

  font-size: 14px;
  font-weight: 400;
  font-style: normal;
  line-height: normal;
  color: #4f39f6;
  text-align: center;
`,o$=(0,l.default)(s.default.Input.Slider).withConfig({componentId:"zh__sc-3b741e84-20"})`
  position: relative;
  top: 10px;
`,oF=l.default.div.withConfig({componentId:"zh__sc-3b741e84-21"})`
  align-self: stretch;
  border-top: 1px solid #d1d5db;
`,oA=(0,n.observer)(function(){let e=o.default.modal.organization.imageAdjustUpload,{status:n,close:l,resetToUploadStep:a,selectedFile:d}=e,[s,c]=(0,i.useState)(!1),f=(0,i.useRef)(null);if((0,i.useEffect)(()=>"ready"!==n?void e.setToastContainer(null):(e.setToastContainer(f.current),()=>{e.setToastContainer(null)}),[e,n]),"ready"!==n)return null;let u=null===d,h="logo"===e.target?"로고":"도장",p=async()=>{!0===await e.save()&&c(!1)};return(0,t.jsx)(r.default,{children:(0,t.jsxs)(oN,{ref:f,children:[(0,t.jsxs)(lo,{children:[(0,t.jsx)(lr,{children:(0,t.jsx)(la,{children:"이미지 업로드하기"})}),(0,t.jsx)(ld,{children:(0,t.jsxs)(oL,{onClick:()=>{c(!1),l()},children:[(0,t.jsx)(li.default,{sx:{fontSize:20}}),"닫기"]})})]}),(0,t.jsx)(oP,{children:u?(0,t.jsx)(l8,{acceptFileTypes:e.acceptFileTypes,isError:e.isError,onSelectFile:e.setSelectedFile}):(0,t.jsx)(of,{file:d,onProcessedImageChange:e.setProcessedImageDataUrl})}),(0,t.jsxs)(lw,{children:[(0,t.jsx)(oR,{onClick:()=>{c(!1),a()},disabled:u||e.isSaving,children:"다시 업로드하기"}),(0,t.jsxs)(oD,{onClick:()=>{c(!0)},disabled:u||e.isSaving,children:[(0,t.jsx)(tt.default,{sx:{fontSize:20}}),"최종확인 및 저장"]})]}),(0,t.jsx)(oM,{isOpen:s,targetLabel:h,isSaving:e.isSaving,onCancel:()=>{e.isSaving||c(!1)},onConfirm:()=>{p()}})]})})}),oN=(0,l.default)(ll).withConfig({componentId:"zh__sc-665af392-0"})`
  position: relative;
  width: 626px;
`,oL=(0,l.default)(s.default.Button.Outlined).withConfig({componentId:"zh__sc-665af392-1"})`
  ${ls}
`,oP=(0,l.default)(lc).withConfig({componentId:"zh__sc-665af392-2"})`
  padding: 0;
`,oR=(0,l.default)(s.default.Button.Outlined).withConfig({componentId:"zh__sc-665af392-3"})`
  ${ls}
`,oD=(0,l.default)(s.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-665af392-4"})`
  ${ls}
`;function oM({isOpen:e,targetLabel:n,isSaving:i,onCancel:l,onConfirm:o}){return!0!==e?null:(0,t.jsx)(oU,{children:(0,t.jsxs)(oW,{children:[(0,t.jsxs)(oB,{children:[(0,t.jsxs)(oV,{children:[n," 이미지를 저장할까요?"]}),(0,t.jsxs)(oH,{children:["저장된 ",n," 이미지는 출력용 서류에서 사용할 수 있습니다.",(0,t.jsx)("br",{}),"이미 출력했거나 최종확인한 서류는 다시 확인이 필요할 수 있습니다."]})]}),(0,t.jsxs)(oY,{children:[(0,t.jsx)(oX,{type:"button",onClick:l,disabled:!0===i,children:"취소하기"}),(0,t.jsx)(oG,{type:"button",onClick:o,disabled:!0===i,children:"저장하기"})]})]})})}let oU=l.default.div.withConfig({componentId:"zh__sc-665af392-5"})`
  position: fixed;
  z-index: 3100;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgb(17 24 39 / 36%);
`,oW=l.default.div.withConfig({componentId:"zh__sc-665af392-6"})`
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
`,oB=l.default.div.withConfig({componentId:"zh__sc-665af392-7"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;

  width: 100%;
`,oV=l.default.h3.withConfig({componentId:"zh__sc-665af392-8"})`
  margin: 0;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px;
  color: #000;
`,oH=l.default.p.withConfig({componentId:"zh__sc-665af392-9"})`
  margin: 0;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px;
  color: #000;
`,oY=l.default.div.withConfig({componentId:"zh__sc-665af392-10"})`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: flex-end;

  width: 100%;
`,oX=(0,l.default)(s.default.Button.Outlined).withConfig({componentId:"zh__sc-665af392-11"})`
  height: 36px;
  padding: 8px 16px;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px;
`,oG=(0,l.default)(s.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-665af392-12"})`
  height: 36px;
  padding: 8px 16px;

  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: 20px;
`;var oK=e.i(23416),oq=e.i(6412),oJ=e.i(13269);function oQ(){let e=o.default.modal.organization.staffAccountAdd,n="edit"===e.mode,[l,a]=(0,i.useState)(e.name),[d,s]=(0,i.useState)(e.position??l$.SELECT_EMPTY_VALUE),[c,f]=(0,i.useState)(e.phoneNumber),[u,h]=(0,i.useState)(e.sealImagePath),[p,x]=(0,i.useState)(""),[g,m]=(0,i.useState)(""),[b,w]=(0,i.useState)(!1),v=()=>{a(e.name),s(e.position??l$.SELECT_EMPTY_VALUE),f(e.phoneNumber),h(e.sealImagePath),x(""),m("")},j=()=>{b||(v(),e.close())},y=async e=>{try{let t=await fetch(e);if(!0!==t.ok)return[Error("Failed to convert data URL to blob"),null];let n=await t.blob();return[null,n]}catch(e){return[e instanceof Error?e:Error("Failed to convert data URL to blob"),null]}},C=async(e,t,n)=>{let[i,l]=await y(e);if(null!==i)return[i,null];let[o,r]=await oK.default.upload.createPresignedUploadUrl({category:oJ.default.STAFF_SEAL,contentType:oq.default.PNG,organizationId:n,staffAccountId:t});if(null!==o)return[o,null];let[a]=await oK.default.upload.putFileToPresignedUploadUrl({uploadUrl:r.uploadUrl,contentType:oq.default.PNG,file:l});return null!==a?[a,null]:[null,r.path]},z=async e=>{let t=o.default.data.organization.contactList.query;if(!0==(null!==t&&!0!==t&&t.orgId===e))try{await o.default.data.organization.contactList.refetch()}catch{o.default.ui.layout.toast.error("서비스별 업무 연락처 목록을 새로고침하지 못했습니다.")}},I=async()=>{if(b)return;let t=l.trim();""===t?x("이름은 필수 입력값입니다."):x("");let i=c.trim();if(""!==i&&!0!==lQ.default.brand.phoneNumber.is(i))return void m("휴대폰 번호 형식이 올바르지 않습니다.");if(m(""),""===t)return;w(!0);let r=e.staffAccountId,a=o.default.organizationSetting.staff.organizationId;if(!0!==n){if(null===a){w(!1),o.default.ui.layout.toast.error("기관 식별자가 없어 근무자를 생성할 수 없습니다.");return}let[e,n]=await o.default.organizationSetting.staff.createStaffAccount({organizationId:a,name:t,role:"STAFF",position:d===l$.SELECT_EMPTY_VALUE?void 0:d,phoneNumber:""===i?void 0:i});if(null!==e||null===n){w(!1),o.default.ui.layout.toast.error(e?.message??"근무자 생성에 실패했습니다.");return}r=n.id,a=n.organizationId}else{if(null===r){w(!1),o.default.ui.layout.toast.error("수정할 근무자 정보를 찾지 못했습니다.");return}let[e]=await o.default.data.staffAccount.patch({id:r,payload:{name:t,position:d===l$.SELECT_EMPTY_VALUE?void 0:d,phoneNumber:""===i?void 0:i}});if(null!==e){w(!1),o.default.ui.layout.toast.error("근무자 수정에 실패했습니다.");return}null!==a&&await z(a)}let s=u.trim();if(s.startsWith("data:")){if(null===r||null===a){w(!1),o.default.ui.layout.toast.error("도장 업로드 대상 정보를 찾지 못했습니다.");return}let[e,t]=await C(s,r,a);if(null!==e||null===t){w(!1),o.default.ui.layout.toast.error(n?"근무자 정보는 수정되었지만 도장 업로드에 실패했습니다. 다시 시도해 주세요.":"근무자는 생성되었지만 도장 업로드에 실패했습니다. 수정에서 다시 업로드해 주세요."),j();return}let[i]=await o.default.data.staffAccount.patch({id:r,payload:{sealImagePath:t}});if(null!==i){w(!1),o.default.ui.layout.toast.error(n?"근무자 도장 경로 저장에 실패했습니다. 다시 시도해 주세요.":"근무자는 생성되었지만 도장 경로 저장에 실패했습니다. 수정에서 다시 저장해 주세요."),j();return}}w(!1),j()};return(0,t.jsx)(r.default,{children:(0,t.jsxs)(ll,{children:[(0,t.jsxs)(lo,{children:[(0,t.jsx)(lr,{children:(0,t.jsx)(la,{children:n?"근무자 수정하기":"근무자 추가하기"})}),(0,t.jsx)(ld,{children:(0,t.jsxs)(o0,{onClick:j,disabled:b,children:[(0,t.jsx)(li.default,{sx:{fontSize:20}}),"닫기"]})})]}),(0,t.jsxs)(lc,{children:[(0,t.jsxs)(lf,{children:[(0,t.jsx)(lh,{children:"이름을 입력해주세요."}),(0,t.jsx)(o2,{placeholder:"이름을 입력해주세요",value:l,onChange:e=>{x(""),a(e.target.value)}}),(0,t.jsx)(lb,{$isVisible:p.trim().length>0,children:p})]}),(0,t.jsxs)(lf,{children:[(0,t.jsx)(lh,{children:"직급을 선택해주세요."}),(0,t.jsxs)(o1,{value:d,onChange:e=>{let t=e.target.value;s(t in lq.default?t:l$.SELECT_EMPTY_VALUE)},children:[Object.entries(lq.default).map(([e,n])=>(0,t.jsx)("option",{value:e,children:n.label},e)),(0,t.jsx)("option",{value:l$.SELECT_EMPTY_VALUE,children:"없음"})]})]}),(0,t.jsxs)(lf,{children:[(0,t.jsx)(lh,{children:"휴대폰 번호를 입력해주세요."}),(0,t.jsx)(o2,{placeholder:"010-0000-0000",value:c,onChange:e=>{var t;t=e.target.value,m(""),f(lQ.default.brand.phoneNumber.format(t))}}),(0,t.jsx)(lb,{$isVisible:g.trim().length>0,children:g})]}),(0,t.jsxs)(lf,{children:[(0,t.jsxs)(lu,{children:[(0,t.jsx)(lh,{children:"도장 이미지를 업로드 해주세요."}),(0,t.jsxs)(lm,{children:[(0,t.jsx)(tn.default,{sx:{fontSize:18},style:{marginRight:4,position:"relative",top:3}}),"해당 이미지는 서류에서 근무자의 도장이 필요시 사용됩니다."]})]}),(0,t.jsx)(o4,{children:(0,t.jsxs)(o6,{children:[(0,t.jsx)(o3,{$hasImage:u.trim().length>0,children:0===u.trim().length?(0,t.jsx)(_.default.Imagesmode,{size:34,color:"#d1d5db"}):(0,t.jsx)(o5,{src:u,alt:"도장 이미지 미리보기"})}),(0,t.jsx)(o8,{onClick:()=>{o.default.modal.organization.imageAdjustUpload.show("seal",u,{saveMode:"external",onProcessedImageDataUrl:e=>{h(e)}})},disabled:b,children:"업로드하기"})]})})]})]}),(0,t.jsxs)(lw,{children:[(0,t.jsx)(o9,{onClick:()=>{b||v()},disabled:b,children:"내용 삭제 후 새로 입력 (초기화)"}),(0,t.jsxs)(o7,{onClick:()=>{I()},disabled:b,children:[(0,t.jsx)(tt.default,{sx:{fontSize:20}}),"저장"]})]})]})})}let oZ=(0,n.observer)(function(){return"ready"!==o.default.modal.organization.staffAccountAdd.status?null:(0,t.jsx)(oQ,{})}),o0=(0,l.default)(s.default.Button.Outlined).withConfig({componentId:"zh__sc-2a48cfd9-0"})`
  ${ls}
`,o1=(0,l.default)(s.default.Input.Select).withConfig({componentId:"zh__sc-2a48cfd9-1"})`
  ${lp}
  width: 131px;
`,o2=(0,l.default)(s.default.Input.Text).withConfig({componentId:"zh__sc-2a48cfd9-2"})`
  ${lp}
  width: 100%;
`,o4=l.default.div.withConfig({componentId:"zh__sc-2a48cfd9-3"})`
  display: flex;
  gap: 12px;
  align-items: center;
`,o6=l.default.div.withConfig({componentId:"zh__sc-2a48cfd9-4"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
`,o3=l.default.div.withConfig({componentId:"zh__sc-2a48cfd9-5"})`
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
`,o5=l.default.img.withConfig({componentId:"zh__sc-2a48cfd9-6"})`
  width: 100%;
  height: 100%;
  border-radius: 6px;
  object-fit: cover;
`,o8=(0,l.default)(s.default.Button.Outlined).withConfig({componentId:"zh__sc-2a48cfd9-7"})`
  ${ls}
  width: fit-content;
`,o9=(0,l.default)(s.default.Button.Outlined).withConfig({componentId:"zh__sc-2a48cfd9-8"})`
  ${ls}
`,o7=(0,l.default)(s.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-2a48cfd9-9"})`
  ${ls}
`;function re(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l0,{}),(0,t.jsx)(lT,{}),(0,t.jsx)(lG,{}),(0,t.jsx)(oZ,{}),(0,t.jsx)(oA,{})]})}let rt=(0,n.observer)(function(){let{serviceWorkerDraft:e,isSaving:n,resetToUploadStep:i,saveServiceWorkerDraft:l}=o.default.modal.serviceWorkerCreate,r=async()=>{await l()};return(0,t.jsxs)(rn,{children:[(0,t.jsx)(rl,{disabled:!e||n,onClick:i,children:"다시 업로드하기"}),(0,t.jsxs)(ro,{disabled:!e||n,onClick:()=>void r(),children:[(0,t.jsx)(d.Check,{size:16}),"최종확인 및 저장"]})]})}),rn=l.default.div.withConfig({componentId:"zh__sc-d659ae78-0"})`
  display: flex;
  gap: 16px;
  align-items: center;
  align-self: stretch;
  justify-content: flex-end;

  padding: 16px;
  border-top: 1px solid #e5e7eb;
`,ri=l.css`
  display: flex;
  gap: 10px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,rl=(0,l.default)(s.default.Button.Outlined).withConfig({componentId:"zh__sc-d659ae78-1"})`
  ${ri}
`,ro=(0,l.default)(s.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-d659ae78-2"})`
  ${ri}
`,rr=(0,n.observer)(function(){let{analyzeSelectedFile:e,isAnalyzing:n,selectedFile:i}=o.default.modal.serviceWorkerCreate;return(0,t.jsx)(ra,{children:(0,t.jsxs)(rd,{disabled:null===i||n,onClick:()=>{e()},children:["분석 시작",(0,t.jsx)(b,{size:16})]})})}),ra=l.default.div.withConfig({componentId:"zh__sc-3f938d0e-0"})`
  display: flex;
  gap: 10px;
  align-self: stretch;
  justify-content: flex-end;
`,rd=(0,l.default)(s.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-3f938d0e-1"})`
  display: flex;
  flex-shrink: 0;
  gap: 10px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,{FILE_EXTENSION_WHITELIST_BY_GROUP:rs}=C.default.file,rc=(0,n.observer)(function(){var e;let n,{clearSelectedFile:i,selectedFile:l,isAnalyzing:r}=o.default.modal.serviceWorkerCreate;if(null===l)return null;let a=-1===(n=(e=l.name).lastIndexOf("."))?"":e.slice(n).toLowerCase();return(0,t.jsx)(rf,{children:(0,t.jsxs)(ru,{children:[(0,t.jsxs)(rh,{children:[(0,t.jsx)(rp,{children:rs.IMAGE.some(e=>e===a)?(0,t.jsx)(_.default.Photo,{size:17,color:"#FA8E43"}):rs.AUDIO.some(e=>e===a)?(0,t.jsx)(_.default.SpeechToText,{size:17,color:"#A855F7"}):rs.DOCUMENT.some(e=>e===a)?(0,t.jsx)(_.default.News,{size:17,color:"#2264E8"}):null}),(0,t.jsx)(rx,{children:(0,t.jsx)(rg,{children:l.name})})]}),(0,t.jsxs)(rm,{onClick:i,disabled:r,children:["삭제",(0,t.jsx)(y.X,{size:16})]})]},`${l.name}-${l.size}-${l.lastModified}`)})}),rf=l.default.div.withConfig({componentId:"zh__sc-9108dce9-0"})`
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
`,ru=l.default.div.withConfig({componentId:"zh__sc-9108dce9-1"})`
  display: flex;
  flex-shrink: 0;
  gap: 24px;
  align-items: center;

  padding: 12px 16px;
  border-radius: 8px;

  background: #f6f8fb;
`,rh=l.default.div.withConfig({componentId:"zh__sc-9108dce9-2"})`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`,rp=l.default.div.withConfig({componentId:"zh__sc-9108dce9-3"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;
  border-radius: 4px;

  background: #fff;
`,rx=l.default.div.withConfig({componentId:"zh__sc-9108dce9-4"})`
  display: flex;
  align-items: center;
  align-self: stretch;

  width: 196px;
  height: 40px;

  color: #0a0a0a;
`,rg=l.default.div.withConfig({componentId:"zh__sc-9108dce9-5"})`
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #0a0a0a;
`,rm=l.default.button.withConfig({componentId:"zh__sc-9108dce9-6"})`
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
`;function rb(){let[e,n]=(0,i.useState)(0);return(0,i.useEffect)(()=>{let e=performance.now(),t=0,i=l=>{n(Math.min(100*(1-Math.exp(-((l-e)/1e3*.05))),98)),t=window.requestAnimationFrame(i)};return t=window.requestAnimationFrame(i),()=>{window.cancelAnimationFrame(t)}},[]),(0,t.jsx)(rw,{children:(0,t.jsx)(rv,{$progress:e})})}let rw=l.default.div.withConfig({componentId:"zh__sc-4ad7a7ff-0"})`
  overflow: hidden;
  display: flex;

  width: 362px;
  height: ${8}px;
  border-radius: 99px;

  background: #e6e0ff;
  background-color: #e5e2ff;
`,rv=l.default.div.attrs(({$progress:e})=>({style:{transform:`scaleX(${e/100})`}})).withConfig({componentId:"zh__sc-4ad7a7ff-1"})`
  transform-origin: left center;
  width: 100%;
  height: 100%;
  background-color: #5635ff;
`,rj=(0,n.observer)(function({disabled:e=!1}){let{isWindowFileDragging:n}=o.default.ui.layout,{selectedFile:i,isError:l,isAnalyzing:r,abortAnalyze:a}=o.default.modal.serviceWorkerCreate;return(0,t.jsxs)(r_,{children:[null===i&&!1===l&&(0,t.jsx)(rC,{children:(0,t.jsx)(N,{size:26,color:e?"#9CA3AF":ry[100]})}),(0,t.jsxs)(rz,{children:[(0,t.jsx)(rI,{$isError:l,$disabled:e,children:!0===l?"지원하지 않는 파일 형식입니다.":!0===n?"파일을 여기에 놓으면 업로드 됩니다.":!0===r?"업로드한 파일을 분석하고 있습니다.":"이곳에 파일을 끌어다 놓거나 (드래그 앤 드롭), 클릭하여 업로드하세요."}),(0,t.jsx)(rk,{$disabled:e,children:null!==i&&!1===r?"새 파일을 업로드하면 기존 파일이 교체됩니다.":"지원 파일 형식: 엑셀 파일"})]}),!0===r&&(0,t.jsx)(rb,{}),!0===r&&(0,t.jsx)(rE,{onClick:a,children:"중단하기"})]})}),{PRIMARY:ry}=L.default.style.color,r_=l.default.div.withConfig({componentId:"zh__sc-7f4896ee-0"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  align-self: stretch;
  justify-content: center;
`,rC=l.default.div.withConfig({componentId:"zh__sc-7f4896ee-1"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;
`,rz=l.default.div.withConfig({componentId:"zh__sc-7f4896ee-2"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  align-self: stretch;
  justify-content: center;
`,rI=l.default.div.withConfig({componentId:"zh__sc-7f4896ee-3"})`
  font-size: 14px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 142.857% */
  color: ${({$isError:e,$disabled:t})=>t?"#9CA3AF":e?"#ff4d4f":"#4f39f6"};
  text-align: center;
`,rk=l.default.div.withConfig({componentId:"zh__sc-7f4896ee-4"})`
  font-size: 14px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 142.857% */
  color: ${({$disabled:e})=>e?"#9CA3AF":"#99a1af"};
`,rE=(0,l.default)(s.default.Button.Outlined).withConfig({componentId:"zh__sc-7f4896ee-5"})`
  display: flex;
  gap: 10px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,rT=(0,n.observer)(function({disabled:e=!1}){let{isWindowFileDragging:n}=o.default.ui.layout,{acceptFileTypes:l,setSelectedFile:r,selectedFile:a,isError:d}=o.default.modal.serviceWorkerCreate,s=(0,i.useRef)(null);return x(t=>{if(e||0===t.length)return;let n=t[0];void 0!==n&&r(n)}),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(rS,{ref:s,type:"file",accept:l,onChange:t=>{if(e)return;let n=Array.from(t.target.files??[]);if(0===n.length)return;let i=n[0];void 0!==i&&(r(i),t.target.value="")},disabled:e}),(0,t.jsxs)(rO,{$isWindowFileDragging:n,$disabled:e,onDragOver:t=>{if(t.preventDefault(),e)return},onDrop:t=>{if(t.preventDefault(),e)return;let n=Array.from(t.dataTransfer.files);if(0===n.length)return;let i=n[0];void 0!==i&&r(i)},onClick:t=>{!e&&t.target instanceof HTMLElement&&(t.target.closest("button")||s.current?.click())},$isError:d,children:[null!==a&&(0,t.jsx)(rc,{}),(0,t.jsx)(rj,{disabled:e}),(0,t.jsx)(rr,{})]})]})}),rS=l.default.input.withConfig({componentId:"zh__sc-37be1ed1-0"})`
  display: none;
`,rO=l.default.div.withConfig({componentId:"zh__sc-37be1ed1-1"})`
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
`,r$=(0,n.observer)(function(){return(0,t.jsx)(rF,{children:(0,t.jsx)(rT,{disabled:!0})})}),rF=l.default.div.withConfig({componentId:"zh__sc-f40ff2c5-0"})`
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
`,{FILE_EXTENSION_WHITELIST_BY_GROUP:rA}=C.default.file,rN=(0,n.observer)(function(){var e;let n,{analyzedFile:l}=o.default.modal.serviceWorkerCreate,{ref:r,fire:a}=(0,ee.default)();if((0,i.useEffect)(()=>{null!==l&&a()},[l,a]),null===l)return null;let d=-1===(n=(e=l.name).lastIndexOf("."))?"":e.slice(n).toLowerCase();return(0,t.jsxs)(rL,{ref:r,children:[(0,t.jsxs)(rP,{children:[(0,t.jsxs)(rR,{children:[(0,t.jsx)(_.default.FindInPage,{size:18}),"AI 문서 인식 완료"]}),(0,t.jsxs)(rD,{children:["업로드된 서류들에서 정보를 성공적으로 추출했습니다. ",(0,t.jsx)("br",{}),"우측의 [활동지원사 기본 정보]가 올바르게 연동되었는지 확인 후, [최종 확인] 버튼을 눌러주세요."]})]}),(0,t.jsxs)(rM,{children:[(0,t.jsxs)(rU,{children:[(0,t.jsx)(_.default.CheckCircle,{size:18}),"분석 완료된 첨부 서류 (1건)"]}),(0,t.jsx)(rW,{children:(0,t.jsxs)(rB,{children:[(0,t.jsxs)(rV,{children:[(0,t.jsx)(rH,{children:rA.IMAGE.some(e=>e===d)?(0,t.jsx)(_.default.Photo,{size:17,color:"#FA8E43"}):rA.AUDIO.some(e=>e===d)?(0,t.jsx)(_.default.SpeechToText,{size:17,color:"#A855F7"}):rA.DOCUMENT.some(e=>e===d)?(0,t.jsx)(_.default.News,{size:17,color:"#2264E8"}):null}),(0,t.jsx)(rY,{children:(0,t.jsx)(rX,{children:l.name})})]}),(0,t.jsx)(rG,{children:"추출 완료"})]},`${l.name}-${l.size}-${l.lastModified}`)})]})]})}),rL=l.default.div.withConfig({componentId:"zh__sc-635d6973-0"})`
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
`,rP=l.default.div.withConfig({componentId:"zh__sc-635d6973-1"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  align-self: stretch;
`,rR=l.default.div.withConfig({componentId:"zh__sc-635d6973-2"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #0a0a0a;
`,rD=l.default.div.withConfig({componentId:"zh__sc-635d6973-3"})`
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
`,rM=l.default.div.withConfig({componentId:"zh__sc-635d6973-4"})`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  align-self: stretch;

  min-height: 0;
`,rU=l.default.div.withConfig({componentId:"zh__sc-635d6973-5"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #0a0a0a;
`,rW=l.default.div.withConfig({componentId:"zh__sc-635d6973-6"})`
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
`,rB=l.default.div.withConfig({componentId:"zh__sc-635d6973-7"})`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 355px;
  height: 64px;
  padding: 12px 16px;
  border-radius: 8px;

  background: #f6f8fb;
`,rV=l.default.div.withConfig({componentId:"zh__sc-635d6973-8"})`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`,rH=l.default.div.withConfig({componentId:"zh__sc-635d6973-9"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;
  border-radius: 4px;

  background: #fff;
`,rY=l.default.div.withConfig({componentId:"zh__sc-635d6973-10"})`
  display: flex;
  align-items: center;
  align-self: stretch;

  width: 196px;
  height: 40px;

  color: #0a0a0a;
`,rX=l.default.div.withConfig({componentId:"zh__sc-635d6973-11"})`
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #0a0a0a;
`,rG=l.default.div.withConfig({componentId:"zh__sc-635d6973-12"})`
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
`,rK=(0,n.observer)(function(){let{analyzedFile:e}=o.default.modal.serviceWorkerCreate;return(0,t.jsxs)(rq,{children:[null!==e&&(0,t.jsx)(rN,{}),(0,t.jsx)(r$,{})]})}),rq=l.default.div.withConfig({componentId:"zh__sc-9bac733d-0"})`
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
`,{BANK_NAME:rJ}=L.default.enums,rQ=e=>{let t=e.trim().match(/^(\d{6})-?(\d)(\d{0,6})$/);if(null===t)return"unknown";switch(t[2]){case"1":case"3":return"MALE";case"2":case"4":return"FEMALE";default:return"unknown"}},rZ=e=>{switch(e){case"MALE":return"남성";case"FEMALE":return"여성";case"unknown":return""}},r0=e=>e in rJ,r1=Object.keys(rJ).filter(r0)[0],r2=()=>{let e=new Date,[t,n]=ej.default.create(e.getFullYear(),e.getMonth()+1,e.getDate());return null!==t||null===n?null:n},r4=(0,n.observer)(function(){let{serviceWorkerDraft:e,analyzedServiceWorkerDraft:n,updateServiceWorkerDraft:l,getServiceWorkerDraftFieldError:r,clearServiceWorkerDraftFieldError:a}=o.default.modal.serviceWorkerCreate,d=(0,i.useRef)(!1);if((0,i.useEffect)(()=>{if(null===e||d.current||(d.current=!0,""!==(e.firstRegisteredDate??"").trim()))return;let t=r2();null!==t&&l(e=>({...e,firstRegisteredDate:t}))},[e,l]),null===e)return null;let c=e.serviceWorkerName??"",f=e.residentRegistrationNumber??"",u=e.firstRegisteredDate??"",h=e.phoneNumber??"",p=e.contact??"",x=e.address??"",g=e.postCode??"",m=e.addressDetail??"",b=e.bankName??r1,w=e.accountNumber??"",v=e.accountHolder??"",j=rQ(f),y=(e,t)=>""===r(e)?t:{...t,borderColor:"#ff4d4f",background:"#fff5f5"},_=e=>{let n=r(e);return""===n?null:(0,t.jsx)(an,{children:n})},C=(e,t)=>{let n=String(t??"").trim();return""!==n&&String(e).trim()===n},z=r2(),I=""===(n?.firstRegisteredDate??"").trim()&&null!==z&&u===z,k=C(u,n?.firstRegisteredDate??"")||I;return(0,t.jsxs)(r3,{children:[(0,t.jsx)(r5,{children:"인적사항"}),(0,t.jsxs)(r8,{children:[(0,t.jsxs)(r7,{children:[(0,t.jsxs)(ae,{children:["성명",(0,t.jsx)(r6,{})]}),(0,t.jsx)(s.default.Input.Text,{$autoFilled:C(c,n?.serviceWorkerName??""),style:y("serviceWorkerName",ao),value:c,onChange:e=>{a("serviceWorkerName"),l(t=>({...t,serviceWorkerName:e.target.value.trim()}))}}),_("serviceWorkerName")]}),(0,t.jsxs)(r7,{children:[(0,t.jsx)(ae,{children:"주민등록번호"}),(0,t.jsx)(s.default.Input.Text,{$autoFilled:C(f,n?.residentRegistrationNumber??""),style:y("residentRegistrationNumber",ao),value:f,onChange:e=>{var t;let n,i=e.target.value,o=e.currentTarget.selectionStart??i.length,r=(i.slice(0,o).match(/\d/g)??[]).length;a("residentRegistrationNumber");let d=ey.default.format(i);l(e=>({...e,residentRegistrationNumber:d})),t=e.currentTarget,n=((e,t)=>{if(t<=0)return 0;let n=0;for(let i=0;i<e.length;i+=1){let l=e[i];if(void 0!==l&&/\d/.test(l)&&(n+=1)===t)return i+1}return e.length})(d,r),"-"===d[n]&&(n+=1),requestAnimationFrame(()=>{document.activeElement===t&&t.setSelectionRange(n,n)})}}),_("residentRegistrationNumber")]}),(0,t.jsxs)(r7,{style:{flex:"none",width:266},children:[(0,t.jsx)(ae,{children:"성별"}),(0,t.jsx)(ai,{$autoFilled:C(rZ(j),rZ(rQ(n?.residentRegistrationNumber??""))),style:ao,value:rZ(j),placeholder:"주민등록번호와 연동되어 보여집니다.",readOnly:!0})]})]}),(0,t.jsxs)(r8,{children:[(0,t.jsxs)(r7,{children:[(0,t.jsxs)(ae,{children:["휴대전화번호",(0,t.jsx)(r6,{})]}),(0,t.jsx)(s.default.Input.Phone,{$autoFilled:C(h,n?.phoneNumber??""),style:y("phoneNumber",ao),value:h,onChange:e=>{a("phoneNumber"),l(t=>({...t,phoneNumber:e}))}}),_("phoneNumber")]}),(0,t.jsxs)(r7,{children:[(0,t.jsx)(ae,{children:"자택전화번호"}),(0,t.jsx)(s.default.Input.Contact,{$autoFilled:C(p,n?.contact??""),style:y("contact",ao),value:p,onChange:e=>{a("contact"),l(t=>({...t,contact:e}))}}),_("contact")]})]}),(0,t.jsxs)(r9,{children:[(0,t.jsxs)(r8,{children:[(0,t.jsxs)(r7,{children:[(0,t.jsx)(ae,{children:"주소"}),(0,t.jsx)(s.default.Input.Text,{$autoFilled:C(x,n?.address??""),style:y("address",ao),value:x,onChange:e=>{a("address"),l(t=>({...t,address:e.target.value}))}}),_("address")]}),(0,t.jsxs)(r7,{style:{flex:"none",width:191},children:[(0,t.jsx)(ae,{children:"우편번호"}),(0,t.jsx)(s.default.Input.PostCode,{$autoFilled:C(g,n?.postCode??""),style:y("postCode",ao),value:g,onChange:e=>{a("postCode"),l(t=>({...t,postCode:e}))}}),_("postCode")]})]}),(0,t.jsx)(r8,{children:(0,t.jsxs)(r7,{children:[(0,t.jsx)(ae,{children:"상세주소"}),(0,t.jsx)(s.default.Input.Text,{$autoFilled:C(m,n?.addressDetail??""),style:y("addressDetail",ao),value:m,onChange:e=>{a("addressDetail"),l(t=>({...t,addressDetail:e.target.value}))}}),_("addressDetail")]})})]}),(0,t.jsxs)(r8,{children:[(0,t.jsxs)(r7,{style:{flex:"none",width:191},children:[(0,t.jsx)(ae,{children:"은행명"}),(0,t.jsx)(al,{style:y("bankName",ao),value:b??"",onChange:e=>{let t=e.target.value;a("bankName"),l(e=>({...e,bankName:r0(t)?t:void 0}))},children:Object.entries(rJ).map(([e,n])=>(0,t.jsx)("option",{value:e,children:n.label},e))}),_("bankName")]}),(0,t.jsxs)(r7,{children:[(0,t.jsx)(ae,{children:"계좌번호"}),(0,t.jsx)(s.default.Input.Text,{$autoFilled:C(w,n?.accountNumber??""),style:y("accountNumber",ao),value:w,onChange:e=>{a("accountNumber"),l(t=>({...t,accountNumber:e.target.value}))}}),_("accountNumber")]}),(0,t.jsxs)(r7,{children:[(0,t.jsx)(ae,{children:"예금주"}),(0,t.jsx)(s.default.Input.Text,{$autoFilled:C(v,n?.accountHolder??""),style:y("accountHolder",ao),value:v,onChange:e=>{a("accountHolder"),l(t=>({...t,accountHolder:e.target.value}))}}),_("accountHolder")]})]}),(0,t.jsx)(r8,{children:(0,t.jsxs)(r7,{style:{flex:"none",width:191},children:[(0,t.jsx)(ae,{children:"접수일"}),(0,t.jsx)(s.default.Input.Date,{$autoFilled:k,style:y("firstRegisteredDate",{...ao,height:36}),value:u,onChange:e=>{(a("firstRegisteredDate"),""===e.trim())?l(e=>({...e,firstRegisteredDate:void 0})):ej.default.is(e)&&l(t=>({...t,firstRegisteredDate:e}))}}),_("firstRegisteredDate")]})})]})});function r6(){return(0,t.jsx)(at,{children:" *"})}let r3=l.default.div.withConfig({componentId:"zh__sc-b1e5df68-0"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  align-self: stretch;
`,r5=l.default.div.withConfig({componentId:"zh__sc-b1e5df68-1"})`
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
  text-align: center;
`,r8=l.default.div.withConfig({componentId:"zh__sc-b1e5df68-2"})`
  display: flex;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;

  min-height: 59px;
`,r9=l.default.div.withConfig({componentId:"zh__sc-b1e5df68-3"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-self: stretch;
`,r7=l.default.div.withConfig({componentId:"zh__sc-b1e5df68-4"})`
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
`,ae=l.default.div.withConfig({componentId:"zh__sc-b1e5df68-5"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #000;
  text-align: center;
`,at=l.default.span.withConfig({componentId:"zh__sc-b1e5df68-6"})`
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: normal;
  color: #e7000b;
`,an=l.default.div.withConfig({componentId:"zh__sc-b1e5df68-7"})`
  font-size: 12px;
  line-height: 16px;
  color: #ff4d4f;
`,ai=(0,l.default)(s.default.Input.Text).withConfig({componentId:"zh__sc-b1e5df68-8"})`
  &::placeholder {
    color: #0a0a0a;
  }
`,al=(0,l.default)(s.default.Input.Select).withConfig({componentId:"zh__sc-b1e5df68-9"})`
  width: 100%;
`,ao={display:"flex",padding:"4px 16px",alignItems:"center",gap:"10px",flex:"1 0 0",alignSelf:"stretch",fontSize:16,maxHeight:36};var ar=e.i(62150),aa=e.i(74659);let ad=Object.keys(ar.default).filter(function(e){return e in ar.default}),as=Object.keys(aa.default).filter(function(e){return e in aa.default}),ac=["소지","미소지"],af=(0,n.observer)(function(){let{serviceWorkerDraft:e,updateServiceWorkerDraft:n,getServiceWorkerDraftFieldError:i,clearServiceWorkerDraftFieldError:l}=o.default.modal.serviceWorkerCreate;if(null===e)return null;let r=e.availableTimes??[],a=e.regions??[],d=e.serviceTypes??[],s=e.hasVehicle,c=e.preferredWeeklyWorkingHours,f=(e,t)=>t.includes(e)?t.filter(t=>t!==e):[...t,e],u=i("availableTimes"),h=i("preferredWeeklyWorkingHours"),p=i("regions"),x=i("serviceTypes"),g=i("hasVehicle");return(0,t.jsxs)(au,{children:[(0,t.jsxs)(ah,{children:[(0,t.jsx)(ap,{children:"근무 가능 시간"}),(0,t.jsxs)(ax,{children:[(0,t.jsx)(tn.default,{sx:{fontSize:20}}),(0,t.jsx)(ag,{children:"칸을 클릭하면 시간을 선택할 수 있습니다. 클릭&드래그하면 연속으로 선택할 수 있습니다."})]})]}),(0,t.jsx)(am,{value:r,onChange:e=>{let t=e.target.value;l("availableTimes"),n(e=>({...e,availableTimes:t}))}}),""!==u&&(0,t.jsx)(aE,{children:u}),(0,t.jsxs)(ab,{children:[(0,t.jsx)(aw,{children:"희망 근로 시간"}),(0,t.jsxs)(av,{children:[(0,t.jsx)(ay,{children:"총"}),(0,t.jsx)(aj,{value:void 0===c?"":String(c),placeholder:"00",maxLength:2,style:""===h?void 0:{borderColor:"#ff4d4f",background:"#fff5f5"},onChange:e=>{let t=e.target.value.replace(/\D/g,"");if(""===t){l("preferredWeeklyWorkingHours"),n(e=>({...e,preferredWeeklyWorkingHours:void 0}));return}let i=Math.min(Number(t),99);l("preferredWeeklyWorkingHours"),n(e=>({...e,preferredWeeklyWorkingHours:i}))}}),(0,t.jsx)(ay,{children:"시간"})]})]}),""!==h&&(0,t.jsx)(aE,{children:h}),(0,t.jsxs)(a_,{children:[(0,t.jsx)(aC,{children:"서비스 가능 지역 (복수 선택 가능)"}),(0,t.jsx)(az,{children:ad.map(e=>(0,t.jsxs)(aI,{children:[(0,t.jsx)(aT,{checked:a.includes(e),onChange:()=>{let t=f(e,a);l("regions"),n(e=>({...e,regions:t}))}}),(0,t.jsx)(ak,{children:ar.default[e].label})]},e))}),""!==p&&(0,t.jsx)(aE,{children:p})]}),(0,t.jsxs)(a_,{children:[(0,t.jsx)(aC,{children:"가능한 근무 내용 (복수 선택 가능)"}),(0,t.jsx)(az,{children:as.map(e=>(0,t.jsxs)(aI,{children:[(0,t.jsx)(aT,{checked:d.includes(e),onChange:()=>{let t=f(e,d);l("serviceTypes"),n(e=>({...e,serviceTypes:t}))}}),(0,t.jsx)(ak,{children:aa.default[e].label})]},e))}),""!==x&&(0,t.jsx)(aE,{children:x})]}),(0,t.jsxs)(a_,{children:[(0,t.jsx)(aC,{children:"차량 소지"}),(0,t.jsx)(az,{children:ac.map(e=>(0,t.jsxs)(aI,{children:[(0,t.jsx)(aS,{name:"service-worker-car-ownership",checked:s===("소지"===e),onChange:()=>{l("hasVehicle"),n(t=>({...t,hasVehicle:"소지"===e}))}}),(0,t.jsx)(ak,{children:e})]},e))}),""!==g&&(0,t.jsx)(aE,{children:g})]})]})}),au=l.default.div.withConfig({componentId:"zh__sc-1335978d-0"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  align-self: stretch;
`,ah=l.default.div.withConfig({componentId:"zh__sc-1335978d-1"})`
  display: flex;
  gap: 16px;
  align-items: center;
  align-self: stretch;

  height: 30px;
`,ap=l.default.div.withConfig({componentId:"zh__sc-1335978d-2"})`
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
  text-align: center;
`,ax=l.default.div.withConfig({componentId:"zh__sc-1335978d-3"})`
  display: flex;
  flex: 1 0 0;
  gap: 4px;
  align-items: center;

  color: #464c53;
`,ag=l.default.div.withConfig({componentId:"zh__sc-1335978d-4"})`
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px; /* 125% */
`,am=(0,l.default)(s.default.Input.Timetable).withConfig({componentId:"zh__sc-1335978d-5"})`
  align-self: stretch;
`,ab=l.default.div.withConfig({componentId:"zh__sc-1335978d-6"})`
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
  align-self: stretch;
`,aw=l.default.div.withConfig({componentId:"zh__sc-1335978d-7"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #000;
  text-align: center;
`,av=l.default.div.withConfig({componentId:"zh__sc-1335978d-8"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,aj=(0,l.default)(s.default.Input.Text).withConfig({componentId:"zh__sc-1335978d-9"})`
  width: 59px;
  height: 36px;
  text-align: center;

  &::placeholder {
    color: #0a0a0a;
    opacity: 1;
  }
`,ay=l.default.div.withConfig({componentId:"zh__sc-1335978d-10"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #000;
  text-align: center;
`,a_=l.default.div.withConfig({componentId:"zh__sc-1335978d-11"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
  align-self: stretch;
`,aC=l.default.div.withConfig({componentId:"zh__sc-1335978d-12"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #000;
  text-align: center;
`,az=l.default.div.withConfig({componentId:"zh__sc-1335978d-13"})`
  display: flex;
  flex-wrap: wrap;
  gap: 0 24px;
  align-items: center;
`,aI=l.default.label.withConfig({componentId:"zh__sc-1335978d-14"})`
  display: inline-flex;
  gap: 8px;
  align-items: center;
  height: 36px;
`,ak=l.default.span.withConfig({componentId:"zh__sc-1335978d-15"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #000;
  text-align: center;
`,aE=l.default.div.withConfig({componentId:"zh__sc-1335978d-16"})`
  font-size: 12px;
  line-height: 16px;
  color: #ff4d4f;
`,aT=(0,l.default)(s.default.Input.Check).attrs({$iconSizeRatio:1.5}).withConfig({componentId:"zh__sc-1335978d-17"})`
  width: 24px;
  height: 24px;
`,aS=(0,l.default)(s.default.Input.Radio).withConfig({componentId:"zh__sc-1335978d-18"})`
  width: 20px;
  height: 20px;
`,aO=(0,n.observer)(function(){return(0,t.jsxs)(a$,{children:[(0,t.jsx)(aF,{children:"활동지원사 기본 정보"}),(0,t.jsx)(r4,{}),(0,t.jsx)(aA,{}),(0,t.jsx)(af,{})]})}),a$=l.default.div.withConfig({componentId:"zh__sc-7b7809b5-0"})`
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
`,aF=l.default.div.withConfig({componentId:"zh__sc-7b7809b5-1"})`
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
  text-align: center;
`,aA=l.default.div.withConfig({componentId:"zh__sc-7b7809b5-2"})`
  flex-shrink: 0;

  width: 100%;
  height: 1px;
  min-height: 1px;

  background: #e5e7eb;
`,aN=(0,n.observer)(function(){let{serviceWorkerDraft:e}=o.default.modal.serviceWorkerCreate;return(0,t.jsxs)(aL,{children:[(0,t.jsx)(rK,{}),e&&(0,t.jsx)(aO,{})]})}),aL=l.default.div.withConfig({componentId:"zh__sc-e5134819-0"})`
  overflow-y: auto;
  display: flex;
  align-self: stretch;
  justify-content: center;

  min-height: 830px;
  max-height: 830px;

  background: #f9fafb;
`;function aP(){let{close:e}=o.default.modal.serviceWorkerCreate;return(0,t.jsxs)(aR,{children:[(0,t.jsx)(aD,{children:"신규 활동지원사 등록하기"}),(0,t.jsxs)(aM,{onClick:e,children:[(0,t.jsx)(y.X,{size:16}),"닫기"]})]})}let aR=l.default.div.withConfig({componentId:"zh__sc-e97a276c-0"})`
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
`,aD=l.default.div.withConfig({componentId:"zh__sc-e97a276c-1"})`
  font-size: 18px;
  font-weight: 700;
  font-style: normal;
  line-height: 28px; /* 155.556% */
  color: #101828;
  letter-spacing: -0.439px;
`,aM=(0,l.default)(s.default.Button.Outlined).withConfig({componentId:"zh__sc-e97a276c-2"})`
  display: flex;
  gap: 6px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,aU=(0,n.observer)(function(){let e=o.default.modal.serviceWorkerCreate,{status:n}=e,l=(0,i.useRef)(null);return((0,i.useEffect)(()=>"ready"!==n?void e.setToastContainer(null):(e.setToastContainer(l.current),()=>{e.setToastContainer(null)}),[e,n]),"ready"!==n)?null:(0,t.jsx)(r.default,{children:(0,t.jsxs)(aW,{ref:l,children:[(0,t.jsx)(aP,{}),(0,t.jsx)(aN,{}),(0,t.jsx)(rt,{})]})})}),aW=l.default.div.withConfig({componentId:"zh__sc-cb4ab18d-0"})`
  position: relative;

  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  align-items: center;

  width: 1712px;
  min-width: 1712px;
  border-radius: 8px;

  background: #fff;
`;var aB=e.i(39555),aV=e.i(84527),aH=e.i(74483);let aY=e=>null!==e&&lQ.default.brand.calendarDateString.is(e)?e.replaceAll("-",""):"-",aX=(0,n.observer)(function(){let e=o.default.modal.serviceWorkerDetail,n=o.default.data.serviceWorker.contractList;(0,i.useEffect)(()=>null===e.serviceWorkerId?void n.reset():(n.setQuery({id:e.serviceWorkerId}),()=>{n.reset()}),[n,e.serviceWorkerId]);let l=n.data??[];return(0,t.jsxs)(aG,{children:[(0,t.jsxs)(aK,{children:[(0,t.jsx)(aq,{children:"연결된 이용자 정보"}),(0,t.jsxs)(aJ,{children:[(0,t.jsxs)(aQ,{type:"button",disabled:!0,children:[(0,t.jsx)(aV.default,{sx:{fontSize:20}}),"수정하기"]}),(0,t.jsxs)(aQ,{type:"button",disabled:!0,children:[(0,t.jsx)(aB.default,{sx:{fontSize:20}}),"추가하기"]})]})]}),0===l.length?(0,t.jsxs)(a7,{children:[(0,t.jsx)(aH.default,{sx:{fontSize:24,color:"#494F53"}}),(0,t.jsxs)(de,{children:[(0,t.jsx)(dt,{children:"연결된 이용자가 없습니다."}),(0,t.jsx)(dn,{children:"[+추가하기] 버튼을 클릭해 이용자를 연결해주세요."})]})]}):(0,t.jsx)(aZ,{children:l.map((e,n)=>(0,t.jsxs)(a0,{$isSelected:0===n,children:[(0,t.jsx)(a1,{children:(0,t.jsx)(a2,{children:e.client.name})}),(0,t.jsxs)(a4,{children:[(0,t.jsxs)(a6,{children:[(0,t.jsx)(a3,{children:"생년월일"}),(0,t.jsx)(a5,{}),(0,t.jsx)(a9,{children:(e=>{if(null===e||!lQ.default.brand.calendarDateString.is(e))return"-";let[t="",n="",i=""]=e.split("-");return 4!==t.length||2!==n.length||2!==i.length?"-":`${t.slice(-2)}${n}${i}`})(e.client.birthDate)})]}),(0,t.jsxs)(a6,{children:[(0,t.jsx)(a3,{children:"시작일자"}),(0,t.jsx)(a5,{}),(0,t.jsx)(a8,{children:aY(e.serviceStartDate)})]}),(0,t.jsxs)(a6,{children:[(0,t.jsx)(a3,{children:"종료일자"}),(0,t.jsx)(a5,{}),(0,t.jsx)(a8,{children:aY(e.serviceEndDate)})]})]})]},`${e.client.name}-${e.client.birthDate??""}-${e.serviceStartDate??""}-${e.serviceEndDate??""}`))})]})}),aG=l.default.section.withConfig({componentId:"zh__sc-e43c7362-0"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;

  width: 100%;
`,aK=l.default.div.withConfig({componentId:"zh__sc-e43c7362-1"})`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;

  width: 100%;
  min-height: 40px;
`,aq=l.default.h3.withConfig({componentId:"zh__sc-e43c7362-2"})`
  font-size: 18px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px;
  color: #101828;
`,aJ=l.default.div.withConfig({componentId:"zh__sc-e43c7362-3"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,aQ=(0,l.default)(s.default.Button.Outlined).withConfig({componentId:"zh__sc-e43c7362-4"})`
  display: flex;
  gap: 4px;
  align-items: center;

  height: 40px;
  padding: 8px 16px;
`,aZ=l.default.div.withConfig({componentId:"zh__sc-e43c7362-5"})`
  overflow-x: auto;
  display: flex;
  gap: 10px;
  align-items: flex-start;

  width: 100%;
`,a0=l.default.div.withConfig({componentId:"zh__sc-e43c7362-6"})`
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
`,a1=l.default.div.withConfig({componentId:"zh__sc-e43c7362-7"})`
  display: flex;
  align-items: center;
  width: 100%;
`,a2=l.default.div.withConfig({componentId:"zh__sc-e43c7362-8"})`
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  color: #0a0a0a;
`,a4=l.default.div.withConfig({componentId:"zh__sc-e43c7362-9"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`,a6=l.default.div.withConfig({componentId:"zh__sc-e43c7362-10"})`
  display: flex;
  gap: 8px;
  align-items: flex-start;
  width: 100%;
`,a3=l.default.span.withConfig({componentId:"zh__sc-e43c7362-11"})`
  width: 52px;
  min-width: 52px;

  font-size: 14px;
  line-height: 20px;
  color: #0a0a0a;
`,a5=l.default.span.withConfig({componentId:"zh__sc-e43c7362-12"})`
  width: 1px;
  height: 20px;
  background: #e5e7eb;
`,a8=l.default.span.withConfig({componentId:"zh__sc-e43c7362-13"})`
  min-width: 0;

  font-size: 14px;
  line-height: 20px;
  color: #0a0a0a;
  overflow-wrap: anywhere;
`,a9=(0,l.default)(a8).withConfig({componentId:"zh__sc-e43c7362-14"})`
  color: #45464e;
`,a7=l.default.div.withConfig({componentId:"zh__sc-e43c7362-15"})`
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
`,de=l.default.div.withConfig({componentId:"zh__sc-e43c7362-16"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: center;
`,dt=l.default.div.withConfig({componentId:"zh__sc-e43c7362-17"})`
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  color: #494f53;
`,dn=l.default.div.withConfig({componentId:"zh__sc-e43c7362-18"})`
  font-size: 16px;
  line-height: 20px;
  color: #494f53;
  text-align: center;
`;var di=e.i(12945);let dl={residentRegistrationNumberText:"",genderText:"",mobileText:"",contactText:"",addressBaseText:"",addressDetailText:"",postCodeText:""},dr={mobileText:"",contactText:"",postCodeText:""},da=(0,n.observer)(function(){let e=o.default.modal.serviceWorkerDetail,n=o.default.modal.serviceWorkerDetail.serviceWorker,l=null===n?dl:{residentRegistrationNumberText:n.residentRegistrationNumber??"",genderText:null===n.gender?"":di.default[n.gender].label,mobileText:n.phoneNumber??"",contactText:n.contact??"",addressBaseText:n.address??"",addressDetailText:n.addressDetail??"",postCodeText:n.postCode??""},r=(0,i.useRef)(null),[a,d]=(0,i.useState)(!1),[s,c]=(0,i.useState)(!1),[f,u]=(0,i.useState)(dl),[h,p]=(0,i.useState)(dr),x=a?f:l,g=(e,t)=>{u(n=>({...n,[e]:t})),("mobileText"===e||"contactText"===e||"postCodeText"===e)&&p(t=>({...t,[e]:""}))},m=(0,i.useCallback)(()=>{s||(u(l),p(dr),d(!1))},[s,l]);if((0,i.useEffect)(()=>{if(!a||s)return;let e=e=>{let t=e.target;t instanceof Node&&null!==r.current&&r.current.contains(t)||m()};return document.addEventListener("pointerdown",e),()=>{document.removeEventListener("pointerdown",e)}},[m,a,s]),null===n)return null;let b=async()=>{let t,i,r,a,h,x,g;if(s)return;let m=(t={},i={},(r=f.mobileText.trim())!==l.mobileText.trim()&&(i.phoneNumber=r),(a=f.contactText.trim())!==l.contactText.trim()&&(i.contact=a),(h=f.postCodeText.trim())!==l.postCodeText.trim()&&(i.postCode=h),Object.assign(t,i),(x=f.addressBaseText.trim())!==l.addressBaseText.trim()&&(t.address=x),(g=f.addressDetailText.trim())!==l.addressDetailText.trim()&&(t.addressDetail=g),t);if(!(Object.keys(m).length>0)){u(l),p(dr),d(!1);return}let b=((e,t)=>{let n={...dr},i=e.mobileText.trim()!==t.mobileText.trim(),l=e.contactText.trim()!==t.contactText.trim(),o=e.postCodeText.trim()!==t.postCodeText.trim();if(i){let t=e.mobileText.trim();""===t||lQ.default.brand.phoneNumber.is(t)||(n.mobileText="유효한 휴대폰 형식이 아닙니다.")}if(l){let t=e.contactText.trim();""===t||lQ.default.brand.contactNumber.is(t)||(n.contactText="유효한 연락처 형식이 아닙니다.")}if(o){let t=e.postCodeText.trim();""===t||lQ.default.brand.postCode.is(t)||(n.postCodeText="유효한 우편번호 형식이 아닙니다.")}return n})(f,l);if(""!==b.mobileText||""!==b.contactText||""!==b.postCodeText)return void p(b);p(dr),c(!0);let[w]=await oK.default.data.serviceWorker.patch({id:n.id,payload:m});if(c(!1),null!==w)return;e.markListRefreshNeeded(),u(l),d(!1);let v=o.default.data.serviceWorker.detail;null!==v.query&&!0!==v.query&&v.refetch()};return(0,t.jsxs)(dd,{ref:r,children:[(0,t.jsxs)(ds,{children:[(0,t.jsx)(dc,{children:"인적사항"}),a?(0,t.jsxs)(df,{children:[(0,t.jsxs)(du,{type:"button",onClick:m,disabled:s,children:[(0,t.jsx)(li.default,{sx:{fontSize:20}}),"수정 취소"]}),(0,t.jsxs)(du,{type:"button",onClick:()=>void b(),disabled:s,children:[(0,t.jsx)(tt.default,{sx:{fontSize:20}}),"수정 저장"]})]}):(0,t.jsxs)(du,{type:"button",onClick:()=>{u(l),d(!0)},children:[(0,t.jsx)(aV.default,{sx:{fontSize:20}}),"수정하기"]})]}),(0,t.jsxs)(dh,{children:[(0,t.jsxs)(dp,{$columns:4,children:[(0,t.jsxs)(dx,{children:["주민등록번호",(0,t.jsx)(dm,{value:x.residentRegistrationNumberText,readOnly:!0})]}),(0,t.jsxs)(dx,{children:["성별",(0,t.jsx)(dm,{value:x.genderText,readOnly:!0})]}),(0,t.jsxs)(dx,{children:["휴대폰",(0,t.jsx)(db,{value:x.mobileText,style:""!==h.mobileText?dj:void 0,readOnly:!a,onChange:e=>g("mobileText",e)}),""!==h.mobileText?(0,t.jsx)(dg,{children:h.mobileText}):null]}),(0,t.jsxs)(dx,{children:["연락처",(0,t.jsx)(dw,{value:x.contactText,style:""!==h.contactText?dj:void 0,readOnly:!a,onChange:e=>g("contactText",e)}),""!==h.contactText?(0,t.jsx)(dg,{children:h.contactText}):null]})]}),(0,t.jsxs)(dp,{$columns:3,children:[(0,t.jsxs)(dx,{children:["주소",(0,t.jsx)(dm,{value:x.addressBaseText,readOnly:!a,onChange:e=>g("addressBaseText",e.target.value)})]}),(0,t.jsxs)(dx,{children:["상세주소",(0,t.jsx)(dm,{value:x.addressDetailText,readOnly:!a,onChange:e=>g("addressDetailText",e.target.value)})]}),(0,t.jsxs)(dx,{children:["우편번호",(0,t.jsx)(dv,{value:x.postCodeText,style:""!==h.postCodeText?dj:void 0,readOnly:!a,onChange:e=>g("postCodeText",e)}),""!==h.postCodeText?(0,t.jsx)(dg,{children:h.postCodeText}):null]})]})]})]})}),dd=l.default.section.withConfig({componentId:"zh__sc-319b784e-0"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;

  width: 100%;
`,ds=l.default.div.withConfig({componentId:"zh__sc-319b784e-1"})`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;

  width: 100%;
  min-height: 40px;
`,dc=l.default.h3.withConfig({componentId:"zh__sc-319b784e-2"})`
  font-size: 18px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 111.111% */
  color: #101828;
`,df=l.default.div.withConfig({componentId:"zh__sc-319b784e-3"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,du=(0,l.default)(s.default.Button.Outlined).withConfig({componentId:"zh__sc-319b784e-4"})`
  display: flex;
  gap: 4px;
  align-items: center;

  height: 40px;
  padding: 8px 16px;
`,dh=l.default.div.withConfig({componentId:"zh__sc-319b784e-5"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-self: stretch;

  width: 100%;
`,dp=l.default.div.withConfig({componentId:"zh__sc-319b784e-6"})`
  display: grid;
  grid-template-columns: ${({$columns:e})=>4===e?"repeat(4, minmax(0, 1fr))":"repeat(3, minmax(0, 1fr))"};
  gap: 12px;
  width: 100%;
`,dx=l.default.label.withConfig({componentId:"zh__sc-319b784e-7"})`
  display: flex;
  flex-direction: column;
  gap: 4px;

  min-width: 0;

  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: #000;
`,dg=l.default.div.withConfig({componentId:"zh__sc-319b784e-8"})`
  margin-top: 2px;
  font-size: 12px;
  line-height: 16px;
  color: #ff4d4f;
`,dm=(0,l.default)(s.default.Input.Text).withConfig({componentId:"zh__sc-319b784e-9"})`
  height: 36px;
  padding: 0 16px;
  font-size: 16px;
  line-height: 20px;
`,db=(0,l.default)(s.default.Input.Phone).withConfig({componentId:"zh__sc-319b784e-10"})`
  height: 36px;
  padding: 0 16px;
  font-size: 16px;
  line-height: 20px;
`,dw=(0,l.default)(s.default.Input.Contact).withConfig({componentId:"zh__sc-319b784e-11"})`
  height: 36px;
  padding: 0 16px;
  font-size: 16px;
  line-height: 20px;
`,dv=(0,l.default)(s.default.Input.PostCode).withConfig({componentId:"zh__sc-319b784e-12"})`
  height: 36px;
  padding: 0 16px;
  font-size: 16px;
  line-height: 20px;
`,dj={borderColor:"#ff4d4f",background:"#fff5f5"},dy={availableTimes:[],preferredWeeklyWorkingHours:null,regions:[],serviceTypes:[],hasVehicle:null},d_=Object.keys(ar.default).filter(function(e){return e in ar.default}),dC=Object.keys(aa.default).filter(function(e){return e in aa.default}),dz=[{label:"소지",value:!0},{label:"미소지",value:!1}],dI=e=>[...new Set(e)].sort(),dk=e=>`${e.dayOfWeek}-${e.hour}`,dE=(e,t)=>{let n=dI(e),i=dI(t);return n.length===i.length&&n.every((e,t)=>e===i[t])},dT=(0,n.observer)(function(){let e=o.default.modal.serviceWorkerDetail,n=o.default.modal.serviceWorkerDetail.serviceWorker,l=null===n?dy:{availableTimes:n.availableTimes,preferredWeeklyWorkingHours:n.preferredWeeklyWorkingHours??null,regions:n.regions,serviceTypes:n.serviceTypes,hasVehicle:n.hasVehicle??null},r=(0,i.useRef)(null),[a,d]=(0,i.useState)(!1),[s,c]=(0,i.useState)(!1),[f,u]=(0,i.useState)(dy),h=a?f:l,p=(0,i.useCallback)(()=>{s||(u(l),d(!1))},[s,l]);if((0,i.useEffect)(()=>{if(!a||s)return;let e=e=>{let t=e.target;t instanceof Node&&null!==r.current&&r.current.contains(t)||p()};return document.addEventListener("pointerdown",e),()=>{document.removeEventListener("pointerdown",e)}},[p,a,s]),null===n)return null;let x=(e,t)=>a?t.includes(e)?t.filter(t=>t!==e):[...t,e]:t,g=async()=>{let t;if(s)return;let i=(t={},((e,t)=>{if(e.length!==t.length)return!1;let n=e.map(dk).sort(),i=t.map(dk).sort();return n.every((e,t)=>e===i[t])})(f.availableTimes,l.availableTimes)||(t.availableTimes=f.availableTimes),dE(f.regions,l.regions)||(t.regions=f.regions),dE(f.serviceTypes,l.serviceTypes)||(t.serviceTypes=f.serviceTypes),f.preferredWeeklyWorkingHours!==l.preferredWeeklyWorkingHours&&(t.preferredWeeklyWorkingHours=f.preferredWeeklyWorkingHours??void 0),f.hasVehicle!==l.hasVehicle&&null!==f.hasVehicle&&(t.hasVehicle=f.hasVehicle),t);if(!(Object.keys(i).length>0)){u(l),d(!1);return}c(!0);let[r]=await oK.default.data.serviceWorker.patch({id:n.id,payload:i});if(c(!1),null!==r)return;e.markListRefreshNeeded(),u(l),d(!1);let a=o.default.data.serviceWorker.detail;null!==a.query&&!0!==a.query&&a.refetch()};return(0,t.jsx)(dS,{ref:r,children:(0,t.jsxs)(dF,{children:[(0,t.jsxs)(dA,{children:[(0,t.jsxs)(dN,{children:[(0,t.jsx)(dL,{children:"근무 가능 시간"}),(0,t.jsxs)(dP,{children:[(0,t.jsx)(tn.default,{sx:{fontSize:20}}),(0,t.jsx)(dR,{children:"시간대를 추가하고, 추가한 시간대를 클릭하면 수정하거나 삭제할 수 있습니다."})]}),a&&(0,t.jsx)(dD,{children:"수정 진행중"})]}),a?(0,t.jsxs)(dO,{children:[(0,t.jsxs)(d$,{type:"button",onClick:p,disabled:s,children:[(0,t.jsx)(li.default,{sx:{fontSize:20}}),"수정 취소"]}),(0,t.jsxs)(d$,{type:"button",onClick:()=>void g(),disabled:s,children:[(0,t.jsx)(tt.default,{sx:{fontSize:20}}),"수정 저장"]})]}):(0,t.jsxs)(d$,{type:"button",onClick:()=>{u(l),d(!0)},children:[(0,t.jsx)(aV.default,{sx:{fontSize:20}}),"수정하기"]})]}),(0,t.jsx)(dM,{value:h.availableTimes,disabled:!a,readOnly:!a,onChange:e=>{if(!a)return;let t=e.target.value;u(e=>({...e,availableTimes:t}))}}),(0,t.jsxs)(dU,{children:[(0,t.jsx)(dW,{children:"희망 근로 시간"}),(0,t.jsxs)(dB,{children:[(0,t.jsx)(dH,{children:"총"}),(0,t.jsx)(dV,{value:null===h.preferredWeeklyWorkingHours?"":String(h.preferredWeeklyWorkingHours),placeholder:"00",maxLength:2,disabled:!a,onChange:e=>{if(!a)return;let t=e.target.value.replace(/\D/g,"");if(""===t)return void u(e=>({...e,preferredWeeklyWorkingHours:null}));let n=Math.min(Number(t),99);u(e=>({...e,preferredWeeklyWorkingHours:n}))}}),(0,t.jsx)(dH,{children:"시간"})]})]}),(0,t.jsxs)(dY,{children:[(0,t.jsx)(dX,{children:"서비스 가능 지역 (복수 선택 가능)"}),(0,t.jsx)(dG,{children:d_.map(e=>(0,t.jsxs)(dK,{children:[(0,t.jsx)(dJ,{disabled:!a,checked:h.regions.includes(e),onChange:()=>{let t=x(e,h.regions);u(e=>({...e,regions:t}))}}),(0,t.jsx)(dq,{children:ar.default[e].label})]},e))})]}),(0,t.jsxs)(dY,{children:[(0,t.jsx)(dX,{children:"가능한 근무 내용 (복수 선택 가능)"}),(0,t.jsx)(dG,{children:dC.map(e=>(0,t.jsxs)(dK,{children:[(0,t.jsx)(dJ,{disabled:!a,checked:h.serviceTypes.includes(e),onChange:()=>{let t=x(e,h.serviceTypes);u(e=>({...e,serviceTypes:t}))}}),(0,t.jsx)(dq,{children:aa.default[e].label})]},e))})]}),(0,t.jsxs)(dY,{children:[(0,t.jsx)(dX,{children:"차량 소지"}),(0,t.jsx)(dG,{children:dz.map(e=>(0,t.jsxs)(dK,{children:[(0,t.jsx)(dQ,{name:"detail-service-worker-car-ownership",checked:h.hasVehicle===e.value,disabled:!a,onChange:()=>{a&&u(t=>({...t,hasVehicle:e.value}))}}),(0,t.jsx)(dq,{children:e.label})]},e.label))})]})]})})}),dS=l.default.section.withConfig({componentId:"zh__sc-3656833f-0"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;

  width: 100%;
`,dO=l.default.div.withConfig({componentId:"zh__sc-3656833f-1"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,d$=(0,l.default)(s.default.Button.Outlined).withConfig({componentId:"zh__sc-3656833f-2"})`
  display: flex;
  gap: 4px;
  align-items: center;

  height: 40px;
  padding: 8px 16px;
`,dF=l.default.div.withConfig({componentId:"zh__sc-3656833f-3"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  align-self: stretch;
`,dA=l.default.div.withConfig({componentId:"zh__sc-3656833f-4"})`
  display: flex;
  gap: 16px;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;

  width: 100%;
`,dN=l.default.div.withConfig({componentId:"zh__sc-3656833f-5"})`
  display: flex;
  flex: 1 1 auto;
  gap: 16px;
  align-items: center;
`,dL=l.default.div.withConfig({componentId:"zh__sc-3656833f-6"})`
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
  text-align: center;
`,dP=l.default.div.withConfig({componentId:"zh__sc-3656833f-7"})`
  display: flex;
  gap: 4px;
  align-items: center;
  color: #464c53;
`,dR=l.default.div.withConfig({componentId:"zh__sc-3656833f-8"})`
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px;
`,dD=l.default.div.withConfig({componentId:"zh__sc-3656833f-9"})`
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
`,dM=(0,l.default)(s.default.Input.Timetable).withConfig({componentId:"zh__sc-3656833f-10"})`
  align-self: stretch;
`,dU=l.default.div.withConfig({componentId:"zh__sc-3656833f-11"})`
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
  align-self: stretch;
`,dW=l.default.div.withConfig({componentId:"zh__sc-3656833f-12"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #000;
  text-align: center;
`,dB=l.default.div.withConfig({componentId:"zh__sc-3656833f-13"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,dV=(0,l.default)(s.default.Input.Text).withConfig({componentId:"zh__sc-3656833f-14"})`
  width: 59px;
  height: 36px;
  text-align: center;

  &::placeholder {
    color: #0a0a0a;
    opacity: 1;
  }
`,dH=l.default.div.withConfig({componentId:"zh__sc-3656833f-15"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #000;
  text-align: center;
`,dY=l.default.div.withConfig({componentId:"zh__sc-3656833f-16"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
  align-self: stretch;
`,dX=l.default.div.withConfig({componentId:"zh__sc-3656833f-17"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #000;
  text-align: center;
`,dG=l.default.div.withConfig({componentId:"zh__sc-3656833f-18"})`
  display: flex;
  flex-wrap: wrap;
  gap: 0 24px;
  align-items: center;
`,dK=l.default.label.withConfig({componentId:"zh__sc-3656833f-19"})`
  display: inline-flex;
  gap: 8px;
  align-items: center;
  height: 36px;
`,dq=l.default.span.withConfig({componentId:"zh__sc-3656833f-20"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #000;
  text-align: center;
`,dJ=(0,l.default)(s.default.Input.Check).attrs({$iconSizeRatio:1.5}).withConfig({componentId:"zh__sc-3656833f-21"})`
  width: 24px;
  height: 24px;
`,dQ=(0,l.default)(s.default.Input.Radio).withConfig({componentId:"zh__sc-3656833f-22"})`
  width: 20px;
  height: 20px;
`;function dZ(){return(0,t.jsxs)(d0,{children:[(0,t.jsx)(da,{}),(0,t.jsx)(aX,{}),(0,t.jsx)(dT,{})]})}let d0=l.default.div.withConfig({componentId:"zh__sc-d3727a60-0"})`
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
`,d1=(0,n.observer)(function(){let e=o.default.modal.serviceWorkerDetail;return(0,t.jsx)(d2,{role:"tablist","aria-label":"활동지원사 상세 탭",children:e.tabs.map(n=>(0,t.jsx)(d4,{type:"button",role:"tab","aria-selected":n.active,disabled:n.disabled,$active:n.active,$disabled:n.disabled,onClick:()=>e.setActiveTab(n.key),children:n.label},n.key))})}),d2=l.default.div.withConfig({componentId:"zh__sc-53613c76-0"})`
  display: flex;
  align-self: flex-start;

  width: 100%;
  height: 56px;
  border-bottom: 1px solid #e5e7eb;

  background-color: #fff;
`,d4=l.default.button.withConfig({componentId:"zh__sc-53613c76-1"})`
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
`;var d6=e.i(19740);let d3=e=>{if(null===e||!lQ.default.brand.calendarDateString.is(e))return null;let[t,n,i]=e.split("-"),l=Number(t),o=Number(n),r=Number(i);return Number.isFinite(l)&&Number.isFinite(o)&&Number.isFinite(r)?new Date(l,o-1,r):null},d5=e=>{if(null===e||!lQ.default.brand.calendarDateString.is(e))return"-";let[t,n,i]=e.split("-");return`${t}년 ${Number(n)}월 ${Number(i)}일`},d8=(0,n.observer)(function(){let e=o.default.modal.serviceWorkerDetail.serviceWorker;if(null===e)return null;let{name:n,status:i,firstRegisteredDate:l,workStartDate:r,workEndDate:a}=e,d=d5(l),s=d5(r),c=null===a?null:d5(a),f=((e,t)=>{if(null===e)return"-";let n=d3(e),i=d3(t)??new Date;if(null===n)return"-";let l=n.getFullYear(),o=n.getMonth(),r=n.getDate(),a=i.getFullYear(),d=i.getMonth(),s=i.getDate(),c=(a-l)*12+(d-o);s<r&&(c-=1),c<0&&(c=0,a=l,d=o);let f=Math.floor(c/12),u=c%12,h=f>0?`${f}년`:"",p=u>0?`${u}개월`:"";return`${h} ${p}`.trim()||"0개월"})(r,a);return(0,t.jsxs)(d9,{children:[(0,t.jsxs)(d7,{children:[(0,t.jsx)(se,{children:n}),(0,t.jsx)(st,{children:d6.SERVICE_WORKER_STATUS[i]})]}),(0,t.jsxs)(sn,{children:[(0,t.jsxs)(si,{children:[(0,t.jsx)(sl,{children:"접수일"}),(0,t.jsx)(so,{children:d})]}),(0,t.jsx)(sr,{}),(0,t.jsxs)(si,{children:[(0,t.jsx)(sl,{children:"입사일 - 퇴사일"}),(0,t.jsx)(so,{children:null===r?"-":(0,t.jsxs)(t.Fragment,{children:[s," -",null===c?(0,t.jsx)(sa,{}):` ${c}`]})})]}),(0,t.jsx)(sr,{}),(0,t.jsxs)(si,{children:[(0,t.jsx)(sl,{children:"근속기간"}),(0,t.jsx)(so,{children:f})]})]})]})}),d9=l.default.div.withConfig({componentId:"zh__sc-3c59ca1c-0"})`
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
`,d7=l.default.div.withConfig({componentId:"zh__sc-3c59ca1c-1"})`
  display: flex;
  gap: 12px;
  align-items: center;
`,se=l.default.div.withConfig({componentId:"zh__sc-3c59ca1c-2"})`
  font-size: 24px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 83.333% */
  color: #0a0a0a;
`,st=l.default.div.withConfig({componentId:"zh__sc-3c59ca1c-3"})`
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
`,sn=l.default.div.withConfig({componentId:"zh__sc-3c59ca1c-4"})`
  display: flex;
  gap: 12px;
  align-items: center;
`,si=l.default.div.withConfig({componentId:"zh__sc-3c59ca1c-5"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,sl=l.default.div.withConfig({componentId:"zh__sc-3c59ca1c-6"})`
  font-size: 18px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 111.111% */
  color: #0a0a0a;
`,so=l.default.div.withConfig({componentId:"zh__sc-3c59ca1c-7"})`
  font-size: 18px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px; /* 111.111% */
  color: #0a0a0a;
`,sr=l.default.div.withConfig({componentId:"zh__sc-3c59ca1c-8"})`
  width: 1px;
  height: 24px;
  background: #dadee6;
`,sa=l.default.span.withConfig({componentId:"zh__sc-3c59ca1c-9"})`
  display: inline-block;
  width: 114px;
`,sd=(0,n.observer)(function(){let e=o.default.modal.serviceWorkerDetail;return"ready"!==e.status?null:(0,t.jsx)(r.default,{children:(0,t.jsxs)(ss,{children:[(0,t.jsxs)(sc,{children:[(0,t.jsx)(sf,{children:"활동지원사 상세보기"}),(0,t.jsxs)(su,{onClick:e.close,children:[(0,t.jsx)(y.X,{size:16}),"닫기"]})]}),(0,t.jsx)(d8,{}),(0,t.jsx)(d1,{}),(0,t.jsx)(sh,{children:"basic"===e.activeTab&&(0,t.jsx)(dZ,{})})]})})}),ss=l.default.div.withConfig({componentId:"zh__sc-731779e3-0"})`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;

  width: 1050px;
  height: 90vh;
  border-radius: 8px;

  background: #fff;
`,sc=l.default.div.withConfig({componentId:"zh__sc-731779e3-1"})`
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
`,sf=l.default.h2.withConfig({componentId:"zh__sc-731779e3-2"})`
  margin: 0;

  font-size: 18px;
  font-weight: 700;
  font-style: normal;
  line-height: 28px;
  color: #101828;
  letter-spacing: -0.439px;
`,su=(0,l.default)(s.default.Button.Outlined).withConfig({componentId:"zh__sc-731779e3-3"})`
  display: flex;
  gap: 6px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,sh=l.default.div.withConfig({componentId:"zh__sc-731779e3-4"})`
  display: flex;
  flex: 1;
  min-height: 0;
`,sp=(0,n.observer)(function(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(eY,{}),(0,t.jsx)(aU,{}),(0,t.jsx)(sd,{}),(0,t.jsx)(iG,{}),(0,t.jsx)(re,{})]})});e.s(["default",0,sp],55357)},31239,e=>{"use strict";e.i(3159);var t=e.i(46907),n=e.i(33261),i=e.i(7744),l=e.i(43174);let o=(0,t.observer)(function(){let e=(0,n.usePathname)(),t=(0,n.useRouter)(),o=l.default.ui.layout.targetPathname;return(0,i.useEffect)(()=>{e&&l.default.ui.layout.setPathname(e)},[e]),(0,i.useEffect)(()=>{null!==o&&(t.push(o),l.default.ui.layout.clearTargetPathname())},[t,o]),null});e.s(["default",0,o])},32090,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i={formatUrl:function(){return a},formatWithValidation:function(){return s},urlObjectKeys:function(){return d}};for(var l in i)Object.defineProperty(n,l,{enumerable:!0,get:i[l]});let o=e.r(44066)._(e.r(76268)),r=/https?|ftp|gopher|file/;function a(e){let{auth:t,hostname:n}=e,i=e.protocol||"",l=e.pathname||"",a=e.hash||"",d=e.query||"",s=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?s=t+e.host:n&&(s=t+(~n.indexOf(":")?`[${n}]`:n),e.port&&(s+=":"+e.port)),d&&"object"==typeof d&&(d=String(o.urlQueryToSearchParams(d)));let c=e.search||d&&`?${d}`||"";return i&&!i.endsWith(":")&&(i+=":"),e.slashes||(!i||r.test(i))&&!1!==s?(s="//"+(s||""),l&&"/"!==l[0]&&(l="/"+l)):s||(s=""),a&&"#"!==a[0]&&(a="#"+a),c&&"?"!==c[0]&&(c="?"+c),l=l.replace(/[?#]/g,encodeURIComponent),c=c.replace("#","%23"),`${i}${s}${l}${c}${a}`}let d=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function s(e){return a(e)}},87342,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"isLocalURL",{enumerable:!0,get:function(){return o}});let i=e.r(65576),l=e.r(18849);function o(e){if(!(0,i.isAbsoluteUrl)(e))return!0;try{let t=(0,i.getLocationOrigin)(),n=new URL(e,t);return n.origin===t&&(0,l.hasBasePath)(n.pathname)}catch(e){return!1}}},79103,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"errorOnce",{enumerable:!0,get:function(){return i}});let i=e=>{}},70682,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i={default:function(){return m},useLinkStatus:function(){return w}};for(var l in i)Object.defineProperty(n,l,{enumerable:!0,get:i[l]});let o=e.r(44066),r=e.r(9735),a=o._(e.r(7744)),d=e.r(32090),s=e.r(38792),c=e.r(45856),f=e.r(65576),u=e.r(57334);e.r(44182);let h=e.r(91075),p=e.r(63430),x=e.r(87342),g=e.r(97456);function m(t){var n,i;let l,o,m,[w,v]=(0,a.useOptimistic)(p.IDLE_LINK_STATUS),j=(0,a.useRef)(null),{href:y,as:_,children:C,prefetch:z=null,passHref:I,replace:k,shallow:E,scroll:T,onClick:S,onMouseEnter:O,onTouchStart:$,legacyBehavior:F=!1,onNavigate:A,transitionTypes:N,ref:L,unstable_dynamicOnHover:P,...R}=t;l=C,F&&("string"==typeof l||"number"==typeof l)&&(l=(0,r.jsx)("a",{children:l}));let D=a.default.useContext(s.AppRouterContext),M=!1!==z,U=!1!==z?null===(i=z)||"auto"===i?g.FetchStrategy.PPR:g.FetchStrategy.Full:g.FetchStrategy.PPR,W="string"==typeof(n=_||y)?n:(0,d.formatUrl)(n);if(F){if(l?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});o=a.default.Children.only(l)}let B=F?o&&"object"==typeof o&&o.ref:L,V=a.default.useCallback(e=>(null!==D&&(j.current=(0,p.mountLinkInstance)(e,W,D,U,M,v)),()=>{j.current&&((0,p.unmountLinkForCurrentNavigation)(j.current),j.current=null),(0,p.unmountPrefetchableInstance)(e)}),[M,W,D,U,v]),H={ref:(0,c.useMergedRef)(V,B),onClick(t){F||"function"!=typeof S||S(t),F&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(t),!D||t.defaultPrevented||function(t,n,i,l,o,r,d){if("u">typeof window){let s,{nodeName:c}=t.currentTarget;if("A"===c.toUpperCase()&&((s=t.currentTarget.getAttribute("target"))&&"_self"!==s||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,x.isLocalURL)(n)){l&&(t.preventDefault(),location.replace(n));return}if(t.preventDefault(),r){let e=!1;if(r({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:f}=e.r(86228);a.default.startTransition(()=>{f(n,l?"replace":"push",!1===o?h.ScrollBehavior.NoScroll:h.ScrollBehavior.Default,i.current,d)})}}(t,W,j,k,T,A,N)},onMouseEnter(e){F||"function"!=typeof O||O(e),F&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),D&&M&&(0,p.onNavigationIntent)(e.currentTarget,!0===P)},onTouchStart:function(e){F||"function"!=typeof $||$(e),F&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),D&&M&&(0,p.onNavigationIntent)(e.currentTarget,!0===P)}};return(0,f.isAbsoluteUrl)(W)?H.href=W:F&&!I&&("a"!==o.type||"href"in o.props)||(H.href=(0,u.addBasePath)(W)),m=F?a.default.cloneElement(o,H):(0,r.jsx)("a",{...R,...H,children:l}),(0,r.jsx)(b.Provider,{value:w,children:m})}e.r(79103);let b=(0,a.createContext)(p.IDLE_LINK_STATUS),w=()=>(0,a.useContext)(b);("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},44997,e=>{"use strict";var t=e.i(9735),n=e.i(70682),i=e.i(33261),l=e.i(7744),o=e.i(4153);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var a=(0,l.forwardRef)(function(e,t){var n=e.color,i=e.size,o=void 0===i?24:i,a=function(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["color","size"]);return l.default.createElement("svg",r({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),l.default.createElement("polyline",{points:"6 9 12 15 18 9"}))});function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}a.propTypes={color:o.default.string,size:o.default.oneOfType([o.default.string,o.default.number])},a.displayName="ChevronDown";var s=(0,l.forwardRef)(function(e,t){var n=e.color,i=e.size,o=void 0===i?24:i,r=function(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["color","size"]);return l.default.createElement("svg",d({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},r),l.default.createElement("polyline",{points:"18 15 12 9 6 15"}))});s.propTypes={color:o.default.string,size:o.default.oneOfType([o.default.string,o.default.number])},s.displayName="ChevronUp";var c=e.i(22803),f=e.i(9454);function u(e){return null===e?"/":e.length>1&&e.endsWith("/")?e.slice(0,-1):e}function h(e,t){let n=u(e),i=u(t);return"/"===i?"/"===n:n===i||n.startsWith(`${i}/`)}function p(e,t){return t.startsWith("/")?"/"===e?t:`${u(e)}${t}`:""}function x(e,t){return p(e,t.matchSubpath??t.subpath)}let g=c.default.div.withConfig({componentId:"zh__sc-2fa5d58c-0"})`
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
`,v=c.default.div.withConfig({componentId:"zh__sc-2fa5d58c-4"})`
  flex-shrink: 0;
  width: 100%;
  height: 24px;
`,j=c.default.div.withConfig({componentId:"zh__sc-2fa5d58c-5"})`
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
`,_=(0,c.default)(y).withConfig({componentId:"zh__sc-2fa5d58c-7"})``,C=c.default.div.withConfig({componentId:"zh__sc-2fa5d58c-8"})`
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
`,$=c.default.div.withConfig({componentId:"zh__sc-2fa5d58c-16"})`
  flex-shrink: 0;

  width: 100%;

  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  line-height: 20px;
  color: ${({$active:e})=>e?"#4F39F6":"#45464E"};
`;e.s(["default",0,function(){let e=u((0,i.usePathname)()),o=f.default.routes,[r,d]=(0,l.useState)(()=>Object.fromEntries(o.map((t,n)=>[n,t.children?.some(n=>{let i=x(t.subpath,n);return!!i&&h(e,i)})??!1])));return(0,t.jsx)(g,{children:o.map((i,l)=>{if(0===l)return null;let o=i.children??[],c=o.length>0,f=o.some(t=>{let n=x(i.subpath,t);return!!n&&h(e,n)}),u=h(e,i.subpath)||f,g=f||(r[l]??!1);return(0,t.jsxs)(m,{children:[(0,t.jsx)(b,{$active:u,$clickable:!!(i.hasPage||c),as:i.hasPage?n.default:"div",href:i.hasPage?i.subpath:void 0,onClick:c?()=>{d(e=>({...e,[l]:!g}))}:void 0,children:(0,t.jsx)(w,{children:(0,t.jsx)(v,{children:(0,t.jsxs)(j,{children:[(0,t.jsx)(y,{children:i.icon?(0,t.jsx)(i.icon,{size:16,color:u?"#4F39F6":"#6E7079"}):null}),(0,t.jsx)(C,{$active:u,children:`${l}. ${i.label}`}),c?(0,t.jsx)(_,{children:g?(0,t.jsx)(s,{size:16,color:"#6E7079"}):(0,t.jsx)(a,{size:16,color:"#6E7079"})}):null]})})})}),c&&g?(0,t.jsx)(z,{children:(0,t.jsx)(I,{children:o.map((o,r)=>{let a=p(i.subpath,o.subpath),d=x(i.subpath,o),s=!!d&&h(e,d);return(0,t.jsx)(k,{as:o.hasPage?n.default:"div",href:o.hasPage&&a||void 0,children:(0,t.jsx)(E,{children:(0,t.jsx)(T,{children:(0,t.jsx)(S,{children:(0,t.jsx)(O,{children:(0,t.jsx)($,{$active:s,children:`${l}-${r+1}. ${o.label}`})})})})})},`${i.subpath}-${o.subpath}`)})})}):null]},i.subpath)})})}],44997)},57738,e=>{"use strict";var t=e.i(9735);e.i(3159);var n=e.i(46907),i=e.i(20276),l=e.i(8179),o=e.i(22803),r=e.i(9454),a=e.i(43174);let d=(0,n.observer)(function(){let{items:e,remove:n}=a.default.ui.layout.toast,o=new Map;e.forEach(e=>{let t=o.get(e.container)??[];t.push(e),o.set(e.container,t)});let r=Array.from(o.entries()).map(([e,t])=>({container:e,items:t}));return(0,t.jsx)(t.Fragment,{children:r.map(({container:e,items:o})=>{let r=(0,t.jsx)(c,{$isFixed:null===e,children:o.map(e=>(0,t.jsxs)(f,{$type:e.type,role:"status","aria-live":"polite",children:[(0,t.jsx)(u,{children:e.message}),(0,t.jsx)(h,{type:"button",onClick:()=>n(e.id),"aria-label":"토스트 닫기",children:(0,t.jsx)(l.X,{size:14})})]},e.id))});return null===e?(0,t.jsx)(s,{children:r},"fallback-container"):(0,i.createPortal)(r,e,`toast-container-${o[0]?.id??"default"}`)})})}),s=o.default.div.withConfig({componentId:"zh__sc-7dcaecab-0"})`
  position: relative;
`,c=o.default.div.withConfig({componentId:"zh__sc-7dcaecab-1"})`
  pointer-events: none;

  position: ${({$isFixed:e})=>e?"fixed":"absolute"};
  z-index: ${r.default.style.numeric.Z_INDEX.TOAST};
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
`,u=o.default.p.withConfig({componentId:"zh__sc-7dcaecab-3"})`
  flex: 1;

  margin: 0;

  font-size: 16px;
  font-weight: 700;
  line-height: 1.4;
  overflow-wrap: anywhere;
`,h=o.default.button.withConfig({componentId:"zh__sc-7dcaecab-4"})`
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
`;e.s(["default",0,d])},16342,e=>{"use strict";var t=e.i(7744),n=e.i(43174);let i=e=>Array.from(e.dataTransfer?.types??[]).includes("Files");e.s(["default",0,function(){let[e,l]=(0,t.useState)(!1),o=(0,t.useRef)(0),{setIsWindowFileDragging:r}=n.default.ui.layout;return(0,t.useEffect)(()=>{let e=e=>{i(e)&&(o.current+=1,l(!0))},t=e=>{i(e)&&(o.current=Math.max(0,o.current-1),0===o.current&&l(!1))},n=e=>{i(e)&&e.preventDefault()},r=e=>{i(e)&&(e.preventDefault(),o.current=0,l(!1))};return window.addEventListener("dragenter",e),window.addEventListener("dragleave",t),window.addEventListener("dragover",n),window.addEventListener("drop",r),()=>{window.removeEventListener("dragenter",e),window.removeEventListener("dragleave",t),window.removeEventListener("dragover",n),window.removeEventListener("drop",r)}},[]),(0,t.useEffect)(()=>(r(e),()=>{r(!1)}),[e,r]),null}])}]);