"use strict";(self.webpackChunkaurelia_slickgrid_locale_demo_bs5=self.webpackChunkaurelia_slickgrid_locale_demo_bs5||[]).push([[4333],{4333:(e,t,i)=>{i.r(t),i.d(t,{Example19:()=>f});var a={};i.r(a),i.d(a,{bindables:()=>d,default:()=>r,dependencies:()=>s,name:()=>o,register:()=>m,template:()=>l});var n=i(5394);const o="example19",l='<h2>\n  ${title}\n  <button class="btn btn-outline-secondary btn-sm btn-icon" click.trigger="toggleDarkMode()" data-test="toggle-dark-mode">\n    <span class="mdi mdi-theme-light-dark"></span>\n    <span>Toggle Dark Mode</span>\n  </button>\n  <span class="float-end">\n    <a style="font-size: 18px" target="_blank"\n      href="https://github.com/ghiscoding/aurelia-slickgrid/blob/master/packages/demo/src/examples/slickgrid/example19.ts">\n      <span class="mdi mdi-link-variant"></span> code\n    </a>\n  </span>\n</h2>\n<div class="subtitle" innerhtml.bind="subTitle"></div>\n\n<div class="row">\n  <div class="col-sm-6">\n    <button class="btn btn-outline-secondary btn-sm btn-icon" click.trigger="changeEditableGrid()" data-test="editable-grid-btn">\n      Make Grid Editable\n    </button>\n    <button class="btn btn-outline-secondary btn-sm btn-icon" click.trigger="closeAllRowDetail()" data-test="collapse-all-btn">\n      Close all Row Details\n    </button>\n    &nbsp;&nbsp;\n\n    <span class="d-inline-flex gap-4px">\n      <label for="detailViewRowCount">Detail View Rows Shown: </label>\n      <input id="detailViewRowCount" type="number" value.bind="detailViewRowCount" style="height: 26px; width: 40px">\n      <button class="btn btn-outline-secondary btn-xs btn-icon" style="height: 26px;" click.trigger="changeDetailViewRowCount()"\n        data-test="set-count-btn">\n        Set\n      </button>\n    </span>\n  </div>\n  <div class="alert alert-${flashAlertType} col-sm-6" if.bind="message" data-test="flash-msg">\n    ${message}\n  </div>\n</div>\n\n<hr />\n\n<aurelia-slickgrid grid-id="grid19" column-definitions.bind="columnDefinitions" grid-options.bind="gridOptions"\n  dataset.bind="dataset" extensions.bind="extensions" instances.bind="aureliaGrid">\n</aurelia-slickgrid>\n',r=l,s=[],d={};let c;function m(e){c||(c=n.K94.define({name:o,template:l,dependencies:s,bindables:d})),e.register(c)}var u=i(9209),h=i(4484),p=i(3329),b=(i(6757),function(e,t,i,a,n,o){function l(e){if(void 0!==e&&"function"!=typeof e)throw new TypeError("Function expected");return e}for(var r,s=a.kind,d="getter"===s?"get":"setter"===s?"set":"value",c=!t&&e?a.static?e:e.prototype:null,m=t||(c?Object.getOwnPropertyDescriptor(c,a.name):{}),u=!1,h=i.length-1;h>=0;h--){var p={};for(var b in a)p[b]="access"===b?{}:a[b];for(var b in a.access)p.access[b]=a.access[b];p.addInitializer=function(e){if(u)throw new TypeError("Cannot add initializers after decoration has completed");o.push(l(e||null))};var g=(0,i[h])("accessor"===s?{get:m.get,set:m.set}:m[d],p);if("accessor"===s){if(void 0===g)continue;if(null===g||"object"!=typeof g)throw new TypeError("Object expected");(r=l(g.get))&&(m.get=r),(r=l(g.set))&&(m.set=r),(r=l(g.init))&&n.unshift(r)}else(r=l(g))&&("field"===s?n.unshift(r):m[d]=r)}c&&Object.defineProperty(c,a.name,m),u=!0}),g=function(e,t,i){for(var a=arguments.length>2,n=0;n<t.length;n++)i=a?t[n].call(e,i):t[n].call(e);return a?i:void 0};let f=(()=>{let e,t,i,o=[(0,n.EMX)(a)],l=[],r=[],s=[];return t=class{constructor(){this._darkMode=!1,this.detailViewRowCount=g(this,r,9),this.title=(g(this,s),"Example 19: Row Detail View"),this.subTitle='\n    Add functionality to show extra information with a Row Detail View, (<a href="https://ghiscoding.gitbook.io/aurelia-slickgrid/grid-functionalities/row-detail" target="_blank">Wiki docs</a>)\n    <ul>\n      <li>Click on the row "+" icon or anywhere on the row to open it (the latter can be changed via property "useRowClick: false")</li>\n      <li>Pass a View/Model as a Template to the Row Detail</li>\n      <li>You can use "expandableOverride()" callback to override logic to display expand icon on every row (for example only show it every 2nd row)</li>\n    </ul>\n  ',this.columnDefinitions=[],this.dataset=[],this.flashAlertType="info",this.message="",this.defineGrid()}get rowDetailInstance(){return this.aureliaGrid?.extensionService.getExtensionInstanceByName(u.$fu.rowDetailView)}attached(){this.getData()}detaching(){document.querySelector(".panel-wm-content").classList.remove("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="light"}defineGrid(){this.columnDefinitions=[{id:"title",name:"Title",field:"title",sortable:!0,type:u.PUO.string,width:70,filterable:!0,editor:{model:u.R8o.text}},{id:"duration",name:"Duration (days)",field:"duration",formatter:u._tQ.decimal,params:{minDecimal:1,maxDecimal:2},sortable:!0,type:u.PUO.number,minWidth:90,filterable:!0},{id:"percent2",name:"% Complete",field:"percentComplete2",editor:{model:u.R8o.slider},formatter:u._tQ.progressBar,type:u.PUO.number,sortable:!0,minWidth:100,filterable:!0,filter:{model:u.CuW.slider,operator:">"}},{id:"start",name:"Start",field:"start",formatter:u._tQ.dateIso,sortable:!0,type:u.PUO.date,minWidth:90,exportWithFormatter:!0,filterable:!0,filter:{model:u.CuW.compoundDate}},{id:"finish",name:"Finish",field:"finish",formatter:u._tQ.dateIso,sortable:!0,type:u.PUO.date,minWidth:90,exportWithFormatter:!0,filterable:!0,filter:{model:u.CuW.compoundDate}},{id:"effort-driven",name:"Effort Driven",field:"effortDriven",minWidth:100,formatter:u._tQ.checkmarkMaterial,type:u.PUO.boolean,filterable:!0,sortable:!0,filter:{collection:[{value:"",label:""},{value:!0,label:"True"},{value:!1,label:"False"}],model:u.CuW.singleSelect}}],this.gridOptions={autoResize:{container:"#demo-container",rightPadding:10},enableFiltering:!0,enableRowDetailView:!0,darkMode:this._darkMode,datasetIdPropertyName:"rowId",rowDetailView:{process:e=>this.simulateServerAsyncCall(e),loadOnce:!0,singleRowExpand:!1,useRowClick:!0,panelRows:this.detailViewRowCount,preloadViewModel:h.W,viewModel:p.j,parent:this,onBeforeRowDetailToggle:(e,t)=>(console.log("before toggling row detail",t.item),!0)},rowSelectionOptions:{selectActiveRow:!0}}}getData(){const e=[];for(let t=0;t<1e3;t++){const i=2e3+Math.floor(10*Math.random()),a=Math.floor(11*Math.random()),n=Math.floor(29*Math.random()),o=Math.round(100*Math.random());e[t]={rowId:t,title:"Task "+t,duration:t%33==0?null:100*Math.random()+"",percentComplete:o,percentComplete2:o,percentCompleteNumber:o,start:new Date(i,a,n),finish:new Date(i,a+1,n),effortDriven:t%5==0}}this.dataset=e}changeDetailViewRowCount(){const e=this.rowDetailInstance.getOptions();e&&e.panelRows&&(e.panelRows=this.detailViewRowCount,this.rowDetailInstance.setOptions(e))}changeEditableGrid(){return this.rowDetailInstance.collapseAll(),this.rowDetailInstance.addonOptions.useRowClick=!1,this.gridOptions.autoCommitEdit=!this.gridOptions.autoCommitEdit,this.aureliaGrid?.slickGrid.setOptions({editable:!0,autoEdit:!0,enableCellNavigation:!0}),!0}closeAllRowDetail(){this.rowDetailInstance.collapseAll()}showFlashMessage(e,t="info"){this.message=e,this.flashAlertType=t}simulateServerAsyncCall(e){const t=["John Doe","Jane Doe","Chuck Norris","Bumblebee","Jackie Chan","Elvis Presley","Bob Marley","Mohammed Ali","Bruce Lee","Rocky Balboa"];return new Promise((i=>{setTimeout((()=>{const a=e;a.assignee=t[this.randomNumber(0,10)],a.reporter=t[this.randomNumber(0,10)],i(a)}),1e3)}))}toggleDarkMode(){this._darkMode=!this._darkMode,this.toggleBodyBackground(),this.aureliaGrid.slickGrid?.setOptions({darkMode:this._darkMode}),this.closeAllRowDetail()}toggleBodyBackground(){this._darkMode?(document.querySelector(".panel-wm-content").classList.add("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="dark"):(document.querySelector(".panel-wm-content").classList.remove("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="light")}randomNumber(e,t){return Math.floor(Math.random()*(t-e+1)+e)}},d=t,"symbol"==typeof(c="Example19")&&(c=c.description?"[".concat(c.description,"]"):""),Object.defineProperty(d,"name",{configurable:!0,value:m?"".concat(m," ",c):c}),(()=>{const a="function"==typeof Symbol&&Symbol.metadata?Object.create(null):void 0;i=[n._tP],b(null,null,i,{kind:"field",name:"detailViewRowCount",static:!1,private:!1,access:{has:e=>"detailViewRowCount"in e,get:e=>e.detailViewRowCount,set:(e,t)=>{e.detailViewRowCount=t}},metadata:a},r,s),b(null,e={value:t},o,{kind:"class",name:t.name,metadata:a},null,l),t=e.value,a&&Object.defineProperty(t,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:a}),g(t,l)})(),t;var d,c,m})()}}]);