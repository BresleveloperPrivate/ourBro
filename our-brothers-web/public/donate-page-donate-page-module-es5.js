function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["donate-page-donate-page-module"], {
  /***/
  "./src/app/donate/page/donate-page.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/donate/page/donate-page.component.ts ***!
    \******************************************************/

  /*! exports provided: DonatePageComponent */

  /***/
  function srcAppDonatePageDonatePageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DonatePageComponent", function () {
      return DonatePageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shared/services/auth.service */
    "./src/app/shared/services/auth.service.ts");
    /* harmony import */


    var _shared_services_analytics_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/services/analytics.service */
    "./src/app/shared/services/analytics.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _shared_services_donation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../shared/services/donation.service */
    "./src/app/shared/services/donation.service.ts");
    /* harmony import */


    var src_app_shared_services_utils_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/services/utils.service */
    "./src/app/shared/services/utils.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function DonatePageComponent_a_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](1, 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r269 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r269);
      }
    }

    function DonatePageComponent_div_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](1, 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r269 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r269);
      }
    }

    function DonatePageComponent_ng_template_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var DonatePageComponent = /*#__PURE__*/function () {
      function DonatePageComponent(authService, analyticsService, toastr, donationService, fb, utilsService) {
        _classCallCheck(this, DonatePageComponent);

        this.authService = authService;
        this.analyticsService = analyticsService;
        this.toastr = toastr;
        this.donationService = donationService;
        this.fb = fb;
        this.utilsService = utilsService;
        this.loading = true;
        this.submit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.formInvalid = false;
      }

      _createClass(DonatePageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.authService.user.subscribe(function (user) {
            _this.loading = false;
            _this.user = user;
          });
          this.form = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(30), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(this.utilsService.namePattern)]],
            phoneNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(this.utilsService.phonePattern)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            amount: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1)]],
            country: [],
            city: [],
            street: []
          });
          this.form.valueChanges.subscribe(function () {
            _this.formInvalid = false;
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          if (this.form.valid) {
            var parsedForm = {
              name: this.name.value,
              email: this.email.value,
              phoneNumber: this.utilsService.toInternationalPhoneNumber(this.phoneNumber.value.replace(/-/g, '')),
              country: this.country.value,
              city: this.city.value,
              street: this.street.value,
              amount: +this.amount.value
            };
            this.submit.emit(parsedForm);
            this.donationService.creditCardDonation(parsedForm);
            this.form.reset();
          } else {
            this.formInvalid = true;
            this.form.markAllAsTouched();
          }
        }
      }, {
        key: "onCreateDonation",
        value: function onCreateDonation(donation) {
          this.analyticsService.logEvent('PayPalCreatingDonation', {
            ammout: donation.amount
          });
        }
      }, {
        key: "onApprove",
        value: function onApprove(donation) {
          var _this2 = this;

          var _a;

          var userDonation = Object.assign(Object.assign({}, donation), {
            userId: (_a = this.user) === null || _a === void 0 ? void 0 : _a.id
          });
          this.donationService.captureDonation(userDonation).subscribe(function () {
            _this2.analyticsService.logEvent('PayPalCaptureDonationSuccess', {
              donation: userDonation
            });

            _this2.toastr.success('תודה רבה, קיבלנו את תרומתך בהצלחה');
          }, function (error) {
            _this2.analyticsService.logEvent('PayPalCaptureDonationFailed', {
              donation: userDonation,
              error: error
            });

            console.error(error);

            _this2.toastr.error('אירעה שגיאה');
          });
        }
      }, {
        key: "onCancel",
        value: function onCancel(data) {
          this.analyticsService.logEvent('PayPalDonationCanceled', data);
          console.warn(data);
        }
      }, {
        key: "onError",
        value: function onError(error) {
          this.analyticsService.logEvent('PayPalDonationFailed', {
            error: error.toString()
          });
          console.error(error);
          this.toastr.error('אירעה שגיאה');
        }
      }, {
        key: "name",
        get: function get() {
          return this.form.get('name');
        }
      }, {
        key: "phoneNumber",
        get: function get() {
          return this.form.get('phoneNumber');
        }
      }, {
        key: "email",
        get: function get() {
          return this.form.get('email');
        }
      }, {
        key: "country",
        get: function get() {
          return this.form.get('country');
        }
      }, {
        key: "city",
        get: function get() {
          return this.form.get('city');
        }
      }, {
        key: "street",
        get: function get() {
          return this.form.get('street');
        }
      }, {
        key: "amount",
        get: function get() {
          return this.form.get('amount');
        }
      }]);

      return DonatePageComponent;
    }();

    DonatePageComponent.ɵfac = function DonatePageComponent_Factory(t) {
      return new (t || DonatePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_analytics_service__WEBPACK_IMPORTED_MODULE_3__["AnalyticsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_donation_service__WEBPACK_IMPORTED_MODULE_5__["DonationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_utils_service__WEBPACK_IMPORTED_MODULE_6__["UtilsService"]));
    };

    DonatePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DonatePageComponent,
      selectors: [["app-donate-page"]],
      outputs: {
        submit: "submit"
      },
      decls: 36,
      vars: 2,
      consts: [["src", "../../../assets/img/aboutHeader.jpg", 1, "image-header"], [1, "container", "donate-container"], [1, "site-divider"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "small-heading"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "medium-heading"], [1, "payments-title"], ["href", "https://www.jgive.com/new/he/ils/external/charity-organizations/2278", "target", "_blank", 1, "jgive-button"], ["src", "../../../assets/img/jgive-logo.svg", "alt", "", 1, "jgive-logo"], ["href", "https://pb-idb-prod-web.payboxapp.com/?v=donation&donationId=41&_branch_match_id=694082758312467552#/", "target", "_blank", 4, "ngIf"], [4, "ngIf"], ["payboxLogo", ""], [1, "alternative-donate"], [1, "instructions"], [1, "notes"], ["href", "../../../assets/docs/\u05EA\u05E7\u05E0\u05D5\u05DF \u05D0\u05EA\u05E8.pdf", "target", "_blank", 1, "site-link", "policy-link"], ["href", "https://pb-idb-prod-web.payboxapp.com/?v=donation&donationId=41&_branch_match_id=694082758312467552#/", "target", "_blank"], [3, "ngTemplateOutlet"], [1, "paybox-button"], ["src", "../../../assets/img/paybox.png", "alt", "", 1, "paybox-logo"]],
      template: function DonatePageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \u05EA\u05DE\u05D9\u05DB\u05D4 \u05D1\u05E2\u05DE\u05D5\u05EA\u05D4 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \u05D0\u05D9 \u05D0\u05E4\u05E9\u05E8 \u05DC\u05DB\u05DE\u05EA \u05D6\u05D9\u05DB\u05E8\u05D5\u05DF \u05DC\u05EA\u05E8\u05D5\u05DE\u05D4 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \u05D0\u05D1\u05DC \u05DB\u05DC \u05EA\u05E8\u05D5\u05DE\u05D4 \u05EA\u05D0\u05E4\u05E9\u05E8 \u05DC\u05D6\u05DB\u05D5\u05E8 \u05D0\u05EA \u05D4\u05D0\u05D7\u05D9\u05DD \u05E9\u05DC\u05E0\u05D5 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \u05E0\u05D9\u05EA\u05DF \u05DC\u05EA\u05E8\u05D5\u05DD \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " \u05E0\u05D9\u05EA\u05DF \u05DC\u05EA\u05E8\u05D5\u05DD \u05D1\u05D0\u05E4\u05DC\u05D9\u05E7\u05E6\u05D9\u05D9\u05D4 \u05D1\u05E0\u05D9\u05D9\u05D3: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, DonatePageComponent_a_16_Template, 2, 1, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, DonatePageComponent_div_17_Template, 2, 1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, DonatePageComponent_ng_template_18_Template, 2, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " \u05E0\u05D9\u05EA\u05DF \u05D2\u05DD \u05DC\u05D4\u05E2\u05D1\u05D9\u05E8 \u05DC\u05D7\u05E9\u05D1\u05D5\u05E0\u05E0\u05D5 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " \u05D1\u05D1\u05E0\u05E7 \u05D4\u05E4\u05D5\u05E2\u05DC\u05D9\u05DD, \u05E1\u05E0\u05D9\u05E3 538 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " \u05DE\u05E1' \u05D7\u05E9\u05D1\u05D5\u05DF 547-170 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " \u05D4\u05EA\u05E8\u05D5\u05DE\u05D4 \u05DE\u05D5\u05DB\u05E8\u05EA \u05DC\u05E6\u05E8\u05DB\u05D9 \u05DE\u05E1 \u05DC\u05E4\u05D9 \u05E1\u05E2\u05D9\u05E3 46 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "*\u05D4\u05EA\u05E8\u05D5\u05DE\u05D4 \u05D1\u05D4\u05EA\u05D0\u05DD \u05DC-");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\u05EA\u05E7\u05E0\u05D5\u05DF \u05D4\u05D0\u05EA\u05E8");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.utilsService.isMobile());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.utilsService.isMobile());
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgTemplateOutlet"]],
      styles: [".donate-container[_ngcontent-%COMP%] {\n  margin-bottom: 50px;\n  text-align: center;\n}\n\n.paypal-button-container[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.paypal-button-container[_ngcontent-%COMP%]   .paragraph[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.payments-title[_ngcontent-%COMP%] {\n  font-family: \"arbel\";\n}\n\n.paybox-button[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 5px;\n  margin: 20px auto;\n  border: 1px solid #22a7f0;\n}\n\n.paybox-button[_ngcontent-%COMP%]   .paybox-logo[_ngcontent-%COMP%] {\n  height: 40px;\n  vertical-align: middle;\n}\n\n.jgive-button[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 5px;\n  margin: 20px auto;\n  border: 1px solid #22a7f0;\n}\n\n.jgive-button[_ngcontent-%COMP%]   .jgive-logo[_ngcontent-%COMP%] {\n  height: 40px;\n  vertical-align: middle;\n}\n\n.payment-info-page[_ngcontent-%COMP%] {\n  align-content: center;\n  width: 100%;\n}\n\n.payment-amounts-options-container[_ngcontent-%COMP%] {\n  background-color: #00a099;\n  font-family: \"arbel\";\n}\n\n.payment-amounts-options-container[_ngcontent-%COMP%]   .payment-amount[_ngcontent-%COMP%] {\n  font-size: 25px;\n  font-family: \"arbel\";\n  color: white;\n}\n\n.payment-amounts-options-container[_ngcontent-%COMP%]   .payment-amount-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: right;\n  margin-bottom: 3em;\n  font-family: \"arbel\";\n}\n\n@media only screen and (max-width: 768px) {\n  .payment-amounts-options-container[_ngcontent-%COMP%]   .payment-amount-container[_ngcontent-%COMP%] {\n    padding: 0;\n    width: calc(100% - 10px);\n  }\n}\n\n.payment-amounts-options-container[_ngcontent-%COMP%]   .payment-amount-container[_ngcontent-%COMP%]   .payment-amount-option[_ngcontent-%COMP%] {\n  width: 40%;\n}\n\n.payment-amounts-options-container[_ngcontent-%COMP%]   .payment-amount-container[_ngcontent-%COMP%]   .payment-amount-option[_ngcontent-%COMP%]   .payment-amount-radio[_ngcontent-%COMP%] {\n  font-family: \"arbel\";\n  margin: 0 10px;\n  color: #00a099;\n  border: 0px;\n  width: 5%;\n  height: 1.3em;\n}\n\n.payment-amounts-options-container[_ngcontent-%COMP%]   .payment-amount-container[_ngcontent-%COMP%]   .payment-amount-option[_ngcontent-%COMP%]   .payment-amount-radio-label[_ngcontent-%COMP%] {\n  font-family: \"arbel\";\n  margin: 5px 10px;\n  font-size: 30px;\n  color: white;\n}\n\n.payment-amounts-options-container[_ngcontent-%COMP%]   .payment-amount-container[_ngcontent-%COMP%]   .payment-amount-option[_ngcontent-%COMP%]   .label-for-others[_ngcontent-%COMP%] {\n  font-family: \"arbel\";\n  margin: 20px 5px 0 5px;\n  font-size: 30px;\n  color: white;\n}\n\n.payment-amounts-options-container[_ngcontent-%COMP%]   .payment-amount-container[_ngcontent-%COMP%]   .payment-amount-option[_ngcontent-%COMP%]   .other-amout-text-input[_ngcontent-%COMP%] {\n  font-size: 25px;\n  border-radius: 10px;\n}\n\n.payment-amounts-options-container[_ngcontent-%COMP%]   .payment-amount-container[_ngcontent-%COMP%]   .payment-amount-option[_ngcontent-%COMP%]   .new-sheckel[_ngcontent-%COMP%] {\n  font-family: \"arbel\";\n  font-size: 40px;\n  color: white;\n  margin: 20px 5px 0 5px;\n}\n\n.right-position[_ngcontent-%COMP%] {\n  text-align: right;\n  font-size: 1.5em;\n  width: 100%;\n}\n\n.contact-form-fields[_ngcontent-%COMP%] {\n  max-width: 800px;\n  display: flex;\n  justify-content: right;\n  flex-wrap: wrap;\n}\n\n@media only screen and (max-width: 768px) {\n  .contact-form-fields[_ngcontent-%COMP%] {\n    padding: 0;\n    width: calc(100% - 10px);\n  }\n}\n\n.contact-form-fields[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%] {\n  margin-left: 15px;\n  margin-right: 15px;\n  margin-bottom: 25px;\n  width: 27%;\n}\n\n@media only screen and (max-width: 768px) {\n  .contact-form-fields[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%] {\n    width: 45%;\n    margin-left: 7px;\n    margin-right: 7px;\n    margin-bottom: 14px;\n  }\n}\n\n@media only screen and (max-width: 768px) {\n  .contact-form-fields[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%] {\n    width: calc(100% - 20px);\n  }\n}\n\n.terms-of-use[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.payment-send-button[_ngcontent-%COMP%] {\n  width: 250px;\n  height: 40px;\n  font-size: 25px;\n  font-family: \"arbel\";\n  margin-top: 15px;\n  background-color: #00a099;\n}\n\n@media only screen and (max-width: 768px) {\n  .payment-send-button[_ngcontent-%COMP%] {\n    width: 200px;\n    height: 45px;\n    font-size: 25px;\n    margin-top: 7px;\n  }\n}\n\n.payment-method[_ngcontent-%COMP%] {\n  text-align: right;\n  font-family: \"arbel\";\n  color: #999999;\n}\n\n.payment-method-radio[_ngcontent-%COMP%] {\n  font-family: \"arbel\";\n  margin: 0 10px;\n  color: #999999;\n}\n\n.payment-method-radio-label[_ngcontent-%COMP%] {\n  font-family: \"arbel\";\n  margin: 0 5px 0 15px;\n  color: #999999;\n}\n\n.br-payment[_ngcontent-%COMP%] {\n  color: #999999;\n}\n\n.alternative-donate[_ngcontent-%COMP%] {\n  padding: 30px;\n  text-align: center;\n  color: white;\n  background-color: #00a099;\n  font-family: \"arbel\";\n}\n\n.alternative-donate[_ngcontent-%COMP%]   .instructions[_ngcontent-%COMP%] {\n  font-size: 25px;\n}\n\n.alternative-donate[_ngcontent-%COMP%]   .notes[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  font-size: 18px;\n}\n\n.policy-link[_ngcontent-%COMP%] {\n  color: #00403c;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9uYXRlL3BhZ2UvQzpcXFVzZXJzXFxUZWhpbGFcXERlc2t0b3BcXGdvb2QtcHJvamVjdFxcb3VyYnJvdGhlcnMtb3VyYnJvdGhlcnNcXG91ci1icm90aGVycy13ZWIvc3JjXFxhcHBcXGRvbmF0ZVxccGFnZVxcZG9uYXRlLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2RvbmF0ZS9wYWdlL2RvbmF0ZS1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7QUNDRjs7QURDRTtFQUNFLG1CQUFBO0FDQ0o7O0FER0E7RUFDRSxvQkFBQTtBQ0FGOztBREdBO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQ0FGOztBREVFO0VBQ0UsWUFBQTtFQUNBLHNCQUFBO0FDQUo7O0FESUE7RUFDRSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FDREY7O0FER0U7RUFDRSxZQUFBO0VBQ0Esc0JBQUE7QUNESjs7QURLQTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtBQ0ZGOztBREtBO0VBQ0UseUJBQUE7RUFDQSxvQkFBQTtBQ0ZGOztBRElFO0VBQ0UsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtBQ0ZKOztBREtFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FDSEo7O0FESUk7RUFORjtJQU9JLFVBQUE7SUFDQSx3QkFBQTtFQ0RKO0FBQ0Y7O0FER0k7RUFDRSxVQUFBO0FDRE47O0FERU07RUFDRSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0FDQVI7O0FER007RUFDRSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNEUjs7QURJTTtFQUNFLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0ZSOztBREtNO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FDSFI7O0FETU07RUFDRSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUNKUjs7QURVQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDUEY7O0FEVUE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7QUNQRjs7QURTRTtFQU5GO0lBT0ksVUFBQTtJQUNBLHdCQUFBO0VDTkY7QUFDRjs7QURRRTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUNOSjs7QURRSTtFQU5GO0lBT0ksVUFBQTtJQUNBLGdCQUFBO0lBQ0EsaUJBQUE7SUFDQSxtQkFBQTtFQ0xKO0FBQ0Y7O0FEU0k7RUFERjtJQUVJLHdCQUFBO0VDTko7QUFDRjs7QURVQTtFQUNFLFlBQUE7QUNQRjs7QURVQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQ1BGOztBRFNFO0VBUkY7SUFTSSxZQUFBO0lBQ0EsWUFBQTtJQUNBLGVBQUE7SUFDQSxlQUFBO0VDTkY7QUFDRjs7QURTQTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0FDTkY7O0FEU0E7RUFDRSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDTkY7O0FEU0E7RUFDRSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtBQ05GOztBRFNBO0VBQ0UsY0FBQTtBQ05GOztBRFNBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7QUNORjs7QURRRTtFQUNFLGVBQUE7QUNOSjs7QURTRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQ1BKOztBRFdBO0VBQ0UsY0FBQTtBQ1JGIiwiZmlsZSI6InNyYy9hcHAvZG9uYXRlL3BhZ2UvZG9uYXRlLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZG9uYXRlLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wYXlwYWwtYnV0dG9uLWNvbnRhaW5lciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAucGFyYWdyYXBoIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4ucGF5bWVudHMtdGl0bGUge1xyXG4gIGZvbnQtZmFtaWx5OiAnYXJiZWwnO1xyXG59XHJcblxyXG4ucGF5Ym94LWJ1dHRvbiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBtYXJnaW46IDIwcHggYXV0bztcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMjJhN2YwO1xyXG5cclxuICAucGF5Ym94LWxvZ28ge1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICB9XHJcbn1cclxuXHJcbi5qZ2l2ZS1idXR0b24ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzIyYTdmMDtcclxuXHJcbiAgLmpnaXZlLWxvZ28ge1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICB9XHJcbn1cclxuXHJcbi5wYXltZW50LWluZm8tcGFnZSB7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ucGF5bWVudC1hbW91bnRzLW9wdGlvbnMtY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhMDk5O1xyXG4gIGZvbnQtZmFtaWx5OiAnYXJiZWwnO1xyXG5cclxuICAucGF5bWVudC1hbW91bnQge1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdhcmJlbCc7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5cclxuICAucGF5bWVudC1hbW91bnQtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiByaWdodDtcclxuICAgIG1hcmdpbi1ib3R0b206IDNlbTtcclxuICAgIGZvbnQtZmFtaWx5OiAnYXJiZWwnO1xyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gMTBweCk7XHJcbiAgICB9XHJcblxyXG4gICAgLnBheW1lbnQtYW1vdW50LW9wdGlvbiB7XHJcbiAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICAgIC5wYXltZW50LWFtb3VudC1yYWRpbyB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdhcmJlbCc7XHJcbiAgICAgICAgbWFyZ2luOiAwIDEwcHg7XHJcbiAgICAgICAgY29sb3I6ICMwMGEwOTk7XHJcbiAgICAgICAgYm9yZGVyOiAwcHg7XHJcbiAgICAgICAgd2lkdGg6IDUlO1xyXG4gICAgICAgIGhlaWdodDogMS4zZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5wYXltZW50LWFtb3VudC1yYWRpby1sYWJlbCB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdhcmJlbCc7XHJcbiAgICAgICAgbWFyZ2luOiA1cHggMTBweDtcclxuICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubGFiZWwtZm9yLW90aGVycyB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdhcmJlbCc7XHJcbiAgICAgICAgbWFyZ2luOiAyMHB4IDVweCAwIDVweDtcclxuICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAub3RoZXItYW1vdXQtdGV4dC1pbnB1dCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5uZXctc2hlY2tlbCB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdhcmJlbCc7XHJcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBtYXJnaW46IDIwcHggNXB4IDAgNXB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ucmlnaHQtcG9zaXRpb24ge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jb250YWN0LWZvcm0tZmllbGRzIHtcclxuICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiByaWdodDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMTBweCk7XHJcbiAgfVxyXG5cclxuICAuZm9ybS1maWVsZCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICB3aWR0aDogMjclO1xyXG5cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgd2lkdGg6IDQ1JTtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDdweDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiA3cHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDE0cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYm9keSB7XHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi50ZXJtcy1vZi11c2Uge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnBheW1lbnQtc2VuZC1idXR0b24ge1xyXG4gIHdpZHRoOiAyNTBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnYXJiZWwnO1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYTA5OTtcclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogN3B4O1xyXG4gIH1cclxufVxyXG5cclxuLnBheW1lbnQtbWV0aG9kIHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBmb250LWZhbWlseTogJ2FyYmVsJztcclxuICBjb2xvcjogIzk5OTk5OTtcclxufVxyXG5cclxuLnBheW1lbnQtbWV0aG9kLXJhZGlvIHtcclxuICBmb250LWZhbWlseTogJ2FyYmVsJztcclxuICBtYXJnaW46IDAgMTBweDtcclxuICBjb2xvcjogIzk5OTk5OTtcclxufVxyXG5cclxuLnBheW1lbnQtbWV0aG9kLXJhZGlvLWxhYmVsIHtcclxuICBmb250LWZhbWlseTogJ2FyYmVsJztcclxuICBtYXJnaW46IDAgNXB4IDAgMTVweDtcclxuICBjb2xvcjogIzk5OTk5OTtcclxufVxyXG5cclxuLmJyLXBheW1lbnQge1xyXG4gIGNvbG9yOiAjOTk5OTk5O1xyXG59XHJcblxyXG4uYWx0ZXJuYXRpdmUtZG9uYXRlIHtcclxuICBwYWRkaW5nOiAzMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYTA5OTtcclxuICBmb250LWZhbWlseTogJ2FyYmVsJztcclxuXHJcbiAgLmluc3RydWN0aW9ucyB7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgfVxyXG5cclxuICAubm90ZXMge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcbn1cclxuXHJcbi5wb2xpY3ktbGluayB7XHJcbiAgY29sb3I6ICMwMDQwM2M7XHJcbn1cclxuIiwiLmRvbmF0ZS1jb250YWluZXIge1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5wYXlwYWwtYnV0dG9uLWNvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5wYXlwYWwtYnV0dG9uLWNvbnRhaW5lciAucGFyYWdyYXBoIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnBheW1lbnRzLXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiYXJiZWxcIjtcbn1cblxuLnBheWJveC1idXR0b24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDVweDtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG4gIGJvcmRlcjogMXB4IHNvbGlkICMyMmE3ZjA7XG59XG4ucGF5Ym94LWJ1dHRvbiAucGF5Ym94LWxvZ28ge1xuICBoZWlnaHQ6IDQwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5qZ2l2ZS1idXR0b24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDVweDtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG4gIGJvcmRlcjogMXB4IHNvbGlkICMyMmE3ZjA7XG59XG4uamdpdmUtYnV0dG9uIC5qZ2l2ZS1sb2dvIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4ucGF5bWVudC1pbmZvLXBhZ2Uge1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucGF5bWVudC1hbW91bnRzLW9wdGlvbnMtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYTA5OTtcbiAgZm9udC1mYW1pbHk6IFwiYXJiZWxcIjtcbn1cbi5wYXltZW50LWFtb3VudHMtb3B0aW9ucy1jb250YWluZXIgLnBheW1lbnQtYW1vdW50IHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBmb250LWZhbWlseTogXCJhcmJlbFwiO1xuICBjb2xvcjogd2hpdGU7XG59XG4ucGF5bWVudC1hbW91bnRzLW9wdGlvbnMtY29udGFpbmVyIC5wYXltZW50LWFtb3VudC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xuICBtYXJnaW4tYm90dG9tOiAzZW07XG4gIGZvbnQtZmFtaWx5OiBcImFyYmVsXCI7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5wYXltZW50LWFtb3VudHMtb3B0aW9ucy1jb250YWluZXIgLnBheW1lbnQtYW1vdW50LWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMDtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMTBweCk7XG4gIH1cbn1cbi5wYXltZW50LWFtb3VudHMtb3B0aW9ucy1jb250YWluZXIgLnBheW1lbnQtYW1vdW50LWNvbnRhaW5lciAucGF5bWVudC1hbW91bnQtb3B0aW9uIHtcbiAgd2lkdGg6IDQwJTtcbn1cbi5wYXltZW50LWFtb3VudHMtb3B0aW9ucy1jb250YWluZXIgLnBheW1lbnQtYW1vdW50LWNvbnRhaW5lciAucGF5bWVudC1hbW91bnQtb3B0aW9uIC5wYXltZW50LWFtb3VudC1yYWRpbyB7XG4gIGZvbnQtZmFtaWx5OiBcImFyYmVsXCI7XG4gIG1hcmdpbjogMCAxMHB4O1xuICBjb2xvcjogIzAwYTA5OTtcbiAgYm9yZGVyOiAwcHg7XG4gIHdpZHRoOiA1JTtcbiAgaGVpZ2h0OiAxLjNlbTtcbn1cbi5wYXltZW50LWFtb3VudHMtb3B0aW9ucy1jb250YWluZXIgLnBheW1lbnQtYW1vdW50LWNvbnRhaW5lciAucGF5bWVudC1hbW91bnQtb3B0aW9uIC5wYXltZW50LWFtb3VudC1yYWRpby1sYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiBcImFyYmVsXCI7XG4gIG1hcmdpbjogNXB4IDEwcHg7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLnBheW1lbnQtYW1vdW50cy1vcHRpb25zLWNvbnRhaW5lciAucGF5bWVudC1hbW91bnQtY29udGFpbmVyIC5wYXltZW50LWFtb3VudC1vcHRpb24gLmxhYmVsLWZvci1vdGhlcnMge1xuICBmb250LWZhbWlseTogXCJhcmJlbFwiO1xuICBtYXJnaW46IDIwcHggNXB4IDAgNXB4O1xuICBmb250LXNpemU6IDMwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5wYXltZW50LWFtb3VudHMtb3B0aW9ucy1jb250YWluZXIgLnBheW1lbnQtYW1vdW50LWNvbnRhaW5lciAucGF5bWVudC1hbW91bnQtb3B0aW9uIC5vdGhlci1hbW91dC10ZXh0LWlucHV0IHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLnBheW1lbnQtYW1vdW50cy1vcHRpb25zLWNvbnRhaW5lciAucGF5bWVudC1hbW91bnQtY29udGFpbmVyIC5wYXltZW50LWFtb3VudC1vcHRpb24gLm5ldy1zaGVja2VsIHtcbiAgZm9udC1mYW1pbHk6IFwiYXJiZWxcIjtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbjogMjBweCA1cHggMCA1cHg7XG59XG5cbi5yaWdodC1wb3NpdGlvbiB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LXNpemU6IDEuNWVtO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNvbnRhY3QtZm9ybS1maWVsZHMge1xuICBtYXgtd2lkdGg6IDgwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jb250YWN0LWZvcm0tZmllbGRzIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxMHB4KTtcbiAgfVxufVxuLmNvbnRhY3QtZm9ybS1maWVsZHMgLmZvcm0tZmllbGQge1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICB3aWR0aDogMjclO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuY29udGFjdC1mb3JtLWZpZWxkcyAuZm9ybS1maWVsZCB7XG4gICAgd2lkdGg6IDQ1JTtcbiAgICBtYXJnaW4tbGVmdDogN3B4O1xuICAgIG1hcmdpbi1yaWdodDogN3B4O1xuICAgIG1hcmdpbi1ib3R0b206IDE0cHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmNvbnRhY3QtZm9ybS1maWVsZHMgLmJvZHkge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcbiAgfVxufVxuXG4udGVybXMtb2YtdXNlIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ucGF5bWVudC1zZW5kLWJ1dHRvbiB7XG4gIHdpZHRoOiAyNTBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBmb250LXNpemU6IDI1cHg7XG4gIGZvbnQtZmFtaWx5OiBcImFyYmVsXCI7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGEwOTk7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5wYXltZW50LXNlbmQtYnV0dG9uIHtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiA0NXB4O1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBtYXJnaW4tdG9wOiA3cHg7XG4gIH1cbn1cblxuLnBheW1lbnQtbWV0aG9kIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtZmFtaWx5OiBcImFyYmVsXCI7XG4gIGNvbG9yOiAjOTk5OTk5O1xufVxuXG4ucGF5bWVudC1tZXRob2QtcmFkaW8ge1xuICBmb250LWZhbWlseTogXCJhcmJlbFwiO1xuICBtYXJnaW46IDAgMTBweDtcbiAgY29sb3I6ICM5OTk5OTk7XG59XG5cbi5wYXltZW50LW1ldGhvZC1yYWRpby1sYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiBcImFyYmVsXCI7XG4gIG1hcmdpbjogMCA1cHggMCAxNXB4O1xuICBjb2xvcjogIzk5OTk5OTtcbn1cblxuLmJyLXBheW1lbnQge1xuICBjb2xvcjogIzk5OTk5OTtcbn1cblxuLmFsdGVybmF0aXZlLWRvbmF0ZSB7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhMDk5O1xuICBmb250LWZhbWlseTogXCJhcmJlbFwiO1xufVxuLmFsdGVybmF0aXZlLWRvbmF0ZSAuaW5zdHJ1Y3Rpb25zIHtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuLmFsdGVybmF0aXZlLWRvbmF0ZSAubm90ZXMge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5wb2xpY3ktbGluayB7XG4gIGNvbG9yOiAjMDA0MDNjO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DonatePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-donate-page',
          templateUrl: './donate-page.component.html',
          styleUrls: ['./donate-page.component.scss']
        }]
      }], function () {
        return [{
          type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: _shared_services_analytics_service__WEBPACK_IMPORTED_MODULE_3__["AnalyticsService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
        }, {
          type: _shared_services_donation_service__WEBPACK_IMPORTED_MODULE_5__["DonationService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: src_app_shared_services_utils_service__WEBPACK_IMPORTED_MODULE_6__["UtilsService"]
        }];
      }, {
        submit: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/donate/page/donate-page.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/donate/page/donate-page.module.ts ***!
    \***************************************************/

  /*! exports provided: DonatePageModule */

  /***/
  function srcAppDonatePageDonatePageModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DonatePageModule", function () {
      return DonatePageModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _donate_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./donate-page.component */
    "./src/app/donate/page/donate-page.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var routes = [{
      path: '',
      component: _donate_page_component__WEBPACK_IMPORTED_MODULE_1__["DonatePageComponent"]
    }];

    var DonatePageModule = function DonatePageModule() {
      _classCallCheck(this, DonatePageModule);
    };

    DonatePageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: DonatePageModule
    });
    DonatePageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function DonatePageModule_Factory(t) {
        return new (t || DonatePageModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DonatePageModule, {
        declarations: [_donate_page_component__WEBPACK_IMPORTED_MODULE_1__["DonatePageComponent"]],
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DonatePageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]],
          declarations: [_donate_page_component__WEBPACK_IMPORTED_MODULE_1__["DonatePageComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/donation.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/shared/services/donation.service.ts ***!
    \*****************************************************/

  /*! exports provided: DonationService */

  /***/
  function srcAppSharedServicesDonationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DonationService", function () {
      return DonationService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var DonationService = /*#__PURE__*/function () {
      function DonationService(httpClient) {
        _classCallCheck(this, DonationService);

        this.httpClient = httpClient;
      }

      _createClass(DonationService, [{
        key: "captureDonation",
        value: function captureDonation(donation) {
          return this.httpClient.post('https://europe-west1-our-brothers.cloudfunctions.net/api/donation', donation).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function () {
            return true;
          }));
        }
      }, {
        key: "creditCardDonation",
        value: function creditCardDonation(paymentForm) {}
      }]);

      return DonationService;
    }();

    DonationService.ɵfac = function DonationService_Factory(t) {
      return new (t || DonationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    DonationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DonationService,
      factory: DonationService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DonationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=donate-page-donate-page-module-es5.js.map