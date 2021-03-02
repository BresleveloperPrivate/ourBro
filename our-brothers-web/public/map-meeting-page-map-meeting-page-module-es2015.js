(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["map-meeting-page-map-meeting-page-module"],{

/***/ "./src/app/map-meeting/details-page/map-meeting-details-page.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/map-meeting/details-page/map-meeting-details-page.component.ts ***!
  \********************************************************************************/
/*! exports provided: MapMeetingDetailsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapMeetingDetailsPageComponent", function() { return MapMeetingDetailsPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _shared_services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/data.service */ "./src/app/shared/services/data.service.ts");
/* harmony import */ var _shared_services_utils_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/utils.service */ "./src/app/shared/services/utils.service.ts");
/* harmony import */ var src_app_shared_services_participations_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/participations.service */ "./src/app/shared/services/participations.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _host_map_meeting_input_text_host_map_meeting_input_text_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../host-map-meeting-input-text/host-map-meeting-input-text.component */ "./src/app/map-meeting/host-map-meeting-input-text/host-map-meeting-input-text.component.ts");
/* harmony import */ var _shared_components_remove_button_remove_button_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/components/remove-button/remove-button.component */ "./src/app/shared/components/remove-button/remove-button.component.ts");
/* harmony import */ var _shared_components_meeting_join_button_meeting_join_button_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/components/meeting-join-button/meeting-join-button.component */ "./src/app/shared/components/meeting-join-button/meeting-join-button.component.ts");
/* harmony import */ var _map_meeting_participates_list_map_meeting_participates_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../map-meeting-participates-list/map-meeting-participates-list.component */ "./src/app/map-meeting/map-meeting-participates-list/map-meeting-participates-list.component.ts");
/* harmony import */ var _shared_pipes_phone_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/pipes/phone.pipe */ "./src/app/shared/pipes/phone.pipe.ts");














function MapMeetingDetailsPageComponent_span_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u05E4\u05E8\u05D8\u05D9 \u05D4\u05DE\u05E4\u05D2\u05E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u05D4\u05DE\u05E4\u05D2\u05E9 \u05D9\u05EA\u05E7\u05D9\u05D9\u05DD \u05D0\u05E6\u05DC:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r196 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r196.meeting == null ? null : ctx_r196.meeting.title, " ");
} }
function MapMeetingDetailsPageComponent_span_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", "\u05E0\u05DE\u05D7\u05E7 \u05D0\u05D5 \u05DC\u05D0 \u05E7\u05D9\u05D9\u05DD", " ");
} }
function MapMeetingDetailsPageComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MapMeetingDetailsPageComponent_span_3_ng_container_1_Template, 6, 1, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MapMeetingDetailsPageComponent_span_3_ng_container_2_Template, 2, 1, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r194 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r194.meeting);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r194.meeting);
} }
function MapMeetingDetailsPageComponent_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-host-map-meeting-input-text", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-host-map-meeting-input-text", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r198 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("text", (ctx_r198.meeting == null ? null : ctx_r198.meeting.contact.firstName) + " " + (ctx_r198.meeting == null ? null : ctx_r198.meeting.contact.lastName));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("text", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 2, ctx_r198.meeting == null ? null : ctx_r198.meeting.contact == null ? null : ctx_r198.meeting.contact.phoneNumber));
} }
function MapMeetingDetailsPageComponent_div_4_div_27_Template(rf, ctx) { if (rf & 1) {
    const _r203 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " \u05E2\u05E8\u05D9\u05DB\u05EA \u05E4\u05E8\u05D8\u05D9\u05DD ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapMeetingDetailsPageComponent_div_4_div_27_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r203); const ctx_r202 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r202.onDelete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \u05DE\u05D7\u05E7 \u05DE\u05E4\u05D2\u05E9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r199 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/host/" + ctx_r199.year + "/" + ctx_r199.meeting.hostId + "/" + ctx_r199.meeting.id);
} }
function MapMeetingDetailsPageComponent_div_4_ng_container_28_ng_container_3_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-host-map-meeting-input-text", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r206 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("text", ctx_r206.meeting.bereaved.slains[0].firstName + " " + ctx_r206.meeting.bereaved.slains[0].lastName + " \u05D6\"\u05DC");
} }
function MapMeetingDetailsPageComponent_div_4_ng_container_28_ng_container_3_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-host-map-meeting-input-text", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const slain_r210 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("text", slain_r210.firstName + " " + slain_r210.lastName + " \u05D6\"\u05DC");
} }
function MapMeetingDetailsPageComponent_div_4_ng_container_28_ng_container_3_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MapMeetingDetailsPageComponent_div_4_ng_container_28_ng_container_3_div_5_div_1_Template, 2, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r207 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r207.meeting.bereaved.slains);
} }
function MapMeetingDetailsPageComponent_div_4_ng_container_28_ng_container_3_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-host-map-meeting-input-text", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-host-map-meeting-input-text", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r208 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("text", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, ctx_r208.meeting == null ? null : ctx_r208.meeting.bereaved == null ? null : ctx_r208.meeting.bereaved.phoneNumber));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("text", ctx_r208.meeting == null ? null : ctx_r208.meeting.bereaved == null ? null : ctx_r208.meeting.bereaved.email);
} }
function MapMeetingDetailsPageComponent_div_4_ng_container_28_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-host-map-meeting-input-text", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MapMeetingDetailsPageComponent_div_4_ng_container_28_ng_container_3_div_4_Template, 2, 1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MapMeetingDetailsPageComponent_div_4_ng_container_28_ng_container_3_div_5_Template, 2, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MapMeetingDetailsPageComponent_div_4_ng_container_28_ng_container_3_div_6_Template, 6, 4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r204 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("text", (ctx_r204.meeting == null ? null : ctx_r204.meeting.bereaved) ? ctx_r204.meeting.bereaved.firstName + " " + ctx_r204.meeting.bereaved.lastName : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r204.meeting == null ? null : ctx_r204.meeting.bereaved == null ? null : ctx_r204.meeting.bereaved.slains == null ? null : ctx_r204.meeting.bereaved.slains.length) < 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r204.meeting == null ? null : ctx_r204.meeting.bereaved == null ? null : ctx_r204.meeting.bereaved.slains == null ? null : ctx_r204.meeting.bereaved.slains.length) > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r204.meeting == null ? null : ctx_r204.meeting.bereaved) && ctx_r204.extraData);
} }
function MapMeetingDetailsPageComponent_div_4_ng_container_28_div_4_app_remove_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r214 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-remove-button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("remove", function MapMeetingDetailsPageComponent_div_4_ng_container_28_div_4_app_remove_button_3_Template_app_remove_button_remove_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r214); const ctx_r213 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r213.onBereavedLeaveMeeting(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MapMeetingDetailsPageComponent_div_4_ng_container_28_div_4_app_meeting_join_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r216 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-meeting-join-button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("join", function MapMeetingDetailsPageComponent_div_4_ng_container_28_div_4_app_meeting_join_button_4_Template_app_meeting_join_button_join_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r216); const ctx_r215 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r215.onBereavedJoinMeeting(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r212 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("user", ctx_r212.user)("meeting", ctx_r212.meeting);
} }
function MapMeetingDetailsPageComponent_div_4_ng_container_28_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MapMeetingDetailsPageComponent_div_4_ng_container_28_div_4_app_remove_button_3_Template, 1, 0, "app-remove-button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MapMeetingDetailsPageComponent_div_4_ng_container_28_div_4_app_meeting_join_button_4_Template, 1, 2, "app-meeting-join-button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r205 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r205.participationsService.isBereavedParticipatingMeeting(ctx_r205.user, ctx_r205.meeting));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r205.participationsService.isBereavedCanParticipatingMeeting(ctx_r205.user, ctx_r205.meeting));
} }
function MapMeetingDetailsPageComponent_div_4_ng_container_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u05D0\u05D7/\u05D5\u05EA \u05E9\u05DB\u05D5\u05DC/\u05D4 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MapMeetingDetailsPageComponent_div_4_ng_container_28_ng_container_3_Template, 7, 4, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MapMeetingDetailsPageComponent_div_4_ng_container_28_div_4_Template, 5, 2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r200 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r200.meeting == null ? null : ctx_r200.meeting.bereaved);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r200.participationsService.isBereavedParticipatingMeeting(ctx_r200.user, ctx_r200.meeting) || ctx_r200.participationsService.isBereavedCanParticipatingMeeting(ctx_r200.user, ctx_r200.meeting));
} }
function MapMeetingDetailsPageComponent_div_4_ng_container_29_div_4_app_remove_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r221 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-remove-button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("remove", function MapMeetingDetailsPageComponent_div_4_ng_container_29_div_4_app_remove_button_3_Template_app_remove_button_remove_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r221); const ctx_r220 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r220.onParticipateLeaveMeeting(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MapMeetingDetailsPageComponent_div_4_ng_container_29_div_4_app_meeting_join_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r223 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-meeting-join-button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("join", function MapMeetingDetailsPageComponent_div_4_ng_container_29_div_4_app_meeting_join_button_4_Template_app_meeting_join_button_join_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r223); const ctx_r222 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r222.onParticipateJoinMeeting(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r219 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("user", ctx_r219.user)("meeting", ctx_r219.meeting);
} }
function MapMeetingDetailsPageComponent_div_4_ng_container_29_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MapMeetingDetailsPageComponent_div_4_ng_container_29_div_4_app_remove_button_3_Template, 1, 0, "app-remove-button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MapMeetingDetailsPageComponent_div_4_ng_container_29_div_4_app_meeting_join_button_4_Template, 1, 2, "app-meeting-join-button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r217 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r217.participationsService.isParticipateParticipatingMeeting(ctx_r217.user, ctx_r217.meeting));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r217.participationsService.isParticipateCanParticipatingMeeting(ctx_r217.user, ctx_r217.meeting));
} }
function MapMeetingDetailsPageComponent_div_4_ng_container_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-meeting-participates-list", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MapMeetingDetailsPageComponent_div_4_ng_container_29_div_4_Template, 5, 2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r201 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u05E8\u05E9\u05D9\u05DE\u05EA \u05D4\u05DE\u05E9\u05EA\u05EA\u05E4\u05D9\u05DD \u05D1\u05D0\u05E8\u05D5\u05E2 (", (ctx_r201.meeting.count || 0) + "/" + ctx_r201.meeting.capacity, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("user", ctx_r201.user)("meeting", ctx_r201.meeting)("meetingParticipates", ctx_r201.meetingParticipates);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r201.participationsService.isParticipateParticipatingMeeting(ctx_r201.user, ctx_r201.meeting) || ctx_r201.participationsService.isParticipateCanParticipatingMeeting(ctx_r201.user, ctx_r201.meeting));
} }
function MapMeetingDetailsPageComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MapMeetingDetailsPageComponent_div_4_div_1_Template, 6, 4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-host-map-meeting-input-text", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-host-map-meeting-input-text", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-host-map-meeting-input-text", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-host-map-meeting-input-text", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-host-map-meeting-input-text", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-host-map-meeting-input-text", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "app-host-map-meeting-input-text", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "app-host-map-meeting-input-text", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "app-host-map-meeting-input-text", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, MapMeetingDetailsPageComponent_div_4_div_27_Template, 9, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, MapMeetingDetailsPageComponent_div_4_ng_container_28_Template, 5, 2, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, MapMeetingDetailsPageComponent_div_4_ng_container_29_Template, 5, 5, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r195 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r195.extraData);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("text", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 13, ctx_r195.meeting == null ? null : ctx_r195.meeting.date, "dd.MM.yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("text", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 16, ctx_r195.meeting == null ? null : ctx_r195.meeting.date, "HH:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("text", ctx_r195.meeting == null ? null : ctx_r195.meeting.address == null ? null : ctx_r195.meeting.address.formattedAddress);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("text", ctx_r195.meeting == null ? null : ctx_r195.meeting.capacity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("text", (ctx_r195.meeting == null ? null : ctx_r195.meeting.invited) ? "\u05E1\u05D2\u05D5\u05E8 \u05DC\u05DE\u05D5\u05D6\u05DE\u05E0\u05D9\u05DD \u05D1\u05DC\u05D1\u05D3" : "\u05E4\u05EA\u05D5\u05D7 \u05DC\u05E7\u05D4\u05DC \u05D4\u05E8\u05D7\u05D1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("text", (ctx_r195.meeting == null ? null : ctx_r195.meeting.invited) ? "\u05DC\u05D0 \u05E7\u05D9\u05D9\u05DD  " : "\u05E7\u05D9\u05D9\u05DD");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("text", (ctx_r195.meeting == null ? null : ctx_r195.meeting.invited) ? "\u05DC\u05D0 \u05E7\u05D9\u05D9\u05DD  " : "\u05E7\u05D9\u05D9\u05DD");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("text", (ctx_r195.meeting == null ? null : ctx_r195.meeting.invited) ? "\u05DC\u05D0 \u05DE\u05E1\u05DB\u05D9\u05DD" : " \u05DE\u05E1\u05DB\u05D9\u05DD");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("text", ctx_r195.meeting ? ctx_r195.utilsService.meetingAudienceLabels[ctx_r195.meeting.audience] : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r195.user == null ? null : ctx_r195.user.isAdmin) && ctx_r195.meeting || (ctx_r195.user == null ? null : ctx_r195.user.id) && ctx_r195.meeting);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r195.meeting == null ? null : ctx_r195.meeting.bereaved) || ctx_r195.participationsService.isBereavedCanParticipatingMeeting(ctx_r195.user, ctx_r195.meeting));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r195.user && !(ctx_r195.meeting == null ? null : ctx_r195.meeting.invited) && (ctx_r195.meetingParticipates == null ? null : ctx_r195.meetingParticipates.length));
} }
class MapMeetingDetailsPageComponent {
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
        if (window.confirm('האם ברצונך למחוק את המפגש?')) {
            this.dataService.deleteMeeting(this.meeting.hostId, this.meeting.id, this.year).subscribe(() => {
                this.toastr.success('מפגש נמחק בהצלחה!');
                this.router.navigate(['/meetings']);
            }, () => {
                this.toastr.error('שגיאה - לא ניתן למחוק מפגש. נא ליצור קשר.');
            });
        }
    }
    onBereavedLeaveMeeting() {
        if (this.meeting && this.user) {
            if (window.confirm('האם ברצונך לצאת מהמפגש?')) {
                this.dataService.bereavedLeaveMeeting(this.user, this.meeting).subscribe(() => {
                    this.toastr.success('הוסרת מהמפגש בהצלחה');
                }, () => {
                    this.toastr.error('שגיאה - לא ניתן לצאת מהמפגש. נא ליצור קשר');
                });
            }
        }
    }
    onParticipateLeaveMeeting() {
        if (this.meeting && this.user) {
            if (window.confirm('האם ברצונך לצאת מהמפגש?')) {
                this.dataService.participateLeaveMeeting(this.user, this.meeting).subscribe(() => {
                    this.toastr.success('הוסרת מהמפגש בהצלחה');
                }, () => {
                    this.toastr.error('שגיאה - לא ניתן לצאת מהמפגש. נא ליצור קשר');
                });
            }
        }
    }
    onBereavedJoinMeeting() {
        if (this.meeting && this.user) {
            if (window.confirm('האם ברצונך להשתבץ למפגש?')) {
                this.dataService.bereavedJoinMeeting(this.user, this.meeting).subscribe(() => {
                    this.toastr.success('שובצת בהצלחה');
                }, () => {
                    this.toastr.error('שגיאה - לא ניתן להשתבץ למפגש. נא ליצור קשר');
                });
            }
        }
    }
    onParticipateJoinMeeting() {
        if (this.meeting && this.user) {
            if (window.confirm('האם ברצונך להשתבץ למפגש?')) {
                this.dataService.participateJoinMeeting(this.user, this.meeting, this.getAccompanies()).subscribe(() => {
                    this.toastr.success('שובצת בהצלחה');
                }, () => {
                    this.toastr.error('שגיאה - לא ניתן להשתבץ למפגש. נא ליצור קשר');
                });
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
MapMeetingDetailsPageComponent.ɵfac = function MapMeetingDetailsPageComponent_Factory(t) { return new (t || MapMeetingDetailsPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_utils_service__WEBPACK_IMPORTED_MODULE_5__["UtilsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_participations_service__WEBPACK_IMPORTED_MODULE_6__["ParticipationsService"])); };
MapMeetingDetailsPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MapMeetingDetailsPageComponent, selectors: [["app-map-meeting-details-page"]], decls: 5, vars: 2, consts: [["src", "../../../assets/img/meetingsHeader.jpg", 1, "image-header"], [1, "site-divider"], [1, "medium-heading"], [4, "ngIf"], ["class", "meeting-details", 4, "ngIf"], [1, "meeting-details"], ["class", "row", 4, "ngIf"], [1, "row"], [1, "col"], ["iconUrl", "assets/img/host_calendar.svg", "label", "\u05EA\u05D0\u05E8\u05D9\u05DA:", 1, "input", 3, "text"], ["iconUrl", "assets/img/host_clock.svg", "label", "\u05E9\u05E2\u05D4:", 1, "input", 3, "text"], ["iconUrl", "assets/img/host_location.svg", "label", "\u05DB\u05EA\u05D5\u05D1\u05EA:", 1, "input", 3, "text"], ["iconUrl", "assets/img/host_users.svg", "label", "\u05DE\u05E1\u05E4\u05E8 \u05DE\u05D5\u05D6\u05DE\u05E0\u05D9\u05DD:", 1, "input", 3, "text"], ["iconUrl", "assets/img/host_users.svg", 1, "input", 3, "text"], ["iconUrl", "assets/img/host_accessibility.svg", "label", " \u05E0\u05D2\u05D9\u05E9\u05D5\u05EA:", 1, "input", 3, "text"], ["iconUrl", "assets/img/host_tv.svg", 1, "input", 3, "text"], ["iconUrl", "assets/img/host_camera.svg", 1, "input", 3, "text"], ["iconUrl", "assets/img/host_users.svg", "label", "\u05E7\u05D4\u05DC \u05D9\u05E2\u05D3:", 1, "input", 3, "text"], ["iconUrl", "assets/img/host_user.svg", 1, "input", 3, "text"], ["iconUrl", "assets/img/host_phone.svg", 1, "input", 3, "text"], [1, "buttons"], [1, "site-button", "invert", "edit-button", 3, "routerLink"], [1, "fas", "fa-pencil-alt"], [1, "site-button", "danger", "invert", "delete-button", 3, "click"], [1, "far", "fa-trash-alt"], ["class", "col", 4, "ngIf"], ["class", "col", 4, "ngFor", "ngForOf"], ["iconUrl", "assets/img/host_email.svg", 1, "input", 3, "text"], ["class", "button", 3, "remove", 4, "ngIf"], ["class", "button", 3, "user", "meeting", "join", 4, "ngIf"], [1, "button", 3, "remove"], [1, "button", 3, "user", "meeting", "join"], [3, "user", "meeting", "meetingParticipates"]], template: function MapMeetingDetailsPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MapMeetingDetailsPageComponent_span_3_Template, 3, 2, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MapMeetingDetailsPageComponent_div_4_Template, 30, 19, "div", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loadingMeeting);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loadingMeeting || ctx.meeting);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _host_map_meeting_input_text_host_map_meeting_input_text_component__WEBPACK_IMPORTED_MODULE_8__["HostMapMeetingInputTextComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _shared_components_remove_button_remove_button_component__WEBPACK_IMPORTED_MODULE_9__["RemoveButtonComponent"], _shared_components_meeting_join_button_meeting_join_button_component__WEBPACK_IMPORTED_MODULE_10__["MeetingJoinButtonComponent"], _map_meeting_participates_list_map_meeting_participates_list_component__WEBPACK_IMPORTED_MODULE_11__["MeetingParticipatesListComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"], _shared_pipes_phone_pipe__WEBPACK_IMPORTED_MODULE_12__["PhonePipe"]], styles: [".medium-heading[_ngcontent-%COMP%] {\n  min-height: 1em;\n}\n\n.row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  margin: 10px;\n  min-width: 350px;\n  max-width: 400px;\n}\n\n@media only screen and (max-width: 768px) {\n  .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n    margin: 5px;\n  }\n}\n\n.buttons[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.buttons[_ngcontent-%COMP%]   .site-button[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n\n.buttons[_ngcontent-%COMP%]   .site-button.edit-button[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n}\n\n.buttons[_ngcontent-%COMP%]   .site-button.edit-button[_ngcontent-%COMP%]::before {\n  content: \"\";\n  width: 55px;\n  height: 50px;\n  background-image: url('host_edit_white.svg');\n  background-position: 50% 50%;\n  background-size: 20px 20px;\n  background-repeat: no-repeat;\n}\n\n.buttons[_ngcontent-%COMP%]   .site-button.delete-button[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n}\n\n.buttons[_ngcontent-%COMP%]   .site-button.delete-button[_ngcontent-%COMP%]::before {\n  content: \"\";\n  width: 65px;\n  height: 50px;\n  background-image: url('host_delete_white.svg');\n  background-position: 50% 50%;\n  background-size: 20px 20px;\n  background-repeat: no-repeat;\n}\n\n.share-container[_ngcontent-%COMP%] {\n  width: 370px;\n  display: flex;\n  align-items: center;\n}\n\n.share-container[_ngcontent-%COMP%]   .share-text[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #818181;\n  font-family: \"Heebo\";\n}\n\n.share-container[_ngcontent-%COMP%]   .facebook-icon[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 28px;\n  background-image: url('facebook.png');\n  background-size: 100% 100%;\n}\n\n.share-container[_ngcontent-%COMP%]   .whatsapp-icon[_ngcontent-%COMP%] {\n  width: 25px;\n  height: 25px;\n  background-image: url('whatsapp.png');\n  background-size: 100% 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFwLW1lZXRpbmcvZGV0YWlscy1wYWdlL0M6XFxVc2Vyc1xcVGVoaWxhXFxEZXNrdG9wXFxnb29kLXByb2plY3RcXG91cmJyb3RoZXJzLW91cmJyb3RoZXJzXFxvdXItYnJvdGhlcnMtd2ViL3NyY1xcYXBwXFxtYXAtbWVldGluZ1xcZGV0YWlscy1wYWdlXFxtYXAtbWVldGluZy1kZXRhaWxzLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21hcC1tZWV0aW5nL2RldGFpbHMtcGFnZS9tYXAtbWVldGluZy1kZXRhaWxzLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FDQ0Y7O0FEQ0U7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURDSTtFQU5GO0lBT0ksV0FBQTtFQ0VKO0FBQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUNDRjs7QURDRTtFQUNFLFlBQUE7QUNDSjs7QURDSTtFQUNFLGNBQUE7QUNDTjs7QURDTTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDRDQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQkFBQTtFQUNBLDRCQUFBO0FDQ1I7O0FER0k7RUFDRSxjQUFBO0FDRE47O0FER007RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw4Q0FBQTtFQUNBLDRCQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtBQ0RSOztBRE9BO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0pGOztBRE1FO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQ0pKOztBRE9FO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQ0FBQTtFQUNBLDBCQUFBO0FDTEo7O0FEUUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFDQUFBO0VBQ0EsMEJBQUE7QUNOSiIsImZpbGUiOiJzcmMvYXBwL21hcC1tZWV0aW5nL2RldGFpbHMtcGFnZS9tYXAtbWVldGluZy1kZXRhaWxzLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVkaXVtLWhlYWRpbmcge1xyXG4gIG1pbi1oZWlnaHQ6IDFlbTtcclxufVxyXG5cclxuLnJvdyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gIC5jb2wge1xyXG4gICAgZmxleDogMCAwIGF1dG87XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBtaW4td2lkdGg6IDM1MHB4O1xyXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmJ1dHRvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gIC5zaXRlLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcblxyXG4gICAgJi5lZGl0LWJ1dHRvbiB7XHJcbiAgICAgIGZsZXg6IDAgMCBhdXRvO1xyXG5cclxuICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICB3aWR0aDogNTVweDtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvaG9zdF9lZGl0X3doaXRlLnN2Zyk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDIwcHggMjBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJi5kZWxldGUtYnV0dG9uIHtcclxuICAgICAgZmxleDogMCAwIGF1dG87XHJcblxyXG4gICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgIHdpZHRoOiA2NXB4O1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZy9ob3N0X2RlbGV0ZV93aGl0ZS5zdmcpO1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAyMHB4IDIwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnNoYXJlLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDM3MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgLnNoYXJlLXRleHQge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY29sb3I6ICM4MTgxODE7XHJcbiAgICBmb250LWZhbWlseTogJ0hlZWJvJztcclxuICB9XHJcblxyXG4gIC5mYWNlYm9vay1pY29uIHtcclxuICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgaGVpZ2h0OiAyOHB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvZmFjZWJvb2sucG5nKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLndoYXRzYXBwLWljb24ge1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZy93aGF0c2FwcC5wbmcpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgfVxyXG59XHJcbiIsIi5tZWRpdW0taGVhZGluZyB7XG4gIG1pbi1oZWlnaHQ6IDFlbTtcbn1cblxuLnJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ucm93IC5jb2wge1xuICBmbGV4OiAwIDAgYXV0bztcbiAgbWFyZ2luOiAxMHB4O1xuICBtaW4td2lkdGg6IDM1MHB4O1xuICBtYXgtd2lkdGg6IDQwMHB4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAucm93IC5jb2wge1xuICAgIG1hcmdpbjogNXB4O1xuICB9XG59XG5cbi5idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uYnV0dG9ucyAuc2l0ZS1idXR0b24ge1xuICBtYXJnaW46IDEwcHg7XG59XG4uYnV0dG9ucyAuc2l0ZS1idXR0b24uZWRpdC1idXR0b24ge1xuICBmbGV4OiAwIDAgYXV0bztcbn1cbi5idXR0b25zIC5zaXRlLWJ1dHRvbi5lZGl0LWJ1dHRvbjo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDU1cHg7XG4gIGhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvaG9zdF9lZGl0X3doaXRlLnN2Zyk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG4gIGJhY2tncm91bmQtc2l6ZTogMjBweCAyMHB4O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuLmJ1dHRvbnMgLnNpdGUtYnV0dG9uLmRlbGV0ZS1idXR0b24ge1xuICBmbGV4OiAwIDAgYXV0bztcbn1cbi5idXR0b25zIC5zaXRlLWJ1dHRvbi5kZWxldGUtYnV0dG9uOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogNjVweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZy9ob3N0X2RlbGV0ZV93aGl0ZS5zdmcpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xuICBiYWNrZ3JvdW5kLXNpemU6IDIwcHggMjBweDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cblxuLnNoYXJlLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAzNzBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5zaGFyZS1jb250YWluZXIgLnNoYXJlLXRleHQge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjODE4MTgxO1xuICBmb250LWZhbWlseTogXCJIZWVib1wiO1xufVxuLnNoYXJlLWNvbnRhaW5lciAuZmFjZWJvb2staWNvbiB7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDI4cHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaW1nL2ZhY2Vib29rLnBuZyk7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xufVxuLnNoYXJlLWNvbnRhaW5lciAud2hhdHNhcHAtaWNvbiB7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaW1nL3doYXRzYXBwLnBuZyk7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapMeetingDetailsPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-map-meeting-details-page',
                templateUrl: './map-meeting-details-page.component.html',
                styleUrls: ['./map-meeting-details-page.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] }, { type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _shared_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] }, { type: _shared_services_utils_service__WEBPACK_IMPORTED_MODULE_5__["UtilsService"] }, { type: src_app_shared_services_participations_service__WEBPACK_IMPORTED_MODULE_6__["ParticipationsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/map-meeting/host-map-meeting-input-text/host-map-meeting-input-text.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/map-meeting/host-map-meeting-input-text/host-map-meeting-input-text.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: HostMapMeetingInputTextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HostMapMeetingInputTextComponent", function() { return HostMapMeetingInputTextComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function HostMapMeetingInputTextComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 5);
} if (rf & 2) {
    const ctx_r224 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(" + ctx_r224.iconUrl + ")", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);
} }
function HostMapMeetingInputTextComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r225 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r225.label);
} }
function HostMapMeetingInputTextComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r226 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", ctx_r226.info, ")");
} }
class HostMapMeetingInputTextComponent {
}
HostMapMeetingInputTextComponent.ɵfac = function HostMapMeetingInputTextComponent_Factory(t) { return new (t || HostMapMeetingInputTextComponent)(); };
HostMapMeetingInputTextComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HostMapMeetingInputTextComponent, selectors: [["app-host-map-meeting-input-text"]], inputs: { iconUrl: "iconUrl", label: "label", text: "text", info: "info" }, decls: 6, vars: 4, consts: [[1, "input-container"], ["class", "input-icon", 3, "background-image", 4, "ngIf"], ["class", "input-label", 4, "ngIf"], [1, "input-text"], ["class", "input-info", 4, "ngIf"], [1, "input-icon"], [1, "input-label"], [1, "input-info"]], template: function HostMapMeetingInputTextComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HostMapMeetingInputTextComponent_div_1_Template, 1, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HostMapMeetingInputTextComponent_div_2_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HostMapMeetingInputTextComponent_div_5_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.iconUrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.text);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.info);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".input-container[_ngcontent-%COMP%] {\n  padding: 5px;\n  background-color: white;\n  border: 1px solid #e5e5e5;\n  display: flex;\n  align-items: center;\n}\n.input-container[_ngcontent-%COMP%]   .input-icon[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  width: 65px;\n  height: 50px;\n  background-position: 50% 50%;\n  background-size: 24px 24px;\n  background-repeat: no-repeat;\n}\n.input-container[_ngcontent-%COMP%]   .input-label[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  font-size: 18px;\n  margin-left: 10px;\n  color: #999999;\n  font-family: \"Heebo\";\n}\n.input-container[_ngcontent-%COMP%]   .input-text[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  font-size: 18px;\n  font-family: \"Heebo\";\n  color: #999999;\n}\n.input-container[_ngcontent-%COMP%]   .input-info[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  margin-right: 10px;\n  font-size: 18px;\n  font-family: \"Heebo\";\n  color: #999999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFwLW1lZXRpbmcvaG9zdC1tYXAtbWVldGluZy1pbnB1dC10ZXh0L0M6XFxVc2Vyc1xcVGVoaWxhXFxEZXNrdG9wXFxnb29kLXByb2plY3RcXG91cmJyb3RoZXJzLW91cmJyb3RoZXJzXFxvdXItYnJvdGhlcnMtd2ViL3NyY1xcYXBwXFxtYXAtbWVldGluZ1xcaG9zdC1tYXAtbWVldGluZy1pbnB1dC10ZXh0XFxob3N0LW1hcC1tZWV0aW5nLWlucHV0LXRleHQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21hcC1tZWV0aW5nL2hvc3QtbWFwLW1lZXRpbmctaW5wdXQtdGV4dC9ob3N0LW1hcC1tZWV0aW5nLWlucHV0LXRleHQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0NGO0FEQ0U7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0VBQ0EsNEJBQUE7QUNDSjtBREVFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQ0FKO0FER0U7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtBQ0RKO0FESUU7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9tYXAtbWVldGluZy9ob3N0LW1hcC1tZWV0aW5nLWlucHV0LXRleHQvaG9zdC1tYXAtbWVldGluZy1pbnB1dC10ZXh0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlucHV0LWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMjksIDIyOSwgMjI5KTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIC5pbnB1dC1pY29uIHtcclxuICAgIGZsZXg6IDAgMCBhdXRvO1xyXG4gICAgd2lkdGg6IDY1cHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAyNHB4IDI0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIH1cclxuXHJcbiAgLmlucHV0LWxhYmVsIHtcclxuICAgIGZsZXg6IDAgMCBhdXRvO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBjb2xvcjogcmdiKDE1MywgMTUzLCAxNTMpO1xyXG4gICAgZm9udC1mYW1pbHk6ICdIZWVibyc7XHJcbiAgfVxyXG5cclxuICAuaW5wdXQtdGV4dCB7XHJcbiAgICBmbGV4OiAwIDAgYXV0bztcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnSGVlYm8nO1xyXG4gICAgY29sb3I6IHJnYigxNTMsIDE1MywgMTUzKTtcclxuICB9XHJcblxyXG4gIC5pbnB1dC1pbmZvIHtcclxuICAgIGZsZXg6IDAgMCBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdIZWVibyc7XHJcbiAgICBjb2xvcjogcmdiKDE1MywgMTUzLCAxNTMpO1xyXG4gIH1cclxufVxyXG4iLCIuaW5wdXQtY29udGFpbmVyIHtcbiAgcGFkZGluZzogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5pbnB1dC1jb250YWluZXIgLmlucHV0LWljb24ge1xuICBmbGV4OiAwIDAgYXV0bztcbiAgd2lkdGg6IDY1cHg7XG4gIGhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcbiAgYmFja2dyb3VuZC1zaXplOiAyNHB4IDI0cHg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG4uaW5wdXQtY29udGFpbmVyIC5pbnB1dC1sYWJlbCB7XG4gIGZsZXg6IDAgMCBhdXRvO1xuICBmb250LXNpemU6IDE4cHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBjb2xvcjogIzk5OTk5OTtcbiAgZm9udC1mYW1pbHk6IFwiSGVlYm9cIjtcbn1cbi5pbnB1dC1jb250YWluZXIgLmlucHV0LXRleHQge1xuICBmbGV4OiAwIDAgYXV0bztcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LWZhbWlseTogXCJIZWVib1wiO1xuICBjb2xvcjogIzk5OTk5OTtcbn1cbi5pbnB1dC1jb250YWluZXIgLmlucHV0LWluZm8ge1xuICBmbGV4OiAwIDAgYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkhlZWJvXCI7XG4gIGNvbG9yOiAjOTk5OTk5O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HostMapMeetingInputTextComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-host-map-meeting-input-text',
                templateUrl: './host-map-meeting-input-text.component.html',
                styleUrls: ['./host-map-meeting-input-text.component.scss']
            }]
    }], null, { iconUrl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], text: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], info: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/map-meeting/map-meeting-participates-list/map-meeting-participates-list.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/map-meeting/map-meeting-participates-list/map-meeting-participates-list.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: MeetingParticipatesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeetingParticipatesListComponent", function() { return MeetingParticipatesListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_pipes_phone_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/pipes/phone.pipe */ "./src/app/shared/pipes/phone.pipe.ts");




function MeetingParticipatesListComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u05D8\u05DC\u05E4\u05D5\u05DF ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \u05DE\u05D9\u05D9\u05DC ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MeetingParticipatesListComponent_div_8_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u05D8\u05DC\u05E4\u05D5\u05DF \u05E0\u05D9\u05D9\u05D3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u05DE\u05D9\u05D9\u05DC");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const participate_r229 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 2, participate_r229.phoneNumber), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", participate_r229.email, " ");
} }
function MeetingParticipatesListComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u05E9\u05DD \u05DE\u05DC\u05D0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u05DE\u05E1\u05E4\u05E8 \u05DE\u05E9\u05EA\u05EA\u05E4\u05D9\u05DD");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MeetingParticipatesListComponent_div_8_ng_container_10_Template, 10, 4, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const participate_r229 = ctx.$implicit;
    const ctx_r228 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", participate_r229.firstName + " " + participate_r229.lastName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", participate_r229.accompanies + 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r228.user.id === ctx_r228.meeting.hostId || ctx_r228.user.isAdmin);
} }
class MeetingParticipatesListComponent {
}
MeetingParticipatesListComponent.ɵfac = function MeetingParticipatesListComponent_Factory(t) { return new (t || MeetingParticipatesListComponent)(); };
MeetingParticipatesListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MeetingParticipatesListComponent, selectors: [["app-meeting-participates-list"]], inputs: { user: "user", meeting: "meeting", meetingParticipates: "meetingParticipates" }, decls: 9, vars: 4, consts: [[1, "list-container"], [1, "header"], [1, "col", "col-name"], [1, "col", "col-capacity"], [4, "ngIf"], [1, "body"], ["class", "row", 4, "ngFor", "ngForOf"], [1, "col", "col-phone"], [1, "col", "col-email"], [1, "row"], [1, "mobile-label"], [1, "name"]], template: function MeetingParticipatesListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u05E9\u05DD \u05DE\u05DC\u05D0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " \u05DE\u05E1\u05E4\u05E8 \u05DE\u05E9\u05EA\u05EA\u05E4\u05D9\u05DD ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MeetingParticipatesListComponent_ng_container_6_Template, 5, 0, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MeetingParticipatesListComponent_div_8_Template, 11, 3, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("extended", ctx.user.id === ctx.meeting.hostId || ctx.user.isAdmin);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user.id === ctx.meeting.hostId || ctx.user.isAdmin);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.meetingParticipates);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], pipes: [_shared_pipes_phone_pipe__WEBPACK_IMPORTED_MODULE_2__["PhonePipe"]], styles: [".list-container[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  max-width: 600px;\n  margin-bottom: 20px;\n}\n.list-container.extended[_ngcontent-%COMP%] {\n  max-width: 770px;\n}\n.list-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  height: 50px;\n  font-size: 19px;\n  font-family: \"Heebo\";\n  color: #818181;\n}\n@media only screen and (max-width: 768px) {\n  .list-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.list-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.list-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .col.col-name[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.list-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .col.col-capacity[_ngcontent-%COMP%] {\n  flex: 0 0 170px;\n}\n.list-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .col.col-phone[_ngcontent-%COMP%] {\n  flex: 0 0 150px;\n}\n.list-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .col.col-email[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.list-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 20px 0;\n  border-top: 1px solid #cccdce;\n}\n.list-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]:last-child() {\n  border-bottom: 1px solid #cccdce;\n}\n@media only screen and (max-width: 768px) {\n  .list-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    margin: 15px;\n  }\n}\n.list-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n  font-size: 19px;\n  font-family: \"Heebo\";\n  color: #818181;\n}\n@media only screen and (max-width: 768px) {\n  .list-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n    width: auto !important;\n  }\n}\n.list-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .mobile-label[_ngcontent-%COMP%] {\n  display: none;\n}\n.list-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .mobile-label[_ngcontent-%COMP%]::after {\n  content: \":\";\n}\n@media only screen and (max-width: 768px) {\n  .list-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .mobile-label[_ngcontent-%COMP%] {\n    display: inline;\n  }\n}\n.list-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col.col-name[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.list-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col.col-name[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-size: 23px;\n  font-family: \"arbel\";\n  color: #00736d;\n}\n.list-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col.col-capacity[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  width: 170px;\n  text-align: center;\n}\n.list-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col.col-phone[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  width: 150px;\n  text-align: center;\n}\n.list-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col.col-email[_ngcontent-%COMP%] {\n  flex: 1;\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFwLW1lZXRpbmcvbWFwLW1lZXRpbmctcGFydGljaXBhdGVzLWxpc3QvQzpcXFVzZXJzXFxUZWhpbGFcXERlc2t0b3BcXGdvb2QtcHJvamVjdFxcb3VyYnJvdGhlcnMtb3VyYnJvdGhlcnNcXG91ci1icm90aGVycy13ZWIvc3JjXFxhcHBcXG1hcC1tZWV0aW5nXFxtYXAtbWVldGluZy1wYXJ0aWNpcGF0ZXMtbGlzdFxcbWFwLW1lZXRpbmctcGFydGljaXBhdGVzLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21hcC1tZWV0aW5nL21hcC1tZWV0aW5nLXBhcnRpY2lwYXRlcy1saXN0L21hcC1tZWV0aW5nLXBhcnRpY2lwYXRlcy1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNDRjtBRENFO0VBQ0UsZ0JBQUE7QUNDSjtBREVFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7QUNBSjtBREVJO0VBUkY7SUFTSSxhQUFBO0VDQ0o7QUFDRjtBRENJO0VBQ0Usa0JBQUE7QUNDTjtBRENNO0VBQ0UsT0FBQTtBQ0NSO0FERU07RUFDRSxlQUFBO0FDQVI7QURHTTtFQUNFLGVBQUE7QUNEUjtBRElNO0VBQ0UsT0FBQTtBQ0ZSO0FET0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7QUNMSjtBRE9JO0VBQ0UsZ0NBQUE7QUNMTjtBRFFJO0VBVkY7SUFXSSxzQkFBQTtJQUNBLHVCQUFBO0lBQ0EsWUFBQTtFQ0xKO0FBQ0Y7QURPSTtFQUNFLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7QUNMTjtBRE9NO0VBTEY7SUFNSSxzQkFBQTtFQ0pOO0FBQ0Y7QURNTTtFQUNFLGFBQUE7QUNKUjtBRE1RO0VBQ0UsWUFBQTtBQ0pWO0FET1E7RUFQRjtJQVFJLGVBQUE7RUNKUjtBQUNGO0FET007RUFDRSxPQUFBO0FDTFI7QURPUTtFQUNFLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7QUNMVjtBRFNNO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ1BSO0FEVU07RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDUlI7QURXTTtFQUNFLE9BQUE7RUFDQSxnQkFBQTtBQ1RSIiwiZmlsZSI6InNyYy9hcHAvbWFwLW1lZXRpbmcvbWFwLW1lZXRpbmctcGFydGljaXBhdGVzLWxpc3QvbWFwLW1lZXRpbmctcGFydGljaXBhdGVzLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGlzdC1jb250YWluZXIge1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIG1heC13aWR0aDogNjAwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHJcbiAgJi5leHRlbmRlZCB7XHJcbiAgICBtYXgtd2lkdGg6IDc3MHB4O1xyXG4gIH1cclxuXHJcbiAgLmhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnSGVlYm8nO1xyXG4gICAgY29sb3I6IHJnYigxMjksIDEyOSwgMTI5KTtcclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbCB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAgICYuY29sLW5hbWUge1xyXG4gICAgICAgIGZsZXg6IDE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuY29sLWNhcGFjaXR5IHtcclxuICAgICAgICBmbGV4OiAwIDAgMTcwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuY29sLXBob25lIHtcclxuICAgICAgICBmbGV4OiAwIDAgMTUwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuY29sLWVtYWlsIHtcclxuICAgICAgICBmbGV4OiAxO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAucm93IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMjBweCAwO1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjY2NkY2U7XHJcblxyXG4gICAgJjpsYXN0LWNoaWxkKCkge1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjY2RjZTtcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICBtYXJnaW46IDE1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgICAgZm9udC1mYW1pbHk6ICdIZWVibyc7XHJcbiAgICAgIGNvbG9yOiByZ2IoMTI5LCAxMjksIDEyOSk7XHJcblxyXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLm1vYmlsZS1sYWJlbCB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuXHJcbiAgICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgICAgY29udGVudDogJzonO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgJi5jb2wtbmFtZSB7XHJcbiAgICAgICAgZmxleDogMTtcclxuXHJcbiAgICAgICAgLm5hbWUge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyM3B4O1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdhcmJlbCc7XHJcbiAgICAgICAgICBjb2xvcjogcmdiKDAsIDExNSwgMTA5KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuY29sLWNhcGFjaXR5IHtcclxuICAgICAgICBmbGV4OiAwIDAgYXV0bztcclxuICAgICAgICB3aWR0aDogMTcwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmNvbC1waG9uZSB7XHJcbiAgICAgICAgZmxleDogMCAwIGF1dG87XHJcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5jb2wtZW1haWwge1xyXG4gICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIubGlzdC1jb250YWluZXIge1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5saXN0LWNvbnRhaW5lci5leHRlbmRlZCB7XG4gIG1heC13aWR0aDogNzcwcHg7XG59XG4ubGlzdC1jb250YWluZXIgLmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogNTBweDtcbiAgZm9udC1zaXplOiAxOXB4O1xuICBmb250LWZhbWlseTogXCJIZWVib1wiO1xuICBjb2xvcjogIzgxODE4MTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmxpc3QtY29udGFpbmVyIC5oZWFkZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbi5saXN0LWNvbnRhaW5lciAuaGVhZGVyIC5jb2wge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubGlzdC1jb250YWluZXIgLmhlYWRlciAuY29sLmNvbC1uYW1lIHtcbiAgZmxleDogMTtcbn1cbi5saXN0LWNvbnRhaW5lciAuaGVhZGVyIC5jb2wuY29sLWNhcGFjaXR5IHtcbiAgZmxleDogMCAwIDE3MHB4O1xufVxuLmxpc3QtY29udGFpbmVyIC5oZWFkZXIgLmNvbC5jb2wtcGhvbmUge1xuICBmbGV4OiAwIDAgMTUwcHg7XG59XG4ubGlzdC1jb250YWluZXIgLmhlYWRlciAuY29sLmNvbC1lbWFpbCB7XG4gIGZsZXg6IDE7XG59XG4ubGlzdC1jb250YWluZXIgLnJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDIwcHggMDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjY2NkY2U7XG59XG4ubGlzdC1jb250YWluZXIgLnJvdzpsYXN0LWNoaWxkKCkge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjY2RjZTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmxpc3QtY29udGFpbmVyIC5yb3cge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgbWFyZ2luOiAxNXB4O1xuICB9XG59XG4ubGlzdC1jb250YWluZXIgLnJvdyAuY29sIHtcbiAgZm9udC1zaXplOiAxOXB4O1xuICBmb250LWZhbWlseTogXCJIZWVib1wiO1xuICBjb2xvcjogIzgxODE4MTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmxpc3QtY29udGFpbmVyIC5yb3cgLmNvbCB7XG4gICAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgfVxufVxuLmxpc3QtY29udGFpbmVyIC5yb3cgLmNvbCAubW9iaWxlLWxhYmVsIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5saXN0LWNvbnRhaW5lciAucm93IC5jb2wgLm1vYmlsZS1sYWJlbDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIjpcIjtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmxpc3QtY29udGFpbmVyIC5yb3cgLmNvbCAubW9iaWxlLWxhYmVsIHtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gIH1cbn1cbi5saXN0LWNvbnRhaW5lciAucm93IC5jb2wuY29sLW5hbWUge1xuICBmbGV4OiAxO1xufVxuLmxpc3QtY29udGFpbmVyIC5yb3cgLmNvbC5jb2wtbmFtZSAubmFtZSB7XG4gIGZvbnQtc2l6ZTogMjNweDtcbiAgZm9udC1mYW1pbHk6IFwiYXJiZWxcIjtcbiAgY29sb3I6ICMwMDczNmQ7XG59XG4ubGlzdC1jb250YWluZXIgLnJvdyAuY29sLmNvbC1jYXBhY2l0eSB7XG4gIGZsZXg6IDAgMCBhdXRvO1xuICB3aWR0aDogMTcwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5saXN0LWNvbnRhaW5lciAucm93IC5jb2wuY29sLXBob25lIHtcbiAgZmxleDogMCAwIGF1dG87XG4gIHdpZHRoOiAxNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmxpc3QtY29udGFpbmVyIC5yb3cgLmNvbC5jb2wtZW1haWwge1xuICBmbGV4OiAxO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufSJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MeetingParticipatesListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-meeting-participates-list',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                templateUrl: './map-meeting-participates-list.component.html',
                styleUrls: ['./map-meeting-participates-list.component.scss']
            }]
    }], null, { user: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], meeting: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], meetingParticipates: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/map-meeting/map-meeting.module.ts":
/*!***************************************************!*\
  !*** ./src/app/map-meeting/map-meeting.module.ts ***!
  \***************************************************/
/*! exports provided: MapMeetingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapMeetingModule", function() { return MapMeetingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _host_map_meeting_input_text_host_map_meeting_input_text_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./host-map-meeting-input-text/host-map-meeting-input-text.component */ "./src/app/map-meeting/host-map-meeting-input-text/host-map-meeting-input-text.component.ts");
/* harmony import */ var _map_meeting_participates_list_map_meeting_participates_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map-meeting-participates-list/map-meeting-participates-list.component */ "./src/app/map-meeting/map-meeting-participates-list/map-meeting-participates-list.component.ts");
/* harmony import */ var _shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/pipes/pipes.module */ "./src/app/shared/pipes/pipes.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






const api = [
    _host_map_meeting_input_text_host_map_meeting_input_text_component__WEBPACK_IMPORTED_MODULE_1__["HostMapMeetingInputTextComponent"],
    _map_meeting_participates_list_map_meeting_participates_list_component__WEBPACK_IMPORTED_MODULE_2__["MeetingParticipatesListComponent"]
];
class MapMeetingModule {
}
MapMeetingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MapMeetingModule });
MapMeetingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MapMeetingModule_Factory(t) { return new (t || MapMeetingModule)(); }, imports: [[_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_3__["PipesModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MapMeetingModule, { declarations: [_host_map_meeting_input_text_host_map_meeting_input_text_component__WEBPACK_IMPORTED_MODULE_1__["HostMapMeetingInputTextComponent"],
        _map_meeting_participates_list_map_meeting_participates_list_component__WEBPACK_IMPORTED_MODULE_2__["MeetingParticipatesListComponent"]], imports: [_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_3__["PipesModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]], exports: [_host_map_meeting_input_text_host_map_meeting_input_text_component__WEBPACK_IMPORTED_MODULE_1__["HostMapMeetingInputTextComponent"],
        _map_meeting_participates_list_map_meeting_participates_list_component__WEBPACK_IMPORTED_MODULE_2__["MeetingParticipatesListComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapMeetingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: api,
                imports: [_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_3__["PipesModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]],
                exports: api
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/map-meeting/page/map-meeting-page.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/map-meeting/page/map-meeting-page.component.ts ***!
  \****************************************************************/
/*! exports provided: MapMeetingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapMeetingPageComponent", function() { return MapMeetingPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/constants */ "./src/app/shared/constants.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/data.service */ "./src/app/shared/services/data.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _shared_components_meetings_meetings_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/components/meetings/meetings.component */ "./src/app/shared/components/meetings/meetings.component.ts");








const oneWeek = 1000 * 60 * 60 * 24 * 7;
class MapMeetingPageComponent {
    constructor(router, dataService, toastr, authService) {
        this.router = router;
        this.dataService = dataService;
        this.toastr = toastr;
        this.authService = authService;
        this.loadingUser = true;
        this.mapShowGuide = false;
        this.year = _shared_constants__WEBPACK_IMPORTED_MODULE_1__["MEMORIAL_YEAR"];
    }
    ngOnInit() {
        this.authService.user.subscribe(user => {
            this.user = user;
            this.loadingUser = false;
            if (!this.mapShowGuide &&
                !(user && user.meetingMapGuideLastVisit && Date.now() - user.meetingMapGuideLastVisit < oneWeek)) {
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
                    : this.dataService.participateJoinMeeting(this.user, meeting, this.getAccompanies())).subscribe(() => {
                    this.toastr.success('שובצת בהצלחה');
                    this.router.navigate([`meetings/${this.year}/${meeting.hostId}/${meeting.id}`]);
                }, () => {
                    this.toastr.error('שגיאה - לא ניתן להשתבץ למפגש. נא ליצור קשר');
                });
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
MapMeetingPageComponent.ɵfac = function MapMeetingPageComponent_Factory(t) { return new (t || MapMeetingPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"])); };
MapMeetingPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MapMeetingPageComponent, selectors: [["app-map-meeting-page"]], decls: 6, vars: 3, consts: [["src", "../../../assets/img/meetingsHeader.jpg", "alt", "Meetings Page Header Image", 1, "image-header"], [1, "site-divider"], [1, "medium-heading"], [1, "container", "meetings-container"], [3, "user", "meetings", "mapShowGuide", "joinMeeting", "guideCompleted"]], template: function MapMeetingPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u05DE\u05E4\u05EA \u05D4\u05DE\u05E4\u05D2\u05E9\u05D9\u05DD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "app-meetings", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("joinMeeting", function MapMeetingPageComponent_Template_app_meetings_joinMeeting_5_listener($event) { return ctx.onJoinMeeting($event); })("guideCompleted", function MapMeetingPageComponent_Template_app_meetings_guideCompleted_5_listener() { return ctx.onMapGuideCompleted(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("user", ctx.user)("meetings", ctx.meetings)("mapShowGuide", ctx.mapShowGuide);
    } }, directives: [_shared_components_meetings_meetings_component__WEBPACK_IMPORTED_MODULE_6__["MeetingsComponent"]], styles: [".participations-buttons[_ngcontent-%COMP%] {\n  margin-top: 60px;\n}\n\n@media only screen and (max-width: 768px) {\n  .medium-heading[_ngcontent-%COMP%] {\n    margin-left: 20px;\n    margin-right: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFwLW1lZXRpbmcvcGFnZS9DOlxcVXNlcnNcXFRlaGlsYVxcRGVza3RvcFxcZ29vZC1wcm9qZWN0XFxvdXJicm90aGVycy1vdXJicm90aGVyc1xcb3VyLWJyb3RoZXJzLXdlYi9zcmNcXGFwcFxcbWFwLW1lZXRpbmdcXHBhZ2VcXG1hcC1tZWV0aW5nLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21hcC1tZWV0aW5nL3BhZ2UvbWFwLW1lZXRpbmctcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FDQ0Y7O0FER0U7RUFERjtJQUVJLGlCQUFBO0lBQ0Esa0JBQUE7RUNDRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbWFwLW1lZXRpbmcvcGFnZS9tYXAtbWVldGluZy1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhcnRpY2lwYXRpb25zLWJ1dHRvbnMge1xyXG4gIG1hcmdpbi10b3A6IDYwcHg7XHJcbn1cclxuXHJcbi5tZWRpdW0taGVhZGluZyB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgfVxyXG59XHJcbiIsIi5wYXJ0aWNpcGF0aW9ucy1idXR0b25zIHtcbiAgbWFyZ2luLXRvcDogNjBweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAubWVkaXVtLWhlYWRpbmcge1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapMeetingPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-map-meeting-page',
                templateUrl: './map-meeting-page.component.html',
                styleUrls: ['./map-meeting-page.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _shared_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }, { type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/map-meeting/page/map-meeting-page.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/map-meeting/page/map-meeting-page.module.ts ***!
  \*************************************************************/
/*! exports provided: MapMeetingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapMeetingPageModule", function() { return MapMeetingPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _map_meeting_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map-meeting-page.component */ "./src/app/map-meeting/page/map-meeting-page.component.ts");
/* harmony import */ var _shared_components_participations_buttons_participations_buttons_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/participations-buttons/participations-buttons.module */ "./src/app/shared/components/participations-buttons/participations-buttons.module.ts");
/* harmony import */ var _shared_components_meetings_meetings_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/meetings/meetings-components.module */ "./src/app/shared/components/meetings/meetings-components.module.ts");
/* harmony import */ var _details_page_map_meeting_details_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../details-page/map-meeting-details-page.component */ "./src/app/map-meeting/details-page/map-meeting-details-page.component.ts");
/* harmony import */ var _shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/pipes/pipes.module */ "./src/app/shared/pipes/pipes.module.ts");
/* harmony import */ var _map_meeting_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../map-meeting.module */ "./src/app/map-meeting/map-meeting.module.ts");
/* harmony import */ var _shared_components_remove_button_remove_button_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/components/remove-button/remove-button.module */ "./src/app/shared/components/remove-button/remove-button.module.ts");
/* harmony import */ var _shared_components_meeting_join_button_meeting_join_button_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/components/meeting-join-button/meeting-join-button.module */ "./src/app/shared/components/meeting-join-button/meeting-join-button.module.ts");













const routes = [
    {
        path: '',
        component: _map_meeting_page_component__WEBPACK_IMPORTED_MODULE_3__["MapMeetingPageComponent"]
    },
    {
        path: ':memorialYear/:hostId/:meetingId',
        component: _details_page_map_meeting_details_page_component__WEBPACK_IMPORTED_MODULE_6__["MapMeetingDetailsPageComponent"]
    }
];
class MapMeetingPageModule {
}
MapMeetingPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MapMeetingPageModule });
MapMeetingPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MapMeetingPageModule_Factory(t) { return new (t || MapMeetingPageModule)(); }, imports: [[
            _map_meeting_module__WEBPACK_IMPORTED_MODULE_8__["MapMeetingModule"],
            _shared_components_participations_buttons_participations_buttons_module__WEBPACK_IMPORTED_MODULE_4__["ParticipationsButtonsModule"],
            _shared_components_meetings_meetings_components_module__WEBPACK_IMPORTED_MODULE_5__["MeetingsComponentsModule"],
            _shared_components_remove_button_remove_button_module__WEBPACK_IMPORTED_MODULE_9__["RemoveButtonModule"],
            _shared_components_meeting_join_button_meeting_join_button_module__WEBPACK_IMPORTED_MODULE_10__["MeetingJoinButtonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MapMeetingPageModule, { declarations: [_map_meeting_page_component__WEBPACK_IMPORTED_MODULE_3__["MapMeetingPageComponent"], _details_page_map_meeting_details_page_component__WEBPACK_IMPORTED_MODULE_6__["MapMeetingDetailsPageComponent"]], imports: [_map_meeting_module__WEBPACK_IMPORTED_MODULE_8__["MapMeetingModule"],
        _shared_components_participations_buttons_participations_buttons_module__WEBPACK_IMPORTED_MODULE_4__["ParticipationsButtonsModule"],
        _shared_components_meetings_meetings_components_module__WEBPACK_IMPORTED_MODULE_5__["MeetingsComponentsModule"],
        _shared_components_remove_button_remove_button_module__WEBPACK_IMPORTED_MODULE_9__["RemoveButtonModule"],
        _shared_components_meeting_join_button_meeting_join_button_module__WEBPACK_IMPORTED_MODULE_10__["MeetingJoinButtonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapMeetingPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _map_meeting_module__WEBPACK_IMPORTED_MODULE_8__["MapMeetingModule"],
                    _shared_components_participations_buttons_participations_buttons_module__WEBPACK_IMPORTED_MODULE_4__["ParticipationsButtonsModule"],
                    _shared_components_meetings_meetings_components_module__WEBPACK_IMPORTED_MODULE_5__["MeetingsComponentsModule"],
                    _shared_components_remove_button_remove_button_module__WEBPACK_IMPORTED_MODULE_9__["RemoveButtonModule"],
                    _shared_components_meeting_join_button_meeting_join_button_module__WEBPACK_IMPORTED_MODULE_10__["MeetingJoinButtonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]
                ],
                declarations: [_map_meeting_page_component__WEBPACK_IMPORTED_MODULE_3__["MapMeetingPageComponent"], _details_page_map_meeting_details_page_component__WEBPACK_IMPORTED_MODULE_6__["MapMeetingDetailsPageComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/pipes/phone.pipe.ts":
/*!********************************************!*\
  !*** ./src/app/shared/pipes/phone.pipe.ts ***!
  \********************************************/
/*! exports provided: PhonePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhonePipe", function() { return PhonePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/utils.service */ "./src/app/shared/services/utils.service.ts");



class PhonePipe {
    constructor(utilsService) {
        this.utilsService = utilsService;
    }
    transform(phoneNumber) {
        if (!phoneNumber || phoneNumber.length < 9) {
            return phoneNumber;
        }
        else {
            const local = this.utilsService.toLocalPhoneNumber(phoneNumber);
            return `${local.substring(0, 3)}-${local.substring(3, 6)}-${local.substring(6)}`;
        }
    }
}
PhonePipe.ɵfac = function PhonePipe_Factory(t) { return new (t || PhonePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_utils_service__WEBPACK_IMPORTED_MODULE_1__["UtilsService"])); };
PhonePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "phone", type: PhonePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PhonePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'phone'
            }]
    }], function () { return [{ type: _services_utils_service__WEBPACK_IMPORTED_MODULE_1__["UtilsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/pipes/pipes.module.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/pipes/pipes.module.ts ***!
  \**********************************************/
/*! exports provided: PipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesModule", function() { return PipesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _phone_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./phone.pipe */ "./src/app/shared/pipes/phone.pipe.ts");
/* harmony import */ var _seniority_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./seniority.pipe */ "./src/app/shared/pipes/seniority.pipe.ts");
/* harmony import */ var _safe_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./safe.pipe */ "./src/app/shared/pipes/safe.pipe.ts");





const pipes = [_phone_pipe__WEBPACK_IMPORTED_MODULE_1__["PhonePipe"], _seniority_pipe__WEBPACK_IMPORTED_MODULE_2__["SeniorityPipe"], _safe_pipe__WEBPACK_IMPORTED_MODULE_3__["SafePipe"]];
class PipesModule {
}
PipesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PipesModule });
PipesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PipesModule_Factory(t) { return new (t || PipesModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PipesModule, { declarations: [_phone_pipe__WEBPACK_IMPORTED_MODULE_1__["PhonePipe"], _seniority_pipe__WEBPACK_IMPORTED_MODULE_2__["SeniorityPipe"], _safe_pipe__WEBPACK_IMPORTED_MODULE_3__["SafePipe"]], exports: [_phone_pipe__WEBPACK_IMPORTED_MODULE_1__["PhonePipe"], _seniority_pipe__WEBPACK_IMPORTED_MODULE_2__["SeniorityPipe"], _safe_pipe__WEBPACK_IMPORTED_MODULE_3__["SafePipe"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PipesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: pipes,
                exports: pipes
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/pipes/safe.pipe.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/pipes/safe.pipe.ts ***!
  \*******************************************/
/*! exports provided: SafePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafePipe", function() { return SafePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");



class SafePipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
}
SafePipe.ɵfac = function SafePipe_Factory(t) { return new (t || SafePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"])); };
SafePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "safe", type: SafePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SafePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'safe' }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/pipes/seniority.pipe.ts":
/*!************************************************!*\
  !*** ./src/app/shared/pipes/seniority.pipe.ts ***!
  \************************************************/
/*! exports provided: SeniorityPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeniorityPipe", function() { return SeniorityPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SeniorityPipe {
    transform(date) {
        if (!date) {
            return '';
        }
        const diff = new Date(Date.now() - date);
        const years = Math.abs(diff.getUTCFullYear() - 1970);
        if (!years) {
            return '' + (!diff.getMonth() ? 0.1 : (diff.getMonth() / 12).toFixed(1));
        }
        else {
            return years.toString();
        }
    }
}
SeniorityPipe.ɵfac = function SeniorityPipe_Factory(t) { return new (t || SeniorityPipe)(); };
SeniorityPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "seniority", type: SeniorityPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SeniorityPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'seniority'
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=map-meeting-page-map-meeting-page-module-es2015.js.map