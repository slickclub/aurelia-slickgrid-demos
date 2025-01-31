"use strict";(self.webpackChunkau_slickgrid_demo=self.webpackChunkau_slickgrid_demo||[]).push([[6800],{6800:(t,e,i)=>{i.d(e,{L:()=>o,y:()=>r});var s=i(9925);function o(t,e,i){let o;i={modalType:"edit",validationFailedMsg:"Some of the fields have failed validation",validationMsgPrefix:null,show:null,hide:null,position:null,destroy:null,formValues:{},editors:{},...i};const a=()=>{},n=t=>{const i=e[t],o=(0,s.A3q)(i),a=i?.clientWidth??0,n=i?.clientHeight??0;return{top:o.top,left:o.left,bottom:o.top+n,right:o.left+a,width:a,height:n,visible:!0}};function l(l){const r=this;let d=[];r.getEditors=()=>d,r.destroy=()=>{let t=d.pop();for(;t;)t?.destroy(),t=d.pop();let o=e.pop();for(;o;)(0,s.i3Z)(o),o?.remove(),o=e.pop();i?.destroy?.(),d=[],e=null},r.focus=()=>{(o||d[0]).focus()},r.isValueChanged=()=>{let t=0;for(;t<d.length;){if(d[t].isValueChanged())return!0;t++}return!1},r.serializeValue=()=>{const t=[];let e=0;for(;e<d.length;)t[e]=d[e].serializeValue(),e++;return t},r.applyValue=(t,e)=>{let i=0;for(;i<d.length;)d[i].applyValue(t,e?.[i]),i++},r.loadValue=t=>{let e=0;for(;e<d.length;)d[e].loadValue(t),e++},r.validate=t=>{let s;o=null;const a=[];let n=0;for(;n<d.length;){const l=d[n].args?.column;if(void 0!==l?.id){const r=document.querySelector(".slick-editor-modal");let h=r?.querySelector(`.item-details-validation.editor-${l.id}`),c=r?.querySelector(`.item-details-label.editor-${l.id}`),m=r?.querySelector(`[data-editorid='${l.id}']`);const u=i?.validationMsgPrefix??"";t&&!m?.contains(t)||(s=d[n].validate(),s.valid?h&&(h.textContent="",m?.classList.remove("invalid"),c?.classList.remove("invalid")):(o=d[n],a.push({index:n,editor:d[n],container:e[n],msg:s.msg}),h&&(h.textContent=`${u}${s.msg}`,c?.classList.add("invalid"),m?.classList.add("invalid")))),h=null,c=null,m=null}n++}return t=null,a.length?{valid:!1,msg:i.validationFailedMsg,errors:a}:{valid:!0,msg:""}},r.hide=()=>{let t=0;for(;t<d.length;)d[t]?.hide?.(),t++;i?.hide?.()},r.show=()=>{let t=0;for(;t<d.length;)d[t]?.show?.(),t++;i?.show?.()},r.position=t=>{i?.position?.(t)},function(){let s={},o=0;for(;o<t.length;){if(t[o].editorClass){const r=t[o];s={...l},s.container=e[o],s.column=r,s.position=n(o),s.commitChanges=a,s.cancelChanges=a,s.compositeEditorOptions=i,s.formValues={};const h=new r.editorClass(s);i.editors[r.id]=h,d.push(h)}o++}window.setTimeout((()=>{Array.isArray(d)&&d.length>0&&"function"==typeof d[0].focus&&d[0].focus()}),0)}()}return l.prototype=this,l}var a=i(6028),n=i(2227);const l=t=>console.log(t.message);class r{get eventHandler(){return this._eventHandler}get dataView(){return this.grid?.getData()}get dataViewLength(){return this.dataView.getLength()}get formValues(){return this._formValues}get editors(){return this._editors}set editors(t){this._editors=t}get gridOptions(){return this.grid?.getOptions()}constructor(){this._columnDefinitions=[],this._lastActiveRowNumber=-1,this._formValues=null,this.gridService=null,this._eventHandler=new s.JD8,this._bindEventService=new a.P}init(t,e){if(this.grid=t,this.gridService=e.get("GridService"),this.translaterService=e.get("TranslaterService"),!this.gridService)throw new Error("[Slickgrid-Universal] it seems that the GridService is not being loaded properly, make sure the Container Service is properly implemented.");if(this.gridOptions.enableTranslate&&(!this.translaterService||!this.translaterService.translate))throw new Error('[Slickgrid-Universal] requires a Translate Service to be installed and configured when the grid option "enableTranslate" is enabled.');this._locales=this.gridOptions?.locales??s.YMJ.locales}dispose(){this._eventHandler.unsubscribeAll(),this._bindEventService.unbindAll(),this._formValues=null,this.disposeComponent()}disposeComponent(){this._modalBodyTopValidationElm?.remove(),this._modalSaveButtonElm?.remove(),"function"==typeof this._modalElm?.remove&&(this._modalElm.remove(),document.body.classList.remove("slick-modal-open")),this._editorContainers=[]}changeFormInputValue(t,e,i=!1,s=!0){const o=this.getColumnByObjectOrId(t),a="string"==typeof t?t:o?.id??"",l=this._editors?.[a];let r=e;if(!l&&!i)throw new Error(`Composite Editor with column id "${a}" not found.`);if("function"==typeof l?.setValue&&Array.isArray(this._editorContainers)){l.setValue(e,!0,s);const t=this._editorContainers.find((t=>t.dataset.editorid===a)),i=this.gridOptions?.compositeEditorOptions?.excludeDisabledFieldFormValues??!1;!l.disabled||l.disabled&&!i?t?.classList?.add("modified"):(r="",t?.classList?.remove("modified")),!l.disabled||""===r&&null===r&&void 0===r&&0===r||(r="")}const d=o?.field??"";if(o&&d?.includes(".")){const t=o.editor?.complexObjectPath??d??"";(0,n.setDeepValue)(this._formValues??{},t,e)}else this._formValues={...this._formValues,[a]:r}}changeFormValue(t,e){const i=this.getColumnByObjectOrId(t),s="string"==typeof t?t:i?.id??"",o=i?.field??t;if(o?.includes(".")){const t=i?.editor?.complexObjectPath??o??"";(0,n.setDeepValue)(this._formValues,t,e)}else this._formValues={...this._formValues,[s]:e};this._formValues=(0,n.deepMerge)({},this._itemDataContext,this._formValues)}changeFormEditorOption(t,e,i){const s=this._editors?.[t];if(!s?.changeEditorOption)throw new Error(`Editor with column id "${t}" not found OR the Editor does not support "changeEditorOption" (current only available with Date, MultipleSelect, SingleSelect & Slider Editors).`);s.changeEditorOption(e,i)}disableFormInput(t,e=!0){const i=this._editors?.[t];i?.disable&&Array.isArray(this._editorContainers)&&i.disable(e)}openDetails(t){const e=t.onError??l,i={backdrop:"static",showCloseButtonOutside:!0,shouldClearRowSelectionAfterMassAction:!0,viewColumnLayout:"auto",modalType:"edit"};try{if(!this.grid||this.grid.getEditorLock().isActive()&&!this.grid.getEditorLock().commitCurrentEdit())return null;this._formValues=null,this._options={...i,...this.gridOptions.compositeEditorOptions,...t,labels:{...this.gridOptions.compositeEditorOptions?.labels,...t?.labels}},this._options.backdrop=void 0!==t.backdrop?t.backdrop:"static";const a=this._options.viewColumnLayout||1,l=this.grid.getActiveCell(),r=l?.cell??0,d=l?.row??0,h=this.grid.getUID()||"";let c=t.headerTitle||"";"function"==typeof this._options.onBeforeOpen&&this._options.onBeforeOpen(),this.hasRowSelectionEnabled()&&"auto-mass"===this._options.modalType&&this.grid.getSelectedRows&&((this.grid.getSelectedRows()||[]).length>0?(this._options.modalType="mass-selection",t?.headerTitleMassSelection&&(c=t?.headerTitleMassSelection)):(this._options.modalType="mass-update",t?.headerTitleMassUpdate&&(c=t?.headerTitleMassUpdate)));const m=this._options.modalType||"edit";if(!this.gridOptions.editable)return e({type:"error",code:"EDITABLE_GRID_REQUIRED",message:"Your grid must be editable in order to use the Composite Editor Modal."}),null;if(!this.gridOptions.enableCellNavigation)return e({type:"error",code:"ENABLE_CELL_NAVIGATION_REQUIRED",message:'Composite Editor requires the flag "enableCellNavigation" to be set to True in your Grid Options.'}),null;if(!(this.gridOptions.enableAddRow||"clone"!==m&&"create"!==m))return e({type:"error",code:"ENABLE_ADD_ROW_REQUIRED",message:'Composite Editor requires the flag "enableAddRow" to be set to True in your Grid Options when cloning/creating a new item.'}),null;if(!(l||"clone"!==m&&"edit"!==m))return e({type:"warning",code:"NO_RECORD_FOUND",message:"No records selected for edit or clone operation."}),null;{const t="mass-update"===m||"mass-selection"===m,i=t?{}:this.grid.getDataItem(d);this._originalDataContext=(0,n.extend)(!0,{},i),this._columnDefinitions=this.grid.getColumns();const l=this.hasRowSelectionEnabled()?this.grid.getSelectedRows():[],u=this.dataView?.getItemCount()??0;this._lastActiveRowNumber=d;const p=this.dataView.getAllSelectedIds(),g="create"===m?this.dataViewLength:d;if(!this.focusOnFirstColumnCellWithEditor(this._columnDefinitions,i,r,g,t))return null;if("edit"===m&&!i)return e({type:"warning",code:"ROW_NOT_EDITABLE",message:"Current row is not editable."}),null;if("mass-selection"===m&&l.length<1)return e({type:"warning",code:"ROW_SELECTION_REQUIRED",message:"You must select some rows before trying to apply new value(s)."}),null;let f=[];f=t?this._columnDefinitions.filter((t=>t.editorClass&&!0===t.editor?.massUpdate)):this._columnDefinitions.filter((t=>t.editorClass)),f.some((t=>void 0!==t.editor?.compositeEditorFormOrder))&&f.sort(((t,e)=>{const i=t?.editor?.compositeEditorFormOrder??1/0,o=e?.editor?.compositeEditorFormOrder??1/0;return(0,s.JXN)(i,o,s.Lo1.asc)}));const C=c.replace(/\{\{(.*?)\}\}/g,((t,e)=>(0,s.njg)(i,e))),_="auto"===a?this.autoCalculateLayoutColumnCount(f.length):a;this._modalElm=(0,s.fhB)("div",{className:`slick-editor-modal ${h}`});const v=(0,s.fhB)("div",{className:"slick-editor-modal-content"});if(this.gridOptions?.darkMode&&v.classList.add("slick-dark-mode"),!isNaN(a)&&+a>1||"auto"===a&&_>1){const t=2===_?"split-view":"triple-split-view";v.classList.add(t)}const E=(0,s.fhB)("div",{className:"slick-editor-modal-title"});this.grid.applyHtmlCode(E,C);const b=(0,s.fhB)("button",{type:"button",ariaLabel:"Close",textContent:"×",className:"close",dataset:{action:"close"}});this._options.showCloseButtonOutside&&(E?.classList?.add("outside"),b?.classList?.add("outside"));const y=(0,s.fhB)("div",{ariaLabel:"Close",className:"slick-editor-modal-header"});y.appendChild(E),y.appendChild(b);const w=(0,s.fhB)("div",{className:"slick-editor-modal-body"});this._modalBodyTopValidationElm=(0,s.fhB)("div",{className:"validation-summary",style:{display:"none"}},w);const S=(0,s.fhB)("div",{className:"slick-editor-modal-footer"}),O=(0,s.fhB)("button",{type:"button",ariaLabel:this.getLabelText("cancelButton","TEXT_CANCEL","Cancel"),className:"btn btn-cancel btn-default btn-sm",textContent:this.getLabelText("cancelButton","TEXT_CANCEL","Cancel"),dataset:{action:"cancel"}});let T="",V="";switch(m){case"clone":V=this.getLabelText("cloneButton","TEXT_CLONE","Clone");break;case"mass-update":const t=this.getLabelText("massUpdateStatus","TEXT_ALL_X_RECORDS_SELECTED","All {{x}} records selected");T=this.parseText(t,{x:u}),V=this.getLabelText("massUpdateButton","TEXT_APPLY_MASS_UPDATE","Mass Update");break;case"mass-selection":const e=this.getLabelText("massSelectionStatus","TEXT_X_OF_Y_MASS_SELECTED","{{x}} of {{y}} selected");T=this.parseText(e,{x:p.length,y:u}),V=this.getLabelText("massSelectionButton","TEXT_APPLY_TO_SELECTION","Update Selection");break;default:V=this.getLabelText("saveButton","TEXT_SAVE","Save")}const L=(0,s.fhB)("div",{className:"footer-status-text",textContent:T});this._modalSaveButtonElm=(0,s.fhB)("button",{type:"button",className:"btn btn-save btn-primary btn-sm",ariaLabel:V,textContent:V,dataset:{action:"create"===m||"edit"===m?"save":m,ariaLabel:V}});const R=(0,s.fhB)("div",{className:"footer-buttons"});"mass-update"!==m&&"mass-selection"!==m||S.appendChild(L),R.appendChild(O),R.appendChild(this._modalSaveButtonElm),S.appendChild(R),v.appendChild(y),v.appendChild(w),v.appendChild(S),this._modalElm.appendChild(v);for(const t of f)if(t.editorClass){const e=(0,s.fhB)("div",{className:`item-details-container editor-${t.id}`});1===_?e.classList.add("slick-col-medium-12"):e.classList.add("slick-col-medium-6","slick-col-xlarge-"+12/_);const i=(0,s.fhB)("div",{className:`item-details-label editor-${t.id}`});this.grid.applyHtmlCode(i,this.getColumnLabel(t)||"n/a");const o=(0,s.fhB)("div",{className:"item-details-editor-container slick-cell",dataset:{editorid:`${t.id}`}}),a=(0,s.fhB)("div",{className:`item-details-validation editor-${t.id}`});if(this._options?.showResetButtonOnEachEditor){const e=this.createEditorResetButtonElement(`${t.id}`);this._bindEventService.bind(e,"click",this.handleResetInputValue.bind(this)),i.appendChild(e)}e.appendChild(i),e.appendChild(o),e.appendChild(a),w.appendChild(e)}if(this._options?.showFormResetButton){const t=this.createFormResetButtonElement();this._bindEventService.bind(t,"click",this.handleResetFormClicked.bind(this)),w.appendChild(t)}document.body.appendChild(this._modalElm),document.body.classList.add("slick-modal-open"),this._bindEventService.bind(document.body,"click",this.handleBodyClicked.bind(this)),"function"==typeof this._options.onRendered&&this._options.onRendered(this._modalElm),this._editors={},this._editorContainers=f.map((t=>w.querySelector(`[data-editorid='${t.id}']`)))||[],this._compositeOptions={destroy:this.disposeComponent.bind(this),modalType:m,validationMsgPrefix:"* ",formValues:{},editors:this._editors};const x=new o(f,this._editorContainers,this._compositeOptions);this.grid.editActiveCell(x),this._bindEventService.bind(b,"click",this.cancelEditing.bind(this)),this._bindEventService.bind(O,"click",this.cancelEditing.bind(this)),this._bindEventService.bind(this._modalSaveButtonElm,"click",this.handleSaveClicked.bind(this)),this._bindEventService.bind(this._modalElm,"keydown",this.handleKeyDown.bind(this)),this._bindEventService.bind(this._modalElm,"focusout",this.validateCurrentEditor.bind(this)),this._bindEventService.bind(this._modalElm,"blur",this.validateCurrentEditor.bind(this)),this._eventHandler.subscribe(this.grid.onCompositeEditorChange,this.handleOnCompositeEditorChange.bind(this)),this._eventHandler.subscribe(this.grid.onAddNewRow,((t,e)=>{this._originalDataContext=this.insertNewItemInDataView(e.item)}))}return this}catch(t){this.dispose();const i="string"==typeof t?t:t?.message??t?.body?.message??"";return e({type:"error",code:"string"==typeof t?t:t?.status??t?.body?.status??i,message:i}),null}}async cancelEditing(){let t=!0;this.formValues&&Object.keys(this.formValues).length>0&&"function"==typeof this._options.onClose&&(t=await this._options.onClose()),t&&(this.grid.getEditController()?.cancelCurrentEdit(),"edit"!==this._options?.modalType&&"clone"!==this._options?.modalType||this.resetCurrentRowDataContext(),this.grid.setActiveRow(this._lastActiveRowNumber),this.dispose())}showValidationSummaryText(t,e=""){t&&""!==e?(this._modalBodyTopValidationElm.textContent=e,this._modalBodyTopValidationElm.style.display="block",this._modalBodyTopValidationElm.scrollIntoView?.(),this._modalSaveButtonElm.disabled=!1,this._modalSaveButtonElm.classList.remove("saving")):(this._modalBodyTopValidationElm.style.display="none",this._modalBodyTopValidationElm.textContent=e)}applySaveMassUpdateChanges(t,e,i=!0){const s=i?this.dataView.getItems():(0,n.extend)(!0,[],this.dataView.getItems());return Object.keys(t).forEach((e=>{e in t&&s.forEach((i=>{!(e in t)||void 0!==this._options?.validateMassUpdateChange&&!1===this._options.validateMassUpdateChange(e,i,t)||(i[e]=t[e])}))})),i&&(this.dataView.setItems(s,this.gridOptions.datasetIdPropertyName),this.grid.invalidate()),s}applySaveMassSelectionChanges(t,e,i=!0){const s=(e?.dataContextIds??[]).map((t=>this.dataView.getItemById(t))),o=i?s:(0,n.extend)(!0,[],s);return Object.keys(t).forEach((e=>{e in t&&o.forEach((i=>{!(e in t)||void 0!==this._options?.validateMassUpdateChange&&!1===this._options.validateMassUpdateChange(e,i,t)||(i[e]=t[e])}))})),i&&this.gridService?.updateItems(o),o}autoCalculateLayoutColumnCount(t){return t>=15?3:t>=8?2:1}createEditorResetButtonElement(t){const e=(0,s.fhB)("button",{type:"button",name:t,ariaLabel:"Reset",title:this._options?.labels?.resetFormButton??"Reset Form Input",className:"btn btn-xs btn-editor-reset"});if(this._options?.resetEditorButtonCssClass){const t=(0,n.classNameToList)(this._options?.resetEditorButtonCssClass);for(const i of t)e.classList.add(i)}return e}createFormResetButtonElement(){const t=(0,s.fhB)("div",{className:"reset-container"}),e=(0,s.fhB)("button",{type:"button",className:"btn btn-sm reset-form"},t);return(0,s.fhB)("span",{className:this._options?.resetFormButtonIconCssClass??""},e),e.appendChild(document.createTextNode(" Reset Form")),t}executeOnError(t){(this._options?.onError??l)(t)}async executeOnSave(t,e,i,s){try{if(this.showValidationSummaryText(!1,""),this.validateCompositeEditors().valid){if(this._modalSaveButtonElm.classList.add("saving"),this._modalSaveButtonElm.disabled=!0,"function"==typeof this._options?.onSave){const i="mass-update"===this._options.modalType||"mass-selection"===this._options.modalType;let o;i&&this._options?.shouldPreviewMassChangeDataset&&(o=t(this.formValues,this.getCurrentRowSelections(),!1));const a=i?o:s;await(this._options?.onSave(this.formValues,this.getCurrentRowSelections(),a))&&(t(this.formValues,this.getCurrentRowSelections()),e())}else t(this.formValues,this.getCurrentRowSelections()),e();"function"==typeof i&&i(),this.dispose()}}catch(t){const e="string"==typeof t?t:t?.message??t?.body?.message??"";this.showValidationSummaryText(!0,e)}}focusOnFirstColumnCellWithEditor(t,e,i,s,o){const a=o&&!this.gridOptions.enableAddRow&&s>=this.dataViewLength?this.dataViewLength-1:s;let n=i;const l=t[i].editorClass;let r=this.grid.getCellNode(a,i);if(!l||!r||!this.getActiveCellEditor(a,i)){if(n=this.findNextAvailableEditorColumnIndex(t,e,s,o),-1===n)return this.executeOnError({type:"error",code:"NO_EDITOR_FOUND",message:"We could not find any Editor in your Column Definition"}),!1;this.grid.setActiveCell(a,n,!1),o&&this.grid.setActiveRow(this.dataViewLength,n,!0)}return r=this.grid.getCellNode(a,n),!!r}findNextAvailableEditorColumnIndex(t,e,i,s){let o=-1;for(let a=0;a<t.length;a++){const n=t[a];if(n.editorClass&&(!s||s&&n.editor?.massUpdate)){const t=this.grid.onBeforeEditCell.notify({row:i,cell:a,item:e,column:n,grid:this.grid,target:"composite",compositeEditorOptions:this._compositeOptions}).getReturnValue();if(this.grid.setActiveCell(i,a,!1),!1!==t){o=a;break}}}return o}getColumnByObjectOrId(t){let e;return"object"==typeof t?e=t:"string"==typeof t&&(e=this._columnDefinitions.find((e=>e.id===t))),e}getActiveCellEditor(t,e){return this.grid.setActiveCell(t,e,!1),this.grid.getCellEditor()}getColumnLabel(t){const e=this.gridOptions.columnGroupSeparator||" - ";let i=t.nameCompositeEditor||t.name||"",s=t.columnGroup||"";if(this.gridOptions.enableTranslate&&this.translaterService){const e=t.nameCompositeEditorKey||t.nameKey;e&&(i=this.translaterService.translate(e)),t.columnGroupKey&&this.translaterService?.translate&&(s=this.translaterService.translate(t.columnGroupKey))}const o=s?`${s}${e}${i}`:i;return(0,n.getHtmlStringOutput)(o,"innerHTML")}getLabelText(t,e,i){const s={...this.gridOptions.compositeEditorOptions?.labels,...this._options?.labels};if(this.gridOptions?.enableTranslate&&this.translaterService?.translate&&s.hasOwnProperty(`${t}Key`)){const e=s[`${t}Key`];return this.translaterService.translate(e||"")}return s?.[t]??this._locales?.[e]??i}getCurrentRowSelections(){const t=this.dataView.getAllSelectedIds();return{gridRowIndexes:this.dataView.mapIdsToRows(t),dataContextIds:t}}handleBodyClicked(t){t.target?.classList?.contains("slick-editor-modal")&&"static"!==this._options?.backdrop&&this.dispose()}handleKeyDown(t){"Escape"===t.code?(this.cancelEditing(),t.stopPropagation(),t.preventDefault()):"Tab"===t.code&&this.validateCurrentEditor()}handleResetInputValue(t){const e=t.target.name,i=this._editors?.[e];"function"==typeof i?.reset&&i.reset(),delete this._formValues?.[e]}async handleMassSaving(t,e){if(this.formValues&&0!==Object.keys(this.formValues).length){const i="mass-update"===t?"applySaveMassUpdateChanges":"applySaveMassSelectionChanges";this.executeOnSave(this[i].bind(this),e.bind(this))}else this.executeOnError({type:"warning",code:"NO_CHANGES_DETECTED",message:"Sorry we could not detect any changes."})}handleOnCompositeEditorChange(t,e){const i=e.column?.id??"";this._formValues={...this._formValues,...e.formValues};const s=this._editors?.[i],o=s?.isValueTouched?.()??s?.isValueChanged?.()??!1;this._itemDataContext=s?.dataContext??{};const a=this._modalElm.querySelector(`[data-editorid='${i}']`);a?.classList&&(o?a.classList.add("modified"):a.classList.remove("modified")),this.validateCompositeEditors()}hasRowSelectionEnabled(){const t=this.grid.getSelectionModel();return!(!this.gridOptions.enableRowSelection&&!this.gridOptions.enableCheckboxSelector||!t)}handleResetFormClicked(){for(const t of Object.keys(this._editors)){const e=this._editors[t];e?.reset&&e.reset()}this._formValues=(0,n.emptyObject)(this._formValues)}async handleSaveClicked(){const t=this._options?.modalType;switch(t){case"mass-update":this.handleMassSaving(t,(()=>{this.grid.getEditController()?.cancelCurrentEdit(),this.grid.setActiveCell(0,0,!1),this._options.shouldClearRowSelectionAfterMassAction&&this.grid.setSelectedRows([])}));break;case"mass-selection":this.handleMassSaving(t,(()=>{this.grid.getEditController()?.cancelCurrentEdit(),this.grid.setActiveRow(this._lastActiveRowNumber),this._options.shouldClearRowSelectionAfterMassAction&&this.grid.setSelectedRows([])}));break;case"clone":const e={...this._originalDataContext,...this.formValues},i=()=>{this.grid.getEditController()?.cancelCurrentEdit(),this.grid.setActiveCell(0,0,!1)};this.executeOnSave(this.insertNewItemInDataView.bind(this,e),i,this.resetCurrentRowDataContext.bind(this),e);break;default:let s=this.grid.getEditController()?.commitCurrentEdit();if(s&&"function"==typeof this._options?.onSave){const e="create"===t?this._originalDataContext:this.grid.getDataItem(this._lastActiveRowNumber);s=await(this._options?.onSave(this.formValues,this.getCurrentRowSelections(),e))}s&&this.dispose()}}insertNewItemInDataView(t){const e=this.dataView?.getItemCount()||0,i=this._options.insertNewId??e+1;return t[this.gridOptions.datasetIdPropertyName||"id"]=i,this.dataView.getItemById(i)?this.executeOnError({type:"error",code:"ITEM_ALREADY_EXIST",message:`The item object which you are trying to add already exist with the same Id:: ${i}`}):this.gridService?.addItem(t,this._options.insertOptions),t}parseText(t,e){return t.replace(/\{\{(.*?)\}\}/g,((t,i)=>void 0!==e[i]?e[i]:t))}resetCurrentRowDataContext(){const t=this.gridOptions.datasetIdPropertyName||"id";this.grid.getData().updateItem(this._originalDataContext[t],this._originalDataContext)}validateCompositeEditors(t){let e={valid:!0,msg:""};const i=this.grid.getCellEditor();return i&&(e=i.validate(t)),e}validateCurrentEditor(){const t=this.grid.getCellEditor();t?.validate&&t.validate()}}}}]);