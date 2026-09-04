(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,48271,e=>{"use strict";var t=e.i(9735);e.i(3159);var n=e.i(46907),i=e.i(7744),l=e.i(43174),a=e.i(7665),d=e.i(4153);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var r=(0,i.forwardRef)(function(e,t){var n=e.color,l=e.size,a=void 0===l?24:l,d=function(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["color","size"]);return i.default.createElement("svg",o({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),i.default.createElement("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),i.default.createElement("circle",{cx:"12",cy:"12",r:"3"}))});function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}r.propTypes={color:d.default.string,size:d.default.oneOfType([d.default.string,d.default.number])},r.displayName="Eye";var c=(0,i.forwardRef)(function(e,t){var n=e.color,l=e.size,a=void 0===l?24:l,d=function(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["color","size"]);return i.default.createElement("svg",s({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),i.default.createElement("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"}),i.default.createElement("line",{x1:"1",y1:"1",x2:"23",y2:"23"}))});c.propTypes={color:d.default.string,size:d.default.oneOfType([d.default.string,d.default.number])},c.displayName="EyeOff";var f=e.i(38803),h=e.i(25521);let p=(0,n.observer)(function(){let{loginId:e,setLoginId:n,loginIdErrMsg:d,password:o,setPassword:s,isShowPwd:f,setIsShowPwd:p,pwdErrMsg:T,login:S}=l.default.auth.login,[k,E]=(0,i.useState)(!1),D=(0,i.useRef)(null),A=(0,i.useRef)(!1),O=(0,i.useRef)(null),$=(0,i.useRef)(null),R=e=>{let t=e.getModifierState("CapsLock");t!==A.current&&(A.current=t,t&&l.default.ui.layout.toast.info("Caps Lock이 켜져 있습니다.",void 0,D.current))};return(0,i.useEffect)(()=>{O.current?.focus()},[]),(0,t.jsx)(u,{children:(0,t.jsxs)(x,{ref:D,children:[(0,t.jsxs)(g,{children:[(0,t.jsx)(a.default,{src:`${h.default.env.PUBLIC_PATH}/icon/logo-symbol.svg`,width:1,height:1,style:{width:85,height:"auto"},loading:"eager",alt:"Logo"}),(0,t.jsxs)(m,{children:[(0,t.jsx)(b,{children:"자이언 허브"}),(0,t.jsx)(j,{children:"기관용"})]})]}),(0,t.jsxs)(w,{children:[(0,t.jsxs)(_,{$error:null!==d,$hasValue:e.length>0,children:[(0,t.jsx)(y,{$error:null!==d,children:"아이디"}),(0,t.jsx)(v,{ref:O,value:e,onChange:e=>n(e.target.value),placeholder:"영문 아이디"})]}),null!==d?(0,t.jsx)(I,{children:d}):null,(0,t.jsxs)(_,{$error:null!==T,$hasValue:o.length>0,children:[(0,t.jsx)(y,{$error:null!==T,children:"비밀번호"}),(0,t.jsx)(v,{ref:$,type:f?"text":"password",value:o,onChange:e=>s(e.target.value),onFocus:()=>E(!0),onBlur:()=>{E(!1),A.current=!1},onKeyDown:e=>{R(e),"Enter"===e.key&&S()},onKeyUp:e=>{R(e)},placeholder:"영문,숫자,특수문자"}),(0,t.jsx)(C,{type:"button",$active:k,$error:null!==T,onClick:()=>p(!f),onFocus:()=>E(!0),onBlur:()=>E(!1),children:f?(0,t.jsx)(r,{size:24}):(0,t.jsx)(c,{size:24})})]}),null!==T?(0,t.jsx)(I,{children:T}):null,(0,t.jsx)(z,{type:"button",onClick:()=>void S(),children:"로그인"})]})]})})}),u=f.default.main.withConfig({componentId:"zh__sc-9eaa5006-0"})`
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
`,y=f.default.span.withConfig({componentId:"zh__sc-9eaa5006-7"})`
  flex-shrink: 0;

  width: 105px;

  font-size: 20px;
  font-weight: 500;
  line-height: 1;
  color: ${({$error:e})=>!0===e?"#ff3b6b":"#6e7079"};
`,_=f.default.div.withConfig({componentId:"zh__sc-9eaa5006-8"})`
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

  &:focus-within ${y} {
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
`;e.s(["default",0,function({children:e}){let i=(0,n.useRef)(null);return(0,n.useEffect)(()=>(l.default.ui.layout.setAppContainer(i.current),()=>{l.default.ui.layout.setAppContainer(null)}),[]),(0,t.jsx)(a,{ref:i,children:e})}])},69477,e=>{"use strict";var t=e.i(7744),n=e.i(4153);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var l=(0,t.forwardRef)(function(e,n){var l=e.color,a=e.size,d=void 0===a?24:a,o=function(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["color","size"]);return t.default.createElement("svg",i({ref:n,xmlns:"http://www.w3.org/2000/svg",width:d,height:d,viewBox:"0 0 24 24",fill:"none",stroke:void 0===l?"currentColor":l,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),t.default.createElement("polyline",{points:"23 4 23 10 17 10"}),t.default.createElement("path",{d:"M20.49 15a9 9 0 1 1-2.12-9.36L23 10"}))});l.propTypes={color:n.default.string,size:n.default.oneOfType([n.default.string,n.default.number])},l.displayName="RotateCw",e.s(["RotateCw",0,l],69477)},73060,e=>{"use strict";var t=e.i(9735);e.i(3159);var n=e.i(46907),i=e.i(7744),l=e.i(15695),a=e.i(69477),d=e.i(4153);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var r=(0,i.forwardRef)(function(e,t){var n=e.color,l=e.size,a=void 0===l?24:l,d=function(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["color","size"]);return i.default.createElement("svg",o({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),i.default.createElement("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),i.default.createElement("circle",{cx:"12",cy:"7",r:"4"}))});r.propTypes={color:d.default.string,size:d.default.oneOfType([d.default.string,d.default.number])},r.displayName="User";var s=e.i(38803),c=e.i(64954),f=e.i(43174);let h=(0,n.observer)(function(){let{oldestSyncedAt:e,refetchAll:n}=f.default.ui.layout.header,{meNameWithPosition:d,logout:o}=f.default.auth,[s,c]=(0,i.useState)(()=>new Date),[h,_]=(0,i.useState)("idle"),v=(()=>{if(null===e)return null;let t=Math.max(0,Math.floor((s.getTime()-e.getTime())/1e3/60)),n=Math.floor(t/60);return t<60?`오늘 ${t}분 전 최신정보`:`오늘 ${n}시간 전 최신정보`})();(0,i.useEffect)(()=>{if(null===e)return;let t=window.setInterval(()=>{c(new Date)},6e4);return()=>{window.clearInterval(t)}},[e]),(0,i.useEffect)(()=>{if("completed"!==h)return;let e=window.setTimeout(()=>{_("idle")},2e3);return()=>{window.clearTimeout(e)}},[h]);let C=async()=>{_("loading");try{await n(),_("completed")}catch{_("idle")}},I=(()=>{switch(h){case"idle":default:return null;case"loading":return(0,t.jsx)(a.RotateCw,{size:15});case"completed":return(0,t.jsx)(l.Check,{size:20})}})(),z=(()=>{switch(h){case"idle":default:return"최신 정보로 업데이트하기";case"loading":return"업데이트 중";case"completed":return"업데이트 완료"}})(),T=null===e||"idle"!==h;return(0,t.jsxs)(p,{children:[(0,t.jsxs)(u,{children:[null===v?null:(0,t.jsx)(x,{children:v}),(0,t.jsxs)(g,{$status:"loading"===h?"processing":"completed"===h?"success":void 0,onClick:T?void 0:()=>void C(),disabled:T,children:[I,z]})]}),(0,t.jsxs)(m,{children:[null===d?null:(0,t.jsxs)(b,{children:[(0,t.jsx)(j,{children:(0,t.jsx)(r,{size:20,color:"#ff6900"})}),(0,t.jsx)(w,{children:d})]}),(0,t.jsx)(y,{onClick:()=>{o()},children:"로그아웃"})]})]})}),p=s.default.div.withConfig({componentId:"zh__sc-bc883191-0"})`
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
`,y=(0,s.default)(c.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-bc883191-8"})`
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
`;e.s(["default",0,h],73060)},79109,e=>{"use strict";var t=e.i(9735);e.i(3159);var n=e.i(46907),i=e.i(7744),l=e.i(43174),a=e.i(26170);let d=(0,n.observer)(function(){let{isLoading:e}=l.default.api,[n,d]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{if(!e)return;let t=window.setTimeout(()=>{d(!0)},300);return()=>{d(!1),window.clearTimeout(t)}},[e]),e&&n?(0,t.jsx)(a.default,{isLoading:!0,children:null}):null});e.s(["default",0,d])},55357,e=>{"use strict";var t=e.i(9735);e.i(3159);var n=e.i(46907),i=e.i(7744),l=e.i(38803),a=e.i(43174),d=e.i(26170),o=e.i(64954),r=e.i(7242);let s=function({currentServiceType:e,detectedServiceType:n,isContinueDisabled:i,isOpen:l,onCancel:a,onContinue:d,registrationTarget:o}){if(!l)return null;let s=`${r.default[e].label} 서비스`,b=`${r.default[n].label} 서비스`,j="이용자"===o?"이용자로":"제공인력으로";return(0,t.jsx)(c,{children:(0,t.jsxs)(f,{children:[(0,t.jsxs)(h,{children:[(0,t.jsxs)(p,{children:["[",b,"] ",o,"의 전자바우처입니다."]}),(0,t.jsxs)(u,{children:["현재 [",s,"]에서 ",o," 등록을 진행하고 있습니다.",(0,t.jsx)("br",{}),i?(0,t.jsxs)(t.Fragment,{children:["업로드한 전자바우처는 [",b,"]로 확인되었습니다.",(0,t.jsx)("br",{}),"현재 기관에서 [",b,"]를 운영하고 있지 않아 등록을 계속할 수 없습니다."]}):(0,t.jsxs)(t.Fragment,{children:["업로드한 전자바우처는 [",b,"]로 확인되어, [",b,"]"," ",j," 등록을 계속합니다."]})]})]}),(0,t.jsxs)(x,{children:[(0,t.jsx)(g,{type:"button",onClick:a,children:"등록하지 않고 나가기"}),!i&&(0,t.jsxs)(m,{type:"button",onClick:d,children:["[",b,"]로 계속 등록하기"]})]})]})})},c=l.default.div.withConfig({componentId:"zh__sc-4e4950a7-0"})`
  position: fixed;
  z-index: 3100;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgb(17 24 39 / 36%);
`,f=l.default.div.withConfig({componentId:"zh__sc-4e4950a7-1"})`
  display: inline-flex;
  flex-direction: column;
  gap: 48px;
  align-items: center;
  justify-content: center;

  width: 501px;
  padding: 32px 24px;
  border: 1px solid #e5e9ef;
  border-radius: 8px;

  background: #fff;
  box-shadow: 0 4px 2px rgb(0 0 0 / 10%);
`,h=l.default.div.withConfig({componentId:"zh__sc-4e4950a7-2"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;
`,p=l.default.h3.withConfig({componentId:"zh__sc-4e4950a7-3"})`
  align-self: stretch;

  margin: 0;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px;
  color: #000;
`,u=l.default.p.withConfig({componentId:"zh__sc-4e4950a7-4"})`
  margin: 0;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px;
  color: #000;
`,x=l.default.div.withConfig({componentId:"zh__sc-4e4950a7-5"})`
  display: flex;
  gap: 12px;
  align-self: stretch;
  justify-content: flex-end;
`,g=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-4e4950a7-6"})`
  height: 36px;
  padding: 8px 16px;
  border-color: #4f39f6;
  color: #4f39f6;
`,m=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-4e4950a7-7"})`
  height: 36px;
  padding: 8px 16px;
`;var b=e.i(15695);let j=(0,n.observer)(function(){let{clientDraft:e,isSaving:n,resetToUploadStep:i,saveClientDraft:l}=a.default.modal.clientCreate,{preserveClientAfterSave:d,resetSort:o,setCurrentServiceType:r,setHighlightedClientId:s}=a.default.client.info.byClient,c=async()=>{let t=e?.serviceType,n=await l();if(null===n)return void requestAnimationFrame(()=>{document.querySelector("[data-client-create-field-error]")?.scrollIntoView({block:"center",behavior:"smooth"})});let i=t??null,c="clientId"in n?n.clientId:n.id;null!==i&&(r(i),o(),a.default.data.client.list.setQuery({serviceType:i}),await a.default.data.client.list.refetch()),"string"==typeof c&&c.length>0&&(d(c),s(c))};return(0,t.jsxs)(w,{children:[(0,t.jsx)(_,{disabled:!e||n,onClick:i,children:"다시 업로드하기"}),(0,t.jsxs)(v,{disabled:!e||n,onClick:()=>void c(),children:[(0,t.jsx)(b.Check,{size:16}),"최종확인 및 저장"]})]})}),w=l.default.div.withConfig({componentId:"zh__sc-759c17e6-0"})`
  display: flex;
  gap: 16px;
  align-items: center;
  align-self: stretch;
  justify-content: flex-end;

  padding: 16px;
  border-top: 1px solid #e5e7eb;
`,y=l.css`
  display: flex;
  gap: 10px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,_=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-759c17e6-1"})`
  ${y}
`,v=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-759c17e6-2"})`
  ${y}
`,C=(0,n.observer)(function(){let e=a.default.modal.clientCreate;return!0!==e.isContractPeriodOverlapDialogOpen?null:(0,t.jsx)(I,{children:(0,t.jsxs)(z,{children:[(0,t.jsxs)(T,{children:[(0,t.jsx)(S,{children:"계약기간이 중복되어 등록할 수 없습니다."}),(0,t.jsxs)(k,{children:["동일한 이름과 주민등록번호로 등록된 이용자의 계약•서비스 기간 중 겹치는 기간이 있습니다.",(0,t.jsx)("br",{}),"계약•서비스 기간이 겹치지 않도록 수정한 후 다시 등록해주세요."]})]}),(0,t.jsxs)(E,{children:[(0,t.jsx)(D,{type:"button",onClick:e.cancelContractPeriodOverlapRegistration,children:"등록 취소하기"}),(0,t.jsx)(A,{type:"button",onClick:e.closeContractPeriodOverlapDialog,children:"계약/서비스 기간 수정하기"})]})]})})}),I=l.default.div.withConfig({componentId:"zh__sc-79ae8371-0"})`
  position: fixed;
  z-index: 3100;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgb(17 24 39 / 36%);
`,z=l.default.div.withConfig({componentId:"zh__sc-79ae8371-1"})`
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
`,T=l.default.div.withConfig({componentId:"zh__sc-79ae8371-2"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;
`,S=l.default.h3.withConfig({componentId:"zh__sc-79ae8371-3"})`
  align-self: stretch;

  margin: 0;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px;
  color: #000;
`,k=l.default.p.withConfig({componentId:"zh__sc-79ae8371-4"})`
  margin: 0;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px;
  color: #000;
`,E=l.default.div.withConfig({componentId:"zh__sc-79ae8371-5"})`
  display: flex;
  gap: 12px;
  align-self: stretch;
  justify-content: flex-end;
`,D=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-79ae8371-6"})`
  display: flex;
  gap: 10px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,A=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-79ae8371-7"})`
  display: flex;
  gap: 10px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`;var O=e.i(74515),$=e.i(4153);function R(){return(R=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var L=(0,i.forwardRef)(function(e,t){var n=e.color,l=e.size,a=void 0===l?24:l,d=function(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["color","size"]);return i.default.createElement("svg",R({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),i.default.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),i.default.createElement("polyline",{points:"12 5 19 12 12 19"}))});L.propTypes={color:$.default.string,size:$.default.oneOfType([$.default.string,$.default.number])},L.displayName="ArrowRight";let N=(0,n.observer)(function(){let{analyzeSelectedFile:e,isAnalyzing:n,selectedFile:i}=a.default.modal.clientCreate;return(0,t.jsx)(P,{children:(0,t.jsxs)(F,{disabled:null===i||n,onClick:()=>{e()},children:["분석 시작",(0,t.jsx)(L,{size:16})]})})}),P=l.default.div.withConfig({componentId:"zh__sc-d7f6cfb5-0"})`
  display: flex;
  gap: 10px;
  align-self: stretch;
  justify-content: flex-end;
`,F=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-d7f6cfb5-1"})`
  display: flex;
  flex-shrink: 0;
  gap: 10px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`;var M=e.i(8179),B=e.i(98273),U=e.i(25521);let{FILE_EXTENSION_WHITELIST_BY_GROUP:W}=U.default.file,Y=(0,n.observer)(function(){var e;let n,{clearSelectedFile:i,selectedFile:l,isAnalyzing:d}=a.default.modal.clientCreate;if(null===l)return null;let o=-1===(n=(e=l.name).lastIndexOf("."))?"":e.slice(n).toLowerCase();return(0,t.jsx)(V,{children:(0,t.jsxs)(H,{children:[(0,t.jsxs)(G,{children:[(0,t.jsx)(K,{children:W.IMAGE.some(e=>e===o)?(0,t.jsx)(B.default.Photo,{size:17,color:"#FA8E43"}):W.AUDIO.some(e=>e===o)?(0,t.jsx)(B.default.SpeechToText,{size:17,color:"#A855F7"}):W.DOCUMENT.some(e=>e===o)?(0,t.jsx)(B.default.News,{size:17,color:"#2264E8"}):null}),(0,t.jsx)(X,{children:(0,t.jsx)(q,{children:l.name})})]}),(0,t.jsxs)(Q,{onClick:i,disabled:d,children:["삭제",(0,t.jsx)(M.X,{size:16})]})]},`${l.name}-${l.size}-${l.lastModified}`)})}),V=l.default.div.withConfig({componentId:"zh__sc-8227d071-0"})`
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
`,H=l.default.div.withConfig({componentId:"zh__sc-8227d071-1"})`
  display: flex;
  flex-shrink: 0;
  gap: 24px;
  align-items: center;

  padding: 12px 16px;
  border-radius: 8px;

  background: #f6f8fb;
`,G=l.default.div.withConfig({componentId:"zh__sc-8227d071-2"})`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`,K=l.default.div.withConfig({componentId:"zh__sc-8227d071-3"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;
  border-radius: 4px;

  background: #fff;
`,X=l.default.div.withConfig({componentId:"zh__sc-8227d071-4"})`
  display: flex;
  align-items: center;
  align-self: stretch;

  width: 196px;
  height: 40px;

  color: #0a0a0a;
`,q=l.default.div.withConfig({componentId:"zh__sc-8227d071-5"})`
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #0a0a0a;
`,Q=l.default.button.withConfig({componentId:"zh__sc-8227d071-6"})`
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
`;var Z=e.i(24045),J=e.i(9454);function ee(){let[e,n]=(0,i.useState)(0);return(0,i.useEffect)(()=>{let e=performance.now(),t=0,i=l=>{n(Math.min(100*(1-Math.exp(-((l-e)/1e3*.05))),98)),t=window.requestAnimationFrame(i)};return t=window.requestAnimationFrame(i),()=>{window.cancelAnimationFrame(t)}},[]),(0,t.jsx)(et,{children:(0,t.jsx)(en,{$progress:e})})}let et=l.default.div.withConfig({componentId:"zh__sc-aa649b54-0"})`
  overflow: hidden;
  display: flex;

  width: 362px;
  height: ${8}px;
  border-radius: 99px;

  background: #e6e0ff;
  background-color: #e5e2ff;
`,en=l.default.div.attrs(({$progress:e})=>({style:{transform:`scaleX(${e/100})`}})).withConfig({componentId:"zh__sc-aa649b54-1"})`
  transform-origin: left center;
  width: 100%;
  height: 100%;
  background-color: #5635ff;
`,ei=(0,n.observer)(function(){let{isWindowFileDragging:e}=a.default.ui.layout,{selectedFile:n,isError:i,isAnalyzing:l,abortAnalyze:d}=a.default.modal.clientCreate,o=i?"지원하지 않는 파일 형식입니다.":e?"파일을 여기에 놓으면 업로드 됩니다.":l?"업로드한 파일을 분석하고 있습니다.":"이곳에 파일을 끌어다 놓거나 (드래그 앤 드롭), 클릭하여 업로드하세요.",r=null===n||l?"지원 파일 형식: 사진 이미지":"새 파일을 업로드하면 기존 파일이 교체됩니다.";return(0,t.jsxs)(ea,{children:[null===n&&!i&&(0,t.jsx)(ed,{children:(0,t.jsx)(Z.Upload,{size:26,color:el[100]})}),(0,t.jsxs)(eo,{children:[(0,t.jsx)(er,{$isError:i,children:o}),(0,t.jsx)(es,{children:r})]}),l&&(0,t.jsx)(ee,{}),l&&(0,t.jsx)(ec,{onClick:d,children:"중단하기"})]})}),{PRIMARY:el}=J.default.style.color,ea=l.default.div.withConfig({componentId:"zh__sc-47e9a3b3-0"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  align-self: stretch;
  justify-content: center;
`,ed=l.default.div.withConfig({componentId:"zh__sc-47e9a3b3-1"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;
`,eo=l.default.div.withConfig({componentId:"zh__sc-47e9a3b3-2"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  align-self: stretch;
  justify-content: center;
`,er=l.default.div.withConfig({componentId:"zh__sc-47e9a3b3-3"})`
  font-size: 14px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 142.857% */
  color: ${({$isError:e})=>e?"#ff4d4f":"#4f39f6"};
  text-align: center;
`,es=l.default.div.withConfig({componentId:"zh__sc-47e9a3b3-4"})`
  font-size: 14px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 142.857% */
  color: #99a1af;
`,ec=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-47e9a3b3-5"})`
  display: flex;
  gap: 10px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,ef=(0,n.observer)(function(){let{isWindowFileDragging:e}=a.default.ui.layout,{acceptFileTypes:n,setSelectedFile:l,selectedFile:d,isError:o}=a.default.modal.clientCreate,r=(0,i.useRef)(null);return(0,O.default)(e=>{if(0===e.length)return;let t=e[0];void 0!==t&&l(t)}),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(eh,{ref:r,type:"file",accept:n,onChange:e=>{let t=Array.from(e.target.files??[]);if(0===t.length)return;let n=t[0];void 0!==n&&(l(n),e.target.value="")}}),(0,t.jsxs)(ep,{$isWindowFileDragging:e,onDragOver:e=>{e.preventDefault()},onDrop:e=>{e.preventDefault();let t=Array.from(e.dataTransfer.files);if(0===t.length)return;let n=t[0];void 0!==n&&l(n)},onClick:e=>{e.target instanceof HTMLElement&&(e.target.closest("button")||r.current?.click())},$isError:o,children:[null!==d&&(0,t.jsx)(Y,{}),(0,t.jsx)(ei,{}),(0,t.jsx)(N,{})]})]})}),eh=l.default.input.withConfig({componentId:"zh__sc-35541df3-0"})`
  display: none;
`,ep=l.default.div.withConfig({componentId:"zh__sc-35541df3-1"})`
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
`,eu=(0,n.observer)(function(){let{analyzedFile:e,mode:n}=a.default.modal.clientCreate;return(0,t.jsxs)(ex,{$flex1:null===e,children:[null===e&&(0,t.jsx)(eg,{children:"renew"===n?"새로운 전자바우처 캡쳐 화면을 아래에 업로드하고, 다음 버튼을 클릭하세요.":"전자바우처 캡쳐 화면을 아래에 업로드하고, 다음 버튼을 클릭하세요."}),(0,t.jsx)(ef,{})]})}),ex=l.default.div.withConfig({componentId:"zh__sc-8fa7e82c-0"})`
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
`,eg=l.default.div.withConfig({componentId:"zh__sc-8fa7e82c-1"})`
  font-size: 18px;
  font-weight: 700;
  font-style: normal;
  line-height: 24px; /* 133.333% */
  color: #101828;
`,em="border-highlight-style-tag",eb="border-highlight-sweep",ej="--border-highlight-sweep",ew=`
  linear-gradient(transparent, transparent) padding-box,
  conic-gradient(
    from -90deg,
    #fff 0deg,
    #ede9fe 8deg,
    #a78bfa 22deg,
    #7c3aed calc(var(${ej}) * 0.28),
    #4f39f6 calc(var(${ej}) * 0.45),
    #818cf8 calc(var(${ej}) * 0.65),
    #a78bfa calc(var(${ej}) * 0.8),
    #ddd6fe calc(var(${ej}) * 0.93),
    #fff var(${ej}),
    #fff 360deg
  ) border-box
`,ey=function(){let e=(0,i.useRef)(null),t=(0,i.useRef)(null),n=(0,i.useRef)(null),l=(0,i.useRef)(null),a=(0,i.useRef)(null),d=(0,i.useRef)(null),o=(0,i.useRef)(null),r=(0,i.useCallback)(()=>{null!==l.current&&(window.clearTimeout(l.current),l.current=null),null!==a.current&&(window.cancelAnimationFrame(a.current),a.current=null)},[]),s=(0,i.useCallback)(()=>{let i=e.current,l=t.current,a=n.current;null!==i&&null!==l&&null!==a&&(l.style.top=`${i.offsetTop-1}px`,l.style.left=`${i.offsetLeft-1}px`,l.style.width=`${i.offsetWidth+2}px`,l.style.height=`${i.offsetHeight+2}px`,l.style.borderRadius=window.getComputedStyle(i).borderRadius)},[]),c=(0,i.useCallback)(()=>{let i=e.current;if(null===i)return null;(()=>{if("u"<typeof document||null!==document.getElementById(em))return;let e=document.createElement("style");e.id=em,e.textContent=`
    @property ${ej} {
      inherits: false;
      initial-value: 0deg;
      syntax: '<angle>';
    }

    @keyframes ${eb} {
      from {
        ${ej}: 0deg;
      }

      to {
        ${ej}: 360deg;
      }
    }
  `,document.head.append(e)})();let l=i.parentElement;if(null===l)return null;if(n.current=l,null===d.current&&(d.current={position:i.style.position,zIndex:i.style.zIndex}),null===o.current&&(o.current=l.style.position),"static"===window.getComputedStyle(l).position&&(l.style.position="relative"),""===i.style.position&&(i.style.position="relative"),""===i.style.zIndex&&(i.style.zIndex="1"),null===t.current){let e=document.createElement("div");e.style.pointerEvents="none",e.style.position="absolute",e.style.zIndex="0",e.style.boxSizing="border-box",e.style.border="1px solid transparent",e.style.background="none",l.append(e),t.current=e}return s(),t.current},[s]),f=(0,i.useCallback)(()=>{let e=c();null===e||window.matchMedia("(prefers-reduced-motion: reduce)").matches||(r(),e.style.animation="none",e.style.background=ew,e.style.setProperty(ej,"0deg"),e.offsetWidth,a.current=window.requestAnimationFrame(()=>{s(),e.style.animation=`${eb} 600ms ease-in-out forwards`,a.current=null,l.current=window.setTimeout(()=>{e.style.animation="",e.style.background="none",l.current=null},600)}))},[r,c,s]);return(0,i.useEffect)(()=>{let i=e.current,l=n.current,a=t.current,s=d.current,c=o.current;return()=>{r(),null!==a&&(a.style.animation="",a.style.background="none"),a?.remove(),null!==i&&null!==s&&(i.style.position=s.position,i.style.zIndex=s.zIndex),null!==l&&null!==c&&(l.style.position=c)}},[r]),{ref:e,fire:f}},{FILE_EXTENSION_WHITELIST_BY_GROUP:e_}=U.default.file,ev=(0,n.observer)(function(){var e;let n,{analyzedFile:l}=a.default.modal.clientCreate,{ref:d,fire:o}=ey();if((0,i.useEffect)(()=>{null!==l&&o()},[l,o]),null===l)return null;let r=-1===(n=(e=l.name).lastIndexOf("."))?"":e.slice(n).toLowerCase();return(0,t.jsxs)(eC,{ref:d,children:[(0,t.jsxs)(eI,{children:[(0,t.jsxs)(ez,{children:[(0,t.jsx)(B.default.FindInPage,{size:18}),"AI 문서 인식 완료"]}),(0,t.jsxs)(eT,{children:["업로드된 서류들에서 정보를 성공적으로 추출했습니다. ",(0,t.jsx)("br",{}),"우측의 [이용자 기본 정보]가 올바르게 연동되었는지 확인 후, [최종 확인] 버튼을 눌러주세요."]})]}),(0,t.jsxs)(eS,{children:[(0,t.jsxs)(ek,{children:[(0,t.jsx)(B.default.CheckCircle,{size:18}),"분석 완료된 첨부 서류 (1건)"]}),(0,t.jsx)(eE,{children:(0,t.jsxs)(eD,{children:[(0,t.jsxs)(eA,{children:[(0,t.jsx)(eO,{children:e_.IMAGE.some(e=>e===r)?(0,t.jsx)(B.default.Photo,{size:17,color:"#FA8E43"}):e_.AUDIO.some(e=>e===r)?(0,t.jsx)(B.default.SpeechToText,{size:17,color:"#A855F7"}):e_.DOCUMENT.some(e=>e===r)?(0,t.jsx)(B.default.News,{size:17,color:"#2264E8"}):null}),(0,t.jsx)(e$,{children:(0,t.jsx)(eR,{children:l.name})})]}),(0,t.jsx)(eL,{children:"추출 완료"})]},`${l.name}-${l.size}-${l.lastModified}`)})]})]})}),eC=l.default.div.withConfig({componentId:"zh__sc-a40fcee8-0"})`
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
`,eI=l.default.div.withConfig({componentId:"zh__sc-a40fcee8-1"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  align-self: stretch;
`,ez=l.default.div.withConfig({componentId:"zh__sc-a40fcee8-2"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #0a0a0a;
`,eT=l.default.div.withConfig({componentId:"zh__sc-a40fcee8-3"})`
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
`,eS=l.default.div.withConfig({componentId:"zh__sc-a40fcee8-4"})`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  align-self: stretch;

  min-height: 0;
`,ek=l.default.div.withConfig({componentId:"zh__sc-a40fcee8-5"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #0a0a0a;
`,eE=l.default.div.withConfig({componentId:"zh__sc-a40fcee8-6"})`
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
`,eD=l.default.div.withConfig({componentId:"zh__sc-a40fcee8-7"})`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 355px;
  height: 64px;
  padding: 12px 16px;
  border-radius: 8px;

  background: #f6f8fb;
`,eA=l.default.div.withConfig({componentId:"zh__sc-a40fcee8-8"})`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`,eO=l.default.div.withConfig({componentId:"zh__sc-a40fcee8-9"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;
  border-radius: 4px;

  background: #fff;
`,e$=l.default.div.withConfig({componentId:"zh__sc-a40fcee8-10"})`
  display: flex;
  align-items: center;
  align-self: stretch;

  width: 196px;
  height: 40px;

  color: #0a0a0a;
`,eR=l.default.div.withConfig({componentId:"zh__sc-a40fcee8-11"})`
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #0a0a0a;
`,eL=l.default.div.withConfig({componentId:"zh__sc-a40fcee8-12"})`
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
`,eN=(0,n.observer)(function(){let{analyzedFile:e}=a.default.modal.clientCreate;return(0,t.jsxs)(eP,{children:[null!==e&&(0,t.jsx)(ev,{}),(0,t.jsx)(eu,{})]})}),eP=l.default.div.withConfig({componentId:"zh__sc-a077b87a-0"})`
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
`;var eF=e.i(21771);let eM=l.default.div.withConfig({componentId:"zh__sc-1e1c9c9-0"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`,eB=l.default.div.withConfig({componentId:"zh__sc-1e1c9c9-1"})`
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
`,eU=l.default.div.withConfig({componentId:"zh__sc-1e1c9c9-2"})`
  display: flex;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;

  min-height: 59px;
`,eW=l.default.div.withConfig({componentId:"zh__sc-1e1c9c9-3"})`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
  align-self: flex-start;
  justify-content: flex-start;

  min-height: 59px;

  ${({$width:e})=>void 0!==e?`
        width: ${e}px;
      `:`
        flex: 1;
        min-width: 0;
      `}
`,eY=l.default.div.withConfig({componentId:"zh__sc-1e1c9c9-4"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #000;
  text-align: center;
`,eV={display:"flex",padding:"4px 16px",alignItems:"center",gap:"10px",flex:"1 0 0",alignSelf:"stretch",fontSize:16},eH=(0,n.observer)(function(){let{clientDraft:e,updateClientDraft:n}=a.default.modal.clientCreate;return null===e?null:(0,t.jsxs)(eM,{children:[(0,t.jsx)(eB,{children:"보호자 정보"}),(0,t.jsxs)(eU,{children:[(0,t.jsxs)(eW,{$width:260,children:[(0,t.jsx)(eY,{children:"보호자명"}),(0,t.jsx)(o.default.Input.Text,{style:eV,value:e.guardianName??"",onChange:e=>{n(t=>({...t,guardianName:e.target.value}))},placeholder:"보호자 성명을 입력하세요."})]}),(0,t.jsxs)(eW,{$width:260,children:[(0,t.jsx)(eY,{children:"보호자 관계"}),(0,t.jsx)(o.default.Input.Text,{style:eV,value:e.guardianRelationship??"",onChange:e=>{n(t=>({...t,guardianRelationship:e.target.value}))},placeholder:"관계를 입력하세요."})]})]}),(0,t.jsxs)(eU,{children:[(0,t.jsxs)(eW,{children:[(0,t.jsx)(eY,{children:"보호자 휴대폰"}),(0,t.jsx)(o.default.Input.Text,{style:eV,value:e.guardianPhoneNumber??"",onChange:e=>{n(t=>({...t,guardianPhoneNumber:e.target.value}))},placeholder:"휴대폰번호를 입력해주세요."})]}),(0,t.jsxs)(eW,{children:[(0,t.jsx)(eY,{children:"보호자 연락처"}),(0,t.jsx)(o.default.Input.Contact,{style:eV,value:e.guardianContact??"",onChange:e=>{n(t=>({...t,guardianContact:e}))},placeholder:"연락처번호를 입력해주세요."})]})]}),(0,t.jsxs)(eW,{children:[(0,t.jsx)(eY,{children:"보호자 주소"}),(0,t.jsx)(o.default.Input.Text,{style:eV,value:e.guardianAddress??"",onChange:e=>{n(t=>({...t,guardianAddress:e.target.value}))},placeholder:"보호자 주소를 입력해주세요."})]})]})}),eG=e=>{let t=e.trim().match(/^(\d{6})-?(\d)(\d{0,6})$/);if(null===t)return"unknown";switch(t[2]){case"1":case"3":return"MALE";case"2":case"4":return"FEMALE";default:return"unknown"}},eK=e=>{switch(e){case"MALE":return"남성";case"FEMALE":return"여성";case"unknown":return""}},eX=e=>{switch(e){case"MEAL":return"식사관리 서비스";case"NUTRITION":return"영양관리 서비스";case"DISABILITY_ACTIVITY_SUPPORT":return"장애인 활동지원"}},eq=(0,n.observer)(function(){let{clientDraft:e,ocrDraft:n,updateClientDraft:i,getClientDraftFieldError:l,clearClientDraftFieldError:d}=a.default.modal.clientCreate;if(null===e)return null;let r=e.name??"",s=e.residentRegistrationNumber??"",c=e.businessType??"DAY_CARE",f=e.serviceType??"MEAL",h=e.contractStartDate??"",p=e.contractEndDate??"",u=e.serviceStartDate??"",x=e.serviceEndDate??"",g=e.note??"",m=e.vehicleFuelCostNoticeGiven??!0,b=e.contact??"",j=e.phoneNumber??"",w=e.address??"",y=e.postCode??"",_=e.addressDetail??"",v=(()=>{let e=new Date,[t,n]=eF.default.create(e.getFullYear(),e.getMonth()+1,e.getDate());return null===t?n:null})(),C=eG(s),I=eX(f),z="DISABILITY_ACTIVITY_SUPPORT"===c?"장애인 활동지원":"일상돌봄 서비스",T="DISABILITY_ACTIVITY_SUPPORT"===f?"활동보조":eX(f),S=(e=>{switch(e){case"MEAL":return"500901";case"NUTRITION":return"500401";case"DISABILITY_ACTIVITY_SUPPORT":return"HWG001"}})(f),k=(e,t)=>""===l(e)?t:{...t,borderColor:"#ff4d4f",background:"#fff5f5"},E=e=>{let n=l(e);return""===n?null:(0,t.jsx)(e2,{"data-client-create-field-error":"true",children:n})},D=(e,t)=>{let n=String(t??"").trim();return""!==n&&String(e).trim()===n},A=(e,t)=>{eF.default.is(e)&&i(n=>t(n,e))};return(0,t.jsxs)(eM,{children:[(0,t.jsx)(eB,{children:"인적사항"}),(0,t.jsxs)(eU,{children:[(0,t.jsxs)(eW,{children:[(0,t.jsxs)(eY,{children:["성명",(0,t.jsx)(eQ,{})]}),(0,t.jsx)(o.default.Input.Text,{$autoFilled:D(r,n?.name??""),style:k("name",eV),value:r,onChange:e=>{d("name"),i(t=>({...t,name:e.target.value.trim()}))},placeholder:"성명을 입력해주세요."}),E("name")]}),(0,t.jsxs)(eW,{children:[(0,t.jsx)(eY,{children:"주민등록번호"}),(0,t.jsx)(o.default.Input.ResidentRegistrationNumber,{$autoFilled:D(s,n?.residentRegistrationNumber??""),style:k("residentRegistrationNumber",eV),value:s,onChange:e=>{d("residentRegistrationNumber"),i(t=>({...t,residentRegistrationNumber:e}))},placeholder:"주민등록번호를 입력해주세요."}),E("residentRegistrationNumber")]}),(0,t.jsxs)(eW,{$width:266,children:[(0,t.jsx)(eY,{children:"성별"}),(0,t.jsx)(e4,{$autoFilled:D(eK(C),eK(eG(n?.residentRegistrationNumber??""))),style:eV,value:eK(C),placeholder:"주민등록번호와 연동되어 보여집니다.",readOnly:!0})]})]}),(0,t.jsxs)(eU,{children:[(0,t.jsxs)(eW,{children:[(0,t.jsxs)(eY,{children:["휴대폰",(0,t.jsx)(eQ,{})]}),(0,t.jsx)(o.default.Input.Phone,{$autoFilled:D(j,n?.phoneNumber??""),style:k("phoneNumber",eV),value:j,onChange:e=>{d("phoneNumber"),i(t=>({...t,phoneNumber:e}))},placeholder:"휴대폰번호를 입력해주세요."}),E("phoneNumber")]}),(0,t.jsxs)(eW,{children:[(0,t.jsx)(eY,{children:"연락처"}),(0,t.jsx)(o.default.Input.Contact,{$autoFilled:D(b,n?.contact??""),style:k("contact",eV),value:b,onChange:e=>{d("contact"),i(t=>({...t,contact:e}))},placeholder:"연락처번호를 입력해주세요."}),E("contact")]})]}),(0,t.jsxs)(eU,{children:[(0,t.jsxs)(eW,{children:[(0,t.jsx)(eY,{children:"주소"}),(0,t.jsx)(o.default.Input.Text,{$autoFilled:D(w,n?.address??""),style:k("address",eV),value:w,onChange:e=>{d("address"),i(t=>({...t,address:e.target.value}))},placeholder:"주소를 입력해주세요."}),E("address")]}),(0,t.jsxs)(eW,{$width:191,children:[(0,t.jsx)(eY,{children:"우편번호"}),(0,t.jsx)(o.default.Input.PostCode,{$autoFilled:D(y,n?.postCode??""),style:k("postCode",eV),value:y,onChange:e=>{d("postCode"),i(t=>({...t,postCode:e}))},placeholder:"우편번호를 입력해주세요."}),E("postCode")]})]}),(0,t.jsx)(eU,{children:(0,t.jsxs)(eW,{children:[(0,t.jsx)(eY,{children:"상세주소"}),(0,t.jsx)(o.default.Input.Text,{$autoFilled:D(_,n?.addressDetail??""),style:k("addressDetail",eV),value:_,onChange:e=>{d("addressDetail"),i(t=>({...t,addressDetail:e.target.value}))},placeholder:"상세주소를 입력해주세요."}),E("addressDetail")]})}),(0,t.jsxs)(eU,{children:[(0,t.jsxs)(eW,{children:[(0,t.jsx)(eY,{children:"특이사항(메모)"}),(0,t.jsx)(o.default.Input.Text,{style:eV,value:g,onChange:e=>{i(t=>({...t,note:e.target.value}))},placeholder:"메모가 필요한 사항을 입력해주세요."})]}),"DISABILITY_ACTIVITY_SUPPORT"===f&&(0,t.jsxs)(eW,{$width:191,children:[(0,t.jsx)(eY,{children:"차량 유류비 안내"}),(0,t.jsxs)(eZ,{children:[(0,t.jsxs)(eJ,{children:[(0,t.jsx)(e0,{checked:m,onChange:()=>{i(e=>({...e,vehicleFuelCostNoticeGiven:!0}))}}),"완료"]}),(0,t.jsxs)(eJ,{children:[(0,t.jsx)(e0,{checked:!m,onChange:()=>{i(e=>({...e,vehicleFuelCostNoticeGiven:!1}))}}),"미완료"]})]})]})]}),(0,t.jsx)(eH,{}),(0,t.jsxs)(eU,{children:[(0,t.jsxs)(eW,{$width:191,children:[(0,t.jsxs)(eY,{children:["접수일",(0,t.jsx)(eQ,{})]}),(0,t.jsx)(o.default.Input.Date,{$autoFilled:e.firstRegisteredDate===v,style:k("firstRegisteredDate",e6),value:e.firstRegisteredDate??"",onChange:e=>{d("firstRegisteredDate"),A(e,(e,t)=>({...e,firstRegisteredDate:t}))}}),E("firstRegisteredDate")]}),(0,t.jsxs)(eW,{$width:191,children:[(0,t.jsx)(eY,{children:"계약 시작일"}),(0,t.jsx)(o.default.Input.Date,{$autoFilled:D(h,n?.contractStartDate??""),style:k("contractStartDate",e6),value:h,onChange:e=>{d("contractStartDate"),A(e,(e,t)=>({...e,contractStartDate:t}))}}),E("contractStartDate")]}),(0,t.jsxs)(eW,{$width:191,children:[(0,t.jsx)(eY,{children:"계약 종료일"}),(0,t.jsx)(o.default.Input.Date,{$autoFilled:D("DISABILITY_ACTIVITY_SUPPORT"===f?p:x,n?.contractEndDate??n?.serviceEndDate??""),style:"DISABILITY_ACTIVITY_SUPPORT"===f?e6:k("serviceEndDate",e6),value:"DISABILITY_ACTIVITY_SUPPORT"===f?"":x,disabled:"DISABILITY_ACTIVITY_SUPPORT"===f,onChange:e=>{"DISABILITY_ACTIVITY_SUPPORT"===f&&(d("contractEndDate"),A(e,(e,t)=>({...e,contractEndDate:t})))}}),"DISABILITY_ACTIVITY_SUPPORT"!==f&&E("serviceEndDate")]})]}),"DISABILITY_ACTIVITY_SUPPORT"!==f&&(0,t.jsxs)(eU,{children:[(0,t.jsxs)(eW,{$width:191,children:[(0,t.jsx)(eY,{children:"서비스 시작일"}),(0,t.jsx)(o.default.Input.Date,{$autoFilled:D(u,n?.serviceStartDate??""),style:k("serviceStartDate",e6),value:u,onChange:e=>{d("serviceStartDate"),A(e,(e,t)=>{let n=(e=>{let[t,n,i]=e.split("-"),l=new Date(Number(t),Number(n)-1,Number(i));l.setFullYear(l.getFullYear()+1),l.setDate(l.getDate()-1);let[a,d]=eF.default.create(l.getFullYear(),l.getMonth()+1,l.getDate());return null!==a||null===d?null:d})(t);return null===n?e:{...e,serviceStartDate:t,serviceEndDate:n}})}}),E("serviceStartDate")]}),(0,t.jsxs)(eW,{$width:191,children:[(0,t.jsx)(eY,{children:"서비스 종료일"}),(0,t.jsx)(o.default.Input.Date,{$autoFilled:D(x,n?.serviceEndDate??""),style:k("serviceEndDate",e6),value:x,onChange:e=>{d("serviceEndDate"),A(e,(e,t)=>({...e,serviceEndDate:t}))}}),E("serviceEndDate")]})]}),(0,t.jsxs)(eU,{children:[(0,t.jsxs)(eW,{children:[(0,t.jsxs)(eY,{children:["사업구분",(0,t.jsx)(eQ,{})]}),(0,t.jsx)(o.default.Input.Select,{style:eV,value:c,disabled:!0,children:(0,t.jsx)("option",{value:c,children:z})})]}),(0,t.jsxs)(eW,{children:[(0,t.jsxs)(eY,{children:["서비스명",(0,t.jsx)(eQ,{})]}),(0,t.jsx)(o.default.Input.Select,{style:eV,value:f,disabled:!0,children:(0,t.jsx)("option",{value:f,children:I})})]}),(0,t.jsxs)(eW,{children:[(0,t.jsxs)(eY,{children:["서비스코드",(0,t.jsx)(eQ,{})]}),(0,t.jsx)(o.default.Input.Text,{style:eV,value:S,readOnly:!0})]}),(0,t.jsxs)(eW,{children:[(0,t.jsxs)(eY,{children:["서비스유형",(0,t.jsx)(eQ,{})]}),(0,t.jsx)(o.default.Input.Select,{style:eV,value:f,disabled:!0,children:(0,t.jsx)("option",{value:f,children:T})})]})]})]})});function eQ(){return(0,t.jsx)(e1,{children:" *"})}let eZ=l.default.div.withConfig({componentId:"zh__sc-2ea09a12-0"})`
  display: flex;
  gap: 16px;
  align-items: center;
  height: 36px;
`,eJ=l.default.label.withConfig({componentId:"zh__sc-2ea09a12-1"})`
  cursor: pointer;

  display: inline-flex;
  gap: 8px;
  align-items: center;

  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  color: #000;
`,e0=(0,l.default)(o.default.Input.Radio).withConfig({componentId:"zh__sc-2ea09a12-2"})``,e1=l.default.span.withConfig({componentId:"zh__sc-2ea09a12-3"})`
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: normal;
  color: #e7000b;
`,e2=l.default.div.withConfig({componentId:"zh__sc-2ea09a12-4"})`
  position: absolute;
  top: calc(100% + 2px);
  left: 0;

  font-size: 12px;
  line-height: 16px;
  color: #ff4d4f;
`,e6={...eV,height:36,lineHeight:"36px"},e4=(0,l.default)(o.default.Input.Text).withConfig({componentId:"zh__sc-2ea09a12-5"})`
  &::placeholder {
    color: #0a0a0a;
  }
`;var e5=e.i(39635),e3=e.i(10957),e9=e.i(58362),e8=e.i(12945),e7=e.i(62150),te=e.i(41417),tt=e.i(97181),tn=e.i(17306),ti=e.i(38535),tl=e.i(5564),ta=e.i(79786);let td=[["1구간","8,293,000","면제","20,000","216,200","216,200","216,200","216,200"],["2구간","7,774,000","면제","20,000","216,200","216,200","216,200","216,200"],["3구간","7,257,000","면제","20,000","216,200","216,200","216,200","216,200"],["4구간","6,739,000","면제","20,000","216,200","216,200","216,200","216,200"],["5구간","6,221,000","면제","20,000","216,200","216,200","216,200","216,200"],["6구간","5,703,000","면제","20,000","216,200","216,200","216,200","216,200"],["7구간","5,181,000","면제","20,000","207,200","216,200","216,200","216,200"],["8구간","4,665,000","면제","20,000","186,600","216,200","216,200","216,200"],["9구간","4,148,000","면제","20,000","165,900","216,200","216,200","216,200"],["10구간","3,629,000","면제","20,000","145,100","216,200","216,200","216,200"],["11구간","3,112,000","면제","20,000","124,400","186,700","216,200","216,200"],["12구간","2,593,000","면제","20,000","103,700","155,500","207,400","216,200"],["13구간","2,076,000","면제","20,000","83,000","124,500","166,000","207,600"],["14구간","1,558,000","면제","20,000","62,300","93,400","124,600","155,800"],["15구간","1,040,000","면제","20,000","41,600","62,400","83,200","104,000"],["특례","7,257,000","면제","20,000","29,300","44,000","58,700","73,400"]],to={TYPE_A:2,TYPE_B:3,TYPE_C:4,TYPE_D:5,TYPE_E:6,TYPE_F:7},tr=["1인가구","취약가구","출산가구","자립준비","학교생활","직장생활","보호자 일시 부재","나머지 가구구성원의 직장생활 등"],ts=["MON","TUE","WED","THU","FRI","SAT","SUN"],tc=[["ministryDeterminedHours","보건복지부"],["metroDeterminedHours","광역지자체"],["basicDeterminedHours","기초지자체"],["otherDeterminedHours","기타"]],tf=new Set(tl.DISABILITY_ACTIVITY_SUPPORT_BASIC_GRADES),th="SPECIAL";function tp(e){return e in ta.default}let tu=(0,n.observer)(function(){let{clientDraft:e,ocrDraft:n,updateClientDraft:l,getClientDraftFieldError:d,clearClientDraftFieldError:r}=a.default.modal.clientCreate,[s,c]=(0,i.useState)(e?.serviceGrade?.startsWith("SPECIAL")===!0),[f,h]=(0,i.useState)(e?.serviceGrade?.startsWith("SPECIAL")===!0?e.serviceGrade.replace("SPECIAL",""):"");if(null===e)return null;let p=e.serviceGrade??e3.default.SELECT_EMPTY_VALUE,u=s||p.startsWith("SPECIAL"),x=p.startsWith("SPECIAL")?p.replace("SPECIAL",""):f,g=(e,t)=>void 0!==t&&e===t,m=u&&g(p,n?.serviceGrade),b=e.incomeCategory??e3.default.SELECT_EMPTY_VALUE,j=e.benefitDecisionPeriod??"",w=e.copaymentAmount??"",y=e.virtualAccountNumber??"",_=e.additionalBenefitTypes??[],v=e.workplace??"",C=e.schoolName??"",I=e.schoolStartTime??"",z=e.schoolEndTime??"",T=e.schoolDays??[],S=e.careCenterName??"",k=e.careCenterStartTime??"",E=e.careCenterEndTime??"",D=e.careCenterDays??[],A=e.primaryDisabilityName??"",O=e.primaryDisabilityGrade??"",$=e.primaryDisabilitySeverity??"",R=e.secondaryDisabilityName??"",L=e.secondaryDisabilityGrade??"",N=e.secondaryDisabilitySeverity??"",P=e.chronicDiseaseNames??"",F=e.medicationInfo??"",M=e.communicationStatusDetail??"",B=e.familyStatusDetail??"",U=a.default.data.serviceWorker.list,W=U.data??[],Y=e=>{l(t=>{let n={...t,...e},i=function(e,t){if(null===e||null===t)return null;let n=e.startsWith("SPECIAL")?"특례":`${e}구간`,i=td.find(e=>e[0]===n);if(void 0===i)return null;let l=i[to[t]];if(void 0===l)return null;let a="면제"===l?0:Number(l.replaceAll(",","")),d=Number(i[1].replaceAll(",",""));return Number.isNaN(a)||Number.isNaN(d)?null:{copaymentAmount:a,monthlyLimitAmount:d}}(n.serviceGrade??null,n.incomeCategory??null);return{...n,copaymentAmount:null===i?void 0:String(i.copaymentAmount)}})},V=(e,t)=>""===d(e)?t:{...t,borderColor:"#ff4d4f",background:"#fff5f5"},H=e=>{let n=d(e);return""===n?null:(0,t.jsx)(tj,{"data-client-create-field-error":"true",children:n})};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(eB,{children:"계좌∙자격 및 기타 정보"}),(0,t.jsxs)(eU,{children:[(0,t.jsxs)(eW,{children:[(0,t.jsxs)(eY,{children:["활동지원급여 구간 ",(0,t.jsx)(tb,{})]}),(0,t.jsxs)(tw,{$isEmptySelected:!u&&p===e3.default.SELECT_EMPTY_VALUE,$autoFilled:m||g(p,n?.serviceGrade),value:u?th:p,onChange:e=>{let t=e.target.value;if(r("serviceGrade"),t===th){c(!0),Y({serviceGrade:void 0});return}tf.has(t)&&(c(!1),h(""),Y({serviceGrade:t}))},style:V("serviceGrade",eV),children:[(0,t.jsx)("option",{value:e3.default.SELECT_EMPTY_VALUE,disabled:!0,children:"구간을 입력해주세요."}),tl.DISABILITY_ACTIVITY_SUPPORT_BASIC_GRADES.map(e=>(0,t.jsxs)("option",{value:e,children:[e,"구간"]},e)),(0,t.jsx)("option",{value:th,children:"특례"})]}),H("serviceGrade")]}),(0,t.jsxs)(eW,{children:[(0,t.jsxs)(eY,{children:["특례 구간 ",(0,t.jsx)(tb,{})]}),(0,t.jsx)(o.default.Input.Text,{$autoFilled:m,value:x,disabled:!u,onChange:e=>{let t=e.target.value;if(""!==t&&!/^([1-9]\d{0,2}|1000)$/.test(t))return;let n=function(e){if(/^([1-9]\d{0,2}|1000)$/.test(e))return`SPECIAL${e}`}(t);h(t),Y({serviceGrade:n})},placeholder:"숫자를 입력하세요.",inputMode:"numeric",maxLength:4,style:eV}),H("serviceGrade")]}),(0,t.jsxs)(eW,{$width:398,children:[(0,t.jsxs)(eY,{children:["소득 유형 ",(0,t.jsx)(tb,{})]}),(0,t.jsxs)(tw,{$isEmptySelected:b===e3.default.SELECT_EMPTY_VALUE,$autoFilled:g(b,n?.incomeCategory),value:b,onChange:e=>{let t=e.target.value;r("incomeCategory"),tp(t)&&Y({incomeCategory:t})},style:V("incomeCategory",eV),children:[(0,t.jsx)("option",{value:e3.default.SELECT_EMPTY_VALUE,disabled:!0,children:"유형을 선택해주세요."}),Object.keys(ta.default).filter(tp).map(e=>(0,t.jsx)("option",{value:e,children:ta.default[e].label},e))]}),H("incomeCategory")]})]}),(0,t.jsxs)(eU,{children:[(0,t.jsxs)(eW,{children:[(0,t.jsx)(eY,{children:"수급결정시기"}),(0,t.jsx)(o.default.Input.Date,{value:j,onChange:e=>{""===e?l(e=>({...e,benefitDecisionPeriod:void 0})):eF.default.is(e)&&l(t=>({...t,benefitDecisionPeriod:e}))},style:{...eV,width:"100%",height:36}})]}),(0,t.jsxs)(eW,{children:[(0,t.jsxs)(eY,{children:["본인부담금(원) ",(0,t.jsx)(tb,{})]}),(0,t.jsx)(o.default.Input.Money,{value:w,onChange:e=>{r("copaymentAmount"),l(t=>({...t,copaymentAmount:e}))},placeholder:"금액을 입력해주세요.",style:V("copaymentAmount",eV)}),H("copaymentAmount")]}),(0,t.jsxs)(eW,{$width:398,children:[(0,t.jsxs)(eY,{children:["가상계좌 ",(0,t.jsx)(tb,{})]}),(0,t.jsx)(o.default.Input.Text,{$autoFilled:g(y,n?.virtualAccountNumber),value:y,onChange:e=>{r("virtualAccountNumber"),l(t=>({...t,virtualAccountNumber:e.target.value}))},placeholder:"가상계좌를 입력해주세요.",inputMode:"numeric",style:V("virtualAccountNumber",eV)}),H("virtualAccountNumber")]})]}),(0,t.jsx)(eU,{children:(0,t.jsxs)(eW,{children:[(0,t.jsx)(eY,{children:"추가급여대상 여부"}),(0,t.jsx)(ty,{children:tr.map(e=>(0,t.jsxs)(tE,{children:[(0,t.jsx)(tA,{checked:_.includes(e),onChange:()=>{let t=_.includes(e)?_.filter(t=>t!==e):[..._,e];l(e=>({...e,additionalBenefitTypes:t}))}}),(0,t.jsx)(tD,{children:e})]},e))})]})}),(0,t.jsx)(eU,{children:(0,t.jsxs)(eW,{$width:193,children:[(0,t.jsx)(eY,{children:"연결할 제공인력"}),(0,t.jsxs)(tw,{$isEmptySelected:void 0===e.serviceWorkerId,value:e.serviceWorkerId??e3.default.SELECT_EMPTY_VALUE,disabled:a.default.modal.clientCreate.isServiceMatchingRegistration,onOpenChange:t=>{t&&(U.setQuery({serviceType:e.serviceType,regions:e.desiredRegions,times:e.desiredServiceTimes,status:"ACTIVE"}),U.refetch())},onChange:e=>{r("serviceWorkerId"),l(t=>({...t,serviceWorkerId:e.target.value===e3.default.SELECT_EMPTY_VALUE?void 0:e.target.value}))},style:V("serviceWorkerId",eV),children:[(0,t.jsx)("option",{value:e3.default.SELECT_EMPTY_VALUE,children:"loading"===U.status?"조회 중...":"선택안함"}),null!==a.default.modal.clientCreate.matchingServiceWorkerName&&W.every(t=>t.id!==e.serviceWorkerId)&&(0,t.jsx)("option",{value:e.serviceWorkerId,children:a.default.modal.clientCreate.matchingServiceWorkerName}),W.map(e=>(0,t.jsx)("option",{value:e.id,children:e.name},e.id))]}),H("serviceWorkerId")]})}),(0,t.jsx)(eB,{children:"직장 및 학교"}),(0,t.jsx)(eU,{children:(0,t.jsxs)(eW,{children:[(0,t.jsx)(eY,{children:"직장"}),(0,t.jsx)(o.default.Input.Text,{value:v,onChange:e=>{l(t=>({...t,workplace:e.target.value}))},placeholder:"직장명을 입력하세요.",style:eV})]})}),(0,t.jsxs)(eU,{children:[(0,t.jsxs)(eW,{$width:395,children:[(0,t.jsx)(eY,{children:"학교명"}),(0,t.jsx)(o.default.Input.Text,{value:C,onChange:e=>{l(t=>({...t,schoolName:e.target.value}))},placeholder:"학교명을 입력하세요.",style:eV})]}),(0,t.jsxs)(eW,{$width:190,children:[(0,t.jsx)(eY,{children:"시작 시간"}),(0,t.jsx)(o.default.Input.TimeHhmm,{value:I,onChange:e=>{r("schoolStartTime"),l(t=>({...t,schoolStartTime:e}))},style:V("schoolStartTime",eV),placeholder:"00:00"}),H("schoolStartTime")]}),(0,t.jsx)(t$,{children:"~"}),(0,t.jsxs)(eW,{$width:190,children:[(0,t.jsx)(eY,{children:"종료 시간"}),(0,t.jsx)(o.default.Input.TimeHhmm,{value:z,onChange:e=>{r("schoolEndTime"),l(t=>({...t,schoolEndTime:e}))},style:V("schoolEndTime",eV),placeholder:"00:00"}),H("schoolEndTime")]})]}),(0,t.jsx)(tg,{label:"등교 요일",selectedDays:T,onChange:e=>l(t=>({...t,schoolDays:e}))}),(0,t.jsx)(eB,{children:"주단기보호센터"}),(0,t.jsxs)(eU,{children:[(0,t.jsxs)(eW,{$width:395,children:[(0,t.jsx)(eY,{children:"주단기보호센터명"}),(0,t.jsx)(o.default.Input.Text,{value:S,onChange:e=>{l(t=>({...t,careCenterName:e.target.value}))},placeholder:"센터명을 입력하세요.",style:eV})]}),(0,t.jsx)(tx,{label:"시작 시간",value:k,errorMessage:d("careCenterStartTime"),onChange:e=>{r("careCenterStartTime"),l(t=>({...t,careCenterStartTime:e}))}}),(0,t.jsx)(t$,{children:"~"}),(0,t.jsx)(tx,{label:"종료 시간",value:E,errorMessage:d("careCenterEndTime"),onChange:e=>{r("careCenterEndTime"),l(t=>({...t,careCenterEndTime:e}))}})]}),(0,t.jsx)(tg,{label:"등원 요일",selectedDays:D,onChange:e=>l(t=>({...t,careCenterDays:e}))}),(0,t.jsx)(eB,{children:"판정시간"}),(0,t.jsx)(eU,{children:tc.map(([n,i])=>(0,t.jsxs)(eW,{children:[(0,t.jsx)(eY,{children:i}),(0,t.jsxs)(tC,{children:[(0,t.jsx)(o.default.Input.Text,{value:e[n]??"",onChange:e=>{let t=e.target.value;l(e=>({...e,[n]:""===t?void 0:Number(t)}))},placeholder:"00",inputMode:"numeric",style:{...eV,width:140,textAlign:"center"}}),(0,t.jsx)(tI,{children:"시간"})]})]},n))}),(0,t.jsxs)(eU,{children:[(0,t.jsxs)(eW,{children:[(0,t.jsxs)(eY,{children:["주장애명 ",(0,t.jsx)(tb,{})]}),(0,t.jsx)(o.default.Input.Text,{value:A,onChange:e=>{r("primaryDisabilityName"),l(t=>({...t,primaryDisabilityName:e.target.value}))},placeholder:"주장애명을 입력해주세요.",style:V("primaryDisabilityName",eV)}),H("primaryDisabilityName")]}),(0,t.jsxs)(eW,{children:[(0,t.jsx)(eY,{children:"장애급수"}),(0,t.jsx)(o.default.Input.Text,{value:O,onChange:e=>l(t=>({...t,primaryDisabilityGrade:e.target.value})),placeholder:"장애급수를 입력해주세요.",style:eV})]}),(0,t.jsxs)(eW,{children:[(0,t.jsx)(eY,{children:"주장애 장애정도"}),(0,t.jsx)(o.default.Input.Text,{value:$,onChange:e=>l(t=>({...t,primaryDisabilitySeverity:e.target.value})),placeholder:"주장애 장애정도를 입력해주세요.",style:eV})]})]}),(0,t.jsxs)(eU,{children:[(0,t.jsxs)(eW,{children:[(0,t.jsx)(eY,{children:"부장애명"}),(0,t.jsx)(o.default.Input.Text,{value:R,onChange:e=>l(t=>({...t,secondaryDisabilityName:e.target.value})),placeholder:"부장애명을 입력해주세요.",style:eV})]}),(0,t.jsxs)(eW,{children:[(0,t.jsx)(eY,{children:"장애급수"}),(0,t.jsx)(o.default.Input.Text,{value:L,onChange:e=>l(t=>({...t,secondaryDisabilityGrade:e.target.value})),placeholder:"장애급수를 입력해주세요.",style:eV})]}),(0,t.jsxs)(eW,{children:[(0,t.jsx)(eY,{children:"부장애 장애정도"}),(0,t.jsx)(o.default.Input.Text,{value:N,onChange:e=>l(t=>({...t,secondaryDisabilitySeverity:e.target.value})),placeholder:"부장애 장애정도를 입력해주세요.",style:eV})]})]}),(0,t.jsxs)(eU,{children:[(0,t.jsxs)(eW,{children:[(0,t.jsx)(eY,{children:"보유질환명"}),(0,t.jsx)(o.default.Input.Text,{value:P,onChange:e=>l(t=>({...t,chronicDiseaseNames:e.target.value})),placeholder:"보유질환에 대해 입력해주세요.",style:eV})]}),(0,t.jsxs)(eW,{children:[(0,t.jsx)(eY,{children:"투약정보"}),(0,t.jsx)(o.default.Input.Text,{value:F,onChange:e=>l(t=>({...t,medicationInfo:e.target.value})),placeholder:"투약정보에 대해 입력해주세요.",style:eV})]})]}),(0,t.jsxs)(eU,{children:[(0,t.jsx)(tm,{label:"외상장애 여부",name:"hasTraumaDisability",width:158,options:[["NOT_APPLICABLE","미해당"],["APPLICABLE","해당"]],value:!0===e.hasTraumaDisability?"APPLICABLE":"NOT_APPLICABLE",onChange:e=>l(t=>({...t,hasTraumaDisability:"APPLICABLE"===e}))}),(0,t.jsx)(tm,{label:"의사소통",name:"communicationStatus",width:443,required:!0,options:[[tt.default.POSSIBLE,"가능"],[tt.default.IMPOSSIBLE,"불가능"],[tt.default.OTHER,"기타"]],value:e.communicationStatus??tt.default.POSSIBLE,onChange:e=>l(t=>({...t,communicationStatus:e})),otherValue:M,onOtherChange:e=>l(t=>({...t,communicationStatusDetail:e}))}),(0,t.jsx)(tm,{label:"휠체어 유무",name:"hasWheelchair",width:116,required:!0,options:[["AVAILABLE","유"],["UNAVAILABLE","무"]],value:!1===e.hasWheelchair?"UNAVAILABLE":"AVAILABLE",onChange:e=>l(t=>({...t,hasWheelchair:"AVAILABLE"===e}))})]}),(0,t.jsxs)(eU,{children:[(0,t.jsx)(tm,{label:"결혼여부",name:"isMarried",options:[["SINGLE","미혼"],["MARRIED","기혼"]],width:144,value:!0===e.isMarried?"MARRIED":"SINGLE",onChange:e=>l(t=>({...t,isMarried:"MARRIED"===e}))}),(0,t.jsx)(tm,{label:"가족사항",name:"familyStatus",options:[[ti.default.ALONE,"독거"],[ti.default.COUPLE,"부부"],[ti.default.SINGLE_PARENT,"한부모"],[ti.default.OTHER,"기타"]],width:530,value:e.familyStatus??ti.default.ALONE,onChange:e=>l(t=>({...t,familyStatus:e})),otherValue:B,onOtherChange:e=>l(t=>({...t,familyStatusDetail:e}))})]})]})});function tx({label:e,value:n,errorMessage:i,onChange:l}){return(0,t.jsxs)(eW,{children:[(0,t.jsx)(eY,{children:e}),(0,t.jsx)(o.default.Input.TimeHhmm,{value:n,onChange:l,placeholder:"00:00",style:""===i?eV:{...eV,borderColor:"#ff4d4f",background:"#fff5f5"}}),""!==i?(0,t.jsx)(tj,{"data-client-create-field-error":"true",children:i}):null]})}function tg({label:e,selectedDays:n,onChange:i}){return(0,t.jsxs)(eW,{children:[(0,t.jsx)(eY,{children:e}),(0,t.jsx)(t_,{children:ts.map(e=>(0,t.jsxs)(tv,{children:[(0,t.jsx)(tA,{checked:n.includes(e),onChange:()=>i(n.includes(e)?n.filter(t=>t!==e):[...n,e])}),(0,t.jsx)(tD,{children:tn.default[e].label})]},e))})]})}function tm({label:e,name:n,width:i,options:l,value:a,onChange:d,required:r=!1,otherValue:s,onOtherChange:c}){return(0,t.jsxs)(tz,{$width:i,children:[(0,t.jsxs)(eY,{children:[e," ",r&&(0,t.jsx)(tb,{})]}),(0,t.jsx)(tT,{children:l.map(([e,i])=>(0,t.jsxs)(tS,{children:[(0,t.jsx)(tk,{type:"radio",name:n,value:e,checked:a===e,onChange:()=>d(e)}),(0,t.jsx)(tD,{children:i}),"OTHER"===e&&c&&(0,t.jsx)(o.default.Input.Text,{value:s??"",onChange:e=>c(e.target.value),placeholder:"관련 내용을 입력해주세요.",style:{...eV,width:193}})]},e))})]})}function tb(){return(0,t.jsx)(tO,{children:" *"})}let tj=l.default.div.withConfig({componentId:"zh__sc-d7ceea08-0"})`
  margin-top: 4px;
  font-size: 12px;
  color: #e7000b;
`,tw=(0,l.default)(o.default.Input.Select).withConfig({componentId:"zh__sc-d7ceea08-1"})`
  color: ${({$autoFilled:e,$isEmptySelected:t})=>!0===e?"#4f39f6":t?"#9ca3af":"#0a0a0a"};
  background: ${({$autoFilled:e})=>!0===e?"#f4f2ff":"#fff"};
`,ty=l.default.div.withConfig({componentId:"zh__sc-d7ceea08-2"})`
  display: flex;
  flex-wrap: wrap;
  gap: 0 24px;
  align-items: center;
`,t_=l.default.div.withConfig({componentId:"zh__sc-d7ceea08-3"})`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 24px;
  align-items: center;

  padding: 4px 0;
`,tv=l.default.label.withConfig({componentId:"zh__sc-d7ceea08-4"})`
  display: inline-flex;
  gap: 8px;
  align-items: center;
  height: 36px;
`,tC=l.default.div.withConfig({componentId:"zh__sc-d7ceea08-5"})`
  display: flex;
  gap: 10px;
  align-items: center;
  width: 100%;
`,tI=l.default.span.withConfig({componentId:"zh__sc-d7ceea08-6"})`
  flex-shrink: 0;
  font-size: 16px;
  color: #000;
`,tz=l.default.div.withConfig({componentId:"zh__sc-d7ceea08-7"})`
  display: flex;
  flex: ${({$width:e})=>void 0===e?1:"none"};
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;

  width: ${({$width:e})=>void 0===e?"auto":`${e}px`};
  min-width: 0;
`,tT=l.default.div.withConfig({componentId:"zh__sc-d7ceea08-8"})`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 24px;
  align-items: center;

  min-height: 36px;
`,tS=l.default.label.withConfig({componentId:"zh__sc-d7ceea08-9"})`
  display: inline-flex;
  gap: 8px;
  align-items: center;
  min-height: 36px;
`,tk=l.default.input.withConfig({componentId:"zh__sc-d7ceea08-10"})`
  flex-shrink: 0;

  width: 24px;
  height: 24px;
  margin: 0;

  accent-color: #256ef4;
`,tE=l.default.label.withConfig({componentId:"zh__sc-d7ceea08-11"})`
  display: inline-flex;
  gap: 8px;
  align-items: center;
  height: 36px;
`,tD=l.default.span.withConfig({componentId:"zh__sc-d7ceea08-12"})`
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  color: #000;
`,tA=(0,l.default)(o.default.Input.Check).attrs({$iconSizeRatio:1.5}).withConfig({componentId:"zh__sc-d7ceea08-13"})`
  width: 24px;
  height: 24px;
`,tO=l.default.span.withConfig({componentId:"zh__sc-d7ceea08-14"})`
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: normal;
  color: #e7000b;
`,t$=l.default.span.withConfig({componentId:"zh__sc-d7ceea08-15"})`
  align-self: flex-start;
  padding-top: 28px;
  font-size: 16px;
  color: #000;
`,tR=Object.keys(e7.default).filter(function(e){return e in e7.default}),tL=["PHYSICAL_ACTIVITY_SUPPORT","HOUSEKEEPING_SUPPORT","SOCIAL_ACTIVITY_SUPPORT","OTHER"],tN=["MALE","FEMALE"],tP=["TWENTIES_OR_YONGER","THIRTIES","FORTIES","FIFTIES","SIXTIES","SEVENTIES_OR_OLDER"],tF=(0,n.observer)(function(){let{clientDraft:e,updateClientDraft:n,getClientDraftFieldError:i,clearClientDraftFieldError:l}=a.default.modal.clientCreate;if(null===e)return null;let d=e.desiredServiceHours,r=e.desiredRegions??[],s=e.desiredCareTypes??[],c=e.desiredServiceWorkerGender,f=e.desiredAgeRanges??[],h="DISABILITY_ACTIVITY_SUPPORT"===e.serviceType,p=tR.every(e=>r.includes(e)),u=tL.every(e=>s.some(t=>t.careType===e)),x=tP.every(e=>f.includes(e));return(0,t.jsxs)(tB,{children:[(0,t.jsxs)(tW,{children:[(0,t.jsxs)(tY,{children:["서비스 희망 시간",h&&(0,t.jsx)(tM,{})]}),(0,t.jsxs)(tH,{children:[(0,t.jsx)(e5.default,{sx:{fontSize:20}}),(0,t.jsx)(tG,{children:"시간대를 추가하고, 추가한 시간대를 클릭하면 수정하거나 삭제할 수 있습니다."})]})]}),(0,t.jsx)(tK,{value:e.desiredServiceTimes,onChange:e=>{l("desiredServiceTimes"),n(t=>({...t,desiredServiceTimes:e.target.value}))}}),""!==i("desiredServiceTimes")&&(0,t.jsx)(t0,{"data-client-create-field-error":"true",children:i("desiredServiceTimes")}),(0,t.jsxs)(tX,{children:[(0,t.jsx)(tq,{children:"희망 서비스 시간"}),(0,t.jsxs)(tQ,{children:[(0,t.jsx)(tJ,{children:"총"}),(0,t.jsx)(tZ,{value:void 0===d?"":String(d),placeholder:"00",maxLength:2,onChange:e=>{let t=e.target.value.replace(/\D/g,"");n(e=>({...e,desiredServiceHours:""===t?void 0:Math.min(Number(t),99)}))}}),(0,t.jsx)(tJ,{children:"시간"})]})]}),(0,t.jsxs)(t1,{children:[(0,t.jsxs)(t2,{children:["서비스 희망 지역 (복수 선택 가능)",h&&(0,t.jsx)(tM,{})]}),(0,t.jsxs)(t6,{children:[(0,t.jsxs)(t5,{children:[(0,t.jsx)(nn,{checked:p,onChange:()=>{l("desiredRegions"),n(e=>({...e,desiredRegions:p?[]:tR}))}}),(0,t.jsx)(t8,{children:"전체 선택"})]},e3.default.CHECK_ALL_VALUE),tR.map(e=>(0,t.jsxs)(t5,{children:[(0,t.jsx)(nn,{checked:r.includes(e),onChange:()=>{l("desiredRegions"),n(t=>({...t,desiredRegions:r.includes(e)?r.filter(t=>t!==e):[...r,e]}))}}),(0,t.jsx)(t8,{children:e7.default[e].label})]},e))]}),""!==i("desiredRegions")&&(0,t.jsx)(t0,{"data-client-create-field-error":"true",children:i("desiredRegions")})]}),h&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(t1,{children:[(0,t.jsxs)(t2,{children:["희망 활동 내용 (복수 선택 가능)",(0,t.jsx)(tM,{})]}),(0,t.jsxs)(t4,{children:[(0,t.jsxs)(t5,{children:[(0,t.jsx)(nn,{checked:u,onChange:()=>{l("desiredCareTypes"),n(e=>({...e,desiredCareTypes:u?[]:tL.map(e=>s.find(t=>t.careType===e)??{careType:e})}))}}),(0,t.jsx)(t8,{children:"전체 선택"})]}),tL.map(e=>{let i=s.find(t=>t.careType===e);return(0,t.jsxs)(t3,{children:[(0,t.jsxs)(t5,{children:[(0,t.jsx)(nn,{checked:void 0!==i,onChange:()=>{l("desiredCareTypes"),n(t=>({...t,desiredCareTypes:s.some(t=>t.careType===e)?s.filter(t=>t.careType!==e):[...s,{careType:e}]}))}}),(0,t.jsx)(t8,{children:"PHYSICAL_ACTIVITY_SUPPORT"===e?"신체 활동":te.default[e].label.replace("활동"," 활동")})]}),(0,t.jsx)(t9,{style:eV,disabled:void 0===i,value:i?.detail??"",onChange:t=>{n(n=>({...n,desiredCareTypes:(n.desiredCareTypes??[]).map(n=>n.careType===e?{...n,detail:t.target.value}:n)}))},placeholder:"관련 내용을 입력해주세요."})]},e)})]}),""!==i("desiredCareTypes")&&(0,t.jsx)(t0,{"data-client-create-field-error":"true",children:i("desiredCareTypes")})]}),(0,t.jsxs)(t1,{children:[(0,t.jsxs)(t2,{children:["제공인력 희망 성별",(0,t.jsx)(tM,{})]}),(0,t.jsxs)(t6,{children:[(0,t.jsxs)(t5,{children:[(0,t.jsx)(o.default.Input.Radio,{name:"desired-service-worker-gender",checked:null===c,onChange:()=>{n(e=>({...e,desiredServiceWorkerGender:null}))}}),(0,t.jsx)(t8,{children:"전체 선택"})]}),tN.map(e=>(0,t.jsxs)(t5,{children:[(0,t.jsx)(o.default.Input.Radio,{name:"desired-service-worker-gender",checked:c===e,onChange:()=>{n(t=>({...t,desiredServiceWorkerGender:e}))}}),(0,t.jsx)(t8,{children:e8.default[e].label})]},e))]}),""!==i("desiredServiceWorkerGender")&&(0,t.jsx)(t0,{"data-client-create-field-error":"true",children:i("desiredServiceWorkerGender")})]}),(0,t.jsxs)(t1,{children:[(0,t.jsxs)(t2,{children:["제공인력 희망 연령 (복수 선택 가능)",(0,t.jsx)(tM,{})]}),(0,t.jsxs)(t6,{children:[(0,t.jsxs)(t5,{children:[(0,t.jsx)(nn,{checked:x,onChange:()=>{n(e=>({...e,desiredAgeRanges:x?[]:tP}))}}),(0,t.jsx)(t8,{children:"전체 선택"})]}),tP.map(e=>(0,t.jsxs)(t5,{children:[(0,t.jsx)(nn,{checked:f.includes(e),onChange:()=>{l("desiredAgeRanges"),n(t=>({...t,desiredAgeRanges:f.includes(e)?f.filter(t=>t!==e):[...f,e]}))}}),(0,t.jsx)(t8,{children:"TWENTIES_OR_YONGER"===e||"SEVENTIES_OR_OLDER"===e?e9.default[e].label.replace(" 이하","").replace(" 이상",""):e9.default[e].label})]},e))]}),""!==i("desiredAgeRanges")&&(0,t.jsx)(t0,{"data-client-create-field-error":"true",children:i("desiredAgeRanges")})]}),h&&a.default.modal.clientCreate.isContractInputMode&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(tU,{}),(0,t.jsx)(tu,{})]}),(0,t.jsxs)(t1,{children:[(0,t.jsx)(t2,{children:"(타기관) 이용경험"}),(0,t.jsx)(t7,{value:e.usageExperience??"",onChange:e=>{n(t=>({...t,usageExperience:e.target.value}))},placeholder:"텍스트를 입력해주세요."})]}),(0,t.jsxs)(t1,{children:[(0,t.jsx)(t2,{children:"특이사항 (장애특성 및 일상생활)"}),(0,t.jsx)(ne,{value:e.dailyLivingNotes??"",onChange:e=>{n(t=>({...t,dailyLivingNotes:e.target.value}))},placeholder:"특이사항을 입력해주세요."})]}),(0,t.jsxs)(t1,{children:[(0,t.jsx)(t2,{children:"종합소견"}),(0,t.jsx)(nt,{value:e.comprehensiveOpinion??"",onChange:e=>{n(t=>({...t,comprehensiveOpinion:e.target.value}))},placeholder:"종합소견을 입력해주세요."})]})]})]})});function tM(){return(0,t.jsx)(tV,{children:" *"})}let tB=l.default.div.withConfig({componentId:"zh__sc-51651a13-0"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  align-self: stretch;
`,tU=l.default.div.withConfig({componentId:"zh__sc-51651a13-1"})`
  flex-shrink: 0;
  width: 100%;
  height: 1px;
  background: #e5e7eb;
`,tW=l.default.div.withConfig({componentId:"zh__sc-51651a13-2"})`
  display: flex;
  gap: 16px;
  align-items: center;
  align-self: stretch;

  height: 30px;
`,tY=l.default.div.withConfig({componentId:"zh__sc-51651a13-3"})`
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
  text-align: center;
`,tV=l.default.span.withConfig({componentId:"zh__sc-51651a13-4"})`
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: normal;
  color: #e7000b;
`,tH=l.default.div.withConfig({componentId:"zh__sc-51651a13-5"})`
  display: flex;
  flex: 1 0 0;
  gap: 4px;
  align-items: center;

  color: #464c53;
`,tG=l.default.div.withConfig({componentId:"zh__sc-51651a13-6"})`
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px;
`,tK=(0,l.default)(o.default.Input.TimeSlider).withConfig({componentId:"zh__sc-51651a13-7"})`
  align-self: stretch;
`,tX=l.default.div.withConfig({componentId:"zh__sc-51651a13-8"})`
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
  align-self: stretch;
`,tq=l.default.div.withConfig({componentId:"zh__sc-51651a13-9"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #000;
  text-align: center;
`,tQ=l.default.div.withConfig({componentId:"zh__sc-51651a13-10"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,tZ=(0,l.default)(o.default.Input.Text).withConfig({componentId:"zh__sc-51651a13-11"})`
  width: 59px;
  height: 36px;
  text-align: center;
`,tJ=l.default.div.withConfig({componentId:"zh__sc-51651a13-12"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #000;
  text-align: center;
`,t0=l.default.div.withConfig({componentId:"zh__sc-51651a13-13"})`
  font-size: 12px;
  line-height: 16px;
  color: #ff4d4f;
`,t1=l.default.div.withConfig({componentId:"zh__sc-51651a13-14"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
  align-self: stretch;
`,t2=l.default.div.withConfig({componentId:"zh__sc-51651a13-15"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #000;
  text-align: center;
`,t6=l.default.div.withConfig({componentId:"zh__sc-51651a13-16"})`
  display: flex;
  flex-wrap: wrap;
  gap: 0 24px;
  align-items: center;
`,t4=(0,l.default)(t6).withConfig({componentId:"zh__sc-51651a13-17"})`
  row-gap: 8px;
`,t5=l.default.label.withConfig({componentId:"zh__sc-51651a13-18"})`
  display: inline-flex;
  gap: 8px;
  align-items: center;
  height: 36px;
`,t3=l.default.div.withConfig({componentId:"zh__sc-51651a13-19"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,t9=(0,l.default)(o.default.Input.Text).withConfig({componentId:"zh__sc-51651a13-20"})`
  width: 220px;
`,t8=l.default.span.withConfig({componentId:"zh__sc-51651a13-21"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #000;
  text-align: center;
`,t7=(0,l.default)(o.default.Input.Textarea).withConfig({componentId:"zh__sc-51651a13-22"})`
  resize: vertical;

  width: 100%;
  min-height: 100px;
  padding: 12px 16px;

  font-size: 16px;
`,ne=(0,l.default)(o.default.Input.Text).withConfig({componentId:"zh__sc-51651a13-23"})`
  width: 100%;
  padding: 4px 16px;
  font-size: 16px;
`,nt=(0,l.default)(o.default.Input.Textarea).withConfig({componentId:"zh__sc-51651a13-24"})`
  resize: vertical;

  width: 100%;
  min-height: 156px;
  padding: 12px 16px;

  font-size: 16px;
`,nn=(0,l.default)(o.default.Input.Check).attrs({$iconSizeRatio:1.5}).withConfig({componentId:"zh__sc-51651a13-25"})`
  width: 24px;
  height: 24px;
`,ni=(0,n.observer)(function(){let{clientDraft:e,ocrDraft:n,updateClientDraft:i,getClientDraftFieldError:l,clearClientDraftFieldError:d}=a.default.modal.clientCreate;if(null===e||"DISABILITY_ACTIVITY_SUPPORT"===e.serviceType||!a.default.modal.clientCreate.isContractInputMode)return null;let o=e.serviceGrade??e3.default.SELECT_EMPTY_VALUE,r=l("serviceGrade"),s=""===r?eV:{...eV,borderColor:"#ff4d4f",background:"#fff5f5"};return(0,t.jsxs)(eW,{$width:181,children:[(0,t.jsxs)(eY,{children:["바우처 등급",(0,t.jsx)(nl,{})]}),(0,t.jsxs)(nd,{$isEmptySelected:o===e3.default.SELECT_EMPTY_VALUE,$autoFilled:o===(n?.serviceGrade??""),style:s,value:o,onChange:e=>{d("serviceGrade");let t=e.target.value;if(t===e3.default.SELECT_EMPTY_VALUE)return void i(e=>({...e,serviceGrade:void 0}));switch(t){case"1":case"2":case"3":case"4":i(e=>({...e,serviceGrade:t}));return;default:return}},children:[(0,t.jsx)("option",{value:e3.default.SELECT_EMPTY_VALUE,disabled:!0,children:"등급을 선택해주세요."}),(0,t.jsx)("option",{value:"1",children:"1등급"}),(0,t.jsx)("option",{value:"2",children:"2등급"}),(0,t.jsx)("option",{value:"3",children:"3등급"}),(0,t.jsx)("option",{value:"4",children:"4등급"})]}),""!==r&&(0,t.jsx)(no,{"data-client-create-field-error":"true",children:r})]})});function nl(){return(0,t.jsx)(na,{children:" *"})}let na=l.default.span.withConfig({componentId:"zh__sc-238b45fe-0"})`
  font-size: 16px;
  font-weight: 400;
  color: #e7000b;
`,nd=(0,l.default)(o.default.Input.Select).withConfig({componentId:"zh__sc-238b45fe-1"})`
  color: ${({$autoFilled:e,$isEmptySelected:t})=>!0===e?"#4f39f6":t?"#9ca3af":"#0a0a0a"};
  background: ${({$autoFilled:e})=>!0===e?"#f4f2ff":"#fff"};
`,no=l.default.div.withConfig({componentId:"zh__sc-238b45fe-2"})`
  margin-top: 4px;
  font-size: 12px;
  color: #e7000b;
`,nr=(0,n.observer)(function(){let{clientDraft:e,isServiceMatchingRegistration:n,matchingServiceWorkerName:i,updateClientDraft:l}=a.default.modal.clientCreate,d=a.default.data.serviceWorker.list,o=e?.contractStartDate??"",r=d.data??[];return e?.serviceType==="DISABILITY_ACTIVITY_SUPPORT"?null:(0,t.jsxs)(ns,{children:[(0,t.jsx)(nc,{children:"연결할 제공인력"}),(0,t.jsxs)(nh,{$isEmptySelected:e?.serviceWorkerId===void 0,style:nf,value:e?.serviceWorkerId??e3.default.SELECT_EMPTY_VALUE,disabled:n||""===o,onOpenChange:t=>{t&&null!==e&&(d.setQuery({serviceType:e.serviceType,regions:e.desiredRegions,times:e.desiredServiceTimes,status:"ACTIVE"}),d.refetch())},onChange:e=>{l(t=>({...t,serviceWorkerId:e.target.value===e3.default.SELECT_EMPTY_VALUE?void 0:e.target.value}))},children:[(0,t.jsx)("option",{value:e3.default.SELECT_EMPTY_VALUE,children:"loading"===d.status?"조회 중...":"선택안함"}),null!==i&&r.every(t=>t.id!==e?.serviceWorkerId)&&(0,t.jsx)("option",{value:e?.serviceWorkerId,children:i}),r.map(e=>(0,t.jsx)("option",{value:e.id,children:e.name},e.id))]})]})}),ns=l.default.div.withConfig({componentId:"zh__sc-fe78af34-0"})`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
  align-self: stretch;

  width: 181px;
  min-height: 59px;
`,nc=l.default.div.withConfig({componentId:"zh__sc-fe78af34-1"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #000;
`,nf={display:"flex",padding:"4px 16px",alignItems:"center",gap:"10px",flex:"0 0 auto",fontSize:16,width:200,height:36},nh=(0,l.default)(o.default.Input.Select).withConfig({componentId:"zh__sc-fe78af34-2"})`
  min-height: 36px;
  color: ${({$isEmptySelected:e})=>e?"#9ca3af":"#0a0a0a"};

  &&:disabled {
    color: ${({$isEmptySelected:e})=>e?"#9ca3af":"#0a0a0a"};
  }
`,np=(0,n.observer)(function(){let e=a.default.modal.clientCreate.clientDraft,n=e?.serviceType==="DISABILITY_ACTIVITY_SUPPORT",i=a.default.modal.clientCreate.isContractInputMode;return(0,t.jsxs)(nu,{children:[(0,t.jsx)(nx,{children:"이용자 기본 정보"}),(0,t.jsx)(eq,{}),(0,t.jsx)(ng,{}),(0,t.jsx)(tF,{}),!n&&i&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(ng,{}),(0,t.jsxs)(nm,{children:[(0,t.jsx)(ni,{}),(0,t.jsx)(nr,{})]})]})]})}),nu=l.default.div.withConfig({componentId:"zh__sc-52495c18-0"})`
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: flex-start;

  width: 856px;
  min-height: 0;
  padding: 32px 24px;

  background: #fff;
  box-shadow: -8px 0 8px 0 rgb(0 0 0 / 8%);
`,nx=l.default.div.withConfig({componentId:"zh__sc-52495c18-1"})`
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
  text-align: center;
`,ng=l.default.div.withConfig({componentId:"zh__sc-52495c18-2"})`
  flex-shrink: 0;
  width: 100%;
  height: 1px;
  background: #e5e7eb;
`,nm=l.default.div.withConfig({componentId:"zh__sc-52495c18-3"})`
  display: flex;
  gap: 16px;
  align-items: flex-start;
  width: 100%;
`,nb=(0,n.observer)(function(){let{clientDraft:e}=a.default.modal.clientCreate;return(0,t.jsxs)(nj,{children:[(0,t.jsx)(eN,{}),e&&(0,t.jsx)(np,{})]})}),nj=l.default.div.withConfig({componentId:"zh__sc-cfc6108c-0"})`
  overflow: hidden;
  display: flex;
  flex: 1 1 auto;
  align-self: stretch;
  justify-content: center;

  min-height: 0;
  max-height: none;

  background: #f9fafb;
`;function nw(){let{close:e,mode:n}=a.default.modal.clientCreate;return(0,t.jsxs)(ny,{children:[(0,t.jsx)(n_,{children:"renew"===n?"재계약 이용자 등록하기":"신규 이용자 등록하기"}),(0,t.jsxs)(nv,{onClick:e,children:[(0,t.jsx)(M.X,{size:16}),"닫기"]})]})}let ny=l.default.div.withConfig({componentId:"zh__sc-f50634fa-0"})`
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
`,n_=l.default.div.withConfig({componentId:"zh__sc-f50634fa-1"})`
  font-size: 18px;
  font-weight: 700;
  font-style: normal;
  line-height: 28px; /* 155.556% */
  color: #101828;
  letter-spacing: -0.439px;
`,nv=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-f50634fa-2"})`
  display: flex;
  gap: 6px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,nC=(0,n.observer)(function(){let e=a.default.modal.clientCreate,{status:n}=e,l=(0,i.useRef)(null);return((0,i.useEffect)(()=>"ready"!==n?void e.setToastContainer(null):(e.setToastContainer(l.current),()=>{e.setToastContainer(null)}),[e,n]),"ready"!==n)?null:(0,t.jsx)(d.default,{children:(0,t.jsxs)(nI,{ref:l,children:[(0,t.jsx)(nw,{}),(0,t.jsx)(nb,{}),(0,t.jsx)(j,{}),(0,t.jsx)(s,{currentServiceType:e.selectedServiceType,detectedServiceType:e.pendingDetectedServiceType??e.selectedServiceType,isContinueDisabled:!e.isPendingDetectedServiceAvailable,isOpen:e.isServiceTypeMismatchDialogOpen,onCancel:e.cancelServiceTypeMismatchRegistration,onContinue:e.confirmServiceTypeMismatchRegistration,registrationTarget:"이용자"}),(0,t.jsx)(C,{})]})})}),nI=l.default.div.withConfig({componentId:"zh__sc-21fa7296-0"})`
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
`;var nz=e.i(62897),nT=e.i(44968);function nS(e){if(!eF.default.is(e))return"-";let[t,n,i]=e.split("-");return`${t}년 ${Number(n)}월 ${Number(i)}일`}function nk(e){if(!eF.default.is(e))return"-";let[t,n,i]=e.split("-");return`${t}.${n}.${i}`}var nE=e.i(38797);let nD=(0,nE.default)((0,t.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"}),"AddOutlined"),nA=(0,nE.default)((0,t.jsx)("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"CheckOutlined");var nO=e.i(17510);let n$=(0,nE.default)((0,t.jsx)("path",{d:"m15 5-1.41 1.41L18.17 11H2v2h16.17l-4.59 4.59L15 19l7-7z"}),"EastOutlined");var nR=e.i(84527),nL=e.i(74483),nN=e.i(82130);let nP=l.default.div.withConfig({componentId:"zh__sc-422803e4-0"})`
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
`,nF=l.default.div.withConfig({componentId:"zh__sc-422803e4-1"})`
  padding: 16px;
  border: 1px dashed #d1d5db;
  border-radius: 10px;

  font-size: 14px;
  color: #6b7280;
`,nM=l.default.div.withConfig({componentId:"zh__sc-422803e4-2"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;

  width: 100%;
`,nB=l.default.div.withConfig({componentId:"zh__sc-422803e4-3"})`
  display: flex;
  align-items: center;
  align-self: stretch;
  min-height: 40px;
`,nU=l.default.div.withConfig({componentId:"zh__sc-422803e4-4"})`
  display: flex;
  flex: 1 0 0;
  align-items: center;
  justify-content: space-between;

  min-width: 0;
  min-height: 40px;
`,nW=l.default.h3.withConfig({componentId:"zh__sc-422803e4-5"})`
  margin: 0;

  font-size: 18px;
  font-weight: 700;
  line-height: 20px;
  color: #101828;
`,nY=l.default.div.withConfig({componentId:"zh__sc-422803e4-6"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,nV=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-422803e4-7"})`
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
`;let nH=l.default.span.withConfig({componentId:"zh__sc-422803e4-9"})`
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
`,nG=(0,l.default)(o.default.Input.Text).withConfig({componentId:"zh__sc-422803e4-10"})`
  width: 100%;
  height: 28px;
  padding: 0 16px;

  font-size: 16px;
  line-height: 16px;
`,nK=(0,l.default)(o.default.Input.Phone).withConfig({componentId:"zh__sc-422803e4-11"})`
  width: 100%;
  height: 28px;
  padding: 0 16px;

  font-size: 16px;
  line-height: 16px;
`,nX=(0,l.default)(o.default.Input.Contact).withConfig({componentId:"zh__sc-422803e4-12"})`
  width: 100%;
  height: 28px;
  padding: 0 16px;

  font-size: 16px;
  line-height: 16px;
`,nq=(0,l.default)(o.default.Input.PostCode).withConfig({componentId:"zh__sc-422803e4-13"})`
  width: 100%;
  height: 28px;
  padding: 0 16px;

  font-size: 16px;
  line-height: 16px;
`,nQ=(0,l.default)(o.default.Input.ResidentRegistrationNumber).withConfig({componentId:"zh__sc-422803e4-14"})`
  width: 100%;
  height: 28px;
  padding: 0 16px;

  font-size: 16px;
  line-height: 16px;
`;(0,l.default)(o.default.Input.Select).withConfig({componentId:"zh__sc-422803e4-15"})`
  width: 100%;
  height: 28px;
  font-size: 16px;
  line-height: 16px;
`;let nZ=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-422803e4-16"})`
  display: flex;
  gap: 8px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,nJ=l.default.div.withConfig({componentId:"zh__sc-422803e4-17"})`
  position: fixed;
  z-index: 1000;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgb(10 10 10 / 35%);
`,n0=l.default.div.withConfig({componentId:"zh__sc-422803e4-18"})`
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
`,n1=l.default.div.withConfig({componentId:"zh__sc-422803e4-19"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;
`,n2=l.default.h2.withConfig({componentId:"zh__sc-422803e4-20"})`
  align-self: stretch;

  margin: 0;

  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  color: #000;
`,n6=l.default.p.withConfig({componentId:"zh__sc-422803e4-21"})`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: #000;
`,n4=l.default.div.withConfig({componentId:"zh__sc-422803e4-22"})`
  display: flex;
  gap: 12px;
  align-items: center;
  align-self: stretch;
  justify-content: flex-end;
`,n5=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-422803e4-23"})`
  height: 36px;
  padding: 8px 16px;
`,n3=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-422803e4-24"})`
  height: 36px;
  padding: 8px 16px;
`,n9=(0,n.observer)(function({guardianList:e,selectedGuardianId:n,onAddGuardian:l,onUpdateGuardian:a}){let d=e.length>0,[r,s]=(0,i.useState)(!1),[c,f]=(0,i.useState)(!1),[h,p]=(0,i.useState)(!1),[u,x]=(0,i.useState)(!1),[g,m]=(0,i.useState)(""),[b,j]=(0,i.useState)({name:"",relation:"",phone:"",address:""}),[w,y]=(0,i.useState)({name:"",relation:"",phone:"",address:""}),_=null!==n&&e.some(e=>e.id===n)?n:null,v=(0,i.useMemo)(()=>{if(null===_)return e;let t=e.find(e=>e.id===_);return t?[t,...e.filter(e=>e.id!==_)]:e},[_,e]),C=()=>{j({name:"",relation:"",phone:"",address:""}),y({name:"",relation:"",phone:"",address:""}),m("")},I=()=>{s(!1),f(!1),p(!1),C()},z=(e,t)=>{j(n=>({...n,[e]:t})),y(t=>({...t,[e]:""})),m("")},T=async()=>{x(!0);let e={name:b.name,relation:b.relation,phone:b.phone,address:b.address},t=c&&null!==_?await a(_,e):await l(e);(x(!1),p(!1),null===t)?m("보호자 정보를 저장하지 못했습니다. 잠시 후 다시 시도해 주세요."):I()},S=r?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(im,{onClick:I,children:(0,t.jsxs)(ib,{onClick:e=>e.stopPropagation(),children:[(0,t.jsxs)(ij,{children:[(0,t.jsx)(iw,{}),(0,t.jsx)(iy,{children:c?"보호자 정보 수정":"신규 보호자 추가"}),(0,t.jsx)(o.default.Button.Outlined,{type:"button",style:{width:56,height:36,padding:8},onClick:I,children:(0,t.jsx)(nO.default,{sx:{fontSize:20}})})]}),(0,t.jsx)(i_,{}),(0,t.jsx)(iv,{children:(0,t.jsxs)(iC,{children:[(0,t.jsxs)(iI,{children:[(0,t.jsxs)(iT,{children:[(0,t.jsx)(iS,{children:"성명"}),(0,t.jsx)(ik,{type:"text",placeholder:"보호자 성명을 입력하세요.",value:b.name,onChange:e=>z("name",e.target.value),$hasError:""!==w.name}),(0,t.jsx)(iA,{children:w.name})]}),(0,t.jsxs)(iT,{children:[(0,t.jsx)(iS,{children:"이용자와의 관계"}),(0,t.jsx)(ik,{type:"text",placeholder:"예: 자녀(딸), 자녀(아들), 자녀(며느리)",value:b.relation,onChange:e=>z("relation",e.target.value),$hasError:""!==w.relation}),(0,t.jsx)(iA,{children:w.relation})]}),(0,t.jsxs)(iT,{children:[(0,t.jsx)(iS,{children:"연락처"}),(0,t.jsx)(iE,{placeholder:"연락처번호를 입력해주세요.",value:b.phone,onChange:e=>z("phone",e),$hasError:""!==w.phone}),(0,t.jsx)(iA,{children:w.phone})]}),(0,t.jsxs)(iT,{children:[(0,t.jsx)(iS,{children:"주소"}),(0,t.jsx)(iD,{rows:3,placeholder:"보호자 주소를 입력하세요.",value:b.address,onChange:e=>z("address",e.target.value),$hasError:""!==w.address}),(0,t.jsx)(iA,{children:w.address})]})]}),(0,t.jsxs)(iz,{children:[(0,t.jsx)(iO,{children:g}),(0,t.jsxs)(o.default.Button.Filled.Primary,{type:"button",style:{display:"flex",gap:4,alignItems:"center",height:36,padding:"8px 16px"},onClick:()=>{if(u)return;let e={name:""===b.name.trim()?"필수 입력값입니다.":"",relation:"",phone:""===b.phone.trim()||nN.default.is(b.phone)?"":"유효한 휴대폰 형식이 아닙니다.",address:""};y(e),Object.values(e).some(e=>""!==e)||p(!0)},children:[(0,t.jsx)(nA,{sx:{fontSize:20}}),c?"수정 완료":"추가 완료"]})]})]})})]})}),h?(0,t.jsx)(i$,{children:(0,t.jsxs)(iR,{children:[(0,t.jsx)(iL,{children:(0,t.jsx)(iN,{children:c?"보호자 정보를 수정할까요?":"신규 보호자 정보를 추가할까요?"})}),(0,t.jsxs)(iP,{children:[(0,t.jsx)(o.default.Button.Outlined,{type:"button",style:{width:91,height:36,padding:"8px 16px"},disabled:u,onClick:()=>p(!1),children:"취소하기"}),(0,t.jsx)(o.default.Button.Filled.Primary,{type:"button",style:{width:91,height:36,padding:"8px 16px"},disabled:u,onClick:()=>void T(),children:u?"저장 중...":c?"수정하기":"추가하기"})]})]})}):null]}):null;return(0,t.jsxs)(nM,{children:[(0,t.jsx)(nB,{children:(0,t.jsxs)(nU,{children:[(0,t.jsx)(nW,{children:"보호자 정보"}),(0,t.jsxs)(nY,{children:[(0,t.jsxs)(nV,{type:"button",disabled:null===_,onClick:()=>{let t=e.find(e=>e.id===_);t&&(f(!0),j({name:t.name,relation:t.relationship??"",phone:t.phoneNumber??"",address:t.address??""}),y({name:"",relation:"",phone:"",address:""}),m(""),s(!0))},children:[(0,t.jsx)(nR.default,{sx:{fontSize:20}}),"수정하기"]}),(0,t.jsxs)(nV,{type:"button",onClick:()=>{f(!1),C(),s(!0)},children:[(0,t.jsx)(nD,{sx:{fontSize:20}}),"추가하기"]})]})]})}),d?(0,t.jsx)(n8,{children:v.map(e=>{let n=e.id===_;return(0,t.jsxs)(n7,{$isSelected:n,children:[(0,t.jsxs)(ie,{children:[(0,t.jsx)(it,{children:e.name}),(0,t.jsx)(ii,{children:null===e.relationship||""===e.relationship?"이용자와의 관계: -":`이용자와의 관계: ${e.relationship}`})]}),(0,t.jsxs)(il,{children:[(0,t.jsxs)(ia,{children:[(0,t.jsx)(id,{children:"주소"}),(0,t.jsx)(io,{}),(0,t.jsx)(ir,{children:e.address??"-"})]}),(0,t.jsxs)(ia,{children:[(0,t.jsx)(id,{children:"연락처"}),(0,t.jsx)(io,{}),(0,t.jsx)(ir,{children:e.phoneNumber??"-"})]}),(0,t.jsxs)(ia,{children:[(0,t.jsx)(id,{children:"이메일"}),(0,t.jsx)(io,{}),(0,t.jsx)(ir,{children:"-"})]})]}),(0,t.jsx)(is,{children:n?(0,t.jsx)(ic,{children:"지금 선택됨"}):(0,t.jsxs)(ih,{type:"button",disabled:!0,children:["선택",(0,t.jsx)(n$,{sx:{fontSize:16}})]})})]},e.id)})}):(0,t.jsxs)(ip,{children:[(0,t.jsx)(nL.default,{sx:{fontSize:24,color:"#494F53"}}),(0,t.jsxs)(iu,{children:[(0,t.jsx)(ix,{children:"등록된 보호자 정보가 없습니다."}),(0,t.jsx)(ig,{children:"보호자 정보 등록이 필요한 경우 [+추가하기] 버튼을 클릭하고 등록할 수 있습니다."})]})]}),S]})}),n8=l.default.div.withConfig({componentId:"zh__sc-b1996503-0"})`
  overflow: auto hidden;
  display: flex;
  flex-wrap: nowrap;
  gap: 10px;

  width: 100%;
`,n7=l.default.div.withConfig({componentId:"zh__sc-b1996503-1"})`
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
`,ie=l.default.div.withConfig({componentId:"zh__sc-b1996503-2"})`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;

  width: 100%;
`,it=l.default.div.withConfig({componentId:"zh__sc-b1996503-3"})`
  flex-shrink: 0;

  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  color: #0a0a0a;
`,ii=l.default.div.withConfig({componentId:"zh__sc-b1996503-4"})`
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
`,il=l.default.div.withConfig({componentId:"zh__sc-b1996503-5"})`
  display: flex;
  flex-direction: column;
  gap: 4px;

  width: 100%;
  padding-bottom: 36px;
`,ia=l.default.div.withConfig({componentId:"zh__sc-b1996503-6"})`
  display: flex;
  gap: 8px;
  align-items: flex-start;
  width: 100%;
`,id=l.default.span.withConfig({componentId:"zh__sc-b1996503-7"})`
  width: 52px;
  min-width: 52px;

  font-size: 14px;
  line-height: 20px;
  color: #0a0a0a;
`,io=l.default.span.withConfig({componentId:"zh__sc-b1996503-8"})`
  width: 1px;
  height: 20px;
  background: #e5e7eb;
`,ir=l.default.span.withConfig({componentId:"zh__sc-b1996503-9"})`
  min-width: 0;

  font-size: 14px;
  line-height: 20px;
  color: #45464e;
  overflow-wrap: anywhere;
`,is=l.default.div.withConfig({componentId:"zh__sc-b1996503-10"})`
  position: absolute;
  right: 16px;
  bottom: 16px;

  display: flex;
  justify-content: flex-end;
`,ic=l.default.div.withConfig({componentId:"zh__sc-b1996503-11"})`
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
`,ih=l.default.button.withConfig({componentId:"zh__sc-b1996503-12"})`
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
`,ip=l.default.div.withConfig({componentId:"zh__sc-b1996503-13"})`
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
`,iu=l.default.div.withConfig({componentId:"zh__sc-b1996503-14"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: center;
`,ix=l.default.div.withConfig({componentId:"zh__sc-b1996503-15"})`
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  color: #494f53;
`,ig=l.default.div.withConfig({componentId:"zh__sc-b1996503-16"})`
  font-size: 14px;
  line-height: 20px;
  color: #494f53;
  text-align: center;
`,im=l.default.div.withConfig({componentId:"zh__sc-b1996503-17"})`
  position: absolute;
  z-index: 20;
  inset: 0;

  display: flex;
  justify-content: flex-end;

  background: rgb(17 24 39 / 28%);
`,ib=l.default.div.withConfig({componentId:"zh__sc-b1996503-18"})`
  display: flex;
  flex-direction: column;

  width: min(417px, 100%);
  height: 100%;

  background: #fff;
  box-shadow: -2px 9px 16px rgb(0 0 0 / 16%);
`,ij=l.default.div.withConfig({componentId:"zh__sc-b1996503-19"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
`,iw=l.default.div.withConfig({componentId:"zh__sc-b1996503-20"})`
  flex-shrink: 0;
  width: 36px;
  height: 36px;
`,iy=l.default.div.withConfig({componentId:"zh__sc-b1996503-21"})`
  flex: 1;

  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  color: #0a0a0a;
  text-align: center;
`,i_=l.default.div.withConfig({componentId:"zh__sc-b1996503-22"})`
  height: 1px;
  background: #e5e7eb;
`,iv=l.default.div.withConfig({componentId:"zh__sc-b1996503-23"})`
  overflow-y: auto;
  display: flex;
  flex: 1;
  flex-direction: column;

  padding: 16px;
`,iC=l.default.div.withConfig({componentId:"zh__sc-b1996503-24"})`
  display: flex;
  flex-direction: column;
  gap: 16px;

  padding: 16px;
  border: 1px solid #e5e9ef;
  border-radius: 8px;

  background: #fff;
`,iI=l.default.div.withConfig({componentId:"zh__sc-b1996503-25"})`
  display: flex;
  flex-direction: column;
`,iz=l.default.div.withConfig({componentId:"zh__sc-b1996503-26"})`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: flex-end;
`,iT=l.default.div.withConfig({componentId:"zh__sc-b1996503-27"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,iS=l.default.label.withConfig({componentId:"zh__sc-b1996503-28"})`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: #0a0a0a;
`,ik=l.default.input.withConfig({componentId:"zh__sc-b1996503-29"})`
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
`,iE=(0,l.default)(o.default.Input.Phone).withConfig({componentId:"zh__sc-b1996503-30"})`
  width: 100%;
  height: 36px;
  padding: 4px 16px;
  border-color: ${e=>e.$hasError?"#ef4444":"#e5e9ef"};

  font-size: 16px;

  &:focus {
    border-color: ${e=>e.$hasError?"#ef4444":"#5635ff"};
  }
`,iD=l.default.textarea.withConfig({componentId:"zh__sc-b1996503-31"})`
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
`,iA=l.default.div.withConfig({componentId:"zh__sc-b1996503-32"})`
  min-height: 20px;
  font-size: 12px;
  line-height: 20px;
  color: #ef4444;
`,iO=l.default.div.withConfig({componentId:"zh__sc-b1996503-33"})`
  min-height: 20px;
  font-size: 12px;
  line-height: 20px;
  color: #ef4444;
`,i$=l.default.div.withConfig({componentId:"zh__sc-b1996503-34"})`
  position: absolute;
  z-index: 30;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgb(17 24 39 / 12%);
`,iR=l.default.div.withConfig({componentId:"zh__sc-b1996503-35"})`
  display: flex;
  flex-direction: column;
  gap: 48px;

  width: 501px;
  padding: 32px 24px;
  border: 1px solid #e5e9ef;
  border-radius: 8px;

  background: #fff;
  box-shadow: 0 4px 2px rgb(0 0 0 / 10%);
`,iL=l.default.div.withConfig({componentId:"zh__sc-b1996503-36"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`,iN=l.default.div.withConfig({componentId:"zh__sc-b1996503-37"})`
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  color: #000;
`,iP=l.default.div.withConfig({componentId:"zh__sc-b1996503-38"})`
  display: flex;
  gap: 12px;
  justify-content: flex-end;
`;var iF=e.i(84673),iM=e.i(76207),iB=e.i(54304);function iU(e,t){return void 0!==e&&Object.prototype.hasOwnProperty.call(e,t)}let iW=Object.keys(e7.default).filter(function(e){return e in e7.default}),iY=["PHYSICAL_ACTIVITY_SUPPORT","HOUSEKEEPING_SUPPORT","SOCIAL_ACTIVITY_SUPPORT","OTHER"],iV=["MALE","FEMALE"],iH=["TWENTIES_OR_YONGER","THIRTIES","FORTIES","FIFTIES","SIXTIES","SEVENTIES_OR_OLDER"],iG=["MON","TUE","WED","THU","FRI","SAT","SUN"],iK=[["ALONE","독거"],["COUPLE","부부"],["SINGLE_PARENT","한부모"],["OTHER","기타"]],iX=[["ministry","보건복지부"],["metropolitan","광역지자체"],["local","기초지자체"],["other","기타"]],iq=(0,n.observer)(function(){let e=a.default.client.info.byClient,[n,l]=(0,i.useState)({}),d=e.isServiceConditionEditing,r=e.selectedClient,s=e.selectedServiceConditionDraft,c=s?.desiredServiceTimes??r?.desiredServiceTimes.flatMap(({dayOfWeek:e,hour:t})=>iM.default.some(e=>e===t)?[{dayOfWeek:e,hour:t}]:[])??[],f=s?.desiredRegions??r?.desiredRegions??[],h=s?.desiredCareTypes??r?.desiredCareTypes.map(({careType:e,detail:t})=>({careType:e,...null===t?{}:{detail:t}}))??[],p=void 0!==s&&Object.prototype.hasOwnProperty.call(s,"desiredServiceWorkerGender")?s.desiredServiceWorkerGender:r?.desiredServiceWorkerGender,u=s?.desiredAgeRanges??r?.desiredAgeRanges??[],x=s?.workplace??r?.workplace??"",g=s?.schoolName??r?.schoolName??"",m=iU(s,"schoolStartTime")?s?.schoolStartTime??"":r?.schoolStartTime??"",b=iU(s,"schoolEndTime")?s?.schoolEndTime??"":r?.schoolEndTime??"",j=s?.schoolDays??r?.schoolDays??[],w=s?.careCenterName??r?.careCenterName??"",y=iU(s,"careCenterStartTime")?s?.careCenterStartTime??"":r?.careCenterStartTime??"",_=iU(s,"careCenterEndTime")?s?.careCenterEndTime??"":r?.careCenterEndTime??"",v=s?.careCenterDays??r?.careCenterDays??[],C=s?.primaryDisabilityName??r?.primaryDisabilityName??"",I=s?.primaryDisabilityGrade??r?.primaryDisabilityGrade??"",z=s?.primaryDisabilitySeverity??r?.primaryDisabilitySeverity??"",T=s?.secondaryDisabilityName??r?.secondaryDisabilityName??"",S=s?.secondaryDisabilityGrade??r?.secondaryDisabilityGrade??"",k=s?.secondaryDisabilitySeverity??r?.secondaryDisabilitySeverity??"",E=s?.chronicDiseaseNames??r?.chronicDiseaseNames??"",D=s?.medicationInfo??r?.medicationInfo??"",A=s?.hasTraumaDisability??r?.hasTraumaDisability??void 0,O=s?.communicationStatus??r?.communicationStatus,$=s?.communicationStatusDetail??r?.communicationStatusDetail??"",R=s?.hasWheelchair??r?.hasWheelchair,L=s?.isMarried??r?.isMarried,N=s?.familyStatus??r?.familyStatus,P=s?.familyStatusDetail??r?.familyStatusDetail??"",F={ministry:iU(s,"ministryDeterminedHours")?s?.ministryDeterminedHours:r?.ministryDeterminedHours,metropolitan:iU(s,"metroDeterminedHours")?s?.metroDeterminedHours:r?.metroDeterminedHours,local:iU(s,"basicDeterminedHours")?s?.basicDeterminedHours:r?.basicDeterminedHours,other:iU(s,"otherDeterminedHours")?s?.otherDeterminedHours:r?.otherDeterminedHours},M=s?.usageExperience??r?.usageExperience??"",B=s?.dailyLivingNotes??r?.dailyLivingNotes??"",U=s?.comprehensiveOpinion??r?.comprehensiveOpinion??"",W="DISABILITY_ACTIVITY_SUPPORT"===e.currentServiceType,Y=iW.every(e=>f.includes(e)),V=iY.every(e=>h.some(t=>t.careType===e)),H=iH.every(e=>u.includes(e)),G=async()=>{let t=Object.fromEntries(Object.entries({schoolStartTime:m,schoolEndTime:b,careCenterStartTime:y,careCenterEndTime:_}).flatMap(([e,t])=>""===t||iB.default.is(t)?[]:[[e,"유효한 시간 형식이 아닙니다."]]));l(t),Object.keys(t).length>0||await e.saveSelectedServiceConditionDraft()};(0,i.useEffect)(()=>{if(0===Object.keys(n).length)return;let e=window.requestAnimationFrame(()=>{document.querySelector("[data-service-condition-field-error]")?.scrollIntoView({block:"center",behavior:"smooth"})});return()=>window.cancelAnimationFrame(e)},[n]);let K=(t,n)=>{l(e=>({...e,[t]:""})),e.updateSelectedServiceConditionDraftField(t,n)};return(0,t.jsxs)(nM,{children:[(0,t.jsxs)(iZ,{children:[(0,t.jsxs)(i0,{children:[(0,t.jsx)(iJ,{children:"서비스 희망 시간"}),d?(0,t.jsx)(nH,{children:"수정 진행중"}):null]}),(0,t.jsxs)(i1,{children:[(0,t.jsx)(e5.default,{sx:{fontSize:20}}),(0,t.jsx)(i2,{children:"시간대를 추가하고, 추가한 시간대를 클릭하면 수정하거나 삭제할 수 있습니다."})]}),d?(0,t.jsxs)(nY,{children:[(0,t.jsxs)(nV,{type:"button",onClick:e.cancelServiceConditionEdit,children:[(0,t.jsx)(iF.default,{sx:{fontSize:20}}),"수정 취소"]}),(0,t.jsxs)(nV,{type:"button",onClick:()=>void G(),children:[(0,t.jsx)(nA,{sx:{fontSize:20}}),"수정 저장"]})]}):(0,t.jsxs)(nV,{type:"button",onClick:e.startServiceConditionEdit,children:[(0,t.jsx)(nR.default,{sx:{fontSize:20}}),"수정하기"]})]}),(0,t.jsx)(i6,{value:c,disabled:!d,readOnly:!d,onChange:t=>e.updateSelectedServiceConditionDraftTimes(t.target.value)}),(0,t.jsxs)(iQ,{children:[(0,t.jsx)(i4,{children:"서비스 가능 지역 (복수 선택 가능)"}),(0,t.jsxs)(i5,{children:[(0,t.jsxs)(i3,{children:[(0,t.jsx)(i7,{disabled:!d,checked:Y,onChange:()=>e.updateSelectedServiceConditionDraftRegions(Y?[]:iW)}),(0,t.jsx)(lt,{children:"전체 선택"})]}),iW.map(n=>(0,t.jsxs)(i3,{children:[(0,t.jsx)(i7,{disabled:!d,checked:f.includes(n),onChange:()=>{let t=f.includes(n)?f.filter(e=>e!==n):[...f,n];e.updateSelectedServiceConditionDraftRegions(t)}}),(0,t.jsx)(lt,{children:e7.default[n].label})]},n))]})]}),W?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(iQ,{children:[(0,t.jsx)(i4,{children:"희망 활동 내용 (복수 선택 가능)"}),(0,t.jsxs)(i5,{children:[(0,t.jsxs)(i3,{children:[(0,t.jsx)(i7,{disabled:!d,checked:V,onChange:()=>e.updateSelectedServiceConditionDraftCareTypes(V?[]:iY.map(e=>h.find(t=>t.careType===e)??{careType:e}))}),(0,t.jsx)(lt,{children:"전체 선택"})]}),iY.map(n=>{let i=h.find(e=>e.careType===n);return(0,t.jsxs)(i9,{children:[(0,t.jsxs)(i3,{children:[(0,t.jsx)(i7,{disabled:!d,checked:void 0!==i,onChange:()=>{let t=void 0===i?[...h,{careType:n}]:h.filter(e=>e.careType!==n);e.updateSelectedServiceConditionDraftCareTypes(t)}}),(0,t.jsx)(lt,{children:"PHYSICAL_ACTIVITY_SUPPORT"===n?"신체 활동":te.default[n].label.replace("활동"," 활동")})]}),(0,t.jsx)(i8,{value:i?.detail??"",placeholder:"관련 내용을 입력해주세요.",readOnly:!d||void 0===i,onChange:t=>{void 0!==i&&e.updateSelectedServiceConditionDraftCareTypes(h.map(e=>e.careType===n?{...e,detail:t.target.value}:e))},style:lp})]},n)})]})]}),(0,t.jsxs)(iQ,{children:[(0,t.jsx)(i4,{children:"제공인력 희망 성별"}),(0,t.jsxs)(i5,{children:[(0,t.jsxs)(i3,{children:[(0,t.jsx)(le,{disabled:!d,checked:null==p,onChange:()=>e.updateSelectedServiceConditionDraftGender(null)}),(0,t.jsx)(lt,{children:"전체"})]}),iV.map(n=>(0,t.jsxs)(i3,{children:[(0,t.jsx)(le,{disabled:!d,checked:p===n,onChange:()=>e.updateSelectedServiceConditionDraftGender(n)}),(0,t.jsx)(lt,{children:e8.default[n].label})]},n))]})]}),(0,t.jsxs)(iQ,{children:[(0,t.jsx)(i4,{children:"제공인력 희망 연령 (복수 선택 가능)"}),(0,t.jsxs)(i5,{children:[(0,t.jsxs)(i3,{children:[(0,t.jsx)(i7,{disabled:!d,checked:H,onChange:()=>e.updateSelectedServiceConditionDraftAgeRanges(H?[]:iH)}),(0,t.jsx)(lt,{children:"전체 선택"})]}),iH.map(n=>(0,t.jsxs)(i3,{children:[(0,t.jsx)(i7,{disabled:!d,checked:u.includes(n),onChange:()=>e.updateSelectedServiceConditionDraftAgeRanges(u.includes(n)?u.filter(e=>e!==n):[...u,n])}),(0,t.jsx)(lt,{children:"TWENTIES_OR_YONGER"===n||"SEVENTIES_OR_OLDER"===n?e9.default[n].label.replace(" 이하","").replace(" 이상",""):e9.default[n].label})]},n))]})]}),(0,t.jsx)(ln,{children:"직장"}),(0,t.jsx)(li,{children:(0,t.jsxs)(ll,{children:[(0,t.jsx)(la,{children:"직장"}),(0,t.jsx)(o.default.Input.Text,{value:x,placeholder:"직장명을 입력하세요.",readOnly:!d,onChange:t=>e.updateSelectedServiceConditionDraftField("workplace",t.target.value),style:lp})]})}),(0,t.jsx)(ln,{children:"학교"}),(0,t.jsxs)(li,{children:[(0,t.jsxs)(ll,{$width:395,children:[(0,t.jsx)(la,{children:"학교명"}),(0,t.jsx)(o.default.Input.Text,{value:g,placeholder:"학교명을 입력하세요.",readOnly:!d,onChange:t=>e.updateSelectedServiceConditionDraftField("schoolName",t.target.value),style:lp})]}),(0,t.jsxs)(ll,{$width:273,"data-service-condition-field-error":void 0!==n.schoolStartTime&&""!==n.schoolStartTime||void 0,children:[(0,t.jsx)(la,{children:"시작 시간"}),(0,t.jsx)(o.default.Input.TimeHhmm,{value:m,placeholder:"00:00",readOnly:!d,onChange:e=>K("schoolStartTime",e),style:{...lp,...void 0!==n.schoolStartTime&&""!==n.schoolStartTime?lu:{}}}),(0,t.jsx)(lx,{children:n.schoolStartTime})]}),(0,t.jsx)(ld,{children:"~"}),(0,t.jsxs)(ll,{$width:273,"data-service-condition-field-error":void 0!==n.schoolEndTime&&""!==n.schoolEndTime||void 0,children:[(0,t.jsx)(la,{children:"종료 시간"}),(0,t.jsx)(o.default.Input.TimeHhmm,{value:b,placeholder:"00:00",readOnly:!d,onChange:e=>K("schoolEndTime",e),style:{...lp,...void 0!==n.schoolEndTime&&""!==n.schoolEndTime?lu:{}}}),(0,t.jsx)(lx,{children:n.schoolEndTime})]})]}),(0,t.jsxs)(lo,{children:[(0,t.jsx)(la,{children:"등교 요일"}),(0,t.jsx)(i5,{children:iG.map(n=>(0,t.jsxs)(i3,{children:[(0,t.jsx)(i7,{disabled:!d,checked:j.includes(n),onChange:()=>e.updateSelectedServiceConditionDraftField("schoolDays",j.includes(n)?j.filter(e=>e!==n):[...j,n])}),(0,t.jsx)(lt,{children:tn.default[n].label})]},n))})]}),(0,t.jsx)(ln,{children:"주단기보호센터"}),(0,t.jsxs)(li,{children:[(0,t.jsxs)(ll,{$width:395,children:[(0,t.jsx)(la,{children:"주단기보호센터명"}),(0,t.jsx)(o.default.Input.Text,{value:w,placeholder:"센터명을 입력하세요.",readOnly:!d,onChange:t=>e.updateSelectedServiceConditionDraftField("careCenterName",t.target.value),style:lp})]}),(0,t.jsxs)(ll,{$width:273,"data-service-condition-field-error":void 0!==n.careCenterStartTime&&""!==n.careCenterStartTime||void 0,children:[(0,t.jsx)(la,{children:"시작 시간"}),(0,t.jsx)(o.default.Input.TimeHhmm,{value:y,placeholder:"00:00",readOnly:!d,onChange:e=>K("careCenterStartTime",e),style:{...lp,...void 0!==n.careCenterStartTime&&""!==n.careCenterStartTime?lu:{}}}),(0,t.jsx)(lx,{children:n.careCenterStartTime})]}),(0,t.jsx)(ld,{children:"~"}),(0,t.jsxs)(ll,{$width:273,"data-service-condition-field-error":void 0!==n.careCenterEndTime&&""!==n.careCenterEndTime||void 0,children:[(0,t.jsx)(la,{children:"종료 시간"}),(0,t.jsx)(o.default.Input.TimeHhmm,{value:_,placeholder:"00:00",readOnly:!d,onChange:e=>K("careCenterEndTime",e),style:{...lp,...void 0!==n.careCenterEndTime&&""!==n.careCenterEndTime?lu:{}}}),(0,t.jsx)(lx,{children:n.careCenterEndTime})]})]}),(0,t.jsxs)(lo,{children:[(0,t.jsx)(la,{children:"등원 요일"}),(0,t.jsx)(i5,{children:iG.map(n=>(0,t.jsxs)(i3,{children:[(0,t.jsx)(i7,{disabled:!d,checked:v.includes(n),onChange:()=>e.updateSelectedServiceConditionDraftField("careCenterDays",v.includes(n)?v.filter(e=>e!==n):[...v,n])}),(0,t.jsx)(lt,{children:tn.default[n].label})]},n))})]}),(0,t.jsx)(ln,{children:"판정시간"}),(0,t.jsx)(li,{children:iX.map(([n,i])=>(0,t.jsxs)(ll,{children:[(0,t.jsx)(la,{children:i}),(0,t.jsxs)(lr,{children:[(0,t.jsx)(o.default.Input.Text,{value:F[n]??"",placeholder:"00",inputMode:"numeric",readOnly:!d,onChange:t=>{let i=t.target.value.replace(/\D/g,"");e.updateSelectedServiceConditionDraftField({ministry:"ministryDeterminedHours",metropolitan:"metroDeterminedHours",local:"basicDeterminedHours",other:"otherDeterminedHours"}[n],""===i?void 0:Number(i))},style:{...lp,width:140,textAlign:"center"}}),(0,t.jsx)(ls,{children:"시간"})]})]},n))}),(0,t.jsxs)(li,{children:[(0,t.jsxs)(ll,{children:[(0,t.jsx)(la,{children:"주장애명"}),(0,t.jsx)(o.default.Input.Text,{value:C,placeholder:"주장애명을 입력해주세요.",readOnly:!d,onChange:t=>e.updateSelectedServiceConditionDraftField("primaryDisabilityName",t.target.value),style:lp})]}),(0,t.jsxs)(ll,{children:[(0,t.jsx)(la,{children:"장애급수"}),(0,t.jsx)(o.default.Input.Text,{value:I,placeholder:"장애급수를 입력해주세요.",readOnly:!d,onChange:t=>e.updateSelectedServiceConditionDraftField("primaryDisabilityGrade",t.target.value),style:lp})]}),(0,t.jsxs)(ll,{children:[(0,t.jsx)(la,{children:"주장애 장애정도"}),(0,t.jsx)(o.default.Input.Text,{value:z,placeholder:"주장애 장애정도를 입력해주세요.",readOnly:!d,onChange:t=>e.updateSelectedServiceConditionDraftField("primaryDisabilitySeverity",t.target.value),style:lp})]})]}),(0,t.jsxs)(li,{children:[(0,t.jsxs)(ll,{children:[(0,t.jsx)(la,{children:"부장애명"}),(0,t.jsx)(o.default.Input.Text,{value:T,placeholder:"부장애명을 입력해주세요.",readOnly:!d,onChange:t=>e.updateSelectedServiceConditionDraftField("secondaryDisabilityName",t.target.value),style:lp})]}),(0,t.jsxs)(ll,{children:[(0,t.jsx)(la,{children:"장애급수"}),(0,t.jsx)(o.default.Input.Text,{value:S,placeholder:"장애급수를 입력해주세요.",readOnly:!d,onChange:t=>e.updateSelectedServiceConditionDraftField("secondaryDisabilityGrade",t.target.value),style:lp})]}),(0,t.jsxs)(ll,{children:[(0,t.jsx)(la,{children:"부장애 장애정도"}),(0,t.jsx)(o.default.Input.Text,{value:k,placeholder:"부장애 장애정도를 입력해주세요.",readOnly:!d,onChange:t=>e.updateSelectedServiceConditionDraftField("secondaryDisabilitySeverity",t.target.value),style:lp})]})]}),(0,t.jsxs)(li,{children:[(0,t.jsxs)(ll,{children:[(0,t.jsx)(la,{children:"보유질환명"}),(0,t.jsx)(o.default.Input.Text,{value:E,placeholder:"보유질환에 대해 입력해주세요.",readOnly:!d,onChange:t=>e.updateSelectedServiceConditionDraftField("chronicDiseaseNames",t.target.value),style:lp})]}),(0,t.jsxs)(ll,{children:[(0,t.jsx)(la,{children:"투약정보"}),(0,t.jsx)(o.default.Input.Text,{value:D,placeholder:"투약정보에 대해 입력해주세요.",readOnly:!d,onChange:t=>e.updateSelectedServiceConditionDraftField("medicationInfo",t.target.value),style:lp})]})]}),(0,t.jsxs)(li,{children:[(0,t.jsxs)(ll,{$width:158,children:[(0,t.jsx)(la,{children:"외상장애 여부"}),(0,t.jsxs)(i5,{children:[(0,t.jsxs)(i3,{children:[(0,t.jsx)(le,{disabled:!d,checked:!1===A,onChange:()=>e.updateSelectedServiceConditionDraftField("hasTraumaDisability",!1)}),(0,t.jsx)(lt,{children:"미해당"})]}),(0,t.jsxs)(i3,{children:[(0,t.jsx)(le,{disabled:!d,checked:!0===A,onChange:()=>e.updateSelectedServiceConditionDraftField("hasTraumaDisability",!0)}),(0,t.jsx)(lt,{children:"해당"})]})]})]}),(0,t.jsxs)(ll,{$width:443,children:[(0,t.jsx)(la,{children:"의사소통"}),(0,t.jsxs)(i5,{children:[(0,t.jsxs)(i3,{children:[(0,t.jsx)(le,{disabled:!d,checked:"POSSIBLE"===O,onChange:()=>e.updateSelectedServiceConditionDraftField("communicationStatus","POSSIBLE")}),(0,t.jsx)(lt,{children:"가능"})]}),(0,t.jsxs)(i3,{children:[(0,t.jsx)(le,{disabled:!d,checked:"IMPOSSIBLE"===O,onChange:()=>e.updateSelectedServiceConditionDraftField("communicationStatus","IMPOSSIBLE")}),(0,t.jsx)(lt,{children:"불가능"})]}),(0,t.jsxs)(i3,{children:[(0,t.jsx)(le,{disabled:!d,checked:"OTHER"===O,onChange:()=>e.updateSelectedServiceConditionDraftField("communicationStatus","OTHER")}),(0,t.jsx)(lt,{children:"기타"})]}),(0,t.jsx)(o.default.Input.Text,{value:$,placeholder:"관련 내용을 입력해주세요.",readOnly:!d,onChange:t=>e.updateSelectedServiceConditionDraftField("communicationStatusDetail",t.target.value),style:{...lp,width:193}})]})]}),(0,t.jsxs)(ll,{$width:116,children:[(0,t.jsx)(la,{children:"휠체어 유무"}),(0,t.jsxs)(i5,{children:[(0,t.jsxs)(i3,{children:[(0,t.jsx)(le,{disabled:!d,checked:!0===R,onChange:()=>e.updateSelectedServiceConditionDraftField("hasWheelchair",!0)}),(0,t.jsx)(lt,{children:"유"})]}),(0,t.jsxs)(i3,{children:[(0,t.jsx)(le,{disabled:!d,checked:!1===R,onChange:()=>e.updateSelectedServiceConditionDraftField("hasWheelchair",!1)}),(0,t.jsx)(lt,{children:"무"})]})]})]})]}),(0,t.jsxs)(li,{children:[(0,t.jsxs)(ll,{$width:144,children:[(0,t.jsx)(la,{children:"결혼여부"}),(0,t.jsxs)(i5,{children:[(0,t.jsxs)(i3,{children:[(0,t.jsx)(le,{disabled:!d,checked:!1===L,onChange:()=>e.updateSelectedServiceConditionDraftField("isMarried",!1)}),(0,t.jsx)(lt,{children:"미혼"})]}),(0,t.jsxs)(i3,{children:[(0,t.jsx)(le,{disabled:!d,checked:!0===L,onChange:()=>e.updateSelectedServiceConditionDraftField("isMarried",!0)}),(0,t.jsx)(lt,{children:"기혼"})]})]})]}),(0,t.jsxs)(ll,{$width:530,children:[(0,t.jsx)(la,{children:"가족사항"}),(0,t.jsxs)(i5,{children:[iK.map(([n,i])=>(0,t.jsxs)(i3,{children:[(0,t.jsx)(le,{disabled:!d,checked:N===n,onChange:()=>e.updateSelectedServiceConditionDraftField("familyStatus",n)}),(0,t.jsx)(lt,{children:i})]},n)),(0,t.jsx)(o.default.Input.Text,{value:P,placeholder:"관련 내용을 입력해주세요.",readOnly:!d,onChange:t=>e.updateSelectedServiceConditionDraftField("familyStatusDetail",t.target.value),style:{...lp,width:193}})]})]})]}),(0,t.jsx)(ln,{children:"(타기관) 이용경험"}),(0,t.jsx)(lc,{value:M,placeholder:"텍스트를 입력해주세요.",readOnly:!d,onChange:t=>e.updateSelectedServiceConditionDraftField("usageExperience",t.target.value)}),(0,t.jsx)(ln,{children:"특이사항 (장애특성 및 일상생활)"}),(0,t.jsx)(lh,{value:B,placeholder:"특이사항을 입력해주세요.",readOnly:!d,onChange:t=>e.updateSelectedServiceConditionDraftField("dailyLivingNotes",t.target.value),style:lp}),(0,t.jsx)(ln,{children:"종합소견"}),(0,t.jsx)(lf,{value:U,placeholder:"종합소견을 입력해주세요.",readOnly:!d,onChange:t=>e.updateSelectedServiceConditionDraftField("comprehensiveOpinion",t.target.value)})]}):null]})}),iQ=l.default.div.withConfig({componentId:"zh__sc-9e650079-0"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
  align-self: stretch;
`,iZ=l.default.div.withConfig({componentId:"zh__sc-9e650079-1"})`
  display: flex;
  gap: 16px;
  align-items: center;
  align-self: stretch;

  height: 30px;
`,iJ=l.default.div.withConfig({componentId:"zh__sc-9e650079-2"})`
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
  color: #0a0a0a;
`,i0=l.default.div.withConfig({componentId:"zh__sc-9e650079-3"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,i1=l.default.div.withConfig({componentId:"zh__sc-9e650079-4"})`
  display: flex;
  flex: 1 0 0;
  gap: 4px;
  align-items: center;

  color: #464c53;
`,i2=l.default.div.withConfig({componentId:"zh__sc-9e650079-5"})`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
`,i6=(0,l.default)(o.default.Input.TimeSlider).withConfig({componentId:"zh__sc-9e650079-6"})`
  width: 800px;
`,i4=l.default.div.withConfig({componentId:"zh__sc-9e650079-7"})`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: #000;
`,i5=l.default.div.withConfig({componentId:"zh__sc-9e650079-8"})`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 24px;
  align-items: center;

  min-height: 36px;
`,i3=l.default.div.withConfig({componentId:"zh__sc-9e650079-9"})`
  display: inline-flex;
  gap: 8px;
  align-items: center;
  min-height: 36px;
`,i9=l.default.div.withConfig({componentId:"zh__sc-9e650079-10"})`
  display: inline-flex;
  gap: 8px;
  align-items: center;
`,i8=(0,l.default)(o.default.Input.Text).withConfig({componentId:"zh__sc-9e650079-11"})`
  width: 220px;
`,i7=(0,l.default)(o.default.Input.Check).attrs({$iconSizeRatio:1.5}).withConfig({componentId:"zh__sc-9e650079-12"})`
  width: 24px;
  height: 24px;
`,le=(0,l.default)(o.default.Input.Radio).withConfig({componentId:"zh__sc-9e650079-13"})``,lt=l.default.span.withConfig({componentId:"zh__sc-9e650079-14"})`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: #000;
`,ln=l.default.div.withConfig({componentId:"zh__sc-9e650079-15"})`
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
  color: #0a0a0a;
`,li=l.default.div.withConfig({componentId:"zh__sc-9e650079-16"})`
  display: flex;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;

  min-height: 59px;
`,ll=l.default.div.withConfig({componentId:"zh__sc-9e650079-17"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
  align-self: flex-start;

  min-height: 59px;

  ${({$width:e})=>void 0!==e?`width: ${e}px;`:"flex: 1; min-width: 0;"}
`,la=l.default.div.withConfig({componentId:"zh__sc-9e650079-18"})`
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  color: #000;
  text-align: center;
`,ld=l.default.span.withConfig({componentId:"zh__sc-9e650079-19"})`
  flex: 0 0 auto;
  align-self: flex-start;
  padding-top: 28px;
`,lo=l.default.div.withConfig({componentId:"zh__sc-9e650079-20"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
  align-self: stretch;
`,lr=l.default.div.withConfig({componentId:"zh__sc-9e650079-21"})`
  display: flex;
  gap: 10px;
  align-items: center;
  width: 100%;
`,ls=l.default.span.withConfig({componentId:"zh__sc-9e650079-22"})`
  flex-shrink: 0;
  font-size: 16px;
  color: #000;
`,lc=(0,l.default)(o.default.Input.Textarea).withConfig({componentId:"zh__sc-9e650079-23"})`
  resize: vertical;

  width: 100%;
  min-height: 100px;
  padding: 12px 16px;

  font-size: 16px;
`,lf=(0,l.default)(lc).withConfig({componentId:"zh__sc-9e650079-24"})`
  min-height: 156px;
`,lh=(0,l.default)(o.default.Input.Text).withConfig({componentId:"zh__sc-9e650079-25"})`
  width: 100%;
  padding: 4px 16px;
  font-size: 16px;
`,lp={display:"flex",padding:"4px 16px",alignItems:"center",gap:"10px",flex:"1 0 0",alignSelf:"stretch",fontSize:16},lu={borderColor:"#ff4d4f",background:"#fff5f5"},lx=l.default.div.withConfig({componentId:"zh__sc-9e650079-26"})`
  margin-top: 4px;
  font-size: 12px;
  line-height: 18px;
  color: #e7000b;
`;var lg=e.i(24655);let lm=(0,nE.default)((0,t.jsx)("path",{d:"M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9m-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8z"}),"History");function lb({type:e,onClose:n}){let l=a.default.client.info.byClient.selectedClient,o=a.default.client.info.byClient.selectedClientId,[r,s]=(0,i.useState)([]),[c,f]=(0,i.useState)(!0);return(0,i.useEffect)(()=>{let t=!0;return(async()=>{var n,i,d,r,c;let h;if(null===o)return f(!1);if("address"===e){let e,r,c,h,[p,u]=await Promise.all([a.default.client.info.byClient.getClientChangeHistory(o,"address"),a.default.client.info.byClient.getClientChangeHistory(o,"addressDetail")]);if(!t||(f(!1),null!==p[0]||null!==u[0]||null===p[1]||null===u[1]))return;s((n=p[1],i=u[1],d=l?.createdAt??"",e=new Map,(r=(t,n)=>{t.slice().sort((e,t)=>new Date(e.createdAt).getTime()-new Date(t.createdAt).getTime()).forEach(({oldValue:t,newValue:i,createdAt:l},a)=>{if(0===a&&null!==t&&""!==t.trim()){let i=e.get(d)??{};i[n]=t.trim(),e.set(d,i)}let o=e.get(l)??{};o[n]=i?.trim()??"",e.set(l,o)})})(n,"address"),r(i,"addressDetail"),c="",h="",Array.from(e.entries()).sort(([e],[t])=>new Date(e).getTime()-new Date(t).getTime()).map(([e,t])=>(c=t.address??c,h=t.addressDetail??h,{address:c,addressDetail:h,changedAt:e,value:""})).filter(e=>""!==e.address||""!==e.addressDetail).reverse()));return}let[p,u]=await a.default.client.info.byClient.getClientChangeHistory(o,"phoneNumber");t&&(f(!1),null===p&&null!==u&&s((r=u,c=l?.createdAt??"",h=[],r.slice().sort((e,t)=>new Date(e.createdAt).getTime()-new Date(t.createdAt).getTime()).forEach(({oldValue:e,newValue:t,createdAt:n},i)=>{0===i&&null!==e&&""!==e.trim()&&h.push({address:"",addressDetail:"",changedAt:c,value:e.trim()}),null!==t&&""!==t.trim()&&h.push({address:"",addressDetail:"",changedAt:n,value:t.trim()})}),h.sort((e,t)=>new Date(t.changedAt).getTime()-new Date(e.changedAt).getTime()))))})(),()=>{t=!1}},[l?.createdAt,o,e]),(0,t.jsx)(d.default,{children:(0,t.jsxs)(lj,{children:[(0,t.jsxs)(lw,{children:[(0,t.jsxs)(ly,{children:["address"===e?"주소/상세주소":"휴대폰"," 변경 이력 보기"]}),(0,t.jsxs)(l_,{type:"button",onClick:n,children:[(0,t.jsx)(M.X,{size:14}),"닫기"]})]}),(0,t.jsx)(lv,{children:c?(0,t.jsx)(lk,{children:"변경 이력을 불러오는 중입니다."}):(0,t.jsxs)(lC,{children:[(0,t.jsxs)(lI,{$isAddress:"address"===e,children:[(0,t.jsx)(lS,{children:"address"===e?"주소":"휴대폰"}),"address"===e?(0,t.jsx)(lS,{children:"상세주소"}):null,(0,t.jsx)(lS,{children:"변경 일자"})]}),0===r.length?(0,t.jsx)(lk,{children:"변경 이력이 없습니다."}):r.map(n=>{let i;return(0,t.jsxs)(lz,{$isAddress:"address"===e,children:[(0,t.jsx)(lT,{children:"address"===e?n.address:n.value}),"address"===e?(0,t.jsx)(lT,{children:n.addressDetail}):null,(0,t.jsx)(lT,{children:Number.isNaN((i=new Date(n.changedAt)).getTime())?"YYYY-MM-DD":`${i.getFullYear()}-${String(i.getMonth()+1).padStart(2,"0")}-${String(i.getDate()).padStart(2,"0")}`})]},`${n.changedAt}-${n.address}-${n.addressDetail}-${n.value}`)})]})})]})})}let lj=l.default.div.withConfig({componentId:"zh__sc-cc1c5725-0"})`
  display: flex;
  flex-direction: column;

  width: min(980px, calc(100vw - 32px));
  border-radius: 8px;

  background: #fff;
  box-shadow: 0 4px 16px rgb(0 0 0 / 10%);
`,lw=l.default.div.withConfig({componentId:"zh__sc-cc1c5725-1"})`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 69px;
  padding: 16px;
  border-bottom: 1px solid #e5e7eb;
`,ly=l.default.h2.withConfig({componentId:"zh__sc-cc1c5725-2"})`
  margin: 0;

  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  color: #101828;
`,l_=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-cc1c5725-3"})`
  display: flex;
  gap: 6px;
  align-items: center;

  height: 34px;
  padding: 6px 16px;

  color: #4f39f6;
`,lv=l.default.div.withConfig({componentId:"zh__sc-cc1c5725-4"})`
  border-radius: 0 0 8px 8px;
  background: #f9fafb;
`,lC=l.default.div.withConfig({componentId:"zh__sc-cc1c5725-5"})`
  overflow: hidden;
  display: flex;
  flex-direction: column;

  margin: 28px 24px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
`,lI=l.default.div.withConfig({componentId:"zh__sc-cc1c5725-6"})`
  display: grid;
  grid-template-columns: ${({$isAddress:e})=>e?"repeat(3, minmax(0, 1fr))":"repeat(2, minmax(0, 1fr))"};
  min-height: 41px;
  background: #f8fafc;
`,lz=l.default.div.withConfig({componentId:"zh__sc-cc1c5725-7"})`
  display: grid;
  grid-template-columns: ${({$isAddress:e})=>e?"repeat(3, minmax(0, 1fr))":"repeat(2, minmax(0, 1fr))"};

  min-height: 81px;
  border-top: 1px solid #e5e7eb;

  background: white;
`,lT=l.default.div.withConfig({componentId:"zh__sc-cc1c5725-8"})`
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
`,lS=(0,l.default)(lT).withConfig({componentId:"zh__sc-cc1c5725-9"})`
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 19px; /* 118.75% */
  color: #1c1d22;
  text-align: center;
`,lk=l.default.div.withConfig({componentId:"zh__sc-cc1c5725-10"})`
  padding: 32px 16px;
  font-size: 14px;
  color: #667085;
  text-align: center;
`;function lE({values:e,errorFlags:n,errorMessages:l,isEditing:a,isDisabilityActivitySupport:d,onChangeField:r}){let[s,c]=(0,i.useState)(null),f=l?.mobileText??"",h=l?.contactText??"",p=l?.postCodeText??"",u=l?.residentRegistrationNumberText??"";return(0,t.jsxs)(lD,{children:[(0,t.jsxs)(lA,{children:[(0,t.jsxs)(lO,{children:["주민등록번호",(0,t.jsx)(lU,{value:e.residentRegistrationNumberText,style:n?.residentRegistrationNumberText===!0?lV:void 0,readOnly:!a,onChange:e=>r("residentRegistrationNumberText",e)}),""!==u?(0,t.jsx)(lN,{children:u}):null]}),(0,t.jsxs)(lO,{children:["성별",(0,t.jsx)(lM,{value:e.genderText,readOnly:!0})]}),(0,t.jsxs)(lO,{children:[(0,t.jsxs)(l$,{children:[(0,t.jsx)(lR,{children:"휴대폰"}),(0,t.jsxs)(lL,{type:"button",disabled:a,onClick:()=>c("phone"),children:[(0,t.jsx)(lm,{sx:{fontSize:12}})," 변경 이력 보기"]})]}),(0,t.jsx)(lB,{value:e.mobileText,style:n?.mobileText===!0?lV:void 0,readOnly:!a,onChange:e=>r("mobileText",e)}),""!==f?(0,t.jsx)(lN,{children:f}):null]}),(0,t.jsxs)(lO,{children:["연락처",(0,t.jsx)(lW,{value:e.contactText,style:n?.contactText===!0?lV:void 0,readOnly:!a,onChange:e=>r("contactText",e)}),""!==h?(0,t.jsx)(lN,{children:h}):null]})]}),(0,t.jsxs)(lA,{children:[(0,t.jsxs)(lO,{children:[(0,t.jsxs)(l$,{children:[(0,t.jsx)(lR,{children:"주소"}),(0,t.jsxs)(lL,{type:"button",disabled:a,onClick:()=>c("address"),children:[(0,t.jsx)(lm,{sx:{fontSize:12}})," 변경 이력 보기"]})]}),(0,t.jsx)(lM,{value:e.addressBaseText,readOnly:!a,onChange:e=>r("addressBaseText",e.target.value)})]}),(0,t.jsxs)(lO,{children:["상세주소",(0,t.jsx)(lM,{value:e.addressDetailText,readOnly:!a,onChange:e=>r("addressDetailText",e.target.value)})]}),(0,t.jsxs)(lO,{children:["우편번호",(0,t.jsx)(lY,{value:e.postCodeText,style:n?.postCodeText===!0?lV:void 0,readOnly:!a,onChange:e=>r("postCodeText",e)}),""!==p?(0,t.jsx)(lN,{children:p}):null]})]}),(0,t.jsxs)(lA,{$hasVehicleGuidance:d,children:[(0,t.jsxs)(lO,{children:["특이사항(메모)",(0,t.jsx)(lM,{value:e.memoText,readOnly:!a,onChange:e=>r("memoText",e.target.value)})]}),d?(0,t.jsxs)(lO,{children:["차량 유류비 안내",(0,t.jsxs)(lP,{children:[(0,t.jsxs)(lF,{children:[(0,t.jsx)(o.default.Input.Radio,{disabled:!a,checked:!0===e.vehicleFuelCostGuided,onChange:()=>r("vehicleFuelCostGuided",!0)}),"완료"]}),(0,t.jsxs)(lF,{children:[(0,t.jsx)(o.default.Input.Radio,{disabled:!a,checked:!1===e.vehicleFuelCostGuided,onChange:()=>r("vehicleFuelCostGuided",!1)}),"미완료"]})]})]}):null]}),null!==s?(0,t.jsx)(lb,{type:s,onClose:()=>c(null)}):null]})}let lD=l.default.div.withConfig({componentId:"zh__sc-481703bc-0"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`,lA=l.default.div.withConfig({componentId:"zh__sc-481703bc-1"})`
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
`,lO=l.default.label.withConfig({componentId:"zh__sc-481703bc-2"})`
  display: flex;
  flex-direction: column;
  gap: 4px;

  min-width: 0;

  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: #000;
`,l$=l.default.div.withConfig({componentId:"zh__sc-481703bc-3"})`
  display: flex;
  gap: 2px;
  align-items: center;
  min-height: 20px;
`,lR=l.default.span.withConfig({componentId:"zh__sc-481703bc-4"})`
  flex-shrink: 0;
`,lL=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-481703bc-5"})`
  gap: 2px;
  padding: 2px 4px;
  font-size: 12px;
  line-height: 1;
`,lN=l.default.div.withConfig({componentId:"zh__sc-481703bc-6"})`
  margin-top: 2px;
  font-size: 12px;
  line-height: 16px;
  color: #ff4d4f;
`,lP=l.default.div.withConfig({componentId:"zh__sc-481703bc-7"})`
  display: flex;
  gap: 16px;
  align-items: center;
  height: 36px;
`,lF=l.default.label.withConfig({componentId:"zh__sc-481703bc-8"})`
  display: inline-flex;
  gap: 4px;
  align-items: center;

  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: #000;
`,lM=(0,l.default)(nG).withConfig({componentId:"zh__sc-481703bc-9"})`
  height: 36px;
  padding: 0 16px;
  font-size: 16px;
  line-height: 20px;
`,lB=(0,l.default)(nK).withConfig({componentId:"zh__sc-481703bc-10"})`
  height: 36px;
  padding: 0 16px;
  font-size: 16px;
  line-height: 20px;
`,lU=(0,l.default)(nQ).withConfig({componentId:"zh__sc-481703bc-11"})`
  height: 36px;
  padding: 0 16px;
  font-size: 16px;
  line-height: 20px;
`,lW=(0,l.default)(nX).withConfig({componentId:"zh__sc-481703bc-12"})`
  height: 36px;
  padding: 0 16px;
  font-size: 16px;
  line-height: 20px;
`,lY=(0,l.default)(nq).withConfig({componentId:"zh__sc-481703bc-13"})`
  height: 36px;
  padding: 0 16px;
  font-size: 16px;
  line-height: 20px;
`,lV={borderColor:"#ff4d4f",background:"#fff5f5"};function lH({isOpen:e,onCancel:n,onConfirm:i,title:l="이용자 기본정보를 저장할까요?",description:a="수정된 정보는 연결된 서류의 자동입력 항목에 함께 반영됩니다.\n이미 출력했거나 최종확인한 서류는 다시 확인이 필요할 수 있습니다.",cancelLabel:o="취소하기",confirmLabel:r="저장 및 모든 서류에 반영"}){return e?(0,t.jsx)(d.default,{children:(0,t.jsxs)(lG,{children:[(0,t.jsxs)(lK,{children:[(0,t.jsx)(lX,{children:l}),(0,t.jsx)(lq,{children:a})]}),(0,t.jsxs)(lQ,{children:[(0,t.jsx)(lJ,{onClick:n,children:o}),(0,t.jsx)(l0,{onClick:i,children:r})]})]})}):null}let lG=l.default.div.withConfig({componentId:"zh__sc-952cde00-0"})`
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
`,lK=l.default.div.withConfig({componentId:"zh__sc-952cde00-1"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;
`,lX=l.default.p.withConfig({componentId:"zh__sc-952cde00-2"})`
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #000;
`,lq=l.default.p.withConfig({componentId:"zh__sc-952cde00-3"})`
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #000;
  white-space: pre-line;
`,lQ=l.default.div.withConfig({componentId:"zh__sc-952cde00-4"})`
  display: flex;
  gap: 12px;
  align-items: center;
  align-self: stretch;
  justify-content: flex-end;
`,lZ=l.css`
  height: 36px;
  padding: 8px 16px;
  font-size: 16px;
`,lJ=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-952cde00-5"})`
  ${lZ}
`,l0=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-952cde00-6"})`
  ${lZ}
`,l1=(0,n.observer)(function({detailFormValues:e,errorFlags:n,errorMessages:l,isEditing:d,onStartEdit:o,onCancelEdit:r,requestOpenSaveConfirm:s,requestSaveEdit:c,onChangeField:f}){let h=a.default.client.info.byClient,[p,u]=(0,i.useState)(!1),x=(0,i.useRef)(null);(0,i.useEffect)(()=>{if(!d||p)return;let e=e=>{let t=e.target,n=t instanceof Node&&null!==x.current&&x.current.contains(t),i=t instanceof Element&&(null!==t.closest('[role="listbox"]')||null!==t.closest('[role="option"]')||null!==t.closest("[data-radix-select-viewport]")||null!==t.closest("[data-radix-popper-content-wrapper]"));n||i||r()};return document.addEventListener("pointerdown",e),()=>{document.removeEventListener("pointerdown",e)}},[p,d,r]);let g=async()=>{!0===await c()&&u(!1)};return(0,t.jsxs)(nM,{ref:x,children:[(0,t.jsx)(nB,{children:(0,t.jsxs)(nU,{children:[(0,t.jsxs)(l2,{children:[(0,t.jsx)(nW,{children:"인적사항"}),d?(0,t.jsx)(nH,{children:"수정 진행중"}):null]}),d?(0,t.jsxs)(nY,{children:[(0,t.jsxs)(nV,{type:"button",onClick:r,children:[(0,t.jsx)(iF.default,{sx:{fontSize:20}}),"수정 취소"]}),(0,t.jsxs)(nV,{type:"button",onClick:()=>{s()&&u(!0)},children:[(0,t.jsx)(lg.default,{sx:{fontSize:20}}),"수정 저장"]})]}):(0,t.jsxs)(nV,{type:"button",onClick:o,children:[(0,t.jsx)(nR.default,{sx:{fontSize:20}}),"수정하기"]})]})}),(0,t.jsx)(lE,{values:e,isDisabilityActivitySupport:"DISABILITY_ACTIVITY_SUPPORT"===h.currentServiceType,errorFlags:n,errorMessages:l,isEditing:d,onChangeField:f}),(0,t.jsx)(lH,{isOpen:p,onCancel:()=>{u(!1)},onConfirm:()=>{g()}})]})}),l2=l.default.div.withConfig({componentId:"zh__sc-6d1cdb58-0"})`
  display: flex;
  gap: 10px;
  align-items: center;
`,l6=(0,n.observer)(function(){let e,n=a.default.client.info.byClient,l=n.selectedClientId,d=n.selectedClient,o=d?.name??"",r=n.selectedUserInfoDraft,s=n.selectedUserInfoValidationErrors,c=n.isUserInfoEditing,f=n.selectedGuardianList,h=a.default.client.info.byClient.selectedGuardianId,p=(0,i.useRef)(null),u=(0,i.useRef)(null),x=(0,i.useMemo)(()=>({genderText:d?.gender==="MALE"?"남성":d?.gender==="FEMALE"?"여성":"",residentRegistrationNumberText:d?.residentRegistrationNumber??"",contactText:d?.contact??"",mobileText:d?.phoneNumber??"",addressBaseText:d?.address??"",addressDetailText:d?.addressDetail??"",postCodeText:d?.postCode??"",memoText:d?.note??"",vehicleFuelCostGuided:d?.vehicleFuelCostNoticeGiven??void 0}),[d?.gender,d?.residentRegistrationNumber,d?.contact,d?.phoneNumber,d?.address,d?.addressDetail,d?.postCode,d?.note,d?.vehicleFuelCostNoticeGiven]);if((0,i.useEffect)(()=>{p.current?.scrollTo({top:0,behavior:"auto"})},[l]),(0,i.useEffect)(()=>(n.setToastContainer(n.isDeleteConfirmOpen?u.current:p.current),()=>{n.setToastContainer(null)}),[n,n.isDeleteConfirmOpen]),null===l)return(0,t.jsx)(nF,{children:"서비스를 선택한 뒤 이용자를 선택해 주세요."});let g=async()=>n.saveSelectedUserInfoDraft(),m={...x,genderText:c?"male"===(e=function(e){if(null===e)return"unknown";let t=e.trim().replace(/[^0-9]/g,"");if(t.length<7)return"unknown";switch(t[6]){case"1":case"3":return"male";case"2":case"4":return"female";default:return"unknown"}}(r.residentRegistrationNumber??x.residentRegistrationNumberText))?"남성":"female"===e?"여성":"":x.genderText,residentRegistrationNumberText:c?r.residentRegistrationNumber??x.residentRegistrationNumberText:x.residentRegistrationNumberText,contactText:c?r.contact??x.contactText:x.contactText,mobileText:c?r.phoneNumber??x.mobileText:x.mobileText,addressBaseText:c?r.address??x.addressBaseText:x.addressBaseText,addressDetailText:c?r.addressDetail??x.addressDetailText:x.addressDetailText,postCodeText:c?r.postCode??x.postCodeText:x.postCodeText,memoText:c?r.note??x.memoText:x.memoText,vehicleFuelCostGuided:c?r.vehicleFuelCostNoticeGiven??x.vehicleFuelCostGuided:x.vehicleFuelCostGuided},b={mobileText:void 0!==s.phoneNumber,contactText:void 0!==s.contact,postCodeText:void 0!==s.postCode,residentRegistrationNumberText:void 0!==s.residentRegistrationNumber},j={mobileText:s.phoneNumber,contactText:s.contact,postCodeText:s.postCode,residentRegistrationNumberText:s.residentRegistrationNumber};return(0,t.jsxs)(nP,{ref:p,children:[(0,t.jsx)(l1,{detailFormValues:m,isEditing:c,onStartEdit:()=>{n.startUserInfoEdit()},onCancelEdit:()=>{n.cancelUserInfoEdit()},requestOpenSaveConfirm:()=>n.validateSelectedUserInfoDraftBeforeConfirm(),requestSaveEdit:g,errorFlags:b,errorMessages:j,onChangeField:(e,t)=>{if("vehicleFuelCostGuided"===e){"boolean"==typeof t&&n.updateSelectedUserInfoDraftField("vehicleFuelCostNoticeGiven",t);return}if("string"==typeof t){if("contactText"===e)return void n.updateSelectedUserInfoDraftField("contact",t);if("mobileText"===e)return void n.updateSelectedUserInfoDraftField("phoneNumber",t);if("residentRegistrationNumberText"===e)return void n.updateSelectedUserInfoDraftField("residentRegistrationNumber",t);if("addressBaseText"===e)return void n.updateSelectedUserInfoDraftField("address",t);if("addressDetailText"===e)return void n.updateSelectedUserInfoDraftField("addressDetail",t);if("postCodeText"===e)return void n.updateSelectedUserInfoDraftField("postCode",t);if("memoText"===e)return void n.updateSelectedUserInfoDraftField("note",t)}}}),(0,t.jsx)(n9,{guardianList:f,selectedGuardianId:h,onAddGuardian:e=>n.createGuardian({name:e.name,phoneNumber:e.phone,relationship:e.relation,address:e.address}),onUpdateGuardian:(e,t)=>n.updateGuardian(e,{name:t.name,phoneNumber:t.phone,relationship:t.relation,address:t.address})}),(0,t.jsx)(iq,{}),(0,t.jsxs)(nZ,{type:"button",disabled:n.isDeleting,onClick:()=>{n.openDeleteConfirm()},children:[(0,t.jsx)(B.default.Delete,{size:16}),"삭제하기"]}),n.isDeleteConfirmOpen?(0,t.jsx)(nJ,{children:(0,t.jsxs)(n0,{ref:u,children:[(0,t.jsxs)(n1,{children:[(0,t.jsxs)(n2,{children:[o," 이용자를 삭제하시겠어요?"]}),(0,t.jsxs)(n6,{children:["삭제한 이용자 정보는 복구할 수 없습니다.",(0,t.jsx)("br",{}),"서비스를 제공 받은 이력이 없는 이용자만 삭제할 수 있습니다."]})]}),(0,t.jsxs)(n4,{children:[(0,t.jsx)(n5,{type:"button",disabled:n.isDeleting,onClick:()=>{n.closeDeleteConfirm()},children:"취소하기"}),(0,t.jsx)(n3,{type:"button",disabled:n.isDeleting,onClick:()=>{n.confirmDelete()},children:"삭제하기"})]})]})}):null]})});var l4=e.i(23416),l5=e.i(98733),l3=e.i(88552);let l9=(0,nE.default)((0,t.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"}),"Search");var l8=e.i(44534);let l7=(0,n.observer)(function({clientId:e,onClose:n,onSelectServiceWorker:l,serviceType:d}){let[r,s]=(0,i.useState)(""),c=a.default.data.client.availableServiceWorkerList;(0,i.useEffect)(()=>(c.setQuery({clientId:e,serviceType:d}),()=>c.reset()),[c,e,d]);let f=(0,i.useMemo)(()=>c.data?.map(e=>({serviceWorker:e,_searchableName:l8.default.create(e.name)}))??[],[c.data]).filter(({_searchableName:e})=>l8.default.isMatch(e,r));return(0,t.jsx)(ae,{children:(0,t.jsxs)(at,{onClick:e=>e.stopPropagation(),children:[(0,t.jsxs)(an,{children:[(0,t.jsx)(ai,{}),(0,t.jsx)(al,{children:"연결할 제공인력 선택하기"}),(0,t.jsx)(o.default.Button.Outlined,{type:"button",style:{width:56,height:36},onClick:n,children:(0,t.jsx)(nO.default,{sx:{fontSize:20}})})]}),(0,t.jsx)(aa,{}),(0,t.jsx)(ad,{children:(0,t.jsxs)(ao,{children:[(0,t.jsx)(l9,{sx:{fontSize:22},style:{position:"absolute",left:16,top:"50%",transform:"translateY(-50%)",color:"#9CA3AF"}}),(0,t.jsx)(ar,{placeholder:"제공인력 이름을 검색하세요.",value:r,onChange:e=>s(e.target.value)})]})}),(0,t.jsxs)(ac,{children:["loading"===c.status?(0,t.jsx)(as,{children:"제공인력을 불러오는 중..."}):null,"error"===c.status?(0,t.jsx)(as,{children:"제공인력 목록을 불러오지 못했습니다."}):null,"success"===c.status&&0===f.length?(0,t.jsx)(as,{children:"연결할 수 있는 제공인력이 없습니다."}):null,f.map(({serviceWorker:e})=>(0,t.jsxs)(af,{children:[(0,t.jsxs)(ah,{children:[(0,t.jsx)(ap,{children:e.name}),(0,t.jsxs)(au,{children:[(0,t.jsxs)(ax,{children:[(0,t.jsx)(ag,{children:"주소"}),(0,t.jsx)(am,{}),(0,t.jsx)(ab,{children:[e.address,e.addressDetail].filter(e=>null!==e&&""!==e.trim()).join(" ")||"-"})]}),(0,t.jsxs)(ax,{children:[(0,t.jsx)(ag,{children:"연락처"}),(0,t.jsx)(am,{}),(0,t.jsx)(ab,{children:e.phoneNumber??e.contact??"-"})]})]})]}),(0,t.jsx)(aj,{children:(0,t.jsxs)(aw,{type:"button",onClick:()=>l?.(e.id),children:["선택",(0,t.jsx)(l3.default,{sx:{fontSize:18}})]})})]},e.id))]})]})})}),ae=l.default.div.withConfig({componentId:"zh__sc-c92b9463-0"})`
  position: absolute;
  z-index: 1000;
  inset: 0;

  display: flex;
  justify-content: flex-end;

  padding-top: 69px;
`,at=l.default.div.withConfig({componentId:"zh__sc-c92b9463-1"})`
  display: flex;
  flex-direction: column;

  width: min(417px, 100%);
  height: 100%;

  background: #fff;
  box-shadow: -2px 9px 16px rgb(0 0 0 / 16%);
`,an=l.default.div.withConfig({componentId:"zh__sc-c92b9463-2"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
`,ai=l.default.div.withConfig({componentId:"zh__sc-c92b9463-3"})`
  flex-shrink: 0;
  width: 36px;
  height: 36px;
`,al=l.default.div.withConfig({componentId:"zh__sc-c92b9463-4"})`
  flex: 1;

  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  color: #101828;
  text-align: center;
`,aa=l.default.div.withConfig({componentId:"zh__sc-c92b9463-5"})`
  height: 1px;
  background: #e5e7eb;
`,ad=l.default.div.withConfig({componentId:"zh__sc-c92b9463-6"})`
  padding: 16px;
`,ao=l.default.div.withConfig({componentId:"zh__sc-c92b9463-7"})`
  position: relative;
`,ar=(0,l.default)(o.default.Input.Text).withConfig({componentId:"zh__sc-c92b9463-8"})`
  width: 100%;
  height: 36px;
  padding-left: 48px;
`,as=l.default.div.withConfig({componentId:"zh__sc-c92b9463-9"})`
  padding: 24px 0;
  font-size: 14px;
  color: #667085;
  text-align: center;
`,ac=l.default.div.withConfig({componentId:"zh__sc-c92b9463-10"})`
  overflow-y: auto;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 12px;

  padding: 16px;

  background: #f9fafb;
`,af=l.default.div.withConfig({componentId:"zh__sc-c92b9463-11"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;

  min-height: 148px;
  padding: 16px;
  border: 1px solid #e5e9ef;
  border-radius: 8px;

  background: #fff;
`,ah=l.default.div.withConfig({componentId:"zh__sc-c92b9463-12"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;
`,ap=l.default.div.withConfig({componentId:"zh__sc-c92b9463-13"})`
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
  color: #0a0a0a;
`,au=l.default.div.withConfig({componentId:"zh__sc-c92b9463-14"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-self: stretch;
`,ax=l.default.div.withConfig({componentId:"zh__sc-c92b9463-15"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;
`,ag=l.default.div.withConfig({componentId:"zh__sc-c92b9463-16"})`
  min-width: 42px;
  font-size: 14px;
  line-height: 20px;
  color: #0a0a0a;
`,am=l.default.div.withConfig({componentId:"zh__sc-c92b9463-17"})`
  width: 1px;
  height: 20px;
  background: #e5e7eb;
`,ab=l.default.div.withConfig({componentId:"zh__sc-c92b9463-18"})`
  overflow: hidden;

  min-width: 0;

  font-size: 14px;
  line-height: 20px;
  color: #667085;
  text-overflow: ellipsis;
  white-space: nowrap;
`,aj=l.default.div.withConfig({componentId:"zh__sc-c92b9463-19"})`
  display: flex;
  align-self: stretch;
  justify-content: flex-end;
  margin-top: auto;
`,aw=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-c92b9463-20"})`
  display: flex;
  gap: 4px;
  align-items: center;

  height: 36px;
  padding: 8px 12px;
`;l.default.div.withConfig({componentId:"zh__sc-b19bd4fc-0"})`
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
`;let ay=l.default.div.withConfig({componentId:"zh__sc-b19bd4fc-2"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;

  width: 100%;
`,a_=l.default.div.withConfig({componentId:"zh__sc-b19bd4fc-3"})`
  display: flex;
  align-items: center;
  align-self: stretch;
  min-height: 40px;
`,av=l.default.div.withConfig({componentId:"zh__sc-b19bd4fc-4"})`
  display: flex;
  flex: 1 0 0;
  align-items: center;
  justify-content: space-between;

  min-width: 0;
  min-height: 40px;
`,aC=l.default.h3.withConfig({componentId:"zh__sc-b19bd4fc-5"})`
  margin: 0;

  font-size: 18px;
  font-weight: 700;
  line-height: 20px;
  color: #101828;
`,aI=l.default.div.withConfig({componentId:"zh__sc-b19bd4fc-6"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,az=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-b19bd4fc-7"})`
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
`,aT=l.default.span.withConfig({componentId:"zh__sc-b19bd4fc-8"})`
  padding: 2px 12px;
  border: 1px solid #d1d5db;
  border-radius: 99px;

  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: #45464e;
`,aS=l.default.span.withConfig({componentId:"zh__sc-b19bd4fc-9"})`
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
`;(0,l.default)(o.default.Input.Text).withConfig({componentId:"zh__sc-b19bd4fc-10"})`
  width: 100%;
  height: 28px;
  padding: 0 16px;

  font-size: 16px;
  line-height: 16px;
`,(0,l.default)(o.default.Input.Phone).withConfig({componentId:"zh__sc-b19bd4fc-11"})`
  width: 100%;
  height: 28px;
  padding: 0 16px;

  font-size: 16px;
  line-height: 16px;
`,(0,l.default)(o.default.Input.Contact).withConfig({componentId:"zh__sc-b19bd4fc-12"})`
  width: 100%;
  height: 28px;
  padding: 0 16px;

  font-size: 16px;
  line-height: 16px;
`,(0,l.default)(o.default.Input.PostCode).withConfig({componentId:"zh__sc-b19bd4fc-13"})`
  width: 100%;
  height: 28px;
  padding: 0 16px;

  font-size: 16px;
  line-height: 16px;
`,(0,l.default)(o.default.Input.Select).withConfig({componentId:"zh__sc-b19bd4fc-14"})`
  width: 100%;
  height: 28px;
  font-size: 16px;
  line-height: 16px;
`,(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-b19bd4fc-15"})`
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
`,(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-b19bd4fc-22"})`
  height: 36px;
  padding: 8px 16px;
`,(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-b19bd4fc-23"})`
  height: 36px;
  padding: 8px 16px;
`;let ak=(0,n.observer)(function(){let[e,n]=(0,i.useState)(!1),[l,d]=(0,i.useState)(!1),o=a.default.client.info.byClient,r=a.default.data.serviceWorker.detail,s=o.selectedContract,c=o.selectedClientId,f=s?.serviceType??null,h=s?.serviceWorkerId??null,p=r.data,u=null!==h&&p?.id===h;(0,i.useEffect)(()=>{null!==h&&r.setQuery({id:h})},[r,h]);let x=async e=>{if(null===s||null===c||l)return;d(!0);let[t]=await l4.default.data.contract.update({id:s.id,payload:{serviceWorkerId:e}});(d(!1),null!==t)?a.default.ui.layout.toast.error("제공인력 연결에 실패했습니다. 잠시 후 다시 시도해 주세요."):(await a.default.data.contract.list.refetch(),await a.default.data.client.list.refetch(),n(!1),a.default.ui.layout.toast.success("제공인력을 연결했습니다."))};return(0,t.jsxs)(ay,{children:[(0,t.jsx)(a_,{children:(0,t.jsxs)(av,{children:[(0,t.jsx)(aC,{children:"연결된 제공인력 정보"}),(0,t.jsxs)(aI,{children:[(0,t.jsxs)(az,{type:"button",disabled:!0,children:[(0,t.jsx)(nR.default,{sx:{fontSize:20}}),"수정하기"]}),(0,t.jsxs)(az,{type:"button",disabled:null===s||null===f||l,onClick:()=>n(!0),children:[(0,t.jsx)(nD,{sx:{fontSize:20}}),"추가하기"]})]})]})}),u?(0,t.jsx)(aD,{children:(0,t.jsxs)(aE,{$isSelected:u,children:[(0,t.jsx)(aA,{children:(0,t.jsx)(aO,{children:p.name})}),(0,t.jsxs)(a$,{children:[(0,t.jsxs)(aR,{children:[(0,t.jsx)(aL,{children:"주소"}),(0,t.jsx)(aN,{}),(0,t.jsx)(aP,{children:[p.address,p.addressDetail].filter(e=>null!==e&&""!==e.trim()).join(" ")||"-"})]}),(0,t.jsxs)(aR,{children:[(0,t.jsx)(aL,{children:"연락처"}),(0,t.jsx)(aN,{}),(0,t.jsx)(aP,{children:p.phoneNumber??p.contact??"-"})]}),(0,t.jsxs)(aR,{children:[(0,t.jsx)(aL,{children:"이메일"}),(0,t.jsx)(aN,{}),(0,t.jsx)(aP,{children:"-"})]})]}),(0,t.jsx)(aF,{children:(0,t.jsx)(aM,{children:"연결됨"})})]})}):(0,t.jsxs)(aB,{children:[(0,t.jsx)(nL.default,{sx:{fontSize:24,color:"#494F53"}}),(0,t.jsxs)(aU,{children:[(0,t.jsx)(aW,{children:"연결된 제공인력이 없습니다."}),(0,t.jsx)(aY,{children:"[+추가하기] 버튼을 클릭해 제공인력을 연결해주세요."})]})]}),e&&null!==c&&null!==f?(0,t.jsx)(l7,{clientId:c,onClose:()=>n(!1),onSelectServiceWorker:e=>void x(e),serviceType:f}):null]})}),aE=l.default.div.withConfig({componentId:"zh__sc-bfa96d56-0"})`
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
`,aD=l.default.div.withConfig({componentId:"zh__sc-bfa96d56-1"})`
  overflow: auto hidden;
  display: flex;
  flex-wrap: nowrap;
  gap: 10px;

  width: 100%;
`,aA=l.default.div.withConfig({componentId:"zh__sc-bfa96d56-2"})`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;

  width: 100%;
`,aO=l.default.h4.withConfig({componentId:"zh__sc-bfa96d56-3"})`
  margin: 0;

  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  color: #0a0a0a;
`,a$=l.default.div.withConfig({componentId:"zh__sc-bfa96d56-4"})`
  display: flex;
  flex-direction: column;
  gap: 4px;

  width: 100%;
  padding-bottom: 36px;
`,aR=l.default.div.withConfig({componentId:"zh__sc-bfa96d56-5"})`
  display: flex;
  gap: 8px;
  align-items: flex-start;
  width: 100%;
`,aL=l.default.span.withConfig({componentId:"zh__sc-bfa96d56-6"})`
  width: 52px;
  min-width: 52px;

  font-size: 14px;
  line-height: 20px;
  color: #0a0a0a;
`,aN=l.default.span.withConfig({componentId:"zh__sc-bfa96d56-7"})`
  width: 1px;
  height: 20px;
  background: #e5e7eb;
`,aP=l.default.span.withConfig({componentId:"zh__sc-bfa96d56-8"})`
  min-width: 0;

  font-size: 14px;
  line-height: 20px;
  color: #45464e;
  overflow-wrap: anywhere;
`,aF=l.default.div.withConfig({componentId:"zh__sc-bfa96d56-9"})`
  position: absolute;
  right: 16px;
  bottom: 16px;

  display: flex;
  justify-content: flex-end;
`,aM=l.default.div.withConfig({componentId:"zh__sc-bfa96d56-10"})`
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
`,aB=l.default.div.withConfig({componentId:"zh__sc-bfa96d56-11"})`
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
`,aU=l.default.div.withConfig({componentId:"zh__sc-bfa96d56-12"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: center;
`,aW=l.default.div.withConfig({componentId:"zh__sc-bfa96d56-13"})`
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  color: #494f53;
`,aY=l.default.div.withConfig({componentId:"zh__sc-bfa96d56-14"})`
  font-size: 14px;
  line-height: 20px;
  color: #494f53;
  text-align: center;
`;var aV=e.i(93384),aH=e.i(95649),aG=e.i(2615);function aK(e){return""===e.trim()?"-":e}let aX=["수급자, 차상위","120% 이하","120~160%","160% 초과"],aq=["meal","nutrition"];function aQ(e){return`${e.toLocaleString("ko-KR")} 원`}function aZ(e){return`${e.toLocaleString("ko-KR")}원`}function aJ({serviceCode:e,grade:n,paymentMethodText:l,paymentDayText:a,monthlyUsage:d,serviceFees:o}){let[r,s]=(0,i.useState)(!0),c=e??"meal",f=null===n||!1===Number.isInteger(n)?null:Math.max(0,n-1),h=`${new Date().getMonth()+1}월`,p=d?.providedCount??0,u=d?.scheduledCount??0,x=d?.expectedGovernmentSupportAmount??0,g=d?.expectedCopaymentAmount??0,m=d?.expectedTotalAmount??0,b=u>0?Math.floor(x/u):0,j=u>0?Math.floor(g/u):0;return(0,t.jsxs)(ay,{children:[(0,t.jsx)(a_,{children:(0,t.jsx)(av,{children:(0,t.jsxs)(a0,{children:[(0,t.jsx)(aC,{children:"계약서 세부내역"}),(0,t.jsx)(aT,{children:"30일 기준"})]})})}),(0,t.jsxs)(a1,{children:[(0,t.jsxs)(a2,{children:[(0,t.jsxs)(a6,{children:["납부방법",(0,t.jsx)(a4,{children:aK(l)})]}),(0,t.jsxs)(a6,{children:["납입일",(0,t.jsx)(a4,{children:aK(a)})]})]}),(0,t.jsxs)(a5,{children:[(0,t.jsxs)(a3,{children:[(0,t.jsxs)(a9,{children:[(0,t.jsxs)(a8,{children:[(0,t.jsxs)(a7,{children:[h," 사회서비스 금액 총계"]}),(0,t.jsxs)(de,{children:[(0,t.jsxs)("span",{children:["정부지원금(",aZ(x),")"]}),(0,t.jsx)("span",{"aria-hidden":!0,children:"+"}),(0,t.jsxs)("span",{children:["본인부담금 결제액(",aZ(g),")"]})]})]}),(0,t.jsxs)(dt,{children:["총 ",aQ(m)]})]}),(0,t.jsx)(dn,{}),(0,t.jsxs)(di,{children:[(0,t.jsx)(dl,{children:"세부내역"}),(0,t.jsxs)(dr,{children:[(0,t.jsxs)(ds,{children:[(0,t.jsxs)(dc,{children:[(0,t.jsx)(da,{children:"정부지원금(바우처) 결제액"}),(0,t.jsxs)(df,{children:[(0,t.jsxs)(dh,{children:["1회당 정부지원금(",aZ(b),")"]}),(0,t.jsx)(dh,{children:"x"}),(0,t.jsxs)(dh,{$highlighted:!0,children:["당월 이용 ",p,"회"]})]})]}),(0,t.jsx)(dd,{children:aQ(x)})]}),(0,t.jsxs)(ds,{children:[(0,t.jsxs)(dc,{children:[(0,t.jsx)(da,{children:"본인부담금 결제액"}),(0,t.jsxs)(df,{children:[(0,t.jsxs)(dh,{children:["1회당 본인 부담금(",aZ(j),")"]}),(0,t.jsx)(dh,{children:"x"}),(0,t.jsxs)(dh,{$highlighted:!0,children:["당월 이용 ",p,"회"]})]})]}),(0,t.jsx)(dd,{children:aQ(g)})]})]})]})]}),(0,t.jsxs)(dp,{children:[(0,t.jsx)(du,{children:(0,t.jsxs)(dx,{type:"button","aria-controls":"monthly-fee-guide-table","aria-expanded":r,onClick:()=>{s(e=>!e)},children:[(0,t.jsxs)(dg,{children:[(0,t.jsx)(aV.default,{sx:{fontSize:24,color:"#1C1B1F"}}),(0,t.jsxs)(dj,{children:["월별 서비스 이용금액 안내 예시 (",n??"-","등급/",u,"회 기준 )"]})]}),!0===r?(0,t.jsx)(dm,{"aria-hidden":!0,htmlColor:"#0a0a0a"}):(0,t.jsx)(db,{"aria-hidden":!0,htmlColor:"#0a0a0a"})]})}),!0===r?(0,t.jsxs)(dw,{id:"monthly-fee-guide-table",children:[(0,t.jsxs)("colgroup",{children:[(0,t.jsx)("col",{style:{width:"23px"}}),(0,t.jsx)("col",{style:{width:"40px"}}),(0,t.jsx)("col",{style:{width:"27px"}}),(0,t.jsx)("col",{style:{width:"103px"}}),(0,t.jsx)("col",{style:{width:"auto"}}),(0,t.jsx)("col",{style:{width:"auto"}}),(0,t.jsx)("col",{style:{width:"auto"}})]}),(0,t.jsxs)("thead",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)(dy,{colSpan:3,rowSpan:2,children:"서비스 종류"}),(0,t.jsx)(dy,{rowSpan:2,children:"바우처 총액 (월)"}),(0,t.jsx)(dy,{colSpan:3,children:"소득수준별 금액"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)(dy,{children:"소득수준"}),(0,t.jsx)(dy,{children:"본인부담금"}),(0,t.jsx)(dy,{children:"정부지원금"})]})]}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)(dv,{rowSpan:9}),(0,t.jsx)(d_,{colSpan:6,children:"본인부담 : 월 단위 결제"})]}),aq.flatMap(e=>(o[e]??[]).map((n,i)=>{let l=null!==f&&e===c&&i===f;return(0,t.jsxs)("tr",{children:["meal"===e&&0===i?(0,t.jsxs)(dC,{rowSpan:8,children:[(0,t.jsx)("div",{style:{fontSize:10,fontWeight:400},children:"중장년, 청년"}),(0,t.jsx)("span",{children:"식사∙영양관리"})]}):null,0===i?(0,t.jsx)(dI,{rowSpan:4,children:"meal"===e?"식사관리":"영양관리"}):null,0===i?(0,t.jsx)(dz,{rowSpan:4,children:aZ((o[e]??[]).reduce((e,t)=>e+t.copay+t.voucher,0))}):null,(0,t.jsx)(dT,{$highlighted:l,$isFirstHighlightCell:!0,children:aX[i]}),(0,t.jsx)(dT,{$highlighted:l,children:aZ(n.copay)}),(0,t.jsx)(dT,{$highlighted:l,$isLastHighlightCell:!0,children:aZ(n.voucher)})]},`${e}-${aX[i]}`)}))]})]}):null]})]})]})]})}let a0=l.default.div.withConfig({componentId:"zh__sc-27bdacd5-0"})`
  display: flex;
  gap: 10px;
  align-items: center;
`,a1=l.default.div.withConfig({componentId:"zh__sc-27bdacd5-1"})`
  display: flex;
  gap: 20px;
  align-items: flex-start;

  width: 100%;
  padding: 20px 16px;
  border: 1px solid #e5e9ef;
  border-radius: 8px;

  background: #f6f8ff;
`,a2=l.default.div.withConfig({componentId:"zh__sc-27bdacd5-2"})`
  display: flex;
  flex-direction: column;
  gap: 16px;

  width: 212px;
  min-width: 0;
`,a6=l.default.label.withConfig({componentId:"zh__sc-27bdacd5-3"})`
  display: flex;
  flex-direction: column;
  gap: 4px;

  min-width: 0;

  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: #0a0a0a;
`,a4=l.default.div.withConfig({componentId:"zh__sc-27bdacd5-4"})`
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
`,a5=l.default.div.withConfig({componentId:"zh__sc-27bdacd5-5"})`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 12px;

  min-width: 0;
`,a3=l.default.div.withConfig({componentId:"zh__sc-27bdacd5-6"})`
  display: flex;
  flex-direction: column;
  gap: 24px;

  width: 100%;
  min-width: 0;
  padding: 20px 16px;
  border: 1px solid #cdd8ec;
  border-radius: 8px;

  background: #fff;
`,a9=l.default.div.withConfig({componentId:"zh__sc-27bdacd5-7"})`
  display: flex;
  gap: 16px;
  align-items: flex-start;
  justify-content: space-between;

  width: 100%;
`,a8=l.default.div.withConfig({componentId:"zh__sc-27bdacd5-8"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 0;
`,a7=l.default.h4.withConfig({componentId:"zh__sc-27bdacd5-9"})`
  margin: 0;

  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  color: #0a0a0a;
`,de=l.default.div.withConfig({componentId:"zh__sc-27bdacd5-10"})`
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
`,dt=l.default.div.withConfig({componentId:"zh__sc-27bdacd5-11"})`
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  color: #e7000b;
`,dn=l.default.hr.withConfig({componentId:"zh__sc-27bdacd5-12"})`
  width: 100%;
  margin: 0;
  border: 0;
  border-top: 1px solid #e5e7eb;
`,di=l.default.div.withConfig({componentId:"zh__sc-27bdacd5-13"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`,dl=l.default.div.withConfig({componentId:"zh__sc-27bdacd5-14"})`
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  color: #0a0a0a;
`,da=l.default.div.withConfig({componentId:"zh__sc-27bdacd5-15"})`
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  color: #0a0a0a;
`,dd=l.default.div.withConfig({componentId:"zh__sc-27bdacd5-16"})`
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  color: #0a0a0a;
`,dr=l.default.div.withConfig({componentId:"zh__sc-27bdacd5-17"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`,ds=l.default.div.withConfig({componentId:"zh__sc-27bdacd5-18"})`
  display: flex;
  gap: 16px;
  align-items: flex-start;
  justify-content: space-between;

  width: 100%;
`,dc=l.default.div.withConfig({componentId:"zh__sc-27bdacd5-19"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 0;
`,df=l.default.div.withConfig({componentId:"zh__sc-27bdacd5-20"})`
  display: flex;
  gap: 4px;
  align-items: center;
  min-width: 0;
`,dh=l.default.span.withConfig({componentId:"zh__sc-27bdacd5-21"})`
  font-size: 14px;
  font-weight: ${({$highlighted:e})=>!0===e?700:400};
  line-height: 20px;
  color: ${({$highlighted:e})=>!0===e?"#e7000b":"#0a0a0a"};
  white-space: nowrap;
`,dp=l.default.div.withConfig({componentId:"zh__sc-27bdacd5-22"})`
  display: flex;
  flex-direction: column;
  gap: 24px;

  width: 100%;
  padding: 20px 16px;
  border: 1px solid #e5e9ef;
  border-radius: 8px;

  background: #fff;
`,du=l.default.div.withConfig({componentId:"zh__sc-27bdacd5-23"})`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: space-between;

  width: 100%;
`,dx=l.default.button.withConfig({componentId:"zh__sc-27bdacd5-24"})`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 0;
  border: 0;

  background: transparent;
`,dg=l.default.div.withConfig({componentId:"zh__sc-27bdacd5-25"})`
  display: flex;
  gap: 4px;
  align-items: center;
  min-width: 0;
`,dm=(0,l.default)(aG.default).withConfig({componentId:"zh__sc-27bdacd5-26"})`
  flex-shrink: 0;
  font-size: 24px;
`,db=(0,l.default)(aH.default).withConfig({componentId:"zh__sc-27bdacd5-27"})`
  flex-shrink: 0;
  font-size: 24px;
`,dj=l.default.h4.withConfig({componentId:"zh__sc-27bdacd5-28"})`
  margin: 0;

  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  color: #494f53;
  white-space: nowrap;
`,dw=l.default.table.withConfig({componentId:"zh__sc-27bdacd5-29"})`
  table-layout: fixed;
  border-collapse: collapse;
  width: 100%;
  border: 1px solid #58616a;

  @media (width <= 900px) {
    font-size: 12px;
  }
`,dy=l.default.th.withConfig({componentId:"zh__sc-27bdacd5-30"})`
  padding: 8px 4px;
  border: 1px solid #58616a;

  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  color: #0a0a0a;
  text-align: center;
  vertical-align: middle;

  background: #f0f0f0;
`,d_=l.default.td.withConfig({componentId:"zh__sc-27bdacd5-31"})`
  padding: 4px;
  border: 1px solid #58616a;

  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  color: #0a0a0a;
  text-align: center;

  background: #fafafa;
`,dv=l.default.td.withConfig({componentId:"zh__sc-27bdacd5-32"})`
  padding: 4px;
  border: 1px solid #58616a;

  font-size: 10px;
  line-height: 14px;
  color: #0a0a0a;
  text-align: center;

  background: #fafafa;
`,dC=l.default.td.withConfig({componentId:"zh__sc-27bdacd5-33"})`
  padding: 4px;
  border: 1px solid #58616a;

  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  color: #0a0a0a;
  text-align: center;
  vertical-align: middle;

  background: #fafafa;
`,dI=l.default.td.withConfig({componentId:"zh__sc-27bdacd5-34"})`
  padding: 4px;
  border: 1px solid #58616a;

  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  color: #0a0a0a;
  text-align: center;
  vertical-align: middle;

  background: #fafafa;
`,dz=l.default.td.withConfig({componentId:"zh__sc-27bdacd5-35"})`
  padding: 4px;
  border: 1px solid #58616a;

  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  color: #0a0a0a;
  text-align: center;
  vertical-align: middle;

  background: #fff;
`,dT=l.default.td.withConfig({componentId:"zh__sc-27bdacd5-36"})`
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
`,dS=["1인가구","취약가구","출산가구","자립준비","학교생활","직장생활","보호자 일시 부재","나머지 가구구성원의 직장생활 등"],dk=[["1구간","465점 이상","8,293,000","면제","20,000","216,200","216,200","216,200","216,200"],["2구간","435~465미만","7,774,000","면제","20,000","216,200","216,200","216,200","216,200"],["3구간","405~435미만","7,257,000","면제","20,000","216,200","216,200","216,200","216,200"],["4구간","375~405미만","6,739,000","면제","20,000","216,200","216,200","216,200","216,200"],["5구간","345~375미만","6,221,000","면제","20,000","216,200","216,200","216,200","216,200"],["6구간","315~345미만","5,703,000","면제","20,000","216,200","216,200","216,200","216,200"],["7구간","285~315미만","5,181,000","면제","20,000","207,200","216,200","216,200","216,200"],["8구간","255~285미만","4,665,000","면제","20,000","186,600","216,200","216,200","216,200"],["9구간","225~255미만","4,148,000","면제","20,000","165,900","216,200","216,200","216,200"],["10구간","195~225미만","3,629,000","면제","20,000","145,100","216,200","216,200","216,200"],["11구간","165~195미만","3,112,000","면제","20,000","124,400","186,700","216,200","216,200"],["12구간","135~165미만","2,593,000","면제","20,000","103,700","155,500","207,400","216,200"],["13구간","105~135미만","2,076,000","면제","20,000","83,000","124,500","166,000","207,600"],["14구간","75~105미만","1,558,000","면제","20,000","62,300","93,400","124,600","155,800"],["15구간","42~75미만","1,040,000","면제","20,000","41,600","62,400","83,200","104,000"],["특례","특례 대상","7,257,000","면제","20,000","29,300","44,000","58,700","73,400"]],dE=["grade","score","monthlyLimit","typeA","typeB","typeC","typeD","typeE","typeF"];function dD({additionalBenefitTypes:e,benefitDecisionPeriod:n,contractId:l,grade:d,incomeCategory:r,monthlyUsage:s,virtualAccountNumber:c}){var f,h;let p,u,[x,g]=(0,i.useState)(!1),[m,b]=(0,i.useState)(!1),[j,w]=(0,i.useState)(r),[y,_]=(0,i.useState)(c??""),[v,C]=(0,i.useState)(e??[]),[I,z]=(0,i.useState)(!0),T=void 0!==l,S=d$(d),k=dR(r),E=function(e,t){if(null===e||null===t)return null;let n=d$(e),i=dk.find(e=>e[0]===n);if(void 0===i)return null;let l=dR(t);if(null===l)return null;let a=i[l];if(void 0===a)return null;let d="면제"===a?0:Number(a.replaceAll(",","")),o=Number(i[2].replaceAll(",",""));return Number.isNaN(d)||Number.isNaN(o)?null:{copaymentAmount:d,monthlyLimitAmount:o}}(d,r),D=E?.monthlyLimitAmount??s?.expectedTotalAmount??0,A=E?.copaymentAmount??s?.expectedCopaymentAmount??0,O=null===E?s?.expectedGovernmentSupportAmount??0:D-A,$=`${new Date().getMonth()+1}월`,R=async()=>{if(void 0===l||m)return;b(!0);let[e]=await l4.default.data.contract.update({id:l,payload:{incomeCategory:j??void 0,virtualAccountNumber:y,additionalBenefitTypes:v}});null===e?(await a.default.data.contract.list.refetch(),g(!1)):a.default.ui.layout.toast.error("계약서 세부내역 저장에 실패했습니다."),b(!1)};return(0,t.jsxs)(ay,{children:[(0,t.jsx)(a_,{children:(0,t.jsxs)(av,{children:[(0,t.jsxs)(dO,{children:[(0,t.jsx)(aC,{children:"계약서 세부내역"}),x&&T?(0,t.jsx)(aS,{children:"수정 진행중"}):null]}),x&&T?(0,t.jsxs)(aI,{children:[(0,t.jsxs)(az,{type:"button",onClick:()=>{g(!1)},disabled:m,children:[(0,t.jsx)(iF.default,{sx:{fontSize:20}}),"수정 취소"]}),(0,t.jsxs)(az,{type:"button",onClick:()=>void R(),disabled:m,children:[(0,t.jsx)(nA,{sx:{fontSize:20}}),"수정 저장"]})]}):T?(0,t.jsxs)(az,{type:"button",onClick:()=>{T&&(w(r),_(c??""),C(e??[]),g(!0))},children:[(0,t.jsx)(nR.default,{sx:{fontSize:20}}),"수정하기"]}):null]})}),(0,t.jsxs)(eU,{children:[(0,t.jsxs)(eW,{$width:193,children:[(0,t.jsx)(eY,{children:"수급결정시기"}),(0,t.jsx)(o.default.Input.Date,{value:n??"",readOnly:!0,style:{...eV,width:"100%",height:36}})]}),(0,t.jsxs)(eW,{$width:213,children:[(0,t.jsx)(eY,{children:"가상계좌번호"}),(0,t.jsx)(o.default.Input.Text,{value:x?y:c??"",placeholder:"가상계좌를 입력해주세요.",inputMode:"numeric",readOnly:!x,onChange:e=>_(e.target.value),style:eV})]}),(0,t.jsxs)(eW,{children:[(0,t.jsx)(eY,{children:"수급여부"}),(0,t.jsxs)(dN,{children:[(0,t.jsxs)(dP,{children:[(0,t.jsx)(dL,{checked:(x?j:r)==="TYPE_A",disabled:!x,onChange:()=>w("TYPE_A")}),"기초생활수급자"]}),(0,t.jsxs)(dP,{children:[(0,t.jsx)(dL,{checked:(x?j:r)==="TYPE_B",disabled:!x,onChange:()=>w("TYPE_B")}),"차상위계층"]}),(0,t.jsxs)(dP,{children:[(0,t.jsx)(dL,{checked:["TYPE_C","TYPE_D","TYPE_E","TYPE_F"].includes(x?j??"":r??""),disabled:!x,onChange:()=>{null!==j&&["TYPE_C","TYPE_D","TYPE_E","TYPE_F"].includes(j)||w("TYPE_C")}}),"일반"]})]})]})]}),(0,t.jsx)(eU,{children:(0,t.jsxs)(eW,{children:[(0,t.jsx)(eY,{children:"추가급여대상 여부"}),(0,t.jsx)(dF,{children:dS.map(n=>(0,t.jsxs)(dM,{children:[(0,t.jsx)(dL,{checked:(x?v:e??[]).includes(n),disabled:!x,onChange:()=>{C(e=>e.includes(n)?e.filter(e=>e!==n):[...e,n])}}),n]},n))})]})}),(0,t.jsxs)(dB,{children:[(0,t.jsxs)(dU,{children:[(0,t.jsxs)(dW,{children:[$," 바우처 월 한도액 및 정산 총액"]}),(0,t.jsxs)(dY,{children:[(0,t.jsxs)(dV,{children:[(0,t.jsx)(dH,{children:"총 월한도액"}),(0,t.jsx)(dG,{children:"월한도액 + 본인부담금"}),(0,t.jsx)(dK,{children:dA(D)})]}),(0,t.jsx)(dq,{"aria-hidden":!0,children:"="}),(0,t.jsxs)(dV,{children:[(0,t.jsx)(dH,{children:"정부지원금"}),(0,t.jsx)(dG,{children:"월한도액 - 본인부담금"}),(0,t.jsx)(dK,{children:dA(O)})]}),(0,t.jsx)(dq,{"aria-hidden":!0,children:"+"}),(0,t.jsxs)(dV,{children:[(0,t.jsx)(dH,{children:"본인부담금"}),(0,t.jsx)(dG,{children:(f=d,h=r,p=null===f?"":f.startsWith("SPECIAL")?"특례":`${f}구간`,u="TYPE_A"===h?"[가]형 생계·의료급여 수급자":"TYPE_B"===h?"[나]형 차상위계층":"TYPE_C"===h?"[다]형 중위소득 70% 이하":"TYPE_D"===h?"[라]형 중위소득 120% 이하":"TYPE_E"===h?"[마]형 중위소득 180% 이하":"TYPE_F"===h?"[바]형 중위소득 180% 초과":"",`${p} ${u}`.trim())}),(0,t.jsxs)(dK,{$accent:!0,children:[A.toLocaleString("ko-KR")," ",(0,t.jsx)(dX,{children:"원"})]})]})]})]}),(0,t.jsxs)(dQ,{children:[(0,t.jsxs)(dZ,{type:"button","aria-expanded":I,"aria-controls":"disability-benefit-guide",onClick:()=>z(e=>!e),children:[(0,t.jsxs)(dJ,{children:[(0,t.jsx)(aV.default,{sx:{fontSize:24,color:"#1c1b1f"}}),"활동지원급여 월한도액 및 소득구분별 본인부담금 통합 기준표"]}),I?(0,t.jsx)(aG.default,{"aria-hidden":!0}):(0,t.jsx)(aH.default,{"aria-hidden":!0})]}),I?(0,t.jsxs)(d0,{id:"disability-benefit-guide",children:[(0,t.jsxs)("thead",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)(d1,{rowSpan:2,$muted:!0,children:"구간"}),(0,t.jsx)(d1,{rowSpan:2,children:"종합점수"}),(0,t.jsx)(d1,{rowSpan:2,$monthlyLimit:!0,children:"월한도액"}),(0,t.jsx)(d1,{colSpan:6,$benefitHeader:!0,children:"본인부담금"})]}),(0,t.jsx)("tr",{children:["[가형]\n생계·의료급여 수급자","[나형]\n차상위계층","[다형]\n중위소득\n70% 이하","[라형]\n중위소득\n120% 이하","[마형]\n중위소득\n180% 이하","[바형]\n중위소득\n180% 초과"].map(e=>(0,t.jsx)(d1,{children:e},e))})]}),(0,t.jsx)("tbody",{children:dk.map(e=>(0,t.jsx)("tr",{children:e.map((n,i)=>(0,t.jsx)(d2,{$muted:0===i||2===i,$monthlyLimit:2===i,$selected:e[0]===S&&(2===i||i===k),children:n},`${e[0]}-${dE[i]}`))},e[0]))})]}):null]})]})]})}function dA(e){return`${e.toLocaleString("ko-KR")} 원`}let dO=l.default.div.withConfig({componentId:"zh__sc-bcf5d5b7-0"})`
  display: flex;
  gap: 8px;
  align-items: center;
`;function d$(e){return null===e?null:e.startsWith("SPECIAL")?"특례":`${e}구간`}function dR(e){return null===e?null:({TYPE_A:3,TYPE_B:4,TYPE_C:5,TYPE_D:6,TYPE_E:7,TYPE_F:8})[e]}let dL=(0,l.default)(o.default.Input.Check).attrs({$iconSizeRatio:1.5}).withConfig({componentId:"zh__sc-bcf5d5b7-1"})`
  width: 24px;
  height: 24px;
`,dN=l.default.div.withConfig({componentId:"zh__sc-bcf5d5b7-2"})`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 16px;
  align-items: center;

  min-height: 36px;
`,dP=l.default.label.withConfig({componentId:"zh__sc-bcf5d5b7-3"})`
  display: inline-flex;
  gap: 8px;
  align-items: center;

  min-height: 36px;

  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: #000;
  white-space: nowrap;
`,dF=l.default.div.withConfig({componentId:"zh__sc-bcf5d5b7-4"})`
  display: flex;
  flex-wrap: wrap;
  gap: 0 24px;
  align-items: center;
`,dM=l.default.label.withConfig({componentId:"zh__sc-bcf5d5b7-5"})`
  display: inline-flex;
  gap: 8px;
  align-items: center;

  height: 36px;

  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  color: #000;
`,dB=l.default.div.withConfig({componentId:"zh__sc-bcf5d5b7-6"})`
  display: flex;
  flex-direction: column;
  gap: 10px;

  width: 100%;
  padding: 20px 16px;
  border: 1px solid #e5e9ef;
  border-radius: 8px;

  background: #f6f8ff;
`,dU=l.default.div.withConfig({componentId:"zh__sc-bcf5d5b7-7"})`
  display: flex;
  flex-direction: column;
  gap: 10px;

  padding: 16px;
  border: 1px solid #e5e9ef;
  border-radius: 8px;

  background: #fff;
`,dW=l.default.h3.withConfig({componentId:"zh__sc-bcf5d5b7-8"})`
  margin: 0;

  font-size: 18px;
  font-weight: 700;
  line-height: normal;
  color: #0a0a0a;
`,dY=l.default.div.withConfig({componentId:"zh__sc-bcf5d5b7-9"})`
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: space-between;
`,dV=l.default.div.withConfig({componentId:"zh__sc-bcf5d5b7-10"})`
  position: relative;

  flex: 1;

  min-width: 0;
  padding: 20px 16px;
  border: 1px solid #cdd8ec;
  border-radius: 8px;

  background: #fff;
`,dH=l.default.strong.withConfig({componentId:"zh__sc-bcf5d5b7-11"})`
  display: block;
  font-size: 18px;
  font-weight: 700;
  line-height: normal;
`,dG=l.default.span.withConfig({componentId:"zh__sc-bcf5d5b7-12"})`
  display: block;
  margin-top: 8px;
  font-size: 14px;
  line-height: normal;
`,dK=l.default.strong.withConfig({componentId:"zh__sc-bcf5d5b7-13"})`
  position: absolute;
  top: 20px;
  right: 16px;

  font-size: 18px;
  font-weight: 700;
  line-height: normal;
  color: ${({$accent:e})=>!0===e?"#f00":"#0a0a0a"};
`,dX=l.default.span.withConfig({componentId:"zh__sc-bcf5d5b7-14"})`
  color: #0a0a0a;
`,dq=l.default.strong.withConfig({componentId:"zh__sc-bcf5d5b7-15"})`
  flex: 0 0 20px;
  font-size: 18px;
  text-align: center;
`,dQ=l.default.div.withConfig({componentId:"zh__sc-bcf5d5b7-16"})`
  overflow-x: auto;

  padding: 16px 10px 10px;
  border: 1px solid #e5e9ef;
  border-radius: 8px;

  background: #fff;
`,dZ=l.default.button.withConfig({componentId:"zh__sc-bcf5d5b7-17"})`
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
`,dJ=l.default.span.withConfig({componentId:"zh__sc-bcf5d5b7-18"})`
  display: flex;
  gap: 4px;
  align-items: center;

  font-size: 18px;
  font-weight: 700;
  white-space: nowrap;
`,d0=l.default.table.withConfig({componentId:"zh__sc-bcf5d5b7-19"})`
  table-layout: fixed;
  border-collapse: collapse;

  width: 100%;
  min-width: 915px;

  font-size: 14px;
  color: #0a0a0a;
`,d1=l.default.th.withConfig({componentId:"zh__sc-bcf5d5b7-20"})`
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
`,d2=l.default.td.withConfig({componentId:"zh__sc-bcf5d5b7-21"})`
  height: 40px;
  padding: 4px 6px;
  border: ${({$selected:e})=>!0===e?"2px solid #FB2C36":"1px solid #58616a"};

  line-height: normal;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;

  background: ${({$monthlyLimit:e,$muted:t})=>!0===e?"#f6f8ff":!0===t?"#f9fafb":"#fff"};
`,d6=(0,n.observer)(function(){let e=a.default.client.info.byClient,n=e.currentServiceType,l=e.selectedContract,d="DISABILITY_ACTIVITY_SUPPORT"===n,[o,r]=(0,i.useState)(null),s=function(e){if(null===e)return null;if(1===e||2===e||3===e||4===e)return e;if("string"==typeof e){let t=Number(e.trim().replace("등급",""));if(1===t||2===t||3===t||4===t)return t}return null}(l?.grade??null),c=a.default.data.organization.serviceList.data?.serviceStandardFee.reduce((e,t)=>{let n="MEAL"===t.type?"meal":"NUTRITION"===t.type?"nutrition":null;return null!==n&&(e[n]=t.fee),e},{})??{};return(0,i.useEffect)(()=>{let e=l?.id,[t,i]=l5.default.create(new Date().getFullYear(),new Date().getMonth()+1);if(null===n||void 0===e||null!==t||null===i)return;let a=!0;return(async t=>{let[i,l]=await l4.default.data.serviceProvision.getMonthlyStatus({serviceType:n,targetYearMonth:t});if(!a)return;let d=l?.rows.find(t=>t.contractId===e);null!==i||void 0===d?r(null):r({expectedCopaymentAmount:d.expectedCopaymentAmount,expectedGovernmentSupportAmount:d.expectedGovernmentSupportAmount,expectedTotalAmount:d.expectedTotalAmount,providedCount:d.providedCount,scheduledCount:l.schedule.length})})(i),()=>{a=!1}},[l?.id,n]),(0,t.jsxs)(d4,{children:[(0,t.jsx)(ak,{}),d?(0,t.jsx)(dD,{additionalBenefitTypes:l?.additionalBenefitTypes??null,benefitDecisionPeriod:function(e){if(null!==e&&"benefitDecisionPeriod"in e)return"string"==typeof e.benefitDecisionPeriod?e.benefitDecisionPeriod:void 0}(l),contractId:l?.id,grade:l?.grade??null,incomeCategory:l?.incomeCategory??null,monthlyUsage:o,virtualAccountNumber:l?.virtualAccountNumber??null},l?.id??"no-contract"):(0,t.jsx)(aJ,{serviceCode:null===n?null:"MEAL"===n?"meal":"nutrition",grade:s,paymentMethodText:"CMS 자동이체",paymentDayText:"매월 25일",monthlyUsage:o,serviceFees:c})]})}),d4=l.default.div.withConfig({componentId:"zh__sc-cbb8903d-0"})`
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
`;var d5=e.i(27997),d3=e.i(34944);let d9=(0,n.observer)(function({disabled:e=!1}){let n=a.default.client.info.byClient.docs,i=a.default.client.info.byClient,l=n.contractsOfSelectedClient,d=i.selectedContractId,o=l.some(e=>e.status===d3.default.ACTIVE);return(0,t.jsxs)(d8,{children:[(0,t.jsx)(d7,{children:"계약 회차"}),(0,t.jsx)(oe,{value:d??"",disabled:e||0===l.length,onChange:e=>{let t=e.target.value;i.setSelectedContractId(""===t?null:t)},children:l.map((e,n)=>{let i,a,d,r,s,c;return i=e.serviceStartDate??"",a=e.serviceEndDate??"",d=e.status===d3.default.ACTIVE,r=o&&""!==i&&(0,nT.isFutureContractStart)(i),s=""!==i&&""!==a?`${i.replaceAll("-",".")} ~ ${a.replaceAll("-",".")}`:"-",c=`${l.length-n}차 계약 (${s})${d?" [진행중]":r?" [재계약 중]":""}`,(0,t.jsx)("option",{value:e.id,children:c},e.id)})})]})}),d8=l.default.div.withConfig({componentId:"zh__sc-4a58d4b2-0"})`
  display: flex;
  gap: 8px;
  align-items: center;
  min-width: 0;
`,d7=l.default.p.withConfig({componentId:"zh__sc-4a58d4b2-1"})`
  margin: 0;

  font-size: 18px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 111.111% */
  color: #0a0a0a;
  text-align: center;
  white-space: nowrap;
`,oe=(0,l.default)(o.default.Input.Select).withConfig({componentId:"zh__sc-4a58d4b2-2"})`
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
`,ot=(0,n.observer)(function(){let e,[n,l]=(0,i.useState)(!1),[d,r]=(0,i.useState)(!1),[s,c]=(0,i.useState)(!1),[f,h]=(0,i.useState)({key:"",date:""}),p=(0,i.useRef)(null),u=a.default.client.info.byClient,x=a.default.modal.clientCreate,{selectedClientId:g,selectedContract:m,currentServiceType:b}=u,j=u.contractsOfSelectedClient,w=u.selectedClient,y=null!==g&&null!==w,_=u.isContractDetailEditing,v=u.selectedContractDetailDraftContractStartDate,C=u.selectedContractDetailDraftContractEndDate,I=u.selectedContractDetailDraftStatus,z=[m?.id??"",b??"",v??m?.contractStartDate??"",_?"editing":"readonly",I??m?.status??""].join("|"),T=f.key===z?f.date:"";if((0,i.useEffect)(()=>{if(!y||!_||n||d||s)return;let e=e=>{let t=e.target;t instanceof Element&&null!==t.closest('[aria-label="Date picker"]')||t instanceof Element&&(null!==t.closest('[role="listbox"]')||null!==t.closest('[role="option"]')||null!==t.closest("[data-radix-select-viewport]")||null!==t.closest("[data-radix-popper-content-wrapper]"))||t instanceof Node&&null!==p.current&&p.current.contains(t)||u.cancelContractDetailEdit()};return document.addEventListener("pointerdown",e),()=>{document.removeEventListener("pointerdown",e)}},[u,y,_,n,d,s]),(0,i.useEffect)(()=>{let e=m?.id,t=m?.contractStartDate??"",n=m?.status??d3.default.ACTIVE,i=(I??n)===d3.default.TERMINATED;if(!y||!_||!i||void 0===e||null===b||!eF.default.is(t))return;let l=function(e,t){if(!eF.default.is(e)||!eF.default.is(t))return[];let[n,i]=e.split("-"),[l,a]=t.split("-"),d=Number(n),o=Number(i),r=Number(l),s=Number(a);if(!Number.isInteger(d)||!Number.isInteger(o)||!Number.isInteger(r)||!Number.isInteger(s))return[];let c=new Date(d,o-1,1),f=new Date(r,s-1,1);if(c.getTime()>f.getTime())return[];let h=[],p=new Date(c);for(;p.getTime()<=f.getTime();){let[e,t]=nz.default.yearMonth.create(p.getFullYear(),p.getMonth()+1);null===e&&h.push(t),p.setMonth(p.getMonth()+1)}return h}(t,(0,nT.getTodayCalendarDateString)());if(0===l.length)return;let a=!0;return(async()=>{let t=await Promise.all(l.map(e=>l4.default.data.serviceProvision.getMonthlyStatus({serviceType:b,targetYearMonth:e})));a&&h({key:z,date:t.reduce((t,[n,i])=>{if(null!==n||null===i)return t;let l=function(e,t){let n=e.find(e=>e.contractId===t);if(void 0===n)return"";let i=(0,nT.getTodayCalendarDateString)();return n.cells.reduce((e,t)=>!1===t.isPending&&"PROVIDED"!==t.status||!eF.default.is(t.serviceDate)||i<t.serviceDate?e:!eF.default.is(e)||e<t.serviceDate?t.serviceDate:e,"")}(i.rows,e);return eF.default.is(l)&&(!eF.default.is(t)||t<l)?l:t},"")})})(),()=>{a=!1}},[v,I,b,y,_,z,m?.contractStartDate,m?.id,m?.status]),!y||null===w)return(0,t.jsx)(oC,{children:"서비스를 선택한 뒤 이용자를 선택해 주세요."});let S=w.name,k=m?.grade,E="string"==typeof k&&k.trim().length>0?k.includes("등급")?k:`${k}등급`:"-",D=null===b?"-":`일상돌봄 ${function(e){switch(e){case"MEAL":return"식사관리 서비스";case"NUTRITION":return"영양관리 서비스";case"DISABILITY_ACTIVITY_SUPPORT":return"장애인 활동지원 서비스"}}(b)} - ${function(e){switch(e){case"MEAL":return"500901";case"NUTRITION":return"500401";case"DISABILITY_ACTIVITY_SUPPORT":return"HWG001"}}(b)}`,A=m?.status??d3.default.ACTIVE,O=I??A,$=_?O:m?.status??"UNCONTRACTED",R=O===d3.default.COMPLETED,L=O===d3.default.TERMINATED,N=m?.contractStartDate??"",P=v??N,F=nS(P),M=m?.contractEndDate??"",U=C??M,W=nS(U),Y=nS(m?.serviceStartDate??""),V=m?.serviceEndDate??"",H=nS(V),G=(0,nT.getContractExpirationReminder)({contractStatus:O,contractEndDate:M,hasRenewingContract:(0,nT.hasRenewingContract)(j)}),K=!_&&null!==G,X=L?W:H,q=(0,nT.getTodayCalendarDateString)().replaceAll("-","."),Q=(e=(0,nT.getTodayCalendarDateString)(),eF.default.is(V)&&V<e?V:e),Z=!!eF.default.is(V)&&(0,nT.getTodayCalendarDateString)()<V,J=Z?`오늘(${q})로 계약이 해지되며, 계약 종료일이 변경됩니다.`:`계약이 해지되며, 계약 종료일이 ${nS(Q)}로 변경됩니다.`,ee=`${nk(N)} ~ ${nk(M)}`;return(0,t.jsxs)(on,{ref:p,children:[(0,t.jsx)(oi,{children:(0,t.jsxs)(ol,{children:[(0,t.jsxs)(oa,{children:[(0,t.jsxs)(od,{children:[(0,t.jsx)(oo,{children:S}),(0,t.jsxs)(or,{children:[(0,t.jsx)(os,{children:E}),(0,t.jsx)(os,{children:D})]}),_?(0,t.jsx)(nH,{children:"수정 진행중"}):null]}),!0===_?(0,t.jsxs)(nY,{children:[(0,t.jsxs)(nV,{type:"button",onClick:()=>{u.cancelContractDetailEdit()},children:[(0,t.jsx)(iF.default,{sx:{fontSize:20}}),"수정 취소"]}),(0,t.jsxs)(nV,{type:"button",onClick:()=>{l(!0)},children:[(0,t.jsx)(lg.default,{sx:{fontSize:20}}),"수정 저장"]})]}):(0,t.jsxs)(nV,{type:"button",disabled:R,onClick:()=>{R||u.startContractDetailEdit()},children:[(0,t.jsx)(nR.default,{sx:{fontSize:20}}),"수정하기"]})]}),(0,t.jsxs)(of,{children:[(0,t.jsxs)(op,{children:[(0,t.jsx)(ow,{children:"계약 상태"}),(0,t.jsx)(og,{children:(0,t.jsxs)(om,{value:$,disabled:!_||null===m,onChange:e=>{let t=e.target.value;if((0,d3.isSelectableContractStatus)(t)&&t!==O){if(t===d3.default.TERMINATED)return void r(!0);if(t===d3.default.ACTIVE)return void c(!0);u.updateSelectedContractDetailDraftStatus(t)}},children:[null===m?(0,t.jsx)("option",{value:"UNCONTRACTED",children:"미계약"}):null,(0,t.jsx)("option",{value:d3.default.ACTIVE,children:"계약중"}),(0,t.jsx)("option",{value:d3.default.TERMINATED,children:"해지"}),O===d3.default.COMPLETED?(0,t.jsx)("option",{value:d3.default.COMPLETED,children:"완료"}):null]})})]}),null===m?(0,t.jsxs)(oj,{type:"button",onClick:()=>{x.show("create",b??"MEAL",w),u.closeClientDetail(),u.setSelectedClientId(null)},children:[(0,t.jsx)(B.default.ContractEdit,{size:16}),"계약하기"]}):K?(0,t.jsxs)(ob,{children:[null!==G?(0,t.jsxs)(d5.default,{$color:G.color,children:["계약 만료 ",G.remainingDays,"일 남음"]}):null,(0,t.jsxs)(oj,{type:"button",onClick:()=>{x.show("renew",m?.serviceType??"MEAL")},children:[(0,t.jsx)(B.default.ContractEdit,{size:16}),"재계약 하기"]})]}):null]}),(0,t.jsx)(oh,{children:(0,t.jsx)(d9,{disabled:_})}),(0,t.jsxs)(oc,{children:[(0,t.jsxs)(op,{children:[(0,t.jsx)(ow,{children:"계약 기간"}),!0!==_||L?(0,t.jsx)(oy,{children:F}):(0,t.jsx)(ou,{children:(0,t.jsx)(o.default.Input.Date,{style:{width:180,height:28,paddingLeft:16,fontSize:16},value:P,readOnly:!1,isDateSelectable:e=>!eF.default.is(V)||e<=V,onChange:e=>{u.updateSelectedContractDetailDraftContractStartDate(e)},placeholder:"YYYY-MM-DD"})}),(0,t.jsx)(o_,{children:"~"}),!0===_&&L?(0,t.jsx)(ox,{children:(0,t.jsx)(o.default.Input.Date,{style:{width:180,height:28,paddingLeft:16,fontSize:16},value:U,readOnly:!1,isDateSelectable:e=>!(eF.default.is(P)&&e<P||eF.default.is(T)&&e<T||eF.default.is(V)&&V<e),onChange:e=>{u.updateSelectedContractDetailDraftContractEndDate(e)},placeholder:"YYYY-MM-DD"})}):(0,t.jsx)(oy,{children:X})]}),(0,t.jsx)(ov,{}),(0,t.jsxs)(op,{children:[(0,t.jsx)(ow,{children:"서비스 기간"}),(0,t.jsx)(oy,{children:Y}),(0,t.jsx)(o_,{children:"~"}),(0,t.jsx)(oy,{children:H})]})]})]})}),(0,t.jsx)(lH,{isOpen:n,title:"계약 정보를 저장할까요?",description:`수정된 정보는 연결된 서류의 자동입력 항목에 함께 반영됩니다.
이미 출력했거나 최종확인한 서류는 다시 확인이 필요할 수 있습니다.`,cancelLabel:"취소하기",confirmLabel:"저장 및 모든 서류에 반영",onCancel:()=>{l(!1)},onConfirm:()=>{u.saveSelectedContractDetailDraft().then(e=>{!0===e&&l(!1)})}}),(0,t.jsx)(lH,{isOpen:d,title:Z?"계약을 중도 해지 하시겠습니까?":"계약을 해지 하시겠습니까?",description:`${J}
해지 시, 계약 시작일은 수정할 수 없으며 계약 종료일은 수정할 수 있습니다.`,cancelLabel:"취소하기",confirmLabel:"변경하기",onCancel:()=>{r(!1)},onConfirm:()=>{u.updateSelectedContractDetailDraftContractStartDate(N),u.updateSelectedContractDetailDraftContractEndDate(Q),u.updateSelectedContractDetailDraftStatus(d3.default.TERMINATED),r(!1)}}),(0,t.jsx)(lH,{isOpen:s,title:"계약중 상태로 되돌리시겠습니까?",description:`이전 계약 기간 (${ee})으로 되돌리며, 해지에서 계약중으로 변경됩니다.
계약중일 시, 계약 시작일을 수정할 수 있으며 계약 종료일은 수정할 수 없습니다.`,cancelLabel:"취소하기",confirmLabel:"변경하기",onCancel:()=>{c(!1)},onConfirm:()=>{u.updateSelectedContractDetailDraftContractEndDate(V),u.updateSelectedContractDetailDraftStatus(d3.default.ACTIVE),c(!1)}})]})}),on=l.default.div.withConfig({componentId:"zh__sc-a64f020c-0"})`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  width: 100%;
  min-height: 156px;
  padding: 16px 24px;
  border-bottom: 1px solid #e5e7eb;

  background: #fff;
`,oi=l.default.div.withConfig({componentId:"zh__sc-a64f020c-1"})`
  display: flex;
  gap: 24px;
  width: 100%;
`,ol=l.default.div.withConfig({componentId:"zh__sc-a64f020c-2"})`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  gap: 16px;
  justify-content: center;

  min-width: 0;
`,oa=l.default.div.withConfig({componentId:"zh__sc-a64f020c-3"})`
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  min-width: 0;
`,od=l.default.div.withConfig({componentId:"zh__sc-a64f020c-4"})`
  display: flex;
  gap: 16px;
  align-items: center;
  min-width: 0;
`,oo=l.default.div.withConfig({componentId:"zh__sc-a64f020c-5"})`
  font-size: 24px;
  font-weight: 700;
  line-height: 20px;
  color: #0a0a0a;
`,or=l.default.div.withConfig({componentId:"zh__sc-a64f020c-6"})`
  overflow: hidden;
  display: flex;
  gap: 4px;
  align-items: center;

  min-width: 0;
`,os=l.default.div.withConfig({componentId:"zh__sc-a64f020c-7"})`
  overflow: hidden;

  padding: 2px 12px;
  border: 1px solid #d1d5db;
  border-radius: 99px;

  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: #0a0a0a;
  white-space: nowrap;
`,oc=l.default.div.withConfig({componentId:"zh__sc-a64f020c-8"})`
  display: flex;
  gap: 12px;
  align-items: center;
  min-width: 0;
`,of=l.default.div.withConfig({componentId:"zh__sc-a64f020c-9"})`
  display: flex;
  gap: 16px;
  align-items: center;
  min-width: 0;
`,oh=l.default.div.withConfig({componentId:"zh__sc-a64f020c-10"})`
  display: flex;
  gap: 8px;
  align-items: center;
  min-width: 0;
`,op=l.default.div.withConfig({componentId:"zh__sc-a64f020c-11"})`
  display: flex;
  gap: 8px;
  align-items: center;

  min-width: 0;

  font-size: 18px;
  line-height: 20px;
  color: #0a0a0a;
  white-space: nowrap;
`,ou=l.default.div.withConfig({componentId:"zh__sc-a64f020c-12"})`
  display: flex;
  flex-direction: column;
  min-width: 0;
`,ox=l.default.div.withConfig({componentId:"zh__sc-a64f020c-13"})`
  display: flex;
  flex-direction: column;
  min-width: 0;
`,og=l.default.div.withConfig({componentId:"zh__sc-a64f020c-14"})`
  display: flex;
  flex-direction: column;
  min-width: 0;
`,om=(0,l.default)(o.default.Input.Select).withConfig({componentId:"zh__sc-a64f020c-15"})`
  width: 94px;
  height: 28px;
`,ob=l.default.div.withConfig({componentId:"zh__sc-a64f020c-16"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,oj=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-a64f020c-17"})`
  gap: 8px;
  padding: 0 16px;
`,ow=l.default.span.withConfig({componentId:"zh__sc-a64f020c-18"})`
  font-weight: 700;
`,oy=l.default.span.withConfig({componentId:"zh__sc-a64f020c-19"})`
  font-weight: 400;
`,o_=l.default.span.withConfig({componentId:"zh__sc-a64f020c-20"})`
  font-weight: 400;
`,ov=l.default.div.withConfig({componentId:"zh__sc-a64f020c-21"})`
  width: 1px;
  height: 24px;
  background: #e5e7eb;
`,oC=l.default.div.withConfig({componentId:"zh__sc-a64f020c-22"})`
  width: 100%;
  padding: 16px 24px;
  border-bottom: 1px solid #e5e7eb;

  font-size: 14px;
  color: #6b7280;

  background: #fff;
`;var oI=e.i(7665);function oz(){return(oz=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var oT=(0,i.forwardRef)(function(e,t){var n=e.color,l=e.size,a=void 0===l?24:l,d=function(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["color","size"]);return i.default.createElement("svg",oz({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),i.default.createElement("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),i.default.createElement("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),i.default.createElement("polyline",{points:"21 15 16 10 5 21"}))});oT.propTypes={color:$.default.string,size:$.default.oneOfType([$.default.string,$.default.number])},oT.displayName="Image";let oS={badge:{label:"데이터 없음",color:"black"},action:{label:"파일 미첨부",color:"black"}};function ok(e){if(null==e)return oS;switch(e){case"WAITING_TO_LINK":return{badge:{label:"연동 대기",color:"lightBlue"},action:{label:"연동 대기중...",color:"blue",disabled:!0}};case"WAITING_TO_DRAFT":return{badge:{label:"작성 대기",color:"lightBlue"},action:{label:"서류 작성 시작하기",color:"blue"}};case"WAITING_TO_PRINT":return{badge:{label:"출력 대기",color:"blue"},action:{label:"초안 검토하기",color:"blue"}};case"NEED_UPDATE":return{badge:{label:"업데이트 필요",color:"orange"},action:{label:"수기 서류 업로드하기",color:"orange"}};case"NEED_MATCHING":return{badge:{label:"서류 대조",color:"orange"},action:{label:"수기 서류 업로드하기",color:"orange"}};case"LINKED_COMPLETED":return{badge:{label:"연동 완료",color:"orange",icon:(0,t.jsx)(B.default.WandShine,{size:16})},action:{label:"서류 최종 확인하기",color:"orange"}};case"COMPLETED":return{badge:{label:"전산 완료",color:"gray"},action:{label:"문서 확인하기",color:"indigo"}};default:return oS}}var oE=e.i(70888);let oD=(0,nE.default)((0,t.jsx)("path",{fillRule:"evenodd",d:"M4 11h16v2H4z"}),"HorizontalRule");function oA({status:e,onClick:n,disabled:i=!1}){return(0,t.jsx)(oO,{$status:e,$disabled:i,onClick:i?void 0:n,children:"checked"===e?(0,t.jsx)(lg.default,{sx:{fontSize:18}}):"indeterminate"===e?(0,t.jsx)(oD,{sx:{fontSize:20}}):null})}let oO=l.default.div.withConfig({componentId:"zh__sc-a3965854-0"})`
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
`;function o$(e,t){return 0===t||0===e?"unchecked":e===t?"checked":"indeterminate"}let oR=(0,n.observer)(function({template:e,isChecked:n,hasDocument:l,statusChangeToken:d,toggleSelectedTemplateId:o}){let{id:r,name:s,templateImagePath:c}=e,f=c?.[0]??null,h=a.default.client.info.byClient.docs.documentStatusByTemplateId.get(r)??null,p=a.default.client.info.byClient.docs.documentByTemplateId.get(r)??null,u=ok(h),x=l&&(0,oE.canSelectDocumentInList)(p?.displayStatus),{ref:g,fire:m}=ey(),b=(0,i.useRef)(d);return(0,i.useEffect)(()=>{if(d<=b.current){b.current=d;return}b.current=d,m()},[m,d]),(0,t.jsxs)(oB,{ref:g,children:[(0,t.jsx)(oU,{children:(0,t.jsx)(oA,{status:n?"checked":"unchecked",disabled:!x,onClick:()=>o(r)})}),(0,t.jsxs)(oW,{$color:u.badge.color,children:[u.badge.icon,u.badge.label]}),(0,t.jsx)(oY,{children:null!==f&&""!==f?(0,t.jsx)(oI.default,{src:f,width:210,height:297,style:{width:"auto",height:"90%",maxWidth:"90%",objectFit:"contain"},loading:"eager",alt:s}):(0,t.jsx)(oT,{size:40,color:"#D1D5DC"})}),(0,t.jsxs)(oV,{children:[(0,t.jsx)(oH,{children:(0,t.jsx)(oG,{children:s})}),(0,t.jsx)(oK,{$color:u.action.color,disabled:!0===u.action.disabled||"black"===u.action.color,onClick:()=>{if(null===p){"WAITING_TO_DRAFT"===h&&a.default.modal.documentView.openTemplateWithoutDocument(e.id);return}a.default.modal.documentView.open(p.id)},children:u.action.label})]})]})}),oL=(0,n.observer)(function(){let e=a.default.client.info.byClient.docs,n=e.selectedTemplateIdSet,{toggleSelectedTemplateId:i,addSelectedTemplateIds:l,removeSelectedTemplateIds:d}=e,o=e.documentByTemplateId;return null===a.default.client.info.byClient.selectedClientId?"no client selected":(0,t.jsx)(oN,{children:e.templateTypeGroups.map(a=>{let{type:r,typeLabel:s,templates:c}=a,f=c.map(e=>e.id),h=f.filter(e=>{let t;return null!==(t=o.get(e)??null)&&(0,oE.canSelectDocumentInList)(t.displayStatus)}),p=new Set(h),u=o$(f.filter(e=>n.has(e)).length,f.length),x=o$(h.filter(e=>n.has(e)).length,h.length);return(0,t.jsxs)(oP,{children:[(0,t.jsxs)(oF,{onClick:()=>{"checked"===x?d([...p]):l([...p])},children:[(0,t.jsx)(oA,{status:u}),"[",s,"]"]}),(0,t.jsx)(oM,{children:c.map(l=>{let{id:a}=l,d=n.has(a),r=o.get(a)??null;return(0,t.jsx)(oR,{template:l,isChecked:d,hasDocument:null!==r,statusChangeToken:e.getDocumentStatusChangeToken(a),toggleSelectedTemplateId:i},a)})})]},r)})})}),oN=l.default.div.withConfig({componentId:"zh__sc-723cdbd7-0"})`
  overflow-y: auto;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 20px;

  width: 100%;
  min-height: 0;
`,oP=l.default.div.withConfig({componentId:"zh__sc-723cdbd7-1"})`
  display: flex;
  flex-direction: column;
  gap: 9px;
  align-items: flex-start;
  align-self: stretch;
`,oF=l.default.div.withConfig({componentId:"zh__sc-723cdbd7-2"})`
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
`,oM=l.default.div.withConfig({componentId:"zh__sc-723cdbd7-3"})`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: stretch;
  align-self: stretch;
`,oB=l.default.div.withConfig({componentId:"zh__sc-723cdbd7-4"})`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 188px;
  height: 232px;
  border: 1px solid #d1d5dc;
  border-radius: 8px;

  background: #fff;
`,oU=l.default.div.withConfig({componentId:"zh__sc-723cdbd7-5"})`
  position: absolute;
  top: 8px;
  left: 8px;
`,oW=l.default.div.withConfig({componentId:"zh__sc-723cdbd7-6"})`
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
`,oY=l.default.div.withConfig({componentId:"zh__sc-723cdbd7-7"})`
  overflow: hidden;
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: center;

  height: 140px;
  border-radius: 7px 7px 0 0;

  background: #f3f4f6;
`,oV=l.default.div.withConfig({componentId:"zh__sc-723cdbd7-8"})`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  gap: 2px;
  align-items: center;
  align-self: stretch;
  justify-content: center;

  padding: 8px;
`,oH=l.default.div.withConfig({componentId:"zh__sc-723cdbd7-9"})`
  display: flex;
  gap: 10px;
  align-items: center;
  align-self: stretch;
  justify-content: center;
`,oG=l.default.div.withConfig({componentId:"zh__sc-723cdbd7-10"})`
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
`,oK=l.default.button.withConfig({componentId:"zh__sc-723cdbd7-11"})`
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
`;var oX=e.i(92091);let oq=(0,n.observer)(function(){var e,n;let i=a.default.client.info.byClient.docs,l=i.selectedTemplateIdSet,d=i.documentByTemplateId,o=Array.from(new Set(i.templates.map(e=>e.id))),r=o.filter(e=>{let t=d.get(e)??null;return null!==t&&(0,oE.canSelectDocumentInList)(t.displayStatus)}),s=(e=r.filter(e=>l.has(e)).length,0===(n=r.length)||0===e?"unchecked":e===n?"checked":"indeterminate"),c=o.length>0,f=o.filter(e=>l.has(e)).length;return(0,t.jsxs)(oQ,{children:[(0,t.jsxs)(oJ,{onClick:()=>{"checked"===s?i.removeSelectedTemplateIds(r):i.addSelectedTemplateIds(r)},children:[(0,t.jsx)(oA,{status:s}),"전체 선택하기"]}),(0,t.jsxs)(oZ,{children:[(0,t.jsxs)(o0,{disabled:0===f,onClick:()=>void i.printSelectedTemplates(),children:[(0,t.jsx)(oX.default,{sx:{fontSize:16}}),"선택한 서류 출력하기"]}),(0,t.jsxs)(o0,{disabled:!c,onClick:()=>void i.printAllTemplates(),children:[(0,t.jsx)(oX.default,{sx:{fontSize:16}}),"전체 출력하기"]})]})]})}),oQ=l.default.div.withConfig({componentId:"zh__sc-b979553a-0"})`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;
`,oZ=l.default.div.withConfig({componentId:"zh__sc-b979553a-1"})`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: flex-end;
`,oJ=l.default.button.withConfig({componentId:"zh__sc-b979553a-2"})`
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
`,o0=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-b979553a-3"})`
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
`;function o1(){return(0,t.jsxs)(o2,{children:[(0,t.jsx)(oq,{}),(0,t.jsx)(oL,{})]})}let o2=l.default.div.withConfig({componentId:"zh__sc-5553a9a-0"})`
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
`,o6=(0,n.observer)(function(){let e=a.default.client.info.byClient,[n,l]=(0,i.useState)("basic"),o=e.isClientDetailOpen;return((0,i.useEffect)(()=>{let t=e.selectedClientId,i=a.default.data.guardian.list.query;o&&"basic"===n&&null!==t&&i?.clientId===t&&a.default.data.guardian.list.refetch()},[n,e.selectedClientId,o]),o&&null!==e.selectedClientId)?(0,t.jsx)(d.default,{children:(0,t.jsxs)(o4,{children:[(0,t.jsxs)(o5,{children:[(0,t.jsx)(o3,{children:"이용자 상세보기"}),(0,t.jsxs)(o9,{type:"button",onClick:()=>{e.cancelUserInfoEdit(),e.cancelContractDetailEdit(),e.closeClientDetail(),e.setSelectedClientId(null)},children:[(0,t.jsx)(M.X,{size:16}),"닫기"]})]}),(0,t.jsx)(ot,{}),(0,t.jsxs)(o8,{children:[(0,t.jsx)(o7,{type:"button",$active:"basic"===n,onClick:()=>l("basic"),children:"기본정보"}),(0,t.jsx)(o7,{type:"button",$active:"contract"===n,onClick:()=>l("contract"),children:"계약정보"}),(0,t.jsx)(o7,{type:"button",$active:"docs"===n,onClick:()=>l("docs"),children:"서류관리"})]}),(0,t.jsx)(re,{children:"basic"===n?(0,t.jsx)(l6,{}):"contract"===n?(0,t.jsx)(d6,{}):(0,t.jsx)(o1,{})})]})}):null}),o4=l.default.div.withConfig({componentId:"zh__sc-3cfc0852-0"})`
  position: relative;

  display: flex;
  flex-direction: column;
  flex-shrink: 0;

  width: 1050px;
  height: 90vh;
  border-radius: 8px;

  background: #fff;
`,o5=l.default.div.withConfig({componentId:"zh__sc-3cfc0852-1"})`
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
`,o3=l.default.h2.withConfig({componentId:"zh__sc-3cfc0852-2"})`
  margin: 0;

  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  color: #101828;
  letter-spacing: -0.439px;
`,o9=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-3cfc0852-3"})`
  display: flex;
  gap: 6px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,o8=l.default.div.withConfig({componentId:"zh__sc-3cfc0852-4"})`
  display: flex;
  align-self: flex-start;

  width: 100%;
  height: 56px;
  border-bottom: 1px solid #e5e7eb;

  background: #fff;
`,o7=l.default.button.withConfig({componentId:"zh__sc-3cfc0852-5"})`
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
`,re=l.default.div.withConfig({componentId:"zh__sc-3cfc0852-6"})`
  display: flex;
  flex: 1;
  min-height: 0;
`,rt=(0,nE.default)((0,t.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"}),"ArrowBack");function rn(){return(rn=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var ri=(0,i.forwardRef)(function(e,t){var n=e.color,l=e.size,a=void 0===l?24:l,d=function(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["color","size"]);return i.default.createElement("svg",rn({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),i.default.createElement("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),i.default.createElement("polyline",{points:"19 12 12 19 5 12"}))});function rl(){return(rl=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}ri.propTypes={color:$.default.string,size:$.default.oneOfType([$.default.string,$.default.number])},ri.displayName="ArrowDown";var ra=(0,i.forwardRef)(function(e,t){var n=e.color,l=e.size,a=void 0===l?24:l,d=function(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["color","size"]);return i.default.createElement("svg",rl({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),i.default.createElement("line",{x1:"12",y1:"19",x2:"12",y2:"5"}),i.default.createElement("polyline",{points:"5 12 12 5 19 12"}))});ra.propTypes={color:$.default.string,size:$.default.oneOfType([$.default.string,$.default.number])},ra.displayName="ArrowUp";var rd=e.i(26546),ro=e.i(71723),rr=e.i(25699);let rs=function({isOpen:e,missingItems:n,isProcessing:i=!1,onClickSecondary:l,onClickPrimary:a}){return e?(0,t.jsx)(rc,{children:(0,t.jsxs)(rf,{children:[(0,t.jsxs)(rh,{children:[(0,t.jsx)(rp,{children:"필수 입력 항목을 확인해주세요."}),(0,t.jsx)(ru,{children:"아래 항목이 입력되지 않았습니다."}),(0,t.jsx)(rx,{children:n.map(e=>(0,t.jsx)("li",{children:e.label},e.key))}),(0,t.jsx)(ru,{children:"입력하지 않고 나갈 시 작성한 내용이 저장되지 않습니다."})]}),(0,t.jsxs)(rg,{children:[(0,t.jsx)(rm,{type:"button",disabled:i,onClick:l,children:"저장하지 않고 나가기"}),(0,t.jsx)(rb,{type:"button",disabled:i,onClick:a,children:"입력 항목 확인하기"})]})]})}):null},rc=l.default.div.withConfig({componentId:"zh__sc-615e692b-0"})`
  position: fixed;
  z-index: 3000;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgb(17 24 39 / 36%);
`,rf=l.default.div.withConfig({componentId:"zh__sc-615e692b-1"})`
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
`,rh=l.default.div.withConfig({componentId:"zh__sc-615e692b-2"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;

  width: 100%;
`,rp=l.default.h3.withConfig({componentId:"zh__sc-615e692b-3"})`
  margin: 0;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px;
  color: #000;
`,ru=l.default.p.withConfig({componentId:"zh__sc-615e692b-4"})`
  margin: 0;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px;
  color: #000;
`,rx=l.default.ul.withConfig({componentId:"zh__sc-615e692b-5"})`
  display: flex;
  flex-direction: column;
  gap: 0;

  width: 100%;
  margin: 0;
  padding-left: 24px;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px;
  color: #000;
  list-style: disc;
`,rg=l.default.div.withConfig({componentId:"zh__sc-615e692b-6"})`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: flex-end;

  width: 100%;
`,rm=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-615e692b-7"})`
  height: 36px;
  padding: 8px 16px;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px;
  color: #4f39f6;
`,rb=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-615e692b-8"})`
  height: 36px;
  padding: 8px 16px;

  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: 20px;
`;var rj=e.i(28124),rw=e.i(43172);let ry=e=>{if("radio"===e.uiProps.fieldType)return`radio:${e.uiProps.groupKey}`;let t=e.uiProps.triggerKeyScopes?.[rj.default.SOURCE_REQUIRED_VALIDATION]?.trim();return void 0===t||""===t?`field:${e.page}:${e.fieldKey}`:`scope:${t}`},r_=function({isOpen:e,actionType:n,isProcessing:i=!1,onClickSecondary:l,onClickPrimary:a}){if(!e)return null;let d="move"===n,o=d?"이동":"닫기";return(0,t.jsx)(rv,{children:(0,t.jsxs)(rC,{children:[(0,t.jsxs)(rI,{children:[(0,t.jsx)(rz,{children:"수정된 정보가 있습니다."}),(0,t.jsxs)(rT,{children:["지금 화면을 나가면 수정하신 내용이 저장되지 않습니다.",(0,t.jsx)("br",{}),`[저장하고 ${o}]${d?"을":"를"} 누르면 정보가 안전하게 저장됩니다.`]})]}),(0,t.jsxs)(rS,{children:[(0,t.jsx)(rk,{type:"button",disabled:i,onClick:l,children:`저장없이 ${d?"이동":"나가기"}`}),(0,t.jsx)(rE,{type:"button",disabled:i,onClick:a,children:`저장하고 ${o}`})]})]})})},rv=l.default.div.withConfig({componentId:"zh__sc-22c1af4d-0"})`
  position: fixed;
  z-index: 3000;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgb(17 24 39 / 36%);
`,rC=l.default.div.withConfig({componentId:"zh__sc-22c1af4d-1"})`
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
`,rI=l.default.div.withConfig({componentId:"zh__sc-22c1af4d-2"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;

  width: 100%;
`,rz=l.default.h3.withConfig({componentId:"zh__sc-22c1af4d-3"})`
  margin: 0;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px;
  color: #000;
`,rT=l.default.p.withConfig({componentId:"zh__sc-22c1af4d-4"})`
  margin: 0;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px;
  color: #000;
`,rS=l.default.div.withConfig({componentId:"zh__sc-22c1af4d-5"})`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: flex-end;

  width: 100%;
`,rk=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-22c1af4d-6"})`
  height: 36px;
  padding: 8px 16px;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px;
  color: #4f39f6;
`,rE=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-22c1af4d-7"})`
  height: 36px;
  padding: 8px 16px;

  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: 20px;
`,rD=l.default.div.withConfig({componentId:"zh__sc-67d06bce-0"})`
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
`,rA=l.default.div.withConfig({componentId:"zh__sc-67d06bce-1"})`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;

  padding: 16px;
`,rO=l.css`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;

  width: 56px;
  height: 36px;
  padding: 8px;
`,r$=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-67d06bce-2"})`
  ${rO}
`,rR=l.default.div.withConfig({componentId:"zh__sc-67d06bce-3"})`
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
  text-align: center;
`,rL=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-67d06bce-4"})`
  ${rO}
`,rN=l.default.div.withConfig({componentId:"zh__sc-67d06bce-5"})`
  align-self: stretch;
  height: 1px;
  background: #e5e7eb;
`,rP=l.default.div.withConfig({componentId:"zh__sc-67d06bce-6"})`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
`,rF=[{key:"state1",index:"01",label:"청구 사유를 선택해주세요.",options:["option1","option2","option3","option4","option5","option6","option7"],optionLabels:{option1:"카드 미소지",option2:"카드 분실",option3:"카드 파손",option4:"시스템 오류",option5:"단말기 오류",option6:"사망",option7:"수술"}},{key:"state2",index:"02",label:"처리 현황을 선택해주세요.",options:["option1","option2"],optionLabels:{option1:"계약 종결",option2:"서비스 종료"}}],rM={state1:null,state2:null},rB={option1:"대상자 바우처 카드 미소지로 인하여 소급결제 진행하려 하였으나",option2:"대상자 바우처 카드 분실로 인하여 소급결제 진행하려 하였으나",option3:"대상자 바우처 카드 파손으로 인하여 소급결제 진행하려 하였으나",option4:"결제 시스템 오류로 인하여 소급결제 진행하려 하였으나",option5:"단말기 오류로 인하여 소급결제 진행하려 하였으나",option6:"대상자 사망으로 인하여 소급결제 진행하려 하였으나",option7:"대상자 수술로 인하여 소급결제 진행하려 하였으나"},rU={option1:"일상돌봄 식사영양서비스 계약종결됨에 따라 지원금이 소멸하여",option2:"일상돌봄 식사영양서비스 종료됨에 따라 지원금이 소멸하여"},rW=(e,t)=>e[t]??"",rY=(e,t,n)=>Math.min(n,Math.max(t,e)),rV=["boxSizing","fontFamily","fontSize","fontWeight","fontStyle","lineHeight","letterSpacing","textTransform","textIndent","textDecoration","wordSpacing","tabSize","paddingTop","paddingRight","paddingBottom","paddingLeft"],rH=(e,t,n,i=.08)=>{let l=rY(n,0,t.length),a=document.createElement("div"),d=document.createElement("span"),o=window.getComputedStyle(e);a.style.position="absolute",a.style.left="-99999px",a.style.top="0",a.style.visibility="hidden",a.style.pointerEvents="none",a.style.width=`${e.clientWidth}px`,a.style.whiteSpace="pre-wrap",a.style.overflowWrap="break-word",a.style.wordBreak="break-word",rV.forEach(e=>{a.style[e]=o[e]}),a.textContent=t.slice(0,l),d.textContent="​",a.appendChild(d),document.body.appendChild(a);let r=d.offsetTop;a.remove();let s=Math.max(e.scrollHeight-e.clientHeight,0);return rY(r-e.clientHeight*i,0,s)},rG=l.keyframes`
	from {
		transform: translateX(100%);
		opacity: 0;
	}

	to {
		transform: translateX(0);
		opacity: 1;
	}
`,rK=(0,l.default)(rD).withConfig({componentId:"zh__sc-1f96f242-0"})`
  will-change: transform, opacity;
  animation: ${rG} 0.28s cubic-bezier(0.32, 0.72, 0, 1) forwards;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,rX=l.default.div.withConfig({componentId:"zh__sc-1f96f242-1"})`
  width: 36px;
  height: 36px;
`,rq=l.default.div.withConfig({componentId:"zh__sc-1f96f242-2"})`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 24px;

  width: 100%;
  padding: 16px;
`,rQ=l.default.div.withConfig({componentId:"zh__sc-1f96f242-3"})`
  display: flex;
  gap: 4px;
  align-items: flex-start;
  align-self: stretch;

  padding: 12px;
  border: 1px solid #e5e7eb;
  border-radius: 6px;

  background: #f5f8ff;
`,rZ=l.default.div.withConfig({componentId:"zh__sc-1f96f242-4"})`
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
`,rJ=l.default.div.withConfig({componentId:"zh__sc-1f96f242-5"})`
  display: flex;
  flex-direction: column;
  gap: 24px;

  width: 100%;
  padding: 0;
`,r0=l.default.div.withConfig({componentId:"zh__sc-1f96f242-6"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;
`,r1=l.default.div.withConfig({componentId:"zh__sc-1f96f242-7"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;
`,r2=l.default.div.withConfig({componentId:"zh__sc-1f96f242-8"})`
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
`,r6=l.default.div.withConfig({componentId:"zh__sc-1f96f242-9"})`
  font-size: 14px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
`,r4=l.default.div.withConfig({componentId:"zh__sc-1f96f242-10"})`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,r5=l.default.button.withConfig({componentId:"zh__sc-1f96f242-11"})`
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
`,r3=l.default.div.withConfig({componentId:"zh__sc-1f96f242-12"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;
`,r9=l.default.div.withConfig({componentId:"zh__sc-1f96f242-13"})`
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
`,r8=(0,l.default)(o.default.Input.Textarea).withConfig({componentId:"zh__sc-1f96f242-14"})`
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
`,r7=l.default.div.withConfig({componentId:"zh__sc-1f96f242-15"})`
  display: flex;
  gap: 10px;
  align-items: center;
  align-self: stretch;
`,se=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-1f96f242-16"})`
  display: flex;
  gap: 4px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,st=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-1f96f242-17"})`
  display: flex;
  flex: 1 0 0;
  gap: 4px;
  align-items: center;
  justify-content: center;

  height: 36px;
  padding: 8px 16px;
`;var sn=e.i(8582);let si=l.keyframes`
	from {
		transform: translateX(100%);
		opacity: 0;
	}

	to {
		transform: translateX(0);
		opacity: 1;
	}
`,sl=(0,l.default)(rD).withConfig({componentId:"zh__sc-c3e70251-0"})`
  will-change: transform, opacity;
  width: 634px;
  animation: ${si} 0.28s cubic-bezier(0.32, 0.72, 0, 1) forwards;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,sa=l.default.div.withConfig({componentId:"zh__sc-c3e70251-1"})`
  width: 36px;
  height: 36px;
`,sd=(0,l.default)(rL).withConfig({componentId:"zh__sc-c3e70251-2"})`
  width: 56px;
  height: 36px;
  border: 1px solid #4f39f6;
  border-radius: 4px;

  color: #4f39f6;
`,so=(0,l.default)(rP).withConfig({componentId:"zh__sc-c3e70251-3"})`
  min-height: 0;
`,sr=l.default.div.withConfig({componentId:"zh__sc-c3e70251-4"})`
  overflow: hidden;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 24px;

  width: 100%;
  min-height: 0;
  padding: 16px;
`,ss=l.default.div.withConfig({componentId:"zh__sc-c3e70251-5"})`
  display: flex;
  gap: 4px;
  align-items: flex-start;
  align-self: stretch;
`,sc=l.default.div.withConfig({componentId:"zh__sc-c3e70251-6"})`
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
`,sf=l.default.div.withConfig({componentId:"zh__sc-c3e70251-7"})`
  overflow: hidden;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;

  min-height: 0;
`,sh=l.default.div.withConfig({componentId:"zh__sc-c3e70251-8"})`
  overflow-y: auto;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;

  min-height: 0;
`,sp=l.default.div.withConfig({componentId:"zh__sc-c3e70251-9"})`
  display: flex;
  flex-direction: column;
  gap: 24px;

  width: 100%;
  padding: 16px;
  border: 1px solid #e5e7eb;
  border-radius: 6px;

  background: #f5f8ff;
`,su=l.default.div.withConfig({componentId:"zh__sc-c3e70251-10"})`
  display: flex;
  gap: 8px;
  align-items: center;
  width: 100%;
`,sx=(0,l.default)(o.default.Input.Text).withConfig({componentId:"zh__sc-c3e70251-11"})`
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
`,sg=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-c3e70251-12"})`
  height: 36px;
  padding: 8px 16px;
  border-radius: 4px;

  font-size: 16px;
  font-weight: 500;
`,sm=l.default.div.withConfig({componentId:"zh__sc-c3e70251-13"})`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,sb=l.default.button.withConfig({componentId:"zh__sc-c3e70251-14"})`
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
`,sj=l.default.div.withConfig({componentId:"zh__sc-c3e70251-15"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;
`,sw=l.default.div.withConfig({componentId:"zh__sc-c3e70251-16"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;
`,sy=l.default.div.withConfig({componentId:"zh__sc-c3e70251-17"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;
`,s_=l.default.div.withConfig({componentId:"zh__sc-c3e70251-18"})`
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
`,sv=l.default.div.withConfig({componentId:"zh__sc-c3e70251-19"})`
  font-size: 14px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
`,sC=l.default.div.withConfig({componentId:"zh__sc-c3e70251-20"})`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,sI=l.default.button.withConfig({componentId:"zh__sc-c3e70251-21"})`
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
`,sz=l.default.div.withConfig({componentId:"zh__sc-c3e70251-22"})`
  display: flex;
  flex: 0 0 auto;
  align-items: flex-end;
  justify-content: flex-end;

  width: 100%;
`,sT=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-c3e70251-23"})`
  height: 36px;
  padding: 8px 16px;
  border-radius: 4px;

  font-size: 16px;
  font-weight: 500;
`,sS=l.default.div.withConfig({componentId:"zh__sc-c3e70251-24"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;
`,sk=l.default.div.withConfig({componentId:"zh__sc-c3e70251-25"})`
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
`,sE=(0,l.default)(o.default.Input.Textarea).withConfig({componentId:"zh__sc-c3e70251-26"})`
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
`,sD=l.default.div.withConfig({componentId:"zh__sc-c3e70251-27"})`
  display: flex;
  gap: 10px;
  align-items: center;
  align-self: stretch;
`,sA=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-c3e70251-28"})`
  display: flex;
  gap: 4px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;

  font-size: 16px;
  font-weight: 400;
`,sO=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-c3e70251-29"})`
  display: flex;
  flex: 1 0 0;
  gap: 4px;
  align-items: center;
  justify-content: center;

  height: 36px;
  padding: 8px 16px;

  font-size: 16px;
  font-weight: 400;
`,s$=[{key:"state1",index:"01",label:"영양 상태 — 이용자의 영양 변화 정도를 선택해주세요.",sentences:{positive:"☐ 영양 상태: 정기적이고 꾸준한 영양식 식사 제공 및 방문 관리를 밀착 모니터링한 결과, 영양 체크리스트 점수가 서비스 참여 전 대비 크게 향상되었으며 안색과 전반적인 신체 기력 상태가 매우 양호하게 개선되었습니다.",neutral:"☐ 영양 상태: 현재 제공받고 있는 모든 건강 식단에 비교적 안정적이고 매우 높은 순응도를 보이고 있으며, 저체중이나 기타 체중 감소 등의 기왕 병력 이전의 안정적인 건강 수치를 계속해서 유지하고 있습니다.",negative:"☐ 영양 상태: 최근 들어 식사 흡수 기능 저하를 자주 호소하시며 일일 섭취하는 식사량이 전보다 감소하셨음이 확인되었습니다. 식사 조절과 아울러 이에 대한 의료적 치료 등 병원의 조기 개입이 필요합니다."}},{key:"state2",index:"02",label:"식욕 상태 — 이용자의 식욕 변화 정도를 선택해주세요.",sentences:{positive:"☐ 식욕 상태: 식사 시간에 맞춰 스스로 음식을 찾으실 정도로 식욕이 크게 왕성해지셨으며, 제공되는 반찬과 밥을 남김없이 골고루 섭취하시어 전반적인 음식 섭취 순응도가 매우 높게 나타납니다.",neutral:"☐ 식욕 상태: 식사량이나 음식을 대하는 태도에 특별한 저하나 항진 없이 평소 수준을 그대로 유지하고 계십니다. 거부감 없이 매 끼니 적정량의 식사를 무난하게 마치시는 상태입니다.",negative:"☐ 식욕 상태: 일시적인 재원 변화나 체력 감소 등으로 극심한 우울감과 음식 거부 반응이 가끔 관찰되며, 이로 인해 신체 면역력 결핍 우려가 또한 생김에 따라 돌봄 과정이나 수행 다음 심리 유형을 수정할 필요가 있습니다."}},{key:"state3",index:"03",label:"상담·정서 상태 — 이용자의 심리·정서 변화 정도를 선택해주세요.",sentences:{positive:"☐ 상담·정서 상태: 정기적인 맞춤 상담 시나리오를 통해 정밀 분석 기법을 지속적으로 러닝한 결과, 기분이 좋고 전보다 웃음 가득한, 유쾌하고 우울감 없는 일상을 마주하고 계실뿐더러 감정이 정돈된 가장 이상적인 심리적 안정을 변함없이 나타내십니다.",neutral:"☐ 상담·정서 상태: 시기적(계절별/월별) 환경 변화 기능을 통하거나 매일매일 발생 및 부여되는 질문과 과제들에 대해 감정의 변화가 미미하며, 사회복지사 등 면담 평정 가이드라인에서 무난하고 일률적인 심리 현황을 보여주고 계십니다.",negative:"☐ 상담·정서 상태: 가끔 위축적 성향을 활발히 높은 빈도로, 신경 감정적 상태가 일어났으며 스스로 감정을 제어하는 등의 부여가 부족합니다. 정기적 상담을 연계하여 가장 신속히 지도가 반복적으로 이루어져야 할 필요성이 있습니다."}}],sR={state1:null,state2:null,state3:null},sL={positive:"긍정 변화 / 개선됨",neutral:"변화 없음 / 유지됨",negative:"부정적 변화 / 결과 요망"},sN=["positive","neutral","negative"],sP=(e,t,n)=>Math.min(n,Math.max(t,e)),sF=["boxSizing","fontFamily","fontSize","fontWeight","fontStyle","lineHeight","letterSpacing","textTransform","textIndent","textDecoration","wordSpacing","tabSize","paddingTop","paddingRight","paddingBottom","paddingLeft"],sM=(e,t,n,i=.08)=>{let l=sP(n,0,t.length),a=document.createElement("div"),d=document.createElement("span"),o=window.getComputedStyle(e);a.style.position="absolute",a.style.left="-99999px",a.style.top="0",a.style.visibility="hidden",a.style.pointerEvents="none",a.style.width=`${e.clientWidth}px`,a.style.whiteSpace="pre-wrap",a.style.overflowWrap="break-word",a.style.wordBreak="break-word",sF.forEach(e=>{a.style[e]=o[e]}),a.textContent=t.slice(0,l),d.textContent="​",a.appendChild(d),document.body.appendChild(a);let r=d.offsetTop;a.remove();let s=Math.max(e.scrollHeight-e.clientHeight,0);return sP(r-e.clientHeight*i,0,s)},sB=l.keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }

  to {
    transform: translateX(0);
    opacity: 1;
  }
`,sU=(0,l.default)(rD).withConfig({componentId:"zh__sc-42312189-0"})`
  will-change: transform, opacity;
  animation: ${sB} 0.28s cubic-bezier(0.32, 0.72, 0, 1) forwards;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,sW=l.default.div.withConfig({componentId:"zh__sc-42312189-1"})`
  width: 36px;
  height: 36px;
`,sY=l.default.div.withConfig({componentId:"zh__sc-42312189-2"})`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 24px;

  width: 100%;
  padding: 16px;
`,sV=l.default.div.withConfig({componentId:"zh__sc-42312189-3"})`
  display: flex;
  gap: 4px;
  align-items: flex-start;
  align-self: stretch;

  padding: 12px;
  border: 1px solid #e5e7eb;
  border-radius: 6px;

  background: #f5f8ff;
`,sH=l.default.div.withConfig({componentId:"zh__sc-42312189-4"})`
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
`,sG=l.default.div.withConfig({componentId:"zh__sc-42312189-5"})`
  display: flex;
  flex-direction: column;
  gap: 24px;

  width: 100%;
  padding: 0;
`,sK=l.default.div.withConfig({componentId:"zh__sc-42312189-6"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;
`,sX=l.default.div.withConfig({componentId:"zh__sc-42312189-7"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;
`,sq=l.default.div.withConfig({componentId:"zh__sc-42312189-8"})`
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
`,sQ=l.default.div.withConfig({componentId:"zh__sc-42312189-9"})`
  font-size: 14px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
`,sZ=l.default.div.withConfig({componentId:"zh__sc-42312189-10"})`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,sJ=l.default.button.withConfig({componentId:"zh__sc-42312189-11"})`
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
`,s0=l.default.div.withConfig({componentId:"zh__sc-42312189-12"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;
`,s1=l.default.div.withConfig({componentId:"zh__sc-42312189-13"})`
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
`,s2=(0,l.default)(o.default.Input.Textarea).withConfig({componentId:"zh__sc-42312189-14"})`
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
`,s6=l.default.div.withConfig({componentId:"zh__sc-42312189-15"})`
  display: flex;
  gap: 10px;
  align-items: center;
  align-self: stretch;
`,s4=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-42312189-16"})`
  display: flex;
  gap: 4px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,s5=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-42312189-17"})`
  display: flex;
  flex: 1 0 0;
  gap: 4px;
  align-items: center;
  justify-content: center;

  height: 36px;
  padding: 8px 16px;
`;function s3(){return(s3=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var s9=(0,i.forwardRef)(function(e,t){var n=e.color,l=e.size,a=void 0===l?24:l,d=function(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["color","size"]);return i.default.createElement("svg",s3({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),i.default.createElement("line",{x1:"19",y1:"12",x2:"5",y2:"12"}),i.default.createElement("polyline",{points:"12 19 5 12 12 5"}))});s9.propTypes={color:$.default.string,size:$.default.oneOfType([$.default.string,$.default.number])},s9.displayName="ArrowLeft",(0,n.observer)(function({goBack:e,close:n,showToast:l}){let a=async e=>!1,[d,o]=(0,i.useState)({name:"",relation:"",phone:"",address:""}),[r,s]=(0,i.useState)({name:"",relation:"",phone:"",address:""}),c=(e,t)=>{o(n=>({...n,[e]:t})),s(t=>({...t,[e]:""}))},f=async()=>{let e=!0;""===d.name.trim()&&(s(e=>({...e,name:"필수 입력값입니다."})),e=!1),""===d.relation.trim()&&(s(e=>({...e,relation:"필수 입력값입니다."})),e=!1),""===d.phone.trim()&&(s(e=>({...e,phone:"필수 입력값입니다."})),e=!1),e&&await a({name:d.name,relation:d.relation,phone:d.phone,address:d.address})};return(0,t.jsxs)(rD,{children:[(0,t.jsxs)(rA,{children:[(0,t.jsx)(r$,{onClick:e,children:(0,t.jsx)(s9,{size:16})}),(0,t.jsx)(rR,{children:"신규 보호자 추가"}),(0,t.jsx)(rL,{onClick:n,children:(0,t.jsx)(M.X,{size:16})})]}),(0,t.jsx)(rN,{}),(0,t.jsx)(rP,{children:(0,t.jsx)(s8,{children:(0,t.jsxs)(s7,{children:[(0,t.jsxs)(ce,{children:[(0,t.jsxs)(ct,{children:[(0,t.jsx)(cn,{children:"성명"}),(0,t.jsx)(ci,{type:"text",placeholder:"보호자 성명을 입력하세요.",value:d.name,onChange:e=>c("name",e.target.value),$error:""!==r.name}),(0,t.jsx)(ca,{$show:""!==r.name,children:r.name})]}),(0,t.jsxs)(ct,{children:[(0,t.jsx)(cn,{children:"이용자와의 관계"}),(0,t.jsx)(ci,{type:"text",placeholder:"예: 자녀(딸), 자녀(아들), 자녀(며느리)",value:d.relation,onChange:e=>c("relation",e.target.value),$error:""!==r.relation}),(0,t.jsx)(ca,{$show:""!==r.relation,children:r.relation})]}),(0,t.jsxs)(ct,{children:[(0,t.jsx)(cn,{children:"연락처"}),(0,t.jsx)(ci,{type:"tel",placeholder:"연락처번호를 입력해주세요.",value:d.phone,onChange:e=>c("phone",e.target.value),$error:""!==r.phone}),(0,t.jsx)(ca,{$show:""!==r.phone,children:r.phone})]}),(0,t.jsxs)(ct,{children:[(0,t.jsx)(cn,{children:"주소"}),(0,t.jsx)(cl,{placeholder:"보호자 주소를 입력하세요.",value:d.address,onChange:e=>c("address",e.target.value),$error:""!==r.address,rows:2}),(0,t.jsx)(ca,{$show:""!==r.address,children:r.address})]})]}),(0,t.jsxs)(cd,{onClick:()=>void f(),children:[(0,t.jsx)(b.Check,{size:20}),"추가 후 계약서에 반영하기"]})]})})})]})});let s8=l.default.div.withConfig({componentId:"zh__sc-f12494e7-0"})`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  align-self: stretch;

  padding: 16px;
`,s7=l.default.div.withConfig({componentId:"zh__sc-f12494e7-1"})`
  display: flex;
  flex-direction: column;
  gap: 16px;

  width: 100%;
  padding: 16px;
  border: 1px solid #e5e9ef;
  border-radius: 8px;

  background: #fff;
`,ce=l.default.div.withConfig({componentId:"zh__sc-f12494e7-2"})`
  display: flex;
  flex-direction: column;
`,ct=l.default.div.withConfig({componentId:"zh__sc-f12494e7-3"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`,cn=l.default.label.withConfig({componentId:"zh__sc-f12494e7-4"})`
  font-size: 16px;
  font-weight: 500;
  color: #000;
`,ci=l.default.input.withConfig({componentId:"zh__sc-f12494e7-5"})`
  padding: 8px 16px;
  border: 1px solid #e5e9ef;
  border-radius: 4px;
  font-size: 16px;

  &::placeholder {
    color: #9ca3af;
  }

  &:focus {
    border-color: ${J.default.style.color.PRIMARY[100]};
    outline: none;
  }

  ${({$error:e})=>!0===e&&l.css`
      border: 1px solid #ef4444;
    `}
`,cl=l.default.textarea.withConfig({componentId:"zh__sc-f12494e7-6"})`
  resize: none;

  padding: 8px 16px;
  border: 1px solid #e5e9ef;
  border-radius: 4px;

  font-size: 16px;

  &::placeholder {
    color: #9ca3af;
  }

  &:focus {
    border-color: ${J.default.style.color.PRIMARY[100]};
    outline: none;
  }

  ${({$error:e})=>!0===e&&l.css`
      border: 1px solid #ef4444;
    `}
`,ca=l.default.div.withConfig({componentId:"zh__sc-f12494e7-7"})`
  display: flex;

  height: 24px;

  font-size: 14px;
  font-weight: 400;
  font-style: normal;
  line-height: 18px; /* 128.571% */
  color: #ef4444;

  visibility: ${({$show:e})=>!0===e?"visible":"hidden"};
`,cd=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-f12494e7-8"})`
  display: flex;
  gap: 4px;
  align-items: center;
  align-self: stretch;
  justify-content: center;

  padding: 8px;
`,{PRIMARY:co}=((0,n.observer)(function({close:e,showToast:n}){let l=[],a=(void 0)??null,d=(0,i.useMemo)(()=>{let e=l??[];if(null===a)return e;let t=e.find(e=>e.uuid===a);return t?[t,...e.filter(e=>e.uuid!==a)]:e},[l,a]);return(0,t.jsx)(cr,{children:d.map(i=>(0,t.jsxs)(cs,{onClick:()=>{i.uuid,n(),e()},$selected:void 0===i.uuid,children:[(0,t.jsxs)(cc,{children:[(0,t.jsxs)(cf,{children:[(0,t.jsx)(ch,{children:`${i.name.family} ${i.name.given}`}),(0,t.jsx)(cp,{children:i.relation})]}),(0,t.jsxs)(cu,{children:[(0,t.jsxs)(cx,{children:[(0,t.jsx)(cg,{children:"휴대폰"}),(0,t.jsx)(cm,{}),(0,t.jsx)(cg,{children:i.phone.mobile??"-"})]}),(0,t.jsxs)(cx,{children:[(0,t.jsx)(cg,{children:"주소"}),(0,t.jsx)(cm,{}),(0,t.jsx)(cg,{children:i.address})]})]})]}),(0,t.jsx)(cb,{children:void 0===i.uuid?(0,t.jsx)(cw,{children:"지금 선택됨"}):(0,t.jsxs)(cj,{children:["선택",(0,t.jsx)(L,{size:16})]})})]},i.uuid))})}),J.default.style.color),cr=l.default.div.withConfig({componentId:"zh__sc-3bbaa2f0-0"})`
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;

  height: 729px;
  padding: 16px;

  background: #f9fafb;
`,cs=l.default.div.withConfig({componentId:"zh__sc-3bbaa2f0-1"})`
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
`,cc=l.default.div.withConfig({componentId:"zh__sc-3bbaa2f0-2"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;
`,cf=l.default.div.withConfig({componentId:"zh__sc-3bbaa2f0-3"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;
`,ch=l.default.div.withConfig({componentId:"zh__sc-3bbaa2f0-4"})`
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
`,cp=l.default.div.withConfig({componentId:"zh__sc-3bbaa2f0-5"})`
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
`,cu=l.default.div.withConfig({componentId:"zh__sc-3bbaa2f0-6"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
  align-self: stretch;
`,cx=l.default.div.withConfig({componentId:"zh__sc-3bbaa2f0-7"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;
`,cg=l.default.div.withConfig({componentId:"zh__sc-3bbaa2f0-8"})`
  min-width: 50px;

  font-size: 14px;
  font-weight: 400;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
  text-align: left;
`,cm=l.default.div.withConfig({componentId:"zh__sc-3bbaa2f0-9"})`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;

  width: 1px;
  height: 20px;

  background: #e5e7eb;
`,cb=l.default.div.withConfig({componentId:"zh__sc-3bbaa2f0-10"})`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-end;
  align-self: stretch;
  justify-content: center;
`,cj=l.default.button.withConfig({componentId:"zh__sc-3bbaa2f0-11"})`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;

  padding: 8px;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 16px; /* 100% */
  color: ${co[100]};
  letter-spacing: -1px;
`,cw=(0,l.default)(cj).withConfig({componentId:"zh__sc-3bbaa2f0-12"})`
  border-radius: 99px;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 16px; /* 100% */
  color: #fff;
  letter-spacing: -1px;

  background: #4f39f6;
`;var cy=e.i(5543);(0,n.observer)(function({setSelectedDrawerKey:e}){return(0,t.jsxs)(cv,{children:[(0,t.jsxs)(cC,{children:[(0,t.jsx)(B.default.Search,{size:17,color:"#9CA3AF"}),(0,t.jsx)(cI,{placeholder:"보호자 이름을 검색하세요.",value:"",onChange:e=>{e.target.value}})]}),(0,t.jsxs)(cz,{onClick:()=>e?.("add"),children:[(0,t.jsx)(cy.Plus,{size:18}),"신규 대리인(보호자) 추가하기"]})]})});let{PRIMARY:c_}=J.default.style.color,cv=l.default.div.withConfig({componentId:"zh__sc-612601c-0"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  align-self: stretch;

  padding: 16px;
`,cC=l.default.div.withConfig({componentId:"zh__sc-612601c-1"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;

  height: 36px;
  padding: 8px 16px;
  border: 1px solid ${c_[100]};
  border-radius: 4px;

  background: #fff;
`,cI=l.default.input.withConfig({componentId:"zh__sc-612601c-2"})`
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
`,cz=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-612601c-3"})`
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
`,cT=function({value:e,onChange:n,onApply:l,onClose:a}){let[d,o]=(0,i.useState)(()=>{let t,n;return t=e.replace(/\s+/g," ").trim(),n={...rM},rF.forEach(e=>{let i=e.options.find(n=>{let i=rW(e.optionLabels,n),l="state1"===e.key?rB[n]:rU[n]??"";return""!==i&&t.includes(i)||""!==l&&t.includes(l)});n[e.key]=i??null}),n}),{ref:r,fire:s}=ey(),c=(0,i.useRef)(!1),f=(0,i.useRef)(0),h=(0,i.useRef)(null);(0,i.useEffect)(()=>{if(!c.current)return;let t=r.current;if(null!==t)if(null!==h.current){let e=Math.max(t.scrollHeight-t.clientHeight,0);t.scrollTop=rY(h.current,0,e),h.current=null}else t.scrollTop=rH(t,e,f.current);c.current=!1},[r,e]);let p=""!==e.trim(),u=Object.values(d).filter(e=>null!==e).length,x=u===rF.length;return(0,t.jsxs)(rK,{children:[(0,t.jsxs)(rA,{children:[(0,t.jsx)(rX,{}),(0,t.jsx)(rR,{children:"자동으로 문장 생성하기"}),(0,t.jsx)(rL,{onClick:a,children:(0,t.jsx)(M.X,{size:16})})]}),(0,t.jsx)(rN,{}),(0,t.jsx)(rP,{children:(0,t.jsxs)(rq,{children:[(0,t.jsxs)(rQ,{children:[(0,t.jsx)(e5.default,{sx:{fontSize:16}}),(0,t.jsx)(rZ,{children:"각 카테고리와 세부 항목을 선택하면, 내용에 맞는 문장이 하단에 자동으로 생성됩니다."})]}),(0,t.jsx)(rJ,{children:rF.map(i=>{let l=d[i.key];return(0,t.jsxs)(r0,{children:[(0,t.jsxs)(r1,{children:[(0,t.jsx)(r2,{children:i.index}),(0,t.jsx)(r6,{children:i.label})]}),(0,t.jsx)(r4,{children:i.options.map(a=>(0,t.jsxs)(r5,{type:"button",$selected:l===a,onClick:()=>((t,i)=>{let l=d[t];if(l===i){let n=r.current,i="state1"===t?rB[l]:rU[l]??"",a=""===i?-1:e.indexOf(i);null!==n&&a>=0&&(h.current=rH(n,e,a,.5))}else h.current=null;let a={...d,[t]:l===i?null:i};o(a);let p=(e=>{let t=e.state1,n=e.state2;if(null===t||null===n)return"";let i=rB[t],l=rU[n]??"";return""===i.trim()||""===l.trim()?"":`○ 대상자의 식사영양관리 서비스 비용 청구 기간 중 ${i} ${l} 이에 따라 예외지급을 청구합니다.`.trim()})(a);""!==p.trim()&&s(),f.current=((e,t,n)=>{if(""===n.trim())return 0;let i=t[e];if(null===i)return 0;let l="state1"===e?rB[i]:rU[i]??"",a=""===l?-1:n.indexOf(l);return a>=0?a:0})(t,a,p),c.current=!0,n(p)})(i.key,a),children:[rW(i.optionLabels,a),l===a&&(0,t.jsx)(lg.default,{sx:{fontSize:16}})]},`${i.key}-${a}`))})]},i.key)})}),(0,t.jsx)(rN,{style:{marginTop:"auto"}}),(0,t.jsxs)(r3,{children:[(0,t.jsxs)(r9,{children:[(0,t.jsx)(B.default.AI,{size:16,color:"#4f39f6"}),"자동 생성 문장"]}),(0,t.jsx)(r8,{ref:r,value:e,placeholder:"카테고리/키워드와 세부 상태를 선택하면 문서에 사용할 문장이 자동으로 생성됩니다.",readOnly:!0})]}),(0,t.jsxs)(r7,{children:[(0,t.jsx)(se,{type:"button",onClick:()=>{o({...rM}),n("")},disabled:!p,children:"다시 생성하기"}),(0,t.jsxs)(st,{type:"button",onClick:l,disabled:!(0===u||x),children:[(0,t.jsx)(lg.default,{sx:{fontSize:16}}),"보고서에 반영하기"]})]})]})})]})},cS=function({value:e,autoFilledReferenceValue:n,keywords:l,isKeywordListLoading:a,isKeywordCreating:d,isGenerating:o,onAddKeyword:r,onGenerate:s,onChange:c,onApply:f,onClose:h}){let{ref:p,fire:u}=ey(),[x,g]=(0,i.useState)(""),[m,b]=(0,i.useState)([]),[j,w]=(0,i.useState)({}),y=["POSITIVE","NEUTRAL","NEGATIVE"],_=m.filter(e=>l.includes(e)),v=""!==e.trim(),C=x.trim(),I=""!==C&&!1===d&&!1===a,z=_.every(e=>void 0!==j[e]),T=!1===a&&!1===o&&_.length>0&&z,S=""!==e&&e===n,k=async()=>{I&&(await r(C),g(""))},E=async()=>{if(!T)return;let e=_.reduce((e,t)=>{let n=j[t];return void 0===n||e.push({keyword:t,detailStatus:n}),e},[]),t=await s({selectedKeywordDetailStatuses:e});null!==t&&(""!==t.trim()&&u(),c(t))};return(0,t.jsxs)(sl,{children:[(0,t.jsxs)(rA,{children:[(0,t.jsx)(sa,{}),(0,t.jsx)(rR,{children:"자동으로 문장 생성하기"}),(0,t.jsx)(sd,{onClick:h,children:(0,t.jsx)(M.X,{size:16})})]}),(0,t.jsx)(rN,{}),(0,t.jsx)(so,{children:(0,t.jsxs)(sr,{children:[(0,t.jsxs)(sf,{children:[(0,t.jsxs)(sh,{children:[(0,t.jsxs)(ss,{children:[(0,t.jsx)(e5.default,{sx:{fontSize:16}}),(0,t.jsx)(sc,{children:"각 키워드와 변화 정도를 선택한 후, [문장 생성하기] 버튼을 클릭해주세요. 키워드와 내용에 맞는 문장이 하단에 자동으로 생성됩니다."})]}),(0,t.jsxs)(sp,{children:[(0,t.jsxs)(su,{children:[(0,t.jsx)(sx,{value:x,placeholder:"추가할 키워드를 입력해주세요. (예: 복지관 연계)",onChange:e=>{g(e.target.value)},onKeyDown:e=>{"Enter"===e.key&&(e.preventDefault(),k())}}),(0,t.jsx)(sg,{type:"button",disabled:!I,onClick:()=>{k()},children:"새 키워드 추가"})]}),(0,t.jsx)(sm,{children:l.map(e=>(0,t.jsx)(sb,{type:"button",$selected:_.includes(e),onClick:()=>{b(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e]),w(t=>{if(!1===m.includes(e))return t;let n={...t};return delete n[e],n})},children:e},e))})]}),_.length>0?(0,t.jsx)(sj,{children:_.map((e,n)=>(0,t.jsxs)(sw,{children:[(0,t.jsxs)(sy,{children:[(0,t.jsx)(s_,{children:String(n+1).padStart(2,"0")}),(0,t.jsxs)(sv,{children:["[",e,"]에 대한 세부 상태를 선택해주세요."]})]}),(0,t.jsx)(sC,{children:y.map(n=>(0,t.jsx)(sI,{type:"button",$selected:j[e]===n,onClick:()=>{w(t=>({...t,[e]:n}))},children:sn.default[n].label},`${e}:${n}`))})]},e))}):null]}),(0,t.jsx)(sz,{children:(0,t.jsx)(sT,{type:"button",disabled:!T,onClick:()=>{E()},children:"문장 생성하기"})})]}),(0,t.jsx)(rN,{style:{marginTop:"auto"}}),(0,t.jsxs)(sS,{children:[(0,t.jsxs)(sk,{children:[(0,t.jsx)(B.default.AI,{size:16,color:"#4f39f6"}),"자동 생성 문장"]}),(0,t.jsx)(sE,{$isAutoFilled:S,ref:p,value:e,placeholder:"카테고리/키워드와 세부 상태를 선택하면 문서에 사용할 문장이 자동으로 생성됩니다.",onChange:e=>{c(e.target.value)}})]}),(0,t.jsxs)(sD,{children:[(0,t.jsx)(sA,{type:"button",onClick:()=>{c(""),b([]),w({})},disabled:!v,children:"다시 생성하기"}),(0,t.jsxs)(sO,{type:"button",onClick:()=>{f()},children:[(0,t.jsx)(lg.default,{sx:{fontSize:16}}),"보고서에 반영하기"]})]})]})})]})},ck=function({value:e,onChange:n,onApply:l,onClose:a}){let d=(0,i.useMemo)(()=>{let t,n;return t=e.split("\n").map(e=>e.trim()).filter(e=>""!==e),n={...sR},s$.forEach(e=>{let i=sN.find(n=>t.includes(e.sentences[n]));n[e.key]=i??null}),n},[e]),{ref:o,fire:r}=ey(),s=(0,i.useRef)(!1),c=(0,i.useRef)(0),f=(0,i.useRef)(null);(0,i.useEffect)(()=>{if(!s.current)return;let t=o.current;if(null!==t)if(null!==f.current){let e=Math.max(t.scrollHeight-t.clientHeight,0);t.scrollTop=sP(f.current,0,e),f.current=null}else t.scrollTop=sM(t,e,c.current);s.current=!1},[o,e]);let h=""!==e.trim();return(0,t.jsxs)(sU,{children:[(0,t.jsxs)(rA,{children:[(0,t.jsx)(sW,{}),(0,t.jsx)(rR,{children:"자동으로 문장 생성하기"}),(0,t.jsx)(rL,{onClick:a,children:(0,t.jsx)(M.X,{size:16})})]}),(0,t.jsx)(rN,{}),(0,t.jsx)(rP,{children:(0,t.jsxs)(sY,{children:[(0,t.jsxs)(sV,{children:[(0,t.jsx)(e5.default,{sx:{fontSize:16}}),(0,t.jsx)(sH,{children:"각 카테고리와 세부 항목을 선택하면, 내용에 맞는 문장이 하단에 자동으로 생성됩니다."})]}),(0,t.jsx)(sG,{children:s$.map(i=>{let l=d[i.key];return(0,t.jsxs)(sK,{children:[(0,t.jsxs)(sX,{children:[(0,t.jsx)(sq,{children:i.index}),(0,t.jsx)(sQ,{children:i.label})]}),(0,t.jsx)(sZ,{children:sN.map(a=>(0,t.jsxs)(sJ,{type:"button",$selected:l===a,onClick:()=>((t,i)=>{let l=d[t];if(null!==l&&null===i){let n=o.current,i=s$.find(e=>e.key===t)?.sentences[l]??"",a=""===i?-1:e.indexOf(i);null!==n&&a>=0&&(f.current=sM(n,e,a,.5))}else f.current=null;let a={...d,[t]:i},h=s$.map(e=>{let t=a[e.key];return null===t?null:e.sentences[t]}).filter(e=>null!==e).join("\n\n");""!==h.trim()&&r(),c.current=((e,t,n)=>{if(""===n.trim())return 0;let i=t[e];if(null===i){let e=s$.findIndex(e=>null!==t[e.key]);if(e<0)return 0;let i=s$[e];if(void 0===i)return 0;let l=t[i.key];if(null===l)return 0;let a=i.sentences[l],d=n.indexOf(a);return d>=0?d:0}let l=s$.find(t=>t.key===e)?.sentences[i]??"",a=""===l?-1:n.indexOf(l);return a>=0?a:0})(t,a,h),s.current=!0,n(h)})(i.key,l===a?null:a),children:[sL[a],l===a&&(0,t.jsx)(lg.default,{sx:{fontSize:16}})]},`${i.key}-${a}`))})]},i.key)})}),(0,t.jsx)(rN,{style:{marginTop:"auto"}}),(0,t.jsxs)(s0,{children:[(0,t.jsxs)(s1,{children:[(0,t.jsx)(B.default.AI,{size:16,color:"#4f39f6"}),"자동 생성 문장"]}),(0,t.jsx)(s2,{ref:o,value:e,placeholder:"카테고리/키워드와 세부 상태를 선택하면 문서에 사용할 문장이 자동으로 생성됩니다.",readOnly:!0})]}),(0,t.jsxs)(s6,{children:[(0,t.jsx)(s4,{type:"button",onClick:()=>{n("")},disabled:!h,children:"다시 생성하기"}),(0,t.jsxs)(s5,{type:"button",onClick:l,children:[(0,t.jsx)(lg.default,{sx:{fontSize:16}}),"보고서에 반영하기"]})]})]})})]})};var cE=e.i(28095);let cD=function({isOpen:e,contractId:n,onClose:l,onConfirm:a}){let[d,o]=(0,i.useState)("idle"),[r,s]=(0,i.useState)([]),[c,f]=(0,i.useState)("");(0,i.useEffect)(()=>{let t=!1;return e?((async()=>{if(null===n){if(t)return;o("error"),s([]),f("");return}if(t)return;o("loading");let[e,i]=await l4.default.data.contractPayment.getDepositList({contractId:n});if(t)return;if(null!==e||null===i)return o("error");let l=i.slice().sort((e,t)=>{let n=t.depositDate.localeCompare(e.depositDate);return 0!==n?n:t.id.localeCompare(e.id)});s(l),f(l[0]?.id??""),o("success")})(),()=>{t=!0}):()=>{t=!0}},[n,e]);let h=(0,i.useMemo)(()=>r.find(e=>e.id===c)??null,[r,c]);return e?(0,t.jsx)(cA,{children:(0,t.jsxs)(cO,{onClick:e=>e.stopPropagation(),children:[(0,t.jsxs)(c$,{children:[(0,t.jsx)(cR,{children:"본인부담금 영수증을 작성할 입금 내역을 선택해주세요."}),(0,t.jsx)(cL,{children:"아래 선택한 입금 내역이 본인부담금 영수증에 반영되며, 반영 이후에도 자유롭게 수정할 수 있습니다."}),(0,t.jsxs)(cN,{children:[(0,t.jsx)(cP,{children:"입금 내역"}),"success"===d&&r.length>0?(0,t.jsx)(cF,{value:c,onChange:e=>{f(e.target.value)},children:r.map(e=>{var n;return(0,t.jsx)("option",{value:e.id,children:`${function(e){let t=e.match(/^(\d{4})-(\d{2})-(\d{2})$/);if(null===t)return e;let[,n,i,l]=t;return`${n}년 ${i}월 ${l}일`}(e.depositDate)} - ${(n=e.amount,`${Math.max(0,Math.floor(n)).toLocaleString("ko-KR")}원`)} 입금`},e.id)})}):(0,t.jsx)(cF,{value:"",disabled:!0,children:(0,t.jsx)("option",{value:"",children:"loading"===d?"입금 내역을 불러오는 중입니다.":"error"===d?"입금 내역을 불러오지 못했습니다.":"선택 가능한 입금 내역이 없습니다."})})]}),"error"===d?(0,t.jsx)(cM,{children:"잠시 후 다시 시도해 주세요."}):null]}),(0,t.jsxs)(cB,{children:[(0,t.jsx)(cU,{type:"button",onClick:l,children:"취소하기"}),(0,t.jsx)(cW,{type:"button",disabled:"loading"===d,onClick:()=>{"loading"!==d&&a(h)},children:"success"===d&&0===r.length?"내역 없이 작성하기":"내역 반영하기"})]})]})}):null},cA=l.default.div.withConfig({componentId:"zh__sc-8efbebf8-0"})`
  position: fixed;
  z-index: 3000;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgb(10 10 10 / 48%);
`,cO=l.default.div.withConfig({componentId:"zh__sc-8efbebf8-1"})`
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
`,c$=l.default.div.withConfig({componentId:"zh__sc-8efbebf8-2"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;

  width: 453px;
`,cR=l.default.h3.withConfig({componentId:"zh__sc-8efbebf8-3"})`
  align-self: stretch;

  margin: 0;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #000;
`,cL=l.default.p.withConfig({componentId:"zh__sc-8efbebf8-4"})`
  align-self: stretch;

  margin: 0;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #000;
`,cN=l.default.div.withConfig({componentId:"zh__sc-8efbebf8-5"})`
  display: flex;
  gap: 10px;
  align-items: center;
  align-self: stretch;
  justify-content: center;

  width: 100%;
`,cP=l.default.div.withConfig({componentId:"zh__sc-8efbebf8-6"})`
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #000;
`,cF=(0,l.default)(o.default.Input.Select).withConfig({componentId:"zh__sc-8efbebf8-7"})`
  flex: 1;
  height: 36px;
`,cM=l.default.div.withConfig({componentId:"zh__sc-8efbebf8-8"})`
  display: flex;
  align-items: center;

  min-height: 20px;

  font-size: 16px;
  line-height: 20px;
  color: #6b7280;
`,cB=l.default.div.withConfig({componentId:"zh__sc-8efbebf8-9"})`
  display: flex;
  gap: 12px;
  align-items: center;
  align-self: stretch;
  justify-content: flex-end;
`,cU=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-8efbebf8-10"})`
  height: 36px;
  padding: 8px 14px;
`,cW=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-8efbebf8-11"})`
  height: 36px;
  padding: 8px 14px;
`,cY="__preview__",cV=(e,t)=>e?.includes(t)===!0,cH=e=>cV(e,rj.default.TARGET_COPAYMENT_RECEIPT_AMOUNT)||cV(e,"COPAYMENT_RECEIPT_AMOUNT"),cG=e=>cV(e,rj.default.TARGET_COPAYMENT_RECEIPT_RECEIVED_DATE)||cV(e,"COPAYMENT_RECEIPT_RECEIVED_DATE"),cK=(0,n.observer)(function(){let e=a.default.modal.documentView,n=a.default.client.info.byClient.selectedContractId,l=a.default.data.docs.list.query?.contractId??null,[d,o]=(0,i.useState)(""),[r,s]=(0,i.useState)(null),[c,f]=(0,i.useState)(!1),[h,p]=(0,i.useState)(!1),[u,x]=(0,i.useState)(!1),g=(0,i.useRef)(null),m=e.selectedTemplateId,b=e.selectedTemplate,j=null===e.selectedDocumentId&&null!==m,w=(0,i.useMemo)(()=>null===m?[]:e.documents.filter(e=>e.templateId===m).sort((e,t)=>{let n=t.occurrenceKey.localeCompare(e.occurrenceKey);return 0!==n?n:t.createdAt.localeCompare(e.createdAt)}),[e.documents,m]),y=(0,i.useMemo)(()=>w[0]?.id??"",[w]),_=(0,i.useMemo)(()=>{if(j)return cY;let t=e.selectedDocumentId;return"string"==typeof t&&w.some(e=>e.id===t)?t:w.some(e=>e.id===d)?d:y},[w,y,j,e.selectedDocumentId,d]),v=w.some(e=>"COMPLETED"!==e.displayStatus),C=null!==b&&"MANUAL"===b.creationMode&&!1===v,I=e.hasSelectedTemplatePreviewSession,z=e.hasSelectedFieldChanges,T=e.selectedTemplateFields.some(e=>{let t=e.uiProps.triggerKeys;return cV(t,rj.default.COPAYMENT_RECEIPT_TRANSACTION_NUMBER)||cH(t)||cG(t)});(0,i.useEffect)(()=>{let t=g.current;if(null===t||e.selectedTemplateId!==t.templateId)return;let n=e.selectedTemplateFields;if(0===n.length)return;let i=n.filter(e=>cH(e.uiProps.triggerKeys)),l=n.filter(e=>cG(e.uiProps.triggerKeys));if(0===i.length&&0===l.length){g.current=null;return}i.forEach(n=>{e.updateSelectedFieldValue({page:n.page,fieldKey:n.fieldKey,value:t.amountText})}),l.forEach(n=>{e.updateSelectedFieldValue({page:n.page,fieldKey:n.fieldKey,value:t.receivedDate})}),g.current=null},[e,e.selectedTemplateFields]);let S=t=>{if(t===cY){null!==m&&e.openTemplateWithoutDocument(m);return}e.open(t)},k=async()=>{if(null!==r&&!h){p(!0);try{let t=await e.saveSelectedFieldChanges();if(null===t)return;S(r),s(null),f(!1)}finally{p(!1)}}};return(0,t.jsxs)(cX,{children:[(0,t.jsxs)(cq,{children:[(0,t.jsxs)(cQ,{children:[(0,t.jsx)(B.default.Ballot,{size:16}),"서류 목록"]}),(0,t.jsxs)(cJ,{disabled:!C,onClick:()=>void(()=>{if(C&&null!==m){if(T)return x(!0);e.openTemplateWithoutDocument(m)}})(),children:[(0,t.jsx)(cE.default,{sx:{fontSize:20}}),"새 서류 생성하기"]})]}),(0,t.jsxs)(cZ,{value:_,onChange:e=>{let t=e.target.value;if(o(t),t!==_){if(z){s(t),f(!0);return}S(t)}},disabled:0===w.length&&!1===I,children:[I?(0,t.jsx)("option",{value:cY,children:"새 서류 미리보기 (저장 전)"}):null,w.map(e=>{let n=ok(e.displayStatus),i=function(e){if(!nz.default.yearMonth.is(e))return null;let[t,n]=e.split("-"),i=Number(n);return!Number.isInteger(i)||i<1||i>12?null:`${t}년 ${i}월`}(e.occurrenceKey)??function(e){let t=new Date(e);if(Number.isNaN(t.getTime()))return e;let n=new Map(new Intl.DateTimeFormat("ko-KR",{timeZone:"Asia/Seoul",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}).formatToParts(t).map(e=>[e.type,e.value])),i=n.get("year")??"0000",l=n.get("month")??"00",a=n.get("day")??"00",d=n.get("hour")??"00",o=n.get("minute")??"00",r=n.get("second")??"00";return`${i}년 ${l}월 ${a}일 (${d}:${o}:${r}) 생성됨`}(e.createdAt);return(0,t.jsx)("option",{value:e.id,"data-badge":n.badge.label,"data-badge-tone":n.badge.color,children:i},e.id)})]}),(0,t.jsx)(r_,{isOpen:c,actionType:"move",isProcessing:h,onClickSecondary:()=>{null===r||(e.discardSelectedFieldChanges(),S(r),s(null)),f(!1)},onClickPrimary:()=>{k()}}),(0,t.jsx)(cD,{isOpen:u,contractId:n??l,onClose:()=>{x(!1)},onConfirm:t=>{if(null===m)return void x(!1);if(null===t){x(!1),e.openTemplateWithoutDocument(m);return}g.current={templateId:m,amountText:String(Math.max(0,Math.floor(t.amount))),receivedDate:t.depositDate},x(!1),e.openTemplateWithoutDocument(m)}})]})}),cX=l.default.div.withConfig({componentId:"zh__sc-70c07d1f-0"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;

  padding: 16px 12px;
  border: 1px solid #d8dee7;
  border-radius: 8px;

  background: #fcfdff;
`,cq=l.default.div.withConfig({componentId:"zh__sc-70c07d1f-1"})`
  display: flex;
  justify-content: space-between;
  width: 100%;
`,cQ=l.default.div.withConfig({componentId:"zh__sc-70c07d1f-2"})`
  display: flex;
  gap: 8px;
  align-items: center;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 16px; /* 100% */
  color: #0a0a0a;
`,cZ=(0,l.default)(o.default.Input.Select).withConfig({componentId:"zh__sc-70c07d1f-3"})`
  width: 100%;
`,cJ=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-70c07d1f-4"})`
  display: flex;
  gap: 4px;
  align-items: center;

  height: 40px;
  padding: 8px 16px;
`,c0=(0,n.observer)(function(){let{selectedOcrFile:e,isOcrAnalyzing:n,isUncreatedMonthlyScheduleDocument:i,monthlyScheduleYearMonth:l,monthlyScheduleClientContractId:d,analyzeSelectedOcrFile:o,clearSelectedOcrFile:r}=a.default.modal.documentView;return(0,t.jsxs)(c1,{children:[(0,t.jsxs)(c4,{disabled:null===e||n||i&&(null===l||null===d),onClick:()=>{o()},children:["분석 시작",(0,t.jsx)(L,{size:16})]}),null!==e&&(0,t.jsx)(c6,{onClick:()=>{r()},children:"취소"})]})}),c1=l.default.div.withConfig({componentId:"zh__sc-11817043-0"})`
  display: flex;
  flex-flow: row-reverse;
  gap: 10px;
  align-self: stretch;
  justify-content: space-between;
`,c2=l.css`
  display: flex;
  flex-shrink: 0;
  gap: 10px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,c6=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-11817043-1"})`
  ${c2}
  visibility: hidden;
`,c4=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-11817043-2"})`
  ${c2}
`,{FILE_EXTENSION_WHITELIST_BY_GROUP:c5}=U.default.file,c3=(0,n.observer)(function(){var e;let n,{selectedOcrFile:i,isOcrAnalyzing:l,clearSelectedOcrFile:d}=a.default.modal.documentView;if(null===i)return null;let o=-1===(n=(e=i.name).lastIndexOf("."))?"":e.slice(n).toLowerCase();return(0,t.jsx)(c9,{children:(0,t.jsxs)(c8,{children:[(0,t.jsxs)(c7,{children:[(0,t.jsx)(fe,{children:c5.IMAGE.some(e=>e===o)?(0,t.jsx)(B.default.Photo,{size:17,color:"#FA8E43"}):c5.AUDIO.some(e=>e===o)?(0,t.jsx)(B.default.SpeechToText,{size:17,color:"#A855F7"}):c5.DOCUMENT.some(e=>e===o)?(0,t.jsx)(B.default.News,{size:17,color:"#2264E8"}):null}),(0,t.jsx)(ft,{children:(0,t.jsx)(fn,{children:i.name})})]}),(0,t.jsxs)(fi,{onClick:d,disabled:l,children:["삭제",(0,t.jsx)(M.X,{size:16})]})]},`${i.name}-${i.size}-${i.lastModified}`)})}),c9=l.default.div.withConfig({componentId:"zh__sc-4e7cda26-0"})`
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
`,c8=l.default.div.withConfig({componentId:"zh__sc-4e7cda26-1"})`
  display: flex;
  flex-shrink: 0;
  gap: 24px;
  align-items: center;

  padding: 12px 16px;
  border-radius: 8px;

  background: #f6f8fb;
`,c7=l.default.div.withConfig({componentId:"zh__sc-4e7cda26-2"})`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`,fe=l.default.div.withConfig({componentId:"zh__sc-4e7cda26-3"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;
  border-radius: 4px;

  background: #fff;
`,ft=l.default.div.withConfig({componentId:"zh__sc-4e7cda26-4"})`
  display: flex;
  align-items: center;
  align-self: stretch;

  width: 196px;
  height: 40px;

  color: #0a0a0a;
`,fn=l.default.div.withConfig({componentId:"zh__sc-4e7cda26-5"})`
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #0a0a0a;
`,fi=l.default.button.withConfig({componentId:"zh__sc-4e7cda26-6"})`
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
`;function fl(){let[e,n]=(0,i.useState)(0);return(0,i.useEffect)(()=>{let e=performance.now(),t=0,i=l=>{n(Math.min(100*(1-Math.exp(-((l-e)/1e3*.05))),98)),t=window.requestAnimationFrame(i)};return t=window.requestAnimationFrame(i),()=>{window.cancelAnimationFrame(t)}},[]),(0,t.jsx)(fa,{children:(0,t.jsx)(fd,{$progress:e})})}let fa=l.default.div.withConfig({componentId:"zh__sc-c9208651-0"})`
  overflow: hidden;
  display: flex;
  align-self: stretch;

  width: 100%;
  height: ${8}px;
  border-radius: 99px;

  background: #e6e0ff;
  background-color: #e5e2ff;
`,fd=l.default.div.attrs(({$progress:e})=>({style:{transform:`scaleX(${e/100})`}})).withConfig({componentId:"zh__sc-c9208651-1"})`
  transform-origin: left center;
  width: 100%;
  height: 100%;
  background-color: #5635ff;
`,fo=(0,n.observer)(function({disabled:e}){let{isWindowFileDragging:n}=a.default.ui.layout,{selectedOcrFile:i,isOcrFileError:l,isOcrAnalyzing:d}=a.default.modal.documentView,o=l?"지원하지 않는 파일 형식입니다.":!e&&n?"파일을 여기에 놓으면 업로드 됩니다.":d?"업로드한 파일을 분석하고 있습니다.":"이곳에 파일을 끌어다 놓거나 (드래그 앤 드롭), 클릭하여 업로드하세요.";return(0,t.jsxs)(fs,{children:[null===i&&!l&&(0,t.jsx)(fc,{children:(0,t.jsx)(Z.Upload,{size:26,color:e?"#9ca3af":fr[100]})}),(0,t.jsxs)(ff,{children:[(0,t.jsx)(fh,{$disabled:e,$isError:l,children:o}),(0,t.jsx)(fp,{$disabled:e,children:null===i||d?"지원 파일 형식: 사진 이미지":"새 파일을 업로드하면 기존 파일이 교체됩니다."})]}),d&&(0,t.jsx)(fl,{})]})}),{PRIMARY:fr}=J.default.style.color,fs=l.default.div.withConfig({componentId:"zh__sc-cdea1a21-0"})`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  align-self: stretch;
  justify-content: center;
`,fc=l.default.div.withConfig({componentId:"zh__sc-cdea1a21-1"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;
`,ff=l.default.div.withConfig({componentId:"zh__sc-cdea1a21-2"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  align-self: stretch;
  justify-content: center;
`,fh=l.default.div.withConfig({componentId:"zh__sc-cdea1a21-3"})`
  font-size: 14px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 142.857% */
  color: ${({$disabled:e,$isError:t})=>t?"#ff4d4f":e?"#9ca3af":"#4f39f6"};
  text-align: center;
`,fp=l.default.div.withConfig({componentId:"zh__sc-cdea1a21-4"})`
  font-size: 14px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 142.857% */
  color: ${({$disabled:e})=>e?"#9ca3af":"#99a1af"};
`,fu=U.default.file.FILE_EXTENSION_WHITELIST_BY_GROUP.IMAGE.join(","),fx=(0,n.observer)(function(){let{isWindowFileDragging:e}=a.default.ui.layout,n=a.default.modal.documentView,{selectedDocumentDisplayStatus:l,selectedOcrFile:d,isOcrFileError:o}=n,r=(0,i.useRef)(null),s=!n.isOcrSupported||"WAITING_TO_DRAFT"!==l&&"NEED_UPDATE"!==l&&"NEED_MATCHING"!==l,c=e=>{n.setSelectedOcrFile(e)};return(0,O.default)(e=>{if(s)return;let t=e[0];void 0!==t&&c(t)}),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(fg,{ref:r,type:"file",accept:fu,disabled:s,onChange:e=>{if(s)return;let t=Array.from(e.target.files??[]);if(0===t.length)return;let n=t[0];void 0!==n&&(c(n),e.target.value="")}}),(0,t.jsxs)(fm,{$isWindowFileDragging:e,$disabled:s,onDragOver:e=>{if(e.preventDefault(),s)return},onDrop:e=>{if(e.preventDefault(),s)return;let t=Array.from(e.dataTransfer.files);if(0===t.length)return;let n=t[0];void 0!==n&&c(n)},onClick:e=>{!s&&e.target instanceof HTMLElement&&(e.target.closest("button")||r.current?.click())},$isError:o,children:[null!==d&&(0,t.jsx)(c3,{}),(0,t.jsx)(fo,{disabled:s}),(0,t.jsx)(c0,{})]})]})}),fg=l.default.input.withConfig({componentId:"zh__sc-c05f4a71-0"})`
  display: none;
`,fm=l.default.div.withConfig({componentId:"zh__sc-c05f4a71-1"})`
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
`,fb=(0,n.observer)(function(){let{isOcrAnalyzing:e,monthlyScheduleYearMonth:n,monthlyScheduleClientContractId:i,setMonthlyScheduleYearMonth:l,setMonthlyScheduleClientContractId:d}=a.default.modal.documentView,r=a.default.modal.serviceWorkerDetail.serviceWorker?.assignedContracts??[];return(0,t.jsxs)(fj,{children:[(0,t.jsxs)(fw,{children:[(0,t.jsx)(fy,{children:"년월"}),(0,t.jsx)(o.default.Input.Date,{style:{textAlign:"center",height:"100%"},value:n??"",valueType:"year-month",readOnly:e,pickerOptions:{hideDate:!0},onChange:l})]}),(0,t.jsxs)(fw,{children:[(0,t.jsx)(fy,{children:"이용자 계약"}),(0,t.jsxs)(f_,{value:i??"",disabled:e||0===r.length,onChange:e=>{d(e.target.value||null)},children:[(0,t.jsx)("option",{value:"",children:"이용자 계약 선택"}),r.map(e=>(0,t.jsx)("option",{value:e.contractId,children:null===e.contractEndDate?e.clientName:`${e.clientName} (${e.contractEndDate.replaceAll("-",".")})`},[e.contractId,e.clientName,e.clientBirthDate??"",e.contractEndDate??"",e.status].join(":")))]})]})]})}),fj=l.default.div.withConfig({componentId:"zh__sc-42463ee-0"})`
  display: grid;
  grid-template-columns: 136px minmax(0, 1fr);
  gap: 10px;
  align-self: stretch;
`,fw=l.default.label.withConfig({componentId:"zh__sc-42463ee-1"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
`,fy=l.default.span.withConfig({componentId:"zh__sc-42463ee-2"})`
  font-size: 12px;
  font-weight: 700;
  color: #494f53;
`,f_=(0,l.default)(o.default.Input.Select).withConfig({componentId:"zh__sc-42463ee-3"})`
  width: 100%;
  height: 32px;
`,{FILE_EXTENSION_WHITELIST_BY_GROUP:fv}=U.default.file,fC=(0,n.observer)(function(){var e;let n,l=a.default.modal.documentView,{analyzedOcrFile:d,selectedDocumentDisplayStatus:o}=l,{ref:r,fire:s}=ey(),c=!l.isOcrSupported||"WAITING_TO_DRAFT"!==o&&"NEED_UPDATE"!==o&&"NEED_MATCHING"!==o;if((0,i.useEffect)(()=>{null!==d&&s()},[d,s]),c||null===d)return null;let f=-1===(n=(e=d.name).lastIndexOf("."))?"":e.slice(n).toLowerCase();return(0,t.jsxs)(fI,{ref:r,children:[(0,t.jsxs)(fz,{children:[(0,t.jsxs)(fT,{children:[(0,t.jsx)(B.default.FindInPage,{size:18}),"AI 문서 인식 완료"]}),(0,t.jsxs)(fS,{children:["업로드된 서류들에서 정보를 성공적으로 추출했습니다. ",(0,t.jsx)("br",{})]})]}),(0,t.jsxs)(fk,{children:[(0,t.jsxs)(fE,{children:[(0,t.jsx)(B.default.CheckCircle,{size:18}),"분석 완료된 첨부 서류 (1건)"]}),(0,t.jsx)(fD,{children:(0,t.jsxs)(fA,{children:[(0,t.jsxs)(fO,{children:[(0,t.jsx)(f$,{children:fv.IMAGE.some(e=>e===f)?(0,t.jsx)(B.default.Photo,{size:17,color:"#FA8E43"}):fv.AUDIO.some(e=>e===f)?(0,t.jsx)(B.default.SpeechToText,{size:17,color:"#A855F7"}):fv.DOCUMENT.some(e=>e===f)?(0,t.jsx)(B.default.News,{size:17,color:"#2264E8"}):null}),(0,t.jsx)(fR,{children:(0,t.jsx)(fL,{children:d.name})})]}),(0,t.jsx)(fN,{children:"추출 완료"})]},`${d.name}-${d.size}-${d.lastModified}`)})]})]})}),fI=l.default.div.withConfig({componentId:"zh__sc-91a1d4f6-0"})`
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
`,fz=l.default.div.withConfig({componentId:"zh__sc-91a1d4f6-1"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  align-self: stretch;
`,fT=l.default.div.withConfig({componentId:"zh__sc-91a1d4f6-2"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #0a0a0a;
`,fS=l.default.div.withConfig({componentId:"zh__sc-91a1d4f6-3"})`
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
`,fk=l.default.div.withConfig({componentId:"zh__sc-91a1d4f6-4"})`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  align-self: stretch;

  min-height: 0;
`,fE=l.default.div.withConfig({componentId:"zh__sc-91a1d4f6-5"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #0a0a0a;
`,fD=l.default.div.withConfig({componentId:"zh__sc-91a1d4f6-6"})`
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
`,fA=l.default.div.withConfig({componentId:"zh__sc-91a1d4f6-7"})`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 359px;
  height: 64px;
  padding: 12px 16px;
  border-radius: 8px;

  background: #f6f8fb;
`,fO=l.default.div.withConfig({componentId:"zh__sc-91a1d4f6-8"})`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`,f$=l.default.div.withConfig({componentId:"zh__sc-91a1d4f6-9"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;
  border-radius: 4px;

  background: #fff;
`,fR=l.default.div.withConfig({componentId:"zh__sc-91a1d4f6-10"})`
  display: flex;
  align-items: center;
  align-self: stretch;

  width: 196px;
  height: 40px;

  color: #0a0a0a;
`,fL=l.default.div.withConfig({componentId:"zh__sc-91a1d4f6-11"})`
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #0a0a0a;
`,fN=l.default.div.withConfig({componentId:"zh__sc-91a1d4f6-12"})`
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
`,fP=(0,n.observer)(function(){let{analyzedOcrFile:e,isUncreatedMonthlyScheduleDocument:n}=a.default.modal.documentView;return(0,t.jsxs)(fF,{children:[(0,t.jsx)(fx,{}),n?(0,t.jsx)(fb,{}):null,null!==e&&(0,t.jsx)(fC,{})]})}),fF=l.default.div.withConfig({componentId:"zh__sc-b3f3f20d-0"})`
  display: flex;
  flex: 1 0 0;
  flex-flow: column-reverse;
  gap: 12px;
  align-items: center;
  justify-content: flex-start;

  width: 517px;
  padding: 32px 24px;
  border-radius: 16px;

  background: #f9fafb;
`,fM=l.default.div.withConfig({componentId:"zh__sc-80a26ee5-0"})`
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
`;function fB(e){if(null==e||""===e.trim())return"-";let t=new Date(e);if(Number.isNaN(t.getTime()))return"-";let n=String(t.getFullYear()),i=String(t.getMonth()+1).padStart(2,"0"),l=String(t.getDate()).padStart(2,"0"),a=String(t.getHours()).padStart(2,"0"),d=String(t.getMinutes()).padStart(2,"0");return`${n}-${i}-${l} ${a}:${d}`}let fU=(0,n.observer)(function(){let e=a.default.modal.documentView,n=e.isClientMode,i=a.default.client.info.byClient.selectedContractId,l=(a.default.data.contract.list.data??[]).find(e=>e.id===i)??null,d=n?fB(l?.client.createdAt??l?.createdAt):fB(e.selectedDocument?.createdAt),o=l?.client.name??"-",r=a.default.modal.serviceWorkerDetail.serviceWorker?.name??"-",s=n?`이용자 ${o}님의 기존 이용 내역과 갱신된 요금 정보가 성공적으로 양식에 매핑되었습니다.`:`제공인력 ${r}님의 계약/서류 정보가 현재 양식에 반영되었습니다.`;return(0,t.jsx)(fW,{children:(0,t.jsxs)(fY,{children:[(0,t.jsxs)(fV,{children:[(0,t.jsx)(fH,{children:(0,t.jsxs)(fG,{children:[(0,t.jsx)(fM,{$status:"done",children:(0,t.jsx)(b.Check,{size:12,color:"#ffffff",strokeWidth:3})}),n?"기존 이용자 정보 연동 완료":"제공인력 서류 데이터 반영 완료"]})}),(0,t.jsx)(fK,{children:(0,t.jsx)(fX,{children:`${n?"업로드 일시":"문서 생성 일시"}: ${d}`})})]}),(0,t.jsx)(fq,{children:(0,t.jsx)(fQ,{children:s})})]})})}),fW=l.default.div.withConfig({componentId:"zh__sc-a82a8c4-0"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;
`,fY=l.default.div.withConfig({componentId:"zh__sc-a82a8c4-1"})`
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
`,fV=l.default.div.withConfig({componentId:"zh__sc-a82a8c4-2"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  align-self: stretch;
`,fH=l.default.div.withConfig({componentId:"zh__sc-a82a8c4-3"})`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;
`,fG=l.default.div.withConfig({componentId:"zh__sc-a82a8c4-4"})`
  display: flex;
  gap: 4px;
  align-items: center;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 16px; /* 100% */
  color: #0a0a0a;
`,fK=l.default.div.withConfig({componentId:"zh__sc-a82a8c4-5"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  align-self: stretch;

  padding-left: 24px;
`,fX=l.default.div.withConfig({componentId:"zh__sc-a82a8c4-6"})`
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
`,fq=l.default.div.withConfig({componentId:"zh__sc-a82a8c4-7"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  align-self: stretch;

  padding-left: 24px;
`,fQ=l.default.div.withConfig({componentId:"zh__sc-a82a8c4-8"})`
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
`,fZ=(0,n.observer)(function(){let e=a.default.modal.documentView,{selectedTemplate:n}=e,i=e.isClientMode,l=n?.creationMode==="MANUAL",d=null===n?0:e.documents.filter(e=>e.templateId===n.id).length,o=i&&(l||null!==n&&d>=2);return(0,t.jsxs)(fJ,{children:[(0,t.jsx)(f0,{children:(0,t.jsx)(f1,{children:n?.name??"계약서 자동 생성"})}),(0,t.jsxs)(f2,{children:[o?(0,t.jsx)(cK,{}):null,null!==e.selectedDocument?(0,t.jsx)(fU,{}):null,(0,t.jsx)(fP,{})]})]})}),fJ=l.default.div.withConfig({componentId:"zh__sc-61494f9e-0"})`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  justify-content: space-between;

  width: 541px;
  border-right: 1px solid #e5e7eb;

  background: #fff;
`,f0=l.default.div.withConfig({componentId:"zh__sc-61494f9e-1"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;

  padding: 16px 20px;
  border-bottom: 1px solid #e5e7eb;

  background: #fff;
`,f1=l.default.div.withConfig({componentId:"zh__sc-61494f9e-2"})`
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
`,f2=l.default.div.withConfig({componentId:"zh__sc-61494f9e-3"})`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;

  padding: 16px 12px;
`,f6=function(e){return(0,t.jsxs)(f4,{children:[(0,t.jsx)(f5,{children:"오른쪽에서 년월을 선택하면 실제 제공일 리스트가 채워집니다."}),(0,t.jsx)(o.default.Input.Date,{value:e.value,valueType:"year-month",readOnly:e.disabled,pickerOptions:{hideDate:!0},style:{width:136,height:28,textAlign:"center"},onChange:t=>{e.onChangeYearMonth(t)}}),null!==e.errorMessage?(0,t.jsx)(f3,{children:e.errorMessage}):null]})},f4=l.default.div.withConfig({componentId:"zh__sc-698d13d5-0"})`
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
`,f5=l.default.div.withConfig({componentId:"zh__sc-698d13d5-1"})`
  font-size: 16px;
  font-weight: 500;
  color: #000;
`,f3=l.default.div.withConfig({componentId:"zh__sc-698d13d5-2"})`
  font-size: 12px;
  line-height: 18px;
  color: #dc2626;
`;function f9(){return(f9=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var f8=(0,i.forwardRef)(function(e,t){var n=e.color,l=e.size,a=void 0===l?24:l,d=function(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["color","size"]);return i.default.createElement("svg",f9({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),i.default.createElement("polyline",{points:"6 9 6 2 18 2 18 9"}),i.default.createElement("path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"}),i.default.createElement("rect",{x:"6",y:"14",width:"12",height:"8"}))});f8.propTypes={color:$.default.string,size:$.default.oneOfType([$.default.string,$.default.number])},f8.displayName="Printer";var f7=e.i(69477),he=e.i(68339);let ht=(0,n.observer)(function({isSaving:e,setIsSaving:n,resetLocalStates:l,onRequiredValidation:d}){let{close:o,selectedDocument:r}=a.default.modal.documentView,s=a.default.modal.documentView,[c,f]=(0,i.useState)(!1),[h,p]=(0,i.useState)(!1),u=s.selectedTemplateImagePaths.filter(e=>""!==e),x=(null!==s.selectedDocumentId||"NEED_UPDATE"!==s.selectedDocumentDisplayStatus)&&null!==s.selectedTemplateId&&u.length>0,g=s.hasSelectedFieldChanges,m=null===s.selectedDocumentDisplayStatus?{label:"미리보기",color:"lightBlue"}:ok(s.selectedDocumentDisplayStatus).badge,j=s.isClientMode&&null===r||null!==r&&(0,oE.shouldSaveDocumentBeforePrint)(r.displayStatus),w=s.isServiceWorkerMode&&r?.displayStatus==="LINKED_COMPLETED"&&(0,rw.isSalaryProvisionMonthlyScheduleDocument)(r.templateName),y=async()=>{if(x&&!h&&!e&&(!j||d("print"))){p(!0);try{if(j){n(!0);try{let e=await s.saveSelectedFieldChanges();if(null===e)return}finally{n(!1)}await new Promise(e=>{window.setTimeout(e,600)})}let e=s.selectedTemplateId;if(null===e)return;let t=u.map((t,n)=>({id:`${e}-${n+1}`,templateId:e,imagePath:t,page:n+1}));if(0===t.length)return;let i=s.selectedTemplate?.name?.trim()??"",l=""===i?"Print":i,d=""===s.printTitleSuffix?l:`${l} - ${s.printTitleSuffix}`;await (0,he.renderDocumentPrintView)({pages:t,fields:s.selectedTemplateFields,printTitle:d,onImageLoadFailure:e=>{a.default.ui.layout.toast.error(`서류 이미지 ${e}개 로딩에 실패하여 출력을 중단했습니다.`)}})}finally{p(!1)}}},_=()=>{l(),o()},v=async()=>{if(!e&&d("save")){n(!0);try{await s.saveSelectedFieldChanges()}finally{n(!1)}}},C=async()=>{if(!e){n(!0);try{await s.patchSelectedDocumentStatusPrevious()}finally{n(!1)}}},I=async()=>{if(!e){if(!d("close"))return void f(!1);n(!0);try{let e=await s.saveSelectedFieldChanges();if(null===e)return;f(!1),_()}finally{n(!1)}}};return(0,t.jsxs)(hn,{children:[(0,t.jsxs)(hi,{children:[(0,t.jsxs)(hl,{children:[(0,t.jsx)(ha,{children:"서류 상태"}),(0,t.jsxs)(hd,{$color:m.color,children:[m.icon,m.label]})]}),(0,t.jsx)(ho,{}),(0,t.jsxs)(hr,{children:[(0,t.jsxs)(hs,{type:"button",disabled:!x||h||e,onClick:()=>{y()},children:[(0,t.jsx)(f8,{size:16}),"출력하기"]}),r?.displayStatus==="COMPLETED"?(0,t.jsxs)(hs,{$processing:e,onClick:()=>void C(),children:[(0,t.jsx)(B.default.Undo,{size:14}),"확인 취소"]}):s.isClientMode&&null===r||null!==r&&("NEED_UPDATE"===r.displayStatus||"NEED_MATCHING"===r.displayStatus||w)?(0,t.jsxs)(hs,{$processing:e,onClick:()=>void v(),children:[e?(0,t.jsx)(f7.RotateCw,{size:16}):(0,t.jsx)(b.Check,{size:16}),e?"저장중":"최종확인 및 저장"]}):null,(0,t.jsxs)(hc,{type:"button",onClick:()=>{g?f(!0):_()},children:[(0,t.jsx)(M.X,{size:16}),"닫기"]})]})]}),(0,t.jsx)(r_,{isOpen:c,actionType:"exit",isProcessing:e,onClickSecondary:()=>{f(!1),_()},onClickPrimary:()=>{I()}})]})}),hn=l.default.div.withConfig({componentId:"zh__sc-fa5a83d4-0"})`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: flex-end;

  padding: 12px 24px;
  border-bottom: 1px solid #e5e7eb;

  background: #fff;
`,hi=l.default.div.withConfig({componentId:"zh__sc-fa5a83d4-1"})`
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: flex-end;
`,hl=l.default.div.withConfig({componentId:"zh__sc-fa5a83d4-2"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,ha=l.default.div.withConfig({componentId:"zh__sc-fa5a83d4-3"})`
  font-size: 14px;
  font-weight: 400;
  font-style: normal;
  line-height: normal;
  color: #737380;
`,hd=l.default.div.withConfig({componentId:"zh__sc-fa5a83d4-4"})`
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
`,ho=l.default.div.withConfig({componentId:"zh__sc-fa5a83d4-5"})`
  width: 1px;
  height: 24px;
  background: #d1d1d9;
`,hr=l.default.div.withConfig({componentId:"zh__sc-fa5a83d4-6"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,hs=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-fa5a83d4-7"})`
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
`,hc=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-fa5a83d4-8"})`
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
`,hf=(0,n.observer)(function(){let e=a.default.modal.documentView,n=e.selectedDocument?.displayStatus!=="COMPLETED",l=e.isServiceWorkerMode&&null===e.selectedDocumentId&&"NEED_UPDATE"===e.selectedDocumentDisplayStatus,o=e.isServiceWorkerMode&&(0,rw.isSalaryProvisionMonthlyScheduleDocument)(e.selectedTemplate?.name??null),r=o?e.selectedOcrFile??e.analyzedOcrFile:null,s=(0,i.useMemo)(()=>o?null!==r?URL.createObjectURL(r):e.monthlyScheduleComparisonResult?.imageUrl??e.selectedDocument?.imageUrl??null:null,[o,e.monthlyScheduleComparisonResult?.imageUrl,e.selectedDocument?.imageUrl,r]),c=e.autocompleteServiceEndReportUserChangeLevelUIState,f=e.autocompleteServiceEndReportStaffOpinionUIState,h=e.autocompleteCaseManagementRecordCaseContentUIState,p=e.shouldShowRetroactiveActualServiceDatePanel,u=e.retroactiveActualServiceDatePanelYearMonth,x=e.isRetroactiveActualServiceDatePanelLoading,g=e.retroactiveActualServiceDatePanelErrorMessage,[m,b]=(0,i.useState)(1),[j,w]=(0,i.useState)(1),[y,_]=(0,i.useState)(null),[v,C]=(0,i.useState)(!1),[I,z]=(0,i.useState)([]),[T,S]=(0,i.useState)(null),[k,E]=(0,i.useState)(null),[D,A]=(0,i.useState)(!1),[O,$]=(0,i.useState)(null),[R,L]=(0,i.useState)(""),[N,P]=(0,i.useState)(""),[F,M]=(0,i.useState)(""),[U,W]=(0,i.useState)({}),[Y,V]=(0,i.useState)(0),[H,G]=(0,i.useState)(null),[K,X]=(0,i.useState)(!1),[q,Q]=(0,i.useState)(!1),Z=(0,i.useRef)(null),J=(0,i.useRef)(null),ee=(0,i.useRef)([]),et=(0,i.useRef)(null),en=(0,i.useRef)(null),ei=()=>{b(1),w(1),_(null),C(!1),z([])},el=t=>{let n=function(e,t){let n=e.filter(e=>("radio"===e.uiProps.fieldType||"text"===e.uiProps.fieldType||"textarea"===e.uiProps.fieldType)&&e.uiProps.triggerKeys?.includes(rj.default.SOURCE_REQUIRED_VALIDATION)===!0);if(!("NEED_UPDATE"===t&&n.some(e=>e.uiProps.triggerKeys?.includes(rj.default.SOURCE_REQUIRED_VALIDATION_ON_NEED_UPDATE)===!0)||"WAITING_TO_PRINT"===t&&n.some(e=>e.uiProps.triggerKeys?.includes(rj.default.SOURCE_REQUIRED_VALIDATION_ON_WAITING_TO_PRINT)===!0)))return{invalidFieldIds:[],missingItems:[]};let i=new Map;return n.forEach(e=>{let t=ry(e);i.set(t,[...i.get(t)??[],e])}),Array.from(i.values()).reduce((e,t)=>{if(t.some(e=>"radio"===e.uiProps.fieldType?e.value?.trim().toLowerCase()==="true":null!==e.value&&""!==e.value.trim()))return e;let n=t[0];if(void 0===n)return e;let i=ry(n),l=t.find(e=>e.uiProps.label?.group?.name?.trim()!=="")?.uiProps.label?.group?.name.trim()??t.find(e=>e.uiProps.label?.field.name.trim()!=="")?.uiProps.label?.field.name.trim()??t[0]?.fieldKey??i;return{invalidFieldIds:[...e.invalidFieldIds,...t.map(e=>e.id)],missingItems:[...e.missingItems,{key:i,label:l}]}},{invalidFieldIds:[],missingItems:[]})}(e.selectedTemplateFields,e.selectedDocumentDisplayStatus);return 0===n.missingItems.length||(S(n),E(t),!1)},ea=e.selectedTemplateImagePaths,ed=Math.max(ea?.length??0,1),eo=Math.min(m,ed),er=e.selectedDocument?.displayStatus==="NEED_MATCHING",es=e.selectedOcrFile??e.analyzedOcrFile,ec=(0,i.useMemo)(()=>er&&null!==es?URL.createObjectURL(es):null,[es,er]);(0,i.useEffect)(()=>()=>{null!==ec&&URL.revokeObjectURL(ec)},[ec]),(0,i.useEffect)(()=>()=>{null!==r&&null!==s&&URL.revokeObjectURL(s)},[s,r]);let ef=(null===ec?.75:.64)*j;(0,i.useEffect)(()=>{let e=J.current;if(null===e)return;let t=e=>{(e.ctrlKey||e.metaKey)&&(e.preventDefault(),w(t=>Math.min(Math.max(t+(e.deltaY<0?.1:-.1),.5),1.5)))};return e.addEventListener("wheel",t,{passive:!1}),()=>{e.removeEventListener("wheel",t)}},[e.status]);let eh=(0,i.useCallback)(e=>{if(0===e.length)return null;let t=e.map(e=>e.x),n=e.map(e=>e.y),i=Math.min(...t),l=Math.max(...t),a=Math.min(...n),d=Math.max(...n);if(!Number.isFinite(i)||!Number.isFinite(l)||!Number.isFinite(a)||!Number.isFinite(d))return null;let o=Math.max(l,d),r=o<=1?1:H?.width??0,s=o<=1?1:H?.height??0;if(r<=0||s<=0)return null;let c=Math.max(i,0)/r*100,f=Math.max(a,0)/s*100,h=(l-i)/r*100,p=(d-a)/s*100;return h<=0||p<=0?null:{left:`${Math.min(c,100)}%`,top:`${Math.min(f,100)}%`,width:`${Math.min(h,100)}%`,height:`${Math.min(p,100)}%`}},[H]),ep=e.isLinkedCompletedMonthlyScheduleDocument?e.monthlyScheduleComparisonResult:null,eu=ep?.unmatchedFieldBoundingBoxes??null,ex=null===eu?0:Math.min(Math.max(Y,0),Math.max(eu.length-1,0)),eg=eu?.[ex]??null,em=eh(eg?.boundingBoxes?.flatMap(e=>{let t=e.normalizedVertices??[];return t.length>0?t:e.vertices??[]})??[]);(0,i.useLayoutEffect)(()=>{let e=et.current,t=en.current;if(null===e||null===t||null===em)return;let n=()=>{let n=e.getBoundingClientRect(),i=t.getBoundingClientRect(),l=n.left+Number.parseFloat(em.left)/100*n.width;X(n.top+Number.parseFloat(em.top)/100*n.height+Number.parseFloat(em.height)/100*n.height+i.height>n.bottom),Q(l+i.width>n.right)};n();let i=new ResizeObserver(n);return i.observe(e),i.observe(t),()=>{i.disconnect()}},[em]);let eb=(0,i.useCallback)((e,t="instant")=>{let n=J.current,i=ee.current[e-1];if(!n||!i)return;let l=Math.max(i.offsetTop-n.offsetTop-12,0);n.scrollTo({top:l,behavior:t})},[]),ej=t=>(-1!==t||!1!==e.canMovePrevTemplate)&&(1!==t||!1!==e.canMoveNextTemplate)&&(-1===t?e.movePrevTemplate():e.moveNextTemplate(),b(1),w(1),_(null),C(!1),z([]),J.current?.scrollTo({top:0,behavior:"auto"}),!0),ew=e.hasSelectedFieldChanges,ey=async()=>ew?($(-1),A(!0),!1):ej(-1),e_=async()=>ew?($(1),A(!0),!1):ej(1),ev=async()=>{if(!v&&null!==O){if(!el({type:"move",direction:O}))return void A(!1);C(!0);try{let t=await e.saveSelectedFieldChanges();if(null===t)return;ej(O),$(null),A(!1)}finally{C(!1)}}};(0,i.useEffect)(()=>{let t=t=>{"ready"===e.status&&!1!==e.hasSelectedFieldChanges&&t.preventDefault()};return window.addEventListener("beforeunload",t),()=>{window.removeEventListener("beforeunload",t)}},[e.hasSelectedFieldChanges,e.status]),(0,i.useEffect)(()=>"ready"!==e.status?void e.setToastContainer(null):(e.setToastContainer(Z.current),()=>{e.setToastContainer(null)}),[e,e.status]),(0,i.useEffect)(()=>{"ready"===e.status&&!0===p&&e.ensureRetroactiveActualServiceDatePanelState()},[e,e.status,p]);let eC=()=>{if(null===y)return;let e=y.replace(/[^\d]/g,"");if(""===e)return void _(null);let t=Number(e);if(!Number.isFinite(t))return void _(null);let n=Math.min(Math.max(t,1),ed);b(n),_(null),eb(n)};return"ready"!==e.status?null:(0,t.jsx)(d.default,{children:(0,t.jsxs)(hh,{ref:Z,children:[(0,t.jsx)(fZ,{}),(0,t.jsxs)(hp,{children:[(0,t.jsx)(ht,{isSaving:v,setIsSaving:C,resetLocalStates:ei,onRequiredValidation:el}),(0,t.jsx)(rs,{isOpen:null!==T,missingItems:T?.missingItems??[],isProcessing:v,onClickSecondary:()=>{if(S(null),E(null),null!==k&&"print"!==k){if("close"===k||"save"===k){ei(),e.close();return}e.discardSelectedFieldChanges(),ej(k.direction)}},onClickPrimary:()=>{null!==T&&(z(T.invalidFieldIds),S(null),E(null))}}),(0,t.jsxs)(hu,{children:[p?(0,t.jsx)(f6,{value:u??"",disabled:x,errorMessage:g,onChangeYearMonth:t=>{e.applyRetroactiveActualServiceDatePanelYearMonth(t)}}):null,(0,t.jsx)(hV,{type:"button","aria-label":"이전 문서",disabled:e.isTemplateNavigationLocked||!1===e.canMovePrevTemplate,onClick:()=>void ey(),children:(0,t.jsx)(rd.ChevronLeft,{size:24})}),(0,t.jsx)(hx,{ref:J,onScroll:()=>{let e=J.current;if(!e)return;let t=e.scrollTop,n=1,i=1/0;ee.current.forEach((l,a)=>{if(!l)return;let d=Math.abs(l.offsetTop-e.offsetTop-t);d<i&&(i=d,n=a+1)}),n!==m&&b(n)},children:null!==s?(0,t.jsxs)(hw,{$active:!0,$scale:ef,children:[(0,t.jsx)(hM,{$scale:ef,children:(0,t.jsxs)(hW,{ref:et,children:[(0,t.jsx)(hU,{src:s,alt:"급여 제공 월별 일정표 원본",onLoad:e=>{G({width:e.currentTarget.naturalWidth,height:e.currentTarget.naturalHeight})}}),null!==eg?(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(hT,{children:null!==em?(0,t.jsx)(hS,{style:em,type:"button",onClick:()=>{},children:(0,t.jsx)(hk,{children:"확인 필요"})}):null})}):null]})}),null!==eg?(0,t.jsxs)(hY,{ref:en,$centered:null===em,style:null===em?void 0:{left:q?void 0:em.left,right:q?`calc(100% - (${em.left} + ${em.width}))`:void 0,top:K?em.top:`calc(${em.top} + ${em.height})`,transform:K?"translateY(-100%)":void 0},children:[(0,t.jsxs)(hD,{children:[(0,t.jsx)(hA,{children:`정보 불일치  \xb7  ${ex+1} / ${eu?.length??0}`}),(0,t.jsx)(hO,{children:`${eg.day}일 제공 일정 비교`}),(0,t.jsx)(h$,{children:eg.reasons.join("\n")})]}),(0,t.jsxs)(hR,{children:[(0,t.jsx)(hL,{$variant:"manual",children:"수기 작성 서류"}),(0,t.jsx)(hN,{children:""===eg.ocrValue?"-":eg.ocrValue})]}),(0,t.jsxs)(hR,{children:[(0,t.jsx)(hL,{$variant:"voucher",children:"실제 제공 내역"}),(0,t.jsx)(hN,{children:""===eg.actualValue?"-":eg.actualValue})]}),(0,t.jsxs)(hP,{children:[(0,t.jsxs)(hF,{type:"button",disabled:ex<=0,onClick:()=>{V(Math.max(ex-1,0))},children:[(0,t.jsx)(rt,{sx:{fontSize:16}}),"이전"]}),(0,t.jsxs)(hF,{type:"button",disabled:ex>=(eu?.length??0)-1,onClick:()=>{V(Math.min(ex+1,Math.max((eu?.length??1)-1,0)))},children:["다음",(0,t.jsx)(l3.default,{sx:{fontSize:16}})]})]})]}):null]}):l?(0,t.jsxs)(hg,{children:[(0,t.jsx)(B.default.Contract,{size:24,color:"#494f53"}),(0,t.jsxs)(hm,{children:[(0,t.jsx)(hb,{children:`업로드 된 수기 [${e.selectedTemplate?.name??"서류"}]가 없습니다.`}),(0,t.jsx)(hj,{children:"왼쪽 업로드 필드에서 서류를 업로드해주세요."})]})]}):Array.from({length:ed},(i,l)=>{let a,d,o=l+1,r=e.getSelectedTemplateFieldsByPage(o),s=e.getOcrMismatchBoundingBoxesByPage(o),p=Math.min(Math.max(U[o]??0,0),Math.max(s.length-1,0)),u=s[p]??null,x=null===u?null:eh(u.vertices),g=u?.fieldRuntimeKey.split("::")[1]??null,m=null===g?null:r.find(e=>e.fieldKey===g)?.uiProps.label?.field.name??null;return(0,t.jsxs)(hy,{children:[null!==ec&&(0,t.jsxs)(h_,{children:[(0,t.jsx)(hC,{$variant:"manual",children:"수기서류 원본 · 비교 근거 / 수정 불가"}),(0,t.jsxs)(hv,{$scale:ef,children:[(0,t.jsxs)(hI,{$scale:ef,children:[(0,t.jsx)(hz,{src:ec,alt:"대조 이미지",onLoad:e=>{G({width:e.currentTarget.naturalWidth,height:e.currentTarget.naturalHeight})}}),(0,t.jsx)(hT,{children:s.map((e,n)=>{let i=eh(e.vertices);if(null===i)return null;let l=e.vertices.map(e=>`${e.x}:${e.y}`).join("|");return(0,t.jsx)(hS,{style:i,type:"button",onClick:()=>{W(e=>({...e,[o]:n}))},children:p===n?(0,t.jsx)(hk,{children:"확인 필요"}):null},`ocr-mismatch-${o}-${e.fieldRuntimeKey}-${l}`)})})]}),null!==u&&null!==x&&(0,t.jsxs)(hE,{style:{left:x.left,top:`calc(${x.top} + ${x.height})`},children:[(0,t.jsxs)(hD,{children:[(0,t.jsx)(hA,{children:`정보 불일치  \xb7  ${p+1} / ${s.length}`}),(0,t.jsxs)(hO,{children:[m??g??"필드 값"," ","비교"]}),(0,t.jsx)(h$,{children:"수기 서류 인식값과 전자 바우처 엑셀 기반 값이 다릅니다."})]}),(0,t.jsxs)(hR,{children:[(0,t.jsx)(hL,{$variant:"manual",children:"수기 작성 서류"}),(0,t.jsx)(hN,{children:""===u.manualValue?"-":u.manualValue})]}),(0,t.jsxs)(hR,{children:[(0,t.jsx)(hL,{$variant:"voucher",children:"전산 데이터 서류"}),(0,t.jsx)(hN,{children:""===u.electronicValue?"-":u.electronicValue})]}),(0,t.jsxs)(hP,{children:[(0,t.jsxs)(hF,{type:"button",disabled:p<=0,onClick:()=>{W(e=>({...e,[o]:Math.max(p-1,0)}))},children:[(0,t.jsx)(rt,{sx:{fontSize:16}}),"이전"]}),(0,t.jsxs)(hF,{type:"button",disabled:p>=s.length-1,onClick:()=>{W(e=>({...e,[o]:Math.min(p+1,s.length-1)}))},children:["다음",(0,t.jsx)(l3.default,{sx:{fontSize:16}})]})]})]})]})]}),(0,t.jsxs)(h_,{children:[null!==ec&&(0,t.jsx)(hC,{$variant:"voucher",children:"전자바우처 엑셀 기반 · 비교 근거 / 수정 불가"}),(0,t.jsx)(hw,{$active:!0,$scale:ef,ref:e=>{ee.current[l]=e},children:(0,t.jsx)(hM,{$scale:ef,children:null===(d="string"==typeof(a=ea?.[l])?""===a?null:a:null)?(0,t.jsx)(hB,{}):(0,t.jsx)(rr.default,{imagePath:d,fields:r,readOnly:!n,isFieldValidationError:e=>I.includes(e.id),onAssistTriggerClick:({triggerKey:t,field:n})=>{if(t===rj.default.SOURCE_CLICK_AUTOCOMPLETE_SERVICE_END_REPORT_USER_CHANGE_LEVEL_BUTTON){L(e.getAutocompleteServiceEndReportUserChangeLevelTargetValue()),e.openAutocompleteServiceEndReportUserChangeLevelDrawer(n);return}if(t===rj.default.SOURCE_CLICK_AUTOCOMPLETE_SERVICE_END_REPORT_STAFF_OPINION_BUTTON){P(""),e.openAutocompleteServiceEndReportStaffOpinionDrawer(n);return}if(t===rj.default.SOURCE_CLICK_AUTOCOMPLETE_CASE_MANAGEMENT_RECORD_CASE_CONTENT_BUTTON){M(e.getAutocompleteCaseManagementRecordCaseContentTargetValue()),e.openAutocompleteCaseManagementRecordCaseContentDrawer(n);return}t===rj.default.SOURCE_CLICK_SELECT_ALL_GENERAL_MEAL?e.selectAllMealTypeForSelectedDocument("GENERAL"):t===rj.default.SOURCE_CLICK_SELECT_ALL_THERAPEUTIC_MEAL?e.selectAllMealTypeForSelectedDocument("THERAPEUTIC"):t===rj.default.SOURCE_CLICK_SELECT_ALL_TEXTURE_MODIFIED_MEAL&&e.selectAllMealTypeForSelectedDocument("TEXTURE_MODIFIED")},isAssistButtonDisabled:({triggerKey:e})=>e===rj.default.SOURCE_CLICK_AUTOCOMPLETE_SERVICE_END_REPORT_USER_CHANGE_LEVEL_BUTTON?!n||!0===c.isDrawerOpen:e===rj.default.SOURCE_CLICK_AUTOCOMPLETE_SERVICE_END_REPORT_STAFF_OPINION_BUTTON?!n||!0===f.isDrawerOpen:e===rj.default.SOURCE_CLICK_AUTOCOMPLETE_CASE_MANAGEMENT_RECORD_CASE_CONTENT_BUTTON?!n||!0===h.isDrawerOpen:void 0,resolveAssistButtonLabel:({triggerKey:t})=>t===rj.default.SOURCE_CLICK_AUTOCOMPLETE_SERVICE_END_REPORT_USER_CHANGE_LEVEL_BUTTON?e.autocompleteServiceEndReportUserChangeLevelButtonLabel:t===rj.default.SOURCE_CLICK_AUTOCOMPLETE_SERVICE_END_REPORT_STAFF_OPINION_BUTTON?e.autocompleteServiceEndReportStaffOpinionButtonLabel:t===rj.default.SOURCE_CLICK_AUTOCOMPLETE_CASE_MANAGEMENT_RECORD_CASE_CONTENT_BUTTON?e.autocompleteCaseManagementRecordCaseContentButtonLabel:t===rj.default.SOURCE_CLICK_SELECT_ALL_GENERAL_MEAL?"일반식 전체":t===rj.default.SOURCE_CLICK_SELECT_ALL_THERAPEUTIC_MEAL?"치료식 전체":t===rj.default.SOURCE_CLICK_SELECT_ALL_TEXTURE_MODIFIED_MEAL?"저작 및 연하 도움식 전체":void 0,resolveAssistButtonChecked:({triggerKey:t})=>t===rj.default.SOURCE_CLICK_SELECT_ALL_GENERAL_MEAL?e.isGeneralMealTypeAllSelected:t===rj.default.SOURCE_CLICK_SELECT_ALL_THERAPEUTIC_MEAL?e.isTherapeuticMealTypeAllSelected:t===rj.default.SOURCE_CLICK_SELECT_ALL_TEXTURE_MODIFIED_MEAL?e.isTextureModifiedMealTypeAllSelected:void 0,isFieldEditable:t=>e.isSelectedFieldEditable(t),isFieldAutoFilled:t=>e.isSelectedFieldAutoFilled(t),selectOptionsCacheKey:e.selectedDocumentId??`template:${e.selectedTemplateId??""}`,onLoadSelectOptions:t=>e.getSelectFieldCandidates(t),onChangeField:(t,n,i)=>{if("radio"===t.uiProps.fieldType){z(n=>n.filter(n=>{let i=e.selectedTemplateFields.find(e=>e.id===n),l=i?.uiProps.fieldType==="radio"?i:null;return(null!==l&&"groupKey"in l.uiProps?l.uiProps.groupKey:null)!==("groupKey"in t.uiProps?t.uiProps.groupKey:null)})),"true"===n&&e.toggleSelectedRadioGroup(t);return}z(e=>e.includes(t.id)?e.filter(e=>e!==t.id):e),e.updateSelectedFieldValue({page:t.page,fieldKey:t.fieldKey,value:n,selectedId:i})}})})})]})]},`screen-page-${o}`)})}),(0,t.jsx)(hV,{type:"button","aria-label":"다음 문서",disabled:e.isTemplateNavigationLocked||!1===e.canMoveNextTemplate,onClick:()=>void e_(),$right:!0,children:(0,t.jsx)(ro.ChevronRight,{size:24})}),(0,t.jsx)(hH,{children:(0,t.jsxs)(hG,{children:[(0,t.jsxs)(hK,{type:"button",disabled:1===eo,onClick:()=>{let e=Math.max(eo-1,1);b(e),_(null),eb(e)},children:[(0,t.jsx)(ra,{size:16,color:1===eo?"#9ca3af":"#0a0a0a"}),(0,t.jsx)(hX,{$muted:1===eo,children:"이전"})]}),(0,t.jsxs)(hq,{children:[(0,t.jsx)(hQ,{children:(0,t.jsx)(hZ,{type:"text",inputMode:"numeric","aria-label":"페이지 번호 입력",value:y??String(eo),onFocus:()=>{_(String(eo))},onChange:e=>{_(e.target.value)},onBlur:eC,onKeyDown:e=>{"Enter"===e.key&&(e.preventDefault(),eC(),e.currentTarget.blur())}})}),(0,t.jsx)(hQ,{children:(0,t.jsx)(h0,{children:"/"})}),(0,t.jsx)(hQ,{children:(0,t.jsx)(h1,{children:ed})})]}),(0,t.jsxs)(hK,{type:"button",disabled:eo===ed,onClick:()=>{let e=Math.min(eo+1,ed);b(e),_(null),eb(e)},children:[(0,t.jsx)(hX,{$muted:eo===ed,children:"다음"}),(0,t.jsx)(ri,{size:16,color:eo===ed?"#9ca3af":"#0a0a0a"})]})]})}),!0===c.isDrawerOpen?(0,t.jsx)(ck,{value:R,onChange:L,onClose:()=>e.closeAutocompleteServiceEndReportUserChangeLevelDrawer(),onApply:()=>e.applyAutocompleteServiceEndReportUserChangeLevelResult(R)}):null,!0===f.isDrawerOpen?(0,t.jsx)(cS,{value:N,autoFilledReferenceValue:e.autocompleteServiceEndReportStaffOpinionAutoFilledReferenceValue,keywords:e.autocompleteServiceEndReportStaffOpinionKeywords,isKeywordListLoading:e.isAutocompleteServiceEndReportStaffOpinionKeywordListLoading,isKeywordCreating:e.isAutocompleteServiceEndReportStaffOpinionKeywordCreating,isGenerating:e.isAutocompleteServiceEndReportStaffOpinionGenerating,onAddKeyword:t=>e.createAutocompleteServiceEndReportStaffOpinionKeyword(t),onGenerate:t=>e.generateAutocompleteServiceEndReportStaffOpinionDraft(t),onChange:P,onClose:()=>e.closeAutocompleteServiceEndReportStaffOpinionDrawer(),onApply:()=>e.applyAutocompleteServiceEndReportStaffOpinionResult(N)}):null,!0===h.isDrawerOpen?(0,t.jsx)(cT,{value:F,onChange:M,onClose:()=>e.closeAutocompleteCaseManagementRecordCaseContentDrawer(),onApply:()=>e.applyAutocompleteCaseManagementRecordCaseContentResult(F)}):null]}),(0,t.jsx)(r_,{isOpen:D,actionType:"move",isProcessing:v,onClickSecondary:()=>{$(null),A(!1),null!==O&&(e.discardSelectedFieldChanges(),ej(O))},onClickPrimary:()=>{ev()}})]})]})})}),hh=l.default.div.withConfig({componentId:"zh__sc-7a537607-0"})`
  position: relative;

  overflow: hidden;
  display: flex;
  flex-shrink: 0;
  align-items: flex-start;

  width: 1712px;
  min-width: 1712px;
  border-radius: 8px;
`,hp=l.default.div.withConfig({componentId:"zh__sc-7a537607-1"})`
  position: relative;

  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;

  height: 989px;
`,hu=l.default.div.withConfig({componentId:"zh__sc-7a537607-2"})`
  position: relative;

  display: flex;
  flex: 1 0 0;
  align-self: stretch;

  min-height: 0;
`,hx=l.default.div.withConfig({componentId:"zh__sc-7a537607-3"})`
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
`,hg=l.default.div.withConfig({componentId:"zh__sc-7a537607-4"})`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: center;

  min-width: 0;
`,hm=l.default.div.withConfig({componentId:"zh__sc-7a537607-5"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;

  width: 100%;

  color: #494f53;
  text-align: center;
`,hb=l.default.p.withConfig({componentId:"zh__sc-7a537607-6"})`
  margin: 0;
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
`,hj=l.default.p.withConfig({componentId:"zh__sc-7a537607-7"})`
  margin: 0;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
`,hw=l.default.div.withConfig({componentId:"zh__sc-7a537607-8"})`
  position: relative;

  display: ${({$active:e})=>e?"block":"none"};

  width: calc(210mm * ${({$scale:e})=>e});
  height: calc(297mm * ${({$scale:e})=>e});

  box-shadow: 0 0 8px 0 rgb(0 0 0 / 10%);
`,hy=l.default.div.withConfig({componentId:"zh__sc-7a537607-9"})`
  display: flex;
  gap: 10px;
  align-items: flex-start;
`,h_=l.default.div.withConfig({componentId:"zh__sc-7a537607-10"})`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
`,hv=l.default.div.withConfig({componentId:"zh__sc-7a537607-11"})`
  position: relative;
  width: calc(210mm * ${({$scale:e})=>e});
  height: calc(297mm * ${({$scale:e})=>e});
`,hC=l.default.div.withConfig({componentId:"zh__sc-7a537607-12"})`
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
`,hI=l.default.div.withConfig({componentId:"zh__sc-7a537607-13"})`
  position: relative;

  overflow: hidden;

  width: calc(210mm * ${({$scale:e})=>e});
  height: calc(297mm * ${({$scale:e})=>e});
  border: 1px solid #e5e7eb;
  border-radius: 8px;

  background: #fff;
  box-shadow: 0 0 8px 0 rgb(0 0 0 / 8%);
`,hz=l.default.img.withConfig({componentId:"zh__sc-7a537607-14"})`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
`,hT=l.default.div.withConfig({componentId:"zh__sc-7a537607-15"})`
  pointer-events: none;
  position: absolute;
  inset: 0;
`,hS=l.default.button.withConfig({componentId:"zh__sc-7a537607-16"})`
  pointer-events: auto;
  cursor: pointer;

  position: absolute;

  padding: 0;
  border: 2px solid #4f39f6;
  border-radius: 2px;

  background: transparent;
`,hk=l.default.span.withConfig({componentId:"zh__sc-7a537607-17"})`
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
`,hE=l.default.div.withConfig({componentId:"zh__sc-7a537607-18"})`
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
`,hD=l.default.div.withConfig({componentId:"zh__sc-7a537607-19"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,hA=l.default.div.withConfig({componentId:"zh__sc-7a537607-20"})`
  font-size: 12px;
  font-weight: 700;
  line-height: normal;
  color: #e8660f;
`,hO=l.default.div.withConfig({componentId:"zh__sc-7a537607-21"})`
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
  color: #1a1729;
`,h$=l.default.div.withConfig({componentId:"zh__sc-7a537607-22"})`
  font-size: 12px;
  font-weight: 400;
  line-height: normal;
  color: #6b697a;
`,hR=l.default.div.withConfig({componentId:"zh__sc-7a537607-23"})`
  display: flex;
  flex-direction: column;
  gap: 5px;

  width: 100%;
  padding: 12px 14px;
  border: 1px solid #e5e9ef;
  border-radius: 8px;

  background: #fff;
`,hL=l.default.div.withConfig({componentId:"zh__sc-7a537607-24"})`
  font-size: 12px;
  font-weight: 500;
  line-height: normal;
  color: ${({$variant:e})=>"manual"===e?"#e8660f":"#5942f2"};
`,hN=l.default.div.withConfig({componentId:"zh__sc-7a537607-25"})`
  font-size: 12px;
  font-weight: 700;
  line-height: normal;
  color: #1a1729;
`,hP=l.default.div.withConfig({componentId:"zh__sc-7a537607-26"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,hF=l.default.button.withConfig({componentId:"zh__sc-7a537607-27"})`
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
`,hM=l.default.div.withConfig({componentId:"zh__sc-7a537607-28"})`
  transform-origin: top left;
  transform: scale(${({$scale:e})=>e});
  width: 210mm;
  height: 297mm;
`,hB=l.default.div.withConfig({componentId:"zh__sc-7a537607-29"})`
  width: 210mm;
  height: 297mm;
  background: #f9fafb;
`,hU=l.default.img.withConfig({componentId:"zh__sc-7a537607-30"})`
  display: block;

  width: 210mm;
  height: 297mm;

  object-fit: contain;
  background: #fff;
`,hW=l.default.div.withConfig({componentId:"zh__sc-7a537607-31"})`
  position: relative;
  width: 210mm;
  height: 297mm;
`,hY=(0,l.default)(hE).withConfig({componentId:"zh__sc-7a537607-32"})`
  ${({$centered:e})=>e?`
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      `:""}
`,hV=l.default.button.withConfig({componentId:"zh__sc-7a537607-33"})`
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
`,hH=l.default.div.withConfig({componentId:"zh__sc-7a537607-34"})`
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
`,hG=l.default.div.withConfig({componentId:"zh__sc-7a537607-35"})`
  pointer-events: auto;

  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: center;

  padding: 8px 16px;
  border: 1px solid #e5e9ef;
  border-radius: 99px;

  background: #fff;
`,hK=l.default.button.withConfig({componentId:"zh__sc-7a537607-36"})`
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
`,hX=l.default.span.withConfig({componentId:"zh__sc-7a537607-37"})`
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 16px;
  color: ${({$muted:e})=>!0===e?"#9ca3af":"#0a0a0a"};
  letter-spacing: -1px;
`,hq=l.default.div.withConfig({componentId:"zh__sc-7a537607-38"})`
  display: flex;
  gap: 2px;
  align-items: center;
`,hQ=l.default.div.withConfig({componentId:"zh__sc-7a537607-39"})`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 20px;
`,hZ=l.default.input.withConfig({componentId:"zh__sc-7a537607-40"})`
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
`,hJ=l.default.span.withConfig({componentId:"zh__sc-7a537607-41"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: 16px;
  text-align: center;
  letter-spacing: -1px;
`,h0=(0,l.default)(hJ).withConfig({componentId:"zh__sc-7a537607-42"})`
  color: #0a0a0a;
`,h1=(0,l.default)(hJ).withConfig({componentId:"zh__sc-7a537607-43"})`
  color: #0a0a0a;
`;var h2=e.i(89656),h6=e.i(6412);let h4=[".xls",".xlsx",".xlsm"];function h5(e){let t=e.name.lastIndexOf("."),n=-1===t?"":e.name.slice(t).toLowerCase();return h4.includes(n)}let h3=(0,n.observer)(function(){let e=a.default.modal.excelFileUpload,n=(0,i.useRef)(null),[l,o]=(0,i.useState)(!1),[r,s]=(0,i.useState)(!1);if(!1===e.isOpen)return null;let c=t=>{e.addFiles(t.filter(h5))},f=async()=>{if(null!==e.category&&0!==e.files.length&&!r){for(let t of(s(!0),e.files)){let n=function(e){let t=e.name.slice(e.name.lastIndexOf(".")).toLowerCase();return".xls"===t?h6.default.XLS:".xlsm"===t?h6.default.XLSM:h6.default.XLSX}(t),[i,l]=await l4.default.upload.createPresignedUploadUrl({category:e.category,contentType:n});if(null!==i){s(!1),a.default.ui.layout.toast.error(`${t.name} 업로드 URL 생성에 실패했습니다.`);return}let[d]=await l4.default.upload.putFileToPresignedUploadUrl({uploadUrl:l.uploadUrl,contentType:n,file:t});if(null!==d){s(!1),a.default.ui.layout.toast.error(`${t.name} 업로드에 실패했습니다.`);return}}s(!1),a.default.ui.layout.toast.success("엑셀 파일 업로드를 완료했습니다."),e.close()}};return(0,t.jsx)(d.default,{children:(0,t.jsxs)(h2.Container,{children:[(0,t.jsxs)(h2.Header,{children:[(0,t.jsx)(h2.HeaderLeft,{children:(0,t.jsx)(h2.HeaderTitle,{children:"엑셀 파일 업로드하기"})}),(0,t.jsx)(h2.HeaderRight,{children:(0,t.jsxs)(h8,{type:"button",onClick:e.close,disabled:r,children:[(0,t.jsx)(M.X,{size:20}),"닫기"]})})]}),(0,t.jsxs)(h7,{children:[(0,t.jsx)(pe,{children:"엑셀 파일을 업로드해주세요."}),(0,t.jsxs)(pt,{$isDragging:l,onClick:()=>{!1===r&&n.current?.click()},onDragOver:e=>{e.preventDefault(),o(!0)},onDragLeave:e=>{e.preventDefault(),o(!1)},onDrop:e=>{e.preventDefault(),o(!1),c(Array.from(e.dataTransfer.files))},children:[(0,t.jsx)(h9,{ref:n,type:"file",accept:".xls,.xlsx,.xlsm",multiple:!0,onChange:e=>{c(Array.from(e.target.files??[])),e.target.value=""}}),0===e.files.length?(0,t.jsx)(pn,{children:(0,t.jsx)(Z.Upload,{size:20})}):(0,t.jsx)(pd,{children:e.files.map(n=>{var i;return(0,t.jsxs)(po,{children:[(0,t.jsxs)(pr,{children:[(0,t.jsx)(ps,{children:n.name}),(0,t.jsx)(pc,{children:(i=n.size,`${Math.ceil(i/1024/1024)}MB`)})]}),(0,t.jsxs)(pf,{type:"button",onClick:t=>{t.stopPropagation(),e.removeFile(n)},disabled:r,children:["삭제",(0,t.jsx)(M.X,{size:16})]})]},`${n.name}-${n.size}-${n.lastModified}`)})}),(0,t.jsxs)(pi,{children:[(0,t.jsx)(pl,{children:l?"파일을 여기에 놓으면 업로드 됩니다.":"이곳에 파일을 끌어다 놓거나 (드래그 앤 드롭), 클릭하여 업로드하세요."}),(0,t.jsx)(pa,{children:e.files.length>0?"여러 파일을 추가로 업로드할 수 있습니다.":"지원 파일 형식: 엑셀(.xls, .xlsx, .xlsm)"})]})]})]}),(0,t.jsxs)(h2.Footer,{children:[(0,t.jsx)(ph,{type:"button",onClick:()=>e.clearFiles(),disabled:0===e.files.length||r,children:"다시 업로드하기"}),(0,t.jsxs)(pp,{type:"button",onClick:()=>void f(),disabled:0===e.files.length||r,children:[(0,t.jsx)(b.Check,{size:20}),r?"업로드 중":"업로드 완료하기"]})]})]})})}),h9=l.default.input.withConfig({componentId:"zh__sc-816f3394-0"})`
  display: none;
`,h8=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-816f3394-1"})`
  ${h2.btnStyle}
  color: #4f39f6;
`,h7=(0,l.default)(h2.Body).withConfig({componentId:"zh__sc-816f3394-2"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  justify-content: center;

  min-height: 457px;
  padding: 32px 24px;

  background: #f9fafb;
`,pe=l.default.p.withConfig({componentId:"zh__sc-816f3394-3"})`
  width: 100%;
  margin: 0;

  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  color: #101828;
  text-align: center;
`,pt=l.default.div.withConfig({componentId:"zh__sc-816f3394-4"})`
  cursor: pointer;

  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  justify-content: center;

  width: 100%;
  min-height: 168px;
  padding: 24px 40px;
  border: 1px solid #4f39f6;
  border-radius: 16px;

  color: #4f39f6;

  background: ${({$isDragging:e})=>e?"#f6f3ff":"#fff"};

  &:hover {
    background-color: #f6f3ff;
  }

  &:active {
    background-color: #efeaff;
  }
`,pn=l.default.div.withConfig({componentId:"zh__sc-816f3394-5"})`
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: center;
`,pi=l.default.div.withConfig({componentId:"zh__sc-816f3394-6"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
  align-self: stretch;
`,pl=l.default.p.withConfig({componentId:"zh__sc-816f3394-7"})`
  margin: 0;

  font-size: 14px;
  font-weight: 700;
  line-height: 24px;
  color: #4f39f6;
  text-align: center;
`,pa=l.default.p.withConfig({componentId:"zh__sc-816f3394-8"})`
  margin: 0;
  font-size: 14px;
  line-height: 24px;
  color: #99a1af;
`,pd=l.default.div.withConfig({componentId:"zh__sc-816f3394-9"})`
  overflow: auto hidden;
  display: flex;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;

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
`,po=l.default.div.withConfig({componentId:"zh__sc-816f3394-10"})`
  display: flex;
  flex-shrink: 0;
  gap: 24px;
  align-items: center;

  padding: 12px 16px;
  border-radius: 8px;

  background: #f6f8fb;
`,pr=l.default.div.withConfig({componentId:"zh__sc-816f3394-11"})`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
`,ps=l.default.p.withConfig({componentId:"zh__sc-816f3394-12"})`
  overflow: hidden;

  max-width: 196px;
  margin: 0;

  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: #0a0a0a;
  text-overflow: ellipsis;
  white-space: nowrap;
`,pc=l.default.p.withConfig({componentId:"zh__sc-816f3394-13"})`
  margin: 0;

  font-size: 16px;
  font-weight: 400;
  line-height: 18px;
  color: #0a0a0a;
`,pf=l.default.button.withConfig({componentId:"zh__sc-816f3394-14"})`
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
`,ph=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-816f3394-15"})`
  height: 36px;
  padding: 8px 16px;
`,pp=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-816f3394-16"})`
  gap: 4px;
  height: 36px;
  padding: 8px 16px;
  border-radius: 4px;
`,{SERVICE_TYPE:pu,BANK_NAME:px}=J.default.enums;function pg(){let e=a.default.modal.organization.accountAdd,n="edit"===e.mode,[l,o]=(0,i.useState)(e.serviceType),[r,s]=(0,i.useState)(e.accountNumber),[c,f]=(0,i.useState)(e.bankName),[h,p]=(0,i.useState)(e.accountHolder),[u,x]=(0,i.useState)(e.useFlag),[g,m]=(0,i.useState)(""),[b,j]=(0,i.useState)(""),[w,y]=(0,i.useState)(!1),_=r.trim(),v=h.trim(),C=e.accountNumber.trim(),I=e.accountHolder.trim(),z=l!==e.serviceType||_!==C||c!==e.bankName||v!==I||u!==e.useFlag,T=()=>{w||(o(e.serviceType),s(e.accountNumber),f(e.bankName),p(e.accountHolder),x(e.useFlag),m(""),j(""),e.close())},S=async()=>{if(w)return;let t=r.trim(),i=h.trim(),d=a.default.organizationSetting.staff.organizationId;if(""===t)return void m("필수 입력값입니다.");if(""===i)return void j("필수 입력값입니다.");if(null===d)return void a.default.ui.layout.toast.error(n?"기관 식별자가 없어 계좌를 수정할 수 없습니다.":"기관 식별자가 없어 계좌를 생성할 수 없습니다.");m(""),j(""),y(!0);let o={serviceType:l,accountNumber:t,bankName:c,accountHolder:i,useFlag:u},[s]=n&&null!==e.accountId?await a.default.data.organization.bankAccountList.patch({orgId:d,accountId:e.accountId,payload:o}):await a.default.data.organization.bankAccountList.create({orgId:d,payload:o});if(null!==s){y(!1),a.default.ui.layout.toast.error(s.message);return}let f=a.default.data.organization.cardList.query;null!==f&&f.orgId===d&&await a.default.data.organization.cardList.refetch(),y(!1),T()};return(0,t.jsx)(d.default,{children:(0,t.jsxs)(h2.Container,{children:[(0,t.jsxs)(h2.Header,{children:[(0,t.jsx)(h2.HeaderLeft,{children:(0,t.jsx)(h2.HeaderTitle,{children:n?"계좌 정보 수정하기":"계좌 정보 추가하기"})}),(0,t.jsx)(h2.HeaderRight,{children:(0,t.jsxs)(pm,{onClick:T,disabled:w,children:[(0,t.jsx)(iF.default,{sx:{fontSize:20}}),"닫기"]})})]}),(0,t.jsxs)(h2.Body,{children:[(0,t.jsxs)(h2.BodyRow,{children:[(0,t.jsx)(h2.BodyRowLabel,{children:"서비스 종류를 선택해주세요."}),(0,t.jsx)(pb,{value:l,onChange:e=>{let t=e.target.value;t in pu&&o(t)},children:Object.entries(pu).map(([e,n])=>(0,t.jsxs)("option",{value:e,children:[n.label," 서비스"]},e))})]}),(0,t.jsxs)(h2.BodyRow,{children:[(0,t.jsx)(h2.BodyRowLabel,{children:"계좌번호를 입력해주세요."}),(0,t.jsx)(pj,{placeholder:"000-0000-0000-00",value:r,onChange:e=>{m(""),s(e.target.value.replace(/[^0-9-]/g,""))}}),(0,t.jsx)(h2.BodyRowErrorText,{$isVisible:g.trim().length>0,children:g})]}),(0,t.jsxs)(h2.BodyRow,{children:[(0,t.jsx)(h2.BodyRowLabel,{children:"은행을 선택해주세요."}),(0,t.jsx)(pb,{value:c,onChange:e=>{let t=e.target.value;t in px&&f(t)},children:Object.entries(px).map(([e,n])=>(0,t.jsx)("option",{value:e,children:n.label},e))})]}),(0,t.jsxs)(h2.BodyRow,{children:[(0,t.jsx)(h2.BodyRowLabel,{children:"예금주를 입력해주세요."}),(0,t.jsx)(pj,{placeholder:"기관명 또는 성명",value:h,onChange:e=>{j(""),p(e.target.value)}}),(0,t.jsx)(h2.BodyRowErrorText,{$isVisible:b.trim().length>0,children:b})]}),(0,t.jsxs)(h2.BodyRow,{children:[(0,t.jsx)(h2.BodyRowLabel,{children:"서류 반영 여부를 선택해주세요."}),(0,t.jsxs)(h2.RadioCheckContainer,{children:[(0,t.jsxs)(h2.RadioCheckLabel,{children:[(0,t.jsx)(pw,{checked:u,onChange:()=>{x(!0)}}),"반영"]}),(0,t.jsxs)(h2.RadioCheckLabel,{children:[(0,t.jsx)(pw,{checked:!1===u,onChange:()=>{x(!1)}}),"미반영"]})]})]})]}),(0,t.jsxs)(h2.Footer,{children:[(0,t.jsx)(py,{onClick:()=>{w||(o("MEAL"),s(""),f("NONGHYUP"),p(""),x(!0),m(""),j(""))},disabled:w,children:"내용 삭제 후 새로 입력 (초기화)"}),(0,t.jsxs)(p_,{onClick:()=>{S()},disabled:w||n&&!1===z,children:[(0,t.jsx)(lg.default,{sx:{fontSize:20}}),"저장"]})]})]})})}let pm=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-e7085db1-0"})`
  ${h2.btnStyle}
`,pb=(0,l.default)(o.default.Input.Select).withConfig({componentId:"zh__sc-e7085db1-1"})`
  ${h2.inputStyle}
`,pj=(0,l.default)(o.default.Input.Text).withConfig({componentId:"zh__sc-e7085db1-2"})`
  ${h2.inputStyle}
  width: 100%;
`,pw=(0,l.default)(o.default.Input.Radio).withConfig({componentId:"zh__sc-e7085db1-3"})``,py=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-e7085db1-4"})`
  ${h2.btnStyle}
`,p_=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-e7085db1-5"})`
  ${h2.btnStyle}
`,pv=(0,n.observer)(function(){return"ready"!==a.default.modal.organization.accountAdd.status?null:(0,t.jsx)(pg,{})}),pC=(0,nE.default)((0,t.jsx)("path",{d:"M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3z"}),"OpenInNew"),{CARD_USAGE:pI,BANK_NAME:pz,SERVICE_TYPE:pT}=J.default.enums;function pS(){let e=a.default.modal.organization.cardAdd,n="edit"===e.mode,l=a.default.organizationSetting.staff.organizationId,o=a.default.data.organization.bankAccountList,r=o.data??[],[s,c]=(0,i.useState)(e.cardUsage),[f,h]=(0,i.useState)(""===e.bankAccountId?e3.SELECT_EMPTY_VALUE:e.bankAccountId),[p,u]=(0,i.useState)(e.cardNumberHead),[x,g]=(0,i.useState)(e.cardNumberTail),[m,b]=(0,i.useState)(""),[j,w]=(0,i.useState)(!1),y=f===e3.SELECT_EMPTY_VALUE?"":f,_=s!==e.cardUsage||y!==e.bankAccountId||p!==e.cardNumberHead||x!==e.cardNumberTail;(0,i.useEffect)(()=>{if(null===l)return void o.reset();let e=o.query;(null===e||e.orgId!==l)&&o.setQuery({orgId:l})},[o,l]);let v=()=>{j||(c(e.cardUsage),h(""===e.bankAccountId?e3.SELECT_EMPTY_VALUE:e.bankAccountId),u(e.cardNumberHead),g(e.cardNumberTail),b(""),e.close())},C=async()=>{if(j||n&&!1===_)return;if(4!==p.length)return void b("카드번호 앞 4자리를 입력해주세요.");if(x.length<3||x.length>4)return void b("카드번호 끝 3~4자리를 입력해주세요.");if(null===l)return void a.default.ui.layout.toast.error(n?"기관 식별자가 없어 카드를 수정할 수 없습니다.":"기관 식별자가 없어 카드를 생성할 수 없습니다.");b(""),w(!0);let t={cardNumber:`${p}-****-****-${x}`,bankAccountId:f===e3.SELECT_EMPTY_VALUE?void 0:f,cardUsage:s},[i]=n&&null!==e.cardId?await a.default.data.organization.cardList.patch({orgId:l,cardId:e.cardId,payload:t}):await a.default.data.organization.cardList.create({orgId:l,payload:t});if(null!==i){w(!1),a.default.ui.layout.toast.error(i.message);return}w(!1),v()};return(0,t.jsx)(d.default,{children:(0,t.jsxs)(h2.Container,{children:[(0,t.jsxs)(h2.Header,{children:[(0,t.jsx)(h2.HeaderLeft,{children:(0,t.jsx)(h2.HeaderTitle,{children:n?"카드 정보 수정하기":"카드 정보 추가하기"})}),(0,t.jsx)(h2.HeaderRight,{children:(0,t.jsxs)(pk,{onClick:v,disabled:j,children:[(0,t.jsx)(iF.default,{sx:{fontSize:20}}),"닫기"]})})]}),(0,t.jsxs)(h2.Body,{children:[(0,t.jsxs)(h2.BodyRow,{children:[(0,t.jsx)(h2.BodyRowLabel,{children:"카드번호의 앞 4자리와 끝 3~4자리를 입력해주세요."}),(0,t.jsxs)(pA,{children:[(0,t.jsx)(pO,{placeholder:"0000",maxLength:4,value:p,onChange:e=>{u(e.target.value.replace(/[^0-9]/g,"")),b("")}}),(0,t.jsx)(pO,{placeholder:"****",value:"****",disabled:!0}),(0,t.jsx)(pO,{placeholder:"****",value:"****",disabled:!0}),(0,t.jsx)(pO,{placeholder:"0000",maxLength:4,value:x,onChange:e=>{g(e.target.value.replace(/[^0-9]/g,"")),b("")}})]}),(0,t.jsx)(h2.BodyRowErrorText,{$isVisible:m.trim().length>0,children:m}),(0,t.jsx)(p$,{$isVisible:0===m.trim().length,children:"⚠ 가운데 8자리는 입력하지 않습니다."})]}),(0,t.jsxs)(h2.BodyRow,{children:[(0,t.jsx)(h2.BodyRowLabel,{children:"카드와 연결된 계좌가 있는 경우, 등록된 계좌를 선택해주세요."}),(0,t.jsxs)(pD,{$isEmptySelected:f===e3.SELECT_EMPTY_VALUE,value:f,onChange:e=>{h(e.target.value)},disabled:"loading"===o.status,children:[(0,t.jsx)("option",{value:e3.SELECT_EMPTY_VALUE,disabled:!0,children:"계좌 없음"}),r.map(e=>(0,t.jsxs)("option",{value:e.id,children:[e.serviceType?`${pT[e.serviceType].label} 서비스 `:"- ",e.accountNumber," (은행 ",pz[e.bankName].label,", 예금주"," ",e.accountHolder??"-",")"]},e.id))]}),(0,t.jsxs)(pR,{children:[(0,t.jsx)(pL,{children:"⚠ 원하는 계좌가 목록에 없나요?"}),(0,t.jsxs)(pN,{onClick:()=>{j||(v(),a.default.modal.organization.accountAdd.show())},type:"button",disabled:j,children:["계좌 먼저 등록하기",(0,t.jsx)(pC,{sx:{fontSize:16,position:"relative",top:-1}})]})]})]}),(0,t.jsxs)(h2.BodyRow,{children:[(0,t.jsx)(h2.BodyRowLabel,{children:"카드 용도를 선택하세요."}),(0,t.jsx)(pE,{value:s,onChange:e=>{let t=e.target.value;t in pI&&c(t)},children:Object.entries(pI).map(([e,n])=>(0,t.jsx)("option",{value:e,children:n.label},e))})]})]}),(0,t.jsxs)(h2.Footer,{children:[(0,t.jsx)(pP,{onClick:()=>{j||(c("OPERATING"),h(e3.SELECT_EMPTY_VALUE),u(""),g(""),b(""))},disabled:j,children:"내용 삭제 후 새로 입력 (초기화)"}),(0,t.jsxs)(pF,{onClick:()=>{C()},disabled:j||n&&!1===_,children:[(0,t.jsx)(lg.default,{sx:{fontSize:20}}),"저장"]})]})]})})}let pk=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-4440bebb-0"})`
  ${h2.btnStyle}
`,pE=(0,l.default)(o.default.Input.Select).withConfig({componentId:"zh__sc-4440bebb-1"})`
  ${h2.inputStyle}
  width: 180px;
`,pD=(0,l.default)(o.default.Input.Select).withConfig({componentId:"zh__sc-4440bebb-2"})`
  ${h2.inputStyle}
  width: 100%;
  color: ${({$isEmptySelected:e})=>e?"#9ca3af":"#0a0a0a"};
`,pA=l.default.div.withConfig({componentId:"zh__sc-4440bebb-3"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,pO=(0,l.default)(o.default.Input.Text).withConfig({componentId:"zh__sc-4440bebb-4"})`
  ${h2.inputStyle}
  width: 75px;
  text-align: center;

  &:disabled {
    color: #6b7280;
    background: #f3f4f6;
  }
`,p$=(0,l.default)(h2.BodyRowErrorText).withConfig({componentId:"zh__sc-4440bebb-5"})`
  color: #ff6900;
`,pR=l.default.div.withConfig({componentId:"zh__sc-4440bebb-6"})`
  position: absolute;
  right: 0;
  bottom: -24px;
  left: 0;

  display: flex;
  gap: 10px;
  align-items: center;
`,pL=l.default.div.withConfig({componentId:"zh__sc-4440bebb-7"})`
  font-size: 13px;
  line-height: 1.35;
  color: #ff6900;
`,pN=l.default.button.withConfig({componentId:"zh__sc-4440bebb-8"})`
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
`,pP=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-4440bebb-9"})`
  ${h2.btnStyle}
`,pF=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-4440bebb-10"})`
  ${h2.btnStyle}
`,pM=(0,n.observer)(function(){return"ready"!==a.default.modal.organization.cardAdd.status?null:(0,t.jsx)(pS,{})});var pB=e.i(93847),pU=e.i(86400);function pW(){let e=a.default.modal.organization.contactAdd,n="edit"===e.mode,l=a.default.organizationSetting.staff.staffAccountList,[o,s]=(0,i.useState)(e.serviceType??e3.SELECT_EMPTY_VALUE),[c,f]=(0,i.useState)(e.staffId??e3.SELECT_EMPTY_VALUE),[h,p]=(0,i.useState)(e.phoneNumber),[u,x]=(0,i.useState)(e.mobileProvider),[g,m]=(0,i.useState)(""),[b,j]=(0,i.useState)(!1),w=()=>{s(e3.SELECT_EMPTY_VALUE),f(e3.SELECT_EMPTY_VALUE),p(""),x("KT"),m("")},y=()=>{b||(w(),e.close())},_=async()=>{if(b)return;let t=h.trim();if(""===t)return void m("휴대폰 번호는 필수 입력값입니다.");if(!0!==pU.default.brand.phoneNumber.is(t))return void m("휴대폰 번호 형식이 올바르지 않습니다.");m(""),j(!0);let[i]=n&&null!==e.contactId?await a.default.organizationSetting.staff.patchContact({contactId:e.contactId,payload:{serviceType:o===e3.SELECT_EMPTY_VALUE?null:o,staffId:c===e3.SELECT_EMPTY_VALUE?null:c,phoneNumber:t,mobileProvider:u}}):await a.default.organizationSetting.staff.createContact({serviceType:o===e3.SELECT_EMPTY_VALUE?void 0:o,staffId:c===e3.SELECT_EMPTY_VALUE?void 0:c,phoneNumber:t,mobileProvider:u});if(null!==i){j(!1),a.default.ui.layout.toast.error(i.message);return}j(!1),y()};return(0,t.jsx)(d.default,{children:(0,t.jsxs)(h2.Container,{children:[(0,t.jsxs)(h2.Header,{children:[(0,t.jsx)(h2.HeaderLeft,{children:(0,t.jsx)(h2.HeaderTitle,{children:n?"연락처 수정하기":"연락처 추가하기"})}),(0,t.jsx)(h2.HeaderRight,{children:(0,t.jsxs)(pV,{onClick:y,disabled:b,children:[(0,t.jsx)(iF.default,{sx:{fontSize:20}}),"닫기"]})})]}),(0,t.jsxs)(h2.Body,{children:[(0,t.jsxs)(h2.BodyRow,{children:[(0,t.jsxs)(h2.BodyRowLabelRow,{children:[(0,t.jsx)(h2.BodyRowLabel,{children:"서비스 종류를 선택해주세요."}),(0,t.jsx)(h2.BodyRowHelperText,{children:"필수 입력값이 아닙니다. 입력란을 비워둘 수 있습니다."})]}),(0,t.jsxs)(pH,{value:o,onChange:e=>{let t=e.target.value;s(t in r.default?t:e3.SELECT_EMPTY_VALUE)},children:[Object.entries(r.default).map(([e,n])=>(0,t.jsxs)("option",{value:e,children:[n.label," 서비스"]},e)),(0,t.jsx)("option",{value:e3.SELECT_EMPTY_VALUE,children:"선택 안함"})]})]}),(0,t.jsxs)(h2.BodyRow,{children:[(0,t.jsxs)(h2.BodyRowLabelRow,{children:[(0,t.jsx)(h2.BodyRowLabel,{children:"담당자를 선택해주세요."}),(0,t.jsx)(h2.BodyRowHelperText,{children:"필수 입력값이 아닙니다. 입력란을 비워둘 수 있습니다."})]}),(0,t.jsxs)(pH,{style:{width:263},value:c,onChange:e=>{f(e.target.value)},children:[l.map(e=>(0,t.jsx)("option",{value:e.id,children:null===e.position?e.name:`${e.name} (직급 ${e.position.name})`},e.id)),(0,t.jsx)("option",{value:e3.SELECT_EMPTY_VALUE,children:"선택 안함"})]})]}),(0,t.jsxs)(h2.BodyRow,{children:[(0,t.jsxs)(h2.BodyRowLabelRow,{children:[(0,t.jsx)(h2.BodyRowLabel,{children:"휴대폰 번호 및 통신사를 선택해주세요."}),(0,t.jsx)(h2.BodyRowHelperText,{children:"필수 입력값 입니다."})]}),(0,t.jsxs)(pK,{children:[(0,t.jsx)(pG,{style:{width:191},placeholder:"010-0000-0000",value:h,onChange:e=>{var t;t=e.target.value,m(""),p(pU.default.brand.phoneNumber.format(t))}}),(0,t.jsx)(pH,{style:{width:131},value:u,onChange:e=>{let t=e.target.value;t in pB.default&&x(t)},children:Object.entries(pB.default).map(([e,n])=>(0,t.jsx)("option",{value:e,children:n.label},e))})]}),(0,t.jsx)(h2.BodyRowErrorText,{$isVisible:g.trim().length>0,children:g})]})]}),(0,t.jsxs)(h2.Footer,{children:[(0,t.jsx)(pX,{onClick:()=>{b||w()},disabled:b,children:"내용 삭제 후 새로 입력 (초기화)"}),(0,t.jsxs)(pq,{onClick:()=>{_()},disabled:b,children:[(0,t.jsx)(lg.default,{sx:{fontSize:20}}),n?"수정":"저장"]})]})]})})}let pY=(0,n.observer)(function(){return"ready"!==a.default.modal.organization.contactAdd.status?null:(0,t.jsx)(pW,{})}),pV=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-665cc4f2-0"})`
  ${h2.btnStyle}
`,pH=(0,l.default)(o.default.Input.Select).withConfig({componentId:"zh__sc-665cc4f2-1"})`
  ${h2.inputStyle}
  width: 131px;
`,pG=(0,l.default)(o.default.Input.Text).withConfig({componentId:"zh__sc-665cc4f2-2"})`
  ${h2.inputStyle}
`,pK=l.default.div.withConfig({componentId:"zh__sc-665cc4f2-3"})`
  display: flex;
  gap: 12px;
  align-items: center;
`,pX=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-665cc4f2-4"})`
  ${h2.btnStyle}
`,pq=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-665cc4f2-5"})`
  ${h2.btnStyle}
`,pQ=(0,n.observer)(function({acceptFileTypes:e,isError:n,onSelectFile:l}){let{isWindowFileDragging:d}=a.default.ui.layout,o=(0,i.useRef)(null);(0,O.default)(e=>{let t=e[0];void 0!==t&&l(t)});let r=n?"지원하지 않는 파일 형식입니다.":d?"파일을 여기에 놓으면 업로드 됩니다.":"이곳에 파일을 끌어다 놓거나 (드래그 앤 드롭), 클릭하여 업로드하세요.";return(0,t.jsxs)(pZ,{children:[(0,t.jsx)(pJ,{children:"로고 또는 도장 이미지를 업로드해 주세요."}),(0,t.jsxs)(p1,{$isWindowFileDragging:d,$isError:n,onDragOver:e=>{e.preventDefault()},onDrop:e=>{e.preventDefault();let t=e.dataTransfer.files[0];void 0!==t&&l(t)},onClick:e=>{e.target instanceof HTMLElement&&(e.target.closest("button")||o.current?.click())},children:[!n&&(0,t.jsx)(p2,{children:(0,t.jsx)(Z.Upload,{size:26,color:"#4f39f6"})}),(0,t.jsxs)(p6,{children:[(0,t.jsx)(p4,{$isError:n,children:r}),(0,t.jsx)(p5,{children:"지원 파일 형식: PNG, JPG, JPEG"})]})]}),(0,t.jsx)(p0,{ref:o,type:"file",accept:e,onChange:e=>{let t=e.target.files?.[0];void 0!==t&&(l(t),e.target.value="")}})]})}),pZ=l.default.div.withConfig({componentId:"zh__sc-f01fc0e2-0"})`
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
`,pJ=l.default.div.withConfig({componentId:"zh__sc-f01fc0e2-1"})`
  font-size: 18px;
  font-weight: 700;
  font-style: normal;
  line-height: 24px; /* 133.333% */
  color: #101828;
  text-align: center;
`,p0=l.default.input.withConfig({componentId:"zh__sc-f01fc0e2-2"})`
  display: none;
`,p1=l.default.div.withConfig({componentId:"zh__sc-f01fc0e2-3"})`
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
`,p2=l.default.div.withConfig({componentId:"zh__sc-f01fc0e2-4"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;
`,p6=l.default.div.withConfig({componentId:"zh__sc-f01fc0e2-5"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: center;
`,p4=l.default.div.withConfig({componentId:"zh__sc-f01fc0e2-6"})`
  font-size: 14px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px;
  color: ${({$isError:e})=>e?"#ff4d4f":"#4f39f6"};
  text-align: center;
`,p5=l.default.div.withConfig({componentId:"zh__sc-f01fc0e2-7"})`
  font-size: 14px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px;
  color: #99a1af;
`,p3=(0,nE.default)((0,t.jsx)("path",{d:"M19 13H5v-2h14z"}),"Remove");var p9=e.i(47885),p8=e.i(11974);let p7=async(e,t)=>""===e||1===t?e:new Promise(n=>{let i=new Image;i.onload=()=>{let l=document.createElement("canvas");l.width=235,l.height=235;let a=l.getContext("2d");if(null===a)return void n(e);let d=Math.min(l.width/i.width,l.height/i.height),o=i.width*d*t,r=i.height*d*t,s=(l.width-o)/2,c=(l.height-r)/2;a.clearRect(0,0,l.width,l.height),a.drawImage(i,s,c,o,r),n(l.toDataURL("image/png"))},i.onerror=()=>{n(e)},i.src=e});function ue({file:e,onProcessedImageChange:n}){let[l,a]=(0,i.useState)(100),[d,o]=(0,i.useState)(100),[r,s]=(0,i.useState)(100),[c,f]=(0,i.useState)(""),[h,p]=(0,i.useState)(""),u=(0,i.useRef)(0),x=(0,i.useRef)(0);return(0,i.useEffect)(()=>{let e=window.setTimeout(()=>{s(d)},120);return()=>{window.clearTimeout(e)}},[d]),(0,i.useEffect)(()=>{let t=u.current+1;u.current=t,(async()=>{let{adjustedUrl:n}=await (0,p8.processBackgroundRemoval)({file:e,whiteThreshold:p9.DEFAULT_WHITE_THRESHOLD,softness:p9.DEFAULT_SOFTNESS,contrast:r,selectionRect:null});u.current===t&&f(n)})()},[r,e,n]),(0,i.useEffect)(()=>{if(""===c)return;let e=x.current+1;x.current=e,(async()=>{let t=await p7(c,l/100);x.current===e&&(p(t),n(t))})()},[c,l,n]),(0,t.jsxs)(ut,{children:[(0,t.jsxs)(un,{children:[(0,t.jsx)(ui,{children:(0,t.jsx)(B.default.BackgroundReplace,{size:16,color:"#1C1B1F"})}),(0,t.jsxs)(ul,{children:["업로드된 ",e.name," 이미지의 배경을 제거했습니다.",(0,t.jsx)("br",{}),"아래에서 크기와 선명도를 확인한 뒤 저장을 완료해주세요!"]})]}),(0,t.jsxs)(ua,{children:[(0,t.jsx)(ud,{children:"이미지 미리보기"}),(0,t.jsxs)(uo,{children:[(0,t.jsxs)(ur,{children:[(0,t.jsx)(us,{children:""!==h&&(0,t.jsx)(uc,{src:h,alt:`${e.name} 미리보기`})}),(0,t.jsxs)(uf,{children:[(0,t.jsx)(uh,{children:(0,t.jsx)(e5.default,{sx:{fontSize:22}})}),(0,t.jsx)(up,{children:"체크 무늬는 투명 배경을 뜻합니다. 실제 저장 시에는 배경 없이 저장됩니다."})]})]}),(0,t.jsxs)(uu,{children:[(0,t.jsxs)(ux,{children:[(0,t.jsx)(ug,{children:"크기 조정하기"}),(0,t.jsxs)(um,{children:[(0,t.jsxs)(ub,{children:[(0,t.jsx)(uj,{onClick:()=>{a(e=>Math.max(e-10,100))},disabled:l<=100,children:(0,t.jsx)(p3,{sx:{fontSize:24}})}),(0,t.jsx)(uw,{children:"작게"})]}),(0,t.jsx)(uy,{min:100,max:500,value:l,onChange:a}),(0,t.jsxs)(ub,{children:[(0,t.jsx)(uj,{onClick:()=>{a(e=>Math.min(e+10,500))},disabled:l>=500,children:(0,t.jsx)(cE.default,{sx:{fontSize:24}})}),(0,t.jsx)(uw,{children:"크게"})]})]})]}),(0,t.jsx)(u_,{}),(0,t.jsxs)(ux,{children:[(0,t.jsx)(ug,{children:"선명도 조정하기"}),(0,t.jsxs)(um,{children:[(0,t.jsxs)(ub,{children:[(0,t.jsx)(uj,{onClick:()=>{o(e=>{let t=Math.max(e-5,p9.MIN_CONTRAST);return s(t),t})},disabled:d<=p9.MIN_CONTRAST,children:(0,t.jsx)(p3,{sx:{fontSize:24}})}),(0,t.jsx)(uw,{children:"부드럽게"})]}),(0,t.jsx)(uy,{min:p9.MIN_CONTRAST,max:p9.MAX_CONTRAST,value:d,onChange:o,onChangeEnd:s}),(0,t.jsxs)(ub,{children:[(0,t.jsx)(uj,{onClick:()=>{o(e=>{let t=Math.min(e+5,p9.MAX_CONTRAST);return s(t),t})},disabled:d>=p9.MAX_CONTRAST,children:(0,t.jsx)(cE.default,{sx:{fontSize:24}})}),(0,t.jsx)(uw,{children:"선명하게"})]})]})]})]})]})]})]})}let ut=l.default.div.withConfig({componentId:"zh__sc-3b741e84-0"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  align-self: stretch;

  height: 100%;
  padding: 32px 24px;

  background: #fff;
`,un=l.default.div.withConfig({componentId:"zh__sc-3b741e84-1"})`
  display: flex;
  gap: 4px;
  align-items: flex-start;
  align-self: stretch;

  padding: 12px;
  border: 1px solid #e5e7eb;
  border-radius: 6px;

  background: #f5f8ff;
`,ui=l.default.div.withConfig({componentId:"zh__sc-3b741e84-2"})``,ul=l.default.div.withConfig({componentId:"zh__sc-3b741e84-3"})`
  font-size: 14px;
  font-weight: 400;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
`,ua=l.default.div.withConfig({componentId:"zh__sc-3b741e84-4"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;
`,ud=l.default.div.withConfig({componentId:"zh__sc-3b741e84-5"})`
  font-size: 14px;
  font-weight: 700;
  font-style: normal;
  line-height: 16px; /* 114.286% */
  color: #0a0a0a;
`,uo=l.default.div.withConfig({componentId:"zh__sc-3b741e84-6"})`
  display: flex;
  gap: 24px;
  align-items: flex-start;
  align-self: stretch;
`,ur=l.default.section.withConfig({componentId:"zh__sc-3b741e84-7"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;

  width: 235px;
`,us=l.default.div.withConfig({componentId:"zh__sc-3b741e84-8"})`
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
`,uc=l.default.img.withConfig({componentId:"zh__sc-3b741e84-9"})`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`,uf=l.default.div.withConfig({componentId:"zh__sc-3b741e84-10"})`
  display: flex;
  gap: 4px;
  align-items: flex-start;
  align-self: stretch;

  color: #0a0a0a;
`,uh=l.default.div.withConfig({componentId:"zh__sc-3b741e84-11"})`
  position: relative;
  top: -3px;
`,up=l.default.div.withConfig({componentId:"zh__sc-3b741e84-12"})`
  font-size: 14px;
  font-weight: 400;
  font-style: normal;
  line-height: 16px; /* 114.286% */
`,uu=l.default.section.withConfig({componentId:"zh__sc-3b741e84-13"})`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
`,ux=l.default.div.withConfig({componentId:"zh__sc-3b741e84-14"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;
`,ug=l.default.h5.withConfig({componentId:"zh__sc-3b741e84-15"})`
  font-size: 14px;
  font-weight: 700;
  font-style: normal;
  line-height: 16px; /* 114.286% */
  color: #0a0a0a;
`,um=l.default.div.withConfig({componentId:"zh__sc-3b741e84-16"})`
  display: flex;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;
  justify-content: center;
`,ub=l.default.div.withConfig({componentId:"zh__sc-3b741e84-17"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 56px;
`,uj=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-3b741e84-18"})`
  display: flex;
  gap: 4px;
  align-items: center;
  align-self: stretch;

  height: 36px;
  padding: 8px 16px;
`,uw=l.default.div.withConfig({componentId:"zh__sc-3b741e84-19"})`
  display: flex;
  justify-content: center;

  font-size: 14px;
  font-weight: 400;
  font-style: normal;
  line-height: normal;
  color: #4f39f6;
  text-align: center;
`,uy=(0,l.default)(o.default.Input.Slider).withConfig({componentId:"zh__sc-3b741e84-20"})`
  position: relative;
  top: 10px;
`,u_=l.default.div.withConfig({componentId:"zh__sc-3b741e84-21"})`
  align-self: stretch;
  border-top: 1px solid #d1d5db;
`,uv=(0,n.observer)(function(){let e=a.default.modal.organization.imageAdjustUpload,{status:n,close:l,resetToUploadStep:o,selectedFile:r}=e,[s,c]=(0,i.useState)(!1),f=(0,i.useRef)(null);if((0,i.useEffect)(()=>"ready"!==n?void e.setToastContainer(null):(e.setToastContainer(f.current),()=>{e.setToastContainer(null)}),[e,n]),"ready"!==n)return null;let h=null===r,p="logo"===e.target?"로고":"도장",u=async()=>{!0===await e.save()&&c(!1)};return(0,t.jsx)(d.default,{children:(0,t.jsxs)(uC,{ref:f,children:[(0,t.jsxs)(h2.Header,{children:[(0,t.jsx)(h2.HeaderLeft,{children:(0,t.jsx)(h2.HeaderTitle,{children:"이미지 업로드하기"})}),(0,t.jsx)(h2.HeaderRight,{children:(0,t.jsxs)(uI,{onClick:()=>{c(!1),l()},children:[(0,t.jsx)(iF.default,{sx:{fontSize:20}}),"닫기"]})})]}),(0,t.jsx)(uz,{children:h?(0,t.jsx)(pQ,{acceptFileTypes:e.acceptFileTypes,isError:e.isError,onSelectFile:e.setSelectedFile}):(0,t.jsx)(ue,{file:r,onProcessedImageChange:e.setProcessedImageDataUrl})}),(0,t.jsxs)(h2.Footer,{children:[(0,t.jsx)(uT,{onClick:()=>{c(!1),o()},disabled:h||e.isSaving,children:"다시 업로드하기"}),(0,t.jsxs)(uS,{onClick:()=>{c(!0)},disabled:h||e.isSaving,children:[(0,t.jsx)(lg.default,{sx:{fontSize:20}}),"최종확인 및 저장"]})]}),(0,t.jsx)(uk,{isOpen:s,targetLabel:p,isSaving:e.isSaving,onCancel:()=>{e.isSaving||c(!1)},onConfirm:()=>{u()}})]})})}),uC=(0,l.default)(h2.Container).withConfig({componentId:"zh__sc-665af392-0"})`
  position: relative;
  width: 626px;
`,uI=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-665af392-1"})`
  ${h2.btnStyle}
`,uz=(0,l.default)(h2.Body).withConfig({componentId:"zh__sc-665af392-2"})`
  padding: 0;
`,uT=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-665af392-3"})`
  ${h2.btnStyle}
`,uS=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-665af392-4"})`
  ${h2.btnStyle}
`;function uk({isOpen:e,targetLabel:n,isSaving:i,onCancel:l,onConfirm:a}){return!0!==e?null:(0,t.jsx)(uE,{children:(0,t.jsxs)(uD,{children:[(0,t.jsxs)(uA,{children:[(0,t.jsxs)(uO,{children:[n," 이미지를 저장할까요?"]}),(0,t.jsxs)(u$,{children:["저장된 ",n," 이미지는 출력용 서류에서 사용할 수 있습니다.",(0,t.jsx)("br",{}),"이미 출력했거나 최종확인한 서류는 다시 확인이 필요할 수 있습니다."]})]}),(0,t.jsxs)(uR,{children:[(0,t.jsx)(uL,{type:"button",onClick:l,disabled:!0===i,children:"취소하기"}),(0,t.jsx)(uN,{type:"button",onClick:a,disabled:!0===i,children:"저장하기"})]})]})})}let uE=l.default.div.withConfig({componentId:"zh__sc-665af392-5"})`
  position: fixed;
  z-index: 3100;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgb(17 24 39 / 36%);
`,uD=l.default.div.withConfig({componentId:"zh__sc-665af392-6"})`
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
`,uA=l.default.div.withConfig({componentId:"zh__sc-665af392-7"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;

  width: 100%;
`,uO=l.default.h3.withConfig({componentId:"zh__sc-665af392-8"})`
  margin: 0;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px;
  color: #000;
`,u$=l.default.p.withConfig({componentId:"zh__sc-665af392-9"})`
  margin: 0;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px;
  color: #000;
`,uR=l.default.div.withConfig({componentId:"zh__sc-665af392-10"})`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: flex-end;

  width: 100%;
`,uL=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-665af392-11"})`
  height: 36px;
  padding: 8px 16px;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px;
`,uN=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-665af392-12"})`
  height: 36px;
  padding: 8px 16px;

  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: 20px;
`;var uP=e.i(13269);let uF=(0,n.observer)(function(){let e=a.default.modal.organization.staffAccountAdd,n="edit"===e.mode,[l,o]=(0,i.useState)(e.name),[r,s]=(0,i.useState)(e.position??e3.SELECT_EMPTY_VALUE),[c,f]=(0,i.useState)(e.phoneNumber),[h,p]=(0,i.useState)(e.sealImagePath),[u,x]=(0,i.useState)(""),[g,m]=(0,i.useState)(""),[b,j]=(0,i.useState)(!1),w=(0,i.useRef)(null),y=a.default.organizationSetting.staff.organizationId,_=a.default.data.organization.staffPositionList,v=e=>{a.default.ui.layout.toast.error(e,void 0,w.current)};(0,i.useEffect)(()=>{null!==y&&_.query?.orgId!==y&&_.setQuery({orgId:y})},[y,_]);let C=()=>{o(""),s(e3.SELECT_EMPTY_VALUE),f(""),p(""),x(""),m("")},I=()=>{b||(C(),e.close())},z=async e=>{try{let t=await fetch(e);if(!0!==t.ok)return[Error("Failed to convert data URL to blob"),null];let n=await t.blob();return[null,n]}catch(e){return[e instanceof Error?e:Error("Failed to convert data URL to blob"),null]}},T=async(e,t,n)=>{let[i,l]=await z(e);if(null!==i)return[i,null];let[a,d]=await l4.default.upload.createPresignedUploadUrl({category:uP.default.STAFF_SEAL,contentType:h6.default.PNG,organizationId:n,staffAccountId:t});if(null!==a)return[a,null];let[o]=await l4.default.upload.putFileToPresignedUploadUrl({uploadUrl:d.uploadUrl,contentType:h6.default.PNG,file:l});return null!==o?[o,null]:[null,d.path]},S=async e=>{let t=a.default.data.organization.contactList.query;if(!0==(null!==t&&t.orgId===e))try{await a.default.data.organization.contactList.refetch()}catch{v("서비스별 업무 연락처 목록을 새로고침하지 못했습니다.")}},k=async()=>{if(b)return;let t=l.trim();""===t?x("이름은 필수 입력값입니다."):x("");let i=c.trim();if(""!==i&&!0!==pU.default.brand.phoneNumber.is(i))return void m("휴대폰 번호 형식이 올바르지 않습니다.");if(m(""),""===t)return;j(!0);let d=e.staffAccountId,o=a.default.organizationSetting.staff.organizationId;if(!0!==n){if(null===o){j(!1),v("기관 식별자가 없어 근무자를 생성할 수 없습니다.");return}let[e,n]=await a.default.organizationSetting.staff.createStaffAccount({organizationId:o,name:t,role:"STAFF",positionId:r===e3.SELECT_EMPTY_VALUE?void 0:r,phoneNumber:""===i?void 0:i});if(null!==e||null===n){j(!1),v(e?.message??"근무자 생성에 실패했습니다.");return}d=n.id,o=n.organizationId}else{if(null===d){j(!1),v("수정할 근무자 정보를 찾지 못했습니다.");return}let[e]=await a.default.data.staffAccount.patch({id:d,payload:{name:t,positionId:r===e3.SELECT_EMPTY_VALUE?void 0:r,phoneNumber:""===i?void 0:i}});if(null!==e){j(!1),v(e.message||"근무자 수정에 실패했습니다.");return}null!==o&&await S(o)}let s=h.trim();if(s.startsWith("data:")){if(null===d||null===o){j(!1),v("도장 업로드 대상 정보를 찾지 못했습니다.");return}let[e,t]=await T(s,d,o);if(null!==e||null===t){j(!1),v(n?"근무자 정보는 수정되었지만 도장 업로드에 실패했습니다. 다시 시도해 주세요.":"근무자는 생성되었지만 도장 업로드에 실패했습니다. 수정에서 다시 업로드해 주세요."),I();return}let[i]=await a.default.data.staffAccount.patch({id:d,payload:{sealImagePath:t}});if(null!==i){j(!1),v(n?"근무자 도장 경로 저장에 실패했습니다. 다시 시도해 주세요.":"근무자는 생성되었지만 도장 경로 저장에 실패했습니다. 수정에서 다시 저장해 주세요."),I();return}}j(!1),I()};return(0,t.jsx)(d.default,{children:(0,t.jsxs)(h2.Container,{ref:w,children:[(0,t.jsxs)(h2.Header,{children:[(0,t.jsx)(h2.HeaderLeft,{children:(0,t.jsx)(h2.HeaderTitle,{children:n?"근무자 수정하기":"근무자 추가하기"})}),(0,t.jsx)(h2.HeaderRight,{children:(0,t.jsxs)(uB,{onClick:I,disabled:b,children:[(0,t.jsx)(iF.default,{sx:{fontSize:20}}),"닫기"]})})]}),(0,t.jsxs)(h2.Body,{children:[(0,t.jsxs)(h2.BodyRow,{children:[(0,t.jsx)(h2.BodyRowLabel,{children:"이름을 입력해주세요."}),(0,t.jsx)(uW,{placeholder:"이름을 입력해주세요",value:l,onChange:e=>{x(""),o(e.target.value)}}),(0,t.jsx)(h2.BodyRowErrorText,{$isVisible:u.trim().length>0,children:u})]}),(0,t.jsxs)(h2.BodyRow,{children:[(0,t.jsx)(h2.BodyRowLabel,{children:"직급을 선택해주세요."}),(0,t.jsxs)(uU,{value:r,onChange:e=>{s(e.target.value)},children:[_.data?.map(e=>(0,t.jsx)("option",{value:e.id,children:e.name},e.id)),(0,t.jsx)("option",{value:e3.SELECT_EMPTY_VALUE,children:"없음"})]})]}),(0,t.jsxs)(h2.BodyRow,{children:[(0,t.jsx)(h2.BodyRowLabel,{children:"휴대폰 번호를 입력해주세요."}),(0,t.jsx)(uW,{placeholder:"010-0000-0000",value:c,onChange:e=>{var t;t=e.target.value,m(""),f(pU.default.brand.phoneNumber.format(t))}}),(0,t.jsx)(h2.BodyRowErrorText,{$isVisible:g.trim().length>0,children:g})]}),(0,t.jsxs)(h2.BodyRow,{children:[(0,t.jsxs)(h2.BodyRowLabelRow,{children:[(0,t.jsx)(h2.BodyRowLabel,{children:"도장 이미지를 업로드 해주세요."}),(0,t.jsxs)(h2.BodyRowHelperText,{children:[(0,t.jsx)(e5.default,{sx:{fontSize:18},style:{marginRight:4,position:"relative",top:3}}),"해당 이미지는 서류에서 근무자의 도장이 필요시 사용됩니다."]})]}),(0,t.jsx)(uY,{children:(0,t.jsxs)(uV,{children:[(0,t.jsx)(uH,{$hasImage:h.trim().length>0,children:0===h.trim().length?(0,t.jsx)(B.default.Imagesmode,{size:34,color:"#d1d5db"}):(0,t.jsx)(uG,{src:h,alt:"도장 이미지 미리보기"})}),(0,t.jsx)(uK,{onClick:()=>{a.default.modal.organization.imageAdjustUpload.show("seal",h,{saveMode:"external",onProcessedImageDataUrl:e=>{p(e)}})},disabled:b,children:"업로드하기"})]})})]})]}),(0,t.jsxs)(h2.Footer,{children:[(0,t.jsx)(uX,{onClick:()=>{b||C()},disabled:b,children:"내용 삭제 후 새로 입력 (초기화)"}),(0,t.jsxs)(uq,{onClick:()=>{k()},disabled:b,children:[(0,t.jsx)(lg.default,{sx:{fontSize:20}}),"저장"]})]})]})})}),uM=(0,n.observer)(function(){return"ready"!==a.default.modal.organization.staffAccountAdd.status?null:(0,t.jsx)(uF,{})}),uB=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-2a48cfd9-0"})`
  ${h2.btnStyle}
`,uU=(0,l.default)(o.default.Input.Select).withConfig({componentId:"zh__sc-2a48cfd9-1"})`
  ${h2.inputStyle}
  width: 131px;
`,uW=(0,l.default)(o.default.Input.Text).withConfig({componentId:"zh__sc-2a48cfd9-2"})`
  ${h2.inputStyle}
  width: 100%;
`,uY=l.default.div.withConfig({componentId:"zh__sc-2a48cfd9-3"})`
  display: flex;
  gap: 12px;
  align-items: center;
`,uV=l.default.div.withConfig({componentId:"zh__sc-2a48cfd9-4"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
`,uH=l.default.div.withConfig({componentId:"zh__sc-2a48cfd9-5"})`
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
`,uG=l.default.img.withConfig({componentId:"zh__sc-2a48cfd9-6"})`
  width: 100%;
  height: 100%;
  border-radius: 6px;
  object-fit: cover;
`,uK=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-2a48cfd9-7"})`
  ${h2.btnStyle}
  width: fit-content;
`,uX=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-2a48cfd9-8"})`
  ${h2.btnStyle}
`,uq=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-2a48cfd9-9"})`
  ${h2.btnStyle}
`;function uQ(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(pY,{}),(0,t.jsx)(pv,{}),(0,t.jsx)(pM,{}),(0,t.jsx)(uM,{}),(0,t.jsx)(uv,{})]})}let uZ=(0,n.observer)(function(){let{serviceWorkerDraft:e,isSaving:n,resetToUploadStep:i,saveServiceWorkerDraft:l}=a.default.modal.serviceWorkerCreate,{preserveServiceWorkerAfterSave:d,resetSort:o,setCurrentServiceType:r,setHighlightedServiceWorkerId:s}=a.default.serviceWorker.info.byServiceWorker,c=async()=>{let t=e?.serviceType,n=await l();if(null===n)return void requestAnimationFrame(()=>{document.querySelector("[data-service-worker-create-field-error]")?.scrollIntoView({block:"center",behavior:"smooth"})});d(n.id);let i=t??null;null!==i&&(r(i),o(),a.default.data.serviceWorker.list.setQuery({serviceType:i}),await a.default.data.serviceWorker.list.refetch()),s(n.id)};return(0,t.jsxs)(uJ,{children:[(0,t.jsx)(u1,{disabled:!e||n,onClick:i,children:"다시 업로드하기"}),(0,t.jsxs)(u2,{disabled:!e||n,onClick:()=>void c(),children:[(0,t.jsx)(b.Check,{size:16}),"최종확인 및 저장"]})]})}),uJ=l.default.div.withConfig({componentId:"zh__sc-d659ae78-0"})`
  display: flex;
  gap: 16px;
  align-items: center;
  align-self: stretch;
  justify-content: flex-end;

  padding: 16px;
  border-top: 1px solid #e5e7eb;
`,u0=l.css`
  display: flex;
  gap: 10px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,u1=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-d659ae78-1"})`
  ${u0}
`,u2=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-d659ae78-2"})`
  ${u0}
`,u6=(0,n.observer)(function(){let e=a.default.modal.serviceWorkerCreate;return!0!==e.isDuplicateServiceWorkerDialogOpen?null:(0,t.jsx)(u4,{children:(0,t.jsxs)(u5,{children:[(0,t.jsxs)(u3,{children:[(0,t.jsx)(u9,{children:"같은 정보의 제공인력이 이미 등록되어 있어요."}),(0,t.jsxs)(u8,{children:["이름과 생년월일이 같은 제공인력이 이미 등록되어 있습니다.",(0,t.jsx)("br",{}),"동일한 제공인력이라면 기존 정보에서 계약을 수정하거나 추가해주세요.",(0,t.jsx)("br",{}),"다른 제공인력이라면, 수정 후 신규 등록을 계속할 수 있습니다."]})]}),(0,t.jsxs)(u7,{children:[(0,t.jsx)(xe,{type:"button",onClick:e.cancelDuplicateServiceWorkerRegistration,children:"등록 취소하기"}),(0,t.jsx)(xt,{type:"button",onClick:e.closeDuplicateServiceWorkerDialog,children:"신규 등록 수정하고 계속하기"})]})]})})}),u4=l.default.div.withConfig({componentId:"zh__sc-75646160-0"})`
  position: fixed;
  z-index: 3100;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgb(17 24 39 / 36%);
`,u5=l.default.div.withConfig({componentId:"zh__sc-75646160-1"})`
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
`,u3=l.default.div.withConfig({componentId:"zh__sc-75646160-2"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;
`,u9=l.default.h3.withConfig({componentId:"zh__sc-75646160-3"})`
  align-self: stretch;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #000;
`,u8=l.default.p.withConfig({componentId:"zh__sc-75646160-4"})`
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #000;
`,u7=l.default.div.withConfig({componentId:"zh__sc-75646160-5"})`
  display: flex;
  gap: 12px;
  align-self: stretch;
  justify-content: flex-end;
`,xe=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-75646160-6"})`
  display: flex;
  gap: 10px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,xt=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-75646160-7"})`
  display: flex;
  gap: 10px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,xn=(0,n.observer)(function(){let{analyzeSelectedFile:e,isAnalyzing:n,selectedFile:i}=a.default.modal.serviceWorkerCreate;return(0,t.jsx)(xi,{children:(0,t.jsxs)(xl,{disabled:null===i||n,onClick:()=>{e()},children:["분석 시작",(0,t.jsx)(L,{size:16})]})})}),xi=l.default.div.withConfig({componentId:"zh__sc-3f938d0e-0"})`
  display: flex;
  gap: 10px;
  align-self: stretch;
  justify-content: flex-end;
`,xl=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-3f938d0e-1"})`
  display: flex;
  flex-shrink: 0;
  gap: 10px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,{FILE_EXTENSION_WHITELIST_BY_GROUP:xa}=U.default.file,xd=(0,n.observer)(function(){var e;let n,{clearSelectedFile:i,selectedFile:l,isAnalyzing:d}=a.default.modal.serviceWorkerCreate;if(null===l)return null;let o=-1===(n=(e=l.name).lastIndexOf("."))?"":e.slice(n).toLowerCase();return(0,t.jsx)(xo,{children:(0,t.jsxs)(xr,{children:[(0,t.jsxs)(xs,{children:[(0,t.jsx)(xc,{children:xa.IMAGE.some(e=>e===o)?(0,t.jsx)(B.default.Photo,{size:17,color:"#FA8E43"}):xa.AUDIO.some(e=>e===o)?(0,t.jsx)(B.default.SpeechToText,{size:17,color:"#A855F7"}):xa.DOCUMENT.some(e=>e===o)?(0,t.jsx)(B.default.News,{size:17,color:"#2264E8"}):null}),(0,t.jsx)(xf,{children:(0,t.jsx)(xh,{children:l.name})})]}),(0,t.jsxs)(xp,{onClick:i,disabled:d,children:["삭제",(0,t.jsx)(M.X,{size:16})]})]},`${l.name}-${l.size}-${l.lastModified}`)})}),xo=l.default.div.withConfig({componentId:"zh__sc-9108dce9-0"})`
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
`,xr=l.default.div.withConfig({componentId:"zh__sc-9108dce9-1"})`
  display: flex;
  flex-shrink: 0;
  gap: 24px;
  align-items: center;

  padding: 12px 16px;
  border-radius: 8px;

  background: #f6f8fb;
`,xs=l.default.div.withConfig({componentId:"zh__sc-9108dce9-2"})`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`,xc=l.default.div.withConfig({componentId:"zh__sc-9108dce9-3"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;
  border-radius: 4px;

  background: #fff;
`,xf=l.default.div.withConfig({componentId:"zh__sc-9108dce9-4"})`
  display: flex;
  align-items: center;
  align-self: stretch;

  width: 196px;
  height: 40px;

  color: #0a0a0a;
`,xh=l.default.div.withConfig({componentId:"zh__sc-9108dce9-5"})`
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #0a0a0a;
`,xp=l.default.button.withConfig({componentId:"zh__sc-9108dce9-6"})`
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
`;function xu(){let[e,n]=(0,i.useState)(0);return(0,i.useEffect)(()=>{let e=performance.now(),t=0,i=l=>{n(Math.min(100*(1-Math.exp(-((l-e)/1e3*.05))),98)),t=window.requestAnimationFrame(i)};return t=window.requestAnimationFrame(i),()=>{window.cancelAnimationFrame(t)}},[]),(0,t.jsx)(xx,{children:(0,t.jsx)(xg,{$progress:e})})}let xx=l.default.div.withConfig({componentId:"zh__sc-4ad7a7ff-0"})`
  overflow: hidden;
  display: flex;

  width: 362px;
  height: ${8}px;
  border-radius: 99px;

  background: #e6e0ff;
  background-color: #e5e2ff;
`,xg=l.default.div.attrs(({$progress:e})=>({style:{transform:`scaleX(${e/100})`}})).withConfig({componentId:"zh__sc-4ad7a7ff-1"})`
  transform-origin: left center;
  width: 100%;
  height: 100%;
  background-color: #5635ff;
`,xm=(0,n.observer)(function({disabled:e=!1}){let{isWindowFileDragging:n}=a.default.ui.layout,{selectedFile:i,isError:l,isAnalyzing:d,abortAnalyze:o}=a.default.modal.serviceWorkerCreate;return(0,t.jsxs)(xj,{children:[null===i&&!1===l&&(0,t.jsx)(xw,{children:(0,t.jsx)(Z.Upload,{size:26,color:e?"#9CA3AF":xb[100]})}),(0,t.jsxs)(xy,{children:[(0,t.jsx)(x_,{$isError:l,$disabled:e,children:!0===l?"지원하지 않는 파일 형식입니다.":!0===n?"파일을 여기에 놓으면 업로드 됩니다.":!0===d?"업로드한 파일을 분석하고 있습니다.":"이곳에 파일을 끌어다 놓거나 (드래그 앤 드롭), 클릭하여 업로드하세요."}),(0,t.jsx)(xv,{$disabled:e,children:null!==i&&!1===d?"새 파일을 업로드하면 기존 파일이 교체됩니다.":"지원 파일 형식: 사진 이미지"})]}),!0===d&&(0,t.jsx)(xu,{}),!0===d&&(0,t.jsx)(xC,{onClick:o,children:"중단하기"})]})}),{PRIMARY:xb}=J.default.style.color,xj=l.default.div.withConfig({componentId:"zh__sc-7f4896ee-0"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  align-self: stretch;
  justify-content: center;
`,xw=l.default.div.withConfig({componentId:"zh__sc-7f4896ee-1"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;
`,xy=l.default.div.withConfig({componentId:"zh__sc-7f4896ee-2"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  align-self: stretch;
  justify-content: center;
`,x_=l.default.div.withConfig({componentId:"zh__sc-7f4896ee-3"})`
  font-size: 14px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 142.857% */
  color: ${({$isError:e,$disabled:t})=>t?"#9CA3AF":e?"#ff4d4f":"#4f39f6"};
  text-align: center;
`,xv=l.default.div.withConfig({componentId:"zh__sc-7f4896ee-4"})`
  font-size: 14px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 142.857% */
  color: ${({$disabled:e})=>e?"#9CA3AF":"#99a1af"};
`,xC=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-7f4896ee-5"})`
  display: flex;
  gap: 10px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,xI=(0,n.observer)(function({disabled:e=!1}){let{isWindowFileDragging:n}=a.default.ui.layout,{acceptFileTypes:l,setSelectedFile:d,selectedFile:o,isError:r}=a.default.modal.serviceWorkerCreate,s=(0,i.useRef)(null);return(0,O.default)(t=>{if(e||0===t.length)return;let n=t[0];void 0!==n&&d(n)}),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(xz,{ref:s,type:"file",accept:l,onChange:t=>{if(e)return;let n=Array.from(t.target.files??[]);if(0===n.length)return;let i=n[0];void 0!==i&&(d(i),t.target.value="")},disabled:e}),(0,t.jsxs)(xT,{$isWindowFileDragging:n,$disabled:e,onDragOver:t=>{if(t.preventDefault(),e)return},onDrop:t=>{if(t.preventDefault(),e)return;let n=Array.from(t.dataTransfer.files);if(0===n.length)return;let i=n[0];void 0!==i&&d(i)},onClick:t=>{!e&&t.target instanceof HTMLElement&&(t.target.closest("button")||s.current?.click())},$isError:r,children:[null!==o&&(0,t.jsx)(xd,{}),(0,t.jsx)(xm,{disabled:e}),(0,t.jsx)(xn,{})]})]})}),xz=l.default.input.withConfig({componentId:"zh__sc-37be1ed1-0"})`
  display: none;
`,xT=l.default.div.withConfig({componentId:"zh__sc-37be1ed1-1"})`
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
`,xS=(0,n.observer)(function(){let{analyzedFile:e,mode:n}=a.default.modal.serviceWorkerCreate;return(0,t.jsxs)(xk,{$flex1:null===e,children:[null===e&&(0,t.jsx)(xE,{children:"renew"===n?"새로운 전자바우처 캡쳐 화면을 아래에 업로드하고, 다음 버튼을 클릭하세요.":"전자바우처 캡쳐 화면을 아래에 업로드하고, 다음 버튼을 클릭하세요."}),(0,t.jsx)(xI,{})]})}),xk=l.default.div.withConfig({componentId:"zh__sc-f40ff2c5-0"})`
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
`,xE=l.default.div.withConfig({componentId:"zh__sc-f40ff2c5-1"})`
  font-size: 18px;
  font-weight: 700;
  font-style: normal;
  line-height: 24px;
  color: #101828;
`,{FILE_EXTENSION_WHITELIST_BY_GROUP:xD}=U.default.file,xA=(0,n.observer)(function(){var e;let n,{analyzedFile:l}=a.default.modal.serviceWorkerCreate,{ref:d,fire:o}=ey();if((0,i.useEffect)(()=>{null!==l&&o()},[l,o]),null===l)return null;let r=-1===(n=(e=l.name).lastIndexOf("."))?"":e.slice(n).toLowerCase();return(0,t.jsxs)(xO,{ref:d,children:[(0,t.jsxs)(x$,{children:[(0,t.jsxs)(xR,{children:[(0,t.jsx)(B.default.FindInPage,{size:18}),"AI 문서 인식 완료"]}),(0,t.jsxs)(xL,{children:["업로드된 서류들에서 정보를 성공적으로 추출했습니다. ",(0,t.jsx)("br",{}),"우측의 [제공인력 기본 정보]가 올바르게 연동되었는지 확인 후, [최종 확인] 버튼을 눌러주세요."]})]}),(0,t.jsxs)(xN,{children:[(0,t.jsxs)(xP,{children:[(0,t.jsx)(B.default.CheckCircle,{size:18}),"분석 완료된 첨부 서류 (1건)"]}),(0,t.jsx)(xF,{children:(0,t.jsxs)(xM,{children:[(0,t.jsxs)(xB,{children:[(0,t.jsx)(xU,{children:xD.IMAGE.some(e=>e===r)?(0,t.jsx)(B.default.Photo,{size:17,color:"#FA8E43"}):xD.AUDIO.some(e=>e===r)?(0,t.jsx)(B.default.SpeechToText,{size:17,color:"#A855F7"}):xD.DOCUMENT.some(e=>e===r)?(0,t.jsx)(B.default.News,{size:17,color:"#2264E8"}):null}),(0,t.jsx)(xW,{children:(0,t.jsx)(xY,{children:l.name})})]}),(0,t.jsx)(xV,{children:"추출 완료"})]},`${l.name}-${l.size}-${l.lastModified}`)})]})]})}),xO=l.default.div.withConfig({componentId:"zh__sc-635d6973-0"})`
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
`,x$=l.default.div.withConfig({componentId:"zh__sc-635d6973-1"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  align-self: stretch;
`,xR=l.default.div.withConfig({componentId:"zh__sc-635d6973-2"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #0a0a0a;
`,xL=l.default.div.withConfig({componentId:"zh__sc-635d6973-3"})`
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
`,xN=l.default.div.withConfig({componentId:"zh__sc-635d6973-4"})`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  align-self: stretch;

  min-height: 0;
`,xP=l.default.div.withConfig({componentId:"zh__sc-635d6973-5"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #0a0a0a;
`,xF=l.default.div.withConfig({componentId:"zh__sc-635d6973-6"})`
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
`,xM=l.default.div.withConfig({componentId:"zh__sc-635d6973-7"})`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 355px;
  height: 64px;
  padding: 12px 16px;
  border-radius: 8px;

  background: #f6f8fb;
`,xB=l.default.div.withConfig({componentId:"zh__sc-635d6973-8"})`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`,xU=l.default.div.withConfig({componentId:"zh__sc-635d6973-9"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;
  border-radius: 4px;

  background: #fff;
`,xW=l.default.div.withConfig({componentId:"zh__sc-635d6973-10"})`
  display: flex;
  align-items: center;
  align-self: stretch;

  width: 196px;
  height: 40px;

  color: #0a0a0a;
`,xY=l.default.div.withConfig({componentId:"zh__sc-635d6973-11"})`
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #0a0a0a;
`,xV=l.default.div.withConfig({componentId:"zh__sc-635d6973-12"})`
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
`,xH=(0,n.observer)(function(){let{analyzedFile:e}=a.default.modal.serviceWorkerCreate;return(0,t.jsxs)(xG,{children:[null!==e&&(0,t.jsx)(xA,{}),(0,t.jsx)(xS,{})]})}),xG=l.default.div.withConfig({componentId:"zh__sc-9bac733d-0"})`
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
`;var xK=e.i(99696);let xX=Object.keys(xK.default).filter(function(e){return e in xK.default}),xq=Object.keys(r.default).filter(function(e){return e in r.default}),xQ=e=>{let t=e.trim().match(/^(\d{6})-?(\d)(\d{0,6})$/);if(null===t)return"unknown";switch(t[2]){case"1":case"3":return"MALE";case"2":case"4":return"FEMALE";default:return"unknown"}},xZ=e=>{switch(e){case"MALE":return"남성";case"FEMALE":return"여성";case"unknown":return""}},xJ=()=>{let e=new Date,[t,n]=eF.default.create(e.getFullYear(),e.getMonth()+1,e.getDate());return null!==t||null===n?null:n},x0=(0,n.observer)(function(){let{serviceWorkerDraft:e,analyzedServiceWorkerDraft:n,mode:l,updateServiceWorkerDraft:d,getServiceWorkerDraftFieldError:s,clearServiceWorkerDraftFieldError:c}=a.default.modal.serviceWorkerCreate,f=(0,i.useRef)(!1);if((0,i.useEffect)(()=>{if(null===e||f.current||(f.current=!0,""!==(e.firstRegisteredDate??"").trim()))return;let t=xJ();null!==t&&d(e=>({...e,firstRegisteredDate:t}))},[e,d]),(0,i.useEffect)(()=>{let t=xq[0];null!==e&&void 0===e.serviceType&&void 0!==t&&d(e=>({...e,serviceType:t}))},[e,d]),null===e)return null;let h="renew"===l,p=e.serviceWorkerName??"",u=e.residentRegistrationNumber??"",x=e.firstRegisteredDate??"",g=e.contractStartDate??"",m=e.contractEndDate??"",b=e.phoneNumber??"",j=e.contact??"",w=e.address??"",y=e.postCode??"",_=e.addressDetail??"",v=e.note??"",C=e.serviceType,I=void 0===C?null:xX.find(e=>xK.BUSINESS_TYPE_SERVICE_TYPES[e].includes(C))??null,z=e.gender??xQ(u),T=(e,t)=>""===s(e)?t:{...t,borderColor:"#ff4d4f",background:"#fff5f5"},S=e=>{let n=s(e);return""===n?null:(0,t.jsx)(x7,{"data-service-worker-create-field-error":"true",children:n})},k=(e,t)=>{let n=String(t??"").trim();return""!==n&&String(e).trim()===n},E=xJ(),D=""===(n?.firstRegisteredDate??"").trim()&&null!==E&&x===E,A=k(x,n?.firstRegisteredDate??"")||D;return(0,t.jsxs)(x2,{children:[(0,t.jsx)(x6,{children:"인적사항"}),(0,t.jsxs)(x4,{children:[(0,t.jsxs)(x3,{children:[(0,t.jsxs)(x9,{children:["성명",(0,t.jsx)(x1,{})]}),(0,t.jsx)(o.default.Input.Text,{disabled:h,placeholder:"성명을 입력하세요.",$autoFilled:k(p,n?.serviceWorkerName??""),style:T("serviceWorkerName",gt),value:p,onChange:e=>{c("serviceWorkerName"),d(t=>({...t,serviceWorkerName:e.target.value.trim()}))}}),S("serviceWorkerName")]}),(0,t.jsxs)(x3,{children:[(0,t.jsx)(x9,{children:"주민등록번호"}),(0,t.jsx)(o.default.Input.ResidentRegistrationNumber,{disabled:h,placeholder:"주민등록번호를 입력해주세요.",$autoFilled:k(u,n?.residentRegistrationNumber??""),style:T("residentRegistrationNumber",gt),value:u,onChange:e=>{c("residentRegistrationNumber"),d(t=>({...t,residentRegistrationNumber:e}))}}),S("residentRegistrationNumber")]}),(0,t.jsxs)(x3,{style:{flex:"none",width:266},children:[(0,t.jsx)(x9,{children:"성별"}),(0,t.jsx)(ge,{$autoFilled:k(xZ(z),xZ(xQ(n?.residentRegistrationNumber??""))),style:gt,value:xZ(z),placeholder:"주민등록번호와 연동되어 보여집니다.",readOnly:!0})]})]}),(0,t.jsxs)(x4,{children:[(0,t.jsxs)(x3,{children:[(0,t.jsxs)(x9,{children:["휴대폰",(0,t.jsx)(x1,{})]}),(0,t.jsx)(o.default.Input.Phone,{disabled:h,placeholder:"휴대폰번호를 입력해주세요.",$autoFilled:k(b,n?.phoneNumber??""),style:T("phoneNumber",gt),value:b,onChange:e=>{c("phoneNumber"),d(t=>({...t,phoneNumber:e}))}}),S("phoneNumber")]}),(0,t.jsxs)(x3,{children:[(0,t.jsx)(x9,{children:"연락처"}),(0,t.jsx)(o.default.Input.Contact,{disabled:h,placeholder:"연락처번호를 입력해주세요.",$autoFilled:k(j,n?.contact??""),style:T("contact",gt),value:j,onChange:e=>{c("contact"),d(t=>({...t,contact:e}))}}),S("contact")]})]}),(0,t.jsxs)(x5,{children:[(0,t.jsxs)(x4,{children:[(0,t.jsxs)(x3,{children:[(0,t.jsx)(x9,{children:"주소"}),(0,t.jsx)(o.default.Input.Text,{disabled:h,placeholder:"주소를 입력해주세요.",$autoFilled:k(w,n?.address??""),style:T("address",gt),value:w,onChange:e=>{c("address"),d(t=>({...t,address:e.target.value}))}}),S("address")]}),(0,t.jsxs)(x3,{style:{flex:"none",width:191},children:[(0,t.jsx)(x9,{children:"우편번호"}),(0,t.jsx)(o.default.Input.PostCode,{disabled:h,placeholder:"우편번호를 입력해주세요.",$autoFilled:k(y,n?.postCode??""),style:T("postCode",gt),value:y,onChange:e=>{c("postCode"),d(t=>({...t,postCode:e}))}}),S("postCode")]})]}),(0,t.jsx)(x4,{children:(0,t.jsxs)(x3,{children:[(0,t.jsx)(x9,{children:"상세주소"}),(0,t.jsx)(o.default.Input.Text,{disabled:h,placeholder:"상세주소를 입력해주세요.",$autoFilled:k(_,n?.addressDetail??""),style:T("addressDetail",gt),value:_,onChange:e=>{c("addressDetail"),d(t=>({...t,addressDetail:e.target.value}))}}),S("addressDetail")]})}),(0,t.jsx)(x4,{children:(0,t.jsxs)(x3,{children:[(0,t.jsx)(x9,{children:"특이사항(메모)"}),(0,t.jsx)(o.default.Input.Text,{disabled:h,placeholder:"메모가 필요한 사항을 입력해주세요.",$autoFilled:k(v,n?.note??""),style:T("note",gt),value:v,onChange:e=>{c("note"),d(t=>({...t,note:e.target.value}))}}),S("note")]})}),(0,t.jsxs)(x4,{children:[(0,t.jsxs)(x3,{$width:186,children:[(0,t.jsxs)(x9,{children:["접수일",(0,t.jsx)(x1,{})]}),(0,t.jsx)(o.default.Input.Date,{disabled:h,$autoFilled:A,style:T("firstRegisteredDate",{...gt,height:36}),value:x,onChange:e=>{(c("firstRegisteredDate"),""===e.trim())?d(e=>({...e,firstRegisteredDate:void 0})):eF.default.is(e)&&d(t=>({...t,firstRegisteredDate:e}))}}),S("firstRegisteredDate")]}),(0,t.jsxs)(x3,{$width:197,children:[(0,t.jsx)(x9,{children:"계약 시작일"}),(0,t.jsx)(o.default.Input.Date,{value:g,style:{...gt,height:36},onChange:e=>{(c("contractStartDate"),""===e.trim())?d(e=>({...e,contractStartDate:void 0})):eF.default.is(e)&&d(t=>({...t,contractStartDate:e}))}}),S("contractStartDate")]}),(0,t.jsxs)(x3,{$width:197,children:[(0,t.jsx)(x9,{children:"계약 종료일"}),(0,t.jsx)(o.default.Input.Date,{value:m,style:{...gt,height:36},onChange:e=>{(c("contractEndDate"),""===e.trim())?d(e=>({...e,contractEndDate:void 0})):eF.default.is(e)&&d(t=>({...t,contractEndDate:e}))}}),S("contractEndDate")]})]}),(0,t.jsxs)(x4,{children:[(0,t.jsxs)(x3,{children:[(0,t.jsxs)(x9,{children:["사업구분",(0,t.jsx)(x1,{})]}),(0,t.jsx)(o.default.Input.Select,{style:gt,value:I??"",disabled:!0,children:xX.map(e=>(0,t.jsx)("option",{value:e,children:"DAY_CARE"===e?`${xK.default[e].label}서비스`:xK.default[e].label},e))})]}),(0,t.jsxs)(x3,{children:[(0,t.jsxs)(x9,{children:["서비스명",(0,t.jsx)(x1,{})]}),(0,t.jsxs)(o.default.Input.Select,{style:gt,value:C??"",disabled:!0,children:[(0,t.jsx)("option",{value:"",children:"서비스 타입을 선택하세요"}),xq.map(e=>(0,t.jsx)("option",{value:e,children:"MEAL"===e||"NUTRITION"===e?`${r.default[e].label}관리 서비스`:r.default[e].label},e))]})]}),(0,t.jsxs)(x3,{children:[(0,t.jsxs)(x9,{children:["서비스코드",(0,t.jsx)(x1,{})]}),(0,t.jsx)(o.default.Input.Select,{style:gt,value:C??"",disabled:!0,children:void 0===C?null:(0,t.jsx)("option",{value:C,children:r.default[C].code})})]}),(0,t.jsxs)(x3,{children:[(0,t.jsxs)(x9,{children:["서비스유형",(0,t.jsx)(x1,{})]}),(0,t.jsx)(o.default.Input.Select,{style:gt,value:C??"",disabled:!0,children:void 0===C?null:(0,t.jsx)("option",{value:C,children:"DISABILITY_ACTIVITY_SUPPORT"===C?"활동보조":`${r.default[C].label}관리 서비스`})})]})]})]})]})});function x1(){return(0,t.jsx)(x8,{children:" *"})}let x2=l.default.div.withConfig({componentId:"zh__sc-b1e5df68-0"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  align-self: stretch;
`,x6=l.default.div.withConfig({componentId:"zh__sc-b1e5df68-1"})`
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
  text-align: center;
`,x4=l.default.div.withConfig({componentId:"zh__sc-b1e5df68-2"})`
  display: flex;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;

  min-height: 59px;
`,x5=l.default.div.withConfig({componentId:"zh__sc-b1e5df68-3"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-self: stretch;
`,x3=l.default.div.withConfig({componentId:"zh__sc-b1e5df68-4"})`
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
`,x9=l.default.div.withConfig({componentId:"zh__sc-b1e5df68-5"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #000;
  text-align: center;
`,x8=l.default.span.withConfig({componentId:"zh__sc-b1e5df68-6"})`
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: normal;
  color: #e7000b;
`,x7=l.default.div.withConfig({componentId:"zh__sc-b1e5df68-7"})`
  font-size: 12px;
  line-height: 16px;
  color: #ff4d4f;
`,ge=(0,l.default)(o.default.Input.Text).withConfig({componentId:"zh__sc-b1e5df68-8"})`
  &::placeholder {
    color: #0a0a0a;
  }
`,gt={display:"flex",padding:"4px 16px",alignItems:"center",gap:"10px",flex:"1 0 0",alignSelf:"stretch",fontSize:16,maxHeight:36};var gn=e.i(35997);let gi="EARNED_INCOME",gl="BUSINESS_INCOME",ga="OTHER_INCOME",gd="FLAT_RATE",go="ORGANIZATION_STANDARD",gr="ALWAYS_PAID",gs="ALWAYS_NOT_PAID",gc="MONTHLY_60_HOURS_OR_MORE",gf="MONTHLY_64_HOURS_OR_MORE",gh="MONTHLY_65_HOURS_OR_MORE",gp="ALWAYS_ACCRUED",gu="NOT_ACCRUED",{SERVICE_WORKER_EMPLOYMENT_CONTRACT_CATEGORY:gx}=J.default.enums,gg=Object.keys(gx).filter(e=>e in gx).map(e=>({key:e,label:gx[e].label}));function gm(e){return e in gn.default}let gb=Object.keys(gn.default).filter(gm),gj=gb[0],gw=[{key:gc,label:"월 60시간 이상 적립"},{key:gf,label:"월 64시간 이상"},{key:gh,label:"월 65시간 이상"},{key:gp,label:"항상 적립"},{key:gu,label:"미적립"}],gy=[{key:gi,label:"근로소득"},{key:gl,label:"사업소득"},{key:ga,label:"기타소득"},{key:gd,label:"정액제"}],g_=[{key:go,label:"기관 기준"},{key:gr,label:"항상 지급"},{key:gs,label:"항상 미지급"}],gv=[{key:"nationalPensionEnrolled",label:"국민연금"},{key:"healthInsuranceEnrolled",label:"건강보험"},{key:"employmentInsuranceEnrolled",label:"고용보험"},{key:"industrialAccidentInsuranceEnrolled",label:"산재보험"}],gC=["신규","보수"],gI=function(){let{matchingClientName:e}=a.default.modal.serviceWorkerCreate,[n,l]=(0,i.useState)({nationalPensionEnrolled:"",healthInsuranceEnrolled:"",employmentInsuranceEnrolled:"",industrialAccidentInsuranceEnrolled:""}),[d,r]=(0,i.useState)({nationalPensionEnrolled:"",healthInsuranceEnrolled:"",employmentInsuranceEnrolled:"",industrialAccidentInsuranceEnrolled:""}),{serviceWorkerDraft:s,analyzedServiceWorkerDraft:c,mode:f,updateServiceWorkerDraft:h,getServiceWorkerDraftFieldError:p,clearServiceWorkerDraftFieldError:u}=a.default.modal.serviceWorkerCreate;if(null===s)return null;let x="renew"===f,g="DISABILITY_ACTIVITY_SUPPORT"===s.serviceType,m=""!==(s.contractStartDate??"").trim(),b=void 0===s.isTrainee?void 0:s.isTrainee?"신규":"보수",j=s.bankName??gj,w=s.accountNumber??"",y=s.accountHolder??"",_=s.employmentContractCategory??"GENERAL",v=s.isTrainee,C=s.criminalRecordChecked??!1,I=s.deviceType,z=s.terminalNumber??"",T=s.retirementReserveContractType,S=s.incomeTaxCategory,k=s.incomeTaxFlatAmount??"",E=s.incomeTaxRate??"",D=s.leaveAllowancePaymentMethod,A=s.isNonTaxableExclusionTarget,O=s.qualificationInfo??"",$=s.relatedDocumentInfo??"",R=e=>{let n=p(e);return""===n?null:(0,t.jsx)(gY,{"data-service-worker-create-field-error":"true",children:n})},L=(e,t)=>{let n=String(t??"").trim();return""!==n&&e.trim()===n},N=e=>""===p(e)?gZ:{...gZ,borderColor:"#ff4d4f",background:"#fff5f5"};return(0,t.jsxs)(gT,{children:[(0,t.jsx)(gS,{children:"계좌∙자격 및 기타 정보"}),(0,t.jsxs)(gk,{children:[(0,t.jsxs)(gE,{$width:191,children:[(0,t.jsx)(gD,{children:"은행명"}),(0,t.jsx)(o.default.Input.Select,{disabled:x,style:N("bankName"),value:j,onChange:e=>{u("bankName"),h(t=>({...t,bankName:gm(e.target.value)?e.target.value:void 0}))},children:gb.map(e=>(0,t.jsx)("option",{value:e,children:gn.default[e].label},e))}),R("bankName")]}),(0,t.jsxs)(gE,{children:[(0,t.jsx)(gD,{children:"계좌번호"}),(0,t.jsx)(o.default.Input.Text,{disabled:x,placeholder:"계좌번호를 입력해주세요.",$autoFilled:L(w,c?.accountNumber),style:N("accountNumber"),value:w,onChange:e=>{u("accountNumber"),h(t=>({...t,accountNumber:e.target.value}))}}),R("accountNumber")]}),(0,t.jsxs)(gE,{children:[(0,t.jsx)(gD,{children:"예금주"}),(0,t.jsx)(o.default.Input.Text,{disabled:x,placeholder:"예금주를 입력해주세요.",$autoFilled:L(y,c?.accountHolder),style:N("accountHolder"),value:y,onChange:e=>{u("accountHolder"),h(t=>({...t,accountHolder:e.target.value}))}}),R("accountHolder")]})]}),(0,t.jsxs)(gk,{children:[(0,t.jsxs)(gE,{$width:228,children:[(0,t.jsx)(gD,{children:"제공인력 자격정보"}),(0,t.jsx)(o.default.Input.Text,{placeholder:"자격정보를 입력해주세요.",style:gZ,value:O,onChange:e=>h(t=>({...t,qualificationInfo:e.target.value}))})]}),(0,t.jsx)(gE,{$width:158,children:g&&m?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(gD,{children:"교육 종류"}),(0,t.jsxs)(gO,{$isEmptySelected:void 0===b,style:gZ,value:b??e3.default.SELECT_EMPTY_VALUE,onChange:e=>{let t=e.target.value;t===e3.default.SELECT_EMPTY_VALUE?h(e=>({...e,isTrainee:void 0})):("신규"===t||"보수"===t)&&h(e=>({...e,isTrainee:"신규"===t}))},children:[(0,t.jsx)("option",{value:e3.default.SELECT_EMPTY_VALUE,disabled:!0,children:"미정"}),gC.map(e=>(0,t.jsx)("option",{value:e,children:e},e))]})]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(gD,{children:["실습 여부 ",(0,t.jsx)(gz,{})]}),(0,t.jsxs)(g$,{children:[(0,t.jsxs)(gB,{children:[(0,t.jsx)(gU,{name:"service-worker-training",checked:!0===v,onChange:()=>{u("isTrainee"),h(e=>({...e,isTrainee:!0}))}}),"이수"]}),(0,t.jsxs)(gB,{children:[(0,t.jsx)(gU,{name:"service-worker-training",checked:!1===v,onChange:()=>{u("isTrainee"),h(e=>({...e,isTrainee:!1}))}}),"미이수"]})]}),R("isTrainee")]})}),(0,t.jsxs)(gE,{children:[(0,t.jsx)(gD,{children:"범죄경력 조회여부"}),(0,t.jsx)(g$,{children:(0,t.jsxs)(gB,{children:[(0,t.jsx)(gW,{checked:C,onChange:e=>h(t=>({...t,criminalRecordChecked:e.target.checked}))}),"조회 완료"]})})]}),(0,t.jsxs)(gE,{$width:228,children:[(0,t.jsx)(gD,{children:"관련서류 제출여부"}),(0,t.jsx)(o.default.Input.Text,{placeholder:"제출여부를 입력해주세요.",style:gZ,value:$,onChange:e=>h(t=>({...t,relatedDocumentInfo:e.target.value}))})]})]}),(0,t.jsxs)(gk,{children:[(0,t.jsxs)(gE,{$width:186,children:[(0,t.jsxs)(gD,{children:["단말기 정보 ",(0,t.jsx)(gz,{})]}),(0,t.jsxs)(g$,{children:[(0,t.jsxs)(gB,{children:[(0,t.jsx)(gU,{name:"service-worker-device-type",checked:"SMARTPHONE"===I,onChange:()=>{u("deviceType"),h(e=>({...e,deviceType:"SMARTPHONE"}))}}),"스마트폰"]}),(0,t.jsxs)(gB,{children:[(0,t.jsx)(gU,{name:"service-worker-device-type",checked:"TERMINAL"===I,onChange:()=>{u("deviceType"),h(e=>({...e,deviceType:"TERMINAL"}))}}),"단말기"]})]}),R("deviceType")]}),(0,t.jsxs)(gE,{$width:228,children:[(0,t.jsx)(gD,{children:"단말기 번호"}),(0,t.jsx)(o.default.Input.Text,{placeholder:"번호를 입력해주세요.",style:gZ,value:z,onChange:e=>h(t=>({...t,terminalNumber:e.target.value}))})]})]}),(0,t.jsxs)(gk,{children:[!g&&(0,t.jsxs)(gE,{$width:207,children:[(0,t.jsxs)(gD,{children:["인력 유형 ",(0,t.jsx)(gz,{})]}),(0,t.jsx)(g$,{children:gg.map(e=>(0,t.jsxs)(gB,{children:[(0,t.jsx)(gU,{disabled:x,name:"service-worker-employment-contract-category",checked:_===e.key,onChange:()=>{u("employmentContractCategory"),h(t=>({...t,employmentContractCategory:e.key}))}}),e.label]},e.key))}),R("employmentContractCategory")]}),(0,t.jsxs)(gR,{children:[(0,t.jsx)(gD,{children:"연결할 이용자"}),(0,t.jsx)(gL,{$isEmptySelected:null===e,value:e??e3.default.SELECT_EMPTY_VALUE,disabled:!0,children:(0,t.jsx)("option",{value:e??e3.default.SELECT_EMPTY_VALUE,disabled:!0,children:e??"선택안함"})})]})]}),(0,t.jsx)(gS,{children:"급여 관련 사항"}),(0,t.jsx)(gk,{children:(0,t.jsxs)(gE,{children:[(0,t.jsxs)(gD,{children:["퇴직적립금 관련 계약 ",(0,t.jsx)(gz,{})]}),(0,t.jsx)(g$,{children:gw.map(e=>(0,t.jsxs)(gB,{children:[(0,t.jsx)(gU,{name:"service-worker-retirement-reserve",checked:T===e.key,onChange:()=>{u("retirementReserveContractType"),h(t=>({...t,retirementReserveContractType:e.key}))}}),e.label]},e.key))}),R("retirementReserveContractType")]})}),(0,t.jsxs)(gk,{children:[(0,t.jsxs)(gN,{children:[(0,t.jsxs)(gD,{children:["소득세 구분 ",(0,t.jsx)(gz,{})]}),(0,t.jsxs)(gP,{children:[gy.map(e=>(0,t.jsxs)(gB,{children:[(0,t.jsx)(gU,{name:"service-worker-income-tax-type",checked:S===e.key,onChange:()=>{u("incomeTaxCategory"),h(t=>({...t,incomeTaxCategory:e.key}))}}),e.label]},e.key)),(0,t.jsx)(o.default.Input.Text,{disabled:S!==gd,placeholder:"금액을 입력하세요.",style:gJ,value:k,onChange:e=>h(t=>({...t,incomeTaxFlatAmount:e.target.value}))}),(0,t.jsx)(gM,{children:"원"})]}),R("incomeTaxCategory")]}),(0,t.jsxs)(gE,{$width:184,children:[(0,t.jsx)(gD,{children:"소득세 적용비율"}),(0,t.jsxs)(gF,{children:[(0,t.jsx)(o.default.Input.Text,{placeholder:"100",style:g0,value:E,onChange:e=>h(t=>({...t,incomeTaxRate:e.target.value}))}),(0,t.jsx)(gM,{children:"%"})]})]})]}),(0,t.jsxs)(gk,{children:[(0,t.jsxs)(gE,{$width:338,children:[(0,t.jsxs)(gD,{children:["연월차수당 지급방식 ",(0,t.jsx)(gz,{})]}),(0,t.jsx)(g$,{children:g_.map(e=>(0,t.jsxs)(gB,{children:[(0,t.jsx)(gU,{name:"service-worker-annual-leave-allowance",checked:D===e.key,onChange:()=>{u("leaveAllowancePaymentMethod"),h(t=>({...t,leaveAllowancePaymentMethod:e.key}))}}),e.label]},e.key))}),R("leaveAllowancePaymentMethod")]}),(0,t.jsxs)(gE,{children:[(0,t.jsxs)(gD,{children:["비과세급여 적용 ",(0,t.jsx)(gz,{})]}),(0,t.jsx)(g$,{children:(0,t.jsxs)(gB,{children:[(0,t.jsx)(gW,{checked:A??!1,onChange:e=>{u("isNonTaxableExclusionTarget"),h(t=>({...t,isNonTaxableExclusionTarget:e.target.checked}))}}),"비과세 처리 적용대상 제외"]})}),R("isNonTaxableExclusionTarget")]})]}),(0,t.jsx)(gS,{children:"사회보험"}),(0,t.jsxs)(gV,{children:[(0,t.jsxs)(gH,{children:[(0,t.jsx)(gG,{children:"구분"}),(0,t.jsx)(gG,{children:"가입 여부"}),(0,t.jsx)(gG,{children:"보수월액(원)"}),(0,t.jsx)(gG,{children:"비고"})]}),gv.map(({key:e,label:i})=>(0,t.jsxs)(gK,{children:[(0,t.jsx)(gX,{children:i}),(0,t.jsx)(gX,{children:(0,t.jsxs)(gq,{children:[(0,t.jsx)(gW,{checked:s[e]??!0,onChange:t=>h(n=>({...n,[e]:t.target.checked}))}),"가입"]})}),(0,t.jsx)(gX,{children:(0,t.jsx)(gQ,{value:n[e],onChange:t=>l(n=>({...n,[e]:t.target.value}))})}),(0,t.jsx)(gX,{children:(0,t.jsx)(gQ,{value:d[e],onChange:t=>r(n=>({...n,[e]:t.target.value}))})})]},e))]})]})};function gz(){return(0,t.jsx)(gA,{children:" *"})}let gT=l.default.div.withConfig({componentId:"zh__sc-5d9d83cf-0"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  align-self: stretch;
`,gS=l.default.div.withConfig({componentId:"zh__sc-5d9d83cf-1"})`
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
  color: #0a0a0a;
`,gk=l.default.div.withConfig({componentId:"zh__sc-5d9d83cf-2"})`
  display: flex;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;

  min-height: 59px;
`,gE=l.default.div.withConfig({componentId:"zh__sc-5d9d83cf-3"})`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
  align-self: stretch;

  min-width: 0;

  ${({$width:e})=>void 0!==e?`
        flex: none;
        width: ${e}px;
      `:`
        flex: 1;
      `}
`,gD=l.default.div.withConfig({componentId:"zh__sc-5d9d83cf-4"})`
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  color: #000;
`,gA=l.default.span.withConfig({componentId:"zh__sc-5d9d83cf-5"})`
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  color: #e7000b;
`,gO=(0,l.default)(o.default.Input.Select).withConfig({componentId:"zh__sc-5d9d83cf-6"})`
  color: ${({$isEmptySelected:e})=>e?"#9ca3af":"#0a0a0a"};

  &&:disabled {
    color: ${({$isEmptySelected:e})=>e?"#9ca3af":"#0a0a0a"};
  }
`,g$=l.default.div.withConfig({componentId:"zh__sc-5d9d83cf-7"})`
  display: flex;
  gap: 12px;
  align-items: center;
  height: 36px;
`,gR=(0,l.default)(gE).withConfig({componentId:"zh__sc-5d9d83cf-8"})`
  flex: none;
  width: 200px;
`,gL=(0,l.default)(o.default.Input.Select).withConfig({componentId:"zh__sc-5d9d83cf-9"})`
  width: 200px;
  min-height: 36px;
  color: ${({$isEmptySelected:e})=>e?"#9ca3af":"#0a0a0a"};

  &&:disabled {
    color: ${({$isEmptySelected:e})=>e?"#9ca3af":"#0a0a0a"};
  }
`,gN=(0,l.default)(gE).withConfig({componentId:"zh__sc-5d9d83cf-10"})`
  min-width: 0;
`,gP=(0,l.default)(g$).withConfig({componentId:"zh__sc-5d9d83cf-11"})`
  width: 100%;
`,gF=l.default.div.withConfig({componentId:"zh__sc-5d9d83cf-12"})`
  display: flex;
  gap: 4px;
  align-items: center;
  height: 36px;
`,gM=l.default.span.withConfig({componentId:"zh__sc-5d9d83cf-13"})`
  flex-shrink: 0;

  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  color: #000;
`,gB=l.default.label.withConfig({componentId:"zh__sc-5d9d83cf-14"})`
  display: inline-flex;
  gap: 4px;
  align-items: center;
  white-space: nowrap;
`,gU=(0,l.default)(o.default.Input.Radio).withConfig({componentId:"zh__sc-5d9d83cf-15"})`
  width: 20px;
  height: 20px;
`,gW=(0,l.default)(o.default.Input.Check).attrs({$iconSizeRatio:1.5}).withConfig({componentId:"zh__sc-5d9d83cf-16"})`
  width: 24px;
  height: 24px;
`,gY=l.default.div.withConfig({componentId:"zh__sc-5d9d83cf-17"})`
  font-size: 12px;
  line-height: 16px;
  color: #ff4d4f;
`,gV=l.default.div.withConfig({componentId:"zh__sc-5d9d83cf-18"})`
  overflow: hidden;
  align-self: stretch;
`,gH=l.default.div.withConfig({componentId:"zh__sc-5d9d83cf-19"})`
  display: grid;
  grid-template-columns: 1fr 1.15fr 1.35fr 1.35fr;
  border-bottom: 1px solid #e5e7eb;
  background: #f3f4f6;
`,gG=l.default.div.withConfig({componentId:"zh__sc-5d9d83cf-20"})`
  display: flex;
  align-items: center;
  justify-content: center;

  min-height: 32px;

  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  color: #0a0a0a;
`,gK=l.default.div.withConfig({componentId:"zh__sc-5d9d83cf-21"})`
  display: grid;
  grid-template-columns: 1fr 1.15fr 1.35fr 1.35fr;
  min-height: 64px;

  &:not(:last-child) {
    border-bottom: 1px solid #e5e7eb;
  }
`,gX=l.default.div.withConfig({componentId:"zh__sc-5d9d83cf-22"})`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 8px 12px;

  font-size: 16px;
  line-height: 20px;
  color: #0a0a0a;
`,gq=l.default.label.withConfig({componentId:"zh__sc-5d9d83cf-23"})`
  display: inline-flex;
  gap: 8px;
  align-items: center;
`,gQ=(0,l.default)(o.default.Input.Text).withConfig({componentId:"zh__sc-5d9d83cf-24"})`
  width: 100%;
  height: 36px;
  padding: 4px 16px;
`,gZ={display:"flex",alignItems:"center",alignSelf:"stretch",width:"100%",height:36,padding:"4px 16px",fontSize:16},gJ={...gZ,flex:"none",width:160},g0={...gZ,flex:"none",width:"100%"},g1=Object.keys(e7.default).filter(function(e){return e in e7.default}),g2=["PHYSICAL_ACTIVITY_SUPPORT","HOUSEKEEPING_SUPPORT","SOCIAL_ACTIVITY_SUPPORT","OTHER"],g6={PHYSICAL_ACTIVITY_SUPPORT:"physicalActivityDescription",HOUSEKEEPING_SUPPORT:"housekeepingActivityDescription",SOCIAL_ACTIVITY_SUPPORT:"socialActivityDescription",OTHER:"otherActivityDescription"},g4=["소지","미소지"],g5=["ALL","MALE","FEMALE"],g3=["TWENTIES_OR_YONGER","THIRTIES","FORTIES","FIFTIES","SIXTIES","SEVENTIES_OR_OLDER"],g9=(0,n.observer)(function(){let{serviceWorkerDraft:e,updateServiceWorkerDraft:n,getServiceWorkerDraftFieldError:i,clearServiceWorkerDraftFieldError:l}=a.default.modal.serviceWorkerCreate;if(null===e)return null;let d=e.availableTimes??[],o=e.regions??[],r=e.careTypes??[],s=g1.every(e=>o.includes(e)),c=e.desiredClientGender,f=e.desiredAgeRanges??[],h=g2.every(e=>r.includes(e)),p=e.hasVehicle,u=e.preferredWeeklyWorkingHours,x="DISABILITY_ACTIVITY_SUPPORT"===e.serviceType,g=""!==(e.contractStartDate??"").trim(),m=(e,t)=>t.includes(e)?t.filter(t=>t!==e):[...t,e],b=i("availableTimes"),j=i("preferredWeeklyWorkingHours"),w=i("regions"),y=i("careTypes"),_=i("desiredClientGender"),v=i("desiredAgeRanges"),C=i("hasVehicle");return(0,t.jsxs)(g8,{children:[(0,t.jsxs)(g7,{children:[(0,t.jsxs)(me,{children:["근무 가능 시간",x&&(0,t.jsx)(mt,{})]}),(0,t.jsxs)(mi,{children:[(0,t.jsx)(e5.default,{sx:{fontSize:20}}),(0,t.jsx)(ml,{children:"시간대를 추가하고, 추가한 시간대를 클릭하면 수정하거나 삭제할 수 있습니다."})]})]}),(0,t.jsx)(ma,{value:d,onChange:e=>{let t=e.target.value;l("availableTimes"),n(e=>({...e,availableTimes:t}))}}),""!==b&&(0,t.jsx)(mb,{"data-service-worker-create-field-error":"true",children:b}),(0,t.jsxs)(md,{children:[(0,t.jsx)(mo,{children:"희망 근로 시간"}),(0,t.jsxs)(mr,{children:[(0,t.jsx)(mc,{children:"총"}),(0,t.jsx)(ms,{value:void 0===u?"":String(u),placeholder:"00",maxLength:2,style:""===j?void 0:{borderColor:"#ff4d4f",background:"#fff5f5"},onChange:e=>{let t=e.target.value.replace(/\D/g,"");if(""===t){l("preferredWeeklyWorkingHours"),n(e=>({...e,preferredWeeklyWorkingHours:void 0}));return}let i=Math.min(Number(t),99);l("preferredWeeklyWorkingHours"),n(e=>({...e,preferredWeeklyWorkingHours:i}))}}),(0,t.jsx)(mc,{children:"시간"})]})]}),""!==j&&(0,t.jsx)(mb,{"data-service-worker-create-field-error":"true",children:j}),(0,t.jsxs)(mf,{children:[(0,t.jsxs)(mh,{children:["서비스 가능 지역 (복수 선택 가능)",x&&(0,t.jsx)(mt,{})]}),(0,t.jsxs)(mp,{children:[(0,t.jsxs)(mu,{children:[(0,t.jsx)(mj,{checked:s,onChange:()=>{l("regions"),n(e=>({...e,regions:s?[]:g1}))}}),(0,t.jsx)(mg,{children:"전체 선택"})]}),g1.map(e=>(0,t.jsxs)(mu,{children:[(0,t.jsx)(mj,{checked:o.includes(e),onChange:()=>{let t=m(e,o);l("regions"),n(e=>({...e,regions:t}))}}),(0,t.jsx)(mg,{children:e7.default[e].label})]},e))]}),""!==w&&(0,t.jsx)(mb,{"data-service-worker-create-field-error":"true",children:w})]}),x&&(0,t.jsxs)(mf,{children:[(0,t.jsxs)(mh,{children:["가능 활동 내용 (복수 선택 가능) ",(0,t.jsx)(mt,{})]}),(0,t.jsxs)(mp,{children:[(0,t.jsxs)(mu,{children:[(0,t.jsx)(mj,{checked:h,onChange:()=>{l("careTypes"),n(e=>({...e,careTypes:h?[]:[...g2]}))}}),(0,t.jsx)(mg,{children:"전체 선택"})]}),g2.map(i=>(0,t.jsxs)(mu,{children:[(0,t.jsx)(mj,{checked:r.includes(i),onChange:()=>{let e=m(i,r);l("careTypes"),n(t=>({...t,careTypes:e}))}}),(0,t.jsx)(mg,{children:"PHYSICAL_ACTIVITY_SUPPORT"===i?"신체 활동":te.default[i].label}),(0,t.jsx)(mx,{value:e[g6[i]]??"",placeholder:"관련 내용을 입력해주세요.",onChange:e=>n(t=>({...t,[g6[i]]:e.target.value}))})]},i))]}),""!==y&&(0,t.jsx)(mb,{"data-service-worker-create-field-error":"true",children:y})]}),!x&&(0,t.jsxs)(mf,{children:[(0,t.jsxs)(mh,{children:["차량 소지 ",(0,t.jsx)(mt,{})]}),(0,t.jsx)(mp,{children:g4.map(e=>(0,t.jsxs)(mu,{children:[(0,t.jsx)(mw,{name:"service-worker-car-ownership",checked:p===("소지"===e),onChange:()=>{l("hasVehicle"),n(t=>({...t,hasVehicle:"소지"===e}))}}),(0,t.jsx)(mg,{children:e})]},e))}),""!==C&&(0,t.jsx)(mb,{"data-service-worker-create-field-error":"true",children:C})]}),x&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(mf,{children:[(0,t.jsxs)(mh,{children:["이용자 희망 성별 ",(0,t.jsx)(mt,{})]}),(0,t.jsx)(mp,{children:g5.map(e=>(0,t.jsxs)(mu,{children:[(0,t.jsx)(mw,{name:"service-worker-client-gender",checked:c===e,onChange:()=>{l("desiredClientGender"),n(t=>({...t,desiredClientGender:e}))}}),(0,t.jsx)(mg,{children:"ALL"===e?"전체":e8.default[e].label})]},e))}),""!==_&&(0,t.jsx)(mb,{"data-service-worker-create-field-error":"true",children:_})]}),(0,t.jsxs)(mf,{children:[(0,t.jsxs)(mh,{children:["이용자 희망 연령 (복수 선택 가능) ",(0,t.jsx)(mt,{})]}),(0,t.jsxs)(mp,{children:[(0,t.jsxs)(mu,{children:[(0,t.jsx)(mj,{checked:f.length===g3.length,onChange:()=>{l("desiredAgeRanges"),n(e=>({...e,desiredAgeRanges:f.length===g3.length?[]:[...g3]}))}}),(0,t.jsx)(mg,{children:"전체 선택"})]}),g3.map(e=>(0,t.jsxs)(mu,{children:[(0,t.jsx)(mj,{checked:f.includes(e),onChange:()=>{l("desiredAgeRanges"),n(t=>({...t,desiredAgeRanges:m(e,f)}))}}),(0,t.jsx)(mg,{children:"TWENTIES_OR_YONGER"===e||"SEVENTIES_OR_OLDER"===e?e9.default[e].label.replace(" 이하","").replace(" 이상",""):e9.default[e].label})]},e))]}),""!==v&&(0,t.jsx)(mb,{"data-service-worker-create-field-error":"true",children:v})]})]}),g&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(mm,{}),(0,t.jsx)(gI,{})]})]})}),g8=l.default.div.withConfig({componentId:"zh__sc-1335978d-0"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  align-self: stretch;
`,g7=l.default.div.withConfig({componentId:"zh__sc-1335978d-1"})`
  display: flex;
  gap: 16px;
  align-items: center;
  align-self: stretch;

  height: 30px;
`,me=l.default.div.withConfig({componentId:"zh__sc-1335978d-2"})`
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
  text-align: center;
`;function mt(){return(0,t.jsx)(mn,{children:" *"})}let mn=l.default.span.withConfig({componentId:"zh__sc-1335978d-3"})`
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: normal;
  color: #e7000b;
`,mi=l.default.div.withConfig({componentId:"zh__sc-1335978d-4"})`
  display: flex;
  flex: 1 0 0;
  gap: 4px;
  align-items: center;

  color: #464c53;
`,ml=l.default.div.withConfig({componentId:"zh__sc-1335978d-5"})`
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px; /* 125% */
`,ma=(0,l.default)(o.default.Input.TimeSlider).withConfig({componentId:"zh__sc-1335978d-6"})`
  align-self: stretch;
`,md=l.default.div.withConfig({componentId:"zh__sc-1335978d-7"})`
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
  align-self: stretch;
`,mo=l.default.div.withConfig({componentId:"zh__sc-1335978d-8"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #000;
  text-align: center;
`,mr=l.default.div.withConfig({componentId:"zh__sc-1335978d-9"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,ms=(0,l.default)(o.default.Input.Text).withConfig({componentId:"zh__sc-1335978d-10"})`
  width: 59px;
  height: 36px;
  text-align: center;
`,mc=l.default.div.withConfig({componentId:"zh__sc-1335978d-11"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #000;
  text-align: center;
`,mf=l.default.div.withConfig({componentId:"zh__sc-1335978d-12"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
  align-self: stretch;
`,mh=l.default.div.withConfig({componentId:"zh__sc-1335978d-13"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #000;
  text-align: center;
`,mp=l.default.div.withConfig({componentId:"zh__sc-1335978d-14"})`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 24px;
  align-items: center;
`,mu=l.default.label.withConfig({componentId:"zh__sc-1335978d-15"})`
  display: inline-flex;
  gap: 8px;
  align-items: center;
  height: 36px;
`,mx=(0,l.default)(o.default.Input.Text).withConfig({componentId:"zh__sc-1335978d-16"})`
  width: 193px;
  height: 36px;
  padding: 4px 16px;
`,mg=l.default.span.withConfig({componentId:"zh__sc-1335978d-17"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #000;
  text-align: center;
`,mm=l.default.div.withConfig({componentId:"zh__sc-1335978d-18"})`
  flex-shrink: 0;
  align-self: stretch;

  height: 1px;
  min-height: 1px;

  background: #e5e7eb;
`,mb=l.default.div.withConfig({componentId:"zh__sc-1335978d-19"})`
  font-size: 12px;
  line-height: 16px;
  color: #ff4d4f;
`,mj=(0,l.default)(o.default.Input.Check).attrs({$iconSizeRatio:1.5}).withConfig({componentId:"zh__sc-1335978d-20"})`
  width: 24px;
  height: 24px;
`,mw=(0,l.default)(o.default.Input.Radio).withConfig({componentId:"zh__sc-1335978d-21"})`
  width: 20px;
  height: 20px;
`,my=(0,n.observer)(function(){return(0,t.jsxs)(m_,{children:[(0,t.jsx)(mv,{children:"제공인력 기본 정보"}),(0,t.jsx)(x0,{}),(0,t.jsx)(mC,{}),(0,t.jsx)(g9,{})]})}),m_=l.default.div.withConfig({componentId:"zh__sc-7b7809b5-0"})`
  overflow-y: auto;
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  gap: 32px;
  align-items: flex-start;
  align-self: stretch;

  width: 856px;
  min-height: 0;
  padding: 32px 24px;

  background: #fff;
  box-shadow: -8px 0 8px 0 rgb(0 0 0 / 8%);
`,mv=l.default.div.withConfig({componentId:"zh__sc-7b7809b5-1"})`
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
  text-align: center;
`,mC=l.default.div.withConfig({componentId:"zh__sc-7b7809b5-2"})`
  flex-shrink: 0;

  width: 100%;
  height: 1px;
  min-height: 1px;

  background: #e5e7eb;
`,mI=(0,n.observer)(function(){let{serviceWorkerDraft:e}=a.default.modal.serviceWorkerCreate;return(0,t.jsxs)(mz,{children:[(0,t.jsx)(xH,{}),e&&(0,t.jsx)(my,{})]})}),mz=l.default.div.withConfig({componentId:"zh__sc-e5134819-0"})`
  overflow: hidden;
  display: flex;
  flex: 1 1 auto;
  align-self: stretch;
  justify-content: center;

  min-height: 0;
  max-height: none;

  background: #f9fafb;
`;function mT(){let{close:e,mode:n}=a.default.modal.serviceWorkerCreate;return(0,t.jsxs)(mS,{children:[(0,t.jsx)(mk,{children:"renew"===n?"제공인력 재계약하기":"contract"===n?"제공인력 계약하기":"신규 제공인력 등록하기"}),(0,t.jsxs)(mE,{onClick:e,children:[(0,t.jsx)(M.X,{size:16}),"닫기"]})]})}let mS=l.default.div.withConfig({componentId:"zh__sc-e97a276c-0"})`
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
`,mk=l.default.div.withConfig({componentId:"zh__sc-e97a276c-1"})`
  font-size: 18px;
  font-weight: 700;
  font-style: normal;
  line-height: 28px; /* 155.556% */
  color: #101828;
  letter-spacing: -0.439px;
`,mE=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-e97a276c-2"})`
  display: flex;
  gap: 6px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,mD=(0,n.observer)(function(){let e=a.default.modal.serviceWorkerCreate,{status:n}=e,l=(0,i.useRef)(null);return((0,i.useEffect)(()=>"ready"!==n?void e.setToastContainer(null):(e.setToastContainer(l.current),()=>{e.setToastContainer(null)}),[e,n]),"ready"!==n)?null:(0,t.jsx)(d.default,{children:(0,t.jsxs)(mA,{ref:l,children:[(0,t.jsx)(mT,{}),(0,t.jsx)(mI,{}),(0,t.jsx)(uZ,{}),(0,t.jsx)(s,{currentServiceType:e.selectedServiceType,detectedServiceType:e.pendingDetectedServiceType??e.selectedServiceType,isContinueDisabled:!e.isPendingDetectedServiceAvailable,isOpen:e.isServiceTypeMismatchDialogOpen,onCancel:e.cancelServiceTypeMismatchRegistration,onContinue:e.confirmServiceTypeMismatchRegistration,registrationTarget:"제공인력"}),(0,t.jsx)(u6,{})]})})}),mA=l.default.div.withConfig({componentId:"zh__sc-cb4ab18d-0"})`
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
`;function mO({type:e,onClose:n}){let l=a.default.modal.serviceWorkerDetail.serviceWorker,[o,r]=(0,i.useState)([]),[s,c]=(0,i.useState)(!0);return(0,i.useEffect)(()=>{let t=!0;return(async()=>{var n,i,d,o,s;let f;if(null===l)return c(!1);if("address"===e){let e,o,s,f,[h,p]=await Promise.all([a.default.serviceWorker.info.byServiceWorker.getServiceWorkerChangeHistory(l.id,"address"),a.default.serviceWorker.info.byServiceWorker.getServiceWorkerChangeHistory(l.id,"addressDetail")]);if(!t||(c(!1),null!==h[0]||null!==p[0]||null===h[1]||null===p[1]))return;r((n=h[1],i=p[1],d=l.createdAt,e=new Map,(o=(t,n)=>{t.slice().sort((e,t)=>new Date(e.createdAt).getTime()-new Date(t.createdAt).getTime()).forEach(({oldValue:t,newValue:i,createdAt:l},a)=>{if(0===a&&null!==t&&""!==t.trim()){let i=e.get(d)??{};i[n]=t.trim(),e.set(d,i)}if(null!==i&&""!==i.trim()){let t=e.get(l)??{};t[n]=i.trim(),e.set(l,t)}})})(n,"address"),o(i,"addressDetail"),s="",f="",Array.from(e.entries()).sort(([e],[t])=>new Date(e).getTime()-new Date(t).getTime()).map(([e,t])=>(s=t.address??s,f=t.addressDetail??f,{address:s,addressDetail:f,changedAt:e,value:""})).reverse()));return}let[h,p]=await a.default.serviceWorker.info.byServiceWorker.getServiceWorkerChangeHistory(l.id,"phoneNumber");t&&(c(!1),null===h&&null!==p&&r((o=p,s=l.createdAt,f=[],o.slice().sort((e,t)=>new Date(e.createdAt).getTime()-new Date(t.createdAt).getTime()).forEach(({oldValue:e,newValue:t,createdAt:n})=>{null!==e&&""!==e.trim()&&f.push({address:"",addressDetail:"",changedAt:s,value:e.trim()}),null!==t&&""!==t.trim()&&f.push({address:"",addressDetail:"",changedAt:n,value:t.trim()})}),f.sort((e,t)=>new Date(t.changedAt).getTime()-new Date(e.changedAt).getTime()))))})(),()=>{t=!1}},[l,e]),(0,t.jsx)(d.default,{children:(0,t.jsxs)(m$,{children:[(0,t.jsxs)(mR,{children:[(0,t.jsxs)(mL,{children:["address"===e?"주소/상세주소":"휴대폰"," 변경 이력 보기"]}),(0,t.jsxs)(mN,{type:"button",onClick:n,children:[(0,t.jsx)(M.X,{size:14}),"닫기"]})]}),(0,t.jsx)(mP,{children:s?(0,t.jsx)(mY,{children:"변경 이력을 불러오는 중입니다."}):(0,t.jsxs)(mF,{children:[(0,t.jsxs)(mM,{$isAddress:"address"===e,children:[(0,t.jsx)(mB,{children:"address"===e?"주소":"휴대폰"}),"address"===e?(0,t.jsx)(mB,{children:"상세주소"}):null,(0,t.jsx)(mB,{children:"변경 일자"})]}),0===o.length?(0,t.jsx)(mY,{children:"변경 이력이 없습니다."}):o.map(n=>{let i;return(0,t.jsxs)(mU,{$isAddress:"address"===e,children:[(0,t.jsx)(mW,{children:"address"===e?n.address:n.value}),"address"===e?(0,t.jsx)(mW,{children:n.addressDetail}):null,(0,t.jsx)(mW,{children:Number.isNaN((i=new Date(n.changedAt)).getTime())?"YYYY-MM-DD":`${i.getFullYear()}-${String(i.getMonth()+1).padStart(2,"0")}-${String(i.getDate()).padStart(2,"0")}`})]},`${n.changedAt}-${n.address}-${n.addressDetail}-${n.value}`)})]})})]})})}let m$=l.default.div.withConfig({componentId:"zh__sc-c2667e46-0"})`
  display: flex;
  flex-direction: column;

  width: min(980px, calc(100vw - 32px));
  border-radius: 8px;

  background: #fff;
  box-shadow: 0 4px 16px rgb(0 0 0 / 10%);
`,mR=l.default.div.withConfig({componentId:"zh__sc-c2667e46-1"})`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 69px;
  padding: 16px;
  border-bottom: 1px solid #e5e7eb;
`,mL=l.default.h2.withConfig({componentId:"zh__sc-c2667e46-2"})`
  margin: 0;

  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  color: #101828;
`,mN=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-c2667e46-3"})`
  display: flex;
  gap: 6px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,mP=l.default.div.withConfig({componentId:"zh__sc-c2667e46-4"})`
  overflow: auto;
  max-height: min(560px, calc(100vh - 160px));
`,mF=l.default.div.withConfig({componentId:"zh__sc-c2667e46-5"})`
  display: flex;
  flex-direction: column;
  min-width: 560px;
`,mM=l.default.div.withConfig({componentId:"zh__sc-c2667e46-6"})`
  display: grid;
  grid-template-columns: ${({$isAddress:e})=>e?"1fr 1fr 140px":"1fr 140px"};

  min-height: 48px;
  border-bottom: 1px solid #e5e7eb;

  background: #f9fafb;
`,mB=l.default.div.withConfig({componentId:"zh__sc-c2667e46-7"})`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 8px 16px;

  font-size: 14px;
  font-weight: 700;
  color: #344054;
`,mU=l.default.div.withConfig({componentId:"zh__sc-c2667e46-8"})`
  display: grid;
  grid-template-columns: ${({$isAddress:e})=>e?"1fr 1fr 140px":"1fr 140px"};
  min-height: 48px;
  border-bottom: 1px solid #e5e7eb;
`,mW=l.default.div.withConfig({componentId:"zh__sc-c2667e46-9"})`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 8px 16px;

  font-size: 14px;
  color: #464c53;
  overflow-wrap: anywhere;
`,mY=l.default.div.withConfig({componentId:"zh__sc-c2667e46-10"})`
  display: flex;
  align-items: center;
  justify-content: center;

  min-height: 160px;
  padding: 24px;

  font-size: 14px;
  color: #667085;
`,mV={residentRegistrationNumberText:"",genderText:"",mobileText:"",contactText:"",addressBaseText:"",addressDetailText:"",postCodeText:"",memoText:""},mH={mobileText:"",contactText:"",postCodeText:"",residentRegistrationNumberText:""},mG=(0,n.observer)(function(){let e=a.default.modal.serviceWorkerDetail,n=a.default.modal.serviceWorkerDetail.serviceWorker,l=null===n?mV:{residentRegistrationNumberText:n.residentRegistrationNumber??"",genderText:null===n.gender?"":e8.default[n.gender].label,mobileText:n.phoneNumber??"",contactText:n.contact??"",addressBaseText:n.address??"",addressDetailText:n.addressDetail??"",postCodeText:n.postCode??"",memoText:n.note??""},d=(0,i.useRef)(null),[o,r]=(0,i.useState)(!1),[s,c]=(0,i.useState)(!1),[f,h]=(0,i.useState)(mV),[p,u]=(0,i.useState)(mH),[x,g]=(0,i.useState)(null),m=o?f:l,b=o?((e,t)=>{if(!pU.default.brand.residentRegistrationNumber.is(e)&&!pU.default.brand.residentRegistrationNumber.isPartial(e))return t;let n=pU.default.brand.residentRegistrationNumber.extractGender(e);return null===n?t:e8.default[n].label})(m.residentRegistrationNumberText,m.genderText):m.genderText,j=(e,t)=>{h(n=>({...n,[e]:t})),("mobileText"===e||"contactText"===e||"postCodeText"===e||"residentRegistrationNumberText"===e)&&u(t=>({...t,[e]:""}))},w=(0,i.useCallback)(()=>{s||(h(l),u(mH),r(!1))},[s,l]);if((0,i.useEffect)(()=>{if(!o||s)return;let e=e=>{let t=e.target;t instanceof Node&&null!==d.current&&d.current.contains(t)||w()};return document.addEventListener("pointerdown",e),()=>{document.removeEventListener("pointerdown",e)}},[w,o,s]),null===n)return null;let y=async()=>{let t,i,d,o,p,x,g,m,b;if(s)return;let j=(t={},i={},(d=f.mobileText.trim())!==l.mobileText.trim()&&(i.phoneNumber=d),(o=f.residentRegistrationNumberText.trim())!==l.residentRegistrationNumberText.trim()&&(i.residentRegistrationNumber=o),(p=f.contactText.trim())!==l.contactText.trim()&&(i.contact=p),(x=f.postCodeText.trim())!==l.postCodeText.trim()&&(i.postCode=x),(g=f.memoText.trim())!==l.memoText.trim()&&(i.note=g),Object.assign(t,i),(m=f.addressBaseText.trim())!==l.addressBaseText.trim()&&(t.address=m),(b=f.addressDetailText.trim())!==l.addressDetailText.trim()&&(t.addressDetail=b),t);if(!(Object.keys(j).length>0)){h(l),u(mH),r(!1);return}let w=((e,t)=>{let n={...mH},i=e.mobileText.trim()!==t.mobileText.trim(),l=e.contactText.trim()!==t.contactText.trim(),a=e.postCodeText.trim()!==t.postCodeText.trim();if(e.residentRegistrationNumberText.trim()!==t.residentRegistrationNumberText.trim()){let t=e.residentRegistrationNumberText.trim();""===t||pU.default.brand.residentRegistrationNumber.is(t)||pU.default.brand.residentRegistrationNumber.isPartial(t)||(n.residentRegistrationNumberText="유효한 주민등록번호 형식이 아닙니다.")}if(i){let t=e.mobileText.trim();""===t||pU.default.brand.phoneNumber.is(t)||(n.mobileText="유효한 휴대폰 형식이 아닙니다.")}if(l){let t=e.contactText.trim();""===t||pU.default.brand.contactNumber.is(t)||(n.contactText="유효한 연락처 형식이 아닙니다.")}if(a){let t=e.postCodeText.trim();if(""!==t){let[e]=pU.default.brand.postCode.sanitize(t);null!==e&&(n.postCodeText="유효한 우편번호 형식이 아닙니다.")}}return n})(f,l);if(""!==w.mobileText||""!==w.contactText||""!==w.postCodeText||""!==w.residentRegistrationNumberText)return void u(w);u(mH),c(!0);let[y]=await l4.default.data.serviceWorker.patch({id:n.id,payload:j});if(c(!1),null!==y)return;e.markListRefreshNeeded(),h(l),r(!1);let _=a.default.data.serviceWorker.detail;null!==_.query&&_.refetch()};return(0,t.jsxs)(mK,{ref:d,children:[(0,t.jsxs)(mX,{children:[(0,t.jsx)(mq,{children:"인적사항"}),o?(0,t.jsxs)(mQ,{children:[(0,t.jsxs)(mZ,{type:"button",onClick:w,disabled:s,children:[(0,t.jsx)(iF.default,{sx:{fontSize:20}}),"수정 취소"]}),(0,t.jsxs)(mZ,{type:"button",onClick:()=>void y(),disabled:s,children:[(0,t.jsx)(lg.default,{sx:{fontSize:20}}),"수정 저장"]})]}):(0,t.jsxs)(mZ,{type:"button",onClick:()=>{h(l),r(!0)},children:[(0,t.jsx)(nR.default,{sx:{fontSize:20}}),"수정하기"]})]}),(0,t.jsxs)(mJ,{children:[(0,t.jsxs)(m0,{$columns:4,children:[(0,t.jsxs)(m1,{children:["주민등록번호",(0,t.jsx)(m3,{value:m.residentRegistrationNumberText,style:""!==p.residentRegistrationNumberText?be:void 0,readOnly:!o,onChange:e=>j("residentRegistrationNumberText",e)}),""!==p.residentRegistrationNumberText?(0,t.jsx)(m4,{children:p.residentRegistrationNumberText}):null]}),(0,t.jsxs)(m1,{children:["성별",(0,t.jsx)(m5,{value:b,readOnly:!0})]}),(0,t.jsxs)(m1,{children:[(0,t.jsxs)(m2,{children:[(0,t.jsx)("span",{children:"휴대폰"}),(0,t.jsxs)(m6,{type:"button",disabled:o,onClick:()=>g("phone"),children:[(0,t.jsx)(lm,{sx:{fontSize:12}})," 변경 이력 보기"]})]}),(0,t.jsx)(m9,{value:m.mobileText,style:""!==p.mobileText?be:void 0,readOnly:!o,onChange:e=>j("mobileText",e)}),""!==p.mobileText?(0,t.jsx)(m4,{children:p.mobileText}):null]}),(0,t.jsxs)(m1,{children:["연락처",(0,t.jsx)(m8,{value:m.contactText,style:""!==p.contactText?be:void 0,readOnly:!o,onChange:e=>j("contactText",e)}),""!==p.contactText?(0,t.jsx)(m4,{children:p.contactText}):null]})]}),(0,t.jsxs)(m0,{$columns:3,children:[(0,t.jsxs)(m1,{children:[(0,t.jsxs)(m2,{children:[(0,t.jsx)("span",{children:"주소"}),(0,t.jsxs)(m6,{type:"button",disabled:o,onClick:()=>g("address"),children:[(0,t.jsx)(lm,{sx:{fontSize:12}})," 변경 이력 보기"]})]}),(0,t.jsx)(m5,{value:m.addressBaseText,readOnly:!o,onChange:e=>j("addressBaseText",e.target.value)})]}),(0,t.jsxs)(m1,{children:["상세주소",(0,t.jsx)(m5,{value:m.addressDetailText,readOnly:!o,onChange:e=>j("addressDetailText",e.target.value)})]}),(0,t.jsxs)(m1,{children:["우편번호",(0,t.jsx)(m7,{value:m.postCodeText,style:""!==p.postCodeText?be:void 0,readOnly:!o,onChange:e=>j("postCodeText",e)}),""!==p.postCodeText?(0,t.jsx)(m4,{children:p.postCodeText}):null]})]}),(0,t.jsx)(m0,{$columns:1,children:(0,t.jsxs)(m1,{children:["특이사항(메모)",(0,t.jsx)(m5,{value:m.memoText,readOnly:!o,onChange:e=>j("memoText",e.target.value)})]})})]}),null!==x?(0,t.jsx)(mO,{type:x,onClose:()=>g(null)}):null]})}),mK=l.default.section.withConfig({componentId:"zh__sc-319b784e-0"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;

  width: 100%;
`,mX=l.default.div.withConfig({componentId:"zh__sc-319b784e-1"})`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;

  width: 100%;
  min-height: 40px;
`,mq=l.default.h3.withConfig({componentId:"zh__sc-319b784e-2"})`
  font-size: 18px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 111.111% */
  color: #101828;
`,mQ=l.default.div.withConfig({componentId:"zh__sc-319b784e-3"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,mZ=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-319b784e-4"})`
  display: flex;
  gap: 4px;
  align-items: center;

  height: 40px;
  padding: 8px 16px;
`,mJ=l.default.div.withConfig({componentId:"zh__sc-319b784e-5"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-self: stretch;

  width: 100%;
`,m0=l.default.div.withConfig({componentId:"zh__sc-319b784e-6"})`
  display: grid;
  grid-template-columns: ${({$columns:e})=>4===e?"repeat(4, minmax(0, 1fr))":3===e?"repeat(3, minmax(0, 1fr))":"minmax(0, 1fr)"};
  gap: 12px;
  width: 100%;
`,m1=l.default.label.withConfig({componentId:"zh__sc-319b784e-7"})`
  display: flex;
  flex-direction: column;
  gap: 4px;

  min-width: 0;

  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: #000;
`,m2=l.default.div.withConfig({componentId:"zh__sc-319b784e-8"})`
  display: flex;
  gap: 2px;
  align-items: center;
  min-height: 20px;
`,m6=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-319b784e-9"})`
  gap: 2px;
  padding: 2px 4px;
  font-size: 12px;
  line-height: 1;
`,m4=l.default.div.withConfig({componentId:"zh__sc-319b784e-10"})`
  margin-top: 2px;
  font-size: 12px;
  line-height: 16px;
  color: #ff4d4f;
`,m5=(0,l.default)(o.default.Input.Text).withConfig({componentId:"zh__sc-319b784e-11"})`
  height: 36px;
  padding: 0 16px;
  font-size: 16px;
  line-height: 20px;
`,m3=(0,l.default)(o.default.Input.ResidentRegistrationNumber).withConfig({componentId:"zh__sc-319b784e-12"})`
  height: 36px;
  padding: 0 16px;
  font-size: 16px;
  line-height: 20px;
`,m9=(0,l.default)(o.default.Input.Phone).withConfig({componentId:"zh__sc-319b784e-13"})`
  height: 36px;
  padding: 0 16px;
  font-size: 16px;
  line-height: 20px;
`,m8=(0,l.default)(o.default.Input.Contact).withConfig({componentId:"zh__sc-319b784e-14"})`
  height: 36px;
  padding: 0 16px;
  font-size: 16px;
  line-height: 20px;
`,m7=(0,l.default)(o.default.Input.PostCode).withConfig({componentId:"zh__sc-319b784e-15"})`
  height: 36px;
  padding: 0 16px;
  font-size: 16px;
  line-height: 20px;
`,be={borderColor:"#ff4d4f",background:"#fff5f5"},bt={availableTimes:[],careTypeDetails:{},desiredAgeRanges:[],desiredClientGender:null,preferredWeeklyWorkingHours:null,regions:[],careTypes:[],hasVehicle:null},bn=Object.keys(e7.default).filter(function(e){return e in e7.default}),bi=Object.keys(te.default).filter(function(e){return e in te.default}),bl=[{label:"소지",value:!0},{label:"미소지",value:!1}],ba=[{label:"전체",value:null},{label:"남성",value:"MALE"},{label:"여성",value:"FEMALE"}],bd=Object.keys(e9.default).filter(function(e){return e in e9.default}).map(e=>({label:e9.default[e].label,value:e})),bo=e=>[...new Set(e)].sort(),br=e=>`${e.dayOfWeek}-${e.hour}`,bs=(e,t)=>{let n=bo(e),i=bo(t);return n.length===i.length&&n.every((e,t)=>e===i[t])},bc=(0,n.observer)(function(){let e=a.default.modal.serviceWorkerDetail,n=a.default.modal.serviceWorkerDetail.serviceWorker,l=(e=>{if(null===e)return bt;let t=e.availableTimes,n={};return e.careTypes.forEach(({careType:e,detail:t})=>{n[e]=t??""}),{availableTimes:t,careTypeDetails:n,desiredAgeRanges:e.desiredAgeRanges,desiredClientGender:e.desiredClientGender,preferredWeeklyWorkingHours:e.preferredWeeklyWorkingHours??null,regions:e.regions,careTypes:e.careTypes.map(({careType:e})=>e),hasVehicle:e.hasVehicle??null}})(n),d=(0,i.useRef)(null),[o,r]=(0,i.useState)(!1),[s,c]=(0,i.useState)(!1),[f,h]=(0,i.useState)(bt),p=o?f:l,u=bn.every(e=>p.regions.includes(e)),x=bi.every(e=>p.careTypes.includes(e)),g=e.selectedEmploymentContract?.serviceType??a.default.serviceWorker.info.byServiceWorker.currentServiceType,m="DISABILITY_ACTIVITY_SUPPORT"===g,b=(0,i.useCallback)(()=>{s||(h(l),r(!1))},[s,l]);if((0,i.useEffect)(()=>{if(!o||s)return;let e=e=>{let t=e.target;t instanceof Node&&null!==d.current&&d.current.contains(t)||b()};return document.addEventListener("pointerdown",e),()=>{document.removeEventListener("pointerdown",e)}},[b,o,s]),null===n)return null;let j=(e,t)=>o?t.includes(e)?t.filter(t=>t!==e):[...t,e]:t,w=async()=>{var t;let i,d;if(s)return;let o=(t=n.careTypes,i={},null===g||((e,t)=>{if(e.length!==t.length)return!1;let n=e.map(br).sort(),i=t.map(br).sort();return n.every((e,t)=>e===i[t])})(f.availableTimes,l.availableTimes)||(i.availableTimes=f.availableTimes.map(e=>({...e,serviceType:g}))),bs(f.regions,l.regions)||(i.regions=f.regions),d=bi.some(e=>(f.careTypeDetails[e]??"")!==(l.careTypeDetails[e]??"")),(!bs(f.careTypes,l.careTypes)||d)&&(i.careTypes=f.careTypes.map(e=>({careType:e,detail:f.careTypeDetails[e]??t.find(t=>t.careType===e)?.detail??null}))),f.desiredClientGender!==l.desiredClientGender&&(i.desiredClientGender=f.desiredClientGender??void 0),bs(f.desiredAgeRanges,l.desiredAgeRanges)||(i.desiredAgeRanges=f.desiredAgeRanges),f.preferredWeeklyWorkingHours!==l.preferredWeeklyWorkingHours&&(i.preferredWeeklyWorkingHours=f.preferredWeeklyWorkingHours??void 0),f.hasVehicle!==l.hasVehicle&&null!==f.hasVehicle&&(i.hasVehicle=f.hasVehicle),i);if(!(Object.keys(o).length>0)){h(l),r(!1);return}c(!0);let[p]=await l4.default.data.serviceWorker.patch({id:n.id,payload:o});if(c(!1),null!==p)return;e.markListRefreshNeeded(),h(l),r(!1);let u=a.default.data.serviceWorker.detail;null!==u.query&&u.refetch()};return(0,t.jsx)(bf,{ref:d,children:(0,t.jsxs)(bu,{children:[(0,t.jsxs)(bx,{children:[(0,t.jsxs)(bg,{children:[(0,t.jsx)(bm,{children:"근무 가능 시간"}),(0,t.jsxs)(bb,{children:[(0,t.jsx)(e5.default,{sx:{fontSize:20}}),(0,t.jsx)(bj,{children:"시간대를 추가하고, 추가한 시간대를 클릭하면 수정하거나 삭제할 수 있습니다."})]}),o&&(0,t.jsx)(bw,{children:"수정 진행중"})]}),o?(0,t.jsxs)(bh,{children:[(0,t.jsxs)(bp,{type:"button",onClick:b,disabled:s,children:[(0,t.jsx)(iF.default,{sx:{fontSize:20}}),"수정 취소"]}),(0,t.jsxs)(bp,{type:"button",onClick:()=>void w(),disabled:s,children:[(0,t.jsx)(lg.default,{sx:{fontSize:20}}),"수정 저장"]})]}):(0,t.jsxs)(bp,{type:"button",onClick:()=>{h(l),r(!0)},children:[(0,t.jsx)(nR.default,{sx:{fontSize:20}}),"수정하기"]})]}),(0,t.jsx)(by,{value:p.availableTimes,disabled:!o,readOnly:!o,onChange:e=>{if(!o)return;let t=e.target.value;h(e=>({...e,availableTimes:t}))}}),(0,t.jsxs)(b_,{children:[(0,t.jsx)(bv,{children:"희망 근로 시간"}),(0,t.jsxs)(bC,{children:[(0,t.jsx)(bz,{children:"총"}),(0,t.jsx)(bI,{value:null===p.preferredWeeklyWorkingHours?"":String(p.preferredWeeklyWorkingHours),placeholder:"00",maxLength:2,disabled:!o,onChange:e=>{if(!o)return;let t=e.target.value.replace(/\D/g,"");if(""===t)return void h(e=>({...e,preferredWeeklyWorkingHours:null}));let n=Math.min(Number(t),99);h(e=>({...e,preferredWeeklyWorkingHours:n}))}}),(0,t.jsx)(bz,{children:"시간"})]})]}),(0,t.jsxs)(bT,{children:[(0,t.jsx)(bS,{children:"서비스 가능 지역 (복수 선택 가능)"}),(0,t.jsxs)(bk,{children:[(0,t.jsxs)(bE,{children:[(0,t.jsx)(bO,{disabled:!o,checked:u,onChange:()=>{o&&h(e=>({...e,regions:u?[]:bn}))}}),(0,t.jsx)(bA,{children:"전체 선택"})]}),bn.map(e=>(0,t.jsxs)(bE,{children:[(0,t.jsx)(bO,{disabled:!o,checked:p.regions.includes(e),onChange:()=>{let t=j(e,p.regions);h(e=>({...e,regions:t}))}}),(0,t.jsx)(bA,{children:e7.default[e].label})]},e))]})]}),m&&(0,t.jsxs)(bT,{children:[(0,t.jsx)(bS,{children:"가능 활동 내용 (복수 선택 가능)"}),(0,t.jsxs)(bk,{children:[(0,t.jsxs)(bE,{children:[(0,t.jsx)(bO,{disabled:!o,checked:x,onChange:()=>{o&&h(e=>({...e,careTypes:x?[]:bi}))}}),(0,t.jsx)(bA,{children:"전체 선택"})]}),bi.map(e=>(0,t.jsxs)(bE,{children:[(0,t.jsx)(bO,{disabled:!o,checked:p.careTypes.includes(e),onChange:()=>{let t=j(e,p.careTypes);h(e=>({...e,careTypes:t}))}}),(0,t.jsx)(bA,{children:"PHYSICAL_ACTIVITY_SUPPORT"===e?"신체 활동":te.default[e].label}),(0,t.jsx)(bD,{disabled:!o,value:p.careTypeDetails[e]??"",placeholder:"관련 내용을 입력해주세요.",onChange:t=>h(n=>({...n,careTypeDetails:{...n.careTypeDetails,[e]:t.target.value}}))})]},e))]})]}),!m&&(0,t.jsxs)(bT,{children:[(0,t.jsx)(bS,{children:"차량 소지"}),(0,t.jsx)(bk,{children:bl.map(e=>(0,t.jsxs)(bE,{children:[(0,t.jsx)(b$,{name:"detail-service-worker-car-ownership",checked:p.hasVehicle===e.value,disabled:!o,onChange:()=>{o&&h(t=>({...t,hasVehicle:e.value}))}}),(0,t.jsx)(bA,{children:e.label})]},e.label))})]}),m&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(bT,{children:[(0,t.jsx)(bS,{children:"이용자 희망 성별"}),(0,t.jsx)(bk,{children:ba.map(e=>(0,t.jsxs)(bE,{children:[(0,t.jsx)(b$,{name:"detail-service-worker-client-gender",checked:p.desiredClientGender===e.value,disabled:!o,onChange:()=>h(t=>({...t,desiredClientGender:e.value}))}),(0,t.jsx)(bA,{children:e.label})]},e.label))})]}),(0,t.jsxs)(bT,{children:[(0,t.jsx)(bS,{children:"이용자 희망 연령"}),(0,t.jsxs)(bk,{children:[(0,t.jsxs)(bE,{children:[(0,t.jsx)(bO,{disabled:!o,checked:p.desiredAgeRanges.length===bd.length,onChange:e=>h(t=>({...t,desiredAgeRanges:e.target.checked?bd.map(({value:e})=>e):[]}))}),(0,t.jsx)(bA,{children:"전체 선택"})]}),bd.map(({label:e,value:n})=>(0,t.jsxs)(bE,{children:[(0,t.jsx)(bO,{disabled:!o,checked:p.desiredAgeRanges.includes(n),onChange:e=>h(t=>({...t,desiredAgeRanges:e.target.checked?[...t.desiredAgeRanges,n]:t.desiredAgeRanges.filter(e=>e!==n)}))}),(0,t.jsx)(bA,{children:e})]},n))]})]})]})]})})}),bf=l.default.section.withConfig({componentId:"zh__sc-3656833f-0"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;

  width: 100%;
`,bh=l.default.div.withConfig({componentId:"zh__sc-3656833f-1"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,bp=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-3656833f-2"})`
  display: flex;
  gap: 4px;
  align-items: center;

  height: 40px;
  padding: 8px 16px;
`,bu=l.default.div.withConfig({componentId:"zh__sc-3656833f-3"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  align-self: stretch;
`,bx=l.default.div.withConfig({componentId:"zh__sc-3656833f-4"})`
  display: flex;
  gap: 16px;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;

  width: 100%;
`,bg=l.default.div.withConfig({componentId:"zh__sc-3656833f-5"})`
  display: flex;
  flex: 1 1 auto;
  gap: 16px;
  align-items: center;
`,bm=l.default.div.withConfig({componentId:"zh__sc-3656833f-6"})`
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
  text-align: center;
`,bb=l.default.div.withConfig({componentId:"zh__sc-3656833f-7"})`
  display: flex;
  gap: 4px;
  align-items: center;
  color: #464c53;
`,bj=l.default.div.withConfig({componentId:"zh__sc-3656833f-8"})`
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px;
`,bw=l.default.div.withConfig({componentId:"zh__sc-3656833f-9"})`
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
`,by=(0,l.default)(o.default.Input.TimeSlider).withConfig({componentId:"zh__sc-3656833f-10"})`
  align-self: stretch;
  width: 100%;
  max-width: 808px;
`,b_=l.default.div.withConfig({componentId:"zh__sc-3656833f-11"})`
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
  align-self: stretch;
`,bv=l.default.div.withConfig({componentId:"zh__sc-3656833f-12"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #000;
  text-align: center;
`,bC=l.default.div.withConfig({componentId:"zh__sc-3656833f-13"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,bI=(0,l.default)(o.default.Input.Text).withConfig({componentId:"zh__sc-3656833f-14"})`
  width: 59px;
  height: 36px;
  text-align: center;
`,bz=l.default.div.withConfig({componentId:"zh__sc-3656833f-15"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #000;
  text-align: center;
`,bT=l.default.div.withConfig({componentId:"zh__sc-3656833f-16"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
  align-self: stretch;
`,bS=l.default.div.withConfig({componentId:"zh__sc-3656833f-17"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #000;
  text-align: center;
`,bk=l.default.div.withConfig({componentId:"zh__sc-3656833f-18"})`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 24px;
  align-items: center;
`,bE=l.default.label.withConfig({componentId:"zh__sc-3656833f-19"})`
  display: inline-flex;
  gap: 8px;
  align-items: center;
  height: 36px;
`,bD=(0,l.default)(o.default.Input.Text).withConfig({componentId:"zh__sc-3656833f-20"})`
  width: 193px;
  height: 36px;
  padding: 4px 16px;
`,bA=l.default.span.withConfig({componentId:"zh__sc-3656833f-21"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #000;
  text-align: center;
`,bO=(0,l.default)(o.default.Input.Check).attrs({$iconSizeRatio:1.5}).withConfig({componentId:"zh__sc-3656833f-22"})`
  width: 24px;
  height: 24px;
`,b$=(0,l.default)(o.default.Input.Radio).withConfig({componentId:"zh__sc-3656833f-23"})`
  width: 20px;
  height: 20px;
`,bR=(0,n.observer)(function(){let e=a.default.modal.serviceWorkerDetail,n=e.serviceWorker?.name??"";return(0,t.jsxs)(bL,{children:[(0,t.jsx)(mG,{}),(0,t.jsx)(bc,{}),(0,t.jsxs)(bN,{type:"button",disabled:e.isDeleting,onClick:()=>{e.openDeleteConfirm()},children:[(0,t.jsx)(B.default.Delete,{size:16}),"삭제하기"]}),e.isDeleteConfirmOpen?(0,t.jsx)(bP,{children:(0,t.jsxs)(bF,{children:[(0,t.jsxs)(bM,{children:[(0,t.jsxs)(bB,{children:[n," 제공인력을 삭제하시겠어요?"]}),(0,t.jsxs)(bU,{children:["삭제한 제공인력 정보는 복구할 수 없습니다.",(0,t.jsx)("br",{}),"계약 및 근무 이력이 없는 제공인력만 삭제할 수 있습니다."]})]}),(0,t.jsxs)(bW,{children:[(0,t.jsx)(bY,{type:"button",disabled:e.isDeleting,onClick:()=>{e.closeDeleteConfirm()},children:"취소하기"}),(0,t.jsx)(bV,{type:"button",disabled:e.isDeleting,onClick:()=>{e.confirmDelete()},children:"삭제하기"})]})]})}):null]})}),bL=l.default.div.withConfig({componentId:"zh__sc-d3727a60-0"})`
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
`,bN=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-d3727a60-1"})`
  gap: 8px;
  height: 36px;
  padding: 8px 16px;
`,bP=l.default.div.withConfig({componentId:"zh__sc-d3727a60-2"})`
  position: fixed;
  z-index: 1000;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgb(10 10 10 / 35%);
`,bF=l.default.div.withConfig({componentId:"zh__sc-d3727a60-3"})`
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
`,bM=l.default.div.withConfig({componentId:"zh__sc-d3727a60-4"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;
`,bB=l.default.h2.withConfig({componentId:"zh__sc-d3727a60-5"})`
  align-self: stretch;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #000;
`,bU=l.default.p.withConfig({componentId:"zh__sc-d3727a60-6"})`
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #000;
`,bW=l.default.div.withConfig({componentId:"zh__sc-d3727a60-7"})`
  display: flex;
  gap: 12px;
  align-items: center;
  align-self: stretch;
  justify-content: flex-end;
`,bY=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-d3727a60-8"})`
  height: 36px;
  padding: 8px 16px;
`,bV=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-d3727a60-9"})`
  height: 36px;
  padding: 8px 16px;
`;var bH=e.i(5070);let bG=(0,n.observer)(function({onClose:e,onSelectClient:n,serviceWorkerId:l,serviceType:d}){let[r,s]=(0,i.useState)(""),c=a.default.data.serviceWorker.availableClientList;(0,i.useEffect)(()=>null===d?void c.reset():(c.setQuery({serviceWorkerId:l,serviceType:d}),()=>c.reset()),[c,d,l]);let f=(0,i.useMemo)(()=>c.data?.map(e=>({...e,_searchableName:l8.default.create(e.client.name)}))??[],[c.data]).filter(({_searchableName:e})=>l8.default.isMatch(e,r));return(0,t.jsx)(bK,{children:(0,t.jsxs)(bX,{onClick:e=>e.stopPropagation(),children:[(0,t.jsxs)(bq,{children:[(0,t.jsx)(bQ,{}),(0,t.jsx)(bZ,{children:"연결할 이용자 선택하기"}),(0,t.jsx)(o.default.Button.Outlined,{type:"button",style:{width:56,height:36},onClick:e,children:(0,t.jsx)(nO.default,{sx:{fontSize:20}})})]}),(0,t.jsx)(bJ,{}),(0,t.jsx)(b0,{children:(0,t.jsxs)(b1,{children:[(0,t.jsx)(l9,{sx:{fontSize:22},style:{position:"absolute",left:16,top:"50%",transform:"translateY(-50%)",color:"#9CA3AF"}}),(0,t.jsx)(b2,{placeholder:"이용자 이름을 검색하세요.",value:r,onChange:e=>s(e.target.value)})]})}),(0,t.jsxs)(b4,{children:["loading"===c.status?(0,t.jsx)(b6,{children:"이용자를 불러오는 중..."}):null,"error"===c.status?(0,t.jsx)(b6,{children:"이용자 목록을 불러오지 못했습니다."}):null,"success"===c.status&&0===f.length?(0,t.jsx)(b6,{children:"연결할 수 있는 이용자가 없습니다."}):null,f.map(({client:e,latestContractId:i})=>(0,t.jsxs)(b5,{children:[(0,t.jsxs)(b3,{children:[(0,t.jsx)(b9,{children:e.name}),(0,t.jsx)(b8,{children:(0,t.jsxs)(b7,{children:[(0,t.jsx)(je,{children:"주소"}),(0,t.jsx)(jt,{}),(0,t.jsx)(jn,{$variant:"gray",children:e.address??"-"})]})})]}),(0,t.jsx)(ji,{children:(0,t.jsxs)(jl,{type:"button",disabled:null===i,onClick:()=>{null!==i&&n?.(i)},children:["선택",(0,t.jsx)(l3.default,{sx:{fontSize:18}})]})})]},e.id))]})]})})}),bK=l.default.div.withConfig({componentId:"zh__sc-e99ba75d-0"})`
  position: absolute;
  z-index: 1000;
  inset: 0;

  display: flex;
  justify-content: flex-end;

  padding-top: 69px;
`,bX=l.default.div.withConfig({componentId:"zh__sc-e99ba75d-1"})`
  display: flex;
  flex-direction: column;

  width: min(417px, 100%);
  height: 100%;

  background: #fff;
  box-shadow: -2px 9px 16px rgb(0 0 0 / 16%);
`,bq=l.default.div.withConfig({componentId:"zh__sc-e99ba75d-2"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
`,bQ=l.default.div.withConfig({componentId:"zh__sc-e99ba75d-3"})`
  flex-shrink: 0;
  width: 36px;
  height: 36px;
`,bZ=l.default.div.withConfig({componentId:"zh__sc-e99ba75d-4"})`
  flex: 1;

  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  color: #101828;
  text-align: center;
`,bJ=l.default.div.withConfig({componentId:"zh__sc-e99ba75d-5"})`
  height: 1px;
  background: #e5e7eb;
`,b0=l.default.div.withConfig({componentId:"zh__sc-e99ba75d-6"})`
  padding: 16px;
`,b1=l.default.div.withConfig({componentId:"zh__sc-e99ba75d-7"})`
  position: relative;
`,b2=(0,l.default)(o.default.Input.Text).withConfig({componentId:"zh__sc-e99ba75d-8"})`
  width: 100%;
  height: 36px;
  padding-left: 48px;
`,b6=l.default.div.withConfig({componentId:"zh__sc-e99ba75d-9"})`
  padding: 24px 0;
  font-size: 14px;
  color: #667085;
  text-align: center;
`,b4=l.default.div.withConfig({componentId:"zh__sc-e99ba75d-10"})`
  overflow-y: auto;
  flex: 1;
  gap: 12px;

  padding: 16px;

  background: #f9fafb;
`,b5=l.default.div.withConfig({componentId:"zh__sc-e99ba75d-11"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;

  height: 148px;
  padding: 16px;
  border: 1px solid #e5e9ef;
  border-radius: 8px;

  background: #fff;
`,b3=l.default.div.withConfig({componentId:"zh__sc-e99ba75d-12"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;
`,b9=l.default.div.withConfig({componentId:"zh__sc-e99ba75d-13"})`
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
`,b8=l.default.div.withConfig({componentId:"zh__sc-e99ba75d-14"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
  align-self: stretch;
`,b7=l.default.div.withConfig({componentId:"zh__sc-e99ba75d-15"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;
`,je=l.default.div.withConfig({componentId:"zh__sc-e99ba75d-16"})`
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  color: #0a0a0a;
  text-align: center;
`,jt=l.default.div.withConfig({componentId:"zh__sc-e99ba75d-17"})`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;

  width: 1px;
  height: 20px;

  background: #e5e7eb;
`,jn=l.default.div.withConfig({componentId:"zh__sc-e99ba75d-18"})`
  font-size: 14px;
  font-weight: 400;
  font-style: normal;
  line-height: normal;
  color: ${({$variant:e})=>"gray"===e?"#45464E":"#0a0a0a"};
`,ji=l.default.div.withConfig({componentId:"zh__sc-e99ba75d-19"})`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-end;
  align-self: stretch;
  justify-content: center;
`,jl=l.default.button.withConfig({componentId:"zh__sc-e99ba75d-20"})`
  cursor: pointer;

  display: flex;
  align-items: center;

  padding: 4px 0;
  border: 0;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 16px;
  color: #4f39f6;
  letter-spacing: -1px;

  background: transparent;

  &:disabled {
    cursor: not-allowed;
    color: #98a2b3;
  }
`,ja=(0,n.observer)(function(){let[e,n]=(0,i.useState)(!1),[l,d]=(0,i.useState)(!1),[o,r]=(0,i.useState)({}),s=a.default.data.serviceWorker.detail.data?.assignedContracts,c=s??[];(0,i.useEffect)(()=>{let e=!0;return Promise.all((s??[]).map(async({contractId:e})=>{let[t,n]=await l4.default.data.contract.get({id:e});return null===t?[e,n]:null})).then(t=>{e&&r(Object.fromEntries(t.filter(e=>null!==e)))}),()=>{e=!1}},[s]);let f=async e=>{let t=a.default.modal.serviceWorkerDetail.serviceWorkerId;if(null===t||l)return;d(!0);let[i]=await l4.default.data.contract.update({id:e,payload:{serviceWorkerId:t}});if(d(!1),null!==i)return void a.default.ui.layout.toast.error("이용자 연결에 실패했습니다. 잠시 후 다시 시도해 주세요.");let o=a.default.data.serviceWorker.detail;null!==o.query&&await o.refetch(),n(!1),a.default.ui.layout.toast.success("이용자를 연결했습니다.")};return(0,t.jsxs)(jd,{children:[(0,t.jsxs)(js,{children:[(0,t.jsx)(jc,{children:"연결된 이용자 정보"}),(0,t.jsxs)(jf,{children:[(0,t.jsxs)(jh,{type:"button",disabled:!0,children:[(0,t.jsx)(nR.default,{sx:{fontSize:20}}),"수정하기"]}),(0,t.jsxs)(jh,{type:"button",disabled:null===a.default.modal.serviceWorkerDetail.selectedEmploymentContract,onClick:()=>n(!0),children:[(0,t.jsx)(nD,{sx:{fontSize:20}}),"추가하기"]})]})]}),0===c.length?(0,t.jsxs)(jp,{children:[(0,t.jsx)(nL.default,{sx:{fontSize:24,color:"#494F53"}}),(0,t.jsxs)(jv,{children:[(0,t.jsx)(jC,{children:"연결된 이용자가 없습니다."}),(0,t.jsx)(jI,{children:null===a.default.modal.serviceWorkerDetail.selectedEmploymentContract?"계약 후 이용자를 연결할 수 있습니다.":"[+추가하기] 버튼을 클릭해 이용자를 연결해주세요."})]})]}):(0,t.jsx)(ju,{children:c.map(({contractId:e,clientName:n,clientBirthDate:i})=>{let l=o[e];return(0,t.jsxs)(jx,{children:[(0,t.jsx)(jg,{children:n}),(0,t.jsxs)(jm,{children:[(0,t.jsxs)(jb,{children:[(0,t.jsx)(jj,{children:"생년월일"}),(0,t.jsx)(jw,{}),(0,t.jsx)(j_,{children:jr(i)})]}),(0,t.jsxs)(jb,{children:[(0,t.jsx)(jj,{children:"시작일자"}),(0,t.jsx)(jw,{}),(0,t.jsx)(jy,{children:jo(l?.contractStartDate)})]}),(0,t.jsxs)(jb,{children:[(0,t.jsx)(jj,{children:"종료일자"}),(0,t.jsx)(jw,{}),(0,t.jsx)(jy,{children:jo(l?.contractEndDate)})]})]})]},e)})}),e&&null!==a.default.modal.serviceWorkerDetail.serviceWorkerId?(0,t.jsx)(bG,{onClose:()=>n(!1),onSelectClient:e=>void f(e),serviceWorkerId:a.default.modal.serviceWorkerDetail.serviceWorkerId,serviceType:a.default.modal.serviceWorkerDetail.selectedEmploymentContract?.serviceType??null}):null]})}),jd=l.default.section.withConfig({componentId:"zh__sc-58e34935-0"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;

  width: 100%;
`,jo=e=>e?.replaceAll("-","")??"-",jr=e=>{let t=jo(e);return 8===t.length?t.slice(2):t},js=l.default.div.withConfig({componentId:"zh__sc-58e34935-1"})`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;

  width: 100%;
  min-height: 40px;
`,jc=l.default.h3.withConfig({componentId:"zh__sc-58e34935-2"})`
  font-size: 18px;
  font-weight: 700;
  line-height: 20px;
  color: #101828;
`,jf=l.default.div.withConfig({componentId:"zh__sc-58e34935-3"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,jh=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-58e34935-4"})`
  display: flex;
  gap: 4px;
  align-items: center;

  height: 40px;
  padding: 8px 16px;
`,jp=l.default.div.withConfig({componentId:"zh__sc-58e34935-5"})`
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
`,ju=l.default.div.withConfig({componentId:"zh__sc-58e34935-6"})`
  overflow: auto hidden;
  display: flex;
  flex-wrap: nowrap;
  gap: 10px;

  width: 100%;
`,jx=l.default.div.withConfig({componentId:"zh__sc-58e34935-7"})`
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
`,jg=l.default.div.withConfig({componentId:"zh__sc-58e34935-8"})`
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
  color: #0a0a0a;
`,jm=l.default.div.withConfig({componentId:"zh__sc-58e34935-9"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
`,jb=l.default.div.withConfig({componentId:"zh__sc-58e34935-10"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,jj=l.default.div.withConfig({componentId:"zh__sc-58e34935-11"})`
  width: 52px;
  font-size: 14px;
  line-height: normal;
  color: #0a0a0a;
`,jw=l.default.div.withConfig({componentId:"zh__sc-58e34935-12"})`
  width: 1px;
  height: 20px;
  background: #e5e7eb;
`,jy=l.default.div.withConfig({componentId:"zh__sc-58e34935-13"})`
  font-size: 14px;
  line-height: normal;
  color: #0a0a0a;
`,j_=(0,l.default)(jy).withConfig({componentId:"zh__sc-58e34935-14"})`
  color: #45464e;
`,jv=l.default.div.withConfig({componentId:"zh__sc-58e34935-15"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: center;
`,jC=l.default.div.withConfig({componentId:"zh__sc-58e34935-16"})`
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  color: #494f53;
`,jI=l.default.div.withConfig({componentId:"zh__sc-58e34935-17"})`
  font-size: 16px;
  line-height: 20px;
  color: #494f53;
  text-align: center;
`,jz=Object.keys(gn.default).filter(e=>e in gn.default),jT=[{key:gc,label:"월 60시간 이상 적립"},{key:gf,label:"월 64시간 이상"},{key:gh,label:"월 65시간 이상"},{key:gp,label:"항상 적립"},{key:gu,label:"미적립"}],jS=[{key:gi,label:"근로소득"},{key:gl,label:"사업소득"},{key:ga,label:"기타소득"},{key:gd,label:"정액제"}],jk=[{key:go,label:"기관 기준"},{key:gr,label:"항상 지급"},{key:gs,label:"항상 미지급"}],jE=[{key:"nationalPensionEnrolled",label:"국민연금"},{key:"healthInsuranceEnrolled",label:"건강보험"},{key:"employmentInsuranceEnrolled",label:"고용보험"},{key:"industrialAccidentInsuranceEnrolled",label:"산재보험"}],jD=["신규","보수"],jA={display:"flex",alignItems:"center",alignSelf:"stretch",width:"100%",height:36,padding:"4px 16px",fontSize:16},jO=(0,n.observer)(function(){let e=a.default.modal.serviceWorkerDetail.serviceWorker,n=a.default.modal.serviceWorkerDetail.selectedEmploymentContract,i=a.default.modal.serviceWorkerDetail,l=i.isAccountInfoEditing,d=i.isSalaryEditing,r=i.isSocialInsuranceEditing,s="DISABILITY_ACTIVITY_SUPPORT"===(n?.serviceType??a.default.serviceWorker.info.byServiceWorker.currentServiceType),c=s&&n?.contractStartDate!==void 0,f=i.selectedEmploymentContractDraftRetirementReserveContractType,h=i.selectedEmploymentContractDraftIncomeTaxCategory,p=i.selectedEmploymentContractDraftLeaveAllowancePaymentMethod;return null===e?null:(0,t.jsxs)(j$,{children:[(0,t.jsx)(ja,{}),(0,t.jsxs)(jR,{children:[(0,t.jsxs)(jL,{children:[(0,t.jsxs)(jP,{children:[(0,t.jsx)(jN,{children:"계좌∙자격 및 기타 정보"}),l&&(0,t.jsx)(nH,{children:"수정 진행중"})]}),l?(0,t.jsxs)(jF,{children:[(0,t.jsxs)(jM,{type:"button",onClick:i.cancelAccountInfoEdit,children:[(0,t.jsx)(iF.default,{sx:{fontSize:20}}),"수정 취소"]}),(0,t.jsxs)(jM,{type:"button",onClick:()=>void i.saveAccountInfoEdit(),children:[(0,t.jsx)(lg.default,{sx:{fontSize:20}}),"수정 저장"]})]}):(0,t.jsxs)(jM,{type:"button",onClick:i.startAccountInfoEdit,children:[(0,t.jsx)(nR.default,{sx:{fontSize:20}}),"수정하기"]})]}),(0,t.jsxs)(jB,{children:[(0,t.jsxs)(jU,{$width:191,children:[(0,t.jsx)(jW,{children:"은행명"}),(0,t.jsxs)(o.default.Input.Select,{disabled:!l,style:jA,value:i.accountInfoDraft.bankName??e.bankName??"",onChange:e=>i.updateAccountInfoDraftField("bankName",jz.find(t=>t===e.target.value)),children:[(0,t.jsx)("option",{value:"",children:"-"}),jz.map(e=>(0,t.jsx)("option",{value:e,children:gn.default[e].label},e))]})]}),(0,t.jsxs)(jU,{children:[(0,t.jsx)(jW,{children:"계좌번호"}),(0,t.jsx)(o.default.Input.Text,{disabled:!l,placeholder:"계좌번호를 입력해주세요.",style:jA,value:i.accountInfoDraft.accountNumber??e.accountNumber??"",onChange:e=>i.updateAccountInfoDraftField("accountNumber",e.target.value)})]}),(0,t.jsxs)(jU,{children:[(0,t.jsx)(jW,{children:"예금주"}),(0,t.jsx)(o.default.Input.Text,{disabled:!l,placeholder:"예금주를 입력해주세요.",style:jA,value:i.accountInfoDraft.accountHolder??e.accountHolder??"",onChange:e=>i.updateAccountInfoDraftField("accountHolder",e.target.value)})]})]}),(0,t.jsxs)(jB,{children:[(0,t.jsxs)(jU,{$width:262,children:[(0,t.jsx)(jW,{children:"제공인력 자격정보"}),(0,t.jsx)(o.default.Input.Text,{disabled:!l,placeholder:"자격정보를 입력해주세요.",style:jA,value:i.accountInfoDraft.qualificationInfo??e.qualificationInfo??"",onChange:e=>i.updateAccountInfoDraftField("qualificationInfo",e.target.value)})]}),(0,t.jsx)(jU,{$width:158,children:c?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(jW,{children:"교육 종류"}),(0,t.jsxs)(jY,{$isEmptySelected:!0,disabled:!0,style:jA,value:e3.default.SELECT_EMPTY_VALUE,children:[(0,t.jsx)("option",{value:e3.default.SELECT_EMPTY_VALUE,disabled:!0,children:"미정"}),jD.map(e=>(0,t.jsx)("option",{value:e,children:e},e))]})]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(jW,{children:"실습 여부"}),(0,t.jsxs)(jV,{children:[(0,t.jsxs)(jq,{children:[(0,t.jsx)(jQ,{checked:i.accountInfoDraft.isTrainee??e.isTrainee,disabled:!l,onChange:()=>i.updateAccountInfoDraftField("isTrainee",!0)}),"이수"]}),(0,t.jsxs)(jq,{children:[(0,t.jsx)(jQ,{checked:!(i.accountInfoDraft.isTrainee??e.isTrainee),disabled:!l,onChange:()=>i.updateAccountInfoDraftField("isTrainee",!1)}),"미이수"]})]})]})}),(0,t.jsxs)(jU,{children:[(0,t.jsx)(jW,{children:"범죄경력 조회여부"}),(0,t.jsx)(jV,{children:(0,t.jsxs)(jq,{children:[(0,t.jsx)(jZ,{checked:i.accountInfoDraft.criminalRecordChecked??e.criminalRecordChecked,disabled:!l,onChange:e=>i.updateAccountInfoDraftField("criminalRecordChecked",e.target.checked)}),"조회 완료"]})})]})]}),(0,t.jsx)(jB,{children:(0,t.jsxs)(jU,{children:[(0,t.jsx)(jW,{children:"관련서류 제출여부"}),(0,t.jsx)(o.default.Input.Text,{disabled:!l,placeholder:"제출여부를 입력해주세요.",style:jA,value:i.accountInfoDraft.relatedDocumentInfo??e.relatedDocumentInfo??"",onChange:e=>i.updateAccountInfoDraftField("relatedDocumentInfo",e.target.value)})]})}),(0,t.jsx)(jB,{children:(0,t.jsxs)(jU,{$width:191,children:[(0,t.jsx)(jW,{children:"사회보험"}),(0,t.jsx)(jV,{children:jE.map(({key:n,label:a})=>(0,t.jsxs)(jq,{children:[(0,t.jsx)(jZ,{checked:i.accountInfoDraft[n]??e[n]??!1,disabled:!l,onChange:e=>i.updateAccountInfoDraftField(n,e.target.checked)}),a]},n))})]})}),(0,t.jsxs)(jB,{children:[(0,t.jsxs)(jU,{$width:191,children:[(0,t.jsx)(jW,{children:"단말기 정보"}),(0,t.jsxs)(jV,{children:[(0,t.jsxs)(jq,{children:[(0,t.jsx)(jQ,{checked:"SMARTPHONE"===i.accountInfoTerminalType,disabled:!l,onChange:()=>i.updateAccountInfoTerminalType("SMARTPHONE")}),"스마트폰"]}),(0,t.jsxs)(jq,{children:[(0,t.jsx)(jQ,{checked:"DEVICE"===i.accountInfoTerminalType,disabled:!l,onChange:()=>i.updateAccountInfoTerminalType("DEVICE")}),"단말기"]})]})]}),(0,t.jsxs)(jU,{children:[(0,t.jsx)(jW,{children:"단말기 번호"}),(0,t.jsx)(o.default.Input.Text,{disabled:!l||"DEVICE"!==i.accountInfoTerminalType,placeholder:"번호를 입력해주세요.",style:jA,value:i.accountInfoTerminalNumber,onChange:e=>i.updateAccountInfoDraftField("terminalNumber",e.target.value)})]})]}),!s&&(0,t.jsx)(jB,{children:(0,t.jsxs)(jU,{children:[(0,t.jsx)(jW,{children:"인력 유형"}),(0,t.jsx)(jV,{children:Object.entries(bH.default).map(([e,{label:i}])=>(0,t.jsxs)(jq,{children:[(0,t.jsx)(jQ,{checked:n?.category===e,disabled:!0}),i]},e))})]})})]}),(0,t.jsxs)(jR,{children:[(0,t.jsxs)(jL,{children:[(0,t.jsxs)(jP,{children:[(0,t.jsx)(jN,{children:"급여 관련 사항"}),d&&(0,t.jsx)(nH,{children:"수정 진행중"})]}),d?(0,t.jsxs)(jF,{children:[(0,t.jsxs)(jM,{type:"button",onClick:i.cancelSalaryEdit,children:[(0,t.jsx)(iF.default,{sx:{fontSize:20}}),"수정 취소"]}),(0,t.jsxs)(jM,{type:"button",onClick:()=>void i.saveSalaryEdit(),children:[(0,t.jsx)(lg.default,{sx:{fontSize:20}}),"수정 저장"]})]}):(0,t.jsxs)(jM,{type:"button",disabled:null===n,onClick:i.startSalaryEdit,children:[(0,t.jsx)(nR.default,{sx:{fontSize:20}}),"수정하기"]})]}),(0,t.jsx)(jB,{children:(0,t.jsxs)(jU,{children:[(0,t.jsx)(jW,{children:"퇴직적립금 관련 계약"}),(0,t.jsx)(jV,{children:jT.map(e=>(0,t.jsxs)(jq,{children:[(0,t.jsx)(jQ,{checked:f===e.key,disabled:!d,onChange:()=>i.updateSelectedEmploymentContractDraftField("retirementReserveContractType",e.key)}),e.label]},e.key))})]})}),(0,t.jsxs)(jB,{children:[(0,t.jsxs)(jH,{children:[(0,t.jsx)(jW,{children:"소득세 구분"}),(0,t.jsxs)(jG,{children:[jS.map(e=>(0,t.jsxs)(jq,{children:[(0,t.jsx)(jQ,{checked:h===e.key,disabled:!d,onChange:()=>i.updateSelectedEmploymentContractDraftField("incomeTaxCategory",e.key)}),e.label]},e.key)),(0,t.jsx)(o.default.Input.Text,{disabled:!d,placeholder:"금액을 입력하세요.",style:jJ,value:null===i.selectedEmploymentContractDraftIncomeTaxFlatAmount?"":String(i.selectedEmploymentContractDraftIncomeTaxFlatAmount),onChange:e=>{let t=e.target.value;i.updateSelectedEmploymentContractDraftField("incomeTaxFlatAmount",""===t?void 0:Number(t))}}),(0,t.jsx)(jX,{children:"원"})]})]}),(0,t.jsxs)(jU,{$width:184,children:[(0,t.jsx)(jW,{children:"소득세 적용비율"}),(0,t.jsxs)(jK,{children:[(0,t.jsx)(o.default.Input.Text,{disabled:!d,placeholder:"100",style:j0,value:null===i.selectedEmploymentContractDraftIncomeTaxRate?"":String(i.selectedEmploymentContractDraftIncomeTaxRate),onChange:e=>{let t=e.target.value;i.updateSelectedEmploymentContractDraftField("incomeTaxRate",""===t?void 0:Number(t))}}),(0,t.jsx)(jX,{children:"%"})]})]})]}),(0,t.jsx)(jB,{children:(0,t.jsxs)(jU,{children:[(0,t.jsx)(jW,{children:"비과세급여 적용"}),(0,t.jsx)(jV,{children:(0,t.jsxs)(jq,{children:[(0,t.jsx)(jZ,{checked:i.selectedEmploymentContractDraftIsNonTaxableExclusionTarget,disabled:!d,onChange:e=>i.updateSelectedEmploymentContractDraftField("isNonTaxableExclusionTarget",e.target.checked)}),"비과세 처리 적용대상 제외"]})})]})}),(0,t.jsx)(jB,{children:(0,t.jsxs)(jU,{$width:338,children:[(0,t.jsx)(jW,{children:"연월차수당 지급방식"}),(0,t.jsx)(jV,{children:jk.map(e=>(0,t.jsxs)(jq,{children:[(0,t.jsx)(jQ,{checked:p===e.key,disabled:!d,onChange:()=>i.updateSelectedEmploymentContractDraftField("leaveAllowancePaymentMethod",e.key)}),e.label]},e.key))})]})})]}),(0,t.jsxs)(jR,{children:[(0,t.jsxs)(jL,{children:[(0,t.jsxs)(jP,{children:[(0,t.jsx)(jN,{children:"사회보험"}),r&&(0,t.jsx)(nH,{children:"수정 진행중"})]}),r?(0,t.jsxs)(jF,{children:[(0,t.jsxs)(jM,{type:"button",onClick:i.cancelSocialInsuranceEdit,children:[(0,t.jsx)(iF.default,{sx:{fontSize:20}}),"수정 취소"]}),(0,t.jsxs)(jM,{type:"button",onClick:()=>void i.saveSocialInsuranceEdit(),children:[(0,t.jsx)(lg.default,{sx:{fontSize:20}}),"수정 저장"]})]}):(0,t.jsxs)(jM,{type:"button",disabled:null===n,onClick:i.startSocialInsuranceEdit,children:[(0,t.jsx)(nR.default,{sx:{fontSize:20}}),"수정하기"]})]}),(0,t.jsxs)(j1,{children:[(0,t.jsxs)(j2,{children:[(0,t.jsx)(j6,{children:"구분"}),(0,t.jsx)(j6,{children:"가입 여부"}),(0,t.jsx)(j6,{children:"보수월액(원)"}),(0,t.jsx)(j6,{children:"비고"})]}),jE.map(({key:e,label:n})=>(0,t.jsxs)(j4,{children:[(0,t.jsx)(j5,{children:n}),(0,t.jsx)(j5,{children:(0,t.jsxs)(j3,{children:[(0,t.jsx)(jZ,{checked:i.selectedEmploymentContractDraftIsInsuranceApplicable,disabled:!r,onChange:e=>i.updateSelectedEmploymentContractDraftField("isInsuranceApplicable",e.target.checked)}),"가입"]})}),(0,t.jsx)(j5,{children:(0,t.jsx)(j9,{value:"",readOnly:!0})}),(0,t.jsx)(j5,{children:(0,t.jsx)(j9,{value:"",readOnly:!0})})]},e))]})]})]})}),j$=l.default.div.withConfig({componentId:"zh__sc-5f426f6a-0"})`
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
`,jR=l.default.section.withConfig({componentId:"zh__sc-5f426f6a-1"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;
`,jL=l.default.div.withConfig({componentId:"zh__sc-5f426f6a-2"})`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;

  min-height: 40px;
`,jN=l.default.h3.withConfig({componentId:"zh__sc-5f426f6a-3"})`
  font-size: 18px;
  font-weight: 700;
  line-height: 20px;
  color: #101828;
`,jP=l.default.div.withConfig({componentId:"zh__sc-5f426f6a-4"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,jF=l.default.div.withConfig({componentId:"zh__sc-5f426f6a-5"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,jM=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-5f426f6a-6"})`
  display: flex;
  gap: 4px;
  align-items: center;

  height: 40px;
  padding: 8px 16px;
`,jB=l.default.div.withConfig({componentId:"zh__sc-5f426f6a-7"})`
  display: flex;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;

  min-height: 59px;
`,jU=l.default.div.withConfig({componentId:"zh__sc-5f426f6a-8"})`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
  align-self: stretch;

  min-width: 0;

  ${({$width:e})=>void 0!==e?`
        flex: none;
        width: ${e}px;
      `:`
        flex: 1;
      `}
`,jW=l.default.div.withConfig({componentId:"zh__sc-5f426f6a-9"})`
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  color: #000;
`,jY=(0,l.default)(o.default.Input.Select).withConfig({componentId:"zh__sc-5f426f6a-10"})`
  color: ${({$isEmptySelected:e})=>e?"#9ca3af":"#0a0a0a"};

  &&:disabled {
    color: ${({$isEmptySelected:e})=>e?"#9ca3af":"#0a0a0a"};
  }
`,jV=l.default.div.withConfig({componentId:"zh__sc-5f426f6a-11"})`
  display: flex;
  gap: 12px;
  align-items: center;
  height: 36px;
`,jH=(0,l.default)(jU).withConfig({componentId:"zh__sc-5f426f6a-12"})``,jG=(0,l.default)(jV).withConfig({componentId:"zh__sc-5f426f6a-13"})``,jK=l.default.div.withConfig({componentId:"zh__sc-5f426f6a-14"})`
  display: flex;
  gap: 4px;
  align-items: center;
  height: 36px;
`,jX=l.default.span.withConfig({componentId:"zh__sc-5f426f6a-15"})`
  flex-shrink: 0;

  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  color: #000;
`,jq=l.default.label.withConfig({componentId:"zh__sc-5f426f6a-16"})`
  display: inline-flex;
  gap: 4px;
  align-items: center;
  white-space: nowrap;
`,jQ=(0,l.default)(o.default.Input.Radio).withConfig({componentId:"zh__sc-5f426f6a-17"})`
  width: 20px;
  height: 20px;
`,jZ=(0,l.default)(o.default.Input.Check).attrs({$iconSizeRatio:1.5}).withConfig({componentId:"zh__sc-5f426f6a-18"})`
  width: 24px;
  height: 24px;
`,jJ={...jA,flex:"none",width:160},j0={...jA,flex:"none",width:"100%"},j1=l.default.div.withConfig({componentId:"zh__sc-5f426f6a-19"})`
  overflow: hidden;
  align-self: stretch;
`,j2=l.default.div.withConfig({componentId:"zh__sc-5f426f6a-20"})`
  display: grid;
  grid-template-columns: 1fr 1.15fr 1.35fr 1.35fr;
  border-bottom: 1px solid #e5e7eb;
  background: #f3f4f6;
`,j6=l.default.div.withConfig({componentId:"zh__sc-5f426f6a-21"})`
  display: flex;
  align-items: center;
  justify-content: center;

  min-height: 32px;

  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  color: #0a0a0a;
`,j4=l.default.div.withConfig({componentId:"zh__sc-5f426f6a-22"})`
  display: grid;
  grid-template-columns: 1fr 1.15fr 1.35fr 1.35fr;
  min-height: 64px;

  &:not(:last-child) {
    border-bottom: 1px solid #e5e7eb;
  }
`,j5=l.default.div.withConfig({componentId:"zh__sc-5f426f6a-23"})`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 8px 12px;

  font-size: 16px;
  line-height: 20px;
  color: #0a0a0a;
`,j3=l.default.label.withConfig({componentId:"zh__sc-5f426f6a-24"})`
  display: inline-flex;
  gap: 8px;
  align-items: center;
`,j9=(0,l.default)(o.default.Input.Text).withConfig({componentId:"zh__sc-5f426f6a-25"})`
  width: 100%;
  height: 36px;
  padding: 4px 16px;
`,j8={status:"WAITING_TO_LINK",badge:{label:"연동 대기",color:"lightBlue"},action:{label:"연동 대기중...",color:"blue",disabled:!0}};function j7(e){return null!==e&&"string"==typeof e.id&&""!==e.id}function we(e,t){return 0===t||0===e?"unchecked":e===t?"checked":"indeterminate"}function wt({status:e,onClick:n}){return(0,t.jsx)(ww,{$status:e,onClick:n,children:"checked"===e?(0,t.jsx)(lg.default,{sx:{fontSize:18}}):"indeterminate"===e?(0,t.jsx)(oD,{sx:{fontSize:20}}):null})}let wn=(0,n.observer)(function(){let e=a.default.modal.serviceWorkerDetail,n=e.documentTemplateListStatus,l=e.employmentContractDocumentListStatus,d=e.documentTemplates,o=e.employmentContractDocuments,r=e.selectedEmploymentContractId,[s,c]=(0,i.useState)(new Set),[f,h]=(0,i.useState)(!1),p=(0,i.useMemo)(()=>{let e=new Map;return o.forEach(t=>{let n=e.get(t.templateId);(void 0===n||t.createdAt>n.createdAt||t.createdAt===n.createdAt&&t.id>n.id)&&e.set(t.templateId,t)}),e},[o]),u=(0,i.useMemo)(()=>d.map(e=>{let t=p.get(e.id)??null;return{phaseGroup:e.phaseGroup,phaseGroupLabel:e.phaseGroupLabel,templateId:e.id,templateName:t?.templateName??e.name,templateImagePath:e.templateImagePath,document:t}}),[p,d]),x=(0,i.useMemo)(()=>{let e=new Map;return u.forEach(t=>{let n=e.get(t.phaseGroup);void 0===n?e.set(t.phaseGroup,{key:t.phaseGroup,label:t.phaseGroupLabel,cards:[t]}):n.cards.push(t)}),Array.from(e.values())},[u]),g=(0,i.useMemo)(()=>Array.from(new Set(u.flatMap(e=>j7(e.document)?[e.document.id]:[]))),[u]),m=g.filter(e=>s.has(e)).length,b=we(m,g.length),j=e=>{c(t=>{let n=new Set(t);return e.forEach(e=>n.add(e)),n})},w=e=>{c(t=>{let n=new Set(t);return e.forEach(e=>n.delete(e)),n})},y=e=>{let t=new Set(e);return u.filter(e=>j7(e.document)&&t.has(e.document.id))},_=async t=>{let n=e.serviceWorkerId;if(null===n)return a.default.ui.layout.toast.error("제공인력 정보를 찾을 수 없어 출력을 진행할 수 없습니다."),null;let i=Array.from(new Set(t.filter(e=>null!==e.document&&"AUTO_CREATED"===e.document.status).map(e=>e.document.id)));if(0===i.length)return!1;let l=await Promise.all(i.map(e=>l4.default.data.serviceWorker.patchDocument({id:n,documentId:e,payload:{fields:[]}}))),d=l.find(([e])=>null!==e)?.[0]??null;return null!==d?(a.default.ui.layout.toast.error(d.message??"서류 상태 저장에 실패했습니다."),null):(await a.default.data.serviceWorker.employmentContractDocumentList.refetch(),!0)},v=async e=>{let{document:t}=e;if(null===t)return null;let[n,i]=await l4.default.data.serviceWorker.getDocumentTemplate({templateId:e.templateId});return null!==n||null===i?null:i.map(e=>{let n=t.inputData.find(t=>t.page===e.page&&t.fieldKey===e.fieldKey);return{...e,value:n?.value??null}})},C=async(e,t)=>{if(0!==e.length){h(!0);try{let n=y(e),i=await _(n);if(null===i)return;i&&await new Promise(e=>{window.setTimeout(e,600)});let l=y(e),d=[],o=[],r=0;for(let e of l){let t=await v(e);if(null===t)return void a.default.ui.layout.toast.error(`서류 서식 정보를 불러오지 못했습니다. (${e.templateName})`);(e.templateImagePath??[]).forEach((n,i)=>{if(""===n)return;let l=i+1;r+=1,d.push({id:`${e.document.id}-${l}`,templateId:e.templateId,imagePath:n,page:r}),t.filter(e=>e.page===l).forEach(e=>{o.push({...e,id:e.id,page:r})})})}if(0===d.length)return void a.default.ui.layout.toast.error("출력할 서류 이미지가 없습니다.");let s=1===l.length?l[0]?.templateName??"제공인력 서류 출력":`제공인력 서류 ${l.length}건`,f=!1;await (0,he.renderDocumentPrintView)({pages:d,fields:o,printTitle:s,onImageLoadFailure:e=>{f=!0,a.default.ui.layout.toast.error(`서류 이미지 ${e}개 로딩에 실패하여 출력을 중단했습니다.`)}}),t&&!f&&c(new Set)}finally{h(!1)}}};return null===r?(0,t.jsx)(wj,{children:"선택 가능한 계약이 없습니다."}):("loading"===n||"loading"===l)&&0===u.length?(0,t.jsx)(wj,{children:"서류 목록을 불러오는 중입니다."}):"error"===n||"error"===l?(0,t.jsx)(wj,{children:"서류 목록을 불러오지 못했습니다. 잠시 후 다시 시도해 주세요."}):0===u.length?(0,t.jsx)(wj,{children:"등록된 서류가 없습니다."}):(0,t.jsxs)(wi,{children:[(0,t.jsxs)(wl,{children:[(0,t.jsxs)(wd,{onClick:()=>{"checked"===b?w(g):j(g)},children:[(0,t.jsx)(wt,{status:b}),"전체 선택하기"]}),(0,t.jsxs)(wa,{children:[(0,t.jsxs)(wo,{disabled:0===m||f,onClick:()=>void C(Array.from(s),!0),children:[(0,t.jsx)(oX.default,{sx:{fontSize:16}}),"선택한 서류 출력하기"]}),(0,t.jsxs)(wo,{disabled:0===g.length||f,onClick:()=>void C(g,!1),children:[(0,t.jsx)(oX.default,{sx:{fontSize:16}}),"전체 출력하기"]})]})]}),x.map(e=>(0,t.jsxs)(wr,{children:[(0,t.jsxs)(ws,{onClick:()=>{let t=e.cards.flatMap(e=>j7(e.document)?[e.document.id]:[]);"checked"===we(t.filter(e=>s.has(e)).length,t.length)?w(t):j(t)},children:[(0,t.jsx)(wt,{status:we(e.cards.filter(e=>j7(e.document)&&s.has(e.document.id)).length,e.cards.filter(e=>j7(e.document)).length)}),"[",e.label,"]"]}),(0,t.jsx)(wc,{children:e.cards.map(e=>{let n=e.templateImagePath?.[0]??null,i=j7(e.document)&&s.has(e.document.id),l=null===e.document?j8:(0,rw.getServiceWorkerDocumentStatusUi)(e.document.badgeLabel,e.document.actionLabel);return(0,t.jsxs)(wf,{children:[(0,t.jsx)(wh,{children:(0,t.jsx)(wt,{status:i?"checked":"unchecked",onClick:()=>{var t;j7(e.document)&&(t=e.document.id,c(e=>{let n=new Set(e);return n.has(t)?n.delete(t):n.add(t),n}))}})}),(0,t.jsxs)(wp,{$color:l.badge.color,children:[l.badge.icon,l.badge.label]}),(0,t.jsx)(wu,{children:null!==n&&""!==n?(0,t.jsx)(oI.default,{src:n,width:210,height:297,style:{width:"auto",height:"90%",maxWidth:"90%",objectFit:"contain"},loading:"eager",alt:e.templateName}):(0,t.jsx)(oT,{size:40,color:"#D1D5DC"})}),(0,t.jsxs)(wx,{children:[(0,t.jsx)(wg,{children:(0,t.jsx)(wm,{children:e.templateName})}),(0,t.jsx)(wb,{$color:l.action.color,disabled:!0===l.action.disabled||f||null===n||""===n,onClick:()=>{null!==e.document&&a.default.modal.documentView.openServiceWorkerDocument(e.document.id,{templateId:e.templateId})},children:null===n||""===n?"이미지 없음":l.action.label})]})]},e.templateId)})})]},e.key))]})}),wi=l.default.div.withConfig({componentId:"zh__sc-10675099-0"})`
  overflow-y: auto;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 20px;

  width: 100%;
  min-height: 0;
  padding: 24px;

  background: #fcfdff;
`,wl=l.default.div.withConfig({componentId:"zh__sc-10675099-1"})`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;
`,wa=l.default.div.withConfig({componentId:"zh__sc-10675099-2"})`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: flex-end;
`,wd=l.default.button.withConfig({componentId:"zh__sc-10675099-3"})`
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
`,wo=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-10675099-4"})`
  display: flex;
  gap: 4px;
  align-items: center;

  height: 40px;
  padding: 8px 16px;

  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: #4f39f6;
`,wr=l.default.div.withConfig({componentId:"zh__sc-10675099-5"})`
  display: flex;
  flex-direction: column;
  gap: 9px;
  align-items: flex-start;
  align-self: stretch;
`,ws=l.default.div.withConfig({componentId:"zh__sc-10675099-6"})`
  cursor: pointer;

  display: flex;
  gap: 8px;
  align-items: center;

  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  color: #0a0a0a;
`,wc=l.default.div.withConfig({componentId:"zh__sc-10675099-7"})`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: stretch;
  align-self: stretch;
`,wf=l.default.div.withConfig({componentId:"zh__sc-10675099-8"})`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 188px;
  height: 232px;
  border: 1px solid #d1d5dc;
  border-radius: 8px;

  background: #fff;
`,wh=l.default.div.withConfig({componentId:"zh__sc-10675099-9"})`
  position: absolute;
  z-index: 1;
  top: 8px;
  left: 8px;
`,wp=l.default.div.withConfig({componentId:"zh__sc-10675099-10"})`
  position: absolute;
  top: 8px;
  right: 8px;

  display: inline-flex;
  gap: 4px;
  align-items: center;

  padding: 4px 6px;
  border-radius: 99px;

  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  color: #fff;

  background: ${({$color:e})=>{switch(e){case"lightBlue":return"#9FBFFF";case"orange":return"#FF6900";case"gray":return"#77798B";case"black":return"#0a0a0a";default:return"#2264E8"}}};
`,wu=l.default.div.withConfig({componentId:"zh__sc-10675099-11"})`
  overflow: hidden;
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: center;

  height: 140px;
  border-radius: 7px 7px 0 0;

  background: #f3f4f6;
`,wx=l.default.div.withConfig({componentId:"zh__sc-10675099-12"})`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  gap: 2px;
  align-items: center;
  align-self: stretch;
  justify-content: center;

  padding: 8px;
`,wg=l.default.div.withConfig({componentId:"zh__sc-10675099-13"})`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: center;
`,wm=l.default.div.withConfig({componentId:"zh__sc-10675099-14"})`
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
`,wb=l.default.button.withConfig({componentId:"zh__sc-10675099-15"})`
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
`,wj=l.default.div.withConfig({componentId:"zh__sc-10675099-16"})`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;

  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: #4b5563;
`,ww=l.default.div.withConfig({componentId:"zh__sc-10675099-17"})`
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
`,wy=(0,n.observer)(function(){let e=a.default.modal.serviceWorkerDetail;return(0,t.jsx)(w_,{role:"tablist","aria-label":"제공인력 상세 탭",children:e.tabs.map(n=>(0,t.jsx)(wv,{type:"button",role:"tab","aria-selected":n.active,$active:n.active,onClick:()=>e.setActiveTab(n.key),children:n.label},n.key))})}),w_=l.default.div.withConfig({componentId:"zh__sc-53613c76-0"})`
  display: flex;
  align-self: flex-start;

  width: 100%;
  height: 56px;
  border-bottom: 1px solid #e5e7eb;

  background-color: #fff;
`,wv=l.default.button.withConfig({componentId:"zh__sc-53613c76-1"})`
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
`;var wC=e.i(37163),wI=e.i(19740);function wz({isOpen:e,onCancel:n,onConfirm:i}){return e?(0,t.jsx)(d.default,{children:(0,t.jsxs)(wT,{children:[(0,t.jsxs)(wS,{children:[(0,t.jsx)(wk,{children:"계약 정보를 저장할까요?"}),(0,t.jsxs)(wE,{children:["수정된 정보는 연결된 서류의 자동입력 항목에 함께 반영됩니다.","\n","이미 출력했거나 최종확인한 서류는 다시 확인이 필요할 수 있습니다."]})]}),(0,t.jsxs)(wD,{children:[(0,t.jsx)(wO,{type:"button",onClick:n,children:"취소하기"}),(0,t.jsx)(w$,{type:"button",onClick:i,children:"저장 및 모든 서류에 반영"})]})]})}):null}let wT=l.default.div.withConfig({componentId:"zh__sc-e1c0716c-0"})`
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
`,wS=l.default.div.withConfig({componentId:"zh__sc-e1c0716c-1"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;
`,wk=l.default.p.withConfig({componentId:"zh__sc-e1c0716c-2"})`
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  color: #000;
`,wE=l.default.p.withConfig({componentId:"zh__sc-e1c0716c-3"})`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: #000;
  white-space: pre-line;
`,wD=l.default.div.withConfig({componentId:"zh__sc-e1c0716c-4"})`
  display: flex;
  gap: 12px;
  align-items: center;
  align-self: stretch;
  justify-content: flex-end;
`,wA=l.css`
  height: 36px;
  padding: 8px 16px;
  font-size: 16px;
`,wO=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-e1c0716c-5"})`
  ${wA}
`,w$=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-e1c0716c-6"})`
  ${wA}
`;function wR({isOpen:e,title:n,description:i,onCancel:l,onConfirm:a}){return e?(0,t.jsx)(d.default,{children:(0,t.jsxs)(wL,{children:[(0,t.jsxs)(wN,{children:[(0,t.jsx)(wP,{children:n}),(0,t.jsx)(wF,{children:i})]}),(0,t.jsxs)(wM,{children:[(0,t.jsx)(wU,{type:"button",onClick:l,children:"취소하기"}),(0,t.jsx)(wW,{type:"button",onClick:a,children:"변경하기"})]})]})}):null}let wL=l.default.div.withConfig({componentId:"zh__sc-b641051-0"})`
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
`,wN=l.default.div.withConfig({componentId:"zh__sc-b641051-1"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;
`,wP=l.default.p.withConfig({componentId:"zh__sc-b641051-2"})`
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  color: #000;
`,wF=l.default.p.withConfig({componentId:"zh__sc-b641051-3"})`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: #000;
  white-space: pre-line;
`,wM=l.default.div.withConfig({componentId:"zh__sc-b641051-4"})`
  display: flex;
  gap: 12px;
  align-items: center;
  align-self: stretch;
  justify-content: flex-end;
`,wB=l.css`
  height: 36px;
  padding: 8px 16px;
  font-size: 16px;
`,wU=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-b641051-5"})`
  ${wB}
`,wW=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-b641051-6"})`
  ${wB}
`,wY=e=>{if(null===e||!pU.default.brand.calendarDateString.is(e))return"-";let[t,n,i]=e.split("-");return`${t}년 ${Number(n)}월 ${Number(i)}일`},wV=e=>e in xK.default,wH=(0,n.observer)(function(){var e;let[n,l]=(0,i.useState)(!1),[d,o]=(0,i.useState)(!1),[s,c]=(0,i.useState)(!1),f=a.default.modal.serviceWorkerDetail,h=f.serviceWorker,p=h?.name??"",u=h?.status,x=h?.firstRegisteredDate??null,g=f.employmentContractStatusOptions,m=f.selectedEmploymentContractStatus??"UNCONTRACTED",b=f.selectedEmploymentContractDraftStatus??"",j=f.selectedEmploymentContractExpirationReminder,w=f.employmentContractRoundOptions,y=f.selectedEmploymentContractId??"",_=f.isEmploymentContractEditing,v=f.selectedEmploymentContractDraftContractStartDate??"",C=f.selectedEmploymentContractDraftContractEndDate??"",I=f.selectedEmploymentContract,z=I?.serviceType,T=null===(e=z??null)?null:Object.keys(xK.default).filter(wV).find(t=>xK.BUSINESS_TYPE_SERVICE_TYPES[t].includes(e))??null,S=I?.contractStartDate??null,k=I?.contractEndDate??null,E=m===wC.default.COMPLETED,D=b===wC.default.TERMINATED,A=(0,nT.getTodayCalendarDateString)(),O=A.replaceAll("-","."),$=`${S?.replaceAll("-",".")??"-"} ~ ${k?.replaceAll("-",".")??"-"}`,R=wY(x),L=wY(S),N=null===k?null:wY(k),P=(0,nT.getEmploymentContractTenureLabel)(h?.employmentContracts??[]);return null===h||void 0===u?null:(0,t.jsxs)(wG,{children:[(0,t.jsxs)(wK,{children:[(0,t.jsx)(w0,{children:p}),(0,t.jsxs)(w1,{children:[(0,t.jsx)(w2,{children:wI.SERVICE_WORKER_STATUS[u]}),(0,t.jsx)(w2,{children:null===T||null==z?"-":`${xK.default[T].label} ${r.default[z].label}${"MEAL"===z||"NUTRITION"===z?"관리":""} 서비스 - ${r.default[z].code}`})]}),(0,t.jsx)(w6,{children:_?(0,t.jsx)(w4,{children:"수정 진행중"}):null}),(0,t.jsx)(w5,{children:_?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(w3,{type:"button",onClick:()=>{f.cancelEmploymentContractEdit()},children:[(0,t.jsx)(iF.default,{sx:{fontSize:20}}),"수정 취소"]}),(0,t.jsxs)(w3,{type:"button",onClick:()=>{l(!0)},children:[(0,t.jsx)(lg.default,{sx:{fontSize:20}}),"수정 저장"]})]}):(0,t.jsxs)(w3,{type:"button",disabled:E||null===I,onClick:()=>{E||null===I||f.startEmploymentContractEdit()},children:[(0,t.jsx)(nR.default,{sx:{fontSize:20}}),"수정하기"]})})]}),(0,t.jsx)(w9,{children:(0,t.jsxs)(w8,{children:[(0,t.jsx)(w7,{children:"계약 상태"}),(0,t.jsxs)(yt,{value:_?b:m,disabled:!_||null===I,onChange:e=>{let t=e.target.value;if(""!==t){if(t===wC.default.TERMINATED&&t!==b)return void o(!0);if(t===wC.default.ACTIVE&&t!==b)return void c(!0);f.updateSelectedEmploymentContractDraftStatus(t)}},children:[null===I?(0,t.jsx)("option",{value:"UNCONTRACTED",children:"미계약"}):null,0===g.length&&null!==I?(0,t.jsx)("option",{value:"",children:"-"}):null,g.map(e=>(0,t.jsx)("option",{value:e.value,children:e.label},e.value))]}),null===I?(0,t.jsxs)(wQ,{type:"button",onClick:()=>{a.default.modal.serviceWorkerCreate.show("contract",a.default.serviceWorker.info.byServiceWorker.currentServiceType??"MEAL"),f.close()},children:[(0,t.jsx)(B.default.ContractEdit,{size:16}),"계약하기"]}):null,null!==j?(0,t.jsxs)(wq,{children:[(0,t.jsxs)(d5.default,{$color:j.color,children:["계약 만료 ",j.remainingDays,"일 남음"]}),(0,t.jsxs)(wQ,{type:"button",onClick:()=>{a.default.modal.serviceWorkerCreate.show("renew"),a.default.modal.serviceWorkerDetail.close()},children:[(0,t.jsx)(B.default.ContractEdit,{size:16}),"재계약 하기"]})]}):null]})}),(0,t.jsx)(w9,{children:(0,t.jsxs)(w8,{children:[(0,t.jsx)(w7,{children:"계약 회차"}),(0,t.jsxs)(yn,{value:y,disabled:_||0===w.length,onChange:e=>{let t=e.target.value;f.setSelectedEmploymentContractId(""===t?null:t)},children:[0===w.length?(0,t.jsx)("option",{value:"",children:"-"}):null,w.map(e=>(0,t.jsx)("option",{value:e.id,children:e.label},e.id))]})]})}),(0,t.jsxs)(w9,{children:[(0,t.jsxs)(w8,{children:[(0,t.jsx)(w7,{children:"접수일"}),(0,t.jsx)(ye,{children:R})]}),(0,t.jsx)(yi,{}),(0,t.jsxs)(w8,{children:[(0,t.jsx)(w7,{children:"계약 기간"}),_?(0,t.jsxs)(wX,{children:[D?(0,t.jsx)(ye,{children:wY(S)}):(0,t.jsx)(wJ,{value:v,readOnly:!1,onChange:e=>{f.updateSelectedEmploymentContractDraftContractStartDate(e)},placeholder:"YYYY-MM-DD"}),(0,t.jsx)(wZ,{children:"~"}),D?(0,t.jsx)(wJ,{value:C,readOnly:!1,onChange:e=>{f.updateSelectedEmploymentContractDraftContractEndDate(e)},placeholder:"YYYY-MM-DD"}):(0,t.jsx)(ye,{children:wY(k)})]}):(0,t.jsx)(ye,{children:null===I?"-":`${L} - ${N??"-"}`})]}),(0,t.jsx)(yi,{}),(0,t.jsxs)(w8,{children:[(0,t.jsx)(w7,{children:"근속기간"}),(0,t.jsx)(ye,{children:P})]})]}),(0,t.jsx)(wR,{isOpen:d,title:"계약 상태를 퇴사로 변경 하시겠습니까?",description:`오늘(${O})로 퇴사 상태로 변경되며, 계약 종료일이 변경됩니다.
퇴사 상태로 변경 시, 계약 시작일은 수정할 수 없으며 계약 종료일은 수정할 수 있습니다.`,onCancel:()=>{o(!1)},onConfirm:()=>{f.updateSelectedEmploymentContractDraftContractEndDate(A),f.updateSelectedEmploymentContractDraftStatus(wC.default.TERMINATED),o(!1)}}),(0,t.jsx)(wR,{isOpen:s,title:"계약중 상태로 되돌리시겠습니까?",description:`이전 계약 기간 (${$})으로 되돌리며, 해지에서 계약중으로 변경됩니다.
계약중일 시, 계약 시작일을 수정할 수 있으며 계약 종료일은 수정할 수 없습니다.`,onCancel:()=>{c(!1)},onConfirm:()=>{f.updateSelectedEmploymentContractDraftStatus(wC.default.ACTIVE),c(!1)}}),(0,t.jsx)(wz,{isOpen:n,onCancel:()=>{l(!1)},onConfirm:()=>{f.saveSelectedEmploymentContractDraft().then(e=>{!0===e&&l(!1)})}})]})}),wG=l.default.div.withConfig({componentId:"zh__sc-3c59ca1c-0"})`
  display: flex;
  flex-direction: column;
  gap: 16px 24px;
  align-items: flex-start;
  align-self: stretch;
  justify-content: center;

  padding: 16px 24px;
  border-bottom: 1px solid #e5e7eb;

  background: #fff;
`,wK=l.default.div.withConfig({componentId:"zh__sc-3c59ca1c-1"})`
  display: flex;
  gap: 16px;
  align-items: center;
  width: 100%;
`,wX=l.default.div.withConfig({componentId:"zh__sc-3c59ca1c-2"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,wq=l.default.div.withConfig({componentId:"zh__sc-3c59ca1c-3"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,wQ=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-3c59ca1c-4"})`
  gap: 8px;
  padding: 0 16px;
`,wZ=l.default.span.withConfig({componentId:"zh__sc-3c59ca1c-5"})`
  font-size: 16px;
  line-height: 24px;
  color: #475467;
`,wJ=(0,l.default)(o.default.Input.Date).attrs({style:{textAlign:"center"}}).withConfig({componentId:"zh__sc-3c59ca1c-6"})`
  width: 180px;
  height: 28px;
  font-size: 16px;
`,w0=l.default.div.withConfig({componentId:"zh__sc-3c59ca1c-7"})`
  font-size: 24px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 83.333% */
  color: #0a0a0a;
`,w1=l.default.div.withConfig({componentId:"zh__sc-3c59ca1c-8"})`
  display: flex;
  gap: 4px;
`,w2=l.default.div.withConfig({componentId:"zh__sc-3c59ca1c-9"})`
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
`,w6=l.default.div.withConfig({componentId:"zh__sc-3c59ca1c-10"})`
  display: flex;
  flex: 1;
`,w4=l.default.div.withConfig({componentId:"zh__sc-3c59ca1c-11"})`
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
`,w5=l.default.div.withConfig({componentId:"zh__sc-3c59ca1c-12"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,w3=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-3c59ca1c-13"})`
  display: flex;
  gap: 4px;
  align-items: center;

  height: 40px;
  padding: 8px 16px;

  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
`,w9=l.default.div.withConfig({componentId:"zh__sc-3c59ca1c-14"})`
  display: flex;
  gap: 12px;
  align-items: center;
`,w8=l.default.div.withConfig({componentId:"zh__sc-3c59ca1c-15"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,w7=l.default.div.withConfig({componentId:"zh__sc-3c59ca1c-16"})`
  font-size: 18px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 111.111% */
  color: #0a0a0a;
`,ye=l.default.div.withConfig({componentId:"zh__sc-3c59ca1c-17"})`
  font-size: 18px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px; /* 111.111% */
  color: #0a0a0a;
`,yt=(0,l.default)(o.default.Input.Select).withConfig({componentId:"zh__sc-3c59ca1c-18"})`
  height: 28px;
`,yn=(0,l.default)(o.default.Input.Select).withConfig({componentId:"zh__sc-3c59ca1c-19"})`
  height: 36px;
`,yi=l.default.div.withConfig({componentId:"zh__sc-3c59ca1c-20"})`
  width: 1px;
  height: 24px;
  background: #dadee6;
`,yl=(0,n.observer)(function(){let e=a.default.modal.serviceWorkerDetail;return"ready"!==e.status||e.isDocumentViewOnly?null:(0,t.jsx)(d.default,{children:(0,t.jsxs)(ya,{children:[(0,t.jsxs)(yd,{children:[(0,t.jsx)(yo,{children:"제공인력 상세보기"}),(0,t.jsxs)(yr,{onClick:e.close,children:[(0,t.jsx)(M.X,{size:16}),"닫기"]})]}),(0,t.jsx)(wH,{}),(0,t.jsx)(wy,{}),(0,t.jsxs)(ys,{children:["basic"===e.activeTab&&(0,t.jsx)(bR,{}),"contract"===e.activeTab&&(0,t.jsx)(jO,{}),"docs"===e.activeTab&&(0,t.jsx)(wn,{})]})]})})}),ya=l.default.div.withConfig({componentId:"zh__sc-731779e3-0"})`
  position: relative;

  display: flex;
  flex-direction: column;
  flex-shrink: 0;

  width: 1050px;
  height: 90vh;
  border-radius: 8px;

  background: #fff;
`,yd=l.default.div.withConfig({componentId:"zh__sc-731779e3-1"})`
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
`,yo=l.default.h2.withConfig({componentId:"zh__sc-731779e3-2"})`
  margin: 0;

  font-size: 18px;
  font-weight: 700;
  font-style: normal;
  line-height: 28px;
  color: #101828;
  letter-spacing: -0.439px;
`,yr=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-731779e3-3"})`
  display: flex;
  gap: 6px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,ys=l.default.div.withConfig({componentId:"zh__sc-731779e3-4"})`
  display: flex;
  flex: 1;
  min-height: 0;
`,yc=(0,n.observer)(function(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(nC,{}),(0,t.jsx)(o6,{}),(0,t.jsx)(h3,{}),(0,t.jsx)(mD,{}),(0,t.jsx)(yl,{}),(0,t.jsx)(hf,{}),(0,t.jsx)(uQ,{})]})});e.s(["default",0,yc],55357)},31239,e=>{"use strict";e.i(3159);var t=e.i(46907),n=e.i(33261),i=e.i(7744),l=e.i(43174);let a=(0,t.observer)(function(){let e=(0,n.usePathname)(),t=(0,n.useRouter)(),a=l.default.ui.layout.targetPathname,d=l.default.data.auth.me.data?.organizationId??null,o=l.default.data.organization.serviceList.query,r=o?.id===d?l.default.data.organization.serviceList.data?.serviceList??null:null,s=r?.some(e=>!0===e.operatingStatus&&("MEAL"===e.type||"NUTRITION"===e.type))??!0;return(0,i.useEffect)(()=>{null!==d&&o?.id!==d&&l.default.data.organization.serviceList.setQuery({id:d})},[d,o?.id]),(0,i.useEffect)(()=>{e&&l.default.ui.layout.setPathname(e)},[e]),(0,i.useEffect)(()=>{null!==a&&(t.push(a),l.default.ui.layout.clearTargetPathname())},[t,a]),(0,i.useEffect)(()=>{let n="/diet-setting"===e||e?.startsWith("/diet-setting/");!s&&n&&r&&t.replace("/client/info/by-client")},[s,e,t,r]),(0,i.useEffect)(()=>{let n="/client/service-provision"===e||e?.startsWith("/client/service-provision/");!s&&n&&r&&t.replace("/client/info/by-client")},[s,e,t,r]),null});e.s(["default",0,a])},44997,e=>{"use strict";var t=e.i(9735);e.i(3159);var n=e.i(46907),i=e.i(94586),l=e.i(33261),a=e.i(7744),d=e.i(4153);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var r=(0,a.forwardRef)(function(e,t){var n=e.color,i=e.size,l=void 0===i?24:i,d=function(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["color","size"]);return a.default.createElement("svg",o({ref:t,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),a.default.createElement("polyline",{points:"6 9 12 15 18 9"}))});function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}r.propTypes={color:d.default.string,size:d.default.oneOfType([d.default.string,d.default.number])},r.displayName="ChevronDown";var c=(0,a.forwardRef)(function(e,t){var n=e.color,i=e.size,l=void 0===i?24:i,d=function(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["color","size"]);return a.default.createElement("svg",s({ref:t,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),a.default.createElement("polyline",{points:"18 15 12 9 6 15"}))});c.propTypes={color:d.default.string,size:d.default.oneOfType([d.default.string,d.default.number])},c.displayName="ChevronUp";var f=e.i(38803),h=e.i(9454),p=e.i(43174);function u(e){return null===e?"/":e.length>1&&e.endsWith("/")?e.slice(0,-1):e}function x(e,t){let n=u(e),i=u(t);return"/"===i?"/"===n:n===i||n.startsWith(`${i}/`)}function g(e,t){return t.startsWith("/")?"/"===e?t:`${u(e)}${t}`:""}function m(e,t){return g(e,t.matchSubpath??t.subpath)}let b=(0,n.observer)(function(){let e=u((0,l.usePathname)()),n=h.default.routes,d=p.default.data.auth.me.data?.organizationId??null,o=p.default.data.organization.serviceList.query,s=o?.id===d?p.default.data.organization.serviceList.data?.serviceList??null:null,f=s?.some(e=>!0===e.operatingStatus&&("MEAL"===e.type||"NUTRITION"===e.type))??!0,[b,L]=(0,a.useState)(()=>Object.fromEntries(n.map((t,n)=>[n,t.children?.some(n=>{let i=m(t.subpath,n);return!!i&&x(e,i)})??!1]))),N=n.map((e,t)=>({route:e,index:t})).filter(({route:e,index:t})=>0!==t&&(f||"/diet-setting"!==e.subpath));return(0,t.jsx)(j,{children:N.map(({route:n,index:l},a)=>{let d=(n.children??[]).filter(e=>f||"/client"!==n.subpath||"/service-provision"!==e.subpath),o=d.length>0,s=d.some(t=>{let i=m(n.subpath,t);return!!i&&x(e,i)}),h=x(e,n.subpath)||s,p=s||(b[l]??!1);return(0,t.jsxs)(w,{children:[(0,t.jsx)(y,{$active:h,$clickable:!!(n.hasPage||o),as:n.hasPage?i.default:"div",href:n.hasPage?n.subpath:void 0,onClick:o?()=>{L(e=>({...e,[l]:!p}))}:void 0,children:(0,t.jsx)(_,{children:(0,t.jsx)(v,{children:(0,t.jsxs)(C,{children:[(0,t.jsx)(I,{children:n.icon?(0,t.jsx)(n.icon,{size:16,color:h?"#4F39F6":"#6E7079"}):null}),(0,t.jsx)(T,{$active:h,children:`${a+1}. ${n.label}`}),o?(0,t.jsx)(z,{children:p?(0,t.jsx)(c,{size:16,color:"#6E7079"}):(0,t.jsx)(r,{size:16,color:"#6E7079"})}):null]})})})}),o&&p?(0,t.jsx)(S,{children:(0,t.jsx)(k,{children:d.map((l,d)=>{let o=g(n.subpath,l.subpath),r=m(n.subpath,l),s=!!r&&x(e,r);return(0,t.jsx)(E,{as:l.hasPage?i.default:"div",href:l.hasPage&&o||void 0,children:(0,t.jsx)(D,{children:(0,t.jsx)(A,{children:(0,t.jsx)(O,{children:(0,t.jsx)($,{children:(0,t.jsx)(R,{$active:s,children:`${a+1}-${d+1}. ${l.label}`})})})})})},`${n.subpath}-${l.subpath}`)})})}):null]},n.subpath)})})}),j=f.default.div.withConfig({componentId:"zh__sc-2fa5d58c-0"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
  align-self: stretch;

  padding: 16px 12px;
`,w=f.default.div.withConfig({componentId:"zh__sc-2fa5d58c-1"})`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
`,y=f.default.div.withConfig({componentId:"zh__sc-2fa5d58c-2"})`
  cursor: ${({$clickable:e})=>e?"pointer":"default"};

  position: relative;

  flex-shrink: 0;

  width: 100%;
  height: 40px;
  border-radius: 8px;

  background: ${({$active:e})=>e?"#F1F0FA":"transparent"};
`,_=f.default.div.withConfig({componentId:"zh__sc-2fa5d58c-3"})`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
  height: 100%;
  padding: 8px 8px 8px 16px;
`,v=f.default.div.withConfig({componentId:"zh__sc-2fa5d58c-4"})`
  flex-shrink: 0;
  width: 100%;
  height: 24px;
`,C=f.default.div.withConfig({componentId:"zh__sc-2fa5d58c-5"})`
  display: flex;
  gap: 10px;
  align-items: center;

  width: 100%;
  height: 100%;
`,I=f.default.div.withConfig({componentId:"zh__sc-2fa5d58c-6"})`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;

  width: 20px;
  height: 20px; /* size-20 */
`,z=(0,f.default)(I).withConfig({componentId:"zh__sc-2fa5d58c-7"})``,T=f.default.div.withConfig({componentId:"zh__sc-2fa5d58c-8"})`
  flex: 1 0 0;

  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: 20px;
  color: ${({$active:e})=>e?"#4F39F6":"#45464E"};
`,S=f.default.div.withConfig({componentId:"zh__sc-2fa5d58c-9"})`
  position: relative;
  flex-shrink: 0;
  align-self: stretch;
`,k=f.default.div.withConfig({componentId:"zh__sc-2fa5d58c-10"})`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
  height: 100%;
`,E=f.default.div.withConfig({componentId:"zh__sc-2fa5d58c-11"})`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  align-items: flex-start;
  justify-content: center;

  width: 100%;
  height: 32px;
  padding: 0 8px 0 44px;
  border-radius: 8px;
`,D=f.default.div.withConfig({componentId:"zh__sc-2fa5d58c-12"})`
  flex-shrink: 0;
  width: 100%;
  height: 24px;
`,A=f.default.div.withConfig({componentId:"zh__sc-2fa5d58c-13"})`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
`,O=f.default.div.withConfig({componentId:"zh__sc-2fa5d58c-14"})`
  display: flex;
  flex: 1 0 0;
  gap: 10px;
  align-items: center;

  min-width: 1px;
  height: 100%;
`,$=f.default.div.withConfig({componentId:"zh__sc-2fa5d58c-15"})`
  overflow: hidden;
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  min-width: 1px;
  height: 100%;
  padding: 1px 0;
`,R=f.default.div.withConfig({componentId:"zh__sc-2fa5d58c-16"})`
  flex-shrink: 0;

  width: 100%;

  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  line-height: 20px;
  color: ${({$active:e})=>e?"#4F39F6":"#45464E"};
`;e.s(["default",0,b],44997)},70552,e=>{"use strict";var t=e.i(9735),n=e.i(39635);e.i(3159);var i=e.i(46907),l=e.i(7744),a=e.i(38803),d=e.i(43174),o=e.i(24045),r=e.i(8179),s=e.i(23416),c=e.i(98273),f=e.i(64954);let h=[".xlsx"];function p(e){return Array.from(e.dataTransfer?.types??[]).includes("Files")}let u=(0,i.observer)(function(){let{isWindowFileDragging:e}=d.default.ui.layout,n=(0,l.useRef)(null),i=(0,l.useRef)(null),a=(0,l.useRef)(null),[f,u]=(0,l.useState)(!1),[z,T]=(0,l.useState)(!1),[S,k]=(0,l.useState)(!1),[E,D]=(0,l.useState)(null),A=f||e;(0,l.useEffect)(()=>()=>{null!==a.current&&clearTimeout(a.current)},[]);let O=e=>{let t,n;null!==e&&(n=(t=e.name.lastIndexOf("."))>=0?e.name.slice(t).toLowerCase():"",(h.includes(n)||(null!==a.current&&clearTimeout(a.current),k(!0),a.current=setTimeout(()=>{k(!1),a.current=null},2e3),0))&&D(e))},$=async()=>{if(null===E||z)return;T(!0);let[e]=await s.default.data.serviceWorker.importActivityRecordsExcel({file:E});if(T(!1),null!==e)return void d.default.ui.layout.toast.error(e.message??"파일 업로드에 실패했습니다. 잠시 후 다시 시도해 주세요.",3e3,n.current);k(!1),D(null);let t=d.default.data.serviceWorker.activityRecordList;null===t.query?t.setQuery({}):await t.refetch(),d.default.ui.layout.toast.success("파일 업로드를 완료했습니다.",3e3,n.current)};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(x,{ref:i,type:"file",accept:".xlsx",onChange:e=>{O(e.target.files?.[0]??null),e.target.value=""}}),(0,t.jsx)(g,{ref:n,children:(0,t.jsxs)(m,{$isDragging:A,$isError:S,$isUploading:z,$isFileSelected:null!==E,onClick:e=>{e.target instanceof HTMLElement&&null!==e.target.closest("button")||null===E&&(z||i.current?.click())},onDragOver:e=>{!p(e)||(e.preventDefault(),z||u(!0))},onDragLeave:e=>{p(e)&&(e.preventDefault(),u(!1))},onDrop:e=>{!p(e)||(e.preventDefault(),z||(u(!1),O(e.dataTransfer.files?.[0]??null)))},children:[null===E?(0,t.jsxs)(t.Fragment,{children:[!1===S&&(0,t.jsx)(o.Upload,{size:20,color:"#4F39F6"}),(0,t.jsx)(b,{$isError:S,children:S?"지원하지 않는 파일 형식입니다.":A?"파일을 여기에 놓으면 업로드 됩니다.":z?"파일을 업로드하고 있습니다.":"[전자바우처 - 서비스 이용내역] 엑셀 파일을 이곳에 끌어다 놓거나 (드래그 앤 드롭), 클릭하여 업로드하세요."}),(0,t.jsx)(j,{children:"지원 파일 형식: 엑셀(.xlsx)"})]}):(0,t.jsxs)(w,{children:[(0,t.jsxs)(y,{children:[(0,t.jsx)(_,{children:(0,t.jsx)(c.default.News,{size:17,color:"#2264E8"})}),(0,t.jsx)(v,{children:E.name})]}),(0,t.jsxs)(C,{type:"button",onClick:()=>{D(null)},disabled:z,children:["삭제",(0,t.jsx)(r.X,{size:14})]})]}),(0,t.jsx)(I,{type:"button",onClick:()=>{$()},disabled:null===E||z,$processing:z,children:"업로드하기"})]})})]})}),x=a.default.input.withConfig({componentId:"zh__sc-280fbc38-0"})`
  display: none;
`,g=a.default.div.withConfig({componentId:"zh__sc-280fbc38-1"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-self: stretch;
`,m=a.default.div.withConfig({componentId:"zh__sc-280fbc38-2"})`
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
`,b=a.default.p.withConfig({componentId:"zh__sc-280fbc38-3"})`
  margin: 0;

  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  color: ${({$isError:e})=>e?"#ff4d4f":"#4f39f6"};
  text-align: center;
`,j=a.default.p.withConfig({componentId:"zh__sc-280fbc38-4"})`
  margin: 0;

  font-size: 12px;
  font-weight: 700;
  font-style: normal;
  line-height: 24px; /* 200% */
  color: #99a1af;
  text-align: center;
`,w=a.default.div.withConfig({componentId:"zh__sc-280fbc38-5"})`
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
`,y=a.default.div.withConfig({componentId:"zh__sc-280fbc38-6"})`
  overflow: hidden;
  display: flex;
  gap: 10px;
  align-items: center;
  align-self: stretch;

  min-width: 0;
`,_=a.default.div.withConfig({componentId:"zh__sc-280fbc38-7"})`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;
  border-radius: 6px;

  background: #fff;
`,v=a.default.div.withConfig({componentId:"zh__sc-280fbc38-8"})`
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;

  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: #0a0a0a;
`,C=a.default.button.withConfig({componentId:"zh__sc-280fbc38-9"})`
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
`,I=(0,a.default)(f.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-280fbc38-10"})`
  align-self: stretch;
  height: 36px;
  padding: 8px 16px;
`,z=(0,i.observer)(function(){let e=d.default.data.auth.me.data?.organizationId??null,i=d.default.data.serviceWorker.activityRecordsLastImportedDate,a=d.default.serviceWorker.serviceRecord.lastImportedDate;return(0,l.useEffect)(()=>{null!==e&&i.query?.organizationId!==e&&i.setQuery({organizationId:e})},[i,i.query?.organizationId,e]),(0,t.jsxs)(T,{children:[(0,t.jsx)(u,{}),(0,t.jsxs)(S,{children:[(0,t.jsxs)(k,{children:[(0,t.jsx)(n.default,{sx:{fontSize:16}}),(0,t.jsx)(E,{children:"가장 최근 엑셀 파일 업로드한 날짜"})]}),(0,t.jsx)(D,{children:a??"-"})]}),(0,t.jsxs)(S,{children:[(0,t.jsxs)(k,{children:[(0,t.jsx)(n.default,{sx:{fontSize:16}}),(0,t.jsx)(E,{children:"전자바우처에서 엑셀 파일 내려받는 과정"})]}),(0,t.jsx)(D,{children:"⑴ 부정결제 찾기 > ⑵ 전자바우처 내역 검색 > ⑶ 매출 및 정산 > ⑷ 바우처 이용내역 조회(신규) > ⑸ 엑셀 다운로드"})]})]})}),T=a.default.div.withConfig({componentId:"zh__sc-f8534ef-0"})`
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
`,S=a.default.div.withConfig({componentId:"zh__sc-f8534ef-1"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  align-self: stretch;

  padding: 16px;
  border: 1px solid #cdd8ec;
  border-radius: 8px;

  background: #f6f8ff;
`,k=a.default.div.withConfig({componentId:"zh__sc-f8534ef-2"})`
  display: flex;
  gap: 4px;
  align-items: center;
`,E=a.default.div.withConfig({componentId:"zh__sc-f8534ef-3"})`
  font-size: 12px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
`,D=a.default.div.withConfig({componentId:"zh__sc-f8534ef-4"})`
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
    ${({$type:e})=>"success"===e?"#86efac":"error"===e?"#fca5a5":"warn"===e?"#facc15":"#93c5fd"};
  border-radius: 8px;

  color: #0f172a;

  background: ${({$type:e})=>"success"===e?"#f0fdf4":"error"===e?"#fef2f2":"warn"===e?"#fefce8":"#eff6ff"};
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