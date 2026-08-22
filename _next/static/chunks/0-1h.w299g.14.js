(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,75094,e=>{"use strict";var t=e.i(9735),i=e.i(24655),n=e.i(39635);e.i(3159);var l=e.i(46907),d=e.i(38803),s=e.i(64954),c=e.i(58362),o=e.i(12945),r=e.i(62150),a=e.i(41417),h=e.i(43174);let f=(0,l.observer)(function(){let{search:e}=h.default.serviceWorker,{selectedRegions:l,selectedGenders:d,selectedCareTypes:s,selectedAgeRanges:f,selectedTimes:D,toggleRegion:$,toggleGender:R,toggleCareType:E,toggleAgeRange:O,setTimes:N,search:T}=e;return(0,t.jsxs)(x,{children:[(0,t.jsxs)(p,{children:[(0,t.jsx)(u,{children:"제공인력 찾기"}),(0,t.jsxs)(g,{children:[(0,t.jsx)(n.default,{sx:{fontSize:20}}),(0,t.jsx)(m,{children:"근무 조건을 선택해 적합한 제공인력을 찾을 수 있습니다."})]})]}),(0,t.jsxs)(j,{children:[(0,t.jsxs)(b,{children:[(0,t.jsxs)(w,{children:[(0,t.jsx)(_,{children:"서비스 가능 지역"}),(0,t.jsx)(z,{children:Object.keys(r.default).map(e=>{if(!(e in r.default))return null;let i=l.includes(e);return(0,t.jsxs)(C,{children:[(0,t.jsx)(I,{type:"checkbox",checked:i,onChange:()=>$(e)}),r.default[e].label]},e)})})]}),(0,t.jsxs)(w,{children:[(0,t.jsx)(_,{children:"성별"}),(0,t.jsx)(z,{children:Object.keys(o.default).map(e=>{if(!(e in o.default))return null;let i=d.includes(e);return(0,t.jsxs)(C,{children:[(0,t.jsx)(I,{type:"checkbox",checked:i,onChange:()=>R(e)}),o.default[e].label]},e)})})]}),(0,t.jsxs)(w,{children:[(0,t.jsx)(_,{children:"가능한 근무내용"}),(0,t.jsx)(z,{children:Object.keys(a.default).map(e=>{if(!(e in a.default))return null;let i=s.includes(e);return(0,t.jsxs)(C,{children:[(0,t.jsx)(I,{type:"checkbox",checked:i,onChange:()=>E(e)}),a.default[e].label]},e)})})]}),(0,t.jsxs)(w,{children:[(0,t.jsx)(_,{children:"연령대"}),(0,t.jsx)(z,{children:Object.keys(c.default).map(e=>{if(!(e in c.default))return null;let i=f.includes(e);return(0,t.jsxs)(C,{children:[(0,t.jsx)(I,{type:"checkbox",checked:i,onChange:()=>O(e)}),c.default[e].label]},e)})})]}),(0,t.jsxs)(w,{children:[(0,t.jsx)(y,{children:(0,t.jsx)(_,{children:"근무 가능 시간"})}),(0,t.jsx)(z,{children:(0,t.jsx)(S,{value:D,onChange:({currentTarget:e})=>N(e.value)})})]})]}),(0,t.jsx)(v,{}),(0,t.jsxs)(k,{onClick:()=>void T(),children:[(0,t.jsx)(i.default,{sx:{fontSize:16}}),"검색하기"]})]})]})}),x=d.default.div.withConfig({componentId:"zh__sc-e259b000-0"})`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`,p=d.default.div.withConfig({componentId:"zh__sc-e259b000-1"})`
  display: flex;
  gap: 12px;
  align-items: center;
  align-self: stretch;

  height: 48px;
`,u=d.default.div.withConfig({componentId:"zh__sc-e259b000-2"})`
  font-size: 20px;
  font-weight: 700;
  line-height: normal;
  color: #0a0a0a;
  letter-spacing: -0.5px;
`,g=d.default.div.withConfig({componentId:"zh__sc-e259b000-3"})`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;

  color: #464c53;
`,m=d.default.div.withConfig({componentId:"zh__sc-e259b000-4"})`
  font-size: 18px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px; /* 111.111% */
`,j=d.default.div.withConfig({componentId:"zh__sc-e259b000-5"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  align-self: stretch;
  justify-content: center;

  width: 100%;
  padding: 16px 16px 24px;
  border: 1px solid #e5e7eb;

  background: #fff;
`,b=d.default.div.withConfig({componentId:"zh__sc-e259b000-6"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`,w=d.default.div.withConfig({componentId:"zh__sc-e259b000-7"})`
  display: flex;
  gap: 24px;
  align-items: center;

  width: 100%;
  min-height: 36px;
  padding: 0 12px;
`,y=d.default.div.withConfig({componentId:"zh__sc-e259b000-8"})`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
`,_=d.default.div.withConfig({componentId:"zh__sc-e259b000-9"})`
  width: 110px;
  font-size: 16px;
  font-weight: 500;
  color: #000;
`,z=d.default.div.withConfig({componentId:"zh__sc-e259b000-10"})`
  display: flex;
  flex: 1;
  gap: 24px;
`,C=d.default.label.withConfig({componentId:"zh__sc-e259b000-11"})`
  cursor: pointer;
  user-select: none;

  display: flex;
  gap: 8px;
  align-items: center;

  font-size: 16px;
  font-weight: 500;
  color: #000;
`,I=(0,d.default)(s.default.Input.Check).attrs({$iconSizeRatio:1.5}).withConfig({componentId:"zh__sc-e259b000-12"})`
  width: 24px;
  height: 24px;
`,v=d.default.div.withConfig({componentId:"zh__sc-e259b000-13"})`
  width: 100%;
  height: 1px;
  background: #e5e7eb;
`,k=(0,d.default)(s.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-e259b000-14"})`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;

  width: 193px;
  height: 40px;
  padding: 8px 16px;
`,S=(0,d.default)(s.default.Input.TimeSlider).withConfig({componentId:"zh__sc-e259b000-15"})`
  width: 793px;
`;e.s(["default",0,f])},17470,e=>{"use strict";var t=e.i(9735),i=e.i(74483);e.i(3159);var n=e.i(46907),l=e.i(38803),d=e.i(64954),s=e.i(27997),c=e.i(12945),o=e.i(19740),r=e.i(43174),a=e.i(86400),h=e.i(44968);let f=e=>{if(null===e||!a.default.brand.calendarDateString.is(e))return null;let[t,i,n]=e.split("-"),l=Number(t),d=Number(i),s=Number(n);return Number.isFinite(l)&&Number.isFinite(d)&&Number.isFinite(s)?new Date(l,d-1,s):null},x=e=>null!==e&&a.default.brand.calendarDateString.is(e)?e.replaceAll("-",""):"",p=(0,n.observer)(function(){let e=r.default.data.serviceWorker.list.data??[],{show:n}=r.default.modal.serviceWorkerDetail;return(0,t.jsxs)(u,{children:[(0,t.jsxs)(g,{children:[(0,t.jsx)(m,{children:"검색 결과"}),(0,t.jsxs)(j,{children:["총 ",e.length,"명"]})]}),(0,t.jsx)(b,{children:(0,t.jsxs)(w,{children:[(0,t.jsx)(k,{children:(0,t.jsxs)(y,{children:[(0,t.jsx)(D,{style:{width:150},children:"성명"}),(0,t.jsx)(D,{style:{width:92},children:"생년월일"}),(0,t.jsxs)(D,{style:{width:86},children:["연령",(0,t.jsx)("br",{}),"(만 나이)"]}),(0,t.jsx)(D,{style:{width:55},children:"성별"}),(0,t.jsx)(D,{style:{width:148},children:"전화번호"}),(0,t.jsx)(D,{style:{flex:1},children:"주소"}),(0,t.jsx)(D,{style:{width:78},children:"상태"}),(0,t.jsx)(D,{style:{width:115},children:"접수일"}),(0,t.jsx)(D,{style:{width:252},children:"계약 기간 (근속기간)"}),(0,t.jsx)(D,{style:{width:240},children:0===e.length?"":"관리"})]})}),(0,t.jsxs)(S,{children:[0===e.length&&(0,t.jsx)(_,{children:(0,t.jsxs)(z,{colSpan:10,children:[(0,t.jsx)(i.default,{sx:{fontSize:24}}),(0,t.jsxs)(C,{children:[(0,t.jsx)(I,{children:"검색된 제공인력이 없습니다."}),(0,t.jsx)(v,{children:"원하는 근무 조건을 선택하고 적합한 제공인력을 찾아보세요."})]})]})}),e.map(e=>{let i,l,d,{id:r,name:p,residentRegistrationNumber:u,gender:g,phoneNumber:m,address:j,addressDetail:b,status:w,firstRegisteredDate:_,employmentContracts:z}=e,C=null===u?null:a.default.brand.maskedResidentRegistrationNumber.extractInfo(u),I=C?.birthDate??"-",v=null===C?"-":C.age,k=null===g?"-":c.default[g].label.at(0),S=[j,b].filter(e=>"string"==typeof e&&""!==e.trim()).join(" "),D=null===_?"-":x(_)||"-",O=(0,h.getRepresentativeEmploymentContract)(z),N=O?.contractStartDate??null,T=O?.contractEndDate??null,F=null===N?"-":(i=x(N),l=x(T),d=((e,t)=>{if(null===e)return"-";let i=f(e),n=f(t)??new Date;if(null===i)return"-";let l=i.getFullYear(),d=i.getMonth(),s=i.getDate(),c=n.getFullYear(),o=n.getMonth(),r=n.getDate(),a=(c-l)*12+(o-d);r<s&&(a-=1),a<0&&(a=0,c=l,o=d);let h=Math.floor(a/12),x=a%12,p=h>0?`${h}년`:"",u=x>0?`${x}개월`:"";return`${p} ${u}`.trim()||"0개월"})(N,T),""===i?"-":""===l?`${i} - (${d})`:`${i} - ${l} (${d})`),A=(0,h.getRepresentativeContractExpirationReminder)(z.map(e=>({contractId:e.id,contractStatus:e.status,contractStartDate:e.contractStartDate,contractEndDate:e.contractEndDate})));return(0,t.jsxs)(y,{children:[(0,t.jsx)($,{style:{width:150},children:p}),(0,t.jsx)($,{style:{width:92},children:I}),(0,t.jsx)($,{style:{width:86},children:v}),(0,t.jsx)($,{style:{width:55},children:k}),(0,t.jsx)($,{style:{width:148},children:m?.trim()===""?"-":m??"-"}),(0,t.jsx)($,{style:{flex:1},children:""===S?"-":S}),(0,t.jsx)($,{style:{width:78},children:o.SERVICE_WORKER_STATUS[w]}),(0,t.jsx)($,{style:{width:115},children:D}),(0,t.jsx)($,{style:{width:252,justifyContent:"flex-start"},children:(0,t.jsxs)(R,{children:[(0,t.jsx)("span",{children:F}),null!==A?(0,t.jsxs)(s.default,{$color:A.color,children:["계약 만료 ",A.remainingDays,"일 남음"]}):null]})}),(0,t.jsx)($,{style:{width:240},children:(0,t.jsx)(E,{onClick:()=>{n(r)},children:"상세보기"})})]},r)})]})]})})]})}),u=l.default.div.withConfig({componentId:"zh__sc-5fb3e697-0"})`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`,g=l.default.div.withConfig({componentId:"zh__sc-5fb3e697-1"})`
  display: flex;
  gap: 10px;
  align-items: center;
  align-self: stretch;

  height: 48px;
`,m=l.default.div.withConfig({componentId:"zh__sc-5fb3e697-2"})`
  font-size: 20px;
  font-weight: 700;
  color: #0a0a0a;
  letter-spacing: -0.5px;
`,j=l.default.div.withConfig({componentId:"zh__sc-5fb3e697-3"})`
  display: flex;
  align-items: flex-start;

  padding: 4px 10px;
  border-radius: 999px;

  font-size: 13px;
  font-weight: 500;
  font-style: normal;
  color: #1d58d1;

  background: #ecf2ff;
`,b=l.default.section.withConfig({componentId:"zh__sc-5fb3e697-4"})`
  overflow: hidden;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
  min-width: 0;
  min-height: 0;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
`,w=l.default.table.withConfig({componentId:"zh__sc-5fb3e697-5"})`
  overflow-y: auto;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
  min-height: 0;
`,y=l.default.tr.withConfig({componentId:"zh__sc-5fb3e697-6"})`
  display: flex;
  flex-shrink: 0;
  align-items: flex-start;
  align-self: stretch;
  justify-content: center;

  min-height: 44px;
`,_=(0,l.default)(y).withConfig({componentId:"zh__sc-5fb3e697-7"})`
  height: 240px;
`,z=l.default.td.withConfig({componentId:"zh__sc-5fb3e697-8"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  align-self: stretch;
  justify-content: center;

  color: #494f53;
`,C=l.default.div.withConfig({componentId:"zh__sc-5fb3e697-9"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  align-self: stretch;
  justify-content: center;
`,I=l.default.div.withConfig({componentId:"zh__sc-5fb3e697-10"})`
  font-size: 16px;
  font-weight: 700;
`,v=l.default.div.withConfig({componentId:"zh__sc-5fb3e697-11"})`
  font-size: 16px;
`,k=l.default.thead.withConfig({componentId:"zh__sc-5fb3e697-12"})`
  position: sticky;
  z-index: 1;
  top: 0;
  width: 100%;

  ${y} {
    height: 52px;
    border-bottom: 1px solid #e5e7eb;
    background: #f3f5f9;
  }
`,S=l.default.tbody.withConfig({componentId:"zh__sc-5fb3e697-13"})`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
  min-height: 0;

  ${y} {
    border-bottom: 1px solid #ebedf1;
    background: #fff;
  }

  ${y}:last-child {
    border-bottom: none;
  }
`,D=l.default.th.withConfig({componentId:"zh__sc-5fb3e697-14"})`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;

  font-size: 16px;
  font-weight: 700;
  color: #131416;
`,$=l.default.td.withConfig({componentId:"zh__sc-5fb3e697-15"})`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;

  height: 100%;
  padding: 0 14px;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  color: #464c53;
  text-align: center;
`,R=l.default.div.withConfig({componentId:"zh__sc-5fb3e697-16"})`
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: flex-start;
  justify-content: center;

  text-align: left;
`,E=(0,l.default)(d.default.Button.Outlined).withConfig({componentId:"zh__sc-5fb3e697-17"})`
  display: flex;
  gap: 4px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`;e.s(["default",0,p])}]);