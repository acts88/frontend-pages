(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,7311,e=>{"use strict";var t=e.i(9735);e.i(3159);var n=e.i(46907),i=e.i(7744),o=e.i(4153);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var r=(0,i.forwardRef)(function(e,t){var n=e.color,o=e.size,r=void 0===o?24:o,c=function(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,["color","size"]);return i.default.createElement("svg",l({ref:t,xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),i.default.createElement("circle",{cx:"11",cy:"11",r:"8"}),i.default.createElement("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}))});r.propTypes={color:o.default.string,size:o.default.oneOfType([o.default.string,o.default.number])},r.displayName="Search";var c=e.i(22803),d=e.i(64954),s=e.i(43174),a=e.i(38797);let f=(0,a.default)((0,t.jsx)("path",{d:"m5 9 1.41 1.41L11 5.83V22h2V5.83l4.59 4.59L19 9l-7-7z"}),"North"),h=(0,a.default)((0,t.jsx)("path",{d:"m19 15-1.41-1.41L13 18.17V2h-2v16.17l-4.59-4.59L5 15l7 7z"}),"South");function p({label:e,width:n,sortValue:i,currentSortKey:o,currentSortOrder:l,onSort:r}){let c=o===i,d=c?l:({distinctNumber:"desc",name:"asc"})[i],s=c?"#131416":"#9ca3af";return(0,t.jsx)(j,{style:{width:n},children:(0,t.jsx)(y,{type:"button",onClick:()=>r(i),children:(0,t.jsxs)(v,{children:[(0,t.jsx)(_,{children:e}),(0,t.jsx)(z,{children:"desc"===d?(0,t.jsx)(f,{sx:{fontSize:14,color:s}}):(0,t.jsx)(h,{sx:{fontSize:14,color:s}})})]})})})}let u=(0,n.observer)(function(){let{filteredClients:e,selectedClientId:n,setSelectedClientId:o,sortKey:l,sortOrder:r,setSort:c}=s.default.client.info.byClient,d=(0,i.useRef)(null),a=e=>{c(e)};return(0,i.useEffect)(()=>{if(null===n)return;let e=window.requestAnimationFrame(()=>{let e=d.current?.querySelector(`tr[data-client-id="${n}"]`);e?.scrollIntoView({block:"nearest",behavior:"auto"})});return()=>{window.cancelAnimationFrame(e)}},[e,n]),(0,t.jsx)(x,{children:(0,t.jsxs)(g,{ref:d,children:[(0,t.jsx)(b,{children:(0,t.jsxs)(m,{children:[(0,t.jsx)(p,{label:"관리번호",width:100,sortValue:"distinctNumber",currentSortKey:l,currentSortOrder:r,onSort:a}),(0,t.jsx)(p,{label:"성명",width:100,sortValue:"name",currentSortKey:l,currentSortOrder:r,onSort:a}),(0,t.jsx)(j,{style:{width:160},children:"전화번호"}),(0,t.jsx)(j,{style:{flex:1},children:"상태"})]})}),(0,t.jsx)(w,{children:e.map(e=>{let i=e.id===n;return(0,t.jsxs)(m,{"data-client-id":e.id,$status:i?"selected":void 0,children:[(0,t.jsx)(C,{style:{width:100,color:i?"#0a0a0a":void 0,fontWeight:i?500:void 0},children:e.distinctNumber}),(0,t.jsx)(C,{style:{width:100,color:i?"#0a0a0a":void 0,fontWeight:i?500:void 0},children:e.name}),(0,t.jsx)(C,{style:{width:160,color:i?"#0a0a0a":void 0,fontWeight:i?500:void 0},children:e.phoneNumber??e.contact}),(0,t.jsx)(C,{style:{flex:1},children:(0,t.jsx)(k,{$selected:i,onClick:()=>o(e.id),children:i?"상세보기 중":"상세보기"})})]},e.id)})})]})})}),x=c.default.section.withConfig({componentId:"zh__sc-e9c08fe8-0"})`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
  min-width: 0;
  min-height: 0;
`,g=c.default.table.withConfig({componentId:"zh__sc-e9c08fe8-1"})`
  overflow-y: auto;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
  min-height: 0;
`,m=c.default.tr.withConfig({componentId:"zh__sc-e9c08fe8-2"})`
  display: flex;
  flex-shrink: 0;
  align-items: flex-start;
  align-self: stretch;
  justify-content: center;

  height: 40px;

  background-color: ${({$status:e})=>"error"===e?"#FEF2F2":"selected"===e?"#EEF2FF":"transparent"};
`,b=c.default.thead.withConfig({componentId:"zh__sc-e9c08fe8-3"})`
  position: sticky;
  z-index: 1;
  top: 0;
  width: 100%;

  ${m} {
    border-top: 1px solid #e5e7eb;
    border-bottom: 1px solid #e5e7eb;
    background: #f9fafb;
  }
`,w=c.default.tbody.withConfig({componentId:"zh__sc-e9c08fe8-4"})`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
  min-height: 0;
`,j=c.default.th.withConfig({componentId:"zh__sc-e9c08fe8-5"})`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 16px; /* 100% */
  color: #131416;
`,y=c.default.button.withConfig({componentId:"zh__sc-e9c08fe8-6"})`
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
`,_=c.default.span.withConfig({componentId:"zh__sc-e9c08fe8-7"})`
  display: inline-flex;
  align-items: center;
`,v=c.default.span.withConfig({componentId:"zh__sc-e9c08fe8-8"})`
  position: relative;
  display: inline-flex;
  align-items: center;
`,z=c.default.span.withConfig({componentId:"zh__sc-e9c08fe8-9"})`
  position: absolute;
  top: 50%;
  left: calc(100% + 2px);
  transform: translateY(-50%);

  display: inline-flex;
  align-items: center;
`,C=c.default.td.withConfig({componentId:"zh__sc-e9c08fe8-10"})`
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
`,I=c.css`
  font-size: 16px;
  line-height: 14px;
  text-align: center;
`,k=(0,c.default)(d.default.Button.Outlined).withConfig({componentId:"zh__sc-e9c08fe8-11"})`
  ${I}
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;

  padding: 8px 16px;

  font-weight: ${({$selected:e})=>e?600:400};

  background: ${({$selected:e})=>e?"#EFEAFF":"transparent"};
`;(0,c.default)(d.default.Button.Outlined).withConfig({componentId:"zh__sc-e9c08fe8-12"})`
  ${I}
`;let $=(0,n.observer)(function(){let{totalCount:e,searchText:n,setSearchText:i}=s.default.client.info.byClient;return(0,t.jsxs)(S,{children:[(0,t.jsxs)(O,{children:[(0,t.jsxs)(F,{children:[(0,t.jsx)(E,{children:"이용자 목록"}),(0,t.jsxs)(N,{children:["(전체 ",e,"명)"]})]}),(0,t.jsxs)(W,{children:[(0,t.jsx)(d.default.Input.Select,{defaultValue:"all",children:(0,t.jsx)("option",{value:"all",children:"전체 이용자"})}),(0,t.jsxs)(L,{children:[(0,t.jsx)(P,{placeholder:"이용자명 검색",value:n,onChange:e=>i(e.target.value)}),(0,t.jsx)(r,{color:"#0a0a0a",size:16})]})]})]}),(0,t.jsx)(u,{})]})}),S=c.default.div.withConfig({componentId:"zh__sc-a63223ee-0"})`
  display: flex;
  flex: 0 0 541px;
  flex-direction: column;
  align-items: flex-start;

  width: 541px;
  min-width: 0;
  min-height: 0;
  border-right: 1px solid #e5e7eb;
`,O=c.default.div.withConfig({componentId:"zh__sc-a63223ee-1"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  align-self: stretch;
  justify-content: center;

  padding: 24px 16px;
`,F=c.default.div.withConfig({componentId:"zh__sc-a63223ee-2"})`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`,E=c.default.div.withConfig({componentId:"zh__sc-a63223ee-3"})`
  font-size: 20px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
  letter-spacing: -0.5px;
`,N=c.default.div.withConfig({componentId:"zh__sc-a63223ee-4"})`
  font-size: 20px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #464c53;
  letter-spacing: -0.5px;
`,W=c.default.div.withConfig({componentId:"zh__sc-a63223ee-5"})`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;

  height: 40px;
`,L=c.default.label.withConfig({componentId:"zh__sc-a63223ee-6"})`
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
`,P=c.default.input.withConfig({componentId:"zh__sc-a63223ee-7"})`
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
`;e.s(["default",0,$],7311)},3448,e=>{"use strict";var t=e.i(9735),n=e.i(25644);let i=(0,e.i(38797).default)((0,t.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4"}),"Person");var o=e.i(65782);e.i(3159);var l=e.i(46907),r=e.i(22803),c=e.i(43174),d=e.i(21771);function s(e){if(!d.default.is(e))return"-";let[t,n,i]=e.split("-");return`${t}년 ${Number(n)}월 ${Number(i)}일`}let a=(0,l.observer)(function(){let{selectedClientId:e,representativeContract:l,currentServiceType:r}=c.default.client.info.byClient,d=l?.client??null;if(null===e||null===d)return(0,t.jsx)(C,{children:"서비스를 선택한 뒤 이용자를 선택해 주세요."});let a=function(e){if(null===e)return"unknown";let t=e.trim().match(/^(\d{6})-?(\d)(\d{0,6})$/);if(null===t)return"unknown";switch(t[2]){case"1":case"3":return"male";case"2":case"4":return"female";default:return"unknown"}}(d.residentRegistrationNumber),I=d.name,k=l?.grade?`${l.grade}등급`:"-",$=null===r?"-":`일상돌봄 ${"MEAL"===r?"식사관리 서비스":"영양관리 서비스"} - ${"MEAL"===r?"500901":"500401"}`,S=s(l?.contractStartDate??""),O=s(l?.contractEndDate??""),F=s(l?.serviceStartDate??""),E=s(l?.serviceEndDate??"");return(0,t.jsx)(f,{children:(0,t.jsxs)(h,{children:[(0,t.jsx)(p,{children:"male"===a?(0,t.jsx)(n.default,{sx:{fontSize:53},htmlColor:"#C6D2FF"}):"female"===a?(0,t.jsx)(o.default,{sx:{fontSize:53},htmlColor:"#C6D2FF"}):(0,t.jsx)(i,{sx:{fontSize:53},htmlColor:"#C6D2FF"})}),(0,t.jsxs)(u,{children:[(0,t.jsxs)(x,{children:[(0,t.jsx)(g,{children:I}),(0,t.jsxs)(m,{children:[(0,t.jsx)(b,{children:k}),(0,t.jsx)(b,{children:$})]})]}),(0,t.jsxs)(w,{children:[(0,t.jsxs)(j,{children:[(0,t.jsx)(y,{children:"계약 기간"}),(0,t.jsx)(_,{children:S}),(0,t.jsx)(v,{children:"~"}),(0,t.jsx)(_,{children:O})]}),(0,t.jsx)(z,{}),(0,t.jsxs)(j,{children:[(0,t.jsx)(y,{children:"서비스 기간"}),(0,t.jsx)(_,{children:F}),(0,t.jsx)(v,{children:"~"}),(0,t.jsx)(_,{children:E})]})]})]})]})})}),f=r.default.div.withConfig({componentId:"zh__sc-9275bce-0"})`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  width: 100%;
  height: 136px;
  padding: 16px 24px;

  background: #fff;
`,h=r.default.div.withConfig({componentId:"zh__sc-9275bce-1"})`
  display: flex;
  gap: 24px;
  align-items: center;
  width: 100%;
`,p=r.default.div.withConfig({componentId:"zh__sc-9275bce-2"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 80px;
  height: 80px;
  border-radius: 999px;

  background: #f4f2ff;
`,u=r.default.div.withConfig({componentId:"zh__sc-9275bce-3"})`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  gap: 16px;
  justify-content: center;

  min-width: 0;
`,x=r.default.div.withConfig({componentId:"zh__sc-9275bce-4"})`
  display: flex;
  gap: 16px;
  align-items: center;
  min-width: 0;
`,g=r.default.div.withConfig({componentId:"zh__sc-9275bce-5"})`
  font-size: 24px;
  font-weight: 700;
  line-height: 20px;
  color: #0a0a0a;
`,m=r.default.div.withConfig({componentId:"zh__sc-9275bce-6"})`
  overflow: hidden;
  display: flex;
  gap: 4px;
  align-items: center;

  min-width: 0;
`,b=r.default.div.withConfig({componentId:"zh__sc-9275bce-7"})`
  overflow: hidden;

  padding: 2px 12px;
  border: 1px solid #d1d5db;
  border-radius: 99px;

  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: #0a0a0a;
  white-space: nowrap;
`,w=r.default.div.withConfig({componentId:"zh__sc-9275bce-8"})`
  display: flex;
  gap: 12px;
  align-items: center;
  min-width: 0;
`,j=r.default.div.withConfig({componentId:"zh__sc-9275bce-9"})`
  display: flex;
  gap: 8px;
  align-items: center;

  min-width: 0;

  font-size: 18px;
  line-height: 20px;
  color: #0a0a0a;
  white-space: nowrap;
`,y=r.default.span.withConfig({componentId:"zh__sc-9275bce-10"})`
  font-weight: 700;
`,_=r.default.span.withConfig({componentId:"zh__sc-9275bce-11"})`
  font-weight: 400;
`,v=r.default.span.withConfig({componentId:"zh__sc-9275bce-12"})`
  font-weight: 400;
`,z=r.default.div.withConfig({componentId:"zh__sc-9275bce-13"})`
  width: 1px;
  height: 24px;
  background: #e5e7eb;
`,C=r.default.div.withConfig({componentId:"zh__sc-9275bce-14"})`
  width: 100%;
  padding: 16px 24px;
  border-bottom: 1px solid #e5e7eb;

  font-size: 14px;
  color: #6b7280;

  background: #fff;
`;e.s(["default",0,a],3448)},92712,e=>{"use strict";var t=e.i(9735),n=e.i(33261),i=e.i(22803);let o=i.default.div.withConfig({componentId:"zh__sc-b10c1886-0"})`
  display: flex;
  align-self: flex-start;

  width: 100%;
  border-top: 1px solid #e5e7eb;
  border-bottom: 1px solid #e5e7eb;
`,l=i.default.button.withConfig({componentId:"zh__sc-b10c1886-1"})`
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
`;e.s(["default",0,function(){let e=(0,n.usePathname)(),i=(0,n.useRouter)(),r=(0,n.useSearchParams)(),c=e.endsWith("/basic"),d=e.endsWith("/docs"),s=e=>{let t=r.toString();return""===t?e:`${e}?${t}`},a=t=>{if(!e.endsWith(`/${t}`)){if(e.endsWith("/basic"))return void i.push(s(e.replace(/\/basic$/,`/${t}`)));e.endsWith("/docs")&&i.push(s(e.replace(/\/docs$/,`/${t}`)))}};return(0,t.jsxs)(o,{children:[(0,t.jsx)(l,{type:"button",$active:c,onClick:()=>a("basic"),children:"기본정보"}),(0,t.jsx)(l,{type:"button",$active:d,onClick:()=>a("docs"),children:"서류관리"})]})}])}]);