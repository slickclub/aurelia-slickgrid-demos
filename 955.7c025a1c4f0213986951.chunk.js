"use strict";(self.webpackChunkaurelia_slickgrid_demo_bs5=self.webpackChunkaurelia_slickgrid_demo_bs5||[]).push([[955],{93634:(e,t,n)=>{n.d(t,{Z:()=>o});var i=n(8081),a=n.n(i),r=n(23645),l=n.n(r)()(a());l.push([e.id,".slick-row .slick-cell.frozen:last-child,.slick-headerrow-column.frozen:last-child,.slick-footerrow-column.frozen:last-child{border-right:1px solid #969696 !important}.slick-pane-bottom{border-top:1px solid #969696 !important}",""]);const o=l},81955:(e,t,n)=>{n.r(t),n.d(t,{Example14:()=>P});var i={};n.r(i),n.d(i,{default:()=>s,dependencies:()=>d,name:()=>l,register:()=>u,template:()=>o});var a=n(71542),r=n(93634);const l="example14",o='<h2>\n  ${title}\n  <span class="float-end">\n    <a style="font-size: 18px"\n        target="_blank"\n        href="https://github.com/ghiscoding/aurelia-slickgrid/blob/master/src/examples/slickgrid/example14.ts">\n      <span class="fa fa-link"></span> code\n    </a>\n  </span>\n</h2>\n<div class="subtitle" innerhtml.bind="subTitle"></div>\n\n<h3>Grid 1 <small>(with Header Grouping &amp; Colspan)</small></h3>\n<aurelia-slickgrid grid-id="grid1"\n                    column-definitions.bind="columnDefinitions1"\n                    grid-options.bind="gridOptions1"\n                    dataset.bind="dataset1">\n</aurelia-slickgrid>\n\n<hr />\n\n<h3>Grid 2 <small>(with Header Grouping &amp; Frozen/Pinned Columns)</small></h3>\n\n<div class="col-sm 12">\n  <button class="btn btn-outline-secondary btn-sm" click.trigger="setFrozenColumns2(-1)"\n          data-test="remove-frozen-column-button">\n    <i class="fa fa-times fa-lg"></i> Remove Frozen Columns\n  </button>\n  <button class="btn btn-outline-secondary btn-sm" click.trigger="setFrozenColumns2(2)"\n          data-test="set-3frozen-columns">\n    <i class="fa fa-thumb-tack fa-lg"></i> Set 3 Frozen Columns\n  </button>\n</div>\n\n<aurelia-slickgrid grid-id="grid2"\n                    column-definitions.bind="columnDefinitions2"\n                    grid-options.bind="gridOptions2"\n                    dataset.bind="dataset2"\n                    on-aurelia-grid-created.trigger="aureliaGridReady2($event.detail)">\n</aurelia-slickgrid>\n',s=o,d=[];let c;function u(e){c||(c=a.b_N.define({name:l,template:o,dependencies:d})),e.register(c)}var m=n(83537),f=n(38845),p=n(93379),h=n.n(p),b=n(7795),g=n.n(b),C=n(90569),v=n.n(C),y=n(3565),k=n.n(y),G=n(19216),x=n.n(G),w=n(44589),z=n.n(w),D={};D.styleTagTransform=z(),D.setAttributes=k(),D.insert=v().bind(null,"head"),D.domAPI=g(),D.insertStyleElement=x(),h()(r.Z,D),r.Z&&r.Z.locals&&r.Z.locals,n(31932);let P=class{constructor(){this.title="Example 14: Column Span & Header Grouping",this.subTitle="\n  This example demonstrates how to easily span a row over multiple columns & how to group header titles.\n  <ul>\n    <li>Note that you can add Sort but remember that it will sort by the data which the row contains, even if the data is visually hidden by colspan it will still sort it</li>\n  </ul>\n  ",this.columnDefinitions1=[],this.columnDefinitions2=[],this.dataset1=[],this.dataset2=[],this.definedGrid1(),this.definedGrid2()}attached(){this.dataset1=this.getData(500),this.dataset2=this.getData(500)}aureliaGridReady2(e){this.aureliaGrid2=e,this.gridObj2=e.slickGrid}definedGrid1(){this.columnDefinitions1=[{id:"title",name:"Title",field:"title",sortable:!0,columnGroup:"Common Factor"},{id:"duration",name:"Duration",field:"duration",columnGroup:"Common Factor"},{id:"start",name:"Start",field:"start",columnGroup:"Period"},{id:"finish",name:"Finish",field:"finish",columnGroup:"Period"},{id:"%",name:"% Complete",field:"percentComplete",selectable:!1,columnGroup:"Analysis"},{id:"effort-driven",name:"Effort Driven",field:"effortDriven",type:f.fSu.boolean,columnGroup:"Analysis"}],this.gridOptions1={enableAutoResize:!1,enableCellNavigation:!0,enableColumnReorder:!1,enableSorting:!0,createPreHeaderPanel:!0,showPreHeaderPanel:!0,preHeaderPanelHeight:28,gridHeight:275,gridWidth:800,enableExcelExport:!0,excelExportOptions:{exportWithFormatter:!1},externalResources:[new m.U],explicitInitialization:!0,colspanCallback:this.renderDifferentColspan}}definedGrid2(){this.columnDefinitions2=[{id:"sel",name:"#",field:"num",behavior:"select",cssClass:"cell-selection",width:40,resizable:!1,selectable:!1},{id:"title",name:"Title",field:"title",sortable:!0,columnGroup:"Common Factor"},{id:"duration",name:"Duration",field:"duration",columnGroup:"Common Factor"},{id:"start",name:"Start",field:"start",columnGroup:"Period"},{id:"finish",name:"Finish",field:"finish",columnGroup:"Period"},{id:"%",name:"% Complete",field:"percentComplete",selectable:!1,columnGroup:"Analysis"},{id:"effort-driven",name:"Effort Driven",field:"effortDriven",type:f.fSu.boolean,columnGroup:"Analysis"}],this.gridOptions2={enableCellNavigation:!0,enableColumnReorder:!1,createPreHeaderPanel:!0,showPreHeaderPanel:!0,preHeaderPanelHeight:25,explicitInitialization:!0,gridHeight:275,gridWidth:800,frozenColumn:2,enableExcelExport:!0,excelExportOptions:{exportWithFormatter:!1},externalResources:[new m.U],gridMenu:{hideClearFrozenColumnsCommand:!1},headerMenu:{hideFreezeColumnsCommand:!1}}}getData(e){const t=[];for(let n=0;n<e;n++)t[n]={id:n,num:n,title:"Task "+n,duration:"5 days",percentComplete:Math.round(100*Math.random()),start:"01/01/2009",finish:"01/05/2009",effortDriven:n%5==0};return t}setFrozenColumns2(e){this.gridObj2.setOptions({frozenColumn:e}),this.gridOptions2=this.gridObj2.getOptions()}renderDifferentColspan(e){return e.id%2==1?{columns:{duration:{colspan:3}}}:{columns:{0:{colspan:"*"}}}}};P=function(e,t,n,i){var a,r=arguments.length,l=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,i);else for(var o=e.length-1;o>=0;o--)(a=e[o])&&(l=(r<3?a(l):r>3?a(t,n,l):a(t,n))||l);return r>3&&l&&Object.defineProperty(t,n,l),l}([(0,a.MoW)(i),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:paramtypes",[])],P)}}]);