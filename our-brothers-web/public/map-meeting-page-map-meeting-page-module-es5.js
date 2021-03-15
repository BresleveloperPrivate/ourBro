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
  ['map-meeting-page-map-meeting-page-module'],
  {
    /***/
    './src/app/map-meeting/details-page/map-meeting-details-page.component.ts':
      /*!********************************************************************************!*\
    !*** ./src/app/map-meeting/details-page/map-meeting-details-page.component.ts ***!
    \********************************************************************************/

      /*! exports provided: MapMeetingDetailsPageComponent */

      /***/
      function srcAppMapMeetingDetailsPageMapMeetingDetailsPageComponentTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'MapMeetingDetailsPageComponent', function() {
          return MapMeetingDetailsPageComponent;
        });
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */

        var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/router */
          './node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js'
        );
        /* harmony import */

        var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ngx-toastr */
          './node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js'
        );
        /* harmony import */

        var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../shared/services/auth.service */
          './src/app/shared/services/auth.service.ts'
        );
        /* harmony import */

        var _shared_services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../shared/services/data.service */
          './src/app/shared/services/data.service.ts'
        );
        /* harmony import */

        var _shared_services_utils_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../shared/services/utils.service */
          './src/app/shared/services/utils.service.ts'
        );
        /* harmony import */

        var src_app_shared_services_participations_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! src/app/shared/services/participations.service */
          './src/app/shared/services/participations.service.ts'
        );
        /* harmony import */

        var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! @angular/common */
          './node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js'
        );
        /* harmony import */

        var _host_map_meeting_input_text_host_map_meeting_input_text_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../host-map-meeting-input-text/host-map-meeting-input-text.component */
          './src/app/map-meeting/host-map-meeting-input-text/host-map-meeting-input-text.component.ts'
        );
        /* harmony import */

        var _shared_components_remove_button_remove_button_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../shared/components/remove-button/remove-button.component */
          './src/app/shared/components/remove-button/remove-button.component.ts'
        );
        /* harmony import */

        var _shared_components_meeting_join_button_meeting_join_button_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../shared/components/meeting-join-button/meeting-join-button.component */
          './src/app/shared/components/meeting-join-button/meeting-join-button.component.ts'
        );
        /* harmony import */

        var _map_meeting_participates_list_map_meeting_participates_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../map-meeting-participates-list/map-meeting-participates-list.component */
          './src/app/map-meeting/map-meeting-participates-list/map-meeting-participates-list.component.ts'
        );
        /* harmony import */

        var _shared_pipes_phone_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../shared/pipes/phone.pipe */
          './src/app/shared/pipes/phone.pipe.ts'
        );

        function MapMeetingDetailsPageComponent_span_3_ng_container_1_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementContainerStart'](0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](1, 'div');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
              2,
              '\u05E4\u05E8\u05D8\u05D9 \u05D4\u05DE\u05E4\u05D2\u05E9'
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](3, 'div');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
              4,
              '\u05D4\u05DE\u05E4\u05D2\u05E9 \u05D9\u05EA\u05E7\u05D9\u05D9\u05DD \u05D0\u05E6\u05DC:'
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementContainerEnd']();
          }

          if (rf & 2) {
            var ctx_r199 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext'](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate1'](
              ' ',
              ctx_r199.meeting == null ? null : ctx_r199.meeting.title,
              ' '
            );
          }
        }

        function MapMeetingDetailsPageComponent_span_3_ng_container_2_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementContainerStart'](0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementContainerEnd']();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate1'](
              ' ',
              '\u05E0\u05DE\u05D7\u05E7 \u05D0\u05D5 \u05DC\u05D0 \u05E7\u05D9\u05D9\u05DD',
              ' '
            );
          }
        }

        function MapMeetingDetailsPageComponent_span_3_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'span');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
              1,
              MapMeetingDetailsPageComponent_span_3_ng_container_1_Template,
              6,
              1,
              'ng-container',
              3
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
              2,
              MapMeetingDetailsPageComponent_span_3_ng_container_2_Template,
              2,
              1,
              'ng-container',
              3
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }

          if (rf & 2) {
            var ctx_r197 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngIf', ctx_r197.meeting);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngIf', !ctx_r197.meeting);
          }
        }

        function MapMeetingDetailsPageComponent_div_4_div_1_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div', 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](1, 'div', 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](2, 'app-host-map-meeting-input-text', 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](3, 'div', 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](4, 'app-host-map-meeting-input-text', 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpipe'](5, 'phone');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }

          if (rf & 2) {
            var ctx_r201 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext'](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
              'text',
              (ctx_r201.meeting == null ? null : ctx_r201.meeting.contact.firstName) +
                ' ' +
                (ctx_r201.meeting == null ? null : ctx_r201.meeting.contact.lastName)
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
              'text',
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpipeBind1'](
                5,
                2,
                ctx_r201.meeting == null
                  ? null
                  : ctx_r201.meeting.contact == null
                  ? null
                  : ctx_r201.meeting.contact.phoneNumber
              )
            );
          }
        }

        function MapMeetingDetailsPageComponent_div_4_div_27_Template(rf, ctx) {
          if (rf & 1) {
            var _r206 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵgetCurrentView']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div', 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](1, 'div', 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](2, 'div', 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](3, 'a', 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](4, 'i', 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
              5,
              ' \u05E2\u05E8\u05D9\u05DB\u05EA \u05E4\u05E8\u05D8\u05D9\u05DD '
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](6, 'button', 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
              'click',
              function MapMeetingDetailsPageComponent_div_4_div_27_Template_button_click_6_listener() {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵrestoreView'](_r206);

                var ctx_r205 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext'](2);

                return ctx_r205.onDelete();
              }
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](7, 'i', 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](8, ' \u05DE\u05D7\u05E7 \u05DE\u05E4\u05D2\u05E9 ');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }

          if (rf & 2) {
            var ctx_r202 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext'](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
              'routerLink',
              '/host/' + ctx_r202.year + '/' + ctx_r202.meeting.hostId + '/' + ctx_r202.meeting.id
            );
          }
        }

        function MapMeetingDetailsPageComponent_div_4_ng_container_28_ng_container_3_div_4_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div', 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](1, 'app-host-map-meeting-input-text', 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }

          if (rf & 2) {
            var ctx_r209 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext'](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
              'text',
              ctx_r209.meeting.bereaved.slains[0].firstName +
                ' ' +
                ctx_r209.meeting.bereaved.slains[0].lastName +
                ' \u05D6"\u05DC'
            );
          }
        }

        function MapMeetingDetailsPageComponent_div_4_ng_container_28_ng_container_3_div_5_div_1_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div', 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](1, 'app-host-map-meeting-input-text', 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }

          if (rf & 2) {
            var slain_r212 = ctx.$implicit;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
              'text',
              slain_r212.firstName + ' ' + slain_r212.lastName + ' \u05D6"\u05DC'
            );
          }
        }

        function MapMeetingDetailsPageComponent_div_4_ng_container_28_ng_container_3_div_5_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div', 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
              1,
              MapMeetingDetailsPageComponent_div_4_ng_container_28_ng_container_3_div_5_div_1_Template,
              2,
              1,
              'div',
              26
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }

          if (rf & 2) {
            var ctx_r210 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext'](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngForOf', ctx_r210.meeting.bereaved.slains);
          }
        }

        function MapMeetingDetailsPageComponent_div_4_ng_container_28_ng_container_3_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementContainerStart'](0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](1, 'div', 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](2, 'div', 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](3, 'app-host-map-meeting-input-text', 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
              4,
              MapMeetingDetailsPageComponent_div_4_ng_container_28_ng_container_3_div_4_Template,
              2,
              1,
              'div',
              25
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
              5,
              MapMeetingDetailsPageComponent_div_4_ng_container_28_ng_container_3_div_5_Template,
              2,
              1,
              'div',
              6
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementContainerEnd']();
          }

          if (rf & 2) {
            var ctx_r207 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext'](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
              'text',
              (ctx_r207.meeting == null
              ? null
              : ctx_r207.meeting.bereaved)
                ? ctx_r207.meeting.bereaved.firstName + ' ' + ctx_r207.meeting.bereaved.lastName
                : ''
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
              'ngIf',
              (ctx_r207.meeting == null
                ? null
                : ctx_r207.meeting.bereaved == null
                ? null
                : ctx_r207.meeting.bereaved.slains == null
                ? null
                : ctx_r207.meeting.bereaved.slains.length) < 2
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
              'ngIf',
              (ctx_r207.meeting == null
                ? null
                : ctx_r207.meeting.bereaved == null
                ? null
                : ctx_r207.meeting.bereaved.slains == null
                ? null
                : ctx_r207.meeting.bereaved.slains.length) > 1
            );
          }
        }

        function MapMeetingDetailsPageComponent_div_4_ng_container_28_div_4_app_remove_button_3_Template(rf, ctx) {
          if (rf & 1) {
            var _r216 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵgetCurrentView']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'app-remove-button', 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
              'remove',
              function MapMeetingDetailsPageComponent_div_4_ng_container_28_div_4_app_remove_button_3_Template_app_remove_button_remove_0_listener() {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵrestoreView'](_r216);

                var ctx_r215 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext'](4);

                return ctx_r215.onBereavedLeaveMeeting();
              }
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }
        }

        function MapMeetingDetailsPageComponent_div_4_ng_container_28_div_4_app_meeting_join_button_4_Template(
          rf,
          ctx
        ) {
          if (rf & 1) {
            var _r218 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵgetCurrentView']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'app-meeting-join-button', 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
              'join',
              function MapMeetingDetailsPageComponent_div_4_ng_container_28_div_4_app_meeting_join_button_4_Template_app_meeting_join_button_join_0_listener() {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵrestoreView'](_r218);

                var ctx_r217 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext'](4);

                return ctx_r217.onBereavedJoinMeeting();
              }
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }

          if (rf & 2) {
            var ctx_r214 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext'](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('user', ctx_r214.user)(
              'meeting',
              ctx_r214.meeting
            );
          }
        }

        function MapMeetingDetailsPageComponent_div_4_ng_container_28_div_4_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div', 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](1, 'div', 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](2, 'div', 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
              3,
              MapMeetingDetailsPageComponent_div_4_ng_container_28_div_4_app_remove_button_3_Template,
              1,
              0,
              'app-remove-button',
              27
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
              4,
              MapMeetingDetailsPageComponent_div_4_ng_container_28_div_4_app_meeting_join_button_4_Template,
              1,
              2,
              'app-meeting-join-button',
              28
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }

          if (rf & 2) {
            var ctx_r208 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext'](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
              'ngIf',
              ctx_r208.participationsService.isBereavedParticipatingMeeting(ctx_r208.user, ctx_r208.meeting)
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
              'ngIf',
              ctx_r208.participationsService.isBereavedCanParticipatingMeeting(ctx_r208.user, ctx_r208.meeting)
            );
          }
        }

        function MapMeetingDetailsPageComponent_div_4_ng_container_28_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementContainerStart'](0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](1, 'div', 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
              2,
              ' \u05D0\u05D7/\u05D5\u05EA \u05E9\u05DB\u05D5\u05DC/\u05D4 '
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
              3,
              MapMeetingDetailsPageComponent_div_4_ng_container_28_ng_container_3_Template,
              6,
              3,
              'ng-container',
              3
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
              4,
              MapMeetingDetailsPageComponent_div_4_ng_container_28_div_4_Template,
              5,
              2,
              'div',
              6
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementContainerEnd']();
          }

          if (rf & 2) {
            var ctx_r203 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext'](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
              'ngIf',
              ctx_r203.meeting == null ? null : ctx_r203.meeting.bereaved
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
              'ngIf',
              ctx_r203.participationsService.isBereavedParticipatingMeeting(ctx_r203.user, ctx_r203.meeting) ||
                ctx_r203.participationsService.isBereavedCanParticipatingMeeting(ctx_r203.user, ctx_r203.meeting)
            );
          }
        }

        function MapMeetingDetailsPageComponent_div_4_ng_container_29_div_4_app_remove_button_3_Template(rf, ctx) {
          if (rf & 1) {
            var _r223 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵgetCurrentView']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'app-remove-button', 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
              'remove',
              function MapMeetingDetailsPageComponent_div_4_ng_container_29_div_4_app_remove_button_3_Template_app_remove_button_remove_0_listener() {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵrestoreView'](_r223);

                var ctx_r222 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext'](4);

                return ctx_r222.onParticipateLeaveMeeting();
              }
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }
        }

        function MapMeetingDetailsPageComponent_div_4_ng_container_29_div_4_app_meeting_join_button_4_Template(
          rf,
          ctx
        ) {
          if (rf & 1) {
            var _r225 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵgetCurrentView']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'app-meeting-join-button', 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
              'join',
              function MapMeetingDetailsPageComponent_div_4_ng_container_29_div_4_app_meeting_join_button_4_Template_app_meeting_join_button_join_0_listener() {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵrestoreView'](_r225);

                var ctx_r224 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext'](4);

                return ctx_r224.onParticipateJoinMeeting();
              }
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }

          if (rf & 2) {
            var ctx_r221 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext'](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('user', ctx_r221.user)(
              'meeting',
              ctx_r221.meeting
            );
          }
        }

        function MapMeetingDetailsPageComponent_div_4_ng_container_29_div_4_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div', 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](1, 'div', 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](2, 'div', 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
              3,
              MapMeetingDetailsPageComponent_div_4_ng_container_29_div_4_app_remove_button_3_Template,
              1,
              0,
              'app-remove-button',
              27
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
              4,
              MapMeetingDetailsPageComponent_div_4_ng_container_29_div_4_app_meeting_join_button_4_Template,
              1,
              2,
              'app-meeting-join-button',
              28
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }

          if (rf & 2) {
            var ctx_r219 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext'](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
              'ngIf',
              ctx_r219.participationsService.isParticipateParticipatingMeeting(ctx_r219.user, ctx_r219.meeting)
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
              'ngIf',
              ctx_r219.participationsService.isParticipateCanParticipatingMeeting(ctx_r219.user, ctx_r219.meeting)
            );
          }
        }

        function MapMeetingDetailsPageComponent_div_4_ng_container_29_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementContainerStart'](0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](1, 'div', 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](3, 'app-meeting-participates-list', 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
              4,
              MapMeetingDetailsPageComponent_div_4_ng_container_29_div_4_Template,
              5,
              2,
              'div',
              6
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementContainerEnd']();
          }

          if (rf & 2) {
            var ctx_r204 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext'](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate1'](
              '\u05E8\u05E9\u05D9\u05DE\u05EA \u05D4\u05DE\u05E9\u05EA\u05EA\u05E4\u05D9\u05DD \u05D1\u05D0\u05E8\u05D5\u05E2 (',
              (ctx_r204.meeting.count || 0) + '/' + ctx_r204.meeting.capacity,
              ')'
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('user', ctx_r204.user)(
              'meeting',
              ctx_r204.meeting
            )('meetingParticipates', ctx_r204.meetingParticipates);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
              'ngIf',
              ctx_r204.participationsService.isParticipateParticipatingMeeting(ctx_r204.user, ctx_r204.meeting) ||
                ctx_r204.participationsService.isParticipateCanParticipatingMeeting(ctx_r204.user, ctx_r204.meeting)
            );
          }
        }

        function MapMeetingDetailsPageComponent_div_4_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div', 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
              1,
              MapMeetingDetailsPageComponent_div_4_div_1_Template,
              6,
              4,
              'div',
              6
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](2, 'div', 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](3, 'div', 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](4, 'app-host-map-meeting-input-text', 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpipe'](5, 'date');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](6, 'div', 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](7, 'app-host-map-meeting-input-text', 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpipe'](8, 'date');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](9, 'div', 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](10, 'div', 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](11, 'app-host-map-meeting-input-text', 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](12, 'div', 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](13, 'app-host-map-meeting-input-text', 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](14, 'div', 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](15, 'div', 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](16, 'app-host-map-meeting-input-text', 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](17, 'div', 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](18, 'app-host-map-meeting-input-text', 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](19, 'div', 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](20, 'div', 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](21, 'app-host-map-meeting-input-text', 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](22, 'div', 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](23, 'app-host-map-meeting-input-text', 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](24, 'div', 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](25, 'div', 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](26, 'app-host-map-meeting-input-text', 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
              27,
              MapMeetingDetailsPageComponent_div_4_div_27_Template,
              9,
              1,
              'div',
              6
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
              28,
              MapMeetingDetailsPageComponent_div_4_ng_container_28_Template,
              5,
              2,
              'ng-container',
              3
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
              29,
              MapMeetingDetailsPageComponent_div_4_ng_container_29_Template,
              5,
              5,
              'ng-container',
              3
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }

          if (rf & 2) {
            var ctx_r198 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngIf', ctx_r198.extraData);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
              'text',
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpipeBind2'](
                5,
                13,
                ctx_r198.meeting == null ? null : ctx_r198.meeting.date,
                'dd.MM.yyyy'
              )
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
              'text',
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpipeBind2'](
                8,
                16,
                ctx_r198.meeting == null ? null : ctx_r198.meeting.date,
                'HH:mm'
              )
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
              'text',
              ctx_r198.meeting == null
                ? null
                : ctx_r198.meeting.address == null
                ? null
                : ctx_r198.meeting.address.formattedAddress
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
              'text',
              ctx_r198.meeting == null ? null : ctx_r198.meeting.capacity
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
              'text',
              (ctx_r198.meeting == null
              ? null
              : ctx_r198.meeting.invited)
                ? '\u05E1\u05D2\u05D5\u05E8 \u05DC\u05DE\u05D5\u05D6\u05DE\u05E0\u05D9\u05DD \u05D1\u05DC\u05D1\u05D3'
                : '  '
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
              'text',
              (ctx_r198.meeting == null
              ? null
              : ctx_r198.meeting.invited)
                ? '\u05DC\u05D0 \u05E7\u05D9\u05D9\u05DD  '
                : '\u05E7\u05D9\u05D9\u05DD'
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
              'text',
              (ctx_r198.meeting == null
              ? null
              : ctx_r198.meeting.invited)
                ? '\u05DC\u05D0 \u05E7\u05D9\u05D9\u05DD  '
                : '\u05E7\u05D9\u05D9\u05DD'
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
              'text',
              (ctx_r198.meeting == null
              ? null
              : ctx_r198.meeting.invited)
                ? '\u05DC\u05D0 \u05DE\u05E1\u05DB\u05D9\u05DD'
                : ' \u05DE\u05E1\u05DB\u05D9\u05DD'
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
              'text',
              ctx_r198.meeting ? ctx_r198.utilsService.meetingAudienceLabels[ctx_r198.meeting.audience] : ''
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
              'ngIf',
              ((ctx_r198.user == null ? null : ctx_r198.user.isAdmin) && ctx_r198.meeting) ||
                ((ctx_r198.user == null ? null : ctx_r198.user.id) && ctx_r198.meeting)
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
              'ngIf',
              (ctx_r198.meeting == null ? null : ctx_r198.meeting.bereaved) ||
                ctx_r198.participationsService.isBereavedCanParticipatingMeeting(ctx_r198.user, ctx_r198.meeting)
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
              'ngIf',
              ctx_r198.user &&
                !(ctx_r198.meeting == null ? null : ctx_r198.meeting.invited) &&
                (ctx_r198.meetingParticipates == null ? null : ctx_r198.meetingParticipates.length)
            );
          }
        }

        var MapMeetingDetailsPageComponent = /*#__PURE__*/ (function() {
          function MapMeetingDetailsPageComponent(
            router,
            activatedRoute,
            toastr,
            authService,
            dataService,
            utilsService,
            participationsService
          ) {
            _classCallCheck(this, MapMeetingDetailsPageComponent);

            this.router = router;
            this.activatedRoute = activatedRoute;
            this.toastr = toastr;
            this.authService = authService;
            this.dataService = dataService;
            this.utilsService = utilsService;
            this.participationsService = participationsService;
            this.loadingMeeting = true;
            this.loadingMeetingParticipates = true;
            this.extraData = false;
          }

          _createClass(MapMeetingDetailsPageComponent, [
            {
              key: 'ngOnInit',
              value: function ngOnInit() {
                var _this = this;

                this.authService.user.subscribe(function(user) {
                  _this.extraData = _this.extraData || user.isAdmin;
                  return (_this.user = user);
                });
                this.activatedRoute.params.subscribe(function(params) {
                  var hostId = params.hostId,
                    meetingId = params.meetingId,
                    memorialYear = params.memorialYear;
                  _this.year = memorialYear;

                  if (_this.getMeeting$) {
                    _this.getMeeting$.unsubscribe();
                  }

                  _this.getMeeting$ = _this.dataService
                    .getMeeting(hostId, meetingId, _this.year)
                    .subscribe(function(meeting) {
                      _this.loadingMeeting = false;
                      _this.extraData =
                        _this.extraData ||
                        _this.participationsService.isHostParticipatingMeeting(_this.user, meeting) ||
                        _this.participationsService.isBereavedParticipatingMeeting(_this.user, meeting);
                      return (_this.meeting = meeting);
                    });

                  if (_this.getMeetingParticipates$) {
                    _this.getMeetingParticipates$.unsubscribe();
                  }

                  _this.getMeetingParticipates$ = _this.dataService
                    .getMeetingParticipates(hostId, meetingId, _this.year)
                    .subscribe(function(meetingParticipates) {
                      _this.loadingMeetingParticipates = false;
                      return (_this.meetingParticipates = meetingParticipates);
                    });
                });
              }
            },
            {
              key: 'onDelete',
              value: function onDelete() {
                var _this2 = this;

                if (window.confirm('האם ברצונך למחוק את המפגש?')) {
                  this.dataService.deleteMeeting(this.meeting.hostId, this.meeting.id, this.year).subscribe(
                    function() {
                      _this2.toastr.success('מפגש נמחק בהצלחה!');

                      _this2.router.navigate(['/meetings']);
                    },
                    function() {
                      _this2.toastr.error('שגיאה - לא ניתן למחוק מפגש. נא ליצור קשר.');
                    }
                  );
                }
              }
            },
            {
              key: 'onBereavedLeaveMeeting',
              value: function onBereavedLeaveMeeting() {
                var _this3 = this;

                if (this.meeting && this.user) {
                  if (window.confirm('האם ברצונך לצאת מהמפגש?')) {
                    this.dataService.bereavedLeaveMeeting(this.user, this.meeting).subscribe(
                      function() {
                        _this3.toastr.success('הוסרת מהמפגש בהצלחה');
                      },
                      function() {
                        _this3.toastr.error('שגיאה - לא ניתן לצאת מהמפגש. נא ליצור קשר');
                      }
                    );
                  }
                }
              }
            },
            {
              key: 'onParticipateLeaveMeeting',
              value: function onParticipateLeaveMeeting() {
                var _this4 = this;

                if (this.meeting && this.user) {
                  if (window.confirm('האם ברצונך לצאת מהמפגש?')) {
                    this.dataService.participateLeaveMeeting(this.user, this.meeting).subscribe(
                      function() {
                        _this4.toastr.success('הוסרת מהמפגש בהצלחה');
                      },
                      function() {
                        _this4.toastr.error('שגיאה - לא ניתן לצאת מהמפגש. נא ליצור קשר');
                      }
                    );
                  }
                }
              }
            },
            {
              key: 'onBereavedJoinMeeting',
              value: function onBereavedJoinMeeting() {
                var _this5 = this;

                if (this.meeting && this.user) {
                  if (window.confirm('האם ברצונך להשתבץ למפגש?')) {
                    this.dataService.bereavedJoinMeeting(this.user, this.meeting).subscribe(
                      function() {
                        _this5.toastr.success('שובצת בהצלחה');
                      },
                      function() {
                        _this5.toastr.error('שגיאה - לא ניתן להשתבץ למפגש. נא ליצור קשר');
                      }
                    );
                  }
                }
              }
            },
            {
              key: 'onParticipateJoinMeeting',
              value: function onParticipateJoinMeeting() {
                var _this6 = this;

                if (this.meeting && this.user) {
                  if (window.confirm('האם ברצונך להשתבץ למפגש?')) {
                    this.dataService.participateJoinMeeting(this.user, this.meeting, this.getAccompanies()).subscribe(
                      function() {
                        _this6.toastr.success('שובצת בהצלחה');
                      },
                      function() {
                        _this6.toastr.error('שגיאה - לא ניתן להשתבץ למפגש. נא ליצור קשר');
                      }
                    );
                  }
                }
              }
            },
            {
              key: 'getAccompanies',
              value: function getAccompanies() {
                var accompaniesAnswer = window.prompt('האם יגיעו איתך אנשים נוספים?', '0');
                var number = Number.parseInt(accompaniesAnswer);

                while (!(!Number.isNaN(number) && number >= 0 && number <= 7)) {
                  accompaniesAnswer = window.prompt('נא להזין מספר משתתפים בין 0 ל-7', '0');
                  number = Number.parseInt(accompaniesAnswer);
                }

                return number;
              }
            },
            {
              key: 'ngOnDestroy',
              value: function ngOnDestroy() {
                if (this.user$) {
                  this.user$.unsubscribe();
                }

                if (this.getMeeting$) {
                  this.getMeeting$.unsubscribe();
                }

                if (this.getMeetingParticipates$) {
                  this.getMeetingParticipates$.unsubscribe();
                }
              }
            }
          ]);

          return MapMeetingDetailsPageComponent;
        })();

        MapMeetingDetailsPageComponent.ɵfac = function MapMeetingDetailsPageComponent_Factory(t) {
          return new (t || MapMeetingDetailsPageComponent)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
              _angular_router__WEBPACK_IMPORTED_MODULE_1__['Router']
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
              _angular_router__WEBPACK_IMPORTED_MODULE_1__['ActivatedRoute']
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
              ngx_toastr__WEBPACK_IMPORTED_MODULE_2__['ToastrService']
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
              _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__['AuthService']
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
              _shared_services_data_service__WEBPACK_IMPORTED_MODULE_4__['DataService']
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
              _shared_services_utils_service__WEBPACK_IMPORTED_MODULE_5__['UtilsService']
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
              src_app_shared_services_participations_service__WEBPACK_IMPORTED_MODULE_6__['ParticipationsService']
            )
          );
        };

        MapMeetingDetailsPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineComponent']({
          type: MapMeetingDetailsPageComponent,
          selectors: [['app-map-meeting-details-page']],
          decls: 5,
          vars: 2,
          consts: [
            ['src', '../../../assets/img/meetingsHeader.jpg', 1, 'image-header'],
            [1, 'site-divider'],
            [1, 'medium-heading'],
            [4, 'ngIf'],
            ['class', 'meeting-details', 4, 'ngIf'],
            [1, 'meeting-details'],
            ['class', 'row', 4, 'ngIf'],
            [1, 'row'],
            [1, 'col'],
            [
              'iconUrl',
              'assets/img/host_calendar.svg',
              'label',
              '\u05EA\u05D0\u05E8\u05D9\u05DA:',
              1,
              'input',
              3,
              'text'
            ],
            ['iconUrl', 'assets/img/host_clock.svg', 'label', '\u05E9\u05E2\u05D4:', 1, 'input', 3, 'text'],
            [
              'iconUrl',
              'assets/img/host_location.svg',
              'label',
              '\u05DB\u05EA\u05D5\u05D1\u05EA:',
              1,
              'input',
              3,
              'text'
            ],
            [
              'iconUrl',
              'assets/img/host_users.svg',
              'label',
              '\u05DE\u05E1\u05E4\u05E8 \u05DE\u05D5\u05D6\u05DE\u05E0\u05D9\u05DD:',
              1,
              'input',
              3,
              'text'
            ],
            ['iconUrl', 'assets/img/host_users.svg', 1, 'input', 3, 'text'],
            [
              'iconUrl',
              'assets/img/host_accessibility.svg',
              'label',
              ' \u05E0\u05D2\u05D9\u05E9\u05D5\u05EA:',
              1,
              'input',
              3,
              'text'
            ],
            ['iconUrl', 'assets/img/host_tv.svg', 1, 'input', 3, 'text'],
            ['iconUrl', 'assets/img/host_camera.svg', 1, 'input', 3, 'text'],
            [
              'iconUrl',
              'assets/img/host_users.svg',
              'label',
              '\u05E7\u05D4\u05DC \u05D9\u05E2\u05D3:',
              1,
              'input',
              3,
              'text'
            ],
            ['iconUrl', 'assets/img/host_user.svg', 1, 'input', 3, 'text'],
            ['iconUrl', 'assets/img/host_phone.svg', 1, 'input', 3, 'text'],
            [1, 'buttons'],
            [1, 'site-button', 'invert', 'edit-button', 3, 'routerLink'],
            [1, 'fas', 'fa-pencil-alt'],
            [1, 'site-button', 'danger', 'invert', 'delete-button', 3, 'click'],
            [1, 'far', 'fa-trash-alt'],
            ['class', 'col', 4, 'ngIf'],
            ['class', 'col', 4, 'ngFor', 'ngForOf'],
            ['class', 'button', 3, 'remove', 4, 'ngIf'],
            ['class', 'button', 3, 'user', 'meeting', 'join', 4, 'ngIf'],
            [1, 'button', 3, 'remove'],
            [1, 'button', 3, 'user', 'meeting', 'join'],
            [3, 'user', 'meeting', 'meetingParticipates']
          ],
          template: function MapMeetingDetailsPageComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](0, 'img', 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](1, 'div', 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](2, 'div', 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                3,
                MapMeetingDetailsPageComponent_span_3_Template,
                3,
                2,
                'span',
                3
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                4,
                MapMeetingDetailsPageComponent_div_4_Template,
                30,
                19,
                'div',
                4
              );
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngIf', !ctx.loadingMeeting);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngIf', ctx.loadingMeeting || ctx.meeting);
            }
          },
          directives: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__['NgIf'],
            _host_map_meeting_input_text_host_map_meeting_input_text_component__WEBPACK_IMPORTED_MODULE_8__[
              'HostMapMeetingInputTextComponent'
            ],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__['RouterLinkWithHref'],
            _angular_common__WEBPACK_IMPORTED_MODULE_7__['NgForOf'],
            _shared_components_remove_button_remove_button_component__WEBPACK_IMPORTED_MODULE_9__[
              'RemoveButtonComponent'
            ],
            _shared_components_meeting_join_button_meeting_join_button_component__WEBPACK_IMPORTED_MODULE_10__[
              'MeetingJoinButtonComponent'
            ],
            _map_meeting_participates_list_map_meeting_participates_list_component__WEBPACK_IMPORTED_MODULE_11__[
              'MeetingParticipatesListComponent'
            ]
          ],
          pipes: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__['DatePipe'],
            _shared_pipes_phone_pipe__WEBPACK_IMPORTED_MODULE_12__['PhonePipe']
          ],
          styles: [
            ".medium-heading[_ngcontent-%COMP%] {\n  min-height: 1em;\n}\n\n.row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  margin: 10px;\n  min-width: 350px;\n  max-width: 400px;\n}\n\n@media only screen and (max-width: 768px) {\n  .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n    margin: 5px;\n  }\n}\n\n.buttons[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.buttons[_ngcontent-%COMP%]   .site-button[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n\n.buttons[_ngcontent-%COMP%]   .site-button.edit-button[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n}\n\n.buttons[_ngcontent-%COMP%]   .site-button.edit-button[_ngcontent-%COMP%]::before {\n  content: \"\";\n  width: 55px;\n  height: 50px;\n  background-image: url('host_edit_white.svg');\n  background-position: 50% 50%;\n  background-size: 20px 20px;\n  background-repeat: no-repeat;\n}\n\n.buttons[_ngcontent-%COMP%]   .site-button.delete-button[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n}\n\n.buttons[_ngcontent-%COMP%]   .site-button.delete-button[_ngcontent-%COMP%]::before {\n  content: \"\";\n  width: 65px;\n  height: 50px;\n  background-image: url('host_delete_white.svg');\n  background-position: 50% 50%;\n  background-size: 20px 20px;\n  background-repeat: no-repeat;\n}\n\n.share-container[_ngcontent-%COMP%] {\n  width: 370px;\n  display: flex;\n  align-items: center;\n}\n\n.share-container[_ngcontent-%COMP%]   .share-text[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #818181;\n  font-family: \"Heebo\";\n}\n\n.share-container[_ngcontent-%COMP%]   .facebook-icon[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 28px;\n  background-image: url('facebook.png');\n  background-size: 100% 100%;\n}\n\n.share-container[_ngcontent-%COMP%]   .whatsapp-icon[_ngcontent-%COMP%] {\n  width: 25px;\n  height: 25px;\n  background-image: url('whatsapp.png');\n  background-size: 100% 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFwLW1lZXRpbmcvZGV0YWlscy1wYWdlL0M6XFxVc2Vyc1xcVGVoaWxhXFxsYXN0XFxvdXJCcm9cXG91ci1icm90aGVycy13ZWIvc3JjXFxhcHBcXG1hcC1tZWV0aW5nXFxkZXRhaWxzLXBhZ2VcXG1hcC1tZWV0aW5nLWRldGFpbHMtcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFwLW1lZXRpbmcvZGV0YWlscy1wYWdlL21hcC1tZWV0aW5nLWRldGFpbHMtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QUNDRjs7QURDRTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0NKOztBRENJO0VBTkY7SUFPSSxXQUFBO0VDRUo7QUFDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQ0NGOztBRENFO0VBQ0UsWUFBQTtBQ0NKOztBRENJO0VBQ0UsY0FBQTtBQ0NOOztBRENNO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNENBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0VBQ0EsNEJBQUE7QUNDUjs7QURHSTtFQUNFLGNBQUE7QUNETjs7QURHTTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDhDQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQkFBQTtFQUNBLDRCQUFBO0FDRFI7O0FET0E7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDSkY7O0FETUU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FDSko7O0FET0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFDQUFBO0VBQ0EsMEJBQUE7QUNMSjs7QURRRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUNBQUE7RUFDQSwwQkFBQTtBQ05KIiwiZmlsZSI6InNyYy9hcHAvbWFwLW1lZXRpbmcvZGV0YWlscy1wYWdlL21hcC1tZWV0aW5nLWRldGFpbHMtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZWRpdW0taGVhZGluZyB7XHJcbiAgbWluLWhlaWdodDogMWVtO1xyXG59XHJcblxyXG4ucm93IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgLmNvbCB7XHJcbiAgICBmbGV4OiAwIDAgYXV0bztcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIG1pbi13aWR0aDogMzUwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG5cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uYnV0dG9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgLnNpdGUtYnV0dG9uIHtcclxuICAgIG1hcmdpbjogMTBweDtcclxuXHJcbiAgICAmLmVkaXQtYnV0dG9uIHtcclxuICAgICAgZmxleDogMCAwIGF1dG87XHJcblxyXG4gICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgIHdpZHRoOiA1NXB4O1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZy9ob3N0X2VkaXRfd2hpdGUuc3ZnKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMjBweCAyMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmLmRlbGV0ZS1idXR0b24ge1xyXG4gICAgICBmbGV4OiAwIDAgYXV0bztcclxuXHJcbiAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgd2lkdGg6IDY1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaW1nL2hvc3RfZGVsZXRlX3doaXRlLnN2Zyk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDIwcHggMjBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uc2hhcmUtY29udGFpbmVyIHtcclxuICB3aWR0aDogMzcwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAuc2hhcmUtdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBjb2xvcjogIzgxODE4MTtcclxuICAgIGZvbnQtZmFtaWx5OiAnSGVlYm8nO1xyXG4gIH1cclxuXHJcbiAgLmZhY2Vib29rLWljb24ge1xyXG4gICAgd2lkdGg6IDE2cHg7XHJcbiAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZy9mYWNlYm9vay5wbmcpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgfVxyXG5cclxuICAud2hhdHNhcHAtaWNvbiB7XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaW1nL3doYXRzYXBwLnBuZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICB9XHJcbn1cclxuIiwiLm1lZGl1bS1oZWFkaW5nIHtcbiAgbWluLWhlaWdodDogMWVtO1xufVxuXG4ucm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5yb3cgLmNvbCB7XG4gIGZsZXg6IDAgMCBhdXRvO1xuICBtYXJnaW46IDEwcHg7XG4gIG1pbi13aWR0aDogMzUwcHg7XG4gIG1heC13aWR0aDogNDAwcHg7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5yb3cgLmNvbCB7XG4gICAgbWFyZ2luOiA1cHg7XG4gIH1cbn1cblxuLmJ1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5idXR0b25zIC5zaXRlLWJ1dHRvbiB7XG4gIG1hcmdpbjogMTBweDtcbn1cbi5idXR0b25zIC5zaXRlLWJ1dHRvbi5lZGl0LWJ1dHRvbiB7XG4gIGZsZXg6IDAgMCBhdXRvO1xufVxuLmJ1dHRvbnMgLnNpdGUtYnV0dG9uLmVkaXQtYnV0dG9uOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogNTVweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZy9ob3N0X2VkaXRfd2hpdGUuc3ZnKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcbiAgYmFja2dyb3VuZC1zaXplOiAyMHB4IDIwcHg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG4uYnV0dG9ucyAuc2l0ZS1idXR0b24uZGVsZXRlLWJ1dHRvbiB7XG4gIGZsZXg6IDAgMCBhdXRvO1xufVxuLmJ1dHRvbnMgLnNpdGUtYnV0dG9uLmRlbGV0ZS1idXR0b246OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiA2NXB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaW1nL2hvc3RfZGVsZXRlX3doaXRlLnN2Zyk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG4gIGJhY2tncm91bmQtc2l6ZTogMjBweCAyMHB4O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuXG4uc2hhcmUtY29udGFpbmVyIHtcbiAgd2lkdGg6IDM3MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnNoYXJlLWNvbnRhaW5lciAuc2hhcmUtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICM4MTgxODE7XG4gIGZvbnQtZmFtaWx5OiBcIkhlZWJvXCI7XG59XG4uc2hhcmUtY29udGFpbmVyIC5mYWNlYm9vay1pY29uIHtcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMjhweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvZmFjZWJvb2sucG5nKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG59XG4uc2hhcmUtY29udGFpbmVyIC53aGF0c2FwcC1pY29uIHtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvd2hhdHNhcHAucG5nKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG59Il19 */"
          ]
        });
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            MapMeetingDetailsPageComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                args: [
                  {
                    selector: 'app-map-meeting-details-page',
                    templateUrl: './map-meeting-details-page.component.html',
                    styleUrls: ['./map-meeting-details-page.component.scss']
                  }
                ]
              }
            ],
            function() {
              return [
                {
                  type: _angular_router__WEBPACK_IMPORTED_MODULE_1__['Router']
                },
                {
                  type: _angular_router__WEBPACK_IMPORTED_MODULE_1__['ActivatedRoute']
                },
                {
                  type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__['ToastrService']
                },
                {
                  type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__['AuthService']
                },
                {
                  type: _shared_services_data_service__WEBPACK_IMPORTED_MODULE_4__['DataService']
                },
                {
                  type: _shared_services_utils_service__WEBPACK_IMPORTED_MODULE_5__['UtilsService']
                },
                {
                  type:
                    src_app_shared_services_participations_service__WEBPACK_IMPORTED_MODULE_6__['ParticipationsService']
                }
              ];
            },
            null
          );
        })();
        /***/
      },

    /***/
    './src/app/map-meeting/host-map-meeting-input-text/host-map-meeting-input-text.component.ts':
      /*!**************************************************************************************************!*\
    !*** ./src/app/map-meeting/host-map-meeting-input-text/host-map-meeting-input-text.component.ts ***!
    \**************************************************************************************************/

      /*! exports provided: HostMapMeetingInputTextComponent */

      /***/
      function srcAppMapMeetingHostMapMeetingInputTextHostMapMeetingInputTextComponentTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'HostMapMeetingInputTextComponent', function() {
          return HostMapMeetingInputTextComponent;
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

        function HostMapMeetingInputTextComponent_div_1_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](0, 'div', 5);
          }

          if (rf & 2) {
            var ctx_r226 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵstyleProp'](
              'background-image',
              'url(' + ctx_r226.iconUrl + ')',
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefaultStyleSanitizer']
            );
          }
        }

        function HostMapMeetingInputTextComponent_div_2_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div', 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }

          if (rf & 2) {
            var ctx_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate'](ctx_r227.label);
          }
        }

        function HostMapMeetingInputTextComponent_div_5_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div', 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }

          if (rf & 2) {
            var ctx_r228 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate1']('(', ctx_r228.info, ')');
          }
        }

        var HostMapMeetingInputTextComponent = function HostMapMeetingInputTextComponent() {
          _classCallCheck(this, HostMapMeetingInputTextComponent);
        };

        HostMapMeetingInputTextComponent.ɵfac = function HostMapMeetingInputTextComponent_Factory(t) {
          return new (t || HostMapMeetingInputTextComponent)();
        };

        HostMapMeetingInputTextComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineComponent']({
          type: HostMapMeetingInputTextComponent,
          selectors: [['app-host-map-meeting-input-text']],
          inputs: {
            iconUrl: 'iconUrl',
            label: 'label',
            text: 'text',
            info: 'info'
          },
          decls: 6,
          vars: 4,
          consts: [
            [1, 'input-container'],
            ['class', 'input-icon', 3, 'background-image', 4, 'ngIf'],
            ['class', 'input-label', 4, 'ngIf'],
            [1, 'input-text'],
            ['class', 'input-info', 4, 'ngIf'],
            [1, 'input-icon'],
            [1, 'input-label'],
            [1, 'input-info']
          ],
          template: function HostMapMeetingInputTextComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div', 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                1,
                HostMapMeetingInputTextComponent_div_1_Template,
                1,
                2,
                'div',
                1
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                2,
                HostMapMeetingInputTextComponent_div_2_Template,
                2,
                1,
                'div',
                2
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](3, 'div', 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                5,
                HostMapMeetingInputTextComponent_div_5_Template,
                2,
                1,
                'div',
                4
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngIf', ctx.iconUrl);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngIf', ctx.label);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate'](ctx.text);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngIf', ctx.info);
            }
          },
          directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__['NgIf']],
          styles: [
            '.input-container[_ngcontent-%COMP%] {\n  padding: 5px;\n  background-color: white;\n  border: 1px solid #e5e5e5;\n  display: flex;\n  align-items: center;\n}\n.input-container[_ngcontent-%COMP%]   .input-icon[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  width: 65px;\n  height: 50px;\n  background-position: 50% 50%;\n  background-size: 24px 24px;\n  background-repeat: no-repeat;\n}\n.input-container[_ngcontent-%COMP%]   .input-label[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  font-size: 18px;\n  margin-left: 10px;\n  color: #999999;\n  font-family: "Heebo";\n}\n.input-container[_ngcontent-%COMP%]   .input-text[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  font-size: 18px;\n  font-family: "Heebo";\n  color: #999999;\n}\n.input-container[_ngcontent-%COMP%]   .input-info[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  margin-right: 10px;\n  font-size: 18px;\n  font-family: "Heebo";\n  color: #999999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFwLW1lZXRpbmcvaG9zdC1tYXAtbWVldGluZy1pbnB1dC10ZXh0L0M6XFxVc2Vyc1xcVGVoaWxhXFxsYXN0XFxvdXJCcm9cXG91ci1icm90aGVycy13ZWIvc3JjXFxhcHBcXG1hcC1tZWV0aW5nXFxob3N0LW1hcC1tZWV0aW5nLWlucHV0LXRleHRcXGhvc3QtbWFwLW1lZXRpbmctaW5wdXQtdGV4dC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFwLW1lZXRpbmcvaG9zdC1tYXAtbWVldGluZy1pbnB1dC10ZXh0L2hvc3QtbWFwLW1lZXRpbmctaW5wdXQtdGV4dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDQ0Y7QURDRTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtBQ0NKO0FERUU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FDQUo7QURHRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0FDREo7QURJRTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7QUNGSiIsImZpbGUiOiJzcmMvYXBwL21hcC1tZWV0aW5nL2hvc3QtbWFwLW1lZXRpbmctaW5wdXQtdGV4dC9ob3N0LW1hcC1tZWV0aW5nLWlucHV0LXRleHQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5wdXQtY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIyOSwgMjI5LCAyMjkpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgLmlucHV0LWljb24ge1xyXG4gICAgZmxleDogMCAwIGF1dG87XHJcbiAgICB3aWR0aDogNjVweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDI0cHggMjRweDtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgfVxyXG5cclxuICAuaW5wdXQtbGFiZWwge1xyXG4gICAgZmxleDogMCAwIGF1dG87XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIGNvbG9yOiByZ2IoMTUzLCAxNTMsIDE1Myk7XHJcbiAgICBmb250LWZhbWlseTogJ0hlZWJvJztcclxuICB9XHJcblxyXG4gIC5pbnB1dC10ZXh0IHtcclxuICAgIGZsZXg6IDAgMCBhdXRvO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdIZWVibyc7XHJcbiAgICBjb2xvcjogcmdiKDE1MywgMTUzLCAxNTMpO1xyXG4gIH1cclxuXHJcbiAgLmlucHV0LWluZm8ge1xyXG4gICAgZmxleDogMCAwIGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LWZhbWlseTogJ0hlZWJvJztcclxuICAgIGNvbG9yOiByZ2IoMTUzLCAxNTMsIDE1Myk7XHJcbiAgfVxyXG59XHJcbiIsIi5pbnB1dC1jb250YWluZXIge1xuICBwYWRkaW5nOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmlucHV0LWNvbnRhaW5lciAuaW5wdXQtaWNvbiB7XG4gIGZsZXg6IDAgMCBhdXRvO1xuICB3aWR0aDogNjVweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xuICBiYWNrZ3JvdW5kLXNpemU6IDI0cHggMjRweDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cbi5pbnB1dC1jb250YWluZXIgLmlucHV0LWxhYmVsIHtcbiAgZmxleDogMCAwIGF1dG87XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGNvbG9yOiAjOTk5OTk5O1xuICBmb250LWZhbWlseTogXCJIZWVib1wiO1xufVxuLmlucHV0LWNvbnRhaW5lciAuaW5wdXQtdGV4dCB7XG4gIGZsZXg6IDAgMCBhdXRvO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkhlZWJvXCI7XG4gIGNvbG9yOiAjOTk5OTk5O1xufVxuLmlucHV0LWNvbnRhaW5lciAuaW5wdXQtaW5mbyB7XG4gIGZsZXg6IDAgMCBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC1mYW1pbHk6IFwiSGVlYm9cIjtcbiAgY29sb3I6ICM5OTk5OTk7XG59Il19 */'
          ]
        });
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            HostMapMeetingInputTextComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                args: [
                  {
                    selector: 'app-host-map-meeting-input-text',
                    templateUrl: './host-map-meeting-input-text.component.html',
                    styleUrls: ['./host-map-meeting-input-text.component.scss']
                  }
                ]
              }
            ],
            null,
            {
              iconUrl: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input']
                }
              ],
              label: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input']
                }
              ],
              text: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input']
                }
              ],
              info: [
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
    './src/app/map-meeting/map-meeting-participates-list/map-meeting-participates-list.component.ts':
      /*!******************************************************************************************************!*\
    !*** ./src/app/map-meeting/map-meeting-participates-list/map-meeting-participates-list.component.ts ***!
    \******************************************************************************************************/

      /*! exports provided: MeetingParticipatesListComponent */

      /***/
      function srcAppMapMeetingMapMeetingParticipatesListMapMeetingParticipatesListComponentTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'MeetingParticipatesListComponent', function() {
          return MeetingParticipatesListComponent;
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

        var _shared_pipes_phone_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../shared/pipes/phone.pipe */
          './src/app/shared/pipes/phone.pipe.ts'
        );

        function MeetingParticipatesListComponent_ng_container_6_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementContainerStart'](0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](1, 'div', 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](2, ' \u05D8\u05DC\u05E4\u05D5\u05DF ');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](3, 'div', 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](4, ' \u05DE\u05D9\u05D9\u05DC ');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementContainerEnd']();
          }
        }

        function MeetingParticipatesListComponent_div_8_ng_container_10_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementContainerStart'](0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](1, 'div', 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](2, 'span', 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
              3,
              '\u05D8\u05DC\u05E4\u05D5\u05DF \u05E0\u05D9\u05D9\u05D3'
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpipe'](5, 'phone');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](6, 'div', 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](7, 'span', 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](8, '\u05DE\u05D9\u05D9\u05DC');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementContainerEnd']();
          }

          if (rf & 2) {
            var participate_r231 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']().$implicit;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate1'](
              ' ',
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpipeBind1'](5, 2, participate_r231.phoneNumber),
              ' '
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate1'](' ', participate_r231.email, ' ');
          }
        }

        function MeetingParticipatesListComponent_div_8_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div', 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](1, 'div', 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](2, 'span', 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](3, '\u05E9\u05DD \u05DE\u05DC\u05D0');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](4, 'span', 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](6, 'div', 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](7, 'span', 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
              8,
              '\u05DE\u05E1\u05E4\u05E8 \u05DE\u05E9\u05EA\u05EA\u05E4\u05D9\u05DD'
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
              10,
              MeetingParticipatesListComponent_div_8_ng_container_10_Template,
              10,
              4,
              'ng-container',
              4
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }

          if (rf & 2) {
            var participate_r231 = ctx.$implicit;

            var ctx_r230 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate1'](
              ' ',
              participate_r231.firstName + ' ' + participate_r231.lastName,
              ' '
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate1'](
              ' ',
              participate_r231.accompanies + 1,
              ' '
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
              'ngIf',
              ctx_r230.user.id === ctx_r230.meeting.hostId || ctx_r230.user.isAdmin
            );
          }
        }

        var MeetingParticipatesListComponent = function MeetingParticipatesListComponent() {
          _classCallCheck(this, MeetingParticipatesListComponent);
        };

        MeetingParticipatesListComponent.ɵfac = function MeetingParticipatesListComponent_Factory(t) {
          return new (t || MeetingParticipatesListComponent)();
        };

        MeetingParticipatesListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineComponent']({
          type: MeetingParticipatesListComponent,
          selectors: [['app-meeting-participates-list']],
          inputs: {
            user: 'user',
            meeting: 'meeting',
            meetingParticipates: 'meetingParticipates'
          },
          decls: 9,
          vars: 4,
          consts: [
            [1, 'list-container'],
            [1, 'header'],
            [1, 'col', 'col-name'],
            [1, 'col', 'col-capacity'],
            [4, 'ngIf'],
            [1, 'body'],
            ['class', 'row', 4, 'ngFor', 'ngForOf'],
            [1, 'col', 'col-phone'],
            [1, 'col', 'col-email'],
            [1, 'row'],
            [1, 'mobile-label'],
            [1, 'name']
          ],
          template: function MeetingParticipatesListComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div', 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](1, 'div', 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](2, 'div', 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](3, ' \u05E9\u05DD \u05DE\u05DC\u05D0 ');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](4, 'div', 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                5,
                ' \u05DE\u05E1\u05E4\u05E8 \u05DE\u05E9\u05EA\u05EA\u05E4\u05D9\u05DD '
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                6,
                MeetingParticipatesListComponent_ng_container_6_Template,
                5,
                0,
                'ng-container',
                4
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](7, 'div', 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                8,
                MeetingParticipatesListComponent_div_8_Template,
                11,
                3,
                'div',
                6
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵclassProp'](
                'extended',
                ctx.user.id === ctx.meeting.hostId || ctx.user.isAdmin
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
                'ngIf',
                ctx.user.id === ctx.meeting.hostId || ctx.user.isAdmin
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngForOf', ctx.meetingParticipates);
            }
          },
          directives: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__['NgIf'],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__['NgForOf']
          ],
          pipes: [_shared_pipes_phone_pipe__WEBPACK_IMPORTED_MODULE_2__['PhonePipe']],
          styles: [
            '.list-container[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  max-width: 600px;\n  margin-bottom: 20px;\n}\n.list-container.extended[_ngcontent-%COMP%] {\n  max-width: 770px;\n}\n.list-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  height: 50px;\n  font-size: 19px;\n  font-family: "Heebo";\n  color: #818181;\n}\n@media only screen and (max-width: 768px) {\n  .list-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.list-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.list-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .col.col-name[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.list-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .col.col-capacity[_ngcontent-%COMP%] {\n  flex: 0 0 170px;\n}\n.list-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .col.col-phone[_ngcontent-%COMP%] {\n  flex: 0 0 150px;\n}\n.list-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .col.col-email[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.list-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 20px 0;\n  border-top: 1px solid #cccdce;\n}\n.list-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]:last-child() {\n  border-bottom: 1px solid #cccdce;\n}\n@media only screen and (max-width: 768px) {\n  .list-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    margin: 15px;\n  }\n}\n.list-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n  font-size: 19px;\n  font-family: "Heebo";\n  color: #818181;\n}\n@media only screen and (max-width: 768px) {\n  .list-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n    width: auto !important;\n  }\n}\n.list-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .mobile-label[_ngcontent-%COMP%] {\n  display: none;\n}\n.list-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .mobile-label[_ngcontent-%COMP%]::after {\n  content: ":";\n}\n@media only screen and (max-width: 768px) {\n  .list-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .mobile-label[_ngcontent-%COMP%] {\n    display: inline;\n  }\n}\n.list-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col.col-name[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.list-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col.col-name[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-size: 23px;\n  font-family: "arbel";\n  color: #00736d;\n}\n.list-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col.col-capacity[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  width: 170px;\n  text-align: center;\n}\n.list-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col.col-phone[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  width: 150px;\n  text-align: center;\n}\n.list-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col.col-email[_ngcontent-%COMP%] {\n  flex: 1;\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFwLW1lZXRpbmcvbWFwLW1lZXRpbmctcGFydGljaXBhdGVzLWxpc3QvQzpcXFVzZXJzXFxUZWhpbGFcXGxhc3RcXG91ckJyb1xcb3VyLWJyb3RoZXJzLXdlYi9zcmNcXGFwcFxcbWFwLW1lZXRpbmdcXG1hcC1tZWV0aW5nLXBhcnRpY2lwYXRlcy1saXN0XFxtYXAtbWVldGluZy1wYXJ0aWNpcGF0ZXMtbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFwLW1lZXRpbmcvbWFwLW1lZXRpbmctcGFydGljaXBhdGVzLWxpc3QvbWFwLW1lZXRpbmctcGFydGljaXBhdGVzLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NGO0FEQ0U7RUFDRSxnQkFBQTtBQ0NKO0FERUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtBQ0FKO0FERUk7RUFSRjtJQVNJLGFBQUE7RUNDSjtBQUNGO0FEQ0k7RUFDRSxrQkFBQTtBQ0NOO0FEQ007RUFDRSxPQUFBO0FDQ1I7QURFTTtFQUNFLGVBQUE7QUNBUjtBREdNO0VBQ0UsZUFBQTtBQ0RSO0FESU07RUFDRSxPQUFBO0FDRlI7QURPRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtBQ0xKO0FET0k7RUFDRSxnQ0FBQTtBQ0xOO0FEUUk7RUFWRjtJQVdJLHNCQUFBO0lBQ0EsdUJBQUE7SUFDQSxZQUFBO0VDTEo7QUFDRjtBRE9JO0VBQ0UsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtBQ0xOO0FET007RUFMRjtJQU1JLHNCQUFBO0VDSk47QUFDRjtBRE1NO0VBQ0UsYUFBQTtBQ0pSO0FETVE7RUFDRSxZQUFBO0FDSlY7QURPUTtFQVBGO0lBUUksZUFBQTtFQ0pSO0FBQ0Y7QURPTTtFQUNFLE9BQUE7QUNMUjtBRE9RO0VBQ0UsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtBQ0xWO0FEU007RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDUFI7QURVTTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNSUjtBRFdNO0VBQ0UsT0FBQTtFQUNBLGdCQUFBO0FDVFIiLCJmaWxlIjoic3JjL2FwcC9tYXAtbWVldGluZy9tYXAtbWVldGluZy1wYXJ0aWNpcGF0ZXMtbGlzdC9tYXAtbWVldGluZy1wYXJ0aWNpcGF0ZXMtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saXN0LWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgbWF4LXdpZHRoOiA2MDBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5cclxuICAmLmV4dGVuZGVkIHtcclxuICAgIG1heC13aWR0aDogNzcwcHg7XHJcbiAgfVxyXG5cclxuICAuaGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdIZWVibyc7XHJcbiAgICBjb2xvcjogcmdiKDEyOSwgMTI5LCAxMjkpO1xyXG5cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAuY29sIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgICAgJi5jb2wtbmFtZSB7XHJcbiAgICAgICAgZmxleDogMTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5jb2wtY2FwYWNpdHkge1xyXG4gICAgICAgIGZsZXg6IDAgMCAxNzBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5jb2wtcGhvbmUge1xyXG4gICAgICAgIGZsZXg6IDAgMCAxNTBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5jb2wtZW1haWwge1xyXG4gICAgICAgIGZsZXg6IDE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5yb3cge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2NjY2RjZTtcclxuXHJcbiAgICAmOmxhc3QtY2hpbGQoKSB7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjZGNlO1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgIG1hcmdpbjogMTVweDtcclxuICAgIH1cclxuXHJcbiAgICAuY29sIHtcclxuICAgICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgICBmb250LWZhbWlseTogJ0hlZWJvJztcclxuICAgICAgY29sb3I6IHJnYigxMjksIDEyOSwgMTI5KTtcclxuXHJcbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubW9iaWxlLWxhYmVsIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG5cclxuICAgICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgICBjb250ZW50OiAnOic7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmNvbC1uYW1lIHtcclxuICAgICAgICBmbGV4OiAxO1xyXG5cclxuICAgICAgICAubmFtZSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDIzcHg7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogJ2FyYmVsJztcclxuICAgICAgICAgIGNvbG9yOiByZ2IoMCwgMTE1LCAxMDkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgJi5jb2wtY2FwYWNpdHkge1xyXG4gICAgICAgIGZsZXg6IDAgMCBhdXRvO1xyXG4gICAgICAgIHdpZHRoOiAxNzBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuY29sLXBob25lIHtcclxuICAgICAgICBmbGV4OiAwIDAgYXV0bztcclxuICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmNvbC1lbWFpbCB7XHJcbiAgICAgICAgZmxleDogMTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi5saXN0LWNvbnRhaW5lciB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXgtd2lkdGg6IDYwMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLmxpc3QtY29udGFpbmVyLmV4dGVuZGVkIHtcbiAgbWF4LXdpZHRoOiA3NzBweDtcbn1cbi5saXN0LWNvbnRhaW5lciAuaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiA1MHB4O1xuICBmb250LXNpemU6IDE5cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkhlZWJvXCI7XG4gIGNvbG9yOiAjODE4MTgxO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAubGlzdC1jb250YWluZXIgLmhlYWRlciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuLmxpc3QtY29udGFpbmVyIC5oZWFkZXIgLmNvbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5saXN0LWNvbnRhaW5lciAuaGVhZGVyIC5jb2wuY29sLW5hbWUge1xuICBmbGV4OiAxO1xufVxuLmxpc3QtY29udGFpbmVyIC5oZWFkZXIgLmNvbC5jb2wtY2FwYWNpdHkge1xuICBmbGV4OiAwIDAgMTcwcHg7XG59XG4ubGlzdC1jb250YWluZXIgLmhlYWRlciAuY29sLmNvbC1waG9uZSB7XG4gIGZsZXg6IDAgMCAxNTBweDtcbn1cbi5saXN0LWNvbnRhaW5lciAuaGVhZGVyIC5jb2wuY29sLWVtYWlsIHtcbiAgZmxleDogMTtcbn1cbi5saXN0LWNvbnRhaW5lciAucm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMjBweCAwO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2NjY2RjZTtcbn1cbi5saXN0LWNvbnRhaW5lciAucm93Omxhc3QtY2hpbGQoKSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjZGNlO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAubGlzdC1jb250YWluZXIgLnJvdyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBtYXJnaW46IDE1cHg7XG4gIH1cbn1cbi5saXN0LWNvbnRhaW5lciAucm93IC5jb2wge1xuICBmb250LXNpemU6IDE5cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkhlZWJvXCI7XG4gIGNvbG9yOiAjODE4MTgxO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAubGlzdC1jb250YWluZXIgLnJvdyAuY29sIHtcbiAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xuICB9XG59XG4ubGlzdC1jb250YWluZXIgLnJvdyAuY29sIC5tb2JpbGUtbGFiZWwge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmxpc3QtY29udGFpbmVyIC5yb3cgLmNvbCAubW9iaWxlLWxhYmVsOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiOlwiO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAubGlzdC1jb250YWluZXIgLnJvdyAuY29sIC5tb2JpbGUtbGFiZWwge1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgfVxufVxuLmxpc3QtY29udGFpbmVyIC5yb3cgLmNvbC5jb2wtbmFtZSB7XG4gIGZsZXg6IDE7XG59XG4ubGlzdC1jb250YWluZXIgLnJvdyAuY29sLmNvbC1uYW1lIC5uYW1lIHtcbiAgZm9udC1zaXplOiAyM3B4O1xuICBmb250LWZhbWlseTogXCJhcmJlbFwiO1xuICBjb2xvcjogIzAwNzM2ZDtcbn1cbi5saXN0LWNvbnRhaW5lciAucm93IC5jb2wuY29sLWNhcGFjaXR5IHtcbiAgZmxleDogMCAwIGF1dG87XG4gIHdpZHRoOiAxNzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmxpc3QtY29udGFpbmVyIC5yb3cgLmNvbC5jb2wtcGhvbmUge1xuICBmbGV4OiAwIDAgYXV0bztcbiAgd2lkdGg6IDE1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubGlzdC1jb250YWluZXIgLnJvdyAuY29sLmNvbC1lbWFpbCB7XG4gIGZsZXg6IDE7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59Il19 */'
          ],
          changeDetection: 0
        });
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            MeetingParticipatesListComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                args: [
                  {
                    selector: 'app-meeting-participates-list',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__['ChangeDetectionStrategy'].OnPush,
                    templateUrl: './map-meeting-participates-list.component.html',
                    styleUrls: ['./map-meeting-participates-list.component.scss']
                  }
                ]
              }
            ],
            null,
            {
              user: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input']
                }
              ],
              meeting: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input']
                }
              ],
              meetingParticipates: [
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
    './src/app/map-meeting/map-meeting.module.ts':
      /*!***************************************************!*\
    !*** ./src/app/map-meeting/map-meeting.module.ts ***!
    \***************************************************/

      /*! exports provided: MapMeetingModule */

      /***/
      function srcAppMapMeetingMapMeetingModuleTs(module, __webpack_exports__, __webpack_require__) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'MapMeetingModule', function() {
          return MapMeetingModule;
        });
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */

        var _host_map_meeting_input_text_host_map_meeting_input_text_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./host-map-meeting-input-text/host-map-meeting-input-text.component */
          './src/app/map-meeting/host-map-meeting-input-text/host-map-meeting-input-text.component.ts'
        );
        /* harmony import */

        var _map_meeting_participates_list_map_meeting_participates_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./map-meeting-participates-list/map-meeting-participates-list.component */
          './src/app/map-meeting/map-meeting-participates-list/map-meeting-participates-list.component.ts'
        );
        /* harmony import */

        var _shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../shared/pipes/pipes.module */
          './src/app/shared/pipes/pipes.module.ts'
        );
        /* harmony import */

        var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @angular/common */
          './node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js'
        );

        var api = [
          _host_map_meeting_input_text_host_map_meeting_input_text_component__WEBPACK_IMPORTED_MODULE_1__[
            'HostMapMeetingInputTextComponent'
          ],
          _map_meeting_participates_list_map_meeting_participates_list_component__WEBPACK_IMPORTED_MODULE_2__[
            'MeetingParticipatesListComponent'
          ]
        ];

        var MapMeetingModule = function MapMeetingModule() {
          _classCallCheck(this, MapMeetingModule);
        };

        MapMeetingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineNgModule']({
          type: MapMeetingModule
        });
        MapMeetingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineInjector']({
          factory: function MapMeetingModule_Factory(t) {
            return new (t || MapMeetingModule)();
          },
          imports: [
            [
              _shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_3__['PipesModule'],
              _angular_common__WEBPACK_IMPORTED_MODULE_4__['CommonModule']
            ]
          ]
        });

        (function() {
          (typeof ngJitMode === 'undefined' || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵsetNgModuleScope'](MapMeetingModule, {
              declarations: [
                _host_map_meeting_input_text_host_map_meeting_input_text_component__WEBPACK_IMPORTED_MODULE_1__[
                  'HostMapMeetingInputTextComponent'
                ],
                _map_meeting_participates_list_map_meeting_participates_list_component__WEBPACK_IMPORTED_MODULE_2__[
                  'MeetingParticipatesListComponent'
                ]
              ],
              imports: [
                _shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_3__['PipesModule'],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__['CommonModule']
              ],
              exports: [
                _host_map_meeting_input_text_host_map_meeting_input_text_component__WEBPACK_IMPORTED_MODULE_1__[
                  'HostMapMeetingInputTextComponent'
                ],
                _map_meeting_participates_list_map_meeting_participates_list_component__WEBPACK_IMPORTED_MODULE_2__[
                  'MeetingParticipatesListComponent'
                ]
              ]
            });
        })();
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            MapMeetingModule,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'],
                args: [
                  {
                    declarations: api,
                    imports: [
                      _shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_3__['PipesModule'],
                      _angular_common__WEBPACK_IMPORTED_MODULE_4__['CommonModule']
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
    './src/app/map-meeting/page/map-meeting-page.component.ts':
      /*!****************************************************************!*\
    !*** ./src/app/map-meeting/page/map-meeting-page.component.ts ***!
    \****************************************************************/

      /*! exports provided: MapMeetingPageComponent */

      /***/
      function srcAppMapMeetingPageMapMeetingPageComponentTs(module, __webpack_exports__, __webpack_require__) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'MapMeetingPageComponent', function() {
          return MapMeetingPageComponent;
        });
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */

        var _shared_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../shared/constants */
          './src/app/shared/constants.ts'
        );
        /* harmony import */

        var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/router */
          './node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js'
        );
        /* harmony import */

        var _shared_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../shared/services/data.service */
          './src/app/shared/services/data.service.ts'
        );
        /* harmony import */

        var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ngx-toastr */
          './node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js'
        );
        /* harmony import */

        var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../shared/services/auth.service */
          './src/app/shared/services/auth.service.ts'
        );
        /* harmony import */

        var _shared_components_meetings_meetings_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../shared/components/meetings/meetings.component */
          './src/app/shared/components/meetings/meetings.component.ts'
        );

        var oneWeek = 1000 * 60 * 60 * 24 * 7;

        var MapMeetingPageComponent = /*#__PURE__*/ (function() {
          function MapMeetingPageComponent(router, dataService, toastr, authService) {
            _classCallCheck(this, MapMeetingPageComponent);

            this.router = router;
            this.dataService = dataService;
            this.toastr = toastr;
            this.authService = authService;
            this.loadingUser = true;
            this.mapShowGuide = false;
            this.year = _shared_constants__WEBPACK_IMPORTED_MODULE_1__['MEMORIAL_YEAR'];
          }

          _createClass(MapMeetingPageComponent, [
            {
              key: 'ngOnInit',
              value: function ngOnInit() {
                var _this7 = this;

                this.authService.user.subscribe(function(user) {
                  _this7.user = user;
                  _this7.loadingUser = false;

                  if (
                    !_this7.mapShowGuide &&
                    !(user && user.meetingMapGuideLastVisit && Date.now() - user.meetingMapGuideLastVisit < oneWeek)
                  ) {
                    _this7.mapShowGuide = true;
                  }
                });
                this.dataService.getMeetings().subscribe(function(meetings) {
                  _this7.meetings = meetings;
                });
              }
            },
            {
              key: 'onMapGuideCompleted',
              value: function onMapGuideCompleted() {
                this.mapShowGuide = true;

                if (this.user && this.user.id) {
                  this.dataService.updateUserMapGuideLastVisit(this.user.id);
                }
              }
            },
            {
              key: 'onJoinMeeting',
              value: function onJoinMeeting(meeting) {
                var _this8 = this;

                if (meeting && this.user) {
                  if (window.confirm('האם ברצונך להשתבץ למפגש?')) {
                    (this.user.role === 'bereaved'
                      ? this.dataService.bereavedJoinMeeting(this.user, meeting)
                      : this.dataService.participateJoinMeeting(this.user, meeting, this.getAccompanies())
                    ).subscribe(
                      function() {
                        _this8.toastr.success('שובצת בהצלחה');

                        _this8.router.navigate([
                          'meetings/'
                            .concat(_this8.year, '/')
                            .concat(meeting.hostId, '/')
                            .concat(meeting.id)
                        ]);
                      },
                      function() {
                        _this8.toastr.error('שגיאה - לא ניתן להשתבץ למפגש. נא ליצור קשר');
                      }
                    );
                  }
                }
              }
            },
            {
              key: 'getAccompanies',
              value: function getAccompanies() {
                var accompaniesAnswer = window.prompt('האם יגיעו איתך אנשים נוספים?', '0');
                var number = Number.parseInt(accompaniesAnswer);

                while (!(!Number.isNaN(number) && number >= 0 && number <= 7)) {
                  accompaniesAnswer = window.prompt('נא להזין מספר משתתפים בין 0 ל-7', '0');
                  number = Number.parseInt(accompaniesAnswer);
                }

                return number;
              }
            }
          ]);

          return MapMeetingPageComponent;
        })();

        MapMeetingPageComponent.ɵfac = function MapMeetingPageComponent_Factory(t) {
          return new (t || MapMeetingPageComponent)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
              _angular_router__WEBPACK_IMPORTED_MODULE_2__['Router']
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
              _shared_services_data_service__WEBPACK_IMPORTED_MODULE_3__['DataService']
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
              ngx_toastr__WEBPACK_IMPORTED_MODULE_4__['ToastrService']
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
              _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_5__['AuthService']
            )
          );
        };

        MapMeetingPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineComponent']({
          type: MapMeetingPageComponent,
          selectors: [['app-map-meeting-page']],
          decls: 6,
          vars: 3,
          consts: [
            ['src', '../../../assets/img/meetingsHeader.jpg', 'alt', 'Meetings Page Header Image', 1, 'image-header'],
            [1, 'site-divider'],
            [1, 'medium-heading'],
            [1, 'container', 'meetings-container'],
            [3, 'user', 'meetings', 'mapShowGuide', 'joinMeeting', 'guideCompleted']
          ],
          template: function MapMeetingPageComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](0, 'img', 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](1, 'div', 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](2, 'h2', 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                3,
                '\u05DE\u05E4\u05EA \u05D4\u05DE\u05E4\u05D2\u05E9\u05D9\u05DD'
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](4, 'section', 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](5, 'app-meetings', 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'joinMeeting',
                function MapMeetingPageComponent_Template_app_meetings_joinMeeting_5_listener($event) {
                  return ctx.onJoinMeeting($event);
                }
              )('guideCompleted', function MapMeetingPageComponent_Template_app_meetings_guideCompleted_5_listener() {
                return ctx.onMapGuideCompleted();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('user', ctx.user)('meetings', ctx.meetings)(
                'mapShowGuide',
                ctx.mapShowGuide
              );
            }
          },
          directives: [
            _shared_components_meetings_meetings_component__WEBPACK_IMPORTED_MODULE_6__['MeetingsComponent']
          ],
          styles: [
            '.participations-buttons[_ngcontent-%COMP%] {\n  margin-top: 60px;\n}\n\n@media only screen and (max-width: 768px) {\n  .medium-heading[_ngcontent-%COMP%] {\n    margin-left: 20px;\n    margin-right: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFwLW1lZXRpbmcvcGFnZS9DOlxcVXNlcnNcXFRlaGlsYVxcbGFzdFxcb3VyQnJvXFxvdXItYnJvdGhlcnMtd2ViL3NyY1xcYXBwXFxtYXAtbWVldGluZ1xccGFnZVxcbWFwLW1lZXRpbmctcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFwLW1lZXRpbmcvcGFnZS9tYXAtbWVldGluZy1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUNDRjs7QURHRTtFQURGO0lBRUksaUJBQUE7SUFDQSxrQkFBQTtFQ0NGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tYXAtbWVldGluZy9wYWdlL21hcC1tZWV0aW5nLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFydGljaXBhdGlvbnMtYnV0dG9ucyB7XHJcbiAgbWFyZ2luLXRvcDogNjBweDtcclxufVxyXG5cclxuLm1lZGl1bS1oZWFkaW5nIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICB9XHJcbn1cclxuIiwiLnBhcnRpY2lwYXRpb25zLWJ1dHRvbnMge1xuICBtYXJnaW4tdG9wOiA2MHB4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5tZWRpdW0taGVhZGluZyB7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICB9XG59Il19 */'
          ]
        });
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            MapMeetingPageComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                args: [
                  {
                    selector: 'app-map-meeting-page',
                    templateUrl: './map-meeting-page.component.html',
                    styleUrls: ['./map-meeting-page.component.scss']
                  }
                ]
              }
            ],
            function() {
              return [
                {
                  type: _angular_router__WEBPACK_IMPORTED_MODULE_2__['Router']
                },
                {
                  type: _shared_services_data_service__WEBPACK_IMPORTED_MODULE_3__['DataService']
                },
                {
                  type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__['ToastrService']
                },
                {
                  type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_5__['AuthService']
                }
              ];
            },
            null
          );
        })();
        /***/
      },

    /***/
    './src/app/map-meeting/page/map-meeting-page.module.ts':
      /*!*************************************************************!*\
    !*** ./src/app/map-meeting/page/map-meeting-page.module.ts ***!
    \*************************************************************/

      /*! exports provided: MapMeetingPageModule */

      /***/
      function srcAppMapMeetingPageMapMeetingPageModuleTs(module, __webpack_exports__, __webpack_require__) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'MapMeetingPageModule', function() {
          return MapMeetingPageModule;
        });
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */

        var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/router */
          './node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js'
        );
        /* harmony import */

        var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/common */
          './node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js'
        );
        /* harmony import */

        var _map_meeting_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./map-meeting-page.component */
          './src/app/map-meeting/page/map-meeting-page.component.ts'
        );
        /* harmony import */

        var _shared_components_participations_buttons_participations_buttons_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../shared/components/participations-buttons/participations-buttons.module */
          './src/app/shared/components/participations-buttons/participations-buttons.module.ts'
        );
        /* harmony import */

        var _shared_components_meetings_meetings_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../shared/components/meetings/meetings-components.module */
          './src/app/shared/components/meetings/meetings-components.module.ts'
        );
        /* harmony import */

        var _details_page_map_meeting_details_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../details-page/map-meeting-details-page.component */
          './src/app/map-meeting/details-page/map-meeting-details-page.component.ts'
        );
        /* harmony import */

        var _shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../shared/pipes/pipes.module */
          './src/app/shared/pipes/pipes.module.ts'
        );
        /* harmony import */

        var _map_meeting_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../map-meeting.module */
          './src/app/map-meeting/map-meeting.module.ts'
        );
        /* harmony import */

        var _shared_components_remove_button_remove_button_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../shared/components/remove-button/remove-button.module */
          './src/app/shared/components/remove-button/remove-button.module.ts'
        );
        /* harmony import */

        var _shared_components_meeting_join_button_meeting_join_button_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../shared/components/meeting-join-button/meeting-join-button.module */
          './src/app/shared/components/meeting-join-button/meeting-join-button.module.ts'
        );

        var routes = [
          {
            path: '',
            component: _map_meeting_page_component__WEBPACK_IMPORTED_MODULE_3__['MapMeetingPageComponent']
          },
          {
            path: ':memorialYear/:hostId/:meetingId',
            component:
              _details_page_map_meeting_details_page_component__WEBPACK_IMPORTED_MODULE_6__[
                'MapMeetingDetailsPageComponent'
              ]
          }
        ];

        var MapMeetingPageModule = function MapMeetingPageModule() {
          _classCallCheck(this, MapMeetingPageModule);
        };

        MapMeetingPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineNgModule']({
          type: MapMeetingPageModule
        });
        MapMeetingPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineInjector']({
          factory: function MapMeetingPageModule_Factory(t) {
            return new (t || MapMeetingPageModule)();
          },
          imports: [
            [
              _map_meeting_module__WEBPACK_IMPORTED_MODULE_8__['MapMeetingModule'],
              _shared_components_participations_buttons_participations_buttons_module__WEBPACK_IMPORTED_MODULE_4__[
                'ParticipationsButtonsModule'
              ],
              _shared_components_meetings_meetings_components_module__WEBPACK_IMPORTED_MODULE_5__[
                'MeetingsComponentsModule'
              ],
              _shared_components_remove_button_remove_button_module__WEBPACK_IMPORTED_MODULE_9__['RemoveButtonModule'],
              _shared_components_meeting_join_button_meeting_join_button_module__WEBPACK_IMPORTED_MODULE_10__[
                'MeetingJoinButtonModule'
              ],
              _angular_router__WEBPACK_IMPORTED_MODULE_1__['RouterModule'].forChild(routes),
              _angular_common__WEBPACK_IMPORTED_MODULE_2__['CommonModule'],
              _shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__['PipesModule']
            ]
          ]
        });

        (function() {
          (typeof ngJitMode === 'undefined' || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵsetNgModuleScope'](MapMeetingPageModule, {
              declarations: [
                _map_meeting_page_component__WEBPACK_IMPORTED_MODULE_3__['MapMeetingPageComponent'],
                _details_page_map_meeting_details_page_component__WEBPACK_IMPORTED_MODULE_6__[
                  'MapMeetingDetailsPageComponent'
                ]
              ],
              imports: [
                _map_meeting_module__WEBPACK_IMPORTED_MODULE_8__['MapMeetingModule'],
                _shared_components_participations_buttons_participations_buttons_module__WEBPACK_IMPORTED_MODULE_4__[
                  'ParticipationsButtonsModule'
                ],
                _shared_components_meetings_meetings_components_module__WEBPACK_IMPORTED_MODULE_5__[
                  'MeetingsComponentsModule'
                ],
                _shared_components_remove_button_remove_button_module__WEBPACK_IMPORTED_MODULE_9__[
                  'RemoveButtonModule'
                ],
                _shared_components_meeting_join_button_meeting_join_button_module__WEBPACK_IMPORTED_MODULE_10__[
                  'MeetingJoinButtonModule'
                ],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__['RouterModule'],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__['CommonModule'],
                _shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__['PipesModule']
              ]
            });
        })();
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            MapMeetingPageModule,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'],
                args: [
                  {
                    imports: [
                      _map_meeting_module__WEBPACK_IMPORTED_MODULE_8__['MapMeetingModule'],
                      _shared_components_participations_buttons_participations_buttons_module__WEBPACK_IMPORTED_MODULE_4__[
                        'ParticipationsButtonsModule'
                      ],
                      _shared_components_meetings_meetings_components_module__WEBPACK_IMPORTED_MODULE_5__[
                        'MeetingsComponentsModule'
                      ],
                      _shared_components_remove_button_remove_button_module__WEBPACK_IMPORTED_MODULE_9__[
                        'RemoveButtonModule'
                      ],
                      _shared_components_meeting_join_button_meeting_join_button_module__WEBPACK_IMPORTED_MODULE_10__[
                        'MeetingJoinButtonModule'
                      ],
                      _angular_router__WEBPACK_IMPORTED_MODULE_1__['RouterModule'].forChild(routes),
                      _angular_common__WEBPACK_IMPORTED_MODULE_2__['CommonModule'],
                      _shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__['PipesModule']
                    ],
                    declarations: [
                      _map_meeting_page_component__WEBPACK_IMPORTED_MODULE_3__['MapMeetingPageComponent'],
                      _details_page_map_meeting_details_page_component__WEBPACK_IMPORTED_MODULE_6__[
                        'MapMeetingDetailsPageComponent'
                      ]
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
//# sourceMappingURL=map-meeting-page-map-meeting-page-module-es5.js.map
