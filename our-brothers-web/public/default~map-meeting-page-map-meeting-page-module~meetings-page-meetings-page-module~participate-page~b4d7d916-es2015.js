(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~map-meeting-page-map-meeting-page-module~meetings-page-meetings-page-module~participate-page~b4d7d916"],{

/***/ "./src/app/shared/components/meetings/meetings-components.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/meetings/meetings-components.module.ts ***!
  \**************************************************************************/
/*! exports provided: MeetingsComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeetingsComponentsModule", function() { return MeetingsComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _meetings_list_meetings_list_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./meetings-list/meetings-list.module */ "./src/app/shared/components/meetings/meetings-list/meetings-list.module.ts");
/* harmony import */ var _meetings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./meetings.component */ "./src/app/shared/components/meetings/meetings.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _meetings_map_meetings_map_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./meetings-map/meetings-map.module */ "./src/app/shared/components/meetings/meetings-map/meetings-map.module.ts");
/* harmony import */ var _meetings_filters_meetings_filters_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./meetings-filters/meetings-filters.module */ "./src/app/shared/components/meetings/meetings-filters/meetings-filters.module.ts");







class MeetingsComponentsModule {
}
MeetingsComponentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MeetingsComponentsModule });
MeetingsComponentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MeetingsComponentsModule_Factory(t) { return new (t || MeetingsComponentsModule)(); }, imports: [[_meetings_list_meetings_list_module__WEBPACK_IMPORTED_MODULE_1__["MeetingsListModule"], _meetings_map_meetings_map_module__WEBPACK_IMPORTED_MODULE_4__["MeetingsMapModule"], _meetings_filters_meetings_filters_module__WEBPACK_IMPORTED_MODULE_5__["MeetingsFiltersModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MeetingsComponentsModule, { declarations: [_meetings_component__WEBPACK_IMPORTED_MODULE_2__["MeetingsComponent"]], imports: [_meetings_list_meetings_list_module__WEBPACK_IMPORTED_MODULE_1__["MeetingsListModule"], _meetings_map_meetings_map_module__WEBPACK_IMPORTED_MODULE_4__["MeetingsMapModule"], _meetings_filters_meetings_filters_module__WEBPACK_IMPORTED_MODULE_5__["MeetingsFiltersModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]], exports: [_meetings_component__WEBPACK_IMPORTED_MODULE_2__["MeetingsComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MeetingsComponentsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_meetings_list_meetings_list_module__WEBPACK_IMPORTED_MODULE_1__["MeetingsListModule"], _meetings_map_meetings_map_module__WEBPACK_IMPORTED_MODULE_4__["MeetingsMapModule"], _meetings_filters_meetings_filters_module__WEBPACK_IMPORTED_MODULE_5__["MeetingsFiltersModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
                declarations: [_meetings_component__WEBPACK_IMPORTED_MODULE_2__["MeetingsComponent"]],
                exports: [_meetings_component__WEBPACK_IMPORTED_MODULE_2__["MeetingsComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/components/meetings/meetings-filters/meetings-filters.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/shared/components/meetings/meetings-filters/meetings-filters.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: MeetingsFiltersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeetingsFiltersComponent", function() { return MeetingsFiltersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _free_text_filter_free_text_filter_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../free-text-filter/free-text-filter.component */ "./src/app/shared/components/free-text-filter/free-text-filter.component.ts");
/* harmony import */ var _view_toggle_view_toggle_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../view-toggle/view-toggle.component */ "./src/app/shared/components/view-toggle/view-toggle.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





const _c0 = function (a0) { return { map: a0 }; };
class MeetingsFiltersComponent {
    constructor() {
        this.viewChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.filterChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
}
MeetingsFiltersComponent.ɵfac = function MeetingsFiltersComponent_Factory(t) { return new (t || MeetingsFiltersComponent)(); };
MeetingsFiltersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MeetingsFiltersComponent, selectors: [["app-meetings-filters"]], inputs: { view: "view", filter: "filter" }, outputs: { viewChange: "viewChange", filterChange: "filterChange" }, decls: 4, vars: 5, consts: [[1, "free-text-filter-col"], [1, "free-text-filter", 3, "filter", "filterChange"], [1, "view-toggle-col"], [1, "view-toggle", 3, "ngClass", "view", "viewChange"]], template: function MeetingsFiltersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-free-text-filter", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("filterChange", function MeetingsFiltersComponent_Template_app_free_text_filter_filterChange_1_listener($event) { return ctx.filter = $event; })("filterChange", function MeetingsFiltersComponent_Template_app_free_text_filter_filterChange_1_listener($event) { return ctx.filterChange.emit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-view-toggle", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("viewChange", function MeetingsFiltersComponent_Template_app_view_toggle_viewChange_3_listener($event) { return ctx.viewChange.emit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("filter", ctx.filter);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.view === "map"))("view", ctx.view);
    } }, directives: [_free_text_filter_free_text_filter_component__WEBPACK_IMPORTED_MODULE_1__["FreeTextFilterComponent"], _view_toggle_view_toggle_component__WEBPACK_IMPORTED_MODULE_2__["ViewToggleComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n[_nghost-%COMP%]   .free-text-filter-col[_ngcontent-%COMP%] {\n  flex: 1;\n}\n@media only screen and (max-width: 650px) {\n  [_nghost-%COMP%]   .free-text-filter-col[_ngcontent-%COMP%] {\n    padding: 20px;\n    padding-left: 5px;\n  }\n}\n[_nghost-%COMP%]   .free-text-filter-col[_ngcontent-%COMP%]   .free-text-filter[_ngcontent-%COMP%] {\n  border-radius: 0px;\n}\n[_nghost-%COMP%]   .view-toggle-col[_ngcontent-%COMP%] {\n  flex: 0;\n  padding: 15px;\n  padding-left: 0;\n}\n@media only screen and (max-width: 650px) {\n  [_nghost-%COMP%]   .view-toggle-col[_ngcontent-%COMP%] {\n    padding: 20px;\n    padding-right: 0;\n  }\n  [_nghost-%COMP%]   .view-toggle-col[_ngcontent-%COMP%]   .view-toggle.map[_ngcontent-%COMP%] {\n    position: fixed;\n    z-index: 9999999;\n    bottom: 10px;\n    left: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbWVldGluZ3MvbWVldGluZ3MtZmlsdGVycy9DOlxcVXNlcnNcXFRlaGlsYVxcRGVza3RvcFxcZ29vZC1wcm9qZWN0XFxvdXJicm90aGVycy1vdXJicm90aGVyc1xcb3VyLWJyb3RoZXJzLXdlYi9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxtZWV0aW5nc1xcbWVldGluZ3MtZmlsdGVyc1xcbWVldGluZ3MtZmlsdGVycy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbWVldGluZ3MvbWVldGluZ3MtZmlsdGVycy9tZWV0aW5ncy1maWx0ZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FDQ0Y7QURDRTtFQUNFLE9BQUE7QUNDSjtBRENJO0VBSEY7SUFJSSxhQUFBO0lBQ0EsaUJBQUE7RUNFSjtBQUNGO0FEQUk7RUFDRSxrQkFBQTtBQ0VOO0FERUU7RUFDRSxPQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUNBSjtBREVJO0VBTEY7SUFNSSxhQUFBO0lBQ0EsZ0JBQUE7RUNDSjtFRENJO0lBQ0UsZUFBQTtJQUNBLGdCQUFBO0lBQ0EsWUFBQTtJQUNBLFVBQUE7RUNDTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbWVldGluZ3MvbWVldGluZ3MtZmlsdGVycy9tZWV0aW5ncy1maWx0ZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgLmZyZWUtdGV4dC1maWx0ZXItY29sIHtcclxuICAgIGZsZXg6IDE7XHJcblxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NTBweCkge1xyXG4gICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgIH1cclxuXHJcbiAgICAuZnJlZS10ZXh0LWZpbHRlciB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC52aWV3LXRvZ2dsZS1jb2wge1xyXG4gICAgZmxleDogMDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcblxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NTBweCkge1xyXG4gICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG5cclxuICAgICAgLnZpZXctdG9nZ2xlLm1hcCB7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIHotaW5kZXg6IDk5OTk5OTk7XHJcbiAgICAgICAgYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIGxlZnQ6IDEwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuOmhvc3QgLmZyZWUtdGV4dC1maWx0ZXItY29sIHtcbiAgZmxleDogMTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcbiAgOmhvc3QgLmZyZWUtdGV4dC1maWx0ZXItY29sIHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICB9XG59XG46aG9zdCAuZnJlZS10ZXh0LWZpbHRlci1jb2wgLmZyZWUtdGV4dC1maWx0ZXIge1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG59XG46aG9zdCAudmlldy10b2dnbGUtY29sIHtcbiAgZmxleDogMDtcbiAgcGFkZGluZzogMTVweDtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NTBweCkge1xuICA6aG9zdCAudmlldy10b2dnbGUtY29sIHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gIH1cbiAgOmhvc3QgLnZpZXctdG9nZ2xlLWNvbCAudmlldy10b2dnbGUubWFwIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogOTk5OTk5OTtcbiAgICBib3R0b206IDEwcHg7XG4gICAgbGVmdDogMTBweDtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MeetingsFiltersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-meetings-filters',
                templateUrl: './meetings-filters.component.html',
                styleUrls: ['./meetings-filters.component.scss']
            }]
    }], function () { return []; }, { view: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], viewChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], filter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], filterChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/components/meetings/meetings-filters/meetings-filters.module.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/shared/components/meetings/meetings-filters/meetings-filters.module.ts ***!
  \****************************************************************************************/
/*! exports provided: MeetingsFiltersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeetingsFiltersModule", function() { return MeetingsFiltersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _meetings_filters_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./meetings-filters.component */ "./src/app/shared/components/meetings/meetings-filters/meetings-filters.component.ts");
/* harmony import */ var _free_text_filter_free_text_filter_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../free-text-filter/free-text-filter.module */ "./src/app/shared/components/free-text-filter/free-text-filter.module.ts");
/* harmony import */ var _view_toggle_view_toggle_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../view-toggle/view-toggle.module */ "./src/app/shared/components/view-toggle/view-toggle.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






class MeetingsFiltersModule {
}
MeetingsFiltersModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MeetingsFiltersModule });
MeetingsFiltersModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MeetingsFiltersModule_Factory(t) { return new (t || MeetingsFiltersModule)(); }, imports: [[_view_toggle_view_toggle_module__WEBPACK_IMPORTED_MODULE_3__["ViewToggleModule"], _free_text_filter_free_text_filter_module__WEBPACK_IMPORTED_MODULE_2__["FreeTextFilterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MeetingsFiltersModule, { declarations: [_meetings_filters_component__WEBPACK_IMPORTED_MODULE_1__["MeetingsFiltersComponent"]], imports: [_view_toggle_view_toggle_module__WEBPACK_IMPORTED_MODULE_3__["ViewToggleModule"], _free_text_filter_free_text_filter_module__WEBPACK_IMPORTED_MODULE_2__["FreeTextFilterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]], exports: [_meetings_filters_component__WEBPACK_IMPORTED_MODULE_1__["MeetingsFiltersComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MeetingsFiltersModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_meetings_filters_component__WEBPACK_IMPORTED_MODULE_1__["MeetingsFiltersComponent"]],
                exports: [_meetings_filters_component__WEBPACK_IMPORTED_MODULE_1__["MeetingsFiltersComponent"]],
                imports: [_view_toggle_view_toggle_module__WEBPACK_IMPORTED_MODULE_3__["ViewToggleModule"], _free_text_filter_free_text_filter_module__WEBPACK_IMPORTED_MODULE_2__["FreeTextFilterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/components/meetings/meetings-map/meetings-map-guide/meetings-map-guide.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/shared/components/meetings/meetings-map/meetings-map-guide/meetings-map-guide.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: MeetingsMapGuideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeetingsMapGuideComponent", function() { return MeetingsMapGuideComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function MeetingsMapGuideComponent_div_0_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MeetingsMapGuideComponent_div_0_div_8_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r126); const ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r125.next(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u05D4\u05D1\u05D0 >>");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MeetingsMapGuideComponent_div_0_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r128 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MeetingsMapGuideComponent_div_0_div_9_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r128); const ctx_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r127.prev(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " << \u05D4\u05E7\u05D5\u05D3\u05DD ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a1) { return { indicator: true, active: a1 }; };
function MeetingsMapGuideComponent_div_0_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 13);
} if (rf & 2) {
    const i_r130 = ctx.index;
    const ctx_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, i_r130 === ctx_r123.stage));
} }
function MeetingsMapGuideComponent_div_0_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r132 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MeetingsMapGuideComponent_div_0_div_11_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r132); const ctx_r131 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r131.onGuideCompleted(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u05D4\u05EA\u05D7\u05DC");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MeetingsMapGuideComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \u05DC\u05E4\u05E0\u05D9\u05DA \u05DE\u05E4\u05D4 \u05E9\u05DC \u05D4\u05DE\u05E7\u05D5\u05DE\u05D5\u05EA \u05D1\u05D4\u05DD \u05DE\u05EA\u05E7\u05D9\u05D9\u05DE\u05D9\u05DD \u05DE\u05E4\u05D2\u05E9\u05D9\u05DD: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MeetingsMapGuideComponent_div_0_div_8_Template, 2, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MeetingsMapGuideComponent_div_0_div_9_Template, 2, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MeetingsMapGuideComponent_div_0_div_10_Template, 1, 3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MeetingsMapGuideComponent_div_0_div_11_Template, 2, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r120.stages[ctx_r120.stage], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r120.stage < ctx_r120.stages.length - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r120.stage > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r120.stages);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r120.stage >= ctx_r120.stages.length - 1);
} }
class MeetingsMapGuideComponent {
    constructor() {
        this.guideCompleted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.stage = 0;
        this.stages = [
            'ברשותך אפשרות לחיפוש ידני מתחת',
            'בחר/י את האזור הרצוי - מרכז, צפון ודרום',
            'בסיום הבחירה לחצ/י על כפתור "שיבוץ"'
        ];
        this.started = false;
    }
    next() {
        if (this.stage < this.stages.length - 1) {
            this.stage++;
        }
    }
    prev() {
        if (this.stage > 0) {
            this.stage--;
        }
    }
    onGuideCompleted() {
        this.started = true;
        this.guideCompleted.emit();
    }
}
MeetingsMapGuideComponent.ɵfac = function MeetingsMapGuideComponent_Factory(t) { return new (t || MeetingsMapGuideComponent)(); };
MeetingsMapGuideComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MeetingsMapGuideComponent, selectors: [["app-meetings-map-guide"]], outputs: { guideCompleted: "guideCompleted" }, decls: 1, vars: 1, consts: [["class", "blocker", 4, "ngIf"], [1, "blocker"], [1, "guide-container"], [1, "stages"], [1, "title"], [1, "stage"], [1, "indicators"], ["class", "next", 3, "click", 4, "ngIf"], ["class", "previous", 3, "click", 4, "ngIf"], [3, "ngClass", 4, "ngFor", "ngForOf"], ["class", "start-button", 3, "click", 4, "ngIf"], [1, "next", 3, "click"], [1, "previous", 3, "click"], [3, "ngClass"], [1, "start-button", 3, "click"]], template: function MeetingsMapGuideComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MeetingsMapGuideComponent_div_0_Template, 12, 5, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.started);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: [".guide-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-family: \"arbel\";\n  font-size: 22px;\n  text-align: center;\n  border-radius: 10px;\n  border: 10px solid white;\n  background-color: white;\n  box-shadow: 0px 0px 20px 10px rgba(1, 1, 1, 0.15);\n}\n.guide-container[_ngcontent-%COMP%]   .stages[_ngcontent-%COMP%] {\n  width: 360px;\n  padding: 30px 25px;\n}\n@media only screen and (max-width: 400px) {\n  .guide-container[_ngcontent-%COMP%]   .stages[_ngcontent-%COMP%] {\n    width: 325px;\n    padding: 15px 10px;\n  }\n}\n.guide-container[_ngcontent-%COMP%]   .stages[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: #00a099;\n  letter-spacing: 5px;\n}\n.guide-container[_ngcontent-%COMP%]   .stages[_ngcontent-%COMP%]   .stage[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  color: #818181;\n  letter-spacing: 5px;\n}\n.guide-container[_ngcontent-%COMP%]   .indicators[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.guide-container[_ngcontent-%COMP%]   .indicators[_ngcontent-%COMP%]   .next[_ngcontent-%COMP%], .guide-container[_ngcontent-%COMP%]   .indicators[_ngcontent-%COMP%]   .previous[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: absolute;\n  color: #818181;\n  font-size: 17px;\n  letter-spacing: 1px;\n  border-bottom: 1px solid #818181;\n}\n.guide-container[_ngcontent-%COMP%]   .indicators[_ngcontent-%COMP%]   .next[_ngcontent-%COMP%] {\n  left: 15px;\n}\n.guide-container[_ngcontent-%COMP%]   .indicators[_ngcontent-%COMP%]   .previous[_ngcontent-%COMP%] {\n  right: 15px;\n}\n.guide-container[_ngcontent-%COMP%]   .indicators[_ngcontent-%COMP%]   .indicator[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  margin: 0 5px;\n  border: 1px solid #00a099;\n  border-radius: 50%;\n  background-color: white;\n}\n.guide-container[_ngcontent-%COMP%]   .indicators[_ngcontent-%COMP%]   .indicator.active[_ngcontent-%COMP%] {\n  background-color: #00a099;\n}\n.guide-container[_ngcontent-%COMP%]   .start-button[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding: 5px 40px;\n  position: absolute;\n  bottom: -75px;\n  left: 50%;\n  transform: translateX(-50%);\n  color: white;\n  background-color: #00a099;\n  letter-spacing: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbWVldGluZ3MvbWVldGluZ3MtbWFwL21lZXRpbmdzLW1hcC1ndWlkZS9DOlxcVXNlcnNcXFRlaGlsYVxcRGVza3RvcFxcZ29vZC1wcm9qZWN0XFxvdXJicm90aGVycy1vdXJicm90aGVyc1xcb3VyLWJyb3RoZXJzLXdlYi9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxtZWV0aW5nc1xcbWVldGluZ3MtbWFwXFxtZWV0aW5ncy1tYXAtZ3VpZGVcXG1lZXRpbmdzLW1hcC1ndWlkZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbWVldGluZ3MvbWVldGluZ3MtbWFwL21lZXRpbmdzLW1hcC1ndWlkZS9tZWV0aW5ncy1tYXAtZ3VpZGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFFQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLGlEQUFBO0FDQUY7QURFRTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQ0FKO0FERUk7RUFKRjtJQUtJLFlBQUE7SUFDQSxrQkFBQTtFQ0NKO0FBQ0Y7QURDSTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtBQ0NOO0FERUk7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ0FOO0FESUU7RUFDRSxnQkFBQTtBQ0ZKO0FESUk7O0VBRUUsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0FDRk47QURLSTtFQUNFLFVBQUE7QUNITjtBRE1JO0VBQ0UsV0FBQTtBQ0pOO0FET0k7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQ0xOO0FET007RUFDRSx5QkFBQTtBQ0xSO0FEVUU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQ1JKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbWVldGluZ3MvbWVldGluZ3MtbWFwL21lZXRpbmdzLW1hcC1ndWlkZS9tZWV0aW5ncy1tYXAtZ3VpZGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3VpZGUtY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG5cclxuICBmb250LWZhbWlseTogJ2FyYmVsJztcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYm9yZGVyOiAxMHB4IHNvbGlkIHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCAxMHB4IHJnYmEoMSwgMSwgMSwgMC4xNSk7XHJcblxyXG4gIC5zdGFnZXMge1xyXG4gICAgd2lkdGg6IDM2MHB4O1xyXG4gICAgcGFkZGluZzogMzBweCAyNXB4O1xyXG5cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcclxuICAgICAgd2lkdGg6IDMyNXB4O1xyXG4gICAgICBwYWRkaW5nOiAxNXB4IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnRpdGxlIHtcclxuICAgICAgY29sb3I6IHJnYigwLCAxNjAsIDE1Myk7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnN0YWdlIHtcclxuICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgY29sb3I6IHJnYigxMjksIDEyOSwgMTI5KTtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDVweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5pbmRpY2F0b3JzIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcblxyXG4gICAgLm5leHQsXHJcbiAgICAucHJldmlvdXMge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgY29sb3I6IHJnYigxMjksIDEyOSwgMTI5KTtcclxuICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDEyOSwgMTI5LCAxMjkpO1xyXG4gICAgfVxyXG5cclxuICAgIC5uZXh0IHtcclxuICAgICAgbGVmdDogMTVweDtcclxuICAgIH1cclxuXHJcbiAgICAucHJldmlvdXMge1xyXG4gICAgICByaWdodDogMTVweDtcclxuICAgIH1cclxuXHJcbiAgICAuaW5kaWNhdG9yIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICB3aWR0aDogMTBweDtcclxuICAgICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgICBtYXJnaW46IDAgNXB4O1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMCwgMTYwLCAxNTMpO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cclxuICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAxNjAsIDE1Myk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5zdGFydC1idXR0b24ge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcGFkZGluZzogNXB4IDQwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IC03NXB4O1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDE2MCwgMTUzKTtcclxuICAgIGxldHRlci1zcGFjaW5nOiA1cHg7XHJcbiAgfVxyXG59XHJcbiIsIi5ndWlkZS1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBmb250LWZhbWlseTogXCJhcmJlbFwiO1xuICBmb250LXNpemU6IDIycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm9yZGVyOiAxMHB4IHNvbGlkIHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IDEwcHggcmdiYSgxLCAxLCAxLCAwLjE1KTtcbn1cbi5ndWlkZS1jb250YWluZXIgLnN0YWdlcyB7XG4gIHdpZHRoOiAzNjBweDtcbiAgcGFkZGluZzogMzBweCAyNXB4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xuICAuZ3VpZGUtY29udGFpbmVyIC5zdGFnZXMge1xuICAgIHdpZHRoOiAzMjVweDtcbiAgICBwYWRkaW5nOiAxNXB4IDEwcHg7XG4gIH1cbn1cbi5ndWlkZS1jb250YWluZXIgLnN0YWdlcyAudGl0bGUge1xuICBjb2xvcjogIzAwYTA5OTtcbiAgbGV0dGVyLXNwYWNpbmc6IDVweDtcbn1cbi5ndWlkZS1jb250YWluZXIgLnN0YWdlcyAuc3RhZ2Uge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBjb2xvcjogIzgxODE4MTtcbiAgbGV0dGVyLXNwYWNpbmc6IDVweDtcbn1cbi5ndWlkZS1jb250YWluZXIgLmluZGljYXRvcnMge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLmd1aWRlLWNvbnRhaW5lciAuaW5kaWNhdG9ycyAubmV4dCxcbi5ndWlkZS1jb250YWluZXIgLmluZGljYXRvcnMgLnByZXZpb3VzIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbG9yOiAjODE4MTgxO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjODE4MTgxO1xufVxuLmd1aWRlLWNvbnRhaW5lciAuaW5kaWNhdG9ycyAubmV4dCB7XG4gIGxlZnQ6IDE1cHg7XG59XG4uZ3VpZGUtY29udGFpbmVyIC5pbmRpY2F0b3JzIC5wcmV2aW91cyB7XG4gIHJpZ2h0OiAxNXB4O1xufVxuLmd1aWRlLWNvbnRhaW5lciAuaW5kaWNhdG9ycyAuaW5kaWNhdG9yIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBtYXJnaW46IDAgNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDBhMDk5O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLmd1aWRlLWNvbnRhaW5lciAuaW5kaWNhdG9ycyAuaW5kaWNhdG9yLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGEwOTk7XG59XG4uZ3VpZGUtY29udGFpbmVyIC5zdGFydC1idXR0b24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDVweCA0MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTc1cHg7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGEwOTk7XG4gIGxldHRlci1zcGFjaW5nOiA1cHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MeetingsMapGuideComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-meetings-map-guide',
                templateUrl: './meetings-map-guide.component.html',
                styleUrls: ['./meetings-map-guide.component.scss']
            }]
    }], null, { guideCompleted: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/components/meetings/meetings-map/meetings-map-legend/meetings-map-legend.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/shared/components/meetings/meetings-map/meetings-map-legend/meetings-map-legend.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: MeetingsMapLegendComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeetingsMapLegendComponent", function() { return MeetingsMapLegendComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! models */ "../types/models/index.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function MeetingsMapLegendComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const legend_r119 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", legend_r119.iconUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](legend_r119.label);
} }
class MeetingsMapLegendComponent {
    constructor() {
        this.legends = [];
    }
    ngOnChanges(changes) {
        const isBereaved = this.user && this.user.role === models__WEBPACK_IMPORTED_MODULE_1__["UserRole"].bereaved;
        this.legends = [
            {
                label: `אדום - ${isBereaved ? 'אח/ות משובץ' : 'תפוסה מלאה'}`,
                iconUrl: '/assets/img/map/meetings-map-red.svg'
            }
        ];
        if (!isBereaved) {
            this.legends.push({
                label: 'אפור - סגור למוזמנים בלבד',
                iconUrl: '/assets/img/map/meetings-map-grey.svg'
            });
        }
        this.legends.push({
            label: `ירוק - ${isBereaved ? 'פנוי' : 'פתוח לקהל'}`,
            iconUrl: '/assets/img/map/meetings-map-green.svg'
        }, {
            label: 'כחול - השיבוץ שלי',
            iconUrl: '/assets/img/map/meetings-map-blue.svg'
        });
    }
}
MeetingsMapLegendComponent.ɵfac = function MeetingsMapLegendComponent_Factory(t) { return new (t || MeetingsMapLegendComponent)(); };
MeetingsMapLegendComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MeetingsMapLegendComponent, selectors: [["app-meetings-map-legend"]], inputs: { user: "user" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]()], decls: 3, vars: 1, consts: [[1, "title"], ["class", "row", 4, "ngFor", "ngForOf"], [1, "row"], [1, "icon", 3, "src"], [1, "label"]], template: function MeetingsMapLegendComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "strong", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u05DE\u05E7\u05E8\u05D0:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MeetingsMapLegendComponent_div_2_Template, 4, 2, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.legends);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["[_nghost-%COMP%] {\n  position: absolute;\n  z-index: 1;\n  top: 20px;\n  left: 20px;\n  padding: 10px 20px;\n  background-color: white;\n  box-shadow: 0px 0px 10px 5px rgba(1, 1, 1, 0.15);\n}\n@media only screen and (max-width: 400px) {\n  [_nghost-%COMP%] {\n    padding: 5px 10px;\n  }\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-family: \"arbel\";\n  font-size: 18px;\n}\n[_nghost-%COMP%]   .icon[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 25px;\n  height: 25px;\n  vertical-align: middle;\n}\n[_nghost-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-family: \"Heebo\";\n  display: inline-block;\n  font-size: 18px;\n  vertical-align: middle;\n  color: #818181;\n}\n@media only screen and (max-width: 400px) {\n  [_nghost-%COMP%]   .label[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbWVldGluZ3MvbWVldGluZ3MtbWFwL21lZXRpbmdzLW1hcC1sZWdlbmQvQzpcXFVzZXJzXFxUZWhpbGFcXERlc2t0b3BcXGdvb2QtcHJvamVjdFxcb3VyYnJvdGhlcnMtb3VyYnJvdGhlcnNcXG91ci1icm90aGVycy13ZWIvc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50c1xcbWVldGluZ3NcXG1lZXRpbmdzLW1hcFxcbWVldGluZ3MtbWFwLWxlZ2VuZFxcbWVldGluZ3MtbWFwLWxlZ2VuZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbWVldGluZ3MvbWVldGluZ3MtbWFwL21lZXRpbmdzLW1hcC1sZWdlbmQvbWVldGluZ3MtbWFwLWxlZ2VuZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdEQUFBO0FDQ0Y7QURDRTtFQVRGO0lBVUksaUJBQUE7RUNFRjtBQUNGO0FEQUU7RUFDRSxvQkFBQTtFQUNBLGVBQUE7QUNFSjtBRENFO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FDQ0o7QURFRTtFQUNFLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FDQUo7QURFSTtFQVBGO0lBUUksZUFBQTtFQ0NKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9tZWV0aW5ncy9tZWV0aW5ncy1tYXAvbWVldGluZ3MtbWFwLWxlZ2VuZC9tZWV0aW5ncy1tYXAtbGVnZW5kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAxO1xyXG4gIHRvcDogMjBweDtcclxuICBsZWZ0OiAyMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDVweCByZ2JhKDEsIDEsIDEsIDAuMTUpO1xyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICB9XHJcblxyXG4gIC50aXRsZSB7XHJcbiAgICBmb250LWZhbWlseTogJ2FyYmVsJztcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcblxyXG4gIC5pY29uIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICB9XHJcblxyXG4gIC5sYWJlbCB7XHJcbiAgICBmb250LWZhbWlseTogJ0hlZWJvJztcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBjb2xvcjogcmdiKDEyOSwgMTI5LCAxMjkpO1xyXG5cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI6aG9zdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbiAgdG9wOiAyMHB4O1xuICBsZWZ0OiAyMHB4O1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggNXB4IHJnYmEoMSwgMSwgMSwgMC4xNSk7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XG4gIDpob3N0IHtcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgfVxufVxuOmhvc3QgLnRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiYXJiZWxcIjtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuOmhvc3QgLmljb24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG46aG9zdCAubGFiZWwge1xuICBmb250LWZhbWlseTogXCJIZWVib1wiO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgY29sb3I6ICM4MTgxODE7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XG4gIDpob3N0IC5sYWJlbCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MeetingsMapLegendComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-meetings-map-legend',
                templateUrl: './meetings-map-legend.component.html',
                styleUrls: ['./meetings-map-legend.component.scss']
            }]
    }], function () { return []; }, { user: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/components/meetings/meetings-map/meetings-map-meeting/meetings-map-meeting.component.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/shared/components/meetings/meetings-map/meetings-map-meeting/meetings-map-meeting.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: MeetingsMapMeetingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeetingsMapMeetingComponent", function() { return MeetingsMapMeetingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../constants */ "./src/app/shared/constants.ts");
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/utils.service */ "./src/app/shared/services/utils.service.ts");
/* harmony import */ var _services_participations_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/participations.service */ "./src/app/shared/services/participations.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _meeting_join_button_meeting_join_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../meeting-join-button/meeting-join-button.component */ "./src/app/shared/components/meeting-join-button/meeting-join-button.component.ts");








function MeetingsMapMeetingComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u05E7\u05D4\u05DC \u05D9\u05E2\u05D3: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r111.utilsService.meetingAudienceLabels[ctx_r111.meeting.audience]);
} }
function MeetingsMapMeetingComponent_div_15_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u05E9\u05DD \u05D4\u05D7\u05DC\u05DC: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const slain_r115 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](slain_r115.firstName + " " + slain_r115.lastName + " \u05D6\"\u05DC");
} }
function MeetingsMapMeetingComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u05E9\u05DD \u05D4\u05D0\u05D7/\u05D5\u05EA: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MeetingsMapMeetingComponent_div_15_div_6_Template, 6, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r112.meeting.bereaved.firstName + " " + ctx_r112.meeting.bereaved.lastName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r112.meeting.bereaved.slains);
} }
function MeetingsMapMeetingComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r117 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-meeting-join-button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("join", function MeetingsMapMeetingComponent_div_16_Template_app_meeting_join_button_join_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r117); const ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r116.joinMeeting.emit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("user", ctx_r113.user)("meeting", ctx_r113.meeting);
} }
class MeetingsMapMeetingComponent {
    constructor(utilsService, participationsService) {
        this.utilsService = utilsService;
        this.participationsService = participationsService;
        this.joinMeeting = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.year = _constants__WEBPACK_IMPORTED_MODULE_1__["MEMORIAL_YEAR"];
    }
}
MeetingsMapMeetingComponent.ɵfac = function MeetingsMapMeetingComponent_Factory(t) { return new (t || MeetingsMapMeetingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_utils_service__WEBPACK_IMPORTED_MODULE_2__["UtilsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_participations_service__WEBPACK_IMPORTED_MODULE_3__["ParticipationsService"])); };
MeetingsMapMeetingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MeetingsMapMeetingComponent, selectors: [["app-meetings-map-meeting"]], inputs: { meeting: "meeting", user: "user" }, outputs: { joinMeeting: "joinMeeting" }, decls: 17, vars: 7, consts: [[1, "title"], [3, "routerLink"], [1, "body"], [1, "row"], ["class", "row", 4, "ngIf"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [3, "user", "meeting", "join"]], template: function MeetingsMapMeetingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u05DB\u05EA\u05D5\u05D1\u05EA: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u05DE\u05E1\u05E4\u05E8 \u05DE\u05E9\u05EA\u05EA\u05E4\u05D9\u05DD: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, MeetingsMapMeetingComponent_div_14_Template, 5, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, MeetingsMapMeetingComponent_div_15_Template, 7, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, MeetingsMapMeetingComponent_div_16_Template, 2, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/meetings/" + ctx.year + "/" + ctx.meeting.hostId + "/" + ctx.meeting.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.meeting.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.meeting.address.formattedAddress);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.meeting.capacity);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.meeting.audience == null ? null : ctx.meeting.audience.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.meeting.bereaved);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.participationsService.isUserHaveAllDetails(ctx.user));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _meeting_join_button_meeting_join_button_component__WEBPACK_IMPORTED_MODULE_6__["MeetingJoinButtonComponent"]], styles: [".title[_ngcontent-%COMP%] {\n  font-family: \"arbel\";\n  font-size: 22px;\n  text-align: center;\n  color: #00736d;\n}\n\n.body[_ngcontent-%COMP%] {\n  font-family: \"Heebo\";\n  font-size: 18px;\n  color: #818181;\n}\n\n.body[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n\n.body[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .join-button[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 30px;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbWVldGluZ3MvbWVldGluZ3MtbWFwL21lZXRpbmdzLW1hcC1tZWV0aW5nL0M6XFxVc2Vyc1xcVGVoaWxhXFxEZXNrdG9wXFxnb29kLXByb2plY3RcXG91cmJyb3RoZXJzLW91cmJyb3RoZXJzXFxvdXItYnJvdGhlcnMtd2ViL3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXG1lZXRpbmdzXFxtZWV0aW5ncy1tYXBcXG1lZXRpbmdzLW1hcC1tZWV0aW5nXFxtZWV0aW5ncy1tYXAtbWVldGluZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbWVldGluZ3MvbWVldGluZ3MtbWFwL21lZXRpbmdzLW1hcC1tZWV0aW5nL21lZXRpbmdzLW1hcC1tZWV0aW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FEQ0U7RUFDRSxlQUFBO0FDQ0o7O0FEQ0k7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNDTiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL21lZXRpbmdzL21lZXRpbmdzLW1hcC9tZWV0aW5ncy1tYXAtbWVldGluZy9tZWV0aW5ncy1tYXAtbWVldGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZSB7XHJcbiAgZm9udC1mYW1pbHk6ICdhcmJlbCc7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogcmdiKDAsIDExNSwgMTA5KTtcclxufVxyXG5cclxuLmJvZHkge1xyXG4gIGZvbnQtZmFtaWx5OiAnSGVlYm8nO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBjb2xvcjogcmdiKDEyOSwgMTI5LCAxMjkpO1xyXG5cclxuICAucm93IHtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuXHJcbiAgICAuam9pbi1idXR0b24ge1xyXG4gICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIudGl0bGUge1xuICBmb250LWZhbWlseTogXCJhcmJlbFwiO1xuICBmb250LXNpemU6IDIycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMwMDczNmQ7XG59XG5cbi5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IFwiSGVlYm9cIjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogIzgxODE4MTtcbn1cbi5ib2R5IC5yb3cge1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG4uYm9keSAucm93IC5qb2luLWJ1dHRvbiB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBtYXJnaW46IGF1dG87XG59Il19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MeetingsMapMeetingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-meetings-map-meeting',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                templateUrl: './meetings-map-meeting.component.html',
                styleUrls: ['./meetings-map-meeting.component.scss']
            }]
    }], function () { return [{ type: _services_utils_service__WEBPACK_IMPORTED_MODULE_2__["UtilsService"] }, { type: _services_participations_service__WEBPACK_IMPORTED_MODULE_3__["ParticipationsService"] }]; }, { meeting: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], user: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], joinMeeting: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/components/meetings/meetings-map/meetings-map-navigator/meetings-map-navigator.component.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/shared/components/meetings/meetings-map/meetings-map-navigator/meetings-map-navigator.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: MeetingsMapNavigatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeetingsMapNavigatorComponent", function() { return MeetingsMapNavigatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class MeetingsMapNavigatorComponent {
    constructor() {
        this.navigate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
}
MeetingsMapNavigatorComponent.ɵfac = function MeetingsMapNavigatorComponent_Factory(t) { return new (t || MeetingsMapNavigatorComponent)(); };
MeetingsMapNavigatorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MeetingsMapNavigatorComponent, selectors: [["app-meetings-map-navigator"]], outputs: { navigate: "navigate" }, decls: 8, vars: 0, consts: [[1, "title"], [1, "button", 3, "click"]], template: function MeetingsMapNavigatorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "strong", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u05E0\u05D9\u05D5\u05D5\u05D8:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MeetingsMapNavigatorComponent_Template_button_click_2_listener() { return ctx.navigate.emit("north"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u05E6\u05E4\u05D5\u05DF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MeetingsMapNavigatorComponent_Template_button_click_4_listener() { return ctx.navigate.emit("middle"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u05DE\u05E8\u05DB\u05D6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MeetingsMapNavigatorComponent_Template_button_click_6_listener() { return ctx.navigate.emit("south"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u05D3\u05E8\u05D5\u05DD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%] {\n  position: absolute;\n  z-index: 1;\n  top: 20px;\n  right: 20px;\n  padding: 10px 20px;\n  background-color: white;\n  box-shadow: 0px 0px 10px 5px rgba(1, 1, 1, 0.15);\n}\n@media only screen and (max-width: 400px) {\n  [_nghost-%COMP%] {\n    padding: 5px 10px;\n  }\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-family: \"arbel\";\n  font-size: 18px;\n}\n[_nghost-%COMP%]   .button[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 2px solid #00a099;\n  width: 50px;\n  height: 28px;\n  font-size: 15px;\n  font-family: \"arbel\";\n  color: #00736d;\n  background-color: white;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbWVldGluZ3MvbWVldGluZ3MtbWFwL21lZXRpbmdzLW1hcC1uYXZpZ2F0b3IvQzpcXFVzZXJzXFxUZWhpbGFcXERlc2t0b3BcXGdvb2QtcHJvamVjdFxcb3VyYnJvdGhlcnMtb3VyYnJvdGhlcnNcXG91ci1icm90aGVycy13ZWIvc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50c1xcbWVldGluZ3NcXG1lZXRpbmdzLW1hcFxcbWVldGluZ3MtbWFwLW5hdmlnYXRvclxcbWVldGluZ3MtbWFwLW5hdmlnYXRvci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbWVldGluZ3MvbWVldGluZ3MtbWFwL21lZXRpbmdzLW1hcC1uYXZpZ2F0b3IvbWVldGluZ3MtbWFwLW5hdmlnYXRvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdEQUFBO0FDQ0Y7QURDRTtFQVRGO0lBVUksaUJBQUE7RUNFRjtBQUNGO0FEQUU7RUFDRSxvQkFBQTtFQUNBLGVBQUE7QUNFSjtBRENFO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9tZWV0aW5ncy9tZWV0aW5ncy1tYXAvbWVldGluZ3MtbWFwLW5hdmlnYXRvci9tZWV0aW5ncy1tYXAtbmF2aWdhdG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAxO1xyXG4gIHRvcDogMjBweDtcclxuICByaWdodDogMjBweDtcclxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCA1cHggcmdiYSgxLCAxLCAxLCAwLjE1KTtcclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgfVxyXG5cclxuICAudGl0bGUge1xyXG4gICAgZm9udC1mYW1pbHk6ICdhcmJlbCc7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG5cclxuICAuYnV0dG9uIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMCwgMTYwLCAxNTMpO1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LWZhbWlseTogJ2FyYmVsJztcclxuICAgIGNvbG9yOiByZ2IoMCwgMTE1LCAxMDkpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG59XHJcbiIsIjpob3N0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxO1xuICB0b3A6IDIwcHg7XG4gIHJpZ2h0OiAyMHB4O1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggNXB4IHJnYmEoMSwgMSwgMSwgMC4xNSk7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XG4gIDpob3N0IHtcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgfVxufVxuOmhvc3QgLnRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiYXJiZWxcIjtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuOmhvc3QgLmJ1dHRvbiB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMGEwOTk7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDI4cHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC1mYW1pbHk6IFwiYXJiZWxcIjtcbiAgY29sb3I6ICMwMDczNmQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MeetingsMapNavigatorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-meetings-map-navigator',
                templateUrl: './meetings-map-navigator.component.html',
                styleUrls: ['./meetings-map-navigator.component.scss']
            }]
    }], null, { navigate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/components/meetings/meetings-map/meetings-map.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/shared/components/meetings/meetings-map/meetings-map.component.ts ***!
  \***********************************************************************************/
/*! exports provided: MeetingsMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeetingsMapComponent", function() { return MeetingsMapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! models */ "../types/models/index.ts");
/* harmony import */ var _services_participations_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/participations.service */ "./src/app/shared/services/participations.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");
/* harmony import */ var _agm_js_marker_clusterer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @agm/js-marker-clusterer */ "./node_modules/@agm/js-marker-clusterer/__ivy_ngcc__/fesm2015/agm-js-marker-clusterer.js");
/* harmony import */ var _meetings_map_legend_meetings_map_legend_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./meetings-map-legend/meetings-map-legend.component */ "./src/app/shared/components/meetings/meetings-map/meetings-map-legend/meetings-map-legend.component.ts");
/* harmony import */ var _meetings_map_navigator_meetings_map_navigator_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./meetings-map-navigator/meetings-map-navigator.component */ "./src/app/shared/components/meetings/meetings-map/meetings-map-navigator/meetings-map-navigator.component.ts");
/* harmony import */ var _meetings_map_guide_meetings_map_guide_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./meetings-map-guide/meetings-map-guide.component */ "./src/app/shared/components/meetings/meetings-map/meetings-map-guide/meetings-map-guide.component.ts");
/* harmony import */ var _meetings_map_meeting_meetings_map_meeting_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./meetings-map-meeting/meetings-map-meeting.component */ "./src/app/shared/components/meetings/meetings-map/meetings-map-meeting/meetings-map-meeting.component.ts");












function MeetingsMapComponent_app_meetings_map_legend_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-meetings-map-legend", 7);
} if (rf & 2) {
    const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("user", ctx_r97.user);
} }
function MeetingsMapComponent_app_meetings_map_navigator_2_Template(rf, ctx) { if (rf & 1) {
    const _r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-meetings-map-navigator", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("navigate", function MeetingsMapComponent_app_meetings_map_navigator_2_Template_app_meetings_map_navigator_navigate_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r102); const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r101.navigate($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MeetingsMapComponent_app_meetings_map_guide_3_Template(rf, ctx) { if (rf & 1) {
    const _r104 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-meetings-map-guide", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("guideCompleted", function MeetingsMapComponent_app_meetings_map_guide_3_Template_app_meetings_map_guide_guideCompleted_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r104); const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r103.showGuide = false; return ctx_r103.guideCompleted.emit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return { height: 40, width: 40 }; };
const _c1 = function (a0, a1) { return { url: a0, scaledSize: a1 }; };
function MeetingsMapComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    const _r109 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "agm-marker", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("markerClick", function MeetingsMapComponent_ng_template_6_Template_agm_marker_markerClick_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r109); const _r107 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); const ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r108.clicked($event, _r107); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "agm-info-window", null, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-meetings-map-meeting", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("joinMeeting", function MeetingsMapComponent_ng_template_6_Template_app_meetings_map_meeting_joinMeeting_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r109); const meeting_r105 = ctx.$implicit; const ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r110.joinMeeting.emit({ user: ctx_r110.user, meeting: meeting_r105 }); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const meeting_r105 = ctx.$implicit;
    const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("latitude", meeting_r105.address.latitude)("longitude", meeting_r105.address.longitude)("label", "")("iconUrl", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](8, _c1, ctx_r100.getMeetingIconUrl(meeting_r105), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0)))("markerDraggable", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("meeting", meeting_r105)("user", ctx_r100.user);
} }
const _c2 = function () { return { visibility: "off" }; };
const _c3 = function (a0) { return [a0]; };
const _c4 = function (a1) { return { featureType: "poi", stylers: a1 }; };
const _c5 = function () { return { url: "/assets/img/map/meetings-map-cluster.svg", width: 50, height: 50, textSize: 1, textColor: "#ffffff", backgroundPosition: "0 5px" }; };
class MeetingsMapComponent {
    constructor(participationsService) {
        this.participationsService = participationsService;
        this.isCenterCurrentLocation = true;
        this.showGuide = false;
        this.guideCompleted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.joinMeeting = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.mapLatitude = 31.6726;
        this.mapLongitude = 35.077028;
        this.mapZoom = 8;
        this.restriction = {
            latLngBounds: {
                east: 36,
                north: 33.5,
                south: 29.4,
                west: 34
            }
        };
        this.trackByFn = (index, item) => {
            return item.id;
        };
    }
    ngOnInit() {
        if (this.isCenterCurrentLocation) {
            this.centerCurrentLocation();
        }
    }
    centerCurrentLocation() {
        this.getLocation().subscribe(location => {
            // Israel borders
            if (location.longitude > 34 && location.longitude < 36 && location.latitude > 29 && location.latitude < 33.4) {
                this.mapLongitude = location.longitude;
                this.mapLatitude = location.latitude;
                this.mapZoom = 11;
            }
        }, () => {
            // Failed to get current location
        });
    }
    getMeetingIconUrl(meeting) {
        let url;
        const isBereaved = this.user && this.user.role === models__WEBPACK_IMPORTED_MODULE_2__["UserRole"].bereaved;
        if (this.participationsService.isUserParticipatingMeeting(this.user, meeting)) {
            url = '/assets/img/map/meetings-map-blue.svg';
        }
        else if (!isBereaved && meeting.invited) {
            url = '/assets/img/map/meetings-map-grey.svg';
        }
        else if (!isBereaved && meeting.count >= meeting.capacity) {
            url = '/assets/img/map/meetings-map-red.svg';
        }
        else if (isBereaved && meeting.bereaved) {
            url = '/assets/img/map/meetings-map-red.svg';
        }
        else {
            url = '/assets/img/map/meetings-map-green.svg';
        }
        return url;
    }
    navigate(direction) {
        if (direction === 'north') {
            this.mapLatitude = 32.84;
            this.mapLongitude = 35.35;
            this.mapZoom = 10;
        }
        else if (direction === 'middle') {
            this.mapLatitude = 31.93;
            this.mapLongitude = 35.11;
            this.mapZoom = 10;
        }
        else if (direction === 'south') {
            this.mapLatitude = 30.45;
            this.mapLongitude = 34.93;
            this.mapZoom = 9;
        }
    }
    clicked(marker, lastOpenMarker) {
        if (this.lastOpenMarker) {
            this.lastOpenMarker.close();
        }
        this.lastOpenMarker = lastOpenMarker;
        this.mapLongitude = marker.longitude;
        this.mapLatitude = marker.latitude + 0.1;
    }
    getLocation() {
        const GEOLOCATION_ERRORS = [
            'Browser does not support location services',
            'You have rejected access to your location',
            'Unable to determine your location',
            'Service timeout has been reached'
        ];
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(observer => {
            if (window.navigator && window.navigator.geolocation) {
                window.navigator.geolocation.getCurrentPosition(position => {
                    observer.next({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude
                    });
                    observer.complete();
                }, error => observer.error(GEOLOCATION_ERRORS[+error.code]));
            }
            else {
                observer.error(GEOLOCATION_ERRORS[0]);
            }
        });
    }
}
MeetingsMapComponent.ɵfac = function MeetingsMapComponent_Factory(t) { return new (t || MeetingsMapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_participations_service__WEBPACK_IMPORTED_MODULE_3__["ParticipationsService"])); };
MeetingsMapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MeetingsMapComponent, selectors: [["app-meetings-map"]], inputs: { meetings: "meetings", user: "user", isCenterCurrentLocation: "isCenterCurrentLocation", showGuide: "showGuide" }, outputs: { guideCompleted: "guideCompleted", joinMeeting: "joinMeeting" }, decls: 7, vars: 27, consts: [[1, "map-container"], [3, "user", 4, "ngIf"], [3, "navigate", 4, "ngIf"], [3, "guideCompleted", 4, "ngIf"], [1, "map", 3, "usePanning", "latitude", "longitude", "zoom", "minZoom", "maxZoom", "styles", "restriction", "gestureHandling"], [3, "gridSize", "minimumClusterSize", "styles"], ["ngFor", "", 3, "ngForOf", "ngForTrackBy"], [3, "user"], [3, "navigate"], [3, "guideCompleted"], [3, "latitude", "longitude", "label", "iconUrl", "markerDraggable", "markerClick"], ["infoWindow", ""], [3, "meeting", "user", "joinMeeting"]], template: function MeetingsMapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MeetingsMapComponent_app_meetings_map_legend_1_Template, 1, 1, "app-meetings-map-legend", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MeetingsMapComponent_app_meetings_map_navigator_2_Template, 1, 0, "app-meetings-map-navigator", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MeetingsMapComponent_app_meetings_map_guide_3_Template, 1, 0, "app-meetings-map-guide", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "agm-map", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "agm-marker-cluster", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MeetingsMapComponent_ng_template_6_Template, 4, 11, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showGuide);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showGuide);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.meetings && ctx.showGuide);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("usePanning", true)("latitude", ctx.mapLatitude)("longitude", ctx.mapLongitude)("zoom", ctx.mapZoom)("minZoom", 7)("maxZoom", 17)("styles", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](22, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c2)))))("restriction", ctx.restriction)("gestureHandling", "greedy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("gridSize", 60)("minimumClusterSize", 4)("styles", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](25, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](24, _c5)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.meetings)("ngForTrackBy", ctx.trackByFn);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _agm_core__WEBPACK_IMPORTED_MODULE_5__["AgmMap"], _agm_js_marker_clusterer__WEBPACK_IMPORTED_MODULE_6__["AgmMarkerCluster"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _meetings_map_legend_meetings_map_legend_component__WEBPACK_IMPORTED_MODULE_7__["MeetingsMapLegendComponent"], _meetings_map_navigator_meetings_map_navigator_component__WEBPACK_IMPORTED_MODULE_8__["MeetingsMapNavigatorComponent"], _meetings_map_guide_meetings_map_guide_component__WEBPACK_IMPORTED_MODULE_9__["MeetingsMapGuideComponent"], _agm_core__WEBPACK_IMPORTED_MODULE_5__["AgmMarker"], _agm_core__WEBPACK_IMPORTED_MODULE_5__["AgmInfoWindow"], _meetings_map_meeting_meetings_map_meeting_component__WEBPACK_IMPORTED_MODULE_10__["MeetingsMapMeetingComponent"]], styles: [".map-container[_ngcontent-%COMP%] {\n  height: 600px;\n}\n@media only screen and (max-width: 650px) {\n  .map-container[_ngcontent-%COMP%] {\n    height: auto;\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    z-index: 3;\n  }\n}\n.map-container[_ngcontent-%COMP%]   .map[_ngcontent-%COMP%] {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbWVldGluZ3MvbWVldGluZ3MtbWFwL0M6XFxVc2Vyc1xcVGVoaWxhXFxEZXNrdG9wXFxnb29kLXByb2plY3RcXG91cmJyb3RoZXJzLW91cmJyb3RoZXJzXFxvdXItYnJvdGhlcnMtd2ViL3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXG1lZXRpbmdzXFxtZWV0aW5ncy1tYXBcXG1lZXRpbmdzLW1hcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbWVldGluZ3MvbWVldGluZ3MtbWFwL21lZXRpbmdzLW1hcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUNDRjtBRENFO0VBSEY7SUFJSSxZQUFBO0lBQ0EsZUFBQTtJQUNBLE1BQUE7SUFDQSxTQUFBO0lBQ0EsT0FBQTtJQUNBLFFBQUE7SUFDQSxVQUFBO0VDRUY7QUFDRjtBREFFO0VBQ0UsWUFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbWVldGluZ3MvbWVldGluZ3MtbWFwL21lZXRpbmdzLW1hcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXAtY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDYwMHB4O1xyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB6LWluZGV4OiAzO1xyXG4gIH1cclxuXHJcbiAgLm1hcCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG59XHJcbiIsIi5tYXAtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiA2MDBweDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcbiAgLm1hcC1jb250YWluZXIge1xuICAgIGhlaWdodDogYXV0bztcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHotaW5kZXg6IDM7XG4gIH1cbn1cbi5tYXAtY29udGFpbmVyIC5tYXAge1xuICBoZWlnaHQ6IDEwMCU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MeetingsMapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-meetings-map',
                templateUrl: './meetings-map.component.html',
                styleUrls: ['./meetings-map.component.scss']
            }]
    }], function () { return [{ type: _services_participations_service__WEBPACK_IMPORTED_MODULE_3__["ParticipationsService"] }]; }, { meetings: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], user: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isCenterCurrentLocation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showGuide: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], guideCompleted: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], joinMeeting: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/components/meetings/meetings-map/meetings-map.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/shared/components/meetings/meetings-map/meetings-map.module.ts ***!
  \********************************************************************************/
/*! exports provided: MeetingsMapModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeetingsMapModule", function() { return MeetingsMapModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");
/* harmony import */ var _agm_js_marker_clusterer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @agm/js-marker-clusterer */ "./node_modules/@agm/js-marker-clusterer/__ivy_ngcc__/fesm2015/agm-js-marker-clusterer.js");
/* harmony import */ var _meetings_map_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./meetings-map.component */ "./src/app/shared/components/meetings/meetings-map/meetings-map.component.ts");
/* harmony import */ var _meetings_map_navigator_meetings_map_navigator_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./meetings-map-navigator/meetings-map-navigator.component */ "./src/app/shared/components/meetings/meetings-map/meetings-map-navigator/meetings-map-navigator.component.ts");
/* harmony import */ var _meetings_map_meeting_meetings_map_meeting_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./meetings-map-meeting/meetings-map-meeting.component */ "./src/app/shared/components/meetings/meetings-map/meetings-map-meeting/meetings-map-meeting.component.ts");
/* harmony import */ var _meetings_map_legend_meetings_map_legend_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./meetings-map-legend/meetings-map-legend.component */ "./src/app/shared/components/meetings/meetings-map/meetings-map-legend/meetings-map-legend.component.ts");
/* harmony import */ var _meetings_map_guide_meetings_map_guide_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./meetings-map-guide/meetings-map-guide.component */ "./src/app/shared/components/meetings/meetings-map/meetings-map-guide/meetings-map-guide.component.ts");
/* harmony import */ var _meeting_join_button_meeting_join_button_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../meeting-join-button/meeting-join-button.module */ "./src/app/shared/components/meeting-join-button/meeting-join-button.module.ts");












const api = [
    _meetings_map_component__WEBPACK_IMPORTED_MODULE_5__["MeetingsMapComponent"],
    _meetings_map_navigator_meetings_map_navigator_component__WEBPACK_IMPORTED_MODULE_6__["MeetingsMapNavigatorComponent"],
    _meetings_map_meeting_meetings_map_meeting_component__WEBPACK_IMPORTED_MODULE_7__["MeetingsMapMeetingComponent"],
    _meetings_map_legend_meetings_map_legend_component__WEBPACK_IMPORTED_MODULE_8__["MeetingsMapLegendComponent"],
    _meetings_map_guide_meetings_map_guide_component__WEBPACK_IMPORTED_MODULE_9__["MeetingsMapGuideComponent"]
];
class MeetingsMapModule {
}
MeetingsMapModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MeetingsMapModule });
MeetingsMapModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MeetingsMapModule_Factory(t) { return new (t || MeetingsMapModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _agm_core__WEBPACK_IMPORTED_MODULE_3__["AgmCoreModule"], _agm_js_marker_clusterer__WEBPACK_IMPORTED_MODULE_4__["AgmJsMarkerClustererModule"], _meeting_join_button_meeting_join_button_module__WEBPACK_IMPORTED_MODULE_10__["MeetingJoinButtonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MeetingsMapModule, { declarations: [_meetings_map_component__WEBPACK_IMPORTED_MODULE_5__["MeetingsMapComponent"],
        _meetings_map_navigator_meetings_map_navigator_component__WEBPACK_IMPORTED_MODULE_6__["MeetingsMapNavigatorComponent"],
        _meetings_map_meeting_meetings_map_meeting_component__WEBPACK_IMPORTED_MODULE_7__["MeetingsMapMeetingComponent"],
        _meetings_map_legend_meetings_map_legend_component__WEBPACK_IMPORTED_MODULE_8__["MeetingsMapLegendComponent"],
        _meetings_map_guide_meetings_map_guide_component__WEBPACK_IMPORTED_MODULE_9__["MeetingsMapGuideComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _agm_core__WEBPACK_IMPORTED_MODULE_3__["AgmCoreModule"], _agm_js_marker_clusterer__WEBPACK_IMPORTED_MODULE_4__["AgmJsMarkerClustererModule"], _meeting_join_button_meeting_join_button_module__WEBPACK_IMPORTED_MODULE_10__["MeetingJoinButtonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_meetings_map_component__WEBPACK_IMPORTED_MODULE_5__["MeetingsMapComponent"],
        _meetings_map_navigator_meetings_map_navigator_component__WEBPACK_IMPORTED_MODULE_6__["MeetingsMapNavigatorComponent"],
        _meetings_map_meeting_meetings_map_meeting_component__WEBPACK_IMPORTED_MODULE_7__["MeetingsMapMeetingComponent"],
        _meetings_map_legend_meetings_map_legend_component__WEBPACK_IMPORTED_MODULE_8__["MeetingsMapLegendComponent"],
        _meetings_map_guide_meetings_map_guide_component__WEBPACK_IMPORTED_MODULE_9__["MeetingsMapGuideComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MeetingsMapModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: api,
                exports: api,
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _agm_core__WEBPACK_IMPORTED_MODULE_3__["AgmCoreModule"], _agm_js_marker_clusterer__WEBPACK_IMPORTED_MODULE_4__["AgmJsMarkerClustererModule"], _meeting_join_button_meeting_join_button_module__WEBPACK_IMPORTED_MODULE_10__["MeetingJoinButtonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/components/meetings/meetings.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/meetings/meetings.component.ts ***!
  \******************************************************************/
/*! exports provided: MeetingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeetingsComponent", function() { return MeetingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/utils.service */ "./src/app/shared/services/utils.service.ts");
/* harmony import */ var _meetings_filters_meetings_filters_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./meetings-filters/meetings-filters.component */ "./src/app/shared/components/meetings/meetings-filters/meetings-filters.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _meetings_map_meetings_map_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./meetings-map/meetings-map.component */ "./src/app/shared/components/meetings/meetings-map/meetings-map.component.ts");
/* harmony import */ var _meetings_list_meetings_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./meetings-list/meetings-list.component */ "./src/app/shared/components/meetings/meetings-list/meetings-list.component.ts");







function MeetingsComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u05D8\u05D5\u05E2\u05DF.. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MeetingsComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-meetings-map", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("joinMeeting", function MeetingsComponent_ng_container_4_Template_app_meetings_map_joinMeeting_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r93); const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r92.joinMeeting.emit($event); })("guideCompleted", function MeetingsComponent_ng_container_4_Template_app_meetings_map_guideCompleted_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r93); const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r94.guideCompleted.emit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("user", ctx_r89.user)("meetings", ctx_r89.filteredMeetings)("showGuide", ctx_r89.mapShowGuide);
} }
function MeetingsComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-meetings-list", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("joinMeeting", function MeetingsComponent_ng_template_5_Template_app_meetings_list_joinMeeting_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r96); const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r95.joinMeeting.emit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("user", ctx_r91.user)("meetings", ctx_r91.filteredMeetings);
} }
class MeetingsComponent {
    constructor(utilsService) {
        this.utilsService = utilsService;
        this.mapShowGuide = true;
        this.joinMeeting = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.guideCompleted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.view = 'list';
        this.filter = '';
    }
    ngOnChanges(changes) {
        if (changes.meetings) {
            this.filterMeetings();
        }
    }
    filterMeetings() {
        this.filteredMeetings = this.utilsService.filteringMeetings(this.meetings, this.filter);
    }
}
MeetingsComponent.ɵfac = function MeetingsComponent_Factory(t) { return new (t || MeetingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_utils_service__WEBPACK_IMPORTED_MODULE_1__["UtilsService"])); };
MeetingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MeetingsComponent, selectors: [["app-meetings"]], inputs: { meetings: "meetings", user: "user", mapShowGuide: "mapShowGuide" }, outputs: { joinMeeting: "joinMeeting", guideCompleted: "guideCompleted" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]()], decls: 7, vars: 5, consts: [[1, "container"], [3, "view", "filter", "viewChange", "filterChange"], [1, "container", "meetings-container"], ["class", "loading", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["meetingsList", ""], [1, "loading"], [3, "user", "meetings", "showGuide", "joinMeeting", "guideCompleted"], [3, "user", "meetings", "joinMeeting"]], template: function MeetingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-meetings-filters", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("viewChange", function MeetingsComponent_Template_app_meetings_filters_viewChange_1_listener($event) { return ctx.view = $event; })("filterChange", function MeetingsComponent_Template_app_meetings_filters_filterChange_1_listener($event) { return ctx.filter = $event; })("filterChange", function MeetingsComponent_Template_app_meetings_filters_filterChange_1_listener() { return ctx.filterMeetings(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MeetingsComponent_div_3_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MeetingsComponent_ng_container_4_Template, 2, 3, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MeetingsComponent_ng_template_5_Template, 1, 2, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("view", ctx.view)("filter", ctx.filter);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.meetings);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.view === "map")("ngIfElse", _r90);
    } }, directives: [_meetings_filters_meetings_filters_component__WEBPACK_IMPORTED_MODULE_2__["MeetingsFiltersComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _meetings_map_meetings_map_component__WEBPACK_IMPORTED_MODULE_4__["MeetingsMapComponent"], _meetings_list_meetings_list_component__WEBPACK_IMPORTED_MODULE_5__["MeetingsListComponent"]], styles: [".meetings-container[_ngcontent-%COMP%] {\n  margin-bottom: 50px;\n  position: relative;\n}\n.meetings-container[_ngcontent-%COMP%]   .loading[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 999999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbWVldGluZ3MvQzpcXFVzZXJzXFxUZWhpbGFcXERlc2t0b3BcXGdvb2QtcHJvamVjdFxcb3VyYnJvdGhlcnMtb3VyYnJvdGhlcnNcXG91ci1icm90aGVycy13ZWIvc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50c1xcbWVldGluZ3NcXG1lZXRpbmdzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9tZWV0aW5ncy9tZWV0aW5ncy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7QUNDRjtBRENFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbWVldGluZ3MvbWVldGluZ3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVldGluZ3MtY29udGFpbmVyIHtcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgLmxvYWRpbmcge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIHotaW5kZXg6IDk5OTk5OTtcclxuICB9XHJcbn1cclxuIiwiLm1lZXRpbmdzLWNvbnRhaW5lciB7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5tZWV0aW5ncy1jb250YWluZXIgLmxvYWRpbmcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB6LWluZGV4OiA5OTk5OTk7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MeetingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-meetings',
                templateUrl: './meetings.component.html',
                styleUrls: ['./meetings.component.scss']
            }]
    }], function () { return [{ type: _services_utils_service__WEBPACK_IMPORTED_MODULE_1__["UtilsService"] }]; }, { meetings: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], user: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], mapShowGuide: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], joinMeeting: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], guideCompleted: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/components/view-toggle/view-toggle.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/view-toggle/view-toggle.component.ts ***!
  \************************************************************************/
/*! exports provided: ViewToggleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewToggleComponent", function() { return ViewToggleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function ViewToggleComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewToggleComponent_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r85); const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r84.viewChange.emit("map"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \u05DE\u05E4\u05D4 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \u05D8\u05D1\u05DC\u05D4 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ViewToggleComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewToggleComponent_div_2_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r87); const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r86.viewChange.emit("list"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \u05DE\u05E4\u05D4 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \u05D8\u05D1\u05DC\u05D4 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ViewToggleComponent {
    constructor() {
        this.viewChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
}
ViewToggleComponent.ɵfac = function ViewToggleComponent_Factory(t) { return new (t || ViewToggleComponent)(); };
ViewToggleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ViewToggleComponent, selectors: [["app-view-toggle"]], inputs: { view: "view" }, outputs: { viewChange: "viewChange" }, decls: 3, vars: 2, consts: [[1, "view-toggle-container"], ["class", "view-button", 3, "click", 4, "ngIf"], ["class", "view-button one-box", 3, "click", 4, "ngIf"], [1, "view-button", 3, "click"], [1, "view-toggle-button", "disable-color"], [1, "map-icon"], [1, "label"], [1, "view-toggle-button"], [1, "list-icon"], [1, "label", "blackfont"], [1, "view-button", "one-box", 3, "click"], [1, "view-toggle-button", "disable-mobile"]], template: function ViewToggleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ViewToggleComponent_div_1_Template, 9, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ViewToggleComponent_div_2_Template, 9, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.view === "list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.view === "map");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".view-toggle-container[_ngcontent-%COMP%] {\n  border: 3px solid #00a099;\n  color: #a3a3a3;\n  border-radius: 0;\n}\n.view-toggle-container[_ngcontent-%COMP%]   .view-button[_ngcontent-%COMP%] {\n  width: 140px;\n  background-color: white;\n  text-align: center;\n  cursor: pointer;\n  display: flex;\n}\n@media only screen and (max-width: 750px) {\n  .view-toggle-container[_ngcontent-%COMP%]   .view-button[_ngcontent-%COMP%] {\n    width: 110px;\n  }\n}\n.view-toggle-container[_ngcontent-%COMP%]   .view-button[_ngcontent-%COMP%]   .view-toggle-button[_ngcontent-%COMP%] {\n  background-color: #00a099;\n  flex: 1;\n}\n.view-toggle-container[_ngcontent-%COMP%]   .view-button[_ngcontent-%COMP%]   .view-toggle-button[_ngcontent-%COMP%]   .map-icon[_ngcontent-%COMP%], .view-toggle-container[_ngcontent-%COMP%]   .view-button[_ngcontent-%COMP%]   .view-toggle-button[_ngcontent-%COMP%]   .list-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  margin: 0 auto;\n  background-size: 100%;\n  background-repeat: no-repeat;\n}\n@media only screen and (max-width: 750px) {\n  .view-toggle-container[_ngcontent-%COMP%]   .view-button[_ngcontent-%COMP%]   .view-toggle-button[_ngcontent-%COMP%]   .map-icon[_ngcontent-%COMP%], .view-toggle-container[_ngcontent-%COMP%]   .view-button[_ngcontent-%COMP%]   .view-toggle-button[_ngcontent-%COMP%]   .list-icon[_ngcontent-%COMP%] {\n    width: 24px;\n    height: 24px;\n    margin-top: 5px;\n  }\n}\n.view-toggle-container[_ngcontent-%COMP%]   .view-button[_ngcontent-%COMP%]   .view-toggle-button[_ngcontent-%COMP%]   .map-icon[_ngcontent-%COMP%] {\n  background-image: url('mapGray.svg');\n}\n.view-toggle-container[_ngcontent-%COMP%]   .view-button[_ngcontent-%COMP%]   .view-toggle-button[_ngcontent-%COMP%]   .list-icon[_ngcontent-%COMP%] {\n  background-image: url('list.svg');\n}\n.view-toggle-container[_ngcontent-%COMP%]   .view-button[_ngcontent-%COMP%]   .view-toggle-button[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  line-height: 24px;\n}\n@media only screen and (max-width: 768px) {\n  .view-toggle-container[_ngcontent-%COMP%]   .view-button[_ngcontent-%COMP%]   .view-toggle-button[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n    font-size: 14px;\n    line-height: 20px;\n  }\n}\n.view-toggle-container[_ngcontent-%COMP%]   .view-button[_ngcontent-%COMP%]   .view-toggle-button[_ngcontent-%COMP%]   .label.blackfont[_ngcontent-%COMP%] {\n  color: #000;\n}\n.view-toggle-container[_ngcontent-%COMP%]   .view-button[_ngcontent-%COMP%]   .view-toggle-button.disable-color[_ngcontent-%COMP%] {\n  background-color: #f1f1f1;\n}\n@media only screen and (max-width: 750px) {\n  .view-toggle-container[_ngcontent-%COMP%]   .view-button[_ngcontent-%COMP%]   .view-toggle-button.disable-mobile[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media only screen and (max-width: 750px) {\n  .view-toggle-container[_ngcontent-%COMP%]   .view-button.one-box[_ngcontent-%COMP%] {\n    width: 60px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdmlldy10b2dnbGUvQzpcXFVzZXJzXFxUZWhpbGFcXERlc2t0b3BcXGdvb2QtcHJvamVjdFxcb3VyYnJvdGhlcnMtb3VyYnJvdGhlcnNcXG91ci1icm90aGVycy13ZWIvc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50c1xcdmlldy10b2dnbGVcXHZpZXctdG9nZ2xlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy92aWV3LXRvZ2dsZS92aWV3LXRvZ2dsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDQ0Y7QURDRTtFQUNFLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUNDSjtBRENJO0VBUEY7SUFRSSxZQUFBO0VDRUo7QUFDRjtBREFJO0VBQ0UseUJBQUE7RUFDQSxPQUFBO0FDRU47QURBTTs7RUFFRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0FDRVI7QURBUTtFQVJGOztJQVNJLFdBQUE7SUFDQSxZQUFBO0lBQ0EsZUFBQTtFQ0lSO0FBQ0Y7QURETTtFQUNFLG9DQUFBO0FDR1I7QURBTTtFQUNFLGlDQUFBO0FDRVI7QURDTTtFQUNFLGlCQUFBO0FDQ1I7QURDUTtFQUhGO0lBSUksZUFBQTtJQUNBLGlCQUFBO0VDRVI7QUFDRjtBREFRO0VBQ0UsV0FBQTtBQ0VWO0FERU07RUFDRSx5QkFBQTtBQ0FSO0FESVE7RUFERjtJQUVJLGFBQUE7RUNEUjtBQUNGO0FETU07RUFERjtJQUVJLFdBQUE7RUNITjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdmlldy10b2dnbGUvdmlldy10b2dnbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmlldy10b2dnbGUtY29udGFpbmVyIHtcclxuICBib3JkZXI6IDNweCBzb2xpZCByZ2IoMCwgMTYwLCAxNTMpO1xyXG4gIGNvbG9yOiAjYTNhM2EzO1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcblxyXG4gIC52aWV3LWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMTQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTBweCkge1xyXG4gICAgICB3aWR0aDogMTEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnZpZXctdG9nZ2xlLWJ1dHRvbiB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAxNjAsIDE1Myk7XHJcbiAgICAgIGZsZXg6IDE7XHJcblxyXG4gICAgICAubWFwLWljb24sXHJcbiAgICAgIC5saXN0LWljb24ge1xyXG4gICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuXHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTBweCkge1xyXG4gICAgICAgICAgd2lkdGg6IDI0cHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAubWFwLWljb24ge1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi8uLi9hc3NldHMvaW1nL21hcEdyYXkuc3ZnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmxpc3QtaWNvbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvbGlzdC5zdmcpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubGFiZWwge1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG5cclxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYuYmxhY2tmb250IHtcclxuICAgICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgJi5kaXNhYmxlLWNvbG9yIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmRpc2FibGUtbW9iaWxlIHtcclxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1MHB4KSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYub25lLWJveCB7XHJcbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzUwcHgpIHtcclxuICAgICAgICB3aWR0aDogNjBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIudmlldy10b2dnbGUtY29udGFpbmVyIHtcbiAgYm9yZGVyOiAzcHggc29saWQgIzAwYTA5OTtcbiAgY29sb3I6ICNhM2EzYTM7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG4udmlldy10b2dnbGUtY29udGFpbmVyIC52aWV3LWJ1dHRvbiB7XG4gIHdpZHRoOiAxNDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTBweCkge1xuICAudmlldy10b2dnbGUtY29udGFpbmVyIC52aWV3LWJ1dHRvbiB7XG4gICAgd2lkdGg6IDExMHB4O1xuICB9XG59XG4udmlldy10b2dnbGUtY29udGFpbmVyIC52aWV3LWJ1dHRvbiAudmlldy10b2dnbGUtYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYTA5OTtcbiAgZmxleDogMTtcbn1cbi52aWV3LXRvZ2dsZS1jb250YWluZXIgLnZpZXctYnV0dG9uIC52aWV3LXRvZ2dsZS1idXR0b24gLm1hcC1pY29uLFxuLnZpZXctdG9nZ2xlLWNvbnRhaW5lciAudmlldy1idXR0b24gLnZpZXctdG9nZ2xlLWJ1dHRvbiAubGlzdC1pY29uIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzUwcHgpIHtcbiAgLnZpZXctdG9nZ2xlLWNvbnRhaW5lciAudmlldy1idXR0b24gLnZpZXctdG9nZ2xlLWJ1dHRvbiAubWFwLWljb24sXG4udmlldy10b2dnbGUtY29udGFpbmVyIC52aWV3LWJ1dHRvbiAudmlldy10b2dnbGUtYnV0dG9uIC5saXN0LWljb24ge1xuICAgIHdpZHRoOiAyNHB4O1xuICAgIGhlaWdodDogMjRweDtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gIH1cbn1cbi52aWV3LXRvZ2dsZS1jb250YWluZXIgLnZpZXctYnV0dG9uIC52aWV3LXRvZ2dsZS1idXR0b24gLm1hcC1pY29uIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvbWFwR3JheS5zdmcpO1xufVxuLnZpZXctdG9nZ2xlLWNvbnRhaW5lciAudmlldy1idXR0b24gLnZpZXctdG9nZ2xlLWJ1dHRvbiAubGlzdC1pY29uIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvbGlzdC5zdmcpO1xufVxuLnZpZXctdG9nZ2xlLWNvbnRhaW5lciAudmlldy1idXR0b24gLnZpZXctdG9nZ2xlLWJ1dHRvbiAubGFiZWwge1xuICBsaW5lLWhlaWdodDogMjRweDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnZpZXctdG9nZ2xlLWNvbnRhaW5lciAudmlldy1idXR0b24gLnZpZXctdG9nZ2xlLWJ1dHRvbiAubGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgfVxufVxuLnZpZXctdG9nZ2xlLWNvbnRhaW5lciAudmlldy1idXR0b24gLnZpZXctdG9nZ2xlLWJ1dHRvbiAubGFiZWwuYmxhY2tmb250IHtcbiAgY29sb3I6ICMwMDA7XG59XG4udmlldy10b2dnbGUtY29udGFpbmVyIC52aWV3LWJ1dHRvbiAudmlldy10b2dnbGUtYnV0dG9uLmRpc2FibGUtY29sb3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTBweCkge1xuICAudmlldy10b2dnbGUtY29udGFpbmVyIC52aWV3LWJ1dHRvbiAudmlldy10b2dnbGUtYnV0dG9uLmRpc2FibGUtbW9iaWxlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1MHB4KSB7XG4gIC52aWV3LXRvZ2dsZS1jb250YWluZXIgLnZpZXctYnV0dG9uLm9uZS1ib3gge1xuICAgIHdpZHRoOiA2MHB4O1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewToggleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-view-toggle',
                templateUrl: './view-toggle.component.html',
                styleUrls: ['./view-toggle.component.scss']
            }]
    }], null, { view: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], viewChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/components/view-toggle/view-toggle.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shared/components/view-toggle/view-toggle.module.ts ***!
  \*********************************************************************/
/*! exports provided: ViewToggleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewToggleModule", function() { return ViewToggleModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _view_toggle_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-toggle.component */ "./src/app/shared/components/view-toggle/view-toggle.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




class ViewToggleModule {
}
ViewToggleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ViewToggleModule });
ViewToggleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ViewToggleModule_Factory(t) { return new (t || ViewToggleModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ViewToggleModule, { declarations: [_view_toggle_component__WEBPACK_IMPORTED_MODULE_1__["ViewToggleComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]], exports: [_view_toggle_component__WEBPACK_IMPORTED_MODULE_1__["ViewToggleComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewToggleModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_view_toggle_component__WEBPACK_IMPORTED_MODULE_1__["ViewToggleComponent"]],
                exports: [_view_toggle_component__WEBPACK_IMPORTED_MODULE_1__["ViewToggleComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=default~map-meeting-page-map-meeting-page-module~meetings-page-meetings-page-module~participate-page~b4d7d916-es2015.js.map