(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["qna-page-qna-page-module"],{

/***/ "./src/app/qna/page/qna-page.component.ts":
/*!************************************************!*\
  !*** ./src/app/qna/page/qna-page.component.ts ***!
  \************************************************/
/*! exports provided: QnaPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QnaPageComponent", function() { return QnaPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! models */ "../types/models/index.ts");
/* harmony import */ var _qnas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./qnas */ "./src/app/qna/page/qnas.ts");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _qna_list_qna_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../qna-list/qna-list.component */ "./src/app/qna/qna-list/qna-list.component.ts");







function QnaPageComponent_ng_container_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-qna-list", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r256 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("qnaList", ctx_r256.qnaBrothers);
} }
function QnaPageComponent_ng_container_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-qna-list", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r257 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("qnaList", ctx_r257.qnaHosts);
} }
function QnaPageComponent_ng_container_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-qna-list", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r258 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("qnaList", ctx_r258.qnaParticipates);
} }
class QnaPageComponent {
    constructor(authService) {
        this.authService = authService;
        this.UserRole = models__WEBPACK_IMPORTED_MODULE_1__["UserRole"];
        this.qnaBrothers = _qnas__WEBPACK_IMPORTED_MODULE_2__["qnaBorthers"];
        this.qnaHosts = _qnas__WEBPACK_IMPORTED_MODULE_2__["qnaHosts"];
        this.qnaParticipates = _qnas__WEBPACK_IMPORTED_MODULE_2__["qnaParticipates"];
    }
    ngOnInit() {
        this.authService.user.subscribe(user => {
            this.currentQType = (user && user.role) || models__WEBPACK_IMPORTED_MODULE_1__["UserRole"].bereaved;
        });
    }
}
QnaPageComponent.ɵfac = function QnaPageComponent_Factory(t) { return new (t || QnaPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
QnaPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QnaPageComponent, selectors: [["app-qna-page"]], decls: 33, vars: 10, consts: [["src", "../../../assets/img/qnaHeader.jpg.png", "alt", "Questions and Answers Page Header Image", 1, "image-header"], [1, "site-divider"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "small-heading"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "medium-heading"], ["href", "https://connect2care.ourbrothers.co.il/#/info", 1, "action-header-support-us", "site-button", "connectqne"], [1, "qna-types-list-container"], [1, "container"], [1, "role-buttons"], [1, "role-button", 3, "click"], [1, "qna-list-wrapper"], [3, "ngSwitch"], [4, "ngSwitchCase"], [1, "container", "qna-list-wrapper"], ["target", "_blank", "href", "/contact"], [3, "qnaList"]], template: function QnaPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u05E9\u05D0\u05DC\u05D5\u05EA \u05D5\u05EA\u05E9\u05D5\u05D1\u05D5\u05EA\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " \u05E2\u05D5\u05E0\u05D9\u05DD \u05E2\u05DC \u05D4\u05DB\u05DC\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u05E9\u05D0\u05DC\u05D5\u05EA \u05D5\u05EA\u05E9\u05D5\u05D1\u05D5\u05EA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " \u05DE\u05EA\u05D7\u05D1\u05E8\u05D9\u05DD \u05D5\u05D6\u05D5\u05DB\u05E8\u05D9\u05DD ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QnaPageComponent_Template_div_click_16_listener() { return ctx.currentQType = ctx.UserRole.bereaved; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " \u05D0\u05D7\u05D9\u05DD ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QnaPageComponent_Template_div_click_18_listener() { return ctx.currentQType = ctx.UserRole.host; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " \u05DE\u05D0\u05E8\u05D7\u05D9\u05DD ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QnaPageComponent_Template_div_click_20_listener() { return ctx.currentQType = ctx.UserRole.participate; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " \u05DE\u05E9\u05EA\u05EA\u05E4\u05D9\u05DD ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](24, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, QnaPageComponent_ng_container_25_Template, 2, 1, "ng-container", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, QnaPageComponent_ng_container_26_Template, 2, 1, "ng-container", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, QnaPageComponent_ng_container_27_Template, 2, 1, "ng-container", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " \u05DC\u05D0 \u05E2\u05E0\u05D9\u05E0\u05D5 \u05E2\u05DC \u05DB\u05DC \u05D4\u05E9\u05D0\u05DC\u05D5\u05EA? \u05DE\u05D5\u05D6\u05DE\u05E0\u05D9\u05DD ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "'\u05DC\u05D9\u05E6\u05D5\u05E8 \u05D0\u05D9\u05EA\u05E0\u05D5 \u05E7\u05E9\u05E8'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, ".\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("current", ctx.currentQType === ctx.UserRole.bereaved);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("current", ctx.currentQType === ctx.UserRole.host);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("current", ctx.currentQType === ctx.UserRole.participate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.currentQType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx.UserRole.bereaved);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx.UserRole.host);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx.UserRole.participate);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgSwitchCase"], _qna_list_qna_list_component__WEBPACK_IMPORTED_MODULE_5__["QnaListComponent"]], styles: [".qna-types-list-container[_ngcontent-%COMP%] {\n  background-color: #00a099;\n  height: 278px;\n  margin-bottom: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n}\n@media only screen and (max-width: 768px) {\n  .qna-types-list-container[_ngcontent-%COMP%] {\n    margin-bottom: 30px;\n  }\n}\n.qna-types-list-container[_ngcontent-%COMP%]   .role-buttons[_ngcontent-%COMP%] {\n  display: flex;\n}\n@media only screen and (max-width: 768px) {\n  .qna-types-list-container[_ngcontent-%COMP%]   .role-buttons[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.qna-types-list-container[_ngcontent-%COMP%]   .role-buttons[_ngcontent-%COMP%]   .role-button[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 39px;\n  margin: 45px;\n  padding: 15px 20px;\n  border: 1px solid white;\n  cursor: pointer;\n  text-align: center;\n  font-family: \"arbel\";\n  color: white;\n  border-radius: 5px;\n}\n@media only screen and (max-width: 768px) {\n  .qna-types-list-container[_ngcontent-%COMP%]   .role-buttons[_ngcontent-%COMP%]   .role-button[_ngcontent-%COMP%] {\n    margin: 10px 45px 10px 45px;\n    font-size: 30px;\n    padding: 10px 20px;\n  }\n}\n@media only screen and (min-width: 768px) {\n  .qna-types-list-container[_ngcontent-%COMP%]   .role-buttons[_ngcontent-%COMP%]   .role-button[_ngcontent-%COMP%]:first-child {\n    margin-right: 0;\n  }\n}\n@media only screen and (min-width: 768px) {\n  .qna-types-list-container[_ngcontent-%COMP%]   .role-buttons[_ngcontent-%COMP%]   .role-button[_ngcontent-%COMP%]:last-child {\n    margin-left: 0;\n  }\n}\n.qna-types-list-container[_ngcontent-%COMP%]   .role-buttons[_ngcontent-%COMP%]   .role-button.current[_ngcontent-%COMP%] {\n  background-color: white;\n  color: #00a099;\n}\n.qna-list-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.connectqne[_ngcontent-%COMP%] {\n  background-color: #082551;\n  text-align: center;\n  margin-right: 40%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcW5hL3BhZ2UvQzpcXFVzZXJzXFxUZWhpbGFcXGxhc3RcXG91ckJyb1xcb3VyLWJyb3RoZXJzLXdlYi9zcmNcXGFwcFxccW5hXFxwYWdlXFxxbmEtcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcW5hL3BhZ2UvcW5hLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQU1BLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ0pGO0FESEU7RUFMRjtJQU1JLG1CQUFBO0VDTUY7QUFDRjtBRENFO0VBQ0UsYUFBQTtBQ0NKO0FEQ0k7RUFIRjtJQUlJLHNCQUFBO0VDRUo7QUFDRjtBREFJO0VBQ0UsT0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDRU47QURBTTtFQVpGO0lBYUksMkJBQUE7SUFDQSxlQUFBO0lBQ0Esa0JBQUE7RUNHTjtBQUNGO0FEQVE7RUFERjtJQUVJLGVBQUE7RUNHUjtBQUNGO0FEQ1E7RUFERjtJQUVJLGNBQUE7RUNFUjtBQUNGO0FEQ007RUFDRSx1QkFBQTtFQUNBLGNBQUE7QUNDUjtBREtBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FDRkY7QURJQTtFQUNDLHlCQUFBO0VBQ0Msa0JBQUE7RUFFRCxpQkFBQTtBQ0ZEIiwiZmlsZSI6InNyYy9hcHAvcW5hL3BhZ2UvcW5hLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucW5hLXR5cGVzLWxpc3QtY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMTYwLCAxNTMpO1xyXG4gIGhlaWdodDogMjc4cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICB9XHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG4gIC5yb2xlLWJ1dHRvbnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB9XHJcblxyXG4gICAgLnJvbGUtYnV0dG9uIHtcclxuICAgICAgZmxleDogMTtcclxuICAgICAgZm9udC1zaXplOiAzOXB4O1xyXG4gICAgICBtYXJnaW46IDQ1cHg7XHJcbiAgICAgIHBhZGRpbmc6IDE1cHggMjBweDtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBmb250LWZhbWlseTogJ2FyYmVsJztcclxuICAgICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG5cclxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgIG1hcmdpbjogMTBweCA0NXB4IDEwcHggNDVweDtcclxuICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgJi5jdXJyZW50IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBjb2xvcjogcmdiKDAsIDE2MCwgMTUzKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnFuYS1saXN0LXdyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLmNvbm5lY3RxbmUge1xyXG4gYmFja2dyb3VuZC1jb2xvcjogIzA4MjU1MTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgLy8vY3Vyc29yOiBwb2ludGVyO1xyXG4gbWFyZ2luLXJpZ2h0OiA0MCU7XHJcbiAgLy90ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuIiwiLnFuYS10eXBlcy1saXN0LWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGEwOTk7XG4gIGhlaWdodDogMjc4cHg7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5xbmEtdHlwZXMtbGlzdC1jb250YWluZXIge1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIH1cbn1cbi5xbmEtdHlwZXMtbGlzdC1jb250YWluZXIgLnJvbGUtYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5xbmEtdHlwZXMtbGlzdC1jb250YWluZXIgLnJvbGUtYnV0dG9ucyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufVxuLnFuYS10eXBlcy1saXN0LWNvbnRhaW5lciAucm9sZS1idXR0b25zIC5yb2xlLWJ1dHRvbiB7XG4gIGZsZXg6IDE7XG4gIGZvbnQtc2l6ZTogMzlweDtcbiAgbWFyZ2luOiA0NXB4O1xuICBwYWRkaW5nOiAxNXB4IDIwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiYXJiZWxcIjtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5xbmEtdHlwZXMtbGlzdC1jb250YWluZXIgLnJvbGUtYnV0dG9ucyAucm9sZS1idXR0b24ge1xuICAgIG1hcmdpbjogMTBweCA0NXB4IDEwcHggNDVweDtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5xbmEtdHlwZXMtbGlzdC1jb250YWluZXIgLnJvbGUtYnV0dG9ucyAucm9sZS1idXR0b246Zmlyc3QtY2hpbGQge1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAucW5hLXR5cGVzLWxpc3QtY29udGFpbmVyIC5yb2xlLWJ1dHRvbnMgLnJvbGUtYnV0dG9uOmxhc3QtY2hpbGQge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICB9XG59XG4ucW5hLXR5cGVzLWxpc3QtY29udGFpbmVyIC5yb2xlLWJ1dHRvbnMgLnJvbGUtYnV0dG9uLmN1cnJlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6ICMwMGEwOTk7XG59XG5cbi5xbmEtbGlzdC13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jb25uZWN0cW5lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA4MjU1MTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6IDQwJTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QnaPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-qna-page',
                templateUrl: './qna-page.component.html',
                styleUrls: ['./qna-page.component.scss']
            }]
    }], function () { return [{ type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/qna/page/qna-page.module.ts":
/*!*********************************************!*\
  !*** ./src/app/qna/page/qna-page.module.ts ***!
  \*********************************************/
/*! exports provided: QnaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QnaPageModule", function() { return QnaPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _qna_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./qna-page.component */ "./src/app/qna/page/qna-page.component.ts");
/* harmony import */ var _qna_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../qna.module */ "./src/app/qna/qna.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







const routes = [
    {
        path: '',
        component: _qna_page_component__WEBPACK_IMPORTED_MODULE_1__["QnaPageComponent"]
    }
];
class QnaPageModule {
}
QnaPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: QnaPageModule });
QnaPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function QnaPageModule_Factory(t) { return new (t || QnaPageModule)(); }, imports: [[_qna_module__WEBPACK_IMPORTED_MODULE_2__["QnaModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](QnaPageModule, { declarations: [_qna_page_component__WEBPACK_IMPORTED_MODULE_1__["QnaPageComponent"]], imports: [_qna_module__WEBPACK_IMPORTED_MODULE_2__["QnaModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QnaPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_qna_module__WEBPACK_IMPORTED_MODULE_2__["QnaModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]],
                declarations: [_qna_page_component__WEBPACK_IMPORTED_MODULE_1__["QnaPageComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/qna/page/qnas.ts":
/*!**********************************!*\
  !*** ./src/app/qna/page/qnas.ts ***!
  \**********************************/
/*! exports provided: qnaBorthers, qnaHosts, qnaParticipates */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "qnaBorthers", function() { return qnaBorthers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "qnaHosts", function() { return qnaHosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "qnaParticipates", function() { return qnaParticipates; });
const qnaBorthers = [
    {
        question: 'איך אני נרשם לבית מארח לספר את סיפורי?',
        answer: `ניתן להכנס לעמוד
     <a target="_blank" href="/tell">'אני רוצה לספר'</a>.
     בעמוד יש למלא את פרטיך ולהשתבץ לאירוח הקרוב לביתך. בנוסף יש להרשם
     לסדנת ההכנה שיתקיים בזום`
    },
    {
        question: 'איך נראה מפגש של האחים שלנו?',
        answer: `כל מפגש נראה שונה, תלוי בך, באירוח ובדינמיקה שנוצרת. 
    יחד עם זאת, קיימים מספר דברים קבועים כמעט בכל מפגש:
    התכנסות של המשתתפים, הצגה ופתיחה של המארח, והעברת ה"שרביט" אליך - עכשיו זה הזמן שלך בו תשתף בסיפורך. אנו נשמח אם במהלך המפגש תוכל לתת רקע על עמותת 'האחים שלנו' בכדי שעוד ועוד אנשים ייחשפו לפעילות שלנו ויקחו חלק בהנצחת האחים והאחיות השכולים.
    אנו ממליצים לקחת חלק בסדנת ההכנה בזום על מנת לקבל כלים פרקטיים לבניית המפגש    
    ניתן להוריד את ערכת האח <a target="_blank" href="/">כאן</a>.
   `
    },
    {
        question: 'איזה כלים יהיו לי לבנות את המפגש שלי?',
        answer: `האחים והאחיות שמגיעים למפגשים לספר את סיפורם מוזמנים לקחת חלק בסדנאות ההכנה (ההדרכה כוללת כלים פרקטיים וכן כלים רגשיים) לבניית הערב. 
     ניתן להוריד את <a target="_blank" href="/assets/docs/ערכת%20אחים%20ואחיות%20-%20האחים%20שלנו.pdf">ערכת האח<a/>, המתכללת את הכלים הניתנים ביום זה.`
    },
    {
        question: 'האם אוכל לספר ביותר מבית מארח אחד?',
        answer: `וודאי, ניתן לבחור יותר מבית אחד להתארח בו דרך <a target="_blank" href="/meetings">עמוד המפגשים<a/> באתר, אך יש לשים לב שהאירוחים לא חופפים בתאריך ובשעה.`
    },
    {
        question: 'האם כל המפגשים יתקיימו בבתים פרטיים?',
        answer: `המפגשים יתקיימו במקומות שונים ברחבי הארץ והעולם, ביניהם בתים פרטיים, חברות, ארגונים, תנועות נוער, בתי ספר, מפגשים דיגיטליים בזום ועוד. 
      ניתן לבדוק את מאפייני המפגש <a target="_blank" href="/meetings">בעמוד המפגשים<a/> באתר.
      בכדי להשתתף במפגשים הדיגיטליים בזום יתקיימו במסגרת מיזם
      <a target="_blank" href="https://connect2care.ourbrothers.co.il/"> מתחברים וזוכרים<a/>
      שהקימה עמותת האחים שלנו.
      `
    },
    {
        question: 'האם אוכל לארח את עצמי בביתי?',
        answer: `בעיקרון כן, אך אנחנו לא ממליצים על כך. קיום המפגשים במקומות שאינם הבית האישי שלך מאפשרים להרחיב את מעגל הזכרון וההנצחה. כמו כן, ידוע לנו כי מפגש כזה מציף רגשות רבים ואין צורך להטריח את עצמך מעבר לכך. למרות האמור לעיל, במקרים מיוחדים כמובן שניתן <a target="_blank" href="/contact">ליצור איתנו קשר<a/>.`
    },
    {
        question: 'כשנרשמים לאתר ישנה הצעה להשתתף במפגש הכנה לאחים, מה זה אומר?',
        answer: `סדנאות ההכנה יתקיימו בזום בתאריכים 4-5.4.21 במטרה להכין אותך ולסייע לך לקראת המפגשים.
    הסדנאות יכללו תכנים פרקטיים והקניית כלים שיסייעו לך מבנית ורגשית לקראת המפגש, בין אם לקחת חלק במפגשי 'האחים שלנו' בעבר ובין אם לא.
     `
    },
    {
        question: 'אם אני מתארח בבית מארח שלא כתוב באתר, אוכל להשתתף בסדנת ההכנה?',
        answer: `בוודאי, הסדנאות פתוחות לכל האחים - אלו שרוצים לקחת חלק ולהעביר ערב ואלו שלא. סדנאות ההכנה יתקיימו בזום בתאריכים 4-5.4.21 במטרה להכין אותך ולסייע לך לקראת המפגשים.
    הסדנאות יכללו תכנים פרקטיים והקניית כלים שיסייעו לך מבנית ורגשית לקראת המפגש, בין אם לקחת חלק במפגשי 'האחים שלנו' בעבר ובין אם לא. לרישום לסדנאות ההכנה לחץ כאן.
    כמו כן, מומלץ להציע למארח להרשם לבית מארח באתר על מנת שנוכל לשלוח לו את ערכת האירוח ולשלוח לו עדכונים רלוונטים.`
    },
    {
        question: 'איך אני יוצר קשר עם המארח?',
        answer: `מיד לאחר השיבוץ למפגש, תגיע 
    ל<a target="_blank" href="/assets/docs/ערכת%20אירוח%20-%20האחים%20שלנו.pdf">'דף האירוח'<a/>
    עם כל הפרטים הרלוונטים וכן תקבל דואר אלקטרוני הכולל את הפרטים הללו. במקביל, יקבל המארח את פרטי ההתקשרות שלך ויצור איתך קשר לחיבור ותיאום ציפיות. בשיחה חשוב להעלות מס' נושאים: צורך שלך בכלים ואביזרים שונים (כמו מקרן, מסך וכו'), הבנת פרטי קהל השומעים שיגיעו לערב, הבהרת נקודות חשובות, לשתף באורחים שרוצים להתלוות אליך לערב, האם יש צורך בעזרה כלשהי וכיוצ"ב.
      כמו כן,
       המארח שלך יקבל <a target="_blank" href="/assets/docs/ערכת%20אירוח%20-%20האחים%20שלנו.pdf">ערכת אירוח<a/> 
       וניתן להסב את תשומת ליבו לקריאתה.`
    },
    {
        question: 'מה אני צריך להכין לערב?',
        answer: `מומלץ לעיין ב<a target="_blank" href="/assets/docs/ערכת%20אחים%20ואחיות%20-%20האחים%20שלנו.pdf">'ערכת אח'<a/> בה מפורט על ההכנה לקראת הערב. בכל מקרה אנו ממליצים להביא איתך לערב אמצעים ויזואלים: תמונות, מצגת, סרט. קטעי קריאה.
     מוזמן לצפות <a target="_blank" href="https://www.youtube.com/watch?v=l788HDtDVEI&list=PLJi3ky6m6AisA1gSnPNdi08F2c0gXEX8m&index=5">בהרצאתו<a/> של ד"ר צוריאל ראשי המעלה מספר טיפים חשובים
      לקראת הערב ולהשתתף בסדנאות ההכנה.
    <br/>
    לעיתים, מרוב התרגשות, המון סיפורים ומחשבות עולים באופן לא מתוכנן ולכן אנו ממליצים להביא איתך את מהלך המפגש והמסרים שתרצה להעביר, כתובים בנקודות על דף.`
    },
    {
        question: 'האם המפגשים מתקיימים בערב או ביום הזיכרון?',
        answer: `מפגשי 'האחים שלנו' יתקיימו בשבוע של יום הזיכרון, בין התאריכים 9-14.4.21. 
    מרבית המפגשים מתקיימים בימים שלפני יום הזיכרון.
    ניתן לצפות בפרטי המפגשים, התאריך והשעה, ב
    
      <a target="_blank" href="/meeting">עמוד המפגשים<a/> בלחיצה על אירוח.`
    },
    {
        question: 'האם אוכל להעביר שיחה יחד עם אח/ות שלי?',
        answer: `כן, ואף לעיתים זה יכול להקל ולעזור. בשיחת היכרות עם המארח יש לציין זאת.`
    },
    {
        question: `מי הקים את עמותת 'האחים שלנו'?`,
        answer: `העמותה הוקמה על-ידי אחים ואחיות שכולים ומתנדבים נוספים במטרה לבנות - לראשונה בישראל - קהילה תומכת ומעצימה עבור האחים השכולים במדינה. העמותה הוקמה בשנת 2017 על ידי אחים שכולים ומתנדבים מכלל החברה הישראלית בכדי לתת בפעם הראשונה מקום לכאב, להתמודדות ולסיפור הייחודי שלנו, האחים השכולים. מוזמנים לקרוא עלינו עוד
     <a target="_blank" href="/team">עמוד הצוות<a/>.`
    },
    {
        question: 'אין אירוחים בקרבת מקום מגורי, מה האפשרויות שלי?',
        answer: `תוכל להציע לחברים ומכרים לפתוח את ביתם לאירוח ולהתארח אצלם,
     וכמובן שאנו נעשה מאמץ לעזור לך במציאת בית מארח במקרה הצורך.
     כמו כן, יש אפשרות גם לפתוח מפגש בזום דרך מיזם 
     <a target="_blank" href="https://connect2care.ourbrothers.co.il/"> מתחברים וזוכרים<a/>
     שהקמנו.`
    },
    {
        question: 'האירוח שלי בוטל, מה אני עושה?',
        answer: `לעיתים דברים כאלו קורים, אנו משתדלים לעשות ככל יכולתנו למנוע מצבים כאלה.
     אם קרה מקרה כזה יש ליידע אותנו על כך על מנת שנמצא לך בית חלופי בהקדם האפשרי.`
    },
    {
        question: 'אוכל להביא איתי אנשים לאירוח?',
        answer: `מותר ואף מומלץ, לעניות דעתנו יש ערך בהימצאות אנשים קרובים אליך בערב כזה.
     כמובן שיש ליידע את המארח על כמות האנשים שמגיעים איתך`
    },
    {
        question: 'אני משתמש בסרטונים ותמונות בערב, האם אתם מספקים מקרן או שאני אחראי?',
        answer: `אין באפשרותינו לספק מקרן, אך ניתן להקרין דרך הטלוויזיה - יש לתאם כל צורך באביזרים מול המארח.`
    },
    {
        question: 'האם אני צריך להכין מצגת?',
        answer: ` אנו ממליצים להכין מצגת שתלווה אותך אך זאת אינה חובה. המצגת יכולה להקל ולמקד את השיחה מול הקהל, לשבור את המונוטוניות של השיחה וכן מהווה אמצעי ויזואלי להכיר טוב יותר את סיפורך ואת אחיך.`
    },
    {
        question: 'עד מתי אפשר להירשם לאירוח?',
        answer: `עד יום שני 5.4.21`
    },
    {
        question: 'כמה זמן אורך הערב?',
        answer: `בממוצע המפגשים נעים בין שעה-שעה וחצי, מאוד תלוי בך, בקהל השומעים ובמארח.
     חשוב לתאם ציפיות לפני כן ולתכנן מראש את הערב ואורכו.`
    },
    {
        question: '  בעקבות מגפת הקורונה, האם יש הגבלות מסוימות',
        answer: `מפגשי 'האחים שלנו' מתקיימים במסגרת הנחיות התו הירוק (אכיפת ההנחיות באחריות המארח בלבד). 
     `
    }
];
const qnaHosts = [
    {
        question: `איך אני נרשם לארח?`,
        answer: `ניתן להכנס לעמוד
     <a target="_blank" href="/host">אני רוצה לארח<a/> 
     ולהזין את פרטי המפגש שהינך רוצה לקיים `
    },
    {
        question: `איך נראה ערב 'האחים שלנו'?`,
        answer: `
    כל מפגש נראה שונה, תלוי בך, באח/ות השכולים ובדינמיקה שנוצרת.
    <br/> 
    יחד עם זאת, קיימים מספר דברים קבועים כמעט בכל מפגש:
    <br/>
    התכנסות של המשתתפים, הצגה ופתיחה של המארח, והעברת ה"שרביט" אל האח/ות השכולים. אנו נשמח אם במהלך המפגש תוכל לתת רקע על עמותת 'האחים שלנו' בכדי שעוד ועוד אנשים ייחשפו לפעילות שלנו ויקחו חלק בהנצחת האחים והאחיות השכולים.
    עקב מגפת הקורונה, מפגשי 'האחים שלנו' מתקיימים במסגרת הנחיות התו הירוק (אכיפת ההנחיות באחריות המארח בלבד).
    `
    },
    {
        question: `אם נרשמתי לארח זה אומר שבוודאות אח ישתבץ למפגש אצלי?`,
        answer: `בדרך כלל, כמות הנרשמים לאירוח גדולה מכמות האחים הנרשמים, 
    מכיון שלרוב קל יותר לפתוח את הבית מאשר להוביל ולשתף בסיפור אישי. 
    כאשר אח ישתבץ לאירוח אצלך,
     תקבל מסרון ומייל עם פרטיו. חשוב לקרוא על הנופל באתר 
     <a target="_blank" href="https://www.izkor.gov.il/">יזכור<a/>,
      לבצע שיחת תיאום ציפיות או מפגש הכרות מקדים עם האח, 
      וכן ישלח אליך
       <a target="_blank" href="/assets/docs/ערכת%20אירוח%20-%20האחים%20שלנו.pdf">ערכת אירוח<a/>.
        אם לא תקבל שיבוץ - ניתן כמובן להירשם כמשתתף באחד המפגשים הקרובים לביתך.
        או לחלופין להשתתף באחד ממפגשי האונללין שלנו דרך 
        מיזם 
     <a target="_blank" href="https://connect2care.ourbrothers.co.il/"> מתחברים וזוכרים<a/>
         שהקמנו. 
    `
    },
    {
        question: `מה אומרת האופציה "אירוח למוזמנים בלבד"?`,
        answer: `אופציה זו אומרת שהמפגש סגור למשתתפים חיצוניים, המארח מזמין למפגש קבוצת אנשים סגורה שלא ניתן להצטרף אליה.`
    },
    {
        question: `איך אני מזמין אנשים למפגש בביתי?`,
        answer: `לאחר שיבוץ האח/ות בביתך, יש להוציא פרסום עם שמו של האח ולהפיץ בין חברים ומדיות חברתיות. <a target="_blank" href="/assets/docs/ערכת%20אירוח%20-%20האחים%20שלנו.pdf">בערכת המארח<a/> ניתן למצוא גם הזמנות לשיתוף ברשתות החברתיות השונות. `
    },
    {
        question: `כמה אנשים אוכל להזמין לאירוח עצמו?`,
        answer: ` 
    מפגשי 'האחים שלנו' פועלים במסגרת התו הירוק. 
ולכן, כמות המשתתפים תלויה בהגבלות ובכמות המשתתפים שהינך יכול להיכנס לביתך / למקום האירוח. ניתן לקיים מפגשים בחללים גדולים, דוגמת מתנ"ס, אודיטוריום וכדומה, בתנאי שזה מתאים לאח וקיימים הכלים הנחוצים לאח (כמו מסך ומקרן במידת הצורך). בעת פתיחת האירוח, אנא רשום את כמות המשתתפים המקסימלית. 
`
    },
    {
        question: `איך אוכל ליצור קשר עם האנשים שנרשמו למפגש?`,
        answer: `ניתן לקבל את הפרטים של המשתתפים שנרשמו לביתך/למפגש בדף האירוח באתר.`
    },
    {
        question: `לאחר השיבוץ של אח לביתי מה עלי לעשות?`,
        answer: `כאשר אח ישתבץ לאירוח אצלך, תקבל מסרון ומייל עם פרטיו. 
    חשוב לקרוא על הנופל באתר 
    <a target="_blank" href="https://www.izkor.gov.il/">יזכור<a/>,
     לבצע שיחת תיאום ציפיות או לקיים מפגש הכרות מקדים עם האח, וכן ישלח אליך
      <a target="_blank" href="/assets/docs/ערכת%20אירוח%20-%20האחים%20שלנו.pdf">ערכת אירוח<a/>.
      בנוסף, יש לפרסם את המפגש בין חבריו ולהזמין אותם להשתתפות במפגש.`
    },
    {
        question: `אני רוצה לבטל את האירוח אצלי, מה עלי לעשות?`,
        answer: `חשוב מאוד להבין שבעת שיבוץ אח למפגש בביתך, יש התכווננות של האח לקראת המפגש ולכן, לביטול המפגש יש השלכות רבות. על כן, יש לעשות הכל על מנת לא לבטל.  יחד עם זאת אנו מבינים כי לעיתים יתכנו אירועים לא צפויים, ולכן אם יש צורך בביטול המפגש - ניתן <a target="_blank" href="/contact">ליצור איתנו קשר<a/>.`
    },
    {
        question: `מה אני עושה עם האח ששובץ אלי ביטל את הגעתו?`,
        answer: `ניתן 
    <a target="_blank" href="/contact">ליצור איתנו קשר<a/>
     על מנת שנוכל לשבץ לך אח אחר.`
    },
    {
        question: `מה אני צריך להכין לקראת המפגש?`,
        answer: `האירוח צריך להיות באווירה נוחה ונעימה לאח/ות ולמשתתפים. ניתן להכין
     כיבוד, מקום ישיבה נוח ולתאם ציפיות עם האח
     בנוגע לאביזרים שהוא צריך (כמו מקרן, מסך וכו'). 
    בערכת האירוח ניתן למצוא שלטי הכוונה לאורחים, 
    הנחיות, הסבר על העמותה והזמנות לאירוח.
     מידע נוסף בעמוד <a target="_blank" href="/agenda">מבנה הערב<a/>`
    },
    {
        question: `האם אני אוכל לקיים את המפגש של 'האחים שלנו' 
    בשעות היום ובמסגרת בית ספר/ עבודה וכו?`,
        answer: ` 
    האם אני אוכל לקיים את המפגש של 'האחים שלנו' בשעות היום ובמסגרת בית ספר/ עבודה וכו?
מפגשי 'האחים שלנו' מתקיימים לאורך השבוע סביב יום הזיכרון, בין התאריכים 9-14.4.2021 .
     ניתן לבדוק את התאריך והשעה ב
     <a target="_blank" href="/meetings">עמוד המפגשים<a/> בלחיצה על אירוח.`
    },
    {
        question: `האם המפגשים מתקיימים בערב או ביום הזיכרון?`,
        answer: `מפגשי 'האחים שלנו' יתקיימו בשבוע של יום הזיכרון, בין התאריכים 9-14.4.21. 
    מרבית המפגשים מתקיימים בימים שלפני יום הזיכרון.
    לפתיחת מפגשים יש להכנס ל    
     <a target="_blank" href="/meetings">עמוד המפגשים<a/>
      `
    },
    {
        question: `עד מתי ישנה אפשרות להירשם לאירוח בביתי?`,
        answer: `ניתן להרשם עד יום שני ה- 5.4.21.`
    },
    {
        question: `מה אני עושה בסוף המפגש?`,
        answer: `
    לאחר המפגש תקבלו משוב לדואר האלקטרוני שלכם ונשמח שתענו עליו 
    על מנת שנוכל ללמוד ולהפיק מסקנות מחווייתכם. כמו כן נשמח שתשתפו ברשתות החברתיות את התמונות מהמפגש ותתייגו את העמוד של האחים שלנו.
     `
    },
    {
        question: `אני לא גר בארץ ורוצה לקיים מפגש בחו"ל, מה אני צריך לעשות?`,
        answer: `ניתן <a target="_blank" href="/contact">ליצור איתנו קשר<a/> 
    ונשמח לחזור אליך לפרטים נוספים.
    אופציה נוספת לקיים מפגש וירטואלי בזום דרך מיזם
    <a target="_blank" href="https://connect2care.ourbrothers.co.il/"> מתחברים וזוכרים<a/>
      שהקמנו.
    `
    },
    {
        question: `אם אני רוצה לארח אח ספציפי, מה עליי לעשות?`,
        answer: `
    אם יש לך היכרות מקדימה עם אח שכול, ניתן ליצור איתו קשר על מנת שירשם באתר וישתבץ אליך לאירוח. גם אם יש ביניכם היכרות מקדימה - חשוב שהאח ירשם במערכת כדי שנוכל לשוחח איתו ולהזמינו לפעילות העמותה ולקהילת "האחים שלנו".
    `
    },
    {
        question: `האם תוכן המפגש מתאים לבני נוער?`,
        answer: `תוכן המפגשים מתאים לבני נוער, יש לציין בעת פתיחת המפגש באתר מיהו קהל היעד, וכן לציין זאת בשיחת תיאום הציפיות עם האח. `
    },
    {
        question: `כמה זמן אורך מפגש?`,
        answer: `בממוצע המפגשים נעים בין שעה-שעה וחצי, מאוד תלוי בך, בקהל השומעים ובאח. חשוב לתאם ציפיות לפני כן ולתכנן מראש את הערב ואורכו.`
    },
    {
        question: `  בעקבות מגפת הקורונה, האם יש הגבלות מסוימות?`,
        answer: `
    מפגשי 'האחים שלנו' מתקיימים במסגרת הנחיות התו הירוק (אכיפת ההנחיות באחריות המארח בלבד).
    `
    }
];
const qnaParticipates = [
    {
        question: `מה זה אומר 'משתתף'?`,
        answer: `משתתף הינו קהל השומעים אשר מגיעים למפגשים הפתוחים לקהל הרחב. `
    },
    {
        question: `איך ניתן להשתתף במפגשי 'האחים שלנו'?`,
        answer: `ניתן להכנס לעמוד '<a target="_blank" href="/participate">אני רוצה להשתתף<a/>'
     ולהזין את פרטיך. בעמוד המפגשים ניתן לחפש מפגשים הקרובים למקום מגוריך. לאחר שבחרת במפגש, ניתן ללחוץ על כפתור 'השתבץ'. 
     לאחר השיבוץ, המארח יקבל הודעה ויאשר את השתתפותך. שימו לב, כמה ימים לפני המפגש יש לוודא שהמפגש מתקיים ושהשתבץ אח שיספר את סיפורו.`
    },
    {
        question: `האם ניתן להשתתף ביותר מאירוע אחד?`,
        answer: `כמובן, בעת הרישום באתר ניתן להירשם לכמה בתים מארחים, אך שים לב שהתאריך והשעה אינם חופפים.`
    },
    {
        question: `איך אני יוצר קשר עם המארח?`,
        answer: `לאחר שהשתבצת לאירוח, תגיע לעמוד דף אירוח עם כל הפרטים. למארח תשלח הזמנה לאישור, ולאחר אישורו תוכלו ליצור קשר.`
    },
    {
        question: `האם האירוח עולה כסף?`,
        answer: `לא, כל פעילות העמותה היא וולנטרית.
     ניתן 
     <a target="_blank" href="/donate">לתרום לעמותה <a/>
        על מנת לסייע בהמשך פעילותה`
    },
    {
        question: `האם אוכל להצטרף לאירוח של מוזמנים בלבד?`,
        answer: `ישנם מארחים שבוחרים לקיים מפגש בו הם מזמינים מכרים בלבד, ולכן למפגשים מסוג זה לא ניתן להצטרף.`
    },
    {
        question: `האם אוכל להגיע לאירוע עם חברים?`,
        answer: `כן, יש לציין במהלך ההרשמה מספר משתתפים המגיעים לאירוח.`
    },
    {
        question: `האם אוכל לדעת מי האח המספר באותו ערב?`,
        answer: `כמובן, בפרטי האירוח יופיע  שם האח.`
    },
    {
        question: `כמה זמן אורך האירוע?`,
        answer: `
    בממוצע המפגשים נעים בין שעה-שעה וחצי, הדבר תלוי בדינמיקת הערב, בקהל השומעים ובאח/ות המתארח/ת. 
     `
    },
    {
        question: '  בעקבות מגפת הקורונה, האם יש הגבלות מסוימות',
        answer: `מפגשי 'האחים שלנו' מתקיימים במסגרת הנחיות התו הירוק (אכיפת ההנחיות באחריות המארח בלבד). 
     `
    }
];


/***/ }),

/***/ "./src/app/qna/qna-list/qna-item/qna-item.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/qna/qna-list/qna-item/qna-item.component.ts ***!
  \*************************************************************/
/*! exports provided: QnaItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QnaItemComponent", function() { return QnaItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function QnaItemComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 7);
} if (rf & 2) {
    const ctx_r259 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx_r259.answerSafeHtml, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function QnaItemComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QnaItemComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " /> ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class QnaItemComponent {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
        this.open = false;
    }
    ngOnInit() { }
    ngOnChanges(changes) {
        if (this.qnaItem) {
            this.answerSafeHtml = this.sanitizer.bypassSecurityTrustHtml(this.qnaItem.answer);
        }
    }
}
QnaItemComponent.ɵfac = function QnaItemComponent_Factory(t) { return new (t || QnaItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"])); };
QnaItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QnaItemComponent, selectors: [["app-qna-item"]], inputs: { qnaItem: "qnaItem" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]()], decls: 9, vars: 8, consts: [[1, "qna-item"], [1, "question-container"], [1, "question-mark"], [1, "question-text"], ["class", "answer-container", 3, "innerHtml", 4, "ngIf"], [3, "click"], ["class", "qna-icon", 4, "ngIf"], [1, "answer-container", 3, "innerHtml"], [1, "qna-icon"], ["width", "40", "height", "40", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M13 7C13 6.44772 12.5523 6 12 6C11.4477 6 11 6.44772 11 7V11H7C6.44772 11 6 11.4477 6 12C6 12.5523 6.44772 13 7 13H11V17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17V13H17C17.5523 13 18 12.5523 18 12C18 11.4477 17.5523 11 17 11H13V7Z", "fill", "#16B3AB"], ["d", "M8 11C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13H16C16.5523 13 17 12.5523 17 12C17 11.4477 16.5523 11 16 11H8Z", "fill", "#16B3AB"]], template: function QnaItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, QnaItemComponent_div_5_Template, 1, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QnaItemComponent_Template_div_click_6_listener() { return ctx.open = !ctx.open; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, QnaItemComponent_div_7_Template, 3, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, QnaItemComponent_div_8_Template, 4, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("open", ctx.open);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("font-bold", ctx.open);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.qnaItem.question, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.open);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.open);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.open);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".qna-item[_ngcontent-%COMP%] {\n  background-color: #f8f8f8;\n  padding: 25px;\n  transition: box-shadow 0.3s;\n  border-radius: 5px;\n}\n@media only screen and (max-width: 768px) {\n  .qna-item[_ngcontent-%COMP%] {\n    padding: 10px;\n  }\n}\n.qna-item[_ngcontent-%COMP%]   .question-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n}\n.qna-item[_ngcontent-%COMP%]   .question-container[_ngcontent-%COMP%]   .question-mark[_ngcontent-%COMP%] {\n  width: 23px;\n  height: 33px;\n  background-image: url('question-mark.png');\n  background-size: 100% 100%;\n  margin-left: 40px;\n}\n@media only screen and (max-width: 768px) {\n  .qna-item[_ngcontent-%COMP%]   .question-container[_ngcontent-%COMP%]   .question-mark[_ngcontent-%COMP%] {\n    margin-left: 0;\n    margin-top: 10px;\n    margin-bottom: 20px;\n  }\n}\n.qna-item[_ngcontent-%COMP%]   .question-container[_ngcontent-%COMP%]   .question-text[_ngcontent-%COMP%] {\n  flex: 1 1 300px;\n  font-size: 18px;\n  font-family: \"heebo\";\n  color: #818181;\n}\n.qna-item[_ngcontent-%COMP%]   .question-container[_ngcontent-%COMP%]   .question-text.font-bold[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.qna-item[_ngcontent-%COMP%]   .question-container[_ngcontent-%COMP%]   .question-collapse-btn[_ngcontent-%COMP%] {\n  cursor: pointer;\n  flex: 0 0 160px;\n  border-width: 2px;\n  border-color: #00a099;\n  border-style: solid;\n  height: 55px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n@media only screen and (max-width: 768px) {\n  .qna-item[_ngcontent-%COMP%]   .question-container[_ngcontent-%COMP%]   .question-collapse-btn[_ngcontent-%COMP%] {\n    flex: 0 0 140px;\n    height: 45px;\n    margin: auto;\n    margin-top: 20px;\n    margin-bottom: 20px;\n  }\n}\n.qna-item[_ngcontent-%COMP%]   .question-container[_ngcontent-%COMP%]   .question-collapse-btn[_ngcontent-%COMP%]   .question-collapse-btn-text[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-family: \"arbel\";\n  color: #00a099;\n  letter-spacing: 4px;\n  margin-left: 14px;\n}\n@media only screen and (max-width: 768px) {\n  .qna-item[_ngcontent-%COMP%]   .question-container[_ngcontent-%COMP%]   .question-collapse-btn[_ngcontent-%COMP%]   .question-collapse-btn-text[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n}\n.qna-item[_ngcontent-%COMP%]   .question-container[_ngcontent-%COMP%]   .question-collapse-btn[_ngcontent-%COMP%]   .fa-angle-double-down[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #00a099;\n}\n@media only screen and (max-width: 768px) {\n  .qna-item[_ngcontent-%COMP%]   .question-container[_ngcontent-%COMP%]   .question-collapse-btn[_ngcontent-%COMP%]   .fa-angle-double-down[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n@media only screen and (max-width: 768px) {\n  .qna-item[_ngcontent-%COMP%]   .question-container[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n.qna-item.open[_ngcontent-%COMP%] {\n  box-shadow: 4.5px 5.362px 10px 0px rgba(4, 26, 55, 0.1);\n}\n.qna-item.open[_ngcontent-%COMP%]   .question-container[_ngcontent-%COMP%]   .question-collapse-btn[_ngcontent-%COMP%] {\n  background-color: #00a099;\n}\n.qna-item.open[_ngcontent-%COMP%]   .question-container[_ngcontent-%COMP%]   .question-collapse-btn[_ngcontent-%COMP%]   .question-collapse-btn-text[_ngcontent-%COMP%] {\n  color: white;\n}\n.qna-item.open[_ngcontent-%COMP%]   .question-container[_ngcontent-%COMP%]   .question-collapse-btn[_ngcontent-%COMP%]   .fa-angle-double-up[_ngcontent-%COMP%] {\n  margin-right: 18px;\n  font-size: 20px;\n  color: white;\n}\n@media only screen and (max-width: 768px) {\n  .qna-item.open[_ngcontent-%COMP%]   .question-container[_ngcontent-%COMP%]   .question-collapse-btn[_ngcontent-%COMP%]   .fa-angle-double-up[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n.qna-item[_ngcontent-%COMP%]   .qna-icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.qna-item[_ngcontent-%COMP%]   .answer-container[_ngcontent-%COMP%] {\n  padding: 10px 65px 25px 290px;\n  font-size: 18px;\n  font-family: \"heebo\";\n  color: #818181;\n}\n@media only screen and (max-width: 768px) {\n  .qna-item[_ngcontent-%COMP%]   .answer-container[_ngcontent-%COMP%] {\n    padding: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcW5hL3FuYS1saXN0L3FuYS1pdGVtL0M6XFxVc2Vyc1xcVGVoaWxhXFxsYXN0XFxvdXJCcm9cXG91ci1icm90aGVycy13ZWIvc3JjXFxhcHBcXHFuYVxccW5hLWxpc3RcXHFuYS1pdGVtXFxxbmEtaXRlbS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcW5hL3FuYS1saXN0L3FuYS1pdGVtL3FuYS1pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtBQ0NGO0FEQ0U7RUFORjtJQU9JLGFBQUE7RUNFRjtBQUNGO0FEQUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUNFSjtBREFJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSwwQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsaUJBQUE7QUNFTjtBREFNO0VBUEY7SUFRSSxjQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtFQ0dOO0FBQ0Y7QURBSTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0FDRU47QURBTTtFQUNFLGlCQUFBO0FDRVI7QURFSTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUVBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDRE47QURHTTtFQVpGO0lBYUksZUFBQTtJQUNBLFlBQUE7SUFDQSxZQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtFQ0FOO0FBQ0Y7QURFTTtFQUNFLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDQVI7QURFUTtFQVBGO0lBUUksZUFBQTtFQ0NSO0FBQ0Y7QURFTTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FDQVI7QURFUTtFQUpGO0lBS0ksZUFBQTtFQ0NSO0FBQ0Y7QURHSTtFQXpFRjtJQTBFSSx1QkFBQTtFQ0FKO0FBQ0Y7QURHRTtFQUNFLHVEQUFBO0FDREo7QURJTTtFQUNFLHlCQUFBO0FDRlI7QURJUTtFQUNFLFlBQUE7QUNGVjtBREtRO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0hWO0FES1U7RUFMRjtJQU1JLGVBQUE7RUNGVjtBQUNGO0FET0U7RUFDRSxlQUFBO0FDTEo7QURRRTtFQUNFLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtBQ05KO0FEUUk7RUFORjtJQU9JLGFBQUE7RUNMSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcW5hL3FuYS1saXN0L3FuYS1pdGVtL3FuYS1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnFuYS1pdGVtIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ4LCAyNDgsIDI0OCk7XHJcbiAgcGFkZGluZzogMjVweDtcclxuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuM3M7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLnF1ZXN0aW9uLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcblxyXG4gICAgLnF1ZXN0aW9uLW1hcmsge1xyXG4gICAgICB3aWR0aDogMjNweDtcclxuICAgICAgaGVpZ2h0OiAzM3B4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoc3JjL2Fzc2V0cy9pbWcvcXVlc3Rpb24tbWFyay5wbmcpO1xyXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDQwcHg7XHJcblxyXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnF1ZXN0aW9uLXRleHQge1xyXG4gICAgICBmbGV4OiAxIDEgMzAwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgZm9udC1mYW1pbHk6ICdoZWVibyc7XHJcbiAgICAgIGNvbG9yOiByZ2IoMTI5LCAxMjksIDEyOSk7XHJcblxyXG4gICAgICAmLmZvbnQtYm9sZCB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAucXVlc3Rpb24tY29sbGFwc2UtYnRuIHtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBmbGV4OiAwIDAgMTYwcHg7XHJcbiAgICAgIGJvcmRlci13aWR0aDogMnB4O1xyXG4gICAgICBib3JkZXItY29sb3I6IHJnYigwLCAxNjAsIDE1Myk7XHJcbiAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgIGhlaWdodDogNTVweDtcclxuXHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgIGZsZXg6IDAgMCAxNDBweDtcclxuICAgICAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnF1ZXN0aW9uLWNvbGxhcHNlLWJ0bi10ZXh0IHtcclxuICAgICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdhcmJlbCc7XHJcbiAgICAgICAgY29sb3I6IHJnYigwLCAxNjAsIDE1Myk7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTRweDtcclxuXHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmZhLWFuZ2xlLWRvdWJsZS1kb3duIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgY29sb3I6IHJnYigwLCAxNjAsIDE1Myk7XHJcblxyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5vcGVuIHtcclxuICAgIGJveC1zaGFkb3c6IDQuNXB4IDUuMzYycHggMTBweCAwcHggcmdiYSg0LCAyNiwgNTUsIDAuMSk7XHJcblxyXG4gICAgLnF1ZXN0aW9uLWNvbnRhaW5lciB7XHJcbiAgICAgIC5xdWVzdGlvbi1jb2xsYXBzZS1idG4ge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAxNjAsIDE1Myk7XHJcblxyXG4gICAgICAgIC5xdWVzdGlvbi1jb2xsYXBzZS1idG4tdGV4dCB7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZmEtYW5nbGUtZG91YmxlLXVwIHtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMThweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLnFuYS1pY29ue1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcbiAgLmFuc3dlci1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMTBweCA2NXB4IDI1cHggMjkwcHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LWZhbWlseTogJ2hlZWJvJztcclxuICAgIGNvbG9yOiByZ2IoMTI5LCAxMjksIDEyOSk7XHJcblxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIucW5hLWl0ZW0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xuICBwYWRkaW5nOiAyNXB4O1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuM3M7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnFuYS1pdGVtIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG59XG4ucW5hLWl0ZW0gLnF1ZXN0aW9uLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5xbmEtaXRlbSAucXVlc3Rpb24tY29udGFpbmVyIC5xdWVzdGlvbi1tYXJrIHtcbiAgd2lkdGg6IDIzcHg7XG4gIGhlaWdodDogMzNweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKHNyYy9hc3NldHMvaW1nL3F1ZXN0aW9uLW1hcmsucG5nKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAucW5hLWl0ZW0gLnF1ZXN0aW9uLWNvbnRhaW5lciAucXVlc3Rpb24tbWFyayB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG59XG4ucW5hLWl0ZW0gLnF1ZXN0aW9uLWNvbnRhaW5lciAucXVlc3Rpb24tdGV4dCB7XG4gIGZsZXg6IDEgMSAzMDBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LWZhbWlseTogXCJoZWVib1wiO1xuICBjb2xvcjogIzgxODE4MTtcbn1cbi5xbmEtaXRlbSAucXVlc3Rpb24tY29udGFpbmVyIC5xdWVzdGlvbi10ZXh0LmZvbnQtYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnFuYS1pdGVtIC5xdWVzdGlvbi1jb250YWluZXIgLnF1ZXN0aW9uLWNvbGxhcHNlLWJ0biB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZmxleDogMCAwIDE2MHB4O1xuICBib3JkZXItd2lkdGg6IDJweDtcbiAgYm9yZGVyLWNvbG9yOiAjMDBhMDk5O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBoZWlnaHQ6IDU1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAucW5hLWl0ZW0gLnF1ZXN0aW9uLWNvbnRhaW5lciAucXVlc3Rpb24tY29sbGFwc2UtYnRuIHtcbiAgICBmbGV4OiAwIDAgMTQwcHg7XG4gICAgaGVpZ2h0OiA0NXB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cbn1cbi5xbmEtaXRlbSAucXVlc3Rpb24tY29udGFpbmVyIC5xdWVzdGlvbi1jb2xsYXBzZS1idG4gLnF1ZXN0aW9uLWNvbGxhcHNlLWJ0bi10ZXh0IHtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBmb250LWZhbWlseTogXCJhcmJlbFwiO1xuICBjb2xvcjogIzAwYTA5OTtcbiAgbGV0dGVyLXNwYWNpbmc6IDRweDtcbiAgbWFyZ2luLWxlZnQ6IDE0cHg7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5xbmEtaXRlbSAucXVlc3Rpb24tY29udGFpbmVyIC5xdWVzdGlvbi1jb2xsYXBzZS1idG4gLnF1ZXN0aW9uLWNvbGxhcHNlLWJ0bi10ZXh0IHtcbiAgICBmb250LXNpemU6IDIycHg7XG4gIH1cbn1cbi5xbmEtaXRlbSAucXVlc3Rpb24tY29udGFpbmVyIC5xdWVzdGlvbi1jb2xsYXBzZS1idG4gLmZhLWFuZ2xlLWRvdWJsZS1kb3duIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogIzAwYTA5OTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnFuYS1pdGVtIC5xdWVzdGlvbi1jb250YWluZXIgLnF1ZXN0aW9uLWNvbGxhcHNlLWJ0biAuZmEtYW5nbGUtZG91YmxlLWRvd24ge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAucW5hLWl0ZW0gLnF1ZXN0aW9uLWNvbnRhaW5lciB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbn1cbi5xbmEtaXRlbS5vcGVuIHtcbiAgYm94LXNoYWRvdzogNC41cHggNS4zNjJweCAxMHB4IDBweCByZ2JhKDQsIDI2LCA1NSwgMC4xKTtcbn1cbi5xbmEtaXRlbS5vcGVuIC5xdWVzdGlvbi1jb250YWluZXIgLnF1ZXN0aW9uLWNvbGxhcHNlLWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGEwOTk7XG59XG4ucW5hLWl0ZW0ub3BlbiAucXVlc3Rpb24tY29udGFpbmVyIC5xdWVzdGlvbi1jb2xsYXBzZS1idG4gLnF1ZXN0aW9uLWNvbGxhcHNlLWJ0bi10ZXh0IHtcbiAgY29sb3I6IHdoaXRlO1xufVxuLnFuYS1pdGVtLm9wZW4gLnF1ZXN0aW9uLWNvbnRhaW5lciAucXVlc3Rpb24tY29sbGFwc2UtYnRuIC5mYS1hbmdsZS1kb3VibGUtdXAge1xuICBtYXJnaW4tcmlnaHQ6IDE4cHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAucW5hLWl0ZW0ub3BlbiAucXVlc3Rpb24tY29udGFpbmVyIC5xdWVzdGlvbi1jb2xsYXBzZS1idG4gLmZhLWFuZ2xlLWRvdWJsZS11cCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG59XG4ucW5hLWl0ZW0gLnFuYS1pY29uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnFuYS1pdGVtIC5hbnN3ZXItY29udGFpbmVyIHtcbiAgcGFkZGluZzogMTBweCA2NXB4IDI1cHggMjkwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC1mYW1pbHk6IFwiaGVlYm9cIjtcbiAgY29sb3I6ICM4MTgxODE7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5xbmEtaXRlbSAuYW5zd2VyLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QnaItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-qna-item',
                templateUrl: './qna-item.component.html',
                styleUrls: ['./qna-item.component.scss']
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] }]; }, { qnaItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/qna/qna-list/qna-list.component.ts":
/*!****************************************************!*\
  !*** ./src/app/qna/qna-list/qna-list.component.ts ***!
  \****************************************************/
/*! exports provided: QnaListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QnaListComponent", function() { return QnaListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


function QnaListComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-qna-item", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const qnaItem_r255 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("qnaItem", qnaItem_r255);
} }
class QnaListComponent {
}
QnaListComponent.ɵfac = function QnaListComponent_Factory(t) { return new (t || QnaListComponent)(); };
QnaListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QnaListComponent, selectors: [["app-qna-list"]], inputs: { qnaList: "qnaList" }, decls: 2, vars: 1, consts: [[1, "qna-list-container"], [4, "ngFor", "ngForOf"], [1, "qna-item-container"], [3, "qnaItem"]], template: function QnaListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, QnaListComponent_ng_container_1_Template, 3, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.qnaList);
    } }, styles: [".qna-list-container[_ngcontent-%COMP%]   .qna-item-container[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n@media only screen and (max-width: 768px) {\n  .qna-list-container[_ngcontent-%COMP%]   .qna-item-container[_ngcontent-%COMP%] {\n    margin-left: 30px;\n    margin-right: 30px;\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcW5hL3FuYS1saXN0L0M6XFxVc2Vyc1xcVGVoaWxhXFxsYXN0XFxvdXJCcm9cXG91ci1icm90aGVycy13ZWIvc3JjXFxhcHBcXHFuYVxccW5hLWxpc3RcXHFuYS1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9xbmEvcW5hLWxpc3QvcW5hLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxtQkFBQTtBQ0FKO0FERUk7RUFIRjtJQUlJLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxrQkFBQTtFQ0NKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9xbmEvcW5hLWxpc3QvcW5hLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucW5hLWxpc3QtY29udGFpbmVyIHtcclxuICAucW5hLWl0ZW0tY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcblxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMzBweDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi5xbmEtbGlzdC1jb250YWluZXIgLnFuYS1pdGVtLWNvbnRhaW5lciB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5xbmEtbGlzdC1jb250YWluZXIgLnFuYS1pdGVtLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QnaListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-qna-list',
                templateUrl: './qna-list.component.html',
                styleUrls: ['./qna-list.component.scss']
            }]
    }], null, { qnaList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/qna/qna.module.ts":
/*!***********************************!*\
  !*** ./src/app/qna/qna.module.ts ***!
  \***********************************/
/*! exports provided: QnaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QnaModule", function() { return QnaModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _qna_list_qna_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./qna-list/qna-list.component */ "./src/app/qna/qna-list/qna-list.component.ts");
/* harmony import */ var _qna_list_qna_item_qna_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./qna-list/qna-item/qna-item.component */ "./src/app/qna/qna-list/qna-item/qna-item.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






class QnaModule {
}
QnaModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: QnaModule });
QnaModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function QnaModule_Factory(t) { return new (t || QnaModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](QnaModule, { declarations: [_qna_list_qna_list_component__WEBPACK_IMPORTED_MODULE_1__["QnaListComponent"], _qna_list_qna_item_qna_item_component__WEBPACK_IMPORTED_MODULE_2__["QnaItemComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]], exports: [_qna_list_qna_list_component__WEBPACK_IMPORTED_MODULE_1__["QnaListComponent"], _qna_list_qna_item_qna_item_component__WEBPACK_IMPORTED_MODULE_2__["QnaItemComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QnaModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_qna_list_qna_list_component__WEBPACK_IMPORTED_MODULE_1__["QnaListComponent"], _qna_list_qna_item_qna_item_component__WEBPACK_IMPORTED_MODULE_2__["QnaItemComponent"]],
                exports: [_qna_list_qna_list_component__WEBPACK_IMPORTED_MODULE_1__["QnaListComponent"], _qna_list_qna_item_qna_item_component__WEBPACK_IMPORTED_MODULE_2__["QnaItemComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]]
            }]
    }], null, null); })();
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetComponentScope"](_qna_list_qna_list_component__WEBPACK_IMPORTED_MODULE_1__["QnaListComponent"], [_qna_list_qna_list_component__WEBPACK_IMPORTED_MODULE_1__["QnaListComponent"], _qna_list_qna_item_qna_item_component__WEBPACK_IMPORTED_MODULE_2__["QnaItemComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgPluralCase"]], [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["KeyValuePipe"]]);


/***/ })

}]);
//# sourceMappingURL=qna-page-qna-page-module-es2015.js.map