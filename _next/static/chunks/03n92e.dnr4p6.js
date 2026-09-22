(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,67096,33832,e=>{"use strict";var t=e.i(38797),n=e.i(9735);let i=(0,t.default)((0,n.jsx)("path",{d:"m5 9 1.41 1.41L11 5.83V22h2V5.83l4.59 4.59L19 9l-7-7z"}),"North");e.s(["default",0,i],67096);let l=(0,t.default)((0,n.jsx)("path",{d:"m19 15-1.41-1.41L13 18.17V2h-2v16.17l-4.59-4.59L5 15l7 7z"}),"South");e.s(["default",0,l],33832)},33592,e=>{"use strict";var t=e.i(7744),n=e.i(4153);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var l=(0,t.forwardRef)(function(e,n){var l=e.color,a=e.size,r=void 0===a?24:a,o=function(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["color","size"]);return t.default.createElement("svg",i({ref:n,xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:void 0===l?"currentColor":l,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),t.default.createElement("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),t.default.createElement("polyline",{points:"14 2 14 8 20 8"}),t.default.createElement("line",{x1:"16",y1:"13",x2:"8",y2:"13"}),t.default.createElement("line",{x1:"16",y1:"17",x2:"8",y2:"17"}),t.default.createElement("polyline",{points:"10 9 9 9 8 9"}))});l.propTypes={color:n.default.string,size:n.default.oneOfType([n.default.string,n.default.number])},l.displayName="FileText",e.s(["FileText",0,l],33592)},47635,e=>{"use strict";var t=e.i(9735);e.i(3159);var n=e.i(46907),i=e.i(7744),l=e.i(553),a=e.i(38803),r=e.i(64954),o=e.i(10957),d=e.i(13680),s=e.i(43174),c=e.i(67096),h=e.i(33832),f=e.i(27997),p=e.i(79786);let u=[{value:"contractEndDateAsc",label:"종료일 빠른순(임박순)"},{value:"contractEndDateDesc",label:"종료일 늦은순"},{value:"contractStartDateDesc",label:"최근 계약순"},{value:"contractStartDateAsc",label:"오래된 계약순"},{value:"none",label:"선택안함"}];function x({label:e,cellStyle:n,sortValue:i,currentSortKey:l,currentSortOrder:a,onSort:r}){let o=l===i,d=o?a:({distinctNumber:"desc",name:"asc"})[i],s=o?"#131416":"#9ca3af";return(0,t.jsx)(v,{style:n,children:(0,t.jsx)(C,{type:"button",onClick:()=>r(i),children:(0,t.jsxs)(I,{children:[(0,t.jsx)(z,{children:e}),(0,t.jsx)(k,{children:"desc"===d?(0,t.jsx)(c.default,{sx:{fontSize:14,color:s}}):(0,t.jsx)(h.default,{sx:{fontSize:14,color:s}})})]})})})}let g=(0,n.observer)(function({clients:e,startIndex:n}){let{currentServiceType:l,contractSort:a,highlightedClientId:o,getClientUiStatus:c,openClientDetail:h,setHighlightedClientId:g,setSelectedClientId:C,setContractSort:z,sortKey:I,sortOrder:k,setSort:E}=s.default.client.info.byClient,L="DISABILITY_ACTIVITY_SUPPORT"===l,D=null===a?I:null,T=(0,i.useRef)(null),O=e=>{E(e)},M=e=>{g(null),C(e),h()};return(0,i.useEffect)(()=>{if(null===o)return;let e=window.requestAnimationFrame(()=>{let e=T.current?.querySelector(`tr[data-client-id="${o}"]`);e?.scrollIntoView({block:"nearest",behavior:"auto"})});return()=>{window.cancelAnimationFrame(e)}},[e,o]),(0,t.jsx)(m,{children:(0,t.jsxs)(w,{ref:T,children:[(0,t.jsx)(y,{children:(0,t.jsxs)(b,{children:[(0,t.jsx)(v,{style:{width:84},children:"순번"}),(0,t.jsx)(x,{label:"관리번호",cellStyle:{width:84},sortValue:"distinctNumber",currentSortKey:D,currentSortOrder:k,onSort:O}),(0,t.jsx)(x,{label:"성명",cellStyle:{width:150},sortValue:"name",currentSortKey:D,currentSortOrder:k,onSort:O}),(0,t.jsx)(v,{style:{width:92},children:"생년월일"}),(0,t.jsxs)(v,{style:{width:86},children:["연령",(0,t.jsx)("br",{}),"(만 나이)"]}),(0,t.jsx)(v,{style:{width:55},children:"성별"}),(0,t.jsx)(v,{style:{width:187},children:"휴대폰"}),(0,t.jsx)(v,{style:{width:443},children:"주소"}),L?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(v,{style:{width:78},children:"활동지원 구간"}),(0,t.jsx)(v,{style:{width:78},children:"소득 유형"})]}):(0,t.jsxs)(v,{style:{width:78},children:["바우처",(0,t.jsx)("br",{}),"등급"]}),(0,t.jsx)(v,{style:{width:78},children:"상태"}),(0,t.jsx)(v,{style:{width:252},children:(0,t.jsxs)(_,{children:[(0,t.jsx)("span",{children:"계약시작일 - 종료일 (N차)"}),(0,t.jsx)(r.default.Input.FilterDropdown,{ariaLabel:"계약일 정렬",isApplied:null!==a,options:u,value:a??"none",onChange:e=>{z("none"===e?null:e)}})]})}),(0,t.jsx)(v,{style:{width:130},children:"관리"})]})}),(0,t.jsx)(j,{children:e.map((e,i)=>{let l,a=e.id===o,r=e.representativeExpirationReminder,s="MALE"===e.gender?"남":"FEMALE"===e.gender?"여":"-",h=d.default[c(e.id)].label,u=null===e.grade||""===e.grade.trim()?"-":e.grade.startsWith("SPECIAL")?`특례 ${e.grade.slice(7)}`:e.grade.endsWith("구간")?e.grade:`${e.grade}구간`,x=null===e.incomeCategory?"-":p.default[e.incomeCategory].label,g=null!==e.contractStartDate||null!==e.contractEndDate?`${e.contractStartDate??"-"} - ${e.contractEndDate??"-"} (${e.serviceRound??"-"}차)`:"-";return(0,t.jsxs)(b,{"data-client-id":e.id,$status:a?"highlighted":void 0,onClick:()=>M(e.id),children:[(0,t.jsx)($,{style:{width:84},children:n+i+1}),(0,t.jsx)($,{style:{width:84},children:e.distinctNumber??"-"}),(0,t.jsx)($,{style:{width:150},children:(0,t.jsx)(A,{children:e.name||"-"})}),(0,t.jsx)($,{style:{width:92},children:null!==(l=e.birthDate)&&/^\d{4}-\d{2}-\d{2}$/.test(l)?l.slice(2).replaceAll("-",""):"-"}),(0,t.jsx)($,{style:{width:86},children:null===e.age?"-":`${e.age}`}),(0,t.jsx)($,{style:{width:55},children:s}),(0,t.jsx)($,{style:{width:187},children:(0,t.jsx)(S,{clientId:e.id,clientCreatedAt:e.createdAt,field:"phoneNumber",value:e.phoneNumber??e.contact})}),(0,t.jsx)($,{style:{width:443},children:(0,t.jsx)(S,{clientId:e.id,clientCreatedAt:e.createdAt,field:"address",value:[e.address,e.addressDetail].filter(e=>null!==e&&""!==e.trim()).join(" ")})}),L?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)($,{style:{width:78},children:u}),(0,t.jsx)($,{style:{width:78},children:x})]}):(0,t.jsx)($,{style:{width:78},children:e.grade??"-"}),(0,t.jsx)($,{style:{width:78},children:h}),(0,t.jsx)($,{style:{width:252},children:(0,t.jsxs)(F,{children:[(0,t.jsx)("span",{children:g}),null!==r?(0,t.jsx)(f.default,{$color:r.color,children:r.remainingDays<0?`계약 만료 ${Math.abs(r.remainingDays)}일 지남`:`계약 만료 ${r.remainingDays}일 전`}):null]})}),(0,t.jsx)($,{style:{width:130},children:(0,t.jsx)(V,{onClick:t=>{t.stopPropagation(),M(e.id)},children:"상세보기"})})]},e.id)})})]})})}),m=a.default.section.withConfig({componentId:"zh__sc-365c6c4-0"})`
  overflow: auto;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
  min-width: 0;
  min-height: 0;
`,w=a.default.table.withConfig({componentId:"zh__sc-365c6c4-1"})`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;

  width: max-content;
  min-width: 100%;
  min-height: 0;
`,b=a.default.tr.withConfig({componentId:"zh__sc-365c6c4-2"})`
  cursor: pointer;

  display: flex;
  flex-shrink: 0;
  align-items: flex-start;
  align-self: stretch;
  justify-content: flex-start;

  width: max-content;
  min-height: 52px;
  border-bottom: 1px solid #e5e7eb;

  background-color: ${({$status:e})=>"highlighted"===e?"#EEF2FF":"transparent"};

  &:hover {
    background-color: #f9fafb;
  }

  &:active {
    background-color: #f2f4f7;
  }
`,y=a.default.thead.withConfig({componentId:"zh__sc-365c6c4-3"})`
  position: sticky;
  z-index: 1;
  top: 0;
  width: max-content;

  ${b} {
    cursor: default;
    border-top: 1px solid #e5e7eb;
    background: #f9fafb;
  }
`,j=a.default.tbody.withConfig({componentId:"zh__sc-365c6c4-4"})`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;

  width: max-content;
  min-height: 0;
`,v=a.default.th.withConfig({componentId:"zh__sc-365c6c4-5"})`
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
  line-height: 16px; /* 100% */
  color: #131416;
`,_=a.default.div.withConfig({componentId:"zh__sc-365c6c4-6"})`
  display: flex;
  gap: 2px;
  align-items: center;
  justify-content: center;

  width: 100%;
`,C=a.default.button.withConfig({componentId:"zh__sc-365c6c4-7"})`
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
`,z=a.default.span.withConfig({componentId:"zh__sc-365c6c4-8"})`
  display: inline-flex;
  align-items: center;
`,I=a.default.span.withConfig({componentId:"zh__sc-365c6c4-9"})`
  position: relative;
  display: inline-flex;
  align-items: center;
`,k=a.default.span.withConfig({componentId:"zh__sc-365c6c4-10"})`
  position: absolute;
  top: 50%;
  left: calc(100% + 2px);
  transform: translateY(-50%);

  display: inline-flex;
  align-items: center;
`,$=a.default.td.withConfig({componentId:"zh__sc-365c6c4-11"})`
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
  line-height: 16px; /* 100% */
  color: #464c53;
  text-align: center;
  overflow-wrap: anywhere;
  white-space: normal;
`,A=a.default.span.withConfig({componentId:"zh__sc-365c6c4-12"})`
  overflow-wrap: anywhere;
`;function S({clientId:e,clientCreatedAt:n,field:l,value:a}){let o,[d,s]=(0,i.useState)([]),c=null==a||""===a.trim()?"-":a.trim(),h=(d[0]?.value===c?d:[...d,{value:c,description:Number.isNaN((o=new Date(n)).getTime())?"":`${o.getFullYear()}.${String(o.getMonth()+1).padStart(2,"0")}.${String(o.getDate()).padStart(2,"0")} 추가됨`}]).map((e,t)=>({...e,selectValue:`${t}:${e.value}`})),f=h.find(e=>e.value===c),p=async()=>{let t="address"===l?await L(e,n):await E(e,l,n);null!==t&&s(t.sort((e,t)=>new Date(t.createdAt).getTime()-new Date(e.createdAt).getTime()))};return(0,t.jsx)(T,{onPointerDown:e=>{e.stopPropagation()},onClickCapture:e=>e.stopPropagation(),children:(0,t.jsx)(r.default.Input.Select,{style:{width:"100%",height:32,padding:"4px 8px",fontSize:14,color:"#464c53"},value:f?.selectValue??"",onChange:()=>void 0,onOpenChange:e=>{e&&p()},children:h.map(e=>(0,t.jsx)("option",{value:e.selectValue,"data-description":e.description||void 0,children:e.value},e.selectValue))})})}async function E(e,t,n){let[i,l]=await s.default.client.info.byClient.getClientChangeHistory(e,t);return null!==i||null===l?null:l.slice().sort((e,t)=>new Date(e.createdAt).getTime()-new Date(t.createdAt).getTime()).flatMap(({oldValue:e,newValue:t,createdAt:i},l)=>{let a=[];return 0===l&&null!==e&&""!==e.trim()&&a.push({createdAt:n,value:e.trim(),description:D(n)}),null!==t&&""!==t.trim()&&a.push({createdAt:i,value:t.trim(),description:D(i)}),a})}async function L(e,t){let[n,i]=await Promise.all([s.default.client.info.byClient.getClientChangeHistory(e,"address"),s.default.client.info.byClient.getClientChangeHistory(e,"addressDetail")]);if(null!==n[0]||null!==i[0]||null===n[1]||null===i[1])return null;let l=new Map,a=(e,n)=>{e.slice().sort((e,t)=>new Date(e.createdAt).getTime()-new Date(t.createdAt).getTime()).forEach(({oldValue:e,newValue:i,createdAt:a},r)=>{if(0===r&&null!==e&&""!==e.trim()){let i=l.get(t)??{};i[n]=e.trim(),l.set(t,i)}let o=l.get(a)??{};o[n]=i?.trim()??"",l.set(a,o)})};a(n[1],"address"),a(i[1],"addressDetail");let r="",o="";return Array.from(l.entries()).sort(([e],[t])=>new Date(e).getTime()-new Date(t).getTime()).map(([e,t])=>(r=t.address??r,o=t.addressDetail??o,{createdAt:e,value:[r,o].filter(e=>""!==e).join(" ")||"-",description:D(e)})).filter(e=>"-"!==e.value)}function D(e){let t=new Date(e);return Number.isNaN(t.getTime())?"":`${t.getFullYear()}.${String(t.getMonth()+1).padStart(2,"0")}.${String(t.getDate()).padStart(2,"0")} 추가됨`}let T=a.default.div.withConfig({componentId:"zh__sc-365c6c4-13"})`
  width: 100%;
`,F=a.default.div.withConfig({componentId:"zh__sc-365c6c4-14"})`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;

  min-width: 0;

  overflow-wrap: anywhere;
  white-space: normal;

  & > span {
    min-width: 0;
  }
`,O=a.css`
  font-size: 16px;
  line-height: 14px;
  text-align: center;
`,V=(0,a.default)(r.default.Button.Outlined).withConfig({componentId:"zh__sc-365c6c4-15"})`
  ${O}
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;

  padding: 8px 16px;
`,M=[{key:o.FILTER_ALL_VALUE,label:"전체 이용자"},...Object.keys(d.default).filter(N).map(e=>({key:e,label:d.default[e].label}))];function N(e){return e in d.default}let P=(0,n.observer)(function(){let{filteredClients:e,totalCount:n,contractFilter:a,setContractFilter:c,setPhoneFilter:h,setAddressFilter:f,searchText:p,setSearchText:u,highlightedClientId:x}=s.default.client.info.byClient,[m,w]=(0,i.useState)(1),[b,y]=(0,i.useState)(15),j=Math.max(1,Math.ceil(e.length/b)),v=Math.min(m,j),_=(v-1)*b,C=e.slice(_,_+b);return(0,i.useEffect)(()=>{if(null===x)return;let t=e.findIndex(e=>e.id===x);if(-1===t){h(o.FILTER_ALL_VALUE),f(o.FILTER_ALL_VALUE),u("");return}let n=window.requestAnimationFrame(()=>{w(Math.floor(t/b)+1)});return()=>{window.cancelAnimationFrame(n)}},[e,x,b,f,h,u]),(0,t.jsxs)(R,{children:[(0,t.jsxs)(U,{children:[(0,t.jsxs)(B,{children:[(0,t.jsx)(Y,{children:"이용자 목록"}),(0,t.jsx)(H,{children:a===o.FILTER_ALL_VALUE?`(전체 ${n}명)`:`(${d.default[a].label} ${e.length}명 / 전체 ${n}명)`})]}),(0,t.jsxs)(K,{children:[(0,t.jsx)(q,{children:M.map(e=>(0,t.jsx)(W,{$active:a===e.key,type:"button",onClick:()=>(e=>{(e===o.FILTER_ALL_VALUE||N(e))&&(c(e),w(1))})(e.key),children:e.label.replace(" 이용자","")},e.key))}),(0,t.jsxs)(X,{children:[(0,t.jsxs)(Q,{children:[(0,t.jsx)(Z,{placeholder:"이용자명 검색",value:p,onChange:e=>{u(e.target.value),w(1)}}),(0,t.jsx)(l.Search,{color:"#0a0a0a",size:16})]}),(0,t.jsxs)(r.default.Input.Select,{value:String(b),style:{width:143},onChange:e=>{y(Number(e.currentTarget.value)),w(1)},children:[(0,t.jsx)("option",{value:"15",children:"15명씩 보기"}),(0,t.jsx)("option",{value:"30",children:"30명씩 보기"}),(0,t.jsx)("option",{value:"50",children:"50명씩 보기"}),(0,t.jsx)("option",{value:"100",children:"100명씩 보기"})]})]})]})]}),(0,t.jsx)(g,{clients:C,startIndex:_}),(0,t.jsxs)(G,{children:[(0,t.jsx)(J,{type:"button",disabled:1===v,onClick:()=>w(e=>Math.max(1,e-1)),children:"‹ 이전"}),Array.from({length:j},(e,t)=>t+1).map(e=>(0,t.jsx)(J,{type:"button",$active:e===v,onClick:()=>w(e),children:e},e)),(0,t.jsx)(J,{type:"button",disabled:v===j,onClick:()=>w(e=>Math.min(j,e+1)),children:"다음 ›"})]})]})}),R=a.default.div.withConfig({componentId:"zh__sc-a0b0dae2-0"})`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
  min-width: 0;
  min-height: 0;
`,U=a.default.div.withConfig({componentId:"zh__sc-a0b0dae2-1"})`
  display: flex;
  gap: 24px;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;

  padding: 24px 16px;
`,B=a.default.div.withConfig({componentId:"zh__sc-a0b0dae2-2"})`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`,Y=a.default.div.withConfig({componentId:"zh__sc-a0b0dae2-3"})`
  font-size: 20px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
  letter-spacing: -0.5px;
`,H=a.default.div.withConfig({componentId:"zh__sc-a0b0dae2-4"})`
  font-size: 20px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #464c53;
  letter-spacing: -0.5px;
`,K=a.default.div.withConfig({componentId:"zh__sc-a0b0dae2-5"})`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;

  height: 40px;
`,q=a.default.div.withConfig({componentId:"zh__sc-a0b0dae2-6"})`
  overflow: hidden;
  display: flex;

  height: 40px;
  border: 1px solid #b1b8be;
  border-radius: 8px;
`,W=a.default.button.withConfig({componentId:"zh__sc-a0b0dae2-7"})`
  cursor: pointer;

  min-width: 80px;
  padding: 0 16px;
  border: 0;
  border-right: 1px solid #b1b8be;

  font-size: 16px;
  font-weight: 700;
  color: ${e=>e.$active?"#fff":"#464c53"};

  background: ${e=>e.$active?"#4f39f6":"#fff"};

  &:last-child {
    border-right: 0;
  }
`,X=a.default.div.withConfig({componentId:"zh__sc-a0b0dae2-8"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,G=a.default.div.withConfig({componentId:"zh__sc-a0b0dae2-9"})`
  display: flex;
  gap: 6px;
  align-items: center;
  align-self: stretch;
  justify-content: center;

  padding: 8px;
`,J=a.default.button.withConfig({componentId:"zh__sc-a0b0dae2-10"})`
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
`,Q=a.default.label.withConfig({componentId:"zh__sc-a0b0dae2-11"})`
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
`,Z=a.default.input.withConfig({componentId:"zh__sc-a0b0dae2-12"})`
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
`;e.s(["default",0,P],47635)},52024,e=>{"use strict";var t=e.i(9735);e.i(3159);var n=e.i(46907),i=e.i(33592),l=e.i(5543),a=e.i(24045),r=e.i(38803),o=e.i(64954),d=e.i(7242),s=e.i(43174);let c=(0,n.observer)(function(){let{currentServiceType:e,setCurrentServiceType:n}=s.default.client.info.byClient,{show:r}=s.default.modal.clientCreate;return(0,t.jsxs)(h,{children:[(0,t.jsxs)(f,{children:[(0,t.jsx)(u,{children:"서비스 구분"}),(0,t.jsx)(x,{children:s.default.client.info.byClient.activeServiceList.map(i=>(0,t.jsxs)(g,{type:"button",$active:e===i.type,onClick:()=>n(i.type),children:[d.default[i.type].label," 서비스"]},i.type))})]}),(0,t.jsxs)(p,{children:[(0,t.jsxs)(w,{type:"button",onClick:()=>{s.default.modal.excelFileUpload.show("CLIENT_EXCEL_IMPORT")},children:[(0,t.jsx)(a.Upload,{size:16}),"엑셀 파일 업로드하기"]}),(0,t.jsxs)(w,{type:"button",onClick:()=>{s.default.client.info.byClient.downloadClientContractsExcel()},children:[(0,t.jsx)(i.FileText,{size:16}),"엑셀로 다운로드 받기"]}),(0,t.jsxs)(m,{type:"button",onClick:()=>{r("create",e??"MEAL")},children:[(0,t.jsx)(l.Plus,{size:20}),"신규 이용자 등록"]})]})]})}),h=r.default.div.withConfig({componentId:"zh__sc-bf25427f-0"})`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;
`,f=r.default.div.withConfig({componentId:"zh__sc-bf25427f-1"})`
  display: flex;
  gap: 24px;
  align-items: center;
`,p=r.default.div.withConfig({componentId:"zh__sc-bf25427f-2"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,u=r.default.p.withConfig({componentId:"zh__sc-bf25427f-3"})`
  font-size: 20px;
  font-weight: 700;
  line-height: normal;
  color: #0a0a0a;
  letter-spacing: -0.5px;
  white-space: nowrap;
`,x=r.default.div.withConfig({componentId:"zh__sc-bf25427f-4"})`
  overflow: hidden;
  display: flex;

  height: 48px;
  border: 1px solid #b1b8be;
  border-radius: 8px;

  background: #fff;
`,g=r.default.button.withConfig({componentId:"zh__sc-bf25427f-5"})`
  cursor: pointer;

  display: flex;
  flex: 1 1 auto;
  align-items: center;
  justify-content: center;

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
`,m=(0,r.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-bf25427f-6"})`
  flex-shrink: 0;
  gap: 4px;

  height: 36px;
  padding: 8px 16px;

  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
`,w=(0,r.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-bf25427f-7"})`
  flex-shrink: 0;
  gap: 4px;

  height: 36px;
  padding: 8px 16px;

  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
`;e.s(["default",0,c])}]);