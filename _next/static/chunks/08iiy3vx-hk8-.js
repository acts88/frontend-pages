(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,44237,e=>{"use strict";var t=e.i(9735),n=e.i(7744),i=e.i(22803),d=e.i(64954),a=e.i(87239);let o=i.default.div.withConfig({componentId:"zh__sc-adb993a-0"})`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`,l=i.default.main.withConfig({componentId:"zh__sc-adb993a-1"})`
  display: flex;
  flex-direction: column;
  gap: 20px;

  width: min(960px, 100%);
  padding: 24px;
`,s=i.default.header.withConfig({componentId:"zh__sc-adb993a-2"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,c=i.default.h1.withConfig({componentId:"zh__sc-adb993a-3"})`
  margin: 0;
  font-size: 24px;
  font-weight: 700;
  color: #111827;
`,h=i.default.p.withConfig({componentId:"zh__sc-adb993a-4"})`
  margin: 0;
  font-size: 14px;
  color: #4b5563;
`,r=i.default.section.withConfig({componentId:"zh__sc-adb993a-5"})`
  display: flex;
  flex-direction: column;
  gap: 10px;

  padding: 12px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;

  background: #fff;
`,p=i.default.button.withConfig({componentId:"zh__sc-adb993a-6"})`
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 0;
  border: 0;

  background: transparent;

  &:disabled {
    cursor: default;
  }
`,f=i.default.h2.withConfig({componentId:"zh__sc-adb993a-7"})`
  margin: 0;
  font-size: 16px;
  font-weight: 700;
  color: #111827;
`,u=i.default.span.withConfig({componentId:"zh__sc-adb993a-8"})`
  font-size: 12px;
  font-weight: 600;
  color: #4b5563;
`,x=i.default.div.withConfig({componentId:"zh__sc-adb993a-9"})`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,m=i.default.p.withConfig({componentId:"zh__sc-adb993a-10"})`
  margin: 0;
  font-size: 13px;
  font-weight: 600;
  color: #374151;
`,g=(0,i.default)(d.default.Input.Timetable).withConfig({componentId:"zh__sc-adb993a-11"})`
  max-width: 920px;
`,b=(0,i.default)(d.default.Input.TimeSlider).withConfig({componentId:"zh__sc-adb993a-12"})`
  max-width: 920px;
`;e.s(["default",0,function(){let[e,i]=(0,n.useState)([]),[d,_]=(0,n.useState)(()=>(0,a.createEmptyTimeSliderValue)()),[w,j]=(0,n.useState)(()=>new Set),C=e=>{j(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n})};return(0,t.jsx)(o,{children:(0,t.jsxs)(l,{children:[(0,t.jsxs)(s,{children:[(0,t.jsx)(c,{children:"Input Devtool"}),(0,t.jsx)(h,{children:"Input.Timetable 드래그 선택/해제 동작을 확인합니다."})]}),(0,t.jsxs)(r,{children:[(0,t.jsxs)(p,{type:"button",onClick:()=>{C("timetable")},children:[(0,t.jsx)(f,{children:"Input.Timetable"}),(0,t.jsx)(u,{children:w.has("timetable")?"닫기":"열기"})]}),w.has("timetable")?(0,t.jsxs)(x,{children:[(0,t.jsxs)(m,{children:["선택된 슬롯: ",e?.length??0]}),(0,t.jsx)(g,{value:e,onChange:e=>{i(e.target.value)}})]}):null]}),(0,t.jsxs)(r,{children:[(0,t.jsxs)(p,{type:"button",onClick:()=>{C("time-slider")},children:[(0,t.jsx)(f,{children:"Input.TimeSlider"}),(0,t.jsx)(u,{children:w.has("time-slider")?"닫기":"열기"})]}),w.has("time-slider")?(0,t.jsx)(x,{children:(0,t.jsx)(b,{value:d,onChange:e=>{_(e.target.value)}})}):null]})]})})}])}]);