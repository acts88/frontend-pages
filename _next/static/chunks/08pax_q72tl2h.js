(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,85026,e=>{"use strict";var t=e.i(9735);e.i(3159);var n=e.i(46907),i=e.i(7744),o=e.i(43174),d=e.i(93384),l=e.i(95649),s=e.i(2615),a=e.i(22803),r=e.i(72592);function c(e){return""===e.trim()?"-":e}let f=["수급자, 차상위","120% 이하","120~160%","160% 초과"],h=["meal","nutrition"],x={meal:{label:"식사관리",voucherTotal:228e3,rows:[{selfPayRate:5,selfPayAmount:11400,governmentAmount:216600},{selfPayRate:15,selfPayAmount:34200,governmentAmount:193800},{selfPayRate:30,selfPayAmount:68400,governmentAmount:159600},{selfPayRate:100,selfPayAmount:228e3,governmentAmount:0}]},nutrition:{label:"영양관리",voucherTotal:26e4,rows:[{selfPayRate:5,selfPayAmount:13e3,governmentAmount:247e3},{selfPayRate:15,selfPayAmount:39e3,governmentAmount:221e3},{selfPayRate:30,selfPayAmount:78e3,governmentAmount:182e3},{selfPayRate:100,selfPayAmount:26e4,governmentAmount:0}]}},p={selfPayRate:0,selfPayAmount:0,governmentAmount:0};function u(e){return`${e.toLocaleString("ko-KR")} 원`}function g(e){return`${e.toLocaleString("ko-KR")}원`}function m({serviceCode:e,grade:n,paymentMethodText:o,paymentDayText:l}){let[s,a]=(0,i.useState)(!1),et=e??"meal",en=x[et].rows,ei=null===n||!1===Number.isInteger(n)?null:Math.max(0,n-1),eo=null===ei?en[0]??p:en[ei]??en[0]??p,ed=`${new Date().getMonth()+1}월`,el=Math.floor(eo.governmentAmount/8),es=Math.floor(eo.selfPayAmount/8),ea=7*el,er=7*es,ec=er+ea;return(0,t.jsxs)(r.SectionContainer,{children:[(0,t.jsx)(r.SectionHeader,{children:(0,t.jsx)(r.SectionHeaderMain,{children:(0,t.jsxs)(j,{children:[(0,t.jsx)(r.SectionTitle,{children:"계약서 세부내역"}),(0,t.jsx)(r.SectionBadge,{children:"30일 기준"})]})})}),(0,t.jsxs)(w,{children:[(0,t.jsxs)(b,{children:[(0,t.jsxs)(_,{children:["납부방법",(0,t.jsx)(C,{children:c(o)})]}),(0,t.jsxs)(_,{children:["납입일",(0,t.jsx)(C,{children:c(l)})]})]}),(0,t.jsxs)(z,{children:[(0,t.jsxs)(y,{children:[(0,t.jsxs)(v,{children:[(0,t.jsxs)(I,{children:[(0,t.jsxs)(T,{children:[ed," 사회서비스 금액 총계"]}),(0,t.jsxs)(S,{children:[(0,t.jsxs)("span",{children:["정부지원금(",g(ea),")"]}),(0,t.jsx)("span",{"aria-hidden":!0,children:"+"}),(0,t.jsxs)("span",{children:["본인부담금 결제액(",g(er),")"]})]})]}),(0,t.jsxs)(k,{children:["총 ",u(ec)]})]}),(0,t.jsx)(A,{}),(0,t.jsxs)(E,{children:[(0,t.jsx)($,{children:"세부내역"}),(0,t.jsxs)(R,{children:[(0,t.jsxs)(B,{children:[(0,t.jsxs)(M,{children:[(0,t.jsx)(P,{children:"정부지원금(바우처) 결제액"}),(0,t.jsxs)(F,{children:[(0,t.jsxs)(N,{children:["1회당 정부지원금(",g(el),")"]}),(0,t.jsx)(N,{children:"x"}),(0,t.jsxs)(N,{$highlighted:!0,children:["당월 이용 ",7,"회"]})]})]}),(0,t.jsx)(D,{children:u(ea)})]}),(0,t.jsxs)(B,{children:[(0,t.jsxs)(M,{children:[(0,t.jsx)(P,{children:"본인부담금 결제액"}),(0,t.jsxs)(F,{children:[(0,t.jsxs)(N,{children:["1회당 본인 부담금(",g(es),")"]}),(0,t.jsx)(N,{children:"x"}),(0,t.jsxs)(N,{$highlighted:!0,children:["당월 이용 ",7,"회"]})]})]}),(0,t.jsx)(D,{children:u(er)})]})]})]})]}),(0,t.jsxs)(O,{children:[(0,t.jsx)(U,{children:(0,t.jsxs)(L,{type:"button","aria-controls":"monthly-fee-guide-table","aria-expanded":s,onClick:()=>{a(e=>!e)},children:[(0,t.jsxs)(H,{children:[(0,t.jsx)(d.default,{sx:{fontSize:24,color:"#1C1B1F"}}),(0,t.jsxs)(V,{children:["월별 서비스 이용금액 안내 예시 (",n??"-","등급/8회 기준)"]})]}),!0===s?(0,t.jsx)(G,{"aria-hidden":!0,htmlColor:"#0a0a0a"}):(0,t.jsx)(K,{"aria-hidden":!0,htmlColor:"#0a0a0a"})]})}),!0===s?(0,t.jsxs)(q,{id:"monthly-fee-guide-table",children:[(0,t.jsxs)("colgroup",{children:[(0,t.jsx)("col",{style:{width:"23px"}}),(0,t.jsx)("col",{style:{width:"40px"}}),(0,t.jsx)("col",{style:{width:"27px"}}),(0,t.jsx)("col",{style:{width:"103px"}}),(0,t.jsx)("col",{style:{width:"auto"}}),(0,t.jsx)("col",{style:{width:"auto"}}),(0,t.jsx)("col",{style:{width:"auto"}})]}),(0,t.jsxs)("thead",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)(W,{colSpan:3,rowSpan:2,children:"서비스 종류"}),(0,t.jsx)(W,{rowSpan:2,children:"바우처 총액 (월)"}),(0,t.jsx)(W,{colSpan:3,children:"소득수준별 금액"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)(W,{children:"소득수준"}),(0,t.jsx)(W,{children:"본인부담금"}),(0,t.jsx)(W,{children:"정부지원금"})]})]}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)(Q,{rowSpan:9}),(0,t.jsx)(J,{colSpan:6,children:"본인부담 : 월 단위 결제"})]}),h.flatMap(e=>x[e].rows.map((n,i)=>{let o=null!==ei&&e===et&&i===ei;return(0,t.jsxs)("tr",{children:["meal"===e&&0===i?(0,t.jsxs)(X,{rowSpan:8,children:[(0,t.jsx)("div",{style:{fontSize:10,fontWeight:400},children:"중장년, 청년"}),(0,t.jsx)("span",{children:"식사∙영양관리"})]}):null,0===i?(0,t.jsx)(Y,{rowSpan:4,children:x[e].label}):null,0===i?(0,t.jsx)(Z,{rowSpan:4,children:g(x[e].voucherTotal)}):null,(0,t.jsx)(ee,{$highlighted:o,$isFirstHighlightCell:!0,children:f[i]}),(0,t.jsxs)(ee,{$highlighted:o,children:["(",n.selfPayRate,"%) ",g(n.selfPayAmount)]}),(0,t.jsx)(ee,{$highlighted:o,$isLastHighlightCell:!0,children:g(n.governmentAmount)})]},`${e}-${f[i]}`)}))]})]}):null]})]})]})]})}let j=a.default.div.withConfig({componentId:"zh__sc-12c411fe-0"})`
  display: flex;
  gap: 10px;
  align-items: center;
`,w=a.default.div.withConfig({componentId:"zh__sc-12c411fe-1"})`
  display: flex;
  gap: 20px;
  align-items: flex-start;

  width: 100%;
  padding: 20px 16px;
  border: 1px solid #e5e9ef;
  border-radius: 8px;

  background: #f6f8ff;
`,b=a.default.div.withConfig({componentId:"zh__sc-12c411fe-2"})`
  display: flex;
  flex-direction: column;
  gap: 16px;

  width: 212px;
  min-width: 0;
`,_=a.default.label.withConfig({componentId:"zh__sc-12c411fe-3"})`
  display: flex;
  flex-direction: column;
  gap: 4px;

  min-width: 0;

  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: #0a0a0a;
`,C=a.default.div.withConfig({componentId:"zh__sc-12c411fe-4"})`
  overflow: hidden;
  display: flex;
  align-items: center;

  height: 36px;
  padding: 0 16px;
  border: 1px solid #d1d5db;
  border-radius: 4px;

  font-size: 16px;
  line-height: 20px;
  color: #0a0a0a;
  text-overflow: ellipsis;
  white-space: nowrap;

  background: #f9fafb;
`,z=a.default.div.withConfig({componentId:"zh__sc-12c411fe-5"})`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 12px;

  min-width: 0;
`,y=a.default.div.withConfig({componentId:"zh__sc-12c411fe-6"})`
  display: flex;
  flex-direction: column;
  gap: 24px;

  width: 100%;
  min-width: 0;
  padding: 20px 16px;
  border: 1px solid #cdd8ec;
  border-radius: 8px;

  background: #fff;
`,v=a.default.div.withConfig({componentId:"zh__sc-12c411fe-7"})`
  display: flex;
  gap: 16px;
  align-items: flex-start;
  justify-content: space-between;

  width: 100%;
`,I=a.default.div.withConfig({componentId:"zh__sc-12c411fe-8"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 0;
`,T=a.default.h4.withConfig({componentId:"zh__sc-12c411fe-9"})`
  margin: 0;

  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  color: #0a0a0a;
`,S=a.default.div.withConfig({componentId:"zh__sc-12c411fe-10"})`
  display: flex;
  gap: 4px;
  align-items: center;

  font-size: 16px;
  line-height: 20px;
  color: #0a0a0a;

  span {
    white-space: nowrap;
  }

  span:first-child,
  span:last-child {
    font-size: 14px;
  }
`,k=a.default.div.withConfig({componentId:"zh__sc-12c411fe-11"})`
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  color: #e7000b;
`,A=a.default.hr.withConfig({componentId:"zh__sc-12c411fe-12"})`
  width: 100%;
  margin: 0;
  border: 0;
  border-top: 1px solid #e5e7eb;
`,E=a.default.div.withConfig({componentId:"zh__sc-12c411fe-13"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`,$=a.default.div.withConfig({componentId:"zh__sc-12c411fe-14"})`
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  color: #0a0a0a;
`,P=a.default.div.withConfig({componentId:"zh__sc-12c411fe-15"})`
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  color: #0a0a0a;
`,D=a.default.div.withConfig({componentId:"zh__sc-12c411fe-16"})`
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  color: #0a0a0a;
`,R=a.default.div.withConfig({componentId:"zh__sc-12c411fe-17"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`,B=a.default.div.withConfig({componentId:"zh__sc-12c411fe-18"})`
  display: flex;
  gap: 16px;
  align-items: flex-start;
  justify-content: space-between;

  width: 100%;
`,M=a.default.div.withConfig({componentId:"zh__sc-12c411fe-19"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 0;
`,F=a.default.div.withConfig({componentId:"zh__sc-12c411fe-20"})`
  display: flex;
  gap: 4px;
  align-items: center;
  min-width: 0;
`,N=a.default.span.withConfig({componentId:"zh__sc-12c411fe-21"})`
  font-size: 14px;
  font-weight: ${({$highlighted:e})=>!0===e?700:400};
  line-height: 20px;
  color: ${({$highlighted:e})=>!0===e?"#e7000b":"#0a0a0a"};
  white-space: nowrap;
`,O=a.default.div.withConfig({componentId:"zh__sc-12c411fe-22"})`
  display: flex;
  flex-direction: column;
  gap: 24px;

  width: 100%;
  padding: 20px 16px;
  border: 1px solid #e5e9ef;
  border-radius: 8px;

  background: #fff;
`,U=a.default.div.withConfig({componentId:"zh__sc-12c411fe-23"})`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: space-between;

  width: 100%;
`,L=a.default.button.withConfig({componentId:"zh__sc-12c411fe-24"})`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 0;
  border: 0;

  background: transparent;
`,H=a.default.div.withConfig({componentId:"zh__sc-12c411fe-25"})`
  display: flex;
  gap: 4px;
  align-items: center;
  min-width: 0;
`,G=(0,a.default)(s.default).withConfig({componentId:"zh__sc-12c411fe-26"})`
  flex-shrink: 0;
  font-size: 24px;
`,K=(0,a.default)(l.default).withConfig({componentId:"zh__sc-12c411fe-27"})`
  flex-shrink: 0;
  font-size: 24px;
`,V=a.default.h4.withConfig({componentId:"zh__sc-12c411fe-28"})`
  margin: 0;

  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  color: #494f53;
  white-space: nowrap;
`,q=a.default.table.withConfig({componentId:"zh__sc-12c411fe-29"})`
  table-layout: fixed;
  border-collapse: collapse;
  width: 100%;
  border: 1px solid #58616a;

  @media (width <= 900px) {
    font-size: 12px;
  }
`,W=a.default.th.withConfig({componentId:"zh__sc-12c411fe-30"})`
  padding: 8px 4px;
  border: 1px solid #58616a;

  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  color: #0a0a0a;
  text-align: center;
  vertical-align: middle;

  background: #f0f0f0;
`,J=a.default.td.withConfig({componentId:"zh__sc-12c411fe-31"})`
  padding: 4px;
  border: 1px solid #58616a;

  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  color: #0a0a0a;
  text-align: center;

  background: #fafafa;
`,Q=a.default.td.withConfig({componentId:"zh__sc-12c411fe-32"})`
  padding: 4px;
  border: 1px solid #58616a;

  font-size: 10px;
  line-height: 14px;
  color: #0a0a0a;
  text-align: center;

  background: #fafafa;
`,X=a.default.td.withConfig({componentId:"zh__sc-12c411fe-33"})`
  padding: 4px;
  border: 1px solid #58616a;

  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  color: #0a0a0a;
  text-align: center;
  vertical-align: middle;

  background: #fafafa;
`,Y=a.default.td.withConfig({componentId:"zh__sc-12c411fe-34"})`
  padding: 4px;
  border: 1px solid #58616a;

  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  color: #0a0a0a;
  text-align: center;
  vertical-align: middle;

  background: #fafafa;
`,Z=a.default.td.withConfig({componentId:"zh__sc-12c411fe-35"})`
  padding: 4px;
  border: 1px solid #58616a;

  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  color: #0a0a0a;
  text-align: center;
  vertical-align: middle;

  background: #fff;
`,ee=a.default.td.withConfig({componentId:"zh__sc-12c411fe-36"})`
  padding: 4px;
  border: 1px solid #58616a;

  font-size: 14px;
  line-height: 18px;
  color: #0a0a0a;
  text-align: center;

  background: #fff;

  ${({$highlighted:e,$isFirstHighlightCell:t,$isLastHighlightCell:n})=>!0!==e?"":`
      border-top: 2px solid #fb2c36;
      border-bottom: 2px solid #fb2c36;
      ${!0===t?"border-left: 2px solid #fb2c36;":""}
      ${!0===n?"border-right: 2px solid #fb2c36;":""}
    `}
`;var et=e.i(39555),en=e.i(38797);let ei=(0,en.default)((0,t.jsx)("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"CheckOutlined"),eo=(0,en.default)((0,t.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"CloseOutlined");var ed=e.i(84527),el=e.i(74483),es=e.i(20276),ea=e.i(64954);let er=(0,n.observer)(function({guardianList:e,selectedGuardianId:n,onSelectGuardianId:d,onAddGuardian:l}){let s=e.length>0,[a,c]=(0,i.useState)(!1),[f,h]=(0,i.useState)(!1),[x,p]=(0,i.useState)(!1),[u,g]=(0,i.useState)(""),[m,j]=(0,i.useState)({name:"",relation:"",phone:"",address:""}),[w,b]=(0,i.useState)({name:"",relation:"",phone:"",address:""}),_=null!==n&&e.some(e=>e.id===n)?n:null,C=(0,i.useMemo)(()=>{if(null===_)return e;let t=e.find(e=>e.id===_);return t?[t,...e.filter(e=>e.id!==_)]:e},[_,e]),z=()=>{j({name:"",relation:"",phone:"",address:""}),b({name:"",relation:"",phone:"",address:""}),g("")},y=()=>{c(!1),h(!1),z()},v=(e,t)=>{j(n=>({...n,[e]:t})),b(t=>({...t,[e]:""})),g("")},I=async()=>{p(!0);let e=await l({name:m.name,relation:m.relation,phone:m.phone,address:m.address});(p(!1),h(!1),null===e)?g("보호자 정보를 저장하지 못했습니다. 잠시 후 다시 시도해 주세요."):(await d(e.id),y())},T=o.default.ui.layout.appContainer,S=a&&null!==T?(0,es.createPortal)((0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(eI,{onClick:y,children:(0,t.jsxs)(eT,{onClick:e=>e.stopPropagation(),children:[(0,t.jsxs)(eS,{children:[(0,t.jsx)(ek,{}),(0,t.jsx)(eA,{children:"신규 보호자 추가"}),(0,t.jsx)(ea.default.Button.Outlined,{type:"button",style:{width:56,height:36,padding:8},onClick:y,children:(0,t.jsx)(eo,{sx:{fontSize:20}})})]}),(0,t.jsx)(eE,{}),(0,t.jsx)(e$,{children:(0,t.jsxs)(eP,{children:[(0,t.jsxs)(eD,{children:[(0,t.jsxs)(eB,{children:[(0,t.jsx)(eM,{children:"성명"}),(0,t.jsx)(eF,{type:"text",placeholder:"보호자 성명을 입력하세요.",value:m.name,onChange:e=>v("name",e.target.value),$hasError:""!==w.name}),(0,t.jsx)(eO,{children:w.name})]}),(0,t.jsxs)(eB,{children:[(0,t.jsx)(eM,{children:"이용자와의 관계"}),(0,t.jsx)(eF,{type:"text",placeholder:"예: 자녀(딸), 자녀(아들), 자녀(며느리)",value:m.relation,onChange:e=>v("relation",e.target.value),$hasError:""!==w.relation}),(0,t.jsx)(eO,{children:w.relation})]}),(0,t.jsxs)(eB,{children:[(0,t.jsx)(eM,{children:"연락처"}),(0,t.jsx)(eF,{type:"tel",placeholder:"보호자 연락처를 입력하세요.",value:m.phone,onChange:e=>v("phone",e.target.value),$hasError:""!==w.phone}),(0,t.jsx)(eO,{children:w.phone})]}),(0,t.jsxs)(eB,{children:[(0,t.jsx)(eM,{children:"주소"}),(0,t.jsx)(eN,{rows:3,placeholder:"보호자 주소를 입력하세요.",value:m.address,onChange:e=>v("address",e.target.value),$hasError:""!==w.address}),(0,t.jsx)(eO,{children:w.address})]})]}),(0,t.jsxs)(eR,{children:[(0,t.jsx)(eU,{children:u}),(0,t.jsxs)(ea.default.Button.Filled.Primary,{type:"button",style:{display:"flex",gap:4,alignItems:"center",height:36,padding:"8px 16px"},onClick:()=>{if(x)return;let e={name:""===m.name.trim()?"필수 입력값입니다.":"",relation:""===m.relation.trim()?"필수 입력값입니다.":"",phone:""===m.phone.trim()?"필수 입력값입니다.":"",address:""};b(e),Object.values(e).some(e=>""!==e)||h(!0)},children:[(0,t.jsx)(ei,{sx:{fontSize:20}}),"추가 완료"]})]})]})})]})}),f?(0,t.jsx)(eL,{children:(0,t.jsxs)(eH,{children:[(0,t.jsx)(eG,{children:(0,t.jsx)(eK,{children:"신규 보호자 정보를 추가할까요?"})}),(0,t.jsxs)(eV,{children:[(0,t.jsx)(ea.default.Button.Outlined,{type:"button",style:{width:91,height:36,padding:"8px 16px"},disabled:x,onClick:()=>h(!1),children:"취소하기"}),(0,t.jsx)(ea.default.Button.Filled.Primary,{type:"button",style:{width:91,height:36,padding:"8px 16px"},disabled:x,onClick:()=>void I(),children:x?"저장 중...":"추가하기"})]})]})}):null]}),T):null;return(0,t.jsxs)(r.SectionContainer,{children:[(0,t.jsx)(r.SectionHeader,{children:(0,t.jsxs)(r.SectionHeaderMain,{children:[(0,t.jsx)(r.SectionTitle,{children:"보호자 정보"}),(0,t.jsxs)(r.SectionActionGroup,{children:[(0,t.jsxs)(r.SectionActionButton,{type:"button",disabled:null===_,children:[(0,t.jsx)(ed.default,{sx:{fontSize:20}}),"수정하기"]}),(0,t.jsxs)(r.SectionActionButton,{type:"button",onClick:()=>{z(),c(!0)},disabled:!0,children:[(0,t.jsx)(et.default,{sx:{fontSize:20}}),"추가하기"]})]})]})}),s?(0,t.jsx)(ec,{children:C.map(e=>{let n=e.id===_;return(0,t.jsxs)(ef,{$isSelected:n,children:[(0,t.jsxs)(eh,{children:[(0,t.jsx)(ex,{children:e.name}),(0,t.jsx)(ep,{children:null===e.relationship||""===e.relationship?"이용자와의 관계: -":`이용자와의 관계: ${e.relationship}`})]}),(0,t.jsxs)(eu,{children:[(0,t.jsxs)(eg,{children:[(0,t.jsx)(em,{children:"주소"}),(0,t.jsx)(ej,{}),(0,t.jsx)(ew,{children:e.address??"-"})]}),(0,t.jsxs)(eg,{children:[(0,t.jsx)(em,{children:"연락처"}),(0,t.jsx)(ej,{}),(0,t.jsx)(ew,{children:""!==e.phoneNumber?e.phoneNumber:"-"})]}),(0,t.jsxs)(eg,{children:[(0,t.jsx)(em,{children:"이메일"}),(0,t.jsx)(ej,{}),(0,t.jsx)(ew,{children:"-"})]})]}),(0,t.jsx)(eb,{children:(0,t.jsx)(e_,{children:"지금 선택됨"})})]},e.id)})}):(0,t.jsxs)(eC,{children:[(0,t.jsx)(el.default,{sx:{fontSize:24,color:"#494F53"}}),(0,t.jsxs)(ez,{children:[(0,t.jsx)(ey,{children:"등록된 보호자 정보가 없습니다."}),(0,t.jsx)(ev,{children:"보호자 정보 등록이 필요한 경우 [+추가하기] 버튼을 클릭하고 등록할 수 있습니다."})]})]}),S]})}),ec=a.default.div.withConfig({componentId:"zh__sc-f6253880-0"})`
  overflow: auto hidden;
  display: flex;
  flex-wrap: nowrap;
  gap: 10px;

  width: 100%;
`,ef=a.default.div.withConfig({componentId:"zh__sc-f6253880-1"})`
  position: relative;

  display: flex;
  flex: 0 0 319px;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;

  height: 186px;
  padding: 16px;
  border: 1px solid ${e=>e.$isSelected?"#5635ff":"#e5e9ef"};
  border-radius: 8px;

  background: ${e=>e.$isSelected?"#f7f5ff":"#fff"};
  box-shadow: ${e=>e.$isSelected?"0 0 3px #ddd8ff":"none"};
`,eh=a.default.div.withConfig({componentId:"zh__sc-f6253880-2"})`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;

  width: 100%;
`,ex=a.default.div.withConfig({componentId:"zh__sc-f6253880-3"})`
  flex-shrink: 0;

  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  color: #0a0a0a;
`,ep=a.default.div.withConfig({componentId:"zh__sc-f6253880-4"})`
  display: flex;
  align-items: center;

  min-width: 0;
  padding: 2px 12px;
  border: 1px solid #d1d5db;
  border-radius: 999px;

  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: #45464e;

  background: #fff;
`,eu=a.default.div.withConfig({componentId:"zh__sc-f6253880-5"})`
  display: flex;
  flex-direction: column;
  gap: 4px;

  width: 100%;
  padding-bottom: 36px;
`,eg=a.default.div.withConfig({componentId:"zh__sc-f6253880-6"})`
  display: flex;
  gap: 8px;
  align-items: flex-start;
  width: 100%;
`,em=a.default.span.withConfig({componentId:"zh__sc-f6253880-7"})`
  width: 52px;
  min-width: 52px;

  font-size: 14px;
  line-height: 20px;
  color: #0a0a0a;
`,ej=a.default.span.withConfig({componentId:"zh__sc-f6253880-8"})`
  width: 1px;
  height: 20px;
  background: #e5e7eb;
`,ew=a.default.span.withConfig({componentId:"zh__sc-f6253880-9"})`
  min-width: 0;

  font-size: 14px;
  line-height: 20px;
  color: #45464e;
  overflow-wrap: anywhere;
`,eb=a.default.div.withConfig({componentId:"zh__sc-f6253880-10"})`
  position: absolute;
  right: 16px;
  bottom: 16px;

  display: flex;
  justify-content: flex-end;
`,e_=a.default.div.withConfig({componentId:"zh__sc-f6253880-11"})`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 8px;
  border-radius: 999px;

  font-size: 16px;
  line-height: 16px;
  color: #fff;
  letter-spacing: -1px;

  background: #4f39f6;
`;a.default.button.withConfig({componentId:"zh__sc-f6253880-12"})`
  cursor: pointer;

  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;

  padding: 8px;
  border: 0;
  border-radius: 999px;

  font-size: 16px;
  line-height: 16px;
  color: #4f39f6;
  letter-spacing: -1px;

  background: transparent;
`;let eC=a.default.div.withConfig({componentId:"zh__sc-f6253880-13"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-height: 186px;
  padding: 16px;
  border: 1px solid #e5e9ef;
  border-radius: 8px;

  background: #fff;
`,ez=a.default.div.withConfig({componentId:"zh__sc-f6253880-14"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: center;
`,ey=a.default.div.withConfig({componentId:"zh__sc-f6253880-15"})`
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  color: #494f53;
`,ev=a.default.div.withConfig({componentId:"zh__sc-f6253880-16"})`
  font-size: 14px;
  line-height: 20px;
  color: #494f53;
  text-align: center;
`,eI=a.default.div.withConfig({componentId:"zh__sc-f6253880-17"})`
  position: absolute;
  z-index: 20;
  inset: 0;

  display: flex;
  justify-content: flex-end;

  background: rgb(17 24 39 / 28%);
`,eT=a.default.div.withConfig({componentId:"zh__sc-f6253880-18"})`
  display: flex;
  flex-direction: column;

  width: min(417px, 100%);
  height: 100%;

  background: #fff;
  box-shadow: -2px 9px 16px rgb(0 0 0 / 16%);
`,eS=a.default.div.withConfig({componentId:"zh__sc-f6253880-19"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
`,ek=a.default.div.withConfig({componentId:"zh__sc-f6253880-20"})`
  flex-shrink: 0;
  width: 36px;
  height: 36px;
`,eA=a.default.div.withConfig({componentId:"zh__sc-f6253880-21"})`
  flex: 1;

  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  color: #0a0a0a;
  text-align: center;
`,eE=a.default.div.withConfig({componentId:"zh__sc-f6253880-22"})`
  height: 1px;
  background: #e5e7eb;
`,e$=a.default.div.withConfig({componentId:"zh__sc-f6253880-23"})`
  overflow-y: auto;
  display: flex;
  flex: 1;
  flex-direction: column;

  padding: 16px;
`,eP=a.default.div.withConfig({componentId:"zh__sc-f6253880-24"})`
  display: flex;
  flex-direction: column;
  gap: 16px;

  padding: 16px;
  border: 1px solid #e5e9ef;
  border-radius: 8px;

  background: #fff;
`,eD=a.default.div.withConfig({componentId:"zh__sc-f6253880-25"})`
  display: flex;
  flex-direction: column;
`,eR=a.default.div.withConfig({componentId:"zh__sc-f6253880-26"})`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: flex-end;
`,eB=a.default.div.withConfig({componentId:"zh__sc-f6253880-27"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,eM=a.default.label.withConfig({componentId:"zh__sc-f6253880-28"})`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: #0a0a0a;
`,eF=a.default.input.withConfig({componentId:"zh__sc-f6253880-29"})`
  width: 100%;
  height: 36px;
  padding: 4px 16px;
  border: 1px solid ${e=>e.$hasError?"#ef4444":"#e5e9ef"};
  border-radius: 4px;

  font-size: 16px;
  color: #0a0a0a;

  &::placeholder {
    color: #9ca3af;
  }

  &:focus {
    border-color: #4f39f6;
    outline: none;
  }
`,eN=a.default.textarea.withConfig({componentId:"zh__sc-f6253880-30"})`
  resize: none;

  width: 100%;
  padding: 4px 16px;
  border: 1px solid ${e=>e.$hasError?"#ef4444":"#e5e9ef"};
  border-radius: 4px;

  font-size: 16px;
  color: #0a0a0a;

  &::placeholder {
    color: #9ca3af;
  }

  &:focus {
    border-color: #4f39f6;
    outline: none;
  }
`,eO=a.default.div.withConfig({componentId:"zh__sc-f6253880-31"})`
  min-height: 20px;
  font-size: 12px;
  line-height: 20px;
  color: #ef4444;
`,eU=a.default.div.withConfig({componentId:"zh__sc-f6253880-32"})`
  min-height: 20px;
  font-size: 12px;
  line-height: 20px;
  color: #ef4444;
`,eL=a.default.div.withConfig({componentId:"zh__sc-f6253880-33"})`
  position: absolute;
  z-index: 30;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgb(17 24 39 / 12%);
`,eH=a.default.div.withConfig({componentId:"zh__sc-f6253880-34"})`
  display: flex;
  flex-direction: column;
  gap: 48px;

  width: 501px;
  padding: 32px 24px;
  border: 1px solid #e5e9ef;
  border-radius: 8px;

  background: #fff;
  box-shadow: 0 4px 2px rgb(0 0 0 / 10%);
`,eG=a.default.div.withConfig({componentId:"zh__sc-f6253880-35"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`,eK=a.default.div.withConfig({componentId:"zh__sc-f6253880-36"})`
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  color: #000;
`,eV=a.default.div.withConfig({componentId:"zh__sc-f6253880-37"})`
  display: flex;
  gap: 12px;
  justify-content: flex-end;
`;var eq=e.i(24655),eW=e.i(84673);function eJ({values:e,errorFlags:n,errorMessages:i,isEditing:o,onChangeField:d}){let l=i?.mobileText??"",s=i?.contactText??"",a=i?.postCodeText??"";return(0,t.jsxs)(eQ,{children:[(0,t.jsxs)(eX,{children:[(0,t.jsxs)(eY,{children:["주민등록번호",(0,t.jsx)(e0,{value:e.residentRegistrationNumberText,readOnly:!0})]}),(0,t.jsxs)(eY,{children:["성별",(0,t.jsx)(e0,{value:e.genderText,readOnly:!0})]}),(0,t.jsxs)(eY,{children:["계약 상태",(0,t.jsxs)(e6,{value:e.contractStatusText,disabled:!o,onChange:e=>d("contractStatusText",e.target.value),children:[(0,t.jsx)("option",{value:"계약중",children:"계약중"}),(0,t.jsx)("option",{value:"해지",children:"해지"})]})]}),(0,t.jsxs)(eY,{children:["휴대폰",(0,t.jsx)(e1,{value:e.mobileText,style:n?.mobileText===!0?e8:void 0,readOnly:!o,onChange:e=>d("mobileText",e)}),""!==l?(0,t.jsx)(eZ,{children:l}):null]}),(0,t.jsxs)(eY,{children:["연락처",(0,t.jsx)(e2,{value:e.contactText,style:n?.contactText===!0?e8:void 0,readOnly:!o,onChange:e=>d("contactText",e)}),""!==s?(0,t.jsx)(eZ,{children:s}):null]})]}),(0,t.jsxs)(eX,{children:[(0,t.jsxs)(eY,{children:["주소",(0,t.jsx)(e0,{value:e.addressBaseText,readOnly:!o,onChange:e=>d("addressBaseText",e.target.value)})]}),(0,t.jsxs)(eY,{children:["상세주소",(0,t.jsx)(e0,{value:e.addressDetailText,readOnly:!o,onChange:e=>d("addressDetailText",e.target.value)})]}),(0,t.jsxs)(eY,{children:["우편번호",(0,t.jsx)(e4,{value:e.postCodeText,style:n?.postCodeText===!0?e8:void 0,readOnly:!o,onChange:e=>d("postCodeText",e)}),""!==a?(0,t.jsx)(eZ,{children:a}):null]})]}),(0,t.jsx)(eX,{children:(0,t.jsxs)(eY,{children:["메모",(0,t.jsx)(e0,{value:e.memoText,readOnly:!o,onChange:e=>d("memoText",e.target.value)})]})})]})}let eQ=a.default.div.withConfig({componentId:"zh__sc-bc79aee4-0"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`,eX=a.default.div.withConfig({componentId:"zh__sc-bc79aee4-1"})`
  display: grid;
  gap: 12px;
  width: 100%;

  &:nth-child(1) {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }

  &:nth-child(2) {
    grid-template-columns: 1.2fr 1.2fr 1fr;
  }

  &:nth-child(3) {
    grid-template-columns: minmax(0, 1fr);
  }

  @media (width <= 900px) {
    grid-template-columns: minmax(0, 1fr) !important;
  }
`,eY=a.default.label.withConfig({componentId:"zh__sc-bc79aee4-2"})`
  display: flex;
  flex-direction: column;
  gap: 4px;

  min-width: 0;

  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: #000;
`,eZ=a.default.div.withConfig({componentId:"zh__sc-bc79aee4-3"})`
  margin-top: 2px;
  font-size: 12px;
  line-height: 16px;
  color: #ff4d4f;
`,e0=(0,a.default)(r.InputText).withConfig({componentId:"zh__sc-bc79aee4-4"})`
  height: 36px;
  padding: 0 16px;
  font-size: 16px;
  line-height: 20px;
`,e1=(0,a.default)(r.InputPhone).withConfig({componentId:"zh__sc-bc79aee4-5"})`
  height: 36px;
  padding: 0 16px;
  font-size: 16px;
  line-height: 20px;
`,e2=(0,a.default)(r.InputContact).withConfig({componentId:"zh__sc-bc79aee4-6"})`
  height: 36px;
  padding: 0 16px;
  font-size: 16px;
  line-height: 20px;
`,e4=(0,a.default)(r.InputPostCode).withConfig({componentId:"zh__sc-bc79aee4-7"})`
  height: 36px;
  padding: 0 16px;
  font-size: 16px;
  line-height: 20px;
`,e6=(0,a.default)(r.InputSelect).withConfig({componentId:"zh__sc-bc79aee4-8"})`
  height: 36px;
  padding: 0 16px;
  font-size: 16px;
  line-height: 20px;

  &:disabled {
    opacity: 1;
  }
`,e8={borderColor:"#ff4d4f",background:"#fff5f5"};var e3=e.i(28630);function e5({detailFormValues:e,errorFlags:n,errorMessages:o,isEditing:d,onStartEdit:l,onCancelEdit:s,requestOpenSaveConfirm:a,requestSaveEdit:c,onChangeField:f}){let[h,x]=(0,i.useState)(!1),p=(0,i.useRef)(null);(0,i.useEffect)(()=>{if(!d||h)return;let e=e=>{let t=e.target,n=t instanceof Node&&null!==p.current&&p.current.contains(t),i=t instanceof Element&&(null!==t.closest('[role="listbox"]')||null!==t.closest('[role="option"]')||null!==t.closest("[data-radix-select-viewport]")||null!==t.closest("[data-radix-popper-content-wrapper]"));n||i||s()};return document.addEventListener("pointerdown",e),()=>{document.removeEventListener("pointerdown",e)}},[h,d,s]);let u=async()=>{!0===await c()&&x(!1)};return(0,t.jsxs)(r.SectionContainer,{ref:p,children:[(0,t.jsx)(r.SectionHeader,{children:(0,t.jsxs)(r.SectionHeaderMain,{children:[(0,t.jsxs)(e9,{children:[(0,t.jsx)(r.SectionTitle,{children:"이용자 정보"}),d?(0,t.jsx)(r.SectionEditingBadge,{children:"수정 진행중"}):null]}),d?(0,t.jsxs)(r.SectionActionGroup,{children:[(0,t.jsxs)(r.SectionActionButton,{type:"button",onClick:s,children:[(0,t.jsx)(eW.default,{sx:{fontSize:20}}),"수정 취소"]}),(0,t.jsxs)(r.SectionActionButton,{type:"button",onClick:()=>{a()&&x(!0)},children:[(0,t.jsx)(eq.default,{sx:{fontSize:20}}),"수정 저장"]})]}):(0,t.jsxs)(r.SectionActionButton,{type:"button",onClick:l,children:[(0,t.jsx)(ed.default,{sx:{fontSize:20}}),"수정하기"]})]})}),(0,t.jsx)(eJ,{values:e,errorFlags:n,errorMessages:o,isEditing:d,onChangeField:f}),(0,t.jsx)(e3.default,{isOpen:h,onCancel:()=>{x(!1)},onConfirm:()=>{u()}})]})}let e9=a.default.div.withConfig({componentId:"zh__sc-e616590d-0"})`
  display: flex;
  gap: 10px;
  align-items: center;
`,e7=(0,n.observer)(function(){let e=o.default.client.info.byClient,n=e.selectedClientId,d=e.currentServiceType,l=e.representativeContract,s=l?.client??null,a=e.selectedUserInfoDraft,c=e.selectedUserInfoValidationErrors,f=e.isUserInfoEditing,h=null===d?[]:[{code:d}],x=l?.client.guardians??[],p=o.default.client.info.byClient.selectedGuardianId,u=async e=>(o.default.client.info.byClient.setSelectedGuardianId(e),!0),g=async()=>null,j=(0,i.useRef)(null),w=h.find(e=>e.code===d)??h[0]??null,b=(0,i.useMemo)(()=>({contractStatusText:l?.status==="TERMINATED"?"해지":"계약중",genderText:s?.gender==="MALE"?"남성":s?.gender==="FEMALE"?"여성":"",residentRegistrationNumberText:s?.residentRegistrationNumber??"",contactText:s?.contact??"",mobileText:s?.phoneNumber??"",addressBaseText:s?.address??"",addressDetailText:s?.addressDetail??"",postCodeText:s?.postCode??"",memoText:s?.note??""}),[l?.status,s?.gender,s?.residentRegistrationNumber,s?.contact,s?.phoneNumber,s?.address,s?.addressDetail,s?.postCode,s?.note]);if((0,i.useEffect)(()=>{j.current?.scrollTo({top:0,behavior:"auto"})},[n]),null===n)return(0,t.jsx)(r.Empty,{children:"서비스를 선택한 뒤 이용자를 선택해 주세요."});let _=async()=>e.saveSelectedUserInfoDraft(),C={...b,contractStatusText:f?"TERMINATED"===a.status?"해지":"ACTIVE"===a.status?"계약중":b.contractStatusText:b.contractStatusText,contactText:f?a.contact??b.contactText:b.contactText,mobileText:f?a.phoneNumber??b.mobileText:b.mobileText,addressBaseText:f?a.address??b.addressBaseText:b.addressBaseText,addressDetailText:f?a.addressDetail??b.addressDetailText:b.addressDetailText,postCodeText:f?a.postCode??b.postCodeText:b.postCodeText,memoText:f?a.note??b.memoText:b.memoText},z={mobileText:void 0!==c.phoneNumber,contactText:void 0!==c.contact,postCodeText:void 0!==c.postCode},y={mobileText:c.phoneNumber,contactText:c.contact,postCodeText:c.postCode};return(0,t.jsxs)(r.Container,{ref:j,children:[(0,t.jsx)(e5,{detailFormValues:C,isEditing:f,onStartEdit:()=>{e.startUserInfoEdit()},onCancelEdit:()=>{e.cancelUserInfoEdit()},requestOpenSaveConfirm:()=>e.validateSelectedUserInfoDraftBeforeConfirm(),requestSaveEdit:_,errorFlags:z,errorMessages:y,onChangeField:(t,n)=>{"contractStatusText"===t?e.updateSelectedUserInfoDraftField("status","해지"===n?"TERMINATED":"ACTIVE"):"contactText"===t?e.updateSelectedUserInfoDraftField("contact",n):"mobileText"===t?e.updateSelectedUserInfoDraftField("phoneNumber",n):"addressBaseText"===t?e.updateSelectedUserInfoDraftField("address",n):"addressDetailText"===t?e.updateSelectedUserInfoDraftField("addressDetail",n):"postCodeText"===t?e.updateSelectedUserInfoDraftField("postCode",n):"memoText"===t&&e.updateSelectedUserInfoDraftField("note",n)}}),(0,t.jsx)(er,{guardianList:x,selectedGuardianId:p,onSelectGuardianId:u,onAddGuardian:g}),(0,t.jsx)(m,{serviceCode:null===w?null:"MEAL"===w.code?"meal":"nutrition",grade:l?.grade??null,paymentMethodText:"CMS 자동이체",paymentDayText:"매월 25일"},n)]})});e.s(["default",0,e7],85026)}]);