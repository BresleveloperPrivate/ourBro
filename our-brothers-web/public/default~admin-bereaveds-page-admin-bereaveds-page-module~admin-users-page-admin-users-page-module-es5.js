function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError(
    'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
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

function _iterableToArray(iter) {
  if (typeof Symbol !== 'undefined' && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
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
  ['default~admin-bereaveds-page-admin-bereaveds-page-module~admin-users-page-admin-users-page-module'],
  {
    /***/
    './src/app/shared/components/select/select.component.ts':
      /*!**************************************************************!*\
    !*** ./src/app/shared/components/select/select.component.ts ***!
    \**************************************************************/

      /*! exports provided: SelectComponent */

      /***/
      function srcAppSharedComponentsSelectSelectComponentTs(module, __webpack_exports__, __webpack_require__) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'SelectComponent', function() {
          return SelectComponent;
        });
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */

        var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/common */
          './node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js'
        );

        function SelectComponent_ng_template_3_div_0_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div', 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }

          if (rf & 2) {
            var v_r272 = ctx.$implicit;

            var ctx_r271 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext'](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
              'title',
              ctx_r271.optionsMap[v_r272].details || ''
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate1'](
              ' ',
              ctx_r271.optionsMap[v_r272].label,
              ' '
            );
          }
        }

        function SelectComponent_ng_template_3_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
              0,
              SelectComponent_ng_template_3_div_0_Template,
              2,
              2,
              'div',
              7
            );
          }

          if (rf & 2) {
            var ctx_r266 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngForOf', ctx_r266.values);
          }
        }

        function SelectComponent_ng_template_4_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div', 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }

          if (rf & 2) {
            var ctx_r268 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate'](ctx_r268.placeholder);
          }
        }

        function SelectComponent_div_6_Template(rf, ctx) {
          if (rf & 1) {
            var _r274 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵgetCurrentView']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div', 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](1, 'span', 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
              'click',
              function SelectComponent_div_6_Template_span_click_1_listener() {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵrestoreView'](_r274);

                var ctx_r273 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();

                return ctx_r273.valueChange.emit(null);
              }
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](2, 'x');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](3, 'span', 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }
        }

        function SelectComponent_div_7_div_1_Template(rf, ctx) {
          if (rf & 1) {
            var _r278 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵgetCurrentView']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div', 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
              'click',
              function SelectComponent_div_7_div_1_Template_div_click_0_listener() {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵrestoreView'](_r278);

                var option_r276 = ctx.$implicit;

                var ctx_r277 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext'](2);

                return ctx_r277.onSelectOption(option_r276.value);
              }
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }

          if (rf & 2) {
            var option_r276 = ctx.$implicit;

            var ctx_r275 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext'](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵclassProp'](
              'active',
              ctx_r275.selectedMap[option_r276.value]
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('title', option_r276.details || '');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate1'](' ', option_r276.label, ' ');
          }
        }

        function SelectComponent_div_7_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div', 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
              1,
              SelectComponent_div_7_div_1_Template,
              2,
              4,
              'div',
              14
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }

          if (rf & 2) {
            var ctx_r270 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngForOf', ctx_r270.options);
          }
        }

        var _c0 = function _c0(a0, a1) {
          return {
            readonly: a0,
            editable: a1
          };
        };

        var SelectComponent = /*#__PURE__*/ (function() {
          function SelectComponent(elementRef) {
            _classCallCheck(this, SelectComponent);

            this.elementRef = elementRef;
            this.placeholder = 'לא נבחר';
            this.multiple = false;
            this.readonly = false;
            this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            this.dirty = false;
            this.editable = false;
            this.open = false;
          }

          _createClass(SelectComponent, [
            {
              key: 'clickout',
              value: function clickout(event) {
                if (!this.elementRef.nativeElement.contains(event.target)) {
                  if (this.multiple && this.open && this.dirty) {
                    this.valueChange.emit(this.values);
                  }

                  this.open = false;
                  this.editable = false;
                }
              }
            },
            {
              key: 'onSelectOption',
              value: function onSelectOption(value) {
                if (!this.multiple) {
                  this.valueChange.emit(value);
                  this.open = false;
                } else {
                  this.dirty = true;

                  if (this.selectedMap[value]) {
                    this.value = this.values.filter(function(v) {
                      return v !== value;
                    });
                  } else {
                    this.value = [].concat(_toConsumableArray(this.values), [value]);
                  }
                }
              }
            },
            {
              key: 'value',
              set: function set(value) {
                if (Array.isArray(value)) {
                  this.values = value;
                } else {
                  this.values = value ? [value] : [];
                }

                this.selectedMap = this.values.reduce(function(acc, curr) {
                  return Object.assign(Object.assign({}, acc), _defineProperty({}, curr, true));
                }, {});
              }
            },
            {
              key: 'options',
              set: function set(options) {
                this._options = options;
                this.optionsMap = this.options.reduce(function(acc, curr) {
                  return Object.assign(Object.assign({}, acc), _defineProperty({}, curr.value, curr));
                }, {});
              },
              get: function get() {
                return this._options;
              }
            }
          ]);

          return SelectComponent;
        })();

        SelectComponent.ɵfac = function SelectComponent_Factory(t) {
          return new (t || SelectComponent)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef']
            )
          );
        };

        SelectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineComponent']({
          type: SelectComponent,
          selectors: [['app-select']],
          hostBindings: function SelectComponent_HostBindings(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'click',
                function SelectComponent_click_HostBindingHandler($event) {
                  return ctx.clickout($event);
                },
                false,
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵresolveDocument']
              );
            }
          },
          inputs: {
            value: 'value',
            options: 'options',
            placeholder: 'placeholder',
            multiple: 'multiple',
            readonly: 'readonly'
          },
          outputs: {
            valueChange: 'valueChange'
          },
          decls: 8,
          vars: 8,
          consts: [
            [1, 'select-container', 3, 'ngClass'],
            [1, 'value-container', 3, 'click'],
            [1, 'values'],
            [3, 'ngIf', 'ngIfElse'],
            ['empty', ''],
            ['class', 'controls', 4, 'ngIf'],
            ['class', 'options', 4, 'ngIf'],
            ['class', 'value', 3, 'title', 4, 'ngFor', 'ngForOf'],
            [1, 'value', 3, 'title'],
            [1, 'value'],
            [1, 'controls'],
            [1, 'remove-icon', 3, 'click'],
            [1, 'triangle-icon'],
            [1, 'options'],
            ['class', 'option', 3, 'active', 'title', 'click', 4, 'ngFor', 'ngForOf'],
            [1, 'option', 3, 'title', 'click']
          ],
          template: function SelectComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div', 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](1, 'div', 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'click',
                function SelectComponent_Template_div_click_1_listener() {
                  ctx.open = !ctx.readonly && ctx.editable;
                  return (ctx.editable = !ctx.readonly);
                }
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](2, 'div', 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                3,
                SelectComponent_ng_template_3_Template,
                1,
                1,
                'ng-template',
                3
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                4,
                SelectComponent_ng_template_4_Template,
                2,
                1,
                'ng-template',
                null,
                4,
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplateRefExtractor']
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                6,
                SelectComponent_div_6_Template,
                4,
                0,
                'div',
                5
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                7,
                SelectComponent_div_7_Template,
                2,
                1,
                'div',
                6
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            }

            if (rf & 2) {
              var _r267 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵreference'](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
                'ngClass',
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpureFunction2'](5, _c0, ctx.readonly, ctx.editable)
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngIf', ctx.values.length)('ngIfElse', _r267);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngIf', ctx.editable);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngIf', ctx.open);
            }
          },
          directives: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__['NgClass'],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__['NgIf'],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__['NgForOf']
          ],
          styles: [
            '.select-container[_ngcontent-%COMP%] {\n  border: none;\n  color: #818181;\n}\n.select-container[_ngcontent-%COMP%]   .value-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0 2px;\n}\n.select-container[_ngcontent-%COMP%]   .value-container[_ngcontent-%COMP%]   .values[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.select-container[_ngcontent-%COMP%]   .value-container[_ngcontent-%COMP%]   .values[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  flex: 1;\n  min-height: 1em;\n  cursor: pointer;\n}\n.select-container[_ngcontent-%COMP%]   .value-container[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  padding: 0 2px;\n}\n.select-container[_ngcontent-%COMP%]   .value-container[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   .remove-icon[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin-left: 5px;\n}\n.select-container[_ngcontent-%COMP%]   .value-container[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   .triangle-icon[_ngcontent-%COMP%] {\n  width: 15px;\n  display: inline-block;\n  position: relative;\n}\n.select-container[_ngcontent-%COMP%]   .value-container[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   .triangle-icon[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  border: 5px solid transparent;\n  border-top: 5px solid #818181;\n}\n.select-container.editable[_ngcontent-%COMP%] {\n  border: 1px solid #00a099;\n}\n.select-container.readonly[_ngcontent-%COMP%]   .value-container[_ngcontent-%COMP%] {\n  cursor: default;\n}\n.select-container[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%] {\n  position: absolute;\n  border: 1px solid #818181;\n  background-color: white;\n}\n.select-container[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  border-top: 1px solid #818181;\n  cursor: pointer;\n}\n.select-container[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   .option.active[_ngcontent-%COMP%] {\n  background-color: rgba(0, 160, 152, 0.3);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc2VsZWN0L0M6XFxVc2Vyc1xcVGVoaWxhXFxsYXN0XFxvdXJCcm9cXG91ci1icm90aGVycy13ZWIvc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50c1xcc2VsZWN0XFxzZWxlY3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3NlbGVjdC9zZWxlY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxZQUFBO0VBQ0EsY0FKVTtBQ0daO0FER0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDREo7QURHSTtFQUNFLE9BQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUNETjtBREdNO0VBQ0UsT0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDRFI7QURLSTtFQUNFLGNBQUE7RUFDQSxjQUFBO0FDSE47QURLTTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQ0hSO0FETU07RUFDRSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQ0pSO0FES1E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0FDSFY7QURTRTtFQUNFLHlCQUFBO0FDUEo7QURXSTtFQUNFLGVBQUE7QUNUTjtBRGFFO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0FDWEo7QURhSTtFQUNFLGlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0FDWE47QURhTTtFQUNFLHdDQUFBO0FDWFIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9zZWxlY3Qvc2VsZWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHRleHRDb2xvcjogcmdiKDEyOSwgMTI5LCAxMjkpO1xyXG5cclxuLnNlbGVjdC1jb250YWluZXIge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogJHRleHRDb2xvcjtcclxuXHJcbiAgLnZhbHVlLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDAgMnB4O1xyXG5cclxuICAgIC52YWx1ZXMge1xyXG4gICAgICBmbGV4OiAxO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICAgLnZhbHVlIHtcclxuICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDFlbTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuY29udHJvbHMge1xyXG4gICAgICBmbGV4OiAwIDAgYXV0bztcclxuICAgICAgcGFkZGluZzogMCAycHg7XHJcblxyXG4gICAgICAucmVtb3ZlLWljb24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudHJpYW5nbGUtaWNvbiB7XHJcbiAgICAgICAgd2lkdGg6IDE1cHg7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICAgICAgYm9yZGVyOiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICBib3JkZXItdG9wOiA1cHggc29saWQgJHRleHRDb2xvcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuZWRpdGFibGUge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDAsIDE2MCwgMTUzKTtcclxuICB9XHJcblxyXG4gICYucmVhZG9ubHkge1xyXG4gICAgLnZhbHVlLWNvbnRhaW5lciB7XHJcbiAgICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5vcHRpb25zIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICR0ZXh0Q29sb3I7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgICAub3B0aW9uIHtcclxuICAgICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAkdGV4dENvbG9yO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxNjAsIDE1MiwgMC4zKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIuc2VsZWN0LWNvbnRhaW5lciB7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICM4MTgxODE7XG59XG4uc2VsZWN0LWNvbnRhaW5lciAudmFsdWUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMCAycHg7XG59XG4uc2VsZWN0LWNvbnRhaW5lciAudmFsdWUtY29udGFpbmVyIC52YWx1ZXMge1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLnNlbGVjdC1jb250YWluZXIgLnZhbHVlLWNvbnRhaW5lciAudmFsdWVzIC52YWx1ZSB7XG4gIGZsZXg6IDE7XG4gIG1pbi1oZWlnaHQ6IDFlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnNlbGVjdC1jb250YWluZXIgLnZhbHVlLWNvbnRhaW5lciAuY29udHJvbHMge1xuICBmbGV4OiAwIDAgYXV0bztcbiAgcGFkZGluZzogMCAycHg7XG59XG4uc2VsZWN0LWNvbnRhaW5lciAudmFsdWUtY29udGFpbmVyIC5jb250cm9scyAucmVtb3ZlLWljb24ge1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG4uc2VsZWN0LWNvbnRhaW5lciAudmFsdWUtY29udGFpbmVyIC5jb250cm9scyAudHJpYW5nbGUtaWNvbiB7XG4gIHdpZHRoOiAxNXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5zZWxlY3QtY29udGFpbmVyIC52YWx1ZS1jb250YWluZXIgLmNvbnRyb2xzIC50cmlhbmdsZS1pY29uOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgYm9yZGVyOiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci10b3A6IDVweCBzb2xpZCAjODE4MTgxO1xufVxuLnNlbGVjdC1jb250YWluZXIuZWRpdGFibGUge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDBhMDk5O1xufVxuLnNlbGVjdC1jb250YWluZXIucmVhZG9ubHkgLnZhbHVlLWNvbnRhaW5lciB7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cbi5zZWxlY3QtY29udGFpbmVyIC5vcHRpb25zIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjODE4MTgxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5zZWxlY3QtY29udGFpbmVyIC5vcHRpb25zIC5vcHRpb24ge1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM4MTgxODE7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5zZWxlY3QtY29udGFpbmVyIC5vcHRpb25zIC5vcHRpb24uYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxNjAsIDE1MiwgMC4zKTtcbn0iXX0= */'
          ],
          changeDetection: 0
        });
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            SelectComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                args: [
                  {
                    selector: 'app-select',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__['ChangeDetectionStrategy'].OnPush,
                    templateUrl: './select.component.html',
                    styleUrls: ['./select.component.scss']
                  }
                ]
              }
            ],
            function() {
              return [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef']
                }
              ];
            },
            {
              value: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input']
                }
              ],
              options: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input']
                }
              ],
              placeholder: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input']
                }
              ],
              multiple: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input']
                }
              ],
              readonly: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input']
                }
              ],
              valueChange: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Output']
                }
              ],
              clickout: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['HostListener'],
                  args: ['document:click', ['$event']]
                }
              ]
            }
          );
        })();
        /***/
      },

    /***/
    './src/app/shared/components/select/select.module.ts':
      /*!***********************************************************!*\
    !*** ./src/app/shared/components/select/select.module.ts ***!
    \***********************************************************/

      /*! exports provided: SelectModule */

      /***/
      function srcAppSharedComponentsSelectSelectModuleTs(module, __webpack_exports__, __webpack_require__) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'SelectModule', function() {
          return SelectModule;
        });
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */

        var _select_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./select.component */
          './src/app/shared/components/select/select.component.ts'
        );
        /* harmony import */

        var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/common */
          './node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js'
        );

        var SelectModule = function SelectModule() {
          _classCallCheck(this, SelectModule);
        };

        SelectModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineNgModule']({
          type: SelectModule
        });
        SelectModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineInjector']({
          factory: function SelectModule_Factory(t) {
            return new (t || SelectModule)();
          },
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__['CommonModule']]]
        });

        (function() {
          (typeof ngJitMode === 'undefined' || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵsetNgModuleScope'](SelectModule, {
              declarations: [_select_component__WEBPACK_IMPORTED_MODULE_1__['SelectComponent']],
              imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__['CommonModule']],
              exports: [_select_component__WEBPACK_IMPORTED_MODULE_1__['SelectComponent']]
            });
        })();
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            SelectModule,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'],
                args: [
                  {
                    declarations: [_select_component__WEBPACK_IMPORTED_MODULE_1__['SelectComponent']],
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__['CommonModule']],
                    exports: [_select_component__WEBPACK_IMPORTED_MODULE_1__['SelectComponent']]
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
    './src/app/shared/pipes/phone.pipe.ts':
      /*!********************************************!*\
    !*** ./src/app/shared/pipes/phone.pipe.ts ***!
    \********************************************/

      /*! exports provided: PhonePipe */

      /***/
      function srcAppSharedPipesPhonePipeTs(module, __webpack_exports__, __webpack_require__) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'PhonePipe', function() {
          return PhonePipe;
        });
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */

        var _services_utils_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../services/utils.service */
          './src/app/shared/services/utils.service.ts'
        );

        var PhonePipe = /*#__PURE__*/ (function() {
          function PhonePipe(utilsService) {
            _classCallCheck(this, PhonePipe);

            this.utilsService = utilsService;
          }

          _createClass(PhonePipe, [
            {
              key: 'transform',
              value: function transform(phoneNumber) {
                if (!phoneNumber || phoneNumber.length < 9) {
                  return phoneNumber;
                } else {
                  var local = this.utilsService.toLocalPhoneNumber(phoneNumber);
                  return ''
                    .concat(local.substring(0, 3), '-')
                    .concat(local.substring(3, 6), '-')
                    .concat(local.substring(6));
                }
              }
            }
          ]);

          return PhonePipe;
        })();

        PhonePipe.ɵfac = function PhonePipe_Factory(t) {
          return new (t || PhonePipe)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
              _services_utils_service__WEBPACK_IMPORTED_MODULE_1__['UtilsService']
            )
          );
        };

        PhonePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefinePipe']({
          name: 'phone',
          type: PhonePipe,
          pure: true
        });
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            PhonePipe,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Pipe'],
                args: [
                  {
                    name: 'phone'
                  }
                ]
              }
            ],
            function() {
              return [
                {
                  type: _services_utils_service__WEBPACK_IMPORTED_MODULE_1__['UtilsService']
                }
              ];
            },
            null
          );
        })();
        /***/
      },

    /***/
    './src/app/shared/pipes/pipes.module.ts':
      /*!**********************************************!*\
    !*** ./src/app/shared/pipes/pipes.module.ts ***!
    \**********************************************/

      /*! exports provided: PipesModule */

      /***/
      function srcAppSharedPipesPipesModuleTs(module, __webpack_exports__, __webpack_require__) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'PipesModule', function() {
          return PipesModule;
        });
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */

        var _phone_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./phone.pipe */
          './src/app/shared/pipes/phone.pipe.ts'
        );
        /* harmony import */

        var _seniority_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./seniority.pipe */
          './src/app/shared/pipes/seniority.pipe.ts'
        );
        /* harmony import */

        var _safe_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./safe.pipe */
          './src/app/shared/pipes/safe.pipe.ts'
        );

        var pipes = [
          _phone_pipe__WEBPACK_IMPORTED_MODULE_1__['PhonePipe'],
          _seniority_pipe__WEBPACK_IMPORTED_MODULE_2__['SeniorityPipe'],
          _safe_pipe__WEBPACK_IMPORTED_MODULE_3__['SafePipe']
        ];

        var PipesModule = function PipesModule() {
          _classCallCheck(this, PipesModule);
        };

        PipesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineNgModule']({
          type: PipesModule
        });
        PipesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineInjector']({
          factory: function PipesModule_Factory(t) {
            return new (t || PipesModule)();
          }
        });

        (function() {
          (typeof ngJitMode === 'undefined' || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵsetNgModuleScope'](PipesModule, {
              declarations: [
                _phone_pipe__WEBPACK_IMPORTED_MODULE_1__['PhonePipe'],
                _seniority_pipe__WEBPACK_IMPORTED_MODULE_2__['SeniorityPipe'],
                _safe_pipe__WEBPACK_IMPORTED_MODULE_3__['SafePipe']
              ],
              exports: [
                _phone_pipe__WEBPACK_IMPORTED_MODULE_1__['PhonePipe'],
                _seniority_pipe__WEBPACK_IMPORTED_MODULE_2__['SeniorityPipe'],
                _safe_pipe__WEBPACK_IMPORTED_MODULE_3__['SafePipe']
              ]
            });
        })();
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            PipesModule,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'],
                args: [
                  {
                    declarations: pipes,
                    exports: pipes
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
    './src/app/shared/pipes/safe.pipe.ts':
      /*!*******************************************!*\
    !*** ./src/app/shared/pipes/safe.pipe.ts ***!
    \*******************************************/

      /*! exports provided: SafePipe */

      /***/
      function srcAppSharedPipesSafePipeTs(module, __webpack_exports__, __webpack_require__) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'SafePipe', function() {
          return SafePipe;
        });
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */

        var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/platform-browser */
          './node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js'
        );

        var SafePipe = /*#__PURE__*/ (function() {
          function SafePipe(sanitizer) {
            _classCallCheck(this, SafePipe);

            this.sanitizer = sanitizer;
          }

          _createClass(SafePipe, [
            {
              key: 'transform',
              value: function transform(url) {
                return this.sanitizer.bypassSecurityTrustResourceUrl(url);
              }
            }
          ]);

          return SafePipe;
        })();

        SafePipe.ɵfac = function SafePipe_Factory(t) {
          return new (t || SafePipe)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
              _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__['DomSanitizer']
            )
          );
        };

        SafePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefinePipe']({
          name: 'safe',
          type: SafePipe,
          pure: true
        });
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            SafePipe,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Pipe'],
                args: [
                  {
                    name: 'safe'
                  }
                ]
              }
            ],
            function() {
              return [
                {
                  type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__['DomSanitizer']
                }
              ];
            },
            null
          );
        })();
        /***/
      },

    /***/
    './src/app/shared/pipes/seniority.pipe.ts':
      /*!************************************************!*\
    !*** ./src/app/shared/pipes/seniority.pipe.ts ***!
    \************************************************/

      /*! exports provided: SeniorityPipe */

      /***/
      function srcAppSharedPipesSeniorityPipeTs(module, __webpack_exports__, __webpack_require__) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'SeniorityPipe', function() {
          return SeniorityPipe;
        });
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );

        var SeniorityPipe = /*#__PURE__*/ (function() {
          function SeniorityPipe() {
            _classCallCheck(this, SeniorityPipe);
          }

          _createClass(SeniorityPipe, [
            {
              key: 'transform',
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
            }
          ]);

          return SeniorityPipe;
        })();

        SeniorityPipe.ɵfac = function SeniorityPipe_Factory(t) {
          return new (t || SeniorityPipe)();
        };

        SeniorityPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefinePipe']({
          name: 'seniority',
          type: SeniorityPipe,
          pure: true
        });
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            SeniorityPipe,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Pipe'],
                args: [
                  {
                    name: 'seniority'
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
//# sourceMappingURL=default~admin-bereaveds-page-admin-bereaveds-page-module~admin-users-page-admin-users-page-module-es5.js.map
