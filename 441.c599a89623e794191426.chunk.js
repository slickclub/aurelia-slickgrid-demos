"use strict";(self.webpackChunkaurelia_slickgrid_demo_bs5=self.webpackChunkaurelia_slickgrid_demo_bs5||[]).push([[441],{441:(e,t,r)=>{r.r(t),r.d(t,{Example18:()=>m});var n={};r.r(n),r.d(n,{default:()=>s,dependencies:()=>l,name:()=>o,register:()=>c,template:()=>a});var i=r(5394);const o="example18",a='<h2>\n  ${title}\n  <button class="btn btn-outline-secondary btn-sm btn-icon" click.trigger="toggleDarkMode()" data-test="toggle-dark-mode">\n    <span class="mdi mdi-theme-light-dark"></span>\n    <span>Toggle Dark Mode</span>\n  </button>\n  <span class="float-end">\n    <a style="font-size: 18px"\n        target="_blank"\n        href="https://github.com/ghiscoding/aurelia-slickgrid/blob/master/packages/demo/src/examples/slickgrid/example18.ts">\n      <span class="mdi mdi-link-variant"></span> code\n    </a>\n  </span>\n</h2>\n<div class="subtitle" innerhtml.bind="subTitle"></div>\n\n<div class="form-inline">\n  <div class="row">\n    <div class="col-sm-12">\n      <button class="btn btn-outline-secondary btn-xs btn-icon" data-test="add-500-rows-btn" click.trigger="loadData(500)">\n        500 rows\n      </button>\n      <button class="btn btn-outline-secondary btn-xs btn-icon" data-test="add-50k-rows-btn" click.trigger="loadData(50000)">\n        50k rows\n      </button>\n      <button class="btn btn-outline-secondary btn-xs btn-icon" data-test="clear-grouping-btn"\n              click.trigger="clearGroupsAndSelects()">\n        <i class="mdi mdi-close"></i> Clear grouping\n      </button>\n      <button class="btn btn-outline-secondary btn-xs btn-icon" data-test="collapse-all-btn"\n              click.trigger="collapseAllGroups()">\n        <i class="mdi mdi-arrow-collapse"></i> Collapse all groups\n      </button>\n      <button class="btn btn-outline-secondary btn-xs btn-icon" data-test="expand-all-btn" click.trigger="expandAllGroups()">\n        <i class="mdi mdi-arrow-expand"></i> Expand all groups\n      </button>\n      <button class="btn btn-outline-secondary btn-xs btn-icon" click.trigger="toggleDraggableGroupingRow()">\n        Toggle Draggable Grouping Row\n      </button>\n      <button class="btn btn-outline-secondary btn-xs btn-icon" click.trigger="exportToExcel()">\n        <i class="mdi mdi-file-excel-outline text-success"></i> Export to Excel\n      </button>\n    </div>\n  </div>\n\n  <div class="row">\n    <div class="col-sm-12">\n      <button class="btn btn-outline-secondary btn-xs btn-icon" data-test="group-duration-sort-value-btn"\n              click.trigger="groupByDurationOrderByCount(false)">\n        Group by duration &amp; sort groups by value\n      </button>\n      <button class="btn btn-outline-secondary btn-xs btn-icon" data-test="group-duration-sort-count-btn"\n              click.trigger="groupByDurationOrderByCount(true)">\n        Group by duration &amp; sort groups by count\n      </button>\n      <button class="btn btn-outline-secondary btn-xs btn-icon" data-test="group-duration-effort-btn"\n              click.trigger="groupByDurationEffortDriven()">\n        Group by Duration then Effort-Driven\n      </button>\n      <button class="btn btn-outline-secondary btn-xs btn-icon" data-test="set-dynamic-filter"\n              click.trigger="setFiltersDynamically()">\n        <span class="mdi mdi-filter-outline"></span>\n        <span>\n          Set Filters Dynamically\n        </span>\n      </button>\n      <button class="btn btn-outline-secondary btn-xs btn-icon" data-test="set-dynamic-sorting"\n              click.trigger="setSortingDynamically()">\n        <span class="mdi mdi-sort-ascending"></span>\n        <span>\n          Set Sorting Dynamically\n        </span>\n      </button>\n    </div>\n  </div>\n\n  <div class="row mt-2">\n    <div class="col-sm-12">\n      <div class="form-row">\n        <div class="row form-group">\n          <label for="field1" class="col-sm-3 mb-2">Group by field(s)</label>\n          <div class="form-group col-md-3 grouping-selects" repeat.for="groupField of selectedGroupingFields">\n            <select class="form-select" change.trigger="groupByFieldName(column.id, $index)"\n                    value.bind="selectedGroupingFields[$index]">\n              <option model.bind="\'\'">...</option>\n              <option model.bind="column.id" repeat.for="column of columnDefinitions">${column.name}</option>\n            </select>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class="row mt-1 mb-1">\n  <hr />\n</div>\n\n<aurelia-slickgrid grid-id="grid18"\n                    column-definitions.bind="columnDefinitions"\n                    grid-options.bind="gridOptions"\n                    dataset.bind="dataset"\n                    on-aurelia-grid-created.trigger="aureliaGridReady($event.detail)">\n</aurelia-slickgrid>\n',s=a,l=[];let d;function c(e){d||(d=i.K94.define({name:o,template:a,dependencies:l})),e.register(d)}var u=r(8003),g=r(3271),p=r(3492);r(6757);class m{constructor(){this._darkMode=!1,this.title="Example 18: Draggable Grouping & Aggregators",this.subTitle='\n  <ul>\n  <li><a href="https://ghiscoding.gitbook.io/aurelia-slickgrid/grid-functionalities/grouping-aggregators" target="_blank">Wiki docs</a></li>\n  <li>This example shows 3 ways of grouping</li>\n  <ol>\n  <li>Drag any Column Header on the top placeholder to group by that column (support moti-columns grouping by adding more columns to the drop area).</li>\n  <li>Use buttons and defined functions to group by whichever field you want</li>\n  <li>Use the Select dropdown to group, the position of the Selects represent the grouping level</li>\n  </ol>\n  <li>Fully dynamic and interactive multi-level grouping with filtering and aggregates ovor 50\'000 items</li>\n  <li>Each grouping level can have its own aggregates (over child rows, child groups, or all descendant rows)..</li>\n  <li>Use "Aggregators" and "GroupTotalFormatters" directly from Aurelia-Slickgrid</li>\n  </ul>\n  ',this.columnDefinitions=[],this.dataset=[],this.durationOrderByCount=!1,this.processing=!1,this.selectedGroupingFields=["","",""],this.excelExportService=new u.N,this.textExportService=new g.f,this.loadData(500),this.defineGrid()}aureliaGridReady(e){this.aureliaGrid=e,this.gridObj=e.slickGrid,this.dataviewObj=e.dataView}detaching(){document.querySelector(".panel-wm-content").classList.remove("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="light"}defineGrid(){this.columnDefinitions=[{id:"title",name:"Title",field:"title",width:70,minWidth:50,cssClass:"cell-title",filterable:!0,sortable:!0,grouping:{getter:"title",formatter:e=>`Title: ${e.value}  <span class="text-primary">(${e.count} items)</span>`,aggregators:[new p.J2q.Sum("cost")],aggregateCollapsed:!1,collapsed:!1}},{id:"duration",name:"Duration",field:"duration",width:70,sortable:!0,filterable:!0,filter:{model:p.CuW.slider,operator:">="},type:p.PUO.number,groupTotalsFormatter:p.tao.sumTotals,grouping:{getter:"duration",formatter:e=>`Duration: ${e.value}  <span class="text-primary">(${e.count} items)</span>`,comparer:(e,t)=>this.durationOrderByCount?e.count-t.count:p.Luy.numeric(e.value,t.value,p.Lo1.asc),aggregators:[new p.J2q.Sum("cost")],aggregateCollapsed:!1,collapsed:!1}},{id:"percentComplete",name:"% Complete",field:"percentComplete",minWidth:70,width:90,formatter:p._tQ.percentCompleteBar,type:p.PUO.number,filterable:!0,filter:{model:p.CuW.compoundSlider},sortable:!0,groupTotalsFormatter:p.tao.avgTotalsPercentage,grouping:{getter:"percentComplete",formatter:e=>`% Complete: ${e.value}  <span class="text-primary">(${e.count} items)</span>`,aggregators:[new p.J2q.Sum("cost")],aggregateCollapsed:!1,collapsed:!1},params:{groupFormatterPrefix:"<i>Avg</i>: "}},{id:"start",name:"Start",field:"start",minWidth:60,sortable:!0,filterable:!0,filter:{model:p.CuW.compoundDate},formatter:p._tQ.dateIso,type:p.PUO.dateUtc,outputType:p.PUO.dateIso,exportWithFormatter:!0,grouping:{getter:"start",formatter:e=>`Start: ${e.value}  <span class="text-primary">(${e.count} items)</span>`,aggregators:[new p.J2q.Sum("cost")],aggregateCollapsed:!1,collapsed:!1}},{id:"finish",name:"Finish",field:"finish",minWidth:60,sortable:!0,filterable:!0,filter:{model:p.CuW.compoundDate},formatter:p._tQ.dateIso,type:p.PUO.dateUtc,outputType:p.PUO.dateIso,exportWithFormatter:!0,grouping:{getter:"finish",formatter:e=>`Finish: ${e.value} <span class="text-primary">(${e.count} items)</span>`,aggregators:[new p.J2q.Sum("cost")],aggregateCollapsed:!1,collapsed:!1}},{id:"cost",name:"Cost",field:"cost",width:90,sortable:!0,filterable:!0,filter:{model:p.CuW.compoundInput},formatter:p._tQ.dollar,exportWithFormatter:!0,groupTotalsFormatter:p.tao.sumTotalsDollar,type:p.PUO.number,grouping:{getter:"cost",formatter:e=>`Cost: ${e.value} <span class="text-primary">(${e.count} items)</span>`,aggregators:[new p.J2q.Sum("cost")],aggregateCollapsed:!0,collapsed:!0}},{id:"effortDriven",name:"Effort-Driven",field:"effortDriven",width:80,minWidth:20,maxWidth:100,cssClass:"cell-effort-driven",sortable:!0,filterable:!0,filter:{collection:[{value:"",label:""},{value:!0,label:"True"},{value:!1,label:"False"}],model:p.CuW.singleSelect},formatter:p._tQ.checkmarkMaterial,grouping:{getter:"effortDriven",formatter:e=>`Effort-Driven: ${e.value?"True":"False"} <span class="text-primary">(${e.count} items)</span>`,aggregators:[new p.J2q.Sum("cost")],collapsed:!1}}],this.gridOptions={autoResize:{container:"#demo-container",rightPadding:10},enableDraggableGrouping:!0,createPreHeaderPanel:!0,showPreHeaderPanel:!0,preHeaderPanelHeight:40,showCustomFooter:!0,enableFiltering:!0,enableSorting:!0,enableColumnReorder:!0,gridMenu:{onCommand:(e,t)=>{"toggle-preheader"===t.command&&this.clearGrouping()}},draggableGrouping:{dropPlaceHolderText:"Drop a column header here to group by the column",deleteIconCssClass:"mdi mdi-close",onGroupChanged:(e,t)=>this.onGroupChanged(t),onExtensionRegistered:e=>this.draggableGroupingPlugin=e},darkMode:this._darkMode,enableTextExport:!0,enableExcelExport:!0,excelExportOptions:{sanitizeDataExport:!0},textExportOptions:{sanitizeDataExport:!0},externalResources:[this.excelExportService,this.textExportService]}}loadData(e){const t=[];for(let r=0;r<e;r++){const e=2e3+Math.floor(10*Math.random()),n=Math.floor(11*Math.random()),i=Math.floor(29*Math.random()),o=Math.round(100*Math.random()),a=Math.round(1e4*Math.random())/100;t[r]={id:"id_"+r,num:r,title:"Task "+r,duration:Math.round(100*Math.random())+"",percentComplete:o,percentCompleteNumber:o,start:new Date(e,n,i),finish:new Date(e,n+1,i),cost:r%33==0?-a:a,effortDriven:r%5==0}}this.dataset=t}clearGroupsAndSelects(){this.clearGroupingSelects(),this.clearGrouping()}clearGroupingSelects(){this.selectedGroupingFields.forEach(((e,t)=>this.selectedGroupingFields[t]="")),this.selectedGroupingFields=[...this.selectedGroupingFields]}clearGrouping(){this.draggableGroupingPlugin&&this.draggableGroupingPlugin.setDroppedGroups&&this.draggableGroupingPlugin.clearDroppedGroups(),this.gridObj.invalidate()}collapseAllGroups(){this.dataviewObj.collapseAllGroups()}expandAllGroups(){this.dataviewObj.expandAllGroups()}exportToExcel(){this.excelExportService.exportToExcel({filename:"Export",format:p.ptE.xlsx})}exportToCsv(e="csv"){this.textExportService.exportToFile({delimiter:"csv"===e?p.IQ1.comma:p.IQ1.tab,filename:"myExport",format:"csv"===e?p.ptE.csv:p.ptE.txt})}groupByDuration(){this.clearGrouping(),this.draggableGroupingPlugin?.setDroppedGroups&&(this.showPreHeader(),this.draggableGroupingPlugin.setDroppedGroups("duration"),this.gridObj.invalidate())}groupByDurationOrderByCount(e=!1){this.durationOrderByCount=e,this.clearGrouping(),this.groupByDuration();const t=e?[]:[{columnId:"duration",sortAsc:!0}];this.aureliaGrid.filterService.setSortColumnIcons(t),this.gridObj.invalidate()}groupByDurationEffortDriven(){if(this.clearGrouping(),this.draggableGroupingPlugin&&this.draggableGroupingPlugin.setDroppedGroups){this.showPreHeader(),this.draggableGroupingPlugin.setDroppedGroups(["duration","effortDriven"]),this.gridObj.invalidate();const e=[{columnId:"duration",sortAsc:!0}];this.aureliaGrid.filterService.setSortColumnIcons(e)}}groupByFieldName(){if(this.clearGrouping(),this.draggableGroupingPlugin&&this.draggableGroupingPlugin.setDroppedGroups){this.showPreHeader();const e=this.selectedGroupingFields.filter((e=>""!==e));0===e.length?this.clearGrouping():this.draggableGroupingPlugin.setDroppedGroups(e),this.gridObj.invalidate()}}onGroupChanged(e){const t=e?.caller??[],r=e?.groupColumns??[];Array.isArray(this.selectedGroupingFields)&&Array.isArray(r)&&r.length>0?(this.selectedGroupingFields.forEach(((e,t)=>this.selectedGroupingFields[t]=r[t]?.getter??"")),this.selectedGroupingFields=[...this.selectedGroupingFields]):0===r.length&&"remove-group"===t&&this.clearGroupingSelects()}showPreHeader(){this.gridObj.setPreHeaderPanelVisibility(!0)}setFiltersDynamically(){this.aureliaGrid.filterService.updateFilters([{columnId:"percentComplete",operator:">=",searchTerms:["55"]},{columnId:"cost",operator:"<",searchTerms:["80"]}])}setSortingDynamically(){this.aureliaGrid.sortService.updateSorting([{columnId:"percentComplete",direction:"ASC"}])}toggleDraggableGroupingRow(){this.clearGroupsAndSelects(),this.gridObj.setPreHeaderPanelVisibility(!this.gridObj.getOptions().showPreHeaderPanel)}toggleDarkMode(){this._darkMode=!this._darkMode,this.toggleBodyBackground(),this.aureliaGrid.slickGrid?.setOptions({darkMode:this._darkMode})}toggleBodyBackground(){this._darkMode?(document.querySelector(".panel-wm-content").classList.add("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="dark"):(document.querySelector(".panel-wm-content").classList.remove("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="light")}}i.K94.define(n,m)}}]);