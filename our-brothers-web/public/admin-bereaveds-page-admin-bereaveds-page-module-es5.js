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

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['admin-bereaveds-page-admin-bereaveds-page-module'],
  {
    /***/
    './src/app/admin/bereaveds/admin-bereaveds.module.ts':
      /*!***********************************************************!*\
    !*** ./src/app/admin/bereaveds/admin-bereaveds.module.ts ***!
    \***********************************************************/

      /*! exports provided: AdminBereavedsModule */

      /***/
      function srcAppAdminBereavedsAdminBereavedsModuleTs(module, __webpack_exports__, __webpack_require__) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'AdminBereavedsModule', function() {
          return AdminBereavedsModule;
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
        /* harmony import */

        var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/router */
          './node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js'
        );
        /* harmony import */

        var _shared_components_select_select_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../shared/components/select/select.module */
          './src/app/shared/components/select/select.module.ts'
        );
        /* harmony import */

        var _bereaveds_list_bereaveds_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./bereaveds-list/bereaveds-list.component */
          './src/app/admin/bereaveds/bereaveds-list/bereaveds-list.component.ts'
        );
        /* harmony import */

        var _bereaveds_list_row_bereaveds_list_row_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./bereaveds-list-row/bereaveds-list-row.component */
          './src/app/admin/bereaveds/bereaveds-list-row/bereaveds-list-row.component.ts'
        );
        /* harmony import */

        var _select_bereaved_guidance_select_bereaved_guidance_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./select-bereaved-guidance/select-bereaved-guidance.component */
          './src/app/admin/bereaveds/select-bereaved-guidance/select-bereaved-guidance.component.ts'
        );
        /* harmony import */

        var _select_bereaved_status_select_bereaved_status_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ./select-bereaved-status/select-bereaved-status.component */
          './src/app/admin/bereaveds/select-bereaved-status/select-bereaved-status.component.ts'
        );
        /* harmony import */

        var _shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../shared/pipes/pipes.module */
          './src/app/shared/pipes/pipes.module.ts'
        );
        /* harmony import */

        var _shared_components_list_list_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../shared/components/list/list.module */
          './src/app/shared/components/list/list.module.ts'
        );
        /* harmony import */

        var _modal_select_meeting_modal_select_meeting_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ./modal-select-meeting/modal-select-meeting.component */
          './src/app/admin/bereaveds/modal-select-meeting/modal-select-meeting.component.ts'
        );
        /* harmony import */

        var _shared_components_free_text_filter_free_text_filter_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../shared/components/free-text-filter/free-text-filter.module */
          './src/app/shared/components/free-text-filter/free-text-filter.module.ts'
        );
        /* harmony import */

        var _shared_components_meetings_meetings_list_meetings_list_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../shared/components/meetings/meetings-list/meetings-list.module */
          './src/app/shared/components/meetings/meetings-list/meetings-list.module.ts'
        );
        /* harmony import */

        var _shared_components_join_button_join_button_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../../shared/components/join-button/join-button.module */
          './src/app/shared/components/join-button/join-button.module.ts'
        );
        /* harmony import */

        var _shared_components_meeting_join_button_meeting_join_button_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ../../shared/components/meeting-join-button/meeting-join-button.module */
          './src/app/shared/components/meeting-join-button/meeting-join-button.module.ts'
        );
        /* harmony import */

        var src_app_shared_components_remove_button_remove_button_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! src/app/shared/components/remove-button/remove-button.module */
          './src/app/shared/components/remove-button/remove-button.module.ts'
        );
        /* harmony import */

        var _sort_bereaveds_sort_bereaveds_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ./sort-bereaveds/sort-bereaveds.pipe */
          './src/app/admin/bereaveds/sort-bereaveds/sort-bereaveds.pipe.ts'
        );
        /* harmony import */

        var src_app_shared_components_editable_text_editable_text_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! src/app/shared/components/editable-text/editable-text.module */
          './src/app/shared/components/editable-text/editable-text.module.ts'
        );

        var api = [
          _select_bereaved_status_select_bereaved_status_component__WEBPACK_IMPORTED_MODULE_7__[
            'SelectBereavedStatusComponent'
          ],
          _select_bereaved_guidance_select_bereaved_guidance_component__WEBPACK_IMPORTED_MODULE_6__[
            'SelectBereavedGuidanceComponent'
          ],
          _bereaveds_list_row_bereaveds_list_row_component__WEBPACK_IMPORTED_MODULE_5__['BereavedsListRowComponent'],
          _bereaveds_list_bereaveds_list_component__WEBPACK_IMPORTED_MODULE_4__['BereavedsListComponent'],
          _modal_select_meeting_modal_select_meeting_component__WEBPACK_IMPORTED_MODULE_10__[
            'ModalSelectMeetingComponent'
          ]
        ];

        var AdminBereavedsModule = function AdminBereavedsModule() {
          _classCallCheck(this, AdminBereavedsModule);
        };

        AdminBereavedsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineNgModule']({
          type: AdminBereavedsModule
        });
        AdminBereavedsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineInjector']({
          factory: function AdminBereavedsModule_Factory(t) {
            return new (t || AdminBereavedsModule)();
          },
          imports: [
            [
              _angular_common__WEBPACK_IMPORTED_MODULE_1__['CommonModule'],
              _angular_router__WEBPACK_IMPORTED_MODULE_2__['RouterModule'],
              _shared_components_select_select_module__WEBPACK_IMPORTED_MODULE_3__['SelectModule'],
              _shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__['PipesModule'],
              _shared_components_list_list_module__WEBPACK_IMPORTED_MODULE_9__['ListModule'],
              _shared_components_free_text_filter_free_text_filter_module__WEBPACK_IMPORTED_MODULE_11__[
                'FreeTextFilterModule'
              ],
              src_app_shared_components_editable_text_editable_text_module__WEBPACK_IMPORTED_MODULE_17__[
                'EditableTextModule'
              ],
              _shared_components_meetings_meetings_list_meetings_list_module__WEBPACK_IMPORTED_MODULE_12__[
                'MeetingsListModule'
              ],
              _shared_components_join_button_join_button_module__WEBPACK_IMPORTED_MODULE_13__['JoinButtonModule'],
              _shared_components_meeting_join_button_meeting_join_button_module__WEBPACK_IMPORTED_MODULE_14__[
                'MeetingJoinButtonModule'
              ],
              src_app_shared_components_remove_button_remove_button_module__WEBPACK_IMPORTED_MODULE_15__[
                'RemoveButtonModule'
              ]
            ]
          ]
        });

        (function() {
          (typeof ngJitMode === 'undefined' || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵsetNgModuleScope'](AdminBereavedsModule, {
              declarations: [
                _select_bereaved_status_select_bereaved_status_component__WEBPACK_IMPORTED_MODULE_7__[
                  'SelectBereavedStatusComponent'
                ],
                _select_bereaved_guidance_select_bereaved_guidance_component__WEBPACK_IMPORTED_MODULE_6__[
                  'SelectBereavedGuidanceComponent'
                ],
                _bereaveds_list_row_bereaveds_list_row_component__WEBPACK_IMPORTED_MODULE_5__[
                  'BereavedsListRowComponent'
                ],
                _bereaveds_list_bereaveds_list_component__WEBPACK_IMPORTED_MODULE_4__['BereavedsListComponent'],
                _modal_select_meeting_modal_select_meeting_component__WEBPACK_IMPORTED_MODULE_10__[
                  'ModalSelectMeetingComponent'
                ],
                _sort_bereaveds_sort_bereaveds_pipe__WEBPACK_IMPORTED_MODULE_16__['SortBereavedsPipe']
              ],
              imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__['CommonModule'],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__['RouterModule'],
                _shared_components_select_select_module__WEBPACK_IMPORTED_MODULE_3__['SelectModule'],
                _shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__['PipesModule'],
                _shared_components_list_list_module__WEBPACK_IMPORTED_MODULE_9__['ListModule'],
                _shared_components_free_text_filter_free_text_filter_module__WEBPACK_IMPORTED_MODULE_11__[
                  'FreeTextFilterModule'
                ],
                src_app_shared_components_editable_text_editable_text_module__WEBPACK_IMPORTED_MODULE_17__[
                  'EditableTextModule'
                ],
                _shared_components_meetings_meetings_list_meetings_list_module__WEBPACK_IMPORTED_MODULE_12__[
                  'MeetingsListModule'
                ],
                _shared_components_join_button_join_button_module__WEBPACK_IMPORTED_MODULE_13__['JoinButtonModule'],
                _shared_components_meeting_join_button_meeting_join_button_module__WEBPACK_IMPORTED_MODULE_14__[
                  'MeetingJoinButtonModule'
                ],
                src_app_shared_components_remove_button_remove_button_module__WEBPACK_IMPORTED_MODULE_15__[
                  'RemoveButtonModule'
                ]
              ],
              exports: [
                _select_bereaved_status_select_bereaved_status_component__WEBPACK_IMPORTED_MODULE_7__[
                  'SelectBereavedStatusComponent'
                ],
                _select_bereaved_guidance_select_bereaved_guidance_component__WEBPACK_IMPORTED_MODULE_6__[
                  'SelectBereavedGuidanceComponent'
                ],
                _bereaveds_list_row_bereaveds_list_row_component__WEBPACK_IMPORTED_MODULE_5__[
                  'BereavedsListRowComponent'
                ],
                _bereaveds_list_bereaveds_list_component__WEBPACK_IMPORTED_MODULE_4__['BereavedsListComponent'],
                _modal_select_meeting_modal_select_meeting_component__WEBPACK_IMPORTED_MODULE_10__[
                  'ModalSelectMeetingComponent'
                ]
              ]
            });
        })();
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            AdminBereavedsModule,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'],
                args: [
                  {
                    imports: [
                      _angular_common__WEBPACK_IMPORTED_MODULE_1__['CommonModule'],
                      _angular_router__WEBPACK_IMPORTED_MODULE_2__['RouterModule'],
                      _shared_components_select_select_module__WEBPACK_IMPORTED_MODULE_3__['SelectModule'],
                      _shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__['PipesModule'],
                      _shared_components_list_list_module__WEBPACK_IMPORTED_MODULE_9__['ListModule'],
                      _shared_components_free_text_filter_free_text_filter_module__WEBPACK_IMPORTED_MODULE_11__[
                        'FreeTextFilterModule'
                      ],
                      src_app_shared_components_editable_text_editable_text_module__WEBPACK_IMPORTED_MODULE_17__[
                        'EditableTextModule'
                      ],
                      _shared_components_meetings_meetings_list_meetings_list_module__WEBPACK_IMPORTED_MODULE_12__[
                        'MeetingsListModule'
                      ],
                      _shared_components_join_button_join_button_module__WEBPACK_IMPORTED_MODULE_13__[
                        'JoinButtonModule'
                      ],
                      _shared_components_meeting_join_button_meeting_join_button_module__WEBPACK_IMPORTED_MODULE_14__[
                        'MeetingJoinButtonModule'
                      ],
                      src_app_shared_components_remove_button_remove_button_module__WEBPACK_IMPORTED_MODULE_15__[
                        'RemoveButtonModule'
                      ]
                    ],
                    declarations: [
                      api,
                      _sort_bereaveds_sort_bereaveds_pipe__WEBPACK_IMPORTED_MODULE_16__['SortBereavedsPipe']
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
      },

    /***/
    './src/app/admin/bereaveds/bereaveds-list-row/bereaveds-list-row.component.ts':
      /*!************************************************************************************!*\
    !*** ./src/app/admin/bereaveds/bereaveds-list-row/bereaveds-list-row.component.ts ***!
    \************************************************************************************/

      /*! exports provided: BereavedsListRowComponent */

      /***/
      function srcAppAdminBereavedsBereavedsListRowBereavedsListRowComponentTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'BereavedsListRowComponent', function() {
          return BereavedsListRowComponent;
        });
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */

        var _shared_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../../shared/constants */
          './src/app/shared/constants.ts'
        );
        /* harmony import */

        var _shared_services_participations_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../shared/services/participations.service */
          './src/app/shared/services/participations.service.ts'
        );
        /* harmony import */

        var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @angular/common */
          './node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js'
        );
        /* harmony import */

        var _shared_components_editable_text_editable_text_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../shared/components/editable-text/editable-text.component */
          './src/app/shared/components/editable-text/editable-text.component.ts'
        );
        /* harmony import */

        var _select_bereaved_status_select_bereaved_status_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../select-bereaved-status/select-bereaved-status.component */
          './src/app/admin/bereaveds/select-bereaved-status/select-bereaved-status.component.ts'
        );
        /* harmony import */

        var _shared_components_join_button_join_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../shared/components/join-button/join-button.component */
          './src/app/shared/components/join-button/join-button.component.ts'
        );
        /* harmony import */

        var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! @angular/router */
          './node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js'
        );
        /* harmony import */

        var _shared_components_remove_button_remove_button_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../shared/components/remove-button/remove-button.component */
          './src/app/shared/components/remove-button/remove-button.component.ts'
        );
        /* harmony import */

        var _shared_pipes_phone_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../shared/pipes/phone.pipe */
          './src/app/shared/pipes/phone.pipe.ts'
        );
        /* harmony import */

        var _shared_pipes_seniority_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../shared/pipes/seniority.pipe */
          './src/app/shared/pipes/seniority.pipe.ts'
        );

        function BereavedsListRowComponent_button_3_Template(rf, ctx) {
          if (rf & 1) {
            var _r300 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵgetCurrentView']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'button', 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
              'click',
              function BereavedsListRowComponent_button_3_Template_button_click_0_listener() {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵrestoreView'](_r300);

                var ctx_r299 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();

                return ctx_r299.deleting.emit();
              }
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](1, 'div', 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }
        }

        function BereavedsListRowComponent_button_6_Template(rf, ctx) {
          if (rf & 1) {
            var _r302 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵgetCurrentView']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'button', 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
              'click',
              function BereavedsListRowComponent_button_6_Template_button_click_0_listener() {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵrestoreView'](_r302);

                var ctx_r301 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();

                return (ctx_r301.expanded = true);
              }
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](1, 'div', 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }
        }

        function BereavedsListRowComponent_button_7_Template(rf, ctx) {
          if (rf & 1) {
            var _r304 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵgetCurrentView']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'button', 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
              'click',
              function BereavedsListRowComponent_button_7_Template_button_click_0_listener() {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵrestoreView'](_r304);

                var ctx_r303 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();

                return (ctx_r303.expanded = false);
              }
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](1, 'div', 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }
        }

        function BereavedsListRowComponent_div_11_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div', 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](1, 'div', 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpipe'](3, 'phone');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](4, 'div', 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }

          if (rf & 2) {
            var ctx_r292 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate1'](
              ' ',
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpipeBind1'](3, 1, ctx_r292.bereaved.profile.phoneNumber),
              ' '
            );
          }
        }

        function BereavedsListRowComponent_div_12_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div', 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](1, 'div', 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](3, 'div', 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }

          if (rf & 2) {
            var ctx_r293 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate1'](
              ' ',
              ctx_r293.bereaved.profile == null ? null : ctx_r293.bereaved.profile.email,
              ' '
            );
          }
        }

        function BereavedsListRowComponent_div_16_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpipe'](2, 'seniority');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }

          if (rf & 2) {
            var slain_r305 = ctx.$implicit;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate1'](
              ' ',
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpipeBind1'](2, 1, slain_r305.deathDate),
              ' '
            );
          }
        }

        function BereavedsListRowComponent_div_20_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div', 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](1, 'div', 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }

          if (rf & 2) {
            var ctx_r295 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate1'](
              ' ',
              ctx_r295.bereaved.profile.otherLang,
              ' '
            );
          }
        }

        function BereavedsListRowComponent_div_22_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div', 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](1, 'div', 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }

          if (rf & 2) {
            var ctx_r296 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate1'](' ', ctx_r296.normalDAte, ' ');
          }
        }

        function BereavedsListRowComponent_div_24_Template(rf, ctx) {
          if (rf & 1) {
            var _r308 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵgetCurrentView']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](1, 'button', 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
              'click',
              function BereavedsListRowComponent_div_24_Template_button_click_1_listener() {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵrestoreView'](_r308);

                var meeting_r306 = ctx.$implicit;

                var ctx_r307 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();

                return ctx_r307.leaveBereaved.emit(meeting_r306);
              }
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](2, 'div', 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](3, 'div', 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](4, 'a', 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }

          if (rf & 2) {
            var meeting_r306 = ctx.$implicit;

            var ctx_r297 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
              'routerLink',
              '/meetings/' + ctx_r297.year + '/' + meeting_r306.hostId + '/' + meeting_r306.id
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate1'](' ', meeting_r306.title, ' ');
          }
        }

        function BereavedsListRowComponent_div_26_ng_template_18_div_4_Template(rf, ctx) {
          if (rf & 1) {
            var _r315 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵgetCurrentView']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](1, 'app-remove-button', 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
              'remove',
              function BereavedsListRowComponent_div_26_ng_template_18_div_4_Template_app_remove_button_remove_1_listener() {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵrestoreView'](_r315);

                var ctx_r314 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext'](3);

                return ctx_r314.removeVolunteer.emit();
              }
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }
        }

        function BereavedsListRowComponent_div_26_ng_template_18_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](2, 'div');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
              4,
              BereavedsListRowComponent_div_26_ng_template_18_div_4_Template,
              2,
              0,
              'div',
              52
            );
          }

          if (rf & 2) {
            var ctx_r309 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext'](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate1'](
              ' ',
              ctx_r309.bereaved.volunteer.firstName + ' ' + ctx_r309.bereaved.volunteer.lastName,
              ' '
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate1'](' ', ctx_r309.bereaved.volunteer.id, ' ');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
              'ngIf',
              (ctx_r309.currentUser == null ? null : ctx_r309.currentUser.isAdmin) ||
                (ctx_r309.currentUser == null ? null : ctx_r309.currentUser.id) === ctx_r309.bereaved.volunteer.id
            );
          }
        }

        function BereavedsListRowComponent_div_26_ng_template_19_Template(rf, ctx) {
          if (rf & 1) {
            var _r317 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵgetCurrentView']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'app-join-button', 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
              'join',
              function BereavedsListRowComponent_div_26_ng_template_19_Template_app_join_button_join_0_listener() {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵrestoreView'](_r317);

                var ctx_r316 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext'](2);

                return ctx_r316.bereavedVolunteer.emit();
              }
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }
        }

        function BereavedsListRowComponent_div_26_div_31_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](1, 'div');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](2, 'span');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](4, 'div');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](5, 'span');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpipe'](7, 'date');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }

          if (rf & 2) {
            var slain_r318 = ctx.$implicit;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate'](
              slain_r318.firstName + ' ' + slain_r318.lastName + ' \u05D6"\u05DC'
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate'](
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpipeBind2'](7, 2, slain_r318.deathDate, 'dd.MM.yyyy')
            );
          }
        }

        function BereavedsListRowComponent_div_26_Template(rf, ctx) {
          if (rf & 1) {
            var _r320 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵgetCurrentView']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div', 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](1, 'div', 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](2, 'div', 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
              3,
              ' \u05DE\u05E1\u05E4\u05E8 \u05E1\u05D9\u05D3\u05D5\u05E8\u05D9: '
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](4, 'div');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](6, 'div', 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](7, ' \u05D2\u05D9\u05DC: ');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](8, 'div');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](9, 'app-editable-text', 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
              'valueChange',
              function BereavedsListRowComponent_div_26_Template_app_editable_text_valueChange_9_listener($event) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵrestoreView'](_r320);

                var ctx_r319 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();

                return ctx_r319.bereavedBirthDate.emit($event);
              }
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpipe'](10, 'seniority');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](11, 'div', 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](12, ' \u05E9\u05E4\u05D5\u05EA: ');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](13, 'div');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](15, 'div', 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](16, ' \u05DE\u05EA\u05E0\u05D3\u05D1: ');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](17, 'div');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
              18,
              BereavedsListRowComponent_div_26_ng_template_18_Template,
              5,
              3,
              'ng-template',
              43
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
              19,
              BereavedsListRowComponent_div_26_ng_template_19_Template,
              1,
              0,
              'ng-template',
              null,
              44,
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplateRefExtractor']
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](21, 'div', 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](22, 'div', 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](23, ' \u05D4\u05E2\u05E8\u05D5\u05EA: ');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](24, 'div', 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](25, 'div', 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](26, 'app-editable-text', 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
              'valueChange',
              function BereavedsListRowComponent_div_26_Template_app_editable_text_valueChange_26_listener($event) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵrestoreView'](_r320);

                var ctx_r321 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();

                return ctx_r321.bereavedNotes.emit($event);
              }
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](27, 'div', 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](28, 'div', 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](29, ' \u05E4\u05E8\u05D8\u05D9 \u05D7\u05DC\u05DC: ');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](30, 'div', 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
              31,
              BereavedsListRowComponent_div_26_div_31_Template,
              8,
              5,
              'div',
              15
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](32, 'div', 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](33, 'div', 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
              34,
              ' \u05D4\u05E1\u05D9\u05E4\u05D5\u05E8 \u05E9\u05DC\u05D9: '
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](35, 'div', 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](36, 'div', 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](38, 'div', 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](39, 'div');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](40, 'div', 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](41, '\u05DB\u05E0\u05D9\u05E1\u05D4:');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](42, 'div');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpipe'](44, 'date');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](45, 'div');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](46, 'div', 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](47, '\u05D4\u05E8\u05E9\u05DE\u05D4:');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](48, 'div');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpipe'](50, 'date');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }

          if (rf & 2) {
            var _r310 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵreference'](20);

            var ctx_r298 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate1'](' ', ctx_r298.bereaved.id, ' ');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
              'value',
              (ctx_r298.bereaved.profile == null
              ? null
              : ctx_r298.bereaved.profile.birthDay)
                ? _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpipeBind1'](10, 12, ctx_r298.bereaved.profile.birthDay)
                : ''
            )('type', 'date');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate1'](
              ' ',
              ctx_r298.bereaved.profile.otherLang || '\u05D0\u05D9\u05DF',
              ' '
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngIf', ctx_r298.bereaved.volunteer)(
              'ngIfElse',
              _r310
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
              'value',
              ctx_r298.bereaved.bereavedParticipation &&
                (ctx_r298.bereaved.bereavedParticipation[ctx_r298.year] == null
                  ? null
                  : ctx_r298.bereaved.bereavedParticipation[ctx_r298.year].notes)
            )('type', 'textarea');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
              'ngForOf',
              ctx_r298.bereaved.bereavedProfile == null ? null : ctx_r298.bereaved.bereavedProfile.slains
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate1'](
              ' ',
              ctx_r298.bereaved.bereavedProfile == null ? null : ctx_r298.bereaved.bereavedProfile.story,
              ' '
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate'](
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpipeBind2'](
                44,
                14,
                ctx_r298.bereaved.lastSignInDate,
                'dd.MM.yyyy'
              )
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate'](
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpipeBind2'](
                50,
                17,
                ctx_r298.bereaved.registered,
                'dd.MM.yyyy'
              )
            );
          }
        }

        var BereavedsListRowComponent = /*#__PURE__*/ (function() {
          function BereavedsListRowComponent(participationsService) {
            _classCallCheck(this, BereavedsListRowComponent);

            this.participationsService = participationsService;
            this.joinBereved = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            this.leaveBereaved = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            this.deleting = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            this.volunteering = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            this.bereavedStatus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            this.bereavedGuidance = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'](); //@Output() bereavedlang=new EventEmitter<UserProfile>();

            this.bereavedBirthDate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            this.bereavedNotes = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            this.bereavedAddress = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            this.bereavedVolunteer = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            this.removeVolunteer = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            this.d = new Date().getTime();
            this.expanded = false;
            this.year = _shared_constants__WEBPACK_IMPORTED_MODULE_1__['MEMORIAL_YEAR'];
          }

          _createClass(BereavedsListRowComponent, [
            {
              key: 'ngOnInit',
              value: function ngOnInit() {
                this.normalDAte = new Date(this.bereaved.lastSignInDate).toISOString().split('T')[0];
              }
            }
          ]);

          return BereavedsListRowComponent;
        })();

        BereavedsListRowComponent.ɵfac = function BereavedsListRowComponent_Factory(t) {
          return new (t || BereavedsListRowComponent)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
              _shared_services_participations_service__WEBPACK_IMPORTED_MODULE_2__['ParticipationsService']
            )
          );
        };

        BereavedsListRowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineComponent']({
          type: BereavedsListRowComponent,
          selectors: [['app-bereaveds-list-row']],
          inputs: {
            currentUser: 'currentUser',
            bereaved: 'bereaved'
          },
          outputs: {
            joinBereved: 'joinBereved',
            leaveBereaved: 'leaveBereaved',
            deleting: 'deleting',
            volunteering: 'volunteering',
            bereavedStatus: 'bereavedStatus',
            bereavedGuidance: 'bereavedGuidance',
            bereavedBirthDate: 'bereavedBirthDate',
            bereavedNotes: 'bereavedNotes',
            bereavedAddress: 'bereavedAddress',
            bereavedVolunteer: 'bereavedVolunteer',
            removeVolunteer: 'removeVolunteer'
          },
          decls: 27,
          vars: 14,
          consts: [
            [1, 'row-container'],
            [1, 'row'],
            [1, 'col', 'col-row-state'],
            ['class', 'trash-button', 3, 'click', 4, 'ngIf'],
            ['src', 'https://img.icons8.com/metro/26/000000/save.png', 1, 'save-image'],
            ['src', 'https://img.icons8.com/pastel-glyph/64/000000/edit--v1.png', 1, 'edit-image'],
            ['class', 'expand-button', 3, 'click', 4, 'ngIf'],
            ['class', 'collapse-button', 3, 'click', 4, 'ngIf'],
            [1, 'col', 'col-name'],
            [1, 'col', 'col-communications'],
            ['class', 'bereaved-phone', 4, 'ngIf'],
            ['class', 'bereaved-email', 4, 'ngIf'],
            [1, 'col', 'col-address', 'to-edit'],
            [3, 'value', 'type', 'valueChange'],
            [1, 'col', 'col-seniority'],
            [4, 'ngFor', 'ngForOf'],
            [1, 'col', 'col-status'],
            [3, 'value', 'valueChange'],
            [1, 'col', 'col-guidance'],
            ['class', 'bereaved-otherLang', 4, 'ngIf'],
            [1, 'col', 'bereaved-meetings'],
            [3, 'join'],
            ['class', 'expanded-row', 4, 'ngIf'],
            [1, 'trash-button', 3, 'click'],
            [1, 'trash-icon'],
            [1, 'expand-button', 3, 'click'],
            [1, 'expand-icon'],
            [1, 'collapse-button', 3, 'click'],
            [1, 'collapse-icon'],
            [1, 'bereaved-phone'],
            [1, 'phone-number'],
            [1, 'phone-icon'],
            [1, 'bereaved-email'],
            [1, 'email-address'],
            [1, 'email-icon'],
            [1, 'bereaved-otherLang'],
            [1, 'otherLang'],
            [1, 'leave-button', 3, 'click'],
            [1, 'bereaved-meeting-title'],
            [3, 'routerLink'],
            [1, 'expanded-row'],
            [1, 'expanded-col', 'col-info'],
            [1, 'title'],
            [3, 'ngIf', 'ngIfElse'],
            ['volunteerJoin', ''],
            [1, 'expanded-col', 'col-comments'],
            [1, 'content'],
            [1, 'scroll-container', 'to-edit'],
            [1, 'expanded-col', 'col-slains'],
            [1, 'expanded-col', 'col-story'],
            [1, 'scroll-container'],
            [1, 'expanded-col', 'col-dates'],
            [4, 'ngIf'],
            [3, 'remove']
          ],
          template: function BereavedsListRowComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div', 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](1, 'div', 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](2, 'div', 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                3,
                BereavedsListRowComponent_button_3_Template,
                2,
                0,
                'button',
                3
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](4, 'img', 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](5, 'img', 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                6,
                BereavedsListRowComponent_button_6_Template,
                2,
                0,
                'button',
                6
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                7,
                BereavedsListRowComponent_button_7_Template,
                2,
                0,
                'button',
                7
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](8, 'div', 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](10, 'div', 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                11,
                BereavedsListRowComponent_div_11_Template,
                5,
                3,
                'div',
                10
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                12,
                BereavedsListRowComponent_div_12_Template,
                4,
                1,
                'div',
                11
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](13, 'div', 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](14, 'app-editable-text', 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'valueChange',
                function BereavedsListRowComponent_Template_app_editable_text_valueChange_14_listener($event) {
                  return ctx.bereavedAddress.emit($event);
                }
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](15, 'div', 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                16,
                BereavedsListRowComponent_div_16_Template,
                3,
                3,
                'div',
                15
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](17, 'div', 16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](18, 'app-select-bereaved-status', 17);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'valueChange',
                function BereavedsListRowComponent_Template_app_select_bereaved_status_valueChange_18_listener($event) {
                  return ctx.bereavedStatus.emit($event);
                }
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](19, 'div', 18);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                20,
                BereavedsListRowComponent_div_20_Template,
                3,
                1,
                'div',
                19
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](21, 'div', 18);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                22,
                BereavedsListRowComponent_div_22_Template,
                3,
                1,
                'div',
                19
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](23, 'div', 20);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                24,
                BereavedsListRowComponent_div_24_Template,
                6,
                2,
                'div',
                15
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](25, 'app-join-button', 21);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'join',
                function BereavedsListRowComponent_Template_app_join_button_join_25_listener() {
                  return ctx.joinBereved.emit();
                }
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                26,
                BereavedsListRowComponent_div_26_Template,
                51,
                20,
                'div',
                22
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
                'ngIf',
                ctx.currentUser == null ? null : ctx.currentUser.isAdmin
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngIf', !ctx.expanded);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngIf', ctx.expanded);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate1'](
                ' ',
                (ctx.bereaved.profile == null ? null : ctx.bereaved.profile.firstName) +
                  ' ' +
                  (ctx.bereaved.profile == null ? null : ctx.bereaved.profile.lastName),
                ' '
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
                'ngIf',
                ctx.bereaved.profile == null ? null : ctx.bereaved.profile.phoneNumber
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
                'ngIf',
                ctx.bereaved.profile == null ? null : ctx.bereaved.profile.email
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
                'value',
                (ctx.bereaved == null
                  ? null
                  : ctx.bereaved.profile == null
                  ? null
                  : ctx.bereaved.profile.address == null
                  ? null
                  : ctx.bereaved.profile.address.formattedAddress) || ''
              )('type', 'cities');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
                'ngForOf',
                ctx.bereaved == null
                  ? null
                  : ctx.bereaved.bereavedProfile == null
                  ? null
                  : ctx.bereaved.bereavedProfile.slains
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
                'value',
                ctx.bereaved.bereavedParticipation &&
                  (ctx.bereaved.bereavedParticipation[ctx.year] == null
                    ? null
                    : ctx.bereaved.bereavedParticipation[ctx.year].status)
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
                'ngIf',
                ctx.bereaved.profile == null ? null : ctx.bereaved.profile.otherLang
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
                'ngIf',
                ctx.bereaved == null ? null : ctx.bereaved.lastSignInDate
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
                'ngForOf',
                ctx.bereaved.bereavedParticipation &&
                  (ctx.bereaved.bereavedParticipation[ctx.year] == null
                    ? null
                    : ctx.bereaved.bereavedParticipation[ctx.year].meetings)
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngIf', ctx.expanded);
            }
          },
          directives: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__['NgIf'],
            _shared_components_editable_text_editable_text_component__WEBPACK_IMPORTED_MODULE_4__[
              'EditableTextComponent'
            ],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__['NgForOf'],
            _select_bereaved_status_select_bereaved_status_component__WEBPACK_IMPORTED_MODULE_5__[
              'SelectBereavedStatusComponent'
            ],
            _shared_components_join_button_join_button_component__WEBPACK_IMPORTED_MODULE_6__['JoinButtonComponent'],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__['RouterLinkWithHref'],
            _shared_components_remove_button_remove_button_component__WEBPACK_IMPORTED_MODULE_8__[
              'RemoveButtonComponent'
            ]
          ],
          pipes: [
            _shared_pipes_phone_pipe__WEBPACK_IMPORTED_MODULE_9__['PhonePipe'],
            _shared_pipes_seniority_pipe__WEBPACK_IMPORTED_MODULE_10__['SeniorityPipe'],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__['DatePipe']
          ],
          styles: [
            ".row-container[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #e3e5e7;\n}\n.row-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row;\n}\n.row-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 45px 5px;\n  font-size: 18px;\n  color: #818181;\n}\n.row-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col.col-row-state[_ngcontent-%COMP%] {\n  flex: 0 1 30px;\n}\n.row-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col.col-row-state[_ngcontent-%COMP%]   .expand-button[_ngcontent-%COMP%], .row-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col.col-row-state[_ngcontent-%COMP%]   .collapse-button[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n}\n.row-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col.col-row-state[_ngcontent-%COMP%]   .expand-button[_ngcontent-%COMP%]   .expand-icon[_ngcontent-%COMP%], .row-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col.col-row-state[_ngcontent-%COMP%]   .expand-button[_ngcontent-%COMP%]   .collapse-icon[_ngcontent-%COMP%], .row-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col.col-row-state[_ngcontent-%COMP%]   .collapse-button[_ngcontent-%COMP%]   .expand-icon[_ngcontent-%COMP%], .row-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col.col-row-state[_ngcontent-%COMP%]   .collapse-button[_ngcontent-%COMP%]   .collapse-icon[_ngcontent-%COMP%] {\n  border: 7px solid transparent;\n}\n.row-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col.col-row-state[_ngcontent-%COMP%]   .expand-button[_ngcontent-%COMP%]   .expand-icon[_ngcontent-%COMP%], .row-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col.col-row-state[_ngcontent-%COMP%]   .collapse-button[_ngcontent-%COMP%]   .expand-icon[_ngcontent-%COMP%] {\n  margin-top: 7px;\n  border-top: 7px solid #00736d;\n}\n.row-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col.col-row-state[_ngcontent-%COMP%]   .expand-button[_ngcontent-%COMP%]   .collapse-icon[_ngcontent-%COMP%], .row-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col.col-row-state[_ngcontent-%COMP%]   .collapse-button[_ngcontent-%COMP%]   .collapse-icon[_ngcontent-%COMP%] {\n  border-bottom: 7px solid #00736d;\n}\n.row-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col.col-row-state[_ngcontent-%COMP%]   .volunteering-button[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n}\n.row-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col.col-row-state[_ngcontent-%COMP%]   .volunteering-button[_ngcontent-%COMP%]   .key-icon[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 15px;\n  height: 15px;\n  vertical-align: middle;\n  background-image: url('key.svg');\n  background-size: 100%;\n  background-repeat: no-repeat;\n}\n.row-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col.col-row-state[_ngcontent-%COMP%]   .volunteering-button[_ngcontent-%COMP%]   .key-icon.disabled[_ngcontent-%COMP%] {\n  background-image: url('key-disabled.svg');\n}\n.row-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col.col-row-state[_ngcontent-%COMP%]   .trash-button[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n}\n.row-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col.col-row-state[_ngcontent-%COMP%]   .trash-button[_ngcontent-%COMP%]   .trash-icon[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 15px;\n  height: 15px;\n  background-image: url('trash.svg');\n  background-size: 100%;\n  background-repeat: no-repeat;\n}\n.row-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col.col-name[_ngcontent-%COMP%] {\n  align-items: flex-start;\n  font-size: 22px;\n  font-family: \"arbel\";\n  color: #00736d;\n}\n.row-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col.col-communications[_ngcontent-%COMP%] {\n  flex-direction: column;\n  align-items: flex-end;\n}\n.row-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col.col-communications[_ngcontent-%COMP%]   .phone-icon[_ngcontent-%COMP%], .row-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col.col-communications[_ngcontent-%COMP%]   .email-icon[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 15px;\n  height: 15px;\n  margin-right: 10px;\n  vertical-align: middle;\n  background-size: 100%;\n  background-repeat: no-repeat;\n}\n.row-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col.col-communications[_ngcontent-%COMP%]   .phone-icon[_ngcontent-%COMP%] {\n  background-image: url('phone.png');\n}\n.row-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col.col-communications[_ngcontent-%COMP%]   .email-icon[_ngcontent-%COMP%] {\n  background-image: url('mail.png');\n}\n.row-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col.col-communications[_ngcontent-%COMP%]   .email-address[_ngcontent-%COMP%], .row-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col.col-communications[_ngcontent-%COMP%]   .phone-number[_ngcontent-%COMP%] {\n  display: inline-block;\n  vertical-align: middle;\n}\n.row-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col.col-seniority[_ngcontent-%COMP%] {\n  flex: 0 1 120px;\n}\n.row-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col.col-guidance[_ngcontent-%COMP%] {\n  flex: 0 1 130px;\n}\n.row-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col.col-status[_ngcontent-%COMP%] {\n  flex: 0 1 130px;\n}\n.row-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col.bereaved-meetings[_ngcontent-%COMP%] {\n  align-items: flex-start;\n}\n.row-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col.bereaved-meetings[_ngcontent-%COMP%]   .leave-button[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n}\n.row-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col.bereaved-meetings[_ngcontent-%COMP%]   .leave-button[_ngcontent-%COMP%]   .trash-icon[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 15px;\n  height: 15px;\n  background-image: url('trash.svg');\n  background-size: 100%;\n  background-repeat: no-repeat;\n}\n.row-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col.bereaved-meetings[_ngcontent-%COMP%]   .bereaved-meeting-title[_ngcontent-%COMP%] {\n  margin-right: 5px;\n  display: inline-block;\n  vertical-align: middle;\n}\n.row-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col.bereaved-meetings[_ngcontent-%COMP%]   .join-button[_ngcontent-%COMP%] {\n  align-self: center;\n}\n.row-container[_ngcontent-%COMP%]   .expanded-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row;\n  background-color: #f4f4f4;\n  padding: 5px;\n}\n.row-container[_ngcontent-%COMP%]   .expanded-row[_ngcontent-%COMP%]   .expanded-col[_ngcontent-%COMP%] {\n  flex: 1;\n  max-width: 350px;\n  margin: 5px;\n  padding: 10px;\n  font-size: 18px;\n  border: 1px solid #082551;\n  color: #818181;\n}\n.row-container[_ngcontent-%COMP%]   .expanded-row[_ngcontent-%COMP%]   .expanded-col[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: #082551;\n}\n.row-container[_ngcontent-%COMP%]   .expanded-row[_ngcontent-%COMP%]   .expanded-col[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  height: 250px;\n  overflow-y: scroll;\n}\n.row-container[_ngcontent-%COMP%]   .expanded-row[_ngcontent-%COMP%]   .expanded-col.col-info[_ngcontent-%COMP%] {\n  flex: 0 1 150px;\n}\n.row-container[_ngcontent-%COMP%]   .expanded-row[_ngcontent-%COMP%]   .expanded-col.col-slains[_ngcontent-%COMP%] {\n  flex: 0 1 250px;\n}\n.row-container[_ngcontent-%COMP%]   .expanded-row[_ngcontent-%COMP%]   .expanded-col.col-dates[_ngcontent-%COMP%] {\n  flex: 0 1 100px;\n}\n.star-image[_ngcontent-%COMP%], .edit-image[_ngcontent-%COMP%] {\n  width: 20px;\n}\n.save-image[_ngcontent-%COMP%] {\n  width: 15px;\n}\n.to-edit[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYmVyZWF2ZWRzL2JlcmVhdmVkcy1saXN0LXJvdy9DOlxcVXNlcnNcXFRlaGlsYVxcbGFzdFxcb3VyQnJvXFxvdXItYnJvdGhlcnMtd2ViL3NyY1xcYXBwXFxhZG1pblxcYmVyZWF2ZWRzXFxiZXJlYXZlZHMtbGlzdC1yb3dcXGJlcmVhdmVkcy1saXN0LXJvdy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWRtaW4vYmVyZWF2ZWRzL2JlcmVhdmVkcy1saXN0LXJvdy9iZXJlYXZlZHMtbGlzdC1yb3cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxnQ0FBQTtBQ0RGO0FER0U7RUFDRSxhQUFBO0VBQ0EsY0FBQTtBQ0RKO0FER0k7RUFDRSxPQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQWhCTTtBQ2VaO0FER007RUFDRSxjQUFBO0FDRFI7QURHUTs7RUFFRSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDRFY7QURHVTs7OztFQUVFLDZCQUFBO0FDQ1o7QURFVTs7RUFDRSxlQUFBO0VBQ0EsNkJBQUE7QUNDWjtBREVVOztFQUNFLGdDQUFBO0FDQ1o7QURHUTtFQUNFLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0RWO0FER1U7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7QUNEWjtBREdZO0VBQ0UseUNBQUE7QUNEZDtBRE1RO0VBQ0Usa0JBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDSlY7QURNVTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7QUNKWjtBRFNNO0VBQ0UsdUJBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0FDUFI7QURVTTtFQUNFLHNCQUFBO0VBQ0EscUJBQUE7QUNSUjtBRFVROztFQUVFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtBQ1JWO0FEV1E7RUFDRSxrQ0FBQTtBQ1RWO0FEV1E7RUFDRSxpQ0FBQTtBQ1RWO0FEWVE7O0VBRUUscUJBQUE7RUFDQSxzQkFBQTtBQ1ZWO0FEY007RUFDRSxlQUFBO0FDWlI7QURlTTtFQUNFLGVBQUE7QUNiUjtBRGdCTTtFQUNFLGVBQUE7QUNkUjtBRGlCTTtFQUNFLHVCQUFBO0FDZlI7QURpQlE7RUFDRSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNmVjtBRGlCVTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7QUNmWjtBRGtCUTtFQUNFLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtBQ2hCVjtBRG1CUTtFQUNFLGtCQUFBO0FDakJWO0FEdUJFO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUNyQko7QUR1Qkk7RUFDRSxPQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGNBNUtNO0FDdUpaO0FEdUJNO0VBQ0UsY0FBQTtBQ3JCUjtBRHdCTTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtBQ3RCUjtBRHlCTTtFQUNFLGVBQUE7QUN2QlI7QUQwQk07RUFDRSxlQUFBO0FDeEJSO0FEMkJNO0VBQ0UsZUFBQTtBQ3pCUjtBRDhCQTtFQUNFLFdBQUE7QUMzQkY7QUQ2QkE7RUFDRSxXQUFBO0FDMUJGO0FENEJBO0VBQ0UsZUFBQTtBQ3pCRiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2JlcmVhdmVkcy9iZXJlYXZlZHMtbGlzdC1yb3cvYmVyZWF2ZWRzLWxpc3Qtcm93LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHRleHRDb2xvcjogcmdiKDEyOSwgMTI5LCAxMjkpO1xyXG5cclxuLnJvdy1jb250YWluZXIge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMjI3LCAyMjksIDIzMSk7XHJcblxyXG4gIC5yb3cge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogcm93O1xyXG5cclxuICAgIC5jb2wge1xyXG4gICAgICBmbGV4OiAxO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBtYXJnaW46IDQ1cHggNXB4O1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIGNvbG9yOiAkdGV4dENvbG9yO1xyXG5cclxuICAgICAgJi5jb2wtcm93LXN0YXRlIHtcclxuICAgICAgICBmbGV4OiAwIDEgMzBweDtcclxuXHJcbiAgICAgICAgLmV4cGFuZC1idXR0b24sXHJcbiAgICAgICAgLmNvbGxhcHNlLWJ1dHRvbiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgICAuZXhwYW5kLWljb24sXHJcbiAgICAgICAgICAuY29sbGFwc2UtaWNvbiB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5leHBhbmQtaWNvbiB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDdweDtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcDogN3B4IHNvbGlkIHJnYigwLCAxMTUsIDEwOSk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmNvbGxhcHNlLWljb24ge1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiA3cHggc29saWQgcmdiKDAsIDExNSwgMTA5KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC52b2x1bnRlZXJpbmctYnV0dG9uIHtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAgIC5rZXktaWNvbiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgd2lkdGg6IDE1cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTVweDtcclxuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcva2V5LnN2Zyk7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuXHJcbiAgICAgICAgICAgICYuZGlzYWJsZWQge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi8uLi9hc3NldHMvaW1nL2tleS1kaXNhYmxlZC5zdmcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudHJhc2gtYnV0dG9uIHtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAgIC50cmFzaC1pY29uIHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICB3aWR0aDogMTVweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy90cmFzaC5zdmcpO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmNvbC1uYW1lIHtcclxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdhcmJlbCc7XHJcbiAgICAgICAgY29sb3I6IHJnYigwLCAxMTUsIDEwOSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuY29sLWNvbW11bmljYXRpb25zIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuXHJcbiAgICAgICAgLnBob25lLWljb24sXHJcbiAgICAgICAgLmVtYWlsLWljb24ge1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgd2lkdGg6IDE1cHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5waG9uZS1pY29uIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi8uLi9hc3NldHMvaW1nL3Bob25lLnBuZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5lbWFpbC1pY29uIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi8uLi9hc3NldHMvaW1nL21haWwucG5nKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5lbWFpbC1hZGRyZXNzLFxyXG4gICAgICAgIC5waG9uZS1udW1iZXIge1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuY29sLXNlbmlvcml0eSB7XHJcbiAgICAgICAgZmxleDogMCAxIDEyMHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmNvbC1ndWlkYW5jZSB7XHJcbiAgICAgICAgZmxleDogMCAxIDEzMHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmNvbC1zdGF0dXMge1xyXG4gICAgICAgIGZsZXg6IDAgMSAxMzBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5iZXJlYXZlZC1tZWV0aW5ncyB7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcblxyXG4gICAgICAgIC5sZWF2ZS1idXR0b24ge1xyXG4gICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAgIC50cmFzaC1pY29uIHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICB3aWR0aDogMTVweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy90cmFzaC5zdmcpO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5iZXJlYXZlZC1tZWV0aW5nLXRpdGxlIHtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5qb2luLWJ1dHRvbiB7XHJcbiAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZXhwYW5kZWQtcm93IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IHJvdztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDQsIDI0NCwgMjQ0KTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuXHJcbiAgICAuZXhwYW5kZWQtY29sIHtcclxuICAgICAgZmxleDogMTtcclxuICAgICAgbWF4LXdpZHRoOiAzNTBweDtcclxuICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgIzA4MjU1MTtcclxuICAgICAgY29sb3I6ICR0ZXh0Q29sb3I7XHJcblxyXG4gICAgICAudGl0bGUge1xyXG4gICAgICAgIGNvbG9yOiAjMDgyNTUxO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY29udGVudCB7XHJcbiAgICAgICAgaGVpZ2h0OiAyNTBweDtcclxuICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuY29sLWluZm8ge1xyXG4gICAgICAgIGZsZXg6IDAgMSAxNTBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5jb2wtc2xhaW5zIHtcclxuICAgICAgICBmbGV4OiAwIDEgMjUwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuY29sLWRhdGVzIHtcclxuICAgICAgICBmbGV4OiAwIDEgMTAwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuLnN0YXItaW1hZ2UsLmVkaXQtaW1hZ2V7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbn1cclxuLnNhdmUtaW1hZ2V7XHJcbiAgd2lkdGg6IDE1cHg7XHJcbn1cclxuLnRvLWVkaXR7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59IiwiLnJvdy1jb250YWluZXIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UzZTVlNztcbn1cbi5yb3ctY29udGFpbmVyIC5yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdztcbn1cbi5yb3ctY29udGFpbmVyIC5yb3cgLmNvbCB7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogNDVweCA1cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICM4MTgxODE7XG59XG4ucm93LWNvbnRhaW5lciAucm93IC5jb2wuY29sLXJvdy1zdGF0ZSB7XG4gIGZsZXg6IDAgMSAzMHB4O1xufVxuLnJvdy1jb250YWluZXIgLnJvdyAuY29sLmNvbC1yb3ctc3RhdGUgLmV4cGFuZC1idXR0b24sXG4ucm93LWNvbnRhaW5lciAucm93IC5jb2wuY29sLXJvdy1zdGF0ZSAuY29sbGFwc2UtYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnJvdy1jb250YWluZXIgLnJvdyAuY29sLmNvbC1yb3ctc3RhdGUgLmV4cGFuZC1idXR0b24gLmV4cGFuZC1pY29uLFxuLnJvdy1jb250YWluZXIgLnJvdyAuY29sLmNvbC1yb3ctc3RhdGUgLmV4cGFuZC1idXR0b24gLmNvbGxhcHNlLWljb24sXG4ucm93LWNvbnRhaW5lciAucm93IC5jb2wuY29sLXJvdy1zdGF0ZSAuY29sbGFwc2UtYnV0dG9uIC5leHBhbmQtaWNvbixcbi5yb3ctY29udGFpbmVyIC5yb3cgLmNvbC5jb2wtcm93LXN0YXRlIC5jb2xsYXBzZS1idXR0b24gLmNvbGxhcHNlLWljb24ge1xuICBib3JkZXI6IDdweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cbi5yb3ctY29udGFpbmVyIC5yb3cgLmNvbC5jb2wtcm93LXN0YXRlIC5leHBhbmQtYnV0dG9uIC5leHBhbmQtaWNvbixcbi5yb3ctY29udGFpbmVyIC5yb3cgLmNvbC5jb2wtcm93LXN0YXRlIC5jb2xsYXBzZS1idXR0b24gLmV4cGFuZC1pY29uIHtcbiAgbWFyZ2luLXRvcDogN3B4O1xuICBib3JkZXItdG9wOiA3cHggc29saWQgIzAwNzM2ZDtcbn1cbi5yb3ctY29udGFpbmVyIC5yb3cgLmNvbC5jb2wtcm93LXN0YXRlIC5leHBhbmQtYnV0dG9uIC5jb2xsYXBzZS1pY29uLFxuLnJvdy1jb250YWluZXIgLnJvdyAuY29sLmNvbC1yb3ctc3RhdGUgLmNvbGxhcHNlLWJ1dHRvbiAuY29sbGFwc2UtaWNvbiB7XG4gIGJvcmRlci1ib3R0b206IDdweCBzb2xpZCAjMDA3MzZkO1xufVxuLnJvdy1jb250YWluZXIgLnJvdyAuY29sLmNvbC1yb3ctc3RhdGUgLnZvbHVudGVlcmluZy1idXR0b24ge1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5yb3ctY29udGFpbmVyIC5yb3cgLmNvbC5jb2wtcm93LXN0YXRlIC52b2x1bnRlZXJpbmctYnV0dG9uIC5rZXktaWNvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDE1cHg7XG4gIGhlaWdodDogMTVweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcva2V5LnN2Zyk7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cbi5yb3ctY29udGFpbmVyIC5yb3cgLmNvbC5jb2wtcm93LXN0YXRlIC52b2x1bnRlZXJpbmctYnV0dG9uIC5rZXktaWNvbi5kaXNhYmxlZCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi8uLi9hc3NldHMvaW1nL2tleS1kaXNhYmxlZC5zdmcpO1xufVxuLnJvdy1jb250YWluZXIgLnJvdyAuY29sLmNvbC1yb3ctc3RhdGUgLnRyYXNoLWJ1dHRvbiB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnJvdy1jb250YWluZXIgLnJvdyAuY29sLmNvbC1yb3ctc3RhdGUgLnRyYXNoLWJ1dHRvbiAudHJhc2gtaWNvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDE1cHg7XG4gIGhlaWdodDogMTVweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvdHJhc2guc3ZnKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuLnJvdy1jb250YWluZXIgLnJvdyAuY29sLmNvbC1uYW1lIHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC1mYW1pbHk6IFwiYXJiZWxcIjtcbiAgY29sb3I6ICMwMDczNmQ7XG59XG4ucm93LWNvbnRhaW5lciAucm93IC5jb2wuY29sLWNvbW11bmljYXRpb25zIHtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xufVxuLnJvdy1jb250YWluZXIgLnJvdyAuY29sLmNvbC1jb21tdW5pY2F0aW9ucyAucGhvbmUtaWNvbixcbi5yb3ctY29udGFpbmVyIC5yb3cgLmNvbC5jb2wtY29tbXVuaWNhdGlvbnMgLmVtYWlsLWljb24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxNXB4O1xuICBoZWlnaHQ6IDE1cHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuLnJvdy1jb250YWluZXIgLnJvdyAuY29sLmNvbC1jb21tdW5pY2F0aW9ucyAucGhvbmUtaWNvbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi8uLi9hc3NldHMvaW1nL3Bob25lLnBuZyk7XG59XG4ucm93LWNvbnRhaW5lciAucm93IC5jb2wuY29sLWNvbW11bmljYXRpb25zIC5lbWFpbC1pY29uIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvbWFpbC5wbmcpO1xufVxuLnJvdy1jb250YWluZXIgLnJvdyAuY29sLmNvbC1jb21tdW5pY2F0aW9ucyAuZW1haWwtYWRkcmVzcyxcbi5yb3ctY29udGFpbmVyIC5yb3cgLmNvbC5jb2wtY29tbXVuaWNhdGlvbnMgLnBob25lLW51bWJlciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi5yb3ctY29udGFpbmVyIC5yb3cgLmNvbC5jb2wtc2VuaW9yaXR5IHtcbiAgZmxleDogMCAxIDEyMHB4O1xufVxuLnJvdy1jb250YWluZXIgLnJvdyAuY29sLmNvbC1ndWlkYW5jZSB7XG4gIGZsZXg6IDAgMSAxMzBweDtcbn1cbi5yb3ctY29udGFpbmVyIC5yb3cgLmNvbC5jb2wtc3RhdHVzIHtcbiAgZmxleDogMCAxIDEzMHB4O1xufVxuLnJvdy1jb250YWluZXIgLnJvdyAuY29sLmJlcmVhdmVkLW1lZXRpbmdzIHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG4ucm93LWNvbnRhaW5lciAucm93IC5jb2wuYmVyZWF2ZWQtbWVldGluZ3MgLmxlYXZlLWJ1dHRvbiB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5yb3ctY29udGFpbmVyIC5yb3cgLmNvbC5iZXJlYXZlZC1tZWV0aW5ncyAubGVhdmUtYnV0dG9uIC50cmFzaC1pY29uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTVweDtcbiAgaGVpZ2h0OiAxNXB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy90cmFzaC5zdmcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG4ucm93LWNvbnRhaW5lciAucm93IC5jb2wuYmVyZWF2ZWQtbWVldGluZ3MgLmJlcmVhdmVkLW1lZXRpbmctdGl0bGUge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLnJvdy1jb250YWluZXIgLnJvdyAuY29sLmJlcmVhdmVkLW1lZXRpbmdzIC5qb2luLWJ1dHRvbiB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cbi5yb3ctY29udGFpbmVyIC5leHBhbmRlZC1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcbiAgcGFkZGluZzogNXB4O1xufVxuLnJvdy1jb250YWluZXIgLmV4cGFuZGVkLXJvdyAuZXhwYW5kZWQtY29sIHtcbiAgZmxleDogMTtcbiAgbWF4LXdpZHRoOiAzNTBweDtcbiAgbWFyZ2luOiA1cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzA4MjU1MTtcbiAgY29sb3I6ICM4MTgxODE7XG59XG4ucm93LWNvbnRhaW5lciAuZXhwYW5kZWQtcm93IC5leHBhbmRlZC1jb2wgLnRpdGxlIHtcbiAgY29sb3I6ICMwODI1NTE7XG59XG4ucm93LWNvbnRhaW5lciAuZXhwYW5kZWQtcm93IC5leHBhbmRlZC1jb2wgLmNvbnRlbnQge1xuICBoZWlnaHQ6IDI1MHB4O1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG4ucm93LWNvbnRhaW5lciAuZXhwYW5kZWQtcm93IC5leHBhbmRlZC1jb2wuY29sLWluZm8ge1xuICBmbGV4OiAwIDEgMTUwcHg7XG59XG4ucm93LWNvbnRhaW5lciAuZXhwYW5kZWQtcm93IC5leHBhbmRlZC1jb2wuY29sLXNsYWlucyB7XG4gIGZsZXg6IDAgMSAyNTBweDtcbn1cbi5yb3ctY29udGFpbmVyIC5leHBhbmRlZC1yb3cgLmV4cGFuZGVkLWNvbC5jb2wtZGF0ZXMge1xuICBmbGV4OiAwIDEgMTAwcHg7XG59XG5cbi5zdGFyLWltYWdlLCAuZWRpdC1pbWFnZSB7XG4gIHdpZHRoOiAyMHB4O1xufVxuXG4uc2F2ZS1pbWFnZSB7XG4gIHdpZHRoOiAxNXB4O1xufVxuXG4udG8tZWRpdCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */"
          ],
          changeDetection: 0
        });
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            BereavedsListRowComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                args: [
                  {
                    selector: 'app-bereaveds-list-row',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__['ChangeDetectionStrategy'].OnPush,
                    templateUrl: './bereaveds-list-row.component.html',
                    styleUrls: ['./bereaveds-list-row.component.scss']
                  }
                ]
              }
            ],
            function() {
              return [
                {
                  type: _shared_services_participations_service__WEBPACK_IMPORTED_MODULE_2__['ParticipationsService']
                }
              ];
            },
            {
              currentUser: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input']
                }
              ],
              bereaved: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input']
                }
              ],
              joinBereved: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Output']
                }
              ],
              leaveBereaved: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Output']
                }
              ],
              deleting: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Output']
                }
              ],
              volunteering: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Output']
                }
              ],
              bereavedStatus: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Output']
                }
              ],
              bereavedGuidance: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Output']
                }
              ],
              bereavedBirthDate: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Output']
                }
              ],
              bereavedNotes: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Output']
                }
              ],
              bereavedAddress: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Output']
                }
              ],
              bereavedVolunteer: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Output']
                }
              ],
              removeVolunteer: [
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
    './src/app/admin/bereaveds/bereaveds-list/bereaveds-list.component.ts':
      /*!****************************************************************************!*\
    !*** ./src/app/admin/bereaveds/bereaveds-list/bereaveds-list.component.ts ***!
    \****************************************************************************/

      /*! exports provided: BereavedsListComponent */

      /***/
      function srcAppAdminBereavedsBereavedsListBereavedsListComponentTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'BereavedsListComponent', function() {
          return BereavedsListComponent;
        });
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */

        var _shared_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../../shared/constants */
          './src/app/shared/constants.ts'
        );
        /* harmony import */

        var _shared_components_list_list_header_list_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../shared/components/list/list-header/list-header.component */
          './src/app/shared/components/list/list-header/list-header.component.ts'
        );
        /* harmony import */

        var _shared_components_list_list_column_list_column_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../shared/components/list/list-column/list-column.component */
          './src/app/shared/components/list/list-column/list-column.component.ts'
        );
        /* harmony import */

        var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @angular/common */
          './node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js'
        );
        /* harmony import */

        var _bereaveds_list_row_bereaveds_list_row_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../bereaveds-list-row/bereaveds-list-row.component */
          './src/app/admin/bereaveds/bereaveds-list-row/bereaveds-list-row.component.ts'
        );
        /* harmony import */

        var _sort_bereaveds_sort_bereaveds_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../sort-bereaveds/sort-bereaveds.pipe */
          './src/app/admin/bereaveds/sort-bereaveds/sort-bereaveds.pipe.ts'
        );

        function BereavedsListComponent_div_28_Template(rf, ctx) {
          if (rf & 1) {
            var _r278 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵgetCurrentView']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](1, 'app-bereaveds-list-row', 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
              'joinBereved',
              function BereavedsListComponent_div_28_Template_app_bereaveds_list_row_joinBereved_1_listener() {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵrestoreView'](_r278);

                var bereaved_r276 = ctx.$implicit;

                var ctx_r277 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();

                return ctx_r277.joinBereved.emit(bereaved_r276);
              }
            )(
              'leaveBereaved',
              function BereavedsListComponent_div_28_Template_app_bereaveds_list_row_leaveBereaved_1_listener($event) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵrestoreView'](_r278);

                var bereaved_r276 = ctx.$implicit;

                var ctx_r279 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();

                return ctx_r279.leaveBereaved.emit({
                  user: bereaved_r276,
                  meeting: $event
                });
              }
            )('deleting', function BereavedsListComponent_div_28_Template_app_bereaveds_list_row_deleting_1_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵrestoreView'](_r278);

              var bereaved_r276 = ctx.$implicit;

              var ctx_r280 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();

              return ctx_r280.deleting.emit(bereaved_r276);
            })(
              'volunteering',
              function BereavedsListComponent_div_28_Template_app_bereaveds_list_row_volunteering_1_listener($event) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵrestoreView'](_r278);

                var bereaved_r276 = ctx.$implicit;

                var ctx_r281 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();

                return ctx_r281.volunteering.emit({
                  user: bereaved_r276,
                  isVolunteer: $event
                });
              }
            )(
              'bereavedStatus',
              function BereavedsListComponent_div_28_Template_app_bereaveds_list_row_bereavedStatus_1_listener($event) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵrestoreView'](_r278);

                var bereaved_r276 = ctx.$implicit;

                var ctx_r282 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();

                return ctx_r282.bereavedStatus.emit({
                  bereaved: bereaved_r276,
                  status: $event
                });
              }
            )(
              'bereavedGuidance',
              function BereavedsListComponent_div_28_Template_app_bereaveds_list_row_bereavedGuidance_1_listener(
                $event
              ) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵrestoreView'](_r278);

                var bereaved_r276 = ctx.$implicit;

                var ctx_r283 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();

                return ctx_r283.bereavedGuidance.emit({
                  bereaved: bereaved_r276,
                  guidance: $event
                });
              }
            )(
              'bereavedBirthDate',
              function BereavedsListComponent_div_28_Template_app_bereaveds_list_row_bereavedBirthDate_1_listener(
                $event
              ) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵrestoreView'](_r278);

                var bereaved_r276 = ctx.$implicit;

                var ctx_r284 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();

                return ctx_r284.bereavedBirthDate.emit({
                  user: bereaved_r276,
                  birthDate: $event
                });
              }
            )(
              'bereavedNotes',
              function BereavedsListComponent_div_28_Template_app_bereaveds_list_row_bereavedNotes_1_listener($event) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵrestoreView'](_r278);

                var bereaved_r276 = ctx.$implicit;

                var ctx_r285 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();

                return ctx_r285.bereavedNotes.emit({
                  bereaved: bereaved_r276,
                  notes: $event
                });
              }
            )(
              'bereavedAddress',
              function BereavedsListComponent_div_28_Template_app_bereaveds_list_row_bereavedAddress_1_listener(
                $event
              ) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵrestoreView'](_r278);

                var bereaved_r276 = ctx.$implicit;

                var ctx_r286 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();

                return ctx_r286.bereavedAddress.emit({
                  user: bereaved_r276,
                  address: $event
                });
              }
            )(
              'bereavedVolunteer',
              function BereavedsListComponent_div_28_Template_app_bereaveds_list_row_bereavedVolunteer_1_listener() {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵrestoreView'](_r278);

                var bereaved_r276 = ctx.$implicit;

                var ctx_r287 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();

                return ctx_r287.bereavedVolunteer.emit({
                  user: ctx_r287.currentUser,
                  bereaved: bereaved_r276
                });
              }
            )(
              'removeVolunteer',
              function BereavedsListComponent_div_28_Template_app_bereaveds_list_row_removeVolunteer_1_listener() {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵrestoreView'](_r278);

                var bereaved_r276 = ctx.$implicit;

                var ctx_r288 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();

                return ctx_r288.removeVolunteer.emit(bereaved_r276);
              }
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }

          if (rf & 2) {
            var bereaved_r276 = ctx.$implicit;

            var ctx_r275 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵclassProp'](
              'hidden',
              !ctx_r275.filteredBereaveds.has(bereaved_r276.id)
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('bereaved', bereaved_r276)(
              'currentUser',
              ctx_r275.currentUser
            );
          }
        }

        var BereavedsListComponent = function BereavedsListComponent() {
          _classCallCheck(this, BereavedsListComponent);

          this.joinBereved = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
          this.leaveBereaved = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
          this.volunteering = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
          this.deleting = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
          this.bereavedStatus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
          this.bereavedGuidance = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
          this.bereavedBirthDate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
          this.bereavedNotes = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
          this.bereavedAddress = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
          this.bereavedVolunteer = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
          this.removeVolunteer = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
          this.year = _shared_constants__WEBPACK_IMPORTED_MODULE_1__['MEMORIAL_YEAR'];
          this.sortedColumn = {
            column: 'name',
            direction: 'asc'
          };
        };

        BereavedsListComponent.ɵfac = function BereavedsListComponent_Factory(t) {
          return new (t || BereavedsListComponent)();
        };

        BereavedsListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineComponent']({
          type: BereavedsListComponent,
          selectors: [['app-bereaveds-list']],
          inputs: {
            currentUser: 'currentUser',
            bereaveds: 'bereaveds',
            filteredBereaveds: 'filteredBereaveds'
          },
          outputs: {
            joinBereved: 'joinBereved',
            leaveBereaved: 'leaveBereaved',
            volunteering: 'volunteering',
            deleting: 'deleting',
            bereavedStatus: 'bereavedStatus',
            bereavedGuidance: 'bereavedGuidance',
            bereavedBirthDate: 'bereavedBirthDate',
            bereavedNotes: 'bereavedNotes',
            bereavedAddress: 'bereavedAddress',
            bereavedVolunteer: 'bereavedVolunteer',
            removeVolunteer: 'removeVolunteer'
          },
          decls: 30,
          vars: 7,
          consts: [
            [1, 'list-header', 3, 'scroll', 'sort', 'sortChange'],
            [1, 'col-row-state'],
            ['title', '\u05E9\u05DD \u05E4\u05E8\u05D8\u05D9', 'field', 'firstName'],
            ['title', '\u05E9\u05DD \u05DE\u05E9\u05E4\u05D7\u05D4', 'field', 'lastName'],
            ['title', '\u05DE\u05E7\u05D5\u05DD \u05DE\u05D2\u05D5\u05E8\u05D9\u05DD', 'field', 'address'],
            ['title', '\u05D5\u05EA\u05E7 \u05D1\u05E9\u05DB\u05D5\u05DC', 'field', 'seniority', 1, 'col-seniority'],
            ['title', '\u05E1\u05D8\u05D8\u05D5\u05E1', 'field', 'status', 1, 'drop-down-menu', 'col-status'],
            [
              'title',
              '\u05DE\u05E8\u05E6\u05D4 \u05D1\u05E9\u05E4\u05D5\u05EA',
              'field',
              'languages',
              1,
              'drop-down-menu',
              'col-status'
            ],
            [
              'title',
              '\u05E4\u05E2\u05D9\u05DC-\u05DC\u05D0 \u05E4\u05E2\u05D9\u05DC',
              'field',
              'active',
              1,
              'col-seniority'
            ],
            [1, 'tr'],
            [1, 'empty', 'intr'],
            [1, 'name', 'intr'],
            [1, 'conect', 'intr'],
            [1, 'address', 'intr'],
            [1, 'slain', 'intr'],
            [1, 'status', 'intr'],
            [1, 'join', 'intr'],
            [1, 'bereaved-items'],
            [4, 'ngFor', 'ngForOf'],
            [
              3,
              'bereaved',
              'currentUser',
              'joinBereved',
              'leaveBereaved',
              'deleting',
              'volunteering',
              'bereavedStatus',
              'bereavedGuidance',
              'bereavedBirthDate',
              'bereavedNotes',
              'bereavedAddress',
              'bereavedVolunteer',
              'removeVolunteer'
            ]
          ],
          template: function BereavedsListComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'app-list-header', 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'sortChange',
                function BereavedsListComponent_Template_app_list_header_sortChange_0_listener($event) {
                  return (ctx.sortedColumn = $event);
                }
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](1, 'app-list-column', 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](2, 'app-list-column', 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](3, 'app-list-column', 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](4, 'app-list-column', 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](5, 'app-list-column', 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](6, 'app-list-column', 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](7, 'app-list-column', 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](8, 'app-list-column', 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](9, 'div', 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](10, 'div', 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](11, 'div', 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](12, '\u05E9\u05DD \u05DE\u05DC\u05D0');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](13, 'div', 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                14,
                '\u05E4\u05E8\u05D8\u05D9 \u05D4\u05EA\u05E7\u05E9\u05E8\u05D5\u05EA'
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](15, 'div', 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                16,
                '\u05DE\u05E7\u05D5\u05DD \u05DE\u05D2\u05D5\u05E8\u05D9\u05DD'
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](17, 'div', 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                18,
                '\u05D5\u05EA\u05E7 \u05D1\u05E9\u05DB\u05D5\u05DC'
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](19, 'div', 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](20, '\u05E1\u05D8\u05D8\u05D5\u05E1');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](21, 'div', 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                22,
                '\u05DE\u05E8\u05E6\u05D4 \u05D1\u05E9\u05E4\u05D5\u05EA'
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](23, 'div', 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                24,
                ' \u05E4\u05E2\u05D9\u05DC/ \u05DC\u05D0 \u05E4\u05E2\u05D9\u05DC'
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](25, 'div', 16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](26, '\u05E9\u05D9\u05D1\u05D5\u05E5');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](27, 'div', 17);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                28,
                BereavedsListComponent_div_28_Template,
                2,
                4,
                'div',
                18
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpipe'](29, 'sortBereaveds');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('scroll', ctx.filteredBereaveds.size > 10)(
                'sort',
                ctx.sortedColumn
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](28);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
                'ngForOf',
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpipeBind3'](
                  29,
                  3,
                  ctx.bereaveds,
                  ctx.sortedColumn,
                  ctx.year
                )
              );
            }
          },
          directives: [
            _shared_components_list_list_header_list_header_component__WEBPACK_IMPORTED_MODULE_2__[
              'ListHeaderComponent'
            ],
            _shared_components_list_list_column_list_column_component__WEBPACK_IMPORTED_MODULE_3__[
              'ListColumnComponent'
            ],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__['NgForOf'],
            _bereaveds_list_row_bereaveds_list_row_component__WEBPACK_IMPORTED_MODULE_5__['BereavedsListRowComponent']
          ],
          pipes: [_sort_bereaveds_sort_bereaveds_pipe__WEBPACK_IMPORTED_MODULE_6__['SortBereavedsPipe']],
          styles: [
            '[_nghost-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n[_nghost-%COMP%]   .hidden[_ngcontent-%COMP%] {\n  display: none;\n}\n[_nghost-%COMP%]   .list-header[_ngcontent-%COMP%]   .col-row-state[_ngcontent-%COMP%] {\n  flex: 0 1 30px;\n}\n[_nghost-%COMP%]   .list-header[_ngcontent-%COMP%]   .col-seniority[_ngcontent-%COMP%] {\n  flex: 0 1 120px;\n}\n[_nghost-%COMP%]   .list-header[_ngcontent-%COMP%]   .col-guidance[_ngcontent-%COMP%] {\n  flex: 0 1 130px;\n}\n[_nghost-%COMP%]   .list-header[_ngcontent-%COMP%]   .col-status[_ngcontent-%COMP%] {\n  flex: 0 1 130px;\n}\n[_nghost-%COMP%]   .bereaved-items[_ngcontent-%COMP%] {\n  height: 100%;\n  direction: ltr;\n  overflow: auto;\n}\n.tr[_ngcontent-%COMP%] {\n  display: flex;\n}\n.tr[_ngcontent-%COMP%]   .intr[_ngcontent-%COMP%] {\n  flex: 1;\n  text-align: center;\n  color: #818181;\n}\n.tr[_ngcontent-%COMP%]   .empty[_ngcontent-%COMP%] {\n  flex-grow: 0;\n  flex-shrink: 1;\n  flex-basis: 30px;\n}\n.drop-down-menu[_ngcontent-%COMP%] {\n  position: relative;\n  min-width: 170px;\n  min-height: 50px;\n  background-color: white;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  flex-wrap: wrap;\n  padding: 0 0.5em;\n  background-color: white;\n  color: #00a099;\n  text-decoration: none;\n}\n.drop-down-menu[_ngcontent-%COMP%]:hover, .drop-down-menu.active[_ngcontent-%COMP%] {\n  background-color: #00a099;\n  color: white;\n}\n.drop-down-menu[_ngcontent-%COMP%]:not(:last-child):after {\n  content: "";\n  display: block;\n  padding: 0 0.5em;\n  height: 1px;\n  background-color: lightgray;\n  opacity: 0.3;\n}\n.drop-down-menu[_ngcontent-%COMP%]   .menu-triangle[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYmVyZWF2ZWRzL2JlcmVhdmVkcy1saXN0L0M6XFxVc2Vyc1xcVGVoaWxhXFxsYXN0XFxvdXJCcm9cXG91ci1icm90aGVycy13ZWIvc3JjXFxhcHBcXGFkbWluXFxiZXJlYXZlZHNcXGJlcmVhdmVkcy1saXN0XFxiZXJlYXZlZHMtbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWRtaW4vYmVyZWF2ZWRzL2JlcmVhdmVkcy1saXN0L2JlcmVhdmVkcy1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0FDQ0Y7QURDRTtFQUNFLGFBQUE7QUNDSjtBREdJO0VBQ0UsY0FBQTtBQ0ROO0FESUk7RUFDRSxlQUFBO0FDRk47QURLSTtFQUNFLGVBQUE7QUNITjtBRE1JO0VBQ0UsZUFBQTtBQ0pOO0FEUUU7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUNOSjtBRFVBO0VBQ0UsYUFBQTtBQ1BGO0FEUUU7RUFDRSxPQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDTko7QURRRTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNOSjtBRFVBO0VBQ0Usa0JBQUE7RUFFQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFVQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFFQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FDbEJGO0FEb0JFO0VBRUUseUJBQUE7RUFDQSxZQUFBO0FDbkJKO0FEc0JFO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7QUNwQko7QUR1QkU7RUFDRSxhQUFBO0FDckJKIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vYmVyZWF2ZWRzL2JlcmVhdmVkcy1saXN0L2JlcmVhdmVkcy1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcblxyXG4gIC5oaWRkZW4ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5saXN0LWhlYWRlciB7XHJcbiAgICAuY29sLXJvdy1zdGF0ZSB7XHJcbiAgICAgIGZsZXg6IDAgMSAzMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2wtc2VuaW9yaXR5IHtcclxuICAgICAgZmxleDogMCAxIDEyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2wtZ3VpZGFuY2Uge1xyXG4gICAgICBmbGV4OiAwIDEgMTMwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbC1zdGF0dXMge1xyXG4gICAgICBmbGV4OiAwIDEgMTMwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYmVyZWF2ZWQtaXRlbXMge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlyZWN0aW9uOiBsdHI7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICB9XHJcbn1cclxuXHJcbi50ciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAuaW50ciB7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICM4MTgxODE7XHJcbiAgfVxyXG4gIC5lbXB0eXtcclxuICAgIGZsZXgtZ3JvdzogMDtcclxuICAgIGZsZXgtc2hyaW5rOiAxO1xyXG4gICAgZmxleC1iYXNpczogMzBweDtcclxuICB9XHJcbn1cclxuXHJcbi5kcm9wLWRvd24tbWVudSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICBtaW4td2lkdGg6IDE3MHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDUwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcblxyXG4gIC8vIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJGhlYWRlci1tb2JpbGUtYnJlYWtwb2ludCkge1xyXG4gIC8vICAgcG9zaXRpb246IGZpeGVkO1xyXG4gIC8vICAgei1pbmRleDogMTA7XHJcbiAgLy8gICBwYWRkaW5nOiAxZW0gMC41ZW07XHJcbiAgLy8gICBib3JkZXItcmFkaXVzOiAwLjVlbTtcclxuICAvLyAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuICAvLyB9XHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG4gIHBhZGRpbmc6IDAgMC41ZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgY29sb3I6ICMwMGEwOTk7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cclxuICAmOmhvdmVyLFxyXG4gICYuYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGEwOTk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5cclxuICAmOm5vdCg6bGFzdC1jaGlsZCk6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmc6IDAgMC41ZW07XHJcbiAgICBoZWlnaHQ6IDFweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcclxuICAgIG9wYWNpdHk6IDAuMztcclxuICB9XHJcblxyXG4gIC5tZW51LXRyaWFuZ2xlIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcblxyXG4gICAgLy8gQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkaGVhZGVyLW1vYmlsZS1icmVha3BvaW50KSB7XHJcbiAgICAvLyAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgLy8gICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAvLyAgIGJvdHRvbTogMTAwJTtcclxuICAgIC8vICAgbGVmdDogNzAlO1xyXG4gICAgLy8gICB3aWR0aDogMDtcclxuICAgIC8vICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIC8vICAgYm9yZGVyLXdpZHRoOiAwIDcuNXB4IDdweCA3LjVweDtcclxuICAgIC8vICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjZmZmZmZmIHRyYW5zcGFyZW50O1xyXG4gICAgLy8gfVxyXG4gIH1cclxufVxyXG4iLCI6aG9zdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuOmhvc3QgLmhpZGRlbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG46aG9zdCAubGlzdC1oZWFkZXIgLmNvbC1yb3ctc3RhdGUge1xuICBmbGV4OiAwIDEgMzBweDtcbn1cbjpob3N0IC5saXN0LWhlYWRlciAuY29sLXNlbmlvcml0eSB7XG4gIGZsZXg6IDAgMSAxMjBweDtcbn1cbjpob3N0IC5saXN0LWhlYWRlciAuY29sLWd1aWRhbmNlIHtcbiAgZmxleDogMCAxIDEzMHB4O1xufVxuOmhvc3QgLmxpc3QtaGVhZGVyIC5jb2wtc3RhdHVzIHtcbiAgZmxleDogMCAxIDEzMHB4O1xufVxuOmhvc3QgLmJlcmVhdmVkLWl0ZW1zIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXJlY3Rpb246IGx0cjtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi50ciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4udHIgLmludHIge1xuICBmbGV4OiAxO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjODE4MTgxO1xufVxuLnRyIC5lbXB0eSB7XG4gIGZsZXgtZ3JvdzogMDtcbiAgZmxleC1zaHJpbms6IDE7XG4gIGZsZXgtYmFzaXM6IDMwcHg7XG59XG5cbi5kcm9wLWRvd24tbWVudSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLXdpZHRoOiAxNzBweDtcbiAgbWluLWhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIHBhZGRpbmc6IDAgMC41ZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogIzAwYTA5OTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmRyb3AtZG93bi1tZW51OmhvdmVyLCAuZHJvcC1kb3duLW1lbnUuYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYTA5OTtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmRyb3AtZG93bi1tZW51Om5vdCg6bGFzdC1jaGlsZCk6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMCAwLjVlbTtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbiAgb3BhY2l0eTogMC4zO1xufVxuLmRyb3AtZG93bi1tZW51IC5tZW51LXRyaWFuZ2xlIHtcbiAgZGlzcGxheTogbm9uZTtcbn0iXX0= */'
          ],
          changeDetection: 0
        });
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            BereavedsListComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                args: [
                  {
                    selector: 'app-bereaveds-list',
                    templateUrl: './bereaveds-list.component.html',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__['ChangeDetectionStrategy'].OnPush,
                    styleUrls: ['./bereaveds-list.component.scss']
                  }
                ]
              }
            ],
            null,
            {
              currentUser: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input']
                }
              ],
              bereaveds: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input']
                }
              ],
              filteredBereaveds: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input']
                }
              ],
              joinBereved: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Output']
                }
              ],
              leaveBereaved: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Output']
                }
              ],
              volunteering: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Output']
                }
              ],
              deleting: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Output']
                }
              ],
              bereavedStatus: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Output']
                }
              ],
              bereavedGuidance: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Output']
                }
              ],
              bereavedBirthDate: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Output']
                }
              ],
              bereavedNotes: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Output']
                }
              ],
              bereavedAddress: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Output']
                }
              ],
              bereavedVolunteer: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Output']
                }
              ],
              removeVolunteer: [
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
    './src/app/admin/bereaveds/modal-select-meeting/modal-select-meeting.component.ts':
      /*!****************************************************************************************!*\
    !*** ./src/app/admin/bereaveds/modal-select-meeting/modal-select-meeting.component.ts ***!
    \****************************************************************************************/

      /*! exports provided: ModalSelectMeetingComponent */

      /***/
      function srcAppAdminBereavedsModalSelectMeetingModalSelectMeetingComponentTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'ModalSelectMeetingComponent', function() {
          return ModalSelectMeetingComponent;
        });
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */

        var _shared_services_utils_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../../shared/services/utils.service */
          './src/app/shared/services/utils.service.ts'
        );
        /* harmony import */

        var _shared_components_free_text_filter_free_text_filter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../shared/components/free-text-filter/free-text-filter.component */
          './src/app/shared/components/free-text-filter/free-text-filter.component.ts'
        );
        /* harmony import */

        var _shared_components_meetings_meetings_list_meetings_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../shared/components/meetings/meetings-list/meetings-list.component */
          './src/app/shared/components/meetings/meetings-list/meetings-list.component.ts'
        );

        var ModalSelectMeetingComponent = /*#__PURE__*/ (function() {
          function ModalSelectMeetingComponent(utilsService) {
            _classCallCheck(this, ModalSelectMeetingComponent);

            this.utilsService = utilsService;
            this.selectMeeting = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            this.filter = '';
          }

          _createClass(ModalSelectMeetingComponent, [
            {
              key: 'closeDialog',
              value: function closeDialog() {
                this.selectMeeting.emit(null);
              }
            },
            {
              key: 'ngOnChanges',
              value: function ngOnChanges(changes) {
                this.filterMeetings(this.filter);
              }
            },
            {
              key: 'filterMeetings',
              value: function filterMeetings(filter) {
                this.filteredMeetings = this.utilsService.filteringMeetings(this.meetings, filter);
              }
            }
          ]);

          return ModalSelectMeetingComponent;
        })();

        ModalSelectMeetingComponent.ɵfac = function ModalSelectMeetingComponent_Factory(t) {
          return new (t || ModalSelectMeetingComponent)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
              _shared_services_utils_service__WEBPACK_IMPORTED_MODULE_1__['UtilsService']
            )
          );
        };

        ModalSelectMeetingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineComponent']({
          type: ModalSelectMeetingComponent,
          selectors: [['app-modal-select-meeting']],
          hostBindings: function ModalSelectMeetingComponent_HostBindings(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'keydown.esc',
                function ModalSelectMeetingComponent_keydown_esc_HostBindingHandler() {
                  return ctx.closeDialog();
                },
                false,
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵresolveDocument']
              );
            }
          },
          inputs: {
            bereaved: 'bereaved',
            meetings: 'meetings'
          },
          outputs: {
            selectMeeting: 'selectMeeting'
          },
          features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵNgOnChangesFeature']()],
          decls: 12,
          vars: 4,
          consts: [
            [1, 'blocker', 'blocker-fixed'],
            [1, 'modal-container'],
            [1, 'modal-header'],
            [1, 'free-text-filter-container'],
            [1, 'free-text-filter', 3, 'filter', 'filterChange'],
            [1, 'meetings-list'],
            [3, 'meetings', 'user', 'joinMeeting'],
            [1, 'cancel-button-container'],
            [1, 'cancel-button', 3, 'click'],
            [1, 'close-button', 'fas', 'fa-times', 3, 'click']
          ],
          template: function ModalSelectMeetingComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div', 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](1, 'div', 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](2, 'div', 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](4, 'div', 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](5, 'app-free-text-filter', 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'filterChange',
                function ModalSelectMeetingComponent_Template_app_free_text_filter_filterChange_5_listener($event) {
                  return (ctx.filter = $event);
                }
              )(
                'filterChange',
                function ModalSelectMeetingComponent_Template_app_free_text_filter_filterChange_5_listener($event) {
                  return ctx.filterMeetings($event);
                }
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](6, 'div', 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](7, 'app-meetings-list', 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'joinMeeting',
                function ModalSelectMeetingComponent_Template_app_meetings_list_joinMeeting_7_listener($event) {
                  return ctx.selectMeeting.emit($event);
                }
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](8, 'div', 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](9, 'button', 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'click',
                function ModalSelectMeetingComponent_Template_button_click_9_listener() {
                  return ctx.closeDialog();
                }
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](10, ' \u05D1\u05D9\u05D8\u05D5\u05DC ');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](11, 'div', 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'click',
                function ModalSelectMeetingComponent_Template_div_click_11_listener() {
                  return ctx.closeDialog();
                }
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate1'](
                ' \u05E9\u05D1\u05E5 \u05D0\u05EA ',
                ctx.bereaved.profile.firstName + ' ' + ctx.bereaved.profile.lastName,
                ' '
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('filter', ctx.filter);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('meetings', ctx.filteredMeetings)(
                'user',
                ctx.bereaved
              );
            }
          },
          directives: [
            _shared_components_free_text_filter_free_text_filter_component__WEBPACK_IMPORTED_MODULE_2__[
              'FreeTextFilterComponent'
            ],
            _shared_components_meetings_meetings_list_meetings_list_component__WEBPACK_IMPORTED_MODULE_3__[
              'MeetingsListComponent'
            ]
          ],
          styles: [
            '.modal-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: white;\n  max-width: calc(100% - 200px);\n  width: 1170px;\n  padding: 30px;\n  display: flex;\n  flex-direction: column;\n}\n.modal-container[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  font-size: 30px;\n  text-align: center;\n}\n.modal-container[_ngcontent-%COMP%]   .free-text-filter-container[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n.modal-container[_ngcontent-%COMP%]   .meetings-list[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  height: 60vh;\n  position: relative;\n}\n.modal-container[_ngcontent-%COMP%]   .cancel-button-container[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  text-align: center;\n}\n.modal-container[_ngcontent-%COMP%]   .cancel-button-container[_ngcontent-%COMP%]   .cancel-button[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.modal-container[_ngcontent-%COMP%]   .close-button[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 20px;\n  right: 20px;\n  font-size: 20px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYmVyZWF2ZWRzL21vZGFsLXNlbGVjdC1tZWV0aW5nL0M6XFxVc2Vyc1xcVGVoaWxhXFxsYXN0XFxvdXJCcm9cXG91ci1icm90aGVycy13ZWIvc3JjXFxhcHBcXGFkbWluXFxiZXJlYXZlZHNcXG1vZGFsLXNlbGVjdC1tZWV0aW5nXFxtb2RhbC1zZWxlY3QtbWVldGluZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWRtaW4vYmVyZWF2ZWRzL21vZGFsLXNlbGVjdC1tZWV0aW5nL21vZGFsLXNlbGVjdC1tZWV0aW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsdUJBQUE7RUFFQSw2QkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FDQUY7QURFRTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQ0FKO0FER0U7RUFDRSxnQkFBQTtBQ0RKO0FESUU7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0ZKO0FES0U7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FDSEo7QURLSTtFQUNFLHFCQUFBO0FDSE47QURPRTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDTEoiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9iZXJlYXZlZHMvbW9kYWwtc2VsZWN0LW1lZXRpbmcvbW9kYWwtc2VsZWN0LW1lZXRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kYWwtY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cclxuICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDIwMHB4KTtcclxuICB3aWR0aDogMTE3MHB4O1xyXG4gIHBhZGRpbmc6IDMwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAubW9kYWwtaGVhZGVyIHtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5mcmVlLXRleHQtZmlsdGVyLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIH1cclxuXHJcbiAgLm1lZXRpbmdzLWxpc3Qge1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIGhlaWdodDogNjB2aDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcblxyXG4gIC5jYW5jZWwtYnV0dG9uLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIC5jYW5jZWwtYnV0dG9uIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNsb3NlLWJ1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDIwcHg7XHJcbiAgICByaWdodDogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbn1cclxuIiwiLm1vZGFsLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDIwMHB4KTtcbiAgd2lkdGg6IDExNzBweDtcbiAgcGFkZGluZzogMzBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5tb2RhbC1jb250YWluZXIgLm1vZGFsLWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm1vZGFsLWNvbnRhaW5lciAuZnJlZS10ZXh0LWZpbHRlci1jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuLm1vZGFsLWNvbnRhaW5lciAubWVldGluZ3MtbGlzdCB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIGhlaWdodDogNjB2aDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm1vZGFsLWNvbnRhaW5lciAuY2FuY2VsLWJ1dHRvbi1jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubW9kYWwtY29udGFpbmVyIC5jYW5jZWwtYnV0dG9uLWNvbnRhaW5lciAuY2FuY2VsLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5tb2RhbC1jb250YWluZXIgLmNsb3NlLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAyMHB4O1xuICByaWdodDogMjBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */'
          ]
        });
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            ModalSelectMeetingComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                args: [
                  {
                    selector: 'app-modal-select-meeting',
                    templateUrl: './modal-select-meeting.component.html',
                    styleUrls: ['./modal-select-meeting.component.scss']
                  }
                ]
              }
            ],
            function() {
              return [
                {
                  type: _shared_services_utils_service__WEBPACK_IMPORTED_MODULE_1__['UtilsService']
                }
              ];
            },
            {
              bereaved: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input']
                }
              ],
              meetings: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input']
                }
              ],
              selectMeeting: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Output']
                }
              ],
              closeDialog: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['HostListener'],
                  args: ['document:keydown.esc']
                }
              ]
            }
          );
        })();
        /***/
      },

    /***/
    './src/app/admin/bereaveds/page/admin-bereaveds-page.component.ts':
      /*!************************************************************************!*\
    !*** ./src/app/admin/bereaveds/page/admin-bereaveds-page.component.ts ***!
    \************************************************************************/

      /*! exports provided: AdminBereavedsPageComponent */

      /***/
      function srcAppAdminBereavedsPageAdminBereavedsPageComponentTs(module, __webpack_exports__, __webpack_require__) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'AdminBereavedsPageComponent', function() {
          return AdminBereavedsPageComponent;
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

        var _shared_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../shared/constants */
          './src/app/shared/constants.ts'
        );
        /* harmony import */

        var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @angular/common */
          './node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js'
        );
        /* harmony import */

        var _shared_pipes_seniority_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../shared/pipes/seniority.pipe */
          './src/app/shared/pipes/seniority.pipe.ts'
        );
        /* harmony import */

        var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ngx-toastr */
          './node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js'
        );
        /* harmony import */

        var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../shared/services/auth.service */
          './src/app/shared/services/auth.service.ts'
        );
        /* harmony import */

        var _shared_services_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../shared/services/data.service */
          './src/app/shared/services/data.service.ts'
        );
        /* harmony import */

        var _shared_services_http_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../shared/services/http.service */
          './src/app/shared/services/http.service.ts'
        );
        /* harmony import */

        var _shared_services_utils_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../shared/services/utils.service */
          './src/app/shared/services/utils.service.ts'
        );
        /* harmony import */

        var _shared_components_free_text_filter_free_text_filter_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../shared/components/free-text-filter/free-text-filter.component */
          './src/app/shared/components/free-text-filter/free-text-filter.component.ts'
        );
        /* harmony import */

        var _modal_select_meeting_modal_select_meeting_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../modal-select-meeting/modal-select-meeting.component */
          './src/app/admin/bereaveds/modal-select-meeting/modal-select-meeting.component.ts'
        );
        /* harmony import */

        var _bereaveds_list_bereaveds_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../bereaveds-list/bereaveds-list.component */
          './src/app/admin/bereaveds/bereaveds-list/bereaveds-list.component.ts'
        );

        function AdminBereavedsPageComponent_app_modal_select_meeting_0_Template(rf, ctx) {
          if (rf & 1) {
            var _r340 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵgetCurrentView']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'app-modal-select-meeting', 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
              'selectMeeting',
              function AdminBereavedsPageComponent_app_modal_select_meeting_0_Template_app_modal_select_meeting_selectMeeting_0_listener(
                $event
              ) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵrestoreView'](_r340);

                var ctx_r339 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();

                return ctx_r339.selectedMeeting$.next($event);
              }
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }

          if (rf & 2) {
            var ctx_r336 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('meetings', ctx_r336.noBerevedMeetings)(
              'bereaved',
              ctx_r336.selectingBereaved
            );
          }
        }

        function AdminBereavedsPageComponent_div_17_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div', 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](1, ' \u05D8\u05D5\u05E2\u05DF.. ');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }
        }

        function AdminBereavedsPageComponent_div_18_div_1_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div', 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }

          if (rf & 2) {
            var ctx_r341 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext'](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate1'](' ', ctx_r341.error, ' ');
          }
        }

        function AdminBereavedsPageComponent_div_18_ng_template_2_Template(rf, ctx) {
          if (rf & 1) {
            var _r345 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵgetCurrentView']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'app-bereaveds-list', 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
              'joinBereved',
              function AdminBereavedsPageComponent_div_18_ng_template_2_Template_app_bereaveds_list_joinBereved_0_listener(
                $event
              ) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵrestoreView'](_r345);

                var ctx_r344 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext'](2);

                return ctx_r344.joinBereved($event);
              }
            )(
              'leaveBereaved',
              function AdminBereavedsPageComponent_div_18_ng_template_2_Template_app_bereaveds_list_leaveBereaved_0_listener(
                $event
              ) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵrestoreView'](_r345);

                var ctx_r346 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext'](2);

                return ctx_r346.leaveBereaved($event);
              }
            )(
              'volunteering',
              function AdminBereavedsPageComponent_div_18_ng_template_2_Template_app_bereaveds_list_volunteering_0_listener(
                $event
              ) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵrestoreView'](_r345);

                var ctx_r347 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext'](2);

                return ctx_r347.volunteering($event);
              }
            )(
              'deleting',
              function AdminBereavedsPageComponent_div_18_ng_template_2_Template_app_bereaveds_list_deleting_0_listener(
                $event
              ) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵrestoreView'](_r345);

                var ctx_r348 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext'](2);

                return ctx_r348.deleting($event);
              }
            )(
              'bereavedStatus',
              function AdminBereavedsPageComponent_div_18_ng_template_2_Template_app_bereaveds_list_bereavedStatus_0_listener(
                $event
              ) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵrestoreView'](_r345);

                var ctx_r349 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext'](2);

                return ctx_r349.bereavedStatus($event);
              }
            )(
              'bereavedGuidance',
              function AdminBereavedsPageComponent_div_18_ng_template_2_Template_app_bereaveds_list_bereavedGuidance_0_listener(
                $event
              ) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵrestoreView'](_r345);

                var ctx_r350 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext'](2);

                return ctx_r350.bereavedGuidance($event);
              }
            )(
              'bereavedBirthDate',
              function AdminBereavedsPageComponent_div_18_ng_template_2_Template_app_bereaveds_list_bereavedBirthDate_0_listener(
                $event
              ) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵrestoreView'](_r345);

                var ctx_r351 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext'](2);

                return ctx_r351.bereavedBirthDate($event);
              }
            )(
              'bereavedNotes',
              function AdminBereavedsPageComponent_div_18_ng_template_2_Template_app_bereaveds_list_bereavedNotes_0_listener(
                $event
              ) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵrestoreView'](_r345);

                var ctx_r352 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext'](2);

                return ctx_r352.bereavedNotes($event);
              }
            )(
              'bereavedAddress',
              function AdminBereavedsPageComponent_div_18_ng_template_2_Template_app_bereaveds_list_bereavedAddress_0_listener(
                $event
              ) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵrestoreView'](_r345);

                var ctx_r353 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext'](2);

                return ctx_r353.bereavedAddress($event);
              }
            )(
              'bereavedVolunteer',
              function AdminBereavedsPageComponent_div_18_ng_template_2_Template_app_bereaveds_list_bereavedVolunteer_0_listener(
                $event
              ) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵrestoreView'](_r345);

                var ctx_r354 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext'](2);

                return ctx_r354.bereavedVolunteer($event);
              }
            )(
              'removeVolunteer',
              function AdminBereavedsPageComponent_div_18_ng_template_2_Template_app_bereaveds_list_removeVolunteer_0_listener(
                $event
              ) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵrestoreView'](_r345);

                var ctx_r355 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext'](2);

                return ctx_r355.removeVolunteer($event);
              }
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }

          if (rf & 2) {
            var ctx_r343 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext'](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
              'filteredBereaveds',
              ctx_r343.filteredBereavedsIds
            )('bereaveds', ctx_r343.bereaveds)('currentUser', ctx_r343.currentUser);
          }
        }

        function AdminBereavedsPageComponent_div_18_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
              1,
              AdminBereavedsPageComponent_div_18_div_1_Template,
              2,
              1,
              'div',
              20
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
              2,
              AdminBereavedsPageComponent_div_18_ng_template_2_Template,
              1,
              3,
              'ng-template',
              null,
              21,
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplateRefExtractor']
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }

          if (rf & 2) {
            var _r342 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵreference'](3);

            var ctx_r338 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngIf', ctx_r338.error)('ngIfElse', _r342);
          }
        }

        var AdminBereavedsPageComponent = /*#__PURE__*/ (function() {
          function AdminBereavedsPageComponent(
            toastr,
            authService,
            dataService,
            httpService,
            utilsService,
            renderer2,
            _document,
            agePipe
          ) {
            _classCallCheck(this, AdminBereavedsPageComponent);

            this.toastr = toastr;
            this.authService = authService;
            this.dataService = dataService;
            this.httpService = httpService;
            this.utilsService = utilsService;
            this.renderer2 = renderer2;
            this._document = _document;
            this.agePipe = agePipe;
            this.filter = '';
            this.year = _shared_constants__WEBPACK_IMPORTED_MODULE_3__['MEMORIAL_YEAR'];
            this.error = '';
            this.loading = true;
            this.selectedMeeting$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__['Subject']();
            this.subscriptions = [];
          }

          _createClass(AdminBereavedsPageComponent, [
            {
              key: 'ngOnInit',
              value: function ngOnInit() {
                var _this = this;

                this.subscriptions.push(
                  this.authService.user.subscribe(function(currentUser) {
                    _this.currentUser = currentUser;
                  }),
                  this.dataService.getBereaveds().subscribe(
                    function(bereaveds) {
                      _this.loading = false;
                      _this.bereaveds = bereaveds;

                      _this.filterBereaveds();
                    },
                    function(error) {
                      _this.loading = false;
                      _this.error = error.toString();
                    }
                  ),
                  this.dataService.getNoBerevedMeetings().subscribe(function(noBerevedMeetings) {
                    _this.noBerevedMeetings = noBerevedMeetings;
                  })
                );
                var s = this.renderer2.createElement('script');
                s.type = 'text/javascript';
                s.src = 'https://cdn.jsdelivr.net/npm/excellentexport@3.4.3/dist/excellentexport.min.js';
                s.text = '';
                this.renderer2.appendChild(this._document.body, s);
              }
            },
            {
              key: 'filterBereaveds',
              value: function filterBereaveds() {
                var filteredBereavedsIds = this.utilsService
                  .filteringBereaveds(this.bereaveds, this.filter)
                  .map(function(_ref) {
                    var id = _ref.id;
                    return id;
                  });
                this.filteredBereavedsIds = new Set(filteredBereavedsIds);
              }
            },
            {
              key: 'joinBereved',
              value: function joinBereved(bereaved) {
                var _this2 = this;

                console.log('vbhnjkm,l', bereaved);
                this.selectingBereaved = bereaved;

                if (this.noBerevedMeetings && this.noBerevedMeetings.length) {
                  this.selectedMeeting$
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['take'])(1))
                    .subscribe(function(meeting) {
                      _this2.selectingBereaved = null;

                      if (meeting) {
                        _this2.dataService.bereavedJoinMeeting(bereaved, meeting).subscribe(
                          function() {
                            _this2.toastr.success('האח/ות שובץ בהצלחה');
                          },
                          function() {
                            _this2.toastr.error('שגיאה - לא ניתן לשבץ למפגש. נא ליצור קשר.');
                          }
                        );
                      }
                    });
                } else {
                  this.selectingBereaved = null;
                }
              }
            },
            {
              key: 'leaveBereaved',
              value: function leaveBereaved(_ref2) {
                var _this3 = this;

                var user = _ref2.user,
                  meeting = _ref2.meeting;

                if (user && meeting) {
                  if (
                    window.confirm(
                      'האם ברצונך להסיר את ' +
                        user.profile.firstName +
                        ' ' +
                        user.profile.lastName +
                        ' מהמפגש ' +
                        meeting.title +
                        '?'
                    )
                  ) {
                    this.dataService.bereavedLeaveMeeting(user, meeting).subscribe(
                      function() {
                        _this3.toastr.success('המשתמש הוסר בהצלחה.');
                      },
                      function() {
                        _this3.toastr.error('שגיאה - לא ניתן להסיר משתמש. נא ליצור קשר.');
                      }
                    );
                  }
                }
              }
            },
            {
              key: 'volunteering',
              value: function volunteering(_ref3) {
                var _this4 = this;

                var user = _ref3.user,
                  isVolunteer = _ref3.isVolunteer;

                if (user) {
                  if (
                    window.confirm(
                      'האם ברוצנך ' +
                        (isVolunteer ? 'להגדיר' : 'להסיר') +
                        ' את ' +
                        user.profile.firstName +
                        ' ' +
                        user.profile.lastName +
                        ' כמתנדב/ת?'
                    )
                  ) {
                    this.dataService.setUserVolunteer(user, isVolunteer).subscribe(
                      function() {
                        _this4.toastr.success('המשתמש הוגדר כמתנדב בהצלחה.');
                      },
                      function() {
                        _this4.toastr.error('שגיאה - לא ניתן להגדיר משתמש כמתנדב. נא ליצור קשר.');
                      }
                    );
                  }
                }
              }
            },
            {
              key: 'deleting',
              value: function deleting(user) {
                var _this5 = this;

                if (user) {
                  if (
                    window.confirm('האם ברצונך למחוק את ' + user.profile.firstName + ' ' + user.profile.lastName + '?')
                  ) {
                    this.httpService.deleteUser(user).subscribe(
                      function() {
                        _this5.toastr.success('המשתמש נמחק בהצלחה.');
                      },
                      function() {
                        _this5.toastr.error('שגיאה - לא ניתן למחוק משתמש. נא ליצור קשר.');
                      }
                    );
                  }
                }
              }
            },
            {
              key: 'bereavedStatus',
              value: function bereavedStatus(_ref4) {
                var bereaved = _ref4.bereaved,
                  status = _ref4.status;

                if (bereaved) {
                  this.dataService.setBereavedStatus(bereaved, status);
                }
              }
            },
            {
              key: 'bereavedGuidance',
              value: function bereavedGuidance(_ref5) {
                var bereaved = _ref5.bereaved,
                  guidance = _ref5.guidance;

                if (bereaved) {
                  this.dataService.setBereavedGuidance(bereaved, guidance);
                }
              }
            },
            {
              key: 'bereavedBirthDate',
              value: function bereavedBirthDate(_ref6) {
                var user = _ref6.user,
                  birthDate = _ref6.birthDate;

                if (user) {
                  this.dataService.setUserBirthDate(user, birthDate);
                }
              }
            },
            {
              key: 'bereavedNotes',
              value: function bereavedNotes(_ref7) {
                var bereaved = _ref7.bereaved,
                  notes = _ref7.notes;

                if (bereaved) {
                  this.dataService.setBereavedNotes(bereaved, notes);
                }
              }
            },
            {
              key: 'bereavedAddress',
              value: function bereavedAddress(_ref8) {
                var user = _ref8.user,
                  address = _ref8.address;

                if (user) {
                  this.dataService.setUserAddress(user, address);
                }
              }
            },
            {
              key: 'bereavedVolunteer',
              value: function bereavedVolunteer(_ref9) {
                var user = _ref9.user,
                  bereaved = _ref9.bereaved;

                if (user) {
                  this.dataService.bereavedVolunteer(user, bereaved);
                }
              }
            },
            {
              key: 'removeVolunteer',
              value: function removeVolunteer(bereaved) {
                if (bereaved) {
                  this.dataService.removeVolunteer(bereaved);
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
            },
            {
              key: 'usersToExcel',
              value: function usersToExcel() {
                //let data = this.bereaveds;
                var MasterArr = [
                  [
                    'first name',
                    'last name',
                    'phone',
                    'email',
                    'city',
                    'yearsLost',
                    'age',
                    'languages',
                    'fallenDetails',
                    'myStory'
                  ]
                ];

                for (var i = 0; i < this.bereaveds.length; i++) {
                  var b = this.bereaveds[i];
                  var a = [];

                  if (b.profile) {
                    a.push(b.profile.firstName);
                    a.push(b.profile.lastName);
                    a.push(b.profile.phoneNumber);
                    a.push(b.profile.email);
                    a.push(
                      b.profile.address && b.profile.address.formattedAddress ? b.profile.address.formattedAddress : ''
                    );

                    if (b.bereavedProfile && b.bereavedProfile.slains) {
                      var sls = b.bereavedProfile.slains;
                      var ax = [].concat(a);

                      for (var x = 0; x < sls.length; x++) {
                        var sx = sls[x];
                        ax.push(this.agePipe.transform(sx.deathDate));
                        ax.push(this.agePipe.transform(b.profile.birthDay));
                        ax.push(b.profile.otherLang ? b.profile.otherLang : '');
                        var sDetails =
                          sx.firstName + ' ' + sx.lastName + ' ז"ל' + '  ---  ' + this.agePipe.transform(sx.deathDate);
                        ax.push(sDetails);
                        ax.push(b.bereavedProfile && b.bereavedProfile.story ? b.bereavedProfile.story : '');
                        MasterArr.push(ax);
                      }
                    } else {
                      a.push('');
                      a.push('');
                      a.push('');
                      a.push('');
                      a.push('');
                    }
                  }
                }

                var options = {
                  anchor: document.querySelector('#excel'),
                  format: 'xlsx',
                  filename: 'users-noy.xlsx'
                };
                console.log(MasterArr);
                var sheet = {
                  //name: 'Sheet 1', // Sheet name
                  name: 'users-noy.xlsx',
                  from: {
                    //table: String/Element, // Table ID or table element
                    array: MasterArr // Array with data
                    //arrayHasHeader: true, // Array first row is the header // not in use
                    //removeColumns: [...], // Array of column indexes (from 0)
                    //filterRowFn: function(row) {return true} // Return true to keep
                  }
                };
                /*
                 */

                window['ExcellentExport'].convert(options, [sheet], true); //ExcellentExport.convert(options, [sheet], true);
              }
            }
          ]);

          return AdminBereavedsPageComponent;
        })();

        AdminBereavedsPageComponent.ɵfac = function AdminBereavedsPageComponent_Factory(t) {
          return new (t || AdminBereavedsPageComponent)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
              ngx_toastr__WEBPACK_IMPORTED_MODULE_6__['ToastrService']
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
              _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_7__['AuthService']
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
              _shared_services_data_service__WEBPACK_IMPORTED_MODULE_8__['DataService']
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
              _shared_services_http_service__WEBPACK_IMPORTED_MODULE_9__['HttpService']
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
              _shared_services_utils_service__WEBPACK_IMPORTED_MODULE_10__['UtilsService']
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['Renderer2']
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
              _angular_common__WEBPACK_IMPORTED_MODULE_4__['DOCUMENT']
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
              _shared_pipes_seniority_pipe__WEBPACK_IMPORTED_MODULE_5__['SeniorityPipe']
            )
          );
        };

        AdminBereavedsPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineComponent']({
          type: AdminBereavedsPageComponent,
          selectors: [['app-admin-bereaveds-page']],
          features: [
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵProvidersFeature']([
              _shared_pipes_seniority_pipe__WEBPACK_IMPORTED_MODULE_5__['SeniorityPipe']
            ])
          ],
          decls: 19,
          vars: 4,
          consts: [
            [3, 'meetings', 'bereaved', 'selectMeeting', 4, 'ngIf'],
            [1, 'medium-heading'],
            [1, 'container-fluid', 'bereaveds-container'],
            [1, 'free-text-filter', 3, 'filter', 'filterChange'],
            [1, 'list-icon'],
            ['src', ' ../../../../../../assets/img/trash.svg', 1, 'size-icon'],
            ['src', '../../../../assets/img/mail.png', 1, 'size-icon-email'],
            ['src', '../../../../assets/img/whatsapp.svg', 1, 'size-icon'],
            ['src', 'https://img.icons8.com/metro/26/000000/save.png', 1, 'vvv'],
            ['id', 'excel', 'href', '#', 3, 'click'],
            [
              'xmlns',
              'http://www.w3.org/2000/svg',
              'x',
              '0px',
              'y',
              '0px',
              'width',
              '24',
              'height',
              '24',
              'viewBox',
              '0 0 172 172',
              1,
              'vvv',
              2,
              'fill',
              '#000000'
            ],
            [
              'fill',
              'none',
              'fill-rule',
              'nonzero',
              'stroke',
              'none',
              'stroke-width',
              '1',
              'stroke-linecap',
              'butt',
              'stroke-linejoin',
              'miter',
              'stroke-miterlimit',
              '10',
              'stroke-dasharray',
              '',
              'stroke-dashoffset',
              '0',
              'font-family',
              'none',
              'font-weight',
              'none',
              'font-size',
              'none',
              'text-anchor',
              'none',
              2,
              'mix-blend-mode',
              'normal'
            ],
            ['d', 'M0,172v-172h172v172z', 'fill', 'none'],
            ['fill', '#16b3ab'],
            [
              'd',
              'M44.79167,14.33333c-8.84188,0 -16.125,7.28312 -16.125,16.125v111.08333c0,8.84188 7.28312,16.125 16.125,16.125h82.41667c8.84188,0 16.125,-7.28312 16.125,-16.125v-75.25c-0.00027,-1.42544 -0.5667,-2.79242 -1.57471,-3.80029l-0.05599,-0.05599l-46.52734,-46.52734c-1.00788,-1.00801 -2.37485,-1.57443 -3.80029,-1.57471zM44.79167,25.08333h41.20833v30.45833c0,8.84188 7.28312,16.125 16.125,16.125h30.45833v69.875c0,3.03329 -2.34171,5.375 -5.375,5.375h-82.41667c-3.03329,0 -5.375,-2.34171 -5.375,-5.375v-111.08333c0,-3.03329 2.34171,-5.375 5.375,-5.375zM96.75,32.68392l28.23275,28.23275h-22.85775c-3.03329,0 -5.375,-2.34171 -5.375,-5.375zM68.93018,85.95801c-1.82314,0.00046 -3.46414,1.10578 -4.14971,2.79511c-0.68557,1.68933 -0.27894,3.62563 1.02829,4.89646l13.85043,13.85042l-13.85043,13.85042c-1.13304,1.13261 -1.57568,2.7837 -1.16114,4.3312c0.41454,1.54749 1.62327,2.75622 3.17076,3.17076c1.54749,0.41454 3.19859,-0.02809 4.3312,-1.16114l13.85042,-13.85043l13.85042,13.85043c1.13261,1.13304 2.7837,1.57568 4.3312,1.16114c1.54749,-0.41454 2.75622,-1.62327 3.17076,-3.17076c0.41454,-1.54749 -0.02809,-3.19859 -1.16114,-4.3312l-13.85043,-13.85042l13.85043,-13.85042c1.13304,-1.13261 1.57568,-2.7837 1.16114,-4.3312c-0.41454,-1.54749 -1.62327,-2.75622 -3.17076,-3.17076c-1.54749,-0.41454 -3.19859,0.02809 -4.3312,1.16114l-13.85042,13.85043l-13.85042,-13.85043c-0.8463,-0.86712 -2.00775,-1.35442 -3.2194,-1.35075z'
            ],
            [1, 'bereaveds-list-container'],
            ['class', 'loading', 4, 'ngIf'],
            [4, 'ngIf'],
            [3, 'meetings', 'bereaved', 'selectMeeting'],
            [1, 'loading'],
            ['class', 'error-message', 4, 'ngIf', 'ngIfElse'],
            ['bereavedList', ''],
            [1, 'error-message'],
            [
              3,
              'filteredBereaveds',
              'bereaveds',
              'currentUser',
              'joinBereved',
              'leaveBereaved',
              'volunteering',
              'deleting',
              'bereavedStatus',
              'bereavedGuidance',
              'bereavedBirthDate',
              'bereavedNotes',
              'bereavedAddress',
              'bereavedVolunteer',
              'removeVolunteer'
            ]
          ],
          template: function AdminBereavedsPageComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                0,
                AdminBereavedsPageComponent_app_modal_select_meeting_0_Template,
                1,
                2,
                'app-modal-select-meeting',
                0
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](1, 'div', 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                2,
                ' \u05E0\u05D9\u05D4\u05D5\u05DC \u05D0\u05D7\u05D9\u05DD '
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](3, 'div', 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](4, 'app-free-text-filter', 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'filterChange',
                function AdminBereavedsPageComponent_Template_app_free_text_filter_filterChange_4_listener($event) {
                  return (ctx.filter = $event);
                }
              )(
                'filterChange',
                function AdminBereavedsPageComponent_Template_app_free_text_filter_filterChange_4_listener() {
                  return ctx.filterBereaveds();
                }
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](5, 'div', 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](6, 'img', 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](7, 'img', 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](8, 'img', 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](9, 'img', 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](10, 'a', 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'click',
                function AdminBereavedsPageComponent_Template_a_click_10_listener() {
                  return ctx.usersToExcel();
                }
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnamespaceSVG']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](11, 'svg', 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](12, 'g', 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](13, 'path', 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](14, 'g', 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](15, 'path', 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnamespaceHTML']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](16, 'div', 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                17,
                AdminBereavedsPageComponent_div_17_Template,
                2,
                0,
                'div',
                16
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                18,
                AdminBereavedsPageComponent_div_18_Template,
                4,
                2,
                'div',
                17
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngIf', !!ctx.selectingBereaved);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('filter', ctx.filter);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngIf', ctx.loading);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngIf', !ctx.loading);
            }
          },
          directives: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__['NgIf'],
            _shared_components_free_text_filter_free_text_filter_component__WEBPACK_IMPORTED_MODULE_11__[
              'FreeTextFilterComponent'
            ],
            _modal_select_meeting_modal_select_meeting_component__WEBPACK_IMPORTED_MODULE_12__[
              'ModalSelectMeetingComponent'
            ],
            _bereaveds_list_bereaveds_list_component__WEBPACK_IMPORTED_MODULE_13__['BereavedsListComponent']
          ],
          styles: [
            '.bereaveds-container[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n.bereaveds-container[_ngcontent-%COMP%]   .bereaveds-list-container[_ngcontent-%COMP%] {\n  height: 800px;\n  margin-top: 20px;\n  margin-bottom: 200px;\n  position: relative;\n}\n.bereaveds-container[_ngcontent-%COMP%]   .bereaveds-list-container[_ngcontent-%COMP%]   .loading[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 999999;\n}\n.bereaveds-container[_ngcontent-%COMP%]   .bereaveds-list-container[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  direction: ltr;\n  text-align: left;\n}\n.medium-heading[_ngcontent-%COMP%] {\n  position: relative;\n}\n#excel[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.size-icon[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 50px;\n  margin-left: 10px;\n}\n.size-icon-email[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  margin-left: 10px;\n}\n.vvv[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYmVyZWF2ZWRzL3BhZ2UvQzpcXFVzZXJzXFxUZWhpbGFcXGxhc3RcXG91ckJyb1xcb3VyLWJyb3RoZXJzLXdlYi9zcmNcXGFwcFxcYWRtaW5cXGJlcmVhdmVkc1xccGFnZVxcYWRtaW4tYmVyZWF2ZWRzLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FkbWluL2JlcmVhdmVkcy9wYWdlL2FkbWluLWJlcmVhdmVkcy1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUNDRjtBRENFO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQ0NKO0FEQ0k7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0FDQ047QURFSTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQ0FOO0FES0E7RUFDRSxrQkFBQTtBQ0ZGO0FESUE7RUFLRSxlQUFBO0FDTEY7QURRQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNMRjtBRE9BO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0pGO0FET0E7RUFDRSxpQkFBQTtBQ0pGIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vYmVyZWF2ZWRzL3BhZ2UvYWRtaW4tYmVyZWF2ZWRzLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmVyZWF2ZWRzLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuXHJcbiAgLmJlcmVhdmVkcy1saXN0LWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDgwMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgIC5sb2FkaW5nIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDUwJTtcclxuICAgICAgbGVmdDogNTAlO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgei1pbmRleDogOTk5OTk5O1xyXG4gICAgfVxyXG5cclxuICAgIC5lcnJvci1tZXNzYWdlIHtcclxuICAgICAgZGlyZWN0aW9uOiBsdHI7XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ubWVkaXVtLWhlYWRpbmcge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4jZXhjZWwge1xyXG4gIC8vcG9zaXRpb246IGFic29sdXRlO1xyXG4gIC8vIGxlZnQ6IDEwJTtcclxuICAvLyBmb250LXNpemU6IDIwcHg7XHJcbiAgLy8gdG9wOiA1MCU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uc2l6ZS1pY29uIHtcclxuICB3aWR0aDogMjBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuLnNpemUtaWNvbi1lbWFpbCB7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG5cclxufVxyXG4udnZ2e1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcbiIsIi5iZXJlYXZlZHMtY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cbi5iZXJlYXZlZHMtY29udGFpbmVyIC5iZXJlYXZlZHMtbGlzdC1jb250YWluZXIge1xuICBoZWlnaHQ6IDgwMHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmJlcmVhdmVkcy1jb250YWluZXIgLmJlcmVhdmVkcy1saXN0LWNvbnRhaW5lciAubG9hZGluZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHotaW5kZXg6IDk5OTk5OTtcbn1cbi5iZXJlYXZlZHMtY29udGFpbmVyIC5iZXJlYXZlZHMtbGlzdC1jb250YWluZXIgLmVycm9yLW1lc3NhZ2Uge1xuICBkaXJlY3Rpb246IGx0cjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLm1lZGl1bS1oZWFkaW5nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4jZXhjZWwge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zaXplLWljb24ge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLnNpemUtaWNvbi1lbWFpbCB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4udnZ2IHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59Il19 */'
          ]
        });
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            AdminBereavedsPageComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                args: [
                  {
                    selector: 'app-admin-bereaveds-page',
                    templateUrl: './admin-bereaveds-page.component.html',
                    styleUrls: ['./admin-bereaveds-page.component.scss'],
                    providers: [_shared_pipes_seniority_pipe__WEBPACK_IMPORTED_MODULE_5__['SeniorityPipe']]
                  }
                ]
              }
            ],
            function() {
              return [
                {
                  type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__['ToastrService']
                },
                {
                  type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_7__['AuthService']
                },
                {
                  type: _shared_services_data_service__WEBPACK_IMPORTED_MODULE_8__['DataService']
                },
                {
                  type: _shared_services_http_service__WEBPACK_IMPORTED_MODULE_9__['HttpService']
                },
                {
                  type: _shared_services_utils_service__WEBPACK_IMPORTED_MODULE_10__['UtilsService']
                },
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Renderer2']
                },
                {
                  type: undefined,
                  decorators: [
                    {
                      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Inject'],
                      args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__['DOCUMENT']]
                    }
                  ]
                },
                {
                  type: _shared_pipes_seniority_pipe__WEBPACK_IMPORTED_MODULE_5__['SeniorityPipe']
                }
              ];
            },
            null
          );
        })();
        /***/
      },

    /***/
    './src/app/admin/bereaveds/page/admin-bereaveds-page.module.ts':
      /*!*********************************************************************!*\
    !*** ./src/app/admin/bereaveds/page/admin-bereaveds-page.module.ts ***!
    \*********************************************************************/

      /*! exports provided: AdminBereavedsPageModule */

      /***/
      function srcAppAdminBereavedsPageAdminBereavedsPageModuleTs(module, __webpack_exports__, __webpack_require__) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'AdminBereavedsPageModule', function() {
          return AdminBereavedsPageModule;
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
        /* harmony import */

        var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/router */
          './node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js'
        );
        /* harmony import */

        var _admin_bereaveds_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../admin-bereaveds.module */
          './src/app/admin/bereaveds/admin-bereaveds.module.ts'
        );
        /* harmony import */

        var _admin_bereaveds_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./admin-bereaveds-page.component */
          './src/app/admin/bereaveds/page/admin-bereaveds-page.component.ts'
        );
        /* harmony import */

        var _shared_components_free_text_filter_free_text_filter_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../shared/components/free-text-filter/free-text-filter.module */
          './src/app/shared/components/free-text-filter/free-text-filter.module.ts'
        );

        var routes = [
          {
            path: '',
            component: _admin_bereaveds_page_component__WEBPACK_IMPORTED_MODULE_4__['AdminBereavedsPageComponent']
          }
        ];

        var AdminBereavedsPageModule = function AdminBereavedsPageModule() {
          _classCallCheck(this, AdminBereavedsPageModule);
        };

        AdminBereavedsPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineNgModule']({
          type: AdminBereavedsPageModule
        });
        AdminBereavedsPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineInjector']({
          factory: function AdminBereavedsPageModule_Factory(t) {
            return new (t || AdminBereavedsPageModule)();
          },
          imports: [
            [
              _admin_bereaveds_module__WEBPACK_IMPORTED_MODULE_3__['AdminBereavedsModule'],
              _shared_components_free_text_filter_free_text_filter_module__WEBPACK_IMPORTED_MODULE_5__[
                'FreeTextFilterModule'
              ],
              _angular_common__WEBPACK_IMPORTED_MODULE_1__['CommonModule'],
              _angular_router__WEBPACK_IMPORTED_MODULE_2__['RouterModule'].forChild(routes)
            ]
          ]
        });

        (function() {
          (typeof ngJitMode === 'undefined' || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵsetNgModuleScope'](AdminBereavedsPageModule, {
              declarations: [
                _admin_bereaveds_page_component__WEBPACK_IMPORTED_MODULE_4__['AdminBereavedsPageComponent']
              ],
              imports: [
                _admin_bereaveds_module__WEBPACK_IMPORTED_MODULE_3__['AdminBereavedsModule'],
                _shared_components_free_text_filter_free_text_filter_module__WEBPACK_IMPORTED_MODULE_5__[
                  'FreeTextFilterModule'
                ],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__['CommonModule'],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__['RouterModule']
              ]
            });
        })();
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            AdminBereavedsPageModule,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'],
                args: [
                  {
                    declarations: [
                      _admin_bereaveds_page_component__WEBPACK_IMPORTED_MODULE_4__['AdminBereavedsPageComponent']
                    ],
                    imports: [
                      _admin_bereaveds_module__WEBPACK_IMPORTED_MODULE_3__['AdminBereavedsModule'],
                      _shared_components_free_text_filter_free_text_filter_module__WEBPACK_IMPORTED_MODULE_5__[
                        'FreeTextFilterModule'
                      ],
                      _angular_common__WEBPACK_IMPORTED_MODULE_1__['CommonModule'],
                      _angular_router__WEBPACK_IMPORTED_MODULE_2__['RouterModule'].forChild(routes)
                    ]
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
    './src/app/admin/bereaveds/select-bereaved-guidance/select-bereaved-guidance.component.ts':
      /*!************************************************************************************************!*\
    !*** ./src/app/admin/bereaveds/select-bereaved-guidance/select-bereaved-guidance.component.ts ***!
    \************************************************************************************************/

      /*! exports provided: SelectBereavedGuidanceComponent */

      /***/
      function srcAppAdminBereavedsSelectBereavedGuidanceSelectBereavedGuidanceComponentTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'SelectBereavedGuidanceComponent', function() {
          return SelectBereavedGuidanceComponent;
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

        var _shared_components_select_select_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../shared/components/select/select.component */
          './src/app/shared/components/select/select.component.ts'
        );

        var SelectBereavedGuidanceComponent = function SelectBereavedGuidanceComponent() {
          _classCallCheck(this, SelectBereavedGuidanceComponent);

          this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
          this.readonly = false;
          this.options = models__WEBPACK_IMPORTED_MODULE_1__['guidanceOptions'];
        };

        SelectBereavedGuidanceComponent.ɵfac = function SelectBereavedGuidanceComponent_Factory(t) {
          return new (t || SelectBereavedGuidanceComponent)();
        };

        SelectBereavedGuidanceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineComponent']({
          type: SelectBereavedGuidanceComponent,
          selectors: [['app-select-bereaved-guidance']],
          inputs: {
            value: 'value',
            readonly: 'readonly'
          },
          outputs: {
            valueChange: 'valueChange'
          },
          decls: 1,
          vars: 4,
          consts: [[3, 'options', 'value', 'readonly', 'multiple', 'valueChange']],
          template: function SelectBereavedGuidanceComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'app-select', 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'valueChange',
                function SelectBereavedGuidanceComponent_Template_app_select_valueChange_0_listener($event) {
                  return ctx.valueChange.emit($event);
                }
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('options', ctx.options)('value', ctx.value)(
                'readonly',
                ctx.readonly
              )('multiple', true);
            }
          },
          directives: [_shared_components_select_select_component__WEBPACK_IMPORTED_MODULE_2__['SelectComponent']],
          encapsulation: 2
        });
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            SelectBereavedGuidanceComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                args: [
                  {
                    selector: 'app-select-bereaved-guidance',
                    templateUrl: './select-bereaved-guidance.component.html'
                  }
                ]
              }
            ],
            null,
            {
              value: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input']
                }
              ],
              valueChange: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Output']
                }
              ],
              readonly: [
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
    './src/app/admin/bereaveds/select-bereaved-status/select-bereaved-status.component.ts':
      /*!********************************************************************************************!*\
    !*** ./src/app/admin/bereaveds/select-bereaved-status/select-bereaved-status.component.ts ***!
    \********************************************************************************************/

      /*! exports provided: SelectBereavedStatusComponent */

      /***/
      function srcAppAdminBereavedsSelectBereavedStatusSelectBereavedStatusComponentTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'SelectBereavedStatusComponent', function() {
          return SelectBereavedStatusComponent;
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

        var _shared_components_select_select_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../shared/components/select/select.component */
          './src/app/shared/components/select/select.component.ts'
        );

        var SelectBereavedStatusComponent = function SelectBereavedStatusComponent() {
          _classCallCheck(this, SelectBereavedStatusComponent);

          this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
          this.readonly = false;
          this.options = [
            {
              value: models__WEBPACK_IMPORTED_MODULE_1__['BereavedStatus'].done,
              label: 'הושלם'
            },
            {
              value: models__WEBPACK_IMPORTED_MODULE_1__['BereavedStatus'].embed,
              label: 'שובץ'
            },
            {
              value: models__WEBPACK_IMPORTED_MODULE_1__['BereavedStatus'].notEmbed,
              label: 'לא שובץ'
            },
            {
              value: models__WEBPACK_IMPORTED_MODULE_1__['BereavedStatus'].waiting,
              label: 'מחכה לתשובה'
            },
            {
              value: models__WEBPACK_IMPORTED_MODULE_1__['BereavedStatus'].hostNoConnect,
              label: 'מארח לא יצר קשר'
            },
            {
              value: models__WEBPACK_IMPORTED_MODULE_1__['BereavedStatus'].hostingHimself,
              label: 'מארח את עצמו'
            },
            {
              value: models__WEBPACK_IMPORTED_MODULE_1__['BereavedStatus'].notParticipate,
              label: 'לא רוצה להשתתף'
            },
            {
              value: models__WEBPACK_IMPORTED_MODULE_1__['BereavedStatus'].other,
              label: 'אחר'
            }
          ];
        };

        SelectBereavedStatusComponent.ɵfac = function SelectBereavedStatusComponent_Factory(t) {
          return new (t || SelectBereavedStatusComponent)();
        };

        SelectBereavedStatusComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineComponent']({
          type: SelectBereavedStatusComponent,
          selectors: [['app-select-bereaved-status']],
          inputs: {
            value: 'value',
            readonly: 'readonly'
          },
          outputs: {
            valueChange: 'valueChange'
          },
          decls: 1,
          vars: 3,
          consts: [[3, 'options', 'value', 'readonly', 'valueChange']],
          template: function SelectBereavedStatusComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'app-select', 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'valueChange',
                function SelectBereavedStatusComponent_Template_app_select_valueChange_0_listener($event) {
                  return ctx.valueChange.emit($event);
                }
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('options', ctx.options)('value', ctx.value)(
                'readonly',
                ctx.readonly
              );
            }
          },
          directives: [_shared_components_select_select_component__WEBPACK_IMPORTED_MODULE_2__['SelectComponent']],
          encapsulation: 2
        });
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            SelectBereavedStatusComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                args: [
                  {
                    selector: 'app-select-bereaved-status',
                    templateUrl: './select-bereaved-status.component.html'
                  }
                ]
              }
            ],
            null,
            {
              value: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input']
                }
              ],
              valueChange: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Output']
                }
              ],
              readonly: [
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
    './src/app/admin/bereaveds/sort-bereaveds/sort-bereaveds.pipe.ts':
      /*!***********************************************************************!*\
    !*** ./src/app/admin/bereaveds/sort-bereaveds/sort-bereaveds.pipe.ts ***!
    \***********************************************************************/

      /*! exports provided: SortBereavedsPipe */

      /***/
      function srcAppAdminBereavedsSortBereavedsSortBereavedsPipeTs(module, __webpack_exports__, __webpack_require__) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'SortBereavedsPipe', function() {
          return SortBereavedsPipe;
        });
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        ); //const getFullName = (user: User, year: number) => (user.profile ? user.profile.firstName + user.profile.lastName : '');

        var getFirstName = function getFirstName(user, year) {
          return user.profile ? user.profile.firstName : '';
        };

        var getLastName = function getLastName(user, year) {
          return user.profile ? user.profile.lastName : '';
        };

        var getAddress = function getAddress(user, year) {
          var _a, _b, _c;

          return (
            ((_c =
              (_b = (_a = user) === null || _a === void 0 ? void 0 : _a.profile) === null || _b === void 0
                ? void 0
                : _b.address) === null || _c === void 0
              ? void 0
              : _c.latitude) || Number.MIN_VALUE
          );
        };

        var getAge = function getAge(user, year) {
          var _a;

          return ((_a = user.profile) === null || _a === void 0 ? void 0 : _a.birthDay) || Number.MAX_VALUE;
        };

        var getSeniority = function getSeniority(user, year) {
          var _a, _b, _c;

          return (
            ((_c =
              (_b = (_a = user.bereavedProfile) === null || _a === void 0 ? void 0 : _a.slains) === null ||
              _b === void 0
                ? void 0
                : _b[0]) === null || _c === void 0
              ? void 0
              : _c.deathDate) || Number.MAX_VALUE
          );
        };

        var getActive = function getActive(user, year) {
          return user.lastSignInDate || Number.MAX_VALUE;
        }; //const getGuidance = (user: User, year: number) => user.bereavedParticipation?.[year]?.guidance?.general || '';

        var getStatus = function getStatus(user, year) {
          var _a, _b;

          return (
            ((_b = (_a = user.bereavedParticipation) === null || _a === void 0 ? void 0 : _a[year]) === null ||
            _b === void 0
              ? void 0
              : _b.status) || ''
          );
        };

        var getMeetings = function getMeetings(user, year) {
          var _a, _b, _c;

          return (
            ((_c =
              (_b = (_a = user.bereavedParticipation) === null || _a === void 0 ? void 0 : _a[year]) === null ||
              _b === void 0
                ? void 0
                : _b.meetings) === null || _c === void 0
              ? void 0
              : _c.length) || 0
          );
        };

        var valueGetter = {
          firstName: getFirstName,
          lastName: getLastName,
          address: getAddress,
          age: getAge,
          seniority: getSeniority,
          active: getActive,
          status: getStatus,
          meetings: getMeetings
        };

        var getValue = function getValue(user, year, column) {
          return column in valueGetter ? valueGetter[column](user, year) : user[column] || '';
        };

        var SortBereavedsPipe = /*#__PURE__*/ (function() {
          function SortBereavedsPipe() {
            _classCallCheck(this, SortBereavedsPipe);
          }

          _createClass(SortBereavedsPipe, [
            {
              key: 'transform',
              value: function transform(bereaveds, _ref10, year) {
                var column = _ref10.column,
                  direction = _ref10.direction;

                if (!column) {
                  return bereaveds;
                }

                return bereaveds.slice().sort(function(a, b) {
                  var aValue = getValue(a, year, column);
                  var bValue = getValue(b, year, column);

                  if (direction === 'desc') {
                    var _ref11 = [bValue, aValue];
                    aValue = _ref11[0];
                    bValue = _ref11[1];
                  }

                  if (typeof aValue === 'number' && typeof bValue === 'number') {
                    return aValue - bValue;
                  }

                  return aValue.toString().localeCompare(bValue);
                });
              }
            }
          ]);

          return SortBereavedsPipe;
        })();

        SortBereavedsPipe.ɵfac = function SortBereavedsPipe_Factory(t) {
          return new (t || SortBereavedsPipe)();
        };

        SortBereavedsPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefinePipe']({
          name: 'sortBereaveds',
          type: SortBereavedsPipe,
          pure: true
        });
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            SortBereavedsPipe,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Pipe'],
                args: [
                  {
                    name: 'sortBereaveds'
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
//# sourceMappingURL=admin-bereaveds-page-admin-bereaveds-page-module-es5.js.map
