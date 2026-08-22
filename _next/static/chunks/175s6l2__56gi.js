(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,553,e=>{"use strict";var t=e.i(7744),n=e.i(4153);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var d=(0,t.forwardRef)(function(e,n){var d=e.color,l=e.size,o=void 0===l?24:l,r=function(e,t){if(null==e)return{};var n,i,d=function(e,t){if(null==e)return{};var n,i,d={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(d[n]=e[n]);return d}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(d[n]=e[n])}return d}(e,["color","size"]);return t.default.createElement("svg",i({ref:n,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:void 0===d?"currentColor":d,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},r),t.default.createElement("circle",{cx:"11",cy:"11",r:"8"}),t.default.createElement("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}))});d.propTypes={color:n.default.string,size:n.default.oneOfType([n.default.string,n.default.number])},d.displayName="Search",e.s(["Search",0,d],553)},67096,33832,e=>{"use strict";var t=e.i(38797),n=e.i(9735);let i=(0,t.default)((0,n.jsx)("path",{d:"m5 9 1.41 1.41L11 5.83V22h2V5.83l4.59 4.59L19 9l-7-7z"}),"North");e.s(["default",0,i],67096);let d=(0,t.default)((0,n.jsx)("path",{d:"m19 15-1.41-1.41L13 18.17V2h-2v16.17l-4.59-4.59L5 15l7 7z"}),"South");e.s(["default",0,d],33832)},12898,e=>{"use strict";var t=e.i(38803);let n=t.default.div.withConfig({componentId:"zh__sc-5098f667-0"})`
  display: flex;
  flex: 1;

  min-width: 1633px;
  max-width: 1633px;
  min-height: 0;
  margin: 0 auto;
  padding: 16px;
`;e.s(["default",0,n])},59701,e=>{"use strict";var t=e.i(9735);e.i(3159);var n=e.i(46907),i=e.i(33261),d=e.i(7744),l=e.i(38803),o=e.i(12898),r=e.i(43174),s=e.i(64954);let a=function(e){let{serviceType:n,onChangeServiceType:i}=e;return(0,t.jsxs)(c,{children:[(0,t.jsxs)(f,{children:[(0,t.jsx)(h,{children:"서비스 구분"}),(0,t.jsxs)(u,{children:[(0,t.jsx)(p,{type:"button",$active:"MEAL"===n,onClick:()=>i("MEAL"),children:"식사 서비스"}),(0,t.jsx)(p,{type:"button",$active:"NUTRITION"===n,onClick:()=>i("NUTRITION"),children:"영양 서비스"})]})]}),(0,t.jsx)(x,{type:"button",disabled:!0,children:"엑셀 파일 다운로드"})]})},c=l.default.div.withConfig({componentId:"zh__sc-afc36c84-0"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,f=l.default.div.withConfig({componentId:"zh__sc-afc36c84-1"})`
  display: flex;
  gap: 24px;
  align-items: center;
`,h=l.default.h1.withConfig({componentId:"zh__sc-afc36c84-2"})`
  margin: 0;

  font-size: 20px;
  font-weight: 700;
  color: #0a0a0a;
  letter-spacing: -0.5px;
`,u=l.default.div.withConfig({componentId:"zh__sc-afc36c84-3"})`
  overflow: hidden;
  display: flex;

  height: 48px;
  border: 1px solid #b1b8be;
  border-radius: 8px;

  background: #fff;
`,p=l.default.button.withConfig({componentId:"zh__sc-afc36c84-4"})`
  cursor: pointer;

  display: flex;
  flex: 1 1 auto;
  align-items: center;
  justify-content: center;

  min-width: 96px;
  height: 100%;
  padding: 0 16px;
  border: none;

  font-size: 16px;
  font-weight: 700;
  line-height: 1.5;
  color: ${({$active:e})=>e?"#fff":"#464c53"};
  white-space: nowrap;

  background: ${({$active:e})=>e?"#4f39f6":"transparent"};
`,x=(0,l.default)(s.default.Button.Outlined).withConfig({componentId:"zh__sc-afc36c84-5"})`
  display: flex;
  gap: 4px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`;var g=e.i(26546),b=e.i(71723);let m=(e,t)=>12*e+(t-1),_=function(e){let{targetYearMonth:n,onShiftMonth:i}=e,d=(e=>{if("string"!=typeof e)return null;let t=e.match(/^(\d{4})-(\d{2})$/);if(null===t)return null;let n=Number(t[1]),i=Number(t[2]);return Number.isNaN(n)||Number.isNaN(i)||i<1||i>12?null:{year:n,month:i}})(n),l=new Date,o=d?.year??l.getFullYear(),r=d?.month??l.getMonth()+1,s=o-50,a=Array.from({length:o+50-s+1},(e,t)=>s+t);return(0,t.jsxs)(w,{children:[(0,t.jsx)(j,{type:"button",onClick:()=>i(-1),children:(0,t.jsx)(g.ChevronLeft,{size:18,strokeWidth:2.5})}),(0,t.jsxs)(v,{children:[(0,t.jsx)(I,{value:String(o),onChange:e=>{let t;0!=(t=m(Number(e.currentTarget.value),r)-m(o,r))&&i(t)},children:a.map(e=>(0,t.jsxs)("option",{value:e,children:[e,"년"]},e))}),(0,t.jsx)(I,{value:String(r),onChange:e=>{let t;0!=(t=m(o,Number(e.currentTarget.value))-m(o,r))&&i(t)},children:Array.from({length:12},(e,t)=>t+1).map(e=>(0,t.jsxs)("option",{value:e,children:[e,"월"]},e))})]}),(0,t.jsx)(j,{type:"button",onClick:()=>i(1),children:(0,t.jsx)(b.ChevronRight,{size:18,strokeWidth:2.5})})]})},w=l.default.div.withConfig({componentId:"zh__sc-f9837b7b-0"})`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: center;

  height: 48px;
  border-bottom: 1px solid #e3e5ed;
`,v=l.default.div.withConfig({componentId:"zh__sc-f9837b7b-1"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,I=(0,l.default)(s.default.Input.Select).withConfig({componentId:"zh__sc-f9837b7b-2"})`
  width: 116px;
  height: 36px;
  font-weight: 700;
`,j=l.default.button.withConfig({componentId:"zh__sc-f9837b7b-3"})`
  cursor: pointer;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;
  border: 1px solid #d1d5db;
  border-radius: 50%;

  color: #0a0a0a;

  background: #fff;
`;var y=e.i(67096),C=e.i(33832),D=e.i(553),z=e.i(21771),$=e.i(44534);function O(e){return void 0===e?"-":`${e.toLocaleString("ko-KR")}원`}function E(e){let t=new Date(e);if(Number.isNaN(t.getTime()))return e;let n=t.getMonth()+1,i=t.getDate(),d=["일","월","화","수","목","금","토"][t.getDay()];return`${n}/${i} ${d}`}let P=function(e){let{schedule:n,isSubmitting:i,onClose:l,onConfirm:o}=e,r=(0,d.useMemo)(()=>n.map(e=>({value:String(e.sequence),label:`${e.sequence}회차 (${E(e.serviceDate)})`})),[n]),[s,a]=(0,d.useState)(r[0]?.value??null),c=null!==s&&r.some(e=>e.value===s)?s:r[0]?.value??null,f=!0===i||0===r.length||null===c;return(0,t.jsx)(N,{children:(0,t.jsxs)(R,{onClick:e=>e.stopPropagation(),children:[(0,t.jsxs)(S,{children:[(0,t.jsx)(T,{children:"선택한 회차를 일괄 [제공 완료] 처리할까요?"}),(0,t.jsxs)(k,{children:[(0,t.jsx)(V,{children:"회차 선택"}),(0,t.jsx)(A,{value:c??"",onChange:e=>a(e.currentTarget.value),disabled:0===r.length,children:r.map(e=>(0,t.jsx)("option",{value:e.value,children:e.label},e.value))})]}),(0,t.jsxs)(L,{children:["선택한 회차에서 [미입력] 상태인 계약 중 이용자만 [완료]로 변경됩니다.",(0,t.jsx)("br",{}),"[미제공] 또는 [종료] 상태의 이용자는 변경되지 않습니다."]})]}),(0,t.jsxs)(M,{children:[(0,t.jsx)(q,{type:"button",onClick:l,disabled:i,children:"취소"}),(0,t.jsx)(F,{type:"button",disabled:f,onClick:()=>{null!==c&&o(Number(c))},children:"완료 처리하기"})]})]})})},N=l.default.div.withConfig({componentId:"zh__sc-a08696c9-0"})`
  position: fixed;
  z-index: 3000;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgb(17 24 39 / 36%);
`,R=l.default.div.withConfig({componentId:"zh__sc-a08696c9-1"})`
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
`,S=l.default.div.withConfig({componentId:"zh__sc-a08696c9-2"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
`,T=l.default.h3.withConfig({componentId:"zh__sc-a08696c9-3"})`
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #000;
`,k=l.default.div.withConfig({componentId:"zh__sc-a08696c9-4"})`
  display: flex;
  gap: 10px;
  align-items: center;
`,V=l.default.div.withConfig({componentId:"zh__sc-a08696c9-5"})`
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #000;
`,A=(0,l.default)(s.default.Input.Select).withConfig({componentId:"zh__sc-a08696c9-6"})`
  height: 36px;
`,L=l.default.p.withConfig({componentId:"zh__sc-a08696c9-7"})`
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #000;
`,M=l.default.div.withConfig({componentId:"zh__sc-a08696c9-8"})`
  display: flex;
  gap: 12px;
  align-items: center;
  align-self: stretch;
  justify-content: flex-end;
`,q=(0,l.default)(s.default.Button.Outlined).withConfig({componentId:"zh__sc-a08696c9-9"})`
  display: flex;
  gap: 10px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,F=(0,l.default)(s.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-a08696c9-10"})`
  display: flex;
  gap: 10px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`;var U=e.i(88552),B=e.i(15695),G=e.i(8179);let H=["PROVIDED","NOT_PROVIDED","PENDING"],Y=[],K={PROVIDED:"제공완료",NOT_PROVIDED:"미제공",PENDING:"미입력"},W=[{value:"HOSPITALIZATION",label:"병원 입원"},{value:"AWAY_OR_OUTING",label:"부재중 또는 외출"},{value:"CLIENT_REFUSAL",label:"본인 거부"}];function Z(e){return"NOT_PROVIDED"===e?W[0].value:null}let X=function(e){var n,i;let{selectedStatusCell:l,onClose:o,onSubmit:r,isSubmitting:s}=e,a=null===(n=l)?null:!0===n.isPending?"PENDING":null===n.status?null:!0!=("PROVIDED"===(i=n.status)||"NOT_PROVIDED"===i)?null:n.status,c=null===l||"NOT_PROVIDED"!==l.status?null:l.reason??Z("NOT_PROVIDED"),[f,h]=(0,d.useState)(()=>a),[u,p]=(0,d.useState)(()=>c);if(null===l)return null;let x=function(e){if(null===e.status)return Y;let{status:t}=e;return"OUT_OF_PERIOD"===t||"OUT_OF_PERIOD_RECORDED"===t?H:Y}(l),g=f!==a||"NOT_PROVIDED"===f&&u!==c,b=async()=>{if(null!==f){if("PROVIDED"===f)return void await r({provided:!0,reason:null,pending:!1});if("NOT_PROVIDED"===f){let e=null===u?W[0].value:u;await r({provided:!1,reason:e,pending:!1});return}"PENDING"===f&&await r({pending:!0})}};return(0,t.jsx)(J,{children:(0,t.jsxs)(Q,{onClick:e=>e.stopPropagation(),children:[(0,t.jsxs)(ee,{children:[(0,t.jsx)(et,{children:"배달 상태 입력하기"}),(0,t.jsxs)(en,{type:"button",onClick:o,children:[(0,t.jsx)(G.X,{size:16}),"닫기"]})]}),(0,t.jsx)(ei,{children:(0,t.jsx)(ed,{children:H.map(e=>{let n=x.includes(e),i=f===e,d="NOT_PROVIDED"===e?W:[],l=("PROVIDED"===e||"NOT_PROVIDED"===e||"PENDING"===e)&&!0!==n;return(0,t.jsxs)(el,{$active:i,$disabled:n,onClick:()=>{!0===l&&(h(e),p(Z(e)))},children:[(0,t.jsx)(eo,{$disabled:n,children:K[e]}),d.length>0&&(0,t.jsx)(er,{children:d.map(i=>(0,t.jsxs)(es,{onClick:t=>{!0===l&&(t.stopPropagation(),h(e),p(i.value))},children:[(0,t.jsx)(ea,{"aria-label":i.label,checked:f===e&&u===i.value,disabled:!0!==l,onChange:()=>{!0===l&&(h(e),p(i.value))}}),(0,t.jsx)(ec,{$disabled:n,children:i.label})]},`${e}-${i.value}`))}),(0,t.jsxs)(ef,{$active:i,$disabled:n,children:["선택",(0,t.jsx)(U.default,{sx:{fontSize:16}})]})]},e)})})}),(0,t.jsx)(eh,{children:(0,t.jsxs)(eu,{type:"button",onClick:()=>void b(),disabled:s||null===f||!0!==g,children:[(0,t.jsx)(B.Check,{size:16}),"저장하기"]})})]})})},J=l.default.div.withConfig({componentId:"zh__sc-d2db635d-0"})`
  position: fixed;
  z-index: 3000;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgb(17 24 39 / 36%);
`,Q=l.default.div.withConfig({componentId:"zh__sc-d2db635d-1"})`
  overflow: hidden;
  display: flex;
  flex-direction: column;

  width: 746px;
  max-width: calc(100vw - 32px);
  border: 1px solid #d0d5dd;
  border-radius: 8px;

  background: #fff;
`,ee=l.default.div.withConfig({componentId:"zh__sc-d2db635d-2"})`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 69px;
  padding: 0 16px;
  border-bottom: 1px solid #eaecf0;
`,et=l.default.h3.withConfig({componentId:"zh__sc-d2db635d-3"})`
  margin: 0;

  font-size: 20px;
  font-weight: 700;
  line-height: 1.4;
  color: #101828;
`,en=(0,l.default)(s.default.Button.Outlined).withConfig({componentId:"zh__sc-d2db635d-4"})`
  display: flex;
  gap: 4px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,ei=l.default.div.withConfig({componentId:"zh__sc-d2db635d-5"})`
  padding: 32px 24px;
  background: #f9fafb;
`,ed=l.default.div.withConfig({componentId:"zh__sc-d2db635d-6"})`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
`,el=l.default.div.withConfig({componentId:"zh__sc-d2db635d-7"})`
  cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};

  display: flex;
  flex-direction: column;

  height: 150px;
  padding: 16px;
  border: 1px solid ${({$active:e})=>e?"#4f39f6":"#d0d5dd"};
  border-radius: 8px;

  background: ${({$disabled:e,$active:t})=>e?"#fff":t?"#f7f5ff":"#fff"};
`,eo=l.default.div.withConfig({componentId:"zh__sc-d2db635d-8"})`
  font-size: 16px;
  font-weight: 700;
  line-height: 1.2;
  color: ${({$disabled:e})=>e?"#d9d9d9":"#0a0a0a"};
`,er=l.default.div.withConfig({componentId:"zh__sc-d2db635d-9"})`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 12px;
`,es=l.default.div.withConfig({componentId:"zh__sc-d2db635d-10"})`
  cursor: pointer;
  display: flex;
  gap: 4px;
  align-items: center;
`,ea=(0,l.default)(s.default.Input.Radio).withConfig({componentId:"zh__sc-d2db635d-11"})`
  width: 14px;
  height: 14px;

  &:checked {
    border-color: #256ef4;
    background: #256ef4;
    box-shadow: inset 0 0 0 2.5px #fff;
  }

  &:disabled {
    border-color: #b9c2cc;
    background: #d5dbe1;
  }

  &:disabled:checked {
    border-color: #b9c2cc;
    background: #b9c2cc;
    box-shadow: inset 0 0 0 2.5px #d5dbe1;
  }
`,ec=l.default.span.withConfig({componentId:"zh__sc-d2db635d-12"})`
  font-size: 14px;
  color: ${({$disabled:e})=>e?"#d9d9d9":"#0a0a0a"};
`,ef=l.default.div.withConfig({componentId:"zh__sc-d2db635d-13"})`
  display: flex;
  gap: 2px;
  align-items: center;
  justify-content: flex-end;

  margin-top: auto;

  font-size: 16px;
  line-height: 16px; /* 100% */
  color: ${({$active:e,$disabled:t})=>t?"#d0d5dd":"#4f39f6"};
  letter-spacing: -1px;
`,eh=l.default.div.withConfig({componentId:"zh__sc-d2db635d-14"})`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  height: 68px;
  padding: 0 16px;
  border-top: 1px solid #eaecf0;
`,eu=(0,l.default)(s.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-d2db635d-15"})`
  display: flex;
  gap: 4px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,ep={managementNumber:"desc",name:"asc"},ex={PROVIDED:"완료",NOT_PROVIDED:"NOT_PROVIDED",OUT_OF_PERIOD:"OUT_OF_PERIOD",OUT_OF_PERIOD_RECORDED:"에러 : 기간 외 입력됨"},eg={HOSPITALIZATION:"병원 입원",AWAY_OR_OUTING:"부재중/외출",CLIENT_REFUSAL:"본인 거부"};function eb(e){return!1===e.isPending}function em(e){return void 0!==e&&(!0===e.isPending||"PROVIDED"===e.status||"NOT_PROVIDED"===e.status)}function e_(e,t,n){if("OUT_OF_PERIOD"!==e)return ex[e];let{firstPatchableIndex:i,lastPatchableIndex:d}=n;return null!==i&&t<i?"/":null!==d&&t>d?"종료":ex[e]}function ew(e,t,n){return"미입력"===n?"#45464E":"/"===n?"#b1b8be":"종료"===n?"PRESSED"===t?"#47574f":"#5a6b62":"PROVIDED"===e?"#027a48":"NOT_PROVIDED"===e?"#b42318":"#667085"}function ev(e,t,n){return"미입력"===n?"HOVER"===t?"#F9FAFB":"PRESSED"===t?"#F2F4F7":"#ffffff":"/"===n?"HOVER"===t?"#f9fafb":"PRESSED"===t?"#f2f4f7":"#ffffff":"종료"===n?"HOVER"===t?"#e5ebe7":"PRESSED"===t?"#d8e1db":"#eff3f0":"PROVIDED"===e?"HOVER"===t?"#e2f3e9":"PRESSED"===t?"#d8e9df":"#ecfdf3":"NOT_PROVIDED"===e?"HOVER"===t?"#f4e9e8":"PRESSED"===t?"#eadfde":"#fef3f2":"#fff"}function eI({label:e,width:n,sortValue:i,currentSortKey:d,currentSortOrder:l,onSort:o}){let r=d===i,s=r?l:ep[i],a=r?"#131416":"#9ca3af";return(0,t.jsx)(eT,{$width:n,children:(0,t.jsx)(eL,{type:"button",onClick:()=>o(i),children:(0,t.jsxs)(eM,{children:[(0,t.jsx)(eq,{children:e}),(0,t.jsx)(eF,{children:"desc"===s?(0,t.jsx)(y.default,{sx:{fontSize:14,color:a}}):(0,t.jsx)(C.default,{sx:{fontSize:14,color:a}})})]})})})}let ej=function(e){let{rows:n,schedule:i,sortKey:l,sortOrder:o,onSort:r,onPatchCell:s,onPatchRecords:a}=e,[c,f]=(0,d.useState)("ALL"),[h,u]=(0,d.useState)(""),[p,x]=(0,d.useState)(null),[g,b]=(0,d.useState)(!1),[m,_]=(0,d.useState)(!1),[w,v]=(0,d.useState)(!1),I=(0,d.useMemo)(()=>n.map(e=>{let t,n,d=(t=null,n=null,i.forEach((i,d)=>{void 0!==e.cells.find(e=>e.sequence===i.sequence&&e.serviceDate===i.serviceDate&&void 0!==e&&!0!==e.isPending&&("PROVIDED"===e.status||"NOT_PROVIDED"===e.status))&&(null===t&&(t=d),n=d)}),{firstPatchableIndex:t,lastPatchableIndex:n});return{...e,_searchable:$.default.create(e.clientName),_patchableRange:d,_isTerminated:i.some((t,n)=>{let i=e.cells.find(e=>e.sequence===t.sequence&&e.serviceDate===t.serviceDate);return void 0!==i&&!0===eb(i)&&"종료"===e_(i.status,n,d)})}}),[n,i]),j=(0,d.useMemo)(()=>I.filter(e=>!0===e._isTerminated).length,[I]),y=(0,d.useMemo)(()=>I.length-j,[I,j]),C=(0,d.useMemo)(()=>I.filter(e=>!0===$.default.isMatch(e._searchable,h)&&("ACTIVE"===c?!0!==e._isTerminated:"TERMINATED"!==c||!0===e._isTerminated)),[I,c,h]),N=(0,d.useMemo)(()=>i.filter(e=>I.filter(e=>!0!==e._isTerminated).some(t=>t.cells.some(t=>t.sequence===e.sequence&&t.serviceDate===e.serviceDate&&!0===t.isPending))),[I,i]),R=i.length>0?i.length:8,S=async e=>{if(null===e)return;let t=i.find(t=>t.sequence===e),n=N.find(t=>t.sequence===e);if(void 0===t||void 0===n)return;let d=I.filter(e=>!0!==e._isTerminated).flatMap(e=>{let n=e.cells.find(e=>e.sequence===t.sequence&&e.serviceDate===t.serviceDate);return void 0===n||!0!==n.isPending?[]:[{contractId:e.contractId,serviceDate:n.serviceDate,pending:!1,provided:!0,reason:null}]});if(0===d.length)return void _(!1);v(!0);let l=await a(d);v(!1),!0===l&&_(!1)},T=async e=>{if(null===p)return;let t=null;if(!1===e.pending&&!0===e.provided&&(t={contractId:p.contractId,serviceDate:p.serviceDate,pending:!1,provided:!0,reason:null}),!1===e.pending&&!1===e.provided&&null!==e.reason&&(t={contractId:p.contractId,serviceDate:p.serviceDate,pending:!1,provided:!1,reason:e.reason}),!0===e.pending&&(t={contractId:p.contractId,serviceDate:p.serviceDate,pending:!0}),null===t)return;b(!0);let n=await s(t);b(!1),!0===n&&x(null)};return(0,t.jsxs)(ey,{children:[(0,t.jsxs)(eC,{children:[(0,t.jsxs)(eD,{children:[(0,t.jsxs)(ez,{type:"button",$active:"ALL"===c,onClick:()=>f("ALL"),children:["전체 이용자 (",n.length,"명)"]}),(0,t.jsxs)(ez,{type:"button",$active:"ACTIVE"===c,onClick:()=>f("ACTIVE"),children:["계약중 (",y,"명)"]}),(0,t.jsxs)(ez,{type:"button",$active:"TERMINATED"===c,onClick:()=>f("TERMINATED"),children:["종료 (",j,"명)"]})]}),(0,t.jsxs)(e$,{children:[(0,t.jsxs)(eO,{children:[(0,t.jsx)(eE,{value:h,onChange:e=>u(e.currentTarget.value),placeholder:"이용자명 검색"}),(0,t.jsx)(eP,{children:(0,t.jsx)(D.Search,{color:"#0a0a0a",size:16})})]}),(0,t.jsx)(eN,{type:"button",onClick:()=>{_(!0)},disabled:0===N.length||w,children:"선택 회차 전체 완료 처리"})]})]}),(0,t.jsx)(eR,{children:(0,t.jsxs)(eS,{children:[(0,t.jsxs)("thead",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)(ek,{$width:84,"aria-hidden":"true"}),(0,t.jsx)(ek,{$width:120,"aria-hidden":"true"}),(0,t.jsx)(ek,{$width:110,"aria-hidden":"true"}),(0,t.jsx)(eV,{colSpan:R,children:"회차별 제공일 및 제공 상태"}),(0,t.jsx)(ek,{$width:140,"aria-hidden":"true"}),(0,t.jsx)(ek,{$width:90,"aria-hidden":"true"}),(0,t.jsx)(ek,{$width:165,"aria-hidden":"true"}),(0,t.jsx)(ek,{$width:164,"aria-hidden":"true"}),(0,t.jsx)(ek,{$width:164,"aria-hidden":"true"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)(eI,{label:"관리번호",width:84,sortValue:"managementNumber",currentSortKey:l,currentSortOrder:o,onSort:r}),(0,t.jsx)(eI,{label:"성명",width:120,sortValue:"name",currentSortKey:l,currentSortOrder:o,onSort:r}),(0,t.jsx)(eT,{$width:110,children:"생년월일"}),i.length>0?i.map((e,n)=>(0,t.jsxs)(eU,{$isFirstInSchedule:0===n,$isLastInSchedule:n===i.length-1,children:[(0,t.jsxs)(eB,{children:[e.sequence,"회차"]}),(0,t.jsx)(eG,{children:E(e.serviceDate)})]},`${e.sequence}-${e.serviceDate}`)):Array.from({length:R},(e,n)=>(0,t.jsxs)(eU,{$isFirstInSchedule:0===n,$isLastInSchedule:n===R-1,children:[(0,t.jsxs)(eB,{children:[n+1,"회차"]}),(0,t.jsx)(eG,{children:"일정 없음"})]},`empty-schedule-header-${n}`)),(0,t.jsx)(eT,{$width:140,children:"제공 횟수"}),(0,t.jsx)(eT,{$width:90,children:(0,t.jsxs)(eA,{children:["바우처",(0,t.jsx)("br",{}),"등급"]})}),(0,t.jsx)(eT,{$width:165,children:"예상 총액"}),(0,t.jsx)(eT,{$width:164,children:"정부지원금"}),(0,t.jsx)(eT,{$width:164,children:"본인부담금"})]})]}),(0,t.jsxs)("tbody",{children:[C.map(e=>{var n;let d=e._patchableRange;return(0,t.jsxs)(eH,{children:[(0,t.jsx)(eY,{$width:84,children:e.managementNumber??"-"}),(0,t.jsx)(eY,{$width:120,children:(0,t.jsxs)(eK,{children:[(0,t.jsx)("span",{children:e.clientName}),(0,t.jsx)(eW,{$terminated:e._isTerminated,children:e._isTerminated?"종료":"계약중"})]})}),(0,t.jsx)(eY,{$width:110,children:null===(n=e.birthDate)||!0!==z.default.is(n)?"-":n.replaceAll("-",".")}),i.length>0?i.map((n,l)=>{let o=e.cells.find(e=>e.sequence===n.sequence&&e.serviceDate===n.serviceDate),r=o&&eb(o)?e_(o.status,l,d):void 0,s=o&&!1===o.isPending&&"NOT_PROVIDED"===o.status&&null!==o.reason?eg[o.reason]??null:null,a=o?.isPending===!0?"미입력":s??r,c="/"===a;return(0,t.jsx)(eZ,{$status:o&&eb(o)?o.status:void 0,$displayLabel:a,$clickable:em(o),$isLastInSchedule:l===i.length-1,onClick:()=>{if(void 0!==o&&!0===em(o)){if(!0===o.isPending)return void x({contractId:e.contractId,clientName:e.clientName,sequence:o.sequence,serviceDate:o.serviceDate,isPending:!0,status:null,reason:null});x({contractId:e.contractId,clientName:e.clientName,sequence:o.sequence,serviceDate:o.serviceDate,isPending:!1,status:o.status,reason:"NOT_PROVIDED"===o.status?o.reason:null})}},children:o?(0,t.jsx)(eX,{children:(0,t.jsx)(eJ,{$isSlashLabel:c,children:a})}):"-"},`${e.contractId}-${n.sequence}`)}):Array.from({length:R},(n,i)=>(0,t.jsx)(eZ,{$clickable:!1,$isLastInSchedule:i===R-1,children:"-"},`${e.contractId}-empty-schedule-${i}`)),(0,t.jsxs)(e0,{children:[e.providedCount,"회 제공 / 전체 ",e.cells.length,"회"]}),(0,t.jsx)(eQ,{$width:90,children:e.grade}),(0,t.jsx)(eQ,{$width:165,children:O(e.expectedTotalAmount)}),(0,t.jsx)(e1,{$width:164,children:O(e.expectedGovernmentSupportAmount)}),(0,t.jsx)(e2,{$width:164,children:O(e.expectedCopaymentAmount)})]},e.contractId)}),0===C.length&&(0,t.jsx)(eH,{children:(0,t.jsx)(e6,{colSpan:8+R,children:"표시할 이용자 데이터가 없습니다."})})]})]})}),null!==p&&(0,t.jsx)(X,{selectedStatusCell:p,onClose:()=>{g||x(null)},onSubmit:T,isSubmitting:g},`${p.contractId}-${p.sequence}-${p.serviceDate}`),m&&(0,t.jsx)(P,{schedule:N,isSubmitting:w,onClose:()=>{w||_(!1)},onConfirm:e=>void S(e)})]})},ey=l.default.section.withConfig({componentId:"zh__sc-2bddfd82-0"})`
  overflow: hidden;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
`,eC=l.default.div.withConfig({componentId:"zh__sc-2bddfd82-1"})`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: space-between;

  padding: 16px;
  border-bottom: 1px solid #e5e7eb;

  background: #fff;
`,eD=l.default.div.withConfig({componentId:"zh__sc-2bddfd82-2"})`
  overflow: hidden;
  display: flex;
  align-items: stretch;

  border: 1px solid #b1b8be;
  border-radius: 8px;
`,ez=l.default.button.withConfig({componentId:"zh__sc-2bddfd82-3"})`
  cursor: pointer;

  height: 40px;
  padding: 0 16px;
  border-color: #b1b8be;
  border-style: solid;
  border-width: 0 1px 0 0;

  font-size: 16px;
  font-weight: 700;
  color: ${({$active:e})=>e?"#fff":"#464c53"};

  background: ${({$active:e})=>e?"#4f39f6":"#fff"};

  &:last-child {
    border-right: none;
  }
`,e$=l.default.div.withConfig({componentId:"zh__sc-2bddfd82-4"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,eO=l.default.label.withConfig({componentId:"zh__sc-2bddfd82-5"})`
  position: relative;
  width: 179px;
`,eE=(0,l.default)(s.default.Input.Text).withConfig({componentId:"zh__sc-2bddfd82-6"})`
  width: 100%;
  height: 40px;
  padding: 0 40px 0 16px;
  border-radius: 6px;

  font-size: 16px;
  color: #101828;
`,eP=l.default.span.withConfig({componentId:"zh__sc-2bddfd82-7"})`
  pointer-events: none;

  position: absolute;
  top: 50%;
  right: 16px;
  transform: translateY(-50%);

  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 16px;
  height: 16px;
`,eN=(0,l.default)(s.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-2bddfd82-8"})`
  display: flex;
  gap: 4px;
  align-items: center;
  align-self: stretch;

  padding: 8px 16px;
`,eR=l.default.div.withConfig({componentId:"zh__sc-2bddfd82-9"})`
  overflow: auto;
`,eS=l.default.table.withConfig({componentId:"zh__sc-2bddfd82-10"})`
  table-layout: fixed;
  border-collapse: collapse;

  width: max-content;
  min-width: 100%;

  background: #fff;

  thead {
    border-bottom: 1px solid #e5e7eb;
  }
`,eT=l.default.th.withConfig({componentId:"zh__sc-2bddfd82-11"})`
  width: ${({$width:e})=>`${e??84}px`};
  min-width: ${({$width:e})=>`${e??84}px`};
  height: 48px;
  padding: 0;

  font-size: 16px;
  font-weight: 700;
  line-height: 1.25;
  color: #1c1d22;
  text-align: center;
  vertical-align: middle;

  background: #f8fafc;
`,ek=(0,l.default)(eT).withConfig({componentId:"zh__sc-2bddfd82-12"})`
  color: transparent;
`,eV=(0,l.default)(eT).withConfig({componentId:"zh__sc-2bddfd82-13"})`
  border-right: 1px solid #e5e7eb;
  border-bottom: 1px solid #e5e7eb;
  border-left: 1px solid #e5e7eb;
  background: #fff;
`,eA=l.default.span.withConfig({componentId:"zh__sc-2bddfd82-14"})`
  display: inline-block;
  line-height: 1.15;
`,eL=l.default.button.withConfig({componentId:"zh__sc-2bddfd82-15"})`
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  padding: 0;
  border: none;

  font: inherit;
  color: inherit;

  background: transparent;
`,eM=l.default.span.withConfig({componentId:"zh__sc-2bddfd82-16"})`
  position: relative;
  display: inline-flex;
  align-items: center;
`,eq=l.default.span.withConfig({componentId:"zh__sc-2bddfd82-17"})`
  display: inline-flex;
  align-items: center;
`,eF=l.default.span.withConfig({componentId:"zh__sc-2bddfd82-18"})`
  position: absolute;
  top: 50%;
  left: calc(100% + 2px);
  transform: translateY(-50%);

  display: inline-flex;
  align-items: center;
`,eU=(0,l.default)(eT).withConfig({componentId:"zh__sc-2bddfd82-19"})`
  width: 64px;
  min-width: 64px;
  height: 48px;
  padding: 0;
  border-right: ${({$isLastInSchedule:e})=>e?"1px solid #e5e7eb":"none"};
  border-left: ${({$isFirstInSchedule:e})=>e?"1px solid #e5e7eb":"none"};

  background: #f8fafc;
`,eB=l.default.div.withConfig({componentId:"zh__sc-2bddfd82-20"})`
  font-size: 12px;
  font-weight: 700;
  line-height: 1.2;
  color: #1c1d22;
`,eG=l.default.div.withConfig({componentId:"zh__sc-2bddfd82-21"})`
  margin-top: 2px;

  font-size: 12px;
  font-weight: 400;
  line-height: 1.2;
  color: #1c1d22;
`,eH=l.default.tr.withConfig({componentId:"zh__sc-2bddfd82-22"})``,eY=l.default.td.withConfig({componentId:"zh__sc-2bddfd82-23"})`
  width: ${({$width:e})=>`${e??84}px`};
  min-width: ${({$width:e})=>`${e??84}px`};
  height: 52px;
  padding: 0;

  font-size: 16px;
  line-height: 1.2;
  color: #464c53;
  text-align: center;
  vertical-align: middle;
`,eK=l.default.div.withConfig({componentId:"zh__sc-2bddfd82-24"})`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;
`,eW=l.default.span.withConfig({componentId:"zh__sc-2bddfd82-25"})`
  display: flex;
  flex-shrink: 0;

  padding: 4px 6px;
  border-radius: 99px;

  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  color: #fff;

  background: ${({$terminated:e})=>e?"#667085":"#008d4c"};
`,eZ=(0,l.default)(eY).withConfig({componentId:"zh__sc-2bddfd82-26"})`
  cursor: ${({$clickable:e,$displayLabel:t})=>"종료"===t||"/"===t?"not-allowed":e?"pointer":"default"};

  width: 64px;
  min-width: 64px;
  padding: 0;
  border-top: 1px solid #e5e7eb;
  border-right: ${({$isLastInSchedule:e})=>e?"1px solid #e5e7eb":"none"};
  border-bottom: 1px solid #e5e7eb;
  border-left: 1px solid #e5e7eb;

  font-size: 12px;
  font-weight: 600;
  color: ${({$status:e,$displayLabel:t})=>ew(e,"DEFAULT",t)};

  background: ${({$status:e,$displayLabel:t})=>ev(e,"DEFAULT",t)};

  &:hover {
    color: ${({$status:e,$displayLabel:t})=>ew(e,"HOVER",t)};
    background: ${({$status:e,$displayLabel:t})=>ev(e,"HOVER",t)};
  }

  &:active {
    color: ${({$status:e,$displayLabel:t})=>ew(e,"PRESSED",t)};
    background: ${({$status:e,$displayLabel:t})=>ev(e,"PRESSED",t)};
  }
`,eX=l.default.div.withConfig({componentId:"zh__sc-2bddfd82-27"})`
  display: flex;
  flex-direction: column;
  gap: 0;
  align-items: center;
  justify-content: center;
`,eJ=l.default.div.withConfig({componentId:"zh__sc-2bddfd82-28"})`
  font-size: ${({$isSlashLabel:e})=>e?"16px":"12px"};
  font-weight: 700;
  line-height: 16px;
`,eQ=(0,l.default)(eY).withConfig({componentId:"zh__sc-2bddfd82-29"})`
  width: ${({$width:e})=>`${e??110}px`};
  min-width: ${({$width:e})=>`${e??110}px`};
`,e0=(0,l.default)(eQ).withConfig({componentId:"zh__sc-2bddfd82-30"})`
  width: 140px;
  min-width: 140px;
`,e1=(0,l.default)(eQ).withConfig({componentId:"zh__sc-2bddfd82-31"})`
  color: #1570ef;
`,e2=(0,l.default)(eQ).withConfig({componentId:"zh__sc-2bddfd82-32"})`
  color: #d92d20;
`,e6=l.default.td.withConfig({componentId:"zh__sc-2bddfd82-33"})`
  height: 56px;
  padding: 0;

  font-size: 13px;
  color: #667085;
  text-align: center;
  vertical-align: middle;
`,e8=function(e){let{summary:n}=e;return(0,t.jsxs)(e5,{children:[(0,t.jsxs)(e4,{children:[(0,t.jsx)(e3,{children:"당월 최종 예상 결제금액 합계"}),(0,t.jsx)(e9,{children:O(n?.totalExpectedAmount)})]}),(0,t.jsxs)(e4,{$tone:"blue",children:[(0,t.jsx)(e3,{children:"예상 정부지원금 합계"}),(0,t.jsx)(e9,{$tone:"blue",children:O(n?.totalExpectedGovernmentSupportAmount)})]}),(0,t.jsxs)(e4,{$tone:"red",children:[(0,t.jsx)(e3,{children:"예상 본인부담금 합계"}),(0,t.jsx)(e9,{$tone:"red",children:O(n?.totalExpectedCopaymentAmount)})]})]})},e5=l.default.section.withConfig({componentId:"zh__sc-c5ef9cf1-0"})`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
`,e4=l.default.article.withConfig({componentId:"zh__sc-c5ef9cf1-1"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;

  padding: 12px 16px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;

  background: ${({$tone:e})=>"blue"===e?"#f5f8ff":"red"===e?"#ffeeed":"#f8f7f7"};
`,e3=l.default.p.withConfig({componentId:"zh__sc-c5ef9cf1-2"})`
  margin: 0;

  font-size: 16px;
  font-weight: 600;
  line-height: 1.2;
  color: #475467;
`,e9=l.default.p.withConfig({componentId:"zh__sc-c5ef9cf1-3"})`
  margin: 0;

  font-size: 22px;
  font-weight: 700;
  line-height: 1.2;
  color: ${({$tone:e})=>"blue"===e?"#175cd3":"red"===e?"#d92d20":"#262936"};
`,e7=(0,n.observer)(function(){let e=r.default.client.serviceProvision,n=(0,i.useSearchParams)(),l=e.monthlyStatus,o=(0,d.useMemo)(()=>(e=>{if("string"!=typeof e)return null;let t=e.match(/^(\d{4})-(\d{2})$/);if(null===t)return null;let n=Number(t[1]),i=Number(t[2]);return Number.isNaN(n)||Number.isNaN(i)||i<1||i>12?null:new Date(n,i-1,1)})(n.get("targetYearMonth")),[n]),s=(0,d.useMemo)(()=>l?.summary??null,[l]),c=e.displayRows,f=(0,d.useMemo)(()=>l?.schedule??[],[l]);(0,d.useEffect)(()=>{e.setViewDate(o??new Date)},[o,e]);let h=async t=>{let[n,i]=await e.patchRecords(t);return null===n&&!0===i||(r.default.ui.layout.toast.error(n?.message??"저장에 실패했습니다."),!1)},u=async e=>h([e]),p=async e=>{let t=e[0];return void 0===t||h([t,...e.slice(1)])};return(0,t.jsxs)(te,{children:[(0,t.jsx)(a,{serviceType:e.serviceType,onChangeServiceType:e.setServiceType}),(0,t.jsxs)(tt,{children:[(0,t.jsx)(_,{targetYearMonth:e.targetYearMonth,onShiftMonth:t=>e.shiftMonth(t)}),(0,t.jsxs)(tn,{children:[(0,t.jsx)(e8,{summary:s}),(0,t.jsx)(ej,{rows:c,schedule:f,sortKey:e.sortKey,sortOrder:e.sortOrder,onSort:e.setSort,onPatchCell:u,onPatchRecords:p})]})]})]})}),te=(0,l.default)(o.default).withConfig({componentId:"zh__sc-6a336818-0"})`
  flex-direction: column;
  gap: 24px;
  padding: 24px;
`,tt=l.default.section.withConfig({componentId:"zh__sc-6a336818-1"})`
  overflow: hidden;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  background: #fff;
`,tn=l.default.div.withConfig({componentId:"zh__sc-6a336818-2"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 16px;
`;e.s(["default",0,e7],59701)}]);