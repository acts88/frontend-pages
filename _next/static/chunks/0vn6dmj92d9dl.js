(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,61526,e=>{"use strict";var t=e.i(9735);e.i(3159);var i=e.i(46907),n=e.i(7744),l=e.i(15695),a=e.i(24045),o=e.i(8179),r=e.i(38803),d=e.i(23416),f=e.i(89656),s=e.i(26170),c=e.i(64954),u=e.i(74515),p=e.i(43174);let h=".xlsx",x=(0,r.default)(c.default.Button.Outlined).withConfig({componentId:"zh__sc-e3b5ea9a-0"})`
  ${f.btnStyle}
  color: #4f39f6;
`,g=(0,r.default)(f.Body).withConfig({componentId:"zh__sc-e3b5ea9a-1"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  justify-content: center;

  min-height: 457px;
  padding: 32px 24px;

  background: #f9fafb;
`,b=r.default.p.withConfig({componentId:"zh__sc-e3b5ea9a-2"})`
  width: 100%;
  margin: 0;

  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  color: #101828;
  text-align: center;
`,m=r.default.div.withConfig({componentId:"zh__sc-e3b5ea9a-3"})`
  cursor: ${({$isError:e})=>e?"default":"pointer"};

  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  justify-content: center;

  width: 100%;
  min-height: 168px;
  padding: 24px 40px;
  border: 1px solid ${({$isError:e})=>e?"#ff4d4f":"#4f39f6"};
  border-radius: 16px;

  color: ${({$isError:e})=>e?"#ff4d4f":"#4f39f6"};

  background: ${({$isDragging:e,$isError:t})=>t?"#fff5f5":e?"#f6f3ff":"#fff"};

  &:hover {
    background-color: ${({$isError:e})=>e?"#fff5f5":"#f6f3ff"};
  }

  &:active {
    background-color: ${({$isError:e})=>e?"#fff5f5":"#efeaff"};
  }
`,w=r.default.input.withConfig({componentId:"zh__sc-e3b5ea9a-4"})`
  display: none;
`,_=r.default.div.withConfig({componentId:"zh__sc-e3b5ea9a-5"})`
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: center;
`,j=r.default.div.withConfig({componentId:"zh__sc-e3b5ea9a-6"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
  align-self: stretch;
`,v=r.default.p.withConfig({componentId:"zh__sc-e3b5ea9a-7"})`
  margin: 0;

  font-size: 14px;
  font-weight: 700;
  line-height: 24px;
  color: ${({$isError:e})=>e?"#ff4d4f":"#4f39f6"};
  text-align: center;
`,y=r.default.p.withConfig({componentId:"zh__sc-e3b5ea9a-8"})`
  margin: 0;
  font-size: 14px;
  line-height: 24px;
  color: #99a1af;
`,z=r.default.div.withConfig({componentId:"zh__sc-e3b5ea9a-9"})`
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
`,C=r.default.div.withConfig({componentId:"zh__sc-e3b5ea9a-10"})`
  display: flex;
  flex-shrink: 0;
  gap: 24px;
  align-items: center;

  padding: 12px 16px;
  border-radius: 8px;

  background: #f6f8fb;
`,k=r.default.div.withConfig({componentId:"zh__sc-e3b5ea9a-11"})`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
`,I=r.default.p.withConfig({componentId:"zh__sc-e3b5ea9a-12"})`
  overflow: hidden;

  max-width: 196px;

  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: #0a0a0a;
  text-overflow: ellipsis;
  white-space: nowrap;
`,$=r.default.p.withConfig({componentId:"zh__sc-e3b5ea9a-13"})`
  font-size: 16px;
  font-weight: 400;
  line-height: 18px;
  color: #0a0a0a;
`,R=r.default.button.withConfig({componentId:"zh__sc-e3b5ea9a-14"})`
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
`,T=(0,r.default)(c.default.Button.Outlined).withConfig({componentId:"zh__sc-e3b5ea9a-15"})`
  height: 36px;
  padding: 8px 16px;
`,B=(0,r.default)(c.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-e3b5ea9a-16"})`
  gap: 4px;
  height: 36px;
  padding: 8px 16px;
  border-radius: 4px;
`,D=(0,i.observer)(function({onClose:e}){var i;let r=(0,n.useRef)(null),[c,D]=(0,n.useState)(null),[S,L]=(0,n.useState)(!1),[O,H]=(0,n.useState)(!1),[P,W]=(0,n.useState)(!1),A=(0,n.useRef)(null),E=()=>{null!==A.current&&(clearTimeout(A.current),A.current=null)},U=()=>{E(),D(null),L(!1),H(!1),W(!1),e()},q=e=>{if(null!==e){if(!e.name.toLowerCase().endsWith(h)){D(null),E(),H(!0),A.current=setTimeout(()=>{H(!1),A.current=null},2e3);return}E(),D(e),H(!1)}},F=()=>{E(),D(null),L(!1),H(!1)};(0,u.default)(e=>{q(e[0]??null)});let K=async()=>{if(null===c||P)return;W(!0);let[e]=await d.default.data.serviceWorker.importActivityRecordsExcel({file:c});if(W(!1),null!==e)return void p.default.ui.layout.toast.error(e.message??"파일 업로드에 실패했습니다. 잠시 후 다시 시도해 주세요.",3e3);let t=p.default.data.serviceWorker.activityRecordList;null!==t.query&&await t.refetch();let i=p.default.data.serviceWorker.activityRecordsLastImportedDate;null!==i.query&&await i.refetch(),p.default.ui.layout.toast.success("파일 업로드를 완료했습니다.",3e3),U()};return(0,t.jsx)(s.default,{children:(0,t.jsxs)(f.Container,{children:[(0,t.jsxs)(f.Header,{children:[(0,t.jsx)(f.HeaderLeft,{children:(0,t.jsx)(f.HeaderTitle,{children:"전자바우처(엑셀) 업로드하기"})}),(0,t.jsx)(f.HeaderRight,{children:(0,t.jsxs)(x,{type:"button",onClick:U,children:[(0,t.jsx)(o.X,{size:20}),"닫기"]})})]}),(0,t.jsxs)(g,{children:[(0,t.jsx)(b,{children:"[바우처 이용내역 조회(신규)] 엑셀 파일을 업로드해주세요."}),(0,t.jsxs)(m,{$isDragging:S,$isError:O,onClick:()=>r.current?.click(),onDragOver:e=>{e.preventDefault(),L(!0)},onDragLeave:()=>L(!1),onDrop:e=>{e.preventDefault(),L(!1),q(e.dataTransfer.files?.[0]??null)},children:[(0,t.jsx)(w,{ref:r,type:"file",accept:h,onChange:e=>{q(e.target.files?.[0]??null),e.target.value=""}}),null!==c||O||P?null:(0,t.jsx)(_,{children:(0,t.jsx)(a.Upload,{size:26,color:"#4f39f6"})}),null!==c?(0,t.jsx)(z,{children:(0,t.jsxs)(C,{children:[(0,t.jsxs)(k,{children:[(0,t.jsx)(I,{children:c.name}),(0,t.jsx)($,{children:(i=c.size,`${Math.ceil(i/1024/1024)}MB`)})]}),(0,t.jsxs)(R,{type:"button",onClick:e=>{e.stopPropagation(),F()},disabled:P,children:["삭제",(0,t.jsx)(o.X,{size:16})]})]})}):null,(0,t.jsxs)(j,{children:[(0,t.jsx)(v,{$isError:O,children:O?"지원하지 않는 파일 형식입니다.":S?"파일을 여기에 놓으면 업로드 됩니다.":"이곳에 파일을 끌어다 놓거나 (드래그 앤 드롭), 클릭하여 업로드하세요."}),(0,t.jsx)(y,{children:null===c||O||P?"지원 파일 형식: 엑셀(.xlsx)":"새 파일을 업로드하면 기존 파일이 교체됩니다."})]})]})]}),(0,t.jsxs)(f.Footer,{children:[(0,t.jsx)(T,{type:"button",onClick:F,disabled:null===c||P,children:"다시 업로드하기"}),(0,t.jsxs)(B,{type:"button",onClick:()=>void K(),disabled:null===c||P,children:[(0,t.jsx)(l.Check,{size:20}),P?"업로드 중":"업로드 완료하기"]})]})]})})});e.s(["default",0,D])}]);