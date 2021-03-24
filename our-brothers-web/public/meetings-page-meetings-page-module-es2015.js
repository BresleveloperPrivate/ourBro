(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['meetings-page-meetings-page-module'],
  {
    /***/ './src/app/meetings/details-page/meeting-details-page.component.ts':
      /*!*************************************************************************!*\
  !*** ./src/app/meetings/details-page/meeting-details-page.component.ts ***!
  \*************************************************************************/
      /*! exports provided: MeetingDetailsPageComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'MeetingDetailsPageComponent',
          function() {
            return MeetingDetailsPageComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/router */ './node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js'
        );
        /* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ngx-toastr */ './node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js'
        );
        /* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../shared/services/auth.service */ './src/app/shared/services/auth.service.ts'
        );
        /* harmony import */ var _shared_services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../shared/services/data.service */ './src/app/shared/services/data.service.ts'
        );
        /* harmony import */ var _shared_services_utils_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../shared/services/utils.service */ './src/app/shared/services/utils.service.ts'
        );
        /* harmony import */ var src_app_shared_services_participations_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! src/app/shared/services/participations.service */ './src/app/shared/services/participations.service.ts'
        );
        /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! @angular/common */ './node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js'
        );
        /* harmony import */ var _host_meeting_input_text_host_meeting_input_text_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../host-meeting-input-text/host-meeting-input-text.component */ './src/app/meetings/host-meeting-input-text/host-meeting-input-text.component.ts'
        );
        /* harmony import */ var _shared_components_remove_button_remove_button_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../shared/components/remove-button/remove-button.component */ './src/app/shared/components/remove-button/remove-button.component.ts'
        );
        /* harmony import */ var _shared_components_meeting_join_button_meeting_join_button_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../shared/components/meeting-join-button/meeting-join-button.component */ './src/app/shared/components/meeting-join-button/meeting-join-button.component.ts'
        );
        /* harmony import */ var _meeting_participates_list_meeting_participates_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../meeting-participates-list/meeting-participates-list.component */ './src/app/meetings/meeting-participates-list/meeting-participates-list.component.ts'
        );
        /* harmony import */ var _shared_pipes_phone_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../shared/pipes/phone.pipe */ './src/app/shared/pipes/phone.pipe.ts'
        );

        function MeetingDetailsPageComponent_span_3_ng_container_1_Template(rf, ctx) {
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
            const ctx_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext'](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate1'](
              ' ',
              ctx_r155.meeting == null ? null : ctx_r155.meeting.title,
              ' '
            );
          }
        }
        function MeetingDetailsPageComponent_span_3_ng_container_2_Template(rf, ctx) {
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
        function MeetingDetailsPageComponent_span_3_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'span');
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
              1,
              MeetingDetailsPageComponent_span_3_ng_container_1_Template,
              6,
              1,
              'ng-container',
              3
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
              2,
              MeetingDetailsPageComponent_span_3_ng_container_2_Template,
              2,
              1,
              'ng-container',
              3
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }
          if (rf & 2) {
            const ctx_r153 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngIf', ctx_r153.meeting);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngIf', !ctx_r153.meeting);
          }
        }
        function MeetingDetailsPageComponent_div_4_div_1_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div', 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](1, 'div', 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](2, 'app-host-meeting-input-text', 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](3, 'div', 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](4, 'app-host-meeting-input-text', 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpipe'](5, 'phone');
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }
          if (rf & 2) {
            const ctx_r157 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext'](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
              'text',
              (ctx_r157.meeting == null ? null : ctx_r157.meeting.contact.firstName) +
                ' ' +
                (ctx_r157.meeting == null ? null : ctx_r157.meeting.contact.lastName)
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
              'text',
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpipeBind1'](
                5,
                2,
                ctx_r157.meeting == null
                  ? null
                  : ctx_r157.meeting.contact == null
                  ? null
                  : ctx_r157.meeting.contact.phoneNumber
              )
            );
          }
        }
        function MeetingDetailsPageComponent_div_4_div_27_Template(rf, ctx) {
          if (rf & 1) {
            const _r162 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵgetCurrentView']();
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
              function MeetingDetailsPageComponent_div_4_div_27_Template_button_click_6_listener() {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵrestoreView'](_r162);
                const ctx_r161 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext'](2);
                return ctx_r161.onDelete();
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
            const ctx_r158 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext'](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
              'routerLink',
              '/host/' + ctx_r158.year + '/' + ctx_r158.meeting.hostId + '/' + ctx_r158.meeting.id
            );
          }
        }
        function MeetingDetailsPageComponent_div_4_ng_container_28_ng_container_3_div_4_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div', 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](1, 'app-host-meeting-input-text', 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }
          if (rf & 2) {
            const ctx_r165 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext'](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
              'text',
              ctx_r165.meeting.bereaved.slains[0].firstName +
                ' ' +
                ctx_r165.meeting.bereaved.slains[0].lastName +
                ' \u05D6"\u05DC'
            );
          }
        }
        function MeetingDetailsPageComponent_div_4_ng_container_28_ng_container_3_div_5_div_1_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div', 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](1, 'app-host-meeting-input-text', 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }
          if (rf & 2) {
            const slain_r168 = ctx.$implicit;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
              'text',
              slain_r168.firstName + ' ' + slain_r168.lastName + ' \u05D6"\u05DC'
            );
          }
        }
        function MeetingDetailsPageComponent_div_4_ng_container_28_ng_container_3_div_5_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div', 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
              1,
              MeetingDetailsPageComponent_div_4_ng_container_28_ng_container_3_div_5_div_1_Template,
              2,
              1,
              'div',
              26
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }
          if (rf & 2) {
            const ctx_r166 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext'](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngForOf', ctx_r166.meeting.bereaved.slains);
          }
        }
        function MeetingDetailsPageComponent_div_4_ng_container_28_ng_container_3_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementContainerStart'](0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](1, 'div', 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](2, 'div', 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](3, 'app-host-meeting-input-text', 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
              4,
              MeetingDetailsPageComponent_div_4_ng_container_28_ng_container_3_div_4_Template,
              2,
              1,
              'div',
              25
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
              5,
              MeetingDetailsPageComponent_div_4_ng_container_28_ng_container_3_div_5_Template,
              2,
              1,
              'div',
              6
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementContainerEnd']();
          }
          if (rf & 2) {
            const ctx_r163 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext'](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
              'text',
              (ctx_r163.meeting == null
              ? null
              : ctx_r163.meeting.bereaved)
                ? ctx_r163.meeting.bereaved.firstName + ' ' + ctx_r163.meeting.bereaved.lastName
                : ''
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
              'ngIf',
              (ctx_r163.meeting == null
                ? null
                : ctx_r163.meeting.bereaved == null
                ? null
                : ctx_r163.meeting.bereaved.slains == null
                ? null
                : ctx_r163.meeting.bereaved.slains.length) < 2
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
              'ngIf',
              (ctx_r163.meeting == null
                ? null
                : ctx_r163.meeting.bereaved == null
                ? null
                : ctx_r163.meeting.bereaved.slains == null
                ? null
                : ctx_r163.meeting.bereaved.slains.length) > 1
            );
          }
        }
        function MeetingDetailsPageComponent_div_4_ng_container_28_div_4_app_remove_button_3_Template(rf, ctx) {
          if (rf & 1) {
            const _r172 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵgetCurrentView']();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'app-remove-button', 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
              'remove',
              function MeetingDetailsPageComponent_div_4_ng_container_28_div_4_app_remove_button_3_Template_app_remove_button_remove_0_listener() {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵrestoreView'](_r172);
                const ctx_r171 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext'](4);
                return ctx_r171.onBereavedLeaveMeeting();
              }
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }
        }
        function MeetingDetailsPageComponent_div_4_ng_container_28_div_4_app_meeting_join_button_4_Template(rf, ctx) {
          if (rf & 1) {
            const _r174 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵgetCurrentView']();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'app-meeting-join-button', 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
              'join',
              function MeetingDetailsPageComponent_div_4_ng_container_28_div_4_app_meeting_join_button_4_Template_app_meeting_join_button_join_0_listener() {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵrestoreView'](_r174);
                const ctx_r173 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext'](4);
                return ctx_r173.onBereavedJoinMeeting();
              }
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }
          if (rf & 2) {
            const ctx_r170 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext'](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('user', ctx_r170.user)(
              'meeting',
              ctx_r170.meeting
            );
          }
        }
        function MeetingDetailsPageComponent_div_4_ng_container_28_div_4_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div', 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](1, 'div', 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](2, 'div', 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
              3,
              MeetingDetailsPageComponent_div_4_ng_container_28_div_4_app_remove_button_3_Template,
              1,
              0,
              'app-remove-button',
              27
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
              4,
              MeetingDetailsPageComponent_div_4_ng_container_28_div_4_app_meeting_join_button_4_Template,
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
            const ctx_r164 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext'](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
              'ngIf',
              ctx_r164.participationsService.isBereavedParticipatingMeeting(ctx_r164.user, ctx_r164.meeting)
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
              'ngIf',
              ctx_r164.participationsService.isBereavedCanParticipatingMeeting(ctx_r164.user, ctx_r164.meeting)
            );
          }
        }
        function MeetingDetailsPageComponent_div_4_ng_container_28_Template(rf, ctx) {
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
              MeetingDetailsPageComponent_div_4_ng_container_28_ng_container_3_Template,
              6,
              3,
              'ng-container',
              3
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
              4,
              MeetingDetailsPageComponent_div_4_ng_container_28_div_4_Template,
              5,
              2,
              'div',
              6
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementContainerEnd']();
          }
          if (rf & 2) {
            const ctx_r159 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext'](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
              'ngIf',
              ctx_r159.meeting == null ? null : ctx_r159.meeting.bereaved
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
              'ngIf',
              ctx_r159.participationsService.isBereavedParticipatingMeeting(ctx_r159.user, ctx_r159.meeting) ||
                ctx_r159.participationsService.isBereavedCanParticipatingMeeting(ctx_r159.user, ctx_r159.meeting)
            );
          }
        }
        function MeetingDetailsPageComponent_div_4_ng_container_29_div_4_app_remove_button_3_Template(rf, ctx) {
          if (rf & 1) {
            const _r179 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵgetCurrentView']();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'app-remove-button', 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
              'remove',
              function MeetingDetailsPageComponent_div_4_ng_container_29_div_4_app_remove_button_3_Template_app_remove_button_remove_0_listener() {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵrestoreView'](_r179);
                const ctx_r178 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext'](4);
                return ctx_r178.onParticipateLeaveMeeting();
              }
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }
        }
        function MeetingDetailsPageComponent_div_4_ng_container_29_div_4_app_meeting_join_button_4_Template(rf, ctx) {
          if (rf & 1) {
            const _r181 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵgetCurrentView']();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'app-meeting-join-button', 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
              'join',
              function MeetingDetailsPageComponent_div_4_ng_container_29_div_4_app_meeting_join_button_4_Template_app_meeting_join_button_join_0_listener() {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵrestoreView'](_r181);
                const ctx_r180 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext'](4);
                return ctx_r180.onParticipateJoinMeeting();
              }
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }
          if (rf & 2) {
            const ctx_r177 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext'](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('user', ctx_r177.user)(
              'meeting',
              ctx_r177.meeting
            );
          }
        }
        function MeetingDetailsPageComponent_div_4_ng_container_29_div_4_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div', 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](1, 'div', 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](2, 'div', 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
              3,
              MeetingDetailsPageComponent_div_4_ng_container_29_div_4_app_remove_button_3_Template,
              1,
              0,
              'app-remove-button',
              27
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
              4,
              MeetingDetailsPageComponent_div_4_ng_container_29_div_4_app_meeting_join_button_4_Template,
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
            const ctx_r175 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext'](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
              'ngIf',
              ctx_r175.participationsService.isParticipateParticipatingMeeting(ctx_r175.user, ctx_r175.meeting)
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
              'ngIf',
              ctx_r175.participationsService.isParticipateCanParticipatingMeeting(ctx_r175.user, ctx_r175.meeting)
            );
          }
        }
        function MeetingDetailsPageComponent_div_4_ng_container_29_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementContainerStart'](0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](1, 'div', 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](3, 'app-meeting-participates-list', 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
              4,
              MeetingDetailsPageComponent_div_4_ng_container_29_div_4_Template,
              5,
              2,
              'div',
              6
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementContainerEnd']();
          }
          if (rf & 2) {
            const ctx_r160 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext'](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate1'](
              '\u05E8\u05E9\u05D9\u05DE\u05EA \u05D4\u05DE\u05E9\u05EA\u05EA\u05E4\u05D9\u05DD \u05D1\u05D0\u05E8\u05D5\u05E2 (',
              (ctx_r160.meeting.count || 0) + '/' + ctx_r160.meeting.capacity,
              ')'
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('user', ctx_r160.user)(
              'meeting',
              ctx_r160.meeting
            )('meetingParticipates', ctx_r160.meetingParticipates);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
              'ngIf',
              ctx_r160.participationsService.isParticipateParticipatingMeeting(ctx_r160.user, ctx_r160.meeting) ||
                ctx_r160.participationsService.isParticipateCanParticipatingMeeting(ctx_r160.user, ctx_r160.meeting)
            );
          }
        }
        function MeetingDetailsPageComponent_div_4_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div', 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
              1,
              MeetingDetailsPageComponent_div_4_div_1_Template,
              6,
              4,
              'div',
              6
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](2, 'div', 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](3, 'div', 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](4, 'app-host-meeting-input-text', 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpipe'](5, 'date');
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](6, 'div', 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](7, 'app-host-meeting-input-text', 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpipe'](8, 'date');
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](9, 'div', 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](10, 'div', 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](11, 'app-host-meeting-input-text', 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](12, 'div', 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](13, 'app-host-meeting-input-text', 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](14, 'div', 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](15, 'div', 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](16, 'app-host-meeting-input-text', 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](17, 'div', 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](18, 'app-host-meeting-input-text', 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](19, 'div', 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](20, 'div', 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](21, 'app-host-meeting-input-text', 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](22, 'div', 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](23, 'app-host-meeting-input-text', 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](24, 'div', 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](25, 'div', 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](26, 'app-host-meeting-input-text', 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
              27,
              MeetingDetailsPageComponent_div_4_div_27_Template,
              9,
              1,
              'div',
              6
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
              28,
              MeetingDetailsPageComponent_div_4_ng_container_28_Template,
              5,
              2,
              'ng-container',
              3
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
              29,
              MeetingDetailsPageComponent_div_4_ng_container_29_Template,
              5,
              5,
              'ng-container',
              3
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }
          if (rf & 2) {
            const ctx_r154 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngIf', ctx_r154.extraData);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
              'text',
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpipeBind2'](
                5,
                13,
                ctx_r154.meeting == null ? null : ctx_r154.meeting.date,
                'dd.MM.yyyy'
              )
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
              'text',
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpipeBind2'](
                8,
                16,
                ctx_r154.meeting == null ? null : ctx_r154.meeting.date,
                'HH:mm'
              )
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
              'text',
              ctx_r154.meeting == null
                ? null
                : ctx_r154.meeting.address == null
                ? null
                : ctx_r154.meeting.address.formattedAddress
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
              'text',
              ctx_r154.meeting == null ? null : ctx_r154.meeting.capacity
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
              'text',
              (ctx_r154.meeting == null
              ? null
              : ctx_r154.meeting.invited)
                ? '\u05E1\u05D2\u05D5\u05E8 \u05DC\u05DE\u05D5\u05D6\u05DE\u05E0\u05D9\u05DD \u05D1\u05DC\u05D1\u05D3'
                : ''
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
              'text',
              (ctx_r154.meeting == null
              ? null
              : ctx_r154.meeting.accessibility)
                ? ' \u05E7\u05D9\u05D9\u05DD  '
                : '\u05DC\u05D0 \u05E7\u05D9\u05D9\u05DD'
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
              'text',
              (ctx_r154.meeting == null
              ? null
              : ctx_r154.meeting.media)
                ? ' \u05E7\u05D9\u05D9\u05DD  '
                : ' \u05DC\u05D0 \u05E7\u05D9\u05D9\u05DD'
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
              'text',
              (ctx_r154.meeting == null
              ? null
              : ctx_r154.meeting.reviewable)
                ? ' \u05DE\u05E1\u05DB\u05D9\u05DD'
                : ' \u05DC\u05D0 \u05DE\u05E1\u05DB\u05D9\u05DD'
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
              'text',
              ctx_r154.meeting ? ctx_r154.utilsService.meetingAudienceLabels[ctx_r154.meeting.audience] : ''
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
              'ngIf',
              ((ctx_r154.user == null ? null : ctx_r154.user.isAdmin) && ctx_r154.meeting) ||
                (ctx_r154.user == null ? null : ctx_r154.user.id) ===
                  (ctx_r154.meeting == null ? null : ctx_r154.meeting.hostId)
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
              'ngIf',
              (ctx_r154.meeting == null ? null : ctx_r154.meeting.bereaved) ||
                ctx_r154.participationsService.isBereavedCanParticipatingMeeting(ctx_r154.user, ctx_r154.meeting)
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
              'ngIf',
              ctx_r154.user &&
                !(ctx_r154.meeting == null ? null : ctx_r154.meeting.invited) &&
                (ctx_r154.meetingParticipates == null ? null : ctx_r154.meetingParticipates.length)
            );
          }
        }
        class MeetingDetailsPageComponent {
          constructor(router, activatedRoute, toastr, authService, dataService, utilsService, participationsService) {
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
          ngOnInit() {
            this.authService.user.subscribe(user => {
              this.extraData = this.extraData || user.isAdmin;
              return (this.user = user);
            });
            this.activatedRoute.params.subscribe(params => {
              const { hostId, meetingId, memorialYear } = params;
              this.year = memorialYear;
              if (this.getMeeting$) {
                this.getMeeting$.unsubscribe();
              }
              this.getMeeting$ = this.dataService.getMeeting(hostId, meetingId, this.year).subscribe(meeting => {
                this.loadingMeeting = false;
                this.extraData =
                  this.extraData ||
                  this.participationsService.isHostParticipatingMeeting(this.user, meeting) ||
                  this.participationsService.isBereavedParticipatingMeeting(this.user, meeting);
                return (this.meeting = meeting);
              });
              if (this.getMeetingParticipates$) {
                this.getMeetingParticipates$.unsubscribe();
              }
              this.getMeetingParticipates$ = this.dataService
                .getMeetingParticipates(hostId, meetingId, this.year)
                .subscribe(meetingParticipates => {
                  this.loadingMeetingParticipates = false;
                  return (this.meetingParticipates = meetingParticipates);
                });
            });
          }
          onDelete() {
            if (window.confirm('האם ברצונך למחוק את המפגש שלך? פעולה זאת לא ניתנת לשחזור ותמחוק את המפגש לגמרי')) {
              this.dataService.deleteMeeting(this.meeting.hostId, this.meeting.id, this.year).subscribe(
                () => {
                  this.toastr.success('מפגש נמחק בהצלחה!');
                  this.router.navigate(['/meetings']);
                },
                () => {
                  this.toastr.error('שגיאה - לא ניתן למחוק מפגש. נא ליצור קשר.');
                }
              );
            }
          }
          onBereavedLeaveMeeting() {
            if (this.meeting && this.user) {
              if (window.confirm('האם ברצונך לצאת מהמפגש?')) {
                this.dataService.bereavedLeaveMeeting(this.user, this.meeting).subscribe(
                  () => {
                    this.toastr.success('הוסרת מהמפגש בהצלחה');
                  },
                  () => {
                    this.toastr.error('שגיאה - לא ניתן לצאת מהמפגש. נא ליצור קשר');
                  }
                );
              }
            }
          }
          onParticipateLeaveMeeting() {
            if (this.meeting && this.user) {
              if (window.confirm('האם ברצונך לצאת מהמפגש?')) {
                this.dataService.participateLeaveMeeting(this.user, this.meeting).subscribe(
                  () => {
                    this.toastr.success('הוסרת מהמפגש בהצלחה');
                  },
                  () => {
                    this.toastr.error('שגיאה - לא ניתן לצאת מהמפגש. נא ליצור קשר');
                  }
                );
              }
            }
          }
          onBereavedJoinMeeting() {
            if (this.meeting && this.user) {
              if (window.confirm('האם ברצונך להשתבץ למפגש?')) {
                this.dataService.bereavedJoinMeeting(this.user, this.meeting).subscribe(
                  () => {
                    this.toastr.success('שובצת בהצלחה');
                  },
                  () => {
                    this.toastr.error('שגיאה - לא ניתן להשתבץ למפגש. נא ליצור קשר');
                  }
                );
              }
            }
          }
          onParticipateJoinMeeting() {
            if (this.meeting && this.user) {
              if (window.confirm('האם ברצונך להשתבץ למפגש?')) {
                this.dataService.participateJoinMeeting(this.user, this.meeting, this.getAccompanies()).subscribe(
                  () => {
                    this.toastr.success('שובצת בהצלחה');
                  },
                  () => {
                    this.toastr.error('שגיאה - לא ניתן להשתבץ למפגש. נא ליצור קשר');
                  }
                );
              }
            }
          }
          getAccompanies() {
            let accompaniesAnswer = window.prompt('האם יגיעו איתך אנשים נוספים?', '0');
            let number = Number.parseInt(accompaniesAnswer);
            while (!(!Number.isNaN(number) && number >= 0 && number <= 7)) {
              accompaniesAnswer = window.prompt('נא להזין מספר משתתפים בין 0 ל-7', '0');
              number = Number.parseInt(accompaniesAnswer);
            }
            return number;
          }
          ngOnDestroy() {
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
        MeetingDetailsPageComponent.ɵfac = function MeetingDetailsPageComponent_Factory(t) {
          return new (t || MeetingDetailsPageComponent)(
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
        MeetingDetailsPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineComponent']({
          type: MeetingDetailsPageComponent,
          selectors: [['app-meeting-details-page']],
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
          template: function MeetingDetailsPageComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](0, 'img', 0);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](1, 'div', 1);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](2, 'div', 2);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                3,
                MeetingDetailsPageComponent_span_3_Template,
                3,
                2,
                'span',
                3
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                4,
                MeetingDetailsPageComponent_div_4_Template,
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
            _host_meeting_input_text_host_meeting_input_text_component__WEBPACK_IMPORTED_MODULE_8__[
              'HostMeetingInputTextComponent'
            ],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__['RouterLinkWithHref'],
            _angular_common__WEBPACK_IMPORTED_MODULE_7__['NgForOf'],
            _shared_components_remove_button_remove_button_component__WEBPACK_IMPORTED_MODULE_9__[
              'RemoveButtonComponent'
            ],
            _shared_components_meeting_join_button_meeting_join_button_component__WEBPACK_IMPORTED_MODULE_10__[
              'MeetingJoinButtonComponent'
            ],
            _meeting_participates_list_meeting_participates_list_component__WEBPACK_IMPORTED_MODULE_11__[
              'MeetingParticipatesListComponent'
            ]
          ],
          pipes: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__['DatePipe'],
            _shared_pipes_phone_pipe__WEBPACK_IMPORTED_MODULE_12__['PhonePipe']
          ],
          styles: [
            ".medium-heading[_ngcontent-%COMP%] {\n  min-height: 1em;\n}\n\n.row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  margin: 10px;\n  min-width: 350px;\n  max-width: 400px;\n}\n\n@media only screen and (max-width: 768px) {\n  .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n    margin: 5px;\n  }\n}\n\n.buttons[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.buttons[_ngcontent-%COMP%]   .site-button[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n\n.buttons[_ngcontent-%COMP%]   .site-button.edit-button[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n}\n\n.buttons[_ngcontent-%COMP%]   .site-button.edit-button[_ngcontent-%COMP%]::before {\n  content: \"\";\n  width: 55px;\n  height: 50px;\n  background-image: url('host_edit_white.svg');\n  background-position: 50% 50%;\n  background-size: 20px 20px;\n  background-repeat: no-repeat;\n}\n\n.buttons[_ngcontent-%COMP%]   .site-button.delete-button[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n}\n\n.buttons[_ngcontent-%COMP%]   .site-button.delete-button[_ngcontent-%COMP%]::before {\n  content: \"\";\n  width: 65px;\n  height: 50px;\n  background-image: url('host_delete_white.svg');\n  background-position: 50% 50%;\n  background-size: 20px 20px;\n  background-repeat: no-repeat;\n}\n\n.share-container[_ngcontent-%COMP%] {\n  width: 370px;\n  display: flex;\n  align-items: center;\n}\n\n.share-container[_ngcontent-%COMP%]   .share-text[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #818181;\n  font-family: \"Heebo\";\n}\n\n.share-container[_ngcontent-%COMP%]   .facebook-icon[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 28px;\n  background-image: url('facebook.png');\n  background-size: 100% 100%;\n}\n\n.share-container[_ngcontent-%COMP%]   .whatsapp-icon[_ngcontent-%COMP%] {\n  width: 25px;\n  height: 25px;\n  background-image: url('whatsapp.png');\n  background-size: 100% 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVldGluZ3MvZGV0YWlscy1wYWdlL0M6XFxVc2Vyc1xcVGVoaWxhXFxsYXN0XFxvdXJCcm9cXG91ci1icm90aGVycy13ZWIvc3JjXFxhcHBcXG1lZXRpbmdzXFxkZXRhaWxzLXBhZ2VcXG1lZXRpbmctZGV0YWlscy1wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tZWV0aW5ncy9kZXRhaWxzLXBhZ2UvbWVldGluZy1kZXRhaWxzLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FDQ0Y7O0FEQ0U7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURDSTtFQU5GO0lBT0ksV0FBQTtFQ0VKO0FBQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUNDRjs7QURDRTtFQUNFLFlBQUE7QUNDSjs7QURDSTtFQUNFLGNBQUE7QUNDTjs7QURDTTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDRDQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQkFBQTtFQUNBLDRCQUFBO0FDQ1I7O0FER0k7RUFDRSxjQUFBO0FDRE47O0FER007RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw4Q0FBQTtFQUNBLDRCQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtBQ0RSOztBRE9BO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0pGOztBRE1FO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQ0pKOztBRE9FO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQ0FBQTtFQUNBLDBCQUFBO0FDTEo7O0FEUUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFDQUFBO0VBQ0EsMEJBQUE7QUNOSiIsImZpbGUiOiJzcmMvYXBwL21lZXRpbmdzL2RldGFpbHMtcGFnZS9tZWV0aW5nLWRldGFpbHMtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZWRpdW0taGVhZGluZyB7XHJcbiAgbWluLWhlaWdodDogMWVtO1xyXG59XHJcblxyXG4ucm93IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgLmNvbCB7XHJcbiAgICBmbGV4OiAwIDAgYXV0bztcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIG1pbi13aWR0aDogMzUwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG5cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uYnV0dG9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgLnNpdGUtYnV0dG9uIHtcclxuICAgIG1hcmdpbjogMTBweDtcclxuXHJcbiAgICAmLmVkaXQtYnV0dG9uIHtcclxuICAgICAgZmxleDogMCAwIGF1dG87XHJcblxyXG4gICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgIHdpZHRoOiA1NXB4O1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZy9ob3N0X2VkaXRfd2hpdGUuc3ZnKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMjBweCAyMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmLmRlbGV0ZS1idXR0b24ge1xyXG4gICAgICBmbGV4OiAwIDAgYXV0bztcclxuXHJcbiAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgd2lkdGg6IDY1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaW1nL2hvc3RfZGVsZXRlX3doaXRlLnN2Zyk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDIwcHggMjBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uc2hhcmUtY29udGFpbmVyIHtcclxuICB3aWR0aDogMzcwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAuc2hhcmUtdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBjb2xvcjogIzgxODE4MTtcclxuICAgIGZvbnQtZmFtaWx5OiAnSGVlYm8nO1xyXG4gIH1cclxuXHJcbiAgLmZhY2Vib29rLWljb24ge1xyXG4gICAgd2lkdGg6IDE2cHg7XHJcbiAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZy9mYWNlYm9vay5wbmcpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgfVxyXG5cclxuICAud2hhdHNhcHAtaWNvbiB7XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaW1nL3doYXRzYXBwLnBuZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICB9XHJcbn1cclxuIiwiLm1lZGl1bS1oZWFkaW5nIHtcbiAgbWluLWhlaWdodDogMWVtO1xufVxuXG4ucm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5yb3cgLmNvbCB7XG4gIGZsZXg6IDAgMCBhdXRvO1xuICBtYXJnaW46IDEwcHg7XG4gIG1pbi13aWR0aDogMzUwcHg7XG4gIG1heC13aWR0aDogNDAwcHg7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5yb3cgLmNvbCB7XG4gICAgbWFyZ2luOiA1cHg7XG4gIH1cbn1cblxuLmJ1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5idXR0b25zIC5zaXRlLWJ1dHRvbiB7XG4gIG1hcmdpbjogMTBweDtcbn1cbi5idXR0b25zIC5zaXRlLWJ1dHRvbi5lZGl0LWJ1dHRvbiB7XG4gIGZsZXg6IDAgMCBhdXRvO1xufVxuLmJ1dHRvbnMgLnNpdGUtYnV0dG9uLmVkaXQtYnV0dG9uOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogNTVweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZy9ob3N0X2VkaXRfd2hpdGUuc3ZnKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcbiAgYmFja2dyb3VuZC1zaXplOiAyMHB4IDIwcHg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG4uYnV0dG9ucyAuc2l0ZS1idXR0b24uZGVsZXRlLWJ1dHRvbiB7XG4gIGZsZXg6IDAgMCBhdXRvO1xufVxuLmJ1dHRvbnMgLnNpdGUtYnV0dG9uLmRlbGV0ZS1idXR0b246OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiA2NXB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaW1nL2hvc3RfZGVsZXRlX3doaXRlLnN2Zyk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG4gIGJhY2tncm91bmQtc2l6ZTogMjBweCAyMHB4O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuXG4uc2hhcmUtY29udGFpbmVyIHtcbiAgd2lkdGg6IDM3MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnNoYXJlLWNvbnRhaW5lciAuc2hhcmUtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICM4MTgxODE7XG4gIGZvbnQtZmFtaWx5OiBcIkhlZWJvXCI7XG59XG4uc2hhcmUtY29udGFpbmVyIC5mYWNlYm9vay1pY29uIHtcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMjhweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvZmFjZWJvb2sucG5nKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG59XG4uc2hhcmUtY29udGFpbmVyIC53aGF0c2FwcC1pY29uIHtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvd2hhdHNhcHAucG5nKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG59Il19 */"
          ]
        });
        /*@__PURE__*/ (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            MeetingDetailsPageComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                args: [
                  {
                    selector: 'app-meeting-details-page',
                    templateUrl: './meeting-details-page.component.html',
                    styleUrls: ['./meeting-details-page.component.scss']
                  }
                ]
              }
            ],
            function() {
              return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__['Router'] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__['ActivatedRoute'] },
                { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__['ToastrService'] },
                { type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__['AuthService'] },
                { type: _shared_services_data_service__WEBPACK_IMPORTED_MODULE_4__['DataService'] },
                { type: _shared_services_utils_service__WEBPACK_IMPORTED_MODULE_5__['UtilsService'] },
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

    /***/ './src/app/meetings/host-meeting-input-text/host-meeting-input-text.component.ts':
      /*!***************************************************************************************!*\
  !*** ./src/app/meetings/host-meeting-input-text/host-meeting-input-text.component.ts ***!
  \***************************************************************************************/
      /*! exports provided: HostMeetingInputTextComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'HostMeetingInputTextComponent',
          function() {
            return HostMeetingInputTextComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/common */ './node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js'
        );

        function HostMeetingInputTextComponent_div_1_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](0, 'div', 5);
          }
          if (rf & 2) {
            const ctx_r182 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵstyleProp'](
              'background-image',
              'url(' + ctx_r182.iconUrl + ')',
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefaultStyleSanitizer']
            );
          }
        }
        function HostMeetingInputTextComponent_div_2_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div', 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }
          if (rf & 2) {
            const ctx_r183 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate'](ctx_r183.label);
          }
        }
        function HostMeetingInputTextComponent_div_5_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div', 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }
          if (rf & 2) {
            const ctx_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate1']('(', ctx_r184.info, ')');
          }
        }
        class HostMeetingInputTextComponent {}
        HostMeetingInputTextComponent.ɵfac = function HostMeetingInputTextComponent_Factory(t) {
          return new (t || HostMeetingInputTextComponent)();
        };
        HostMeetingInputTextComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineComponent']({
          type: HostMeetingInputTextComponent,
          selectors: [['app-host-meeting-input-text']],
          inputs: { iconUrl: 'iconUrl', label: 'label', text: 'text', info: 'info' },
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
          template: function HostMeetingInputTextComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div', 0);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                1,
                HostMeetingInputTextComponent_div_1_Template,
                1,
                2,
                'div',
                1
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                2,
                HostMeetingInputTextComponent_div_2_Template,
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
                HostMeetingInputTextComponent_div_5_Template,
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
            '.input-container[_ngcontent-%COMP%] {\n  padding: 5px;\n  background-color: white;\n  border: 1px solid #e5e5e5;\n  display: flex;\n  align-items: center;\n}\n.input-container[_ngcontent-%COMP%]   .input-icon[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  width: 65px;\n  height: 50px;\n  background-position: 50% 50%;\n  background-size: 24px 24px;\n  background-repeat: no-repeat;\n}\n.input-container[_ngcontent-%COMP%]   .input-label[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  font-size: 18px;\n  margin-left: 10px;\n  color: #999999;\n  font-family: "Heebo";\n}\n.input-container[_ngcontent-%COMP%]   .input-text[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  font-size: 18px;\n  font-family: "Heebo";\n  color: #999999;\n}\n.input-container[_ngcontent-%COMP%]   .input-info[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  margin-right: 10px;\n  font-size: 18px;\n  font-family: "Heebo";\n  color: #999999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVldGluZ3MvaG9zdC1tZWV0aW5nLWlucHV0LXRleHQvQzpcXFVzZXJzXFxUZWhpbGFcXGxhc3RcXG91ckJyb1xcb3VyLWJyb3RoZXJzLXdlYi9zcmNcXGFwcFxcbWVldGluZ3NcXGhvc3QtbWVldGluZy1pbnB1dC10ZXh0XFxob3N0LW1lZXRpbmctaW5wdXQtdGV4dC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWVldGluZ3MvaG9zdC1tZWV0aW5nLWlucHV0LXRleHQvaG9zdC1tZWV0aW5nLWlucHV0LXRleHQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0NGO0FEQ0U7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0VBQ0EsNEJBQUE7QUNDSjtBREVFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQ0FKO0FER0U7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtBQ0RKO0FESUU7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9tZWV0aW5ncy9ob3N0LW1lZXRpbmctaW5wdXQtdGV4dC9ob3N0LW1lZXRpbmctaW5wdXQtdGV4dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnB1dC1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjI5LCAyMjksIDIyOSk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAuaW5wdXQtaWNvbiB7XHJcbiAgICBmbGV4OiAwIDAgYXV0bztcclxuICAgIHdpZHRoOiA2NXB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMjRweCAyNHB4O1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICB9XHJcblxyXG4gIC5pbnB1dC1sYWJlbCB7XHJcbiAgICBmbGV4OiAwIDAgYXV0bztcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgY29sb3I6IHJnYigxNTMsIDE1MywgMTUzKTtcclxuICAgIGZvbnQtZmFtaWx5OiAnSGVlYm8nO1xyXG4gIH1cclxuXHJcbiAgLmlucHV0LXRleHQge1xyXG4gICAgZmxleDogMCAwIGF1dG87XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LWZhbWlseTogJ0hlZWJvJztcclxuICAgIGNvbG9yOiByZ2IoMTUzLCAxNTMsIDE1Myk7XHJcbiAgfVxyXG5cclxuICAuaW5wdXQtaW5mbyB7XHJcbiAgICBmbGV4OiAwIDAgYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnSGVlYm8nO1xyXG4gICAgY29sb3I6IHJnYigxNTMsIDE1MywgMTUzKTtcclxuICB9XHJcbn1cclxuIiwiLmlucHV0LWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uaW5wdXQtY29udGFpbmVyIC5pbnB1dC1pY29uIHtcbiAgZmxleDogMCAwIGF1dG87XG4gIHdpZHRoOiA2NXB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG4gIGJhY2tncm91bmQtc2l6ZTogMjRweCAyNHB4O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuLmlucHV0LWNvbnRhaW5lciAuaW5wdXQtbGFiZWwge1xuICBmbGV4OiAwIDAgYXV0bztcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgY29sb3I6ICM5OTk5OTk7XG4gIGZvbnQtZmFtaWx5OiBcIkhlZWJvXCI7XG59XG4uaW5wdXQtY29udGFpbmVyIC5pbnB1dC10ZXh0IHtcbiAgZmxleDogMCAwIGF1dG87XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC1mYW1pbHk6IFwiSGVlYm9cIjtcbiAgY29sb3I6ICM5OTk5OTk7XG59XG4uaW5wdXQtY29udGFpbmVyIC5pbnB1dC1pbmZvIHtcbiAgZmxleDogMCAwIGF1dG87XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LWZhbWlseTogXCJIZWVib1wiO1xuICBjb2xvcjogIzk5OTk5OTtcbn0iXX0= */'
          ]
        });
        /*@__PURE__*/ (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            HostMeetingInputTextComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                args: [
                  {
                    selector: 'app-host-meeting-input-text',
                    templateUrl: './host-meeting-input-text.component.html',
                    styleUrls: ['./host-meeting-input-text.component.scss']
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

    /***/ './src/app/meetings/meeting-participates-list/meeting-participates-list.component.ts':
      /*!*******************************************************************************************!*\
  !*** ./src/app/meetings/meeting-participates-list/meeting-participates-list.component.ts ***!
  \*******************************************************************************************/
      /*! exports provided: MeetingParticipatesListComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'MeetingParticipatesListComponent',
          function() {
            return MeetingParticipatesListComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/common */ './node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js'
        );
        /* harmony import */ var _shared_pipes_phone_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../shared/pipes/phone.pipe */ './src/app/shared/pipes/phone.pipe.ts'
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
            const participate_r187 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']().$implicit;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate1'](
              ' ',
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpipeBind1'](5, 2, participate_r187.phoneNumber),
              ' '
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate1'](' ', participate_r187.email, ' ');
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
            const participate_r187 = ctx.$implicit;
            const ctx_r186 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate1'](
              ' ',
              participate_r187.firstName + ' ' + participate_r187.lastName,
              ' '
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate1'](
              ' ',
              participate_r187.accompanies + 1,
              ' '
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
              'ngIf',
              ctx_r186.user.id === ctx_r186.meeting.hostId || ctx_r186.user.isAdmin
            );
          }
        }
        class MeetingParticipatesListComponent {}
        MeetingParticipatesListComponent.ɵfac = function MeetingParticipatesListComponent_Factory(t) {
          return new (t || MeetingParticipatesListComponent)();
        };
        MeetingParticipatesListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineComponent']({
          type: MeetingParticipatesListComponent,
          selectors: [['app-meeting-participates-list']],
          inputs: { user: 'user', meeting: 'meeting', meetingParticipates: 'meetingParticipates' },
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
            '.list-container[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  max-width: 600px;\n  margin-bottom: 20px;\n}\n.list-container.extended[_ngcontent-%COMP%] {\n  max-width: 770px;\n}\n.list-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  height: 50px;\n  font-size: 19px;\n  font-family: "Heebo";\n  color: #818181;\n}\n@media only screen and (max-width: 768px) {\n  .list-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.list-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.list-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .col.col-name[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.list-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .col.col-capacity[_ngcontent-%COMP%] {\n  flex: 0 0 170px;\n}\n.list-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .col.col-phone[_ngcontent-%COMP%] {\n  flex: 0 0 150px;\n}\n.list-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .col.col-email[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.list-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 20px 0;\n  border-top: 1px solid #cccdce;\n}\n.list-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]:last-child() {\n  border-bottom: 1px solid #cccdce;\n}\n@media only screen and (max-width: 768px) {\n  .list-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    margin: 15px;\n  }\n}\n.list-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n  font-size: 19px;\n  font-family: "Heebo";\n  color: #818181;\n}\n@media only screen and (max-width: 768px) {\n  .list-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n    width: auto !important;\n  }\n}\n.list-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .mobile-label[_ngcontent-%COMP%] {\n  display: none;\n}\n.list-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .mobile-label[_ngcontent-%COMP%]::after {\n  content: ":";\n}\n@media only screen and (max-width: 768px) {\n  .list-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .mobile-label[_ngcontent-%COMP%] {\n    display: inline;\n  }\n}\n.list-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col.col-name[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.list-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col.col-name[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-size: 23px;\n  font-family: "arbel";\n  color: #00736d;\n}\n.list-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col.col-capacity[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  width: 170px;\n  text-align: center;\n}\n.list-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col.col-phone[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  width: 150px;\n  text-align: center;\n}\n.list-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col.col-email[_ngcontent-%COMP%] {\n  flex: 1;\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVldGluZ3MvbWVldGluZy1wYXJ0aWNpcGF0ZXMtbGlzdC9DOlxcVXNlcnNcXFRlaGlsYVxcbGFzdFxcb3VyQnJvXFxvdXItYnJvdGhlcnMtd2ViL3NyY1xcYXBwXFxtZWV0aW5nc1xcbWVldGluZy1wYXJ0aWNpcGF0ZXMtbGlzdFxcbWVldGluZy1wYXJ0aWNpcGF0ZXMtbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWVldGluZ3MvbWVldGluZy1wYXJ0aWNpcGF0ZXMtbGlzdC9tZWV0aW5nLXBhcnRpY2lwYXRlcy1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNDRjtBRENFO0VBQ0UsZ0JBQUE7QUNDSjtBREVFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7QUNBSjtBREVJO0VBUkY7SUFTSSxhQUFBO0VDQ0o7QUFDRjtBRENJO0VBQ0Usa0JBQUE7QUNDTjtBRENNO0VBQ0UsT0FBQTtBQ0NSO0FERU07RUFDRSxlQUFBO0FDQVI7QURHTTtFQUNFLGVBQUE7QUNEUjtBRElNO0VBQ0UsT0FBQTtBQ0ZSO0FET0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7QUNMSjtBRE9JO0VBQ0UsZ0NBQUE7QUNMTjtBRFFJO0VBVkY7SUFXSSxzQkFBQTtJQUNBLHVCQUFBO0lBQ0EsWUFBQTtFQ0xKO0FBQ0Y7QURPSTtFQUNFLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7QUNMTjtBRE9NO0VBTEY7SUFNSSxzQkFBQTtFQ0pOO0FBQ0Y7QURNTTtFQUNFLGFBQUE7QUNKUjtBRE1RO0VBQ0UsWUFBQTtBQ0pWO0FET1E7RUFQRjtJQVFJLGVBQUE7RUNKUjtBQUNGO0FET007RUFDRSxPQUFBO0FDTFI7QURPUTtFQUNFLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7QUNMVjtBRFNNO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ1BSO0FEVU07RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDUlI7QURXTTtFQUNFLE9BQUE7RUFDQSxnQkFBQTtBQ1RSIiwiZmlsZSI6InNyYy9hcHAvbWVldGluZ3MvbWVldGluZy1wYXJ0aWNpcGF0ZXMtbGlzdC9tZWV0aW5nLXBhcnRpY2lwYXRlcy1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpc3QtY29udGFpbmVyIHtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblxyXG4gICYuZXh0ZW5kZWQge1xyXG4gICAgbWF4LXdpZHRoOiA3NzBweDtcclxuICB9XHJcblxyXG4gIC5oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICBmb250LWZhbWlseTogJ0hlZWJvJztcclxuICAgIGNvbG9yOiByZ2IoMTI5LCAxMjksIDEyOSk7XHJcblxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2wge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgICAmLmNvbC1uYW1lIHtcclxuICAgICAgICBmbGV4OiAxO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmNvbC1jYXBhY2l0eSB7XHJcbiAgICAgICAgZmxleDogMCAwIDE3MHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmNvbC1waG9uZSB7XHJcbiAgICAgICAgZmxleDogMCAwIDE1MHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmNvbC1lbWFpbCB7XHJcbiAgICAgICAgZmxleDogMTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnJvdyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDIwcHggMDtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2NjZGNlO1xyXG5cclxuICAgICY6bGFzdC1jaGlsZCgpIHtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2NkY2U7XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgbWFyZ2luOiAxNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2wge1xyXG4gICAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnSGVlYm8nO1xyXG4gICAgICBjb2xvcjogcmdiKDEyOSwgMTI5LCAxMjkpO1xyXG5cclxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5tb2JpbGUtbGFiZWwge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcblxyXG4gICAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICAgIGNvbnRlbnQ6ICc6JztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuY29sLW5hbWUge1xyXG4gICAgICAgIGZsZXg6IDE7XHJcblxyXG4gICAgICAgIC5uYW1lIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnYXJiZWwnO1xyXG4gICAgICAgICAgY29sb3I6IHJnYigwLCAxMTUsIDEwOSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmNvbC1jYXBhY2l0eSB7XHJcbiAgICAgICAgZmxleDogMCAwIGF1dG87XHJcbiAgICAgICAgd2lkdGg6IDE3MHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5jb2wtcGhvbmUge1xyXG4gICAgICAgIGZsZXg6IDAgMCBhdXRvO1xyXG4gICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuY29sLWVtYWlsIHtcclxuICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLmxpc3QtY29udGFpbmVyIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4ubGlzdC1jb250YWluZXIuZXh0ZW5kZWQge1xuICBtYXgtd2lkdGg6IDc3MHB4O1xufVxuLmxpc3QtY29udGFpbmVyIC5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGZvbnQtc2l6ZTogMTlweDtcbiAgZm9udC1mYW1pbHk6IFwiSGVlYm9cIjtcbiAgY29sb3I6ICM4MTgxODE7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5saXN0LWNvbnRhaW5lciAuaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4ubGlzdC1jb250YWluZXIgLmhlYWRlciAuY29sIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmxpc3QtY29udGFpbmVyIC5oZWFkZXIgLmNvbC5jb2wtbmFtZSB7XG4gIGZsZXg6IDE7XG59XG4ubGlzdC1jb250YWluZXIgLmhlYWRlciAuY29sLmNvbC1jYXBhY2l0eSB7XG4gIGZsZXg6IDAgMCAxNzBweDtcbn1cbi5saXN0LWNvbnRhaW5lciAuaGVhZGVyIC5jb2wuY29sLXBob25lIHtcbiAgZmxleDogMCAwIDE1MHB4O1xufVxuLmxpc3QtY29udGFpbmVyIC5oZWFkZXIgLmNvbC5jb2wtZW1haWwge1xuICBmbGV4OiAxO1xufVxuLmxpc3QtY29udGFpbmVyIC5yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAyMHB4IDA7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2NjZGNlO1xufVxuLmxpc3QtY29udGFpbmVyIC5yb3c6bGFzdC1jaGlsZCgpIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2NkY2U7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5saXN0LWNvbnRhaW5lciAucm93IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIG1hcmdpbjogMTVweDtcbiAgfVxufVxuLmxpc3QtY29udGFpbmVyIC5yb3cgLmNvbCB7XG4gIGZvbnQtc2l6ZTogMTlweDtcbiAgZm9udC1mYW1pbHk6IFwiSGVlYm9cIjtcbiAgY29sb3I6ICM4MTgxODE7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5saXN0LWNvbnRhaW5lciAucm93IC5jb2wge1xuICAgIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi5saXN0LWNvbnRhaW5lciAucm93IC5jb2wgLm1vYmlsZS1sYWJlbCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ubGlzdC1jb250YWluZXIgLnJvdyAuY29sIC5tb2JpbGUtbGFiZWw6OmFmdGVyIHtcbiAgY29udGVudDogXCI6XCI7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5saXN0LWNvbnRhaW5lciAucm93IC5jb2wgLm1vYmlsZS1sYWJlbCB7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICB9XG59XG4ubGlzdC1jb250YWluZXIgLnJvdyAuY29sLmNvbC1uYW1lIHtcbiAgZmxleDogMTtcbn1cbi5saXN0LWNvbnRhaW5lciAucm93IC5jb2wuY29sLW5hbWUgLm5hbWUge1xuICBmb250LXNpemU6IDIzcHg7XG4gIGZvbnQtZmFtaWx5OiBcImFyYmVsXCI7XG4gIGNvbG9yOiAjMDA3MzZkO1xufVxuLmxpc3QtY29udGFpbmVyIC5yb3cgLmNvbC5jb2wtY2FwYWNpdHkge1xuICBmbGV4OiAwIDAgYXV0bztcbiAgd2lkdGg6IDE3MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubGlzdC1jb250YWluZXIgLnJvdyAuY29sLmNvbC1waG9uZSB7XG4gIGZsZXg6IDAgMCBhdXRvO1xuICB3aWR0aDogMTUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5saXN0LWNvbnRhaW5lciAucm93IC5jb2wuY29sLWVtYWlsIHtcbiAgZmxleDogMTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn0iXX0= */'
          ],
          changeDetection: 0
        });
        /*@__PURE__*/ (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            MeetingParticipatesListComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                args: [
                  {
                    selector: 'app-meeting-participates-list',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__['ChangeDetectionStrategy'].OnPush,
                    templateUrl: './meeting-participates-list.component.html',
                    styleUrls: ['./meeting-participates-list.component.scss']
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

    /***/ './src/app/meetings/meetings.module.ts':
      /*!*********************************************!*\
  !*** ./src/app/meetings/meetings.module.ts ***!
  \*********************************************/
      /*! exports provided: MeetingsModule */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'MeetingsModule', function() {
          return MeetingsModule;
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */ var _host_meeting_input_text_host_meeting_input_text_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./host-meeting-input-text/host-meeting-input-text.component */ './src/app/meetings/host-meeting-input-text/host-meeting-input-text.component.ts'
        );
        /* harmony import */ var _meeting_participates_list_meeting_participates_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./meeting-participates-list/meeting-participates-list.component */ './src/app/meetings/meeting-participates-list/meeting-participates-list.component.ts'
        );
        /* harmony import */ var _shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../shared/pipes/pipes.module */ './src/app/shared/pipes/pipes.module.ts'
        );
        /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @angular/common */ './node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js'
        );

        const api = [
          _host_meeting_input_text_host_meeting_input_text_component__WEBPACK_IMPORTED_MODULE_1__[
            'HostMeetingInputTextComponent'
          ],
          _meeting_participates_list_meeting_participates_list_component__WEBPACK_IMPORTED_MODULE_2__[
            'MeetingParticipatesListComponent'
          ]
        ];
        class MeetingsModule {}
        MeetingsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineNgModule']({ type: MeetingsModule });
        MeetingsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineInjector']({
          factory: function MeetingsModule_Factory(t) {
            return new (t || MeetingsModule)();
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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵsetNgModuleScope'](MeetingsModule, {
              declarations: [
                _host_meeting_input_text_host_meeting_input_text_component__WEBPACK_IMPORTED_MODULE_1__[
                  'HostMeetingInputTextComponent'
                ],
                _meeting_participates_list_meeting_participates_list_component__WEBPACK_IMPORTED_MODULE_2__[
                  'MeetingParticipatesListComponent'
                ]
              ],
              imports: [
                _shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_3__['PipesModule'],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__['CommonModule']
              ],
              exports: [
                _host_meeting_input_text_host_meeting_input_text_component__WEBPACK_IMPORTED_MODULE_1__[
                  'HostMeetingInputTextComponent'
                ],
                _meeting_participates_list_meeting_participates_list_component__WEBPACK_IMPORTED_MODULE_2__[
                  'MeetingParticipatesListComponent'
                ]
              ]
            });
        })();
        /*@__PURE__*/ (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            MeetingsModule,
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

    /***/ './src/app/meetings/page/meetings-page.component.ts':
      /*!**********************************************************!*\
  !*** ./src/app/meetings/page/meetings-page.component.ts ***!
  \**********************************************************/
      /*! exports provided: MeetingsPageComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'MeetingsPageComponent', function() {
          return MeetingsPageComponent;
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */ var _shared_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../shared/constants */ './src/app/shared/constants.ts'
        );
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/router */ './node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js'
        );
        /* harmony import */ var _shared_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../shared/services/data.service */ './src/app/shared/services/data.service.ts'
        );
        /* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ngx-toastr */ './node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js'
        );
        /* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../shared/services/auth.service */ './src/app/shared/services/auth.service.ts'
        );
        /* harmony import */ var _shared_components_participations_buttons_participations_buttons_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../shared/components/participations-buttons/participations-buttons.component */ './src/app/shared/components/participations-buttons/participations-buttons.component.ts'
        );

        const oneWeek = 1000 * 60 * 60 * 24 * 7;
        class MeetingsPageComponent {
          constructor(router, dataService, toastr, authService) {
            this.router = router;
            this.dataService = dataService;
            this.toastr = toastr;
            this.authService = authService;
            this.loadingUser = true;
            this.mapShowGuide = false;
            this.year = _shared_constants__WEBPACK_IMPORTED_MODULE_1__['MEMORIAL_YEAR'];
          }
          ngOnInit() {
            this.authService.user.subscribe(user => {
              this.user = user;
              this.loadingUser = false;
              if (
                !this.mapShowGuide &&
                !(user && user.meetingMapGuideLastVisit && Date.now() - user.meetingMapGuideLastVisit < oneWeek)
              ) {
                this.mapShowGuide = true;
              }
            });
            this.dataService.getMeetings().subscribe(meetings => {
              this.meetings = meetings;
            });
          }
          onMapGuideCompleted() {
            this.mapShowGuide = true;
            if (this.user && this.user.id) {
              this.dataService.updateUserMapGuideLastVisit(this.user.id);
            }
          }
          onJoinMeeting(meeting) {
            if (meeting && this.user) {
              if (window.confirm('האם ברצונך להשתבץ למפגש?')) {
                (this.user.role === 'bereaved'
                  ? this.dataService.bereavedJoinMeeting(this.user, meeting)
                  : this.dataService.participateJoinMeeting(this.user, meeting, this.getAccompanies())
                ).subscribe(
                  () => {
                    this.toastr.success('שובצת בהצלחה');
                    this.router.navigate([`meetings/${this.year}/${meeting.hostId}/${meeting.id}`]);
                  },
                  () => {
                    this.toastr.error('שגיאה - לא ניתן להשתבץ למפגש. נא ליצור קשר');
                  }
                );
              }
            }
          }
          getAccompanies() {
            let accompaniesAnswer = window.prompt('האם יגיעו איתך אנשים נוספים?', '0');
            let number = Number.parseInt(accompaniesAnswer);
            while (!(!Number.isNaN(number) && number >= 0 && number <= 7)) {
              accompaniesAnswer = window.prompt('נא להזין מספר משתתפים בין 0 ל-7', '0');
              number = Number.parseInt(accompaniesAnswer);
            }
            return number;
          }
        }
        MeetingsPageComponent.ɵfac = function MeetingsPageComponent_Factory(t) {
          return new (t || MeetingsPageComponent)(
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
        MeetingsPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineComponent']({
          type: MeetingsPageComponent,
          selectors: [['app-meetings-page']],
          decls: 15,
          vars: 2,
          consts: [
            ['src', '../../../assets/img/meetingsHeader.jpg', 'alt', 'Meetings Page Header Image', 1, 'image-header'],
            [1, 'site-divider'],
            [1, 'small-heading'],
            [1, 'medium-heading'],
            [1, 'site-text'],
            [1, 'participations-buttons'],
            [3, 'user', 'loading']
          ],
          template: function MeetingsPageComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](0, 'img', 0);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](1, 'div', 1);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](2, 'h1', 2);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                3,
                '\u05D4\u05D0\u05D7\u05D9\u05DD \u05E9\u05DC\u05E0\u05D5 !'
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](4, 'h2', 3);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                5,
                '\u05D0\u05D9\u05DA \u05E0\u05E8\u05D0\u05D9\u05DD \u05D4\u05DE\u05E4\u05D2\u05E9\u05D9\u05DD \u05E9\u05DC\u05E0\u05D5?'
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](6, 'section', 4);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](7, 'p');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                8,
                ' \u05DC\u05E4\u05E0\u05D9\u05DA \u05E8\u05E9\u05D9\u05DE\u05EA \u05D4\u05DE\u05E7\u05D5\u05DE\u05D5\u05EA \u05D1\u05D4\u05DD \u05D9\u05EA\u05E7\u05D9\u05D9\u05DE\u05D5 \u05DE\u05E4\u05D2\u05E9\u05D9 "\u05D4\u05D0\u05D7\u05D9\u05DD \u05E9\u05DC\u05E0\u05D5". \u05E0\u05D9\u05EA\u05DF \u05DC\u05DC\u05D7\u05D5\u05E5 \u05E2\u05DC \u05D4\u05D0\u05D9\u05D9\u05E7\u05D5\u05DF \u05D5\u05DC\u05E2\u05D1\u05D5\u05E8 \u05DC\u05DE\u05E6\u05D1 \u05DE\u05E4\u05D4 \u05D0\u05D5 \u05DC\u05DE\u05E6\u05D1 \u05E8\u05E9\u05D9\u05DE\u05D4. '
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](9, 'p');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                10,
                ' \u05D4\u05DE\u05E4\u05D2\u05E9\u05D9\u05DD \u05DE\u05EA\u05E7\u05D9\u05D9\u05DE\u05D9\u05DD \u05D1\u05E9\u05D1\u05D5\u05E2 \u05E9\u05E1\u05D1\u05D9\u05D1 \u05D9\u05D5\u05DD \u05D4\u05D6\u05D9\u05DB\u05E8\u05D5\u05DF 9-14.4.21. \u05D0\u05E0\u05D7\u05E0\u05D5 \u05DE\u05D6\u05DE\u05D9\u05E0\u05D9\u05DD \u05D0\u05EA\u05DB\u05DD \u05DC\u05DE\u05E6\u05D5\u05D0 \u05D0\u05EA \u05D4\u05DE\u05E4\u05D2\u05E9 \u05D4\u05E7\u05E8\u05D5\u05D1 \u05DC\u05D1\u05D9\u05EA\u05DB\u05DD \u05D5\u05DC\u05DC\u05D7\u05D5\u05E5 \u05E2\u05DC \u05DB\u05E4\u05EA\u05D5\u05E8 "\u05E9\u05D9\u05D1\u05D5\u05E5". \u05E0\u05D9\u05EA\u05DF \u05DC\u05D4\u05E9\u05EA\u05D1\u05E5 \u05DC\u05D9\u05D5\u05EA\u05E8 \u05DE\u05DE\u05E4\u05D2\u05E9 \u05D0\u05D7\u05D3 \u05E8\u05E7 \u05E9\u05D9\u05DE\u05D5 \u05DC\u05D1 \u05E9\u05D0\u05D9\u05DF \u05D7\u05E4\u05D9\u05E4\u05D4 \u05D1\u05D9\u05DF \u05D4\u05DE\u05E4\u05D2\u05E9\u05D9\u05DD. '
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](11, 'p');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                12,
                " \u05DB\u05DE\u05D5 \u05DB\u05DF, \u05DE\u05E4\u05D2\u05E9\u05D9 '\u05D4\u05D0\u05D7\u05D9\u05DD \u05E9\u05DC\u05E0\u05D5' \u05DE\u05EA\u05E7\u05D9\u05D9\u05DE\u05D9\u05DD \u05D1\u05DE\u05E1\u05D2\u05E8\u05EA \u05D4\u05E0\u05D7\u05D9\u05D5\u05EA \u05D4\u05EA\u05D5 \u05D4\u05D9\u05E8\u05D5\u05E7 (\u05D0\u05DB\u05D9\u05E4\u05EA \u05D4\u05D4\u05E0\u05D7\u05D9\u05D5\u05EA \u05D1\u05D0\u05D7\u05E8\u05D9\u05D5\u05EA \u05D4\u05DE\u05D0\u05E8\u05D7 \u05D1\u05DC\u05D1\u05D3). "
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](13, 'section', 5);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](14, 'app-participations-buttons', 6);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            }
            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](14);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('user', ctx.user)('loading', ctx.loadingUser);
            }
          },
          directives: [
            _shared_components_participations_buttons_participations_buttons_component__WEBPACK_IMPORTED_MODULE_6__[
              'ParticipationsButtonsComponent'
            ]
          ],
          styles: [
            '.participations-buttons[_ngcontent-%COMP%] {\n  margin-top: 60px;\n}\n\n@media only screen and (max-width: 768px) {\n  .medium-heading[_ngcontent-%COMP%] {\n    margin-left: 20px;\n    margin-right: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVldGluZ3MvcGFnZS9DOlxcVXNlcnNcXFRlaGlsYVxcbGFzdFxcb3VyQnJvXFxvdXItYnJvdGhlcnMtd2ViL3NyY1xcYXBwXFxtZWV0aW5nc1xccGFnZVxcbWVldGluZ3MtcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWVldGluZ3MvcGFnZS9tZWV0aW5ncy1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUNDRjs7QURHRTtFQURGO0lBRUksaUJBQUE7SUFDQSxrQkFBQTtFQ0NGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tZWV0aW5ncy9wYWdlL21lZXRpbmdzLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFydGljaXBhdGlvbnMtYnV0dG9ucyB7XHJcbiAgbWFyZ2luLXRvcDogNjBweDtcclxufVxyXG5cclxuLm1lZGl1bS1oZWFkaW5nIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICB9XHJcbn1cclxuIiwiLnBhcnRpY2lwYXRpb25zLWJ1dHRvbnMge1xuICBtYXJnaW4tdG9wOiA2MHB4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5tZWRpdW0taGVhZGluZyB7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICB9XG59Il19 */'
          ]
        });
        /*@__PURE__*/ (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            MeetingsPageComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                args: [
                  {
                    selector: 'app-meetings-page',
                    templateUrl: './meetings-page.component.html',
                    styleUrls: ['./meetings-page.component.scss']
                  }
                ]
              }
            ],
            function() {
              return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__['Router'] },
                { type: _shared_services_data_service__WEBPACK_IMPORTED_MODULE_3__['DataService'] },
                { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__['ToastrService'] },
                { type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_5__['AuthService'] }
              ];
            },
            null
          );
        })();

        /***/
      },

    /***/ './src/app/meetings/page/meetings-page.module.ts':
      /*!*******************************************************!*\
  !*** ./src/app/meetings/page/meetings-page.module.ts ***!
  \*******************************************************/
      /*! exports provided: MeetingsPageModule */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'MeetingsPageModule', function() {
          return MeetingsPageModule;
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/router */ './node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js'
        );
        /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/common */ './node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js'
        );
        /* harmony import */ var _meetings_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./meetings-page.component */ './src/app/meetings/page/meetings-page.component.ts'
        );
        /* harmony import */ var _shared_components_participations_buttons_participations_buttons_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../shared/components/participations-buttons/participations-buttons.module */ './src/app/shared/components/participations-buttons/participations-buttons.module.ts'
        );
        /* harmony import */ var _shared_components_meetings_meetings_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../shared/components/meetings/meetings-components.module */ './src/app/shared/components/meetings/meetings-components.module.ts'
        );
        /* harmony import */ var _details_page_meeting_details_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../details-page/meeting-details-page.component */ './src/app/meetings/details-page/meeting-details-page.component.ts'
        );
        /* harmony import */ var _shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../shared/pipes/pipes.module */ './src/app/shared/pipes/pipes.module.ts'
        );
        /* harmony import */ var _meetings_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../meetings.module */ './src/app/meetings/meetings.module.ts'
        );
        /* harmony import */ var _shared_components_remove_button_remove_button_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../shared/components/remove-button/remove-button.module */ './src/app/shared/components/remove-button/remove-button.module.ts'
        );
        /* harmony import */ var _shared_components_meeting_join_button_meeting_join_button_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../shared/components/meeting-join-button/meeting-join-button.module */ './src/app/shared/components/meeting-join-button/meeting-join-button.module.ts'
        );

        const routes = [
          {
            path: '',
            component: _meetings_page_component__WEBPACK_IMPORTED_MODULE_3__['MeetingsPageComponent']
          },
          {
            path: ':memorialYear/:hostId/:meetingId',
            component:
              _details_page_meeting_details_page_component__WEBPACK_IMPORTED_MODULE_6__['MeetingDetailsPageComponent']
          }
        ];
        class MeetingsPageModule {}
        MeetingsPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineNgModule']({
          type: MeetingsPageModule
        });
        MeetingsPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineInjector']({
          factory: function MeetingsPageModule_Factory(t) {
            return new (t || MeetingsPageModule)();
          },
          imports: [
            [
              _meetings_module__WEBPACK_IMPORTED_MODULE_8__['MeetingsModule'],
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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵsetNgModuleScope'](MeetingsPageModule, {
              declarations: [
                _meetings_page_component__WEBPACK_IMPORTED_MODULE_3__['MeetingsPageComponent'],
                _details_page_meeting_details_page_component__WEBPACK_IMPORTED_MODULE_6__['MeetingDetailsPageComponent']
              ],
              imports: [
                _meetings_module__WEBPACK_IMPORTED_MODULE_8__['MeetingsModule'],
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
        /*@__PURE__*/ (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            MeetingsPageModule,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'],
                args: [
                  {
                    imports: [
                      _meetings_module__WEBPACK_IMPORTED_MODULE_8__['MeetingsModule'],
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
                      _meetings_page_component__WEBPACK_IMPORTED_MODULE_3__['MeetingsPageComponent'],
                      _details_page_meeting_details_page_component__WEBPACK_IMPORTED_MODULE_6__[
                        'MeetingDetailsPageComponent'
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

    /***/ './src/app/shared/pipes/phone.pipe.ts':
      /*!********************************************!*\
  !*** ./src/app/shared/pipes/phone.pipe.ts ***!
  \********************************************/
      /*! exports provided: PhonePipe */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'PhonePipe', function() {
          return PhonePipe;
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../services/utils.service */ './src/app/shared/services/utils.service.ts'
        );

        class PhonePipe {
          constructor(utilsService) {
            this.utilsService = utilsService;
          }
          transform(phoneNumber) {
            if (!phoneNumber || phoneNumber.length < 9) {
              return phoneNumber;
            } else {
              const local = this.utilsService.toLocalPhoneNumber(phoneNumber);
              return `${local.substring(0, 3)}-${local.substring(3, 6)}-${local.substring(6)}`;
            }
          }
        }
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
        /*@__PURE__*/ (function() {
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
              return [{ type: _services_utils_service__WEBPACK_IMPORTED_MODULE_1__['UtilsService'] }];
            },
            null
          );
        })();

        /***/
      },

    /***/ './src/app/shared/pipes/pipes.module.ts':
      /*!**********************************************!*\
  !*** ./src/app/shared/pipes/pipes.module.ts ***!
  \**********************************************/
      /*! exports provided: PipesModule */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'PipesModule', function() {
          return PipesModule;
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */ var _phone_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./phone.pipe */ './src/app/shared/pipes/phone.pipe.ts'
        );
        /* harmony import */ var _seniority_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./seniority.pipe */ './src/app/shared/pipes/seniority.pipe.ts'
        );
        /* harmony import */ var _safe_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./safe.pipe */ './src/app/shared/pipes/safe.pipe.ts'
        );

        const pipes = [
          _phone_pipe__WEBPACK_IMPORTED_MODULE_1__['PhonePipe'],
          _seniority_pipe__WEBPACK_IMPORTED_MODULE_2__['SeniorityPipe'],
          _safe_pipe__WEBPACK_IMPORTED_MODULE_3__['SafePipe']
        ];
        class PipesModule {}
        PipesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineNgModule']({ type: PipesModule });
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
        /*@__PURE__*/ (function() {
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

    /***/ './src/app/shared/pipes/safe.pipe.ts':
      /*!*******************************************!*\
  !*** ./src/app/shared/pipes/safe.pipe.ts ***!
  \*******************************************/
      /*! exports provided: SafePipe */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'SafePipe', function() {
          return SafePipe;
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/platform-browser */ './node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js'
        );

        class SafePipe {
          constructor(sanitizer) {
            this.sanitizer = sanitizer;
          }
          transform(url) {
            return this.sanitizer.bypassSecurityTrustResourceUrl(url);
          }
        }
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
        /*@__PURE__*/ (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            SafePipe,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Pipe'],
                args: [{ name: 'safe' }]
              }
            ],
            function() {
              return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__['DomSanitizer'] }];
            },
            null
          );
        })();

        /***/
      },

    /***/ './src/app/shared/pipes/seniority.pipe.ts':
      /*!************************************************!*\
  !*** ./src/app/shared/pipes/seniority.pipe.ts ***!
  \************************************************/
      /*! exports provided: SeniorityPipe */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'SeniorityPipe', function() {
          return SeniorityPipe;
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );

        class SeniorityPipe {
          transform(date) {
            if (!date) {
              return '';
            }
            const diff = new Date(Date.now() - date);
            const years = Math.abs(diff.getUTCFullYear() - 1970);
            if (!years) {
              return '' + (!diff.getMonth() ? 0.1 : (diff.getMonth() / 12).toFixed(1));
            } else {
              return years.toString();
            }
          }
        }
        SeniorityPipe.ɵfac = function SeniorityPipe_Factory(t) {
          return new (t || SeniorityPipe)();
        };
        SeniorityPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefinePipe']({
          name: 'seniority',
          type: SeniorityPipe,
          pure: true
        });
        /*@__PURE__*/ (function() {
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
//# sourceMappingURL=meetings-page-meetings-page-module-es2015.js.map
