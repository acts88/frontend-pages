(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,24655,e=>{"use strict";var t=e.i(38797),n=e.i(9735);let l=(0,t.default)((0,n.jsx)("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check");e.s(["default",0,l])},69375,e=>{"use strict";var t=e.i(9735);e.i(3159);var n=e.i(46907),l=e.i(7665),i=e.i(7744),o=e.i(4153);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}).apply(this,arguments)}var r=(0,i.forwardRef)(function(e,t){var n=e.color,l=e.size,o=void 0===l?24:l,r=function(e,t){if(null==e)return{};var n,l,i=function(e,t){if(null==e)return{};var n,l,i={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(e,["color","size"]);return i.default.createElement("svg",a({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},r),i.default.createElement("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),i.default.createElement("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),i.default.createElement("polyline",{points:"21 15 16 10 5 21"}))});r.propTypes={color:o.default.string,size:o.default.oneOfType([o.default.string,o.default.number])},r.displayName="Image";var c=e.i(22803),d=e.i(98273),s=e.i(43174),f=e.i(24655);let h=(0,e.i(38797).default)((0,t.jsx)("path",{fillRule:"evenodd",d:"M4 11h16v2H4z"}),"HorizontalRule");function p({status:e,onClick:n,disabled:l=!1}){return(0,t.jsx)(u,{$status:e,$disabled:l,onClick:l?void 0:n,children:"checked"===e?(0,t.jsx)(f.default,{sx:{fontSize:18}}):"indeterminate"===e?(0,t.jsx)(h,{sx:{fontSize:20}}):null})}let u=c.default.div.withConfig({componentId:"zh__sc-8f5badb2-0"})`
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
`,g={EMPTY:{badge:{label:"데이터 없음",color:"black"},action:{label:"파일 미첨부",color:"black"}},AUTO_CREATED:{badge:{label:"사용/출력 대기",color:"blue"},action:{label:"서류 작성 시작하기",color:"blue"}},NEED_DETAIL:{badge:{label:"업데이트 필요",color:"orange"},action:{label:"수기 서류 업로드하기",color:"orange"}},NEED_REVIEW:{badge:{label:"초안 검토 필요",color:"orange",icon:(0,t.jsx)(d.default.WandShine,{size:16})},action:{label:"서류 최종 확인하기",color:"orange"}},CONFIRMED:{badge:{label:"전산 완료",color:"gray"},action:{label:"문서 확인하기",color:"blue"}},COMPLETED:{badge:{label:"전산 완료",color:"gray"},action:{label:"문서 확인하기",color:"blue"}}},x=(0,n.observer)(function(){let e=s.default.client.info.byClient.docs,n=e.selectedTemplateIdSet,{toggleSelectedTemplateId:i,addSelectedTemplateIds:o,removeSelectedTemplateIds:a}=e,c=e.documentByTemplateId,d=s.default.client.info.byClient.selectedClientId,f=Array.from(new Set(e.templates.map(e=>e.id))).filter(e=>c.has(e)),h=f.filter(e=>n.has(e)).length,u=0===f.length||0===h?"unchecked":h===f.length?"checked":"indeterminate";return null===d?"no client selected":(0,t.jsxs)(b,{children:[(0,t.jsxs)(v,{onClick:()=>{"checked"===u?a(f):o(f)},children:[(0,t.jsx)(p,{status:u}),"전체 선택하기"]}),e.templateTypeGroups.map(e=>{let{type:d,typeLabel:f,templates:h}=e,u=h.map(e=>e.id).filter(e=>c.has(e)),x=new Set(u),b=u.filter(e=>n.has(e)).length,v=0===u.length||0===b?"unchecked":b===u.length?"checked":"indeterminate";return(0,t.jsxs)(m,{children:[(0,t.jsxs)(y,{onClick:()=>{"checked"===v?a([...x]):o([...x])},children:[(0,t.jsx)(p,{status:v}),"[",f,"]"]}),(0,t.jsx)(w,{children:h.map((e,o)=>{let{id:a,name:d,templateImagePath:f}=e,h=n.has(a),u=f?.[0]??null,x=c.get(a)??null,b=null!==x,m=null===x?g.EMPTY:g[x.status];return(0,t.jsxs)(j,{children:[(0,t.jsx)(z,{children:(0,t.jsx)(p,{status:h?"checked":"unchecked",disabled:!b,onClick:()=>i(a)})}),(0,t.jsxs)(k,{$color:m.badge.color,children:[m.badge.icon,m.badge.label]}),(0,t.jsx)(_,{children:null!==u&&""!==u?(0,t.jsx)(l.default,{src:u,width:210,height:297,style:{width:"auto",height:"90%",maxWidth:"90%",objectFit:"contain"},loading:0===o?"eager":"lazy",alt:d}):(0,t.jsx)(r,{size:40,color:"#D1D5DC"})}),(0,t.jsxs)(C,{children:[(0,t.jsx)(I,{children:(0,t.jsx)(E,{children:d})}),(0,t.jsx)(S,{$color:m.action.color,disabled:"black"===m.action.color,onClick:()=>{null!==x&&s.default.modal.documentView.open(x.id)},children:m.action.label})]})]},a)})})]},d)})]})}),b=c.default.div.withConfig({componentId:"zh__sc-8c32d1eb-0"})`
  overflow-y: auto;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 20px;

  width: 100%;
  min-height: 0;
`,m=c.default.div.withConfig({componentId:"zh__sc-8c32d1eb-1"})`
  display: flex;
  flex-direction: column;
  gap: 9px;
  align-items: flex-start;
  align-self: stretch;
`,y=c.default.div.withConfig({componentId:"zh__sc-8c32d1eb-2"})`
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
`,v=c.default.button.withConfig({componentId:"zh__sc-8c32d1eb-3"})`
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
`,w=c.default.div.withConfig({componentId:"zh__sc-8c32d1eb-4"})`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: stretch;
  align-self: stretch;
`,j=c.default.div.withConfig({componentId:"zh__sc-8c32d1eb-5"})`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 188px;
  height: 232px;
  border: 1px solid #d1d5dc;
  border-radius: 8px;

  background: #fff;
`,z=c.default.div.withConfig({componentId:"zh__sc-8c32d1eb-6"})`
  position: absolute;
  top: 8px;
  left: 8px;
`,k=c.default.div.withConfig({componentId:"zh__sc-8c32d1eb-7"})`
  position: absolute;
  top: 8px;
  right: 8px;

  display: flex;
  gap: 2px;
  align-items: flex-start;

  padding: 4px 6px;
  border-radius: 99px;

  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  line-height: 16px; /* 114.286% */
  color: #fff;
  text-align: center;

  background: ${({$color:e})=>{switch(e){case"orange":return"#FF6900";case"gray":return"#77798B";case"black":return"#0a0a0a";case"blue":return"#2264E8"}}};
`,_=c.default.div.withConfig({componentId:"zh__sc-8c32d1eb-8"})`
  overflow: hidden;
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: center;

  height: 140px;
  border-radius: 7px 7px 0 0;

  background: #f3f4f6;
`,C=c.default.div.withConfig({componentId:"zh__sc-8c32d1eb-9"})`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  gap: 2px;
  align-items: center;
  align-self: stretch;
  justify-content: center;

  padding: 8px;
`,I=c.default.div.withConfig({componentId:"zh__sc-8c32d1eb-10"})`
  display: flex;
  gap: 10px;
  align-items: center;
  align-self: stretch;
  justify-content: center;
`,E=c.default.div.withConfig({componentId:"zh__sc-8c32d1eb-11"})`
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
`,S=c.default.button.withConfig({componentId:"zh__sc-8c32d1eb-12"})`
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

  background: ${({$color:e})=>{switch(e){case"orange":return"#FF6900";case"gray":return"#77798B";case"black":return"#0A0A0A";default:return"#2264E8"}}};

  &:disabled {
    cursor: not-allowed;
    border: 1px solid #d1d5db;
    color: #9ca3af;
    background: #f9fafb;
  }
`;e.s(["default",0,x],69375)},6689,e=>{"use strict";var t=e.i(9735);let n=(0,e.i(38797).default)([(0,t.jsx)("path",{d:"M19 8h-1V3H6v5H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3M8 5h8v3H8zm8 12v2H8v-4h8zm2-2v-2H6v2H4v-4c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v4z"},"0"),(0,t.jsx)("circle",{cx:"18",cy:"11.5",r:"1"},"1")],"PrintOutlined");e.i(3159);var l=e.i(46907),i=e.i(22803),o=e.i(64954),a=e.i(43174);let r=(0,l.observer)(function(){let{contractsOfSelectedClient:e,selectedContractId:n,setSelectedContractId:l}=a.default.client.info.byClient.docs;return(0,t.jsxs)(c,{children:[(0,t.jsx)(d,{children:"계약 회차"}),(0,t.jsx)(s,{value:n??"",disabled:0===e.length,onChange:e=>{let t=e.target.value;l(""===t?null:t)},children:e.map((n,l)=>{let i,o,a,r,c,d,s,f,h;return i=n.serviceStartDate??"",o=n.serviceEndDate??"",a=""!==i&&""!==o?`${i.replaceAll("-",".")} ~ ${o.replaceAll("-",".")}`:"-",h=`${e.length-l}차 계약 (${a})${""!==i&&""!==o&&(c=(r=new Date).getFullYear(),d=String(r.getMonth()+1).padStart(2,"0"),s=String(r.getDate()).padStart(2,"0"),i<=(f=`${c}-${d}-${s}`)&&f<=o)?" [진행중]":""}`,(0,t.jsx)("option",{value:n.id,children:h},n.id)})})]})}),c=i.default.div.withConfig({componentId:"zh__sc-2cf47013-0"})`
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: stretch;
`,d=i.default.p.withConfig({componentId:"zh__sc-2cf47013-1"})`
  margin: 0;

  font-size: 18px;
  font-weight: 500;
  font-style: normal;
  line-height: 20px; /* 111.111% */
  color: #0a0a0a;
  text-align: center;
  white-space: nowrap;
`,s=(0,i.default)(o.default.Input.Select).withConfig({componentId:"zh__sc-2cf47013-2"})`
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
`,f=(0,l.observer)(function(){let e=a.default.client.info.byClient.docs,l=e.selectedTemplateIdSet,i=Array.from(new Set(e.templates.map(e=>e.id))),o=i.length>0,c=i.filter(e=>l.has(e)).length;return(0,t.jsxs)(h,{children:[(0,t.jsx)(r,{}),(0,t.jsxs)(p,{children:[(0,t.jsxs)(u,{disabled:0===c,onClick:()=>void e.printSelectedTemplates(),children:[(0,t.jsx)(n,{sx:{fontSize:16}}),"선택한 서류 출력하기"]}),(0,t.jsxs)(u,{disabled:!o,onClick:()=>void e.printAllTemplates(),children:[(0,t.jsx)(n,{sx:{fontSize:16}}),"전체 출력하기"]})]})]})}),h=i.default.div.withConfig({componentId:"zh__sc-74fd5eaf-0"})`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;
`,p=i.default.div.withConfig({componentId:"zh__sc-74fd5eaf-1"})`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: flex-end;
`,u=(0,i.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-74fd5eaf-2"})`
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