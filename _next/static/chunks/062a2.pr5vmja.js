(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,28630,e=>{"use strict";var t=e.i(9735),n=e.i(22803),i=e.i(26170),o=e.i(64954);let l=n.default.div.withConfig({componentId:"zh__sc-58b0fb01-0"})`
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
`,c=n.default.div.withConfig({componentId:"zh__sc-58b0fb01-1"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;
`,d=n.default.p.withConfig({componentId:"zh__sc-58b0fb01-2"})`
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #000;
`,a=n.default.p.withConfig({componentId:"zh__sc-58b0fb01-3"})`
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #000;
  white-space: pre-line;
`,r=n.default.div.withConfig({componentId:"zh__sc-58b0fb01-4"})`
  display: flex;
  gap: 12px;
  align-items: center;
  align-self: stretch;
  justify-content: flex-end;
`,s=n.css`
  height: 36px;
  padding: 8px 16px;
  font-size: 16px;
`,f=(0,n.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-58b0fb01-5"})`
  ${s}
`,h=(0,n.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-58b0fb01-6"})`
  ${s}
`;e.s(["default",0,function({isOpen:e,onCancel:n,onConfirm:o,title:s="이용자 기본정보를 저장할까요?",description:p="수정된 정보는 연결된 서류의 자동입력 항목에 함께 반영됩니다.\n이미 출력했거나 최종확인한 서류는 다시 확인이 필요할 수 있습니다.",cancelLabel:u="취소하기",confirmLabel:x="저장 및 모든 서류에 반영"}){return e?(0,t.jsx)(i.default,{children:(0,t.jsxs)(l,{children:[(0,t.jsxs)(c,{children:[(0,t.jsx)(d,{children:s}),(0,t.jsx)(a,{children:p})]}),(0,t.jsxs)(r,{children:[(0,t.jsx)(f,{onClick:n,children:u}),(0,t.jsx)(h,{onClick:o,children:x})]})]})}):null}])},72592,e=>{"use strict";var t=e.i(22803),n=e.i(64954);let i=t.default.div.withConfig({componentId:"zh__sc-6c66104c-0"})`
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
`,o=t.default.div.withConfig({componentId:"zh__sc-6c66104c-1"})`
  padding: 16px;
  border: 1px dashed #d1d5db;
  border-radius: 10px;

  font-size: 14px;
  color: #6b7280;
`,l=t.default.div.withConfig({componentId:"zh__sc-6c66104c-2"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;

  width: 100%;
`,c=t.default.div.withConfig({componentId:"zh__sc-6c66104c-3"})`
  display: flex;
  align-items: center;
  align-self: stretch;
  min-height: 40px;
`,d=t.default.div.withConfig({componentId:"zh__sc-6c66104c-4"})`
  display: flex;
  flex: 1 0 0;
  align-items: center;
  justify-content: space-between;

  min-width: 0;
  min-height: 40px;
`,a=t.default.h3.withConfig({componentId:"zh__sc-6c66104c-5"})`
  margin: 0;

  font-size: 18px;
  font-weight: 700;
  line-height: 20px;
  color: #101828;
`,r=t.default.div.withConfig({componentId:"zh__sc-6c66104c-6"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,s=(0,t.default)(n.default.Button.Outlined).withConfig({componentId:"zh__sc-6c66104c-7"})`
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
`,f=t.default.span.withConfig({componentId:"zh__sc-6c66104c-8"})`
  padding: 2px 12px;
  border: 1px solid #d1d5db;
  border-radius: 99px;

  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: #45464e;
`,h=t.default.span.withConfig({componentId:"zh__sc-6c66104c-9"})`
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
`,p=(0,t.default)(n.default.Input.Text).withConfig({componentId:"zh__sc-6c66104c-10"})`
  width: 100%;
  height: 28px;
  padding: 0 16px;

  font-size: 16px;
  line-height: 16px;
`,u=(0,t.default)(n.default.Input.Phone).withConfig({componentId:"zh__sc-6c66104c-11"})`
  width: 100%;
  height: 28px;
  padding: 0 16px;

  font-size: 16px;
  line-height: 16px;
`,x=(0,t.default)(n.default.Input.Contact).withConfig({componentId:"zh__sc-6c66104c-12"})`
  width: 100%;
  height: 28px;
  padding: 0 16px;

  font-size: 16px;
  line-height: 16px;
`,g=(0,t.default)(n.default.Input.PostCode).withConfig({componentId:"zh__sc-6c66104c-13"})`
  width: 100%;
  height: 28px;
  padding: 0 16px;

  font-size: 16px;
  line-height: 16px;
`,m=(0,t.default)(n.default.Input.Select).withConfig({componentId:"zh__sc-6c66104c-14"})`
  width: 100%;
  height: 28px;
  font-size: 16px;
  line-height: 16px;
`;e.s(["Container",0,i,"Empty",0,o,"InputContact",0,x,"InputPhone",0,u,"InputPostCode",0,g,"InputSelect",0,m,"InputText",0,p,"SectionActionButton",0,s,"SectionActionGroup",0,r,"SectionBadge",0,f,"SectionContainer",0,l,"SectionEditingBadge",0,h,"SectionHeader",0,c,"SectionHeaderMain",0,d,"SectionTitle",0,a])},553,e=>{"use strict";var t=e.i(7744),n=e.i(4153);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var o=(0,t.forwardRef)(function(e,n){var o=e.color,l=e.size,c=void 0===l?24:l,d=function(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,["color","size"]);return t.default.createElement("svg",i({ref:n,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:void 0===o?"currentColor":o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),t.default.createElement("circle",{cx:"11",cy:"11",r:"8"}),t.default.createElement("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}))});o.propTypes={color:n.default.string,size:n.default.oneOfType([n.default.string,n.default.number])},o.displayName="Search",e.s(["Search",0,o],553)},7311,e=>{"use strict";var t=e.i(9735);e.i(3159);var n=e.i(46907),i=e.i(553),o=e.i(22803),l=e.i(64954),c=e.i(43174),d=e.i(38797);let a=(0,d.default)((0,t.jsx)("path",{d:"m5 9 1.41 1.41L11 5.83V22h2V5.83l4.59 4.59L19 9l-7-7z"}),"North"),r=(0,d.default)((0,t.jsx)("path",{d:"m19 15-1.41-1.41L13 18.17V2h-2v16.17l-4.59-4.59L5 15l7 7z"}),"South");var s=e.i(7744);function f({label:e,width:n,sortValue:i,currentSortKey:o,currentSortOrder:l,onSort:c}){let d=o===i,s=d?l:({distinctNumber:"desc",name:"asc"})[i],h=d?"#131416":"#9ca3af";return(0,t.jsx)(w,{style:{width:n},children:(0,t.jsx)(b,{type:"button",onClick:()=>c(i),children:(0,t.jsxs)(y,{children:[(0,t.jsx)(_,{children:e}),(0,t.jsx)(j,{children:"desc"===s?(0,t.jsx)(a,{sx:{fontSize:14,color:h}}):(0,t.jsx)(r,{sx:{fontSize:14,color:h}})})]})})})}let h=(0,n.observer)(function(){let{filteredClients:e,selectedClientId:n,setSelectedClientId:i,sortKey:o,sortOrder:l,setSort:d}=c.default.client.info.byClient,a=(0,s.useRef)(null),r=e=>{d(e)};return(0,s.useEffect)(()=>{if(null===n)return;let e=window.requestAnimationFrame(()=>{let e=a.current?.querySelector(`tr[data-client-id="${n}"]`);e?.scrollIntoView({block:"nearest",behavior:"auto"})});return()=>{window.cancelAnimationFrame(e)}},[e,n]),(0,t.jsx)(p,{children:(0,t.jsxs)(u,{ref:a,children:[(0,t.jsx)(g,{children:(0,t.jsxs)(x,{children:[(0,t.jsx)(f,{label:"관리번호",width:100,sortValue:"distinctNumber",currentSortKey:o,currentSortOrder:l,onSort:r}),(0,t.jsx)(f,{label:"성명",width:100,sortValue:"name",currentSortKey:o,currentSortOrder:l,onSort:r}),(0,t.jsx)(w,{style:{width:160},children:"전화번호"}),(0,t.jsx)(w,{style:{flex:1},children:"상태"})]})}),(0,t.jsx)(m,{children:e.map(e=>{let o=e.id===n;return(0,t.jsxs)(x,{"data-client-id":e.id,$status:o?"selected":void 0,children:[(0,t.jsx)(C,{style:{width:100,color:o?"#0a0a0a":void 0,fontWeight:o?500:void 0},children:e.distinctNumber}),(0,t.jsx)(C,{style:{width:100,color:o?"#0a0a0a":void 0,fontWeight:o?500:void 0},children:e.name}),(0,t.jsx)(C,{style:{width:160,color:o?"#0a0a0a":void 0,fontWeight:o?500:void 0},children:e.phoneNumber??e.contact}),(0,t.jsx)(C,{style:{flex:1},children:(0,t.jsx)(v,{$selected:o,onClick:()=>i(e.id),children:o?"상세보기 중":"상세보기"})})]},e.id)})})]})})}),p=o.default.section.withConfig({componentId:"zh__sc-e9c08fe8-0"})`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
  min-width: 0;
  min-height: 0;
`,u=o.default.table.withConfig({componentId:"zh__sc-e9c08fe8-1"})`
  overflow-y: auto;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
  min-height: 0;
`,x=o.default.tr.withConfig({componentId:"zh__sc-e9c08fe8-2"})`
  display: flex;
  flex-shrink: 0;
  align-items: flex-start;
  align-self: stretch;
  justify-content: center;

  height: 40px;

  background-color: ${({$status:e})=>"error"===e?"#FEF2F2":"selected"===e?"#EEF2FF":"transparent"};
`,g=o.default.thead.withConfig({componentId:"zh__sc-e9c08fe8-3"})`
  position: sticky;
  z-index: 1;
  top: 0;
  width: 100%;

  ${x} {
    border-top: 1px solid #e5e7eb;
    border-bottom: 1px solid #e5e7eb;
    background: #f9fafb;
  }
`,m=o.default.tbody.withConfig({componentId:"zh__sc-e9c08fe8-4"})`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
  min-height: 0;
`,w=o.default.th.withConfig({componentId:"zh__sc-e9c08fe8-5"})`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 16px; /* 100% */
  color: #131416;
`,b=o.default.button.withConfig({componentId:"zh__sc-e9c08fe8-6"})`
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  padding: 0;
  border: none;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 16px;
  color: #131416;

  background: transparent;
`,_=o.default.span.withConfig({componentId:"zh__sc-e9c08fe8-7"})`
  display: inline-flex;
  align-items: center;
`,y=o.default.span.withConfig({componentId:"zh__sc-e9c08fe8-8"})`
  position: relative;
  display: inline-flex;
  align-items: center;
`,j=o.default.span.withConfig({componentId:"zh__sc-e9c08fe8-9"})`
  position: absolute;
  top: 50%;
  left: calc(100% + 2px);
  transform: translateY(-50%);

  display: inline-flex;
  align-items: center;
`,C=o.default.td.withConfig({componentId:"zh__sc-e9c08fe8-10"})`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;

  height: 100%;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 16px; /* 100% */
  color: #464c53;
  text-align: center;
`,z=o.css`
  font-size: 16px;
  line-height: 14px;
  text-align: center;
`,v=(0,o.default)(l.default.Button.Outlined).withConfig({componentId:"zh__sc-e9c08fe8-11"})`
  ${z}
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;

  padding: 8px 16px;

  font-weight: ${({$selected:e})=>e?600:400};

  background: ${({$selected:e})=>e?"#EFEAFF":"transparent"};
`;(0,o.default)(l.default.Button.Outlined).withConfig({componentId:"zh__sc-e9c08fe8-12"})`
  ${z}
`;let I=(0,n.observer)(function(){let{totalCount:e,searchText:n,setSearchText:o}=c.default.client.info.byClient;return(0,t.jsxs)(S,{children:[(0,t.jsxs)(k,{children:[(0,t.jsxs)($,{children:[(0,t.jsx)(E,{children:"이용자 목록"}),(0,t.jsxs)(D,{children:["(전체 ",e,"명)"]})]}),(0,t.jsxs)(O,{children:[(0,t.jsx)(l.default.Input.Select,{defaultValue:"all",children:(0,t.jsx)("option",{value:"all",children:"전체 이용자"})}),(0,t.jsxs)(F,{children:[(0,t.jsx)(B,{placeholder:"이용자명 검색",value:n,onChange:e=>o(e.target.value)}),(0,t.jsx)(i.Search,{color:"#0a0a0a",size:16})]})]})]}),(0,t.jsx)(h,{})]})}),S=o.default.div.withConfig({componentId:"zh__sc-a63223ee-0"})`
  display: flex;
  flex: 0 0 541px;
  flex-direction: column;
  align-items: flex-start;

  width: 541px;
  min-width: 0;
  min-height: 0;
  border-right: 1px solid #e5e7eb;
`,k=o.default.div.withConfig({componentId:"zh__sc-a63223ee-1"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  align-self: stretch;
  justify-content: center;

  padding: 24px 16px;
`,$=o.default.div.withConfig({componentId:"zh__sc-a63223ee-2"})`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`,E=o.default.div.withConfig({componentId:"zh__sc-a63223ee-3"})`
  font-size: 20px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
  letter-spacing: -0.5px;
`,D=o.default.div.withConfig({componentId:"zh__sc-a63223ee-4"})`
  font-size: 20px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #464c53;
  letter-spacing: -0.5px;
`,O=o.default.div.withConfig({componentId:"zh__sc-a63223ee-5"})`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;

  height: 40px;
`,F=o.default.label.withConfig({componentId:"zh__sc-a63223ee-6"})`
  cursor: text;

  display: flex;
  gap: 8px;
  align-items: center;

  width: 180px;
  height: 100%;
  padding: 8px 12px;
  border: 1px solid #e5e7eb;
  border-radius: 10px;

  background: #fff;

  &:hover {
    border-color: #b8c0d0;
    background: #fbfcff;
  }

  &:focus-within {
    border-color: #5635ff;
    background: #fbfcff;
  }
`,B=o.default.input.withConfig({componentId:"zh__sc-a63223ee-7"})`
  width: 100%;
  min-width: 0;
  border: none;

  font-size: 18px;
  color: #0a0a0a;

  background: transparent;

  &::placeholder {
    color: rgb(10 10 10 / 50%);
  }

  &:focus {
    outline: none;
  }
`;e.s(["default",0,I],7311)},3448,e=>{"use strict";var t=e.i(9735),n=e.i(24655),i=e.i(84673),o=e.i(84527),l=e.i(25644);let c=(0,e.i(38797).default)((0,t.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4"}),"Person");var d=e.i(65782);e.i(3159);var a=e.i(46907),r=e.i(7744),s=e.i(22803),f=e.i(64954),h=e.i(43174),p=e.i(21771),u=e.i(28630),x=e.i(72592);function g(e){if(!p.default.is(e))return"-";let[t,n,i]=e.split("-");return`${t}년 ${Number(n)}월 ${Number(i)}일`}let m=(0,a.observer)(function(){let[e,a]=(0,r.useState)(!1),s=(0,r.useRef)(null),p=h.default.client.info.byClient,{selectedClientId:m,representativeContract:A,currentServiceType:L}=p,P=A?.client??null,N=null!==m&&null!==P,T=p.isContractDetailEditing,W=p.selectedContractDetailDraftContractStartDate;if((0,r.useEffect)(()=>{if(!N||!T||e)return;let t=e=>{let t=e.target;t instanceof Element&&null!==t.closest('[aria-label="Date picker"]')||t instanceof Node&&null!==s.current&&s.current.contains(t)||p.cancelContractDetailEdit()};return document.addEventListener("pointerdown",t),()=>{document.removeEventListener("pointerdown",t)}},[p,N,T,e]),!N||null===P)return(0,t.jsx)(B,{children:"서비스를 선택한 뒤 이용자를 선택해 주세요."});let R=function(e){if(null===e)return"unknown";let t=e.trim().match(/^(\d{6})-?(\d)(\d{0,6})$/);if(null===t)return"unknown";switch(t[2]){case"1":case"3":return"male";case"2":case"4":return"female";default:return"unknown"}}(P.residentRegistrationNumber),V=P.name,M=A?.grade?`${A.grade}등급`:"-",Y=null===L?"-":`일상돌봄 ${"MEAL"===L?"식사관리 서비스":"영양관리 서비스"} - ${"MEAL"===L?"500901":"500401"}`,K=A?.contractStartDate??"",H=g(K),q=W??K,G=g(A?.contractEndDate??""),U=g(A?.serviceStartDate??""),J=g(A?.serviceEndDate??"");return(0,t.jsxs)(w,{ref:s,children:[(0,t.jsxs)(b,{children:[(0,t.jsx)(_,{children:"male"===R?(0,t.jsx)(l.default,{sx:{fontSize:53},htmlColor:"#C6D2FF"}):"female"===R?(0,t.jsx)(d.default,{sx:{fontSize:53},htmlColor:"#C6D2FF"}):(0,t.jsx)(c,{sx:{fontSize:53},htmlColor:"#C6D2FF"})}),(0,t.jsxs)(y,{children:[(0,t.jsxs)(j,{children:[(0,t.jsxs)(C,{children:[(0,t.jsx)(z,{children:V}),(0,t.jsxs)(v,{children:[(0,t.jsx)(I,{children:M}),(0,t.jsx)(I,{children:Y})]}),T?(0,t.jsx)(x.SectionEditingBadge,{children:"수정 진행중"}):null]}),!0===T?(0,t.jsxs)(x.SectionActionGroup,{children:[(0,t.jsxs)(x.SectionActionButton,{type:"button",onClick:()=>{p.cancelContractDetailEdit()},children:[(0,t.jsx)(i.default,{sx:{fontSize:20}}),"수정 취소"]}),(0,t.jsxs)(x.SectionActionButton,{type:"button",onClick:()=>{a(!0)},children:[(0,t.jsx)(n.default,{sx:{fontSize:20}}),"수정 저장"]})]}):(0,t.jsxs)(x.SectionActionButton,{type:"button",onClick:()=>{p.startContractDetailEdit()},children:[(0,t.jsx)(o.default,{sx:{fontSize:20}}),"수정하기"]})]}),(0,t.jsxs)(S,{children:[(0,t.jsxs)(k,{children:[(0,t.jsx)(E,{children:"계약 기간"}),!0===T?(0,t.jsx)($,{children:(0,t.jsx)(f.default.Input.Date,{style:{width:180,height:28,paddingLeft:16,fontSize:16},autoFocus:!0===T,value:q,readOnly:!1,onChange:e=>{p.updateSelectedContractDetailDraftContractStartDate(e)},placeholder:"YYYY-MM-DD",disableHolidaySelection:!0})}):(0,t.jsx)(D,{children:H}),(0,t.jsx)(O,{children:"~"}),(0,t.jsx)(D,{children:G})]}),(0,t.jsx)(F,{}),(0,t.jsxs)(k,{children:[(0,t.jsx)(E,{children:"서비스 기간"}),(0,t.jsx)(D,{children:U}),(0,t.jsx)(O,{children:"~"}),(0,t.jsx)(D,{children:J})]})]})]})]}),(0,t.jsx)(u.default,{isOpen:e,title:"계약기간 시작일을 저장할까요?",description:`수정된 정보는 연결된 서류의 자동입력 항목에 함께 반영됩니다.
이미 출력했거나 최종확인한 서류는 다시 확인이 필요할 수 있습니다.`,cancelLabel:"취소하기",confirmLabel:"저장 및 모든 서류에 반영",onCancel:()=>{a(!1)},onConfirm:()=>{p.saveSelectedContractDetailDraft().then(e=>{!0===e&&a(!1)})}})]})}),w=s.default.div.withConfig({componentId:"zh__sc-9275bce-0"})`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  width: 100%;
  height: 136px;
  padding: 16px 24px;

  background: #fff;
`,b=s.default.div.withConfig({componentId:"zh__sc-9275bce-1"})`
  display: flex;
  gap: 24px;
  align-items: center;
  width: 100%;
`,_=s.default.div.withConfig({componentId:"zh__sc-9275bce-2"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 80px;
  height: 80px;
  border-radius: 999px;

  background: #f4f2ff;
`,y=s.default.div.withConfig({componentId:"zh__sc-9275bce-3"})`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  gap: 16px;
  justify-content: center;

  min-width: 0;
`,j=s.default.div.withConfig({componentId:"zh__sc-9275bce-4"})`
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  min-width: 0;
`,C=s.default.div.withConfig({componentId:"zh__sc-9275bce-5"})`
  display: flex;
  gap: 16px;
  align-items: center;
  min-width: 0;
`,z=s.default.div.withConfig({componentId:"zh__sc-9275bce-6"})`
  font-size: 24px;
  font-weight: 700;
  line-height: 20px;
  color: #0a0a0a;
`,v=s.default.div.withConfig({componentId:"zh__sc-9275bce-7"})`
  overflow: hidden;
  display: flex;
  gap: 4px;
  align-items: center;

  min-width: 0;
`,I=s.default.div.withConfig({componentId:"zh__sc-9275bce-8"})`
  overflow: hidden;

  padding: 2px 12px;
  border: 1px solid #d1d5db;
  border-radius: 99px;

  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: #0a0a0a;
  white-space: nowrap;
`,S=s.default.div.withConfig({componentId:"zh__sc-9275bce-9"})`
  display: flex;
  gap: 12px;
  align-items: center;
  min-width: 0;
`,k=s.default.div.withConfig({componentId:"zh__sc-9275bce-10"})`
  display: flex;
  gap: 8px;
  align-items: center;

  min-width: 0;

  font-size: 18px;
  line-height: 20px;
  color: #0a0a0a;
  white-space: nowrap;
`,$=s.default.div.withConfig({componentId:"zh__sc-9275bce-11"})`
  display: flex;
  flex-direction: column;
  min-width: 0;
`,E=s.default.span.withConfig({componentId:"zh__sc-9275bce-12"})`
  font-weight: 700;
`,D=s.default.span.withConfig({componentId:"zh__sc-9275bce-13"})`
  font-weight: 400;
`,O=s.default.span.withConfig({componentId:"zh__sc-9275bce-14"})`
  font-weight: 400;
`,F=s.default.div.withConfig({componentId:"zh__sc-9275bce-15"})`
  width: 1px;
  height: 24px;
  background: #e5e7eb;
`,B=s.default.div.withConfig({componentId:"zh__sc-9275bce-16"})`
  width: 100%;
  padding: 16px 24px;
  border-bottom: 1px solid #e5e7eb;

  font-size: 14px;
  color: #6b7280;

  background: #fff;
`;e.s(["default",0,m],3448)},92712,e=>{"use strict";var t=e.i(9735),n=e.i(33261),i=e.i(22803),o=e.i(43174);let l=i.default.div.withConfig({componentId:"zh__sc-b10c1886-0"})`
  display: flex;
  align-self: flex-start;

  width: 100%;
  border-top: 1px solid #e5e7eb;
  border-bottom: 1px solid #e5e7eb;
`,c=i.default.button.withConfig({componentId:"zh__sc-b10c1886-1"})`
  cursor: pointer;

  position: relative;

  display: flex;
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

    display: block;

    width: 100%;
    height: 4px;

    background-color: ${({$active:e})=>e?"#052b57":"transparent"};
  }
`;e.s(["default",0,function(){let e=(0,n.usePathname)(),i=(0,n.useRouter)(),d=(0,n.useSearchParams)(),a=e.endsWith("/basic"),r=e.endsWith("/docs"),s=e=>{let t=d.toString();return""===t?e:`${e}?${t}`},f=async t=>{if(!e.endsWith(`/${t}`)){if(o.default.client.info.byClient.cancelContractDetailEdit(),e.endsWith("/basic"))return void i.push(s(e.replace(/\/basic$/,`/${t}`)));e.endsWith("/docs")&&("basic"===t&&await o.default.data.contract.list.refetch(),i.push(s(e.replace(/\/docs$/,`/${t}`))))}};return(0,t.jsxs)(l,{children:[(0,t.jsx)(c,{type:"button",$active:a,onClick:()=>void f("basic"),children:"기본정보"}),(0,t.jsx)(c,{type:"button",$active:r,onClick:()=>void f("docs"),children:"서류관리"})]})}])}]);