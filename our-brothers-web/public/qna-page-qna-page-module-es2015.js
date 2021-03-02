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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-qna-list", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r261 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("qnaList", ctx_r261.qnaBrothers);
} }
function QnaPageComponent_ng_container_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-qna-list", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r262 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("qnaList", ctx_r262.qnaHosts);
} }
function QnaPageComponent_ng_container_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-qna-list", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r263 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("qnaList", ctx_r263.qnaParticipates);
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
QnaPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QnaPageComponent, selectors: [["app-qna-page"]], decls: 28, vars: 10, consts: [["src", "../../../assets/img/qnaHeader.jpg.png", "alt", "Questions and Answers Page Header Image", 1, "image-header"], [1, "site-divider"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "small-heading"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "medium-heading"], ["href", "https://connect2care.carmel6000.com/#/info", 1, "action-header-support-us", "site-button", "connectqne"], [1, "qna-types-list-container"], [1, "container"], [1, "role-buttons"], [1, "role-button", 3, "click"], [1, "qna-list-wrapper"], [3, "ngSwitch"], [4, "ngSwitchCase"], [3, "qnaList"]], template: function QnaPageComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgSwitchCase"], _qna_list_qna_list_component__WEBPACK_IMPORTED_MODULE_5__["QnaListComponent"]], styles: [".qna-types-list-container[_ngcontent-%COMP%] {\n  background-color: #00a099;\n  height: 278px;\n  margin-bottom: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n}\n@media only screen and (max-width: 768px) {\n  .qna-types-list-container[_ngcontent-%COMP%] {\n    margin-bottom: 30px;\n  }\n}\n.qna-types-list-container[_ngcontent-%COMP%]   .role-buttons[_ngcontent-%COMP%] {\n  display: flex;\n}\n@media only screen and (max-width: 768px) {\n  .qna-types-list-container[_ngcontent-%COMP%]   .role-buttons[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.qna-types-list-container[_ngcontent-%COMP%]   .role-buttons[_ngcontent-%COMP%]   .role-button[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 39px;\n  margin: 45px;\n  padding: 15px 20px;\n  border: 1px solid white;\n  cursor: pointer;\n  text-align: center;\n  font-family: \"arbel\";\n  color: white;\n  border-radius: 5px;\n}\n@media only screen and (max-width: 768px) {\n  .qna-types-list-container[_ngcontent-%COMP%]   .role-buttons[_ngcontent-%COMP%]   .role-button[_ngcontent-%COMP%] {\n    margin: 10px 45px 10px 45px;\n    font-size: 30px;\n    padding: 10px 20px;\n  }\n}\n@media only screen and (min-width: 768px) {\n  .qna-types-list-container[_ngcontent-%COMP%]   .role-buttons[_ngcontent-%COMP%]   .role-button[_ngcontent-%COMP%]:first-child {\n    margin-right: 0;\n  }\n}\n@media only screen and (min-width: 768px) {\n  .qna-types-list-container[_ngcontent-%COMP%]   .role-buttons[_ngcontent-%COMP%]   .role-button[_ngcontent-%COMP%]:last-child {\n    margin-left: 0;\n  }\n}\n.qna-types-list-container[_ngcontent-%COMP%]   .role-buttons[_ngcontent-%COMP%]   .role-button.current[_ngcontent-%COMP%] {\n  background-color: white;\n  color: #00a099;\n}\n.qna-list-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.connectqne[_ngcontent-%COMP%] {\n  background-color: #082551;\n  text-align: center;\n  margin-right: 40%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcW5hL3BhZ2UvQzpcXFVzZXJzXFxUZWhpbGFcXERlc2t0b3BcXGdvb2QtcHJvamVjdFxcb3VyYnJvdGhlcnMtb3VyYnJvdGhlcnNcXG91ci1icm90aGVycy13ZWIvc3JjXFxhcHBcXHFuYVxccGFnZVxccW5hLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3FuYS9wYWdlL3FuYS1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFNQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNKRjtBREhFO0VBTEY7SUFNSSxtQkFBQTtFQ01GO0FBQ0Y7QURDRTtFQUNFLGFBQUE7QUNDSjtBRENJO0VBSEY7SUFJSSxzQkFBQTtFQ0VKO0FBQ0Y7QURBSTtFQUNFLE9BQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0VOO0FEQU07RUFaRjtJQWFJLDJCQUFBO0lBQ0EsZUFBQTtJQUNBLGtCQUFBO0VDR047QUFDRjtBREFRO0VBREY7SUFFSSxlQUFBO0VDR1I7QUFDRjtBRENRO0VBREY7SUFFSSxjQUFBO0VDRVI7QUFDRjtBRENNO0VBQ0UsdUJBQUE7RUFDQSxjQUFBO0FDQ1I7QURLQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQ0ZGO0FESUE7RUFDQyx5QkFBQTtFQUNDLGtCQUFBO0VBRUQsaUJBQUE7QUNGRCIsImZpbGUiOiJzcmMvYXBwL3FuYS9wYWdlL3FuYS1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnFuYS10eXBlcy1saXN0LWNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDE2MCwgMTUzKTtcclxuICBoZWlnaHQ6IDI3OHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgfVxyXG5cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG5cclxuICAucm9sZS1idXR0b25zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG5cclxuICAgIC5yb2xlLWJ1dHRvbiB7XHJcbiAgICAgIGZsZXg6IDE7XHJcbiAgICAgIGZvbnQtc2l6ZTogMzlweDtcclxuICAgICAgbWFyZ2luOiA0NXB4O1xyXG4gICAgICBwYWRkaW5nOiAxNXB4IDIwcHg7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgZm9udC1mYW1pbHk6ICdhcmJlbCc7XHJcbiAgICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHJcbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICBtYXJnaW46IDEwcHggNDVweCAxMHB4IDQ1cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuY3VycmVudCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgY29sb3I6IHJnYigwLCAxNjAsIDE1Myk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5xbmEtbGlzdC13cmFwcGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5jb25uZWN0cW5lIHtcclxuIGJhY2tncm91bmQtY29sb3I6ICMwODI1NTE7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIC8vL2N1cnNvcjogcG9pbnRlcjtcclxuIG1hcmdpbi1yaWdodDogNDAlO1xyXG4gIC8vdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbiIsIi5xbmEtdHlwZXMtbGlzdC1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhMDk5O1xuICBoZWlnaHQ6IDI3OHB4O1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAucW5hLXR5cGVzLWxpc3QtY29udGFpbmVyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICB9XG59XG4ucW5hLXR5cGVzLWxpc3QtY29udGFpbmVyIC5yb2xlLWJ1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAucW5hLXR5cGVzLWxpc3QtY29udGFpbmVyIC5yb2xlLWJ1dHRvbnMge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbn1cbi5xbmEtdHlwZXMtbGlzdC1jb250YWluZXIgLnJvbGUtYnV0dG9ucyAucm9sZS1idXR0b24ge1xuICBmbGV4OiAxO1xuICBmb250LXNpemU6IDM5cHg7XG4gIG1hcmdpbjogNDVweDtcbiAgcGFkZGluZzogMTVweCAyMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcImFyYmVsXCI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAucW5hLXR5cGVzLWxpc3QtY29udGFpbmVyIC5yb2xlLWJ1dHRvbnMgLnJvbGUtYnV0dG9uIHtcbiAgICBtYXJnaW46IDEwcHggNDVweCAxMHB4IDQ1cHg7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAucW5hLXR5cGVzLWxpc3QtY29udGFpbmVyIC5yb2xlLWJ1dHRvbnMgLnJvbGUtYnV0dG9uOmZpcnN0LWNoaWxkIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLnFuYS10eXBlcy1saXN0LWNvbnRhaW5lciAucm9sZS1idXR0b25zIC5yb2xlLWJ1dHRvbjpsYXN0LWNoaWxkIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxufVxuLnFuYS10eXBlcy1saXN0LWNvbnRhaW5lciAucm9sZS1idXR0b25zIC5yb2xlLWJ1dHRvbi5jdXJyZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiAjMDBhMDk5O1xufVxuXG4ucW5hLWxpc3Qtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY29ubmVjdHFuZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwODI1NTE7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiA0MCU7XG59Il19 */"] });
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
        answer: `ניתן להכנס לעמוד <a target="_blank" href="/tell">'אני רוצה לספר'</a>. בעמוד יש למלא את פרטיך ולהשתבץ ליום הכנה ולאירוח הקרוב לביתך.`
    },
    {
        question: 'איך נראה מפגש של האחים שלנו?',
        answer: `כל מפגש נראה שונה, תלוי בך, באירוח ובדינמיקה שנוצרת. האחים והאחיות שמגיעים לערבים לספר את סיפורם מוזמנים לקחת חלק ביום הכנה על מנת לרכוש כלים פרקטיים לבניית הערב. ניתן להוריד את ערכת האח <a target="_blank" href="/">כאן</a>.
    <br/>
    קיימים מספר דברים קבועים כמעט בכל מפגש: התכנסות של המשתתפים בבית המארח, הצגה ופתיחה של המארח על הערב, והעברת ה"שרביט" אליך - עכשיו זה הזמן שלך בו תנהל את השיחה שהכנת מראש. אנו נשמח אם בפתיחת הערב תוכל לתת רקע על עמותת 'האחים שלנו' בכדי שעוד ועוד אנשים ייחשפו לפעילות שלנו ויקחו חלק בהנצחת האחים והאחיות השכולים.`
    },
    {
        question: 'איזה כלים יהיו לי לבנות את המפגש שלי?',
        answer: `האחים והאחיות שמגיעים לערבים לספר את סיפורם מוזמנים לקחת חלק ביום הכנה (יהיו סדנאות הדרכה פרקטיות וכן כלים רגשיים) לבניית הערב. ניתן להוריד את <a target="_blank" href="/assets/docs/ערכת%20אחים%20ואחיות%20-%20האחים%20שלנו.pdf">ערכת האח<a/>, המתכללת את הכלים הניתנים ביום זה.`
    },
    {
        question: 'האם אוכל לספר ביותר מבית מארח אחד?',
        answer: `וודאי, ניתן לבחור יותר מבית אחד להתארח בו דרך <a target="_blank" href="/meetings">עמוד המפגשים<a/> באתר, אך יש לשים לב שהאירוחים לא חופפים בתאריך ובשעה.`
    },
    {
        question: 'האם כל המפגשים יתקיימו בסלונים פרטיים?',
        answer: `המפגשים יתקיימו במקומות שונים ברחבי הארץ, ביניהם בתים פרטיים, חברות, ארגונים, תנועות נוער, בתי ספר ועוד. ניתן לבדוק את מאפייני המפגש <a target="_blank" href="/meetings">בעמוד המפגשים<a/> באתר.`
    },
    {
        question: 'האם אוכל לארח את עצמי בביתי?',
        answer: `בעיקרון כן, אך אנחנו לא ממליצים על כך. קיום המפגשים במקומות שאינם הבית האישי שלך מאפשרים להרחיב את מעגל הזכרון וההנצחה. כמו כן, ידוע לנו כי מפגש כזה מציף רגשות רבים ואין צורך להטריח את עצמך מעבר לכך. למרות האמור לעיל, במקרים מיוחדים כמובן שניתן <a target="_blank" href="/contact">ליצור איתנו קשר<a/>.`
    },
    {
        question: 'כשנרשמים לאתר ישנה הצעה להשתתף במפגש הכנה לאחים, מה זה אומר?',
        answer: `סדנאות ההכנה יתקיימו בין ה29.3-2.4 ברחבי הארץ במטרה להכין אותך ולסייע לך לקראת המפגשים.
    הסדנאות יכללו תכנים פרקטיים והקניית כלים שיסייעו לך מבנית ורגשית לקראת המפגש, בין אם לקחת חלק במפגשי 'האחים שלנו' בעבר ובין אם לא, כמו גם, הרצאות לדוגמה של שני אחים שכולים וסיוע בבניית השיחה ו/או המצגת.
    <br/>
    סדנאות ההכנה יתקיימו במספר מוקדים:
    <br/>
    - 29.03.20 בבאר שבע בין השעות 17:30-21:30, משרדי WEWORK, רח' חלקיקי האור 16<br/>
    - 31.03.20 בתל אביב בין השעות 17:00-21:00, משרדי WEWORK, רח' שוקן 23<br/>
    - 01.04.20 בירושלים בין השעות 18:00-22:00, משרדי WEWORK, רח' קינג ג'ורג' 20<br/>
    - 02.04.20 בחיפה בין השעות 17:00-21:00, משרדי WEWORK, רח' דרך העצמאות 45`
    },
    {
        question: 'אם אני מתארח בבית מארח שלא כתוב באתר, אוכל להגיע למפגש ההכנה?',
        answer: `בוודאי, הסדנאות פתוחות לכל האחים - אלו שרוצים לקחת חלק ולהעביר ערב ואלו שלא. סדנאות ההכנה יתקיימו בין ה29.3-2.4 ברחבי הארץ במטרה להכין אותך ולסייע לך לקראת המפגשים.
    <br/>
    הסדנאות יכללו תכנים פרקטיים והקניית כלים שיסייעו לך מבנית ורגשית לקראת המפגש, בין אם לקחת חלק במפגשי 'האחים שלנו' בעבר ובין אם לא, כמו גם הרצאות לדוגמא של שני אחים שכולים וסיוע בבניית השיחה ו/או המצגת.
    <br/>
    סדנאות ההכנה יתקיימו במספר מוקדים:
    <br/>
    - 29.03.20 בבאר שבע בין השעות 17:30-21:30, משרדי WEWORK, רח' חלקיקי האור 16<br/>
    - 31.03.20 בתל אביב בין השעות 17:00-21:00, משרדי WEWORK, רח' שוקן 23<br/>
    - 01.04.20 בירושלים בין השעות 18:00-22:00, משרדי WEWORK, רח' קינג ג'ורג' 20<br/>
    - 02.04.20 בחיפה בין השעות 17:00-21:00, משרדי WEWORK, רח' דרך העצמאות 45`
    },
    {
        question: 'איך אני יוצר קשר עם המארח?',
        answer: `מיד לאחר השיבוץ לאירוח, תגיע ל<a target="_blank" href="/assets/docs/ערכת%20אירוח%20-%20האחים%20שלנו.pdf">'דף האירוח'<a/> עם כל הפרטים הרלוונטים וכן תקבל דואר אלקטרוני הכולל את הפרטים הללו. במקביל, יקבל המארח את פרטי ההתקשרות שלך ויצור איתך קשר לחיבור ותיאום ציפיות. בשיחה חשוב להעלות מס' נושאים: צורך שלך בכלים ואביזרים שונים (כמו מקרן, מסך וכו'), הבנת פרטי קהל השומעים שיגיעו לערב, הבהרת נקודות חשובות, לשתף באורחים שרוצים להתלוות אליך לערב, האם יש צורך בעזרה כלשהי וכיוצ"ב. כמו כן, המארח שלך יקבל <a target="_blank" href="/assets/docs/ערכת%20אירוח%20-%20האחים%20שלנו.pdf">ערכת אירוח<a/> וניתן להסב את תשומת ליבו לקריאתה.`
    },
    {
        question: 'מה אני צריך להכין לערב?',
        answer: `מומלץ לעיין ב<a target="_blank" href="/assets/docs/ערכת%20אחים%20ואחיות%20-%20האחים%20שלנו.pdf">'ערכת אח'<a/> בה מפורט על ההכנה לקראת הערב. בכל מקרה אנו ממליצים להביא איתך לערב אמצעים ויזואלים: תמונות, מצגת, סרט. קטעי קריאה. מוזמן לצפות <a target="_blank" href="https://www.youtube.com/watch?v=l788HDtDVEI&list=PLJi3ky6m6AisA1gSnPNdi08F2c0gXEX8m&index=5">בהרצאתו<a/> של ד"ר צוריאל ראשי המעלה מספר טיפים חשובים לקראת הערב.
    <br/>
    לעיתים, מרוב התרגשות, המון סיפורים ומחשבות עולים באופן לא מתוכנן ולכן אנו ממליצים להביא איתך את מהלך המפגש והמסרים שתרצה להעביר, כתובים בנקודות על דף.`
    },
    {
        question: 'האם המפגשים מתקיימים בערב או ביום הזיכרון?',
        answer: `מפגשי 'האחים שלנו' יתקיימו ברובם ביום ראשון ה-26.4 בשעה 20:00. אך, ישנה אפשרות לקיים מפגשים לאורך השבוע סביב יום הזיכרון, בין התאריכים 22.4-28.4. ניתן לבדוק את התאריך והשעה ב<a target="_blank" href="/meeting">עמוד המפגשים<a/> בלחיצה על אירוח.`
    },
    {
        question: 'האם אוכל להעביר שיחה יחד עם אח/ות שלי?',
        answer: `כן, ואף לעיתים זה יכול להקל ולעזור. בשיחת היכרות עם המארח יש לציין זאת.`
    },
    {
        question: `מי הקים את עמותת 'האחים שלנו'?`,
        answer: `העמותה הוקמה על-ידי אחים ואחיות שכולים ומתנדבים נוספים. מוזמנים לקרוא עלינו עוד ב<a target="_blank" href="/team">עמוד הצוות<a/>.`
    },
    {
        question: 'אין אירוחים בקרבת מקום מגורי, מה האפשרויות שלי?',
        answer: `תוכל להציע לחברים ומכרים לפתוח את ביתם לאירוח ולהתארח אצלם, וכמובן שאנו נעשה מאמץ לעזור לך במציאת בית מארח במקרה הצורך.`
    },
    {
        question: 'האירוח שלי בוטל, מה אני עושה?',
        answer: `לעיתים דברים כאלו קורים, אנו משתדלים לעשות ככל יכולתנו למנוע מצבים כאלה. אם קרה מקרה כזה יש ליידע אותנו על כך על מנת שנמצא לך בית חלופי בהקדם האפשרי.`
    },
    {
        question: 'אוכל להביא איתי אנשים לאירוח?',
        answer: `מותר ואף מומלץ, לעניות דעתנו יש ערך בהימצאות אנשים קרובים אליך בערב כזה. כמובן שיש ליידע את המארח על כמות האנשים שמגיעים איתך`
    },
    {
        question: 'אני משתמש בסרטונים ותמונות בערב, האם אתם מספקים מקרן או שאני אחראי?',
        answer: `אין באפשרותינו לספק מקרן, אך ניתן להקרין דרך הטלוויזיה - יש לתאם כל צורך באביזרים מול המארח.`
    },
    {
        question: 'האם אני צריך להכין מצגת?',
        answer: `אנו ממליצים להכין מצגת שתלווה את השיחה שלך, המצגת יכולה להקל ולמקד את השיחה מול הקהל, לשבור את המונוטוניות של השיחה וכן מהווה אמצעי ויזואלי להכיר טוב יותר את סיפורך ואת אחיך.`
    },
    {
        question: 'עד מתי אפשר להירשם לאירוח?',
        answer: `עד יום שישי ה-17.4`
    },
    {
        question: 'כמה זמן אורך הערב?',
        answer: `בממוצע המפגשים נעים בין שעה-שעה וחצי, מאוד תלוי בך, בקהל השומעים ובמארח. חשוב לתאם ציפיות לפני כן ולתכנן מראש את הערב ואורכו.`
    }
];
const qnaHosts = [
    {
        question: `איך אני נרשם לארח?`,
        answer: `ניתן להכנס לעמוד <a target="_blank" href="/host">אני רוצה לארח<a/> ולהזין את פרטי האירוח. `
    },
    {
        question: `איך נראה ערב 'האחים שלנו'?`,
        answer: `כל מפגש נראה שונה, תלוי בך, באח/ות ובדינמיקה שנוצרת.
    <br/>
    קיימים מספר דברים קבועים כמעט בכל מפגש:
    <br/>
    התכנסות של המשתתפים בבית המארח, הצגה ופתיחה של המארח על הערב, והעברת ה"שרביט" אל האח. אנו נשמח אם בפתיחת הערב תוכל לתת רקע על עמותת 'האחים שלנו' בכדי שעוד ועוד אנשים ייחשפו לפעילות שלנו ויקח חלק בהנצחת האחים והאחיות השכולים.
    `
    },
    {
        question: `אם נרשמתי לארח זה אומר שבוודאות אח ישתבץ למפגש אצלי?`,
        answer: `בדרך כלל, כמות הנרשמים לאירוח גדולה מכמות האחים הנרשמים, מכיון שלרוב קל יותר לפתוח את הבית מאשר להוביל ולשתף בסיפור אישי. כאשר אח ישתבץ לאירוח אצלך, תקבל מסרון ומייל עם פרטיו. חשוב לקרוא על הנופל באתר <a target="_blank" href="https://www.izkor.gov.il/">יזכור<a/>, לבצע שיחת תיאום ציפיות או מפגש הכרות מקדים עם האח, וכן ישלח אליך <a target="_blank" href="/assets/docs/ערכת%20אירוח%20-%20האחים%20שלנו.pdf">ערכת אירוח<a/>. אם לא תקבל שיבוץ - ניתן כמובן להירשם כמשתתף באחד המפגשים הקרובים לביתך.
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
        answer: `תלוי בכמות המשתתפים שיכולה להיכנס לביתך / למקום האירוח. ניתן לקיים מפגשים בחללים גדולים, דוגמת מתנ"ס, אודיטוריום וכדומה, בתנאי שזה מתאים לאח וקיימים הכלים הנחוצים לאח (כמו מסך ומקרן במידת הצורך). בעת פתיחת האירוח, אנא רשום את כמות המשתתפים המקסימלית.`
    },
    {
        question: `איך אוכל ליצור קשר עם האנשים שנרשמו למפגש?`,
        answer: `ניתן לקבל את הפרטים של המשתתפים שנרשמו לביתך/למפגש בדף האירוח באתר.`
    },
    {
        question: `לאחר השיבוץ של אח לביתי מה עלי לעשות?`,
        answer: `כאשר אח ישתבץ לאירוח אצלך, תקבל מסרון ומייל עם פרטיו. חשוב לקרוא על הנופל באתר <a target="_blank" href="https://www.izkor.gov.il/">יזכור<a/>, לבצע שיחת תיאום ציפיות או לקיים מפגש הכרות מקדים עם האח, וכן ישלח אליך <a target="_blank" href="/assets/docs/ערכת%20אירוח%20-%20האחים%20שלנו.pdf">ערכת אירוח<a/>.`
    },
    {
        question: `אני רוצה לבטל את האירוח אצלי, מה עלי לעשות?`,
        answer: `חשוב מאוד להבין שבעת שיבוץ אח למפגש בביתך, יש התכווננות של האח לקראת המפגש ולכן, לביטול המפגש יש השלכות רבות. על כן, יש לעשות הכל על מנת לא לבטל.  יחד עם זאת אנו מבינים כי לעיתים יתכנו אירועים לא צפויים, ולכן אם יש צורך בביטול המפגש - ניתן <a target="_blank" href="/contact">ליצור איתנו קשר<a/>.`
    },
    {
        question: `מה אני עושה עם האח ששובץ אלי ביטל את הגעתו?`,
        answer: `ניתן <a target="_blank" href="/contact">ליצור איתנו קשר<a/> על מנת שנוכל לשבץ לך אח אחר.`
    },
    {
        question: `מה אני צריך להכין לקראת המפגש?`,
        answer: `האירוח צריך להיות באווירה נוחה ונעימה לאח ולמשתתפים. ניתן להכין כיבוד, מקום ישיבה נוח ולתאם ציפיות עם האח בנוגע לאביזרים שהוא צריך (כמו מקרן, מסך וכו'). בערכת האירוח ניתן למצוא שלטי הכוונה לאורחים, הנחיות, הסבר על העמותה והזמנות לאירוח. מידע נוסף בעמוד <a target="_blank" href="/agenda">מבנה הערב<a/>`
    },
    {
        question: `האם אני אוכל לקיים את המפגש של 'האחים שלנו' בשעות היום ובמסגרת בית ספר/ עבודה וכו?`,
        answer: `רוב המפגשים יתקיימו ביום ראשון ה-26.4 בשעה 20:00, אך ישנה אפשרות לקיים מפגשים לאורך השבוע סביב יום הזיכרון, בין התאריכים 22.4-28.4. ניתן לבדוק את התאריך והשעה ב<a target="_blank" href="/meetings">עמוד המפגשים<a/> בלחיצה על אירוח.`
    },
    {
        question: `האם המפגשים מתקיימים בערב או ביום הזיכרון?`,
        answer: `מפגשי 'האחים שלנו' יתקיימו ברובם ביום ראשון ה-26.4 בשעה 20:00. אך ישנה אפשרות לקיים מפגשים לאורך השבוע סביב יום הזיכרון, בין התאריכים 22.4-28.4. ניתן לבדוק את התאריך והשעה ב<a target="_blank" href="/meetings">עמוד המפגשים<a/> בלחיצה על אירוח.`
    },
    {
        question: `עד מתי ישנה אפשרות להירשם לאירוח בביתי?`,
        answer: `ניתן להרשם עד כשבועיים לפני יום הזיכרון.`
    },
    {
        question: `מה אני עושה בסוף המפגש?`,
        answer: `בסוף המפגש תקבלו משוב לדואר האלקטרוני שלכם ונשמח שתענו עליו על מנת שנוכל ללמוד מחווייתכם.כמו כן נשמח שתשתפו ברשתות החברתיות את התמונות מהמפגש ותתייגו את העמוד של האחים שלנו.`
    },
    {
        question: `אני לא גר בארץ ורוצה לקיים מפגש בחו"ל, מה אני צריך לעשות?`,
        answer: `ניתן <a target="_blank" href="/contact">ליצור איתנו קשר<a/> ונשמח לחזור אליך לפרטים נוספים.`
    },
    {
        question: `אם אני רוצה לארח אח ספציפי, מה עליי לעשות?`,
        answer: `אם יש לך היכרות מקדימה עם אח שכול, ניתן ליצור איתו קשר על מנת שירשם באתר וישתבץ אליך לאירוח. גם אם יש ביניכם היכרות מקדימה - חשוב שהאח ירשם במערכת כדי שנוכל לשוחח איתו ולהזמינו לפעילות העמותה ולקהילת האחים שלנו.`
    },
    {
        question: `האם תוכן המפגש מתאים לבני נוער?`,
        answer: `תוכן המפגשים מתאים לבני נוער, יש לציין בעת פתיחת המפגש באתר מיהו קהל היעד, וכן לציין זאת בשיחת תיאום הציפיות עם האח. `
    },
    {
        question: `כמה זמן אורך מפגש?`,
        answer: `בממוצע המפגשים נעים בין שעה-שעה וחצי, מאוד תלוי בך, בקהל השומעים ובאח. חשוב לתאם ציפיות לפני כן ולתכנן מראש את הערב ואורכו.`
    }
];
const qnaParticipates = [
    {
        question: `מה זה אומר 'משתתף'?`,
        answer: `משתתף הינו קהל השומעים אשר מגיעים למפגשים הפתוחים לקהל הרחב. כמובן שבין קהל השומעים, ישתתפו גם אחים ואחיות שכולים.`
    },
    {
        question: `איך ניתן להשתתף במפגשי 'האחים שלנו'?`,
        answer: `ניתן להכנס לעמוד '<a target="_blank" href="/participate">אני רוצה להשתתף<a/>' ולהזין את פרטיך. בעמוד המפגשים ניתן לחפש מפגשים הקרובים למקום מגוריך. לאחר שבחרת במפגש, ניתן ללחוץ על כפתור 'השתבץ'. לאחר השיבוץ, המארח יקבל הודעה ויאשר את השתתפותך. שימו לב לקראת המפגש שעצמו - שאכן השתבץ אח למפגש אליו נרשמתם.`
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
        answer: `לא, כל פעילות העמותה היא וולנטרית.`
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
        answer: `בממוצע המפגשים נעים בין שעה-שעה וחצי, הדבר תלוי בדינמיקת הערב, בקהל השומעים ובאח.`
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
    const ctx_r264 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx_r264.answerSafeHtml, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".qna-item[_ngcontent-%COMP%] {\n  background-color: #f8f8f8;\n  padding: 25px;\n  transition: box-shadow 0.3s;\n  border-radius: 5px;\n}\n@media only screen and (max-width: 768px) {\n  .qna-item[_ngcontent-%COMP%] {\n    padding: 10px;\n  }\n}\n.qna-item[_ngcontent-%COMP%]   .question-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n}\n.qna-item[_ngcontent-%COMP%]   .question-container[_ngcontent-%COMP%]   .question-mark[_ngcontent-%COMP%] {\n  width: 23px;\n  height: 33px;\n  background-image: url('question-mark.png');\n  background-size: 100% 100%;\n  margin-left: 40px;\n}\n@media only screen and (max-width: 768px) {\n  .qna-item[_ngcontent-%COMP%]   .question-container[_ngcontent-%COMP%]   .question-mark[_ngcontent-%COMP%] {\n    margin-left: 0;\n    margin-top: 10px;\n    margin-bottom: 20px;\n  }\n}\n.qna-item[_ngcontent-%COMP%]   .question-container[_ngcontent-%COMP%]   .question-text[_ngcontent-%COMP%] {\n  flex: 1 1 300px;\n  font-size: 18px;\n  font-family: \"heebo\";\n  color: #818181;\n}\n.qna-item[_ngcontent-%COMP%]   .question-container[_ngcontent-%COMP%]   .question-text.font-bold[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.qna-item[_ngcontent-%COMP%]   .question-container[_ngcontent-%COMP%]   .question-collapse-btn[_ngcontent-%COMP%] {\n  cursor: pointer;\n  flex: 0 0 160px;\n  border-width: 2px;\n  border-color: #00a099;\n  border-style: solid;\n  height: 55px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n@media only screen and (max-width: 768px) {\n  .qna-item[_ngcontent-%COMP%]   .question-container[_ngcontent-%COMP%]   .question-collapse-btn[_ngcontent-%COMP%] {\n    flex: 0 0 140px;\n    height: 45px;\n    margin: auto;\n    margin-top: 20px;\n    margin-bottom: 20px;\n  }\n}\n.qna-item[_ngcontent-%COMP%]   .question-container[_ngcontent-%COMP%]   .question-collapse-btn[_ngcontent-%COMP%]   .question-collapse-btn-text[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-family: \"arbel\";\n  color: #00a099;\n  letter-spacing: 4px;\n  margin-left: 14px;\n}\n@media only screen and (max-width: 768px) {\n  .qna-item[_ngcontent-%COMP%]   .question-container[_ngcontent-%COMP%]   .question-collapse-btn[_ngcontent-%COMP%]   .question-collapse-btn-text[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n}\n.qna-item[_ngcontent-%COMP%]   .question-container[_ngcontent-%COMP%]   .question-collapse-btn[_ngcontent-%COMP%]   .fa-angle-double-down[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #00a099;\n}\n@media only screen and (max-width: 768px) {\n  .qna-item[_ngcontent-%COMP%]   .question-container[_ngcontent-%COMP%]   .question-collapse-btn[_ngcontent-%COMP%]   .fa-angle-double-down[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n@media only screen and (max-width: 768px) {\n  .qna-item[_ngcontent-%COMP%]   .question-container[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n.qna-item.open[_ngcontent-%COMP%] {\n  box-shadow: 4.5px 5.362px 10px 0px rgba(4, 26, 55, 0.1);\n}\n.qna-item.open[_ngcontent-%COMP%]   .question-container[_ngcontent-%COMP%]   .question-collapse-btn[_ngcontent-%COMP%] {\n  background-color: #00a099;\n}\n.qna-item.open[_ngcontent-%COMP%]   .question-container[_ngcontent-%COMP%]   .question-collapse-btn[_ngcontent-%COMP%]   .question-collapse-btn-text[_ngcontent-%COMP%] {\n  color: white;\n}\n.qna-item.open[_ngcontent-%COMP%]   .question-container[_ngcontent-%COMP%]   .question-collapse-btn[_ngcontent-%COMP%]   .fa-angle-double-up[_ngcontent-%COMP%] {\n  margin-right: 18px;\n  font-size: 20px;\n  color: white;\n}\n@media only screen and (max-width: 768px) {\n  .qna-item.open[_ngcontent-%COMP%]   .question-container[_ngcontent-%COMP%]   .question-collapse-btn[_ngcontent-%COMP%]   .fa-angle-double-up[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n.qna-item[_ngcontent-%COMP%]   .qna-icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.qna-item[_ngcontent-%COMP%]   .answer-container[_ngcontent-%COMP%] {\n  padding: 10px 65px 25px 290px;\n  font-size: 18px;\n  font-family: \"heebo\";\n  color: #818181;\n}\n@media only screen and (max-width: 768px) {\n  .qna-item[_ngcontent-%COMP%]   .answer-container[_ngcontent-%COMP%] {\n    padding: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcW5hL3FuYS1saXN0L3FuYS1pdGVtL0M6XFxVc2Vyc1xcVGVoaWxhXFxEZXNrdG9wXFxnb29kLXByb2plY3RcXG91cmJyb3RoZXJzLW91cmJyb3RoZXJzXFxvdXItYnJvdGhlcnMtd2ViL3NyY1xcYXBwXFxxbmFcXHFuYS1saXN0XFxxbmEtaXRlbVxccW5hLWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3FuYS9xbmEtbGlzdC9xbmEtaXRlbS9xbmEtaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7QUNDRjtBRENFO0VBTkY7SUFPSSxhQUFBO0VDRUY7QUFDRjtBREFFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FDRUo7QURBSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMENBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0FDRU47QURBTTtFQVBGO0lBUUksY0FBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7RUNHTjtBQUNGO0FEQUk7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtBQ0VOO0FEQU07RUFDRSxpQkFBQTtBQ0VSO0FERUk7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFFQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0ROO0FER007RUFaRjtJQWFJLGVBQUE7SUFDQSxZQUFBO0lBQ0EsWUFBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7RUNBTjtBQUNGO0FERU07RUFDRSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ0FSO0FERVE7RUFQRjtJQVFJLGVBQUE7RUNDUjtBQUNGO0FERU07RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQ0FSO0FERVE7RUFKRjtJQUtJLGVBQUE7RUNDUjtBQUNGO0FER0k7RUF6RUY7SUEwRUksdUJBQUE7RUNBSjtBQUNGO0FER0U7RUFDRSx1REFBQTtBQ0RKO0FESU07RUFDRSx5QkFBQTtBQ0ZSO0FESVE7RUFDRSxZQUFBO0FDRlY7QURLUTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNIVjtBREtVO0VBTEY7SUFNSSxlQUFBO0VDRlY7QUFDRjtBRE9FO0VBQ0UsZUFBQTtBQ0xKO0FEUUU7RUFDRSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7QUNOSjtBRFFJO0VBTkY7SUFPSSxhQUFBO0VDTEo7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3FuYS9xbmEtbGlzdC9xbmEtaXRlbS9xbmEtaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5xbmEtaXRlbSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0OCwgMjQ4LCAyNDgpO1xyXG4gIHBhZGRpbmc6IDI1cHg7XHJcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjNzO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICB9XHJcblxyXG4gIC5xdWVzdGlvbi1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG5cclxuICAgIC5xdWVzdGlvbi1tYXJrIHtcclxuICAgICAgd2lkdGg6IDIzcHg7XHJcbiAgICAgIGhlaWdodDogMzNweDtcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKHNyYy9hc3NldHMvaW1nL3F1ZXN0aW9uLW1hcmsucG5nKTtcclxuICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xyXG5cclxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5xdWVzdGlvbi10ZXh0IHtcclxuICAgICAgZmxleDogMSAxIDMwMHB4O1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnaGVlYm8nO1xyXG4gICAgICBjb2xvcjogcmdiKDEyOSwgMTI5LCAxMjkpO1xyXG5cclxuICAgICAgJi5mb250LWJvbGQge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnF1ZXN0aW9uLWNvbGxhcHNlLWJ0biB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgZmxleDogMCAwIDE2MHB4O1xyXG4gICAgICBib3JkZXItd2lkdGg6IDJweDtcclxuICAgICAgYm9yZGVyLWNvbG9yOiByZ2IoMCwgMTYwLCAxNTMpO1xyXG4gICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgICBoZWlnaHQ6IDU1cHg7XHJcblxyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICBmbGV4OiAwIDAgMTQwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5xdWVzdGlvbi1jb2xsYXBzZS1idG4tdGV4dCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnYXJiZWwnO1xyXG4gICAgICAgIGNvbG9yOiByZ2IoMCwgMTYwLCAxNTMpO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE0cHg7XHJcblxyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5mYS1hbmdsZS1kb3VibGUtZG93biB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGNvbG9yOiByZ2IoMCwgMTYwLCAxNTMpO1xyXG5cclxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYub3BlbiB7XHJcbiAgICBib3gtc2hhZG93OiA0LjVweCA1LjM2MnB4IDEwcHggMHB4IHJnYmEoNCwgMjYsIDU1LCAwLjEpO1xyXG5cclxuICAgIC5xdWVzdGlvbi1jb250YWluZXIge1xyXG4gICAgICAucXVlc3Rpb24tY29sbGFwc2UtYnRuIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMTYwLCAxNTMpO1xyXG5cclxuICAgICAgICAucXVlc3Rpb24tY29sbGFwc2UtYnRuLXRleHQge1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmZhLWFuZ2xlLWRvdWJsZS11cCB7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE4cHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcblxyXG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5xbmEtaWNvbntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gIC5hbnN3ZXItY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDEwcHggNjVweCAyNXB4IDI5MHB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdoZWVibyc7XHJcbiAgICBjb2xvcjogcmdiKDEyOSwgMTI5LCAxMjkpO1xyXG5cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgcGFkZGluZzogMTBweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLnFuYS1pdGVtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcbiAgcGFkZGluZzogMjVweDtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjNzO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5xbmEtaXRlbSB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxufVxuLnFuYS1pdGVtIC5xdWVzdGlvbi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4ucW5hLWl0ZW0gLnF1ZXN0aW9uLWNvbnRhaW5lciAucXVlc3Rpb24tbWFyayB7XG4gIHdpZHRoOiAyM3B4O1xuICBoZWlnaHQ6IDMzcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChzcmMvYXNzZXRzL2ltZy9xdWVzdGlvbi1tYXJrLnBuZyk7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICBtYXJnaW4tbGVmdDogNDBweDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnFuYS1pdGVtIC5xdWVzdGlvbi1jb250YWluZXIgLnF1ZXN0aW9uLW1hcmsge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxufVxuLnFuYS1pdGVtIC5xdWVzdGlvbi1jb250YWluZXIgLnF1ZXN0aW9uLXRleHQge1xuICBmbGV4OiAxIDEgMzAwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC1mYW1pbHk6IFwiaGVlYm9cIjtcbiAgY29sb3I6ICM4MTgxODE7XG59XG4ucW5hLWl0ZW0gLnF1ZXN0aW9uLWNvbnRhaW5lciAucXVlc3Rpb24tdGV4dC5mb250LWJvbGQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5xbmEtaXRlbSAucXVlc3Rpb24tY29udGFpbmVyIC5xdWVzdGlvbi1jb2xsYXBzZS1idG4ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZsZXg6IDAgMCAxNjBweDtcbiAgYm9yZGVyLXdpZHRoOiAycHg7XG4gIGJvcmRlci1jb2xvcjogIzAwYTA5OTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgaGVpZ2h0OiA1NXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnFuYS1pdGVtIC5xdWVzdGlvbi1jb250YWluZXIgLnF1ZXN0aW9uLWNvbGxhcHNlLWJ0biB7XG4gICAgZmxleDogMCAwIDE0MHB4O1xuICAgIGhlaWdodDogNDVweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG59XG4ucW5hLWl0ZW0gLnF1ZXN0aW9uLWNvbnRhaW5lciAucXVlc3Rpb24tY29sbGFwc2UtYnRuIC5xdWVzdGlvbi1jb2xsYXBzZS1idG4tdGV4dCB7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgZm9udC1mYW1pbHk6IFwiYXJiZWxcIjtcbiAgY29sb3I6ICMwMGEwOTk7XG4gIGxldHRlci1zcGFjaW5nOiA0cHg7XG4gIG1hcmdpbi1sZWZ0OiAxNHB4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAucW5hLWl0ZW0gLnF1ZXN0aW9uLWNvbnRhaW5lciAucXVlc3Rpb24tY29sbGFwc2UtYnRuIC5xdWVzdGlvbi1jb2xsYXBzZS1idG4tdGV4dCB7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICB9XG59XG4ucW5hLWl0ZW0gLnF1ZXN0aW9uLWNvbnRhaW5lciAucXVlc3Rpb24tY29sbGFwc2UtYnRuIC5mYS1hbmdsZS1kb3VibGUtZG93biB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICMwMGEwOTk7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5xbmEtaXRlbSAucXVlc3Rpb24tY29udGFpbmVyIC5xdWVzdGlvbi1jb2xsYXBzZS1idG4gLmZhLWFuZ2xlLWRvdWJsZS1kb3duIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnFuYS1pdGVtIC5xdWVzdGlvbi1jb250YWluZXIge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG59XG4ucW5hLWl0ZW0ub3BlbiB7XG4gIGJveC1zaGFkb3c6IDQuNXB4IDUuMzYycHggMTBweCAwcHggcmdiYSg0LCAyNiwgNTUsIDAuMSk7XG59XG4ucW5hLWl0ZW0ub3BlbiAucXVlc3Rpb24tY29udGFpbmVyIC5xdWVzdGlvbi1jb2xsYXBzZS1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhMDk5O1xufVxuLnFuYS1pdGVtLm9wZW4gLnF1ZXN0aW9uLWNvbnRhaW5lciAucXVlc3Rpb24tY29sbGFwc2UtYnRuIC5xdWVzdGlvbi1jb2xsYXBzZS1idG4tdGV4dCB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5xbmEtaXRlbS5vcGVuIC5xdWVzdGlvbi1jb250YWluZXIgLnF1ZXN0aW9uLWNvbGxhcHNlLWJ0biAuZmEtYW5nbGUtZG91YmxlLXVwIHtcbiAgbWFyZ2luLXJpZ2h0OiAxOHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnFuYS1pdGVtLm9wZW4gLnF1ZXN0aW9uLWNvbnRhaW5lciAucXVlc3Rpb24tY29sbGFwc2UtYnRuIC5mYS1hbmdsZS1kb3VibGUtdXAge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxufVxuLnFuYS1pdGVtIC5xbmEtaWNvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5xbmEtaXRlbSAuYW5zd2VyLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDEwcHggNjVweCAyNXB4IDI5MHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtZmFtaWx5OiBcImhlZWJvXCI7XG4gIGNvbG9yOiAjODE4MTgxO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAucW5hLWl0ZW0gLmFuc3dlci1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cbn0iXX0= */"] });
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
    const qnaItem_r260 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("qnaItem", qnaItem_r260);
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
    } }, styles: [".qna-list-container[_ngcontent-%COMP%]   .qna-item-container[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n@media only screen and (max-width: 768px) {\n  .qna-list-container[_ngcontent-%COMP%]   .qna-item-container[_ngcontent-%COMP%] {\n    margin-left: 30px;\n    margin-right: 30px;\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcW5hL3FuYS1saXN0L0M6XFxVc2Vyc1xcVGVoaWxhXFxEZXNrdG9wXFxnb29kLXByb2plY3RcXG91cmJyb3RoZXJzLW91cmJyb3RoZXJzXFxvdXItYnJvdGhlcnMtd2ViL3NyY1xcYXBwXFxxbmFcXHFuYS1saXN0XFxxbmEtbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcW5hL3FuYS1saXN0L3FuYS1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsbUJBQUE7QUNBSjtBREVJO0VBSEY7SUFJSSxpQkFBQTtJQUNBLGtCQUFBO0lBQ0Esa0JBQUE7RUNDSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcW5hL3FuYS1saXN0L3FuYS1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnFuYS1saXN0LWNvbnRhaW5lciB7XHJcbiAgLnFuYS1pdGVtLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG5cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIucW5hLWxpc3QtY29udGFpbmVyIC5xbmEtaXRlbS1jb250YWluZXIge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAucW5hLWxpc3QtY29udGFpbmVyIC5xbmEtaXRlbS1jb250YWluZXIge1xuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMzBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn0iXX0= */"] });
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