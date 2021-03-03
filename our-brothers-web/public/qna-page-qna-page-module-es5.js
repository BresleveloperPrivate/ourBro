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
  ['qna-page-qna-page-module'],
  {
    /***/
    './src/app/qna/page/qna-page.component.ts':
      /*!************************************************!*\
    !*** ./src/app/qna/page/qna-page.component.ts ***!
    \************************************************/

      /*! exports provided: QnaPageComponent */

      /***/
      function srcAppQnaPageQnaPageComponentTs(module, __webpack_exports__, __webpack_require__) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'QnaPageComponent', function() {
          return QnaPageComponent;
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

        var _qnas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./qnas */
          './src/app/qna/page/qnas.ts'
        );
        /* harmony import */

        var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../shared/services/auth.service */
          './src/app/shared/services/auth.service.ts'
        );
        /* harmony import */

        var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @angular/common */
          './node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js'
        );
        /* harmony import */

        var _qna_list_qna_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../qna-list/qna-list.component */
          './src/app/qna/qna-list/qna-list.component.ts'
        );

        function QnaPageComponent_ng_container_25_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementContainerStart'](0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](1, 'app-qna-list', 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementContainerEnd']();
          }

          if (rf & 2) {
            var ctx_r259 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('qnaList', ctx_r259.qnaBrothers);
          }
        }

        function QnaPageComponent_ng_container_26_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementContainerStart'](0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](1, 'app-qna-list', 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementContainerEnd']();
          }

          if (rf & 2) {
            var ctx_r260 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('qnaList', ctx_r260.qnaHosts);
          }
        }

        function QnaPageComponent_ng_container_27_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementContainerStart'](0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](1, 'app-qna-list', 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementContainerEnd']();
          }

          if (rf & 2) {
            var ctx_r261 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('qnaList', ctx_r261.qnaParticipates);
          }
        }

        var QnaPageComponent = /*#__PURE__*/ (function() {
          function QnaPageComponent(authService) {
            _classCallCheck(this, QnaPageComponent);

            this.authService = authService;
            this.UserRole = models__WEBPACK_IMPORTED_MODULE_1__['UserRole'];
            this.qnaBrothers = _qnas__WEBPACK_IMPORTED_MODULE_2__['qnaBorthers'];
            this.qnaHosts = _qnas__WEBPACK_IMPORTED_MODULE_2__['qnaHosts'];
            this.qnaParticipates = _qnas__WEBPACK_IMPORTED_MODULE_2__['qnaParticipates'];
          }

          _createClass(QnaPageComponent, [
            {
              key: 'ngOnInit',
              value: function ngOnInit() {
                var _this = this;

                this.authService.user.subscribe(function(user) {
                  _this.currentQType = (user && user.role) || models__WEBPACK_IMPORTED_MODULE_1__['UserRole'].bereaved;
                });
              }
            }
          ]);

          return QnaPageComponent;
        })();

        QnaPageComponent.ɵfac = function QnaPageComponent_Factory(t) {
          return new (t || QnaPageComponent)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
              _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__['AuthService']
            )
          );
        };

        QnaPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineComponent']({
          type: QnaPageComponent,
          selectors: [['app-qna-page']],
          decls: 28,
          vars: 10,
          consts: [
            [
              'src',
              '../../../assets/img/qnaHeader.jpg.png',
              'alt',
              'Questions and Answers Page Header Image',
              1,
              'image-header'
            ],
            [1, 'site-divider'],
            ['data-aos', 'fade-up', 'data-aos-duration', '1000', 1, 'small-heading'],
            ['data-aos', 'fade-up', 'data-aos-duration', '1000', 1, 'medium-heading'],
            [
              'href',
              'https://connect2care.carmel6000.com/#/info',
              1,
              'action-header-support-us',
              'site-button',
              'connectqne'
            ],
            [1, 'qna-types-list-container'],
            [1, 'container'],
            [1, 'role-buttons'],
            [1, 'role-button', 3, 'click'],
            [1, 'qna-list-wrapper'],
            [3, 'ngSwitch'],
            [4, 'ngSwitchCase'],
            [3, 'qnaList']
          ],
          template: function QnaPageComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](0, 'img', 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](1, 'div', 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](2, 'h1', 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                3,
                ' \u05E9\u05D0\u05DC\u05D5\u05EA \u05D5\u05EA\u05E9\u05D5\u05D1\u05D5\u05EA\n'
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](4, 'h2', 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                5,
                ' \u05E2\u05D5\u05E0\u05D9\u05DD \u05E2\u05DC \u05D4\u05DB\u05DC\n'
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](6, 'a', 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](7, 'span');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                8,
                '\u05E9\u05D0\u05DC\u05D5\u05EA \u05D5\u05EA\u05E9\u05D5\u05D1\u05D5\u05EA'
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](9, 'span');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                10,
                ' \u05DE\u05EA\u05D7\u05D1\u05E8\u05D9\u05DD \u05D5\u05D6\u05D5\u05DB\u05E8\u05D9\u05DD '
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](11, 'br');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](12, 'br');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](13, 'div', 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](14, 'div', 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](15, 'div', 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](16, 'div', 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'click',
                function QnaPageComponent_Template_div_click_16_listener() {
                  return (ctx.currentQType = ctx.UserRole.bereaved);
                }
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](17, ' \u05D0\u05D7\u05D9\u05DD ');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](18, 'div', 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'click',
                function QnaPageComponent_Template_div_click_18_listener() {
                  return (ctx.currentQType = ctx.UserRole.host);
                }
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](19, ' \u05DE\u05D0\u05E8\u05D7\u05D9\u05DD ');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](20, 'div', 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'click',
                function QnaPageComponent_Template_div_click_20_listener() {
                  return (ctx.currentQType = ctx.UserRole.participate);
                }
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](21, ' \u05DE\u05E9\u05EA\u05EA\u05E4\u05D9\u05DD ');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](22, 'div', 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](23, 'div', 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementContainerStart'](24, 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                25,
                QnaPageComponent_ng_container_25_Template,
                2,
                1,
                'ng-container',
                11
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                26,
                QnaPageComponent_ng_container_26_Template,
                2,
                1,
                'ng-container',
                11
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                27,
                QnaPageComponent_ng_container_27_Template,
                2,
                1,
                'ng-container',
                11
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementContainerEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵclassProp'](
                'current',
                ctx.currentQType === ctx.UserRole.bereaved
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵclassProp'](
                'current',
                ctx.currentQType === ctx.UserRole.host
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵclassProp'](
                'current',
                ctx.currentQType === ctx.UserRole.participate
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngSwitch', ctx.currentQType);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngSwitchCase', ctx.UserRole.bereaved);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngSwitchCase', ctx.UserRole.host);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngSwitchCase', ctx.UserRole.participate);
            }
          },
          directives: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__['NgSwitch'],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__['NgSwitchCase'],
            _qna_list_qna_list_component__WEBPACK_IMPORTED_MODULE_5__['QnaListComponent']
          ],
          styles: [
            '.qna-types-list-container[_ngcontent-%COMP%] {\n  background-color: #00a099;\n  height: 278px;\n  margin-bottom: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n}\n@media only screen and (max-width: 768px) {\n  .qna-types-list-container[_ngcontent-%COMP%] {\n    margin-bottom: 30px;\n  }\n}\n.qna-types-list-container[_ngcontent-%COMP%]   .role-buttons[_ngcontent-%COMP%] {\n  display: flex;\n}\n@media only screen and (max-width: 768px) {\n  .qna-types-list-container[_ngcontent-%COMP%]   .role-buttons[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.qna-types-list-container[_ngcontent-%COMP%]   .role-buttons[_ngcontent-%COMP%]   .role-button[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 39px;\n  margin: 45px;\n  padding: 15px 20px;\n  border: 1px solid white;\n  cursor: pointer;\n  text-align: center;\n  font-family: "arbel";\n  color: white;\n  border-radius: 5px;\n}\n@media only screen and (max-width: 768px) {\n  .qna-types-list-container[_ngcontent-%COMP%]   .role-buttons[_ngcontent-%COMP%]   .role-button[_ngcontent-%COMP%] {\n    margin: 10px 45px 10px 45px;\n    font-size: 30px;\n    padding: 10px 20px;\n  }\n}\n@media only screen and (min-width: 768px) {\n  .qna-types-list-container[_ngcontent-%COMP%]   .role-buttons[_ngcontent-%COMP%]   .role-button[_ngcontent-%COMP%]:first-child {\n    margin-right: 0;\n  }\n}\n@media only screen and (min-width: 768px) {\n  .qna-types-list-container[_ngcontent-%COMP%]   .role-buttons[_ngcontent-%COMP%]   .role-button[_ngcontent-%COMP%]:last-child {\n    margin-left: 0;\n  }\n}\n.qna-types-list-container[_ngcontent-%COMP%]   .role-buttons[_ngcontent-%COMP%]   .role-button.current[_ngcontent-%COMP%] {\n  background-color: white;\n  color: #00a099;\n}\n.qna-list-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.connectqne[_ngcontent-%COMP%] {\n  background-color: #082551;\n  text-align: center;\n  margin-right: 40%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcW5hL3BhZ2UvQzpcXFVzZXJzXFxUZWhpbGFcXGxhc3RcXG91ckJyb1xcb3VyLWJyb3RoZXJzLXdlYi9zcmNcXGFwcFxccW5hXFxwYWdlXFxxbmEtcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcW5hL3BhZ2UvcW5hLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQU1BLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ0pGO0FESEU7RUFMRjtJQU1JLG1CQUFBO0VDTUY7QUFDRjtBRENFO0VBQ0UsYUFBQTtBQ0NKO0FEQ0k7RUFIRjtJQUlJLHNCQUFBO0VDRUo7QUFDRjtBREFJO0VBQ0UsT0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDRU47QURBTTtFQVpGO0lBYUksMkJBQUE7SUFDQSxlQUFBO0lBQ0Esa0JBQUE7RUNHTjtBQUNGO0FEQVE7RUFERjtJQUVJLGVBQUE7RUNHUjtBQUNGO0FEQ1E7RUFERjtJQUVJLGNBQUE7RUNFUjtBQUNGO0FEQ007RUFDRSx1QkFBQTtFQUNBLGNBQUE7QUNDUjtBREtBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FDRkY7QURJQTtFQUNDLHlCQUFBO0VBQ0Msa0JBQUE7RUFFRCxpQkFBQTtBQ0ZEIiwiZmlsZSI6InNyYy9hcHAvcW5hL3BhZ2UvcW5hLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucW5hLXR5cGVzLWxpc3QtY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMTYwLCAxNTMpO1xyXG4gIGhlaWdodDogMjc4cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICB9XHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG4gIC5yb2xlLWJ1dHRvbnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB9XHJcblxyXG4gICAgLnJvbGUtYnV0dG9uIHtcclxuICAgICAgZmxleDogMTtcclxuICAgICAgZm9udC1zaXplOiAzOXB4O1xyXG4gICAgICBtYXJnaW46IDQ1cHg7XHJcbiAgICAgIHBhZGRpbmc6IDE1cHggMjBweDtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBmb250LWZhbWlseTogJ2FyYmVsJztcclxuICAgICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG5cclxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgIG1hcmdpbjogMTBweCA0NXB4IDEwcHggNDVweDtcclxuICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgJi5jdXJyZW50IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBjb2xvcjogcmdiKDAsIDE2MCwgMTUzKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnFuYS1saXN0LXdyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLmNvbm5lY3RxbmUge1xyXG4gYmFja2dyb3VuZC1jb2xvcjogIzA4MjU1MTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgLy8vY3Vyc29yOiBwb2ludGVyO1xyXG4gbWFyZ2luLXJpZ2h0OiA0MCU7XHJcbiAgLy90ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuIiwiLnFuYS10eXBlcy1saXN0LWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGEwOTk7XG4gIGhlaWdodDogMjc4cHg7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5xbmEtdHlwZXMtbGlzdC1jb250YWluZXIge1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIH1cbn1cbi5xbmEtdHlwZXMtbGlzdC1jb250YWluZXIgLnJvbGUtYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5xbmEtdHlwZXMtbGlzdC1jb250YWluZXIgLnJvbGUtYnV0dG9ucyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufVxuLnFuYS10eXBlcy1saXN0LWNvbnRhaW5lciAucm9sZS1idXR0b25zIC5yb2xlLWJ1dHRvbiB7XG4gIGZsZXg6IDE7XG4gIGZvbnQtc2l6ZTogMzlweDtcbiAgbWFyZ2luOiA0NXB4O1xuICBwYWRkaW5nOiAxNXB4IDIwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiYXJiZWxcIjtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5xbmEtdHlwZXMtbGlzdC1jb250YWluZXIgLnJvbGUtYnV0dG9ucyAucm9sZS1idXR0b24ge1xuICAgIG1hcmdpbjogMTBweCA0NXB4IDEwcHggNDVweDtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5xbmEtdHlwZXMtbGlzdC1jb250YWluZXIgLnJvbGUtYnV0dG9ucyAucm9sZS1idXR0b246Zmlyc3QtY2hpbGQge1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAucW5hLXR5cGVzLWxpc3QtY29udGFpbmVyIC5yb2xlLWJ1dHRvbnMgLnJvbGUtYnV0dG9uOmxhc3QtY2hpbGQge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICB9XG59XG4ucW5hLXR5cGVzLWxpc3QtY29udGFpbmVyIC5yb2xlLWJ1dHRvbnMgLnJvbGUtYnV0dG9uLmN1cnJlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6ICMwMGEwOTk7XG59XG5cbi5xbmEtbGlzdC13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jb25uZWN0cW5lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA4MjU1MTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6IDQwJTtcbn0iXX0= */'
          ]
        });
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            QnaPageComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                args: [
                  {
                    selector: 'app-qna-page',
                    templateUrl: './qna-page.component.html',
                    styleUrls: ['./qna-page.component.scss']
                  }
                ]
              }
            ],
            function() {
              return [
                {
                  type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__['AuthService']
                }
              ];
            },
            null
          );
        })();
        /***/
      },

    /***/
    './src/app/qna/page/qna-page.module.ts':
      /*!*********************************************!*\
    !*** ./src/app/qna/page/qna-page.module.ts ***!
    \*********************************************/

      /*! exports provided: QnaPageModule */

      /***/
      function srcAppQnaPageQnaPageModuleTs(module, __webpack_exports__, __webpack_require__) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'QnaPageModule', function() {
          return QnaPageModule;
        });
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */

        var _qna_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./qna-page.component */
          './src/app/qna/page/qna-page.component.ts'
        );
        /* harmony import */

        var _qna_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../qna.module */
          './src/app/qna/qna.module.ts'
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

        var routes = [
          {
            path: '',
            component: _qna_page_component__WEBPACK_IMPORTED_MODULE_1__['QnaPageComponent']
          }
        ];

        var QnaPageModule = function QnaPageModule() {
          _classCallCheck(this, QnaPageModule);
        };

        QnaPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineNgModule']({
          type: QnaPageModule
        });
        QnaPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineInjector']({
          factory: function QnaPageModule_Factory(t) {
            return new (t || QnaPageModule)();
          },
          imports: [
            [
              _qna_module__WEBPACK_IMPORTED_MODULE_2__['QnaModule'],
              _angular_router__WEBPACK_IMPORTED_MODULE_3__['RouterModule'].forChild(routes),
              _angular_common__WEBPACK_IMPORTED_MODULE_4__['CommonModule']
            ]
          ]
        });

        (function() {
          (typeof ngJitMode === 'undefined' || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵsetNgModuleScope'](QnaPageModule, {
              declarations: [_qna_page_component__WEBPACK_IMPORTED_MODULE_1__['QnaPageComponent']],
              imports: [
                _qna_module__WEBPACK_IMPORTED_MODULE_2__['QnaModule'],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__['RouterModule'],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__['CommonModule']
              ]
            });
        })();
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            QnaPageModule,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'],
                args: [
                  {
                    imports: [
                      _qna_module__WEBPACK_IMPORTED_MODULE_2__['QnaModule'],
                      _angular_router__WEBPACK_IMPORTED_MODULE_3__['RouterModule'].forChild(routes),
                      _angular_common__WEBPACK_IMPORTED_MODULE_4__['CommonModule']
                    ],
                    declarations: [_qna_page_component__WEBPACK_IMPORTED_MODULE_1__['QnaPageComponent']]
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
    './src/app/qna/page/qnas.ts':
      /*!**********************************!*\
    !*** ./src/app/qna/page/qnas.ts ***!
    \**********************************/

      /*! exports provided: qnaBorthers, qnaHosts, qnaParticipates */

      /***/
      function srcAppQnaPageQnasTs(module, __webpack_exports__, __webpack_require__) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'qnaBorthers', function() {
          return qnaBorthers;
        });
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'qnaHosts', function() {
          return qnaHosts;
        });
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'qnaParticipates', function() {
          return qnaParticipates;
        });

        var qnaBorthers = [
          {
            question: 'איך אני נרשם לבית מארח לספר את סיפורי?',
            answer:
              '\u05E0\u05D9\u05EA\u05DF \u05DC\u05D4\u05DB\u05E0\u05E1 \u05DC\u05E2\u05DE\u05D5\u05D3 <a target="_blank" href="/tell">\'\u05D0\u05E0\u05D9 \u05E8\u05D5\u05E6\u05D4 \u05DC\u05E1\u05E4\u05E8\'</a>. \u05D1\u05E2\u05DE\u05D5\u05D3 \u05D9\u05E9 \u05DC\u05DE\u05DC\u05D0 \u05D0\u05EA \u05E4\u05E8\u05D8\u05D9\u05DA \u05D5\u05DC\u05D4\u05E9\u05EA\u05D1\u05E5 \u05DC\u05D9\u05D5\u05DD \u05D4\u05DB\u05E0\u05D4 \u05D5\u05DC\u05D0\u05D9\u05E8\u05D5\u05D7 \u05D4\u05E7\u05E8\u05D5\u05D1 \u05DC\u05D1\u05D9\u05EA\u05DA.'
          },
          {
            question: 'איך נראה מפגש של האחים שלנו?',
            answer:
              '\u05DB\u05DC \u05DE\u05E4\u05D2\u05E9 \u05E0\u05E8\u05D0\u05D4 \u05E9\u05D5\u05E0\u05D4, \u05EA\u05DC\u05D5\u05D9 \u05D1\u05DA, \u05D1\u05D0\u05D9\u05E8\u05D5\u05D7 \u05D5\u05D1\u05D3\u05D9\u05E0\u05DE\u05D9\u05E7\u05D4 \u05E9\u05E0\u05D5\u05E6\u05E8\u05EA. \u05D4\u05D0\u05D7\u05D9\u05DD \u05D5\u05D4\u05D0\u05D7\u05D9\u05D5\u05EA \u05E9\u05DE\u05D2\u05D9\u05E2\u05D9\u05DD \u05DC\u05E2\u05E8\u05D1\u05D9\u05DD \u05DC\u05E1\u05E4\u05E8 \u05D0\u05EA \u05E1\u05D9\u05E4\u05D5\u05E8\u05DD \u05DE\u05D5\u05D6\u05DE\u05E0\u05D9\u05DD \u05DC\u05E7\u05D7\u05EA \u05D7\u05DC\u05E7 \u05D1\u05D9\u05D5\u05DD \u05D4\u05DB\u05E0\u05D4 \u05E2\u05DC \u05DE\u05E0\u05EA \u05DC\u05E8\u05DB\u05D5\u05E9 \u05DB\u05DC\u05D9\u05DD \u05E4\u05E8\u05E7\u05D8\u05D9\u05D9\u05DD \u05DC\u05D1\u05E0\u05D9\u05D9\u05EA \u05D4\u05E2\u05E8\u05D1. \u05E0\u05D9\u05EA\u05DF \u05DC\u05D4\u05D5\u05E8\u05D9\u05D3 \u05D0\u05EA \u05E2\u05E8\u05DB\u05EA \u05D4\u05D0\u05D7 <a target="_blank" href="/">\u05DB\u05D0\u05DF</a>.\n    <br/>\n    \u05E7\u05D9\u05D9\u05DE\u05D9\u05DD \u05DE\u05E1\u05E4\u05E8 \u05D3\u05D1\u05E8\u05D9\u05DD \u05E7\u05D1\u05D5\u05E2\u05D9\u05DD \u05DB\u05DE\u05E2\u05D8 \u05D1\u05DB\u05DC \u05DE\u05E4\u05D2\u05E9: \u05D4\u05EA\u05DB\u05E0\u05E1\u05D5\u05EA \u05E9\u05DC \u05D4\u05DE\u05E9\u05EA\u05EA\u05E4\u05D9\u05DD \u05D1\u05D1\u05D9\u05EA \u05D4\u05DE\u05D0\u05E8\u05D7, \u05D4\u05E6\u05D2\u05D4 \u05D5\u05E4\u05EA\u05D9\u05D7\u05D4 \u05E9\u05DC \u05D4\u05DE\u05D0\u05E8\u05D7 \u05E2\u05DC \u05D4\u05E2\u05E8\u05D1, \u05D5\u05D4\u05E2\u05D1\u05E8\u05EA \u05D4"\u05E9\u05E8\u05D1\u05D9\u05D8" \u05D0\u05DC\u05D9\u05DA - \u05E2\u05DB\u05E9\u05D9\u05D5 \u05D6\u05D4 \u05D4\u05D6\u05DE\u05DF \u05E9\u05DC\u05DA \u05D1\u05D5 \u05EA\u05E0\u05D4\u05DC \u05D0\u05EA \u05D4\u05E9\u05D9\u05D7\u05D4 \u05E9\u05D4\u05DB\u05E0\u05EA \u05DE\u05E8\u05D0\u05E9. \u05D0\u05E0\u05D5 \u05E0\u05E9\u05DE\u05D7 \u05D0\u05DD \u05D1\u05E4\u05EA\u05D9\u05D7\u05EA \u05D4\u05E2\u05E8\u05D1 \u05EA\u05D5\u05DB\u05DC \u05DC\u05EA\u05EA \u05E8\u05E7\u05E2 \u05E2\u05DC \u05E2\u05DE\u05D5\u05EA\u05EA \'\u05D4\u05D0\u05D7\u05D9\u05DD \u05E9\u05DC\u05E0\u05D5\' \u05D1\u05DB\u05D3\u05D9 \u05E9\u05E2\u05D5\u05D3 \u05D5\u05E2\u05D5\u05D3 \u05D0\u05E0\u05E9\u05D9\u05DD \u05D9\u05D9\u05D7\u05E9\u05E4\u05D5 \u05DC\u05E4\u05E2\u05D9\u05DC\u05D5\u05EA \u05E9\u05DC\u05E0\u05D5 \u05D5\u05D9\u05E7\u05D7\u05D5 \u05D7\u05DC\u05E7 \u05D1\u05D4\u05E0\u05E6\u05D7\u05EA \u05D4\u05D0\u05D7\u05D9\u05DD \u05D5\u05D4\u05D0\u05D7\u05D9\u05D5\u05EA \u05D4\u05E9\u05DB\u05D5\u05DC\u05D9\u05DD.'
          },
          {
            question: 'איזה כלים יהיו לי לבנות את המפגש שלי?',
            answer:
              '\u05D4\u05D0\u05D7\u05D9\u05DD \u05D5\u05D4\u05D0\u05D7\u05D9\u05D5\u05EA \u05E9\u05DE\u05D2\u05D9\u05E2\u05D9\u05DD \u05DC\u05E2\u05E8\u05D1\u05D9\u05DD \u05DC\u05E1\u05E4\u05E8 \u05D0\u05EA \u05E1\u05D9\u05E4\u05D5\u05E8\u05DD \u05DE\u05D5\u05D6\u05DE\u05E0\u05D9\u05DD \u05DC\u05E7\u05D7\u05EA \u05D7\u05DC\u05E7 \u05D1\u05D9\u05D5\u05DD \u05D4\u05DB\u05E0\u05D4 (\u05D9\u05D4\u05D9\u05D5 \u05E1\u05D3\u05E0\u05D0\u05D5\u05EA \u05D4\u05D3\u05E8\u05DB\u05D4 \u05E4\u05E8\u05E7\u05D8\u05D9\u05D5\u05EA \u05D5\u05DB\u05DF \u05DB\u05DC\u05D9\u05DD \u05E8\u05D2\u05E9\u05D9\u05D9\u05DD) \u05DC\u05D1\u05E0\u05D9\u05D9\u05EA \u05D4\u05E2\u05E8\u05D1. \u05E0\u05D9\u05EA\u05DF \u05DC\u05D4\u05D5\u05E8\u05D9\u05D3 \u05D0\u05EA <a target="_blank" href="/assets/docs/\u05E2\u05E8\u05DB\u05EA%20\u05D0\u05D7\u05D9\u05DD%20\u05D5\u05D0\u05D7\u05D9\u05D5\u05EA%20-%20\u05D4\u05D0\u05D7\u05D9\u05DD%20\u05E9\u05DC\u05E0\u05D5.pdf">\u05E2\u05E8\u05DB\u05EA \u05D4\u05D0\u05D7<a/>, \u05D4\u05DE\u05EA\u05DB\u05DC\u05DC\u05EA \u05D0\u05EA \u05D4\u05DB\u05DC\u05D9\u05DD \u05D4\u05E0\u05D9\u05EA\u05E0\u05D9\u05DD \u05D1\u05D9\u05D5\u05DD \u05D6\u05D4.'
          },
          {
            question: 'האם אוכל לספר ביותר מבית מארח אחד?',
            answer:
              '\u05D5\u05D5\u05D3\u05D0\u05D9, \u05E0\u05D9\u05EA\u05DF \u05DC\u05D1\u05D7\u05D5\u05E8 \u05D9\u05D5\u05EA\u05E8 \u05DE\u05D1\u05D9\u05EA \u05D0\u05D7\u05D3 \u05DC\u05D4\u05EA\u05D0\u05E8\u05D7 \u05D1\u05D5 \u05D3\u05E8\u05DA <a target="_blank" href="/meetings">\u05E2\u05DE\u05D5\u05D3 \u05D4\u05DE\u05E4\u05D2\u05E9\u05D9\u05DD<a/> \u05D1\u05D0\u05EA\u05E8, \u05D0\u05DA \u05D9\u05E9 \u05DC\u05E9\u05D9\u05DD \u05DC\u05D1 \u05E9\u05D4\u05D0\u05D9\u05E8\u05D5\u05D7\u05D9\u05DD \u05DC\u05D0 \u05D7\u05D5\u05E4\u05E4\u05D9\u05DD \u05D1\u05EA\u05D0\u05E8\u05D9\u05DA \u05D5\u05D1\u05E9\u05E2\u05D4.'
          },
          {
            question: 'האם כל המפגשים יתקיימו בסלונים פרטיים?',
            answer:
              '\u05D4\u05DE\u05E4\u05D2\u05E9\u05D9\u05DD \u05D9\u05EA\u05E7\u05D9\u05D9\u05DE\u05D5 \u05D1\u05DE\u05E7\u05D5\u05DE\u05D5\u05EA \u05E9\u05D5\u05E0\u05D9\u05DD \u05D1\u05E8\u05D7\u05D1\u05D9 \u05D4\u05D0\u05E8\u05E5, \u05D1\u05D9\u05E0\u05D9\u05D4\u05DD \u05D1\u05EA\u05D9\u05DD \u05E4\u05E8\u05D8\u05D9\u05D9\u05DD, \u05D7\u05D1\u05E8\u05D5\u05EA, \u05D0\u05E8\u05D2\u05D5\u05E0\u05D9\u05DD, \u05EA\u05E0\u05D5\u05E2\u05D5\u05EA \u05E0\u05D5\u05E2\u05E8, \u05D1\u05EA\u05D9 \u05E1\u05E4\u05E8 \u05D5\u05E2\u05D5\u05D3. \u05E0\u05D9\u05EA\u05DF \u05DC\u05D1\u05D3\u05D5\u05E7 \u05D0\u05EA \u05DE\u05D0\u05E4\u05D9\u05D9\u05E0\u05D9 \u05D4\u05DE\u05E4\u05D2\u05E9 <a target="_blank" href="/meetings">\u05D1\u05E2\u05DE\u05D5\u05D3 \u05D4\u05DE\u05E4\u05D2\u05E9\u05D9\u05DD<a/> \u05D1\u05D0\u05EA\u05E8.'
          },
          {
            question: 'האם אוכל לארח את עצמי בביתי?',
            answer:
              '\u05D1\u05E2\u05D9\u05E7\u05E8\u05D5\u05DF \u05DB\u05DF, \u05D0\u05DA \u05D0\u05E0\u05D7\u05E0\u05D5 \u05DC\u05D0 \u05DE\u05DE\u05DC\u05D9\u05E6\u05D9\u05DD \u05E2\u05DC \u05DB\u05DA. \u05E7\u05D9\u05D5\u05DD \u05D4\u05DE\u05E4\u05D2\u05E9\u05D9\u05DD \u05D1\u05DE\u05E7\u05D5\u05DE\u05D5\u05EA \u05E9\u05D0\u05D9\u05E0\u05DD \u05D4\u05D1\u05D9\u05EA \u05D4\u05D0\u05D9\u05E9\u05D9 \u05E9\u05DC\u05DA \u05DE\u05D0\u05E4\u05E9\u05E8\u05D9\u05DD \u05DC\u05D4\u05E8\u05D7\u05D9\u05D1 \u05D0\u05EA \u05DE\u05E2\u05D2\u05DC \u05D4\u05D6\u05DB\u05E8\u05D5\u05DF \u05D5\u05D4\u05D4\u05E0\u05E6\u05D7\u05D4. \u05DB\u05DE\u05D5 \u05DB\u05DF, \u05D9\u05D3\u05D5\u05E2 \u05DC\u05E0\u05D5 \u05DB\u05D9 \u05DE\u05E4\u05D2\u05E9 \u05DB\u05D6\u05D4 \u05DE\u05E6\u05D9\u05E3 \u05E8\u05D2\u05E9\u05D5\u05EA \u05E8\u05D1\u05D9\u05DD \u05D5\u05D0\u05D9\u05DF \u05E6\u05D5\u05E8\u05DA \u05DC\u05D4\u05D8\u05E8\u05D9\u05D7 \u05D0\u05EA \u05E2\u05E6\u05DE\u05DA \u05DE\u05E2\u05D1\u05E8 \u05DC\u05DB\u05DA. \u05DC\u05DE\u05E8\u05D5\u05EA \u05D4\u05D0\u05DE\u05D5\u05E8 \u05DC\u05E2\u05D9\u05DC, \u05D1\u05DE\u05E7\u05E8\u05D9\u05DD \u05DE\u05D9\u05D5\u05D7\u05D3\u05D9\u05DD \u05DB\u05DE\u05D5\u05D1\u05DF \u05E9\u05E0\u05D9\u05EA\u05DF <a target="_blank" href="/contact">\u05DC\u05D9\u05E6\u05D5\u05E8 \u05D0\u05D9\u05EA\u05E0\u05D5 \u05E7\u05E9\u05E8<a/>.'
          },
          {
            question: 'כשנרשמים לאתר ישנה הצעה להשתתף במפגש הכנה לאחים, מה זה אומר?',
            answer:
              "\u05E1\u05D3\u05E0\u05D0\u05D5\u05EA \u05D4\u05D4\u05DB\u05E0\u05D4 \u05D9\u05EA\u05E7\u05D9\u05D9\u05DE\u05D5 \u05D1\u05D9\u05DF \u05D429.3-2.4 \u05D1\u05E8\u05D7\u05D1\u05D9 \u05D4\u05D0\u05E8\u05E5 \u05D1\u05DE\u05D8\u05E8\u05D4 \u05DC\u05D4\u05DB\u05D9\u05DF \u05D0\u05D5\u05EA\u05DA \u05D5\u05DC\u05E1\u05D9\u05D9\u05E2 \u05DC\u05DA \u05DC\u05E7\u05E8\u05D0\u05EA \u05D4\u05DE\u05E4\u05D2\u05E9\u05D9\u05DD.\n    \u05D4\u05E1\u05D3\u05E0\u05D0\u05D5\u05EA \u05D9\u05DB\u05DC\u05DC\u05D5 \u05EA\u05DB\u05E0\u05D9\u05DD \u05E4\u05E8\u05E7\u05D8\u05D9\u05D9\u05DD \u05D5\u05D4\u05E7\u05E0\u05D9\u05D9\u05EA \u05DB\u05DC\u05D9\u05DD \u05E9\u05D9\u05E1\u05D9\u05D9\u05E2\u05D5 \u05DC\u05DA \u05DE\u05D1\u05E0\u05D9\u05EA \u05D5\u05E8\u05D2\u05E9\u05D9\u05EA \u05DC\u05E7\u05E8\u05D0\u05EA \u05D4\u05DE\u05E4\u05D2\u05E9, \u05D1\u05D9\u05DF \u05D0\u05DD \u05DC\u05E7\u05D7\u05EA \u05D7\u05DC\u05E7 \u05D1\u05DE\u05E4\u05D2\u05E9\u05D9 '\u05D4\u05D0\u05D7\u05D9\u05DD \u05E9\u05DC\u05E0\u05D5' \u05D1\u05E2\u05D1\u05E8 \u05D5\u05D1\u05D9\u05DF \u05D0\u05DD \u05DC\u05D0, \u05DB\u05DE\u05D5 \u05D2\u05DD, \u05D4\u05E8\u05E6\u05D0\u05D5\u05EA \u05DC\u05D3\u05D5\u05D2\u05DE\u05D4 \u05E9\u05DC \u05E9\u05E0\u05D9 \u05D0\u05D7\u05D9\u05DD \u05E9\u05DB\u05D5\u05DC\u05D9\u05DD \u05D5\u05E1\u05D9\u05D5\u05E2 \u05D1\u05D1\u05E0\u05D9\u05D9\u05EA \u05D4\u05E9\u05D9\u05D7\u05D4 \u05D5/\u05D0\u05D5 \u05D4\u05DE\u05E6\u05D2\u05EA.\n    <br/>\n    \u05E1\u05D3\u05E0\u05D0\u05D5\u05EA \u05D4\u05D4\u05DB\u05E0\u05D4 \u05D9\u05EA\u05E7\u05D9\u05D9\u05DE\u05D5 \u05D1\u05DE\u05E1\u05E4\u05E8 \u05DE\u05D5\u05E7\u05D3\u05D9\u05DD:\n    <br/>\n    - 29.03.20 \u05D1\u05D1\u05D0\u05E8 \u05E9\u05D1\u05E2 \u05D1\u05D9\u05DF \u05D4\u05E9\u05E2\u05D5\u05EA 17:30-21:30, \u05DE\u05E9\u05E8\u05D3\u05D9 WEWORK, \u05E8\u05D7' \u05D7\u05DC\u05E7\u05D9\u05E7\u05D9 \u05D4\u05D0\u05D5\u05E8 16<br/>\n    - 31.03.20 \u05D1\u05EA\u05DC \u05D0\u05D1\u05D9\u05D1 \u05D1\u05D9\u05DF \u05D4\u05E9\u05E2\u05D5\u05EA 17:00-21:00, \u05DE\u05E9\u05E8\u05D3\u05D9 WEWORK, \u05E8\u05D7' \u05E9\u05D5\u05E7\u05DF 23<br/>\n    - 01.04.20 \u05D1\u05D9\u05E8\u05D5\u05E9\u05DC\u05D9\u05DD \u05D1\u05D9\u05DF \u05D4\u05E9\u05E2\u05D5\u05EA 18:00-22:00, \u05DE\u05E9\u05E8\u05D3\u05D9 WEWORK, \u05E8\u05D7' \u05E7\u05D9\u05E0\u05D2 \u05D2'\u05D5\u05E8\u05D2' 20<br/>\n    - 02.04.20 \u05D1\u05D7\u05D9\u05E4\u05D4 \u05D1\u05D9\u05DF \u05D4\u05E9\u05E2\u05D5\u05EA 17:00-21:00, \u05DE\u05E9\u05E8\u05D3\u05D9 WEWORK, \u05E8\u05D7' \u05D3\u05E8\u05DA \u05D4\u05E2\u05E6\u05DE\u05D0\u05D5\u05EA 45"
          },
          {
            question: 'אם אני מתארח בבית מארח שלא כתוב באתר, אוכל להגיע למפגש ההכנה?',
            answer:
              "\u05D1\u05D5\u05D5\u05D3\u05D0\u05D9, \u05D4\u05E1\u05D3\u05E0\u05D0\u05D5\u05EA \u05E4\u05EA\u05D5\u05D7\u05D5\u05EA \u05DC\u05DB\u05DC \u05D4\u05D0\u05D7\u05D9\u05DD - \u05D0\u05DC\u05D5 \u05E9\u05E8\u05D5\u05E6\u05D9\u05DD \u05DC\u05E7\u05D7\u05EA \u05D7\u05DC\u05E7 \u05D5\u05DC\u05D4\u05E2\u05D1\u05D9\u05E8 \u05E2\u05E8\u05D1 \u05D5\u05D0\u05DC\u05D5 \u05E9\u05DC\u05D0. \u05E1\u05D3\u05E0\u05D0\u05D5\u05EA \u05D4\u05D4\u05DB\u05E0\u05D4 \u05D9\u05EA\u05E7\u05D9\u05D9\u05DE\u05D5 \u05D1\u05D9\u05DF \u05D429.3-2.4 \u05D1\u05E8\u05D7\u05D1\u05D9 \u05D4\u05D0\u05E8\u05E5 \u05D1\u05DE\u05D8\u05E8\u05D4 \u05DC\u05D4\u05DB\u05D9\u05DF \u05D0\u05D5\u05EA\u05DA \u05D5\u05DC\u05E1\u05D9\u05D9\u05E2 \u05DC\u05DA \u05DC\u05E7\u05E8\u05D0\u05EA \u05D4\u05DE\u05E4\u05D2\u05E9\u05D9\u05DD.\n    <br/>\n    \u05D4\u05E1\u05D3\u05E0\u05D0\u05D5\u05EA \u05D9\u05DB\u05DC\u05DC\u05D5 \u05EA\u05DB\u05E0\u05D9\u05DD \u05E4\u05E8\u05E7\u05D8\u05D9\u05D9\u05DD \u05D5\u05D4\u05E7\u05E0\u05D9\u05D9\u05EA \u05DB\u05DC\u05D9\u05DD \u05E9\u05D9\u05E1\u05D9\u05D9\u05E2\u05D5 \u05DC\u05DA \u05DE\u05D1\u05E0\u05D9\u05EA \u05D5\u05E8\u05D2\u05E9\u05D9\u05EA \u05DC\u05E7\u05E8\u05D0\u05EA \u05D4\u05DE\u05E4\u05D2\u05E9, \u05D1\u05D9\u05DF \u05D0\u05DD \u05DC\u05E7\u05D7\u05EA \u05D7\u05DC\u05E7 \u05D1\u05DE\u05E4\u05D2\u05E9\u05D9 '\u05D4\u05D0\u05D7\u05D9\u05DD \u05E9\u05DC\u05E0\u05D5' \u05D1\u05E2\u05D1\u05E8 \u05D5\u05D1\u05D9\u05DF \u05D0\u05DD \u05DC\u05D0, \u05DB\u05DE\u05D5 \u05D2\u05DD \u05D4\u05E8\u05E6\u05D0\u05D5\u05EA \u05DC\u05D3\u05D5\u05D2\u05DE\u05D0 \u05E9\u05DC \u05E9\u05E0\u05D9 \u05D0\u05D7\u05D9\u05DD \u05E9\u05DB\u05D5\u05DC\u05D9\u05DD \u05D5\u05E1\u05D9\u05D5\u05E2 \u05D1\u05D1\u05E0\u05D9\u05D9\u05EA \u05D4\u05E9\u05D9\u05D7\u05D4 \u05D5/\u05D0\u05D5 \u05D4\u05DE\u05E6\u05D2\u05EA.\n    <br/>\n    \u05E1\u05D3\u05E0\u05D0\u05D5\u05EA \u05D4\u05D4\u05DB\u05E0\u05D4 \u05D9\u05EA\u05E7\u05D9\u05D9\u05DE\u05D5 \u05D1\u05DE\u05E1\u05E4\u05E8 \u05DE\u05D5\u05E7\u05D3\u05D9\u05DD:\n    <br/>\n    - 29.03.20 \u05D1\u05D1\u05D0\u05E8 \u05E9\u05D1\u05E2 \u05D1\u05D9\u05DF \u05D4\u05E9\u05E2\u05D5\u05EA 17:30-21:30, \u05DE\u05E9\u05E8\u05D3\u05D9 WEWORK, \u05E8\u05D7' \u05D7\u05DC\u05E7\u05D9\u05E7\u05D9 \u05D4\u05D0\u05D5\u05E8 16<br/>\n    - 31.03.20 \u05D1\u05EA\u05DC \u05D0\u05D1\u05D9\u05D1 \u05D1\u05D9\u05DF \u05D4\u05E9\u05E2\u05D5\u05EA 17:00-21:00, \u05DE\u05E9\u05E8\u05D3\u05D9 WEWORK, \u05E8\u05D7' \u05E9\u05D5\u05E7\u05DF 23<br/>\n    - 01.04.20 \u05D1\u05D9\u05E8\u05D5\u05E9\u05DC\u05D9\u05DD \u05D1\u05D9\u05DF \u05D4\u05E9\u05E2\u05D5\u05EA 18:00-22:00, \u05DE\u05E9\u05E8\u05D3\u05D9 WEWORK, \u05E8\u05D7' \u05E7\u05D9\u05E0\u05D2 \u05D2'\u05D5\u05E8\u05D2' 20<br/>\n    - 02.04.20 \u05D1\u05D7\u05D9\u05E4\u05D4 \u05D1\u05D9\u05DF \u05D4\u05E9\u05E2\u05D5\u05EA 17:00-21:00, \u05DE\u05E9\u05E8\u05D3\u05D9 WEWORK, \u05E8\u05D7' \u05D3\u05E8\u05DA \u05D4\u05E2\u05E6\u05DE\u05D0\u05D5\u05EA 45"
          },
          {
            question: 'איך אני יוצר קשר עם המארח?',
            answer:
              '\u05DE\u05D9\u05D3 \u05DC\u05D0\u05D7\u05E8 \u05D4\u05E9\u05D9\u05D1\u05D5\u05E5 \u05DC\u05D0\u05D9\u05E8\u05D5\u05D7, \u05EA\u05D2\u05D9\u05E2 \u05DC<a target="_blank" href="/assets/docs/\u05E2\u05E8\u05DB\u05EA%20\u05D0\u05D9\u05E8\u05D5\u05D7%20-%20\u05D4\u05D0\u05D7\u05D9\u05DD%20\u05E9\u05DC\u05E0\u05D5.pdf">\'\u05D3\u05E3 \u05D4\u05D0\u05D9\u05E8\u05D5\u05D7\'<a/> \u05E2\u05DD \u05DB\u05DC \u05D4\u05E4\u05E8\u05D8\u05D9\u05DD \u05D4\u05E8\u05DC\u05D5\u05D5\u05E0\u05D8\u05D9\u05DD \u05D5\u05DB\u05DF \u05EA\u05E7\u05D1\u05DC \u05D3\u05D5\u05D0\u05E8 \u05D0\u05DC\u05E7\u05D8\u05E8\u05D5\u05E0\u05D9 \u05D4\u05DB\u05D5\u05DC\u05DC \u05D0\u05EA \u05D4\u05E4\u05E8\u05D8\u05D9\u05DD \u05D4\u05DC\u05DC\u05D5. \u05D1\u05DE\u05E7\u05D1\u05D9\u05DC, \u05D9\u05E7\u05D1\u05DC \u05D4\u05DE\u05D0\u05E8\u05D7 \u05D0\u05EA \u05E4\u05E8\u05D8\u05D9 \u05D4\u05D4\u05EA\u05E7\u05E9\u05E8\u05D5\u05EA \u05E9\u05DC\u05DA \u05D5\u05D9\u05E6\u05D5\u05E8 \u05D0\u05D9\u05EA\u05DA \u05E7\u05E9\u05E8 \u05DC\u05D7\u05D9\u05D1\u05D5\u05E8 \u05D5\u05EA\u05D9\u05D0\u05D5\u05DD \u05E6\u05D9\u05E4\u05D9\u05D5\u05EA. \u05D1\u05E9\u05D9\u05D7\u05D4 \u05D7\u05E9\u05D5\u05D1 \u05DC\u05D4\u05E2\u05DC\u05D5\u05EA \u05DE\u05E1\' \u05E0\u05D5\u05E9\u05D0\u05D9\u05DD: \u05E6\u05D5\u05E8\u05DA \u05E9\u05DC\u05DA \u05D1\u05DB\u05DC\u05D9\u05DD \u05D5\u05D0\u05D1\u05D9\u05D6\u05E8\u05D9\u05DD \u05E9\u05D5\u05E0\u05D9\u05DD (\u05DB\u05DE\u05D5 \u05DE\u05E7\u05E8\u05DF, \u05DE\u05E1\u05DA \u05D5\u05DB\u05D5\'), \u05D4\u05D1\u05E0\u05EA \u05E4\u05E8\u05D8\u05D9 \u05E7\u05D4\u05DC \u05D4\u05E9\u05D5\u05DE\u05E2\u05D9\u05DD \u05E9\u05D9\u05D2\u05D9\u05E2\u05D5 \u05DC\u05E2\u05E8\u05D1, \u05D4\u05D1\u05D4\u05E8\u05EA \u05E0\u05E7\u05D5\u05D3\u05D5\u05EA \u05D7\u05E9\u05D5\u05D1\u05D5\u05EA, \u05DC\u05E9\u05EA\u05E3 \u05D1\u05D0\u05D5\u05E8\u05D7\u05D9\u05DD \u05E9\u05E8\u05D5\u05E6\u05D9\u05DD \u05DC\u05D4\u05EA\u05DC\u05D5\u05D5\u05EA \u05D0\u05DC\u05D9\u05DA \u05DC\u05E2\u05E8\u05D1, \u05D4\u05D0\u05DD \u05D9\u05E9 \u05E6\u05D5\u05E8\u05DA \u05D1\u05E2\u05D6\u05E8\u05D4 \u05DB\u05DC\u05E9\u05D4\u05D9 \u05D5\u05DB\u05D9\u05D5\u05E6"\u05D1. \u05DB\u05DE\u05D5 \u05DB\u05DF, \u05D4\u05DE\u05D0\u05E8\u05D7 \u05E9\u05DC\u05DA \u05D9\u05E7\u05D1\u05DC <a target="_blank" href="/assets/docs/\u05E2\u05E8\u05DB\u05EA%20\u05D0\u05D9\u05E8\u05D5\u05D7%20-%20\u05D4\u05D0\u05D7\u05D9\u05DD%20\u05E9\u05DC\u05E0\u05D5.pdf">\u05E2\u05E8\u05DB\u05EA \u05D0\u05D9\u05E8\u05D5\u05D7<a/> \u05D5\u05E0\u05D9\u05EA\u05DF \u05DC\u05D4\u05E1\u05D1 \u05D0\u05EA \u05EA\u05E9\u05D5\u05DE\u05EA \u05DC\u05D9\u05D1\u05D5 \u05DC\u05E7\u05E8\u05D9\u05D0\u05EA\u05D4.'
          },
          {
            question: 'מה אני צריך להכין לערב?',
            answer:
              '\u05DE\u05D5\u05DE\u05DC\u05E5 \u05DC\u05E2\u05D9\u05D9\u05DF \u05D1<a target="_blank" href="/assets/docs/\u05E2\u05E8\u05DB\u05EA%20\u05D0\u05D7\u05D9\u05DD%20\u05D5\u05D0\u05D7\u05D9\u05D5\u05EA%20-%20\u05D4\u05D0\u05D7\u05D9\u05DD%20\u05E9\u05DC\u05E0\u05D5.pdf">\'\u05E2\u05E8\u05DB\u05EA \u05D0\u05D7\'<a/> \u05D1\u05D4 \u05DE\u05E4\u05D5\u05E8\u05D8 \u05E2\u05DC \u05D4\u05D4\u05DB\u05E0\u05D4 \u05DC\u05E7\u05E8\u05D0\u05EA \u05D4\u05E2\u05E8\u05D1. \u05D1\u05DB\u05DC \u05DE\u05E7\u05E8\u05D4 \u05D0\u05E0\u05D5 \u05DE\u05DE\u05DC\u05D9\u05E6\u05D9\u05DD \u05DC\u05D4\u05D1\u05D9\u05D0 \u05D0\u05D9\u05EA\u05DA \u05DC\u05E2\u05E8\u05D1 \u05D0\u05DE\u05E6\u05E2\u05D9\u05DD \u05D5\u05D9\u05D6\u05D5\u05D0\u05DC\u05D9\u05DD: \u05EA\u05DE\u05D5\u05E0\u05D5\u05EA, \u05DE\u05E6\u05D2\u05EA, \u05E1\u05E8\u05D8. \u05E7\u05D8\u05E2\u05D9 \u05E7\u05E8\u05D9\u05D0\u05D4. \u05DE\u05D5\u05D6\u05DE\u05DF \u05DC\u05E6\u05E4\u05D5\u05EA <a target="_blank" href="https://www.youtube.com/watch?v=l788HDtDVEI&list=PLJi3ky6m6AisA1gSnPNdi08F2c0gXEX8m&index=5">\u05D1\u05D4\u05E8\u05E6\u05D0\u05EA\u05D5<a/> \u05E9\u05DC \u05D3"\u05E8 \u05E6\u05D5\u05E8\u05D9\u05D0\u05DC \u05E8\u05D0\u05E9\u05D9 \u05D4\u05DE\u05E2\u05DC\u05D4 \u05DE\u05E1\u05E4\u05E8 \u05D8\u05D9\u05E4\u05D9\u05DD \u05D7\u05E9\u05D5\u05D1\u05D9\u05DD \u05DC\u05E7\u05E8\u05D0\u05EA \u05D4\u05E2\u05E8\u05D1.\n    <br/>\n    \u05DC\u05E2\u05D9\u05EA\u05D9\u05DD, \u05DE\u05E8\u05D5\u05D1 \u05D4\u05EA\u05E8\u05D2\u05E9\u05D5\u05EA, \u05D4\u05DE\u05D5\u05DF \u05E1\u05D9\u05E4\u05D5\u05E8\u05D9\u05DD \u05D5\u05DE\u05D7\u05E9\u05D1\u05D5\u05EA \u05E2\u05D5\u05DC\u05D9\u05DD \u05D1\u05D0\u05D5\u05E4\u05DF \u05DC\u05D0 \u05DE\u05EA\u05D5\u05DB\u05E0\u05DF \u05D5\u05DC\u05DB\u05DF \u05D0\u05E0\u05D5 \u05DE\u05DE\u05DC\u05D9\u05E6\u05D9\u05DD \u05DC\u05D4\u05D1\u05D9\u05D0 \u05D0\u05D9\u05EA\u05DA \u05D0\u05EA \u05DE\u05D4\u05DC\u05DA \u05D4\u05DE\u05E4\u05D2\u05E9 \u05D5\u05D4\u05DE\u05E1\u05E8\u05D9\u05DD \u05E9\u05EA\u05E8\u05E6\u05D4 \u05DC\u05D4\u05E2\u05D1\u05D9\u05E8, \u05DB\u05EA\u05D5\u05D1\u05D9\u05DD \u05D1\u05E0\u05E7\u05D5\u05D3\u05D5\u05EA \u05E2\u05DC \u05D3\u05E3.'
          },
          {
            question: 'האם המפגשים מתקיימים בערב או ביום הזיכרון?',
            answer:
              '\u05DE\u05E4\u05D2\u05E9\u05D9 \'\u05D4\u05D0\u05D7\u05D9\u05DD \u05E9\u05DC\u05E0\u05D5\' \u05D9\u05EA\u05E7\u05D9\u05D9\u05DE\u05D5 \u05D1\u05E8\u05D5\u05D1\u05DD \u05D1\u05D9\u05D5\u05DD \u05E8\u05D0\u05E9\u05D5\u05DF \u05D4-26.4 \u05D1\u05E9\u05E2\u05D4 20:00. \u05D0\u05DA, \u05D9\u05E9\u05E0\u05D4 \u05D0\u05E4\u05E9\u05E8\u05D5\u05EA \u05DC\u05E7\u05D9\u05D9\u05DD \u05DE\u05E4\u05D2\u05E9\u05D9\u05DD \u05DC\u05D0\u05D5\u05E8\u05DA \u05D4\u05E9\u05D1\u05D5\u05E2 \u05E1\u05D1\u05D9\u05D1 \u05D9\u05D5\u05DD \u05D4\u05D6\u05D9\u05DB\u05E8\u05D5\u05DF, \u05D1\u05D9\u05DF \u05D4\u05EA\u05D0\u05E8\u05D9\u05DB\u05D9\u05DD 22.4-28.4. \u05E0\u05D9\u05EA\u05DF \u05DC\u05D1\u05D3\u05D5\u05E7 \u05D0\u05EA \u05D4\u05EA\u05D0\u05E8\u05D9\u05DA \u05D5\u05D4\u05E9\u05E2\u05D4 \u05D1<a target="_blank" href="/meeting">\u05E2\u05DE\u05D5\u05D3 \u05D4\u05DE\u05E4\u05D2\u05E9\u05D9\u05DD<a/> \u05D1\u05DC\u05D7\u05D9\u05E6\u05D4 \u05E2\u05DC \u05D0\u05D9\u05E8\u05D5\u05D7.'
          },
          {
            question: 'האם אוכל להעביר שיחה יחד עם אח/ות שלי?',
            answer:
              '\u05DB\u05DF, \u05D5\u05D0\u05E3 \u05DC\u05E2\u05D9\u05EA\u05D9\u05DD \u05D6\u05D4 \u05D9\u05DB\u05D5\u05DC \u05DC\u05D4\u05E7\u05DC \u05D5\u05DC\u05E2\u05D6\u05D5\u05E8. \u05D1\u05E9\u05D9\u05D7\u05EA \u05D4\u05D9\u05DB\u05E8\u05D5\u05EA \u05E2\u05DD \u05D4\u05DE\u05D0\u05E8\u05D7 \u05D9\u05E9 \u05DC\u05E6\u05D9\u05D9\u05DF \u05D6\u05D0\u05EA.'
          },
          {
            question:
              "\u05DE\u05D9 \u05D4\u05E7\u05D9\u05DD \u05D0\u05EA \u05E2\u05DE\u05D5\u05EA\u05EA '\u05D4\u05D0\u05D7\u05D9\u05DD \u05E9\u05DC\u05E0\u05D5'?",
            answer:
              '\u05D4\u05E2\u05DE\u05D5\u05EA\u05D4 \u05D4\u05D5\u05E7\u05DE\u05D4 \u05E2\u05DC-\u05D9\u05D3\u05D9 \u05D0\u05D7\u05D9\u05DD \u05D5\u05D0\u05D7\u05D9\u05D5\u05EA \u05E9\u05DB\u05D5\u05DC\u05D9\u05DD \u05D5\u05DE\u05EA\u05E0\u05D3\u05D1\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD. \u05DE\u05D5\u05D6\u05DE\u05E0\u05D9\u05DD \u05DC\u05E7\u05E8\u05D5\u05D0 \u05E2\u05DC\u05D9\u05E0\u05D5 \u05E2\u05D5\u05D3 \u05D1<a target="_blank" href="/team">\u05E2\u05DE\u05D5\u05D3 \u05D4\u05E6\u05D5\u05D5\u05EA<a/>.'
          },
          {
            question: 'אין אירוחים בקרבת מקום מגורי, מה האפשרויות שלי?',
            answer:
              '\u05EA\u05D5\u05DB\u05DC \u05DC\u05D4\u05E6\u05D9\u05E2 \u05DC\u05D7\u05D1\u05E8\u05D9\u05DD \u05D5\u05DE\u05DB\u05E8\u05D9\u05DD \u05DC\u05E4\u05EA\u05D5\u05D7 \u05D0\u05EA \u05D1\u05D9\u05EA\u05DD \u05DC\u05D0\u05D9\u05E8\u05D5\u05D7 \u05D5\u05DC\u05D4\u05EA\u05D0\u05E8\u05D7 \u05D0\u05E6\u05DC\u05DD, \u05D5\u05DB\u05DE\u05D5\u05D1\u05DF \u05E9\u05D0\u05E0\u05D5 \u05E0\u05E2\u05E9\u05D4 \u05DE\u05D0\u05DE\u05E5 \u05DC\u05E2\u05D6\u05D5\u05E8 \u05DC\u05DA \u05D1\u05DE\u05E6\u05D9\u05D0\u05EA \u05D1\u05D9\u05EA \u05DE\u05D0\u05E8\u05D7 \u05D1\u05DE\u05E7\u05E8\u05D4 \u05D4\u05E6\u05D5\u05E8\u05DA.'
          },
          {
            question: 'האירוח שלי בוטל, מה אני עושה?',
            answer:
              '\u05DC\u05E2\u05D9\u05EA\u05D9\u05DD \u05D3\u05D1\u05E8\u05D9\u05DD \u05DB\u05D0\u05DC\u05D5 \u05E7\u05D5\u05E8\u05D9\u05DD, \u05D0\u05E0\u05D5 \u05DE\u05E9\u05EA\u05D3\u05DC\u05D9\u05DD \u05DC\u05E2\u05E9\u05D5\u05EA \u05DB\u05DB\u05DC \u05D9\u05DB\u05D5\u05DC\u05EA\u05E0\u05D5 \u05DC\u05DE\u05E0\u05D5\u05E2 \u05DE\u05E6\u05D1\u05D9\u05DD \u05DB\u05D0\u05DC\u05D4. \u05D0\u05DD \u05E7\u05E8\u05D4 \u05DE\u05E7\u05E8\u05D4 \u05DB\u05D6\u05D4 \u05D9\u05E9 \u05DC\u05D9\u05D9\u05D3\u05E2 \u05D0\u05D5\u05EA\u05E0\u05D5 \u05E2\u05DC \u05DB\u05DA \u05E2\u05DC \u05DE\u05E0\u05EA \u05E9\u05E0\u05DE\u05E6\u05D0 \u05DC\u05DA \u05D1\u05D9\u05EA \u05D7\u05DC\u05D5\u05E4\u05D9 \u05D1\u05D4\u05E7\u05D3\u05DD \u05D4\u05D0\u05E4\u05E9\u05E8\u05D9.'
          },
          {
            question: 'אוכל להביא איתי אנשים לאירוח?',
            answer:
              '\u05DE\u05D5\u05EA\u05E8 \u05D5\u05D0\u05E3 \u05DE\u05D5\u05DE\u05DC\u05E5, \u05DC\u05E2\u05E0\u05D9\u05D5\u05EA \u05D3\u05E2\u05EA\u05E0\u05D5 \u05D9\u05E9 \u05E2\u05E8\u05DA \u05D1\u05D4\u05D9\u05DE\u05E6\u05D0\u05D5\u05EA \u05D0\u05E0\u05E9\u05D9\u05DD \u05E7\u05E8\u05D5\u05D1\u05D9\u05DD \u05D0\u05DC\u05D9\u05DA \u05D1\u05E2\u05E8\u05D1 \u05DB\u05D6\u05D4. \u05DB\u05DE\u05D5\u05D1\u05DF \u05E9\u05D9\u05E9 \u05DC\u05D9\u05D9\u05D3\u05E2 \u05D0\u05EA \u05D4\u05DE\u05D0\u05E8\u05D7 \u05E2\u05DC \u05DB\u05DE\u05D5\u05EA \u05D4\u05D0\u05E0\u05E9\u05D9\u05DD \u05E9\u05DE\u05D2\u05D9\u05E2\u05D9\u05DD \u05D0\u05D9\u05EA\u05DA'
          },
          {
            question: 'אני משתמש בסרטונים ותמונות בערב, האם אתם מספקים מקרן או שאני אחראי?',
            answer:
              '\u05D0\u05D9\u05DF \u05D1\u05D0\u05E4\u05E9\u05E8\u05D5\u05EA\u05D9\u05E0\u05D5 \u05DC\u05E1\u05E4\u05E7 \u05DE\u05E7\u05E8\u05DF, \u05D0\u05DA \u05E0\u05D9\u05EA\u05DF \u05DC\u05D4\u05E7\u05E8\u05D9\u05DF \u05D3\u05E8\u05DA \u05D4\u05D8\u05DC\u05D5\u05D5\u05D9\u05D6\u05D9\u05D4 - \u05D9\u05E9 \u05DC\u05EA\u05D0\u05DD \u05DB\u05DC \u05E6\u05D5\u05E8\u05DA \u05D1\u05D0\u05D1\u05D9\u05D6\u05E8\u05D9\u05DD \u05DE\u05D5\u05DC \u05D4\u05DE\u05D0\u05E8\u05D7.'
          },
          {
            question: 'האם אני צריך להכין מצגת?',
            answer:
              '\u05D0\u05E0\u05D5 \u05DE\u05DE\u05DC\u05D9\u05E6\u05D9\u05DD \u05DC\u05D4\u05DB\u05D9\u05DF \u05DE\u05E6\u05D2\u05EA \u05E9\u05EA\u05DC\u05D5\u05D5\u05D4 \u05D0\u05EA \u05D4\u05E9\u05D9\u05D7\u05D4 \u05E9\u05DC\u05DA, \u05D4\u05DE\u05E6\u05D2\u05EA \u05D9\u05DB\u05D5\u05DC\u05D4 \u05DC\u05D4\u05E7\u05DC \u05D5\u05DC\u05DE\u05E7\u05D3 \u05D0\u05EA \u05D4\u05E9\u05D9\u05D7\u05D4 \u05DE\u05D5\u05DC \u05D4\u05E7\u05D4\u05DC, \u05DC\u05E9\u05D1\u05D5\u05E8 \u05D0\u05EA \u05D4\u05DE\u05D5\u05E0\u05D5\u05D8\u05D5\u05E0\u05D9\u05D5\u05EA \u05E9\u05DC \u05D4\u05E9\u05D9\u05D7\u05D4 \u05D5\u05DB\u05DF \u05DE\u05D4\u05D5\u05D5\u05D4 \u05D0\u05DE\u05E6\u05E2\u05D9 \u05D5\u05D9\u05D6\u05D5\u05D0\u05DC\u05D9 \u05DC\u05D4\u05DB\u05D9\u05E8 \u05D8\u05D5\u05D1 \u05D9\u05D5\u05EA\u05E8 \u05D0\u05EA \u05E1\u05D9\u05E4\u05D5\u05E8\u05DA \u05D5\u05D0\u05EA \u05D0\u05D7\u05D9\u05DA.'
          },
          {
            question: 'עד מתי אפשר להירשם לאירוח?',
            answer: '\u05E2\u05D3 \u05D9\u05D5\u05DD \u05E9\u05D9\u05E9\u05D9 \u05D4-17.4'
          },
          {
            question: 'כמה זמן אורך הערב?',
            answer:
              '\u05D1\u05DE\u05DE\u05D5\u05E6\u05E2 \u05D4\u05DE\u05E4\u05D2\u05E9\u05D9\u05DD \u05E0\u05E2\u05D9\u05DD \u05D1\u05D9\u05DF \u05E9\u05E2\u05D4-\u05E9\u05E2\u05D4 \u05D5\u05D7\u05E6\u05D9, \u05DE\u05D0\u05D5\u05D3 \u05EA\u05DC\u05D5\u05D9 \u05D1\u05DA, \u05D1\u05E7\u05D4\u05DC \u05D4\u05E9\u05D5\u05DE\u05E2\u05D9\u05DD \u05D5\u05D1\u05DE\u05D0\u05E8\u05D7. \u05D7\u05E9\u05D5\u05D1 \u05DC\u05EA\u05D0\u05DD \u05E6\u05D9\u05E4\u05D9\u05D5\u05EA \u05DC\u05E4\u05E0\u05D9 \u05DB\u05DF \u05D5\u05DC\u05EA\u05DB\u05E0\u05DF \u05DE\u05E8\u05D0\u05E9 \u05D0\u05EA \u05D4\u05E2\u05E8\u05D1 \u05D5\u05D0\u05D5\u05E8\u05DB\u05D5.'
          }
        ];
        var qnaHosts = [
          {
            question: '\u05D0\u05D9\u05DA \u05D0\u05E0\u05D9 \u05E0\u05E8\u05E9\u05DD \u05DC\u05D0\u05E8\u05D7?',
            answer:
              '\u05E0\u05D9\u05EA\u05DF \u05DC\u05D4\u05DB\u05E0\u05E1 \u05DC\u05E2\u05DE\u05D5\u05D3 <a target="_blank" href="/host">\u05D0\u05E0\u05D9 \u05E8\u05D5\u05E6\u05D4 \u05DC\u05D0\u05E8\u05D7<a/> \u05D5\u05DC\u05D4\u05D6\u05D9\u05DF \u05D0\u05EA \u05E4\u05E8\u05D8\u05D9 \u05D4\u05D0\u05D9\u05E8\u05D5\u05D7. '
          },
          {
            question:
              "\u05D0\u05D9\u05DA \u05E0\u05E8\u05D0\u05D4 \u05E2\u05E8\u05D1 '\u05D4\u05D0\u05D7\u05D9\u05DD \u05E9\u05DC\u05E0\u05D5'?",
            answer:
              '\u05DB\u05DC \u05DE\u05E4\u05D2\u05E9 \u05E0\u05E8\u05D0\u05D4 \u05E9\u05D5\u05E0\u05D4, \u05EA\u05DC\u05D5\u05D9 \u05D1\u05DA, \u05D1\u05D0\u05D7/\u05D5\u05EA \u05D5\u05D1\u05D3\u05D9\u05E0\u05DE\u05D9\u05E7\u05D4 \u05E9\u05E0\u05D5\u05E6\u05E8\u05EA.\n    <br/>\n    \u05E7\u05D9\u05D9\u05DE\u05D9\u05DD \u05DE\u05E1\u05E4\u05E8 \u05D3\u05D1\u05E8\u05D9\u05DD \u05E7\u05D1\u05D5\u05E2\u05D9\u05DD \u05DB\u05DE\u05E2\u05D8 \u05D1\u05DB\u05DC \u05DE\u05E4\u05D2\u05E9:\n    <br/>\n    \u05D4\u05EA\u05DB\u05E0\u05E1\u05D5\u05EA \u05E9\u05DC \u05D4\u05DE\u05E9\u05EA\u05EA\u05E4\u05D9\u05DD \u05D1\u05D1\u05D9\u05EA \u05D4\u05DE\u05D0\u05E8\u05D7, \u05D4\u05E6\u05D2\u05D4 \u05D5\u05E4\u05EA\u05D9\u05D7\u05D4 \u05E9\u05DC \u05D4\u05DE\u05D0\u05E8\u05D7 \u05E2\u05DC \u05D4\u05E2\u05E8\u05D1, \u05D5\u05D4\u05E2\u05D1\u05E8\u05EA \u05D4"\u05E9\u05E8\u05D1\u05D9\u05D8" \u05D0\u05DC \u05D4\u05D0\u05D7. \u05D0\u05E0\u05D5 \u05E0\u05E9\u05DE\u05D7 \u05D0\u05DD \u05D1\u05E4\u05EA\u05D9\u05D7\u05EA \u05D4\u05E2\u05E8\u05D1 \u05EA\u05D5\u05DB\u05DC \u05DC\u05EA\u05EA \u05E8\u05E7\u05E2 \u05E2\u05DC \u05E2\u05DE\u05D5\u05EA\u05EA \'\u05D4\u05D0\u05D7\u05D9\u05DD \u05E9\u05DC\u05E0\u05D5\' \u05D1\u05DB\u05D3\u05D9 \u05E9\u05E2\u05D5\u05D3 \u05D5\u05E2\u05D5\u05D3 \u05D0\u05E0\u05E9\u05D9\u05DD \u05D9\u05D9\u05D7\u05E9\u05E4\u05D5 \u05DC\u05E4\u05E2\u05D9\u05DC\u05D5\u05EA \u05E9\u05DC\u05E0\u05D5 \u05D5\u05D9\u05E7\u05D7 \u05D7\u05DC\u05E7 \u05D1\u05D4\u05E0\u05E6\u05D7\u05EA \u05D4\u05D0\u05D7\u05D9\u05DD \u05D5\u05D4\u05D0\u05D7\u05D9\u05D5\u05EA \u05D4\u05E9\u05DB\u05D5\u05DC\u05D9\u05DD.\n    '
          },
          {
            question:
              '\u05D0\u05DD \u05E0\u05E8\u05E9\u05DE\u05EA\u05D9 \u05DC\u05D0\u05E8\u05D7 \u05D6\u05D4 \u05D0\u05D5\u05DE\u05E8 \u05E9\u05D1\u05D5\u05D5\u05D3\u05D0\u05D5\u05EA \u05D0\u05D7 \u05D9\u05E9\u05EA\u05D1\u05E5 \u05DC\u05DE\u05E4\u05D2\u05E9 \u05D0\u05E6\u05DC\u05D9?',
            answer:
              '\u05D1\u05D3\u05E8\u05DA \u05DB\u05DC\u05DC, \u05DB\u05DE\u05D5\u05EA \u05D4\u05E0\u05E8\u05E9\u05DE\u05D9\u05DD \u05DC\u05D0\u05D9\u05E8\u05D5\u05D7 \u05D2\u05D3\u05D5\u05DC\u05D4 \u05DE\u05DB\u05DE\u05D5\u05EA \u05D4\u05D0\u05D7\u05D9\u05DD \u05D4\u05E0\u05E8\u05E9\u05DE\u05D9\u05DD, \u05DE\u05DB\u05D9\u05D5\u05DF \u05E9\u05DC\u05E8\u05D5\u05D1 \u05E7\u05DC \u05D9\u05D5\u05EA\u05E8 \u05DC\u05E4\u05EA\u05D5\u05D7 \u05D0\u05EA \u05D4\u05D1\u05D9\u05EA \u05DE\u05D0\u05E9\u05E8 \u05DC\u05D4\u05D5\u05D1\u05D9\u05DC \u05D5\u05DC\u05E9\u05EA\u05E3 \u05D1\u05E1\u05D9\u05E4\u05D5\u05E8 \u05D0\u05D9\u05E9\u05D9. \u05DB\u05D0\u05E9\u05E8 \u05D0\u05D7 \u05D9\u05E9\u05EA\u05D1\u05E5 \u05DC\u05D0\u05D9\u05E8\u05D5\u05D7 \u05D0\u05E6\u05DC\u05DA, \u05EA\u05E7\u05D1\u05DC \u05DE\u05E1\u05E8\u05D5\u05DF \u05D5\u05DE\u05D9\u05D9\u05DC \u05E2\u05DD \u05E4\u05E8\u05D8\u05D9\u05D5. \u05D7\u05E9\u05D5\u05D1 \u05DC\u05E7\u05E8\u05D5\u05D0 \u05E2\u05DC \u05D4\u05E0\u05D5\u05E4\u05DC \u05D1\u05D0\u05EA\u05E8 <a target="_blank" href="https://www.izkor.gov.il/">\u05D9\u05D6\u05DB\u05D5\u05E8<a/>, \u05DC\u05D1\u05E6\u05E2 \u05E9\u05D9\u05D7\u05EA \u05EA\u05D9\u05D0\u05D5\u05DD \u05E6\u05D9\u05E4\u05D9\u05D5\u05EA \u05D0\u05D5 \u05DE\u05E4\u05D2\u05E9 \u05D4\u05DB\u05E8\u05D5\u05EA \u05DE\u05E7\u05D3\u05D9\u05DD \u05E2\u05DD \u05D4\u05D0\u05D7, \u05D5\u05DB\u05DF \u05D9\u05E9\u05DC\u05D7 \u05D0\u05DC\u05D9\u05DA <a target="_blank" href="/assets/docs/\u05E2\u05E8\u05DB\u05EA%20\u05D0\u05D9\u05E8\u05D5\u05D7%20-%20\u05D4\u05D0\u05D7\u05D9\u05DD%20\u05E9\u05DC\u05E0\u05D5.pdf">\u05E2\u05E8\u05DB\u05EA \u05D0\u05D9\u05E8\u05D5\u05D7<a/>. \u05D0\u05DD \u05DC\u05D0 \u05EA\u05E7\u05D1\u05DC \u05E9\u05D9\u05D1\u05D5\u05E5 - \u05E0\u05D9\u05EA\u05DF \u05DB\u05DE\u05D5\u05D1\u05DF \u05DC\u05D4\u05D9\u05E8\u05E9\u05DD \u05DB\u05DE\u05E9\u05EA\u05EA\u05E3 \u05D1\u05D0\u05D7\u05D3 \u05D4\u05DE\u05E4\u05D2\u05E9\u05D9\u05DD \u05D4\u05E7\u05E8\u05D5\u05D1\u05D9\u05DD \u05DC\u05D1\u05D9\u05EA\u05DA.\n    '
          },
          {
            question:
              '\u05DE\u05D4 \u05D0\u05D5\u05DE\u05E8\u05EA \u05D4\u05D0\u05D5\u05E4\u05E6\u05D9\u05D4 "\u05D0\u05D9\u05E8\u05D5\u05D7 \u05DC\u05DE\u05D5\u05D6\u05DE\u05E0\u05D9\u05DD \u05D1\u05DC\u05D1\u05D3"?',
            answer:
              '\u05D0\u05D5\u05E4\u05E6\u05D9\u05D4 \u05D6\u05D5 \u05D0\u05D5\u05DE\u05E8\u05EA \u05E9\u05D4\u05DE\u05E4\u05D2\u05E9 \u05E1\u05D2\u05D5\u05E8 \u05DC\u05DE\u05E9\u05EA\u05EA\u05E4\u05D9\u05DD \u05D7\u05D9\u05E6\u05D5\u05E0\u05D9\u05D9\u05DD, \u05D4\u05DE\u05D0\u05E8\u05D7 \u05DE\u05D6\u05DE\u05D9\u05DF \u05DC\u05DE\u05E4\u05D2\u05E9 \u05E7\u05D1\u05D5\u05E6\u05EA \u05D0\u05E0\u05E9\u05D9\u05DD \u05E1\u05D2\u05D5\u05E8\u05D4 \u05E9\u05DC\u05D0 \u05E0\u05D9\u05EA\u05DF \u05DC\u05D4\u05E6\u05D8\u05E8\u05E3 \u05D0\u05DC\u05D9\u05D4.'
          },
          {
            question:
              '\u05D0\u05D9\u05DA \u05D0\u05E0\u05D9 \u05DE\u05D6\u05DE\u05D9\u05DF \u05D0\u05E0\u05E9\u05D9\u05DD \u05DC\u05DE\u05E4\u05D2\u05E9 \u05D1\u05D1\u05D9\u05EA\u05D9?',
            answer:
              '\u05DC\u05D0\u05D7\u05E8 \u05E9\u05D9\u05D1\u05D5\u05E5 \u05D4\u05D0\u05D7/\u05D5\u05EA \u05D1\u05D1\u05D9\u05EA\u05DA, \u05D9\u05E9 \u05DC\u05D4\u05D5\u05E6\u05D9\u05D0 \u05E4\u05E8\u05E1\u05D5\u05DD \u05E2\u05DD \u05E9\u05DE\u05D5 \u05E9\u05DC \u05D4\u05D0\u05D7 \u05D5\u05DC\u05D4\u05E4\u05D9\u05E5 \u05D1\u05D9\u05DF \u05D7\u05D1\u05E8\u05D9\u05DD \u05D5\u05DE\u05D3\u05D9\u05D5\u05EA \u05D7\u05D1\u05E8\u05EA\u05D9\u05D5\u05EA. <a target="_blank" href="/assets/docs/\u05E2\u05E8\u05DB\u05EA%20\u05D0\u05D9\u05E8\u05D5\u05D7%20-%20\u05D4\u05D0\u05D7\u05D9\u05DD%20\u05E9\u05DC\u05E0\u05D5.pdf">\u05D1\u05E2\u05E8\u05DB\u05EA \u05D4\u05DE\u05D0\u05E8\u05D7<a/> \u05E0\u05D9\u05EA\u05DF \u05DC\u05DE\u05E6\u05D5\u05D0 \u05D2\u05DD \u05D4\u05D6\u05DE\u05E0\u05D5\u05EA \u05DC\u05E9\u05D9\u05EA\u05D5\u05E3 \u05D1\u05E8\u05E9\u05EA\u05D5\u05EA \u05D4\u05D7\u05D1\u05E8\u05EA\u05D9\u05D5\u05EA \u05D4\u05E9\u05D5\u05E0\u05D5\u05EA. '
          },
          {
            question:
              '\u05DB\u05DE\u05D4 \u05D0\u05E0\u05E9\u05D9\u05DD \u05D0\u05D5\u05DB\u05DC \u05DC\u05D4\u05D6\u05DE\u05D9\u05DF \u05DC\u05D0\u05D9\u05E8\u05D5\u05D7 \u05E2\u05E6\u05DE\u05D5?',
            answer:
              '\u05EA\u05DC\u05D5\u05D9 \u05D1\u05DB\u05DE\u05D5\u05EA \u05D4\u05DE\u05E9\u05EA\u05EA\u05E4\u05D9\u05DD \u05E9\u05D9\u05DB\u05D5\u05DC\u05D4 \u05DC\u05D4\u05D9\u05DB\u05E0\u05E1 \u05DC\u05D1\u05D9\u05EA\u05DA / \u05DC\u05DE\u05E7\u05D5\u05DD \u05D4\u05D0\u05D9\u05E8\u05D5\u05D7. \u05E0\u05D9\u05EA\u05DF \u05DC\u05E7\u05D9\u05D9\u05DD \u05DE\u05E4\u05D2\u05E9\u05D9\u05DD \u05D1\u05D7\u05DC\u05DC\u05D9\u05DD \u05D2\u05D3\u05D5\u05DC\u05D9\u05DD, \u05D3\u05D5\u05D2\u05DE\u05EA \u05DE\u05EA\u05E0"\u05E1, \u05D0\u05D5\u05D3\u05D9\u05D8\u05D5\u05E8\u05D9\u05D5\u05DD \u05D5\u05DB\u05D3\u05D5\u05DE\u05D4, \u05D1\u05EA\u05E0\u05D0\u05D9 \u05E9\u05D6\u05D4 \u05DE\u05EA\u05D0\u05D9\u05DD \u05DC\u05D0\u05D7 \u05D5\u05E7\u05D9\u05D9\u05DE\u05D9\u05DD \u05D4\u05DB\u05DC\u05D9\u05DD \u05D4\u05E0\u05D7\u05D5\u05E6\u05D9\u05DD \u05DC\u05D0\u05D7 (\u05DB\u05DE\u05D5 \u05DE\u05E1\u05DA \u05D5\u05DE\u05E7\u05E8\u05DF \u05D1\u05DE\u05D9\u05D3\u05EA \u05D4\u05E6\u05D5\u05E8\u05DA). \u05D1\u05E2\u05EA \u05E4\u05EA\u05D9\u05D7\u05EA \u05D4\u05D0\u05D9\u05E8\u05D5\u05D7, \u05D0\u05E0\u05D0 \u05E8\u05E9\u05D5\u05DD \u05D0\u05EA \u05DB\u05DE\u05D5\u05EA \u05D4\u05DE\u05E9\u05EA\u05EA\u05E4\u05D9\u05DD \u05D4\u05DE\u05E7\u05E1\u05D9\u05DE\u05DC\u05D9\u05EA.'
          },
          {
            question:
              '\u05D0\u05D9\u05DA \u05D0\u05D5\u05DB\u05DC \u05DC\u05D9\u05E6\u05D5\u05E8 \u05E7\u05E9\u05E8 \u05E2\u05DD \u05D4\u05D0\u05E0\u05E9\u05D9\u05DD \u05E9\u05E0\u05E8\u05E9\u05DE\u05D5 \u05DC\u05DE\u05E4\u05D2\u05E9?',
            answer:
              '\u05E0\u05D9\u05EA\u05DF \u05DC\u05E7\u05D1\u05DC \u05D0\u05EA \u05D4\u05E4\u05E8\u05D8\u05D9\u05DD \u05E9\u05DC \u05D4\u05DE\u05E9\u05EA\u05EA\u05E4\u05D9\u05DD \u05E9\u05E0\u05E8\u05E9\u05DE\u05D5 \u05DC\u05D1\u05D9\u05EA\u05DA/\u05DC\u05DE\u05E4\u05D2\u05E9 \u05D1\u05D3\u05E3 \u05D4\u05D0\u05D9\u05E8\u05D5\u05D7 \u05D1\u05D0\u05EA\u05E8.'
          },
          {
            question:
              '\u05DC\u05D0\u05D7\u05E8 \u05D4\u05E9\u05D9\u05D1\u05D5\u05E5 \u05E9\u05DC \u05D0\u05D7 \u05DC\u05D1\u05D9\u05EA\u05D9 \u05DE\u05D4 \u05E2\u05DC\u05D9 \u05DC\u05E2\u05E9\u05D5\u05EA?',
            answer:
              '\u05DB\u05D0\u05E9\u05E8 \u05D0\u05D7 \u05D9\u05E9\u05EA\u05D1\u05E5 \u05DC\u05D0\u05D9\u05E8\u05D5\u05D7 \u05D0\u05E6\u05DC\u05DA, \u05EA\u05E7\u05D1\u05DC \u05DE\u05E1\u05E8\u05D5\u05DF \u05D5\u05DE\u05D9\u05D9\u05DC \u05E2\u05DD \u05E4\u05E8\u05D8\u05D9\u05D5. \u05D7\u05E9\u05D5\u05D1 \u05DC\u05E7\u05E8\u05D5\u05D0 \u05E2\u05DC \u05D4\u05E0\u05D5\u05E4\u05DC \u05D1\u05D0\u05EA\u05E8 <a target="_blank" href="https://www.izkor.gov.il/">\u05D9\u05D6\u05DB\u05D5\u05E8<a/>, \u05DC\u05D1\u05E6\u05E2 \u05E9\u05D9\u05D7\u05EA \u05EA\u05D9\u05D0\u05D5\u05DD \u05E6\u05D9\u05E4\u05D9\u05D5\u05EA \u05D0\u05D5 \u05DC\u05E7\u05D9\u05D9\u05DD \u05DE\u05E4\u05D2\u05E9 \u05D4\u05DB\u05E8\u05D5\u05EA \u05DE\u05E7\u05D3\u05D9\u05DD \u05E2\u05DD \u05D4\u05D0\u05D7, \u05D5\u05DB\u05DF \u05D9\u05E9\u05DC\u05D7 \u05D0\u05DC\u05D9\u05DA <a target="_blank" href="/assets/docs/\u05E2\u05E8\u05DB\u05EA%20\u05D0\u05D9\u05E8\u05D5\u05D7%20-%20\u05D4\u05D0\u05D7\u05D9\u05DD%20\u05E9\u05DC\u05E0\u05D5.pdf">\u05E2\u05E8\u05DB\u05EA \u05D0\u05D9\u05E8\u05D5\u05D7<a/>.'
          },
          {
            question:
              '\u05D0\u05E0\u05D9 \u05E8\u05D5\u05E6\u05D4 \u05DC\u05D1\u05D8\u05DC \u05D0\u05EA \u05D4\u05D0\u05D9\u05E8\u05D5\u05D7 \u05D0\u05E6\u05DC\u05D9, \u05DE\u05D4 \u05E2\u05DC\u05D9 \u05DC\u05E2\u05E9\u05D5\u05EA?',
            answer:
              '\u05D7\u05E9\u05D5\u05D1 \u05DE\u05D0\u05D5\u05D3 \u05DC\u05D4\u05D1\u05D9\u05DF \u05E9\u05D1\u05E2\u05EA \u05E9\u05D9\u05D1\u05D5\u05E5 \u05D0\u05D7 \u05DC\u05DE\u05E4\u05D2\u05E9 \u05D1\u05D1\u05D9\u05EA\u05DA, \u05D9\u05E9 \u05D4\u05EA\u05DB\u05D5\u05D5\u05E0\u05E0\u05D5\u05EA \u05E9\u05DC \u05D4\u05D0\u05D7 \u05DC\u05E7\u05E8\u05D0\u05EA \u05D4\u05DE\u05E4\u05D2\u05E9 \u05D5\u05DC\u05DB\u05DF, \u05DC\u05D1\u05D9\u05D8\u05D5\u05DC \u05D4\u05DE\u05E4\u05D2\u05E9 \u05D9\u05E9 \u05D4\u05E9\u05DC\u05DB\u05D5\u05EA \u05E8\u05D1\u05D5\u05EA. \u05E2\u05DC \u05DB\u05DF, \u05D9\u05E9 \u05DC\u05E2\u05E9\u05D5\u05EA \u05D4\u05DB\u05DC \u05E2\u05DC \u05DE\u05E0\u05EA \u05DC\u05D0 \u05DC\u05D1\u05D8\u05DC.  \u05D9\u05D7\u05D3 \u05E2\u05DD \u05D6\u05D0\u05EA \u05D0\u05E0\u05D5 \u05DE\u05D1\u05D9\u05E0\u05D9\u05DD \u05DB\u05D9 \u05DC\u05E2\u05D9\u05EA\u05D9\u05DD \u05D9\u05EA\u05DB\u05E0\u05D5 \u05D0\u05D9\u05E8\u05D5\u05E2\u05D9\u05DD \u05DC\u05D0 \u05E6\u05E4\u05D5\u05D9\u05D9\u05DD, \u05D5\u05DC\u05DB\u05DF \u05D0\u05DD \u05D9\u05E9 \u05E6\u05D5\u05E8\u05DA \u05D1\u05D1\u05D9\u05D8\u05D5\u05DC \u05D4\u05DE\u05E4\u05D2\u05E9 - \u05E0\u05D9\u05EA\u05DF <a target="_blank" href="/contact">\u05DC\u05D9\u05E6\u05D5\u05E8 \u05D0\u05D9\u05EA\u05E0\u05D5 \u05E7\u05E9\u05E8<a/>.'
          },
          {
            question:
              '\u05DE\u05D4 \u05D0\u05E0\u05D9 \u05E2\u05D5\u05E9\u05D4 \u05E2\u05DD \u05D4\u05D0\u05D7 \u05E9\u05E9\u05D5\u05D1\u05E5 \u05D0\u05DC\u05D9 \u05D1\u05D9\u05D8\u05DC \u05D0\u05EA \u05D4\u05D2\u05E2\u05EA\u05D5?',
            answer:
              '\u05E0\u05D9\u05EA\u05DF <a target="_blank" href="/contact">\u05DC\u05D9\u05E6\u05D5\u05E8 \u05D0\u05D9\u05EA\u05E0\u05D5 \u05E7\u05E9\u05E8<a/> \u05E2\u05DC \u05DE\u05E0\u05EA \u05E9\u05E0\u05D5\u05DB\u05DC \u05DC\u05E9\u05D1\u05E5 \u05DC\u05DA \u05D0\u05D7 \u05D0\u05D7\u05E8.'
          },
          {
            question:
              '\u05DE\u05D4 \u05D0\u05E0\u05D9 \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05DB\u05D9\u05DF \u05DC\u05E7\u05E8\u05D0\u05EA \u05D4\u05DE\u05E4\u05D2\u05E9?',
            answer:
              '\u05D4\u05D0\u05D9\u05E8\u05D5\u05D7 \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA \u05D1\u05D0\u05D5\u05D5\u05D9\u05E8\u05D4 \u05E0\u05D5\u05D7\u05D4 \u05D5\u05E0\u05E2\u05D9\u05DE\u05D4 \u05DC\u05D0\u05D7 \u05D5\u05DC\u05DE\u05E9\u05EA\u05EA\u05E4\u05D9\u05DD. \u05E0\u05D9\u05EA\u05DF \u05DC\u05D4\u05DB\u05D9\u05DF \u05DB\u05D9\u05D1\u05D5\u05D3, \u05DE\u05E7\u05D5\u05DD \u05D9\u05E9\u05D9\u05D1\u05D4 \u05E0\u05D5\u05D7 \u05D5\u05DC\u05EA\u05D0\u05DD \u05E6\u05D9\u05E4\u05D9\u05D5\u05EA \u05E2\u05DD \u05D4\u05D0\u05D7 \u05D1\u05E0\u05D5\u05D2\u05E2 \u05DC\u05D0\u05D1\u05D9\u05D6\u05E8\u05D9\u05DD \u05E9\u05D4\u05D5\u05D0 \u05E6\u05E8\u05D9\u05DA (\u05DB\u05DE\u05D5 \u05DE\u05E7\u05E8\u05DF, \u05DE\u05E1\u05DA \u05D5\u05DB\u05D5\'). \u05D1\u05E2\u05E8\u05DB\u05EA \u05D4\u05D0\u05D9\u05E8\u05D5\u05D7 \u05E0\u05D9\u05EA\u05DF \u05DC\u05DE\u05E6\u05D5\u05D0 \u05E9\u05DC\u05D8\u05D9 \u05D4\u05DB\u05D5\u05D5\u05E0\u05D4 \u05DC\u05D0\u05D5\u05E8\u05D7\u05D9\u05DD, \u05D4\u05E0\u05D7\u05D9\u05D5\u05EA, \u05D4\u05E1\u05D1\u05E8 \u05E2\u05DC \u05D4\u05E2\u05DE\u05D5\u05EA\u05D4 \u05D5\u05D4\u05D6\u05DE\u05E0\u05D5\u05EA \u05DC\u05D0\u05D9\u05E8\u05D5\u05D7. \u05DE\u05D9\u05D3\u05E2 \u05E0\u05D5\u05E1\u05E3 \u05D1\u05E2\u05DE\u05D5\u05D3 <a target="_blank" href="/agenda">\u05DE\u05D1\u05E0\u05D4 \u05D4\u05E2\u05E8\u05D1<a/>'
          },
          {
            question:
              "\u05D4\u05D0\u05DD \u05D0\u05E0\u05D9 \u05D0\u05D5\u05DB\u05DC \u05DC\u05E7\u05D9\u05D9\u05DD \u05D0\u05EA \u05D4\u05DE\u05E4\u05D2\u05E9 \u05E9\u05DC '\u05D4\u05D0\u05D7\u05D9\u05DD \u05E9\u05DC\u05E0\u05D5' \u05D1\u05E9\u05E2\u05D5\u05EA \u05D4\u05D9\u05D5\u05DD \u05D5\u05D1\u05DE\u05E1\u05D2\u05E8\u05EA \u05D1\u05D9\u05EA \u05E1\u05E4\u05E8/ \u05E2\u05D1\u05D5\u05D3\u05D4 \u05D5\u05DB\u05D5?",
            answer:
              '\u05E8\u05D5\u05D1 \u05D4\u05DE\u05E4\u05D2\u05E9\u05D9\u05DD \u05D9\u05EA\u05E7\u05D9\u05D9\u05DE\u05D5 \u05D1\u05D9\u05D5\u05DD \u05E8\u05D0\u05E9\u05D5\u05DF \u05D4-26.4 \u05D1\u05E9\u05E2\u05D4 20:00, \u05D0\u05DA \u05D9\u05E9\u05E0\u05D4 \u05D0\u05E4\u05E9\u05E8\u05D5\u05EA \u05DC\u05E7\u05D9\u05D9\u05DD \u05DE\u05E4\u05D2\u05E9\u05D9\u05DD \u05DC\u05D0\u05D5\u05E8\u05DA \u05D4\u05E9\u05D1\u05D5\u05E2 \u05E1\u05D1\u05D9\u05D1 \u05D9\u05D5\u05DD \u05D4\u05D6\u05D9\u05DB\u05E8\u05D5\u05DF, \u05D1\u05D9\u05DF \u05D4\u05EA\u05D0\u05E8\u05D9\u05DB\u05D9\u05DD 22.4-28.4. \u05E0\u05D9\u05EA\u05DF \u05DC\u05D1\u05D3\u05D5\u05E7 \u05D0\u05EA \u05D4\u05EA\u05D0\u05E8\u05D9\u05DA \u05D5\u05D4\u05E9\u05E2\u05D4 \u05D1<a target="_blank" href="/meetings">\u05E2\u05DE\u05D5\u05D3 \u05D4\u05DE\u05E4\u05D2\u05E9\u05D9\u05DD<a/> \u05D1\u05DC\u05D7\u05D9\u05E6\u05D4 \u05E2\u05DC \u05D0\u05D9\u05E8\u05D5\u05D7.'
          },
          {
            question:
              '\u05D4\u05D0\u05DD \u05D4\u05DE\u05E4\u05D2\u05E9\u05D9\u05DD \u05DE\u05EA\u05E7\u05D9\u05D9\u05DE\u05D9\u05DD \u05D1\u05E2\u05E8\u05D1 \u05D0\u05D5 \u05D1\u05D9\u05D5\u05DD \u05D4\u05D6\u05D9\u05DB\u05E8\u05D5\u05DF?',
            answer:
              '\u05DE\u05E4\u05D2\u05E9\u05D9 \'\u05D4\u05D0\u05D7\u05D9\u05DD \u05E9\u05DC\u05E0\u05D5\' \u05D9\u05EA\u05E7\u05D9\u05D9\u05DE\u05D5 \u05D1\u05E8\u05D5\u05D1\u05DD \u05D1\u05D9\u05D5\u05DD \u05E8\u05D0\u05E9\u05D5\u05DF \u05D4-26.4 \u05D1\u05E9\u05E2\u05D4 20:00. \u05D0\u05DA \u05D9\u05E9\u05E0\u05D4 \u05D0\u05E4\u05E9\u05E8\u05D5\u05EA \u05DC\u05E7\u05D9\u05D9\u05DD \u05DE\u05E4\u05D2\u05E9\u05D9\u05DD \u05DC\u05D0\u05D5\u05E8\u05DA \u05D4\u05E9\u05D1\u05D5\u05E2 \u05E1\u05D1\u05D9\u05D1 \u05D9\u05D5\u05DD \u05D4\u05D6\u05D9\u05DB\u05E8\u05D5\u05DF, \u05D1\u05D9\u05DF \u05D4\u05EA\u05D0\u05E8\u05D9\u05DB\u05D9\u05DD 22.4-28.4. \u05E0\u05D9\u05EA\u05DF \u05DC\u05D1\u05D3\u05D5\u05E7 \u05D0\u05EA \u05D4\u05EA\u05D0\u05E8\u05D9\u05DA \u05D5\u05D4\u05E9\u05E2\u05D4 \u05D1<a target="_blank" href="/meetings">\u05E2\u05DE\u05D5\u05D3 \u05D4\u05DE\u05E4\u05D2\u05E9\u05D9\u05DD<a/> \u05D1\u05DC\u05D7\u05D9\u05E6\u05D4 \u05E2\u05DC \u05D0\u05D9\u05E8\u05D5\u05D7.'
          },
          {
            question:
              '\u05E2\u05D3 \u05DE\u05EA\u05D9 \u05D9\u05E9\u05E0\u05D4 \u05D0\u05E4\u05E9\u05E8\u05D5\u05EA \u05DC\u05D4\u05D9\u05E8\u05E9\u05DD \u05DC\u05D0\u05D9\u05E8\u05D5\u05D7 \u05D1\u05D1\u05D9\u05EA\u05D9?',
            answer:
              '\u05E0\u05D9\u05EA\u05DF \u05DC\u05D4\u05E8\u05E9\u05DD \u05E2\u05D3 \u05DB\u05E9\u05D1\u05D5\u05E2\u05D9\u05D9\u05DD \u05DC\u05E4\u05E0\u05D9 \u05D9\u05D5\u05DD \u05D4\u05D6\u05D9\u05DB\u05E8\u05D5\u05DF.'
          },
          {
            question:
              '\u05DE\u05D4 \u05D0\u05E0\u05D9 \u05E2\u05D5\u05E9\u05D4 \u05D1\u05E1\u05D5\u05E3 \u05D4\u05DE\u05E4\u05D2\u05E9?',
            answer:
              '\u05D1\u05E1\u05D5\u05E3 \u05D4\u05DE\u05E4\u05D2\u05E9 \u05EA\u05E7\u05D1\u05DC\u05D5 \u05DE\u05E9\u05D5\u05D1 \u05DC\u05D3\u05D5\u05D0\u05E8 \u05D4\u05D0\u05DC\u05E7\u05D8\u05E8\u05D5\u05E0\u05D9 \u05E9\u05DC\u05DB\u05DD \u05D5\u05E0\u05E9\u05DE\u05D7 \u05E9\u05EA\u05E2\u05E0\u05D5 \u05E2\u05DC\u05D9\u05D5 \u05E2\u05DC \u05DE\u05E0\u05EA \u05E9\u05E0\u05D5\u05DB\u05DC \u05DC\u05DC\u05DE\u05D5\u05D3 \u05DE\u05D7\u05D5\u05D5\u05D9\u05D9\u05EA\u05DB\u05DD.\u05DB\u05DE\u05D5 \u05DB\u05DF \u05E0\u05E9\u05DE\u05D7 \u05E9\u05EA\u05E9\u05EA\u05E4\u05D5 \u05D1\u05E8\u05E9\u05EA\u05D5\u05EA \u05D4\u05D7\u05D1\u05E8\u05EA\u05D9\u05D5\u05EA \u05D0\u05EA \u05D4\u05EA\u05DE\u05D5\u05E0\u05D5\u05EA \u05DE\u05D4\u05DE\u05E4\u05D2\u05E9 \u05D5\u05EA\u05EA\u05D9\u05D9\u05D2\u05D5 \u05D0\u05EA \u05D4\u05E2\u05DE\u05D5\u05D3 \u05E9\u05DC \u05D4\u05D0\u05D7\u05D9\u05DD \u05E9\u05DC\u05E0\u05D5.'
          },
          {
            question:
              '\u05D0\u05E0\u05D9 \u05DC\u05D0 \u05D2\u05E8 \u05D1\u05D0\u05E8\u05E5 \u05D5\u05E8\u05D5\u05E6\u05D4 \u05DC\u05E7\u05D9\u05D9\u05DD \u05DE\u05E4\u05D2\u05E9 \u05D1\u05D7\u05D5"\u05DC, \u05DE\u05D4 \u05D0\u05E0\u05D9 \u05E6\u05E8\u05D9\u05DA \u05DC\u05E2\u05E9\u05D5\u05EA?',
            answer:
              '\u05E0\u05D9\u05EA\u05DF <a target="_blank" href="/contact">\u05DC\u05D9\u05E6\u05D5\u05E8 \u05D0\u05D9\u05EA\u05E0\u05D5 \u05E7\u05E9\u05E8<a/> \u05D5\u05E0\u05E9\u05DE\u05D7 \u05DC\u05D7\u05D6\u05D5\u05E8 \u05D0\u05DC\u05D9\u05DA \u05DC\u05E4\u05E8\u05D8\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD.'
          },
          {
            question:
              '\u05D0\u05DD \u05D0\u05E0\u05D9 \u05E8\u05D5\u05E6\u05D4 \u05DC\u05D0\u05E8\u05D7 \u05D0\u05D7 \u05E1\u05E4\u05E6\u05D9\u05E4\u05D9, \u05DE\u05D4 \u05E2\u05DC\u05D9\u05D9 \u05DC\u05E2\u05E9\u05D5\u05EA?',
            answer:
              '\u05D0\u05DD \u05D9\u05E9 \u05DC\u05DA \u05D4\u05D9\u05DB\u05E8\u05D5\u05EA \u05DE\u05E7\u05D3\u05D9\u05DE\u05D4 \u05E2\u05DD \u05D0\u05D7 \u05E9\u05DB\u05D5\u05DC, \u05E0\u05D9\u05EA\u05DF \u05DC\u05D9\u05E6\u05D5\u05E8 \u05D0\u05D9\u05EA\u05D5 \u05E7\u05E9\u05E8 \u05E2\u05DC \u05DE\u05E0\u05EA \u05E9\u05D9\u05E8\u05E9\u05DD \u05D1\u05D0\u05EA\u05E8 \u05D5\u05D9\u05E9\u05EA\u05D1\u05E5 \u05D0\u05DC\u05D9\u05DA \u05DC\u05D0\u05D9\u05E8\u05D5\u05D7. \u05D2\u05DD \u05D0\u05DD \u05D9\u05E9 \u05D1\u05D9\u05E0\u05D9\u05DB\u05DD \u05D4\u05D9\u05DB\u05E8\u05D5\u05EA \u05DE\u05E7\u05D3\u05D9\u05DE\u05D4 - \u05D7\u05E9\u05D5\u05D1 \u05E9\u05D4\u05D0\u05D7 \u05D9\u05E8\u05E9\u05DD \u05D1\u05DE\u05E2\u05E8\u05DB\u05EA \u05DB\u05D3\u05D9 \u05E9\u05E0\u05D5\u05DB\u05DC \u05DC\u05E9\u05D5\u05D7\u05D7 \u05D0\u05D9\u05EA\u05D5 \u05D5\u05DC\u05D4\u05D6\u05DE\u05D9\u05E0\u05D5 \u05DC\u05E4\u05E2\u05D9\u05DC\u05D5\u05EA \u05D4\u05E2\u05DE\u05D5\u05EA\u05D4 \u05D5\u05DC\u05E7\u05D4\u05D9\u05DC\u05EA \u05D4\u05D0\u05D7\u05D9\u05DD \u05E9\u05DC\u05E0\u05D5.'
          },
          {
            question:
              '\u05D4\u05D0\u05DD \u05EA\u05D5\u05DB\u05DF \u05D4\u05DE\u05E4\u05D2\u05E9 \u05DE\u05EA\u05D0\u05D9\u05DD \u05DC\u05D1\u05E0\u05D9 \u05E0\u05D5\u05E2\u05E8?',
            answer:
              '\u05EA\u05D5\u05DB\u05DF \u05D4\u05DE\u05E4\u05D2\u05E9\u05D9\u05DD \u05DE\u05EA\u05D0\u05D9\u05DD \u05DC\u05D1\u05E0\u05D9 \u05E0\u05D5\u05E2\u05E8, \u05D9\u05E9 \u05DC\u05E6\u05D9\u05D9\u05DF \u05D1\u05E2\u05EA \u05E4\u05EA\u05D9\u05D7\u05EA \u05D4\u05DE\u05E4\u05D2\u05E9 \u05D1\u05D0\u05EA\u05E8 \u05DE\u05D9\u05D4\u05D5 \u05E7\u05D4\u05DC \u05D4\u05D9\u05E2\u05D3, \u05D5\u05DB\u05DF \u05DC\u05E6\u05D9\u05D9\u05DF \u05D6\u05D0\u05EA \u05D1\u05E9\u05D9\u05D7\u05EA \u05EA\u05D9\u05D0\u05D5\u05DD \u05D4\u05E6\u05D9\u05E4\u05D9\u05D5\u05EA \u05E2\u05DD \u05D4\u05D0\u05D7. '
          },
          {
            question: '\u05DB\u05DE\u05D4 \u05D6\u05DE\u05DF \u05D0\u05D5\u05E8\u05DA \u05DE\u05E4\u05D2\u05E9?',
            answer:
              '\u05D1\u05DE\u05DE\u05D5\u05E6\u05E2 \u05D4\u05DE\u05E4\u05D2\u05E9\u05D9\u05DD \u05E0\u05E2\u05D9\u05DD \u05D1\u05D9\u05DF \u05E9\u05E2\u05D4-\u05E9\u05E2\u05D4 \u05D5\u05D7\u05E6\u05D9, \u05DE\u05D0\u05D5\u05D3 \u05EA\u05DC\u05D5\u05D9 \u05D1\u05DA, \u05D1\u05E7\u05D4\u05DC \u05D4\u05E9\u05D5\u05DE\u05E2\u05D9\u05DD \u05D5\u05D1\u05D0\u05D7. \u05D7\u05E9\u05D5\u05D1 \u05DC\u05EA\u05D0\u05DD \u05E6\u05D9\u05E4\u05D9\u05D5\u05EA \u05DC\u05E4\u05E0\u05D9 \u05DB\u05DF \u05D5\u05DC\u05EA\u05DB\u05E0\u05DF \u05DE\u05E8\u05D0\u05E9 \u05D0\u05EA \u05D4\u05E2\u05E8\u05D1 \u05D5\u05D0\u05D5\u05E8\u05DB\u05D5.'
          }
        ];
        var qnaParticipates = [
          {
            question: "\u05DE\u05D4 \u05D6\u05D4 \u05D0\u05D5\u05DE\u05E8 '\u05DE\u05E9\u05EA\u05EA\u05E3'?",
            answer:
              '\u05DE\u05E9\u05EA\u05EA\u05E3 \u05D4\u05D9\u05E0\u05D5 \u05E7\u05D4\u05DC \u05D4\u05E9\u05D5\u05DE\u05E2\u05D9\u05DD \u05D0\u05E9\u05E8 \u05DE\u05D2\u05D9\u05E2\u05D9\u05DD \u05DC\u05DE\u05E4\u05D2\u05E9\u05D9\u05DD \u05D4\u05E4\u05EA\u05D5\u05D7\u05D9\u05DD \u05DC\u05E7\u05D4\u05DC \u05D4\u05E8\u05D7\u05D1. \u05DB\u05DE\u05D5\u05D1\u05DF \u05E9\u05D1\u05D9\u05DF \u05E7\u05D4\u05DC \u05D4\u05E9\u05D5\u05DE\u05E2\u05D9\u05DD, \u05D9\u05E9\u05EA\u05EA\u05E4\u05D5 \u05D2\u05DD \u05D0\u05D7\u05D9\u05DD \u05D5\u05D0\u05D7\u05D9\u05D5\u05EA \u05E9\u05DB\u05D5\u05DC\u05D9\u05DD.'
          },
          {
            question:
              "\u05D0\u05D9\u05DA \u05E0\u05D9\u05EA\u05DF \u05DC\u05D4\u05E9\u05EA\u05EA\u05E3 \u05D1\u05DE\u05E4\u05D2\u05E9\u05D9 '\u05D4\u05D0\u05D7\u05D9\u05DD \u05E9\u05DC\u05E0\u05D5'?",
            answer:
              '\u05E0\u05D9\u05EA\u05DF \u05DC\u05D4\u05DB\u05E0\u05E1 \u05DC\u05E2\u05DE\u05D5\u05D3 \'<a target="_blank" href="/participate">\u05D0\u05E0\u05D9 \u05E8\u05D5\u05E6\u05D4 \u05DC\u05D4\u05E9\u05EA\u05EA\u05E3<a/>\' \u05D5\u05DC\u05D4\u05D6\u05D9\u05DF \u05D0\u05EA \u05E4\u05E8\u05D8\u05D9\u05DA. \u05D1\u05E2\u05DE\u05D5\u05D3 \u05D4\u05DE\u05E4\u05D2\u05E9\u05D9\u05DD \u05E0\u05D9\u05EA\u05DF \u05DC\u05D7\u05E4\u05E9 \u05DE\u05E4\u05D2\u05E9\u05D9\u05DD \u05D4\u05E7\u05E8\u05D5\u05D1\u05D9\u05DD \u05DC\u05DE\u05E7\u05D5\u05DD \u05DE\u05D2\u05D5\u05E8\u05D9\u05DA. \u05DC\u05D0\u05D7\u05E8 \u05E9\u05D1\u05D7\u05E8\u05EA \u05D1\u05DE\u05E4\u05D2\u05E9, \u05E0\u05D9\u05EA\u05DF \u05DC\u05DC\u05D7\u05D5\u05E5 \u05E2\u05DC \u05DB\u05E4\u05EA\u05D5\u05E8 \'\u05D4\u05E9\u05EA\u05D1\u05E5\'. \u05DC\u05D0\u05D7\u05E8 \u05D4\u05E9\u05D9\u05D1\u05D5\u05E5, \u05D4\u05DE\u05D0\u05E8\u05D7 \u05D9\u05E7\u05D1\u05DC \u05D4\u05D5\u05D3\u05E2\u05D4 \u05D5\u05D9\u05D0\u05E9\u05E8 \u05D0\u05EA \u05D4\u05E9\u05EA\u05EA\u05E4\u05D5\u05EA\u05DA. \u05E9\u05D9\u05DE\u05D5 \u05DC\u05D1 \u05DC\u05E7\u05E8\u05D0\u05EA \u05D4\u05DE\u05E4\u05D2\u05E9 \u05E9\u05E2\u05E6\u05DE\u05D5 - \u05E9\u05D0\u05DB\u05DF \u05D4\u05E9\u05EA\u05D1\u05E5 \u05D0\u05D7 \u05DC\u05DE\u05E4\u05D2\u05E9 \u05D0\u05DC\u05D9\u05D5 \u05E0\u05E8\u05E9\u05DE\u05EA\u05DD.'
          },
          {
            question:
              '\u05D4\u05D0\u05DD \u05E0\u05D9\u05EA\u05DF \u05DC\u05D4\u05E9\u05EA\u05EA\u05E3 \u05D1\u05D9\u05D5\u05EA\u05E8 \u05DE\u05D0\u05D9\u05E8\u05D5\u05E2 \u05D0\u05D7\u05D3?',
            answer:
              '\u05DB\u05DE\u05D5\u05D1\u05DF, \u05D1\u05E2\u05EA \u05D4\u05E8\u05D9\u05E9\u05D5\u05DD \u05D1\u05D0\u05EA\u05E8 \u05E0\u05D9\u05EA\u05DF \u05DC\u05D4\u05D9\u05E8\u05E9\u05DD \u05DC\u05DB\u05DE\u05D4 \u05D1\u05EA\u05D9\u05DD \u05DE\u05D0\u05E8\u05D7\u05D9\u05DD, \u05D0\u05DA \u05E9\u05D9\u05DD \u05DC\u05D1 \u05E9\u05D4\u05EA\u05D0\u05E8\u05D9\u05DA \u05D5\u05D4\u05E9\u05E2\u05D4 \u05D0\u05D9\u05E0\u05DD \u05D7\u05D5\u05E4\u05E4\u05D9\u05DD.'
          },
          {
            question:
              '\u05D0\u05D9\u05DA \u05D0\u05E0\u05D9 \u05D9\u05D5\u05E6\u05E8 \u05E7\u05E9\u05E8 \u05E2\u05DD \u05D4\u05DE\u05D0\u05E8\u05D7?',
            answer:
              '\u05DC\u05D0\u05D7\u05E8 \u05E9\u05D4\u05E9\u05EA\u05D1\u05E6\u05EA \u05DC\u05D0\u05D9\u05E8\u05D5\u05D7, \u05EA\u05D2\u05D9\u05E2 \u05DC\u05E2\u05DE\u05D5\u05D3 \u05D3\u05E3 \u05D0\u05D9\u05E8\u05D5\u05D7 \u05E2\u05DD \u05DB\u05DC \u05D4\u05E4\u05E8\u05D8\u05D9\u05DD. \u05DC\u05DE\u05D0\u05E8\u05D7 \u05EA\u05E9\u05DC\u05D7 \u05D4\u05D6\u05DE\u05E0\u05D4 \u05DC\u05D0\u05D9\u05E9\u05D5\u05E8, \u05D5\u05DC\u05D0\u05D7\u05E8 \u05D0\u05D9\u05E9\u05D5\u05E8\u05D5 \u05EA\u05D5\u05DB\u05DC\u05D5 \u05DC\u05D9\u05E6\u05D5\u05E8 \u05E7\u05E9\u05E8.'
          },
          {
            question:
              '\u05D4\u05D0\u05DD \u05D4\u05D0\u05D9\u05E8\u05D5\u05D7 \u05E2\u05D5\u05DC\u05D4 \u05DB\u05E1\u05E3?',
            answer:
              '\u05DC\u05D0, \u05DB\u05DC \u05E4\u05E2\u05D9\u05DC\u05D5\u05EA \u05D4\u05E2\u05DE\u05D5\u05EA\u05D4 \u05D4\u05D9\u05D0 \u05D5\u05D5\u05DC\u05E0\u05D8\u05E8\u05D9\u05EA.'
          },
          {
            question:
              '\u05D4\u05D0\u05DD \u05D0\u05D5\u05DB\u05DC \u05DC\u05D4\u05E6\u05D8\u05E8\u05E3 \u05DC\u05D0\u05D9\u05E8\u05D5\u05D7 \u05E9\u05DC \u05DE\u05D5\u05D6\u05DE\u05E0\u05D9\u05DD \u05D1\u05DC\u05D1\u05D3?',
            answer:
              '\u05D9\u05E9\u05E0\u05DD \u05DE\u05D0\u05E8\u05D7\u05D9\u05DD \u05E9\u05D1\u05D5\u05D7\u05E8\u05D9\u05DD \u05DC\u05E7\u05D9\u05D9\u05DD \u05DE\u05E4\u05D2\u05E9 \u05D1\u05D5 \u05D4\u05DD \u05DE\u05D6\u05DE\u05D9\u05E0\u05D9\u05DD \u05DE\u05DB\u05E8\u05D9\u05DD \u05D1\u05DC\u05D1\u05D3, \u05D5\u05DC\u05DB\u05DF \u05DC\u05DE\u05E4\u05D2\u05E9\u05D9\u05DD \u05DE\u05E1\u05D5\u05D2 \u05D6\u05D4 \u05DC\u05D0 \u05E0\u05D9\u05EA\u05DF \u05DC\u05D4\u05E6\u05D8\u05E8\u05E3.'
          },
          {
            question:
              '\u05D4\u05D0\u05DD \u05D0\u05D5\u05DB\u05DC \u05DC\u05D4\u05D2\u05D9\u05E2 \u05DC\u05D0\u05D9\u05E8\u05D5\u05E2 \u05E2\u05DD \u05D7\u05D1\u05E8\u05D9\u05DD?',
            answer:
              '\u05DB\u05DF, \u05D9\u05E9 \u05DC\u05E6\u05D9\u05D9\u05DF \u05D1\u05DE\u05D4\u05DC\u05DA \u05D4\u05D4\u05E8\u05E9\u05DE\u05D4 \u05DE\u05E1\u05E4\u05E8 \u05DE\u05E9\u05EA\u05EA\u05E4\u05D9\u05DD \u05D4\u05DE\u05D2\u05D9\u05E2\u05D9\u05DD \u05DC\u05D0\u05D9\u05E8\u05D5\u05D7.'
          },
          {
            question:
              '\u05D4\u05D0\u05DD \u05D0\u05D5\u05DB\u05DC \u05DC\u05D3\u05E2\u05EA \u05DE\u05D9 \u05D4\u05D0\u05D7 \u05D4\u05DE\u05E1\u05E4\u05E8 \u05D1\u05D0\u05D5\u05EA\u05D5 \u05E2\u05E8\u05D1?',
            answer:
              '\u05DB\u05DE\u05D5\u05D1\u05DF, \u05D1\u05E4\u05E8\u05D8\u05D9 \u05D4\u05D0\u05D9\u05E8\u05D5\u05D7 \u05D9\u05D5\u05E4\u05D9\u05E2  \u05E9\u05DD \u05D4\u05D0\u05D7.'
          },
          {
            question:
              '\u05DB\u05DE\u05D4 \u05D6\u05DE\u05DF \u05D0\u05D5\u05E8\u05DA \u05D4\u05D0\u05D9\u05E8\u05D5\u05E2?',
            answer:
              '\u05D1\u05DE\u05DE\u05D5\u05E6\u05E2 \u05D4\u05DE\u05E4\u05D2\u05E9\u05D9\u05DD \u05E0\u05E2\u05D9\u05DD \u05D1\u05D9\u05DF \u05E9\u05E2\u05D4-\u05E9\u05E2\u05D4 \u05D5\u05D7\u05E6\u05D9, \u05D4\u05D3\u05D1\u05E8 \u05EA\u05DC\u05D5\u05D9 \u05D1\u05D3\u05D9\u05E0\u05DE\u05D9\u05E7\u05EA \u05D4\u05E2\u05E8\u05D1, \u05D1\u05E7\u05D4\u05DC \u05D4\u05E9\u05D5\u05DE\u05E2\u05D9\u05DD \u05D5\u05D1\u05D0\u05D7.'
          }
        ];
        /***/
      },

    /***/
    './src/app/qna/qna-list/qna-item/qna-item.component.ts':
      /*!*************************************************************!*\
    !*** ./src/app/qna/qna-list/qna-item/qna-item.component.ts ***!
    \*************************************************************/

      /*! exports provided: QnaItemComponent */

      /***/
      function srcAppQnaQnaListQnaItemQnaItemComponentTs(module, __webpack_exports__, __webpack_require__) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'QnaItemComponent', function() {
          return QnaItemComponent;
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
        /* harmony import */

        var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/common */
          './node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js'
        );

        function QnaItemComponent_div_5_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](0, 'div', 7);
          }

          if (rf & 2) {
            var ctx_r262 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
              'innerHtml',
              ctx_r262.answerSafeHtml,
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵsanitizeHtml']
            );
          }
        }

        function QnaItemComponent_div_7_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div', 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnamespaceSVG']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](1, 'svg', 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](2, 'path', 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }
        }

        function QnaItemComponent_div_8_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div', 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnamespaceSVG']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](1, 'svg', 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](2, 'path', 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](3, ' /> ');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }
        }

        var QnaItemComponent = /*#__PURE__*/ (function() {
          function QnaItemComponent(sanitizer) {
            _classCallCheck(this, QnaItemComponent);

            this.sanitizer = sanitizer;
            this.open = false;
          }

          _createClass(QnaItemComponent, [
            {
              key: 'ngOnInit',
              value: function ngOnInit() {}
            },
            {
              key: 'ngOnChanges',
              value: function ngOnChanges(changes) {
                if (this.qnaItem) {
                  this.answerSafeHtml = this.sanitizer.bypassSecurityTrustHtml(this.qnaItem.answer);
                }
              }
            }
          ]);

          return QnaItemComponent;
        })();

        QnaItemComponent.ɵfac = function QnaItemComponent_Factory(t) {
          return new (t || QnaItemComponent)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
              _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__['DomSanitizer']
            )
          );
        };

        QnaItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineComponent']({
          type: QnaItemComponent,
          selectors: [['app-qna-item']],
          inputs: {
            qnaItem: 'qnaItem'
          },
          features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵNgOnChangesFeature']()],
          decls: 9,
          vars: 8,
          consts: [
            [1, 'qna-item'],
            [1, 'question-container'],
            [1, 'question-mark'],
            [1, 'question-text'],
            ['class', 'answer-container', 3, 'innerHtml', 4, 'ngIf'],
            [3, 'click'],
            ['class', 'qna-icon', 4, 'ngIf'],
            [1, 'answer-container', 3, 'innerHtml'],
            [1, 'qna-icon'],
            [
              'width',
              '40',
              'height',
              '40',
              'viewBox',
              '0 0 24 24',
              'fill',
              'none',
              'xmlns',
              'http://www.w3.org/2000/svg'
            ],
            [
              'fill-rule',
              'evenodd',
              'clip-rule',
              'evenodd',
              'd',
              'M13 7C13 6.44772 12.5523 6 12 6C11.4477 6 11 6.44772 11 7V11H7C6.44772 11 6 11.4477 6 12C6 12.5523 6.44772 13 7 13H11V17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17V13H17C17.5523 13 18 12.5523 18 12C18 11.4477 17.5523 11 17 11H13V7Z',
              'fill',
              '#16B3AB'
            ],
            [
              'd',
              'M8 11C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13H16C16.5523 13 17 12.5523 17 12C17 11.4477 16.5523 11 16 11H8Z',
              'fill',
              '#16B3AB'
            ]
          ],
          template: function QnaItemComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div', 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](1, 'div', 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](2, 'div', 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](3, 'div', 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                5,
                QnaItemComponent_div_5_Template,
                1,
                1,
                'div',
                4
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](6, 'div', 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'click',
                function QnaItemComponent_Template_div_click_6_listener() {
                  return (ctx.open = !ctx.open);
                }
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                7,
                QnaItemComponent_div_7_Template,
                3,
                0,
                'div',
                6
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                8,
                QnaItemComponent_div_8_Template,
                4,
                0,
                'div',
                6
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵclassProp']('open', ctx.open);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵclassProp']('font-bold', ctx.open);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate1'](' ', ctx.qnaItem.question, ' ');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngIf', ctx.open);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngIf', !ctx.open);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngIf', ctx.open);
            }
          },
          directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__['NgIf']],
          styles: [
            '.qna-item[_ngcontent-%COMP%] {\n  background-color: #f8f8f8;\n  padding: 25px;\n  transition: box-shadow 0.3s;\n  border-radius: 5px;\n}\n@media only screen and (max-width: 768px) {\n  .qna-item[_ngcontent-%COMP%] {\n    padding: 10px;\n  }\n}\n.qna-item[_ngcontent-%COMP%]   .question-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n}\n.qna-item[_ngcontent-%COMP%]   .question-container[_ngcontent-%COMP%]   .question-mark[_ngcontent-%COMP%] {\n  width: 23px;\n  height: 33px;\n  background-image: url(\'question-mark.png\');\n  background-size: 100% 100%;\n  margin-left: 40px;\n}\n@media only screen and (max-width: 768px) {\n  .qna-item[_ngcontent-%COMP%]   .question-container[_ngcontent-%COMP%]   .question-mark[_ngcontent-%COMP%] {\n    margin-left: 0;\n    margin-top: 10px;\n    margin-bottom: 20px;\n  }\n}\n.qna-item[_ngcontent-%COMP%]   .question-container[_ngcontent-%COMP%]   .question-text[_ngcontent-%COMP%] {\n  flex: 1 1 300px;\n  font-size: 18px;\n  font-family: "heebo";\n  color: #818181;\n}\n.qna-item[_ngcontent-%COMP%]   .question-container[_ngcontent-%COMP%]   .question-text.font-bold[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.qna-item[_ngcontent-%COMP%]   .question-container[_ngcontent-%COMP%]   .question-collapse-btn[_ngcontent-%COMP%] {\n  cursor: pointer;\n  flex: 0 0 160px;\n  border-width: 2px;\n  border-color: #00a099;\n  border-style: solid;\n  height: 55px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n@media only screen and (max-width: 768px) {\n  .qna-item[_ngcontent-%COMP%]   .question-container[_ngcontent-%COMP%]   .question-collapse-btn[_ngcontent-%COMP%] {\n    flex: 0 0 140px;\n    height: 45px;\n    margin: auto;\n    margin-top: 20px;\n    margin-bottom: 20px;\n  }\n}\n.qna-item[_ngcontent-%COMP%]   .question-container[_ngcontent-%COMP%]   .question-collapse-btn[_ngcontent-%COMP%]   .question-collapse-btn-text[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-family: "arbel";\n  color: #00a099;\n  letter-spacing: 4px;\n  margin-left: 14px;\n}\n@media only screen and (max-width: 768px) {\n  .qna-item[_ngcontent-%COMP%]   .question-container[_ngcontent-%COMP%]   .question-collapse-btn[_ngcontent-%COMP%]   .question-collapse-btn-text[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n}\n.qna-item[_ngcontent-%COMP%]   .question-container[_ngcontent-%COMP%]   .question-collapse-btn[_ngcontent-%COMP%]   .fa-angle-double-down[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #00a099;\n}\n@media only screen and (max-width: 768px) {\n  .qna-item[_ngcontent-%COMP%]   .question-container[_ngcontent-%COMP%]   .question-collapse-btn[_ngcontent-%COMP%]   .fa-angle-double-down[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n@media only screen and (max-width: 768px) {\n  .qna-item[_ngcontent-%COMP%]   .question-container[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n.qna-item.open[_ngcontent-%COMP%] {\n  box-shadow: 4.5px 5.362px 10px 0px rgba(4, 26, 55, 0.1);\n}\n.qna-item.open[_ngcontent-%COMP%]   .question-container[_ngcontent-%COMP%]   .question-collapse-btn[_ngcontent-%COMP%] {\n  background-color: #00a099;\n}\n.qna-item.open[_ngcontent-%COMP%]   .question-container[_ngcontent-%COMP%]   .question-collapse-btn[_ngcontent-%COMP%]   .question-collapse-btn-text[_ngcontent-%COMP%] {\n  color: white;\n}\n.qna-item.open[_ngcontent-%COMP%]   .question-container[_ngcontent-%COMP%]   .question-collapse-btn[_ngcontent-%COMP%]   .fa-angle-double-up[_ngcontent-%COMP%] {\n  margin-right: 18px;\n  font-size: 20px;\n  color: white;\n}\n@media only screen and (max-width: 768px) {\n  .qna-item.open[_ngcontent-%COMP%]   .question-container[_ngcontent-%COMP%]   .question-collapse-btn[_ngcontent-%COMP%]   .fa-angle-double-up[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n.qna-item[_ngcontent-%COMP%]   .qna-icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.qna-item[_ngcontent-%COMP%]   .answer-container[_ngcontent-%COMP%] {\n  padding: 10px 65px 25px 290px;\n  font-size: 18px;\n  font-family: "heebo";\n  color: #818181;\n}\n@media only screen and (max-width: 768px) {\n  .qna-item[_ngcontent-%COMP%]   .answer-container[_ngcontent-%COMP%] {\n    padding: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcW5hL3FuYS1saXN0L3FuYS1pdGVtL0M6XFxVc2Vyc1xcVGVoaWxhXFxsYXN0XFxvdXJCcm9cXG91ci1icm90aGVycy13ZWIvc3JjXFxhcHBcXHFuYVxccW5hLWxpc3RcXHFuYS1pdGVtXFxxbmEtaXRlbS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcW5hL3FuYS1saXN0L3FuYS1pdGVtL3FuYS1pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtBQ0NGO0FEQ0U7RUFORjtJQU9JLGFBQUE7RUNFRjtBQUNGO0FEQUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUNFSjtBREFJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSwwQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsaUJBQUE7QUNFTjtBREFNO0VBUEY7SUFRSSxjQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtFQ0dOO0FBQ0Y7QURBSTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0FDRU47QURBTTtFQUNFLGlCQUFBO0FDRVI7QURFSTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUVBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDRE47QURHTTtFQVpGO0lBYUksZUFBQTtJQUNBLFlBQUE7SUFDQSxZQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtFQ0FOO0FBQ0Y7QURFTTtFQUNFLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDQVI7QURFUTtFQVBGO0lBUUksZUFBQTtFQ0NSO0FBQ0Y7QURFTTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FDQVI7QURFUTtFQUpGO0lBS0ksZUFBQTtFQ0NSO0FBQ0Y7QURHSTtFQXpFRjtJQTBFSSx1QkFBQTtFQ0FKO0FBQ0Y7QURHRTtFQUNFLHVEQUFBO0FDREo7QURJTTtFQUNFLHlCQUFBO0FDRlI7QURJUTtFQUNFLFlBQUE7QUNGVjtBREtRO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0hWO0FES1U7RUFMRjtJQU1JLGVBQUE7RUNGVjtBQUNGO0FET0U7RUFDRSxlQUFBO0FDTEo7QURRRTtFQUNFLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtBQ05KO0FEUUk7RUFORjtJQU9JLGFBQUE7RUNMSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcW5hL3FuYS1saXN0L3FuYS1pdGVtL3FuYS1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnFuYS1pdGVtIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ4LCAyNDgsIDI0OCk7XHJcbiAgcGFkZGluZzogMjVweDtcclxuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuM3M7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLnF1ZXN0aW9uLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcblxyXG4gICAgLnF1ZXN0aW9uLW1hcmsge1xyXG4gICAgICB3aWR0aDogMjNweDtcclxuICAgICAgaGVpZ2h0OiAzM3B4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoc3JjL2Fzc2V0cy9pbWcvcXVlc3Rpb24tbWFyay5wbmcpO1xyXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDQwcHg7XHJcblxyXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnF1ZXN0aW9uLXRleHQge1xyXG4gICAgICBmbGV4OiAxIDEgMzAwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgZm9udC1mYW1pbHk6ICdoZWVibyc7XHJcbiAgICAgIGNvbG9yOiByZ2IoMTI5LCAxMjksIDEyOSk7XHJcblxyXG4gICAgICAmLmZvbnQtYm9sZCB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAucXVlc3Rpb24tY29sbGFwc2UtYnRuIHtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBmbGV4OiAwIDAgMTYwcHg7XHJcbiAgICAgIGJvcmRlci13aWR0aDogMnB4O1xyXG4gICAgICBib3JkZXItY29sb3I6IHJnYigwLCAxNjAsIDE1Myk7XHJcbiAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgIGhlaWdodDogNTVweDtcclxuXHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgIGZsZXg6IDAgMCAxNDBweDtcclxuICAgICAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnF1ZXN0aW9uLWNvbGxhcHNlLWJ0bi10ZXh0IHtcclxuICAgICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdhcmJlbCc7XHJcbiAgICAgICAgY29sb3I6IHJnYigwLCAxNjAsIDE1Myk7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTRweDtcclxuXHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmZhLWFuZ2xlLWRvdWJsZS1kb3duIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgY29sb3I6IHJnYigwLCAxNjAsIDE1Myk7XHJcblxyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5vcGVuIHtcclxuICAgIGJveC1zaGFkb3c6IDQuNXB4IDUuMzYycHggMTBweCAwcHggcmdiYSg0LCAyNiwgNTUsIDAuMSk7XHJcblxyXG4gICAgLnF1ZXN0aW9uLWNvbnRhaW5lciB7XHJcbiAgICAgIC5xdWVzdGlvbi1jb2xsYXBzZS1idG4ge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAxNjAsIDE1Myk7XHJcblxyXG4gICAgICAgIC5xdWVzdGlvbi1jb2xsYXBzZS1idG4tdGV4dCB7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZmEtYW5nbGUtZG91YmxlLXVwIHtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMThweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLnFuYS1pY29ue1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcbiAgLmFuc3dlci1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMTBweCA2NXB4IDI1cHggMjkwcHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LWZhbWlseTogJ2hlZWJvJztcclxuICAgIGNvbG9yOiByZ2IoMTI5LCAxMjksIDEyOSk7XHJcblxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIucW5hLWl0ZW0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xuICBwYWRkaW5nOiAyNXB4O1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuM3M7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnFuYS1pdGVtIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG59XG4ucW5hLWl0ZW0gLnF1ZXN0aW9uLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5xbmEtaXRlbSAucXVlc3Rpb24tY29udGFpbmVyIC5xdWVzdGlvbi1tYXJrIHtcbiAgd2lkdGg6IDIzcHg7XG4gIGhlaWdodDogMzNweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKHNyYy9hc3NldHMvaW1nL3F1ZXN0aW9uLW1hcmsucG5nKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAucW5hLWl0ZW0gLnF1ZXN0aW9uLWNvbnRhaW5lciAucXVlc3Rpb24tbWFyayB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG59XG4ucW5hLWl0ZW0gLnF1ZXN0aW9uLWNvbnRhaW5lciAucXVlc3Rpb24tdGV4dCB7XG4gIGZsZXg6IDEgMSAzMDBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LWZhbWlseTogXCJoZWVib1wiO1xuICBjb2xvcjogIzgxODE4MTtcbn1cbi5xbmEtaXRlbSAucXVlc3Rpb24tY29udGFpbmVyIC5xdWVzdGlvbi10ZXh0LmZvbnQtYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnFuYS1pdGVtIC5xdWVzdGlvbi1jb250YWluZXIgLnF1ZXN0aW9uLWNvbGxhcHNlLWJ0biB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZmxleDogMCAwIDE2MHB4O1xuICBib3JkZXItd2lkdGg6IDJweDtcbiAgYm9yZGVyLWNvbG9yOiAjMDBhMDk5O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBoZWlnaHQ6IDU1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAucW5hLWl0ZW0gLnF1ZXN0aW9uLWNvbnRhaW5lciAucXVlc3Rpb24tY29sbGFwc2UtYnRuIHtcbiAgICBmbGV4OiAwIDAgMTQwcHg7XG4gICAgaGVpZ2h0OiA0NXB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cbn1cbi5xbmEtaXRlbSAucXVlc3Rpb24tY29udGFpbmVyIC5xdWVzdGlvbi1jb2xsYXBzZS1idG4gLnF1ZXN0aW9uLWNvbGxhcHNlLWJ0bi10ZXh0IHtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBmb250LWZhbWlseTogXCJhcmJlbFwiO1xuICBjb2xvcjogIzAwYTA5OTtcbiAgbGV0dGVyLXNwYWNpbmc6IDRweDtcbiAgbWFyZ2luLWxlZnQ6IDE0cHg7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5xbmEtaXRlbSAucXVlc3Rpb24tY29udGFpbmVyIC5xdWVzdGlvbi1jb2xsYXBzZS1idG4gLnF1ZXN0aW9uLWNvbGxhcHNlLWJ0bi10ZXh0IHtcbiAgICBmb250LXNpemU6IDIycHg7XG4gIH1cbn1cbi5xbmEtaXRlbSAucXVlc3Rpb24tY29udGFpbmVyIC5xdWVzdGlvbi1jb2xsYXBzZS1idG4gLmZhLWFuZ2xlLWRvdWJsZS1kb3duIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogIzAwYTA5OTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnFuYS1pdGVtIC5xdWVzdGlvbi1jb250YWluZXIgLnF1ZXN0aW9uLWNvbGxhcHNlLWJ0biAuZmEtYW5nbGUtZG91YmxlLWRvd24ge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAucW5hLWl0ZW0gLnF1ZXN0aW9uLWNvbnRhaW5lciB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbn1cbi5xbmEtaXRlbS5vcGVuIHtcbiAgYm94LXNoYWRvdzogNC41cHggNS4zNjJweCAxMHB4IDBweCByZ2JhKDQsIDI2LCA1NSwgMC4xKTtcbn1cbi5xbmEtaXRlbS5vcGVuIC5xdWVzdGlvbi1jb250YWluZXIgLnF1ZXN0aW9uLWNvbGxhcHNlLWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGEwOTk7XG59XG4ucW5hLWl0ZW0ub3BlbiAucXVlc3Rpb24tY29udGFpbmVyIC5xdWVzdGlvbi1jb2xsYXBzZS1idG4gLnF1ZXN0aW9uLWNvbGxhcHNlLWJ0bi10ZXh0IHtcbiAgY29sb3I6IHdoaXRlO1xufVxuLnFuYS1pdGVtLm9wZW4gLnF1ZXN0aW9uLWNvbnRhaW5lciAucXVlc3Rpb24tY29sbGFwc2UtYnRuIC5mYS1hbmdsZS1kb3VibGUtdXAge1xuICBtYXJnaW4tcmlnaHQ6IDE4cHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAucW5hLWl0ZW0ub3BlbiAucXVlc3Rpb24tY29udGFpbmVyIC5xdWVzdGlvbi1jb2xsYXBzZS1idG4gLmZhLWFuZ2xlLWRvdWJsZS11cCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG59XG4ucW5hLWl0ZW0gLnFuYS1pY29uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnFuYS1pdGVtIC5hbnN3ZXItY29udGFpbmVyIHtcbiAgcGFkZGluZzogMTBweCA2NXB4IDI1cHggMjkwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC1mYW1pbHk6IFwiaGVlYm9cIjtcbiAgY29sb3I6ICM4MTgxODE7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5xbmEtaXRlbSAuYW5zd2VyLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxufSJdfQ== */'
          ]
        });
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            QnaItemComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                args: [
                  {
                    selector: 'app-qna-item',
                    templateUrl: './qna-item.component.html',
                    styleUrls: ['./qna-item.component.scss']
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
            {
              qnaItem: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input']
                }
              ]
            }
          );
        })();
        /***/
      },

    /***/
    './src/app/qna/qna-list/qna-list.component.ts':
      /*!****************************************************!*\
    !*** ./src/app/qna/qna-list/qna-list.component.ts ***!
    \****************************************************/

      /*! exports provided: QnaListComponent */

      /***/
      function srcAppQnaQnaListQnaListComponentTs(module, __webpack_exports__, __webpack_require__) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'QnaListComponent', function() {
          return QnaListComponent;
        });
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );

        function QnaListComponent_ng_container_1_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementContainerStart'](0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](1, 'div', 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](2, 'app-qna-item', 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementContainerEnd']();
          }

          if (rf & 2) {
            var qnaItem_r258 = ctx.$implicit;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('qnaItem', qnaItem_r258);
          }
        }

        var QnaListComponent = function QnaListComponent() {
          _classCallCheck(this, QnaListComponent);
        };

        QnaListComponent.ɵfac = function QnaListComponent_Factory(t) {
          return new (t || QnaListComponent)();
        };

        QnaListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineComponent']({
          type: QnaListComponent,
          selectors: [['app-qna-list']],
          inputs: {
            qnaList: 'qnaList'
          },
          decls: 2,
          vars: 1,
          consts: [
            [1, 'qna-list-container'],
            [4, 'ngFor', 'ngForOf'],
            [1, 'qna-item-container'],
            [3, 'qnaItem']
          ],
          template: function QnaListComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div', 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                1,
                QnaListComponent_ng_container_1_Template,
                3,
                1,
                'ng-container',
                1
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngForOf', ctx.qnaList);
            }
          },
          styles: [
            '.qna-list-container[_ngcontent-%COMP%]   .qna-item-container[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n@media only screen and (max-width: 768px) {\n  .qna-list-container[_ngcontent-%COMP%]   .qna-item-container[_ngcontent-%COMP%] {\n    margin-left: 30px;\n    margin-right: 30px;\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcW5hL3FuYS1saXN0L0M6XFxVc2Vyc1xcVGVoaWxhXFxsYXN0XFxvdXJCcm9cXG91ci1icm90aGVycy13ZWIvc3JjXFxhcHBcXHFuYVxccW5hLWxpc3RcXHFuYS1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9xbmEvcW5hLWxpc3QvcW5hLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxtQkFBQTtBQ0FKO0FERUk7RUFIRjtJQUlJLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxrQkFBQTtFQ0NKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9xbmEvcW5hLWxpc3QvcW5hLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucW5hLWxpc3QtY29udGFpbmVyIHtcclxuICAucW5hLWl0ZW0tY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcblxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMzBweDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi5xbmEtbGlzdC1jb250YWluZXIgLnFuYS1pdGVtLWNvbnRhaW5lciB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5xbmEtbGlzdC1jb250YWluZXIgLnFuYS1pdGVtLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufSJdfQ== */'
          ]
        });
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            QnaListComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                args: [
                  {
                    selector: 'app-qna-list',
                    templateUrl: './qna-list.component.html',
                    styleUrls: ['./qna-list.component.scss']
                  }
                ]
              }
            ],
            null,
            {
              qnaList: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input']
                }
              ]
            }
          );
        })();
        /***/
      },

    /***/
    './src/app/qna/qna.module.ts':
      /*!***********************************!*\
    !*** ./src/app/qna/qna.module.ts ***!
    \***********************************/

      /*! exports provided: QnaModule */

      /***/
      function srcAppQnaQnaModuleTs(module, __webpack_exports__, __webpack_require__) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'QnaModule', function() {
          return QnaModule;
        });
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */

        var _qna_list_qna_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./qna-list/qna-list.component */
          './src/app/qna/qna-list/qna-list.component.ts'
        );
        /* harmony import */

        var _qna_list_qna_item_qna_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./qna-list/qna-item/qna-item.component */
          './src/app/qna/qna-list/qna-item/qna-item.component.ts'
        );
        /* harmony import */

        var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @angular/common */
          './node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js'
        );

        var QnaModule = function QnaModule() {
          _classCallCheck(this, QnaModule);
        };

        QnaModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineNgModule']({
          type: QnaModule
        });
        QnaModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineInjector']({
          factory: function QnaModule_Factory(t) {
            return new (t || QnaModule)();
          },
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__['CommonModule']]]
        });

        (function() {
          (typeof ngJitMode === 'undefined' || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵsetNgModuleScope'](QnaModule, {
              declarations: [
                _qna_list_qna_list_component__WEBPACK_IMPORTED_MODULE_1__['QnaListComponent'],
                _qna_list_qna_item_qna_item_component__WEBPACK_IMPORTED_MODULE_2__['QnaItemComponent']
              ],
              imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__['CommonModule']],
              exports: [
                _qna_list_qna_list_component__WEBPACK_IMPORTED_MODULE_1__['QnaListComponent'],
                _qna_list_qna_item_qna_item_component__WEBPACK_IMPORTED_MODULE_2__['QnaItemComponent']
              ]
            });
        })();
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            QnaModule,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'],
                args: [
                  {
                    declarations: [
                      _qna_list_qna_list_component__WEBPACK_IMPORTED_MODULE_1__['QnaListComponent'],
                      _qna_list_qna_item_qna_item_component__WEBPACK_IMPORTED_MODULE_2__['QnaItemComponent']
                    ],
                    exports: [
                      _qna_list_qna_list_component__WEBPACK_IMPORTED_MODULE_1__['QnaListComponent'],
                      _qna_list_qna_item_qna_item_component__WEBPACK_IMPORTED_MODULE_2__['QnaItemComponent']
                    ],
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__['CommonModule']]
                  }
                ]
              }
            ],
            null,
            null
          );
        })();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵsetComponentScope'](
          _qna_list_qna_list_component__WEBPACK_IMPORTED_MODULE_1__['QnaListComponent'],
          [
            _qna_list_qna_list_component__WEBPACK_IMPORTED_MODULE_1__['QnaListComponent'],
            _qna_list_qna_item_qna_item_component__WEBPACK_IMPORTED_MODULE_2__['QnaItemComponent'],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__['NgClass'],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__['NgComponentOutlet'],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__['NgForOf'],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__['NgIf'],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__['NgTemplateOutlet'],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__['NgStyle'],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__['NgSwitch'],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__['NgSwitchCase'],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__['NgSwitchDefault'],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__['NgPlural'],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__['NgPluralCase']
          ],
          [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__['AsyncPipe'],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__['UpperCasePipe'],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__['LowerCasePipe'],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__['JsonPipe'],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__['SlicePipe'],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__['DecimalPipe'],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__['PercentPipe'],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__['TitleCasePipe'],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__['CurrencyPipe'],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__['DatePipe'],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__['I18nPluralPipe'],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__['I18nSelectPipe'],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__['KeyValuePipe']
          ]
        );
        /***/
      }
  }
]);
//# sourceMappingURL=qna-page-qna-page-module-es5.js.map
