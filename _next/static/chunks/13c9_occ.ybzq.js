(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,91292,e=>{"use strict";var t=e.i(9735),r=e.i(33261),i=e.i(22803);let o=i.default.div.withConfig({componentId:"zh__sc-3034f1f1-0"})`
  overflow: hidden;
  display: flex;
  align-items: stretch;

  width: 100%;
  border: 1px solid #b1b8be;
  border-radius: 8px;

  background: #fff;
`,n=i.default.button.withConfig({componentId:"zh__sc-3034f1f1-1"})`
  cursor: pointer;

  flex: 1;

  min-width: 80px;
  height: 56px;
  padding: 0 16px;
  border: none;

  font-size: 20px;
  font-weight: 700;
  line-height: 1.5;
  color: ${({$active:e})=>e?"#fff":"#464C53"};

  background: ${({$active:e})=>e?"#4F39F6":"transparent"};

  &:first-child {
    border-radius: 8px 0 0 8px;
  }

  &:last-child {
    border-radius: 0 8px 8px 0;
  }
`;e.s(["default",0,function(){let e=(0,r.useRouter)(),i=(0,r.usePathname)(),s=i.startsWith("/service-worker/info/by-service-worker"),d=i.startsWith("/service-worker/info/by-document");return(0,t.jsxs)(o,{children:[(0,t.jsx)(n,{type:"button",$active:s,onClick:()=>e.push("/service-worker/info/by-service-worker"),children:"활동지원사별 보기"}),(0,t.jsx)(n,{type:"button",$active:d,children:"서류기준 보기"})]})}])}]);