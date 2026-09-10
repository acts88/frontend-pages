(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,21050,e=>{"use strict";var t=e.i(39635),i=e.i(38803);let n=i.default.section.withConfig({componentId:"zh__sc-cb28bd11-0"})`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  align-self: stretch;
`,l=i.default.div.withConfig({componentId:"zh__sc-cb28bd11-1"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  align-self: stretch;

  padding: 24px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;

  background: #fff;
`,d=i.default.div.withConfig({componentId:"zh__sc-cb28bd11-2"})`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;
`,a=i.default.div.withConfig({componentId:"zh__sc-cb28bd11-3"})`
  display: flex;
  align-items: center;
`,o=i.default.p.withConfig({componentId:"zh__sc-cb28bd11-4"})`
  font-size: 20px;
  font-weight: 700;
  line-height: normal;
  color: #0a0a0a;
  letter-spacing: -0.5px;
  white-space: nowrap;
`,s=i.default.div.withConfig({componentId:"zh__sc-cb28bd11-5"})`
  display: flex;
  gap: 4px;
  align-items: center;

  margin-left: 16px;

  color: #464c53;
`,c=(0,i.default)(t.default).withConfig({componentId:"zh__sc-cb28bd11-6"})`
  width: 24px;
  height: 24px;
`,r=i.default.div.withConfig({componentId:"zh__sc-cb28bd11-7"})`
  font-size: 18px;
  line-height: 20px; /* 111.111% */
`,h=i.default.div.withConfig({componentId:"zh__sc-cb28bd11-8"})`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: flex-end;
`,x=i.css`
  gap: 4px;
  height: 36px;
  padding: 8px 16px;
`,p=i.default.div.withConfig({componentId:"zh__sc-cb28bd11-9"})`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  align-self: stretch;

  width: 100%;
`,f=i.default.div.withConfig({componentId:"zh__sc-cb28bd11-10"})`
  padding-bottom: 8px;

  font-size: 20px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
  letter-spacing: -0.5px;
`,g=i.default.div.withConfig({componentId:"zh__sc-cb28bd11-11"})`
  display: flex;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;

  min-height: 59px;
`,u=i.default.div.withConfig({componentId:"zh__sc-cb28bd11-12"})`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
  align-self: flex-start;
  justify-content: flex-start;

  min-height: 59px;

  ${({$width:e})=>void 0!==e?`
        width: ${e}px;
      `:`
        flex: 1;
        min-width: 0;
      `}
`,b=i.default.div.withConfig({componentId:"zh__sc-cb28bd11-13"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #000;
  text-align: center;
`,j=i.default.table.withConfig({componentId:"zh__sc-cb28bd11-14"})`
  border-collapse: collapse;
  width: 100%;
  font-size: 16px;
`,m=i.default.tr.withConfig({componentId:"zh__sc-cb28bd11-15"})`
  height: 40px;
  border-top: 1px solid #e5e7eb;
  border-bottom: 1px solid #e5e7eb;
  background: #f9fafb;
`,w=i.default.th.withConfig({componentId:"zh__sc-cb28bd11-16"})`
  padding: 0 16px;

  font-weight: 700;
  color: #131416;
  text-align: center;
  vertical-align: middle;
`,_=i.default.tr.withConfig({componentId:"zh__sc-cb28bd11-17"})`
  height: 56px;
  border-bottom: 1px solid #e5e7eb;
`,y=i.default.td.withConfig({componentId:"zh__sc-cb28bd11-18"})`
  padding: 0 16px;
  color: #464c53;
  text-align: center;
  vertical-align: middle;
`;e.s(["Data",0,u,"DataForm",0,p,"DataFormTitle",0,f,"DataLabel",0,b,"DataRow",0,g,"PageRoot",0,n,"Panel",0,l,"SectionHeader",0,d,"SectionHeaderLeft",0,a,"SectionHeaderRight",0,h,"SectionTitle",0,o,"SectionTitleInfo",0,s,"SectionTitleInfoIcon",0,c,"SectionTitleInfoText",0,r,"Table",0,j,"TableBodyCell",0,y,"TableBodyRow",0,_,"TableHeadCell",0,w,"TableHeadRow",0,m,"btnStyle",0,x,"inputStyle",0,{display:"flex",padding:"4px 16px",alignItems:"center",gap:"10px",flex:"1 0 0",alignSelf:"stretch",fontSize:16}])},88905,e=>{"use strict";var t=e.i(9735),i=e.i(24655),n=e.i(84673),l=e.i(84527),d=e.i(93384),a=e.i(95649),o=e.i(2615);e.i(3159);var s=e.i(46907),c=e.i(7744),r=e.i(38803),h=e.i(21050),x=e.i(64954),p=e.i(55316),f=e.i(7242),g=e.i(43174);let u=["수급자, 차상위","120% 이하","120~160%","160% 초과"],b=p.default;function j(e){return b[e]?.label??e}function m(e){return`${e.toLocaleString("ko-KR")}원`}let w=(0,s.observer)(function(){let e=g.default.organizationSetting.operation,[a,o]=(0,c.useState)(!1),[s,r]=(0,c.useState)("ALL"),{serviceList:p,serviceType:b,serviceStandardFeeList:w,serviceDocumentTemplateList:ei}=e,en=e.selectedService,el=e.isBusinessOperationEditing,ed=e.isBusinessOperationSaving,ea=w.reduce((e,t)=>e+t.fee.length,0),eo=(0,c.useMemo)(()=>ei.reduce((e,t)=>(e[t.phaseGroup]=(e[t.phaseGroup]??0)+1,e),{}),[ei]),es=(0,c.useMemo)(()=>ei.reduce((e,t)=>e.includes(t.phaseGroup)?e:[...e,t.phaseGroup],[]),[ei]),ec="ALL"===s||es.includes(s)?s:"ALL",er=(0,c.useMemo)(()=>"ALL"===ec?ei:ei.filter(e=>e.phaseGroup===ec),[ec,ei]);return(0,t.jsxs)(h.PageRoot,{children:[(0,t.jsx)(h.SectionHeader,{children:(0,t.jsxs)(h.SectionHeaderLeft,{children:[(0,t.jsx)(h.SectionTitle,{children:"서비스 구분"}),(0,t.jsx)(_,{children:p.map(i=>(0,t.jsxs)(y,{type:"button",$active:b===i.type,onClick:()=>e.setServiceType(i.type),children:[f.default[i.type].label," 서비스"]},i.type))})]})}),(0,t.jsxs)(h.Panel,{children:[(0,t.jsx)(h.SectionHeader,{children:(0,t.jsxs)(h.SectionHeaderLeft,{children:[(0,t.jsx)(h.SectionTitle,{children:"서비스 기본 운영 설정"}),(0,t.jsxs)(h.SectionTitleInfo,{children:[(0,t.jsx)(h.SectionTitleInfoIcon,{}),(0,t.jsx)(h.SectionTitleInfoText,{children:"계약 기간 및 연장 관련 값은 이용자 계약서, 서비스 기간 계산 시 사용됩니다."})]})]})}),(0,t.jsxs)(z,{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)(h.TableHeadRow,{children:[(0,t.jsx)(C,{children:"서비스 종류"}),(0,t.jsx)(C,{children:"서비스 코드"}),(0,t.jsx)(C,{children:"운영 상태"}),(0,t.jsx)(C,{children:"연결 번호"}),(0,t.jsx)(C,{children:"계약 기간"}),(0,t.jsx)(C,{children:"연장 횟수"}),(0,t.jsx)(C,{children:"서비스 재신청 기준일"}),(0,t.jsx)(C,{children:"최대 연장 기간"})]})}),(0,t.jsx)("tbody",{children:null!==en&&(0,t.jsxs)(h.TableBodyRow,{children:[(0,t.jsxs)(I,{children:[f.default[en.type].label," 서비스"]}),(0,t.jsx)(I,{children:en.code}),(0,t.jsx)(I,{children:(0,t.jsxs)(k,{children:[(0,t.jsx)(x.default.Input.Switch,{width:32,height:20,checked:en.operatingStatus,"aria-label":"운영 상태",disabled:!0}),(0,t.jsx)("span",{children:en.operatingStatus?"운영 중":"미운영"})]})}),(0,t.jsx)(I,{children:en.connectPhoneNumber||"-"}),(0,t.jsx)(I,{children:(0,t.jsx)(x.default.Input.Select,{style:q,disabled:!0,value:`${en.contractPeriod}`,children:(0,t.jsx)("option",{value:`${en.contractPeriod}`,children:`${en.contractPeriod}년`})})}),(0,t.jsx)(I,{children:(0,t.jsx)(x.default.Input.Select,{style:q,disabled:!0,value:`${en.extensionCount}`,children:(0,t.jsx)("option",{value:`${en.extensionCount}`,children:`${en.extensionCount}회`})})}),(0,t.jsx)(I,{children:(0,t.jsx)(x.default.Input.Select,{style:q,disabled:!0,value:`${en.reapplicationDate}`,children:(0,t.jsx)("option",{value:`${en.reapplicationDate}`,children:`매월 ${en.reapplicationDate}일`})})}),(0,t.jsx)(I,{children:(0,t.jsx)(x.default.Input.Select,{style:q,disabled:!0,value:`${en.maximumExtensionPeriod}`,children:(0,t.jsx)("option",{value:`${en.maximumExtensionPeriod}`,children:`${en.maximumExtensionPeriod}년`})})})]})})]}),(0,t.jsxs)(h.SectionHeader,{children:[(0,t.jsxs)(h.SectionHeaderLeft,{children:[(0,t.jsx)(h.SectionTitle,{children:"서비스 사업 운영 설정"}),!0===el&&(0,t.jsx)(v,{children:"수정 진행중"})]}),(0,t.jsx)(h.SectionHeaderRight,{children:!0===el?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(T,{type:"button",onClick:e.cancelBusinessOperationEdit,disabled:!0===ed,children:[(0,t.jsx)(n.default,{sx:{fontSize:20}}),"수정 취소"]}),(0,t.jsxs)(T,{type:"button",onClick:()=>{e.saveBusinessOperation()},disabled:!0===ed,children:[(0,t.jsx)(i.default,{sx:{fontSize:20}}),!0===ed?"저장 중...":"수정 저장"]})]}):(0,t.jsxs)(T,{type:"button",onClick:e.startBusinessOperationEdit,disabled:!0!==e.canStartBusinessOperationEdit,children:[(0,t.jsx)(l.default,{sx:{fontSize:20}}),"수정하기"]})})]}),(0,t.jsxs)(z,{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)(h.TableHeadRow,{children:[(0,t.jsx)(C,{children:"사업 운영 시작일"}),(0,t.jsx)(C,{children:"사업 운영 종료일"}),(0,t.jsx)(C,{}),(0,t.jsx)(C,{}),(0,t.jsx)(C,{}),(0,t.jsx)(C,{}),(0,t.jsx)(C,{}),(0,t.jsx)(C,{})]})}),(0,t.jsx)("tbody",{children:null!==en&&(0,t.jsxs)(h.TableBodyRow,{children:[(0,t.jsx)(S,{children:(0,t.jsx)(x.default.Input.Date,{style:J,value:!0===el?e.businessOperationForm.serviceStartDate:en.serviceStartDate??"",onChange:t=>{e.setBusinessOperationField("serviceStartDate",t)},isDateSelectable:t=>""===e.businessOperationForm.serviceEndDate||t<=e.businessOperationForm.serviceEndDate,disabled:!0!==el,showClearButton:!0})}),(0,t.jsx)(S,{children:(0,t.jsx)(x.default.Input.Date,{style:J,value:!0===el?e.businessOperationForm.serviceEndDate:en.serviceEndDate??"",onChange:t=>{e.setBusinessOperationField("serviceEndDate",t)},isDateSelectable:t=>""===e.businessOperationForm.serviceStartDate||t>=e.businessOperationForm.serviceStartDate,disabled:!0!==el,showClearButton:!0})}),(0,t.jsx)(I,{}),(0,t.jsx)(I,{}),(0,t.jsx)(I,{}),(0,t.jsx)(I,{}),(0,t.jsx)(I,{}),(0,t.jsx)(I,{})]})})]}),(0,t.jsxs)(B,{children:[(0,t.jsx)(L,{children:(0,t.jsxs)(H,{type:"button","aria-controls":"monthly-fee-guide-table","aria-expanded":a,onClick:()=>{o(e=>!e)},children:[(0,t.jsxs)(O,{children:[(0,t.jsx)(d.default,{sx:{fontSize:24,color:"#1C1B1F"}}),(0,t.jsx)(E,{children:"월별 서비스 이용금액 안내 예시 (8회 기준)"})]}),!0===a?(0,t.jsx)(R,{"aria-hidden":!0,htmlColor:"#0a0a0a"}):(0,t.jsx)(F,{"aria-hidden":!0,htmlColor:"#0a0a0a"})]})}),!0===a?(0,t.jsxs)(P,{id:"monthly-fee-guide-table",children:[(0,t.jsxs)("colgroup",{children:[(0,t.jsx)("col",{style:{width:"23px"}}),(0,t.jsx)("col",{style:{width:"40px"}}),(0,t.jsx)("col",{style:{width:"27px"}}),(0,t.jsx)("col",{style:{width:"103px"}}),(0,t.jsx)("col",{style:{width:"auto"}}),(0,t.jsx)("col",{style:{width:"auto"}}),(0,t.jsx)("col",{style:{width:"auto"}})]}),(0,t.jsxs)("thead",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)(A,{colSpan:3,rowSpan:2,children:"서비스 종류"}),(0,t.jsx)(A,{rowSpan:2,children:"바우처 총액 (월)"}),(0,t.jsx)(A,{colSpan:3,children:"소득수준별 금액"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)(A,{children:"소득수준"}),(0,t.jsx)(A,{children:"본인부담금"}),(0,t.jsx)(A,{children:"정부지원금"})]})]}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)(G,{rowSpan:Math.max(1,ea+1)}),(0,t.jsx)(M,{colSpan:6,children:"본인부담 : 월 단위 결제"})]}),w.flatMap((e,i)=>{let n=[...e.fee].sort((e,t)=>Number(e.grade)-Number(t.grade)),l=n[0],d=void 0===l?void 0:l.copay+l.voucher;return n.map((l,a)=>{var o;return(0,t.jsxs)("tr",{children:[0===i&&0===a?(0,t.jsxs)(N,{rowSpan:Math.max(1,ea),children:[(0,t.jsxs)("div",{style:{fontSize:10,fontWeight:400,lineHeight:1.2},children:["중장년,",(0,t.jsx)("br",{}),"청년"]}),(0,t.jsxs)("span",{children:["식사",(0,t.jsx)("br",{}),"∙영양",(0,t.jsx)("br",{}),"관리"]})]}):null,0===a?(0,t.jsxs)(U,{rowSpan:Math.max(1,n.length),children:[f.default[e.type].label,"관리"]}):null,0===a?(0,t.jsx)(K,{rowSpan:Math.max(1,n.length),children:void 0===d?"-":m(d)}):null,(0,t.jsx)(W,{children:u[Number(o=l.grade)-1]??`${o}등급`}),(0,t.jsx)(W,{children:m(l.copay)}),(0,t.jsx)(W,{children:m(l.voucher)})]},`${e.type}-${l.grade}`)})})]})]}):null]})]}),(0,t.jsxs)(h.Panel,{children:[(0,t.jsx)(h.SectionHeader,{children:(0,t.jsxs)(h.SectionHeaderLeft,{children:[(0,t.jsx)(h.SectionTitle,{children:"서비스별 서류 관리"}),(0,t.jsxs)(h.SectionTitleInfo,{children:[(0,t.jsx)(h.SectionTitleInfoIcon,{}),(0,t.jsx)(h.SectionTitleInfoText,{children:"이 서비스에서 사용할 서류를 선택하고, 기관별로 필요한 양식을 등록할 수 있습니다."})]})]})}),(0,t.jsxs)(Q,{children:[(0,t.jsxs)(V,{children:[(0,t.jsxs)(X,{type:"button",$selected:"ALL"===ec,onClick:()=>{r("ALL")},children:["전체 서류 보기 (",ei.length,"종)"]}),es.map(e=>(0,t.jsxs)(X,{type:"button",$selected:ec===e,onClick:()=>{r(e)},children:[j(e)," 서류만 보기 (",eo[e],"종)"]},e))]}),(0,t.jsxs)(h.Table,{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)(h.TableHeadRow,{children:[(0,t.jsx)($,{children:"서류 그룹"}),(0,t.jsx)($,{children:"서류명"}),(0,t.jsx)($,{children:"기본 양식"}),(0,t.jsx)($,{children:(0,t.jsxs)(ee,{children:["사용자 양식",(0,t.jsx)(et,{children:"추후 개발 예정"})]})}),(0,t.jsx)($,{children:(0,t.jsxs)(ee,{children:["사용중인 양식",(0,t.jsx)(et,{children:"추후 개발 예정"})]})})]})}),(0,t.jsx)("tbody",{children:er.map(e=>(0,t.jsxs)(h.TableBodyRow,{children:[(0,t.jsxs)(D,{children:[j(e.phaseGroup)," 서류"]}),(0,t.jsx)(D,{children:e.name}),(0,t.jsx)(D,{children:"기본 양식"}),(0,t.jsx)(D,{children:(0,t.jsx)(Y,{disabled:!0,children:"업로드하기"})}),(0,t.jsx)(D,{children:(0,t.jsx)(Z,{disabled:!0,value:"DEFAULT",children:(0,t.jsx)("option",{value:"DEFAULT",children:"기본 양식"})})})]},`${e.phaseGroup}-${e.name}`))})]})]})]})]})}),_=r.default.div.withConfig({componentId:"zh__sc-8c86a605-0"})`
  overflow: hidden;
  display: flex;

  height: 48px;
  margin-left: 24px;
  border: 1px solid #b1b8be;
  border-radius: 8px;

  background: #fff;
`,y=r.default.button.withConfig({componentId:"zh__sc-8c86a605-1"})`
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
`,z=(0,r.default)(h.Table).withConfig({componentId:"zh__sc-8c86a605-2"})`
  table-layout: fixed;
`,C=(0,r.default)(h.TableHeadCell).withConfig({componentId:"zh__sc-8c86a605-3"})`
  width: 12.5%;
`,I=(0,r.default)(h.TableBodyCell).withConfig({componentId:"zh__sc-8c86a605-4"})`
  width: 12.5%;
`,S=(0,r.default)(I).withConfig({componentId:"zh__sc-8c86a605-5"})`
  padding: 0 8px;
`,v=r.default.div.withConfig({componentId:"zh__sc-8c86a605-6"})`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;

  margin-left: 8px;
  padding: 8px;
  border-radius: 99px;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 16px;
  color: #fff;

  background: #4f39f6;
`,T=(0,r.default)(x.default.Button.Outlined).withConfig({componentId:"zh__sc-8c86a605-7"})`
  ${h.btnStyle}
  height: 40px;
`,k=r.default.span.withConfig({componentId:"zh__sc-8c86a605-8"})`
  display: inline-flex;
  gap: 8px;
  align-items: center;
`,$=(0,r.default)(h.TableHeadCell).withConfig({componentId:"zh__sc-8c86a605-9"})`
  width: 20%;
`,D=(0,r.default)(h.TableBodyCell).withConfig({componentId:"zh__sc-8c86a605-10"})`
  width: 20%;
`,B=r.default.div.withConfig({componentId:"zh__sc-8c86a605-11"})`
  display: flex;
  flex-direction: column;
  gap: 24px;

  width: 100%;
  padding: 20px 16px;
  border: 1px solid #e5e9ef;
  border-radius: 8px;

  background: #f8fafc;
`,L=r.default.div.withConfig({componentId:"zh__sc-8c86a605-12"})`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: space-between;

  width: 100%;
`,H=r.default.button.withConfig({componentId:"zh__sc-8c86a605-13"})`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 0;
  border: 0;

  background: transparent;
`,O=r.default.div.withConfig({componentId:"zh__sc-8c86a605-14"})`
  display: flex;
  gap: 4px;
  align-items: center;
  min-width: 0;
`,R=(0,r.default)(o.default).withConfig({componentId:"zh__sc-8c86a605-15"})`
  flex-shrink: 0;
  font-size: 24px;
`,F=(0,r.default)(a.default).withConfig({componentId:"zh__sc-8c86a605-16"})`
  flex-shrink: 0;
  font-size: 24px;
`,E=r.default.h4.withConfig({componentId:"zh__sc-8c86a605-17"})`
  margin: 0;

  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  color: #0a0a0a;
  white-space: nowrap;
`,P=r.default.table.withConfig({componentId:"zh__sc-8c86a605-18"})`
  table-layout: fixed;
  border-collapse: collapse;
  width: 683px;
  border: 1px solid #58616a;

  @media (width <= 900px) {
    font-size: 12px;
  }
`,A=r.default.th.withConfig({componentId:"zh__sc-8c86a605-19"})`
  padding: 8px 4px;
  border: 1px solid #58616a;

  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  color: #0a0a0a;
  text-align: center;
  vertical-align: middle;

  background: #f0f0f0;
`,M=r.default.td.withConfig({componentId:"zh__sc-8c86a605-20"})`
  padding: 4px;
  border: 1px solid #58616a;

  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  color: #0a0a0a;
  text-align: center;

  background: #fafafa;
`,G=r.default.td.withConfig({componentId:"zh__sc-8c86a605-21"})`
  padding: 4px;
  border: 1px solid #58616a;

  font-size: 10px;
  line-height: 14px;
  color: #0a0a0a;
  text-align: center;

  background: #fafafa;
`,N=r.default.td.withConfig({componentId:"zh__sc-8c86a605-22"})`
  border: 1px solid #58616a;

  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  color: #0a0a0a;
  text-align: center;
  vertical-align: middle;

  background: #fafafa;
`,U=r.default.td.withConfig({componentId:"zh__sc-8c86a605-23"})`
  padding: 4px;
  border: 1px solid #58616a;

  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  color: #0a0a0a;
  text-align: center;
  vertical-align: middle;

  background: #fafafa;
`,K=r.default.td.withConfig({componentId:"zh__sc-8c86a605-24"})`
  padding: 4px;
  border: 1px solid #58616a;

  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  color: #0a0a0a;
  text-align: center;
  vertical-align: middle;

  background: #fff;
`,W=r.default.td.withConfig({componentId:"zh__sc-8c86a605-25"})`
  padding: 4px;
  border: 1px solid #58616a;

  font-size: 14px;
  line-height: 18px;
  color: #0a0a0a;
  text-align: center;

  background: #fff;
`,q={width:"120px"},J={width:"100%",height:28,textAlign:"center"},Q=r.default.div.withConfig({componentId:"zh__sc-8c86a605-26"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`,V=r.default.div.withConfig({componentId:"zh__sc-8c86a605-27"})`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,X=(0,r.default)(x.default.Badge.Filter).withConfig({componentId:"zh__sc-8c86a605-28"})`
  padding: 8px;
  font-size: 16px;
  line-height: 16px; /* 100% */
  letter-spacing: -1px;
`,Y=(0,r.default)(x.default.Button.Outlined).withConfig({componentId:"zh__sc-8c86a605-29"})`
  display: inline-flex;
  padding: 8px 16px;
  line-height: 1;
`,Z=(0,r.default)(x.default.Input.Select).withConfig({componentId:"zh__sc-8c86a605-30"})``,ee=r.default.span.withConfig({componentId:"zh__sc-8c86a605-31"})`
  display: inline-flex;
  gap: 4px;
  align-items: center;
  justify-content: center;
`,et=r.default.span.withConfig({componentId:"zh__sc-8c86a605-32"})`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  height: 24px;
  padding: 4px 8px;
  border: 1px solid #45464e;
  border-radius: 99px;

  font-size: 12px;
  font-weight: 500;
  color: #fff;
  letter-spacing: -0.5px;

  background: #131416;
`;e.s(["default",0,w])}]);