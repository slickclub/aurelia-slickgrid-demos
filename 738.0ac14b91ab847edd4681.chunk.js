"use strict";(self.webpackChunkaurelia_slickgrid_demo_bs5=self.webpackChunkaurelia_slickgrid_demo_bs5||[]).push([[738],{2610:(e,t,i)=>{i.d(t,{A:()=>s});var a=i(31601),r=i.n(a),o=i(76314),n=i.n(o)()(r());n.push([e.id,".editable-field{background-color:rgba(227,240,251,.569) !important}.unsaved-editable-field{background-color:#fbfdd1 !important}.button-style{cursor:pointer;background-color:#fff;border:1px solid #ababab;border-radius:2px;justify-content:center;text-align:center}.button-style:hover{border-color:#929292}",""]);const s=n},93738:(e,t,i)=>{i.r(t),i.d(t,{Example32:()=>U});var a={};i.r(a),i.d(a,{default:()=>l,dependencies:()=>d,name:()=>n,register:()=>u,template:()=>s});var r=i(65394),o=i(2610);const n="example32",s='<h2>\n  ${title}\n  <span class="float-end">\n    <a style="font-size: 18px"\n        target="_blank"\n        href="https://github.com/ghiscoding/aurelia-slickgrid/blob/master/packages/demo/src/examples/slickgrid/example32.ts">\n      <span class="fa fa-link"></span> code\n    </a>\n  </span>\n</h2>\n<div class="subtitle" innerhtml.bind="subTitle"></div>\n\n<h4 class="ml-3">Container Width (950px)</h4>\n\n<div class="row">\n  <div class="ml-2 mb-2 mr-2">\n    <div class="btn-group btn-group-toggle" data-bs-toggle="buttons">\n      <label class="btn btn-sm btn-outline-secondary" class.bind="isUsingDefaultResize ? \'active\' : \'\'"\n              data-test="autosize-columns-btn">\n        <input type="radio" class="btn-check" name="options"\n                checked.bind="isUsingDefaultResize"\n                click.trigger="handleDefaultResizeColumns()">\n        <i class="fa fa-expand"></i> (default resize) by "autosizeColumns"\n      </label>\n      <label class="btn btn-sm btn-outline-secondary" class.bind="isUsingDefaultResize ? \'\' : \'active\'"\n              data-test="resize-by-content-btn">\n        <input type="radio" class="btn-check" name="options"\n                checked.bind="!isUsingDefaultResize"\n                click.trigger="handleNewResizeColumns()">\n        <i class="fa fa-expand"></i> Resize by Cell Content\n      </label>\n    </div>\n  </div>\n\n  <div class="mb-2">\n    <div class="btn-group btn-group-sm" role="group" aria-label="Basic Editing Commands">\n      <button type="button" class="btn btn-outline-secondary" click.trigger="setSelectedRowIds()"\n              data-test="set-dynamic-rows-btn"\n              title="Change Row Selection across multiple pages">\n        <span>Change Row Selection</span>\n      </button>\n      <button type="button" class="btn btn-outline-secondary" data-test="toggle-readonly-btn"\n              click.trigger="toggleGridEditReadonly()">\n        <i class="fa fa-table"></i> Toggle Readonly\n      </button>\n      <button type="button" class="btn btn-outline-secondary" data-test="undo-last-edit-btn"\n              click.trigger="undoLastEdit()">\n        <i class="fa fa-undo"></i> Undo Last Edit\n      </button>\n      <button type="button" class="btn btn-outline-secondary" data-test="save-all-btn"\n              click.trigger="saveAll()">\n        <i class="fa fa-save"></i> Save All\n      </button>\n    </div>\n  </div>\n</div>\n\n<div id="smaller-container" style="width: 950px">\n  <aurelia-slickgrid grid-id="grid32"\n                      column-definitions.bind="columnDefinitions"\n                      grid-options.bind="gridOptions"\n                      dataset.bind="dataset"\n                      on-aurelia-grid-created.trigger="aureliaGridReady($event.detail)"\n                      on-selected-row-ids-changed.trigger="handleOnSelectedRowIdsChanged($event.detail.args)">\n  </aurelia-slickgrid>\n</div>\n',l=s,d=[];let c;function u(e){c||(c=r.K94.define({name:n,template:s,dependencies:d})),e.register(c)}var m=i(38880),p=i(17557),h=i(18003),f=i(97926),g=i(85072),b=i.n(g),y=i(97825),C=i.n(y),v=i(77659),w=i.n(v),R=i(55056),x=i.n(R),k=i(10540),O=i.n(k),P=i(41113),T=i.n(P),I={};I.styleTagTransform=T(),I.setAttributes=x(),I.insert=w().bind(null,"head"),I.domAPI=C(),I.insertStyleElement=O(),b()(o.A,I),o.A&&o.A.locals&&o.A.locals,i(96757);const S=(e,t,i,a,r,o)=>(i=null==i?"":i,(o&&o.getOptions&&o.getOptions()).editable&&a.editor?{text:i,addClasses:"editable-field",toolTip:"Click to Edit"}:i),E=e=>null!=e&&e.length?/^(task\s\d+)*$/i.test(e)?{valid:!0,msg:""}:{valid:!1,msg:'Your title is invalid, it must start with "Task" followed by a number.'}:{valid:!1,msg:"This is a required field."};let U=class{constructor(e){this.http=e,this.title="Example 32: Columns Resize by Content",this.subTitle='The grid below uses the optional resize by cell content (with a fixed 950px for demo purposes), you can click on the 2 buttons to see the difference. The "autosizeColumns" is really the default option used by SlickGrid-Universal, the resize by cell content is optional because it requires to read the first thousand rows and do extra width calculation.',this.columnDefinitions=[],this.dataset=[],this.editQueue=[],this.editedItems={},this.isUsingDefaultResize=!1,this.isGridEditable=!0,this.isMassSelectionDisabled=!0,this.complexityLevelList=[{value:0,label:"Very Simple"},{value:1,label:"Simple"},{value:2,label:"Straightforward"},{value:3,label:"Complex"},{value:4,label:"Very Complex"}],this.initializeGrid()}attached(){this.dataset=this.loadData(400)}aureliaGridReady(e){this.aureliaGrid=e}initializeGrid(){this.columnDefinitions=[{id:"title",name:"Title",field:"title",sortable:!0,type:f.PUO.string,minWidth:65,resizeExtraWidthPadding:4,resizeCharWidthInPx:7.6,resizeCalcWidthRatio:1,resizeMaxWidthThreshold:200,columnGroup:"Common Factor",cssClass:"text-uppercase fw-bold",filterable:!0,filter:{model:f.CuW.compoundInputText},editor:{model:f.R8o.longText,required:!0,alwaysSaveOnEnterKey:!0,maxLength:12,editorOptions:{cols:45,rows:6,buttonTexts:{cancel:"Close",save:"Done"}},validator:E}},{id:"duration",name:"Duration",field:"duration",sortable:!0,filterable:!0,minWidth:65,type:f.PUO.number,columnGroup:"Common Factor",formatter:(e,t,i)=>null==i||""===i?"":i>1?`${i} days`:`${i} day`,editor:{model:f.R8o.float,decimal:2,valueStep:1,minValue:0,maxValue:1e4,alwaysSaveOnEnterKey:!0,required:!0}},{id:"cost",name:"Cost",field:"cost",minWidth:65,sortable:!0,filterable:!0,type:f.PUO.number,columnGroup:"Analysis",filter:{model:f.CuW.compoundInputNumber},formatter:f._tQ.dollar},{id:"percentComplete",name:"% Complete",field:"percentComplete",minWidth:100,type:f.PUO.number,sortable:!0,filterable:!0,columnGroup:"Analysis",filter:{model:f.CuW.compoundSlider,operator:">="},editor:{model:f.R8o.slider,minValue:0,maxValue:100}},{id:"complexity",name:"Complexity",field:"complexity",resizeCalcWidthRatio:.9,sortable:!0,filterable:!0,columnGroup:"Analysis",formatter:(e,t,i)=>this.complexityLevelList[i]?.label,exportCustomFormatter:(e,t,i)=>this.complexityLevelList[i]?.label,filter:{model:f.CuW.multipleSelect,collection:this.complexityLevelList},editor:{model:f.R8o.singleSelect,collection:this.complexityLevelList}},{id:"start",name:"Start",field:"start",sortable:!0,formatter:f._tQ.dateUs,columnGroup:"Period",exportCustomFormatter:f._tQ.dateUs,type:f.PUO.date,outputType:f.PUO.dateUs,saveOutputType:f.PUO.dateUtc,filterable:!0,filter:{model:f.CuW.compoundDate},editor:{model:f.R8o.date,params:{hideClearButton:!1}}},{id:"completed",name:"Completed",field:"completed",width:80,minWidth:75,maxWidth:100,cssClass:"text-center",columnGroup:"Period",formatter:f._tQ.checkmark,exportWithFormatter:!1,filterable:!0,sortable:!0,filter:{collection:[{value:"",label:""},{value:!0,label:"True"},{value:!1,label:"False"}],model:f.CuW.singleSelect},editor:{model:f.R8o.checkbox}},{id:"finish",name:"Finish",field:"finish",sortable:!0,formatter:f._tQ.dateUs,columnGroup:"Period",type:f.PUO.date,outputType:f.PUO.dateUs,saveOutputType:f.PUO.dateUtc,filterable:!0,filter:{model:f.CuW.compoundDate},exportCustomFormatter:f._tQ.dateUs,editor:{model:f.R8o.date,editorOptions:{minDate:"today"},validator:(e,t)=>{const i=t&&t.item;return i&&i.completed&&!e?{valid:!1,msg:'You must provide a "Finish" date when "Completed" is checked.'}:{valid:!0,msg:""}}}},{id:"product",name:"Product",field:"product",filterable:!0,columnGroup:"Item",minWidth:100,resizeCharWidthInPx:8,exportWithFormatter:!0,dataKey:"id",labelKey:"itemName",formatter:f._tQ.complexObject,exportCustomFormatter:f._tQ.complex,type:f.PUO.object,sortComparer:f.Luy.objectString,editor:{model:f.R8o.autocompleter,alwaysSaveOnEnterKey:!0,massUpdate:!0,editorOptions:{minLength:1,fetch:(e,t)=>{t(this.mockProducts().filter((t=>t.itemName.toLowerCase().includes(e.toLowerCase()))))},renderItem:{layout:"fourCorners",templateCallback:e=>this.renderItemCallbackWith4Corners(e)}}},filter:{model:f.CuW.inputText,type:f.PUO.string,queryField:"product.itemName"}},{id:"origin",name:"Country of Origin",field:"origin",formatter:f._tQ.complexObject,columnGroup:"Item",exportCustomFormatter:f._tQ.complex,dataKey:"code",labelKey:"name",type:f.PUO.object,sortComparer:f.Luy.objectString,filterable:!0,sortable:!0,minWidth:100,editor:{model:f.R8o.autocompleter,massUpdate:!0,customStructure:{label:"name",value:"code"},collectionAsync:this.http.fetch("assets/data/countries.json")},filter:{model:f.CuW.inputText,type:"string",queryField:"origin.name"}},{id:"action",name:"Action",field:"action",width:70,minWidth:70,maxWidth:70,excludeFromExport:!0,formatter:()=>'<div class="button-style margin-auto" style="width: 35px;"><span class="fa fa-chevron-down text-primary"></span></div>',cellMenu:{hideCloseButton:!1,commandTitle:"Commands",commandItems:[{command:"help",title:"Help!",iconCssClass:"fa fa-question-circle",positionOrder:66,action:()=>alert("Please Help!")},"divider",{command:"delete-row",title:"Delete Row",positionOrder:64,iconCssClass:"fa fa-times color-danger",cssClass:"red",textCssClass:"text-italic color-danger-light",itemVisibilityOverride:e=>!e.dataContext?.completed,action:(e,t)=>{const i=t.dataContext;confirm(`Do you really want to delete row (${(t?.row??0)+1}) with "${i.title}"`)&&this.aureliaGrid.gridService.deleteItemById(i.id)}}]}}],this.gridOptions={editable:!0,autoAddCustomEditorFormatter:S,enableCellNavigation:!0,autoEdit:!0,autoCommitEdit:!0,autoResize:{container:"#smaller-container",rightPadding:10},gridWidth:"100%",enableAutoResize:!0,enablePagination:!0,pagination:{pageSize:10,pageSizes:[10,200,500,5e3]},autoFitColumnsOnFirstLoad:!1,enableAutoSizeColumns:!1,autosizeColumnsByCellContentOnFirstLoad:!0,enableAutoResizeColumnsByCellContent:!0,resizeByContentOptions:{defaultRatioForStringType:.92,formatterPaddingWidthInPx:8},enableExcelExport:!0,excelExportOptions:{exportWithFormatter:!1},externalResources:[new h.N],enableFiltering:!0,enableRowSelection:!0,enableCheckboxSelector:!0,checkboxSelector:{hideInFilterHeaderRow:!1,hideInColumnTitleRow:!0},rowSelectionOptions:{selectActiveRow:!1},createPreHeaderPanel:!0,showPreHeaderPanel:!0,preHeaderPanelHeight:28,rowHeight:33,headerRowHeight:35,editCommandHandler:(e,t,i)=>{const a=Array.isArray(i.prevSerializedValue)?i.prevSerializedValue:[i.prevSerializedValue],r=Array.isArray(i.serializedValue)?i.serializedValue:[i.serializedValue],o=this.columnDefinitions.filter((e=>void 0!==e.editor)),n=[];a.forEach(((s,l)=>{if(a[l]!==r[l]){const a=Array.isArray(i.prevSerializedValue)?o[l]:t;this.editedItems[this.gridOptions.datasetIdPropertyName||"id"]=e,this.aureliaGrid.slickGrid.invalidate(),i.execute(),this.renderUnsavedCellStyling(e,a,i),n.push(a)}})),this.editQueue.push({item:e,columns:n,editCommand:i})},enableCellMenu:!0}}loadData(e){const t=[];for(let i=0;i<e;i++){const e=Math.floor(Math.random()*this.mockProducts().length),a=2e3+Math.floor(10*Math.random()),r=(new Date).getFullYear()+Math.floor(10*Math.random()),o=Math.floor(11*Math.random()),n=Math.floor(29*Math.random()),s=Math.floor(59*Math.random()),l=new Date(r,o+1,n,s,s,s),d=Math.floor(100*Math.random())+15,c=d>100?i>5?100:88:d,u=100===c;t[i]={id:i,title:"Task "+i,duration:Math.floor(100*Math.random())+10,percentComplete:c,analysis:{percentComplete:c},complexity:i%3?0:2,start:new Date(a,o,n,n,s,s,s),finish:u||i%3==0&&l>new Date&&i>3?u?new Date:l:"",cost:i%33==0?null:Math.round(1e4*Math.random())/100,completed:u||i%3==0&&l>new Date&&i>3,product:{id:this.mockProducts()[e]?.id,itemName:this.mockProducts()[e]?.itemName},origin:i%2?{code:"CA",name:"Canada"}:{code:"US",name:"United States"}},i%8||(delete t[i].finish,delete t[i].percentComplete)}return t}handleValidationError(e,t){if(t.validationResults){let e=t.validationResults.msg||"";if(t.editor&&t.validationResults.errors){e+="\n";for(const i of t.validationResults.errors)e+=`${i.editor.args.column.name.toUpperCase()}: ${i.msg}`}console.log(e)}else alert(t.validationResults.msg);return!1}handleItemDeleted(e,t){console.log("item deleted with id:",t.itemId)}handleOnBeforeEditCell(e,t){const{column:i,item:a,grid:r}=t;return i&&a&&(function(e,t,i){const a=i&&i.getOptions&&i.getOptions(),r=t.editor;let o=!(!a.editable||!r);return e&&t&&a&&a.editable&&"finish"===t.id&&(o=!!e?.completed),o}(a,i,r)||e.stopImmediatePropagation()),!1}handleOnCellChange(e,t){const i=t?.item;i&&!i.completed&&(i.finish=null,this.aureliaGrid.gridService.updateItem(i))}handleDefaultResizeColumns(){const e=this.aureliaGrid.slickGrid.getColumns();e.forEach((e=>e.width=e.originalWidth)),this.aureliaGrid.slickGrid.setColumns(e),this.aureliaGrid.slickGrid.autosizeColumns(),this.isUsingDefaultResize=!0}handleNewResizeColumns(){this.aureliaGrid.resizerService.resizeColumnsByCellContent(!0),this.isUsingDefaultResize=!1}handleOnSelectedRowIdsChanged(e){console.log("Selected Ids:",e.selectedRowIds)}toggleGridEditReadonly(){this.undoAllEdits(),this.isGridEditable=!this.isGridEditable,this.isGridEditable||(this.isMassSelectionDisabled=!0),this.aureliaGrid.slickGrid.setOptions({editable:this.isGridEditable})}removeUnsavedStylingFromCell(e,t,i){this.aureliaGrid.slickGrid.removeCellCssStyles(`unsaved_highlight_${[t.id]}${i}`)}removeAllUnsavedStylingFromCell(){for(const e of this.editQueue){const t=e?.editCommand;if(t)for(const i of e.columns)this.removeUnsavedStylingFromCell(e.item,i,t.row)}}renderUnsavedStylingOnAllVisibleCells(){for(const e of this.editQueue)if(e){const{item:t,columns:i,editCommand:a}=e;Array.isArray(i)&&i.forEach((e=>{this.renderUnsavedCellStyling(t,e,a)}))}}renderUnsavedCellStyling(e,t,i){if(i&&e&&t){const i=this.aureliaGrid.dataView.getRowByItem(e);if(i>=0){const e={[i]:{[t.id]:"unsaved-editable-field"}};this.aureliaGrid.slickGrid.setCellCssStyles(`unsaved_highlight_${[t.id]}${i}`,e)}}}setSelectedRowIds(){this.aureliaGrid.dataView?.setSelectedIds([3,4,11])}saveAll(){console.log(this.editQueue),console.log(this.editedItems),this.removeAllUnsavedStylingFromCell(),this.editQueue=[],this.editedItems={}}undoLastEdit(e=!1){const t=this.editQueue.pop(),i=t?.editCommand;if(t&&i&&f.W9y.cancelCurrentEdit()){i.undo();for(const e of t.columns)this.removeUnsavedStylingFromCell(t.item,e,i.row);this.aureliaGrid.slickGrid.invalidate(),e&&this.aureliaGrid?.slickGrid.gotoCell(i.row,i.cell,!1)}}undoAllEdits(){for(const e of this.editQueue){const t=e?.editCommand;if(t&&f.W9y.cancelCurrentEdit()){t.undo();for(const i of e.columns)this.removeUnsavedStylingFromCell(e.item,i,t.row)}}this.aureliaGrid.slickGrid.invalidate(),this.editQueue=[]}mockProducts(){return[{id:0,itemName:"Sleek Metal Computer",itemNameTranslated:"some fantastic sleek metal computer description",listPrice:2100.23,itemTypeName:"I",image:"http://i.stack.imgur.com/pC1Tv.jpg",icon:`mdi ${this.getRandomIcon(0)}`},{id:1,itemName:"Tasty Granite Table",itemNameTranslated:"an extremely huge and heavy table",listPrice:3200.12,itemTypeName:"I",image:"https://i.imgur.com/Fnm7j6h.jpg",icon:`mdi ${this.getRandomIcon(1)}`},{id:2,itemName:"Awesome Wooden Mouse",itemNameTranslated:"super old mouse",listPrice:15,itemTypeName:"I",image:"https://i.imgur.com/RaVJuLr.jpg",icon:`mdi ${this.getRandomIcon(2)}`},{id:3,itemName:"Gorgeous Fresh Shirt",itemNameTranslated:"what a gorgeous shirt seriously",listPrice:25.76,itemTypeName:"I",image:"http://i.stack.imgur.com/pC1Tv.jpg",icon:`mdi ${this.getRandomIcon(3)}`},{id:4,itemName:"Refined Cotton Table",itemNameTranslated:"super light table that will fall apart amazingly fast",listPrice:13.35,itemTypeName:"I",image:"https://i.imgur.com/Fnm7j6h.jpg",icon:`mdi ${this.getRandomIcon(4)}`},{id:5,itemName:"Intelligent Wooden Pizza",itemNameTranslated:"wood not included",listPrice:23.33,itemTypeName:"I",image:"https://i.imgur.com/RaVJuLr.jpg",icon:`mdi ${this.getRandomIcon(5)}`},{id:6,itemName:"Licensed Cotton Chips",itemNameTranslated:"not sure what that is",listPrice:71.21,itemTypeName:"I",image:"http://i.stack.imgur.com/pC1Tv.jpg",icon:`mdi ${this.getRandomIcon(6)}`},{id:7,itemName:"Ergonomic Rubber Soap",itemNameTranslated:"so good you'll want to use it every night",listPrice:2.43,itemTypeName:"I",image:"https://i.imgur.com/Fnm7j6h.jpg",icon:`mdi ${this.getRandomIcon(7)}`},{id:8,itemName:"Handcrafted Steel Car",itemNameTranslated:"aka tesla truck",listPrice:31288.39,itemTypeName:"I",image:"https://i.imgur.com/RaVJuLr.jpg",icon:`mdi ${this.getRandomIcon(8)}`}]}getRandomIcon(e){const t=["fa-500px","fa-address-book","fa-address-book-o","fa-address-card","fa-address-card-o","fa-adjust","fa-adn","fa-align-center","fa-align-justify","fa-align-left","fa-align-right","fa-amazon","fa-ambulance","fa-american-sign-language-interpreting","fa-anchor","fa-android","fa-angellist","fa-angle-double-down","fa-angle-double-left","fa-angle-double-right","fa-angle-double-up","fa-angle-down","fa-angle-left","fa-angle-right","fa-angle-up","fa-apple","fa-archive","fa-area-chart","fa-arrow-circle-down","fa-arrow-circle-left","fa-arrow-circle-o-down","fa-arrow-circle-o-left","fa-arrow-circle-o-right","fa-arrow-circle-o-up","fa-arrow-circle-right","fa-arrow-circle-up","fa-arrow-down","fa-arrow-left","fa-arrow-right","fa-arrow-up","fa-arrows","fa-arrows-alt","fa-arrows-h","fa-arrows-v","fa-assistive-listening-systems","fa-asterisk","fa-at","fa-audio-description","fa-backward","fa-balance-scale","fa-ban","fa-bandcamp","fa-bank (alias)","fa-bar-chart","fa-barcode","fa-bars","fa-bath","fa-battery-empty","fa-battery-full","fa-battery-half","fa-battery-quarter","fa-battery-three-quarters","fa-bed","fa-beer","fa-behance","fa-behance-square","fa-bell","fa-bell-o","fa-bell-slash","fa-bell-slash-o","fa-bicycle","fa-binoculars","fa-birthday-cake","fa-bitbucket","fa-bitbucket-square"],i=Math.floor(Math.random()*t.length-1);return t[e??i]}renderItemCallbackWith2Rows(e){return`<div class="autocomplete-container-list">\n      <div class="autocomplete-left">\n        \x3c!--<img src="http://i.stack.imgur.com/pC1Tv.jpg" width="50" />--\x3e\n        <span class="fa ${e.icon}"></span>\n      </div>\n      <div>\n        <span class="autocomplete-top-left">\n          <span class="mdfai ${"I"===e.itemTypeName?"fa-info-circle":"fa-copy"}"></span>\n          ${e.itemName}\n        </span>\n      <div>\n    </div>\n    <div>\n      <div class="autocomplete-bottom-left">${e.itemNameTranslated}</div>\n    </div>`}renderItemCallbackWith4Corners(e){return`<div class="autocomplete-container-list">\n          <div class="autocomplete-left">\n            \x3c!--<img src="http://i.stack.imgur.com/pC1Tv.jpg" width="50" />--\x3e\n            <span class="fa ${e.icon}"></span>\n          </div>\n          <div>\n            <span class="autocomplete-top-left">\n              <span class="fa ${"I"===e.itemTypeName?"fa-info-circle":"fa-copy"}"></span>\n              ${e.itemName}\n            </span>\n            <span class="autocomplete-top-right">${(0,f.ZVp)(e.listPrice,2,2,!1,"$")}</span>\n          <div>\n        </div>\n        <div>\n          <div class="autocomplete-bottom-left">${e.itemNameTranslated}</div>\n          <span class="autocomplete-bottom-right">Type: <b>${"I"===e.itemTypeName?"Item":"C"===e.itemTypeName?"PdCat":"Cat"}</b></span>\n        </div>`}};var z,G;U=function(e,t,i,a){var r,o=arguments.length,n=o<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(o<3?r(n):o>3?r(t,i,n):r(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n}([(0,r.EMX)(a),(z=0,G=(0,p.pn)(m.xl),function(e,t){G(e,t,z)}),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:paramtypes",[Object])],U)},38880:(e,t,i)=>{i.d(t,{Pq:()=>r,xl:()=>m});var a=i(17557);function r(e,t){return JSON.stringify(void 0!==e?e:{},t)}const o={maxRetries:3,interval:1e3,strategy:0};class n{constructor(e){if(this.retryConfig={...o,...void 0!==e?e:{}},2===this.retryConfig.strategy&&this.retryConfig.interval<=1e3)throw new Error("An interval less than or equal to 1 second is not allowed when using the exponential retry strategy")}request(e){return e.retryConfig||(e.retryConfig={...this.retryConfig},e.retryConfig.counter=0),e.retryConfig.requestClone=e.clone(),e}response(e,t){return Reflect.deleteProperty(t,"retryConfig"),e}responseError(e,t,i){const{retryConfig:a}=t,{requestClone:r}=a;return Promise.resolve().then((()=>{if(a.counter<a.maxRetries){const o=void 0===a.doRetry||a.doRetry(e,t);return Promise.resolve(o).then((o=>{if(o){a.counter++;const e=s(a);return new Promise((t=>setTimeout(t,isNaN(e)?0:e))).then((()=>{const e=r.clone();return"function"==typeof a.beforeRetry?a.beforeRetry(e,i):e})).then((e=>{const t={...e,retryConfig:a};return i.fetch(t)}))}throw Reflect.deleteProperty(t,"retryConfig"),e}))}throw Reflect.deleteProperty(t,"retryConfig"),e}))}}function s(e){const{interval:t,strategy:i,minRandomInterval:a,maxRandomInterval:r,counter:o}=e;if("function"==typeof i)return e.strategy(o);switch(i){case 0:return l[0](t);case 1:return l[1](o,t);case 2:return l[2](o,t);case 3:return l[3](o,t,a,r);default:throw new Error("Unrecognized retry strategy")}}const l=[e=>e,(e,t)=>t*e,(e,t)=>1===e?t:t**e/1e3,(e,t,i=0,a=6e4)=>Math.random()*(a-i)+i];class d{constructor(){this.baseUrl="",this.defaults={},this.interceptors=[],this.dispatcher=null}withBaseUrl(e){return this.baseUrl=e,this}withDefaults(e){return this.defaults=e,this}withInterceptor(e){return this.interceptors.push(e),this}useStandardConfiguration(){return Object.assign(this.defaults,{credentials:"same-origin"},this.defaults),this.rejectErrorResponses()}rejectErrorResponses(){return this.withInterceptor({response:c})}withRetry(e){const t=new n(e);return this.withInterceptor(t)}withDispatcher(e){return this.dispatcher=e,this}}function c(e){if(!e.ok)throw e;return e}const u=/^([a-z][a-z0-9+\-.]*:)?\/\//i,m=a.DI.createInterface("IHttpClient",(e=>e.singleton(p)));class p{constructor(){this.dispatcher=null,this.activeRequestCount=0,this.isRequesting=!1,this.isConfigured=!1,this.baseUrl="",this.defaults=null,this.interceptors=[]}configure(e){let t;if("object"==typeof e)t={defaults:e};else{if("function"!=typeof e)throw new Error("invalid config");{t=new d,t.baseUrl=this.baseUrl,t.defaults={...this.defaults},t.interceptors=this.interceptors,t.dispatcher=this.dispatcher;const i=e(t);Object.prototype.isPrototypeOf.call(d.prototype,i)&&(t=i)}}const i=t.defaults;if(void 0!==i&&Object.prototype.isPrototypeOf.call(Headers.prototype,i.headers))throw new Error("Default headers must be a plain object.");const a=t.interceptors;if(void 0!==a&&a.length){if(a.filter((e=>Object.prototype.isPrototypeOf.call(n.prototype,e))).length>1)throw new Error("Only one RetryInterceptor is allowed.");const e=a.findIndex((e=>Object.prototype.isPrototypeOf.call(n.prototype,e)));if(e>=0&&e!==a.length-1)throw new Error("The retry interceptor must be the last interceptor defined.")}return this.baseUrl=t.baseUrl,this.defaults=i,this.interceptors=void 0!==t.interceptors?t.interceptors:[],this.dispatcher=t.dispatcher,this.isConfigured=!0,this}fetch(e,t){this.trackRequestStart();let i=this.buildRequest(e,t);return this.processRequest(i,this.interceptors).then((e=>{let t;if(Object.prototype.isPrototypeOf.call(Response.prototype,e))t=Promise.resolve(e);else{if(!Object.prototype.isPrototypeOf.call(Request.prototype,e))throw new Error(`An invalid result was returned by the interceptor chain. Expected a Request or Response instance, but got [${e}]`);i=e,t=fetch(i)}return this.processResponse(t,this.interceptors,i)})).then((e=>Object.prototype.isPrototypeOf.call(Request.prototype,e)?this.fetch(e):e)).then((e=>(this.trackRequestEnd(),e)),(e=>{throw this.trackRequestEnd(),e}))}buildRequest(e,t){const i=null!==this.defaults?this.defaults:{};let a,r,o;const n=function(e){const t={},i=void 0!==e?e:{};for(const e in i)Object.prototype.hasOwnProperty.call(i,e)&&(t[e]="function"==typeof i[e]?i[e]():i[e]);return t}(i.headers);if(Object.prototype.isPrototypeOf.call(Request.prototype,e))a=e,o=new Headers(a.headers).get("Content-Type");else{t||(t={}),r=t.body;const n=void 0!==r?{body:r}:null,s={...i,headers:{},...t,...n};o=new Headers(s.headers).get("Content-Type"),a=new Request(h(this.baseUrl,e),s)}return o||(new Headers(n).has("content-type")?a.headers.set("Content-Type",new Headers(n).get("content-type")):void 0!==r&&function(e){try{JSON.parse(e)}catch(e){return!1}return!0}(r)&&a.headers.set("Content-Type","application/json")),function(e,t){const i=void 0!==t?t:{};for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&!e.has(t)&&e.set(t,i[t])}(a.headers,n),void 0!==r&&Object.prototype.isPrototypeOf.call(Blob.prototype,r)&&r.type&&a.headers.set("Content-Type",r.type),a}get(e,t){return this.fetch(e,t)}post(e,t,i){return this.callFetch(e,t,i,"POST")}put(e,t,i){return this.callFetch(e,t,i,"PUT")}patch(e,t,i){return this.callFetch(e,t,i,"PATCH")}delete(e,t,i){return this.callFetch(e,t,i,"DELETE")}trackRequestStart(){if(this.isRequesting=!!++this.activeRequestCount,this.isRequesting&&null!==this.dispatcher){const e=new this.dispatcher.ownerDocument.defaultView.CustomEvent("aurelia-fetch-client-request-started",{bubbles:!0,cancelable:!0});setTimeout((()=>{this.dispatcher.dispatchEvent(e)}),1)}}trackRequestEnd(){if(this.isRequesting=!! --this.activeRequestCount,!this.isRequesting&&null!==this.dispatcher){const e=new this.dispatcher.ownerDocument.defaultView.CustomEvent("aurelia-fetch-client-requests-drained",{bubbles:!0,cancelable:!0});setTimeout((()=>{this.dispatcher.dispatchEvent(e)}),1)}}processRequest(e,t){return this.applyInterceptors(e,t,"request","requestError",this)}processResponse(e,t,i){return this.applyInterceptors(e,t,"response","responseError",i,this)}applyInterceptors(e,t,i,a,...r){return(void 0!==t?t:[]).reduce(((e,t)=>{const o=t[i],n=t[a];return e.then(o?e=>o.call(t,e,...r):f,n?e=>n.call(t,e,...r):g)}),Promise.resolve(e))}callFetch(e,t,i,a){return i||(i={}),i.method=a,t&&(i.body=t),this.fetch(e,i)}}function h(e,t){return u.test(t)?t:(void 0!==e?e:"")+t}function f(e){return e}function g(e){throw e}}}]);