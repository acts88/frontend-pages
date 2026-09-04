(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,553,e=>{"use strict";var t=e.i(7744),i=e.i(4153);function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}var o=(0,t.forwardRef)(function(e,i){var o=e.color,r=e.size,l=void 0===r?24:r,s=function(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],!(t.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}(e,["color","size"]);return t.default.createElement("svg",n({ref:i,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:void 0===o?"currentColor":o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),t.default.createElement("circle",{cx:"11",cy:"11",r:"8"}),t.default.createElement("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}))});o.propTypes={color:i.default.string,size:i.default.oneOfType([i.default.string,i.default.number])},o.displayName="Search",e.s(["Search",0,o],553)},31491,e=>{"use strict";var t=e.i(9735);e.i(3159);var i=e.i(46907),n=e.i(33261),o=e.i(38803),r=e.i(7242),l=e.i(43174);let s=(0,i.observer)(function(){let e=(0,n.useRouter)(),i=(0,n.usePathname)(),o=(0,n.useSearchParams)(),{activeServiceList:s,selectedServiceType:h}=l.default.serviceWorker.info.byDocument;return(0,t.jsx)(a,{children:(0,t.jsxs)(d,{children:[(0,t.jsx)(c,{children:"서비스 구분"}),(0,t.jsx)(f,{children:s.map(n=>(0,t.jsxs)(p,{type:"button",$active:h===n.type,onClick:()=>{var t;let r,l;return t=n.type,(r=new URLSearchParams(o.toString())).set("serviceType",t.toLowerCase()),l=r.toString(),void e.push(""===l?i:`${i}?${l}`)},children:[r.default[n.type].label," 서비스"]},n.type))})]})})}),a=o.default.div.withConfig({componentId:"zh__sc-e281efe0-0"})`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;
`,d=o.default.div.withConfig({componentId:"zh__sc-e281efe0-1"})`
  display: flex;
  gap: 24px;
  align-items: center;
`,c=o.default.p.withConfig({componentId:"zh__sc-e281efe0-2"})`
  font-size: 20px;
  font-weight: 700;
  line-height: normal;
  color: #0a0a0a;
  letter-spacing: -0.5px;
  white-space: nowrap;
`,f=o.default.div.withConfig({componentId:"zh__sc-e281efe0-3"})`
  overflow: hidden;
  display: flex;

  height: 48px;
  border: 1px solid #b1b8be;
  border-radius: 8px;

  background: #fff;
`,p=o.default.button.withConfig({componentId:"zh__sc-e281efe0-4"})`
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
`;e.s(["default",0,s])},34380,e=>{"use strict";e.i(3159);var t=e.i(46907),i=e.i(33261),n=e.i(7744),o=e.i(43174);let r=(0,t.observer)(function(){let e=(0,i.useRouter)(),t=(0,i.usePathname)(),r=(0,i.useSearchParams)(),{activeServiceList:l,setSelectedServiceType:s}=o.default.serviceWorker.info.byDocument;return(0,n.useEffect)(()=>{let i=r.get("serviceType")?.toUpperCase(),n=l.find(e=>e.type===i)??l[0];if(void 0===n)return void s(null);if(s(n.type),i!==n.type){let i=new URLSearchParams(r.toString());i.set("serviceType",n.type.toLowerCase()),e.replace(`${t}?${i.toString()}`)}},[l,t,e,r,s]),(0,n.useEffect)(()=>()=>s(null),[s]),null});e.s(["default",0,r])},57473,e=>{"use strict";var t=e.i(9735),i=e.i(88552);e.i(3159);var n=e.i(46907),o=e.i(7744),r=e.i(38803),l=e.i(98273),s=e.i(43174),a=e.i(84673),d=e.i(553),c=e.i(64954),f=e.i(86400);let p={"출력 대기":"초안 검토하기","서류 대조":"수기 서류 업로드하기","업데이트 필요":"수기 서류 업로드하기","연동 완료":"서류 최종 확인하기"},h={"출력 대기":"#2264E8","서류 대조":"#FF6900","업데이트 필요":"#FF6900","연동 완료":"#FF6900"};function u({templateName:e,statusLabel:i,serviceWorkers:n,onClose:r,onOpen:l}){let[s,c]=(0,o.useState)(""),N=(0,o.useMemo)(()=>n.map(e=>({...e,_searchableName:f.default.brand.searchableText.create(e.serviceWorkerName)})),[n]),F=(0,o.useMemo)(()=>{let e=s.trim();return""===e?N:N.filter(t=>{let i=t.serviceWorkerResidentRegistrationNumber?.replace(/[^0-9]/g,"").slice(0,6)??"",n=e.replace(/[^0-9]/g,"");return f.default.brand.searchableText.isMatch(t._searchableName,e)||""!==n&&i.includes(n)})},[s,N]);return(0,t.jsxs)(x,{children:[(0,t.jsx)(g,{role:"presentation"}),(0,t.jsxs)(m,{children:[(0,t.jsxs)(b,{children:[(0,t.jsx)("span",{}),(0,t.jsx)(w,{children:`${e} [${i}] 목록 (총 ${n.length}건)`}),(0,t.jsx)(_,{type:"button","aria-label":"드로어 닫기",onClick:r,children:(0,t.jsx)(a.default,{sx:{fontSize:16}})})]}),(0,t.jsx)(y,{children:(0,t.jsxs)(v,{children:[(0,t.jsx)(z,{value:s,placeholder:"이름 또는 생년월일 검색",onChange:e=>c(e.target.value)}),(0,t.jsx)(j,{children:(0,t.jsx)(d.Search,{color:"#0a0a0a",size:16})})]})}),(0,t.jsxs)(C,{children:[(0,t.jsxs)(I,{children:[(0,t.jsx)(k,{children:"제공인력"}),(0,t.jsx)(k,{children:"생년월일"}),(0,t.jsx)(k,{})]}),(0,t.jsxs)(S,{children:[F.map(e=>{var n;let o;return(0,t.jsxs)(W,{children:[(0,t.jsx)($,{children:e.serviceWorkerName}),(0,t.jsx)($,{children:null!==(o=null===(n=e.serviceWorkerResidentRegistrationNumber)?null:f.default.brand.maskedResidentRegistrationNumber.is(n)?f.default.brand.maskedResidentRegistrationNumber.extractBirthDate(n):f.default.brand.residentRegistrationNumber.is(n)?n.replace(/[^0-9]/g,"").slice(0,6):null)?o:"-"}),(0,t.jsx)($,{children:(0,t.jsx)(O,{type:"button",$color:h[i]??"#2264E8",onClick:()=>l(e),children:p[i]??"문서 확인하기"})})]},`${e.employmentContractId}-${e.serviceWorkerId}`)}),0===F.length&&(0,t.jsx)(R,{children:"검색 결과가 없습니다."})]})]})]})]})}let x=r.default.div.withConfig({componentId:"zh__sc-3bc5f426-0"})`
  position: absolute;
  z-index: 30;
  inset: 0;

  display: flex;
  justify-content: flex-end;
`,g=r.default.div.withConfig({componentId:"zh__sc-3bc5f426-1"})`
  position: absolute;
  inset: 0;
  background: transparent;
`,m=r.default.aside.withConfig({componentId:"zh__sc-3bc5f426-2"})`
  position: relative;
  z-index: 1;

  display: flex;
  flex-direction: column;

  width: 1204px;
  max-width: 100%;
  height: 100%;

  background: #fff;
  box-shadow: -2px 16px 20px 0 rgb(0 0 0 / 36%);
`,b=r.default.header.withConfig({componentId:"zh__sc-3bc5f426-3"})`
  display: grid;
  grid-template-columns: 56px 1fr 56px;
  align-items: center;

  height: 68px;
  padding: 0 16px;
  border-bottom: 1px solid #e5e7eb;
`,w=r.default.h4.withConfig({componentId:"zh__sc-3bc5f426-4"})`
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
  color: #0a0a0a;
  text-align: center;
`,_=(0,r.default)(c.default.Button.Outlined).withConfig({componentId:"zh__sc-3bc5f426-5"})`
  display: flex;
  gap: 4px;
  align-items: center;

  height: 36px;
  padding: 8px 16px;
`,y=r.default.div.withConfig({componentId:"zh__sc-3bc5f426-6"})`
  display: flex;
  align-items: center;

  height: 72px;
  padding: 16px;
  border-bottom: 1px solid #e5e7eb;
`,v=r.default.label.withConfig({componentId:"zh__sc-3bc5f426-7"})`
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
`,j=r.default.span.withConfig({componentId:"zh__sc-3bc5f426-8"})`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 16px;
  height: 16px;

  color: #9ca3af;
`,z=r.default.input.withConfig({componentId:"zh__sc-3bc5f426-9"})`
  width: 100%;
  min-width: 0;
  border: 0;

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
`,C=r.default.div.withConfig({componentId:"zh__sc-3bc5f426-10"})`
  display: flex;
  flex: 1;
  flex-direction: column;
  min-height: 0;
`,I=r.default.div.withConfig({componentId:"zh__sc-3bc5f426-11"})`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  height: 48px;
  border-bottom: 1px solid #dbe0e8;

  background: #f8fafc;
`,k=r.default.div.withConfig({componentId:"zh__sc-3bc5f426-12"})`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 48px;

  font-size: 16px;
  font-weight: 700;
  line-height: 48px;
  color: #131416;
  text-align: center;
`,S=r.default.div.withConfig({componentId:"zh__sc-3bc5f426-13"})`
  overflow-y: auto;
  flex: 1;
`,W=r.default.div.withConfig({componentId:"zh__sc-3bc5f426-14"})`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  min-height: 52px;
  border-bottom: 1px solid #e5e7eb;
`,$=r.default.div.withConfig({componentId:"zh__sc-3bc5f426-15"})`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 52px;
  padding: 8px 12px;

  font-size: 16px;
  font-weight: 500;
  line-height: 52px;
  color: #464c53;
  text-align: center;
`,O=r.default.button.withConfig({componentId:"zh__sc-3bc5f426-16"})`
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
  line-height: 20px;
  color: #fff;
  text-align: center;

  background: ${({$color:e})=>e};
`,R=r.default.div.withConfig({componentId:"zh__sc-3bc5f426-17"})`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 120px;

  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: #6b7280;
`,N={},F={"연동 완료":"linked","출력 대기":"waiting"},G=e=>F[e]??"waiting",P=(0,n.observer)(function(){let e=s.default.serviceWorker.info.byDocument,[n,r]=(0,o.useState)(null),a=new Map(e.phaseGroupsWithStatuses.flatMap(e=>e.templates).map((e,t)=>[e.id,t+1])),d=null===n?e.phaseGroupsWithStatuses:e.phaseGroupsWithStatuses.filter(e=>e.phaseGroup===n.phaseGroup);return(0,t.jsxs)(T,{children:[(0,t.jsx)(L,{children:"서류별 처리 현황"}),(0,t.jsx)(E,{children:(0,t.jsx)(B,{children:d.map(o=>(0,t.jsxs)(D,{children:[(0,t.jsxs)(M,{children:[(0,t.jsx)(U,{children:`${o.phaseGroupLabel} ${o.templateCount}종`}),(N[o.phaseGroup]??null)!==null&&(0,t.jsx)(A,{children:N[o.phaseGroup]})]}),(0,t.jsx)(K,{children:"loading"===e.status?(0,t.jsx)(ei,{children:"제공인력 문서 현황을 불러오는 중입니다."}):(0,t.jsx)(V,{children:o.templates.map(e=>{let s=e.statusGroups.filter(e=>e.serviceWorkers.length>0);return 0===s.length?null:(0,t.jsxs)(q,{children:[(0,t.jsxs)(H,{children:[(0,t.jsx)(J,{children:String(a.get(e.id)??0).padStart(2,"0")}),(0,t.jsx)(Q,{children:e.name})]}),(0,t.jsx)(X,{children:s.map(s=>(0,t.jsxs)(Y,{children:[(0,t.jsxs)(Z,{$tone:G(s.label),children:["linked"===G(s.label)&&(0,t.jsx)(ee,{children:(0,t.jsx)(l.default.WandShine,{size:14})}),s.label," · ",s.serviceWorkers.length,"건"]}),(0,t.jsxs)(et,{$isSelected:null===n||n.templateId===e.id&&n.status===s.status,type:"button",onClick:()=>r({templateName:e.name,statusLabel:s.label,serviceWorkers:s.serviceWorkers,phaseGroup:o.phaseGroup,templateId:e.id,status:s.status}),title:s.serviceWorkers.map(e=>e.serviceWorkerName).join(", "),children:["제공인력 리스트 보기 ",(0,t.jsx)(i.default,{sx:{fontSize:14}})]})]},s.status))})]},e.id)})})})]},o.phaseGroup))})}),null!==n&&(0,t.jsx)(u,{templateName:n.templateName,statusLabel:n.statusLabel,serviceWorkers:n.serviceWorkers,onClose:()=>r(null),onOpen:e=>{s.default.modal.documentView.openServiceWorkerDocumentsFromByDocument(n.serviceWorkers.map(e=>({contractId:e.employmentContractId,documentId:e.documentId,serviceWorkerId:e.serviceWorkerId})),e.documentId)}})]})}),T=r.default.div.withConfig({componentId:"zh__sc-e1648f62-0"})`
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
`,L=r.default.div.withConfig({componentId:"zh__sc-e1648f62-1"})`
  display: flex;
  align-items: center;

  height: 36px;

  font-size: 20px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #0f0f14;
`,E=r.default.div.withConfig({componentId:"zh__sc-e1648f62-2"})`
  overflow-x: auto;
  align-self: stretch;
`,B=r.default.div.withConfig({componentId:"zh__sc-e1648f62-3"})`
  display: grid;
  grid-template-columns: repeat(4, minmax(360px, 1fr));
  gap: 12px;

  min-width: 1500px;
  min-height: 760px;
`,D=r.default.section.withConfig({componentId:"zh__sc-e1648f62-4"})`
  display: flex;
  flex-direction: column;
  gap: 12px;

  padding: 16px 12px 12px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;

  background: #f9fafb;
`,M=r.default.header.withConfig({componentId:"zh__sc-e1648f62-5"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-height: 58px;
`,U=r.default.h3.withConfig({componentId:"zh__sc-e1648f62-6"})`
  margin: 0;

  font-size: 17px;
  font-weight: 700;
  line-height: 20px;
  color: #171a21;
`,A=r.default.p.withConfig({componentId:"zh__sc-e1648f62-7"})`
  margin: 0;

  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  color: #5e6673;
`,K=r.default.div.withConfig({componentId:"zh__sc-e1648f62-8"})`
  flex: 1;

  min-height: 640px;
  padding: 12px;
  border-radius: 8px;

  background: #fff;
`,V=r.default.ul.withConfig({componentId:"zh__sc-e1648f62-9"})`
  display: flex;
  flex-direction: column;
  gap: 8px;

  margin: 0;
  padding: 0;

  list-style: none;
`,q=r.default.li.withConfig({componentId:"zh__sc-e1648f62-10"})`
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
`,H=r.default.div.withConfig({componentId:"zh__sc-e1648f62-11"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;

  height: 28px;
`,J=r.default.span.withConfig({componentId:"zh__sc-e1648f62-12"})`
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
`,Q=r.default.p.withConfig({componentId:"zh__sc-e1648f62-13"})`
  font-size: 15px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #1f2129;
`,X=r.default.div.withConfig({componentId:"zh__sc-e1648f62-14"})`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 2px;
`,Y=r.default.div.withConfig({componentId:"zh__sc-e1648f62-15"})`
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
`,Z=r.default.span.withConfig({componentId:"zh__sc-e1648f62-16"})`
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
`,ee=r.default.span.withConfig({componentId:"zh__sc-e1648f62-17"})`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 14px;
  height: 14px;
`,et=r.default.button.withConfig({componentId:"zh__sc-e1648f62-18"})`
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
`,ei=r.default.p.withConfig({componentId:"zh__sc-e1648f62-19"})`
  margin: 0;

  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: #4b5563;
`;e.s(["default",0,P],57473)}]);