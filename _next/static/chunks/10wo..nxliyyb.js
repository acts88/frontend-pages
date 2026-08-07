(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,30127,t=>{"use strict";var e=t.i(9735),i=t.i(33261),o=t.i(22803);let n=[{path:"/organization-setting/basic",label:"기관 정보"},{path:"/organization-setting/operation",label:"서비스별 운영 설정"},{path:"/organization-setting/staff",label:"연락처∙근무자 관리"},{path:"/organization-setting/billing",label:"계좌∙카드 정보 관리"}],a=o.default.div.withConfig({componentId:"zh__sc-c18b584f-0"})`
  display: flex;
  align-self: flex-start;

  width: 100%;
  border-bottom: 1px solid #e5e7eb;

  background-color: white;
`,l=o.default.button.withConfig({componentId:"zh__sc-c18b584f-1"})`
  cursor: pointer;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 180px;
  height: 56px;

  font-size: 18px;
  font-weight: 700;
  line-height: 1.5;
  color: ${({$active:t})=>t?"#052b57":"#464c53"};

  &::after {
    content: '';

    position: absolute;
    bottom: -1px;

    display: block;

    width: 100%;
    height: 4px;

    background-color: ${({$active:t})=>t?"#052b57":"transparent"};
  }
`;t.s(["default",0,function(){let t=(0,i.usePathname)(),o=(0,i.useRouter)();return(0,e.jsx)(a,{children:n.map(({path:i,label:n})=>{let a=t.startsWith(i);return(0,e.jsx)(l,{type:"button",$active:a,onClick:()=>o.push(i),children:n},i)})})}])}]);