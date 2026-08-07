(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,553,e=>{"use strict";var t=e.i(7744),n=e.i(4153);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var d=(0,t.forwardRef)(function(e,n){var d=e.color,l=e.size,o=void 0===l?24:l,r=function(e,t){if(null==e)return{};var n,i,d=function(e,t){if(null==e)return{};var n,i,d={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(d[n]=e[n]);return d}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(d[n]=e[n])}return d}(e,["color","size"]);return t.default.createElement("svg",i({ref:n,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:void 0===d?"currentColor":d,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},r),t.default.createElement("circle",{cx:"11",cy:"11",r:"8"}),t.default.createElement("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}))});d.propTypes={color:n.default.string,size:n.default.oneOfType([n.default.string,n.default.number])},d.displayName="Search",e.s(["Search",0,d],553)},67096,33832,e=>{"use strict";var t=e.i(38797),n=e.i(9735);let i=(0,t.default)((0,n.jsx)("path",{d:"m5 9 1.41 1.41L11 5.83V22h2V5.83l4.59 4.59L19 9l-7-7z"}),"North");e.s(["default",0,i],67096);let d=(0,t.default)((0,n.jsx)("path",{d:"m19 15-1.41-1.41L13 18.17V2h-2v16.17l-4.59-4.59L5 15l7 7z"}),"South");e.s(["default",0,d],33832)},88552,e=>{"use strict";var t=e.i(38797),n=e.i(9735);let i=(0,t.default)((0,n.jsx)("path",{d:"m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"}),"ArrowForward");e.s(["default",0,i])},59701,e=>{"use strict";var t=e.i(9735);e.i(3159);var n=e.i(46907),i=e.i(33261),d=e.i(7744),l=e.i(22803);let o=l.default.div.withConfig({componentId:"zh__sc-5098f667-0"})`
  display: flex;
  flex: 1;

  min-width: 1633px;
  max-width: 1633px;
  min-height: 0;
  margin: 0 auto;
  padding: 16px;
`;var r=e.i(43174),a=e.i(64954);let s=function(){return(0,t.jsxs)(c,{children:[(0,t.jsx)(f,{children:"서비스(도시락) 제공 현황"}),(0,t.jsx)(h,{type:"button",disabled:!0,children:"엑셀 파일 다운로드"})]})},c=l.default.div.withConfig({componentId:"zh__sc-afc36c84-0"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,f=l.default.h1.withConfig({componentId:"zh__sc-afc36c84-1"})`
  margin: 0;

  font-size: 20px;
  font-weight: 700;
  line-height: 1.2;
  color: #0a0a0a;
  letter-spacing: -0.5px;
`,h=(0,l.default)(a.default.Button.Outlined).withConfig({componentId:"zh__sc-afc36c84-2"})`
  display: flex;
  gap: 4px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`;var u=e.i(26546),p=e.i(71723);let x=function(e){let{targetYearMonth:n,onShiftMonth:i}=e;return(0,t.jsxs)(g,{children:[(0,t.jsx)(b,{type:"button",onClick:()=>i(-1),children:(0,t.jsx)(u.ChevronLeft,{size:18,strokeWidth:2.5})}),(0,t.jsx)(_,{children:n}),(0,t.jsx)(b,{type:"button",onClick:()=>i(1),children:(0,t.jsx)(p.ChevronRight,{size:18,strokeWidth:2.5})})]})},g=l.default.div.withConfig({componentId:"zh__sc-f9837b7b-0"})`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: center;

  height: 48px;
`,b=l.default.button.withConfig({componentId:"zh__sc-f9837b7b-1"})`
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
`,_=l.default.p.withConfig({componentId:"zh__sc-f9837b7b-2"})`
  margin: 0;

  font-size: 18px;
  font-weight: 700;
  line-height: 1.2;
  color: #262936;
  letter-spacing: -0.5px;
`;var m=e.i(67096),E=e.i(33832),D=e.i(553),I=e.i(96796),w=e.i(21771),C=e.i(44534);function O(e){return void 0===e?"-":`${e.toLocaleString("ko-KR")}원`}function j(e){let t=new Date(e);if(Number.isNaN(t.getTime()))return e;let n=t.getMonth()+1,i=t.getDate(),d=["일","월","화","수","목","금","토"][t.getDay()];return`${n}/${i} ${d}`}function v(e){return I.default[e].IN_CELL.label}let S=function(e){let{schedule:n,isSubmitting:i,onClose:l,onConfirm:o}=e,r=(0,d.useMemo)(()=>n.map(e=>({value:String(e.sequence),label:`${e.sequence}회차 (${j(e.serviceDate)})`})),[n]),[a,s]=(0,d.useState)(r[0]?.value??null),c=null!==a&&r.some(e=>e.value===a)?a:r[0]?.value??null,f=!0===i||0===r.length||null===c;return(0,t.jsx)(y,{children:(0,t.jsxs)(z,{onClick:e=>e.stopPropagation(),children:[(0,t.jsxs)(R,{children:[(0,t.jsx)(N,{children:"선택한 회차를 일괄 [제공 완료] 처리할까요?"}),(0,t.jsxs)($,{children:[(0,t.jsx)(T,{children:"회차 선택"}),(0,t.jsx)(L,{value:c??"",onChange:e=>s(e.currentTarget.value),disabled:0===r.length,children:r.map(e=>(0,t.jsx)("option",{value:e.value,children:e.label},e.value))})]}),(0,t.jsxs)(P,{children:["선택한 회차에서 [미입력] 상태인 계약 중 이용자만 [완료]로 변경됩니다.",(0,t.jsx)("br",{}),"[사전 미제공] 또는 [종료] 상태의 이용자는 변경되지 않습니다."]})]}),(0,t.jsxs)(V,{children:[(0,t.jsx)(A,{type:"button",onClick:l,disabled:i,children:"취소하기"}),(0,t.jsx)(k,{type:"button",disabled:f,onClick:()=>{null!==c&&o(Number(c))},children:"완료 처리하기"})]})]})})},y=l.default.div.withConfig({componentId:"zh__sc-a08696c9-0"})`
  position: fixed;
  z-index: 3000;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgb(17 24 39 / 36%);
`,z=l.default.div.withConfig({componentId:"zh__sc-a08696c9-1"})`
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
`,R=l.default.div.withConfig({componentId:"zh__sc-a08696c9-2"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
`,N=l.default.h3.withConfig({componentId:"zh__sc-a08696c9-3"})`
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #000;
`,$=l.default.div.withConfig({componentId:"zh__sc-a08696c9-4"})`
  display: flex;
  gap: 10px;
  align-items: center;
`,T=l.default.div.withConfig({componentId:"zh__sc-a08696c9-5"})`
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #000;
`,L=(0,l.default)(a.default.Input.Select).withConfig({componentId:"zh__sc-a08696c9-6"})`
  height: 36px;
`,P=l.default.p.withConfig({componentId:"zh__sc-a08696c9-7"})`
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #000;
`,V=l.default.div.withConfig({componentId:"zh__sc-a08696c9-8"})`
  display: flex;
  gap: 12px;
  align-items: center;
  align-self: stretch;
  justify-content: flex-end;
`,A=(0,l.default)(a.default.Button.Outlined).withConfig({componentId:"zh__sc-a08696c9-9"})`
  display: flex;
  gap: 10px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,k=(0,l.default)(a.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-a08696c9-10"})`
  display: flex;
  gap: 10px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`;var U=e.i(88552),H=e.i(15695),M=e.i(8179);let q=["PROVIDED","NOT_PROVIDED","NOT_PROVIDED_SCHEDULED","SCHEDULED"],Y=["NOT_PROVIDED_SCHEDULED","SCHEDULED"],B=["PROVIDED","NOT_PROVIDED","SCHEDULED"],F=["PROVIDED","NOT_PROVIDED"],K=["NOT_PROVIDED","SCHEDULED"],W=[{value:"HOSPITALIZATION",label:I.SERVICE_PROVISION_CELL_REASON_BY_STATUS.NOT_PROVIDED.HOSPITALIZATION.IN_MODAL.label},{value:"AWAY_OR_OUTING",label:I.SERVICE_PROVISION_CELL_REASON_BY_STATUS.NOT_PROVIDED.AWAY_OR_OUTING.IN_MODAL.label},{value:"CLIENT_REFUSAL",label:I.SERVICE_PROVISION_CELL_REASON_BY_STATUS.NOT_PROVIDED.CLIENT_REFUSAL.IN_MODAL.label}],G=[{value:"HOSPITALIZATION",label:I.SERVICE_PROVISION_CELL_REASON_BY_STATUS.NOT_PROVIDED_SCHEDULED.HOSPITALIZATION.IN_MODAL.label},{value:"AWAY_OR_OUTING",label:I.SERVICE_PROVISION_CELL_REASON_BY_STATUS.NOT_PROVIDED_SCHEDULED.AWAY_OR_OUTING.IN_MODAL.label},{value:"CLIENT_REFUSAL",label:I.SERVICE_PROVISION_CELL_REASON_BY_STATUS.NOT_PROVIDED_SCHEDULED.CLIENT_REFUSAL.IN_MODAL.label}];function Z(e){return"PROVIDED"===e||"NOT_PROVIDED"===e||"NOT_PROVIDED_SCHEDULED"===e||"SCHEDULED"===e}function X(e){var t;return null===e?null:!0!=("PROVIDED"===(t=e.status)||"NOT_PROVIDED"===t||"NOT_PROVIDED_SCHEDULED"===t||"SCHEDULED"===t)||"SCHEDULED"===e.status?null:Z(e.status)?e.status:null}function J(e){return"NOT_PROVIDED"===e?W[0].value:"NOT_PROVIDED_SCHEDULED"===e?G[0].value:null}let Q=function(e){let{selectedStatusCell:n,onClose:i,onSubmit:l,isSubmitting:o}=e,[r,a]=(0,d.useState)(()=>X(n)),[s,c]=(0,d.useState)(()=>J(X(n)));if(null===n)return null;let f=function(e){let{status:t,serviceDate:n}=e;if("SCHEDULED"===t)return B;if("NOT_PROVIDED_SCHEDULED"===t){let e=new Date;return n>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`?F:K}return Y}(n),h=async()=>{if(null===r)return;if("PROVIDED"===r)return void await l({status:"PROVIDED",reason:null});if("SCHEDULED"===r)return void await l({status:"SCHEDULED",reason:null});if("NOT_PROVIDED"===r){let e=null===s?W[0].value:s;await l({status:"NOT_PROVIDED",reason:e});return}let e=null===s?G[0].value:s;await l({status:"NOT_PROVIDED_SCHEDULED",reason:e})};return(0,t.jsx)(ee,{children:(0,t.jsxs)(et,{onClick:e=>e.stopPropagation(),children:[(0,t.jsxs)(en,{children:[(0,t.jsx)(ei,{children:"배달 상태 입력하기"}),(0,t.jsxs)(ed,{type:"button",onClick:i,children:[(0,t.jsx)(M.X,{size:16}),"닫기"]})]}),(0,t.jsx)(el,{children:(0,t.jsx)(eo,{children:q.map(e=>{let n=f.includes(e),i=r===e,d="NOT_PROVIDED"===e||"NOT_PROVIDED_SCHEDULED"===e?"NOT_PROVIDED"===e?W:G:[],l=Z(e)&&!0!==n;return(0,t.jsxs)(er,{$active:i,$disabled:n,onClick:()=>{!0===l&&(a(e),c(J(e)))},children:[(0,t.jsx)(ea,{$disabled:n,children:I.default[e].IN_MODAL.label}),d.length>0&&(0,t.jsx)(es,{children:d.map(i=>(0,t.jsxs)(ec,{onClick:t=>{!0===l&&(t.stopPropagation(),a(e),c(i.value))},children:[(0,t.jsx)(ef,{"aria-label":i.label,checked:r===e&&s===i.value,disabled:!0!==l,onChange:()=>{!0===l&&(a(e),c(i.value))}}),(0,t.jsx)(eh,{$disabled:n,children:i.label})]},`${e}-${i.value}`))}),(0,t.jsxs)(eu,{$active:i,$disabled:n,children:["선택",(0,t.jsx)(U.default,{sx:{fontSize:16}})]})]},e)})})}),(0,t.jsx)(ep,{children:(0,t.jsxs)(ex,{type:"button",onClick:()=>void h(),disabled:o||null===r,children:[(0,t.jsx)(H.Check,{size:16}),"저장하기"]})})]})})},ee=l.default.div.withConfig({componentId:"zh__sc-d2db635d-0"})`
  position: fixed;
  z-index: 3000;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgb(17 24 39 / 36%);
`,et=l.default.div.withConfig({componentId:"zh__sc-d2db635d-1"})`
  overflow: hidden;
  display: flex;
  flex-direction: column;

  width: 508px;
  max-width: calc(100vw - 32px);
  border: 1px solid #d0d5dd;
  border-radius: 8px;

  background: #fff;
`,en=l.default.div.withConfig({componentId:"zh__sc-d2db635d-2"})`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 69px;
  padding: 0 16px;
  border-bottom: 1px solid #eaecf0;
`,ei=l.default.h3.withConfig({componentId:"zh__sc-d2db635d-3"})`
  margin: 0;

  font-size: 20px;
  font-weight: 700;
  line-height: 1.4;
  color: #101828;
`,ed=(0,l.default)(a.default.Button.Outlined).withConfig({componentId:"zh__sc-d2db635d-4"})`
  display: flex;
  gap: 4px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,el=l.default.div.withConfig({componentId:"zh__sc-d2db635d-5"})`
  padding: 32px 24px;
  background: #f9fafb;
`,eo=l.default.div.withConfig({componentId:"zh__sc-d2db635d-6"})`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
`,er=l.default.div.withConfig({componentId:"zh__sc-d2db635d-7"})`
  cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};

  display: flex;
  flex-direction: column;

  height: 150px;
  padding: 16px;
  border: 1px solid ${({$active:e})=>e?"#4f39f6":"#d0d5dd"};
  border-radius: 8px;

  background: ${({$disabled:e,$active:t})=>e?"#fff":t?"#f7f5ff":"#fff"};
`,ea=l.default.div.withConfig({componentId:"zh__sc-d2db635d-8"})`
  font-size: 16px;
  font-weight: 700;
  line-height: 1.2;
  color: ${({$disabled:e})=>e?"#d9d9d9":"#0a0a0a"};
`,es=l.default.div.withConfig({componentId:"zh__sc-d2db635d-9"})`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 12px;
`,ec=l.default.div.withConfig({componentId:"zh__sc-d2db635d-10"})`
  cursor: pointer;
  display: flex;
  gap: 4px;
  align-items: center;
`,ef=(0,l.default)(a.default.Input.Radio).withConfig({componentId:"zh__sc-d2db635d-11"})`
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
`,eh=l.default.span.withConfig({componentId:"zh__sc-d2db635d-12"})`
  font-size: 14px;
  color: ${({$disabled:e})=>e?"#d9d9d9":"#0a0a0a"};
`,eu=l.default.div.withConfig({componentId:"zh__sc-d2db635d-13"})`
  display: flex;
  gap: 2px;
  align-items: center;
  justify-content: flex-end;

  margin-top: auto;

  font-size: 16px;
  line-height: 16px; /* 100% */
  color: ${({$active:e,$disabled:t})=>t?"#d0d5dd":"#4f39f6"};
  letter-spacing: -1px;
`,ep=l.default.div.withConfig({componentId:"zh__sc-d2db635d-14"})`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  height: 68px;
  padding: 0 16px;
  border-top: 1px solid #eaecf0;
`,ex=(0,l.default)(a.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-d2db635d-15"})`
  display: flex;
  gap: 4px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,eg={managementNumber:"desc",name:"asc"};function eb(e,t,n){if("OUT_OF_PERIOD"!==e)return v(e);let{firstPatchableIndex:i,lastPatchableIndex:d}=n;return null!==i&&t<i?"/":null!==d&&t>d?"종료":v(e)}function e_(e,t,n){return"/"===n?"#b1b8be":"종료"===n?"PRESSED"===t?"#47574f":"#5a6b62":"NOT_ENTERED"===e?"#45464e":"SCHEDULED"===e?"HOVER"===t||"PRESSED"===t?"#49379d":"#5746b2":"PROVIDED"===e?"#027a48":"NOT_PROVIDED"===e?"#b42318":"NOT_PROVIDED_SCHEDULED"===e?"#b54708":"#667085"}function em(e,t,n){return"/"===n?"HOVER"===t?"#f9fafb":"PRESSED"===t?"#f2f4f7":"#ffffff":"종료"===n?"HOVER"===t?"#e5ebe7":"PRESSED"===t?"#d8e1db":"#eff3f0":"NOT_ENTERED"===e?"HOVER"===t?"#f9fafb":"PRESSED"===t?"#f2f4f7":"#ffffff":"PROVIDED"===e?"HOVER"===t?"#e2f3e9":"PRESSED"===t?"#d8e9df":"#ecfdf3":"NOT_PROVIDED"===e?"HOVER"===t?"#f4e9e8":"PRESSED"===t?"#eadfde":"#fef3f2":"NOT_PROVIDED_SCHEDULED"===e?"HOVER"===t?"#f5f0e1":"PRESSED"===t?"#ebe6d7":"#fffaeb":"SCHEDULED"===e?"HOVER"===t?"#eae6ff":"PRESSED"===t?"#ddd6fe":"#f2f0ff":"#fff"}function eE({label:e,width:n,sortValue:i,currentSortKey:d,currentSortOrder:l,onSort:o}){let r=d===i,a=r?l:eg[i],s=r?"#131416":"#9ca3af";return(0,t.jsx)(e$,{$width:n,children:(0,t.jsx)(eV,{type:"button",onClick:()=>o(i),children:(0,t.jsxs)(eA,{children:[(0,t.jsx)(ek,{children:e}),(0,t.jsx)(eU,{children:"desc"===a?(0,t.jsx)(m.default,{sx:{fontSize:14,color:s}}):(0,t.jsx)(E.default,{sx:{fontSize:14,color:s}})})]})})})}let eD=function(e){let{rows:n,schedule:i,sortKey:l,sortOrder:o,onSort:r,onPatchCell:a,onPatchRecords:s}=e,[c,f]=(0,d.useState)("ALL"),[h,u]=(0,d.useState)(""),[p,x]=(0,d.useState)(null),[g,b]=(0,d.useState)(!1),[_,m]=(0,d.useState)(!1),[E,v]=(0,d.useState)(!1),y=(0,d.useMemo)(()=>i.filter(e=>n.some(t=>t.cells.some(t=>t.sequence===e.sequence&&t.serviceDate===e.serviceDate&&"NOT_ENTERED"===t.status))),[n,i]),z=y.length>0,R=(0,d.useMemo)(()=>n.map(e=>{let t,n,d=(t=null,n=null,i.forEach((i,d)=>{void 0!==e.cells.find(e=>e.sequence===i.sequence&&e.serviceDate===i.serviceDate&&(0,I.isServiceProvisionPatchableCellStatus)(e.status))&&(null===t&&(t=d),n=d)}),{firstPatchableIndex:t,lastPatchableIndex:n});return{...e,_searchable:C.default.create(e.clientName),_patchableRange:d,_isTerminated:i.some((t,n)=>{let i=e.cells.find(e=>e.sequence===t.sequence&&e.serviceDate===t.serviceDate);return void 0!==i&&"종료"===eb(i.status,n,d)})}}),[n,i]),N=(0,d.useMemo)(()=>R.filter(e=>!0===e._isTerminated).length,[R]),$=(0,d.useMemo)(()=>R.length-N,[R,N]),T=(0,d.useMemo)(()=>R.filter(e=>!0===C.default.isMatch(e._searchable,h)&&("ACTIVE"===c?!0!==e._isTerminated:"TERMINATED"!==c||!0===e._isTerminated)),[R,c,h]),L=i.length>0?i.length:8,P=async e=>{if(null===p)return;let t=null;if(("SCHEDULED"===e.status||"PROVIDED"===e.status)&&(t={contractId:p.contractId,serviceDate:p.serviceDate,status:e.status,reason:null}),"NOT_PROVIDED"===e.status&&null!==e.reason&&(t={contractId:p.contractId,serviceDate:p.serviceDate,status:"NOT_PROVIDED",reason:e.reason}),"NOT_PROVIDED_SCHEDULED"===e.status&&null!==e.reason&&(t={contractId:p.contractId,serviceDate:p.serviceDate,status:"NOT_PROVIDED_SCHEDULED",reason:e.reason}),null===t)return;b(!0);let n=await a(t);b(!1),!0===n&&x(null)},V=async e=>{if(null===e)return;let t=y.find(t=>t.sequence===e);if(void 0===t)return;let i=n.flatMap(e=>{let n=e.cells.find(e=>e.sequence===t.sequence&&e.serviceDate===t.serviceDate&&"NOT_ENTERED"===e.status);return void 0===n?[]:[{contractId:e.contractId,serviceDate:n.serviceDate,status:"PROVIDED",reason:null}]});if(0===i.length)return;v(!0);let d=await s(i);v(!1),!0===d&&m(!1)};return(0,t.jsxs)(eI,{children:[(0,t.jsxs)(ew,{children:[(0,t.jsxs)(eC,{children:[(0,t.jsxs)(eO,{type:"button",$active:"ALL"===c,onClick:()=>f("ALL"),children:["전체 이용자 (",n.length,"명)"]}),(0,t.jsxs)(eO,{type:"button",$active:"ACTIVE"===c,onClick:()=>f("ACTIVE"),children:["계약중 (",$,"명)"]}),(0,t.jsxs)(eO,{type:"button",$active:"TERMINATED"===c,onClick:()=>f("TERMINATED"),children:["종료 (",N,"명)"]})]}),(0,t.jsxs)(ej,{children:[(0,t.jsxs)(ev,{children:[(0,t.jsx)(eS,{value:h,onChange:e=>u(e.currentTarget.value),placeholder:"이용자명 검색"}),(0,t.jsx)(ey,{children:(0,t.jsx)(D.Search,{color:"#0a0a0a",size:16})})]}),(0,t.jsx)(ez,{type:"button",disabled:!1===z,onClick:()=>{!1!==z&&m(!0)},children:"선택 회차 전체 완료 처리"})]})]}),(0,t.jsx)(eR,{children:(0,t.jsxs)(eN,{children:[(0,t.jsxs)("thead",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)(eT,{$width:84,"aria-hidden":"true"}),(0,t.jsx)(eT,{$width:120,"aria-hidden":"true"}),(0,t.jsx)(eT,{$width:110,"aria-hidden":"true"}),(0,t.jsx)(eL,{colSpan:L,children:"회차별 제공일 및 제공 상태"}),(0,t.jsx)(eT,{$width:140,"aria-hidden":"true"}),(0,t.jsx)(eT,{$width:90,"aria-hidden":"true"}),(0,t.jsx)(eT,{$width:165,"aria-hidden":"true"}),(0,t.jsx)(eT,{$width:164,"aria-hidden":"true"}),(0,t.jsx)(eT,{$width:164,"aria-hidden":"true"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)(eE,{label:"관리번호",width:84,sortValue:"managementNumber",currentSortKey:l,currentSortOrder:o,onSort:r}),(0,t.jsx)(eE,{label:"성명",width:120,sortValue:"name",currentSortKey:l,currentSortOrder:o,onSort:r}),(0,t.jsx)(e$,{$width:110,children:"생년월일"}),i.length>0?i.map((e,n)=>(0,t.jsxs)(eH,{$isFirstInSchedule:0===n,$isLastInSchedule:n===i.length-1,children:[(0,t.jsxs)(eM,{children:[e.sequence,"회차"]}),(0,t.jsx)(eq,{children:j(e.serviceDate)})]},`${e.sequence}-${e.serviceDate}`)):Array.from({length:L},(e,n)=>(0,t.jsxs)(eH,{$isFirstInSchedule:0===n,$isLastInSchedule:n===L-1,children:[(0,t.jsxs)(eM,{children:[n+1,"회차"]}),(0,t.jsx)(eq,{children:"일정 없음"})]},`empty-schedule-header-${n}`)),(0,t.jsx)(e$,{$width:140,children:"제공 횟수"}),(0,t.jsx)(e$,{$width:90,children:(0,t.jsxs)(eP,{children:["바우처",(0,t.jsx)("br",{}),"등급"]})}),(0,t.jsx)(e$,{$width:165,children:"예상 총액"}),(0,t.jsx)(e$,{$width:164,children:"정부지원금"}),(0,t.jsx)(e$,{$width:164,children:"본인부담금"})]})]}),(0,t.jsxs)("tbody",{children:[T.map(e=>{var n;let d=e._patchableRange;return(0,t.jsxs)(eY,{children:[(0,t.jsx)(eB,{$width:84,children:e.managementNumber??"-"}),(0,t.jsx)(eB,{$width:120,children:(0,t.jsxs)(eF,{children:[(0,t.jsx)("span",{children:e.clientName}),(0,t.jsx)(eK,{$terminated:e._isTerminated,children:e._isTerminated?"종료":"계약중"})]})}),(0,t.jsx)(eB,{$width:110,children:null===(n=e.birthDate)||!0!==w.default.is(n)?"-":n.replaceAll("-",".")}),i.length>0?i.map((n,l)=>{let o=e.cells.find(e=>e.sequence===n.sequence&&e.serviceDate===n.serviceDate),r=o?eb(o.status,l,d):void 0,a="/"===r,s=o?function(e){if(null===e.reason)return null;let t=I.SERVICE_PROVISION_CELL_REASON_BY_STATUS[e.status];return null===t?null:t[e.reason].IN_CELL.label}(o):null;return(0,t.jsx)(eW,{$status:o?.status,$displayLabel:r,$clickable:(0,I.isServiceProvisionPatchableCellStatus)(o?.status),$isLastInSchedule:l===i.length-1,onClick:()=>{void 0===o||!0===(0,I.isServiceProvisionPatchableCellStatus)(o.status)&&x({contractId:e.contractId,clientName:e.clientName,sequence:o.sequence,serviceDate:o.serviceDate,status:o.status})},children:o?(0,t.jsxs)(eG,{children:[(0,t.jsx)(eZ,{$isSlashLabel:a,children:r}),null!==s&&(0,t.jsx)(eX,{children:s})]}):"-"},`${e.contractId}-${n.sequence}`)}):Array.from({length:L},(n,i)=>(0,t.jsx)(eW,{$clickable:!1,$isLastInSchedule:i===L-1,children:"-"},`${e.contractId}-empty-schedule-${i}`)),(0,t.jsxs)(eQ,{children:[e.providedCount,"회 제공 / 전체 ",e.cells.filter(e=>"NOT_ENTERED"!==e.status).length,"회"]}),(0,t.jsx)(eJ,{$width:90,children:e.grade}),(0,t.jsx)(eJ,{$width:165,children:O(e.expectedTotalAmount)}),(0,t.jsx)(e0,{$width:164,children:O(e.expectedGovernmentSupportAmount)}),(0,t.jsx)(e1,{$width:164,children:O(e.expectedCopaymentAmount)})]},e.contractId)}),0===T.length&&(0,t.jsx)(eY,{children:(0,t.jsx)(e2,{colSpan:8+L,children:"표시할 이용자 데이터가 없습니다."})})]})]})}),null!==p&&(0,t.jsx)(Q,{selectedStatusCell:p,onClose:()=>{g||x(null)},onSubmit:P,isSubmitting:g},`${p.contractId}-${p.sequence}-${p.serviceDate}`),!0===_&&!0===z&&(0,t.jsx)(S,{schedule:y,isSubmitting:E,onClose:()=>{E||m(!1)},onConfirm:e=>{V(e)}})]})},eI=l.default.section.withConfig({componentId:"zh__sc-2bddfd82-0"})`
  overflow: hidden;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
`,ew=l.default.div.withConfig({componentId:"zh__sc-2bddfd82-1"})`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: space-between;

  padding: 16px;
  border-bottom: 1px solid #e5e7eb;

  background: #fff;
`,eC=l.default.div.withConfig({componentId:"zh__sc-2bddfd82-2"})`
  overflow: hidden;
  display: flex;
  align-items: stretch;

  border: 1px solid #b1b8be;
  border-radius: 8px;
`,eO=l.default.button.withConfig({componentId:"zh__sc-2bddfd82-3"})`
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
`,ej=l.default.div.withConfig({componentId:"zh__sc-2bddfd82-4"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,ev=l.default.label.withConfig({componentId:"zh__sc-2bddfd82-5"})`
  position: relative;
  width: 179px;
`,eS=(0,l.default)(a.default.Input.Text).withConfig({componentId:"zh__sc-2bddfd82-6"})`
  width: 100%;
  height: 40px;
  padding: 0 40px 0 16px;
  border-radius: 6px;

  font-size: 16px;
  color: #101828;
`,ey=l.default.span.withConfig({componentId:"zh__sc-2bddfd82-7"})`
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
`,ez=(0,l.default)(a.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-2bddfd82-8"})`
  display: flex;
  gap: 4px;
  align-items: center;
  align-self: stretch;

  padding: 8px 16px;
`,eR=l.default.div.withConfig({componentId:"zh__sc-2bddfd82-9"})`
  overflow: auto;
`,eN=l.default.table.withConfig({componentId:"zh__sc-2bddfd82-10"})`
  table-layout: fixed;
  border-collapse: collapse;

  width: max-content;
  min-width: 100%;

  background: #fff;

  thead {
    border-bottom: 1px solid #e5e7eb;
  }
`,e$=l.default.th.withConfig({componentId:"zh__sc-2bddfd82-11"})`
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
`,eT=(0,l.default)(e$).withConfig({componentId:"zh__sc-2bddfd82-12"})`
  color: transparent;
`,eL=(0,l.default)(e$).withConfig({componentId:"zh__sc-2bddfd82-13"})`
  border-right: 1px solid #e5e7eb;
  border-bottom: 1px solid #e5e7eb;
  border-left: 1px solid #e5e7eb;
  background: #fff;
`,eP=l.default.span.withConfig({componentId:"zh__sc-2bddfd82-14"})`
  display: inline-block;
  line-height: 1.15;
`,eV=l.default.button.withConfig({componentId:"zh__sc-2bddfd82-15"})`
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
`,eA=l.default.span.withConfig({componentId:"zh__sc-2bddfd82-16"})`
  position: relative;
  display: inline-flex;
  align-items: center;
`,ek=l.default.span.withConfig({componentId:"zh__sc-2bddfd82-17"})`
  display: inline-flex;
  align-items: center;
`,eU=l.default.span.withConfig({componentId:"zh__sc-2bddfd82-18"})`
  position: absolute;
  top: 50%;
  left: calc(100% + 2px);
  transform: translateY(-50%);

  display: inline-flex;
  align-items: center;
`,eH=(0,l.default)(e$).withConfig({componentId:"zh__sc-2bddfd82-19"})`
  width: 64px;
  min-width: 64px;
  height: 48px;
  padding: 0;
  border-right: ${({$isLastInSchedule:e})=>e?"1px solid #e5e7eb":"none"};
  border-left: ${({$isFirstInSchedule:e})=>e?"1px solid #e5e7eb":"none"};

  background: #f8fafc;
`,eM=l.default.div.withConfig({componentId:"zh__sc-2bddfd82-20"})`
  font-size: 12px;
  font-weight: 700;
  line-height: 1.2;
  color: #1c1d22;
`,eq=l.default.div.withConfig({componentId:"zh__sc-2bddfd82-21"})`
  margin-top: 2px;

  font-size: 12px;
  font-weight: 400;
  line-height: 1.2;
  color: #1c1d22;
`,eY=l.default.tr.withConfig({componentId:"zh__sc-2bddfd82-22"})``,eB=l.default.td.withConfig({componentId:"zh__sc-2bddfd82-23"})`
  width: ${({$width:e})=>`${e??84}px`};
  min-width: ${({$width:e})=>`${e??84}px`};
  height: 52px;
  padding: 0;

  font-size: 16px;
  line-height: 1.2;
  color: #464c53;
  text-align: center;
  vertical-align: middle;
`,eF=l.default.div.withConfig({componentId:"zh__sc-2bddfd82-24"})`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;
`,eK=l.default.span.withConfig({componentId:"zh__sc-2bddfd82-25"})`
  display: flex;
  flex-shrink: 0;

  padding: 4px 6px;
  border-radius: 99px;

  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  color: #fff;

  background: ${({$terminated:e})=>e?"#667085":"#008d4c"};
`,eW=(0,l.default)(eB).withConfig({componentId:"zh__sc-2bddfd82-26"})`
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
  color: ${({$status:e,$displayLabel:t})=>e_(e,"DEFAULT",t)};

  background: ${({$status:e,$displayLabel:t})=>em(e,"DEFAULT",t)};

  &:hover {
    color: ${({$status:e,$displayLabel:t})=>e_(e,"HOVER",t)};
    background: ${({$status:e,$displayLabel:t})=>em(e,"HOVER",t)};
  }

  &:active {
    color: ${({$status:e,$displayLabel:t})=>e_(e,"PRESSED",t)};
    background: ${({$status:e,$displayLabel:t})=>em(e,"PRESSED",t)};
  }
`,eG=l.default.div.withConfig({componentId:"zh__sc-2bddfd82-27"})`
  display: flex;
  flex-direction: column;
  gap: 0;
  align-items: center;
  justify-content: center;
`,eZ=l.default.div.withConfig({componentId:"zh__sc-2bddfd82-28"})`
  font-size: ${({$isSlashLabel:e})=>e?"16px":"12px"};
  font-weight: 700;
  line-height: 16px;
`,eX=l.default.div.withConfig({componentId:"zh__sc-2bddfd82-29"})`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
`,eJ=(0,l.default)(eB).withConfig({componentId:"zh__sc-2bddfd82-30"})`
  width: ${({$width:e})=>`${e??110}px`};
  min-width: ${({$width:e})=>`${e??110}px`};
`,eQ=(0,l.default)(eJ).withConfig({componentId:"zh__sc-2bddfd82-31"})`
  width: 140px;
  min-width: 140px;
`,e0=(0,l.default)(eJ).withConfig({componentId:"zh__sc-2bddfd82-32"})`
  color: #1570ef;
`,e1=(0,l.default)(eJ).withConfig({componentId:"zh__sc-2bddfd82-33"})`
  color: #d92d20;
`,e2=l.default.td.withConfig({componentId:"zh__sc-2bddfd82-34"})`
  height: 56px;
  padding: 0;

  font-size: 13px;
  color: #667085;
  text-align: center;
  vertical-align: middle;
`,e6=function(e){let{summary:n}=e;return(0,t.jsxs)(e8,{children:[(0,t.jsxs)(e5,{children:[(0,t.jsx)(e4,{children:"당월 최종 예상 결제금액 합계"}),(0,t.jsx)(e3,{children:O(n?.totalExpectedAmount)})]}),(0,t.jsxs)(e5,{$tone:"blue",children:[(0,t.jsx)(e4,{children:"예상 정부지원금 합계"}),(0,t.jsx)(e3,{$tone:"blue",children:O(n?.totalExpectedGovernmentSupportAmount)})]}),(0,t.jsxs)(e5,{$tone:"red",children:[(0,t.jsx)(e4,{children:"예상 본인부담금 합계"}),(0,t.jsx)(e3,{$tone:"red",children:O(n?.totalExpectedCopaymentAmount)})]})]})},e8=l.default.section.withConfig({componentId:"zh__sc-c5ef9cf1-0"})`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
`,e5=l.default.article.withConfig({componentId:"zh__sc-c5ef9cf1-1"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;

  padding: 12px 16px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;

  background: ${({$tone:e})=>"blue"===e?"#f5f8ff":"red"===e?"#ffeeed":"#f8f7f7"};
`,e4=l.default.p.withConfig({componentId:"zh__sc-c5ef9cf1-2"})`
  margin: 0;

  font-size: 16px;
  font-weight: 600;
  line-height: 1.2;
  color: #475467;
`,e3=l.default.p.withConfig({componentId:"zh__sc-c5ef9cf1-3"})`
  margin: 0;

  font-size: 22px;
  font-weight: 700;
  line-height: 1.2;
  color: ${({$tone:e})=>"blue"===e?"#175cd3":"red"===e?"#d92d20":"#262936"};
`,e9=(0,n.observer)(function(){let e=r.default.client.serviceProvision,n=(0,i.useSearchParams)(),l=e.monthlyStatus,o=(0,d.useMemo)(()=>(e=>{if("string"!=typeof e)return null;let t=e.match(/^(\d{4})-(\d{2})$/);if(null===t)return null;let n=Number(t[1]),i=Number(t[2]);return Number.isNaN(n)||Number.isNaN(i)||i<1||i>12?null:new Date(n,i-1,1)})(n.get("targetYearMonth")),[n]),a=(0,d.useMemo)(()=>l?.summary??null,[l]),c=e.displayRows,f=(0,d.useMemo)(()=>l?.schedule??[],[l]);(0,d.useEffect)(()=>{e.setViewDate(o??new Date),"MEAL"!==e.serviceType&&e.setServiceType("MEAL")},[o,e]);let h=async t=>{let[n,i]=await e.patchRecords(t);return null===n&&!0===i||(r.default.ui.layout.toast.error(n?.message??"저장에 실패했습니다."),!1)},u=async e=>h([e]),p=async e=>{let t=e[0];return void 0===t||h([t,...e.slice(1)])};return(0,t.jsxs)(e7,{children:[(0,t.jsx)(s,{}),(0,t.jsxs)(te,{children:[(0,t.jsx)(x,{targetYearMonth:function(e){if(null===e||0===e.trim().length)return"-";let[t,n]=e.split("-"),i=Number(t),d=Number(n);return Number.isFinite(i)&&Number.isFinite(d)?`${i}년 ${d}월`:e}(e.targetYearMonth),onShiftMonth:t=>e.shiftMonth(t)}),(0,t.jsxs)(tt,{children:[(0,t.jsx)(e6,{summary:a}),(0,t.jsx)(eD,{rows:c,schedule:f,sortKey:e.sortKey,sortOrder:e.sortOrder,onSort:e.setSort,onPatchCell:u,onPatchRecords:p})]})]})]})}),e7=(0,l.default)(o).withConfig({componentId:"zh__sc-6a336818-0"})`
  flex-direction: column;
  gap: 24px;
  padding: 24px;
`,te=l.default.section.withConfig({componentId:"zh__sc-6a336818-1"})`
  overflow: hidden;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  background: #fff;
`,tt=l.default.div.withConfig({componentId:"zh__sc-6a336818-2"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 16px;
`;e.s(["default",0,e9],59701)}]);