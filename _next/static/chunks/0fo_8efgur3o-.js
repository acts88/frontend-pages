(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,553,e=>{"use strict";var t=e.i(7744),n=e.i(4153);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var l=(0,t.forwardRef)(function(e,n){var l=e.color,r=e.size,o=void 0===r?24:r,a=function(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["color","size"]);return t.default.createElement("svg",i({ref:n,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:void 0===l?"currentColor":l,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),t.default.createElement("circle",{cx:"11",cy:"11",r:"8"}),t.default.createElement("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}))});l.propTypes={color:n.default.string,size:n.default.oneOfType([n.default.string,n.default.number])},l.displayName="Search",e.s(["Search",0,l],553)},67096,33832,e=>{"use strict";var t=e.i(38797),n=e.i(9735);let i=(0,t.default)((0,n.jsx)("path",{d:"m5 9 1.41 1.41L11 5.83V22h2V5.83l4.59 4.59L19 9l-7-7z"}),"North");e.s(["default",0,i],67096);let l=(0,t.default)((0,n.jsx)("path",{d:"m19 15-1.41-1.41L13 18.17V2h-2v16.17l-4.59-4.59L5 15l7 7z"}),"South");e.s(["default",0,l],33832)},33592,e=>{"use strict";var t=e.i(7744),n=e.i(4153);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var l=(0,t.forwardRef)(function(e,n){var l=e.color,r=e.size,o=void 0===r?24:r,a=function(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["color","size"]);return t.default.createElement("svg",i({ref:n,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:void 0===l?"currentColor":l,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),t.default.createElement("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),t.default.createElement("polyline",{points:"14 2 14 8 20 8"}),t.default.createElement("line",{x1:"16",y1:"13",x2:"8",y2:"13"}),t.default.createElement("line",{x1:"16",y1:"17",x2:"8",y2:"17"}),t.default.createElement("polyline",{points:"10 9 9 9 8 9"}))});l.propTypes={color:n.default.string,size:n.default.oneOfType([n.default.string,n.default.number])},l.displayName="FileText",e.s(["FileText",0,l],33592)},82325,e=>{"use strict";var t=e.i(9735),n=e.i(28095),i=e.i(33592),l=e.i(38803),r=e.i(64954),o=e.i(43174);e.i(3159);var a=e.i(46907),s=e.i(67096),d=e.i(33832),c=e.i(27997),f=e.i(12945),h=e.i(19740),p=e.i(86400),u=e.i(44968);function x({label:e,width:n,sortValue:i,currentSortKey:l,currentSortOrder:r,onSort:o}){let a=l===i,c=a?r:({id:"desc",name:"asc"})[i],f=a?"#131416":"#9ca3af";return(0,t.jsx)(z,{style:{width:n},children:(0,t.jsx)(C,{type:"button",onClick:()=>o(i),children:(0,t.jsxs)(S,{children:[(0,t.jsx)(k,{children:e}),(0,t.jsx)(I,{children:"desc"===c?(0,t.jsx)(s.default,{sx:{fontSize:14,color:f}}):(0,t.jsx)(d.default,{sx:{fontSize:14,color:f}})})]})})})}let g=e=>{if(null===e||!p.default.brand.calendarDateString.is(e))return null;let[t,n,i]=e.split("-"),l=Number(t),r=Number(n),o=Number(i);return Number.isFinite(l)&&Number.isFinite(r)&&Number.isFinite(o)?new Date(l,r-1,o):null},m=e=>null!==e&&p.default.brand.calendarDateString.is(e)?e.replaceAll("-",""):"",y=(0,a.observer)(function(){let{filteredServiceWorkerList:e,sortKey:n,sortOrder:i,setSort:l}=o.default.serviceWorker.info.byServiceWorker,{show:r}=o.default.modal.serviceWorkerDetail,a=e=>{l(e)};return(0,t.jsx)(b,{children:(0,t.jsxs)(w,{children:[(0,t.jsx)(v,{children:(0,t.jsxs)(j,{children:[(0,t.jsx)(x,{label:"관리번호",width:84,sortValue:"id",currentSortKey:n,currentSortOrder:i,onSort:a}),(0,t.jsx)(x,{label:"성명",width:150,sortValue:"name",currentSortKey:n,currentSortOrder:i,onSort:a}),(0,t.jsx)(z,{style:{width:92},children:"생년월일"}),(0,t.jsxs)(z,{style:{width:86},children:["연령",(0,t.jsx)("br",{}),"(만 나이)"]}),(0,t.jsx)(z,{style:{width:55},children:"성별"}),(0,t.jsx)(z,{style:{width:148},children:"전화번호"}),(0,t.jsx)(z,{style:{flex:1},children:"주소"}),(0,t.jsx)(z,{style:{width:78},children:"상태"}),(0,t.jsx)(z,{style:{width:115},children:"접수일"}),(0,t.jsx)(z,{style:{width:252},children:"계약 기간 (근속기간)"}),(0,t.jsx)(z,{style:{width:130},children:"관리"})]})}),(0,t.jsx)(_,{children:e.map(e=>{let n,i,l,{id:o,name:a,residentRegistrationNumber:s,gender:d,phoneNumber:x,address:y,addressDetail:b,status:w,firstRegisteredDate:v,employmentContracts:_}=e,z=null===s?null:p.default.brand.maskedResidentRegistrationNumber.extractInfo(s),C=z?.birthDate??"-",k=null===z?"-":z.age,S=null===d?"-":f.default[d].label.at(0),I=[y,b].filter(e=>"string"==typeof e&&""!==e.trim()).join(" "),T=null===v?"-":m(v)||"-",L=(0,u.getRepresentativeEmploymentContract)(_),W=L?.contractStartDate??null,$=L?.contractEndDate??null,D=null===W?"-":(n=m(W),i=m($),l=((e,t)=>{if(null===e)return"-";let n=g(e),i=g(t)??new Date;if(null===n)return"-";let l=n.getFullYear(),r=n.getMonth(),o=n.getDate(),a=i.getFullYear(),s=i.getMonth(),d=i.getDate(),c=(a-l)*12+(s-r);d<o&&(c-=1),c<0&&(c=0,a=l,s=r);let f=Math.floor(c/12),h=c%12,p=f>0?`${f}년`:"",u=h>0?`${h}개월`:"";return`${p} ${u}`.trim()||"0개월"})(W,$),""===n?"-":""===i?`${n} - (${l})`:`${n} - ${i} (${l})`),F=(0,u.getRepresentativeContractExpirationReminder)(_.map(e=>({contractId:e.id,contractStatus:e.status,contractStartDate:e.contractStartDate,contractEndDate:e.contractEndDate})));return(0,t.jsxs)(j,{children:[(0,t.jsx)(O,{style:{width:84},children:o}),(0,t.jsx)(O,{style:{width:150},children:a}),(0,t.jsx)(O,{style:{width:92},children:C}),(0,t.jsx)(O,{style:{width:86},children:k}),(0,t.jsx)(O,{style:{width:55},children:S}),(0,t.jsx)(O,{style:{width:148},children:x?.trim()===""?"-":x??"-"}),(0,t.jsx)(O,{style:{flex:1},children:""===I?"-":I}),(0,t.jsx)(O,{style:{width:78},children:h.SERVICE_WORKER_STATUS[w]}),(0,t.jsx)(O,{style:{width:115},children:T}),(0,t.jsx)(O,{style:{width:252,justifyContent:"flex-start"},children:(0,t.jsxs)(E,{children:[(0,t.jsx)("span",{children:D}),null!==F?(0,t.jsxs)(c.default,{$color:F.color,children:["계약 만료 ",F.remainingDays,"일 남음"]}):null]})}),(0,t.jsx)(O,{style:{width:130},children:(0,t.jsx)(R,{onClick:()=>{r(o)},children:"상세보기"})})]},o)})})]})})}),b=l.default.section.withConfig({componentId:"zh__sc-2f4a79ac-0"})`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
  min-width: 0;
  min-height: 0;
`,w=l.default.table.withConfig({componentId:"zh__sc-2f4a79ac-1"})`
  overflow-y: auto;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
  min-height: 0;
`,j=l.default.tr.withConfig({componentId:"zh__sc-2f4a79ac-2"})`
  display: flex;
  flex-shrink: 0;
  align-items: flex-start;
  align-self: stretch;
  justify-content: center;

  min-height: 52px;
`,v=l.default.thead.withConfig({componentId:"zh__sc-2f4a79ac-3"})`
  position: sticky;
  z-index: 1;
  top: 0;
  width: 100%;

  ${j} {
    align-items: center;

    height: 52px;
    border-top: 1px solid #e5e7eb;
    border-bottom: 1px solid #e5e7eb;

    background: #f9fafb;
  }
`,_=l.default.tbody.withConfig({componentId:"zh__sc-2f4a79ac-4"})`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
  min-height: 0;

  ${j} {
    border-bottom: 1px solid #e5e7eb;
    background: #fff;
  }

  ${j}:last-child {
    border-bottom: none;
  }
`,z=l.default.th.withConfig({componentId:"zh__sc-2f4a79ac-5"})`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 16px;
  color: #131416;
`,C=l.default.button.withConfig({componentId:"zh__sc-2f4a79ac-6"})`
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
`,k=l.default.span.withConfig({componentId:"zh__sc-2f4a79ac-7"})`
  display: inline-flex;
  align-items: center;
`,S=l.default.span.withConfig({componentId:"zh__sc-2f4a79ac-8"})`
  position: relative;
  display: inline-flex;
  align-items: center;
`,I=l.default.span.withConfig({componentId:"zh__sc-2f4a79ac-9"})`
  position: absolute;
  top: 50%;
  left: calc(100% + 2px);
  transform: translateY(-50%);

  display: inline-flex;
  align-items: center;
`,O=l.default.td.withConfig({componentId:"zh__sc-2f4a79ac-10"})`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;

  height: 100%;
  padding: 10px 14px;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 16px;
  color: #464c53;
  text-align: center;
`,E=l.default.div.withConfig({componentId:"zh__sc-2f4a79ac-11"})`
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: flex-start;
  justify-content: center;

  text-align: left;
`,R=(0,l.default)(r.default.Button.Outlined).withConfig({componentId:"zh__sc-2f4a79ac-12"})`
  display: flex;
  gap: 4px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`;var T=e.i(553),L=e.i(10957);function W(e){return Object.prototype.hasOwnProperty.call(h.SERVICE_WORKER_STATUS,e)}let $=[{key:L.FILTER_ALL_VALUE,label:"전체"},...Object.keys(h.SERVICE_WORKER_STATUS).filter(W).map(e=>({key:e,label:h.SERVICE_WORKER_STATUS[e]}))],D=(0,a.observer)(function(){let{totalCount:e,statusFilter:n,setStatusFilter:i,searchText:l,setSearchText:r}=o.default.serviceWorker.info.byServiceWorker;return(0,t.jsxs)(F,{children:[(0,t.jsxs)(V,{children:[(0,t.jsxs)(A,{children:[(0,t.jsx)(N,{children:"제공인력 목록"}),(0,t.jsxs)(P,{children:["(전체 ",e,"명)"]})]}),(0,t.jsx)(K,{role:"tablist","aria-label":"제공인력 상태 필터",children:$.map(e=>{let l=n===e.key;return(0,t.jsx)(U,{type:"button",role:"tab","aria-selected":l,$active:l,onClick:()=>{var t;(t=e.key)===L.FILTER_ALL_VALUE?i(t):W(t)&&i(t)},children:e.label},e.key)})})]}),(0,t.jsxs)(B,{children:[(0,t.jsx)(M,{value:l,onChange:e=>r(e.target.value),placeholder:"성명 검색","aria-label":"성명 검색"}),(0,t.jsx)(T.Search,{size:18,color:"#0a0a0a"})]})]})}),F=l.default.div.withConfig({componentId:"zh__sc-d1f896b8-0"})`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;

  padding: 24px 16px;
`,V=l.default.div.withConfig({componentId:"zh__sc-d1f896b8-1"})`
  display: flex;
  gap: 24px;
  align-items: center;
  min-width: 0;
`,A=l.default.div.withConfig({componentId:"zh__sc-d1f896b8-2"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,N=l.default.div.withConfig({componentId:"zh__sc-d1f896b8-3"})`
  font-size: 20px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
  letter-spacing: -0.5px;
`,P=l.default.div.withConfig({componentId:"zh__sc-d1f896b8-4"})`
  font-size: 20px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #464c53;
  letter-spacing: -0.5px;
`,K=l.default.div.withConfig({componentId:"zh__sc-d1f896b8-5"})`
  overflow: hidden;
  display: flex;
  align-items: center;

  border: 1px solid #b1b8be;
  border-radius: 8px;

  background: #fff;
`,U=l.default.button.withConfig({componentId:"zh__sc-d1f896b8-6"})`
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
`,B=l.default.label.withConfig({componentId:"zh__sc-d1f896b8-7"})`
  cursor: text;

  display: flex;
  gap: 8px;
  align-items: center;

  width: 179px;
  height: 40px;
  padding: 8px 16px;
  border: 1px solid #e5e7eb;
  border-radius: 6px;

  background: #fff;

  &:hover {
    border-color: #a998ff;
  }

  &:focus-within {
    border-color: #5635ff;
  }
`,M=l.default.input.withConfig({componentId:"zh__sc-d1f896b8-8"})`
  width: 100%;
  min-width: 0;
  border: none;

  font-size: 18px;
  font-weight: 500;
  color: #0a0a0a;

  background: transparent;

  &::placeholder {
    color: #0a0a0a;
    opacity: 1;
  }

  &:focus {
    outline: none;
  }
`,Y=(0,a.observer)(function(){let{listStatus:e}=o.default.serviceWorker.info.byServiceWorker;return(0,t.jsxs)(H,{children:[(0,t.jsx)(D,{}),(0,t.jsx)(q,{children:"loading"===e?(0,t.jsx)(G,{children:"불러오는 중입니다."}):"error"===e?(0,t.jsx)(G,{children:"목록을 불러오지 못했습니다."}):(0,t.jsx)(y,{})})]})}),H=l.default.div.withConfig({componentId:"zh__sc-a7645a37-0"})`
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
`,q=l.default.div.withConfig({componentId:"zh__sc-a7645a37-1"})`
  overflow-y: auto;
  display: flex;
  flex: 1;
  align-items: stretch;

  font-size: 14px;
  color: #4b5563;
`,G=l.default.div.withConfig({componentId:"zh__sc-a7645a37-2"})`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;

  color: #6b7280;
`,J=l.default.div.withConfig({componentId:"zh__sc-2072926e-0"})`
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
`,Q=l.default.div.withConfig({componentId:"zh__sc-2072926e-1"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;
  justify-content: flex-end;

  height: 48px;
`,X=(0,l.default)(r.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-2072926e-2"})`
  display: flex;
  gap: 4px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,Z=(0,l.default)(r.default.Button.Outlined).withConfig({componentId:"zh__sc-2072926e-3"})`
  display: flex;
  gap: 4px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;

  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
`;e.s(["default",0,function(){let{show:e}=o.default.modal.serviceWorkerCreate;return(0,t.jsxs)(J,{children:[(0,t.jsxs)(Q,{children:[(0,t.jsxs)(Z,{type:"button",onClick:()=>{o.default.serviceWorker.info.byServiceWorker.downloadServiceWorkerListExcel()},children:[(0,t.jsx)(i.FileText,{size:16}),"엑셀로 다운로드 받기"]}),(0,t.jsxs)(X,{type:"button",onClick:()=>e(),children:[(0,t.jsx)(n.default,{sx:{fontSize:20}}),"신규 제공인력 등록"]})]}),(0,t.jsx)(Y,{})]})}],82325)}]);