"use strict";(self.webpackChunkau_slickgrid_demo=self.webpackChunkau_slickgrid_demo||[]).push([[9815],{854:(e,t,i)=>{i.d(t,{M:()=>l});var r=i(6609);class l{constructor(){this._clearFilterTriggered=!1,this._shouldTriggerQuery=!0,this.searchTerms=[],this.operator=r.huT.equal}get columnFilter(){return this.columnDef?.filter??{}}get gridOptions(){return this.grid?.getOptions()??{}}init(e){this.grid=e.grid,this.callback=e.callback,this.columnDef=e.columnDef,this.searchTerms=(e.hasOwnProperty("searchTerms")?e.searchTerms:[])||[];const t=Array.isArray(this.searchTerms)&&this.searchTerms.length>0?this.searchTerms[0]:"";this.filterElm=this.createDomElement(t),this.filterElm.addEventListener("keyup",this.handleKeyup.bind(this))}handleKeyup(e){let t=e.target?.value??"";const i=this.gridOptions.enableFilterTrimWhiteSpace||this.columnFilter.enableTrimWhiteSpace;"string"==typeof t&&i&&(t=t.trim()),this._clearFilterTriggered?(this.callback(e,{columnDef:this.columnDef,clearFilterTriggered:this._clearFilterTriggered,shouldTriggerQuery:this._shouldTriggerQuery}),this.filterElm.classList.remove("filled")):(""===t?this.filterElm.classList.remove("filled"):this.filterElm.classList.add("filled"),this.callback(e,{columnDef:this.columnDef,searchTerms:[t],shouldTriggerQuery:this._shouldTriggerQuery})),this._clearFilterTriggered=!1,this._shouldTriggerQuery=!0}clear(e=!0){this.filterElm&&(this._clearFilterTriggered=!0,this._shouldTriggerQuery=e,this.filterElm.value="",this.filterElm.dispatchEvent(new Event("keyup")))}destroy(){this.filterElm&&(this.filterElm.removeEventListener("keyup",this.handleKeyup),this.filterElm.remove())}setValues(e){e&&(this.filterElm.value=e)}createDomElement(e){const t=this.grid.getHeaderRowColumn(this.columnDef.id);(0,r.i3Z)(t);let i=this.gridOptions?.defaultFilterPlaceholder??"";this.columnFilter?.placeholder&&(i=this.columnFilter.placeholder);const l=document.createElement("input");l.className="form-control search-filter",l.placeholder=i;const n=e;return l.value=n,l.dataset.columnid=`${this.columnDef.id}`,t&&t.appendChild(l),l}}},9815:(e,t,i)=>{i.r(t),i.d(t,{Example4:()=>v});var r={};i.r(r),i.d(r,{bindables:()=>c,default:()=>o,dependencies:()=>s,name:()=>n,register:()=>u,template:()=>a});var l=i(3680);const n="example4",a='<h2>\n  ${title}\n  <span class="float-end">\n    <a style="font-size: 18px"\n        target="_blank"\n        href="https://github.com/ghiscoding/aurelia-slickgrid/blob/master/packages/demo/src/examples/slickgrid/example4.ts">\n      <span class="mdi mdi-link-variant"></span> code\n    </a>\n  </span>\n</h2>\n<div class="subtitle" innerhtml.bind="subTitle"></div>\n\n<br />\n<span if.bind="metrics">\n  <b>Metrics:</b> ${metrics.endTime | dateFormat: \'DD MMM, h:mm:ss a\'} | ${metrics.itemCount} of\n  ${metrics.totalItemCount}\n  items\n</span>\n\n<div class="btn-group" role="group" aria-label="...">\n  <button class="btn btn-sm btn-outline-secondary btn-icon" data-test="scroll-top-btn" click.trigger="scrollGridTop()">\n    <i class="mdi mdi-arrow-down mdi-rotate-180 icon"></i>\n  </button>\n  <button class="btn btn-sm btn-outline-secondary btn-icon" data-test="scroll-bottom-btn" click.trigger="scrollGridBottom()">\n    <i class="mdi mdi-arrow-down icon"></i>\n  </button>\n</div>\n\n<button class="btn btn-outline-secondary btn-sm btn-icon" data-test="clear-filters"\n        click.trigger="aureliaGrid.filterService.clearFilters()">\n  Clear Filters\n</button>\n<button class="btn btn-outline-secondary btn-sm btn-icon" data-test="clear-sorting"\n        click.trigger="aureliaGrid.sortService.clearSorting()">\n  Clear Sorting\n</button>\n<button class="btn btn-outline-secondary btn-sm btn-icon" data-test="set-dynamic-filter"\n        click.trigger="setFiltersDynamically()">\n  Set Filters Dynamically\n</button>\n<button class="btn btn-outline-secondary btn-sm btn-icon" data-test="set-dynamic-sorting"\n        click.trigger="setSortingDynamically()">\n  Set Sorting Dynamically\n</button>\n\n<aurelia-slickgrid grid-id="grid4"\n                    column-definitions.bind="columnDefinitions"\n                    grid-options.bind="gridOptions"\n                    dataset.bind="dataset"\n                    on-aurelia-grid-created.trigger="aureliaGridReady($event.detail)"\n                    on-grid-state-changed.trigger="gridStateChanged($event.detail)"\n                    on-row-count-changed.trigger="refreshMetrics($event.detail.eventData, $event.detail.args)">\n</aurelia-slickgrid>\n',o=a,s=[],c={};let d;function u(e){d||(d=l.K9.define({name:n,template:a,dependencies:s,bindables:c})),e.register(d)}var m=i(9931),h=i(7557),p=i(7793),f=i(854),g=i(6609),b=(i(6757),function(e,t,i,r,l,n){function a(e){if(void 0!==e&&"function"!=typeof e)throw new TypeError("Function expected");return e}for(var o,s=r.kind,c="getter"===s?"get":"setter"===s?"set":"value",d=!t&&e?r.static?e:e.prototype:null,u=t||(d?Object.getOwnPropertyDescriptor(d,r.name):{}),m=!1,h=i.length-1;h>=0;h--){var p={};for(var f in r)p[f]="access"===f?{}:r[f];for(var f in r.access)p.access[f]=r.access[f];p.addInitializer=function(e){if(m)throw new TypeError("Cannot add initializers after decoration has completed");n.push(a(e||null))};var g=(0,i[h])("accessor"===s?{get:u.get,set:u.set}:u[c],p);if("accessor"===s){if(void 0===g)continue;if(null===g||"object"!=typeof g)throw new TypeError("Object expected");(o=a(g.get))&&(u.get=o),(o=a(g.set))&&(u.set=o),(o=a(g.init))&&l.unshift(o)}else(o=a(g))&&("field"===s?l.unshift(o):u[c]=o)}d&&Object.defineProperty(d,r.name,u),m=!0});function y(e,t){return Math.floor(Math.random()*(t-e+1)+e)}let v=(()=>{let e,t,i=[(0,l.EM)(r)],n=[];return t=class{constructor(e=(0,h.hd)((0,h.pn)(m.xl))){this.http=e,this.title="Example 4: Client Side Sort/Filter",this.subTitle='\n  Sort/Filter on client side only using SlickGrid DataView (<a href="https://ghiscoding.gitbook.io/aurelia-slickgrid/column-functionalities/sorting" target="_blank">Wiki docs</a>)\n  <br/>\n  <ul class="small">\n    <li>Support multi-sort (by default), hold "Shift" key and click on the next column to sort.</li>\n    <li>All column types support the following operators: (>, >=, <, <=, <>, !=, =, ==, *)</li>\n    <ul>\n      <li>Example: >100 ... >=2001-01-01 ... >02/28/17</li>\n      <li><b>Note:</b> For filters to work properly (default is string), make sure to provide a FieldType (type is against the dataset, not the Formatter)</li>\n    </ul>\n    <li>Date Filters</li>\n    <ul>\n      <li>\n        FieldType of dateUtc/date (from dataset) can use an extra option of "filterSearchType" to let user filter more easily.\n        For example, in the "UTC Date" field below, you can type "&gt;02/28/2017", also when dealing with UTC you have to take the time difference in consideration.\n      </li>\n    </ul>\n    <li>On String filters, (*) can be used as startsWith (Hello* => matches "Hello Word") ... endsWith (*Doe => matches: "John Doe")</li>\n    <li>Custom Filter are now possible, "Description" column below, is a customized InputFilter with different placeholder. See <a href="https://ghiscoding.gitbook.io/aurelia-slickgrid/column-functionalities/filters/custom-filter" target="_blank">Wiki - Custom Filter</a></li>\n  </ul>\n',this.columnDefinitions=[],this.dataset=[],this.defineGrid()}attached(){this.dataset=this.mockData(1500)}detaching(){this.saveCurrentGridState()}aureliaGridReady(e){this.aureliaGrid=e}defineGrid(){this.columnDefinitions=[{id:"title",name:"Title",field:"title",filterable:!0,sortable:!0,type:g.PUO.string,minWidth:45,filter:{model:g.CuW.compoundInputText}},{id:"description",name:"Description",field:"description",filterable:!0,sortable:!0,minWidth:80,type:g.PUO.string,filter:{model:f.M,enableTrimWhiteSpace:!0}},{id:"duration",name:"Duration (days)",field:"duration",sortable:!0,type:g.PUO.number,exportCsvForceToKeepAsString:!0,minWidth:55,filterable:!0,filter:{model:g.CuW.multipleSelect,collectionAsync:this.http.fetch("assets/data/collection_500_numbers.json"),collectionFilterBy:[{property:"value",operator:g.huT.notEqual,value:360},{property:"value",operator:g.huT.notEqual,value:365}],collectionSortBy:{property:"value",sortDesc:!0,fieldType:g.PUO.number},customStructure:{value:"value",label:"label",optionLabel:"value",labelSuffix:"text"},collectionOptions:{separatorBetweenTextLabels:" ",filterResultAfterEachPass:"chain"},filterOptions:{maxHeight:250,width:175,useSelectOptionLabelToHtml:!0}}},{id:"complete",name:"% Complete",field:"percentComplete",formatter:g._tQ.percentCompleteBar,minWidth:70,type:g.PUO.number,sortable:!0,filterable:!0,filter:{model:g.CuW.compoundInputNumber}},{id:"start",name:"Start",field:"start",formatter:g._tQ.dateIso,sortable:!0,minWidth:75,type:g.PUO.date,filterable:!0,filter:{model:g.CuW.compoundDate}},{id:"usDateShort",name:"US Date Short",field:"usDateShort",sortable:!0,minWidth:70,width:70,type:g.PUO.dateUsShort,filterable:!0,filter:{model:g.CuW.compoundDate}},{id:"utcDate",name:"UTC Date",field:"utcDate",formatter:g._tQ.dateTimeIsoAmPm,sortable:!0,minWidth:115,type:g.PUO.dateUtc,outputType:g.PUO.dateTimeIsoAmPm,filterable:!0,filter:{model:g.CuW.compoundDate,filterOptions:{range:{min:"today"}}}},{id:"effort-driven",name:"Effort Driven",field:"effortDriven.isEffort",minWidth:85,maxWidth:95,type:g.PUO.boolean,sortable:!0,formatter:g._tQ.multiple,params:{formatters:[g._tQ.complexObject,g._tQ.checkmarkMaterial]},filterable:!0,filter:{collection:["","True","False"],model:g.CuW.singleSelect,filterOptions:{maxHeight:250}}}],this.gridOptions={autoResize:{container:"#demo-container",rightPadding:10},enableExcelExport:!0,enableExcelCopyBuffer:!0,enableFiltering:!0,showCustomFooter:!0,presets:{filters:[{columnId:"duration",searchTerms:[10,98]},{columnId:"usDateShort",operator:"<",searchTerms:["4/20/25"]}],sorters:[{columnId:"duration",direction:"DESC"},{columnId:"complete",direction:"ASC"}]},externalResources:[new p.N]}}mockData(e,t=0){const i=[];for(let r=t;r<t+e;r++){const e=Math.round(100*Math.random()),t=y(2e3,2035),l=y(10,35),n=y(1,12),a=n<10?`0${n}`:n,o=y(10,28),s=y(0,100),c=y(10,23),d=y(10,59),u=`${y(1,9)}${y(10,99)}`,m=r%3==0;i.push({id:r,title:"Task "+r,description:r%5?"desc "+r:null,duration:e,percentComplete:s,percentCompleteNumber:s,start:r%4?null:new Date(t,n,o),usDateShort:`${n}/${o}/${l}`,utcDate:`${t}-${a}-${o}T${c}:${d}:${d}.${u}Z`,effortDriven:{isEffort:m,label:m?"Effort":"NoEffort"}})}return i}gridStateChanged(e){console.log("Client sample, Grid State changed:: ",e.change)}saveCurrentGridState(){console.log("Client sample, current Grid State:: ",this.aureliaGrid.gridStateService.getCurrentGridState())}setFiltersDynamically(){this.aureliaGrid.filterService.updateFilters([{columnId:"duration",searchTerms:[2,25,48,50]},{columnId:"complete",searchTerms:[95],operator:"<"},{columnId:"effort-driven",searchTerms:[!0]},{columnId:"start",operator:">=",searchTerms:["2001-02-28"]}])}setSortingDynamically(){this.aureliaGrid.sortService.updateSorting([{columnId:"duration",direction:"ASC"},{columnId:"start",direction:"DESC"}])}refreshMetrics(e,t){t&&t.current>=0&&setTimeout((()=>{this.metrics={startTime:new Date,endTime:new Date,itemCount:t&&t.current||0,totalItemCount:this.dataset.length||0}}))}scrollGridBottom(){this.aureliaGrid.slickGrid.navigateBottom()}scrollGridTop(){this.aureliaGrid.slickGrid.navigateTop()}},a=t,"symbol"==typeof(o="Example4")&&(o=o.description?"[".concat(o.description,"]"):""),Object.defineProperty(a,"name",{configurable:!0,value:s?"".concat(s," ",o):o}),(()=>{const r="function"==typeof Symbol&&Symbol.metadata?Object.create(null):void 0;b(null,e={value:t},i,{kind:"class",name:t.name,metadata:r},null,n),t=e.value,r&&Object.defineProperty(t,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:r}),function(e,t,i){for(var r=arguments.length>2,l=0;l<t.length;l++)i=r?t[l].call(e,i):t[l].call(e)}(t,n)})(),t;var a,o,s})()}}]);