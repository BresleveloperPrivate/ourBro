(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~host-page-host-page-module~participate-page-participate-page-module"],{

/***/ "./src/app/shared/components/profile-form/profile-form.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/profile-form/profile-form.component.ts ***!
  \**************************************************************************/
/*! exports provided: ProfileFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileFormComponent", function() { return ProfileFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/utils.service */ "./src/app/shared/services/utils.service.ts");
/* harmony import */ var _checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../checkbox/checkbox.component */ "./src/app/shared/components/checkbox/checkbox.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function ProfileFormComponent_p_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u05D0\u05D7\u05D3 \u05D0\u05D5 \u05D9\u05D5\u05EA\u05E8 \u05DE\u05D4\u05E9\u05D3\u05D5\u05EA \u05D0\u05D9\u05E0\u05DD \u05EA\u05E7\u05D9\u05E0\u05D9\u05DD ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ProfileFormComponent {
    constructor(fb, utilsService) {
        this.fb = fb;
        this.utilsService = utilsService;
        this.submit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.formInvalid = false;
    }
    ngOnInit() {
        const profile = this.user.profile || {};
        this.form = this.fb.group({
            email: [profile.email || this.firebaseUser.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            firstName: [
                profile.firstName,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(this.utilsService.namePattern)]
            ],
            lastName: [
                profile.lastName,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(this.utilsService.namePattern)]
            ],
            phoneNumber: [profile.phoneNumber, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(this.utilsService.phonePattern)]],
            agree: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].requiredTrue]
        });
        this.form.valueChanges.subscribe(() => {
            this.formInvalid = false;
        });
    }
    get email() {
        return this.form.get('email');
    }
    get firstName() {
        return this.form.get('firstName');
    }
    get lastName() {
        return this.form.get('lastName');
    }
    get phoneNumber() {
        return this.form.get('phoneNumber');
    }
    get agree() {
        return this.form.get('agree');
    }
    onSubmit() {
        if (this.form.valid) {
            const parsedForm = {
                email: this.email.value,
                firstName: this.firstName.value.trim(),
                lastName: this.lastName.value.trim(),
                phoneNumber: this.phoneNumber.value
                //phoneNumber: this.utilsService.toInternationalPhoneNumber(this.phoneNumber.value.replace(/-/g, ''))
            };
            this.submit.emit(parsedForm);
        }
        else {
            this.formInvalid = true;
            this.form.markAllAsTouched();
        }
    }
}
ProfileFormComponent.ɵfac = function ProfileFormComponent_Factory(t) { return new (t || ProfileFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_utils_service__WEBPACK_IMPORTED_MODULE_2__["UtilsService"])); };
ProfileFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileFormComponent, selectors: [["app-profile-form"]], inputs: { user: "user", firebaseUser: "firebaseUser" }, outputs: { submit: "submit" }, decls: 20, vars: 13, consts: [[1, "medium-heading"], [1, "form", 3, "formGroup"], [1, "form-row"], [1, "col"], ["type", "text", "placeholder", "\u05E9\u05DD \u05E4\u05E8\u05D8\u05D9", "formControlName", "firstName", 1, "form-field"], ["type", "text", "placeholder", "\u05E9\u05DD \u05DE\u05E9\u05E4\u05D7\u05D4", "formControlName", "lastName", 1, "form-field"], ["type", "email", "placeholder", "\u05D0\u05D9\u05DE\u05D9\u05D9\u05DC", "formControlName", "email", 1, "form-field"], ["type", "tel", "placeholder", "\u05D8\u05DC\u05E4\u05D5\u05DF \u05E0\u05D9\u05D9\u05D3", "formControlName", "phoneNumber", 1, "form-field"], [1, "agree-input"], [3, "label", "checked", "invalid", "checkedChanged"], ["href", "/assets/docs/\u05EA\u05E0\u05D0\u05D9%20\u05E9\u05D9\u05DE\u05D5\u05E9%20\u05D4\u05D0\u05D7\u05D9\u05DD%20\u05E9\u05DC\u05E0\u05D5.pdf", "target", "_blank", 1, "site-link", "decoration"], ["class", "form-invalid-message", 4, "ngIf"], [1, "site-button", "primary-button", 3, "click"], [1, "form-invalid-message"]], template: function ProfileFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u05E4\u05E8\u05D8\u05D9 \u05DE\u05E9\u05EA\u05DE\u05E9\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "app-checkbox", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("checkedChanged", function ProfileFormComponent_Template_app_checkbox_checkedChanged_14_listener($event) { return ctx.agree.setValue($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u05DC\u05EA\u05E0\u05D0\u05D9 \u05D4\u05E9\u05D9\u05DE\u05D5\u05E9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ProfileFormComponent_p_17_Template, 2, 0, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileFormComponent_Template_button_click_18_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " \u05DC\u05D0\u05D9\u05E9\u05D5\u05E8 \u05D4\u05E4\u05E8\u05D8\u05D9\u05DD ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("invalid", !ctx.firstName.valid && ctx.firstName.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("invalid", !ctx.lastName.valid && ctx.lastName.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("invalid", !ctx.email.valid && ctx.email.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("invalid", !ctx.phoneNumber.valid && ctx.phoneNumber.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", "\u05D0\u05E0\u05D9 \u05DE\u05E1\u05DB\u05D9\u05DD")("checked", ctx.agree.value)("invalid", !ctx.agree.valid && ctx.agree.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formInvalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_3__["CheckboxComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: [".form[_ngcontent-%COMP%] {\n  max-width: 770px;\n  margin: auto;\n}\n.form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 30px;\n}\n.form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n  flex: 1;\n  margin: 0 5px;\n}\n@media only screen and (min-width: 768px) {\n  .form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n    padding-top: 10px;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  .form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n    padding-top: 15px;\n  }\n}\n.form[_ngcontent-%COMP%]   .agree-input[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.form[_ngcontent-%COMP%]   .agree-input[_ngcontent-%COMP%]   .site-link[_ngcontent-%COMP%] {\n  margin-right: 4px;\n  vertical-align: top;\n}\n.form[_ngcontent-%COMP%]   .sumbit-button[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n  margin-top: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcHJvZmlsZS1mb3JtL0M6XFxVc2Vyc1xcVGVoaWxhXFxEZXNrdG9wXFxnb29kLXByb2plY3RcXG91cmJyb3RoZXJzLW91cmJyb3RoZXJzXFxvdXItYnJvdGhlcnMtd2ViL3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXHByb2ZpbGUtZm9ybVxccHJvZmlsZS1mb3JtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9wcm9maWxlLWZvcm0vcHJvZmlsZS1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0FDQ0Y7QURDRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQ0NKO0FEQ0k7RUFDRSxPQUFBO0VBRUEsYUFBQTtBQ0FOO0FERU07RUFMRjtJQU1JLGlCQUFBO0VDQ047QUFDRjtBRENNO0VBVEY7SUFVSSxpQkFBQTtFQ0VOO0FBQ0Y7QURFRTtFQUNFLGVBQUE7QUNBSjtBREVJO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQ0FOO0FESUU7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9wcm9maWxlLWZvcm0vcHJvZmlsZS1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0ge1xyXG4gIG1heC13aWR0aDogNzcwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG5cclxuICAuZm9ybS1yb3cge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcblxyXG4gICAgLmNvbCB7XHJcbiAgICAgIGZsZXg6IDE7XHJcblxyXG4gICAgICBtYXJnaW46IDAgNXB4O1xyXG5cclxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYWdyZWUtaW5wdXQge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG5cclxuICAgIC5zaXRlLWxpbmsge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDRweDtcclxuICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5zdW1iaXQtYnV0dG9uIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gIH1cclxufVxyXG4iLCIuZm9ybSB7XG4gIG1heC13aWR0aDogNzcwcHg7XG4gIG1hcmdpbjogYXV0bztcbn1cbi5mb3JtIC5mb3JtLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG4uZm9ybSAuZm9ybS1yb3cgLmNvbCB7XG4gIGZsZXg6IDE7XG4gIG1hcmdpbjogMCA1cHg7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5mb3JtIC5mb3JtLXJvdyAuY29sIHtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgLmZvcm0gLmZvcm0tcm93IC5jb2wge1xuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICB9XG59XG4uZm9ybSAuYWdyZWUtaW5wdXQge1xuICBmb250LXNpemU6IDE4cHg7XG59XG4uZm9ybSAuYWdyZWUtaW5wdXQgLnNpdGUtbGluayB7XG4gIG1hcmdpbi1yaWdodDogNHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuLmZvcm0gLnN1bWJpdC1idXR0b24ge1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile-form',
                templateUrl: './profile-form.component.html',
                styleUrls: ['./profile-form.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _services_utils_service__WEBPACK_IMPORTED_MODULE_2__["UtilsService"] }]; }, { user: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], firebaseUser: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], submit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/components/profile-form/profile-form.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/shared/components/profile-form/profile-form.module.ts ***!
  \***********************************************************************/
/*! exports provided: ProfileFormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileFormModule", function() { return ProfileFormModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _profile_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile-form.component */ "./src/app/shared/components/profile-form/profile-form.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _checkbox_checkbox_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../checkbox/checkbox.module */ "./src/app/shared/components/checkbox/checkbox.module.ts");






class ProfileFormModule {
}
ProfileFormModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ProfileFormModule });
ProfileFormModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ProfileFormModule_Factory(t) { return new (t || ProfileFormModule)(); }, imports: [[_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _checkbox_checkbox_module__WEBPACK_IMPORTED_MODULE_4__["CheckboxModule"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ProfileFormModule, { declarations: [_profile_form_component__WEBPACK_IMPORTED_MODULE_2__["ProfileFormComponent"]], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _checkbox_checkbox_module__WEBPACK_IMPORTED_MODULE_4__["CheckboxModule"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]], exports: [_profile_form_component__WEBPACK_IMPORTED_MODULE_2__["ProfileFormComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProfileFormModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_profile_form_component__WEBPACK_IMPORTED_MODULE_2__["ProfileFormComponent"]],
                exports: [_profile_form_component__WEBPACK_IMPORTED_MODULE_2__["ProfileFormComponent"]],
                imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _checkbox_checkbox_module__WEBPACK_IMPORTED_MODULE_4__["CheckboxModule"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=default~host-page-host-page-module~participate-page-participate-page-module-es2015.js.map