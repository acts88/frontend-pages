(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,57218,t=>{"use strict";var e=t.i(9735),i=t.i(33261),n=t.i(22803);let o=n.default.div.withConfig({componentId:"zh__sc-a2f26ac9-0"})`
  overflow: hidden;
  display: flex;
  align-items: stretch;

  width: 100%;
  border: 1px solid #b1b8be;
  border-radius: 8px;

  background: #fff;
`,r=n.default.button.withConfig({componentId:"zh__sc-a2f26ac9-1"})`
  cursor: pointer;

  flex: 1;

  min-width: 80px;
  height: 56px;
  padding: 0 16px;
  border: none;

  font-size: 20px;
  font-weight: 700;
  line-height: 1.5;
  color: ${({$active:t})=>t?"#fff":"#464C53"};

  background: ${({$active:t})=>t?"#4F39F6":"transparent"};

  &:first-child {
    border-radius: 8px 0 0 8px;
  }

  &:last-child {
    border-radius: 0 8px 8px 0;
  }
`;t.s(["default",0,function(){let t=(0,i.useRouter)(),n=(0,i.usePathname)(),c=n.startsWith("/client/info/by-client"),d=n.startsWith("/client/info/by-document");return(0,e.jsxs)(o,{children:[(0,e.jsx)(r,{type:"button",$active:c,onClick:()=>t.push("/client/info/by-client/meal/basic"),children:"이용자별 보기"}),(0,e.jsx)(r,{type:"button",$active:d,children:"서류기준 보기"})]})}])}]);