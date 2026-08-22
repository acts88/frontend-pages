(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,553,e=>{"use strict";var t=e.i(7744),n=e.i(4153);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var l=(0,t.forwardRef)(function(e,n){var l=e.color,r=e.size,a=void 0===r?24:r,o=function(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["color","size"]);return t.default.createElement("svg",i({ref:n,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:void 0===l?"currentColor":l,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),t.default.createElement("circle",{cx:"11",cy:"11",r:"8"}),t.default.createElement("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}))});l.propTypes={color:n.default.string,size:n.default.oneOfType([n.default.string,n.default.number])},l.displayName="Search",e.s(["Search",0,l],553)},67096,33832,e=>{"use strict";var t=e.i(38797),n=e.i(9735);let i=(0,t.default)((0,n.jsx)("path",{d:"m5 9 1.41 1.41L11 5.83V22h2V5.83l4.59 4.59L19 9l-7-7z"}),"North");e.s(["default",0,i],67096);let l=(0,t.default)((0,n.jsx)("path",{d:"m19 15-1.41-1.41L13 18.17V2h-2v16.17l-4.59-4.59L5 15l7 7z"}),"South");e.s(["default",0,l],33832)},33592,e=>{"use strict";var t=e.i(7744),n=e.i(4153);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var l=(0,t.forwardRef)(function(e,n){var l=e.color,r=e.size,a=void 0===r?24:r,o=function(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["color","size"]);return t.default.createElement("svg",i({ref:n,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:void 0===l?"currentColor":l,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),t.default.createElement("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),t.default.createElement("polyline",{points:"14 2 14 8 20 8"}),t.default.createElement("line",{x1:"16",y1:"13",x2:"8",y2:"13"}),t.default.createElement("line",{x1:"16",y1:"17",x2:"8",y2:"17"}),t.default.createElement("polyline",{points:"10 9 9 9 8 9"}))});l.propTypes={color:n.default.string,size:n.default.oneOfType([n.default.string,n.default.number])},l.displayName="FileText",e.s(["FileText",0,l],33592)},47635,e=>{"use strict";var t=e.i(9735);e.i(3159);var n=e.i(46907),i=e.i(7744),l=e.i(553),r=e.i(38803),a=e.i(64954),o=e.i(10957),d=e.i(43174),s=e.i(67096),c=e.i(33832),f=e.i(27997);function h({label:e,cellStyle:n,sortValue:i,currentSortKey:l,currentSortOrder:r,onSort:a}){let o=l===i,d=o?r:({distinctNumber:"desc",name:"asc"})[i],f=o?"#131416":"#9ca3af";return(0,t.jsx)(b,{style:n,children:(0,t.jsx)(y,{type:"button",onClick:()=>a(i),children:(0,t.jsxs)(v,{children:[(0,t.jsx)(j,{children:e}),(0,t.jsx)(_,{children:"desc"===d?(0,t.jsx)(s.default,{sx:{fontSize:14,color:f}}):(0,t.jsx)(c.default,{sx:{fontSize:14,color:f}})})]})})})}let p=(0,n.observer)(function({clients:e,startIndex:n}){let{highlightedClientId:l,openClientDetail:r,setHighlightedClientId:a,setSelectedClientId:o,sortKey:s,sortOrder:c,setSort:p}=d.default.client.info.byClient,y=(0,i.useRef)(null),j=e=>{p(e)},v=e=>{a(null),o(e),r()};return(0,i.useEffect)(()=>{if(null===l)return;let e=window.requestAnimationFrame(()=>{let e=y.current?.querySelector(`tr[data-client-id="${l}"]`);e?.scrollIntoView({block:"nearest",behavior:"auto"})});return()=>{window.cancelAnimationFrame(e)}},[e,l]),(0,t.jsx)(u,{children:(0,t.jsxs)(x,{ref:y,children:[(0,t.jsx)(m,{children:(0,t.jsxs)(g,{children:[(0,t.jsx)(b,{style:{width:84},children:"순번"}),(0,t.jsx)(h,{label:"관리번호",cellStyle:{width:84},sortValue:"distinctNumber",currentSortKey:s,currentSortOrder:c,onSort:j}),(0,t.jsx)(h,{label:"성명",cellStyle:{width:150},sortValue:"name",currentSortKey:s,currentSortOrder:c,onSort:j}),(0,t.jsx)(b,{style:{width:92},children:"생년월일"}),(0,t.jsxs)(b,{style:{width:86},children:["연령",(0,t.jsx)("br",{}),"(만 나이)"]}),(0,t.jsx)(b,{style:{width:55},children:"성별"}),(0,t.jsx)(b,{style:{width:187},children:"전화번호"}),(0,t.jsx)(b,{style:{width:443},children:"주소"}),(0,t.jsxs)(b,{style:{width:78},children:["바우처",(0,t.jsx)("br",{}),"등급"]}),(0,t.jsx)(b,{style:{width:78},children:"상태"}),(0,t.jsx)(b,{style:{width:252},children:"서비스 시작 - 종료일 (N차)"}),(0,t.jsx)(b,{style:{width:130},children:"관리"})]})}),(0,t.jsx)(w,{children:e.map((e,i)=>{let r,a=e.id===l,o=e.representativeExpirationReminder,d="MALE"===e.gender?"남":"FEMALE"===e.gender?"여":"-",s="ACTIVE"===e.representativeContractStatus?"계약중":"TERMINATED"===e.representativeContractStatus?"해지":"COMPLETED"===e.representativeContractStatus?"완료":"-",c=null!==e.serviceStartDate||null!==e.serviceEndDate?`${e.serviceStartDate??"-"} - ${e.serviceEndDate??"-"} (${e.serviceRound??"-"}차)`:"-";return(0,t.jsxs)(g,{"data-client-id":e.id,$status:a?"highlighted":void 0,onClick:()=>v(e.id),children:[(0,t.jsx)(C,{style:{width:84},children:n+i+1}),(0,t.jsx)(C,{style:{width:84},children:e.distinctNumber??"-"}),(0,t.jsx)(C,{style:{width:150},children:(0,t.jsx)(z,{children:e.name||"-"})}),(0,t.jsx)(C,{style:{width:92},children:null!==(r=e.birthDate)&&/^\d{4}-\d{2}-\d{2}$/.test(r)?r.slice(2).replaceAll("-",""):"-"}),(0,t.jsx)(C,{style:{width:86},children:null===e.age?"-":`${e.age}`}),(0,t.jsx)(C,{style:{width:55},children:d}),(0,t.jsx)(C,{style:{width:187},children:(0,t.jsx)(I,{clientId:e.id,clientCreatedAt:e.createdAt,field:"phoneNumber",value:e.phoneNumber??e.contact})}),(0,t.jsx)(C,{style:{width:443},children:(0,t.jsx)(I,{clientId:e.id,clientCreatedAt:e.createdAt,field:"address",value:[e.address,e.addressDetail].filter(e=>null!==e&&""!==e.trim()).join(" ")})}),(0,t.jsx)(C,{style:{width:78},children:e.grade??"-"}),(0,t.jsx)(C,{style:{width:78},children:s}),(0,t.jsx)(C,{style:{width:252},children:(0,t.jsxs)(A,{children:[(0,t.jsx)("span",{children:c}),null!==o?(0,t.jsxs)(f.default,{$color:o.color,children:["만료 ",o.remainingDays,"일 전"]}):null]})}),(0,t.jsx)(C,{style:{width:130},children:(0,t.jsx)($,{onClick:t=>{t.stopPropagation(),v(e.id)},children:"상세보기"})})]},e.id)})})]})})}),u=r.default.section.withConfig({componentId:"zh__sc-365c6c4-0"})`
  overflow: auto;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
  min-width: 0;
  min-height: 0;
`,x=r.default.table.withConfig({componentId:"zh__sc-365c6c4-1"})`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;

  width: max-content;
  min-width: 100%;
  min-height: 0;
`,g=r.default.tr.withConfig({componentId:"zh__sc-365c6c4-2"})`
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
`,m=r.default.thead.withConfig({componentId:"zh__sc-365c6c4-3"})`
  position: sticky;
  z-index: 1;
  top: 0;
  width: max-content;

  ${g} {
    cursor: default;
    border-top: 1px solid #e5e7eb;
    background: #f9fafb;
  }
`,w=r.default.tbody.withConfig({componentId:"zh__sc-365c6c4-4"})`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;

  width: max-content;
  min-height: 0;
`,b=r.default.th.withConfig({componentId:"zh__sc-365c6c4-5"})`
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
`,y=r.default.button.withConfig({componentId:"zh__sc-365c6c4-6"})`
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
`,j=r.default.span.withConfig({componentId:"zh__sc-365c6c4-7"})`
  display: inline-flex;
  align-items: center;
`,v=r.default.span.withConfig({componentId:"zh__sc-365c6c4-8"})`
  position: relative;
  display: inline-flex;
  align-items: center;
`,_=r.default.span.withConfig({componentId:"zh__sc-365c6c4-9"})`
  position: absolute;
  top: 50%;
  left: calc(100% + 2px);
  transform: translateY(-50%);

  display: inline-flex;
  align-items: center;
`,C=r.default.td.withConfig({componentId:"zh__sc-365c6c4-10"})`
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
`,z=r.default.span.withConfig({componentId:"zh__sc-365c6c4-11"})`
  overflow-wrap: anywhere;
`;function I({clientId:e,clientCreatedAt:n,field:l,value:r}){let o,[d,s]=(0,i.useState)([]),[c,f]=(0,i.useState)(!1),h=null==r||""===r.trim()?"-":r.trim(),p=[...d,{value:h,description:Number.isNaN((o=new Date(n)).getTime())?"":`${o.getFullYear()}.${String(o.getMonth()+1).padStart(2,"0")}.${String(o.getDate()).padStart(2,"0")} 추가됨`}].map((e,t)=>({...e,selectValue:`${t}:${e.value}`})),u=p.find(e=>e.value===h),x=async()=>{if(c)return;f(!0);let t="address"===l?await k(e):await E(e,l,n);null!==t&&s(t.sort((e,t)=>new Date(t.createdAt).getTime()-new Date(e.createdAt).getTime()))};return(0,t.jsx)(O,{onPointerDown:e=>{e.stopPropagation(),x()},onClickCapture:e=>e.stopPropagation(),children:(0,t.jsx)(a.default.Input.Select,{style:{width:"100%",height:32,padding:"4px 8px",fontSize:14,color:"#464c53"},value:u?.selectValue??"",onChange:()=>void 0,children:p.map(e=>(0,t.jsx)("option",{value:e.selectValue,"data-description":e.description||void 0,children:e.value},e.selectValue))})})}async function E(e,t,n){let[i,l]=await d.default.client.info.byClient.getClientChangeHistory(e,t);return null!==i||null===l?null:l.slice().sort((e,t)=>new Date(e.createdAt).getTime()-new Date(t.createdAt).getTime()).flatMap(({oldValue:e,newValue:t,createdAt:i},l)=>{let r=[];return 0===l&&null!==e&&""!==e.trim()&&r.push({createdAt:n,value:e.trim(),description:S(n)}),null!==t&&""!==t.trim()&&r.push({createdAt:i,value:t.trim(),description:S(i)}),r})}async function k(e){let[t,n]=await Promise.all([d.default.client.info.byClient.getClientChangeHistory(e,"address"),d.default.client.info.byClient.getClientChangeHistory(e,"addressDetail")]);if(null!==t[0]||null!==n[0]||null===t[1]||null===n[1])return null;let i=new Map,l=(e,t)=>{e.forEach(({newValue:e,createdAt:n})=>{let l=i.get(n)??{};l[t]=e?.trim()??"",i.set(n,l)})};l(t[1],"address"),l(n[1],"addressDetail");let r="",a="";return Array.from(i.entries()).sort(([e],[t])=>new Date(e).getTime()-new Date(t).getTime()).map(([e,t])=>(r=t.address??r,a=t.addressDetail??a,{createdAt:e,value:[r,a].filter(e=>""!==e).join(" ")||"-",description:S(e)}))}function S(e){let t=new Date(e);return Number.isNaN(t.getTime())?"":`${t.getFullYear()}.${String(t.getMonth()+1).padStart(2,"0")}.${String(t.getDate()).padStart(2,"0")} 추가됨`}let O=r.default.div.withConfig({componentId:"zh__sc-365c6c4-12"})`
  width: 100%;
`,A=r.default.div.withConfig({componentId:"zh__sc-365c6c4-13"})`
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
`,L=r.css`
  font-size: 16px;
  line-height: 14px;
  text-align: center;
`,$=(0,r.default)(a.default.Button.Outlined).withConfig({componentId:"zh__sc-365c6c4-14"})`
  ${L}
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;

  padding: 8px 16px;
`,T=[{key:o.FILTER_ALL_VALUE,label:"전체 이용자"},{key:"ONGOING",label:"계약중"},{key:"ENDED_OR_TERMINATED",label:"종료 혹은 해지"}],D=(0,n.observer)(function(){let{filteredClients:e,totalCount:n,contractFilter:r,setContractFilter:s,setPhoneFilter:c,setAddressFilter:f,searchText:h,setSearchText:u,highlightedClientId:x}=d.default.client.info.byClient,[g,m]=(0,i.useState)(1),[w,b]=(0,i.useState)(15),y=Math.max(1,Math.ceil(e.length/w)),j=Math.min(g,y),v=(j-1)*w,_=e.slice(v,v+w);return(0,i.useEffect)(()=>{if(null===x)return;let t=e.findIndex(e=>e.id===x);if(-1===t){s(o.FILTER_ALL_VALUE),c(o.FILTER_ALL_VALUE),f(o.FILTER_ALL_VALUE),u("");return}let n=window.requestAnimationFrame(()=>{m(Math.floor(t/w)+1)});return()=>{window.cancelAnimationFrame(n)}},[e,x,w,f,s,c,u]),(0,t.jsxs)(N,{children:[(0,t.jsxs)(F,{children:[(0,t.jsxs)(M,{children:[(0,t.jsx)(R,{children:"이용자 목록"}),(0,t.jsx)(V,{children:r===o.FILTER_ALL_VALUE?`(전체 ${n}명)`:`(${"ONGOING"===r?"계약중":"종료 혹은 해지"} ${e.length}명 / 전체 ${n}명)`})]}),(0,t.jsxs)(P,{children:[(0,t.jsx)(U,{children:T.map(e=>(0,t.jsx)(B,{$active:r===e.key,type:"button",onClick:()=>(e=>{(e===o.FILTER_ALL_VALUE||"ONGOING"===e||"ENDED_OR_TERMINATED"===e)&&(s(e),m(1))})(e.key),children:e.label.replace(" 이용자","")},e.key))}),(0,t.jsxs)(G,{children:[(0,t.jsxs)(q,{children:[(0,t.jsx)(Y,{placeholder:"이용자명 검색",value:h,onChange:e=>{u(e.target.value),m(1)}}),(0,t.jsx)(l.Search,{color:"#0a0a0a",size:16})]}),(0,t.jsxs)(a.default.Input.Select,{value:String(w),style:{width:143},onChange:e=>{b(Number(e.currentTarget.value)),m(1)},children:[(0,t.jsx)("option",{value:"15",children:"15명씩 보기"}),(0,t.jsx)("option",{value:"30",children:"30명씩 보기"}),(0,t.jsx)("option",{value:"50",children:"50명씩 보기"}),(0,t.jsx)("option",{value:"100",children:"100명씩 보기"})]})]})]})]}),(0,t.jsx)(p,{clients:_,startIndex:v}),(0,t.jsxs)(H,{children:[(0,t.jsx)(K,{type:"button",disabled:1===j,onClick:()=>m(e=>Math.max(1,e-1)),children:"‹ 이전"}),Array.from({length:y},(e,t)=>t+1).map(e=>(0,t.jsx)(K,{type:"button",$active:e===j,onClick:()=>m(e),children:e},e)),(0,t.jsx)(K,{type:"button",disabled:j===y,onClick:()=>m(e=>Math.min(y,e+1)),children:"다음 ›"})]})]})}),N=r.default.div.withConfig({componentId:"zh__sc-a0b0dae2-0"})`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
  min-width: 0;
  min-height: 0;
`,F=r.default.div.withConfig({componentId:"zh__sc-a0b0dae2-1"})`
  display: flex;
  gap: 24px;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;

  padding: 24px 16px;
`,M=r.default.div.withConfig({componentId:"zh__sc-a0b0dae2-2"})`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`,R=r.default.div.withConfig({componentId:"zh__sc-a0b0dae2-3"})`
  font-size: 20px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
  letter-spacing: -0.5px;
`,V=r.default.div.withConfig({componentId:"zh__sc-a0b0dae2-4"})`
  font-size: 20px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #464c53;
  letter-spacing: -0.5px;
`,P=r.default.div.withConfig({componentId:"zh__sc-a0b0dae2-5"})`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;

  height: 40px;
`,U=r.default.div.withConfig({componentId:"zh__sc-a0b0dae2-6"})`
  overflow: hidden;
  display: flex;

  height: 40px;
  border: 1px solid #b1b8be;
  border-radius: 8px;
`,B=r.default.button.withConfig({componentId:"zh__sc-a0b0dae2-7"})`
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
`,G=r.default.div.withConfig({componentId:"zh__sc-a0b0dae2-8"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,H=r.default.div.withConfig({componentId:"zh__sc-a0b0dae2-9"})`
  display: flex;
  gap: 6px;
  align-items: center;
  align-self: stretch;
  justify-content: center;

  padding: 8px;
`,K=r.default.button.withConfig({componentId:"zh__sc-a0b0dae2-10"})`
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
`,q=r.default.label.withConfig({componentId:"zh__sc-a0b0dae2-11"})`
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
`,Y=r.default.input.withConfig({componentId:"zh__sc-a0b0dae2-12"})`
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
`;e.s(["default",0,D],47635)},52024,e=>{"use strict";var t=e.i(9735);e.i(3159);var n=e.i(46907),i=e.i(33592),l=e.i(5543),r=e.i(38803),a=e.i(64954),o=e.i(7242),d=e.i(43174);let s=(0,n.observer)(function(){let{currentServiceType:e,setCurrentServiceType:n}=d.default.client.info.byClient,{show:r}=d.default.modal.clientCreate;return(0,t.jsxs)(c,{children:[(0,t.jsxs)(f,{children:[(0,t.jsx)(p,{children:"서비스 구분"}),(0,t.jsx)(u,{children:d.default.client.info.byClient.activeServiceList.map(i=>(0,t.jsxs)(x,{type:"button",$active:e===i.type,onClick:()=>n(i.type),children:[o.default[i.type].label," 서비스"]},i.type))})]}),(0,t.jsxs)(h,{children:[(0,t.jsxs)(m,{type:"button",onClick:()=>{d.default.client.info.byClient.downloadClientContractsExcel()},children:[(0,t.jsx)(i.FileText,{size:16}),"엑셀로 다운로드 받기"]}),(0,t.jsxs)(g,{type:"button",onClick:()=>{r("create",e??"MEAL")},children:[(0,t.jsx)(l.Plus,{size:20}),"신규 이용자 등록"]})]})]})}),c=r.default.div.withConfig({componentId:"zh__sc-bf25427f-0"})`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;
`,f=r.default.div.withConfig({componentId:"zh__sc-bf25427f-1"})`
  display: flex;
  gap: 24px;
  align-items: center;
`,h=r.default.div.withConfig({componentId:"zh__sc-bf25427f-2"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,p=r.default.p.withConfig({componentId:"zh__sc-bf25427f-3"})`
  font-size: 20px;
  font-weight: 700;
  line-height: normal;
  color: #0a0a0a;
  letter-spacing: -0.5px;
  white-space: nowrap;
`,u=r.default.div.withConfig({componentId:"zh__sc-bf25427f-4"})`
  overflow: hidden;
  display: flex;

  height: 48px;
  border: 1px solid #b1b8be;
  border-radius: 8px;

  background: #fff;
`,x=r.default.button.withConfig({componentId:"zh__sc-bf25427f-5"})`
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
`,g=(0,r.default)(a.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-bf25427f-6"})`
  flex-shrink: 0;
  gap: 4px;

  height: 36px;
  padding: 8px 16px;

  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
`,m=(0,r.default)(a.default.Button.Outlined).withConfig({componentId:"zh__sc-bf25427f-7"})`
  flex-shrink: 0;
  gap: 4px;

  height: 36px;
  padding: 8px 16px;

  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
`;e.s(["default",0,s])}]);