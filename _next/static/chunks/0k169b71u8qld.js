(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,69375,e=>{"use strict";var t=e.i(9735);e.i(3159);var n=e.i(46907),i=e.i(7665),l=e.i(7744),o=e.i(4153);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var a=(0,l.forwardRef)(function(e,t){var n=e.color,i=e.size,o=void 0===i?24:i,a=function(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,["color","size"]);return l.default.createElement("svg",r({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),l.default.createElement("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),l.default.createElement("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),l.default.createElement("polyline",{points:"21 15 16 10 5 21"}))});a.propTypes={color:o.default.string,size:o.default.oneOfType([o.default.string,o.default.number])},a.displayName="Image";var c=e.i(22803),d=e.i(71274),s=e.i(70888),f=e.i(9670),p=e.i(43174),h=e.i(24655);let u=(0,e.i(38797).default)((0,t.jsx)("path",{fillRule:"evenodd",d:"M4 11h16v2H4z"}),"HorizontalRule");function g({status:e,onClick:n,disabled:i=!1}){return(0,t.jsx)(x,{$status:e,$disabled:i,onClick:i?void 0:n,children:"checked"===e?(0,t.jsx)(h.default,{sx:{fontSize:18}}):"indeterminate"===e?(0,t.jsx)(u,{sx:{fontSize:20}}):null})}let x=c.default.div.withConfig({componentId:"zh__sc-8f5badb2-0"})`
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
`;function m(e,t){return 0===t||0===e?"unchecked":e===t?"checked":"indeterminate"}let b=(0,n.observer)(function({template:e,isChecked:n,hasDocument:o,statusChangeToken:r,toggleSelectedTemplateId:c}){let{id:h,name:u,templateImagePath:x}=e,m=x?.[0]??null,b=p.default.client.info.byClient.docs.documentByTemplateId.get(h)??null,y=(0,d.getDocumentStatusUi)(b?.displayStatus),v=o&&(0,s.canSelectDocumentInList)(b?.displayStatus),{ref:w,fire:j}=(0,f.default)(),z=(0,l.useRef)(r);return(0,l.useEffect)(()=>{if(r<=z.current){z.current=r;return}z.current=r,j()},[j,r]),(0,t.jsxs)(C,{ref:w,children:[(0,t.jsx)(_,{children:(0,t.jsx)(g,{status:n?"checked":"unchecked",disabled:!v,onClick:()=>c(h)})}),(0,t.jsxs)(I,{$color:y.badge.color,children:[y.badge.icon,y.badge.label]}),(0,t.jsx)(S,{children:null!==m&&""!==m?(0,t.jsx)(i.default,{src:m,width:210,height:297,style:{width:"auto",height:"90%",maxWidth:"90%",objectFit:"contain"},loading:"eager",alt:u}):(0,t.jsx)(a,{size:40,color:"#D1D5DC"})}),(0,t.jsxs)(O,{children:[(0,t.jsx)($,{children:(0,t.jsx)(T,{children:u})}),(0,t.jsx)(D,{$color:y.action.color,disabled:!0===y.action.disabled||"black"===y.action.color,onClick:()=>{null!==b&&p.default.modal.documentView.open(b.id)},children:y.action.label})]})]})}),y=(0,n.observer)(function(){let e=p.default.client.info.byClient.docs,n=e.selectedTemplateIdSet,{toggleSelectedTemplateId:i,addSelectedTemplateIds:l,removeSelectedTemplateIds:o}=e,r=e.documentByTemplateId,a=p.default.client.info.byClient.selectedClientId,c=e=>{let t=r.get(e)??null;return null!==t&&(0,s.canSelectDocumentInList)(t.displayStatus)},d=Array.from(new Set(e.templates.map(e=>e.id))),f=d.filter(e=>c(e)),h=m(d.filter(e=>n.has(e)).length,d.length),u=m(f.filter(e=>n.has(e)).length,f.length);return null===a?"no client selected":(0,t.jsxs)(v,{children:[(0,t.jsxs)(z,{onClick:()=>{"checked"===u?o(f):l(f)},children:[(0,t.jsx)(g,{status:h}),"전체 선택하기"]}),e.templateTypeGroups.map(a=>{let{type:d,typeLabel:s,templates:f}=a,p=f.map(e=>e.id),h=p.filter(e=>c(e)),u=new Set(h),x=m(p.filter(e=>n.has(e)).length,p.length),y=m(h.filter(e=>n.has(e)).length,h.length);return(0,t.jsxs)(w,{children:[(0,t.jsxs)(j,{onClick:()=>{"checked"===y?o([...u]):l([...u])},children:[(0,t.jsx)(g,{status:x}),"[",s,"]"]}),(0,t.jsx)(k,{children:f.map(l=>{let{id:o}=l,a=n.has(o),c=r.get(o)??null;return(0,t.jsx)(b,{template:l,isChecked:a,hasDocument:null!==c,statusChangeToken:e.getDocumentStatusChangeToken(o),toggleSelectedTemplateId:i},o)})})]},d)})]})}),v=c.default.div.withConfig({componentId:"zh__sc-8c32d1eb-0"})`
  overflow-y: auto;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 20px;

  width: 100%;
  min-height: 0;
`,w=c.default.div.withConfig({componentId:"zh__sc-8c32d1eb-1"})`
  display: flex;
  flex-direction: column;
  gap: 9px;
  align-items: flex-start;
  align-self: stretch;
`,j=c.default.div.withConfig({componentId:"zh__sc-8c32d1eb-2"})`
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
`,z=c.default.button.withConfig({componentId:"zh__sc-8c32d1eb-3"})`
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
`,k=c.default.div.withConfig({componentId:"zh__sc-8c32d1eb-4"})`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: stretch;
  align-self: stretch;
`,C=c.default.div.withConfig({componentId:"zh__sc-8c32d1eb-5"})`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 188px;
  height: 232px;
  border: 1px solid #d1d5dc;
  border-radius: 8px;

  background: #fff;
`,_=c.default.div.withConfig({componentId:"zh__sc-8c32d1eb-6"})`
  position: absolute;
  top: 8px;
  left: 8px;
`,I=c.default.div.withConfig({componentId:"zh__sc-8c32d1eb-7"})`
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
`,S=c.default.div.withConfig({componentId:"zh__sc-8c32d1eb-8"})`
  overflow: hidden;
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: center;

  height: 140px;
  border-radius: 7px 7px 0 0;

  background: #f3f4f6;
`,O=c.default.div.withConfig({componentId:"zh__sc-8c32d1eb-9"})`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  gap: 2px;
  align-items: center;
  align-self: stretch;
  justify-content: center;

  padding: 8px;
`,$=c.default.div.withConfig({componentId:"zh__sc-8c32d1eb-10"})`
  display: flex;
  gap: 10px;
  align-items: center;
  align-self: stretch;
  justify-content: center;
`,T=c.default.div.withConfig({componentId:"zh__sc-8c32d1eb-11"})`
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
`,D=c.default.button.withConfig({componentId:"zh__sc-8c32d1eb-12"})`
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
`;e.s(["default",0,y],69375)},6689,e=>{"use strict";var t=e.i(9735);let n=(0,e.i(38797).default)([(0,t.jsx)("path",{d:"M19 8h-1V3H6v5H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3M8 5h8v3H8zm8 12v2H8v-4h8zm2-2v-2H6v2H4v-4c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v4z"},"0"),(0,t.jsx)("circle",{cx:"18",cy:"11.5",r:"1"},"1")],"PrintOutlined");e.i(3159);var i=e.i(46907),l=e.i(22803),o=e.i(64954),r=e.i(43174);let a=(0,i.observer)(function(){let{contractsOfSelectedClient:e,selectedContractId:n,setSelectedContractId:i}=r.default.client.info.byClient.docs;return(0,t.jsxs)(c,{children:[(0,t.jsx)(d,{children:"계약 회차"}),(0,t.jsx)(s,{value:n??"",disabled:0===e.length,onChange:e=>{let t=e.target.value;i(""===t?null:t)},children:e.map((n,i)=>{let l,o,r,a,c,d,s,f,p;return l=n.serviceStartDate??"",o=n.serviceEndDate??"",r=""!==l&&""!==o?`${l.replaceAll("-",".")} ~ ${o.replaceAll("-",".")}`:"-",p=`${e.length-i}차 계약 (${r})${""!==l&&""!==o&&(c=(a=new Date).getFullYear(),d=String(a.getMonth()+1).padStart(2,"0"),s=String(a.getDate()).padStart(2,"0"),l<=(f=`${c}-${d}-${s}`)&&f<=o)?" [진행중]":""}`,(0,t.jsx)("option",{value:n.id,children:p},n.id)})})]})}),c=l.default.div.withConfig({componentId:"zh__sc-2cf47013-0"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;
`,d=l.default.p.withConfig({componentId:"zh__sc-2cf47013-1"})`
  margin: 0;

  font-size: 18px;
  font-weight: 500;
  font-style: normal;
  line-height: 20px; /* 111.111% */
  color: #0a0a0a;
  text-align: center;
  white-space: nowrap;
`,s=(0,l.default)(o.default.Input.Select).withConfig({componentId:"zh__sc-2cf47013-2"})`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 36px;
  border: 1px solid #e5e9ef;
  border-radius: 6px;

  font-size: 18px;
  line-height: 20px; /* 111.111% */
  color: #0a0a0a;

  background-color: #fff;
  background-position: right 10px center;
  background-size: 12px;

  &:hover,
  &:focus {
    background-position: right 10px center;
    background-size: 12px;
  }
`,f=(0,i.observer)(function(){let e=r.default.client.info.byClient.docs,i=e.selectedTemplateIdSet,l=Array.from(new Set(e.templates.map(e=>e.id))),o=l.length>0,c=l.filter(e=>i.has(e)).length;return(0,t.jsxs)(p,{children:[(0,t.jsx)(a,{}),(0,t.jsxs)(h,{children:[(0,t.jsxs)(u,{disabled:0===c,onClick:()=>void e.printSelectedTemplates(),children:[(0,t.jsx)(n,{sx:{fontSize:16}}),"선택한 서류 출력하기"]}),(0,t.jsxs)(u,{disabled:!o,onClick:()=>void e.printAllTemplates(),children:[(0,t.jsx)(n,{sx:{fontSize:16}}),"전체 출력하기"]})]})]})}),p=l.default.div.withConfig({componentId:"zh__sc-74fd5eaf-0"})`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;
`,h=l.default.div.withConfig({componentId:"zh__sc-74fd5eaf-1"})`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: flex-end;
`,u=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-74fd5eaf-2"})`
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
`;e.s(["default",0,f],6689)}]);