(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,553,e=>{"use strict";var t=e.i(7744),n=e.i(4153);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var l=(0,t.forwardRef)(function(e,n){var l=e.color,o=e.size,a=void 0===o?24:o,d=function(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["color","size"]);return t.default.createElement("svg",i({ref:n,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:void 0===l?"currentColor":l,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),t.default.createElement("circle",{cx:"11",cy:"11",r:"8"}),t.default.createElement("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}))});l.propTypes={color:n.default.string,size:n.default.oneOfType([n.default.string,n.default.number])},l.displayName="Search",e.s(["Search",0,l],553)},67096,33832,e=>{"use strict";var t=e.i(38797),n=e.i(9735);let i=(0,t.default)((0,n.jsx)("path",{d:"m5 9 1.41 1.41L11 5.83V22h2V5.83l4.59 4.59L19 9l-7-7z"}),"North");e.s(["default",0,i],67096);let l=(0,t.default)((0,n.jsx)("path",{d:"m19 15-1.41-1.41L13 18.17V2h-2v16.17l-4.59-4.59L5 15l7 7z"}),"South");e.s(["default",0,l],33832)},28630,e=>{"use strict";var t=e.i(9735),n=e.i(22803),i=e.i(26170),l=e.i(64954);let o=n.default.div.withConfig({componentId:"zh__sc-58b0fb01-0"})`
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
`,a=n.default.div.withConfig({componentId:"zh__sc-58b0fb01-1"})`
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
`,r=n.default.p.withConfig({componentId:"zh__sc-58b0fb01-3"})`
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #000;
  white-space: pre-line;
`,c=n.default.div.withConfig({componentId:"zh__sc-58b0fb01-4"})`
  display: flex;
  gap: 12px;
  align-items: center;
  align-self: stretch;
  justify-content: flex-end;
`,s=n.css`
  height: 36px;
  padding: 8px 16px;
  font-size: 16px;
`,f=(0,n.default)(l.default.Button.Outlined).withConfig({componentId:"zh__sc-58b0fb01-5"})`
  ${s}
`,h=(0,n.default)(l.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-58b0fb01-6"})`
  ${s}
`;e.s(["default",0,function({isOpen:e,onCancel:n,onConfirm:l,title:s="이용자 기본정보를 저장할까요?",description:u="수정된 정보는 연결된 서류의 자동입력 항목에 함께 반영됩니다.\n이미 출력했거나 최종확인한 서류는 다시 확인이 필요할 수 있습니다.",cancelLabel:p="취소하기",confirmLabel:x="저장 및 모든 서류에 반영"}){return e?(0,t.jsx)(i.default,{children:(0,t.jsxs)(o,{children:[(0,t.jsxs)(a,{children:[(0,t.jsx)(d,{children:s}),(0,t.jsx)(r,{children:u})]}),(0,t.jsxs)(c,{children:[(0,t.jsx)(f,{onClick:n,children:p}),(0,t.jsx)(h,{onClick:l,children:x})]})]})}):null}])},72592,e=>{"use strict";var t=e.i(22803),n=e.i(64954);let i=t.default.div.withConfig({componentId:"zh__sc-6c66104c-0"})`
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
`,l=t.default.div.withConfig({componentId:"zh__sc-6c66104c-1"})`
  padding: 16px;
  border: 1px dashed #d1d5db;
  border-radius: 10px;

  font-size: 14px;
  color: #6b7280;
`,o=t.default.div.withConfig({componentId:"zh__sc-6c66104c-2"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;

  width: 100%;
`,a=t.default.div.withConfig({componentId:"zh__sc-6c66104c-3"})`
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
`,r=t.default.h3.withConfig({componentId:"zh__sc-6c66104c-5"})`
  margin: 0;

  font-size: 18px;
  font-weight: 700;
  line-height: 20px;
  color: #101828;
`,c=t.default.div.withConfig({componentId:"zh__sc-6c66104c-6"})`
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
`,u=(0,t.default)(n.default.Input.Text).withConfig({componentId:"zh__sc-6c66104c-10"})`
  width: 100%;
  height: 28px;
  padding: 0 16px;

  font-size: 16px;
  line-height: 16px;
`,p=(0,t.default)(n.default.Input.Phone).withConfig({componentId:"zh__sc-6c66104c-11"})`
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
`;(0,t.default)(n.default.Input.Select).withConfig({componentId:"zh__sc-6c66104c-14"})`
  width: 100%;
  height: 28px;
  font-size: 16px;
  line-height: 16px;
`,e.s(["Container",0,i,"Empty",0,l,"InputContact",0,x,"InputPhone",0,p,"InputPostCode",0,g,"InputText",0,u,"SectionActionButton",0,s,"SectionActionGroup",0,c,"SectionBadge",0,f,"SectionContainer",0,o,"SectionEditingBadge",0,h,"SectionHeader",0,a,"SectionHeaderMain",0,d,"SectionTitle",0,r])},7311,e=>{"use strict";var t=e.i(9735);e.i(3159);var n=e.i(46907),i=e.i(553),l=e.i(22803),o=e.i(64954),a=e.i(43174),d=e.i(67096),r=e.i(33832),c=e.i(7744);function s({label:e,width:n,sortValue:i,currentSortKey:l,currentSortOrder:o,onSort:a}){let c=l===i,f=c?o:({distinctNumber:"desc",name:"asc"})[i],h=c?"#131416":"#9ca3af";return(0,t.jsx)(m,{style:{width:n},children:(0,t.jsx)(b,{type:"button",onClick:()=>a(i),children:(0,t.jsxs)(C,{children:[(0,t.jsx)(w,{children:e}),(0,t.jsx)(_,{children:"desc"===f?(0,t.jsx)(d.default,{sx:{fontSize:14,color:h}}):(0,t.jsx)(r.default,{sx:{fontSize:14,color:h}})})]})})})}let f=(0,n.observer)(function(){let{filteredClients:e,selectedClientId:n,setSelectedClientId:i,sortKey:l,sortOrder:o,setSort:d}=a.default.client.info.byClient,r=(0,c.useRef)(null),f=e=>{d(e)};return(0,c.useEffect)(()=>{if(null===n)return;let e=window.requestAnimationFrame(()=>{let e=r.current?.querySelector(`tr[data-client-id="${n}"]`);e?.scrollIntoView({block:"nearest",behavior:"auto"})});return()=>{window.cancelAnimationFrame(e)}},[e,n]),(0,t.jsx)(h,{children:(0,t.jsxs)(u,{ref:r,children:[(0,t.jsx)(x,{children:(0,t.jsxs)(p,{children:[(0,t.jsx)(s,{label:"관리번호",width:100,sortValue:"distinctNumber",currentSortKey:l,currentSortOrder:o,onSort:f}),(0,t.jsx)(s,{label:"성명",width:100,sortValue:"name",currentSortKey:l,currentSortOrder:o,onSort:f}),(0,t.jsx)(m,{style:{width:160},children:"전화번호"}),(0,t.jsx)(m,{style:{flex:1},children:"상태"})]})}),(0,t.jsx)(g,{children:e.map(e=>{let l=e.id===n;return(0,t.jsxs)(p,{"data-client-id":e.id,$status:l?"selected":void 0,children:[(0,t.jsx)(y,{style:{width:100,color:l?"#0a0a0a":void 0,fontWeight:l?500:void 0},children:e.distinctNumber}),(0,t.jsx)(y,{style:{width:100,color:l?"#0a0a0a":void 0,fontWeight:l?500:void 0},children:e.name}),(0,t.jsx)(y,{style:{width:160,color:l?"#0a0a0a":void 0,fontWeight:l?500:void 0},children:e.phoneNumber??e.contact}),(0,t.jsx)(y,{style:{flex:1},children:(0,t.jsx)(v,{$selected:l,onClick:()=>i(e.id),children:l?"상세보기 중":"상세보기"})})]},e.id)})})]})})}),h=l.default.section.withConfig({componentId:"zh__sc-e9c08fe8-0"})`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
  min-width: 0;
  min-height: 0;
`,u=l.default.table.withConfig({componentId:"zh__sc-e9c08fe8-1"})`
  overflow-y: auto;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
  min-height: 0;
`,p=l.default.tr.withConfig({componentId:"zh__sc-e9c08fe8-2"})`
  display: flex;
  flex-shrink: 0;
  align-items: flex-start;
  align-self: stretch;
  justify-content: center;

  height: 40px;

  background-color: ${({$status:e})=>"error"===e?"#FEF2F2":"selected"===e?"#EEF2FF":"transparent"};
`,x=l.default.thead.withConfig({componentId:"zh__sc-e9c08fe8-3"})`
  position: sticky;
  z-index: 1;
  top: 0;
  width: 100%;

  ${p} {
    border-top: 1px solid #e5e7eb;
    border-bottom: 1px solid #e5e7eb;
    background: #f9fafb;
  }
`,g=l.default.tbody.withConfig({componentId:"zh__sc-e9c08fe8-4"})`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
  min-height: 0;
`,m=l.default.th.withConfig({componentId:"zh__sc-e9c08fe8-5"})`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 16px; /* 100% */
  color: #131416;
`,b=l.default.button.withConfig({componentId:"zh__sc-e9c08fe8-6"})`
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
`,w=l.default.span.withConfig({componentId:"zh__sc-e9c08fe8-7"})`
  display: inline-flex;
  align-items: center;
`,C=l.default.span.withConfig({componentId:"zh__sc-e9c08fe8-8"})`
  position: relative;
  display: inline-flex;
  align-items: center;
`,_=l.default.span.withConfig({componentId:"zh__sc-e9c08fe8-9"})`
  position: absolute;
  top: 50%;
  left: calc(100% + 2px);
  transform: translateY(-50%);

  display: inline-flex;
  align-items: center;
`,y=l.default.td.withConfig({componentId:"zh__sc-e9c08fe8-10"})`
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
`,j=l.css`
  font-size: 16px;
  line-height: 14px;
  text-align: center;
`,v=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-e9c08fe8-11"})`
  ${j}
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;

  padding: 8px 16px;

  font-weight: ${({$selected:e})=>e?600:400};

  background: ${({$selected:e})=>e?"#EFEAFF":"transparent"};
`;(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-e9c08fe8-12"})`
  ${j}
`;let z=(0,n.observer)(function(){let{totalCount:e,searchText:n,setSearchText:l}=a.default.client.info.byClient;return(0,t.jsxs)(I,{children:[(0,t.jsxs)(S,{children:[(0,t.jsxs)(D,{children:[(0,t.jsx)(E,{children:"이용자 목록"}),(0,t.jsxs)($,{children:["(전체 ",e,"명)"]})]}),(0,t.jsxs)(k,{children:[(0,t.jsx)(o.default.Input.Select,{defaultValue:"all",children:(0,t.jsx)("option",{value:"all",children:"전체 이용자"})}),(0,t.jsxs)(T,{children:[(0,t.jsx)(O,{placeholder:"이용자명 검색",value:n,onChange:e=>l(e.target.value)}),(0,t.jsx)(i.Search,{color:"#0a0a0a",size:16})]})]})]}),(0,t.jsx)(f,{})]})}),I=l.default.div.withConfig({componentId:"zh__sc-a63223ee-0"})`
  display: flex;
  flex: 0 0 541px;
  flex-direction: column;
  align-items: flex-start;

  width: 541px;
  min-width: 0;
  min-height: 0;
  border-right: 1px solid #e5e7eb;
`,S=l.default.div.withConfig({componentId:"zh__sc-a63223ee-1"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  align-self: stretch;
  justify-content: center;

  padding: 24px 16px;
`,D=l.default.div.withConfig({componentId:"zh__sc-a63223ee-2"})`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`,E=l.default.div.withConfig({componentId:"zh__sc-a63223ee-3"})`
  font-size: 20px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
  letter-spacing: -0.5px;
`,$=l.default.div.withConfig({componentId:"zh__sc-a63223ee-4"})`
  font-size: 20px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #464c53;
  letter-spacing: -0.5px;
`,k=l.default.div.withConfig({componentId:"zh__sc-a63223ee-5"})`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;

  height: 40px;
`,T=l.default.label.withConfig({componentId:"zh__sc-a63223ee-6"})`
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
`,O=l.default.input.withConfig({componentId:"zh__sc-a63223ee-7"})`
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
`;e.s(["default",0,z],7311)},3448,e=>{"use strict";var t=e.i(9735),n=e.i(24655),i=e.i(84673),l=e.i(84527),o=e.i(25644);let a=(0,e.i(38797).default)((0,t.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4"}),"Person");var d=e.i(65782);e.i(3159);var r=e.i(46907),c=e.i(7744),s=e.i(22803),f=e.i(23416),h=e.i(98273),u=e.i(64954),p=e.i(34944),x=e.i(43174),g=e.i(62897),m=e.i(21771),b=e.i(28630),w=e.i(72592);let C=(0,r.observer)(function({disabled:e=!1}){let n=x.default.client.info.byClient.docs,i=x.default.client.info.byClient,l=n.contractsOfSelectedClient,o=i.selectedContractId,a=l.some(e=>e.status===p.default.ACTIVE);return(0,t.jsxs)(_,{children:[(0,t.jsx)(y,{children:"계약 회차"}),(0,t.jsx)(j,{value:o??"",disabled:e||0===l.length,onChange:e=>{let t=e.target.value;i.setSelectedContractId(""===t?null:t)},children:l.map((e,n)=>{let i,o,d,r,c,s,f,h,u,x;return i=e.serviceStartDate??"",o=e.serviceEndDate??"",d=e.status===p.default.ACTIVE,h=a&&""!==i&&(c=(r=new Date).getFullYear(),s=String(r.getMonth()+1).padStart(2,"0"),f=String(r.getDate()).padStart(2,"0"),`${c}-${s}-${f}`<i),u=""!==i&&""!==o?`${i.replaceAll("-",".")} ~ ${o.replaceAll("-",".")}`:"-",x=`${l.length-n}차 계약 (${u})${d?" [진행중]":h?" [재계약 중]":""}`,(0,t.jsx)("option",{value:e.id,children:x},e.id)})})]})}),_=s.default.div.withConfig({componentId:"zh__sc-4b027192-0"})`
  display: flex;
  gap: 8px;
  align-items: center;
  min-width: 0;
`,y=s.default.p.withConfig({componentId:"zh__sc-4b027192-1"})`
  margin: 0;

  font-size: 18px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px; /* 111.111% */
  color: #0a0a0a;
  text-align: center;
  white-space: nowrap;
`,j=(0,s.default)(u.default.Input.Select).withConfig({componentId:"zh__sc-4b027192-2"})`
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
`;function v(e){if(!m.default.is(e))return"-";let[t,n,i]=e.split("-");return`${t}년 ${Number(n)}월 ${Number(i)}일`}function z(){let e=new Date,t=e.getFullYear(),n=String(e.getMonth()+1).padStart(2,"0"),i=String(e.getDate()).padStart(2,"0");return`${t}-${n}-${i}`}function I(e){if(!m.default.is(e))return"-";let[t,n,i]=e.split("-");return`${t}.${n}.${i}`}let S=(0,r.observer)(function(){let e,r,s,_,y,[j,S]=(0,c.useState)(!1),[Z,ee]=(0,c.useState)(!1),[et,en]=(0,c.useState)(!1),[ei,el]=(0,c.useState)({key:"",date:""}),eo=(0,c.useRef)(null),ea=x.default.client.info.byClient,ed=x.default.modal.clientCreate,{selectedClientId:er,selectedContract:ec,currentServiceType:es}=ea,ef=ea.contractsOfSelectedClient,eh=ec?.client??null,eu=null!==er&&null!==eh,ep=ea.isContractDetailEditing,ex=ea.selectedContractDetailDraftContractStartDate,eg=ea.selectedContractDetailDraftContractEndDate,em=ea.selectedContractDetailDraftStatus,eb=[ec?.id??"",es??"",ex??ec?.contractStartDate??"",ep?"editing":"readonly",em??ec?.status??""].join("|"),ew=ei.key===eb?ei.date:"";if((0,c.useEffect)(()=>{if(!eu||!ep||j||Z||et)return;let e=e=>{let t=e.target;t instanceof Element&&null!==t.closest('[aria-label="Date picker"]')||t instanceof Element&&(null!==t.closest('[role="listbox"]')||null!==t.closest('[role="option"]')||null!==t.closest("[data-radix-select-viewport]")||null!==t.closest("[data-radix-popper-content-wrapper]"))||t instanceof Node&&null!==eo.current&&eo.current.contains(t)||ea.cancelContractDetailEdit()};return document.addEventListener("pointerdown",e),()=>{document.removeEventListener("pointerdown",e)}},[ea,eu,ep,j,Z,et]),(0,c.useEffect)(()=>{let e=ec?.id,t=ec?.contractStartDate??"",n=ec?.status??p.default.ACTIVE,i=(em??n)===p.default.TERMINATED;if(!eu||!ep||!i||void 0===e||null===es||!m.default.is(t))return;let l=function(e,t){if(!m.default.is(e)||!m.default.is(t))return[];let[n,i]=e.split("-"),[l,o]=t.split("-"),a=Number(n),d=Number(i),r=Number(l),c=Number(o);if(!Number.isInteger(a)||!Number.isInteger(d)||!Number.isInteger(r)||!Number.isInteger(c))return[];let s=new Date(a,d-1,1),f=new Date(r,c-1,1);if(s.getTime()>f.getTime())return[];let h=[],u=new Date(s);for(;u.getTime()<=f.getTime();){let[e,t]=g.default.yearMonth.create(u.getFullYear(),u.getMonth()+1);null===e&&h.push(t),u.setMonth(u.getMonth()+1)}return h}(t,z());if(0===l.length)return;let o=!0;return(async()=>{let t=await Promise.all(l.map(e=>f.default.data.serviceProvision.getMonthlyStatus({serviceType:es,targetYearMonth:e})));o&&el({key:eb,date:t.reduce((t,[n,i])=>{var l;let o;if(null!==n||null===i)return t;let a=(l=i.rows,void 0===(o=l.find(t=>t.contractId===e))?"":o.cells.reduce((e,t)=>"PROVIDED"===t.status&&m.default.is(t.serviceDate)&&(!m.default.is(e)||e<t.serviceDate)?t.serviceDate:e,""));return m.default.is(a)&&(!m.default.is(t)||t<a)?a:t},"")})})(),()=>{o=!1}},[ex,em,es,eu,ep,eb,ec?.contractStartDate,ec?.id,ec?.status]),!eu||null===eh)return(0,t.jsx)(X,{children:"서비스를 선택한 뒤 이용자를 선택해 주세요."});let eC=function(e){if(null===e)return"unknown";let t=e.trim().replace(/[^0-9]/g,"");if(t.length<7)return"unknown";switch(t[6]){case"1":case"3":return"male";case"2":case"4":return"female";default:return"unknown"}}(eh.residentRegistrationNumber),e_=eh.name,ey=ec?.grade?`${ec.grade}등급`:"-",ej=null===es?"-":`일상돌봄 ${"MEAL"===es?"식사관리 서비스":"영양관리 서비스"} - ${"MEAL"===es?"500901":"500401"}`,ev=ec?.status??p.default.ACTIVE,ez=em??ev,eI=ez===p.default.ACTIVE,eS=ez===p.default.COMPLETED,eD=ez===p.default.TERMINATED,eE=ec?.contractStartDate??"",e$=ex??eE,ek=v(e$),eT=ec?.contractEndDate??"",eO=eg??eT,eF=v(eO),eN=v(ec?.serviceStartDate??""),eA=ec?.serviceEndDate??"",eM=v(eA),eL=ef.some(e=>(function(e,t){if(!m.default.is(e)||!m.default.is(t))return!1;let n=new Date,i=n.getFullYear(),l=String(n.getMonth()+1).padStart(2,"0"),o=String(n.getDate()).padStart(2,"0"),a=`${i}-${l}-${o}`;return e<=a&&a<=t})(e.serviceStartDate??"",e.serviceEndDate??"")),eP=ef.some(e=>(function(e){if(!m.default.is(e))return!1;let t=new Date,n=t.getFullYear(),i=String(t.getMonth()+1).padStart(2,"0"),l=String(t.getDate()).padStart(2,"0");return`${n}-${i}-${l}`<e})(e.serviceStartDate??"")),eB=function(e){if(!m.default.is(e))return null;let[t,n,i]=e.split("-"),l=Number(t),o=Number(n),a=Number(i);if(!Number.isInteger(l)||!Number.isInteger(o)||!Number.isInteger(a))return null;let d=new Date(l,o-1,a),r=new Date,c=new Date(r.getFullYear(),r.getMonth(),r.getDate());return Math.floor((d.getTime()-c.getTime())/864e5)}(eT),eV=!ep&&eI&&!(eL&&eP)&&null!==eB&&eB<=30,eY=null===eB?"green":eB<=3?"red":eB<=7?"orange":eB<=15?"yellow":"green",eR=eD?eF:eM,eW=(r=(e=new Date).getFullYear(),s=String(e.getMonth()+1).padStart(2,"0"),_=String(e.getDate()).padStart(2,"0"),`${r}.${s}.${_}`),eK=(y=z(),m.default.is(eA)&&eA<y?eA:y),eq=!!m.default.is(eA)&&z()<eA,eG=eq?`오늘(${eW})로 계약이 해지되며, 계약 종료일이 변경됩니다.`:`계약이 해지되며, 계약 종료일이 ${v(eK)}로 변경됩니다.`,eH=`${I(eE)} ~ ${I(eT)}`;return(0,t.jsxs)(D,{ref:eo,children:[(0,t.jsxs)(E,{children:[(0,t.jsx)($,{children:"male"===eC?(0,t.jsx)(o.default,{sx:{fontSize:53},htmlColor:"#C6D2FF"}):"female"===eC?(0,t.jsx)(d.default,{sx:{fontSize:53},htmlColor:"#C6D2FF"}):(0,t.jsx)(a,{sx:{fontSize:53},htmlColor:"#C6D2FF"})}),(0,t.jsxs)(k,{children:[(0,t.jsxs)(T,{children:[(0,t.jsxs)(O,{children:[(0,t.jsx)(F,{children:e_}),(0,t.jsxs)(N,{children:[(0,t.jsx)(A,{children:ey}),(0,t.jsx)(A,{children:ej})]}),ep?(0,t.jsx)(w.SectionEditingBadge,{children:"수정 진행중"}):null]}),!0===ep?(0,t.jsxs)(w.SectionActionGroup,{children:[(0,t.jsxs)(w.SectionActionButton,{type:"button",onClick:()=>{ea.cancelContractDetailEdit()},children:[(0,t.jsx)(i.default,{sx:{fontSize:20}}),"수정 취소"]}),(0,t.jsxs)(w.SectionActionButton,{type:"button",onClick:()=>{S(!0)},children:[(0,t.jsx)(n.default,{sx:{fontSize:20}}),"수정 저장"]})]}):(0,t.jsxs)(w.SectionActionButton,{type:"button",disabled:eS,onClick:()=>{eS||ea.startContractDetailEdit()},children:[(0,t.jsx)(l.default,{sx:{fontSize:20}}),"수정하기"]})]}),(0,t.jsxs)(L,{children:[(0,t.jsxs)(B,{children:[(0,t.jsx)(H,{children:"계약 상태"}),(0,t.jsx)(R,{children:(0,t.jsxs)(W,{value:ez,disabled:!ep,onChange:e=>{let t=e.target.value;if((0,p.isSelectableContractStatus)(t)&&t!==ez){if(t===p.default.TERMINATED)return void ee(!0);if(t===p.default.ACTIVE)return void en(!0);ea.updateSelectedContractDetailDraftStatus(t)}},children:[(0,t.jsx)("option",{value:p.default.ACTIVE,children:"계약중"}),(0,t.jsx)("option",{value:p.default.TERMINATED,children:"해지"}),ez===p.default.COMPLETED?(0,t.jsx)("option",{value:p.default.COMPLETED,children:"완료"}):null]})})]}),eV?(0,t.jsxs)(K,{children:[(0,t.jsxs)(q,{$color:eY,children:["계약 만료 ",eB??0,"일 남음"]}),(0,t.jsxs)(G,{type:"button",onClick:()=>{ed.show("renew")},children:[(0,t.jsx)(h.default.ContractEdit,{size:16}),"재계약 하기"]})]}):null]}),(0,t.jsx)(P,{children:(0,t.jsx)(C,{disabled:ep})}),(0,t.jsxs)(M,{children:[(0,t.jsxs)(B,{children:[(0,t.jsx)(H,{children:"계약 기간"}),!0!==ep||eD?(0,t.jsx)(U,{children:ek}):(0,t.jsx)(V,{children:(0,t.jsx)(u.default.Input.Date,{style:{width:180,height:28,paddingLeft:16,fontSize:16},value:e$,readOnly:!1,isDateSelectable:e=>!m.default.is(eA)||e<=eA,onChange:e=>{ea.updateSelectedContractDetailDraftContractStartDate(e)},placeholder:"YYYY-MM-DD"})}),(0,t.jsx)(J,{children:"~"}),!0===ep&&eD?(0,t.jsx)(Y,{children:(0,t.jsx)(u.default.Input.Date,{style:{width:180,height:28,paddingLeft:16,fontSize:16},value:eO,readOnly:!1,isDateSelectable:e=>!(m.default.is(e$)&&e<e$||m.default.is(ew)&&e<=ew||m.default.is(eA)&&eA<e),onChange:e=>{ea.updateSelectedContractDetailDraftContractEndDate(e)},placeholder:"YYYY-MM-DD"})}):(0,t.jsx)(U,{children:eR})]}),(0,t.jsx)(Q,{}),(0,t.jsxs)(B,{children:[(0,t.jsx)(H,{children:"서비스 기간"}),(0,t.jsx)(U,{children:eN}),(0,t.jsx)(J,{children:"~"}),(0,t.jsx)(U,{children:eM})]})]})]})]}),(0,t.jsx)(b.default,{isOpen:j,title:"계약 정보를 저장할까요?",description:`수정된 정보는 연결된 서류의 자동입력 항목에 함께 반영됩니다.
이미 출력했거나 최종확인한 서류는 다시 확인이 필요할 수 있습니다.`,cancelLabel:"취소하기",confirmLabel:"저장 및 모든 서류에 반영",onCancel:()=>{S(!1)},onConfirm:()=>{ea.saveSelectedContractDetailDraft().then(e=>{!0===e&&S(!1)})}}),(0,t.jsx)(b.default,{isOpen:Z,title:eq?"계약을 중도 해지 하시겠습니까?":"계약을 해지 하시겠습니까?",description:`${eG}
해지 시, 계약 시작일은 수정할 수 없으며 계약 종료일은 수정할 수 있습니다.`,cancelLabel:"취소하기",confirmLabel:"변경하기",onCancel:()=>{ee(!1)},onConfirm:()=>{ea.updateSelectedContractDetailDraftContractStartDate(eE),ea.updateSelectedContractDetailDraftContractEndDate(eK),ea.updateSelectedContractDetailDraftStatus(p.default.TERMINATED),ee(!1)}}),(0,t.jsx)(b.default,{isOpen:et,title:"계약중 상태로 되돌리시겠습니까?",description:`이전 계약 기간 (${eH})으로 되돌리며, 해지에서 계약중으로 변경됩니다.
계약중일 시, 계약 시작일을 수정할 수 있으며 계약 종료일은 수정할 수 없습니다.`,cancelLabel:"취소하기",confirmLabel:"변경하기",onCancel:()=>{en(!1)},onConfirm:()=>{ea.updateSelectedContractDetailDraftContractEndDate(eA),ea.updateSelectedContractDetailDraftStatus(p.default.ACTIVE),en(!1)}})]})}),D=s.default.div.withConfig({componentId:"zh__sc-9275bce-0"})`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  width: 100%;
  min-height: 156px;
  padding: 16px 24px;

  background: #fff;
`,E=s.default.div.withConfig({componentId:"zh__sc-9275bce-1"})`
  display: flex;
  gap: 24px;
  width: 100%;
`,$=s.default.div.withConfig({componentId:"zh__sc-9275bce-2"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 80px;
  height: 80px;
  border-radius: 999px;

  background: #f4f2ff;
`,k=s.default.div.withConfig({componentId:"zh__sc-9275bce-3"})`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  gap: 16px;
  justify-content: center;

  min-width: 0;
`,T=s.default.div.withConfig({componentId:"zh__sc-9275bce-4"})`
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  min-width: 0;
`,O=s.default.div.withConfig({componentId:"zh__sc-9275bce-5"})`
  display: flex;
  gap: 16px;
  align-items: center;
  min-width: 0;
`,F=s.default.div.withConfig({componentId:"zh__sc-9275bce-6"})`
  font-size: 24px;
  font-weight: 700;
  line-height: 20px;
  color: #0a0a0a;
`,N=s.default.div.withConfig({componentId:"zh__sc-9275bce-7"})`
  overflow: hidden;
  display: flex;
  gap: 4px;
  align-items: center;

  min-width: 0;
`,A=s.default.div.withConfig({componentId:"zh__sc-9275bce-8"})`
  overflow: hidden;

  padding: 2px 12px;
  border: 1px solid #d1d5db;
  border-radius: 99px;

  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: #0a0a0a;
  white-space: nowrap;
`,M=s.default.div.withConfig({componentId:"zh__sc-9275bce-9"})`
  display: flex;
  gap: 12px;
  align-items: center;
  min-width: 0;
`,L=s.default.div.withConfig({componentId:"zh__sc-9275bce-10"})`
  display: flex;
  gap: 16px;
  align-items: center;
  min-width: 0;
`,P=s.default.div.withConfig({componentId:"zh__sc-9275bce-11"})`
  display: flex;
  gap: 8px;
  align-items: center;
  min-width: 0;
`,B=s.default.div.withConfig({componentId:"zh__sc-9275bce-12"})`
  display: flex;
  gap: 8px;
  align-items: center;

  min-width: 0;

  font-size: 18px;
  line-height: 20px;
  color: #0a0a0a;
  white-space: nowrap;
`,V=s.default.div.withConfig({componentId:"zh__sc-9275bce-13"})`
  display: flex;
  flex-direction: column;
  min-width: 0;
`,Y=s.default.div.withConfig({componentId:"zh__sc-9275bce-14"})`
  display: flex;
  flex-direction: column;
  min-width: 0;
`,R=s.default.div.withConfig({componentId:"zh__sc-9275bce-15"})`
  display: flex;
  flex-direction: column;
  min-width: 0;
`,W=(0,s.default)(u.default.Input.Select).withConfig({componentId:"zh__sc-9275bce-16"})`
  width: 94px;
  height: 28px;
`,K=s.default.div.withConfig({componentId:"zh__sc-9275bce-17"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,q=s.default.div.withConfig({componentId:"zh__sc-9275bce-18"})`
  display: flex;
  align-items: center;

  height: 24px;
  padding: 0 6px;
  border-radius: 99px;

  font-size: 14px;
  font-weight: 500;
  line-height: 16px; /* 114.286% */
  color: #fff;

  background: ${({$color:e})=>{switch(e){case"green":return"#008D4C";case"yellow":return"#F8D200";case"orange":return"#FF7514";default:return"#FF2056"}}};
`,G=(0,s.default)(u.default.Button.Outlined).withConfig({componentId:"zh__sc-9275bce-19"})`
  gap: 8px;
  padding: 0 16px;
`,H=s.default.span.withConfig({componentId:"zh__sc-9275bce-20"})`
  font-weight: 700;
`,U=s.default.span.withConfig({componentId:"zh__sc-9275bce-21"})`
  font-weight: 400;
`,J=s.default.span.withConfig({componentId:"zh__sc-9275bce-22"})`
  font-weight: 400;
`,Q=s.default.div.withConfig({componentId:"zh__sc-9275bce-23"})`
  width: 1px;
  height: 24px;
  background: #e5e7eb;
`,X=s.default.div.withConfig({componentId:"zh__sc-9275bce-24"})`
  width: 100%;
  padding: 16px 24px;
  border-bottom: 1px solid #e5e7eb;

  font-size: 14px;
  color: #6b7280;

  background: #fff;
`;e.s(["default",0,S],3448)},92712,e=>{"use strict";var t=e.i(9735),n=e.i(33261),i=e.i(22803),l=e.i(43174);let o=i.default.div.withConfig({componentId:"zh__sc-b10c1886-0"})`
  display: flex;
  align-self: flex-start;

  width: 100%;
  border-top: 1px solid #e5e7eb;
  border-bottom: 1px solid #e5e7eb;
`,a=i.default.button.withConfig({componentId:"zh__sc-b10c1886-1"})`
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
`;e.s(["default",0,function(){let e=(0,n.usePathname)(),i=(0,n.useRouter)(),d=(0,n.useSearchParams)(),r=e.endsWith("/basic"),c=e.endsWith("/docs"),s=e=>{let t=d.toString();return""===t?e:`${e}?${t}`},f=async t=>{if(!e.endsWith(`/${t}`)){if(l.default.client.info.byClient.cancelContractDetailEdit(),e.endsWith("/basic"))return void i.push(s(e.replace(/\/basic$/,`/${t}`)));e.endsWith("/docs")&&("basic"===t&&await l.default.data.contract.list.refetch(),i.push(s(e.replace(/\/docs$/,`/${t}`))))}};return(0,t.jsxs)(o,{children:[(0,t.jsx)(a,{type:"button",$active:r,onClick:()=>void f("basic"),children:"기본정보"}),(0,t.jsx)(a,{type:"button",$active:c,onClick:()=>void f("docs"),children:"서류관리"})]})}])}]);