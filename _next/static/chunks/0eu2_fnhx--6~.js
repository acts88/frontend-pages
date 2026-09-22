(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,67096,33832,e=>{"use strict";var t=e.i(38797),i=e.i(9735);let n=(0,t.default)((0,i.jsx)("path",{d:"m5 9 1.41 1.41L11 5.83V22h2V5.83l4.59 4.59L19 9l-7-7z"}),"North");e.s(["default",0,n],67096);let l=(0,t.default)((0,i.jsx)("path",{d:"m19 15-1.41-1.41L13 18.17V2h-2v16.17l-4.59-4.59L5 15l7 7z"}),"South");e.s(["default",0,l],33832)},33592,e=>{"use strict";var t=e.i(7744),i=e.i(4153);function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}var l=(0,t.forwardRef)(function(e,i){var l=e.color,r=e.size,a=void 0===r?24:r,o=function(e,t){if(null==e)return{};var i,n,l=function(e,t){if(null==e)return{};var i,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(l[i]=e[i]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],!(t.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(e,i)&&(l[i]=e[i])}return l}(e,["color","size"]);return t.default.createElement("svg",n({ref:i,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:void 0===l?"currentColor":l,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),t.default.createElement("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),t.default.createElement("polyline",{points:"14 2 14 8 20 8"}),t.default.createElement("line",{x1:"16",y1:"13",x2:"8",y2:"13"}),t.default.createElement("line",{x1:"16",y1:"17",x2:"8",y2:"17"}),t.default.createElement("polyline",{points:"10 9 9 9 8 9"}))});l.propTypes={color:i.default.string,size:i.default.oneOfType([i.default.string,i.default.number])},l.displayName="FileText",e.s(["FileText",0,l],33592)},82325,e=>{"use strict";var t=e.i(9735),i=e.i(38803);e.i(3159);var n=e.i(46907),l=e.i(43174),r=e.i(67096),a=e.i(33832),o=e.i(7744),d=e.i(64954),s=e.i(27997),c=e.i(12945),f=e.i(97861),h=e.i(86400),p=e.i(44968),u=e.i(91916);function x({label:e,width:i,sortValue:n,currentSortKey:l,currentSortOrder:o,onSort:d}){let s=l===n,c=s?o:({id:"desc",name:"asc"})[n],f=s?"#131416":"#9ca3af";return(0,t.jsx)(W,{style:{width:i},children:(0,t.jsx)(D,{type:"button",onClick:()=>d(n),children:(0,t.jsxs)(O,{children:[(0,t.jsx)(A,{children:e}),(0,t.jsx)(L,{children:"desc"===c?(0,t.jsx)(r.default,{sx:{fontSize:14,color:f}}):(0,t.jsx)(a.default,{sx:{fontSize:14,color:f}})})]})})})}let g=e=>null!==e&&h.default.brand.calendarDateString.is(e)?e.replaceAll("-",""):"",m=(0,n.observer)(function(){let{paginatedServiceWorkerList:e,pageStartIndex:i,pageCount:n,visiblePage:r,filteredServiceWorkerList:a,highlightedServiceWorkerId:d,pageSize:s,sortKey:m,sortOrder:w,setPage:y,setHighlightedServiceWorkerId:v,setSort:E}=l.default.serviceWorker.info.byServiceWorker,{show:D}=l.default.modal.serviceWorkerDetail,A=(0,o.useRef)(null);(0,o.useEffect)(()=>{if(null===d)return;let e=a.findIndex(e=>e.id===d);-1!==e&&y(Math.floor(e/s)+1)},[a,d,s,y]),(0,o.useEffect)(()=>{if(null===d)return;let e=window.requestAnimationFrame(()=>{let e=A.current?.querySelector(`tr[data-service-worker-id="${d}"]`);e?.scrollIntoView({block:"nearest",behavior:"auto"})});return()=>{window.cancelAnimationFrame(e)}},[e,d]);let O=e=>{E(e)};return(0,t.jsxs)(j,{children:[(0,t.jsx)(_,{children:(0,t.jsxs)(z,{ref:A,children:[(0,t.jsx)(S,{children:(0,t.jsxs)(I,{children:[(0,t.jsx)(W,{style:{width:84},children:"순번"}),(0,t.jsx)(x,{label:"관리번호",width:84,sortValue:"id",currentSortKey:m,currentSortOrder:w,onSort:O}),(0,t.jsx)(x,{label:"성명",width:150,sortValue:"name",currentSortKey:m,currentSortOrder:w,onSort:O}),(0,t.jsx)(W,{style:{width:92},children:"생년월일"}),(0,t.jsxs)(W,{style:{width:86},children:["연령",(0,t.jsx)("br",{}),"(만 나이)"]}),(0,t.jsx)(W,{style:{width:55},children:"성별"}),(0,t.jsx)(W,{style:{width:187},children:"휴대폰"}),(0,t.jsx)(W,{style:{width:443},children:"주소"}),(0,t.jsx)(W,{style:{width:78},children:"상태"}),(0,t.jsx)(W,{style:{width:252},children:"계약시작일 - 종료일 (근속기간)"}),(0,t.jsx)(W,{style:{width:130},children:"관리"})]})}),(0,t.jsx)($,{children:e.map((e,n)=>{let l,r,a,{id:o,name:s,residentRegistrationNumber:x,gender:m,phoneNumber:w,address:y,addressDetail:j,employmentContracts:_}=e,k=null===x?null:h.default.brand.maskedResidentRegistrationNumber.extractInfo(x),C=k?.birthDate??"-",z=null===k?"-":k.age,S=null===m?"-":c.default[m].label.at(0),$=[y,j].filter(e=>"string"==typeof e&&""!==e.trim()).join(" "),E=(0,p.getRepresentativeEmploymentContract)(_),W=E?.contractStartDate??null,A=E?.contractEndDate??null,O=null===W?"-":(l=g(W),r=g(A),a=(0,p.getEmploymentContractTenureLabel)(_),""===l?"-":""===r?`${l} - (${a})`:`${l} - ${r} (${a})`),L=(0,p.getRepresentativeContractExpirationReminder)(_.map(e=>({contractId:e.id,contractStatus:e.status,contractStartDate:e.contractStartDate,contractEndDate:e.contractEndDate})));return(0,t.jsxs)(I,{"data-service-worker-id":o,$status:o===d?"highlighted":void 0,onClick:()=>{v(null),D(o)},children:[(0,t.jsx)(T,{style:{width:84},children:i+n+1}),(0,t.jsx)(T,{style:{width:84},children:o}),(0,t.jsx)(T,{style:{width:150},children:s}),(0,t.jsx)(T,{style:{width:92},children:C}),(0,t.jsx)(T,{style:{width:86},children:z}),(0,t.jsx)(T,{style:{width:55},children:S}),(0,t.jsx)(T,{style:{width:187},children:(0,t.jsx)(b,{serviceWorkerId:o,serviceWorkerCreatedAt:e.createdAt,field:"phoneNumber",value:w??e.contact})}),(0,t.jsx)(T,{style:{width:443},children:(0,t.jsx)(b,{serviceWorkerId:o,serviceWorkerCreatedAt:e.createdAt,field:"address",value:$})}),(0,t.jsx)(T,{style:{width:78},children:f.default[(0,u.getServiceWorkerUiStatus)(e)].label}),(0,t.jsx)(T,{style:{width:252,justifyContent:null===W?"center":"flex-start"},children:(0,t.jsxs)(F,{children:[(0,t.jsx)("span",{children:O}),null!==L?(0,t.jsx)(R,{$color:L.color,children:L.remainingDays<0?`계약 만료 ${Math.abs(L.remainingDays)}일 지남`:`계약 만료 ${L.remainingDays}일 남음`}):null]})}),(0,t.jsx)(T,{style:{width:130},children:(0,t.jsx)(P,{onClick:e=>{e.stopPropagation(),v(null),D(o)},children:"상세보기"})})]},o)})})]})}),(0,t.jsxs)(k,{children:[(0,t.jsx)(C,{type:"button",disabled:1===r,onClick:()=>y(r-1),children:"‹ 이전"}),Array.from({length:n},(e,t)=>t+1).map(e=>(0,t.jsx)(C,{type:"button",$active:e===r,onClick:()=>y(e),children:e},e)),(0,t.jsx)(C,{type:"button",disabled:r===n,onClick:()=>y(r+1),children:"다음 ›"})]})]})});function b({serviceWorkerId:e,serviceWorkerCreatedAt:i,field:n,value:l}){let[r,a]=(0,o.useState)([]),[s,c]=(0,o.useState)(!1),f=null==l||""===l.trim()?"-":l.trim(),h=[...r,{value:f,description:v(i)}].map((e,t)=>({...e,selectValue:`${t}:${e.value}`})),p=h.find(e=>e.value===f),u=async()=>{if(s)return;c(!0);let t="address"===n?await y(e):await w(e,n,i);null!==t&&a(t.sort((e,t)=>new Date(t.createdAt).getTime()-new Date(e.createdAt).getTime()))};return(0,t.jsx)(E,{onPointerDown:e=>{e.stopPropagation(),u()},onClickCapture:e=>e.stopPropagation(),children:(0,t.jsx)(d.default.Input.Select,{style:{width:"100%",height:32,padding:"4px 8px",fontSize:14,color:"#464c53"},value:p?.selectValue??"",onChange:()=>void 0,children:h.map(e=>(0,t.jsx)("option",{value:e.selectValue,"data-description":e.description||void 0,children:e.value},e.selectValue))})})}async function w(e,t,i){let[n,r]=await l.default.serviceWorker.info.byServiceWorker.getServiceWorkerChangeHistory(e,t);return null!==n||null===r?null:r.slice().sort((e,t)=>new Date(e.createdAt).getTime()-new Date(t.createdAt).getTime()).flatMap(({oldValue:e,newValue:t,createdAt:n},l)=>{let r=[];return 0===l&&null!==e&&""!==e.trim()&&r.push({createdAt:i,value:e.trim(),description:v(i)}),null!==t&&""!==t.trim()&&r.push({value:t.trim(),createdAt:n,description:v(n)}),r})}async function y(e){let[t,i]=await Promise.all([l.default.serviceWorker.info.byServiceWorker.getServiceWorkerChangeHistory(e,"address"),l.default.serviceWorker.info.byServiceWorker.getServiceWorkerChangeHistory(e,"addressDetail")]);if(null!==t[0]||null!==i[0]||null===t[1]||null===i[1])return null;let n=new Map,r=(e,t)=>{e.forEach(({newValue:e,createdAt:i})=>{let l=n.get(i)??{};l[t]=e?.trim()??"",n.set(i,l)})};r(t[1],"address"),r(i[1],"addressDetail");let a="",o="";return Array.from(n.entries()).sort(([e],[t])=>new Date(e).getTime()-new Date(t).getTime()).map(([e,t])=>(a=t.address??a,o=t.addressDetail??o,{createdAt:e,value:[a,o].filter(e=>""!==e).join(" ")||"-",description:v(e)}))}function v(e){let t=new Date(e);return Number.isNaN(t.getTime())?"":`${t.getFullYear()}.${String(t.getMonth()+1).padStart(2,"0")}.${String(t.getDate()).padStart(2,"0")} 추가됨`}let j=i.default.section.withConfig({componentId:"zh__sc-2f4a79ac-0"})`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
  min-width: 0;
  min-height: 0;
`,_=i.default.section.withConfig({componentId:"zh__sc-2f4a79ac-1"})`
  overflow: auto;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
  min-width: 0;
  min-height: 0;
`,k=i.default.div.withConfig({componentId:"zh__sc-2f4a79ac-2"})`
  display: flex;
  gap: 6px;
  align-items: center;
  align-self: stretch;
  justify-content: center;

  padding: 8px;
`,C=i.default.button.withConfig({componentId:"zh__sc-2f4a79ac-3"})`
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  min-width: 32px;
  min-height: 36px;
  padding: 8px 11px;
  border: 1px solid ${({$active:e})=>!0===e?"#4a36ff":"transparent"};
  border-radius: 6px;

  font-size: 14px;
  font-weight: ${({$active:e})=>!0===e?700:500};
  line-height: normal;
  color: ${({$active:e})=>!0===e?"#fff":"#404552"};

  background: ${({$active:e})=>!0===e?"#4a36ff":"#fff"};

  &:disabled {
    cursor: default;
    color: #9ca3af;
  }
`,z=i.default.table.withConfig({componentId:"zh__sc-2f4a79ac-4"})`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;

  width: max-content;
  min-width: 100%;
  min-height: 0;
`,I=i.default.tr.withConfig({componentId:"zh__sc-2f4a79ac-5"})`
  cursor: pointer;

  display: flex;
  flex-shrink: 0;
  align-items: flex-start;
  align-self: stretch;
  justify-content: flex-start;

  width: max-content;
  min-height: 52px;
  border-bottom: 1px solid #e5e7eb;

  background: ${({$status:e})=>"highlighted"===e?"#EEF2FF":"transparent"};

  &:hover {
    background: #f9fafb;
  }

  &:active {
    background: #f2f4f7;
  }
`,S=i.default.thead.withConfig({componentId:"zh__sc-2f4a79ac-6"})`
  position: sticky;
  z-index: 1;
  top: 0;
  width: max-content;

  ${I} {
    cursor: default;

    align-items: center;

    height: 52px;
    border-top: 1px solid #e5e7eb;

    background: #f9fafb;
  }
`,$=i.default.tbody.withConfig({componentId:"zh__sc-2f4a79ac-7"})`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;

  width: max-content;
  min-height: 0;
`,E=i.default.div.withConfig({componentId:"zh__sc-2f4a79ac-8"})`
  width: 100%;
`,W=i.default.th.withConfig({componentId:"zh__sc-2f4a79ac-9"})`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  align-self: stretch;
  justify-content: center;

  box-sizing: border-box;
  min-height: 52px;
  padding: 8px;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 16px;
  color: #131416;
`,D=i.default.button.withConfig({componentId:"zh__sc-2f4a79ac-10"})`
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
`,A=i.default.span.withConfig({componentId:"zh__sc-2f4a79ac-11"})`
  display: inline-flex;
  align-items: center;
`,O=i.default.span.withConfig({componentId:"zh__sc-2f4a79ac-12"})`
  position: relative;
  display: inline-flex;
  align-items: center;
`,L=i.default.span.withConfig({componentId:"zh__sc-2f4a79ac-13"})`
  position: absolute;
  top: 50%;
  left: calc(100% + 2px);
  transform: translateY(-50%);

  display: inline-flex;
  align-items: center;
`,T=i.default.td.withConfig({componentId:"zh__sc-2f4a79ac-14"})`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  align-self: stretch;
  justify-content: center;

  box-sizing: border-box;
  min-height: 52px;
  padding: 8px;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 16px;
  color: #464c53;
  text-align: center;
  overflow-wrap: anywhere;
  white-space: normal;
`,F=i.default.div.withConfig({componentId:"zh__sc-2f4a79ac-15"})`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;

  min-width: 0;

  text-align: left;
  overflow-wrap: anywhere;
  white-space: normal;

  & > span {
    min-width: 0;
  }
`,R=(0,i.default)(s.default).withConfig({componentId:"zh__sc-2f4a79ac-16"})`
  height: auto;
  padding: 8px;
`,P=(0,i.default)(d.default.Button.Outlined).withConfig({componentId:"zh__sc-2f4a79ac-17"})`
  display: flex;
  gap: 4px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`;var V=e.i(553),M=e.i(10957);function N(e){return Object.prototype.hasOwnProperty.call(f.default,e)}let U=[{key:M.FILTER_ALL_VALUE,label:"전체"},...Object.keys(f.default).filter(N).map(e=>({key:e,label:f.default[e].label}))],B=(0,n.observer)(function(){let e=l.default.serviceWorker.info.byServiceWorker,{filteredServiceWorkerList:i,totalCount:n,statusFilter:r,setStatusFilter:a,searchText:o,setSearchText:s}=e;return(0,t.jsxs)(K,{children:[(0,t.jsxs)(H,{children:[(0,t.jsxs)(q,{children:[(0,t.jsx)(Y,{children:"제공인력 목록"}),(0,t.jsx)(X,{children:r===M.FILTER_ALL_VALUE?`(전체 ${n}명)`:`(${f.default[r].label} ${i.length}명 / 전체 ${n}명)`})]}),(0,t.jsx)(G,{role:"tablist","aria-label":"제공인력 상태 필터",children:U.map(e=>{let i=r===e.key;return(0,t.jsx)(J,{type:"button",role:"tab","aria-selected":i,$active:i,onClick:()=>{var t;(t=e.key)===M.FILTER_ALL_VALUE?a(t):N(t)&&a(t)},children:e.label},e.key)})})]}),(0,t.jsxs)(Z,{children:[(0,t.jsxs)(Q,{children:[(0,t.jsx)(ee,{value:o,onChange:e=>s(e.target.value),placeholder:"제공인력명 검색","aria-label":"제공인력명 검색"}),(0,t.jsx)(V.Search,{size:16,color:"#0a0a0a"})]}),(0,t.jsxs)(d.default.Input.Select,{value:String(e.pageSize),style:{width:143},onChange:t=>e.setPageSize(Number(t.currentTarget.value)),children:[(0,t.jsx)("option",{value:"15",children:"15명씩 보기"}),(0,t.jsx)("option",{value:"30",children:"30명씩 보기"}),(0,t.jsx)("option",{value:"50",children:"50명씩 보기"}),(0,t.jsx)("option",{value:"100",children:"100명씩 보기"})]})]})]})}),K=i.default.div.withConfig({componentId:"zh__sc-d1f896b8-0"})`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;

  padding: 24px 16px;
`,H=i.default.div.withConfig({componentId:"zh__sc-d1f896b8-1"})`
  display: flex;
  gap: 24px;
  align-items: center;
  min-width: 0;
`,q=i.default.div.withConfig({componentId:"zh__sc-d1f896b8-2"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,Y=i.default.div.withConfig({componentId:"zh__sc-d1f896b8-3"})`
  font-size: 20px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
  letter-spacing: -0.5px;
`,X=i.default.div.withConfig({componentId:"zh__sc-d1f896b8-4"})`
  font-size: 20px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #464c53;
  letter-spacing: -0.5px;
`,G=i.default.div.withConfig({componentId:"zh__sc-d1f896b8-5"})`
  overflow: hidden;
  display: flex;
  align-items: center;

  border: 1px solid #b1b8be;
  border-radius: 8px;

  background: #fff;
`,J=i.default.button.withConfig({componentId:"zh__sc-d1f896b8-6"})`
  cursor: pointer;

  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: center;

  min-width: 80px;
  height: 40px;
  padding: 0 16px;

  font-size: 16px;
  font-weight: 700;
  color: ${({$active:e})=>e?"#fff":"#464C53"};
  text-align: center;

  background: ${({$active:e})=>e?"#4F39F6":"#fff"};

  &:not(:last-child) {
    border-right: 1px solid #d0d4dc;
  }
`,Q=i.default.label.withConfig({componentId:"zh__sc-d1f896b8-7"})`
  cursor: text;

  display: flex;
  gap: 8px;
  align-items: center;

  width: 180px;
  height: 36px;
  padding: 8px 16px;
  border: 0.75px solid #e5e7eb;
  border-radius: 6px;

  background: #fff;

  &:hover {
    border-color: #b8c0d0;
    background: #fbfcff;
  }

  &:focus-within {
    border-color: #5635ff;
    background: #fbfcff;
  }
`,Z=i.default.div.withConfig({componentId:"zh__sc-d1f896b8-8"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,ee=i.default.input.withConfig({componentId:"zh__sc-d1f896b8-9"})`
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
`,et=(0,n.observer)(function(){let{listStatus:e}=l.default.serviceWorker.info.byServiceWorker;return(0,t.jsxs)(ei,{children:[(0,t.jsx)(B,{}),(0,t.jsx)(en,{children:"loading"===e?(0,t.jsx)(el,{children:"불러오는 중입니다."}):"error"===e?(0,t.jsx)(el,{children:"목록을 불러오지 못했습니다."}):(0,t.jsx)(m,{})})]})}),ei=i.default.div.withConfig({componentId:"zh__sc-a7645a37-0"})`
  overflow: hidden;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-self: stretch;

  width: 100%;
  min-width: 0;
  min-height: 0;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
`,en=i.default.div.withConfig({componentId:"zh__sc-a7645a37-1"})`
  overflow: hidden;
  display: flex;
  flex: 1;
  align-items: stretch;

  font-size: 14px;
  color: #4b5563;
`,el=i.default.div.withConfig({componentId:"zh__sc-a7645a37-2"})`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;

  color: #6b7280;
`;var er=e.i(33592),ea=e.i(5543),eo=e.i(24045),ed=e.i(7242);let es=(0,n.observer)(function(){let{activeServiceList:e,currentServiceType:i,setCurrentServiceType:n}=l.default.serviceWorker.info.byServiceWorker,{show:r}=l.default.modal.serviceWorkerCreate;return(0,t.jsxs)(ec,{children:[(0,t.jsxs)(ef,{children:[(0,t.jsx)(ep,{children:"서비스 구분"}),(0,t.jsx)(eu,{children:e.map(e=>(0,t.jsxs)(ex,{type:"button",$active:i===e.type,onClick:()=>n(e.type),children:[ed.default[e.type].label," 서비스"]},e.type))})]}),(0,t.jsxs)(eh,{children:[(0,t.jsxs)(em,{type:"button",onClick:()=>{l.default.modal.excelFileUpload.show("SERVICE_WORKER_EXCEL_IMPORT")},children:[(0,t.jsx)(eo.Upload,{size:16}),"엑셀 파일 업로드하기"]}),(0,t.jsxs)(em,{type:"button",onClick:()=>{l.default.serviceWorker.info.byServiceWorker.downloadServiceWorkerListExcel()},children:[(0,t.jsx)(er.FileText,{size:16}),"엑셀로 다운로드 받기"]}),(0,t.jsxs)(eg,{type:"button",onClick:()=>{r("create",i??"MEAL")},children:[(0,t.jsx)(ea.Plus,{size:20}),"신규 제공인력 등록"]})]})]})}),ec=i.default.div.withConfig({componentId:"zh__sc-8db8a75b-0"})`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;
`,ef=i.default.div.withConfig({componentId:"zh__sc-8db8a75b-1"})`
  display: flex;
  gap: 24px;
  align-items: center;
`,eh=i.default.div.withConfig({componentId:"zh__sc-8db8a75b-2"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,ep=i.default.p.withConfig({componentId:"zh__sc-8db8a75b-3"})`
  font-size: 20px;
  font-weight: 700;
  line-height: normal;
  color: #0a0a0a;
  letter-spacing: -0.5px;
  white-space: nowrap;
`,eu=i.default.div.withConfig({componentId:"zh__sc-8db8a75b-4"})`
  overflow: hidden;
  display: flex;

  height: 48px;
  border: 1px solid #b1b8be;
  border-radius: 8px;

  background: #fff;
`,ex=i.default.button.withConfig({componentId:"zh__sc-8db8a75b-5"})`
  cursor: pointer;

  min-width: 80px;
  height: 100%;
  padding: 0 16px;
  border: none;

  font-size: 16px;
  font-weight: 700;
  line-height: 1.5;
  color: ${({$active:e})=>e?"#fff":"#464c53"};
  white-space: nowrap;

  background: ${({$active:e})=>e?"#4f39f6":"transparent"};
`,eg=(0,i.default)(d.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-8db8a75b-6"})`
  flex-shrink: 0;
  gap: 4px;

  height: 36px;
  padding: 8px 16px;

  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
`,em=(0,i.default)(d.default.Button.Outlined).withConfig({componentId:"zh__sc-8db8a75b-7"})`
  flex-shrink: 0;
  gap: 4px;

  height: 36px;
  padding: 8px 16px;

  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
`,eb=i.default.div.withConfig({componentId:"zh__sc-2072926e-0"})`
  overflow: hidden;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 24px;
  align-items: stretch;
  align-self: stretch;

  width: 100%;
  min-width: 0;
  min-height: 0;
  padding: 16px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;

  background: #fff;
`;e.s(["default",0,function(){return(0,t.jsxs)(eb,{children:[(0,t.jsx)(es,{}),(0,t.jsx)(et,{})]})}],82325)}]);