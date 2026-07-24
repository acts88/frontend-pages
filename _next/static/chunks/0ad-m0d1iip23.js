(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,553,e=>{"use strict";var t=e.i(7744),i=e.i(4153);function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}var l=(0,t.forwardRef)(function(e,i){var l=e.color,r=e.size,o=void 0===r?24:r,d=function(e,t){if(null==e)return{};var i,n,l=function(e,t){if(null==e)return{};var i,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(l[i]=e[i]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],!(t.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(e,i)&&(l[i]=e[i])}return l}(e,["color","size"]);return t.default.createElement("svg",n({ref:i,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:void 0===l?"currentColor":l,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),t.default.createElement("circle",{cx:"11",cy:"11",r:"8"}),t.default.createElement("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}))});l.propTypes={color:i.default.string,size:i.default.oneOfType([i.default.string,i.default.number])},l.displayName="Search",e.s(["Search",0,l],553)},82325,e=>{"use strict";var t=e.i(9735),i=e.i(28095),n=e.i(22803),l=e.i(64954),r=e.i(43174);e.i(3159);var o=e.i(46907),d=e.i(12945),s=e.i(19740),a=e.i(86400);let c=e=>{if(null===e||!a.default.brand.calendarDateString.is(e))return null;let[t,i,n]=e.split("-"),l=Number(t),r=Number(i),o=Number(n);return Number.isFinite(l)&&Number.isFinite(r)&&Number.isFinite(o)?new Date(l,r-1,o):null},f=e=>null!==e&&a.default.brand.calendarDateString.is(e)?e.replaceAll("-",""):"",h=(0,o.observer)(function(){let{filteredServiceWorkerList:e}=r.default.serviceWorker.info.byServiceWorker,{show:i}=r.default.modal.serviceWorkerDetail;return(0,t.jsx)(x,{children:(0,t.jsxs)(p,{children:[(0,t.jsx)(g,{children:(0,t.jsxs)(u,{children:[(0,t.jsx)(b,{style:{width:84},children:"관리번호"}),(0,t.jsx)(b,{style:{width:150},children:"성명"}),(0,t.jsx)(b,{style:{width:92},children:"생년월일"}),(0,t.jsxs)(b,{style:{width:86},children:["연령",(0,t.jsx)("br",{}),"(만 나이)"]}),(0,t.jsx)(b,{style:{width:55},children:"성별"}),(0,t.jsx)(b,{style:{width:148},children:"전화번호"}),(0,t.jsx)(b,{style:{flex:1},children:"주소"}),(0,t.jsx)(b,{style:{width:78},children:"상태"}),(0,t.jsx)(b,{style:{width:115},children:"접수일"}),(0,t.jsx)(b,{style:{width:252},children:"입사일 - 퇴사일 (근속기간)"}),(0,t.jsx)(b,{style:{width:130},children:"관리"})]})}),(0,t.jsx)(m,{children:e.map(e=>{let n,l,r,{id:o,name:h,residentRegistrationNumber:x,gender:p,phoneNumber:g,address:m,addressDetail:b,status:j,firstRegisteredDate:_,workStartDate:v,workEndDate:z}=e,C=null===x?null:a.default.brand.maskedResidentRegistrationNumber.extractInfo(x),k=C?.birthDate??"-",I=null===C?"-":C.age,S=null===p?"-":d.default[p].label.at(0),O=[m,b].filter(e=>"string"==typeof e&&""!==e.trim()).join(" "),E=null===_?"-":f(_)||"-",R=null===v?"-":(n=f(v),l=f(z),r=((e,t)=>{if(null===e)return"-";let i=c(e),n=c(t)??new Date;if(null===i)return"-";let l=i.getFullYear(),r=i.getMonth(),o=i.getDate(),d=n.getFullYear(),s=n.getMonth(),a=n.getDate(),f=(d-l)*12+(s-r);a<o&&(f-=1),f<0&&(f=0,d=l,s=r);let h=Math.floor(f/12),x=f%12,p=h>0?`${h}년`:"",u=x>0?`${x}개월`:"";return`${p} ${u}`.trim()||"0개월"})(v,z),""===n?"-":""===l?`${n} - (${r})`:`${n} - ${l} (${r})`);return(0,t.jsxs)(u,{children:[(0,t.jsx)(y,{style:{width:84},children:o}),(0,t.jsx)(y,{style:{width:150},children:h}),(0,t.jsx)(y,{style:{width:92},children:k}),(0,t.jsx)(y,{style:{width:86},children:I}),(0,t.jsx)(y,{style:{width:55},children:S}),(0,t.jsx)(y,{style:{width:148},children:g?.trim()===""?"-":g??"-"}),(0,t.jsx)(y,{style:{flex:1},children:""===O?"-":O}),(0,t.jsx)(y,{style:{width:78},children:s.SERVICE_WORKER_STATUS[j]}),(0,t.jsx)(y,{style:{width:115},children:E}),(0,t.jsx)(y,{style:{width:252},children:R}),(0,t.jsx)(y,{style:{width:130},children:(0,t.jsx)(w,{onClick:()=>{i(o)},children:"상세보기"})})]},o)})})]})})}),x=n.default.section.withConfig({componentId:"zh__sc-2f4a79ac-0"})`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
  min-width: 0;
  min-height: 0;
`,p=n.default.table.withConfig({componentId:"zh__sc-2f4a79ac-1"})`
  overflow-y: auto;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
  min-height: 0;
`,u=n.default.tr.withConfig({componentId:"zh__sc-2f4a79ac-2"})`
  display: flex;
  flex-shrink: 0;
  align-items: flex-start;
  align-self: stretch;
  justify-content: center;

  height: 52px;
`,g=n.default.thead.withConfig({componentId:"zh__sc-2f4a79ac-3"})`
  position: sticky;
  z-index: 1;
  top: 0;
  width: 100%;

  ${u} {
    border-top: 1px solid #e5e7eb;
    border-bottom: 1px solid #e5e7eb;
    background: #f9fafb;
  }
`,m=n.default.tbody.withConfig({componentId:"zh__sc-2f4a79ac-4"})`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
  min-height: 0;
`,b=n.default.th.withConfig({componentId:"zh__sc-2f4a79ac-5"})`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 16px;
  color: #131416;
`,y=n.default.td.withConfig({componentId:"zh__sc-2f4a79ac-6"})`
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
`,w=(0,n.default)(l.default.Button.Outlined).withConfig({componentId:"zh__sc-2f4a79ac-7"})`
  display: flex;
  gap: 4px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`;var j=e.i(553),_=e.i(10957);function v(e){return Object.prototype.hasOwnProperty.call(s.SERVICE_WORKER_STATUS,e)}let z=[{key:_.FILTER_ALL_VALUE,label:"전체"},...Object.keys(s.SERVICE_WORKER_STATUS).filter(v).map(e=>({key:e,label:s.SERVICE_WORKER_STATUS[e]}))],C=(0,o.observer)(function(){let{totalCount:e,statusFilter:i,setStatusFilter:n,searchText:l,setSearchText:o}=r.default.serviceWorker.info.byServiceWorker;return(0,t.jsxs)(k,{children:[(0,t.jsxs)(I,{children:[(0,t.jsxs)(S,{children:[(0,t.jsx)(O,{children:"활동지원사 목록"}),(0,t.jsxs)(E,{children:["(전체 ",e,"명)"]})]}),(0,t.jsx)(R,{role:"tablist","aria-label":"활동지원사 상태 필터",children:z.map(e=>{let l=i===e.key;return(0,t.jsx)(T,{type:"button",role:"tab","aria-selected":l,$active:l,onClick:()=>{var t;(t=e.key)===_.FILTER_ALL_VALUE?n(t):v(t)&&n(t)},children:e.label},e.key)})})]}),(0,t.jsxs)(W,{children:[(0,t.jsx)($,{value:l,onChange:e=>o(e.target.value),placeholder:"성명 검색","aria-label":"성명 검색"}),(0,t.jsx)(j.Search,{size:18,color:"#0a0a0a"})]})]})}),k=n.default.div.withConfig({componentId:"zh__sc-d1f896b8-0"})`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;

  padding: 16px;
`,I=n.default.div.withConfig({componentId:"zh__sc-d1f896b8-1"})`
  display: flex;
  gap: 24px;
  align-items: center;
  min-width: 0;
`,S=n.default.div.withConfig({componentId:"zh__sc-d1f896b8-2"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,O=n.default.div.withConfig({componentId:"zh__sc-d1f896b8-3"})`
  font-size: 20px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
  letter-spacing: -0.5px;
`,E=n.default.div.withConfig({componentId:"zh__sc-d1f896b8-4"})`
  font-size: 20px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #464c53;
  letter-spacing: -0.5px;
`,R=n.default.div.withConfig({componentId:"zh__sc-d1f896b8-5"})`
  overflow: hidden;
  display: flex;
  align-items: center;

  border: 1px solid #b1b8be;
  border-radius: 8px;

  background: #fff;
`,T=n.default.button.withConfig({componentId:"zh__sc-d1f896b8-6"})`
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
`,W=n.default.label.withConfig({componentId:"zh__sc-d1f896b8-7"})`
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
`,$=n.default.input.withConfig({componentId:"zh__sc-d1f896b8-8"})`
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
`,A=(0,o.observer)(function(){let{listStatus:e}=r.default.serviceWorker.info.byServiceWorker;return(0,t.jsxs)(F,{children:[(0,t.jsx)(C,{}),(0,t.jsx)(L,{children:"loading"===e?(0,t.jsx)(D,{children:"불러오는 중입니다."}):"error"===e?(0,t.jsx)(D,{children:"목록을 불러오지 못했습니다."}):(0,t.jsx)(h,{})})]})}),F=n.default.div.withConfig({componentId:"zh__sc-a7645a37-0"})`
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
`,L=n.default.div.withConfig({componentId:"zh__sc-a7645a37-1"})`
  overflow-y: auto;
  display: flex;
  flex: 1;
  align-items: stretch;

  padding: 16px;

  font-size: 14px;
  color: #4b5563;
`,D=n.default.div.withConfig({componentId:"zh__sc-a7645a37-2"})`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;

  color: #6b7280;
`,N=n.default.div.withConfig({componentId:"zh__sc-2072926e-0"})`
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
`,U=n.default.div.withConfig({componentId:"zh__sc-2072926e-1"})`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: flex-end;

  height: 48px;
`,P=(0,n.default)(l.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-2072926e-2"})`
  display: flex;
  gap: 4px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`;e.s(["default",0,function(){let{show:e}=r.default.modal.serviceWorkerCreate;return(0,t.jsxs)(N,{children:[(0,t.jsx)(U,{children:(0,t.jsxs)(P,{type:"button",onClick:e,children:[(0,t.jsx)(i.default,{sx:{fontSize:20}}),"신규 활동지원사 등록"]})}),(0,t.jsx)(A,{})]})}],82325)}]);