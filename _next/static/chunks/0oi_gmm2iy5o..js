(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,36308,e=>{"use strict";var t=e.i(9735),i=e.i(33261),d=e.i(7744),o=e.i(22803),r=e.i(23416),l=e.i(25699),n=e.i(28124);function a({selectedPage:e,scale:i,selectedPageFields:d,selectedPageEditableFields:o,hoveredFieldId:r,onSelectFieldId:g}){return(0,t.jsx)(h,{children:null===e?(0,t.jsx)(f,{children:"선택한 페이지가 없습니다."}):(0,t.jsx)(s,{$scale:Number(i)/100||1,children:(0,t.jsxs)(p,{children:[(0,t.jsx)(l.default,{imagePath:e.imagePath,fields:d,resolveAssistButtonLabel:({triggerKey:e})=>e===n.default.SOURCE_CLICK_AUTOCOMPLETE_SERVICE_END_REPORT_USER_CHANGE_LEVEL_BUTTON||e===n.default.SOURCE_CLICK_AUTOCOMPLETE_CASE_MANAGEMENT_RECORD_CASE_CONTENT_BUTTON?"자동으로 문장 생성하기":"어시스트 버튼"}),(0,t.jsx)(c,{children:o.map(e=>(0,t.jsx)(u,{style:e.uiProps.style,title:`${e.fieldKey} (${e.uiProps.fieldType})`,"aria-label":`${e.fieldKey} (${e.uiProps.fieldType})`,$active:r===e.id,$editable:e.uiProps.editable??!1,onClick:()=>g?.(e.id)},e.id))})]})})})}let s=o.default.div.withConfig({componentId:"zh__sc-31575765-0"})`
  transform-origin: top left;
  transform: scale(${({$scale:e})=>e});
  width: fit-content;
`,p=o.default.div.withConfig({componentId:"zh__sc-31575765-1"})`
  position: relative;
  width: fit-content;
`,c=o.default.div.withConfig({componentId:"zh__sc-31575765-2"})`
  position: absolute;
  inset: 0;
`,u=o.default.div.withConfig({componentId:"zh__sc-31575765-3"})`
  cursor: pointer;

  position: absolute;

  box-sizing: border-box;
  border: 1px dashed ${({$active:e})=>e?"#2563eb":"transparent"};
  border-radius: 2px;

  background: ${({$active:e,$editable:t})=>e?t?"rgb(37 99 235 / 12%)":"rgb(107 114 128 / 28%)":t?"rgb(37 99 235 / 6%)":"rgb(107 114 128 / 18%)"};

  &:hover {
    border-color: #2563eb;
    background: ${({$editable:e})=>e?"rgb(37 99 235 / 14%)":"rgb(107 114 128 / 32%)"};
  }
`,h=o.default.div.withConfig({componentId:"zh__sc-31575765-4"})`
  overflow: auto;
  display: flex;
  flex: 1;
  align-items: flex-start;
  justify-content: center;

  min-height: 0;
  padding: 16px;
  border: 1px solid #e5e7eb;
  border-radius: 12px;

  background: #e5e7eb;
`,f=o.default.div.withConfig({componentId:"zh__sc-31575765-5"})`
  padding: 12px 16px;
  font-size: 14px;
  color: #6b7280;
`;function g({isOpen:e,templates:i,selectedTemplateIds:d,onToggleTemplate:o,onClose:r,onPrint:l}){return!1===e?null:(0,t.jsx)(x,{onClick:()=>{r()},children:(0,t.jsxs)(y,{onClick:e=>{e.stopPropagation()},children:[(0,t.jsx)(m,{children:"출력 템플릿 선택"}),(0,t.jsx)(b,{children:i.map(e=>{let i=d.includes(e.id);return(0,t.jsxs)(v,{children:[(0,t.jsx)(j,{type:"checkbox",checked:i,onChange:()=>{o(e.id)}}),(0,t.jsx)(P,{children:e.name})]},e.id)})}),(0,t.jsxs)(w,{children:[(0,t.jsx)(C,{type:"button",onClick:()=>{r()},children:"취소"}),(0,t.jsx)(C,{type:"button",$primary:!0,disabled:0===d.length,onClick:()=>{l()},children:"출력"})]})]})})}let x=o.default.div.withConfig({componentId:"zh__sc-ef6b6d0c-0"})`
  position: fixed;
  z-index: 10;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 16px;

  background: rgb(15 23 42 / 40%);
`,y=o.default.div.withConfig({componentId:"zh__sc-ef6b6d0c-1"})`
  display: flex;
  flex-direction: column;
  gap: 16px;

  width: min(480px, 100%);
  max-height: 70vh;
  padding: 20px;
  border-radius: 12px;

  background: #fff;
`,m=o.default.h3.withConfig({componentId:"zh__sc-ef6b6d0c-2"})`
  margin: 0;
  font-size: 16px;
  font-weight: 700;
  color: #111827;
`,b=o.default.div.withConfig({componentId:"zh__sc-ef6b6d0c-3"})`
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;

  padding: 6px 2px;
`,v=o.default.label.withConfig({componentId:"zh__sc-ef6b6d0c-4"})`
  cursor: pointer;

  display: flex;
  gap: 10px;
  align-items: center;

  padding: 8px 10px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;

  background: #f9fafb;
`,j=o.default.input.withConfig({componentId:"zh__sc-ef6b6d0c-5"})`
  width: 16px;
  height: 16px;
`,P=o.default.div.withConfig({componentId:"zh__sc-ef6b6d0c-6"})`
  font-size: 14px;
  color: #111827;
`,w=o.default.div.withConfig({componentId:"zh__sc-ef6b6d0c-7"})`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`,C=o.default.button.withConfig({componentId:"zh__sc-ef6b6d0c-8"})`
  cursor: pointer;

  height: 36px;
  padding: 0 14px;
  border: 1px solid ${({$primary:e})=>!0===e?"#1d4ed8":"#d1d5db"};
  border-radius: 8px;

  font-size: 14px;
  font-weight: 700;
  color: ${({$primary:e})=>!0===e?"#fff":"#374151"};

  background: ${({$primary:e})=>!0===e?"#2563eb":"#fff"};

  &:disabled {
    cursor: not-allowed;
    opacity: 0.55;
  }
`;var _=e.i(71371);function I({fields:e,scale:i="100",onUpdateField:o,onSaveField:r,onHoverFieldId:l,selectedFieldId:a,onSelectFieldId:s}){let p,c,u,h=96/25.4*210,f=96/25.4*297,g="0.026",x=["text","money","date","select","check","radio","textarea","month-with-year","multi-date","image"],[y,m]=(0,d.useState)(null),b=a??y,v=(0,d.useRef)(new Map),[j,P]=(0,d.useState)(!1),[w,C]=(0,d.useState)(!1),[ex,ey]=(0,d.useState)({}),[em,eb]=(0,d.useState)({}),[ev,ej]=(0,d.useState)({}),[eP,ew]=(0,d.useState)({}),eC=e=>e in n.default,e_=(0,d.useMemo)(()=>Object.keys(n.default).filter(eC).filter(e=>"function"!=typeof n.default[e]),[]),eI=(0,d.useMemo)(()=>[...e].sort((e,t)=>e.page!==t.page?e.page-t.page:e.fieldKey!==t.fieldKey?e.fieldKey.localeCompare(t.fieldKey):e.id.localeCompare(t.id)),[e]),ez=(0,d.useMemo)(()=>{let t=e.find(e=>e.id===b);if(void 0!==t)return{...t,uiProps:{...t.uiProps,style:t.uiProps.style??{}}}},[e,b]);(0,d.useEffect)(()=>{if(null===b)return;let e=v.current.get(b);void 0!==e&&e.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},[b]);let eS=e=>x.some(t=>t===e),ek=(e,t)=>{let i={style:t.style??{},editable:t.editable??!1,triggerKeys:t.triggerKeys,assistUiComponents:t.assistUiComponents,label:t.label};switch(e){case"text":return{...i,fieldType:"text"};case"money":return{...i,fieldType:"money"};case"date":return{...i,fieldType:"date",disableHolidaySelection:"date"===t.fieldType&&t.disableHolidaySelection,isDotDateFormat:"date"===t.fieldType&&t.isDotDateFormat};case"select":return{...i,fieldType:"select",options:"select"===t.fieldType?t.options:[{value:"",label:""}]};case"check":return{...i,fieldType:"check"};case"radio":return{...i,fieldType:"radio",groupKey:"radio"===t.fieldType?t.groupKey:""};case"textarea":return{...i,fieldType:"textarea",placeholder:"textarea"===t.fieldType?t.placeholder:void 0};case"month-with-year":return{...i,fieldType:"month-with-year"};case"multi-date":return{...i,fieldType:"multi-date"};case"image":return{...i,fieldType:"image"};default:return t}},eT=(e,t)=>{let i;if(!ez)return;i="fontSize"===e?t?`calc(210mm * ${t})`:"":"lineHeight"===e||"textAlign"===e?t:t?`${t}%`:"";let d={...ez,uiProps:{...ez.uiProps,style:{...ez.uiProps.style,[e]:i}}};o(ez.id,d)},e$=e=>{let t=e.trim();if(""===t)return;let i=Number(t);return Number.isFinite(i)?i:void 0},eK=()=>({name:"",sortOrder:void 0}),eO=e=>{if(!ez)return;let t=e(ez.uiProps.label);o(ez.id,{...ez,uiProps:{...ez.uiProps,label:t}})},eA=(e,t)=>`${e}::${t.join("-")}`,eR=e=>{if(!ez)return;let t=e(ez.uiProps.assistUiComponents??[]);o(ez.id,{...ez,uiProps:{...ez.uiProps,assistUiComponents:t}})},eN=(e,t,i)=>{let[d,...o]=t;return void 0===d?e:e.map((e,t)=>t!==d?e:0===o.length?i(e):"container"!==e.type?e:{...e,children:eN(e.children,o,i)})},eF=(e,t)=>{let[i,...d]=t;return void 0===i?e:0===d.length?e.filter((e,t)=>t!==i):e.map((e,t)=>t!==i||"container"!==e.type?e:{...e,children:eF(e.children,d)})},eL=(e,t,i)=>{if(!ez||"select"!==ez.uiProps.fieldType)return;let d=ez.uiProps.options.map((d,o)=>o===e?{...d,[t]:i}:d);o(ez.id,{...ez,uiProps:{...ez.uiProps,options:d}})},eE=(e,t)=>{if(!ez)return;let i={...ez.uiProps.style};t?i[e]=i[e]??"1.5%":delete i[e],o(ez.id,{...ez,uiProps:{...ez.uiProps,style:i}})},eD=e=>{if(null==e)return"";let t=String(e);if(t.includes("calc(")){let e=t.match(/calc\(210mm \* ([^)]+)\)/);return e?.[1]??""}return t.replace("%","")},eM=(e,t)=>{let i=eD(e);return""===i?t:i},eU=(e,t,d="x")=>{let o=Number(i)/100||1,r=void 0===t?eD(e):eM(e,t);if(""===r)return"-";let l=(0,_.parseLengthToPx)(`${r}%`,{pageWidthPx:"x"===d?h:f}),n=null===l?"-":`${(l*o).toFixed(1)}px`;return`${r}% / ${n}`},eH=async()=>{if(!ez)return;let{width:e,height:t,fontSize:i,lineHeight:d,left:o,top:r,textAlign:l,padding:n,paddingLeft:a,paddingRight:s,borderRadius:p}=ez.uiProps.style,c=[`fieldType: '${ez.uiProps.fieldType}',`,`width: '${String(e??"")}',`,`height: '${String(t??"")}',`,`fontSize: '${String(i??"")}',`,`lineHeight: '${String(d??"")}',`,`left: '${String(o??"")}',`,`top: '${String(r??"")}',`];if(l&&c.push(`textAlign: '${String(l)}',`),void 0!==n&&""!==n&&c.push(`padding: '${String(n)}',`),void 0!==a&&""!==a&&c.push(`paddingLeft: '${String(a)}',`),void 0!==s&&""!==s&&c.push(`paddingRight: '${String(s)}',`),void 0!==p&&""!==p&&c.push(`borderRadius: '${String(p)}',`),"radio"===ez.uiProps.fieldType&&c.push(`groupKey: '${String(ez.uiProps.groupKey)}',`),"date"===ez.uiProps.fieldType&&(c.push(`disableHolidaySelection: ${String(ez.uiProps.disableHolidaySelection)},`),c.push(`isDotDateFormat: ${String(ez.uiProps.isDotDateFormat)},`)),"select"===ez.uiProps.fieldType){let e=JSON.stringify(ez.uiProps.options);c.push(`options: ${e},`)}"textarea"===ez.uiProps.fieldType&&c.push(`placeholder: ${JSON.stringify(ez.uiProps.placeholder??{})},`);let u=c.join("\n");await navigator.clipboard.writeText(u),P(!0),window.setTimeout(()=>{P(!1)},1200)},eJ=e=>!("object"!=typeof e||null===e||Array.isArray(e)||!("text"in e)||"string"!=typeof e.text||"style"in e&&void 0!==e.style&&("object"!=typeof e.style||null===e.style||Array.isArray(e.style))),eB=async e=>{try{let t,i=await navigator.clipboard.readText(),d=(e=>{let t=new Set(["width","height","fontSize","lineHeight","left","top","textAlign","padding","paddingLeft","paddingRight","borderRadius","fieldType","groupKey","disableHolidaySelection","isDotDateFormat","options","placeholder"]),i={};for(let d of e.matchAll(/([a-zA-Z]+)\s*:\s*'([^']*)'/g)){let e=d[1],o=d[2];void 0!==e&&void 0!==o&&t.has(e)&&(i[e]=o)}for(let d of e.matchAll(/([a-zA-Z]+)\s*:\s*(true|false)/g)){let e=d[1],o="true"===d[2];void 0!==e&&t.has(e)&&(i[e]=o)}let d=e.match(/options:\s*(\[[\s\S]*?\])/m);if(d)try{let e=d[1];if(void 0===e)return i;let t=JSON.parse(e);Array.isArray(t)&&(i.options=t)}catch{}let o=e.match(/placeholder:\s*(\{[\s\S]*?\})/m);if(o)try{let e=o[1];if(void 0!==e){let t=JSON.parse(e);eJ(t)&&(i.placeholder={text:t.text,...void 0===t.style?{}:{style:t.style}})}}catch{}return i})(i);if(0===Object.keys(d).length)return;let r=new Set(["width","height","fontSize","lineHeight","left","top","textAlign","padding","paddingLeft","paddingRight","borderRadius"]),l={},n={};for(let[e,t]of Object.entries(d))"fieldType"!==e&&(r.has(e)?l[e]=String(t):n[e]=t);let a=d.fieldType,s="string"==typeof a&&eS(a)?a:e.uiProps.fieldType,p=ek(s,e.uiProps),c={...p.style,...l};if("radio"===p.fieldType)t={...p,style:c,groupKey:"string"==typeof n.groupKey?n.groupKey:p.groupKey};else if("date"===p.fieldType)t={...p,style:c,disableHolidaySelection:"boolean"==typeof n.disableHolidaySelection?n.disableHolidaySelection:p.disableHolidaySelection,isDotDateFormat:"boolean"==typeof n.isDotDateFormat?n.isDotDateFormat:p.isDotDateFormat};else if("select"===p.fieldType)t={...p,style:c,options:Array.isArray(n.options)?n.options:p.options};else if("textarea"===p.fieldType){let e=n.placeholder,i=eJ(e)?""===e.text.trim()?void 0:e:"string"==typeof e?""===e.trim()?void 0:{text:e}:p.placeholder;t={...p,style:c,placeholder:i}}else t={...p,style:c};o(e.id,{...e,uiProps:t})}catch{}},eV=(e,i,d=0)=>{let o=`${ez?.id??"field"}-assist-${i.join("-")}`,r=void 0===ez?"":eA(ez.id,i);return(0,t.jsxs)(Y,{style:{marginLeft:12*d},children:[(0,t.jsxs)(ee,{children:[(0,t.jsx)(el,{children:"Type"}),(0,t.jsx)(V,{type:"button",onClick:()=>{eR(e=>eF(e,i))},children:"삭제"})]}),(0,t.jsxs)(eg,{value:e.type,onChange:e=>{let t=e.target.value;("button"===t||"message"===t||"container"===t)&&eR(e=>eN(e,i,e=>"button"===t?{type:"button",triggerKeys:e.triggerKeys,style:e.style}:"container"===t?{type:"container",triggerKeys:e.triggerKeys,style:e.style,children:"container"===e.type?e.children:[]}:{type:"message",triggerKeys:e.triggerKeys,style:e.style,message:"message"===e.type?e.message:""}))},children:[(0,t.jsx)("option",{value:"button",children:"button"}),(0,t.jsx)("option",{value:"message",children:"message"}),(0,t.jsx)("option",{value:"container",children:"container"})]}),"message"===e.type&&(0,t.jsxs)(U,{children:[(0,t.jsx)(el,{children:"Message"}),(0,t.jsx)(en,{type:"text",value:e.message,onChange:e=>{var t;return t=e.target.value,void eR(e=>eN(e,i,e=>"message"!==e.type?e:{...e,message:t}))},placeholder:"표시할 메시지"})]}),(0,t.jsxs)(ee,{children:[(0,t.jsx)(el,{children:"Component Trigger Keys"}),(0,t.jsx)(B,{type:"button",onClick:()=>{eR(e=>eN(e,i,e=>{let t=e_.find(t=>!e.triggerKeys.includes(t));return void 0===t?e:{...e,triggerKeys:[...e.triggerKeys,t]}}))},children:"트리거 키 추가"})]}),(0,t.jsx)(H,{children:e.triggerKeys.map(e=>(0,t.jsxs)(J,{children:[(0,t.jsx)(eg,{value:e,onChange:t=>{let d=t.target.value;eC(d)&&eR(t=>eN(t,i,t=>e!==d&&t.triggerKeys.includes(d)?t:{...t,triggerKeys:t.triggerKeys.map(t=>t===e?d:t)}))},children:e_.map(e=>(0,t.jsx)("option",{value:e,children:e},`${ez?.id??"field"}-assist-trigger-option-${e}`))}),(0,t.jsx)(V,{type:"button",onClick:()=>{eR(t=>eN(t,i,t=>({...t,triggerKeys:t.triggerKeys.filter(t=>t!==e)})))},children:"삭제"})]},`${o}-assist-trigger-${e}`))}),(0,t.jsxs)(U,{children:[(0,t.jsx)(el,{children:"Component Style (JSON Object)"}),(0,t.jsx)(Z,{value:""===r?JSON.stringify(e.style??{},null,2):ex[r]??JSON.stringify(e.style??{},null,2),onChange:e=>((e,t)=>{if(!ez)return;let i=eA(ez.id,e);ey(e=>({...e,[i]:t}));let d=(e=>{let t,i=e.trim();if(""===i)return{ok:!0,value:{}};try{t=JSON.parse(i)}catch{return{ok:!1,error:"유효한 JSON 오브젝트를 입력해 주세요."}}if("object"!=typeof t||null===t||Array.isArray(t))return{ok:!1,error:"스타일은 JSON 오브젝트 형태여야 합니다."};let d=Object.entries(t);if(d.some(([,e])=>"string"!=typeof e&&"number"!=typeof e))return{ok:!1,error:"스타일 값은 string 또는 number만 허용됩니다."};let o={};for(let[e,t]of d)Reflect.set(o,e,t);return{ok:!0,value:o}})(t);d.ok?(eb(e=>{let t={...e};return delete t[i],t}),eR(t=>eN(t,e,e=>({...e,style:d.value})))):eb(e=>({...e,[i]:d.error}))})(i,e.target.value),placeholder:`{
  "top": "0%",
  "right": "0%",
  "zIndex": 10
}`}),""!==r&&void 0!==em[r]?(0,t.jsx)(q,{children:em[r]}):null]}),"container"===e.type?(0,t.jsxs)(U,{children:[(0,t.jsxs)(ee,{children:[(0,t.jsx)(el,{children:"Children"}),(0,t.jsx)(B,{type:"button",onClick:()=>{eR(e=>eN(e,i,e=>{let t,i;return"container"!==e.type?e:{...e,children:[...e.children,(i=void 0===(t=e_[0])?[]:[t],{type:"button",triggerKeys:i,style:{}})]}}))},children:"자식 추가"})]}),0===e.children.length?(0,t.jsx)(W,{children:"자식 컴포넌트가 없습니다."}):(0,t.jsx)(G,{children:e.children.map((e,t)=>eV(e,[...i,t],d+1))})]}):null]},o)};return(0,t.jsx)(z,{children:(0,t.jsxs)(S,{children:[(0,t.jsxs)(k,{children:[(0,t.jsx)($,{children:"필드키 목록"}),(0,t.jsx)(K,{children:eI.map(e=>(0,t.jsxs)(O,{children:[(0,t.jsx)(A,{ref:t=>{null===t?v.current.delete(e.id):v.current.set(e.id,t)},$isSelected:e.id===b,onClick:()=>{var t;return t=e.id,void(s?.(t),void 0===a&&m(t))},onMouseEnter:()=>l?.(e.id),onMouseLeave:()=>l?.(null),children:e.id}),(0,t.jsx)(R,{type:"button",onClick:()=>{eB(e)},children:"붙여넣기"})]},e.id))})]}),(0,t.jsxs)(T,{children:[(0,t.jsx)($,{children:"편집 패널"}),ez?(0,t.jsxs)(N,{children:[(0,t.jsxs)(L,{children:[(0,t.jsx)(E,{children:ez.id}),(0,t.jsx)(D,{type:"button",onClick:()=>void eH(),children:j?"복사됨":"복사"})]}),(0,t.jsxs)(U,{children:[(0,t.jsxs)(el,{children:["Type (",ez.uiProps.fieldType,")"]}),(0,t.jsx)(eg,{value:ez.uiProps.fieldType??"text",onChange:e=>{let t=e.target.value;eS(t)&&ez&&o(ez.id,{...ez,uiProps:ek(t,ez.uiProps)})},children:x.map(e=>(0,t.jsx)("option",{value:e,children:e},e))})]}),(0,t.jsxs)(U,{children:[(0,t.jsxs)(el,{children:["Width (",eU(ez.uiProps.style.width,"25"),")"]}),(0,t.jsx)(en,{type:"number",value:eM(ez.uiProps.style.width,"25"),onChange:e=>eT("width",e.target.value),placeholder:"40",step:"0.1"})]}),(0,t.jsxs)(U,{children:[(0,t.jsxs)(el,{children:["Height (",eU(ez.uiProps.style.height,"3.2","y"),")"]}),(0,t.jsx)(en,{type:"number",value:eM(ez.uiProps.style.height,"3.2"),onChange:e=>eT("height",e.target.value),placeholder:"6",step:"0.1"})]}),(0,t.jsxs)(U,{children:[(0,t.jsxs)(el,{children:["Font Size (210mm * ",eM(ez.uiProps.style.fontSize,g),")"]}),(0,t.jsx)(en,{type:"number",value:eM(ez.uiProps.style.fontSize,g),onChange:e=>eT("fontSize",e.target.value),placeholder:"0.05",step:"0.001"})]}),(0,t.jsxs)(U,{children:[(0,t.jsxs)(el,{children:["Line Height (",eM(ez.uiProps.style.lineHeight,"1.5"),")"]}),(0,t.jsx)(en,{type:"number",value:eM(ez.uiProps.style.lineHeight,"1.5"),onChange:e=>eT("lineHeight",e.target.value),placeholder:"1.5",step:"0.1"})]}),(0,t.jsxs)(U,{children:[(0,t.jsxs)(el,{children:["Left (",eU(ez.uiProps.style.left),")"]}),(0,t.jsx)(en,{type:"number",value:eD(ez.uiProps.style.left),onChange:e=>eT("left",e.target.value),placeholder:"15",step:"0.1"})]}),(0,t.jsxs)(U,{children:[(0,t.jsxs)(el,{children:["Top (",eU(ez.uiProps.style.top,void 0,"y"),")"]}),(0,t.jsx)(en,{type:"number",value:eD(ez.uiProps.style.top),onChange:e=>eT("top",e.target.value),placeholder:"15",step:"0.1"})]}),(0,t.jsxs)(ee,{children:[(0,t.jsx)(el,{children:"Text Align"}),(0,t.jsx)(et,{children:["left","center","right"].map(e=>(0,t.jsxs)(ei,{children:[(0,t.jsx)(ed,{type:"radio",name:"textAlign",checked:(ez.uiProps.style.textAlign??"center")===e,onChange:()=>eT("textAlign",e)}),e]},e))})]}),"select"===ez.uiProps.fieldType&&(0,t.jsxs)(U,{children:[(0,t.jsxs)(ee,{children:[(0,t.jsxs)(es,{children:[(0,t.jsx)(el,{children:"Select Options"}),(0,t.jsx)(eh,{type:"button",onClick:()=>C(e=>!e),children:w?"접기":"펼치기"})]}),w&&(0,t.jsx)(eu,{type:"button",onClick:()=>{ez&&"select"===ez.uiProps.fieldType&&o(ez.id,{...ez,uiProps:{...ez.uiProps,options:[...ez.uiProps.options,{label:"",value:""}]}})},children:"옵션 추가"})]}),w&&(0,t.jsx)(ea,{children:ez.uiProps.options.map((e,i)=>(0,t.jsxs)(ep,{children:[(0,t.jsx)(ec,{type:"text",value:e.label,onChange:e=>eL(i,"label",e.target.value),placeholder:"label"}),(0,t.jsx)(ec,{type:"text",value:e.value,onChange:e=>eL(i,"value",e.target.value),placeholder:"value"}),(0,t.jsx)(ef,{type:"button",onClick:()=>(e=>{if(!ez||"select"!==ez.uiProps.fieldType)return;let t=ez.uiProps.options.filter((t,i)=>i!==e);o(ez.id,{...ez,uiProps:{...ez.uiProps,options:t.length>0?t:[{label:"",value:""}]}})})(i),children:"삭제"})]},`${ez.id}-${e.value}-${e.label}`))})]}),"radio"===ez.uiProps.fieldType&&(0,t.jsxs)(U,{children:[(0,t.jsx)(el,{children:"Radio Group Key"}),(0,t.jsx)(en,{type:"text",value:ez.uiProps.groupKey??"",onChange:e=>{var t;return t=e.target.value,void(ez&&"radio"===ez.uiProps.fieldType&&o(ez.id,{...ez,uiProps:{...ez.uiProps,groupKey:t}}))},placeholder:"group key"}),(0,t.jsxs)(eo,{children:[(0,t.jsx)(er,{type:"checkbox",checked:void 0!==ez.uiProps.style.borderRadius,onChange:e=>(e=>{if(!ez||"radio"!==ez.uiProps.fieldType)return;let t={...ez.uiProps.style};e?t.borderRadius=t.borderRadius??"50%":delete t.borderRadius,o(ez.id,{...ez,uiProps:{...ez.uiProps,style:t}})})(e.target.checked)}),"Border Radius (",eU(ez.uiProps.style.borderRadius,"0"),")"]}),(0,t.jsx)("div",{style:{display:void 0===ez.uiProps.style.borderRadius?"none":"block"},children:(0,t.jsx)(en,{type:"number",value:eM(ez.uiProps.style.borderRadius,"0"),onChange:e=>eT("borderRadius",e.target.value),placeholder:"0",step:"1"})})]}),"date"===ez.uiProps.fieldType&&(0,t.jsxs)(U,{children:[(0,t.jsxs)(eo,{children:[(0,t.jsx)(er,{type:"checkbox",checked:!0===ez.uiProps.disableHolidaySelection,onChange:e=>{var t;return t=e.target.checked,void(ez&&"date"===ez.uiProps.fieldType&&o(ez.id,{...ez,uiProps:{...ez.uiProps,disableHolidaySelection:t}}))}}),"Disable Holiday Selection"]}),(0,t.jsxs)(eo,{children:[(0,t.jsx)(er,{type:"checkbox",checked:!0===ez.uiProps.isDotDateFormat,onChange:e=>{var t;return t=e.target.checked,void(ez&&"date"===ez.uiProps.fieldType&&o(ez.id,{...ez,uiProps:{...ez.uiProps,isDotDateFormat:t}}))}}),"Dot Format (YYYY.MM.DD)"]})]}),"textarea"===ez.uiProps.fieldType&&(0,t.jsx)(U,{children:(c=ev[p=ez.id]??JSON.stringify(ez.uiProps.placeholder?.style??{},null,2),u=eP[p],(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(el,{children:"Placeholder"}),(0,t.jsx)(en,{type:"text",value:ez.uiProps.placeholder?.text??"",onChange:e=>(e=>{if(!ez||"textarea"!==ez.uiProps.fieldType)return;let t=ez.uiProps.placeholder?.style,i=""===e.trim()?void 0:{text:e,...void 0===t?{}:{style:t}};o(ez.id,{...ez,uiProps:{...ez.uiProps,placeholder:i}})})(e.target.value),placeholder:"placeholder text"}),(0,t.jsx)(el,{children:"Placeholder Style (JSON Object)"}),(0,t.jsx)(Z,{value:c,onChange:e=>(e=>{if(!ez||"textarea"!==ez.uiProps.fieldType)return;let t=ez.id;ej(i=>({...i,[t]:e}));let i=ez.uiProps.placeholder?.text;if(void 0===i||""===i.trim())return void ew(e=>({...e,[t]:"Placeholder 텍스트를 먼저 입력해 주세요."}));if(""===e.trim()){ew(e=>{if(void 0===e[t])return e;let i={...e};return delete i[t],i}),o(ez.id,{...ez,uiProps:{...ez.uiProps,placeholder:{text:i}}});return}try{let d=JSON.parse(e);if(!("object"==typeof d&&null!==d&&!Array.isArray(d)&&Object.values(d).every(e=>null==e||"string"==typeof e||"number"==typeof e)))return void ew(e=>({...e,[t]:"JSON object 형태여야 합니다."}));let r=Object.keys(d).length>0;ew(e=>{if(void 0===e[t])return e;let i={...e};return delete i[t],i}),o(ez.id,{...ez,uiProps:{...ez.uiProps,placeholder:{text:i,...r?{style:d}:{}}}})}catch{ew(e=>({...e,[t]:"유효한 JSON이 아닙니다."}))}})(e.target.value),placeholder:`{
  "color": "#9ca3af",
  "textAlign": "center"
}`}),void 0!==u?(0,t.jsx)(q,{children:u}):null]}))}),(0,t.jsxs)(Q,{children:[(0,t.jsxs)(X,{children:[(0,t.jsxs)(eo,{children:[(0,t.jsx)(er,{type:"checkbox",checked:void 0!==ez.uiProps.style.padding,onChange:e=>eE("padding",e.target.checked)}),"Base Pad (",eU(ez.uiProps.style.padding,"1.5"),")"]}),(0,t.jsx)(en,{type:"number",value:eM(ez.uiProps.style.padding,"1.5"),onChange:e=>eT("padding",e.target.value),placeholder:"0",step:"0.1",disabled:void 0===ez.uiProps.style.padding})]}),(0,t.jsxs)(X,{children:[(0,t.jsxs)(eo,{children:[(0,t.jsx)(er,{type:"checkbox",checked:void 0!==ez.uiProps.style.paddingLeft,onChange:e=>eE("paddingLeft",e.target.checked)}),"Left Pad (",eU(ez.uiProps.style.paddingLeft,"1.5"),")"]}),(0,t.jsx)(en,{type:"number",value:eM(ez.uiProps.style.paddingLeft,"1.5"),onChange:e=>eT("paddingLeft",e.target.value),placeholder:"0",step:"0.1",disabled:void 0===ez.uiProps.style.paddingLeft})]}),(0,t.jsxs)(X,{children:[(0,t.jsxs)(eo,{children:[(0,t.jsx)(er,{type:"checkbox",checked:void 0!==ez.uiProps.style.paddingRight,onChange:e=>eE("paddingRight",e.target.checked)}),"Right Pad (",eU(ez.uiProps.style.paddingRight,"1.5"),")"]}),(0,t.jsx)(en,{type:"number",value:eM(ez.uiProps.style.paddingRight,"1.5"),onChange:e=>eT("paddingRight",e.target.value),placeholder:"0",step:"0.1",disabled:void 0===ez.uiProps.style.paddingRight})]})]}),(0,t.jsx)(U,{children:(0,t.jsxs)(eo,{children:[(0,t.jsx)(er,{type:"checkbox",checked:ez.uiProps.editable??!1,onChange:e=>{var t;return t=e.target.checked,void(ez&&o(ez.id,{...ez,uiProps:{...ez.uiProps,editable:t}}))}}),"Editable"]})}),(0,t.jsxs)(U,{children:[(0,t.jsxs)(eo,{children:[(0,t.jsx)(er,{type:"checkbox",checked:void 0!==ez.uiProps.label,onChange:e=>{var t;return t=e.target.checked,void eO(e=>{if(t)return void 0!==e?e:{field:eK()}})}}),"Label 사용"]}),void 0!==ez.uiProps.label?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(el,{children:"Label Field Name"}),(0,t.jsx)(en,{type:"text",value:ez.uiProps.label.field.name,onChange:e=>{var t;return t=e.target.value,void eO(e=>({field:void 0===e?{...eK(),name:t}:{...e.field,name:t},...e?.group===void 0?{}:{group:e.group}}))},placeholder:"field label"}),(0,t.jsx)(el,{children:"Label Field Sort Order"}),(0,t.jsx)(en,{type:"number",value:ez.uiProps.label.field.sortOrder??"",onChange:e=>{let t;return t=e$(e.target.value),void eO(e=>({field:void 0===e?{...eK(),sortOrder:t}:{...e.field,sortOrder:t},...e?.group===void 0?{}:{group:e.group}}))},placeholder:"optional",step:"1"}),(0,t.jsxs)(eo,{children:[(0,t.jsx)(er,{type:"checkbox",checked:void 0!==ez.uiProps.label.group,onChange:e=>{var t;return t=e.target.checked,void eO(e=>{if(void 0===e){if(!t)return;return{field:eK(),group:{name:"",sortOrder:void 0}}}return t?{...e,group:e.group??{name:"",sortOrder:void 0}}:{field:e.field}})}}),"Label Group 사용"]}),void 0!==ez.uiProps.label.group?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(el,{children:"Label Group Name"}),(0,t.jsx)(en,{type:"text",value:ez.uiProps.label.group.name,onChange:e=>{var t;return t=e.target.value,void eO(e=>{if(void 0===e)return{field:eK(),group:{name:t,sortOrder:void 0}};let i={name:t,sortOrder:e.group?.sortOrder};return{...e,group:i}})},placeholder:"group label"}),(0,t.jsx)(el,{children:"Label Group Sort Order"}),(0,t.jsx)(en,{type:"number",value:ez.uiProps.label.group.sortOrder??"",onChange:e=>{let t;return t=e$(e.target.value),void eO(e=>void 0===e?{field:eK(),group:{name:"",sortOrder:t}}:{...e,group:{name:e.group?.name??"",sortOrder:t}})},placeholder:"optional",step:"1"})]}):null]}):null]}),(0,t.jsxs)(U,{children:[(0,t.jsxs)(ee,{children:[(0,t.jsx)(el,{children:"Trigger Keys"}),(0,t.jsx)(B,{type:"button",onClick:()=>{if(!ez)return;let e=ez.uiProps.triggerKeys??[],t=e_.find(t=>!e.includes(t));if(void 0===t)return;let i=[...e,t];o(ez.id,{...ez,uiProps:{...ez.uiProps,triggerKeys:i}})},children:"트리거 키 추가"})]}),(0,t.jsx)(H,{children:(ez.uiProps.triggerKeys??[]).map(e=>(0,t.jsxs)(J,{children:[(0,t.jsx)(eg,{value:e,onChange:t=>{let i=t.target.value;eC(i)&&((e,t)=>{if(!ez)return;let i=ez.uiProps.triggerKeys??[];if(e!==t&&i.includes(t))return;let d=i.map(i=>i===e?t:i);o(ez.id,{...ez,uiProps:{...ez.uiProps,triggerKeys:d}})})(e,i)},children:e_.map(e=>(0,t.jsx)("option",{value:e,children:e},`${ez.id}-trigger-option-${e}`))}),(0,t.jsx)(V,{type:"button",onClick:()=>(e=>{if(!ez)return;let t=(ez.uiProps.triggerKeys??[]).filter(t=>t!==e);o(ez.id,{...ez,uiProps:{...ez.uiProps,triggerKeys:t}})})(e),children:"삭제"})]},`${ez.id}-trigger-key-${e}`))})]}),(0,t.jsxs)(U,{children:[(0,t.jsxs)(ee,{children:[(0,t.jsx)(el,{children:"Assist UI Components"}),(0,t.jsx)(B,{type:"button",onClick:()=>{if(!ez)return;let e=e_[0],t=[...ez.uiProps.assistUiComponents??[],{type:"button",triggerKeys:void 0===e?[]:[e],style:{}}];o(ez.id,{...ez,uiProps:{...ez.uiProps,assistUiComponents:t}})},children:"컴포넌트 추가"})]}),(0,t.jsx)(G,{children:(ez.uiProps.assistUiComponents??[]).map((e,t)=>eV(e,[t]))})]}),(0,t.jsx)(M,{type:"button",onClick:()=>{r(ez)},children:"저장"})]}):(0,t.jsx)(F,{children:"왼쪽에서 필드를 선택해 주세요."})]})]})})}let z=o.default.div.withConfig({componentId:"zh__sc-7a7d35c6-0"})`
  overflow: hidden;
  display: flex;
  flex-direction: column;

  width: 600px;
  padding: 12px;
  border-left: 1px solid #e0e0e0;

  background: #f5f5f5;
`,S=o.default.div.withConfig({componentId:"zh__sc-7a7d35c6-1"})`
  display: flex;
  flex: 1;
  gap: 12px;
  min-height: 0;
`,k=o.default.div.withConfig({componentId:"zh__sc-7a7d35c6-2"})`
  overflow: hidden;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 8px;

  min-width: 0;
`,T=o.default.div.withConfig({componentId:"zh__sc-7a7d35c6-3"})`
  overflow: hidden;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 8px;

  min-width: 0;
`,$=o.default.h3.withConfig({componentId:"zh__sc-7a7d35c6-4"})`
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  color: #333;
`,K=o.default.div.withConfig({componentId:"zh__sc-7a7d35c6-5"})`
  overflow-y: auto;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 8px;

  min-height: 0;
`,O=o.default.div.withConfig({componentId:"zh__sc-7a7d35c6-6"})`
  display: flex;
  gap: 6px;
  align-items: center;
`,A=o.default.button.withConfig({componentId:"zh__sc-7a7d35c6-7"})`
  cursor: pointer;

  overflow: hidden;
  flex: 1;

  min-height: 40px;
  padding: 10px 12px;
  border: 1px solid ${e=>e.$isSelected?"#4f46e5":"#ddd"};
  border-radius: 4px;

  font-size: 13px;
  font-weight: ${e=>e.$isSelected?600:400};
  color: ${e=>e.$isSelected?"#4f46e5":"#555"};
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;

  background: ${e=>e.$isSelected?"#e0e7ff":"white"};

  transition: all 0.2s;

  &:hover {
    border-color: #4f46e5;
    background: #f3f4f6;
  }
`,R=o.default.button.withConfig({componentId:"zh__sc-7a7d35c6-8"})`
  cursor: pointer;

  min-height: 40px;
  padding: 10px 8px;
  border: 1px solid #d1d5db;
  border-radius: 4px;

  font-size: 12px;
  font-weight: 600;
  color: #4b5563;
  white-space: nowrap;

  background: #fff;

  &:hover {
    border-color: #4f46e5;
    color: #4f46e5;
  }
`,N=o.default.div.withConfig({componentId:"zh__sc-7a7d35c6-9"})`
  overflow-y: auto;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 12px;

  padding: 10px;
  border: 1px solid #e0e0e0;
  border-radius: 6px;

  background: white;
`,F=o.default.div.withConfig({componentId:"zh__sc-7a7d35c6-10"})`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;

  padding: 12px;
  border: 1px dashed #d1d5db;
  border-radius: 6px;

  font-size: 12px;
  color: #6b7280;

  background: white;
`,L=o.default.div.withConfig({componentId:"zh__sc-7a7d35c6-11"})`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: space-between;
`,E=o.default.h4.withConfig({componentId:"zh__sc-7a7d35c6-12"})`
  margin: 0;
  font-size: 12px;
  font-weight: 600;
  color: #666;
`,D=o.default.button.withConfig({componentId:"zh__sc-7a7d35c6-13"})`
  cursor: pointer;

  padding: 6px 10px;
  border: 1px solid #d1d5db;
  border-radius: 4px;

  font-size: 12px;
  font-weight: 600;
  color: #374151;

  background: white;

  &:hover {
    border-color: #4f46e5;
    color: #4f46e5;
  }
`,M=o.default.button.withConfig({componentId:"zh__sc-7a7d35c6-14"})`
  cursor: pointer;

  margin-top: auto;
  padding: 8px 12px;
  border: 1px solid #4f46e5;
  border-radius: 4px;

  font-size: 12px;
  font-weight: 700;
  color: #fff;

  background: #4f46e5;

  &:hover {
    background: #4338ca;
  }
`,U=o.default.div.withConfig({componentId:"zh__sc-7a7d35c6-15"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,H=o.default.div.withConfig({componentId:"zh__sc-7a7d35c6-16"})`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,J=o.default.div.withConfig({componentId:"zh__sc-7a7d35c6-17"})`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 8px;
  align-items: center;
`,B=o.default.button.withConfig({componentId:"zh__sc-7a7d35c6-18"})`
  cursor: pointer;

  padding: 6px 10px;
  border: 1px solid #d1d5db;
  border-radius: 4px;

  font-size: 12px;
  font-weight: 600;
  color: #374151;

  background: #fff;

  &:hover {
    border-color: #4f46e5;
    color: #4f46e5;
  }
`,V=o.default.button.withConfig({componentId:"zh__sc-7a7d35c6-19"})`
  cursor: pointer;

  padding: 6px 10px;
  border: 1px solid #fecaca;
  border-radius: 4px;

  font-size: 12px;
  font-weight: 600;
  color: #b91c1c;
  white-space: nowrap;

  background: #fff5f5;

  &:hover {
    border-color: #f87171;
    background: #fee2e2;
  }
`,G=o.default.div.withConfig({componentId:"zh__sc-7a7d35c6-20"})`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,Y=o.default.div.withConfig({componentId:"zh__sc-7a7d35c6-21"})`
  display: flex;
  flex-direction: column;
  gap: 8px;

  padding: 10px;
  border: 1px solid #e5e7eb;
  border-radius: 6px;

  background: #f9fafb;
`,W=o.default.div.withConfig({componentId:"zh__sc-7a7d35c6-22"})`
  font-size: 12px;
  color: #6b7280;
`,Z=o.default.textarea.withConfig({componentId:"zh__sc-7a7d35c6-23"})`
  resize: vertical;

  box-sizing: border-box;
  width: 100%;
  min-height: 96px;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;

  font-family: monospace;
  font-size: 12px;
  line-height: 1.4;

  background: #fff;

  &:focus {
    border-color: #4f46e5;
    outline: none;
    box-shadow: 0 0 0 2px rgb(79 70 229 / 10%);
  }
`,q=o.default.div.withConfig({componentId:"zh__sc-7a7d35c6-24"})`
  font-size: 11px;
  font-weight: 600;
  color: #b91c1c;
`,Q=o.default.div.withConfig({componentId:"zh__sc-7a7d35c6-25"})`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 8px;

  box-sizing: border-box;
  width: 100%;
  min-width: 0;
`,X=o.default.div.withConfig({componentId:"zh__sc-7a7d35c6-26"})`
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 0;
`,ee=(0,o.default)(U).withConfig({componentId:"zh__sc-7a7d35c6-27"})`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`,et=o.default.div.withConfig({componentId:"zh__sc-7a7d35c6-28"})`
  display: flex;
  gap: 12px;
  align-items: center;
`,ei=o.default.label.withConfig({componentId:"zh__sc-7a7d35c6-29"})`
  display: flex;
  gap: 6px;
  align-items: center;

  font-size: 12px;
  color: #555;
  text-transform: capitalize;
`,ed=o.default.input.withConfig({componentId:"zh__sc-7a7d35c6-30"})`
  margin: 0;
`,eo=o.default.label.withConfig({componentId:"zh__sc-7a7d35c6-31"})`
  display: flex;
  gap: 8px;
  align-items: center;

  min-width: 0;

  font-size: 12px;
  font-weight: 500;
  color: #555;
`,er=o.default.input.withConfig({componentId:"zh__sc-7a7d35c6-32"})`
  margin: 0;
`,el=o.default.label.withConfig({componentId:"zh__sc-7a7d35c6-33"})`
  font-size: 12px;
  font-weight: 500;
  color: #555;
`,en=o.default.input.withConfig({componentId:"zh__sc-7a7d35c6-34"})`
  box-sizing: border-box;
  width: 100%;
  min-width: 0;
  padding: 6px 8px;
  border: 1px solid #ddd;
  border-radius: 3px;

  font-family: monospace;
  font-size: 12px;

  &:focus {
    border-color: #4f46e5;
    outline: none;
    box-shadow: 0 0 0 2px rgb(79 70 229 / 10%);
  }
`,ea=o.default.div.withConfig({componentId:"zh__sc-7a7d35c6-35"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,es=o.default.div.withConfig({componentId:"zh__sc-7a7d35c6-36"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,ep=o.default.div.withConfig({componentId:"zh__sc-7a7d35c6-37"})`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) auto;
  gap: 8px;
  align-items: center;
`,ec=(0,o.default)(en).withConfig({componentId:"zh__sc-7a7d35c6-38"})`
  min-width: 0;
`,eu=o.default.button.withConfig({componentId:"zh__sc-7a7d35c6-39"})`
  cursor: pointer;

  padding: 6px 10px;
  border: 1px solid #d1d5db;
  border-radius: 4px;

  font-size: 12px;
  font-weight: 600;
  color: #374151;

  background: #fff;

  &:hover {
    border-color: #4f46e5;
    color: #4f46e5;
  }
`,eh=o.default.button.withConfig({componentId:"zh__sc-7a7d35c6-40"})`
  cursor: pointer;

  padding: 4px 8px;
  border: 1px solid #d1d5db;
  border-radius: 4px;

  font-size: 11px;
  font-weight: 600;
  color: #4b5563;
  white-space: nowrap;

  background: #fff;

  &:hover {
    border-color: #4f46e5;
    color: #4f46e5;
  }
`,ef=o.default.button.withConfig({componentId:"zh__sc-7a7d35c6-41"})`
  cursor: pointer;

  padding: 6px 10px;
  border: 1px solid #fecaca;
  border-radius: 4px;

  font-size: 12px;
  font-weight: 600;
  color: #b91c1c;
  white-space: nowrap;

  background: #fff5f5;

  &:hover {
    border-color: #f87171;
    background: #fee2e2;
  }
`,eg=o.default.select.withConfig({componentId:"zh__sc-7a7d35c6-42"})`
  box-sizing: border-box;
  width: 100%;
  min-width: 0;
  padding: 6px 8px;
  border: 1px solid #ddd;
  border-radius: 3px;

  font-family: monospace;
  font-size: 12px;

  background: #fff;

  &:focus {
    border-color: #4f46e5;
    outline: none;
    box-shadow: 0 0 0 2px rgb(79 70 229 / 10%);
  }
`;function ex({selectedServiceType:e,contracts:i,documents:d,templates:o,pages:r,selectedContractId:l,selectedDocumentId:n,selectedTemplateId:a,selectedPageId:s,scale:p,isApplyingAllFieldsFontSize:c,onChangeServiceType:u,onChangeContract:h,onChangeDocument:f,onChangeTemplate:g,onChangePage:x,onChangeScale:y,onApplyAllFieldsFontSize:m,onOpenPrintModal:b}){return(0,t.jsxs)(ey,{children:[(0,t.jsxs)(em,{children:[(0,t.jsx)(eb,{children:"서비스"}),(0,t.jsxs)(ev,{value:e,onChange:e=>{u("NUTRITION"===e.target.value?"NUTRITION":"MEAL")},children:[(0,t.jsx)("option",{value:"MEAL",children:"식사"}),(0,t.jsx)("option",{value:"NUTRITION",children:"영양"})]})]}),(0,t.jsxs)(em,{children:[(0,t.jsx)(eb,{children:"계약"}),(0,t.jsx)(ev,{value:l,onChange:e=>{h(e.target.value)},disabled:0===i.length,children:0===i.length?(0,t.jsx)("option",{value:"",children:"계약 없음"}):i.map(e=>(0,t.jsxs)("option",{value:e.id,children:[e.client.name," (",e.managementCode,")"]},e.id))})]}),(0,t.jsxs)(em,{children:[(0,t.jsx)(eb,{children:"문서"}),(0,t.jsx)(ev,{value:n,onChange:e=>{f(e.target.value)},disabled:0===d.length,children:0===d.length?(0,t.jsx)("option",{value:"",children:"문서 없음"}):d.map((e,i)=>(0,t.jsxs)("option",{value:e.id??"",children:[e.id," (",e.displayStatus,")"]},e.id??`document-null-${i}`))})]}),(0,t.jsxs)(em,{children:[(0,t.jsx)(eb,{children:"템플릿"}),(0,t.jsx)(ev,{value:a,onChange:e=>{g(e.target.value)},children:o.map(e=>(0,t.jsx)("option",{value:e.id,children:e.name},e.id))})]}),(0,t.jsxs)(em,{children:[(0,t.jsx)(eb,{children:"페이지"}),(0,t.jsx)(ev,{value:s,onChange:e=>{x(e.target.value)},children:r.map(e=>(0,t.jsxs)("option",{value:e.id,children:[e.page,"페이지"]},e.id))})]}),(0,t.jsxs)(em,{children:[(0,t.jsx)(eb,{children:"배율"}),(0,t.jsx)(ej,{type:"number",value:p,onChange:e=>{y(e.target.value)},min:10,step:10})]}),(0,t.jsx)(ew,{type:"button",onClick:m,disabled:c,children:c?"전체 템플릿 폰트 적용/저장 중...":"전체 템플릿 폰트 0.023 적용/저장"}),(0,t.jsx)(eP,{type:"button",onClick:b,children:"출력"})]})}let ey=o.default.div.withConfig({componentId:"zh__sc-de981c25-0"})`
  display: flex;
  flex-wrap: nowrap;
  gap: 24px;
  align-items: center;
`,em=o.default.label.withConfig({componentId:"zh__sc-de981c25-1"})`
  display: flex;
  gap: 8px;
  align-items: center;
  min-width: 0;
`,eb=o.default.div.withConfig({componentId:"zh__sc-de981c25-2"})`
  flex: 0 0 auto;
  font-size: 12px;
  font-weight: 600;
  color: #4b5563;
`,ev=o.default.select.withConfig({componentId:"zh__sc-de981c25-3"})`
  min-width: 100px;
  height: 36px;
  padding: 0 12px;
  border: 1px solid #d1d5db;
  border-radius: 8px;

  font-size: 14px;
  color: #111827;

  background: #fff;
`,ej=o.default.input.withConfig({componentId:"zh__sc-de981c25-4"})`
  width: 100px;
  height: 36px;
  padding: 0 12px;
  border: 1px solid #d1d5db;
  border-radius: 8px;

  font-size: 14px;
  color: #111827;

  background: #fff;
`,eP=o.default.button.withConfig({componentId:"zh__sc-de981c25-5"})`
  cursor: pointer;

  height: 36px;
  padding: 0 16px;
  border: 1px solid #1d4ed8;
  border-radius: 8px;

  font-size: 14px;
  font-weight: 700;
  color: #1d4ed8;

  background: #eff6ff;
`,ew=o.default.button.withConfig({componentId:"zh__sc-de981c25-6"})`
  cursor: pointer;

  display: none;

  height: 36px;
  padding: 0 16px;
  border: 1px solid #047857;
  border-radius: 8px;

  font-size: 14px;
  font-weight: 700;
  color: #047857;

  background: #ecfdf5;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;var eC=e.i(68339),e_=e.i(43174);let eI=o.default.div.withConfig({componentId:"zh__sc-8687c381-0"})`
  --header-height: 64px;
  --content-outer-padding-y: 32px;

  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 16px;

  width: 100%;
  height: calc(100vh - var(--header-height) - var(--content-outer-padding-y));
  min-height: calc(100vh - var(--header-height) - var(--content-outer-padding-y));
  max-height: calc(100vh - var(--header-height) - var(--content-outer-padding-y));
  padding: 16px;

  background: #f3f4f6;

  @supports (height: 100dvh) {
    height: calc(100dvh - var(--header-height) - var(--content-outer-padding-y));
    min-height: calc(100dvh - var(--header-height) - var(--content-outer-padding-y));
  }
`,ez=o.default.div.withConfig({componentId:"zh__sc-8687c381-1"})`
  overflow: hidden;
  display: flex;
  flex: 1;
  gap: 0;
`,eS=o.default.div.withConfig({componentId:"zh__sc-8687c381-2"})`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;

  min-height: 0;
  border: 1px solid #e5e7eb;
  border-radius: 12px;

  font-size: 14px;
  color: #6b7280;

  background: #e5e7eb;
`;e.s(["default",0,function(){let e=(0,i.useRouter)(),o=(0,i.useSearchParams)(),[l,n]=(0,d.useState)([]),[s,p]=(0,d.useState)([]),[c,u]=(0,d.useState)([]),[h,f]=(0,d.useState)([]),[x,y]=(0,d.useState)([]),[m,b]=(0,d.useState)(null),[v,j]=(0,d.useState)(null),[P,w]=(0,d.useState)(!0),[C,_]=(0,d.useState)(!1),[z,S]=(0,d.useState)(!1),[k,T]=(0,d.useState)([]),$="NUTRITION"===o.get("serviceType")?"NUTRITION":"MEAL";(0,d.useEffect)(()=>{let e=!0;return(async()=>{w(!0);let[t,i]=await r.default.data.docs.getTemplateList({serviceType:$}),[d,o]=await r.default.data.contract.getList({serviceType:$});if(null!==t||null!==d||!e){n([]),p([]),u([]),f([]),y([]),w(!1);return}let l=await Promise.all(i.map(async e=>{let[t,i]=await r.default.data.docs.getTemplateFieldList({templateId:e.id});return null!==t?[]:i.map((t,i)=>({id:`${e.id}-${t.page}-${t.fieldKey}-${i+1}`,templateId:e.id,page:t.page,fieldKey:t.fieldKey,uiProps:t.uiProps,defaultValue:t.value??"",value:t.value}))}));e&&(n(i),p(o),y(l.flat()),w(!1))})(),()=>{e=!1}},[$]);let K=o.get("pageId")??"",O=o.get("templateId")??"",A=o.get("contractId")??"",R=o.get("documentId")??"",N=o.get("scale")??"100",F=(0,d.useMemo)(()=>l.flatMap(e=>(e.templateImagePath??[]).map((t,i)=>({id:`${e.id}-${i+1}`,templateId:e.id,imagePath:t,page:i+1}))),[l]),L=s.find(e=>e.id===A)??s[0]??null,E=L?.id??"",D=c.find(e=>e.id===R)??c[0]??null,M=D?.id??"",U=F.find(e=>e.id===K)??null,H=l.find(e=>e.id===O)??null,J=H?.id??U?.templateId??l[0]?.id??"",B=e=>F.filter(t=>t.templateId===e).sort((e,t)=>e.page-t.page),V=B(J),G=x.filter(e=>e.templateId===J).sort((e,t)=>e.page!==t.page?e.page-t.page:e.fieldKey.localeCompare(t.fieldKey)),Y=V.find(e=>e.id===K)??V[0]??null,W=Y?.page,Z=G.filter(e=>e.page===W),q=(0,d.useMemo)(()=>new Map(h.map(e=>[`${e.page}:${e.fieldKey}`,e.value])),[h]),Q=Z.map(e=>({page:e.page,fieldKey:e.fieldKey,uiProps:e.uiProps,value:(""===M?void 0:q.get(`${e.page}:${e.fieldKey}`))??e.defaultValue})),X=t=>{let i=new URLSearchParams(o.toString());t(i),e.replace(`?${i.toString()}`)},ee=()=>{S(!1)},et=async e=>{await r.default.data.docs.patchTemplateField({templateId:e.templateId,field:{page:e.page,fieldKey:e.fieldKey,uiProps:e.uiProps}})},ei=async()=>{let e=l.filter(e=>k.includes(e.id)),t=e[0]?.name?.trim()??"",i=""===t?"Print":e.length<=1?t:`${t} 외 ${e.length-1}건`,d=L?.client.name?.trim()??"",o=""===d?i:`${i} - ${d}`,r=new Map(l.map((e,t)=>[e.id,t])),n=F.filter(e=>k.includes(e.templateId)).sort((e,t)=>e.templateId!==t.templateId?(r.get(e.templateId)??0)-(r.get(t.templateId)??0):e.page-t.page),a=new Map,s=n.map((e,t)=>(a.set(`${e.templateId}:${e.page}`,t+1),{id:e.id,templateId:e.templateId,imagePath:e.imagePath,page:t+1})),p=x.reduce((e,t)=>{if(!k.includes(t.templateId))return e;let i=a.get(`${t.templateId}:${t.page}`);return void 0===i||e.push({page:i,fieldKey:t.fieldKey,uiProps:t.uiProps,value:t.defaultValue}),e},[]);await (0,eC.renderDocumentPrintView)({pages:s,fields:p,printTitle:o,onImageLoadFailure:e=>{e_.default.ui.layout.toast.error(`서류 이미지 ${e}개 로딩에 실패하여 출력을 중단했습니다.`)}}),ee()};return(0,d.useEffect)(()=>{let e=!0;return(async()=>{if(""===E){u([]),f([]);return}let[t,i]=await r.default.data.docs.getList({contractId:E});if(e){if(null!==t){u([]),f([]);return}u(i)}})(),()=>{e=!1}},[E]),(0,d.useEffect)(()=>{let e=!0;return(async()=>{if(""===M)return f([]);let[t,i]=await r.default.data.docs.getFieldList({documentId:M});if(e){if(null!==t)return f([]);f(i)}})(),()=>{e=!1}},[M]),(0,t.jsxs)(eI,{children:[(0,t.jsx)(ex,{selectedServiceType:$,contracts:s,documents:c,templates:l,pages:V,selectedContractId:E,selectedDocumentId:M,selectedTemplateId:J,selectedPageId:K,scale:N,isApplyingAllFieldsFontSize:C,onChangeServiceType:e=>{X(t=>{t.set("serviceType",e),t.delete("templateId"),t.delete("pageId"),t.delete("contractId"),t.delete("documentId")})},onChangeContract:e=>{X(t=>{""===e?t.delete("contractId"):t.set("contractId",e),t.delete("documentId")})},onChangeDocument:e=>{X(t=>{if(""===e)return void t.delete("documentId");let i=c.find(t=>t.id===e);if(t.set("documentId",e),void 0===i)return;let d=i.templateId;t.set("templateId",d),t.set("pageId",B(d)[0]?.id??"")})},onChangeTemplate:e=>{X(t=>{t.set("templateId",e),t.set("pageId",B(e)[0]?.id??""),t.set("scale",N),t.delete("documentId")})},onChangePage:e=>{X(t=>{t.set("templateId",J),t.set("pageId",e),t.set("scale",N)})},onChangeScale:e=>{((e,t=N)=>{X(i=>{i.set("templateId",e),i.set("pageId",B(e)[0]?.id??""),i.set("scale",t)})})(J,e)},onApplyAllFieldsFontSize:()=>{C||0===x.length||(async()=>{_(!0);let e="calc(210mm * 0.023)",t=x.filter(t=>String(t.uiProps.style.fontSize??"").replace(/\s+/g,"")!==e.replace(/\s+/g,""));if(0===t.length)return _(!1);let i=new Map(t.map(t=>[t.id,{...t,uiProps:{...t.uiProps,style:{...t.uiProps.style,fontSize:e}}}]));y(e=>e.map(e=>i.get(e.id)??e));try{for(let[e,d]of t.entries()){let o=i.get(d.id);void 0!==o&&(await r.default.data.docs.patchTemplateField({templateId:o.templateId,field:{page:o.page,fieldKey:o.fieldKey,uiProps:o.uiProps}}),e<t.length-1&&await new Promise(e=>{setTimeout(e,300)}))}}finally{_(!1)}})()},onOpenPrintModal:()=>{T([J]),S(!0)}}),(0,t.jsxs)(ez,{children:[P?(0,t.jsx)(eS,{children:"템플릿을 불러오는 중입니다."}):(0,t.jsx)(a,{selectedPage:Y,scale:N,selectedPageFields:Q,selectedPageEditableFields:Z,hoveredFieldId:m,onSelectFieldId:j}),(0,t.jsx)(I,{fields:Z,scale:N,onUpdateField:(e,t)=>{y(i=>i.map(i=>i.id===e?t:i))},onSaveField:et,onHoverFieldId:b,selectedFieldId:v,onSelectFieldId:j})]}),(0,t.jsx)(g,{isOpen:z,templates:l,selectedTemplateIds:k,onToggleTemplate:e=>{T(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e])},onClose:ee,onPrint:()=>{ei()}})]})}],36308)}]);