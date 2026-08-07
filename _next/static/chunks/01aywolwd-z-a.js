(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,36308,e=>{"use strict";var t=e.i(9735),i=e.i(33261),o=e.i(7744),d=e.i(22803),r=e.i(23416);let l=()=>({id:`field-row-${Math.random().toString(36).slice(2,10)}`,value:""});function n({templateName:e,defaultPage:i,isCreating:d,onClose:r,onAddField:S}){let[k,T]=(0,o.useState)(()=>i?.toString()??"1"),[$,K]=(0,o.useState)(()=>[l()]),[E,A]=(0,o.useState)(!1),[O,N]=(0,o.useState)("1"),[L,F]=(0,o.useState)("1"),M=(0,o.useMemo)(()=>$.some(e=>""!==e.value.trim()),[$]),R=(0,o.useMemo)(()=>{let e=$.filter(e=>""!==e.value.trim()).length;if(!1===E)return e;let t=Number(O.trim()),i=Number(L.trim());return!Number.isInteger(t)||!Number.isInteger(i)||t<=0||i<=0||i<t?0:e*(i-t+1)},[$,L,O,E]),D=async()=>{let e=k.trim(),t=$.map(e=>e.value.trim()).filter(e=>""!==e);if(""===e||0===t.length)return;let i=Number(e);if(!Number.isInteger(i)||i<=0)return;let o=t;if(!0===E){let e=Number(O.trim()),i=Number(L.trim());if(!Number.isInteger(e)||!Number.isInteger(i)||e<=0||i<=0||i<e)return;o=[];for(let d=e;d<=i;d+=1)for(let e of t)o.push(`${e}.${d}`)}await S({page:i,fieldKeys:o})};return(0,t.jsx)(a,{onClick:()=>{!0!==d&&r()},children:(0,t.jsxs)(s,{onClick:e=>{e.stopPropagation()},children:[(0,t.jsx)(p,{children:"필드키 추가"}),(0,t.jsx)(c,{children:""===e?"템플릿 미선택":`템플릿: ${e}`}),(0,t.jsxs)(u,{children:[(0,t.jsx)(f,{children:"페이지"}),(0,t.jsx)(b,{type:"number",min:1,step:1,value:k,onChange:e=>{T(e.target.value)},disabled:d})]}),(0,t.jsxs)(u,{children:[(0,t.jsx)(f,{children:"필드키"}),(0,t.jsxs)(h,{children:[(0,t.jsx)("input",{type:"checkbox",checked:E,onChange:e=>{A(e.target.checked)},disabled:d}),(0,t.jsx)("span",{children:"뒤에 인덱스 붙이기"})]}),!0===E?(0,t.jsxs)(g,{children:[(0,t.jsx)(x,{children:"인덱스 범위"}),(0,t.jsxs)(m,{children:[(0,t.jsx)(b,{type:"number",min:1,step:1,value:O,onChange:e=>{N(e.target.value)},disabled:d}),(0,t.jsx)(y,{children:"~"}),(0,t.jsx)(b,{type:"number",min:1,step:1,value:L,onChange:e=>{F(e.target.value)},disabled:d})]})]}):null,(0,t.jsx)(v,{children:$.map((e,i)=>(0,t.jsxs)(j,{children:[(0,t.jsx)(w,{type:"text",value:e.value,placeholder:`필드키 ${i+1}`,disabled:d,onChange:t=>{var i,o;i=e.id,o=t.target.value,K(e=>e.map(e=>e.id===i?{...e,value:o}:e))}}),(0,t.jsx)(C,{type:"button",onClick:()=>{var t;t=e.id,K(e=>e.length<=1?[l()]:e.filter(e=>e.id!==t))},disabled:d||$.length<=1,children:"-"})]},e.id))}),(0,t.jsx)(_,{type:"button",onClick:()=>{K(e=>[...e,l()])},disabled:d,children:"+ 추가"}),(0,t.jsxs)(P,{children:["한 줄에 하나씩 입력하고, 아래 저장 버튼으로 한 번에 등록합니다.",!0===E?` 현재 총 ${R}개가 생성됩니다.`:""]})]}),(0,t.jsxs)(I,{children:[(0,t.jsx)(z,{type:"button",onClick:()=>{r()},disabled:d,children:"취소"}),(0,t.jsx)(z,{type:"button",$primary:!0,disabled:""===k.trim()||!1===M||d,onClick:()=>{D()},children:!0===d?"저장 중...":"저장"})]})]})})}let a=d.default.div.withConfig({componentId:"zh__sc-bea33b75-0"})`
  pointer-events: none;

  position: fixed;
  z-index: 2147483647;
  inset: 0;

  display: flex;
  align-items: flex-start;
  justify-content: flex-end;

  padding: 24px 16px 16px;

  background: transparent;
`,s=d.default.div.withConfig({componentId:"zh__sc-bea33b75-1"})`
  pointer-events: auto;

  position: relative;
  z-index: 1;

  display: flex;
  flex-direction: column;
  gap: 16px;

  width: min(420px, calc(100vw - 32px));
  max-height: calc(100vh - 48px);
  padding: 20px;
  border: 1px solid #e5e7eb;
  border-radius: 12px;

  background: rgb(255 255 255 / 96%);
  backdrop-filter: blur(6px);
  box-shadow: 0 16px 40px rgb(15 23 42 / 16%);
`,p=d.default.h3.withConfig({componentId:"zh__sc-bea33b75-2"})`
  margin: 0;
  font-size: 16px;
  font-weight: 700;
  color: #111827;
`,c=d.default.div.withConfig({componentId:"zh__sc-bea33b75-3"})`
  font-size: 13px;
  color: #4b5563;
`,u=d.default.label.withConfig({componentId:"zh__sc-bea33b75-4"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,f=d.default.div.withConfig({componentId:"zh__sc-bea33b75-5"})`
  font-size: 13px;
  font-weight: 600;
  color: #374151;
`,h=d.default.label.withConfig({componentId:"zh__sc-bea33b75-6"})`
  display: flex;
  gap: 8px;
  align-items: center;

  font-size: 13px;
  color: #374151;
`,g=d.default.div.withConfig({componentId:"zh__sc-bea33b75-7"})`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,x=d.default.div.withConfig({componentId:"zh__sc-bea33b75-8"})`
  font-size: 12px;
  font-weight: 600;
  color: #4b5563;
`,m=d.default.div.withConfig({componentId:"zh__sc-bea33b75-9"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,y=d.default.span.withConfig({componentId:"zh__sc-bea33b75-10"})`
  font-size: 13px;
  color: #6b7280;
`,b=d.default.input.withConfig({componentId:"zh__sc-bea33b75-11"})`
  height: 40px;
  padding: 0 12px;
  border: 1px solid #d1d5db;
  border-radius: 8px;

  font-size: 14px;
  color: #111827;
`,v=d.default.div.withConfig({componentId:"zh__sc-bea33b75-12"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,j=d.default.div.withConfig({componentId:"zh__sc-bea33b75-13"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,w=d.default.input.withConfig({componentId:"zh__sc-bea33b75-14"})`
  flex: 1;

  height: 40px;
  padding: 0 12px;
  border: 1px solid #d1d5db;
  border-radius: 8px;

  font-size: 14px;
  color: #111827;
`,C=d.default.button.withConfig({componentId:"zh__sc-bea33b75-15"})`
  cursor: pointer;

  width: 36px;
  height: 36px;
  border: 1px solid #d1d5db;
  border-radius: 8px;

  font-size: 16px;
  color: #374151;

  background: #fff;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.55;
  }
`,_=d.default.button.withConfig({componentId:"zh__sc-bea33b75-16"})`
  cursor: pointer;

  width: fit-content;
  height: 36px;
  padding: 0 12px;
  border: 1px dashed #7c3aed;
  border-radius: 8px;

  font-size: 13px;
  font-weight: 600;
  color: #7c3aed;

  background: #f5f3ff;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.55;
  }
`,P=d.default.div.withConfig({componentId:"zh__sc-bea33b75-17"})`
  font-size: 12px;
  color: #6b7280;
`,I=d.default.div.withConfig({componentId:"zh__sc-bea33b75-18"})`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`,z=d.default.button.withConfig({componentId:"zh__sc-bea33b75-19"})`
  cursor: pointer;

  height: 36px;
  padding: 0 14px;
  border: 1px solid ${({$primary:e})=>!0===e?"#0f766e":"#d1d5db"};
  border-radius: 8px;

  font-size: 14px;
  font-weight: 700;
  color: ${({$primary:e})=>!0===e?"#fff":"#374151"};

  background: ${({$primary:e})=>!0===e?"#0f766e":"#fff"};

  &:disabled {
    cursor: not-allowed;
    opacity: 0.55;
  }
`;var S=e.i(25699),k=e.i(28124);function T({mode:e,selectedPage:i,scale:o,selectedPageFields:d,selectedPageEditableFields:r,hoveredFieldId:l,onSelectFieldId:n,isFieldEditable:a,isAssistButtonDisabled:s,onAssistTriggerClick:p,onChangeField:c}){return(0,t.jsx)(O,{children:null===i?(0,t.jsx)(N,{children:"선택한 페이지가 없습니다."}):(0,t.jsx)($,{$scale:Number(o)/100||1,children:(0,t.jsxs)(K,{children:[(0,t.jsx)(S.default,{imagePath:i.imagePath,fields:d,isFieldEditable:"play"===e?a:void 0,isAssistButtonDisabled:"play"===e?s:void 0,onAssistTriggerClick:"play"===e?p:void 0,onChangeField:"play"===e?c:void 0,resolveAssistButtonLabel:({triggerKey:e})=>e===k.default.SOURCE_CLICK_AUTOCOMPLETE_SERVICE_END_REPORT_USER_CHANGE_LEVEL_BUTTON||e===k.default.SOURCE_CLICK_AUTOCOMPLETE_CASE_MANAGEMENT_RECORD_CASE_CONTENT_BUTTON?"자동으로 문장 생성하기":e===k.default.SOURCE_CLICK_SELECT_ALL_GENERAL_MEAL?"일반식 전체":e===k.default.SOURCE_CLICK_SELECT_ALL_THERAPEUTIC_MEAL?"치료식 전체":e===k.default.SOURCE_CLICK_SELECT_ALL_TEXTURE_MODIFIED_MEAL?"저작 및 연하 도움식 전체":"어시스트 버튼"}),"edit"===e?(0,t.jsx)(E,{children:r.map(e=>(0,t.jsx)(A,{style:e.uiProps.style,title:`${e.fieldKey} (${e.uiProps.fieldType})`,"aria-label":`${e.fieldKey} (${e.uiProps.fieldType})`,$active:l===e.id,$editable:e.uiProps.editable??!1,onClick:()=>n?.(e.id)},e.id))}):null]})})})}let $=d.default.div.withConfig({componentId:"zh__sc-31575765-0"})`
  transform-origin: top left;
  transform: scale(${({$scale:e})=>e});
  width: fit-content;
`,K=d.default.div.withConfig({componentId:"zh__sc-31575765-1"})`
  position: relative;
  width: fit-content;
`,E=d.default.div.withConfig({componentId:"zh__sc-31575765-2"})`
  position: absolute;
  inset: 0;
`,A=d.default.div.withConfig({componentId:"zh__sc-31575765-3"})`
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
`,O=d.default.div.withConfig({componentId:"zh__sc-31575765-4"})`
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
`,N=d.default.div.withConfig({componentId:"zh__sc-31575765-5"})`
  padding: 12px 16px;
  font-size: 14px;
  color: #6b7280;
`;function L({isOpen:e,templates:i,selectedTemplateIds:o,onToggleTemplate:d,onClose:r,onPrint:l}){return!1===e?null:(0,t.jsx)(F,{onClick:()=>{r()},children:(0,t.jsxs)(M,{onClick:e=>{e.stopPropagation()},children:[(0,t.jsx)(R,{children:"출력 템플릿 선택"}),(0,t.jsx)(D,{children:i.map(e=>{let i=o.includes(e.id);return(0,t.jsxs)(U,{children:[(0,t.jsx)(H,{type:"checkbox",checked:i,onChange:()=>{d(e.id)}}),(0,t.jsx)(J,{children:e.name})]},e.id)})}),(0,t.jsxs)(V,{children:[(0,t.jsx)(G,{type:"button",onClick:()=>{r()},children:"취소"}),(0,t.jsx)(G,{type:"button",$primary:!0,disabled:0===o.length,onClick:()=>{l()},children:"출력"})]})]})})}let F=d.default.div.withConfig({componentId:"zh__sc-ef6b6d0c-0"})`
  position: fixed;
  z-index: 10;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 16px;

  background: rgb(15 23 42 / 40%);
`,M=d.default.div.withConfig({componentId:"zh__sc-ef6b6d0c-1"})`
  display: flex;
  flex-direction: column;
  gap: 16px;

  width: min(480px, 100%);
  max-height: 70vh;
  padding: 20px;
  border-radius: 12px;

  background: #fff;
`,R=d.default.h3.withConfig({componentId:"zh__sc-ef6b6d0c-2"})`
  margin: 0;
  font-size: 16px;
  font-weight: 700;
  color: #111827;
`,D=d.default.div.withConfig({componentId:"zh__sc-ef6b6d0c-3"})`
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;

  padding: 6px 2px;
`,U=d.default.label.withConfig({componentId:"zh__sc-ef6b6d0c-4"})`
  cursor: pointer;

  display: flex;
  gap: 10px;
  align-items: center;

  padding: 8px 10px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;

  background: #f9fafb;
`,H=d.default.input.withConfig({componentId:"zh__sc-ef6b6d0c-5"})`
  width: 16px;
  height: 16px;
`,J=d.default.div.withConfig({componentId:"zh__sc-ef6b6d0c-6"})`
  font-size: 14px;
  color: #111827;
`,V=d.default.div.withConfig({componentId:"zh__sc-ef6b6d0c-7"})`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`,G=d.default.button.withConfig({componentId:"zh__sc-ef6b6d0c-8"})`
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
`;var W=e.i(71371);function B({mode:e,fields:i,scale:d="100",onUpdateField:r,onSaveField:l,onHoverFieldId:n,selectedFieldId:a,onSelectFieldId:s}){let p,c,u,f=96/25.4*210,h=96/25.4*297,g="0.026",x=["text","money","date","select","check","radio","textarea","month-with-year","multi-date","image"],[m,y]=(0,o.useState)(null),b=a??m,v=(0,o.useRef)(new Map),[j,w]=(0,o.useState)(!1),[C,_]=(0,o.useState)(!1),[P,I]=(0,o.useState)({}),[z,S]=(0,o.useState)({}),[T,$]=(0,o.useState)({}),[K,E]=(0,o.useState)({}),A=e=>e in k.default,O=(0,o.useMemo)(()=>Object.keys(k.default).filter(A).filter(e=>"function"!=typeof k.default[e]),[]),N=(0,o.useMemo)(()=>[...i].sort((e,t)=>e.page!==t.page?e.page-t.page:e.fieldKey!==t.fieldKey?e.fieldKey.localeCompare(t.fieldKey):e.id.localeCompare(t.id)),[i]),L=(0,o.useMemo)(()=>{let e=i.find(e=>e.id===b);if(void 0!==e)return{...e,uiProps:{...e.uiProps,style:e.uiProps.style??{}}}},[i,b]);(0,o.useEffect)(()=>{if(null===b)return;let e=v.current.get(b);void 0!==e&&e.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},[b]);let F=e=>x.some(t=>t===e),M=(e,t)=>{let i="text"===t.fieldType||"textarea"===t.fieldType?t.placeholder:void 0,o={style:t.style??{},editable:t.editable??!1,triggerKeys:t.triggerKeys,triggerKeyScopes:t.triggerKeyScopes,assistUiComponents:t.assistUiComponents,label:t.label};switch(e){case"text":return{...o,fieldType:"text",placeholder:i};case"money":return{...o,fieldType:"money"};case"date":return{...o,fieldType:"date",disableHolidaySelection:"date"===t.fieldType&&t.disableHolidaySelection,isDotDateFormat:"date"===t.fieldType&&t.isDotDateFormat,isMonthDateFormat:"date"===t.fieldType&&t.isMonthDateFormat};case"select":return{...o,fieldType:"select",options:"select"===t.fieldType?t.options:[{value:"",label:""}]};case"check":return{...o,fieldType:"check"};case"radio":return{...o,fieldType:"radio",groupKey:"radio"===t.fieldType?t.groupKey:""};case"textarea":return{...o,fieldType:"textarea",placeholder:i};case"month-with-year":return{...o,fieldType:"month-with-year"};case"multi-date":return{...o,fieldType:"multi-date"};case"image":return{...o,fieldType:"image"};default:return t}},R=(e,t)=>{let i;if(!L)return;i="fontSize"===e?t?`calc(210mm * ${t})`:"":"lineHeight"===e?t:"fontWeight"===e?""===t||"400"===t?"":t:"textAlign"===e||"verticalAlign"===e?t:t?`${t}%`:"";let o={...L,uiProps:{...L.uiProps,style:{...L.uiProps.style,[e]:i}}};r(L.id,o)},D=(e,t)=>{if("radio"===e.uiProps.fieldType&&"true"===t&&""!==e.uiProps.groupKey)for(let t of N)t.id!==e.id&&t.page===e.page&&"radio"===t.uiProps.fieldType&&t.uiProps.groupKey===e.uiProps.groupKey&&r(t.id,{...t,defaultValue:"false"});r(e.id,{...e,defaultValue:t})},U=e=>{let t=e.trim();if(""===t)return;let i=Number(t);return Number.isFinite(i)?i:void 0},H=()=>({name:"",sortOrder:void 0}),J=e=>{if(!L)return;let t=e(L.uiProps.label);r(L.id,{...L,uiProps:{...L.uiProps,label:t}})},V=(e,t)=>{let i=t(e.triggerKeyScopes??{}),o=Object.keys(i).length>0,d={...e};return(delete d.triggerKeyScopes,o)?{...d,triggerKeyScopes:i}:d},G=(e,t)=>`${e}::${t.join("-")}`,eV=e=>{if(!L)return;let t=e(L.uiProps.assistUiComponents??[]);r(L.id,{...L,uiProps:{...L.uiProps,assistUiComponents:t}})},eG=(e,t,i)=>{let[o,...d]=t;return void 0===o?e:e.map((e,t)=>t!==o?e:0===d.length?i(e):"container"!==e.type?e:{...e,children:eG(e.children,d,i)})},eW=(e,t)=>{let[i,...o]=t;return void 0===i?e:0===o.length?e.filter((e,t)=>t!==i):e.map((e,t)=>t!==i||"container"!==e.type?e:{...e,children:eW(e.children,o)})},eB=(e,t,i)=>{if(!L||"select"!==L.uiProps.fieldType)return;let o=L.uiProps.options.map((o,d)=>d===e?{...o,[t]:i}:o);r(L.id,{...L,uiProps:{...L.uiProps,options:o}})},eY=(e,t)=>{if(!L)return;let i={...L.uiProps.style};t?i[e]=i[e]??"1.5%":delete i[e],r(L.id,{...L,uiProps:{...L.uiProps,style:i}})},eZ=e=>{if(null==e)return"";let t=String(e);if(t.includes("calc(")){let e=t.match(/calc\(210mm \* ([^)]+)\)/);return e?.[1]??""}return t.replace("%","")},eX=(e,t)=>{let i=eZ(e);return""===i?t:i},eq=(e,t,i="x")=>{let o=Number(d)/100||1,r=void 0===t?eZ(e):eX(e,t);if(""===r)return"-";let l=(0,W.parseLengthToPx)(`${r}%`,{pageWidthPx:"x"===i?f:h}),n=null===l?"-":`${(l*o).toFixed(1)}px`;return`${r}% / ${n}`},eQ=async()=>{if(!L)return;let{width:e,height:t,fontSize:i,fontWeight:o,lineHeight:d,left:r,top:l,textAlign:n,verticalAlign:a,padding:s,paddingLeft:p,paddingRight:c,borderRadius:u}=L.uiProps.style,f=[`fieldType: '${L.uiProps.fieldType}',`,`width: '${String(e??"")}',`,`height: '${String(t??"")}',`,`fontSize: '${String(i??"")}',`,`lineHeight: '${String(d??"")}',`,`left: '${String(r??"")}',`,`top: '${String(l??"")}',`];if(void 0!==o&&""!==String(o).trim()&&f.push(`fontWeight: '${String(o)}',`),n&&f.push(`textAlign: '${String(n)}',`),void 0!==a&&""!==a&&f.push(`verticalAlign: '${String(a)}',`),void 0!==s&&""!==s&&f.push(`padding: '${String(s)}',`),void 0!==p&&""!==p&&f.push(`paddingLeft: '${String(p)}',`),void 0!==c&&""!==c&&f.push(`paddingRight: '${String(c)}',`),void 0!==u&&""!==u&&f.push(`borderRadius: '${String(u)}',`),"radio"===L.uiProps.fieldType&&f.push(`groupKey: '${String(L.uiProps.groupKey)}',`),"date"===L.uiProps.fieldType&&(f.push(`disableHolidaySelection: ${String(L.uiProps.disableHolidaySelection)},`),f.push(`isDotDateFormat: ${String(L.uiProps.isDotDateFormat)},`),f.push(`isMonthDateFormat: ${String(L.uiProps.isMonthDateFormat)},`)),"select"===L.uiProps.fieldType){let e=JSON.stringify(L.uiProps.options);f.push(`options: ${e},`)}("text"===L.uiProps.fieldType||"textarea"===L.uiProps.fieldType)&&f.push(`placeholder: ${JSON.stringify(L.uiProps.placeholder??{})},`);let h=L.uiProps.triggerKeyScopes;void 0!==h&&Object.keys(h).length>0&&f.push(`triggerKeyScopes: ${JSON.stringify(h)},`);let g=f.join("\n");await navigator.clipboard.writeText(g),w(!0),window.setTimeout(()=>{w(!1)},1200)},e0=e=>!("object"!=typeof e||null===e||Array.isArray(e)||!("text"in e)||"string"!=typeof e.text||"style"in e&&void 0!==e.style&&("object"!=typeof e.style||null===e.style||Array.isArray(e.style))),e1=async e=>{try{let t,i=await navigator.clipboard.readText(),o=(e=>{let t=new Set(["width","height","fontSize","fontWeight","lineHeight","left","top","textAlign","verticalAlign","padding","paddingLeft","paddingRight","borderRadius","fieldType","triggerKeyScopes","groupKey","disableHolidaySelection","isDotDateFormat","isMonthDateFormat","options","placeholder"]),i={};for(let o of e.matchAll(/([a-zA-Z]+)\s*:\s*'([^']*)'/g)){let e=o[1],d=o[2];void 0!==e&&void 0!==d&&t.has(e)&&(i[e]=d)}for(let o of e.matchAll(/([a-zA-Z]+)\s*:\s*(true|false)/g)){let e=o[1],d="true"===o[2];void 0!==e&&t.has(e)&&(i[e]=d)}let o=e.match(/options:\s*(\[[\s\S]*?\])/m);if(o)try{let e=o[1];if(void 0===e)return i;let t=JSON.parse(e);Array.isArray(t)&&(i.options=t)}catch{}let d=e.match(/placeholder:\s*(\{[\s\S]*?\})/m);if(d)try{let e=d[1];if(void 0!==e){let t=JSON.parse(e);e0(t)&&(i.placeholder={text:t.text,...void 0===t.style?{}:{style:t.style}})}}catch{}let r=e.match(/triggerKeyScopes:\s*(\{[\s\S]*?\})/m);if(r)try{let e=r[1];if(void 0!==e){let t=JSON.parse(e);if("object"==typeof t&&null!==t&&!Array.isArray(t)){let e={};for(let[i,o]of Object.entries(t)){if("string"!=typeof o)continue;let t=i.trim(),d=o.trim();""!==t&&""!==d&&A(t)&&(e[t]=d)}i.triggerKeyScopes=e}}}catch{}return i})(i);if(0===Object.keys(o).length)return;let d=new Set(["width","height","fontSize","fontWeight","lineHeight","left","top","textAlign","verticalAlign","padding","paddingLeft","paddingRight","borderRadius"]),l={},n={};for(let[e,t]of Object.entries(o))"fieldType"!==e&&(d.has(e)?l[e]=String(t):n[e]=t);let a=o.fieldType,s="string"==typeof a&&F(a)?a:e.uiProps.fieldType,p=M(s,e.uiProps),c={...p.style,...l},u="object"!=typeof n.triggerKeyScopes||null===n.triggerKeyScopes||Array.isArray(n.triggerKeyScopes)?p.triggerKeyScopes:(()=>{let e={};for(let[t,i]of Object.entries(n.triggerKeyScopes)){if("string"!=typeof i)continue;let o=t.trim(),d=i.trim();""!==o&&""!==d&&A(o)&&(e[o]=d)}return e})();if("radio"===p.fieldType)t={...p,style:c,groupKey:"string"==typeof n.groupKey?n.groupKey:p.groupKey};else if("date"===p.fieldType)t={...p,style:c,disableHolidaySelection:"boolean"==typeof n.disableHolidaySelection?n.disableHolidaySelection:p.disableHolidaySelection,isDotDateFormat:"boolean"==typeof n.isDotDateFormat?n.isDotDateFormat:p.isDotDateFormat,isMonthDateFormat:"boolean"==typeof n.isMonthDateFormat?n.isMonthDateFormat:p.isMonthDateFormat};else if("select"===p.fieldType)t={...p,style:c,options:Array.isArray(n.options)?n.options:p.options};else if("text"===p.fieldType){let e=n.placeholder,i=e0(e)?""===e.text.trim()?void 0:e:"string"==typeof e?""===e.trim()?void 0:{text:e}:p.placeholder;t={...p,style:c,placeholder:i}}else if("textarea"===p.fieldType){let e=n.placeholder,i=e0(e)?""===e.text.trim()?void 0:e:"string"==typeof e?""===e.trim()?void 0:{text:e}:p.placeholder;t={...p,style:c,placeholder:i}}else t={...p,style:c};let f={...t};delete f.triggerKeyScopes;let h=void 0===u||0===Object.keys(u).length?f:{...f,triggerKeyScopes:u};r(e.id,{...e,uiProps:h})}catch{}},e5=(e,i,o=0)=>{let d=`${L?.id??"field"}-assist-${i.join("-")}`,r=void 0===L?"":G(L.id,i);return(0,t.jsxs)(eC,{style:{marginLeft:12*o},children:[(0,t.jsxs)(ek,{children:[(0,t.jsx)(eO,{children:"Type"}),(0,t.jsx)(ej,{type:"button",onClick:()=>{eV(e=>eW(e,i))},children:"삭제"})]}),(0,t.jsxs)(eJ,{value:e.type,onChange:e=>{let t=e.target.value;("button"===t||"message"===t||"container"===t)&&eV(e=>eG(e,i,e=>"button"===t?{type:"button",triggerKeys:e.triggerKeys,style:e.style}:"container"===t?{type:"container",triggerKeys:e.triggerKeys,style:e.style,children:"container"===e.type?e.children:[]}:{type:"message",triggerKeys:e.triggerKeys,style:e.style,message:"message"===e.type?e.message:""}))},children:[(0,t.jsx)("option",{value:"button",children:"button"}),(0,t.jsx)("option",{value:"message",children:"message"}),(0,t.jsx)("option",{value:"container",children:"container"})]}),"message"===e.type&&(0,t.jsxs)(em,{children:[(0,t.jsx)(eO,{children:"Message"}),(0,t.jsx)(eN,{type:"text",value:e.message,onChange:e=>{var t;return t=e.target.value,void eV(e=>eG(e,i,e=>"message"!==e.type?e:{...e,message:t}))},placeholder:"표시할 메시지"})]}),(0,t.jsxs)(ek,{children:[(0,t.jsx)(eO,{children:"Component Trigger Keys"}),(0,t.jsx)(ev,{type:"button",onClick:()=>{eV(e=>eG(e,i,e=>{let t=O.find(t=>!e.triggerKeys.includes(t));return void 0===t?e:{...e,triggerKeys:[...e.triggerKeys,t]}}))},children:"트리거 키 추가"})]}),(0,t.jsx)(ey,{children:e.triggerKeys.map(e=>(0,t.jsxs)(eb,{children:[(0,t.jsx)(eJ,{value:e,onChange:t=>{let o=t.target.value;A(o)&&eV(t=>eG(t,i,t=>e!==o&&t.triggerKeys.includes(o)?t:{...t,triggerKeys:t.triggerKeys.map(t=>t===e?o:t)}))},children:O.map(e=>(0,t.jsx)("option",{value:e,children:e},`${L?.id??"field"}-assist-trigger-option-${e}`))}),(0,t.jsx)(ej,{type:"button",onClick:()=>{eV(t=>eG(t,i,t=>({...t,triggerKeys:t.triggerKeys.filter(t=>t!==e)})))},children:"삭제"})]},`${d}-assist-trigger-${e}`))}),(0,t.jsxs)(em,{children:[(0,t.jsx)(eO,{children:"Component Style (JSON Object)"}),(0,t.jsx)(eP,{value:""===r?JSON.stringify(e.style??{},null,2):P[r]??JSON.stringify(e.style??{},null,2),onChange:e=>((e,t)=>{if(!L)return;let i=G(L.id,e);I(e=>({...e,[i]:t}));let o=(e=>{let t,i=e.trim();if(""===i)return{ok:!0,value:{}};try{t=JSON.parse(i)}catch{return{ok:!1,error:"유효한 JSON 오브젝트를 입력해 주세요."}}if("object"!=typeof t||null===t||Array.isArray(t))return{ok:!1,error:"스타일은 JSON 오브젝트 형태여야 합니다."};let o=Object.entries(t);if(o.some(([,e])=>"string"!=typeof e&&"number"!=typeof e))return{ok:!1,error:"스타일 값은 string 또는 number만 허용됩니다."};let d={};for(let[e,t]of o)Reflect.set(d,e,t);return{ok:!0,value:d}})(t);o.ok?(S(e=>{let t={...e};return delete t[i],t}),eV(t=>eG(t,e,e=>({...e,style:o.value})))):S(e=>({...e,[i]:o.error}))})(i,e.target.value),placeholder:`{
  "top": "0%",
  "right": "0%",
  "zIndex": 10
}`}),""!==r&&void 0!==z[r]?(0,t.jsx)(eI,{children:z[r]}):null]}),"container"===e.type?(0,t.jsxs)(em,{children:[(0,t.jsxs)(ek,{children:[(0,t.jsx)(eO,{children:"Children"}),(0,t.jsx)(ev,{type:"button",onClick:()=>{eV(e=>eG(e,i,e=>{let t,i;return"container"!==e.type?e:{...e,children:[...e.children,(i=void 0===(t=O[0])?[]:[t],{type:"button",triggerKeys:i,style:{}})]}}))},children:"자식 추가"})]}),0===e.children.length?(0,t.jsx)(e_,{children:"자식 컴포넌트가 없습니다."}):(0,t.jsx)(ew,{children:e.children.map((e,t)=>e5(e,[...i,t],o+1))})]}):null]},d)};return"play"===e?(0,t.jsx)(Y,{children:(0,t.jsxs)(Z,{children:[(0,t.jsx)(el,{children:"체험 값 설정"}),(0,t.jsx)(X,{children:N.map(e=>(0,t.jsxs)(q,{onMouseEnter:()=>n?.(e.id),onMouseLeave:()=>n?.(null),children:[(0,t.jsx)(Q,{children:e.fieldKey}),(0,t.jsx)(ee,{children:"select"===e.uiProps.fieldType&&e.uiProps.options.length>0?(0,t.jsx)(ei,{value:e.defaultValue,onChange:t=>{D(e,t.target.value)},children:e.uiProps.options.map(i=>(0,t.jsx)("option",{value:i.value,children:i.label},`${e.id}-${i.value}-${i.label}`))}):"check"===e.uiProps.fieldType||"radio"===e.uiProps.fieldType?(0,t.jsxs)(ei,{value:"true"===e.defaultValue?"true":"false",onChange:t=>{D(e,t.target.value)},children:[(0,t.jsx)("option",{value:"false",children:"false"}),(0,t.jsx)("option",{value:"true",children:"true"})]}):(0,t.jsx)(et,{type:"text",value:e.defaultValue,onChange:t=>{D(e,t.target.value)},placeholder:"값 입력"})})]},e.id))})]})}):(0,t.jsx)(Y,{children:(0,t.jsxs)(eo,{children:[(0,t.jsxs)(ed,{children:[(0,t.jsx)(el,{children:"필드키 목록"}),(0,t.jsx)(en,{children:N.map(e=>(0,t.jsxs)(ea,{children:[(0,t.jsx)(es,{ref:t=>{null===t?v.current.delete(e.id):v.current.set(e.id,t)},$isSelected:e.id===b,onClick:()=>{var t;return t=e.id,void(s?.(t),void 0===a&&y(t))},onMouseEnter:()=>n?.(e.id),onMouseLeave:()=>n?.(null),children:e.id}),(0,t.jsx)(ep,{type:"button",onClick:()=>{e1(e)},children:"붙여넣기"})]},e.id))})]}),(0,t.jsxs)(er,{children:[(0,t.jsx)(el,{children:"편집 패널"}),L?(0,t.jsxs)(ec,{children:[(0,t.jsxs)(ef,{children:[(0,t.jsx)(eh,{children:L.id}),(0,t.jsx)(eg,{type:"button",onClick:()=>void eQ(),children:j?"복사됨":"복사"})]}),(0,t.jsxs)(em,{children:[(0,t.jsxs)(eO,{children:["Type (",L.uiProps.fieldType,")"]}),(0,t.jsx)(eJ,{value:L.uiProps.fieldType??"text",onChange:e=>{let t=e.target.value;F(t)&&L&&r(L.id,{...L,uiProps:M(t,L.uiProps)})},children:x.map(e=>(0,t.jsx)("option",{value:e,children:e},e))})]}),(0,t.jsxs)(em,{children:[(0,t.jsx)(eO,{children:"값 (미리보기/체험)"}),(0,t.jsx)(eN,{type:"text",value:L.defaultValue,onChange:e=>{var t;return t=e.target.value,void(L&&r(L.id,{...L,defaultValue:t}))},placeholder:"필드 값을 입력하세요"})]}),(0,t.jsxs)(em,{children:[(0,t.jsxs)(eO,{children:["Width (",eq(L.uiProps.style.width,"25"),")"]}),(0,t.jsx)(eN,{type:"number",value:eX(L.uiProps.style.width,"25"),onChange:e=>R("width",e.target.value),placeholder:"40",step:"0.1"})]}),(0,t.jsxs)(em,{children:[(0,t.jsxs)(eO,{children:["Height (",eq(L.uiProps.style.height,"3.2","y"),")"]}),(0,t.jsx)(eN,{type:"number",value:eX(L.uiProps.style.height,"3.2"),onChange:e=>R("height",e.target.value),placeholder:"6",step:"0.1"})]}),(0,t.jsxs)(em,{children:[(0,t.jsxs)(eO,{children:["Font Size (210mm * ",eX(L.uiProps.style.fontSize,g),")"]}),(0,t.jsx)(eN,{type:"number",value:eX(L.uiProps.style.fontSize,g),onChange:e=>R("fontSize",e.target.value),placeholder:"0.05",step:"0.001"})]}),"text"===L.uiProps.fieldType&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(em,{children:[(0,t.jsxs)(eO,{children:["Font Weight (",String(L.uiProps.style.fontWeight??"400"),")"]}),(0,t.jsxs)(eJ,{value:String(L.uiProps.style.fontWeight??""),onChange:e=>R("fontWeight",e.target.value),children:[(0,t.jsxs)("option",{value:"",children:["기본값 (","400",")"]}),["400","500","600","700"].map(e=>(0,t.jsx)("option",{value:e,children:e},e))]})]}),(0,t.jsxs)(em,{children:[(0,t.jsx)(eO,{children:"Placeholder"}),(0,t.jsx)(eN,{type:"text",value:L.uiProps.placeholder?.text??"",onChange:e=>(e=>{if(!L||"text"!==L.uiProps.fieldType)return;let t=L.uiProps.placeholder?.style,i=""===e.trim()?void 0:{text:e,...void 0===t?{}:{style:t}};r(L.id,{...L,uiProps:{...L.uiProps,placeholder:i}})})(e.target.value),placeholder:"placeholder text"})]})]}),(0,t.jsxs)(em,{children:[(0,t.jsxs)(eO,{children:["Line Height (",eX(L.uiProps.style.lineHeight,"1.5"),")"]}),(0,t.jsx)(eN,{type:"number",value:eX(L.uiProps.style.lineHeight,"1.5"),onChange:e=>R("lineHeight",e.target.value),placeholder:"1.5",step:"0.1"})]}),(0,t.jsxs)(em,{children:[(0,t.jsxs)(eO,{children:["Left (",eq(L.uiProps.style.left),")"]}),(0,t.jsx)(eN,{type:"number",value:eZ(L.uiProps.style.left),onChange:e=>R("left",e.target.value),placeholder:"15",step:"0.1"})]}),(0,t.jsxs)(em,{children:[(0,t.jsxs)(eO,{children:["Top (",eq(L.uiProps.style.top,void 0,"y"),")"]}),(0,t.jsx)(eN,{type:"number",value:eZ(L.uiProps.style.top),onChange:e=>R("top",e.target.value),placeholder:"15",step:"0.1"})]}),(0,t.jsxs)(ek,{children:[(0,t.jsx)(eO,{children:"Text Align"}),(0,t.jsx)(eT,{children:["left","center","right"].map(e=>(0,t.jsxs)(e$,{children:[(0,t.jsx)(eK,{type:"radio",name:"textAlign",checked:(L.uiProps.style.textAlign??"center")===e,onChange:()=>R("textAlign",e)}),e]},e))})]}),"textarea"===L.uiProps.fieldType&&(0,t.jsx)(em,{children:(0,t.jsxs)(eE,{children:[(0,t.jsx)(eA,{type:"checkbox",checked:"middle"===L.uiProps.style.verticalAlign,onChange:e=>R("verticalAlign",e.target.checked?"middle":"")}),"Vertical Center (Display/Print)"]})}),"select"===L.uiProps.fieldType&&(0,t.jsxs)(em,{children:[(0,t.jsxs)(ek,{children:[(0,t.jsxs)(eF,{children:[(0,t.jsx)(eO,{children:"Select Options"}),(0,t.jsx)(eU,{type:"button",onClick:()=>_(e=>!e),children:C?"접기":"펼치기"})]}),C&&(0,t.jsx)(eD,{type:"button",onClick:()=>{L&&"select"===L.uiProps.fieldType&&r(L.id,{...L,uiProps:{...L.uiProps,options:[...L.uiProps.options,{label:"",value:""}]}})},children:"옵션 추가"})]}),C&&(0,t.jsx)(eL,{children:L.uiProps.options.map((e,i)=>(0,t.jsxs)(eM,{children:[(0,t.jsx)(eR,{type:"text",value:e.label,onChange:e=>eB(i,"label",e.target.value),placeholder:"label"}),(0,t.jsx)(eR,{type:"text",value:e.value,onChange:e=>eB(i,"value",e.target.value),placeholder:"value"}),(0,t.jsx)(eH,{type:"button",onClick:()=>(e=>{if(!L||"select"!==L.uiProps.fieldType)return;let t=L.uiProps.options.filter((t,i)=>i!==e);r(L.id,{...L,uiProps:{...L.uiProps,options:t.length>0?t:[{label:"",value:""}]}})})(i),children:"삭제"})]},`${L.id}-${e.value}-${e.label}`))})]}),"radio"===L.uiProps.fieldType&&(0,t.jsxs)(em,{children:[(0,t.jsx)(eO,{children:"Radio Group Key"}),(0,t.jsx)(eN,{type:"text",value:L.uiProps.groupKey??"",onChange:e=>{var t;return t=e.target.value,void(L&&"radio"===L.uiProps.fieldType&&r(L.id,{...L,uiProps:{...L.uiProps,groupKey:t}}))},placeholder:"group key"}),(0,t.jsxs)(eE,{children:[(0,t.jsx)(eA,{type:"checkbox",checked:!0===L.uiProps.showPrintFieldBorders,onChange:e=>{var t;return t=e.target.checked,void(L&&"radio"===L.uiProps.fieldType&&r(L.id,{...L,uiProps:{...L.uiProps,showPrintFieldBorders:t}}))}}),"Show Print Field Borders"]}),(0,t.jsxs)(eE,{children:[(0,t.jsx)(eA,{type:"checkbox",checked:void 0!==L.uiProps.style.borderRadius,onChange:e=>(e=>{if(!L||"radio"!==L.uiProps.fieldType)return;let t={...L.uiProps.style};e?t.borderRadius=t.borderRadius??"50%":delete t.borderRadius,r(L.id,{...L,uiProps:{...L.uiProps,style:t}})})(e.target.checked)}),"Border Radius (",eq(L.uiProps.style.borderRadius,"0"),")"]}),(0,t.jsx)("div",{style:{display:void 0===L.uiProps.style.borderRadius?"none":"block"},children:(0,t.jsx)(eN,{type:"number",value:eX(L.uiProps.style.borderRadius,"0"),onChange:e=>R("borderRadius",e.target.value),placeholder:"0",step:"1"})})]}),"date"===L.uiProps.fieldType&&(0,t.jsxs)(em,{children:[(0,t.jsxs)(eE,{children:[(0,t.jsx)(eA,{type:"checkbox",checked:!0===L.uiProps.disableHolidaySelection,onChange:e=>{var t;return t=e.target.checked,void(L&&"date"===L.uiProps.fieldType&&r(L.id,{...L,uiProps:{...L.uiProps,disableHolidaySelection:t}}))}}),"Disable Holiday Selection"]}),(0,t.jsxs)(eE,{children:[(0,t.jsx)(eA,{type:"checkbox",checked:!0===L.uiProps.isDotDateFormat,onChange:e=>{var t;return t=e.target.checked,void(L&&"date"===L.uiProps.fieldType&&r(L.id,{...L,uiProps:{...L.uiProps,isDotDateFormat:t}}))}}),"Dot Format (YYYY.MM.DD)"]}),(0,t.jsxs)(eE,{children:[(0,t.jsx)(eA,{type:"checkbox",checked:!0===L.uiProps.isMonthDateFormat,onChange:e=>{var t;return t=e.target.checked,void(L&&"date"===L.uiProps.fieldType&&r(L.id,{...L,uiProps:{...L.uiProps,isMonthDateFormat:t}}))}}),"Month-Date Format (MM월 DD일)"]})]}),"textarea"===L.uiProps.fieldType&&(0,t.jsx)(em,{children:(c=T[p=L.id]??JSON.stringify(L.uiProps.placeholder?.style??{},null,2),u=K[p],(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(eO,{children:"Placeholder"}),(0,t.jsx)(eN,{type:"text",value:L.uiProps.placeholder?.text??"",onChange:e=>(e=>{if(!L||"textarea"!==L.uiProps.fieldType)return;let t=L.uiProps.placeholder?.style,i=""===e.trim()?void 0:{text:e,...void 0===t?{}:{style:t}};r(L.id,{...L,uiProps:{...L.uiProps,placeholder:i}})})(e.target.value),placeholder:"placeholder text"}),(0,t.jsx)(eO,{children:"Placeholder Style (JSON Object)"}),(0,t.jsx)(eP,{value:c,onChange:e=>(e=>{if(!L||"textarea"!==L.uiProps.fieldType)return;let t=L.id;$(i=>({...i,[t]:e}));let i=L.uiProps.placeholder?.text;if(void 0===i||""===i.trim())return void E(e=>({...e,[t]:"Placeholder 텍스트를 먼저 입력해 주세요."}));if(""===e.trim()){E(e=>{if(void 0===e[t])return e;let i={...e};return delete i[t],i}),r(L.id,{...L,uiProps:{...L.uiProps,placeholder:{text:i}}});return}try{let o=JSON.parse(e);if(!("object"==typeof o&&null!==o&&!Array.isArray(o)&&Object.values(o).every(e=>null==e||"string"==typeof e||"number"==typeof e)))return void E(e=>({...e,[t]:"JSON object 형태여야 합니다."}));let d=Object.keys(o).length>0;E(e=>{if(void 0===e[t])return e;let i={...e};return delete i[t],i}),r(L.id,{...L,uiProps:{...L.uiProps,placeholder:{text:i,...d?{style:o}:{}}}})}catch{E(e=>({...e,[t]:"유효한 JSON이 아닙니다."}))}})(e.target.value),placeholder:`{
  "color": "#9ca3af",
  "textAlign": "center"
}`}),void 0!==u?(0,t.jsx)(eI,{children:u}):null]}))}),(0,t.jsxs)(ez,{children:[(0,t.jsxs)(eS,{children:[(0,t.jsxs)(eE,{children:[(0,t.jsx)(eA,{type:"checkbox",checked:void 0!==L.uiProps.style.padding,onChange:e=>eY("padding",e.target.checked)}),"Base Pad (",eq(L.uiProps.style.padding,"1.5"),")"]}),(0,t.jsx)(eN,{type:"number",value:eX(L.uiProps.style.padding,"1.5"),onChange:e=>R("padding",e.target.value),placeholder:"0",step:"0.1",disabled:void 0===L.uiProps.style.padding})]}),(0,t.jsxs)(eS,{children:[(0,t.jsxs)(eE,{children:[(0,t.jsx)(eA,{type:"checkbox",checked:void 0!==L.uiProps.style.paddingLeft,onChange:e=>eY("paddingLeft",e.target.checked)}),"Left Pad (",eq(L.uiProps.style.paddingLeft,"1.5"),")"]}),(0,t.jsx)(eN,{type:"number",value:eX(L.uiProps.style.paddingLeft,"1.5"),onChange:e=>R("paddingLeft",e.target.value),placeholder:"0",step:"0.1",disabled:void 0===L.uiProps.style.paddingLeft})]}),(0,t.jsxs)(eS,{children:[(0,t.jsxs)(eE,{children:[(0,t.jsx)(eA,{type:"checkbox",checked:void 0!==L.uiProps.style.paddingRight,onChange:e=>eY("paddingRight",e.target.checked)}),"Right Pad (",eq(L.uiProps.style.paddingRight,"1.5"),")"]}),(0,t.jsx)(eN,{type:"number",value:eX(L.uiProps.style.paddingRight,"1.5"),onChange:e=>R("paddingRight",e.target.value),placeholder:"0",step:"0.1",disabled:void 0===L.uiProps.style.paddingRight})]})]}),(0,t.jsx)(em,{children:(0,t.jsxs)(eE,{children:[(0,t.jsx)(eA,{type:"checkbox",checked:L.uiProps.editable??!1,onChange:e=>{var t;return t=e.target.checked,void(L&&r(L.id,{...L,uiProps:{...L.uiProps,editable:t}}))}}),"Editable"]})}),(0,t.jsxs)(em,{children:[(0,t.jsxs)(eE,{children:[(0,t.jsx)(eA,{type:"checkbox",checked:void 0!==L.uiProps.label,onChange:e=>{var t;return t=e.target.checked,void J(e=>{if(t)return void 0!==e?e:{field:H()}})}}),"Label 사용"]}),void 0!==L.uiProps.label?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(eO,{children:"Label Field Name"}),(0,t.jsx)(eN,{type:"text",value:L.uiProps.label.field.name,onChange:e=>{var t;return t=e.target.value,void J(e=>({field:void 0===e?{...H(),name:t}:{...e.field,name:t},...e?.group===void 0?{}:{group:e.group}}))},placeholder:"field label"}),(0,t.jsx)(eO,{children:"Label Field Sort Order"}),(0,t.jsx)(eN,{type:"number",value:L.uiProps.label.field.sortOrder??"",onChange:e=>{let t;return t=U(e.target.value),void J(e=>({field:void 0===e?{...H(),sortOrder:t}:{...e.field,sortOrder:t},...e?.group===void 0?{}:{group:e.group}}))},placeholder:"optional",step:"1"}),(0,t.jsxs)(eE,{children:[(0,t.jsx)(eA,{type:"checkbox",checked:void 0!==L.uiProps.label.group,onChange:e=>{var t;return t=e.target.checked,void J(e=>{if(void 0===e){if(!t)return;return{field:H(),group:{name:"",sortOrder:void 0}}}return t?{...e,group:e.group??{name:"",sortOrder:void 0}}:{field:e.field}})}}),"Label Group 사용"]}),void 0!==L.uiProps.label.group?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(eO,{children:"Label Group Name"}),(0,t.jsx)(eN,{type:"text",value:L.uiProps.label.group.name,onChange:e=>{var t;return t=e.target.value,void J(e=>{if(void 0===e)return{field:H(),group:{name:t,sortOrder:void 0}};let i={name:t,sortOrder:e.group?.sortOrder};return{...e,group:i}})},placeholder:"group label"}),(0,t.jsx)(eO,{children:"Label Group Sort Order"}),(0,t.jsx)(eN,{type:"number",value:L.uiProps.label.group.sortOrder??"",onChange:e=>{let t;return t=U(e.target.value),void J(e=>void 0===e?{field:H(),group:{name:"",sortOrder:t}}:{...e,group:{name:e.group?.name??"",sortOrder:t}})},placeholder:"optional",step:"1"})]}):null]}):null]}),(0,t.jsxs)(em,{children:[(0,t.jsxs)(ek,{children:[(0,t.jsx)(eO,{children:"Trigger Keys"}),(0,t.jsx)(ev,{type:"button",onClick:()=>{if(!L)return;let e=L.uiProps.triggerKeys??[],t=O.find(t=>!e.includes(t));if(void 0===t)return;let i=[...e,t];r(L.id,{...L,uiProps:{...L.uiProps,triggerKeys:i}})},children:"트리거 키 추가"})]}),(0,t.jsx)(ey,{children:(L.uiProps.triggerKeys??[]).map(e=>(0,t.jsxs)(eb,{children:[(0,t.jsx)(eJ,{value:e,onChange:t=>{let i=t.target.value;A(i)&&((e,t)=>{if(!L)return;let i=L.uiProps.triggerKeys??[];if(e!==t&&i.includes(t))return;let o=i.map(i=>i===e?t:i),d=V(L.uiProps,i=>{let o={...i},d=i[e]?.trim();return void 0!==d&&""!==d&&(o[t]=d),delete o[e],o});r(L.id,{...L,uiProps:{...d,triggerKeys:o}})})(e,i)},children:O.map(e=>(0,t.jsx)("option",{value:e,children:e},`${L.id}-trigger-option-${e}`))}),(0,t.jsx)(ej,{type:"button",onClick:()=>(e=>{if(!L)return;let t=(L.uiProps.triggerKeys??[]).filter(t=>t!==e),i=V(L.uiProps,t=>{let i={...t};return delete i[e],i});r(L.id,{...L,uiProps:{...i,triggerKeys:t}})})(e),children:"삭제"}),(0,t.jsx)(eN,{type:"text",value:L.uiProps.triggerKeyScopes?.[e]??"",onChange:t=>((e,t)=>{if(!L)return;let i=t.trim(),o=V(L.uiProps,t=>{let o={...t};return""===i?delete o[e]:o[e]=i,o});r(L.id,{...L,uiProps:o})})(e,t.target.value),placeholder:"scope (optional)"})]},`${L.id}-trigger-key-${e}`))})]}),(0,t.jsxs)(em,{children:[(0,t.jsxs)(ek,{children:[(0,t.jsx)(eO,{children:"Assist UI Components"}),(0,t.jsx)(ev,{type:"button",onClick:()=>{if(!L)return;let e=O[0],t=[...L.uiProps.assistUiComponents??[],{type:"button",triggerKeys:void 0===e?[]:[e],style:{}}];r(L.id,{...L,uiProps:{...L.uiProps,assistUiComponents:t}})},children:"컴포넌트 추가"})]}),(0,t.jsx)(ew,{children:(L.uiProps.assistUiComponents??[]).map((e,t)=>e5(e,[t]))})]}),(0,t.jsx)(ex,{type:"button",onClick:()=>{l(L)},children:"저장"})]}):(0,t.jsx)(eu,{children:"왼쪽에서 필드를 선택해 주세요."})]})]})})}let Y=d.default.div.withConfig({componentId:"zh__sc-7a7d35c6-0"})`
  overflow: hidden;
  display: flex;
  flex-direction: column;

  width: 800px;
  padding: 12px;
  border-left: 1px solid #e0e0e0;

  background: #f5f5f5;
`,Z=d.default.div.withConfig({componentId:"zh__sc-7a7d35c6-1"})`
  overflow: hidden;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 10px;
`,X=d.default.div.withConfig({componentId:"zh__sc-7a7d35c6-2"})`
  overflow-y: auto;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 8px;

  min-height: 0;
`,q=d.default.div.withConfig({componentId:"zh__sc-7a7d35c6-3"})`
  display: grid;
  grid-template-columns: minmax(0, 180px) minmax(0, 1fr);
  gap: 8px;
  align-items: center;

  padding: 8px;
  border: 1px solid #e5e7eb;
  border-radius: 6px;

  background: #fff;
`,Q=d.default.div.withConfig({componentId:"zh__sc-7a7d35c6-4"})`
  overflow: hidden;

  font-size: 12px;
  font-weight: 600;
  color: #374151;
  text-overflow: ellipsis;
  white-space: nowrap;
`,ee=d.default.div.withConfig({componentId:"zh__sc-7a7d35c6-5"})`
  min-width: 0;
`,et=d.default.input.withConfig({componentId:"zh__sc-7a7d35c6-6"})`
  width: 100%;
  height: 36px;
  padding: 0 10px;
  border: 1px solid #d1d5db;
  border-radius: 6px;

  font-size: 13px;
  color: #111827;

  background: #fff;
`,ei=d.default.select.withConfig({componentId:"zh__sc-7a7d35c6-7"})`
  width: 100%;
  height: 36px;
  padding: 0 10px;
  border: 1px solid #d1d5db;
  border-radius: 6px;

  font-size: 13px;
  color: #111827;

  background: #fff;
`,eo=d.default.div.withConfig({componentId:"zh__sc-7a7d35c6-8"})`
  display: flex;
  flex: 1;
  gap: 12px;
  min-height: 0;
`,ed=d.default.div.withConfig({componentId:"zh__sc-7a7d35c6-9"})`
  overflow: hidden;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 8px;

  min-width: 0;
`,er=d.default.div.withConfig({componentId:"zh__sc-7a7d35c6-10"})`
  overflow: hidden;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 8px;

  min-width: 0;
`,el=d.default.h3.withConfig({componentId:"zh__sc-7a7d35c6-11"})`
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  color: #333;
`,en=d.default.div.withConfig({componentId:"zh__sc-7a7d35c6-12"})`
  overflow-y: auto;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 8px;

  min-height: 0;
`,ea=d.default.div.withConfig({componentId:"zh__sc-7a7d35c6-13"})`
  display: flex;
  gap: 6px;
  align-items: center;
`,es=d.default.button.withConfig({componentId:"zh__sc-7a7d35c6-14"})`
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
`,ep=d.default.button.withConfig({componentId:"zh__sc-7a7d35c6-15"})`
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
`,ec=d.default.div.withConfig({componentId:"zh__sc-7a7d35c6-16"})`
  overflow-y: auto;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 12px;

  padding: 10px;
  border: 1px solid #e0e0e0;
  border-radius: 6px;

  background: white;
`,eu=d.default.div.withConfig({componentId:"zh__sc-7a7d35c6-17"})`
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
`,ef=d.default.div.withConfig({componentId:"zh__sc-7a7d35c6-18"})`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: space-between;
`,eh=d.default.h4.withConfig({componentId:"zh__sc-7a7d35c6-19"})`
  margin: 0;
  font-size: 12px;
  font-weight: 600;
  color: #666;
`,eg=d.default.button.withConfig({componentId:"zh__sc-7a7d35c6-20"})`
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
`,ex=d.default.button.withConfig({componentId:"zh__sc-7a7d35c6-21"})`
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
`,em=d.default.div.withConfig({componentId:"zh__sc-7a7d35c6-22"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,ey=d.default.div.withConfig({componentId:"zh__sc-7a7d35c6-23"})`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,eb=d.default.div.withConfig({componentId:"zh__sc-7a7d35c6-24"})`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 8px;
  align-items: center;
`,ev=d.default.button.withConfig({componentId:"zh__sc-7a7d35c6-25"})`
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
`,ej=d.default.button.withConfig({componentId:"zh__sc-7a7d35c6-26"})`
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
`,ew=d.default.div.withConfig({componentId:"zh__sc-7a7d35c6-27"})`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,eC=d.default.div.withConfig({componentId:"zh__sc-7a7d35c6-28"})`
  display: flex;
  flex-direction: column;
  gap: 8px;

  padding: 10px;
  border: 1px solid #e5e7eb;
  border-radius: 6px;

  background: #f9fafb;
`,e_=d.default.div.withConfig({componentId:"zh__sc-7a7d35c6-29"})`
  font-size: 12px;
  color: #6b7280;
`,eP=d.default.textarea.withConfig({componentId:"zh__sc-7a7d35c6-30"})`
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
`,eI=d.default.div.withConfig({componentId:"zh__sc-7a7d35c6-31"})`
  font-size: 11px;
  font-weight: 600;
  color: #b91c1c;
`,ez=d.default.div.withConfig({componentId:"zh__sc-7a7d35c6-32"})`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 8px;

  box-sizing: border-box;
  width: 100%;
  min-width: 0;
`,eS=d.default.div.withConfig({componentId:"zh__sc-7a7d35c6-33"})`
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 0;
`,ek=(0,d.default)(em).withConfig({componentId:"zh__sc-7a7d35c6-34"})`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`,eT=d.default.div.withConfig({componentId:"zh__sc-7a7d35c6-35"})`
  display: flex;
  gap: 12px;
  align-items: center;
`,e$=d.default.label.withConfig({componentId:"zh__sc-7a7d35c6-36"})`
  display: flex;
  gap: 6px;
  align-items: center;

  font-size: 12px;
  color: #555;
  text-transform: capitalize;
`,eK=d.default.input.withConfig({componentId:"zh__sc-7a7d35c6-37"})`
  margin: 0;
`,eE=d.default.label.withConfig({componentId:"zh__sc-7a7d35c6-38"})`
  display: flex;
  gap: 8px;
  align-items: center;

  min-width: 0;

  font-size: 12px;
  font-weight: 500;
  color: #555;
`,eA=d.default.input.withConfig({componentId:"zh__sc-7a7d35c6-39"})`
  margin: 0;
`,eO=d.default.label.withConfig({componentId:"zh__sc-7a7d35c6-40"})`
  font-size: 12px;
  font-weight: 500;
  color: #555;
`,eN=d.default.input.withConfig({componentId:"zh__sc-7a7d35c6-41"})`
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
`,eL=d.default.div.withConfig({componentId:"zh__sc-7a7d35c6-42"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,eF=d.default.div.withConfig({componentId:"zh__sc-7a7d35c6-43"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,eM=d.default.div.withConfig({componentId:"zh__sc-7a7d35c6-44"})`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) auto;
  gap: 8px;
  align-items: center;
`,eR=(0,d.default)(eN).withConfig({componentId:"zh__sc-7a7d35c6-45"})`
  min-width: 0;
`,eD=d.default.button.withConfig({componentId:"zh__sc-7a7d35c6-46"})`
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
`,eU=d.default.button.withConfig({componentId:"zh__sc-7a7d35c6-47"})`
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
`,eH=d.default.button.withConfig({componentId:"zh__sc-7a7d35c6-48"})`
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
`,eJ=d.default.select.withConfig({componentId:"zh__sc-7a7d35c6-49"})`
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
`,eV=e=>({id:`upload-row-${Math.random().toString(36).slice(2,10)}`,pageInput:String(e??1),file:null});function eG({templateName:e,defaultPage:i,isUploading:d,onClose:r,onUpload:l}){let[n,a]=(0,o.useState)(()=>[eV(i)]),s=n.map(e=>{let t=Number(e.pageInput.trim());return null===e.file||!Number.isInteger(t)||t<1?null:{file:e.file,page:t}}).filter(e=>null!==e);return(0,t.jsx)(eW,{onClick:()=>{!0!==d&&r()},children:(0,t.jsxs)(eB,{onClick:e=>{e.stopPropagation()},children:[(0,t.jsx)(eY,{children:"템플릿 페이지 이미지 업로드"}),(0,t.jsx)(eZ,{children:""===e?"템플릿 미선택":`템플릿: ${e}`}),(0,t.jsx)(eX,{children:"템플릿 이미지 배열은 요소별 개별 제어를 지원하지 않습니다. 전체 항목을 한 번에 업로드해 주세요."}),(0,t.jsxs)(eq,{children:[(0,t.jsx)(eQ,{children:"업로드 항목"}),(0,t.jsx)(e0,{children:n.map((e,o)=>(0,t.jsxs)(e1,{children:[(0,t.jsx)(e5,{children:o+1}),(0,t.jsx)(e7,{type:"number",min:1,step:1,value:e.pageInput,onChange:t=>{var i,o;i=e.id,o=t.target.value,a(e=>e.map(e=>e.id===i?{...e,pageInput:o}:e))},disabled:d}),(0,t.jsx)(e4,{type:"file",accept:"image/png,image/jpeg,image/webp",onChange:t=>{var i;let o=t.target.files?.[0]??null;i=e.id,a(e=>e.map(e=>e.id===i?{...e,file:o}:e))},disabled:d}),(0,t.jsx)(e6,{type:"button",onClick:()=>{var t;t=e.id,a(e=>e.length<=1?[eV(i)]:e.filter(e=>e.id!==t))},disabled:d||n.length<=1,children:"-"})]},e.id))}),(0,t.jsx)(e3,{type:"button",onClick:()=>{a(e=>[...e,eV(i)])},disabled:d,children:"+ 항목 추가"}),(0,t.jsx)(e2,{children:"페이지 번호와 이미지 파일을 같이 입력하세요. 지원 형식: PNG, JPG, WEBP"})]}),(0,t.jsxs)(e8,{children:[(0,t.jsx)(e9,{type:"button",onClick:()=>{r()},disabled:d,children:"취소"}),(0,t.jsx)(e9,{type:"button",$primary:!0,disabled:0===s.length||d,onClick:()=>{0!==s.length&&l({items:s})},children:!0===d?"업로드 중...":"업로드"})]})]})})}let eW=d.default.div.withConfig({componentId:"zh__sc-4384a4ef-0"})`
  position: fixed;
  z-index: 10;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 16px;

  background: rgb(15 23 42 / 40%);
`,eB=d.default.div.withConfig({componentId:"zh__sc-4384a4ef-1"})`
  display: flex;
  flex-direction: column;
  gap: 16px;

  width: min(520px, 100%);
  max-height: 70vh;
  padding: 20px;
  border-radius: 12px;

  background: #fff;
`,eY=d.default.h3.withConfig({componentId:"zh__sc-4384a4ef-2"})`
  margin: 0;
  font-size: 16px;
  font-weight: 700;
  color: #111827;
`,eZ=d.default.div.withConfig({componentId:"zh__sc-4384a4ef-3"})`
  font-size: 13px;
  color: #4b5563;
`,eX=d.default.div.withConfig({componentId:"zh__sc-4384a4ef-4"})`
  padding: 10px 12px;
  border: 1px solid #fecaca;
  border-radius: 8px;

  font-size: 12px;
  font-weight: 600;
  line-height: 1.45;
  color: #991b1b;

  background: #fef2f2;
`,eq=d.default.label.withConfig({componentId:"zh__sc-4384a4ef-5"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,eQ=d.default.div.withConfig({componentId:"zh__sc-4384a4ef-6"})`
  font-size: 13px;
  font-weight: 600;
  color: #374151;
`,e0=d.default.div.withConfig({componentId:"zh__sc-4384a4ef-7"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,e1=d.default.div.withConfig({componentId:"zh__sc-4384a4ef-8"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,e5=d.default.div.withConfig({componentId:"zh__sc-4384a4ef-9"})`
  min-width: 18px;
  font-size: 12px;
  font-weight: 600;
  color: #6b7280;
`,e6=d.default.button.withConfig({componentId:"zh__sc-4384a4ef-10"})`
  cursor: pointer;

  width: 36px;
  height: 36px;
  border: 1px solid #d1d5db;
  border-radius: 8px;

  font-size: 16px;
  color: #374151;

  background: #fff;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.55;
  }
`,e3=d.default.button.withConfig({componentId:"zh__sc-4384a4ef-11"})`
  cursor: pointer;

  width: fit-content;
  height: 36px;
  padding: 0 12px;
  border: 1px dashed #7c3aed;
  border-radius: 8px;

  font-size: 13px;
  font-weight: 600;
  color: #7c3aed;

  background: #f5f3ff;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.55;
  }
`,e7=d.default.input.withConfig({componentId:"zh__sc-4384a4ef-12"})`
  width: 104px;
  height: 40px;
  padding: 0 12px;
  border: 1px solid #d1d5db;
  border-radius: 8px;

  font-size: 14px;
  color: #111827;
`,e4=d.default.input.withConfig({componentId:"zh__sc-4384a4ef-13"})`
  flex: 1;
  max-width: 100%;
  font-size: 14px;
`,e2=d.default.div.withConfig({componentId:"zh__sc-4384a4ef-14"})`
  font-size: 12px;
  color: #6b7280;
`,e8=d.default.div.withConfig({componentId:"zh__sc-4384a4ef-15"})`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`,e9=d.default.button.withConfig({componentId:"zh__sc-4384a4ef-16"})`
  cursor: pointer;

  height: 36px;
  padding: 0 14px;
  border: 1px solid ${({$primary:e})=>!0===e?"#0f766e":"#d1d5db"};
  border-radius: 8px;

  font-size: 14px;
  font-weight: 700;
  color: ${({$primary:e})=>!0===e?"#fff":"#374151"};

  background: ${({$primary:e})=>!0===e?"#0f766e":"#fff"};

  &:disabled {
    cursor: not-allowed;
    opacity: 0.55;
  }
`;function te({mode:e,selectedServiceType:i,contracts:o,documents:d,templates:r,pages:l,selectedContractId:n,selectedDocumentId:a,selectedTemplateId:s,selectedPageId:p,scale:c,isApplyingAllFieldsFontSize:u,onChangeServiceType:f,onChangeContract:h,onChangeDocument:g,onChangeTemplate:x,onChangePage:m,onChangeScale:y,onChangeMode:b,onApplyAllFieldsFontSize:v,onOpenPrintModal:j,onOpenImageUploadModal:w,onOpenAddFieldModal:C}){return(0,t.jsxs)(tt,{children:[(0,t.jsxs)(ti,{children:[(0,t.jsx)(to,{children:"서비스"}),(0,t.jsxs)(td,{value:i,onChange:e=>{f("NUTRITION"===e.target.value?"NUTRITION":"MEAL")},children:[(0,t.jsx)("option",{value:"MEAL",children:"식사"}),(0,t.jsx)("option",{value:"NUTRITION",children:"영양"})]})]}),(0,t.jsxs)(ti,{children:[(0,t.jsx)(to,{children:"계약"}),(0,t.jsx)(td,{value:n,onChange:e=>{h(e.target.value)},disabled:0===o.length,children:0===o.length?(0,t.jsx)("option",{value:"",children:"계약 없음"}):o.map(e=>(0,t.jsxs)("option",{value:e.id,children:[e.client.name," (",e.managementCode,")"]},e.id))})]}),(0,t.jsxs)(ti,{children:[(0,t.jsx)(to,{children:"문서"}),(0,t.jsx)(td,{value:a,onChange:e=>{g(e.target.value)},disabled:0===d.length,children:0===d.length?(0,t.jsx)("option",{value:"",children:"문서 없음"}):d.map(e=>(0,t.jsxs)("option",{value:e.id,children:[e.id," (",e.displayStatus,") / ",e.templateName]},e.id))})]}),(0,t.jsxs)(ti,{children:[(0,t.jsx)(to,{children:"템플릿"}),(0,t.jsx)(td,{value:s,onChange:e=>{x(e.target.value)},children:r.map(e=>(0,t.jsx)("option",{value:e.id,children:e.name},e.id))})]}),(0,t.jsxs)(ti,{children:[(0,t.jsx)(to,{children:"페이지"}),(0,t.jsx)(td,{value:p,onChange:e=>{m(e.target.value)},children:l.map(e=>(0,t.jsxs)("option",{value:e.id,children:[e.page,"페이지"]},e.id))})]}),(0,t.jsxs)(ti,{children:[(0,t.jsx)(to,{children:"배율"}),(0,t.jsx)(tr,{type:"number",value:c,onChange:e=>{y(e.target.value)},min:10,step:10})]}),(0,t.jsx)(tl,{type:"button",$isPlayMode:"play"===e,onClick:()=>{b("edit"===e?"play":"edit")},children:"edit"===e?"편집 중":"체험 중"}),(0,t.jsx)(tp,{type:"button",onClick:v,disabled:u,children:u?"전체 템플릿 폰트 적용/저장 중...":"전체 템플릿 폰트 0.023 적용/저장"}),(0,t.jsx)(tn,{type:"button",onClick:j,children:"출력"}),(0,t.jsx)(ta,{type:"button",onClick:w,disabled:""===s,children:"업로드"}),(0,t.jsx)(ts,{type:"button",onClick:C,disabled:""===s,children:"필드키"})]})}let tt=d.default.div.withConfig({componentId:"zh__sc-de981c25-0"})`
  display: flex;
  flex-wrap: nowrap;
  gap: 24px;
  align-items: center;
`,ti=d.default.label.withConfig({componentId:"zh__sc-de981c25-1"})`
  display: flex;
  gap: 8px;
  align-items: center;
  min-width: 0;
`,to=d.default.div.withConfig({componentId:"zh__sc-de981c25-2"})`
  flex: 0 0 auto;
  font-size: 12px;
  font-weight: 600;
  color: #4b5563;
`,td=d.default.select.withConfig({componentId:"zh__sc-de981c25-3"})`
  max-width: 200px;
  height: 36px;
  padding: 0 12px;
  border: 1px solid #d1d5db;
  border-radius: 8px;

  font-size: 14px;
  color: #111827;

  background: #fff;
`,tr=d.default.input.withConfig({componentId:"zh__sc-de981c25-4"})`
  width: 100px;
  height: 36px;
  padding: 0 12px;
  border: 1px solid #d1d5db;
  border-radius: 8px;

  font-size: 14px;
  color: #111827;

  background: #fff;
`,tl=d.default.button.withConfig({componentId:"zh__sc-de981c25-5"})`
  cursor: pointer;

  height: 36px;
  padding: 0 12px;
  border: 1px solid ${({$isPlayMode:e})=>e?"#0f766e":"#1d4ed8"};
  border-radius: 8px;

  font-size: 13px;
  font-weight: 700;
  color: ${({$isPlayMode:e})=>e?"#0f766e":"#1d4ed8"};

  background: ${({$isPlayMode:e})=>e?"#f0fdfa":"#eff6ff"};
`,tn=d.default.button.withConfig({componentId:"zh__sc-de981c25-6"})`
  cursor: pointer;

  height: 36px;
  padding: 0 16px;
  border: 1px solid #1d4ed8;
  border-radius: 8px;

  font-size: 14px;
  font-weight: 700;
  color: #1d4ed8;

  background: #eff6ff;
`,ta=d.default.button.withConfig({componentId:"zh__sc-de981c25-7"})`
  cursor: pointer;

  height: 36px;
  padding: 0 16px;
  border: 1px solid #0f766e;
  border-radius: 8px;

  font-size: 14px;
  font-weight: 700;
  color: #0f766e;

  background: #f0fdfa;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.55;
  }
`,ts=d.default.button.withConfig({componentId:"zh__sc-de981c25-8"})`
  cursor: pointer;

  height: 36px;
  padding: 0 16px;
  border: 1px solid #7c3aed;
  border-radius: 8px;

  font-size: 14px;
  font-weight: 700;
  color: #fff;

  background: #7c3aed;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.65;
  }
`,tp=d.default.button.withConfig({componentId:"zh__sc-de981c25-9"})`
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
`;var tc=e.i(68339),tu=e.i(6412),tf=e.i(43174),th=e.i(36534);let tg=d.default.div.withConfig({componentId:"zh__sc-8687c381-0"})`
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
`,tx=d.default.div.withConfig({componentId:"zh__sc-8687c381-1"})`
  overflow: hidden;
  display: flex;
  flex: 1;
  gap: 0;
`,tm=d.default.div.withConfig({componentId:"zh__sc-8687c381-2"})`
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
`;e.s(["default",0,function(){let e=(0,i.useRouter)(),d=(0,i.useSearchParams)(),[l,a]=(0,o.useState)([]),[s,p]=(0,o.useState)([]),[c,u]=(0,o.useState)([]),[f,h]=(0,o.useState)([]),[g,x]=(0,o.useState)([]),[m,y]=(0,o.useState)(null),[b,v]=(0,o.useState)(null),[j,w]=(0,o.useState)(!0),[C,_]=(0,o.useState)(!1),[P,I]=(0,o.useState)(!1),[z,S]=(0,o.useState)([]),[$,K]=(0,o.useState)(!1),[E,A]=(0,o.useState)(!1),[O,N]=(0,o.useState)(!1),[F,M]=(0,o.useState)(!1),[R,D]=(0,o.useState)("edit"),[U,H]=(0,o.useState)({}),J="NUTRITION"===d.get("serviceType")?"NUTRITION":"MEAL";(0,o.useEffect)(()=>{let e=!0;return(async()=>{w(!0);let[t,i]=await r.default.data.docs.getTemplateList({serviceType:J}),[o,d]=await r.default.data.contract.getList({serviceType:J});if(null!==t||null!==o||!e){a([]),p([]),u([]),h([]),x([]),w(!1);return}let l=await Promise.all(i.map(async e=>{let[t,i]=await r.default.data.docs.getTemplateFieldList({templateId:e.id});return null!==t?[]:i.map((t,i)=>({id:`${e.id}-${t.page}-${t.fieldKey}-${i+1}`,templateId:e.id,page:t.page,fieldKey:t.fieldKey,uiProps:t.uiProps,defaultValue:t.value??"",value:t.value}))}));e&&(a(i),p(d),x(l.flat()),w(!1))})(),()=>{e=!1}},[J]);let V=d.get("pageId")??"",G=d.get("templateId")??"",W=d.get("contractId")??"",Y=d.get("documentId")??"",Z=d.get("scale")??"100",X=(0,o.useMemo)(()=>l.flatMap(e=>(e.templateImagePath??[]).map((t,i)=>({id:`${e.id}-${i+1}`,templateId:e.id,imagePath:t,page:i+1}))),[l]),q=(0,o.useMemo)(()=>c.flatMap(e=>e.documents.map(t=>({...t,templateId:e.templateId,templateName:e.templateName}))),[c]),Q=s.find(e=>e.id===W)??s[0]??null,ee=Q?.id??"",et=q.find(e=>e.id===Y)??q[0]??null,ei=et?.id??"",eo=X.find(e=>e.id===V)??null,ed=l.find(e=>e.id===G)??null,er=ed?.id??eo?.templateId??l[0]?.id??"",el=e=>X.filter(t=>t.templateId===e).sort((e,t)=>e.page-t.page),en=el(er),ea=g.filter(e=>e.templateId===er).sort((e,t)=>e.page!==t.page?e.page-t.page:e.fieldKey.localeCompare(t.fieldKey)),es=en.find(e=>e.id===V)??en[0]??null,ep=es?.page,ec=ea.filter(e=>e.page===ep),eu=`${er}:${V}:${ei}`,ef=(0,o.useMemo)(()=>new Map(f.map(e=>[`${e.page}:${e.fieldKey}`,e.value])),[f]),eh=e=>{let t=`${e.page}:${e.fieldKey}`,i=U[`${eu}:${t}`];return("play"===R?i:void 0)??(""===ei?void 0:ef.get(t))??e.defaultValue},eg="play"===R?(0,th.resolveTriggerRuntimeFieldValueMap)({fields:ea,resolveFieldValue:eh}):new Map,ex=ec.map(e=>{let t=`${e.page}:${e.fieldKey}`,i=eg.get(t),o=eh(e);return{page:e.page,fieldKey:e.fieldKey,uiProps:e.uiProps,value:i??o}}),em=t=>{let i=new URLSearchParams(d.toString());t(i),e.replace(`?${i.toString()}`)},ey=()=>{I(!1)},eb=async e=>{if(""!==er&&!0!==F&&0!==e.fieldKeys.length){M(!0);try{let t={fields:e.fieldKeys.map(t=>({page:e.page,fieldKey:t,uiProps:{fieldType:"text",style:{width:"25%",height:"3.2%",fontSize:"calc(210mm * 0.026)",left:"10%",top:"10%",textAlign:"left"},editable:!1}}))},[i,o]=await r.default.data.docs.addTemplateFields({templateId:er,body:t});if(null!==i||!0!==o)return void tf.default.ui.layout.toast.error("필드키 추가에 실패했습니다.");x(t=>{let i=e.fieldKeys.map((i,o)=>({id:`${er}-${e.page}-${i}-${t.length+o+1}`,templateId:er,page:e.page,fieldKey:i,uiProps:{fieldType:"text",style:{width:"25%",height:"3.2%",fontSize:"calc(210mm * 0.026)",left:"10%",top:"10%",textAlign:"left"},editable:!1},defaultValue:"",value:null}));return[...t,...i]}),N(!1),tf.default.ui.layout.toast.success(`${e.fieldKeys.length}개의 필드키를 추가했습니다.`)}finally{M(!1)}}},ev=async e=>{await r.default.data.docs.patchTemplateField({templateId:e.templateId,field:{page:e.page,fieldKey:e.fieldKey,uiProps:e.uiProps}})},ej=async e=>{if(""!==er&&!0!==E){if(0===e.items.length)return void tf.default.ui.layout.toast.error("업로드할 항목이 없습니다.");A(!0);try{let t=[];for(let i of e.items){if(!Number.isInteger(i.page)||i.page<1)return void tf.default.ui.layout.toast.error("페이지 번호를 1 이상 정수로 입력해 주세요.");let e=function(e){if(e.type===tu.default.PNG)return tu.default.PNG;if(e.type===tu.default.JPEG)return tu.default.JPEG;if(e.type===tu.default.WEBP)return tu.default.WEBP;let t=e.name.toLowerCase();return t.endsWith(".png")?tu.default.PNG:t.endsWith(".jpg")||t.endsWith(".jpeg")?tu.default.JPEG:t.endsWith(".webp")?tu.default.WEBP:null}(i.file);if(null===e)return void tf.default.ui.layout.toast.error(`${i.page}페이지 파일 형식이 올바르지 않습니다. PNG/JPG/WEBP만 가능합니다.`);let[o,d]=await r.default.upload.createPresignedUploadUrl({category:"DOCUMENT_TEMPLATE_IMAGE",contentType:e,templateId:er,pageNumber:i.page});if(null!==o)return void tf.default.ui.layout.toast.error(`${i.page}페이지 업로드 URL 생성에 실패했습니다.`);let[l]=await r.default.upload.putFileToPresignedUploadUrl({uploadUrl:d.uploadUrl,contentType:e,file:i.file});if(null!==l)return void tf.default.ui.layout.toast.error(`${i.page}페이지 이미지 업로드에 실패했습니다.`);t.push({pageNumber:i.page,path:d.path})}let[i]=await r.default.data.docs.patchTemplateImage({templateId:er,body:{images:t}});if(null!==i)return void tf.default.ui.layout.toast.error("이미지 경로 저장에 실패했습니다.");let[o,d]=await r.default.data.docs.getTemplateList({serviceType:J});null!==o?tf.default.ui.layout.toast.error("저장은 완료됐지만 템플릿 목록 새로고침에 실패했습니다."):(a(d),tf.default.ui.layout.toast.success("템플릿 이미지 업로드를 완료했습니다.")),K(!1)}finally{A(!1)}}},ew=async()=>{let e=l.filter(e=>z.includes(e.id)),t=e[0]?.name?.trim()??"",i=""===t?"Print":e.length<=1?t:`${t} 외 ${e.length-1}건`,o=Q?.client.name?.trim()??"",d=""===o?i:`${i} - ${o}`,r=new Map(l.map((e,t)=>[e.id,t])),n=X.filter(e=>z.includes(e.templateId)).sort((e,t)=>e.templateId!==t.templateId?(r.get(e.templateId)??0)-(r.get(t.templateId)??0):e.page-t.page),a=new Map,s=n.map((e,t)=>(a.set(`${e.templateId}:${e.page}`,t+1),{id:e.id,templateId:e.templateId,imagePath:e.imagePath,page:t+1})),p=g.reduce((e,t)=>{if(!z.includes(t.templateId))return e;let i=a.get(`${t.templateId}:${t.page}`);return void 0===i||e.push({page:i,fieldKey:t.fieldKey,uiProps:t.uiProps,value:t.defaultValue}),e},[]);await (0,tc.renderDocumentPrintView)({pages:s,fields:p,printTitle:d,onImageLoadFailure:e=>{tf.default.ui.layout.toast.error(`서류 이미지 ${e}개 로딩에 실패하여 출력을 중단했습니다.`)}}),ey()};return(0,o.useEffect)(()=>{let e=!0;return(async()=>{if(""===ee){u([]),h([]);return}let[t,i]=await r.default.data.docs.getList({contractId:ee});if(e){if(null!==t){u([]),h([]);return}u(i)}})(),()=>{e=!1}},[ee]),(0,o.useEffect)(()=>{let e=!0;return(async()=>{if(""===ei)return h([]);let[t,i]=await r.default.data.docs.getFieldList({documentId:ei});if(e){if(null!==t)return h([]);h(i)}})(),()=>{e=!1}},[ei]),(0,o.useEffect)(()=>{let t=t=>{if(!function(e){if(!(e instanceof HTMLElement))return!1;let t=e.tagName.toLowerCase();return"input"===t||"textarea"===t||"select"===t||!0===e.isContentEditable}(t.target)&&!P&&!$&&!O){if("ArrowLeft"===t.key||"ArrowRight"===t.key){if(""!==Y.trim()&&q.length>=2){let i=q.findIndex(e=>e.id===ei),o=i>=0?i:0,r="ArrowLeft"===t.key?o-1:o+1;if(r<0||r>=q.length)return;let l=q[r];if(void 0===l)return;t.preventDefault();let n=new URLSearchParams(d.toString()),a=l.id,s=l.templateId;n.set("documentId",a),n.set("templateId",s);let p=X.filter(e=>e.templateId===s).sort((e,t)=>e.page-t.page)[0]?.id;n.set("pageId",p??""),e.replace(`?${n.toString()}`);return}if(l.length<2)return;let i=l.findIndex(e=>e.id===er),o=i>=0?i:0,r="ArrowLeft"===t.key?o-1:o+1;if(r<0||r>=l.length)return;let n=l[r];if(void 0===n)return;t.preventDefault();let a=new URLSearchParams(d.toString());a.set("templateId",n.id);let s=X.filter(e=>e.templateId===n.id).sort((e,t)=>e.page-t.page)[0]?.id;a.set("pageId",s??""),a.set("scale",Z),a.delete("documentId"),e.replace(`?${a.toString()}`);return}if("ArrowUp"===t.key||"ArrowDown"===t.key){if(en.length<2)return;let i=en.findIndex(e=>e.id===V),o=i>=0?i:0,r="ArrowUp"===t.key?o-1:o+1;if(r<0||r>=en.length)return;let l=en[r];if(void 0===l)return;t.preventDefault();let n=new URLSearchParams(d.toString());n.set("templateId",er),n.set("pageId",l.id),n.set("scale",Z),e.replace(`?${n.toString()}`)}}};return window.addEventListener("keydown",t),()=>{window.removeEventListener("keydown",t)}},[q,ei,Y,l,er,en,V,X,Z,d,e,P,$,O]),(0,t.jsxs)(tg,{children:[(0,t.jsx)(te,{mode:R,selectedServiceType:J,contracts:s,documents:q,templates:l,pages:en,selectedContractId:ee,selectedDocumentId:ei,selectedTemplateId:er,selectedPageId:V,scale:Z,isApplyingAllFieldsFontSize:C,onChangeServiceType:e=>{em(t=>{t.set("serviceType",e),t.delete("templateId"),t.delete("pageId"),t.delete("contractId"),t.delete("documentId")})},onChangeContract:e=>{em(t=>{""===e?t.delete("contractId"):t.set("contractId",e),t.delete("documentId")})},onChangeDocument:e=>{em(t=>{if(""===e)return void t.delete("documentId");let i=q.find(t=>t.id===e);if(t.set("documentId",e),void 0===i)return;let o=i.templateId;t.set("templateId",o),t.set("pageId",el(o)[0]?.id??"")})},onChangeTemplate:e=>{em(t=>{t.set("templateId",e),t.set("pageId",el(e)[0]?.id??""),t.set("scale",Z),t.delete("documentId")})},onChangePage:e=>{em(t=>{t.set("templateId",er),t.set("pageId",e),t.set("scale",Z)})},onChangeScale:e=>{((e,t=Z)=>{em(i=>{i.set("templateId",e),i.set("pageId",el(e)[0]?.id??""),i.set("scale",t)})})(er,e)},onChangeMode:e=>{D(e),"play"===e&&(y(null),v(null))},onApplyAllFieldsFontSize:()=>{C||0===g.length||(async()=>{_(!0);let e="calc(210mm * 0.023)",t=g.filter(t=>String(t.uiProps.style.fontSize??"").replace(/\s+/g,"")!==e.replace(/\s+/g,""));if(0===t.length)return _(!1);let i=new Map(t.map(t=>[t.id,{...t,uiProps:{...t.uiProps,style:{...t.uiProps.style,fontSize:e}}}]));x(e=>e.map(e=>i.get(e.id)??e));try{for(let[e,o]of t.entries()){let d=i.get(o.id);void 0!==d&&(await r.default.data.docs.patchTemplateField({templateId:d.templateId,field:{page:d.page,fieldKey:d.fieldKey,uiProps:d.uiProps}}),e<t.length-1&&await new Promise(e=>{setTimeout(e,300)}))}}finally{_(!1)}})()},onOpenPrintModal:()=>{S([er]),I(!0)},onOpenImageUploadModal:()=>{""!==er&&K(!0)},onOpenAddFieldModal:()=>{""!==er&&N(!0)}}),(0,t.jsxs)(tx,{children:[j?(0,t.jsx)(tm,{children:"템플릿을 불러오는 중입니다."}):(0,t.jsx)(T,{mode:R,selectedPage:es,scale:Z,selectedPageFields:ex,selectedPageEditableFields:ec,hoveredFieldId:m,onSelectFieldId:"edit"===R?v:void 0,isFieldEditable:e=>!0===e.uiProps.editable,isAssistButtonDisabled:e=>{if("play"!==R||e.isReadOnly)return!0},onAssistTriggerClick:e=>{if("play"===R){if(e.triggerKey===k.default.SOURCE_CLICK_AUTOCOMPLETE_SERVICE_END_REPORT_USER_CHANGE_LEVEL_BUTTON||e.triggerKey===k.default.SOURCE_CLICK_AUTOCOMPLETE_CASE_MANAGEMENT_RECORD_CASE_CONTENT_BUTTON)return void tf.default.ui.layout.toast.info("체험 모드에서는 자동완성 Drawer를 열지 않습니다.");tf.default.ui.layout.toast.info(`트리거 클릭: ${e.triggerKey}`)}},onChangeField:(e,t)=>{if("play"!==R)return;let i=`${e.page}:${e.fieldKey}`,o=`${eu}:${i}`;if("radio"===e.uiProps.fieldType&&"true"===t){let t=e.uiProps.groupKey;H(e=>{let i={...e};if(""!==t)for(let e of ex){if("radio"!==e.uiProps.fieldType||e.uiProps.groupKey!==t)continue;let o=`${e.page}:${e.fieldKey}`;i[`${eu}:${o}`]="false"}return i[o]="true",i});return}H(e=>({...e,[o]:t}))}}),(0,t.jsx)(B,{mode:R,fields:ec,scale:Z,onUpdateField:(e,t)=>{let i=g.find(t=>t.id===e);if(x(i=>i.map(i=>i.id===e?t:i)),"play"===R&&void 0!==i&&i.defaultValue!==t.defaultValue){let e=`${t.page}:${t.fieldKey}`,i=`${eu}:${e}`;H(e=>({...e,[i]:t.defaultValue}))}},onSaveField:ev,onHoverFieldId:y,selectedFieldId:b,onSelectFieldId:v})]}),(0,t.jsx)(L,{isOpen:P,templates:l,selectedTemplateIds:z,onToggleTemplate:e=>{S(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e])},onClose:ey,onPrint:()=>{ew()}}),!0===$?(0,t.jsx)(eG,{templateName:l.find(e=>e.id===er)?.name??"",defaultPage:ep,isUploading:E,onClose:()=>{!0!==E&&K(!1)},onUpload:e=>{ej(e)}}):null,!0===O?(0,t.jsx)(n,{templateName:l.find(e=>e.id===er)?.name??"",defaultPage:ep,isCreating:F,onClose:()=>{!0!==F&&N(!1)},onAddField:e=>{eb(e)}}):null]})}],36308)}]);