"use strict";(self.webpackChunkaurelia_slickgrid_demo_bs5=self.webpackChunkaurelia_slickgrid_demo_bs5||[]).push([[292],{77232:(t,e,i)=>{i.d(e,{c:()=>l});var a=i(55500),n=i.n(a),o=i(2312),r=i.n(o)()(n());r.push([t.id,".duration-bg{background-color:#e9d4f1 !important}",""]);const l=r},47292:(t,e,i)=>{i.r(e),i.d(e,{Example11:()=>R});var a={};i.r(a),i.d(a,{default:()=>d,dependencies:()=>s,name:()=>r,register:()=>h,template:()=>l});var n=i(82483),o=i(77232);const r="example11",l='<h2>\n  ${title}\n  <span class="float-end">\n    <a style="font-size: 18px"\n        target="_blank"\n        href="https://github.com/ghiscoding/aurelia-slickgrid/blob/master/packages/demo/src/examples/slickgrid/example11.ts">\n      <span class="fa fa-link"></span> code\n    </a>\n  </span>\n</h2>\n<div class="subtitle" innerhtml.bind="subTitle"></div>\n\n<div class="col-sm-12">\n  <span>\n    <label>Scroll: </label>\n    <div class="btn-group" role="group" aria-label="...">\n      <button class="btn btn-sm btn-outline-secondary" data-test="scroll-top-btn" click.trigger="scrollGridTop()">\n        <i class="fa fa-arrow-up"></i>\n      </button>\n      <button class="btn btn-sm btn-outline-secondary" data-test="scroll-bottom-btn"\n              click.trigger="scrollGridBottom()">\n        <i class="fa fa-arrow-down"></i>\n      </button>\n    </div>\n    <button class="btn btn-sm btn-outline-secondary" data-test="add-new-item-top-btn"\n            click.trigger="addNewItem()">Add New Mocked Item (top)</button>\n    <button class="btn btn-sm btn-outline-secondary" data-test="add-new-item-bottom-btn"\n            click.trigger="addNewItem(\'bottom\')">Add New Mocked Item\n      (bottom)</button>\n    <button class="btn btn-sm btn-outline-secondary" data-test="update-second-item-btn"\n            click.trigger="updateSecondItem()">\n      Update 2nd Row Item with Random Duration\n    </button>\n    <button class="btn btn-sm btn-outline-secondary" data-test="highlight-row5-btn"\n            click.trigger="highlighFifthRow()">Highlight 5th Row</button>\n    <button class="btn btn-sm btn-outline-secondary" data-test="highlight-duration40-btn"\n            click.trigger="changeDurationBackgroundColor()">\n      Highlight Rows with Duration over 50\n    </button>\n  </span>\n  <hr />\n</div>\n\n<aurelia-slickgrid grid-id="grid11"\n                    column-definitions.bind="columnDefinitions"\n                    grid-options.bind="gridOptions"\n                    dataset.bind="dataset"\n                    on-aurelia-grid-created.trigger="aureliaGridReady($event.detail)">\n</aurelia-slickgrid>\n',d=l,s=[];let c;function h(t){c||(c=n.eOR.define({name:r,template:l,dependencies:s})),t.register(c)}var u=i(79896),g=i(14596),m=i.n(g),b=i(86520),f=i.n(b),p=i(36176),k=i.n(p),w=i(65120),y=i.n(w),v=i(66808),M=i.n(v),C=i(61936),I=i.n(C),D={};D.styleTagTransform=I(),D.setAttributes=y(),D.insert=k().bind(null,"head"),D.domAPI=f(),D.insertStyleElement=M(),m()(o.c,D),o.c&&o.c.locals&&o.c.locals,i(55648);let R=class{constructor(){this.title="Example 11: Add / Update / Highlight a Datagrid Item",this.subTitle='\n  Add / Update / Hightlight an Item from the Datagrid (<a href="https://ghiscoding.gitbook.io/aurelia-slickgrid/grid-functionalities/add-update-highlight" target="_blank">Wiki docs</a>).\n  <ul>\n    <li><b>Note:</b> this demo is <b>only</b> on the datagrid (client) side, you still need to deal with the backend yourself</li>\n    <li>Adding an item, will always be showing as the 1st item in the grid because that is the best visual place to add it</li>\n    <li>Add/Update an item requires a valid Slickgrid Selection Model, you have 2 choices to deal with this:</li>\n    <ul><li>You can enable "enableCheckboxSelector" or "enableRowSelection" to True</li></ul>\n    <li>Click on any of the buttons below to test this out</li>\n    <li>You can change the highlighted color &amp; animation by changing the <a href="https://github.com/ghiscoding/aurelia-slickgrid/blob/master/aurelia-slickgrid/src/aurelia-slickgrid/styles/_variables.scss" target="_blank">SASS Variables</a></li>\n    <ul>\n      <li>"$row-highlight-background-color" or "$row-highlight-fade-animation"</li>\n    </ul>\n    <li>You can also add CSS class(es) on the fly (or on page load) on rows with certain criteria, (e.g. click on last button)\n    <ul>\n      <li>Example, click on button "Highlight Rows with Duration over 50" to see row styling changing. <a href="https://ghiscoding.gitbook.io/aurelia-slickgrid/grid-functionalities/dynamic-item-metadata" target="_blank">Wiki doc</a></li>\n    </ul>\n  </ul>\n  ',this.columnDefinitions=[],this.dataset=[],this.defineGrid(),this.mockData(1e3)}aureliaGridReady(t){this.aureliaGrid=t,this.dataView=t.dataView,this.grid=t.slickGrid,this.gridService=t.gridService}defineGrid(){this.columnDefinitions=[{id:"delete",field:"id",excludeFromHeaderMenu:!0,formatter:u.cnr.icon,params:{iconCssClass:"fa fa-trash pointer"},minWidth:30,maxWidth:30,onCellClick:(t,e)=>{console.log(e),confirm("Are you sure?")&&this.aureliaGrid.gridService.deleteItemById(e.dataContext.id)}},{id:"title",name:"Title",field:"title",sortable:!0,type:u.sV2.string,editor:{model:u.oFR.longText}},{id:"duration",name:"Duration (days)",field:"duration",sortable:!0,type:u.sV2.number,editor:{model:u.oFR.text},onCellChange:(t,e)=>{alert("onCellChange directly attached to the column definition"),console.log(e)}},{id:"complete",name:"% Complete",field:"percentComplete",formatter:u.cnr.percentCompleteBar,type:u.sV2.number,editor:{model:u.oFR.integer}},{id:"start",name:"Start",field:"start",formatter:u.cnr.dateIso,sortable:!0,type:u.sV2.date},{id:"finish",name:"Finish",field:"finish",formatter:u.cnr.dateIso,sortable:!0,type:u.sV2.date},{id:"effort-driven",name:"Effort Driven",field:"effortDriven",formatter:u.cnr.checkmark,type:u.sV2.number,editor:{model:u.oFR.checkbox}}],this.gridOptions={asyncEditorLoading:!1,autoResize:{container:"#demo-container",rightPadding:10},editable:!0,enableColumnPicker:!0,enableCellNavigation:!0,enableRowSelection:!0}}mockData(t){const e=[];for(let i=0;i<t;i++){const t=2e3+Math.floor(10*Math.random()),a=Math.floor(11*Math.random()),n=Math.floor(29*Math.random()),o=Math.round(100*Math.random());e[i]={id:i,title:"Task "+i,duration:Math.round(100*Math.random())+"",percentComplete:o,percentCompleteNumber:o,start:new Date(t,a,n),finish:new Date(t,a+1,n),effortDriven:i%5==0}}this.dataset=e}addNewItem(t){const e=this.createNewItem(1);this.aureliaGrid.gridService.addItem(e,{position:t})}createNewItem(t=1){const e=this.aureliaGrid.dataView.getItems();let i=0;e.forEach((t=>{t.id>i&&(i=t.id)}));const a=i+t,n=2e3+Math.floor(10*Math.random()),o=Math.floor(11*Math.random()),r=Math.floor(29*Math.random()),l=Math.round(100*Math.random());return{id:a,title:"Task "+a,duration:Math.round(100*Math.random())+"",percentComplete:l,percentCompleteNumber:l,start:new Date(n,o,r),finish:new Date(n,o+2,r),effortDriven:!0}}changeDurationBackgroundColor(){this.dataView.getItemMetadata=this.updateItemMetadataForDurationOver40(this.dataView.getItemMetadata),this.grid.invalidate(),this.grid.render()}highlighFifthRow(){this.scrollGridTop(),this.aureliaGrid.gridService.highlightRow(4,1500)}updateItemMetadataForDurationOver40(t){return e=>{const i=this.dataView.getItem(e);let a={cssClasses:""};return"object"==typeof t&&(a=t(e)),a&&i&&i.duration&&+i.duration>40&&(a.cssClasses=(a.cssClasses||"")+" duration-bg"),a}}updateSecondItem(){this.scrollGridTop();const t=this.aureliaGrid.gridService.getDataItemByRowNumber(1);t.duration=Math.round(100*Math.random()),this.aureliaGrid.gridService.updateItem(t)}scrollGridBottom(){this.aureliaGrid.slickGrid.navigateBottom()}scrollGridTop(){this.aureliaGrid.slickGrid.navigateTop()}};R=function(t,e,i,a){var n,o=arguments.length,r=o<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,a);else for(var l=t.length-1;l>=0;l--)(n=t[l])&&(r=(o<3?n(r):o>3?n(e,i,r):n(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r}([(0,n.Kx8)(a),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:paramtypes",[])],R)}}]);