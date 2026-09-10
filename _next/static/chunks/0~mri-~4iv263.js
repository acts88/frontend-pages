(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,29290,e=>{"use strict";e.i(3159);var t=e.i(46907),i=e.i(33261),n=e.i(7744),l=e.i(43174);let o=(0,t.observer)(function(){let e=(0,i.useSearchParams)(),t=(0,i.usePathname)(),o=(0,i.useRouter)(),{activeServiceList:a,setSelectedServiceType:d}=l.default.client.info.byDocument;return(0,n.useEffect)(()=>()=>{d(null)},[d]),(0,n.useEffect)(()=>{let i=e.get("serviceType"),n=a.find(e=>e.type.toLowerCase()===i)??a[0];if(void 0===n)return void d(null);d(n.type);let l=n.type.toLowerCase();if(i!==l){let i=new URLSearchParams(e.toString());i.set("serviceType",l),o.replace(`${t}?${i.toString()}`)}},[a,t,o,e,d]),null});e.s(["default",0,o])},38272,e=>{"use strict";var t=e.i(9735);e.i(3159);var i=e.i(46907),n=e.i(33261),l=e.i(38803),o=e.i(7242),a=e.i(43174);let d=(0,i.observer)(function(){let e=(0,n.useRouter)(),i=(0,n.usePathname)(),l=(0,n.useSearchParams)(),{activeServiceList:d,selectedServiceType:h}=a.default.client.info.byDocument;return(0,t.jsx)(s,{children:(0,t.jsxs)(c,{children:[(0,t.jsx)(r,{children:"서비스 구분"}),(0,t.jsx)(p,{children:d.map(n=>(0,t.jsxs)(f,{type:"button",$active:h===n.type,onClick:()=>{var t;let o,a;return t=n.type,(o=new URLSearchParams(l.toString())).set("serviceType",t.toLowerCase()),a=o.toString(),void e.push(""===a?i:`${i}?${a}`)},children:[o.default[n.type].label," 서비스"]},n.type))})]})})}),s=l.default.div.withConfig({componentId:"zh__sc-21b9ea5f-0"})`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;
`,c=l.default.div.withConfig({componentId:"zh__sc-21b9ea5f-1"})`
  display: flex;
  gap: 24px;
  align-items: center;
`,r=l.default.p.withConfig({componentId:"zh__sc-21b9ea5f-2"})`
  font-size: 20px;
  font-weight: 700;
  line-height: normal;
  color: #0a0a0a;
  letter-spacing: -0.5px;
  white-space: nowrap;
`,p=l.default.div.withConfig({componentId:"zh__sc-21b9ea5f-3"})`
  overflow: hidden;
  display: flex;

  height: 48px;
  border: 1px solid #b1b8be;
  border-radius: 8px;

  background: #fff;
`,f=l.default.button.withConfig({componentId:"zh__sc-21b9ea5f-4"})`
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
`;e.s(["default",0,d])},27576,e=>{"use strict";var t=e.i(9735),i=e.i(88552);e.i(3159);var n=e.i(46907),l=e.i(7744),o=e.i(38803),a=e.i(98273),d=e.i(43174),s=e.i(84673),c=e.i(553),r=e.i(64954),p=e.i(86400);let f={"출력 대기":"초안 검토하기","서류 대조":"수기 서류 업로드하기","업데이트 필요":"수기 서류 업로드하기","연동 완료":"서류 최종 확인하기"},h={"출력 대기":"#2264E8","서류 대조":"#FF6900","업데이트 필요":"#FF6900","연동 완료":"#FF6900"},x=e=>null===e?null:p.default.brand.maskedResidentRegistrationNumber.is(e)?p.default.brand.maskedResidentRegistrationNumber.extractBirthDate(e):p.default.brand.residentRegistrationNumber.is(e)?e.replace(/[^0-9]/g,"").slice(0,6):null;function u({drawerState:e,onClose:i,onClientActionClick:n}){let[o,a]=(0,l.useState)(""),d=(0,l.useMemo)(()=>e.clients.map(e=>({...e,_searchableName:p.default.brand.searchableText.create(e.clientName)})),[e.clients]),r=(0,l.useMemo)(()=>{let e=o.trim();return""===e?d:d.filter(t=>{let i=(x(t.clientResidentRegistrationNumber)??"").replace(/[^0-9]/g,""),n=e.replace(/[^0-9]/g,""),l=p.default.brand.searchableText.isMatch(t._searchableName,e),o=""!==n&&i.includes(n);return l||o})},[o,d]);return(0,t.jsxs)(g,{children:[(0,t.jsx)(m,{role:"presentation"}),(0,t.jsxs)(b,{children:[(0,t.jsxs)(w,{children:[(0,t.jsx)(_,{}),(0,t.jsx)(y,{children:`${e.templateName} [${e.statusLabel}] 목록 (총 ${e.clients.length}건)`}),(0,t.jsx)(j,{type:"button","aria-label":"드로어 닫기",onClick:i,children:(0,t.jsx)(s.default,{sx:{fontSize:16}})})]}),(0,t.jsx)(z,{children:(0,t.jsxs)(C,{children:[(0,t.jsx)(I,{value:o,placeholder:"이름 또는 생년월일 검색",onChange:e=>{a(e.target.value)}}),(0,t.jsx)(v,{children:(0,t.jsx)(c.Search,{color:"#0a0a0a",size:16})})]})}),(0,t.jsxs)(k,{children:[(0,t.jsxs)(S,{children:[(0,t.jsx)($,{children:"이용자"}),(0,t.jsx)($,{children:"생년월일"}),(0,t.jsx)($,{"aria-hidden":!0})]}),(0,t.jsxs)(R,{children:[r.map(i=>{let l;return(0,t.jsxs)(T,{children:[(0,t.jsx)(N,{children:i.clientName}),(0,t.jsx)(N,{children:null!==(l=x(i.clientResidentRegistrationNumber))?l:"-"}),(0,t.jsx)(N,{children:(0,t.jsx)(F,{type:"button",$color:h[e.statusLabel]??"#2264E8",onClick:()=>{n(i)},children:f[e.statusLabel]??"문서 확인하기"})})]},`${i.contractId}-${i.clientId}`)}),0===r.length&&(0,t.jsx)(G,{children:"검색 결과가 없습니다."})]})]})]})]})}let g=o.default.div.withConfig({componentId:"zh__sc-6a90354c-0"})`
  position: absolute;
  z-index: 30;
  inset: 0;

  display: flex;
  justify-content: flex-end;
`,m=o.default.div.withConfig({componentId:"zh__sc-6a90354c-1"})`
  position: absolute;
  inset: 0;
  background: transparent;
`,b=o.default.aside.withConfig({componentId:"zh__sc-6a90354c-2"})`
  position: relative;
  z-index: 1;

  display: flex;
  flex-direction: column;

  width: 1204px;
  max-width: 100%;
  height: 100%;

  background: #fff;
  box-shadow: -2px 16px 20px 0 rgb(0 0 0 / 36%);
`,w=o.default.header.withConfig({componentId:"zh__sc-6a90354c-3"})`
  display: grid;
  grid-template-columns: 56px 1fr 56px;
  align-items: center;

  height: 68px;
  padding: 0 16px;
  border-bottom: 1px solid #e5e7eb;
`,_=o.default.div.withConfig({componentId:"zh__sc-6a90354c-4"})`
  width: 56px;
  height: 36px;
`,y=o.default.h4.withConfig({componentId:"zh__sc-6a90354c-5"})`
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
  color: #0a0a0a;
  text-align: center;
`,j=(0,o.default)(r.default.Button.Outlined).withConfig({componentId:"zh__sc-6a90354c-6"})`
  display: flex;
  gap: 4px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,z=o.default.div.withConfig({componentId:"zh__sc-6a90354c-7"})`
  display: flex;
  align-items: center;

  height: 72px;
  padding: 16px;
  border-bottom: 1px solid #e5e7eb;
`,C=o.default.label.withConfig({componentId:"zh__sc-6a90354c-8"})`
  cursor: text;

  display: flex;
  gap: 8px;
  align-items: center;

  width: 360px;
  height: 40px;
  padding: 8px 12px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;

  background: #fff;

  &:hover {
    border-color: #b8c0d0;
    background: #fbfcff;
  }

  &:focus-within {
    border-color: #5635ff;
    background: #fbfcff;
  }
`,I=o.default.input.withConfig({componentId:"zh__sc-6a90354c-9"})`
  width: 100%;
  min-width: 0;
  border: none;

  font-size: 15px;
  font-weight: 400;
  line-height: 19px;
  color: #1f2129;

  background: transparent;

  &::placeholder {
    color: #9ca3af;
  }

  &:focus {
    outline: none;
  }
`,v=o.default.span.withConfig({componentId:"zh__sc-6a90354c-10"})`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 16px;
  height: 16px;

  color: #9ca3af;
`,k=o.default.div.withConfig({componentId:"zh__sc-6a90354c-11"})`
  display: flex;
  flex: 1;
  flex-direction: column;
  min-height: 0;
`,S=o.default.div.withConfig({componentId:"zh__sc-6a90354c-12"})`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  height: 48px;
  border-bottom: 1px solid #dbe0e8;

  background: #f8fafc;
`,$=o.default.div.withConfig({componentId:"zh__sc-6a90354c-13"})`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 48px;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 48px; /* 300% */
  color: #131416;
  text-align: center;
`,R=o.default.div.withConfig({componentId:"zh__sc-6a90354c-14"})`
  overflow-y: auto;
  flex: 1;
`,T=o.default.div.withConfig({componentId:"zh__sc-6a90354c-15"})`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  min-height: 52px;
  border-bottom: 1px solid #e5e7eb;
`,N=o.default.div.withConfig({componentId:"zh__sc-6a90354c-16"})`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 52px;
  padding: 8px 12px;

  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: 52px; /* 325% */
  color: #464c53;
  text-align: center;
`,F=o.default.button.withConfig({componentId:"zh__sc-6a90354c-17"})`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;

  width: 175px;
  height: 32px;
  padding: 4px 8px;
  border: 1px solid ${({$color:e})=>e};
  border-radius: 4px;

  font-size: 16px;
  font-weight: 500;
  line-height: 20px; /* 125% */
  color: #fff;
  text-align: center;

  background: ${({$color:e})=>e};
`,G=o.default.div.withConfig({componentId:"zh__sc-6a90354c-18"})`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 120px;

  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: #6b7280;
`,P={PROVIDE:"ⓘ 초기서류 1·2·3·5번이 모두 전산완료되면 자동 생성됩니다.",TERMINATE:"ⓘ 계약 종료 30일 전 또는 중도 해지 시, 8·9번이 자동 생성됩니다.",OTHERS:"ⓘ 예외지급 공문은 이용자별 보기에서 확인할 수 있습니다."},L={"연동 완료":"linked","서류 대조":"needUpdate","업데이트 필요":"needUpdate","출력 대기":"waiting"},E=e=>L[e]??"waiting",D=o.default.div.withConfig({componentId:"zh__sc-ca3efb39-0"})`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;

  padding: 20px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;

  background: #fff;
`,M=o.default.div.withConfig({componentId:"zh__sc-ca3efb39-1"})`
  display: flex;
  align-items: center;

  height: 36px;

  font-size: 20px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #0f0f14;
`,U=o.default.div.withConfig({componentId:"zh__sc-ca3efb39-2"})`
  overflow-x: auto;
  align-self: stretch;
`,B=o.default.div.withConfig({componentId:"zh__sc-ca3efb39-3"})`
  display: grid;
  grid-template-columns: repeat(4, minmax(360px, 1fr));
  gap: 12px;

  min-width: 1500px;
  min-height: 760px;
`,O=o.default.section.withConfig({componentId:"zh__sc-ca3efb39-4"})`
  display: flex;
  flex-direction: column;
  gap: 12px;

  padding: 16px 12px 12px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;

  background: #f9fafb;
`,A=o.default.header.withConfig({componentId:"zh__sc-ca3efb39-5"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-height: 58px;
`,K=o.default.h3.withConfig({componentId:"zh__sc-ca3efb39-6"})`
  margin: 0;

  font-size: 17px;
  font-weight: 700;
  font-style: normal;
  line-height: 20px;
  color: #171a21;
`,V=o.default.p.withConfig({componentId:"zh__sc-ca3efb39-7"})`
  margin: 0;

  font-size: 14px;
  font-weight: 400;
  font-style: normal;
  line-height: 17px;
  color: #5e6673;
`,H=o.default.div.withConfig({componentId:"zh__sc-ca3efb39-8"})`
  flex: 1;

  min-height: 640px;
  padding: 12px;
  border-radius: 8px;

  background: #fff;
`,W=o.default.ul.withConfig({componentId:"zh__sc-ca3efb39-9"})`
  display: flex;
  flex-direction: column;
  gap: 8px;

  margin: 0;
  padding: 0;

  list-style: none;
`,q=o.default.li.withConfig({componentId:"zh__sc-ca3efb39-10"})`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
  align-self: stretch;

  height: 134px;
  padding: 12px;
  border: 1px solid #dbe0e8;
  border-radius: 8px;

  background: #fff;
`,J=o.default.div.withConfig({componentId:"zh__sc-ca3efb39-11"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;

  height: 28px;
`,Q=o.default.span.withConfig({componentId:"zh__sc-ca3efb39-12"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 28px;
  height: 28px;
  border-radius: 6px;

  font-size: 12px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #464c56;

  background: #eef1f5;
`,X=o.default.p.withConfig({componentId:"zh__sc-ca3efb39-13"})`
  font-size: 15px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #1f2129;
`,Y=o.default.div.withConfig({componentId:"zh__sc-ca3efb39-14"})`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 2px;
`,Z=o.default.div.withConfig({componentId:"zh__sc-ca3efb39-15"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;

  min-height: 36px;
  padding: 6px 4px;

  & + & {
    border-top: 1px solid #dbe0e8;
  }
`,ee=o.default.span.withConfig({componentId:"zh__sc-ca3efb39-16"})`
  display: flex;
  gap: 2px;
  align-items: center;

  min-height: 24px;
  padding: 4px 6px;
  border-radius: 999px;

  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  color: #fff;

  background: ${({$tone:e})=>"waiting"===e?"#2264E8":"#FF6900"};
`,et=o.default.span.withConfig({componentId:"zh__sc-ca3efb39-17"})`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 14px;
  height: 14px;
`,ei=o.default.button.withConfig({componentId:"zh__sc-ca3efb39-18"})`
  cursor: pointer;

  display: inline-flex;
  gap: 2px;
  align-items: center;

  height: 24px;
  padding: 0;
  border: none;

  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  color: ${({$isSelected:e})=>e?"#4F39F6":"#1F2129"};

  background: transparent;
`,en=o.default.p.withConfig({componentId:"zh__sc-ca3efb39-19"})`
  margin: 0;

  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: #4b5563;
`,el=(0,n.observer)(function(){let{templateDocumentsStatus:e,templatePhaseGroupsWithStatuses:n}=d.default.client.info.byDocument,[o,s]=(0,l.useState)(null),c=null===o?n:n.filter(e=>e.phaseGroup===o.selectedPhaseGroup),r=new Map(n.flatMap(e=>e.templates).map((e,t)=>[e.id,t+1])),p=(()=>{if(null===o)return null;let e=n.find(e=>e.phaseGroup===o.selectedPhaseGroup),t=e?.templates.find(e=>e.id===o.selectedTemplateId),i=t?.statusGroups.find(e=>e.status===o.selectedStatus);return{...o,clients:i?.clients??[]}})();return(0,t.jsxs)(D,{children:[(0,t.jsx)(M,{children:"서류별 처리 현황"}),(0,t.jsx)(U,{children:(0,t.jsx)(B,{children:c.map(n=>(0,t.jsxs)(O,{children:[(0,t.jsxs)(A,{children:[(0,t.jsx)(K,{children:`${n.phaseGroupLabel} ${n.templateCount}종`}),(P[n.phaseGroup]??null)!==null&&(0,t.jsx)(V,{children:P[n.phaseGroup]})]}),(0,t.jsx)(H,{children:"loading"===e?(0,t.jsx)(en,{children:"이용자 문서 현황을 불러오는 중입니다."}):(0,t.jsx)(W,{children:n.templates.map(e=>{let l=e.statusGroups.filter(e=>e.clients.length>0);return 0===l.length?null:(0,t.jsxs)(q,{children:[(0,t.jsxs)(J,{children:[(0,t.jsx)(Q,{children:String(r.get(e.id)??0).padStart(2,"0")}),(0,t.jsx)(X,{children:e.name})]}),(0,t.jsx)(Y,{children:l.map(l=>{let d=null!==o&&o.selectedTemplateId===e.id&&o.selectedStatus===l.status;return(0,t.jsxs)(Z,{children:[(0,t.jsxs)(ee,{$tone:E(l.label),children:["linked"===E(l.label)&&(0,t.jsx)(et,{children:(0,t.jsx)(a.default.WandShine,{size:14})}),l.label," · ",l.clients.length,"건"]}),(0,t.jsxs)(ei,{$isSelected:null===o||d,type:"button",onClick:()=>{s({templateName:e.name,statusLabel:l.label,clients:l.clients,selectedPhaseGroup:n.phaseGroup,selectedTemplateId:e.id,selectedStatus:l.status})},title:l.clients.map(e=>e.clientName).join(", "),children:["이용자 리스트 보기",(0,t.jsx)(i.default,{sx:{fontSize:14}})]})]},l.status)})})]},e.id)})})})]},n.phaseGroup))})}),null!==p&&(0,t.jsx)(u,{drawerState:p,onClose:()=>{s(null)},onClientActionClick:e=>{d.default.modal.documentView.openFromByDocument(p.clients.map(e=>({contractId:e.contractId,documentId:e.documentId})),e.documentId)}})]})});e.s(["default",0,el],27576)}]);