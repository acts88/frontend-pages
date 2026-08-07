(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,92091,e=>{"use strict";var t=e.i(38797),n=e.i(9735);let i=(0,t.default)([(0,n.jsx)("path",{d:"M19 8h-1V3H6v5H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3M8 5h8v3H8zm8 12v2H8v-4h8zm2-2v-2H6v2H4v-4c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v4z"},"0"),(0,n.jsx)("circle",{cx:"18",cy:"11.5",r:"1"},"1")],"PrintOutlined");e.s(["default",0,i])},41326,e=>{"use strict";var t=e.i(9735),n=e.i(24655);let i=(0,e.i(38797).default)((0,t.jsx)("path",{fillRule:"evenodd",d:"M4 11h16v2H4z"}),"HorizontalRule");var l=e.i(22803);let o=l.default.div.withConfig({componentId:"zh__sc-8f5badb2-0"})`
  cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};

  display: flex;
  align-items: center;
  justify-content: center;

  width: 24px;
  height: 24px;
  padding: 2px;
  border: 1px solid #58616a;
  border-color: ${({$status:e})=>"unchecked"===e?"#58616a":"#256EF4"};
  border-radius: 4px;

  color: #fff;

  background: ${({$status:e})=>"unchecked"===e?"#fff":"#256EF4"};
`;e.s(["default",0,function({status:e,onClick:l,disabled:a=!1}){return(0,t.jsx)(o,{$status:e,$disabled:a,onClick:a?void 0:l,children:"checked"===e?(0,t.jsx)(n.default,{sx:{fontSize:18}}):"indeterminate"===e?(0,t.jsx)(i,{sx:{fontSize:20}}):null})}],41326)},69375,e=>{"use strict";var t=e.i(9735);e.i(3159);var n=e.i(46907),i=e.i(7665),l=e.i(7744),o=e.i(4153);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var r=(0,l.forwardRef)(function(e,t){var n=e.color,i=e.size,o=void 0===i?24:i,r=function(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["color","size"]);return l.default.createElement("svg",a({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},r),l.default.createElement("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),l.default.createElement("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),l.default.createElement("polyline",{points:"21 15 16 10 5 21"}))});r.propTypes={color:o.default.string,size:o.default.oneOfType([o.default.string,o.default.number])},r.displayName="Image";var d=e.i(22803),c=e.i(71274),s=e.i(70888),f=e.i(9670),u=e.i(43174),p=e.i(41326);function h(e,t){return 0===t||0===e?"unchecked":e===t?"checked":"indeterminate"}let g=(0,n.observer)(function({template:e,isChecked:n,hasDocument:o,statusChangeToken:a,toggleSelectedTemplateId:d}){let{id:h,name:g,templateImagePath:x}=e,m=x?.[0]??null,b=u.default.client.info.byClient.docs.documentStatusByTemplateId.get(h)??null,y=u.default.client.info.byClient.docs.documentByTemplateId.get(h)??null,v=(0,c.getDocumentStatusUi)(b),T=o&&(0,s.canSelectDocumentInList)(y?.displayStatus),{ref:O,fire:B}=(0,f.default)(),F=(0,l.useRef)(a);return(0,l.useEffect)(()=>{if(a<=F.current){F.current=a;return}F.current=a,B()},[B,a]),(0,t.jsxs)(w,{ref:O,children:[(0,t.jsx)(j,{children:(0,t.jsx)(p.default,{status:n?"checked":"unchecked",disabled:!T,onClick:()=>d(h)})}),(0,t.jsxs)(k,{$color:v.badge.color,children:[v.badge.icon,v.badge.label]}),(0,t.jsx)(C,{children:null!==m&&""!==m?(0,t.jsx)(i.default,{src:m,width:210,height:297,style:{width:"auto",height:"90%",maxWidth:"90%",objectFit:"contain"},loading:"eager",alt:g}):(0,t.jsx)(r,{size:40,color:"#D1D5DC"})}),(0,t.jsxs)(z,{children:[(0,t.jsx)(_,{children:(0,t.jsx)(I,{children:g})}),(0,t.jsx)(S,{$color:v.action.color,disabled:!0===v.action.disabled||"black"===v.action.color,onClick:()=>{if(null===y){"WAITING_TO_DRAFT"===b&&u.default.modal.documentView.openTemplateWithoutDocument(e.id);return}u.default.modal.documentView.open(y.id)},children:v.action.label})]})]})}),x=(0,n.observer)(function(){let e=u.default.client.info.byClient.docs,n=e.selectedTemplateIdSet,{toggleSelectedTemplateId:i,addSelectedTemplateIds:l,removeSelectedTemplateIds:o}=e,a=e.documentByTemplateId;return null===u.default.client.info.byClient.selectedClientId?"no client selected":(0,t.jsx)(m,{children:e.templateTypeGroups.map(r=>{let{type:d,typeLabel:c,templates:f}=r,u=f.map(e=>e.id),x=u.filter(e=>{let t;return null!==(t=a.get(e)??null)&&(0,s.canSelectDocumentInList)(t.displayStatus)}),m=new Set(x),w=h(u.filter(e=>n.has(e)).length,u.length),j=h(x.filter(e=>n.has(e)).length,x.length);return(0,t.jsxs)(b,{children:[(0,t.jsxs)(y,{onClick:()=>{"checked"===j?o([...m]):l([...m])},children:[(0,t.jsx)(p.default,{status:w}),"[",c,"]"]}),(0,t.jsx)(v,{children:f.map(l=>{let{id:o}=l,r=n.has(o),d=a.get(o)??null;return(0,t.jsx)(g,{template:l,isChecked:r,hasDocument:null!==d,statusChangeToken:e.getDocumentStatusChangeToken(o),toggleSelectedTemplateId:i},o)})})]},d)})})}),m=d.default.div.withConfig({componentId:"zh__sc-8c32d1eb-0"})`
  overflow-y: auto;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 20px;

  width: 100%;
  min-height: 0;
`,b=d.default.div.withConfig({componentId:"zh__sc-8c32d1eb-1"})`
  display: flex;
  flex-direction: column;
  gap: 9px;
  align-items: flex-start;
  align-self: stretch;
`,y=d.default.div.withConfig({componentId:"zh__sc-8c32d1eb-2"})`
  cursor: pointer;

  display: flex;
  gap: 8px;
  align-items: center;

  font-size: 18px;
  font-weight: 500;
  font-style: normal;
  line-height: 20px; /* 142.857% */
  color: #0a0a0a;
  text-align: center;
`,v=d.default.div.withConfig({componentId:"zh__sc-8c32d1eb-3"})`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: stretch;
  align-self: stretch;
`,w=d.default.div.withConfig({componentId:"zh__sc-8c32d1eb-4"})`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 188px;
  height: 232px;
  border: 1px solid #d1d5dc;
  border-radius: 8px;

  background: #fff;
`,j=d.default.div.withConfig({componentId:"zh__sc-8c32d1eb-5"})`
  position: absolute;
  top: 8px;
  left: 8px;
`,k=d.default.div.withConfig({componentId:"zh__sc-8c32d1eb-6"})`
  position: absolute;
  top: 8px;
  right: 8px;

  display: flex;
  gap: 2px;
  align-items: center;

  padding: 4px 6px;
  border-radius: 99px;

  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  line-height: 16px; /* 114.286% */
  color: #fff;
  text-align: center;

  background: ${({$color:e})=>{switch(e){case"lightBlue":return"#9FBFFF";case"orange":return"#FF6900";case"gray":return"#77798B";case"black":return"#0a0a0a";case"blue":return"#2264E8"}}};
`,C=d.default.div.withConfig({componentId:"zh__sc-8c32d1eb-7"})`
  overflow: hidden;
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: center;

  height: 140px;
  border-radius: 7px 7px 0 0;

  background: #f3f4f6;
`,z=d.default.div.withConfig({componentId:"zh__sc-8c32d1eb-8"})`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  gap: 2px;
  align-items: center;
  align-self: stretch;
  justify-content: center;

  padding: 8px;
`,_=d.default.div.withConfig({componentId:"zh__sc-8c32d1eb-9"})`
  display: flex;
  gap: 10px;
  align-items: center;
  align-self: stretch;
  justify-content: center;
`,I=d.default.div.withConfig({componentId:"zh__sc-8c32d1eb-10"})`
  overflow: hidden;
  display: -webkit-box;
  flex: 1 0 0;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;

  height: 45px;

  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 1.3;
  color: #0a0a0a;
  white-space: normal;
`,S=d.default.button.withConfig({componentId:"zh__sc-8c32d1eb-11"})`
  display: flex;
  gap: 10px;
  align-items: center;
  align-self: stretch;
  justify-content: center;

  height: 32px;
  border-radius: 4px;

  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  color: #fff;
  text-align: center;

  background: ${({$color:e})=>{switch(e){case"indigo":return"#505794";case"orange":return"#FF6900";case"gray":return"#77798B";case"black":return"#0A0A0A";default:return"#2264E8"}}};

  &:disabled {
    cursor: not-allowed;
    border: 1px solid #d1d5db;
    color: #9ca3af;
    background: #f9fafb;
  }
`;e.s(["default",0,x],69375)},6689,e=>{"use strict";var t=e.i(9735),n=e.i(92091);e.i(3159);var i=e.i(46907),l=e.i(22803),o=e.i(64954),a=e.i(70888),r=e.i(43174),d=e.i(41326);let c=(0,i.observer)(function(){var e,i;let l=r.default.client.info.byClient.docs,o=l.selectedTemplateIdSet,c=l.documentByTemplateId,h=Array.from(new Set(l.templates.map(e=>e.id))),g=h.filter(e=>{let t=c.get(e)??null;return null!==t&&(0,a.canSelectDocumentInList)(t.displayStatus)}),x=(e=g.filter(e=>o.has(e)).length,0===(i=g.length)||0===e?"unchecked":e===i?"checked":"indeterminate"),m=h.length>0,b=h.filter(e=>o.has(e)).length;return(0,t.jsxs)(s,{children:[(0,t.jsxs)(u,{onClick:()=>{"checked"===x?l.removeSelectedTemplateIds(g):l.addSelectedTemplateIds(g)},children:[(0,t.jsx)(d.default,{status:x}),"전체 선택하기"]}),(0,t.jsxs)(f,{children:[(0,t.jsxs)(p,{disabled:0===b,onClick:()=>void l.printSelectedTemplates(),children:[(0,t.jsx)(n.default,{sx:{fontSize:16}}),"선택한 서류 출력하기"]}),(0,t.jsxs)(p,{disabled:!m,onClick:()=>void l.printAllTemplates(),children:[(0,t.jsx)(n.default,{sx:{fontSize:16}}),"전체 출력하기"]})]})]})}),s=l.default.div.withConfig({componentId:"zh__sc-74fd5eaf-0"})`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;
`,f=l.default.div.withConfig({componentId:"zh__sc-74fd5eaf-1"})`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: flex-end;
`,u=l.default.button.withConfig({componentId:"zh__sc-74fd5eaf-2"})`
  cursor: pointer;

  display: flex;
  gap: 8px;
  align-items: center;

  width: fit-content;
  padding: 0;
  border: 0;

  font-size: 18px;
  font-weight: 500;
  font-style: normal;
  line-height: 20px;
  color: #0a0a0a;
  text-align: center;

  background: transparent;
`,p=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-74fd5eaf-3"})`
  display: flex;
  gap: 4px;
  align-items: center;

  height: 40px;
  padding: 8px 16px;

  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: 20px; /* 125% */
  color: #4f39f6;
  text-align: center;
`;e.s(["default",0,c])}]);