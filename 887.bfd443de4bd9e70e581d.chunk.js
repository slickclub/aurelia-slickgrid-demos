"use strict";(self.webpackChunkaurelia_slickgrid_locale_demo_bs5=self.webpackChunkaurelia_slickgrid_locale_demo_bs5||[]).push([[887],{9745:(e,t,i)=>{i.d(t,{A:()=>s});var n=i(1601),o=i.n(n),a=i(6314),l=i.n(a)()(o());l.push([e.id,".bold{font-weight:bold}.italic{font-style:italic}.grey{color:gray}.orange{color:orange}.red{color:red}.yellow{color:#ffeb34}.pointer{cursor:pointer}.cell-menu-dropdown-outline{border:1px solid #a0a0a0;border-radius:4px;width:max-content;padding:2px 14px;cursor:pointer}.cell-menu-dropdown-outline:hover:not(.disabled){background-color:#a3a3a3;color:#fff}.cell-menu-dropdown-outline .mdi-caret-down{margin-left:5px}.disabled{color:#d4d4d4;border:1px solid #d8d8d8}.slick-dark-mode .disabled{border:1px solid #616161;color:#686868}.row.locale{margin-top:5px}span.cell-menu{margin-left:15px}",""]);const s=l},887:(e,t,i)=>{i.r(t),i.d(t,{Example24:()=>G});var n={};i.r(n),i.d(n,{bindables:()=>m,default:()=>d,dependencies:()=>r,name:()=>l,register:()=>u,template:()=>s});var o=i(5394),a=i(9745);const l="example24",s='<h2>\n  ${title}\n  <button class="btn btn-outline-secondary btn-sm btn-icon" click.trigger="toggleDarkMode()" data-test="toggle-dark-mode">\n    <i class="mdi mdi-theme-light-dark"></i>\n    <span>Toggle Dark Mode</span>\n  </button>\n  <span class="float-end">\n    <a style="font-size: 18px"\n        target="_blank"\n        href="https://github.com/ghiscoding/aurelia-slickgrid/blob/master/packages/demo/src/examples/slickgrid/example24.ts">\n      <span class="mdi mdi-link-variant"></span> code\n    </a>\n  </span>\n</h2>\n<div class="subtitle" innerhtml.bind="subTitle"></div>\n\n<div class="row">\n  <span class="context-menu">\n    <strong>Context Menu:</strong>\n    <button class="btn btn-outline-secondary btn-xs btn-icon" click.trigger="showContextCommandsAndOptions(false)"\n            data-test="context-menu-priority-only-button">\n      Show Priority Options Only\n    </button>\n    <button class="btn btn-outline-secondary btn-xs btn-icon" click.trigger="showContextCommandsAndOptions(true)"\n            data-test="context-menu-commands-and-priority-button">\n      Show Commands & Priority Options\n    </button>\n  </span>\n\n  <span class="cell-menu">\n    <strong>Cell Menu:</strong>\n    <button class="btn btn-outline-secondary btn-xs btn-icon" click.trigger="showCellMenuCommandsAndOptions(false)"\n            data-test="cell-menu-commands-and-options-false-button">\n      Show Action Commands Only\n    </button>\n    <button class="btn btn-outline-secondary btn-xs btn-icon" click.trigger="showCellMenuCommandsAndOptions(true)"\n            data-test="cell-menu-commands-and-options-true-button">\n      Show Actions Commands & Completed Options\n    </button>\n  </span>\n</div>\n\n<aurelia-slickgrid grid-id="grid24"\n                    column-definitions.bind="columnDefinitions"\n                    grid-options.bind="gridOptions"\n                    dataset.bind="dataset"\n                    instances.bind="aureliaGrid">\n</aurelia-slickgrid>\n',d=s,r=[],m=[];let c;function u(e){c||(c=o.K94.define({name:l,template:s,dependencies:r,bindables:m})),e.register(c)}var p=i(8003),h=i(8211),b=i(5072),C=i.n(b),g=i(7825),x=i.n(g),f=i(7659),y=i.n(f),v=i(5056),k=i.n(v),w=i(540),M=i.n(w),O=i(1113),T=i.n(O),S={};S.styleTagTransform=T(),S.setAttributes=k(),S.insert=y().bind(null,"head"),S.domAPI=x(),S.insertStyleElement=M(),C()(a.A,S),a.A&&a.A.locals&&a.A.locals,i(6757);const I=(e,t,i,n,o)=>3===o.priority?'<div class="cell-menu-dropdown-outline">Action<i class="mdi mdi-chevron-down"></i></div>':'<div class="cell-menu-dropdown-outline disabled">Action <i class="mdi mdi-chevron-down"></i></div>',A=(e,t,i)=>{if(!i)return"";let n="";const o=+(i>=3?3:i),a=`<i class="mdi mdi-star ${3===o?"red":2===o?"orange":"yellow"}" aria-hidden="true"></i>`;for(let e=1;e<=o;e++)n+=a;return n},E=(e,t,i,n,o,a)=>{if(!i)return"";const l=+(i>=3?3:i);return 3===l?"High":2===l?"Medium":"Low"},_=(e,t,i,n,o,a)=>void 0!==i?`Title ${i}`:"";class G{constructor(){this._darkModeGrid=!1,this.title="Example 24: Cell Menu & Context Menu Plugins",this.subTitle='Add Cell Menu and Context Menu\n    <ul>\n      <li>This example demonstrates 2 SlickGrid plugins\n      <ol>\n        <li>Using the <b>Slick.Plugins.CellMenu</b> plugin, often used for an Action Menu(s), 1 or more per grid\n          (<a href="https://ghiscoding.gitbook.io/aurelia-slickgrid/grid-functionalities/cell-menu" target="_blank">Wiki docs</a>).\n        </li>\n        <li>Using the <b>Slick.Plugins.ContextMenu</b> plugin, shown after a mouse right+click, only 1 per grid.\n        (<a href="https://ghiscoding.gitbook.io/aurelia-slickgrid/grid-functionalities/context-menu" target="_blank">Wiki docs</a>).\n        </li>\n      </ol>\n      <li>It will also "autoAdjustDrop" (bottom/top) and "autoAlignSide" (left/right) by default but could be turned off</li>\n      <li>Both plugins have 2 sections, 1st section can have an array of Options (to change value of a field) and 2nd section an array of Commands (execute a command)</li>\n      <li>There are 2 ways to execute a Command/Option</li>\n      <ol>\n        <li>via onCommand/onOptionSelected (use a switch/case to parse command/option and do something with it)</li>\n        <li>via action callback (that can be defined on each command/option)</li>\n      </ol>\n      <li>Use override callback functions to change the properties of show/hide, enable/disable the menu or certain item(s) from the list</li>\n      <ol>\n        <li>These callbacks are: "menuUsabilityOverride", "itemVisibilityOverride", "itemUsabilityOverride"</li>\n        <li>... e.g. in the demo, the "Action" Cell Menu is only available when Priority is set to "High" via "menuUsabilityOverride"</li>\n        <li>... e.g. in the demo, the Context Menu is only available on the first 20 Tasks via "menuUsabilityOverride"</li>\n      </ol>\n    </ul>',this.columnDefinitions=[],this.dataset=[],this.defineGrid()}get cellMenuInstance(){return this.aureliaGrid?.extensionService.getExtensionInstanceByName(h.$fu.cellMenu)}get contextMenuInstance(){return this.aureliaGrid?.extensionService.getExtensionInstanceByName(h.$fu.contextMenu)}attached(){this.dataset=this.getData(1e3)}detaching(){document.querySelector(".panel-wm-content").classList.remove("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="light"}defineGrid(){this.columnDefinitions=[{id:"id",name:"#",field:"id",maxWidth:45,sortable:!0,filterable:!0},{id:"title",name:"Title",field:"id",minWidth:100,formatter:_,sortable:!0,filterable:!0,params:{useFormatterOuputToFilter:!0}},{id:"percentComplete",name:"Percent Complete",field:"percentComplete",minWidth:100,exportWithFormatter:!1,sortable:!0,filterable:!0,filter:{model:h.CuW.slider,operator:">="},formatter:h._tQ.percentCompleteBar,type:h.PUO.number},{id:"start",name:"Start",field:"start",minWidth:100,formatter:h._tQ.dateIso,outputType:h.PUO.dateIso,type:h.PUO.date,filterable:!0,filter:{model:h.CuW.compoundDate}},{id:"finish",name:"Finish",field:"finish",formatter:h._tQ.dateIso,outputType:h.PUO.dateIso,type:h.PUO.date,minWidth:100,filterable:!0,filter:{model:h.CuW.compoundDate}},{id:"priority",name:"Priority",field:"priority",exportCustomFormatter:E,formatter:A,sortable:!0,filterable:!0,filter:{collection:[{value:"",label:""},{value:1,label:"Low"},{value:2,label:"Medium"},{value:3,label:"High"}],model:h.CuW.singleSelect}},{id:"completed",name:"Completed",field:"completed",formatter:h._tQ.checkmarkMaterial,sortable:!0,filterable:!0,filter:{collection:[{value:"",label:""},{value:!0,label:"True"},{value:!1,label:"False"}],model:h.CuW.singleSelect}},{id:"action",name:"Action",field:"action",width:100,maxWidth:110,excludeFromExport:!0,formatter:I,cellMenu:{hideCloseButton:!1,menuUsabilityOverride:e=>3===e.dataContext.priority,commandTitle:"Commands",commandItems:[{command:"command2",title:"Command 2",positionOrder:62,action:(e,t)=>{console.log(t.dataContext,t.column)},itemUsabilityOverride:e=>!e.dataContext.completed},{command:"command1",title:"Command 1",cssClass:"orange",positionOrder:61},{command:"delete-row",title:"Delete Row",positionOrder:64,iconCssClass:"mdi mdi-close",cssClass:"red",textCssClass:"bold",itemVisibilityOverride:e=>!e.dataContext.completed},{divider:!0,command:"",positionOrder:63},{command:"help",title:"Help",iconCssClass:"mdi mdi-help-circle",positionOrder:66},{command:"something",title:"Disabled Command",disabled:!0,positionOrder:67},{command:"",divider:!0,positionOrder:98},{command:"export",title:"Exports",positionOrder:99,commandItems:[{command:"exports-txt",title:"Text (tab delimited)"},{command:"sub-menu",title:"Excel",cssClass:"green",subMenuTitle:"available formats",subMenuTitleCssClass:"text-italic orange",commandItems:[{command:"exports-csv",title:"Excel (csv)"},{command:"exports-xlsx",title:"Excel (xlsx)"}]}]},{command:"feedback",title:"Feedback",positionOrder:100,commandItems:[{command:"request-update",title:"Request update from supplier",iconCssClass:"mdi mdi-star",tooltip:"this will automatically send an alert to the shipping team to contact the user for an update"},"divider",{command:"sub-menu",title:"Contact Us",iconCssClass:"mdi mdi-account",subMenuTitle:"contact us...",subMenuTitleCssClass:"italic",commandItems:[{command:"contact-email",title:"Email us",iconCssClass:"mdi mdi-pencil-outline"},{command:"contact-chat",title:"Chat with us",iconCssClass:"mdi mdi-message-text-outline"},{command:"contact-meeting",title:"Book an appointment",iconCssClass:"mdi mdi-coffee"}]}]}],optionTitle:"Change Completed Flag",optionItems:[{option:!0,title:"True",iconCssClass:"mdi mdi-check-box-outline"},{option:!1,title:"False",iconCssClass:"mdi mdi-checkbox-blank-outline"},{option:null,title:"null",cssClass:"italic",action:()=>{},itemUsabilityOverride:e=>3===e.dataContext.priority,itemVisibilityOverride:e=>!e.dataContext.completed}]}}],this.gridOptions={autoResize:{container:"#demo-container",rightPadding:10},darkMode:this._darkModeGrid,enableCellNavigation:!0,enableFiltering:!0,enableSorting:!0,enableExcelExport:!0,excelExportOptions:{exportWithFormatter:!0,customColumnWidth:15,columnHeaderStyle:{font:{bold:!0,italic:!0}}},externalResources:[new p.N],enableContextMenu:!0,enableCellMenu:!0,cellMenu:{onCommand:(e,t)=>this.executeCommand(e,t),onOptionSelected:(e,t)=>{const i=t?.dataContext;i?.hasOwnProperty("completed")&&(i.completed=t.item.option,this.aureliaGrid.gridService.updateItem(i))},onBeforeMenuShow:(e,t)=>{console.log("Before the Cell Menu is shown",t)},onBeforeMenuClose:(e,t)=>console.log("Cell Menu is closing",t)},contextMenu:this.getContextMenuOptions()}}executeCommand(e,t){const i=t.command,n=t.dataContext;switch(i){case"contact-email":case"contact-chat":case"contact-meeting":alert("Command: "+t?.command);break;case"exports-csv":case"exports-txt":case"exports-xlsx":alert(`Exporting as ${t.item.title}`);break;case"command1":alert("Command 1");break;case"command2":alert("Command 2");break;case"help":alert("Please help!");break;case"delete-row":confirm(`Do you really want to delete row ${t.row+1} with Task ${n.id}`)&&this.aureliaGrid.dataView.deleteItem(n.id)}}getData(e){const t=[];for(let i=0;i<e;i++){const e=2e3+Math.floor(30*Math.random()),n=Math.floor(11*Math.random()),o=Math.floor(29*Math.random());t[i]={id:i,duration:Math.floor(25*Math.random())+" days",percentComplete:Math.floor(100*Math.random()),start:new Date(e,n,o),finish:new Date(e,n+1,o),priority:i%3?2:i%5?3:1,completed:i%4==0}}return t}getContextMenuOptions(){return{hideCloseButton:!1,menuUsabilityOverride:e=>(e&&e.dataContext).id<21,commandShownOverColumnIds:["id","title","percentComplete","start","finish","completed"],commandTitle:"Commands",commandItems:[{divider:!0,command:"",positionOrder:61},{command:"delete-row",title:"Delete Row",iconCssClass:"mdi mdi-close",cssClass:"red",textCssClass:"bold",positionOrder:62},{divider:!0,command:"",positionOrder:63},{command:"help",title:"Help",iconCssClass:"mdi mdi-help-circle",positionOrder:64,action:()=>{},itemVisibilityOverride:e=>!(e&&e.dataContext).completed},{command:"something",title:"Disabled Command",disabled:!0,positionOrder:65},{command:"",divider:!0,positionOrder:98},{command:"export",title:"Exports",positionOrder:99,commandItems:[{command:"exports-txt",title:"Text (tab delimited)"},{command:"sub-menu",title:"Excel",cssClass:"green",subMenuTitle:"available formats",subMenuTitleCssClass:"text-italic orange",commandItems:[{command:"exports-csv",title:"Excel (csv)"},{command:"exports-xlsx",title:"Excel (xlsx)"}]}]},{command:"feedback",title:"Feedback",positionOrder:100,commandItems:[{command:"request-update",title:"Request update from supplier",iconCssClass:"mdi mdi-star",tooltip:"this will automatically send an alert to the shipping team to contact the user for an update"},"divider",{command:"sub-menu",title:"Contact Us",iconCssClass:"mdi mdi-account",subMenuTitle:"contact us...",subMenuTitleCssClass:"italic",commandItems:[{command:"contact-email",title:"Email us",iconCssClass:"mdi mdi-pencil-outline"},{command:"contact-chat",title:"Chat with us",iconCssClass:"mdi mdi-message-text-outline"},{command:"contact-meeting",title:"Book an appointment",iconCssClass:"mdi mdi-coffee"}]}]}],optionTitle:"Change Priority",optionShownOverColumnIds:["priority"],optionItems:[{option:0,title:"n/a",textCssClass:"italic",itemUsabilityOverride:e=>!(e&&e.dataContext).completed,action:()=>{}},{option:1,iconCssClass:"mdi mdi-star-outline yellow",title:"Low"},{option:2,iconCssClass:"mdi mdi-star orange",title:"Medium"},{option:3,iconCssClass:"mdi mdi-star red",title:"High"},"divider",{option:4,title:"Extreme",iconCssClass:"mdi mdi-fire",disabled:!0,itemVisibilityOverride:e=>!(e&&e.dataContext).completed},{option:null,title:"Sub-Options (demo)",subMenuTitle:"Change Priority",optionItems:[{option:1,iconCssClass:"mdi mdi-star-outline yellow",title:"Low"},{option:2,iconCssClass:"mdi mdi-star orange",title:"Medium"},{option:3,iconCssClass:"mdi mdi-star red",title:"High"}]}],onBeforeMenuShow:(e,t)=>{this.aureliaGrid.slickGrid.setActiveCell(t.row,t.cell,!1),console.log("Before the global Context Menu is shown",t)},onBeforeMenuClose:(e,t)=>console.log("Global Context Menu is closing",t),onCommand:(e,t)=>this.executeCommand(e,t),onOptionSelected:(e,t)=>{const i=t&&t.dataContext;i?.hasOwnProperty("priority")&&(i.priority=t.item.option,this.aureliaGrid.gridService.updateItem(i))}}}showContextCommandsAndOptions(e){const t=e?[]:["id","title","complete","start","finish","completed","action"];this.contextMenuInstance?.setOptions({commandShownOverColumnIds:t})}showCellMenuCommandsAndOptions(e){this.cellMenuInstance?.setOptions({hideOptionSection:!e})}toggleDarkMode(){this._darkModeGrid=!this._darkModeGrid,this._darkModeGrid?(document.querySelector(".panel-wm-content").classList.add("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="dark"):(document.querySelector(".panel-wm-content").classList.remove("dark-mode"),document.querySelector("#demo-container").dataset.bsTheme="light"),this.aureliaGrid.slickGrid?.setOptions({darkMode:this._darkModeGrid})}}o.K94.define(n,G)}}]);