function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~admin-bereaveds-page-admin-bereaveds-page-module~admin-users-page-admin-users-page-module"], {
  /***/
  "./src/app/shared/components/editable-text/editable-text.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/shared/components/editable-text/editable-text.component.ts ***!
    \****************************************************************************/

  /*! exports provided: EditableTextComponent */

  /***/
  function srcAppSharedComponentsEditableTextEditableTextComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditableTextComponent", function () {
      return EditableTextComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _places_select_places_select_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../places-select/places-select.component */
    "./src/app/shared/components/places-select/places-select.component.ts");

    function EditableTextComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r340 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r340.value || "\u05D0\u05D9\u05DF", " ");
      }
    }

    function EditableTextComponent_div_1_input_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r347 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function EditableTextComponent_div_1_input_2_Template_input_input_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r347);

          var ctx_r346 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r346.newValue = $event.target.value;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r342 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r342.value);
      }
    }

    function EditableTextComponent_div_1_input_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r349 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function EditableTextComponent_div_1_input_3_Template_input_input_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r349);

          var ctx_r348 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r348.newValue = $event.target.value;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r343 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r343.value);
      }
    }

    function EditableTextComponent_div_1_textarea_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r351 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "textarea", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function EditableTextComponent_div_1_textarea_4_Template_textarea_input_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r351);

          var ctx_r350 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r350.newValue = $event.target.value;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r344 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r344.value);
      }
    }

    var _c0 = function _c0() {
      return ["(cities)"];
    };

    function EditableTextComponent_div_1_app_places_select_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r353 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-places-select", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditableTextComponent_div_1_app_places_select_5_Template_app_places_select_change_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r353);

          var ctx_r352 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r352.newValue = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r345 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("types", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0))("formattedAddress", ctx_r345.value)("placeholder", "\u05DE\u05E7\u05D5\u05DD \u05DE\u05D2\u05D5\u05E8\u05D9\u05DD");
      }
    }

    function EditableTextComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditableTextComponent_div_1_input_2_Template, 1, 1, "input", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EditableTextComponent_div_1_input_3_Template, 1, 1, "input", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EditableTextComponent_div_1_textarea_4_Template, 1, 1, "textarea", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, EditableTextComponent_div_1_app_places_select_5_Template, 1, 4, "app-places-select", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r341 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx_r341.type);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "text");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "textarea");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "cities");
      }
    }

    var EditableTextComponent = /*#__PURE__*/function () {
      function EditableTextComponent(elementRef) {
        _classCallCheck(this, EditableTextComponent);

        this.elementRef = elementRef;
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.editable = false;
      }

      _createClass(EditableTextComponent, [{
        key: "clickout",
        value: function clickout(event) {
          if (this.elementRef.nativeElement.contains(event.target)) {
            this.editable = true;
          } else {
            if (this.editable) {
              this.editable = false;

              if (!this.newValue) {
                this.valueChange.emit(null);
              } else {
                this.valueChange.emit(this.type === 'date' ? Date.parse(this.newValue) : this.newValue);
              }
            }
          }
        }
      }, {
        key: "value",
        set: function set(value) {
          this._value = value;
          this.newValue = this.value;
        },
        get: function get() {
          return this._value;
        }
      }]);

      return EditableTextComponent;
    }();

    EditableTextComponent.ɵfac = function EditableTextComponent_Factory(t) {
      return new (t || EditableTextComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    EditableTextComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EditableTextComponent,
      selectors: [["app-editable-text"]],
      hostBindings: function EditableTextComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditableTextComponent_click_HostBindingHandler($event) {
            return ctx.clickout($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
        }
      },
      inputs: {
        value: "value",
        type: "type"
      },
      outputs: {
        valueChange: "valueChange"
      },
      decls: 2,
      vars: 2,
      consts: [["class", "value-container", 4, "ngIf"], ["class", "input-container", 4, "ngIf"], [1, "value-container"], [1, "value"], [1, "input-container"], [3, "ngSwitch"], ["type", "text", 3, "value", "input", 4, "ngSwitchCase"], ["type", "date", 3, "value", "input", 4, "ngSwitchCase"], ["class", "form-field", 3, "value", "input", 4, "ngSwitchCase"], [3, "types", "formattedAddress", "placeholder", "change", 4, "ngSwitchCase"], ["type", "text", 3, "value", "input"], ["type", "date", 3, "value", "input"], [1, "form-field", 3, "value", "input"], [3, "types", "formattedAddress", "placeholder", "change"]],
      template: function EditableTextComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, EditableTextComponent_div_0_Template, 3, 1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditableTextComponent_div_1_Template, 6, 5, "div", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.editable);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editable);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"], _places_select_places_select_component__WEBPACK_IMPORTED_MODULE_2__["PlacesSelectComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2VkaXRhYmxlLXRleHQvZWRpdGFibGUtdGV4dC5jb21wb25lbnQuc2NzcyJ9 */"],
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditableTextComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-editable-text',
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          templateUrl: './editable-text.component.html',
          styleUrls: ['./editable-text.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, {
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        valueChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        clickout: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['document:click', ['$event']]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/editable-text/editable-text.module.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/shared/components/editable-text/editable-text.module.ts ***!
    \*************************************************************************/

  /*! exports provided: EditableTextModule */

  /***/
  function srcAppSharedComponentsEditableTextEditableTextModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditableTextModule", function () {
      return EditableTextModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _places_select_places_select_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../places-select/places-select.module */
    "./src/app/shared/components/places-select/places-select.module.ts");
    /* harmony import */


    var _editable_text_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./editable-text.component */
    "./src/app/shared/components/editable-text/editable-text.component.ts");

    var EditableTextModule = function EditableTextModule() {
      _classCallCheck(this, EditableTextModule);
    };

    EditableTextModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: EditableTextModule
    });
    EditableTextModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function EditableTextModule_Factory(t) {
        return new (t || EditableTextModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _places_select_places_select_module__WEBPACK_IMPORTED_MODULE_2__["PlacesSelectModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EditableTextModule, {
        declarations: [_editable_text_component__WEBPACK_IMPORTED_MODULE_3__["EditableTextComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _places_select_places_select_module__WEBPACK_IMPORTED_MODULE_2__["PlacesSelectModule"]],
        exports: [_editable_text_component__WEBPACK_IMPORTED_MODULE_3__["EditableTextComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditableTextModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_editable_text_component__WEBPACK_IMPORTED_MODULE_3__["EditableTextComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _places_select_places_select_module__WEBPACK_IMPORTED_MODULE_2__["PlacesSelectModule"]],
          exports: [_editable_text_component__WEBPACK_IMPORTED_MODULE_3__["EditableTextComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/places-select/places-select.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/shared/components/places-select/places-select.component.ts ***!
    \****************************************************************************/

  /*! exports provided: PlacesSelectComponent */

  /***/
  function srcAppSharedComponentsPlacesSelectPlacesSelectComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlacesSelectComponent", function () {
      return PlacesSelectComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _agm_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @agm/core */
    "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js"); /// <reference types="@types/googlemaps" />
    /// <reference types="@types/googlemaps" />


    var _c0 = ["palcesInput"];

    var PlacesSelectComponent = /*#__PURE__*/function () {
      function PlacesSelectComponent(mapsAPILoader) {
        _classCallCheck(this, PlacesSelectComponent);

        this.mapsAPILoader = mapsAPILoader;
        this.formattedAddress = '';
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(PlacesSelectComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.getPlaceAutocomplete();
        }
      }, {
        key: "getPlaceAutocomplete",
        value: function getPlaceAutocomplete() {
          var _this = this;

          this.mapsAPILoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this.addresstext.nativeElement, {//componentRestrictions: { country: ['IL', 'PS'] },
              //  types: this.types.slice()
            });
            google.maps.event.addListener(autocomplete, 'place_changed', function () {
              var place = autocomplete.getPlace();
              var parsedAddress = {
                formattedAddress: place.formatted_address.replace(', ישראל', ''),
                latitude: place.geometry.location.lat(),
                longitude: place.geometry.location.lng()
              };

              _this.change.emit(parsedAddress);
            });
          });
        }
      }]);

      return PlacesSelectComponent;
    }();

    PlacesSelectComponent.ɵfac = function PlacesSelectComponent_Factory(t) {
      return new (t || PlacesSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_agm_core__WEBPACK_IMPORTED_MODULE_1__["MapsAPILoader"]));
    };

    PlacesSelectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PlacesSelectComponent,
      selectors: [["app-places-select"]],
      viewQuery: function PlacesSelectComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.addresstext = _t.first);
        }
      },
      inputs: {
        formattedAddress: "formattedAddress",
        types: "types",
        placeholder: "placeholder",
        invalid: "invalid"
      },
      outputs: {
        change: "change"
      },
      decls: 2,
      vars: 4,
      consts: [["type", "text", "autocorrect", "off", "autocapitalize", "off", "spellcheck", "off", 1, "form-field", 3, "value", "placeholder"], ["palcesInput", ""]],
      template: function PlacesSelectComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 0, 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("invalid", ctx.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.formattedAddress)("placeholder", ctx.placeholder);
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3BsYWNlcy1zZWxlY3QvcGxhY2VzLXNlbGVjdC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlacesSelectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-places-select',
          templateUrl: './places-select.component.html',
          styleUrls: ['./places-select.component.scss']
        }]
      }], function () {
        return [{
          type: _agm_core__WEBPACK_IMPORTED_MODULE_1__["MapsAPILoader"]
        }];
      }, {
        formattedAddress: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        types: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        placeholder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        invalid: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        change: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        addresstext: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['palcesInput']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/places-select/places-select.module.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/shared/components/places-select/places-select.module.ts ***!
    \*************************************************************************/

  /*! exports provided: PlacesSelectModule */

  /***/
  function srcAppSharedComponentsPlacesSelectPlacesSelectModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlacesSelectModule", function () {
      return PlacesSelectModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _places_select_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./places-select.component */
    "./src/app/shared/components/places-select/places-select.component.ts");

    var PlacesSelectModule = function PlacesSelectModule() {
      _classCallCheck(this, PlacesSelectModule);
    };

    PlacesSelectModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: PlacesSelectModule
    });
    PlacesSelectModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function PlacesSelectModule_Factory(t) {
        return new (t || PlacesSelectModule)();
      }
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PlacesSelectModule, {
        declarations: [_places_select_component__WEBPACK_IMPORTED_MODULE_1__["PlacesSelectComponent"]],
        exports: [_places_select_component__WEBPACK_IMPORTED_MODULE_1__["PlacesSelectComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlacesSelectModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_places_select_component__WEBPACK_IMPORTED_MODULE_1__["PlacesSelectComponent"]],
          exports: [_places_select_component__WEBPACK_IMPORTED_MODULE_1__["PlacesSelectComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/select/select.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/shared/components/select/select.component.ts ***!
    \**************************************************************/

  /*! exports provided: SelectComponent */

  /***/
  function srcAppSharedComponentsSelectSelectComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectComponent", function () {
      return SelectComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function SelectComponent_ng_template_3_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var v_r268 = ctx.$implicit;

        var ctx_r267 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx_r267.optionsMap[v_r268].details || "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r267.optionsMap[v_r268].label, " ");
      }
    }

    function SelectComponent_ng_template_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SelectComponent_ng_template_3_div_0_Template, 2, 2, "div", 7);
      }

      if (rf & 2) {
        var ctx_r262 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r262.values);
      }
    }

    function SelectComponent_ng_template_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r264 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r264.placeholder);
      }
    }

    function SelectComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r270 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelectComponent_div_6_Template_span_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r270);

          var ctx_r269 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r269.valueChange.emit(null);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "x");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SelectComponent_div_7_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r274 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelectComponent_div_7_div_1_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r274);

          var option_r272 = ctx.$implicit;

          var ctx_r273 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r273.onSelectOption(option_r272.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var option_r272 = ctx.$implicit;

        var ctx_r271 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r271.selectedMap[option_r272.value]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", option_r272.details || "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r272.label, " ");
      }
    }

    function SelectComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SelectComponent_div_7_div_1_Template, 2, 4, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r266 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r266.options);
      }
    }

    var _c0 = function _c0(a0, a1) {
      return {
        readonly: a0,
        editable: a1
      };
    };

    var SelectComponent = /*#__PURE__*/function () {
      function SelectComponent(elementRef) {
        _classCallCheck(this, SelectComponent);

        this.elementRef = elementRef;
        this.placeholder = 'לא נבחר';
        this.multiple = false;
        this.readonly = false;
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dirty = false;
        this.editable = false;
        this.open = false;
      }

      _createClass(SelectComponent, [{
        key: "clickout",
        value: function clickout(event) {
          if (!this.elementRef.nativeElement.contains(event.target)) {
            if (this.multiple && this.open && this.dirty) {
              this.valueChange.emit(this.values);
            }

            this.open = false;
            this.editable = false;
          }
        }
      }, {
        key: "onSelectOption",
        value: function onSelectOption(value) {
          if (!this.multiple) {
            this.valueChange.emit(value);
            this.open = false;
          } else {
            this.dirty = true;

            if (this.selectedMap[value]) {
              this.value = this.values.filter(function (v) {
                return v !== value;
              });
            } else {
              this.value = [].concat(_toConsumableArray(this.values), [value]);
            }
          }
        }
      }, {
        key: "value",
        set: function set(value) {
          if (Array.isArray(value)) {
            this.values = value;
          } else {
            this.values = value ? [value] : [];
          }

          this.selectedMap = this.values.reduce(function (acc, curr) {
            return Object.assign(Object.assign({}, acc), _defineProperty({}, curr, true));
          }, {});
        }
      }, {
        key: "options",
        set: function set(options) {
          this._options = options;
          this.optionsMap = this.options.reduce(function (acc, curr) {
            return Object.assign(Object.assign({}, acc), _defineProperty({}, curr.value, curr));
          }, {});
        },
        get: function get() {
          return this._options;
        }
      }]);

      return SelectComponent;
    }();

    SelectComponent.ɵfac = function SelectComponent_Factory(t) {
      return new (t || SelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    SelectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SelectComponent,
      selectors: [["app-select"]],
      hostBindings: function SelectComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelectComponent_click_HostBindingHandler($event) {
            return ctx.clickout($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
        }
      },
      inputs: {
        value: "value",
        options: "options",
        placeholder: "placeholder",
        multiple: "multiple",
        readonly: "readonly"
      },
      outputs: {
        valueChange: "valueChange"
      },
      decls: 8,
      vars: 8,
      consts: [[1, "select-container", 3, "ngClass"], [1, "value-container", 3, "click"], [1, "values"], [3, "ngIf", "ngIfElse"], ["empty", ""], ["class", "controls", 4, "ngIf"], ["class", "options", 4, "ngIf"], ["class", "value", 3, "title", 4, "ngFor", "ngForOf"], [1, "value", 3, "title"], [1, "value"], [1, "controls"], [1, "remove-icon", 3, "click"], [1, "triangle-icon"], [1, "options"], ["class", "option", 3, "active", "title", "click", 4, "ngFor", "ngForOf"], [1, "option", 3, "title", "click"]],
      template: function SelectComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelectComponent_Template_div_click_1_listener() {
            ctx.open = !ctx.readonly && ctx.editable;
            return ctx.editable = !ctx.readonly;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SelectComponent_ng_template_3_Template, 1, 1, "ng-template", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SelectComponent_ng_template_4_Template, 2, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SelectComponent_div_6_Template, 4, 0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SelectComponent_div_7_Template, 2, 1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r263 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c0, ctx.readonly, ctx.editable));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.values.length)("ngIfElse", _r263);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editable);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.open);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
      styles: [".select-container[_ngcontent-%COMP%] {\n  border: 1px solid #87b0ad;\n  color: #818181;\n}\n.select-container[_ngcontent-%COMP%]   .value-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0 2px;\n}\n.select-container[_ngcontent-%COMP%]   .value-container[_ngcontent-%COMP%]   .values[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.select-container[_ngcontent-%COMP%]   .value-container[_ngcontent-%COMP%]   .values[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  flex: 1;\n  min-height: 1em;\n  cursor: pointer;\n}\n.select-container[_ngcontent-%COMP%]   .value-container[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  padding: 0 2px;\n}\n.select-container[_ngcontent-%COMP%]   .value-container[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   .remove-icon[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin-left: 5px;\n}\n.select-container[_ngcontent-%COMP%]   .value-container[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   .triangle-icon[_ngcontent-%COMP%] {\n  width: 15px;\n  display: inline-block;\n  position: relative;\n}\n.select-container[_ngcontent-%COMP%]   .value-container[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   .triangle-icon[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  border: 5px solid transparent;\n  border-top: 5px solid #818181;\n}\n.select-container.editable[_ngcontent-%COMP%] {\n  border: 1px solid #00a099;\n}\n.select-container.readonly[_ngcontent-%COMP%]   .value-container[_ngcontent-%COMP%] {\n  cursor: default;\n}\n.select-container[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%] {\n  position: absolute;\n  border: 1px solid #818181;\n  background-color: white;\n}\n.select-container[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  border-top: 1px solid #818181;\n  cursor: pointer;\n}\n.select-container[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   .option.active[_ngcontent-%COMP%] {\n  background-color: rgba(0, 160, 152, 0.3);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc2VsZWN0L0M6XFxVc2Vyc1xcVGVoaWxhXFxsYXN0XFxvdXJCcm9cXG91ci1icm90aGVycy13ZWIvc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50c1xcc2VsZWN0XFxzZWxlY3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3NlbGVjdC9zZWxlY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRyx5QkFBQTtFQUNELGNBSlU7QUNHWjtBREdFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ0RKO0FER0k7RUFDRSxPQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FDRE47QURHTTtFQUNFLE9BQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ0RSO0FES0k7RUFDRSxjQUFBO0VBQ0EsY0FBQTtBQ0hOO0FES007RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUNIUjtBRE1NO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUNKUjtBREtRO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtBQ0hWO0FEU0U7RUFDRSx5QkFBQTtBQ1BKO0FEV0k7RUFDRSxlQUFBO0FDVE47QURhRTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtBQ1hKO0FEYUk7RUFDRSxpQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtBQ1hOO0FEYU07RUFDRSx3Q0FBQTtBQ1hSIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc2VsZWN0L3NlbGVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiR0ZXh0Q29sb3I6IHJnYigxMjksIDEyOSwgMTI5KTtcclxuXHJcbi5zZWxlY3QtY29udGFpbmVyIHtcclxuICAgYm9yZGVyOiAxcHggc29saWQgIzg3YjBhZDtcclxuICBjb2xvcjogJHRleHRDb2xvcjtcclxuXHJcbiAgLnZhbHVlLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDAgMnB4O1xyXG5cclxuICAgIC52YWx1ZXMge1xyXG4gICAgICBmbGV4OiAxO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICAgLnZhbHVlIHtcclxuICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDFlbTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuY29udHJvbHMge1xyXG4gICAgICBmbGV4OiAwIDAgYXV0bztcclxuICAgICAgcGFkZGluZzogMCAycHg7XHJcblxyXG4gICAgICAucmVtb3ZlLWljb24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudHJpYW5nbGUtaWNvbiB7XHJcbiAgICAgICAgd2lkdGg6IDE1cHg7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICAgICAgYm9yZGVyOiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICBib3JkZXItdG9wOiA1cHggc29saWQgJHRleHRDb2xvcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuZWRpdGFibGUge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDAsIDE2MCwgMTUzKTtcclxuICB9XHJcblxyXG4gICYucmVhZG9ubHkge1xyXG4gICAgLnZhbHVlLWNvbnRhaW5lciB7XHJcbiAgICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5vcHRpb25zIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICR0ZXh0Q29sb3I7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgICAub3B0aW9uIHtcclxuICAgICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAkdGV4dENvbG9yO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxNjAsIDE1MiwgMC4zKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIuc2VsZWN0LWNvbnRhaW5lciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM4N2IwYWQ7XG4gIGNvbG9yOiAjODE4MTgxO1xufVxuLnNlbGVjdC1jb250YWluZXIgLnZhbHVlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgMnB4O1xufVxuLnNlbGVjdC1jb250YWluZXIgLnZhbHVlLWNvbnRhaW5lciAudmFsdWVzIHtcbiAgZmxleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5zZWxlY3QtY29udGFpbmVyIC52YWx1ZS1jb250YWluZXIgLnZhbHVlcyAudmFsdWUge1xuICBmbGV4OiAxO1xuICBtaW4taGVpZ2h0OiAxZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5zZWxlY3QtY29udGFpbmVyIC52YWx1ZS1jb250YWluZXIgLmNvbnRyb2xzIHtcbiAgZmxleDogMCAwIGF1dG87XG4gIHBhZGRpbmc6IDAgMnB4O1xufVxuLnNlbGVjdC1jb250YWluZXIgLnZhbHVlLWNvbnRhaW5lciAuY29udHJvbHMgLnJlbW92ZS1pY29uIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuLnNlbGVjdC1jb250YWluZXIgLnZhbHVlLWNvbnRhaW5lciAuY29udHJvbHMgLnRyaWFuZ2xlLWljb24ge1xuICB3aWR0aDogMTVweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uc2VsZWN0LWNvbnRhaW5lciAudmFsdWUtY29udGFpbmVyIC5jb250cm9scyAudHJpYW5nbGUtaWNvbjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIGJvcmRlcjogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItdG9wOiA1cHggc29saWQgIzgxODE4MTtcbn1cbi5zZWxlY3QtY29udGFpbmVyLmVkaXRhYmxlIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwYTA5OTtcbn1cbi5zZWxlY3QtY29udGFpbmVyLnJlYWRvbmx5IC52YWx1ZS1jb250YWluZXIge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG4uc2VsZWN0LWNvbnRhaW5lciAub3B0aW9ucyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzgxODE4MTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4uc2VsZWN0LWNvbnRhaW5lciAub3B0aW9ucyAub3B0aW9uIHtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjODE4MTgxO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uc2VsZWN0LWNvbnRhaW5lciAub3B0aW9ucyAub3B0aW9uLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTYwLCAxNTIsIDAuMyk7XG59Il19 */"],
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-select',
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          templateUrl: './select.component.html',
          styleUrls: ['./select.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, {
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        placeholder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        multiple: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        readonly: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        valueChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        clickout: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['document:click', ['$event']]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/select/select.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/shared/components/select/select.module.ts ***!
    \***********************************************************/

  /*! exports provided: SelectModule */

  /***/
  function srcAppSharedComponentsSelectSelectModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectModule", function () {
      return SelectModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _select_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./select.component */
    "./src/app/shared/components/select/select.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var SelectModule = function SelectModule() {
      _classCallCheck(this, SelectModule);
    };

    SelectModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SelectModule
    });
    SelectModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SelectModule_Factory(t) {
        return new (t || SelectModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SelectModule, {
        declarations: [_select_component__WEBPACK_IMPORTED_MODULE_1__["SelectComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        exports: [_select_component__WEBPACK_IMPORTED_MODULE_1__["SelectComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelectModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_select_component__WEBPACK_IMPORTED_MODULE_1__["SelectComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
          exports: [_select_component__WEBPACK_IMPORTED_MODULE_1__["SelectComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/pipes/phone.pipe.ts":
  /*!********************************************!*\
    !*** ./src/app/shared/pipes/phone.pipe.ts ***!
    \********************************************/

  /*! exports provided: PhonePipe */

  /***/
  function srcAppSharedPipesPhonePipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PhonePipe", function () {
      return PhonePipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_utils_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/utils.service */
    "./src/app/shared/services/utils.service.ts");

    var PhonePipe = /*#__PURE__*/function () {
      function PhonePipe(utilsService) {
        _classCallCheck(this, PhonePipe);

        this.utilsService = utilsService;
      }

      _createClass(PhonePipe, [{
        key: "transform",
        value: function transform(phoneNumber) {
          if (!phoneNumber || phoneNumber.length < 9) {
            return phoneNumber;
          } else {
            var local = this.utilsService.toLocalPhoneNumber(phoneNumber);
            return "".concat(local.substring(0, 3), "-").concat(local.substring(3, 6), "-").concat(local.substring(6));
          }
        }
      }]);

      return PhonePipe;
    }();

    PhonePipe.ɵfac = function PhonePipe_Factory(t) {
      return new (t || PhonePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_utils_service__WEBPACK_IMPORTED_MODULE_1__["UtilsService"]));
    };

    PhonePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "phone",
      type: PhonePipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PhonePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'phone'
        }]
      }], function () {
        return [{
          type: _services_utils_service__WEBPACK_IMPORTED_MODULE_1__["UtilsService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/pipes/pipes.module.ts":
  /*!**********************************************!*\
    !*** ./src/app/shared/pipes/pipes.module.ts ***!
    \**********************************************/

  /*! exports provided: PipesModule */

  /***/
  function srcAppSharedPipesPipesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PipesModule", function () {
      return PipesModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _phone_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./phone.pipe */
    "./src/app/shared/pipes/phone.pipe.ts");
    /* harmony import */


    var _seniority_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./seniority.pipe */
    "./src/app/shared/pipes/seniority.pipe.ts");
    /* harmony import */


    var _safe_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./safe.pipe */
    "./src/app/shared/pipes/safe.pipe.ts");

    var pipes = [_phone_pipe__WEBPACK_IMPORTED_MODULE_1__["PhonePipe"], _seniority_pipe__WEBPACK_IMPORTED_MODULE_2__["SeniorityPipe"], _safe_pipe__WEBPACK_IMPORTED_MODULE_3__["SafePipe"]];

    var PipesModule = function PipesModule() {
      _classCallCheck(this, PipesModule);
    };

    PipesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: PipesModule
    });
    PipesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function PipesModule_Factory(t) {
        return new (t || PipesModule)();
      }
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PipesModule, {
        declarations: [_phone_pipe__WEBPACK_IMPORTED_MODULE_1__["PhonePipe"], _seniority_pipe__WEBPACK_IMPORTED_MODULE_2__["SeniorityPipe"], _safe_pipe__WEBPACK_IMPORTED_MODULE_3__["SafePipe"]],
        exports: [_phone_pipe__WEBPACK_IMPORTED_MODULE_1__["PhonePipe"], _seniority_pipe__WEBPACK_IMPORTED_MODULE_2__["SeniorityPipe"], _safe_pipe__WEBPACK_IMPORTED_MODULE_3__["SafePipe"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PipesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: pipes,
          exports: pipes
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/pipes/safe.pipe.ts":
  /*!*******************************************!*\
    !*** ./src/app/shared/pipes/safe.pipe.ts ***!
    \*******************************************/

  /*! exports provided: SafePipe */

  /***/
  function srcAppSharedPipesSafePipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SafePipe", function () {
      return SafePipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    var SafePipe = /*#__PURE__*/function () {
      function SafePipe(sanitizer) {
        _classCallCheck(this, SafePipe);

        this.sanitizer = sanitizer;
      }

      _createClass(SafePipe, [{
        key: "transform",
        value: function transform(url) {
          return this.sanitizer.bypassSecurityTrustResourceUrl(url);
        }
      }]);

      return SafePipe;
    }();

    SafePipe.ɵfac = function SafePipe_Factory(t) {
      return new (t || SafePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]));
    };

    SafePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "safe",
      type: SafePipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SafePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'safe'
        }]
      }], function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/pipes/seniority.pipe.ts":
  /*!************************************************!*\
    !*** ./src/app/shared/pipes/seniority.pipe.ts ***!
    \************************************************/

  /*! exports provided: SeniorityPipe */

  /***/
  function srcAppSharedPipesSeniorityPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SeniorityPipe", function () {
      return SeniorityPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SeniorityPipe = /*#__PURE__*/function () {
      function SeniorityPipe() {
        _classCallCheck(this, SeniorityPipe);
      }

      _createClass(SeniorityPipe, [{
        key: "transform",
        value: function transform(date) {
          if (!date) {
            return '';
          }

          var diff = new Date(Date.now() - date);
          var years = Math.abs(diff.getUTCFullYear() - 1970);

          if (!years) {
            return '' + (!diff.getMonth() ? 0.1 : (diff.getMonth() / 12).toFixed(1));
          } else {
            return years.toString();
          }
        }
      }]);

      return SeniorityPipe;
    }();

    SeniorityPipe.ɵfac = function SeniorityPipe_Factory(t) {
      return new (t || SeniorityPipe)();
    };

    SeniorityPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "seniority",
      type: SeniorityPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SeniorityPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'seniority'
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=default~admin-bereaveds-page-admin-bereaveds-page-module~admin-users-page-admin-users-page-module-es5.js.map