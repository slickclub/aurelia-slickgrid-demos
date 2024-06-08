"use strict";(self.webpackChunkaurelia_slickgrid_locale_demo_bs5=self.webpackChunkaurelia_slickgrid_locale_demo_bs5||[]).push([[222],{3841:(e,i,t)=>{t.r(i),t.d(i,{Example16:()=>b});var n={};t.r(n),t.d(n,{bindables:()=>d,default:()=>r,dependencies:()=>s,name:()=>l,register:()=>u,template:()=>a});var o=t(5394);const l="example16",a='<h2>\n  ${title}\n  <span class="float-end">\n    <a style="font-size: 18px"\n        target="_blank"\n        href="https://github.com/ghiscoding/aurelia-slickgrid/blob/master/packages/demo/src/examples/slickgrid/example16.ts">\n      <span class="mdi mdi-link-variant"></span> code\n    </a>\n  </span>\n</h2>\n<div class="subtitle"\n      innerhtml.bind="subTitle"></div>\n\n<div class="row">\n  <div class="col-sm-12">\n    <button class="btn btn-outline-secondary btn-sm btn-icon" data-test="hide-duration-btn"\n            click.trigger="hideDurationColumnDynamically()">\n      <i class="mdi mdi-eye-off-outline"></i>\n      Dynamically Hide "Duration"\n    </button>\n    <button class="btn btn-outline-secondary btn-sm btn-icon" data-test="disable-filters-btn"\n            click.trigger="disableFilters()">\n      <i class="mdi mdi-close"></i>\n      Disable Filters\n    </button>\n    <button class="btn btn-outline-secondary btn-sm btn-icon" data-test="disable-sorting-btn"\n            click.trigger="disableSorting()">\n      <i class="mdi mdi-close"></i>\n      Disable Sorting\n    </button>\n    <button class="btn btn-outline-secondary btn-sm btn-icon" data-test="toggle-filtering-btn" click.trigger="toggleFilter()">\n      <i class="mdi mdi-swap-vertical"></i>\n      Toggle Filtering\n    </button>\n    <button class="btn btn-outline-secondary btn-sm btn-icon" data-test="toggle-sorting-btn" click.trigger="toggleSorting()">\n      <i class="mdi mdi-swap-vertical"></i>\n      Toggle Sorting\n    </button>\n    <button class="btn btn-outline-secondary btn-sm btn-icon" data-test="add-crud-columns-btn" click.trigger="addEditDeleteColumns()">\n      <i class="mdi mdi-shape-square-plus"></i>\n      Add Edit/Delete Columns\n    </button>\n  </div>\n</div>\n\n<br />\n\n<aurelia-slickgrid grid-id="grid16"\n                    column-definitions.bind="columnDefinitions"\n                    grid-options.bind="gridOptions"\n                    dataset.bind="dataset"\n                    on-aurelia-grid-created.trigger="aureliaGridReady($event.detail)">\n</aurelia-slickgrid>\n',r=a,s=[],d=[];let c;function u(e){c||(c=o.K94.define({name:l,template:a,dependencies:s,bindables:d})),e.register(c)}var m=t(8211);t(6757);class b{constructor(){this.title="Example 16: Row Move & Checkbox Selector",this.subTitle='\n    This example demonstrates using the <b>Slick.Plugins.RowMoveManager</b> plugin to easily move a row in the grid.<br/>\n    <ul>\n      <li>Click to select, Ctrl+Click to toggle selection, Shift+Click to select a range.</li>\n      <li>Drag one or more rows by the handle (icon) to reorder</li>\n      <li>If you plan to use Row Selection + Row Move, then use "singleRowMove: true" and "disableRowSelection: true"</li>\n      <li>You can change "columnIndexPosition" to move the icon position of any extension (RowMove, RowDetail or RowSelector icon)</li>\n      <ul>\n        <li>You will also want to enable the DataView "syncGridSelection: true" to keep row selection even after a row move</li>\n      </ul>\n      <li>If you plan to use only Row Move, then you could keep default values (or omit them completely) of "singleRowMove: false" and "disableRowSelection: false"</li>\n      <ul>\n        <li>SingleRowMove has the name suggest will only move 1 row at a time, by default it will move any row(s) that are selected unless you disable the flag</li>\n      </ul>\n    </ul>\n  ',this.columnDefinitions=[],this.dataset=[],this.defineGrid()}aureliaGridReady(e){this.aureliaGrid=e}get rowMoveInstance(){return this.aureliaGrid?.extensionService.getExtensionInstanceByName(m.$fu.rowMoveManager)}attached(){this.getData()}defineGrid(){this.columnDefinitions=[{id:"title",name:"Title",field:"title",filterable:!0},{id:"duration",name:"Duration",field:"duration",filterable:!0,sortable:!0},{id:"%",name:"% Complete",field:"percentComplete",filterable:!0,sortable:!0},{id:"start",name:"Start",field:"start",filterable:!0,sortable:!0,filter:{model:m.CuW.compoundDate}},{id:"finish",name:"Finish",field:"finish",filterable:!0,sortable:!0,filter:{model:m.CuW.compoundDate}},{id:"effort-driven",name:"Completed",field:"effortDriven",formatter:m._tQ.checkmarkMaterial,filterable:!0,sortable:!0,filter:{collection:[{value:"",label:""},{value:!0,label:"True"},{value:!1,label:"False"}],model:m.CuW.singleSelect}}],this.gridOptions={enableAutoResize:!0,autoResize:{container:"#demo-container",rightPadding:10},enableFiltering:!0,enableCheckboxSelector:!0,checkboxSelector:{hideSelectAllCheckbox:!1,columnIndexPosition:1,hideInFilterHeaderRow:!1,hideInColumnTitleRow:!0},enableRowSelection:!0,rowSelectionOptions:{selectActiveRow:!1},dataView:{syncGridSelection:!0},enableRowMoveManager:!0,rowMoveManager:{columnIndexPosition:0,singleRowMove:!0,disableRowSelection:!0,cancelEditOnDrag:!0,hideRowMoveShadow:!1,width:30,onBeforeMoveRows:this.onBeforeMoveRow.bind(this),onMoveRows:this.onMoveRows.bind(this)},showCustomFooter:!0,presets:{rowSelection:{dataContextIds:[1,2,6,7]}}}}getData(){const e=[];for(let i=0;i<500;i++)e[i]={id:i,title:"Task "+i,duration:Math.round(25*Math.random())+" days",percentComplete:Math.round(100*Math.random()),start:"01/01/2009",finish:"01/05/2009",effortDriven:i%5==0};this.dataset=e}onBeforeMoveRow(e,i){for(const t of i.rows)if(t===i.insertBefore||t===i.insertBefore-1&&i.insertBefore-1!==this.aureliaGrid.dataView.getItemCount())return e.preventDefault(),!1;return!0}onMoveRows(e,i){const t=i.rows,n=i.insertBefore,o=[];this.aureliaGrid.dataView.sort(void 0,!0);const l=this.aureliaGrid.dataView.getItems(),a=this.aureliaGrid.dataView.getFilteredItems(),r=this.aureliaGrid.dataView.getItem(n),s=r?this.aureliaGrid.dataView.getIdxById(r.id):this.aureliaGrid.dataView.getItemCount(),d=[];t.forEach((e=>d.push(a[e])));const c=d.map((e=>this.aureliaGrid.dataView.getIdxById(e.id))),u=l.slice(0,s),m=l.slice(s,l.length);t.sort(((e,i)=>e-i));for(const e of c)e&&o.push(l[e]);c.reverse();for(const e of c)void 0!==e&&void 0!==s&&(e<s?u.splice(e,1):m.splice(e-s,1));const b=u.concat(o.concat(m));this.dataset=b}hideDurationColumnDynamically(){this.aureliaGrid.gridService.hideColumnById("duration")}disableFilters(){this.aureliaGrid.filterService.disableFilterFunctionality(!0)}disableSorting(){this.aureliaGrid.sortService.disableSortFunctionality(!0)}addEditDeleteColumns(){if("change-symbol"!==this.columnDefinitions[0].id){const e=[{id:"change-symbol",field:"id",excludeFromColumnPicker:!0,excludeFromGridMenu:!0,excludeFromHeaderMenu:!0,formatter:m._tQ.icon,params:{iconCssClass:"mdi mdi-pencil pointer"},minWidth:30,maxWidth:30,onCellClick:(e,i)=>{alert(`Technically we should Edit "Task ${i.dataContext.id}"`)}},{id:"delete-symbol",field:"id",excludeFromColumnPicker:!0,excludeFromGridMenu:!0,excludeFromHeaderMenu:!0,formatter:m._tQ.icon,params:{iconCssClass:"mdi mdi-trash-can pointer"},minWidth:30,maxWidth:30,onCellClick:(e,i)=>{confirm("Are you sure?")&&this.aureliaGrid.gridService.deleteItemById(i.dataContext.id)}}],i=this.aureliaGrid.gridService.getAllColumnDefinitions();i.unshift(e[0],e[1]),this.columnDefinitions=[...i]}}toggleFilter(){this.aureliaGrid.filterService.toggleFilterFunctionality()}toggleSorting(){this.aureliaGrid.sortService.toggleSortFunctionality()}}o.K94.define(n,b)}}]);