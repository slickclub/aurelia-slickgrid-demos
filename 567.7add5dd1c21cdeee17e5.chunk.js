"use strict";(self.webpackChunkaurelia_slickgrid_demo_bs5=self.webpackChunkaurelia_slickgrid_demo_bs5||[]).push([[567],{17564:(e,t,a)=>{a.d(t,{A:()=>s});var i=a(31601),o=a.n(i),n=a(76314),l=a.n(n)()(o());l.push([e.id,".editable-field{background-color:rgba(227,240,251,.569) !important}.slick-dark-mode .editable-field{background-color:rgba(105,123,145,.57) !important}.unsaved-editable-field{background-color:#fbfdd1 !important}.slick-dark-mode .unsaved-editable-field{background-color:rgba(255,183,50,.8) !important;color:#fff}.slick-dark-mode{--bs-btn-color: #bebebe}.panel-wm{width:calc(100vw - 12px)}",""]);const s=l},26567:(e,t,a)=>{a.r(t),a.d(t,{Example30:()=>G});var i={};a.r(i),a.d(i,{default:()=>r,dependencies:()=>d,name:()=>l,register:()=>m,template:()=>s});var o=a(65394),n=a(17564);const l="example30",s='<h2>\n  ${title}\n  <button class="btn btn-outline-secondary btn-sm ms-2" click.trigger="toggleDarkMode()" data-test="toggle-dark-mode">\n    <span>Toggle Dark Mode</span>\n  </button>\n  <span class="float-end">\n    <a style="font-size: 18px"\n        target="_blank"\n        href="https://github.com/ghiscoding/aurelia-slickgrid/blob/master/packages/demo/src/examples/slickgrid/example30.ts">\n      <span class="fa fa-link"></span> code\n    </a>\n  </span>\n</h2>\n<div class="subtitle" innerhtml.bind="subTitle"></div>\n\n<div class="mb-2">\n  <div class="btn-group btn-group-sm" role="group" aria-label="Basic Editing Commands">\n    <button type="button" class="btn btn-outline-secondary" data-test="toggle-readonly-btn"\n            click.trigger="toggleGridEditReadonly()">\n      <i class="fa fa-table"></i> Toggle Edit/Readonly Grid\n    </button>\n    <button type="button" class="btn btn-outline-secondary" data-test="undo-last-edit-btn"\n            click.trigger="undoLastEdit()">\n      <i class="fa fa-undo"></i> Undo Last Edit\n    </button>\n    <button type="button" class="btn btn-outline-secondary" data-test="undo-open-editor-btn"\n            click.trigger="undoLastEdit(true)">\n      <i class="fa fa-undo"></i> Undo Last Edit &amp; Open Editor\n    </button>\n    <button type="button" class="btn btn-outline-secondary" data-test="undo-all-edits-btn"\n            click.trigger="undoAllEdits()">\n      <i class="fa fa-history"></i> Undo All Edits\n    </button>\n    <button type="button" class="btn btn-outline-secondary" data-test="save-all-btn"\n            click.trigger="saveAll()">\n      <i class="fa fa-save"></i> Save All\n    </button>\n  </div>\n</div>\n\n<div class="mb-3">\n  <div class="btn-group btn-group-sm" role="group" aria-label="Basic example">\n    <button type="button" class="btn btn-outline-secondary" data-test="open-modal-create-btn"\n            click.trigger="openCompositeModal(\'create\')" disabled.bind="isCompositeDisabled">\n      <i class="fa fa-plus"></i> Item Create\n    </button>\n    <button type="button" class="btn btn-outline-secondary" data-test="open-modal-clone-btn"\n            click.trigger="openCompositeModal(\'clone\')" disabled.bind="isCompositeDisabled">\n      <i class="fa fa-clone"></i> Item Clone\n    </button>\n    <button type="button" class="btn btn-outline-secondary" data-test="open-modal-edit-btn"\n            click.trigger="openCompositeModal(\'edit\')" disabled.bind="isCompositeDisabled">\n      <i class="fa fa-pencil"></i> Item Edit\n    </button>\n    <button type="button" class="btn btn-outline-secondary" data-test="open-modal-mass-update-btn"\n            click.trigger="openCompositeModal(\'mass-update\')" disabled.bind="isCompositeDisabled">\n      <i class="fa fa-pencil-square-o"></i> Mass Update\n    </button>\n    <button type="button" class="btn btn-outline-secondary" data-test="open-modal-mass-selection-btn"\n            click.trigger="openCompositeModal(\'mass-selection\')" disabled.bind="isMassSelectionDisabled">\n      <i class="fa fa-check-square-o"></i> Update Selected\n    </button>\n  </div>\n</div>\n\n<aurelia-slickgrid grid-id="grid30"\n                    column-definitions.bind="columnDefinitions"\n                    grid-options.bind="gridOptions"\n                    dataset.bind="dataset"\n                    on-aurelia-grid-created.trigger="aureliaGridReady($event.detail)"\n                    on-before-edit-cell.trigger="handleOnBeforeEditCell($event.detail.eventData, $event.detail.args)"\n                    on-cell-change.trigger="handleOnCellChange($event.detail.eventData, $event.detail.args)"\n                    on-click.trigger="handleOnCellClicked($event.detail.eventData, $event.detail.args)"\n                    on-composite-editor-change.trigger="handleOnCompositeEditorChange($event.detail.eventData, $event.detail.args)"\n                    on-item-deleted.trigger="handleItemDeleted($event.detail)"\n                    on-grid-state-changed.trigger="handleOnGridStateChanged($event.detail)"\n                    on-filter-changed.trigger="handleReRenderUnsavedStyling()"\n                    on-pagination-changed.trigger="handleReRenderUnsavedStyling()"\n                    on-validation-error.trigger="handleValidationError($event.detail.eventData, $event.detail.args)">\n</aurelia-slickgrid>\n',r=s,d=[];let c;function m(e){c||(c=o.K94.define({name:l,template:s,dependencies:d})),e.register(c)}var u=a(38880),p=a(17557),h=a(18003),g=a(69606),f=a(16800),b=a(97926),y=a(85072),C=a.n(y),v=a(97825),k=a.n(v),w=a(77659),S=a.n(w),x=a(55056),T=a.n(x),E=a(10540),R=a.n(E),I=a(41113),O=a.n(I),M={};M.styleTagTransform=O(),M.setAttributes=T(),M.insert=S().bind(null,"head"),M.domAPI=k(),M.insertStyleElement=R(),C()(n.A,M),n.A&&n.A.locals&&n.A.locals,a(96757);const U=(e,t,a,i,o,n)=>(a=null==a?"":a,n.getOptions().editable&&i.editor?{text:a,addClasses:"editable-field",toolTip:"Click to Edit"}:a),P=(e,t)=>null!=e&&e.length||!(t.compositeEditorOptions&&"create"===t.compositeEditorOptions.modalType||"edit"===t.compositeEditorOptions.modalType)?/^(task\s\d+)*$/i.test(e)?{valid:!0,msg:""}:{valid:!1,msg:'Your title is invalid, it must start with "Task" followed by a number.'}:{valid:!1,msg:"This is a required field."};let G=class{constructor(e){this.http=e,this._darkMode=!1,this.title="Example 30: Composite Editor Modal",this.subTitle='Composite Editor allows you to Create, Clone, Edit, Mass Update & Mass Selection Changes inside a nice Modal Window.\n  <br>The modal is simply populated by looping through your column definition list and also uses a lot of the same logic as inline editing (see <a href="https://ghiscoding.gitbook.io/aurelia-slickgrid/grid-functionalities/composite-editor-modal" target="_blank">Composite Editor - Wiki</a>.)',this.columnDefinitions=[],this.dataset=[],this.editQueue=[],this.editedItems={},this.isGridEditable=!0,this.isCompositeDisabled=!1,this.isMassSelectionDisabled=!0,this.cellCssStyleQueue=[],this.complexityLevelList=[{value:0,label:"Very Simple"},{value:1,label:"Simple"},{value:2,label:"Straightforward"},{value:3,label:"Complex"},{value:4,label:"Very Complex"}],this.compositeEditorInstance=new f.y}created(){this.defineGrids()}attached(){this.dataset=this.loadData(500)}detaching(){document.querySelector(".panel-wm-content").classList.remove("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="light"}defineGrids(){this.columnDefinitions=[{id:"title",name:'<span title="Task must always be followed by a number" class="color-warning-dark fa fa-exclamation-triangle"></span> Title <span title="Title is always rendered as UPPERCASE" class="fa fa-info-circle"></span>',field:"title",sortable:!0,type:b.PUO.string,minWidth:75,cssClass:"text-uppercase fw-bold",columnGroup:"Common Factor",filterable:!0,filter:{model:b.CuW.compoundInputText},editor:{model:b.R8o.longText,massUpdate:!1,required:!0,alwaysSaveOnEnterKey:!0,maxLength:12,editorOptions:{cols:45,rows:6,buttonTexts:{cancel:"Close",save:"Done"}},validator:P}},{id:"duration",name:"Duration",field:"duration",sortable:!0,filterable:!0,minWidth:75,type:b.PUO.number,columnGroup:"Common Factor",formatter:(e,t,a)=>null==a||""===a?"":a>1?`${a} days`:`${a} day`,editor:{model:b.R8o.float,massUpdate:!0,decimal:2,valueStep:1,minValue:0,maxValue:1e4,alwaysSaveOnEnterKey:!0,required:!0}},{id:"cost",name:"Cost",field:"cost",width:90,minWidth:70,sortable:!0,filterable:!0,type:b.PUO.number,columnGroup:"Analysis",filter:{model:b.CuW.compoundInputNumber},formatter:b._tQ.dollar},{id:"percentComplete",name:"% Complete",field:"percentComplete",minWidth:100,type:b.PUO.number,sortable:!0,filterable:!0,columnGroup:"Analysis",filter:{model:b.CuW.compoundSlider,operator:">="},editor:{model:b.R8o.slider,massUpdate:!0,minValue:0,maxValue:100}},{id:"complexity",name:"Complexity",field:"complexity",minWidth:100,type:b.PUO.number,sortable:!0,filterable:!0,columnGroup:"Analysis",formatter:(e,t,a)=>this.complexityLevelList[a]?.label,exportCustomFormatter:(e,t,a)=>this.complexityLevelList[a]?.label,filter:{model:b.CuW.multipleSelect,collection:this.complexityLevelList},editor:{model:b.R8o.singleSelect,collection:this.complexityLevelList,massUpdate:!0}},{id:"start",name:"Start",field:"start",sortable:!0,minWidth:100,formatter:b._tQ.dateUs,columnGroup:"Period",exportCustomFormatter:b._tQ.dateUs,type:b.PUO.date,outputType:b.PUO.dateUs,saveOutputType:b.PUO.dateUtc,filterable:!0,filter:{model:b.CuW.compoundDate},editor:{model:b.R8o.date,massUpdate:!0,editorOptions:{hideClearButton:!1}}},{id:"completed",name:"Completed",field:"completed",width:80,minWidth:75,maxWidth:100,sortable:!0,filterable:!0,columnGroup:"Period",cssClass:"text-center",formatter:b._tQ.checkmark,exportWithFormatter:!1,filter:{collection:[{value:"",label:""},{value:!0,label:"True"},{value:!1,label:"False"}],model:b.CuW.singleSelect},editor:{model:b.R8o.checkbox,massUpdate:!0}},{id:"finish",name:"Finish",field:"finish",sortable:!0,minWidth:100,formatter:b._tQ.dateUs,columnGroup:"Period",type:b.PUO.date,outputType:b.PUO.dateUs,saveOutputType:b.PUO.dateUtc,filterable:!0,filter:{model:b.CuW.compoundDate},exportCustomFormatter:b._tQ.dateUs,editor:{model:b.R8o.date,editorOptions:{minDate:"today"},massUpdate:!0,validator:(e,t)=>{const a=t?.item;return a&&a.completed&&!e?{valid:!1,msg:'You must provide a "Finish" date when "Completed" is checked.'}:{valid:!0,msg:""}}}},{id:"product",name:"Product",field:"product",filterable:!0,columnGroup:"Item",minWidth:100,exportWithFormatter:!0,dataKey:"id",labelKey:"itemName",formatter:b._tQ.complexObject,exportCustomFormatter:b._tQ.complex,type:b.PUO.object,sortComparer:b.Luy.objectString,editor:{model:b.R8o.autocompleter,alwaysSaveOnEnterKey:!0,massUpdate:!0,editorOptions:{minLength:1,fetch:(e,t)=>{t(this.mockProducts().filter((t=>t.itemName.toLowerCase().includes(e.toLowerCase()))))},renderItem:{layout:"fourCorners",templateCallback:e=>this.renderItemCallbackWith4Corners(e)}}},filter:{model:b.CuW.inputText,type:b.PUO.string,queryField:"product.itemName"}},{id:"origin",name:"Country of Origin",field:"origin",formatter:b._tQ.complexObject,columnGroup:"Item",exportCustomFormatter:b._tQ.complex,dataKey:"code",labelKey:"name",type:b.PUO.object,sortComparer:b.Luy.objectString,filterable:!0,sortable:!0,minWidth:100,editor:{model:b.R8o.autocompleter,massUpdate:!0,customStructure:{label:"name",value:"code"},collectionAsync:this.http.fetch("assets/data/countries.json"),editorOptions:{minLength:0}},filter:{model:b.CuW.inputText,type:"string",queryField:"origin.name"}},{id:"action",name:"Action",field:"action",width:70,minWidth:70,maxWidth:70,excludeFromExport:!0,formatter:()=>'<div class="button-style margin-auto" style="width: 35px;"><span class="fa fa-chevron-down text-primary"></span></div>',cellMenu:{hideCloseButton:!1,commandTitle:"Commands",commandItems:[{command:"edit",title:"Edit Row",iconCssClass:"fa fa-pencil",positionOrder:66,action:()=>this.openCompositeModal("edit")},{command:"clone",title:"Clone Row",iconCssClass:"fa fa-clone",positionOrder:66,action:()=>this.openCompositeModal("clone")},"divider",{command:"delete-row",title:"Delete Row",positionOrder:64,iconCssClass:"fa fa-times color-danger",cssClass:"red",textCssClass:"text-italic color-danger-light",itemVisibilityOverride:e=>!e.dataContext?.completed,action:(e,t)=>{const a=t.dataContext;confirm(`Do you really want to delete row (${(t?.row??0)+1}) with "${a.title}"`)&&this.aureliaGrid.gridService.deleteItemById(a.id)}}]}}],this.gridOptions={enableAddRow:!0,enableCellNavigation:!0,asyncEditorLoading:!1,autoEdit:!0,autoCommitEdit:!0,editable:!0,autoAddCustomEditorFormatter:U,autoResize:{container:"#demo-container",rightPadding:10},darkMode:this._darkMode,enableAutoSizeColumns:!0,enableAutoResize:!0,showCustomFooter:!0,enablePagination:!0,pagination:{pageSize:10,pageSizes:[10,200,250,500,5e3]},enableExcelExport:!0,excelExportOptions:{exportWithFormatter:!1},externalResources:[new h.N,new g.T,this.compositeEditorInstance],enableFiltering:!0,rowSelectionOptions:{selectActiveRow:!1},createPreHeaderPanel:!0,showPreHeaderPanel:!0,preHeaderPanelHeight:28,enableCheckboxSelector:!0,enableRowSelection:!0,multiSelect:!1,checkboxSelector:{hideInFilterHeaderRow:!1,hideInColumnTitleRow:!0},enableCompositeEditor:!0,editCommandHandler:(e,t,a)=>{const i=Array.isArray(a.prevSerializedValue)?a.prevSerializedValue:[a.prevSerializedValue],o=Array.isArray(a.serializedValue)?a.serializedValue:[a.serializedValue],n=this.columnDefinitions.filter((e=>void 0!==e.editor)),l=[];i.forEach(((s,r)=>{const d=i[r],c=o[r];if(d!==c||""===c){const i=Array.isArray(a.prevSerializedValue)?n[r]:t;this.editedItems[this.gridOptions.datasetIdPropertyName||"id"]=e,this.aureliaGrid.slickGrid.invalidate(),a.execute(),this.renderUnsavedCellStyling(e,i,a),l.push(i)}})),this.editQueue.push({item:e,columns:l,editCommand:a})},enableCellMenu:!0,gridMenu:{hideToggleDarkModeCommand:!1,onCommand:(e,t)=>{"toggle-dark-mode"===t.command&&(this._darkMode=!this._darkMode,this.toggleBodyBackground())}}}}loadData(e){const t=[];for(let a=0;a<e;a++){const e=Math.floor(Math.random()*this.mockProducts().length),i=2e3+Math.floor(10*Math.random()),o=(new Date).getFullYear()+Math.floor(10*Math.random()),n=Math.floor(11*Math.random()),l=Math.floor(29*Math.random()),s=Math.floor(59*Math.random()),r=new Date(o,n+1,l,s,s,s),d=Math.floor(100*Math.random())+15,c=d>100?a>5?100:88:d,m=100===c;t[a]={id:a,title:"Task "+a,duration:Math.floor(100*Math.random())+10,percentComplete:c,analysis:{percentComplete:c},complexity:a%3?0:2,start:new Date(i,n,l,l,s,s,s),finish:m||a%3==0&&r>new Date&&a>3?m?new Date:r:"",cost:a%33==0?null:Math.round(1e4*Math.random())/100,completed:m||a%3==0&&r>new Date&&a>3,product:{id:this.mockProducts()[e]?.id,itemName:this.mockProducts()[e]?.itemName},origin:a%2?{code:"CA",name:"Canada"}:{code:"US",name:"United States"}},a%8||(delete t[a].finish,delete t[a].percentComplete)}return t}aureliaGridReady(e){this.aureliaGrid=e}handleValidationError(e,t){if(t.validationResults){let e=t.validationResults.msg||"";if(t.editor&&t.editor instanceof f.L){if(t.validationResults.errors){e+="\n";for(const a of t.validationResults.errors)e+=`${a.editor.args.column.name.toUpperCase()}: ${a.msg}`}console.log(e)}}else alert(t.validationResults.msg);return e.preventDefault(),!1}handleItemDeleted(e){console.log("item deleted with id:",e)}handleOnBeforeEditCell(e,t){const{column:a,item:i,grid:o}=t;return!(a&&i&&!function(e,t,a){const i=a?.getOptions(),o=t.editor;let n=!(!i.editable||!o);return e&&t&&i?.editable&&"finish"===t.id&&(n=!!e?.completed),n}(i,a,o)&&(e.preventDefault(),1))}handleOnCellChange(e,t){const a=t?.item;a&&!a.completed&&(a.finish=null,this.aureliaGrid.gridService.updateItem(a))}handleOnCellClicked(e,t){console.log(e,t)}handleOnCompositeEditorChange(e,t){const a=t.column,i=t.formValues;"percentComplete"===a.id&&100===i.percentComplete&&(this.compositeEditorInstance.changeFormInputValue("completed",!0),this.compositeEditorInstance.changeFormInputValue("finish",new Date))}handleReRenderUnsavedStyling(){this.removeAllUnsavedStylingFromCell(),this.renderUnsavedStylingOnAllVisibleCells()}handleOnGridStateChanged(e){Array.isArray(e.gridState?.rowSelection?.dataContextIds)&&(this.isMassSelectionDisabled=0===e.gridState?.rowSelection?.dataContextIds.length)}openCompositeModal(e){let t="";switch(e){case"create":t="Inserting New Task";break;case"clone":t="Clone - {{title}}";break;case"edit":t='Editing - {{title}} (<span class="text-muted">id:</span> <span class="text-primary">{{id}}</span>)';break;case"mass-update":t="Mass Update All Records";break;case"mass-selection":t="Update Selected Records"}this.compositeEditorInstance?.openDetails({headerTitle:t,modalType:e,insertOptions:{highlightRow:!1},showFormResetButton:!0,resetFormButtonIconCssClass:"fa fa-undo",onClose:()=>Promise.resolve(confirm("You have unsaved changes, are you sure you want to close this window?")),onError:e=>alert(e.message),onRendered:e=>{e.dataset.bsTheme=this._darkMode?"dark":"light"},onSave:(t,a,i)=>"mass-update"===e||"mass-selection"===e?new Promise(((e,a)=>{setTimeout((()=>{t.percentComplete>=50?e(!0):a("Unfortunately we only accept a minimum of 50% Completion...")}),50)})):(console.log(`${e} item data context`,i),new Promise((e=>setTimeout((()=>e(!0)),50))))})}toggleGridEditReadonly(){this.undoAllEdits(),this.isGridEditable=!this.isGridEditable,this.isCompositeDisabled=!this.isGridEditable,this.isGridEditable||(this.isMassSelectionDisabled=!0),this.aureliaGrid.slickGrid.setOptions({editable:this.isGridEditable})}toggleDarkMode(){this._darkMode=!this._darkMode,this.toggleBodyBackground(),this.aureliaGrid.slickGrid?.setOptions({darkMode:this._darkMode})}toggleBodyBackground(){this._darkMode?(document.querySelector(".panel-wm-content").classList.add("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="dark"):(document.querySelector(".panel-wm-content").classList.remove("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="light")}removeUnsavedStylingFromCell(e,t,a){const i=`unsaved_highlight_${[t.id]}${a}`;this.aureliaGrid.slickGrid.removeCellCssStyles(i);const o=this.cellCssStyleQueue.findIndex((e=>e===i));o>=0&&this.cellCssStyleQueue.splice(o,1)}removeAllUnsavedStylingFromCell(){for(const e of this.cellCssStyleQueue)this.aureliaGrid.slickGrid.removeCellCssStyles(e);this.cellCssStyleQueue=[]}renderUnsavedStylingOnAllVisibleCells(){for(const e of this.editQueue)if(e){const{item:t,columns:a,editCommand:i}=e;Array.isArray(a)&&a.forEach((e=>{this.renderUnsavedCellStyling(t,e,i)}))}}renderUnsavedCellStyling(e,t,a){if(a&&e&&t){const a=this.aureliaGrid.dataView.getRowByItem(e);if(a>=0){const e={[a]:{[t.id]:"unsaved-editable-field"}},i=`unsaved_highlight_${[t.id]}${a}`;this.aureliaGrid.slickGrid.setCellCssStyles(`unsaved_highlight_${[t.id]}${a}`,e),this.cellCssStyleQueue.push(i)}}}saveAll(){console.log(this.editQueue),console.log(this.editedItems),this.removeAllUnsavedStylingFromCell(),this.editQueue=[],this.editedItems={}}undoLastEdit(e=!1){const t=this.editQueue.pop(),a=t?.editCommand;if(t&&a&&b.W9y.cancelCurrentEdit()){a.undo();for(const e of t.columns)this.removeUnsavedStylingFromCell(t.item,e,a.row);this.aureliaGrid.slickGrid.invalidate(),e&&this.aureliaGrid.slickGrid.gotoCell(a.row,a.cell,!1)}}undoAllEdits(){for(const e of this.editQueue){const t=e?.editCommand;if(t&&b.W9y.cancelCurrentEdit()){t.undo();for(const a of e.columns)this.removeUnsavedStylingFromCell(e.item,a,t.row)}}this.aureliaGrid.slickGrid.invalidate(),this.editQueue=[]}mockProducts(){return[{id:0,itemName:"Sleek Metal Computer",itemNameTranslated:"some fantastic sleek metal computer description",listPrice:2100.23,itemTypeName:"I",image:"http://i.stack.imgur.com/pC1Tv.jpg",icon:this.getRandomIcon(0)},{id:1,itemName:"Tasty Granite Table",itemNameTranslated:"an extremely huge and heavy table",listPrice:3200.12,itemTypeName:"I",image:"https://i.imgur.com/Fnm7j6h.jpg",icon:this.getRandomIcon(1)},{id:2,itemName:"Awesome Wooden Mouse",itemNameTranslated:"super old mouse",listPrice:15,itemTypeName:"I",image:"https://i.imgur.com/RaVJuLr.jpg",icon:this.getRandomIcon(2)},{id:3,itemName:"Gorgeous Fresh Shirt",itemNameTranslated:"what a gorgeous shirt seriously",listPrice:25.76,itemTypeName:"I",image:"http://i.stack.imgur.com/pC1Tv.jpg",icon:this.getRandomIcon(3)},{id:4,itemName:"Refined Cotton Table",itemNameTranslated:"super light table that will fall apart amazingly fast",listPrice:13.35,itemTypeName:"I",image:"https://i.imgur.com/Fnm7j6h.jpg",icon:this.getRandomIcon(4)},{id:5,itemName:"Intelligent Wooden Pizza",itemNameTranslated:"wood not included",listPrice:23.33,itemTypeName:"I",image:"https://i.imgur.com/RaVJuLr.jpg",icon:this.getRandomIcon(5)},{id:6,itemName:"Licensed Cotton Chips",itemNameTranslated:"not sure what that is",listPrice:71.21,itemTypeName:"I",image:"http://i.stack.imgur.com/pC1Tv.jpg",icon:this.getRandomIcon(6)},{id:7,itemName:"Ergonomic Rubber Soap",itemNameTranslated:"so good you'll want to use it every night",listPrice:2.43,itemTypeName:"I",image:"https://i.imgur.com/Fnm7j6h.jpg",icon:this.getRandomIcon(7)},{id:8,itemName:"Handcrafted Steel Car",itemNameTranslated:"aka tesla truck",listPrice:31288.39,itemTypeName:"I",image:"https://i.imgur.com/RaVJuLr.jpg",icon:this.getRandomIcon(8)}]}getRandomIcon(e){const t=["fa-500px","fa-address-book","fa-address-book-o","fa-address-card","fa-address-card-o","fa-adjust","fa-adn","fa-align-center","fa-align-justify","fa-align-left","fa-align-right","fa-amazon","fa-ambulance","fa-american-sign-language-interpreting","fa-anchor","fa-android","fa-angellist","fa-angle-double-down","fa-angle-double-left","fa-angle-double-right","fa-angle-double-up","fa-angle-down","fa-angle-left","fa-angle-right","fa-angle-up","fa-apple","fa-archive","fa-area-chart","fa-arrow-circle-down","fa-arrow-circle-left","fa-arrow-circle-o-down","fa-arrow-circle-o-left","fa-arrow-circle-o-right","fa-arrow-circle-o-up","fa-arrow-circle-right","fa-arrow-circle-up","fa-arrow-down","fa-arrow-left","fa-arrow-right","fa-arrow-up","fa-arrows","fa-arrows-alt","fa-arrows-h","fa-arrows-v","fa-assistive-listening-systems","fa-asterisk","fa-at","fa-audio-description","fa-backward","fa-balance-scale","fa-ban","fa-bandcamp","fa-bank (alias)","fa-bar-chart","fa-barcode","fa-bars","fa-bath","fa-battery-empty","fa-battery-full","fa-battery-half","fa-battery-quarter","fa-battery-three-quarters","fa-bed","fa-beer","fa-behance","fa-behance-square","fa-bell","fa-bell-o","fa-bell-slash","fa-bell-slash-o","fa-bicycle","fa-binoculars","fa-birthday-cake","fa-bitbucket","fa-bitbucket-square"],a=Math.floor(Math.random()*t.length-1);return t[e??a]}renderItemCallbackWith2Rows(e){return`<div class="autocomplete-container-list">\n      <div class="autocomplete-left">\n        \x3c!--<img src="http://i.stack.imgur.com/pC1Tv.jpg" width="50" />--\x3e\n        <span class="fa ${e.icon}"></span>\n      </div>\n      <div>\n        <span class="autocomplete-top-left">\n          <span class="fa ${"I"===e.itemTypeName?"fa-info-circle":"fa-copy"}"></span>\n          ${e.itemName}\n        </span>\n      <div>\n      </div>\n    <div>\n    <div class="autocomplete-bottom-left">${e.itemNameTranslated}</div>\n    </div>`}renderItemCallbackWith4Corners(e){return`<div class="autocomplete-container-list">\n          <div class="autocomplete-left">\n            \x3c!--<img src="http://i.stack.imgur.com/pC1Tv.jpg" width="50" />--\x3e\n            <span class="fa ${e.icon}"></span>\n          </div>\n          <div>\n            <span class="autocomplete-top-left">\n              <span class="fa ${"I"===e.itemTypeName?"fa-info-circle":"fa-copy"}"></span>\n              ${e.itemName}\n            </span>\n            <span class="autocomplete-top-right">${(0,b.ZVp)(e.listPrice,2,2,!1,"$")}</span>\n          <div>\n        </div>\n        <div>\n          <div class="autocomplete-bottom-left">${e.itemNameTranslated}</div>\n          <span class="autocomplete-bottom-right">Type: <b>${"I"===e.itemTypeName?"Item":"C"===e.itemTypeName?"PdCat":"Cat"}</b></span>\n        </div>`}};var D,N;G=function(e,t,a,i){var o,n=arguments.length,l=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,a,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(l=(n<3?o(l):n>3?o(t,a,l):o(t,a))||l);return n>3&&l&&Object.defineProperty(t,a,l),l}([(0,o.EMX)(i),(D=0,N=(0,p.pn)(u.xl),function(e,t){N(e,t,D)}),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:paramtypes",[Object])],G)}}]);