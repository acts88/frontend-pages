(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,95923,50826,47685,49940,89667,71756,e=>{"use strict";var i=e.i(9735),t=e.i(7744),o=e.i(38803);let r=()=>({id:`field-row-${Math.random().toString(36).slice(2,10)}`,value:""}),d=o.default.div.withConfig({componentId:"zh__sc-bea33b75-0"})`
  pointer-events: none;

  position: fixed;
  z-index: 2147483647;
  inset: 0;

  display: flex;
  align-items: flex-start;
  justify-content: flex-end;

  padding: 24px 16px 16px;

  background: transparent;
`,n=o.default.div.withConfig({componentId:"zh__sc-bea33b75-1"})`
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
`,l=o.default.h3.withConfig({componentId:"zh__sc-bea33b75-2"})`
  margin: 0;
  font-size: 16px;
  font-weight: 700;
  color: #111827;
`,s=o.default.div.withConfig({componentId:"zh__sc-bea33b75-3"})`
  font-size: 13px;
  color: #4b5563;
`,a=o.default.label.withConfig({componentId:"zh__sc-bea33b75-4"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,p=o.default.div.withConfig({componentId:"zh__sc-bea33b75-5"})`
  font-size: 13px;
  font-weight: 600;
  color: #374151;
`,c=o.default.label.withConfig({componentId:"zh__sc-bea33b75-6"})`
  display: flex;
  gap: 8px;
  align-items: center;

  font-size: 13px;
  color: #374151;
`,u=o.default.div.withConfig({componentId:"zh__sc-bea33b75-7"})`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,h=o.default.div.withConfig({componentId:"zh__sc-bea33b75-8"})`
  font-size: 12px;
  font-weight: 600;
  color: #4b5563;
`,f=o.default.div.withConfig({componentId:"zh__sc-bea33b75-9"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,g=o.default.span.withConfig({componentId:"zh__sc-bea33b75-10"})`
  font-size: 13px;
  color: #6b7280;
`,x=o.default.input.withConfig({componentId:"zh__sc-bea33b75-11"})`
  height: 40px;
  padding: 0 12px;
  border: 1px solid #d1d5db;
  border-radius: 8px;

  font-size: 14px;
  color: #111827;
`,b=o.default.div.withConfig({componentId:"zh__sc-bea33b75-12"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,y=o.default.div.withConfig({componentId:"zh__sc-bea33b75-13"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,m=o.default.input.withConfig({componentId:"zh__sc-bea33b75-14"})`
  flex: 1;

  height: 40px;
  padding: 0 12px;
  border: 1px solid #d1d5db;
  border-radius: 8px;

  font-size: 14px;
  color: #111827;
`,v=o.default.button.withConfig({componentId:"zh__sc-bea33b75-15"})`
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
`,j=o.default.button.withConfig({componentId:"zh__sc-bea33b75-16"})`
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
`,_=o.default.div.withConfig({componentId:"zh__sc-bea33b75-17"})`
  font-size: 12px;
  color: #6b7280;
`,C=o.default.div.withConfig({componentId:"zh__sc-bea33b75-18"})`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`,w=o.default.button.withConfig({componentId:"zh__sc-bea33b75-19"})`
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
`;e.s(["default",0,function({templateName:e,defaultPage:o,isCreating:P,onClose:z,onAddField:k}){let[I,S]=(0,t.useState)(()=>o?.toString()??"1"),[T,$]=(0,t.useState)(()=>[r()]),[K,O]=(0,t.useState)(!1),[A,N]=(0,t.useState)("1"),[E,M]=(0,t.useState)("1"),L=(0,t.useMemo)(()=>T.some(e=>""!==e.value.trim()),[T]),R=(0,t.useMemo)(()=>{let e=T.filter(e=>""!==e.value.trim()).length;if(!1===K)return e;let i=Number(A.trim()),t=Number(E.trim());return!Number.isInteger(i)||!Number.isInteger(t)||i<=0||t<=0||t<i?0:e*(t-i+1)},[T,E,A,K]),D=async()=>{let e=I.trim(),i=T.map(e=>e.value.trim()).filter(e=>""!==e);if(""===e||0===i.length)return;let t=Number(e);if(!Number.isInteger(t)||t<=0)return;let o=i;if(!0===K){let e=Number(A.trim()),t=Number(E.trim());if(!Number.isInteger(e)||!Number.isInteger(t)||e<=0||t<=0||t<e)return;o=[];for(let r=e;r<=t;r+=1)for(let e of i)o.push(`${e}.${r}`)}await k({page:t,fieldKeys:o})};return(0,i.jsx)(d,{onClick:()=>{!0!==P&&z()},children:(0,i.jsxs)(n,{onClick:e=>{e.stopPropagation()},children:[(0,i.jsx)(l,{children:"필드키 추가"}),(0,i.jsx)(s,{children:""===e?"템플릿 미선택":`템플릿: ${e}`}),(0,i.jsxs)(a,{children:[(0,i.jsx)(p,{children:"페이지"}),(0,i.jsx)(x,{type:"number",min:1,step:1,value:I,onChange:e=>{S(e.target.value)},disabled:P})]}),(0,i.jsxs)(a,{children:[(0,i.jsx)(p,{children:"필드키"}),(0,i.jsxs)(c,{children:[(0,i.jsx)("input",{type:"checkbox",checked:K,onChange:e=>{O(e.target.checked)},disabled:P}),(0,i.jsx)("span",{children:"뒤에 인덱스 붙이기"})]}),!0===K?(0,i.jsxs)(u,{children:[(0,i.jsx)(h,{children:"인덱스 범위"}),(0,i.jsxs)(f,{children:[(0,i.jsx)(x,{type:"number",min:1,step:1,value:A,onChange:e=>{N(e.target.value)},disabled:P}),(0,i.jsx)(g,{children:"~"}),(0,i.jsx)(x,{type:"number",min:1,step:1,value:E,onChange:e=>{M(e.target.value)},disabled:P})]})]}):null,(0,i.jsx)(b,{children:T.map((e,t)=>(0,i.jsxs)(y,{children:[(0,i.jsx)(m,{type:"text",value:e.value,placeholder:`필드키 ${t+1}`,disabled:P,onChange:i=>{var t,o;t=e.id,o=i.target.value,$(e=>e.map(e=>e.id===t?{...e,value:o}:e))}}),(0,i.jsx)(v,{type:"button",onClick:()=>{var i;i=e.id,$(e=>e.length<=1?[r()]:e.filter(e=>e.id!==i))},disabled:P||T.length<=1,children:"-"})]},e.id))}),(0,i.jsx)(j,{type:"button",onClick:()=>{$(e=>[...e,r()])},disabled:P,children:"+ 추가"}),(0,i.jsxs)(_,{children:["한 줄에 하나씩 입력하고, 아래 저장 버튼으로 한 번에 등록합니다.",!0===K?` 현재 총 ${R}개가 생성됩니다.`:""]})]}),(0,i.jsxs)(C,{children:[(0,i.jsx)(w,{type:"button",onClick:()=>{z()},disabled:P,children:"취소"}),(0,i.jsx)(w,{type:"button",$primary:!0,disabled:""===I.trim()||!1===L||P,onClick:()=>{D()},children:!0===P?"저장 중...":"저장"})]})]})})}],95923);var P=e.i(25699),z=e.i(28124);let k=o.default.div.withConfig({componentId:"zh__sc-31575765-0"})`
  transform-origin: top left;
  transform: scale(${({$scale:e})=>e});
  width: fit-content;
`,I=o.default.div.withConfig({componentId:"zh__sc-31575765-1"})`
  position: relative;
  width: fit-content;
`,S=o.default.div.withConfig({componentId:"zh__sc-31575765-2"})`
  position: absolute;
  inset: 0;
`,T=o.default.div.withConfig({componentId:"zh__sc-31575765-3"})`
  cursor: pointer;

  position: absolute;

  box-sizing: border-box;
  border: 1px dashed ${({$active:e})=>e?"#2563eb":"transparent"};
  border-radius: 2px;

  background: ${({$active:e,$editable:i})=>e?i?"rgb(37 99 235 / 12%)":"rgb(107 114 128 / 28%)":i?"rgb(37 99 235 / 6%)":"rgb(107 114 128 / 18%)"};

  &:hover {
    border-color: #2563eb;
    background: ${({$editable:e})=>e?"rgb(37 99 235 / 14%)":"rgb(107 114 128 / 32%)"};
  }
`,$=o.default.div.withConfig({componentId:"zh__sc-31575765-4"})`
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
`,K=o.default.div.withConfig({componentId:"zh__sc-31575765-5"})`
  padding: 12px 16px;
  font-size: 14px;
  color: #6b7280;
`;e.s(["default",0,function({mode:e,selectedPage:t,scale:o,selectedPageFields:r,selectedPageEditableFields:d,hoveredFieldId:n,onSelectFieldId:l,isFieldEditable:s,isAssistButtonDisabled:a,onAssistTriggerClick:p,onChangeField:c}){return(0,i.jsx)($,{children:null===t?(0,i.jsx)(K,{children:"선택한 페이지가 없습니다."}):(0,i.jsx)(k,{$scale:Number(o)/100||1,children:(0,i.jsxs)(I,{children:[(0,i.jsx)(P.default,{imagePath:t.imagePath,fields:r,isFieldEditable:"play"===e?s:void 0,isAssistButtonDisabled:"play"===e?a:void 0,onAssistTriggerClick:"play"===e?p:void 0,onChangeField:"play"===e?c:void 0,resolveAssistButtonLabel:({triggerKey:e})=>e===z.default.SOURCE_CLICK_AUTOCOMPLETE_SERVICE_END_REPORT_USER_CHANGE_LEVEL_BUTTON||e===z.default.SOURCE_CLICK_AUTOCOMPLETE_SERVICE_END_REPORT_STAFF_OPINION_BUTTON||e===z.default.SOURCE_CLICK_AUTOCOMPLETE_CASE_MANAGEMENT_RECORD_CASE_CONTENT_BUTTON?"자동으로 문장 생성하기":e===z.default.SOURCE_CLICK_SELECT_ALL_GENERAL_MEAL?"일반식 전체":e===z.default.SOURCE_CLICK_SELECT_ALL_THERAPEUTIC_MEAL?"치료식 전체":e===z.default.SOURCE_CLICK_SELECT_ALL_TEXTURE_MODIFIED_MEAL?"저작 및 연하 도움식 전체":"어시스트 버튼"}),"edit"===e?(0,i.jsx)(S,{children:d.map(e=>(0,i.jsx)(T,{style:e.uiProps.style,title:`${e.fieldKey} (${e.uiProps.fieldType})`,"aria-label":`${e.fieldKey} (${e.uiProps.fieldType})`,$active:n===e.id,$editable:e.uiProps.editable??!1,onClick:()=>l?.(e.id)},e.id))}):null]})})})}],50826);let O=o.default.div.withConfig({componentId:"zh__sc-ef6b6d0c-0"})`
  position: fixed;
  z-index: 10;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 16px;

  background: rgb(15 23 42 / 40%);
`,A=o.default.div.withConfig({componentId:"zh__sc-ef6b6d0c-1"})`
  display: flex;
  flex-direction: column;
  gap: 16px;

  width: min(480px, 100%);
  max-height: 70vh;
  padding: 20px;
  border-radius: 12px;

  background: #fff;
`,N=o.default.h3.withConfig({componentId:"zh__sc-ef6b6d0c-2"})`
  margin: 0;
  font-size: 16px;
  font-weight: 700;
  color: #111827;
`,E=o.default.div.withConfig({componentId:"zh__sc-ef6b6d0c-3"})`
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;

  padding: 6px 2px;
`,M=o.default.label.withConfig({componentId:"zh__sc-ef6b6d0c-4"})`
  cursor: pointer;

  display: flex;
  gap: 10px;
  align-items: center;

  padding: 8px 10px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;

  background: #f9fafb;
`,L=o.default.input.withConfig({componentId:"zh__sc-ef6b6d0c-5"})`
  width: 16px;
  height: 16px;
`,R=o.default.div.withConfig({componentId:"zh__sc-ef6b6d0c-6"})`
  font-size: 14px;
  color: #111827;
`,D=o.default.div.withConfig({componentId:"zh__sc-ef6b6d0c-7"})`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`,F=o.default.button.withConfig({componentId:"zh__sc-ef6b6d0c-8"})`
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
`;e.s(["default",0,function({isOpen:e,templates:t,selectedTemplateIds:o,onToggleTemplate:r,onClose:d,onPrint:n}){return!1===e?null:(0,i.jsx)(O,{onClick:()=>{d()},children:(0,i.jsxs)(A,{onClick:e=>{e.stopPropagation()},children:[(0,i.jsx)(N,{children:"출력 템플릿 선택"}),(0,i.jsx)(E,{children:t.map(e=>{let t=o.includes(e.id);return(0,i.jsxs)(M,{children:[(0,i.jsx)(L,{type:"checkbox",checked:t,onChange:()=>{r(e.id)}}),(0,i.jsx)(R,{children:e.name})]},e.id)})}),(0,i.jsxs)(D,{children:[(0,i.jsx)(F,{type:"button",onClick:()=>{d()},children:"취소"}),(0,i.jsx)(F,{type:"button",$primary:!0,disabled:0===o.length,onClick:()=>{n()},children:"출력"})]})]})})}],47685);var U=e.i(71371);let B=o.default.div.withConfig({componentId:"zh__sc-7a7d35c6-0"})`
  overflow: hidden;
  display: flex;
  flex-direction: column;

  width: 800px;
  padding: 12px;
  border-left: 1px solid #e0e0e0;

  background: #f5f5f5;
`,H=o.default.div.withConfig({componentId:"zh__sc-7a7d35c6-1"})`
  overflow: hidden;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 10px;
`,J=o.default.div.withConfig({componentId:"zh__sc-7a7d35c6-2"})`
  overflow-y: auto;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 8px;

  min-height: 0;
`,V=o.default.div.withConfig({componentId:"zh__sc-7a7d35c6-3"})`
  display: grid;
  grid-template-columns: minmax(0, 180px) minmax(0, 1fr);
  gap: 8px;
  align-items: center;

  padding: 8px;
  border: 1px solid #e5e7eb;
  border-radius: 6px;

  background: #fff;
`,W=o.default.div.withConfig({componentId:"zh__sc-7a7d35c6-4"})`
  overflow: hidden;

  font-size: 12px;
  font-weight: 600;
  color: #374151;
  text-overflow: ellipsis;
  white-space: nowrap;
`,G=o.default.div.withConfig({componentId:"zh__sc-7a7d35c6-5"})`
  min-width: 0;
`,Y=o.default.input.withConfig({componentId:"zh__sc-7a7d35c6-6"})`
  width: 100%;
  height: 36px;
  padding: 0 10px;
  border: 1px solid #d1d5db;
  border-radius: 6px;

  font-size: 13px;
  color: #111827;

  background: #fff;
`,Z=o.default.select.withConfig({componentId:"zh__sc-7a7d35c6-7"})`
  width: 100%;
  height: 36px;
  padding: 0 10px;
  border: 1px solid #d1d5db;
  border-radius: 6px;

  font-size: 13px;
  color: #111827;

  background: #fff;
`,X=o.default.div.withConfig({componentId:"zh__sc-7a7d35c6-8"})`
  display: flex;
  flex: 1;
  gap: 12px;
  min-height: 0;
`,q=o.default.div.withConfig({componentId:"zh__sc-7a7d35c6-9"})`
  overflow: hidden;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 8px;

  min-width: 0;
`,Q=o.default.div.withConfig({componentId:"zh__sc-7a7d35c6-10"})`
  overflow: hidden;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 8px;

  min-width: 0;
`,ee=o.default.h3.withConfig({componentId:"zh__sc-7a7d35c6-11"})`
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  color: #333;
`,ei=o.default.div.withConfig({componentId:"zh__sc-7a7d35c6-12"})`
  overflow-y: auto;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 8px;

  min-height: 0;
`,et=o.default.div.withConfig({componentId:"zh__sc-7a7d35c6-13"})`
  display: flex;
  gap: 6px;
  align-items: center;
`,eo=o.default.button.withConfig({componentId:"zh__sc-7a7d35c6-14"})`
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
`,er=o.default.button.withConfig({componentId:"zh__sc-7a7d35c6-15"})`
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
`,ed=o.default.div.withConfig({componentId:"zh__sc-7a7d35c6-16"})`
  overflow-y: auto;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 12px;

  padding: 10px;
  border: 1px solid #e0e0e0;
  border-radius: 6px;

  background: white;
`,en=o.default.div.withConfig({componentId:"zh__sc-7a7d35c6-17"})`
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
`,el=o.default.div.withConfig({componentId:"zh__sc-7a7d35c6-18"})`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: space-between;
`,es=o.default.h4.withConfig({componentId:"zh__sc-7a7d35c6-19"})`
  margin: 0;
  font-size: 12px;
  font-weight: 600;
  color: #666;
`,ea=o.default.button.withConfig({componentId:"zh__sc-7a7d35c6-20"})`
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
`,ep=o.default.button.withConfig({componentId:"zh__sc-7a7d35c6-21"})`
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
`,ec=o.default.div.withConfig({componentId:"zh__sc-7a7d35c6-22"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,eu=o.default.div.withConfig({componentId:"zh__sc-7a7d35c6-23"})`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,eh=o.default.div.withConfig({componentId:"zh__sc-7a7d35c6-24"})`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 8px;
  align-items: center;
`,ef=o.default.button.withConfig({componentId:"zh__sc-7a7d35c6-25"})`
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
`,eg=o.default.button.withConfig({componentId:"zh__sc-7a7d35c6-26"})`
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
`,ex=o.default.div.withConfig({componentId:"zh__sc-7a7d35c6-27"})`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,eb=o.default.div.withConfig({componentId:"zh__sc-7a7d35c6-28"})`
  display: flex;
  flex-direction: column;
  gap: 8px;

  padding: 10px;
  border: 1px solid #e5e7eb;
  border-radius: 6px;

  background: #f9fafb;
`,ey=o.default.div.withConfig({componentId:"zh__sc-7a7d35c6-29"})`
  font-size: 12px;
  color: #6b7280;
`,em=o.default.textarea.withConfig({componentId:"zh__sc-7a7d35c6-30"})`
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
`,ev=o.default.div.withConfig({componentId:"zh__sc-7a7d35c6-31"})`
  font-size: 11px;
  font-weight: 600;
  color: #b91c1c;
`,ej=o.default.div.withConfig({componentId:"zh__sc-7a7d35c6-32"})`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 8px;

  box-sizing: border-box;
  width: 100%;
  min-width: 0;
`,e_=o.default.div.withConfig({componentId:"zh__sc-7a7d35c6-33"})`
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 0;
`,eC=(0,o.default)(ec).withConfig({componentId:"zh__sc-7a7d35c6-34"})`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`,ew=o.default.div.withConfig({componentId:"zh__sc-7a7d35c6-35"})`
  display: flex;
  gap: 12px;
  align-items: center;
`,eP=o.default.label.withConfig({componentId:"zh__sc-7a7d35c6-36"})`
  display: flex;
  gap: 6px;
  align-items: center;

  font-size: 12px;
  color: #555;
  text-transform: capitalize;
`,ez=o.default.input.withConfig({componentId:"zh__sc-7a7d35c6-37"})`
  margin: 0;
`,ek=o.default.label.withConfig({componentId:"zh__sc-7a7d35c6-38"})`
  display: flex;
  gap: 8px;
  align-items: center;

  min-width: 0;

  font-size: 12px;
  font-weight: 500;
  color: #555;
`,eI=o.default.input.withConfig({componentId:"zh__sc-7a7d35c6-39"})`
  margin: 0;
`,eS=o.default.label.withConfig({componentId:"zh__sc-7a7d35c6-40"})`
  font-size: 12px;
  font-weight: 500;
  color: #555;
`,eT=o.default.input.withConfig({componentId:"zh__sc-7a7d35c6-41"})`
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
`,e$=o.default.div.withConfig({componentId:"zh__sc-7a7d35c6-42"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,eK=o.default.div.withConfig({componentId:"zh__sc-7a7d35c6-43"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,eO=o.default.div.withConfig({componentId:"zh__sc-7a7d35c6-44"})`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) auto;
  gap: 8px;
  align-items: center;
`,eA=(0,o.default)(eT).withConfig({componentId:"zh__sc-7a7d35c6-45"})`
  min-width: 0;
`,eN=o.default.button.withConfig({componentId:"zh__sc-7a7d35c6-46"})`
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
`,eE=o.default.button.withConfig({componentId:"zh__sc-7a7d35c6-47"})`
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
`,eM=o.default.button.withConfig({componentId:"zh__sc-7a7d35c6-48"})`
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
`,eL=o.default.select.withConfig({componentId:"zh__sc-7a7d35c6-49"})`
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
`;e.s(["default",0,function({mode:e,fields:o,scale:r="100",onUpdateField:d,onSaveField:n,onHoverFieldId:l,selectedFieldId:s,onSelectFieldId:a}){let p,c,u,h=96/25.4*210,f=96/25.4*297,g="0.026",x=["text","money","date","select","check","radio","textarea","month-with-year","multi-date","image"],[b,y]=(0,t.useState)(null),m=s??b,v=(0,t.useRef)(new Map),[j,_]=(0,t.useState)(!1),[C,w]=(0,t.useState)(!1),[P,k]=(0,t.useState)({}),[I,S]=(0,t.useState)({}),[T,$]=(0,t.useState)({}),[K,O]=(0,t.useState)({}),A=e=>e in z.default,N=(0,t.useMemo)(()=>Object.keys(z.default).filter(A).filter(e=>"function"!=typeof z.default[e]),[]),E=(0,t.useMemo)(()=>[...o].sort((e,i)=>e.page!==i.page?e.page-i.page:e.fieldKey!==i.fieldKey?e.fieldKey.localeCompare(i.fieldKey):e.id.localeCompare(i.id)),[o]),M=(0,t.useMemo)(()=>{let e=o.find(e=>e.id===m);if(void 0!==e)return{...e,uiProps:{...e.uiProps,style:e.uiProps.style??{}}}},[o,m]);(0,t.useEffect)(()=>{if(null===m)return;let e=v.current.get(m);void 0!==e&&e.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},[m]);let L=e=>x.some(i=>i===e),R=(e,i)=>{let t="text"===i.fieldType||"textarea"===i.fieldType?i.placeholder:void 0,o={style:i.style??{},editable:i.editable??!1,triggerKeys:i.triggerKeys,triggerKeyScopes:i.triggerKeyScopes,assistUiComponents:i.assistUiComponents,label:i.label};switch(e){case"text":return{...o,fieldType:"text",placeholder:t};case"money":return{...o,fieldType:"money"};case"date":return{...o,fieldType:"date",disableHolidaySelection:"date"===i.fieldType&&i.disableHolidaySelection,isDotDateFormat:"date"===i.fieldType&&i.isDotDateFormat,isMonthDateFormat:"date"===i.fieldType&&i.isMonthDateFormat};case"select":return{...o,fieldType:"select",options:"select"===i.fieldType?i.options:[{value:"",label:""}]};case"check":return{...o,fieldType:"check"};case"radio":return{...o,fieldType:"radio",groupKey:"radio"===i.fieldType?i.groupKey:"",usePrintBorderAsMarkOnPrint:"radio"===i.fieldType&&i.usePrintBorderAsMarkOnPrint};case"textarea":return{...o,fieldType:"textarea",placeholder:t};case"month-with-year":return{...o,fieldType:"month-with-year"};case"multi-date":return{...o,fieldType:"multi-date"};case"image":return{...o,fieldType:"image"};default:return i}},D=(e,i)=>{let t;if(!M)return;t="fontSize"===e?i?`calc(210mm * ${i})`:"":"lineHeight"===e?i:"fontWeight"===e?""===i||"400"===i?"":i:"textAlign"===e||"verticalAlign"===e?i:i?`${i}%`:"";let o={...M,uiProps:{...M.uiProps,style:{...M.uiProps.style,[e]:t}}};d(M.id,o)},F=(e,i)=>{if("radio"===e.uiProps.fieldType&&"true"===i&&""!==e.uiProps.groupKey)for(let i of E)i.id!==e.id&&i.page===e.page&&"radio"===i.uiProps.fieldType&&i.uiProps.groupKey===e.uiProps.groupKey&&d(i.id,{...i,defaultValue:"false"});d(e.id,{...e,defaultValue:i})},eR=e=>{let i=e.trim();if(""===i)return;let t=Number(i);return Number.isFinite(t)?t:void 0},eD=()=>({name:"",sortOrder:void 0}),eF=e=>{if(!M)return;let i=e(M.uiProps.label);d(M.id,{...M,uiProps:{...M.uiProps,label:i}})},eU=(e,i)=>{let t=i(e.triggerKeyScopes??{}),o=Object.keys(t).length>0,r={...e};return(delete r.triggerKeyScopes,o)?{...r,triggerKeyScopes:t}:r},eB=(e,i)=>`${e}::${i.join("-")}`,eH=e=>{if(!M)return;let i=e(M.uiProps.assistUiComponents??[]);d(M.id,{...M,uiProps:{...M.uiProps,assistUiComponents:i}})},eJ=(e,i,t)=>{let[o,...r]=i;return void 0===o?e:e.map((e,i)=>i!==o?e:0===r.length?t(e):"container"!==e.type?e:{...e,children:eJ(e.children,r,t)})},eV=(e,i)=>{let[t,...o]=i;return void 0===t?e:0===o.length?e.filter((e,i)=>i!==t):e.map((e,i)=>i!==t||"container"!==e.type?e:{...e,children:eV(e.children,o)})},eW=(e,i)=>{let t=i(e.triggerKeyScopes??{}),o={...e};return(delete o.triggerKeyScopes,0===Object.keys(t).length)?o:{...o,triggerKeyScopes:t}},eG=(e,i,t)=>{if(!M||"select"!==M.uiProps.fieldType)return;let o=M.uiProps.options.map((o,r)=>r===e?{...o,[i]:t}:o);d(M.id,{...M,uiProps:{...M.uiProps,options:o}})},eY=(e,i)=>{if(!M)return;let t={...M.uiProps.style};i?t[e]=t[e]??"1.5%":delete t[e],d(M.id,{...M,uiProps:{...M.uiProps,style:t}})},eZ=e=>{if(null==e)return"";let i=String(e);if(i.includes("calc(")){let e=i.match(/calc\(210mm \* ([^)]+)\)/);return e?.[1]??""}return i.replace("%","")},eX=(e,i)=>{let t=eZ(e);return""===t?i:t},eq=(e,i,t="x")=>{let o=Number(r)/100||1,d=void 0===i?eZ(e):eX(e,i);if(""===d)return"-";let n=(0,U.parseLengthToPx)(`${d}%`,{pageWidthPx:"x"===t?h:f}),l=null===n?"-":`${(n*o).toFixed(1)}px`;return`${d}% / ${l}`},eQ=async()=>{if(!M)return;let{width:e,height:i,fontSize:t,fontWeight:o,lineHeight:r,left:d,top:n,textAlign:l,verticalAlign:s,padding:a,paddingLeft:p,paddingRight:c,borderRadius:u}=M.uiProps.style,h=[`fieldType: '${M.uiProps.fieldType}',`,`editable: ${String(M.uiProps.editable??!1)},`,`width: '${String(e??"")}',`,`height: '${String(i??"")}',`,`fontSize: '${String(t??"")}',`,`lineHeight: '${String(r??"")}',`,`left: '${String(d??"")}',`,`top: '${String(n??"")}',`];if(void 0!==o&&""!==String(o).trim()&&h.push(`fontWeight: '${String(o)}',`),l&&h.push(`textAlign: '${String(l)}',`),void 0!==s&&""!==s&&h.push(`verticalAlign: '${String(s)}',`),void 0!==a&&""!==a&&h.push(`padding: '${String(a)}',`),void 0!==p&&""!==p&&h.push(`paddingLeft: '${String(p)}',`),void 0!==c&&""!==c&&h.push(`paddingRight: '${String(c)}',`),void 0!==u&&""!==u&&h.push(`borderRadius: '${String(u)}',`),"radio"===M.uiProps.fieldType&&(h.push(`groupKey: '${String(M.uiProps.groupKey)}',`),void 0!==M.uiProps.usePrintBorderAsMarkOnPrint&&h.push(`usePrintBorderAsMarkOnPrint: ${String(M.uiProps.usePrintBorderAsMarkOnPrint)},`)),"date"===M.uiProps.fieldType&&(h.push(`disableHolidaySelection: ${String(M.uiProps.disableHolidaySelection)},`),h.push(`isDotDateFormat: ${String(M.uiProps.isDotDateFormat)},`),h.push(`isMonthDateFormat: ${String(M.uiProps.isMonthDateFormat)},`)),"select"===M.uiProps.fieldType){let e=JSON.stringify(M.uiProps.options);h.push(`options: ${e},`)}("text"===M.uiProps.fieldType||"textarea"===M.uiProps.fieldType)&&h.push(`placeholder: ${JSON.stringify(M.uiProps.placeholder??{})},`);let f=M.uiProps.triggerKeyScopes;void 0!==f&&Object.keys(f).length>0&&h.push(`triggerKeyScopes: ${JSON.stringify(f)},`);let g=h.join("\n");await navigator.clipboard.writeText(g),_(!0),window.setTimeout(()=>{_(!1)},1200)},e0=e=>!("object"!=typeof e||null===e||Array.isArray(e)||!("text"in e)||"string"!=typeof e.text||"style"in e&&void 0!==e.style&&("object"!=typeof e.style||null===e.style||Array.isArray(e.style))),e1=async e=>{try{let i,t=await navigator.clipboard.readText(),o=(e=>{let i=new Set(["width","height","fontSize","fontWeight","lineHeight","left","top","textAlign","verticalAlign","padding","paddingLeft","paddingRight","borderRadius","fieldType","editable","triggerKeyScopes","groupKey","usePrintBorderAsMarkOnPrint","disableHolidaySelection","isDotDateFormat","isMonthDateFormat","options","placeholder"]),t={};for(let o of e.matchAll(/([a-zA-Z]+)\s*:\s*'([^']*)'/g)){let e=o[1],r=o[2];void 0!==e&&void 0!==r&&i.has(e)&&(t[e]=r)}for(let o of e.matchAll(/([a-zA-Z]+)\s*:\s*(true|false)/g)){let e=o[1],r="true"===o[2];void 0!==e&&i.has(e)&&(t[e]=r)}let o=e.match(/options:\s*(\[[\s\S]*?\])/m);if(o)try{let e=o[1];if(void 0===e)return t;let i=JSON.parse(e);Array.isArray(i)&&(t.options=i)}catch{}let r=e.match(/placeholder:\s*(\{[\s\S]*?\})/m);if(r)try{let e=r[1];if(void 0!==e){let i=JSON.parse(e);e0(i)&&(t.placeholder={text:i.text,...void 0===i.style?{}:{style:i.style}})}}catch{}let d=e.match(/triggerKeyScopes:\s*(\{[\s\S]*?\})/m);if(d)try{let e=d[1];if(void 0!==e){let i=JSON.parse(e);if("object"==typeof i&&null!==i&&!Array.isArray(i)){let e={};for(let[t,o]of Object.entries(i)){if("string"!=typeof o)continue;let i=t.trim(),r=o.trim();""!==i&&""!==r&&A(i)&&(e[i]=r)}t.triggerKeyScopes=e}}}catch{}return t})(t);if(0===Object.keys(o).length)return;let r=new Set(["width","height","fontSize","fontWeight","lineHeight","left","top","textAlign","verticalAlign","padding","paddingLeft","paddingRight","borderRadius"]),n={},l={};for(let[e,i]of Object.entries(o))"fieldType"!==e&&(r.has(e)?n[e]=String(i):l[e]=i);let s=o.fieldType,a="string"==typeof s&&L(s)?s:e.uiProps.fieldType,p="boolean"==typeof l.editable?l.editable:e.uiProps.editable,c=R(a,e.uiProps),u={...c.style,...n},h="object"!=typeof l.triggerKeyScopes||null===l.triggerKeyScopes||Array.isArray(l.triggerKeyScopes)?c.triggerKeyScopes:(()=>{let e={};for(let[i,t]of Object.entries(l.triggerKeyScopes)){if("string"!=typeof t)continue;let o=i.trim(),r=t.trim();""!==o&&""!==r&&A(o)&&(e[o]=r)}return e})();if("radio"===c.fieldType)i={...c,style:u,groupKey:"string"==typeof l.groupKey?l.groupKey:c.groupKey,usePrintBorderAsMarkOnPrint:"boolean"==typeof l.usePrintBorderAsMarkOnPrint?l.usePrintBorderAsMarkOnPrint:c.usePrintBorderAsMarkOnPrint};else if("date"===c.fieldType)i={...c,style:u,disableHolidaySelection:"boolean"==typeof l.disableHolidaySelection?l.disableHolidaySelection:c.disableHolidaySelection,isDotDateFormat:"boolean"==typeof l.isDotDateFormat?l.isDotDateFormat:c.isDotDateFormat,isMonthDateFormat:"boolean"==typeof l.isMonthDateFormat?l.isMonthDateFormat:c.isMonthDateFormat};else if("select"===c.fieldType)i={...c,style:u,options:Array.isArray(l.options)?l.options:c.options};else if("text"===c.fieldType){let e=l.placeholder,t=e0(e)?""===e.text.trim()?void 0:e:"string"==typeof e?""===e.trim()?void 0:{text:e}:c.placeholder;i={...c,style:u,placeholder:t}}else if("textarea"===c.fieldType){let e=l.placeholder,t=e0(e)?""===e.text.trim()?void 0:e:"string"==typeof e?""===e.trim()?void 0:{text:e}:c.placeholder;i={...c,style:u,placeholder:t}}else i={...c,style:u};let f={...i};delete f.triggerKeyScopes;let g={...f,editable:p},x=void 0===h||0===Object.keys(h).length?g:{...g,triggerKeyScopes:h};d(e.id,{...e,uiProps:x})}catch{}},e5=(e,t,o=0)=>{let r=`${M?.id??"field"}-assist-${t.join("-")}`,d=void 0===M?"":eB(M.id,t);return(0,i.jsxs)(eb,{style:{marginLeft:12*o},children:[(0,i.jsxs)(eC,{children:[(0,i.jsx)(eS,{children:"Type"}),(0,i.jsx)(eg,{type:"button",onClick:()=>{eH(e=>eV(e,t))},children:"삭제"})]}),(0,i.jsxs)(eL,{value:e.type,onChange:e=>{let i=e.target.value;("button"===i||"message"===i||"container"===i)&&eH(e=>eJ(e,t,e=>"button"===i?{type:"button",triggerKeys:e.triggerKeys,triggerKeyScopes:e.triggerKeyScopes,style:e.style}:"container"===i?{type:"container",triggerKeys:e.triggerKeys,triggerKeyScopes:e.triggerKeyScopes,style:e.style,children:"container"===e.type?e.children:[]}:{type:"message",triggerKeys:e.triggerKeys,triggerKeyScopes:e.triggerKeyScopes,style:e.style,message:"message"===e.type?e.message:""}))},children:[(0,i.jsx)("option",{value:"button",children:"button"}),(0,i.jsx)("option",{value:"message",children:"message"}),(0,i.jsx)("option",{value:"container",children:"container"})]}),"message"===e.type&&(0,i.jsxs)(ec,{children:[(0,i.jsx)(eS,{children:"Message"}),(0,i.jsx)(eT,{type:"text",value:e.message,onChange:e=>{var i;return i=e.target.value,void eH(e=>eJ(e,t,e=>"message"!==e.type?e:{...e,message:i}))},placeholder:"표시할 메시지"})]}),(0,i.jsxs)(eC,{children:[(0,i.jsx)(eS,{children:"Component Trigger Keys"}),(0,i.jsx)(ef,{type:"button",onClick:()=>{eH(e=>eJ(e,t,e=>{let i=N.find(i=>!e.triggerKeys.includes(i));return void 0===i?e:{...e,triggerKeys:[...e.triggerKeys,i]}}))},children:"트리거 키 추가"})]}),(0,i.jsx)(eu,{children:e.triggerKeys.map(o=>(0,i.jsxs)(eh,{children:[(0,i.jsx)(eL,{value:o,onChange:e=>{let i=e.target.value;A(i)&&eH(e=>eJ(e,t,e=>o!==i&&e.triggerKeys.includes(i)?e:eW({...e,triggerKeys:e.triggerKeys.map(e=>e===o?i:e)},e=>{let t={...e};return o!==i&&(void 0===t[i]&&void 0!==t[o]&&(t[i]=t[o]),delete t[o]),t})))},children:N.map(e=>(0,i.jsx)("option",{value:e,children:e},`${M?.id??"field"}-assist-trigger-option-${e}`))}),(0,i.jsx)(eg,{type:"button",onClick:()=>{eH(e=>eJ(e,t,e=>eW({...e,triggerKeys:e.triggerKeys.filter(e=>e!==o)},e=>{let i={...e};return delete i[o],i})))},children:"삭제"}),(0,i.jsx)(eT,{type:"text",value:e.triggerKeyScopes?.[o]??"",onChange:e=>{var i;return i=e.target.value,void eH(e=>eJ(e,t,e=>{let t=i.trim();return eW(e,e=>{let i={...e};return""===t?delete i[o]:i[o]=t,i})}))},placeholder:"scope (optional)"})]},`${r}-assist-trigger-${o}`))}),(0,i.jsxs)(ec,{children:[(0,i.jsx)(eS,{children:"Component Style (JSON Object)"}),(0,i.jsx)(em,{value:""===d?JSON.stringify(e.style??{},null,2):P[d]??JSON.stringify(e.style??{},null,2),onChange:e=>((e,i)=>{if(!M)return;let t=eB(M.id,e);k(e=>({...e,[t]:i}));let o=(e=>{let i,t=e.trim();if(""===t)return{ok:!0,value:{}};try{i=JSON.parse(t)}catch{return{ok:!1,error:"유효한 JSON 오브젝트를 입력해 주세요."}}if("object"!=typeof i||null===i||Array.isArray(i))return{ok:!1,error:"스타일은 JSON 오브젝트 형태여야 합니다."};let o=Object.entries(i);if(o.some(([,e])=>"string"!=typeof e&&"number"!=typeof e))return{ok:!1,error:"스타일 값은 string 또는 number만 허용됩니다."};let r={};for(let[e,i]of o)Reflect.set(r,e,i);return{ok:!0,value:r}})(i);o.ok?(S(e=>{let i={...e};return delete i[t],i}),eH(i=>eJ(i,e,e=>({...e,style:o.value})))):S(e=>({...e,[t]:o.error}))})(t,e.target.value),placeholder:`{
  "top": "0%",
  "right": "0%",
  "zIndex": 10
}`}),""!==d&&void 0!==I[d]?(0,i.jsx)(ev,{children:I[d]}):null]}),"container"===e.type?(0,i.jsxs)(ec,{children:[(0,i.jsxs)(eC,{children:[(0,i.jsx)(eS,{children:"Children"}),(0,i.jsx)(ef,{type:"button",onClick:()=>{eH(e=>eJ(e,t,e=>{var i;let t,o;return"container"!==e.type?e:{...e,children:[...e.children,(i="button",o=void 0===(t=N[0])?[]:[t],{type:"button",triggerKeys:o,style:{}})]}}))},children:"자식 추가"})]}),0===e.children.length?(0,i.jsx)(ey,{children:"자식 컴포넌트가 없습니다."}):(0,i.jsx)(ex,{children:e.children.map((e,i)=>e5(e,[...t,i],o+1))})]}):null]},r)};return"play"===e?(0,i.jsx)(B,{children:(0,i.jsxs)(H,{children:[(0,i.jsx)(ee,{children:"체험 값 설정"}),(0,i.jsx)(J,{children:E.map(e=>(0,i.jsxs)(V,{onMouseEnter:()=>l?.(e.id),onMouseLeave:()=>l?.(null),children:[(0,i.jsx)(W,{children:e.fieldKey}),(0,i.jsx)(G,{children:"select"===e.uiProps.fieldType&&e.uiProps.options.length>0?(0,i.jsx)(Z,{value:e.defaultValue,onChange:i=>{F(e,i.target.value)},children:e.uiProps.options.map(t=>(0,i.jsx)("option",{value:t.value,children:t.label},`${e.id}-${t.value}-${t.label}`))}):"check"===e.uiProps.fieldType||"radio"===e.uiProps.fieldType?(0,i.jsxs)(Z,{value:"true"===e.defaultValue?"true":"false",onChange:i=>{F(e,i.target.value)},children:[(0,i.jsx)("option",{value:"false",children:"false"}),(0,i.jsx)("option",{value:"true",children:"true"})]}):(0,i.jsx)(Y,{type:"text",value:e.defaultValue,onChange:i=>{F(e,i.target.value)},placeholder:"값 입력"})})]},e.id))})]})}):(0,i.jsx)(B,{children:(0,i.jsxs)(X,{children:[(0,i.jsxs)(q,{children:[(0,i.jsx)(ee,{children:"필드키 목록"}),(0,i.jsx)(ei,{children:E.map(e=>(0,i.jsxs)(et,{children:[(0,i.jsx)(eo,{ref:i=>{null===i?v.current.delete(e.id):v.current.set(e.id,i)},$isSelected:e.id===m,onClick:()=>{var i;return i=e.id,void(a?.(i),void 0===s&&y(i))},onMouseEnter:()=>l?.(e.id),onMouseLeave:()=>l?.(null),children:e.id}),(0,i.jsx)(er,{type:"button",onClick:()=>{e1(e)},children:"붙여넣기"})]},e.id))})]}),(0,i.jsxs)(Q,{children:[(0,i.jsx)(ee,{children:"편집 패널"}),M?(0,i.jsxs)(ed,{children:[(0,i.jsxs)(el,{children:[(0,i.jsx)(es,{children:M.id}),(0,i.jsx)(ea,{type:"button",onClick:()=>void eQ(),children:j?"복사됨":"복사"})]}),(0,i.jsxs)(ec,{children:[(0,i.jsxs)(eS,{children:["Type (",M.uiProps.fieldType,")"]}),(0,i.jsx)(eL,{value:M.uiProps.fieldType??"text",onChange:e=>{let i=e.target.value;L(i)&&M&&d(M.id,{...M,uiProps:R(i,M.uiProps)})},children:x.map(e=>(0,i.jsx)("option",{value:e,children:e},e))})]}),(0,i.jsxs)(ec,{children:[(0,i.jsx)(eS,{children:"값 (미리보기/체험)"}),(0,i.jsx)(eT,{type:"text",value:M.defaultValue,onChange:e=>{var i;return i=e.target.value,void(M&&d(M.id,{...M,defaultValue:i}))},placeholder:"필드 값을 입력하세요"})]}),(0,i.jsxs)(ec,{children:[(0,i.jsxs)(eS,{children:["Width (",eq(M.uiProps.style.width,"25"),")"]}),(0,i.jsx)(eT,{type:"number",value:eX(M.uiProps.style.width,"25"),onChange:e=>D("width",e.target.value),placeholder:"40",step:"0.1"})]}),(0,i.jsxs)(ec,{children:[(0,i.jsxs)(eS,{children:["Height (",eq(M.uiProps.style.height,"3.2","y"),")"]}),(0,i.jsx)(eT,{type:"number",value:eX(M.uiProps.style.height,"3.2"),onChange:e=>D("height",e.target.value),placeholder:"6",step:"0.1"})]}),(0,i.jsxs)(ec,{children:[(0,i.jsxs)(eS,{children:["Font Size (210mm * ",eX(M.uiProps.style.fontSize,g),")"]}),(0,i.jsx)(eT,{type:"number",value:eX(M.uiProps.style.fontSize,g),onChange:e=>D("fontSize",e.target.value),placeholder:"0.05",step:"0.001"})]}),"text"===M.uiProps.fieldType&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(ec,{children:[(0,i.jsxs)(eS,{children:["Font Weight (",String(M.uiProps.style.fontWeight??"400"),")"]}),(0,i.jsxs)(eL,{value:String(M.uiProps.style.fontWeight??""),onChange:e=>D("fontWeight",e.target.value),children:[(0,i.jsxs)("option",{value:"",children:["기본값 (","400",")"]}),["400","500","600","700"].map(e=>(0,i.jsx)("option",{value:e,children:e},e))]})]}),(0,i.jsxs)(ec,{children:[(0,i.jsx)(eS,{children:"Placeholder"}),(0,i.jsx)(eT,{type:"text",value:M.uiProps.placeholder?.text??"",onChange:e=>(e=>{if(!M||"text"!==M.uiProps.fieldType)return;let i=M.uiProps.placeholder?.style,t=""===e.trim()?void 0:{text:e,...void 0===i?{}:{style:i}};d(M.id,{...M,uiProps:{...M.uiProps,placeholder:t}})})(e.target.value),placeholder:"placeholder text"})]})]}),(0,i.jsxs)(ec,{children:[(0,i.jsxs)(eS,{children:["Line Height (",eX(M.uiProps.style.lineHeight,"1.5"),")"]}),(0,i.jsx)(eT,{type:"number",value:eX(M.uiProps.style.lineHeight,"1.5"),onChange:e=>D("lineHeight",e.target.value),placeholder:"1.5",step:"0.1"})]}),(0,i.jsxs)(ec,{children:[(0,i.jsxs)(eS,{children:["Left (",eq(M.uiProps.style.left),")"]}),(0,i.jsx)(eT,{type:"number",value:eZ(M.uiProps.style.left),onChange:e=>D("left",e.target.value),placeholder:"15",step:"0.1"})]}),(0,i.jsxs)(ec,{children:[(0,i.jsxs)(eS,{children:["Top (",eq(M.uiProps.style.top,void 0,"y"),")"]}),(0,i.jsx)(eT,{type:"number",value:eZ(M.uiProps.style.top),onChange:e=>D("top",e.target.value),placeholder:"15",step:"0.1"})]}),(0,i.jsxs)(eC,{children:[(0,i.jsx)(eS,{children:"Text Align"}),(0,i.jsx)(ew,{children:["left","center","right"].map(e=>(0,i.jsxs)(eP,{children:[(0,i.jsx)(ez,{type:"radio",name:"textAlign",checked:(M.uiProps.style.textAlign??"center")===e,onChange:()=>D("textAlign",e)}),e]},e))})]}),"textarea"===M.uiProps.fieldType&&(0,i.jsx)(ec,{children:(0,i.jsxs)(ek,{children:[(0,i.jsx)(eI,{type:"checkbox",checked:"middle"===M.uiProps.style.verticalAlign,onChange:e=>D("verticalAlign",e.target.checked?"middle":"")}),"Vertical Center (Display/Print)"]})}),"select"===M.uiProps.fieldType&&(0,i.jsxs)(ec,{children:[(0,i.jsxs)(eC,{children:[(0,i.jsxs)(eK,{children:[(0,i.jsx)(eS,{children:"Select Options"}),(0,i.jsx)(eE,{type:"button",onClick:()=>w(e=>!e),children:C?"접기":"펼치기"})]}),C&&(0,i.jsx)(eN,{type:"button",onClick:()=>{M&&"select"===M.uiProps.fieldType&&d(M.id,{...M,uiProps:{...M.uiProps,options:[...M.uiProps.options,{label:"",value:""}]}})},children:"옵션 추가"})]}),C&&(0,i.jsx)(e$,{children:M.uiProps.options.map((e,t)=>(0,i.jsxs)(eO,{children:[(0,i.jsx)(eA,{type:"text",value:e.label,onChange:e=>eG(t,"label",e.target.value),placeholder:"label"}),(0,i.jsx)(eA,{type:"text",value:e.value,onChange:e=>eG(t,"value",e.target.value),placeholder:"value"}),(0,i.jsx)(eM,{type:"button",onClick:()=>(e=>{if(!M||"select"!==M.uiProps.fieldType)return;let i=M.uiProps.options.filter((i,t)=>t!==e);d(M.id,{...M,uiProps:{...M.uiProps,options:i.length>0?i:[{label:"",value:""}]}})})(t),children:"삭제"})]},`${M.id}-${e.value}-${e.label}`))})]}),"radio"===M.uiProps.fieldType&&(0,i.jsxs)(ec,{children:[(0,i.jsx)(eS,{children:"Radio Group Key"}),(0,i.jsx)(eT,{type:"text",value:M.uiProps.groupKey??"",onChange:e=>{var i;return i=e.target.value,void(M&&"radio"===M.uiProps.fieldType&&d(M.id,{...M,uiProps:{...M.uiProps,groupKey:i}}))},placeholder:"group key"}),(0,i.jsxs)(ek,{children:[(0,i.jsx)(eI,{type:"checkbox",checked:!0===M.uiProps.usePrintBorderAsMarkOnPrint,onChange:e=>{var i;return i=e.target.checked,void(M&&"radio"===M.uiProps.fieldType&&d(M.id,{...M,uiProps:{...M.uiProps,usePrintBorderAsMarkOnPrint:i}}))}}),"Use Print Border as Mark on Print"]}),(0,i.jsxs)(ek,{children:[(0,i.jsx)(eI,{type:"checkbox",checked:!0===M.uiProps.showPrintFieldBorders,onChange:e=>{var i;return i=e.target.checked,void(M&&"radio"===M.uiProps.fieldType&&d(M.id,{...M,uiProps:{...M.uiProps,showPrintFieldBorders:i}}))}}),"Show Print Field Borders"]}),(0,i.jsxs)(ek,{children:[(0,i.jsx)(eI,{type:"checkbox",checked:void 0!==M.uiProps.style.borderRadius,onChange:e=>(e=>{if(!M||"radio"!==M.uiProps.fieldType)return;let i={...M.uiProps.style};e?i.borderRadius=i.borderRadius??"50%":delete i.borderRadius,d(M.id,{...M,uiProps:{...M.uiProps,style:i}})})(e.target.checked)}),"Border Radius (",eq(M.uiProps.style.borderRadius,"0"),")"]}),(0,i.jsx)("div",{style:{display:void 0===M.uiProps.style.borderRadius?"none":"block"},children:(0,i.jsx)(eT,{type:"number",value:eX(M.uiProps.style.borderRadius,"0"),onChange:e=>D("borderRadius",e.target.value),placeholder:"0",step:"1"})})]}),"date"===M.uiProps.fieldType&&(0,i.jsxs)(ec,{children:[(0,i.jsxs)(ek,{children:[(0,i.jsx)(eI,{type:"checkbox",checked:!0===M.uiProps.disableHolidaySelection,onChange:e=>{var i;return i=e.target.checked,void(M&&"date"===M.uiProps.fieldType&&d(M.id,{...M,uiProps:{...M.uiProps,disableHolidaySelection:i}}))}}),"Disable Holiday Selection"]}),(0,i.jsxs)(ek,{children:[(0,i.jsx)(eI,{type:"checkbox",checked:!0===M.uiProps.isDotDateFormat,onChange:e=>{var i;return i=e.target.checked,void(M&&"date"===M.uiProps.fieldType&&d(M.id,{...M,uiProps:{...M.uiProps,isDotDateFormat:i}}))}}),"Dot Format (YYYY.MM.DD)"]}),(0,i.jsxs)(ek,{children:[(0,i.jsx)(eI,{type:"checkbox",checked:!0===M.uiProps.isMonthDateFormat,onChange:e=>{var i;return i=e.target.checked,void(M&&"date"===M.uiProps.fieldType&&d(M.id,{...M,uiProps:{...M.uiProps,isMonthDateFormat:i}}))}}),"Month-Date Format (MM월 DD일)"]})]}),"textarea"===M.uiProps.fieldType&&(0,i.jsx)(ec,{children:(c=T[p=M.id]??JSON.stringify(M.uiProps.placeholder?.style??{},null,2),u=K[p],(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(eS,{children:"Placeholder"}),(0,i.jsx)(eT,{type:"text",value:M.uiProps.placeholder?.text??"",onChange:e=>(e=>{if(!M||"textarea"!==M.uiProps.fieldType)return;let i=M.uiProps.placeholder?.style,t=""===e.trim()?void 0:{text:e,...void 0===i?{}:{style:i}};d(M.id,{...M,uiProps:{...M.uiProps,placeholder:t}})})(e.target.value),placeholder:"placeholder text"}),(0,i.jsx)(eS,{children:"Placeholder Style (JSON Object)"}),(0,i.jsx)(em,{value:c,onChange:e=>(e=>{if(!M||"textarea"!==M.uiProps.fieldType)return;let i=M.id;$(t=>({...t,[i]:e}));let t=M.uiProps.placeholder?.text;if(void 0===t||""===t.trim())return void O(e=>({...e,[i]:"Placeholder 텍스트를 먼저 입력해 주세요."}));if(""===e.trim()){O(e=>{if(void 0===e[i])return e;let t={...e};return delete t[i],t}),d(M.id,{...M,uiProps:{...M.uiProps,placeholder:{text:t}}});return}try{let o=JSON.parse(e);if(!("object"==typeof o&&null!==o&&!Array.isArray(o)&&Object.values(o).every(e=>null==e||"string"==typeof e||"number"==typeof e)))return void O(e=>({...e,[i]:"JSON object 형태여야 합니다."}));let r=Object.keys(o).length>0;O(e=>{if(void 0===e[i])return e;let t={...e};return delete t[i],t}),d(M.id,{...M,uiProps:{...M.uiProps,placeholder:{text:t,...r?{style:o}:{}}}})}catch{O(e=>({...e,[i]:"유효한 JSON이 아닙니다."}))}})(e.target.value),placeholder:`{
  "color": "#9ca3af",
  "textAlign": "center"
}`}),void 0!==u?(0,i.jsx)(ev,{children:u}):null]}))}),(0,i.jsxs)(ej,{children:[(0,i.jsxs)(e_,{children:[(0,i.jsxs)(ek,{children:[(0,i.jsx)(eI,{type:"checkbox",checked:void 0!==M.uiProps.style.padding,onChange:e=>eY("padding",e.target.checked)}),"Base Pad (",eq(M.uiProps.style.padding,"1.5"),")"]}),(0,i.jsx)(eT,{type:"number",value:eX(M.uiProps.style.padding,"1.5"),onChange:e=>D("padding",e.target.value),placeholder:"0",step:"0.1",disabled:void 0===M.uiProps.style.padding})]}),(0,i.jsxs)(e_,{children:[(0,i.jsxs)(ek,{children:[(0,i.jsx)(eI,{type:"checkbox",checked:void 0!==M.uiProps.style.paddingLeft,onChange:e=>eY("paddingLeft",e.target.checked)}),"Left Pad (",eq(M.uiProps.style.paddingLeft,"1.5"),")"]}),(0,i.jsx)(eT,{type:"number",value:eX(M.uiProps.style.paddingLeft,"1.5"),onChange:e=>D("paddingLeft",e.target.value),placeholder:"0",step:"0.1",disabled:void 0===M.uiProps.style.paddingLeft})]}),(0,i.jsxs)(e_,{children:[(0,i.jsxs)(ek,{children:[(0,i.jsx)(eI,{type:"checkbox",checked:void 0!==M.uiProps.style.paddingRight,onChange:e=>eY("paddingRight",e.target.checked)}),"Right Pad (",eq(M.uiProps.style.paddingRight,"1.5"),")"]}),(0,i.jsx)(eT,{type:"number",value:eX(M.uiProps.style.paddingRight,"1.5"),onChange:e=>D("paddingRight",e.target.value),placeholder:"0",step:"0.1",disabled:void 0===M.uiProps.style.paddingRight})]})]}),(0,i.jsx)(ec,{children:(0,i.jsxs)(ek,{children:[(0,i.jsx)(eI,{type:"checkbox",checked:M.uiProps.editable??!1,onChange:e=>{var i;return i=e.target.checked,void(M&&d(M.id,{...M,uiProps:{...M.uiProps,editable:i}}))}}),"Editable"]})}),(0,i.jsxs)(ec,{children:[(0,i.jsxs)(ek,{children:[(0,i.jsx)(eI,{type:"checkbox",checked:void 0!==M.uiProps.label,onChange:e=>{var i;return i=e.target.checked,void eF(e=>{if(i)return void 0!==e?e:{field:eD()}})}}),"Label 사용"]}),void 0!==M.uiProps.label?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(eS,{children:"Label Field Name"}),(0,i.jsx)(eT,{type:"text",value:M.uiProps.label.field.name,onChange:e=>{var i;return i=e.target.value,void eF(e=>({field:void 0===e?{...eD(),name:i}:{...e.field,name:i},...e?.group===void 0?{}:{group:e.group}}))},placeholder:"field label"}),(0,i.jsx)(eS,{children:"Label Field Sort Order"}),(0,i.jsx)(eT,{type:"number",value:M.uiProps.label.field.sortOrder??"",onChange:e=>{let i;return i=eR(e.target.value),void eF(e=>({field:void 0===e?{...eD(),sortOrder:i}:{...e.field,sortOrder:i},...e?.group===void 0?{}:{group:e.group}}))},placeholder:"optional",step:"1"}),(0,i.jsxs)(ek,{children:[(0,i.jsx)(eI,{type:"checkbox",checked:void 0!==M.uiProps.label.group,onChange:e=>{var i;return i=e.target.checked,void eF(e=>{if(void 0===e){if(!i)return;return{field:eD(),group:{name:"",sortOrder:void 0}}}return i?{...e,group:e.group??{name:"",sortOrder:void 0}}:{field:e.field}})}}),"Label Group 사용"]}),void 0!==M.uiProps.label.group?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(eS,{children:"Label Group Name"}),(0,i.jsx)(eT,{type:"text",value:M.uiProps.label.group.name,onChange:e=>{var i;return i=e.target.value,void eF(e=>{if(void 0===e)return{field:eD(),group:{name:i,sortOrder:void 0}};let t={name:i,sortOrder:e.group?.sortOrder};return{...e,group:t}})},placeholder:"group label"}),(0,i.jsx)(eS,{children:"Label Group Sort Order"}),(0,i.jsx)(eT,{type:"number",value:M.uiProps.label.group.sortOrder??"",onChange:e=>{let i;return i=eR(e.target.value),void eF(e=>void 0===e?{field:eD(),group:{name:"",sortOrder:i}}:{...e,group:{name:e.group?.name??"",sortOrder:i}})},placeholder:"optional",step:"1"})]}):null]}):null]}),(0,i.jsxs)(ec,{children:[(0,i.jsxs)(eC,{children:[(0,i.jsx)(eS,{children:"Trigger Keys"}),(0,i.jsx)(ef,{type:"button",onClick:()=>{if(!M)return;let e=M.uiProps.triggerKeys??[],i=N.find(i=>!e.includes(i));if(void 0===i)return;let t=[...e,i];d(M.id,{...M,uiProps:{...M.uiProps,triggerKeys:t}})},children:"트리거 키 추가"})]}),(0,i.jsx)(eu,{children:(M.uiProps.triggerKeys??[]).map(e=>(0,i.jsxs)(eh,{children:[(0,i.jsx)(eL,{value:e,onChange:i=>{let t=i.target.value;A(t)&&((e,i)=>{if(!M)return;let t=M.uiProps.triggerKeys??[];if(e!==i&&t.includes(i))return;let o=t.map(t=>t===e?i:t),r=eU(M.uiProps,t=>{let o={...t},r=t[e]?.trim();return void 0!==r&&""!==r&&(o[i]=r),delete o[e],o});d(M.id,{...M,uiProps:{...r,triggerKeys:o}})})(e,t)},children:N.map(e=>(0,i.jsx)("option",{value:e,children:e},`${M.id}-trigger-option-${e}`))}),(0,i.jsx)(eg,{type:"button",onClick:()=>(e=>{if(!M)return;let i=(M.uiProps.triggerKeys??[]).filter(i=>i!==e),t=eU(M.uiProps,i=>{let t={...i};return delete t[e],t});d(M.id,{...M,uiProps:{...t,triggerKeys:i}})})(e),children:"삭제"}),(0,i.jsx)(eT,{type:"text",value:M.uiProps.triggerKeyScopes?.[e]??"",onChange:i=>((e,i)=>{if(!M)return;let t=i.trim(),o=eU(M.uiProps,i=>{let o={...i};return""===t?delete o[e]:o[e]=t,o});d(M.id,{...M,uiProps:o})})(e,i.target.value),placeholder:"scope (optional)"})]},`${M.id}-trigger-key-${e}`))})]}),(0,i.jsxs)(ec,{children:[(0,i.jsxs)(eC,{children:[(0,i.jsx)(eS,{children:"Assist UI Components"}),(0,i.jsx)(ef,{type:"button",onClick:()=>{if(!M)return;let e=N[0],i=[...M.uiProps.assistUiComponents??[],{type:"button",triggerKeys:void 0===e?[]:[e],style:{}}];d(M.id,{...M,uiProps:{...M.uiProps,assistUiComponents:i}})},children:"컴포넌트 추가"})]}),(0,i.jsx)(ex,{children:(M.uiProps.assistUiComponents??[]).map((e,i)=>e5(e,[i]))})]}),(0,i.jsx)(ep,{type:"button",onClick:()=>{n(M)},children:"저장"})]}):(0,i.jsx)(en,{children:"왼쪽에서 필드를 선택해 주세요."})]})]})})}],49940);let eR=e=>({id:`upload-row-${Math.random().toString(36).slice(2,10)}`,pageInput:String(e??1),file:null}),eD=o.default.div.withConfig({componentId:"zh__sc-4384a4ef-0"})`
  position: fixed;
  z-index: 10;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 16px;

  background: rgb(15 23 42 / 40%);
`,eF=o.default.div.withConfig({componentId:"zh__sc-4384a4ef-1"})`
  display: flex;
  flex-direction: column;
  gap: 16px;

  width: min(520px, 100%);
  max-height: 70vh;
  padding: 20px;
  border-radius: 12px;

  background: #fff;
`,eU=o.default.h3.withConfig({componentId:"zh__sc-4384a4ef-2"})`
  margin: 0;
  font-size: 16px;
  font-weight: 700;
  color: #111827;
`,eB=o.default.div.withConfig({componentId:"zh__sc-4384a4ef-3"})`
  font-size: 13px;
  color: #4b5563;
`,eH=o.default.div.withConfig({componentId:"zh__sc-4384a4ef-4"})`
  padding: 10px 12px;
  border: 1px solid #fecaca;
  border-radius: 8px;

  font-size: 12px;
  font-weight: 600;
  line-height: 1.45;
  color: #991b1b;

  background: #fef2f2;
`,eJ=o.default.label.withConfig({componentId:"zh__sc-4384a4ef-5"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,eV=o.default.div.withConfig({componentId:"zh__sc-4384a4ef-6"})`
  font-size: 13px;
  font-weight: 600;
  color: #374151;
`,eW=o.default.div.withConfig({componentId:"zh__sc-4384a4ef-7"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,eG=o.default.div.withConfig({componentId:"zh__sc-4384a4ef-8"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,eY=o.default.div.withConfig({componentId:"zh__sc-4384a4ef-9"})`
  min-width: 18px;
  font-size: 12px;
  font-weight: 600;
  color: #6b7280;
`,eZ=o.default.button.withConfig({componentId:"zh__sc-4384a4ef-10"})`
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
`,eX=o.default.button.withConfig({componentId:"zh__sc-4384a4ef-11"})`
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
`,eq=o.default.input.withConfig({componentId:"zh__sc-4384a4ef-12"})`
  width: 104px;
  height: 40px;
  padding: 0 12px;
  border: 1px solid #d1d5db;
  border-radius: 8px;

  font-size: 14px;
  color: #111827;
`,eQ=o.default.input.withConfig({componentId:"zh__sc-4384a4ef-13"})`
  flex: 1;
  max-width: 100%;
  font-size: 14px;
`,e0=o.default.div.withConfig({componentId:"zh__sc-4384a4ef-14"})`
  font-size: 12px;
  color: #6b7280;
`,e1=o.default.div.withConfig({componentId:"zh__sc-4384a4ef-15"})`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`,e5=o.default.button.withConfig({componentId:"zh__sc-4384a4ef-16"})`
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
`;e.s(["default",0,function({templateName:e,defaultPage:o,isUploading:r,onClose:d,onUpload:n}){let[l,s]=(0,t.useState)(()=>[eR(o)]),a=l.map(e=>{let i=Number(e.pageInput.trim());return null===e.file||!Number.isInteger(i)||i<1?null:{file:e.file,page:i}}).filter(e=>null!==e);return(0,i.jsx)(eD,{onClick:()=>{!0!==r&&d()},children:(0,i.jsxs)(eF,{onClick:e=>{e.stopPropagation()},children:[(0,i.jsx)(eU,{children:"템플릿 페이지 이미지 업로드"}),(0,i.jsx)(eB,{children:""===e?"템플릿 미선택":`템플릿: ${e}`}),(0,i.jsx)(eH,{children:"템플릿 이미지 배열은 요소별 개별 제어를 지원하지 않습니다. 전체 항목을 한 번에 업로드해 주세요."}),(0,i.jsxs)(eJ,{children:[(0,i.jsx)(eV,{children:"업로드 항목"}),(0,i.jsx)(eW,{children:l.map((e,t)=>(0,i.jsxs)(eG,{children:[(0,i.jsx)(eY,{children:t+1}),(0,i.jsx)(eq,{type:"number",min:1,step:1,value:e.pageInput,onChange:i=>{var t,o;t=e.id,o=i.target.value,s(e=>e.map(e=>e.id===t?{...e,pageInput:o}:e))},disabled:r}),(0,i.jsx)(eQ,{type:"file",accept:"image/png,image/jpeg,image/webp",onChange:i=>{var t;let o=i.target.files?.[0]??null;t=e.id,s(e=>e.map(e=>e.id===t?{...e,file:o}:e))},disabled:r}),(0,i.jsx)(eZ,{type:"button",onClick:()=>{var i;i=e.id,s(e=>e.length<=1?[eR(o)]:e.filter(e=>e.id!==i))},disabled:r||l.length<=1,children:"-"})]},e.id))}),(0,i.jsx)(eX,{type:"button",onClick:()=>{s(e=>[...e,eR(o)])},disabled:r,children:"+ 항목 추가"}),(0,i.jsx)(e0,{children:"페이지 번호와 이미지 파일을 같이 입력하세요. 지원 형식: PNG, JPG, WEBP"})]}),(0,i.jsxs)(e1,{children:[(0,i.jsx)(e5,{type:"button",onClick:()=>{d()},disabled:r,children:"취소"}),(0,i.jsx)(e5,{type:"button",$primary:!0,disabled:0===a.length||r,onClick:()=>{0!==a.length&&n({items:a})},children:!0===r?"업로드 중...":"업로드"})]})]})})}],89667);let e6=o.default.div.withConfig({componentId:"zh__sc-de981c25-0"})`
  display: flex;
  flex-wrap: nowrap;
  gap: 24px;
  align-items: center;
`,e7=o.default.label.withConfig({componentId:"zh__sc-de981c25-1"})`
  display: flex;
  gap: 8px;
  align-items: center;
  min-width: 0;
`,e3=o.default.div.withConfig({componentId:"zh__sc-de981c25-2"})`
  flex: 0 0 auto;
  font-size: 12px;
  font-weight: 600;
  color: #4b5563;
`,e4=o.default.select.withConfig({componentId:"zh__sc-de981c25-3"})`
  max-width: 200px;
  height: 36px;
  padding: 0 12px;
  border: 1px solid #d1d5db;
  border-radius: 8px;

  font-size: 14px;
  color: #111827;

  background: #fff;
`,e2=o.default.input.withConfig({componentId:"zh__sc-de981c25-4"})`
  width: 100px;
  height: 36px;
  padding: 0 12px;
  border: 1px solid #d1d5db;
  border-radius: 8px;

  font-size: 14px;
  color: #111827;

  background: #fff;
`,e8=o.default.button.withConfig({componentId:"zh__sc-de981c25-5"})`
  cursor: pointer;

  height: 36px;
  padding: 0 12px;
  border: 1px solid ${({$isPlayMode:e})=>e?"#0f766e":"#1d4ed8"};
  border-radius: 8px;

  font-size: 13px;
  font-weight: 700;
  color: ${({$isPlayMode:e})=>e?"#0f766e":"#1d4ed8"};

  background: ${({$isPlayMode:e})=>e?"#f0fdfa":"#eff6ff"};
`,e9=o.default.button.withConfig({componentId:"zh__sc-de981c25-6"})`
  cursor: pointer;

  height: 36px;
  padding: 0 16px;
  border: 1px solid #1d4ed8;
  border-radius: 8px;

  font-size: 14px;
  font-weight: 700;
  color: #1d4ed8;

  background: #eff6ff;
`,ie=o.default.button.withConfig({componentId:"zh__sc-de981c25-7"})`
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
`,ii=o.default.button.withConfig({componentId:"zh__sc-de981c25-8"})`
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
`,it=o.default.button.withConfig({componentId:"zh__sc-de981c25-9"})`
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
`;e.s(["default",0,function({mode:e,showServiceType:t=!0,selectedServiceType:o,contracts:r,documents:d,templates:n,pages:l,selectedContractId:s,selectedDocumentId:a,selectedTemplateId:p,selectedPageId:c,scale:u,isApplyingAllFieldsFontSize:h,onChangeServiceType:f,onChangeContract:g,onChangeDocument:x,onChangeTemplate:b,onChangePage:y,onChangeScale:m,onChangeMode:v,onApplyAllFieldsFontSize:j,onOpenPrintModal:_,onOpenImageUploadModal:C,onOpenAddFieldModal:w}){return(0,i.jsxs)(e6,{children:[!0===t?(0,i.jsxs)(e7,{children:[(0,i.jsx)(e3,{children:"서비스"}),(0,i.jsxs)(e4,{value:o,onChange:e=>{f?.("NUTRITION"===e.target.value?"NUTRITION":"MEAL")},children:[(0,i.jsx)("option",{value:"MEAL",children:"식사"}),(0,i.jsx)("option",{value:"NUTRITION",children:"영양"})]})]}):null,(0,i.jsxs)(e7,{children:[(0,i.jsx)(e3,{children:"계약"}),(0,i.jsx)(e4,{value:s,onChange:e=>{g(e.target.value)},disabled:0===r.length,children:0===r.length?(0,i.jsx)("option",{value:"",children:"계약 없음"}):r.map(e=>(0,i.jsxs)("option",{value:e.id,children:[e.client.name," (",e.managementCode,")"]},e.id))})]}),(0,i.jsxs)(e7,{children:[(0,i.jsx)(e3,{children:"문서"}),(0,i.jsx)(e4,{value:a,onChange:e=>{x(e.target.value)},disabled:0===d.length,children:0===d.length?(0,i.jsx)("option",{value:"",children:"문서 없음"}):d.map(e=>(0,i.jsxs)("option",{value:e.id,children:[e.id," (",e.displayStatus,") / ",e.templateName]},e.id))})]}),(0,i.jsxs)(e7,{children:[(0,i.jsx)(e3,{children:"템플릿"}),(0,i.jsx)(e4,{value:p,onChange:e=>{b(e.target.value)},children:n.map(e=>(0,i.jsx)("option",{value:e.id,children:e.name},e.id))})]}),(0,i.jsxs)(e7,{children:[(0,i.jsx)(e3,{children:"페이지"}),(0,i.jsx)(e4,{value:c,onChange:e=>{y(e.target.value)},children:l.map(e=>(0,i.jsxs)("option",{value:e.id,children:[e.page,"페이지"]},e.id))})]}),(0,i.jsxs)(e7,{children:[(0,i.jsx)(e3,{children:"배율"}),(0,i.jsx)(e2,{type:"number",value:u,onChange:e=>{m(e.target.value)},min:10,step:10})]}),(0,i.jsx)(e8,{type:"button",$isPlayMode:"play"===e,onClick:()=>{v("edit"===e?"play":"edit")},children:"edit"===e?"편집 중":"체험 중"}),(0,i.jsx)(it,{type:"button",onClick:j,disabled:h,children:h?"전체 템플릿 폰트 적용/저장 중...":"전체 템플릿 폰트 0.023 적용/저장"}),(0,i.jsx)(e9,{type:"button",onClick:_,children:"출력"}),(0,i.jsx)(ie,{type:"button",onClick:C,disabled:""===p,children:"업로드"}),(0,i.jsx)(ii,{type:"button",onClick:w,disabled:""===p,children:"필드키"})]})}],71756)}]);