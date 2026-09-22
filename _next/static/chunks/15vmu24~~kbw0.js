(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,48271,e=>{"use strict";var t=e.i(9735);e.i(3159);var n=e.i(46907),i=e.i(7744),l=e.i(43174),a=e.i(7665),d=e.i(4153);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var r=(0,i.forwardRef)(function(e,t){var n=e.color,l=e.size,a=void 0===l?24:l,d=function(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["color","size"]);return i.default.createElement("svg",o({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),i.default.createElement("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),i.default.createElement("circle",{cx:"12",cy:"12",r:"3"}))});function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}r.propTypes={color:d.default.string,size:d.default.oneOfType([d.default.string,d.default.number])},r.displayName="Eye";var c=(0,i.forwardRef)(function(e,t){var n=e.color,l=e.size,a=void 0===l?24:l,d=function(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["color","size"]);return i.default.createElement("svg",s({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),i.default.createElement("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"}),i.default.createElement("line",{x1:"1",y1:"1",x2:"23",y2:"23"}))});c.propTypes={color:d.default.string,size:d.default.oneOfType([d.default.string,d.default.number])},c.displayName="EyeOff";var f=e.i(38803),h=e.i(25521);let p=(0,n.observer)(function(){let{loginId:e,setLoginId:n,loginIdErrMsg:d,password:o,setPassword:s,isShowPwd:f,setIsShowPwd:p,pwdErrMsg:T,login:E}=l.default.auth.login,[S,k]=(0,i.useState)(!1),D=(0,i.useRef)(null),A=(0,i.useRef)(!1),O=(0,i.useRef)(null),L=(0,i.useRef)(null),$=e=>{let t=e.getModifierState("CapsLock");t!==A.current&&(A.current=t,t&&l.default.ui.layout.toast.info("Caps Lock이 켜져 있습니다.",void 0,D.current))};return(0,i.useEffect)(()=>{O.current?.focus()},[]),(0,t.jsx)(u,{children:(0,t.jsxs)(x,{ref:D,children:[(0,t.jsxs)(g,{children:[(0,t.jsx)(a.default,{src:`${h.default.env.PUBLIC_PATH}/icon/logo-symbol.svg`,width:1,height:1,style:{width:85,height:"auto"},loading:"eager",alt:"Logo"}),(0,t.jsxs)(m,{children:[(0,t.jsx)(j,{children:"자이언 허브"}),(0,t.jsx)(b,{children:"기관용"})]})]}),(0,t.jsxs)(_,{children:[(0,t.jsxs)(y,{$error:null!==d,$hasValue:e.length>0,children:[(0,t.jsx)(w,{$error:null!==d,children:"아이디"}),(0,t.jsx)(v,{ref:O,value:e,onChange:e=>n(e.target.value),placeholder:"영문 아이디"})]}),null!==d?(0,t.jsx)(I,{children:d}):null,(0,t.jsxs)(y,{$error:null!==T,$hasValue:o.length>0,children:[(0,t.jsx)(w,{$error:null!==T,children:"비밀번호"}),(0,t.jsx)(v,{ref:L,type:f?"text":"password",value:o,onChange:e=>s(e.target.value),onFocus:()=>k(!0),onBlur:()=>{k(!1),A.current=!1},onKeyDown:e=>{$(e),"Enter"===e.key&&E()},onKeyUp:e=>{$(e)},placeholder:"영문,숫자,특수문자"}),(0,t.jsx)(C,{type:"button",$active:S,$error:null!==T,onClick:()=>p(!f),onFocus:()=>k(!0),onBlur:()=>k(!1),children:f?(0,t.jsx)(r,{size:24}):(0,t.jsx)(c,{size:24})})]}),null!==T?(0,t.jsx)(I,{children:T}):null,(0,t.jsx)(z,{type:"button",onClick:()=>void E(),children:"로그인"})]})]})})}),u=f.default.main.withConfig({componentId:"zh__sc-9eaa5006-0"})`
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
`,j=f.default.span.withConfig({componentId:"zh__sc-9eaa5006-4"})`
  color: #1c1d22;
`,b=f.default.span.withConfig({componentId:"zh__sc-9eaa5006-5"})`
  color: #4f39f6;
`,_=f.default.div.withConfig({componentId:"zh__sc-9eaa5006-6"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,w=f.default.span.withConfig({componentId:"zh__sc-9eaa5006-7"})`
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

  &:focus-within ${w} {
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
`;e.s(["default",0,function({children:e}){let i=(0,n.useRef)(null);return(0,n.useEffect)(()=>(l.default.ui.layout.setAppContainer(i.current),()=>{l.default.ui.layout.setAppContainer(null)}),[]),(0,t.jsx)(a,{ref:i,children:e})}])},69477,e=>{"use strict";var t=e.i(7744),n=e.i(4153);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var l=(0,t.forwardRef)(function(e,n){var l=e.color,a=e.size,d=void 0===a?24:a,o=function(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["color","size"]);return t.default.createElement("svg",i({ref:n,xmlns:"http://www.w3.org/2000/svg",width:d,height:d,viewBox:"0 0 24 24",fill:"none",stroke:void 0===l?"currentColor":l,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),t.default.createElement("polyline",{points:"23 4 23 10 17 10"}),t.default.createElement("path",{d:"M20.49 15a9 9 0 1 1-2.12-9.36L23 10"}))});l.propTypes={color:n.default.string,size:n.default.oneOfType([n.default.string,n.default.number])},l.displayName="RotateCw",e.s(["RotateCw",0,l],69477)},73060,e=>{"use strict";var t=e.i(9735);e.i(3159);var n=e.i(46907),i=e.i(7744),l=e.i(15695),a=e.i(69477),d=e.i(4153);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var r=(0,i.forwardRef)(function(e,t){var n=e.color,l=e.size,a=void 0===l?24:l,d=function(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["color","size"]);return i.default.createElement("svg",o({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),i.default.createElement("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),i.default.createElement("circle",{cx:"12",cy:"7",r:"4"}))});r.propTypes={color:d.default.string,size:d.default.oneOfType([d.default.string,d.default.number])},r.displayName="User";var s=e.i(38803),c=e.i(64954),f=e.i(43174);let h=(0,n.observer)(function(){let{oldestSyncedAt:e,refetchAll:n}=f.default.ui.layout.header,{meNameWithPosition:d,logout:o}=f.default.auth,[s,c]=(0,i.useState)(()=>new Date),[h,y]=(0,i.useState)("idle"),v=(()=>{if(null===e)return null;let t=Math.max(0,Math.floor((s.getTime()-e.getTime())/1e3/60)),n=Math.floor(t/60);return t<60?`오늘 ${t}분 전 최신정보`:`오늘 ${n}시간 전 최신정보`})();(0,i.useEffect)(()=>{if(null===e)return;let t=window.setInterval(()=>{c(new Date)},6e4);return()=>{window.clearInterval(t)}},[e]),(0,i.useEffect)(()=>{if("completed"!==h)return;let e=window.setTimeout(()=>{y("idle")},2e3);return()=>{window.clearTimeout(e)}},[h]);let C=async()=>{y("loading");try{await n(),y("completed")}catch{y("idle")}},I=(()=>{switch(h){case"idle":default:return null;case"loading":return(0,t.jsx)(a.RotateCw,{size:15});case"completed":return(0,t.jsx)(l.Check,{size:20})}})(),z=(()=>{switch(h){case"idle":default:return"최신 정보로 업데이트하기";case"loading":return"업데이트 중";case"completed":return"업데이트 완료"}})(),T=null===e||"idle"!==h;return(0,t.jsxs)(p,{children:[(0,t.jsxs)(u,{children:[null===v?null:(0,t.jsx)(x,{children:v}),(0,t.jsxs)(g,{$status:"loading"===h?"processing":"completed"===h?"success":void 0,onClick:T?void 0:()=>void C(),disabled:T,children:[I,z]})]}),(0,t.jsxs)(m,{children:[null===d?null:(0,t.jsxs)(j,{children:[(0,t.jsx)(b,{children:(0,t.jsx)(r,{size:20,color:"#ff6900"})}),(0,t.jsx)(_,{children:d})]}),(0,t.jsx)(w,{onClick:()=>{o()},children:"로그아웃"})]})]})}),p=s.default.div.withConfig({componentId:"zh__sc-bc883191-0"})`
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
`,j=s.default.div.withConfig({componentId:"zh__sc-bc883191-5"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,b=s.default.div.withConfig({componentId:"zh__sc-bc883191-6"})`
  display: flex;
  align-items: center;
  justify-content: center;

  aspect-ratio: 1/1;
  width: 32px;
  height: 32px;
  padding: 0 6px;
  border-radius: 999px;

  background: #fff4ed;
`,_=s.default.div.withConfig({componentId:"zh__sc-bc883191-7"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: 20px;
  color: #1c1d22;
`,w=(0,s.default)(c.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-bc883191-8"})`
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
`;e.s(["default",0,h],73060)},79109,e=>{"use strict";var t=e.i(9735);e.i(3159);var n=e.i(46907),i=e.i(7744),l=e.i(43174),a=e.i(26170);let d=(0,n.observer)(function(){let{isLoading:e}=l.default.api,[n,d]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{if(!e)return;let t=window.setTimeout(()=>{d(!0)},300);return()=>{d(!1),window.clearTimeout(t)}},[e]),e&&n?(0,t.jsx)(a.default,{isLoading:!0,children:null}):null});e.s(["default",0,d])},55357,e=>{"use strict";var t=e.i(9735);e.i(3159);var n=e.i(46907),i=e.i(7744),l=e.i(38803),a=e.i(43174),d=e.i(26170),o=e.i(64954),r=e.i(7242);let s=function({currentServiceType:e,detectedServiceType:n,isContinueDisabled:i,isOpen:l,onCancel:a,onContinue:d,registrationTarget:o}){if(!l)return null;let s=`${r.default[e].label} 서비스`,j=`${r.default[n].label} 서비스`,b="이용자"===o?"이용자로":"제공인력으로";return(0,t.jsx)(c,{children:(0,t.jsxs)(f,{children:[(0,t.jsxs)(h,{children:[(0,t.jsxs)(p,{children:["[",j,"] ",o,"의 전자바우처입니다."]}),(0,t.jsxs)(u,{children:["현재 [",s,"]에서 ",o," 등록을 진행하고 있습니다.",(0,t.jsx)("br",{}),i?(0,t.jsxs)(t.Fragment,{children:["업로드한 전자바우처는 [",j,"]로 확인되었습니다.",(0,t.jsx)("br",{}),"현재 기관에서 [",j,"]를 운영하고 있지 않아 등록을 계속할 수 없습니다."]}):(0,t.jsxs)(t.Fragment,{children:["업로드한 전자바우처는 [",j,"]로 확인되어, [",j,"]"," ",b," 등록을 계속합니다."]})]})]}),(0,t.jsxs)(x,{children:[(0,t.jsx)(g,{type:"button",onClick:a,children:"등록하지 않고 나가기"}),!i&&(0,t.jsxs)(m,{type:"button",onClick:d,children:["[",j,"]로 계속 등록하기"]})]})]})})},c=l.default.div.withConfig({componentId:"zh__sc-4e4950a7-0"})`
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
`;var j=e.i(15695);let b=(0,n.observer)(function(){let{clientDraft:e,isSaving:n,resetToUploadStep:i,saveClientDraft:l}=a.default.modal.clientCreate,{preserveClientAfterSave:d,resetSort:o,setCurrentServiceType:r,setHighlightedClientId:s}=a.default.client.info.byClient,c=a.default.data.auth.me.data?.name??"",f=async()=>{let t=e?.serviceType,n=await l();if(null===n)return void requestAnimationFrame(()=>{document.querySelector("[data-client-create-field-error]")?.scrollIntoView({block:"center",behavior:"smooth"})});let i=t??null,c="clientId"in n?n.clientId:n.id;null!==i&&(r(i),o(),a.default.data.client.list.setQuery({serviceType:i}),await a.default.data.client.list.refetch()),"string"==typeof c&&c.length>0&&(d(c),s(c))};return(0,t.jsxs)(_,{children:[(0,t.jsxs)(w,{children:[(0,t.jsx)(y,{children:"작성자"}),(0,t.jsxs)(v,{defaultValue:c,children:[(0,t.jsx)("option",{value:"",children:"작성자 선택"}),""!==c&&(0,t.jsx)("option",{value:c,children:c})]})]}),(0,t.jsx)(C,{}),(0,t.jsxs)(I,{children:[(0,t.jsx)(T,{disabled:!e||n,onClick:i,children:"다시 업로드하기"}),(0,t.jsxs)(E,{disabled:!e||n,onClick:()=>void f(),children:[(0,t.jsx)(j.Check,{size:16}),"최종확인 및 저장"]})]})]})}),_=l.default.div.withConfig({componentId:"zh__sc-759c17e6-0"})`
  display: flex;
  gap: 24px;
  align-items: center;
  align-self: stretch;
  justify-content: flex-end;

  padding: 16px;
  border-top: 1px solid #e5e7eb;
`,w=l.default.div.withConfig({componentId:"zh__sc-759c17e6-1"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,y=l.default.label.withConfig({componentId:"zh__sc-759c17e6-2"})`
  font-size: 16px;
  font-weight: 500;
  color: #0a0a0a;
`,v=(0,l.default)(o.default.Input.Select).withConfig({componentId:"zh__sc-759c17e6-3"})`
  min-width: 120px;
  height: 36px;
`,C=l.default.div.withConfig({componentId:"zh__sc-759c17e6-4"})`
  width: 1px;
  height: 24px;
  background: #e5e7eb;
`,I=l.default.div.withConfig({componentId:"zh__sc-759c17e6-5"})`
  display: flex;
  gap: 16px;
  align-items: center;
`,z=l.css`
  display: flex;
  gap: 10px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,T=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-759c17e6-6"})`
  ${z}
`,E=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-759c17e6-7"})`
  ${z}
`,S=(0,n.observer)(function(){let e=a.default.modal.clientCreate;return!0!==e.isContractPeriodOverlapDialogOpen?null:(0,t.jsx)(k,{children:(0,t.jsxs)(D,{children:[(0,t.jsxs)(A,{children:[(0,t.jsx)(O,{children:"계약기간이 중복되어 등록할 수 없습니다."}),(0,t.jsxs)(L,{children:["동일한 이름과 주민등록번호로 등록된 이용자의 계약•서비스 기간 중 겹치는 기간이 있습니다.",(0,t.jsx)("br",{}),"계약•서비스 기간이 겹치지 않도록 수정한 후 다시 등록해주세요."]})]}),(0,t.jsxs)($,{children:[(0,t.jsx)(R,{type:"button",onClick:e.cancelContractPeriodOverlapRegistration,children:"등록 취소하기"}),(0,t.jsx)(P,{type:"button",onClick:e.closeContractPeriodOverlapDialog,children:"계약/서비스 기간 수정하기"})]})]})})}),k=l.default.div.withConfig({componentId:"zh__sc-79ae8371-0"})`
  position: fixed;
  z-index: 3100;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgb(17 24 39 / 36%);
`,D=l.default.div.withConfig({componentId:"zh__sc-79ae8371-1"})`
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
`,A=l.default.div.withConfig({componentId:"zh__sc-79ae8371-2"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;
`,O=l.default.h3.withConfig({componentId:"zh__sc-79ae8371-3"})`
  align-self: stretch;

  margin: 0;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px;
  color: #000;
`,L=l.default.p.withConfig({componentId:"zh__sc-79ae8371-4"})`
  margin: 0;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px;
  color: #000;
`,$=l.default.div.withConfig({componentId:"zh__sc-79ae8371-5"})`
  display: flex;
  gap: 12px;
  align-self: stretch;
  justify-content: flex-end;
`,R=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-79ae8371-6"})`
  display: flex;
  gap: 10px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,P=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-79ae8371-7"})`
  display: flex;
  gap: 10px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`;var N=e.i(74515),M=e.i(4153);function F(){return(F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var U=(0,i.forwardRef)(function(e,t){var n=e.color,l=e.size,a=void 0===l?24:l,d=function(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["color","size"]);return i.default.createElement("svg",F({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),i.default.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),i.default.createElement("polyline",{points:"12 5 19 12 12 19"}))});U.propTypes={color:M.default.string,size:M.default.oneOfType([M.default.string,M.default.number])},U.displayName="ArrowRight";let B=(0,n.observer)(function(){let{analyzeSelectedFile:e,isAnalyzing:n,selectedFile:i}=a.default.modal.clientCreate;return(0,t.jsx)(Y,{children:(0,t.jsxs)(V,{disabled:null===i||n,onClick:()=>{e()},children:["분석 시작",(0,t.jsx)(U,{size:16})]})})}),Y=l.default.div.withConfig({componentId:"zh__sc-d7f6cfb5-0"})`
  display: flex;
  gap: 10px;
  align-self: stretch;
  justify-content: flex-end;
`,V=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-d7f6cfb5-1"})`
  display: flex;
  flex-shrink: 0;
  gap: 10px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`;var W=e.i(8179),H=e.i(98273),G=e.i(25521);let{FILE_EXTENSION_WHITELIST_BY_GROUP:K}=G.default.file,X=(0,n.observer)(function(){var e;let n,{clearSelectedFile:i,selectedFile:l,isAnalyzing:d}=a.default.modal.clientCreate;if(null===l)return null;let o=-1===(n=(e=l.name).lastIndexOf("."))?"":e.slice(n).toLowerCase();return(0,t.jsx)(q,{children:(0,t.jsxs)(Q,{children:[(0,t.jsxs)(Z,{children:[(0,t.jsx)(J,{children:K.IMAGE.some(e=>e===o)?(0,t.jsx)(H.default.Photo,{size:17,color:"#FA8E43"}):K.AUDIO.some(e=>e===o)?(0,t.jsx)(H.default.SpeechToText,{size:17,color:"#A855F7"}):K.DOCUMENT.some(e=>e===o)?(0,t.jsx)(H.default.News,{size:17,color:"#2264E8"}):null}),(0,t.jsx)(ee,{children:(0,t.jsx)(et,{children:l.name})})]}),(0,t.jsxs)(en,{onClick:i,disabled:d,children:["삭제",(0,t.jsx)(W.X,{size:16})]})]},`${l.name}-${l.size}-${l.lastModified}`)})}),q=l.default.div.withConfig({componentId:"zh__sc-8227d071-0"})`
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
`,Q=l.default.div.withConfig({componentId:"zh__sc-8227d071-1"})`
  display: flex;
  flex-shrink: 0;
  gap: 24px;
  align-items: center;

  padding: 12px 16px;
  border-radius: 8px;

  background: #f6f8fb;
`,Z=l.default.div.withConfig({componentId:"zh__sc-8227d071-2"})`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`,J=l.default.div.withConfig({componentId:"zh__sc-8227d071-3"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;
  border-radius: 4px;

  background: #fff;
`,ee=l.default.div.withConfig({componentId:"zh__sc-8227d071-4"})`
  display: flex;
  align-items: center;
  align-self: stretch;

  width: 196px;
  height: 40px;

  color: #0a0a0a;
`,et=l.default.div.withConfig({componentId:"zh__sc-8227d071-5"})`
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #0a0a0a;
`,en=l.default.button.withConfig({componentId:"zh__sc-8227d071-6"})`
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
`;var ei=e.i(24045),el=e.i(9454);function ea(){let[e,n]=(0,i.useState)(0);return(0,i.useEffect)(()=>{let e=performance.now(),t=0,i=l=>{n(Math.min(100*(1-Math.exp(-((l-e)/1e3*.05))),98)),t=window.requestAnimationFrame(i)};return t=window.requestAnimationFrame(i),()=>{window.cancelAnimationFrame(t)}},[]),(0,t.jsx)(ed,{children:(0,t.jsx)(eo,{$progress:e})})}let ed=l.default.div.withConfig({componentId:"zh__sc-aa649b54-0"})`
  overflow: hidden;
  display: flex;

  width: 362px;
  height: ${8}px;
  border-radius: 99px;

  background: #e6e0ff;
  background-color: #e5e2ff;
`,eo=l.default.div.attrs(({$progress:e})=>({style:{transform:`scaleX(${e/100})`}})).withConfig({componentId:"zh__sc-aa649b54-1"})`
  transform-origin: left center;
  width: 100%;
  height: 100%;
  background-color: #5635ff;
`,er=(0,n.observer)(function(){let{isWindowFileDragging:e}=a.default.ui.layout,{selectedFile:n,isError:i,isAnalyzing:l,abortAnalyze:d}=a.default.modal.clientCreate,o=i?"지원하지 않는 파일 형식입니다.":e?"파일을 여기에 놓으면 업로드 됩니다.":l?"업로드한 파일을 분석하고 있습니다.":"이곳에 파일을 끌어다 놓거나 (드래그 앤 드롭), 클릭하여 업로드하세요.",r=null===n||l?"지원 파일 형식: 사진 이미지":"새 파일을 업로드하면 기존 파일이 교체됩니다.";return(0,t.jsxs)(ec,{children:[null===n&&!i&&(0,t.jsx)(ef,{children:(0,t.jsx)(ei.Upload,{size:26,color:es[100]})}),(0,t.jsxs)(eh,{children:[(0,t.jsx)(ep,{$isError:i,children:o}),(0,t.jsx)(eu,{children:r})]}),l&&(0,t.jsx)(ea,{}),l&&(0,t.jsx)(ex,{onClick:d,children:"중단하기"})]})}),{PRIMARY:es}=el.default.style.color,ec=l.default.div.withConfig({componentId:"zh__sc-47e9a3b3-0"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  align-self: stretch;
  justify-content: center;
`,ef=l.default.div.withConfig({componentId:"zh__sc-47e9a3b3-1"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;
`,eh=l.default.div.withConfig({componentId:"zh__sc-47e9a3b3-2"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  align-self: stretch;
  justify-content: center;
`,ep=l.default.div.withConfig({componentId:"zh__sc-47e9a3b3-3"})`
  font-size: 14px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 142.857% */
  color: ${({$isError:e})=>e?"#ff4d4f":"#4f39f6"};
  text-align: center;
`,eu=l.default.div.withConfig({componentId:"zh__sc-47e9a3b3-4"})`
  font-size: 14px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 142.857% */
  color: #99a1af;
`,ex=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-47e9a3b3-5"})`
  display: flex;
  gap: 10px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,eg=(0,n.observer)(function(){let{isWindowFileDragging:e}=a.default.ui.layout,{acceptFileTypes:n,setSelectedFile:l,selectedFile:d,isError:o}=a.default.modal.clientCreate,r=(0,i.useRef)(null);return(0,N.default)(e=>{if(0===e.length)return;let t=e[0];void 0!==t&&l(t)}),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(em,{ref:r,type:"file",accept:n,onChange:e=>{let t=Array.from(e.target.files??[]);if(0===t.length)return;let n=t[0];void 0!==n&&(l(n),e.target.value="")}}),(0,t.jsxs)(ej,{$isWindowFileDragging:e,onDragOver:e=>{e.preventDefault()},onDrop:e=>{e.preventDefault();let t=Array.from(e.dataTransfer.files);if(0===t.length)return;let n=t[0];void 0!==n&&l(n)},onClick:e=>{e.target instanceof HTMLElement&&(e.target.closest("button")||r.current?.click())},$isError:o,children:[null!==d&&(0,t.jsx)(X,{}),(0,t.jsx)(er,{}),(0,t.jsx)(B,{})]})]})}),em=l.default.input.withConfig({componentId:"zh__sc-35541df3-0"})`
  display: none;
`,ej=l.default.div.withConfig({componentId:"zh__sc-35541df3-1"})`
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
`,eb=(0,n.observer)(function(){let{analyzedFile:e,mode:n}=a.default.modal.clientCreate;return(0,t.jsxs)(e_,{$flex1:null===e,children:[null===e&&(0,t.jsx)(ew,{children:"renew"===n?"새로운 전자바우처 캡쳐 화면을 아래에 업로드하고, 다음 버튼을 클릭하세요.":"전자바우처 캡쳐 화면을 아래에 업로드하고, 다음 버튼을 클릭하세요."}),(0,t.jsx)(eg,{})]})}),e_=l.default.div.withConfig({componentId:"zh__sc-8fa7e82c-0"})`
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
`,ew=l.default.div.withConfig({componentId:"zh__sc-8fa7e82c-1"})`
  font-size: 18px;
  font-weight: 700;
  font-style: normal;
  line-height: 24px; /* 133.333% */
  color: #101828;
`,ey="border-highlight-style-tag",ev="border-highlight-sweep",eC="--border-highlight-sweep",eI=`
  linear-gradient(transparent, transparent) padding-box,
  conic-gradient(
    from -90deg,
    #fff 0deg,
    #ede9fe 8deg,
    #a78bfa 22deg,
    #7c3aed calc(var(${eC}) * 0.28),
    #4f39f6 calc(var(${eC}) * 0.45),
    #818cf8 calc(var(${eC}) * 0.65),
    #a78bfa calc(var(${eC}) * 0.8),
    #ddd6fe calc(var(${eC}) * 0.93),
    #fff var(${eC}),
    #fff 360deg
  ) border-box
`,ez=function(){let e=(0,i.useRef)(null),t=(0,i.useRef)(null),n=(0,i.useRef)(null),l=(0,i.useRef)(null),a=(0,i.useRef)(null),d=(0,i.useRef)(null),o=(0,i.useRef)(null),r=(0,i.useCallback)(()=>{null!==l.current&&(window.clearTimeout(l.current),l.current=null),null!==a.current&&(window.cancelAnimationFrame(a.current),a.current=null)},[]),s=(0,i.useCallback)(()=>{let i=e.current,l=t.current,a=n.current;null!==i&&null!==l&&null!==a&&(l.style.top=`${i.offsetTop-1}px`,l.style.left=`${i.offsetLeft-1}px`,l.style.width=`${i.offsetWidth+2}px`,l.style.height=`${i.offsetHeight+2}px`,l.style.borderRadius=window.getComputedStyle(i).borderRadius)},[]),c=(0,i.useCallback)(()=>{let i=e.current;if(null===i)return null;(()=>{if("u"<typeof document||null!==document.getElementById(ey))return;let e=document.createElement("style");e.id=ey,e.textContent=`
    @property ${eC} {
      inherits: false;
      initial-value: 0deg;
      syntax: '<angle>';
    }

    @keyframes ${ev} {
      from {
        ${eC}: 0deg;
      }

      to {
        ${eC}: 360deg;
      }
    }
  `,document.head.append(e)})();let l=i.parentElement;if(null===l)return null;if(n.current=l,null===d.current&&(d.current={position:i.style.position,zIndex:i.style.zIndex}),null===o.current&&(o.current=l.style.position),"static"===window.getComputedStyle(l).position&&(l.style.position="relative"),""===i.style.position&&(i.style.position="relative"),""===i.style.zIndex&&(i.style.zIndex="1"),null===t.current){let e=document.createElement("div");e.style.pointerEvents="none",e.style.position="absolute",e.style.zIndex="0",e.style.boxSizing="border-box",e.style.border="1px solid transparent",e.style.background="none",l.append(e),t.current=e}return s(),t.current},[s]),f=(0,i.useCallback)(()=>{let e=c();null===e||window.matchMedia("(prefers-reduced-motion: reduce)").matches||(r(),e.style.animation="none",e.style.background=eI,e.style.setProperty(eC,"0deg"),e.offsetWidth,a.current=window.requestAnimationFrame(()=>{s(),e.style.animation=`${ev} 600ms ease-in-out forwards`,a.current=null,l.current=window.setTimeout(()=>{e.style.animation="",e.style.background="none",l.current=null},600)}))},[r,c,s]);return(0,i.useEffect)(()=>{let i=e.current,l=n.current,a=t.current,s=d.current,c=o.current;return()=>{r(),null!==a&&(a.style.animation="",a.style.background="none"),a?.remove(),null!==i&&null!==s&&(i.style.position=s.position,i.style.zIndex=s.zIndex),null!==l&&null!==c&&(l.style.position=c)}},[r]),{ref:e,fire:f}},{FILE_EXTENSION_WHITELIST_BY_GROUP:eT}=G.default.file,eE=(0,n.observer)(function(){var e;let n,{analyzedFile:l}=a.default.modal.clientCreate,{ref:d,fire:o}=ez();if((0,i.useEffect)(()=>{null!==l&&o()},[l,o]),null===l)return null;let r=-1===(n=(e=l.name).lastIndexOf("."))?"":e.slice(n).toLowerCase();return(0,t.jsxs)(eS,{ref:d,children:[(0,t.jsxs)(ek,{children:[(0,t.jsxs)(eD,{children:[(0,t.jsx)(H.default.FindInPage,{size:18}),"AI 문서 인식 완료"]}),(0,t.jsxs)(eA,{children:["업로드된 서류들에서 정보를 성공적으로 추출했습니다. ",(0,t.jsx)("br",{}),"우측의 [이용자 기본 정보]가 올바르게 연동되었는지 확인 후, [최종 확인] 버튼을 눌러주세요."]})]}),(0,t.jsxs)(eO,{children:[(0,t.jsxs)(eL,{children:[(0,t.jsx)(H.default.CheckCircle,{size:18}),"분석 완료된 첨부 서류 (1건)"]}),(0,t.jsx)(e$,{children:(0,t.jsxs)(eR,{children:[(0,t.jsxs)(eP,{children:[(0,t.jsx)(eN,{children:eT.IMAGE.some(e=>e===r)?(0,t.jsx)(H.default.Photo,{size:17,color:"#FA8E43"}):eT.AUDIO.some(e=>e===r)?(0,t.jsx)(H.default.SpeechToText,{size:17,color:"#A855F7"}):eT.DOCUMENT.some(e=>e===r)?(0,t.jsx)(H.default.News,{size:17,color:"#2264E8"}):null}),(0,t.jsx)(eM,{children:(0,t.jsx)(eF,{children:l.name})})]}),(0,t.jsx)(eU,{children:"추출 완료"})]},`${l.name}-${l.size}-${l.lastModified}`)})]})]})}),eS=l.default.div.withConfig({componentId:"zh__sc-a40fcee8-0"})`
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
`,ek=l.default.div.withConfig({componentId:"zh__sc-a40fcee8-1"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  align-self: stretch;
`,eD=l.default.div.withConfig({componentId:"zh__sc-a40fcee8-2"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #0a0a0a;
`,eA=l.default.div.withConfig({componentId:"zh__sc-a40fcee8-3"})`
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
`,eO=l.default.div.withConfig({componentId:"zh__sc-a40fcee8-4"})`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  align-self: stretch;

  min-height: 0;
`,eL=l.default.div.withConfig({componentId:"zh__sc-a40fcee8-5"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #0a0a0a;
`,e$=l.default.div.withConfig({componentId:"zh__sc-a40fcee8-6"})`
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
`,eR=l.default.div.withConfig({componentId:"zh__sc-a40fcee8-7"})`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 355px;
  height: 64px;
  padding: 12px 16px;
  border-radius: 8px;

  background: #f6f8fb;
`,eP=l.default.div.withConfig({componentId:"zh__sc-a40fcee8-8"})`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`,eN=l.default.div.withConfig({componentId:"zh__sc-a40fcee8-9"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;
  border-radius: 4px;

  background: #fff;
`,eM=l.default.div.withConfig({componentId:"zh__sc-a40fcee8-10"})`
  display: flex;
  align-items: center;
  align-self: stretch;

  width: 196px;
  height: 40px;

  color: #0a0a0a;
`,eF=l.default.div.withConfig({componentId:"zh__sc-a40fcee8-11"})`
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #0a0a0a;
`,eU=l.default.div.withConfig({componentId:"zh__sc-a40fcee8-12"})`
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
`,eB=(0,n.observer)(function(){let{analyzedFile:e}=a.default.modal.clientCreate;return(0,t.jsxs)(eY,{children:[null!==e&&(0,t.jsx)(eE,{}),(0,t.jsx)(eb,{})]})}),eY=l.default.div.withConfig({componentId:"zh__sc-a077b87a-0"})`
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
`;var eV=e.i(21771);let eW=l.default.div.withConfig({componentId:"zh__sc-1e1c9c9-0"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`,eH=l.default.div.withConfig({componentId:"zh__sc-1e1c9c9-1"})`
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
`,eG=l.default.div.withConfig({componentId:"zh__sc-1e1c9c9-2"})`
  display: flex;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;

  min-height: 59px;
`,eK=l.default.div.withConfig({componentId:"zh__sc-1e1c9c9-3"})`
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
`,eX=l.default.div.withConfig({componentId:"zh__sc-1e1c9c9-4"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #000;
  text-align: center;
`,eq={display:"flex",padding:"4px 16px",alignItems:"center",gap:"10px",flex:"1 0 0",alignSelf:"stretch",fontSize:16},eQ=(0,n.observer)(function(){let{clientDraft:e,updateClientDraft:n}=a.default.modal.clientCreate;return null===e?null:(0,t.jsxs)(eW,{children:[(0,t.jsx)(eH,{children:"보호자 정보"}),(0,t.jsxs)(eG,{children:[(0,t.jsxs)(eK,{$width:260,children:[(0,t.jsx)(eX,{children:"보호자명"}),(0,t.jsx)(o.default.Input.Text,{style:eq,value:e.guardianName??"",onChange:e=>{n(t=>({...t,guardianName:e.target.value}))},placeholder:"보호자 성명을 입력하세요."})]}),(0,t.jsxs)(eK,{$width:260,children:[(0,t.jsx)(eX,{children:"보호자 관계"}),(0,t.jsx)(o.default.Input.Text,{style:eq,value:e.guardianRelationship??"",onChange:e=>{n(t=>({...t,guardianRelationship:e.target.value}))},placeholder:"관계를 입력하세요."})]})]}),(0,t.jsxs)(eG,{children:[(0,t.jsxs)(eK,{children:[(0,t.jsx)(eX,{children:"보호자 휴대폰"}),(0,t.jsx)(o.default.Input.Text,{style:eq,value:e.guardianPhoneNumber??"",onChange:e=>{n(t=>({...t,guardianPhoneNumber:e.target.value}))},placeholder:"휴대폰을 입력해주세요."})]}),(0,t.jsxs)(eK,{children:[(0,t.jsx)(eX,{children:"보호자 연락처"}),(0,t.jsx)(o.default.Input.Contact,{style:eq,value:e.guardianContact??"",onChange:e=>{n(t=>({...t,guardianContact:e}))},placeholder:"연락처를 입력해주세요."})]})]}),(0,t.jsxs)(eK,{children:[(0,t.jsx)(eX,{children:"보호자 주소"}),(0,t.jsx)(o.default.Input.Text,{style:eq,value:e.guardianAddress??"",onChange:e=>{n(t=>({...t,guardianAddress:e.target.value}))},placeholder:"보호자 주소를 입력해주세요."})]})]})}),eZ=e=>{let t=e.trim().match(/^(\d{6})-?(\d)(\d{0,6})$/);if(null===t)return"unknown";switch(t[2]){case"1":case"3":return"MALE";case"2":case"4":return"FEMALE";default:return"unknown"}},eJ=e=>{switch(e){case"MALE":return"남성";case"FEMALE":return"여성";case"unknown":return""}},e0=e=>{switch(e){case"MEAL":return"식사관리 서비스";case"NUTRITION":return"영양관리 서비스";case"DISABILITY_ACTIVITY_SUPPORT":return"장애인 활동지원"}},e1=(0,n.observer)(function(){let{clientDraft:e,ocrDraft:n,updateClientDraft:i,getClientDraftFieldError:l,clearClientDraftFieldError:d}=a.default.modal.clientCreate;if(null===e)return null;let r=e.name??"",s=e.residentRegistrationNumber??"",c=e.businessType??"DAY_CARE",f=e.serviceType??"MEAL",h=e.contractStartDate??"",p=e.contractEndDate??"",u=e.serviceStartDate??"",x=e.serviceEndDate??"",g=e.note??"",m=e.vehicleFuelCostNoticeGiven??!0,j=e.contact??"",b=e.phoneNumber??"",_=e.address??"",w=e.postCode??"",y=e.addressDetail??"",v=(()=>{let e=new Date,[t,n]=eV.default.create(e.getFullYear(),e.getMonth()+1,e.getDate());return null===t?n:null})(),C=eZ(s),I=e0(f),z="DISABILITY_ACTIVITY_SUPPORT"===c?"장애인 활동지원":"일상돌봄 서비스",T="DISABILITY_ACTIVITY_SUPPORT"===f?"활동보조":e0(f),E=(e=>{switch(e){case"MEAL":return"500901";case"NUTRITION":return"500401";case"DISABILITY_ACTIVITY_SUPPORT":return"HWG001"}})(f),S=(e,t)=>""===l(e)?t:{...t,borderColor:"#ff4d4f",background:"#fff5f5"},k=e=>{let n=l(e);return""===n?null:(0,t.jsx)(e9,{"data-client-create-field-error":"true",children:n})},D=(e,t)=>{let n=String(t??"").trim();return""!==n&&String(e).trim()===n},A=(e,t)=>{eV.default.is(e)&&i(n=>t(n,e))};return(0,t.jsxs)(eW,{children:[(0,t.jsx)(eH,{children:"인적사항"}),(0,t.jsxs)(eG,{children:[(0,t.jsxs)(eK,{children:[(0,t.jsxs)(eX,{children:["성명",(0,t.jsx)(e2,{})]}),(0,t.jsx)(o.default.Input.Text,{$autoFilled:D(r,n?.name??""),style:S("name",eq),value:r,onChange:e=>{d("name"),i(t=>({...t,name:e.target.value.trim()}))},placeholder:"성명을 입력해주세요."}),k("name")]}),(0,t.jsxs)(eK,{children:[(0,t.jsx)(eX,{children:"주민등록번호"}),(0,t.jsx)(o.default.Input.ResidentRegistrationNumber,{$autoFilled:D(s,n?.residentRegistrationNumber??""),style:S("residentRegistrationNumber",eq),value:s,onChange:e=>{d("residentRegistrationNumber"),i(t=>({...t,residentRegistrationNumber:e}))},placeholder:"주민등록번호를 입력해주세요."}),k("residentRegistrationNumber")]}),(0,t.jsxs)(eK,{$width:266,children:[(0,t.jsx)(eX,{children:"성별"}),(0,t.jsx)(e7,{$autoFilled:D(eJ(C),eJ(eZ(n?.residentRegistrationNumber??""))),style:eq,value:eJ(C),placeholder:"주민등록번호와 연동되어 보여집니다.",readOnly:!0})]})]}),(0,t.jsxs)(eG,{children:[(0,t.jsxs)(eK,{children:[(0,t.jsxs)(eX,{children:["휴대폰",(0,t.jsx)(e2,{})]}),(0,t.jsx)(o.default.Input.Phone,{$autoFilled:D(b,n?.phoneNumber??""),style:S("phoneNumber",eq),value:b,onChange:e=>{d("phoneNumber"),i(t=>({...t,phoneNumber:e}))},placeholder:"휴대폰을 입력해주세요."}),k("phoneNumber")]}),(0,t.jsxs)(eK,{children:[(0,t.jsx)(eX,{children:"연락처"}),(0,t.jsx)(o.default.Input.Contact,{$autoFilled:D(j,n?.contact??""),style:S("contact",eq),value:j,onChange:e=>{d("contact"),i(t=>({...t,contact:e}))},placeholder:"연락처를 입력해주세요."}),k("contact")]})]}),(0,t.jsxs)(eG,{children:[(0,t.jsxs)(eK,{children:[(0,t.jsx)(eX,{children:"주소"}),(0,t.jsx)(o.default.Input.Text,{$autoFilled:D(_,n?.address??""),style:S("address",eq),value:_,onChange:e=>{d("address"),i(t=>({...t,address:e.target.value}))},placeholder:"주소를 입력해주세요."}),k("address")]}),(0,t.jsxs)(eK,{$width:191,children:[(0,t.jsx)(eX,{children:"우편번호"}),(0,t.jsx)(o.default.Input.PostCode,{$autoFilled:D(w,n?.postCode??""),style:S("postCode",eq),value:w,onChange:e=>{d("postCode"),i(t=>({...t,postCode:e}))},placeholder:"우편번호를 입력해주세요."}),k("postCode")]})]}),(0,t.jsx)(eG,{children:(0,t.jsxs)(eK,{children:[(0,t.jsx)(eX,{children:"상세주소"}),(0,t.jsx)(o.default.Input.Text,{$autoFilled:D(y,n?.addressDetail??""),style:S("addressDetail",eq),value:y,onChange:e=>{d("addressDetail"),i(t=>({...t,addressDetail:e.target.value}))},placeholder:"상세주소를 입력해주세요."}),k("addressDetail")]})}),(0,t.jsxs)(eG,{children:[(0,t.jsxs)(eK,{children:[(0,t.jsx)(eX,{children:"특이사항(메모)"}),(0,t.jsx)(o.default.Input.Text,{style:eq,value:g,onChange:e=>{i(t=>({...t,note:e.target.value}))},placeholder:"메모가 필요한 사항을 입력해주세요."})]}),"DISABILITY_ACTIVITY_SUPPORT"===f&&(0,t.jsxs)(eK,{$width:191,children:[(0,t.jsx)(eX,{children:"차량 유류비 안내"}),(0,t.jsxs)(e6,{children:[(0,t.jsxs)(e4,{children:[(0,t.jsx)(e5,{checked:m,onChange:()=>{i(e=>({...e,vehicleFuelCostNoticeGiven:!0}))}}),"완료"]}),(0,t.jsxs)(e4,{children:[(0,t.jsx)(e5,{checked:!m,onChange:()=>{i(e=>({...e,vehicleFuelCostNoticeGiven:!1}))}}),"미완료"]})]})]})]}),(0,t.jsx)(eQ,{}),(0,t.jsxs)(eG,{children:[(0,t.jsxs)(eK,{children:[(0,t.jsxs)(eX,{children:["접수일",(0,t.jsx)(e2,{})]}),(0,t.jsx)(o.default.Input.Date,{$autoFilled:e.firstRegisteredDate===v,style:S("firstRegisteredDate",e8),value:e.firstRegisteredDate??"",onChange:e=>{d("firstRegisteredDate"),A(e,(e,t)=>({...e,firstRegisteredDate:t}))}}),k("firstRegisteredDate")]}),(0,t.jsxs)(eK,{children:[(0,t.jsxs)(eX,{children:["계약일",(0,t.jsx)(e2,{})]}),(0,t.jsx)(o.default.Input.Date,{style:S("contractDate",e8),value:e.contractDate??"",onChange:e=>{d("contractDate"),A(e,(e,t)=>({...e,contractDate:t}))}}),k("contractDate")]}),(0,t.jsxs)(eK,{children:[(0,t.jsx)(eX,{children:"계약 시작일"}),(0,t.jsx)(o.default.Input.Date,{$autoFilled:D(h,n?.contractStartDate??""),style:S("contractStartDate",e8),value:h,onChange:e=>{(d("contractStartDate"),""===e.trim())?i(e=>({...e,contractStartDate:void 0})):A(e,(e,t)=>({...e,contractStartDate:t}))},showClearButton:!0}),k("contractStartDate")]}),(0,t.jsxs)(eK,{children:[(0,t.jsx)(eX,{children:"계약 종료일"}),(0,t.jsx)(o.default.Input.Date,{$autoFilled:D("DISABILITY_ACTIVITY_SUPPORT"===f?p:x,n?.contractEndDate??n?.serviceEndDate??""),style:"DISABILITY_ACTIVITY_SUPPORT"===f?e8:S("serviceEndDate",e8),value:"DISABILITY_ACTIVITY_SUPPORT"===f?"":x,disabled:"DISABILITY_ACTIVITY_SUPPORT"===f,onChange:e=>{"DISABILITY_ACTIVITY_SUPPORT"===f&&(d("contractEndDate"),A(e,(e,t)=>({...e,contractEndDate:t})))}}),"DISABILITY_ACTIVITY_SUPPORT"!==f&&k("serviceEndDate")]})]}),"DISABILITY_ACTIVITY_SUPPORT"!==f&&(0,t.jsxs)(eG,{children:[(0,t.jsxs)(eK,{$width:191,children:[(0,t.jsx)(eX,{children:"서비스 시작일"}),(0,t.jsx)(o.default.Input.Date,{$autoFilled:D(u,n?.serviceStartDate??""),style:S("serviceStartDate",e8),value:u,onChange:e=>{d("serviceStartDate"),A(e,(e,t)=>{let n=(e=>{let[t,n,i]=e.split("-"),l=new Date(Number(t),Number(n)-1,Number(i));l.setFullYear(l.getFullYear()+1),l.setDate(l.getDate()-1);let[a,d]=eV.default.create(l.getFullYear(),l.getMonth()+1,l.getDate());return null!==a||null===d?null:d})(t);return null===n?e:{...e,serviceStartDate:t,serviceEndDate:n}})}}),k("serviceStartDate")]}),(0,t.jsxs)(eK,{$width:191,children:[(0,t.jsx)(eX,{children:"서비스 종료일"}),(0,t.jsx)(o.default.Input.Date,{$autoFilled:D(x,n?.serviceEndDate??""),style:S("serviceEndDate",e8),value:x,onChange:e=>{d("serviceEndDate"),A(e,(e,t)=>({...e,serviceEndDate:t}))}}),k("serviceEndDate")]})]}),(0,t.jsxs)(eG,{children:[(0,t.jsxs)(eK,{children:[(0,t.jsxs)(eX,{children:["사업구분",(0,t.jsx)(e2,{})]}),(0,t.jsx)(o.default.Input.Select,{style:eq,value:c,disabled:!0,children:(0,t.jsx)("option",{value:c,children:z})})]}),(0,t.jsxs)(eK,{children:[(0,t.jsxs)(eX,{children:["서비스명",(0,t.jsx)(e2,{})]}),(0,t.jsx)(o.default.Input.Select,{style:eq,value:f,disabled:!0,children:(0,t.jsx)("option",{value:f,children:I})})]}),(0,t.jsxs)(eK,{children:[(0,t.jsxs)(eX,{children:["서비스코드",(0,t.jsx)(e2,{})]}),(0,t.jsx)(o.default.Input.Text,{style:eq,value:E,readOnly:!0})]}),(0,t.jsxs)(eK,{children:[(0,t.jsxs)(eX,{children:["서비스유형",(0,t.jsx)(e2,{})]}),(0,t.jsx)(o.default.Input.Select,{style:eq,value:f,disabled:!0,children:(0,t.jsx)("option",{value:f,children:T})})]})]})]})});function e2(){return(0,t.jsx)(e3,{children:" *"})}let e6=l.default.div.withConfig({componentId:"zh__sc-2ea09a12-0"})`
  display: flex;
  gap: 16px;
  align-items: center;
  height: 36px;
`,e4=l.default.label.withConfig({componentId:"zh__sc-2ea09a12-1"})`
  cursor: pointer;

  display: inline-flex;
  gap: 8px;
  align-items: center;

  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  color: #000;
`,e5=(0,l.default)(o.default.Input.Radio).withConfig({componentId:"zh__sc-2ea09a12-2"})``,e3=l.default.span.withConfig({componentId:"zh__sc-2ea09a12-3"})`
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: normal;
  color: #e7000b;
`,e9=l.default.div.withConfig({componentId:"zh__sc-2ea09a12-4"})`
  position: absolute;
  top: calc(100% + 2px);
  left: 0;

  font-size: 12px;
  line-height: 16px;
  color: #ff4d4f;
`,e8={...eq,height:36,lineHeight:"36px"},e7=(0,l.default)(o.default.Input.Text).withConfig({componentId:"zh__sc-2ea09a12-5"})`
  &::placeholder {
    color: #0a0a0a;
  }
`;var te=e.i(39635),tt=e.i(10957),tn=e.i(58362),ti=e.i(12945),tl=e.i(62150),ta=e.i(41417),td=e.i(97181),to=e.i(17306),tr=e.i(49183),ts=e.i(86544),tc=e.i(85754),tf=e.i(38535),th=e.i(5564),tp=e.i(79786);let tu=[["1구간","8,293,000","면제","20,000","216,200","216,200","216,200","216,200"],["2구간","7,774,000","면제","20,000","216,200","216,200","216,200","216,200"],["3구간","7,257,000","면제","20,000","216,200","216,200","216,200","216,200"],["4구간","6,739,000","면제","20,000","216,200","216,200","216,200","216,200"],["5구간","6,221,000","면제","20,000","216,200","216,200","216,200","216,200"],["6구간","5,703,000","면제","20,000","216,200","216,200","216,200","216,200"],["7구간","5,181,000","면제","20,000","207,200","216,200","216,200","216,200"],["8구간","4,665,000","면제","20,000","186,600","216,200","216,200","216,200"],["9구간","4,148,000","면제","20,000","165,900","216,200","216,200","216,200"],["10구간","3,629,000","면제","20,000","145,100","216,200","216,200","216,200"],["11구간","3,112,000","면제","20,000","124,400","186,700","216,200","216,200"],["12구간","2,593,000","면제","20,000","103,700","155,500","207,400","216,200"],["13구간","2,076,000","면제","20,000","83,000","124,500","166,000","207,600"],["14구간","1,558,000","면제","20,000","62,300","93,400","124,600","155,800"],["15구간","1,040,000","면제","20,000","41,600","62,400","83,200","104,000"],["특례","7,257,000","면제","20,000","29,300","44,000","58,700","73,400"]],tx={TYPE_A:2,TYPE_B:3,TYPE_C:4,TYPE_D:5,TYPE_E:6,TYPE_F:7},tg=["1인가구","취약가구","출산가구","자립준비","학교생활","직장생활","보호자 일시 부재","나머지 가구구성원의 직장생활 등"],tm=["MON","TUE","WED","THU","FRI","SAT","SUN"],tj=[["ministryDeterminedHours","보건복지부"],["metroDeterminedHours","광역지자체"],["basicDeterminedHours","기초지자체"],["otherDeterminedHours","기타"]],tb=new Set(th.DISABILITY_ACTIVITY_SUPPORT_BASIC_GRADES),t_="SPECIAL";function tw(e){return e in tp.default}let ty=(0,n.observer)(function(){let{clientDraft:e,ocrDraft:n,updateClientDraft:l,getClientDraftFieldError:d,clearClientDraftFieldError:r}=a.default.modal.clientCreate,[s,c]=(0,i.useState)(e?.serviceGrade?.startsWith("SPECIAL")===!0),[f,h]=(0,i.useState)(e?.serviceGrade?.startsWith("SPECIAL")===!0?e.serviceGrade.replace("SPECIAL",""):"");if(null===e)return null;let p=e.serviceGrade??tt.default.SELECT_EMPTY_VALUE,u=s||p.startsWith("SPECIAL"),x=p.startsWith("SPECIAL")?p.replace("SPECIAL",""):f,g=(e,t)=>void 0!==t&&e===t,m=u&&g(p,n?.serviceGrade),j=e.incomeCategory??tt.default.SELECT_EMPTY_VALUE,b=e.benefitDecisionPeriod??"",_=e.copaymentAmount??"",w=e.virtualAccountNumber??"",y=e.additionalBenefitTypes??[],v=e.workplace??"",C=e.schoolName??"",I=e.schoolStartTime??"",z=e.schoolEndTime??"",T=e.schoolDays??[],E=e.careCenterName??"",S=e.careCenterStartTime??"",k=e.careCenterEndTime??"",D=e.careCenterDays??[],A=e.primaryDisabilityName??"",O=e.primaryDisabilityGrade??"",L=e.primaryDisabilitySeverity??"",$=e.secondaryDisabilityName??"",R=e.secondaryDisabilityGrade??"",P=e.secondaryDisabilitySeverity??"",N=e.chronicDiseaseNames??"",M=e.medicationInfo??"",F=e.communicationStatusDetail??"",U=e.familyStatusDetail??"",B=a.default.data.serviceWorker.list,Y=B.data??[],V=e=>{l(t=>{let n={...t,...e},i=function(e,t){if(null===e||null===t)return null;let n=e.startsWith("SPECIAL")?"특례":`${e}구간`,i=tu.find(e=>e[0]===n);if(void 0===i)return null;let l=i[tx[t]];if(void 0===l)return null;let a="면제"===l?0:Number(l.replaceAll(",","")),d=Number(i[1].replaceAll(",",""));return Number.isNaN(a)||Number.isNaN(d)?null:{copaymentAmount:a,monthlyLimitAmount:d}}(n.serviceGrade??null,n.incomeCategory??null);return null!==i&&r("copaymentAmount"),{...n,copaymentAmount:null===i?void 0:String(i.copaymentAmount)}})},W=(e,t)=>""===d(e)?t:{...t,borderColor:"#ff4d4f",background:"#fff5f5"},H=e=>{let n=d(e);return""===n?null:(0,t.jsx)(tT,{"data-client-create-field-error":"true",children:n})};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(eH,{children:"계좌∙자격 및 기타 정보"}),(0,t.jsxs)(eG,{children:[(0,t.jsxs)(eK,{children:[(0,t.jsxs)(eX,{children:["활동지원급여 구간 ",(0,t.jsx)(tz,{})]}),(0,t.jsxs)(tE,{$isEmptySelected:!u&&p===tt.default.SELECT_EMPTY_VALUE,$autoFilled:m||g(p,n?.serviceGrade),value:u?t_:p,onChange:e=>{let t=e.target.value;if(r("serviceGrade"),r("isSpecialGradeSelected"),t===t_){c(!0),V({isSpecialGradeSelected:!0,serviceGrade:void 0});return}tb.has(t)&&(c(!1),h(""),V({isSpecialGradeSelected:!1,serviceGrade:t}))},style:W("serviceGrade",eq),children:[(0,t.jsx)("option",{value:tt.default.SELECT_EMPTY_VALUE,disabled:!0,children:"구간을 입력해주세요."}),th.DISABILITY_ACTIVITY_SUPPORT_BASIC_GRADES.map(e=>(0,t.jsxs)("option",{value:e,children:[e,"구간"]},e)),(0,t.jsx)("option",{value:t_,children:"특례"})]}),H("serviceGrade")]}),(0,t.jsxs)(eK,{children:[(0,t.jsxs)(eX,{children:["특례 구간 ",(0,t.jsx)(tz,{})]}),(0,t.jsx)(o.default.Input.Text,{$autoFilled:m,value:x,disabled:!u,onChange:e=>{let t=e.target.value;if(r("isSpecialGradeSelected"),""!==t&&!/^([1-9]\d{0,2}|1000)$/.test(t))return;let n=function(e){if(/^([1-9]\d{0,2}|1000)$/.test(e))return`SPECIAL${e}`}(t);h(t),V({isSpecialGradeSelected:!0,serviceGrade:n})},placeholder:"숫자를 입력하세요.",inputMode:"numeric",maxLength:4,style:W("isSpecialGradeSelected",eq)}),H("isSpecialGradeSelected")]}),(0,t.jsxs)(eK,{$width:398,children:[(0,t.jsxs)(eX,{children:["소득 유형 ",(0,t.jsx)(tz,{})]}),(0,t.jsxs)(tE,{$isEmptySelected:j===tt.default.SELECT_EMPTY_VALUE,$autoFilled:g(j,n?.incomeCategory),value:j,onChange:e=>{let t=e.target.value;r("incomeCategory"),tw(t)&&V({incomeCategory:t})},style:W("incomeCategory",eq),children:[(0,t.jsx)("option",{value:tt.default.SELECT_EMPTY_VALUE,disabled:!0,children:"유형을 선택해주세요."}),Object.keys(tp.default).filter(tw).map(e=>(0,t.jsx)("option",{value:e,children:tp.default[e].label},e))]}),H("incomeCategory")]})]}),(0,t.jsxs)(eG,{children:[(0,t.jsxs)(eK,{children:[(0,t.jsx)(eX,{children:"수급결정시기"}),(0,t.jsx)(o.default.Input.Date,{value:b,onChange:e=>{""===e?l(e=>({...e,benefitDecisionPeriod:void 0})):eV.default.is(e)&&l(t=>({...t,benefitDecisionPeriod:e}))},style:{...eq,width:"100%",height:36}})]}),(0,t.jsxs)(eK,{children:[(0,t.jsxs)(eX,{children:["본인부담금(원) ",(0,t.jsx)(tz,{})]}),(0,t.jsx)(o.default.Input.Money,{value:_,onChange:e=>{r("copaymentAmount"),l(t=>({...t,copaymentAmount:e}))},placeholder:"00,000",style:W("copaymentAmount",eq)}),H("copaymentAmount")]}),(0,t.jsxs)(eK,{$width:398,children:[(0,t.jsxs)(eX,{children:["가상계좌 ",(0,t.jsx)(tz,{})]}),(0,t.jsx)(o.default.Input.Text,{$autoFilled:g(w,n?.virtualAccountNumber),value:w,onChange:e=>{r("virtualAccountNumber"),l(t=>({...t,virtualAccountNumber:e.target.value}))},placeholder:"가상계좌를 입력해주세요.",inputMode:"numeric",style:W("virtualAccountNumber",eq)}),H("virtualAccountNumber")]})]}),(0,t.jsx)(eG,{children:(0,t.jsxs)(eK,{children:[(0,t.jsx)(eX,{children:"추가급여대상 여부"}),(0,t.jsx)(tS,{children:tg.map(e=>(0,t.jsxs)(tN,{children:[(0,t.jsx)(tF,{checked:y.includes(e),onChange:()=>{let t=y.includes(e)?y.filter(t=>t!==e):[...y,e];l(e=>({...e,additionalBenefitTypes:t}))}}),(0,t.jsx)(tM,{children:e})]},e))})]})}),(0,t.jsx)(eG,{children:(0,t.jsxs)(eK,{$width:193,children:[(0,t.jsx)(eX,{children:"연결할 제공인력"}),(0,t.jsxs)(tE,{$isEmptySelected:void 0===e.serviceWorkerId,value:e.serviceWorkerId??tt.default.SELECT_EMPTY_VALUE,disabled:a.default.modal.clientCreate.isServiceMatchingRegistration,onOpenChange:t=>{t&&(B.setQuery({serviceType:e.serviceType,regions:e.desiredRegions,times:e.desiredServiceTimes,status:"ACTIVE"}),B.refetch())},onChange:e=>{r("serviceWorkerId"),l(t=>({...t,serviceWorkerId:e.target.value===tt.default.SELECT_EMPTY_VALUE?void 0:e.target.value}))},style:W("serviceWorkerId",eq),children:[(0,t.jsx)("option",{value:tt.default.SELECT_EMPTY_VALUE,"data-trigger-label":"제공인력을 선택하세요.",children:"loading"===B.status?"조회 중...":"선택안함"}),null!==a.default.modal.clientCreate.matchingServiceWorkerName&&Y.every(t=>t.id!==e.serviceWorkerId)&&(0,t.jsx)("option",{value:e.serviceWorkerId,children:a.default.modal.clientCreate.matchingServiceWorkerName}),Y.map(e=>(0,t.jsx)("option",{value:e.id,children:e.name},e.id))]}),H("serviceWorkerId")]})}),(0,t.jsx)(eH,{children:"직장 및 학교"}),(0,t.jsx)(eG,{children:(0,t.jsxs)(eK,{children:[(0,t.jsx)(eX,{children:"직장"}),(0,t.jsx)(o.default.Input.Text,{value:v,onChange:e=>{l(t=>({...t,workplace:e.target.value}))},placeholder:"직장명을 입력하세요.",style:eq})]})}),(0,t.jsxs)(eG,{children:[(0,t.jsxs)(eK,{$width:395,children:[(0,t.jsx)(eX,{children:"학교명"}),(0,t.jsx)(o.default.Input.Text,{value:C,onChange:e=>{l(t=>({...t,schoolName:e.target.value}))},placeholder:"학교명을 입력하세요.",style:eq})]}),(0,t.jsxs)(eK,{$width:190,children:[(0,t.jsx)(eX,{children:"시작 시간"}),(0,t.jsx)(o.default.Input.TimeHhmm,{value:I,onChange:e=>{r("schoolStartTime"),l(t=>({...t,schoolStartTime:e}))},style:W("schoolStartTime",eq),placeholder:"00:00"}),H("schoolStartTime")]}),(0,t.jsx)(tB,{children:"~"}),(0,t.jsxs)(eK,{$width:190,children:[(0,t.jsx)(eX,{children:"종료 시간"}),(0,t.jsx)(o.default.Input.TimeHhmm,{value:z,onChange:e=>{r("schoolEndTime"),l(t=>({...t,schoolEndTime:e}))},style:W("schoolEndTime",eq),placeholder:"00:00"}),H("schoolEndTime")]})]}),(0,t.jsx)(tC,{label:"등교 요일",selectedDays:T,onChange:e=>l(t=>({...t,schoolDays:e}))}),(0,t.jsx)(eH,{children:"주단기보호센터"}),(0,t.jsxs)(eG,{children:[(0,t.jsxs)(eK,{$width:395,children:[(0,t.jsx)(eX,{children:"주단기보호센터명"}),(0,t.jsx)(o.default.Input.Text,{value:E,onChange:e=>{l(t=>({...t,careCenterName:e.target.value}))},placeholder:"센터명을 입력하세요.",style:eq})]}),(0,t.jsx)(tv,{label:"시작 시간",value:S,errorMessage:d("careCenterStartTime"),onChange:e=>{r("careCenterStartTime"),l(t=>({...t,careCenterStartTime:e}))}}),(0,t.jsx)(tB,{children:"~"}),(0,t.jsx)(tv,{label:"종료 시간",value:k,errorMessage:d("careCenterEndTime"),onChange:e=>{r("careCenterEndTime"),l(t=>({...t,careCenterEndTime:e}))}})]}),(0,t.jsx)(tC,{label:"등원 요일",selectedDays:D,onChange:e=>l(t=>({...t,careCenterDays:e}))}),(0,t.jsx)(eH,{children:"판정시간"}),(0,t.jsx)(eG,{children:tj.map(([n,i])=>(0,t.jsxs)(eK,{children:[(0,t.jsx)(eX,{children:i}),(0,t.jsxs)(tA,{children:[(0,t.jsx)(o.default.Input.Text,{value:e[n]??"",onChange:e=>{let t=e.target.value;l(e=>({...e,[n]:""===t?void 0:Number(t)}))},placeholder:"00",inputMode:"numeric",style:{...eq,width:140,textAlign:"center"}}),(0,t.jsx)(tO,{children:"시간"})]})]},n))}),(0,t.jsxs)(eG,{children:[(0,t.jsxs)(eK,{children:[(0,t.jsxs)(eX,{children:["주장애명 ",(0,t.jsx)(tz,{})]}),(0,t.jsxs)(tE,{$isEmptySelected:""===A,value:A||tt.default.SELECT_EMPTY_VALUE,onChange:e=>{r("primaryDisabilityName"),l(t=>({...t,primaryDisabilityName:e.target.value===tt.default.SELECT_EMPTY_VALUE?void 0:e.target.value}))},style:W("primaryDisabilityName",eq),children:[(0,t.jsx)("option",{value:tt.default.SELECT_EMPTY_VALUE,"data-trigger-label":"주장애명을 선택해주세요.",children:"선택안함"}),Object.entries(ts.default).map(([e,{label:n}])=>(0,t.jsx)("option",{value:e,children:n},e))]}),H("primaryDisabilityName")]}),(0,t.jsxs)(eK,{children:[(0,t.jsx)(eX,{children:"장애급수"}),(0,t.jsxs)(tE,{$isEmptySelected:""===O,value:O||tt.default.SELECT_EMPTY_VALUE,onChange:e=>{l(t=>({...t,primaryDisabilityGrade:e.target.value===tt.default.SELECT_EMPTY_VALUE?void 0:e.target.value}))},style:eq,children:[(0,t.jsx)("option",{value:tt.default.SELECT_EMPTY_VALUE,"data-trigger-label":"장애급수를 선택해주세요.",children:"선택안함"}),Object.entries(tr.default).map(([e,{label:n}])=>(0,t.jsx)("option",{value:e,children:n},e))]})]}),(0,t.jsxs)(eK,{children:[(0,t.jsx)(eX,{children:"주장애 장애정도"}),(0,t.jsxs)(tE,{$isEmptySelected:""===L,value:L||tt.default.SELECT_EMPTY_VALUE,onChange:e=>{l(t=>({...t,primaryDisabilitySeverity:e.target.value===tt.default.SELECT_EMPTY_VALUE?void 0:e.target.value}))},style:eq,children:[(0,t.jsx)("option",{value:tt.default.SELECT_EMPTY_VALUE,"data-trigger-label":"주장애 장애정도를 선택해주세요.",children:"선택안함"}),Object.entries(tc.default).map(([e,{label:n}])=>(0,t.jsx)("option",{value:e,children:n},e))]})]})]}),(0,t.jsxs)(eG,{children:[(0,t.jsxs)(eK,{children:[(0,t.jsx)(eX,{children:"부장애명"}),(0,t.jsxs)(tE,{$isEmptySelected:""===$,value:$||tt.default.SELECT_EMPTY_VALUE,onChange:e=>{l(t=>({...t,secondaryDisabilityName:e.target.value===tt.default.SELECT_EMPTY_VALUE?void 0:e.target.value}))},style:eq,children:[(0,t.jsx)("option",{value:tt.default.SELECT_EMPTY_VALUE,"data-trigger-label":"부장애명을 선택해주세요.",children:"선택안함"}),Object.entries(ts.default).map(([e,{label:n}])=>(0,t.jsx)("option",{value:e,children:n},e))]})]}),(0,t.jsxs)(eK,{children:[(0,t.jsx)(eX,{children:"장애급수"}),(0,t.jsxs)(tE,{$isEmptySelected:""===R,value:R||tt.default.SELECT_EMPTY_VALUE,onChange:e=>{l(t=>({...t,secondaryDisabilityGrade:e.target.value===tt.default.SELECT_EMPTY_VALUE?void 0:e.target.value}))},style:eq,children:[(0,t.jsx)("option",{value:tt.default.SELECT_EMPTY_VALUE,"data-trigger-label":"장애급수를 선택해주세요.",children:"선택안함"}),Object.entries(tr.default).map(([e,{label:n}])=>(0,t.jsx)("option",{value:e,children:n},e))]})]}),(0,t.jsxs)(eK,{children:[(0,t.jsx)(eX,{children:"부장애 장애정도"}),(0,t.jsxs)(tE,{$isEmptySelected:""===P,value:P||tt.default.SELECT_EMPTY_VALUE,onChange:e=>{l(t=>({...t,secondaryDisabilitySeverity:e.target.value===tt.default.SELECT_EMPTY_VALUE?void 0:e.target.value}))},style:eq,children:[(0,t.jsx)("option",{value:tt.default.SELECT_EMPTY_VALUE,"data-trigger-label":"부장애 장애정도를 선택해주세요.",children:"선택안함"}),Object.entries(tc.default).map(([e,{label:n}])=>(0,t.jsx)("option",{value:e,children:n},e))]})]})]}),(0,t.jsxs)(eG,{children:[(0,t.jsxs)(eK,{children:[(0,t.jsx)(eX,{children:"보유질환명"}),(0,t.jsx)(o.default.Input.Text,{value:N,onChange:e=>l(t=>({...t,chronicDiseaseNames:e.target.value})),placeholder:"보유질환에 대해 입력해주세요.",style:eq})]}),(0,t.jsxs)(eK,{children:[(0,t.jsx)(eX,{children:"투약정보"}),(0,t.jsx)(o.default.Input.Text,{value:M,onChange:e=>l(t=>({...t,medicationInfo:e.target.value})),placeholder:"투약정보에 대해 입력해주세요.",style:eq})]})]}),(0,t.jsxs)(eG,{children:[(0,t.jsx)(tI,{label:"외상장애 여부",name:"hasTraumaDisability",width:158,options:[["NOT_APPLICABLE","미해당"],["APPLICABLE","해당"]],value:!0===e.hasTraumaDisability?"APPLICABLE":"NOT_APPLICABLE",onChange:e=>l(t=>({...t,hasTraumaDisability:"APPLICABLE"===e}))}),(0,t.jsx)(tI,{label:"의사소통",name:"communicationStatus",width:443,options:[[td.default.POSSIBLE,"가능"],[td.default.IMPOSSIBLE,"불가능"],[td.default.OTHER,"기타"]],value:e.communicationStatus??td.default.POSSIBLE,onChange:e=>l(t=>({...t,communicationStatus:e,...e===td.default.OTHER?{}:{communicationStatusDetail:void 0}})),otherValue:F,onOtherChange:e=>l(t=>({...t,communicationStatusDetail:e}))}),(0,t.jsx)(tI,{label:"휠체어 유무",name:"hasWheelchair",width:116,options:[["AVAILABLE","유"],["UNAVAILABLE","무"]],value:!1===e.hasWheelchair?"UNAVAILABLE":"AVAILABLE",onChange:e=>l(t=>({...t,hasWheelchair:"AVAILABLE"===e}))})]}),(0,t.jsxs)(eG,{children:[(0,t.jsx)(tI,{label:"결혼여부",name:"isMarried",options:[["SINGLE","미혼"],["MARRIED","기혼"]],width:144,value:!0===e.isMarried?"MARRIED":"SINGLE",onChange:e=>l(t=>({...t,isMarried:"MARRIED"===e}))}),(0,t.jsx)(tI,{label:"가족사항",name:"familyStatus",options:[[tf.default.ALONE,"독거"],[tf.default.COUPLE,"부부"],[tf.default.SINGLE_PARENT,"한부모"],[tf.default.OTHER,"기타"]],width:530,value:e.familyStatus??tf.default.ALONE,onChange:e=>l(t=>({...t,familyStatus:e,...e===tf.default.OTHER?{}:{familyStatusDetail:void 0}})),otherValue:U,onOtherChange:e=>l(t=>({...t,familyStatusDetail:e}))})]})]})});function tv({label:e,value:n,errorMessage:i,onChange:l}){return(0,t.jsxs)(eK,{children:[(0,t.jsx)(eX,{children:e}),(0,t.jsx)(o.default.Input.TimeHhmm,{value:n,onChange:l,placeholder:"00:00",style:""===i?eq:{...eq,borderColor:"#ff4d4f",background:"#fff5f5"}}),""!==i?(0,t.jsx)(tT,{"data-client-create-field-error":"true",children:i}):null]})}function tC({label:e,selectedDays:n,onChange:i}){return(0,t.jsxs)(eK,{children:[(0,t.jsx)(eX,{children:e}),(0,t.jsx)(tk,{children:tm.map(e=>(0,t.jsxs)(tD,{children:[(0,t.jsx)(tF,{checked:n.includes(e),onChange:()=>i(n.includes(e)?n.filter(t=>t!==e):[...n,e])}),(0,t.jsx)(tM,{children:to.default[e].label})]},e))})]})}function tI({label:e,name:n,width:i,options:l,value:a,onChange:d,required:r=!1,otherValue:s,onOtherChange:c}){return(0,t.jsxs)(tL,{$width:i,children:[(0,t.jsxs)(eX,{children:[e," ",r&&(0,t.jsx)(tz,{})]}),(0,t.jsx)(t$,{children:l.map(([e,i])=>(0,t.jsxs)(tR,{children:[(0,t.jsx)(tP,{type:"radio",name:n,value:e,checked:a===e,onChange:()=>d(e)}),(0,t.jsx)(tM,{children:i}),"OTHER"===e&&c&&(0,t.jsx)(o.default.Input.Text,{value:s??"",disabled:a!==e,onChange:e=>c(e.target.value),placeholder:"관련 내용을 입력해주세요.",style:{...eq,width:193}})]},e))})]})}function tz(){return(0,t.jsx)(tU,{children:" *"})}let tT=l.default.div.withConfig({componentId:"zh__sc-d7ceea08-0"})`
  margin-top: 4px;
  font-size: 12px;
  color: #e7000b;
`,tE=(0,l.default)(o.default.Input.Select).withConfig({componentId:"zh__sc-d7ceea08-1"})`
  color: ${({$autoFilled:e,$isEmptySelected:t})=>!0===e?"#4f39f6":t?"#9ca3af":"#0a0a0a"};
  background: ${({$autoFilled:e})=>!0===e?"#f4f2ff":"#fff"};
`,tS=l.default.div.withConfig({componentId:"zh__sc-d7ceea08-2"})`
  display: flex;
  flex-wrap: wrap;
  gap: 0 24px;
  align-items: center;
`,tk=l.default.div.withConfig({componentId:"zh__sc-d7ceea08-3"})`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 24px;
  align-items: center;

  padding: 4px 0;
`,tD=l.default.label.withConfig({componentId:"zh__sc-d7ceea08-4"})`
  display: inline-flex;
  gap: 8px;
  align-items: center;
  height: 36px;
`,tA=l.default.div.withConfig({componentId:"zh__sc-d7ceea08-5"})`
  display: flex;
  gap: 10px;
  align-items: center;
  width: 100%;
`,tO=l.default.span.withConfig({componentId:"zh__sc-d7ceea08-6"})`
  flex-shrink: 0;
  font-size: 16px;
  color: #000;
`,tL=l.default.div.withConfig({componentId:"zh__sc-d7ceea08-7"})`
  display: flex;
  flex: ${({$width:e})=>void 0===e?1:"none"};
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;

  width: ${({$width:e})=>void 0===e?"auto":`${e}px`};
  min-width: 0;
`,t$=l.default.div.withConfig({componentId:"zh__sc-d7ceea08-8"})`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 24px;
  align-items: center;

  min-height: 36px;
`,tR=l.default.label.withConfig({componentId:"zh__sc-d7ceea08-9"})`
  display: inline-flex;
  gap: 8px;
  align-items: center;
  min-height: 36px;
`,tP=l.default.input.withConfig({componentId:"zh__sc-d7ceea08-10"})`
  flex-shrink: 0;

  width: 24px;
  height: 24px;
  margin: 0;

  accent-color: #256ef4;
`,tN=l.default.label.withConfig({componentId:"zh__sc-d7ceea08-11"})`
  display: inline-flex;
  gap: 8px;
  align-items: center;
  height: 36px;
`,tM=l.default.span.withConfig({componentId:"zh__sc-d7ceea08-12"})`
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  color: #000;
`,tF=(0,l.default)(o.default.Input.Check).attrs({$iconSizeRatio:1.5}).withConfig({componentId:"zh__sc-d7ceea08-13"})`
  width: 24px;
  height: 24px;
`,tU=l.default.span.withConfig({componentId:"zh__sc-d7ceea08-14"})`
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: normal;
  color: #e7000b;
`,tB=l.default.span.withConfig({componentId:"zh__sc-d7ceea08-15"})`
  align-self: flex-start;
  padding-top: 28px;
  font-size: 16px;
  color: #000;
`,tY=Object.keys(tl.default).filter(function(e){return e in tl.default}),tV=["PHYSICAL_ACTIVITY_SUPPORT","HOUSEKEEPING_SUPPORT","SOCIAL_ACTIVITY_SUPPORT","OTHER"],tW=["MALE","FEMALE"],tH=["TWENTIES_OR_YONGER","THIRTIES","FORTIES","FIFTIES","SIXTIES","SEVENTIES_OR_OLDER"],tG=(0,n.observer)(function(){let{clientDraft:e,updateClientDraft:n,getClientDraftFieldError:i,clearClientDraftFieldError:l}=a.default.modal.clientCreate;if(null===e)return null;let d=e.desiredServiceHours,r=e.desiredRegions??[],s=e.desiredCareTypes??[],c=e.desiredServiceWorkerGender,f=e.desiredAgeRanges??[],h="DISABILITY_ACTIVITY_SUPPORT"===e.serviceType,p=tY.every(e=>r.includes(e)),u=tV.every(e=>s.some(t=>t.careType===e)),x=tH.every(e=>f.includes(e));return(0,t.jsxs)(tX,{children:[(0,t.jsxs)(tQ,{children:[(0,t.jsxs)(tZ,{children:["서비스 희망 시간",h&&(0,t.jsx)(tK,{})]}),(0,t.jsxs)(t0,{children:[(0,t.jsx)(te.default,{sx:{fontSize:20}}),(0,t.jsx)(t1,{children:"시간대를 추가하고, 추가한 시간대를 클릭하면 수정하거나 삭제할 수 있습니다."})]})]}),(0,t.jsx)(t2,{value:e.desiredServiceTimes,onChange:e=>{l("desiredServiceTimes"),n(t=>({...t,desiredServiceTimes:e.target.value}))}}),""!==i("desiredServiceTimes")&&(0,t.jsx)(t8,{"data-client-create-field-error":"true",children:i("desiredServiceTimes")}),(0,t.jsxs)(t6,{children:[(0,t.jsx)(t4,{children:"희망 서비스 시간"}),(0,t.jsxs)(t5,{children:[(0,t.jsx)(t9,{children:"총"}),(0,t.jsx)(t3,{value:void 0===d?"":String(d),placeholder:"00",maxLength:2,onChange:e=>{let t=e.target.value.replace(/\D/g,"");n(e=>({...e,desiredServiceHours:""===t?void 0:Math.min(Number(t),99)}))}}),(0,t.jsx)(t9,{children:"시간"})]})]}),(0,t.jsxs)(t7,{children:[(0,t.jsxs)(ne,{children:["서비스 희망 지역 (복수 선택 가능)",h&&(0,t.jsx)(tK,{})]}),(0,t.jsxs)(nt,{children:[(0,t.jsxs)(ni,{children:[(0,t.jsx)(nc,{checked:p,onChange:()=>{l("desiredRegions"),n(e=>({...e,desiredRegions:p?[]:tY}))}}),(0,t.jsx)(nd,{children:"전체 선택"})]},tt.default.CHECK_ALL_VALUE),tY.map(e=>(0,t.jsxs)(ni,{children:[(0,t.jsx)(nc,{checked:r.includes(e),onChange:()=>{l("desiredRegions"),n(t=>({...t,desiredRegions:r.includes(e)?r.filter(t=>t!==e):[...r,e]}))}}),(0,t.jsx)(nd,{children:tl.default[e].label})]},e))]}),""!==i("desiredRegions")&&(0,t.jsx)(t8,{"data-client-create-field-error":"true",children:i("desiredRegions")})]}),h&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(t7,{children:[(0,t.jsxs)(ne,{children:["희망 활동 내용 (복수 선택 가능)",(0,t.jsx)(tK,{})]}),(0,t.jsxs)(nn,{children:[(0,t.jsxs)(ni,{children:[(0,t.jsx)(nc,{checked:u,onChange:()=>{l("desiredCareTypes"),n(e=>({...e,desiredCareTypes:u?[]:tV.map(e=>s.find(t=>t.careType===e)??{careType:e})}))}}),(0,t.jsx)(nd,{children:"전체 선택"})]}),tV.map(e=>{let i=s.find(t=>t.careType===e);return(0,t.jsxs)(nl,{children:[(0,t.jsxs)(ni,{children:[(0,t.jsx)(nc,{checked:void 0!==i,onChange:()=>{l("desiredCareTypes"),n(t=>({...t,desiredCareTypes:s.some(t=>t.careType===e)?s.filter(t=>t.careType!==e):[...s,{careType:e}]}))}}),(0,t.jsx)(nd,{children:"PHYSICAL_ACTIVITY_SUPPORT"===e?"신체 활동":ta.default[e].label.replace("활동"," 활동")})]}),(0,t.jsx)(na,{style:eq,disabled:void 0===i,value:i?.detail??"",onChange:t=>{n(n=>({...n,desiredCareTypes:(n.desiredCareTypes??[]).map(n=>n.careType===e?{...n,detail:t.target.value}:n)}))},placeholder:"관련 내용을 입력해주세요."})]},e)})]}),""!==i("desiredCareTypes")&&(0,t.jsx)(t8,{"data-client-create-field-error":"true",children:i("desiredCareTypes")})]}),(0,t.jsxs)(t7,{children:[(0,t.jsxs)(ne,{children:["제공인력 희망 성별",(0,t.jsx)(tK,{})]}),(0,t.jsxs)(nt,{children:[(0,t.jsxs)(ni,{children:[(0,t.jsx)(o.default.Input.Radio,{name:"desired-service-worker-gender",checked:null===c,onChange:()=>{n(e=>({...e,desiredServiceWorkerGender:null}))}}),(0,t.jsx)(nd,{children:"전체 선택"})]}),tW.map(e=>(0,t.jsxs)(ni,{children:[(0,t.jsx)(o.default.Input.Radio,{name:"desired-service-worker-gender",checked:c===e,onChange:()=>{n(t=>({...t,desiredServiceWorkerGender:e}))}}),(0,t.jsx)(nd,{children:ti.default[e].label})]},e))]}),""!==i("desiredServiceWorkerGender")&&(0,t.jsx)(t8,{"data-client-create-field-error":"true",children:i("desiredServiceWorkerGender")})]}),(0,t.jsxs)(t7,{children:[(0,t.jsxs)(ne,{children:["제공인력 희망 연령 (복수 선택 가능)",(0,t.jsx)(tK,{})]}),(0,t.jsxs)(nt,{children:[(0,t.jsxs)(ni,{children:[(0,t.jsx)(nc,{checked:x,onChange:()=>{n(e=>({...e,desiredAgeRanges:x?[]:tH}))}}),(0,t.jsx)(nd,{children:"전체 선택"})]}),tH.map(e=>(0,t.jsxs)(ni,{children:[(0,t.jsx)(nc,{checked:f.includes(e),onChange:()=>{l("desiredAgeRanges"),n(t=>({...t,desiredAgeRanges:f.includes(e)?f.filter(t=>t!==e):[...f,e]}))}}),(0,t.jsx)(nd,{children:"TWENTIES_OR_YONGER"===e||"SEVENTIES_OR_OLDER"===e?tn.default[e].label.replace(" 이하","").replace(" 이상",""):tn.default[e].label})]},e))]}),""!==i("desiredAgeRanges")&&(0,t.jsx)(t8,{"data-client-create-field-error":"true",children:i("desiredAgeRanges")})]}),h&&a.default.modal.clientCreate.isContractInputMode&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(tq,{}),(0,t.jsx)(ty,{})]}),(0,t.jsxs)(t7,{children:[(0,t.jsx)(ne,{children:"(타기관) 이용경험"}),(0,t.jsx)(no,{value:e.usageExperience??"",onChange:e=>{n(t=>({...t,usageExperience:e.target.value}))},placeholder:"텍스트를 입력해주세요."})]}),(0,t.jsxs)(t7,{children:[(0,t.jsx)(ne,{children:"특이사항 (장애특성 및 일상생활)"}),(0,t.jsx)(nr,{value:e.dailyLivingNotes??"",onChange:e=>{n(t=>({...t,dailyLivingNotes:e.target.value}))},placeholder:"특이사항을 입력해주세요."})]}),(0,t.jsxs)(t7,{children:[(0,t.jsx)(ne,{children:"종합소견"}),(0,t.jsx)(ns,{value:e.comprehensiveOpinion??"",onChange:e=>{n(t=>({...t,comprehensiveOpinion:e.target.value}))},placeholder:"종합소견을 입력해주세요."})]})]})]})});function tK(){return(0,t.jsx)(tJ,{children:" *"})}let tX=l.default.div.withConfig({componentId:"zh__sc-51651a13-0"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  align-self: stretch;
`,tq=l.default.div.withConfig({componentId:"zh__sc-51651a13-1"})`
  flex-shrink: 0;
  width: 100%;
  height: 1px;
  background: #e5e7eb;
`,tQ=l.default.div.withConfig({componentId:"zh__sc-51651a13-2"})`
  display: flex;
  gap: 16px;
  align-items: center;
  align-self: stretch;

  height: 30px;
`,tZ=l.default.div.withConfig({componentId:"zh__sc-51651a13-3"})`
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
  text-align: center;
`,tJ=l.default.span.withConfig({componentId:"zh__sc-51651a13-4"})`
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: normal;
  color: #e7000b;
`,t0=l.default.div.withConfig({componentId:"zh__sc-51651a13-5"})`
  display: flex;
  flex: 1 0 0;
  gap: 4px;
  align-items: center;

  color: #464c53;
`,t1=l.default.div.withConfig({componentId:"zh__sc-51651a13-6"})`
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px;
`,t2=(0,l.default)(o.default.Input.TimeSlider).withConfig({componentId:"zh__sc-51651a13-7"})`
  align-self: stretch;
`,t6=l.default.div.withConfig({componentId:"zh__sc-51651a13-8"})`
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
  align-self: stretch;
`,t4=l.default.div.withConfig({componentId:"zh__sc-51651a13-9"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #000;
  text-align: center;
`,t5=l.default.div.withConfig({componentId:"zh__sc-51651a13-10"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,t3=(0,l.default)(o.default.Input.Text).withConfig({componentId:"zh__sc-51651a13-11"})`
  width: 59px;
  height: 36px;
  text-align: center;
`,t9=l.default.div.withConfig({componentId:"zh__sc-51651a13-12"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #000;
  text-align: center;
`,t8=l.default.div.withConfig({componentId:"zh__sc-51651a13-13"})`
  font-size: 12px;
  line-height: 16px;
  color: #ff4d4f;
`,t7=l.default.div.withConfig({componentId:"zh__sc-51651a13-14"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
  align-self: stretch;
`,ne=l.default.div.withConfig({componentId:"zh__sc-51651a13-15"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #000;
  text-align: center;
`,nt=l.default.div.withConfig({componentId:"zh__sc-51651a13-16"})`
  display: flex;
  flex-wrap: wrap;
  gap: 0 24px;
  align-items: center;
`,nn=(0,l.default)(nt).withConfig({componentId:"zh__sc-51651a13-17"})`
  row-gap: 8px;
`,ni=l.default.label.withConfig({componentId:"zh__sc-51651a13-18"})`
  display: inline-flex;
  gap: 8px;
  align-items: center;
  height: 36px;
`,nl=l.default.div.withConfig({componentId:"zh__sc-51651a13-19"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,na=(0,l.default)(o.default.Input.Text).withConfig({componentId:"zh__sc-51651a13-20"})`
  width: 220px;
`,nd=l.default.span.withConfig({componentId:"zh__sc-51651a13-21"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #000;
  text-align: center;
`,no=(0,l.default)(o.default.Input.Textarea).withConfig({componentId:"zh__sc-51651a13-22"})`
  resize: vertical;

  width: 100%;
  min-height: 100px;
  padding: 12px 16px;

  font-size: 16px;
`,nr=(0,l.default)(o.default.Input.Text).withConfig({componentId:"zh__sc-51651a13-23"})`
  width: 100%;
  padding: 4px 16px;
  font-size: 16px;
`,ns=(0,l.default)(o.default.Input.Textarea).withConfig({componentId:"zh__sc-51651a13-24"})`
  resize: vertical;

  width: 100%;
  min-height: 156px;
  padding: 12px 16px;

  font-size: 16px;
`,nc=(0,l.default)(o.default.Input.Check).attrs({$iconSizeRatio:1.5}).withConfig({componentId:"zh__sc-51651a13-25"})`
  width: 24px;
  height: 24px;
`,nf=(0,n.observer)(function(){let{clientDraft:e,ocrDraft:n,updateClientDraft:i,getClientDraftFieldError:l,clearClientDraftFieldError:d}=a.default.modal.clientCreate;if(null===e||"DISABILITY_ACTIVITY_SUPPORT"===e.serviceType||!a.default.modal.clientCreate.isContractInputMode)return null;let o=e.serviceGrade??tt.default.SELECT_EMPTY_VALUE,r=l("serviceGrade"),s=""===r?eq:{...eq,borderColor:"#ff4d4f",background:"#fff5f5"};return(0,t.jsxs)(eK,{$width:181,children:[(0,t.jsxs)(eX,{children:["바우처 등급",(0,t.jsx)(nh,{})]}),(0,t.jsxs)(nu,{$isEmptySelected:o===tt.default.SELECT_EMPTY_VALUE,$autoFilled:o===(n?.serviceGrade??""),style:s,value:o,onChange:e=>{d("serviceGrade");let t=e.target.value;if(t===tt.default.SELECT_EMPTY_VALUE)return void i(e=>({...e,serviceGrade:void 0}));switch(t){case"1":case"2":case"3":case"4":i(e=>({...e,serviceGrade:t}));return;default:return}},children:[(0,t.jsx)("option",{value:tt.default.SELECT_EMPTY_VALUE,disabled:!0,children:"등급을 선택해주세요."}),(0,t.jsx)("option",{value:"1",children:"1등급"}),(0,t.jsx)("option",{value:"2",children:"2등급"}),(0,t.jsx)("option",{value:"3",children:"3등급"}),(0,t.jsx)("option",{value:"4",children:"4등급"})]}),""!==r&&(0,t.jsx)(nx,{"data-client-create-field-error":"true",children:r})]})});function nh(){return(0,t.jsx)(np,{children:" *"})}let np=l.default.span.withConfig({componentId:"zh__sc-238b45fe-0"})`
  font-size: 16px;
  font-weight: 400;
  color: #e7000b;
`,nu=(0,l.default)(o.default.Input.Select).withConfig({componentId:"zh__sc-238b45fe-1"})`
  color: ${({$autoFilled:e,$isEmptySelected:t})=>!0===e?"#4f39f6":t?"#9ca3af":"#0a0a0a"};
  background: ${({$autoFilled:e})=>!0===e?"#f4f2ff":"#fff"};
`,nx=l.default.div.withConfig({componentId:"zh__sc-238b45fe-2"})`
  margin-top: 4px;
  font-size: 12px;
  color: #e7000b;
`,ng=(0,n.observer)(function(){let{clientDraft:e,isServiceMatchingRegistration:n,matchingServiceWorkerName:i,updateClientDraft:l}=a.default.modal.clientCreate,d=a.default.data.serviceWorker.list,o=e?.contractStartDate??"",r=d.data??[];return e?.serviceType==="DISABILITY_ACTIVITY_SUPPORT"?null:(0,t.jsxs)(nm,{children:[(0,t.jsx)(nj,{children:"연결할 제공인력"}),(0,t.jsxs)(n_,{$isEmptySelected:e?.serviceWorkerId===void 0,style:nb,value:e?.serviceWorkerId??tt.default.SELECT_EMPTY_VALUE,disabled:n||""===o,onOpenChange:t=>{t&&null!==e&&(d.setQuery({serviceType:e.serviceType,regions:e.desiredRegions,times:e.desiredServiceTimes,status:"ACTIVE"}),d.refetch())},onChange:e=>{l(t=>({...t,serviceWorkerId:e.target.value===tt.default.SELECT_EMPTY_VALUE?void 0:e.target.value}))},children:[(0,t.jsx)("option",{value:tt.default.SELECT_EMPTY_VALUE,"data-trigger-label":"제공인력을 선택하세요.",children:"loading"===d.status?"조회 중...":"선택안함"}),null!==i&&r.every(t=>t.id!==e?.serviceWorkerId)&&(0,t.jsx)("option",{value:e?.serviceWorkerId,children:i}),r.map(e=>(0,t.jsx)("option",{value:e.id,children:e.name},e.id))]})]})}),nm=l.default.div.withConfig({componentId:"zh__sc-fe78af34-0"})`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
  align-self: stretch;

  width: 181px;
  min-height: 59px;
`,nj=l.default.div.withConfig({componentId:"zh__sc-fe78af34-1"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #000;
`,nb={display:"flex",padding:"4px 16px",alignItems:"center",gap:"10px",flex:"0 0 auto",fontSize:16,width:200,height:36},n_=(0,l.default)(o.default.Input.Select).withConfig({componentId:"zh__sc-fe78af34-2"})`
  min-height: 36px;
  color: ${({$isEmptySelected:e})=>e?"#9ca3af":"#0a0a0a"};

  &&:disabled {
    color: ${({$isEmptySelected:e})=>e?"#9ca3af":"#0a0a0a"};
  }
`,nw=(0,n.observer)(function(){let e=a.default.modal.clientCreate.clientDraft,n=e?.serviceType==="DISABILITY_ACTIVITY_SUPPORT",i=a.default.modal.clientCreate.isContractInputMode;return(0,t.jsxs)(ny,{children:[(0,t.jsx)(nv,{children:"이용자 기본 정보"}),(0,t.jsx)(e1,{}),(0,t.jsx)(nC,{}),(0,t.jsx)(tG,{}),!n&&i&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(nC,{}),(0,t.jsxs)(nI,{children:[(0,t.jsx)(nf,{}),(0,t.jsx)(ng,{})]})]})]})}),ny=l.default.div.withConfig({componentId:"zh__sc-52495c18-0"})`
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
`,nv=l.default.div.withConfig({componentId:"zh__sc-52495c18-1"})`
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
  text-align: center;
`,nC=l.default.div.withConfig({componentId:"zh__sc-52495c18-2"})`
  flex-shrink: 0;
  width: 100%;
  height: 1px;
  background: #e5e7eb;
`,nI=l.default.div.withConfig({componentId:"zh__sc-52495c18-3"})`
  display: flex;
  gap: 16px;
  align-items: flex-start;
  width: 100%;
`,nz=(0,n.observer)(function(){let{clientDraft:e}=a.default.modal.clientCreate;return(0,t.jsxs)(nT,{children:[(0,t.jsx)(eB,{}),e&&(0,t.jsx)(nw,{})]})}),nT=l.default.div.withConfig({componentId:"zh__sc-cfc6108c-0"})`
  overflow: hidden;
  display: flex;
  flex: 1 1 auto;
  align-self: stretch;
  justify-content: center;

  min-height: 0;
  max-height: none;

  background: #f9fafb;
`;function nE(){let{close:e,mode:n}=a.default.modal.clientCreate;return(0,t.jsxs)(nS,{children:[(0,t.jsx)(nk,{children:"renew"===n?"재계약 이용자 등록하기":"신규 이용자 등록하기"}),(0,t.jsxs)(nD,{onClick:e,children:[(0,t.jsx)(W.X,{size:16}),"닫기"]})]})}let nS=l.default.div.withConfig({componentId:"zh__sc-f50634fa-0"})`
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
`,nk=l.default.div.withConfig({componentId:"zh__sc-f50634fa-1"})`
  font-size: 18px;
  font-weight: 700;
  font-style: normal;
  line-height: 28px; /* 155.556% */
  color: #101828;
  letter-spacing: -0.439px;
`,nD=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-f50634fa-2"})`
  display: flex;
  gap: 6px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,nA=(0,n.observer)(function(){let e=a.default.modal.clientCreate,{status:n}=e,l=(0,i.useRef)(null);return((0,i.useEffect)(()=>"ready"!==n?void e.setToastContainer(null):(e.setToastContainer(l.current),()=>{e.setToastContainer(null)}),[e,n]),"ready"!==n)?null:(0,t.jsx)(d.default,{children:(0,t.jsxs)(nO,{ref:l,children:[(0,t.jsx)(nE,{}),(0,t.jsx)(nz,{}),(0,t.jsx)(b,{}),(0,t.jsx)(s,{currentServiceType:e.selectedServiceType,detectedServiceType:e.pendingDetectedServiceType??e.selectedServiceType,isContinueDisabled:!e.isPendingDetectedServiceAvailable,isOpen:e.isServiceTypeMismatchDialogOpen,onCancel:e.cancelServiceTypeMismatchRegistration,onContinue:e.confirmServiceTypeMismatchRegistration,registrationTarget:"이용자"}),(0,t.jsx)(S,{})]})})}),nO=l.default.div.withConfig({componentId:"zh__sc-21fa7296-0"})`
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
`;var nL=e.i(62897),n$=e.i(44968);function nR(e){if(!eV.default.is(e))return"-";let[t,n,i]=e.split("-");return`${t}년 ${Number(n)}월 ${Number(i)}일`}function nP(e){return e instanceof Element&&null!==e.closest('[aria-label="Date picker"]')}function nN(e){return e instanceof Element&&(null!==e.closest('[role="listbox"]')||null!==e.closest('[role="option"]')||null!==e.closest("[data-radix-select-viewport]")||null!==e.closest("[data-radix-popper-content-wrapper]"))}function nM(e){if(!eV.default.is(e))return"-";let[t,n,i]=e.split("-");return`${t}.${n}.${i}`}var nF=e.i(38797);let nU=(0,nF.default)((0,t.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"}),"AddOutlined"),nB=(0,nF.default)((0,t.jsx)("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"CheckOutlined");var nY=e.i(17510);let nV=(0,nF.default)((0,t.jsx)("path",{d:"m15 5-1.41 1.41L18.17 11H2v2h16.17l-4.59 4.59L15 19l7-7z"}),"EastOutlined");var nW=e.i(84527),nH=e.i(74483),nG=e.i(82130);let nK=l.default.div.withConfig({componentId:"zh__sc-422803e4-0"})`
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
`,nX=l.default.div.withConfig({componentId:"zh__sc-422803e4-1"})`
  padding: 16px;
  border: 1px dashed #d1d5db;
  border-radius: 10px;

  font-size: 14px;
  color: #6b7280;
`,nq=l.default.div.withConfig({componentId:"zh__sc-422803e4-2"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;

  width: 100%;
`,nQ=l.default.div.withConfig({componentId:"zh__sc-422803e4-3"})`
  display: flex;
  align-items: center;
  align-self: stretch;
  min-height: 40px;
`,nZ=l.default.div.withConfig({componentId:"zh__sc-422803e4-4"})`
  display: flex;
  flex: 1 0 0;
  align-items: center;
  justify-content: space-between;

  min-width: 0;
  min-height: 40px;
`,nJ=l.default.h3.withConfig({componentId:"zh__sc-422803e4-5"})`
  margin: 0;

  font-size: 18px;
  font-weight: 700;
  line-height: 20px;
  color: #101828;
`,n0=l.default.div.withConfig({componentId:"zh__sc-422803e4-6"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,n1=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-422803e4-7"})`
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
`;let n2=l.default.span.withConfig({componentId:"zh__sc-422803e4-9"})`
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
`,n6=(0,l.default)(o.default.Input.Text).withConfig({componentId:"zh__sc-422803e4-10"})`
  width: 100%;
  height: 28px;
  padding: 0 16px;

  font-size: 16px;
  line-height: 16px;
`,n4=(0,l.default)(o.default.Input.Phone).withConfig({componentId:"zh__sc-422803e4-11"})`
  width: 100%;
  height: 28px;
  padding: 0 16px;

  font-size: 16px;
  line-height: 16px;
`,n5=(0,l.default)(o.default.Input.Contact).withConfig({componentId:"zh__sc-422803e4-12"})`
  width: 100%;
  height: 28px;
  padding: 0 16px;

  font-size: 16px;
  line-height: 16px;
`,n3=(0,l.default)(o.default.Input.PostCode).withConfig({componentId:"zh__sc-422803e4-13"})`
  width: 100%;
  height: 28px;
  padding: 0 16px;

  font-size: 16px;
  line-height: 16px;
`,n9=(0,l.default)(o.default.Input.ResidentRegistrationNumber).withConfig({componentId:"zh__sc-422803e4-14"})`
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
`;let n8=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-422803e4-16"})`
  display: flex;
  gap: 8px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,n7=l.default.div.withConfig({componentId:"zh__sc-422803e4-17"})`
  position: fixed;
  z-index: 1000;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgb(10 10 10 / 35%);
`,ie=l.default.div.withConfig({componentId:"zh__sc-422803e4-18"})`
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
`,it=l.default.div.withConfig({componentId:"zh__sc-422803e4-19"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;
`,ii=l.default.h2.withConfig({componentId:"zh__sc-422803e4-20"})`
  align-self: stretch;

  margin: 0;

  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  color: #000;
`,il=l.default.p.withConfig({componentId:"zh__sc-422803e4-21"})`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: #000;
`,ia=l.default.div.withConfig({componentId:"zh__sc-422803e4-22"})`
  display: flex;
  gap: 12px;
  align-items: center;
  align-self: stretch;
  justify-content: flex-end;
`,id=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-422803e4-23"})`
  height: 36px;
  padding: 8px 16px;
`,io=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-422803e4-24"})`
  height: 36px;
  padding: 8px 16px;
`,ir=(0,n.observer)(function({guardianList:e,selectedGuardianId:n,onAddGuardian:l,onUpdateGuardian:a}){let d=e.length>0,[r,s]=(0,i.useState)(!1),[c,f]=(0,i.useState)(!1),[h,p]=(0,i.useState)(!1),[u,x]=(0,i.useState)(!1),[g,m]=(0,i.useState)(""),[j,b]=(0,i.useState)({name:"",relation:"",phone:"",address:""}),[_,w]=(0,i.useState)({name:"",relation:"",phone:"",address:""}),y=null!==n&&e.some(e=>e.id===n)?n:null,v=(0,i.useMemo)(()=>{if(null===y)return e;let t=e.find(e=>e.id===y);return t?[t,...e.filter(e=>e.id!==y)]:e},[y,e]),C=()=>{b({name:"",relation:"",phone:"",address:""}),w({name:"",relation:"",phone:"",address:""}),m("")},I=()=>{s(!1),f(!1),p(!1),C()},z=(e,t)=>{b(n=>({...n,[e]:t})),w(t=>({...t,[e]:""})),m("")},T=async()=>{x(!0);let e={name:j.name,relation:j.relation,phone:j.phone,address:j.address},t=c&&null!==y?await a(y,e):await l(e);(x(!1),p(!1),null===t)?m("보호자 정보를 저장하지 못했습니다. 잠시 후 다시 시도해 주세요."):I()},E=r?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(iE,{onClick:I,children:(0,t.jsxs)(iS,{onClick:e=>e.stopPropagation(),children:[(0,t.jsxs)(ik,{children:[(0,t.jsx)(iD,{}),(0,t.jsx)(iA,{children:c?"보호자 정보 수정":"신규 보호자 추가"}),(0,t.jsx)(o.default.Button.Outlined,{type:"button",style:{width:56,height:36,padding:8},onClick:I,children:(0,t.jsx)(nY.default,{sx:{fontSize:20}})})]}),(0,t.jsx)(iO,{}),(0,t.jsx)(iL,{children:(0,t.jsxs)(i$,{children:[(0,t.jsxs)(iR,{children:[(0,t.jsxs)(iN,{children:[(0,t.jsx)(iM,{children:"성명"}),(0,t.jsx)(iF,{type:"text",placeholder:"보호자 성명을 입력하세요.",value:j.name,onChange:e=>z("name",e.target.value),$hasError:""!==_.name}),(0,t.jsx)(iY,{children:_.name})]}),(0,t.jsxs)(iN,{children:[(0,t.jsx)(iM,{children:"이용자와의 관계"}),(0,t.jsx)(iF,{type:"text",placeholder:"예: 자녀(딸), 자녀(아들), 자녀(며느리)",value:j.relation,onChange:e=>z("relation",e.target.value),$hasError:""!==_.relation}),(0,t.jsx)(iY,{children:_.relation})]}),(0,t.jsxs)(iN,{children:[(0,t.jsx)(iM,{children:"휴대폰"}),(0,t.jsx)(iU,{placeholder:"휴대폰을 입력해주세요.",value:j.phone,onChange:e=>z("phone",e),$hasError:""!==_.phone}),(0,t.jsx)(iY,{children:_.phone})]}),(0,t.jsxs)(iN,{children:[(0,t.jsx)(iM,{children:"주소"}),(0,t.jsx)(iB,{rows:3,placeholder:"보호자 주소를 입력하세요.",value:j.address,onChange:e=>z("address",e.target.value),$hasError:""!==_.address}),(0,t.jsx)(iY,{children:_.address})]})]}),(0,t.jsxs)(iP,{children:[(0,t.jsx)(iV,{children:g}),(0,t.jsxs)(o.default.Button.Filled.Primary,{type:"button",style:{display:"flex",gap:4,alignItems:"center",height:36,padding:"8px 16px"},onClick:()=>{if(u)return;let e={name:""===j.name.trim()?"필수 입력값입니다.":"",relation:"",phone:""===j.phone.trim()||nG.default.is(j.phone)?"":"유효한 휴대폰 형식이 아닙니다.",address:""};w(e),Object.values(e).some(e=>""!==e)||p(!0)},children:[(0,t.jsx)(nB,{sx:{fontSize:20}}),c?"수정 완료":"추가 완료"]})]})]})})]})}),h?(0,t.jsx)(iW,{children:(0,t.jsxs)(iH,{children:[(0,t.jsx)(iG,{children:(0,t.jsx)(iK,{children:c?"보호자 정보를 수정할까요?":"신규 보호자 정보를 추가할까요?"})}),(0,t.jsxs)(iX,{children:[(0,t.jsx)(o.default.Button.Outlined,{type:"button",style:{width:91,height:36,padding:"8px 16px"},disabled:u,onClick:()=>p(!1),children:"취소하기"}),(0,t.jsx)(o.default.Button.Filled.Primary,{type:"button",style:{width:91,height:36,padding:"8px 16px"},disabled:u,onClick:()=>void T(),children:u?"저장 중...":c?"수정하기":"추가하기"})]})]})}):null]}):null;return(0,t.jsxs)(nq,{children:[(0,t.jsx)(nQ,{children:(0,t.jsxs)(nZ,{children:[(0,t.jsx)(nJ,{children:"보호자 정보"}),(0,t.jsxs)(n0,{children:[(0,t.jsxs)(n1,{type:"button",disabled:null===y,onClick:()=>{let t=e.find(e=>e.id===y);t&&(f(!0),b({name:t.name,relation:t.relationship??"",phone:t.phoneNumber??"",address:t.address??""}),w({name:"",relation:"",phone:"",address:""}),m(""),s(!0))},children:[(0,t.jsx)(nW.default,{sx:{fontSize:20}}),"수정하기"]}),(0,t.jsxs)(n1,{type:"button",onClick:()=>{f(!1),C(),s(!0)},children:[(0,t.jsx)(nU,{sx:{fontSize:20}}),"추가하기"]})]})]})}),d?(0,t.jsx)(is,{children:v.map(e=>{let n=e.id===y;return(0,t.jsxs)(ic,{$isSelected:n,children:[(0,t.jsxs)(ih,{children:[(0,t.jsx)(ip,{children:e.name}),(0,t.jsx)(iu,{children:null===e.relationship||""===e.relationship?"이용자와의 관계: -":`이용자와의 관계: ${e.relationship}`})]}),(0,t.jsxs)(ix,{children:[(0,t.jsxs)(ig,{children:[(0,t.jsx)(im,{children:"주소"}),(0,t.jsx)(ij,{}),(0,t.jsx)(i_,{children:e.address??"-"})]}),(0,t.jsxs)(ig,{children:[(0,t.jsx)(im,{children:"휴대폰"}),(0,t.jsx)(ij,{}),(0,t.jsx)(ib,{children:e.phoneNumber??"-"})]}),(0,t.jsxs)(ig,{children:[(0,t.jsx)(im,{children:"이메일"}),(0,t.jsx)(ij,{}),(0,t.jsx)(ib,{children:"-"})]})]}),(0,t.jsx)(iw,{children:n?(0,t.jsx)(iy,{children:"지금 선택됨"}):(0,t.jsxs)(iv,{type:"button",disabled:!0,children:["선택",(0,t.jsx)(nV,{sx:{fontSize:16}})]})})]},e.id)})}):(0,t.jsxs)(iC,{children:[(0,t.jsx)(nH.default,{sx:{fontSize:24,color:"#494F53"}}),(0,t.jsxs)(iI,{children:[(0,t.jsx)(iz,{children:"등록된 보호자 정보가 없습니다."}),(0,t.jsx)(iT,{children:"보호자 정보 등록이 필요한 경우 [+추가하기] 버튼을 클릭하고 등록할 수 있습니다."})]})]}),E]})}),is=l.default.div.withConfig({componentId:"zh__sc-b1996503-0"})`
  overflow: auto hidden;
  display: flex;
  flex-wrap: nowrap;
  gap: 10px;

  width: 100%;
`,ic=l.default.div.withConfig({componentId:"zh__sc-b1996503-1"})`
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
`,ih=l.default.div.withConfig({componentId:"zh__sc-b1996503-2"})`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;

  width: 100%;
`,ip=l.default.div.withConfig({componentId:"zh__sc-b1996503-3"})`
  flex-shrink: 0;

  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  color: #0a0a0a;
`,iu=l.default.div.withConfig({componentId:"zh__sc-b1996503-4"})`
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
`,ix=l.default.div.withConfig({componentId:"zh__sc-b1996503-5"})`
  display: flex;
  flex-direction: column;
  gap: 4px;

  width: 100%;
  padding-bottom: 36px;
`,ig=l.default.div.withConfig({componentId:"zh__sc-b1996503-6"})`
  display: flex;
  gap: 8px;
  align-items: flex-start;
  width: 100%;
`,im=l.default.span.withConfig({componentId:"zh__sc-b1996503-7"})`
  width: 52px;
  min-width: 52px;

  font-size: 14px;
  line-height: 20px;
  color: #0a0a0a;
`,ij=l.default.span.withConfig({componentId:"zh__sc-b1996503-8"})`
  width: 1px;
  height: 20px;
  background: #e5e7eb;
`,ib=l.default.span.withConfig({componentId:"zh__sc-b1996503-9"})`
  min-width: 0;

  font-size: 14px;
  line-height: 20px;
  color: #0a0a0a;
  overflow-wrap: anywhere;
`,i_=(0,l.default)(ib).withConfig({componentId:"zh__sc-b1996503-10"})`
  color: #45464e;
`,iw=l.default.div.withConfig({componentId:"zh__sc-b1996503-11"})`
  position: absolute;
  right: 16px;
  bottom: 16px;

  display: flex;
  justify-content: flex-end;
`,iy=l.default.div.withConfig({componentId:"zh__sc-b1996503-12"})`
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
`,iv=l.default.button.withConfig({componentId:"zh__sc-b1996503-13"})`
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
`,iC=l.default.div.withConfig({componentId:"zh__sc-b1996503-14"})`
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
`,iI=l.default.div.withConfig({componentId:"zh__sc-b1996503-15"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: center;
`,iz=l.default.div.withConfig({componentId:"zh__sc-b1996503-16"})`
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  color: #494f53;
`,iT=l.default.div.withConfig({componentId:"zh__sc-b1996503-17"})`
  font-size: 14px;
  line-height: 20px;
  color: #494f53;
  text-align: center;
`,iE=l.default.div.withConfig({componentId:"zh__sc-b1996503-18"})`
  position: absolute;
  z-index: 20;
  inset: 0;

  display: flex;
  justify-content: flex-end;

  background: rgb(17 24 39 / 28%);
`,iS=l.default.div.withConfig({componentId:"zh__sc-b1996503-19"})`
  display: flex;
  flex-direction: column;

  width: min(417px, 100%);
  height: 100%;

  background: #fff;
  box-shadow: -2px 9px 16px rgb(0 0 0 / 16%);
`,ik=l.default.div.withConfig({componentId:"zh__sc-b1996503-20"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
`,iD=l.default.div.withConfig({componentId:"zh__sc-b1996503-21"})`
  flex-shrink: 0;
  width: 36px;
  height: 36px;
`,iA=l.default.div.withConfig({componentId:"zh__sc-b1996503-22"})`
  flex: 1;

  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  color: #0a0a0a;
  text-align: center;
`,iO=l.default.div.withConfig({componentId:"zh__sc-b1996503-23"})`
  height: 1px;
  background: #e5e7eb;
`,iL=l.default.div.withConfig({componentId:"zh__sc-b1996503-24"})`
  overflow-y: auto;
  display: flex;
  flex: 1;
  flex-direction: column;

  padding: 16px;
`,i$=l.default.div.withConfig({componentId:"zh__sc-b1996503-25"})`
  display: flex;
  flex-direction: column;
  gap: 16px;

  padding: 16px;
  border: 1px solid #e5e9ef;
  border-radius: 8px;

  background: #fff;
`,iR=l.default.div.withConfig({componentId:"zh__sc-b1996503-26"})`
  display: flex;
  flex-direction: column;
`,iP=l.default.div.withConfig({componentId:"zh__sc-b1996503-27"})`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: flex-end;
`,iN=l.default.div.withConfig({componentId:"zh__sc-b1996503-28"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,iM=l.default.label.withConfig({componentId:"zh__sc-b1996503-29"})`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: #0a0a0a;
`,iF=l.default.input.withConfig({componentId:"zh__sc-b1996503-30"})`
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
`,iU=(0,l.default)(o.default.Input.Phone).withConfig({componentId:"zh__sc-b1996503-31"})`
  width: 100%;
  height: 36px;
  padding: 4px 16px;
  border-color: ${e=>e.$hasError?"#ef4444":"#e5e9ef"};

  font-size: 16px;

  &:focus {
    border-color: ${e=>e.$hasError?"#ef4444":"#5635ff"};
  }
`,iB=l.default.textarea.withConfig({componentId:"zh__sc-b1996503-32"})`
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
`,iY=l.default.div.withConfig({componentId:"zh__sc-b1996503-33"})`
  min-height: 20px;
  font-size: 12px;
  line-height: 20px;
  color: #ef4444;
`,iV=l.default.div.withConfig({componentId:"zh__sc-b1996503-34"})`
  min-height: 20px;
  font-size: 12px;
  line-height: 20px;
  color: #ef4444;
`,iW=l.default.div.withConfig({componentId:"zh__sc-b1996503-35"})`
  position: absolute;
  z-index: 30;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgb(17 24 39 / 12%);
`,iH=l.default.div.withConfig({componentId:"zh__sc-b1996503-36"})`
  display: flex;
  flex-direction: column;
  gap: 48px;

  width: 501px;
  padding: 32px 24px;
  border: 1px solid #e5e9ef;
  border-radius: 8px;

  background: #fff;
  box-shadow: 0 4px 2px rgb(0 0 0 / 10%);
`,iG=l.default.div.withConfig({componentId:"zh__sc-b1996503-37"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`,iK=l.default.div.withConfig({componentId:"zh__sc-b1996503-38"})`
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  color: #000;
`,iX=l.default.div.withConfig({componentId:"zh__sc-b1996503-39"})`
  display: flex;
  gap: 12px;
  justify-content: flex-end;
`;var iq=e.i(84673),iQ=e.i(76207),iZ=e.i(54304);function iJ(e,t){return void 0!==e&&Object.prototype.hasOwnProperty.call(e,t)}let i0=Object.keys(tl.default).filter(function(e){return e in tl.default}),i1=["PHYSICAL_ACTIVITY_SUPPORT","HOUSEKEEPING_SUPPORT","SOCIAL_ACTIVITY_SUPPORT","OTHER"],i2=["MALE","FEMALE"],i6=["TWENTIES_OR_YONGER","THIRTIES","FORTIES","FIFTIES","SIXTIES","SEVENTIES_OR_OLDER"],i4=["MON","TUE","WED","THU","FRI","SAT","SUN"],i5=[["ALONE","독거"],["COUPLE","부부"],["SINGLE_PARENT","한부모"],["OTHER","기타"]],i3=[["ministry","보건복지부"],["metropolitan","광역지자체"],["local","기초지자체"],["other","기타"]],i9=(0,n.observer)(function(){let e=a.default.client.info.byClient,[n,l]=(0,i.useState)({}),[d,r]=(0,i.useState)(""),s=(0,i.useRef)(null),c=e.isServiceConditionEditing,f=e.selectedClient,h=e.selectedServiceConditionDraft,p=h?.desiredServiceTimes??f?.desiredServiceTimes.flatMap(({dayOfWeek:e,hour:t})=>iQ.default.some(e=>e===t)?[{dayOfWeek:e,hour:t}]:[])??[],u=h?.desiredRegions??f?.desiredRegions??[],x=h?.desiredCareTypes??f?.desiredCareTypes.map(({careType:e,detail:t})=>({careType:e,...null===t?{}:{detail:t}}))??[],g=void 0!==h&&Object.prototype.hasOwnProperty.call(h,"desiredServiceWorkerGender")?h.desiredServiceWorkerGender:f?.desiredServiceWorkerGender,m=h?.desiredAgeRanges??f?.desiredAgeRanges??[],j=h?.workplace??f?.workplace??"",b=h?.schoolName??f?.schoolName??"",_=iJ(h,"schoolStartTime")?h?.schoolStartTime??"":f?.schoolStartTime??"",w=iJ(h,"schoolEndTime")?h?.schoolEndTime??"":f?.schoolEndTime??"",y=h?.schoolDays??f?.schoolDays??[],v=h?.careCenterName??f?.careCenterName??"",C=iJ(h,"careCenterStartTime")?h?.careCenterStartTime??"":f?.careCenterStartTime??"",I=iJ(h,"careCenterEndTime")?h?.careCenterEndTime??"":f?.careCenterEndTime??"",z=h?.careCenterDays??f?.careCenterDays??[],T=iJ(h,"primaryDisabilityName")?h?.primaryDisabilityName??"":f?.primaryDisabilityName??"",E=iJ(h,"primaryDisabilityGrade")?h?.primaryDisabilityGrade??"":f?.primaryDisabilityGrade??"",S=iJ(h,"primaryDisabilitySeverity")?h?.primaryDisabilitySeverity??"":f?.primaryDisabilitySeverity??"",k=iJ(h,"secondaryDisabilityName")?h?.secondaryDisabilityName??"":f?.secondaryDisabilityName??"",D=iJ(h,"secondaryDisabilityGrade")?h?.secondaryDisabilityGrade??"":f?.secondaryDisabilityGrade??"",A=iJ(h,"secondaryDisabilitySeverity")?h?.secondaryDisabilitySeverity??"":f?.secondaryDisabilitySeverity??"",O=h?.chronicDiseaseNames??f?.chronicDiseaseNames??"",L=h?.medicationInfo??f?.medicationInfo??"",$=h?.hasTraumaDisability??f?.hasTraumaDisability??void 0,R=h?.communicationStatus??f?.communicationStatus,P=iJ(h,"communicationStatusDetail")?h?.communicationStatusDetail??"":f?.communicationStatusDetail??"",N=h?.hasWheelchair??f?.hasWheelchair,M=h?.isMarried??f?.isMarried,F=h?.familyStatus??f?.familyStatus,U=iJ(h,"familyStatusDetail")?h?.familyStatusDetail??"":f?.familyStatusDetail??"",B={ministry:iJ(h,"ministryDeterminedHours")?h?.ministryDeterminedHours:f?.ministryDeterminedHours,metropolitan:iJ(h,"metroDeterminedHours")?h?.metroDeterminedHours:f?.metroDeterminedHours,local:iJ(h,"basicDeterminedHours")?h?.basicDeterminedHours:f?.basicDeterminedHours,other:iJ(h,"otherDeterminedHours")?h?.otherDeterminedHours:f?.otherDeterminedHours},Y=h?.usageExperience??f?.usageExperience??"",V=h?.dailyLivingNotes??f?.dailyLivingNotes??"",W=h?.comprehensiveOpinion??f?.comprehensiveOpinion??"",H="DISABILITY_ACTIVITY_SUPPORT"===e.currentServiceType,G=i0.every(e=>u.includes(e)),K=i1.every(e=>x.some(t=>t.careType===e)),X=i6.every(e=>m.includes(e)),q=async()=>{let t=Object.fromEntries(Object.entries({schoolStartTime:_,schoolEndTime:w,careCenterStartTime:C,careCenterEndTime:I}).flatMap(([e,t])=>""===t||iZ.default.is(t)?[]:[[e,"유효한 시간 형식이 아닙니다."]]));l(t),Object.keys(t).length>0||await e.saveSelectedServiceConditionDraft()};(0,i.useEffect)(()=>{if(0===Object.keys(n).length)return;let e=window.requestAnimationFrame(()=>{document.querySelector("[data-service-condition-field-error]")?.scrollIntoView({block:"center",behavior:"smooth"})});return()=>window.cancelAnimationFrame(e)},[n]);let Q=(t,n)=>{l(e=>({...e,[t]:""})),e.updateSelectedServiceConditionDraftField(t,n)};return(0,i.useEffect)(()=>{if(!c)return;let t=t=>{let n=t.target;n instanceof Node&&null!==s.current&&s.current.contains(n)||n instanceof Element&&(null!==n.closest('[role="listbox"]')||null!==n.closest('[role="option"]')||null!==n.closest("[data-radix-select-viewport]")||null!==n.closest("[data-radix-popper-content-wrapper]"))||e.cancelServiceConditionEdit()};return document.addEventListener("pointerdown",t),()=>{document.removeEventListener("pointerdown",t)}},[e,c]),(0,t.jsxs)(nq,{ref:s,children:[(0,t.jsxs)(i7,{children:[(0,t.jsxs)(lt,{children:[(0,t.jsx)(le,{children:"서비스 희망 시간"}),c?(0,t.jsx)(n2,{children:"수정 진행중"}):null]}),(0,t.jsxs)(ln,{children:[(0,t.jsx)(te.default,{sx:{fontSize:20}}),(0,t.jsx)(li,{children:"시간대를 추가하고, 추가한 시간대를 클릭하면 수정하거나 삭제할 수 있습니다."})]}),c?(0,t.jsxs)(n0,{children:[(0,t.jsxs)(n1,{type:"button",onClick:e.cancelServiceConditionEdit,children:[(0,t.jsx)(iq.default,{sx:{fontSize:20}}),"수정 취소"]}),(0,t.jsxs)(n1,{type:"button",onClick:()=>void q(),children:[(0,t.jsx)(nB,{sx:{fontSize:20}}),"수정 저장"]})]}):(0,t.jsxs)(n1,{type:"button",onClick:e.startServiceConditionEdit,children:[(0,t.jsx)(nW.default,{sx:{fontSize:20}}),"수정하기"]})]}),(0,t.jsx)(ll,{value:p,disabled:!c,readOnly:!c,onChange:t=>e.updateSelectedServiceConditionDraftTimes(t.target.value)}),(0,t.jsxs)(la,{children:[(0,t.jsx)(ld,{children:"희망 서비스 시간"}),(0,t.jsxs)(lo,{children:[(0,t.jsx)(ls,{children:"총"}),(0,t.jsx)(lr,{value:d,disabled:!c,placeholder:"00",inputMode:"numeric",maxLength:2,onChange:e=>{let t=e.target.value.replace(/\D/g,"");r(""===t?"":String(Math.min(Number(t),99)))}}),(0,t.jsx)(ls,{children:"시간"})]})]}),(0,t.jsxs)(i8,{children:[(0,t.jsx)(lc,{children:"서비스 가능 지역 (복수 선택 가능)"}),(0,t.jsxs)(lf,{children:[(0,t.jsxs)(lh,{children:[(0,t.jsx)(lx,{disabled:!c,checked:G,onChange:()=>e.updateSelectedServiceConditionDraftRegions(G?[]:i0)}),(0,t.jsx)(lm,{children:"전체 선택"})]}),i0.map(n=>(0,t.jsxs)(lh,{children:[(0,t.jsx)(lx,{disabled:!c,checked:u.includes(n),onChange:()=>{let t=u.includes(n)?u.filter(e=>e!==n):[...u,n];e.updateSelectedServiceConditionDraftRegions(t)}}),(0,t.jsx)(lm,{children:tl.default[n].label})]},n))]})]}),H?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(i8,{children:[(0,t.jsx)(lc,{children:"희망 활동 내용 (복수 선택 가능)"}),(0,t.jsxs)(lf,{children:[(0,t.jsxs)(lh,{children:[(0,t.jsx)(lx,{disabled:!c,checked:K,onChange:()=>e.updateSelectedServiceConditionDraftCareTypes(K?[]:i1.map(e=>x.find(t=>t.careType===e)??{careType:e}))}),(0,t.jsx)(lm,{children:"전체 선택"})]}),i1.map(n=>{let i=x.find(e=>e.careType===n);return(0,t.jsxs)(lp,{children:[(0,t.jsxs)(lh,{children:[(0,t.jsx)(lx,{disabled:!c,checked:void 0!==i,onChange:()=>{let t=void 0===i?[...x,{careType:n}]:x.filter(e=>e.careType!==n);e.updateSelectedServiceConditionDraftCareTypes(t)}}),(0,t.jsx)(lm,{children:"PHYSICAL_ACTIVITY_SUPPORT"===n?"신체 활동":ta.default[n].label.replace("활동"," 활동")})]}),(0,t.jsx)(lu,{value:i?.detail??"",placeholder:"관련 내용을 입력해주세요.",readOnly:!c||void 0===i,onChange:t=>{void 0!==i&&e.updateSelectedServiceConditionDraftCareTypes(x.map(e=>e.careType===n?{...e,detail:t.target.value}:e))},style:lk})]},n)})]})]}),(0,t.jsxs)(i8,{children:[(0,t.jsx)(lc,{children:"제공인력 희망 성별"}),(0,t.jsxs)(lf,{children:[(0,t.jsxs)(lh,{children:[(0,t.jsx)(lg,{disabled:!c,checked:null==g,onChange:()=>e.updateSelectedServiceConditionDraftGender(null)}),(0,t.jsx)(lm,{children:"전체"})]}),i2.map(n=>(0,t.jsxs)(lh,{children:[(0,t.jsx)(lg,{disabled:!c,checked:g===n,onChange:()=>e.updateSelectedServiceConditionDraftGender(n)}),(0,t.jsx)(lm,{children:ti.default[n].label})]},n))]})]}),(0,t.jsxs)(i8,{children:[(0,t.jsx)(lc,{children:"제공인력 희망 연령 (복수 선택 가능)"}),(0,t.jsxs)(lf,{children:[(0,t.jsxs)(lh,{children:[(0,t.jsx)(lx,{disabled:!c,checked:X,onChange:()=>e.updateSelectedServiceConditionDraftAgeRanges(X?[]:i6)}),(0,t.jsx)(lm,{children:"전체 선택"})]}),i6.map(n=>(0,t.jsxs)(lh,{children:[(0,t.jsx)(lx,{disabled:!c,checked:m.includes(n),onChange:()=>e.updateSelectedServiceConditionDraftAgeRanges(m.includes(n)?m.filter(e=>e!==n):[...m,n])}),(0,t.jsx)(lm,{children:"TWENTIES_OR_YONGER"===n||"SEVENTIES_OR_OLDER"===n?tn.default[n].label.replace(" 이하","").replace(" 이상",""):tn.default[n].label})]},n))]})]}),(0,t.jsx)(lj,{children:"직장 및 학교"}),(0,t.jsx)(lb,{children:(0,t.jsxs)(l_,{children:[(0,t.jsx)(lw,{children:"직장"}),(0,t.jsx)(o.default.Input.Text,{value:j,placeholder:"직장명을 입력하세요.",readOnly:!c,onChange:t=>e.updateSelectedServiceConditionDraftField("workplace",t.target.value),style:lk})]})}),(0,t.jsxs)(lb,{children:[(0,t.jsxs)(l_,{$width:395,children:[(0,t.jsx)(lw,{children:"학교명"}),(0,t.jsx)(o.default.Input.Text,{value:b,placeholder:"학교명을 입력하세요.",readOnly:!c,onChange:t=>e.updateSelectedServiceConditionDraftField("schoolName",t.target.value),style:lk})]}),(0,t.jsxs)(l_,{$width:273,"data-service-condition-field-error":void 0!==n.schoolStartTime&&""!==n.schoolStartTime||void 0,children:[(0,t.jsx)(lw,{children:"시작 시간"}),(0,t.jsx)(o.default.Input.TimeHhmm,{value:_,placeholder:"00:00",readOnly:!c,onChange:e=>Q("schoolStartTime",e),style:{...lk,...void 0!==n.schoolStartTime&&""!==n.schoolStartTime?lD:{}}}),(0,t.jsx)(lA,{children:n.schoolStartTime})]}),(0,t.jsx)(lv,{children:"~"}),(0,t.jsxs)(l_,{$width:273,"data-service-condition-field-error":void 0!==n.schoolEndTime&&""!==n.schoolEndTime||void 0,children:[(0,t.jsx)(lw,{children:"종료 시간"}),(0,t.jsx)(o.default.Input.TimeHhmm,{value:w,placeholder:"00:00",readOnly:!c,onChange:e=>Q("schoolEndTime",e),style:{...lk,...void 0!==n.schoolEndTime&&""!==n.schoolEndTime?lD:{}}}),(0,t.jsx)(lA,{children:n.schoolEndTime})]})]}),(0,t.jsxs)(lC,{children:[(0,t.jsx)(lw,{children:"등교 요일"}),(0,t.jsx)(lf,{children:i4.map(n=>(0,t.jsxs)(lh,{children:[(0,t.jsx)(lx,{disabled:!c,checked:y.includes(n),onChange:()=>e.updateSelectedServiceConditionDraftField("schoolDays",y.includes(n)?y.filter(e=>e!==n):[...y,n])}),(0,t.jsx)(lm,{children:to.default[n].label})]},n))})]}),(0,t.jsx)(lj,{children:"주단기보호센터"}),(0,t.jsxs)(lb,{children:[(0,t.jsxs)(l_,{$width:395,children:[(0,t.jsx)(lw,{children:"주단기보호센터명"}),(0,t.jsx)(o.default.Input.Text,{value:v,placeholder:"센터명을 입력하세요.",readOnly:!c,onChange:t=>e.updateSelectedServiceConditionDraftField("careCenterName",t.target.value),style:lk})]}),(0,t.jsxs)(l_,{$width:273,"data-service-condition-field-error":void 0!==n.careCenterStartTime&&""!==n.careCenterStartTime||void 0,children:[(0,t.jsx)(lw,{children:"시작 시간"}),(0,t.jsx)(o.default.Input.TimeHhmm,{value:C,placeholder:"00:00",readOnly:!c,onChange:e=>Q("careCenterStartTime",e),style:{...lk,...void 0!==n.careCenterStartTime&&""!==n.careCenterStartTime?lD:{}}}),(0,t.jsx)(lA,{children:n.careCenterStartTime})]}),(0,t.jsx)(lv,{children:"~"}),(0,t.jsxs)(l_,{$width:273,"data-service-condition-field-error":void 0!==n.careCenterEndTime&&""!==n.careCenterEndTime||void 0,children:[(0,t.jsx)(lw,{children:"종료 시간"}),(0,t.jsx)(o.default.Input.TimeHhmm,{value:I,placeholder:"00:00",readOnly:!c,onChange:e=>Q("careCenterEndTime",e),style:{...lk,...void 0!==n.careCenterEndTime&&""!==n.careCenterEndTime?lD:{}}}),(0,t.jsx)(lA,{children:n.careCenterEndTime})]})]}),(0,t.jsxs)(lC,{children:[(0,t.jsx)(lw,{children:"등원 요일"}),(0,t.jsx)(lf,{children:i4.map(n=>(0,t.jsxs)(lh,{children:[(0,t.jsx)(lx,{disabled:!c,checked:z.includes(n),onChange:()=>e.updateSelectedServiceConditionDraftField("careCenterDays",z.includes(n)?z.filter(e=>e!==n):[...z,n])}),(0,t.jsx)(lm,{children:to.default[n].label})]},n))})]}),(0,t.jsx)(lj,{children:"판정시간"}),(0,t.jsx)(lb,{children:i3.map(([n,i])=>(0,t.jsxs)(l_,{children:[(0,t.jsx)(lw,{children:i}),(0,t.jsxs)(lI,{children:[(0,t.jsx)(o.default.Input.Text,{value:B[n]??"",placeholder:"00",inputMode:"numeric",readOnly:!c,onChange:t=>{let i=t.target.value.replace(/\D/g,"");e.updateSelectedServiceConditionDraftField({ministry:"ministryDeterminedHours",metropolitan:"metroDeterminedHours",local:"basicDeterminedHours",other:"otherDeterminedHours"}[n],""===i?void 0:Number(i))},style:{...lk,width:140,textAlign:"center"}}),(0,t.jsx)(lz,{children:"시간"})]})]},n))}),(0,t.jsxs)(lb,{children:[(0,t.jsxs)(l_,{children:[(0,t.jsx)(lw,{children:"주장애명"}),(0,t.jsxs)(ly,{$isEmptySelected:""===T,value:T||tt.default.SELECT_EMPTY_VALUE,disabled:!c,onChange:t=>{e.updateSelectedServiceConditionDraftField("primaryDisabilityName",t.target.value===tt.default.SELECT_EMPTY_VALUE?"":t.target.value)},style:lk,children:[(0,t.jsx)("option",{value:tt.default.SELECT_EMPTY_VALUE,"data-trigger-label":"주장애명을 선택해주세요.",children:"선택안함"}),Object.entries(ts.default).map(([e,{label:n}])=>(0,t.jsx)("option",{value:e,children:n},e))]})]}),(0,t.jsxs)(l_,{children:[(0,t.jsx)(lw,{children:"장애급수"}),(0,t.jsxs)(ly,{$isEmptySelected:""===E,value:E||tt.default.SELECT_EMPTY_VALUE,disabled:!c,onChange:t=>{e.updateSelectedServiceConditionDraftField("primaryDisabilityGrade",t.target.value===tt.default.SELECT_EMPTY_VALUE?"":t.target.value)},style:lk,children:[(0,t.jsx)("option",{value:tt.default.SELECT_EMPTY_VALUE,"data-trigger-label":"장애급수를 선택해주세요.",children:"선택안함"}),Object.entries(tr.default).map(([e,{label:n}])=>(0,t.jsx)("option",{value:e,children:n},e))]})]}),(0,t.jsxs)(l_,{children:[(0,t.jsx)(lw,{children:"주장애 장애정도"}),(0,t.jsxs)(ly,{$isEmptySelected:""===S,value:S||tt.default.SELECT_EMPTY_VALUE,disabled:!c,onChange:t=>{e.updateSelectedServiceConditionDraftField("primaryDisabilitySeverity",t.target.value===tt.default.SELECT_EMPTY_VALUE?"":t.target.value)},style:lk,children:[(0,t.jsx)("option",{value:tt.default.SELECT_EMPTY_VALUE,"data-trigger-label":"주장애 장애정도를 선택해주세요.",children:"선택안함"}),Object.entries(tc.default).map(([e,{label:n}])=>(0,t.jsx)("option",{value:e,children:n},e))]})]})]}),(0,t.jsxs)(lb,{children:[(0,t.jsxs)(l_,{children:[(0,t.jsx)(lw,{children:"부장애명"}),(0,t.jsxs)(ly,{$isEmptySelected:""===k,value:k||tt.default.SELECT_EMPTY_VALUE,disabled:!c,onChange:t=>{e.updateSelectedServiceConditionDraftField("secondaryDisabilityName",t.target.value===tt.default.SELECT_EMPTY_VALUE?"":t.target.value)},style:lk,children:[(0,t.jsx)("option",{value:tt.default.SELECT_EMPTY_VALUE,"data-trigger-label":"부장애명을 선택해주세요.",children:"선택안함"}),Object.entries(ts.default).map(([e,{label:n}])=>(0,t.jsx)("option",{value:e,children:n},e))]})]}),(0,t.jsxs)(l_,{children:[(0,t.jsx)(lw,{children:"장애급수"}),(0,t.jsxs)(ly,{$isEmptySelected:""===D,value:D||tt.default.SELECT_EMPTY_VALUE,disabled:!c,onChange:t=>{e.updateSelectedServiceConditionDraftField("secondaryDisabilityGrade",t.target.value===tt.default.SELECT_EMPTY_VALUE?"":t.target.value)},style:lk,children:[(0,t.jsx)("option",{value:tt.default.SELECT_EMPTY_VALUE,"data-trigger-label":"장애급수를 선택해주세요.",children:"선택안함"}),Object.entries(tr.default).map(([e,{label:n}])=>(0,t.jsx)("option",{value:e,children:n},e))]})]}),(0,t.jsxs)(l_,{children:[(0,t.jsx)(lw,{children:"부장애 장애정도"}),(0,t.jsxs)(ly,{$isEmptySelected:""===A,value:A||tt.default.SELECT_EMPTY_VALUE,disabled:!c,onChange:t=>{e.updateSelectedServiceConditionDraftField("secondaryDisabilitySeverity",t.target.value===tt.default.SELECT_EMPTY_VALUE?"":t.target.value)},style:lk,children:[(0,t.jsx)("option",{value:tt.default.SELECT_EMPTY_VALUE,"data-trigger-label":"부장애 장애정도를 선택해주세요.",children:"선택안함"}),Object.entries(tc.default).map(([e,{label:n}])=>(0,t.jsx)("option",{value:e,children:n},e))]})]})]}),(0,t.jsxs)(lb,{children:[(0,t.jsxs)(l_,{$width:158,children:[(0,t.jsx)(lw,{children:"외상장애 여부"}),(0,t.jsxs)(lf,{children:[(0,t.jsxs)(lh,{children:[(0,t.jsx)(lg,{disabled:!c,checked:!1===$,onChange:()=>e.updateSelectedServiceConditionDraftField("hasTraumaDisability",!1)}),(0,t.jsx)(lm,{children:"미해당"})]}),(0,t.jsxs)(lh,{children:[(0,t.jsx)(lg,{disabled:!c,checked:!0===$,onChange:()=>e.updateSelectedServiceConditionDraftField("hasTraumaDisability",!0)}),(0,t.jsx)(lm,{children:"해당"})]})]})]}),(0,t.jsxs)(l_,{$width:443,children:[(0,t.jsx)(lw,{children:"의사소통"}),(0,t.jsxs)(lf,{children:[(0,t.jsxs)(lh,{children:[(0,t.jsx)(lg,{disabled:!c,checked:"POSSIBLE"===R,onChange:()=>{e.updateSelectedServiceConditionDraftField("communicationStatus","POSSIBLE"),e.updateSelectedServiceConditionDraftField("communicationStatusDetail","")}}),(0,t.jsx)(lm,{children:"가능"})]}),(0,t.jsxs)(lh,{children:[(0,t.jsx)(lg,{disabled:!c,checked:"IMPOSSIBLE"===R,onChange:()=>{e.updateSelectedServiceConditionDraftField("communicationStatus","IMPOSSIBLE"),e.updateSelectedServiceConditionDraftField("communicationStatusDetail","")}}),(0,t.jsx)(lm,{children:"불가능"})]}),(0,t.jsxs)(lh,{children:[(0,t.jsx)(lg,{disabled:!c,checked:"OTHER"===R,onChange:()=>e.updateSelectedServiceConditionDraftField("communicationStatus","OTHER")}),(0,t.jsx)(lm,{children:"기타"})]}),(0,t.jsx)(o.default.Input.Text,{value:P,placeholder:"관련 내용을 입력해주세요.",disabled:!c||"OTHER"!==R,onChange:t=>e.updateSelectedServiceConditionDraftField("communicationStatusDetail",t.target.value),style:{...lk,width:193}})]})]}),(0,t.jsxs)(l_,{$width:116,children:[(0,t.jsx)(lw,{children:"휠체어 유무"}),(0,t.jsxs)(lf,{children:[(0,t.jsxs)(lh,{children:[(0,t.jsx)(lg,{disabled:!c,checked:!0===N,onChange:()=>e.updateSelectedServiceConditionDraftField("hasWheelchair",!0)}),(0,t.jsx)(lm,{children:"유"})]}),(0,t.jsxs)(lh,{children:[(0,t.jsx)(lg,{disabled:!c,checked:!1===N,onChange:()=>e.updateSelectedServiceConditionDraftField("hasWheelchair",!1)}),(0,t.jsx)(lm,{children:"무"})]})]})]})]}),(0,t.jsxs)(lb,{children:[(0,t.jsxs)(l_,{$width:144,children:[(0,t.jsx)(lw,{children:"결혼여부"}),(0,t.jsxs)(lf,{children:[(0,t.jsxs)(lh,{children:[(0,t.jsx)(lg,{disabled:!c,checked:!1===M,onChange:()=>e.updateSelectedServiceConditionDraftField("isMarried",!1)}),(0,t.jsx)(lm,{children:"미혼"})]}),(0,t.jsxs)(lh,{children:[(0,t.jsx)(lg,{disabled:!c,checked:!0===M,onChange:()=>e.updateSelectedServiceConditionDraftField("isMarried",!0)}),(0,t.jsx)(lm,{children:"기혼"})]})]})]}),(0,t.jsxs)(l_,{$width:530,children:[(0,t.jsx)(lw,{children:"가족사항"}),(0,t.jsxs)(lf,{children:[i5.map(([n,i])=>(0,t.jsxs)(lh,{children:[(0,t.jsx)(lg,{disabled:!c,checked:F===n,onChange:()=>{e.updateSelectedServiceConditionDraftField("familyStatus",n),"OTHER"!==n&&e.updateSelectedServiceConditionDraftField("familyStatusDetail","")}}),(0,t.jsx)(lm,{children:i})]},n)),(0,t.jsx)(o.default.Input.Text,{value:U,placeholder:"관련 내용을 입력해주세요.",disabled:!c||"OTHER"!==F,onChange:t=>e.updateSelectedServiceConditionDraftField("familyStatusDetail",t.target.value),style:{...lk,width:193}})]})]})]}),(0,t.jsx)(lb,{children:(0,t.jsxs)(l_,{children:[(0,t.jsx)(lw,{children:"보유질환명"}),(0,t.jsx)(o.default.Input.Text,{value:O,placeholder:"보유질환에 대해 입력해주세요.",readOnly:!c,onChange:t=>e.updateSelectedServiceConditionDraftField("chronicDiseaseNames",t.target.value),style:lk})]})}),(0,t.jsx)(lb,{children:(0,t.jsxs)(l_,{children:[(0,t.jsx)(lw,{children:"투약정보"}),(0,t.jsx)(o.default.Input.Text,{value:L,placeholder:"투약정보를 입력해주세요.",readOnly:!c,onChange:t=>e.updateSelectedServiceConditionDraftField("medicationInfo",t.target.value),style:lk})]})}),(0,t.jsx)(lb,{children:(0,t.jsxs)(l_,{children:[(0,t.jsx)(lw,{children:"(타기관) 이용경험"}),(0,t.jsx)(lT,{value:Y,placeholder:"텍스트를 입력해주세요.",readOnly:!c,onChange:t=>e.updateSelectedServiceConditionDraftField("usageExperience",t.target.value)})]})}),(0,t.jsx)(lb,{children:(0,t.jsxs)(l_,{children:[(0,t.jsx)(lw,{children:"특이사항 (장애특성 및 일상생활)"}),(0,t.jsx)(lS,{value:V,placeholder:"특이사항을 입력해주세요.",readOnly:!c,onChange:t=>e.updateSelectedServiceConditionDraftField("dailyLivingNotes",t.target.value),style:lk})]})}),(0,t.jsx)(lb,{children:(0,t.jsxs)(l_,{children:[(0,t.jsx)(lw,{children:"종합소견"}),(0,t.jsx)(lE,{value:W,placeholder:"종합소견을 입력해주세요.",readOnly:!c,onChange:t=>e.updateSelectedServiceConditionDraftField("comprehensiveOpinion",t.target.value)})]})})]}):null]})}),i8=l.default.div.withConfig({componentId:"zh__sc-9e650079-0"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
  align-self: stretch;
`,i7=l.default.div.withConfig({componentId:"zh__sc-9e650079-1"})`
  display: flex;
  gap: 16px;
  align-items: center;
  align-self: stretch;

  height: 30px;
`,le=l.default.div.withConfig({componentId:"zh__sc-9e650079-2"})`
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
  color: #0a0a0a;
`,lt=l.default.div.withConfig({componentId:"zh__sc-9e650079-3"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,ln=l.default.div.withConfig({componentId:"zh__sc-9e650079-4"})`
  display: flex;
  flex: 1 0 0;
  gap: 4px;
  align-items: center;

  color: #464c53;
`,li=l.default.div.withConfig({componentId:"zh__sc-9e650079-5"})`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
`,ll=(0,l.default)(o.default.Input.TimeSlider).withConfig({componentId:"zh__sc-9e650079-6"})`
  width: 800px;
`,la=l.default.div.withConfig({componentId:"zh__sc-9e650079-7"})`
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
  align-self: stretch;
`,ld=l.default.div.withConfig({componentId:"zh__sc-9e650079-8"})`
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  color: #000;
  text-align: center;
`,lo=l.default.div.withConfig({componentId:"zh__sc-9e650079-9"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,lr=(0,l.default)(o.default.Input.Text).withConfig({componentId:"zh__sc-9e650079-10"})`
  width: 59px;
  height: 36px;
  text-align: center;
`,ls=l.default.div.withConfig({componentId:"zh__sc-9e650079-11"})`
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  color: #000;
`,lc=l.default.div.withConfig({componentId:"zh__sc-9e650079-12"})`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: #000;
`,lf=l.default.div.withConfig({componentId:"zh__sc-9e650079-13"})`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 24px;
  align-items: center;

  min-height: 36px;
`,lh=l.default.div.withConfig({componentId:"zh__sc-9e650079-14"})`
  display: inline-flex;
  gap: 8px;
  align-items: center;
  min-height: 36px;
`,lp=l.default.div.withConfig({componentId:"zh__sc-9e650079-15"})`
  display: inline-flex;
  gap: 8px;
  align-items: center;
`,lu=(0,l.default)(o.default.Input.Text).withConfig({componentId:"zh__sc-9e650079-16"})`
  width: 220px;
`,lx=(0,l.default)(o.default.Input.Check).attrs({$iconSizeRatio:1.5}).withConfig({componentId:"zh__sc-9e650079-17"})`
  width: 24px;
  height: 24px;
`,lg=(0,l.default)(o.default.Input.Radio).withConfig({componentId:"zh__sc-9e650079-18"})``,lm=l.default.span.withConfig({componentId:"zh__sc-9e650079-19"})`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: #000;
`,lj=l.default.div.withConfig({componentId:"zh__sc-9e650079-20"})`
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
  color: #0a0a0a;
`,lb=l.default.div.withConfig({componentId:"zh__sc-9e650079-21"})`
  display: flex;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;

  min-height: 59px;
`,l_=l.default.div.withConfig({componentId:"zh__sc-9e650079-22"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
  align-self: flex-start;

  min-height: 59px;

  ${({$width:e})=>void 0!==e?`width: ${e}px;`:"flex: 1; min-width: 0;"}
`,lw=l.default.div.withConfig({componentId:"zh__sc-9e650079-23"})`
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  color: #000;
  text-align: center;
`,ly=(0,l.default)(o.default.Input.Select).withConfig({componentId:"zh__sc-9e650079-24"})`
  width: 100%;
  min-width: 0;
  height: 36px;
  padding: 4px 16px;

  font-size: 16px;
  color: ${({$isEmptySelected:e})=>e?"#9ca3af":"#0a0a0a"};

  &:disabled {
    color: ${({$isEmptySelected:e})=>e?"#9ca3af":"#0a0a0a"};
  }
`,lv=l.default.span.withConfig({componentId:"zh__sc-9e650079-25"})`
  flex: 0 0 auto;
  align-self: flex-start;
  padding-top: 28px;
`,lC=l.default.div.withConfig({componentId:"zh__sc-9e650079-26"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
  align-self: stretch;
`,lI=l.default.div.withConfig({componentId:"zh__sc-9e650079-27"})`
  display: flex;
  gap: 10px;
  align-items: center;
  width: 100%;
`,lz=l.default.span.withConfig({componentId:"zh__sc-9e650079-28"})`
  flex-shrink: 0;
  font-size: 16px;
  color: #000;
`,lT=(0,l.default)(o.default.Input.Textarea).withConfig({componentId:"zh__sc-9e650079-29"})`
  resize: vertical;

  width: 100%;
  min-height: 100px;
  padding: 12px 16px;

  font-size: 16px;
`,lE=(0,l.default)(lT).withConfig({componentId:"zh__sc-9e650079-30"})`
  min-height: 156px;
`,lS=(0,l.default)(o.default.Input.Text).withConfig({componentId:"zh__sc-9e650079-31"})`
  width: 100%;
  padding: 4px 16px;
  font-size: 16px;
`,lk={display:"flex",padding:"4px 16px",alignItems:"center",gap:"10px",flex:"1 0 0",alignSelf:"stretch",fontSize:16},lD={borderColor:"#ff4d4f",background:"#fff5f5"},lA=l.default.div.withConfig({componentId:"zh__sc-9e650079-32"})`
  margin-top: 4px;
  font-size: 12px;
  line-height: 18px;
  color: #e7000b;
`;var lO=e.i(24655);let lL=(0,nF.default)((0,t.jsx)("path",{d:"M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9m-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8z"}),"History");function l$({type:e,onClose:n}){let l=a.default.client.info.byClient.selectedClient,o=a.default.client.info.byClient.selectedClientId,[r,s]=(0,i.useState)([]),[c,f]=(0,i.useState)(!0);return(0,i.useEffect)(()=>{let t=!0;return(async()=>{var n,i,d,r,c;let h;if(null===o)return f(!1);if("address"===e){let e,r,c,h,[p,u]=await Promise.all([a.default.client.info.byClient.getClientChangeHistory(o,"address"),a.default.client.info.byClient.getClientChangeHistory(o,"addressDetail")]);if(!t||(f(!1),null!==p[0]||null!==u[0]||null===p[1]||null===u[1]))return;s((n=p[1],i=u[1],d=l?.createdAt??"",e=new Map,(r=(t,n)=>{t.slice().sort((e,t)=>new Date(e.createdAt).getTime()-new Date(t.createdAt).getTime()).forEach(({oldValue:t,newValue:i,createdAt:l},a)=>{if(0===a&&null!==t&&""!==t.trim()){let i=e.get(d)??{};i[n]=t.trim(),e.set(d,i)}let o=e.get(l)??{};o[n]=i?.trim()??"",e.set(l,o)})})(n,"address"),r(i,"addressDetail"),c="",h="",Array.from(e.entries()).sort(([e],[t])=>new Date(e).getTime()-new Date(t).getTime()).map(([e,t])=>(c=t.address??c,h=t.addressDetail??h,{address:c,addressDetail:h,changedAt:e,value:""})).filter(e=>""!==e.address||""!==e.addressDetail).reverse()));return}let[p,u]=await a.default.client.info.byClient.getClientChangeHistory(o,"phoneNumber");t&&(f(!1),null===p&&null!==u&&s((r=u,c=l?.createdAt??"",h=[],r.slice().sort((e,t)=>new Date(e.createdAt).getTime()-new Date(t.createdAt).getTime()).forEach(({oldValue:e,newValue:t,createdAt:n},i)=>{0===i&&null!==e&&""!==e.trim()&&h.push({address:"",addressDetail:"",changedAt:c,value:e.trim()}),null!==t&&""!==t.trim()&&h.push({address:"",addressDetail:"",changedAt:n,value:t.trim()})}),h.sort((e,t)=>new Date(t.changedAt).getTime()-new Date(e.changedAt).getTime()))))})(),()=>{t=!1}},[l?.createdAt,o,e]),(0,t.jsx)(d.default,{children:(0,t.jsxs)(lR,{children:[(0,t.jsxs)(lP,{children:[(0,t.jsxs)(lN,{children:["address"===e?"주소/상세주소":"휴대폰"," 변경 이력 보기"]}),(0,t.jsxs)(lM,{type:"button",onClick:n,children:[(0,t.jsx)(W.X,{size:14}),"닫기"]})]}),(0,t.jsx)(lF,{children:c?(0,t.jsx)(lG,{children:"변경 이력을 불러오는 중입니다."}):(0,t.jsxs)(lU,{children:[(0,t.jsxs)(lB,{$isAddress:"address"===e,children:[(0,t.jsx)(lH,{children:"address"===e?"주소":"휴대폰"}),"address"===e?(0,t.jsx)(lH,{children:"상세주소"}):null,(0,t.jsx)(lH,{children:"변경 일자"})]}),0===r.length?(0,t.jsx)(lY,{$isAddress:"address"===e,children:(0,t.jsx)(lW,{children:"변경된 이력이 없습니다."})}):r.map(n=>{let i;return(0,t.jsxs)(lY,{$isAddress:"address"===e,children:[(0,t.jsx)(lV,{children:"address"===e?n.address:n.value}),"address"===e?(0,t.jsx)(lV,{children:n.addressDetail}):null,(0,t.jsx)(lV,{children:Number.isNaN((i=new Date(n.changedAt)).getTime())?"YYYY-MM-DD":`${i.getFullYear()}-${String(i.getMonth()+1).padStart(2,"0")}-${String(i.getDate()).padStart(2,"0")}`})]},`${n.changedAt}-${n.address}-${n.addressDetail}-${n.value}`)})]})})]})})}let lR=l.default.div.withConfig({componentId:"zh__sc-cc1c5725-0"})`
  display: flex;
  flex-direction: column;

  width: min(980px, calc(100vw - 32px));
  border-radius: 8px;

  background: #fff;
  box-shadow: 0 4px 16px rgb(0 0 0 / 10%);
`,lP=l.default.div.withConfig({componentId:"zh__sc-cc1c5725-1"})`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 69px;
  padding: 16px;
  border-bottom: 1px solid #e5e7eb;
`,lN=l.default.h2.withConfig({componentId:"zh__sc-cc1c5725-2"})`
  margin: 0;

  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  color: #101828;
`,lM=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-cc1c5725-3"})`
  display: flex;
  gap: 6px;
  align-items: center;

  height: 34px;
  padding: 6px 16px;

  color: #4f39f6;
`,lF=l.default.div.withConfig({componentId:"zh__sc-cc1c5725-4"})`
  border-radius: 0 0 8px 8px;
  background: #f9fafb;
`,lU=l.default.div.withConfig({componentId:"zh__sc-cc1c5725-5"})`
  overflow: hidden;
  display: flex;
  flex-direction: column;

  margin: 28px 24px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
`,lB=l.default.div.withConfig({componentId:"zh__sc-cc1c5725-6"})`
  display: grid;
  grid-template-columns: ${({$isAddress:e})=>e?"repeat(3, minmax(0, 1fr))":"repeat(2, minmax(0, 1fr))"};
  min-height: 41px;
  background: #f8fafc;
`,lY=l.default.div.withConfig({componentId:"zh__sc-cc1c5725-7"})`
  display: grid;
  grid-template-columns: ${({$isAddress:e})=>e?"repeat(3, minmax(0, 1fr))":"repeat(2, minmax(0, 1fr))"};

  min-height: 92px;
  border-top: 1px solid #e5e7eb;

  background: white;
`,lV=l.default.div.withConfig({componentId:"zh__sc-cc1c5725-8"})`
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
`,lW=(0,l.default)(lV).withConfig({componentId:"zh__sc-cc1c5725-9"})`
  grid-column: 1 / -1;
  min-height: 92px;
  color: #464c53;
`,lH=(0,l.default)(lV).withConfig({componentId:"zh__sc-cc1c5725-10"})`
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 19px; /* 118.75% */
  color: #1c1d22;
  text-align: center;
`,lG=l.default.div.withConfig({componentId:"zh__sc-cc1c5725-11"})`
  padding: 32px 16px;
  font-size: 14px;
  color: #667085;
  text-align: center;
`;function lK({values:e,errorFlags:n,errorMessages:l,isEditing:a,isDisabilityActivitySupport:d,onChangeField:r}){let[s,c]=(0,i.useState)(null),f=l?.mobileText??"",h=l?.contactText??"",p=l?.postCodeText??"",u=l?.residentRegistrationNumberText??"";return(0,t.jsxs)(lX,{children:[(0,t.jsxs)(lq,{children:[(0,t.jsxs)(lQ,{children:["주민등록번호",(0,t.jsx)(l3,{value:e.residentRegistrationNumberText,style:n?.residentRegistrationNumberText===!0?l7:void 0,readOnly:!a,onChange:e=>r("residentRegistrationNumberText",e)}),""!==u?(0,t.jsx)(l1,{children:u}):null]}),(0,t.jsxs)(lQ,{children:["성별",(0,t.jsx)(l4,{value:e.genderText,readOnly:!0})]}),(0,t.jsxs)(lQ,{children:[(0,t.jsxs)(lZ,{children:[(0,t.jsx)(lJ,{children:"휴대폰"}),(0,t.jsxs)(l0,{type:"button",disabled:a,onClick:()=>c("phone"),children:[(0,t.jsx)(lL,{sx:{fontSize:12}})," 변경 이력 보기"]})]}),(0,t.jsx)(l5,{value:e.mobileText,style:n?.mobileText===!0?l7:void 0,readOnly:!a,onChange:e=>r("mobileText",e)}),""!==f?(0,t.jsx)(l1,{children:f}):null]}),(0,t.jsxs)(lQ,{children:["연락처",(0,t.jsx)(l9,{value:e.contactText,style:n?.contactText===!0?l7:void 0,readOnly:!a,onChange:e=>r("contactText",e)}),""!==h?(0,t.jsx)(l1,{children:h}):null]})]}),(0,t.jsxs)(lq,{children:[(0,t.jsxs)(lQ,{children:[(0,t.jsxs)(lZ,{children:[(0,t.jsx)(lJ,{children:"주소"}),(0,t.jsxs)(l0,{type:"button",disabled:a,onClick:()=>c("address"),children:[(0,t.jsx)(lL,{sx:{fontSize:12}})," 변경 이력 보기"]})]}),(0,t.jsx)(l4,{value:e.addressBaseText,readOnly:!a,onChange:e=>r("addressBaseText",e.target.value)})]}),(0,t.jsxs)(lQ,{children:["상세주소",(0,t.jsx)(l4,{value:e.addressDetailText,readOnly:!a,onChange:e=>r("addressDetailText",e.target.value)})]}),(0,t.jsxs)(lQ,{children:["우편번호",(0,t.jsx)(l8,{value:e.postCodeText,style:n?.postCodeText===!0?l7:void 0,readOnly:!a,onChange:e=>r("postCodeText",e)}),""!==p?(0,t.jsx)(l1,{children:p}):null]})]}),(0,t.jsxs)(lq,{$hasVehicleGuidance:d,children:[(0,t.jsxs)(lQ,{children:["특이사항(메모)",(0,t.jsx)(l4,{value:e.memoText,readOnly:!a,onChange:e=>r("memoText",e.target.value)})]}),d?(0,t.jsxs)(lQ,{children:["차량 유류비 안내",(0,t.jsxs)(l2,{children:[(0,t.jsxs)(l6,{children:[(0,t.jsx)(o.default.Input.Radio,{disabled:!a,checked:!0===e.vehicleFuelCostGuided,onChange:()=>r("vehicleFuelCostGuided",!0)}),"완료"]}),(0,t.jsxs)(l6,{children:[(0,t.jsx)(o.default.Input.Radio,{disabled:!a,checked:!1===e.vehicleFuelCostGuided,onChange:()=>r("vehicleFuelCostGuided",!1)}),"미완료"]})]})]}):null]}),null!==s?(0,t.jsx)(l$,{type:s,onClose:()=>c(null)}):null]})}let lX=l.default.div.withConfig({componentId:"zh__sc-481703bc-0"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`,lq=l.default.div.withConfig({componentId:"zh__sc-481703bc-1"})`
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
`,lQ=l.default.label.withConfig({componentId:"zh__sc-481703bc-2"})`
  display: flex;
  flex-direction: column;
  gap: 4px;

  min-width: 0;

  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: #000;
`,lZ=l.default.div.withConfig({componentId:"zh__sc-481703bc-3"})`
  display: flex;
  gap: 2px;
  align-items: center;
  min-height: 20px;
`,lJ=l.default.span.withConfig({componentId:"zh__sc-481703bc-4"})`
  flex-shrink: 0;
`,l0=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-481703bc-5"})`
  gap: 2px;
  padding: 2px 4px;
  font-size: 12px;
  line-height: 1;
`,l1=l.default.div.withConfig({componentId:"zh__sc-481703bc-6"})`
  margin-top: 2px;
  font-size: 12px;
  line-height: 16px;
  color: #ff4d4f;
`,l2=l.default.div.withConfig({componentId:"zh__sc-481703bc-7"})`
  display: flex;
  gap: 16px;
  align-items: center;
  height: 36px;
`,l6=l.default.label.withConfig({componentId:"zh__sc-481703bc-8"})`
  display: inline-flex;
  gap: 4px;
  align-items: center;

  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: #000;
`,l4=(0,l.default)(n6).withConfig({componentId:"zh__sc-481703bc-9"})`
  height: 36px;
  padding: 0 16px;
  font-size: 16px;
  line-height: 20px;
`,l5=(0,l.default)(n4).withConfig({componentId:"zh__sc-481703bc-10"})`
  height: 36px;
  padding: 0 16px;
  font-size: 16px;
  line-height: 20px;
`,l3=(0,l.default)(n9).withConfig({componentId:"zh__sc-481703bc-11"})`
  height: 36px;
  padding: 0 16px;
  font-size: 16px;
  line-height: 20px;
`,l9=(0,l.default)(n5).withConfig({componentId:"zh__sc-481703bc-12"})`
  height: 36px;
  padding: 0 16px;
  font-size: 16px;
  line-height: 20px;
`,l8=(0,l.default)(n3).withConfig({componentId:"zh__sc-481703bc-13"})`
  height: 36px;
  padding: 0 16px;
  font-size: 16px;
  line-height: 20px;
`,l7={borderColor:"#ff4d4f",background:"#fff5f5"};function ae({isOpen:e,onCancel:n,onConfirm:i,title:l="이용자 기본정보를 저장할까요?",description:a="수정된 정보는 연결된 서류의 자동입력 항목에 함께 반영됩니다.\n이미 출력했거나 최종확인한 서류는 다시 확인이 필요할 수 있습니다.",cancelLabel:o="취소하기",confirmLabel:r="저장 및 모든 서류에 반영"}){return e?(0,t.jsx)(d.default,{children:(0,t.jsxs)(at,{children:[(0,t.jsxs)(an,{children:[(0,t.jsx)(ai,{children:l}),(0,t.jsx)(al,{children:a})]}),(0,t.jsxs)(aa,{children:[(0,t.jsx)(ao,{onClick:n,children:o}),(0,t.jsx)(ar,{onClick:i,children:r})]})]})}):null}let at=l.default.div.withConfig({componentId:"zh__sc-952cde00-0"})`
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
`,an=l.default.div.withConfig({componentId:"zh__sc-952cde00-1"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;
`,ai=l.default.p.withConfig({componentId:"zh__sc-952cde00-2"})`
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #000;
`,al=l.default.p.withConfig({componentId:"zh__sc-952cde00-3"})`
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #000;
  white-space: pre-line;
`,aa=l.default.div.withConfig({componentId:"zh__sc-952cde00-4"})`
  display: flex;
  gap: 12px;
  align-items: center;
  align-self: stretch;
  justify-content: flex-end;
`,ad=l.css`
  height: 36px;
  padding: 8px 16px;
  font-size: 16px;
`,ao=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-952cde00-5"})`
  ${ad}
`,ar=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-952cde00-6"})`
  ${ad}
`,as=(0,n.observer)(function({detailFormValues:e,errorFlags:n,errorMessages:l,isEditing:d,onStartEdit:o,onCancelEdit:r,requestOpenSaveConfirm:s,requestSaveEdit:c,onChangeField:f}){let h=a.default.client.info.byClient,[p,u]=(0,i.useState)(!1),x=(0,i.useRef)(null);(0,i.useEffect)(()=>{if(!d||p)return;let e=e=>{let t=e.target,n=t instanceof Node&&null!==x.current&&x.current.contains(t),i=t instanceof Element&&(null!==t.closest('[role="listbox"]')||null!==t.closest('[role="option"]')||null!==t.closest("[data-radix-select-viewport]")||null!==t.closest("[data-radix-popper-content-wrapper]"));n||i||r()};return document.addEventListener("pointerdown",e),()=>{document.removeEventListener("pointerdown",e)}},[p,d,r]);let g=async()=>{!0===await c()&&u(!1)};return(0,t.jsxs)(nq,{ref:x,children:[(0,t.jsx)(nQ,{children:(0,t.jsxs)(nZ,{children:[(0,t.jsxs)(ac,{children:[(0,t.jsx)(nJ,{children:"인적사항"}),d?(0,t.jsx)(n2,{children:"수정 진행중"}):null]}),d?(0,t.jsxs)(n0,{children:[(0,t.jsxs)(n1,{type:"button",onClick:r,children:[(0,t.jsx)(iq.default,{sx:{fontSize:20}}),"수정 취소"]}),(0,t.jsxs)(n1,{type:"button",onClick:()=>{0===Object.keys(h.selectedUserInfoDraft).length?r():s()&&u(!0)},children:[(0,t.jsx)(lO.default,{sx:{fontSize:20}}),"수정 저장"]})]}):(0,t.jsxs)(n1,{type:"button",onClick:o,children:[(0,t.jsx)(nW.default,{sx:{fontSize:20}}),"수정하기"]})]})}),(0,t.jsx)(lK,{values:e,isDisabilityActivitySupport:"DISABILITY_ACTIVITY_SUPPORT"===h.currentServiceType,errorFlags:n,errorMessages:l,isEditing:d,onChangeField:f}),(0,t.jsx)(ae,{isOpen:p,onCancel:()=>{u(!1)},onConfirm:()=>{g()}})]})}),ac=l.default.div.withConfig({componentId:"zh__sc-6d1cdb58-0"})`
  display: flex;
  gap: 10px;
  align-items: center;
`,af=(0,n.observer)(function(){let e,n=a.default.client.info.byClient,l=n.selectedClientId,d=n.selectedClient,o=d?.name??"",r=n.selectedUserInfoDraft,s=n.selectedUserInfoValidationErrors,c=n.isUserInfoEditing,f=n.selectedGuardianList,h=a.default.client.info.byClient.selectedGuardianId,p=(0,i.useRef)(null),u=(0,i.useRef)(null),x=(0,i.useMemo)(()=>({genderText:d?.gender==="MALE"?"남성":d?.gender==="FEMALE"?"여성":"",residentRegistrationNumberText:d?.residentRegistrationNumber??"",contactText:d?.contact??"",mobileText:d?.phoneNumber??"",addressBaseText:d?.address??"",addressDetailText:d?.addressDetail??"",postCodeText:d?.postCode??"",memoText:d?.note??"",vehicleFuelCostGuided:d?.vehicleFuelCostNoticeGiven??void 0}),[d?.gender,d?.residentRegistrationNumber,d?.contact,d?.phoneNumber,d?.address,d?.addressDetail,d?.postCode,d?.note,d?.vehicleFuelCostNoticeGiven]);if((0,i.useEffect)(()=>{p.current?.scrollTo({top:0,behavior:"auto"})},[l]),(0,i.useEffect)(()=>(n.setToastContainer(n.isDeleteConfirmOpen?u.current:p.current),()=>{n.setToastContainer(null)}),[n,n.isDeleteConfirmOpen]),null===l)return(0,t.jsx)(nX,{children:"서비스를 선택한 뒤 이용자를 선택해 주세요."});let g=async()=>n.saveSelectedUserInfoDraft(),m={...x,genderText:c?"male"===(e=function(e){if(null===e)return"unknown";let t=e.trim().replace(/[^0-9]/g,"");if(t.length<7)return"unknown";switch(t[6]){case"1":case"3":return"male";case"2":case"4":return"female";default:return"unknown"}}(r.residentRegistrationNumber??x.residentRegistrationNumberText))?"남성":"female"===e?"여성":"":x.genderText,residentRegistrationNumberText:c?r.residentRegistrationNumber??x.residentRegistrationNumberText:x.residentRegistrationNumberText,contactText:c?r.contact??x.contactText:x.contactText,mobileText:c?r.phoneNumber??x.mobileText:x.mobileText,addressBaseText:c?r.address??x.addressBaseText:x.addressBaseText,addressDetailText:c?r.addressDetail??x.addressDetailText:x.addressDetailText,postCodeText:c?r.postCode??x.postCodeText:x.postCodeText,memoText:c?r.note??x.memoText:x.memoText,vehicleFuelCostGuided:c?r.vehicleFuelCostNoticeGiven??x.vehicleFuelCostGuided:x.vehicleFuelCostGuided},j={mobileText:void 0!==s.phoneNumber,contactText:void 0!==s.contact,postCodeText:void 0!==s.postCode,residentRegistrationNumberText:void 0!==s.residentRegistrationNumber},b={mobileText:s.phoneNumber,contactText:s.contact,postCodeText:s.postCode,residentRegistrationNumberText:s.residentRegistrationNumber};return(0,t.jsxs)(nK,{ref:p,children:[(0,t.jsx)(as,{detailFormValues:m,isEditing:c,onStartEdit:()=>{n.startUserInfoEdit()},onCancelEdit:()=>{n.cancelUserInfoEdit()},requestOpenSaveConfirm:()=>n.validateSelectedUserInfoDraftBeforeConfirm(),requestSaveEdit:g,errorFlags:j,errorMessages:b,onChangeField:(e,t)=>{if("vehicleFuelCostGuided"===e){"boolean"==typeof t&&n.updateSelectedUserInfoDraftField("vehicleFuelCostNoticeGiven",t);return}if("string"==typeof t){if("contactText"===e)return void n.updateSelectedUserInfoDraftField("contact",t);if("mobileText"===e)return void n.updateSelectedUserInfoDraftField("phoneNumber",t);if("residentRegistrationNumberText"===e)return void n.updateSelectedUserInfoDraftField("residentRegistrationNumber",t);if("addressBaseText"===e)return void n.updateSelectedUserInfoDraftField("address",t);if("addressDetailText"===e)return void n.updateSelectedUserInfoDraftField("addressDetail",t);if("postCodeText"===e)return void n.updateSelectedUserInfoDraftField("postCode",t);if("memoText"===e)return void n.updateSelectedUserInfoDraftField("note",t)}}}),(0,t.jsx)(ir,{guardianList:f,selectedGuardianId:h,onAddGuardian:e=>n.createGuardian({name:e.name,phoneNumber:e.phone,relationship:e.relation,address:e.address}),onUpdateGuardian:(e,t)=>n.updateGuardian(e,{name:t.name,phoneNumber:t.phone,relationship:t.relation,address:t.address})}),(0,t.jsx)(i9,{}),(0,t.jsxs)(n8,{type:"button",disabled:n.isDeleting,onClick:()=>{n.openDeleteConfirm()},children:[(0,t.jsx)(H.default.Delete,{size:16}),"삭제하기"]}),n.isDeleteConfirmOpen?(0,t.jsx)(n7,{children:(0,t.jsxs)(ie,{ref:u,children:[(0,t.jsxs)(it,{children:[(0,t.jsxs)(ii,{children:[o," 이용자를 삭제하시겠어요?"]}),(0,t.jsxs)(il,{children:["삭제한 이용자 정보는 복구할 수 없습니다.",(0,t.jsx)("br",{}),"서비스를 제공 받은 이력이 없는 이용자만 삭제할 수 있습니다."]})]}),(0,t.jsxs)(ia,{children:[(0,t.jsx)(id,{type:"button",disabled:n.isDeleting,onClick:()=>{n.closeDeleteConfirm()},children:"취소하기"}),(0,t.jsx)(io,{type:"button",disabled:n.isDeleting,onClick:()=>{n.confirmDelete()},children:"삭제하기"})]})]})}):null]})});var ah=e.i(23416),ap=e.i(98733),au=e.i(88552);let ax=(0,nF.default)((0,t.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"}),"Search");var ag=e.i(44534);let am=(0,n.observer)(function({clientId:e,onClose:n,onSelectServiceWorker:l,serviceType:d}){let[r,s]=(0,i.useState)(""),c=a.default.data.client.availableServiceWorkerList;(0,i.useEffect)(()=>(c.setQuery({clientId:e,serviceType:d}),()=>c.reset()),[c,e,d]);let f=(0,i.useMemo)(()=>c.data?.map(e=>({serviceWorker:e,_searchableName:ag.default.create(e.name)}))??[],[c.data]).filter(({_searchableName:e})=>ag.default.isMatch(e,r));return(0,t.jsx)(aj,{children:(0,t.jsxs)(ab,{onClick:e=>e.stopPropagation(),children:[(0,t.jsxs)(a_,{children:[(0,t.jsx)(aw,{}),(0,t.jsx)(ay,{children:"연결할 제공인력 선택하기"}),(0,t.jsx)(o.default.Button.Outlined,{type:"button",style:{width:56,height:36},onClick:n,children:(0,t.jsx)(nY.default,{sx:{fontSize:20}})})]}),(0,t.jsx)(av,{}),(0,t.jsx)(aC,{children:(0,t.jsxs)(aI,{children:[(0,t.jsx)(ax,{sx:{fontSize:22},style:{position:"absolute",left:16,top:"50%",transform:"translateY(-50%)",color:"#9CA3AF"}}),(0,t.jsx)(az,{placeholder:"제공인력 이름을 검색하세요.",value:r,onChange:e=>s(e.target.value)})]})}),(0,t.jsxs)(aE,{children:["loading"===c.status?(0,t.jsx)(aT,{children:"제공인력을 불러오는 중..."}):null,"error"===c.status?(0,t.jsx)(aT,{children:"제공인력 목록을 불러오지 못했습니다."}):null,"success"===c.status&&0===f.length?(0,t.jsx)(aT,{children:"연결할 수 있는 제공인력이 없습니다."}):null,f.map(({serviceWorker:e})=>(0,t.jsxs)(aS,{children:[(0,t.jsxs)(ak,{children:[(0,t.jsx)(aD,{children:e.name}),(0,t.jsxs)(aA,{children:[(0,t.jsxs)(aO,{children:[(0,t.jsx)(aL,{children:"주소"}),(0,t.jsx)(a$,{}),(0,t.jsx)(aR,{children:[e.address,e.addressDetail].filter(e=>null!==e&&""!==e.trim()).join(" ")||"-"})]}),(0,t.jsxs)(aO,{children:[(0,t.jsx)(aL,{children:"연락처"}),(0,t.jsx)(a$,{}),(0,t.jsx)(aR,{children:e.phoneNumber??e.contact??"-"})]})]})]}),(0,t.jsx)(aP,{children:(0,t.jsxs)(aN,{type:"button",onClick:()=>l?.(e.id),children:["선택",(0,t.jsx)(au.default,{sx:{fontSize:18}})]})})]},e.id))]})]})})}),aj=l.default.div.withConfig({componentId:"zh__sc-c92b9463-0"})`
  position: absolute;
  z-index: 1000;
  inset: 0;

  display: flex;
  justify-content: flex-end;

  padding-top: 69px;
`,ab=l.default.div.withConfig({componentId:"zh__sc-c92b9463-1"})`
  display: flex;
  flex-direction: column;

  width: min(417px, 100%);
  height: 100%;

  background: #fff;
  box-shadow: -2px 9px 16px rgb(0 0 0 / 16%);
`,a_=l.default.div.withConfig({componentId:"zh__sc-c92b9463-2"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
`,aw=l.default.div.withConfig({componentId:"zh__sc-c92b9463-3"})`
  flex-shrink: 0;
  width: 36px;
  height: 36px;
`,ay=l.default.div.withConfig({componentId:"zh__sc-c92b9463-4"})`
  flex: 1;

  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  color: #101828;
  text-align: center;
`,av=l.default.div.withConfig({componentId:"zh__sc-c92b9463-5"})`
  height: 1px;
  background: #e5e7eb;
`,aC=l.default.div.withConfig({componentId:"zh__sc-c92b9463-6"})`
  padding: 16px;
`,aI=l.default.div.withConfig({componentId:"zh__sc-c92b9463-7"})`
  position: relative;
`,az=(0,l.default)(o.default.Input.Text).withConfig({componentId:"zh__sc-c92b9463-8"})`
  width: 100%;
  height: 36px;
  padding-left: 48px;
`,aT=l.default.div.withConfig({componentId:"zh__sc-c92b9463-9"})`
  padding: 24px 0;
  font-size: 14px;
  color: #667085;
  text-align: center;
`,aE=l.default.div.withConfig({componentId:"zh__sc-c92b9463-10"})`
  overflow-y: auto;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 12px;

  padding: 16px;

  background: #f9fafb;
`,aS=l.default.div.withConfig({componentId:"zh__sc-c92b9463-11"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;

  min-height: 148px;
  padding: 16px;
  border: 1px solid #e5e9ef;
  border-radius: 8px;

  background: #fff;
`,ak=l.default.div.withConfig({componentId:"zh__sc-c92b9463-12"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;
`,aD=l.default.div.withConfig({componentId:"zh__sc-c92b9463-13"})`
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
  color: #0a0a0a;
`,aA=l.default.div.withConfig({componentId:"zh__sc-c92b9463-14"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-self: stretch;
`,aO=l.default.div.withConfig({componentId:"zh__sc-c92b9463-15"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;
`,aL=l.default.div.withConfig({componentId:"zh__sc-c92b9463-16"})`
  min-width: 42px;
  font-size: 14px;
  line-height: 20px;
  color: #0a0a0a;
`,a$=l.default.div.withConfig({componentId:"zh__sc-c92b9463-17"})`
  width: 1px;
  height: 20px;
  background: #e5e7eb;
`,aR=l.default.div.withConfig({componentId:"zh__sc-c92b9463-18"})`
  overflow: hidden;

  min-width: 0;

  font-size: 14px;
  line-height: 20px;
  color: #667085;
  text-overflow: ellipsis;
  white-space: nowrap;
`,aP=l.default.div.withConfig({componentId:"zh__sc-c92b9463-19"})`
  display: flex;
  align-self: stretch;
  justify-content: flex-end;
  margin-top: auto;
`,aN=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-c92b9463-20"})`
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
`;let aM=l.default.div.withConfig({componentId:"zh__sc-b19bd4fc-2"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;

  width: 100%;
`,aF=l.default.div.withConfig({componentId:"zh__sc-b19bd4fc-3"})`
  display: flex;
  align-items: center;
  align-self: stretch;
  min-height: 40px;
`,aU=l.default.div.withConfig({componentId:"zh__sc-b19bd4fc-4"})`
  display: flex;
  flex: 1 0 0;
  align-items: center;
  justify-content: space-between;

  min-width: 0;
  min-height: 40px;
`,aB=l.default.h3.withConfig({componentId:"zh__sc-b19bd4fc-5"})`
  margin: 0;

  font-size: 18px;
  font-weight: 700;
  line-height: 20px;
  color: #101828;
`,aY=l.default.div.withConfig({componentId:"zh__sc-b19bd4fc-6"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,aV=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-b19bd4fc-7"})`
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
`,aW=l.default.span.withConfig({componentId:"zh__sc-b19bd4fc-8"})`
  padding: 2px 12px;
  border: 1px solid #d1d5db;
  border-radius: 99px;

  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: #45464e;
`,aH=l.default.span.withConfig({componentId:"zh__sc-b19bd4fc-9"})`
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
`;let aG=(0,n.observer)(function(){let[e,n]=(0,i.useState)(!1),[l,d]=(0,i.useState)(!1),o=a.default.client.info.byClient,r=a.default.data.serviceWorker.detail,s=o.selectedContract,c=o.selectedClientId,f=s?.serviceType??null,h=s?.serviceWorkerId??null,p=r.data,u=null!==h&&p?.id===h;(0,i.useEffect)(()=>{null!==h&&r.setQuery({id:h})},[r,h]);let x=async e=>{if(null===s||null===c||l)return;d(!0);let[t]=await ah.default.data.contract.update({id:s.id,payload:{serviceWorkerId:e}});(d(!1),null!==t)?a.default.ui.layout.toast.error("제공인력 연결에 실패했습니다. 잠시 후 다시 시도해 주세요."):(o.preserveClientAfterSave(c),o.setHighlightedClientId(c),await a.default.data.contract.list.refetch(),await a.default.data.client.list.refetch(),n(!1),a.default.ui.layout.toast.success("제공인력을 연결했습니다."))};return(0,t.jsxs)(aM,{children:[(0,t.jsx)(aF,{children:(0,t.jsxs)(aU,{children:[(0,t.jsx)(aB,{children:"연결된 제공인력 정보"}),(0,t.jsxs)(aY,{children:[(0,t.jsxs)(aV,{type:"button",disabled:!0,children:[(0,t.jsx)(nW.default,{sx:{fontSize:20}}),"수정하기"]}),(0,t.jsxs)(aV,{type:"button",disabled:null===s||null===f||l,onClick:()=>n(!0),children:[(0,t.jsx)(nU,{sx:{fontSize:20}}),"추가하기"]})]})]})}),u?(0,t.jsx)(aX,{children:(0,t.jsxs)(aK,{$isSelected:u,children:[(0,t.jsx)(aq,{children:(0,t.jsx)(aQ,{children:p.name})}),(0,t.jsxs)(aZ,{children:[(0,t.jsxs)(aJ,{children:[(0,t.jsx)(a0,{children:"주소"}),(0,t.jsx)(a1,{}),(0,t.jsx)(a2,{children:[p.address,p.addressDetail].filter(e=>null!==e&&""!==e.trim()).join(" ")||"-"})]}),(0,t.jsxs)(aJ,{children:[(0,t.jsx)(a0,{children:"연락처"}),(0,t.jsx)(a1,{}),(0,t.jsx)(a2,{children:p.phoneNumber??p.contact??"-"})]}),(0,t.jsxs)(aJ,{children:[(0,t.jsx)(a0,{children:"이메일"}),(0,t.jsx)(a1,{}),(0,t.jsx)(a2,{children:"-"})]})]}),(0,t.jsx)(a6,{children:(0,t.jsx)(a4,{children:"연결됨"})})]})}):(0,t.jsxs)(a5,{children:[(0,t.jsx)(nH.default,{sx:{fontSize:24,color:"#494F53"}}),(0,t.jsxs)(a3,{children:[(0,t.jsx)(a9,{children:"연결된 제공인력이 없습니다."}),(0,t.jsx)(a8,{children:"[+추가하기] 버튼을 클릭해 제공인력을 연결해주세요."})]})]}),e&&null!==c&&null!==f?(0,t.jsx)(am,{clientId:c,onClose:()=>n(!1),onSelectServiceWorker:e=>void x(e),serviceType:f}):null]})}),aK=l.default.div.withConfig({componentId:"zh__sc-bfa96d56-0"})`
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
`,aX=l.default.div.withConfig({componentId:"zh__sc-bfa96d56-1"})`
  overflow: auto hidden;
  display: flex;
  flex-wrap: nowrap;
  gap: 10px;

  width: 100%;
`,aq=l.default.div.withConfig({componentId:"zh__sc-bfa96d56-2"})`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;

  width: 100%;
`,aQ=l.default.h4.withConfig({componentId:"zh__sc-bfa96d56-3"})`
  margin: 0;

  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  color: #0a0a0a;
`,aZ=l.default.div.withConfig({componentId:"zh__sc-bfa96d56-4"})`
  display: flex;
  flex-direction: column;
  gap: 4px;

  width: 100%;
  padding-bottom: 36px;
`,aJ=l.default.div.withConfig({componentId:"zh__sc-bfa96d56-5"})`
  display: flex;
  gap: 8px;
  align-items: flex-start;
  width: 100%;
`,a0=l.default.span.withConfig({componentId:"zh__sc-bfa96d56-6"})`
  width: 52px;
  min-width: 52px;

  font-size: 14px;
  line-height: 20px;
  color: #0a0a0a;
`,a1=l.default.span.withConfig({componentId:"zh__sc-bfa96d56-7"})`
  width: 1px;
  height: 20px;
  background: #e5e7eb;
`,a2=l.default.span.withConfig({componentId:"zh__sc-bfa96d56-8"})`
  min-width: 0;

  font-size: 14px;
  line-height: 20px;
  color: #45464e;
  overflow-wrap: anywhere;
`,a6=l.default.div.withConfig({componentId:"zh__sc-bfa96d56-9"})`
  position: absolute;
  right: 16px;
  bottom: 16px;

  display: flex;
  justify-content: flex-end;
`,a4=l.default.div.withConfig({componentId:"zh__sc-bfa96d56-10"})`
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
`,a5=l.default.div.withConfig({componentId:"zh__sc-bfa96d56-11"})`
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
`,a3=l.default.div.withConfig({componentId:"zh__sc-bfa96d56-12"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: center;
`,a9=l.default.div.withConfig({componentId:"zh__sc-bfa96d56-13"})`
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  color: #494f53;
`,a8=l.default.div.withConfig({componentId:"zh__sc-bfa96d56-14"})`
  font-size: 14px;
  line-height: 20px;
  color: #494f53;
  text-align: center;
`;var a7=e.i(93384),de=e.i(95649),dt=e.i(2615);function dn(e){return""===e.trim()?"-":e}let di=["수급자, 차상위","120% 이하","120~160%","160% 초과"],dl=["meal","nutrition"];function da(e){return`${e.toLocaleString("ko-KR")} 원`}function dd(e){return`${e.toLocaleString("ko-KR")}원`}function dr({serviceCode:e,grade:n,paymentMethodText:l,paymentDayText:a,monthlyUsage:d,serviceFees:o}){let[r,s]=(0,i.useState)(!0),c=e??"meal",f=null===n||!1===Number.isInteger(n)?null:Math.max(0,n-1),h=`${new Date().getMonth()+1}월`,p=d?.providedCount??0,u=d?.scheduledCount??0,x=d?.expectedGovernmentSupportAmount??0,g=d?.expectedCopaymentAmount??0,m=d?.expectedTotalAmount??0,j=u>0?Math.floor(x/u):0,b=u>0?Math.floor(g/u):0;return(0,t.jsxs)(aM,{children:[(0,t.jsx)(aF,{children:(0,t.jsx)(aU,{children:(0,t.jsxs)(ds,{children:[(0,t.jsx)(aB,{children:"계약서 세부내역"}),(0,t.jsx)(aW,{children:"30일 기준"})]})})}),(0,t.jsxs)(dc,{children:[(0,t.jsxs)(df,{children:[(0,t.jsxs)(dh,{children:["납부방법",(0,t.jsx)(dp,{children:dn(l)})]}),(0,t.jsxs)(dh,{children:["납입일",(0,t.jsx)(dp,{children:dn(a)})]})]}),(0,t.jsxs)(du,{children:[(0,t.jsxs)(dx,{children:[(0,t.jsxs)(dg,{children:[(0,t.jsxs)(dm,{children:[(0,t.jsxs)(dj,{children:[h," 사회서비스 금액 총계"]}),(0,t.jsxs)(db,{children:[(0,t.jsxs)("span",{children:["정부지원금(",dd(x),")"]}),(0,t.jsx)("span",{"aria-hidden":!0,children:"+"}),(0,t.jsxs)("span",{children:["본인부담금 결제액(",dd(g),")"]})]})]}),(0,t.jsxs)(d_,{children:["총 ",da(m)]})]}),(0,t.jsx)(dw,{}),(0,t.jsxs)(dy,{children:[(0,t.jsx)(dv,{children:"세부내역"}),(0,t.jsxs)(dz,{children:[(0,t.jsxs)(dT,{children:[(0,t.jsxs)(dE,{children:[(0,t.jsx)(dC,{children:"정부지원금(바우처) 결제액"}),(0,t.jsxs)(dS,{children:[(0,t.jsxs)(dk,{children:["1회당 정부지원금(",dd(j),")"]}),(0,t.jsx)(dk,{children:"x"}),(0,t.jsxs)(dk,{$highlighted:!0,children:["당월 이용 ",p,"회"]})]})]}),(0,t.jsx)(dI,{children:da(x)})]}),(0,t.jsxs)(dT,{children:[(0,t.jsxs)(dE,{children:[(0,t.jsx)(dC,{children:"본인부담금 결제액"}),(0,t.jsxs)(dS,{children:[(0,t.jsxs)(dk,{children:["1회당 본인 부담금(",dd(b),")"]}),(0,t.jsx)(dk,{children:"x"}),(0,t.jsxs)(dk,{$highlighted:!0,children:["당월 이용 ",p,"회"]})]})]}),(0,t.jsx)(dI,{children:da(g)})]})]})]})]}),(0,t.jsxs)(dD,{children:[(0,t.jsx)(dA,{children:(0,t.jsxs)(dO,{type:"button","aria-controls":"monthly-fee-guide-table","aria-expanded":r,onClick:()=>{s(e=>!e)},children:[(0,t.jsxs)(dL,{children:[(0,t.jsx)(a7.default,{sx:{fontSize:24,color:"#1C1B1F"}}),(0,t.jsxs)(dP,{children:["월별 서비스 이용금액 안내 예시 (",n??"-","등급/",u,"회 기준 )"]})]}),!0===r?(0,t.jsx)(d$,{"aria-hidden":!0,htmlColor:"#0a0a0a"}):(0,t.jsx)(dR,{"aria-hidden":!0,htmlColor:"#0a0a0a"})]})}),!0===r?(0,t.jsxs)(dN,{id:"monthly-fee-guide-table",children:[(0,t.jsxs)("colgroup",{children:[(0,t.jsx)("col",{style:{width:"23px"}}),(0,t.jsx)("col",{style:{width:"40px"}}),(0,t.jsx)("col",{style:{width:"27px"}}),(0,t.jsx)("col",{style:{width:"103px"}}),(0,t.jsx)("col",{style:{width:"auto"}}),(0,t.jsx)("col",{style:{width:"auto"}}),(0,t.jsx)("col",{style:{width:"auto"}})]}),(0,t.jsxs)("thead",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)(dM,{colSpan:3,rowSpan:2,children:"서비스 종류"}),(0,t.jsx)(dM,{rowSpan:2,children:"바우처 총액 (월)"}),(0,t.jsx)(dM,{colSpan:3,children:"소득수준별 금액"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)(dM,{children:"소득수준"}),(0,t.jsx)(dM,{children:"본인부담금"}),(0,t.jsx)(dM,{children:"정부지원금"})]})]}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)(dU,{rowSpan:9}),(0,t.jsx)(dF,{colSpan:6,children:"본인부담 : 월 단위 결제"})]}),dl.flatMap(e=>(o[e]??[]).map((n,i)=>{let l=null!==f&&e===c&&i===f;return(0,t.jsxs)("tr",{children:["meal"===e&&0===i?(0,t.jsxs)(dB,{rowSpan:8,children:[(0,t.jsx)("div",{style:{fontSize:10,fontWeight:400},children:"중장년, 청년"}),(0,t.jsx)("span",{children:"식사∙영양관리"})]}):null,0===i?(0,t.jsx)(dY,{rowSpan:4,children:"meal"===e?"식사관리":"영양관리"}):null,0===i?(0,t.jsx)(dV,{rowSpan:4,children:dd((o[e]??[]).reduce((e,t)=>e+t.copay+t.voucher,0))}):null,(0,t.jsx)(dW,{$highlighted:l,$isFirstHighlightCell:!0,children:di[i]}),(0,t.jsx)(dW,{$highlighted:l,children:dd(n.copay)}),(0,t.jsx)(dW,{$highlighted:l,$isLastHighlightCell:!0,children:dd(n.voucher)})]},`${e}-${di[i]}`)}))]})]}):null]})]})]})]})}let ds=l.default.div.withConfig({componentId:"zh__sc-27bdacd5-0"})`
  display: flex;
  gap: 10px;
  align-items: center;
`,dc=l.default.div.withConfig({componentId:"zh__sc-27bdacd5-1"})`
  display: flex;
  gap: 20px;
  align-items: flex-start;

  width: 100%;
  padding: 20px 16px;
  border: 1px solid #e5e9ef;
  border-radius: 8px;

  background: #f6f8ff;
`,df=l.default.div.withConfig({componentId:"zh__sc-27bdacd5-2"})`
  display: flex;
  flex-direction: column;
  gap: 16px;

  width: 212px;
  min-width: 0;
`,dh=l.default.label.withConfig({componentId:"zh__sc-27bdacd5-3"})`
  display: flex;
  flex-direction: column;
  gap: 4px;

  min-width: 0;

  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: #0a0a0a;
`,dp=l.default.div.withConfig({componentId:"zh__sc-27bdacd5-4"})`
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
`,du=l.default.div.withConfig({componentId:"zh__sc-27bdacd5-5"})`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 12px;

  min-width: 0;
`,dx=l.default.div.withConfig({componentId:"zh__sc-27bdacd5-6"})`
  display: flex;
  flex-direction: column;
  gap: 24px;

  width: 100%;
  min-width: 0;
  padding: 20px 16px;
  border: 1px solid #cdd8ec;
  border-radius: 8px;

  background: #fff;
`,dg=l.default.div.withConfig({componentId:"zh__sc-27bdacd5-7"})`
  display: flex;
  gap: 16px;
  align-items: flex-start;
  justify-content: space-between;

  width: 100%;
`,dm=l.default.div.withConfig({componentId:"zh__sc-27bdacd5-8"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 0;
`,dj=l.default.h4.withConfig({componentId:"zh__sc-27bdacd5-9"})`
  margin: 0;

  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  color: #0a0a0a;
`,db=l.default.div.withConfig({componentId:"zh__sc-27bdacd5-10"})`
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
`,d_=l.default.div.withConfig({componentId:"zh__sc-27bdacd5-11"})`
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  color: #e7000b;
`,dw=l.default.hr.withConfig({componentId:"zh__sc-27bdacd5-12"})`
  width: 100%;
  margin: 0;
  border: 0;
  border-top: 1px solid #e5e7eb;
`,dy=l.default.div.withConfig({componentId:"zh__sc-27bdacd5-13"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`,dv=l.default.div.withConfig({componentId:"zh__sc-27bdacd5-14"})`
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  color: #0a0a0a;
`,dC=l.default.div.withConfig({componentId:"zh__sc-27bdacd5-15"})`
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  color: #0a0a0a;
`,dI=l.default.div.withConfig({componentId:"zh__sc-27bdacd5-16"})`
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  color: #0a0a0a;
`,dz=l.default.div.withConfig({componentId:"zh__sc-27bdacd5-17"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`,dT=l.default.div.withConfig({componentId:"zh__sc-27bdacd5-18"})`
  display: flex;
  gap: 16px;
  align-items: flex-start;
  justify-content: space-between;

  width: 100%;
`,dE=l.default.div.withConfig({componentId:"zh__sc-27bdacd5-19"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 0;
`,dS=l.default.div.withConfig({componentId:"zh__sc-27bdacd5-20"})`
  display: flex;
  gap: 4px;
  align-items: center;
  min-width: 0;
`,dk=l.default.span.withConfig({componentId:"zh__sc-27bdacd5-21"})`
  font-size: 14px;
  font-weight: ${({$highlighted:e})=>!0===e?700:400};
  line-height: 20px;
  color: ${({$highlighted:e})=>!0===e?"#e7000b":"#0a0a0a"};
  white-space: nowrap;
`,dD=l.default.div.withConfig({componentId:"zh__sc-27bdacd5-22"})`
  display: flex;
  flex-direction: column;
  gap: 24px;

  width: 100%;
  padding: 20px 16px;
  border: 1px solid #e5e9ef;
  border-radius: 8px;

  background: #fff;
`,dA=l.default.div.withConfig({componentId:"zh__sc-27bdacd5-23"})`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: space-between;

  width: 100%;
`,dO=l.default.button.withConfig({componentId:"zh__sc-27bdacd5-24"})`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 0;
  border: 0;

  background: transparent;
`,dL=l.default.div.withConfig({componentId:"zh__sc-27bdacd5-25"})`
  display: flex;
  gap: 4px;
  align-items: center;
  min-width: 0;
`,d$=(0,l.default)(dt.default).withConfig({componentId:"zh__sc-27bdacd5-26"})`
  flex-shrink: 0;
  font-size: 24px;
`,dR=(0,l.default)(de.default).withConfig({componentId:"zh__sc-27bdacd5-27"})`
  flex-shrink: 0;
  font-size: 24px;
`,dP=l.default.h4.withConfig({componentId:"zh__sc-27bdacd5-28"})`
  margin: 0;

  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  color: #494f53;
  white-space: nowrap;
`,dN=l.default.table.withConfig({componentId:"zh__sc-27bdacd5-29"})`
  table-layout: fixed;
  border-collapse: collapse;
  width: 100%;
  border: 1px solid #58616a;

  @media (width <= 900px) {
    font-size: 12px;
  }
`,dM=l.default.th.withConfig({componentId:"zh__sc-27bdacd5-30"})`
  padding: 8px 4px;
  border: 1px solid #58616a;

  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  color: #0a0a0a;
  text-align: center;
  vertical-align: middle;

  background: #f0f0f0;
`,dF=l.default.td.withConfig({componentId:"zh__sc-27bdacd5-31"})`
  padding: 4px;
  border: 1px solid #58616a;

  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  color: #0a0a0a;
  text-align: center;

  background: #fafafa;
`,dU=l.default.td.withConfig({componentId:"zh__sc-27bdacd5-32"})`
  padding: 4px;
  border: 1px solid #58616a;

  font-size: 10px;
  line-height: 14px;
  color: #0a0a0a;
  text-align: center;

  background: #fafafa;
`,dB=l.default.td.withConfig({componentId:"zh__sc-27bdacd5-33"})`
  padding: 4px;
  border: 1px solid #58616a;

  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  color: #0a0a0a;
  text-align: center;
  vertical-align: middle;

  background: #fafafa;
`,dY=l.default.td.withConfig({componentId:"zh__sc-27bdacd5-34"})`
  padding: 4px;
  border: 1px solid #58616a;

  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  color: #0a0a0a;
  text-align: center;
  vertical-align: middle;

  background: #fafafa;
`,dV=l.default.td.withConfig({componentId:"zh__sc-27bdacd5-35"})`
  padding: 4px;
  border: 1px solid #58616a;

  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  color: #0a0a0a;
  text-align: center;
  vertical-align: middle;

  background: #fff;
`,dW=l.default.td.withConfig({componentId:"zh__sc-27bdacd5-36"})`
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
`,dH=["1인가구","취약가구","출산가구","자립준비","학교생활","직장생활","보호자 일시 부재","나머지 가구구성원의 직장생활 등"],dG=[["1구간","465점 이상","8,293,000","면제","20,000","216,200","216,200","216,200","216,200"],["2구간","435~465미만","7,774,000","면제","20,000","216,200","216,200","216,200","216,200"],["3구간","405~435미만","7,257,000","면제","20,000","216,200","216,200","216,200","216,200"],["4구간","375~405미만","6,739,000","면제","20,000","216,200","216,200","216,200","216,200"],["5구간","345~375미만","6,221,000","면제","20,000","216,200","216,200","216,200","216,200"],["6구간","315~345미만","5,703,000","면제","20,000","216,200","216,200","216,200","216,200"],["7구간","285~315미만","5,181,000","면제","20,000","207,200","216,200","216,200","216,200"],["8구간","255~285미만","4,665,000","면제","20,000","186,600","216,200","216,200","216,200"],["9구간","225~255미만","4,148,000","면제","20,000","165,900","216,200","216,200","216,200"],["10구간","195~225미만","3,629,000","면제","20,000","145,100","216,200","216,200","216,200"],["11구간","165~195미만","3,112,000","면제","20,000","124,400","186,700","216,200","216,200"],["12구간","135~165미만","2,593,000","면제","20,000","103,700","155,500","207,400","216,200"],["13구간","105~135미만","2,076,000","면제","20,000","83,000","124,500","166,000","207,600"],["14구간","75~105미만","1,558,000","면제","20,000","62,300","93,400","124,600","155,800"],["15구간","42~75미만","1,040,000","면제","20,000","41,600","62,400","83,200","104,000"],["특례","특례 대상","7,257,000","면제","20,000","29,300","44,000","58,700","73,400"]],dK=["grade","score","monthlyLimit","typeA","typeB","typeC","typeD","typeE","typeF"];function dX({additionalBenefitTypes:e,benefitDecisionPeriod:n,contractId:l,grade:d,incomeCategory:r,monthlyUsage:s,virtualAccountNumber:c}){var f,h;let p,u,[x,g]=(0,i.useState)(!1),[m,j]=(0,i.useState)(!1),[b,_]=(0,i.useState)(r),[w,y]=(0,i.useState)(c??""),[v,C]=(0,i.useState)(e??[]),[I,z]=(0,i.useState)(!0),T=void 0!==l,E=dZ(d),S=dJ(r),k=function(e,t){if(null===e||null===t)return null;let n=dZ(e),i=dG.find(e=>e[0]===n);if(void 0===i)return null;let l=dJ(t);if(null===l)return null;let a=i[l];if(void 0===a)return null;let d="면제"===a?0:Number(a.replaceAll(",","")),o=Number(i[2].replaceAll(",",""));return Number.isNaN(d)||Number.isNaN(o)?null:{copaymentAmount:d,monthlyLimitAmount:o}}(d,r),D=k?.monthlyLimitAmount??s?.expectedTotalAmount??0,A=k?.copaymentAmount??s?.expectedCopaymentAmount??0,O=null===k?s?.expectedGovernmentSupportAmount??0:D-A,L=`${new Date().getMonth()+1}월`,$=async()=>{if(void 0===l||m)return;j(!0);let[e]=await ah.default.data.contract.update({id:l,payload:{incomeCategory:b??void 0,virtualAccountNumber:w,additionalBenefitTypes:v}});null===e?(await a.default.data.contract.list.refetch(),g(!1)):a.default.ui.layout.toast.error("계좌∙자격 및 기타 정보 저장에 실패했습니다."),j(!1)};return(0,t.jsxs)(aM,{children:[(0,t.jsx)(aF,{children:(0,t.jsxs)(aU,{children:[(0,t.jsxs)(dQ,{children:[(0,t.jsx)(aB,{children:"계좌∙자격 및 기타 정보"}),x&&T?(0,t.jsx)(aH,{children:"수정 진행중"}):null]}),x&&T?(0,t.jsxs)(aY,{children:[(0,t.jsxs)(aV,{type:"button",onClick:()=>{g(!1)},disabled:m,children:[(0,t.jsx)(iq.default,{sx:{fontSize:20}}),"수정 취소"]}),(0,t.jsxs)(aV,{type:"button",onClick:()=>void $(),disabled:m,children:[(0,t.jsx)(nB,{sx:{fontSize:20}}),"수정 저장"]})]}):T?(0,t.jsxs)(aV,{type:"button",onClick:()=>{T&&(_(r),y(c??""),C(e??[]),g(!0))},children:[(0,t.jsx)(nW.default,{sx:{fontSize:20}}),"수정하기"]}):null]})}),(0,t.jsxs)(eG,{children:[(0,t.jsxs)(eK,{$width:193,children:[(0,t.jsx)(eX,{children:"수급결정시기"}),(0,t.jsx)(o.default.Input.Date,{value:n??"",readOnly:!0,style:{...eq,width:"100%",height:36}})]}),(0,t.jsxs)(eK,{$width:213,children:[(0,t.jsx)(eX,{children:"가상계좌번호"}),(0,t.jsx)(o.default.Input.Text,{value:x?w:c??"",placeholder:"가상계좌를 입력해주세요.",inputMode:"numeric",readOnly:!x,onChange:e=>y(e.target.value),style:eq})]}),(0,t.jsxs)(eK,{children:[(0,t.jsx)(eX,{children:"수급여부"}),(0,t.jsxs)(d2,{children:[(0,t.jsxs)(d6,{children:[(0,t.jsx)(d1,{name:"disability-income-category",checked:(x?b:r)==="TYPE_A",disabled:!x,onChange:()=>_("TYPE_A")}),"기초생활수급자"]}),(0,t.jsxs)(d6,{children:[(0,t.jsx)(d1,{name:"disability-income-category",checked:(x?b:r)==="TYPE_B",disabled:!x,onChange:()=>_("TYPE_B")}),"차상위계층"]}),(0,t.jsxs)(d6,{children:[(0,t.jsx)(d1,{name:"disability-income-category",checked:["TYPE_C","TYPE_D","TYPE_E","TYPE_F"].includes(x?b??"":r??""),disabled:!x,onChange:()=>{null!==b&&["TYPE_C","TYPE_D","TYPE_E","TYPE_F"].includes(b)||_("TYPE_C")}}),"일반"]})]})]})]}),(0,t.jsx)(eG,{children:(0,t.jsxs)(eK,{children:[(0,t.jsx)(eX,{children:"추가급여대상 여부"}),(0,t.jsx)(d4,{children:dH.map(n=>(0,t.jsxs)(d5,{children:[(0,t.jsx)(d0,{checked:(x?v:e??[]).includes(n),disabled:!x,onChange:()=>{C(e=>e.includes(n)?e.filter(e=>e!==n):[...e,n])}}),n]},n))})]})}),(0,t.jsxs)(d3,{children:[(0,t.jsx)(aB,{children:"계약서 세부내역"}),(0,t.jsx)(d9,{children:"30일 기준"})]}),(0,t.jsxs)(d8,{children:[(0,t.jsxs)(d7,{children:[(0,t.jsxs)(oe,{children:[L," 바우처 월 한도액 및 정산 총액"]}),(0,t.jsxs)(ot,{children:[(0,t.jsxs)(on,{children:[(0,t.jsx)(oi,{children:"총 월한도액"}),(0,t.jsx)(ol,{children:"월한도액 + 본인부담금"}),(0,t.jsx)(oa,{children:dq(D)})]}),(0,t.jsx)(oo,{"aria-hidden":!0,children:"="}),(0,t.jsxs)(on,{children:[(0,t.jsx)(oi,{children:"정부지원금"}),(0,t.jsx)(ol,{children:"월한도액 - 본인부담금"}),(0,t.jsx)(oa,{children:dq(O)})]}),(0,t.jsx)(oo,{"aria-hidden":!0,children:"+"}),(0,t.jsxs)(on,{children:[(0,t.jsx)(oi,{children:"본인부담금"}),(0,t.jsx)(ol,{children:(f=d,h=r,p=null===f?"":f.startsWith("SPECIAL")?"특례":`${f}구간`,u="TYPE_A"===h?"[가]형 생계·의료급여 수급자":"TYPE_B"===h?"[나]형 차상위계층":"TYPE_C"===h?"[다]형 중위소득 70% 이하":"TYPE_D"===h?"[라]형 중위소득 120% 이하":"TYPE_E"===h?"[마]형 중위소득 180% 이하":"TYPE_F"===h?"[바]형 중위소득 180% 초과":"",`${p} ${u}`.trim())}),(0,t.jsxs)(oa,{$accent:!0,children:[A.toLocaleString("ko-KR")," ",(0,t.jsx)(od,{children:"원"})]})]})]})]}),(0,t.jsxs)(or,{children:[(0,t.jsxs)(os,{type:"button","aria-expanded":I,"aria-controls":"disability-benefit-guide",onClick:()=>z(e=>!e),children:[(0,t.jsxs)(oc,{children:[(0,t.jsx)(a7.default,{sx:{fontSize:24,color:"#1c1b1f"}}),"활동지원급여 월한도액 및 소득구분별 본인부담금 통합 기준표"]}),I?(0,t.jsx)(dt.default,{"aria-hidden":!0}):(0,t.jsx)(de.default,{"aria-hidden":!0})]}),I?(0,t.jsxs)(of,{id:"disability-benefit-guide",children:[(0,t.jsxs)("thead",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)(oh,{rowSpan:2,$muted:!0,children:"구간"}),(0,t.jsx)(oh,{rowSpan:2,children:"종합점수"}),(0,t.jsx)(oh,{rowSpan:2,$monthlyLimit:!0,children:"월한도액"}),(0,t.jsx)(oh,{colSpan:6,$benefitHeader:!0,children:"본인부담금"})]}),(0,t.jsx)("tr",{children:["[가형]\n생계·의료급여 수급자","[나형]\n차상위계층","[다형]\n중위소득\n70% 이하","[라형]\n중위소득\n120% 이하","[마형]\n중위소득\n180% 이하","[바형]\n중위소득\n180% 초과"].map(e=>(0,t.jsx)(oh,{children:e},e))})]}),(0,t.jsx)("tbody",{children:dG.map(e=>(0,t.jsx)("tr",{children:e.map((n,i)=>(0,t.jsx)(op,{$muted:0===i||2===i,$monthlyLimit:2===i,$selected:e[0]===E&&(2===i||i===S),children:n},`${e[0]}-${dK[i]}`))},e[0]))})]}):null]})]})]})}function dq(e){return`${e.toLocaleString("ko-KR")} 원`}let dQ=l.default.div.withConfig({componentId:"zh__sc-bcf5d5b7-0"})`
  display: flex;
  gap: 8px;
  align-items: center;
`;function dZ(e){return null===e?null:e.startsWith("SPECIAL")?"특례":`${e}구간`}function dJ(e){return null===e?null:({TYPE_A:3,TYPE_B:4,TYPE_C:5,TYPE_D:6,TYPE_E:7,TYPE_F:8})[e]}let d0=(0,l.default)(o.default.Input.Check).attrs({$iconSizeRatio:1.5}).withConfig({componentId:"zh__sc-bcf5d5b7-1"})`
  width: 24px;
  height: 24px;
`,d1=(0,l.default)(o.default.Input.Radio).withConfig({componentId:"zh__sc-bcf5d5b7-2"})`
  width: 24px;
  height: 24px;
`,d2=l.default.div.withConfig({componentId:"zh__sc-bcf5d5b7-3"})`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 16px;
  align-items: center;

  min-height: 36px;
`,d6=l.default.label.withConfig({componentId:"zh__sc-bcf5d5b7-4"})`
  display: inline-flex;
  gap: 8px;
  align-items: center;

  min-height: 36px;

  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: #000;
  white-space: nowrap;
`,d4=l.default.div.withConfig({componentId:"zh__sc-bcf5d5b7-5"})`
  display: flex;
  flex-wrap: wrap;
  gap: 0 24px;
  align-items: center;
`,d5=l.default.label.withConfig({componentId:"zh__sc-bcf5d5b7-6"})`
  display: inline-flex;
  gap: 8px;
  align-items: center;

  height: 36px;

  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  color: #000;
`,d3=l.default.div.withConfig({componentId:"zh__sc-bcf5d5b7-7"})`
  display: flex;
  gap: 10px;
  align-items: center;
`,d9=(0,l.default)(aW).withConfig({componentId:"zh__sc-bcf5d5b7-8"})`
  background: #fff;
`,d8=l.default.div.withConfig({componentId:"zh__sc-bcf5d5b7-9"})`
  display: flex;
  flex-direction: column;
  gap: 10px;

  width: 100%;
  padding: 20px 16px;
  border: 1px solid #e5e9ef;
  border-radius: 8px;

  background: #f6f8ff;
`,d7=l.default.div.withConfig({componentId:"zh__sc-bcf5d5b7-10"})`
  display: flex;
  flex-direction: column;
  gap: 10px;

  padding: 16px;
  border: 1px solid #e5e9ef;
  border-radius: 8px;

  background: #fff;
`,oe=l.default.h3.withConfig({componentId:"zh__sc-bcf5d5b7-11"})`
  margin: 0;

  font-size: 18px;
  font-weight: 700;
  line-height: normal;
  color: #0a0a0a;
`,ot=l.default.div.withConfig({componentId:"zh__sc-bcf5d5b7-12"})`
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: space-between;
`,on=l.default.div.withConfig({componentId:"zh__sc-bcf5d5b7-13"})`
  position: relative;

  flex: 1;

  min-width: 0;
  padding: 20px 16px;
  border: 1px solid #cdd8ec;
  border-radius: 8px;

  background: #fff;
`,oi=l.default.strong.withConfig({componentId:"zh__sc-bcf5d5b7-14"})`
  display: block;
  font-size: 18px;
  font-weight: 700;
  line-height: normal;
`,ol=l.default.span.withConfig({componentId:"zh__sc-bcf5d5b7-15"})`
  display: block;
  margin-top: 8px;
  font-size: 14px;
  line-height: normal;
`,oa=l.default.strong.withConfig({componentId:"zh__sc-bcf5d5b7-16"})`
  position: absolute;
  top: 20px;
  right: 16px;

  font-size: 18px;
  font-weight: 700;
  line-height: normal;
  color: ${({$accent:e})=>!0===e?"#f00":"#0a0a0a"};
`,od=l.default.span.withConfig({componentId:"zh__sc-bcf5d5b7-17"})`
  color: #0a0a0a;
`,oo=l.default.strong.withConfig({componentId:"zh__sc-bcf5d5b7-18"})`
  flex: 0 0 20px;
  font-size: 18px;
  text-align: center;
`,or=l.default.div.withConfig({componentId:"zh__sc-bcf5d5b7-19"})`
  overflow-x: auto;

  padding: 16px 10px 10px;
  border: 1px solid #e5e9ef;
  border-radius: 8px;

  background: #fff;
`,os=l.default.button.withConfig({componentId:"zh__sc-bcf5d5b7-20"})`
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
`,oc=l.default.span.withConfig({componentId:"zh__sc-bcf5d5b7-21"})`
  display: flex;
  gap: 4px;
  align-items: center;

  font-size: 18px;
  font-weight: 700;
  white-space: nowrap;
`,of=l.default.table.withConfig({componentId:"zh__sc-bcf5d5b7-22"})`
  table-layout: fixed;
  border-collapse: collapse;

  width: 100%;
  min-width: 915px;

  font-size: 14px;
  color: #0a0a0a;
`,oh=l.default.th.withConfig({componentId:"zh__sc-bcf5d5b7-23"})`
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
`,op=l.default.td.withConfig({componentId:"zh__sc-bcf5d5b7-24"})`
  height: 40px;
  padding: 4px 6px;
  border: ${({$selected:e})=>!0===e?"2px solid #FB2C36":"1px solid #58616a"};

  line-height: normal;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;

  background: ${({$monthlyLimit:e,$muted:t})=>!0===e?"#f6f8ff":!0===t?"#f9fafb":"#fff"};
`,ou=(0,n.observer)(function(){let e=a.default.client.info.byClient,n=e.currentServiceType,l=e.selectedContract,d="DISABILITY_ACTIVITY_SUPPORT"===n,[o,r]=(0,i.useState)(null),s=function(e){if(null===e)return null;if(1===e||2===e||3===e||4===e)return e;if("string"==typeof e){let t=Number(e.trim().replace("등급",""));if(1===t||2===t||3===t||4===t)return t}return null}(l?.grade??null),c=a.default.data.organization.serviceList.data?.serviceStandardFee.reduce((e,t)=>{let n="MEAL"===t.type?"meal":"NUTRITION"===t.type?"nutrition":null;return null!==n&&(e[n]=t.fee),e},{})??{};return(0,i.useEffect)(()=>{let e=l?.id,[t,i]=ap.default.create(new Date().getFullYear(),new Date().getMonth()+1);if(null===n||void 0===e||null!==t||null===i)return;let a=!0;return(async t=>{let[i,l]=await ah.default.data.serviceProvision.getMonthlyStatus({serviceType:n,targetYearMonth:t});if(!a)return;let d=l?.rows.find(t=>t.contractId===e);null!==i||void 0===d?r(null):r({expectedCopaymentAmount:d.expectedCopaymentAmount,expectedGovernmentSupportAmount:d.expectedGovernmentSupportAmount,expectedTotalAmount:d.expectedTotalAmount,providedCount:d.providedCount,scheduledCount:l.schedule.length})})(i),()=>{a=!1}},[l?.id,n]),(0,t.jsxs)(ox,{children:[(0,t.jsx)(aG,{}),d?(0,t.jsx)(dX,{additionalBenefitTypes:l?.additionalBenefitTypes??null,benefitDecisionPeriod:function(e){if(null!==e&&"benefitDecisionPeriod"in e)return"string"==typeof e.benefitDecisionPeriod?e.benefitDecisionPeriod:void 0}(l),contractId:l?.id,grade:l?.grade??null,incomeCategory:l?.incomeCategory??null,monthlyUsage:o,virtualAccountNumber:l?.virtualAccountNumber??null},l?.id??"no-contract"):(0,t.jsx)(dr,{serviceCode:null===n?null:"MEAL"===n?"meal":"nutrition",grade:s,paymentMethodText:"CMS 자동이체",paymentDayText:"매월 25일",monthlyUsage:o,serviceFees:c})]})}),ox=l.default.div.withConfig({componentId:"zh__sc-cbb8903d-0"})`
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
`;var og=e.i(27997),om=e.i(34944),oj=e.i(99696);function ob(e){if(null===e)return"-";let t=Object.keys(oj.default).filter(e=>e in oj.default).find(t=>oj.BUSINESS_TYPE_SERVICE_TYPES[t].includes(e))??null;if(null===t)return"-";let n=`${r.default[e].label}${"MEAL"===e||"NUTRITION"===e?"관리":""} 서비스`;return`${oj.default[t].label} ${n} - ${r.default[e].code}`}let o_=(0,n.observer)(function({disabled:e=!1}){let n=a.default.client.info.byClient,i=n.contractsOfSelectedClient,l=n.selectedContractId,d=i.some(e=>e.status===om.default.ACTIVE);return(0,t.jsxs)(ow,{children:[(0,t.jsx)(oy,{children:"계약 회차"}),(0,t.jsxs)(ov,{value:l??tt.SELECT_EMPTY_VALUE,disabled:e||0===i.length,onChange:e=>{let t=e.target.value;n.setSelectedContractId(t===tt.SELECT_EMPTY_VALUE?null:t)},children:[0===i.length?(0,t.jsx)("option",{value:tt.SELECT_EMPTY_VALUE,children:"-"}):null,i.map((e,n)=>{let l,a,o,r,s,c;return l=e.serviceStartDate??"",a=e.serviceEndDate??"",o=e.status===om.default.ACTIVE,r=d&&""!==l&&(0,n$.isFutureContractStart)(l),s=""!==l&&""!==a?`${l.replaceAll("-",".")} ~ ${a.replaceAll("-",".")}`:"-",c=`${i.length-n}차 계약 (${s})${o?" [진행중]":r?" [재계약 중]":""}`,(0,t.jsx)("option",{value:e.id,children:c},e.id)})]})]})}),ow=l.default.div.withConfig({componentId:"zh__sc-4a58d4b2-0"})`
  display: flex;
  gap: 8px;
  align-items: center;
  min-width: 0;
`,oy=l.default.p.withConfig({componentId:"zh__sc-4a58d4b2-1"})`
  margin: 0;

  font-size: 18px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 111.111% */
  color: #0a0a0a;
  text-align: center;
  white-space: nowrap;
`,ov=(0,l.default)(o.default.Input.Select).withConfig({componentId:"zh__sc-4a58d4b2-2"})`
  display: flex;
  align-items: center;
  justify-content: center;

  min-width: 155px;
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
`,oC=(0,n.observer)(function(){let e,[n,l]=(0,i.useState)(!1),[d,r]=(0,i.useState)(!1),[s,c]=(0,i.useState)(!1),[f,h]=(0,i.useState)({key:"",date:""}),p=(0,i.useRef)(null),u=a.default.client.info.byClient,x=a.default.modal.clientCreate,{selectedClientId:g,selectedContract:m,currentServiceType:j}=u,b=u.contractsOfSelectedClient,_=u.selectedClient,w=null!==g&&null!==_,y=u.isContractDetailEditing,v=u.selectedContractDetailDraftContractStartDate,C=u.selectedContractDetailDraftContractEndDate,I=u.selectedContractDetailDraftStatus,z=[m?.id??"",j??"",v??m?.contractStartDate??"",y?"editing":"readonly",I??m?.status??""].join("|"),T=f.key===z?f.date:"";if((0,i.useEffect)(()=>{if(!w||!y||n||d||s)return;let e=e=>{let t=e.target;nP(t)||nN(t)||t instanceof Node&&null!==p.current&&p.current.contains(t)||u.cancelContractDetailEdit()};return document.addEventListener("pointerdown",e),()=>{document.removeEventListener("pointerdown",e)}},[u,w,y,n,d,s]),(0,i.useEffect)(()=>{let e=m?.id,t=m?.contractStartDate??"",n=m?.status??om.default.ACTIVE,i=(I??n)===om.default.TERMINATED;if(!w||!y||!i||void 0===e||null===j||!eV.default.is(t))return;let l=function(e,t){if(!eV.default.is(e)||!eV.default.is(t))return[];let[n,i]=e.split("-"),[l,a]=t.split("-"),d=Number(n),o=Number(i),r=Number(l),s=Number(a);if(!Number.isInteger(d)||!Number.isInteger(o)||!Number.isInteger(r)||!Number.isInteger(s))return[];let c=new Date(d,o-1,1),f=new Date(r,s-1,1);if(c.getTime()>f.getTime())return[];let h=[],p=new Date(c);for(;p.getTime()<=f.getTime();){let[e,t]=nL.default.yearMonth.create(p.getFullYear(),p.getMonth()+1);null===e&&h.push(t),p.setMonth(p.getMonth()+1)}return h}(t,(0,n$.getTodayCalendarDateString)());if(0===l.length)return;let a=!0;return(async()=>{let t=await Promise.all(l.map(e=>ah.default.data.serviceProvision.getMonthlyStatus({serviceType:j,targetYearMonth:e})));a&&h({key:z,date:t.reduce((t,[n,i])=>{if(null!==n||null===i)return t;let l=function(e,t){let n=e.find(e=>e.contractId===t);if(void 0===n)return"";let i=(0,n$.getTodayCalendarDateString)();return n.cells.reduce((e,t)=>!1===t.isPending&&"PROVIDED"!==t.status||!eV.default.is(t.serviceDate)||i<t.serviceDate?e:!eV.default.is(e)||e<t.serviceDate?t.serviceDate:e,"")}(i.rows,e);return eV.default.is(l)&&(!eV.default.is(t)||t<l)?l:t},"")})})(),()=>{a=!1}},[v,I,j,w,y,z,m?.contractStartDate,m?.id,m?.status]),!w||null===_)return(0,t.jsx)(oX,{children:"서비스를 선택한 뒤 이용자를 선택해 주세요."});let E=_.name,S=ob(j),k=m?.status??om.default.ACTIVE,D=I??k,A=y?D:m?.status??"UNCONTRACTED",O=D===om.default.COMPLETED,L=D===om.default.TERMINATED,$=m?.contractStartDate??"",R=v??$,P=nR(R),N=m?.contractEndDate??"",M=C??N,F=nR(M),U=nR(m?.serviceStartDate??""),B=m?.serviceEndDate??"",Y=nR(B),V=(0,n$.getContractExpirationReminder)({contractStatus:D,contractEndDate:N,hasRenewingContract:(0,n$.hasRenewingContract)(b)}),W=!y&&null!==V,G=L?F:Y,K=(0,n$.getTodayCalendarDateString)().replaceAll("-","."),X=(e=(0,n$.getTodayCalendarDateString)(),eV.default.is(B)&&B<e?B:e),q=!eV.default.is(B)||(0,n$.getTodayCalendarDateString)()<B,Q=q?`오늘(${K})로 계약이 해지되며, 계약 종료일이 변경됩니다.`:`계약이 해지되며, 계약 종료일이 ${nR(X)}로 변경됩니다.`,Z=`${nM($)} ~ ${nM(N)}`,J=(m?.serviceType??j)==="DISABILITY_ACTIVITY_SUPPORT",ee=m?.grade?.trim()??"",et=m?.incomeCategory??"",en=""===ee?"-":ee.startsWith("SPECIAL")?`특례 ${ee.slice(7)}`.trim():ee.endsWith("구간")?ee:`${ee}구간`,ei=""===et?"-":et in tp.default?tp.default[et].label:et,el=""===ee?"-":ee.includes("등급")?ee:`${ee}등급`;return(0,t.jsxs)(oI,{ref:p,children:[(0,t.jsx)(oz,{children:(0,t.jsxs)(oT,{children:[(0,t.jsxs)(oE,{children:[(0,t.jsxs)(oS,{children:[(0,t.jsx)(ok,{children:E}),(0,t.jsx)(oD,{children:(0,t.jsx)(oA,{children:S})}),y?(0,t.jsx)(n2,{children:"수정 진행중"}):null]}),!0===y?(0,t.jsxs)(n0,{children:[(0,t.jsxs)(n1,{type:"button",onClick:()=>{u.cancelContractDetailEdit()},children:[(0,t.jsx)(iq.default,{sx:{fontSize:20}}),"수정 취소"]}),(0,t.jsxs)(n1,{type:"button",onClick:()=>{void 0===u.selectedContractDetailDraft?u.cancelContractDetailEdit():l(!0)},children:[(0,t.jsx)(lO.default,{sx:{fontSize:20}}),"수정 저장"]})]}):(0,t.jsxs)(n1,{type:"button",disabled:O,onClick:()=>{O||u.startContractDetailEdit()},children:[(0,t.jsx)(nW.default,{sx:{fontSize:20}}),"수정하기"]})]}),(0,t.jsxs)(oL,{children:[(0,t.jsxs)(oR,{children:[(0,t.jsx)(oW,{children:"계약 상태"}),(0,t.jsx)(oM,{children:(0,t.jsxs)(oF,{value:A,disabled:!y||null===m,onChange:e=>{let t=e.target.value;if((0,om.isSelectableContractStatus)(t)&&t!==D){if(t===om.default.TERMINATED)return void r(!0);if(t===om.default.ACTIVE)return void c(!0);u.updateSelectedContractDetailDraftStatus(t)}},children:[null===m?(0,t.jsx)("option",{value:"UNCONTRACTED",children:"미계약"}):null,(0,t.jsx)("option",{value:om.default.ACTIVE,children:"계약중"}),(0,t.jsx)("option",{value:om.default.TERMINATED,children:"해지"}),D===om.default.COMPLETED?(0,t.jsx)("option",{value:om.default.COMPLETED,children:"완료"}):null]})})]}),null===m?(0,t.jsxs)(oV,{type:"button",onClick:()=>{x.show("create",j??"MEAL",_),u.closeClientDetail(),u.setSelectedClientId(null)},children:[(0,t.jsx)(H.default.ContractEdit,{size:16}),"계약하기"]}):W?(0,t.jsxs)(oY,{children:[null!==V?(0,t.jsx)(og.default,{$color:V.color,children:V.remainingDays<0?`계약 만료 ${Math.abs(V.remainingDays)}일 지남`:`계약 만료 ${V.remainingDays}일 남음`}):null,(0,t.jsxs)(oV,{type:"button",onClick:()=>{x.show("renew",m?.serviceType??"MEAL")},children:[(0,t.jsx)(H.default.ContractEdit,{size:16}),"재계약 하기"]})]}):null]}),(0,t.jsxs)(o$,{children:[(0,t.jsx)(o_,{disabled:y}),J?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(oR,{children:[(0,t.jsx)(oW,{children:"활동지원 구간"}),(0,t.jsx)(oU,{children:(0,t.jsx)(oB,{value:""===ee?tt.SELECT_EMPTY_VALUE:ee,disabled:!0,children:(0,t.jsx)("option",{value:""===ee?tt.SELECT_EMPTY_VALUE:ee,children:en})})})]}),(0,t.jsxs)(oR,{children:[(0,t.jsx)(oW,{children:"소득 유형"}),(0,t.jsx)(oU,{children:(0,t.jsx)(oB,{value:""===et?tt.SELECT_EMPTY_VALUE:et,disabled:!0,children:(0,t.jsx)("option",{value:""===et?tt.SELECT_EMPTY_VALUE:et,children:ei})})})]})]}):(0,t.jsxs)(oR,{children:[(0,t.jsx)(oW,{children:"바우처 등급"}),(0,t.jsx)(oU,{children:(0,t.jsx)(oB,{value:""===ee?tt.SELECT_EMPTY_VALUE:ee,disabled:!0,children:(0,t.jsx)("option",{value:""===ee?tt.SELECT_EMPTY_VALUE:ee,children:el})})})]})]}),(0,t.jsxs)(oO,{children:[(0,t.jsxs)(oR,{children:[(0,t.jsx)(oW,{children:"계약 기간"}),!0!==y||L?(0,t.jsx)(oH,{children:P}):(0,t.jsx)(oP,{children:(0,t.jsx)(o.default.Input.Date,{style:{width:180,height:28,paddingLeft:16,fontSize:16},value:R,readOnly:!1,isDateSelectable:e=>!eV.default.is(B)||e<=B,onChange:e=>{u.updateSelectedContractDetailDraftContractStartDate(e)},placeholder:"YYYY-MM-DD"})}),(0,t.jsx)(oG,{children:"~"}),!0===y&&L?(0,t.jsx)(oN,{children:(0,t.jsx)(o.default.Input.Date,{style:{width:180,height:28,paddingLeft:16,fontSize:16},value:M,readOnly:!1,isDateSelectable:e=>!(eV.default.is(R)&&e<R||eV.default.is(T)&&e<T||eV.default.is(B)&&B<e),onChange:e=>{u.updateSelectedContractDetailDraftContractEndDate(e)},placeholder:"YYYY-MM-DD"})}):(0,t.jsx)(oH,{children:G})]}),!J&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(oK,{}),(0,t.jsxs)(oR,{children:[(0,t.jsx)(oW,{children:"서비스 기간"}),(0,t.jsx)(oH,{children:U}),(0,t.jsx)(oG,{children:"~"}),(0,t.jsx)(oH,{children:Y})]})]})]})]})}),(0,t.jsx)(ae,{isOpen:n,title:"계약 정보를 저장할까요?",description:`수정된 정보는 연결된 서류의 자동입력 항목에 함께 반영됩니다.
이미 출력했거나 최종확인한 서류는 다시 확인이 필요할 수 있습니다.`,cancelLabel:"취소하기",confirmLabel:"저장 및 모든 서류에 반영",onCancel:()=>{l(!1)},onConfirm:()=>{u.saveSelectedContractDetailDraft().then(e=>{!0===e&&l(!1)})}}),(0,t.jsx)(ae,{isOpen:d,title:q?"계약을 중도 해지 하시겠습니까?":"계약을 해지 하시겠습니까?",description:`${Q}
해지 시, 계약 시작일은 수정할 수 없으며 계약 종료일은 수정할 수 있습니다.`,cancelLabel:"취소하기",confirmLabel:"변경하기",onCancel:()=>{r(!1)},onConfirm:()=>{u.updateSelectedContractDetailDraftContractStartDate($),u.updateSelectedContractDetailDraftContractEndDate(X),u.updateSelectedContractDetailDraftStatus(om.default.TERMINATED),r(!1)}}),(0,t.jsx)(ae,{isOpen:s,title:"계약중 상태로 되돌리시겠습니까?",description:`이전 계약 기간 (${Z})으로 되돌리며, 해지에서 계약중으로 변경됩니다.
계약중일 시, 계약 시작일을 수정할 수 있으며 계약 종료일은 수정할 수 없습니다.`,cancelLabel:"취소하기",confirmLabel:"변경하기",onCancel:()=>{c(!1)},onConfirm:()=>{u.updateSelectedContractDetailDraftContractEndDate(B),u.updateSelectedContractDetailDraftStatus(om.default.ACTIVE),c(!1)}})]})}),oI=l.default.div.withConfig({componentId:"zh__sc-a64f020c-0"})`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  width: 100%;
  min-height: 156px;
  padding: 16px 24px;
  border-bottom: 1px solid #e5e7eb;

  background: #fff;
`,oz=l.default.div.withConfig({componentId:"zh__sc-a64f020c-1"})`
  display: flex;
  gap: 24px;
  width: 100%;
`,oT=l.default.div.withConfig({componentId:"zh__sc-a64f020c-2"})`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  gap: 16px;
  justify-content: center;

  min-width: 0;
`,oE=l.default.div.withConfig({componentId:"zh__sc-a64f020c-3"})`
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  min-width: 0;
`,oS=l.default.div.withConfig({componentId:"zh__sc-a64f020c-4"})`
  display: flex;
  gap: 16px;
  align-items: center;
  min-width: 0;
`,ok=l.default.div.withConfig({componentId:"zh__sc-a64f020c-5"})`
  font-size: 24px;
  font-weight: 700;
  line-height: 20px;
  color: #0a0a0a;
`,oD=l.default.div.withConfig({componentId:"zh__sc-a64f020c-6"})`
  overflow: hidden;
  display: flex;
  gap: 4px;
  align-items: center;

  min-width: 0;
`,oA=l.default.div.withConfig({componentId:"zh__sc-a64f020c-7"})`
  overflow: hidden;

  padding: 2px 12px;
  border: 1px solid #d1d5db;
  border-radius: 99px;

  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: #0a0a0a;
  white-space: nowrap;
`,oO=l.default.div.withConfig({componentId:"zh__sc-a64f020c-8"})`
  display: flex;
  gap: 12px;
  align-items: center;
  min-width: 0;
`,oL=l.default.div.withConfig({componentId:"zh__sc-a64f020c-9"})`
  display: flex;
  gap: 16px;
  align-items: center;
  min-width: 0;
`,o$=l.default.div.withConfig({componentId:"zh__sc-a64f020c-10"})`
  display: flex;
  gap: 8px;
  align-items: center;
  min-width: 0;
`,oR=l.default.div.withConfig({componentId:"zh__sc-a64f020c-11"})`
  display: flex;
  gap: 8px;
  align-items: center;

  min-width: 0;

  font-size: 18px;
  line-height: 20px;
  color: #0a0a0a;
  white-space: nowrap;
`,oP=l.default.div.withConfig({componentId:"zh__sc-a64f020c-12"})`
  display: flex;
  flex-direction: column;
  min-width: 0;
`,oN=l.default.div.withConfig({componentId:"zh__sc-a64f020c-13"})`
  display: flex;
  flex-direction: column;
  min-width: 0;
`,oM=l.default.div.withConfig({componentId:"zh__sc-a64f020c-14"})`
  display: flex;
  flex-direction: column;
  min-width: 0;
`,oF=(0,l.default)(o.default.Input.Select).withConfig({componentId:"zh__sc-a64f020c-15"})`
  width: 94px;
  height: 28px;
`,oU=l.default.div.withConfig({componentId:"zh__sc-a64f020c-16"})`
  display: flex;
  flex-direction: column;
  min-width: 0;
`,oB=(0,l.default)(o.default.Input.Select).withConfig({componentId:"zh__sc-a64f020c-17"})`
  min-width: 94px;
  height: 28px;
`,oY=l.default.div.withConfig({componentId:"zh__sc-a64f020c-18"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,oV=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-a64f020c-19"})`
  gap: 8px;
  padding: 0 16px;
`,oW=l.default.span.withConfig({componentId:"zh__sc-a64f020c-20"})`
  font-weight: 700;
`,oH=l.default.span.withConfig({componentId:"zh__sc-a64f020c-21"})`
  font-weight: 400;
`,oG=l.default.span.withConfig({componentId:"zh__sc-a64f020c-22"})`
  font-weight: 400;
`,oK=l.default.div.withConfig({componentId:"zh__sc-a64f020c-23"})`
  width: 1px;
  height: 24px;
  background: #e5e7eb;
`,oX=l.default.div.withConfig({componentId:"zh__sc-a64f020c-24"})`
  width: 100%;
  padding: 16px 24px;
  border-bottom: 1px solid #e5e7eb;

  font-size: 14px;
  color: #6b7280;

  background: #fff;
`;var oq=e.i(7665);function oQ(){return(oQ=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var oZ=(0,i.forwardRef)(function(e,t){var n=e.color,l=e.size,a=void 0===l?24:l,d=function(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["color","size"]);return i.default.createElement("svg",oQ({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),i.default.createElement("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),i.default.createElement("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),i.default.createElement("polyline",{points:"21 15 16 10 5 21"}))});oZ.propTypes={color:M.default.string,size:M.default.oneOfType([M.default.string,M.default.number])},oZ.displayName="Image";let oJ={badge:{label:"데이터 없음",color:"black"},action:{label:"파일 미첨부",color:"black"}};function o0(e){if(null==e)return oJ;switch(e){case"WAITING_TO_LINK":return{badge:{label:"연동 대기",color:"lightBlue"},action:{label:"연동 대기중...",color:"blue",disabled:!0}};case"WAITING_TO_DRAFT":return{badge:{label:"작성 대기",color:"lightBlue"},action:{label:"서류 작성 시작하기",color:"blue"}};case"WAITING_TO_PRINT":return{badge:{label:"출력 대기",color:"blue"},action:{label:"초안 검토하기",color:"blue"}};case"NEED_UPDATE":return{badge:{label:"업데이트 필요",color:"orange"},action:{label:"수기 서류 업로드하기",color:"orange"}};case"NEED_MATCHING":return{badge:{label:"서류 대조",color:"orange"},action:{label:"수기 서류 업로드하기",color:"orange"}};case"LINKED_COMPLETED":return{badge:{label:"연동 완료",color:"orange",icon:(0,t.jsx)(H.default.WandShine,{size:16})},action:{label:"서류 최종 확인하기",color:"orange"}};case"COMPLETED":return{badge:{label:"전산 완료",color:"gray"},action:{label:"문서 확인하기",color:"indigo"}};default:return oJ}}var o1=e.i(70888);let o2=(0,nF.default)((0,t.jsx)("path",{fillRule:"evenodd",d:"M4 11h16v2H4z"}),"HorizontalRule");function o6({status:e,onClick:n,disabled:i=!1}){return(0,t.jsx)(o4,{$status:e,$disabled:i,onClick:i?void 0:n,children:"checked"===e?(0,t.jsx)(lO.default,{sx:{fontSize:18}}):"indeterminate"===e?(0,t.jsx)(o2,{sx:{fontSize:20}}):null})}let o4=l.default.div.withConfig({componentId:"zh__sc-a3965854-0"})`
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
`;function o5(e,t){return 0===t||0===e?"unchecked":e===t?"checked":"indeterminate"}let o3=(0,n.observer)(function({template:e,isChecked:n,hasDocument:l,statusChangeToken:d,toggleSelectedTemplateId:o}){let{id:r,name:s,templateImagePath:c}=e,f=c?.[0]??null,h=a.default.client.info.byClient.docs.documentStatusByTemplateId.get(r)??null,p=a.default.client.info.byClient.docs.documentByTemplateId.get(r)??null,u=o0(h),x=l&&(0,o1.canSelectDocumentInList)(p?.displayStatus),{ref:g,fire:m}=ez(),j=(0,i.useRef)(d);return(0,i.useEffect)(()=>{if(d<=j.current){j.current=d;return}j.current=d,m()},[m,d]),(0,t.jsxs)(rn,{ref:g,children:[(0,t.jsx)(ri,{children:(0,t.jsx)(o6,{status:n?"checked":"unchecked",disabled:!x,onClick:()=>o(r)})}),(0,t.jsxs)(rl,{$color:u.badge.color,children:[u.badge.icon,u.badge.label]}),(0,t.jsx)(ra,{children:null!==f&&""!==f?(0,t.jsx)(oq.default,{src:f,width:210,height:297,style:{width:"auto",height:"90%",maxWidth:"90%",objectFit:"contain"},loading:"eager",alt:s}):(0,t.jsx)(oZ,{size:40,color:"#D1D5DC"})}),(0,t.jsxs)(rd,{children:[(0,t.jsx)(ro,{children:(0,t.jsx)(rr,{children:s})}),(0,t.jsx)(rs,{$color:u.action.color,disabled:!0===u.action.disabled||"black"===u.action.color,onClick:()=>{if(null===p){"WAITING_TO_DRAFT"===h&&a.default.modal.documentView.openTemplateWithoutDocument(e.id);return}a.default.modal.documentView.open(p.id)},children:u.action.label})]})]})}),o9=(0,n.observer)(function(){let e=a.default.client.info.byClient.docs,n=e.selectedTemplateIdSet,{toggleSelectedTemplateId:i,addSelectedTemplateIds:l,removeSelectedTemplateIds:d}=e,o=e.documentByTemplateId;return null===a.default.client.info.byClient.selectedClientId?"no client selected":(0,t.jsx)(o8,{children:e.templateTypeGroups.map(a=>{let{type:r,typeLabel:s,templates:c}=a,f=c.map(e=>e.id),h=f.filter(e=>{let t;return null!==(t=o.get(e)??null)&&(0,o1.canSelectDocumentInList)(t.displayStatus)}),p=new Set(h),u=o5(f.filter(e=>n.has(e)).length,f.length),x=o5(h.filter(e=>n.has(e)).length,h.length);return(0,t.jsxs)(o7,{children:[(0,t.jsxs)(re,{onClick:()=>{"checked"===x?d([...p]):l([...p])},children:[(0,t.jsx)(o6,{status:u}),"[",s,"]"]}),(0,t.jsx)(rt,{children:c.map(l=>{let{id:a}=l,d=n.has(a),r=o.get(a)??null;return(0,t.jsx)(o3,{template:l,isChecked:d,hasDocument:null!==r,statusChangeToken:e.getDocumentStatusChangeToken(a),toggleSelectedTemplateId:i},a)})})]},r)})})}),o8=l.default.div.withConfig({componentId:"zh__sc-723cdbd7-0"})`
  overflow-y: auto;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 20px;

  width: 100%;
  min-height: 0;
`,o7=l.default.div.withConfig({componentId:"zh__sc-723cdbd7-1"})`
  display: flex;
  flex-direction: column;
  gap: 9px;
  align-items: flex-start;
  align-self: stretch;
`,re=l.default.div.withConfig({componentId:"zh__sc-723cdbd7-2"})`
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
`,rt=l.default.div.withConfig({componentId:"zh__sc-723cdbd7-3"})`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: stretch;
  align-self: stretch;
`,rn=l.default.div.withConfig({componentId:"zh__sc-723cdbd7-4"})`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 188px;
  height: 232px;
  border: 1px solid #d1d5dc;
  border-radius: 8px;

  background: #fff;
`,ri=l.default.div.withConfig({componentId:"zh__sc-723cdbd7-5"})`
  position: absolute;
  top: 8px;
  left: 8px;
`,rl=l.default.div.withConfig({componentId:"zh__sc-723cdbd7-6"})`
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
`,ra=l.default.div.withConfig({componentId:"zh__sc-723cdbd7-7"})`
  overflow: hidden;
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: center;

  height: 140px;
  border-radius: 7px 7px 0 0;

  background: #f3f4f6;
`,rd=l.default.div.withConfig({componentId:"zh__sc-723cdbd7-8"})`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  gap: 2px;
  align-items: center;
  align-self: stretch;
  justify-content: center;

  padding: 8px;
`,ro=l.default.div.withConfig({componentId:"zh__sc-723cdbd7-9"})`
  display: flex;
  gap: 10px;
  align-items: center;
  align-self: stretch;
  justify-content: center;
`,rr=l.default.div.withConfig({componentId:"zh__sc-723cdbd7-10"})`
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
`,rs=l.default.button.withConfig({componentId:"zh__sc-723cdbd7-11"})`
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
`;var rc=e.i(92091);let rf=(0,n.observer)(function(){var e,n;let i=a.default.client.info.byClient.docs,l=i.selectedTemplateIdSet,d=i.documentByTemplateId,o=Array.from(new Set(i.templates.map(e=>e.id))),r=o.filter(e=>{let t=d.get(e)??null;return null!==t&&(0,o1.canSelectDocumentInList)(t.displayStatus)}),s=(e=r.filter(e=>l.has(e)).length,0===(n=r.length)||0===e?"unchecked":e===n?"checked":"indeterminate"),c=o.length>0,f=o.filter(e=>l.has(e)).length;return(0,t.jsxs)(rh,{children:[(0,t.jsxs)(ru,{onClick:()=>{"checked"===s?i.removeSelectedTemplateIds(r):i.addSelectedTemplateIds(r)},children:[(0,t.jsx)(o6,{status:s}),"전체 선택하기"]}),(0,t.jsxs)(rp,{children:[(0,t.jsxs)(rx,{disabled:0===f,onClick:()=>void i.printSelectedTemplates(),children:[(0,t.jsx)(rc.default,{sx:{fontSize:16}}),"선택한 서류 출력하기"]}),(0,t.jsxs)(rx,{disabled:!c,onClick:()=>void i.printAllTemplates(),children:[(0,t.jsx)(rc.default,{sx:{fontSize:16}}),"전체 출력하기"]})]})]})}),rh=l.default.div.withConfig({componentId:"zh__sc-b979553a-0"})`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;
`,rp=l.default.div.withConfig({componentId:"zh__sc-b979553a-1"})`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: flex-end;
`,ru=l.default.button.withConfig({componentId:"zh__sc-b979553a-2"})`
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
`,rx=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-b979553a-3"})`
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
`;function rg(){return(0,t.jsxs)(rm,{children:[(0,t.jsx)(rf,{}),(0,t.jsx)(o9,{})]})}let rm=l.default.div.withConfig({componentId:"zh__sc-5553a9a-0"})`
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
`,rj=(0,n.observer)(function(){let e=a.default.client.info.byClient,[n,l]=(0,i.useState)("basic"),o=e.isClientDetailOpen;return((0,i.useEffect)(()=>{let t=e.selectedClientId,i=a.default.data.guardian.list.query;o&&"basic"===n&&null!==t&&i?.clientId===t&&a.default.data.guardian.list.refetch()},[n,e.selectedClientId,o]),o&&null!==e.selectedClientId)?(0,t.jsx)(d.default,{children:(0,t.jsxs)(rb,{children:[(0,t.jsxs)(r_,{children:[(0,t.jsx)(rw,{children:"이용자 상세보기"}),(0,t.jsxs)(ry,{type:"button",onClick:()=>{e.cancelUserInfoEdit(),e.cancelContractDetailEdit(),e.closeClientDetail(),e.setSelectedClientId(null)},children:[(0,t.jsx)(W.X,{size:16}),"닫기"]})]}),(0,t.jsx)(oC,{}),(0,t.jsxs)(rv,{children:[(0,t.jsx)(rC,{type:"button",$active:"basic"===n,onClick:()=>l("basic"),children:"기본정보"}),(0,t.jsx)(rC,{type:"button",$active:"contract"===n,onClick:()=>l("contract"),children:"계약정보"}),(0,t.jsx)(rC,{type:"button",$active:"docs"===n,onClick:()=>l("docs"),children:"서류관리"})]}),(0,t.jsx)(rI,{children:"basic"===n?(0,t.jsx)(af,{}):"contract"===n?(0,t.jsx)(ou,{}):(0,t.jsx)(rg,{})})]})}):null}),rb=l.default.div.withConfig({componentId:"zh__sc-3cfc0852-0"})`
  position: relative;

  display: flex;
  flex-direction: column;
  flex-shrink: 0;

  width: 1050px;
  height: 90vh;
  border-radius: 8px;

  background: #fff;
`,r_=l.default.div.withConfig({componentId:"zh__sc-3cfc0852-1"})`
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
`,rw=l.default.h2.withConfig({componentId:"zh__sc-3cfc0852-2"})`
  margin: 0;

  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  color: #101828;
  letter-spacing: -0.439px;
`,ry=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-3cfc0852-3"})`
  display: flex;
  gap: 6px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,rv=l.default.div.withConfig({componentId:"zh__sc-3cfc0852-4"})`
  display: flex;
  align-self: flex-start;

  width: 100%;
  height: 56px;
  border-bottom: 1px solid #e5e7eb;

  background: #fff;
`,rC=l.default.button.withConfig({componentId:"zh__sc-3cfc0852-5"})`
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
`,rI=l.default.div.withConfig({componentId:"zh__sc-3cfc0852-6"})`
  display: flex;
  flex: 1;
  min-height: 0;
`,rz=(0,nF.default)((0,t.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"}),"ArrowBack");function rT(){return(rT=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var rE=(0,i.forwardRef)(function(e,t){var n=e.color,l=e.size,a=void 0===l?24:l,d=function(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["color","size"]);return i.default.createElement("svg",rT({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),i.default.createElement("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),i.default.createElement("polyline",{points:"19 12 12 19 5 12"}))});function rS(){return(rS=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}rE.propTypes={color:M.default.string,size:M.default.oneOfType([M.default.string,M.default.number])},rE.displayName="ArrowDown";var rk=(0,i.forwardRef)(function(e,t){var n=e.color,l=e.size,a=void 0===l?24:l,d=function(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["color","size"]);return i.default.createElement("svg",rS({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),i.default.createElement("line",{x1:"12",y1:"19",x2:"12",y2:"5"}),i.default.createElement("polyline",{points:"5 12 12 5 19 12"}))});rk.propTypes={color:M.default.string,size:M.default.oneOfType([M.default.string,M.default.number])},rk.displayName="ArrowUp";var rD=e.i(26546),rA=e.i(71723),rO=e.i(25699);let rL=function({isOpen:e,missingItems:n,isProcessing:i=!1,onClickSecondary:l,onClickPrimary:a}){return e?(0,t.jsx)(r$,{children:(0,t.jsxs)(rR,{children:[(0,t.jsxs)(rP,{children:[(0,t.jsx)(rN,{children:"필수 입력 항목을 확인해주세요."}),(0,t.jsx)(rM,{children:"아래 항목이 입력되지 않았습니다."}),(0,t.jsx)(rF,{children:n.map(e=>(0,t.jsx)("li",{children:e.label},e.key))}),(0,t.jsx)(rM,{children:"입력하지 않고 나갈 시 작성한 내용이 저장되지 않습니다."})]}),(0,t.jsxs)(rU,{children:[(0,t.jsx)(rB,{type:"button",disabled:i,onClick:l,children:"저장하지 않고 나가기"}),(0,t.jsx)(rY,{type:"button",disabled:i,onClick:a,children:"입력 항목 확인하기"})]})]})}):null},r$=l.default.div.withConfig({componentId:"zh__sc-615e692b-0"})`
  position: fixed;
  z-index: 3000;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgb(17 24 39 / 36%);
`,rR=l.default.div.withConfig({componentId:"zh__sc-615e692b-1"})`
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
`,rP=l.default.div.withConfig({componentId:"zh__sc-615e692b-2"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;

  width: 100%;
`,rN=l.default.h3.withConfig({componentId:"zh__sc-615e692b-3"})`
  margin: 0;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px;
  color: #000;
`,rM=l.default.p.withConfig({componentId:"zh__sc-615e692b-4"})`
  margin: 0;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px;
  color: #000;
`,rF=l.default.ul.withConfig({componentId:"zh__sc-615e692b-5"})`
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
`,rU=l.default.div.withConfig({componentId:"zh__sc-615e692b-6"})`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: flex-end;

  width: 100%;
`,rB=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-615e692b-7"})`
  height: 36px;
  padding: 8px 16px;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px;
  color: #4f39f6;
`,rY=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-615e692b-8"})`
  height: 36px;
  padding: 8px 16px;

  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: 20px;
`;var rV=e.i(28124),rW=e.i(43172);let rH=e=>{if("radio"===e.uiProps.fieldType)return`radio:${e.uiProps.groupKey}`;let t=e.uiProps.triggerKeyScopes?.[rV.default.SOURCE_REQUIRED_VALIDATION]?.trim();return void 0===t||""===t?`field:${e.page}:${e.fieldKey}`:`scope:${t}`},rG=function({isOpen:e,actionType:n,isProcessing:i=!1,onClickSecondary:l,onClickPrimary:a}){if(!e)return null;let d="move"===n,o=d?"이동":"닫기";return(0,t.jsx)(rK,{children:(0,t.jsxs)(rX,{children:[(0,t.jsxs)(rq,{children:[(0,t.jsx)(rQ,{children:"수정된 정보가 있습니다."}),(0,t.jsxs)(rZ,{children:["지금 화면을 나가면 수정하신 내용이 저장되지 않습니다.",(0,t.jsx)("br",{}),`[저장하고 ${o}]${d?"을":"를"} 누르면 정보가 안전하게 저장됩니다.`]})]}),(0,t.jsxs)(rJ,{children:[(0,t.jsx)(r0,{type:"button",disabled:i,onClick:l,children:`저장없이 ${d?"이동":"나가기"}`}),(0,t.jsx)(r1,{type:"button",disabled:i,onClick:a,children:`저장하고 ${o}`})]})]})})},rK=l.default.div.withConfig({componentId:"zh__sc-22c1af4d-0"})`
  position: fixed;
  z-index: 3000;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgb(17 24 39 / 36%);
`,rX=l.default.div.withConfig({componentId:"zh__sc-22c1af4d-1"})`
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
`,rq=l.default.div.withConfig({componentId:"zh__sc-22c1af4d-2"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;

  width: 100%;
`,rQ=l.default.h3.withConfig({componentId:"zh__sc-22c1af4d-3"})`
  margin: 0;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px;
  color: #000;
`,rZ=l.default.p.withConfig({componentId:"zh__sc-22c1af4d-4"})`
  margin: 0;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px;
  color: #000;
`,rJ=l.default.div.withConfig({componentId:"zh__sc-22c1af4d-5"})`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: flex-end;

  width: 100%;
`,r0=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-22c1af4d-6"})`
  height: 36px;
  padding: 8px 16px;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px;
  color: #4f39f6;
`,r1=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-22c1af4d-7"})`
  height: 36px;
  padding: 8px 16px;

  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: 20px;
`,r2=l.default.div.withConfig({componentId:"zh__sc-67d06bce-0"})`
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
`,r6=l.default.div.withConfig({componentId:"zh__sc-67d06bce-1"})`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;

  padding: 16px;
`,r4=l.css`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;

  width: 56px;
  height: 36px;
  padding: 8px;
`,r5=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-67d06bce-2"})`
  ${r4}
`,r3=l.default.div.withConfig({componentId:"zh__sc-67d06bce-3"})`
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
  text-align: center;
`,r9=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-67d06bce-4"})`
  ${r4}
`,r8=l.default.div.withConfig({componentId:"zh__sc-67d06bce-5"})`
  align-self: stretch;
  height: 1px;
  background: #e5e7eb;
`,r7=l.default.div.withConfig({componentId:"zh__sc-67d06bce-6"})`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
`,se=[{key:"state1",index:"01",label:"청구 사유를 선택해주세요.",options:["option1","option2","option3","option4","option5","option6","option7"],optionLabels:{option1:"카드 미소지",option2:"카드 분실",option3:"카드 파손",option4:"시스템 오류",option5:"단말기 오류",option6:"사망",option7:"수술"}},{key:"state2",index:"02",label:"처리 현황을 선택해주세요.",options:["option1","option2"],optionLabels:{option1:"계약 종결",option2:"서비스 종료"}}],st={state1:null,state2:null},sn={option1:"대상자 바우처 카드 미소지로 인하여 소급결제 진행하려 하였으나",option2:"대상자 바우처 카드 분실로 인하여 소급결제 진행하려 하였으나",option3:"대상자 바우처 카드 파손으로 인하여 소급결제 진행하려 하였으나",option4:"결제 시스템 오류로 인하여 소급결제 진행하려 하였으나",option5:"단말기 오류로 인하여 소급결제 진행하려 하였으나",option6:"대상자 사망으로 인하여 소급결제 진행하려 하였으나",option7:"대상자 수술로 인하여 소급결제 진행하려 하였으나"},si={option1:"일상돌봄 식사영양서비스 계약종결됨에 따라 지원금이 소멸하여",option2:"일상돌봄 식사영양서비스 종료됨에 따라 지원금이 소멸하여"},sl=(e,t)=>e[t]??"",sa=(e,t,n)=>Math.min(n,Math.max(t,e)),sd=["boxSizing","fontFamily","fontSize","fontWeight","fontStyle","lineHeight","letterSpacing","textTransform","textIndent","textDecoration","wordSpacing","tabSize","paddingTop","paddingRight","paddingBottom","paddingLeft"],so=(e,t,n,i=.08)=>{let l=sa(n,0,t.length),a=document.createElement("div"),d=document.createElement("span"),o=window.getComputedStyle(e);a.style.position="absolute",a.style.left="-99999px",a.style.top="0",a.style.visibility="hidden",a.style.pointerEvents="none",a.style.width=`${e.clientWidth}px`,a.style.whiteSpace="pre-wrap",a.style.overflowWrap="break-word",a.style.wordBreak="break-word",sd.forEach(e=>{a.style[e]=o[e]}),a.textContent=t.slice(0,l),d.textContent="​",a.appendChild(d),document.body.appendChild(a);let r=d.offsetTop;a.remove();let s=Math.max(e.scrollHeight-e.clientHeight,0);return sa(r-e.clientHeight*i,0,s)},sr=l.keyframes`
	from {
		transform: translateX(100%);
		opacity: 0;
	}

	to {
		transform: translateX(0);
		opacity: 1;
	}
`,ss=(0,l.default)(r2).withConfig({componentId:"zh__sc-1f96f242-0"})`
  will-change: transform, opacity;
  animation: ${sr} 0.28s cubic-bezier(0.32, 0.72, 0, 1) forwards;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,sc=l.default.div.withConfig({componentId:"zh__sc-1f96f242-1"})`
  width: 36px;
  height: 36px;
`,sf=l.default.div.withConfig({componentId:"zh__sc-1f96f242-2"})`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 24px;

  width: 100%;
  padding: 16px;
`,sh=l.default.div.withConfig({componentId:"zh__sc-1f96f242-3"})`
  display: flex;
  gap: 4px;
  align-items: flex-start;
  align-self: stretch;

  padding: 12px;
  border: 1px solid #e5e7eb;
  border-radius: 6px;

  background: #f5f8ff;
`,sp=l.default.div.withConfig({componentId:"zh__sc-1f96f242-4"})`
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
`,su=l.default.div.withConfig({componentId:"zh__sc-1f96f242-5"})`
  display: flex;
  flex-direction: column;
  gap: 24px;

  width: 100%;
  padding: 0;
`,sx=l.default.div.withConfig({componentId:"zh__sc-1f96f242-6"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;
`,sg=l.default.div.withConfig({componentId:"zh__sc-1f96f242-7"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;
`,sm=l.default.div.withConfig({componentId:"zh__sc-1f96f242-8"})`
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
`,sj=l.default.div.withConfig({componentId:"zh__sc-1f96f242-9"})`
  font-size: 14px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
`,sb=l.default.div.withConfig({componentId:"zh__sc-1f96f242-10"})`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,s_=l.default.button.withConfig({componentId:"zh__sc-1f96f242-11"})`
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
`,sw=l.default.div.withConfig({componentId:"zh__sc-1f96f242-12"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;
`,sy=l.default.div.withConfig({componentId:"zh__sc-1f96f242-13"})`
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
`,sv=(0,l.default)(o.default.Input.Textarea).withConfig({componentId:"zh__sc-1f96f242-14"})`
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
`,sC=l.default.div.withConfig({componentId:"zh__sc-1f96f242-15"})`
  display: flex;
  gap: 10px;
  align-items: center;
  align-self: stretch;
`,sI=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-1f96f242-16"})`
  display: flex;
  gap: 4px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,sz=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-1f96f242-17"})`
  display: flex;
  flex: 1 0 0;
  gap: 4px;
  align-items: center;
  justify-content: center;

  height: 36px;
  padding: 8px 16px;
`;var sT=e.i(8582);let sE=l.keyframes`
	from {
		transform: translateX(100%);
		opacity: 0;
	}

	to {
		transform: translateX(0);
		opacity: 1;
	}
`,sS=(0,l.default)(r2).withConfig({componentId:"zh__sc-c3e70251-0"})`
  will-change: transform, opacity;
  width: 634px;
  animation: ${sE} 0.28s cubic-bezier(0.32, 0.72, 0, 1) forwards;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,sk=l.default.div.withConfig({componentId:"zh__sc-c3e70251-1"})`
  width: 36px;
  height: 36px;
`,sD=(0,l.default)(r9).withConfig({componentId:"zh__sc-c3e70251-2"})`
  width: 56px;
  height: 36px;
  border: 1px solid #4f39f6;
  border-radius: 4px;

  color: #4f39f6;
`,sA=(0,l.default)(r7).withConfig({componentId:"zh__sc-c3e70251-3"})`
  min-height: 0;
`,sO=l.default.div.withConfig({componentId:"zh__sc-c3e70251-4"})`
  overflow: hidden;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 24px;

  width: 100%;
  min-height: 0;
  padding: 16px;
`,sL=l.default.div.withConfig({componentId:"zh__sc-c3e70251-5"})`
  display: flex;
  gap: 4px;
  align-items: flex-start;
  align-self: stretch;
`,s$=l.default.div.withConfig({componentId:"zh__sc-c3e70251-6"})`
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
`,sR=l.default.div.withConfig({componentId:"zh__sc-c3e70251-7"})`
  overflow: hidden;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;

  min-height: 0;
`,sP=l.default.div.withConfig({componentId:"zh__sc-c3e70251-8"})`
  overflow-y: auto;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;

  min-height: 0;
`,sN=l.default.div.withConfig({componentId:"zh__sc-c3e70251-9"})`
  display: flex;
  flex-direction: column;
  gap: 24px;

  width: 100%;
  padding: 16px;
  border: 1px solid #e5e7eb;
  border-radius: 6px;

  background: #f5f8ff;
`,sM=l.default.div.withConfig({componentId:"zh__sc-c3e70251-10"})`
  display: flex;
  gap: 8px;
  align-items: center;
  width: 100%;
`,sF=(0,l.default)(o.default.Input.Text).withConfig({componentId:"zh__sc-c3e70251-11"})`
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
`,sU=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-c3e70251-12"})`
  height: 36px;
  padding: 8px 16px;
  border-radius: 4px;

  font-size: 16px;
  font-weight: 500;
`,sB=l.default.div.withConfig({componentId:"zh__sc-c3e70251-13"})`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,sY=l.default.button.withConfig({componentId:"zh__sc-c3e70251-14"})`
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
`,sV=l.default.div.withConfig({componentId:"zh__sc-c3e70251-15"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;
`,sW=l.default.div.withConfig({componentId:"zh__sc-c3e70251-16"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;
`,sH=l.default.div.withConfig({componentId:"zh__sc-c3e70251-17"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;
`,sG=l.default.div.withConfig({componentId:"zh__sc-c3e70251-18"})`
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
`,sK=l.default.div.withConfig({componentId:"zh__sc-c3e70251-19"})`
  font-size: 14px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
`,sX=l.default.div.withConfig({componentId:"zh__sc-c3e70251-20"})`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,sq=l.default.button.withConfig({componentId:"zh__sc-c3e70251-21"})`
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
`,sQ=l.default.div.withConfig({componentId:"zh__sc-c3e70251-22"})`
  display: flex;
  flex: 0 0 auto;
  align-items: flex-end;
  justify-content: flex-end;

  width: 100%;
`,sZ=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-c3e70251-23"})`
  height: 36px;
  padding: 8px 16px;
  border-radius: 4px;

  font-size: 16px;
  font-weight: 500;
`,sJ=l.default.div.withConfig({componentId:"zh__sc-c3e70251-24"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;
`,s0=l.default.div.withConfig({componentId:"zh__sc-c3e70251-25"})`
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
`,s1=(0,l.default)(o.default.Input.Textarea).withConfig({componentId:"zh__sc-c3e70251-26"})`
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
`,s2=l.default.div.withConfig({componentId:"zh__sc-c3e70251-27"})`
  display: flex;
  gap: 10px;
  align-items: center;
  align-self: stretch;
`,s6=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-c3e70251-28"})`
  display: flex;
  gap: 4px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;

  font-size: 16px;
  font-weight: 400;
`,s4=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-c3e70251-29"})`
  display: flex;
  flex: 1 0 0;
  gap: 4px;
  align-items: center;
  justify-content: center;

  height: 36px;
  padding: 8px 16px;

  font-size: 16px;
  font-weight: 400;
`,s5=[{key:"state1",index:"01",label:"영양 상태 — 이용자의 영양 변화 정도를 선택해주세요.",sentences:{positive:"☐ 영양 상태: 정기적이고 꾸준한 영양식 식사 제공 및 방문 관리를 밀착 모니터링한 결과, 영양 체크리스트 점수가 서비스 참여 전 대비 크게 향상되었으며 안색과 전반적인 신체 기력 상태가 매우 양호하게 개선되었습니다.",neutral:"☐ 영양 상태: 현재 제공받고 있는 모든 건강 식단에 비교적 안정적이고 매우 높은 순응도를 보이고 있으며, 저체중이나 기타 체중 감소 등의 기왕 병력 이전의 안정적인 건강 수치를 계속해서 유지하고 있습니다.",negative:"☐ 영양 상태: 최근 들어 식사 흡수 기능 저하를 자주 호소하시며 일일 섭취하는 식사량이 전보다 감소하셨음이 확인되었습니다. 식사 조절과 아울러 이에 대한 의료적 치료 등 병원의 조기 개입이 필요합니다."}},{key:"state2",index:"02",label:"식욕 상태 — 이용자의 식욕 변화 정도를 선택해주세요.",sentences:{positive:"☐ 식욕 상태: 식사 시간에 맞춰 스스로 음식을 찾으실 정도로 식욕이 크게 왕성해지셨으며, 제공되는 반찬과 밥을 남김없이 골고루 섭취하시어 전반적인 음식 섭취 순응도가 매우 높게 나타납니다.",neutral:"☐ 식욕 상태: 식사량이나 음식을 대하는 태도에 특별한 저하나 항진 없이 평소 수준을 그대로 유지하고 계십니다. 거부감 없이 매 끼니 적정량의 식사를 무난하게 마치시는 상태입니다.",negative:"☐ 식욕 상태: 일시적인 재원 변화나 체력 감소 등으로 극심한 우울감과 음식 거부 반응이 가끔 관찰되며, 이로 인해 신체 면역력 결핍 우려가 또한 생김에 따라 돌봄 과정이나 수행 다음 심리 유형을 수정할 필요가 있습니다."}},{key:"state3",index:"03",label:"상담·정서 상태 — 이용자의 심리·정서 변화 정도를 선택해주세요.",sentences:{positive:"☐ 상담·정서 상태: 정기적인 맞춤 상담 시나리오를 통해 정밀 분석 기법을 지속적으로 러닝한 결과, 기분이 좋고 전보다 웃음 가득한, 유쾌하고 우울감 없는 일상을 마주하고 계실뿐더러 감정이 정돈된 가장 이상적인 심리적 안정을 변함없이 나타내십니다.",neutral:"☐ 상담·정서 상태: 시기적(계절별/월별) 환경 변화 기능을 통하거나 매일매일 발생 및 부여되는 질문과 과제들에 대해 감정의 변화가 미미하며, 사회복지사 등 면담 평정 가이드라인에서 무난하고 일률적인 심리 현황을 보여주고 계십니다.",negative:"☐ 상담·정서 상태: 가끔 위축적 성향을 활발히 높은 빈도로, 신경 감정적 상태가 일어났으며 스스로 감정을 제어하는 등의 부여가 부족합니다. 정기적 상담을 연계하여 가장 신속히 지도가 반복적으로 이루어져야 할 필요성이 있습니다."}}],s3={state1:null,state2:null,state3:null},s9={positive:"긍정 변화 / 개선됨",neutral:"변화 없음 / 유지됨",negative:"부정적 변화 / 결과 요망"},s8=["positive","neutral","negative"],s7=(e,t,n)=>Math.min(n,Math.max(t,e)),ce=["boxSizing","fontFamily","fontSize","fontWeight","fontStyle","lineHeight","letterSpacing","textTransform","textIndent","textDecoration","wordSpacing","tabSize","paddingTop","paddingRight","paddingBottom","paddingLeft"],ct=(e,t,n,i=.08)=>{let l=s7(n,0,t.length),a=document.createElement("div"),d=document.createElement("span"),o=window.getComputedStyle(e);a.style.position="absolute",a.style.left="-99999px",a.style.top="0",a.style.visibility="hidden",a.style.pointerEvents="none",a.style.width=`${e.clientWidth}px`,a.style.whiteSpace="pre-wrap",a.style.overflowWrap="break-word",a.style.wordBreak="break-word",ce.forEach(e=>{a.style[e]=o[e]}),a.textContent=t.slice(0,l),d.textContent="​",a.appendChild(d),document.body.appendChild(a);let r=d.offsetTop;a.remove();let s=Math.max(e.scrollHeight-e.clientHeight,0);return s7(r-e.clientHeight*i,0,s)},cn=l.keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }

  to {
    transform: translateX(0);
    opacity: 1;
  }
`,ci=(0,l.default)(r2).withConfig({componentId:"zh__sc-42312189-0"})`
  will-change: transform, opacity;
  animation: ${cn} 0.28s cubic-bezier(0.32, 0.72, 0, 1) forwards;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,cl=l.default.div.withConfig({componentId:"zh__sc-42312189-1"})`
  width: 36px;
  height: 36px;
`,ca=l.default.div.withConfig({componentId:"zh__sc-42312189-2"})`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 24px;

  width: 100%;
  padding: 16px;
`,cd=l.default.div.withConfig({componentId:"zh__sc-42312189-3"})`
  display: flex;
  gap: 4px;
  align-items: flex-start;
  align-self: stretch;

  padding: 12px;
  border: 1px solid #e5e7eb;
  border-radius: 6px;

  background: #f5f8ff;
`,co=l.default.div.withConfig({componentId:"zh__sc-42312189-4"})`
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
`,cr=l.default.div.withConfig({componentId:"zh__sc-42312189-5"})`
  display: flex;
  flex-direction: column;
  gap: 24px;

  width: 100%;
  padding: 0;
`,cs=l.default.div.withConfig({componentId:"zh__sc-42312189-6"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;
`,cc=l.default.div.withConfig({componentId:"zh__sc-42312189-7"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;
`,cf=l.default.div.withConfig({componentId:"zh__sc-42312189-8"})`
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
`,ch=l.default.div.withConfig({componentId:"zh__sc-42312189-9"})`
  font-size: 14px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
`,cp=l.default.div.withConfig({componentId:"zh__sc-42312189-10"})`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,cu=l.default.button.withConfig({componentId:"zh__sc-42312189-11"})`
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
`,cx=l.default.div.withConfig({componentId:"zh__sc-42312189-12"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;
`,cg=l.default.div.withConfig({componentId:"zh__sc-42312189-13"})`
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
`,cm=(0,l.default)(o.default.Input.Textarea).withConfig({componentId:"zh__sc-42312189-14"})`
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
`,cj=l.default.div.withConfig({componentId:"zh__sc-42312189-15"})`
  display: flex;
  gap: 10px;
  align-items: center;
  align-self: stretch;
`,cb=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-42312189-16"})`
  display: flex;
  gap: 4px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,c_=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-42312189-17"})`
  display: flex;
  flex: 1 0 0;
  gap: 4px;
  align-items: center;
  justify-content: center;

  height: 36px;
  padding: 8px 16px;
`;function cw(){return(cw=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var cy=(0,i.forwardRef)(function(e,t){var n=e.color,l=e.size,a=void 0===l?24:l,d=function(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["color","size"]);return i.default.createElement("svg",cw({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),i.default.createElement("line",{x1:"19",y1:"12",x2:"5",y2:"12"}),i.default.createElement("polyline",{points:"12 19 5 12 12 5"}))});cy.propTypes={color:M.default.string,size:M.default.oneOfType([M.default.string,M.default.number])},cy.displayName="ArrowLeft",(0,n.observer)(function({goBack:e,close:n,showToast:l}){let a=async e=>!1,[d,o]=(0,i.useState)({name:"",relation:"",phone:"",address:""}),[r,s]=(0,i.useState)({name:"",relation:"",phone:"",address:""}),c=(e,t)=>{o(n=>({...n,[e]:t})),s(t=>({...t,[e]:""}))},f=async()=>{let e=!0;""===d.name.trim()&&(s(e=>({...e,name:"필수 입력값입니다."})),e=!1),""===d.relation.trim()&&(s(e=>({...e,relation:"필수 입력값입니다."})),e=!1),""===d.phone.trim()&&(s(e=>({...e,phone:"필수 입력값입니다."})),e=!1),e&&await a({name:d.name,relation:d.relation,phone:d.phone,address:d.address})};return(0,t.jsxs)(r2,{children:[(0,t.jsxs)(r6,{children:[(0,t.jsx)(r5,{onClick:e,children:(0,t.jsx)(cy,{size:16})}),(0,t.jsx)(r3,{children:"신규 보호자 추가"}),(0,t.jsx)(r9,{onClick:n,children:(0,t.jsx)(W.X,{size:16})})]}),(0,t.jsx)(r8,{}),(0,t.jsx)(r7,{children:(0,t.jsx)(cv,{children:(0,t.jsxs)(cC,{children:[(0,t.jsxs)(cI,{children:[(0,t.jsxs)(cz,{children:[(0,t.jsx)(cT,{children:"성명"}),(0,t.jsx)(cE,{type:"text",placeholder:"보호자 성명을 입력하세요.",value:d.name,onChange:e=>c("name",e.target.value),$error:""!==r.name}),(0,t.jsx)(ck,{$show:""!==r.name,children:r.name})]}),(0,t.jsxs)(cz,{children:[(0,t.jsx)(cT,{children:"이용자와의 관계"}),(0,t.jsx)(cE,{type:"text",placeholder:"예: 자녀(딸), 자녀(아들), 자녀(며느리)",value:d.relation,onChange:e=>c("relation",e.target.value),$error:""!==r.relation}),(0,t.jsx)(ck,{$show:""!==r.relation,children:r.relation})]}),(0,t.jsxs)(cz,{children:[(0,t.jsx)(cT,{children:"휴대폰"}),(0,t.jsx)(cE,{type:"tel",placeholder:"휴대폰을 입력해주세요.",value:d.phone,onChange:e=>c("phone",e.target.value),$error:""!==r.phone}),(0,t.jsx)(ck,{$show:""!==r.phone,children:r.phone})]}),(0,t.jsxs)(cz,{children:[(0,t.jsx)(cT,{children:"주소"}),(0,t.jsx)(cS,{placeholder:"보호자 주소를 입력하세요.",value:d.address,onChange:e=>c("address",e.target.value),$error:""!==r.address,rows:2}),(0,t.jsx)(ck,{$show:""!==r.address,children:r.address})]})]}),(0,t.jsxs)(cD,{onClick:()=>void f(),children:[(0,t.jsx)(j.Check,{size:20}),"추가 후 계약서에 반영하기"]})]})})})]})});let cv=l.default.div.withConfig({componentId:"zh__sc-f12494e7-0"})`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  align-self: stretch;

  padding: 16px;
`,cC=l.default.div.withConfig({componentId:"zh__sc-f12494e7-1"})`
  display: flex;
  flex-direction: column;
  gap: 16px;

  width: 100%;
  padding: 16px;
  border: 1px solid #e5e9ef;
  border-radius: 8px;

  background: #fff;
`,cI=l.default.div.withConfig({componentId:"zh__sc-f12494e7-2"})`
  display: flex;
  flex-direction: column;
`,cz=l.default.div.withConfig({componentId:"zh__sc-f12494e7-3"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`,cT=l.default.label.withConfig({componentId:"zh__sc-f12494e7-4"})`
  font-size: 16px;
  font-weight: 500;
  color: #000;
`,cE=l.default.input.withConfig({componentId:"zh__sc-f12494e7-5"})`
  padding: 8px 16px;
  border: 1px solid #e5e9ef;
  border-radius: 4px;
  font-size: 16px;

  &::placeholder {
    color: #9ca3af;
  }

  &:focus {
    border-color: ${el.default.style.color.PRIMARY[100]};
    outline: none;
  }

  ${({$error:e})=>!0===e&&l.css`
      border: 1px solid #ef4444;
    `}
`,cS=l.default.textarea.withConfig({componentId:"zh__sc-f12494e7-6"})`
  resize: none;

  padding: 8px 16px;
  border: 1px solid #e5e9ef;
  border-radius: 4px;

  font-size: 16px;

  &::placeholder {
    color: #9ca3af;
  }

  &:focus {
    border-color: ${el.default.style.color.PRIMARY[100]};
    outline: none;
  }

  ${({$error:e})=>!0===e&&l.css`
      border: 1px solid #ef4444;
    `}
`,ck=l.default.div.withConfig({componentId:"zh__sc-f12494e7-7"})`
  display: flex;

  height: 24px;

  font-size: 14px;
  font-weight: 400;
  font-style: normal;
  line-height: 18px; /* 128.571% */
  color: #ef4444;

  visibility: ${({$show:e})=>!0===e?"visible":"hidden"};
`,cD=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-f12494e7-8"})`
  display: flex;
  gap: 4px;
  align-items: center;
  align-self: stretch;
  justify-content: center;

  padding: 8px;
`,{PRIMARY:cA}=((0,n.observer)(function({close:e,showToast:n}){let l=[],a=(void 0)??null,d=(0,i.useMemo)(()=>{let e=l??[];if(null===a)return e;let t=e.find(e=>e.uuid===a);return t?[t,...e.filter(e=>e.uuid!==a)]:e},[l,a]);return(0,t.jsx)(cO,{children:d.map(i=>(0,t.jsxs)(cL,{onClick:()=>{i.uuid,n(),e()},$selected:void 0===i.uuid,children:[(0,t.jsxs)(c$,{children:[(0,t.jsxs)(cR,{children:[(0,t.jsx)(cP,{children:`${i.name.family} ${i.name.given}`}),(0,t.jsx)(cN,{children:i.relation})]}),(0,t.jsxs)(cM,{children:[(0,t.jsxs)(cF,{children:[(0,t.jsx)(cU,{children:"휴대폰"}),(0,t.jsx)(cB,{}),(0,t.jsx)(cU,{children:i.phone.mobile??"-"})]}),(0,t.jsxs)(cF,{children:[(0,t.jsx)(cU,{children:"주소"}),(0,t.jsx)(cB,{}),(0,t.jsx)(cU,{children:i.address})]})]})]}),(0,t.jsx)(cY,{children:void 0===i.uuid?(0,t.jsx)(cW,{children:"지금 선택됨"}):(0,t.jsxs)(cV,{children:["선택",(0,t.jsx)(U,{size:16})]})})]},i.uuid))})}),el.default.style.color),cO=l.default.div.withConfig({componentId:"zh__sc-3bbaa2f0-0"})`
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;

  height: 729px;
  padding: 16px;

  background: #f9fafb;
`,cL=l.default.div.withConfig({componentId:"zh__sc-3bbaa2f0-1"})`
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
`,c$=l.default.div.withConfig({componentId:"zh__sc-3bbaa2f0-2"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;
`,cR=l.default.div.withConfig({componentId:"zh__sc-3bbaa2f0-3"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;
`,cP=l.default.div.withConfig({componentId:"zh__sc-3bbaa2f0-4"})`
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
`,cN=l.default.div.withConfig({componentId:"zh__sc-3bbaa2f0-5"})`
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
`,cM=l.default.div.withConfig({componentId:"zh__sc-3bbaa2f0-6"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
  align-self: stretch;
`,cF=l.default.div.withConfig({componentId:"zh__sc-3bbaa2f0-7"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;
`,cU=l.default.div.withConfig({componentId:"zh__sc-3bbaa2f0-8"})`
  min-width: 50px;

  font-size: 14px;
  font-weight: 400;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
  text-align: left;
`,cB=l.default.div.withConfig({componentId:"zh__sc-3bbaa2f0-9"})`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;

  width: 1px;
  height: 20px;

  background: #e5e7eb;
`,cY=l.default.div.withConfig({componentId:"zh__sc-3bbaa2f0-10"})`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-end;
  align-self: stretch;
  justify-content: center;
`,cV=l.default.button.withConfig({componentId:"zh__sc-3bbaa2f0-11"})`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;

  padding: 8px;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 16px; /* 100% */
  color: ${cA[100]};
  letter-spacing: -1px;
`,cW=(0,l.default)(cV).withConfig({componentId:"zh__sc-3bbaa2f0-12"})`
  border-radius: 99px;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 16px; /* 100% */
  color: #fff;
  letter-spacing: -1px;

  background: #4f39f6;
`;var cH=e.i(5543);(0,n.observer)(function({setSelectedDrawerKey:e}){return(0,t.jsxs)(cK,{children:[(0,t.jsxs)(cX,{children:[(0,t.jsx)(H.default.Search,{size:17,color:"#9CA3AF"}),(0,t.jsx)(cq,{placeholder:"보호자 이름을 검색하세요.",value:"",onChange:e=>{e.target.value}})]}),(0,t.jsxs)(cQ,{onClick:()=>e?.("add"),children:[(0,t.jsx)(cH.Plus,{size:18}),"신규 대리인(보호자) 추가하기"]})]})});let{PRIMARY:cG}=el.default.style.color,cK=l.default.div.withConfig({componentId:"zh__sc-612601c-0"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  align-self: stretch;

  padding: 16px;
`,cX=l.default.div.withConfig({componentId:"zh__sc-612601c-1"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;

  height: 36px;
  padding: 8px 16px;
  border: 1px solid ${cG[100]};
  border-radius: 4px;

  background: #fff;
`,cq=l.default.input.withConfig({componentId:"zh__sc-612601c-2"})`
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
`,cQ=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-612601c-3"})`
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
`,cZ=function({value:e,onChange:n,onApply:l,onClose:a}){let[d,o]=(0,i.useState)(()=>{let t,n;return t=e.replace(/\s+/g," ").trim(),n={...st},se.forEach(e=>{let i=e.options.find(n=>{let i=sl(e.optionLabels,n),l="state1"===e.key?sn[n]:si[n]??"";return""!==i&&t.includes(i)||""!==l&&t.includes(l)});n[e.key]=i??null}),n}),{ref:r,fire:s}=ez(),c=(0,i.useRef)(!1),f=(0,i.useRef)(0),h=(0,i.useRef)(null);(0,i.useEffect)(()=>{if(!c.current)return;let t=r.current;if(null!==t)if(null!==h.current){let e=Math.max(t.scrollHeight-t.clientHeight,0);t.scrollTop=sa(h.current,0,e),h.current=null}else t.scrollTop=so(t,e,f.current);c.current=!1},[r,e]);let p=""!==e.trim(),u=Object.values(d).filter(e=>null!==e).length,x=u===se.length;return(0,t.jsxs)(ss,{children:[(0,t.jsxs)(r6,{children:[(0,t.jsx)(sc,{}),(0,t.jsx)(r3,{children:"자동으로 문장 생성하기"}),(0,t.jsx)(r9,{onClick:a,children:(0,t.jsx)(W.X,{size:16})})]}),(0,t.jsx)(r8,{}),(0,t.jsx)(r7,{children:(0,t.jsxs)(sf,{children:[(0,t.jsxs)(sh,{children:[(0,t.jsx)(te.default,{sx:{fontSize:16}}),(0,t.jsx)(sp,{children:"각 카테고리와 세부 항목을 선택하면, 내용에 맞는 문장이 하단에 자동으로 생성됩니다."})]}),(0,t.jsx)(su,{children:se.map(i=>{let l=d[i.key];return(0,t.jsxs)(sx,{children:[(0,t.jsxs)(sg,{children:[(0,t.jsx)(sm,{children:i.index}),(0,t.jsx)(sj,{children:i.label})]}),(0,t.jsx)(sb,{children:i.options.map(a=>(0,t.jsxs)(s_,{type:"button",$selected:l===a,onClick:()=>((t,i)=>{let l=d[t];if(l===i){let n=r.current,i="state1"===t?sn[l]:si[l]??"",a=""===i?-1:e.indexOf(i);null!==n&&a>=0&&(h.current=so(n,e,a,.5))}else h.current=null;let a={...d,[t]:l===i?null:i};o(a);let p=(e=>{let t=e.state1,n=e.state2;if(null===t||null===n)return"";let i=sn[t],l=si[n]??"";return""===i.trim()||""===l.trim()?"":`○ 대상자의 식사영양관리 서비스 비용 청구 기간 중 ${i} ${l} 이에 따라 예외지급을 청구합니다.`.trim()})(a);""!==p.trim()&&s(),f.current=((e,t,n)=>{if(""===n.trim())return 0;let i=t[e];if(null===i)return 0;let l="state1"===e?sn[i]:si[i]??"",a=""===l?-1:n.indexOf(l);return a>=0?a:0})(t,a,p),c.current=!0,n(p)})(i.key,a),children:[sl(i.optionLabels,a),l===a&&(0,t.jsx)(lO.default,{sx:{fontSize:16}})]},`${i.key}-${a}`))})]},i.key)})}),(0,t.jsx)(r8,{style:{marginTop:"auto"}}),(0,t.jsxs)(sw,{children:[(0,t.jsxs)(sy,{children:[(0,t.jsx)(H.default.AI,{size:16,color:"#4f39f6"}),"자동 생성 문장"]}),(0,t.jsx)(sv,{ref:r,value:e,placeholder:"카테고리/키워드와 세부 상태를 선택하면 문서에 사용할 문장이 자동으로 생성됩니다.",readOnly:!0})]}),(0,t.jsxs)(sC,{children:[(0,t.jsx)(sI,{type:"button",onClick:()=>{o({...st}),n("")},disabled:!p,children:"다시 생성하기"}),(0,t.jsxs)(sz,{type:"button",onClick:l,disabled:!(0===u||x),children:[(0,t.jsx)(lO.default,{sx:{fontSize:16}}),"보고서에 반영하기"]})]})]})})]})},cJ=function({value:e,autoFilledReferenceValue:n,keywords:l,isKeywordListLoading:a,isKeywordCreating:d,isGenerating:o,onAddKeyword:r,onGenerate:s,onChange:c,onApply:f,onClose:h}){let{ref:p,fire:u}=ez(),[x,g]=(0,i.useState)(""),[m,j]=(0,i.useState)([]),[b,_]=(0,i.useState)({}),w=["POSITIVE","NEUTRAL","NEGATIVE"],y=m.filter(e=>l.includes(e)),v=""!==e.trim(),C=x.trim(),I=""!==C&&!1===d&&!1===a,z=y.every(e=>void 0!==b[e]),T=!1===a&&!1===o&&y.length>0&&z,E=""!==e&&e===n,S=async()=>{I&&(await r(C),g(""))},k=async()=>{if(!T)return;let e=y.reduce((e,t)=>{let n=b[t];return void 0===n||e.push({keyword:t,detailStatus:n}),e},[]),t=await s({selectedKeywordDetailStatuses:e});null!==t&&(""!==t.trim()&&u(),c(t))};return(0,t.jsxs)(sS,{children:[(0,t.jsxs)(r6,{children:[(0,t.jsx)(sk,{}),(0,t.jsx)(r3,{children:"자동으로 문장 생성하기"}),(0,t.jsx)(sD,{onClick:h,children:(0,t.jsx)(W.X,{size:16})})]}),(0,t.jsx)(r8,{}),(0,t.jsx)(sA,{children:(0,t.jsxs)(sO,{children:[(0,t.jsxs)(sR,{children:[(0,t.jsxs)(sP,{children:[(0,t.jsxs)(sL,{children:[(0,t.jsx)(te.default,{sx:{fontSize:16}}),(0,t.jsx)(s$,{children:"각 키워드와 변화 정도를 선택한 후, [문장 생성하기] 버튼을 클릭해주세요. 키워드와 내용에 맞는 문장이 하단에 자동으로 생성됩니다."})]}),(0,t.jsxs)(sN,{children:[(0,t.jsxs)(sM,{children:[(0,t.jsx)(sF,{value:x,placeholder:"추가할 키워드를 입력해주세요. (예: 복지관 연계)",onChange:e=>{g(e.target.value)},onKeyDown:e=>{"Enter"===e.key&&(e.preventDefault(),S())}}),(0,t.jsx)(sU,{type:"button",disabled:!I,onClick:()=>{S()},children:"새 키워드 추가"})]}),(0,t.jsx)(sB,{children:l.map(e=>(0,t.jsx)(sY,{type:"button",$selected:y.includes(e),onClick:()=>{j(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e]),_(t=>{if(!1===m.includes(e))return t;let n={...t};return delete n[e],n})},children:e},e))})]}),y.length>0?(0,t.jsx)(sV,{children:y.map((e,n)=>(0,t.jsxs)(sW,{children:[(0,t.jsxs)(sH,{children:[(0,t.jsx)(sG,{children:String(n+1).padStart(2,"0")}),(0,t.jsxs)(sK,{children:["[",e,"]에 대한 세부 상태를 선택해주세요."]})]}),(0,t.jsx)(sX,{children:w.map(n=>(0,t.jsx)(sq,{type:"button",$selected:b[e]===n,onClick:()=>{_(t=>({...t,[e]:n}))},children:sT.default[n].label},`${e}:${n}`))})]},e))}):null]}),(0,t.jsx)(sQ,{children:(0,t.jsx)(sZ,{type:"button",disabled:!T,onClick:()=>{k()},children:"문장 생성하기"})})]}),(0,t.jsx)(r8,{style:{marginTop:"auto"}}),(0,t.jsxs)(sJ,{children:[(0,t.jsxs)(s0,{children:[(0,t.jsx)(H.default.AI,{size:16,color:"#4f39f6"}),"자동 생성 문장"]}),(0,t.jsx)(s1,{$isAutoFilled:E,ref:p,value:e,placeholder:"카테고리/키워드와 세부 상태를 선택하면 문서에 사용할 문장이 자동으로 생성됩니다.",onChange:e=>{c(e.target.value)}})]}),(0,t.jsxs)(s2,{children:[(0,t.jsx)(s6,{type:"button",onClick:()=>{c(""),j([]),_({})},disabled:!v,children:"다시 생성하기"}),(0,t.jsxs)(s4,{type:"button",onClick:()=>{f()},children:[(0,t.jsx)(lO.default,{sx:{fontSize:16}}),"보고서에 반영하기"]})]})]})})]})},c0=function({value:e,onChange:n,onApply:l,onClose:a}){let d=(0,i.useMemo)(()=>{let t,n;return t=e.split("\n").map(e=>e.trim()).filter(e=>""!==e),n={...s3},s5.forEach(e=>{let i=s8.find(n=>t.includes(e.sentences[n]));n[e.key]=i??null}),n},[e]),{ref:o,fire:r}=ez(),s=(0,i.useRef)(!1),c=(0,i.useRef)(0),f=(0,i.useRef)(null);(0,i.useEffect)(()=>{if(!s.current)return;let t=o.current;if(null!==t)if(null!==f.current){let e=Math.max(t.scrollHeight-t.clientHeight,0);t.scrollTop=s7(f.current,0,e),f.current=null}else t.scrollTop=ct(t,e,c.current);s.current=!1},[o,e]);let h=""!==e.trim();return(0,t.jsxs)(ci,{children:[(0,t.jsxs)(r6,{children:[(0,t.jsx)(cl,{}),(0,t.jsx)(r3,{children:"자동으로 문장 생성하기"}),(0,t.jsx)(r9,{onClick:a,children:(0,t.jsx)(W.X,{size:16})})]}),(0,t.jsx)(r8,{}),(0,t.jsx)(r7,{children:(0,t.jsxs)(ca,{children:[(0,t.jsxs)(cd,{children:[(0,t.jsx)(te.default,{sx:{fontSize:16}}),(0,t.jsx)(co,{children:"각 카테고리와 세부 항목을 선택하면, 내용에 맞는 문장이 하단에 자동으로 생성됩니다."})]}),(0,t.jsx)(cr,{children:s5.map(i=>{let l=d[i.key];return(0,t.jsxs)(cs,{children:[(0,t.jsxs)(cc,{children:[(0,t.jsx)(cf,{children:i.index}),(0,t.jsx)(ch,{children:i.label})]}),(0,t.jsx)(cp,{children:s8.map(a=>(0,t.jsxs)(cu,{type:"button",$selected:l===a,onClick:()=>((t,i)=>{let l=d[t];if(null!==l&&null===i){let n=o.current,i=s5.find(e=>e.key===t)?.sentences[l]??"",a=""===i?-1:e.indexOf(i);null!==n&&a>=0&&(f.current=ct(n,e,a,.5))}else f.current=null;let a={...d,[t]:i},h=s5.map(e=>{let t=a[e.key];return null===t?null:e.sentences[t]}).filter(e=>null!==e).join("\n\n");""!==h.trim()&&r(),c.current=((e,t,n)=>{if(""===n.trim())return 0;let i=t[e];if(null===i){let e=s5.findIndex(e=>null!==t[e.key]);if(e<0)return 0;let i=s5[e];if(void 0===i)return 0;let l=t[i.key];if(null===l)return 0;let a=i.sentences[l],d=n.indexOf(a);return d>=0?d:0}let l=s5.find(t=>t.key===e)?.sentences[i]??"",a=""===l?-1:n.indexOf(l);return a>=0?a:0})(t,a,h),s.current=!0,n(h)})(i.key,l===a?null:a),children:[s9[a],l===a&&(0,t.jsx)(lO.default,{sx:{fontSize:16}})]},`${i.key}-${a}`))})]},i.key)})}),(0,t.jsx)(r8,{style:{marginTop:"auto"}}),(0,t.jsxs)(cx,{children:[(0,t.jsxs)(cg,{children:[(0,t.jsx)(H.default.AI,{size:16,color:"#4f39f6"}),"자동 생성 문장"]}),(0,t.jsx)(cm,{ref:o,value:e,placeholder:"카테고리/키워드와 세부 상태를 선택하면 문서에 사용할 문장이 자동으로 생성됩니다.",readOnly:!0})]}),(0,t.jsxs)(cj,{children:[(0,t.jsx)(cb,{type:"button",onClick:()=>{n("")},disabled:!h,children:"다시 생성하기"}),(0,t.jsxs)(c_,{type:"button",onClick:l,children:[(0,t.jsx)(lO.default,{sx:{fontSize:16}}),"보고서에 반영하기"]})]})]})})]})};var c1=e.i(28095);let c2=function({isOpen:e,contractId:n,onClose:l,onConfirm:a}){let[d,o]=(0,i.useState)("idle"),[r,s]=(0,i.useState)([]),[c,f]=(0,i.useState)("");(0,i.useEffect)(()=>{let t=!1;return e?((async()=>{if(null===n){if(t)return;o("error"),s([]),f("");return}if(t)return;o("loading");let[e,i]=await ah.default.data.contractPayment.getDepositList({contractId:n});if(t)return;if(null!==e||null===i)return o("error");let l=i.slice().sort((e,t)=>{let n=t.depositDate.localeCompare(e.depositDate);return 0!==n?n:t.id.localeCompare(e.id)});s(l),f(l[0]?.id??""),o("success")})(),()=>{t=!0}):()=>{t=!0}},[n,e]);let h=(0,i.useMemo)(()=>r.find(e=>e.id===c)??null,[r,c]);return e?(0,t.jsx)(c6,{children:(0,t.jsxs)(c4,{onClick:e=>e.stopPropagation(),children:[(0,t.jsxs)(c5,{children:[(0,t.jsx)(c3,{children:"본인부담금 영수증을 작성할 입금 내역을 선택해주세요."}),(0,t.jsx)(c9,{children:"아래 선택한 입금 내역이 본인부담금 영수증에 반영되며, 반영 이후에도 자유롭게 수정할 수 있습니다."}),(0,t.jsxs)(c8,{children:[(0,t.jsx)(c7,{children:"입금 내역"}),"success"===d&&r.length>0?(0,t.jsx)(fe,{value:c,onChange:e=>{f(e.target.value)},children:r.map(e=>{var n;return(0,t.jsx)("option",{value:e.id,children:`${function(e){let t=e.match(/^(\d{4})-(\d{2})-(\d{2})$/);if(null===t)return e;let[,n,i,l]=t;return`${n}년 ${i}월 ${l}일`}(e.depositDate)} - ${(n=e.amount,`${Math.max(0,Math.floor(n)).toLocaleString("ko-KR")}원`)} 입금`},e.id)})}):(0,t.jsx)(fe,{value:"",disabled:!0,children:(0,t.jsx)("option",{value:"",children:"loading"===d?"입금 내역을 불러오는 중입니다.":"error"===d?"입금 내역을 불러오지 못했습니다.":"선택 가능한 입금 내역이 없습니다."})})]}),"error"===d?(0,t.jsx)(ft,{children:"잠시 후 다시 시도해 주세요."}):null]}),(0,t.jsxs)(fn,{children:[(0,t.jsx)(fi,{type:"button",onClick:l,children:"취소하기"}),(0,t.jsx)(fl,{type:"button",disabled:"loading"===d,onClick:()=>{"loading"!==d&&a(h)},children:"success"===d&&0===r.length?"내역 없이 작성하기":"내역 반영하기"})]})]})}):null},c6=l.default.div.withConfig({componentId:"zh__sc-8efbebf8-0"})`
  position: fixed;
  z-index: 3000;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgb(10 10 10 / 48%);
`,c4=l.default.div.withConfig({componentId:"zh__sc-8efbebf8-1"})`
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
`,c5=l.default.div.withConfig({componentId:"zh__sc-8efbebf8-2"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;

  width: 453px;
`,c3=l.default.h3.withConfig({componentId:"zh__sc-8efbebf8-3"})`
  align-self: stretch;

  margin: 0;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #000;
`,c9=l.default.p.withConfig({componentId:"zh__sc-8efbebf8-4"})`
  align-self: stretch;

  margin: 0;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #000;
`,c8=l.default.div.withConfig({componentId:"zh__sc-8efbebf8-5"})`
  display: flex;
  gap: 10px;
  align-items: center;
  align-self: stretch;
  justify-content: center;

  width: 100%;
`,c7=l.default.div.withConfig({componentId:"zh__sc-8efbebf8-6"})`
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #000;
`,fe=(0,l.default)(o.default.Input.Select).withConfig({componentId:"zh__sc-8efbebf8-7"})`
  flex: 1;
  height: 36px;
`,ft=l.default.div.withConfig({componentId:"zh__sc-8efbebf8-8"})`
  display: flex;
  align-items: center;

  min-height: 20px;

  font-size: 16px;
  line-height: 20px;
  color: #6b7280;
`,fn=l.default.div.withConfig({componentId:"zh__sc-8efbebf8-9"})`
  display: flex;
  gap: 12px;
  align-items: center;
  align-self: stretch;
  justify-content: flex-end;
`,fi=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-8efbebf8-10"})`
  height: 36px;
  padding: 8px 14px;
`,fl=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-8efbebf8-11"})`
  height: 36px;
  padding: 8px 14px;
`,fa="__preview__",fd=(e,t)=>e?.includes(t)===!0,fo=e=>fd(e,rV.default.TARGET_COPAYMENT_RECEIPT_AMOUNT)||fd(e,"COPAYMENT_RECEIPT_AMOUNT"),fr=e=>fd(e,rV.default.TARGET_COPAYMENT_RECEIPT_RECEIVED_DATE)||fd(e,"COPAYMENT_RECEIPT_RECEIVED_DATE"),fs=(0,n.observer)(function(){let e=a.default.modal.documentView,n=e.clientContractId,l=a.default.data.docs.list.query?.contractId??null,[d,o]=(0,i.useState)(""),[r,s]=(0,i.useState)(null),[c,f]=(0,i.useState)(!1),[h,p]=(0,i.useState)(!1),[u,x]=(0,i.useState)(!1),g=(0,i.useRef)(null),m=e.selectedTemplateId,j=e.selectedTemplate,b=null===e.selectedDocumentId&&null!==m,_=(0,i.useMemo)(()=>null===m?[]:e.documents.flatMap(e=>{let t=e.id;return e.templateId!==m||null===t?[]:[{...e,id:t}]}).sort((e,t)=>{let n=t.occurrenceKey.localeCompare(e.occurrenceKey);return 0!==n?n:t.createdAt.localeCompare(e.createdAt)}),[e.documents,m]),w=(0,i.useMemo)(()=>_[0]?.id??"",[_]),y=(0,i.useMemo)(()=>{if(b)return fa;let t=e.selectedDocumentId;return"string"==typeof t&&_.some(e=>e.id===t)?t:_.some(e=>e.id===d)?d:w},[_,w,b,e.selectedDocumentId,d]),v=_.some(e=>"COMPLETED"!==e.displayStatus),C=null!==j&&"MANUAL"===j.creationMode&&!1===v,I=e.hasSelectedTemplatePreviewSession,z=e.hasSelectedFieldChanges,T=e.selectedTemplateFields.some(e=>{let t=e.uiProps.triggerKeys;return fd(t,rV.default.COPAYMENT_RECEIPT_TRANSACTION_NUMBER)||fo(t)||fr(t)});(0,i.useEffect)(()=>{let t=g.current;if(null===t||e.selectedTemplateId!==t.templateId)return;let n=e.selectedTemplateFields;if(0===n.length)return;let i=n.filter(e=>fo(e.uiProps.triggerKeys)),l=n.filter(e=>fr(e.uiProps.triggerKeys));if(0===i.length&&0===l.length){g.current=null;return}i.forEach(n=>{e.updateSelectedFieldValue({page:n.page,fieldKey:n.fieldKey,value:t.amountText})}),l.forEach(n=>{e.updateSelectedFieldValue({page:n.page,fieldKey:n.fieldKey,value:t.receivedDate})}),g.current=null},[e,e.selectedTemplateFields]);let E=t=>{if(t===fa){null!==m&&e.openTemplateWithoutDocument(m);return}e.open(t)},S=async()=>{if(null!==r&&!h){p(!0);try{let t=await e.saveSelectedFieldChanges();if(null===t)return;E(r),s(null),f(!1)}finally{p(!1)}}};return(0,t.jsxs)(fc,{children:[(0,t.jsxs)(ff,{children:[(0,t.jsxs)(fh,{children:[(0,t.jsx)(H.default.Ballot,{size:16}),"서류 목록"]}),(0,t.jsxs)(fu,{disabled:!C,onClick:()=>void(()=>{if(C&&null!==m){if(T)return x(!0);e.openTemplateWithoutDocument(m)}})(),children:[(0,t.jsx)(c1.default,{sx:{fontSize:20}}),"새 서류 생성하기"]})]}),(0,t.jsxs)(fp,{value:y,onChange:e=>{let t=e.target.value;if(o(t),t!==y){if(z){s(t),f(!0);return}E(t)}},disabled:0===_.length&&!1===I,children:[I?(0,t.jsx)("option",{value:fa,children:"새 서류 미리보기 (저장 전)"}):null,_.map(e=>{let n=o0(e.displayStatus),i=function(e){if(!nL.default.yearMonth.is(e))return null;let[t,n]=e.split("-"),i=Number(n);return!Number.isInteger(i)||i<1||i>12?null:`${t}년 ${i}월`}(e.occurrenceKey)??function(e){let t=new Date(e);if(Number.isNaN(t.getTime()))return e;let n=new Map(new Intl.DateTimeFormat("ko-KR",{timeZone:"Asia/Seoul",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}).formatToParts(t).map(e=>[e.type,e.value])),i=n.get("year")??"0000",l=n.get("month")??"00",a=n.get("day")??"00",d=n.get("hour")??"00",o=n.get("minute")??"00",r=n.get("second")??"00";return`${i}년 ${l}월 ${a}일 (${d}:${o}:${r}) 생성됨`}(e.createdAt);return(0,t.jsx)("option",{value:e.id,"data-badge":n.badge.label,"data-badge-tone":n.badge.color,children:i},e.id)})]}),(0,t.jsx)(rG,{isOpen:c,actionType:"move",isProcessing:h,onClickSecondary:()=>{null===r||(e.discardSelectedFieldChanges(),E(r),s(null)),f(!1)},onClickPrimary:()=>{S()}}),(0,t.jsx)(c2,{isOpen:u,contractId:n??l,onClose:()=>{x(!1)},onConfirm:t=>{if(null===m)return void x(!1);if(null===t){x(!1),e.openTemplateWithoutDocument(m);return}g.current={templateId:m,amountText:String(Math.max(0,Math.floor(t.amount))),receivedDate:t.depositDate},x(!1),e.openTemplateWithoutDocument(m)}})]})}),fc=l.default.div.withConfig({componentId:"zh__sc-70c07d1f-0"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;

  padding: 16px 12px;
  border: 1px solid #d8dee7;
  border-radius: 8px;

  background: #fcfdff;
`,ff=l.default.div.withConfig({componentId:"zh__sc-70c07d1f-1"})`
  display: flex;
  justify-content: space-between;
  width: 100%;
`,fh=l.default.div.withConfig({componentId:"zh__sc-70c07d1f-2"})`
  display: flex;
  gap: 8px;
  align-items: center;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 16px; /* 100% */
  color: #0a0a0a;
`,fp=(0,l.default)(o.default.Input.Select).withConfig({componentId:"zh__sc-70c07d1f-3"})`
  width: 100%;
`,fu=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-70c07d1f-4"})`
  display: flex;
  gap: 4px;
  align-items: center;

  height: 40px;
  padding: 8px 16px;
`,fx=(0,n.observer)(function(){let{selectedOcrFile:e,isOcrAnalyzing:n,isUncreatedMonthlyScheduleDocument:i,monthlyScheduleYearMonth:l,monthlyScheduleClientContractId:d,analyzeSelectedOcrFile:o,clearSelectedOcrFile:r}=a.default.modal.documentView;return(0,t.jsxs)(fg,{children:[(0,t.jsxs)(fb,{disabled:null===e||n||i&&(null===l||null===d),onClick:()=>{o()},children:["분석 시작",(0,t.jsx)(U,{size:16})]}),null!==e&&(0,t.jsx)(fj,{onClick:()=>{r()},children:"취소"})]})}),fg=l.default.div.withConfig({componentId:"zh__sc-11817043-0"})`
  display: flex;
  flex-flow: row-reverse;
  gap: 10px;
  align-self: stretch;
  justify-content: space-between;
`,fm=l.css`
  display: flex;
  flex-shrink: 0;
  gap: 10px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,fj=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-11817043-1"})`
  ${fm}
  visibility: hidden;
`,fb=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-11817043-2"})`
  ${fm}
`,{FILE_EXTENSION_WHITELIST_BY_GROUP:f_}=G.default.file,fw=(0,n.observer)(function(){var e;let n,{selectedOcrFile:i,isOcrAnalyzing:l,clearSelectedOcrFile:d}=a.default.modal.documentView;if(null===i)return null;let o=-1===(n=(e=i.name).lastIndexOf("."))?"":e.slice(n).toLowerCase();return(0,t.jsx)(fy,{children:(0,t.jsxs)(fv,{children:[(0,t.jsxs)(fC,{children:[(0,t.jsx)(fI,{children:f_.IMAGE.some(e=>e===o)?(0,t.jsx)(H.default.Photo,{size:17,color:"#FA8E43"}):f_.AUDIO.some(e=>e===o)?(0,t.jsx)(H.default.SpeechToText,{size:17,color:"#A855F7"}):f_.DOCUMENT.some(e=>e===o)?(0,t.jsx)(H.default.News,{size:17,color:"#2264E8"}):null}),(0,t.jsx)(fz,{children:(0,t.jsx)(fT,{children:i.name})})]}),(0,t.jsxs)(fE,{onClick:d,disabled:l,children:["삭제",(0,t.jsx)(W.X,{size:16})]})]},`${i.name}-${i.size}-${i.lastModified}`)})}),fy=l.default.div.withConfig({componentId:"zh__sc-4e7cda26-0"})`
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
`,fv=l.default.div.withConfig({componentId:"zh__sc-4e7cda26-1"})`
  display: flex;
  flex-shrink: 0;
  gap: 24px;
  align-items: center;

  padding: 12px 16px;
  border-radius: 8px;

  background: #f6f8fb;
`,fC=l.default.div.withConfig({componentId:"zh__sc-4e7cda26-2"})`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`,fI=l.default.div.withConfig({componentId:"zh__sc-4e7cda26-3"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;
  border-radius: 4px;

  background: #fff;
`,fz=l.default.div.withConfig({componentId:"zh__sc-4e7cda26-4"})`
  display: flex;
  align-items: center;
  align-self: stretch;

  width: 196px;
  height: 40px;

  color: #0a0a0a;
`,fT=l.default.div.withConfig({componentId:"zh__sc-4e7cda26-5"})`
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #0a0a0a;
`,fE=l.default.button.withConfig({componentId:"zh__sc-4e7cda26-6"})`
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
`;function fS(){let[e,n]=(0,i.useState)(0);return(0,i.useEffect)(()=>{let e=performance.now(),t=0,i=l=>{n(Math.min(100*(1-Math.exp(-((l-e)/1e3*.05))),98)),t=window.requestAnimationFrame(i)};return t=window.requestAnimationFrame(i),()=>{window.cancelAnimationFrame(t)}},[]),(0,t.jsx)(fk,{children:(0,t.jsx)(fD,{$progress:e})})}let fk=l.default.div.withConfig({componentId:"zh__sc-c9208651-0"})`
  overflow: hidden;
  display: flex;
  align-self: stretch;

  width: 100%;
  height: ${8}px;
  border-radius: 99px;

  background: #e6e0ff;
  background-color: #e5e2ff;
`,fD=l.default.div.attrs(({$progress:e})=>({style:{transform:`scaleX(${e/100})`}})).withConfig({componentId:"zh__sc-c9208651-1"})`
  transform-origin: left center;
  width: 100%;
  height: 100%;
  background-color: #5635ff;
`,fA=(0,n.observer)(function({disabled:e}){let{isWindowFileDragging:n}=a.default.ui.layout,{selectedOcrFile:i,isOcrFileError:l,isOcrAnalyzing:d}=a.default.modal.documentView,o=l?"지원하지 않는 파일 형식입니다.":!e&&n?"파일을 여기에 놓으면 업로드 됩니다.":d?"업로드한 파일을 분석하고 있습니다.":"이곳에 파일을 끌어다 놓거나 (드래그 앤 드롭), 클릭하여 업로드하세요.";return(0,t.jsxs)(fL,{children:[null===i&&!l&&(0,t.jsx)(f$,{children:(0,t.jsx)(ei.Upload,{size:26,color:e?"#9ca3af":fO[100]})}),(0,t.jsxs)(fR,{children:[(0,t.jsx)(fP,{$disabled:e,$isError:l,children:o}),(0,t.jsx)(fN,{$disabled:e,children:null===i||d?"지원 파일 형식: 사진 이미지":"새 파일을 업로드하면 기존 파일이 교체됩니다."})]}),d&&(0,t.jsx)(fS,{})]})}),{PRIMARY:fO}=el.default.style.color,fL=l.default.div.withConfig({componentId:"zh__sc-cdea1a21-0"})`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  align-self: stretch;
  justify-content: center;
`,f$=l.default.div.withConfig({componentId:"zh__sc-cdea1a21-1"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;
`,fR=l.default.div.withConfig({componentId:"zh__sc-cdea1a21-2"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  align-self: stretch;
  justify-content: center;
`,fP=l.default.div.withConfig({componentId:"zh__sc-cdea1a21-3"})`
  font-size: 14px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 142.857% */
  color: ${({$disabled:e,$isError:t})=>t?"#ff4d4f":e?"#9ca3af":"#4f39f6"};
  text-align: center;
`,fN=l.default.div.withConfig({componentId:"zh__sc-cdea1a21-4"})`
  font-size: 14px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 142.857% */
  color: ${({$disabled:e})=>e?"#9ca3af":"#99a1af"};
`,fM=G.default.file.FILE_EXTENSION_WHITELIST_BY_GROUP.IMAGE.join(","),fF=(0,n.observer)(function(){let{isWindowFileDragging:e}=a.default.ui.layout,n=a.default.modal.documentView,{selectedDocumentDisplayStatus:l,selectedOcrFile:d,isOcrFileError:o}=n,r=(0,i.useRef)(null),s=!n.isOcrSupported||"WAITING_TO_DRAFT"!==l&&"NEED_UPDATE"!==l&&"NEED_MATCHING"!==l,c=e=>{n.setSelectedOcrFile(e)};return(0,N.default)(e=>{if(s)return;let t=e[0];void 0!==t&&c(t)}),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(fU,{ref:r,type:"file",accept:fM,disabled:s,onChange:e=>{if(s)return;let t=Array.from(e.target.files??[]);if(0===t.length)return;let n=t[0];void 0!==n&&(c(n),e.target.value="")}}),(0,t.jsxs)(fB,{$isWindowFileDragging:e,$disabled:s,onDragOver:e=>{if(e.preventDefault(),s)return},onDrop:e=>{if(e.preventDefault(),s)return;let t=Array.from(e.dataTransfer.files);if(0===t.length)return;let n=t[0];void 0!==n&&c(n)},onClick:e=>{!s&&e.target instanceof HTMLElement&&(e.target.closest("button")||r.current?.click())},$isError:o,children:[null!==d&&(0,t.jsx)(fw,{}),(0,t.jsx)(fA,{disabled:s}),(0,t.jsx)(fx,{})]})]})}),fU=l.default.input.withConfig({componentId:"zh__sc-c05f4a71-0"})`
  display: none;
`,fB=l.default.div.withConfig({componentId:"zh__sc-c05f4a71-1"})`
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
`,fY=(0,n.observer)(function(){let{isOcrAnalyzing:e,monthlyScheduleYearMonth:n,monthlyScheduleClientContractId:i,setMonthlyScheduleYearMonth:l,setMonthlyScheduleClientContractId:d}=a.default.modal.documentView,r=a.default.modal.serviceWorkerDetail.serviceWorker?.assignedContracts??[];return(0,t.jsxs)(fV,{children:[(0,t.jsxs)(fW,{children:[(0,t.jsx)(fH,{children:"년월"}),(0,t.jsx)(o.default.Input.Date,{style:{textAlign:"center",height:"100%"},value:n??"",valueType:"year-month",readOnly:e,pickerOptions:{hideDate:!0},onChange:l})]}),(0,t.jsxs)(fW,{children:[(0,t.jsx)(fH,{children:"이용자 계약"}),(0,t.jsxs)(fG,{value:i??"",disabled:e||0===r.length,onChange:e=>{d(e.target.value||null)},children:[(0,t.jsx)("option",{value:"",children:"이용자 계약 선택"}),r.map(e=>(0,t.jsx)("option",{value:e.contractId,children:null===e.contractEndDate?e.clientName:`${e.clientName} (${e.contractEndDate.replaceAll("-",".")})`},[e.contractId,e.clientName,e.clientBirthDate??"",e.contractEndDate??"",e.status].join(":")))]})]})]})}),fV=l.default.div.withConfig({componentId:"zh__sc-42463ee-0"})`
  display: grid;
  grid-template-columns: 136px minmax(0, 1fr);
  gap: 10px;
  align-self: stretch;
`,fW=l.default.label.withConfig({componentId:"zh__sc-42463ee-1"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
`,fH=l.default.span.withConfig({componentId:"zh__sc-42463ee-2"})`
  font-size: 12px;
  font-weight: 700;
  color: #494f53;
`,fG=(0,l.default)(o.default.Input.Select).withConfig({componentId:"zh__sc-42463ee-3"})`
  width: 100%;
  height: 32px;
`,{FILE_EXTENSION_WHITELIST_BY_GROUP:fK}=G.default.file,fX=(0,n.observer)(function(){var e;let n,l=a.default.modal.documentView,{analyzedOcrFile:d,selectedDocumentDisplayStatus:o}=l,{ref:r,fire:s}=ez(),c=!l.isOcrSupported||"WAITING_TO_DRAFT"!==o&&"NEED_UPDATE"!==o&&"NEED_MATCHING"!==o;if((0,i.useEffect)(()=>{null!==d&&s()},[d,s]),c||null===d)return null;let f=-1===(n=(e=d.name).lastIndexOf("."))?"":e.slice(n).toLowerCase();return(0,t.jsxs)(fq,{ref:r,children:[(0,t.jsxs)(fQ,{children:[(0,t.jsxs)(fZ,{children:[(0,t.jsx)(H.default.FindInPage,{size:18}),"AI 문서 인식 완료"]}),(0,t.jsxs)(fJ,{children:["업로드된 서류들에서 정보를 성공적으로 추출했습니다. ",(0,t.jsx)("br",{})]})]}),(0,t.jsxs)(f0,{children:[(0,t.jsxs)(f1,{children:[(0,t.jsx)(H.default.CheckCircle,{size:18}),"분석 완료된 첨부 서류 (1건)"]}),(0,t.jsx)(f2,{children:(0,t.jsxs)(f6,{children:[(0,t.jsxs)(f4,{children:[(0,t.jsx)(f5,{children:fK.IMAGE.some(e=>e===f)?(0,t.jsx)(H.default.Photo,{size:17,color:"#FA8E43"}):fK.AUDIO.some(e=>e===f)?(0,t.jsx)(H.default.SpeechToText,{size:17,color:"#A855F7"}):fK.DOCUMENT.some(e=>e===f)?(0,t.jsx)(H.default.News,{size:17,color:"#2264E8"}):null}),(0,t.jsx)(f3,{children:(0,t.jsx)(f9,{children:d.name})})]}),(0,t.jsx)(f8,{children:"추출 완료"})]},`${d.name}-${d.size}-${d.lastModified}`)})]})]})}),fq=l.default.div.withConfig({componentId:"zh__sc-91a1d4f6-0"})`
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
`,fQ=l.default.div.withConfig({componentId:"zh__sc-91a1d4f6-1"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  align-self: stretch;
`,fZ=l.default.div.withConfig({componentId:"zh__sc-91a1d4f6-2"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #0a0a0a;
`,fJ=l.default.div.withConfig({componentId:"zh__sc-91a1d4f6-3"})`
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
`,f0=l.default.div.withConfig({componentId:"zh__sc-91a1d4f6-4"})`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  align-self: stretch;

  min-height: 0;
`,f1=l.default.div.withConfig({componentId:"zh__sc-91a1d4f6-5"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #0a0a0a;
`,f2=l.default.div.withConfig({componentId:"zh__sc-91a1d4f6-6"})`
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
`,f6=l.default.div.withConfig({componentId:"zh__sc-91a1d4f6-7"})`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 359px;
  height: 64px;
  padding: 12px 16px;
  border-radius: 8px;

  background: #f6f8fb;
`,f4=l.default.div.withConfig({componentId:"zh__sc-91a1d4f6-8"})`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`,f5=l.default.div.withConfig({componentId:"zh__sc-91a1d4f6-9"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;
  border-radius: 4px;

  background: #fff;
`,f3=l.default.div.withConfig({componentId:"zh__sc-91a1d4f6-10"})`
  display: flex;
  align-items: center;
  align-self: stretch;

  width: 196px;
  height: 40px;

  color: #0a0a0a;
`,f9=l.default.div.withConfig({componentId:"zh__sc-91a1d4f6-11"})`
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #0a0a0a;
`,f8=l.default.div.withConfig({componentId:"zh__sc-91a1d4f6-12"})`
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
`,f7=(0,n.observer)(function(){let{analyzedOcrFile:e,isUncreatedMonthlyScheduleDocument:n}=a.default.modal.documentView;return(0,t.jsxs)(he,{children:[(0,t.jsx)(fF,{}),n?(0,t.jsx)(fY,{}):null,null!==e&&(0,t.jsx)(fX,{})]})}),he=l.default.div.withConfig({componentId:"zh__sc-b3f3f20d-0"})`
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
`,ht=l.default.div.withConfig({componentId:"zh__sc-80a26ee5-0"})`
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
`;function hn(e){if(null==e||""===e.trim())return"-";let t=new Date(e);if(Number.isNaN(t.getTime()))return"-";let n=String(t.getFullYear()),i=String(t.getMonth()+1).padStart(2,"0"),l=String(t.getDate()).padStart(2,"0"),a=String(t.getHours()).padStart(2,"0"),d=String(t.getMinutes()).padStart(2,"0");return`${n}-${i}-${l} ${a}:${d}`}let hi=(0,n.observer)(function(){let e=a.default.modal.documentView,n=e.isClientMode,i=e.clientContractId,l=(a.default.data.contract.list.data??[]).find(e=>e.id===i)??null,d=n?hn(l?.client.createdAt??l?.createdAt):hn(e.selectedDocument?.createdAt),o=l?.client.name??"-",r=a.default.modal.serviceWorkerDetail.serviceWorker?.name??"-",s=n?`이용자 ${o}님의 기존 이용 내역과 갱신된 요금 정보가 성공적으로 양식에 매핑되었습니다.`:`제공인력 ${r}님의 계약/서류 정보가 현재 양식에 반영되었습니다.`;return(0,t.jsx)(hl,{children:(0,t.jsxs)(ha,{children:[(0,t.jsxs)(hd,{children:[(0,t.jsx)(ho,{children:(0,t.jsxs)(hr,{children:[(0,t.jsx)(ht,{$status:"done",children:(0,t.jsx)(j.Check,{size:12,color:"#ffffff",strokeWidth:3})}),n?"기존 이용자 정보 연동 완료":"제공인력 서류 데이터 반영 완료"]})}),(0,t.jsx)(hs,{children:(0,t.jsx)(hc,{children:`${n?"업로드 일시":"문서 생성 일시"}: ${d}`})})]}),(0,t.jsx)(hf,{children:(0,t.jsx)(hh,{children:s})})]})})}),hl=l.default.div.withConfig({componentId:"zh__sc-a82a8c4-0"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;
`,ha=l.default.div.withConfig({componentId:"zh__sc-a82a8c4-1"})`
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
`,hd=l.default.div.withConfig({componentId:"zh__sc-a82a8c4-2"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  align-self: stretch;
`,ho=l.default.div.withConfig({componentId:"zh__sc-a82a8c4-3"})`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;
`,hr=l.default.div.withConfig({componentId:"zh__sc-a82a8c4-4"})`
  display: flex;
  gap: 4px;
  align-items: center;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 16px; /* 100% */
  color: #0a0a0a;
`,hs=l.default.div.withConfig({componentId:"zh__sc-a82a8c4-5"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  align-self: stretch;

  padding-left: 24px;
`,hc=l.default.div.withConfig({componentId:"zh__sc-a82a8c4-6"})`
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
`,hf=l.default.div.withConfig({componentId:"zh__sc-a82a8c4-7"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  align-self: stretch;

  padding-left: 24px;
`,hh=l.default.div.withConfig({componentId:"zh__sc-a82a8c4-8"})`
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
`,hp=(0,n.observer)(function(){let e=a.default.modal.documentView,{selectedTemplate:n}=e,i=e.isClientMode,l=n?.creationMode==="MANUAL",d=null===n?0:e.documents.filter(e=>e.templateId===n.id).length,o=i&&(l||null!==n&&d>=2);return(0,t.jsxs)(hu,{children:[(0,t.jsx)(hx,{children:(0,t.jsx)(hg,{children:n?.name??"계약서 자동 생성"})}),(0,t.jsxs)(hm,{children:[o?(0,t.jsx)(fs,{}):null,null!==e.selectedDocument?(0,t.jsx)(hi,{}):null,(0,t.jsx)(f7,{})]})]})}),hu=l.default.div.withConfig({componentId:"zh__sc-61494f9e-0"})`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  justify-content: space-between;

  width: 541px;
  border-right: 1px solid #e5e7eb;

  background: #fff;
`,hx=l.default.div.withConfig({componentId:"zh__sc-61494f9e-1"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;

  padding: 16px 20px;
  border-bottom: 1px solid #e5e7eb;

  background: #fff;
`,hg=l.default.div.withConfig({componentId:"zh__sc-61494f9e-2"})`
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
`,hm=l.default.div.withConfig({componentId:"zh__sc-61494f9e-3"})`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;

  padding: 16px 12px;
`,hj=function(e){return(0,t.jsxs)(hb,{children:[(0,t.jsx)(h_,{children:"오른쪽에서 년월을 선택하면 실제 제공일 리스트가 채워집니다."}),(0,t.jsx)(o.default.Input.Date,{value:e.value,valueType:"year-month",readOnly:e.disabled,pickerOptions:{hideDate:!0},style:{width:136,height:28,textAlign:"center"},onChange:t=>{e.onChangeYearMonth(t)}}),null!==e.errorMessage?(0,t.jsx)(hw,{children:e.errorMessage}):null]})},hb=l.default.div.withConfig({componentId:"zh__sc-698d13d5-0"})`
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
`,h_=l.default.div.withConfig({componentId:"zh__sc-698d13d5-1"})`
  font-size: 16px;
  font-weight: 500;
  color: #000;
`,hw=l.default.div.withConfig({componentId:"zh__sc-698d13d5-2"})`
  font-size: 12px;
  line-height: 18px;
  color: #dc2626;
`;function hy(){return(hy=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var hv=(0,i.forwardRef)(function(e,t){var n=e.color,l=e.size,a=void 0===l?24:l,d=function(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["color","size"]);return i.default.createElement("svg",hy({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),i.default.createElement("polyline",{points:"6 9 6 2 18 2 18 9"}),i.default.createElement("path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"}),i.default.createElement("rect",{x:"6",y:"14",width:"12",height:"8"}))});hv.propTypes={color:M.default.string,size:M.default.oneOfType([M.default.string,M.default.number])},hv.displayName="Printer";var hC=e.i(69477),hI=e.i(68339);let hz=(0,n.observer)(function({isSaving:e,setIsSaving:n,resetLocalStates:l,onRequiredValidation:d}){let{close:o,selectedDocument:r}=a.default.modal.documentView,s=a.default.modal.documentView,[c,f]=(0,i.useState)(!1),[h,p]=(0,i.useState)(!1),u=s.selectedTemplateImagePaths.filter(e=>""!==e),x=(null!==s.selectedDocumentId||"NEED_UPDATE"!==s.selectedDocumentDisplayStatus)&&null!==s.selectedTemplateId&&u.length>0,g=s.hasSelectedFieldChanges,m=null===s.selectedDocumentDisplayStatus?{label:"미리보기",color:"lightBlue"}:o0(s.selectedDocumentDisplayStatus).badge,b=s.isClientMode&&null===r||null!==r&&(0,o1.shouldSaveDocumentBeforePrint)(r.displayStatus),_=s.isServiceWorkerMode&&r?.displayStatus==="LINKED_COMPLETED"&&(0,rW.isSalaryProvisionMonthlyScheduleDocument)(r.templateName),w=()=>{let e=s.selectedTemplateId;if(null===e)return null;let t=s.selectedTemplateImagePaths.filter(e=>""!==e).map((t,n)=>({id:`${e}-${n+1}`,templateId:e,imagePath:t,page:n+1}));return 0===t.length?null:{pages:t,fields:s.selectedTemplateFields}},y=async()=>{if(x&&!h&&!e&&(!b||d("print"))){p(!0);try{if(b){n(!0);try{let e=await s.saveSelectedFieldChanges();if(null===e)return}finally{n(!1)}await new Promise(e=>{window.setTimeout(e,600)})}let e=w();if(null===e)return;let t=s.selectedTemplate?.name?.trim()??"",i=""===t?"Print":t,l=""===s.printTitleSuffix?i:`${i} - ${s.printTitleSuffix}`;await (0,hI.renderDocumentPrintView)({...e,printTitle:l,retryOnImageLoadFailure:{refresh:async()=>{await s.refetchTemplateListForPrint()},rebuildPayload:async()=>{let e=w();return null===e?null:{...e,printTitle:l}}},onImageLoadFailure:e=>{a.default.ui.layout.toast.error(`서류 이미지 ${e}개 로딩에 실패하여 출력을 중단했습니다.`)}})}finally{p(!1)}}},v=()=>{l(),o()},C=async()=>{if(!e&&d("save")){n(!0);try{await s.saveSelectedFieldChanges()}finally{n(!1)}}},I=async()=>{if(!e){n(!0);try{await s.patchSelectedDocumentStatusPrevious()}finally{n(!1)}}},z=async()=>{if(!e){if(!d("close"))return void f(!1);n(!0);try{let e=await s.saveSelectedFieldChanges();if(null===e)return;f(!1),v()}finally{n(!1)}}};return(0,t.jsxs)(hT,{children:[(0,t.jsxs)(hE,{children:[(0,t.jsxs)(hS,{children:[(0,t.jsx)(hk,{children:"서류 상태"}),(0,t.jsxs)(hD,{$color:m.color,children:[m.icon,m.label]})]}),(0,t.jsx)(hA,{}),(0,t.jsxs)(hO,{children:[(0,t.jsxs)(hL,{type:"button",disabled:!x||h||e,onClick:()=>{y()},children:[(0,t.jsx)(hv,{size:16}),"출력하기"]}),r?.displayStatus==="COMPLETED"?(0,t.jsxs)(hL,{$processing:e,onClick:()=>void I(),children:[(0,t.jsx)(H.default.Undo,{size:14}),"확인 취소"]}):s.isClientMode&&null===r||null!==r&&("NEED_UPDATE"===r.displayStatus||"NEED_MATCHING"===r.displayStatus||_)?(0,t.jsxs)(hL,{$processing:e,onClick:()=>void C(),children:[e?(0,t.jsx)(hC.RotateCw,{size:16}):(0,t.jsx)(j.Check,{size:16}),e?"저장중":"최종확인 및 저장"]}):null,(0,t.jsxs)(h$,{type:"button",onClick:()=>{g?f(!0):v()},children:[(0,t.jsx)(W.X,{size:16}),"닫기"]})]})]}),(0,t.jsx)(rG,{isOpen:c,actionType:"exit",isProcessing:e,onClickSecondary:()=>{f(!1),v()},onClickPrimary:()=>{z()}})]})}),hT=l.default.div.withConfig({componentId:"zh__sc-fa5a83d4-0"})`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: flex-end;

  padding: 12px 24px;
  border-bottom: 1px solid #e5e7eb;

  background: #fff;
`,hE=l.default.div.withConfig({componentId:"zh__sc-fa5a83d4-1"})`
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: flex-end;
`,hS=l.default.div.withConfig({componentId:"zh__sc-fa5a83d4-2"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,hk=l.default.div.withConfig({componentId:"zh__sc-fa5a83d4-3"})`
  font-size: 14px;
  font-weight: 400;
  font-style: normal;
  line-height: normal;
  color: #737380;
`,hD=l.default.div.withConfig({componentId:"zh__sc-fa5a83d4-4"})`
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
`,hA=l.default.div.withConfig({componentId:"zh__sc-fa5a83d4-5"})`
  width: 1px;
  height: 24px;
  background: #d1d1d9;
`,hO=l.default.div.withConfig({componentId:"zh__sc-fa5a83d4-6"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,hL=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-fa5a83d4-7"})`
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
`,h$=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-fa5a83d4-8"})`
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
`,hR=(0,n.observer)(function(){let e=a.default.modal.documentView,n=(0,i.useRef)(!1),l=e.selectedDocument?.displayStatus!=="COMPLETED",o=e.isServiceWorkerMode&&null===e.selectedDocumentId&&"NEED_UPDATE"===e.selectedDocumentDisplayStatus,r=e.isServiceWorkerMode&&(0,rW.isSalaryProvisionMonthlyScheduleDocument)(e.selectedTemplate?.name??null),s=r?e.selectedOcrFile??e.analyzedOcrFile:null,c=(0,i.useMemo)(()=>r?null!==s?URL.createObjectURL(s):e.monthlyScheduleComparisonResult?.imageUrl??e.selectedDocument?.imageUrl??null:null,[r,e.monthlyScheduleComparisonResult?.imageUrl,e.selectedDocument?.imageUrl,s]),f=e.autocompleteServiceEndReportUserChangeLevelUIState,h=e.autocompleteServiceEndReportStaffOpinionUIState,p=e.autocompleteCaseManagementRecordCaseContentUIState,u=e.shouldShowRetroactiveActualServiceDatePanel,x=e.retroactiveActualServiceDatePanelYearMonth,g=e.isRetroactiveActualServiceDatePanelLoading,m=e.retroactiveActualServiceDatePanelErrorMessage,[j,b]=(0,i.useState)(1),[_,w]=(0,i.useState)(1),[y,v]=(0,i.useState)(null),[C,I]=(0,i.useState)(!1),[z,T]=(0,i.useState)([]),[E,S]=(0,i.useState)(null),[k,D]=(0,i.useState)(null),[A,O]=(0,i.useState)(!1),[L,$]=(0,i.useState)(null),[R,P]=(0,i.useState)(""),[N,M]=(0,i.useState)(""),[F,U]=(0,i.useState)(""),[B,Y]=(0,i.useState)({}),[V,W]=(0,i.useState)(0),[G,K]=(0,i.useState)(null),[X,q]=(0,i.useState)(!1),[Q,Z]=(0,i.useState)(!1),J=(0,i.useRef)(null),ee=(0,i.useRef)(null),et=(0,i.useRef)([]),en=(0,i.useRef)(null),ei=(0,i.useRef)(null),el=()=>{b(1),w(1),v(null),I(!1),T([])},ea=t=>{let n=function(e,t){let n=e.filter(e=>("radio"===e.uiProps.fieldType||"text"===e.uiProps.fieldType||"textarea"===e.uiProps.fieldType)&&e.uiProps.triggerKeys?.includes(rV.default.SOURCE_REQUIRED_VALIDATION)===!0);if(!("NEED_UPDATE"===t&&n.some(e=>e.uiProps.triggerKeys?.includes(rV.default.SOURCE_REQUIRED_VALIDATION_ON_NEED_UPDATE)===!0)||"WAITING_TO_PRINT"===t&&n.some(e=>e.uiProps.triggerKeys?.includes(rV.default.SOURCE_REQUIRED_VALIDATION_ON_WAITING_TO_PRINT)===!0)))return{invalidFieldIds:[],missingItems:[]};let i=new Map;return n.forEach(e=>{let t=rH(e);i.set(t,[...i.get(t)??[],e])}),Array.from(i.values()).reduce((e,t)=>{if(t.some(e=>"radio"===e.uiProps.fieldType?e.value?.trim().toLowerCase()==="true":null!==e.value&&""!==e.value.trim()))return e;let n=t[0];if(void 0===n)return e;let i=rH(n),l=t.find(e=>e.uiProps.label?.group?.name?.trim()!=="")?.uiProps.label?.group?.name.trim()??t.find(e=>e.uiProps.label?.field.name.trim()!=="")?.uiProps.label?.field.name.trim()??t[0]?.fieldKey??i;return{invalidFieldIds:[...e.invalidFieldIds,...t.map(e=>e.id)],missingItems:[...e.missingItems,{key:i,label:l}]}},{invalidFieldIds:[],missingItems:[]})}(e.selectedTemplateFields,e.selectedDocumentDisplayStatus);return 0===n.missingItems.length||(S(n),D(t),!1)},ed=e.selectedTemplateImagePaths,eo=Math.max(ed?.length??0,1),er=Math.min(j,eo);(0,i.useEffect)(()=>{n.current=!1},[e.selectedTemplateId]);let es=e.selectedDocument?.displayStatus==="NEED_MATCHING",ec=e.selectedOcrFile??e.analyzedOcrFile,ef=(0,i.useMemo)(()=>es&&null!==ec?URL.createObjectURL(ec):null,[ec,es]);(0,i.useEffect)(()=>()=>{null!==ef&&URL.revokeObjectURL(ef)},[ef]),(0,i.useEffect)(()=>()=>{null!==s&&null!==c&&URL.revokeObjectURL(c)},[c,s]);let eh=(null===ef?.75:.64)*_,ep=(0,i.useCallback)(e=>{if(e.length<2)return e;let t=1>=Math.max(...e.flatMap(e=>e.vertices).flatMap(e=>[e.x,e.y])),n=G?.width??0,i=G?.height??0,l=n>0&&i>0;return[...e.map(e=>{let a,d,o,r;return{box:e,position:(a=e.vertices.map(e=>e.x),d=e.vertices.map(e=>e.y),o=Math.min(...a),r=Math.min(...d),{left:t||!l?o:o/n,top:t||!l?r:r/i})}})].sort((e,t)=>e.position.top-t.position.top).reduce((e,t)=>{let n=e.at(-1);if(void 0===n)return e.push([t]),e;let i=n[0]?.position.top;return void 0===i||Math.abs(t.position.top-i)>.01?e.push([t]):n.push(t),e},[]).flatMap(e=>e.sort((e,t)=>e.position.left!==t.position.left?e.position.left-t.position.left:e.box.fieldRuntimeKey.localeCompare(t.box.fieldRuntimeKey)).map(({box:e})=>e))},[G]);(0,i.useEffect)(()=>{let e=ee.current;if(null===e)return;let t=e=>{(e.ctrlKey||e.metaKey)&&(e.preventDefault(),w(t=>Math.min(Math.max(t+(e.deltaY<0?.1:-.1),.5),1.5)))};return e.addEventListener("wheel",t,{passive:!1}),()=>{e.removeEventListener("wheel",t)}},[e.status]);let eu=(0,i.useCallback)(e=>{if(0===e.length)return null;let t=e.map(e=>e.x),n=e.map(e=>e.y),i=Math.min(...t),l=Math.max(...t),a=Math.min(...n),d=Math.max(...n);if(!Number.isFinite(i)||!Number.isFinite(l)||!Number.isFinite(a)||!Number.isFinite(d))return null;let o=Math.max(l,d),r=o<=1?1:G?.width??0,s=o<=1?1:G?.height??0;if(r<=0||s<=0)return null;let c=Math.max(i,0)/r*100,f=Math.max(a,0)/s*100,h=(l-i)/r*100,p=(d-a)/s*100;return h<=0||p<=0?null:{left:`${Math.min(c,100)}%`,top:`${Math.min(f,100)}%`,width:`${Math.min(h,100)}%`,height:`${Math.min(p,100)}%`}},[G]),ex=e.isLinkedCompletedMonthlyScheduleDocument?e.monthlyScheduleComparisonResult:null,eg=(0,i.useMemo)(()=>{let e=ex?.unmatchedFieldBoundingBoxes;return void 0===e?null:[...e].sort((e,t)=>e.day!==t.day?e.day-t.day:e.fieldKey.localeCompare(t.fieldKey))},[ex?.unmatchedFieldBoundingBoxes]),em=null===eg?0:Math.min(Math.max(V,0),Math.max(eg.length-1,0)),ej=eg?.[em]??null,eb=eu(ej?.boundingBoxes?.flatMap(e=>{let t=e.normalizedVertices??[];return t.length>0?t:e.vertices??[]})??[]);(0,i.useLayoutEffect)(()=>{let e=en.current,t=ei.current;if(null===e||null===t||null===eb)return;let n=()=>{let n=e.getBoundingClientRect(),i=t.getBoundingClientRect(),l=n.left+Number.parseFloat(eb.left)/100*n.width;q(n.top+Number.parseFloat(eb.top)/100*n.height+Number.parseFloat(eb.height)/100*n.height+i.height>n.bottom),Z(l+i.width>n.right)};n();let i=new ResizeObserver(n);return i.observe(e),i.observe(t),()=>{i.disconnect()}},[eb]);let e_=(0,i.useCallback)((e,t="instant")=>{let n=ee.current,i=et.current[e-1];if(!n||!i)return;let l=Math.max(i.offsetTop-n.offsetTop-12,0);n.scrollTo({top:l,behavior:t})},[]),ew=t=>(-1!==t||!1!==e.canMovePrevTemplate)&&(1!==t||!1!==e.canMoveNextTemplate)&&(-1===t?e.movePrevTemplate():e.moveNextTemplate(),b(1),w(1),v(null),I(!1),T([]),ee.current?.scrollTo({top:0,behavior:"auto"}),!0),ey=e.hasSelectedFieldChanges,ev=async()=>ey?($(-1),O(!0),!1):ew(-1),eC=async()=>ey?($(1),O(!0),!1):ew(1),eI=async()=>{if(!C&&null!==L){if(!ea({type:"move",direction:L}))return void O(!1);I(!0);try{let t=await e.saveSelectedFieldChanges();if(null===t)return;ew(L),$(null),O(!1)}finally{I(!1)}}};(0,i.useEffect)(()=>{let t=t=>{"ready"===e.status&&!1!==e.hasSelectedFieldChanges&&t.preventDefault()};return window.addEventListener("beforeunload",t),()=>{window.removeEventListener("beforeunload",t)}},[e.hasSelectedFieldChanges,e.status]),(0,i.useEffect)(()=>"ready"!==e.status?void e.setToastContainer(null):(e.setToastContainer(J.current),()=>{e.setToastContainer(null)}),[e,e.status]),(0,i.useEffect)(()=>{"ready"===e.status&&!0===u&&e.ensureRetroactiveActualServiceDatePanelState()},[e,e.status,u]);let ez=()=>{if(null===y)return;let e=y.replace(/[^\d]/g,"");if(""===e)return void v(null);let t=Number(e);if(!Number.isFinite(t))return void v(null);let n=Math.min(Math.max(t,1),eo);b(n),v(null),e_(n)};return"ready"!==e.status?null:(0,t.jsx)(d.default,{children:(0,t.jsxs)(hP,{ref:J,children:[(0,t.jsx)(hp,{}),(0,t.jsxs)(hN,{children:[(0,t.jsx)(hz,{isSaving:C,setIsSaving:I,resetLocalStates:el,onRequiredValidation:ea}),(0,t.jsx)(rL,{isOpen:null!==E,missingItems:E?.missingItems??[],isProcessing:C,onClickSecondary:()=>{if(S(null),D(null),null!==k&&"print"!==k){if("close"===k||"save"===k){el(),e.close();return}e.discardSelectedFieldChanges(),ew(k.direction)}},onClickPrimary:()=>{null!==E&&(T(E.invalidFieldIds),S(null),D(null))}}),(0,t.jsxs)(hM,{children:[u?(0,t.jsx)(hj,{value:x??"",disabled:g,errorMessage:m,onChangeYearMonth:t=>{e.applyRetroactiveActualServiceDatePanelYearMonth(t)}}):null,(0,t.jsx)(pd,{type:"button","aria-label":"이전 문서",disabled:e.isTemplateNavigationLocked||!1===e.canMovePrevTemplate,onClick:()=>void ev(),children:(0,t.jsx)(rD.ChevronLeft,{size:24})}),(0,t.jsx)(hF,{ref:ee,onScroll:()=>{let e=ee.current;if(!e)return;let t=e.scrollTop,n=1,i=1/0;et.current.forEach((l,a)=>{if(!l)return;let d=Math.abs(l.offsetTop-e.offsetTop-t);d<i&&(i=d,n=a+1)}),n!==j&&b(n)},children:null!==c?(0,t.jsxs)(hW,{$active:!0,$scale:eh,children:[(0,t.jsx)(pt,{$scale:eh,children:(0,t.jsxs)(pl,{ref:en,children:[(0,t.jsx)(pi,{src:c,alt:"급여 제공 월별 일정표 원본",onLoad:e=>{K({width:e.currentTarget.naturalWidth,height:e.currentTarget.naturalHeight})}}),null!==ej?(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(hZ,{children:null!==eb?(0,t.jsx)(hJ,{style:eb,type:"button",onClick:()=>{},children:(0,t.jsx)(h0,{children:"확인 필요"})}):null})}):null]})}),null!==ej?(0,t.jsxs)(pa,{ref:ei,$centered:null===eb,style:null===eb?void 0:{left:Q?void 0:eb.left,right:Q?`calc(100% - (${eb.left} + ${eb.width}))`:void 0,top:X?eb.top:`calc(${eb.top} + ${eb.height})`,transform:X?"translateY(-100%)":void 0},children:[(0,t.jsxs)(h2,{children:[(0,t.jsx)(h6,{children:`정보 불일치  \xb7  ${em+1} / ${eg?.length??0}`}),(0,t.jsx)(h4,{children:`${ej.day}일 제공 일정 비교`}),(0,t.jsx)(h5,{children:ej.reasons.join("\n")})]}),(0,t.jsxs)(h3,{children:[(0,t.jsx)(h9,{$variant:"manual",children:"수기 작성 서류"}),(0,t.jsx)(h8,{children:""===ej.ocrValue?"-":ej.ocrValue})]}),(0,t.jsxs)(h3,{children:[(0,t.jsx)(h9,{$variant:"voucher",children:"실제 제공 내역"}),(0,t.jsx)(h8,{children:""===ej.actualValue?"-":ej.actualValue})]}),(0,t.jsxs)(h7,{children:[(0,t.jsxs)(pe,{type:"button",disabled:em<=0,onClick:()=>{W(Math.max(em-1,0))},children:[(0,t.jsx)(rz,{sx:{fontSize:16}}),"이전"]}),(0,t.jsxs)(pe,{type:"button",disabled:em>=(eg?.length??0)-1,onClick:()=>{W(Math.min(em+1,Math.max((eg?.length??1)-1,0)))},children:["다음",(0,t.jsx)(au.default,{sx:{fontSize:16}})]})]})]}):null]}):o?(0,t.jsxs)(hU,{children:[(0,t.jsx)(H.default.Contract,{size:24,color:"#494f53"}),(0,t.jsxs)(hB,{children:[(0,t.jsx)(hY,{children:`업로드 된 수기 [${e.selectedTemplate?.name??"서류"}]가 없습니다.`}),(0,t.jsx)(hV,{children:"왼쪽 업로드 필드에서 서류를 업로드해주세요."})]})]}):Array.from({length:eo},(i,a)=>{let d,o,r=a+1,s=e.getSelectedTemplateFieldsByPage(r),c=ep(e.getOcrMismatchBoundingBoxesByPage(r)),u=Math.min(Math.max(B[r]??0,0),Math.max(c.length-1,0)),x=c[u]??null,g=null===x?null:eu(x.vertices),m=x?.fieldRuntimeKey.split("::")[1]??null,j=null===m?null:s.find(e=>e.fieldKey===m)?.uiProps.label?.field.name??null;return(0,t.jsxs)(hH,{children:[null!==ef&&(0,t.jsxs)(hG,{children:[(0,t.jsx)(hX,{$variant:"manual",children:"수기서류 원본 · 비교 근거 / 수정 불가"}),(0,t.jsxs)(hK,{$scale:eh,children:[(0,t.jsxs)(hq,{$scale:eh,children:[(0,t.jsx)(hQ,{src:ef,alt:"대조 이미지",onLoad:e=>{K({width:e.currentTarget.naturalWidth,height:e.currentTarget.naturalHeight})}}),(0,t.jsx)(hZ,{children:c.map((e,n)=>{let i=eu(e.vertices);if(null===i)return null;let l=e.vertices.map(e=>`${e.x}:${e.y}`).join("|");return(0,t.jsx)(hJ,{style:i,type:"button",onClick:()=>{Y(e=>({...e,[r]:n}))},children:u===n?(0,t.jsx)(h0,{children:"확인 필요"}):null},`ocr-mismatch-${r}-${e.fieldRuntimeKey}-${l}`)})})]}),null!==x&&null!==g&&(0,t.jsxs)(h1,{style:{left:g.left,top:`calc(${g.top} + ${g.height})`},children:[(0,t.jsxs)(h2,{children:[(0,t.jsx)(h6,{children:`정보 불일치  \xb7  ${u+1} / ${c.length}`}),(0,t.jsxs)(h4,{children:[j??m??"필드 값"," ","비교"]}),(0,t.jsx)(h5,{children:"수기 서류 인식값과 전자 바우처 엑셀 기반 값이 다릅니다."})]}),(0,t.jsxs)(h3,{children:[(0,t.jsx)(h9,{$variant:"manual",children:"수기 작성 서류"}),(0,t.jsx)(h8,{children:""===x.manualValue?"-":x.manualValue})]}),(0,t.jsxs)(h3,{children:[(0,t.jsx)(h9,{$variant:"voucher",children:"전산 데이터 서류"}),(0,t.jsx)(h8,{children:""===x.electronicValue?"-":x.electronicValue})]}),(0,t.jsxs)(h7,{children:[(0,t.jsxs)(pe,{type:"button",disabled:u<=0,onClick:()=>{Y(e=>({...e,[r]:Math.max(u-1,0)}))},children:[(0,t.jsx)(rz,{sx:{fontSize:16}}),"이전"]}),(0,t.jsxs)(pe,{type:"button",disabled:u>=c.length-1,onClick:()=>{Y(e=>({...e,[r]:Math.min(u+1,c.length-1)}))},children:["다음",(0,t.jsx)(au.default,{sx:{fontSize:16}})]})]})]})]})]}),(0,t.jsxs)(hG,{children:[null!==ef&&(0,t.jsx)(hX,{$variant:"voucher",children:"전자바우처 엑셀 기반 · 비교 근거 / 수정 불가"}),(0,t.jsx)(hW,{$active:!0,$scale:eh,ref:e=>{et.current[a]=e},children:(0,t.jsx)(pt,{$scale:eh,children:null===(o="string"==typeof(d=ed?.[a])?""===d?null:d:null)?(0,t.jsx)(pn,{}):(0,t.jsx)(rO.default,{imagePath:o,onTemplateImageLoadError:()=>{n.current||(n.current=!0,e.refetchTemplateListForPreview())},fields:s,readOnly:!l,isFieldValidationError:e=>z.includes(e.id),onAssistTriggerClick:({triggerKey:t,field:n})=>{if(t===rV.default.SOURCE_CLICK_AUTOCOMPLETE_SERVICE_END_REPORT_USER_CHANGE_LEVEL_BUTTON){P(e.getAutocompleteServiceEndReportUserChangeLevelTargetValue()),e.openAutocompleteServiceEndReportUserChangeLevelDrawer(n);return}if(t===rV.default.SOURCE_CLICK_AUTOCOMPLETE_SERVICE_END_REPORT_STAFF_OPINION_BUTTON){M(""),e.openAutocompleteServiceEndReportStaffOpinionDrawer(n);return}if(t===rV.default.SOURCE_CLICK_AUTOCOMPLETE_CASE_MANAGEMENT_RECORD_CASE_CONTENT_BUTTON){U(e.getAutocompleteCaseManagementRecordCaseContentTargetValue()),e.openAutocompleteCaseManagementRecordCaseContentDrawer(n);return}t===rV.default.SOURCE_CLICK_SELECT_ALL_GENERAL_MEAL?e.selectAllMealTypeForSelectedDocument("GENERAL"):t===rV.default.SOURCE_CLICK_SELECT_ALL_THERAPEUTIC_MEAL?e.selectAllMealTypeForSelectedDocument("THERAPEUTIC"):t===rV.default.SOURCE_CLICK_SELECT_ALL_TEXTURE_MODIFIED_MEAL&&e.selectAllMealTypeForSelectedDocument("TEXTURE_MODIFIED")},isAssistButtonDisabled:({triggerKey:e})=>e===rV.default.SOURCE_CLICK_AUTOCOMPLETE_SERVICE_END_REPORT_USER_CHANGE_LEVEL_BUTTON?!l||!0===f.isDrawerOpen:e===rV.default.SOURCE_CLICK_AUTOCOMPLETE_SERVICE_END_REPORT_STAFF_OPINION_BUTTON?!l||!0===h.isDrawerOpen:e===rV.default.SOURCE_CLICK_AUTOCOMPLETE_CASE_MANAGEMENT_RECORD_CASE_CONTENT_BUTTON?!l||!0===p.isDrawerOpen:void 0,resolveAssistButtonLabel:({triggerKey:t})=>t===rV.default.SOURCE_CLICK_AUTOCOMPLETE_SERVICE_END_REPORT_USER_CHANGE_LEVEL_BUTTON?e.autocompleteServiceEndReportUserChangeLevelButtonLabel:t===rV.default.SOURCE_CLICK_AUTOCOMPLETE_SERVICE_END_REPORT_STAFF_OPINION_BUTTON?e.autocompleteServiceEndReportStaffOpinionButtonLabel:t===rV.default.SOURCE_CLICK_AUTOCOMPLETE_CASE_MANAGEMENT_RECORD_CASE_CONTENT_BUTTON?e.autocompleteCaseManagementRecordCaseContentButtonLabel:t===rV.default.SOURCE_CLICK_SELECT_ALL_GENERAL_MEAL?"일반식 전체":t===rV.default.SOURCE_CLICK_SELECT_ALL_THERAPEUTIC_MEAL?"치료식 전체":t===rV.default.SOURCE_CLICK_SELECT_ALL_TEXTURE_MODIFIED_MEAL?"저작 및 연하 도움식 전체":void 0,resolveAssistButtonChecked:({triggerKey:t})=>t===rV.default.SOURCE_CLICK_SELECT_ALL_GENERAL_MEAL?e.isGeneralMealTypeAllSelected:t===rV.default.SOURCE_CLICK_SELECT_ALL_THERAPEUTIC_MEAL?e.isTherapeuticMealTypeAllSelected:t===rV.default.SOURCE_CLICK_SELECT_ALL_TEXTURE_MODIFIED_MEAL?e.isTextureModifiedMealTypeAllSelected:void 0,isFieldEditable:t=>e.isSelectedFieldEditable(t),isFieldAutoFilled:t=>e.isSelectedFieldAutoFilled(t),selectOptionsCacheKey:e.selectedDocumentId??`template:${e.selectedTemplateId??""}`,onLoadSelectOptions:t=>e.getSelectFieldCandidates(t),onChangeField:(t,n,i)=>{if("radio"===t.uiProps.fieldType){T(n=>n.filter(n=>{let i=e.selectedTemplateFields.find(e=>e.id===n),l=i?.uiProps.fieldType==="radio"?i:null;return(null!==l&&"groupKey"in l.uiProps?l.uiProps.groupKey:null)!==("groupKey"in t.uiProps?t.uiProps.groupKey:null)})),"true"===n&&e.toggleSelectedRadioGroup(t);return}T(e=>e.includes(t.id)?e.filter(e=>e!==t.id):e),e.updateSelectedFieldValue({page:t.page,fieldKey:t.fieldKey,value:n,selectedId:i})}})})})]})]},`screen-page-${r}`)})}),(0,t.jsx)(pd,{type:"button","aria-label":"다음 문서",disabled:e.isTemplateNavigationLocked||!1===e.canMoveNextTemplate,onClick:()=>void eC(),$right:!0,children:(0,t.jsx)(rA.ChevronRight,{size:24})}),(0,t.jsx)(po,{children:(0,t.jsxs)(pr,{children:[(0,t.jsxs)(ps,{type:"button",disabled:1===er,onClick:()=>{let e=Math.max(er-1,1);b(e),v(null),e_(e)},children:[(0,t.jsx)(rk,{size:16,color:1===er?"#9ca3af":"#0a0a0a"}),(0,t.jsx)(pc,{$muted:1===er,children:"이전"})]}),(0,t.jsxs)(pf,{children:[(0,t.jsx)(ph,{children:(0,t.jsx)(pp,{type:"text",inputMode:"numeric","aria-label":"페이지 번호 입력",value:y??String(er),onFocus:()=>{v(String(er))},onChange:e=>{v(e.target.value)},onBlur:ez,onKeyDown:e=>{"Enter"===e.key&&(e.preventDefault(),ez(),e.currentTarget.blur())}})}),(0,t.jsx)(ph,{children:(0,t.jsx)(px,{children:"/"})}),(0,t.jsx)(ph,{children:(0,t.jsx)(pg,{children:eo})})]}),(0,t.jsxs)(ps,{type:"button",disabled:er===eo,onClick:()=>{let e=Math.min(er+1,eo);b(e),v(null),e_(e)},children:[(0,t.jsx)(pc,{$muted:er===eo,children:"다음"}),(0,t.jsx)(rE,{size:16,color:er===eo?"#9ca3af":"#0a0a0a"})]})]})}),!0===f.isDrawerOpen?(0,t.jsx)(c0,{value:R,onChange:P,onClose:()=>e.closeAutocompleteServiceEndReportUserChangeLevelDrawer(),onApply:()=>e.applyAutocompleteServiceEndReportUserChangeLevelResult(R)}):null,!0===h.isDrawerOpen?(0,t.jsx)(cJ,{value:N,autoFilledReferenceValue:e.autocompleteServiceEndReportStaffOpinionAutoFilledReferenceValue,keywords:e.autocompleteServiceEndReportStaffOpinionKeywords,isKeywordListLoading:e.isAutocompleteServiceEndReportStaffOpinionKeywordListLoading,isKeywordCreating:e.isAutocompleteServiceEndReportStaffOpinionKeywordCreating,isGenerating:e.isAutocompleteServiceEndReportStaffOpinionGenerating,onAddKeyword:t=>e.createAutocompleteServiceEndReportStaffOpinionKeyword(t),onGenerate:t=>e.generateAutocompleteServiceEndReportStaffOpinionDraft(t),onChange:M,onClose:()=>e.closeAutocompleteServiceEndReportStaffOpinionDrawer(),onApply:()=>e.applyAutocompleteServiceEndReportStaffOpinionResult(N)}):null,!0===p.isDrawerOpen?(0,t.jsx)(cZ,{value:F,onChange:U,onClose:()=>e.closeAutocompleteCaseManagementRecordCaseContentDrawer(),onApply:()=>e.applyAutocompleteCaseManagementRecordCaseContentResult(F)}):null]}),(0,t.jsx)(rG,{isOpen:A,actionType:"move",isProcessing:C,onClickSecondary:()=>{$(null),O(!1),null!==L&&(e.discardSelectedFieldChanges(),ew(L))},onClickPrimary:()=>{eI()}})]})]})})}),hP=l.default.div.withConfig({componentId:"zh__sc-7a537607-0"})`
  position: relative;

  overflow: hidden;
  display: flex;
  flex-shrink: 0;
  align-items: flex-start;

  width: 1712px;
  min-width: 1712px;
  border-radius: 8px;
`,hN=l.default.div.withConfig({componentId:"zh__sc-7a537607-1"})`
  position: relative;

  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;

  height: 989px;
`,hM=l.default.div.withConfig({componentId:"zh__sc-7a537607-2"})`
  position: relative;

  display: flex;
  flex: 1 0 0;
  align-self: stretch;

  min-height: 0;
`,hF=l.default.div.withConfig({componentId:"zh__sc-7a537607-3"})`
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
`,hU=l.default.div.withConfig({componentId:"zh__sc-7a537607-4"})`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: center;

  min-width: 0;
`,hB=l.default.div.withConfig({componentId:"zh__sc-7a537607-5"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;

  width: 100%;

  color: #494f53;
  text-align: center;
`,hY=l.default.p.withConfig({componentId:"zh__sc-7a537607-6"})`
  margin: 0;
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
`,hV=l.default.p.withConfig({componentId:"zh__sc-7a537607-7"})`
  margin: 0;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
`,hW=l.default.div.withConfig({componentId:"zh__sc-7a537607-8"})`
  position: relative;

  display: ${({$active:e})=>e?"block":"none"};

  width: calc(210mm * ${({$scale:e})=>e});
  height: calc(297mm * ${({$scale:e})=>e});

  box-shadow: 0 0 8px 0 rgb(0 0 0 / 10%);
`,hH=l.default.div.withConfig({componentId:"zh__sc-7a537607-9"})`
  display: flex;
  gap: 10px;
  align-items: flex-start;
`,hG=l.default.div.withConfig({componentId:"zh__sc-7a537607-10"})`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
`,hK=l.default.div.withConfig({componentId:"zh__sc-7a537607-11"})`
  position: relative;
  width: calc(210mm * ${({$scale:e})=>e});
  height: calc(297mm * ${({$scale:e})=>e});
`,hX=l.default.div.withConfig({componentId:"zh__sc-7a537607-12"})`
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
`,hq=l.default.div.withConfig({componentId:"zh__sc-7a537607-13"})`
  position: relative;

  overflow: hidden;

  width: calc(210mm * ${({$scale:e})=>e});
  height: calc(297mm * ${({$scale:e})=>e});
  border: 1px solid #e5e7eb;
  border-radius: 8px;

  background: #fff;
  box-shadow: 0 0 8px 0 rgb(0 0 0 / 8%);
`,hQ=l.default.img.withConfig({componentId:"zh__sc-7a537607-14"})`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
`,hZ=l.default.div.withConfig({componentId:"zh__sc-7a537607-15"})`
  pointer-events: none;
  position: absolute;
  inset: 0;
`,hJ=l.default.button.withConfig({componentId:"zh__sc-7a537607-16"})`
  pointer-events: auto;
  cursor: pointer;

  position: absolute;

  padding: 0;
  border: 2px solid #4f39f6;
  border-radius: 2px;

  background: transparent;
`,h0=l.default.span.withConfig({componentId:"zh__sc-7a537607-17"})`
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
`,h1=l.default.div.withConfig({componentId:"zh__sc-7a537607-18"})`
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
`,h2=l.default.div.withConfig({componentId:"zh__sc-7a537607-19"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,h6=l.default.div.withConfig({componentId:"zh__sc-7a537607-20"})`
  font-size: 12px;
  font-weight: 700;
  line-height: normal;
  color: #e8660f;
`,h4=l.default.div.withConfig({componentId:"zh__sc-7a537607-21"})`
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
  color: #1a1729;
`,h5=l.default.div.withConfig({componentId:"zh__sc-7a537607-22"})`
  font-size: 12px;
  font-weight: 400;
  line-height: normal;
  color: #6b697a;
`,h3=l.default.div.withConfig({componentId:"zh__sc-7a537607-23"})`
  display: flex;
  flex-direction: column;
  gap: 5px;

  width: 100%;
  padding: 12px 14px;
  border: 1px solid #e5e9ef;
  border-radius: 8px;

  background: #fff;
`,h9=l.default.div.withConfig({componentId:"zh__sc-7a537607-24"})`
  font-size: 12px;
  font-weight: 500;
  line-height: normal;
  color: ${({$variant:e})=>"manual"===e?"#e8660f":"#5942f2"};
`,h8=l.default.div.withConfig({componentId:"zh__sc-7a537607-25"})`
  font-size: 12px;
  font-weight: 700;
  line-height: normal;
  color: #1a1729;
`,h7=l.default.div.withConfig({componentId:"zh__sc-7a537607-26"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,pe=l.default.button.withConfig({componentId:"zh__sc-7a537607-27"})`
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
`,pt=l.default.div.withConfig({componentId:"zh__sc-7a537607-28"})`
  transform-origin: top left;
  transform: scale(${({$scale:e})=>e});
  width: 210mm;
  height: 297mm;
`,pn=l.default.div.withConfig({componentId:"zh__sc-7a537607-29"})`
  width: 210mm;
  height: 297mm;
  background: #f9fafb;
`,pi=l.default.img.withConfig({componentId:"zh__sc-7a537607-30"})`
  display: block;

  width: 210mm;
  height: 297mm;

  object-fit: contain;
  background: #fff;
`,pl=l.default.div.withConfig({componentId:"zh__sc-7a537607-31"})`
  position: relative;
  width: 210mm;
  height: 297mm;
`,pa=(0,l.default)(h1).withConfig({componentId:"zh__sc-7a537607-32"})`
  ${({$centered:e})=>e?`
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      `:""}
`,pd=l.default.button.withConfig({componentId:"zh__sc-7a537607-33"})`
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
`,po=l.default.div.withConfig({componentId:"zh__sc-7a537607-34"})`
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
`,pr=l.default.div.withConfig({componentId:"zh__sc-7a537607-35"})`
  pointer-events: auto;

  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: center;

  padding: 8px 16px;
  border: 1px solid #e5e9ef;
  border-radius: 99px;

  background: #fff;
`,ps=l.default.button.withConfig({componentId:"zh__sc-7a537607-36"})`
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
`,pc=l.default.span.withConfig({componentId:"zh__sc-7a537607-37"})`
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 16px;
  color: ${({$muted:e})=>!0===e?"#9ca3af":"#0a0a0a"};
  letter-spacing: -1px;
`,pf=l.default.div.withConfig({componentId:"zh__sc-7a537607-38"})`
  display: flex;
  gap: 2px;
  align-items: center;
`,ph=l.default.div.withConfig({componentId:"zh__sc-7a537607-39"})`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 20px;
`,pp=l.default.input.withConfig({componentId:"zh__sc-7a537607-40"})`
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
`,pu=l.default.span.withConfig({componentId:"zh__sc-7a537607-41"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: 16px;
  text-align: center;
  letter-spacing: -1px;
`,px=(0,l.default)(pu).withConfig({componentId:"zh__sc-7a537607-42"})`
  color: #0a0a0a;
`,pg=(0,l.default)(pu).withConfig({componentId:"zh__sc-7a537607-43"})`
  color: #0a0a0a;
`;var pm=e.i(89656),pj=e.i(6412);let pb=[".xls",".xlsx",".xlsm"];function p_(e){let t=e.name.lastIndexOf("."),n=-1===t?"":e.name.slice(t).toLowerCase();return pb.includes(n)}let pw=(0,n.observer)(function(){let e=a.default.modal.excelFileUpload,n=(0,i.useRef)(null),[l,o]=(0,i.useState)(!1),[r,s]=(0,i.useState)(!1);if(!1===e.isOpen)return null;let c=t=>{e.addFiles(t.filter(p_))},f=async()=>{if(null!==e.category&&0!==e.files.length&&!r){for(let t of(s(!0),e.files)){let n=function(e){let t=e.name.slice(e.name.lastIndexOf(".")).toLowerCase();return".xls"===t?pj.default.XLS:".xlsm"===t?pj.default.XLSM:pj.default.XLSX}(t),[i,l]=await ah.default.upload.createPresignedUploadUrl({category:e.category,contentType:n});if(null!==i){s(!1),a.default.ui.layout.toast.error(`${t.name} 업로드 URL 생성에 실패했습니다.`);return}let[d]=await ah.default.upload.putFileToPresignedUploadUrl({uploadUrl:l.uploadUrl,contentType:n,file:t});if(null!==d){s(!1),a.default.ui.layout.toast.error(`${t.name} 업로드에 실패했습니다.`);return}}s(!1),a.default.ui.layout.toast.success("엑셀 파일 업로드를 완료했습니다."),e.close()}};return(0,t.jsx)(d.default,{children:(0,t.jsxs)(pm.Container,{children:[(0,t.jsxs)(pm.Header,{children:[(0,t.jsx)(pm.HeaderLeft,{children:(0,t.jsx)(pm.HeaderTitle,{children:"엑셀 파일 업로드하기"})}),(0,t.jsx)(pm.HeaderRight,{children:(0,t.jsxs)(pv,{type:"button",onClick:e.close,disabled:r,children:[(0,t.jsx)(W.X,{size:20}),"닫기"]})})]}),(0,t.jsxs)(pC,{children:[(0,t.jsx)(pI,{children:"엑셀 파일을 업로드해주세요."}),(0,t.jsxs)(pz,{$isDragging:l,onClick:()=>{!1===r&&n.current?.click()},onDragOver:e=>{e.preventDefault(),o(!0)},onDragLeave:e=>{e.preventDefault(),o(!1)},onDrop:e=>{e.preventDefault(),o(!1),c(Array.from(e.dataTransfer.files))},children:[(0,t.jsx)(py,{ref:n,type:"file",accept:".xls,.xlsx,.xlsm",multiple:!0,onChange:e=>{c(Array.from(e.target.files??[])),e.target.value=""}}),0===e.files.length?(0,t.jsx)(pT,{children:(0,t.jsx)(ei.Upload,{size:20})}):(0,t.jsx)(pD,{children:e.files.map(n=>{var i;return(0,t.jsxs)(pA,{children:[(0,t.jsxs)(pO,{children:[(0,t.jsx)(pL,{children:n.name}),(0,t.jsx)(p$,{children:(i=n.size,`${Math.ceil(i/1024/1024)}MB`)})]}),(0,t.jsxs)(pR,{type:"button",onClick:t=>{t.stopPropagation(),e.removeFile(n)},disabled:r,children:["삭제",(0,t.jsx)(W.X,{size:16})]})]},`${n.name}-${n.size}-${n.lastModified}`)})}),(0,t.jsxs)(pE,{children:[(0,t.jsx)(pS,{children:l?"파일을 여기에 놓으면 업로드 됩니다.":"이곳에 파일을 끌어다 놓거나 (드래그 앤 드롭), 클릭하여 업로드하세요."}),(0,t.jsx)(pk,{children:e.files.length>0?"여러 파일을 추가로 업로드할 수 있습니다.":"지원 파일 형식: 엑셀(.xls, .xlsx, .xlsm)"})]})]})]}),(0,t.jsxs)(pm.Footer,{children:[(0,t.jsx)(pP,{type:"button",onClick:()=>e.clearFiles(),disabled:0===e.files.length||r,children:"다시 업로드하기"}),(0,t.jsxs)(pN,{type:"button",onClick:()=>void f(),disabled:0===e.files.length||r,children:[(0,t.jsx)(j.Check,{size:20}),r?"업로드 중":"업로드 완료하기"]})]})]})})}),py=l.default.input.withConfig({componentId:"zh__sc-816f3394-0"})`
  display: none;
`,pv=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-816f3394-1"})`
  ${pm.btnStyle}
  color: #4f39f6;
`,pC=(0,l.default)(pm.Body).withConfig({componentId:"zh__sc-816f3394-2"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  justify-content: center;

  min-height: 457px;
  padding: 32px 24px;

  background: #f9fafb;
`,pI=l.default.p.withConfig({componentId:"zh__sc-816f3394-3"})`
  width: 100%;
  margin: 0;

  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  color: #101828;
  text-align: center;
`,pz=l.default.div.withConfig({componentId:"zh__sc-816f3394-4"})`
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
`,pT=l.default.div.withConfig({componentId:"zh__sc-816f3394-5"})`
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: center;
`,pE=l.default.div.withConfig({componentId:"zh__sc-816f3394-6"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
  align-self: stretch;
`,pS=l.default.p.withConfig({componentId:"zh__sc-816f3394-7"})`
  margin: 0;

  font-size: 14px;
  font-weight: 700;
  line-height: 24px;
  color: #4f39f6;
  text-align: center;
`,pk=l.default.p.withConfig({componentId:"zh__sc-816f3394-8"})`
  margin: 0;
  font-size: 14px;
  line-height: 24px;
  color: #99a1af;
`,pD=l.default.div.withConfig({componentId:"zh__sc-816f3394-9"})`
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
`,pA=l.default.div.withConfig({componentId:"zh__sc-816f3394-10"})`
  display: flex;
  flex-shrink: 0;
  gap: 24px;
  align-items: center;

  padding: 12px 16px;
  border-radius: 8px;

  background: #f6f8fb;
`,pO=l.default.div.withConfig({componentId:"zh__sc-816f3394-11"})`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
`,pL=l.default.p.withConfig({componentId:"zh__sc-816f3394-12"})`
  overflow: hidden;

  max-width: 196px;
  margin: 0;

  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: #0a0a0a;
  text-overflow: ellipsis;
  white-space: nowrap;
`,p$=l.default.p.withConfig({componentId:"zh__sc-816f3394-13"})`
  margin: 0;

  font-size: 16px;
  font-weight: 400;
  line-height: 18px;
  color: #0a0a0a;
`,pR=l.default.button.withConfig({componentId:"zh__sc-816f3394-14"})`
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
`,pP=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-816f3394-15"})`
  height: 36px;
  padding: 8px 16px;
`,pN=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-816f3394-16"})`
  gap: 4px;
  height: 36px;
  padding: 8px 16px;
  border-radius: 4px;
`,{SERVICE_TYPE:pM,BANK_NAME:pF}=el.default.enums;function pU(){let e=a.default.modal.organization.accountAdd,n="edit"===e.mode,l=(a.default.data.organization.serviceList.data?.serviceList??[]).filter(e=>!0===e.operatingStatus),o=n?e.serviceType:l[0]?.type??e.serviceType,[r,s]=(0,i.useState)(o),[c,f]=(0,i.useState)(e.accountNumber),[h,p]=(0,i.useState)(e.bankName),[u,x]=(0,i.useState)(e.accountHolder),[g,m]=(0,i.useState)(e.useFlag),[j,b]=(0,i.useState)(""),[_,w]=(0,i.useState)(""),[y,v]=(0,i.useState)(!1),C=c.trim(),I=u.trim(),z=e.accountNumber.trim(),T=e.accountHolder.trim(),E=r!==e.serviceType||C!==z||h!==e.bankName||I!==T||g!==e.useFlag,S=()=>{y||(s(e.serviceType),f(e.accountNumber),p(e.bankName),x(e.accountHolder),m(e.useFlag),b(""),w(""),e.close())},k=async()=>{if(y)return;let t=c.trim(),i=u.trim(),l=a.default.organizationSetting.staff.organizationId,d=""===t?"필수 입력값입니다.":"",o=""===i?"필수 입력값입니다.":"";if(b(d),w(o),""!==d||""!==o)return;if(null===l)return void a.default.ui.layout.toast.error(n?"기관 식별자가 없어 계좌를 수정할 수 없습니다.":"기관 식별자가 없어 계좌를 생성할 수 없습니다.");b(""),w(""),v(!0);let s={serviceType:r,accountNumber:t,bankName:h,accountHolder:i,useFlag:g},[f]=n&&null!==e.accountId?await a.default.data.organization.bankAccountList.patch({orgId:l,accountId:e.accountId,payload:s}):await a.default.data.organization.bankAccountList.create({orgId:l,payload:s});if(null!==f){v(!1),a.default.ui.layout.toast.error(f.message);return}let p=a.default.data.organization.cardList.query;null!==p&&p.orgId===l&&await a.default.data.organization.cardList.refetch(),v(!1),S()};return(0,t.jsx)(d.default,{children:(0,t.jsxs)(pm.Container,{children:[(0,t.jsxs)(pm.Header,{children:[(0,t.jsx)(pm.HeaderLeft,{children:(0,t.jsx)(pm.HeaderTitle,{children:n?"계좌 정보 수정하기":"계좌 정보 추가하기"})}),(0,t.jsx)(pm.HeaderRight,{children:(0,t.jsxs)(pB,{onClick:S,disabled:y,children:[(0,t.jsx)(iq.default,{sx:{fontSize:20}}),"닫기"]})})]}),(0,t.jsxs)(pm.Body,{children:[(0,t.jsxs)(pm.BodyRow,{children:[(0,t.jsx)(pm.BodyRowLabel,{children:"서비스 종류를 선택해주세요."}),(0,t.jsx)(pY,{value:r,onChange:e=>{let t=e.target.value;t in pM&&s(t)},children:l.map(e=>(0,t.jsxs)("option",{value:e.type,children:[pM[e.type].label," 서비스"]},e.type))})]}),(0,t.jsxs)(pm.BodyRow,{children:[(0,t.jsx)(pm.BodyRowLabel,{children:"계좌번호를 입력해주세요."}),(0,t.jsx)(pV,{placeholder:"000-0000-0000-00",value:c,onChange:e=>{b(""),f(e.target.value.replace(/[^0-9-]/g,""))}}),(0,t.jsx)(pm.BodyRowErrorText,{$isVisible:j.trim().length>0,children:j})]}),(0,t.jsxs)(pm.BodyRow,{children:[(0,t.jsx)(pm.BodyRowLabel,{children:"은행을 선택해주세요."}),(0,t.jsx)(pY,{value:h,onChange:e=>{let t=e.target.value;t in pF&&p(t)},children:Object.entries(pF).map(([e,n])=>(0,t.jsx)("option",{value:e,children:n.label},e))})]}),(0,t.jsxs)(pm.BodyRow,{children:[(0,t.jsx)(pm.BodyRowLabel,{children:"예금주를 입력해주세요."}),(0,t.jsx)(pV,{placeholder:"기관명 또는 성명",value:u,onChange:e=>{w(""),x(e.target.value)}}),(0,t.jsx)(pm.BodyRowErrorText,{$isVisible:_.trim().length>0,children:_})]}),(0,t.jsxs)(pm.BodyRow,{children:[(0,t.jsx)(pm.BodyRowLabel,{children:"서류 반영 여부를 선택해주세요."}),(0,t.jsxs)(pm.RadioCheckContainer,{children:[(0,t.jsxs)(pm.RadioCheckLabel,{children:[(0,t.jsx)(pW,{checked:g,onChange:()=>{m(!0)}}),"반영"]}),(0,t.jsxs)(pm.RadioCheckLabel,{children:[(0,t.jsx)(pW,{checked:!1===g,onChange:()=>{m(!1)}}),"미반영"]})]})]})]}),(0,t.jsxs)(pm.Footer,{children:[(0,t.jsx)(pH,{onClick:()=>{y||(s(o),f(""),p("NONGHYUP"),x(""),m(!0),b(""),w(""))},disabled:y,children:"내용 삭제 후 새로 입력 (초기화)"}),(0,t.jsxs)(pG,{onClick:()=>{k()},disabled:y||n&&!1===E,children:[(0,t.jsx)(lO.default,{sx:{fontSize:20}}),"저장"]})]})]})})}let pB=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-e7085db1-0"})`
  ${pm.btnStyle}
`,pY=(0,l.default)(o.default.Input.Select).withConfig({componentId:"zh__sc-e7085db1-1"})`
  ${pm.inputStyle}
  width: 200px;
`,pV=(0,l.default)(o.default.Input.Text).withConfig({componentId:"zh__sc-e7085db1-2"})`
  ${pm.inputStyle}
  width: 100%;
`,pW=(0,l.default)(o.default.Input.Radio).withConfig({componentId:"zh__sc-e7085db1-3"})``,pH=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-e7085db1-4"})`
  ${pm.btnStyle}
`,pG=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-e7085db1-5"})`
  ${pm.btnStyle}
`,pK=(0,n.observer)(function(){return"ready"!==a.default.modal.organization.accountAdd.status?null:(0,t.jsx)(pU,{})}),pX=(0,nF.default)((0,t.jsx)("path",{d:"M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3z"}),"OpenInNew"),{CARD_USAGE:pq,BANK_NAME:pQ,SERVICE_TYPE:pZ}=el.default.enums;function pJ(){let e=a.default.modal.organization.cardAdd,n="edit"===e.mode,l=a.default.organizationSetting.staff.organizationId,o=a.default.data.organization.bankAccountList,r=o.data??[],[s,c]=(0,i.useState)(e.cardUsage),[f,h]=(0,i.useState)(""===e.bankAccountId?tt.SELECT_EMPTY_VALUE:e.bankAccountId),[p,u]=(0,i.useState)(e.cardNumberHead),[x,g]=(0,i.useState)(e.cardNumberTail),[m,j]=(0,i.useState)(""),[b,_]=(0,i.useState)(!1),[w,y]=(0,i.useState)(!1),[v,C]=(0,i.useState)(!1),I=f===tt.SELECT_EMPTY_VALUE?"":f,z=s!==e.cardUsage||I!==e.bankAccountId||p!==e.cardNumberHead||x!==e.cardNumberTail;(0,i.useEffect)(()=>{if(null===l)return void o.reset();let e=o.query;(null===e||e.orgId!==l)&&o.setQuery({orgId:l})},[o,l]);let T=()=>{v||(c(e.cardUsage),h(""===e.bankAccountId?tt.SELECT_EMPTY_VALUE:e.bankAccountId),u(e.cardNumberHead),g(e.cardNumberTail),j(""),_(!1),y(!1),e.close())},E=async()=>{if(v||n&&!1===z)return;let t=4!==p.length,i=x.length<3||x.length>4;if(_(t),y(i),j(t||i?"유효한 카드번호 형식이 아닙니다.":""),t||i)return;if(null===l)return void a.default.ui.layout.toast.error(n?"기관 식별자가 없어 카드를 수정할 수 없습니다.":"기관 식별자가 없어 카드를 생성할 수 없습니다.");j(""),C(!0);let d={cardNumber:`${p}-****-****-${x}`,bankAccountId:f===tt.SELECT_EMPTY_VALUE?void 0:f,cardUsage:s},[o]=n&&null!==e.cardId?await a.default.data.organization.cardList.patch({orgId:l,cardId:e.cardId,payload:d}):await a.default.data.organization.cardList.create({orgId:l,payload:d});if(null!==o){C(!1),a.default.ui.layout.toast.error(o.message);return}C(!1),T()};return(0,t.jsx)(d.default,{children:(0,t.jsxs)(pm.Container,{children:[(0,t.jsxs)(pm.Header,{children:[(0,t.jsx)(pm.HeaderLeft,{children:(0,t.jsx)(pm.HeaderTitle,{children:n?"카드 정보 수정하기":"카드 정보 추가하기"})}),(0,t.jsx)(pm.HeaderRight,{children:(0,t.jsxs)(p0,{onClick:T,disabled:v,children:[(0,t.jsx)(iq.default,{sx:{fontSize:20}}),"닫기"]})})]}),(0,t.jsxs)(pm.Body,{children:[(0,t.jsxs)(pm.BodyRow,{children:[(0,t.jsx)(pm.BodyRowLabel,{children:"카드번호의 앞 4자리와 끝 3~4자리를 입력해주세요."}),(0,t.jsxs)(p6,{children:[(0,t.jsx)(p4,{$hasError:b,placeholder:"0000",maxLength:4,value:p,onChange:e=>{u(e.target.value.replace(/[^0-9]/g,"")),_(!1),j(w?"유효한 카드번호 형식이 아닙니다.":"")}}),(0,t.jsx)(p4,{placeholder:"****",value:"****",disabled:!0}),(0,t.jsx)(p4,{placeholder:"****",value:"****",disabled:!0}),(0,t.jsx)(p4,{$hasError:w,placeholder:"0000",maxLength:4,value:x,onChange:e=>{g(e.target.value.replace(/[^0-9]/g,"")),y(!1),j(b?"유효한 카드번호 형식이 아닙니다.":"")}})]}),(0,t.jsx)(pm.BodyRowErrorText,{$isVisible:m.trim().length>0,children:m}),(0,t.jsx)(p5,{$isVisible:0===m.trim().length,children:"⚠ 가운데 8자리는 입력하지 않습니다."})]}),(0,t.jsxs)(pm.BodyRow,{children:[(0,t.jsx)(pm.BodyRowLabel,{children:"카드와 연결된 계좌가 있는 경우, 등록된 계좌를 선택해주세요."}),(0,t.jsxs)(p2,{$isEmptySelected:f===tt.SELECT_EMPTY_VALUE,value:f,onChange:e=>{h(e.target.value)},disabled:"loading"===o.status,children:[(0,t.jsx)("option",{value:tt.SELECT_EMPTY_VALUE,disabled:!0,children:"계좌 없음"}),r.map(e=>(0,t.jsxs)("option",{value:e.id,children:[e.serviceType?`${pZ[e.serviceType].label} 서비스 `:"- ",e.accountNumber," (은행 ",pQ[e.bankName].label,", 예금주"," ",e.accountHolder??"-",")"]},e.id))]}),(0,t.jsxs)(p3,{children:[(0,t.jsx)(p9,{children:"⚠ 원하는 계좌가 목록에 없나요?"}),(0,t.jsxs)(p8,{onClick:()=>{v||(T(),a.default.modal.organization.accountAdd.show())},type:"button",disabled:v,children:["계좌 먼저 등록하기",(0,t.jsx)(pX,{sx:{fontSize:16,position:"relative",top:-1}})]})]})]}),(0,t.jsxs)(pm.BodyRow,{children:[(0,t.jsx)(pm.BodyRowLabel,{children:"카드 용도를 선택하세요."}),(0,t.jsx)(p1,{value:s,onChange:e=>{let t=e.target.value;t in pq&&c(t)},children:Object.entries(pq).map(([e,n])=>(0,t.jsx)("option",{value:e,children:n.label},e))})]})]}),(0,t.jsxs)(pm.Footer,{children:[(0,t.jsx)(p7,{onClick:()=>{v||(c("OPERATING"),h(tt.SELECT_EMPTY_VALUE),u(""),g(""),j(""),_(!1),y(!1))},disabled:v,children:"내용 삭제 후 새로 입력 (초기화)"}),(0,t.jsxs)(ue,{onClick:()=>{E()},disabled:v||n&&!1===z,children:[(0,t.jsx)(lO.default,{sx:{fontSize:20}}),"저장"]})]})]})})}let p0=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-4440bebb-0"})`
  ${pm.btnStyle}
`,p1=(0,l.default)(o.default.Input.Select).withConfig({componentId:"zh__sc-4440bebb-1"})`
  ${pm.inputStyle}
  width: 180px;
`,p2=(0,l.default)(o.default.Input.Select).withConfig({componentId:"zh__sc-4440bebb-2"})`
  ${pm.inputStyle}
  width: 100%;
  color: ${({$isEmptySelected:e})=>e?"#9ca3af":"#0a0a0a"};
`,p6=l.default.div.withConfig({componentId:"zh__sc-4440bebb-3"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,p4=(0,l.default)(o.default.Input.Text).withConfig({componentId:"zh__sc-4440bebb-4"})`
  ${pm.inputStyle}
  width: 75px;
  border-color: ${({$hasError:e})=>!0===e?"#ff4d4f":"#e5e9ef"};
  text-align: center;

  &:disabled {
    color: #6b7280;
    background: #f3f4f6;
  }
`,p5=(0,l.default)(pm.BodyRowErrorText).withConfig({componentId:"zh__sc-4440bebb-5"})`
  color: #ff6900;
`,p3=l.default.div.withConfig({componentId:"zh__sc-4440bebb-6"})`
  position: absolute;
  right: 0;
  bottom: -24px;
  left: 0;

  display: flex;
  gap: 10px;
  align-items: center;
`,p9=l.default.div.withConfig({componentId:"zh__sc-4440bebb-7"})`
  font-size: 13px;
  line-height: 1.35;
  color: #ff6900;
`,p8=l.default.button.withConfig({componentId:"zh__sc-4440bebb-8"})`
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
`,p7=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-4440bebb-9"})`
  ${pm.btnStyle}
`,ue=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-4440bebb-10"})`
  ${pm.btnStyle}
`,ut=(0,n.observer)(function(){return"ready"!==a.default.modal.organization.cardAdd.status?null:(0,t.jsx)(pJ,{})});var un=e.i(93847),ui=e.i(86400);function ul(){let e=a.default.modal.organization.contactAdd,n="edit"===e.mode,l=a.default.data.organization.serviceList.data?.serviceList??[],o=a.default.organizationSetting.staff.staffAccountList,[s,c]=(0,i.useState)(e.serviceType??tt.SELECT_EMPTY_VALUE),[f,h]=(0,i.useState)(e.staffId??tt.SELECT_EMPTY_VALUE),[p,u]=(0,i.useState)(e.phoneNumber),[x,g]=(0,i.useState)(e.mobileProvider),[m,j]=(0,i.useState)(""),[b,_]=(0,i.useState)(!1),w=()=>{c(tt.SELECT_EMPTY_VALUE),h(tt.SELECT_EMPTY_VALUE),u(""),g("KT"),j("")},y=()=>{b||(w(),e.close())},v=async()=>{if(b)return;let t=p.trim();if(""===t)return void j("휴대폰은 필수 입력값입니다.");if(!0!==ui.default.brand.phoneNumber.is(t))return void j("휴대폰 형식이 올바르지 않습니다.");j(""),_(!0);let[i]=n&&null!==e.contactId?await a.default.organizationSetting.staff.patchContact({contactId:e.contactId,payload:{serviceType:s===tt.SELECT_EMPTY_VALUE?null:s,staffId:f===tt.SELECT_EMPTY_VALUE?null:f,phoneNumber:t,mobileProvider:x}}):await a.default.organizationSetting.staff.createContact({serviceType:s===tt.SELECT_EMPTY_VALUE?void 0:s,staffId:f===tt.SELECT_EMPTY_VALUE?void 0:f,phoneNumber:t,mobileProvider:x});if(null!==i){_(!1),a.default.ui.layout.toast.error(i.message);return}_(!1),y()};return(0,t.jsx)(d.default,{children:(0,t.jsxs)(pm.Container,{children:[(0,t.jsxs)(pm.Header,{children:[(0,t.jsx)(pm.HeaderLeft,{children:(0,t.jsx)(pm.HeaderTitle,{children:n?"연락처 수정하기":"연락처 추가하기"})}),(0,t.jsx)(pm.HeaderRight,{children:(0,t.jsxs)(ud,{onClick:y,disabled:b,children:[(0,t.jsx)(iq.default,{sx:{fontSize:20}}),"닫기"]})})]}),(0,t.jsxs)(pm.Body,{children:[(0,t.jsxs)(pm.BodyRow,{children:[(0,t.jsxs)(pm.BodyRowLabelRow,{children:[(0,t.jsx)(pm.BodyRowLabel,{children:"서비스 종류를 선택해주세요."}),(0,t.jsx)(pm.BodyRowHelperText,{children:"필수 입력값이 아닙니다. 입력란을 비워둘 수 있습니다."})]}),(0,t.jsxs)(uo,{value:s,onChange:e=>{let t=e.target.value;c(t in r.default?t:tt.SELECT_EMPTY_VALUE)},children:[l.filter(e=>!0===e.operatingStatus).map(e=>(0,t.jsxs)("option",{value:e.type,children:[r.default[e.type].label," 서비스"]},e.type)),(0,t.jsx)("option",{value:tt.SELECT_EMPTY_VALUE,children:"선택 안함"})]})]}),(0,t.jsxs)(pm.BodyRow,{children:[(0,t.jsxs)(pm.BodyRowLabelRow,{children:[(0,t.jsx)(pm.BodyRowLabel,{children:"담당자를 선택해주세요."}),(0,t.jsx)(pm.BodyRowHelperText,{children:"필수 입력값이 아닙니다. 입력란을 비워둘 수 있습니다."})]}),(0,t.jsxs)(uo,{style:{width:263},value:f,onChange:e=>{h(e.target.value)},children:[o.map(e=>(0,t.jsx)("option",{value:e.id,children:null===e.position?e.name:`${e.name} (직급 ${e.position.name})`},e.id)),(0,t.jsx)("option",{value:tt.SELECT_EMPTY_VALUE,children:"선택 안함"})]})]}),(0,t.jsxs)(pm.BodyRow,{children:[(0,t.jsxs)(pm.BodyRowLabelRow,{children:[(0,t.jsx)(pm.BodyRowLabel,{children:"휴대폰 번호 및 통신사를 선택해주세요."}),(0,t.jsx)(pm.BodyRowHelperText,{children:"필수 입력값 입니다."})]}),(0,t.jsxs)(us,{children:[(0,t.jsx)(ur,{style:{width:191},placeholder:"010-0000-0000",value:p,onChange:e=>{var t;t=e.target.value,j(""),u(ui.default.brand.phoneNumber.format(t))}}),(0,t.jsx)(uo,{style:{width:131},value:x,onChange:e=>{let t=e.target.value;t in un.default&&g(t)},children:Object.entries(un.default).map(([e,n])=>(0,t.jsx)("option",{value:e,children:n.label},e))})]}),(0,t.jsx)(pm.BodyRowErrorText,{$isVisible:m.trim().length>0,children:m})]})]}),(0,t.jsxs)(pm.Footer,{children:[(0,t.jsx)(uc,{onClick:()=>{b||w()},disabled:b,children:"내용 삭제 후 새로 입력 (초기화)"}),(0,t.jsxs)(uf,{onClick:()=>{v()},disabled:b,children:[(0,t.jsx)(lO.default,{sx:{fontSize:20}}),n?"수정":"저장"]})]})]})})}let ua=(0,n.observer)(function(){return"ready"!==a.default.modal.organization.contactAdd.status?null:(0,t.jsx)(ul,{})}),ud=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-665cc4f2-0"})`
  ${pm.btnStyle}
`,uo=(0,l.default)(o.default.Input.Select).withConfig({componentId:"zh__sc-665cc4f2-1"})`
  ${pm.inputStyle}
  width: 200px;
`,ur=(0,l.default)(o.default.Input.Text).withConfig({componentId:"zh__sc-665cc4f2-2"})`
  ${pm.inputStyle}
`,us=l.default.div.withConfig({componentId:"zh__sc-665cc4f2-3"})`
  display: flex;
  gap: 12px;
  align-items: center;
`,uc=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-665cc4f2-4"})`
  ${pm.btnStyle}
`,uf=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-665cc4f2-5"})`
  ${pm.btnStyle}
`,uh=(0,n.observer)(function({acceptFileTypes:e,isError:n,onSelectFile:l}){let{isWindowFileDragging:d}=a.default.ui.layout,o=(0,i.useRef)(null);(0,N.default)(e=>{let t=e[0];void 0!==t&&l(t)});let r=n?"지원하지 않는 파일 형식입니다.":d?"파일을 여기에 놓으면 업로드 됩니다.":"이곳에 파일을 끌어다 놓거나 (드래그 앤 드롭), 클릭하여 업로드하세요.";return(0,t.jsxs)(up,{children:[(0,t.jsx)(uu,{children:"로고 또는 도장 이미지를 업로드해 주세요."}),(0,t.jsxs)(ug,{$isWindowFileDragging:d,$isError:n,onDragOver:e=>{e.preventDefault()},onDrop:e=>{e.preventDefault();let t=e.dataTransfer.files[0];void 0!==t&&l(t)},onClick:e=>{e.target instanceof HTMLElement&&(e.target.closest("button")||o.current?.click())},children:[!n&&(0,t.jsx)(um,{children:(0,t.jsx)(ei.Upload,{size:26,color:"#4f39f6"})}),(0,t.jsxs)(uj,{children:[(0,t.jsx)(ub,{$isError:n,children:r}),(0,t.jsx)(u_,{children:"지원 파일 형식: PNG, JPG, JPEG"})]})]}),(0,t.jsx)(ux,{ref:o,type:"file",accept:e,onChange:e=>{let t=e.target.files?.[0];void 0!==t&&(l(t),e.target.value="")}})]})}),up=l.default.div.withConfig({componentId:"zh__sc-f01fc0e2-0"})`
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
`,uu=l.default.div.withConfig({componentId:"zh__sc-f01fc0e2-1"})`
  font-size: 18px;
  font-weight: 700;
  font-style: normal;
  line-height: 24px; /* 133.333% */
  color: #101828;
  text-align: center;
`,ux=l.default.input.withConfig({componentId:"zh__sc-f01fc0e2-2"})`
  display: none;
`,ug=l.default.div.withConfig({componentId:"zh__sc-f01fc0e2-3"})`
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
`,um=l.default.div.withConfig({componentId:"zh__sc-f01fc0e2-4"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;
`,uj=l.default.div.withConfig({componentId:"zh__sc-f01fc0e2-5"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: center;
`,ub=l.default.div.withConfig({componentId:"zh__sc-f01fc0e2-6"})`
  font-size: 14px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px;
  color: ${({$isError:e})=>e?"#ff4d4f":"#4f39f6"};
  text-align: center;
`,u_=l.default.div.withConfig({componentId:"zh__sc-f01fc0e2-7"})`
  font-size: 14px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px;
  color: #99a1af;
`,uw=(0,nF.default)((0,t.jsx)("path",{d:"M19 13H5v-2h14z"}),"Remove");var uy=e.i(47885),uv=e.i(11974);let uC=async(e,t)=>""===e||1===t?e:new Promise(n=>{let i=new Image;i.onload=()=>{let l=document.createElement("canvas");l.width=235,l.height=235;let a=l.getContext("2d");if(null===a)return void n(e);let d=Math.min(l.width/i.width,l.height/i.height),o=i.width*d*t,r=i.height*d*t,s=(l.width-o)/2,c=(l.height-r)/2;a.clearRect(0,0,l.width,l.height),a.drawImage(i,s,c,o,r),n(l.toDataURL("image/png"))},i.onerror=()=>{n(e)},i.src=e});function uI({file:e,onProcessedImageChange:n}){let[l,a]=(0,i.useState)(100),[d,o]=(0,i.useState)(100),[r,s]=(0,i.useState)(100),[c,f]=(0,i.useState)(""),[h,p]=(0,i.useState)(""),u=(0,i.useRef)(0),x=(0,i.useRef)(0);return(0,i.useEffect)(()=>{let e=window.setTimeout(()=>{s(d)},120);return()=>{window.clearTimeout(e)}},[d]),(0,i.useEffect)(()=>{let t=u.current+1;u.current=t,(async()=>{let{adjustedUrl:n}=await (0,uv.processBackgroundRemoval)({file:e,whiteThreshold:uy.DEFAULT_WHITE_THRESHOLD,softness:uy.DEFAULT_SOFTNESS,contrast:r,selectionRect:null});u.current===t&&f(n)})()},[r,e,n]),(0,i.useEffect)(()=>{if(""===c)return;let e=x.current+1;x.current=e,(async()=>{let t=await uC(c,l/100);x.current===e&&(p(t),n(t))})()},[c,l,n]),(0,t.jsxs)(uz,{children:[(0,t.jsxs)(uT,{children:[(0,t.jsx)(uE,{children:(0,t.jsx)(H.default.BackgroundReplace,{size:16,color:"#1C1B1F"})}),(0,t.jsxs)(uS,{children:["업로드된 ",e.name," 이미지의 배경을 제거했습니다.",(0,t.jsx)("br",{}),"아래에서 크기와 선명도를 확인한 뒤 저장을 완료해주세요!"]})]}),(0,t.jsxs)(uk,{children:[(0,t.jsx)(uD,{children:"이미지 미리보기"}),(0,t.jsxs)(uA,{children:[(0,t.jsxs)(uO,{children:[(0,t.jsx)(uL,{children:""!==h&&(0,t.jsx)(u$,{src:h,alt:`${e.name} 미리보기`})}),(0,t.jsxs)(uR,{children:[(0,t.jsx)(uP,{children:(0,t.jsx)(te.default,{sx:{fontSize:22}})}),(0,t.jsx)(uN,{children:"체크 무늬는 투명 배경을 뜻합니다. 실제 저장 시에는 배경 없이 저장됩니다."})]})]}),(0,t.jsxs)(uM,{children:[(0,t.jsxs)(uF,{children:[(0,t.jsx)(uU,{children:"크기 조정하기"}),(0,t.jsxs)(uB,{children:[(0,t.jsxs)(uY,{children:[(0,t.jsx)(uV,{onClick:()=>{a(e=>Math.max(e-10,100))},disabled:l<=100,children:(0,t.jsx)(uw,{sx:{fontSize:24}})}),(0,t.jsx)(uW,{children:"작게"})]}),(0,t.jsx)(uH,{min:100,max:500,value:l,onChange:a}),(0,t.jsxs)(uY,{children:[(0,t.jsx)(uV,{onClick:()=>{a(e=>Math.min(e+10,500))},disabled:l>=500,children:(0,t.jsx)(c1.default,{sx:{fontSize:24}})}),(0,t.jsx)(uW,{children:"크게"})]})]})]}),(0,t.jsx)(uG,{}),(0,t.jsxs)(uF,{children:[(0,t.jsx)(uU,{children:"선명도 조정하기"}),(0,t.jsxs)(uB,{children:[(0,t.jsxs)(uY,{children:[(0,t.jsx)(uV,{onClick:()=>{o(e=>{let t=Math.max(e-5,uy.MIN_CONTRAST);return s(t),t})},disabled:d<=uy.MIN_CONTRAST,children:(0,t.jsx)(uw,{sx:{fontSize:24}})}),(0,t.jsx)(uW,{children:"부드럽게"})]}),(0,t.jsx)(uH,{min:uy.MIN_CONTRAST,max:uy.MAX_CONTRAST,value:d,onChange:o,onChangeEnd:s}),(0,t.jsxs)(uY,{children:[(0,t.jsx)(uV,{onClick:()=>{o(e=>{let t=Math.min(e+5,uy.MAX_CONTRAST);return s(t),t})},disabled:d>=uy.MAX_CONTRAST,children:(0,t.jsx)(c1.default,{sx:{fontSize:24}})}),(0,t.jsx)(uW,{children:"선명하게"})]})]})]})]})]})]})]})}let uz=l.default.div.withConfig({componentId:"zh__sc-3b741e84-0"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  align-self: stretch;

  height: 100%;
  padding: 32px 24px;

  background: #fff;
`,uT=l.default.div.withConfig({componentId:"zh__sc-3b741e84-1"})`
  display: flex;
  gap: 4px;
  align-items: flex-start;
  align-self: stretch;

  padding: 12px;
  border: 1px solid #e5e7eb;
  border-radius: 6px;

  background: #f5f8ff;
`,uE=l.default.div.withConfig({componentId:"zh__sc-3b741e84-2"})``,uS=l.default.div.withConfig({componentId:"zh__sc-3b741e84-3"})`
  font-size: 14px;
  font-weight: 400;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
`,uk=l.default.div.withConfig({componentId:"zh__sc-3b741e84-4"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;
`,uD=l.default.div.withConfig({componentId:"zh__sc-3b741e84-5"})`
  font-size: 14px;
  font-weight: 700;
  font-style: normal;
  line-height: 16px; /* 114.286% */
  color: #0a0a0a;
`,uA=l.default.div.withConfig({componentId:"zh__sc-3b741e84-6"})`
  display: flex;
  gap: 24px;
  align-items: flex-start;
  align-self: stretch;
`,uO=l.default.section.withConfig({componentId:"zh__sc-3b741e84-7"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;

  width: 235px;
`,uL=l.default.div.withConfig({componentId:"zh__sc-3b741e84-8"})`
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
`,u$=l.default.img.withConfig({componentId:"zh__sc-3b741e84-9"})`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`,uR=l.default.div.withConfig({componentId:"zh__sc-3b741e84-10"})`
  display: flex;
  gap: 4px;
  align-items: flex-start;
  align-self: stretch;

  color: #0a0a0a;
`,uP=l.default.div.withConfig({componentId:"zh__sc-3b741e84-11"})`
  position: relative;
  top: -3px;
`,uN=l.default.div.withConfig({componentId:"zh__sc-3b741e84-12"})`
  font-size: 14px;
  font-weight: 400;
  font-style: normal;
  line-height: 16px; /* 114.286% */
`,uM=l.default.section.withConfig({componentId:"zh__sc-3b741e84-13"})`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
`,uF=l.default.div.withConfig({componentId:"zh__sc-3b741e84-14"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;
`,uU=l.default.h5.withConfig({componentId:"zh__sc-3b741e84-15"})`
  font-size: 14px;
  font-weight: 700;
  font-style: normal;
  line-height: 16px; /* 114.286% */
  color: #0a0a0a;
`,uB=l.default.div.withConfig({componentId:"zh__sc-3b741e84-16"})`
  display: flex;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;
  justify-content: center;
`,uY=l.default.div.withConfig({componentId:"zh__sc-3b741e84-17"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 56px;
`,uV=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-3b741e84-18"})`
  display: flex;
  gap: 4px;
  align-items: center;
  align-self: stretch;

  height: 36px;
  padding: 8px 16px;
`,uW=l.default.div.withConfig({componentId:"zh__sc-3b741e84-19"})`
  display: flex;
  justify-content: center;

  font-size: 14px;
  font-weight: 400;
  font-style: normal;
  line-height: normal;
  color: #4f39f6;
  text-align: center;
`,uH=(0,l.default)(o.default.Input.Slider).withConfig({componentId:"zh__sc-3b741e84-20"})`
  position: relative;
  top: 10px;
`,uG=l.default.div.withConfig({componentId:"zh__sc-3b741e84-21"})`
  align-self: stretch;
  border-top: 1px solid #d1d5db;
`,uK=(0,n.observer)(function(){let e=a.default.modal.organization.imageAdjustUpload,{status:n,close:l,resetToUploadStep:o,selectedFile:r}=e,[s,c]=(0,i.useState)(!1),f=(0,i.useRef)(null);if((0,i.useEffect)(()=>"ready"!==n?void e.setToastContainer(null):(e.setToastContainer(f.current),()=>{e.setToastContainer(null)}),[e,n]),"ready"!==n)return null;let h=null===r,p="logo"===e.target?"로고":"도장",u=async()=>{!0===await e.save()&&c(!1)};return(0,t.jsx)(d.default,{children:(0,t.jsxs)(uX,{ref:f,children:[(0,t.jsxs)(pm.Header,{children:[(0,t.jsx)(pm.HeaderLeft,{children:(0,t.jsx)(pm.HeaderTitle,{children:"이미지 업로드하기"})}),(0,t.jsx)(pm.HeaderRight,{children:(0,t.jsxs)(uq,{onClick:()=>{c(!1),l()},children:[(0,t.jsx)(iq.default,{sx:{fontSize:20}}),"닫기"]})})]}),(0,t.jsx)(uQ,{children:h?(0,t.jsx)(uh,{acceptFileTypes:e.acceptFileTypes,isError:e.isError,onSelectFile:e.setSelectedFile}):(0,t.jsx)(uI,{file:r,onProcessedImageChange:e.setProcessedImageDataUrl})}),(0,t.jsxs)(pm.Footer,{children:[(0,t.jsx)(uZ,{onClick:()=>{c(!1),o()},disabled:h||e.isSaving,children:"다시 업로드하기"}),(0,t.jsxs)(uJ,{onClick:()=>{c(!0)},disabled:h||e.isSaving,children:[(0,t.jsx)(lO.default,{sx:{fontSize:20}}),"최종확인 및 저장"]})]}),(0,t.jsx)(u0,{isOpen:s,targetLabel:p,isSaving:e.isSaving,onCancel:()=>{e.isSaving||c(!1)},onConfirm:()=>{u()}})]})})}),uX=(0,l.default)(pm.Container).withConfig({componentId:"zh__sc-665af392-0"})`
  position: relative;
  width: 626px;
`,uq=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-665af392-1"})`
  ${pm.btnStyle}
`,uQ=(0,l.default)(pm.Body).withConfig({componentId:"zh__sc-665af392-2"})`
  padding: 0;
`,uZ=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-665af392-3"})`
  ${pm.btnStyle}
`,uJ=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-665af392-4"})`
  ${pm.btnStyle}
`;function u0({isOpen:e,targetLabel:n,isSaving:i,onCancel:l,onConfirm:a}){return!0!==e?null:(0,t.jsx)(u1,{children:(0,t.jsxs)(u2,{children:[(0,t.jsxs)(u6,{children:[(0,t.jsxs)(u4,{children:[n," 이미지를 저장할까요?"]}),(0,t.jsxs)(u5,{children:["저장된 ",n," 이미지는 출력용 서류에서 사용할 수 있습니다.",(0,t.jsx)("br",{}),"이미 출력했거나 최종확인한 서류는 다시 확인이 필요할 수 있습니다."]})]}),(0,t.jsxs)(u3,{children:[(0,t.jsx)(u9,{type:"button",onClick:l,disabled:!0===i,children:"취소하기"}),(0,t.jsx)(u8,{type:"button",onClick:a,disabled:!0===i,children:"저장하기"})]})]})})}let u1=l.default.div.withConfig({componentId:"zh__sc-665af392-5"})`
  position: fixed;
  z-index: 3100;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgb(17 24 39 / 36%);
`,u2=l.default.div.withConfig({componentId:"zh__sc-665af392-6"})`
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
`,u6=l.default.div.withConfig({componentId:"zh__sc-665af392-7"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;

  width: 100%;
`,u4=l.default.h3.withConfig({componentId:"zh__sc-665af392-8"})`
  margin: 0;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px;
  color: #000;
`,u5=l.default.p.withConfig({componentId:"zh__sc-665af392-9"})`
  margin: 0;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px;
  color: #000;
`,u3=l.default.div.withConfig({componentId:"zh__sc-665af392-10"})`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: flex-end;

  width: 100%;
`,u9=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-665af392-11"})`
  height: 36px;
  padding: 8px 16px;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px;
`,u8=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-665af392-12"})`
  height: 36px;
  padding: 8px 16px;

  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: 20px;
`;var u7=e.i(13269);let xe=(0,n.observer)(function(){let e=a.default.modal.organization.staffAccountAdd,n="edit"===e.mode,[l,o]=(0,i.useState)(e.name),[r,s]=(0,i.useState)(e.position??tt.SELECT_EMPTY_VALUE),[c,f]=(0,i.useState)(e.phoneNumber),[h,p]=(0,i.useState)(e.sealImagePath),[u,x]=(0,i.useState)(""),[g,m]=(0,i.useState)(""),[j,b]=(0,i.useState)(!1),_=(0,i.useRef)(null),w=a.default.organizationSetting.staff.organizationId,y=a.default.data.organization.staffPositionList,v=e=>{a.default.ui.layout.toast.error(e,void 0,_.current)};(0,i.useEffect)(()=>{null!==w&&y.query?.orgId!==w&&y.setQuery({orgId:w})},[w,y]);let C=()=>{o(""),s(tt.SELECT_EMPTY_VALUE),f(""),p(""),x(""),m("")},I=()=>{j||(C(),e.close())},z=async e=>{try{let t=await fetch(e);if(!0!==t.ok)return[Error("Failed to convert data URL to blob"),null];let n=await t.blob();return[null,n]}catch(e){return[e instanceof Error?e:Error("Failed to convert data URL to blob"),null]}},T=async(e,t,n)=>{let[i,l]=await z(e);if(null!==i)return[i,null];let[a,d]=await ah.default.upload.createPresignedUploadUrl({category:u7.default.STAFF_SEAL,contentType:pj.default.PNG,organizationId:n,staffAccountId:t});if(null!==a)return[a,null];let[o]=await ah.default.upload.putFileToPresignedUploadUrl({uploadUrl:d.uploadUrl,contentType:pj.default.PNG,file:l});return null!==o?[o,null]:[null,d.path]},E=async e=>{let t=a.default.data.organization.contactList.query;if(!0==(null!==t&&t.orgId===e))try{await a.default.data.organization.contactList.refetch()}catch{v("서비스별 업무 연락처 목록을 새로고침하지 못했습니다.")}},S=async()=>{if(j)return;let t=l.trim();""===t?x("이름은 필수 입력값입니다."):x("");let i=c.trim();if(""!==i&&!0!==ui.default.brand.phoneNumber.is(i))return void m("휴대폰 형식이 올바르지 않습니다.");if(m(""),""===t)return;b(!0);let d=e.staffAccountId,o=a.default.organizationSetting.staff.organizationId;if(!0!==n){if(null===o){b(!1),v("기관 식별자가 없어 근무자를 생성할 수 없습니다.");return}let[e,n]=await a.default.organizationSetting.staff.createStaffAccount({organizationId:o,name:t,role:"STAFF",positionId:r===tt.SELECT_EMPTY_VALUE?void 0:r,phoneNumber:""===i?void 0:i});if(null!==e||null===n){b(!1),v(e?.message??"근무자 생성에 실패했습니다.");return}d=n.id,o=n.organizationId}else{if(null===d){b(!1),v("수정할 근무자 정보를 찾지 못했습니다.");return}let[e]=await a.default.data.staffAccount.patch({id:d,payload:{name:t,positionId:r===tt.SELECT_EMPTY_VALUE?void 0:r,phoneNumber:""===i?void 0:i}});if(null!==e){b(!1),v(e.message||"근무자 수정에 실패했습니다.");return}null!==o&&await E(o)}let s=h.trim();if(s.startsWith("data:")){if(null===d||null===o){b(!1),v("도장 업로드 대상 정보를 찾지 못했습니다.");return}let[e,t]=await T(s,d,o);if(null!==e||null===t){b(!1),v(n?"근무자 정보는 수정되었지만 도장 업로드에 실패했습니다. 다시 시도해 주세요.":"근무자는 생성되었지만 도장 업로드에 실패했습니다. 수정에서 다시 업로드해 주세요."),I();return}let[i]=await a.default.data.staffAccount.patch({id:d,payload:{sealImagePath:t}});if(null!==i){b(!1),v(n?"근무자 도장 경로 저장에 실패했습니다. 다시 시도해 주세요.":"근무자는 생성되었지만 도장 경로 저장에 실패했습니다. 수정에서 다시 저장해 주세요."),I();return}}b(!1),I()};return(0,t.jsx)(d.default,{children:(0,t.jsxs)(pm.Container,{ref:_,children:[(0,t.jsxs)(pm.Header,{children:[(0,t.jsx)(pm.HeaderLeft,{children:(0,t.jsx)(pm.HeaderTitle,{children:n?"근무자 수정하기":"근무자 추가하기"})}),(0,t.jsx)(pm.HeaderRight,{children:(0,t.jsxs)(xn,{onClick:I,disabled:j,children:[(0,t.jsx)(iq.default,{sx:{fontSize:20}}),"닫기"]})})]}),(0,t.jsxs)(pm.Body,{children:[(0,t.jsxs)(pm.BodyRow,{children:[(0,t.jsx)(pm.BodyRowLabel,{children:"이름을 입력해주세요."}),(0,t.jsx)(xl,{placeholder:"이름을 입력해주세요",value:l,onChange:e=>{x(""),o(e.target.value)}}),(0,t.jsx)(pm.BodyRowErrorText,{$isVisible:u.trim().length>0,children:u})]}),(0,t.jsxs)(pm.BodyRow,{children:[(0,t.jsx)(pm.BodyRowLabel,{children:"직급을 선택해주세요."}),(0,t.jsxs)(xi,{value:r,onChange:e=>{s(e.target.value)},children:[y.data?.map(e=>(0,t.jsx)("option",{value:e.id,children:e.name},e.id)),(0,t.jsx)("option",{value:tt.SELECT_EMPTY_VALUE,children:"없음"})]})]}),(0,t.jsxs)(pm.BodyRow,{children:[(0,t.jsx)(pm.BodyRowLabel,{children:"휴대폰 번호를 입력해주세요."}),(0,t.jsx)(xl,{placeholder:"010-0000-0000",value:c,onChange:e=>{var t;t=e.target.value,m(""),f(ui.default.brand.phoneNumber.format(t))}}),(0,t.jsx)(pm.BodyRowErrorText,{$isVisible:g.trim().length>0,children:g})]}),(0,t.jsxs)(pm.BodyRow,{children:[(0,t.jsxs)(pm.BodyRowLabelRow,{children:[(0,t.jsx)(pm.BodyRowLabel,{children:"도장 이미지를 업로드 해주세요."}),(0,t.jsxs)(pm.BodyRowHelperText,{children:[(0,t.jsx)(te.default,{sx:{fontSize:18},style:{marginRight:4,position:"relative",top:3}}),"해당 이미지는 서류에서 근무자의 도장이 필요시 사용됩니다."]})]}),(0,t.jsx)(xa,{children:(0,t.jsxs)(xd,{children:[(0,t.jsx)(xo,{$hasImage:h.trim().length>0,children:0===h.trim().length?(0,t.jsx)(H.default.Imagesmode,{size:34,color:"#d1d5db"}):(0,t.jsx)(xr,{src:h,alt:"도장 이미지 미리보기"})}),(0,t.jsx)(xs,{onClick:()=>{a.default.modal.organization.imageAdjustUpload.show("seal",h,{saveMode:"external",onProcessedImageDataUrl:e=>{p(e)}})},disabled:j,children:"업로드하기"})]})})]})]}),(0,t.jsxs)(pm.Footer,{children:[(0,t.jsx)(xc,{onClick:()=>{j||C()},disabled:j,children:"내용 삭제 후 새로 입력 (초기화)"}),(0,t.jsxs)(xf,{onClick:()=>{S()},disabled:j,children:[(0,t.jsx)(lO.default,{sx:{fontSize:20}}),"저장"]})]})]})})}),xt=(0,n.observer)(function(){return"ready"!==a.default.modal.organization.staffAccountAdd.status?null:(0,t.jsx)(xe,{})}),xn=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-2a48cfd9-0"})`
  ${pm.btnStyle}
`,xi=(0,l.default)(o.default.Input.Select).withConfig({componentId:"zh__sc-2a48cfd9-1"})`
  ${pm.inputStyle}
  width: 131px;
`,xl=(0,l.default)(o.default.Input.Text).withConfig({componentId:"zh__sc-2a48cfd9-2"})`
  ${pm.inputStyle}
  width: 100%;
`,xa=l.default.div.withConfig({componentId:"zh__sc-2a48cfd9-3"})`
  display: flex;
  gap: 12px;
  align-items: center;
`,xd=l.default.div.withConfig({componentId:"zh__sc-2a48cfd9-4"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
`,xo=l.default.div.withConfig({componentId:"zh__sc-2a48cfd9-5"})`
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
`,xr=l.default.img.withConfig({componentId:"zh__sc-2a48cfd9-6"})`
  width: 100%;
  height: 100%;
  border-radius: 6px;
  object-fit: cover;
`,xs=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-2a48cfd9-7"})`
  ${pm.btnStyle}
  width: fit-content;
`,xc=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-2a48cfd9-8"})`
  ${pm.btnStyle}
`,xf=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-2a48cfd9-9"})`
  ${pm.btnStyle}
`;function xh(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(ua,{}),(0,t.jsx)(pK,{}),(0,t.jsx)(ut,{}),(0,t.jsx)(xt,{}),(0,t.jsx)(uK,{})]})}let xp=(0,n.observer)(function(){let{serviceWorkerDraft:e,isSaving:n,resetToUploadStep:i,saveServiceWorkerDraft:l}=a.default.modal.serviceWorkerCreate,{preserveServiceWorkerAfterSave:d,resetSort:o,setCurrentServiceType:r,setHighlightedServiceWorkerId:s}=a.default.serviceWorker.info.byServiceWorker,c=async()=>{let t=e?.serviceType,n=await l();if(null===n)return void requestAnimationFrame(()=>{document.querySelector("[data-service-worker-create-field-error]")?.scrollIntoView({block:"center",behavior:"smooth"})});d(n.id);let i=t??null;null!==i&&(r(i),o(),a.default.data.serviceWorker.list.setQuery({serviceType:i}),await a.default.data.serviceWorker.list.refetch()),s(n.id)};return(0,t.jsxs)(xu,{children:[(0,t.jsx)(xg,{disabled:!e||n,onClick:i,children:"다시 업로드하기"}),(0,t.jsxs)(xm,{disabled:!e||n,onClick:()=>void c(),children:[(0,t.jsx)(j.Check,{size:16}),"최종확인 및 저장"]})]})}),xu=l.default.div.withConfig({componentId:"zh__sc-d659ae78-0"})`
  display: flex;
  gap: 16px;
  align-items: center;
  align-self: stretch;
  justify-content: flex-end;

  padding: 16px;
  border-top: 1px solid #e5e7eb;
`,xx=l.css`
  display: flex;
  gap: 10px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,xg=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-d659ae78-1"})`
  ${xx}
`,xm=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-d659ae78-2"})`
  ${xx}
`,xj=(0,n.observer)(function(){let e=a.default.modal.serviceWorkerCreate;return!0!==e.isDuplicateServiceWorkerDialogOpen?null:(0,t.jsx)(xb,{children:(0,t.jsxs)(x_,{children:[(0,t.jsxs)(xw,{children:[(0,t.jsx)(xy,{children:"같은 정보의 제공인력이 이미 등록되어 있어요."}),(0,t.jsxs)(xv,{children:["이름과 생년월일이 같은 제공인력이 이미 등록되어 있습니다.",(0,t.jsx)("br",{}),"동일한 제공인력이라면 기존 정보에서 계약을 수정하거나 추가해주세요.",(0,t.jsx)("br",{}),"다른 제공인력이라면, 수정 후 신규 등록을 계속할 수 있습니다."]})]}),(0,t.jsxs)(xC,{children:[(0,t.jsx)(xI,{type:"button",onClick:e.cancelDuplicateServiceWorkerRegistration,children:"등록 취소하기"}),(0,t.jsx)(xz,{type:"button",onClick:e.closeDuplicateServiceWorkerDialog,children:"신규 등록 수정하고 계속하기"})]})]})})}),xb=l.default.div.withConfig({componentId:"zh__sc-75646160-0"})`
  position: fixed;
  z-index: 3100;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgb(17 24 39 / 36%);
`,x_=l.default.div.withConfig({componentId:"zh__sc-75646160-1"})`
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
`,xw=l.default.div.withConfig({componentId:"zh__sc-75646160-2"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;
`,xy=l.default.h3.withConfig({componentId:"zh__sc-75646160-3"})`
  align-self: stretch;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #000;
`,xv=l.default.p.withConfig({componentId:"zh__sc-75646160-4"})`
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #000;
`,xC=l.default.div.withConfig({componentId:"zh__sc-75646160-5"})`
  display: flex;
  gap: 12px;
  align-self: stretch;
  justify-content: flex-end;
`,xI=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-75646160-6"})`
  display: flex;
  gap: 10px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,xz=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-75646160-7"})`
  display: flex;
  gap: 10px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,xT=(0,n.observer)(function(){let{analyzeSelectedFile:e,isAnalyzing:n,selectedFile:i}=a.default.modal.serviceWorkerCreate;return(0,t.jsx)(xE,{children:(0,t.jsxs)(xS,{disabled:null===i||n,onClick:()=>{e()},children:["분석 시작",(0,t.jsx)(U,{size:16})]})})}),xE=l.default.div.withConfig({componentId:"zh__sc-3f938d0e-0"})`
  display: flex;
  gap: 10px;
  align-self: stretch;
  justify-content: flex-end;
`,xS=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-3f938d0e-1"})`
  display: flex;
  flex-shrink: 0;
  gap: 10px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,{FILE_EXTENSION_WHITELIST_BY_GROUP:xk}=G.default.file,xD=(0,n.observer)(function(){var e;let n,{clearSelectedFile:i,selectedFile:l,isAnalyzing:d}=a.default.modal.serviceWorkerCreate;if(null===l)return null;let o=-1===(n=(e=l.name).lastIndexOf("."))?"":e.slice(n).toLowerCase();return(0,t.jsx)(xA,{children:(0,t.jsxs)(xO,{children:[(0,t.jsxs)(xL,{children:[(0,t.jsx)(x$,{children:xk.IMAGE.some(e=>e===o)?(0,t.jsx)(H.default.Photo,{size:17,color:"#FA8E43"}):xk.AUDIO.some(e=>e===o)?(0,t.jsx)(H.default.SpeechToText,{size:17,color:"#A855F7"}):xk.DOCUMENT.some(e=>e===o)?(0,t.jsx)(H.default.News,{size:17,color:"#2264E8"}):null}),(0,t.jsx)(xR,{children:(0,t.jsx)(xP,{children:l.name})})]}),(0,t.jsxs)(xN,{onClick:i,disabled:d,children:["삭제",(0,t.jsx)(W.X,{size:16})]})]},`${l.name}-${l.size}-${l.lastModified}`)})}),xA=l.default.div.withConfig({componentId:"zh__sc-9108dce9-0"})`
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
`,xO=l.default.div.withConfig({componentId:"zh__sc-9108dce9-1"})`
  display: flex;
  flex-shrink: 0;
  gap: 24px;
  align-items: center;

  padding: 12px 16px;
  border-radius: 8px;

  background: #f6f8fb;
`,xL=l.default.div.withConfig({componentId:"zh__sc-9108dce9-2"})`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`,x$=l.default.div.withConfig({componentId:"zh__sc-9108dce9-3"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;
  border-radius: 4px;

  background: #fff;
`,xR=l.default.div.withConfig({componentId:"zh__sc-9108dce9-4"})`
  display: flex;
  align-items: center;
  align-self: stretch;

  width: 196px;
  height: 40px;

  color: #0a0a0a;
`,xP=l.default.div.withConfig({componentId:"zh__sc-9108dce9-5"})`
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #0a0a0a;
`,xN=l.default.button.withConfig({componentId:"zh__sc-9108dce9-6"})`
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
`;function xM(){let[e,n]=(0,i.useState)(0);return(0,i.useEffect)(()=>{let e=performance.now(),t=0,i=l=>{n(Math.min(100*(1-Math.exp(-((l-e)/1e3*.05))),98)),t=window.requestAnimationFrame(i)};return t=window.requestAnimationFrame(i),()=>{window.cancelAnimationFrame(t)}},[]),(0,t.jsx)(xF,{children:(0,t.jsx)(xU,{$progress:e})})}let xF=l.default.div.withConfig({componentId:"zh__sc-4ad7a7ff-0"})`
  overflow: hidden;
  display: flex;

  width: 362px;
  height: ${8}px;
  border-radius: 99px;

  background: #e6e0ff;
  background-color: #e5e2ff;
`,xU=l.default.div.attrs(({$progress:e})=>({style:{transform:`scaleX(${e/100})`}})).withConfig({componentId:"zh__sc-4ad7a7ff-1"})`
  transform-origin: left center;
  width: 100%;
  height: 100%;
  background-color: #5635ff;
`,xB=(0,n.observer)(function({disabled:e=!1}){let{isWindowFileDragging:n}=a.default.ui.layout,{selectedFile:i,isError:l,isAnalyzing:d,abortAnalyze:o}=a.default.modal.serviceWorkerCreate;return(0,t.jsxs)(xV,{children:[null===i&&!1===l&&(0,t.jsx)(xW,{children:(0,t.jsx)(ei.Upload,{size:26,color:e?"#9CA3AF":xY[100]})}),(0,t.jsxs)(xH,{children:[(0,t.jsx)(xG,{$isError:l,$disabled:e,children:!0===l?"지원하지 않는 파일 형식입니다.":!0===n?"파일을 여기에 놓으면 업로드 됩니다.":!0===d?"업로드한 파일을 분석하고 있습니다.":"이곳에 파일을 끌어다 놓거나 (드래그 앤 드롭), 클릭하여 업로드하세요."}),(0,t.jsx)(xK,{$disabled:e,children:null!==i&&!1===d?"새 파일을 업로드하면 기존 파일이 교체됩니다.":"지원 파일 형식: 사진 이미지"})]}),!0===d&&(0,t.jsx)(xM,{}),!0===d&&(0,t.jsx)(xX,{onClick:o,children:"중단하기"})]})}),{PRIMARY:xY}=el.default.style.color,xV=l.default.div.withConfig({componentId:"zh__sc-7f4896ee-0"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  align-self: stretch;
  justify-content: center;
`,xW=l.default.div.withConfig({componentId:"zh__sc-7f4896ee-1"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;
`,xH=l.default.div.withConfig({componentId:"zh__sc-7f4896ee-2"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  align-self: stretch;
  justify-content: center;
`,xG=l.default.div.withConfig({componentId:"zh__sc-7f4896ee-3"})`
  font-size: 14px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 142.857% */
  color: ${({$isError:e,$disabled:t})=>t?"#9CA3AF":e?"#ff4d4f":"#4f39f6"};
  text-align: center;
`,xK=l.default.div.withConfig({componentId:"zh__sc-7f4896ee-4"})`
  font-size: 14px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 142.857% */
  color: ${({$disabled:e})=>e?"#9CA3AF":"#99a1af"};
`,xX=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-7f4896ee-5"})`
  display: flex;
  gap: 10px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,xq=(0,n.observer)(function({disabled:e=!1}){let{isWindowFileDragging:n}=a.default.ui.layout,{acceptFileTypes:l,setSelectedFile:d,selectedFile:o,isError:r}=a.default.modal.serviceWorkerCreate,s=(0,i.useRef)(null);return(0,N.default)(t=>{if(e||0===t.length)return;let n=t[0];void 0!==n&&d(n)}),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(xQ,{ref:s,type:"file",accept:l,onChange:t=>{if(e)return;let n=Array.from(t.target.files??[]);if(0===n.length)return;let i=n[0];void 0!==i&&(d(i),t.target.value="")},disabled:e}),(0,t.jsxs)(xZ,{$isWindowFileDragging:n,$disabled:e,onDragOver:t=>{if(t.preventDefault(),e)return},onDrop:t=>{if(t.preventDefault(),e)return;let n=Array.from(t.dataTransfer.files);if(0===n.length)return;let i=n[0];void 0!==i&&d(i)},onClick:t=>{!e&&t.target instanceof HTMLElement&&(t.target.closest("button")||s.current?.click())},$isError:r,children:[null!==o&&(0,t.jsx)(xD,{}),(0,t.jsx)(xB,{disabled:e}),(0,t.jsx)(xT,{})]})]})}),xQ=l.default.input.withConfig({componentId:"zh__sc-37be1ed1-0"})`
  display: none;
`,xZ=l.default.div.withConfig({componentId:"zh__sc-37be1ed1-1"})`
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
`,xJ=(0,n.observer)(function(){let{analyzedFile:e,mode:n}=a.default.modal.serviceWorkerCreate;return(0,t.jsxs)(x0,{$flex1:null===e,children:[null===e&&(0,t.jsx)(x1,{children:"renew"===n?"새로운 전자바우처 캡쳐 화면을 아래에 업로드하고, 다음 버튼을 클릭하세요.":"전자바우처 캡쳐 화면을 아래에 업로드하고, 다음 버튼을 클릭하세요."}),(0,t.jsx)(xq,{})]})}),x0=l.default.div.withConfig({componentId:"zh__sc-f40ff2c5-0"})`
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
`,x1=l.default.div.withConfig({componentId:"zh__sc-f40ff2c5-1"})`
  font-size: 18px;
  font-weight: 700;
  font-style: normal;
  line-height: 24px;
  color: #101828;
`,{FILE_EXTENSION_WHITELIST_BY_GROUP:x2}=G.default.file,x6=(0,n.observer)(function(){var e;let n,{analyzedFile:l}=a.default.modal.serviceWorkerCreate,{ref:d,fire:o}=ez();if((0,i.useEffect)(()=>{null!==l&&o()},[l,o]),null===l)return null;let r=-1===(n=(e=l.name).lastIndexOf("."))?"":e.slice(n).toLowerCase();return(0,t.jsxs)(x4,{ref:d,children:[(0,t.jsxs)(x5,{children:[(0,t.jsxs)(x3,{children:[(0,t.jsx)(H.default.FindInPage,{size:18}),"AI 문서 인식 완료"]}),(0,t.jsxs)(x9,{children:["업로드된 서류들에서 정보를 성공적으로 추출했습니다. ",(0,t.jsx)("br",{}),"우측의 [제공인력 기본 정보]가 올바르게 연동되었는지 확인 후, [최종 확인] 버튼을 눌러주세요."]})]}),(0,t.jsxs)(x8,{children:[(0,t.jsxs)(x7,{children:[(0,t.jsx)(H.default.CheckCircle,{size:18}),"분석 완료된 첨부 서류 (1건)"]}),(0,t.jsx)(ge,{children:(0,t.jsxs)(gt,{children:[(0,t.jsxs)(gn,{children:[(0,t.jsx)(gi,{children:x2.IMAGE.some(e=>e===r)?(0,t.jsx)(H.default.Photo,{size:17,color:"#FA8E43"}):x2.AUDIO.some(e=>e===r)?(0,t.jsx)(H.default.SpeechToText,{size:17,color:"#A855F7"}):x2.DOCUMENT.some(e=>e===r)?(0,t.jsx)(H.default.News,{size:17,color:"#2264E8"}):null}),(0,t.jsx)(gl,{children:(0,t.jsx)(ga,{children:l.name})})]}),(0,t.jsx)(gd,{children:"추출 완료"})]},`${l.name}-${l.size}-${l.lastModified}`)})]})]})}),x4=l.default.div.withConfig({componentId:"zh__sc-635d6973-0"})`
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
`,x5=l.default.div.withConfig({componentId:"zh__sc-635d6973-1"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  align-self: stretch;
`,x3=l.default.div.withConfig({componentId:"zh__sc-635d6973-2"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #0a0a0a;
`,x9=l.default.div.withConfig({componentId:"zh__sc-635d6973-3"})`
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
`,x8=l.default.div.withConfig({componentId:"zh__sc-635d6973-4"})`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  align-self: stretch;

  min-height: 0;
`,x7=l.default.div.withConfig({componentId:"zh__sc-635d6973-5"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #0a0a0a;
`,ge=l.default.div.withConfig({componentId:"zh__sc-635d6973-6"})`
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
`,gt=l.default.div.withConfig({componentId:"zh__sc-635d6973-7"})`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 355px;
  height: 64px;
  padding: 12px 16px;
  border-radius: 8px;

  background: #f6f8fb;
`,gn=l.default.div.withConfig({componentId:"zh__sc-635d6973-8"})`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`,gi=l.default.div.withConfig({componentId:"zh__sc-635d6973-9"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;
  border-radius: 4px;

  background: #fff;
`,gl=l.default.div.withConfig({componentId:"zh__sc-635d6973-10"})`
  display: flex;
  align-items: center;
  align-self: stretch;

  width: 196px;
  height: 40px;

  color: #0a0a0a;
`,ga=l.default.div.withConfig({componentId:"zh__sc-635d6973-11"})`
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #0a0a0a;
`,gd=l.default.div.withConfig({componentId:"zh__sc-635d6973-12"})`
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
`,go=(0,n.observer)(function(){let{analyzedFile:e}=a.default.modal.serviceWorkerCreate;return(0,t.jsxs)(gr,{children:[null!==e&&(0,t.jsx)(x6,{}),(0,t.jsx)(xJ,{})]})}),gr=l.default.div.withConfig({componentId:"zh__sc-9bac733d-0"})`
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
`;var gs=e.i(43090),gc=e.i(70793),gf=e.i(93863);let gh=Object.keys(oj.default).filter(function(e){return e in oj.default}),gp=Object.keys(r.default).filter(function(e){return e in r.default});function gu(e,t,n,i){if("DISABILITY_ACTIVITY_SUPPORT"!==i)return 1;let l=a.default.data.serviceWorker.list.data??[],d=a.default.modal.serviceWorkerDetail.serviceWorker,o=l.find(i=>(0,gf.isSameServiceWorkerIdentity)(e,t,n,i))??(null!==d&&(0,gf.isSameServiceWorkerIdentity)(e,t,n,d)?d:null);return(o?.employmentContracts.filter(e=>e.serviceType===i).length??0)+1}let gx=e=>{let t=e.trim().match(/^(\d{6})-?(\d)(\d{0,6})$/);if(null===t)return"unknown";switch(t[2]){case"1":case"3":return"MALE";case"2":case"4":return"FEMALE";default:return"unknown"}},gg=e=>{switch(e){case"MALE":return"남성";case"FEMALE":return"여성";case"unknown":return""}},gm=()=>{let e=new Date,[t,n]=eV.default.create(e.getFullYear(),e.getMonth()+1,e.getDate());return null!==t||null===n?null:n},gj=(0,n.observer)(function(){let{serviceWorkerDraft:e,analyzedServiceWorkerDraft:n,mode:l,updateServiceWorkerDraft:d,getServiceWorkerDraftFieldError:s,clearServiceWorkerDraftFieldError:c}=a.default.modal.serviceWorkerCreate,f=(0,i.useRef)(!1);if((0,i.useEffect)(()=>{if(null===e||f.current||(f.current=!0,""!==(e.firstRegisteredDate??"").trim()))return;let t=gm();null!==t&&d(e=>({...e,firstRegisteredDate:t}))},[e,d]),(0,i.useEffect)(()=>{let t=gp[0];null!==e&&void 0===e.serviceType&&void 0!==t&&d(e=>({...e,serviceType:t}))},[e,d]),null===e)return null;let h="renew"===l,p=e.serviceWorkerName??"",u=e.residentRegistrationNumber??"",x=e.firstRegisteredDate??"",g=e.contractStartDate??"",m=e.contractEndDate??"",j=e.phoneNumber??"",b=e.contact??"",_=e.address??"",w=e.postCode??"",y=e.addressDetail??"",v=e.note??"",C=e.serviceType,I=gu(p,u,e.phoneNumber,C),z=void 0===C?null:gh.find(e=>oj.BUSINESS_TYPE_SERVICE_TYPES[e].includes(C))??null,T=e.gender??gx(u),E=(e,t)=>""===s(e)?t:{...t,borderColor:"#ff4d4f",background:"#fff5f5"},S=e=>{let n=s(e);return""===n?null:(0,t.jsx)(gT,{"data-service-worker-create-field-error":"true",children:n})},k=(e,t)=>{let n=String(t??"").trim();return""!==n&&String(e).trim()===n},D=gm(),A=""===(n?.firstRegisteredDate??"").trim()&&null!==D&&x===D,O=k(x,n?.firstRegisteredDate??"")||A;return(0,t.jsxs)(g_,{children:[(0,t.jsx)(gw,{children:"인적사항"}),(0,t.jsxs)(gy,{children:[(0,t.jsxs)(gC,{children:[(0,t.jsxs)(gI,{children:["성명",(0,t.jsx)(gb,{})]}),(0,t.jsx)(o.default.Input.Text,{disabled:h,placeholder:"성명을 입력하세요.",$autoFilled:k(p,n?.serviceWorkerName??""),style:E("serviceWorkerName",gS),value:p,onChange:e=>{c("serviceWorkerName"),d(t=>({...t,serviceWorkerName:e.target.value.trim()}))}}),S("serviceWorkerName")]}),(0,t.jsxs)(gC,{children:[(0,t.jsx)(gI,{children:"주민등록번호"}),(0,t.jsx)(o.default.Input.ResidentRegistrationNumber,{disabled:h,placeholder:"주민등록번호를 입력해주세요.",$autoFilled:k(u,n?.residentRegistrationNumber??""),style:E("residentRegistrationNumber",gS),value:u,onChange:e=>{c("residentRegistrationNumber"),d(t=>{let n={...t,residentRegistrationNumber:e};if("DISABILITY_ACTIVITY_SUPPORT"!==t.serviceType||!gs.default.is(e)&&!gs.default.isPartial(e))return"DISABILITY_ACTIVITY_SUPPORT"===t.serviceType&&eV.default.is(t.contractStartDate??"")?{...n,contractEndDate:void 0}:n;let i=gu(t.serviceWorkerName??"",e,t.phoneNumber,t.serviceType),l=(0,gc.getDefaultDisabilityActivitySupportContractEndDate)(t.contractStartDate??"",e,i);return eV.default.is(t.contractStartDate??"")?{...n,contractEndDate:l}:n})}}),S("residentRegistrationNumber")]}),(0,t.jsxs)(gC,{style:{flex:"none",width:266},children:[(0,t.jsx)(gI,{children:"성별"}),(0,t.jsx)(gE,{$autoFilled:k(gg(T),gg(gx(n?.residentRegistrationNumber??""))),style:gS,value:gg(T),placeholder:"주민등록번호와 연동되어 보여집니다.",readOnly:!0})]})]}),(0,t.jsxs)(gy,{children:[(0,t.jsxs)(gC,{children:[(0,t.jsxs)(gI,{children:["휴대폰",(0,t.jsx)(gb,{})]}),(0,t.jsx)(o.default.Input.Phone,{disabled:h,placeholder:"휴대폰을 입력해주세요.",$autoFilled:k(j,n?.phoneNumber??""),style:E("phoneNumber",gS),value:j,onChange:e=>{c("phoneNumber"),d(t=>{let n={...t,phoneNumber:e};if("DISABILITY_ACTIVITY_SUPPORT"!==t.serviceType||!eV.default.is(t.contractStartDate??"")||!nG.default.is(e)||!gs.default.is(t.residentRegistrationNumber)&&!gs.default.isPartial(t.residentRegistrationNumber))return"DISABILITY_ACTIVITY_SUPPORT"===t.serviceType&&eV.default.is(t.contractStartDate??"")?{...n,contractEndDate:void 0}:n;let i=gu(t.serviceWorkerName??"",t.residentRegistrationNumber??"",e,t.serviceType),l=(0,gc.getDefaultDisabilityActivitySupportContractEndDate)(t.contractStartDate??"",t.residentRegistrationNumber??"",i);return{...n,contractEndDate:l}})}}),S("phoneNumber")]}),(0,t.jsxs)(gC,{children:[(0,t.jsx)(gI,{children:"연락처"}),(0,t.jsx)(o.default.Input.Contact,{disabled:h,placeholder:"연락처를 입력해주세요.",$autoFilled:k(b,n?.contact??""),style:E("contact",gS),value:b,onChange:e=>{c("contact"),d(t=>({...t,contact:e}))}}),S("contact")]})]}),(0,t.jsxs)(gv,{children:[(0,t.jsxs)(gy,{children:[(0,t.jsxs)(gC,{children:[(0,t.jsx)(gI,{children:"주소"}),(0,t.jsx)(o.default.Input.Text,{disabled:h,placeholder:"주소를 입력해주세요.",$autoFilled:k(_,n?.address??""),style:E("address",gS),value:_,onChange:e=>{c("address"),d(t=>({...t,address:e.target.value}))}}),S("address")]}),(0,t.jsxs)(gC,{style:{flex:"none",width:191},children:[(0,t.jsx)(gI,{children:"우편번호"}),(0,t.jsx)(o.default.Input.PostCode,{disabled:h,placeholder:"우편번호를 입력해주세요.",$autoFilled:k(w,n?.postCode??""),style:E("postCode",gS),value:w,onChange:e=>{c("postCode"),d(t=>({...t,postCode:e}))}}),S("postCode")]})]}),(0,t.jsx)(gy,{children:(0,t.jsxs)(gC,{children:[(0,t.jsx)(gI,{children:"상세주소"}),(0,t.jsx)(o.default.Input.Text,{disabled:h,placeholder:"상세주소를 입력해주세요.",$autoFilled:k(y,n?.addressDetail??""),style:E("addressDetail",gS),value:y,onChange:e=>{c("addressDetail"),d(t=>({...t,addressDetail:e.target.value}))}}),S("addressDetail")]})}),(0,t.jsx)(gy,{children:(0,t.jsxs)(gC,{children:[(0,t.jsx)(gI,{children:"특이사항(메모)"}),(0,t.jsx)(o.default.Input.Text,{disabled:h,placeholder:"메모가 필요한 사항을 입력해주세요.",$autoFilled:k(v,n?.note??""),style:E("note",gS),value:v,onChange:e=>{c("note"),d(t=>({...t,note:e.target.value}))}}),S("note")]})}),(0,t.jsxs)(gy,{children:[(0,t.jsxs)(gC,{$width:186,children:[(0,t.jsxs)(gI,{children:["접수일",(0,t.jsx)(gb,{})]}),(0,t.jsx)(o.default.Input.Date,{disabled:h,$autoFilled:O,style:E("firstRegisteredDate",{...gS,height:36}),value:x,onChange:e=>{(c("firstRegisteredDate"),""===e.trim())?d(e=>({...e,firstRegisteredDate:void 0})):eV.default.is(e)&&d(t=>({...t,firstRegisteredDate:e}))}}),S("firstRegisteredDate")]}),(0,t.jsxs)(gC,{$width:197,children:[(0,t.jsx)(gI,{children:"계약 시작일"}),(0,t.jsx)(o.default.Input.Date,{value:g,style:{...gS,height:36},onChange:e=>{(c("contractStartDate"),""===e.trim())?d(e=>({...e,contractStartDate:void 0,contractEndDate:void 0})):eV.default.is(e)&&d(t=>{let n={...t,contractStartDate:e};if("DISABILITY_ACTIVITY_SUPPORT"!==t.serviceType)return n;let i=gu(t.serviceWorkerName??"",t.residentRegistrationNumber??"",t.phoneNumber,t.serviceType),l=(0,gc.getDefaultDisabilityActivitySupportContractEndDate)(e,t.residentRegistrationNumber??"",i);return{...n,contractEndDate:l}})},showClearButton:"create"===l}),S("contractStartDate")]}),(0,t.jsxs)(gC,{$width:197,children:[(0,t.jsx)(gI,{children:"계약 종료일"}),(0,t.jsx)(o.default.Input.Date,{value:m,emptyValueText:"DISABILITY_ACTIVITY_SUPPORT"===C&&I>=4&&eV.default.is(g)&&""===m?"계약기간 없음":void 0,style:{...gS,height:36},onChange:e=>{(c("contractEndDate"),""===e.trim())?d(e=>({...e,contractEndDate:void 0})):eV.default.is(e)&&d(t=>({...t,contractEndDate:e}))}}),S("contractEndDate")]})]}),(0,t.jsxs)(gy,{children:[(0,t.jsxs)(gC,{children:[(0,t.jsxs)(gI,{children:["사업구분",(0,t.jsx)(gb,{})]}),(0,t.jsx)(o.default.Input.Select,{style:gS,value:z??"",disabled:!0,children:gh.map(e=>(0,t.jsx)("option",{value:e,children:"DAY_CARE"===e?`${oj.default[e].label}서비스`:oj.default[e].label},e))})]}),(0,t.jsxs)(gC,{children:[(0,t.jsxs)(gI,{children:["서비스명",(0,t.jsx)(gb,{})]}),(0,t.jsxs)(o.default.Input.Select,{style:gS,value:C??"",disabled:!0,children:[(0,t.jsx)("option",{value:"",children:"서비스 타입을 선택하세요"}),gp.map(e=>(0,t.jsx)("option",{value:e,children:"MEAL"===e||"NUTRITION"===e?`${r.default[e].label}관리 서비스`:r.default[e].label},e))]})]}),(0,t.jsxs)(gC,{children:[(0,t.jsxs)(gI,{children:["서비스코드",(0,t.jsx)(gb,{})]}),(0,t.jsx)(o.default.Input.Select,{style:gS,value:C??"",disabled:!0,children:void 0===C?null:(0,t.jsx)("option",{value:C,children:r.default[C].code})})]}),(0,t.jsxs)(gC,{children:[(0,t.jsxs)(gI,{children:["서비스유형",(0,t.jsx)(gb,{})]}),(0,t.jsx)(o.default.Input.Select,{style:gS,value:C??"",disabled:!0,children:void 0===C?null:(0,t.jsx)("option",{value:C,children:"DISABILITY_ACTIVITY_SUPPORT"===C?"활동보조":`${r.default[C].label}관리 서비스`})})]})]})]})]})});function gb(){return(0,t.jsx)(gz,{children:" *"})}let g_=l.default.div.withConfig({componentId:"zh__sc-b1e5df68-0"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  align-self: stretch;
`,gw=l.default.div.withConfig({componentId:"zh__sc-b1e5df68-1"})`
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
  text-align: center;
`,gy=l.default.div.withConfig({componentId:"zh__sc-b1e5df68-2"})`
  display: flex;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;

  min-height: 59px;
`,gv=l.default.div.withConfig({componentId:"zh__sc-b1e5df68-3"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-self: stretch;
`,gC=l.default.div.withConfig({componentId:"zh__sc-b1e5df68-4"})`
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
`,gI=l.default.div.withConfig({componentId:"zh__sc-b1e5df68-5"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #000;
  text-align: center;
`,gz=l.default.span.withConfig({componentId:"zh__sc-b1e5df68-6"})`
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: normal;
  color: #e7000b;
`,gT=l.default.div.withConfig({componentId:"zh__sc-b1e5df68-7"})`
  font-size: 12px;
  line-height: 16px;
  color: #ff4d4f;
`,gE=(0,l.default)(o.default.Input.Text).withConfig({componentId:"zh__sc-b1e5df68-8"})`
  &::placeholder {
    color: #0a0a0a;
  }
`,gS={display:"flex",padding:"4px 16px",alignItems:"center",gap:"10px",flex:"1 0 0",alignSelf:"stretch",fontSize:16,maxHeight:36};var gk=e.i(35997);let gD="EARNED_INCOME",gA="BUSINESS_INCOME",gO="OTHER_INCOME",gL="FLAT_RATE",g$="ORGANIZATION_STANDARD",gR="ALWAYS_PAID",gP="ALWAYS_NOT_PAID",gN="MONTHLY_60_HOURS_OR_MORE",gM="MONTHLY_64_HOURS_OR_MORE",gF="MONTHLY_65_HOURS_OR_MORE",gU="ALWAYS_ACCRUED",gB="NOT_ACCRUED",{SERVICE_WORKER_EMPLOYMENT_CONTRACT_CATEGORY:gY}=el.default.enums,gV=Object.keys(gY).filter(e=>e in gY).map(e=>({key:e,label:gY[e].label}));function gW(e){return e in gk.default}let gH=Object.keys(gk.default).filter(gW),gG=[{key:gN,label:"월 60시간 이상 적립"},{key:gM,label:"월 64시간 이상"},{key:gF,label:"월 65시간 이상"},{key:gU,label:"항상 적립"},{key:gB,label:"미적립"}],gK=[{key:gD,label:"근로소득"},{key:gA,label:"사업소득"},{key:gO,label:"기타소득"},{key:gL,label:"정액제"}],gX=[{key:g$,label:"기관 기준"},{key:gR,label:"항상 지급"},{key:gP,label:"항상 미지급"}],gq=[{key:"nationalPensionEnrolled",label:"국민연금"},{key:"healthInsuranceEnrolled",label:"건강보험"},{key:"employmentInsuranceEnrolled",label:"고용보험"},{key:"industrialAccidentInsuranceEnrolled",label:"산재보험"}],gQ=["신규","보수"],gZ=function(){let{matchingClientName:e}=a.default.modal.serviceWorkerCreate,[n,l]=(0,i.useState)({nationalPensionEnrolled:"",healthInsuranceEnrolled:"",employmentInsuranceEnrolled:"",industrialAccidentInsuranceEnrolled:""}),[d,r]=(0,i.useState)({nationalPensionEnrolled:"",healthInsuranceEnrolled:"",employmentInsuranceEnrolled:"",industrialAccidentInsuranceEnrolled:""}),{serviceWorkerDraft:s,analyzedServiceWorkerDraft:c,mode:f,updateServiceWorkerDraft:h,getServiceWorkerDraftFieldError:p,clearServiceWorkerDraftFieldError:u}=a.default.modal.serviceWorkerCreate;if(null===s)return null;let x="renew"===f,g="DISABILITY_ACTIVITY_SUPPORT"===s.serviceType,m=""!==(s.contractStartDate??"").trim(),j=void 0===s.isTrainee?void 0:s.isTrainee?"신규":"보수",b=s.bankName??tt.default.SELECT_EMPTY_VALUE,_=s.accountNumber??"",w=s.accountHolder??"",y=s.employmentContractCategory??"GENERAL",v=s.isTrainee,C=s.criminalRecordChecked??!1,I=s.deviceType,z=s.terminalNumber??"",T=s.retirementReserveContractType,E=s.incomeTaxCategory,S=s.incomeTaxFlatAmount??"",k=s.incomeTaxRate??"",D=s.leaveAllowancePaymentMethod,A=s.isNonTaxableExclusionTarget,O=s.qualificationInfo??"",L=s.relatedDocumentInfo??"",$=e=>{let n=p(e);return""===n?null:(0,t.jsx)(mr,{"data-service-worker-create-field-error":"true",children:n})},R=(e,t)=>{let n=String(t??"").trim();return""!==n&&e.trim()===n},P=e=>""===p(e)?mg:{...mg,borderColor:"#ff4d4f",background:"#fff5f5"};return(0,t.jsxs)(g0,{children:[(0,t.jsx)(g1,{children:"계좌∙자격 및 기타 정보"}),(0,t.jsxs)(g2,{children:[(0,t.jsxs)(g6,{$width:191,children:[(0,t.jsx)(g4,{children:"은행명"}),(0,t.jsxs)(g3,{disabled:x,style:P("bankName"),$isEmptySelected:b===tt.default.SELECT_EMPTY_VALUE,value:b,onChange:e=>{u("bankName"),h(t=>({...t,bankName:e.target.value===tt.default.SELECT_EMPTY_VALUE?void 0:gW(e.target.value)?e.target.value:void 0}))},children:[(0,t.jsx)("option",{value:tt.default.SELECT_EMPTY_VALUE,"data-trigger-label":"은행을 선택해주세요.",children:"선택안함"}),gH.map(e=>(0,t.jsx)("option",{value:e,children:gk.default[e].label},e))]}),$("bankName")]}),(0,t.jsxs)(g6,{children:[(0,t.jsx)(g4,{children:"계좌번호"}),(0,t.jsx)(o.default.Input.Text,{disabled:x,placeholder:"계좌번호를 입력해주세요.",$autoFilled:R(_,c?.accountNumber),style:P("accountNumber"),value:_,onChange:e=>{u("accountNumber"),h(t=>({...t,accountNumber:e.target.value}))}}),$("accountNumber")]}),(0,t.jsxs)(g6,{children:[(0,t.jsx)(g4,{children:"예금주"}),(0,t.jsx)(o.default.Input.Text,{disabled:x,placeholder:"예금주를 입력해주세요.",$autoFilled:R(w,c?.accountHolder),style:P("accountHolder"),value:w,onChange:e=>{u("accountHolder"),h(t=>({...t,accountHolder:e.target.value}))}}),$("accountHolder")]})]}),(0,t.jsxs)(g2,{children:[(0,t.jsxs)(g6,{$width:228,children:[(0,t.jsx)(g4,{children:"제공인력 자격정보"}),(0,t.jsx)(o.default.Input.Text,{placeholder:"자격정보를 입력해주세요.",style:mg,value:O,onChange:e=>h(t=>({...t,qualificationInfo:e.target.value}))})]}),(0,t.jsx)(g6,{$width:158,children:g&&m?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(g4,{children:"교육 종류"}),(0,t.jsxs)(g9,{$isEmptySelected:void 0===j,style:mg,value:j??tt.default.SELECT_EMPTY_VALUE,onChange:e=>{let t=e.target.value;t===tt.default.SELECT_EMPTY_VALUE?h(e=>({...e,isTrainee:void 0})):("신규"===t||"보수"===t)&&h(e=>({...e,isTrainee:"신규"===t}))},children:[(0,t.jsx)("option",{value:tt.default.SELECT_EMPTY_VALUE,children:"미정"}),gQ.map(e=>(0,t.jsx)("option",{value:e,children:e},e))]})]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(g4,{children:["실습 여부 ",(0,t.jsx)(gJ,{})]}),(0,t.jsxs)(g8,{children:[(0,t.jsxs)(ma,{children:[(0,t.jsx)(md,{name:"service-worker-training",checked:!0===v,onChange:()=>{u("isTrainee"),h(e=>({...e,isTrainee:!0}))}}),"이수"]}),(0,t.jsxs)(ma,{children:[(0,t.jsx)(md,{name:"service-worker-training",checked:!1===v,onChange:()=>{u("isTrainee"),h(e=>({...e,isTrainee:!1}))}}),"미이수"]})]}),$("isTrainee")]})}),(0,t.jsxs)(g6,{children:[(0,t.jsx)(g4,{children:"범죄경력 조회여부"}),(0,t.jsx)(g8,{children:(0,t.jsxs)(ma,{children:[(0,t.jsx)(mo,{checked:C,onChange:e=>h(t=>({...t,criminalRecordChecked:e.target.checked}))}),"조회 완료"]})})]}),(0,t.jsxs)(g6,{$width:228,children:[(0,t.jsx)(g4,{children:"관련서류 제출여부"}),(0,t.jsx)(o.default.Input.Text,{placeholder:"제출여부를 입력해주세요.",style:mg,value:L,onChange:e=>h(t=>({...t,relatedDocumentInfo:e.target.value}))})]})]}),(0,t.jsxs)(g2,{children:[(0,t.jsxs)(g6,{$width:186,children:[(0,t.jsxs)(g4,{children:["단말기 정보 ",(0,t.jsx)(gJ,{})]}),(0,t.jsxs)(g8,{children:[(0,t.jsxs)(ma,{children:[(0,t.jsx)(md,{name:"service-worker-device-type",checked:"SMARTPHONE"===I,onChange:()=>{u("deviceType"),h(e=>({...e,deviceType:"SMARTPHONE",terminalNumber:""}))}}),"스마트폰"]}),(0,t.jsxs)(ma,{children:[(0,t.jsx)(md,{name:"service-worker-device-type",checked:"TERMINAL"===I,onChange:()=>{u("deviceType"),h(e=>({...e,deviceType:"TERMINAL"}))}}),"단말기"]})]}),$("deviceType")]}),(0,t.jsxs)(g6,{$width:228,children:[(0,t.jsx)(g4,{children:"단말기 번호"}),(0,t.jsx)(o.default.Input.Text,{disabled:"TERMINAL"!==I,placeholder:"번호를 입력해주세요.",style:mg,value:z,onChange:e=>h(t=>({...t,terminalNumber:e.target.value}))})]})]}),(0,t.jsxs)(g2,{children:[!g&&(0,t.jsxs)(g6,{$width:207,children:[(0,t.jsxs)(g4,{children:["인력 유형 ",(0,t.jsx)(gJ,{})]}),(0,t.jsx)(g8,{children:gV.map(e=>(0,t.jsxs)(ma,{children:[(0,t.jsx)(md,{disabled:x,name:"service-worker-employment-contract-category",checked:y===e.key,onChange:()=>{u("employmentContractCategory"),h(t=>({...t,employmentContractCategory:e.key}))}}),e.label]},e.key))}),$("employmentContractCategory")]}),(0,t.jsxs)(g7,{children:[(0,t.jsx)(g4,{children:"연결할 이용자"}),(0,t.jsx)(me,{$isEmptySelected:null===e,value:e??tt.default.SELECT_EMPTY_VALUE,disabled:!0,children:(0,t.jsx)("option",{value:e??tt.default.SELECT_EMPTY_VALUE,"data-trigger-label":"이용자를 선택하세요.",disabled:!0,children:e??"선택안함"})})]})]}),(0,t.jsx)(g1,{children:"급여 관련 사항"}),(0,t.jsx)(g2,{children:(0,t.jsxs)(g6,{children:[(0,t.jsxs)(g4,{children:["퇴직적립금 관련 계약 ",(0,t.jsx)(gJ,{})]}),(0,t.jsx)(g8,{children:gG.map(e=>(0,t.jsxs)(ma,{children:[(0,t.jsx)(md,{name:"service-worker-retirement-reserve",checked:T===e.key,onChange:()=>{u("retirementReserveContractType"),h(t=>({...t,retirementReserveContractType:e.key}))}}),e.label]},e.key))}),$("retirementReserveContractType")]})}),(0,t.jsxs)(g2,{children:[(0,t.jsxs)(mt,{children:[(0,t.jsxs)(g4,{children:["소득세 구분 ",(0,t.jsx)(gJ,{})]}),(0,t.jsxs)(mn,{children:[gK.map(e=>(0,t.jsxs)(ma,{children:[(0,t.jsx)(md,{name:"service-worker-income-tax-type",checked:E===e.key,onChange:()=>{u("incomeTaxCategory"),h(t=>({...t,incomeTaxCategory:e.key}))}}),e.label]},e.key)),(0,t.jsx)(o.default.Input.Text,{disabled:E!==gL,placeholder:"금액을 입력하세요.",style:mm,value:S,onChange:e=>h(t=>({...t,incomeTaxFlatAmount:e.target.value}))}),(0,t.jsx)(ml,{children:"원"})]}),$("incomeTaxCategory")]}),(0,t.jsxs)(g6,{$width:184,children:[(0,t.jsx)(g4,{children:"소득세 적용비율"}),(0,t.jsxs)(mi,{children:[(0,t.jsx)(o.default.Input.Text,{placeholder:"100",style:mj,value:k,onChange:e=>h(t=>({...t,incomeTaxRate:e.target.value}))}),(0,t.jsx)(ml,{children:"%"})]})]})]}),(0,t.jsxs)(g2,{children:[(0,t.jsxs)(g6,{$width:338,children:[(0,t.jsxs)(g4,{children:["연월차수당 지급방식 ",(0,t.jsx)(gJ,{})]}),(0,t.jsx)(g8,{children:gX.map(e=>(0,t.jsxs)(ma,{children:[(0,t.jsx)(md,{name:"service-worker-annual-leave-allowance",checked:D===e.key,onChange:()=>{u("leaveAllowancePaymentMethod"),h(t=>({...t,leaveAllowancePaymentMethod:e.key}))}}),e.label]},e.key))}),$("leaveAllowancePaymentMethod")]}),(0,t.jsxs)(g6,{children:[(0,t.jsxs)(g4,{children:["비과세급여 적용 ",(0,t.jsx)(gJ,{})]}),(0,t.jsx)(g8,{children:(0,t.jsxs)(ma,{children:[(0,t.jsx)(mo,{checked:A??!1,onChange:e=>{u("isNonTaxableExclusionTarget"),h(t=>({...t,isNonTaxableExclusionTarget:e.target.checked}))}}),"비과세 처리 적용대상 제외"]})}),$("isNonTaxableExclusionTarget")]})]}),(0,t.jsx)(g1,{children:"사회보험"}),(0,t.jsxs)(ms,{children:[(0,t.jsxs)(mc,{children:[(0,t.jsx)(mf,{children:"구분"}),(0,t.jsx)(mf,{children:"가입 여부"}),(0,t.jsx)(mf,{children:"보수월액(원)"}),(0,t.jsx)(mf,{children:"비고"})]}),gq.map(({key:e,label:i})=>(0,t.jsxs)(mh,{children:[(0,t.jsx)(mp,{children:i}),(0,t.jsx)(mp,{children:(0,t.jsxs)(mu,{children:[(0,t.jsx)(mo,{checked:s[e]??!0,onChange:t=>h(n=>({...n,[e]:t.target.checked}))}),"가입"]})}),(0,t.jsx)(mp,{children:(0,t.jsx)(mx,{value:n[e],onChange:t=>l(n=>({...n,[e]:t.target.value}))})}),(0,t.jsx)(mp,{children:(0,t.jsx)(mx,{value:d[e],onChange:t=>r(n=>({...n,[e]:t.target.value}))})})]},e))]})]})};function gJ(){return(0,t.jsx)(g5,{children:" *"})}let g0=l.default.div.withConfig({componentId:"zh__sc-5d9d83cf-0"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  align-self: stretch;
`,g1=l.default.div.withConfig({componentId:"zh__sc-5d9d83cf-1"})`
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
  color: #0a0a0a;
`,g2=l.default.div.withConfig({componentId:"zh__sc-5d9d83cf-2"})`
  display: flex;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;

  min-height: 59px;
`,g6=l.default.div.withConfig({componentId:"zh__sc-5d9d83cf-3"})`
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
`,g4=l.default.div.withConfig({componentId:"zh__sc-5d9d83cf-4"})`
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  color: #000;
`,g5=l.default.span.withConfig({componentId:"zh__sc-5d9d83cf-5"})`
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  color: #e7000b;
`,g3=(0,l.default)(o.default.Input.Select).withConfig({componentId:"zh__sc-5d9d83cf-6"})`
  color: ${({$isEmptySelected:e})=>e?"#9ca3af":"#0a0a0a"};

  &&:disabled {
    color: ${({$isEmptySelected:e})=>e?"#9ca3af":"#0a0a0a"};
  }
`,g9=(0,l.default)(o.default.Input.Select).withConfig({componentId:"zh__sc-5d9d83cf-7"})`
  color: ${({$isEmptySelected:e})=>e?"#9ca3af":"#0a0a0a"};

  &&:disabled {
    color: ${({$isEmptySelected:e})=>e?"#9ca3af":"#0a0a0a"};
  }
`,g8=l.default.div.withConfig({componentId:"zh__sc-5d9d83cf-8"})`
  display: flex;
  gap: 12px;
  align-items: center;
  height: 36px;
`,g7=(0,l.default)(g6).withConfig({componentId:"zh__sc-5d9d83cf-9"})`
  flex: none;
  width: 200px;
`,me=(0,l.default)(o.default.Input.Select).withConfig({componentId:"zh__sc-5d9d83cf-10"})`
  width: 200px;
  min-height: 36px;
  color: ${({$isEmptySelected:e})=>e?"#9ca3af":"#0a0a0a"};

  &&:disabled {
    color: ${({$isEmptySelected:e})=>e?"#9ca3af":"#0a0a0a"};
  }
`,mt=(0,l.default)(g6).withConfig({componentId:"zh__sc-5d9d83cf-11"})`
  min-width: 0;
`,mn=(0,l.default)(g8).withConfig({componentId:"zh__sc-5d9d83cf-12"})`
  width: 100%;
`,mi=l.default.div.withConfig({componentId:"zh__sc-5d9d83cf-13"})`
  display: flex;
  gap: 4px;
  align-items: center;
  height: 36px;
`,ml=l.default.span.withConfig({componentId:"zh__sc-5d9d83cf-14"})`
  flex-shrink: 0;

  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  color: #000;
`,ma=l.default.label.withConfig({componentId:"zh__sc-5d9d83cf-15"})`
  display: inline-flex;
  gap: 4px;
  align-items: center;
  white-space: nowrap;
`,md=(0,l.default)(o.default.Input.Radio).withConfig({componentId:"zh__sc-5d9d83cf-16"})`
  width: 20px;
  height: 20px;
`,mo=(0,l.default)(o.default.Input.Check).attrs({$iconSizeRatio:1.5}).withConfig({componentId:"zh__sc-5d9d83cf-17"})`
  width: 24px;
  height: 24px;
`,mr=l.default.div.withConfig({componentId:"zh__sc-5d9d83cf-18"})`
  font-size: 12px;
  line-height: 16px;
  color: #ff4d4f;
`,ms=l.default.div.withConfig({componentId:"zh__sc-5d9d83cf-19"})`
  overflow: hidden;
  align-self: stretch;
`,mc=l.default.div.withConfig({componentId:"zh__sc-5d9d83cf-20"})`
  display: grid;
  grid-template-columns: 1fr 1.15fr 1.35fr 1.35fr;
  border-bottom: 1px solid #e5e7eb;
  background: #f3f4f6;
`,mf=l.default.div.withConfig({componentId:"zh__sc-5d9d83cf-21"})`
  display: flex;
  align-items: center;
  justify-content: center;

  min-height: 32px;

  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  color: #0a0a0a;
`,mh=l.default.div.withConfig({componentId:"zh__sc-5d9d83cf-22"})`
  display: grid;
  grid-template-columns: 1fr 1.15fr 1.35fr 1.35fr;
  min-height: 64px;

  &:not(:last-child) {
    border-bottom: 1px solid #e5e7eb;
  }
`,mp=l.default.div.withConfig({componentId:"zh__sc-5d9d83cf-23"})`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 8px 12px;

  font-size: 16px;
  line-height: 20px;
  color: #0a0a0a;
`,mu=l.default.label.withConfig({componentId:"zh__sc-5d9d83cf-24"})`
  display: inline-flex;
  gap: 8px;
  align-items: center;
`,mx=(0,l.default)(o.default.Input.Text).withConfig({componentId:"zh__sc-5d9d83cf-25"})`
  width: 100%;
  height: 36px;
  padding: 4px 16px;
`,mg={display:"flex",alignItems:"center",alignSelf:"stretch",width:"100%",height:36,padding:"4px 16px",fontSize:16},mm={...mg,flex:"none",width:160},mj={...mg,flex:"none",width:"100%"},mb=Object.keys(tl.default).filter(function(e){return e in tl.default}),m_=["PHYSICAL_ACTIVITY_SUPPORT","HOUSEKEEPING_SUPPORT","SOCIAL_ACTIVITY_SUPPORT","OTHER"],mw={PHYSICAL_ACTIVITY_SUPPORT:"physicalActivityDescription",HOUSEKEEPING_SUPPORT:"housekeepingActivityDescription",SOCIAL_ACTIVITY_SUPPORT:"socialActivityDescription",OTHER:"otherActivityDescription"},my=["소지","미소지"],mv=["ALL","MALE","FEMALE"],mC=["TWENTIES_OR_YONGER","THIRTIES","FORTIES","FIFTIES","SIXTIES","SEVENTIES_OR_OLDER"],mI=(0,n.observer)(function(){let{serviceWorkerDraft:e,updateServiceWorkerDraft:n,getServiceWorkerDraftFieldError:i,clearServiceWorkerDraftFieldError:l}=a.default.modal.serviceWorkerCreate;if(null===e)return null;let d=e.availableTimes??[],o=e.regions??[],r=e.careTypes??[],s=mb.every(e=>o.includes(e)),c=e.desiredClientGender,f=e.desiredAgeRanges??[],h=m_.every(e=>r.includes(e)),p=e.hasVehicle,u=e.preferredWeeklyWorkingHours,x="DISABILITY_ACTIVITY_SUPPORT"===e.serviceType,g=""!==(e.contractStartDate??"").trim(),m=(e,t)=>t.includes(e)?t.filter(t=>t!==e):[...t,e],j=i("availableTimes"),b=i("preferredWeeklyWorkingHours"),_=i("regions"),w=i("careTypes"),y=i("desiredClientGender"),v=i("desiredAgeRanges"),C=i("hasVehicle");return(0,t.jsxs)(mz,{children:[(0,t.jsxs)(mT,{children:[(0,t.jsxs)(mE,{children:["근무 가능 시간",x&&(0,t.jsx)(mS,{})]}),(0,t.jsxs)(mD,{children:[(0,t.jsx)(te.default,{sx:{fontSize:20}}),(0,t.jsx)(mA,{children:"시간대를 추가하고, 추가한 시간대를 클릭하면 수정하거나 삭제할 수 있습니다."})]})]}),(0,t.jsx)(mO,{value:d,onChange:e=>{let t=e.target.value;l("availableTimes"),n(e=>({...e,availableTimes:t}))}}),""!==j&&(0,t.jsx)(mH,{"data-service-worker-create-field-error":"true",children:j}),(0,t.jsxs)(mL,{children:[(0,t.jsx)(m$,{children:"희망 근로 시간"}),(0,t.jsxs)(mR,{children:[(0,t.jsx)(mN,{children:"총"}),(0,t.jsx)(mP,{value:void 0===u?"":String(u),placeholder:"00",maxLength:2,style:""===b?void 0:{borderColor:"#ff4d4f",background:"#fff5f5"},onChange:e=>{let t=e.target.value.replace(/\D/g,"");if(""===t){l("preferredWeeklyWorkingHours"),n(e=>({...e,preferredWeeklyWorkingHours:void 0}));return}let i=Math.min(Number(t),99);l("preferredWeeklyWorkingHours"),n(e=>({...e,preferredWeeklyWorkingHours:i}))}}),(0,t.jsx)(mN,{children:"시간"})]})]}),""!==b&&(0,t.jsx)(mH,{"data-service-worker-create-field-error":"true",children:b}),(0,t.jsxs)(mM,{children:[(0,t.jsxs)(mF,{children:["서비스 가능 지역 (복수 선택 가능)",x&&(0,t.jsx)(mS,{})]}),(0,t.jsxs)(mU,{children:[(0,t.jsxs)(mB,{children:[(0,t.jsx)(mG,{checked:s,onChange:()=>{l("regions"),n(e=>({...e,regions:s?[]:mb}))}}),(0,t.jsx)(mV,{children:"전체 선택"})]}),mb.map(e=>(0,t.jsxs)(mB,{children:[(0,t.jsx)(mG,{checked:o.includes(e),onChange:()=>{let t=m(e,o);l("regions"),n(e=>({...e,regions:t}))}}),(0,t.jsx)(mV,{children:tl.default[e].label})]},e))]}),""!==_&&(0,t.jsx)(mH,{"data-service-worker-create-field-error":"true",children:_})]}),x&&(0,t.jsxs)(mM,{children:[(0,t.jsxs)(mF,{children:["가능 활동 내용 (복수 선택 가능) ",(0,t.jsx)(mS,{})]}),(0,t.jsxs)(mU,{children:[(0,t.jsxs)(mB,{children:[(0,t.jsx)(mG,{checked:h,onChange:()=>{l("careTypes"),n(e=>({...e,careTypes:h?[]:[...m_]}))}}),(0,t.jsx)(mV,{children:"전체 선택"})]}),m_.map(i=>(0,t.jsxs)(mB,{children:[(0,t.jsx)(mG,{checked:r.includes(i),onChange:()=>{let e=m(i,r);l("careTypes"),n(t=>({...t,careTypes:e}))}}),(0,t.jsx)(mV,{children:"PHYSICAL_ACTIVITY_SUPPORT"===i?"신체 활동":ta.default[i].label}),(0,t.jsx)(mY,{value:e[mw[i]]??"",placeholder:"관련 내용을 입력해주세요.",onChange:e=>n(t=>({...t,[mw[i]]:e.target.value}))})]},i))]}),""!==w&&(0,t.jsx)(mH,{"data-service-worker-create-field-error":"true",children:w})]}),!x&&(0,t.jsxs)(mM,{children:[(0,t.jsxs)(mF,{children:["차량 소지 ",(0,t.jsx)(mS,{})]}),(0,t.jsx)(mU,{children:my.map(e=>(0,t.jsxs)(mB,{children:[(0,t.jsx)(mK,{name:"service-worker-car-ownership",checked:p===("소지"===e),onChange:()=>{l("hasVehicle"),n(t=>({...t,hasVehicle:"소지"===e}))}}),(0,t.jsx)(mV,{children:e})]},e))}),""!==C&&(0,t.jsx)(mH,{"data-service-worker-create-field-error":"true",children:C})]}),x&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(mM,{children:[(0,t.jsxs)(mF,{children:["이용자 희망 성별 ",(0,t.jsx)(mS,{})]}),(0,t.jsx)(mU,{children:mv.map(e=>(0,t.jsxs)(mB,{children:[(0,t.jsx)(mK,{name:"service-worker-client-gender",checked:c===e,onChange:()=>{l("desiredClientGender"),n(t=>({...t,desiredClientGender:e}))}}),(0,t.jsx)(mV,{children:"ALL"===e?"전체":ti.default[e].label})]},e))}),""!==y&&(0,t.jsx)(mH,{"data-service-worker-create-field-error":"true",children:y})]}),(0,t.jsxs)(mM,{children:[(0,t.jsxs)(mF,{children:["이용자 희망 연령 (복수 선택 가능) ",(0,t.jsx)(mS,{})]}),(0,t.jsxs)(mU,{children:[(0,t.jsxs)(mB,{children:[(0,t.jsx)(mG,{checked:f.length===mC.length,onChange:()=>{l("desiredAgeRanges"),n(e=>({...e,desiredAgeRanges:f.length===mC.length?[]:[...mC]}))}}),(0,t.jsx)(mV,{children:"전체 선택"})]}),mC.map(e=>(0,t.jsxs)(mB,{children:[(0,t.jsx)(mG,{checked:f.includes(e),onChange:()=>{l("desiredAgeRanges"),n(t=>({...t,desiredAgeRanges:m(e,f)}))}}),(0,t.jsx)(mV,{children:"TWENTIES_OR_YONGER"===e||"SEVENTIES_OR_OLDER"===e?tn.default[e].label.replace(" 이하","").replace(" 이상",""):tn.default[e].label})]},e))]}),""!==v&&(0,t.jsx)(mH,{"data-service-worker-create-field-error":"true",children:v})]})]}),g&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(mW,{}),(0,t.jsx)(gZ,{})]})]})}),mz=l.default.div.withConfig({componentId:"zh__sc-1335978d-0"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  align-self: stretch;
`,mT=l.default.div.withConfig({componentId:"zh__sc-1335978d-1"})`
  display: flex;
  gap: 16px;
  align-items: center;
  align-self: stretch;

  height: 30px;
`,mE=l.default.div.withConfig({componentId:"zh__sc-1335978d-2"})`
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
  text-align: center;
`;function mS(){return(0,t.jsx)(mk,{children:" *"})}let mk=l.default.span.withConfig({componentId:"zh__sc-1335978d-3"})`
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: normal;
  color: #e7000b;
`,mD=l.default.div.withConfig({componentId:"zh__sc-1335978d-4"})`
  display: flex;
  flex: 1 0 0;
  gap: 4px;
  align-items: center;

  color: #464c53;
`,mA=l.default.div.withConfig({componentId:"zh__sc-1335978d-5"})`
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px; /* 125% */
`,mO=(0,l.default)(o.default.Input.TimeSlider).withConfig({componentId:"zh__sc-1335978d-6"})`
  align-self: stretch;
`,mL=l.default.div.withConfig({componentId:"zh__sc-1335978d-7"})`
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
  align-self: stretch;
`,m$=l.default.div.withConfig({componentId:"zh__sc-1335978d-8"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #000;
  text-align: center;
`,mR=l.default.div.withConfig({componentId:"zh__sc-1335978d-9"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,mP=(0,l.default)(o.default.Input.Text).withConfig({componentId:"zh__sc-1335978d-10"})`
  width: 59px;
  height: 36px;
  text-align: center;
`,mN=l.default.div.withConfig({componentId:"zh__sc-1335978d-11"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #000;
  text-align: center;
`,mM=l.default.div.withConfig({componentId:"zh__sc-1335978d-12"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
  align-self: stretch;
`,mF=l.default.div.withConfig({componentId:"zh__sc-1335978d-13"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #000;
  text-align: center;
`,mU=l.default.div.withConfig({componentId:"zh__sc-1335978d-14"})`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 24px;
  align-items: center;
`,mB=l.default.label.withConfig({componentId:"zh__sc-1335978d-15"})`
  display: inline-flex;
  gap: 8px;
  align-items: center;
  height: 36px;
`,mY=(0,l.default)(o.default.Input.Text).withConfig({componentId:"zh__sc-1335978d-16"})`
  width: 193px;
  height: 36px;
  padding: 4px 16px;
`,mV=l.default.span.withConfig({componentId:"zh__sc-1335978d-17"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #000;
  text-align: center;
`,mW=l.default.div.withConfig({componentId:"zh__sc-1335978d-18"})`
  flex-shrink: 0;
  align-self: stretch;

  height: 1px;
  min-height: 1px;

  background: #e5e7eb;
`,mH=l.default.div.withConfig({componentId:"zh__sc-1335978d-19"})`
  font-size: 12px;
  line-height: 16px;
  color: #ff4d4f;
`,mG=(0,l.default)(o.default.Input.Check).attrs({$iconSizeRatio:1.5}).withConfig({componentId:"zh__sc-1335978d-20"})`
  width: 24px;
  height: 24px;
`,mK=(0,l.default)(o.default.Input.Radio).withConfig({componentId:"zh__sc-1335978d-21"})`
  width: 20px;
  height: 20px;
`,mX=(0,n.observer)(function(){return(0,t.jsxs)(mq,{children:[(0,t.jsx)(mQ,{children:"제공인력 기본 정보"}),(0,t.jsx)(gj,{}),(0,t.jsx)(mZ,{}),(0,t.jsx)(mI,{})]})}),mq=l.default.div.withConfig({componentId:"zh__sc-7b7809b5-0"})`
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
`,mQ=l.default.div.withConfig({componentId:"zh__sc-7b7809b5-1"})`
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
  text-align: center;
`,mZ=l.default.div.withConfig({componentId:"zh__sc-7b7809b5-2"})`
  flex-shrink: 0;

  width: 100%;
  height: 1px;
  min-height: 1px;

  background: #e5e7eb;
`,mJ=(0,n.observer)(function(){let{serviceWorkerDraft:e}=a.default.modal.serviceWorkerCreate;return(0,t.jsxs)(m0,{children:[(0,t.jsx)(go,{}),e&&(0,t.jsx)(mX,{})]})}),m0=l.default.div.withConfig({componentId:"zh__sc-e5134819-0"})`
  overflow: hidden;
  display: flex;
  flex: 1 1 auto;
  align-self: stretch;
  justify-content: center;

  min-height: 0;
  max-height: none;

  background: #f9fafb;
`;function m1(){let{close:e,mode:n}=a.default.modal.serviceWorkerCreate;return(0,t.jsxs)(m2,{children:[(0,t.jsx)(m6,{children:"renew"===n?"제공인력 재계약하기":"contract"===n?"제공인력 계약하기":"신규 제공인력 등록하기"}),(0,t.jsxs)(m4,{onClick:e,children:[(0,t.jsx)(W.X,{size:16}),"닫기"]})]})}let m2=l.default.div.withConfig({componentId:"zh__sc-e97a276c-0"})`
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
`,m6=l.default.div.withConfig({componentId:"zh__sc-e97a276c-1"})`
  font-size: 18px;
  font-weight: 700;
  font-style: normal;
  line-height: 28px; /* 155.556% */
  color: #101828;
  letter-spacing: -0.439px;
`,m4=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-e97a276c-2"})`
  display: flex;
  gap: 6px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,m5=(0,n.observer)(function(){let e=a.default.modal.serviceWorkerCreate,{status:n}=e,l=(0,i.useRef)(null);return((0,i.useEffect)(()=>"ready"!==n?void e.setToastContainer(null):(e.setToastContainer(l.current),()=>{e.setToastContainer(null)}),[e,n]),"ready"!==n)?null:(0,t.jsx)(d.default,{children:(0,t.jsxs)(m3,{ref:l,children:[(0,t.jsx)(m1,{}),(0,t.jsx)(mJ,{}),(0,t.jsx)(xp,{}),(0,t.jsx)(s,{currentServiceType:e.selectedServiceType,detectedServiceType:e.pendingDetectedServiceType??e.selectedServiceType,isContinueDisabled:!e.isPendingDetectedServiceAvailable,isOpen:e.isServiceTypeMismatchDialogOpen,onCancel:e.cancelServiceTypeMismatchRegistration,onContinue:e.confirmServiceTypeMismatchRegistration,registrationTarget:"제공인력"}),(0,t.jsx)(xj,{})]})})}),m3=l.default.div.withConfig({componentId:"zh__sc-cb4ab18d-0"})`
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
`;function m9({type:e,onClose:n}){let l=a.default.modal.serviceWorkerDetail.serviceWorker,[o,r]=(0,i.useState)([]),[s,c]=(0,i.useState)(!0);return(0,i.useEffect)(()=>{let t=!0;return(async()=>{var n,i,d,o,s;let f;if(null===l)return c(!1);if("address"===e){let e,o,s,f,[h,p]=await Promise.all([a.default.serviceWorker.info.byServiceWorker.getServiceWorkerChangeHistory(l.id,"address"),a.default.serviceWorker.info.byServiceWorker.getServiceWorkerChangeHistory(l.id,"addressDetail")]);if(!t||(c(!1),null!==h[0]||null!==p[0]||null===h[1]||null===p[1]))return;r((n=h[1],i=p[1],d=l.createdAt,e=new Map,(o=(t,n)=>{t.slice().sort((e,t)=>new Date(e.createdAt).getTime()-new Date(t.createdAt).getTime()).forEach(({oldValue:t,newValue:i,createdAt:l},a)=>{if(0===a&&null!==t&&""!==t.trim()){let i=e.get(d)??{};i[n]=t.trim(),e.set(d,i)}if(null!==i&&""!==i.trim()){let t=e.get(l)??{};t[n]=i.trim(),e.set(l,t)}})})(n,"address"),o(i,"addressDetail"),s="",f="",Array.from(e.entries()).sort(([e],[t])=>new Date(e).getTime()-new Date(t).getTime()).map(([e,t])=>(s=t.address??s,f=t.addressDetail??f,{address:s,addressDetail:f,changedAt:e,value:""})).reverse()));return}let[h,p]=await a.default.serviceWorker.info.byServiceWorker.getServiceWorkerChangeHistory(l.id,"phoneNumber");t&&(c(!1),null===h&&null!==p&&r((o=p,s=l.createdAt,f=[],o.slice().sort((e,t)=>new Date(e.createdAt).getTime()-new Date(t.createdAt).getTime()).forEach(({oldValue:e,newValue:t,createdAt:n})=>{null!==e&&""!==e.trim()&&f.push({address:"",addressDetail:"",changedAt:s,value:e.trim()}),null!==t&&""!==t.trim()&&f.push({address:"",addressDetail:"",changedAt:n,value:t.trim()})}),f.sort((e,t)=>new Date(t.changedAt).getTime()-new Date(e.changedAt).getTime()))))})(),()=>{t=!1}},[l,e]),(0,t.jsx)(d.default,{children:(0,t.jsxs)(m8,{children:[(0,t.jsxs)(m7,{children:[(0,t.jsxs)(je,{children:["address"===e?"주소/상세주소":"휴대폰"," 변경 이력 보기"]}),(0,t.jsxs)(jt,{type:"button",onClick:n,children:[(0,t.jsx)(W.X,{size:14}),"닫기"]})]}),(0,t.jsx)(jn,{children:s?(0,t.jsx)(jr,{children:"변경 이력을 불러오는 중입니다."}):(0,t.jsxs)(ji,{children:[(0,t.jsxs)(jl,{$isAddress:"address"===e,children:[(0,t.jsx)(ja,{children:"address"===e?"주소":"휴대폰"}),"address"===e?(0,t.jsx)(ja,{children:"상세주소"}):null,(0,t.jsx)(ja,{children:"변경 일자"})]}),0===o.length?(0,t.jsx)(jr,{children:"변경 이력이 없습니다."}):o.map(n=>{let i;return(0,t.jsxs)(jd,{$isAddress:"address"===e,children:[(0,t.jsx)(jo,{children:"address"===e?n.address:n.value}),"address"===e?(0,t.jsx)(jo,{children:n.addressDetail}):null,(0,t.jsx)(jo,{children:Number.isNaN((i=new Date(n.changedAt)).getTime())?"YYYY-MM-DD":`${i.getFullYear()}-${String(i.getMonth()+1).padStart(2,"0")}-${String(i.getDate()).padStart(2,"0")}`})]},`${n.changedAt}-${n.address}-${n.addressDetail}-${n.value}`)})]})})]})})}let m8=l.default.div.withConfig({componentId:"zh__sc-c2667e46-0"})`
  display: flex;
  flex-direction: column;

  width: min(980px, calc(100vw - 32px));
  border-radius: 8px;

  background: #fff;
  box-shadow: 0 4px 16px rgb(0 0 0 / 10%);
`,m7=l.default.div.withConfig({componentId:"zh__sc-c2667e46-1"})`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 69px;
  padding: 16px;
  border-bottom: 1px solid #e5e7eb;
`,je=l.default.h2.withConfig({componentId:"zh__sc-c2667e46-2"})`
  margin: 0;

  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  color: #101828;
`,jt=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-c2667e46-3"})`
  display: flex;
  gap: 6px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,jn=l.default.div.withConfig({componentId:"zh__sc-c2667e46-4"})`
  overflow: auto;
  max-height: min(560px, calc(100vh - 160px));
`,ji=l.default.div.withConfig({componentId:"zh__sc-c2667e46-5"})`
  display: flex;
  flex-direction: column;
  min-width: 560px;
`,jl=l.default.div.withConfig({componentId:"zh__sc-c2667e46-6"})`
  display: grid;
  grid-template-columns: ${({$isAddress:e})=>e?"1fr 1fr 140px":"1fr 140px"};

  min-height: 48px;
  border-bottom: 1px solid #e5e7eb;

  background: #f9fafb;
`,ja=l.default.div.withConfig({componentId:"zh__sc-c2667e46-7"})`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 8px 16px;

  font-size: 14px;
  font-weight: 700;
  color: #344054;
`,jd=l.default.div.withConfig({componentId:"zh__sc-c2667e46-8"})`
  display: grid;
  grid-template-columns: ${({$isAddress:e})=>e?"1fr 1fr 140px":"1fr 140px"};
  min-height: 48px;
  border-bottom: 1px solid #e5e7eb;
`,jo=l.default.div.withConfig({componentId:"zh__sc-c2667e46-9"})`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 8px 16px;

  font-size: 14px;
  color: #464c53;
  overflow-wrap: anywhere;
`,jr=l.default.div.withConfig({componentId:"zh__sc-c2667e46-10"})`
  display: flex;
  align-items: center;
  justify-content: center;

  min-height: 160px;
  padding: 24px;

  font-size: 14px;
  color: #667085;
`,js={residentRegistrationNumberText:"",genderText:"",mobileText:"",contactText:"",addressBaseText:"",addressDetailText:"",postCodeText:"",memoText:""},jc={mobileText:"",contactText:"",postCodeText:"",residentRegistrationNumberText:""},jf=(0,n.observer)(function(){let e=a.default.modal.serviceWorkerDetail,n=a.default.modal.serviceWorkerDetail.serviceWorker,l=null===n?js:{residentRegistrationNumberText:n.residentRegistrationNumber??"",genderText:null===n.gender?"":ti.default[n.gender].label,mobileText:n.phoneNumber??"",contactText:n.contact??"",addressBaseText:n.address??"",addressDetailText:n.addressDetail??"",postCodeText:n.postCode??"",memoText:n.note??""},d=(0,i.useRef)(null),[o,r]=(0,i.useState)(!1),[s,c]=(0,i.useState)(!1),[f,h]=(0,i.useState)(js),[p,u]=(0,i.useState)(jc),[x,g]=(0,i.useState)(null),m=o?f:l,j=o?((e,t)=>{if(!ui.default.brand.residentRegistrationNumber.is(e)&&!ui.default.brand.residentRegistrationNumber.isPartial(e))return t;let n=ui.default.brand.residentRegistrationNumber.extractGender(e);return null===n?t:ti.default[n].label})(m.residentRegistrationNumberText,m.genderText):m.genderText,b=(e,t)=>{h(n=>({...n,[e]:t})),("mobileText"===e||"contactText"===e||"postCodeText"===e||"residentRegistrationNumberText"===e)&&u(t=>({...t,[e]:""}))},_=(0,i.useCallback)(()=>{s||(h(l),u(jc),r(!1))},[s,l]);if((0,i.useEffect)(()=>{if(!o||s)return;let e=e=>{let t=e.target;t instanceof Node&&null!==d.current&&d.current.contains(t)||_()};return document.addEventListener("pointerdown",e),()=>{document.removeEventListener("pointerdown",e)}},[_,o,s]),null===n)return null;let w=async()=>{let t,i,d,o,p,x,g,m,j;if(s)return;let b=(t={},i={},(d=f.mobileText.trim())!==l.mobileText.trim()&&(i.phoneNumber=d),(o=f.residentRegistrationNumberText.trim())!==l.residentRegistrationNumberText.trim()&&(i.residentRegistrationNumber=o),(p=f.contactText.trim())!==l.contactText.trim()&&(i.contact=p),(x=f.postCodeText.trim())!==l.postCodeText.trim()&&(i.postCode=x),(g=f.memoText.trim())!==l.memoText.trim()&&(i.note=g),Object.assign(t,i),(m=f.addressBaseText.trim())!==l.addressBaseText.trim()&&(t.address=m),(j=f.addressDetailText.trim())!==l.addressDetailText.trim()&&(t.addressDetail=j),t);if(!(Object.keys(b).length>0)){h(l),u(jc),r(!1);return}let _=((e,t)=>{let n={...jc},i=e.mobileText.trim()!==t.mobileText.trim(),l=e.contactText.trim()!==t.contactText.trim(),a=e.postCodeText.trim()!==t.postCodeText.trim();if(e.residentRegistrationNumberText.trim()!==t.residentRegistrationNumberText.trim()){let t=e.residentRegistrationNumberText.trim();""===t||ui.default.brand.residentRegistrationNumber.is(t)||ui.default.brand.residentRegistrationNumber.isPartial(t)||(n.residentRegistrationNumberText="유효한 주민등록번호 형식이 아닙니다.")}if(i){let t=e.mobileText.trim();""===t||ui.default.brand.phoneNumber.is(t)||(n.mobileText="유효한 휴대폰 형식이 아닙니다.")}if(l){let t=e.contactText.trim();""===t||ui.default.brand.contactNumber.is(t)||(n.contactText="유효한 연락처 형식이 아닙니다.")}if(a){let t=e.postCodeText.trim();if(""!==t){let[e]=ui.default.brand.postCode.sanitize(t);null!==e&&(n.postCodeText="유효한 우편번호 형식이 아닙니다.")}}return n})(f,l);if(""!==_.mobileText||""!==_.contactText||""!==_.postCodeText||""!==_.residentRegistrationNumberText)return void u(_);u(jc),c(!0);let[w]=await ah.default.data.serviceWorker.patch({id:n.id,payload:b});if(c(!1),null!==w)return;e.markListRefreshNeeded(),h(l),r(!1);let y=a.default.data.serviceWorker.detail;null!==y.query&&y.refetch()};return(0,t.jsxs)(jh,{ref:d,children:[(0,t.jsxs)(jp,{children:[(0,t.jsx)(ju,{children:"인적사항"}),o?(0,t.jsxs)(jx,{children:[(0,t.jsxs)(jg,{type:"button",onClick:_,disabled:s,children:[(0,t.jsx)(iq.default,{sx:{fontSize:20}}),"수정 취소"]}),(0,t.jsxs)(jg,{type:"button",onClick:()=>void w(),disabled:s,children:[(0,t.jsx)(lO.default,{sx:{fontSize:20}}),"수정 저장"]})]}):(0,t.jsxs)(jg,{type:"button",onClick:()=>{h(l),r(!0)},children:[(0,t.jsx)(nW.default,{sx:{fontSize:20}}),"수정하기"]})]}),(0,t.jsxs)(jm,{children:[(0,t.jsxs)(jj,{$columns:4,children:[(0,t.jsxs)(jb,{children:["주민등록번호",(0,t.jsx)(jC,{value:m.residentRegistrationNumberText,style:""!==p.residentRegistrationNumberText?jE:void 0,readOnly:!o,onChange:e=>b("residentRegistrationNumberText",e)}),""!==p.residentRegistrationNumberText?(0,t.jsx)(jy,{children:p.residentRegistrationNumberText}):null]}),(0,t.jsxs)(jb,{children:["성별",(0,t.jsx)(jv,{value:j,readOnly:!0})]}),(0,t.jsxs)(jb,{children:[(0,t.jsxs)(j_,{children:[(0,t.jsx)("span",{children:"휴대폰"}),(0,t.jsxs)(jw,{type:"button",disabled:o,onClick:()=>g("phone"),children:[(0,t.jsx)(lL,{sx:{fontSize:12}})," 변경 이력 보기"]})]}),(0,t.jsx)(jI,{value:m.mobileText,style:""!==p.mobileText?jE:void 0,readOnly:!o,onChange:e=>b("mobileText",e)}),""!==p.mobileText?(0,t.jsx)(jy,{children:p.mobileText}):null]}),(0,t.jsxs)(jb,{children:["연락처",(0,t.jsx)(jz,{value:m.contactText,style:""!==p.contactText?jE:void 0,readOnly:!o,onChange:e=>b("contactText",e)}),""!==p.contactText?(0,t.jsx)(jy,{children:p.contactText}):null]})]}),(0,t.jsxs)(jj,{$columns:3,children:[(0,t.jsxs)(jb,{children:[(0,t.jsxs)(j_,{children:[(0,t.jsx)("span",{children:"주소"}),(0,t.jsxs)(jw,{type:"button",disabled:o,onClick:()=>g("address"),children:[(0,t.jsx)(lL,{sx:{fontSize:12}})," 변경 이력 보기"]})]}),(0,t.jsx)(jv,{value:m.addressBaseText,readOnly:!o,onChange:e=>b("addressBaseText",e.target.value)})]}),(0,t.jsxs)(jb,{children:["상세주소",(0,t.jsx)(jv,{value:m.addressDetailText,readOnly:!o,onChange:e=>b("addressDetailText",e.target.value)})]}),(0,t.jsxs)(jb,{children:["우편번호",(0,t.jsx)(jT,{value:m.postCodeText,style:""!==p.postCodeText?jE:void 0,readOnly:!o,onChange:e=>b("postCodeText",e)}),""!==p.postCodeText?(0,t.jsx)(jy,{children:p.postCodeText}):null]})]}),(0,t.jsx)(jj,{$columns:1,children:(0,t.jsxs)(jb,{children:["특이사항(메모)",(0,t.jsx)(jv,{value:m.memoText,readOnly:!o,onChange:e=>b("memoText",e.target.value)})]})})]}),null!==x?(0,t.jsx)(m9,{type:x,onClose:()=>g(null)}):null]})}),jh=l.default.section.withConfig({componentId:"zh__sc-319b784e-0"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;

  width: 100%;
`,jp=l.default.div.withConfig({componentId:"zh__sc-319b784e-1"})`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;

  width: 100%;
  min-height: 40px;
`,ju=l.default.h3.withConfig({componentId:"zh__sc-319b784e-2"})`
  font-size: 18px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 111.111% */
  color: #101828;
`,jx=l.default.div.withConfig({componentId:"zh__sc-319b784e-3"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,jg=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-319b784e-4"})`
  display: flex;
  gap: 4px;
  align-items: center;

  height: 40px;
  padding: 8px 16px;
`,jm=l.default.div.withConfig({componentId:"zh__sc-319b784e-5"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-self: stretch;

  width: 100%;
`,jj=l.default.div.withConfig({componentId:"zh__sc-319b784e-6"})`
  display: grid;
  grid-template-columns: ${({$columns:e})=>4===e?"repeat(4, minmax(0, 1fr))":3===e?"repeat(3, minmax(0, 1fr))":"minmax(0, 1fr)"};
  gap: 12px;
  width: 100%;
`,jb=l.default.label.withConfig({componentId:"zh__sc-319b784e-7"})`
  display: flex;
  flex-direction: column;
  gap: 4px;

  min-width: 0;

  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: #000;
`,j_=l.default.div.withConfig({componentId:"zh__sc-319b784e-8"})`
  display: flex;
  gap: 2px;
  align-items: center;
  min-height: 20px;
`,jw=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-319b784e-9"})`
  gap: 2px;
  padding: 2px 4px;
  font-size: 12px;
  line-height: 1;
`,jy=l.default.div.withConfig({componentId:"zh__sc-319b784e-10"})`
  margin-top: 2px;
  font-size: 12px;
  line-height: 16px;
  color: #ff4d4f;
`,jv=(0,l.default)(o.default.Input.Text).withConfig({componentId:"zh__sc-319b784e-11"})`
  height: 36px;
  padding: 0 16px;
  font-size: 16px;
  line-height: 20px;
`,jC=(0,l.default)(o.default.Input.ResidentRegistrationNumber).withConfig({componentId:"zh__sc-319b784e-12"})`
  height: 36px;
  padding: 0 16px;
  font-size: 16px;
  line-height: 20px;
`,jI=(0,l.default)(o.default.Input.Phone).withConfig({componentId:"zh__sc-319b784e-13"})`
  height: 36px;
  padding: 0 16px;
  font-size: 16px;
  line-height: 20px;
`,jz=(0,l.default)(o.default.Input.Contact).withConfig({componentId:"zh__sc-319b784e-14"})`
  height: 36px;
  padding: 0 16px;
  font-size: 16px;
  line-height: 20px;
`,jT=(0,l.default)(o.default.Input.PostCode).withConfig({componentId:"zh__sc-319b784e-15"})`
  height: 36px;
  padding: 0 16px;
  font-size: 16px;
  line-height: 20px;
`,jE={borderColor:"#ff4d4f",background:"#fff5f5"},jS={availableTimes:[],careTypeDetails:{},desiredAgeRanges:[],desiredClientGender:null,preferredWeeklyWorkingHours:null,regions:[],careTypes:[],hasVehicle:null},jk=Object.keys(tl.default).filter(function(e){return e in tl.default}),jD=Object.keys(ta.default).filter(function(e){return e in ta.default}),jA=[{label:"소지",value:!0},{label:"미소지",value:!1}],jO=[{label:"전체",value:null},{label:"남성",value:"MALE"},{label:"여성",value:"FEMALE"}],jL=Object.keys(tn.default).filter(function(e){return e in tn.default}).map(e=>({label:tn.default[e].label,value:e})),j$=e=>[...new Set(e)].sort(),jR=e=>`${e.dayOfWeek}-${e.hour}`,jP=(e,t)=>{let n=j$(e),i=j$(t);return n.length===i.length&&n.every((e,t)=>e===i[t])},jN=(0,n.observer)(function(){let e=a.default.modal.serviceWorkerDetail,n=a.default.modal.serviceWorkerDetail.serviceWorker,l=(e=>{if(null===e)return jS;let t=e.availableTimes,n={};return e.careTypes.forEach(({careType:e,detail:t})=>{n[e]=t??""}),{availableTimes:t,careTypeDetails:n,desiredAgeRanges:e.desiredAgeRanges,desiredClientGender:e.desiredClientGender,preferredWeeklyWorkingHours:e.preferredWeeklyWorkingHours??null,regions:e.regions,careTypes:e.careTypes.map(({careType:e})=>e),hasVehicle:e.hasVehicle??null}})(n),d=(0,i.useRef)(null),[o,r]=(0,i.useState)(!1),[s,c]=(0,i.useState)(!1),[f,h]=(0,i.useState)(jS),[p,u]=(0,i.useState)({}),x=o?f:l,g=jk.every(e=>x.regions.includes(e)),m=jD.every(e=>x.careTypes.includes(e)),j=e.selectedEmploymentContract?.serviceType??a.default.serviceWorker.info.byServiceWorker.currentServiceType,b="DISABILITY_ACTIVITY_SUPPORT"===j,_=(0,i.useCallback)(()=>{s||(h(l),u({}),r(!1))},[s,l]),w=(0,i.useCallback)(e=>{u(t=>{if(void 0===t[e])return t;let n={...t};return delete n[e],n})},[]);if((0,i.useEffect)(()=>{let e=Object.keys(p)[0];if(void 0===e)return;let t=window.requestAnimationFrame(()=>{let t=d.current?.querySelector(`[data-required-field-error="${e}"]`);t?.scrollIntoView({behavior:"smooth",block:"center"})});return()=>{window.cancelAnimationFrame(t)}},[p]),(0,i.useEffect)(()=>{if(!o||s)return;let e=e=>{let t=e.target;t instanceof Node&&null!==d.current&&d.current.contains(t)||_()};return document.addEventListener("pointerdown",e),()=>{document.removeEventListener("pointerdown",e)}},[_,o,s]),null===n)return null;let y=(e,t)=>o?t.includes(e)?t.filter(t=>t!==e):[...t,e]:t,v=async()=>{var t;let i,d,o;if(s)return;let p=(t=n.careTypes,i={},null===j||((e,t)=>{if(e.length!==t.length)return!1;let n=e.map(jR).sort(),i=t.map(jR).sort();return n.every((e,t)=>e===i[t])})(f.availableTimes,l.availableTimes)||(i.availableTimes=f.availableTimes.map(e=>({...e,serviceType:j}))),jP(f.regions,l.regions)||(i.regions=f.regions),d=jD.some(e=>(f.careTypeDetails[e]??"")!==(l.careTypeDetails[e]??"")),(!jP(f.careTypes,l.careTypes)||d)&&(i.careTypes=f.careTypes.map(e=>({careType:e,detail:f.careTypeDetails[e]??t.find(t=>t.careType===e)?.detail??null}))),f.desiredClientGender!==l.desiredClientGender&&(i.desiredClientGender=f.desiredClientGender??void 0),jP(f.desiredAgeRanges,l.desiredAgeRanges)||(i.desiredAgeRanges=f.desiredAgeRanges),f.preferredWeeklyWorkingHours!==l.preferredWeeklyWorkingHours&&(i.preferredWeeklyWorkingHours=f.preferredWeeklyWorkingHours??void 0),f.hasVehicle!==l.hasVehicle&&null!==f.hasVehicle&&(i.hasVehicle=f.hasVehicle),i);if(!(Object.keys(p).length>0)){h(l),u({}),r(!1);return}let x=(o={},b?(0===f.availableTimes.length&&(o.availableTimes="필수 입력값입니다."),0===f.regions.length&&(o.regions="필수 입력값입니다."),0===f.careTypes.length&&(o.careTypes="필수 입력값입니다."),0===f.desiredAgeRanges.length&&(o.desiredAgeRanges="필수 입력값입니다.")):null===f.hasVehicle&&(o.hasVehicle="필수 입력값입니다."),o);if(Object.keys(x).length>0)return void u(x);u({}),c(!0);let[g]=await ah.default.data.serviceWorker.patch({id:n.id,payload:p});if(c(!1),null!==g)return;e.markListRefreshNeeded(),h(l),r(!1);let m=a.default.data.serviceWorker.detail;null!==m.query&&m.refetch()};return(0,t.jsx)(jB,{ref:d,children:(0,t.jsxs)(jW,{children:[(0,t.jsxs)(jH,{children:[(0,t.jsxs)(jG,{children:[(0,t.jsxs)(jK,{children:["근무 가능 시간",b?(0,t.jsx)(jM,{}):null]}),(0,t.jsxs)(jX,{children:[(0,t.jsx)(te.default,{sx:{fontSize:20}}),(0,t.jsx)(jq,{children:"시간대를 추가하고, 추가한 시간대를 클릭하면 수정하거나 삭제할 수 있습니다."})]}),o&&(0,t.jsx)(jQ,{children:"수정 진행중"})]}),o?(0,t.jsxs)(jY,{children:[(0,t.jsxs)(jV,{type:"button",onClick:_,disabled:s,children:[(0,t.jsx)(iq.default,{sx:{fontSize:20}}),"수정 취소"]}),(0,t.jsxs)(jV,{type:"button",onClick:()=>void v(),disabled:s,children:[(0,t.jsx)(lO.default,{sx:{fontSize:20}}),"수정 저장"]})]}):(0,t.jsxs)(jV,{type:"button",onClick:()=>{h(l),r(!0)},children:[(0,t.jsx)(nW.default,{sx:{fontSize:20}}),"수정하기"]})]}),(0,t.jsx)(jZ,{value:x.availableTimes,disabled:!o,readOnly:!o,onChange:e=>{if(!o)return;let t=e.target.value;w("availableTimes"),h(e=>({...e,availableTimes:t}))}}),void 0!==p.availableTimes?(0,t.jsx)(jU,{"data-required-field-error":"availableTimes",children:p.availableTimes}):null,(0,t.jsxs)(jJ,{children:[(0,t.jsx)(j0,{children:"희망 근로 시간"}),(0,t.jsxs)(j1,{children:[(0,t.jsx)(j6,{children:"총"}),(0,t.jsx)(j2,{value:null===x.preferredWeeklyWorkingHours?"":String(x.preferredWeeklyWorkingHours),placeholder:"00",maxLength:2,disabled:!o,onChange:e=>{if(!o)return;let t=e.target.value.replace(/\D/g,"");if(""===t)return void h(e=>({...e,preferredWeeklyWorkingHours:null}));let n=Math.min(Number(t),99);h(e=>({...e,preferredWeeklyWorkingHours:n}))}}),(0,t.jsx)(j6,{children:"시간"})]})]}),(0,t.jsxs)(j4,{children:[(0,t.jsxs)(j5,{children:["서비스 가능 지역 (복수 선택 가능)",b?(0,t.jsx)(jM,{}):null]}),(0,t.jsxs)(j3,{children:[(0,t.jsxs)(j9,{children:[(0,t.jsx)(be,{disabled:!o,checked:g,onChange:()=>{o&&(w("regions"),h(e=>({...e,regions:g?[]:jk})))}}),(0,t.jsx)(j7,{children:"전체 선택"})]}),jk.map(e=>(0,t.jsxs)(j9,{children:[(0,t.jsx)(be,{disabled:!o,checked:x.regions.includes(e),onChange:()=>{let t=y(e,x.regions);w("regions"),h(e=>({...e,regions:t}))}}),(0,t.jsx)(j7,{children:tl.default[e].label})]},e))]}),void 0!==p.regions?(0,t.jsx)(jU,{"data-required-field-error":"regions",children:p.regions}):null]}),b&&(0,t.jsxs)(j4,{children:[(0,t.jsxs)(j5,{children:["가능 활동 내용 (복수 선택 가능)",(0,t.jsx)(jM,{})]}),(0,t.jsxs)(j3,{children:[(0,t.jsxs)(j9,{children:[(0,t.jsx)(be,{disabled:!o,checked:m,onChange:()=>{o&&(w("careTypes"),h(e=>({...e,careTypes:m?[]:jD})))}}),(0,t.jsx)(j7,{children:"전체 선택"})]}),jD.map(e=>(0,t.jsxs)(j9,{children:[(0,t.jsx)(be,{disabled:!o,checked:x.careTypes.includes(e),onChange:()=>{let t=y(e,x.careTypes);w("careTypes"),h(e=>({...e,careTypes:t}))}}),(0,t.jsx)(j7,{children:"PHYSICAL_ACTIVITY_SUPPORT"===e?"신체 활동":ta.default[e].label}),(0,t.jsx)(j8,{disabled:!o,value:x.careTypeDetails[e]??"",placeholder:"관련 내용을 입력해주세요.",onChange:t=>h(n=>({...n,careTypeDetails:{...n.careTypeDetails,[e]:t.target.value}}))})]},e))]}),void 0!==p.careTypes?(0,t.jsx)(jU,{"data-required-field-error":"careTypes",children:p.careTypes}):null]}),!b&&(0,t.jsxs)(j4,{children:[(0,t.jsxs)(j5,{children:["차량 소지",(0,t.jsx)(jM,{})]}),(0,t.jsx)(j3,{children:jA.map(e=>(0,t.jsxs)(j9,{children:[(0,t.jsx)(bt,{name:"detail-service-worker-car-ownership",checked:x.hasVehicle===e.value,disabled:!o,onChange:()=>{o&&(w("hasVehicle"),h(t=>({...t,hasVehicle:e.value})))}}),(0,t.jsx)(j7,{children:e.label})]},e.label))}),void 0!==p.hasVehicle?(0,t.jsx)(jU,{"data-required-field-error":"hasVehicle",children:p.hasVehicle}):null]}),b&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(j4,{children:[(0,t.jsxs)(j5,{children:["이용자 희망 성별",(0,t.jsx)(jM,{})]}),(0,t.jsx)(j3,{children:jO.map(e=>(0,t.jsxs)(j9,{children:[(0,t.jsx)(bt,{name:"detail-service-worker-client-gender",checked:x.desiredClientGender===e.value,disabled:!o,onChange:()=>{h(t=>({...t,desiredClientGender:e.value}))}}),(0,t.jsx)(j7,{children:e.label})]},e.label))})]}),(0,t.jsxs)(j4,{children:[(0,t.jsxs)(j5,{children:["이용자 희망 연령",(0,t.jsx)(jM,{})]}),(0,t.jsxs)(j3,{children:[(0,t.jsxs)(j9,{children:[(0,t.jsx)(be,{disabled:!o,checked:x.desiredAgeRanges.length===jL.length,onChange:e=>{w("desiredAgeRanges"),h(t=>({...t,desiredAgeRanges:e.target.checked?jL.map(({value:e})=>e):[]}))}}),(0,t.jsx)(j7,{children:"전체 선택"})]}),jL.map(({label:e,value:n})=>(0,t.jsxs)(j9,{children:[(0,t.jsx)(be,{disabled:!o,checked:x.desiredAgeRanges.includes(n),onChange:e=>{w("desiredAgeRanges"),h(t=>({...t,desiredAgeRanges:e.target.checked?[...t.desiredAgeRanges,n]:t.desiredAgeRanges.filter(e=>e!==n)}))}}),(0,t.jsx)(j7,{children:e})]},n))]}),void 0!==p.desiredAgeRanges?(0,t.jsx)(jU,{"data-required-field-error":"desiredAgeRanges",children:p.desiredAgeRanges}):null]})]})]})})});function jM(){return(0,t.jsx)(jF,{children:" *"})}let jF=l.default.span.withConfig({componentId:"zh__sc-3656833f-0"})`
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: normal;
  color: #e7000b;
`,jU=l.default.div.withConfig({componentId:"zh__sc-3656833f-1"})`
  font-size: 12px;
  line-height: 16px;
  color: #ff4d4f;
`,jB=l.default.section.withConfig({componentId:"zh__sc-3656833f-2"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;

  width: 100%;
`,jY=l.default.div.withConfig({componentId:"zh__sc-3656833f-3"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,jV=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-3656833f-4"})`
  display: flex;
  gap: 4px;
  align-items: center;

  height: 40px;
  padding: 8px 16px;
`,jW=l.default.div.withConfig({componentId:"zh__sc-3656833f-5"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  align-self: stretch;
`,jH=l.default.div.withConfig({componentId:"zh__sc-3656833f-6"})`
  display: flex;
  gap: 16px;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;

  width: 100%;
`,jG=l.default.div.withConfig({componentId:"zh__sc-3656833f-7"})`
  display: flex;
  flex: 1 1 auto;
  gap: 16px;
  align-items: center;
`,jK=l.default.div.withConfig({componentId:"zh__sc-3656833f-8"})`
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
  text-align: center;
`,jX=l.default.div.withConfig({componentId:"zh__sc-3656833f-9"})`
  display: flex;
  gap: 4px;
  align-items: center;
  color: #464c53;
`,jq=l.default.div.withConfig({componentId:"zh__sc-3656833f-10"})`
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px;
`,jQ=l.default.div.withConfig({componentId:"zh__sc-3656833f-11"})`
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
`,jZ=(0,l.default)(o.default.Input.TimeSlider).withConfig({componentId:"zh__sc-3656833f-12"})`
  align-self: stretch;
  width: 100%;
  max-width: 808px;
`,jJ=l.default.div.withConfig({componentId:"zh__sc-3656833f-13"})`
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
  align-self: stretch;
`,j0=l.default.div.withConfig({componentId:"zh__sc-3656833f-14"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #000;
  text-align: center;
`,j1=l.default.div.withConfig({componentId:"zh__sc-3656833f-15"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,j2=(0,l.default)(o.default.Input.Text).withConfig({componentId:"zh__sc-3656833f-16"})`
  width: 59px;
  height: 36px;
  text-align: center;
`,j6=l.default.div.withConfig({componentId:"zh__sc-3656833f-17"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #000;
  text-align: center;
`,j4=l.default.div.withConfig({componentId:"zh__sc-3656833f-18"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
  align-self: stretch;
`,j5=l.default.div.withConfig({componentId:"zh__sc-3656833f-19"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #000;
  text-align: center;
`,j3=l.default.div.withConfig({componentId:"zh__sc-3656833f-20"})`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 24px;
  align-items: center;
`,j9=l.default.label.withConfig({componentId:"zh__sc-3656833f-21"})`
  display: inline-flex;
  gap: 8px;
  align-items: center;
  height: 36px;
`,j8=(0,l.default)(o.default.Input.Text).withConfig({componentId:"zh__sc-3656833f-22"})`
  width: 193px;
  height: 36px;
  padding: 4px 16px;
`,j7=l.default.span.withConfig({componentId:"zh__sc-3656833f-23"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #000;
  text-align: center;
`,be=(0,l.default)(o.default.Input.Check).attrs({$iconSizeRatio:1.5}).withConfig({componentId:"zh__sc-3656833f-24"})`
  width: 24px;
  height: 24px;
`,bt=(0,l.default)(o.default.Input.Radio).withConfig({componentId:"zh__sc-3656833f-25"})`
  width: 20px;
  height: 20px;
`,bn=(0,n.observer)(function(){let e=a.default.modal.serviceWorkerDetail,n=e.serviceWorker?.name??"";return(0,t.jsxs)(bi,{children:[(0,t.jsx)(jf,{}),(0,t.jsx)(jN,{}),(0,t.jsxs)(bl,{type:"button",disabled:e.isDeleting,onClick:()=>{e.openDeleteConfirm()},children:[(0,t.jsx)(H.default.Delete,{size:16}),"삭제하기"]}),e.isDeleteConfirmOpen?(0,t.jsx)(ba,{children:(0,t.jsxs)(bd,{children:[(0,t.jsxs)(bo,{children:[(0,t.jsxs)(br,{children:[n," 제공인력을 삭제하시겠어요?"]}),(0,t.jsxs)(bs,{children:["삭제한 제공인력 정보는 복구할 수 없습니다.",(0,t.jsx)("br",{}),"계약 및 근무 이력이 없는 제공인력만 삭제할 수 있습니다."]})]}),(0,t.jsxs)(bc,{children:[(0,t.jsx)(bf,{type:"button",disabled:e.isDeleting,onClick:()=>{e.closeDeleteConfirm()},children:"취소하기"}),(0,t.jsx)(bh,{type:"button",disabled:e.isDeleting,onClick:()=>{e.confirmDelete()},children:"삭제하기"})]})]})}):null]})}),bi=l.default.div.withConfig({componentId:"zh__sc-d3727a60-0"})`
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
`,bl=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-d3727a60-1"})`
  gap: 8px;
  height: 36px;
  padding: 8px 16px;
`,ba=l.default.div.withConfig({componentId:"zh__sc-d3727a60-2"})`
  position: fixed;
  z-index: 1000;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgb(10 10 10 / 35%);
`,bd=l.default.div.withConfig({componentId:"zh__sc-d3727a60-3"})`
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
`,bo=l.default.div.withConfig({componentId:"zh__sc-d3727a60-4"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;
`,br=l.default.h2.withConfig({componentId:"zh__sc-d3727a60-5"})`
  align-self: stretch;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #000;
`,bs=l.default.p.withConfig({componentId:"zh__sc-d3727a60-6"})`
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #000;
`,bc=l.default.div.withConfig({componentId:"zh__sc-d3727a60-7"})`
  display: flex;
  gap: 12px;
  align-items: center;
  align-self: stretch;
  justify-content: flex-end;
`,bf=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-d3727a60-8"})`
  height: 36px;
  padding: 8px 16px;
`,bh=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-d3727a60-9"})`
  height: 36px;
  padding: 8px 16px;
`;var bp=e.i(5070),bu=e.i(553);let bx=(0,n.observer)(function({onClose:e,onSelectClient:n,serviceWorkerId:l,serviceType:d}){let[r,s]=(0,i.useState)(""),[c,f]=(0,i.useState)({}),h=a.default.data.serviceWorker.availableClientList;(0,i.useEffect)(()=>null===d?void h.reset():(h.setQuery({serviceWorkerId:l,serviceType:d}),()=>h.reset()),[h,d,l]),(0,i.useEffect)(()=>{let e=!0;return Promise.all((h.data??[]).map(async({latestContractId:e})=>{if(null===e)return null;let[t,n]=await ah.default.data.contract.get({id:e});return null===t?[e,n]:null})).then(t=>{e&&f(Object.fromEntries(t.filter(e=>null!==e)))}),()=>{e=!1}},[h.data]);let p=(0,i.useMemo)(()=>h.data?.map(e=>({...e,_searchableName:ag.default.create(e.client.name)}))??[],[h.data]).filter(({_searchableName:e})=>ag.default.isMatch(e,r));return(0,t.jsx)(bj,{children:(0,t.jsxs)(bb,{onClick:e=>e.stopPropagation(),children:[(0,t.jsxs)(b_,{children:[(0,t.jsx)(bw,{}),(0,t.jsx)(by,{children:"연결할 이용자 추가하기"}),(0,t.jsx)(o.default.Button.Outlined,{type:"button",style:{width:56,height:36},onClick:e,children:(0,t.jsx)(nY.default,{sx:{fontSize:20}})})]}),(0,t.jsx)(bv,{}),(0,t.jsx)(bC,{children:(0,t.jsxs)(bI,{children:[(0,t.jsx)(bz,{placeholder:"이용자명을 검색하세요.",value:r,onChange:e=>s(e.target.value)}),(0,t.jsx)(bT,{children:(0,t.jsx)(bu.Search,{size:16})})]})}),(0,t.jsxs)(bS,{children:["loading"===h.status?(0,t.jsx)(bE,{children:"이용자를 불러오는 중..."}):null,"error"===h.status?(0,t.jsx)(bE,{children:"이용자 목록을 불러오지 못했습니다."}):null,"success"===h.status&&0===p.length?(0,t.jsx)(bE,{children:"연결할 수 있는 이용자가 없습니다."}):null,p.map(({client:e,latestContractId:i})=>{let l=null===i?void 0:c[i];return(0,t.jsxs)(bk,{children:[(0,t.jsxs)(bD,{children:[(0,t.jsx)(bA,{children:e.name}),(0,t.jsxs)(bO,{children:[(0,t.jsxs)(bL,{children:[(0,t.jsx)(b$,{children:"생년월일"}),(0,t.jsx)(bR,{}),(0,t.jsx)(bP,{children:bm(e.birthDate)})]}),(0,t.jsxs)(bL,{children:[(0,t.jsx)(b$,{children:"시작일자"}),(0,t.jsx)(bR,{}),(0,t.jsx)(bP,{children:bg(l?.contractStartDate)})]}),(0,t.jsxs)(bL,{children:[(0,t.jsx)(b$,{children:"종료일자"}),(0,t.jsx)(bR,{}),(0,t.jsx)(bP,{children:bg(l?.contractEndDate)})]})]})]}),(0,t.jsx)(bN,{children:(0,t.jsxs)(bM,{type:"button",disabled:null===i,onClick:()=>{null!==i&&n?.(i)},children:["선택",(0,t.jsx)(au.default,{sx:{fontSize:18}})]})})]},e.id)})]})]})})}),bg=e=>e?.replaceAll("-","")??"-",bm=e=>{let t=bg(e);return 8===t.length?t.slice(2):t},bj=l.default.div.withConfig({componentId:"zh__sc-e99ba75d-0"})`
  position: absolute;
  z-index: 1000;
  inset: 0;

  display: flex;
  justify-content: flex-end;

  padding-top: 69px;
`,bb=l.default.div.withConfig({componentId:"zh__sc-e99ba75d-1"})`
  display: flex;
  flex-direction: column;

  width: min(417px, 100%);
  height: 100%;

  background: #fff;
  box-shadow: -2px 9px 16px rgb(0 0 0 / 16%);
`,b_=l.default.div.withConfig({componentId:"zh__sc-e99ba75d-2"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
`,bw=l.default.div.withConfig({componentId:"zh__sc-e99ba75d-3"})`
  flex-shrink: 0;
  width: 36px;
  height: 36px;
`,by=l.default.div.withConfig({componentId:"zh__sc-e99ba75d-4"})`
  flex: 1;

  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  color: #101828;
  text-align: center;
`,bv=l.default.div.withConfig({componentId:"zh__sc-e99ba75d-5"})`
  height: 1px;
  background: #e5e7eb;
`,bC=l.default.div.withConfig({componentId:"zh__sc-e99ba75d-6"})`
  padding: 16px;
`,bI=l.default.label.withConfig({componentId:"zh__sc-e99ba75d-7"})`
  position: relative;
`,bz=(0,l.default)(o.default.Input.Text).withConfig({componentId:"zh__sc-e99ba75d-8"})`
  width: 100%;
  height: 40px;
  padding: 0 48px 0 16px;
  border-radius: 6px;

  &:focus {
    border-color: #5635ff;
    background: #fbfcff;
  }
`,bT=l.default.span.withConfig({componentId:"zh__sc-e99ba75d-9"})`
  pointer-events: none;

  position: absolute;
  top: 50%;
  right: 16px;
  transform: translateY(-50%);

  display: inline-flex;
  align-items: center;
  justify-content: center;

  color: #0a0a0a;
`,bE=l.default.div.withConfig({componentId:"zh__sc-e99ba75d-10"})`
  padding: 24px 0;
  font-size: 14px;
  color: #667085;
  text-align: center;
`,bS=l.default.div.withConfig({componentId:"zh__sc-e99ba75d-11"})`
  overflow-y: auto;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 12px;

  padding: 16px;

  background: #f9fafb;
`,bk=l.default.div.withConfig({componentId:"zh__sc-e99ba75d-12"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;

  min-height: 163px;
  padding: 16px;
  border: 1px solid #e5e9ef;
  border-radius: 8px;

  background: #fff;

  &:hover {
    border: 1px solid #5635ff;
    background: #f7f5ff;
    box-shadow: 0 0 6px 0 #ddd8ff;
  }
`,bD=l.default.div.withConfig({componentId:"zh__sc-e99ba75d-13"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;
`,bA=l.default.div.withConfig({componentId:"zh__sc-e99ba75d-14"})`
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
`,bO=l.default.div.withConfig({componentId:"zh__sc-e99ba75d-15"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
  align-self: stretch;
`,bL=l.default.div.withConfig({componentId:"zh__sc-e99ba75d-16"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;
`,b$=l.default.div.withConfig({componentId:"zh__sc-e99ba75d-17"})`
  flex-shrink: 0;

  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  color: #0a0a0a;
  text-align: center;
`,bR=l.default.div.withConfig({componentId:"zh__sc-e99ba75d-18"})`
  flex-shrink: 0;
  width: 1px;
  height: 20px;
  background: #e5e7eb;
`,bP=l.default.div.withConfig({componentId:"zh__sc-e99ba75d-19"})`
  overflow: hidden;

  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  color: #45464e;
  text-overflow: ellipsis;
  white-space: nowrap;
`,bN=l.default.div.withConfig({componentId:"zh__sc-e99ba75d-20"})`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-end;
  align-self: stretch;
  justify-content: center;
`,bM=l.default.button.withConfig({componentId:"zh__sc-e99ba75d-21"})`
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
`,bF=(0,n.observer)(function(){let[e,n]=(0,i.useState)(!1),[l,d]=(0,i.useState)(!1),[o,r]=(0,i.useState)({}),s=a.default.data.serviceWorker.detail.data?.assignedContracts,c=s??[];(0,i.useEffect)(()=>{let e=!0;return Promise.all((s??[]).map(async({contractId:e})=>{let[t,n]=await ah.default.data.contract.get({id:e});return null===t?[e,n]:null})).then(t=>{e&&r(Object.fromEntries(t.filter(e=>null!==e)))}),()=>{e=!1}},[s]);let f=async e=>{let t=a.default.modal.serviceWorkerDetail.serviceWorkerId;if(null===t||l)return;d(!0);let[i]=await ah.default.data.contract.update({id:e,payload:{serviceWorkerId:t}});if(d(!1),null!==i)return void a.default.ui.layout.toast.error("이용자 연결에 실패했습니다. 잠시 후 다시 시도해 주세요.");let o=a.default.data.serviceWorker.detail,r=a.default.modal.serviceWorkerDetail;null!==o.query&&await o.refetch();let s=a.default.serviceWorker.info.byServiceWorker;r.markListRefreshNeeded(),s.setStatusFilter("ACTIVE"),s.setSearchText(""),s.setHighlightedServiceWorkerId(t),n(!1),a.default.ui.layout.toast.success("이용자를 연결했습니다.")};return(0,t.jsxs)(bU,{children:[(0,t.jsxs)(bW,{children:[(0,t.jsx)(bH,{children:"연결된 이용자 정보"}),(0,t.jsxs)(bG,{children:[(0,t.jsxs)(bK,{type:"button",disabled:!0,children:[(0,t.jsx)(nW.default,{sx:{fontSize:20}}),"수정하기"]}),(0,t.jsxs)(bK,{type:"button",disabled:null===a.default.modal.serviceWorkerDetail.selectedEmploymentContract,onClick:()=>n(!0),children:[(0,t.jsx)(nU,{sx:{fontSize:20}}),"추가하기"]})]})]}),0===c.length?(0,t.jsxs)(bX,{children:[(0,t.jsx)(nH.default,{sx:{fontSize:24,color:"#494F53"}}),(0,t.jsxs)(b9,{children:[(0,t.jsx)(b8,{children:"연결된 이용자가 없습니다."}),(0,t.jsx)(b7,{children:null===a.default.modal.serviceWorkerDetail.selectedEmploymentContract?"계약 후 이용자를 연결할 수 있습니다.":"[+추가하기] 버튼을 클릭해 이용자를 연결해주세요."})]})]}):(0,t.jsx)(bq,{children:c.map(({contractId:e,clientName:n})=>{let i=o[e];return(0,t.jsxs)(bQ,{children:[(0,t.jsxs)(bZ,{children:[(0,t.jsx)(bJ,{children:n}),(0,t.jsxs)(b0,{children:[(0,t.jsxs)(b1,{children:[(0,t.jsx)(b2,{children:"주소"}),(0,t.jsx)(b6,{}),(0,t.jsx)(b4,{$muted:!0,children:bB(i)})]}),(0,t.jsxs)(b1,{children:[(0,t.jsx)(b2,{children:"휴대폰"}),(0,t.jsx)(b6,{}),(0,t.jsx)(b4,{children:bY(i)})]}),(0,t.jsxs)(b1,{children:[(0,t.jsx)(b2,{children:"이메일"}),(0,t.jsx)(b6,{}),(0,t.jsx)(b4,{children:"-"})]}),(0,t.jsxs)(b1,{children:[(0,t.jsx)(b2,{$small:!0,children:"연결 시작일"}),(0,t.jsx)(b6,{}),(0,t.jsx)(b4,{$small:!0,children:"-"})]}),(0,t.jsxs)(b1,{children:[(0,t.jsx)(b2,{$small:!0,children:"연결 종료일"}),(0,t.jsx)(b6,{}),(0,t.jsx)(b4,{$small:!0,children:"-"})]}),(0,t.jsxs)(b1,{children:[(0,t.jsx)(b2,{$small:!0,children:"상태"}),(0,t.jsx)(b6,{}),(0,t.jsx)(b4,{$small:!0,children:bV(i?.status)})]})]})]}),(0,t.jsx)(b3,{children:(0,t.jsx)(b5,{children:"지금 선택됨"})})]},e)})}),e&&null!==a.default.modal.serviceWorkerDetail.serviceWorkerId?(0,t.jsx)(bx,{onClose:()=>n(!1),onSelectClient:e=>void f(e),serviceWorkerId:a.default.modal.serviceWorkerDetail.serviceWorkerId,serviceType:a.default.modal.serviceWorkerDetail.selectedEmploymentContract?.serviceType??null}):null]})}),bU=l.default.section.withConfig({componentId:"zh__sc-58e34935-0"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;

  width: 100%;
`,bB=e=>e?.client.address??"-",bY=e=>{let t=e?.client.phoneNumber;return null==t||""===t.trim()?"-":t},bV=e=>e===om.default.ACTIVE?"서비스중":e===om.default.TERMINATED?"종료":e===om.default.COMPLETED?"완료":"-",bW=l.default.div.withConfig({componentId:"zh__sc-58e34935-1"})`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;

  width: 100%;
  min-height: 40px;
`,bH=l.default.h3.withConfig({componentId:"zh__sc-58e34935-2"})`
  font-size: 18px;
  font-weight: 700;
  line-height: 20px;
  color: #101828;
`,bG=l.default.div.withConfig({componentId:"zh__sc-58e34935-3"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,bK=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-58e34935-4"})`
  display: flex;
  gap: 4px;
  align-items: center;

  height: 40px;
  padding: 8px 16px;
`,bX=l.default.div.withConfig({componentId:"zh__sc-58e34935-5"})`
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
`,bq=l.default.div.withConfig({componentId:"zh__sc-58e34935-6"})`
  overflow: auto hidden;
  display: flex;
  flex-wrap: nowrap;
  gap: 10px;

  width: 100%;
`,bQ=l.default.div.withConfig({componentId:"zh__sc-58e34935-7"})`
  display: flex;
  flex: 0 0 319px;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;

  min-height: 248px;
  padding: 16px;
  border: 1px solid #5635ff;
  border-radius: 8px;

  background: #f7f5ff;
  box-shadow: 0 0 6px 0 #ddd8ff;
`,bZ=l.default.div.withConfig({componentId:"zh__sc-58e34935-8"})`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;
`,bJ=l.default.div.withConfig({componentId:"zh__sc-58e34935-9"})`
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
  color: #0a0a0a;
`,b0=l.default.div.withConfig({componentId:"zh__sc-58e34935-10"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
  align-self: stretch;
`,b1=l.default.div.withConfig({componentId:"zh__sc-58e34935-11"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,b2=l.default.div.withConfig({componentId:"zh__sc-58e34935-12"})`
  flex-shrink: 0;

  width: 69px;

  font-size: ${({$small:e})=>!0===e?12:14}px;
  line-height: normal;
  color: #0a0a0a;
`,b6=l.default.div.withConfig({componentId:"zh__sc-58e34935-13"})`
  width: 1px;
  height: 20px;
  background: #e5e7eb;
`,b4=l.default.div.withConfig({componentId:"zh__sc-58e34935-14"})`
  font-size: ${({$small:e})=>!0===e?12:14}px;
  line-height: normal;
  color: ${({$muted:e})=>!0===e?"#45464e":"#0a0a0a"};
`,b5=l.default.span.withConfig({componentId:"zh__sc-58e34935-15"})`
  display: inline-flex;
  gap: 4px;
  align-items: center;
  justify-content: center;

  padding: 8px;
  border-radius: 99px;

  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  color: #fff;
  letter-spacing: -1px;

  background: #4f39f6;
`,b3=l.default.div.withConfig({componentId:"zh__sc-58e34935-16"})`
  display: flex;
  align-items: flex-end;
  align-self: stretch;
  justify-content: flex-end;
`,b9=l.default.div.withConfig({componentId:"zh__sc-58e34935-17"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: center;
`,b8=l.default.div.withConfig({componentId:"zh__sc-58e34935-18"})`
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  color: #494f53;
`,b7=l.default.div.withConfig({componentId:"zh__sc-58e34935-19"})`
  font-size: 16px;
  line-height: 20px;
  color: #494f53;
  text-align: center;
`,_e=Object.keys(gk.default).filter(e=>e in gk.default),_t=[{key:gN,label:"월 60시간 이상 적립"},{key:gM,label:"월 64시간 이상"},{key:gF,label:"월 65시간 이상"},{key:gU,label:"항상 적립"},{key:gB,label:"미적립"}],_n=[{key:gD,label:"근로소득"},{key:gA,label:"사업소득"},{key:gO,label:"기타소득"},{key:gL,label:"정액제"}],_i=[{key:g$,label:"기관 기준"},{key:gR,label:"항상 지급"},{key:gP,label:"항상 미지급"}],_l=[{key:"nationalPensionEnrolled",label:"국민연금"},{key:"healthInsuranceEnrolled",label:"건강보험"},{key:"employmentInsuranceEnrolled",label:"고용보험"},{key:"industrialAccidentInsuranceEnrolled",label:"산재보험"}],_a=["신규","보수"],_d={display:"flex",alignItems:"center",alignSelf:"stretch",width:"100%",height:36,padding:"4px 16px",fontSize:16},_o={..._d,flex:"none",width:158,maxWidth:"100%"};function _r(e,t,n){(0,i.useEffect)(()=>{if(!e)return;let i=e=>{let i=e.target;nN(i)||i instanceof Node&&null!==t.current&&t.current.contains(i)||n()};return document.addEventListener("pointerdown",i),()=>{document.removeEventListener("pointerdown",i)}},[e,n,t])}let _s=(0,n.observer)(function({onRequestEdit:e}){let n=a.default.modal.serviceWorkerDetail.serviceWorker,l=a.default.modal.serviceWorkerDetail.selectedEmploymentContract,d=a.default.modal.serviceWorkerDetail,r=d.isAccountInfoEditing,s=d.isSalaryEditing,c=d.isSocialInsuranceEditing,f=(0,i.useRef)(null),h=(0,i.useRef)(null),p=(0,i.useRef)(null),u=d.accountInfoDraft.bankName??n?.bankName??tt.default.SELECT_EMPTY_VALUE,x="DISABILITY_ACTIVITY_SUPPORT"===(l?.serviceType??a.default.serviceWorker.info.byServiceWorker.currentServiceType),g=x&&l?.contractStartDate!==void 0,m=d.selectedEmploymentContractDraftRetirementReserveContractType,j=d.selectedEmploymentContractDraftIncomeTaxCategory,b=d.selectedEmploymentContractDraftLeaveAllowancePaymentMethod,_=e=>{d.hasEditChanges(e)||d.cancelEditSection(e)};return(_r(r,f,()=>_("accountInfo")),_r(s,h,()=>_("salary")),_r(c,p,()=>_("socialInsurance")),null===n)?null:(0,t.jsxs)(_f,{children:[(0,t.jsx)(bF,{}),(0,t.jsxs)(_h,{ref:f,children:[(0,t.jsxs)(_p,{children:[(0,t.jsxs)(_x,{children:[(0,t.jsx)(_u,{children:"계좌∙자격 및 기타 정보"}),r&&(0,t.jsx)(n2,{children:"수정 진행중"})]}),r?(0,t.jsxs)(_g,{children:[(0,t.jsxs)(_m,{type:"button",onClick:d.cancelAccountInfoEdit,children:[(0,t.jsx)(iq.default,{sx:{fontSize:20}}),"수정 취소"]}),(0,t.jsxs)(_m,{type:"button",onClick:()=>void d.saveAccountInfoEdit(),children:[(0,t.jsx)(lO.default,{sx:{fontSize:20}}),"수정 저장"]})]}):(0,t.jsxs)(_m,{type:"button",onClick:()=>e("accountInfo"),children:[(0,t.jsx)(nW.default,{sx:{fontSize:20}}),"수정하기"]})]}),(0,t.jsxs)(_j,{children:[(0,t.jsxs)(_b,{$width:191,children:[(0,t.jsx)(_w,{children:"은행명"}),(0,t.jsxs)(_C,{disabled:!r,style:_d,$isEmptySelected:u===tt.default.SELECT_EMPTY_VALUE,value:u,onChange:e=>{d.updateAccountInfoDraftField("bankName",e.target.value===tt.default.SELECT_EMPTY_VALUE?void 0:_e.find(t=>t===e.target.value))},children:[(0,t.jsx)("option",{value:tt.default.SELECT_EMPTY_VALUE,children:"선택안함"}),_e.map(e=>(0,t.jsx)("option",{value:e,children:gk.default[e].label},e))]})]}),(0,t.jsxs)(_b,{children:[(0,t.jsx)(_w,{children:"계좌번호"}),(0,t.jsx)(o.default.Input.Text,{disabled:!r,placeholder:"계좌번호를 입력해주세요.",style:_d,value:d.accountInfoDraft.accountNumber??n.accountNumber??"",onChange:e=>d.updateAccountInfoDraftField("accountNumber",e.target.value)})]}),(0,t.jsxs)(_b,{children:[(0,t.jsx)(_w,{children:"예금주"}),(0,t.jsx)(o.default.Input.Text,{disabled:!r,placeholder:"예금주를 입력해주세요.",style:_d,value:d.accountInfoDraft.accountHolder??n.accountHolder??"",onChange:e=>d.updateAccountInfoDraftField("accountHolder",e.target.value)})]})]}),(0,t.jsxs)(_j,{children:[(0,t.jsxs)(_b,{children:[(0,t.jsx)(_w,{children:"제공인력 자격정보"}),(0,t.jsx)(o.default.Input.Text,{disabled:!r,placeholder:"자격정보를 입력해주세요.",style:_d,value:d.accountInfoDraft.qualificationInfo??n.qualificationInfo??"",onChange:e=>d.updateAccountInfoDraftField("qualificationInfo",e.target.value)})]}),(0,t.jsx)(_b,{children:g?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(_w,{children:"교육 종류"}),(0,t.jsxs)(_v,{$isEmptySelected:!0,disabled:!0,style:_o,value:tt.default.SELECT_EMPTY_VALUE,children:[(0,t.jsx)("option",{value:tt.default.SELECT_EMPTY_VALUE,disabled:!0,children:"미정"}),_a.map(e=>(0,t.jsx)("option",{value:e,children:e},e))]})]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(_w,{children:"실습 여부"}),(0,t.jsxs)(_I,{children:[(0,t.jsxs)(_D,{children:[(0,t.jsx)(_L,{checked:d.accountInfoDraft.isTrainee??n.isTrainee,disabled:!r,onChange:()=>d.updateAccountInfoDraftField("isTrainee",!0)}),"이수"]}),(0,t.jsxs)(_D,{children:[(0,t.jsx)(_L,{checked:!(d.accountInfoDraft.isTrainee??n.isTrainee),disabled:!r,onChange:()=>d.updateAccountInfoDraftField("isTrainee",!1)}),"미이수"]})]})]})}),(0,t.jsxs)(_b,{children:[(0,t.jsx)(_w,{children:"범죄경력 조회여부"}),(0,t.jsx)(_I,{children:(0,t.jsxs)(_D,{children:[(0,t.jsx)(_$,{checked:d.accountInfoDraft.criminalRecordChecked??n.criminalRecordChecked,disabled:!r,onChange:e=>d.updateAccountInfoDraftField("criminalRecordChecked",e.target.checked)}),"조회 완료"]})})]})]}),(0,t.jsx)(_j,{children:(0,t.jsxs)(_b,{children:[(0,t.jsx)(_w,{children:"관련서류 제출여부"}),(0,t.jsx)(o.default.Input.Text,{disabled:!r,placeholder:"제출여부를 입력해주세요.",style:_d,value:d.accountInfoDraft.relatedDocumentInfo??n.relatedDocumentInfo??"",onChange:e=>d.updateAccountInfoDraftField("relatedDocumentInfo",e.target.value)})]})}),(0,t.jsxs)(_j,{children:[(0,t.jsxs)(_b,{$width:191,children:[(0,t.jsx)(_w,{children:"단말기 정보"}),(0,t.jsxs)(_I,{children:[(0,t.jsxs)(_D,{children:[(0,t.jsx)(_L,{checked:"SMARTPHONE"===d.accountInfoTerminalType,disabled:!r,onChange:()=>d.updateAccountInfoTerminalType("SMARTPHONE")}),"스마트폰"]}),(0,t.jsxs)(_D,{children:[(0,t.jsx)(_L,{checked:"DEVICE"===d.accountInfoTerminalType,disabled:!r,onChange:()=>d.updateAccountInfoTerminalType("DEVICE")}),"단말기"]})]})]}),(0,t.jsxs)(_b,{children:[(0,t.jsx)(_w,{children:"단말기 번호"}),(0,t.jsx)(o.default.Input.Text,{disabled:!r||"DEVICE"!==d.accountInfoTerminalType,placeholder:"번호를 입력해주세요.",style:_d,value:d.accountInfoTerminalNumber,onChange:e=>d.updateAccountInfoDraftField("terminalNumber",e.target.value)})]})]}),!x&&(0,t.jsx)(_j,{children:(0,t.jsxs)(_b,{children:[(0,t.jsx)(_w,{children:"인력 유형"}),(0,t.jsx)(_I,{children:Object.entries(bp.default).map(([e,{label:n}])=>(0,t.jsxs)(_D,{children:[(0,t.jsx)(_L,{checked:l?.category===e,disabled:!0}),n]},e))})]})})]}),(0,t.jsxs)(_h,{ref:h,children:[(0,t.jsxs)(_p,{children:[(0,t.jsxs)(_x,{children:[(0,t.jsx)(_u,{children:"급여 관련 사항"}),s&&(0,t.jsx)(n2,{children:"수정 진행중"})]}),s?(0,t.jsxs)(_g,{children:[(0,t.jsxs)(_m,{type:"button",onClick:d.cancelSalaryEdit,children:[(0,t.jsx)(iq.default,{sx:{fontSize:20}}),"수정 취소"]}),(0,t.jsxs)(_m,{type:"button",onClick:()=>void d.saveSalaryEdit(),children:[(0,t.jsx)(lO.default,{sx:{fontSize:20}}),"수정 저장"]})]}):(0,t.jsxs)(_m,{type:"button",disabled:null===l,onClick:()=>e("salary"),children:[(0,t.jsx)(nW.default,{sx:{fontSize:20}}),"수정하기"]})]}),(0,t.jsx)(_j,{children:(0,t.jsxs)(_b,{children:[(0,t.jsx)(_w,{children:"퇴직적립금 관련 계약"}),(0,t.jsx)(_z,{children:_t.map(e=>(0,t.jsxs)(_O,{children:[(0,t.jsx)(_L,{checked:m===e.key,disabled:!s,onChange:()=>d.updateSelectedEmploymentContractDraftField("retirementReserveContractType",e.key)}),e.label]},e.key))})]})}),(0,t.jsxs)(_j,{children:[(0,t.jsxs)(_T,{children:[(0,t.jsx)(_w,{children:"소득세 구분"}),(0,t.jsx)(_E,{children:_n.map(e=>(0,t.jsxs)(_A,{children:[(0,t.jsx)(_L,{checked:j===e.key,disabled:!s,onChange:()=>d.updateSelectedEmploymentContractDraftField("incomeTaxCategory",e.key)}),e.label,e.key===gL&&(0,t.jsxs)(_S,{children:[(0,t.jsx)(o.default.Input.Text,{disabled:!s,placeholder:"금액을 입력하세요.",style:_R,value:null===d.selectedEmploymentContractDraftIncomeTaxFlatAmount?"":String(d.selectedEmploymentContractDraftIncomeTaxFlatAmount),onChange:e=>{let t=e.target.value;d.updateSelectedEmploymentContractDraftField("incomeTaxFlatAmount",""===t?void 0:Number(t))}}),(0,t.jsx)(_k,{children:"원"})]})]},e.key))})]}),(0,t.jsxs)(_b,{$width:184,children:[(0,t.jsx)(_w,{children:"소득세 적용비율"}),(0,t.jsxs)(_S,{children:[(0,t.jsx)(o.default.Input.Text,{disabled:!s,type:"number",min:1,max:200,placeholder:"1~200 입력 가능",style:_P,value:null===d.selectedEmploymentContractDraftIncomeTaxRate?"":String(d.selectedEmploymentContractDraftIncomeTaxRate),onChange:e=>{let t=e.target.value;if(""===t)return void d.updateSelectedEmploymentContractDraftField("incomeTaxRate",void 0);let n=Number(t);d.updateSelectedEmploymentContractDraftField("incomeTaxRate",Number.isNaN(n)?void 0:Math.min(200,Math.max(1,n)))}}),(0,t.jsx)(_k,{children:"%"})]})]})]}),(0,t.jsx)(_j,{children:(0,t.jsxs)(_b,{children:[(0,t.jsxs)(_w,{children:["비과세급여 적용 ",(0,t.jsx)(_c,{})]}),(0,t.jsx)(_I,{children:(0,t.jsxs)(_D,{children:[(0,t.jsx)(_$,{checked:d.selectedEmploymentContractDraftIsNonTaxableExclusionTarget,disabled:!s,onChange:e=>d.updateSelectedEmploymentContractDraftField("isNonTaxableExclusionTarget",e.target.checked)}),"비과세 처리 적용대상 제외"]})}),d.isNonTaxableExclusionTargetError&&(0,t.jsx)(__,{children:"필수 입력값입니다."})]})}),(0,t.jsx)(_j,{children:(0,t.jsxs)(_b,{$width:338,children:[(0,t.jsx)(_w,{children:"연월차수당 지급방식"}),(0,t.jsx)(_I,{children:_i.map(e=>(0,t.jsxs)(_D,{children:[(0,t.jsx)(_L,{checked:b===e.key,disabled:!s,onChange:()=>d.updateSelectedEmploymentContractDraftField("leaveAllowancePaymentMethod",e.key)}),e.label]},e.key))})]})})]}),(0,t.jsxs)(_h,{ref:p,children:[(0,t.jsxs)(_p,{children:[(0,t.jsxs)(_x,{children:[(0,t.jsx)(_u,{children:"사회보험"}),c&&(0,t.jsx)(n2,{children:"수정 진행중"})]}),c?(0,t.jsxs)(_g,{children:[(0,t.jsxs)(_m,{type:"button",onClick:d.cancelSocialInsuranceEdit,children:[(0,t.jsx)(iq.default,{sx:{fontSize:20}}),"수정 취소"]}),(0,t.jsxs)(_m,{type:"button",onClick:()=>void d.saveSocialInsuranceEdit(),children:[(0,t.jsx)(lO.default,{sx:{fontSize:20}}),"수정 저장"]})]}):(0,t.jsxs)(_m,{type:"button",onClick:()=>e("socialInsurance"),children:[(0,t.jsx)(nW.default,{sx:{fontSize:20}}),"수정하기"]})]}),(0,t.jsxs)(_N,{children:[(0,t.jsxs)(_M,{children:[(0,t.jsx)(_F,{children:"구분"}),(0,t.jsx)(_F,{children:"가입 여부"}),(0,t.jsx)(_F,{children:"보수월액(원)"}),(0,t.jsx)(_F,{children:"비고"})]}),_l.map(({key:e,label:i})=>(0,t.jsxs)(_U,{children:[(0,t.jsx)(_B,{children:i}),(0,t.jsx)(_B,{children:(0,t.jsxs)(_Y,{children:[(0,t.jsx)(_$,{checked:d.socialInsuranceDraft[e]??n[e]??!1,disabled:!c,onChange:t=>d.updateSocialInsuranceDraftField(e,t.target.checked)}),"가입"]})}),(0,t.jsx)(_B,{children:(0,t.jsx)(_V,{value:"",readOnly:!0})}),(0,t.jsx)(_B,{children:(0,t.jsx)(_V,{value:"",readOnly:!0})})]},e))]})]})]})});function _c(){return(0,t.jsx)(_y,{children:" *"})}let _f=l.default.div.withConfig({componentId:"zh__sc-5f426f6a-0"})`
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
`,_h=l.default.section.withConfig({componentId:"zh__sc-5f426f6a-1"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;
`,_p=l.default.div.withConfig({componentId:"zh__sc-5f426f6a-2"})`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;

  min-height: 40px;
`,_u=l.default.h3.withConfig({componentId:"zh__sc-5f426f6a-3"})`
  font-size: 18px;
  font-weight: 700;
  line-height: 20px;
  color: #101828;
`,_x=l.default.div.withConfig({componentId:"zh__sc-5f426f6a-4"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,_g=l.default.div.withConfig({componentId:"zh__sc-5f426f6a-5"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,_m=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-5f426f6a-6"})`
  display: flex;
  gap: 4px;
  align-items: center;

  height: 40px;
  padding: 8px 16px;
`,_j=l.default.div.withConfig({componentId:"zh__sc-5f426f6a-7"})`
  display: flex;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;

  min-height: 59px;
`,_b=l.default.div.withConfig({componentId:"zh__sc-5f426f6a-8"})`
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
`,__=l.default.div.withConfig({componentId:"zh__sc-5f426f6a-9"})`
  margin-top: 2px;
  font-size: 12px;
  line-height: 16px;
  color: #ff4d4f;
`,_w=l.default.div.withConfig({componentId:"zh__sc-5f426f6a-10"})`
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  color: #000;
`,_y=l.default.span.withConfig({componentId:"zh__sc-5f426f6a-11"})`
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  color: #e7000b;
`,_v=(0,l.default)(o.default.Input.Select).withConfig({componentId:"zh__sc-5f426f6a-12"})`
  color: ${({$isEmptySelected:e})=>e?"#9ca3af":"#0a0a0a"};

  &&:disabled {
    color: ${({$isEmptySelected:e})=>e?"#9ca3af":"#0a0a0a"};
  }
`,_C=(0,l.default)(o.default.Input.Select).withConfig({componentId:"zh__sc-5f426f6a-13"})`
  color: ${({$isEmptySelected:e})=>e?"#9ca3af":"#0a0a0a"};

  &&:disabled {
    color: ${({$isEmptySelected:e})=>e?"#9ca3af":"#0a0a0a"};
  }
`,_I=l.default.div.withConfig({componentId:"zh__sc-5f426f6a-14"})`
  display: flex;
  gap: 24px;
  align-items: center;
  height: 36px;
`,_z=(0,l.default)(_I).withConfig({componentId:"zh__sc-5f426f6a-15"})`
  align-self: stretch;
`,_T=(0,l.default)(_b).withConfig({componentId:"zh__sc-5f426f6a-16"})``,_E=(0,l.default)(_I).withConfig({componentId:"zh__sc-5f426f6a-17"})`
  align-self: stretch;
`,_S=l.default.div.withConfig({componentId:"zh__sc-5f426f6a-18"})`
  display: flex;
  gap: 4px;
  align-items: center;
  height: 36px;
`,_k=l.default.span.withConfig({componentId:"zh__sc-5f426f6a-19"})`
  flex-shrink: 0;

  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  color: #000;
`,_D=l.default.label.withConfig({componentId:"zh__sc-5f426f6a-20"})`
  display: inline-flex;
  gap: 8px;
  align-items: center;
  white-space: nowrap;
`,_A=(0,l.default)(_D).withConfig({componentId:"zh__sc-5f426f6a-21"})`
  flex: 1;
`,_O=(0,l.default)(_D).withConfig({componentId:"zh__sc-5f426f6a-22"})`
  flex: 1;
`,_L=(0,l.default)(o.default.Input.Radio).withConfig({componentId:"zh__sc-5f426f6a-23"})`
  width: 20px;
  height: 20px;
`,_$=(0,l.default)(o.default.Input.Check).attrs({$iconSizeRatio:1.5}).withConfig({componentId:"zh__sc-5f426f6a-24"})`
  width: 24px;
  height: 24px;
`,_R={..._d,flex:"none",width:160},_P={..._d,flex:"none",width:"100%"},_N=l.default.div.withConfig({componentId:"zh__sc-5f426f6a-25"})`
  overflow: hidden;
  align-self: stretch;
`,_M=l.default.div.withConfig({componentId:"zh__sc-5f426f6a-26"})`
  display: grid;
  grid-template-columns: 1fr 1.15fr 1.35fr 1.35fr;
  border-bottom: 1px solid #e5e7eb;
  background: #f3f4f6;
`,_F=l.default.div.withConfig({componentId:"zh__sc-5f426f6a-27"})`
  display: flex;
  align-items: center;
  justify-content: center;

  min-height: 32px;

  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  color: #0a0a0a;
`,_U=l.default.div.withConfig({componentId:"zh__sc-5f426f6a-28"})`
  display: grid;
  grid-template-columns: 1fr 1.15fr 1.35fr 1.35fr;
  min-height: 64px;

  &:not(:last-child) {
    border-bottom: 1px solid #e5e7eb;
  }
`,_B=l.default.div.withConfig({componentId:"zh__sc-5f426f6a-29"})`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 8px 12px;

  font-size: 16px;
  line-height: 20px;
  color: #0a0a0a;
`,_Y=l.default.label.withConfig({componentId:"zh__sc-5f426f6a-30"})`
  display: inline-flex;
  gap: 8px;
  align-items: center;
`,_V=(0,l.default)(o.default.Input.Text).withConfig({componentId:"zh__sc-5f426f6a-31"})`
  width: 100%;
  height: 36px;
  padding: 4px 16px;
`,_W={status:"WAITING_TO_LINK",badge:{label:"연동 대기",color:"lightBlue"},action:{label:"연동 대기중...",color:"blue",disabled:!0}};function _H(e){return e?.isCreated===!0}function _G(e,t){return null!==e.createdAt&&(null===t.createdAt||e.createdAt>t.createdAt||e.createdAt===t.createdAt&&String(e.id)>String(t.id))}function _K(e,t){return 0===t||0===e?"unchecked":e===t?"checked":"indeterminate"}function _X({status:e,onClick:n}){return(0,t.jsx)(wl,{$status:e,onClick:n,children:"checked"===e?(0,t.jsx)(lO.default,{sx:{fontSize:18}}):"indeterminate"===e?(0,t.jsx)(o2,{sx:{fontSize:20}}):null})}let _q=(0,n.observer)(function(){let e=a.default.modal.serviceWorkerDetail,n=e.documentTemplateListStatus,l=e.employmentContractDocumentListStatus,d=e.documentTemplates,o=e.employmentContractDocuments,r=e.selectedEmploymentContractId,[s,c]=(0,i.useState)(new Set),[f,h]=(0,i.useState)(!1),p=(0,i.useMemo)(()=>{let e=new Map;return o.forEach(t=>{let n=e.get(t.templateId);(void 0===n||_G(t,n))&&e.set(t.templateId,t)}),e},[o]),u=(0,i.useMemo)(()=>d.flatMap(e=>{let t=p.get(e.id);return void 0===t?[]:[{phaseGroup:e.phaseGroup,phaseGroupLabel:e.phaseGroupLabel,templateId:e.id,templateName:t.templateName,templateImagePath:e.templateImagePath,document:t}]}),[p,d]),x=(0,i.useMemo)(()=>{let e=new Map;return u.forEach(t=>{let n=e.get(t.phaseGroup);void 0===n?e.set(t.phaseGroup,{key:t.phaseGroup,label:t.phaseGroupLabel,cards:[t]}):n.cards.push(t)}),Array.from(e.values())},[u]),g=(0,i.useMemo)(()=>Array.from(new Set(u.flatMap(e=>_H(e.document)?[e.document.id]:[]))),[u]),m=g.filter(e=>s.has(e)).length,j=_K(m,g.length),b=e=>{c(t=>{let n=new Set(t);return e.forEach(e=>n.add(e)),n})},_=e=>{c(t=>{let n=new Set(t);return e.forEach(e=>n.delete(e)),n})},w=e=>{let t=new Set(e);return u.filter(e=>_H(e.document)&&t.has(e.document.id))},y=async t=>{let n=e.serviceWorkerId;if(null===n)return a.default.ui.layout.toast.error("제공인력 정보를 찾을 수 없어 출력을 진행할 수 없습니다."),null;let i=Array.from(new Set(t.filter(e=>null!==e.document&&"AUTO_CREATED"===e.document.status).map(e=>e.document.id)));if(0===i.length)return!1;let l=await Promise.all(i.map(e=>ah.default.data.serviceWorker.patchDocument({id:n,documentId:e,payload:{fields:[]}}))),d=l.find(([e])=>null!==e)?.[0]??null;return null!==d?(a.default.ui.layout.toast.error(d.message??"서류 상태 저장에 실패했습니다."),null):(await a.default.data.serviceWorker.employmentContractDocumentList.refetch(),!0)},v=async e=>{let{document:t}=e;if(null===t)return null;let[n,i]=await ah.default.data.serviceWorker.getDocumentTemplate({templateId:e.templateId});return null!==n||null===i?null:i.map(e=>{let n=t.inputData.find(t=>t.page===e.page&&t.fieldKey===e.fieldKey);return{...e,value:n?.value??null}})},C=async e=>{let t=[],n=[],i=0;for(let l of e){let e=await v(l);if(null===e)return a.default.ui.layout.toast.error(`서류 서식 정보를 불러오지 못했습니다. (${l.templateName})`),null;(l.templateImagePath??[]).forEach((a,d)=>{if(""===a)return;let o=d+1;i+=1,t.push({id:`${l.document.id}-${o}`,templateId:l.templateId,imagePath:a,page:i}),e.filter(e=>e.page===o).forEach(e=>{n.push({...e,id:e.id,page:i})})})}return{pages:t,fields:n}},I=async(t,n)=>{if(0!==t.length){h(!0);try{let i=w(t),l=await y(i);if(null===l)return;l&&await new Promise(e=>{window.setTimeout(e,600)});let d=w(t),o=await C(d);if(null===o)return;let{pages:r,fields:s}=o;if(0===r.length)return void a.default.ui.layout.toast.error("출력할 서류 이미지가 없습니다.");let f=1===d.length?d[0]?.templateName??"제공인력 서류 출력":`제공인력 서류 ${d.length}건`,h=!1;await (0,hI.renderDocumentPrintView)({pages:r,fields:s,printTitle:f,retryOnImageLoadFailure:{refresh:async()=>{await a.default.data.serviceWorker.documentTemplateList.refetch()},rebuildPayload:async()=>{var n,i;let l,a,d=(n=e.documentTemplates,i=e.employmentContractDocuments,l=new Map,i.forEach(e=>{let t=l.get(e.templateId);(void 0===t||_G(e,t))&&l.set(e.templateId,e)}),a=new Set(t),n.flatMap(e=>{let t=l.get(e.id);return void 0!==t&&_H(t)&&!0===a.has(t.id)?[{phaseGroup:e.phaseGroup,phaseGroupLabel:e.phaseGroupLabel,templateId:e.id,templateName:t.templateName,templateImagePath:e.templateImagePath,document:t}]:[]})),o=await C(d);return null===o||0===o.pages.length?null:{...o,printTitle:f}}},onImageLoadFailure:e=>{h=!0,a.default.ui.layout.toast.error(`서류 이미지 ${e}개 로딩에 실패하여 출력을 중단했습니다.`)}}),n&&!h&&c(new Set)}finally{h(!1)}}};return null===r?(0,t.jsx)(wi,{children:"선택 가능한 계약이 없습니다."}):("loading"===n||"loading"===l)&&0===u.length?(0,t.jsx)(wi,{children:"서류 목록을 불러오는 중입니다."}):"error"===n||"error"===l?(0,t.jsx)(wi,{children:"서류 목록을 불러오지 못했습니다. 잠시 후 다시 시도해 주세요."}):0===u.length?(0,t.jsx)(wi,{children:"등록된 서류가 없습니다."}):(0,t.jsxs)(_Q,{children:[(0,t.jsxs)(_Z,{children:[(0,t.jsxs)(_0,{onClick:()=>{"checked"===j?_(g):b(g)},children:[(0,t.jsx)(_X,{status:j}),"전체 선택하기"]}),(0,t.jsxs)(_J,{children:[(0,t.jsxs)(_1,{disabled:0===m||f,onClick:()=>void I(Array.from(s),!0),children:[(0,t.jsx)(rc.default,{sx:{fontSize:16}}),"선택한 서류 출력하기"]}),(0,t.jsxs)(_1,{disabled:0===g.length||f,onClick:()=>void I(g,!1),children:[(0,t.jsx)(rc.default,{sx:{fontSize:16}}),"전체 출력하기"]})]})]}),x.map(e=>(0,t.jsxs)(_2,{children:[(0,t.jsxs)(_6,{onClick:()=>{let t=e.cards.flatMap(e=>_H(e.document)?[e.document.id]:[]);"checked"===_K(t.filter(e=>s.has(e)).length,t.length)?_(t):b(t)},children:[(0,t.jsx)(_X,{status:_K(e.cards.filter(e=>_H(e.document)&&s.has(e.document.id)).length,e.cards.filter(e=>_H(e.document)).length)}),"[",e.label,"]"]}),(0,t.jsx)(_4,{children:e.cards.map(e=>{let n=e.templateImagePath?.[0]??null,i=_H(e.document)&&s.has(e.document.id),l=null===e.document?_W:(0,rW.getServiceWorkerDocumentStatusUi)(e.document.badgeLabel,e.document.actionLabel);return(0,t.jsxs)(_5,{children:[(0,t.jsx)(_3,{children:(0,t.jsx)(_X,{status:i?"checked":"unchecked",onClick:()=>{var t;_H(e.document)&&(t=e.document.id,c(e=>{let n=new Set(e);return n.has(t)?n.delete(t):n.add(t),n}))}})}),(0,t.jsxs)(_9,{$color:l.badge.color,children:[l.badge.icon,l.badge.label]}),(0,t.jsx)(_8,{children:null!==n&&""!==n?(0,t.jsx)(oq.default,{src:n,width:210,height:297,style:{width:"auto",height:"90%",maxWidth:"90%",objectFit:"contain"},loading:"eager",alt:e.templateName}):(0,t.jsx)(oZ,{size:40,color:"#D1D5DC"})}),(0,t.jsxs)(_7,{children:[(0,t.jsx)(we,{children:(0,t.jsx)(wt,{children:e.templateName})}),(0,t.jsx)(wn,{$color:l.action.color,disabled:!0===l.action.disabled||f||null===n||""===n,onClick:()=>{null!==e.document&&a.default.modal.documentView.openServiceWorkerDocument(e.document.id,{templateId:e.templateId})},children:null===n||""===n?"이미지 없음":l.action.label})]})]},e.templateId)})})]},e.key))]})}),_Q=l.default.div.withConfig({componentId:"zh__sc-10675099-0"})`
  overflow-y: auto;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 20px;

  width: 100%;
  min-height: 0;
  padding: 24px;

  background: #fcfdff;
`,_Z=l.default.div.withConfig({componentId:"zh__sc-10675099-1"})`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;
`,_J=l.default.div.withConfig({componentId:"zh__sc-10675099-2"})`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: flex-end;
`,_0=l.default.button.withConfig({componentId:"zh__sc-10675099-3"})`
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
`,_1=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-10675099-4"})`
  display: flex;
  gap: 4px;
  align-items: center;

  height: 40px;
  padding: 8px 16px;

  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: #4f39f6;
`,_2=l.default.div.withConfig({componentId:"zh__sc-10675099-5"})`
  display: flex;
  flex-direction: column;
  gap: 9px;
  align-items: flex-start;
  align-self: stretch;
`,_6=l.default.div.withConfig({componentId:"zh__sc-10675099-6"})`
  cursor: pointer;

  display: flex;
  gap: 8px;
  align-items: center;

  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  color: #0a0a0a;
`,_4=l.default.div.withConfig({componentId:"zh__sc-10675099-7"})`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: stretch;
  align-self: stretch;
`,_5=l.default.div.withConfig({componentId:"zh__sc-10675099-8"})`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 188px;
  height: 232px;
  border: 1px solid #d1d5dc;
  border-radius: 8px;

  background: #fff;
`,_3=l.default.div.withConfig({componentId:"zh__sc-10675099-9"})`
  position: absolute;
  z-index: 1;
  top: 8px;
  left: 8px;
`,_9=l.default.div.withConfig({componentId:"zh__sc-10675099-10"})`
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
`,_8=l.default.div.withConfig({componentId:"zh__sc-10675099-11"})`
  overflow: hidden;
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: center;

  height: 140px;
  border-radius: 7px 7px 0 0;

  background: #f3f4f6;
`,_7=l.default.div.withConfig({componentId:"zh__sc-10675099-12"})`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  gap: 2px;
  align-items: center;
  align-self: stretch;
  justify-content: center;

  padding: 8px;
`,we=l.default.div.withConfig({componentId:"zh__sc-10675099-13"})`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: center;
`,wt=l.default.div.withConfig({componentId:"zh__sc-10675099-14"})`
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
`,wn=l.default.button.withConfig({componentId:"zh__sc-10675099-15"})`
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
`,wi=l.default.div.withConfig({componentId:"zh__sc-10675099-16"})`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;

  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: #4b5563;
`,wl=l.default.div.withConfig({componentId:"zh__sc-10675099-17"})`
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
`;function wa({isOpen:e,onCancel:n,onConfirm:i}){return e?(0,t.jsx)(d.default,{children:(0,t.jsxs)(wd,{onClick:e=>e.stopPropagation(),children:[(0,t.jsxs)(wo,{children:[(0,t.jsx)(wr,{children:"수정 중인 내용을 저장하지 않고 이동할까요?"}),(0,t.jsx)(ws,{children:"현재 수정 중인 내용이 저장되지 않습니다. 다른 항목을 수정하시겠습니까?"})]}),(0,t.jsxs)(wc,{children:[(0,t.jsx)(wh,{type:"button",onClick:n,children:"계속 수정"}),(0,t.jsx)(wp,{type:"button",onClick:i,children:"다른 항목 수정"})]})]})}):null}let wd=l.default.div.withConfig({componentId:"zh__sc-1f9caf5a-0"})`
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
`,wo=l.default.div.withConfig({componentId:"zh__sc-1f9caf5a-1"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;
`,wr=l.default.p.withConfig({componentId:"zh__sc-1f9caf5a-2"})`
  margin: 0;

  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  color: #000;
`,ws=l.default.p.withConfig({componentId:"zh__sc-1f9caf5a-3"})`
  margin: 0;

  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: #000;
  white-space: pre-line;
`,wc=l.default.div.withConfig({componentId:"zh__sc-1f9caf5a-4"})`
  display: flex;
  gap: 12px;
  align-items: center;
  align-self: stretch;
  justify-content: flex-end;
`,wf=l.css`
  height: 36px;
  padding: 8px 16px;
  font-size: 16px;
`,wh=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-1f9caf5a-5"})`
  ${wf}
`,wp=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-1f9caf5a-6"})`
  ${wf}
`,wu=(0,n.observer)(function(){let e=a.default.modal.serviceWorkerDetail;return(0,t.jsx)(wx,{role:"tablist","aria-label":"제공인력 상세 탭",children:e.tabs.map(n=>(0,t.jsx)(wg,{type:"button",role:"tab","aria-selected":n.active,$active:n.active,onClick:()=>e.setActiveTab(n.key),children:n.label},n.key))})}),wx=l.default.div.withConfig({componentId:"zh__sc-53613c76-0"})`
  display: flex;
  align-self: flex-start;

  width: 100%;
  height: 56px;
  border-bottom: 1px solid #e5e7eb;

  background-color: #fff;
`,wg=l.default.button.withConfig({componentId:"zh__sc-53613c76-1"})`
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
`;var wm=e.i(37163),wj=e.i(19740);function wb({isOpen:e,onCancel:n,onConfirm:i}){return e?(0,t.jsx)(d.default,{children:(0,t.jsxs)(w_,{children:[(0,t.jsxs)(ww,{children:[(0,t.jsx)(wy,{children:"계약 정보를 저장할까요?"}),(0,t.jsxs)(wv,{children:["수정된 정보는 연결된 서류의 자동입력 항목에 함께 반영됩니다.","\n","이미 출력했거나 최종확인한 서류는 다시 확인이 필요할 수 있습니다."]})]}),(0,t.jsxs)(wC,{children:[(0,t.jsx)(wz,{type:"button",onClick:n,children:"취소하기"}),(0,t.jsx)(wT,{type:"button",onClick:i,children:"저장 및 모든 서류에 반영"})]})]})}):null}let w_=l.default.div.withConfig({componentId:"zh__sc-e1c0716c-0"})`
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
`,ww=l.default.div.withConfig({componentId:"zh__sc-e1c0716c-1"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;
`,wy=l.default.p.withConfig({componentId:"zh__sc-e1c0716c-2"})`
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  color: #000;
`,wv=l.default.p.withConfig({componentId:"zh__sc-e1c0716c-3"})`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: #000;
  white-space: pre-line;
`,wC=l.default.div.withConfig({componentId:"zh__sc-e1c0716c-4"})`
  display: flex;
  gap: 12px;
  align-items: center;
  align-self: stretch;
  justify-content: flex-end;
`,wI=l.css`
  height: 36px;
  padding: 8px 16px;
  font-size: 16px;
`,wz=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-e1c0716c-5"})`
  ${wI}
`,wT=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-e1c0716c-6"})`
  ${wI}
`;function wE({isOpen:e,title:n,description:i,onCancel:l,onConfirm:a}){return e?(0,t.jsx)(d.default,{children:(0,t.jsxs)(wS,{children:[(0,t.jsxs)(wk,{children:[(0,t.jsx)(wD,{children:n}),(0,t.jsx)(wA,{children:i})]}),(0,t.jsxs)(wO,{children:[(0,t.jsx)(w$,{type:"button",onClick:l,children:"취소하기"}),(0,t.jsx)(wR,{type:"button",onClick:a,children:"변경하기"})]})]})}):null}let wS=l.default.div.withConfig({componentId:"zh__sc-b641051-0"})`
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
`,wk=l.default.div.withConfig({componentId:"zh__sc-b641051-1"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;
`,wD=l.default.p.withConfig({componentId:"zh__sc-b641051-2"})`
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  color: #000;
`,wA=l.default.p.withConfig({componentId:"zh__sc-b641051-3"})`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: #000;
  white-space: pre-line;
`,wO=l.default.div.withConfig({componentId:"zh__sc-b641051-4"})`
  display: flex;
  gap: 12px;
  align-items: center;
  align-self: stretch;
  justify-content: flex-end;
`,wL=l.css`
  height: 36px;
  padding: 8px 16px;
  font-size: 16px;
`,w$=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-b641051-5"})`
  ${wL}
`,wR=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-b641051-6"})`
  ${wL}
`,wP=e=>{if(null===e||!ui.default.brand.calendarDateString.is(e))return"-";let[t,n,i]=e.split("-");return`${t}년 ${Number(n)}월 ${Number(i)}일`},wN=(0,n.observer)(function({onRequestEdit:e}){let[n,l]=(0,i.useState)(!1),[d,o]=(0,i.useState)(!1),[r,s]=(0,i.useState)(!1),c=(0,i.useRef)(null),f=a.default.modal.serviceWorkerDetail,h=f.serviceWorker,p=h?.name??"",u=h?.status,x=h?.firstRegisteredDate??null,g=f.employmentContractStatusOptions,m=f.selectedEmploymentContractStatus??"UNCONTRACTED",j=f.selectedEmploymentContractDraftStatus??"",b=f.selectedEmploymentContractExpirationReminder,_=f.employmentContractRoundOptions,w=f.selectedEmploymentContractId??"",y=f.isEmploymentContractEditing,v=f.selectedEmploymentContractDraftContractStartDate??"",C=f.selectedEmploymentContractDraftContractEndDate??"",I=f.selectedEmploymentContract,z=I?.serviceType,T=I?.contractStartDate??null,E=I?.contractEndDate??null,S=m===wm.default.COMPLETED,k=j===wm.default.TERMINATED,D=(0,n$.getTodayCalendarDateString)(),A=D.replaceAll("-","."),O=`${T?.replaceAll("-",".")??"-"} ~ ${E?.replaceAll("-",".")??"-"}`,L=wP(x),$=wP(T),R=null===E?null:wP(E),P=(0,n$.getEmploymentContractTenureLabel)(h?.employmentContracts??[]);return((0,i.useEffect)(()=>{if(!y)return;let e=e=>{let t=e.target;nP(t)||nN(t)||!(t instanceof Node&&null!==c.current&&c.current.contains(t))&&(f.hasEditChanges("employmentContract")||f.cancelEmploymentContractEdit())};return document.addEventListener("pointerdown",e),()=>{document.removeEventListener("pointerdown",e)}},[y,f]),null===h||void 0===u)?null:(0,t.jsxs)(wM,{ref:c,children:[(0,t.jsxs)(wF,{children:[(0,t.jsx)(wH,{children:p}),(0,t.jsxs)(wG,{children:[(0,t.jsx)(wK,{children:wj.SERVICE_WORKER_STATUS[u]}),(0,t.jsx)(wK,{children:ob(z??null)})]}),(0,t.jsx)(wX,{children:y?(0,t.jsx)(wq,{children:"수정 진행중"}):null}),(0,t.jsx)(wQ,{children:y?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(wZ,{type:"button",onClick:()=>{f.cancelEmploymentContractEdit()},children:[(0,t.jsx)(iq.default,{sx:{fontSize:20}}),"수정 취소"]}),(0,t.jsxs)(wZ,{type:"button",onClick:()=>{f.hasEditChanges("employmentContract")?l(!0):f.cancelEmploymentContractEdit()},children:[(0,t.jsx)(lO.default,{sx:{fontSize:20}}),"수정 저장"]})]}):(0,t.jsxs)(wZ,{type:"button",disabled:S||null===I,onClick:()=>{S||null===I||e("employmentContract")},children:[(0,t.jsx)(nW.default,{sx:{fontSize:20}}),"수정하기"]})})]}),(0,t.jsx)(wJ,{children:(0,t.jsxs)(w0,{children:[(0,t.jsx)(w1,{children:"계약 상태"}),(0,t.jsxs)(w6,{value:y?j:m,disabled:!y||null===I,onChange:e=>{let t=e.target.value;if(""!==t){if(t===wm.default.TERMINATED&&t!==j)return void o(!0);if(t===wm.default.ACTIVE&&t!==j)return void s(!0);f.updateSelectedEmploymentContractDraftStatus(t)}},children:[null===I?(0,t.jsx)("option",{value:"UNCONTRACTED",children:"미계약"}):null,0===g.length&&null!==I?(0,t.jsx)("option",{value:"",children:"-"}):null,g.map(e=>(0,t.jsx)("option",{value:e.value,children:e.label},e.value))]}),null===I?(0,t.jsxs)(wY,{type:"button",onClick:()=>{a.default.modal.serviceWorkerCreate.show("contract",a.default.serviceWorker.info.byServiceWorker.currentServiceType??"MEAL"),f.close()},children:[(0,t.jsx)(H.default.ContractEdit,{size:16}),"계약하기"]}):null,null!==b?(0,t.jsxs)(wB,{children:[(0,t.jsx)(og.default,{$color:b.color,children:b.remainingDays<0?`계약 만료 ${Math.abs(b.remainingDays)}일 지남`:`계약 만료 ${b.remainingDays}일 남음`}),(0,t.jsxs)(wY,{type:"button",onClick:()=>{a.default.modal.serviceWorkerCreate.show("renew"),a.default.modal.serviceWorkerDetail.close()},children:[(0,t.jsx)(H.default.ContractEdit,{size:16}),"재계약 하기"]})]}):null]})}),(0,t.jsx)(wJ,{children:(0,t.jsxs)(w0,{children:[(0,t.jsx)(w1,{children:"계약 회차"}),(0,t.jsxs)(w4,{value:w,disabled:y||0===_.length,onChange:e=>{let t=e.target.value;f.setSelectedEmploymentContractId(""===t?null:t)},children:[0===_.length?(0,t.jsx)("option",{value:"",children:"-"}):null,_.map(e=>(0,t.jsx)("option",{value:e.id,children:e.label},e.id))]})]})}),(0,t.jsxs)(wJ,{children:[(0,t.jsxs)(w0,{children:[(0,t.jsx)(w1,{children:"접수일"}),(0,t.jsx)(w2,{children:L})]}),(0,t.jsx)(w5,{}),(0,t.jsxs)(w0,{children:[(0,t.jsx)(w1,{children:"계약 기간"}),y?(0,t.jsxs)(wU,{children:[k?(0,t.jsx)(w2,{children:wP(T)}):(0,t.jsx)(wW,{value:v,readOnly:!1,onChange:e=>{f.updateSelectedEmploymentContractDraftContractStartDate(e)},placeholder:"YYYY-MM-DD"}),(0,t.jsx)(wV,{children:"~"}),k?(0,t.jsx)(wW,{value:C,readOnly:!1,onChange:e=>{f.updateSelectedEmploymentContractDraftContractEndDate(e)},placeholder:"YYYY-MM-DD"}):(0,t.jsx)(w2,{children:wP(E)})]}):(0,t.jsx)(w2,{children:null===I?"-":`${$} - ${R??"-"}`})]}),(0,t.jsx)(w5,{}),(0,t.jsxs)(w0,{children:[(0,t.jsx)(w1,{children:"근속기간"}),(0,t.jsx)(w2,{children:P})]})]}),(0,t.jsx)(wE,{isOpen:d,title:"계약 상태를 퇴사로 변경 하시겠습니까?",description:`오늘(${A})로 퇴사 상태로 변경되며, 계약 종료일이 변경됩니다.
퇴사 상태로 변경 시, 계약 시작일은 수정할 수 없으며 계약 종료일은 수정할 수 있습니다.`,onCancel:()=>{o(!1)},onConfirm:()=>{f.updateSelectedEmploymentContractDraftContractEndDate(D),f.updateSelectedEmploymentContractDraftStatus(wm.default.TERMINATED),o(!1)}}),(0,t.jsx)(wE,{isOpen:r,title:"계약중 상태로 되돌리시겠습니까?",description:`이전 계약 기간 (${O})으로 되돌리며, 해지에서 계약중으로 변경됩니다.
계약중일 시, 계약 시작일을 수정할 수 있으며 계약 종료일은 수정할 수 없습니다.`,onCancel:()=>{s(!1)},onConfirm:()=>{f.updateSelectedEmploymentContractDraftStatus(wm.default.ACTIVE),s(!1)}}),(0,t.jsx)(wb,{isOpen:n,onCancel:()=>{l(!1)},onConfirm:()=>{f.saveSelectedEmploymentContractDraft().then(e=>{!0===e&&l(!1)})}})]})}),wM=l.default.div.withConfig({componentId:"zh__sc-3c59ca1c-0"})`
  display: flex;
  flex-direction: column;
  gap: 16px 24px;
  align-items: flex-start;
  align-self: stretch;
  justify-content: center;

  padding: 16px 24px;
  border-bottom: 1px solid #e5e7eb;

  background: #fff;
`,wF=l.default.div.withConfig({componentId:"zh__sc-3c59ca1c-1"})`
  display: flex;
  gap: 16px;
  align-items: center;
  width: 100%;
`,wU=l.default.div.withConfig({componentId:"zh__sc-3c59ca1c-2"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,wB=l.default.div.withConfig({componentId:"zh__sc-3c59ca1c-3"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,wY=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-3c59ca1c-4"})`
  gap: 8px;
  padding: 0 16px;
`,wV=l.default.span.withConfig({componentId:"zh__sc-3c59ca1c-5"})`
  font-size: 16px;
  line-height: 24px;
  color: #475467;
`,wW=(0,l.default)(o.default.Input.Date).attrs({style:{textAlign:"center"}}).withConfig({componentId:"zh__sc-3c59ca1c-6"})`
  width: 180px;
  height: 28px;
  font-size: 16px;
`,wH=l.default.div.withConfig({componentId:"zh__sc-3c59ca1c-7"})`
  font-size: 24px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 83.333% */
  color: #0a0a0a;
`,wG=l.default.div.withConfig({componentId:"zh__sc-3c59ca1c-8"})`
  display: flex;
  gap: 4px;
`,wK=l.default.div.withConfig({componentId:"zh__sc-3c59ca1c-9"})`
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
`,wX=l.default.div.withConfig({componentId:"zh__sc-3c59ca1c-10"})`
  display: flex;
  flex: 1;
`,wq=l.default.div.withConfig({componentId:"zh__sc-3c59ca1c-11"})`
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
`,wQ=l.default.div.withConfig({componentId:"zh__sc-3c59ca1c-12"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,wZ=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-3c59ca1c-13"})`
  display: flex;
  gap: 4px;
  align-items: center;

  height: 40px;
  padding: 8px 16px;

  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
`,wJ=l.default.div.withConfig({componentId:"zh__sc-3c59ca1c-14"})`
  display: flex;
  gap: 12px;
  align-items: center;
`,w0=l.default.div.withConfig({componentId:"zh__sc-3c59ca1c-15"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,w1=l.default.div.withConfig({componentId:"zh__sc-3c59ca1c-16"})`
  font-size: 18px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 111.111% */
  color: #0a0a0a;
`,w2=l.default.div.withConfig({componentId:"zh__sc-3c59ca1c-17"})`
  font-size: 18px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px; /* 111.111% */
  color: #0a0a0a;
`,w6=(0,l.default)(o.default.Input.Select).withConfig({componentId:"zh__sc-3c59ca1c-18"})`
  height: 28px;
`,w4=(0,l.default)(o.default.Input.Select).withConfig({componentId:"zh__sc-3c59ca1c-19"})`
  height: 36px;
`,w5=l.default.div.withConfig({componentId:"zh__sc-3c59ca1c-20"})`
  width: 1px;
  height: 24px;
  background: #dadee6;
`,w3=(0,n.observer)(function(){let e=a.default.modal.serviceWorkerDetail,[n,l]=(0,i.useState)(null),[o,r]=(0,i.useState)(!1);if("ready"!==e.status||e.isDocumentViewOnly)return null;let s=t=>{let n=e.editingSection;if(null===n||n===t)return void e.startEditSection(t);if(!e.hasEditChanges(n)){e.cancelEditSection(n),e.startEditSection(t);return}l(t),r(!0)},c=()=>{l(null),r(!1)};return(0,t.jsx)(d.default,{children:(0,t.jsxs)(w9,{children:[(0,t.jsxs)(w8,{children:[(0,t.jsx)(w7,{children:"제공인력 상세보기"}),(0,t.jsxs)(ye,{onClick:e.close,children:[(0,t.jsx)(W.X,{size:16}),"닫기"]})]}),(0,t.jsx)(wN,{onRequestEdit:s}),(0,t.jsx)(wu,{}),(0,t.jsxs)(yt,{children:["basic"===e.activeTab&&(0,t.jsx)(bn,{}),"contract"===e.activeTab&&(0,t.jsx)(_s,{onRequestEdit:s}),"docs"===e.activeTab&&(0,t.jsx)(_q,{})]}),(0,t.jsx)(wa,{isOpen:o,onCancel:c,onConfirm:()=>{let t=e.editingSection;null===t||null===n||(e.cancelEditSection(t),e.startEditSection(n)),c()}})]})})}),w9=l.default.div.withConfig({componentId:"zh__sc-731779e3-0"})`
  position: relative;

  display: flex;
  flex-direction: column;
  flex-shrink: 0;

  width: 1050px;
  height: 90vh;
  border-radius: 8px;

  background: #fff;
`,w8=l.default.div.withConfig({componentId:"zh__sc-731779e3-1"})`
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
`,w7=l.default.h2.withConfig({componentId:"zh__sc-731779e3-2"})`
  margin: 0;

  font-size: 18px;
  font-weight: 700;
  font-style: normal;
  line-height: 28px;
  color: #101828;
  letter-spacing: -0.439px;
`,ye=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-731779e3-3"})`
  display: flex;
  gap: 6px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,yt=l.default.div.withConfig({componentId:"zh__sc-731779e3-4"})`
  display: flex;
  flex: 1;
  min-height: 0;
`,yn=(0,n.observer)(function(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(nA,{}),(0,t.jsx)(rj,{}),(0,t.jsx)(pw,{}),(0,t.jsx)(m5,{}),(0,t.jsx)(w3,{}),(0,t.jsx)(hR,{}),(0,t.jsx)(xh,{})]})});e.s(["default",0,yn],55357)},31239,e=>{"use strict";e.i(3159);var t=e.i(46907),n=e.i(33261),i=e.i(7744),l=e.i(43174);let a=(0,t.observer)(function(){let e=(0,n.usePathname)(),t=(0,n.useRouter)(),a=l.default.ui.layout.targetPathname,d=l.default.data.auth.me.data?.organizationId??null,o=l.default.data.organization.serviceList.query,r=o?.id===d?l.default.data.organization.serviceList.data?.serviceList??null:null,s=r?.some(e=>!0===e.operatingStatus&&("MEAL"===e.type||"NUTRITION"===e.type))??!0;return(0,i.useEffect)(()=>{null!==d&&o?.id!==d&&l.default.data.organization.serviceList.setQuery({id:d})},[d,o?.id]),(0,i.useEffect)(()=>{e&&l.default.ui.layout.setPathname(e)},[e]),(0,i.useEffect)(()=>{null!==a&&(t.push(a),l.default.ui.layout.clearTargetPathname())},[t,a]),(0,i.useEffect)(()=>{let n="/diet-setting"===e||e?.startsWith("/diet-setting/");!s&&n&&r&&t.replace("/client/info/by-client")},[s,e,t,r]),(0,i.useEffect)(()=>{let n="/client/service-provision"===e||e?.startsWith("/client/service-provision/");!s&&n&&r&&t.replace("/client/info/by-client")},[s,e,t,r]),null});e.s(["default",0,a])},44997,e=>{"use strict";var t=e.i(9735);e.i(3159);var n=e.i(46907),i=e.i(94586),l=e.i(33261),a=e.i(7744),d=e.i(4153);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var r=(0,a.forwardRef)(function(e,t){var n=e.color,i=e.size,l=void 0===i?24:i,d=function(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["color","size"]);return a.default.createElement("svg",o({ref:t,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),a.default.createElement("polyline",{points:"6 9 12 15 18 9"}))});function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}r.propTypes={color:d.default.string,size:d.default.oneOfType([d.default.string,d.default.number])},r.displayName="ChevronDown";var c=(0,a.forwardRef)(function(e,t){var n=e.color,i=e.size,l=void 0===i?24:i,d=function(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["color","size"]);return a.default.createElement("svg",s({ref:t,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),a.default.createElement("polyline",{points:"18 15 12 9 6 15"}))});c.propTypes={color:d.default.string,size:d.default.oneOfType([d.default.string,d.default.number])},c.displayName="ChevronUp";var f=e.i(38803),h=e.i(9454),p=e.i(43174);function u(e){return null===e?"/":e.length>1&&e.endsWith("/")?e.slice(0,-1):e}function x(e,t){let n=u(e),i=u(t);return"/"===i?"/"===n:n===i||n.startsWith(`${i}/`)}function g(e,t){return t.startsWith("/")?"/"===e?t:`${u(e)}${t}`:""}function m(e,t){return g(e,t.matchSubpath??t.subpath)}let j=(0,n.observer)(function(){let e=u((0,l.usePathname)()),n=h.default.routes,d=p.default.data.auth.me.data?.organizationId??null,o=p.default.data.organization.serviceList.query,s=o?.id===d?p.default.data.organization.serviceList.data?.serviceList??null:null,f=s?.some(e=>!0===e.operatingStatus&&("MEAL"===e.type||"NUTRITION"===e.type))??!0,[j,R]=(0,a.useState)(()=>Object.fromEntries(n.map((t,n)=>[n,t.children?.some(n=>{let i=m(t.subpath,n);return!!i&&x(e,i)})??!1]))),P=n.map((e,t)=>({route:e,index:t})).filter(({route:e,index:t})=>0!==t&&(f||"/diet-setting"!==e.subpath));return(0,t.jsx)(b,{children:P.map(({route:n,index:l},a)=>{let d=(n.children??[]).filter(e=>f||"/client"!==n.subpath||"/service-provision"!==e.subpath),o=d.length>0,s=d.some(t=>{let i=m(n.subpath,t);return!!i&&x(e,i)}),h=x(e,n.subpath)||s,p=s||(j[l]??!1);return(0,t.jsxs)(_,{children:[(0,t.jsx)(w,{$active:h,$clickable:!!(n.hasPage||o),as:n.hasPage?i.default:"div",href:n.hasPage?n.subpath:void 0,onClick:o?()=>{R(e=>({...e,[l]:!p}))}:void 0,children:(0,t.jsx)(y,{children:(0,t.jsx)(v,{children:(0,t.jsxs)(C,{children:[(0,t.jsx)(I,{children:n.icon?(0,t.jsx)(n.icon,{size:16,color:h?"#4F39F6":"#6E7079"}):null}),(0,t.jsx)(T,{$active:h,children:`${a+1}. ${n.label}`}),o?(0,t.jsx)(z,{children:p?(0,t.jsx)(c,{size:16,color:"#6E7079"}):(0,t.jsx)(r,{size:16,color:"#6E7079"})}):null]})})})}),o&&p?(0,t.jsx)(E,{children:(0,t.jsx)(S,{children:d.map((l,d)=>{let o=g(n.subpath,l.subpath),r=m(n.subpath,l),s=!!r&&x(e,r);return(0,t.jsx)(k,{as:l.hasPage?i.default:"div",href:l.hasPage&&o||void 0,children:(0,t.jsx)(D,{children:(0,t.jsx)(A,{children:(0,t.jsx)(O,{children:(0,t.jsx)(L,{children:(0,t.jsx)($,{$active:s,children:`${a+1}-${d+1}. ${l.label}`})})})})})},`${n.subpath}-${l.subpath}`)})})}):null]},n.subpath)})})}),b=f.default.div.withConfig({componentId:"zh__sc-2fa5d58c-0"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
  align-self: stretch;

  padding: 16px 12px;
`,_=f.default.div.withConfig({componentId:"zh__sc-2fa5d58c-1"})`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
`,w=f.default.div.withConfig({componentId:"zh__sc-2fa5d58c-2"})`
  cursor: ${({$clickable:e})=>e?"pointer":"default"};

  position: relative;

  flex-shrink: 0;

  width: 100%;
  height: 40px;
  border-radius: 8px;

  background: ${({$active:e})=>e?"#F1F0FA":"transparent"};
`,y=f.default.div.withConfig({componentId:"zh__sc-2fa5d58c-3"})`
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
`,E=f.default.div.withConfig({componentId:"zh__sc-2fa5d58c-9"})`
  position: relative;
  flex-shrink: 0;
  align-self: stretch;
`,S=f.default.div.withConfig({componentId:"zh__sc-2fa5d58c-10"})`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
  height: 100%;
`,k=f.default.div.withConfig({componentId:"zh__sc-2fa5d58c-11"})`
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
`,L=f.default.div.withConfig({componentId:"zh__sc-2fa5d58c-15"})`
  overflow: hidden;
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  min-width: 1px;
  height: 100%;
  padding: 1px 0;
`,$=f.default.div.withConfig({componentId:"zh__sc-2fa5d58c-16"})`
  flex-shrink: 0;

  width: 100%;

  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  line-height: 20px;
  color: ${({$active:e})=>e?"#4F39F6":"#45464E"};
`;e.s(["default",0,j],44997)},70552,e=>{"use strict";var t=e.i(9735),n=e.i(39635);e.i(3159);var i=e.i(46907),l=e.i(7744),a=e.i(38803),d=e.i(43174),o=e.i(24045),r=e.i(8179),s=e.i(23416),c=e.i(98273),f=e.i(64954);let h=[".xlsx"];function p(e){return Array.from(e.dataTransfer?.types??[]).includes("Files")}let u=(0,i.observer)(function(){let{isWindowFileDragging:e}=d.default.ui.layout,n=(0,l.useRef)(null),i=(0,l.useRef)(null),a=(0,l.useRef)(null),[f,u]=(0,l.useState)(!1),[z,T]=(0,l.useState)(!1),[E,S]=(0,l.useState)(!1),[k,D]=(0,l.useState)(null),A=f||e;(0,l.useEffect)(()=>()=>{null!==a.current&&clearTimeout(a.current)},[]);let O=e=>{let t,n;null!==e&&(n=(t=e.name.lastIndexOf("."))>=0?e.name.slice(t).toLowerCase():"",(h.includes(n)||(null!==a.current&&clearTimeout(a.current),S(!0),a.current=setTimeout(()=>{S(!1),a.current=null},2e3),0))&&D(e))},L=async()=>{if(null===k||z)return;T(!0);let[e]=await s.default.data.serviceWorker.importActivityRecordsExcel({file:k});if(T(!1),null!==e)return void d.default.ui.layout.toast.error(e.message??"파일 업로드에 실패했습니다. 잠시 후 다시 시도해 주세요.",3e3,n.current);S(!1),D(null);let t=d.default.data.serviceWorker.activityRecordList;null===t.query?t.setQuery({}):await t.refetch(),d.default.ui.layout.toast.success("파일 업로드를 완료했습니다.",3e3,n.current)};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(x,{ref:i,type:"file",accept:".xlsx",onChange:e=>{O(e.target.files?.[0]??null),e.target.value=""}}),(0,t.jsx)(g,{ref:n,children:(0,t.jsxs)(m,{$isDragging:A,$isError:E,$isUploading:z,$isFileSelected:null!==k,onClick:e=>{e.target instanceof HTMLElement&&null!==e.target.closest("button")||null===k&&(z||i.current?.click())},onDragOver:e=>{!p(e)||(e.preventDefault(),z||u(!0))},onDragLeave:e=>{p(e)&&(e.preventDefault(),u(!1))},onDrop:e=>{!p(e)||(e.preventDefault(),z||(u(!1),O(e.dataTransfer.files?.[0]??null)))},children:[null===k?(0,t.jsxs)(t.Fragment,{children:[!1===E&&(0,t.jsx)(o.Upload,{size:20,color:"#4F39F6"}),(0,t.jsx)(j,{$isError:E,children:E?"지원하지 않는 파일 형식입니다.":A?"파일을 여기에 놓으면 업로드 됩니다.":z?"파일을 업로드하고 있습니다.":"[전자바우처 - 서비스 이용내역] 엑셀 파일을 이곳에 끌어다 놓거나 (드래그 앤 드롭), 클릭하여 업로드하세요."}),(0,t.jsx)(b,{children:"지원 파일 형식: 엑셀(.xlsx)"})]}):(0,t.jsxs)(_,{children:[(0,t.jsxs)(w,{children:[(0,t.jsx)(y,{children:(0,t.jsx)(c.default.News,{size:17,color:"#2264E8"})}),(0,t.jsx)(v,{children:k.name})]}),(0,t.jsxs)(C,{type:"button",onClick:()=>{D(null)},disabled:z,children:["삭제",(0,t.jsx)(r.X,{size:14})]})]}),(0,t.jsx)(I,{type:"button",onClick:()=>{L()},disabled:null===k||z,$processing:z,children:"업로드하기"})]})})]})}),x=a.default.input.withConfig({componentId:"zh__sc-280fbc38-0"})`
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
`,j=a.default.p.withConfig({componentId:"zh__sc-280fbc38-3"})`
  margin: 0;

  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  color: ${({$isError:e})=>e?"#ff4d4f":"#4f39f6"};
  text-align: center;
`,b=a.default.p.withConfig({componentId:"zh__sc-280fbc38-4"})`
  margin: 0;

  font-size: 12px;
  font-weight: 700;
  font-style: normal;
  line-height: 24px; /* 200% */
  color: #99a1af;
  text-align: center;
`,_=a.default.div.withConfig({componentId:"zh__sc-280fbc38-5"})`
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
`,w=a.default.div.withConfig({componentId:"zh__sc-280fbc38-6"})`
  overflow: hidden;
  display: flex;
  gap: 10px;
  align-items: center;
  align-self: stretch;

  min-width: 0;
`,y=a.default.div.withConfig({componentId:"zh__sc-280fbc38-7"})`
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
`,z=(0,i.observer)(function(){let e=d.default.data.auth.me.data?.organizationId??null,i=d.default.data.serviceWorker.activityRecordsLastImportedDate,a=d.default.serviceWorker.serviceRecord.lastImportedDate;return(0,l.useEffect)(()=>{null!==e&&i.query?.organizationId!==e&&i.setQuery({organizationId:e})},[i,i.query?.organizationId,e]),(0,t.jsxs)(T,{children:[(0,t.jsx)(u,{}),(0,t.jsxs)(E,{children:[(0,t.jsxs)(S,{children:[(0,t.jsx)(n.default,{sx:{fontSize:16}}),(0,t.jsx)(k,{children:"가장 최근 엑셀 파일 업로드한 날짜"})]}),(0,t.jsx)(D,{children:a??"-"})]}),(0,t.jsxs)(E,{children:[(0,t.jsxs)(S,{children:[(0,t.jsx)(n.default,{sx:{fontSize:16}}),(0,t.jsx)(k,{children:"전자바우처에서 엑셀 파일 내려받는 과정"})]}),(0,t.jsx)(D,{children:"⑴ 부정결제 찾기 > ⑵ 전자바우처 내역 검색 > ⑶ 매출 및 정산 > ⑷ 바우처 이용내역 조회(신규) > ⑸ 엑셀 다운로드"})]})]})}),T=a.default.div.withConfig({componentId:"zh__sc-f8534ef-0"})`
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
`,E=a.default.div.withConfig({componentId:"zh__sc-f8534ef-1"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  align-self: stretch;

  padding: 16px;
  border: 1px solid #cdd8ec;
  border-radius: 8px;

  background: #f6f8ff;
`,S=a.default.div.withConfig({componentId:"zh__sc-f8534ef-2"})`
  display: flex;
  gap: 4px;
  align-items: center;
`,k=a.default.div.withConfig({componentId:"zh__sc-f8534ef-3"})`
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