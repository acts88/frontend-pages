(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,76792,e=>{"use strict";var t=e.i(9735),n=e.i(7744),i=e.i(24045),o=e.i(8179),l=e.i(22803);let r=l.default.div.withConfig({componentId:"zh__sc-db86611e-0"})`
  pointer-events: ${({$isBlocked:e})=>e?"none":"auto"};
  cursor: ${({$isBlocked:e})=>e?"default":"pointer"};

  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: ${({$hasFiles:e})=>e?"stretch":"center"};
  justify-content: ${({$hasFiles:e})=>e?"center":"flex-start"};

  width: 1489px;
  height: 202px;
  padding: 24px 40px;
  border-color: ${({$isInvalidFile:e})=>e?"#ff4d4f":"#4F39F6"};
  border-style: ${({$isInvalidFile:e,$isDragging:t})=>e?"solid":t?"dashed":"solid"};
  border-width: 1px;
  border-radius: 16px;

  background: ${({$isInvalidFile:e,$isDragging:t})=>e?"#fff5f5":t?"#f6f3ff":"#fff"};

  &:hover {
    background: ${({$isBlocked:e,$isInvalidFile:t})=>e?t?"#fff5f5":"#fff":"#f6f3ff"};
  }
`,d=l.default.div.withConfig({componentId:"zh__sc-db86611e-1"})`
  overflow-x: auto;
  display: flex;
  gap: 12px;
  align-items: flex-start;

  width: 100%;

  &::-webkit-scrollbar {
    display: none;
  }
`,a=l.default.div.withConfig({componentId:"zh__sc-db86611e-2"})`
  display: flex;
  flex-shrink: 0;
  gap: 12px;
  align-items: center;

  padding: 12px 16px;
  border-radius: 8px;

  background: #f6f8fb;
`,f=l.default.div.withConfig({componentId:"zh__sc-db86611e-3"})`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
`,s=l.default.p.withConfig({componentId:"zh__sc-db86611e-4"})`
  overflow: hidden;

  max-width: 180px;

  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: #0a0a0a;
  text-overflow: ellipsis;
  white-space: nowrap;
`,c=l.default.p.withConfig({componentId:"zh__sc-db86611e-5"})`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: #0a0a0a;
`,p=l.default.button.withConfig({componentId:"zh__sc-db86611e-6"})`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;

  padding: 8px;
  border: 1px solid #45464e;
  border-radius: 999px;

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
    background: #e5e7eb;
  }
`,h=l.default.div.withConfig({componentId:"zh__sc-db86611e-7"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;

  width: 100%;
`,x=l.default.p.withConfig({componentId:"zh__sc-db86611e-8"})`
  font-size: 20px;
  font-weight: 700;
  font-style: normal;
  line-height: 24px; /* 120% */
  color: ${({$isInvalidFile:e})=>e?"#ff4d4f":"#4F39F6"};
  text-align: center;
`,u=l.default.p.withConfig({componentId:"zh__sc-db86611e-9"})`
  font-size: 20px;
  font-weight: 700;
  font-style: normal;
  line-height: 24px; /* 120% */
  color: #99a1af;
`,g=l.keyframes`
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
`,m=l.default.div.withConfig({componentId:"zh__sc-db86611e-10"})`
  position: relative;

  overflow: hidden;

  width: 362px;
  height: 8px;
  border-radius: 999px;

  background: #e6e0ff;
`,b=l.default.div.withConfig({componentId:"zh__sc-db86611e-11"})`
  position: absolute;
  top: 0;
  left: 0;
  transform-origin: left center;

  width: 290px;
  height: 8px;
  border-top-left-radius: 999px;
  border-bottom-left-radius: 999px;

  background: #5635ff;

  animation: ${g} 2s linear forwards;
`,w=l.default.input.withConfig({componentId:"zh__sc-db86611e-12"})`
  display: none;
`,_=l.default.p.withConfig({componentId:"zh__sc-db86611e-13"})`
  margin-top: 12px;
  padding: 12px 16px;
  border: 1px solid #fca5a5;
  border-radius: 4px;

  font-size: 14px;
  font-weight: 500;
  color: #991b1b;
  overflow-wrap: anywhere;
  white-space: pre-wrap;

  background: #fef2f2;
`;e.s(["default",0,function(){let[e,l]=(0,n.useState)([]),[g,v]=(0,n.useState)(!1),[j,z]=(0,n.useState)(!1),[$,y]=(0,n.useState)(""),[C,I]=(0,n.useState)(!1),k=(0,n.useRef)(null),F=(0,n.useRef)(null),T=[".jpg",".jpeg",".png",".heic",".mp3",".wav",".m4a",".aac",".hwp",".hwpx",".doc",".docx",".txt",".pdf",".xls",".xlsx"],D=e.length>0,P=T.join(","),S=e=>{let t=[],n=[];return e.forEach(e=>{var i;let o,l=-1===(o=(i=e.name).lastIndexOf("."))?"":i.slice(o).toLowerCase();T.includes(l)?e.size>0x6400000?n.push(`${e.name}: 파일 크기가 100MB를 초과합니다.`):t.push(e):n.push(`${e.name}: 지원하지 않는 파일 형식입니다.`)}),{valid:t,errors:n}},B=()=>{F.current&&clearTimeout(F.current),I(!0),v(!1),F.current=setTimeout(()=>{I(!1),F.current=null},2e3)},A=e=>{0!==e.length&&(z(!0),setTimeout(()=>{l(t=>[...t,...e]),z(!1)},2e3))};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(w,{ref:k,type:"file",multiple:!0,accept:P,onChange:e=>{let t=Array.from(e.target.files||[]),{valid:n,errors:i}=S(t);if(t.length>0&&n.length!==t.length){B(),y(""),e.target.value="";return}i.length>0?y(i.join("\n")):y(""),A(n)}}),(0,t.jsxs)(r,{onClick:()=>{j||C||k.current?.click()},onDragOver:e=>{e.preventDefault(),e.stopPropagation(),j||C||v(!0)},onDragLeave:e=>{e.preventDefault(),e.stopPropagation(),v(!1)},onDrop:e=>{if(e.preventDefault(),e.stopPropagation(),j||C)return;v(!1);let t=Array.from(e.dataTransfer.files),{valid:n,errors:i}=S(t);if(t.length>0&&n.length!==t.length){B(),y("");return}i.length>0?y(i.join("\n")):y(""),A(n)},$isDragging:g,$isBlocked:j||C,$hasFiles:D,$isInvalidFile:C,children:[!C&&!D&&(0,t.jsx)(i.Upload,{size:32,color:"#4F39F6"}),D&&(0,t.jsx)(d,{children:e.map((e,n)=>{let i;return(0,t.jsxs)(a,{children:[(0,t.jsxs)(f,{children:[(0,t.jsx)(s,{children:e.name}),(0,t.jsx)(c,{children:(i=e.size,`${Math.ceil(i/1024/1024)}MB`)})]}),(0,t.jsxs)(p,{type:"button",onClick:e=>{e.stopPropagation(),l(e=>e.filter((e,t)=>t!==n))},children:["삭제",(0,t.jsx)(o.X,{size:16})]})]},`${e.name}-${e.lastModified}-${e.size}`)})}),(0,t.jsxs)(h,{children:[(0,t.jsx)(x,{$isInvalidFile:C,children:C?"지원하지 않는 파일 형식입니다.":j?"파일을 업로드 하는 중입니다.":D?"이곳에 파일을 끌어다 놓거나 (드래그 앤 드롭), 클릭하여 업로드하세요.":g?"파일을 여기에 놓으면 업로드 됩니다.":"이곳에 파일을 끌어다 놓거나 (드래그 앤 드롭), 클릭하여 업로드하세요."}),(0,t.jsx)(u,{children:D?"추가 파일도 계속 업로드할 수 있습니다.":"지원 파일 형식: 사진 이미지, 서류, 음성 녹음"}),j&&(0,t.jsx)(m,{children:(0,t.jsx)(b,{})})]})]}),!C&&$&&(0,t.jsx)(_,{children:$})]})}])},39797,e=>{"use strict";var t=e.i(9735),n=e.i(22803);let i=[{color:"#6366f1",count:55,name:"유지"},{color:"#10b981",count:15,name:"신규신청"},{color:"#ef4444",count:10,name:"종료"},{color:"#fcbf36",count:3,name:"재신청"}],o=n.default.div.withConfig({componentId:"zh__sc-4dbbf02c-0"})`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  gap: 8px;

  width: 237px;
  height: 100%;
`,l=n.default.div.withConfig({componentId:"zh__sc-4dbbf02c-1"})`
  display: flex;
  gap: 4px;
  align-items: center;

  width: 100%;

  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  color: #0a0a0a;
`,r=n.default.div.withConfig({componentId:"zh__sc-4dbbf02c-2"})`
  display: flex;
  flex: 1 0 0;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-height: 220px;
`,d=n.default.div.withConfig({componentId:"zh__sc-4dbbf02c-3"})`
  overflow: hidden;
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  gap: 1px;
  align-items: flex-start;

  width: 100%;
  height: 100%;
  border-radius: 4px;
`,a=n.default.div.withConfig({componentId:"zh__sc-4dbbf02c-4"})`
  display: flex;
  flex: ${({$flex:e})=>e};
  align-items: center;
  justify-content: center;

  width: 100%;

  background: ${({$color:e})=>e};
`,f=n.default.p.withConfig({componentId:"zh__sc-4dbbf02c-5"})`
  margin: 0;

  font-size: 16px;
  font-weight: 600;
  line-height: 16px;
  color: #fff;
  white-space: nowrap;
`;e.s(["default",0,function(){let e=i.reduce((e,t)=>e+t.count,0);return(0,t.jsxs)(o,{children:[(0,t.jsx)(l,{children:`총 ${e}명`}),(0,t.jsx)(r,{children:(0,t.jsx)(d,{children:i.map(n=>(0,t.jsx)(a,{$color:n.color,$flex:n.count,children:(0,t.jsx)(f,{children:`${n.name} ${(n.count/e*100).toFixed(1)}% (${n.count}명)`})},n.name))})})]})}])}]);