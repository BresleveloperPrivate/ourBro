function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contact-page-contact-page-module"], {
  /***/
  "./src/app/contact/page/contact-page.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/contact/page/contact-page.component.ts ***!
    \********************************************************/

  /*! exports provided: ContactPageComponent */

  /***/
  function srcAppContactPageContactPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactPageComponent", function () {
      return ContactPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../shared/services/auth.service */
    "./src/app/shared/services/auth.service.ts");
    /* harmony import */


    var _shared_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shared/services/data.service */
    "./src/app/shared/services/data.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _shared_components_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/components/contact-form/contact-form.component */
    "./src/app/shared/components/contact-form/contact-form.component.ts");

    var ContactPageComponent = /*#__PURE__*/function () {
      function ContactPageComponent(authService, dataService, toastr) {
        _classCallCheck(this, ContactPageComponent);

        this.authService = authService;
        this.dataService = dataService;
        this.toastr = toastr;
        this.postingContact = false;
      }

      _createClass(ContactPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.authService.user.subscribe(function (user) {
            _this.user = user;
          });
        }
      }, {
        key: "onContactSubmit",
        value: function onContactSubmit(form) {
          var _this2 = this;

          var parsedContact = Object.assign(Object.assign({}, form), {
            date: Date.now()
          });
          this.postingContact = true;
          this.dataService.postContact(parsedContact, this.user).then(function () {
            return _this2.toastr.success('שליחת הודעה בוצעה בהצלחה');
          })["catch"](function () {
            return _this2.toastr.error('שליחת הודעה נכשלה');
          })["finally"](function () {
            return _this2.postingContact = false;
          });
        }
      }]);

      return ContactPageComponent;
    }();

    ContactPageComponent.ɵfac = function ContactPageComponent_Factory(t) {
      return new (t || ContactPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]));
    };

    ContactPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContactPageComponent,
      selectors: [["app-contact-page"]],
      decls: 34,
      vars: 2,
      consts: [["src", "../../../assets/img/contactHeader.jpg", "alt", "Meetings Page Header Image", 1, "image-header"], [1, "details"], [1, "medium-heading"], [1, "details-text"], [1, "details-contact-table"], [1, "row"], [1, "col"], ["href", "tel:+972584094624", 1, "site-link"], ["href", "mailto:info@ourbrothers.org", 1, "site-link"], ["href", "https://www.facebook.com/ourbrotherss/", "target", "_blank", 1, "site-link", "decoration"], [1, "division"], ["href", "https://www.instagram.com/ourbrothers2020/", "target", "_blank", 1, "site-link", "decoration"], [1, "contact-form"], [3, "user", "loading", "submit"]],
      template: function ContactPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u05E6\u05E8\u05D5 \u05E7\u05E9\u05E8");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " \u05E0\u05E9\u05DE\u05D7 \u05DC\u05E2\u05D6\u05D5\u05E8 \u05D1\u05DB\u05DC \u05E0\u05D5\u05E9\u05D0. \u05D4\u05E9\u05D0\u05D9\u05E8\u05D5 \u05D4\u05D5\u05D3\u05E2\u05D4 \u05D5\u05D4\u05E6\u05D5\u05D5\u05EA \u05D4\u05E0\u05E4\u05DC\u05D0 \u05E9\u05DC\u05E0\u05D5 \u05D9\u05D7\u05D6\u05D5\u05E8 \u05D0\u05DC\u05D9\u05DB\u05DD ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " \u05D8\u05DC\u05E4\u05D5\u05DF: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " 058-409-4624 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " \u05D0\u05D9\u05DE\u05D9\u05D9\u05DC: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " info@ourbrothers.org ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " \u05E8\u05E9\u05EA\u05D5\u05EA \u05D7\u05D1\u05E8\u05EA\u05D9\u05D5\u05EA: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " \u05E4\u05D9\u05D9\u05E1\u05D1\u05D5\u05E7 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "|");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " \u05D0\u05D9\u05E0\u05E1\u05D8\u05D2\u05E8\u05DD ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\u05E0\u05E9\u05DE\u05D7 \u05DC\u05E9\u05DE\u05D5\u05E2 \u05DE\u05DB\u05DD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "app-contact-form", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function ContactPageComponent_Template_app_contact_form_submit_33_listener($event) {
            return ctx.onContactSubmit($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("user", ctx.user)("loading", ctx.postingContact);
        }
      },
      directives: [_shared_components_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_4__["ContactFormComponent"]],
      styles: [".details[_ngcontent-%COMP%] {\n  width: 60%;\n  margin: auto;\n  margin-bottom: 90px;\n  text-align: right;\n  color: #818181;\n}\n@media only screen and (max-width: 768px) {\n  .details[_ngcontent-%COMP%] {\n    text-align: center;\n    width: 80%;\n    margin-bottom: 20px;\n  }\n}\n@media only screen and (min-width: 768px) {\n  .details[_ngcontent-%COMP%]   .medium-heading[_ngcontent-%COMP%] {\n    text-align: right;\n  }\n}\n.details[_ngcontent-%COMP%]   .details-text[_ngcontent-%COMP%] {\n  text-align: right;\n}\n@media only screen and (max-width: 768px) {\n  .details[_ngcontent-%COMP%]   .details-text[_ngcontent-%COMP%] {\n    text-align: center;\n    margin-bottom: 20px;\n  }\n}\n.details[_ngcontent-%COMP%]   .details-contact-table[_ngcontent-%COMP%] {\n  display: table;\n}\n@media only screen and (max-width: 768px) {\n  .details[_ngcontent-%COMP%]   .details-contact-table[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n}\n.details[_ngcontent-%COMP%]   .details-contact-table[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  display: table-row-group;\n}\n.details[_ngcontent-%COMP%]   .details-contact-table[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n  display: table-cell;\n  padding: 5px 0 5px 25px;\n}\n@media only screen and (max-width: 768px) {\n  .details[_ngcontent-%COMP%]   .details-contact-table[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n    text-align: right;\n    padding: 5px 0 5px 5px;\n  }\n}\n.details[_ngcontent-%COMP%]   .details-contact-table[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .division[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  margin-right: 8px;\n}\n.contact-form[_ngcontent-%COMP%] {\n  padding: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9wYWdlL0M6XFxVc2Vyc1xcVGVoaWxhXFxEZXNrdG9wXFxnb29kLXByb2plY3RcXG91cmJyb3RoZXJzLW91cmJyb3RoZXJzXFxvdXItYnJvdGhlcnMtd2ViL3NyY1xcYXBwXFxjb250YWN0XFxwYWdlXFxjb250YWN0LXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbnRhY3QvcGFnZS9jb250YWN0LXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDQ0Y7QURDRTtFQVBGO0lBUUksa0JBQUE7SUFDQSxVQUFBO0lBQ0EsbUJBQUE7RUNFRjtBQUNGO0FEQ0k7RUFERjtJQUVJLGlCQUFBO0VDRUo7QUFDRjtBRENFO0VBQ0UsaUJBQUE7QUNDSjtBREFJO0VBRkY7SUFHSSxrQkFBQTtJQUNBLG1CQUFBO0VDR0o7QUFDRjtBREFFO0VBQ0UsY0FBQTtBQ0VKO0FEREk7RUFGRjtJQUdJLGVBQUE7RUNJSjtBQUNGO0FESEk7RUFDRSx3QkFBQTtBQ0tOO0FESEk7RUFDRSxtQkFBQTtFQUNBLHVCQUFBO0FDS047QURKTTtFQUhGO0lBSUksaUJBQUE7SUFDQSxzQkFBQTtFQ09OO0FBQ0Y7QURMTTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUNPUjtBRERBO0VBQ0UsYUFBQTtBQ0lGIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdC9wYWdlL2NvbnRhY3QtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZXRhaWxzIHtcclxuICB3aWR0aDogNjAlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBtYXJnaW4tYm90dG9tOiA5MHB4O1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIGNvbG9yOiAjODE4MTgxO1xyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB9XHJcblxyXG4gIC5tZWRpdW0taGVhZGluZyB7XHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmRldGFpbHMtdGV4dCB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmRldGFpbHMtY29udGFjdC10YWJsZSB7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgfVxyXG4gICAgLnJvdyB7XHJcbiAgICAgIGRpc3BsYXk6IHRhYmxlLXJvdy1ncm91cDtcclxuICAgIH1cclxuICAgIC5jb2wge1xyXG4gICAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgICBwYWRkaW5nOiA1cHggMCA1cHggMjVweDtcclxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCAwIDVweCA1cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5kaXZpc2lvbiB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmNvbnRhY3QtZm9ybSB7XHJcbiAgcGFkZGluZzogNTBweDtcclxufVxyXG4iLCIuZGV0YWlscyB7XG4gIHdpZHRoOiA2MCU7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogOTBweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGNvbG9yOiAjODE4MTgxO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuZGV0YWlscyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAuZGV0YWlscyAubWVkaXVtLWhlYWRpbmcge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICB9XG59XG4uZGV0YWlscyAuZGV0YWlscy10ZXh0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5kZXRhaWxzIC5kZXRhaWxzLXRleHQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG59XG4uZGV0YWlscyAuZGV0YWlscy1jb250YWN0LXRhYmxlIHtcbiAgZGlzcGxheTogdGFibGU7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5kZXRhaWxzIC5kZXRhaWxzLWNvbnRhY3QtdGFibGUge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxufVxuLmRldGFpbHMgLmRldGFpbHMtY29udGFjdC10YWJsZSAucm93IHtcbiAgZGlzcGxheTogdGFibGUtcm93LWdyb3VwO1xufVxuLmRldGFpbHMgLmRldGFpbHMtY29udGFjdC10YWJsZSAuY29sIHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgcGFkZGluZzogNXB4IDAgNXB4IDI1cHg7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5kZXRhaWxzIC5kZXRhaWxzLWNvbnRhY3QtdGFibGUgLmNvbCB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgcGFkZGluZzogNXB4IDAgNXB4IDVweDtcbiAgfVxufVxuLmRldGFpbHMgLmRldGFpbHMtY29udGFjdC10YWJsZSAuY29sIC5kaXZpc2lvbiB7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xufVxuXG4uY29udGFjdC1mb3JtIHtcbiAgcGFkZGluZzogNTBweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-contact-page',
          templateUrl: './contact-page.component.html',
          styleUrls: ['./contact-page.component.scss']
        }]
      }], function () {
        return [{
          type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _shared_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/contact/page/contact-page.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/contact/page/contact-page.module.ts ***!
    \*****************************************************/

  /*! exports provided: ContactPageModule */

  /***/
  function srcAppContactPageContactPageModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactPageModule", function () {
      return ContactPageModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _contact_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./contact-page.component */
    "./src/app/contact/page/contact-page.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_components_contact_form_contact_form_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/components/contact-form/contact-form.module */
    "./src/app/shared/components/contact-form/contact-form.module.ts");

    var routes = [{
      path: '',
      component: _contact_page_component__WEBPACK_IMPORTED_MODULE_1__["ContactPageComponent"]
    }];

    var ContactPageModule = function ContactPageModule() {
      _classCallCheck(this, ContactPageModule);
    };

    ContactPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ContactPageModule
    });
    ContactPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ContactPageModule_Factory(t) {
        return new (t || ContactPageModule)();
      },
      imports: [[_shared_components_contact_form_contact_form_module__WEBPACK_IMPORTED_MODULE_3__["ContactFormModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ContactPageModule, {
        declarations: [_contact_page_component__WEBPACK_IMPORTED_MODULE_1__["ContactPageComponent"]],
        imports: [_shared_components_contact_form_contact_form_module__WEBPACK_IMPORTED_MODULE_3__["ContactFormModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_shared_components_contact_form_contact_form_module__WEBPACK_IMPORTED_MODULE_3__["ContactFormModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
          declarations: [_contact_page_component__WEBPACK_IMPORTED_MODULE_1__["ContactPageComponent"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=contact-page-contact-page-module-es5.js.map