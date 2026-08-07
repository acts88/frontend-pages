(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,21050,e=>{"use strict";var t=e.i(39635),i=e.i(22803);let n=i.default.section.withConfig({componentId:"zh__sc-cb28bd11-0"})`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  align-self: stretch;
`,l=i.default.div.withConfig({componentId:"zh__sc-cb28bd11-1"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  align-self: stretch;

  padding: 24px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;

  background: #fff;
`,d=i.default.div.withConfig({componentId:"zh__sc-cb28bd11-2"})`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;
`,o=i.default.div.withConfig({componentId:"zh__sc-cb28bd11-3"})`
  display: flex;
  align-items: center;
`,a=i.default.p.withConfig({componentId:"zh__sc-cb28bd11-4"})`
  font-size: 20px;
  font-weight: 700;
  line-height: normal;
  color: #0a0a0a;
  letter-spacing: -0.5px;
  white-space: nowrap;
`,c=i.default.div.withConfig({componentId:"zh__sc-cb28bd11-5"})`
  display: flex;
  gap: 4px;
  align-items: center;

  margin-left: 16px;

  color: #464c53;
`,s=(0,i.default)(t.default).withConfig({componentId:"zh__sc-cb28bd11-6"})`
  width: 24px;
  height: 24px;
`,r=i.default.div.withConfig({componentId:"zh__sc-cb28bd11-7"})`
  font-size: 18px;
  line-height: 20px; /* 111.111% */
`,h=i.default.div.withConfig({componentId:"zh__sc-cb28bd11-8"})`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: flex-end;
`,p=i.css`
  gap: 4px;
  height: 36px;
  padding: 8px 16px;
`,f=i.default.div.withConfig({componentId:"zh__sc-cb28bd11-9"})`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  align-self: stretch;

  width: 100%;
`,x=i.default.div.withConfig({componentId:"zh__sc-cb28bd11-10"})`
  padding-bottom: 8px;

  font-size: 20px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
  letter-spacing: -0.5px;
`,g=i.default.div.withConfig({componentId:"zh__sc-cb28bd11-11"})`
  display: flex;
  gap: 12px;
  align-items: flex-start;
  align-self: stretch;

  min-height: 59px;
`,b=i.default.div.withConfig({componentId:"zh__sc-cb28bd11-12"})`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
  align-self: flex-start;
  justify-content: flex-start;

  min-height: 59px;

  ${({$width:e})=>void 0!==e?`
        width: ${e}px;
      `:`
        flex: 1;
        min-width: 0;
      `}
`,u=i.default.div.withConfig({componentId:"zh__sc-cb28bd11-13"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #000;
  text-align: center;
`,m=i.default.table.withConfig({componentId:"zh__sc-cb28bd11-14"})`
  border-collapse: collapse;
  width: 100%;
  font-size: 16px;
`,j=i.default.tr.withConfig({componentId:"zh__sc-cb28bd11-15"})`
  height: 40px;
  border-top: 1px solid #e5e7eb;
  border-bottom: 1px solid #e5e7eb;
  background: #f9fafb;
`,w=i.default.th.withConfig({componentId:"zh__sc-cb28bd11-16"})`
  padding: 0 16px;

  font-weight: 700;
  color: #131416;
  text-align: center;
  vertical-align: middle;
`,_=i.default.tr.withConfig({componentId:"zh__sc-cb28bd11-17"})`
  height: 56px;
  border-bottom: 1px solid #e5e7eb;
`,y=i.default.td.withConfig({componentId:"zh__sc-cb28bd11-18"})`
  padding: 0 16px;
  color: #464c53;
  text-align: center;
  vertical-align: middle;
`;e.s(["Data",0,b,"DataForm",0,f,"DataFormTitle",0,x,"DataLabel",0,u,"DataRow",0,g,"PageRoot",0,n,"Panel",0,l,"SectionHeader",0,d,"SectionHeaderLeft",0,o,"SectionHeaderRight",0,h,"SectionTitle",0,a,"SectionTitleInfo",0,c,"SectionTitleInfoIcon",0,s,"SectionTitleInfoText",0,r,"Table",0,m,"TableBodyCell",0,y,"TableBodyRow",0,_,"TableHeadCell",0,w,"TableHeadRow",0,j,"btnStyle",0,p,"inputStyle",0,{display:"flex",padding:"4px 16px",alignItems:"center",gap:"10px",flex:"1 0 0",alignSelf:"stretch",fontSize:16}])},74805,e=>{"use strict";var t=e.i(9735),i=e.i(28095);e.i(3159);var n=e.i(46907),l=e.i(22803),d=e.i(98273),o=e.i(64954),a=e.i(93847),c=e.i(58315),s=e.i(7242),r=e.i(43174),h=e.i(21050);let p=(0,n.observer)(function(){let{contactCount:e,contactList:n,staffAccountCount:l,staffAccountList:o}=r.default.organizationSetting.staff;return(0,t.jsxs)(h.PageRoot,{children:[(0,t.jsxs)(h.Panel,{children:[(0,t.jsxs)(h.SectionHeader,{children:[(0,t.jsxs)(h.SectionHeaderLeft,{children:[(0,t.jsx)(h.SectionTitle,{children:"서비스별 업무 연락처"}),(0,t.jsx)(h.SectionTitleInfo,{children:(0,t.jsxs)(h.SectionTitleInfoText,{children:["(전체 ",e,"건)"]})})]}),(0,t.jsx)(h.SectionHeaderRight,{children:(0,t.jsxs)(f,{onClick:()=>{r.default.modal.organization.contactAdd.show()},children:[(0,t.jsx)(i.default,{}),"연락처 추가하기"]})})]}),(0,t.jsxs)(x,{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)(h.TableHeadRow,{children:[(0,t.jsx)(g,{children:"서비스 종류"}),(0,t.jsx)(g,{children:"담당자"}),(0,t.jsx)(g,{children:"휴대폰 번호 및 통신사"}),(0,t.jsx)(g,{children:"관리"})]})}),(0,t.jsx)("tbody",{children:0===n.length?(0,t.jsx)(h.TableBodyRow,{children:(0,t.jsx)(b,{colSpan:4,children:"등록된 연락처가 없습니다."})},"contact-empty-row"):n.map(e=>{let i=null===e.serviceType?"-":`${s.default[e.serviceType].label} 서비스`,n=null===e.staff?"-":null===e.staff.position?e.staff.name:`${e.staff.name} (직급 ${c.default[e.staff.position].label})`,l=0===e.phoneNumber.trim().length?"-":{phoneNumber:e.phoneNumber,providerLabel:a.default[e.mobileProvider].label},d=[e.id,e.serviceType??"none",e.staff?.name??"none",e.phoneNumber,e.mobileProvider].join(":");return(0,t.jsxs)(h.TableBodyRow,{children:[(0,t.jsx)(b,{children:i}),(0,t.jsx)(b,{children:n}),(0,t.jsx)(b,{children:"-"===l?"-":(0,t.jsxs)(y,{children:[(0,t.jsx)("span",{children:l.phoneNumber}),(0,t.jsx)("span",{children:"•"}),(0,t.jsx)("span",{children:l.providerLabel})]})}),(0,t.jsx)(b,{children:(0,t.jsxs)(w,{children:[(0,t.jsx)(_,{onClick:()=>{let t;null===(t="string"==typeof e.id&&e.id.trim().length>0?e.id:null)?r.default.ui.layout.toast.error("연락처 식별자가 없어 수정할 수 없습니다."):r.default.modal.organization.contactAdd.show({contactId:t,serviceType:e.serviceType,staffId:e.staff?.id??null,phoneNumber:e.phoneNumber,mobileProvider:e.mobileProvider})},children:"수정"}),(0,t.jsx)(_,{disabled:!0,children:"삭제"})]})})]},d)})})]})]}),(0,t.jsxs)(h.Panel,{children:[(0,t.jsxs)(h.SectionHeader,{children:[(0,t.jsxs)(h.SectionHeaderLeft,{children:[(0,t.jsx)(h.SectionTitle,{children:"근무자 및 권한"}),(0,t.jsx)(h.SectionTitleInfo,{children:(0,t.jsxs)(h.SectionTitleInfoText,{children:["(전체 ",l,"명)"]})})]}),(0,t.jsx)(h.SectionHeaderRight,{children:(0,t.jsxs)(f,{onClick:()=>{r.default.modal.organization.staffAccountAdd.show()},children:[(0,t.jsx)(i.default,{}),"근무자 추가하기"]})})]}),(0,t.jsxs)(u,{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)(h.TableHeadRow,{children:[(0,t.jsx)(m,{children:"이름"}),(0,t.jsx)(m,{children:"직급"}),(0,t.jsx)(m,{children:"휴대폰 번호"}),(0,t.jsx)(m,{children:"도장이미지"}),(0,t.jsx)(m,{children:"관리"})]})}),(0,t.jsx)("tbody",{children:0===o.length?(0,t.jsx)(h.TableBodyRow,{children:(0,t.jsx)(j,{colSpan:5,children:"등록된 근무자가 없습니다."})},"staff-account-empty-row"):o.map(e=>{let i=e.sealImagePath.trim(),n=0===e.phoneNumber.trim().length?"-":e.phoneNumber,l=[e.id,e.name,e.phoneNumber,e.sealImagePath].join(":");return(0,t.jsxs)(h.TableBodyRow,{children:[(0,t.jsx)(j,{children:e.name}),(0,t.jsx)(j,{children:c.default[e.position].label}),(0,t.jsx)(j,{children:n}),(0,t.jsx)(j,{children:(0,t.jsx)(I,{$imagePath:i.length>0?i:null,children:0===i.length?(0,t.jsx)(d.default.Imagesmode,{size:34,color:"#d1d5db"}):null})}),(0,t.jsx)(j,{children:(0,t.jsxs)(w,{children:[(0,t.jsx)(_,{onClick:()=>{r.default.modal.organization.staffAccountAdd.show({staffAccountId:e.id,name:e.name,position:e.position,phoneNumber:e.phoneNumber,sealImagePath:e.sealImagePath})},children:"수정"}),(0,t.jsx)(_,{disabled:!0,children:"삭제"})]})})]},l)})})]})]})]})}),f=(0,l.default)(o.default.Button.Filled.Primary).withConfig({componentId:"zh__sc-2ea8e3db-0"})`
  gap: 4px;
  height: 36px;
  padding: 8px 16px;
`,x=(0,l.default)(h.Table).withConfig({componentId:"zh__sc-2ea8e3db-1"})`
  table-layout: fixed;
`,g=(0,l.default)(h.TableHeadCell).withConfig({componentId:"zh__sc-2ea8e3db-2"})`
  width: 25%;
`,b=(0,l.default)(h.TableBodyCell).withConfig({componentId:"zh__sc-2ea8e3db-3"})`
  width: 25%;
`,u=(0,l.default)(h.Table).withConfig({componentId:"zh__sc-2ea8e3db-4"})`
  table-layout: fixed;
`,m=(0,l.default)(h.TableHeadCell).withConfig({componentId:"zh__sc-2ea8e3db-5"})`
  width: 20%;
`,j=(0,l.default)(h.TableBodyCell).withConfig({componentId:"zh__sc-2ea8e3db-6"})`
  width: 20%;
`,w=l.default.div.withConfig({componentId:"zh__sc-2ea8e3db-7"})`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;
`,_=(0,l.default)(o.default.Button.Outlined).withConfig({componentId:"zh__sc-2ea8e3db-8"})`
  ${h.btnStyle}
`,y=l.default.span.withConfig({componentId:"zh__sc-2ea8e3db-9"})`
  display: inline-flex;
  gap: 8px;
  align-items: center;
`,I=l.default.div.withConfig({componentId:"zh__sc-2ea8e3db-10"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 80px;
  height: 80px;
  margin: 16px auto;

  ${({$imagePath:e})=>null===e?`
        border-radius: 6px;
        border: 1px dashed #D1D5DB;
        background: #FFF;
      `:`
        border-radius: 3px;
        border: 0.5px solid #D1D5DB;
        background-color: #fff;
        background-image:
          url(${e}),
          linear-gradient(45deg, #ececec 25%, transparent 25%),
          linear-gradient(-45deg, #ececec 25%, transparent 25%),
          linear-gradient(45deg, transparent 75%, #ececec 75%),
          linear-gradient(-45deg, transparent 75%, #ececec 75%);
        background-position:
          50% 50%,
          0 0,
          0 6px,
          6px -6px,
          -6px 0;
        background-size:
          contain,
          12px 12px,
          12px 12px,
          12px 12px,
          12px 12px;
        background-repeat:
          no-repeat,
          repeat,
          repeat,
          repeat,
          repeat;
      `}
`;e.s(["default",0,p])}]);