function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["qna-page-qna-page-module"], {
  /***/
  "./src/app/qna/page/qna-page.component.ts":
  /*!************************************************!*\
    !*** ./src/app/qna/page/qna-page.component.ts ***!
    \************************************************/

  /*! exports provided: QnaPageComponent */

  /***/
  function srcAppQnaPageQnaPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QnaPageComponent", function () {
      return QnaPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! models */
    "../types/models/index.ts");
    /* harmony import */


    var _qnas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./qnas */
    "./src/app/qna/page/qnas.ts");
    /* harmony import */


    var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/services/auth.service */
    "./src/app/shared/services/auth.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _qna_list_qna_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../qna-list/qna-list.component */
    "./src/app/qna/qna-list/qna-list.component.ts");

    function QnaPageComponent_ng_container_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-qna-list", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r261 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("qnaList", ctx_r261.qnaBrothers);
      }
    }

    function QnaPageComponent_ng_container_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-qna-list", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r262 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("qnaList", ctx_r262.qnaHosts);
      }
    }

    function QnaPageComponent_ng_container_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-qna-list", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r263 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("qnaList", ctx_r263.qnaParticipates);
      }
    }

    var QnaPageComponent = /*#__PURE__*/function () {
      function QnaPageComponent(authService) {
        _classCallCheck(this, QnaPageComponent);

        this.authService = authService;
        this.UserRole = models__WEBPACK_IMPORTED_MODULE_1__["UserRole"];
        this.qnaBrothers = _qnas__WEBPACK_IMPORTED_MODULE_2__["qnaBorthers"];
        this.qnaHosts = _qnas__WEBPACK_IMPORTED_MODULE_2__["qnaHosts"];
        this.qnaParticipates = _qnas__WEBPACK_IMPORTED_MODULE_2__["qnaParticipates"];
      }

      _createClass(QnaPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.authService.user.subscribe(function (user) {
            _this.currentQType = user && user.role || models__WEBPACK_IMPORTED_MODULE_1__["UserRole"].bereaved;
          });
        }
      }]);

      return QnaPageComponent;
    }();

    QnaPageComponent.ɵfac = function QnaPageComponent_Factory(t) {
      return new (t || QnaPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]));
    };

    QnaPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: QnaPageComponent,
      selectors: [["app-qna-page"]],
      decls: 28,
      vars: 10,
      consts: [["src", "../../../assets/img/qnaHeader.jpg.png", "alt", "Questions and Answers Page Header Image", 1, "image-header"], [1, "site-divider"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "small-heading"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "medium-heading"], ["href", "https://connect2care.carmel6000.com/#/info", 1, "action-header-support-us", "site-button", "connectqne"], [1, "qna-types-list-container"], [1, "container"], [1, "role-buttons"], [1, "role-button", 3, "click"], [1, "qna-list-wrapper"], [3, "ngSwitch"], [4, "ngSwitchCase"], [3, "qnaList"]],
      template: function QnaPageComponent_Template(rf, ctx) {
        if (rf & 1) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QnaPageComponent_Template_div_click_16_listener() {
            return ctx.currentQType = ctx.UserRole.bereaved;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " \u05D0\u05D7\u05D9\u05DD ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QnaPageComponent_Template_div_click_18_listener() {
            return ctx.currentQType = ctx.UserRole.host;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " \u05DE\u05D0\u05E8\u05D7\u05D9\u05DD ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QnaPageComponent_Template_div_click_20_listener() {
            return ctx.currentQType = ctx.UserRole.participate;
          });

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
        }

        if (rf & 2) {
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
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgSwitchCase"], _qna_list_qna_list_component__WEBPACK_IMPORTED_MODULE_5__["QnaListComponent"]],
      styles: [".qna-types-list-container[_ngcontent-%COMP%] {\n  background-color: #00a099;\n  height: 278px;\n  margin-bottom: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n}\n@media only screen and (max-width: 768px) {\n  .qna-types-list-container[_ngcontent-%COMP%] {\n    margin-bottom: 30px;\n  }\n}\n.qna-types-list-container[_ngcontent-%COMP%]   .role-buttons[_ngcontent-%COMP%] {\n  display: flex;\n}\n@media only screen and (max-width: 768px) {\n  .qna-types-list-container[_ngcontent-%COMP%]   .role-buttons[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.qna-types-list-container[_ngcontent-%COMP%]   .role-buttons[_ngcontent-%COMP%]   .role-button[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 39px;\n  margin: 45px;\n  padding: 15px 20px;\n  border: 1px solid white;\n  cursor: pointer;\n  text-align: center;\n  font-family: \"arbel\";\n  color: white;\n  border-radius: 5px;\n}\n@media only screen and (max-width: 768px) {\n  .qna-types-list-container[_ngcontent-%COMP%]   .role-buttons[_ngcontent-%COMP%]   .role-button[_ngcontent-%COMP%] {\n    margin: 10px 45px 10px 45px;\n    font-size: 30px;\n    padding: 10px 20px;\n  }\n}\n@media only screen and (min-width: 768px) {\n  .qna-types-list-container[_ngcontent-%COMP%]   .role-buttons[_ngcontent-%COMP%]   .role-button[_ngcontent-%COMP%]:first-child {\n    margin-right: 0;\n  }\n}\n@media only screen and (min-width: 768px) {\n  .qna-types-list-container[_ngcontent-%COMP%]   .role-buttons[_ngcontent-%COMP%]   .role-button[_ngcontent-%COMP%]:last-child {\n    margin-left: 0;\n  }\n}\n.qna-types-list-container[_ngcontent-%COMP%]   .role-buttons[_ngcontent-%COMP%]   .role-button.current[_ngcontent-%COMP%] {\n  background-color: white;\n  color: #00a099;\n}\n.qna-list-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.connectqne[_ngcontent-%COMP%] {\n  background-color: #082551;\n  text-align: center;\n  margin-right: 40%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcW5hL3BhZ2UvQzpcXFVzZXJzXFxUZWhpbGFcXERlc2t0b3BcXGdvb2QtcHJvamVjdFxcb3VyYnJvdGhlcnMtb3VyYnJvdGhlcnNcXG91ci1icm90aGVycy13ZWIvc3JjXFxhcHBcXHFuYVxccGFnZVxccW5hLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3FuYS9wYWdlL3FuYS1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFNQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNKRjtBREhFO0VBTEY7SUFNSSxtQkFBQTtFQ01GO0FBQ0Y7QURDRTtFQUNFLGFBQUE7QUNDSjtBRENJO0VBSEY7SUFJSSxzQkFBQTtFQ0VKO0FBQ0Y7QURBSTtFQUNFLE9BQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0VOO0FEQU07RUFaRjtJQWFJLDJCQUFBO0lBQ0EsZUFBQTtJQUNBLGtCQUFBO0VDR047QUFDRjtBREFRO0VBREY7SUFFSSxlQUFBO0VDR1I7QUFDRjtBRENRO0VBREY7SUFFSSxjQUFBO0VDRVI7QUFDRjtBRENNO0VBQ0UsdUJBQUE7RUFDQSxjQUFBO0FDQ1I7QURLQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQ0ZGO0FESUE7RUFDQyx5QkFBQTtFQUNDLGtCQUFBO0VBRUQsaUJBQUE7QUNGRCIsImZpbGUiOiJzcmMvYXBwL3FuYS9wYWdlL3FuYS1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnFuYS10eXBlcy1saXN0LWNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDE2MCwgMTUzKTtcclxuICBoZWlnaHQ6IDI3OHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgfVxyXG5cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG5cclxuICAucm9sZS1idXR0b25zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG5cclxuICAgIC5yb2xlLWJ1dHRvbiB7XHJcbiAgICAgIGZsZXg6IDE7XHJcbiAgICAgIGZvbnQtc2l6ZTogMzlweDtcclxuICAgICAgbWFyZ2luOiA0NXB4O1xyXG4gICAgICBwYWRkaW5nOiAxNXB4IDIwcHg7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgZm9udC1mYW1pbHk6ICdhcmJlbCc7XHJcbiAgICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHJcbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICBtYXJnaW46IDEwcHggNDVweCAxMHB4IDQ1cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuY3VycmVudCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgY29sb3I6IHJnYigwLCAxNjAsIDE1Myk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5xbmEtbGlzdC13cmFwcGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5jb25uZWN0cW5lIHtcclxuIGJhY2tncm91bmQtY29sb3I6ICMwODI1NTE7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIC8vL2N1cnNvcjogcG9pbnRlcjtcclxuIG1hcmdpbi1yaWdodDogNDAlO1xyXG4gIC8vdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbiIsIi5xbmEtdHlwZXMtbGlzdC1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhMDk5O1xuICBoZWlnaHQ6IDI3OHB4O1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAucW5hLXR5cGVzLWxpc3QtY29udGFpbmVyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICB9XG59XG4ucW5hLXR5cGVzLWxpc3QtY29udGFpbmVyIC5yb2xlLWJ1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAucW5hLXR5cGVzLWxpc3QtY29udGFpbmVyIC5yb2xlLWJ1dHRvbnMge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbn1cbi5xbmEtdHlwZXMtbGlzdC1jb250YWluZXIgLnJvbGUtYnV0dG9ucyAucm9sZS1idXR0b24ge1xuICBmbGV4OiAxO1xuICBmb250LXNpemU6IDM5cHg7XG4gIG1hcmdpbjogNDVweDtcbiAgcGFkZGluZzogMTVweCAyMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcImFyYmVsXCI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAucW5hLXR5cGVzLWxpc3QtY29udGFpbmVyIC5yb2xlLWJ1dHRvbnMgLnJvbGUtYnV0dG9uIHtcbiAgICBtYXJnaW46IDEwcHggNDVweCAxMHB4IDQ1cHg7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAucW5hLXR5cGVzLWxpc3QtY29udGFpbmVyIC5yb2xlLWJ1dHRvbnMgLnJvbGUtYnV0dG9uOmZpcnN0LWNoaWxkIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLnFuYS10eXBlcy1saXN0LWNvbnRhaW5lciAucm9sZS1idXR0b25zIC5yb2xlLWJ1dHRvbjpsYXN0LWNoaWxkIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxufVxuLnFuYS10eXBlcy1saXN0LWNvbnRhaW5lciAucm9sZS1idXR0b25zIC5yb2xlLWJ1dHRvbi5jdXJyZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiAjMDBhMDk5O1xufVxuXG4ucW5hLWxpc3Qtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY29ubmVjdHFuZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwODI1NTE7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiA0MCU7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QnaPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-qna-page',
          templateUrl: './qna-page.component.html',
          styleUrls: ['./qna-page.component.scss']
        }]
      }], function () {
        return [{
          type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/qna/page/qna-page.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/qna/page/qna-page.module.ts ***!
    \*********************************************/

  /*! exports provided: QnaPageModule */

  /***/
  function srcAppQnaPageQnaPageModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QnaPageModule", function () {
      return QnaPageModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _qna_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./qna-page.component */
    "./src/app/qna/page/qna-page.component.ts");
    /* harmony import */


    var _qna_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../qna.module */
    "./src/app/qna/qna.module.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var routes = [{
      path: '',
      component: _qna_page_component__WEBPACK_IMPORTED_MODULE_1__["QnaPageComponent"]
    }];

    var QnaPageModule = function QnaPageModule() {
      _classCallCheck(this, QnaPageModule);
    };

    QnaPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: QnaPageModule
    });
    QnaPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function QnaPageModule_Factory(t) {
        return new (t || QnaPageModule)();
      },
      imports: [[_qna_module__WEBPACK_IMPORTED_MODULE_2__["QnaModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](QnaPageModule, {
        declarations: [_qna_page_component__WEBPACK_IMPORTED_MODULE_1__["QnaPageComponent"]],
        imports: [_qna_module__WEBPACK_IMPORTED_MODULE_2__["QnaModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QnaPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_qna_module__WEBPACK_IMPORTED_MODULE_2__["QnaModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]],
          declarations: [_qna_page_component__WEBPACK_IMPORTED_MODULE_1__["QnaPageComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/qna/page/qnas.ts":
  /*!**********************************!*\
    !*** ./src/app/qna/page/qnas.ts ***!
    \**********************************/

  /*! exports provided: qnaBorthers, qnaHosts, qnaParticipates */

  /***/
  function srcAppQnaPageQnasTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "qnaBorthers", function () {
      return qnaBorthers;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "qnaHosts", function () {
      return qnaHosts;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "qnaParticipates", function () {
      return qnaParticipates;
    });

    var qnaBorthers = [{
      question: 'איך אני נרשם לבית מארח לספר את סיפורי?',
      answer: "\u05E0\u05D9\u05EA\u05DF \u05DC\u05D4\u05DB\u05E0\u05E1 \u05DC\u05E2\u05DE\u05D5\u05D3 <a target=\"_blank\" href=\"/tell\">'\u05D0\u05E0\u05D9 \u05E8\u05D5\u05E6\u05D4 \u05DC\u05E1\u05E4\u05E8'</a>. \u05D1\u05E2\u05DE\u05D5\u05D3 \u05D9\u05E9 \u05DC\u05DE\u05DC\u05D0 \u05D0\u05EA \u05E4\u05E8\u05D8\u05D9\u05DA \u05D5\u05DC\u05D4\u05E9\u05EA\u05D1\u05E5 \u05DC\u05D9\u05D5\u05DD \u05D4\u05DB\u05E0\u05D4 \u05D5\u05DC\u05D0\u05D9\u05E8\u05D5\u05D7 \u05D4\u05E7\u05E8\u05D5\u05D1 \u05DC\u05D1\u05D9\u05EA\u05DA."
    }, {
      question: 'איך נראה מפגש של האחים שלנו?',
      answer: "\u05DB\u05DC \u05DE\u05E4\u05D2\u05E9 \u05E0\u05E8\u05D0\u05D4 \u05E9\u05D5\u05E0\u05D4, \u05EA\u05DC\u05D5\u05D9 \u05D1\u05DA, \u05D1\u05D0\u05D9\u05E8\u05D5\u05D7 \u05D5\u05D1\u05D3\u05D9\u05E0\u05DE\u05D9\u05E7\u05D4 \u05E9\u05E0\u05D5\u05E6\u05E8\u05EA. \u05D4\u05D0\u05D7\u05D9\u05DD \u05D5\u05D4\u05D0\u05D7\u05D9\u05D5\u05EA \u05E9\u05DE\u05D2\u05D9\u05E2\u05D9\u05DD \u05DC\u05E2\u05E8\u05D1\u05D9\u05DD \u05DC\u05E1\u05E4\u05E8 \u05D0\u05EA \u05E1\u05D9\u05E4\u05D5\u05E8\u05DD \u05DE\u05D5\u05D6\u05DE\u05E0\u05D9\u05DD \u05DC\u05E7\u05D7\u05EA \u05D7\u05DC\u05E7 \u05D1\u05D9\u05D5\u05DD \u05D4\u05DB\u05E0\u05D4 \u05E2\u05DC \u05DE\u05E0\u05EA \u05DC\u05E8\u05DB\u05D5\u05E9 \u05DB\u05DC\u05D9\u05DD \u05E4\u05E8\u05E7\u05D8\u05D9\u05D9\u05DD \u05DC\u05D1\u05E0\u05D9\u05D9\u05EA \u05D4\u05E2\u05E8\u05D1. \u05E0\u05D9\u05EA\u05DF \u05DC\u05D4\u05D5\u05E8\u05D9\u05D3 \u05D0\u05EA \u05E2\u05E8\u05DB\u05EA \u05D4\u05D0\u05D7 <a target=\"_blank\" href=\"/\">\u05DB\u05D0\u05DF</a>.\n    <br/>\n    \u05E7\u05D9\u05D9\u05DE\u05D9\u05DD \u05DE\u05E1\u05E4\u05E8 \u05D3\u05D1\u05E8\u05D9\u05DD \u05E7\u05D1\u05D5\u05E2\u05D9\u05DD \u05DB\u05DE\u05E2\u05D8 \u05D1\u05DB\u05DC \u05DE\u05E4\u05D2\u05E9: \u05D4\u05EA\u05DB\u05E0\u05E1\u05D5\u05EA \u05E9\u05DC \u05D4\u05DE\u05E9\u05EA\u05EA\u05E4\u05D9\u05DD \u05D1\u05D1\u05D9\u05EA \u05D4\u05DE\u05D0\u05E8\u05D7, \u05D4\u05E6\u05D2\u05D4 \u05D5\u05E4\u05EA\u05D9\u05D7\u05D4 \u05E9\u05DC \u05D4\u05DE\u05D0\u05E8\u05D7 \u05E2\u05DC \u05D4\u05E2\u05E8\u05D1, \u05D5\u05D4\u05E2\u05D1\u05E8\u05EA \u05D4\"\u05E9\u05E8\u05D1\u05D9\u05D8\" \u05D0\u05DC\u05D9\u05DA - \u05E2\u05DB\u05E9\u05D9\u05D5 \u05D6\u05D4 \u05D4\u05D6\u05DE\u05DF \u05E9\u05DC\u05DA \u05D1\u05D5 \u05EA\u05E0\u05D4\u05DC \u05D0\u05EA \u05D4\u05E9\u05D9\u05D7\u05D4 \u05E9\u05D4\u05DB\u05E0\u05EA \u05DE\u05E8\u05D0\u05E9. \u05D0\u05E0\u05D5 \u05E0\u05E9\u05DE\u05D7 \u05D0\u05DD \u05D1\u05E4\u05EA\u05D9\u05D7\u05EA \u05D4\u05E2\u05E8\u05D1 \u05EA\u05D5\u05DB\u05DC \u05DC\u05EA\u05EA \u05E8\u05E7\u05E2 \u05E2\u05DC \u05E2\u05DE\u05D5\u05EA\u05EA '\u05D4\u05D0\u05D7\u05D9\u05DD \u05E9\u05DC\u05E0\u05D5' \u05D1\u05DB\u05D3\u05D9 \u05E9\u05E2\u05D5\u05D3 \u05D5\u05E2\u05D5\u05D3 \u05D0\u05E0\u05E9\u05D9\u05DD \u05D9\u05D9\u05D7\u05E9\u05E4\u05D5 \u05DC\u05E4\u05E2\u05D9\u05DC\u05D5\u05EA \u05E9\u05DC\u05E0\u05D5 \u05D5\u05D9\u05E7\u05D7\u05D5 \u05D7\u05DC\u05E7 \u05D1\u05D4\u05E0\u05E6\u05D7\u05EA \u05D4\u05D0\u05D7\u05D9\u05DD \u05D5\u05D4\u05D0\u05D7\u05D9\u05D5\u05EA \u05D4\u05E9\u05DB\u05D5\u05DC\u05D9\u05DD."
    }, {
      question: 'איזה כלים יהיו לי לבנות את המפגש שלי?',
      answer: "\u05D4\u05D0\u05D7\u05D9\u05DD \u05D5\u05D4\u05D0\u05D7\u05D9\u05D5\u05EA \u05E9\u05DE\u05D2\u05D9\u05E2\u05D9\u05DD \u05DC\u05E2\u05E8\u05D1\u05D9\u05DD \u05DC\u05E1\u05E4\u05E8 \u05D0\u05EA \u05E1\u05D9\u05E4\u05D5\u05E8\u05DD \u05DE\u05D5\u05D6\u05DE\u05E0\u05D9\u05DD \u05DC\u05E7\u05D7\u05EA \u05D7\u05DC\u05E7 \u05D1\u05D9\u05D5\u05DD \u05D4\u05DB\u05E0\u05D4 (\u05D9\u05D4\u05D9\u05D5 \u05E1\u05D3\u05E0\u05D0\u05D5\u05EA \u05D4\u05D3\u05E8\u05DB\u05D4 \u05E4\u05E8\u05E7\u05D8\u05D9\u05D5\u05EA \u05D5\u05DB\u05DF \u05DB\u05DC\u05D9\u05DD \u05E8\u05D2\u05E9\u05D9\u05D9\u05DD) \u05DC\u05D1\u05E0\u05D9\u05D9\u05EA \u05D4\u05E2\u05E8\u05D1. \u05E0\u05D9\u05EA\u05DF \u05DC\u05D4\u05D5\u05E8\u05D9\u05D3 \u05D0\u05EA <a target=\"_blank\" href=\"/assets/docs/\u05E2\u05E8\u05DB\u05EA%20\u05D0\u05D7\u05D9\u05DD%20\u05D5\u05D0\u05D7\u05D9\u05D5\u05EA%20-%20\u05D4\u05D0\u05D7\u05D9\u05DD%20\u05E9\u05DC\u05E0\u05D5.pdf\">\u05E2\u05E8\u05DB\u05EA \u05D4\u05D0\u05D7<a/>, \u05D4\u05DE\u05EA\u05DB\u05DC\u05DC\u05EA \u05D0\u05EA \u05D4\u05DB\u05DC\u05D9\u05DD \u05D4\u05E0\u05D9\u05EA\u05E0\u05D9\u05DD \u05D1\u05D9\u05D5\u05DD \u05D6\u05D4."
    }, {
      question: 'האם אוכל לספר ביותר מבית מארח אחד?',
      answer: "\u05D5\u05D5\u05D3\u05D0\u05D9, \u05E0\u05D9\u05EA\u05DF \u05DC\u05D1\u05D7\u05D5\u05E8 \u05D9\u05D5\u05EA\u05E8 \u05DE\u05D1\u05D9\u05EA \u05D0\u05D7\u05D3 \u05DC\u05D4\u05EA\u05D0\u05E8\u05D7 \u05D1\u05D5 \u05D3\u05E8\u05DA <a target=\"_blank\" href=\"/meetings\">\u05E2\u05DE\u05D5\u05D3 \u05D4\u05DE\u05E4\u05D2\u05E9\u05D9\u05DD<a/> \u05D1\u05D0\u05EA\u05E8, \u05D0\u05DA \u05D9\u05E9 \u05DC\u05E9\u05D9\u05DD \u05DC\u05D1 \u05E9\u05D4\u05D0\u05D9\u05E8\u05D5\u05D7\u05D9\u05DD \u05DC\u05D0 \u05D7\u05D5\u05E4\u05E4\u05D9\u05DD \u05D1\u05EA\u05D0\u05E8\u05D9\u05DA \u05D5\u05D1\u05E9\u05E2\u05D4."
    }, {
      question: 'האם כל המפגשים יתקיימו בסלונים פרטיים?',
      answer: "\u05D4\u05DE\u05E4\u05D2\u05E9\u05D9\u05DD \u05D9\u05EA\u05E7\u05D9\u05D9\u05DE\u05D5 \u05D1\u05DE\u05E7\u05D5\u05DE\u05D5\u05EA \u05E9\u05D5\u05E0\u05D9\u05DD \u05D1\u05E8\u05D7\u05D1\u05D9 \u05D4\u05D0\u05E8\u05E5, \u05D1\u05D9\u05E0\u05D9\u05D4\u05DD \u05D1\u05EA\u05D9\u05DD \u05E4\u05E8\u05D8\u05D9\u05D9\u05DD, \u05D7\u05D1\u05E8\u05D5\u05EA, \u05D0\u05E8\u05D2\u05D5\u05E0\u05D9\u05DD, \u05EA\u05E0\u05D5\u05E2\u05D5\u05EA \u05E0\u05D5\u05E2\u05E8, \u05D1\u05EA\u05D9 \u05E1\u05E4\u05E8 \u05D5\u05E2\u05D5\u05D3. \u05E0\u05D9\u05EA\u05DF \u05DC\u05D1\u05D3\u05D5\u05E7 \u05D0\u05EA \u05DE\u05D0\u05E4\u05D9\u05D9\u05E0\u05D9 \u05D4\u05DE\u05E4\u05D2\u05E9 <a target=\"_blank\" href=\"/meetings\">\u05D1\u05E2\u05DE\u05D5\u05D3 \u05D4\u05DE\u05E4\u05D2\u05E9\u05D9\u05DD<a/> \u05D1\u05D0\u05EA\u05E8."
    }, {
      question: 'האם אוכל לארח את עצמי בביתי?',
      answer: "\u05D1\u05E2\u05D9\u05E7\u05E8\u05D5\u05DF \u05DB\u05DF, \u05D0\u05DA \u05D0\u05E0\u05D7\u05E0\u05D5 \u05DC\u05D0 \u05DE\u05DE\u05DC\u05D9\u05E6\u05D9\u05DD \u05E2\u05DC \u05DB\u05DA. \u05E7\u05D9\u05D5\u05DD \u05D4\u05DE\u05E4\u05D2\u05E9\u05D9\u05DD \u05D1\u05DE\u05E7\u05D5\u05DE\u05D5\u05EA \u05E9\u05D0\u05D9\u05E0\u05DD \u05D4\u05D1\u05D9\u05EA \u05D4\u05D0\u05D9\u05E9\u05D9 \u05E9\u05DC\u05DA \u05DE\u05D0\u05E4\u05E9\u05E8\u05D9\u05DD \u05DC\u05D4\u05E8\u05D7\u05D9\u05D1 \u05D0\u05EA \u05DE\u05E2\u05D2\u05DC \u05D4\u05D6\u05DB\u05E8\u05D5\u05DF \u05D5\u05D4\u05D4\u05E0\u05E6\u05D7\u05D4. \u05DB\u05DE\u05D5 \u05DB\u05DF, \u05D9\u05D3\u05D5\u05E2 \u05DC\u05E0\u05D5 \u05DB\u05D9 \u05DE\u05E4\u05D2\u05E9 \u05DB\u05D6\u05D4 \u05DE\u05E6\u05D9\u05E3 \u05E8\u05D2\u05E9\u05D5\u05EA \u05E8\u05D1\u05D9\u05DD \u05D5\u05D0\u05D9\u05DF \u05E6\u05D5\u05E8\u05DA \u05DC\u05D4\u05D8\u05E8\u05D9\u05D7 \u05D0\u05EA \u05E2\u05E6\u05DE\u05DA \u05DE\u05E2\u05D1\u05E8 \u05DC\u05DB\u05DA. \u05DC\u05DE\u05E8\u05D5\u05EA \u05D4\u05D0\u05DE\u05D5\u05E8 \u05DC\u05E2\u05D9\u05DC, \u05D1\u05DE\u05E7\u05E8\u05D9\u05DD \u05DE\u05D9\u05D5\u05D7\u05D3\u05D9\u05DD \u05DB\u05DE\u05D5\u05D1\u05DF \u05E9\u05E0\u05D9\u05EA\u05DF <a target=\"_blank\" href=\"/contact\">\u05DC\u05D9\u05E6\u05D5\u05E8 \u05D0\u05D9\u05EA\u05E0\u05D5 \u05E7\u05E9\u05E8<a/>."
    }, {
      question: 'כשנרשמים לאתר ישנה הצעה להשתתף במפגש הכנה לאחים, מה זה אומר?',
      answer: "\u05E1\u05D3\u05E0\u05D0\u05D5\u05EA \u05D4\u05D4\u05DB\u05E0\u05D4 \u05D9\u05EA\u05E7\u05D9\u05D9\u05DE\u05D5 \u05D1\u05D9\u05DF \u05D429.3-2.4 \u05D1\u05E8\u05D7\u05D1\u05D9 \u05D4\u05D0\u05E8\u05E5 \u05D1\u05DE\u05D8\u05E8\u05D4 \u05DC\u05D4\u05DB\u05D9\u05DF \u05D0\u05D5\u05EA\u05DA \u05D5\u05DC\u05E1\u05D9\u05D9\u05E2 \u05DC\u05DA \u05DC\u05E7\u05E8\u05D0\u05EA \u05D4\u05DE\u05E4\u05D2\u05E9\u05D9\u05DD.\n    \u05D4\u05E1\u05D3\u05E0\u05D0\u05D5\u05EA \u05D9\u05DB\u05DC\u05DC\u05D5 \u05EA\u05DB\u05E0\u05D9\u05DD \u05E4\u05E8\u05E7\u05D8\u05D9\u05D9\u05DD \u05D5\u05D4\u05E7\u05E0\u05D9\u05D9\u05EA \u05DB\u05DC\u05D9\u05DD \u05E9\u05D9\u05E1\u05D9\u05D9\u05E2\u05D5 \u05DC\u05DA \u05DE\u05D1\u05E0\u05D9\u05EA \u05D5\u05E8\u05D2\u05E9\u05D9\u05EA \u05DC\u05E7\u05E8\u05D0\u05EA \u05D4\u05DE\u05E4\u05D2\u05E9, \u05D1\u05D9\u05DF \u05D0\u05DD \u05DC\u05E7\u05D7\u05EA \u05D7\u05DC\u05E7 \u05D1\u05DE\u05E4\u05D2\u05E9\u05D9 '\u05D4\u05D0\u05D7\u05D9\u05DD \u05E9\u05DC\u05E0\u05D5' \u05D1\u05E2\u05D1\u05E8 \u05D5\u05D1\u05D9\u05DF \u05D0\u05DD \u05DC\u05D0, \u05DB\u05DE\u05D5 \u05D2\u05DD, \u05D4\u05E8\u05E6\u05D0\u05D5\u05EA \u05DC\u05D3\u05D5\u05D2\u05DE\u05D4 \u05E9\u05DC \u05E9\u05E0\u05D9 \u05D0\u05D7\u05D9\u05DD \u05E9\u05DB\u05D5\u05DC\u05D9\u05DD \u05D5\u05E1\u05D9\u05D5\u05E2 \u05D1\u05D1\u05E0\u05D9\u05D9\u05EA \u05D4\u05E9\u05D9\u05D7\u05D4 \u05D5/\u05D0\u05D5 \u05D4\u05DE\u05E6\u05D2\u05EA.\n    <br/>\n    \u05E1\u05D3\u05E0\u05D0\u05D5\u05EA \u05D4\u05D4\u05DB\u05E0\u05D4 \u05D9\u05EA\u05E7\u05D9\u05D9\u05DE\u05D5 \u05D1\u05DE\u05E1\u05E4\u05E8 \u05DE\u05D5\u05E7\u05D3\u05D9\u05DD:\n    <br/>\n    - 29.03.20 \u05D1\u05D1\u05D0\u05E8 \u05E9\u05D1\u05E2 \u05D1\u05D9\u05DF \u05D4\u05E9\u05E2\u05D5\u05EA 17:30-21:30, \u05DE\u05E9\u05E8\u05D3\u05D9 WEWORK, \u05E8\u05D7' \u05D7\u05DC\u05E7\u05D9\u05E7\u05D9 \u05D4\u05D0\u05D5\u05E8 16<br/>\n    - 31.03.20 \u05D1\u05EA\u05DC \u05D0\u05D1\u05D9\u05D1 \u05D1\u05D9\u05DF \u05D4\u05E9\u05E2\u05D5\u05EA 17:00-21:00, \u05DE\u05E9\u05E8\u05D3\u05D9 WEWORK, \u05E8\u05D7' \u05E9\u05D5\u05E7\u05DF 23<br/>\n    - 01.04.20 \u05D1\u05D9\u05E8\u05D5\u05E9\u05DC\u05D9\u05DD \u05D1\u05D9\u05DF \u05D4\u05E9\u05E2\u05D5\u05EA 18:00-22:00, \u05DE\u05E9\u05E8\u05D3\u05D9 WEWORK, \u05E8\u05D7' \u05E7\u05D9\u05E0\u05D2 \u05D2'\u05D5\u05E8\u05D2' 20<br/>\n    - 02.04.20 \u05D1\u05D7\u05D9\u05E4\u05D4 \u05D1\u05D9\u05DF \u05D4\u05E9\u05E2\u05D5\u05EA 17:00-21:00, \u05DE\u05E9\u05E8\u05D3\u05D9 WEWORK, \u05E8\u05D7' \u05D3\u05E8\u05DA \u05D4\u05E2\u05E6\u05DE\u05D0\u05D5\u05EA 45"
    }, {
      question: 'אם אני מתארח בבית מארח שלא כתוב באתר, אוכל להגיע למפגש ההכנה?',
      answer: "\u05D1\u05D5\u05D5\u05D3\u05D0\u05D9, \u05D4\u05E1\u05D3\u05E0\u05D0\u05D5\u05EA \u05E4\u05EA\u05D5\u05D7\u05D5\u05EA \u05DC\u05DB\u05DC \u05D4\u05D0\u05D7\u05D9\u05DD - \u05D0\u05DC\u05D5 \u05E9\u05E8\u05D5\u05E6\u05D9\u05DD \u05DC\u05E7\u05D7\u05EA \u05D7\u05DC\u05E7 \u05D5\u05DC\u05D4\u05E2\u05D1\u05D9\u05E8 \u05E2\u05E8\u05D1 \u05D5\u05D0\u05DC\u05D5 \u05E9\u05DC\u05D0. \u05E1\u05D3\u05E0\u05D0\u05D5\u05EA \u05D4\u05D4\u05DB\u05E0\u05D4 \u05D9\u05EA\u05E7\u05D9\u05D9\u05DE\u05D5 \u05D1\u05D9\u05DF \u05D429.3-2.4 \u05D1\u05E8\u05D7\u05D1\u05D9 \u05D4\u05D0\u05E8\u05E5 \u05D1\u05DE\u05D8\u05E8\u05D4 \u05DC\u05D4\u05DB\u05D9\u05DF \u05D0\u05D5\u05EA\u05DA \u05D5\u05DC\u05E1\u05D9\u05D9\u05E2 \u05DC\u05DA \u05DC\u05E7\u05E8\u05D0\u05EA \u05D4\u05DE\u05E4\u05D2\u05E9\u05D9\u05DD.\n    <br/>\n    \u05D4\u05E1\u05D3\u05E0\u05D0\u05D5\u05EA \u05D9\u05DB\u05DC\u05DC\u05D5 \u05EA\u05DB\u05E0\u05D9\u05DD \u05E4\u05E8\u05E7\u05D8\u05D9\u05D9\u05DD \u05D5\u05D4\u05E7\u05E0\u05D9\u05D9\u05EA \u05DB\u05DC\u05D9\u05DD \u05E9\u05D9\u05E1\u05D9\u05D9\u05E2\u05D5 \u05DC\u05DA \u05DE\u05D1\u05E0\u05D9\u05EA \u05D5\u05E8\u05D2\u05E9\u05D9\u05EA \u05DC\u05E7\u05E8\u05D0\u05EA \u05D4\u05DE\u05E4\u05D2\u05E9, \u05D1\u05D9\u05DF \u05D0\u05DD \u05DC\u05E7\u05D7\u05EA \u05D7\u05DC\u05E7 \u05D1\u05DE\u05E4\u05D2\u05E9\u05D9 '\u05D4\u05D0\u05D7\u05D9\u05DD \u05E9\u05DC\u05E0\u05D5' \u05D1\u05E2\u05D1\u05E8 \u05D5\u05D1\u05D9\u05DF \u05D0\u05DD \u05DC\u05D0, \u05DB\u05DE\u05D5 \u05D2\u05DD \u05D4\u05E8\u05E6\u05D0\u05D5\u05EA \u05DC\u05D3\u05D5\u05D2\u05DE\u05D0 \u05E9\u05DC \u05E9\u05E0\u05D9 \u05D0\u05D7\u05D9\u05DD \u05E9\u05DB\u05D5\u05DC\u05D9\u05DD \u05D5\u05E1\u05D9\u05D5\u05E2 \u05D1\u05D1\u05E0\u05D9\u05D9\u05EA \u05D4\u05E9\u05D9\u05D7\u05D4 \u05D5/\u05D0\u05D5 \u05D4\u05DE\u05E6\u05D2\u05EA.\n    <br/>\n    \u05E1\u05D3\u05E0\u05D0\u05D5\u05EA \u05D4\u05D4\u05DB\u05E0\u05D4 \u05D9\u05EA\u05E7\u05D9\u05D9\u05DE\u05D5 \u05D1\u05DE\u05E1\u05E4\u05E8 \u05DE\u05D5\u05E7\u05D3\u05D9\u05DD:\n    <br/>\n    - 29.03.20 \u05D1\u05D1\u05D0\u05E8 \u05E9\u05D1\u05E2 \u05D1\u05D9\u05DF \u05D4\u05E9\u05E2\u05D5\u05EA 17:30-21:30, \u05DE\u05E9\u05E8\u05D3\u05D9 WEWORK, \u05E8\u05D7' \u05D7\u05DC\u05E7\u05D9\u05E7\u05D9 \u05D4\u05D0\u05D5\u05E8 16<br/>\n    - 31.03.20 \u05D1\u05EA\u05DC \u05D0\u05D1\u05D9\u05D1 \u05D1\u05D9\u05DF \u05D4\u05E9\u05E2\u05D5\u05EA 17:00-21:00, \u05DE\u05E9\u05E8\u05D3\u05D9 WEWORK, \u05E8\u05D7' \u05E9\u05D5\u05E7\u05DF 23<br/>\n    - 01.04.20 \u05D1\u05D9\u05E8\u05D5\u05E9\u05DC\u05D9\u05DD \u05D1\u05D9\u05DF \u05D4\u05E9\u05E2\u05D5\u05EA 18:00-22:00, \u05DE\u05E9\u05E8\u05D3\u05D9 WEWORK, \u05E8\u05D7' \u05E7\u05D9\u05E0\u05D2 \u05D2'\u05D5\u05E8\u05D2' 20<br/>\n    - 02.04.20 \u05D1\u05D7\u05D9\u05E4\u05D4 \u05D1\u05D9\u05DF \u05D4\u05E9\u05E2\u05D5\u05EA 17:00-21:00, \u05DE\u05E9\u05E8\u05D3\u05D9 WEWORK, \u05E8\u05D7' \u05D3\u05E8\u05DA \u05D4\u05E2\u05E6\u05DE\u05D0\u05D5\u05EA 45"
    }, {
      question: 'איך אני יוצר קשר עם המארח?',
      answer: "\u05DE\u05D9\u05D3 \u05DC\u05D0\u05D7\u05E8 \u05D4\u05E9\u05D9\u05D1\u05D5\u05E5 \u05DC\u05D0\u05D9\u05E8\u05D5\u05D7, \u05EA\u05D2\u05D9\u05E2 \u05DC<a target=\"_blank\" href=\"/assets/docs/\u05E2\u05E8\u05DB\u05EA%20\u05D0\u05D9\u05E8\u05D5\u05D7%20-%20\u05D4\u05D0\u05D7\u05D9\u05DD%20\u05E9\u05DC\u05E0\u05D5.pdf\">'\u05D3\u05E3 \u05D4\u05D0\u05D9\u05E8\u05D5\u05D7'<a/> \u05E2\u05DD \u05DB\u05DC \u05D4\u05E4\u05E8\u05D8\u05D9\u05DD \u05D4\u05E8\u05DC\u05D5\u05D5\u05E0\u05D8\u05D9\u05DD \u05D5\u05DB\u05DF \u05EA\u05E7\u05D1\u05DC \u05D3\u05D5\u05D0\u05E8 \u05D0\u05DC\u05E7\u05D8\u05E8\u05D5\u05E0\u05D9 \u05D4\u05DB\u05D5\u05DC\u05DC \u05D0\u05EA \u05D4\u05E4\u05E8\u05D8\u05D9\u05DD \u05D4\u05DC\u05DC\u05D5. \u05D1\u05DE\u05E7\u05D1\u05D9\u05DC, \u05D9\u05E7\u05D1\u05DC \u05D4\u05DE\u05D0\u05E8\u05D7 \u05D0\u05EA \u05E4\u05E8\u05D8\u05D9 \u05D4\u05D4\u05EA\u05E7\u05E9\u05E8\u05D5\u05EA \u05E9\u05DC\u05DA \u05D5\u05D9\u05E6\u05D5\u05E8 \u05D0\u05D9\u05EA\u05DA \u05E7\u05E9\u05E8 \u05DC\u05D7\u05D9\u05D1\u05D5\u05E8 \u05D5\u05EA\u05D9\u05D0\u05D5\u05DD \u05E6\u05D9\u05E4\u05D9\u05D5\u05EA. \u05D1\u05E9\u05D9\u05D7\u05D4 \u05D7\u05E9\u05D5\u05D1 \u05DC\u05D4\u05E2\u05DC\u05D5\u05EA \u05DE\u05E1' \u05E0\u05D5\u05E9\u05D0\u05D9\u05DD: \u05E6\u05D5\u05E8\u05DA \u05E9\u05DC\u05DA \u05D1\u05DB\u05DC\u05D9\u05DD \u05D5\u05D0\u05D1\u05D9\u05D6\u05E8\u05D9\u05DD \u05E9\u05D5\u05E0\u05D9\u05DD (\u05DB\u05DE\u05D5 \u05DE\u05E7\u05E8\u05DF, \u05DE\u05E1\u05DA \u05D5\u05DB\u05D5'), \u05D4\u05D1\u05E0\u05EA \u05E4\u05E8\u05D8\u05D9 \u05E7\u05D4\u05DC \u05D4\u05E9\u05D5\u05DE\u05E2\u05D9\u05DD \u05E9\u05D9\u05D2\u05D9\u05E2\u05D5 \u05DC\u05E2\u05E8\u05D1, \u05D4\u05D1\u05D4\u05E8\u05EA \u05E0\u05E7\u05D5\u05D3\u05D5\u05EA \u05D7\u05E9\u05D5\u05D1\u05D5\u05EA, \u05DC\u05E9\u05EA\u05E3 \u05D1\u05D0\u05D5\u05E8\u05D7\u05D9\u05DD \u05E9\u05E8\u05D5\u05E6\u05D9\u05DD \u05DC\u05D4\u05EA\u05DC\u05D5\u05D5\u05EA \u05D0\u05DC\u05D9\u05DA \u05DC\u05E2\u05E8\u05D1, \u05D4\u05D0\u05DD \u05D9\u05E9 \u05E6\u05D5\u05E8\u05DA \u05D1\u05E2\u05D6\u05E8\u05D4 \u05DB\u05DC\u05E9\u05D4\u05D9 \u05D5\u05DB\u05D9\u05D5\u05E6\"\u05D1. \u05DB\u05DE\u05D5 \u05DB\u05DF, \u05D4\u05DE\u05D0\u05E8\u05D7 \u05E9\u05DC\u05DA \u05D9\u05E7\u05D1\u05DC <a target=\"_blank\" href=\"/assets/docs/\u05E2\u05E8\u05DB\u05EA%20\u05D0\u05D9\u05E8\u05D5\u05D7%20-%20\u05D4\u05D0\u05D7\u05D9\u05DD%20\u05E9\u05DC\u05E0\u05D5.pdf\">\u05E2\u05E8\u05DB\u05EA \u05D0\u05D9\u05E8\u05D5\u05D7<a/> \u05D5\u05E0\u05D9\u05EA\u05DF \u05DC\u05D4\u05E1\u05D1 \u05D0\u05EA \u05EA\u05E9\u05D5\u05DE\u05EA \u05DC\u05D9\u05D1\u05D5 \u05DC\u05E7\u05E8\u05D9\u05D0\u05EA\u05D4."
    }, {
      question: 'מה אני צריך להכין לערב?',
      answer: "\u05DE\u05D5\u05DE\u05DC\u05E5 \u05DC\u05E2\u05D9\u05D9\u05DF \u05D1<a target=\"_blank\" href=\"/assets/docs/\u05E2\u05E8\u05DB\u05EA%20\u05D0\u05D7\u05D9\u05DD%20\u05D5\u05D0\u05D7\u05D9\u05D5\u05EA%20-%20\u05D4\u05D0\u05D7\u05D9\u05DD%20\u05E9\u05DC\u05E0\u05D5.pdf\">'\u05E2\u05E8\u05DB\u05EA \u05D0\u05D7'<a/> \u05D1\u05D4 \u05DE\u05E4\u05D5\u05E8\u05D8 \u05E2\u05DC \u05D4\u05D4\u05DB\u05E0\u05D4 \u05DC\u05E7\u05E8\u05D0\u05EA \u05D4\u05E2\u05E8\u05D1. \u05D1\u05DB\u05DC \u05DE\u05E7\u05E8\u05D4 \u05D0\u05E0\u05D5 \u05DE\u05DE\u05DC\u05D9\u05E6\u05D9\u05DD \u05DC\u05D4\u05D1\u05D9\u05D0 \u05D0\u05D9\u05EA\u05DA \u05DC\u05E2\u05E8\u05D1 \u05D0\u05DE\u05E6\u05E2\u05D9\u05DD \u05D5\u05D9\u05D6\u05D5\u05D0\u05DC\u05D9\u05DD: \u05EA\u05DE\u05D5\u05E0\u05D5\u05EA, \u05DE\u05E6\u05D2\u05EA, \u05E1\u05E8\u05D8. \u05E7\u05D8\u05E2\u05D9 \u05E7\u05E8\u05D9\u05D0\u05D4. \u05DE\u05D5\u05D6\u05DE\u05DF \u05DC\u05E6\u05E4\u05D5\u05EA <a target=\"_blank\" href=\"https://www.youtube.com/watch?v=l788HDtDVEI&list=PLJi3ky6m6AisA1gSnPNdi08F2c0gXEX8m&index=5\">\u05D1\u05D4\u05E8\u05E6\u05D0\u05EA\u05D5<a/> \u05E9\u05DC \u05D3\"\u05E8 \u05E6\u05D5\u05E8\u05D9\u05D0\u05DC \u05E8\u05D0\u05E9\u05D9 \u05D4\u05DE\u05E2\u05DC\u05D4 \u05DE\u05E1\u05E4\u05E8 \u05D8\u05D9\u05E4\u05D9\u05DD \u05D7\u05E9\u05D5\u05D1\u05D9\u05DD \u05DC\u05E7\u05E8\u05D0\u05EA \u05D4\u05E2\u05E8\u05D1.\n    <br/>\n    \u05DC\u05E2\u05D9\u05EA\u05D9\u05DD, \u05DE\u05E8\u05D5\u05D1 \u05D4\u05EA\u05E8\u05D2\u05E9\u05D5\u05EA, \u05D4\u05DE\u05D5\u05DF \u05E1\u05D9\u05E4\u05D5\u05E8\u05D9\u05DD \u05D5\u05DE\u05D7\u05E9\u05D1\u05D5\u05EA \u05E2\u05D5\u05DC\u05D9\u05DD \u05D1\u05D0\u05D5\u05E4\u05DF \u05DC\u05D0 \u05DE\u05EA\u05D5\u05DB\u05E0\u05DF \u05D5\u05DC\u05DB\u05DF \u05D0\u05E0\u05D5 \u05DE\u05DE\u05DC\u05D9\u05E6\u05D9\u05DD \u05DC\u05D4\u05D1\u05D9\u05D0 \u05D0\u05D9\u05EA\u05DA \u05D0\u05EA \u05DE\u05D4\u05DC\u05DA \u05D4\u05DE\u05E4\u05D2\u05E9 \u05D5\u05D4\u05DE\u05E1\u05E8\u05D9\u05DD \u05E9\u05EA\u05E8\u05E6\u05D4 \u05DC\u05D4\u05E2\u05D1\u05D9\u05E8, \u05DB\u05EA\u05D5\u05D1\u05D9\u05DD \u05D1\u05E0\u05E7\u05D5\u05D3\u05D5\u05EA \u05E2\u05DC \u05D3\u05E3."
    }, {
      question: 'האם המפגשים מתקיימים בערב או ביום הזיכרון?',
      answer: "\u05DE\u05E4\u05D2\u05E9\u05D9 '\u05D4\u05D0\u05D7\u05D9\u05DD \u05E9\u05DC\u05E0\u05D5' \u05D9\u05EA\u05E7\u05D9\u05D9\u05DE\u05D5 \u05D1\u05E8\u05D5\u05D1\u05DD \u05D1\u05D9\u05D5\u05DD \u05E8\u05D0\u05E9\u05D5\u05DF \u05D4-26.4 \u05D1\u05E9\u05E2\u05D4 20:00. \u05D0\u05DA, \u05D9\u05E9\u05E0\u05D4 \u05D0\u05E4\u05E9\u05E8\u05D5\u05EA \u05DC\u05E7\u05D9\u05D9\u05DD \u05DE\u05E4\u05D2\u05E9\u05D9\u05DD \u05DC\u05D0\u05D5\u05E8\u05DA \u05D4\u05E9\u05D1\u05D5\u05E2 \u05E1\u05D1\u05D9\u05D1 \u05D9\u05D5\u05DD \u05D4\u05D6\u05D9\u05DB\u05E8\u05D5\u05DF, \u05D1\u05D9\u05DF \u05D4\u05EA\u05D0\u05E8\u05D9\u05DB\u05D9\u05DD 22.4-28.4. \u05E0\u05D9\u05EA\u05DF \u05DC\u05D1\u05D3\u05D5\u05E7 \u05D0\u05EA \u05D4\u05EA\u05D0\u05E8\u05D9\u05DA \u05D5\u05D4\u05E9\u05E2\u05D4 \u05D1<a target=\"_blank\" href=\"/meeting\">\u05E2\u05DE\u05D5\u05D3 \u05D4\u05DE\u05E4\u05D2\u05E9\u05D9\u05DD<a/> \u05D1\u05DC\u05D7\u05D9\u05E6\u05D4 \u05E2\u05DC \u05D0\u05D9\u05E8\u05D5\u05D7."
    }, {
      question: 'האם אוכל להעביר שיחה יחד עם אח/ות שלי?',
      answer: "\u05DB\u05DF, \u05D5\u05D0\u05E3 \u05DC\u05E2\u05D9\u05EA\u05D9\u05DD \u05D6\u05D4 \u05D9\u05DB\u05D5\u05DC \u05DC\u05D4\u05E7\u05DC \u05D5\u05DC\u05E2\u05D6\u05D5\u05E8. \u05D1\u05E9\u05D9\u05D7\u05EA \u05D4\u05D9\u05DB\u05E8\u05D5\u05EA \u05E2\u05DD \u05D4\u05DE\u05D0\u05E8\u05D7 \u05D9\u05E9 \u05DC\u05E6\u05D9\u05D9\u05DF \u05D6\u05D0\u05EA."
    }, {
      question: "\u05DE\u05D9 \u05D4\u05E7\u05D9\u05DD \u05D0\u05EA \u05E2\u05DE\u05D5\u05EA\u05EA '\u05D4\u05D0\u05D7\u05D9\u05DD \u05E9\u05DC\u05E0\u05D5'?",
      answer: "\u05D4\u05E2\u05DE\u05D5\u05EA\u05D4 \u05D4\u05D5\u05E7\u05DE\u05D4 \u05E2\u05DC-\u05D9\u05D3\u05D9 \u05D0\u05D7\u05D9\u05DD \u05D5\u05D0\u05D7\u05D9\u05D5\u05EA \u05E9\u05DB\u05D5\u05DC\u05D9\u05DD \u05D5\u05DE\u05EA\u05E0\u05D3\u05D1\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD. \u05DE\u05D5\u05D6\u05DE\u05E0\u05D9\u05DD \u05DC\u05E7\u05E8\u05D5\u05D0 \u05E2\u05DC\u05D9\u05E0\u05D5 \u05E2\u05D5\u05D3 \u05D1<a target=\"_blank\" href=\"/team\">\u05E2\u05DE\u05D5\u05D3 \u05D4\u05E6\u05D5\u05D5\u05EA<a/>."
    }, {
      question: 'אין אירוחים בקרבת מקום מגורי, מה האפשרויות שלי?',
      answer: "\u05EA\u05D5\u05DB\u05DC \u05DC\u05D4\u05E6\u05D9\u05E2 \u05DC\u05D7\u05D1\u05E8\u05D9\u05DD \u05D5\u05DE\u05DB\u05E8\u05D9\u05DD \u05DC\u05E4\u05EA\u05D5\u05D7 \u05D0\u05EA \u05D1\u05D9\u05EA\u05DD \u05DC\u05D0\u05D9\u05E8\u05D5\u05D7 \u05D5\u05DC\u05D4\u05EA\u05D0\u05E8\u05D7 \u05D0\u05E6\u05DC\u05DD, \u05D5\u05DB\u05DE\u05D5\u05D1\u05DF \u05E9\u05D0\u05E0\u05D5 \u05E0\u05E2\u05E9\u05D4 \u05DE\u05D0\u05DE\u05E5 \u05DC\u05E2\u05D6\u05D5\u05E8 \u05DC\u05DA \u05D1\u05DE\u05E6\u05D9\u05D0\u05EA \u05D1\u05D9\u05EA \u05DE\u05D0\u05E8\u05D7 \u05D1\u05DE\u05E7\u05E8\u05D4 \u05D4\u05E6\u05D5\u05E8\u05DA."
    }, {
      question: 'האירוח שלי בוטל, מה אני עושה?',
      answer: "\u05DC\u05E2\u05D9\u05EA\u05D9\u05DD \u05D3\u05D1\u05E8\u05D9\u05DD \u05DB\u05D0\u05DC\u05D5 \u05E7\u05D5\u05E8\u05D9\u05DD, \u05D0\u05E0\u05D5 \u05DE\u05E9\u05EA\u05D3\u05DC\u05D9\u05DD \u05DC\u05E2\u05E9\u05D5\u05EA \u05DB\u05DB\u05DC \u05D9\u05DB\u05D5\u05DC\u05EA\u05E0\u05D5 \u05DC\u05DE\u05E0\u05D5\u05E2 \u05DE\u05E6\u05D1\u05D9\u05DD \u05DB\u05D0\u05DC\u05D4. \u05D0\u05DD \u05E7\u05E8\u05D4 \u05DE\u05E7\u05E8\u05D4 \u05DB\u05D6\u05D4 \u05D9\u05E9 \u05DC\u05D9\u05D9\u05D3\u05E2 \u05D0\u05D5\u05EA\u05E0\u05D5 \u05E2\u05DC \u05DB\u05DA \u05E2\u05DC \u05DE\u05E0\u05EA \u05E9\u05E0\u05DE\u05E6\u05D0 \u05DC\u05DA \u05D1\u05D9\u05EA \u05D7\u05DC\u05D5\u05E4\u05D9 \u05D1\u05D4\u05E7\u05D3\u05DD \u05D4\u05D0\u05E4\u05E9\u05E8\u05D9."
    }, {
      question: 'אוכל להביא איתי אנשים לאירוח?',
      answer: "\u05DE\u05D5\u05EA\u05E8 \u05D5\u05D0\u05E3 \u05DE\u05D5\u05DE\u05DC\u05E5, \u05DC\u05E2\u05E0\u05D9\u05D5\u05EA \u05D3\u05E2\u05EA\u05E0\u05D5 \u05D9\u05E9 \u05E2\u05E8\u05DA \u05D1\u05D4\u05D9\u05DE\u05E6\u05D0\u05D5\u05EA \u05D0\u05E0\u05E9\u05D9\u05DD \u05E7\u05E8\u05D5\u05D1\u05D9\u05DD \u05D0\u05DC\u05D9\u05DA \u05D1\u05E2\u05E8\u05D1 \u05DB\u05D6\u05D4. \u05DB\u05DE\u05D5\u05D1\u05DF \u05E9\u05D9\u05E9 \u05DC\u05D9\u05D9\u05D3\u05E2 \u05D0\u05EA \u05D4\u05DE\u05D0\u05E8\u05D7 \u05E2\u05DC \u05DB\u05DE\u05D5\u05EA \u05D4\u05D0\u05E0\u05E9\u05D9\u05DD \u05E9\u05DE\u05D2\u05D9\u05E2\u05D9\u05DD \u05D0\u05D9\u05EA\u05DA"
    }, {
      question: 'אני משתמש בסרטונים ותמונות בערב, האם אתם מספקים מקרן או שאני אחראי?',
      answer: "\u05D0\u05D9\u05DF \u05D1\u05D0\u05E4\u05E9\u05E8\u05D5\u05EA\u05D9\u05E0\u05D5 \u05DC\u05E1\u05E4\u05E7 \u05DE\u05E7\u05E8\u05DF, \u05D0\u05DA \u05E0\u05D9\u05EA\u05DF \u05DC\u05D4\u05E7\u05E8\u05D9\u05DF \u05D3\u05E8\u05DA \u05D4\u05D8\u05DC\u05D5\u05D5\u05D9\u05D6\u05D9\u05D4 - \u05D9\u05E9 \u05DC\u05EA\u05D0\u05DD \u05DB\u05DC \u05E6\u05D5\u05E8\u05DA \u05D1\u05D0\u05D1\u05D9\u05D6\u05E8\u05D9\u05DD \u05DE\u05D5\u05DC \u05D4\u05DE\u05D0\u05E8\u05D7."
    }, {
      question: 'האם אני צריך להכין מצגת?',
      answer: "\u05D0\u05E0\u05D5 \u05DE\u05DE\u05DC\u05D9\u05E6\u05D9\u05DD \u05DC\u05D4\u05DB\u05D9\u05DF \u05DE\u05E6\u05D2\u05EA \u05E9\u05EA\u05DC\u05D5\u05D5\u05D4 \u05D0\u05EA \u05D4\u05E9\u05D9\u05D7\u05D4 \u05E9\u05DC\u05DA, \u05D4\u05DE\u05E6\u05D2\u05EA \u05D9\u05DB\u05D5\u05DC\u05D4 \u05DC\u05D4\u05E7\u05DC \u05D5\u05DC\u05DE\u05E7\u05D3 \u05D0\u05EA \u05D4\u05E9\u05D9\u05D7\u05D4 \u05DE\u05D5\u05DC \u05D4\u05E7\u05D4\u05DC, \u05DC\u05E9\u05D1\u05D5\u05E8 \u05D0\u05EA \u05D4\u05DE\u05D5\u05E0\u05D5\u05D8\u05D5\u05E0\u05D9\u05D5\u05EA \u05E9\u05DC \u05D4\u05E9\u05D9\u05D7\u05D4 \u05D5\u05DB\u05DF \u05DE\u05D4\u05D5\u05D5\u05D4 \u05D0\u05DE\u05E6\u05E2\u05D9 \u05D5\u05D9\u05D6\u05D5\u05D0\u05DC\u05D9 \u05DC\u05D4\u05DB\u05D9\u05E8 \u05D8\u05D5\u05D1 \u05D9\u05D5\u05EA\u05E8 \u05D0\u05EA \u05E1\u05D9\u05E4\u05D5\u05E8\u05DA \u05D5\u05D0\u05EA \u05D0\u05D7\u05D9\u05DA."
    }, {
      question: 'עד מתי אפשר להירשם לאירוח?',
      answer: "\u05E2\u05D3 \u05D9\u05D5\u05DD \u05E9\u05D9\u05E9\u05D9 \u05D4-17.4"
    }, {
      question: 'כמה זמן אורך הערב?',
      answer: "\u05D1\u05DE\u05DE\u05D5\u05E6\u05E2 \u05D4\u05DE\u05E4\u05D2\u05E9\u05D9\u05DD \u05E0\u05E2\u05D9\u05DD \u05D1\u05D9\u05DF \u05E9\u05E2\u05D4-\u05E9\u05E2\u05D4 \u05D5\u05D7\u05E6\u05D9, \u05DE\u05D0\u05D5\u05D3 \u05EA\u05DC\u05D5\u05D9 \u05D1\u05DA, \u05D1\u05E7\u05D4\u05DC \u05D4\u05E9\u05D5\u05DE\u05E2\u05D9\u05DD \u05D5\u05D1\u05DE\u05D0\u05E8\u05D7. \u05D7\u05E9\u05D5\u05D1 \u05DC\u05EA\u05D0\u05DD \u05E6\u05D9\u05E4\u05D9\u05D5\u05EA \u05DC\u05E4\u05E0\u05D9 \u05DB\u05DF \u05D5\u05DC\u05EA\u05DB\u05E0\u05DF \u05DE\u05E8\u05D0\u05E9 \u05D0\u05EA \u05D4\u05E2\u05E8\u05D1 \u05D5\u05D0\u05D5\u05E8\u05DB\u05D5."
    }];
    var qnaHosts = [{
      question: "\u05D0\u05D9\u05DA \u05D0\u05E0\u05D9 \u05E0\u05E8\u05E9\u05DD \u05DC\u05D0\u05E8\u05D7?",
      answer: "\u05E0\u05D9\u05EA\u05DF \u05DC\u05D4\u05DB\u05E0\u05E1 \u05DC\u05E2\u05DE\u05D5\u05D3 <a target=\"_blank\" href=\"/host\">\u05D0\u05E0\u05D9 \u05E8\u05D5\u05E6\u05D4 \u05DC\u05D0\u05E8\u05D7<a/> \u05D5\u05DC\u05D4\u05D6\u05D9\u05DF \u05D0\u05EA \u05E4\u05E8\u05D8\u05D9 \u05D4\u05D0\u05D9\u05E8\u05D5\u05D7. "
    }, {
      question: "\u05D0\u05D9\u05DA \u05E0\u05E8\u05D0\u05D4 \u05E2\u05E8\u05D1 '\u05D4\u05D0\u05D7\u05D9\u05DD \u05E9\u05DC\u05E0\u05D5'?",
      answer: "\u05DB\u05DC \u05DE\u05E4\u05D2\u05E9 \u05E0\u05E8\u05D0\u05D4 \u05E9\u05D5\u05E0\u05D4, \u05EA\u05DC\u05D5\u05D9 \u05D1\u05DA, \u05D1\u05D0\u05D7/\u05D5\u05EA \u05D5\u05D1\u05D3\u05D9\u05E0\u05DE\u05D9\u05E7\u05D4 \u05E9\u05E0\u05D5\u05E6\u05E8\u05EA.\n    <br/>\n    \u05E7\u05D9\u05D9\u05DE\u05D9\u05DD \u05DE\u05E1\u05E4\u05E8 \u05D3\u05D1\u05E8\u05D9\u05DD \u05E7\u05D1\u05D5\u05E2\u05D9\u05DD \u05DB\u05DE\u05E2\u05D8 \u05D1\u05DB\u05DC \u05DE\u05E4\u05D2\u05E9:\n    <br/>\n    \u05D4\u05EA\u05DB\u05E0\u05E1\u05D5\u05EA \u05E9\u05DC \u05D4\u05DE\u05E9\u05EA\u05EA\u05E4\u05D9\u05DD \u05D1\u05D1\u05D9\u05EA \u05D4\u05DE\u05D0\u05E8\u05D7, \u05D4\u05E6\u05D2\u05D4 \u05D5\u05E4\u05EA\u05D9\u05D7\u05D4 \u05E9\u05DC \u05D4\u05DE\u05D0\u05E8\u05D7 \u05E2\u05DC \u05D4\u05E2\u05E8\u05D1, \u05D5\u05D4\u05E2\u05D1\u05E8\u05EA \u05D4\"\u05E9\u05E8\u05D1\u05D9\u05D8\" \u05D0\u05DC \u05D4\u05D0\u05D7. \u05D0\u05E0\u05D5 \u05E0\u05E9\u05DE\u05D7 \u05D0\u05DD \u05D1\u05E4\u05EA\u05D9\u05D7\u05EA \u05D4\u05E2\u05E8\u05D1 \u05EA\u05D5\u05DB\u05DC \u05DC\u05EA\u05EA \u05E8\u05E7\u05E2 \u05E2\u05DC \u05E2\u05DE\u05D5\u05EA\u05EA '\u05D4\u05D0\u05D7\u05D9\u05DD \u05E9\u05DC\u05E0\u05D5' \u05D1\u05DB\u05D3\u05D9 \u05E9\u05E2\u05D5\u05D3 \u05D5\u05E2\u05D5\u05D3 \u05D0\u05E0\u05E9\u05D9\u05DD \u05D9\u05D9\u05D7\u05E9\u05E4\u05D5 \u05DC\u05E4\u05E2\u05D9\u05DC\u05D5\u05EA \u05E9\u05DC\u05E0\u05D5 \u05D5\u05D9\u05E7\u05D7 \u05D7\u05DC\u05E7 \u05D1\u05D4\u05E0\u05E6\u05D7\u05EA \u05D4\u05D0\u05D7\u05D9\u05DD \u05D5\u05D4\u05D0\u05D7\u05D9\u05D5\u05EA \u05D4\u05E9\u05DB\u05D5\u05DC\u05D9\u05DD.\n    "
    }, {
      question: "\u05D0\u05DD \u05E0\u05E8\u05E9\u05DE\u05EA\u05D9 \u05DC\u05D0\u05E8\u05D7 \u05D6\u05D4 \u05D0\u05D5\u05DE\u05E8 \u05E9\u05D1\u05D5\u05D5\u05D3\u05D0\u05D5\u05EA \u05D0\u05D7 \u05D9\u05E9\u05EA\u05D1\u05E5 \u05DC\u05DE\u05E4\u05D2\u05E9 \u05D0\u05E6\u05DC\u05D9?",
      answer: "\u05D1\u05D3\u05E8\u05DA \u05DB\u05DC\u05DC, \u05DB\u05DE\u05D5\u05EA \u05D4\u05E0\u05E8\u05E9\u05DE\u05D9\u05DD \u05DC\u05D0\u05D9\u05E8\u05D5\u05D7 \u05D2\u05D3\u05D5\u05DC\u05D4 \u05DE\u05DB\u05DE\u05D5\u05EA \u05D4\u05D0\u05D7\u05D9\u05DD \u05D4\u05E0\u05E8\u05E9\u05DE\u05D9\u05DD, \u05DE\u05DB\u05D9\u05D5\u05DF \u05E9\u05DC\u05E8\u05D5\u05D1 \u05E7\u05DC \u05D9\u05D5\u05EA\u05E8 \u05DC\u05E4\u05EA\u05D5\u05D7 \u05D0\u05EA \u05D4\u05D1\u05D9\u05EA \u05DE\u05D0\u05E9\u05E8 \u05DC\u05D4\u05D5\u05D1\u05D9\u05DC \u05D5\u05DC\u05E9\u05EA\u05E3 \u05D1\u05E1\u05D9\u05E4\u05D5\u05E8 \u05D0\u05D9\u05E9\u05D9. \u05DB\u05D0\u05E9\u05E8 \u05D0\u05D7 \u05D9\u05E9\u05EA\u05D1\u05E5 \u05DC\u05D0\u05D9\u05E8\u05D5\u05D7 \u05D0\u05E6\u05DC\u05DA, \u05EA\u05E7\u05D1\u05DC \u05DE\u05E1\u05E8\u05D5\u05DF \u05D5\u05DE\u05D9\u05D9\u05DC \u05E2\u05DD \u05E4\u05E8\u05D8\u05D9\u05D5. \u05D7\u05E9\u05D5\u05D1 \u05DC\u05E7\u05E8\u05D5\u05D0 \u05E2\u05DC \u05D4\u05E0\u05D5\u05E4\u05DC \u05D1\u05D0\u05EA\u05E8 <a target=\"_blank\" href=\"https://www.izkor.gov.il/\">\u05D9\u05D6\u05DB\u05D5\u05E8<a/>, \u05DC\u05D1\u05E6\u05E2 \u05E9\u05D9\u05D7\u05EA \u05EA\u05D9\u05D0\u05D5\u05DD \u05E6\u05D9\u05E4\u05D9\u05D5\u05EA \u05D0\u05D5 \u05DE\u05E4\u05D2\u05E9 \u05D4\u05DB\u05E8\u05D5\u05EA \u05DE\u05E7\u05D3\u05D9\u05DD \u05E2\u05DD \u05D4\u05D0\u05D7, \u05D5\u05DB\u05DF \u05D9\u05E9\u05DC\u05D7 \u05D0\u05DC\u05D9\u05DA <a target=\"_blank\" href=\"/assets/docs/\u05E2\u05E8\u05DB\u05EA%20\u05D0\u05D9\u05E8\u05D5\u05D7%20-%20\u05D4\u05D0\u05D7\u05D9\u05DD%20\u05E9\u05DC\u05E0\u05D5.pdf\">\u05E2\u05E8\u05DB\u05EA \u05D0\u05D9\u05E8\u05D5\u05D7<a/>. \u05D0\u05DD \u05DC\u05D0 \u05EA\u05E7\u05D1\u05DC \u05E9\u05D9\u05D1\u05D5\u05E5 - \u05E0\u05D9\u05EA\u05DF \u05DB\u05DE\u05D5\u05D1\u05DF \u05DC\u05D4\u05D9\u05E8\u05E9\u05DD \u05DB\u05DE\u05E9\u05EA\u05EA\u05E3 \u05D1\u05D0\u05D7\u05D3 \u05D4\u05DE\u05E4\u05D2\u05E9\u05D9\u05DD \u05D4\u05E7\u05E8\u05D5\u05D1\u05D9\u05DD \u05DC\u05D1\u05D9\u05EA\u05DA.\n    "
    }, {
      question: "\u05DE\u05D4 \u05D0\u05D5\u05DE\u05E8\u05EA \u05D4\u05D0\u05D5\u05E4\u05E6\u05D9\u05D4 \"\u05D0\u05D9\u05E8\u05D5\u05D7 \u05DC\u05DE\u05D5\u05D6\u05DE\u05E0\u05D9\u05DD \u05D1\u05DC\u05D1\u05D3\"?",
      answer: "\u05D0\u05D5\u05E4\u05E6\u05D9\u05D4 \u05D6\u05D5 \u05D0\u05D5\u05DE\u05E8\u05EA \u05E9\u05D4\u05DE\u05E4\u05D2\u05E9 \u05E1\u05D2\u05D5\u05E8 \u05DC\u05DE\u05E9\u05EA\u05EA\u05E4\u05D9\u05DD \u05D7\u05D9\u05E6\u05D5\u05E0\u05D9\u05D9\u05DD, \u05D4\u05DE\u05D0\u05E8\u05D7 \u05DE\u05D6\u05DE\u05D9\u05DF \u05DC\u05DE\u05E4\u05D2\u05E9 \u05E7\u05D1\u05D5\u05E6\u05EA \u05D0\u05E0\u05E9\u05D9\u05DD \u05E1\u05D2\u05D5\u05E8\u05D4 \u05E9\u05DC\u05D0 \u05E0\u05D9\u05EA\u05DF \u05DC\u05D4\u05E6\u05D8\u05E8\u05E3 \u05D0\u05DC\u05D9\u05D4."
    }, {
      question: "\u05D0\u05D9\u05DA \u05D0\u05E0\u05D9 \u05DE\u05D6\u05DE\u05D9\u05DF \u05D0\u05E0\u05E9\u05D9\u05DD \u05DC\u05DE\u05E4\u05D2\u05E9 \u05D1\u05D1\u05D9\u05EA\u05D9?",
      answer: "\u05DC\u05D0\u05D7\u05E8 \u05E9\u05D9\u05D1\u05D5\u05E5 \u05D4\u05D0\u05D7/\u05D5\u05EA \u05D1\u05D1\u05D9\u05EA\u05DA, \u05D9\u05E9 \u05DC\u05D4\u05D5\u05E6\u05D9\u05D0 \u05E4\u05E8\u05E1\u05D5\u05DD \u05E2\u05DD \u05E9\u05DE\u05D5 \u05E9\u05DC \u05D4\u05D0\u05D7 \u05D5\u05DC\u05D4\u05E4\u05D9\u05E5 \u05D1\u05D9\u05DF \u05D7\u05D1\u05E8\u05D9\u05DD \u05D5\u05DE\u05D3\u05D9\u05D5\u05EA \u05D7\u05D1\u05E8\u05EA\u05D9\u05D5\u05EA. <a target=\"_blank\" href=\"/assets/docs/\u05E2\u05E8\u05DB\u05EA%20\u05D0\u05D9\u05E8\u05D5\u05D7%20-%20\u05D4\u05D0\u05D7\u05D9\u05DD%20\u05E9\u05DC\u05E0\u05D5.pdf\">\u05D1\u05E2\u05E8\u05DB\u05EA \u05D4\u05DE\u05D0\u05E8\u05D7<a/> \u05E0\u05D9\u05EA\u05DF \u05DC\u05DE\u05E6\u05D5\u05D0 \u05D2\u05DD \u05D4\u05D6\u05DE\u05E0\u05D5\u05EA \u05DC\u05E9\u05D9\u05EA\u05D5\u05E3 \u05D1\u05E8\u05E9\u05EA\u05D5\u05EA \u05D4\u05D7\u05D1\u05E8\u05EA\u05D9\u05D5\u05EA \u05D4\u05E9\u05D5\u05E0\u05D5\u05EA. "
    }, {
      question: "\u05DB\u05DE\u05D4 \u05D0\u05E0\u05E9\u05D9\u05DD \u05D0\u05D5\u05DB\u05DC \u05DC\u05D4\u05D6\u05DE\u05D9\u05DF \u05DC\u05D0\u05D9\u05E8\u05D5\u05D7 \u05E2\u05E6\u05DE\u05D5?",
      answer: "\u05EA\u05DC\u05D5\u05D9 \u05D1\u05DB\u05DE\u05D5\u05EA \u05D4\u05DE\u05E9\u05EA\u05EA\u05E4\u05D9\u05DD \u05E9\u05D9\u05DB\u05D5\u05DC\u05D4 \u05DC\u05D4\u05D9\u05DB\u05E0\u05E1 \u05DC\u05D1\u05D9\u05EA\u05DA / \u05DC\u05DE\u05E7\u05D5\u05DD \u05D4\u05D0\u05D9\u05E8\u05D5\u05D7. \u05E0\u05D9\u05EA\u05DF \u05DC\u05E7\u05D9\u05D9\u05DD \u05DE\u05E4\u05D2\u05E9\u05D9\u05DD \u05D1\u05D7\u05DC\u05DC\u05D9\u05DD \u05D2\u05D3\u05D5\u05DC\u05D9\u05DD, \u05D3\u05D5\u05D2\u05DE\u05EA \u05DE\u05EA\u05E0\"\u05E1, \u05D0\u05D5\u05D3\u05D9\u05D8\u05D5\u05E8\u05D9\u05D5\u05DD \u05D5\u05DB\u05D3\u05D5\u05DE\u05D4, \u05D1\u05EA\u05E0\u05D0\u05D9 \u05E9\u05D6\u05D4 \u05DE\u05EA\u05D0\u05D9\u05DD \u05DC\u05D0\u05D7 \u05D5\u05E7\u05D9\u05D9\u05DE\u05D9\u05DD \u05D4\u05DB\u05DC\u05D9\u05DD \u05D4\u05E0\u05D7\u05D5\u05E6\u05D9\u05DD \u05DC\u05D0\u05D7 (\u05DB\u05DE\u05D5 \u05DE\u05E1\u05DA \u05D5\u05DE\u05E7\u05E8\u05DF \u05D1\u05DE\u05D9\u05D3\u05EA \u05D4\u05E6\u05D5\u05E8\u05DA). \u05D1\u05E2\u05EA \u05E4\u05EA\u05D9\u05D7\u05EA \u05D4\u05D0\u05D9\u05E8\u05D5\u05D7, \u05D0\u05E0\u05D0 \u05E8\u05E9\u05D5\u05DD \u05D0\u05EA \u05DB\u05DE\u05D5\u05EA \u05D4\u05DE\u05E9\u05EA\u05EA\u05E4\u05D9\u05DD \u05D4\u05DE\u05E7\u05E1\u05D9\u05DE\u05DC\u05D9\u05EA."
    }, {
      question: "\u05D0\u05D9\u05DA \u05D0\u05D5\u05DB\u05DC \u05DC\u05D9\u05E6\u05D5\u05E8 \u05E7\u05E9\u05E8 \u05E2\u05DD \u05D4\u05D0\u05E0\u05E9\u05D9\u05DD \u05E9\u05E0\u05E8\u05E9\u05DE\u05D5 \u05DC\u05DE\u05E4\u05D2\u05E9?",
      answer: "\u05E0\u05D9\u05EA\u05DF \u05DC\u05E7\u05D1\u05DC \u05D0\u05EA \u05D4\u05E4\u05E8\u05D8\u05D9\u05DD \u05E9\u05DC \u05D4\u05DE\u05E9\u05EA\u05EA\u05E4\u05D9\u05DD \u05E9\u05E0\u05E8\u05E9\u05DE\u05D5 \u05DC\u05D1\u05D9\u05EA\u05DA/\u05DC\u05DE\u05E4\u05D2\u05E9 \u05D1\u05D3\u05E3 \u05D4\u05D0\u05D9\u05E8\u05D5\u05D7 \u05D1\u05D0\u05EA\u05E8."
    }, {
      question: "\u05DC\u05D0\u05D7\u05E8 \u05D4\u05E9\u05D9\u05D1\u05D5\u05E5 \u05E9\u05DC \u05D0\u05D7 \u05DC\u05D1\u05D9\u05EA\u05D9 \u05DE\u05D4 \u05E2\u05DC\u05D9 \u05DC\u05E2\u05E9\u05D5\u05EA?",
      answer: "\u05DB\u05D0\u05E9\u05E8 \u05D0\u05D7 \u05D9\u05E9\u05EA\u05D1\u05E5 \u05DC\u05D0\u05D9\u05E8\u05D5\u05D7 \u05D0\u05E6\u05DC\u05DA, \u05EA\u05E7\u05D1\u05DC \u05DE\u05E1\u05E8\u05D5\u05DF \u05D5\u05DE\u05D9\u05D9\u05DC \u05E2\u05DD \u05E4\u05E8\u05D8\u05D9\u05D5. \u05D7\u05E9\u05D5\u05D1 \u05DC\u05E7\u05E8\u05D5\u05D0 \u05E2\u05DC \u05D4\u05E0\u05D5\u05E4\u05DC \u05D1\u05D0\u05EA\u05E8 <a target=\"_blank\" href=\"https://www.izkor.gov.il/\">\u05D9\u05D6\u05DB\u05D5\u05E8<a/>, \u05DC\u05D1\u05E6\u05E2 \u05E9\u05D9\u05D7\u05EA \u05EA\u05D9\u05D0\u05D5\u05DD \u05E6\u05D9\u05E4\u05D9\u05D5\u05EA \u05D0\u05D5 \u05DC\u05E7\u05D9\u05D9\u05DD \u05DE\u05E4\u05D2\u05E9 \u05D4\u05DB\u05E8\u05D5\u05EA \u05DE\u05E7\u05D3\u05D9\u05DD \u05E2\u05DD \u05D4\u05D0\u05D7, \u05D5\u05DB\u05DF \u05D9\u05E9\u05DC\u05D7 \u05D0\u05DC\u05D9\u05DA <a target=\"_blank\" href=\"/assets/docs/\u05E2\u05E8\u05DB\u05EA%20\u05D0\u05D9\u05E8\u05D5\u05D7%20-%20\u05D4\u05D0\u05D7\u05D9\u05DD%20\u05E9\u05DC\u05E0\u05D5.pdf\">\u05E2\u05E8\u05DB\u05EA \u05D0\u05D9\u05E8\u05D5\u05D7<a/>."
    }, {
      question: "\u05D0\u05E0\u05D9 \u05E8\u05D5\u05E6\u05D4 \u05DC\u05D1\u05D8\u05DC \u05D0\u05EA \u05D4\u05D0\u05D9\u05E8\u05D5\u05D7 \u05D0\u05E6\u05DC\u05D9, \u05DE\u05D4 \u05E2\u05DC\u05D9 \u05DC\u05E2\u05E9\u05D5\u05EA?",
      answer: "\u05D7\u05E9\u05D5\u05D1 \u05DE\u05D0\u05D5\u05D3 \u05DC\u05D4\u05D1\u05D9\u05DF \u05E9\u05D1\u05E2\u05EA \u05E9\u05D9\u05D1\u05D5\u05E5 \u05D0\u05D7 \u05DC\u05DE\u05E4\u05D2\u05E9 \u05D1\u05D1\u05D9\u05EA\u05DA, \u05D9\u05E9 \u05D4\u05EA\u05DB\u05D5\u05D5\u05E0\u05E0\u05D5\u05EA \u05E9\u05DC \u05D4\u05D0\u05D7 \u05DC\u05E7\u05E8\u05D0\u05EA \u05D4\u05DE\u05E4\u05D2\u05E9 \u05D5\u05DC\u05DB\u05DF, \u05DC\u05D1\u05D9\u05D8\u05D5\u05DC \u05D4\u05DE\u05E4\u05D2\u05E9 \u05D9\u05E9 \u05D4\u05E9\u05DC\u05DB\u05D5\u05EA \u05E8\u05D1\u05D5\u05EA. \u05E2\u05DC \u05DB\u05DF, \u05D9\u05E9 \u05DC\u05E2\u05E9\u05D5\u05EA \u05D4\u05DB\u05DC \u05E2\u05DC \u05DE\u05E0\u05EA \u05DC\u05D0 \u05DC\u05D1\u05D8\u05DC.  \u05D9\u05D7\u05D3 \u05E2\u05DD \u05D6\u05D0\u05EA \u05D0\u05E0\u05D5 \u05DE\u05D1\u05D9\u05E0\u05D9\u05DD \u05DB\u05D9 \u05DC\u05E2\u05D9\u05EA\u05D9\u05DD \u05D9\u05EA\u05DB\u05E0\u05D5 \u05D0\u05D9\u05E8\u05D5\u05E2\u05D9\u05DD \u05DC\u05D0 \u05E6\u05E4\u05D5\u05D9\u05D9\u05DD, \u05D5\u05DC\u05DB\u05DF \u05D0\u05DD \u05D9\u05E9 \u05E6\u05D5\u05E8\u05DA \u05D1\u05D1\u05D9\u05D8\u05D5\u05DC \u05D4\u05DE\u05E4\u05D2\u05E9 - \u05E0\u05D9\u05EA\u05DF <a target=\"_blank\" href=\"/contact\">\u05DC\u05D9\u05E6\u05D5\u05E8 \u05D0\u05D9\u05EA\u05E0\u05D5 \u05E7\u05E9\u05E8<a/>."
    }, {
      question: "\u05DE\u05D4 \u05D0\u05E0\u05D9 \u05E2\u05D5\u05E9\u05D4 \u05E2\u05DD \u05D4\u05D0\u05D7 \u05E9\u05E9\u05D5\u05D1\u05E5 \u05D0\u05DC\u05D9 \u05D1\u05D9\u05D8\u05DC \u05D0\u05EA \u05D4\u05D2\u05E2\u05EA\u05D5?",
      answer: "\u05E0\u05D9\u05EA\u05DF <a target=\"_blank\" href=\"/contact\">\u05DC\u05D9\u05E6\u05D5\u05E8 \u05D0\u05D9\u05EA\u05E0\u05D5 \u05E7\u05E9\u05E8<a/> \u05E2\u05DC \u05DE\u05E0\u05EA \u05E9\u05E0\u05D5\u05DB\u05DC \u05DC\u05E9\u05D1\u05E5 \u05DC\u05DA \u05D0\u05D7 \u05D0\u05D7\u05E8."
    }, {
      question: "\u05DE\u05D4 \u05D0\u05E0\u05D9 \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05DB\u05D9\u05DF \u05DC\u05E7\u05E8\u05D0\u05EA \u05D4\u05DE\u05E4\u05D2\u05E9?",
      answer: "\u05D4\u05D0\u05D9\u05E8\u05D5\u05D7 \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA \u05D1\u05D0\u05D5\u05D5\u05D9\u05E8\u05D4 \u05E0\u05D5\u05D7\u05D4 \u05D5\u05E0\u05E2\u05D9\u05DE\u05D4 \u05DC\u05D0\u05D7 \u05D5\u05DC\u05DE\u05E9\u05EA\u05EA\u05E4\u05D9\u05DD. \u05E0\u05D9\u05EA\u05DF \u05DC\u05D4\u05DB\u05D9\u05DF \u05DB\u05D9\u05D1\u05D5\u05D3, \u05DE\u05E7\u05D5\u05DD \u05D9\u05E9\u05D9\u05D1\u05D4 \u05E0\u05D5\u05D7 \u05D5\u05DC\u05EA\u05D0\u05DD \u05E6\u05D9\u05E4\u05D9\u05D5\u05EA \u05E2\u05DD \u05D4\u05D0\u05D7 \u05D1\u05E0\u05D5\u05D2\u05E2 \u05DC\u05D0\u05D1\u05D9\u05D6\u05E8\u05D9\u05DD \u05E9\u05D4\u05D5\u05D0 \u05E6\u05E8\u05D9\u05DA (\u05DB\u05DE\u05D5 \u05DE\u05E7\u05E8\u05DF, \u05DE\u05E1\u05DA \u05D5\u05DB\u05D5'). \u05D1\u05E2\u05E8\u05DB\u05EA \u05D4\u05D0\u05D9\u05E8\u05D5\u05D7 \u05E0\u05D9\u05EA\u05DF \u05DC\u05DE\u05E6\u05D5\u05D0 \u05E9\u05DC\u05D8\u05D9 \u05D4\u05DB\u05D5\u05D5\u05E0\u05D4 \u05DC\u05D0\u05D5\u05E8\u05D7\u05D9\u05DD, \u05D4\u05E0\u05D7\u05D9\u05D5\u05EA, \u05D4\u05E1\u05D1\u05E8 \u05E2\u05DC \u05D4\u05E2\u05DE\u05D5\u05EA\u05D4 \u05D5\u05D4\u05D6\u05DE\u05E0\u05D5\u05EA \u05DC\u05D0\u05D9\u05E8\u05D5\u05D7. \u05DE\u05D9\u05D3\u05E2 \u05E0\u05D5\u05E1\u05E3 \u05D1\u05E2\u05DE\u05D5\u05D3 <a target=\"_blank\" href=\"/agenda\">\u05DE\u05D1\u05E0\u05D4 \u05D4\u05E2\u05E8\u05D1<a/>"
    }, {
      question: "\u05D4\u05D0\u05DD \u05D0\u05E0\u05D9 \u05D0\u05D5\u05DB\u05DC \u05DC\u05E7\u05D9\u05D9\u05DD \u05D0\u05EA \u05D4\u05DE\u05E4\u05D2\u05E9 \u05E9\u05DC '\u05D4\u05D0\u05D7\u05D9\u05DD \u05E9\u05DC\u05E0\u05D5' \u05D1\u05E9\u05E2\u05D5\u05EA \u05D4\u05D9\u05D5\u05DD \u05D5\u05D1\u05DE\u05E1\u05D2\u05E8\u05EA \u05D1\u05D9\u05EA \u05E1\u05E4\u05E8/ \u05E2\u05D1\u05D5\u05D3\u05D4 \u05D5\u05DB\u05D5?",
      answer: "\u05E8\u05D5\u05D1 \u05D4\u05DE\u05E4\u05D2\u05E9\u05D9\u05DD \u05D9\u05EA\u05E7\u05D9\u05D9\u05DE\u05D5 \u05D1\u05D9\u05D5\u05DD \u05E8\u05D0\u05E9\u05D5\u05DF \u05D4-26.4 \u05D1\u05E9\u05E2\u05D4 20:00, \u05D0\u05DA \u05D9\u05E9\u05E0\u05D4 \u05D0\u05E4\u05E9\u05E8\u05D5\u05EA \u05DC\u05E7\u05D9\u05D9\u05DD \u05DE\u05E4\u05D2\u05E9\u05D9\u05DD \u05DC\u05D0\u05D5\u05E8\u05DA \u05D4\u05E9\u05D1\u05D5\u05E2 \u05E1\u05D1\u05D9\u05D1 \u05D9\u05D5\u05DD \u05D4\u05D6\u05D9\u05DB\u05E8\u05D5\u05DF, \u05D1\u05D9\u05DF \u05D4\u05EA\u05D0\u05E8\u05D9\u05DB\u05D9\u05DD 22.4-28.4. \u05E0\u05D9\u05EA\u05DF \u05DC\u05D1\u05D3\u05D5\u05E7 \u05D0\u05EA \u05D4\u05EA\u05D0\u05E8\u05D9\u05DA \u05D5\u05D4\u05E9\u05E2\u05D4 \u05D1<a target=\"_blank\" href=\"/meetings\">\u05E2\u05DE\u05D5\u05D3 \u05D4\u05DE\u05E4\u05D2\u05E9\u05D9\u05DD<a/> \u05D1\u05DC\u05D7\u05D9\u05E6\u05D4 \u05E2\u05DC \u05D0\u05D9\u05E8\u05D5\u05D7."
    }, {
      question: "\u05D4\u05D0\u05DD \u05D4\u05DE\u05E4\u05D2\u05E9\u05D9\u05DD \u05DE\u05EA\u05E7\u05D9\u05D9\u05DE\u05D9\u05DD \u05D1\u05E2\u05E8\u05D1 \u05D0\u05D5 \u05D1\u05D9\u05D5\u05DD \u05D4\u05D6\u05D9\u05DB\u05E8\u05D5\u05DF?",
      answer: "\u05DE\u05E4\u05D2\u05E9\u05D9 '\u05D4\u05D0\u05D7\u05D9\u05DD \u05E9\u05DC\u05E0\u05D5' \u05D9\u05EA\u05E7\u05D9\u05D9\u05DE\u05D5 \u05D1\u05E8\u05D5\u05D1\u05DD \u05D1\u05D9\u05D5\u05DD \u05E8\u05D0\u05E9\u05D5\u05DF \u05D4-26.4 \u05D1\u05E9\u05E2\u05D4 20:00. \u05D0\u05DA \u05D9\u05E9\u05E0\u05D4 \u05D0\u05E4\u05E9\u05E8\u05D5\u05EA \u05DC\u05E7\u05D9\u05D9\u05DD \u05DE\u05E4\u05D2\u05E9\u05D9\u05DD \u05DC\u05D0\u05D5\u05E8\u05DA \u05D4\u05E9\u05D1\u05D5\u05E2 \u05E1\u05D1\u05D9\u05D1 \u05D9\u05D5\u05DD \u05D4\u05D6\u05D9\u05DB\u05E8\u05D5\u05DF, \u05D1\u05D9\u05DF \u05D4\u05EA\u05D0\u05E8\u05D9\u05DB\u05D9\u05DD 22.4-28.4. \u05E0\u05D9\u05EA\u05DF \u05DC\u05D1\u05D3\u05D5\u05E7 \u05D0\u05EA \u05D4\u05EA\u05D0\u05E8\u05D9\u05DA \u05D5\u05D4\u05E9\u05E2\u05D4 \u05D1<a target=\"_blank\" href=\"/meetings\">\u05E2\u05DE\u05D5\u05D3 \u05D4\u05DE\u05E4\u05D2\u05E9\u05D9\u05DD<a/> \u05D1\u05DC\u05D7\u05D9\u05E6\u05D4 \u05E2\u05DC \u05D0\u05D9\u05E8\u05D5\u05D7."
    }, {
      question: "\u05E2\u05D3 \u05DE\u05EA\u05D9 \u05D9\u05E9\u05E0\u05D4 \u05D0\u05E4\u05E9\u05E8\u05D5\u05EA \u05DC\u05D4\u05D9\u05E8\u05E9\u05DD \u05DC\u05D0\u05D9\u05E8\u05D5\u05D7 \u05D1\u05D1\u05D9\u05EA\u05D9?",
      answer: "\u05E0\u05D9\u05EA\u05DF \u05DC\u05D4\u05E8\u05E9\u05DD \u05E2\u05D3 \u05DB\u05E9\u05D1\u05D5\u05E2\u05D9\u05D9\u05DD \u05DC\u05E4\u05E0\u05D9 \u05D9\u05D5\u05DD \u05D4\u05D6\u05D9\u05DB\u05E8\u05D5\u05DF."
    }, {
      question: "\u05DE\u05D4 \u05D0\u05E0\u05D9 \u05E2\u05D5\u05E9\u05D4 \u05D1\u05E1\u05D5\u05E3 \u05D4\u05DE\u05E4\u05D2\u05E9?",
      answer: "\u05D1\u05E1\u05D5\u05E3 \u05D4\u05DE\u05E4\u05D2\u05E9 \u05EA\u05E7\u05D1\u05DC\u05D5 \u05DE\u05E9\u05D5\u05D1 \u05DC\u05D3\u05D5\u05D0\u05E8 \u05D4\u05D0\u05DC\u05E7\u05D8\u05E8\u05D5\u05E0\u05D9 \u05E9\u05DC\u05DB\u05DD \u05D5\u05E0\u05E9\u05DE\u05D7 \u05E9\u05EA\u05E2\u05E0\u05D5 \u05E2\u05DC\u05D9\u05D5 \u05E2\u05DC \u05DE\u05E0\u05EA \u05E9\u05E0\u05D5\u05DB\u05DC \u05DC\u05DC\u05DE\u05D5\u05D3 \u05DE\u05D7\u05D5\u05D5\u05D9\u05D9\u05EA\u05DB\u05DD.\u05DB\u05DE\u05D5 \u05DB\u05DF \u05E0\u05E9\u05DE\u05D7 \u05E9\u05EA\u05E9\u05EA\u05E4\u05D5 \u05D1\u05E8\u05E9\u05EA\u05D5\u05EA \u05D4\u05D7\u05D1\u05E8\u05EA\u05D9\u05D5\u05EA \u05D0\u05EA \u05D4\u05EA\u05DE\u05D5\u05E0\u05D5\u05EA \u05DE\u05D4\u05DE\u05E4\u05D2\u05E9 \u05D5\u05EA\u05EA\u05D9\u05D9\u05D2\u05D5 \u05D0\u05EA \u05D4\u05E2\u05DE\u05D5\u05D3 \u05E9\u05DC \u05D4\u05D0\u05D7\u05D9\u05DD \u05E9\u05DC\u05E0\u05D5."
    }, {
      question: "\u05D0\u05E0\u05D9 \u05DC\u05D0 \u05D2\u05E8 \u05D1\u05D0\u05E8\u05E5 \u05D5\u05E8\u05D5\u05E6\u05D4 \u05DC\u05E7\u05D9\u05D9\u05DD \u05DE\u05E4\u05D2\u05E9 \u05D1\u05D7\u05D5\"\u05DC, \u05DE\u05D4 \u05D0\u05E0\u05D9 \u05E6\u05E8\u05D9\u05DA \u05DC\u05E2\u05E9\u05D5\u05EA?",
      answer: "\u05E0\u05D9\u05EA\u05DF <a target=\"_blank\" href=\"/contact\">\u05DC\u05D9\u05E6\u05D5\u05E8 \u05D0\u05D9\u05EA\u05E0\u05D5 \u05E7\u05E9\u05E8<a/> \u05D5\u05E0\u05E9\u05DE\u05D7 \u05DC\u05D7\u05D6\u05D5\u05E8 \u05D0\u05DC\u05D9\u05DA \u05DC\u05E4\u05E8\u05D8\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD."
    }, {
      question: "\u05D0\u05DD \u05D0\u05E0\u05D9 \u05E8\u05D5\u05E6\u05D4 \u05DC\u05D0\u05E8\u05D7 \u05D0\u05D7 \u05E1\u05E4\u05E6\u05D9\u05E4\u05D9, \u05DE\u05D4 \u05E2\u05DC\u05D9\u05D9 \u05DC\u05E2\u05E9\u05D5\u05EA?",
      answer: "\u05D0\u05DD \u05D9\u05E9 \u05DC\u05DA \u05D4\u05D9\u05DB\u05E8\u05D5\u05EA \u05DE\u05E7\u05D3\u05D9\u05DE\u05D4 \u05E2\u05DD \u05D0\u05D7 \u05E9\u05DB\u05D5\u05DC, \u05E0\u05D9\u05EA\u05DF \u05DC\u05D9\u05E6\u05D5\u05E8 \u05D0\u05D9\u05EA\u05D5 \u05E7\u05E9\u05E8 \u05E2\u05DC \u05DE\u05E0\u05EA \u05E9\u05D9\u05E8\u05E9\u05DD \u05D1\u05D0\u05EA\u05E8 \u05D5\u05D9\u05E9\u05EA\u05D1\u05E5 \u05D0\u05DC\u05D9\u05DA \u05DC\u05D0\u05D9\u05E8\u05D5\u05D7. \u05D2\u05DD \u05D0\u05DD \u05D9\u05E9 \u05D1\u05D9\u05E0\u05D9\u05DB\u05DD \u05D4\u05D9\u05DB\u05E8\u05D5\u05EA \u05DE\u05E7\u05D3\u05D9\u05DE\u05D4 - \u05D7\u05E9\u05D5\u05D1 \u05E9\u05D4\u05D0\u05D7 \u05D9\u05E8\u05E9\u05DD \u05D1\u05DE\u05E2\u05E8\u05DB\u05EA \u05DB\u05D3\u05D9 \u05E9\u05E0\u05D5\u05DB\u05DC \u05DC\u05E9\u05D5\u05D7\u05D7 \u05D0\u05D9\u05EA\u05D5 \u05D5\u05DC\u05D4\u05D6\u05DE\u05D9\u05E0\u05D5 \u05DC\u05E4\u05E2\u05D9\u05DC\u05D5\u05EA \u05D4\u05E2\u05DE\u05D5\u05EA\u05D4 \u05D5\u05DC\u05E7\u05D4\u05D9\u05DC\u05EA \u05D4\u05D0\u05D7\u05D9\u05DD \u05E9\u05DC\u05E0\u05D5."
    }, {
      question: "\u05D4\u05D0\u05DD \u05EA\u05D5\u05DB\u05DF \u05D4\u05DE\u05E4\u05D2\u05E9 \u05DE\u05EA\u05D0\u05D9\u05DD \u05DC\u05D1\u05E0\u05D9 \u05E0\u05D5\u05E2\u05E8?",
      answer: "\u05EA\u05D5\u05DB\u05DF \u05D4\u05DE\u05E4\u05D2\u05E9\u05D9\u05DD \u05DE\u05EA\u05D0\u05D9\u05DD \u05DC\u05D1\u05E0\u05D9 \u05E0\u05D5\u05E2\u05E8, \u05D9\u05E9 \u05DC\u05E6\u05D9\u05D9\u05DF \u05D1\u05E2\u05EA \u05E4\u05EA\u05D9\u05D7\u05EA \u05D4\u05DE\u05E4\u05D2\u05E9 \u05D1\u05D0\u05EA\u05E8 \u05DE\u05D9\u05D4\u05D5 \u05E7\u05D4\u05DC \u05D4\u05D9\u05E2\u05D3, \u05D5\u05DB\u05DF \u05DC\u05E6\u05D9\u05D9\u05DF \u05D6\u05D0\u05EA \u05D1\u05E9\u05D9\u05D7\u05EA \u05EA\u05D9\u05D0\u05D5\u05DD \u05D4\u05E6\u05D9\u05E4\u05D9\u05D5\u05EA \u05E2\u05DD \u05D4\u05D0\u05D7. "
    }, {
      question: "\u05DB\u05DE\u05D4 \u05D6\u05DE\u05DF \u05D0\u05D5\u05E8\u05DA \u05DE\u05E4\u05D2\u05E9?",
      answer: "\u05D1\u05DE\u05DE\u05D5\u05E6\u05E2 \u05D4\u05DE\u05E4\u05D2\u05E9\u05D9\u05DD \u05E0\u05E2\u05D9\u05DD \u05D1\u05D9\u05DF \u05E9\u05E2\u05D4-\u05E9\u05E2\u05D4 \u05D5\u05D7\u05E6\u05D9, \u05DE\u05D0\u05D5\u05D3 \u05EA\u05DC\u05D5\u05D9 \u05D1\u05DA, \u05D1\u05E7\u05D4\u05DC \u05D4\u05E9\u05D5\u05DE\u05E2\u05D9\u05DD \u05D5\u05D1\u05D0\u05D7. \u05D7\u05E9\u05D5\u05D1 \u05DC\u05EA\u05D0\u05DD \u05E6\u05D9\u05E4\u05D9\u05D5\u05EA \u05DC\u05E4\u05E0\u05D9 \u05DB\u05DF \u05D5\u05DC\u05EA\u05DB\u05E0\u05DF \u05DE\u05E8\u05D0\u05E9 \u05D0\u05EA \u05D4\u05E2\u05E8\u05D1 \u05D5\u05D0\u05D5\u05E8\u05DB\u05D5."
    }];
    var qnaParticipates = [{
      question: "\u05DE\u05D4 \u05D6\u05D4 \u05D0\u05D5\u05DE\u05E8 '\u05DE\u05E9\u05EA\u05EA\u05E3'?",
      answer: "\u05DE\u05E9\u05EA\u05EA\u05E3 \u05D4\u05D9\u05E0\u05D5 \u05E7\u05D4\u05DC \u05D4\u05E9\u05D5\u05DE\u05E2\u05D9\u05DD \u05D0\u05E9\u05E8 \u05DE\u05D2\u05D9\u05E2\u05D9\u05DD \u05DC\u05DE\u05E4\u05D2\u05E9\u05D9\u05DD \u05D4\u05E4\u05EA\u05D5\u05D7\u05D9\u05DD \u05DC\u05E7\u05D4\u05DC \u05D4\u05E8\u05D7\u05D1. \u05DB\u05DE\u05D5\u05D1\u05DF \u05E9\u05D1\u05D9\u05DF \u05E7\u05D4\u05DC \u05D4\u05E9\u05D5\u05DE\u05E2\u05D9\u05DD, \u05D9\u05E9\u05EA\u05EA\u05E4\u05D5 \u05D2\u05DD \u05D0\u05D7\u05D9\u05DD \u05D5\u05D0\u05D7\u05D9\u05D5\u05EA \u05E9\u05DB\u05D5\u05DC\u05D9\u05DD."
    }, {
      question: "\u05D0\u05D9\u05DA \u05E0\u05D9\u05EA\u05DF \u05DC\u05D4\u05E9\u05EA\u05EA\u05E3 \u05D1\u05DE\u05E4\u05D2\u05E9\u05D9 '\u05D4\u05D0\u05D7\u05D9\u05DD \u05E9\u05DC\u05E0\u05D5'?",
      answer: "\u05E0\u05D9\u05EA\u05DF \u05DC\u05D4\u05DB\u05E0\u05E1 \u05DC\u05E2\u05DE\u05D5\u05D3 '<a target=\"_blank\" href=\"/participate\">\u05D0\u05E0\u05D9 \u05E8\u05D5\u05E6\u05D4 \u05DC\u05D4\u05E9\u05EA\u05EA\u05E3<a/>' \u05D5\u05DC\u05D4\u05D6\u05D9\u05DF \u05D0\u05EA \u05E4\u05E8\u05D8\u05D9\u05DA. \u05D1\u05E2\u05DE\u05D5\u05D3 \u05D4\u05DE\u05E4\u05D2\u05E9\u05D9\u05DD \u05E0\u05D9\u05EA\u05DF \u05DC\u05D7\u05E4\u05E9 \u05DE\u05E4\u05D2\u05E9\u05D9\u05DD \u05D4\u05E7\u05E8\u05D5\u05D1\u05D9\u05DD \u05DC\u05DE\u05E7\u05D5\u05DD \u05DE\u05D2\u05D5\u05E8\u05D9\u05DA. \u05DC\u05D0\u05D7\u05E8 \u05E9\u05D1\u05D7\u05E8\u05EA \u05D1\u05DE\u05E4\u05D2\u05E9, \u05E0\u05D9\u05EA\u05DF \u05DC\u05DC\u05D7\u05D5\u05E5 \u05E2\u05DC \u05DB\u05E4\u05EA\u05D5\u05E8 '\u05D4\u05E9\u05EA\u05D1\u05E5'. \u05DC\u05D0\u05D7\u05E8 \u05D4\u05E9\u05D9\u05D1\u05D5\u05E5, \u05D4\u05DE\u05D0\u05E8\u05D7 \u05D9\u05E7\u05D1\u05DC \u05D4\u05D5\u05D3\u05E2\u05D4 \u05D5\u05D9\u05D0\u05E9\u05E8 \u05D0\u05EA \u05D4\u05E9\u05EA\u05EA\u05E4\u05D5\u05EA\u05DA. \u05E9\u05D9\u05DE\u05D5 \u05DC\u05D1 \u05DC\u05E7\u05E8\u05D0\u05EA \u05D4\u05DE\u05E4\u05D2\u05E9 \u05E9\u05E2\u05E6\u05DE\u05D5 - \u05E9\u05D0\u05DB\u05DF \u05D4\u05E9\u05EA\u05D1\u05E5 \u05D0\u05D7 \u05DC\u05DE\u05E4\u05D2\u05E9 \u05D0\u05DC\u05D9\u05D5 \u05E0\u05E8\u05E9\u05DE\u05EA\u05DD."
    }, {
      question: "\u05D4\u05D0\u05DD \u05E0\u05D9\u05EA\u05DF \u05DC\u05D4\u05E9\u05EA\u05EA\u05E3 \u05D1\u05D9\u05D5\u05EA\u05E8 \u05DE\u05D0\u05D9\u05E8\u05D5\u05E2 \u05D0\u05D7\u05D3?",
      answer: "\u05DB\u05DE\u05D5\u05D1\u05DF, \u05D1\u05E2\u05EA \u05D4\u05E8\u05D9\u05E9\u05D5\u05DD \u05D1\u05D0\u05EA\u05E8 \u05E0\u05D9\u05EA\u05DF \u05DC\u05D4\u05D9\u05E8\u05E9\u05DD \u05DC\u05DB\u05DE\u05D4 \u05D1\u05EA\u05D9\u05DD \u05DE\u05D0\u05E8\u05D7\u05D9\u05DD, \u05D0\u05DA \u05E9\u05D9\u05DD \u05DC\u05D1 \u05E9\u05D4\u05EA\u05D0\u05E8\u05D9\u05DA \u05D5\u05D4\u05E9\u05E2\u05D4 \u05D0\u05D9\u05E0\u05DD \u05D7\u05D5\u05E4\u05E4\u05D9\u05DD."
    }, {
      question: "\u05D0\u05D9\u05DA \u05D0\u05E0\u05D9 \u05D9\u05D5\u05E6\u05E8 \u05E7\u05E9\u05E8 \u05E2\u05DD \u05D4\u05DE\u05D0\u05E8\u05D7?",
      answer: "\u05DC\u05D0\u05D7\u05E8 \u05E9\u05D4\u05E9\u05EA\u05D1\u05E6\u05EA \u05DC\u05D0\u05D9\u05E8\u05D5\u05D7, \u05EA\u05D2\u05D9\u05E2 \u05DC\u05E2\u05DE\u05D5\u05D3 \u05D3\u05E3 \u05D0\u05D9\u05E8\u05D5\u05D7 \u05E2\u05DD \u05DB\u05DC \u05D4\u05E4\u05E8\u05D8\u05D9\u05DD. \u05DC\u05DE\u05D0\u05E8\u05D7 \u05EA\u05E9\u05DC\u05D7 \u05D4\u05D6\u05DE\u05E0\u05D4 \u05DC\u05D0\u05D9\u05E9\u05D5\u05E8, \u05D5\u05DC\u05D0\u05D7\u05E8 \u05D0\u05D9\u05E9\u05D5\u05E8\u05D5 \u05EA\u05D5\u05DB\u05DC\u05D5 \u05DC\u05D9\u05E6\u05D5\u05E8 \u05E7\u05E9\u05E8."
    }, {
      question: "\u05D4\u05D0\u05DD \u05D4\u05D0\u05D9\u05E8\u05D5\u05D7 \u05E2\u05D5\u05DC\u05D4 \u05DB\u05E1\u05E3?",
      answer: "\u05DC\u05D0, \u05DB\u05DC \u05E4\u05E2\u05D9\u05DC\u05D5\u05EA \u05D4\u05E2\u05DE\u05D5\u05EA\u05D4 \u05D4\u05D9\u05D0 \u05D5\u05D5\u05DC\u05E0\u05D8\u05E8\u05D9\u05EA."
    }, {
      question: "\u05D4\u05D0\u05DD \u05D0\u05D5\u05DB\u05DC \u05DC\u05D4\u05E6\u05D8\u05E8\u05E3 \u05DC\u05D0\u05D9\u05E8\u05D5\u05D7 \u05E9\u05DC \u05DE\u05D5\u05D6\u05DE\u05E0\u05D9\u05DD \u05D1\u05DC\u05D1\u05D3?",
      answer: "\u05D9\u05E9\u05E0\u05DD \u05DE\u05D0\u05E8\u05D7\u05D9\u05DD \u05E9\u05D1\u05D5\u05D7\u05E8\u05D9\u05DD \u05DC\u05E7\u05D9\u05D9\u05DD \u05DE\u05E4\u05D2\u05E9 \u05D1\u05D5 \u05D4\u05DD \u05DE\u05D6\u05DE\u05D9\u05E0\u05D9\u05DD \u05DE\u05DB\u05E8\u05D9\u05DD \u05D1\u05DC\u05D1\u05D3, \u05D5\u05DC\u05DB\u05DF \u05DC\u05DE\u05E4\u05D2\u05E9\u05D9\u05DD \u05DE\u05E1\u05D5\u05D2 \u05D6\u05D4 \u05DC\u05D0 \u05E0\u05D9\u05EA\u05DF \u05DC\u05D4\u05E6\u05D8\u05E8\u05E3."
    }, {
      question: "\u05D4\u05D0\u05DD \u05D0\u05D5\u05DB\u05DC \u05DC\u05D4\u05D2\u05D9\u05E2 \u05DC\u05D0\u05D9\u05E8\u05D5\u05E2 \u05E2\u05DD \u05D7\u05D1\u05E8\u05D9\u05DD?",
      answer: "\u05DB\u05DF, \u05D9\u05E9 \u05DC\u05E6\u05D9\u05D9\u05DF \u05D1\u05DE\u05D4\u05DC\u05DA \u05D4\u05D4\u05E8\u05E9\u05DE\u05D4 \u05DE\u05E1\u05E4\u05E8 \u05DE\u05E9\u05EA\u05EA\u05E4\u05D9\u05DD \u05D4\u05DE\u05D2\u05D9\u05E2\u05D9\u05DD \u05DC\u05D0\u05D9\u05E8\u05D5\u05D7."
    }, {
      question: "\u05D4\u05D0\u05DD \u05D0\u05D5\u05DB\u05DC \u05DC\u05D3\u05E2\u05EA \u05DE\u05D9 \u05D4\u05D0\u05D7 \u05D4\u05DE\u05E1\u05E4\u05E8 \u05D1\u05D0\u05D5\u05EA\u05D5 \u05E2\u05E8\u05D1?",
      answer: "\u05DB\u05DE\u05D5\u05D1\u05DF, \u05D1\u05E4\u05E8\u05D8\u05D9 \u05D4\u05D0\u05D9\u05E8\u05D5\u05D7 \u05D9\u05D5\u05E4\u05D9\u05E2  \u05E9\u05DD \u05D4\u05D0\u05D7."
    }, {
      question: "\u05DB\u05DE\u05D4 \u05D6\u05DE\u05DF \u05D0\u05D5\u05E8\u05DA \u05D4\u05D0\u05D9\u05E8\u05D5\u05E2?",
      answer: "\u05D1\u05DE\u05DE\u05D5\u05E6\u05E2 \u05D4\u05DE\u05E4\u05D2\u05E9\u05D9\u05DD \u05E0\u05E2\u05D9\u05DD \u05D1\u05D9\u05DF \u05E9\u05E2\u05D4-\u05E9\u05E2\u05D4 \u05D5\u05D7\u05E6\u05D9, \u05D4\u05D3\u05D1\u05E8 \u05EA\u05DC\u05D5\u05D9 \u05D1\u05D3\u05D9\u05E0\u05DE\u05D9\u05E7\u05EA \u05D4\u05E2\u05E8\u05D1, \u05D1\u05E7\u05D4\u05DC \u05D4\u05E9\u05D5\u05DE\u05E2\u05D9\u05DD \u05D5\u05D1\u05D0\u05D7."
    }];
    /***/
  },

  /***/
  "./src/app/qna/qna-list/qna-item/qna-item.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/qna/qna-list/qna-item/qna-item.component.ts ***!
    \*************************************************************/

  /*! exports provided: QnaItemComponent */

  /***/
  function srcAppQnaQnaListQnaItemQnaItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QnaItemComponent", function () {
      return QnaItemComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function QnaItemComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 7);
      }

      if (rf & 2) {
        var ctx_r264 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx_r264.answerSafeHtml, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    function QnaItemComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function QnaItemComponent_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " /> ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var QnaItemComponent = /*#__PURE__*/function () {
      function QnaItemComponent(sanitizer) {
        _classCallCheck(this, QnaItemComponent);

        this.sanitizer = sanitizer;
        this.open = false;
      }

      _createClass(QnaItemComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (this.qnaItem) {
            this.answerSafeHtml = this.sanitizer.bypassSecurityTrustHtml(this.qnaItem.answer);
          }
        }
      }]);

      return QnaItemComponent;
    }();

    QnaItemComponent.ɵfac = function QnaItemComponent_Factory(t) {
      return new (t || QnaItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]));
    };

    QnaItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: QnaItemComponent,
      selectors: [["app-qna-item"]],
      inputs: {
        qnaItem: "qnaItem"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]()],
      decls: 9,
      vars: 8,
      consts: [[1, "qna-item"], [1, "question-container"], [1, "question-mark"], [1, "question-text"], ["class", "answer-container", 3, "innerHtml", 4, "ngIf"], [3, "click"], ["class", "qna-icon", 4, "ngIf"], [1, "answer-container", 3, "innerHtml"], [1, "qna-icon"], ["width", "40", "height", "40", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M13 7C13 6.44772 12.5523 6 12 6C11.4477 6 11 6.44772 11 7V11H7C6.44772 11 6 11.4477 6 12C6 12.5523 6.44772 13 7 13H11V17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17V13H17C17.5523 13 18 12.5523 18 12C18 11.4477 17.5523 11 17 11H13V7Z", "fill", "#16B3AB"], ["d", "M8 11C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13H16C16.5523 13 17 12.5523 17 12C17 11.4477 16.5523 11 16 11H8Z", "fill", "#16B3AB"]],
      template: function QnaItemComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, QnaItemComponent_div_5_Template, 1, 1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QnaItemComponent_Template_div_click_6_listener() {
            return ctx.open = !ctx.open;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, QnaItemComponent_div_7_Template, 3, 0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, QnaItemComponent_div_8_Template, 4, 0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
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
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
      styles: [".qna-item[_ngcontent-%COMP%] {\n  background-color: #f8f8f8;\n  padding: 25px;\n  transition: box-shadow 0.3s;\n  border-radius: 5px;\n}\n@media only screen and (max-width: 768px) {\n  .qna-item[_ngcontent-%COMP%] {\n    padding: 10px;\n  }\n}\n.qna-item[_ngcontent-%COMP%]   .question-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n}\n.qna-item[_ngcontent-%COMP%]   .question-container[_ngcontent-%COMP%]   .question-mark[_ngcontent-%COMP%] {\n  width: 23px;\n  height: 33px;\n  background-image: url('question-mark.png');\n  background-size: 100% 100%;\n  margin-left: 40px;\n}\n@media only screen and (max-width: 768px) {\n  .qna-item[_ngcontent-%COMP%]   .question-container[_ngcontent-%COMP%]   .question-mark[_ngcontent-%COMP%] {\n    margin-left: 0;\n    margin-top: 10px;\n    margin-bottom: 20px;\n  }\n}\n.qna-item[_ngcontent-%COMP%]   .question-container[_ngcontent-%COMP%]   .question-text[_ngcontent-%COMP%] {\n  flex: 1 1 300px;\n  font-size: 18px;\n  font-family: \"heebo\";\n  color: #818181;\n}\n.qna-item[_ngcontent-%COMP%]   .question-container[_ngcontent-%COMP%]   .question-text.font-bold[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.qna-item[_ngcontent-%COMP%]   .question-container[_ngcontent-%COMP%]   .question-collapse-btn[_ngcontent-%COMP%] {\n  cursor: pointer;\n  flex: 0 0 160px;\n  border-width: 2px;\n  border-color: #00a099;\n  border-style: solid;\n  height: 55px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n@media only screen and (max-width: 768px) {\n  .qna-item[_ngcontent-%COMP%]   .question-container[_ngcontent-%COMP%]   .question-collapse-btn[_ngcontent-%COMP%] {\n    flex: 0 0 140px;\n    height: 45px;\n    margin: auto;\n    margin-top: 20px;\n    margin-bottom: 20px;\n  }\n}\n.qna-item[_ngcontent-%COMP%]   .question-container[_ngcontent-%COMP%]   .question-collapse-btn[_ngcontent-%COMP%]   .question-collapse-btn-text[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-family: \"arbel\";\n  color: #00a099;\n  letter-spacing: 4px;\n  margin-left: 14px;\n}\n@media only screen and (max-width: 768px) {\n  .qna-item[_ngcontent-%COMP%]   .question-container[_ngcontent-%COMP%]   .question-collapse-btn[_ngcontent-%COMP%]   .question-collapse-btn-text[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n}\n.qna-item[_ngcontent-%COMP%]   .question-container[_ngcontent-%COMP%]   .question-collapse-btn[_ngcontent-%COMP%]   .fa-angle-double-down[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #00a099;\n}\n@media only screen and (max-width: 768px) {\n  .qna-item[_ngcontent-%COMP%]   .question-container[_ngcontent-%COMP%]   .question-collapse-btn[_ngcontent-%COMP%]   .fa-angle-double-down[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n@media only screen and (max-width: 768px) {\n  .qna-item[_ngcontent-%COMP%]   .question-container[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n.qna-item.open[_ngcontent-%COMP%] {\n  box-shadow: 4.5px 5.362px 10px 0px rgba(4, 26, 55, 0.1);\n}\n.qna-item.open[_ngcontent-%COMP%]   .question-container[_ngcontent-%COMP%]   .question-collapse-btn[_ngcontent-%COMP%] {\n  background-color: #00a099;\n}\n.qna-item.open[_ngcontent-%COMP%]   .question-container[_ngcontent-%COMP%]   .question-collapse-btn[_ngcontent-%COMP%]   .question-collapse-btn-text[_ngcontent-%COMP%] {\n  color: white;\n}\n.qna-item.open[_ngcontent-%COMP%]   .question-container[_ngcontent-%COMP%]   .question-collapse-btn[_ngcontent-%COMP%]   .fa-angle-double-up[_ngcontent-%COMP%] {\n  margin-right: 18px;\n  font-size: 20px;\n  color: white;\n}\n@media only screen and (max-width: 768px) {\n  .qna-item.open[_ngcontent-%COMP%]   .question-container[_ngcontent-%COMP%]   .question-collapse-btn[_ngcontent-%COMP%]   .fa-angle-double-up[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n.qna-item[_ngcontent-%COMP%]   .qna-icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.qna-item[_ngcontent-%COMP%]   .answer-container[_ngcontent-%COMP%] {\n  padding: 10px 65px 25px 290px;\n  font-size: 18px;\n  font-family: \"heebo\";\n  color: #818181;\n}\n@media only screen and (max-width: 768px) {\n  .qna-item[_ngcontent-%COMP%]   .answer-container[_ngcontent-%COMP%] {\n    padding: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcW5hL3FuYS1saXN0L3FuYS1pdGVtL0M6XFxVc2Vyc1xcVGVoaWxhXFxEZXNrdG9wXFxnb29kLXByb2plY3RcXG91cmJyb3RoZXJzLW91cmJyb3RoZXJzXFxvdXItYnJvdGhlcnMtd2ViL3NyY1xcYXBwXFxxbmFcXHFuYS1saXN0XFxxbmEtaXRlbVxccW5hLWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3FuYS9xbmEtbGlzdC9xbmEtaXRlbS9xbmEtaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7QUNDRjtBRENFO0VBTkY7SUFPSSxhQUFBO0VDRUY7QUFDRjtBREFFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FDRUo7QURBSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMENBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0FDRU47QURBTTtFQVBGO0lBUUksY0FBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7RUNHTjtBQUNGO0FEQUk7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtBQ0VOO0FEQU07RUFDRSxpQkFBQTtBQ0VSO0FERUk7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFFQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0ROO0FER007RUFaRjtJQWFJLGVBQUE7SUFDQSxZQUFBO0lBQ0EsWUFBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7RUNBTjtBQUNGO0FERU07RUFDRSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ0FSO0FERVE7RUFQRjtJQVFJLGVBQUE7RUNDUjtBQUNGO0FERU07RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQ0FSO0FERVE7RUFKRjtJQUtJLGVBQUE7RUNDUjtBQUNGO0FER0k7RUF6RUY7SUEwRUksdUJBQUE7RUNBSjtBQUNGO0FER0U7RUFDRSx1REFBQTtBQ0RKO0FESU07RUFDRSx5QkFBQTtBQ0ZSO0FESVE7RUFDRSxZQUFBO0FDRlY7QURLUTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNIVjtBREtVO0VBTEY7SUFNSSxlQUFBO0VDRlY7QUFDRjtBRE9FO0VBQ0UsZUFBQTtBQ0xKO0FEUUU7RUFDRSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7QUNOSjtBRFFJO0VBTkY7SUFPSSxhQUFBO0VDTEo7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3FuYS9xbmEtbGlzdC9xbmEtaXRlbS9xbmEtaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5xbmEtaXRlbSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0OCwgMjQ4LCAyNDgpO1xyXG4gIHBhZGRpbmc6IDI1cHg7XHJcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjNzO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICB9XHJcblxyXG4gIC5xdWVzdGlvbi1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG5cclxuICAgIC5xdWVzdGlvbi1tYXJrIHtcclxuICAgICAgd2lkdGg6IDIzcHg7XHJcbiAgICAgIGhlaWdodDogMzNweDtcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKHNyYy9hc3NldHMvaW1nL3F1ZXN0aW9uLW1hcmsucG5nKTtcclxuICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xyXG5cclxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5xdWVzdGlvbi10ZXh0IHtcclxuICAgICAgZmxleDogMSAxIDMwMHB4O1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnaGVlYm8nO1xyXG4gICAgICBjb2xvcjogcmdiKDEyOSwgMTI5LCAxMjkpO1xyXG5cclxuICAgICAgJi5mb250LWJvbGQge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnF1ZXN0aW9uLWNvbGxhcHNlLWJ0biB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgZmxleDogMCAwIDE2MHB4O1xyXG4gICAgICBib3JkZXItd2lkdGg6IDJweDtcclxuICAgICAgYm9yZGVyLWNvbG9yOiByZ2IoMCwgMTYwLCAxNTMpO1xyXG4gICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgICBoZWlnaHQ6IDU1cHg7XHJcblxyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICBmbGV4OiAwIDAgMTQwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5xdWVzdGlvbi1jb2xsYXBzZS1idG4tdGV4dCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnYXJiZWwnO1xyXG4gICAgICAgIGNvbG9yOiByZ2IoMCwgMTYwLCAxNTMpO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE0cHg7XHJcblxyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5mYS1hbmdsZS1kb3VibGUtZG93biB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGNvbG9yOiByZ2IoMCwgMTYwLCAxNTMpO1xyXG5cclxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYub3BlbiB7XHJcbiAgICBib3gtc2hhZG93OiA0LjVweCA1LjM2MnB4IDEwcHggMHB4IHJnYmEoNCwgMjYsIDU1LCAwLjEpO1xyXG5cclxuICAgIC5xdWVzdGlvbi1jb250YWluZXIge1xyXG4gICAgICAucXVlc3Rpb24tY29sbGFwc2UtYnRuIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMTYwLCAxNTMpO1xyXG5cclxuICAgICAgICAucXVlc3Rpb24tY29sbGFwc2UtYnRuLXRleHQge1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmZhLWFuZ2xlLWRvdWJsZS11cCB7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE4cHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcblxyXG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5xbmEtaWNvbntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gIC5hbnN3ZXItY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDEwcHggNjVweCAyNXB4IDI5MHB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdoZWVibyc7XHJcbiAgICBjb2xvcjogcmdiKDEyOSwgMTI5LCAxMjkpO1xyXG5cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgcGFkZGluZzogMTBweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLnFuYS1pdGVtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcbiAgcGFkZGluZzogMjVweDtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjNzO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5xbmEtaXRlbSB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxufVxuLnFuYS1pdGVtIC5xdWVzdGlvbi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4ucW5hLWl0ZW0gLnF1ZXN0aW9uLWNvbnRhaW5lciAucXVlc3Rpb24tbWFyayB7XG4gIHdpZHRoOiAyM3B4O1xuICBoZWlnaHQ6IDMzcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChzcmMvYXNzZXRzL2ltZy9xdWVzdGlvbi1tYXJrLnBuZyk7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICBtYXJnaW4tbGVmdDogNDBweDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnFuYS1pdGVtIC5xdWVzdGlvbi1jb250YWluZXIgLnF1ZXN0aW9uLW1hcmsge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxufVxuLnFuYS1pdGVtIC5xdWVzdGlvbi1jb250YWluZXIgLnF1ZXN0aW9uLXRleHQge1xuICBmbGV4OiAxIDEgMzAwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC1mYW1pbHk6IFwiaGVlYm9cIjtcbiAgY29sb3I6ICM4MTgxODE7XG59XG4ucW5hLWl0ZW0gLnF1ZXN0aW9uLWNvbnRhaW5lciAucXVlc3Rpb24tdGV4dC5mb250LWJvbGQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5xbmEtaXRlbSAucXVlc3Rpb24tY29udGFpbmVyIC5xdWVzdGlvbi1jb2xsYXBzZS1idG4ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZsZXg6IDAgMCAxNjBweDtcbiAgYm9yZGVyLXdpZHRoOiAycHg7XG4gIGJvcmRlci1jb2xvcjogIzAwYTA5OTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgaGVpZ2h0OiA1NXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnFuYS1pdGVtIC5xdWVzdGlvbi1jb250YWluZXIgLnF1ZXN0aW9uLWNvbGxhcHNlLWJ0biB7XG4gICAgZmxleDogMCAwIDE0MHB4O1xuICAgIGhlaWdodDogNDVweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG59XG4ucW5hLWl0ZW0gLnF1ZXN0aW9uLWNvbnRhaW5lciAucXVlc3Rpb24tY29sbGFwc2UtYnRuIC5xdWVzdGlvbi1jb2xsYXBzZS1idG4tdGV4dCB7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgZm9udC1mYW1pbHk6IFwiYXJiZWxcIjtcbiAgY29sb3I6ICMwMGEwOTk7XG4gIGxldHRlci1zcGFjaW5nOiA0cHg7XG4gIG1hcmdpbi1sZWZ0OiAxNHB4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAucW5hLWl0ZW0gLnF1ZXN0aW9uLWNvbnRhaW5lciAucXVlc3Rpb24tY29sbGFwc2UtYnRuIC5xdWVzdGlvbi1jb2xsYXBzZS1idG4tdGV4dCB7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICB9XG59XG4ucW5hLWl0ZW0gLnF1ZXN0aW9uLWNvbnRhaW5lciAucXVlc3Rpb24tY29sbGFwc2UtYnRuIC5mYS1hbmdsZS1kb3VibGUtZG93biB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICMwMGEwOTk7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5xbmEtaXRlbSAucXVlc3Rpb24tY29udGFpbmVyIC5xdWVzdGlvbi1jb2xsYXBzZS1idG4gLmZhLWFuZ2xlLWRvdWJsZS1kb3duIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnFuYS1pdGVtIC5xdWVzdGlvbi1jb250YWluZXIge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG59XG4ucW5hLWl0ZW0ub3BlbiB7XG4gIGJveC1zaGFkb3c6IDQuNXB4IDUuMzYycHggMTBweCAwcHggcmdiYSg0LCAyNiwgNTUsIDAuMSk7XG59XG4ucW5hLWl0ZW0ub3BlbiAucXVlc3Rpb24tY29udGFpbmVyIC5xdWVzdGlvbi1jb2xsYXBzZS1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhMDk5O1xufVxuLnFuYS1pdGVtLm9wZW4gLnF1ZXN0aW9uLWNvbnRhaW5lciAucXVlc3Rpb24tY29sbGFwc2UtYnRuIC5xdWVzdGlvbi1jb2xsYXBzZS1idG4tdGV4dCB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5xbmEtaXRlbS5vcGVuIC5xdWVzdGlvbi1jb250YWluZXIgLnF1ZXN0aW9uLWNvbGxhcHNlLWJ0biAuZmEtYW5nbGUtZG91YmxlLXVwIHtcbiAgbWFyZ2luLXJpZ2h0OiAxOHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnFuYS1pdGVtLm9wZW4gLnF1ZXN0aW9uLWNvbnRhaW5lciAucXVlc3Rpb24tY29sbGFwc2UtYnRuIC5mYS1hbmdsZS1kb3VibGUtdXAge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxufVxuLnFuYS1pdGVtIC5xbmEtaWNvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5xbmEtaXRlbSAuYW5zd2VyLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDEwcHggNjVweCAyNXB4IDI5MHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtZmFtaWx5OiBcImhlZWJvXCI7XG4gIGNvbG9yOiAjODE4MTgxO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAucW5hLWl0ZW0gLmFuc3dlci1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QnaItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-qna-item',
          templateUrl: './qna-item.component.html',
          styleUrls: ['./qna-item.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]
        }];
      }, {
        qnaItem: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/qna/qna-list/qna-list.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/qna/qna-list/qna-list.component.ts ***!
    \****************************************************/

  /*! exports provided: QnaListComponent */

  /***/
  function srcAppQnaQnaListQnaListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QnaListComponent", function () {
      return QnaListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    function QnaListComponent_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-qna-item", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var qnaItem_r260 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("qnaItem", qnaItem_r260);
      }
    }

    var QnaListComponent = function QnaListComponent() {
      _classCallCheck(this, QnaListComponent);
    };

    QnaListComponent.ɵfac = function QnaListComponent_Factory(t) {
      return new (t || QnaListComponent)();
    };

    QnaListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: QnaListComponent,
      selectors: [["app-qna-list"]],
      inputs: {
        qnaList: "qnaList"
      },
      decls: 2,
      vars: 1,
      consts: [[1, "qna-list-container"], [4, "ngFor", "ngForOf"], [1, "qna-item-container"], [3, "qnaItem"]],
      template: function QnaListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, QnaListComponent_ng_container_1_Template, 3, 1, "ng-container", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.qnaList);
        }
      },
      styles: [".qna-list-container[_ngcontent-%COMP%]   .qna-item-container[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n@media only screen and (max-width: 768px) {\n  .qna-list-container[_ngcontent-%COMP%]   .qna-item-container[_ngcontent-%COMP%] {\n    margin-left: 30px;\n    margin-right: 30px;\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcW5hL3FuYS1saXN0L0M6XFxVc2Vyc1xcVGVoaWxhXFxEZXNrdG9wXFxnb29kLXByb2plY3RcXG91cmJyb3RoZXJzLW91cmJyb3RoZXJzXFxvdXItYnJvdGhlcnMtd2ViL3NyY1xcYXBwXFxxbmFcXHFuYS1saXN0XFxxbmEtbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcW5hL3FuYS1saXN0L3FuYS1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsbUJBQUE7QUNBSjtBREVJO0VBSEY7SUFJSSxpQkFBQTtJQUNBLGtCQUFBO0lBQ0Esa0JBQUE7RUNDSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcW5hL3FuYS1saXN0L3FuYS1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnFuYS1saXN0LWNvbnRhaW5lciB7XHJcbiAgLnFuYS1pdGVtLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG5cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIucW5hLWxpc3QtY29udGFpbmVyIC5xbmEtaXRlbS1jb250YWluZXIge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAucW5hLWxpc3QtY29udGFpbmVyIC5xbmEtaXRlbS1jb250YWluZXIge1xuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMzBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QnaListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-qna-list',
          templateUrl: './qna-list.component.html',
          styleUrls: ['./qna-list.component.scss']
        }]
      }], null, {
        qnaList: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/qna/qna.module.ts":
  /*!***********************************!*\
    !*** ./src/app/qna/qna.module.ts ***!
    \***********************************/

  /*! exports provided: QnaModule */

  /***/
  function srcAppQnaQnaModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QnaModule", function () {
      return QnaModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _qna_list_qna_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./qna-list/qna-list.component */
    "./src/app/qna/qna-list/qna-list.component.ts");
    /* harmony import */


    var _qna_list_qna_item_qna_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./qna-list/qna-item/qna-item.component */
    "./src/app/qna/qna-list/qna-item/qna-item.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var QnaModule = function QnaModule() {
      _classCallCheck(this, QnaModule);
    };

    QnaModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: QnaModule
    });
    QnaModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function QnaModule_Factory(t) {
        return new (t || QnaModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](QnaModule, {
        declarations: [_qna_list_qna_list_component__WEBPACK_IMPORTED_MODULE_1__["QnaListComponent"], _qna_list_qna_item_qna_item_component__WEBPACK_IMPORTED_MODULE_2__["QnaItemComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
        exports: [_qna_list_qna_list_component__WEBPACK_IMPORTED_MODULE_1__["QnaListComponent"], _qna_list_qna_item_qna_item_component__WEBPACK_IMPORTED_MODULE_2__["QnaItemComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QnaModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_qna_list_qna_list_component__WEBPACK_IMPORTED_MODULE_1__["QnaListComponent"], _qna_list_qna_item_qna_item_component__WEBPACK_IMPORTED_MODULE_2__["QnaItemComponent"]],
          exports: [_qna_list_qna_list_component__WEBPACK_IMPORTED_MODULE_1__["QnaListComponent"], _qna_list_qna_item_qna_item_component__WEBPACK_IMPORTED_MODULE_2__["QnaItemComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]]
        }]
      }], null, null);
    })();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetComponentScope"](_qna_list_qna_list_component__WEBPACK_IMPORTED_MODULE_1__["QnaListComponent"], [_qna_list_qna_list_component__WEBPACK_IMPORTED_MODULE_1__["QnaListComponent"], _qna_list_qna_item_qna_item_component__WEBPACK_IMPORTED_MODULE_2__["QnaItemComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgPluralCase"]], [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["KeyValuePipe"]]);
    /***/

  }
}]);
//# sourceMappingURL=qna-page-qna-page-module-es5.js.map