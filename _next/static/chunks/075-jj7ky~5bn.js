(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,553,e=>{"use strict";var t=e.i(7744),i=e.i(4153);function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}var l=(0,t.forwardRef)(function(e,i){var l=e.color,r=e.size,o=void 0===r?24:r,d=function(e,t){if(null==e)return{};var i,n,l=function(e,t){if(null==e)return{};var i,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(l[i]=e[i]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],!(t.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(e,i)&&(l[i]=e[i])}return l}(e,["color","size"]);return t.default.createElement("svg",n({ref:i,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:void 0===l?"currentColor":l,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),t.default.createElement("circle",{cx:"11",cy:"11",r:"8"}),t.default.createElement("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}))});l.propTypes={color:i.default.string,size:i.default.oneOfType([i.default.string,i.default.number])},l.displayName="Search",e.s(["Search",0,l],553)},67096,33832,e=>{"use strict";var t=e.i(38797),i=e.i(9735);let n=(0,t.default)((0,i.jsx)("path",{d:"m5 9 1.41 1.41L11 5.83V22h2V5.83l4.59 4.59L19 9l-7-7z"}),"North");e.s(["default",0,n],67096);let l=(0,t.default)((0,i.jsx)("path",{d:"m19 15-1.41-1.41L13 18.17V2h-2v16.17l-4.59-4.59L5 15l7 7z"}),"South");e.s(["default",0,l],33832)},82325,e=>{"use strict";var t=e.i(9735),i=e.i(28095),n=e.i(22803),l=e.i(64954),r=e.i(43174);e.i(3159);var o=e.i(46907),d=e.i(67096),a=e.i(33832),s=e.i(12945),c=e.i(19740),f=e.i(86400);function h({label:e,width:i,sortValue:n,currentSortKey:l,currentSortOrder:r,onSort:o}){let s=l===n,c=s?r:({id:"desc",name:"asc"})[n],f=s?"#131416":"#9ca3af";return(0,t.jsx)(j,{style:{width:i},children:(0,t.jsx)(_,{type:"button",onClick:()=>o(n),children:(0,t.jsxs)(z,{children:[(0,t.jsx)(v,{children:e}),(0,t.jsx)(C,{children:"desc"===c?(0,t.jsx)(d.default,{sx:{fontSize:14,color:f}}):(0,t.jsx)(a.default,{sx:{fontSize:14,color:f}})})]})})})}let p=e=>{if(null===e||!f.default.brand.calendarDateString.is(e))return null;let[t,i,n]=e.split("-"),l=Number(t),r=Number(i),o=Number(n);return Number.isFinite(l)&&Number.isFinite(r)&&Number.isFinite(o)?new Date(l,r-1,o):null},u=e=>null!==e&&f.default.brand.calendarDateString.is(e)?e.replaceAll("-",""):"",x=(0,o.observer)(function(){let{filteredServiceWorkerList:e,sortKey:i,sortOrder:n,setSort:l}=r.default.serviceWorker.info.byServiceWorker,{show:o}=r.default.modal.serviceWorkerDetail,d=e=>{l(e)};return(0,t.jsx)(g,{children:(0,t.jsxs)(m,{children:[(0,t.jsx)(y,{children:(0,t.jsxs)(b,{children:[(0,t.jsx)(h,{label:"관리번호",width:84,sortValue:"id",currentSortKey:i,currentSortOrder:n,onSort:d}),(0,t.jsx)(h,{label:"성명",width:150,sortValue:"name",currentSortKey:i,currentSortOrder:n,onSort:d}),(0,t.jsx)(j,{style:{width:92},children:"생년월일"}),(0,t.jsxs)(j,{style:{width:86},children:["연령",(0,t.jsx)("br",{}),"(만 나이)"]}),(0,t.jsx)(j,{style:{width:55},children:"성별"}),(0,t.jsx)(j,{style:{width:148},children:"전화번호"}),(0,t.jsx)(j,{style:{flex:1},children:"주소"}),(0,t.jsx)(j,{style:{width:78},children:"상태"}),(0,t.jsx)(j,{style:{width:115},children:"접수일"}),(0,t.jsx)(j,{style:{width:252},children:"입사일 - 퇴사일 (근속기간)"}),(0,t.jsx)(j,{style:{width:130},children:"관리"})]})}),(0,t.jsx)(w,{children:e.map(e=>{let i,n,l,{id:r,name:d,residentRegistrationNumber:a,gender:h,phoneNumber:x,address:g,addressDetail:m,status:y,firstRegisteredDate:w,workStartDate:j,workEndDate:_}=e,v=null===a?null:f.default.brand.maskedResidentRegistrationNumber.extractInfo(a),z=v?.birthDate??"-",C=null===v?"-":v.age,S=null===h?"-":s.default[h].label.at(0),O=[g,m].filter(e=>"string"==typeof e&&""!==e.trim()).join(" "),E=null===w?"-":u(w)||"-",R=null===j?"-":(i=u(j),n=u(_),l=((e,t)=>{if(null===e)return"-";let i=p(e),n=p(t)??new Date;if(null===i)return"-";let l=i.getFullYear(),r=i.getMonth(),o=i.getDate(),d=n.getFullYear(),a=n.getMonth(),s=n.getDate(),c=(d-l)*12+(a-r);s<o&&(c-=1),c<0&&(c=0,d=l,a=r);let f=Math.floor(c/12),h=c%12,u=f>0?`${f}년`:"",x=h>0?`${h}개월`:"";return`${u} ${x}`.trim()||"0개월"})(j,_),""===i?"-":""===n?`${i} - (${l})`:`${i} - ${n} (${l})`);return(0,t.jsxs)(b,{children:[(0,t.jsx)(I,{style:{width:84},children:r}),(0,t.jsx)(I,{style:{width:150},children:d}),(0,t.jsx)(I,{style:{width:92},children:z}),(0,t.jsx)(I,{style:{width:86},children:C}),(0,t.jsx)(I,{style:{width:55},children:S}),(0,t.jsx)(I,{style:{width:148},children:x?.trim()===""?"-":x??"-"}),(0,t.jsx)(I,{style:{flex:1},children:""===O?"-":O}),(0,t.jsx)(I,{style:{width:78},children:c.SERVICE_WORKER_STATUS[y]}),(0,t.jsx)(I,{style:{width:115},children:E}),(0,t.jsx)(I,{style:{width:252},children:R}),(0,t.jsx)(I,{style:{width:130},children:(0,t.jsx)(k,{onClick:()=>{o(r)},children:"상세보기"})})]},r)})})]})})}),g=n.default.section.withConfig({componentId:"zh__sc-2f4a79ac-0"})`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
  min-width: 0;
  min-height: 0;
`,m=n.default.table.withConfig({componentId:"zh__sc-2f4a79ac-1"})`
  overflow-y: auto;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
  min-height: 0;
`,b=n.default.tr.withConfig({componentId:"zh__sc-2f4a79ac-2"})`
  display: flex;
  flex-shrink: 0;
  align-items: flex-start;
  align-self: stretch;
  justify-content: center;

  height: 52px;
`,y=n.default.thead.withConfig({componentId:"zh__sc-2f4a79ac-3"})`
  position: sticky;
  z-index: 1;
  top: 0;
  width: 100%;

  ${b} {
    border-top: 1px solid #e5e7eb;
    border-bottom: 1px solid #e5e7eb;
    background: #f9fafb;
  }
`,w=n.default.tbody.withConfig({componentId:"zh__sc-2f4a79ac-4"})`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
  min-height: 0;
`,j=n.default.th.withConfig({componentId:"zh__sc-2f4a79ac-5"})`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 16px;
  color: #131416;
`,_=n.default.button.withConfig({componentId:"zh__sc-2f4a79ac-6"})`
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
`,v=n.default.span.withConfig({componentId:"zh__sc-2f4a79ac-7"})`
  display: inline-flex;
  align-items: center;
`,z=n.default.span.withConfig({componentId:"zh__sc-2f4a79ac-8"})`
  position: relative;
  display: inline-flex;
  align-items: center;
`,C=n.default.span.withConfig({componentId:"zh__sc-2f4a79ac-9"})`
  position: absolute;
  top: 50%;
  left: calc(100% + 2px);
  transform: translateY(-50%);

  display: inline-flex;
  align-items: center;
`,I=n.default.td.withConfig({componentId:"zh__sc-2f4a79ac-10"})`
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
`,k=(0,n.default)(l.default.Button.Outlined).withConfig({componentId:"zh__sc-2f4a79ac-11"})`
  display: flex;
  gap: 4px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`;var S=e.i(553),O=e.i(10957);function E(e){return Object.prototype.hasOwnProperty.call(c.SERVICE_WORKER_STATUS,e)}let R=[{key:O.FILTER_ALL_VALUE,label:"전체"},...Object.keys(c.SERVICE_WORKER_STATUS).filter(E).map(e=>({key:e,label:c.SERVICE_WORKER_STATUS[e]}))],T=(0,o.observer)(function(){let{totalCount:e,statusFilter:i,setStatusFilter:n,searchText:l,setSearchText:o}=r.default.serviceWorker.info.byServiceWorker;return(0,t.jsxs)(L,{children:[(0,t.jsxs)(W,{children:[(0,t.jsxs)($,{children:[(0,t.jsx)(A,{children:"제공인력 목록"}),(0,t.jsxs)(V,{children:["(전체 ",e,"명)"]})]}),(0,t.jsx)(F,{role:"tablist","aria-label":"제공인력 상태 필터",children:R.map(e=>{let l=i===e.key;return(0,t.jsx)(N,{type:"button",role:"tab","aria-selected":l,$active:l,onClick:()=>{var t;(t=e.key)===O.FILTER_ALL_VALUE?n(t):E(t)&&n(t)},children:e.label},e.key)})})]}),(0,t.jsxs)(D,{children:[(0,t.jsx)(K,{value:l,onChange:e=>o(e.target.value),placeholder:"성명 검색","aria-label":"성명 검색"}),(0,t.jsx)(S.Search,{size:18,color:"#0a0a0a"})]})]})}),L=n.default.div.withConfig({componentId:"zh__sc-d1f896b8-0"})`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;

  padding: 16px;
`,W=n.default.div.withConfig({componentId:"zh__sc-d1f896b8-1"})`
  display: flex;
  gap: 24px;
  align-items: center;
  min-width: 0;
`,$=n.default.div.withConfig({componentId:"zh__sc-d1f896b8-2"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,A=n.default.div.withConfig({componentId:"zh__sc-d1f896b8-3"})`
  font-size: 20px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
  letter-spacing: -0.5px;
`,V=n.default.div.withConfig({componentId:"zh__sc-d1f896b8-4"})`
  font-size: 20px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #464c53;
  letter-spacing: -0.5px;
`,F=n.default.div.withConfig({componentId:"zh__sc-d1f896b8-5"})`
  overflow: hidden;
  display: flex;
  align-items: center;

  border: 1px solid #b1b8be;
  border-radius: 8px;

  background: #fff;
`,N=n.default.button.withConfig({componentId:"zh__sc-d1f896b8-6"})`
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
`,D=n.default.label.withConfig({componentId:"zh__sc-d1f896b8-7"})`
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
`,K=n.default.input.withConfig({componentId:"zh__sc-d1f896b8-8"})`
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
`,U=(0,o.observer)(function(){let{listStatus:e}=r.default.serviceWorker.info.byServiceWorker;return(0,t.jsxs)(P,{children:[(0,t.jsx)(T,{}),(0,t.jsx)(B,{children:"loading"===e?(0,t.jsx)(M,{children:"불러오는 중입니다."}):"error"===e?(0,t.jsx)(M,{children:"목록을 불러오지 못했습니다."}):(0,t.jsx)(x,{})})]})}),P=n.default.div.withConfig({componentId:"zh__sc-a7645a37-0"})`
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
`,B=n.default.div.withConfig({componentId:"zh__sc-a7645a37-1"})`
  overflow-y: auto;
  display: flex;
  flex: 1;
  align-items: stretch;

  padding: 16px;

  font-size: 14px;
  color: #4b5563;
`,M=n.default.div.withConfig({componentId:"zh__sc-a7645a37-2"})`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;

  color: #6b7280;
`,Y=n.default.div.withConfig({componentId:"zh__sc-2072926e-0"})`
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
`,q=n.default.div.withConfig({componentId:"zh__sc-2072926e-1"})`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: flex-end;

  height: 48px;
`,G=(0,n.default)(l.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-2072926e-2"})`
  display: flex;
  gap: 4px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`;e.s(["default",0,function(){let{show:e}=r.default.modal.serviceWorkerCreate;return(0,t.jsxs)(Y,{children:[(0,t.jsx)(q,{children:(0,t.jsxs)(G,{type:"button",onClick:e,children:[(0,t.jsx)(i.default,{sx:{fontSize:20}}),"신규 제공인력 등록"]})}),(0,t.jsx)(U,{})]})}],82325)}]);