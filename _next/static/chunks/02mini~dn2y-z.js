(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,43996,e=>{"use strict";var t=e.i(9735);e.i(3159);var n=e.i(46907),i=e.i(7744),l=e.i(38803),o=e.i(23416),d=e.i(35166),a=e.i(25521),c=e.i(28124),s=e.i(43174),r=e.i(39635);let f=l.default.section.withConfig({componentId:"zh__sc-e1603b6a-0"})`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  align-self: stretch;
`,p=l.default.div.withConfig({componentId:"zh__sc-e1603b6a-1"})`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;

  border: 1px solid #e5e7eb;
  border-radius: 8px;

  background: #fff;
`;l.default.div.withConfig({componentId:"zh__sc-e1603b6a-2"})`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;
`,l.default.div.withConfig({componentId:"zh__sc-e1603b6a-3"})`
  display: flex;
  align-items: center;
`,l.default.p.withConfig({componentId:"zh__sc-e1603b6a-4"})`
  font-size: 20px;
  font-weight: 700;
  line-height: normal;
  color: #0a0a0a;
  letter-spacing: -0.5px;
  white-space: nowrap;
`,l.default.div.withConfig({componentId:"zh__sc-e1603b6a-5"})`
  display: flex;
  gap: 4px;
  align-items: center;

  margin-left: 16px;

  color: #464c53;
`,(0,l.default)(r.default).withConfig({componentId:"zh__sc-e1603b6a-6"})`
  width: 24px;
  height: 24px;
`,l.default.div.withConfig({componentId:"zh__sc-e1603b6a-7"})`
  font-size: 18px;
  line-height: 20px; /* 111.111% */
`,l.default.div.withConfig({componentId:"zh__sc-e1603b6a-8"})`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: flex-end;
`,l.css`
  gap: 4px;
  height: 36px;
  padding: 8px 16px;
`,l.default.div.withConfig({componentId:"zh__sc-e1603b6a-9"})`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  align-self: stretch;

  width: 100%;
`,l.default.div.withConfig({componentId:"zh__sc-e1603b6a-10"})`
  padding-bottom: 8px;

  font-size: 20px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
  letter-spacing: -0.5px;
`,l.default.div.withConfig({componentId:"zh__sc-e1603b6a-11"})`
  display: flex;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;

  min-height: 59px;
`,l.default.div.withConfig({componentId:"zh__sc-e1603b6a-12"})`
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
`,l.default.div.withConfig({componentId:"zh__sc-e1603b6a-13"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #000;
  text-align: center;
`;let h=l.default.table.withConfig({componentId:"zh__sc-e1603b6a-14"})`
  border-collapse: collapse;
  width: 100%;
  font-size: 16px;
`;l.default.tr.withConfig({componentId:"zh__sc-e1603b6a-15"})`
  height: 40px;
  border-top: 1px solid #e5e7eb;
  border-bottom: 1px solid #e5e7eb;
  background: #f9fafb;
`,l.default.th.withConfig({componentId:"zh__sc-e1603b6a-16"})`
  padding: 0 16px;

  font-weight: 700;
  color: #131416;
  text-align: center;
  vertical-align: middle;
`;let x=l.default.tr.withConfig({componentId:"zh__sc-e1603b6a-17"})`
  height: 56px;
  border-bottom: 1px solid #e5e7eb;
`,u=l.default.td.withConfig({componentId:"zh__sc-e1603b6a-18"})`
  padding: 0 16px;
  color: #464c53;
  text-align: center;
  vertical-align: middle;
`;var g=e.i(93384),m=e.i(95649),_=e.i(2615);let w=[{term:"• 기납부",description:"당월 청구액 중에서 이미 납부한 금액"},{term:"• 이전 선납",description:"과거 초과 납부로 이번 달에 공제될 금액"},{term:"• 미납 이월",description:"과거부터 누적되어 온 미납 금액"}],y=[{term:"• 초과(선납)",description:"당월 초과 납부로 다음 달로 이월될 금액"},{term:"• 미결제",description:"당월 청구액 및 미납이월금을 모두 포함하여 아직 납부(결제)되지 않은 최종 잔여 금액"}];function b({isExpanded:e,onToggle:n}){return(0,t.jsxs)(j,{$expanded:e,children:[(0,t.jsxs)(z,{type:"button",onClick:n,"aria-expanded":e,children:[(0,t.jsxs)(I,{children:[(0,t.jsx)(C,{"aria-hidden":!0,children:(0,t.jsx)(g.default,{sx:{fontSize:19}})}),(0,t.jsx)(v,{children:"금액 용어 안내"})]}),(0,t.jsx)(S,{"aria-hidden":!0,children:e?(0,t.jsx)(_.default,{sx:{fontSize:20}}):(0,t.jsx)(m.default,{sx:{fontSize:20}})})]}),e&&(0,t.jsxs)(k,{children:[(0,t.jsx)(T,{children:w.map(e=>(0,t.jsxs)($,{children:[(0,t.jsx)(E,{children:e.term}),(0,t.jsx)(D,{children:e.description})]},e.term))}),(0,t.jsx)(T,{children:y.map(e=>(0,t.jsxs)($,{children:[(0,t.jsx)(E,{children:e.term}),(0,t.jsx)(D,{children:e.description})]},e.term))})]})]})}let j=l.default.div.withConfig({componentId:"zh__sc-f1c0d3cb-0"})`
  display: flex;
  flex-direction: column;
  gap: ${({$expanded:e})=>e?"8px":"0"};
  align-self: stretch;

  width: 100%;
  height: ${({$expanded:e})=>e?"128px":"56px"};
  padding: 16px;
  border: 1px solid #cdd8ec;
  border-radius: 8px;

  background: #fff;
`,z=l.default.button.withConfig({componentId:"zh__sc-f1c0d3cb-1"})`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  min-height: 24px;
  padding: 0;
  border: 0;

  text-align: left;

  background: transparent;
`,I=l.default.div.withConfig({componentId:"zh__sc-f1c0d3cb-2"})`
  display: flex;
  gap: 4px;
  align-items: center;
`,C=l.default.span.withConfig({componentId:"zh__sc-f1c0d3cb-3"})`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 24px;
  height: 24px;

  color: #1c1b1f;
`,v=l.default.span.withConfig({componentId:"zh__sc-f1c0d3cb-4"})`
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
  color: #0a0a0a;
`,S=l.default.span.withConfig({componentId:"zh__sc-f1c0d3cb-5"})`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 20px;
  height: 20px;

  color: #0a0a0a;
`,k=l.default.div.withConfig({componentId:"zh__sc-f1c0d3cb-6"})`
  display: grid;
  grid-template-columns: 263px 263px;
  gap: 24px;
  width: 100%;
`,T=l.default.div.withConfig({componentId:"zh__sc-f1c0d3cb-7"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,$=l.default.div.withConfig({componentId:"zh__sc-f1c0d3cb-8"})`
  display: flex;
  gap: 8px;
  align-items: flex-start;
`,E=l.default.strong.withConfig({componentId:"zh__sc-f1c0d3cb-9"})`
  min-width: 70px;
  padding-left: 8px;

  font-size: 12px;
  font-weight: 600;
  line-height: normal;
  color: #0a0a0a;
`,D=l.default.p.withConfig({componentId:"zh__sc-f1c0d3cb-10"})`
  max-width: 185px;
  margin: 0;

  font-size: 12px;
  line-height: 14px;
  color: #0a0a0a;
`;var M=e.i(88552),A=e.i(24655),L=e.i(24045),P=e.i(8179),N=e.i(89656),B=e.i(26170),O=e.i(64954),R=e.i(10957),U=e.i(74515);let V=[".xls",".xlsx"],F=["application/vnd.ms-excel","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],Y=[...V,...F].join(",");function H(e){return"string"!=typeof e||""===e.trim()?"-":e.slice(0,10).replace(/-/g,"/")}function K({isOpen:e,onClose:n,analysisResult:l=null,contractOptions:o,onClickStartAnalyze:d,onClickReUpload:a,onClickConfirmAndSave:c}){var r;let f=(0,i.useRef)(null),[p,h]=(0,i.useState)(null),[x,u]=(0,i.useState)(!1),[g,m]=(0,i.useState)(!1),[_,w]=(0,i.useState)(!1),[y,b]=(0,i.useState)([]),[j,z]=(0,i.useState)([]),[I,C]=(0,i.useState)({}),[v,S]=(0,i.useState)(null),[k,T]=(0,i.useState)(null),[$,E]=(0,i.useState)(R.SELECT_EMPTY_VALUE),{isWindowFileDragging:D}=s.default.ui.layout,O=e=>{var t;let n,i=(n=e.name.toLowerCase(),V.some(e=>n.endsWith(e))),l=(t=e.type,F.includes(t));if(!0!==i&&!0!==l){h(null),m(!0),w(!1);return}h(e),m(!1),w(!1)};if((0,U.default)(t=>{if(!0!==e||_)return;let n=t[0];void 0!==n&&O(n)}),!0!==e)return null;let tn=null!==p,ti=null!==l,tl=ti&&!0!==_,to=null===l?[]:[...l.created.map(e=>({id:e.id,clientName:e.clientName,amount:e.amount,depositDate:e.depositDate,transactionText:"-",statusText:"매칭 성공",reasonText:`매칭 이용자(${e.clientName})`,candidates:null,canMatch:!1,canHold:!1,canDelete:!1})),...l.issues.map(e=>({id:e.id,clientName:(e=>{if("string"!=typeof e)return"-";let t=e.trim();return 0===t.length?"-":t})(e.matchText),amount:e.amount,depositDate:e.depositDate,transactionText:"-",statusText:"자동 매칭 실패",reasonText:"AMBIGUOUS"===e.status?"매칭 후보 다수 존재":"일치하는 이용자 없음",candidates:e.candidates,canMatch:!0,canHold:!0,canDelete:!0}))],td=null===v?null:to.find(e=>e.id===v)??null,ta=to.filter(e=>!0!==y.includes(e.id)),tc=null===k?null:to.find(e=>e.id===k)??null,ts=(()=>{let e=Array.from(new Map(o.map(e=>[e.contractId,{contractId:e.contractId,clientName:e.clientName.trim(),birthDate:e.birthDate,serviceType:e.serviceType,grade:e.grade,contractStartDate:e.contractStartDate,contractEndDate:e.contractEndDate}])).values()).filter(e=>e.clientName.length>0);if(null===td||!0!==Array.isArray(td.candidates))return e;let t=Array.from(new Map(td.candidates.map(t=>{let n=e.find(e=>e.contractId===t.contractId);return[t.contractId,n??{contractId:t.contractId,clientName:t.clientName.trim(),birthDate:null,serviceType:null,grade:null,contractStartDate:null,contractEndDate:null}]})).values()).filter(e=>e.clientName.length>0),n=new Set(t.map(e=>e.contractId));return[...t,...e.filter(e=>!n.has(e.contractId))]})(),tr=null!==td&&$!==R.SELECT_EMPTY_VALUE&&"string"==typeof td.depositDate&&td.depositDate.trim().length>0&&"number"==typeof td.amount&&td.amount>=1,tf=e=>"number"!=typeof e?"-":e.toLocaleString("ko-KR"),tp=e=>"string"!=typeof e||""===e.trim()?"-":e.slice(0,10).replace(/-/g,"/"),th=()=>{h(null),m(!1),w(!1),b([]),z([]),C({}),T(null),S(null),E(R.SELECT_EMPTY_VALUE)},tx=()=>{h(null),u(!1),m(!1),w(!1),b([]),z([]),C({}),T(null),S(null),E(R.SELECT_EMPTY_VALUE)},tu=()=>{S(null),E(R.SELECT_EMPTY_VALUE)},tg=async()=>{_||!1!==await Promise.resolve(a?.())&&th()},tm=async()=>{!1!==await Promise.resolve(n())&&tx()},t_=async()=>{if(!0!==tl)return;let e=Object.values(I).map(e=>({issueId:e.issueId,contractId:e.contractId,depositDate:e.depositDate,amount:e.amount})),t=Array.from(new Set(y));!1!==await Promise.resolve(c?.({resolvedIssues:e,deletedIssueIds:t}))&&tx()},tw=()=>{T(null)},ty=g?"지원하지 않는 파일 형식입니다.":_?"업로드한 파일을 분석하고 있습니다.":x||D?"파일을 여기에 놓으면 업로드 됩니다.":"이곳에 파일을 끌어다 놓거나 (드래그 앤 드롭), 클릭하여 업로드하세요.",tb=null===p||g||_?"지원 파일 형식: .xls, .xlsx":"새 파일을 업로드하면 기존 파일이 교체됩니다.";return(0,t.jsxs)(B.default,{children:[(0,t.jsxs)(G,{children:[(0,t.jsxs)(N.Header,{children:[(0,t.jsx)(N.HeaderLeft,{children:(0,t.jsx)(N.HeaderTitle,{children:"입금 내역 파일 확인하기"})}),(0,t.jsx)(N.HeaderRight,{children:(0,t.jsxs)(q,{onClick:()=>{tm()},children:[(0,t.jsx)(Q,{children:"×"}),"닫기"]})})]}),(0,t.jsxs)(X,{$hasAnalysisResult:ti,children:[!0!==ti&&(0,t.jsx)(W,{children:"은행 입금내역 파일을 업로드하고, 분석 시작 버튼을 클릭하세요."}),(0,t.jsx)(J,{ref:f,type:"file",accept:Y,onChange:e=>{let t=e.target.files?.[0];void 0!==t&&(O(t),e.target.value="")}}),!0!==ti?(0,t.jsxs)(Z,{$isDragOver:x,$isError:g,$isBlocked:_,onClick:()=>{_||f.current?.click()},onDragOver:e=>{e.preventDefault(),u(!0)},onDragLeave:e=>{e.preventDefault(),u(!1)},onDrop:e=>{e.preventDefault(),u(!1);let t=e.dataTransfer.files?.[0];void 0!==t&&O(t)},children:[null===p?(0,t.jsx)(eg,{children:(0,t.jsx)(L.Upload,{size:26,color:"#4f39f6"})}):(0,t.jsx)(em,{children:(0,t.jsxs)(e_,{children:[(0,t.jsxs)(ew,{children:[(0,t.jsx)(eI,{children:p.name}),(0,t.jsx)(eC,{children:(r=p.size,`${Math.ceil(r/1024/1024)}MB`)})]}),(0,t.jsxs)(ev,{type:"button",onClick:e=>{e.stopPropagation(),th()},disabled:_,children:["삭제",(0,t.jsx)(P.X,{size:16})]})]})}),(0,t.jsxs)(ey,{children:[(0,t.jsx)(eb,{$isError:g,children:ty}),(0,t.jsx)(ej,{children:tb})]}),(0,t.jsxs)(ez,{type:"button",disabled:!0!==tn||_,onClick:e=>{e.stopPropagation(),null===p||_||(z([]),w(!0),Promise.resolve(d?.(p)).finally(()=>{w(!1)}))},children:["분석 시작",(0,t.jsx)(M.default,{sx:{fontSize:16}})]})]}):(0,t.jsx)(ee,{children:(0,t.jsxs)(et,{children:[(0,t.jsxs)(en,{children:[(0,t.jsx)(ei,{children:(0,t.jsxs)(el,{children:[(0,t.jsx)(eo,{children:"입금자명"}),(0,t.jsx)(ed,{children:"(거래 기록사항)"})]})}),(0,t.jsx)(ei,{children:"입금금액(원)"}),(0,t.jsx)(ei,{children:"거래 일자"}),(0,t.jsx)(ei,{children:"거래 시간"}),(0,t.jsx)(ei,{children:"거래 내용"}),(0,t.jsx)(ei,{children:"매칭 상태"}),(0,t.jsx)(ei,{})]}),(0,t.jsx)(ea,{children:ta.map(e=>{let n,i,l,o,d;return i=void 0!==(n=I[e.id]),l=j.includes(e.id)||i,o=i?"매칭 성공":e.statusText,d=i?`매칭 이용자(${n.clientName})`:e.reasonText,(0,t.jsxs)(ec,{children:[(0,t.jsx)(es,{children:e.clientName}),(0,t.jsx)(es,{children:tf(e.amount)}),(0,t.jsx)(es,{children:tp(e.depositDate)}),(0,t.jsx)(es,{children:"-"}),(0,t.jsx)(es,{children:e.transactionText}),(0,t.jsxs)(er,{children:[(0,t.jsx)(ef,{$isIssue:!0!==i&&e.canDelete,children:o}),(0,t.jsx)(ep,{children:d})]}),(0,t.jsxs)(eh,{children:[e.canMatch&&(0,t.jsx)(ex,{type:"button",disabled:l,onClick:()=>{S(e.id),E(n?.contractId??R.SELECT_EMPTY_VALUE)},children:"이용자 매칭하기"}),e.canHold&&(0,t.jsx)(eu,{type:"button",disabled:i,onClick:()=>{z(t=>t.includes(e.id)?t:[...t,e.id])},children:"보류하기"}),e.canDelete&&(0,t.jsx)(eu,{type:"button",disabled:l,onClick:()=>{T(e.id)},children:"삭제하기"})]})]},e.id)})})]})})]}),(0,t.jsxs)(N.Footer,{children:[(0,t.jsx)(eS,{type:"button",disabled:!0!==tn||_,onClick:()=>{tg()},children:"다시 업로드하기"}),(0,t.jsxs)(ek,{type:"button",disabled:!0!==tl,onClick:()=>{t_()},children:[(0,t.jsx)(A.default,{sx:{fontSize:16}}),"최종확인 및 저장"]})]})]}),null!==td&&(0,t.jsx)(B.default,{children:(0,t.jsxs)(eT,{children:[(0,t.jsxs)(e$,{children:[(0,t.jsx)(eE,{children:"이용자 매칭하기"}),(0,t.jsxs)(eD,{type:"button",onClick:tu,children:[(0,t.jsx)(P.X,{size:20}),"닫기"]})]}),(0,t.jsxs)(eM,{children:[(0,t.jsx)(eA,{children:"아래 입금 내역과 매칭될 이용자를 선택해주세요."}),(0,t.jsxs)(eL,{children:[(0,t.jsxs)(eP,{children:[(0,t.jsxs)(eN,{children:["입금자명 ",td.clientName]}),(0,t.jsx)(eB,{children:td.statusText})]}),(0,t.jsxs)(eO,{children:[(0,t.jsxs)(eR,{children:[(0,t.jsx)(eU,{children:"입금금액(원)"}),(0,t.jsx)(eV,{children:tf(td.amount)})]}),(0,t.jsxs)(eR,{children:[(0,t.jsx)(eU,{children:"거래 일자"}),(0,t.jsx)(eV,{children:tp(td.depositDate)})]}),(0,t.jsxs)(eR,{children:[(0,t.jsx)(eU,{children:"거래 시간"}),(0,t.jsx)(eV,{children:"-"})]}),(0,t.jsxs)(eR,{children:[(0,t.jsx)(eU,{children:"거래 내용"}),(0,t.jsx)(eV,{children:td.transactionText})]})]})]}),(0,t.jsxs)(eF,{children:[(0,t.jsx)(eY,{children:"매칭될 이용자 선택"}),(0,t.jsxs)(eH,{$isEmptySelected:$===R.SELECT_EMPTY_VALUE,value:$,onChange:e=>{E(e.target.value)},children:[(0,t.jsx)("option",{value:R.SELECT_EMPTY_VALUE,disabled:!0,children:"이용자를 선택해주세요."}),ts.map(e=>{var n,i,l,o;return(0,t.jsx)("option",{value:e.contractId,children:`${e.clientName} | ${H(e.birthDate)} | ${"MEAL"===(n=e.serviceType)?"식사":"NUTRITION"===n?"영양":"DISABILITY_ACTIVITY_SUPPORT"===n?"장애인 활동지원":"-"} | ${"string"!=typeof(i=e.grade)||""===i.trim()?"-":i.includes("등급")?i:`${i}등급`} | ${(l=e.contractStartDate,o=e.contractEndDate,`${H(l)} ~ ${H(o)}`)}`},e.contractId)})]})]})]}),(0,t.jsxs)(eK,{children:[(0,t.jsx)(eG,{type:"button",onClick:tu,children:"취소하기"}),(0,t.jsx)(eq,{type:"button",disabled:!0!==tr,onClick:()=>{if(!0!==tr||null===td)return;let e=ts.find(e=>e.contractId===$);if(void 0===e||"number"!=typeof td.amount||"string"!=typeof td.depositDate)return;let t=td.depositDate.slice(0,10),n=td.amount;C(i=>({...i,[td.id]:{issueId:td.id,contractId:$,clientName:e.clientName,depositDate:t,amount:n}})),tu()},children:"저장하기"})]})]})}),null!==tc&&(0,t.jsx)(B.default,{children:(0,t.jsxs)(eQ,{children:[(0,t.jsxs)(eX,{children:[(0,t.jsx)(eW,{children:"입금 내역 삭제하기"}),(0,t.jsxs)(eJ,{type:"button",onClick:tw,children:[(0,t.jsx)(P.X,{size:20}),"닫기"]})]}),(0,t.jsxs)(eZ,{children:[(0,t.jsx)(e0,{children:"아래 입금 내역을 목록에서 제외하시겠습니까?"}),(0,t.jsxs)(e1,{children:[(0,t.jsxs)(e2,{children:[(0,t.jsx)(e4,{children:`입금자명 ${tc.clientName}`}),(0,t.jsx)(e6,{children:tc.reasonText})]}),(0,t.jsxs)(e7,{children:[(0,t.jsxs)(e5,{children:[(0,t.jsx)(e8,{children:"입금금액(원)"}),(0,t.jsx)(e3,{children:tf(tc.amount)})]}),(0,t.jsxs)(e5,{children:[(0,t.jsx)(e8,{children:"거래 일자"}),(0,t.jsx)(e3,{children:tp(tc.depositDate)})]}),(0,t.jsxs)(e5,{children:[(0,t.jsx)(e8,{children:"거래 시간"}),(0,t.jsx)(e3,{children:"-"})]}),(0,t.jsxs)(e5,{children:[(0,t.jsx)(e8,{children:"거래 내용"}),(0,t.jsx)(e3,{children:tc.transactionText})]})]})]})]}),(0,t.jsxs)(e9,{children:[(0,t.jsx)(te,{type:"button",onClick:tw,children:"취소하기"}),(0,t.jsx)(tt,{type:"button",onClick:()=>{null!==k&&(b(e=>e.includes(k)?e:[...e,k]),z(e=>e.filter(e=>e!==k)),C(e=>{let t={...e};return delete t[k],t}),v===k&&tu(),tw())},children:"삭제하기"})]})]})})]})}let G=(0,l.default)(N.Container).withConfig({componentId:"zh__sc-7c2144f7-0"})`
  display: flex;
  flex-direction: column;
  align-items: stretch;

  width: 1599px;
  max-width: calc(100vw - 32px);
  height: 929px;
  max-height: calc(100vh - 32px);
  border-radius: 8px;
`,q=(0,l.default)(O.default.Button.Outlined).withConfig({componentId:"zh__sc-7c2144f7-1"})`
  ${N.btnStyle}
`,Q=l.default.span.withConfig({componentId:"zh__sc-7c2144f7-2"})`
  font-size: 20px;
  line-height: 20px;
`,X=(0,l.default)(N.Body).withConfig({componentId:"zh__sc-7c2144f7-3"})`
  overflow: auto;
  flex: 1;
  gap: ${({$hasAnalysisResult:e})=>e?"16px":"24px"};
  align-items: ${({$hasAnalysisResult:e})=>e?"stretch":"center"};
  align-self: stretch;
  justify-content: ${({$hasAnalysisResult:e})=>e?"flex-start":"center"};

  height: 100%;
  padding: 28px 24px;
`,W=l.default.p.withConfig({componentId:"zh__sc-7c2144f7-4"})`
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  color: #101828;
  text-align: center;
`,J=l.default.input.withConfig({componentId:"zh__sc-7c2144f7-5"})`
  display: none;
`,Z=l.default.div.withConfig({componentId:"zh__sc-7c2144f7-6"})`
  pointer-events: ${({$isBlocked:e})=>e?"none":"auto"};
  cursor: ${({$isBlocked:e})=>e?"default":"pointer"};

  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  justify-content: center;

  width: 100%;
  min-height: 120px;
  padding: 24px 40px;
  border: 1px solid ${({$isError:e})=>e?"#ff4d4f":"#4f39f6"};
  border-style: ${({$isDragOver:e})=>e?"dashed":"solid"};
  border-radius: 16px;

  background: ${({$isDragOver:e,$isError:t})=>t?"#fff5f5":e?"#f6f3ff":"#fff"};

  &:hover {
    background-color: ${({$isError:e})=>e?"#fff5f5":"#f6f3ff"};
  }

  &:active {
    background-color: ${({$isError:e})=>e?"#fff5f5":"#efeaff"};
  }
`,ee=l.default.div.withConfig({componentId:"zh__sc-7c2144f7-7"})`
  overflow: auto;

  width: 100%;
  max-width: 100%;
  border: 1px solid #e5e7eb;
  border-radius: 8px;

  background: #fff;
`,et=l.default.div.withConfig({componentId:"zh__sc-7c2144f7-8"})`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 1551px;
`,en=l.default.div.withConfig({componentId:"zh__sc-7c2144f7-9"})`
  display: grid;
  grid-template-columns: 180.5px 180.5px 180.5px 180.5px 180.5px 228.5px 420px;
  align-items: stretch;

  height: 48px;
  border-bottom: 1px solid #e5e7eb;

  background: #f8fafc;
`,ei=l.default.div.withConfig({componentId:"zh__sc-7c2144f7-10"})`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0 8px;

  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
  color: #1c1d22;
  text-align: center;
  white-space: nowrap;
`,el=l.default.span.withConfig({componentId:"zh__sc-7c2144f7-11"})`
  display: flex;
  flex-direction: column;
  gap: 0;
  align-items: center;
  justify-content: flex-start;

  height: 100%;
  padding-top: 5px;
`,eo=l.default.span.withConfig({componentId:"zh__sc-7c2144f7-12"})``,ed=l.default.span.withConfig({componentId:"zh__sc-7c2144f7-13"})`
  font-weight: 400;
`,ea=l.default.div.withConfig({componentId:"zh__sc-7c2144f7-14"})`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`,ec=l.default.div.withConfig({componentId:"zh__sc-7c2144f7-15"})`
  display: grid;
  grid-template-columns: 180.5px 180.5px 180.5px 180.5px 180.5px 228.5px 420px;
  align-items: stretch;

  min-height: 92px;
  border-bottom: 1px solid #e5e7eb;

  &:last-child {
    border-bottom: 0;
  }
`,es=l.default.div.withConfig({componentId:"zh__sc-7c2144f7-16"})`
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 10px 8px;

  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  color: #464c53;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
`,er=l.default.div.withConfig({componentId:"zh__sc-7c2144f7-17"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: center;

  padding: 10px 8px;
`,ef=l.default.span.withConfig({componentId:"zh__sc-7c2144f7-18"})`
  padding: 6px 10px;
  border-radius: 99px;

  font-size: 13px;
  font-weight: 600;
  line-height: 14px;
  color: ${({$isIssue:e})=>e?"#d11f1f":"#14783D"};

  background: ${({$isIssue:e})=>e?"#ffe8e8":"#E8F7ED"};
`,ep=l.default.p.withConfig({componentId:"zh__sc-7c2144f7-19"})`
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  color: #73737a;
  text-align: center;
`,eh=l.default.div.withConfig({componentId:"zh__sc-7c2144f7-20"})`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;

  padding: 10px 8px;
`,ex=(0,l.default)(O.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-7c2144f7-21"})`
  ${N.btnStyle}
`,eu=(0,l.default)(O.default.Button.Outlined).withConfig({componentId:"zh__sc-7c2144f7-22"})`
  ${N.btnStyle}
`,eg=l.default.div.withConfig({componentId:"zh__sc-7c2144f7-23"})`
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: center;

  width: 32px;
  height: 32px;
`,em=l.default.div.withConfig({componentId:"zh__sc-7c2144f7-24"})`
  overflow: auto hidden;
  display: flex;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;

  width: 100%;
  min-width: 0;
  padding-bottom: 6px;

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 999px;
    background: #d1d5db;
  }
`,e_=l.default.div.withConfig({componentId:"zh__sc-7c2144f7-25"})`
  display: flex;
  flex-shrink: 0;
  gap: 24px;
  align-items: center;

  padding: 12px 16px;
  border-radius: 8px;

  background: #f6f8fb;
`,ew=l.default.div.withConfig({componentId:"zh__sc-7c2144f7-26"})`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
`,ey=l.default.div.withConfig({componentId:"zh__sc-7c2144f7-27"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  align-self: stretch;
  justify-content: center;
`,eb=l.default.p.withConfig({componentId:"zh__sc-7c2144f7-28"})`
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  color: ${({$isError:e})=>e?"#ff4d4f":"#4f39f6"};
  text-align: center;
`,ej=l.default.p.withConfig({componentId:"zh__sc-7c2144f7-29"})`
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  color: #99a1af;
  text-align: center;
`,ez=(0,l.default)(O.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-7c2144f7-30"})`
  ${N.btnStyle}
  display: flex;
  gap: 4px;
  align-items: center;
  align-self: flex-end;

  margin-left: auto;
`,eI=l.default.p.withConfig({componentId:"zh__sc-7c2144f7-31"})`
  overflow: hidden;

  max-width: 196px;

  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: #0a0a0a;
  text-overflow: ellipsis;
  white-space: nowrap;
`,eC=l.default.p.withConfig({componentId:"zh__sc-7c2144f7-32"})`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: #0a0a0a;
`,ev=l.default.button.withConfig({componentId:"zh__sc-7c2144f7-33"})`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;

  padding: 8px;
  border: 1px solid #45464e;
  border-radius: 99px;

  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  color: #0a0a0a;
  letter-spacing: -1px;

  background: #fff;

  &:hover {
    background: #f9fafb;
  }

  &:active {
    background: #f3f4f6;
  }
`,eS=(0,l.default)(O.default.Button.Outlined).withConfig({componentId:"zh__sc-7c2144f7-34"})`
  ${N.btnStyle}
`,ek=(0,l.default)(O.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-7c2144f7-35"})`
  ${N.btnStyle}
`,eT=(0,l.default)(N.Container).withConfig({componentId:"zh__sc-7c2144f7-36"})`
  display: flex;
  flex-direction: column;
  align-items: stretch;

  width: 551px;
  max-width: calc(100vw - 32px);
  border-radius: 8px;
`,e$=l.default.div.withConfig({componentId:"zh__sc-7c2144f7-37"})`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;

  height: 69px;
  padding: 16px;
  border-bottom: 1px solid #e5e7eb;

  background: #fff;
`,eE=l.default.h3.withConfig({componentId:"zh__sc-7c2144f7-38"})`
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  color: #101828;
  letter-spacing: -0.44px;
`,eD=(0,l.default)(O.default.Button.Outlined).withConfig({componentId:"zh__sc-7c2144f7-39"})`
  ${N.btnStyle}
  display: flex;
  gap: 4px;
  align-items: center;
`,eM=l.default.div.withConfig({componentId:"zh__sc-7c2144f7-40"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: stretch;

  padding: 32px 24px;

  background: #f9fafb;
`,eA=l.default.p.withConfig({componentId:"zh__sc-7c2144f7-41"})`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: #0a0a0a;
`,eL=l.default.div.withConfig({componentId:"zh__sc-7c2144f7-42"})`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;

  width: 100%;
  padding: 16px;
  border-radius: 8px;

  background: #fff;
`,eP=l.default.div.withConfig({componentId:"zh__sc-7c2144f7-43"})`
  display: flex;
  gap: 8px;
  align-items: center;
  min-height: 28px;
`,eN=l.default.p.withConfig({componentId:"zh__sc-7c2144f7-44"})`
  font-size: 16px;
  font-weight: 600;
  line-height: 21px;
  color: #2e303b;
`,eB=l.default.span.withConfig({componentId:"zh__sc-7c2144f7-45"})`
  padding: 6px 10px;
  border-radius: 99px;

  font-size: 13px;
  font-weight: 600;
  line-height: 14px;
  color: #d11f1f;

  background: #ffe8e8;
`,eO=l.default.div.withConfig({componentId:"zh__sc-7c2144f7-46"})`
  display: flex;
  gap: 20px;
  align-items: flex-start;
  width: 440px;
`,eR=l.default.div.withConfig({componentId:"zh__sc-7c2144f7-47"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;

  width: 90px;
`,eU=l.default.p.withConfig({componentId:"zh__sc-7c2144f7-48"})`
  font-size: 12px;
  font-weight: 400;
  line-height: 17px;
  color: #737885;
`,eV=l.default.p.withConfig({componentId:"zh__sc-7c2144f7-49"})`
  overflow: hidden;

  max-width: 100%;

  font-size: 14px;
  font-weight: 600;
  line-height: 19px;
  color: #333640;
  text-overflow: ellipsis;
  white-space: nowrap;
`,eF=l.default.div.withConfig({componentId:"zh__sc-7c2144f7-50"})`
  display: flex;
  gap: 10px;
  align-items: center;
`,eY=l.default.p.withConfig({componentId:"zh__sc-7c2144f7-51"})`
  flex-shrink: 0;

  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  color: #000;
`,eH=(0,l.default)(O.default.Input.Select).withConfig({componentId:"zh__sc-7c2144f7-52"})`
  width: 100%;
  min-height: 36px;
  color: ${({$isEmptySelected:e})=>e?"#9ca3af":"#0a0a0a"};
`,eK=l.default.div.withConfig({componentId:"zh__sc-7c2144f7-53"})`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: flex-end;

  padding: 16px;
  border-top: 1px solid #e5e7eb;

  background: #fff;
`,eG=(0,l.default)(O.default.Button.Outlined).withConfig({componentId:"zh__sc-7c2144f7-54"})`
  ${N.btnStyle}
`,eq=(0,l.default)(O.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-7c2144f7-55"})`
  ${N.btnStyle}
`,eQ=(0,l.default)(N.Container).withConfig({componentId:"zh__sc-7c2144f7-56"})`
  display: flex;
  flex-direction: column;
  align-items: stretch;

  width: 551px;
  max-width: calc(100vw - 32px);
  border-radius: 8px;
`,eX=l.default.div.withConfig({componentId:"zh__sc-7c2144f7-57"})`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;

  height: 69px;
  padding: 16px;
  border-bottom: 1px solid #e5e7eb;

  background: #fff;
`,eW=l.default.h3.withConfig({componentId:"zh__sc-7c2144f7-58"})`
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  color: #101828;
  letter-spacing: -0.44px;
`,eJ=(0,l.default)(O.default.Button.Outlined).withConfig({componentId:"zh__sc-7c2144f7-59"})`
  ${N.btnStyle}
  display: flex;
  gap: 4px;
  align-items: center;
`,eZ=l.default.div.withConfig({componentId:"zh__sc-7c2144f7-60"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: stretch;

  padding: 32px 24px;

  background: #f9fafb;
`,e0=l.default.p.withConfig({componentId:"zh__sc-7c2144f7-61"})`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: #0a0a0a;
`,e1=l.default.div.withConfig({componentId:"zh__sc-7c2144f7-62"})`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;

  width: 100%;
  padding: 16px;
  border-radius: 8px;

  background: #fff;
`,e2=l.default.div.withConfig({componentId:"zh__sc-7c2144f7-63"})`
  display: flex;
  gap: 8px;
  align-items: center;
  min-height: 28px;
`,e4=l.default.p.withConfig({componentId:"zh__sc-7c2144f7-64"})`
  font-size: 16px;
  font-weight: 600;
  line-height: 21px;
  color: #2e303b;
`,e6=l.default.span.withConfig({componentId:"zh__sc-7c2144f7-65"})`
  padding: 6px 10px;
  border-radius: 99px;

  font-size: 13px;
  font-weight: 600;
  line-height: 14px;
  color: #d11f1f;

  background: #ffe8e8;
`,e7=l.default.div.withConfig({componentId:"zh__sc-7c2144f7-66"})`
  display: flex;
  gap: 20px;
  align-items: flex-start;
  width: 440px;
`,e5=l.default.div.withConfig({componentId:"zh__sc-7c2144f7-67"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;

  width: 90px;
`,e8=l.default.p.withConfig({componentId:"zh__sc-7c2144f7-68"})`
  font-size: 12px;
  font-weight: 400;
  line-height: 17px;
  color: #737885;
`,e3=l.default.p.withConfig({componentId:"zh__sc-7c2144f7-69"})`
  overflow: hidden;

  max-width: 100%;

  font-size: 14px;
  font-weight: 600;
  line-height: 19px;
  color: #333640;
  text-overflow: ellipsis;
  white-space: nowrap;
`,e9=l.default.div.withConfig({componentId:"zh__sc-7c2144f7-70"})`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: flex-end;

  padding: 16px;
  border-top: 1px solid #e5e7eb;

  background: #fff;
`,te=(0,l.default)(O.default.Button.Outlined).withConfig({componentId:"zh__sc-7c2144f7-71"})`
  ${N.btnStyle}
`,tt=(0,l.default)(O.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-7c2144f7-72"})`
  ${N.btnStyle}
`;var tn=e.i(15695);let ti=e=>`${e.toLocaleString("ko-KR")}원`;function tl({selectedBillingRow:e,onSubmit:n,onClose:l}){let o=null===e?0:Math.max(e.runningBalance,0),[d,a]=(0,i.useState)(""),[c,s]=(0,i.useState)(o),[r,f]=(0,i.useState)(String(o)),[p,h]=(0,i.useState)(!1),[x,u]=(0,i.useState)(!1);if(null===e)return null;let g=e.runningBalance,m=(e=>{let[t,n]=e.split("-"),i=Number(t),l=Number(n);return!0!==Number.isFinite(i)||!0!==Number.isFinite(l)?e:`${i}년 ${l}월`})(e.targetYearMonth),_=(e=>{let[t,n]=e.split("-"),i=Number(t),l=Number(n);if(!0!==Number.isFinite(i)||!0!==Number.isFinite(l))return null;let o=new Date(i,l-2,1);return`${o.getFullYear()}년 ${o.getMonth()+1}월`})(e.targetYearMonth),w="MEAL"===e.serviceType?"식사":"영양",y=Math.max(g,0),b=[{label:"미납 이월",amountText:ti(Math.max(e.previousBalance,0))},{label:`${_??"-"} 이전 선납`,amountText:ti(Math.abs(Math.min(e.previousBalance,0)))},{label:`${m} (당월) 당월 청구액`,amountText:ti(e.expectedCopaymentThisMonth)},{label:"기납부",amountText:ti(e.depositedThisMonth)}],j=async()=>{if(!x){u(!0);try{await n({contractId:e.contractId,depositDate:d,amount:c})}finally{u(!1)}}};return(0,t.jsx)(to,{children:(0,t.jsxs)(td,{onClick:e=>e.stopPropagation(),children:[(0,t.jsx)(ta,{children:(0,t.jsx)(tc,{children:"본인부담금 입금 내역 입력"})}),(0,t.jsx)(ts,{children:(0,t.jsxs)(tr,{children:[(0,t.jsxs)(tf,{children:[(0,t.jsxs)(tp,{children:[(0,t.jsxs)(th,{children:[(0,t.jsx)(tx,{children:e.clientName}),(0,t.jsx)(tu,{children:`(${w} \xb7 ${e.contractGrade}등급 \xb7 ${e.providedCount.toLocaleString("ko-KR")}회 \xb7 ${m})`})]}),(0,t.jsxs)(tg,{children:[(0,t.jsx)(tm,{children:"당월 미결제 잔액"}),(0,t.jsx)(t_,{children:ti(y)})]})]}),(0,t.jsx)(tw,{}),(0,t.jsxs)(ty,{children:[(0,t.jsx)(tb,{children:"정산 상세 내역"}),b.map(e=>(0,t.jsxs)(tj,{children:[(0,t.jsx)(tz,{children:e.label}),(0,t.jsx)(tI,{children:e.amountText})]},e.label))]})]}),(0,t.jsxs)(tC,{children:[(0,t.jsx)(tv,{children:"은행 내역의 입금일과 금액을 입력해주세요."}),(0,t.jsxs)(tS,{children:[(0,t.jsx)(tk,{children:(0,t.jsx)(O.default.Input.Date,{value:d,onChange:a,placeholder:"YYYY년 MM월 DD일",style:{width:"100%",height:"36px",fontSize:"14px",textAlign:"center"}})}),(0,t.jsx)(tT,{value:p?r:ti(c),inputMode:"numeric",placeholder:"0원",onFocus:()=>{h(!0),f(String(c))},onBlur:()=>{h(!1),f(String(c))},onChange:e=>{let t=e.target.value.replace(/[^\d]/g,"");(f(t),0===t.length)?s(0):s(Number(t))}})]})]})]})}),(0,t.jsxs)(t$,{children:[(0,t.jsxs)(tE,{type:"button",onClick:l,children:[(0,t.jsx)(P.X,{size:16}),"닫기"]}),(0,t.jsxs)(tD,{type:"button",onClick:()=>void j(),children:[(0,t.jsx)(tn.Check,{size:16}),x?"저장 중...":"완료하기"]})]})]})})}let to=l.default.div.withConfig({componentId:"zh__sc-9c61ea85-0"})`
  position: fixed;
  z-index: 1300;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgb(10 10 10 / 48%);
`,td=l.default.section.withConfig({componentId:"zh__sc-9c61ea85-1"})`
  overflow: hidden;
  display: flex;
  flex-direction: column;

  width: 455px;
  max-width: calc(100vw - 32px);
  min-height: 513px;
  border: 1px solid #d5dbe3;
  border-radius: 8px;

  background: #fff;
`,ta=l.default.header.withConfig({componentId:"zh__sc-9c61ea85-2"})`
  display: flex;
  align-items: center;

  height: 69px;
  padding: 0 16px;
  border-bottom: 1px solid #e5e7eb;
`,tc=l.default.h2.withConfig({componentId:"zh__sc-9c61ea85-3"})`
  font-size: 18px;
  font-weight: 700;
  font-style: normal;
  line-height: 28px; /* 155.556% */
  color: #101828;
  letter-spacing: -0.439px;
`,ts=l.default.div.withConfig({componentId:"zh__sc-9c61ea85-4"})`
  flex: 1;
  padding: 24px;
  background: #f9fafb;
`,tr=l.default.div.withConfig({componentId:"zh__sc-9c61ea85-5"})`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 407px;
`,tf=l.default.section.withConfig({componentId:"zh__sc-9c61ea85-6"})`
  display: flex;
  flex-direction: column;
  gap: 16px;

  padding: 12px;
  border: 1px solid #e3e5ed;
  border-radius: 8px;

  background: #fff;
`,tp=l.default.div.withConfig({componentId:"zh__sc-9c61ea85-7"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,th=l.default.div.withConfig({componentId:"zh__sc-9c61ea85-8"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,tx=l.default.strong.withConfig({componentId:"zh__sc-9c61ea85-9"})`
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
  color: #292b36;
`,tu=l.default.span.withConfig({componentId:"zh__sc-9c61ea85-10"})`
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  color: #636978;
`,tg=l.default.div.withConfig({componentId:"zh__sc-9c61ea85-11"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 20px;
`,tm=l.default.span.withConfig({componentId:"zh__sc-9c61ea85-12"})`
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
  color: #636978;
`,t_=l.default.strong.withConfig({componentId:"zh__sc-9c61ea85-13"})`
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
  color: #4f39f6;
`,tw=l.default.div.withConfig({componentId:"zh__sc-9c61ea85-14"})`
  height: 1px;
  background: #eaecf0;
`,ty=l.default.div.withConfig({componentId:"zh__sc-9c61ea85-15"})`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 383px;
`,tb=l.default.span.withConfig({componentId:"zh__sc-9c61ea85-16"})`
  font-size: 12px;
  font-weight: 600;
  line-height: normal;
  color: #292b36;
`,tj=l.default.div.withConfig({componentId:"zh__sc-9c61ea85-17"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 16px;
`,tz=l.default.span.withConfig({componentId:"zh__sc-9c61ea85-18"})`
  font-size: 12px;
  line-height: 14px;
  color: #636978;
`,tI=l.default.span.withConfig({componentId:"zh__sc-9c61ea85-19"})`
  font-size: 12px;
  font-weight: 700;
  line-height: 14px;
  color: #292b36;
`,tC=l.default.section.withConfig({componentId:"zh__sc-9c61ea85-20"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,tv=l.default.h3.withConfig({componentId:"zh__sc-9c61ea85-21"})`
  margin: 0;

  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
  color: #101828;
`,tS=l.default.div.withConfig({componentId:"zh__sc-9c61ea85-22"})`
  display: grid;
  grid-template-columns: 180px minmax(0, 1fr);
  gap: 8px;
`,tk=l.default.div.withConfig({componentId:"zh__sc-9c61ea85-23"})`
  width: 100%;
`,tT=l.default.input.withConfig({componentId:"zh__sc-9c61ea85-24"})`
  width: 100%;
  height: 36px;
  padding: 8px 12px;
  border: 1px solid #d0d5dd;
  border-radius: 4px;

  font-size: 14px;
  line-height: 20px;
  color: #101828;

  background: #fff;

  &::placeholder {
    color: #98a2b3;
  }

  &:focus {
    border-color: #2563eb;
    outline: none;
  }
`,t$=l.default.footer.withConfig({componentId:"zh__sc-9c61ea85-25"})`
  display: flex;
  justify-content: space-between;

  padding: 16px;
  border-top: 1px solid #e5e7eb;

  background: #fff;
`,tE=(0,l.default)(O.default.Button.Outlined).withConfig({componentId:"zh__sc-9c61ea85-26"})`
  display: inline-flex;
  gap: 4px;
  align-items: center;
  justify-content: center;

  width: 84px;
  height: 36px;
  padding: 8px 16px;
`,tD=(0,l.default)(O.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-9c61ea85-27"})`
  display: inline-flex;
  gap: 4px;
  align-items: center;
  justify-content: center;

  width: 112px;
  height: 36px;
  padding: 8px 16px;
`;var tM=e.i(38797);let tA=(0,tM.default)((0,t.jsx)("path",{d:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8zm4 18H6V4h7v5h5zM8 15.01l1.41 1.41L11 14.84V19h2v-4.16l1.59 1.59L16 15.01 12.01 11z"}),"UploadFileOutlined"),tL=(0,tM.default)((0,t.jsx)("path",{d:"M12 5.99 19.53 19H4.47zM12 2 1 21h22zm1 14h-2v2h2zm0-6h-2v4h2z"}),"WarningAmberOutlined");var tP=e.i(553),tN=e.i(9454);function tB({activeKey:e,items:n,onSelect:i}){return(0,t.jsx)(tO,{children:n.map(n=>(0,t.jsx)(tR,{type:"button",$active:n.key===e,onClick:()=>i(n.key),children:n.label},n.key))})}let tO=l.default.div.withConfig({componentId:"zh__sc-e3b84c6e-0"})`
  overflow: hidden;
  display: flex;
  align-items: stretch;

  width: fit-content;
  height: 40px;
  border: 1px solid #b1b8be;
  border-radius: 8px;

  background: #fff;
`,tR=l.default.button.withConfig({componentId:"zh__sc-e3b84c6e-1"})`
  cursor: pointer;

  flex-shrink: 0;

  height: 40px;
  padding: 0 16px;
  border-color: #b1b8be;
  border-style: solid;
  border-width: 0 1px 0 0;

  font-size: 16px;
  font-weight: 700;
  line-height: normal;
  color: ${({$active:e})=>e?"#fff":"#464c53"};

  background: ${({$active:e})=>e?"#4f39f6":"#fff"};

  &:last-child {
    border-right: none;
  }
`,{SERVICE_TYPE:tU}=tN.default.enums,tV=[{key:R.FILTER_ALL_VALUE,label:"전체"},{key:"MEAL",label:tU.MEAL.label},{key:"NUTRITION",label:tU.NUTRITION.label}];function tF({scopeKey:e,allRowsCount:n,mealCount:i,nutritionCount:l,searchKeyword:o,onSelectScope:d,onChangeSearchKeyword:a,onClickCheckPendingDepositHistory:c,onClickUploadBankDepositHistory:s}){return(0,t.jsxs)(tY,{children:[(0,t.jsx)(tH,{children:(0,t.jsx)(tB,{activeKey:e,items:tV.map(e=>{if(e.key===R.FILTER_ALL_VALUE)return{key:e.key,label:`${e.label} (${n}명)`};let t="MEAL"===e.key?i:l;return{key:e.key,label:`${e.label} (${t}명)`}}),onSelect:e=>{(e===R.FILTER_ALL_VALUE||"MEAL"===e||"NUTRITION"===e)&&d(e)}})}),(0,t.jsxs)(tK,{children:[(0,t.jsxs)(tG,{children:[(0,t.jsx)(tq,{value:o,placeholder:"수급자명 검색","aria-label":"수급자명 검색",onChange:e=>a(e.target.value)}),(0,t.jsx)(tQ,{children:(0,t.jsx)(tP.Search,{size:16,color:"#0a0a0a"})})]}),(0,t.jsxs)(tW,{type:"button",onClick:()=>{c?.()},children:[(0,t.jsx)(tL,{sx:{fontSize:18}}),"보류 입금내역 확인하기"]}),(0,t.jsxs)(tJ,{type:"button",onClick:()=>{s?.()},children:[(0,t.jsx)(tA,{sx:{fontSize:18}}),"은행 입금내역 업로드"]})]})]})}let tY=l.default.div.withConfig({componentId:"zh__sc-310f7cee-0"})`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: space-between;

  width: 100%;
`,tH=l.default.div.withConfig({componentId:"zh__sc-310f7cee-1"})`
  min-width: 0;
`,tK=l.default.div.withConfig({componentId:"zh__sc-310f7cee-2"})`
  display: flex;
  flex-shrink: 0;
  gap: 8px;
  align-items: center;
`,tG=l.default.label.withConfig({componentId:"zh__sc-310f7cee-3"})`
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
`,tq=l.default.input.withConfig({componentId:"zh__sc-310f7cee-4"})`
  width: 100%;
  min-width: 0;
  border: none;

  font-size: 16px;
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
`,tQ=l.default.span.withConfig({componentId:"zh__sc-310f7cee-5"})`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 16px;
  height: 16px;
`,tX=l.css`
  gap: 4px;
  height: 36px;
  padding: 8px 16px;
`,tW=(0,l.default)(O.default.Button.Outlined).withConfig({componentId:"zh__sc-310f7cee-6"})`
  ${tX}
`,tJ=(0,l.default)(O.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-310f7cee-7"})`
  ${tX}
`;var tZ=e.i(58463),t0=e.i(84360);let t1=(e,t)=>12*e+(t-1);function t2({targetYearMonth:e,onShiftMonth:n}){let i=(e=>{if("string"!=typeof e)return null;let t=e.match(/^(\d{4})-(\d{2})$/);if(null===t)return null;let n=Number(t[1]),i=Number(t[2]);return Number.isNaN(n)||Number.isNaN(i)||i<1||i>12?null:{year:n,month:i}})(e),l=new Date,o=i?.year??l.getFullYear(),d=i?.month??l.getMonth()+1,a=o-50,c=Array.from({length:o+50-a+1},(e,t)=>a+t);return(0,t.jsxs)(t4,{children:[(0,t.jsx)(t5,{type:"button","aria-label":"이전 달",onClick:()=>n(-1),children:(0,t.jsx)(tZ.default,{sx:{fontSize:20},style:{transform:"scale(1.5)"}})}),(0,t.jsxs)(t6,{children:[(0,t.jsx)(t7,{value:String(o),onChange:e=>{let t;0!=(t=t1(Number(e.currentTarget.value),d)-t1(o,d))&&n(t)},children:c.map(e=>(0,t.jsxs)("option",{value:e,children:[e,"년"]},e))}),(0,t.jsx)(t7,{value:String(d),onChange:e=>{let t;0!=(t=t1(o,Number(e.currentTarget.value))-t1(o,d))&&n(t)},children:Array.from({length:12},(e,t)=>t+1).map(e=>(0,t.jsxs)("option",{value:e,children:[e,"월"]},e))})]}),(0,t.jsx)(t5,{type:"button","aria-label":"다음 달",onClick:()=>n(1),children:(0,t.jsx)(t0.default,{sx:{fontSize:20},style:{transform:"scale(1.5)"}})})]})}let t4=l.default.div.withConfig({componentId:"zh__sc-3a71a832-0"})`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: center;

  height: 48px;
  padding: 0 20px;
`,t6=l.default.div.withConfig({componentId:"zh__sc-3a71a832-1"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,t7=(0,l.default)(O.default.Input.Select).withConfig({componentId:"zh__sc-3a71a832-2"})`
  width: 116px;
  height: 36px;
  font-weight: 700;
`,t5=l.default.button.withConfig({componentId:"zh__sc-3a71a832-3"})`
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;
  border: 1px solid #e5e9ef;
  border-radius: 800px;

  color: #666b80;

  background: #fff;
`,t8=(0,tM.default)((0,t.jsx)("path",{d:"M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z"}),"ArrowOutward");var t3=e.i(67096);let t9=(0,tM.default)([(0,t.jsx)("path",{d:"M19.5 3.5 18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2v14H3v3c0 1.66 1.34 3 3 3h12c1.66 0 3-1.34 3-3V2zM15 20H6c-.55 0-1-.45-1-1v-1h10zm4-1c0 .55-.45 1-1 1s-1-.45-1-1v-3H8V5h11z"},"0"),(0,t.jsx)("path",{d:"M9 7h6v2H9zm7 0h2v2h-2zm-7 3h6v2H9zm7 0h2v2h-2z"},"1")],"ReceiptLongOutlined"),ne=(0,tM.default)((0,t.jsx)("path",{d:"M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 14H5.17L4 17.17V4h16zM7 9h2v2H7zm8 0h2v2h-2zm-4 0h2v2h-2z"}),"SmsOutlined");var nt=e.i(33832),nn=e.i(94586),ni=e.i(84673);let nl=(0,tM.default)((0,t.jsx)("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z"}),"ContentCopyOutlined"),no="client-copayment-guide-message-modal";async function nd(e){if("u">typeof navigator&&void 0!==navigator.clipboard)return void await navigator.clipboard.writeText(e);throw Error("Clipboard API is not available")}function na({title:e,guideHeading:n,message:i,onClose:l}){return(0,t.jsx)(B.default,{children:(0,t.jsxs)(nc,{id:no,children:[(0,t.jsxs)(N.Header,{children:[(0,t.jsx)(N.HeaderLeft,{children:(0,t.jsx)(N.HeaderTitle,{children:e})}),(0,t.jsx)(N.HeaderRight,{})]}),(0,t.jsxs)(ns,{children:[(0,t.jsxs)(nr,{children:[(0,t.jsx)(nf,{children:n}),(0,t.jsx)(np,{children:i})]}),(0,t.jsxs)(nh,{type:"button",onClick:()=>{nd(i).then(()=>{s.default.ui.layout.toast.success("안내 문구를 복사했습니다.",void 0,document.getElementById(no))}).catch(()=>{s.default.ui.layout.toast.error("문구 복사에 실패했습니다.",void 0,document.getElementById(no))})},children:[(0,t.jsx)(nl,{sx:{fontSize:20}}),"위 텍스트 복사하기"]})]}),(0,t.jsx)(N.Footer,{children:(0,t.jsxs)(nx,{children:[(0,t.jsxs)(nu,{type:"button",onClick:l,children:[(0,t.jsx)(ni.default,{sx:{fontSize:20}}),"닫기"]}),(0,t.jsxs)(ng,{type:"button",onClick:l,children:[(0,t.jsx)(A.default,{sx:{fontSize:20}}),"확인하기"]})]})})]})})}let nc=(0,l.default)(N.Container).withConfig({componentId:"zh__sc-bf23c8db-0"})`
  position: relative;
  width: 455px;
`,ns=(0,l.default)(N.Body).withConfig({componentId:"zh__sc-bf23c8db-1"})`
  gap: 8px;
  padding: 24px;
`,nr=l.default.div.withConfig({componentId:"zh__sc-bf23c8db-2"})`
  display: flex;
  flex-direction: column;
  gap: 24px;

  width: 100%;
  padding: 12px;
  border: 1px solid #e3e5ed;
  border-radius: 8px;

  background: #fff;
`,nf=l.default.h3.withConfig({componentId:"zh__sc-bf23c8db-3"})`
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  color: #292b36;
`,np=l.default.p.withConfig({componentId:"zh__sc-bf23c8db-4"})`
  font-size: 14px;
  line-height: 1.6;
  color: #636978;
  white-space: pre-wrap;
`,nh=(0,l.default)(O.default.Button.Outlined).withConfig({componentId:"zh__sc-bf23c8db-5"})`
  align-self: flex-end;
  ${N.btnStyle}
`,nx=l.default.div.withConfig({componentId:"zh__sc-bf23c8db-6"})`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
`,nu=(0,l.default)(O.default.Button.Outlined).withConfig({componentId:"zh__sc-bf23c8db-7"})`
  ${N.btnStyle}
`,ng=(0,l.default)(O.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-bf23c8db-8"})`
  ${N.btnStyle}
`,{SERVICE_TYPE:nm,BANK_NAME:n_}=tN.default.enums,nw=e=>`${e.toLocaleString("ko-KR")}원`,ny=e=>`${e>=0?"+":"-"}${nw(Math.abs(e))}`;function nb({isLoading:e,targetYearMonth:n,rows:l,bankAccountList:o,sortKey:d,nameSortDisplayOrder:a,copaymentDetailSortDisplayOrder:c,onSort:s,onClickBillingAction:r,onClickReceiptPrint:f}){let p,u,g,m,_,w,y,b=l.length>0,[j,z]=(0,i.useState)(null);return(0,t.jsxs)(nj,{children:[(0,t.jsxs)(h,{children:[(0,t.jsxs)("colgroup",{children:[(0,t.jsx)("col",{style:{width:"200px"}}),(0,t.jsx)("col",{style:{width:"200px"}}),(0,t.jsx)("col",{style:{width:"90px"}}),(0,t.jsx)("col",{style:{width:"100px"}}),(0,t.jsx)("col",{style:{width:"110px"}}),(0,t.jsx)("col",{style:{width:"351px"}}),(0,t.jsx)("col",{style:{width:"140px"}}),(0,t.jsx)("col",{style:{width:"180px"}}),(0,t.jsx)("col",{style:{width:"180px"}})]}),(0,t.jsxs)("thead",{children:[(0,t.jsxs)(nz,{children:[(0,t.jsx)(nI,{colSpan:4}),(0,t.jsx)(nC,{colSpan:2,children:(0,t.jsxs)(nv,{children:[(0,t.jsx)(nS,{children:"제공 현황 연동 정보"}),(0,t.jsxs)(nk,{children:[(0,t.jsx)(nT,{href:null===n?"/client/service-provision":{pathname:"/client/service-provision",query:{targetYearMonth:n}},children:"[서비스 제공 현황]에서 확인하기"}),(0,t.jsx)(t8,{sx:{fontSize:12}})]})]})}),(0,t.jsx)(nI,{colSpan:1}),(0,t.jsx)(nI,{colSpan:2})]}),(0,t.jsxs)(n$,{children:[(0,t.jsx)(nE,{children:(0,t.jsxs)(nD,{type:"button",onClick:()=>s("name"),children:["이름 및 연락처",(0,t.jsx)(nM,{$active:"name"===d,children:"desc"===a?(0,t.jsx)(t3.default,{sx:{fontSize:14,color:"name"===d?"#131416":"#9ca3af"}}):(0,t.jsx)(nt.default,{sx:{fontSize:14,color:"name"===d?"#131416":"#9ca3af"}})})]})}),(0,t.jsx)(nE,{children:"보호자 (대리인)"}),(0,t.jsx)(nE,{children:"등급"}),(0,t.jsx)(nE,{children:"서비스"}),(0,t.jsx)(nE,{children:"제공 횟수"}),(0,t.jsx)(nE,{children:(0,t.jsxs)(nD,{type:"button",onClick:()=>s("copaymentDetail"),children:["당월 본인부담금 · 정산 상세 내역",(0,t.jsx)(nM,{$active:"copaymentDetail"===d,children:"desc"===c?(0,t.jsx)(t3.default,{sx:{fontSize:14,color:"copaymentDetail"===d?"#131416":"#9ca3af"}}):(0,t.jsx)(nt.default,{sx:{fontSize:14,color:"copaymentDetail"===d?"#131416":"#9ca3af"}})})]})}),(0,t.jsx)(nE,{children:"납부 상태"}),(0,t.jsx)(nE,{children:"안내 문자"}),(0,t.jsx)(nE,{children:"영수증 출력"})]})]}),(0,t.jsx)("tbody",{children:b?l.map(e=>{let n,i=e.runningBalance,l=i>0?{type:"UNPAID",label:"미결제"}:i<0?{type:"OVERPAID",label:"초과(선납)"}:{type:"PAID",label:"납부 완료"},o=(n=[],e.previousBalance>0&&n.push(`미납 이월 ${ny(e.previousBalance)}`),e.previousBalance<0&&n.push(`이전 선납 ${ny(e.previousBalance)}`),e.expectedCopaymentThisMonth>0&&n.push(`당월 청구 ${nw(e.expectedCopaymentThisMonth)}`),e.depositedThisMonth>0&&n.push(`기납부 ${ny(-e.depositedThisMonth)}`),i<0&&n.push(`초과(선납) ${ny(Math.abs(i))}`),n),d=e.depositedThisMonth>0&&i<=0,a=nm[e.serviceType].label;return(0,t.jsxs)(nL,{children:[(0,t.jsx)(nP,{children:(0,t.jsxs)(nB,{children:[(0,t.jsx)(nO,{children:e.clientName}),(0,t.jsx)(nR,{children:e.clientPhoneNumber||"-"})]})}),(0,t.jsx)(nP,{children:(0,t.jsx)(nN,{$bold:!0,children:e.guardianName||"-"})}),(0,t.jsx)(nP,{children:(0,t.jsx)(nN,{children:""!==e.contractGrade.trim()?`${e.contractGrade}등급`:"-"})}),(0,t.jsx)(nP,{children:(0,t.jsx)(nN,{children:a})}),(0,t.jsx)(nP,{children:(0,t.jsxs)(nN,{children:[e.providedCount.toLocaleString("ko-KR"),"회"]})}),(0,t.jsx)(nP,{children:(0,t.jsxs)(nU,{children:[(0,t.jsxs)(nV,{children:[(0,t.jsx)(nF,{$strike:i<0,children:nw(i<0?0:i)}),(0,t.jsx)(nY,{type:"button",onClick:()=>r(e),children:"내역 입력하기"})]}),(0,t.jsx)(nH,{children:o.length>0?o.join(" • "):"-"})]})}),(0,t.jsx)(nK,{children:(0,t.jsx)(nq,{$type:l.type,children:l.label})}),(0,t.jsx)(nP,{children:(0,t.jsxs)(nG,{type:"button",disabled:"UNPAID"!==l.type,onClick:()=>{"UNPAID"===l.type&&z(e)},children:[(0,t.jsx)(ne,{sx:{fontSize:18}}),"내용 확인하기"]})}),(0,t.jsx)(nP,{children:(0,t.jsxs)(nQ,{type:"button",disabled:!1===d,onClick:()=>{!0===d&&f(e)},title:d?void 0:"당월 납부 내역이 있고 미결제 금액이 0원 이하일 때만 영수증을 출력할 수 있습니다.",children:[(0,t.jsx)(t9,{sx:{fontSize:24}}),"영수증 출력"]})})]},e.contractId)}):(0,t.jsx)(x,{children:(0,t.jsx)(nA,{colSpan:9,children:e?"불러오는 중...":"데이터 없음"})})})]}),null!==j&&(0,t.jsx)(na,{title:"안내 문자 확인하기",guideHeading:`[${nm[j.serviceType].label} - 당월 본인부담금 안내]`,message:(p=(e=>{if("string"!=typeof e)return"당월";let t=e.match(/^\d{4}-(\d{2})$/);if(null===t)return"당월";let n=Number(t[1]);return Number.isNaN(n)||n<1||n>12?"당월":`${n}월`})(n),g=null!==(u=o.find(e=>e.useFlag&&e.serviceType===j.serviceType)??o.find(e=>e.useFlag&&null===e.serviceType)??o.find(e=>e.serviceType===j.serviceType)??o.find(e=>null===e.serviceType)??null)&&"string"==typeof u.accountHolder&&u.accountHolder.trim().length>0?u.accountHolder.trim():"-",m=null===u?"• 계좌: 기관 계좌 정보가 없습니다.":`• 계좌: ${n_[u.bankName].label} ${u.accountNumber} ${g}`,_=j.runningBalance,w=j.previousBalance>0?`미납 이월 금액 = ${nw(j.previousBalance)}`:j.previousBalance<0?`이전 선납 금액 = ${nw(Math.abs(j.previousBalance))}`:null,y=_>0?`현재 미결제 금액 = ${nw(_)}`:_<0?`초과(선납) 금액 = ${nw(Math.abs(_))}`:"현재 미결제 금액 = 0원",[w,`${p} 당월 본인부담금 = ${nw(j.expectedCopaymentThisMonth)} (${j.providedCount.toLocaleString("ko-KR")}회)`,`기납부 금액 = ${nw(j.depositedThisMonth)}`,y,"",m,"",`위 금액은 ${p} 안으로 입금 부탁드리겠습니다.`,"감사합니다 🙂"].filter(e=>null!==e).join("\n")),onClose:()=>{z(null)}})]})}let nj=l.default.div.withConfig({componentId:"zh__sc-d90fe7a2-0"})`
  overflow: hidden;
  width: 100%;
  border: 1px solid #e5e7eb;
  border-radius: 12px;

  tbody tr:last-child {
    border-bottom: 0;
  }
`,nz=l.default.tr.withConfig({componentId:"zh__sc-d90fe7a2-1"})`
  height: 48px;
  background: #f8fafc;
`,nI=l.default.th.withConfig({componentId:"zh__sc-d90fe7a2-2"})`
  background: #f8fafc;
`,nC=l.default.th.withConfig({componentId:"zh__sc-d90fe7a2-3"})`
  padding: 0 16px;
  border-top: 0;
  border-right: 1px solid #e5e7eb;
  border-bottom: 1px solid #e5e7eb;
  border-left: 1px solid #e5e7eb;

  text-align: center;
  vertical-align: middle;

  background: #fff;
`,nv=l.default.div.withConfig({componentId:"zh__sc-d90fe7a2-4"})`
  display: inline-flex;
  gap: 6px;
  align-items: center;
`,nS=l.default.span.withConfig({componentId:"zh__sc-d90fe7a2-5"})`
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
  color: #131416;
`,nk=l.default.span.withConfig({componentId:"zh__sc-d90fe7a2-6"})`
  display: inline-flex;
  gap: 2px;
  align-items: center;

  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: #4f39f6;
`,nT=(0,l.default)(nn.default).withConfig({componentId:"zh__sc-d90fe7a2-7"})`
  color: #4f39f6;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`,n$=l.default.tr.withConfig({componentId:"zh__sc-d90fe7a2-8"})`
  height: 48px;
  border-bottom: 1px solid #e5e7eb;
  background: #f9fafb;
`,nE=l.default.th.withConfig({componentId:"zh__sc-d90fe7a2-9"})`
  padding: 0 16px;

  font-size: 16px;
  font-weight: 700;
  line-height: normal;
  color: #1c1d22;
  text-align: center;
  vertical-align: middle;

  &:nth-child(5) {
    border-left: 1px solid #e5e7eb;
  }

  &:nth-child(6) {
    border-right: 1px solid #e5e7eb;
    border-left: 1px solid #e5e7eb;
  }
`,nD=l.default.button.withConfig({componentId:"zh__sc-d90fe7a2-10"})`
  cursor: pointer;

  display: inline-flex;
  gap: 4px;
  align-items: center;
  justify-content: center;

  border: 0;

  font: inherit;
  color: inherit;

  background: transparent;
`,nM=l.default.span.withConfig({componentId:"zh__sc-d90fe7a2-11"})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({$active:e})=>e?"#1c1d22":"#98a2b3"};
`,nA=(0,l.default)(u).withConfig({componentId:"zh__sc-d90fe7a2-12"})`
  height: 120px;
  color: #6b7280;
`,nL=(0,l.default)(x).withConfig({componentId:"zh__sc-d90fe7a2-13"})`
  height: 92px;
`,nP=(0,l.default)(u).withConfig({componentId:"zh__sc-d90fe7a2-14"})`
  font-size: 16px;
  line-height: 16px;
  color: #464c53;
`,nN=l.default.span.withConfig({componentId:"zh__sc-d90fe7a2-15"})`
  font-size: 16px;
  font-weight: ${({$bold:e})=>!0===e?700:400};
  line-height: 16px;
  color: #464c53;
`,nB=l.default.div.withConfig({componentId:"zh__sc-d90fe7a2-16"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
`,nO=l.default.span.withConfig({componentId:"zh__sc-d90fe7a2-17"})`
  font-size: 16px;
  font-weight: 700;
  line-height: 16px;
  color: #464c53;
`,nR=l.default.span.withConfig({componentId:"zh__sc-d90fe7a2-18"})`
  font-size: 16px;
  line-height: 16px;
  color: #464c53;
`,nU=l.default.div.withConfig({componentId:"zh__sc-d90fe7a2-19"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: stretch;

  width: 100%;
`,nV=l.default.div.withConfig({componentId:"zh__sc-d90fe7a2-20"})`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`,nF=l.default.strong.withConfig({componentId:"zh__sc-d90fe7a2-21"})`
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  color: #464c53;
  text-decoration: ${({$strike:e})=>e?"line-through":"none"};
`,nY=(0,l.default)(O.default.Button.Outlined).withConfig({componentId:"zh__sc-d90fe7a2-22"})`
  padding: 4px 8px;
  font-size: 12px;
`,nH=l.default.span.withConfig({componentId:"zh__sc-d90fe7a2-23"})`
  font-size: 16px;
  line-height: 20px;
  color: #464c53;
`,nK=(0,l.default)(nP).withConfig({componentId:"zh__sc-d90fe7a2-24"})`
  text-align: center;
`,nG=(0,l.default)(O.default.Button.Outlined).withConfig({componentId:"zh__sc-d90fe7a2-25"})`
  display: inline-flex;
  gap: 4px;
  height: 36px;
  padding: 8px 16px;
`,nq=l.default.span.withConfig({componentId:"zh__sc-d90fe7a2-26"})`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 82px;
  height: 28px;
  padding: 0;
  border-radius: 14px;

  font-size: 14px;
  font-weight: 700;
  line-height: 14px;
  color: ${({$type:e})=>"UNPAID"===e?"#c22424":"OVERPAID"===e?"#475467":"#14783D"};

  background: ${({$type:e})=>"UNPAID"===e?"#ffeded":"OVERPAID"===e?"#F8F7F7":"#E8F7ED"};
`,nQ=(0,l.default)(O.default.Button.Outlined).withConfig({componentId:"zh__sc-d90fe7a2-27"})`
  display: inline-flex;
  gap: 4px;
  height: 36px;
  padding: 8px 16px;
`;function nX({unpaidCountText:e,remainingAmountText:n,isExpanded:i}){return(0,t.jsxs)(nW,{children:[(0,t.jsxs)(nJ,{$expanded:i,children:[(0,t.jsx)(nZ,{children:"미납부 인원"}),(0,t.jsx)(n0,{children:e})]}),(0,t.jsxs)(nJ,{$expanded:i,children:[(0,t.jsx)(nZ,{children:"본인부담금 잔여 총액"}),(0,t.jsx)(n0,{children:n})]})]})}let nW=l.default.div.withConfig({componentId:"zh__sc-99a72af6-0"})`
  display: grid;
  grid-template-columns: 473px 473px;
  gap: 12px;
  width: 958px;
`,nJ=l.default.article.withConfig({componentId:"zh__sc-99a72af6-1"})`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;

  width: 473px;
  height: ${({$expanded:e})=>e?"128px":"56px"};
  border: 1px solid #e5e7eb;
  border-radius: 8px;

  background: #ffeeed;
`,nZ=l.default.span.withConfig({componentId:"zh__sc-99a72af6-2"})`
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  color: #475467;
`,n0=l.default.strong.withConfig({componentId:"zh__sc-99a72af6-3"})`
  font-size: 22px;
  font-weight: 700;
  line-height: normal;
  color: #d92d20;
`;var n1=e.i(17510),n2=e.i(20276),n4=e.i(9808);let n6=e=>"number"!=typeof e?"-":e.toLocaleString("ko-KR"),n7=e=>"string"!=typeof e||""===e.trim()?"-":e.slice(0,10).replace(/-/g,"/"),n5=e=>{let t=e.matchText?.trim()??"";return 0===t.length?"입금자명 -":`입금자명 ${t}`},n8=e=>e.status===n4.default.AMBIGUOUS?"매칭 후보 다수":"자동 매칭 실패";function n3({isOpen:e,onClose:n,issueList:l,isLoading:o,errorMessage:d,onClickDeleteIssue:a,onClickMatchIssue:c}){let[r,f]=(0,i.useState)(null),p=document.getElementById("client-payment-drawer-host"),h=s.default.ui.layout.appContainer??document.body;if(null===p||!e)return null;let x=()=>{f(null)},u=null!==r;return(0,t.jsxs)(t.Fragment,{children:[(0,n2.createPortal)((0,t.jsx)(n9,{children:(0,t.jsxs)(ie,{id:"client-payment-drawer-panel",onClick:e=>e.stopPropagation(),children:[(0,t.jsxs)(it,{children:[(0,t.jsx)(ii,{}),(0,t.jsx)(il,{children:`보류 입금내역 확인하기 (${l.length}건)`}),(0,t.jsx)(io,{type:"button","aria-label":"드로어 닫기",onClick:n,children:(0,t.jsx)(n1.default,{sx:{fontSize:20}})})]}),(0,t.jsxs)(id,{children:[o&&(0,t.jsx)(ia,{children:"보류 입금내역을 불러오는 중입니다."}),!0!==o&&null!==d&&(0,t.jsx)(ia,{$error:!0,children:d}),!0!==o&&null===d&&0===l.length&&(0,t.jsx)(ia,{children:"보류 입금내역이 없습니다."}),!0!==o&&null===d&&l.length>0&&(0,t.jsx)(ic,{children:l.map(e=>(0,t.jsxs)(is,{children:[(0,t.jsxs)(ir,{children:[(0,t.jsx)(ip,{children:n5(e)}),(0,t.jsx)(ih,{children:"보류"})]}),(0,t.jsxs)(ix,{children:[(0,t.jsxs)(iu,{children:[(0,t.jsx)(ig,{children:"입금금액(원)"}),(0,t.jsx)(im,{children:n6(e.amount)})]}),(0,t.jsxs)(iu,{children:[(0,t.jsx)(ig,{children:"거래 일자"}),(0,t.jsx)(im,{children:n7(e.depositDate)})]}),(0,t.jsxs)(iu,{children:[(0,t.jsx)(ig,{children:"거래 시간"}),(0,t.jsx)(im,{children:"-"})]}),(0,t.jsxs)(iu,{children:[(0,t.jsx)(ig,{children:"거래 내용"}),(0,t.jsx)(im,{children:"-"})]})]}),(0,t.jsxs)(i_,{children:[(0,t.jsx)(iw,{children:n8(e)}),(0,t.jsx)(iy,{children:e.reason})]}),(0,t.jsxs)(ib,{children:[(0,t.jsx)(iz,{type:"button",onClick:()=>{f(e)},children:"삭제하기"}),(0,t.jsx)(iI,{type:"button",onClick:()=>{c?.(e.id)},children:"이용자 매칭하기"})]})]},e.id))})]})]})}),p),u&&null!==r&&(0,n2.createPortal)((0,t.jsx)(iC,{onClick:x,children:(0,t.jsxs)(iv,{onClick:e=>e.stopPropagation(),children:[(0,t.jsxs)(iS,{children:[(0,t.jsx)(ik,{children:"입금 내역 삭제하기"}),(0,t.jsxs)(iT,{type:"button",onClick:x,children:[(0,t.jsx)(n1.default,{sx:{fontSize:20}}),"닫기"]})]}),(0,t.jsxs)(i$,{children:[(0,t.jsx)(iE,{children:"아래 입금 내역이 삭제되며, 해당 내역이 포함된 엑셀 파일을 업로드시 다시 확인할 수 있습니다. 내역을 삭제하시겠습니까?"}),(0,t.jsxs)(iD,{children:[(0,t.jsxs)(iM,{children:[(0,t.jsx)(iA,{children:n5(r)}),(0,t.jsx)(iL,{$status:r.status,"aria-label":n8(r),children:n8(r)})]}),(0,t.jsxs)(iP,{children:[(0,t.jsxs)(iu,{children:[(0,t.jsx)(ig,{children:"입금금액(원)"}),(0,t.jsx)(im,{children:n6(r.amount)})]}),(0,t.jsxs)(iu,{children:[(0,t.jsx)(ig,{children:"거래 일자"}),(0,t.jsx)(im,{children:n7(r.depositDate)})]}),(0,t.jsxs)(iu,{children:[(0,t.jsx)(ig,{children:"거래 시간"}),(0,t.jsx)(im,{children:"-"})]}),(0,t.jsxs)(iu,{children:[(0,t.jsx)(ig,{children:"거래 내용"}),(0,t.jsx)(im,{children:"-"})]})]})]})]}),(0,t.jsxs)(iN,{children:[(0,t.jsx)(iB,{type:"button",onClick:x,children:"취소하기"}),(0,t.jsx)(iO,{type:"button",onClick:()=>{null!==r&&(a?.(r.id),f(null))},children:"삭제하기"})]})]})}),h)]})}let n9=l.default.div.withConfig({componentId:"zh__sc-5da942e2-0"})`
  pointer-events: auto;

  position: absolute;
  z-index: 60;
  inset: 0;

  display: flex;
  justify-content: flex-end;
`,ie=l.default.aside.withConfig({componentId:"zh__sc-5da942e2-1"})`
  position: relative;

  display: flex;
  flex-direction: column;

  width: 528px;
  max-width: min(528px, 100%);
  height: 100%;

  background: #fff;
  box-shadow: -2px 16px 10px rgb(0 0 0 / 36%);
`,it=l.default.header.withConfig({componentId:"zh__sc-5da942e2-2"})`
  display: grid;
  grid-template-columns: 56px 1fr 56px;
  align-items: center;

  height: 68px;
  padding: 0 16px;
  border-bottom: 1px solid #e5e7eb;
`,ii=l.default.div.withConfig({componentId:"zh__sc-5da942e2-3"})`
  width: 56px;
  height: 36px;
`,il=l.default.h4.withConfig({componentId:"zh__sc-5da942e2-4"})`
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
  color: #0a0a0a;
  text-align: center;
`,io=(0,l.default)(O.default.Button.Outlined).withConfig({componentId:"zh__sc-5da942e2-5"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 56px;
  height: 36px;
  padding: 8px;
`,id=l.default.div.withConfig({componentId:"zh__sc-5da942e2-6"})`
  overflow: auto;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;

  padding: 16px;
`,ia=l.default.p.withConfig({componentId:"zh__sc-5da942e2-7"})`
  width: 100%;
  padding: 20px 16px;
  border: 1px solid ${({$error:e})=>!0===e?"#f5c2c2":"#d1d4de"};
  border-radius: 8px;

  font-size: 14px;
  line-height: 1.5;
  color: ${({$error:e})=>!0===e?"#b01818":"#4b5563"};
  text-align: center;

  background: #fff;
`,ic=l.default.div.withConfig({componentId:"zh__sc-5da942e2-8"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: stretch;

  width: 100%;
`,is=l.default.article.withConfig({componentId:"zh__sc-5da942e2-9"})`
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: stretch;

  width: 100%;
  padding: 16px;
  border: 1px solid #d1d4de;
  border-radius: 10px;

  background: #fff;
`,ir=l.default.div.withConfig({componentId:"zh__sc-5da942e2-10"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,ip=l.default.h5.withConfig({componentId:"zh__sc-5da942e2-11"})`
  font-size: 16px;
  font-weight: 600;
  line-height: 21px;
  color: #2e303b;
`,ih=l.default.span.withConfig({componentId:"zh__sc-5da942e2-12"})`
  padding: 5px 10px;
  border-radius: 999px;

  font-size: 12px;
  font-weight: 600;
  line-height: 17px;
  color: #8c610a;

  background: #f5f0e0;
`,ix=l.default.div.withConfig({componentId:"zh__sc-5da942e2-13"})`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 20px;
  width: 100%;

  @media (width <= 640px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px;
  }
`,iu=l.default.div.withConfig({componentId:"zh__sc-5da942e2-14"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
`,ig=l.default.p.withConfig({componentId:"zh__sc-5da942e2-15"})`
  font-size: 12px;
  font-weight: 400;
  line-height: 17px;
  color: #737885;
`,im=l.default.p.withConfig({componentId:"zh__sc-5da942e2-16"})`
  font-size: 14px;
  font-weight: 600;
  line-height: 19px;
  color: #333640;
`,i_=l.default.div.withConfig({componentId:"zh__sc-5da942e2-17"})`
  display: flex;
  flex-direction: column;
  gap: 3px;
  align-items: flex-start;

  width: 100%;
  min-height: 62px;
  padding: 10px 12px;
  border-radius: 6px;

  background: #fff5f5;
`,iw=l.default.p.withConfig({componentId:"zh__sc-5da942e2-18"})`
  font-size: 13px;
  font-weight: 600;
  line-height: 18px;
  color: #d11f1f;
`,iy=l.default.p.withConfig({componentId:"zh__sc-5da942e2-19"})`
  font-size: 12px;
  font-weight: 400;
  line-height: 17px;
  color: #7a5757;
`,ib=l.default.div.withConfig({componentId:"zh__sc-5da942e2-20"})`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: flex-end;
`,ij=`
  height: 36px;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 16px;
  line-height: 20px;
`,iz=(0,l.default)(O.default.Button.Outlined).withConfig({componentId:"zh__sc-5da942e2-21"})`
  ${ij}
`,iI=(0,l.default)(O.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-5da942e2-22"})`
  ${ij}
`,iC=l.default.div.withConfig({componentId:"zh__sc-5da942e2-23"})`
  position: fixed;
  z-index: 80;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgb(0 0 0 / 36%);
`,iv=l.default.section.withConfig({componentId:"zh__sc-5da942e2-24"})`
  overflow: hidden;
  display: flex;
  flex-direction: column;

  width: 520px;
  max-width: calc(100vw - 32px);
  border-radius: 8px;

  background: #fff;
`,iS=l.default.header.withConfig({componentId:"zh__sc-5da942e2-25"})`
  display: flex;
  align-items: center;
  justify-content: space-between;

  min-height: 69px;
  padding: 16px;
  border-bottom: 1px solid #e5e7eb;
`,ik=l.default.h3.withConfig({componentId:"zh__sc-5da942e2-26"})`
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  color: #101828;
`,iT=(0,l.default)(O.default.Button.Outlined).withConfig({componentId:"zh__sc-5da942e2-27"})`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;

  height: 36px;
  padding: 8px 16px;

  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
`,i$=l.default.div.withConfig({componentId:"zh__sc-5da942e2-28"})`
  display: flex;
  flex-direction: column;
  gap: 16px;

  padding: 32px 24px;

  background: #f9fafb;
`,iE=l.default.p.withConfig({componentId:"zh__sc-5da942e2-29"})`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: #0a0a0a;
`,iD=l.default.div.withConfig({componentId:"zh__sc-5da942e2-30"})`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: stretch;

  padding: 16px;
  border-radius: 8px;

  background: #fff;
`,iM=l.default.div.withConfig({componentId:"zh__sc-5da942e2-31"})`
  display: flex;
  gap: 8px;
  align-items: center;
  min-height: 28px;
`,iA=l.default.h4.withConfig({componentId:"zh__sc-5da942e2-32"})`
  font-size: 16px;
  font-weight: 600;
  line-height: 21px;
  color: #2e303b;
`,iL=l.default.span.withConfig({componentId:"zh__sc-5da942e2-33"})`
  padding: 6px 10px;
  border-radius: 99px;

  font-size: 13px;
  font-weight: 600;
  line-height: 14px;
  color: ${({$status:e})=>e===n4.default.AMBIGUOUS?"#8c610a":"#d11f1f"};

  background: ${({$status:e})=>e===n4.default.AMBIGUOUS?"#f5f0e0":"#ffe8e8"};
`,iP=l.default.div.withConfig({componentId:"zh__sc-5da942e2-34"})`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 90px));
  gap: 20px;
  align-items: start;

  width: 100%;

  @media (width <= 640px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px;
  }
`,iN=l.default.footer.withConfig({componentId:"zh__sc-5da942e2-35"})`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: flex-end;

  padding: 16px;
  border-top: 1px solid #e5e7eb;

  background: #fff;
`,iB=(0,l.default)(O.default.Button.Outlined).withConfig({componentId:"zh__sc-5da942e2-36"})`
  height: 36px;
  padding: 8px 16px;

  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
`,iO=(0,l.default)(O.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-5da942e2-37"})`
  height: 36px;
  padding: 8px 16px;

  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
`;function iR(e){return"string"!=typeof e||""===e.trim()?"-":e.slice(0,10).replace(/-/g,"/")}function iU({issue:e,contractOptions:n,onClose:l,onSubmit:o}){var d;let[a,c]=(0,i.useState)(R.SELECT_EMPTY_VALUE),[s,r]=(0,i.useState)(!1),f=(0,i.useMemo)(()=>{let t=Array.from(new Map(n.map(e=>[e.contractId,{contractId:e.contractId,clientName:e.clientName.trim(),birthDate:e.birthDate,serviceType:e.serviceType,grade:e.grade,contractStartDate:e.contractStartDate,contractEndDate:e.contractEndDate}])).values()).filter(e=>e.clientName.length>0);if(!0!==Array.isArray(e.candidates))return t;let i=Array.from(new Map(e.candidates.map(e=>{let n=t.find(t=>t.contractId===e.contractId);return[e.contractId,n??{contractId:e.contractId,clientName:e.clientName.trim(),birthDate:null,serviceType:null,grade:null,contractStartDate:null,contractEndDate:null}]})).values()).filter(e=>e.clientName.length>0),l=new Set(i.map(e=>e.contractId));return[...i,...t.filter(e=>!l.has(e.contractId))]},[n,e.candidates]),p=a!==R.SELECT_EMPTY_VALUE&&"string"==typeof e.depositDate&&e.depositDate.trim().length>0&&"number"==typeof e.amount&&e.amount>=1&&!0!==s,h=async()=>{if(!0!==p||"string"!=typeof e.depositDate||"number"!=typeof e.amount)return;let t=e.depositDate.slice(0,10),n=e.amount;r(!0);try{let i=await Promise.resolve(o({issueId:e.id,contractId:a,depositDate:t,amount:n}));if(!1===i)return;l()}finally{r(!1)}};return(0,t.jsx)(B.default,{children:(0,t.jsxs)(iV,{children:[(0,t.jsxs)(N.Header,{children:[(0,t.jsx)(N.HeaderLeft,{children:(0,t.jsx)(N.HeaderTitle,{children:"이용자 매칭하기"})}),(0,t.jsx)(N.HeaderRight,{children:(0,t.jsxs)(iF,{type:"button",onClick:l,children:[(0,t.jsx)(P.X,{size:20}),"닫기"]})})]}),(0,t.jsxs)(iY,{children:[(0,t.jsx)(iH,{children:"아래 입금 내역과 매칭될 이용자를 선택해주세요."}),(0,t.jsxs)(iK,{children:[(0,t.jsxs)(iG,{children:[(0,t.jsx)(iq,{children:`입금자명 ${function(e){if("string"!=typeof e)return"-";let t=e.trim();return 0===t.length?"-":t}(e.matchText)}`}),(0,t.jsx)(iQ,{children:"AMBIGUOUS"===e.status?"매칭 후보 다수":"자동 매칭 실패"})]}),(0,t.jsxs)(iX,{children:[(0,t.jsxs)(iW,{children:[(0,t.jsx)(iJ,{children:"입금금액(원)"}),(0,t.jsx)(iZ,{children:"number"!=typeof(d=e.amount)?"-":d.toLocaleString("ko-KR")})]}),(0,t.jsxs)(iW,{children:[(0,t.jsx)(iJ,{children:"거래 일자"}),(0,t.jsx)(iZ,{children:iR(e.depositDate)})]}),(0,t.jsxs)(iW,{children:[(0,t.jsx)(iJ,{children:"거래 시간"}),(0,t.jsx)(iZ,{children:"-"})]}),(0,t.jsxs)(iW,{children:[(0,t.jsx)(iJ,{children:"거래 내용"}),(0,t.jsx)(iZ,{children:"-"})]})]})]}),(0,t.jsxs)(i0,{children:[(0,t.jsx)(i1,{children:"매칭될 이용자 선택"}),(0,t.jsxs)(i2,{$isEmptySelected:a===R.SELECT_EMPTY_VALUE,value:a,onChange:e=>{c(e.target.value)},children:[(0,t.jsx)("option",{value:R.SELECT_EMPTY_VALUE,disabled:!0,children:"이용자를 선택해주세요."}),f.map(e=>{var n,i,l,o;return(0,t.jsx)("option",{value:e.contractId,children:`${e.clientName} | ${iR(e.birthDate)} | ${"MEAL"===(n=e.serviceType)?"식사":"NUTRITION"===n?"영양":"DISABILITY_ACTIVITY_SUPPORT"===n?"장애인 활동지원":"-"} | ${"string"!=typeof(i=e.grade)||""===i.trim()?"-":i.includes("등급")?i:`${i}등급`} | ${(l=e.contractStartDate,o=e.contractEndDate,`${iR(l)} ~ ${iR(o)}`)}`},e.contractId)})]})]})]}),(0,t.jsxs)(N.Footer,{children:[(0,t.jsx)(i4,{type:"button",onClick:l,children:"취소하기"}),(0,t.jsxs)(i6,{type:"button",disabled:!0!==p,onClick:()=>void h(),children:[(0,t.jsx)(A.default,{sx:{fontSize:16}}),"저장하기"]})]})]})})}let iV=(0,l.default)(N.Container).withConfig({componentId:"zh__sc-d9ec1268-0"})`
  display: flex;
  flex-direction: column;
  align-items: stretch;

  width: 551px;
  max-width: calc(100vw - 32px);
  border-radius: 8px;
`,iF=(0,l.default)(O.default.Button.Outlined).withConfig({componentId:"zh__sc-d9ec1268-1"})`
  ${N.btnStyle}
  display: flex;
  gap: 4px;
  align-items: center;
`,iY=l.default.div.withConfig({componentId:"zh__sc-d9ec1268-2"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: stretch;

  padding: 32px 24px;

  background: #f9fafb;
`,iH=l.default.p.withConfig({componentId:"zh__sc-d9ec1268-3"})`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: #0a0a0a;
`,iK=l.default.div.withConfig({componentId:"zh__sc-d9ec1268-4"})`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;

  width: 100%;
  padding: 16px;
  border-radius: 8px;

  background: #fff;
`,iG=l.default.div.withConfig({componentId:"zh__sc-d9ec1268-5"})`
  display: flex;
  gap: 8px;
  align-items: center;
  min-height: 28px;
`,iq=l.default.p.withConfig({componentId:"zh__sc-d9ec1268-6"})`
  font-size: 16px;
  font-weight: 600;
  line-height: 21px;
  color: #2e303b;
`,iQ=l.default.span.withConfig({componentId:"zh__sc-d9ec1268-7"})`
  padding: 6px 10px;
  border-radius: 99px;

  font-size: 13px;
  font-weight: 600;
  line-height: 14px;
  color: #d11f1f;

  background: #ffe8e8;
`,iX=l.default.div.withConfig({componentId:"zh__sc-d9ec1268-8"})`
  display: flex;
  gap: 20px;
  align-items: flex-start;
  width: 440px;
`,iW=l.default.div.withConfig({componentId:"zh__sc-d9ec1268-9"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;

  width: 90px;
`,iJ=l.default.p.withConfig({componentId:"zh__sc-d9ec1268-10"})`
  font-size: 12px;
  font-weight: 400;
  line-height: 17px;
  color: #737885;
`,iZ=l.default.p.withConfig({componentId:"zh__sc-d9ec1268-11"})`
  overflow: hidden;

  max-width: 100%;

  font-size: 14px;
  font-weight: 600;
  line-height: 19px;
  color: #333640;
  text-overflow: ellipsis;
  white-space: nowrap;
`,i0=l.default.div.withConfig({componentId:"zh__sc-d9ec1268-12"})`
  display: flex;
  gap: 10px;
  align-items: center;
`,i1=l.default.p.withConfig({componentId:"zh__sc-d9ec1268-13"})`
  flex-shrink: 0;

  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  color: #000;
`,i2=(0,l.default)(O.default.Input.Select).withConfig({componentId:"zh__sc-d9ec1268-14"})`
  width: 100%;
  min-height: 36px;
  color: ${({$isEmptySelected:e})=>e?"#9ca3af":"#0a0a0a"};
`,i4=(0,l.default)(O.default.Button.Outlined).withConfig({componentId:"zh__sc-d9ec1268-15"})`
  ${N.btnStyle}
`,i6=(0,l.default)(O.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-d9ec1268-16"})`
  ${N.btnStyle}
`,i7=(e,t)=>e?.includes(t)===!0,i5=e=>i7(e,c.default.TARGET_COPAYMENT_RECEIPT_AMOUNT)||i7(e,"COPAYMENT_RECEIPT_AMOUNT"),i8=e=>i7(e,c.default.TARGET_COPAYMENT_RECEIPT_RECEIVED_DATE)||i7(e,"COPAYMENT_RECEIPT_RECEIVED_DATE");function i3(e){return Array.from(new Set(e.filter(e=>e.trim().length>0)))}let i9=(0,n.observer)(function(){let e,n=s.default.client.payment.copayment,l=s.default.modal.documentView,r=s.default.data.contractPayment.depositImportIssueList,h=s.default.data.organization.bankAccountList,[x,u]=(0,i.useState)(!1),[g,m]=(0,i.useState)(!1),[_,w]=(0,i.useState)(!1),[y,j]=(0,i.useState)(null),[z,I]=(0,i.useState)(null),[C,v]=(0,i.useState)([]),[S,k]=(0,i.useState)([]),[T,$]=(0,i.useState)(null),E=(0,i.useRef)(null),D=(0,i.useRef)([]),M=(0,i.useRef)(!1);(0,i.useEffect)(()=>{n.setViewDate(new Date)},[n]),(0,i.useEffect)(()=>{D.current=S},[S]);let A=()=>{k([]),j(null)},L=async e=>{let t=i3(e);return 0===t.length||(await Promise.allSettled(t.map(e=>o.default.data.contractPayment.deleteDepositImportIssue({id:e})))).every(e=>{if("fulfilled"!==e.status)return!1;let[t,n]=e.value;return null===t&&!0===n})},P=async()=>{if(M.current)return!1;let e=D.current;if(0===e.length)return A(),!0;M.current=!0;try{let t=await L(e);if(!0!==t)return!1;return A(),!0}finally{M.current=!1}};(0,i.useEffect)(()=>{let e=()=>{let e=i3(D.current);if(0!==e.length){let t;null!==(t=d.default.getAccessToken())&&e.forEach(e=>{fetch(`${a.default.env.BACKEND_URL}/contract-payments/deposit-imports/issues/${e}`,{method:"DELETE",headers:{Authorization:`Bearer ${t}`},keepalive:!0}).catch(()=>null)})}};return window.addEventListener("pagehide",e),()=>{window.removeEventListener("pagehide",e)}},[]),(0,i.useEffect)(()=>{if(!0!==_)return;let e=s.default.data.auth.me.data?.organizationId;if("string"!=typeof e)return;let t=r.query;null!==t&&t.organizationId===e?r.refetch():r.setQuery({organizationId:e})},[r,_]),(0,i.useEffect)(()=>{let e=s.default.data.auth.me.data?.organizationId;if("string"!=typeof e)return void h.reset();let t=h.query;(null===t||t.orgId!==e)&&h.setQuery({orgId:e})},[h]);let N=async e=>{let[t,i]=await n.createDeposit(e);return null!==t||!0!==i?(s.default.ui.layout.toast.error(t?.message??"입금 내역 저장에 실패했습니다."),!1):($(null),!0)};(0,i.useEffect)(()=>{let e=E.current;if(null===e||l.selectedTemplateId!==e.templateId)return;let t=l.selectedTemplateFields;if(0===t.length)return;let n=t.filter(e=>i5(e.uiProps.triggerKeys)),i=t.filter(e=>i8(e.uiProps.triggerKeys));if(0===n.length&&0===i.length){E.current=null;return}n.forEach(t=>{l.updateSelectedFieldValue({page:t.page,fieldKey:t.fieldKey,value:e.amountText})}),i.forEach(t=>{l.updateSelectedFieldValue({page:t.page,fieldKey:t.fieldKey,value:e.receivedDate})}),E.current=null},[l,l.selectedTemplateFields]);let B=async e=>{let t=s.default.client.info.byClient,n=s.default.data.contract.list,i=s.default.data.docs.list,d=s.default.data.docs.templateList;n.setQuery({serviceType:e.serviceType}),await n.refetch(),t.setSelectedClientId(e.clientId),t.setSelectedContractId(e.contractId),d.setQuery({serviceType:e.serviceType}),await d.refetch();let a=d.data??[];if(0===a.length)return void s.default.ui.layout.toast.error("영수증 템플릿 정보를 불러오지 못했습니다.");let r=null;for(let e of a){let[t,n]=await o.default.data.docs.getTemplateFieldList({templateId:e.id});if(null===t&&null!==n&&n.some(e=>{let t=e.uiProps.triggerKeys;return i7(t,c.default.COPAYMENT_RECEIPT_TRANSACTION_NUMBER)||i5(t)||i8(t)})){r=e.id;break}}if(null===r)return void s.default.ui.layout.toast.error("영수증 템플릿을 찾지 못했습니다.");i.setQuery({contractId:e.contractId}),await i.refetch();let[f,p]=await o.default.data.contractPayment.getDepositList({contractId:e.contractId});if(null===f&&null!==p){let t=p.slice().sort((e,t)=>{let n=t.depositDate.localeCompare(e.depositDate);return 0!==n?n:t.id.localeCompare(e.id)}),n=`${e.targetYearMonth}-`,i=t.find(e=>e.depositDate.startsWith(n))??t[0];void 0!==i&&(E.current={templateId:r,amountText:String(Math.max(0,Math.floor(i.amount))),receivedDate:i.depositDate})}l.openTemplateWithoutDocument(r,{lockTemplateNavigation:!0})},O=async e=>{let t=s.default.data.auth.me.data?.organizationId;if("string"!=typeof t)return void s.default.ui.layout.toast.error("기관 정보를 확인하지 못했습니다.");let[n,i]=await o.default.data.contractPayment.importDepositsExcel({file:e,organizationId:t});null!==n||null===i?s.default.ui.layout.toast.error(n?.message??"입금내역 파일 업로드에 실패했습니다."):(j(i),k(i3(i.issues.map(e=>e.id))))},R=async()=>{v(Array.from(new Map((await Promise.allSettled([o.default.data.contract.getList({serviceType:"MEAL"}),o.default.data.contract.getList({serviceType:"NUTRITION"}),o.default.data.contract.getList({serviceType:"DISABILITY_ACTIVITY_SUPPORT"})])).flatMap(e=>{if("fulfilled"!==e.status)return[];let[t,n]=e.value;return null!==t||null===n?[]:n}).map(e=>({contractId:e.id,clientName:e.client.name.trim(),birthDate:e.client.birthDate,serviceType:e.serviceType,grade:e.grade,contractStartDate:e.contractStartDate,contractEndDate:e.contractEndDate})).filter(e=>e.clientName.length>0).map(e=>[e.contractId,e])).values()))},U=async()=>{await R(),m(!0)},V=async e=>{let t=(r.data??[]).find(t=>t.id===e);void 0===t?s.default.ui.layout.toast.error("매칭할 입금내역을 찾지 못했습니다.",void 0,q()):(await R(),I(t))},F=async()=>!0!==await P()?(s.default.ui.layout.toast.error("임시 입금내역 삭제에 실패했습니다. 다시 시도해 주세요."),!1):(m(!1),!0),Y=async()=>!0===await P()||(s.default.ui.layout.toast.error("기존 임시 데이터 삭제에 실패했습니다. 다시 시도해 주세요."),!1),H=async e=>{let{resolvedIssues:t,deletedIssueIds:n}=e,i=(await Promise.allSettled(t.map(e=>o.default.data.contractPayment.resolveDepositImportIssue({id:e.issueId,payload:{contractId:e.contractId,depositDate:e.depositDate,amount:e.amount}})))).some(e=>{if("fulfilled"!==e.status)return!0;let[t,n]=e.value;return null!==t||!0!==n}),l=(await Promise.allSettled(n.map(e=>o.default.data.contractPayment.deleteDepositImportIssue({id:e})))).some(e=>{if("fulfilled"!==e.status)return!0;let[t,n]=e.value;return null!==t||!0!==n});return i||l?(s.default.ui.layout.toast.error("입금내역 반영에 실패했습니다. 다시 시도해 주세요."),!1):(null!==s.default.data.contractPayment.monthlyBillingSummary.query&&await s.default.data.contractPayment.monthlyBillingSummary.refetch(),null!==r.query&&await r.refetch(),A(),m(!1),!0)},G=async e=>{let[t,n]=await o.default.data.contractPayment.resolveDepositImportIssue({id:e.issueId,payload:{contractId:e.contractId,depositDate:e.depositDate,amount:e.amount}});return null!==t||!0!==n?(s.default.ui.layout.toast.error(t?.message??"입금내역 매칭 저장에 실패했습니다. 다시 시도해 주세요.",void 0,q()),!1):(null!==s.default.data.contractPayment.monthlyBillingSummary.query&&await s.default.data.contractPayment.monthlyBillingSummary.refetch(),null!==r.query&&await r.refetch(),I(null),!0)},q=()=>document.getElementById("client-payment-drawer-panel"),Q=async e=>{let[t,n]=await o.default.data.contractPayment.deleteDepositImportIssue({id:e});null!==t||!0!==n?s.default.ui.layout.toast.error(t?.message??"보류 입금내역 삭제에 실패했습니다.",void 0,q()):(s.default.ui.layout.toast.success("보류 입금내역을 삭제했습니다.",void 0,q()),null!==r.query&&r.refetch())};return(0,t.jsxs)(f,{children:[(0,t.jsxs)(p,{children:[(0,t.jsx)(le,{children:(0,t.jsx)(t2,{targetYearMonth:n.targetYearMonth,onShiftMonth:e=>n.shiftMonth(e)})}),(0,t.jsxs)(lt,{children:[(0,t.jsx)(tF,{scopeKey:n.scopeKey,allRowsCount:n.allRows.length,mealCount:n.mealCount,nutritionCount:n.nutritionCount,searchKeyword:n.searchKeyword,onSelectScope:n.setScopeKey,onChangeSearchKeyword:n.setSearchKeyword,onClickCheckPendingDepositHistory:()=>{w(!0)},onClickUploadBankDepositHistory:()=>{U()}}),(0,t.jsxs)(ln,{children:[(0,t.jsx)(nX,{unpaidCountText:`${n.scopeAggregatedSummary.unpaidCount}명`,remainingAmountText:(e=n.scopeAggregatedSummary.totalUnpaidAmount,`${e.toLocaleString("ko-KR")}원`),isExpanded:x}),(0,t.jsx)(b,{isExpanded:x,onToggle:()=>u(e=>!e)})]}),(0,t.jsx)(nb,{isLoading:"loading"===n.monthlyBillingSummaryStatus,targetYearMonth:n.targetYearMonth,rows:n.sortedRows,bankAccountList:h.data??[],sortKey:n.sortKey,nameSortDisplayOrder:n.nameSortDisplayOrder,copaymentDetailSortDisplayOrder:n.copaymentDetailSortDisplayOrder,onSort:n.setSort,onClickBillingAction:e=>$(e),onClickReceiptPrint:e=>{B(e)}})]})]}),(0,t.jsx)(tl,{selectedBillingRow:T,onSubmit:N,onClose:()=>$(null)},T?.contractId??"copayment-detail-input-modal-empty"),(0,t.jsx)(n3,{isOpen:_,issueList:r.data??[],isLoading:"loading"===r.status,errorMessage:r.error?.message??null,onClickDeleteIssue:e=>{Q(e)},onClickMatchIssue:e=>{V(e)},onClose:()=>{w(!1)}}),(0,t.jsx)(K,{isOpen:g,analysisResult:y,contractOptions:C,onClose:F,onClickStartAnalyze:O,onClickReUpload:Y,onClickConfirmAndSave:H}),null!==z&&(0,t.jsx)(iU,{issue:z,contractOptions:C,onClose:()=>{I(null)},onSubmit:G})]})}),le=l.default.div.withConfig({componentId:"zh__sc-3bf06708-0"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 48px;
  border-bottom: 1px solid #e3e5ed;
`,lt=l.default.div.withConfig({componentId:"zh__sc-3bf06708-1"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: stretch;
  align-self: stretch;

  padding: 16px;
`,ln=l.default.div.withConfig({componentId:"zh__sc-3bf06708-2"})`
  display: grid;
  grid-template-columns: 958px minmax(0, 582px);
  gap: 11px;
  align-items: stretch;

  width: 100%;
`;e.s(["default",0,i9],43996)}]);