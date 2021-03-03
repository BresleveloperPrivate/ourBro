function _slicedToArray(arr, i) {
  return (
    _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest()
  );
}

function _nonIterableRest() {
  throw new TypeError(
    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
  );
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === 'Object' && o.constructor) n = o.constructor.name;
  if (n === 'Map' || n === 'Set') return Array.from(o);
  if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === 'undefined' || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;
  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i['return'] != null) _i['return']();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ('value' in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['tell-page-tell-page-module'],
  {
    /***/
    './src/app/tell/bereaved-guidance-form/bereaved-guidance-form.component.ts':
      /*!*********************************************************************************!*\
    !*** ./src/app/tell/bereaved-guidance-form/bereaved-guidance-form.component.ts ***!
    \*********************************************************************************/

      /*! exports provided: BereavedGuidanceFormComponent */

      /***/
      function srcAppTellBereavedGuidanceFormBereavedGuidanceFormComponentTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'BereavedGuidanceFormComponent', function() {
          return BereavedGuidanceFormComponent;
        });
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */

        var models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! models */
          '../types/models/index.ts'
        );
        /* harmony import */

        var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/common */
          './node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js'
        );
        /* harmony import */

        var _shared_components_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../shared/components/checkbox/checkbox.component */
          './src/app/shared/components/checkbox/checkbox.component.ts'
        );

        function BereavedGuidanceFormComponent_div_9_Template(rf, ctx) {
          if (rf & 1) {
            var _r136 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵgetCurrentView']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div', 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](1, 'app-checkbox', 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
              'checkedChanged',
              function BereavedGuidanceFormComponent_div_9_Template_app_checkbox_checkedChanged_1_listener($event) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵrestoreView'](_r136);

                var option_r134 = ctx.$implicit;

                var ctx_r135 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();

                return ctx_r135.onGuidanceChange(option_r134.value, $event);
              }
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }

          if (rf & 2) {
            var option_r134 = ctx.$implicit;

            var ctx_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('label', option_r134.details)(
              'checked',
              ctx_r133.selected[option_r134.value]
            );
          }
        }

        var BereavedGuidanceFormComponent = /*#__PURE__*/ (function() {
          function BereavedGuidanceFormComponent() {
            _classCallCheck(this, BereavedGuidanceFormComponent);

            this.options = models__WEBPACK_IMPORTED_MODULE_1__['guidanceOptions'];
            this.selected = Object.assign({}, initSelected);
            this.notIntereseted = true;
            this.submit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
          }

          _createClass(BereavedGuidanceFormComponent, [
            {
              key: 'onGuidanceChange',
              value: function onGuidanceChange(id, value) {
                var _this = this;

                this.selected[id] = value;
                this.notIntereseted = !Object.keys(this.selected).filter(function(id) {
                  return !!_this.selected[id];
                }).length;
              }
            },
            {
              key: 'onNotInterestedChange',
              value: function onNotInterestedChange(value) {
                this.notIntereseted = value;

                if (this.notIntereseted) {
                  this.selected = Object.assign({}, initSelected);
                }
              }
            },
            {
              key: 'onSubmit',
              value: function onSubmit() {
                var _this2 = this;

                var selectedIds = Object.keys(this.selected).filter(function(id) {
                  return !!_this2.selected[id];
                });
                this.submit.emit({
                  answered: true,
                  general: selectedIds.length ? selectedIds : null
                });
              }
            }
          ]);

          return BereavedGuidanceFormComponent;
        })();

        BereavedGuidanceFormComponent.ɵfac = function BereavedGuidanceFormComponent_Factory(t) {
          return new (t || BereavedGuidanceFormComponent)();
        };

        BereavedGuidanceFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineComponent']({
          type: BereavedGuidanceFormComponent,
          selectors: [['app-bereaved-guidance-form']],
          outputs: {
            submit: 'submit'
          },
          decls: 14,
          vars: 3,
          consts: [
            [1, 'medium-heading'],
            [1, 'training-container'],
            [1, 'training-text'],
            [1, 'training-options'],
            ['class', 'training-option', 4, 'ngFor', 'ngForOf'],
            [1, 'training-option', 'not-interseted'],
            [3, 'label', 'checked', 'checkedChanged'],
            [1, 'site-button', 'primary-button', 'step-button', 3, 'click'],
            [1, 'training-option']
          ],
          template: function BereavedGuidanceFormComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div', 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                1,
                '\u05DE\u05E4\u05D2\u05E9\u05D9 \u05D4\u05D3\u05E8\u05DB\u05D4'
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](2, 'div', 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](3, 'div', 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](4, 'p');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                5,
                ' \u05DE\u05E4\u05D2\u05E9\u05D9 \u05D4\u05D4\u05DB\u05E0\u05D4 \u05D9\u05EA\u05E7\u05D9\u05D9\u05DE\u05D5 \u05D1\u05D9\u05DF \u05D4-2.4 \u05DC-29.3 \u05D1\u05E8\u05D7\u05D1\u05D9 \u05D4\u05D0\u05E8\u05E5 \u05D1\u05DE\u05D8\u05E8\u05D4 \u05DC\u05D4\u05DB\u05D9\u05DF \u05D0\u05D5\u05EA\u05DA \u05D5\u05DC\u05E1\u05D9\u05D9\u05E2 \u05DC\u05DA \u05DC\u05E7\u05E8\u05D0\u05EA \u05D4\u05DE\u05E4\u05D2\u05E9\u05D9\u05DD. \u05D4\u05E1\u05D3\u05E0\u05D0\u05D5\u05EA \u05D9\u05DB\u05DC\u05DC\u05D5 \u05EA\u05DB\u05E0\u05D9\u05DD \u05E4\u05E8\u05E7\u05D8\u05D9\u05D9\u05DD \u05DC\u05D0\u05D7\u05D9\u05DD \u05D7\u05D3\u05E9\u05D9\u05DD \u05E2"\u05D9 \u05D3"\u05E8 \u05E6\u05D5\u05E8\u05D9\u05D0\u05DC \u05E8\u05D0\u05E9\u05D9 \u05D5\u05DE\u05E0\u05D7\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD, \u05D5\u05DC\u05D0\u05D7\u05D9\u05DD \u05D5\u05EA\u05D9\u05E7\u05D9\u05DD \u05E2"\u05D9 \u05E4\u05E8\u05D5\u05D9\u05E7\u05D8 21. \u05DB\u05DE\u05D5 \u05DB\u05DF, \u05EA\u05EA\u05E7\u05D9\u05D9\u05DD \u05E1\u05D3\u05E0\u05D4 \u05E9\u05DC \u05E0\u05D8"\u05DC \u05E9\u05DE\u05D8\u05E8\u05EA\u05D4 \u05DC\u05D4\u05E7\u05E0\u05D5\u05EA \u05DB\u05DC\u05D9\u05DD \u05E8\u05D2\u05E9\u05D9\u05D9\u05DD \u05DC\u05D4\u05EA\u05DE\u05D5\u05D3\u05D3\u05D3\u05D5\u05EA \u05E2\u05DD \u05D4\u05DE\u05E4\u05D2\u05E9. \u05DB\u05DE\u05D5 \u05DB\u05DF, \u05D9\u05EA\u05E7\u05D9\u05D9\u05DE\u05D5 \u05D4\u05E8\u05E6\u05D0\u05D5\u05EA \u05DC\u05D3\u05D5\u05D2\u05DE\u05D4 \u05E9\u05DC \u05E9\u05E0\u05D9 \u05D0\u05D7\u05D9\u05DD \u05E9\u05DB\u05D5\u05DC\u05D9\u05DD \u05D5\u05E1\u05D9\u05D5\u05E2 \u05D1\u05D1\u05E0\u05D9\u05D9\u05EA \u05D4\u05E9\u05D9\u05D7\u05D4 \u05D5/\u05D0\u05D5 \u05D4\u05DE\u05E6\u05D2\u05EA. '
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](6, 'div', 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](7, 'p');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                8,
                ' \u05E1\u05D3\u05E0\u05D0\u05D5\u05EA \u05D4\u05D4\u05DB\u05E0\u05D4 \u05D9\u05EA\u05E7\u05D9\u05D9\u05DE\u05D5 \u05D1\u05DE\u05E1\u05E4\u05E8 \u05DE\u05D5\u05E7\u05D3\u05D9\u05DD: '
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                9,
                BereavedGuidanceFormComponent_div_9_Template,
                2,
                2,
                'div',
                4
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](10, 'div', 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](11, 'app-checkbox', 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'checkedChanged',
                function BereavedGuidanceFormComponent_Template_app_checkbox_checkedChanged_11_listener($event) {
                  return ctx.onNotInterestedChange($event);
                }
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](12, 'button', 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'click',
                function BereavedGuidanceFormComponent_Template_button_click_12_listener() {
                  return ctx.onSubmit();
                }
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                13,
                ' \u05DC\u05D0\u05D9\u05E9\u05D5\u05E8 \u05D4\u05E4\u05E8\u05D8\u05D9\u05DD\n'
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngForOf', ctx.options);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
                'label',
                '\u05DC\u05D0 \u05DE\u05E2\u05D5\u05E0\u05D9\u05D9\u05DF \u05D1\u05D4\u05D3\u05E8\u05DB\u05D4'
              )('checked', ctx.notIntereseted);
            }
          },
          directives: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__['NgForOf'],
            _shared_components_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_3__['CheckboxComponent']
          ],
          styles: [
            '.training-container[_ngcontent-%COMP%] {\n  max-width: 770px;\n  margin: auto;\n  margin-bottom: 40px;\n}\n@media only screen and (max-width: 768px) {\n  .training-container[_ngcontent-%COMP%] {\n    padding: 0 15px;\n  }\n}\n.training-container[_ngcontent-%COMP%]   .training-text[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  text-align: center;\n  color: #818181;\n}\n.training-container[_ngcontent-%COMP%]   .training-options[_ngcontent-%COMP%] {\n  color: #818181;\n}\n.training-container[_ngcontent-%COMP%]   .training-options[_ngcontent-%COMP%]   .training-option[_ngcontent-%COMP%] {\n  padding-bottom: 10px;\n  padding-top: 10px;\n}\n.training-container[_ngcontent-%COMP%]   .training-options[_ngcontent-%COMP%]   .training-option[_ngcontent-%COMP%]:not(:last-child) {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n}\n.training-container[_ngcontent-%COMP%]   .training-options[_ngcontent-%COMP%]   .training-option.not-interseted[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVsbC9iZXJlYXZlZC1ndWlkYW5jZS1mb3JtL0M6XFxVc2Vyc1xcVGVoaWxhXFxsYXN0XFxvdXJCcm9cXG91ci1icm90aGVycy13ZWIvc3JjXFxhcHBcXHRlbGxcXGJlcmVhdmVkLWd1aWRhbmNlLWZvcm1cXGJlcmVhdmVkLWd1aWRhbmNlLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RlbGwvYmVyZWF2ZWQtZ3VpZGFuY2UtZm9ybS9iZXJlYXZlZC1ndWlkYW5jZS1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNDRjtBRENFO0VBTEY7SUFNSSxlQUFBO0VDRUY7QUFDRjtBREFFO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNFSjtBRENFO0VBQ0UsY0FBQTtBQ0NKO0FEQ0k7RUFDRSxvQkFBQTtFQUNBLGlCQUFBO0FDQ047QURDTTtFQUNFLDJDQUFBO0FDQ1I7QURFTTtFQUNFLGdCQUFBO0FDQVIiLCJmaWxlIjoic3JjL2FwcC90ZWxsL2JlcmVhdmVkLWd1aWRhbmNlLWZvcm0vYmVyZWF2ZWQtZ3VpZGFuY2UtZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50cmFpbmluZy1jb250YWluZXIge1xyXG4gIG1heC13aWR0aDogNzcwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIHBhZGRpbmc6IDAgMTVweDtcclxuICB9XHJcblxyXG4gIC50cmFpbmluZy10ZXh0IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzgxODE4MTtcclxuICB9XHJcblxyXG4gIC50cmFpbmluZy1vcHRpb25zIHtcclxuICAgIGNvbG9yOiAjODE4MTgxO1xyXG5cclxuICAgIC50cmFpbmluZy1vcHRpb24ge1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgICAgcGFkZGluZy10b3A6IDEwcHg7XHJcblxyXG4gICAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYubm90LWludGVyc2V0ZWQge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLnRyYWluaW5nLWNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogNzcwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnRyYWluaW5nLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMCAxNXB4O1xuICB9XG59XG4udHJhaW5pbmctY29udGFpbmVyIC50cmFpbmluZy10ZXh0IHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzgxODE4MTtcbn1cbi50cmFpbmluZy1jb250YWluZXIgLnRyYWluaW5nLW9wdGlvbnMge1xuICBjb2xvcjogIzgxODE4MTtcbn1cbi50cmFpbmluZy1jb250YWluZXIgLnRyYWluaW5nLW9wdGlvbnMgLnRyYWluaW5nLW9wdGlvbiB7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cbi50cmFpbmluZy1jb250YWluZXIgLnRyYWluaW5nLW9wdGlvbnMgLnRyYWluaW5nLW9wdGlvbjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cbi50cmFpbmluZy1jb250YWluZXIgLnRyYWluaW5nLW9wdGlvbnMgLnRyYWluaW5nLW9wdGlvbi5ub3QtaW50ZXJzZXRlZCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59Il19 */'
          ]
        });
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            BereavedGuidanceFormComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                args: [
                  {
                    selector: 'app-bereaved-guidance-form',
                    templateUrl: './bereaved-guidance-form.component.html',
                    styleUrls: ['./bereaved-guidance-form.component.scss']
                  }
                ]
              }
            ],
            function() {
              return [];
            },
            {
              submit: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Output']
                }
              ]
            }
          );
        })();

        var initSelected = {
          m1: false,
          m2: false,
          m3: false,
          m4: false
        };
        /***/
      },

    /***/
    './src/app/tell/bereaved-intro/bereaved-intro.component.ts':
      /*!*****************************************************************!*\
    !*** ./src/app/tell/bereaved-intro/bereaved-intro.component.ts ***!
    \*****************************************************************/

      /*! exports provided: BereavedIntroComponent */

      /***/
      function srcAppTellBereavedIntroBereavedIntroComponentTs(module, __webpack_exports__, __webpack_require__) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'BereavedIntroComponent', function() {
          return BereavedIntroComponent;
        });
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );

        var BereavedIntroComponent = function BereavedIntroComponent() {
          _classCallCheck(this, BereavedIntroComponent);

          this.submit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
        };

        BereavedIntroComponent.ɵfac = function BereavedIntroComponent_Factory(t) {
          return new (t || BereavedIntroComponent)();
        };

        BereavedIntroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineComponent']({
          type: BereavedIntroComponent,
          selectors: [['app-bereaved-intro']],
          outputs: {
            submit: 'submit'
          },
          decls: 15,
          vars: 0,
          consts: [
            [1, 'intro'],
            [1, 'site-divider'],
            [1, 'small-heading'],
            [1, 'medium-heading'],
            [1, 'site-text']
          ],
          template: function BereavedIntroComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'section', 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](1, 'div', 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](2, 'div', 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](3, '\u05DE\u05E4\u05D2\u05E9\u05D9\u05DD');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](4, 'div', 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                5,
                '\u05D0\u05E0\u05D9 \u05E8\u05D5\u05E6\u05D4 \u05DC\u05E1\u05E4\u05E8'
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](6, 'div', 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](7, 'p');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                8,
                " \u05D0\u05D7\u05D9\u05DD \u05D9\u05E7\u05E8\u05D9\u05DD, \u05D0\u05E0\u05D5 \u05E9\u05DE\u05D7\u05D9\u05DD \u05E9\u05D0\u05EA\u05DD \u05DE\u05E2\u05D5\u05E0\u05D9\u05D9\u05E0\u05D9\u05DD \u05DC\u05E7\u05D7\u05EA \u05D7\u05DC\u05E7 \u05D1\u05DE\u05E4\u05D2\u05E9\u05D9 '\u05D4\u05D0\u05D7\u05D9\u05DD \u05E9\u05DC\u05E0\u05D5'. "
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](9, 'p');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                10,
                " \u05E9\u05DE\u05D7 \u05DC\u05E1\u05D9\u05D9\u05E2 \u05DC\u05DA \u05D1\u05DB\u05DC \u05D3\u05E8\u05DA \u05E9\u05E0\u05D5\u05DB\u05DC \u05E2\u05DC \u05DE\u05E0\u05EA \u05E9\u05EA\u05D5\u05DB\u05DC \u05DC\u05E7\u05D9\u05D9\u05DD \u05DE\u05E4\u05D2\u05E9 \u05E2\u05D5\u05E6\u05DE\u05EA\u05D9, \u05DE\u05E8\u05D2\u05E9 \u05D5\u05D9\u05D9\u05D7\u05D5\u05D3\u05D9. \u05D1\u05DC\u05D7\u05D9\u05E6\u05D4 \u05E2\u05DC \u05DB\u05E4\u05EA\u05D5\u05E8 '\u05D4\u05DE\u05E9\u05DA', \u05D9\u05EA\u05D7\u05D9\u05DC \u05EA\u05D4\u05DC\u05D9\u05DA \u05D4\u05D4\u05E8\u05E9\u05DE\u05D4, \u05D1\u05D5 \u05D9\u05E9 \u05E6\u05D5\u05E8\u05DA \u05D1\u05DE\u05D9\u05DC\u05D5\u05D9 \u05E4\u05E8\u05D8\u05D9\u05DD \u05D0\u05D9\u05E9\u05D9\u05D9\u05DD, \u05DE\u05D9\u05DC\u05D5\u05D9 \u05E4\u05E8\u05D8\u05D9 \u05D7\u05DC\u05DC \u05D5\u05DC\u05D1\u05E1\u05D5\u05E3- \u05E9\u05D9\u05D1\u05D5\u05E6\u05DA \u05D1\u05D0\u05D7\u05D3 \u05D4\u05D1\u05EA\u05D9\u05DD \u05D4\u05DE\u05D0\u05E8\u05D7\u05D9\u05DD \u05E9\u05E0\u05E4\u05EA\u05D7\u05D5. \u05D7\u05DC\u05E7 \u05DE\u05D4\u05DE\u05E4\u05D2\u05E9\u05D9\u05DD \u05D9\u05D4\u05D9\u05D5 \u05D1\u05E1\u05D1\u05D9\u05D1\u05D4 \u05D0\u05D9\u05E0\u05D8\u05D9\u05DE\u05D9\u05EA \u05D5\u05D7\u05DC\u05E7\u05DD, \u05D1\u05D0\u05D5\u05D5\u05D9\u05E8\u05D4 \u05D2\u05D3\u05D5\u05DC\u05D4 \u05D9\u05D5\u05EA\u05E8. "
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](11, 'p');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                12,
                " \u05DC\u05E7\u05E8\u05D0\u05EA \u05D4\u05DE\u05E4\u05D2\u05E9\u05D9\u05DD \u05D0\u05E0\u05D5 \u05E0\u05E7\u05D9\u05D9\u05DD \u05DE\u05E4\u05D2\u05E9\u05D9 \u05D4\u05D3\u05E8\u05DB\u05D4 \u05D1\u05DE\u05D8\u05E8\u05D4 \u05DC\u05D4\u05DB\u05D9\u05DF \u05D0\u05D5\u05EA\u05DA \u05D5\u05DC\u05E1\u05D9\u05D9\u05E2 \u05DC\u05DA \u05DC\u05E7\u05E8\u05D0\u05EA \u05D4\u05DE\u05E4\u05D2\u05E9\u05D9\u05DD. \u05D4\u05DE\u05E4\u05D2\u05E9\u05D9\u05DD \u05D9\u05DB\u05DC\u05DC\u05D5 \u05EA\u05DB\u05E0\u05D9\u05DD \u05E4\u05E8\u05E7\u05D8\u05D9\u05D9\u05DD \u05D5\u05D4\u05E7\u05E0\u05D9\u05D9\u05EA \u05DB\u05DC\u05D9\u05DD \u05E9\u05D9\u05E1\u05D9\u05D9\u05E2\u05D5 \u05DC\u05DA \u05DE\u05D1\u05E0\u05D9\u05EA \u05D5\u05E8\u05D2\u05E9\u05D9\u05EA \u05DC\u05E7\u05E8\u05D0\u05EA \u05D4\u05DE\u05E4\u05D2\u05E9, \u05D1\u05D9\u05DF \u05D0\u05DD \u05DC\u05E7\u05D7\u05EA \u05D7\u05DC\u05E7 \u05D1\u05DE\u05E4\u05D2\u05E9\u05D9 '\u05D4\u05D0\u05D7\u05D9\u05DD \u05E9\u05DC\u05E0\u05D5' \u05D1\u05E2\u05D1\u05E8 \u05D5\u05D1\u05D9\u05DF \u05D0\u05DD \u05DC\u05D0. "
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](13, 'p');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                14,
                ' \u05E8\u05D5\u05D1 \u05D4\u05DE\u05E4\u05D2\u05E9\u05D9\u05DD \u05DE\u05EA\u05E7\u05D9\u05D9\u05DE\u05D9\u05DD \u05D1\u05D9\u05D5\u05DD \u05E8\u05D0\u05E9\u05D5\u05DF, \u05D4-26.4 \u05D1\u05E9\u05E2\u05D4 20:00, \u05D0\u05DA \u05D9\u05E9\u05E0\u05D4 \u05D0\u05E4\u05E9\u05E8\u05D5\u05EA \u05DC\u05D4\u05E9\u05EA\u05D1\u05E5 \u05DC\u05D9\u05D5\u05EA\u05E8 \u05DE\u05D1\u05D9\u05EA \u05DE\u05D0\u05E8\u05D7 \u05D0\u05D7\u05D3 \u05D1\u05D9\u05DF \u05D4\u05EA\u05D0\u05E8\u05D9\u05DB\u05D9\u05DD 22-28 \u05D1\u05D0\u05E4\u05E8\u05D9\u05DC. \u05D0\u05E0\u05D7\u05E0\u05D5 \u05E4\u05D4 \u05D1\u05E9\u05D1\u05D9\u05DC\u05DB\u05DD. '
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            }
          },
          styles: [
            '\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlbGwvYmVyZWF2ZWQtaW50cm8vYmVyZWF2ZWQtaW50cm8uY29tcG9uZW50LnNjc3MifQ== */'
          ]
        });
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            BereavedIntroComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                args: [
                  {
                    selector: 'app-bereaved-intro',
                    templateUrl: './bereaved-intro.component.html',
                    styleUrls: ['./bereaved-intro.component.scss']
                  }
                ]
              }
            ],
            null,
            {
              submit: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Output']
                }
              ]
            }
          );
        })();
        /***/
      },

    /***/
    './src/app/tell/bereaved-profile-form/bereaved-profile-form.component.ts':
      /*!*******************************************************************************!*\
    !*** ./src/app/tell/bereaved-profile-form/bereaved-profile-form.component.ts ***!
    \*******************************************************************************/

      /*! exports provided: BereavedProfileFormComponent */

      /***/
      function srcAppTellBereavedProfileFormBereavedProfileFormComponentTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'BereavedProfileFormComponent', function() {
          return BereavedProfileFormComponent;
        });
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */

        var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/forms */
          './node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js'
        );
        /* harmony import */

        var _shared_services_utils_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../shared/services/utils.service */
          './src/app/shared/services/utils.service.ts'
        );
        /* harmony import */

        var _shared_components_places_select_places_select_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../shared/components/places-select/places-select.component */
          './src/app/shared/components/places-select/places-select.component.ts'
        );
        /* harmony import */

        var _shared_components_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../shared/components/checkbox/checkbox.component */
          './src/app/shared/components/checkbox/checkbox.component.ts'
        );
        /* harmony import */

        var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @angular/common */
          './node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js'
        );

        function BereavedProfileFormComponent_p_38_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'p', 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
              1,
              ' \u05D0\u05D7\u05D3 \u05D0\u05D5 \u05D9\u05D5\u05EA\u05E8 \u05DE\u05D4\u05E9\u05D3\u05D5\u05EA \u05D0\u05D9\u05E0\u05DD \u05EA\u05E7\u05D9\u05E0\u05D9\u05DD '
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }
        }

        var _c0 = function _c0() {
          return ['(cities)'];
        };

        var BereavedProfileFormComponent = /*#__PURE__*/ (function() {
          //public a: boolean = true;
          function BereavedProfileFormComponent(fb, utilsService) {
            _classCallCheck(this, BereavedProfileFormComponent);

            this.fb = fb;
            this.utilsService = utilsService;
            this.submit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            this.formInvalid = false;
            this.canTellInOtherLang = false;
            this.maxDate = new Date().toISOString().split('T')[0];
          }

          _createClass(BereavedProfileFormComponent, [
            {
              key: 'ngOnInit',
              value: function ngOnInit() {
                var _this3 = this;

                var profile = this.user.profile || {};

                if (profile.otherLang) {
                  this.canTellInOtherLang = true;
                }

                this.form = this.fb.group({
                  email: [
                    profile.email || this.firebaseUser.email,
                    [
                      _angular_forms__WEBPACK_IMPORTED_MODULE_1__['Validators'].required,
                      _angular_forms__WEBPACK_IMPORTED_MODULE_1__['Validators'].email
                    ]
                  ],
                  firstName: [
                    profile.firstName,
                    [
                      _angular_forms__WEBPACK_IMPORTED_MODULE_1__['Validators'].required,
                      _angular_forms__WEBPACK_IMPORTED_MODULE_1__['Validators'].maxLength(20),
                      _angular_forms__WEBPACK_IMPORTED_MODULE_1__['Validators'].pattern(this.utilsService.namePattern)
                    ]
                  ],
                  lastName: [
                    profile.lastName,
                    [
                      _angular_forms__WEBPACK_IMPORTED_MODULE_1__['Validators'].required,
                      _angular_forms__WEBPACK_IMPORTED_MODULE_1__['Validators'].maxLength(20),
                      _angular_forms__WEBPACK_IMPORTED_MODULE_1__['Validators'].pattern(this.utilsService.namePattern)
                    ]
                  ],
                  phoneNumber: [
                    profile.phoneNumber,
                    [
                      _angular_forms__WEBPACK_IMPORTED_MODULE_1__['Validators'].required,
                      _angular_forms__WEBPACK_IMPORTED_MODULE_1__['Validators'].pattern(this.utilsService.phonePattern)
                    ]
                  ],
                  address: [profile.address, _angular_forms__WEBPACK_IMPORTED_MODULE_1__['Validators'].required],
                  birthDay: [profile.birthDay, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__['Validators'].required]],
                  otherLang: [profile.otherLang],
                  agree: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__['Validators'].requiredTrue]
                });
                this.form.valueChanges.subscribe(function() {
                  _this3.formInvalid = false;
                });
              }
            },
            {
              key: 'onSubmit',
              value: function onSubmit() {
                if (this.form.valid) {
                  var parsedForm = {
                    email: this.email.value,
                    firstName: this.firstName.value.trim(),
                    lastName: this.lastName.value.trim(),
                    phoneNumber: this.phoneNumber.value,
                    //phoneNumber: this.utilsService.toInternationalPhoneNumber(this.phoneNumber.value.replace(/-/g, '')),
                    address: this.address.value,
                    // birthDay: new Date(this.birthDay.value).getTime(),
                    birthDay: new Date(this.birthDay.value).getTime(),
                    otherLang: this.otherLang.value
                  };
                  this.submit.emit(parsedForm); //this.a = false
                } else {
                  this.formInvalid = true;
                  this.form.markAllAsTouched();
                }
              }
            },
            {
              key: 'email',
              get: function get() {
                return this.form.get('email');
              }
            },
            {
              key: 'firstName',
              get: function get() {
                return this.form.get('firstName');
              }
            },
            {
              key: 'lastName',
              get: function get() {
                return this.form.get('lastName');
              }
            },
            {
              key: 'phoneNumber',
              get: function get() {
                return this.form.get('phoneNumber');
              }
            },
            {
              key: 'address',
              get: function get() {
                return this.form.get('address');
              }
            },
            {
              key: 'birthDay',
              get: function get() {
                return this.form.get('birthDay');
              }
            },
            {
              key: 'otherLang',
              get: function get() {
                return this.form.get('otherLang');
              }
            },
            {
              key: 'agree',
              get: function get() {
                return this.form.get('agree');
              }
            }
          ]);

          return BereavedProfileFormComponent;
        })();

        BereavedProfileFormComponent.ɵfac = function BereavedProfileFormComponent_Factory(t) {
          return new (t || BereavedProfileFormComponent)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
              _angular_forms__WEBPACK_IMPORTED_MODULE_1__['FormBuilder']
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
              _shared_services_utils_service__WEBPACK_IMPORTED_MODULE_2__['UtilsService']
            )
          );
        };

        BereavedProfileFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineComponent']({
          type: BereavedProfileFormComponent,
          selectors: [['app-bereaved-profile-form']],
          inputs: {
            user: 'user',
            firebaseUser: 'firebaseUser'
          },
          outputs: {
            submit: 'submit'
          },
          decls: 41,
          vars: 20,
          consts: [
            [1, 'medium-heading'],
            [1, 'form', 3, 'formGroup'],
            [1, 'form-row'],
            [1, 'col'],
            [
              'type',
              'text',
              'placeholder',
              '\u05E9\u05DD \u05E4\u05E8\u05D8\u05D9*',
              'formControlName',
              'firstName',
              1,
              'form-field'
            ],
            [
              'type',
              'text',
              'placeholder',
              '\u05E9\u05DD \u05DE\u05E9\u05E4\u05D7\u05D4*',
              'formControlName',
              'lastName',
              1,
              'form-field'
            ],
            [
              'type',
              'email',
              'placeholder',
              '\u05D0\u05D9\u05DE\u05D9\u05D9\u05DC*',
              'formControlName',
              'email',
              1,
              'form-field'
            ],
            [
              'type',
              'tel',
              'placeholder',
              '\u05D8\u05DC\u05E4\u05D5\u05DF \u05E0\u05D9\u05D9\u05D3*',
              'formControlName',
              'phoneNumber',
              1,
              'form-field'
            ],
            [3, 'types', 'placeholder', 'invalid', 'change'],
            [
              'type',
              'text',
              'placeholder',
              '\u05EA\u05D0\u05E8\u05D9\u05DA \u05DC\u05D9\u05D3\u05D4*',
              'formControlName',
              'birthDay',
              'onfocus',
              "(this.type='date')",
              'onblur',
              "(this.type='text')",
              1,
              'form-field',
              3,
              'max'
            ],
            [1, 'other-lang-input'],
            [1, 'other-lang-select', 3, 'value', 'change'],
            ['value', 'english'],
            ['value', 'spanish'],
            ['value', 'franch'],
            ['value', 'arabic'],
            ['value', 'rusian'],
            ['value', 'other'],
            [1, 'agree-input'],
            ['label', '\u05D0\u05E0\u05D9 \u05DE\u05E1\u05DB\u05D9\u05DD', 3, 'checked', 'invalid', 'checkedChanged'],
            [
              'href',
              '/assets/docs/\u05EA\u05E0\u05D0\u05D9%20\u05E9\u05D9\u05DE\u05D5\u05E9%20\u05D4\u05D0\u05D7\u05D9\u05DD%20\u05E9\u05DC\u05E0\u05D5.pdf',
              'target',
              '_blank',
              1,
              'site-link',
              'decoration'
            ],
            ['class', 'form-invalid-message', 4, 'ngIf'],
            [1, 'site-button', 'primary-button', 3, 'click'],
            [1, 'form-invalid-message']
          ],
          template: function BereavedProfileFormComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div', 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                1,
                ' \u05E4\u05E8\u05D8\u05D9 \u05DE\u05E9\u05EA\u05DE\u05E9\n'
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](2, 'div', 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](3, 'div', 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](4, 'div', 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](5, 'input', 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](6, 'div', 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](7, 'input', 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](8, 'div', 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](9, 'div', 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](10, 'input', 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](11, 'div', 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](12, 'input', 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](13, 'div', 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](14, 'div', 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](15, 'app-places-select', 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'change',
                function BereavedProfileFormComponent_Template_app_places_select_change_15_listener($event) {
                  return ctx.address.setValue($event);
                }
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](16, 'div', 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](17, 'input', 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](18, 'div', 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](19, 'span');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                20,
                ' \u05D0\u05E0\u05D9 \u05DE\u05E1\u05E4\u05E8 \u05D2\u05DD \u05D1\u05E9\u05E4\u05D5\u05EA \u05D0\u05D7\u05E8\u05D5\u05EA: '
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](21, 'select', 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'change',
                function BereavedProfileFormComponent_Template_select_change_21_listener($event) {
                  return ctx.otherLang.setValue($event.target.value);
                }
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](22, 'option', 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](23, '\u05D0\u05E0\u05D2\u05DC\u05D9\u05EA');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](24, 'option', 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](25, '\u05E1\u05E4\u05E8\u05D3\u05D9\u05EA');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](26, 'option', 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](27, '\u05E6\u05E8\u05E4\u05EA\u05D9\u05EA');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](28, 'option', 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](29, '\u05E2\u05E8\u05D1\u05D9\u05EA');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](30, 'option', 16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](31, '\u05E8\u05D5\u05E1\u05D9\u05EA');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](32, 'option', 17);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](33, '\u05D0\u05D7\u05E8');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](34, 'div', 18);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](35, 'app-checkbox', 19);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'checkedChanged',
                function BereavedProfileFormComponent_Template_app_checkbox_checkedChanged_35_listener($event) {
                  return ctx.agree.setValue($event);
                }
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](36, 'a', 20);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                37,
                '\u05DC\u05EA\u05E0\u05D0\u05D9 \u05D4\u05E9\u05D9\u05DE\u05D5\u05E9'
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                38,
                BereavedProfileFormComponent_p_38_Template,
                2,
                0,
                'p',
                21
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](39, 'button', 22);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'click',
                function BereavedProfileFormComponent_Template_button_click_39_listener() {
                  return ctx.onSubmit();
                }
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                40,
                ' \u05DC\u05D0\u05D9\u05E9\u05D5\u05E8 \u05D4\u05E4\u05E8\u05D8\u05D9\u05DD '
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('formGroup', ctx.form);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵclassProp'](
                'invalid',
                !ctx.firstName.valid && ctx.firstName.touched
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵclassProp'](
                'invalid',
                !ctx.lastName.valid && ctx.lastName.touched
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵclassProp'](
                'invalid',
                !ctx.email.valid && ctx.email.touched
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵclassProp'](
                'invalid',
                !ctx.phoneNumber.valid && ctx.phoneNumber.touched
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
                'types',
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpureFunction0'](19, _c0)
              )('placeholder', '\u05DE\u05E7\u05D5\u05DD \u05DE\u05D2\u05D5\u05E8\u05D9\u05DD*')(
                'invalid',
                !ctx.address.valid && ctx.address.touched
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵclassProp'](
                'invalid',
                !ctx.birthDay.valid && ctx.birthDay.touched
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('max', ctx.maxDate);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('value', ctx.otherLang.value);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('checked', ctx.agree.value)(
                'invalid',
                !ctx.agree.valid && ctx.agree.touched
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngIf', ctx.formInvalid);
            }
          },
          directives: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__['NgControlStatusGroup'],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__['FormGroupDirective'],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__['DefaultValueAccessor'],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__['NgControlStatus'],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__['FormControlName'],
            _shared_components_places_select_places_select_component__WEBPACK_IMPORTED_MODULE_3__[
              'PlacesSelectComponent'
            ],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__['NgSelectOption'],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__['ɵangular_packages_forms_forms_x'],
            _shared_components_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_4__['CheckboxComponent'],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__['NgIf']
          ],
          styles: [
            '.form[_ngcontent-%COMP%] {\n  max-width: 770px;\n  margin: auto;\n}\n.form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%] {\n  display: flex;\n}\n@media only screen and (max-width: 768px) {\n  .form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%] {\n    padding: 5px;\n  }\n}\n.form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n  flex: 1;\n  margin: 0 5px;\n}\n@media only screen and (min-width: 768px) {\n  .form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n    padding-top: 10px;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  .form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n    padding-top: 15px;\n  }\n}\n@media only screen and (max-width: 768px) {\n  .form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n    margin: 0;\n    padding: 0 5px;\n  }\n}\n.form[_ngcontent-%COMP%]   .other-lang-input[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin: 20px 0;\n}\n@media only screen and (max-width: 768px) {\n  .form[_ngcontent-%COMP%]   .other-lang-input[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n.form[_ngcontent-%COMP%]   .other-lang-input[_ngcontent-%COMP%]   .other-lang-select[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.form[_ngcontent-%COMP%]   .agree-input[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin: 20px 0;\n}\n@media only screen and (max-width: 768px) {\n  .form[_ngcontent-%COMP%]   .agree-input[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n.form[_ngcontent-%COMP%]   .agree-input[_ngcontent-%COMP%]   .site-link[_ngcontent-%COMP%] {\n  margin-right: 4px;\n  vertical-align: top;\n}\n.form[_ngcontent-%COMP%]   .sumbit-button[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n  margin-top: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVsbC9iZXJlYXZlZC1wcm9maWxlLWZvcm0vQzpcXFVzZXJzXFxUZWhpbGFcXGxhc3RcXG91ckJyb1xcb3VyLWJyb3RoZXJzLXdlYi9zcmNcXGFwcFxcdGVsbFxcYmVyZWF2ZWQtcHJvZmlsZS1mb3JtXFxiZXJlYXZlZC1wcm9maWxlLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RlbGwvYmVyZWF2ZWQtcHJvZmlsZS1mb3JtL2JlcmVhdmVkLXByb2ZpbGUtZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtBQ0NGO0FEQ0U7RUFDRSxhQUFBO0FDQ0o7QURDSTtFQUhGO0lBSUksWUFBQTtFQ0VKO0FBQ0Y7QURBSTtFQUNFLE9BQUE7RUFFQSxhQUFBO0FDQ047QURDTTtFQUxGO0lBTUksaUJBQUE7RUNFTjtBQUNGO0FEQU07RUFURjtJQVVJLGlCQUFBO0VDR047QUFDRjtBRERNO0VBYkY7SUFjSSxTQUFBO0lBQ0EsY0FBQTtFQ0lOO0FBQ0Y7QURBRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FDRUo7QURBSTtFQUpGO0lBS0ksa0JBQUE7RUNHSjtBQUNGO0FEREk7RUFDRSxlQUFBO0FDR047QURDRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FDQ0o7QURDSTtFQUpGO0lBS0ksa0JBQUE7RUNFSjtBQUNGO0FEQUk7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0FDRU47QURFRTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL3RlbGwvYmVyZWF2ZWQtcHJvZmlsZS1mb3JtL2JlcmVhdmVkLXByb2ZpbGUtZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtIHtcclxuICBtYXgtd2lkdGg6IDc3MHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuXHJcbiAgLmZvcm0tcm93IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbCB7XHJcbiAgICAgIGZsZXg6IDE7XHJcblxyXG4gICAgICBtYXJnaW46IDAgNXB4O1xyXG5cclxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgNXB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAub3RoZXItbGFuZy1pbnB1dCB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBtYXJnaW46IDIwcHggMDtcclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAub3RoZXItbGFuZy1zZWxlY3Qge1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYWdyZWUtaW5wdXQge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbWFyZ2luOiAyMHB4IDA7XHJcblxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLnNpdGUtbGluayB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogNHB4O1xyXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnN1bWJpdC1idXR0b24ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgfVxyXG59XHJcbiIsIi5mb3JtIHtcbiAgbWF4LXdpZHRoOiA3NzBweDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuLmZvcm0gLmZvcm0tcm93IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmZvcm0gLmZvcm0tcm93IHtcbiAgICBwYWRkaW5nOiA1cHg7XG4gIH1cbn1cbi5mb3JtIC5mb3JtLXJvdyAuY29sIHtcbiAgZmxleDogMTtcbiAgbWFyZ2luOiAwIDVweDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmZvcm0gLmZvcm0tcm93IC5jb2wge1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAuZm9ybSAuZm9ybS1yb3cgLmNvbCB7XG4gICAgcGFkZGluZy10b3A6IDE1cHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmZvcm0gLmZvcm0tcm93IC5jb2wge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwIDVweDtcbiAgfVxufVxuLmZvcm0gLm90aGVyLWxhbmctaW5wdXQge1xuICBmb250LXNpemU6IDE4cHg7XG4gIG1hcmdpbjogMjBweCAwO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuZm9ybSAub3RoZXItbGFuZy1pbnB1dCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59XG4uZm9ybSAub3RoZXItbGFuZy1pbnB1dCAub3RoZXItbGFuZy1zZWxlY3Qge1xuICBmb250LXNpemU6IDE4cHg7XG59XG4uZm9ybSAuYWdyZWUtaW5wdXQge1xuICBmb250LXNpemU6IDE4cHg7XG4gIG1hcmdpbjogMjBweCAwO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuZm9ybSAuYWdyZWUtaW5wdXQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuLmZvcm0gLmFncmVlLWlucHV0IC5zaXRlLWxpbmsge1xuICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cbi5mb3JtIC5zdW1iaXQtYnV0dG9uIHtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgbWFyZ2luLXRvcDogNDBweDtcbn0iXX0= */'
          ]
        });
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            BereavedProfileFormComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                args: [
                  {
                    selector: 'app-bereaved-profile-form',
                    templateUrl: './bereaved-profile-form.component.html',
                    styleUrls: ['./bereaved-profile-form.component.scss']
                  }
                ]
              }
            ],
            function() {
              return [
                {
                  type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__['FormBuilder']
                },
                {
                  type: _shared_services_utils_service__WEBPACK_IMPORTED_MODULE_2__['UtilsService']
                }
              ];
            },
            {
              user: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input']
                }
              ],
              firebaseUser: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input']
                }
              ],
              submit: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Output']
                }
              ]
            }
          );
        })();
        /***/
      },

    /***/
    './src/app/tell/page/tell-page.component.ts':
      /*!**************************************************!*\
    !*** ./src/app/tell/page/tell-page.component.ts ***!
    \**************************************************/

      /*! exports provided: TellPageComponent */

      /***/
      function srcAppTellPageTellPageComponentTs(module, __webpack_exports__, __webpack_require__) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'TellPageComponent', function() {
          return TellPageComponent;
        });
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */

        var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! rxjs */
          './node_modules/rxjs/_esm2015/index.js'
        );
        /* harmony import */

        var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! rxjs/operators */
          './node_modules/rxjs/_esm2015/operators/index.js'
        );
        /* harmony import */

        var models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! models */
          '../types/models/index.ts'
        );
        /* harmony import */

        var _shared_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../shared/constants */
          './src/app/shared/constants.ts'
        );
        /* harmony import */

        var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @angular/router */
          './node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js'
        );
        /* harmony import */

        var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../shared/services/auth.service */
          './src/app/shared/services/auth.service.ts'
        );
        /* harmony import */

        var _shared_services_participations_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../shared/services/participations.service */
          './src/app/shared/services/participations.service.ts'
        );
        /* harmony import */

        var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ngx-toastr */
          './node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js'
        );
        /* harmony import */

        var _shared_services_data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../shared/services/data.service */
          './src/app/shared/services/data.service.ts'
        );
        /* harmony import */

        var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! @angular/common */
          './node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js'
        );
        /* harmony import */

        var _shared_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../shared/components/progress/progress.component */
          './src/app/shared/components/progress/progress.component.ts'
        );
        /* harmony import */

        var _bereaved_intro_bereaved_intro_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../bereaved-intro/bereaved-intro.component */
          './src/app/tell/bereaved-intro/bereaved-intro.component.ts'
        );
        /* harmony import */

        var _bereaved_profile_form_bereaved_profile_form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../bereaved-profile-form/bereaved-profile-form.component */
          './src/app/tell/bereaved-profile-form/bereaved-profile-form.component.ts'
        );
        /* harmony import */

        var _slain_form_slain_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ../slain-form/slain-form.component */
          './src/app/tell/slain-form/slain-form.component.ts'
        );
        /* harmony import */

        var _bereaved_guidance_form_bereaved_guidance_form_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ../bereaved-guidance-form/bereaved-guidance-form.component */
          './src/app/tell/bereaved-guidance-form/bereaved-guidance-form.component.ts'
        );
        /* harmony import */

        var _shared_components_meetings_meetings_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ../../shared/components/meetings/meetings.component */
          './src/app/shared/components/meetings/meetings.component.ts'
        ); //import { EnrollmentService } from './../../shared/services/enrollment.service';

        function TellPageComponent_section_2_Template(rf, ctx) {
          if (rf & 1) {
            var _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵgetCurrentView']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'section');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](1, 'div', 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](2, 'div', 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
              3,
              '\u05E4\u05E8\u05D8\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD'
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](4, 'app-progress', 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](5, 'section', 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](6, 'app-bereaved-intro');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](7, 'br');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](8, 'app-progress', 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](9, 'section', 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](10, 'app-bereaved-profile-form', 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
              'submit',
              function TellPageComponent_section_2_Template_app_bereaved_profile_form_submit_10_listener($event) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵrestoreView'](_r62);

                var ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();

                return ctx_r61.onProfileSubmit($event);
              }
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](11, 'br');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](12, 'app-progress', 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](13, 'section', 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](14, 'app-slain-form', 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
              'submit',
              function TellPageComponent_section_2_Template_app_slain_form_submit_14_listener($event) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵrestoreView'](_r62);

                var ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();

                return ctx_r63.onSlainsSubmit($event);
              }
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](15, 'br');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](16, 'app-progress', 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](17, 'section', 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](18, 'app-bereaved-guidance-form', 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
              'submit',
              function TellPageComponent_section_2_Template_app_bereaved_guidance_form_submit_18_listener($event) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵrestoreView'](_r62);

                var ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();

                return ctx_r64.onGuidanceSubmit($event);
              }
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](19, 'br');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](20, 'app-progress', 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](21, 'app-meetings', 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
              'joinMeeting',
              function TellPageComponent_section_2_Template_app_meetings_joinMeeting_21_listener($event) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵrestoreView'](_r62);

                var ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();

                return ctx_r65.onJoinMeeting($event);
              }
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }

          if (rf & 2) {
            var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('user', ctx_r54.user)(
              'firebaseUser',
              ctx_r54.firebaseUser
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('slain', ctx_r54.slain);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('user', ctx_r54.user)(
              'meetings',
              ctx_r54.meetings
            );
          }
        }

        function TellPageComponent_ng_container_5_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementContainer'](0);
          }
        }

        function TellPageComponent_ng_container_6_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementContainer'](0);
          }
        }

        function TellPageComponent_ng_container_7_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementContainer'](0);
          }
        }

        function TellPageComponent_ng_container_8_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementContainer'](0);
          }
        }

        function TellPageComponent_ng_container_9_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementContainer'](0);
          }
        }

        function TellPageComponent_ng_container_10_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementContainer'](0);
          }
        }

        var TellPageComponent = /*#__PURE__*/ (function() {
          function TellPageComponent(router, authService, participationsService, toastr, dataService) { // public enrollmentService: EnrollmentService,
            _classCallCheck(this, TellPageComponent);

            this.router = router;
            this.authService = authService;
            this.participationsService = participationsService;
            this.toastr = toastr;
            this.dataService = dataService;
            this.currentStep = 0;
            this.currentStep$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__['Subject']();
            this.year = _shared_constants__WEBPACK_IMPORTED_MODULE_4__['MEMORIAL_YEAR']; //public expended: boolean = false;
            //public ok: boolean = false;
            //public scheduling: boolean = false;

            this.subscriptions = [];
          }

          _createClass(TellPageComponent, [
            {
              key: 'ngOnInit',
              value: function ngOnInit() {
                var _this4 = this;

                this.authService.firebaseUser.subscribe(function(firebaseUser) {
                  return (_this4.firebaseUser = firebaseUser);
                });
                this.subscriptions.push(
                  Object(rxjs__WEBPACK_IMPORTED_MODULE_1__['combineLatest'])(
                    this.authService.user,
                    this.currentStep$.pipe(
                      Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['distinctUntilChanged'])(),
                      Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['tap'])(function() {
                        if (window.scrollTo) {
                          window.scrollTo(0, 0);
                        }
                      })
                    )
                  ).subscribe(function(_ref) {
                    var _ref2 = _slicedToArray(_ref, 2),
                      user = _ref2[0],
                      currentStep = _ref2[1];

                    _this4.user = user;
                    _this4.currentStep = currentStep; // Auto navigations after the first step

                    if (currentStep > 0) {
                      if (user) {
                        if (
                          user.role &&
                          user.role !== models__WEBPACK_IMPORTED_MODULE_3__['UserRole'].bereaved &&
                          !user.isAdmin
                        ) {
                          _this4.router.navigate(['/home']);
                        } else if (user.role !== models__WEBPACK_IMPORTED_MODULE_3__['UserRole'].bereaved) {
                          _this4.dataService.setUserRole(
                            user,
                            models__WEBPACK_IMPORTED_MODULE_3__['UserRole'].bereaved
                          );
                        }
                      }

                      if (!user) {
                        _this4.currentStep$.next(1);

                        _this4.authService.requestToLogin();
                      } else if (!_this4.participationsService.isBereavedHaveProfileDetails(user)) {
                        _this4.currentStep$.next(2);
                      } else if (!_this4.participationsService.isBereavedHaveSlainDetails(user)) {
                        _this4.currentStep$.next(3);
                      } else if (!_this4.participationsService.isBereavedAnsweredTrainingMeeting(user)) {
                        _this4.currentStep$.next(4);
                      } else {
                        _this4.currentStep$.next(5);
                      }
                    }
                  })
                );
                this.subscriptions.push(
                  this.dataService.getMeetings().subscribe(function(meetings) {
                    _this4.meetings = meetings;
                  })
                );
                setTimeout(function() {
                  _this4.currentStep$.next(1);
                });
              }
            },
            {
              key: 'onProfileSubmit',
              value: function onProfileSubmit(profileForm) {
                this.dataService.setUserProfile(this.user, profileForm); //this.expended = true;
                //this.a=false;
              }
            },
            {
              key: 'onSlainsSubmit',
              value: function onSlainsSubmit(slainForm) {
                var slains = [
                  {
                    firstName: slainForm.firstName,
                    lastName: slainForm.lastName,
                    deathDate: slainForm.deathDate
                  }
                ];
                var story = slainForm.story;
                var bereavedProfile = {
                  slains: slains,
                  story: story
                };
                this.dataService.setBereavedProfile(this.user, bereavedProfile); //this.ok = true;
              }
            },
            {
              key: 'onGuidanceSubmit',
              value: function onGuidanceSubmit(bereavedGuidance) {
                this.dataService.setBereavedGuidance(this.user, bereavedGuidance); //this.scheduling = true;
              }
            },
            {
              key: 'onJoinMeeting',
              value: function onJoinMeeting(meeting) {
                var _this5 = this;

                if (window.confirm('האם ברצונך להשתבץ למפגש?')) {
                  if (this.user.role === models__WEBPACK_IMPORTED_MODULE_3__['UserRole'].bereaved) {
                    this.dataService.bereavedJoinMeeting(this.user, meeting).subscribe(
                      function() {
                        _this5.toastr.success('שובצת בהצלחה!');

                        _this5.router.navigate([
                          'meetings/'
                            .concat(_this5.year, '/')
                            .concat(meeting.hostId, '/')
                            .concat(meeting.id)
                        ]);
                      },
                      function() {
                        _this5.toastr.error('שגיאה - לא ניתן להשתבץ למפגש. נא ליצור קשר.');
                      }
                    );
                  }
                }
              }
            },
            {
              key: 'ngOnDestroy',
              value: function ngOnDestroy() {
                this.subscriptions.forEach(function(subscription) {
                  subscription.unsubscribe();
                });
              }
            }
          ]);

          return TellPageComponent;
        })();

        TellPageComponent.ɵfac = function TellPageComponent_Factory(t) {
          return new (t || TellPageComponent)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
              _angular_router__WEBPACK_IMPORTED_MODULE_5__['Router']
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
              _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_6__['AuthService']
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
              _shared_services_participations_service__WEBPACK_IMPORTED_MODULE_7__['ParticipationsService']
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
              ngx_toastr__WEBPACK_IMPORTED_MODULE_8__['ToastrService']
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
              _shared_services_data_service__WEBPACK_IMPORTED_MODULE_9__['DataService']
            )
          );
        };

        TellPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineComponent']({
          type: TellPageComponent,
          selectors: [['app-tell-page']],
          decls: 11,
          vars: 8,
          consts: [
            ['src', '../../../assets/img/tellHeader.jpg', 'alt', 'Meetings Page Header Image', 1, 'image-header'],
            [1, 'registration-page'],
            [4, 'ngIf'],
            [1, 'registration-steps'],
            [3, 'ngSwitch'],
            [4, 'ngSwitchCase'],
            [1, 'site-divider'],
            [1, 'small-heading'],
            ['title', '\u05D4\u05E1\u05D1\u05E8'],
            [1, 'registration-step'],
            ['title', ' \u05E4\u05E8\u05D8\u05D9\u05DD \u05D0\u05D9\u05E9\u05D9\u05D9\u05DD'],
            [3, 'user', 'firebaseUser', 'submit'],
            ['title', '\u05E4\u05E8\u05D8\u05D9 \u05D4\u05D7\u05DC\u05DC'],
            [3, 'slain', 'submit'],
            ['title', '\u05DE\u05E4\u05D2\u05E9\u05D9 \u05D1\u05D3\u05E8\u05DB\u05D4'],
            [3, 'submit'],
            ['title', '\u05E9\u05D9\u05D1\u05D5\u05E5'],
            [3, 'user', 'meetings', 'joinMeeting']
          ],
          template: function TellPageComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](0, 'img', 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](1, 'section', 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                2,
                TellPageComponent_section_2_Template,
                22,
                5,
                'section',
                2
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](3, 'div', 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementContainerStart'](4, 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                5,
                TellPageComponent_ng_container_5_Template,
                1,
                0,
                'ng-container',
                5
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                6,
                TellPageComponent_ng_container_6_Template,
                1,
                0,
                'ng-container',
                5
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                7,
                TellPageComponent_ng_container_7_Template,
                1,
                0,
                'ng-container',
                5
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                8,
                TellPageComponent_ng_container_8_Template,
                1,
                0,
                'ng-container',
                5
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                9,
                TellPageComponent_ng_container_9_Template,
                1,
                0,
                'ng-container',
                5
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                10,
                TellPageComponent_ng_container_10_Template,
                1,
                0,
                'ng-container',
                5
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementContainerEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngIf', ctx.currentStep > 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngSwitch', ctx.currentStep);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngSwitchCase', 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngSwitchCase', 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngSwitchCase', 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngSwitchCase', 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngSwitchCase', 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngSwitchCase', 5);
            }
          },
          directives: [
            _angular_common__WEBPACK_IMPORTED_MODULE_10__['NgIf'],
            _angular_common__WEBPACK_IMPORTED_MODULE_10__['NgSwitch'],
            _angular_common__WEBPACK_IMPORTED_MODULE_10__['NgSwitchCase'],
            _shared_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_11__['ProgressComponent'],
            _bereaved_intro_bereaved_intro_component__WEBPACK_IMPORTED_MODULE_12__['BereavedIntroComponent'],
            _bereaved_profile_form_bereaved_profile_form_component__WEBPACK_IMPORTED_MODULE_13__[
              'BereavedProfileFormComponent'
            ],
            _slain_form_slain_form_component__WEBPACK_IMPORTED_MODULE_14__['SlainFormComponent'],
            _bereaved_guidance_form_bereaved_guidance_form_component__WEBPACK_IMPORTED_MODULE_15__[
              'BereavedGuidanceFormComponent'
            ],
            _shared_components_meetings_meetings_component__WEBPACK_IMPORTED_MODULE_16__['MeetingsComponent']
          ],
          styles: [
            '\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlbGwvcGFnZS90ZWxsLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */'
          ]
        });
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            TellPageComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                args: [
                  {
                    selector: 'app-tell-page',
                    templateUrl: './tell-page.component.html',
                    styleUrls: ['./tell-page.component.scss']
                  }
                ]
              }
            ],
            function() {
              return [
                {
                  type: _angular_router__WEBPACK_IMPORTED_MODULE_5__['Router']
                },
                {
                  type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_6__['AuthService']
                },
                {
                  type: _shared_services_participations_service__WEBPACK_IMPORTED_MODULE_7__['ParticipationsService']
                },
                {
                  type: ngx_toastr__WEBPACK_IMPORTED_MODULE_8__['ToastrService']
                },
                {
                  type: _shared_services_data_service__WEBPACK_IMPORTED_MODULE_9__['DataService']
                }
              ];
            },
            null
          );
        })();
        /***/
      },

    /***/
    './src/app/tell/page/tell-page.module.ts':
      /*!***********************************************!*\
    !*** ./src/app/tell/page/tell-page.module.ts ***!
    \***********************************************/

      /*! exports provided: TellPageModule */

      /***/
      function srcAppTellPageTellPageModuleTs(module, __webpack_exports__, __webpack_require__) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'TellPageModule', function() {
          return TellPageModule;
        });
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */

        var _tell_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./tell-page.component */
          './src/app/tell/page/tell-page.component.ts'
        );
        /* harmony import */

        var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/router */
          './node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js'
        );
        /* harmony import */

        var _shared_components_registration_progress_bar_registration_progress_bar_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../shared/components/registration-progress-bar/registration-progress-bar.module */
          './src/app/shared/components/registration-progress-bar/registration-progress-bar.module.ts'
        );
        /* harmony import */

        var _shared_components_meetings_meetings_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../shared/components/meetings/meetings-components.module */
          './src/app/shared/components/meetings/meetings-components.module.ts'
        );
        /* harmony import */

        var _tell_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../tell.module */
          './src/app/tell/tell.module.ts'
        );
        /* harmony import */

        var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! @angular/common */
          './node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js'
        );
        /* harmony import */

        var _shared_components_progress_progress_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../shared/components/progress/progress.module */
          './src/app/shared/components/progress/progress.module.ts'
        );

        var routes = [
          {
            path: '',
            component: _tell_page_component__WEBPACK_IMPORTED_MODULE_1__['TellPageComponent']
          }
        ];

        var TellPageModule = function TellPageModule() {
          _classCallCheck(this, TellPageModule);
        };

        TellPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineNgModule']({
          type: TellPageModule
        });
        TellPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineInjector']({
          factory: function TellPageModule_Factory(t) {
            return new (t || TellPageModule)();
          },
          imports: [
            [
              _tell_module__WEBPACK_IMPORTED_MODULE_5__['TellModule'],
              _angular_router__WEBPACK_IMPORTED_MODULE_2__['RouterModule'].forChild(routes),
              _shared_components_registration_progress_bar_registration_progress_bar_module__WEBPACK_IMPORTED_MODULE_3__[
                'RegistrationProgressBarModule'
              ],
              _shared_components_meetings_meetings_components_module__WEBPACK_IMPORTED_MODULE_4__[
                'MeetingsComponentsModule'
              ],
              _angular_common__WEBPACK_IMPORTED_MODULE_6__['CommonModule'],
              _shared_components_progress_progress_module__WEBPACK_IMPORTED_MODULE_7__['ProgressModule']
            ]
          ]
        });

        (function() {
          (typeof ngJitMode === 'undefined' || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵsetNgModuleScope'](TellPageModule, {
              declarations: [_tell_page_component__WEBPACK_IMPORTED_MODULE_1__['TellPageComponent']],
              imports: [
                _tell_module__WEBPACK_IMPORTED_MODULE_5__['TellModule'],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__['RouterModule'],
                _shared_components_registration_progress_bar_registration_progress_bar_module__WEBPACK_IMPORTED_MODULE_3__[
                  'RegistrationProgressBarModule'
                ],
                _shared_components_meetings_meetings_components_module__WEBPACK_IMPORTED_MODULE_4__[
                  'MeetingsComponentsModule'
                ],
                _angular_common__WEBPACK_IMPORTED_MODULE_6__['CommonModule'],
                _shared_components_progress_progress_module__WEBPACK_IMPORTED_MODULE_7__['ProgressModule']
              ]
            });
        })();
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            TellPageModule,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'],
                args: [
                  {
                    imports: [
                      _tell_module__WEBPACK_IMPORTED_MODULE_5__['TellModule'],
                      _angular_router__WEBPACK_IMPORTED_MODULE_2__['RouterModule'].forChild(routes),
                      _shared_components_registration_progress_bar_registration_progress_bar_module__WEBPACK_IMPORTED_MODULE_3__[
                        'RegistrationProgressBarModule'
                      ],
                      _shared_components_meetings_meetings_components_module__WEBPACK_IMPORTED_MODULE_4__[
                        'MeetingsComponentsModule'
                      ],
                      _angular_common__WEBPACK_IMPORTED_MODULE_6__['CommonModule'],
                      _shared_components_progress_progress_module__WEBPACK_IMPORTED_MODULE_7__['ProgressModule']
                    ],
                    declarations: [_tell_page_component__WEBPACK_IMPORTED_MODULE_1__['TellPageComponent']]
                  }
                ]
              }
            ],
            null,
            null
          );
        })();
        /***/
      },

    /***/
    './src/app/tell/slain-form/slain-form.component.ts':
      /*!*********************************************************!*\
    !*** ./src/app/tell/slain-form/slain-form.component.ts ***!
    \*********************************************************/

      /*! exports provided: SlainFormComponent */

      /***/
      function srcAppTellSlainFormSlainFormComponentTs(module, __webpack_exports__, __webpack_require__) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'SlainFormComponent', function() {
          return SlainFormComponent;
        });
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */

        var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/forms */
          './node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js'
        );
        /* harmony import */

        var _shared_services_utils_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../shared/services/utils.service */
          './src/app/shared/services/utils.service.ts'
        );
        /* harmony import */

        var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @angular/router */
          './node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js'
        );
        /* harmony import */

        var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @angular/common */
          './node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js'
        );

        function SlainFormComponent_p_15_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'p', 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
              1,
              ' \u05D0\u05D7\u05D3 \u05D0\u05D5 \u05D9\u05D5\u05EA\u05E8 \u05DE\u05D4\u05E9\u05D3\u05D5\u05EA \u05D0\u05D9\u05E0\u05DD \u05EA\u05E7\u05D9\u05E0\u05D9\u05DD '
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }
        }

        var SlainFormComponent = /*#__PURE__*/ (function() {
          function SlainFormComponent(fb, utilsService, router) {
            _classCallCheck(this, SlainFormComponent);

            this.fb = fb;
            this.utilsService = utilsService;
            this.router = router;
            this.submit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            this.formInvalid = false;
            this.maxDate = new Date().toISOString().split('T')[0];
          }

          _createClass(SlainFormComponent, [
            {
              key: 'ngOnInit',
              value: function ngOnInit() {
                var _this6 = this;

                this.form = this.fb.group({
                  firstName: [
                    '',
                    [
                      _angular_forms__WEBPACK_IMPORTED_MODULE_1__['Validators'].required,
                      _angular_forms__WEBPACK_IMPORTED_MODULE_1__['Validators'].maxLength(20),
                      _angular_forms__WEBPACK_IMPORTED_MODULE_1__['Validators'].pattern(this.utilsService.namePattern)
                    ]
                  ],
                  lastName: [
                    '',
                    [
                      _angular_forms__WEBPACK_IMPORTED_MODULE_1__['Validators'].required,
                      _angular_forms__WEBPACK_IMPORTED_MODULE_1__['Validators'].maxLength(20),
                      _angular_forms__WEBPACK_IMPORTED_MODULE_1__['Validators'].pattern(this.utilsService.namePattern)
                    ]
                  ],
                  deathDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__['Validators'].required],
                  story: [
                    '',
                    [
                      _angular_forms__WEBPACK_IMPORTED_MODULE_1__['Validators'].minLength(100),
                      _angular_forms__WEBPACK_IMPORTED_MODULE_1__['Validators'].maxLength(500)
                    ]
                  ]
                });
                this.form.valueChanges.subscribe(function() {
                  _this6.formInvalid = false;
                });
              }
            },
            {
              key: 'onSubmit',
              value: function onSubmit() {
                if (this.form.valid) {
                  var parsedForm = {
                    firstName: this.firstName.value.trim(),
                    lastName: this.lastName.value.trim(),
                    deathDate: new Date(this.deathDate.value).getTime(),
                    story: this.story.value.trim()
                  };
                  this.submit.emit(parsedForm);
                } else {
                  this.formInvalid = true;
                  this.form.markAllAsTouched();
                }
              }
            },
            {
              key: 'firstName',
              get: function get() {
                return this.form.get('firstName');
              }
            },
            {
              key: 'lastName',
              get: function get() {
                return this.form.get('lastName');
              }
            },
            {
              key: 'deathDate',
              get: function get() {
                return this.form.get('deathDate');
              }
            },
            {
              key: 'story',
              get: function get() {
                return this.form.get('story');
              }
            }
          ]);

          return SlainFormComponent;
        })();

        SlainFormComponent.ɵfac = function SlainFormComponent_Factory(t) {
          return new (t || SlainFormComponent)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
              _angular_forms__WEBPACK_IMPORTED_MODULE_1__['FormBuilder']
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
              _shared_services_utils_service__WEBPACK_IMPORTED_MODULE_2__['UtilsService']
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
              _angular_router__WEBPACK_IMPORTED_MODULE_3__['Router']
            )
          );
        };

        SlainFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineComponent']({
          type: SlainFormComponent,
          selectors: [['app-slain-form']],
          inputs: {
            slain: 'slain'
          },
          outputs: {
            submit: 'submit'
          },
          decls: 18,
          vars: 11,
          consts: [
            [1, 'medium-heading'],
            [1, 'form', 3, 'formGroup'],
            [1, 'form-row'],
            [1, 'col'],
            [
              'type',
              'text',
              'placeholder',
              '\u05E9\u05DD \u05E4\u05E8\u05D8\u05D9*',
              'formControlName',
              'firstName',
              1,
              'form-field'
            ],
            [
              'type',
              'text',
              'placeholder',
              '\u05E9\u05DD \u05DE\u05E9\u05E4\u05D7\u05D4*',
              'formControlName',
              'lastName',
              1,
              'form-field'
            ],
            [
              'type',
              'text',
              'placeholder',
              '\u05EA\u05D0\u05E8\u05D9\u05DA \u05E0\u05E4\u05D9\u05DC\u05D4*',
              'formControlName',
              'deathDate',
              'onfocus',
              "(this.type='date')",
              'onblur',
              "(this.type='text')",
              1,
              'form-field',
              3,
              'max'
            ],
            [
              'placeholder',
              '\u05D4\u05E1\u05D9\u05E4\u05D5\u05E8 \u05E9\u05DC\u05D9 - (100-500) \u05EA\u05D5\u05D5\u05D9\u05DD',
              'formControlName',
              'story',
              1,
              'form-field'
            ],
            ['class', 'form-invalid-message', 4, 'ngIf'],
            [1, 'sumbit-button', 'site-button', 'primary-button', 3, 'click'],
            [1, 'form-invalid-message']
          ],
          template: function SlainFormComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div', 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](1, '\u05E4\u05E8\u05D8\u05D9 \u05D7\u05DC\u05DC');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](2, 'div', 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](3, 'div', 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](4, 'div', 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](5, 'input', 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](6, 'div', 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](7, 'input', 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](8, 'div', 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](9, 'div', 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](10, 'input', 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](11, 'div', 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](12, 'div', 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](13, 'div', 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](14, 'textarea', 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                15,
                SlainFormComponent_p_15_Template,
                2,
                0,
                'p',
                8
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](16, 'button', 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'click',
                function SlainFormComponent_Template_button_click_16_listener() {
                  return ctx.onSubmit();
                }
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                17,
                ' \u05DC\u05D0\u05D9\u05E9\u05D5\u05E8 \u05D4\u05E4\u05E8\u05D8\u05D9\u05DD '
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('formGroup', ctx.form);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵclassProp'](
                'invalid',
                !ctx.firstName.valid && ctx.firstName.touched
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵclassProp'](
                'invalid',
                !ctx.lastName.valid && ctx.lastName.touched
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵclassProp'](
                'invalid',
                !ctx.deathDate.valid && ctx.deathDate.touched
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('max', ctx.maxDate);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵclassProp'](
                'invalid',
                !ctx.story.valid && ctx.story.touched
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngIf', ctx.formInvalid);
            }
          },
          directives: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__['NgControlStatusGroup'],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__['FormGroupDirective'],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__['DefaultValueAccessor'],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__['NgControlStatus'],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__['FormControlName'],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__['NgIf']
          ],
          styles: [
            '.form[_ngcontent-%COMP%] {\n  max-width: 770px;\n  margin: auto;\n}\n.form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%] {\n  display: flex;\n}\n@media only screen and (max-width: 768px) {\n  .form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%] {\n    padding: 5px;\n  }\n}\n.form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n  flex: 1;\n  margin: 0 5px;\n}\n@media only screen and (min-width: 768px) {\n  .form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n    padding-top: 10px;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  .form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n    padding-top: 15px;\n  }\n}\n@media only screen and (max-width: 768px) {\n  .form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n    margin: 0;\n    padding: 0 5px;\n  }\n}\n.form[_ngcontent-%COMP%]   .sumbit-button[_ngcontent-%COMP%] {\n  margin-top: 40px;\n}\n@media only screen and (max-width: 768px) {\n  .form[_ngcontent-%COMP%]   .sumbit-button[_ngcontent-%COMP%] {\n    margin-top: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVsbC9zbGFpbi1mb3JtL0M6XFxVc2Vyc1xcVGVoaWxhXFxsYXN0XFxvdXJCcm9cXG91ci1icm90aGVycy13ZWIvc3JjXFxhcHBcXHRlbGxcXHNsYWluLWZvcm1cXHNsYWluLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RlbGwvc2xhaW4tZm9ybS9zbGFpbi1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0FDQ0Y7QURDRTtFQUNFLGFBQUE7QUNDSjtBRENJO0VBSEY7SUFJSSxZQUFBO0VDRUo7QUFDRjtBREFJO0VBQ0UsT0FBQTtFQUVBLGFBQUE7QUNDTjtBRENNO0VBTEY7SUFNSSxpQkFBQTtFQ0VOO0FBQ0Y7QURBTTtFQVRGO0lBVUksaUJBQUE7RUNHTjtBQUNGO0FERE07RUFiRjtJQWNJLFNBQUE7SUFDQSxjQUFBO0VDSU47QUFDRjtBREFFO0VBQ0UsZ0JBQUE7QUNFSjtBREFJO0VBSEY7SUFJSSxnQkFBQTtFQ0dKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC90ZWxsL3NsYWluLWZvcm0vc2xhaW4tZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtIHtcclxuICBtYXgtd2lkdGg6IDc3MHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuXHJcbiAgLmZvcm0tcm93IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbCB7XHJcbiAgICAgIGZsZXg6IDE7XHJcblxyXG4gICAgICBtYXJnaW46IDAgNXB4O1xyXG5cclxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgNXB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuc3VtYml0LWJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG5cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLmZvcm0ge1xuICBtYXgtd2lkdGg6IDc3MHB4O1xuICBtYXJnaW46IGF1dG87XG59XG4uZm9ybSAuZm9ybS1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuZm9ybSAuZm9ybS1yb3cge1xuICAgIHBhZGRpbmc6IDVweDtcbiAgfVxufVxuLmZvcm0gLmZvcm0tcm93IC5jb2wge1xuICBmbGV4OiAxO1xuICBtYXJnaW46IDAgNXB4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAuZm9ybSAuZm9ybS1yb3cgLmNvbCB7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gIC5mb3JtIC5mb3JtLXJvdyAuY29sIHtcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuZm9ybSAuZm9ybS1yb3cgLmNvbCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDAgNXB4O1xuICB9XG59XG4uZm9ybSAuc3VtYml0LWJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5mb3JtIC5zdW1iaXQtYnV0dG9uIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICB9XG59Il19 */'
          ]
        });
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            SlainFormComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                args: [
                  {
                    selector: 'app-slain-form',
                    templateUrl: './slain-form.component.html',
                    styleUrls: ['./slain-form.component.scss']
                  }
                ]
              }
            ],
            function() {
              return [
                {
                  type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__['FormBuilder']
                },
                {
                  type: _shared_services_utils_service__WEBPACK_IMPORTED_MODULE_2__['UtilsService']
                },
                {
                  type: _angular_router__WEBPACK_IMPORTED_MODULE_3__['Router']
                }
              ];
            },
            {
              slain: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input']
                }
              ],
              submit: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Output']
                }
              ]
            }
          );
        })();
        /***/
      },

    /***/
    './src/app/tell/tell.module.ts':
      /*!*************************************!*\
    !*** ./src/app/tell/tell.module.ts ***!
    \*************************************/

      /*! exports provided: TellModule */

      /***/
      function srcAppTellTellModuleTs(module, __webpack_exports__, __webpack_require__) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'TellModule', function() {
          return TellModule;
        });
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */

        var _slain_form_slain_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./slain-form/slain-form.component */
          './src/app/tell/slain-form/slain-form.component.ts'
        );
        /* harmony import */

        var _bereaved_profile_form_bereaved_profile_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./bereaved-profile-form/bereaved-profile-form.component */
          './src/app/tell/bereaved-profile-form/bereaved-profile-form.component.ts'
        );
        /* harmony import */

        var _bereaved_guidance_form_bereaved_guidance_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./bereaved-guidance-form/bereaved-guidance-form.component */
          './src/app/tell/bereaved-guidance-form/bereaved-guidance-form.component.ts'
        );
        /* harmony import */

        var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @angular/forms */
          './node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js'
        );
        /* harmony import */

        var _shared_components_places_select_places_select_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../shared/components/places-select/places-select.module */
          './src/app/shared/components/places-select/places-select.module.ts'
        );
        /* harmony import */

        var _shared_components_checkbox_checkbox_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../shared/components/checkbox/checkbox.module */
          './src/app/shared/components/checkbox/checkbox.module.ts'
        );
        /* harmony import */

        var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! @angular/common */
          './node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js'
        );
        /* harmony import */

        var _bereaved_intro_bereaved_intro_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ./bereaved-intro/bereaved-intro.component */
          './src/app/tell/bereaved-intro/bereaved-intro.component.ts'
        );

        var api = [
          _slain_form_slain_form_component__WEBPACK_IMPORTED_MODULE_1__['SlainFormComponent'],
          _bereaved_profile_form_bereaved_profile_form_component__WEBPACK_IMPORTED_MODULE_2__[
            'BereavedProfileFormComponent'
          ],
          _bereaved_guidance_form_bereaved_guidance_form_component__WEBPACK_IMPORTED_MODULE_3__[
            'BereavedGuidanceFormComponent'
          ],
          _bereaved_intro_bereaved_intro_component__WEBPACK_IMPORTED_MODULE_8__['BereavedIntroComponent']
        ];

        var TellModule = function TellModule() {
          _classCallCheck(this, TellModule);
        };

        TellModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineNgModule']({
          type: TellModule
        });
        TellModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineInjector']({
          factory: function TellModule_Factory(t) {
            return new (t || TellModule)();
          },
          imports: [
            [
              _angular_forms__WEBPACK_IMPORTED_MODULE_4__['ReactiveFormsModule'],
              _shared_components_places_select_places_select_module__WEBPACK_IMPORTED_MODULE_5__['PlacesSelectModule'],
              _shared_components_checkbox_checkbox_module__WEBPACK_IMPORTED_MODULE_6__['CheckboxModule'],
              _angular_common__WEBPACK_IMPORTED_MODULE_7__['CommonModule']
            ]
          ]
        });

        (function() {
          (typeof ngJitMode === 'undefined' || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵsetNgModuleScope'](TellModule, {
              declarations: [
                _slain_form_slain_form_component__WEBPACK_IMPORTED_MODULE_1__['SlainFormComponent'],
                _bereaved_profile_form_bereaved_profile_form_component__WEBPACK_IMPORTED_MODULE_2__[
                  'BereavedProfileFormComponent'
                ],
                _bereaved_guidance_form_bereaved_guidance_form_component__WEBPACK_IMPORTED_MODULE_3__[
                  'BereavedGuidanceFormComponent'
                ],
                _bereaved_intro_bereaved_intro_component__WEBPACK_IMPORTED_MODULE_8__['BereavedIntroComponent']
              ],
              imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__['ReactiveFormsModule'],
                _shared_components_places_select_places_select_module__WEBPACK_IMPORTED_MODULE_5__[
                  'PlacesSelectModule'
                ],
                _shared_components_checkbox_checkbox_module__WEBPACK_IMPORTED_MODULE_6__['CheckboxModule'],
                _angular_common__WEBPACK_IMPORTED_MODULE_7__['CommonModule']
              ],
              exports: [
                _slain_form_slain_form_component__WEBPACK_IMPORTED_MODULE_1__['SlainFormComponent'],
                _bereaved_profile_form_bereaved_profile_form_component__WEBPACK_IMPORTED_MODULE_2__[
                  'BereavedProfileFormComponent'
                ],
                _bereaved_guidance_form_bereaved_guidance_form_component__WEBPACK_IMPORTED_MODULE_3__[
                  'BereavedGuidanceFormComponent'
                ],
                _bereaved_intro_bereaved_intro_component__WEBPACK_IMPORTED_MODULE_8__['BereavedIntroComponent']
              ]
            });
        })();
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            TellModule,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'],
                args: [
                  {
                    declarations: api,
                    imports: [
                      _angular_forms__WEBPACK_IMPORTED_MODULE_4__['ReactiveFormsModule'],
                      _shared_components_places_select_places_select_module__WEBPACK_IMPORTED_MODULE_5__[
                        'PlacesSelectModule'
                      ],
                      _shared_components_checkbox_checkbox_module__WEBPACK_IMPORTED_MODULE_6__['CheckboxModule'],
                      _angular_common__WEBPACK_IMPORTED_MODULE_7__['CommonModule']
                    ],
                    exports: api
                  }
                ]
              }
            ],
            null,
            null
          );
        })();
        /***/
      }
  }
]);
//# sourceMappingURL=tell-page-tell-page-module-es5.js.map
