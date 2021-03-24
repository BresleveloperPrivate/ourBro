(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/shared/components/remove-button/remove-button.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/remove-button/remove-button.component.ts ***!
  \****************************************************************************/
/*! exports provided: RemoveButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveButtonComponent", function() { return RemoveButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class RemoveButtonComponent {
    constructor() {
        this.remove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
}
RemoveButtonComponent.ɵfac = function RemoveButtonComponent_Factory(t) { return new (t || RemoveButtonComponent)(); };
RemoveButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RemoveButtonComponent, selectors: [["app-remove-button"]], outputs: { remove: "remove" }, decls: 3, vars: 0, consts: [[1, "site-button", "danger", "invert", 3, "click"], [1, "far", "fa-trash-alt"]], template: function RemoveButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RemoveButtonComponent_Template_button_click_0_listener() { return ctx.remove.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u05D4\u05E1\u05E8 \u05D0\u05D5\u05EA\u05D9 \u05DE\u05D4\u05DE\u05E4\u05D2\u05E9\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3JlbW92ZS1idXR0b24vcmVtb3ZlLWJ1dHRvbi5jb21wb25lbnQuc2NzcyJ9 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RemoveButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-remove-button',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                templateUrl: './remove-button.component.html',
                styleUrls: ['./remove-button.component.scss']
            }]
    }], null, { remove: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/components/remove-button/remove-button.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/shared/components/remove-button/remove-button.module.ts ***!
  \*************************************************************************/
/*! exports provided: RemoveButtonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveButtonModule", function() { return RemoveButtonModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _remove_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./remove-button.component */ "./src/app/shared/components/remove-button/remove-button.component.ts");




class RemoveButtonModule {
}
RemoveButtonModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RemoveButtonModule });
RemoveButtonModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RemoveButtonModule_Factory(t) { return new (t || RemoveButtonModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RemoveButtonModule, { declarations: [_remove_button_component__WEBPACK_IMPORTED_MODULE_2__["RemoveButtonComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_remove_button_component__WEBPACK_IMPORTED_MODULE_2__["RemoveButtonComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RemoveButtonModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_remove_button_component__WEBPACK_IMPORTED_MODULE_2__["RemoveButtonComponent"]],
                exports: [_remove_button_component__WEBPACK_IMPORTED_MODULE_2__["RemoveButtonComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map