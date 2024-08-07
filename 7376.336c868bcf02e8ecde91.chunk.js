"use strict";(self.webpackChunkaurelia_slickgrid_locale_demo_bs5=self.webpackChunkaurelia_slickgrid_locale_demo_bs5||[]).push([[7376],{7376:(e,t,a)=>{a.r(t),a.d(t,{Example17:()=>w});var i={};a.r(i),a.d(i,{bindables:()=>d,default:()=>s,dependencies:()=>l,name:()=>r,register:()=>h,template:()=>o});var n=a(5394);const r="example17",o='<h2>\n  ${title}\n  <span class="float-end">\n    <a style="font-size: 18px"\n        target="_blank"\n        href="https://github.com/ghiscoding/aurelia-slickgrid/blob/master/packages/demo/src/examples/slickgrid/example17.ts">\n      <span class="mdi mdi-link-variant"></span> code\n    </a>\n  </span>\n</h2>\n<div class="subtitle"\n      innerhtml.bind="subTitle"></div>\n\n<hr>\n\n<div class="col-md-6"\n      style="margin-bottom: 15px">\n  <label>Octopart Catalog Search <small>(throttle search to 1.5sec)</small></label>\n  <input type="text"\n          class="form-control"\n          value.bind="search & throttle:1500">\n</div>\n\n<div class="alert alert-danger col-md-7" role="alert">\n  <strong>Note:</strong>\n  this demo no longer displays any results because the WebAPI Key to connect and query the <b>Octopart Component\n    Search</b> is no longer valid. However the concept remains valid, which is to use your own Custom DataView\n  instead of the default SlickGrid DataView used by this library.\n</div>\n\n<div class="alert alert-warning col-md-6"\n      role="alert"\n      if.bind="loading">\n  <i class="mdi mdi-sync mdi-spin"></i>\n  <span>Loading...</span>\n</div>\n\n<aurelia-slickgrid grid-id="grid1"\n                    column-definitions.bind="columnDefinitions"\n                    grid-options.bind="gridOptions"\n                    dataset.bind="dataset"\n                    custom-data-view.bind="customDataView"\n                    on-aurelia-grid-created.trigger="aureliaGridReady($event.detail)"\n                    on-viewport-changed.trigger="onViewportChanged()"\n                    on-sort.trigger="onSort($event.detail.eventData, $event.detail.args)">\n</aurelia-slickgrid>\n',s=o,l=[],d={};let c;function h(e){c||(c=n.K94.define({name:r,template:o,dependencies:l,bindables:d})),e.register(c)}var u=a(6612),m=a(9209),g=(a(6757),function(e,t,a,i,n,r){function o(e){if(void 0!==e&&"function"!=typeof e)throw new TypeError("Function expected");return e}for(var s,l=i.kind,d="getter"===l?"get":"setter"===l?"set":"value",c=!t&&e?i.static?e:e.prototype:null,h=t||(c?Object.getOwnPropertyDescriptor(c,i.name):{}),u=!1,m=a.length-1;m>=0;m--){var g={};for(var b in i)g[b]="access"===b?{}:i[b];for(var b in i.access)g.access[b]=i.access[b];g.addInitializer=function(e){if(u)throw new TypeError("Cannot add initializers after decoration has completed");r.push(o(e||null))};var p=(0,a[m])("accessor"===l?{get:h.get,set:h.set}:h[d],g);if("accessor"===l){if(void 0===p)continue;if(null===p||"object"!=typeof p)throw new TypeError("Object expected");(s=o(p.get))&&(h.get=s),(s=o(p.set))&&(h.set=s),(s=o(p.init))&&n.unshift(s)}else(s=o(p))&&("field"===l?n.unshift(s):h[d]=s)}c&&Object.defineProperty(c,i.name,h),u=!0}),b=function(e,t,a){for(var i=arguments.length>2,n=0;n<t.length;n++)a=i?t[n].call(e,a):t[n].call(e);return i?a:void 0};const p=(e,t,a,i,n)=>n&&n.brand&&n.brand.name||"",f=(e,t,a,i,n)=>{let r="";return n&&n.octopart_url&&n.mpn&&(r=`<a href="${n.octopart_url}" target="_blank">${n.mpn}</a>`),r};let w=(()=>{let e,t,a,r=[(0,n.EMX)(i)],o=[],s=[],l=[];return t=class{constructor(){this.search=b(this,s,""),this._eventHandler=(b(this,l),new m.JD8),this.title="Example 17: Octopart Catalog Search - Remote Model Plugin",this.subTitle='\n    This example demonstrates how to use "slick.remotemodel.js" or any Remote implementation through an external Remote Service\n    <ul>\n      <li>Your browser might block access to the Octopart query, if you get "block content" then just unblock it.</li>\n      <li>If the demo throws some errors, try again later (there\'s a limit per day).</li>\n      <li>\n        Uses <a href="https://github.com/6pac/SlickGrid/blob/master/slick.remotemodel.js" target="_blank">slick.remotemodel.js</a>\n        which is hooked up to load search results from Octopart, but can easily be extended\n        to support any JSONP-compatible backend that accepts paging parameters.\n      </li>\n      <li>\n        This demo implements a custom DataView, however please note that you are on your own to implement all necessary DataView methods\n        for Sorting, Filtering, etc...\n      </li>\n      <li>\n        Soure code for this example is available <a href="https://github.com/ghiscoding/aurelia-slickgrid/blob/master/doc/github-demo/src/examples/slickgrid/example17.ts" target="_blank">here</a>\n      </li>\n    </ul>\n  ',this.columnDefinitions=[],this.dataset=[],this.loading=!1,this.defineGrid()}attached(){this.hookAllLoaderEvents()}detaching(){this._eventHandler.unsubscribeAll()}aureliaGridReady(e){this.aureliaGrid=e,this.gridObj=e.slickGrid,setTimeout((()=>this.searchChanged(this.search)),100)}defineGrid(){this.columnDefinitions=[{id:"mpn",name:"MPN",field:"mpn",formatter:f,width:100,sortable:!0},{id:"brand",name:"Brand",field:"brand.name",formatter:p,width:100,sortable:!0},{id:"short_description",name:"Description",field:"short_description",width:520}],this.gridOptions={enableAutoResize:!0,autoResize:{container:"#demo-container",rightPadding:10},enableCellNavigation:!0,enableColumnReorder:!1,enableGridMenu:!1,multiColumnSort:!1}}hookAllLoaderEvents(){this._eventHandler&&this._eventHandler.subscribe&&this.loaderDataView&&this.loaderDataView.onDataLoading&&this.loaderDataView.onDataLoaded&&(this._eventHandler.subscribe(this.loaderDataView.onDataLoading,(()=>this.loading=!0)),this._eventHandler.subscribe(this.loaderDataView.onDataLoaded,((e,t)=>{if(t&&this.gridObj&&this.gridObj.invalidateRow&&this.gridObj.updateRowCount&&this.gridObj.render){for(let e=t.from;e<=t.to;e++)this.gridObj.invalidateRow(e);this.gridObj.updateRowCount(),this.gridObj.render(),this.loading=!1}})))}searchChanged(e){if(e&&this.gridObj&&this.gridObj.getViewport&&this.loaderDataView&&this.loaderDataView.ensureData&&this.loaderDataView.setSearch){const t=this.gridObj.getViewport();this.loaderDataView.setSearch(e),this.loaderDataView.ensureData(t.top,t.bottom)}}onSort(e,t){if(this.gridObj&&this.gridObj.getViewport&&this.loaderDataView&&this.loaderDataView.ensureData&&this.loaderDataView.setSort){const e=this.gridObj.getViewport();t&&t.sortCol&&t.sortCol.field&&this.loaderDataView.setSort(t.sortCol.field,t.sortAsc?1:-1),this.loaderDataView.ensureData(e.top,e.bottom)}}onViewportChanged(){if(this.gridObj&&this.gridObj.getViewport&&this.loaderDataView&&this.loaderDataView.ensureData){const e=this.gridObj.getViewport();this.loaderDataView.ensureData(e.top,e.bottom)}}},d=t,"symbol"==typeof(c="Example17")&&(c=c.description?"[".concat(c.description,"]"):""),Object.defineProperty(d,"name",{configurable:!0,value:h?"".concat(h," ",c):c}),(()=>{const i="function"==typeof Symbol&&Symbol.metadata?Object.create(null):void 0;a=[(0,n._tP)({mode:u.Zm.twoWay})],g(null,null,a,{kind:"field",name:"search",static:!1,private:!1,access:{has:e=>"search"in e,get:e=>e.search,set:(e,t)=>{e.search=t}},metadata:i},s,l),g(null,e={value:t},r,{kind:"class",name:t.name,metadata:i},null,o),t=e.value,i&&Object.defineProperty(t,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:i}),b(t,o)})(),t;var d,c,h})()}}]);