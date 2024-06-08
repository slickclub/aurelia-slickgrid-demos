"use strict";(self.webpackChunkaurelia_slickgrid_locale_demo_bs5=self.webpackChunkaurelia_slickgrid_locale_demo_bs5||[]).push([[212],{854:(e,t,i)=>{i.d(t,{M:()=>n});var l=i(8211);class n{constructor(){this._clearFilterTriggered=!1,this._shouldTriggerQuery=!0,this.searchTerms=[],this.operator=l.huT.equal}get columnFilter(){return this.columnDef?.filter??{}}get gridOptions(){return this.grid?.getOptions()??{}}init(e){this.grid=e.grid,this.callback=e.callback,this.columnDef=e.columnDef,this.searchTerms=(e.hasOwnProperty("searchTerms")?e.searchTerms:[])||[];const t=Array.isArray(this.searchTerms)&&this.searchTerms.length>0?this.searchTerms[0]:"";this.filterElm=this.createDomElement(t),this.filterElm.addEventListener("keyup",this.handleKeyup.bind(this))}handleKeyup(e){let t=e.target?.value??"";const i=this.gridOptions.enableFilterTrimWhiteSpace||this.columnFilter.enableTrimWhiteSpace;"string"==typeof t&&i&&(t=t.trim()),this._clearFilterTriggered?(this.callback(e,{columnDef:this.columnDef,clearFilterTriggered:this._clearFilterTriggered,shouldTriggerQuery:this._shouldTriggerQuery}),this.filterElm.classList.remove("filled")):(""===t?this.filterElm.classList.remove("filled"):this.filterElm.classList.add("filled"),this.callback(e,{columnDef:this.columnDef,searchTerms:[t],shouldTriggerQuery:this._shouldTriggerQuery})),this._clearFilterTriggered=!1,this._shouldTriggerQuery=!0}clear(e=!0){this.filterElm&&(this._clearFilterTriggered=!0,this._shouldTriggerQuery=e,this.filterElm.value="",this.filterElm.dispatchEvent(new Event("keyup")))}destroy(){this.filterElm&&(this.filterElm.removeEventListener("keyup",this.handleKeyup),this.filterElm.remove())}setValues(e){e&&(this.filterElm.value=e)}createDomElement(e){const t=this.grid.getHeaderRowColumn(this.columnDef.id);(0,l.i3Z)(t);let i=this.gridOptions?.defaultFilterPlaceholder??"";this.columnFilter?.placeholder&&(i=this.columnFilter.placeholder);const n=document.createElement("input");n.className="form-control search-filter",n.placeholder=i;const a=e;return n.value=a,n.dataset.columnid=`${this.columnDef.id}`,t&&t.appendChild(n),n}}},3212:(e,t,i)=>{i.r(t),i.d(t,{Example3:()=>T});var l={};i.r(l),i.d(l,{bindables:()=>d,default:()=>o,dependencies:()=>s,name:()=>a,register:()=>u,template:()=>r});var n=i(5394);const a="example3",r='<h2>\n  ${title}\n  <span class="float-end">\n    <a style="font-size: 18px"\n        target="_blank"\n        href="https://github.com/ghiscoding/aurelia-slickgrid/blob/master/packages/demo/src/examples/slickgrid/example3.ts">\n      <span class="mdi mdi-link-variant"></span> code\n    </a>\n  </span>\n</h2>\n<div class="subtitle"\n      innerhtml.bind="subTitle"></div>\n\n<div class="row">\n  <div class="col-sm-6">\n    <label>autoEdit setting</label>\n    <br />\n    <span id="radioAutoEdit">\n      <div class="row">\n\n        <label class="radio-inline control-label"\n                for="radioTrue">\n          <input type="radio"\n                  name="inlineRadioOptions"\n                  id="radioTrue"\n                  checked\n                  value.bind="isAutoEdit"\n                  click.trigger="setAutoEdit(true)"> ON\n          (single-click)\n        </label>\n        <label class="radio-inline control-label"\n                for="radioFalse">\n          <input type="radio"\n                  name="inlineRadioOptions"\n                  id="radioFalse"\n                  value.bind="isAutoEdit"\n                  click.trigger="setAutoEdit(false)"> OFF\n          (double-click)\n        </label>\n      </div>\n      <div class="row col-sm-12">\n        <span>\n          <button class="btn btn-outline-secondary btn-sm btn-icon" click.trigger="undo()" data-test="undo-btn">\n            <i class="mdi mdi-undo"></i>\n            Undo last edit(s)\n          </button>\n          <label class="checkbox-inline control-label"\n                  for="autoCommitEdit">\n            <input type="checkbox"\n                    id="autoCommitEdit"\n                    data-test="auto-commit"\n                    value.bind="gridOptions.autoCommitEdit"\n                    click.trigger="changeAutoCommit()">\n            Auto Commit Edit\n          </label>\n        </span>\n      </div>\n    </span>\n    <div class="row" style="margin-top: 5px">\n      <div class="col-sm-12">\n        <button class="btn btn-outline-secondary btn-sm btn-icon" click.trigger="aureliaGrid.filterService.clearFilters()">Clear\n          Filters</button>\n        <button class="btn btn-outline-secondary btn-sm btn-icon" click.trigger="aureliaGrid.sortService.clearSorting()">Clear\n          Sorting</button>\n        <button class="btn btn-outline-primary btn-sm" data-test="add-item-btn" click.trigger="addItem()"\n                title="Clear Filters &amp; Sorting to see it better">\n          Add item\n        </button>\n        <button class="btn btn-outline-danger btn-sm" data-test="delete-item-btn" click.trigger="deleteItem()">Delete\n          item</button>\n      </div>\n    </div>\n    <div class="row" style="margin-top: 5px">\n      <div class="col-sm-12">\n        <button class="btn btn-outline-secondary btn-sm btn-icon" data-test="add-title-column"\n                click.trigger="dynamicallyAddTitleHeader()">\n          <i class="mdi mdi-shape-square-plus"></i>\n          Dynamically Duplicate Title Column\n        </button>\n        <button class="btn btn-outline-secondary btn-sm btn-icon" data-test="remove-title-column"\n                click.trigger="dynamicallyRemoveLastColumn()">\n          <i class="mdi mdi-minus"></i>\n          Dynamically Remove Last Column\n        </button>\n      </div>\n    </div>\n  </div>\n\n  <div class="col-sm-6">\n    <div class="alert alert-info"\n          show.bind="updatedObject">\n      <strong>Updated Item:</strong> ${updatedObject | stringify}\n    </div>\n    <div class="alert alert-warning"\n          show.bind="alertWarning">\n      ${alertWarning}\n    </div>\n  </div>\n</div>\n\n<div id="grid-container" class="col-sm-12">\n  <aurelia-slickgrid grid-id="grid3"\n                      column-definitions.bind="columnDefinitions"\n                      grid-options.bind="gridOptions"\n                      dataset.bind="dataset"\n                      instances.bind="aureliaGrid"\n                      on-cell-change.trigger="onCellChanged($event.detail.eventData, $event.detail.args)"\n                      on-click.trigger="onCellClicked($event.detail.eventData, $event.detail.args)"\n                      on-validation-error.trigger="onCellValidationError($event.detail.eventData, $event.detail.args)">\n  </aurelia-slickgrid>\n</div>\n',o=r,s=[],d=[];let c;function u(e){c||(c=n.K94.define({name:a,template:r,dependencies:s,bindables:d})),e.register(c)}var m=i(8880),h=i(7557),p=i(9348),g=i.n(p),f=i(8211);class b{constructor(e){this.args=e,this.init()}get columnDef(){return this.args?.column??{}}get columnEditor(){return this.columnDef?.editor??{}}get validator(){return this.columnEditor?.validator||this.columnDef?.validator}init(){const e=this.columnEditor?.placeholder||"";this.inputElm=document.createElement("input"),this.inputElm.className="editor-text",this.inputElm.placeholder=e,this.args.container.appendChild(this.inputElm),this.inputElm.addEventListener("keydown",this.handleKeydown.bind(this)),setTimeout((()=>{this.inputElm.focus(),this.inputElm.select()}),50)}handleKeydown(e){this._lastInputEvent=e,"ArrowLeft"!==e.key&&"ArrowRight"!==e.key||e.stopImmediatePropagation()}destroy(){this.inputElm.removeEventListener("keydown",this.handleKeydown.bind(this)),this.inputElm.remove()}focus(){this.inputElm.focus()}getValue(){return this.inputElm.value}setValue(e){this.inputElm.value=e}loadValue(e){this.defaultValue=e[this.args.column.field]||"",this.inputElm.value=this.defaultValue,this.inputElm.defaultValue=this.defaultValue,this.inputElm.select()}serializeValue(){return this.inputElm.value}applyValue(e,t){const i=this.validate(t);e[this.args.column.field]=i&&i.valid?t:""}isValueChanged(){const e=this._lastInputEvent?.key;return!(!this.columnEditor?.alwaysSaveOnEnterKey||"Enter"!==e)||!(""===this.inputElm.value&&null===this.defaultValue)&&this.inputElm.value!==this.defaultValue}validate(e){if(this.validator){const t=void 0!==e?e:this.inputElm?.value;return this.validator(t,this.args)}return{valid:!0,msg:null}}}var v=i(854);i(6757);const y="assets/data/collection_100_numbers.json",C="assets/data/countries.json",E="assets/data/country_names.json",k=e=>null!=e&&e.length?/^Task\s\d+$/.test(e)?{valid:!0,msg:""}:{valid:!1,msg:'Your title is invalid, it must start with "Task" followed by a number'}:{valid:!1,msg:"This is a required field"},O=(e,t,i)=>{if(i&&Array.isArray(i)){const e=i.map((e=>`Task ${e}`)).join(", ");return`<span title="${e}">${e}</span>`}return""};class T{constructor(e=(0,h.hd)((0,h.pn)(m.xl))){this.http=e,this.title="Example 3: Editors / Delete",this.subTitle='\n  Grid with Inline Editors and onCellClick actions (<a href="https://ghiscoding.gitbook.io/aurelia-slickgrid/column-functionalities/editors" target="_blank">Wiki docs</a>).\n  <ul>\n    <li>When using "enableCellNavigation: true", clicking on a cell will automatically make it active &amp; selected.</li>\n    <ul><li>If you don\'t want this behavior, then you should disable "enableCellNavigation"</li></ul>\n    <li>Inline Editors requires "enableCellNavigation: true" (not sure why though)</li>\n    <li>\n        Support Excel Copy Buffer (SlickGrid Copy Manager Plugin), you can use it by simply enabling "enableExcelCopyBuffer" flag.\n        Note that it will only evaluate Formatter when the "exportWithFormatter" flag is enabled (through "ExcelExportOptions" or "TextExportOptions" or the column definition)\n    </li>\n    <li>Support of "collectionAsync" is possible, click on "Clear Filters/Sorting" then add/delete item(s) and look at "Prerequisites" Select Filter</li>\n  </ul>\n  ',this._commandQueue=[],this.columnDefinitions=[],this.dataset=[],this.isAutoEdit=!0,this.duplicateTitleHeaderCount=1,this.defineGrid()}attached(){this.dataset=this.mockData(100)}defineGrid(){this.columnDefinitions=[{id:"edit",field:"id",excludeFromColumnPicker:!0,excludeFromGridMenu:!0,excludeFromHeaderMenu:!0,formatter:f._tQ.icon,params:{iconCssClass:"mdi mdi-pencil pointer"},minWidth:30,maxWidth:30,onCellClick:(e,t)=>{console.log(t),this.alertWarning=`Editing: ${t.dataContext.title}`,this.aureliaGrid.gridService.highlightRow(t.row,1500),this.aureliaGrid.gridService.setSelectedRow(t.row)}},{id:"delete",field:"id",excludeFromColumnPicker:!0,excludeFromGridMenu:!0,excludeFromHeaderMenu:!0,formatter:f._tQ.icon,params:{iconCssClass:"mdi mdi-trash-can pointer"},minWidth:30,maxWidth:30},{id:"title",name:"Title",field:"title",filterable:!0,sortable:!0,type:f.PUO.string,editor:{model:f.R8o.longText,placeholder:"something",title:"some title",validator:k},minWidth:100,onCellChange:(e,t)=>{console.log(t),this.alertWarning=`Updated Title: ${t.dataContext.title}`}},{id:"title2",name:"Title, Custom Editor",field:"title",filterable:!0,sortable:!0,type:f.PUO.string,editor:{model:b,placeholder:"custom",validator:k},filter:{model:v.M,placeholder:"🔎︎ custom"},minWidth:70},{id:"duration",name:"Duration (days)",field:"duration",filterable:!0,minWidth:100,sortable:!0,type:f.PUO.number,filter:{model:f.CuW.slider,filterOptions:{hideSliderNumber:!1}},editor:{model:f.R8o.slider,minValue:0,maxValue:100}},{id:"complete",name:"% Complete",field:"percentComplete",filterable:!0,formatter:f._tQ.multiple,type:f.PUO.number,editor:{enableRenderHtml:!0,collection:Array.from(Array(101).keys()).map((e=>({value:e,label:e,symbol:'<i class="mdi mdi-percent-outline" style="color:cadetblue"></i>'}))),customStructure:{value:"value",label:"label",labelSuffix:"symbol"},collectionSortBy:{property:"label",sortDesc:!0},collectionFilterBy:{property:"value",value:0,operator:f.huT.notEqual},model:f.R8o.singleSelect},minWidth:100,params:{formatters:[f._tQ.collectionEditor,f._tQ.percentCompleteBar]}},{id:"start",name:"Start",field:"start",filterable:!0,filter:{model:f.CuW.compoundDate},formatter:f._tQ.dateIso,sortable:!0,minWidth:100,type:f.PUO.date,editor:{model:f.R8o.date}},{id:"finish",name:"Finish",field:"finish",filterable:!0,filter:{model:f.CuW.compoundDate},formatter:f._tQ.dateIso,sortable:!0,minWidth:100,type:f.PUO.date,saveOutputType:f.PUO.dateUtc,editor:{model:f.R8o.date,editorOptions:{range:{min:"today"}}}},{id:"cityOfOrigin",name:"City of Origin",field:"cityOfOrigin",filterable:!0,sortable:!0,minWidth:100,editor:{model:f.R8o.autocompleter,placeholder:"🔎︎ search city",editorOptions:{minLength:3,forceUserInput:!0,fetch:(e,t)=>{g()(`http://gd.geobytes.com/AutoCompleteCity?q=${e}`).then((e=>e.json())).then((e=>t(e))).catch((e=>console.log("invalid JSONP response",e)))}}},filter:{model:f.CuW.autocompleter,filterOptions:{minLength:3,fetch:(e,t)=>{g()(`http://gd.geobytes.com/AutoCompleteCity?q=${e}`).then((e=>e.json())).then((e=>t(e))).catch((e=>console.log("invalid JSONP response",e)))}}}},{id:"countryOfOrigin",name:"Country of Origin",field:"countryOfOrigin",formatter:f._tQ.complexObject,dataKey:"code",labelKey:"name",type:f.PUO.object,sortComparer:f.Luy.objectString,filterable:!0,sortable:!0,minWidth:100,editor:{model:f.R8o.autocompleter,customStructure:{label:"name",value:"code"},collectionAsync:this.http.fetch(C)},filter:{model:f.CuW.autocompleter,customStructure:{label:"name",value:"code"},collectionAsync:this.http.fetch(C)}},{id:"countryOfOriginName",name:"Country of Origin Name",field:"countryOfOriginName",filterable:!0,sortable:!0,minWidth:100,editor:{model:f.R8o.autocompleter,collectionAsync:this.http.fetch(E)},filter:{model:f.CuW.autocompleter,collectionAsync:this.http.fetch(E)}},{id:"effort-driven",name:"Effort Driven",field:"effortDriven",filterable:!0,type:f.PUO.boolean,filter:{model:f.CuW.singleSelect,collection:[{value:"",label:""},{value:!0,label:"True"},{value:!1,label:"False"}]},formatter:f._tQ.checkmarkMaterial,editor:{model:f.R8o.checkbox},minWidth:70},{id:"prerequisites",name:"Prerequisites",field:"prerequisites",filterable:!0,formatter:O,exportWithFormatter:!0,sanitizeDataExport:!0,minWidth:100,sortable:!0,type:f.PUO.string,editor:{collectionAsync:this.http.fetch(y),collectionSortBy:{property:"value",sortDesc:!0,fieldType:f.PUO.number},customStructure:{label:"label",value:"value",labelPrefix:"prefix"},collectionOptions:{separatorBetweenTextLabels:" "},model:f.R8o.multipleSelect},filter:{collectionAsync:this.http.fetch(y),collectionSortBy:{property:"value",sortDesc:!0,fieldType:f.PUO.number},customStructure:{label:"label",value:"value",labelPrefix:"prefix"},collectionOptions:{separatorBetweenTextLabels:" "},model:f.CuW.multipleSelect,operator:f.huT.inContains}}],this.gridOptions={autoEdit:this.isAutoEdit,autoCommitEdit:!1,autoResize:{container:"#demo-container",rightPadding:10},editable:!0,enableCellNavigation:!0,enableExcelCopyBuffer:!0,enableFiltering:!0,editCommandHandler:(e,t,i)=>{this._commandQueue.push(i),i.execute()}}}addItem(){const e=this.dataset.length,t=this.mockData(1,e);setTimeout((()=>{const i=this.columnDefinitions.find((e=>"prerequisites"===e.id));if(i){const l=i.editor.collection,n=i.filter.collection;Array.isArray(l)&&Array.isArray(n)&&(this.aureliaGrid.gridService.addItem(t[0],{highlightRow:!1}),l.push({value:e,label:e,prefix:"Task",suffix:"days"}),n.push({value:e,label:e,prefix:"Task",suffix:"days"}))}}),250)}deleteItem(){const e=this.columnDefinitions.find((e=>"prerequisites"===e.id));if(e){const t=e.editor.collection,i=e.filter.collection;if(Array.isArray(t)&&Array.isArray(i)){const e=this.sortCollectionDescending(t).pop();this.sortCollectionDescending(i).pop(),this.aureliaGrid.gridService.deleteItemById(e.value)}}}sortCollectionDescending(e){return e.sort(((e,t)=>e.value-t.value))}mockData(e,t=0){const i=[];for(let l=t;l<t+e;l++){const e=2e3+this.randomBetween(4,15),t=(new Date).getFullYear()-3+Math.floor(10*Math.random()),n=Math.floor(11*Math.random()),a=Math.floor(29*Math.random()),r=Math.round(100*Math.random()),o=new Date(t,n+1,a);i.push({id:l,title:"Task "+l,duration:Math.round(100*Math.random())+"",percentComplete:r,percentCompleteNumber:r,start:new Date(e,n,a),finish:o<new Date?"":o,effortDriven:l%5==0,prerequisites:l%2==0&&0!==l&&l<12?[l,l-1]:[],countryOfOrigin:l%2?{code:"CA",name:"Canada"}:{code:"US",name:"United States"},countryOfOriginName:l%2?"Canada":"United States",cityOfOrigin:l%2?"Vancouver, BC, Canada":"Boston, MA, United States"})}return i}randomBetween(e,t){return Math.floor(Math.random()*(t-e+1)+e)}onCellChanged(e,t){console.log("onCellChange",t),this.updatedObject={...t.item}}onCellClicked(e,t){const i=this.aureliaGrid.gridService.getColumnFromEventArguments(t);console.log(i),"edit"===i.columnDef.id?(this.alertWarning=`open a modal window to edit: ${i.dataContext.title}`,this.aureliaGrid.gridService.highlightRow(t.row,1500)):"delete"===i.columnDef.id&&confirm("Are you sure?")&&(this.aureliaGrid.gridService.deleteItemById(i.dataContext.id),this.alertWarning=`Deleted: ${i.dataContext.title}`)}onCellValidationError(e,t){t.validationResults&&alert(t.validationResults.msg)}changeAutoCommit(){return this.gridOptions.autoCommitEdit=!this.gridOptions.autoCommitEdit,this.aureliaGrid.slickGrid.setOptions({autoCommitEdit:this.gridOptions.autoCommitEdit}),!0}dynamicallyAddTitleHeader(){const e={id:"title"+this.duplicateTitleHeaderCount++,name:"Title",field:"title",editor:{model:f.R8o.text,required:!0,validator:k},sortable:!0,minWidth:100,filterable:!0};this.columnDefinitions.push(e)}dynamicallyRemoveLastColumn(){this.columnDefinitions.pop()}setAutoEdit(e){return this.isAutoEdit=e,this.aureliaGrid.slickGrid.setOptions({autoEdit:e}),!0}undo(){const e=this._commandQueue.pop();e&&f.W9y.cancelCurrentEdit()&&(e.undo(),this.aureliaGrid.slickGrid.gotoCell(e.row,e.cell,!1))}}n.K94.define(l,T)}}]);