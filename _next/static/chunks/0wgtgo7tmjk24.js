(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,36308,e=>{"use strict";var t=e.i(9735),i=e.i(33261),d=e.i(7744),o=e.i(22803),n=e.i(23416),l=e.i(25699);function r({selectedPage:e,scale:i,selectedPageFields:d,selectedPageEditableFields:o,hoveredFieldId:n,onSelectFieldId:h}){return(0,t.jsx)(u,{children:null===e?(0,t.jsx)(f,{children:"선택한 페이지가 없습니다."}):(0,t.jsx)(a,{$scale:Number(i)/100||1,children:(0,t.jsxs)(s,{children:[(0,t.jsx)(l.default,{imagePath:e.imagePath,fields:d}),(0,t.jsx)(p,{children:o.map(e=>(0,t.jsx)(c,{style:e.uiProps.style,title:`${e.fieldKey} (${e.uiProps.fieldType})`,"aria-label":`${e.fieldKey} (${e.uiProps.fieldType})`,$active:n===e.id,$editable:e.uiProps.editable??!1,onClick:()=>h?.(e.id)},e.id))})]})})})}let a=o.default.div.withConfig({componentId:"zh__sc-31575765-0"})`
  transform-origin: top left;
  transform: scale(${({$scale:e})=>e});
  width: fit-content;
`,s=o.default.div.withConfig({componentId:"zh__sc-31575765-1"})`
  position: relative;
  width: fit-content;
`,p=o.default.div.withConfig({componentId:"zh__sc-31575765-2"})`
  position: absolute;
  inset: 0;
`,c=o.default.div.withConfig({componentId:"zh__sc-31575765-3"})`
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
`,u=o.default.div.withConfig({componentId:"zh__sc-31575765-4"})`
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
`;function h({isOpen:e,templates:i,selectedTemplateIds:d,onToggleTemplate:o,onClose:n,onPrint:l}){return!1===e?null:(0,t.jsx)(g,{onClick:()=>{n()},children:(0,t.jsxs)(x,{onClick:e=>{e.stopPropagation()},children:[(0,t.jsx)(m,{children:"출력 템플릿 선택"}),(0,t.jsx)(y,{children:i.map(e=>{let i=d.includes(e.id);return(0,t.jsxs)(b,{children:[(0,t.jsx)(v,{type:"checkbox",checked:i,onChange:()=>{o(e.id)}}),(0,t.jsx)(w,{children:e.name})]},e.id)})}),(0,t.jsxs)(j,{children:[(0,t.jsx)(I,{type:"button",onClick:()=>{n()},children:"취소"}),(0,t.jsx)(I,{type:"button",$primary:!0,disabled:0===d.length,onClick:()=>{l()},children:"출력"})]})]})})}let g=o.default.div.withConfig({componentId:"zh__sc-ef6b6d0c-0"})`
  position: fixed;
  z-index: 10;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 16px;

  background: rgb(15 23 42 / 40%);
`,x=o.default.div.withConfig({componentId:"zh__sc-ef6b6d0c-1"})`
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
`,y=o.default.div.withConfig({componentId:"zh__sc-ef6b6d0c-3"})`
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;

  padding: 6px 2px;
`,b=o.default.label.withConfig({componentId:"zh__sc-ef6b6d0c-4"})`
  cursor: pointer;

  display: flex;
  gap: 10px;
  align-items: center;

  padding: 8px 10px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;

  background: #f9fafb;
`,v=o.default.input.withConfig({componentId:"zh__sc-ef6b6d0c-5"})`
  width: 16px;
  height: 16px;
`,w=o.default.div.withConfig({componentId:"zh__sc-ef6b6d0c-6"})`
  font-size: 14px;
  color: #111827;
`,j=o.default.div.withConfig({componentId:"zh__sc-ef6b6d0c-7"})`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`,I=o.default.button.withConfig({componentId:"zh__sc-ef6b6d0c-8"})`
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
`;var P=e.i(28124);function _({fields:e,onUpdateField:i,onSaveField:o,onHoverFieldId:n,selectedFieldId:l,onSelectFieldId:r}){let a="0.026",s="center",p=["text","money","date","select","check","radio","textarea","month-with-year","multi-date","image"],[c,u]=(0,d.useState)(null),f=l??c,h=(0,d.useRef)(new Map),[g,x]=(0,d.useState)(!1),[m,y]=(0,d.useState)(!1),b=e=>e in P.default,v=(0,d.useMemo)(()=>Object.keys(P.default).filter(b).filter(e=>"function"!=typeof P.default[e]),[]),w=(0,d.useMemo)(()=>[...e].sort((e,t)=>e.page!==t.page?e.page-t.page:e.fieldKey!==t.fieldKey?e.fieldKey.localeCompare(t.fieldKey):e.id.localeCompare(t.id)),[e]),j=(0,d.useMemo)(()=>e.find(e=>e.id===f),[e,f]);(0,d.useEffect)(()=>{if(null===f)return;let e=h.current.get(f);void 0!==e&&e.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},[f]);let I=e=>p.some(t=>t===e),ep=(e,t)=>{let i={style:t.style??{},editable:t.editable??!1,triggerKeys:t.triggerKeys};switch(e){case"text":return{...i,fieldType:"text"};case"money":return{...i,fieldType:"money"};case"date":return{...i,fieldType:"date",disableHolidaySelection:"date"===t.fieldType&&t.disableHolidaySelection,isDotDateFormat:"date"===t.fieldType&&t.isDotDateFormat};case"select":return{...i,fieldType:"select",options:"select"===t.fieldType?t.options:[{value:"",label:""}]};case"check":return{...i,fieldType:"check"};case"radio":return{...i,fieldType:"radio",groupKey:"radio"===t.fieldType?t.groupKey:""};case"textarea":return{...i,fieldType:"textarea"};case"month-with-year":return{...i,fieldType:"month-with-year"};case"multi-date":return{...i,fieldType:"multi-date"};case"image":return{...i,fieldType:"image"};default:return t}},ec=(e,t)=>{let d;if(!j)return;d="fontSize"===e?t?`calc(210mm * ${t})`:"":"textAlign"===e?t:t?`${t}%`:"";let o={...j,uiProps:{...j.uiProps,style:{...j.uiProps.style,[e]:d}}};i(j.id,o)},eu=(e,t,d)=>{if(!j||"select"!==j.uiProps.fieldType)return;let o=j.uiProps.options.map((i,o)=>o===e?{...i,[t]:d}:i);i(j.id,{...j,uiProps:{...j.uiProps,options:o}})},ef=(e,t)=>{if(!j)return;let d={...j.uiProps.style};t?d[e]=d[e]??"1.5%":delete d[e],i(j.id,{...j,uiProps:{...j.uiProps,style:d}})},eh=e=>{if(null==e)return"";let t=String(e);if(t.includes("calc(")){let e=t.match(/calc\(210mm \* ([^)]+)\)/);return e?.[1]??""}return t.replace("%","")},eg=(e,t)=>{let i=eh(e);return""===i?t:i},ex=async()=>{if(!j)return;let{width:e,height:t,fontSize:i,left:d,top:o,textAlign:n,paddingLeft:l,paddingRight:r,borderRadius:a}=j.uiProps.style,s=[`fieldType: '${j.uiProps.fieldType}',`,`width: '${String(e??"")}',`,`height: '${String(t??"")}',`,`fontSize: '${String(i??"")}',`,`left: '${String(d??"")}',`,`top: '${String(o??"")}',`];if(n&&s.push(`textAlign: '${String(n)}',`),void 0!==l&&""!==l&&s.push(`paddingLeft: '${String(l)}',`),void 0!==r&&""!==r&&s.push(`paddingRight: '${String(r)}',`),void 0!==a&&""!==a&&s.push(`borderRadius: '${String(a)}',`),"radio"===j.uiProps.fieldType&&s.push(`groupKey: '${String(j.uiProps.groupKey)}',`),"date"===j.uiProps.fieldType&&(s.push(`disableHolidaySelection: ${String(j.uiProps.disableHolidaySelection)},`),s.push(`isDotDateFormat: ${String(j.uiProps.isDotDateFormat)},`)),"select"===j.uiProps.fieldType){let e=JSON.stringify(j.uiProps.options);s.push(`options: ${e},`)}let p=s.join("\n");await navigator.clipboard.writeText(p),x(!0),window.setTimeout(()=>{x(!1)},1200)},em=async e=>{try{let t,d=await navigator.clipboard.readText(),o=(e=>{let t=new Set(["width","height","fontSize","left","top","textAlign","paddingLeft","paddingRight","borderRadius","fieldType","groupKey","disableHolidaySelection","isDotDateFormat","options"]),i={};for(let d of e.matchAll(/([a-zA-Z]+)\s*:\s*'([^']*)'/g)){let e=d[1],o=d[2];void 0!==e&&void 0!==o&&t.has(e)&&(i[e]=o)}for(let d of e.matchAll(/([a-zA-Z]+)\s*:\s*(true|false)/g)){let e=d[1],o="true"===d[2];void 0!==e&&t.has(e)&&(i[e]=o)}let d=e.match(/options:\s*(\[[\s\S]*?\])/m);if(d)try{let e=d[1];if(void 0===e)return i;let t=JSON.parse(e);Array.isArray(t)&&(i.options=t)}catch{}return i})(d);if(0===Object.keys(o).length)return;let n=new Set(["width","height","fontSize","left","top","textAlign","paddingLeft","paddingRight","borderRadius"]),l={},r={};for(let[e,t]of Object.entries(o))"fieldType"!==e&&(n.has(e)?l[e]=String(t):r[e]=t);let a=o.fieldType,s="string"==typeof a&&I(a)?a:e.uiProps.fieldType,p=ep(s,e.uiProps),c={...p.style,...l};t="radio"===p.fieldType?{...p,style:c,groupKey:"string"==typeof r.groupKey?r.groupKey:p.groupKey}:"date"===p.fieldType?{...p,style:c,disableHolidaySelection:"boolean"==typeof r.disableHolidaySelection?r.disableHolidaySelection:p.disableHolidaySelection,isDotDateFormat:"boolean"==typeof r.isDotDateFormat?r.isDotDateFormat:p.isDotDateFormat}:"select"===p.fieldType?{...p,style:c,options:Array.isArray(r.options)?r.options:p.options}:{...p,style:c},i(e.id,{...e,uiProps:t})}catch{}};return(0,t.jsx)(C,{children:(0,t.jsxs)(z,{children:[(0,t.jsxs)(T,{children:[(0,t.jsx)(S,{children:"필드키 목록"}),(0,t.jsx)($,{children:w.map(e=>(0,t.jsxs)(K,{children:[(0,t.jsx)(R,{ref:t=>{null===t?h.current.delete(e.id):h.current.set(e.id,t)},$isSelected:e.id===f,onClick:()=>{var t;return t=e.id,void(r?.(t),void 0===l&&u(t))},onMouseEnter:()=>n?.(e.id),onMouseLeave:()=>n?.(null),children:e.id}),(0,t.jsx)(F,{type:"button",onClick:()=>{em(e)},children:"붙여넣기"})]},e.id))})]}),(0,t.jsxs)(k,{children:[(0,t.jsx)(S,{children:"편집 패널"}),j?(0,t.jsxs)(D,{children:[(0,t.jsxs)(L,{children:[(0,t.jsx)(M,{children:j.id}),(0,t.jsx)(O,{type:"button",onClick:()=>void ex(),children:g?"복사됨":"복사"})]}),(0,t.jsxs)(N,{children:[(0,t.jsxs)(ee,{children:["Type (",j.uiProps.fieldType,")"]}),(0,t.jsx)(es,{value:j.uiProps.fieldType??"text",onChange:e=>{let t=e.target.value;I(t)&&j&&i(j.id,{...j,uiProps:ep(t,j.uiProps)})},children:p.map(e=>(0,t.jsx)("option",{value:e,children:e},e))})]}),(0,t.jsxs)(N,{children:[(0,t.jsxs)(ee,{children:["Width (",eg(j.uiProps.style.width,"25"),"%)"]}),(0,t.jsx)(et,{type:"number",value:eg(j.uiProps.style.width,"25"),onChange:e=>ec("width",e.target.value),placeholder:"40",step:"0.1"})]}),(0,t.jsxs)(N,{children:[(0,t.jsxs)(ee,{children:["Height (",eg(j.uiProps.style.height,"3.2"),"%)"]}),(0,t.jsx)(et,{type:"number",value:eg(j.uiProps.style.height,"3.2"),onChange:e=>ec("height",e.target.value),placeholder:"6",step:"0.1"})]}),(0,t.jsxs)(N,{children:[(0,t.jsxs)(ee,{children:["Font Size (210mm * ",eg(j.uiProps.style.fontSize,a),")"]}),(0,t.jsx)(et,{type:"number",value:eg(j.uiProps.style.fontSize,a),onChange:e=>ec("fontSize",e.target.value),placeholder:"0.05",step:"0.001"})]}),(0,t.jsxs)(N,{children:[(0,t.jsxs)(ee,{children:["Left (",eh(j.uiProps.style.left),"%)"]}),(0,t.jsx)(et,{type:"number",value:eh(j.uiProps.style.left),onChange:e=>ec("left",e.target.value),placeholder:"15",step:"0.1"})]}),(0,t.jsxs)(N,{children:[(0,t.jsxs)(ee,{children:["Top (",eh(j.uiProps.style.top),"%)"]}),(0,t.jsx)(et,{type:"number",value:eh(j.uiProps.style.top),onChange:e=>ec("top",e.target.value),placeholder:"15",step:"0.1"})]}),(0,t.jsxs)(Z,{children:[(0,t.jsx)(ee,{children:"Text Align"}),(0,t.jsx)(G,{children:["left","center","right"].map(e=>(0,t.jsxs)(W,{children:[(0,t.jsx)(q,{type:"radio",name:"textAlign",checked:(j.uiProps.style.textAlign??s)===e,onChange:()=>ec("textAlign",e)}),e]},e))})]}),"select"===j.uiProps.fieldType&&(0,t.jsxs)(N,{children:[(0,t.jsxs)(Z,{children:[(0,t.jsxs)(ed,{children:[(0,t.jsx)(ee,{children:"Select Options"}),(0,t.jsx)(er,{type:"button",onClick:()=>y(e=>!e),children:m?"접기":"펼치기"})]}),m&&(0,t.jsx)(el,{type:"button",onClick:()=>{j&&"select"===j.uiProps.fieldType&&i(j.id,{...j,uiProps:{...j.uiProps,options:[...j.uiProps.options,{label:"",value:""}]}})},children:"옵션 추가"})]}),m&&(0,t.jsx)(ei,{children:j.uiProps.options.map((e,d)=>(0,t.jsxs)(eo,{children:[(0,t.jsx)(en,{type:"text",value:e.label,onChange:e=>eu(d,"label",e.target.value),placeholder:"label"}),(0,t.jsx)(en,{type:"text",value:e.value,onChange:e=>eu(d,"value",e.target.value),placeholder:"value"}),(0,t.jsx)(ea,{type:"button",onClick:()=>(e=>{if(!j||"select"!==j.uiProps.fieldType)return;let t=j.uiProps.options.filter((t,i)=>i!==e);i(j.id,{...j,uiProps:{...j.uiProps,options:t.length>0?t:[{label:"",value:""}]}})})(d),children:"삭제"})]},`${j.id}-${e.value}-${e.label}`))})]}),"radio"===j.uiProps.fieldType&&(0,t.jsxs)(N,{children:[(0,t.jsx)(ee,{children:"Radio Group Key"}),(0,t.jsx)(et,{type:"text",value:j.uiProps.groupKey??"",onChange:e=>{var t;return t=e.target.value,void(j&&"radio"===j.uiProps.fieldType&&i(j.id,{...j,uiProps:{...j.uiProps,groupKey:t}}))},placeholder:"group key"}),(0,t.jsxs)(Q,{children:[(0,t.jsx)(X,{type:"checkbox",checked:void 0!==j.uiProps.style.borderRadius,onChange:e=>(e=>{if(!j||"radio"!==j.uiProps.fieldType)return;let t={...j.uiProps.style};e?t.borderRadius=t.borderRadius??"50%":delete t.borderRadius,i(j.id,{...j,uiProps:{...j.uiProps,style:t}})})(e.target.checked)}),"Border Radius (",eg(j.uiProps.style.borderRadius,"0"),"%)"]}),(0,t.jsx)("div",{style:{display:void 0===j.uiProps.style.borderRadius?"none":"block"},children:(0,t.jsx)(et,{type:"number",value:eg(j.uiProps.style.borderRadius,"0"),onChange:e=>ec("borderRadius",e.target.value),placeholder:"0",step:"1"})})]}),"date"===j.uiProps.fieldType&&(0,t.jsxs)(N,{children:[(0,t.jsxs)(Q,{children:[(0,t.jsx)(X,{type:"checkbox",checked:!0===j.uiProps.disableHolidaySelection,onChange:e=>{var t;return t=e.target.checked,void(j&&"date"===j.uiProps.fieldType&&i(j.id,{...j,uiProps:{...j.uiProps,disableHolidaySelection:t}}))}}),"Disable Holiday Selection"]}),(0,t.jsxs)(Q,{children:[(0,t.jsx)(X,{type:"checkbox",checked:!0===j.uiProps.isDotDateFormat,onChange:e=>{var t;return t=e.target.checked,void(j&&"date"===j.uiProps.fieldType&&i(j.id,{...j,uiProps:{...j.uiProps,isDotDateFormat:t}}))}}),"Dot Format (YYYY.MM.DD)"]})]}),(j.uiProps.style.textAlign??s)!=="center"&&(0,t.jsxs)(B,{children:[(0,t.jsxs)(J,{children:[(0,t.jsxs)(Q,{children:[(0,t.jsx)(X,{type:"checkbox",checked:void 0!==j.uiProps.style.paddingLeft,onChange:e=>ef("paddingLeft",e.target.checked)}),"Left Pad (",eg(j.uiProps.style.paddingLeft,"1.5"),"%)"]}),(0,t.jsx)(et,{type:"number",value:eg(j.uiProps.style.paddingLeft,"1.5"),onChange:e=>ec("paddingLeft",e.target.value),placeholder:"0",step:"0.1",disabled:void 0===j.uiProps.style.paddingLeft})]}),(0,t.jsxs)(J,{children:[(0,t.jsxs)(Q,{children:[(0,t.jsx)(X,{type:"checkbox",checked:void 0!==j.uiProps.style.paddingRight,onChange:e=>ef("paddingRight",e.target.checked)}),"Right Pad (",eg(j.uiProps.style.paddingRight,"1.5"),"%)"]}),(0,t.jsx)(et,{type:"number",value:eg(j.uiProps.style.paddingRight,"1.5"),onChange:e=>ec("paddingRight",e.target.value),placeholder:"0",step:"0.1",disabled:void 0===j.uiProps.style.paddingRight})]})]}),(0,t.jsx)(N,{children:(0,t.jsxs)(Q,{children:[(0,t.jsx)(X,{type:"checkbox",checked:j.uiProps.editable??!1,onChange:e=>{var t;return t=e.target.checked,void(j&&i(j.id,{...j,uiProps:{...j.uiProps,editable:t}}))}}),"Editable"]})}),(0,t.jsxs)(N,{children:[(0,t.jsxs)(Z,{children:[(0,t.jsx)(ee,{children:"Trigger Keys"}),(0,t.jsx)(V,{type:"button",onClick:()=>{if(!j)return;let e=j.uiProps.triggerKeys??[],t=v.find(t=>!e.includes(t));if(void 0===t)return;let d=[...e,t];i(j.id,{...j,uiProps:{...j.uiProps,triggerKeys:d}})},children:"트리거 키 추가"})]}),(0,t.jsx)(E,{children:(j.uiProps.triggerKeys??[]).map(e=>(0,t.jsxs)(U,{children:[(0,t.jsx)(es,{value:e,onChange:t=>{let d=t.target.value;b(d)&&((e,t)=>{if(!j)return;let d=j.uiProps.triggerKeys??[];if(e!==t&&d.includes(t))return;let o=d.map(i=>i===e?t:i);i(j.id,{...j,uiProps:{...j.uiProps,triggerKeys:o}})})(e,d)},children:v.map(e=>(0,t.jsx)("option",{value:e,children:e},`${j.id}-trigger-option-${e}`))}),(0,t.jsx)(Y,{type:"button",onClick:()=>(e=>{if(!j)return;let t=(j.uiProps.triggerKeys??[]).filter(t=>t!==e);i(j.id,{...j,uiProps:{...j.uiProps,triggerKeys:t}})})(e),children:"삭제"})]},`${j.id}-trigger-key-${e}`))})]}),(0,t.jsx)(H,{type:"button",onClick:()=>{o(j)},children:"저장"})]}):(0,t.jsx)(A,{children:"왼쪽에서 필드를 선택해 주세요."})]})]})})}let C=o.default.div.withConfig({componentId:"zh__sc-7a7d35c6-0"})`
  overflow: hidden;
  display: flex;
  flex-direction: column;

  width: 600px;
  padding: 12px;
  border-left: 1px solid #e0e0e0;

  background: #f5f5f5;
`,z=o.default.div.withConfig({componentId:"zh__sc-7a7d35c6-1"})`
  display: flex;
  flex: 1;
  gap: 12px;
  min-height: 0;
`,T=o.default.div.withConfig({componentId:"zh__sc-7a7d35c6-2"})`
  overflow: hidden;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 8px;

  min-width: 0;
`,k=o.default.div.withConfig({componentId:"zh__sc-7a7d35c6-3"})`
  overflow: hidden;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 8px;

  min-width: 0;
`,S=o.default.h3.withConfig({componentId:"zh__sc-7a7d35c6-4"})`
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  color: #333;
`,$=o.default.div.withConfig({componentId:"zh__sc-7a7d35c6-5"})`
  overflow-y: auto;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 8px;

  min-height: 0;
`,K=o.default.div.withConfig({componentId:"zh__sc-7a7d35c6-6"})`
  display: flex;
  gap: 6px;
  align-items: center;
`,R=o.default.button.withConfig({componentId:"zh__sc-7a7d35c6-7"})`
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
`,F=o.default.button.withConfig({componentId:"zh__sc-7a7d35c6-8"})`
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
`,D=o.default.div.withConfig({componentId:"zh__sc-7a7d35c6-9"})`
  overflow-y: auto;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 12px;

  padding: 10px;
  border: 1px solid #e0e0e0;
  border-radius: 6px;

  background: white;
`,A=o.default.div.withConfig({componentId:"zh__sc-7a7d35c6-10"})`
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
`,M=o.default.h4.withConfig({componentId:"zh__sc-7a7d35c6-12"})`
  margin: 0;
  font-size: 12px;
  font-weight: 600;
  color: #666;
`,O=o.default.button.withConfig({componentId:"zh__sc-7a7d35c6-13"})`
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
`,H=o.default.button.withConfig({componentId:"zh__sc-7a7d35c6-14"})`
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
`,N=o.default.div.withConfig({componentId:"zh__sc-7a7d35c6-15"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,E=o.default.div.withConfig({componentId:"zh__sc-7a7d35c6-16"})`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,U=o.default.div.withConfig({componentId:"zh__sc-7a7d35c6-17"})`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 8px;
  align-items: center;
`,V=o.default.button.withConfig({componentId:"zh__sc-7a7d35c6-18"})`
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
`,Y=o.default.button.withConfig({componentId:"zh__sc-7a7d35c6-19"})`
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
`,B=o.default.div.withConfig({componentId:"zh__sc-7a7d35c6-20"})`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 8px;

  box-sizing: border-box;
  width: 100%;
  min-width: 0;
`,J=o.default.div.withConfig({componentId:"zh__sc-7a7d35c6-21"})`
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 0;
`,Z=(0,o.default)(N).withConfig({componentId:"zh__sc-7a7d35c6-22"})`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`,G=o.default.div.withConfig({componentId:"zh__sc-7a7d35c6-23"})`
  display: flex;
  gap: 12px;
  align-items: center;
`,W=o.default.label.withConfig({componentId:"zh__sc-7a7d35c6-24"})`
  display: flex;
  gap: 6px;
  align-items: center;

  font-size: 12px;
  color: #555;
  text-transform: capitalize;
`,q=o.default.input.withConfig({componentId:"zh__sc-7a7d35c6-25"})`
  margin: 0;
`,Q=o.default.label.withConfig({componentId:"zh__sc-7a7d35c6-26"})`
  display: flex;
  gap: 8px;
  align-items: center;

  min-width: 0;

  font-size: 12px;
  font-weight: 500;
  color: #555;
`,X=o.default.input.withConfig({componentId:"zh__sc-7a7d35c6-27"})`
  margin: 0;
`,ee=o.default.label.withConfig({componentId:"zh__sc-7a7d35c6-28"})`
  font-size: 12px;
  font-weight: 500;
  color: #555;
`,et=o.default.input.withConfig({componentId:"zh__sc-7a7d35c6-29"})`
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
`,ei=o.default.div.withConfig({componentId:"zh__sc-7a7d35c6-30"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,ed=o.default.div.withConfig({componentId:"zh__sc-7a7d35c6-31"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,eo=o.default.div.withConfig({componentId:"zh__sc-7a7d35c6-32"})`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) auto;
  gap: 8px;
  align-items: center;
`,en=(0,o.default)(et).withConfig({componentId:"zh__sc-7a7d35c6-33"})`
  min-width: 0;
`,el=o.default.button.withConfig({componentId:"zh__sc-7a7d35c6-34"})`
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
`,er=o.default.button.withConfig({componentId:"zh__sc-7a7d35c6-35"})`
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
`,ea=o.default.button.withConfig({componentId:"zh__sc-7a7d35c6-36"})`
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
`,es=o.default.select.withConfig({componentId:"zh__sc-7a7d35c6-37"})`
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
`;function ep({selectedServiceType:e,contracts:i,documents:d,templates:o,pages:n,selectedContractId:l,selectedDocumentId:r,selectedTemplateId:a,selectedPageId:s,scale:p,isApplyingAllFieldsFontSize:c,onChangeServiceType:u,onChangeContract:f,onChangeDocument:h,onChangeTemplate:g,onChangePage:x,onChangeScale:m,onApplyAllFieldsFontSize:y,onOpenPrintModal:b}){return(0,t.jsxs)(ec,{children:[(0,t.jsxs)(eu,{children:[(0,t.jsx)(ef,{children:"서비스"}),(0,t.jsxs)(eh,{value:e,onChange:e=>{u("NUTRITION"===e.target.value?"NUTRITION":"MEAL")},children:[(0,t.jsx)("option",{value:"MEAL",children:"식사"}),(0,t.jsx)("option",{value:"NUTRITION",children:"영양"})]})]}),(0,t.jsxs)(eu,{children:[(0,t.jsx)(ef,{children:"계약"}),(0,t.jsx)(eh,{value:l,onChange:e=>{f(e.target.value)},disabled:0===i.length,children:0===i.length?(0,t.jsx)("option",{value:"",children:"계약 없음"}):i.map(e=>(0,t.jsxs)("option",{value:e.id,children:[e.client.name," (",e.managementCode,")"]},e.id))})]}),(0,t.jsxs)(eu,{children:[(0,t.jsx)(ef,{children:"문서"}),(0,t.jsx)(eh,{value:r,onChange:e=>{h(e.target.value)},disabled:0===d.length,children:0===d.length?(0,t.jsx)("option",{value:"",children:"문서 없음"}):d.map(e=>(0,t.jsxs)("option",{value:e.id,children:[e.id," (",e.status,")"]},e.id))})]}),(0,t.jsxs)(eu,{children:[(0,t.jsx)(ef,{children:"템플릿"}),(0,t.jsx)(eh,{value:a,onChange:e=>{g(e.target.value)},children:o.map(e=>(0,t.jsx)("option",{value:e.id,children:e.name},e.id))})]}),(0,t.jsxs)(eu,{children:[(0,t.jsx)(ef,{children:"페이지"}),(0,t.jsx)(eh,{value:s,onChange:e=>{x(e.target.value)},children:n.map(e=>(0,t.jsxs)("option",{value:e.id,children:[e.page,"페이지"]},e.id))})]}),(0,t.jsxs)(eu,{children:[(0,t.jsx)(ef,{children:"배율"}),(0,t.jsx)(eg,{type:"number",value:p,onChange:e=>{m(e.target.value)},min:10,step:10})]}),(0,t.jsx)(em,{type:"button",onClick:y,disabled:c,children:c?"전체 템플릿 폰트 적용/저장 중...":"전체 템플릿 폰트 0.023 적용/저장"}),(0,t.jsx)(ex,{type:"button",onClick:b,children:"출력"})]})}let ec=o.default.div.withConfig({componentId:"zh__sc-de981c25-0"})`
  display: flex;
  flex-wrap: nowrap;
  gap: 24px;
  align-items: center;
`,eu=o.default.label.withConfig({componentId:"zh__sc-de981c25-1"})`
  display: flex;
  gap: 8px;
  align-items: center;
  min-width: 0;
`,ef=o.default.div.withConfig({componentId:"zh__sc-de981c25-2"})`
  flex: 0 0 auto;
  font-size: 12px;
  font-weight: 600;
  color: #4b5563;
`,eh=o.default.select.withConfig({componentId:"zh__sc-de981c25-3"})`
  min-width: 100px;
  height: 36px;
  padding: 0 12px;
  border: 1px solid #d1d5db;
  border-radius: 8px;

  font-size: 14px;
  color: #111827;

  background: #fff;
`,eg=o.default.input.withConfig({componentId:"zh__sc-de981c25-4"})`
  width: 100px;
  height: 36px;
  padding: 0 12px;
  border: 1px solid #d1d5db;
  border-radius: 8px;

  font-size: 14px;
  color: #111827;

  background: #fff;
`,ex=o.default.button.withConfig({componentId:"zh__sc-de981c25-5"})`
  cursor: pointer;

  height: 36px;
  padding: 0 16px;
  border: 1px solid #1d4ed8;
  border-radius: 8px;

  font-size: 14px;
  font-weight: 700;
  color: #1d4ed8;

  background: #eff6ff;
`,em=o.default.button.withConfig({componentId:"zh__sc-de981c25-6"})`
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
`;var ey=e.i(68339),eb=e.i(43174);let ev=o.default.div.withConfig({componentId:"zh__sc-8687c381-0"})`
  --header-height: 64px;
  --content-outer-padding-y: 32px;

  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 16px;

  width: 100%;
  height: calc(100vh - var(--header-height) - var(--content-outer-padding-y));
  min-height: calc(100vh - var(--header-height) - var(--content-outer-padding-y));
  padding: 16px;

  background: #f3f4f6;

  @supports (height: 100dvh) {
    height: calc(100dvh - var(--header-height) - var(--content-outer-padding-y));
    min-height: calc(100dvh - var(--header-height) - var(--content-outer-padding-y));
  }
`,ew=o.default.div.withConfig({componentId:"zh__sc-8687c381-1"})`
  overflow: hidden;
  display: flex;
  flex: 1;
  gap: 0;
`,ej=o.default.div.withConfig({componentId:"zh__sc-8687c381-2"})`
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
`;e.s(["default",0,function(){let e=(0,i.useRouter)(),o=(0,i.useSearchParams)(),[l,a]=(0,d.useState)([]),[s,p]=(0,d.useState)([]),[c,u]=(0,d.useState)([]),[f,g]=(0,d.useState)([]),[x,m]=(0,d.useState)([]),[y,b]=(0,d.useState)(null),[v,w]=(0,d.useState)(null),[j,I]=(0,d.useState)(!0),[P,C]=(0,d.useState)(!1),[z,T]=(0,d.useState)(!1),[k,S]=(0,d.useState)([]),$="NUTRITION"===o.get("serviceType")?"NUTRITION":"MEAL";(0,d.useEffect)(()=>{let e=!0;return(async()=>{I(!0);let[t,i]=await n.default.data.docs.getTemplateList({serviceType:$}),[d,o]=await n.default.data.contract.getList({serviceType:$});if(null!==t||null!==d||!e){a([]),p([]),u([]),g([]),m([]),I(!1);return}let l=await Promise.all(i.map(async e=>{let[t,i]=await n.default.data.docs.getTemplateFieldList({templateId:e.id});return null!==t?[]:i.map((t,i)=>({id:`${e.id}-${t.page}-${t.fieldKey}-${i+1}`,templateId:e.id,page:t.page,fieldKey:t.fieldKey,uiProps:t.uiProps,defaultValue:t.value??"",value:t.value}))}));e&&(a(i),p(o),m(l.flat()),I(!1))})(),()=>{e=!1}},[$]);let K=o.get("pageId")??"",R=o.get("templateId")??"",F=o.get("contractId")??"",D=o.get("documentId")??"",A=o.get("scale")??"100",L=(0,d.useMemo)(()=>l.flatMap(e=>(e.templateImagePath??[]).map((t,i)=>({id:`${e.id}-${i+1}`,templateId:e.id,imagePath:t,page:i+1}))),[l]),M=s.find(e=>e.id===F)??s[0]??null,O=M?.id??"",H=c.find(e=>e.id===D)??c[0]??null,N=H?.id??"",E=L.find(e=>e.id===K)??null,U=l.find(e=>e.id===R)??null,V=U?.id??E?.templateId??l[0]?.id??"",Y=e=>L.filter(t=>t.templateId===e).sort((e,t)=>e.page-t.page),B=Y(V),J=x.filter(e=>e.templateId===V).sort((e,t)=>e.page!==t.page?e.page-t.page:e.fieldKey.localeCompare(t.fieldKey)),Z=B.find(e=>e.id===K)??B[0]??null,G=Z?.page,W=J.filter(e=>e.page===G),q=(0,d.useMemo)(()=>new Map(f.map(e=>[`${e.page}:${e.fieldKey}`,e.value])),[f]),Q=W.map(e=>({page:e.page,fieldKey:e.fieldKey,uiProps:e.uiProps,value:(""===N?void 0:q.get(`${e.page}:${e.fieldKey}`))??e.defaultValue})),X=t=>{let i=new URLSearchParams(o.toString());t(i),e.replace(`?${i.toString()}`)},ee=()=>{T(!1)},et=async e=>{await n.default.data.docs.patchTemplateField({templateId:e.templateId,field:{page:e.page,fieldKey:e.fieldKey,uiProps:e.uiProps}})},ei=async()=>{let e=l.filter(e=>k.includes(e.id)),t=e[0]?.name?.trim()??"",i=""===t?"Print":e.length<=1?t:`${t} 외 ${e.length-1}건`,d=M?.client.name?.trim()??"",o=""===d?i:`${i} - ${d}`,n=new Map(l.map((e,t)=>[e.id,t])),r=L.filter(e=>k.includes(e.templateId)).sort((e,t)=>e.templateId!==t.templateId?(n.get(e.templateId)??0)-(n.get(t.templateId)??0):e.page-t.page),a=new Map,s=r.map((e,t)=>(a.set(`${e.templateId}:${e.page}`,t+1),{id:e.id,templateId:e.templateId,imagePath:e.imagePath,page:t+1})),p=x.reduce((e,t)=>{if(!k.includes(t.templateId))return e;let i=a.get(`${t.templateId}:${t.page}`);return void 0===i||e.push({page:i,fieldKey:t.fieldKey,uiProps:t.uiProps,value:t.defaultValue}),e},[]);await (0,ey.renderDocumentPrintView)({pages:s,fields:p,printTitle:o,onImageLoadFailure:e=>{eb.default.ui.layout.toast.error(`서류 이미지 ${e}개 로딩에 실패하여 출력을 중단했습니다.`)}}),ee()};return(0,d.useEffect)(()=>{let e=!0;return(async()=>{if(""===O){u([]),g([]);return}let[t,i]=await n.default.data.docs.getList({contractId:O});if(e){if(null!==t){u([]),g([]);return}u(i)}})(),()=>{e=!1}},[O]),(0,d.useEffect)(()=>{let e=!0;return(async()=>{if(""===N)return g([]);let[t,i]=await n.default.data.docs.getFieldList({documentId:N});if(e){if(null!==t)return g([]);g(i)}})(),()=>{e=!1}},[N]),(0,t.jsxs)(ev,{children:[(0,t.jsx)(ep,{selectedServiceType:$,contracts:s,documents:c,templates:l,pages:B,selectedContractId:O,selectedDocumentId:N,selectedTemplateId:V,selectedPageId:K,scale:A,isApplyingAllFieldsFontSize:P,onChangeServiceType:e=>{X(t=>{t.set("serviceType",e),t.delete("templateId"),t.delete("pageId"),t.delete("contractId"),t.delete("documentId")})},onChangeContract:e=>{X(t=>{""===e?t.delete("contractId"):t.set("contractId",e),t.delete("documentId")})},onChangeDocument:e=>{X(t=>{if(""===e)return void t.delete("documentId");let i=c.find(t=>t.id===e);if(t.set("documentId",e),void 0===i)return;let d=i.templateId;t.set("templateId",d),t.set("pageId",Y(d)[0]?.id??"")})},onChangeTemplate:e=>{X(t=>{t.set("templateId",e),t.set("pageId",Y(e)[0]?.id??""),t.set("scale",A),t.delete("documentId")})},onChangePage:e=>{X(t=>{t.set("templateId",V),t.set("pageId",e),t.set("scale",A)})},onChangeScale:e=>{((e,t=A)=>{X(i=>{i.set("templateId",e),i.set("pageId",Y(e)[0]?.id??""),i.set("scale",t)})})(V,e)},onApplyAllFieldsFontSize:()=>{P||0===x.length||(async()=>{C(!0);let e="calc(210mm * 0.023)",t=x.filter(t=>String(t.uiProps.style.fontSize??"").replace(/\s+/g,"")!==e.replace(/\s+/g,""));if(0===t.length)return C(!1);let i=new Map(t.map(t=>[t.id,{...t,uiProps:{...t.uiProps,style:{...t.uiProps.style,fontSize:e}}}]));m(e=>e.map(e=>i.get(e.id)??e));try{for(let[e,d]of t.entries()){let o=i.get(d.id);void 0!==o&&(await n.default.data.docs.patchTemplateField({templateId:o.templateId,field:{page:o.page,fieldKey:o.fieldKey,uiProps:o.uiProps}}),e<t.length-1&&await new Promise(e=>{setTimeout(e,300)}))}}finally{C(!1)}})()},onOpenPrintModal:()=>{S([V]),T(!0)}}),(0,t.jsxs)(ew,{children:[j?(0,t.jsx)(ej,{children:"템플릿을 불러오는 중입니다."}):(0,t.jsx)(r,{selectedPage:Z,scale:A,selectedPageFields:Q,selectedPageEditableFields:W,hoveredFieldId:y,onSelectFieldId:w}),(0,t.jsx)(_,{fields:W,onUpdateField:(e,t)=>{m(i=>i.map(i=>i.id===e?t:i))},onSaveField:et,onHoverFieldId:b,selectedFieldId:v,onSelectFieldId:w})]}),(0,t.jsx)(h,{isOpen:z,templates:l,selectedTemplateIds:k,onToggleTemplate:e=>{S(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e])},onClose:ee,onPrint:()=>{ei()}})]})}],36308)}]);