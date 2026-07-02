(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,33578,e=>{"use strict";e.i(3159);var t=e.i(46907),n=e.i(33261),i=e.i(7744),r=e.i(43174);let l=(0,t.observer)(function(){let e=(0,n.usePathname)(),t=(0,n.useRouter)(),l=(0,n.useSearchParams)(),{selectedClientId:o,setSelectedClientId:a}=r.default.client.info.byClient;return(0,i.useEffect)(()=>{let e=l.get("clientId");null!==e&&""!==e.trim()&&a(e)},[l,a]),(0,i.useEffect)(()=>{if(!e)return;let n=new URLSearchParams(l.toString());if(null===o){if(!n.has("clientId"))return;n.delete("clientId")}else{if(n.get("clientId")===o)return;n.set("clientId",o)}let i=n.toString(),r=""===i?e:`${e}?${i}`;t.replace(r)},[e,t,l,o]),null});e.s(["default",0,l])},52024,e=>{"use strict";var t=e.i(9735),n=e.i(33261),i=e.i(7744),r=e.i(4153);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var o=(0,i.forwardRef)(function(e,t){var n=e.color,r=e.size,o=void 0===r?24:r,a=function(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}(e,["color","size"]);return i.default.createElement("svg",l({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),i.default.createElement("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),i.default.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}))});o.propTypes={color:r.default.string,size:r.default.oneOfType([r.default.string,r.default.number])},o.displayName="Plus";var a=e.i(22803),s=e.i(64954),f=e.i(43174);let c=a.default.div.withConfig({componentId:"zh__sc-bf25427f-0"})`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;
`,u=a.default.div.withConfig({componentId:"zh__sc-bf25427f-1"})`
  display: flex;
  gap: 24px;
  align-items: center;
`,d=a.default.p.withConfig({componentId:"zh__sc-bf25427f-2"})`
  font-size: 20px;
  font-weight: 700;
  line-height: normal;
  color: #0a0a0a;
  letter-spacing: -0.5px;
  white-space: nowrap;
`,p=a.default.div.withConfig({componentId:"zh__sc-bf25427f-3"})`
  overflow: hidden;
  display: flex;

  height: 48px;
  border: 1px solid #b1b8be;
  border-radius: 8px;

  background: #fff;
`,h=a.default.button.withConfig({componentId:"zh__sc-bf25427f-4"})`
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
`,g=(0,a.default)(s.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-bf25427f-5"})`
  flex-shrink: 0;
  gap: 4px;

  height: 36px;
  padding: 8px 16px;

  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
`;e.s(["default",0,function(){let e=(0,n.useRouter)(),i=(0,n.usePathname)(),r=(0,n.useSearchParams)(),l=i.startsWith("/client/info/by-client/meal"),a=i.startsWith("/client/info/by-client/nutrition"),s=e=>{let t=r.toString();return""===t?e:`${e}?${t}`},{show:b}=f.default.modal.clientCreate;return(0,t.jsxs)(c,{children:[(0,t.jsxs)(u,{children:[(0,t.jsx)(d,{children:"서비스 구분"}),(0,t.jsxs)(p,{children:[(0,t.jsx)(h,{type:"button",$active:l,onClick:()=>e.push(s("/client/info/by-client/meal/basic")),children:"식사 서비스"}),(0,t.jsx)(h,{type:"button",$active:a,onClick:()=>e.push(s("/client/info/by-client/nutrition/basic")),children:"영양 서비스"})]})]}),(0,t.jsxs)(g,{type:"button",onClick:b,children:[(0,t.jsx)(o,{size:20}),"신규 이용자 등록"]})]})}],52024)}]);