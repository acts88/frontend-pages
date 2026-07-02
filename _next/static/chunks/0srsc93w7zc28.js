(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,48271,e=>{"use strict";var t=e.i(9735);e.i(3159);var n=e.i(46907),i=e.i(7744),l=e.i(23416),r=e.i(43174),o=e.i(7665),a=e.i(4153);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var d=(0,i.forwardRef)(function(e,t){var n=e.color,l=e.size,r=void 0===l?24:l,o=function(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["color","size"]);return i.default.createElement("svg",s({ref:t,xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),i.default.createElement("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),i.default.createElement("circle",{cx:"12",cy:"12",r:"3"}))});function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}d.propTypes={color:a.default.string,size:a.default.oneOfType([a.default.string,a.default.number])},d.displayName="Eye";var f=(0,i.forwardRef)(function(e,t){var n=e.color,l=e.size,r=void 0===l?24:l,o=function(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["color","size"]);return i.default.createElement("svg",c({ref:t,xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),i.default.createElement("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"}),i.default.createElement("line",{x1:"1",y1:"1",x2:"23",y2:"23"}))});f.propTypes={color:a.default.string,size:a.default.oneOfType([a.default.string,a.default.number])},f.displayName="EyeOff";var u=e.i(22803),p=e.i(25521);let h=(0,n.observer)(function(){let{loginId:e,setLoginId:n,isNeedLoginId:l,loginIdErrMsg:a,password:s,setPassword:c,isShowPwd:u,setIsShowPwd:h,pwdErrMsg:O,login:E}=r.default.auth.login,[$,F]=(0,i.useState)(!1),T=(0,i.useRef)(null),S=(0,i.useRef)(null);return(0,i.useEffect)(()=>{T.current?.focus()},[]),(0,t.jsx)(x,{children:(0,t.jsxs)(g,{children:[(0,t.jsxs)(m,{children:[(0,t.jsx)(o.default,{src:`${p.default.env.PUBLIC_PATH}/icon/logo-symbol.svg`,width:1,height:1,style:{width:85,height:"auto"},loading:"eager",alt:"Logo"}),(0,t.jsxs)(w,{children:[(0,t.jsx)(v,{children:"자이언 허브"}),(0,t.jsx)(y,{children:"기관용"})]})]}),(0,t.jsxs)(b,{children:[(0,t.jsxs)(_,{$error:l||null!==a,$hasValue:e.length>0,children:[(0,t.jsx)(j,{$error:l||null!==a,children:"아이디"}),(0,t.jsx)(C,{ref:T,value:e,onChange:e=>n(e.target.value),placeholder:"영문 아이디"})]}),null!==a?(0,t.jsx)(I,{children:a}):null,(0,t.jsxs)(_,{$error:null!==O,$hasValue:s.length>0,children:[(0,t.jsx)(j,{$error:null!==O,children:"비밀번호"}),(0,t.jsx)(C,{ref:S,type:u?"text":"password",value:s,onChange:e=>c(e.target.value),onFocus:()=>F(!0),onBlur:()=>F(!1),onKeyDown:e=>{"Enter"===e.key&&E()},placeholder:"영문,숫자,특수문자"}),(0,t.jsx)(z,{type:"button",$active:$,$error:null!==O,onClick:()=>h(!u),onFocus:()=>F(!0),onBlur:()=>F(!1),children:u?(0,t.jsx)(d,{size:24}):(0,t.jsx)(f,{size:24})})]}),null!==O?(0,t.jsx)(I,{children:O}):null,(0,t.jsx)(k,{type:"button",onClick:()=>void E(),children:"로그인"})]})]})})}),x=u.default.main.withConfig({componentId:"zh__sc-9eaa5006-0"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;
`,g=u.default.div.withConfig({componentId:"zh__sc-9eaa5006-1"})`
  display: flex;
  flex-direction: column;
  gap: 48px;
  width: 375px;
`,m=u.default.div.withConfig({componentId:"zh__sc-9eaa5006-2"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,w=u.default.div.withConfig({componentId:"zh__sc-9eaa5006-3"})`
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 30px;
  font-weight: 700;
  line-height: 1;
`,v=u.default.span.withConfig({componentId:"zh__sc-9eaa5006-4"})`
  color: #1c1d22;
`,y=u.default.span.withConfig({componentId:"zh__sc-9eaa5006-5"})`
  color: #4f39f6;
`,b=u.default.div.withConfig({componentId:"zh__sc-9eaa5006-6"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,j=u.default.span.withConfig({componentId:"zh__sc-9eaa5006-7"})`
  flex-shrink: 0;

  width: 105px;

  font-size: 20px;
  font-weight: 500;
  line-height: 1;
  color: ${({$error:e})=>!0===e?"#ff3b6b":"#6e7079"};
`,_=u.default.div.withConfig({componentId:"zh__sc-9eaa5006-8"})`
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
`,C=u.default.input.withConfig({componentId:"zh__sc-9eaa5006-9"})`
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
`,z=u.default.button.withConfig({componentId:"zh__sc-9eaa5006-10"})`
  cursor: pointer;

  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;

  padding: 0;
  border: none;

  color: ${({$active:e,$error:t})=>!0===e?"#4f39f6":!0===t?"#ff3b6b":"#ced0d9"};

  background: none;
`,I=u.default.div.withConfig({componentId:"zh__sc-9eaa5006-11"})`
  font-size: 12px;
  color: #ff3b6b;
`,k=u.default.button.withConfig({componentId:"zh__sc-9eaa5006-12"})`
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
`,O=(0,n.observer)(({children:e})=>{let{isAuthed:n}=r.default.auth,[o,a]=(0,i.useState)(!0);return((0,i.useEffect)(()=>{let e=!0;return(async()=>{await l.default.auth.restoreSession(),e&&a(!1)})(),()=>{e=!1}},[]),o)?null:(0,t.jsx)(t.Fragment,{children:n?e:(0,t.jsx)(h,{})})});e.s(["default",0,O],48271)},47753,e=>{"use strict";var t=e.i(9735),n=e.i(7744),i=e.i(22803),l=e.i(43174);let r=i.default.div.withConfig({componentId:"zh__sc-914b0b37-0"})`
  position: relative;

  display: flex;

  width: 100%;
  min-height: 100vh;

  background-color: #f9fafb;
`;e.s(["default",0,function({children:e}){let i=(0,n.useRef)(null);return(0,n.useEffect)(()=>(l.default.ui.layout.setAppContainer(i.current),()=>{l.default.ui.layout.setAppContainer(null)}),[]),(0,t.jsx)(r,{ref:i,children:e})}])},15695,69477,e=>{"use strict";var t=e.i(7744),n=e.i(4153);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var l=(0,t.forwardRef)(function(e,n){var l=e.color,r=e.size,o=void 0===r?24:r,a=function(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["color","size"]);return t.default.createElement("svg",i({ref:n,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:void 0===l?"currentColor":l,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),t.default.createElement("polyline",{points:"20 6 9 17 4 12"}))});function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}l.propTypes={color:n.default.string,size:n.default.oneOfType([n.default.string,n.default.number])},l.displayName="Check",e.s(["Check",0,l],15695);var o=(0,t.forwardRef)(function(e,n){var i=e.color,l=e.size,o=void 0===l?24:l,a=function(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["color","size"]);return t.default.createElement("svg",r({ref:n,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:void 0===i?"currentColor":i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),t.default.createElement("polyline",{points:"23 4 23 10 17 10"}),t.default.createElement("path",{d:"M20.49 15a9 9 0 1 1-2.12-9.36L23 10"}))});o.propTypes={color:n.default.string,size:n.default.oneOfType([n.default.string,n.default.number])},o.displayName="RotateCw",e.s(["RotateCw",0,o],69477)},73060,e=>{"use strict";var t=e.i(9735);e.i(3159);var n=e.i(46907),i=e.i(7744),l=e.i(15695),r=e.i(69477),o=e.i(22803),a=e.i(23416),s=e.i(64954),d=e.i(43174);let c=(0,n.observer)(function(){let{oldestSyncedAt:e,refetchAll:n}=d.default.ui.layout.header,[o,s]=(0,i.useState)(()=>new Date),[c,m]=(0,i.useState)("idle"),w=(()=>{if(null===e)return null;let t=Math.max(0,Math.floor((o.getTime()-e.getTime())/1e3/60)),n=Math.floor(t/60);return t<60?`오늘 ${t}분 전 최신정보`:`오늘 ${n}시간 전 최신정보`})();(0,i.useEffect)(()=>{if(null===e)return;let t=window.setInterval(()=>{s(new Date)},6e4);return()=>{window.clearInterval(t)}},[e]),(0,i.useEffect)(()=>{if("completed"!==c)return;let e=window.setTimeout(()=>{m("idle")},2e3);return()=>{window.clearTimeout(e)}},[c]);let v=async()=>{m("loading");try{await n(),m("completed")}catch{m("idle")}},y=(()=>{switch(c){case"idle":default:return null;case"loading":return(0,t.jsx)(r.RotateCw,{size:15});case"completed":return(0,t.jsx)(l.Check,{size:20})}})(),b=(()=>{switch(c){case"idle":default:return"최신 정보로 업데이트하기";case"loading":return"업데이트 중";case"completed":return"업데이트 완료"}})(),j=null===e||"idle"!==c;return(0,t.jsxs)(f,{children:[(0,t.jsxs)(u,{children:[null===w?null:(0,t.jsx)(p,{children:w}),(0,t.jsxs)(h,{$status:"loading"===c?"processing":"completed"===c?"success":void 0,onClick:j?void 0:()=>void v(),disabled:j,children:[y,b]})]}),(0,t.jsx)(x,{children:(0,t.jsx)(g,{onClick:()=>{a.default.auth.logout()},children:"로그아웃"})})]})}),f=o.default.div.withConfig({componentId:"zh__sc-bc883191-0"})`
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
`,u=o.default.div.withConfig({componentId:"zh__sc-bc883191-1"})`
  display: flex;
  gap: 12px;
  align-items: center;
  height: 36px;
`,p=o.default.div.withConfig({componentId:"zh__sc-bc883191-2"})`
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px;
  color: #4a5565;
  letter-spacing: -0.076px;
`,h=(0,o.default)(s.default.Button.Outlined).withConfig({componentId:"zh__sc-bc883191-3"})`
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
`,x=o.default.div.withConfig({componentId:"zh__sc-bc883191-4"})`
  display: flex;
  gap: 16px;
  align-items: center;
`,g=(0,o.default)(s.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-bc883191-5"})`
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
`;e.s(["default",0,c])},79109,e=>{"use strict";var t=e.i(9735);e.i(3159);var n=e.i(46907),i=e.i(7744),l=e.i(43174),r=e.i(26170);let o=(0,n.observer)(function(){let{isLoading:e}=l.default.api,[n,o]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{if(!e)return;let t=window.setTimeout(()=>{o(!0)},1e3);return()=>{o(!1),window.clearTimeout(t)}},[e]),e&&n?(0,t.jsx)(r.default,{isLoading:!0,children:null}):null});e.s(["default",0,o])},55357,e=>{"use strict";var t=e.i(9735);e.i(3159);var n=e.i(46907),i=e.i(7744),l=e.i(22803),r=e.i(43174),o=e.i(26170),a=e.i(33261),s=e.i(15695),d=e.i(64954);let c=(0,n.observer)(function(){let e=(0,a.useRouter)(),{clientDraft:n,isSaving:i,resetToUploadStep:l,saveClientDraft:o}=r.default.modal.clientCreate,{currentServiceType:d,setSelectedClientId:c}=r.default.client.info.byClient,u=async()=>{let t=n?.serviceType,i=await o();if(null===i)return;let l=i.serviceType??t??null;if(null!==l){d===l&&r.default.data.contract.list.refetch();let t=(()=>{switch(l){case"MEAL":return"meal";case"NUTRITION":return"nutrition";default:return"unknown"}})();e.push(`/client/info/by-client/${t}/basic`)}"string"==typeof i.clientId&&i.clientId.length>0&&c(i.clientId)};return(0,t.jsxs)(f,{children:[(0,t.jsx)(p,{disabled:!n||i,onClick:l,children:"다시 업로드하기"}),(0,t.jsxs)(h,{disabled:!n||i,onClick:()=>void u(),children:[(0,t.jsx)(s.Check,{size:16}),"최종확인 및 저장"]})]})}),f=l.default.div.withConfig({componentId:"zh__sc-759c17e6-0"})`
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
`,p=(0,l.default)(d.default.Button.Outlined).withConfig({componentId:"zh__sc-759c17e6-1"})`
  ${u}
`,h=(0,l.default)(d.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-759c17e6-2"})`
  ${u}
`,x=function(e,t=!0){(0,i.useEffect)(()=>{if(!t)return;let n=t=>{var n;if((n=t.target)instanceof HTMLElement&&(n.isContentEditable||null!==n.closest("input, textarea, [contenteditable]")))return;let i=(e=>{if(null===e)return[];let t=Array.from(e.files);return t.length>0?t:Array.from(e.items).filter(e=>"file"===e.kind).map(e=>e.getAsFile()).filter(e=>null!==e)})(t.clipboardData);0!==i.length&&(t.preventDefault(),e(i))};return window.addEventListener("paste",n),()=>{window.removeEventListener("paste",n)}},[t,e])};var g=e.i(4153);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var w=(0,i.forwardRef)(function(e,t){var n=e.color,l=e.size,r=void 0===l?24:l,o=function(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["color","size"]);return i.default.createElement("svg",m({ref:t,xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),i.default.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),i.default.createElement("polyline",{points:"12 5 19 12 12 19"}))});w.propTypes={color:g.default.string,size:g.default.oneOfType([g.default.string,g.default.number])},w.displayName="ArrowRight";let v=(0,n.observer)(function(){let{analyzeSelectedFile:e,isAnalyzing:n,selectedFile:i}=r.default.modal.clientCreate;return(0,t.jsx)(y,{children:(0,t.jsxs)(b,{disabled:null===i||n,onClick:()=>{e()},children:["분석 시작",(0,t.jsx)(w,{size:16})]})})}),y=l.default.div.withConfig({componentId:"zh__sc-d7f6cfb5-0"})`
  display: flex;
  gap: 10px;
  align-self: stretch;
  justify-content: flex-end;
`,b=(0,l.default)(d.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-d7f6cfb5-1"})`
  display: flex;
  flex-shrink: 0;
  gap: 10px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`;var j=e.i(8179),_=e.i(98273),C=e.i(25521);let{FILE_EXTENSION_WHITELIST_BY_GROUP:z}=C.default.file,I=(0,n.observer)(function(){var e;let n,{clearSelectedFile:i,selectedFile:l,isAnalyzing:o}=r.default.modal.clientCreate;if(null===l)return null;let a=-1===(n=(e=l.name).lastIndexOf("."))?"":e.slice(n).toLowerCase();return(0,t.jsx)(k,{children:(0,t.jsxs)(O,{children:[(0,t.jsxs)(E,{children:[(0,t.jsx)($,{children:z.IMAGE.some(e=>e===a)?(0,t.jsx)(_.default.Photo,{size:17,color:"#FA8E43"}):z.AUDIO.some(e=>e===a)?(0,t.jsx)(_.default.SpeechToText,{size:17,color:"#A855F7"}):z.DOCUMENT.some(e=>e===a)?(0,t.jsx)(_.default.News,{size:17,color:"#2264E8"}):null}),(0,t.jsx)(F,{children:(0,t.jsx)(T,{children:l.name})})]}),(0,t.jsxs)(S,{onClick:i,disabled:o,children:["삭제",(0,t.jsx)(j.X,{size:16})]})]},`${l.name}-${l.size}-${l.lastModified}`)})}),k=l.default.div.withConfig({componentId:"zh__sc-8227d071-0"})`
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
`,O=l.default.div.withConfig({componentId:"zh__sc-8227d071-1"})`
  display: flex;
  flex-shrink: 0;
  gap: 24px;
  align-items: center;

  padding: 12px 16px;
  border-radius: 8px;

  background: #f6f8fb;
`,E=l.default.div.withConfig({componentId:"zh__sc-8227d071-2"})`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`,$=l.default.div.withConfig({componentId:"zh__sc-8227d071-3"})`
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
`,T=l.default.div.withConfig({componentId:"zh__sc-8227d071-5"})`
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #0a0a0a;
`,S=l.default.button.withConfig({componentId:"zh__sc-8227d071-6"})`
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
`;var D=e.i(24045),P=e.i(9454);function A(){let[e,n]=(0,i.useState)(0);return(0,i.useEffect)(()=>{let e=performance.now(),t=0,i=l=>{n(Math.min(100*(1-Math.exp(-((l-e)/1e3*.05))),98)),t=window.requestAnimationFrame(i)};return t=window.requestAnimationFrame(i),()=>{window.cancelAnimationFrame(t)}},[]),(0,t.jsx)(N,{children:(0,t.jsx)(L,{$progress:e})})}let N=l.default.div.withConfig({componentId:"zh__sc-aa649b54-0"})`
  overflow: hidden;
  display: flex;

  width: 362px;
  height: ${8}px;
  border-radius: 99px;

  background: #e6e0ff;
  background-color: #e5e2ff;
`,L=l.default.div.attrs(({$progress:e})=>({style:{transform:`scaleX(${e/100})`}})).withConfig({componentId:"zh__sc-aa649b54-1"})`
  transform-origin: left center;
  width: 100%;
  height: 100%;
  background-color: #5635ff;
`,R=(0,n.observer)(function(){let{isWindowFileDragging:e}=r.default.ui.layout,{selectedFile:n,isError:i,isAnalyzing:l,abortAnalyze:o}=r.default.modal.clientCreate,a=i?"지원하지 않는 파일 형식입니다.":e?"파일을 여기에 놓으면 업로드 됩니다.":l?"업로드한 파일을 분석하고 있습니다.":"이곳에 파일을 끌어다 놓거나 (드래그 앤 드롭), 클릭하여 업로드하세요.",s=null===n||l?"지원 파일 형식: 사진 이미지, 서류, 음성 녹음":"새 파일을 업로드하면 기존 파일이 교체됩니다.";return(0,t.jsxs)(B,{children:[null===n&&!i&&(0,t.jsx)(U,{children:(0,t.jsx)(D.Upload,{size:26,color:M[100]})}),(0,t.jsxs)(W,{children:[(0,t.jsx)(H,{$isError:i,children:a}),(0,t.jsx)(V,{children:s})]}),l&&(0,t.jsx)(A,{}),l&&(0,t.jsx)(Y,{onClick:o,children:"중단하기"})]})}),{PRIMARY:M}=P.default.style.color,B=l.default.div.withConfig({componentId:"zh__sc-47e9a3b3-0"})`
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
`,Y=(0,l.default)(d.default.Button.Outlined).withConfig({componentId:"zh__sc-47e9a3b3-5"})`
  display: flex;
  gap: 10px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,X=(0,n.observer)(function(){let{isWindowFileDragging:e}=r.default.ui.layout,{acceptFileTypes:n,setSelectedFile:l,selectedFile:o,isError:a}=r.default.modal.clientCreate,s=(0,i.useRef)(null);return x(e=>{if(0===e.length)return;let t=e[0];void 0!==t&&l(t)}),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(G,{ref:s,type:"file",accept:n,onChange:e=>{let t=Array.from(e.target.files??[]);if(0===t.length)return;let n=t[0];void 0!==n&&(l(n),e.target.value="")}}),(0,t.jsxs)(K,{$isWindowFileDragging:e,onDragOver:e=>{e.preventDefault()},onDrop:e=>{e.preventDefault();let t=Array.from(e.dataTransfer.files);if(0===t.length)return;let n=t[0];void 0!==n&&l(n)},onClick:e=>{e.target instanceof HTMLElement&&(e.target.closest("button")||s.current?.click())},$isError:a,children:[null!==o&&(0,t.jsx)(I,{}),(0,t.jsx)(R,{}),(0,t.jsx)(v,{})]})]})}),G=l.default.input.withConfig({componentId:"zh__sc-35541df3-0"})`
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
`,q=(0,n.observer)(function(){let{analyzedFile:e}=r.default.modal.clientCreate;return(0,t.jsxs)(Z,{$flex1:null===e,children:[null===e&&(0,t.jsx)(J,{children:"전자바우처 캡쳐 화면을 아래에 업로드하고, 다음 버튼을 클릭하세요."}),(0,t.jsx)(X,{})]})}),Z=l.default.div.withConfig({componentId:"zh__sc-8fa7e82c-0"})`
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
`,J=l.default.div.withConfig({componentId:"zh__sc-8fa7e82c-1"})`
  font-size: 18px;
  font-weight: 700;
  font-style: normal;
  line-height: 24px; /* 133.333% */
  color: #101828;
`,{FILE_EXTENSION_WHITELIST_BY_GROUP:Q}=C.default.file,ee=(0,n.observer)(function(){var e;let n,{analyzedFile:i}=r.default.modal.clientCreate;if(null===i)return null;let l=-1===(n=(e=i.name).lastIndexOf("."))?"":e.slice(n).toLowerCase();return(0,t.jsxs)(et,{children:[(0,t.jsxs)(en,{children:[(0,t.jsxs)(ei,{children:[(0,t.jsx)(_.default.FindInPage,{size:18}),"AI 문서 인식 완료"]}),(0,t.jsxs)(el,{children:["업로드된 서류들에서 정보를 성공적으로 추출했습니다. ",(0,t.jsx)("br",{}),"우측의 [이용자 기본 정보]가 올바르게 연동되었는지 확인 후, [최종 확인] 버튼을 눌러주세요."]})]}),(0,t.jsxs)(er,{children:[(0,t.jsxs)(eo,{children:[(0,t.jsx)(_.default.CheckCircle,{size:18}),"분석 완료된 첨부 서류 (1건)"]}),(0,t.jsx)(ea,{children:(0,t.jsxs)(es,{children:[(0,t.jsxs)(ed,{children:[(0,t.jsx)(ec,{children:Q.IMAGE.some(e=>e===l)?(0,t.jsx)(_.default.Photo,{size:17,color:"#FA8E43"}):Q.AUDIO.some(e=>e===l)?(0,t.jsx)(_.default.SpeechToText,{size:17,color:"#A855F7"}):Q.DOCUMENT.some(e=>e===l)?(0,t.jsx)(_.default.News,{size:17,color:"#2264E8"}):null}),(0,t.jsx)(ef,{children:(0,t.jsx)(eu,{children:i.name})})]}),(0,t.jsx)(ep,{children:"추출 완료"})]},`${i.name}-${i.size}-${i.lastModified}`)})]})]})}),et=l.default.div.withConfig({componentId:"zh__sc-a40fcee8-0"})`
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
`,en=l.default.div.withConfig({componentId:"zh__sc-a40fcee8-1"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  align-self: stretch;
`,ei=l.default.div.withConfig({componentId:"zh__sc-a40fcee8-2"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #0a0a0a;
`,el=l.default.div.withConfig({componentId:"zh__sc-a40fcee8-3"})`
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
`,er=l.default.div.withConfig({componentId:"zh__sc-a40fcee8-4"})`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  align-self: stretch;

  min-height: 0;
`,eo=l.default.div.withConfig({componentId:"zh__sc-a40fcee8-5"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #0a0a0a;
`,ea=l.default.div.withConfig({componentId:"zh__sc-a40fcee8-6"})`
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
`,ed=l.default.div.withConfig({componentId:"zh__sc-a40fcee8-8"})`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`,ec=l.default.div.withConfig({componentId:"zh__sc-a40fcee8-9"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;
  border-radius: 4px;

  background: #fff;
`,ef=l.default.div.withConfig({componentId:"zh__sc-a40fcee8-10"})`
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
`,eh=(0,n.observer)(function(){let{analyzedFile:e}=r.default.modal.clientCreate;return(0,t.jsxs)(ex,{children:[null!==e&&(0,t.jsx)(ee,{}),(0,t.jsx)(q,{})]})}),ex=l.default.div.withConfig({componentId:"zh__sc-a077b87a-0"})`
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
`;var eg=e.i(25644),em=e.i(65782);function ew(){return(ew=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var ev=(0,i.forwardRef)(function(e,t){var n=e.color,l=e.size,r=void 0===l?24:l,o=function(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["color","size"]);return i.default.createElement("svg",ew({ref:t,xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),i.default.createElement("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),i.default.createElement("circle",{cx:"12",cy:"7",r:"4"}))});ev.propTypes={color:g.default.string,size:g.default.oneOfType([g.default.string,g.default.number])},ev.displayName="User";var ey=e.i(21771),eb=e.i(43090);let ej=e=>{let t=e.trim().match(/^(\d{6})-?(\d)(\d{0,6})$/);if(null===t)return"unknown";switch(t[2]){case"1":case"3":return"male";case"2":case"4":return"female";default:return"unknown"}},e_=e=>{switch(e){case"male":return"남성";case"female":return"여성";case"unknown":return""}},eC=(0,n.observer)(function(){let{clientDraft:e,ocrDraft:n,updateClientDraft:i,getClientDraftFieldError:l,clearClientDraftFieldError:o}=r.default.modal.clientCreate;if(null===e)return null;let a=e.clientName??"",s=e.residentRegistrationNumber??"",c=e.businessType??"DAY_CARE",f=e.serviceType??"MEAL",u=e.contractStatus??"ACTIVE",p=e.serviceGrade??1,h=e.contractStartDate??"",x=e.serviceStartDate??"",g=e.serviceEndDate??"",m=e.contact??"",w=e.phoneNumber??"",v=e.address??"",y=e.postCode??"",b=e.addressDetail??"",j=ej(s),_="MEAL"===f?"식사관리 서비스":"영양관리 서비스",C="MEAL"===f?"500901":"500401",z=(e,t)=>""===l(e)?t:{...t,borderColor:"#ff4d4f",background:"#fff5f5"},I=e=>{let n=l(e);return""===n?null:(0,t.jsx)(eE,{children:n})},k=(e,t)=>{let n=String(t??"").trim();return""!==n&&String(e).trim()===n},O=(e,t)=>{ey.default.is(e)&&i(n=>t(n,e))};return(0,t.jsxs)(ez,{children:[(0,t.jsxs)(eI,{children:[(0,t.jsxs)(ek,{children:[(0,t.jsx)(eO,{children:"성명"}),(0,t.jsx)(d.default.Input.Text,{$autoFilled:k(a,n?.clientName??""),style:z("clientName",e$),value:a,onChange:e=>{o("clientName"),i(t=>({...t,clientName:e.target.value.trim()}))}}),I("clientName")]}),(0,t.jsxs)(ek,{children:[(0,t.jsx)(eO,{children:"주민등록번호"}),(0,t.jsx)(d.default.Input.Text,{$autoFilled:k(s,n?.residentRegistrationNumber??""),style:z("residentRegistrationNumber",e$),value:s,onChange:e=>{var t;let n,l=e.target.value,r=e.currentTarget.selectionStart??l.length,a=(l.slice(0,r).match(/\d/g)??[]).length;o("residentRegistrationNumber");let s=eb.default.format(l);i(e=>({...e,residentRegistrationNumber:s})),t=e.currentTarget,n=((e,t)=>{if(t<=0)return 0;let n=0;for(let i=0;i<e.length;i+=1){let l=e[i];if(void 0!==l&&/\d/.test(l)&&(n+=1)===t)return i+1}return e.length})(s,a),"-"===s[n]&&(n+=1),requestAnimationFrame(()=>{document.activeElement===t&&t.setSelectionRange(n,n)})}}),I("residentRegistrationNumber")]}),(0,t.jsxs)(ek,{children:[(0,t.jsx)(eO,{children:"성별"}),(0,t.jsx)(d.default.Input.Text,{$autoFilled:k(e_(j),e_(ej(n?.residentRegistrationNumber??""))),style:e$,value:e_(j),readOnly:!0})]})]}),(0,t.jsxs)(eI,{children:[(0,t.jsxs)(ek,{children:[(0,t.jsx)(eO,{children:"사업구분"}),(0,t.jsx)(d.default.Input.Select,{$autoFilled:!0,style:e$,value:c,onChange:e=>{let t=e.target.value;i(e=>({...e,businessType:"DAY_CARE"===t?"DAY_CARE":e.businessType}))},children:(0,t.jsx)("option",{value:"DAY_CARE",children:"일상돌봄서비스"})})]}),(0,t.jsxs)(ek,{children:[(0,t.jsx)(eO,{children:"서비스명"}),(0,t.jsxs)(d.default.Input.Select,{$autoFilled:k(f,n?.serviceType??""),style:e$,value:_,onChange:e=>{let t=e.target.value;i(e=>({...e,serviceType:"식사관리 서비스"===t?"MEAL":"NUTRITION"}))},children:[(0,t.jsx)("option",{value:"식사관리 서비스",children:"식사관리 서비스"}),(0,t.jsx)("option",{value:"영양관리 서비스",children:"영양관리 서비스"})]})]}),(0,t.jsxs)(ek,{children:[(0,t.jsx)(eO,{children:"사업코드"}),(0,t.jsx)(d.default.Input.Text,{$autoFilled:k(f,n?.serviceType??""),style:e$,value:C,readOnly:!0})]})]}),(0,t.jsxs)(eI,{children:[(0,t.jsxs)(ek,{$width:191,children:[(0,t.jsx)(eO,{children:"계약상태"}),(0,t.jsxs)(d.default.Input.Select,{$autoFilled:k(u,n?.contractStatus??""),style:e$,value:u,onChange:e=>{let t=e.target.value;("ACTIVE"===t||"TERMINATED"===t)&&i(e=>({...e,contractStatus:t}))},children:[(0,t.jsx)("option",{value:"ACTIVE",children:"계약중"}),(0,t.jsx)("option",{value:"TERMINATED",children:"해지"})]})]}),(0,t.jsxs)(ek,{$width:191,children:[(0,t.jsx)(eO,{children:"등급"}),(0,t.jsxs)(d.default.Input.Select,{$autoFilled:k(p,n?.serviceGrade??""),style:e$,value:String(p),onChange:e=>{let t=Number(e.target.value);switch(t){case 1:case 2:case 3:case 4:i(e=>({...e,serviceGrade:t}));return;default:return}},children:[(0,t.jsx)("option",{value:"1",children:"1등급"}),(0,t.jsx)("option",{value:"2",children:"2등급"}),(0,t.jsx)("option",{value:"3",children:"3등급"}),(0,t.jsx)("option",{value:"4",children:"4등급"})]})]})]}),(0,t.jsxs)(eI,{children:[(0,t.jsxs)(ek,{$width:191,children:[(0,t.jsx)(eO,{children:"계약 시작일"}),(0,t.jsx)(d.default.Input.Date,{$autoFilled:k(h,n?.contractStartDate??""),style:z("contractStartDate",eF),value:h,onChange:e=>{o("contractStartDate"),O(e,(e,t)=>({...e,contractStartDate:t}))},disableHolidaySelection:!0}),I("contractStartDate")]}),(0,t.jsxs)(ek,{$width:191,children:[(0,t.jsx)(eO,{children:"계약 만료일"}),(0,t.jsx)(d.default.Input.Date,{$autoFilled:k(g,n?.serviceEndDate??""),style:eF,value:g,readOnly:!0})]})]}),(0,t.jsxs)(eI,{children:[(0,t.jsxs)(ek,{$width:191,children:[(0,t.jsx)(eO,{children:"서비스 시작일"}),(0,t.jsx)(d.default.Input.Date,{$autoFilled:k(x,n?.serviceStartDate??""),style:z("serviceStartDate",eF),value:x,onChange:e=>{o("serviceStartDate"),O(e,(e,t)=>{let n=(e=>{let[t,n,i]=e.split("-"),l=new Date(Number(t),Number(n)-1,Number(i));l.setFullYear(l.getFullYear()+1),l.setDate(l.getDate()-1);let[r,o]=ey.default.create(l.getFullYear(),l.getMonth()+1,l.getDate());return null!==r||null===o?null:o})(t);return null===n?e:{...e,serviceStartDate:t,serviceEndDate:n}})}}),I("serviceStartDate")]}),(0,t.jsxs)(ek,{$width:191,children:[(0,t.jsx)(eO,{children:"서비스 만료일"}),(0,t.jsx)(d.default.Input.Date,{$autoFilled:k(g,n?.serviceEndDate??""),style:z("serviceEndDate",eF),value:g,onChange:e=>{o("serviceEndDate"),O(e,(e,t)=>({...e,serviceEndDate:t}))}}),I("serviceEndDate")]})]}),(0,t.jsxs)(eI,{children:[(0,t.jsxs)(ek,{children:[(0,t.jsx)(eO,{children:"휴대폰"}),(0,t.jsx)(d.default.Input.Phone,{$autoFilled:k(w,n?.phoneNumber??""),style:z("phoneNumber",e$),value:w,onChange:e=>{o("phoneNumber"),i(t=>({...t,phoneNumber:e}))}}),I("phoneNumber")]}),(0,t.jsxs)(ek,{children:[(0,t.jsx)(eO,{children:"연락처"}),(0,t.jsx)(d.default.Input.Contact,{$autoFilled:k(m,n?.contact??""),style:z("contact",e$),value:m,onChange:e=>{o("contact"),i(t=>({...t,contact:e}))}}),I("contact")]})]}),(0,t.jsxs)(eI,{children:[(0,t.jsxs)(ek,{children:[(0,t.jsx)(eO,{children:"주소"}),(0,t.jsx)(d.default.Input.Text,{$autoFilled:k(v,n?.address??""),style:z("address",e$),value:v,onChange:e=>{o("address"),i(t=>({...t,address:e.target.value}))}}),I("address")]}),(0,t.jsxs)(ek,{$width:191,children:[(0,t.jsx)(eO,{children:"우편번호"}),(0,t.jsx)(d.default.Input.PostCode,{$autoFilled:k(y,n?.postCode??""),style:z("postCode",e$),value:y,onChange:e=>{o("postCode"),i(t=>({...t,postCode:e}))}}),I("postCode")]})]}),(0,t.jsx)(eI,{children:(0,t.jsxs)(ek,{children:[(0,t.jsx)(eO,{children:"상세주소"}),(0,t.jsx)(d.default.Input.Text,{$autoFilled:k(b,n?.addressDetail??""),style:z("addressDetail",e$),value:b,onChange:e=>{o("addressDetail"),i(t=>({...t,addressDetail:e.target.value}))}}),I("addressDetail")]})})]})}),ez=l.default.div.withConfig({componentId:"zh__sc-27162cff-0"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;

  width: 664px;
`,eI=l.default.div.withConfig({componentId:"zh__sc-27162cff-1"})`
  display: flex;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;

  min-height: 59px;
`,ek=l.default.div.withConfig({componentId:"zh__sc-27162cff-2"})`
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
`,eO=l.default.div.withConfig({componentId:"zh__sc-27162cff-3"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #000;
  text-align: center;
`,eE=l.default.div.withConfig({componentId:"zh__sc-27162cff-4"})`
  position: absolute;
  top: calc(100% + 2px);
  left: 0;

  font-size: 12px;
  line-height: 16px;
  color: #ff4d4f;
`,e$={display:"flex",padding:"4px 16px",alignItems:"center",gap:"10px",flex:"1 0 0",alignSelf:"stretch",fontSize:16},eF={...e$,height:36,lineHeight:"36px"},eT=(0,n.observer)(function(){let{clientDraft:e}=r.default.modal.clientCreate,n=function(e){let t=e.trim().match(/^(\d{6})-?(\d{1})(\d{0,6})$/);if(null===t)return"unknown";let n=t[2];return"1"===n||"3"===n?"male":"2"===n||"4"===n?"female":"unknown"}(e?.residentRegistrationNumber??"");return(0,t.jsxs)(eS,{children:[(0,t.jsx)(eD,{children:"이용자 기본 정보"}),(0,t.jsxs)(eP,{children:[(0,t.jsxs)(eA,{children:[(0,t.jsx)(eN,{children:"사진"}),(0,t.jsx)(eL,{children:"male"===n?(0,t.jsx)(eg.default,{sx:{fontSize:66},htmlColor:"#C6D2FF"}):"female"===n?(0,t.jsx)(em.default,{sx:{fontSize:66},htmlColor:"#C6D2FF"}):(0,t.jsx)(ev,{size:66,color:"#C6D2FF"})})]}),(0,t.jsx)(eC,{})]})]})}),eS=l.default.div.withConfig({componentId:"zh__sc-52495c18-0"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;

  padding: 32px 24px;

  background: #fff;
  box-shadow: -8px 0 8px 0 rgb(0 0 0 / 8%);
`,eD=l.default.div.withConfig({componentId:"zh__sc-52495c18-1"})`
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
  text-align: center;
`,eP=l.default.div.withConfig({componentId:"zh__sc-52495c18-2"})`
  display: flex;
  gap: 24px;
  align-items: flex-start;
  align-self: stretch;
`,eA=l.default.div.withConfig({componentId:"zh__sc-52495c18-3"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
`,eN=l.default.div.withConfig({componentId:"zh__sc-52495c18-4"})`
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
`,eL=l.default.div.withConfig({componentId:"zh__sc-52495c18-5"})`
  display: flex;
  align-items: center;
  justify-content: center;

  aspect-ratio: 1/1;
  width: 120px;
  height: 120px;
  border-radius: 4px;

  background: #f4f2ff;
`,eR=(0,n.observer)(function(){let{clientDraft:e}=r.default.modal.clientCreate;return(0,t.jsxs)(eM,{children:[(0,t.jsx)(eh,{}),e&&(0,t.jsx)(eT,{})]})}),eM=l.default.div.withConfig({componentId:"zh__sc-cfc6108c-0"})`
  overflow-y: auto;
  display: flex;
  align-self: stretch;
  justify-content: center;

  min-height: 830px;
  max-height: 830px;

  background: #f9fafb;
`;function eB(){let{close:e}=r.default.modal.clientCreate;return(0,t.jsxs)(eU,{children:[(0,t.jsx)(eW,{children:"신규 이용자 등록하기"}),(0,t.jsxs)(eH,{onClick:e,children:[(0,t.jsx)(j.X,{size:16}),"닫기"]})]})}let eU=l.default.div.withConfig({componentId:"zh__sc-f50634fa-0"})`
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
`,eW=l.default.div.withConfig({componentId:"zh__sc-f50634fa-1"})`
  font-size: 18px;
  font-weight: 700;
  font-style: normal;
  line-height: 28px; /* 155.556% */
  color: #101828;
  letter-spacing: -0.439px;
`,eH=(0,l.default)(d.default.Button.Outlined).withConfig({componentId:"zh__sc-f50634fa-2"})`
  display: flex;
  gap: 6px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,eV=(0,n.observer)(function(){let e=r.default.modal.clientCreate,{status:n}=e,l=(0,i.useRef)(null);return((0,i.useEffect)(()=>"ready"!==n?void e.setToastContainer(null):(e.setToastContainer(l.current),()=>{e.setToastContainer(null)}),[e,n]),"ready"!==n)?null:(0,t.jsx)(o.default,{children:(0,t.jsxs)(eY,{ref:l,children:[(0,t.jsx)(eB,{}),(0,t.jsx)(eR,{}),(0,t.jsx)(c,{})]})})}),eY=l.default.div.withConfig({componentId:"zh__sc-21fa7296-0"})`
  position: relative;

  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  align-items: center;

  width: 1712px;
  min-width: 1712px;
  border-radius: 8px;

  background: #fff;
`;function eX(){return(eX=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var eG=(0,i.forwardRef)(function(e,t){var n=e.color,l=e.size,r=void 0===l?24:l,o=function(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["color","size"]);return i.default.createElement("svg",eX({ref:t,xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),i.default.createElement("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),i.default.createElement("polyline",{points:"19 12 12 19 5 12"}))});function eK(){return(eK=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}eG.propTypes={color:g.default.string,size:g.default.oneOfType([g.default.string,g.default.number])},eG.displayName="ArrowDown";var eq=(0,i.forwardRef)(function(e,t){var n=e.color,l=e.size,r=void 0===l?24:l,o=function(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["color","size"]);return i.default.createElement("svg",eK({ref:t,xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),i.default.createElement("line",{x1:"12",y1:"19",x2:"12",y2:"5"}),i.default.createElement("polyline",{points:"5 12 12 5 19 12"}))});eq.propTypes={color:g.default.string,size:g.default.oneOfType([g.default.string,g.default.number])},eq.displayName="ArrowUp";var eZ=e.i(26546),eJ=e.i(71723),eQ=e.i(25699);let e0=function({isOpen:e,actionType:n,isProcessing:i=!1,onClickSecondary:l,onClickPrimary:r}){if(!e)return null;let o="move"===n,a=o?"이동":"닫기";return(0,t.jsx)(e1,{children:(0,t.jsxs)(e2,{children:[(0,t.jsxs)(e4,{children:[(0,t.jsx)(e6,{children:"수정된 정보가 있습니다."}),(0,t.jsxs)(e5,{children:["지금 화면을 나가면 수정하신 내용이 저장되지 않습니다.",(0,t.jsx)("br",{}),`[저장하고 ${a}]${o?"을":"를"} 누르면 정보가 안전하게 저장됩니다.`]})]}),(0,t.jsxs)(e7,{children:[(0,t.jsx)(e3,{type:"button",disabled:i,onClick:l,children:`저장없이 ${o?"이동":"나가기"}`}),(0,t.jsx)(e8,{type:"button",disabled:i,onClick:r,children:`저장하고 ${a}`})]})]})})},e1=l.default.div.withConfig({componentId:"zh__sc-22c1af4d-0"})`
  position: fixed;
  z-index: 3000;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgb(17 24 39 / 36%);
`,e2=l.default.div.withConfig({componentId:"zh__sc-22c1af4d-1"})`
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
`,e4=l.default.div.withConfig({componentId:"zh__sc-22c1af4d-2"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;

  width: 100%;
`,e6=l.default.h3.withConfig({componentId:"zh__sc-22c1af4d-3"})`
  margin: 0;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px;
  color: #000;
`,e5=l.default.p.withConfig({componentId:"zh__sc-22c1af4d-4"})`
  margin: 0;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px;
  color: #000;
`,e7=l.default.div.withConfig({componentId:"zh__sc-22c1af4d-5"})`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: flex-end;

  width: 100%;
`,e3=(0,l.default)(d.default.Button.Outlined).withConfig({componentId:"zh__sc-22c1af4d-6"})`
  height: 36px;
  padding: 8px 16px;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px;
  color: #4f39f6;
`,e8=(0,l.default)(d.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-22c1af4d-7"})`
  height: 36px;
  padding: 8px 16px;

  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: 20px;
`,e9=(0,n.observer)(function(){let e=[];return(0,t.jsxs)(te,{children:[(0,t.jsxs)(ti,{disabled:0===e.length,onClick:()=>{},children:["분석 시작",(0,t.jsx)(w,{size:16})]}),e.length>0&&(0,t.jsx)(tn,{children:"취소"})]})}),te=l.default.div.withConfig({componentId:"zh__sc-11817043-0"})`
  display: flex;
  flex-flow: row-reverse;
  gap: 10px;
  align-self: stretch;
  justify-content: space-between;
`,tt=l.css`
  display: flex;
  flex-shrink: 0;
  gap: 10px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,tn=(0,l.default)(d.default.Button.Outlined).withConfig({componentId:"zh__sc-11817043-1"})`
  ${tt}
`,ti=(0,l.default)(d.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-11817043-2"})`
  ${tt}
`,{FILE_EXTENSION_WHITELIST_BY_GROUP:tl}=C.default.file,tr=((0,n.observer)(function(){return(0,t.jsx)(tr,{children:[].map((e,n)=>{var i;let l,r=-1===(l=(i=e.name).lastIndexOf("."))?"":i.slice(l).toLowerCase();return(0,t.jsxs)(to,{children:[(0,t.jsxs)(ta,{children:[(0,t.jsx)(ts,{children:tl.IMAGE.some(e=>e===r)?(0,t.jsx)(_.default.Photo,{size:17,color:"#FA8E43"}):tl.AUDIO.some(e=>e===r)?(0,t.jsx)(_.default.SpeechToText,{size:17,color:"#A855F7"}):tl.DOCUMENT.some(e=>e===r)?(0,t.jsx)(_.default.News,{size:17,color:"#2264E8"}):null}),(0,t.jsx)(td,{children:(0,t.jsx)(tc,{children:e.name})})]}),(0,t.jsxs)(tf,{onClick:()=>{},disabled:!1,children:["삭제",(0,t.jsx)(j.X,{size:16})]})]},`${e.name}-${e.size}-${e.lastModified}`)})})}),l.default.div.withConfig({componentId:"zh__sc-4e7cda26-0"})`
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
`),to=l.default.div.withConfig({componentId:"zh__sc-4e7cda26-1"})`
  display: flex;
  flex-shrink: 0;
  gap: 24px;
  align-items: center;

  padding: 12px 16px;
  border-radius: 8px;

  background: #f6f8fb;
`,ta=l.default.div.withConfig({componentId:"zh__sc-4e7cda26-2"})`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`,ts=l.default.div.withConfig({componentId:"zh__sc-4e7cda26-3"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;
  border-radius: 4px;

  background: #fff;
`,td=l.default.div.withConfig({componentId:"zh__sc-4e7cda26-4"})`
  display: flex;
  align-items: center;
  align-self: stretch;

  width: 196px;
  height: 40px;

  color: #0a0a0a;
`,tc=l.default.div.withConfig({componentId:"zh__sc-4e7cda26-5"})`
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #0a0a0a;
`,tf=l.default.button.withConfig({componentId:"zh__sc-4e7cda26-6"})`
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
`,tu=l.default.div.withConfig({componentId:"zh__sc-c9208651-0"})`
  position: absolute;
  bottom: ${-32}px;

  overflow: hidden;
  display: flex;

  width: 362px;
  height: ${8}px;
  border-radius: 99px;

  background: #e6e0ff;
  background-color: #e5e2ff;
`,tp=l.default.div.attrs(({$progress:e})=>({style:{transform:`scaleX(${e/100})`}})).withConfig({componentId:"zh__sc-c9208651-1"})`
  transform-origin: left center;
  width: 100%;
  height: 100%;
  background-color: #5635ff;
`,th=(0,n.observer)(function({disabled:e}){let{isWindowFileDragging:n}=r.default.ui.layout,i=[],l=!e&&n?"파일을 여기에 놓으면 업로드 됩니다.":"이곳에 파일을 끌어다 놓거나 (드래그 앤 드롭), 클릭하여 업로드하세요.",o=i.length>0?"추가 파일도 계속 업로드할 수 있습니다.":"지원 파일 형식: 사진 이미지, 서류, 음성 녹음";return(0,t.jsxs)(tg,{children:[0===i.length&&(0,t.jsx)(tm,{children:(0,t.jsx)(D.Upload,{size:26,color:e?"#9ca3af":tx[100]})}),(0,t.jsxs)(tw,{children:[(0,t.jsx)(tv,{$disabled:e,$isError:!1,children:l}),(0,t.jsx)(ty,{$disabled:e,children:o})]}),!1]})}),{PRIMARY:tx}=P.default.style.color,tg=l.default.div.withConfig({componentId:"zh__sc-cdea1a21-0"})`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  align-self: stretch;
  justify-content: center;
`,tm=l.default.div.withConfig({componentId:"zh__sc-cdea1a21-1"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;
`,tw=l.default.div.withConfig({componentId:"zh__sc-cdea1a21-2"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  align-self: stretch;
  justify-content: center;
`,tv=l.default.div.withConfig({componentId:"zh__sc-cdea1a21-3"})`
  font-size: 14px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 142.857% */
  color: ${({$disabled:e,$isError:t})=>t?"#ff4d4f":e?"#9ca3af":"#4f39f6"};
  text-align: center;
`,ty=l.default.div.withConfig({componentId:"zh__sc-cdea1a21-4"})`
  font-size: 14px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 142.857% */
  color: ${({$disabled:e})=>e?"#9ca3af":"#99a1af"};
`,tb=(0,n.observer)(function(){let{isWindowFileDragging:e}=r.default.ui.layout,{selectedDocument:n}=r.default.modal.documentView,l=(0,i.useRef)(null),o=n?.status!=="NEED_DETAIL"&&n?.status!=="NEED_REVIEW",a=e=>{};return x(e=>{o||a(e)}),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(tj,{ref:l,type:"file",multiple:!0,accept:".jpg,.jpeg,.png,.heic,.mp3,.wav,.m4a,.aac,.hwp,.hwpx,.doc,.docx,.txt,.pdf,.xls,.xlsx",disabled:o,onChange:e=>{if(o)return;let t=Array.from(e.target.files??[]);0!==t.length&&(a(t),e.target.value="")}}),(0,t.jsxs)(t_,{$isWindowFileDragging:e,$disabled:o,onDragOver:e=>{if(e.preventDefault(),o)return},onDrop:e=>{if(e.preventDefault(),o)return;let t=Array.from(e.dataTransfer.files);0!==t.length&&a(t)},onClick:e=>{!o&&e.target instanceof HTMLElement&&(e.target.closest("button")||l.current?.click())},$isError:!1,children:[!1,(0,t.jsx)(th,{disabled:o}),(0,t.jsx)(e9,{})]})]})}),tj=l.default.input.withConfig({componentId:"zh__sc-c05f4a71-0"})`
  display: none;
`,t_=l.default.div.withConfig({componentId:"zh__sc-c05f4a71-1"})`
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
`,{FILE_EXTENSION_WHITELIST_BY_GROUP:tC}=C.default.file,tz=((0,n.observer)(function(){let e=[];return(0,t.jsxs)(tz,{children:[(0,t.jsxs)(tI,{children:[(0,t.jsxs)(tk,{children:[(0,t.jsx)(_.default.FindInPage,{size:18}),"AI 문서 인식 완료"]}),(0,t.jsxs)(tO,{children:["업로드된 서류들에서 정보를 성공적으로 추출했습니다. ",(0,t.jsx)("br",{}),"우측의 [이용자 기본 정보]가 올바르게 연동되었는지 확인 후, [최종 확인] 버튼을 눌러주세요."]})]}),(0,t.jsxs)(tE,{children:[(0,t.jsxs)(t$,{children:[(0,t.jsx)(_.default.CheckCircle,{size:18}),"분석 완료된 첨부 서류 (",e.length,"건)"]}),(0,t.jsx)(tF,{children:e.map(e=>{var n;let i,l=-1===(i=(n=e.name).lastIndexOf("."))?"":n.slice(i).toLowerCase();return(0,t.jsxs)(tT,{children:[(0,t.jsxs)(tS,{children:[(0,t.jsx)(tD,{children:tC.IMAGE.some(e=>e===l)?(0,t.jsx)(_.default.Photo,{size:17,color:"#FA8E43"}):tC.AUDIO.some(e=>e===l)?(0,t.jsx)(_.default.SpeechToText,{size:17,color:"#A855F7"}):tC.DOCUMENT.some(e=>e===l)?(0,t.jsx)(_.default.News,{size:17,color:"#2264E8"}):null}),(0,t.jsx)(tP,{children:(0,t.jsx)(tA,{children:e.name})})]}),(0,t.jsx)(tN,{children:"추출 완료"})]},`${e.name}-${e.size}-${e.lastModified}`)})})]})]})}),l.default.div.withConfig({componentId:"zh__sc-91a1d4f6-0"})`
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
`),tI=l.default.div.withConfig({componentId:"zh__sc-91a1d4f6-1"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  align-self: stretch;
`,tk=l.default.div.withConfig({componentId:"zh__sc-91a1d4f6-2"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #0a0a0a;
`,tO=l.default.div.withConfig({componentId:"zh__sc-91a1d4f6-3"})`
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
`,tE=l.default.div.withConfig({componentId:"zh__sc-91a1d4f6-4"})`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  align-self: stretch;

  min-height: 0;
`,t$=l.default.div.withConfig({componentId:"zh__sc-91a1d4f6-5"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #0a0a0a;
`,tF=l.default.div.withConfig({componentId:"zh__sc-91a1d4f6-6"})`
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
`,tT=l.default.div.withConfig({componentId:"zh__sc-91a1d4f6-7"})`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 359px;
  height: 64px;
  padding: 12px 16px;
  border-radius: 8px;

  background: #f6f8fb;
`,tS=l.default.div.withConfig({componentId:"zh__sc-91a1d4f6-8"})`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`,tD=l.default.div.withConfig({componentId:"zh__sc-91a1d4f6-9"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;
  border-radius: 4px;

  background: #fff;
`,tP=l.default.div.withConfig({componentId:"zh__sc-91a1d4f6-10"})`
  display: flex;
  align-items: center;
  align-self: stretch;

  width: 196px;
  height: 40px;

  color: #0a0a0a;
`,tA=l.default.div.withConfig({componentId:"zh__sc-91a1d4f6-11"})`
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #0a0a0a;
`,tN=l.default.div.withConfig({componentId:"zh__sc-91a1d4f6-12"})`
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
`,tL=(0,n.observer)(function(){return(0,t.jsxs)(tR,{children:[(0,t.jsx)(tb,{}),!1]})}),tR=l.default.div.withConfig({componentId:"zh__sc-b3f3f20d-0"})`
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
`,tM=l.default.div.withConfig({componentId:"zh__sc-80a26ee5-0"})`
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
`,tB=(0,n.observer)(function(){let e=r.default.client.info.byClient.docs.selectedContractId,n=(r.default.data.contract.list.data??[]).find(t=>t.id===e)??null,i=function(e){if(null==e||""===e.trim())return"-";let t=new Date(e);if(Number.isNaN(t.getTime()))return"-";let n=String(t.getFullYear()),i=String(t.getMonth()+1).padStart(2,"0"),l=String(t.getDate()).padStart(2,"0"),r=String(t.getHours()).padStart(2,"0"),o=String(t.getMinutes()).padStart(2,"0");return`${n}-${i}-${l} ${r}:${o}`}(n?.client.createdAt??n?.createdAt),l=n?.client.name??"-";return(0,t.jsx)(tU,{children:(0,t.jsxs)(tW,{children:[(0,t.jsxs)(tH,{children:[(0,t.jsx)(tV,{children:(0,t.jsxs)(tY,{children:[(0,t.jsx)(tM,{$status:"done",children:(0,t.jsx)(s.Check,{size:12,color:"#ffffff",strokeWidth:3})}),"기존 이용자 정보 연동 완료"]})}),(0,t.jsx)(tX,{children:(0,t.jsx)(tG,{children:`업로드 일시: ${i}`})})]}),(0,t.jsx)(tK,{children:(0,t.jsx)(tq,{children:`이용자 ${l}님의 기존 이용 내역과 갱신된 요금 정보가 성공적으로 양식에 매핑되었습니다.`})})]})})}),tU=l.default.div.withConfig({componentId:"zh__sc-a82a8c4-0"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;
`,tW=l.default.div.withConfig({componentId:"zh__sc-a82a8c4-1"})`
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
`,tH=l.default.div.withConfig({componentId:"zh__sc-a82a8c4-2"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  align-self: stretch;
`,tV=l.default.div.withConfig({componentId:"zh__sc-a82a8c4-3"})`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;
`,tY=l.default.div.withConfig({componentId:"zh__sc-a82a8c4-4"})`
  display: flex;
  gap: 4px;
  align-items: center;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 16px; /* 100% */
  color: #0a0a0a;
`,tX=l.default.div.withConfig({componentId:"zh__sc-a82a8c4-5"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  align-self: stretch;

  padding-left: 24px;
`,tG=l.default.div.withConfig({componentId:"zh__sc-a82a8c4-6"})`
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
`,tK=l.default.div.withConfig({componentId:"zh__sc-a82a8c4-7"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  align-self: stretch;

  padding-left: 24px;
`,tq=l.default.div.withConfig({componentId:"zh__sc-a82a8c4-8"})`
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
`,tZ=(0,n.observer)(function(){let{selectedTemplate:e}=r.default.modal.documentView;return(0,t.jsxs)(tJ,{children:[(0,t.jsx)(tQ,{children:(0,t.jsx)(t0,{children:e?.name??"계약서 자동 생성"})}),(0,t.jsxs)(t1,{children:[(0,t.jsx)(tB,{}),(0,t.jsx)(tL,{})]})]})}),tJ=l.default.div.withConfig({componentId:"zh__sc-61494f9e-0"})`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  justify-content: space-between;

  width: 541px;
  border-right: 1px solid #e5e7eb;

  background: #fff;
`,tQ=l.default.div.withConfig({componentId:"zh__sc-61494f9e-1"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;

  padding: 16px 20px;
  border-bottom: 1px solid #e5e7eb;

  background: #fff;
`,t0=l.default.div.withConfig({componentId:"zh__sc-61494f9e-2"})`
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
`,t1=l.default.div.withConfig({componentId:"zh__sc-61494f9e-3"})`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;

  padding: 16px 12px;
`;function t2(){return(t2=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var t4=(0,i.forwardRef)(function(e,t){var n=e.color,l=e.size,r=void 0===l?24:l,o=function(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["color","size"]);return i.default.createElement("svg",t2({ref:t,xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),i.default.createElement("polyline",{points:"6 9 6 2 18 2 18 9"}),i.default.createElement("path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"}),i.default.createElement("rect",{x:"6",y:"14",width:"12",height:"8"}))});t4.propTypes={color:g.default.string,size:g.default.oneOfType([g.default.string,g.default.number])},t4.displayName="Printer";var t6=e.i(69477),t5=e.i(68339);let t7=(0,n.observer)(function({isSaving:e,setIsSaving:n,resetLocalStates:l}){let{close:o,selectedDocument:a}=r.default.modal.documentView,d=r.default.modal.documentView,c=r.default.client.info.byClient.representativeContract?.client.name?.trim()??"",[f,u]=(0,i.useState)(!1),[p,h]=(0,i.useState)(!1),x=d.selectedTemplateImagePaths.filter(e=>""!==e),g=null!==a&&x.length>0,m=async()=>{if(g&&!p){h(!0);try{let e=d.selectedTemplateId;if(null===e)return;let t=x.map((t,n)=>({id:`${e}-${n+1}`,templateId:e,imagePath:t,page:n+1}));if(0===t.length)return;let n=d.selectedTemplate?.name?.trim()??"",i=""===n?"Print":n,l=""===c?i:`${i} - ${c}`;await (0,t5.renderDocumentPrintView)({pages:t,fields:d.selectedTemplateFields,printTitle:l,onImageLoadFailure:e=>{r.default.ui.layout.toast.error(`서류 이미지 ${e}개 로딩에 실패하여 출력을 중단했습니다.`)}})}finally{h(!1)}}},w=()=>{l(),o()},v=async()=>{if(!e){n(!0);try{await d.saveSelectedFieldChanges()}finally{n(!1)}}},y=async()=>{if(!e){n(!0);try{await d.patchSelectedDocumentStatusPrevious()}finally{n(!1)}}},b=async()=>{if(!e){n(!0);try{await d.saveSelectedFieldChanges(),u(!1),w()}finally{n(!1)}}};return(0,t.jsxs)(t3,{children:[(0,t.jsx)(t8,{children:(0,t.jsxs)(t9,{children:[(0,t.jsxs)(ne,{type:"button",disabled:!g||p,onClick:()=>{m()},children:[(0,t.jsx)(t4,{size:16}),"출력하기"]}),a?.status==="CONFIRMED"||a?.status==="COMPLETED"?(0,t.jsxs)(ne,{$processing:e,onClick:()=>void y(),children:[(0,t.jsx)(_.default.Undo,{size:14}),"확인 취소"]}):(0,t.jsxs)(ne,{$processing:e,onClick:()=>void v(),children:[e?(0,t.jsx)(t6.RotateCw,{size:16}):(0,t.jsx)(s.Check,{size:16}),e?"저장중":"최종확인 및 저장"]}),(0,t.jsxs)(nt,{type:"button",onClick:()=>{d.hasSelectedFieldChanges?u(!0):w()},children:[(0,t.jsx)(j.X,{size:16}),"닫기"]})]})}),(0,t.jsx)(e0,{isOpen:f,actionType:"exit",isProcessing:e,onClickSecondary:()=>{u(!1),w()},onClickPrimary:()=>{b()}})]})}),t3=l.default.div.withConfig({componentId:"zh__sc-fa5a83d4-0"})`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: flex-end;

  padding: 12px 24px;
  border-bottom: 1px solid #e5e7eb;

  background: #fff;
`,t8=l.default.div.withConfig({componentId:"zh__sc-fa5a83d4-1"})`
  display: flex;
  gap: 40px;
  align-items: center;
  justify-content: flex-end;
`,t9=l.default.div.withConfig({componentId:"zh__sc-fa5a83d4-2"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,ne=(0,l.default)(d.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-fa5a83d4-3"})`
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
`,nt=(0,l.default)(d.default.Button.Outlined).withConfig({componentId:"zh__sc-fa5a83d4-4"})`
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
`,nn=(0,n.observer)(function(){let e=r.default.modal.documentView,n=e.selectedDocument?.status!=="CONFIRMED"&&e.selectedDocument?.status!=="COMPLETED",[l,a]=(0,i.useState)(1),[s,d]=(0,i.useState)(null),[c,f]=(0,i.useState)(!1),[u,p]=(0,i.useState)(!1),[h,x]=(0,i.useState)(null),g=(0,i.useRef)(null),m=(0,i.useRef)([]),w=e.selectedTemplateImagePaths,v=Math.max(w?.length??0,1),y=Math.min(l,v),b=(0,i.useCallback)((e,t="instant")=>{let n=g.current,i=m.current[e-1];if(!n||!i)return;let l=Math.max(i.offsetTop-n.offsetTop-12,0);n.scrollTo({top:l,behavior:t})},[]),j=t=>(-1!==t||!1!==e.canMovePrevTemplate)&&(1!==t||!1!==e.canMoveNextTemplate)&&(-1===t?e.movePrevTemplate():e.moveNextTemplate(),a(1),d(null),f(!1),g.current?.scrollTo({top:0,behavior:"auto"}),!0),_=async()=>e.hasSelectedFieldChanges?(x(-1),p(!0),!1):j(-1),C=async()=>e.hasSelectedFieldChanges?(x(1),p(!0),!1):j(1),z=async()=>{if(!c&&null!==h){f(!0);try{await e.saveSelectedFieldChanges(),j(h),x(null),p(!1)}finally{f(!1)}}};(0,i.useEffect)(()=>{let t=t=>{"ready"===e.status&&!1!==e.hasSelectedFieldChanges&&(t.preventDefault(),t.returnValue="")};return window.addEventListener("beforeunload",t),()=>{window.removeEventListener("beforeunload",t)}},[e.hasSelectedFieldChanges,e.status]);let I=()=>{if(null===s)return;let e=s.replace(/[^\d]/g,"");if(""===e)return void d(null);let t=Number(e);if(!Number.isFinite(t))return void d(null);let n=Math.min(Math.max(t,1),v);a(n),d(null),b(n)};return"ready"!==e.status?null:(0,t.jsx)(o.default,{children:(0,t.jsxs)(ni,{children:[(0,t.jsx)(tZ,{}),(0,t.jsxs)(nl,{children:[(0,t.jsx)(t7,{isSaving:c,setIsSaving:f,resetLocalStates:()=>{a(1),d(null),f(!1)}}),(0,t.jsxs)(nr,{children:[(0,t.jsx)(nc,{type:"button","aria-label":"이전 문서",onClick:()=>void _(),children:(0,t.jsx)(eZ.ChevronLeft,{size:24})}),(0,t.jsx)(no,{ref:g,onScroll:()=>{let e=g.current;if(!e)return;let t=e.scrollTop,n=1,i=1/0;m.current.forEach((l,r)=>{if(!l)return;let o=Math.abs(l.offsetTop-e.offsetTop-t);o<i&&(i=o,n=r+1)}),n!==l&&a(n)},children:Array.from({length:v},(i,l)=>{let r,o,a;return(0,t.jsx)(na,{$active:!0,ref:e=>{m.current[l]=e},children:(0,t.jsx)(ns,{children:(o="string"==typeof(r=w?.[l])?""===r?null:r:null,a=e.getSelectedTemplateFieldsByPage(l+1),null===o?(0,t.jsx)(nd,{}):(0,t.jsx)(eQ.default,{imagePath:o,fields:a,readOnly:!n,isFieldEditable:t=>e.isSelectedFieldEditable(t),isFieldAutoFilled:t=>e.isSelectedFieldAutoFilled(t),onChangeField:(t,n)=>{if("radio"===t.uiProps.fieldType){"true"===n&&e.toggleSelectedRadioGroup(t);return}e.updateSelectedFieldValue({page:t.page,fieldKey:t.fieldKey,value:n})}}))})},`screen-page-${l+1}`)})}),(0,t.jsx)(nc,{type:"button","aria-label":"다음 문서",onClick:()=>void C(),$right:!0,children:(0,t.jsx)(eJ.ChevronRight,{size:24})}),(0,t.jsx)(nf,{children:(0,t.jsxs)(nu,{children:[(0,t.jsxs)(np,{type:"button",disabled:1===y,onClick:()=>{let e=Math.max(y-1,1);a(e),d(null),b(e)},children:[(0,t.jsx)(eq,{size:16,color:1===y?"#9ca3af":"#0a0a0a"}),(0,t.jsx)(nh,{$muted:1===y,children:"이전"})]}),(0,t.jsxs)(nx,{children:[(0,t.jsx)(ng,{children:(0,t.jsx)(nm,{type:"text",inputMode:"numeric","aria-label":"페이지 번호 입력",value:s??String(y),onFocus:()=>{d(String(y))},onChange:e=>{d(e.target.value)},onBlur:I,onKeyDown:e=>{"Enter"===e.key&&(e.preventDefault(),I(),e.currentTarget.blur())}})}),(0,t.jsx)(ng,{children:(0,t.jsx)(nv,{children:"/"})}),(0,t.jsx)(ng,{children:(0,t.jsx)(ny,{children:v})})]}),(0,t.jsxs)(np,{type:"button",disabled:y===v,onClick:()=>{let e=Math.min(y+1,v);a(e),d(null),b(e)},children:[(0,t.jsx)(nh,{$muted:y===v,children:"다음"}),(0,t.jsx)(eG,{size:16,color:y===v?"#9ca3af":"#0a0a0a"})]})]})})]}),(0,t.jsx)(e0,{isOpen:u,actionType:"move",isProcessing:c,onClickSecondary:()=>{x(null),p(!1),null!==h&&(e.discardSelectedFieldChanges(),j(h))},onClickPrimary:()=>{z()}})]})]})})}),ni=l.default.div.withConfig({componentId:"zh__sc-7a537607-0"})`
  overflow: hidden;
  display: flex;
  flex-shrink: 0;
  align-items: flex-start;

  width: 1712px;
  min-width: 1712px;
  border-radius: 8px;
`,nl=l.default.div.withConfig({componentId:"zh__sc-7a537607-1"})`
  position: relative;

  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;

  height: 989px;
`,nr=l.default.div.withConfig({componentId:"zh__sc-7a537607-2"})`
  position: relative;

  display: flex;
  flex: 1 0 0;
  align-self: stretch;

  min-height: 0;
`,no=l.default.div.withConfig({componentId:"zh__sc-7a537607-3"})`
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
`,na=l.default.div.withConfig({componentId:"zh__sc-7a537607-4"})`
  display: ${({$active:e})=>e?"block":"none"};
  width: calc(210mm * ${.75});
  height: calc(297mm * ${.75});
  box-shadow: 0 0 8px 0 rgb(0 0 0 / 10%);
`,ns=l.default.div.withConfig({componentId:"zh__sc-7a537607-5"})`
  transform-origin: top left;
  transform: scale(${.75});
  width: 210mm;
  height: 297mm;
`,nd=l.default.div.withConfig({componentId:"zh__sc-7a537607-6"})`
  width: 210mm;
  height: 297mm;
  background: #f9fafb;
`,nc=l.default.button.withConfig({componentId:"zh__sc-7a537607-7"})`
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
`,nf=l.default.div.withConfig({componentId:"zh__sc-7a537607-8"})`
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
`,nu=l.default.div.withConfig({componentId:"zh__sc-7a537607-9"})`
  pointer-events: auto;

  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: center;

  padding: 8px 16px;
  border: 1px solid #e5e9ef;
  border-radius: 99px;

  background: #fff;
`,np=l.default.button.withConfig({componentId:"zh__sc-7a537607-10"})`
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
`,nh=l.default.span.withConfig({componentId:"zh__sc-7a537607-11"})`
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 16px;
  color: ${({$muted:e})=>!0===e?"#9ca3af":"#0a0a0a"};
  letter-spacing: -1px;
`,nx=l.default.div.withConfig({componentId:"zh__sc-7a537607-12"})`
  display: flex;
  gap: 2px;
  align-items: center;
`,ng=l.default.div.withConfig({componentId:"zh__sc-7a537607-13"})`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 20px;
`,nm=l.default.input.withConfig({componentId:"zh__sc-7a537607-14"})`
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
`,nw=l.default.span.withConfig({componentId:"zh__sc-7a537607-15"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: 16px;
  text-align: center;
  letter-spacing: -1px;
`,nv=(0,l.default)(nw).withConfig({componentId:"zh__sc-7a537607-16"})`
  color: #0a0a0a;
`,ny=(0,l.default)(nw).withConfig({componentId:"zh__sc-7a537607-17"})`
  color: #0a0a0a;
`,nb=(0,n.observer)(function(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(eV,{}),(0,t.jsx)(nn,{})]})});e.s(["default",0,nb],55357)},31239,e=>{"use strict";e.i(3159);var t=e.i(46907),n=e.i(33261),i=e.i(7744),l=e.i(43174);let r=(0,t.observer)(function(){let e=(0,n.usePathname)(),t=(0,n.useRouter)(),r=l.default.ui.layout.targetPathname;return(0,i.useEffect)(()=>{e&&l.default.ui.layout.setPathname(e)},[e]),(0,i.useEffect)(()=>{null!==r&&(t.push(r),l.default.ui.layout.clearTargetPathname())},[t,r]),null});e.s(["default",0,r])},44997,e=>{"use strict";var t=e.i(9735),n=e.i(70682),i=e.i(33261),l=e.i(7744),r=e.i(4153);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var a=(0,l.forwardRef)(function(e,t){var n=e.color,i=e.size,r=void 0===i?24:i,a=function(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["color","size"]);return l.default.createElement("svg",o({ref:t,xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),l.default.createElement("polyline",{points:"6 9 12 15 18 9"}))});function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}a.propTypes={color:r.default.string,size:r.default.oneOfType([r.default.string,r.default.number])},a.displayName="ChevronDown";var d=(0,l.forwardRef)(function(e,t){var n=e.color,i=e.size,r=void 0===i?24:i,o=function(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["color","size"]);return l.default.createElement("svg",s({ref:t,xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),l.default.createElement("polyline",{points:"18 15 12 9 6 15"}))});d.propTypes={color:r.default.string,size:r.default.oneOfType([r.default.string,r.default.number])},d.displayName="ChevronUp";var c=e.i(22803),f=e.i(9454);function u(e){return null===e?"/":e.length>1&&e.endsWith("/")?e.slice(0,-1):e}function p(e,t){let n=u(e),i=u(t);return"/"===i?"/"===n:n===i||n.startsWith(`${i}/`)}function h(e,t){return t.startsWith("/")?"/"===e?t:`${u(e)}${t}`:""}function x(e,t){return h(e,t.matchSubpath??t.subpath)}let g=c.default.div.withConfig({componentId:"zh__sc-2fa5d58c-0"})`
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
`,w=c.default.div.withConfig({componentId:"zh__sc-2fa5d58c-2"})`
  cursor: ${({$clickable:e})=>e?"pointer":"default"};

  position: relative;

  flex-shrink: 0;

  width: 100%;
  height: 40px;
  border-radius: 8px;

  background: ${({$active:e})=>e?"#F1F0FA":"transparent"};
`,v=c.default.div.withConfig({componentId:"zh__sc-2fa5d58c-3"})`
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
`,b=c.default.div.withConfig({componentId:"zh__sc-2fa5d58c-5"})`
  display: flex;
  gap: 10px;
  align-items: center;

  width: 100%;
  height: 100%;
`,j=c.default.div.withConfig({componentId:"zh__sc-2fa5d58c-6"})`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;

  width: 20px;
  height: 20px; /* size-20 */
`,_=(0,c.default)(j).withConfig({componentId:"zh__sc-2fa5d58c-7"})``,C=c.default.div.withConfig({componentId:"zh__sc-2fa5d58c-8"})`
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
`,O=c.default.div.withConfig({componentId:"zh__sc-2fa5d58c-12"})`
  flex-shrink: 0;
  width: 100%;
  height: 24px;
`,E=c.default.div.withConfig({componentId:"zh__sc-2fa5d58c-13"})`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
`,$=c.default.div.withConfig({componentId:"zh__sc-2fa5d58c-14"})`
  display: flex;
  flex: 1 0 0;
  gap: 10px;
  align-items: center;

  min-width: 1px;
  height: 100%;
`,F=c.default.div.withConfig({componentId:"zh__sc-2fa5d58c-15"})`
  overflow: hidden;
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  min-width: 1px;
  height: 100%;
  padding: 1px 0;
`,T=c.default.div.withConfig({componentId:"zh__sc-2fa5d58c-16"})`
  flex-shrink: 0;

  width: 100%;

  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  line-height: 20px;
  color: ${({$active:e})=>e?"#4F39F6":"#45464E"};
`;e.s(["default",0,function(){let e=u((0,i.usePathname)()),r=f.default.routes,[o,s]=(0,l.useState)(()=>Object.fromEntries(r.map((t,n)=>[n,t.children?.some(n=>{let i=x(t.subpath,n);return!!i&&p(e,i)})??!1])));return(0,t.jsx)(g,{children:r.map((i,l)=>{let r=i.children??[],c=r.length>0,f=r.some(t=>{let n=x(i.subpath,t);return!!n&&p(e,n)}),u=p(e,i.subpath)||f,g=f||(o[l]??!1);return(0,t.jsxs)(m,{children:[(0,t.jsx)(w,{$active:u,$clickable:!!(i.hasPage||c),as:i.hasPage?n.default:"div",href:i.hasPage?i.subpath:void 0,onClick:c?()=>{s(e=>({...e,[l]:!g}))}:void 0,children:(0,t.jsx)(v,{children:(0,t.jsx)(y,{children:(0,t.jsxs)(b,{children:[(0,t.jsx)(j,{children:i.icon?(0,t.jsx)(i.icon,{size:16,color:u?"#4F39F6":"#6E7079"}):null}),(0,t.jsx)(C,{$active:u,children:`${l}. ${i.label}`}),c?(0,t.jsx)(_,{children:g?(0,t.jsx)(d,{size:16,color:"#6E7079"}):(0,t.jsx)(a,{size:16,color:"#6E7079"})}):null]})})})}),c&&g?(0,t.jsx)(z,{children:(0,t.jsx)(I,{children:r.map((r,o)=>{let a=h(i.subpath,r.subpath),s=x(i.subpath,r),d=!!s&&p(e,s);return(0,t.jsx)(k,{as:r.hasPage?n.default:"div",href:r.hasPage&&a||void 0,children:(0,t.jsx)(O,{children:(0,t.jsx)(E,{children:(0,t.jsx)($,{children:(0,t.jsx)(F,{children:(0,t.jsx)(T,{$active:d,children:`${l}-${o+1}. ${r.label}`})})})})})},`${i.subpath}-${r.subpath}`)})})}):null]},i.subpath)})})}],44997)},57738,e=>{"use strict";var t=e.i(9735);e.i(3159);var n=e.i(46907),i=e.i(20276),l=e.i(8179),r=e.i(22803),o=e.i(9454),a=e.i(43174);let s=(0,n.observer)(function(){let{items:e,remove:n}=a.default.ui.layout.toast,r=new Map;e.forEach(e=>{let t=r.get(e.container)??[];t.push(e),r.set(e.container,t)});let o=Array.from(r.entries()).map(([e,t])=>({container:e,items:t}));return(0,t.jsx)(t.Fragment,{children:o.map(({container:e,items:r})=>{let o=(0,t.jsx)(c,{$isFixed:null===e,children:r.map(e=>(0,t.jsxs)(f,{$type:e.type,role:"status","aria-live":"polite",children:[(0,t.jsx)(u,{children:e.message}),(0,t.jsx)(p,{type:"button",onClick:()=>n(e.id),"aria-label":"토스트 닫기",children:(0,t.jsx)(l.X,{size:14})})]},e.id))});return null===e?(0,t.jsx)(d,{children:o},"fallback-container"):(0,i.createPortal)(o,e,`toast-container-${r[0]?.id??"default"}`)})})}),d=r.default.div.withConfig({componentId:"zh__sc-7dcaecab-0"})`
  position: relative;
`,c=r.default.div.withConfig({componentId:"zh__sc-7dcaecab-1"})`
  pointer-events: none;

  position: ${({$isFixed:e})=>e?"fixed":"absolute"};
  z-index: ${o.default.style.numeric.Z_INDEX.TOAST};
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
`,f=r.default.div.withConfig({componentId:"zh__sc-7dcaecab-2"})`
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
`,u=r.default.p.withConfig({componentId:"zh__sc-7dcaecab-3"})`
  flex: 1;

  margin: 0;

  font-size: 16px;
  font-weight: 700;
  line-height: 1.4;
  overflow-wrap: anywhere;
`,p=r.default.button.withConfig({componentId:"zh__sc-7dcaecab-4"})`
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
`;e.s(["default",0,s])},16342,e=>{"use strict";var t=e.i(7744),n=e.i(43174);let i=e=>Array.from(e.dataTransfer?.types??[]).includes("Files");e.s(["default",0,function(){let[e,l]=(0,t.useState)(!1),r=(0,t.useRef)(0),{setIsWindowFileDragging:o}=n.default.ui.layout;return(0,t.useEffect)(()=>{let e=e=>{i(e)&&(r.current+=1,l(!0))},t=e=>{i(e)&&(r.current=Math.max(0,r.current-1),0===r.current&&l(!1))},n=e=>{i(e)&&e.preventDefault()},o=e=>{i(e)&&(e.preventDefault(),r.current=0,l(!1))};return window.addEventListener("dragenter",e),window.addEventListener("dragleave",t),window.addEventListener("dragover",n),window.addEventListener("drop",o),()=>{window.removeEventListener("dragenter",e),window.removeEventListener("dragleave",t),window.removeEventListener("dragover",n),window.removeEventListener("drop",o)}},[]),(0,t.useEffect)(()=>(o(e),()=>{o(!1)}),[e,o]),null}])}]);