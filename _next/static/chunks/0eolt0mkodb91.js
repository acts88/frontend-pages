(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,36358,e=>{"use strict";var t=e.i(9735),i=e.i(24655),n=e.i(95649),r=e.i(2615),l=e.i(7744),d=e.i(38803),a=e.i(64954),s=e.i(41576),c=e.i(43174),o=e.i(21771);let{CONSECUTIVE_PAYMENT:h,OVERTIME_OVER_EIGHT_HOURS:x,EARLY_QUIT_ROUNDING:f,CARD_HOLDER_SUSPICIOUS_NORMAL_PAYMENT:p,CARD_HOLDER_SUSPICIOUS_RETRO_PAYMENT:u,NIGHT_PAYMENT:g,OVER_ONE_MINUTE:j,REST_TIME_VIOLATION:m,TERMINATED_SERVICE_PAYMENT:b}=s.default,w={[h]:"연속 결제 이상 결제 유형",[x]:"실근로시간 8시간 초과",[f]:"15분→30분 / 45→60분 인정",[p]:"카드 소지 의심: 정상 결제",[u]:"카드 소지 의심: 소급 결제",[g]:"카드 소지 의심: 새벽 결제",[j]:"1분 초과",[m]:"근로시간 대비 휴게시간 미달",[b]:"서비스 해지 기간 내 결제 내역 존재"};function y({children:e,checked:i,onChange:n}){return(0,t.jsxs)(O,{children:[(0,t.jsx)(E,{checked:i,onChange:n,"aria-label":"조건 적용"}),(0,t.jsx)("span",{children:e})]})}let v=d.default.section.withConfig({componentId:"zh__sc-274fde26-0"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: stretch;

  width: 100%;
  padding: 16px;
  border: 1px solid #e5e7eb;
  border-radius: 12px;

  background: white;
`,_=d.default.div.withConfig({componentId:"zh__sc-274fde26-1"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`,S=d.default.button.withConfig({componentId:"zh__sc-274fde26-2"})`
  cursor: pointer;

  display: flex;
  gap: 8px;
  align-items: center;

  height: 40px;
  padding: 0 12px;
  border: 0;

  font-size: 14px;
  line-height: 20px;
  color: #646c7b;
  text-align: left;
  white-space: nowrap;

  strong {
    font-weight: 700;
    color: #131416;
  }
`,z=d.default.div.withConfig({componentId:"zh__sc-274fde26-3"})`
  display: ${({$isExpanded:e})=>e?"block":"none"};
`,C=d.default.span.withConfig({componentId:"zh__sc-274fde26-4"})`
  padding: 8px;
  border: 1px solid #4f39f6;
  border-radius: 99px;

  line-height: 16px;
  color: white;

  background: #4f39f6;
`,I=d.default.div.withConfig({componentId:"zh__sc-274fde26-5"})`
  width: 100%;
  height: 1px;
  background: #e5e7eb;
`,$=d.default.div.withConfig({componentId:"zh__sc-274fde26-6"})`
  display: flex;
  gap: 8px;
  align-items: center;

  height: 40px;
  margin: 8px 0;
  padding: 0 16px;
`,k=d.default.strong.withConfig({componentId:"zh__sc-274fde26-7"})`
  width: 226px;

  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  color: #131416;
`,N=(0,d.default)(a.default.Input.Date).attrs({style:{textAlign:"center"}}).withConfig({componentId:"zh__sc-274fde26-8"})`
  width: 180px;
  height: 28px;
  font-size: 14px;
`,T=d.default.span.withConfig({componentId:"zh__sc-274fde26-9"})`
  font-size: 14px;
  color: #464c53;
`,D=d.default.div.withConfig({componentId:"zh__sc-274fde26-10"})`
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  gap: 16px;

  padding: 12px 16px;
`,M=d.default.div.withConfig({componentId:"zh__sc-274fde26-11"})`
  display: flex;
  flex-shrink: 0;
  gap: 12px;
  align-items: center;

  min-height: 36px;

  white-space: nowrap;
`,O=d.default.label.withConfig({componentId:"zh__sc-274fde26-12"})`
  display: flex;
  flex-shrink: 0;
  gap: 12px;
  align-items: center;

  width: 226px;

  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: #131416;
`,E=(0,d.default)(a.default.Input.Check).attrs({$iconSizeRatio:1.5}).withConfig({componentId:"zh__sc-274fde26-13"})`
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  border-radius: 4px;
`,A=d.default.span.withConfig({componentId:"zh__sc-274fde26-14"})`
  flex-shrink: 0;
  font-size: 14px;
  line-height: 20px;
  color: #464c53;
`,P=(0,d.default)(a.default.Input.Text).withConfig({componentId:"zh__sc-274fde26-15"})`
  flex-shrink: 0;

  width: 80px;
  height: 36px;
  padding: 4px 16px;
  border: 1px solid #e5e9ef;
  border-radius: 4px;

  font-size: 16px;
  line-height: 20px;
  text-align: center;
`,V=(0,d.default)(P).withConfig({componentId:"zh__sc-274fde26-16"})`
  width: 104px;
`,H=d.default.div.withConfig({componentId:"zh__sc-274fde26-17"})`
  display: ${({$isExpanded:e})=>e?"flex":"none"};
  align-items: center;
  justify-content: center;
  width: 100%;
`,R=(0,d.default)(a.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-274fde26-18"})`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;

  width: 120px;
  height: 44px;
  padding: 8px 16px;
`;e.s(["default",0,function(){let[e,d]=(0,l.useState)(""),[a,O]=(0,l.useState)(""),[E,W]=(0,l.useState)(()=>new Set(Object.values(s.default))),F=c.default.data.serviceWorker.activityAnomalyReport,[X,Y]=(0,l.useState)(!0),B=e=>{W(t=>{let i=new Set(t);return i.has(e)?i.delete(e):i.add(e),i})};return(0,t.jsxs)(v,{children:[(0,t.jsxs)(_,{children:[(0,t.jsxs)(S,{type:"button","aria-expanded":X,onClick:()=>Y(e=>!e),children:[X?(0,t.jsx)(r.default,{sx:{fontSize:24,color:"#131416"}}):(0,t.jsx)(n.default,{sx:{fontSize:24,color:"#131416"}}),(0,t.jsx)("strong",{children:"부정결제 의심 내역 결제 조건"}),(0,t.jsxs)(C,{children:[E.size,"개 적용 중"]}),(0,t.jsx)("span",{children:"아래에서 조건값을 확인하거나 수정할 수 있습니다."})]}),(0,t.jsxs)(z,{$isExpanded:X,children:[(0,t.jsx)(I,{}),(0,t.jsxs)($,{children:[(0,t.jsx)(k,{children:"검색 기간"}),(0,t.jsx)(N,{value:e,onChange:d,showClearButton:!0}),(0,t.jsx)(T,{children:"~"}),(0,t.jsx)(N,{value:a,onChange:O,showClearButton:!0})]}),(0,t.jsxs)(D,{children:[(0,t.jsxs)(M,{children:[(0,t.jsx)(y,{checked:E.has(h),onChange:()=>B(h),children:w[h]}),(0,t.jsx)(A,{children:"동일 제공인력이 서로 다른 이용자에게 연속으로 결제한 서비스의 종료·시작 시간 차이가"}),(0,t.jsx)(P,{defaultValue:"5",readOnly:!0,"aria-label":"조건값"}),(0,t.jsx)(A,{children:"분 이내 일 시"})]}),(0,t.jsxs)(M,{children:[(0,t.jsx)(y,{checked:E.has(x),onChange:()=>B(x),children:w[x]}),(0,t.jsx)(A,{children:"동일 제공인력의 일일 총 결제시간 합계가"}),(0,t.jsx)(P,{defaultValue:"8",readOnly:!0,"aria-label":"조건값"}),(0,t.jsx)(A,{children:"시간을 초과할 시"})]}),(0,t.jsxs)(M,{children:[(0,t.jsx)(y,{checked:E.has(f),onChange:()=>B(f),children:w[f]}),(0,t.jsx)(A,{children:"실제 제공시간이"}),(0,t.jsx)(P,{defaultValue:"15",readOnly:!0,"aria-label":"조건값"}),(0,t.jsx)(A,{children:"분 또는"}),(0,t.jsx)(P,{defaultValue:"45",readOnly:!0,"aria-label":"조건값"}),(0,t.jsx)(A,{children:"분 단위로 종료되어, 결제시간이 각각 30분 또는 60분 단위로 인정된 경우"})]}),(0,t.jsxs)(M,{children:[(0,t.jsx)(y,{checked:E.has(p),onChange:()=>B(p),children:w[p]}),(0,t.jsx)(A,{children:"승인 일시가 서비스 시작"}),(0,t.jsx)(P,{defaultValue:"30",readOnly:!0,"aria-label":"조건값"}),(0,t.jsx)(A,{children:"분 전보다 이르거나, 서비스 종료"}),(0,t.jsx)(P,{defaultValue:"30",readOnly:!0,"aria-label":"조건값"}),(0,t.jsx)(A,{children:"분 후보다 늦을 시"})]}),(0,t.jsxs)(M,{children:[(0,t.jsx)(y,{checked:E.has(u),onChange:()=>B(u),children:w[u]}),(0,t.jsx)(A,{children:"승인 일시가 서비스 시작"}),(0,t.jsx)(P,{defaultValue:"30",readOnly:!0,"aria-label":"조건값"}),(0,t.jsx)(A,{children:"분 전보다 이르거나, 서비스 종료"}),(0,t.jsx)(P,{defaultValue:"30",readOnly:!0,"aria-label":"조건값"}),(0,t.jsx)(A,{children:"분 후보다 늦을 시"})]}),(0,t.jsxs)(M,{children:[(0,t.jsx)(y,{checked:E.has(g),onChange:()=>B(g),children:w[g]}),(0,t.jsx)(A,{children:"승인 일시가"}),(0,t.jsx)(V,{defaultValue:"00:00",readOnly:!0,"aria-label":"조건값"}),(0,t.jsx)(T,{children:"~"}),(0,t.jsx)(V,{defaultValue:"06:00",readOnly:!0,"aria-label":"조건값"}),(0,t.jsx)(A,{children:"사이에 발생했을 시"})]}),(0,t.jsxs)(M,{children:[(0,t.jsx)(y,{checked:E.has(j),onChange:()=>B(j),children:w[j]}),(0,t.jsx)(A,{children:"제공인력의 일일 총 근로시간이"}),(0,t.jsx)(P,{defaultValue:"4",readOnly:!0,"aria-label":"조건값"}),(0,t.jsx)(A,{children:"시간을"}),(0,t.jsx)(P,{defaultValue:"1",readOnly:!0,"aria-label":"조건값"}),(0,t.jsx)(A,{children:"분 이상 초과했으나 휴게시간이 없을 시"})]}),(0,t.jsxs)(M,{children:[(0,t.jsx)(y,{checked:E.has(m),onChange:()=>B(m),children:w[m]}),(0,t.jsx)(A,{children:"일일 총 근로시간이"}),(0,t.jsx)(P,{defaultValue:"4",readOnly:!0,"aria-label":"조건값"}),(0,t.jsx)(A,{children:"시간을 초과하고 휴게시간이"}),(0,t.jsx)(P,{defaultValue:"30",readOnly:!0,"aria-label":"조건값"}),(0,t.jsx)(A,{children:"분 미만이거나,"}),(0,t.jsx)(P,{defaultValue:"8",readOnly:!0,"aria-label":"조건값"}),(0,t.jsx)(A,{children:"시간을 초과하고 휴게시간이"}),(0,t.jsx)(P,{defaultValue:"30",readOnly:!0,"aria-label":"조건값"}),(0,t.jsx)(A,{children:"분 미만일 시"})]}),(0,t.jsx)(M,{children:(0,t.jsx)(y,{checked:E.has(b),onChange:()=>B(b),children:w[b]})})]})]})]}),(0,t.jsx)(H,{$isExpanded:X,children:(0,t.jsxs)(R,{type:"button",disabled:"loading"===F.status||0===E.size,onClick:()=>{F.setQuery({from:o.default.is(e)?e:void 0,to:o.default.is(a)?a:void 0,categories:[...E]})},children:[(0,t.jsx)(i.default,{sx:{fontSize:20}}),"검색"]})})]})}])},99840,e=>{"use strict";var t=e.i(9735),i=e.i(74483);e.i(3159);var n=e.i(46907),r=e.i(7744),l=e.i(38803),d=e.i(43174),a=e.i(88552),s=e.i(69268);let c=[{header:"일자",width:85},{header:"대상자명",width:120},{header:"승인일시",width:185},{header:"시작시간",width:185},{header:"종료시간",width:185},{header:"결제시간",width:130},{header:"결제구분",width:150},{header:"총 제공시간\n(사회+신체+가사)",width:185},{header:"검색 결과",width:270}],o={consecutivePayment:"연속∙이상 결제",overtimeOverEightHours:"8시간 초과",earlyQuitRounding:"15분/45분",cardholderSuspiciousNormalPayment:"카드소지:정상",cardholderSuspiciousRetroPayment:"카드소지:소급",nightPayment:"카드소지:새벽",overOneMinute:"1분 초과",restTimeViolation:"휴게시간미달",terminatedServicePayment:"해지기간결제"};function h(e){if(null===e)return"-";let t=new Date(e);if(Number.isNaN(t.getTime()))return e;let i=String(t.getHours()).padStart(2,"0"),n=String(t.getMinutes()).padStart(2,"0"),r=String(t.getSeconds()).padStart(2,"0");return`${i}:${n}:${r}`}function x(e){if(null===e)return"-";let t=new Date(e);if(Number.isNaN(t.getTime()))return e;let i=t.getFullYear(),n=String(t.getMonth()+1).padStart(2,"0"),r=String(t.getDate()).padStart(2,"0");return`${i}-${n}-${r}
${h(e)}`}function f(e){return null===e?"-":Number.isInteger(e)?String(e):e.toFixed(1)}function p({anomalies:e}){return(0,t.jsx)(C,{children:e.map(e=>(0,t.jsx)(I,{children:void 0!==e.onClick?(0,t.jsx)($,{type:"button",onClick:e.onClick,children:o[e.category]}):o[e.category]},e.key))})}function u({worker:e,categoryLevels:n,onAnomalyClick:r}){return(0,t.jsxs)(g,{children:[(0,t.jsxs)(j,{children:[(0,t.jsx)(m,{children:"세부 제공 내용"}),void 0===e?null:(0,t.jsxs)(b,{type:"button",onClick:()=>{void 0!==e&&d.default.modal.serviceWorkerDetail.show(e.serviceWorkerId)},children:["[",e.serviceWorkerName??"-","] 제공인력 정보 보기",(0,t.jsx)(a.default,{sx:{fontSize:16}})]})]}),(0,t.jsxs)(w,{children:[(0,t.jsx)("thead",{children:(0,t.jsx)("tr",{children:c.map(({header:e,width:i})=>(0,t.jsx)(y,{$width:i,children:e},e))})}),void 0===e||void 0===n?null:(0,t.jsx)("tbody",{children:e.days.flatMap(e=>e.records.map((i,l)=>{var d,a;let c,o=i.anomalies.filter(e=>"row"===n[e.category]),u=(d=e.dayAnomalies,d.filter(e=>"day"===n[e.category]&&e.recordIds.includes(i.id)));return(0,t.jsxs)(S,{children:[(0,t.jsx)(v,{children:0===l?null===(c=(a=e.date).match(/^\d{4}-(\d{2})-(\d{2})$/))?a:`${Number(c[1])}/${c[2]}`:null}),(0,t.jsx)(_,{children:i.clientName??"-"}),(0,t.jsx)(v,{children:h(i.approvedAt)}),(0,t.jsx)(v,{children:x(i.serviceStartTime)}),(0,t.jsx)(v,{children:x(i.serviceEndTime)}),(0,t.jsx)(v,{children:f(i.settledHours)}),(0,t.jsx)(v,{children:function(e){if(null===e)return"-";let t=Object.entries(s.default).find(([t])=>t===e)?.[1];return void 0===t?e:`${t.label}결제`}(i.settlementType)}),(0,t.jsx)(v,{children:f(i.settledHours)}),(0,t.jsx)(z,{children:(0,t.jsx)(p,{anomalies:[...o.map(t=>({category:t.category,key:`row-${t.category}-${t.detail}`,onClick:"earlyQuitRounding"===t.category||"cardholderSuspiciousNormalPayment"===t.category||"cardholderSuspiciousRetroPayment"===t.category||"nightPayment"===t.category||"overOneMinute"===t.category||"terminatedServicePayment"===t.category?()=>r(t,"cardholderSuspiciousRetroPayment"===t.category?e.records:[i],i):void 0})),...u.map(t=>({category:t.category,key:`day-${t.category}-${t.detail}`,onClick:()=>r(t,e.records,i)}))]})})]},i.id)}))})]}),void 0===e?(0,t.jsxs)(k,{children:[(0,t.jsx)(i.default,{sx:{fontSize:24,color:"#494f53"}}),(0,t.jsx)(N,{children:"왼쪽의 제공인력을 선택 시, 세부 제공 내용을 확인할 수 있습니다."})]}):null]})}let g=l.default.section.withConfig({componentId:"zh__sc-4f04c00a-0"})`
  overflow: hidden;
  border: 1px solid #dadee6;
  border-radius: 8px;
  background: white;
`,j=l.default.h3.withConfig({componentId:"zh__sc-4f04c00a-1"})`
  display: flex;
  gap: 8px;
  align-items: center;

  height: 44px;
  padding: 8px 16px;

  font-size: 16px;
  font-weight: 700;
  color: #131416;
`,m=l.default.span.withConfig({componentId:"zh__sc-4f04c00a-2"})`
  font-size: 16px;
  font-weight: 700;
  color: #131416;
`,b=l.default.button.withConfig({componentId:"zh__sc-4f04c00a-3"})`
  display: flex;
  gap: 4px;
  align-items: center;

  padding: 4px 0;
  border: 0;
  border-radius: 99px;

  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  color: #4f39f6;
  letter-spacing: -1px;

  background: transparent;
`,w=l.default.table.withConfig({componentId:"zh__sc-4f04c00a-4"})`
  table-layout: fixed;
  border-collapse: collapse;
`,y=l.default.th.withConfig({componentId:"zh__sc-4f04c00a-5"})`
  width: ${({$width:e})=>`${e}px`};
  height: 76px;
  padding: 8px;
  border-top: 1px solid #dadee6;

  font-size: 13px;
  font-weight: 700;
  line-height: normal;
  color: #131416;
  text-align: center;
  white-space: pre-line;
  vertical-align: middle;

  background: #f3f5f9;
`,v=l.default.td.withConfig({componentId:"zh__sc-4f04c00a-6"})`
  height: 64px;
  padding: 8px;

  font-size: 13px;
  line-height: 16px;
  color: #464c53;
  text-align: center;
  white-space: pre-line;
  vertical-align: middle;
`,_=(0,l.default)(v).withConfig({componentId:"zh__sc-4f04c00a-7"})`
  font-weight: 700;
`,S=l.default.tr.withConfig({componentId:"zh__sc-4f04c00a-8"})`
  &:hover {
    background: #f9fafb;
  }

  &:active {
    background: #f2f4f7;
  }
`,z=(0,l.default)(v).withConfig({componentId:"zh__sc-4f04c00a-9"})`
  width: 270px;
`,C=l.default.ul.withConfig({componentId:"zh__sc-4f04c00a-10"})`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  align-items: center;
  justify-content: center;

  margin: 0;
  padding: 0;

  list-style: none;
`,I=l.default.li.withConfig({componentId:"zh__sc-4f04c00a-11"})`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;

  padding: 4px 8px;
  border-radius: 99px;

  font-size: 12px;
  font-weight: 400;
  font-style: normal;
  line-height: 16px; /* 133.333% */
  color: #fff;
  letter-spacing: -1px;

  background: #ff6900;
`,$=l.default.button.withConfig({componentId:"zh__sc-4f04c00a-12"})`
  padding: 0;
  border: 0;

  font: inherit;
  color: inherit;

  background: transparent;
`,k=l.default.div.withConfig({componentId:"zh__sc-4f04c00a-13"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: center;

  min-height: 174px;
  padding: 16px;
`,N=l.default.p.withConfig({componentId:"zh__sc-4f04c00a-14"})`
  margin: 0;

  font-size: 16px;
  font-weight: 700;
  line-height: normal;
  color: #494f53;
  text-align: center;
`;var T=e.i(64954),D=e.i(41576),M=e.i(44534);let{CONSECUTIVE_PAYMENT:O,OVERTIME_OVER_EIGHT_HOURS:E,EARLY_QUIT_ROUNDING:A,CARD_HOLDER_SUSPICIOUS_NORMAL_PAYMENT:P,CARD_HOLDER_SUSPICIOUS_RETRO_PAYMENT:V,NIGHT_PAYMENT:H,OVER_ONE_MINUTE:R,REST_TIME_VIOLATION:W,TERMINATED_SERVICE_PAYMENT:F}=D.default,X=[{value:O,label:"① 연속결제 이상결제"},{value:E,label:"② 일 8시간 초과 근무"},{value:A,label:"③ 15,45분 결제"},{value:P,label:"④ 카드 소지 의심: 정상 결제"},{value:V,label:"⑤ 카드 소지 의심: 소급 결제"},{value:H,label:"⑥ 카드 소지 의심: 새벽 결제"},{value:R,label:"⑦ 1분 초과"},{value:W,label:"⑧ 휴게 시간 미달"},{value:F,label:"⑨ 서비스 해지 기간 내 결제 내역 존재"}];function Y(e){return void 0===e?"-":e.replace(/^(\d{2})\d{2}-(\d{2})-(\d{2})$/,"$1.$2.$3")}function B({workers:e,selectedWorkerId:i,onSelect:n}){let[l,a]=(0,r.useState)(""),s=d.default.data.serviceWorker.activityAnomalyReport.query,c=e.filter(e=>M.default.isMatch(M.default.create(e.serviceWorkerName??""),l));return(0,t.jsxs)(Q,{children:[(0,t.jsxs)(L,{children:[(0,t.jsxs)(U,{children:["총 ",e.length,"명"]}),(0,t.jsx)(K,{value:l,onChange:e=>a(e.currentTarget.value),placeholder:"제공인력 이름 검색하기","aria-label":"제공인력 이름 검색"})]}),(0,t.jsx)(q,{children:(0,t.jsxs)(G,{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsxs)(J,{children:["이름",`
`,"/생년월일"]}),(0,t.jsxs)(J,{children:["총",`
`,"근로시간"]}),(0,t.jsx)(J,{children:"건 수"}),(0,t.jsxs)(J,{children:["일수",`
`,s?.from===void 0&&s?.to===void 0?"(전체 기간)":`${Y(s?.from)} ~ ${Y(s?.to)}`]}),X.map(({value:e,label:i})=>(0,t.jsx)(J,{children:i},e))]})}),(0,t.jsx)("tbody",{children:c.map(e=>{var r;let l=e.days.flatMap(e=>e.records);return(0,t.jsxs)(Z,{$selected:e.serviceWorkerId===i,onClick:()=>n(e.serviceWorkerId),children:[(0,t.jsx)(ee,{children:e.serviceWorkerName??"-"}),(0,t.jsx)(ee,{children:Number.isInteger(r=l.reduce((e,t)=>e+(t.settledHours??0),0))?String(r):r.toFixed(1)}),(0,t.jsx)(ee,{children:l.length}),(0,t.jsx)(ee,{children:e.days.length}),X.map(({value:i})=>(0,t.jsx)(ee,{children:e.days.reduce((e,t)=>e+t.dayAnomalies.filter(e=>e.category===i).length+t.records.reduce((e,t)=>e+t.anomalies.filter(e=>e.category===i).length,0),0)},i))]},e.serviceWorkerId)})})]})})]})}let Q=l.default.section.withConfig({componentId:"zh__sc-b55f8238-0"})`
  border: 1px solid #dadee6;
  border-radius: 8px;
  background: white;
`,L=l.default.div.withConfig({componentId:"zh__sc-b55f8238-1"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
`,U=l.default.strong.withConfig({componentId:"zh__sc-b55f8238-2"})`
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #131416;
`,K=(0,l.default)(T.default.Input.Text).withConfig({componentId:"zh__sc-b55f8238-3"})`
  width: 180px;
  height: 28px;
  padding: 0 16px;
  font-size: 16px;
`,q=l.default.div.withConfig({componentId:"zh__sc-b55f8238-4"})`
  overflow-x: auto;
  width: 100%;
`,G=l.default.table.withConfig({componentId:"zh__sc-b55f8238-5"})`
  table-layout: fixed;
  border-collapse: collapse;
  width: max-content;
  min-width: 100%;
`,J=l.default.th.withConfig({componentId:"zh__sc-b55f8238-6"})`
  width: 88px;
  height: 76px;
  padding: 8px;
  border-top: 1px solid #dadee6;

  font-size: 13px;
  font-weight: 700;
  line-height: 16px;
  color: #131416;
  text-align: center;
  white-space: pre-line;
  vertical-align: middle;

  background: #f3f5f9;
`,Z=l.default.tr.withConfig({componentId:"zh__sc-b55f8238-7"})`
  cursor: pointer;
  background: ${({$selected:e})=>e?"#eef2ff":"white"};

  &:hover {
    background: ${({$selected:e})=>e?"#eef2ff":"#f9fafb"};
  }

  &:active {
    background: ${({$selected:e})=>e?"#eef2ff":"#f2f4f7"};
  }
`,ee=l.default.td.withConfig({componentId:"zh__sc-b55f8238-8"})`
  width: 88px;
  height: 64px;
  padding: 8px;

  font-size: 13px;
  line-height: 16px;
  color: #464c53;
  text-align: center;
  white-space: pre-line;
  vertical-align: middle;
`;var et=e.i(8179),ei=e.i(26170);let en=l.default.div.withConfig({componentId:"zh__sc-5019cdc3-0"})`
  width: 982px;
  border-radius: 8px;
  background: white;
  box-shadow: 0 12px 16px rgb(0 0 0 / 8%);
`,er=l.default.header.withConfig({componentId:"zh__sc-5019cdc3-1"})`
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: space-between;

  height: 69px;
  padding: 16px;
  border-bottom: 1px solid #e5e7eb;
  border-radius: 8px 8px 0 0;

  background: white;
`,el=l.default.h2.withConfig({componentId:"zh__sc-5019cdc3-2"})`
  margin: 0;

  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  color: #101828;
`,ed=l.default.button.withConfig({componentId:"zh__sc-5019cdc3-3"})`
  display: inline-flex;
  gap: 4px;
  align-items: center;
  justify-content: center;

  height: 36px;
  padding: 8px 16px;
  border: 1px solid #4f39f6;
  border-radius: 4px;

  font-size: 16px;
  line-height: 20px;
  color: #4f39f6;

  background: white;

  &:hover {
    background: #f7f5ff;
  }
`,ea=l.default.div.withConfig({componentId:"zh__sc-5019cdc3-4"})`
  display: flex;
  flex-direction: column;
  gap: 16px;

  padding: 28px 24px;
  border-radius: 0 0 8px 8px;

  background: #f9fafb;
`,es=l.default.table.withConfig({componentId:"zh__sc-5019cdc3-5"})`
  overflow: hidden;
  table-layout: fixed;
  border-spacing: 0;
  border-collapse: separate;

  width: 100%;
  border: 1px solid #e5e7eb;
  border-radius: 8px;

  background: white;

  tbody tr:last-child td {
    border-bottom: 0;
  }
`,ec=l.default.th.withConfig({componentId:"zh__sc-5019cdc3-6"})`
  height: 48px;
  padding: 8px 16px;
  border-bottom: 1px solid #e5e7eb;

  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
  color: #1c1d22;
  text-align: center;
  vertical-align: middle;

  background: #f8fafc;
`,eo=l.default.td.withConfig({componentId:"zh__sc-5019cdc3-7"})`
  height: 92px;
  padding: 10px 8px;
  border-bottom: 1px solid #e5e7eb;

  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  color: #464c53;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
`,eh=l.default.div.withConfig({componentId:"zh__sc-5019cdc3-8"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: center;
`,ex=l.default.span.withConfig({componentId:"zh__sc-5019cdc3-9"})`
  padding: 6px 10px;
  border-radius: 99px;

  font-size: 13px;
  font-weight: 600;
  line-height: 14px;
  color: #d11f1f;

  background: #ffe8e8;
`,ef=l.default.span.withConfig({componentId:"zh__sc-5019cdc3-10"})`
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  color: #464c53;
`;function ep(e){if(null===e)return"-";let t=new Date(e);if(Number.isNaN(t.getTime()))return e;let i=t.getFullYear(),n=String(t.getMonth()+1).padStart(2,"0"),r=String(t.getDate()).padStart(2,"0"),l=String(t.getHours()).padStart(2,"0"),d=String(t.getMinutes()).padStart(2,"0"),a=String(t.getSeconds()).padStart(2,"0");return`${i}-${n}-${r} ${l}:${d}:${a}`}function eu(e){let t=Math.max(Math.round(e/1e3),0),i=Math.floor(t/60),n=t%60;return 0===i?`${n}초`:0===n?`${i}분`:`${i}분 ${n}초`}function eg({record:e,onClose:i}){var n;let r=(null===e.approvedAt?NaN:Date.parse(e.approvedAt))-(null===e.serviceEndTime?NaN:Date.parse(e.serviceEndTime));return(0,t.jsx)(ei.default,{children:(0,t.jsxs)(en,{children:[(0,t.jsxs)(er,{children:[(0,t.jsx)(el,{children:"[카드 소지 의심: 정상 결제] 세부 활동 내용 확인하기"}),(0,t.jsxs)(ed,{type:"button",onClick:i,"aria-label":"모달 닫기",children:[(0,t.jsx)(et.X,{size:18}),"닫기"]})]}),(0,t.jsx)(ea,{children:(0,t.jsxs)(es,{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)(ec,{children:"서비스 종료 시간"}),(0,t.jsx)(ec,{children:"승인 일시"}),(0,t.jsx)(ec,{children:"초과 시간 (30분 이상)"})]})}),(0,t.jsx)("tbody",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)(eo,{children:ep(e.serviceEndTime)}),(0,t.jsx)(eo,{children:ep(e.approvedAt)}),(0,t.jsx)(eo,{children:(0,t.jsxs)(eh,{children:[(0,t.jsx)(ex,{children:(n=r-18e5,`${eu(n)} 초과`)}),(0,t.jsxs)(ef,{children:["총 ",eu(r)]})]})})]})})]})})]})})}function ej(e){if(null===e)return"-";let t=new Date(e);if(Number.isNaN(t.getTime()))return e;let i=t.getFullYear(),n=String(t.getMonth()+1).padStart(2,"0"),r=String(t.getDate()).padStart(2,"0"),l=String(t.getHours()).padStart(2,"0"),d=String(t.getMinutes()).padStart(2,"0"),a=String(t.getSeconds()).padStart(2,"0");return`${i}-${n}-${r} ${l}:${d}:${a}`}function em(e){if(!Number.isFinite(e))return"-";let t=Math.max(Math.round(e/1e3),0),i=Math.floor(t/60),n=t%60;return 0===i?`${n}초`:0===n?`${i}분`:`${i}분 ${n}초`}function eb({record:e,records:i,onClose:n}){let r=i.filter(t=>t.id!==e.id&&t.clientId===e.clientId&&"NORMAL"===t.settlementType),l=null===e.approvedAt?NaN:Date.parse(e.approvedAt);return(0,t.jsx)(ei.default,{children:(0,t.jsxs)(en,{children:[(0,t.jsxs)(er,{children:[(0,t.jsx)(el,{children:"[카드 소지 의심: 소급 결제] 세부 활동 내용 확인하기"}),(0,t.jsxs)(ed,{type:"button",onClick:n,"aria-label":"모달 닫기",children:[(0,t.jsx)(et.X,{size:18}),"닫기"]})]}),(0,t.jsx)(ea,{children:(0,t.jsxs)(es,{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)(ec,{children:"서비스 시작 시간"}),(0,t.jsx)(ec,{children:"서비스 종료 시간"}),(0,t.jsx)(ec,{children:"소급 결제 승인 일시"}),(0,t.jsx)(ec,{children:"시간 차이 (30분 이상)"})]})}),(0,t.jsx)("tbody",{children:0===r.length?(0,t.jsx)("tr",{children:(0,t.jsx)(eo,{colSpan:4,children:(0,t.jsx)(eh,{children:(0,t.jsx)(ex,{children:"당일 제공 기록 없음"})})})}):r.map(i=>{let n=null===i.serviceStartTime?NaN:Date.parse(i.serviceStartTime),r=null===i.serviceEndTime?NaN:Date.parse(i.serviceEndTime),d=l<=n?n-l:l>=r?l-r:0,a=d-18e5;return(0,t.jsxs)("tr",{children:[(0,t.jsx)(eo,{children:ej(i.serviceStartTime)}),(0,t.jsx)(eo,{children:ej(i.serviceEndTime)}),(0,t.jsx)(eo,{children:ej(e.approvedAt)}),(0,t.jsx)(eo,{children:(0,t.jsxs)(eh,{children:[a>=0?(0,t.jsxs)(ex,{children:[l<=n?"서비스 시작 기준 ":"서비스 종료 기준 ",em(a)," 이상"]}):null,(0,t.jsxs)(ef,{children:["총 ",em(d)]})]})})]},i.id)})})]})})]})})}function ew(e){if(null===e)return"-";let t=new Date(e);if(Number.isNaN(t.getTime()))return e;let i=t.getFullYear(),n=String(t.getMonth()+1).padStart(2,"0"),r=String(t.getDate()).padStart(2,"0"),l=String(t.getHours()).padStart(2,"0"),d=String(t.getMinutes()).padStart(2,"0"),a=String(t.getSeconds()).padStart(2,"0");return`${i}-${n}-${r} ${l}:${d}:${a}`}function ey({anomaly:e,records:i,onClose:n}){let r,l=(r=i.filter(t=>e.recordIds.includes(t.id)).sort((e,t)=>{let i=e.serviceStartTime??"",n=t.serviceStartTime??"";return i.localeCompare(n)})).slice(0,-1).flatMap((e,t)=>{let i=r[t+1];if(void 0===i)return[];let n=null===e.serviceEndTime?NaN:Date.parse(e.serviceEndTime),l=null===i.serviceStartTime?NaN:Date.parse(i.serviceStartTime);return Number.isNaN(n)||Number.isNaN(l)?[]:[{firstRecord:e,secondRecord:i,gapMinutes:Math.floor((l-n)/6e4)}]});return(0,t.jsx)(ei.default,{children:(0,t.jsxs)(en,{children:[(0,t.jsxs)(er,{children:[(0,t.jsx)(el,{children:"[연속∙이상 결제] 세부 활동 내용 확인하기"}),(0,t.jsxs)(ed,{type:"button",onClick:n,"aria-label":"모달 닫기",children:[(0,t.jsx)(et.X,{size:18}),"닫기"]})]}),(0,t.jsx)(ea,{children:(0,t.jsxs)(es,{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)(ec,{children:"대상자명"}),(0,t.jsx)(ec,{children:"서비스 종료 시간"}),(0,t.jsx)(ec,{children:"대상자명"}),(0,t.jsx)(ec,{children:"서비스 시작 시간"}),(0,t.jsx)(ec,{children:"간격 (5분 이내 일 시)"})]})}),(0,t.jsx)("tbody",{children:l.map(({firstRecord:e,secondRecord:i,gapMinutes:n})=>(0,t.jsxs)("tr",{children:[(0,t.jsx)(eo,{children:e.clientName??"-"}),(0,t.jsx)(eo,{children:ew(e.serviceEndTime)}),(0,t.jsx)(eo,{children:i.clientName??"-"}),(0,t.jsx)(eo,{children:ew(i.serviceStartTime)}),(0,t.jsx)(eo,{children:(0,t.jsxs)(eh,{children:[(0,t.jsxs)(ex,{children:[5-n,"분 짧음"]}),(0,t.jsxs)(ef,{children:[n,"분"]})]})})]},`${e.id}-${i.id}`))})]})})]})})}function ev({record:e,onClose:i}){return(0,t.jsx)(ei.default,{children:(0,t.jsxs)(en,{children:[(0,t.jsxs)(er,{children:[(0,t.jsx)(el,{children:"[15,45분 결제] 세부 활동 내용 확인하기"}),(0,t.jsxs)(ed,{type:"button",onClick:i,"aria-label":"모달 닫기",children:[(0,t.jsx)(et.X,{size:18}),"닫기"]})]}),(0,t.jsx)(ea,{children:(0,t.jsxs)(es,{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)(ec,{children:"사회 활동"}),(0,t.jsx)(ec,{children:"신체 활동"}),(0,t.jsx)(ec,{children:"가사 활동"})]})}),(0,t.jsx)("tbody",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)(eo,{children:e.socialActivitySupport??"-"}),(0,t.jsx)(eo,{children:e.physicalActivitySupport??"-"}),(0,t.jsx)(eo,{children:e.houseworkActivitySupport??"-"})]})})]})})]})})}function e_({record:e,onClose:i}){return(0,t.jsx)(ei.default,{children:(0,t.jsxs)(en,{children:[(0,t.jsxs)(er,{children:[(0,t.jsx)(el,{children:"[카드 소지: 새벽] 세부 활동 내용 확인하기"}),(0,t.jsxs)(ed,{type:"button",onClick:i,"aria-label":"모달 닫기",children:[(0,t.jsx)(et.X,{size:18}),"닫기"]})]}),(0,t.jsx)(ea,{children:(0,t.jsxs)(es,{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)(ec,{children:"승인 시간"}),(0,t.jsx)(ec,{children:"새벽 결제 기준"})]})}),(0,t.jsx)("tbody",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)(eo,{children:function(e){if(null===e)return"-";let t=new Date(e);if(Number.isNaN(t.getTime()))return e;let i=String(t.getHours()).padStart(2,"0"),n=String(t.getMinutes()).padStart(2,"0"),r=String(t.getSeconds()).padStart(2,"0");return`${i}:${n}:${r}`}(e.approvedAt)}),(0,t.jsx)(eo,{children:(0,t.jsx)(ex,{children:"00~06시"})})]})})]})})]})})}function eS({anomaly:e,onClose:i}){return(0,t.jsx)(ei.default,{children:(0,t.jsxs)(en,{children:[(0,t.jsxs)(er,{children:[(0,t.jsx)(el,{children:"[1분 초과 시] 세부 활동 내용 확인하기"}),(0,t.jsxs)(ed,{type:"button",onClick:i,"aria-label":"모달 닫기",children:[(0,t.jsx)(et.X,{size:18}),"닫기"]})]}),(0,t.jsx)(ea,{children:(0,t.jsxs)(es,{children:[(0,t.jsx)("thead",{children:(0,t.jsx)("tr",{children:e.metrics.map(e=>(0,t.jsx)(ec,{children:e.label},e.key))})}),(0,t.jsx)("tbody",{children:(0,t.jsx)("tr",{children:e.metrics.map(e=>(0,t.jsx)(eo,{children:e.value},e.key))})})]})})]})})}function ez(e){if(null===e)return"-";let t=new Date(e);if(Number.isNaN(t.getTime()))return e;let i=t.getFullYear(),n=String(t.getMonth()+1).padStart(2,"0"),r=String(t.getDate()).padStart(2,"0"),l=String(t.getHours()).padStart(2,"0"),d=String(t.getMinutes()).padStart(2,"0"),a=String(t.getSeconds()).padStart(2,"0");return`${i}-${n}-${r} ${l}:${d}:${a}`}function eC(e){let t=Math.round(60*e),i=Math.floor(t/60),n=t%60;return 0===i?`${n}분`:0===n?`${i}시간`:`${i}시간 ${n}분`}function eI({anomaly:e,records:i,onClose:n}){let r=i.filter(t=>e.recordIds.includes(t.id)),l=r.reduce((e,t)=>e+(t.settledHours??0),0),d=Math.max(l-8,0);return(0,t.jsx)(ei.default,{children:(0,t.jsxs)(en,{children:[(0,t.jsxs)(er,{children:[(0,t.jsx)(el,{children:"[근로시간 8시간 초과] 세부 활동 내용 확인하기"}),(0,t.jsxs)(ed,{type:"button",onClick:n,"aria-label":"모달 닫기",children:[(0,t.jsx)(et.X,{size:18}),"닫기"]})]}),(0,t.jsx)(ea,{children:(0,t.jsxs)(es,{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)(ec,{children:"대상자명"}),(0,t.jsx)(ec,{children:"서비스 시작 시간"}),(0,t.jsx)(ec,{children:"서비스 종료 시간"}),(0,t.jsx)(ec,{children:"결제 시간"})]})}),(0,t.jsxs)("tbody",{children:[r.map(e=>(0,t.jsxs)("tr",{children:[(0,t.jsx)(eo,{children:e.clientName??"-"}),(0,t.jsx)(eo,{children:ez(e.serviceStartTime)}),(0,t.jsx)(eo,{children:ez(e.serviceEndTime)}),(0,t.jsx)(eo,{children:eC(e.settledHours??0)})]},e.id)),(0,t.jsxs)("tr",{children:[(0,t.jsx)(eo,{colSpan:3}),(0,t.jsx)(eo,{children:(0,t.jsxs)(eh,{children:[(0,t.jsxs)(ex,{children:[eC(d)," 초과"]}),(0,t.jsxs)(ef,{children:["총 ",eC(l)]})]})})]})]})]})})]})})}function e$(e){if(null===e)return"-";let t=new Date(e);if(Number.isNaN(t.getTime()))return e;let i=t.getFullYear(),n=String(t.getMonth()+1).padStart(2,"0"),r=String(t.getDate()).padStart(2,"0"),l=String(t.getHours()).padStart(2,"0"),d=String(t.getMinutes()).padStart(2,"0"),a=String(t.getSeconds()).padStart(2,"0");return`${i}-${n}-${r} ${l}:${d}:${a}`}function ek(e){let t=Math.max(Math.round(e),0),i=Math.floor(t/60),n=t%60;return 0===i?`${n}분`:0===n?`${i}시간`:`${i}시간 ${n}분`}function eN({anomaly:e,records:i,onClose:n}){let r,l=i.filter(t=>e.recordIds.includes(t.id)),d=60*l.reduce((e,t)=>e+(t.settledHours??0),0),a=(r=l.filter(e=>null!==e.serviceStartTime&&null!==e.serviceEndTime).sort((e,t)=>Date.parse(e.serviceStartTime??"")-Date.parse(t.serviceStartTime??""))).slice(0,-1).reduce((e,t,i)=>{let n=r[i+1];if(void 0===n)return e;let l=Date.parse(t.serviceEndTime??""),d=Date.parse(n.serviceStartTime??"");return Number.isNaN(l)||Number.isNaN(d)||d<=l?e:e+(d-l)/6e4},0),s=Math.max((d>=480?60:30*(d>=240))-a,0);return(0,t.jsx)(ei.default,{children:(0,t.jsxs)(en,{children:[(0,t.jsxs)(er,{children:[(0,t.jsx)(el,{children:"[휴게시간 미달] 세부 활동 내용 확인하기"}),(0,t.jsxs)(ed,{type:"button",onClick:n,"aria-label":"모달 닫기",children:[(0,t.jsx)(et.X,{size:18}),"닫기"]})]}),(0,t.jsx)(ea,{children:(0,t.jsxs)(es,{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)(ec,{children:"서비스 시작 시간"}),(0,t.jsx)(ec,{children:"서비스 종료 시간"}),(0,t.jsx)(ec,{children:"결제 시간"}),(0,t.jsx)(ec,{children:"휴게시간 (30분, 1시간 미달 시)"})]})}),(0,t.jsx)("tbody",{children:l.map((e,i)=>(0,t.jsxs)("tr",{children:[(0,t.jsx)(eo,{children:e$(e.serviceStartTime)}),(0,t.jsx)(eo,{children:e$(e.serviceEndTime)}),(0,t.jsx)(eo,{children:function(e){if(null===e)return"-";let t=Math.round(60*e),i=Math.floor(t/60);return`${i}:${String(t%60).padStart(2,"0")}`}(e.settledHours)}),0===i?(0,t.jsx)(eo,{rowSpan:l.length,children:(0,t.jsxs)(eh,{children:[(0,t.jsxs)(ex,{children:[ek(s)," 미달"]}),(0,t.jsxs)(ef,{children:["총 ",ek(a)]})]})}):null]},e.id))})]})})]})})}var eT=e.i(23416);function eD(e){return null==e?"-":e}function eM(e){if(null===e)return"-";let t=new Date(e);if(Number.isNaN(t.getTime()))return e;let i=t.getFullYear(),n=String(t.getMonth()+1).padStart(2,"0"),r=String(t.getDate()).padStart(2,"0"),l=String(t.getHours()).padStart(2,"0"),d=String(t.getMinutes()).padStart(2,"0"),a=String(t.getSeconds()).padStart(2,"0");return`${i}-${n}-${r} ${l}:${d}:${a}`}function eO({record:e,onClose:i}){let[n,l]=(0,r.useState)(null);(0,r.useEffect)(()=>{let t=!0;return eT.default.data.contract.get({id:e.contractId}).then(([e,i])=>{t&&null===e&&l(i)}),()=>{t=!1}},[e.contractId]);let d=null===n?"-":`${eD(n.contractStartDate)} ~ ${eD(n.contractEndDate)}`,a=function(e,t,i){if(null===i)return!1;let n=i.contractStartDate?Date.parse(`${i.contractStartDate}T00:00:00`):-1/0,r=i.contractEndDate?Date.parse(`${i.contractEndDate}T23:59:59.999`):1/0,l=null===e?null:Date.parse(e),d=null===t?null:Date.parse(t);return(null===l||l>=n)&&(null===d||d<=r)}(e.serviceStartTime,e.serviceEndTime,n);return(0,t.jsx)(ei.default,{children:(0,t.jsxs)(en,{children:[(0,t.jsxs)(er,{children:[(0,t.jsx)(el,{children:"[해지기간 결제] 세부 활동 내용 확인하기"}),(0,t.jsxs)(ed,{type:"button",onClick:i,"aria-label":"모달 닫기",children:[(0,t.jsx)(et.X,{size:18}),"닫기"]})]}),(0,t.jsx)(ea,{children:(0,t.jsxs)(es,{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)(ec,{children:"이용자 계약기간"}),(0,t.jsx)(ec,{children:"서비스 시작 시간"}),(0,t.jsx)(ec,{children:"서비스 종료 시간"}),(0,t.jsx)(ec,{children:"-"})]})}),(0,t.jsx)("tbody",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)(eo,{children:d}),(0,t.jsx)(eo,{children:eM(e.serviceStartTime)}),(0,t.jsx)(eo,{children:eM(e.serviceEndTime)}),(0,t.jsx)(eo,{children:a?null:(0,t.jsx)(ex,{children:"계약기간 아님"})})]})})]})})]})})}function eE({selectedAnomaly:e,onClose:i}){if(null===e)return null;let{anomaly:n,records:r}=e;if("recordIds"in n&&"consecutivePayment"===n.category)return(0,t.jsx)(ey,{anomaly:n,records:r,onClose:i});if("recordIds"in n&&"overtimeOverEightHours"===n.category)return(0,t.jsx)(eI,{anomaly:n,records:r,onClose:i});if("recordIds"in n&&"restTimeViolation"===n.category)return(0,t.jsx)(eN,{anomaly:n,records:r,onClose:i});if(!("recordIds"in n)&&"earlyQuitRounding"===n.category){let e=r[0];return void 0===e?null:(0,t.jsx)(ev,{record:e,onClose:i})}if(!("recordIds"in n)&&"cardholderSuspiciousNormalPayment"===n.category){let e=r[0];return void 0===e?null:(0,t.jsx)(eg,{record:e,onClose:i})}if(!("recordIds"in n)&&"cardholderSuspiciousRetroPayment"===n.category)return void 0===r[0]?null:(0,t.jsx)(eb,{record:e.record,records:r,onClose:i});if(!("recordIds"in n)&&"nightPayment"===n.category){let e=r[0];return void 0===e?null:(0,t.jsx)(e_,{record:e,onClose:i})}if(!("recordIds"in n)&&"overOneMinute"===n.category)return void 0===r[0]?null:(0,t.jsx)(eS,{anomaly:n,onClose:i});if(!("recordIds"in n)&&"terminatedServicePayment"===n.category){let e=r[0];return void 0===e?null:(0,t.jsx)(eO,{record:e,onClose:i})}return null}let eA=l.default.div.withConfig({componentId:"zh__sc-9f7aca56-0"})`
  overflow: auto hidden;
  flex: 1 1 auto;

  width: 100%;
  min-width: 0;
  max-width: 100%;
`,eP=l.default.div.withConfig({componentId:"zh__sc-9f7aca56-1"})`
  display: flex;
  flex-direction: column;
  gap: 24px;

  width: max-content;
  min-width: 100%;
  min-height: 100%;
`,eV=l.default.div.withConfig({componentId:"zh__sc-9f7aca56-2"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;

  height: 48px;
`,eH=l.default.h2.withConfig({componentId:"zh__sc-9f7aca56-3"})`
  font-size: 20px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #131416;
`,eR=l.default.span.withConfig({componentId:"zh__sc-9f7aca56-4"})`
  display: flex;
  align-items: flex-start;

  padding: 4px 10px;
  border-radius: 999px;

  font-size: 13px;
  font-weight: 500;
  font-style: normal;
  line-height: 18px; /* 138.462% */
  color: #1d58d1;

  background: #ecf2ff;
`,eW=l.default.div.withConfig({componentId:"zh__sc-9f7aca56-5"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: center;

  height: 186px;
  padding: 16px;
  border: 1px solid #e5e9ef;
  border-radius: 8px;

  color: #494f53;

  background: #fff;
`,eF=l.default.div.withConfig({componentId:"zh__sc-9f7aca56-6"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
`,eX=l.default.p.withConfig({componentId:"zh__sc-9f7aca56-7"})`
  margin: 0;
  font-weight: 700;
`,eY=l.default.p.withConfig({componentId:"zh__sc-9f7aca56-8"})`
  margin: 0;
`,eB=l.default.div.withConfig({componentId:"zh__sc-9f7aca56-9"})`
  display: flex;
  gap: 16px;
  align-items: stretch;

  width: max-content;
  min-width: 100%;
`,eQ=(0,n.observer)(function(){let{data:e}=d.default.data.serviceWorker.activityAnomalyReport,n=e?.workers??[],l=n.length,[a,s]=(0,r.useState)(null),[c,o]=(0,r.useState)(null),h=n.find(e=>e.serviceWorkerId===a);return(0,t.jsxs)(eA,{children:[(0,t.jsxs)(eP,{children:[(0,t.jsxs)(eV,{children:[(0,t.jsx)(eH,{children:"검색 결과 (제공 인력)"}),(0,t.jsxs)(eR,{children:["총 ",l,"명"]})]}),0===n.length?(0,t.jsxs)(eW,{children:[(0,t.jsx)(i.default,{sx:{fontSize:24,color:"#494f53"}}),(0,t.jsxs)(eF,{children:[(0,t.jsx)(eX,{children:"검색 결과가 없습니다."}),(0,t.jsx)(eY,{children:"의심 내역 조건을 선택하고 검색 버튼을 클릭해주세요."})]})]}):(0,t.jsxs)(eB,{children:[(0,t.jsx)(B,{workers:n,selectedWorkerId:a,onSelect:s}),(0,t.jsx)(u,{worker:h,categoryLevels:e?.categoryLevels,onAnomalyClick:(e,t,i)=>o({anomaly:e,records:t,record:i})})]})]}),(0,t.jsx)(eE,{selectedAnomaly:c,onClose:()=>o(null)})]})});e.s(["default",0,eQ],99840)},11303,e=>{"use strict";var t=e.i(9735),i=e.i(39635);e.i(3159);var n=e.i(46907),r=e.i(7744),l=e.i(24045),d=e.i(38803),a=e.i(64954),s=e.i(43174),c=e.i(61526);let o=d.default.div.withConfig({componentId:"zh__sc-25bfd78c-0"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`,h=d.default.div.withConfig({componentId:"zh__sc-25bfd78c-1"})`
  display: flex;
  gap: 12px;
  align-items: center;
`,x=d.default.h2.withConfig({componentId:"zh__sc-25bfd78c-2"})`
  margin: 0;

  font-size: 20px;
  font-weight: 700;
  line-height: normal;
  color: #0a0a0a;
  letter-spacing: -0.5px;
  white-space: nowrap;
`,f=d.default.div.withConfig({componentId:"zh__sc-25bfd78c-3"})`
  display: flex;
  gap: 4px;
  align-items: center;
  color: #464c53;
`,p=d.default.span.withConfig({componentId:"zh__sc-25bfd78c-4"})`
  font-size: 18px;
  line-height: 20px;
  white-space: nowrap;
`,u=d.default.div.withConfig({componentId:"zh__sc-25bfd78c-5"})`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: flex-end;
`,g=d.default.span.withConfig({componentId:"zh__sc-25bfd78c-6"})`
  overflow: hidden;

  font-size: 14px;
  line-height: normal;
  color: #737380;
  text-overflow: ellipsis;
  white-space: nowrap;
`,j=d.default.div.withConfig({componentId:"zh__sc-25bfd78c-7"})`
  width: 1px;
  height: 24px;
  background: #d1d1d9;
`,m=(0,d.default)(a.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-25bfd78c-8"})`
  display: flex;
  gap: 8px;
  align-items: center;

  height: 44px;
  padding: 8px 16px;

  font-size: 16px;
  font-weight: 500;
  white-space: nowrap;
`,b=(0,n.observer)(function(){let[e,n]=(0,r.useState)(!1),d=s.default.serviceWorker.serviceRecord.lastImportedDate;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(o,{children:[(0,t.jsxs)(h,{children:[(0,t.jsx)(x,{children:"부정결제 찾기"}),(0,t.jsxs)(f,{children:[(0,t.jsx)(i.default,{sx:{fontSize:20}}),(0,t.jsx)(p,{children:"검색조건을 사용해 이상 결제 의심 건을 검색합니다."})]})]}),(0,t.jsxs)(u,{children:[(0,t.jsxs)(g,{children:["가장 최근 업로드 일자: ",d??"-"]}),(0,t.jsx)(j,{}),(0,t.jsxs)(m,{type:"button",onClick:()=>n(!0),children:[(0,t.jsx)(l.Upload,{size:16}),"전자바우처 업로드하기"]})]})]}),e?(0,t.jsx)(c.default,{onClose:()=>n(!1)}):null]})});e.s(["default",0,b])}]);