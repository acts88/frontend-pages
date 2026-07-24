(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,33578,e=>{"use strict";e.i(3159);var t=e.i(46907),i=e.i(33261),n=e.i(7744),l=e.i(43174);let o=(0,t.observer)(function(){let e=(0,i.usePathname)(),t=(0,i.useRouter)(),o=(0,i.useSearchParams)(),{selectedClientId:r,setSelectedClientId:s}=l.default.client.info.byClient;return(0,n.useEffect)(()=>{let e=o.get("clientId");null!==e&&""!==e.trim()&&s(e)},[o,s]),(0,n.useEffect)(()=>{if(!e)return;let i=new URLSearchParams(o.toString());if(null===r){if(!i.has("clientId"))return;i.delete("clientId")}else{if(i.get("clientId")===r)return;i.set("clientId",r)}let n=i.toString(),l=""===n?e:`${e}?${n}`;t.replace(l)},[e,t,o,r]),null});e.s(["default",0,o])},52024,e=>{"use strict";var t=e.i(9735),i=e.i(33261),n=e.i(5543),l=e.i(22803),o=e.i(64954),r=e.i(43174);let s=l.default.div.withConfig({componentId:"zh__sc-bf25427f-0"})`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;
`,c=l.default.div.withConfig({componentId:"zh__sc-bf25427f-1"})`
  display: flex;
  gap: 24px;
  align-items: center;
`,a=l.default.p.withConfig({componentId:"zh__sc-bf25427f-2"})`
  font-size: 20px;
  font-weight: 700;
  line-height: normal;
  color: #0a0a0a;
  letter-spacing: -0.5px;
  white-space: nowrap;
`,f=l.default.div.withConfig({componentId:"zh__sc-bf25427f-3"})`
  overflow: hidden;
  display: flex;

  height: 48px;
  border: 1px solid #b1b8be;
  border-radius: 8px;

  background: #fff;
`,d=l.default.button.withConfig({componentId:"zh__sc-bf25427f-4"})`
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
`,u=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-bf25427f-5"})`
  flex-shrink: 0;
  gap: 4px;

  height: 36px;
  padding: 8px 16px;

  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
`;e.s(["default",0,function(){let e=(0,i.useRouter)(),l=(0,i.usePathname)(),o=(0,i.useSearchParams)(),h=l.startsWith("/client/info/by-client/meal"),p=l.startsWith("/client/info/by-client/nutrition"),g=e=>{let t=o.toString();return""===t?e:`${e}?${t}`},{show:b}=r.default.modal.clientCreate;return(0,t.jsxs)(s,{children:[(0,t.jsxs)(c,{children:[(0,t.jsx)(a,{children:"서비스 구분"}),(0,t.jsxs)(f,{children:[(0,t.jsx)(d,{type:"button",$active:h,onClick:()=>e.push(g("/client/info/by-client/meal/basic")),children:"식사 서비스"}),(0,t.jsx)(d,{type:"button",$active:p,onClick:()=>e.push(g("/client/info/by-client/nutrition/basic")),children:"영양 서비스"})]})]}),(0,t.jsxs)(u,{type:"button",onClick:b,children:[(0,t.jsx)(n.Plus,{size:20}),"신규 이용자 등록"]})]})}])}]);