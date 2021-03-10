function _createForOfIteratorHelper(o, allowArrayLike) {
  var it;
  if (typeof Symbol === 'undefined' || o[Symbol.iterator] == null) {
    if (
      Array.isArray(o) ||
      (it = _unsupportedIterableToArray(o)) ||
      (allowArrayLike && o && typeof o.length === 'number')
    ) {
      if (it) o = it;
      var i = 0;
      var F = function F() {};
      return {
        s: F,
        n: function n() {
          if (i >= o.length) return { done: true };
          return { done: false, value: o[i++] };
        },
        e: function e(_e) {
          throw _e;
        },
        f: F
      };
    }
    throw new TypeError(
      'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
    );
  }
  var normalCompletion = true,
    didErr = false,
    err;
  return {
    s: function s() {
      it = o[Symbol.iterator]();
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it['return'] != null) it['return']();
      } finally {
        if (didErr) throw err;
      }
    }
  };
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

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
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
  ['admin-statistics-page-admin-statistics-page-module'],
  {
    /***/
    './src/app/admin/statistics/active-users-statistics/active-users-statistics.component.ts':
      /*!***********************************************************************************************!*\
    !*** ./src/app/admin/statistics/active-users-statistics/active-users-statistics.component.ts ***!
    \***********************************************************************************************/

      /*! exports provided: ActiveUsersStatisticsComponent */

      /***/
      function srcAppAdminStatisticsActiveUsersStatisticsActiveUsersStatisticsComponentTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'ActiveUsersStatisticsComponent', function() {
          return ActiveUsersStatisticsComponent;
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

        var src_app_shared_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! src/app/shared/constants */
          './src/app/shared/constants.ts'
        );

        var ActiveUsersStatisticsComponent = /*#__PURE__*/ (function() {
          function ActiveUsersStatisticsComponent() {
            _classCallCheck(this, ActiveUsersStatisticsComponent);

            this.total = 0;
          }

          _createClass(ActiveUsersStatisticsComponent, [
            {
              key: 'calcActiveUsers',
              value: function calcActiveUsers(users) {
                var _activeUsers;

                var activeUsers =
                  ((_activeUsers = {}),
                  _defineProperty(_activeUsers, models__WEBPACK_IMPORTED_MODULE_1__['UserRole'].bereaved, {
                    new: 0,
                    old: 0
                  }),
                  _defineProperty(_activeUsers, models__WEBPACK_IMPORTED_MODULE_1__['UserRole'].host, {
                    new: 0,
                    old: 0
                  }),
                  _defineProperty(_activeUsers, models__WEBPACK_IMPORTED_MODULE_1__['UserRole'].participate, {
                    new: 0,
                    old: 0
                  }),
                  _activeUsers);
                var current = new Date(
                  src_app_shared_constants__WEBPACK_IMPORTED_MODULE_2__['MEMORIAL_YEAR'],
                  1,
                  1
                ).getTime();

                var _iterator = _createForOfIteratorHelper(users),
                  _step;

                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                    var user = _step.value;

                    if (user.lastSignInDate >= current) {
                      this.total++;

                      if (user.registered >= current) {
                        activeUsers[user.role]['new']++;
                      } else {
                        activeUsers[user.role].old++;
                      }
                    }
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }

                return activeUsers;
              }
            },
            {
              key: 'users',
              set: function set(users) {
                this.activeUsers = this.calcActiveUsers(users);
              }
            }
          ]);

          return ActiveUsersStatisticsComponent;
        })();

        ActiveUsersStatisticsComponent.ɵfac = function ActiveUsersStatisticsComponent_Factory(t) {
          return new (t || ActiveUsersStatisticsComponent)();
        };

        ActiveUsersStatisticsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineComponent']({
          type: ActiveUsersStatisticsComponent,
          selectors: [['app-active-users-statistics']],
          inputs: {
            users: 'users'
          },
          decls: 44,
          vars: 7,
          consts: [
            [1, 'small-heading'],
            [1, 'table'],
            ['colspan', '2']
          ],
          template: function ActiveUsersStatisticsComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div', 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](1, '\u05E4\u05E2\u05D9\u05DC\u05D9\u05DD');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](2, 'table', 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](3, 'thead');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](4, 'tr');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](5, 'th', 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](6, '\u05D0\u05D7\u05D9\u05DD');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](7, 'th', 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](8, '\u05DE\u05D0\u05E8\u05D7\u05D9\u05DD');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](9, 'th', 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](10, '\u05DE\u05E9\u05EA\u05DE\u05E9\u05D9\u05DD');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](11, 'tr');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](12, 'th');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](13, '\u05D7\u05D3\u05E9\u05D9\u05DD');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](14, 'th');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](15, '\u05D7\u05D5\u05D6\u05E8\u05D9\u05DD');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](16, 'th');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](17, '\u05D7\u05D3\u05E9\u05D9\u05DD');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](18, 'th');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](19, '\u05D7\u05D5\u05D6\u05E8\u05D9\u05DD');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](20, 'th');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](21, '\u05D7\u05D3\u05E9\u05D9\u05DD');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](22, 'th');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](23, '\u05D7\u05D5\u05D6\u05E8\u05D9\u05DD');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](24, 'tbody');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](25, 'tr');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](26, 'td');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](27);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](28, 'td');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](29);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](30, 'td');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](31);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](32, 'td');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](33);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](34, 'td');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](35);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](36, 'td');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](37);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](38, 'tfoot');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](39, 'tr');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](40, 'td');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](41, '\u05E1\u05D4"\u05DB');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](42, 'td');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](43);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](27);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate'](ctx.activeUsers.bereaved['new']);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate'](ctx.activeUsers.bereaved.old);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate'](ctx.activeUsers.host['new']);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate'](ctx.activeUsers.host.old);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate'](ctx.activeUsers.participate['new']);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate'](ctx.activeUsers.participate.old);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate'](ctx.total);
            }
          },
          styles: [
            '\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3N0YXRpc3RpY3MvYWN0aXZlLXVzZXJzLXN0YXRpc3RpY3MvYWN0aXZlLXVzZXJzLXN0YXRpc3RpY3MuY29tcG9uZW50LnNjc3MifQ== */'
          ],
          changeDetection: 0
        });
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            ActiveUsersStatisticsComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                args: [
                  {
                    selector: 'app-active-users-statistics',
                    templateUrl: './active-users-statistics.component.html',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__['ChangeDetectionStrategy'].OnPush,
                    styleUrls: ['./active-users-statistics.component.scss']
                  }
                ]
              }
            ],
            null,
            {
              users: [
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
    './src/app/admin/statistics/admin-statistics.module.ts':
      /*!*************************************************************!*\
    !*** ./src/app/admin/statistics/admin-statistics.module.ts ***!
    \*************************************************************/

      /*! exports provided: AdminStatisticsModule */

      /***/
      function srcAppAdminStatisticsAdminStatisticsModuleTs(module, __webpack_exports__, __webpack_require__) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'AdminStatisticsModule', function() {
          return AdminStatisticsModule;
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

        var _active_users_statistics_active_users_statistics_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./active-users-statistics/active-users-statistics.component */
          './src/app/admin/statistics/active-users-statistics/active-users-statistics.component.ts'
        );
        /* harmony import */

        var _bereaveds_statistics_bereaveds_statistics_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./bereaveds-statistics/bereaveds-statistics.component */
          './src/app/admin/statistics/bereaveds-statistics/bereaveds-statistics.component.ts'
        );
        /* harmony import */

        var _meetings_statistics_meetings_statistics_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./meetings-statistics/meetings-statistics.component */
          './src/app/admin/statistics/meetings-statistics/meetings-statistics.component.ts'
        );
        /* harmony import */

        var _registrations_statistics_registrations_statistics_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./registrations-statistics/registrations-statistics.component */
          './src/app/admin/statistics/registrations-statistics/registrations-statistics.component.ts'
        );

        var api = [
          _active_users_statistics_active_users_statistics_component__WEBPACK_IMPORTED_MODULE_2__[
            'ActiveUsersStatisticsComponent'
          ],
          _bereaveds_statistics_bereaveds_statistics_component__WEBPACK_IMPORTED_MODULE_3__[
            'BereavedsStatisticsComponent'
          ],
          _meetings_statistics_meetings_statistics_component__WEBPACK_IMPORTED_MODULE_4__[
            'MeetingsStatisticsComponent'
          ],
          _registrations_statistics_registrations_statistics_component__WEBPACK_IMPORTED_MODULE_5__[
            'RegistrationsStatisticsComponent'
          ]
        ];

        var AdminStatisticsModule = function AdminStatisticsModule() {
          _classCallCheck(this, AdminStatisticsModule);
        };

        AdminStatisticsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineNgModule']({
          type: AdminStatisticsModule
        });
        AdminStatisticsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineInjector']({
          factory: function AdminStatisticsModule_Factory(t) {
            return new (t || AdminStatisticsModule)();
          },
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__['CommonModule']]]
        });

        (function() {
          (typeof ngJitMode === 'undefined' || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵsetNgModuleScope'](AdminStatisticsModule, {
              declarations: [
                _active_users_statistics_active_users_statistics_component__WEBPACK_IMPORTED_MODULE_2__[
                  'ActiveUsersStatisticsComponent'
                ],
                _bereaveds_statistics_bereaveds_statistics_component__WEBPACK_IMPORTED_MODULE_3__[
                  'BereavedsStatisticsComponent'
                ],
                _meetings_statistics_meetings_statistics_component__WEBPACK_IMPORTED_MODULE_4__[
                  'MeetingsStatisticsComponent'
                ],
                _registrations_statistics_registrations_statistics_component__WEBPACK_IMPORTED_MODULE_5__[
                  'RegistrationsStatisticsComponent'
                ]
              ],
              imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__['CommonModule']],
              exports: [
                _active_users_statistics_active_users_statistics_component__WEBPACK_IMPORTED_MODULE_2__[
                  'ActiveUsersStatisticsComponent'
                ],
                _bereaveds_statistics_bereaveds_statistics_component__WEBPACK_IMPORTED_MODULE_3__[
                  'BereavedsStatisticsComponent'
                ],
                _meetings_statistics_meetings_statistics_component__WEBPACK_IMPORTED_MODULE_4__[
                  'MeetingsStatisticsComponent'
                ],
                _registrations_statistics_registrations_statistics_component__WEBPACK_IMPORTED_MODULE_5__[
                  'RegistrationsStatisticsComponent'
                ]
              ]
            });
        })();
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            AdminStatisticsModule,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'],
                args: [
                  {
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__['CommonModule']],
                    declarations: [api],
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
    './src/app/admin/statistics/bereaveds-statistics/bereaveds-statistics.component.ts':
      /*!*****************************************************************************************!*\
    !*** ./src/app/admin/statistics/bereaveds-statistics/bereaveds-statistics.component.ts ***!
    \*****************************************************************************************/

      /*! exports provided: BereavedsStatisticsComponent */

      /***/
      function srcAppAdminStatisticsBereavedsStatisticsBereavedsStatisticsComponentTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'BereavedsStatisticsComponent', function() {
          return BereavedsStatisticsComponent;
        });
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */

        var src_app_shared_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! src/app/shared/constants */
          './src/app/shared/constants.ts'
        );
        /* harmony import */

        var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/common */
          './node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js'
        );

        var BereavedsStatisticsComponent = /*#__PURE__*/ (function() {
          function BereavedsStatisticsComponent() {
            _classCallCheck(this, BereavedsStatisticsComponent);
          }

          _createClass(BereavedsStatisticsComponent, [
            {
              key: 'calcBereavedsStatistics',
              value: function calcBereavedsStatistics(bereaveds) {
                var _a, _b;

                var bereavedsStatistics = {
                  count: 0,
                  registered: 0
                };
                var current = new Date(
                  src_app_shared_constants__WEBPACK_IMPORTED_MODULE_1__['MEMORIAL_YEAR'],
                  1,
                  1
                ).getTime();

                var _iterator2 = _createForOfIteratorHelper(bereaveds),
                  _step2;

                try {
                  for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                    var bereaved = _step2.value;

                    if (bereaved.lastSignInDate >= current) {
                      bereavedsStatistics.count++;

                      if (
                        bereaved.bereavedParticipation &&
                        ((_b =
                          (_a =
                            bereaved.bereavedParticipation[
                              src_app_shared_constants__WEBPACK_IMPORTED_MODULE_1__['MEMORIAL_YEAR']
                            ]) === null || _a === void 0
                            ? void 0
                            : _a.meetings) === null || _b === void 0
                          ? void 0
                          : _b.length)
                      ) {
                        bereavedsStatistics.registered++;
                      }
                    }
                  }
                } catch (err) {
                  _iterator2.e(err);
                } finally {
                  _iterator2.f();
                }

                return bereavedsStatistics;
              }
            },
            {
              key: 'bereaveds',
              set: function set(bereaveds) {
                this.bereavedsStatistics = this.calcBereavedsStatistics(bereaveds);
              }
            }
          ]);

          return BereavedsStatisticsComponent;
        })();

        BereavedsStatisticsComponent.ɵfac = function BereavedsStatisticsComponent_Factory(t) {
          return new (t || BereavedsStatisticsComponent)();
        };

        BereavedsStatisticsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineComponent']({
          type: BereavedsStatisticsComponent,
          selectors: [['app-bereaveds-statistics']],
          inputs: {
            bereaveds: 'bereaveds'
          },
          decls: 19,
          vars: 5,
          consts: [
            [1, 'small-heading'],
            [1, 'table']
          ],
          template: function BereavedsStatisticsComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div', 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](1, '\u05D0\u05D7\u05D9\u05DD');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](2, 'table', 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](3, 'thead');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](4, 'tr');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](5, 'th');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](6, '\u05D0\u05D7\u05D9\u05DD');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](7, 'th');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](8, '\u05E8\u05E9\u05D5\u05DE\u05D9\u05DD');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](9, 'th');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](10, '\u05D0\u05D7\u05D5\u05D6');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](11, 'tbody');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](12, 'td');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](14, 'td');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](16, 'td');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](17);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpipe'](18, 'percent');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate'](ctx.bereavedsStatistics.count);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate'](ctx.bereavedsStatistics.registered);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate'](
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpipeBind1'](
                  18,
                  3,
                  ctx.bereavedsStatistics.registered / ctx.bereavedsStatistics.count
                )
              );
            }
          },
          pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__['PercentPipe']],
          styles: [
            '\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3N0YXRpc3RpY3MvYmVyZWF2ZWRzLXN0YXRpc3RpY3MvYmVyZWF2ZWRzLXN0YXRpc3RpY3MuY29tcG9uZW50LnNjc3MifQ== */'
          ],
          changeDetection: 0
        });
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            BereavedsStatisticsComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                args: [
                  {
                    selector: 'app-bereaveds-statistics',
                    templateUrl: './bereaveds-statistics.component.html',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__['ChangeDetectionStrategy'].OnPush,
                    styleUrls: ['./bereaveds-statistics.component.scss']
                  }
                ]
              }
            ],
            null,
            {
              bereaveds: [
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
    './src/app/admin/statistics/meetings-statistics/meetings-statistics.component.ts':
      /*!***************************************************************************************!*\
    !*** ./src/app/admin/statistics/meetings-statistics/meetings-statistics.component.ts ***!
    \***************************************************************************************/

      /*! exports provided: MeetingsStatisticsComponent */

      /***/
      function srcAppAdminStatisticsMeetingsStatisticsMeetingsStatisticsComponentTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'MeetingsStatisticsComponent', function() {
          return MeetingsStatisticsComponent;
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

        function MeetingsStatisticsComponent_tr_14_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'tr');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](1, 'td');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](3, 'td');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](5, 'td');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](7, 'td');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpipe'](9, 'percent');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }

          if (rf & 2) {
            var year_r390 = ctx.$implicit;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate'](year_r390.year);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate'](year_r390.meetingStatistics.count);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate'](year_r390.meetingStatistics.registered);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate'](
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpipeBind1'](
                9,
                4,
                year_r390.meetingStatistics.registered / year_r390.meetingStatistics.count
              )
            );
          }
        }

        var MeetingsStatisticsComponent = /*#__PURE__*/ (function() {
          function MeetingsStatisticsComponent() {
            _classCallCheck(this, MeetingsStatisticsComponent);

            this.total = 0;
          }

          _createClass(MeetingsStatisticsComponent, [
            {
              key: 'calcYearlyMeetingsStatistics',
              value: function calcYearlyMeetingsStatistics(meetings) {
                var yearlyMeetingsStatisticsMap = {};

                var _iterator3 = _createForOfIteratorHelper(meetings),
                  _step3;

                try {
                  for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
                    var meeting = _step3.value;
                    var year = new Date(meeting.date).getFullYear();
                    this.total++;
                    yearlyMeetingsStatisticsMap[year] = yearlyMeetingsStatisticsMap[year] || {
                      count: 0,
                      registered: 0
                    };
                    yearlyMeetingsStatisticsMap[year].count++;

                    if (meeting.bereaved) {
                      yearlyMeetingsStatisticsMap[year].registered++;
                    }
                  }
                } catch (err) {
                  _iterator3.e(err);
                } finally {
                  _iterator3.f();
                }

                return Object.keys(yearlyMeetingsStatisticsMap)
                  .map(function(year) {
                    return {
                      year: Number.parseInt(year),
                      meetingStatistics: yearlyMeetingsStatisticsMap[year]
                    };
                  })
                  .sort(function(a, b) {
                    return b.year - a.year;
                  });
              }
            },
            {
              key: 'meetings',
              set: function set(meetings) {
                this.yearlyMeetingsStatistics = this.calcYearlyMeetingsStatistics(meetings);
              }
            }
          ]);

          return MeetingsStatisticsComponent;
        })();

        MeetingsStatisticsComponent.ɵfac = function MeetingsStatisticsComponent_Factory(t) {
          return new (t || MeetingsStatisticsComponent)();
        };

        MeetingsStatisticsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineComponent']({
          type: MeetingsStatisticsComponent,
          selectors: [['app-meetings-statistics']],
          inputs: {
            meetings: 'meetings'
          },
          decls: 21,
          vars: 2,
          consts: [
            [1, 'small-heading'],
            [1, 'table'],
            [4, 'ngFor', 'ngForOf']
          ],
          template: function MeetingsStatisticsComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div', 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](1, '\u05DE\u05E4\u05D2\u05E9\u05D9\u05DD');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](2, 'table', 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](3, 'thead');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](4, 'tr');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](5, 'th');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](6, '\u05E9\u05E0\u05D4');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](7, 'th');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](8, '\u05DE\u05E4\u05D2\u05E9\u05D9\u05DD');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](9, 'th');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](10, '\u05E8\u05E9\u05D5\u05DE\u05D9\u05DD');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](11, 'th');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](12, '\u05D0\u05D7\u05D5\u05D6');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](13, 'tbody');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                14,
                MeetingsStatisticsComponent_tr_14_Template,
                10,
                6,
                'tr',
                2
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](15, 'tfoot');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](16, 'tr');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](17, 'td');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](18, '\u05E1\u05D4"\u05DB');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](19, 'td');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](20);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngForOf', ctx.yearlyMeetingsStatistics);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate'](ctx.total);
            }
          },
          directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__['NgForOf']],
          pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__['PercentPipe']],
          styles: [
            '\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3N0YXRpc3RpY3MvbWVldGluZ3Mtc3RhdGlzdGljcy9tZWV0aW5ncy1zdGF0aXN0aWNzLmNvbXBvbmVudC5zY3NzIn0= */'
          ],
          changeDetection: 0
        });
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            MeetingsStatisticsComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                args: [
                  {
                    selector: 'app-meetings-statistics',
                    templateUrl: './meetings-statistics.component.html',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__['ChangeDetectionStrategy'].OnPush,
                    styleUrls: ['./meetings-statistics.component.scss']
                  }
                ]
              }
            ],
            null,
            {
              meetings: [
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
    './src/app/admin/statistics/page/admin-statistics-page.component.ts':
      /*!**************************************************************************!*\
    !*** ./src/app/admin/statistics/page/admin-statistics-page.component.ts ***!
    \**************************************************************************/

      /*! exports provided: AdminStatisticsPageComponent */

      /***/
      function srcAppAdminStatisticsPageAdminStatisticsPageComponentTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'AdminStatisticsPageComponent', function() {
          return AdminStatisticsPageComponent;
        });
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */

        var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! rxjs/operators */
          './node_modules/rxjs/_esm2015/operators/index.js'
        );
        /* harmony import */

        var _shared_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../shared/services/data.service */
          './src/app/shared/services/data.service.ts'
        );
        /* harmony import */

        var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @angular/common */
          './node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js'
        );
        /* harmony import */

        var _active_users_statistics_active_users_statistics_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../active-users-statistics/active-users-statistics.component */
          './src/app/admin/statistics/active-users-statistics/active-users-statistics.component.ts'
        );
        /* harmony import */

        var _bereaveds_statistics_bereaveds_statistics_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../bereaveds-statistics/bereaveds-statistics.component */
          './src/app/admin/statistics/bereaveds-statistics/bereaveds-statistics.component.ts'
        );
        /* harmony import */

        var _meetings_statistics_meetings_statistics_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../meetings-statistics/meetings-statistics.component */
          './src/app/admin/statistics/meetings-statistics/meetings-statistics.component.ts'
        );
        /* harmony import */

        var _registrations_statistics_registrations_statistics_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../registrations-statistics/registrations-statistics.component */
          './src/app/admin/statistics/registrations-statistics/registrations-statistics.component.ts'
        );

        function AdminStatisticsPageComponent_div_3_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div', 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](1, ' \u05D8\u05D5\u05E2\u05DF.. ');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }
        }

        function AdminStatisticsPageComponent_div_4_div_1_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div', 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }

          if (rf & 2) {
            var ctx_r395 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext'](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate1'](' ', ctx_r395.error, ' ');
          }
        }

        function AdminStatisticsPageComponent_div_4_ng_template_2_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](0, 'app-active-users-statistics', 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](1, 'div', 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](2, 'app-bereaveds-statistics', 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](3, 'div', 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](4, 'app-meetings-statistics', 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](5, 'div', 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](6, 'app-registrations-statistics', 8);
          }

          if (rf & 2) {
            var ctx_r397 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext'](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('users', ctx_r397.users);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('bereaveds', ctx_r397.bereaveds);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('meetings', ctx_r397.meetings);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('users', ctx_r397.users);
          }
        }

        function AdminStatisticsPageComponent_div_4_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
              1,
              AdminStatisticsPageComponent_div_4_div_1_Template,
              2,
              1,
              'div',
              5
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
              2,
              AdminStatisticsPageComponent_div_4_ng_template_2_Template,
              7,
              4,
              'ng-template',
              null,
              6,
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplateRefExtractor']
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }

          if (rf & 2) {
            var _r396 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵreference'](3);

            var ctx_r394 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngIf', ctx_r394.error)('ngIfElse', _r396);
          }
        }

        var AdminStatisticsPageComponent = /*#__PURE__*/ (function() {
          function AdminStatisticsPageComponent(dataService) {
            _classCallCheck(this, AdminStatisticsPageComponent);

            this.dataService = dataService;
            this.loadingUsers = true;
            this.loadingBereaveds = true;
            this.loadingMeetings = true;
          }

          _createClass(AdminStatisticsPageComponent, [
            {
              key: 'ngOnInit',
              value: function ngOnInit() {
                var _this = this;

                this.dataService
                  .getUsers()
                  .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__['take'])(1))
                  .subscribe(
                    function(users) {
                      _this.loadingUsers = false;
                      _this.users = users;
                    },
                    function(error) {
                      _this.loadingUsers = false;
                      _this.error = error.toString();
                    }
                  );
                this.dataService
                  .getBereaveds()
                  .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__['take'])(1))
                  .subscribe(
                    function(bereaveds) {
                      _this.loadingBereaveds = false;
                      _this.bereaveds = bereaveds;
                    },
                    function(error) {
                      _this.loadingBereaveds = false;
                      _this.error = error.toString();
                    }
                  );
                this.dataService
                  .getAllMeetings()
                  .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__['take'])(1))
                  .subscribe(
                    function(meetings) {
                      _this.loadingMeetings = false;
                      _this.meetings = meetings;
                    },
                    function(error) {
                      _this.loadingMeetings = false;
                      _this.error = error.toString();
                    }
                  );
              }
            }
          ]);

          return AdminStatisticsPageComponent;
        })();

        AdminStatisticsPageComponent.ɵfac = function AdminStatisticsPageComponent_Factory(t) {
          return new (t || AdminStatisticsPageComponent)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
              _shared_services_data_service__WEBPACK_IMPORTED_MODULE_2__['DataService']
            )
          );
        };

        AdminStatisticsPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineComponent']({
          type: AdminStatisticsPageComponent,
          selectors: [['app-admin-statistics-page']],
          decls: 5,
          vars: 2,
          consts: [
            [1, 'container'],
            [1, 'medium-heading'],
            ['class', 'loading', 4, 'ngIf'],
            [4, 'ngIf'],
            [1, 'loading'],
            ['class', 'error-message', 4, 'ngIf', 'ngIfElse'],
            ['statisticsTables', ''],
            [1, 'error-message'],
            [3, 'users'],
            [1, 'site-divider'],
            [3, 'bereaveds'],
            [3, 'meetings']
          ],
          template: function AdminStatisticsPageComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div', 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](1, 'div', 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                2,
                '\u05E1\u05D8\u05D8\u05D9\u05E1\u05D8\u05D9\u05E7\u05D5\u05EA'
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                3,
                AdminStatisticsPageComponent_div_3_Template,
                2,
                0,
                'div',
                2
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                4,
                AdminStatisticsPageComponent_div_4_Template,
                4,
                2,
                'div',
                3
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
                'ngIf',
                ctx.loadingUsers || ctx.loadingBereaveds || ctx.loadingMeetings
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
                'ngIf',
                !(ctx.loadingUsers || ctx.loadingBereaveds || ctx.loadingMeetings)
              );
            }
          },
          directives: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__['NgIf'],
            _active_users_statistics_active_users_statistics_component__WEBPACK_IMPORTED_MODULE_4__[
              'ActiveUsersStatisticsComponent'
            ],
            _bereaveds_statistics_bereaveds_statistics_component__WEBPACK_IMPORTED_MODULE_5__[
              'BereavedsStatisticsComponent'
            ],
            _meetings_statistics_meetings_statistics_component__WEBPACK_IMPORTED_MODULE_6__[
              'MeetingsStatisticsComponent'
            ],
            _registrations_statistics_registrations_statistics_component__WEBPACK_IMPORTED_MODULE_7__[
              'RegistrationsStatisticsComponent'
            ]
          ],
          styles: [
            '.loading[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 999999;\n}\n\n.error-message[_ngcontent-%COMP%] {\n  direction: ltr;\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vc3RhdGlzdGljcy9wYWdlL0M6XFxVc2Vyc1xcVGVoaWxhXFxsYXN0XFxvdXJCcm9cXG91ci1icm90aGVycy13ZWIvc3JjXFxhcHBcXGFkbWluXFxzdGF0aXN0aWNzXFxwYWdlXFxhZG1pbi1zdGF0aXN0aWNzLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FkbWluL3N0YXRpc3RpY3MvcGFnZS9hZG1pbi1zdGF0aXN0aWNzLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3N0YXRpc3RpY3MvcGFnZS9hZG1pbi1zdGF0aXN0aWNzLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9hZGluZyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICB6LWluZGV4OiA5OTk5OTk7XHJcbn1cclxuXHJcbi5lcnJvci1tZXNzYWdlIHtcclxuICBkaXJlY3Rpb246IGx0cjtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbiIsIi5sb2FkaW5nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgei1pbmRleDogOTk5OTk5O1xufVxuXG4uZXJyb3ItbWVzc2FnZSB7XG4gIGRpcmVjdGlvbjogbHRyO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufSJdfQ== */'
          ]
        });
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            AdminStatisticsPageComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                args: [
                  {
                    selector: 'app-admin-statistics-page',
                    templateUrl: './admin-statistics-page.component.html',
                    styleUrls: ['./admin-statistics-page.component.scss']
                  }
                ]
              }
            ],
            function() {
              return [
                {
                  type: _shared_services_data_service__WEBPACK_IMPORTED_MODULE_2__['DataService']
                }
              ];
            },
            null
          );
        })();
        /***/
      },

    /***/
    './src/app/admin/statistics/page/admin-statistics-page.module.ts':
      /*!***********************************************************************!*\
    !*** ./src/app/admin/statistics/page/admin-statistics-page.module.ts ***!
    \***********************************************************************/

      /*! exports provided: AdminStatisticsPageModule */

      /***/
      function srcAppAdminStatisticsPageAdminStatisticsPageModuleTs(module, __webpack_exports__, __webpack_require__) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'AdminStatisticsPageModule', function() {
          return AdminStatisticsPageModule;
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

        var _admin_statistics_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../admin-statistics.module */
          './src/app/admin/statistics/admin-statistics.module.ts'
        );
        /* harmony import */

        var _admin_statistics_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./admin-statistics-page.component */
          './src/app/admin/statistics/page/admin-statistics-page.component.ts'
        );
        /* harmony import */

        var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @angular/common */
          './node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js'
        );

        var routes = [
          {
            path: '',
            component: _admin_statistics_page_component__WEBPACK_IMPORTED_MODULE_3__['AdminStatisticsPageComponent']
          }
        ];

        var AdminStatisticsPageModule = function AdminStatisticsPageModule() {
          _classCallCheck(this, AdminStatisticsPageModule);
        };

        AdminStatisticsPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineNgModule']({
          type: AdminStatisticsPageModule
        });
        AdminStatisticsPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineInjector']({
          factory: function AdminStatisticsPageModule_Factory(t) {
            return new (t || AdminStatisticsPageModule)();
          },
          imports: [
            [
              _angular_common__WEBPACK_IMPORTED_MODULE_4__['CommonModule'],
              _admin_statistics_module__WEBPACK_IMPORTED_MODULE_2__['AdminStatisticsModule'],
              _angular_router__WEBPACK_IMPORTED_MODULE_1__['RouterModule'].forChild(routes)
            ]
          ]
        });

        (function() {
          (typeof ngJitMode === 'undefined' || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵsetNgModuleScope'](AdminStatisticsPageModule, {
              declarations: [
                _admin_statistics_page_component__WEBPACK_IMPORTED_MODULE_3__['AdminStatisticsPageComponent']
              ],
              imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_4__['CommonModule'],
                _admin_statistics_module__WEBPACK_IMPORTED_MODULE_2__['AdminStatisticsModule'],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__['RouterModule']
              ]
            });
        })();
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            AdminStatisticsPageModule,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'],
                args: [
                  {
                    declarations: [
                      _admin_statistics_page_component__WEBPACK_IMPORTED_MODULE_3__['AdminStatisticsPageComponent']
                    ],
                    imports: [
                      _angular_common__WEBPACK_IMPORTED_MODULE_4__['CommonModule'],
                      _admin_statistics_module__WEBPACK_IMPORTED_MODULE_2__['AdminStatisticsModule'],
                      _angular_router__WEBPACK_IMPORTED_MODULE_1__['RouterModule'].forChild(routes)
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
    './src/app/admin/statistics/registrations-statistics/registrations-statistics.component.ts':
      /*!*************************************************************************************************!*\
    !*** ./src/app/admin/statistics/registrations-statistics/registrations-statistics.component.ts ***!
    \*************************************************************************************************/

      /*! exports provided: RegistrationsStatisticsComponent */

      /***/
      function srcAppAdminStatisticsRegistrationsStatisticsRegistrationsStatisticsComponentTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'RegistrationsStatisticsComponent', function() {
          return RegistrationsStatisticsComponent;
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

        function RegistrationsStatisticsComponent_tr_14_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'tr');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](1, 'td');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](3, 'td');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](5, 'td');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](7, 'td');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }

          if (rf & 2) {
            var year_r392 = ctx.$implicit;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate'](year_r392.year);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate'](year_r392.registeredUsers.participate);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate'](year_r392.registeredUsers.bereaved);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate'](year_r392.registeredUsers.host);
          }
        }

        var RegistrationsStatisticsComponent = /*#__PURE__*/ (function() {
          function RegistrationsStatisticsComponent() {
            _classCallCheck(this, RegistrationsStatisticsComponent);

            this.total = 0;
          }

          _createClass(RegistrationsStatisticsComponent, [
            {
              key: 'calcYearlyRegisteredUsers',
              value: function calcYearlyRegisteredUsers(users) {
                var yearlyRegisteredUsersMap = {};

                var _iterator4 = _createForOfIteratorHelper(users),
                  _step4;

                try {
                  for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
                    var user = _step4.value;
                    var year = new Date(user.registered).getFullYear();

                    if (!Number.isNaN(year)) {
                      var _ref;

                      this.total++;
                      yearlyRegisteredUsersMap[year] =
                        yearlyRegisteredUsersMap[year] ||
                        ((_ref = {}),
                        _defineProperty(_ref, models__WEBPACK_IMPORTED_MODULE_1__['UserRole'].bereaved, 0),
                        _defineProperty(_ref, models__WEBPACK_IMPORTED_MODULE_1__['UserRole'].host, 0),
                        _defineProperty(_ref, models__WEBPACK_IMPORTED_MODULE_1__['UserRole'].participate, 0),
                        _ref);
                      yearlyRegisteredUsersMap[year][user.role]++;
                    }
                  }
                } catch (err) {
                  _iterator4.e(err);
                } finally {
                  _iterator4.f();
                }

                return Object.keys(yearlyRegisteredUsersMap)
                  .map(function(year) {
                    return {
                      year: Number.parseInt(year),
                      registeredUsers: yearlyRegisteredUsersMap[year]
                    };
                  })
                  .sort(function(a, b) {
                    return b.year - a.year;
                  });
              }
            },
            {
              key: 'users',
              set: function set(users) {
                this.yearlyRegisteredUsers = this.calcYearlyRegisteredUsers(users);
              }
            }
          ]);

          return RegistrationsStatisticsComponent;
        })();

        RegistrationsStatisticsComponent.ɵfac = function RegistrationsStatisticsComponent_Factory(t) {
          return new (t || RegistrationsStatisticsComponent)();
        };

        RegistrationsStatisticsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineComponent']({
          type: RegistrationsStatisticsComponent,
          selectors: [['app-registrations-statistics']],
          inputs: {
            users: 'users'
          },
          decls: 21,
          vars: 2,
          consts: [
            [1, 'small-heading'],
            [1, 'table'],
            [4, 'ngFor', 'ngForOf']
          ],
          template: function RegistrationsStatisticsComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div', 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](1, '\u05D4\u05E8\u05E9\u05DE\u05D5\u05EA');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](2, 'table', 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](3, 'thead');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](4, 'tr');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](5, 'th');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](6, '\u05E9\u05E0\u05D4');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](7, 'th');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](8, '\u05DE\u05E9\u05EA\u05DE\u05E9\u05D9\u05DD');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](9, 'th');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](10, '\u05D0\u05D7\u05D9\u05DD');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](11, 'th');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](12, '\u05DE\u05D0\u05E8\u05D7\u05D9\u05DD');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](13, 'tbody');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                14,
                RegistrationsStatisticsComponent_tr_14_Template,
                9,
                4,
                'tr',
                2
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](15, 'tfoot');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](16, 'tr');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](17, 'td');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](18, '\u05E1\u05D4"\u05DB');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](19, 'td');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](20);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngForOf', ctx.yearlyRegisteredUsers);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate'](ctx.total);
            }
          },
          directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__['NgForOf']],
          styles: [
            '\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3N0YXRpc3RpY3MvcmVnaXN0cmF0aW9ucy1zdGF0aXN0aWNzL3JlZ2lzdHJhdGlvbnMtc3RhdGlzdGljcy5jb21wb25lbnQuc2NzcyJ9 */'
          ],
          changeDetection: 0
        });
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            RegistrationsStatisticsComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                args: [
                  {
                    selector: 'app-registrations-statistics',
                    templateUrl: './registrations-statistics.component.html',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__['ChangeDetectionStrategy'].OnPush,
                    styleUrls: ['./registrations-statistics.component.scss']
                  }
                ]
              }
            ],
            null,
            {
              users: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input']
                }
              ]
            }
          );
        })();
        /***/
      }
  }
]);
//# sourceMappingURL=admin-statistics-page-admin-statistics-page-module-es5.js.map
