(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['main'],
  {
    /***/ '../types/models/index.ts':
      /*!********************************!*\
  !*** ../types/models/index.ts ***!
  \********************************/
      /*! exports provided: MeetingAudience, UserRole, BereavedStatus, BereavedGuidanceGeneral, guidanceOptions */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'MeetingAudience', function() {
          return MeetingAudience;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'UserRole', function() {
          return UserRole;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'BereavedStatus', function() {
          return BereavedStatus;
        });
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'BereavedGuidanceGeneral',
          function() {
            return BereavedGuidanceGeneral;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'guidanceOptions', function() {
          return guidanceOptions;
        });
        /* tslint:disable */
        var MeetingAudience;
        (function(MeetingAudience) {
          MeetingAudience['all'] = 'all';
          MeetingAudience['schoolStudents'] = 'schoolStudents';
          MeetingAudience['youthMovement'] = 'youthMovement';
          MeetingAudience['militaryPreparation'] = 'militaryPreparation';
          MeetingAudience['soldiers'] = 'soldiers';
          MeetingAudience['students'] = 'students';
        })(MeetingAudience || (MeetingAudience = {}));
        var UserRole;
        (function(UserRole) {
          UserRole['bereaved'] = 'bereaved';
          UserRole['participate'] = 'participate';
          UserRole['host'] = 'host';
        })(UserRole || (UserRole = {}));
        var BereavedStatus;
        (function(BereavedStatus) {
          BereavedStatus['done'] = 'done';
          BereavedStatus['inactive'] = 'inactive';
          BereavedStatus['waiting'] = 'waiting';
        })(BereavedStatus || (BereavedStatus = {}));
        var BereavedGuidanceGeneral;
        (function(BereavedGuidanceGeneral) {
          BereavedGuidanceGeneral['m1'] = 'm1';
          BereavedGuidanceGeneral['m2'] = 'm2';
          BereavedGuidanceGeneral['m3'] = 'm3';
          BereavedGuidanceGeneral['m4'] = 'm4';
        })(BereavedGuidanceGeneral || (BereavedGuidanceGeneral = {}));
        const guidanceOptions = [
          {
            label: 'באר שבע',
            details: "29.03.20 בבאר שבע בין השעות 17:30-21:30, משרדי WEWORK, רח' חלקיקי האור 16",
            value: BereavedGuidanceGeneral.m1
          },
          {
            label: 'תל אביב',
            details: "31.03.20 בתל אביב בין השעות 17:00-21:00, משרדי WEWORK, רח' שוקן 23",
            value: BereavedGuidanceGeneral.m2
          },
          {
            label: 'ירושלים',
            details: "01.04.20 בירושלים בין השעות 18:00-22:00, משרדי WEWORK, רח' קינג ג'ורג' 20",
            value: BereavedGuidanceGeneral.m3
          },
          {
            label: 'חיפה',
            details: "02.04.20 בחיפה בין השעות 17:00-21:00, משרדי WEWORK, רח' דרך העצמאות 45",
            value: BereavedGuidanceGeneral.m4
          }
        ];

        /***/
      },

    /***/ './$$_lazy_route_resource lazy recursive':
      /*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        function webpackEmptyAsyncContext(req) {
          // Here Promise.resolve().then() is used instead of new Promise() to prevent
          // uncaught exception popping up in devtools
          return Promise.resolve().then(function() {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }
        webpackEmptyAsyncContext.keys = function() {
          return [];
        };
        webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
        module.exports = webpackEmptyAsyncContext;
        webpackEmptyAsyncContext.id = './$$_lazy_route_resource lazy recursive';

        /***/
      },

    /***/ './src/app/app-routing.module.ts':
      /*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
      /*! exports provided: AppRoutingModule */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'AppRoutingModule', function() {
          return AppRoutingModule;
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/router */ './node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js'
        );
        /* harmony import */ var _home_home_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./home/home-page.component */ './src/app/home/home-page.component.ts'
        );
        /* harmony import */ var _guards_role_based_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./guards/role-based.guard */ './src/app/guards/role-based.guard.ts'
        );

        const routes = [
          {
            path: 'home',
            component: _home_home_page_component__WEBPACK_IMPORTED_MODULE_2__['HomePageComponent'],
            pathMatch: 'full'
          },
          {
            path: 'host',
            loadChildren: () =>
              Promise.all(
                /*! import() | host-page-host-page-module */ [
                  __webpack_require__.e(
                    'default~host-page-host-page-module~participate-page-participate-page-module~tell-page-tell-page-module'
                  ),
                  __webpack_require__.e('default~host-page-host-page-module~participate-page-participate-page-module'),
                  __webpack_require__.e('common'),
                  __webpack_require__.e('host-page-host-page-module')
                ]
              )
                .then(
                  __webpack_require__.bind(
                    null,
                    /*! ./host/page/host-page.module */ './src/app/host/page/host-page.module.ts'
                  )
                )
                .then(({ HostPageModule }) => HostPageModule),
            data: {
              role: 'host'
            },
            canActivate: [_guards_role_based_guard__WEBPACK_IMPORTED_MODULE_3__['RoleBasedGuard']]
          },
          {
            path: 'tell',
            data: {
              role: 'tell'
            },
            loadChildren: () =>
              Promise.all(
                /*! import() | tell-page-tell-page-module */ [
                  __webpack_require__.e(
                    'default~admin-bereaveds-page-admin-bereaveds-page-module~admin-users-page-admin-users-page-module~ma~ac3a05fa'
                  ),
                  __webpack_require__.e(
                    'default~admin-bereaveds-page-admin-bereaveds-page-module~map-meeting-page-map-meeting-page-module~me~2a318174'
                  ),
                  __webpack_require__.e(
                    'default~map-meeting-page-map-meeting-page-module~meetings-page-meetings-page-module~participate-page~b4d7d916'
                  ),
                  __webpack_require__.e(
                    'default~host-page-host-page-module~participate-page-participate-page-module~tell-page-tell-page-module'
                  ),
                  __webpack_require__.e('common'),
                  __webpack_require__.e('tell-page-tell-page-module')
                ]
              )
                .then(
                  __webpack_require__.bind(
                    null,
                    /*! ./tell/page/tell-page.module */ './src/app/tell/page/tell-page.module.ts'
                  )
                )
                .then(({ TellPageModule }) => TellPageModule),
            canActivate: [_guards_role_based_guard__WEBPACK_IMPORTED_MODULE_3__['RoleBasedGuard']]
          },
          {
            path: 'participate',
            data: {
              role: 'participate'
            },
            loadChildren: () =>
              Promise.all(
                /*! import() | participate-page-participate-page-module */ [
                  __webpack_require__.e(
                    'default~admin-bereaveds-page-admin-bereaveds-page-module~admin-users-page-admin-users-page-module~ma~ac3a05fa'
                  ),
                  __webpack_require__.e(
                    'default~admin-bereaveds-page-admin-bereaveds-page-module~map-meeting-page-map-meeting-page-module~me~2a318174'
                  ),
                  __webpack_require__.e(
                    'default~map-meeting-page-map-meeting-page-module~meetings-page-meetings-page-module~participate-page~b4d7d916'
                  ),
                  __webpack_require__.e(
                    'default~host-page-host-page-module~participate-page-participate-page-module~tell-page-tell-page-module'
                  ),
                  __webpack_require__.e('default~host-page-host-page-module~participate-page-participate-page-module'),
                  __webpack_require__.e('participate-page-participate-page-module')
                ]
              )
                .then(
                  __webpack_require__.bind(
                    null,
                    /*! ./participate/page/participate-page.module */ './src/app/participate/page/participate-page.module.ts'
                  )
                )
                .then(({ ParticipatePageModule }) => ParticipatePageModule),
            canActivate: [_guards_role_based_guard__WEBPACK_IMPORTED_MODULE_3__['RoleBasedGuard']]
          },
          {
            path: 'meetings',
            loadChildren: () =>
              Promise.all(
                /*! import() | meetings-page-meetings-page-module */ [
                  __webpack_require__.e(
                    'default~admin-bereaveds-page-admin-bereaveds-page-module~admin-users-page-admin-users-page-module~ma~ac3a05fa'
                  ),
                  __webpack_require__.e(
                    'default~admin-bereaveds-page-admin-bereaveds-page-module~map-meeting-page-map-meeting-page-module~me~2a318174'
                  ),
                  __webpack_require__.e(
                    'default~map-meeting-page-map-meeting-page-module~meetings-page-meetings-page-module~participate-page~b4d7d916'
                  ),
                  __webpack_require__.e('common'),
                  __webpack_require__.e('meetings-page-meetings-page-module')
                ]
              )
                .then(
                  __webpack_require__.bind(
                    null,
                    /*! ./meetings/page/meetings-page.module */ './src/app/meetings/page/meetings-page.module.ts'
                  )
                )
                .then(({ MeetingsPageModule }) => MeetingsPageModule)
          },
          {
            path: 'map',
            loadChildren: () =>
              Promise.all(
                /*! import() | map-meeting-page-map-meeting-page-module */ [
                  __webpack_require__.e(
                    'default~admin-bereaveds-page-admin-bereaveds-page-module~admin-users-page-admin-users-page-module~ma~ac3a05fa'
                  ),
                  __webpack_require__.e(
                    'default~admin-bereaveds-page-admin-bereaveds-page-module~map-meeting-page-map-meeting-page-module~me~2a318174'
                  ),
                  __webpack_require__.e(
                    'default~map-meeting-page-map-meeting-page-module~meetings-page-meetings-page-module~participate-page~b4d7d916'
                  ),
                  __webpack_require__.e('common'),
                  __webpack_require__.e('map-meeting-page-map-meeting-page-module')
                ]
              )
                .then(
                  __webpack_require__.bind(
                    null,
                    /*! ./map-meeting/page/map-meeting-page.module */ './src/app/map-meeting/page/map-meeting-page.module.ts'
                  )
                )
                .then(({ MapMeetingPageModule }) => MapMeetingPageModule)
          },
          {
            path: 'about',
            loadChildren: () =>
              __webpack_require__
                .e(/*! import() | about-page-about-page-module */ 'about-page-about-page-module')
                .then(
                  __webpack_require__.bind(
                    null,
                    /*! ./about/page/about-page.module */ './src/app/about/page/about-page.module.ts'
                  )
                )
                .then(({ AboutPageModule }) => AboutPageModule),
            pathMatch: 'full'
          },
          {
            path: 'team',
            loadChildren: () =>
              __webpack_require__
                .e(/*! import() | team-page-team-page-module */ 'team-page-team-page-module')
                .then(
                  __webpack_require__.bind(
                    null,
                    /*! ./team/page/team-page.module */ './src/app/team/page/team-page.module.ts'
                  )
                )
                .then(({ TeamPageModule }) => TeamPageModule),
            pathMatch: 'full'
          },
          {
            path: 'articles',
            loadChildren: () =>
              __webpack_require__
                .e(/*! import() | articles-articles-module */ 'articles-articles-module')
                .then(
                  __webpack_require__.bind(
                    null,
                    /*! ./articles/articles.module */ './src/app/articles/articles.module.ts'
                  )
                )
                .then(({ ArticlesModule }) => ArticlesModule),
            pathMatch: 'full'
          },
          {
            path: 'news',
            loadChildren: () =>
              __webpack_require__
                .e(/*! import() | news-page-news-page-module */ 'news-page-news-page-module')
                .then(
                  __webpack_require__.bind(
                    null,
                    /*! ./news/page/news-page.module */ './src/app/news/page/news-page.module.ts'
                  )
                )
                .then(({ NewsPageModule }) => NewsPageModule),
            pathMatch: 'full'
          },
          {
            path: 'agenda',
            loadChildren: () =>
              __webpack_require__
                .e(/*! import() | agenda-page-agenda-page-module */ 'agenda-page-agenda-page-module')
                .then(
                  __webpack_require__.bind(
                    null,
                    /*! ./agenda/page/agenda-page.module */ './src/app/agenda/page/agenda-page.module.ts'
                  )
                )
                .then(({ AgendaPageModule }) => AgendaPageModule),
            pathMatch: 'full'
          },
          {
            path: 'questions',
            loadChildren: () =>
              __webpack_require__
                .e(/*! import() | qna-page-qna-page-module */ 'qna-page-qna-page-module')
                .then(
                  __webpack_require__.bind(
                    null,
                    /*! ./qna/page/qna-page.module */ './src/app/qna/page/qna-page.module.ts'
                  )
                )
                .then(({ QnaPageModule }) => QnaPageModule),
            pathMatch: 'full'
          },
          {
            path: 'gallery',
            loadChildren: () =>
              __webpack_require__
                .e(/*! import() | gallery-page-gallery-page-module */ 'gallery-page-gallery-page-module')
                .then(
                  __webpack_require__.bind(
                    null,
                    /*! ./gallery/page/gallery-page.module */ './src/app/gallery/page/gallery-page.module.ts'
                  )
                )
                .then(({ GalleryPageModule }) => GalleryPageModule),
            pathMatch: 'full'
          },
          {
            path: 'donate',
            loadChildren: () =>
              __webpack_require__
                .e(/*! import() | donate-page-donate-page-module */ 'donate-page-donate-page-module')
                .then(
                  __webpack_require__.bind(
                    null,
                    /*! ./donate/page/donate-page.module */ './src/app/donate/page/donate-page.module.ts'
                  )
                )
                .then(({ DonatePageModule }) => DonatePageModule)
          },
          {
            path: 'contact',
            loadChildren: () =>
              __webpack_require__
                .e(/*! import() | contact-page-contact-page-module */ 'contact-page-contact-page-module')
                .then(
                  __webpack_require__.bind(
                    null,
                    /*! ./contact/page/contact-page.module */ './src/app/contact/page/contact-page.module.ts'
                  )
                )
                .then(({ ContactPageModule }) => ContactPageModule),
            pathMatch: 'full'
          },
          {
            path: 'admin-bereaveds',
            loadChildren: () =>
              Promise.all(
                /*! import() | admin-bereaveds-page-admin-bereaveds-page-module */ [
                  __webpack_require__.e(
                    'default~admin-bereaveds-page-admin-bereaveds-page-module~admin-users-page-admin-users-page-module~ma~ac3a05fa'
                  ),
                  __webpack_require__.e(
                    'default~admin-bereaveds-page-admin-bereaveds-page-module~map-meeting-page-map-meeting-page-module~me~2a318174'
                  ),
                  __webpack_require__.e(
                    'default~admin-bereaveds-page-admin-bereaveds-page-module~admin-users-page-admin-users-page-module'
                  ),
                  __webpack_require__.e('common'),
                  __webpack_require__.e('admin-bereaveds-page-admin-bereaveds-page-module')
                ]
              )
                .then(
                  __webpack_require__.bind(
                    null,
                    /*! ./admin/bereaveds/page/admin-bereaveds-page.module */ './src/app/admin/bereaveds/page/admin-bereaveds-page.module.ts'
                  )
                )
                .then(({ AdminBereavedsPageModule }) => AdminBereavedsPageModule)
          },
          {
            path: 'admin-users',
            loadChildren: () =>
              Promise.all(
                /*! import() | admin-users-page-admin-users-page-module */ [
                  __webpack_require__.e(
                    'default~admin-bereaveds-page-admin-bereaveds-page-module~admin-users-page-admin-users-page-module~ma~ac3a05fa'
                  ),
                  __webpack_require__.e(
                    'default~admin-bereaveds-page-admin-bereaveds-page-module~admin-users-page-admin-users-page-module'
                  ),
                  __webpack_require__.e('admin-users-page-admin-users-page-module')
                ]
              )
                .then(
                  __webpack_require__.bind(
                    null,
                    /*! ./admin/users/page/admin-users-page.module */ './src/app/admin/users/page/admin-users-page.module.ts'
                  )
                )
                .then(({ AdminUsersPageModule }) => AdminUsersPageModule)
          },
          {
            path: 'admin-statistics',
            loadChildren: () =>
              __webpack_require__
                .e(
                  /*! import() | admin-statistics-page-admin-statistics-page-module */ 'admin-statistics-page-admin-statistics-page-module'
                )
                .then(
                  __webpack_require__.bind(
                    null,
                    /*! ./admin/statistics/page/admin-statistics-page.module */ './src/app/admin/statistics/page/admin-statistics-page.module.ts'
                  )
                )
                .then(({ AdminStatisticsPageModule }) => AdminStatisticsPageModule)
          },
          {
            path: '',
            redirectTo: '/home',
            pathMatch: 'full'
          }
        ];
        class AppRoutingModule {}
        AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineNgModule']({
          type: AppRoutingModule
        });
        AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineInjector']({
          factory: function AppRoutingModule_Factory(t) {
            return new (t || AppRoutingModule)();
          },
          imports: [
            [
              _angular_router__WEBPACK_IMPORTED_MODULE_1__['RouterModule'].forRoot(routes, {
                scrollPositionRestoration: 'enabled'
              })
            ],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__['RouterModule']
          ]
        });
        (function() {
          (typeof ngJitMode === 'undefined' || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵsetNgModuleScope'](AppRoutingModule, {
              imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__['RouterModule']],
              exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__['RouterModule']]
            });
        })();
        /*@__PURE__*/ (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            AppRoutingModule,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'],
                args: [
                  {
                    imports: [
                      _angular_router__WEBPACK_IMPORTED_MODULE_1__['RouterModule'].forRoot(routes, {
                        scrollPositionRestoration: 'enabled'
                      })
                    ],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__['RouterModule']]
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

    /***/ './src/app/app.component.ts':
      /*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
      /*! exports provided: AppComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'AppComponent', function() {
          return AppComponent;
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! aos */ './node_modules/aos/dist/aos.js'
        );
        /* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          aos__WEBPACK_IMPORTED_MODULE_1__
        );
        /* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./shared/services/auth.service */ './src/app/shared/services/auth.service.ts'
        );
        /* harmony import */ var _shared_services_signIn_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./shared/services/signIn.service */ './src/app/shared/services/signIn.service.ts'
        );
        /* harmony import */ var _shared_services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./shared/services/data.service */ './src/app/shared/services/data.service.ts'
        );
        /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @angular/common */ './node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js'
        );
        /* harmony import */ var _shell_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./shell/header/header.component */ './src/app/shell/header/header.component.ts'
        );
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! @angular/router */ './node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js'
        );
        /* harmony import */ var _shell_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ./shell/footer/footer.component */ './src/app/shell/footer/footer.component.ts'
        );
        /* harmony import */ var _auth_login_popup_login_popup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ./auth/login-popup/login-popup.component */ './src/app/auth/login-popup/login-popup.component.ts'
        );

        function AppComponent_div_0_app_login_popup_1_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](0, 'app-login-popup', 13);
          }
          if (rf & 2) {
            const ctx_r402 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext'](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('mode', ctx_r402.loginMode);
          }
        }
        function AppComponent_div_0_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div', 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
              1,
              AppComponent_div_0_app_login_popup_1_Template,
              1,
              1,
              'app-login-popup',
              12
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }
          if (rf & 2) {
            const ctx_r401 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngIf', ctx_r401.loginMode && !ctx_r401.user);
          }
        }
        class AppComponent {
          //public lastLogin: Number;
          constructor(authService, signInService, dataService) {
            this.authService = authService;
            this.signInService = signInService;
            this.dataService = dataService;
            this.loading = true;
            this.updatedLastSignIn = false;
          }
          ngOnInit() {
            aos__WEBPACK_IMPORTED_MODULE_1__['init']();
            this.authService.user.subscribe(user => {
              this.loading = false;
              this.user = user;
              if (!this.updatedLastSignIn && this.user) {
                this.updatedLastSignIn = true;
                //this.lastLogin = this.user.lastSignInDate;
                this.signInService.lastLogin = this.user.lastSignInDate;
                console.log('lastLogon', this.signInService.lastLogin);
                this.dataService.updateUserLastSignIn(this.user).subscribe();
              }
            });
            this.authService.needLogin$.subscribe(loginMode => (this.loginMode = loginMode));
          }
          logOut() {
            this.authService.signOut();
          }
        }
        AppComponent.ɵfac = function AppComponent_Factory(t) {
          return new (t || AppComponent)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
              _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__['AuthService']
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
              _shared_services_signIn_service__WEBPACK_IMPORTED_MODULE_3__['SignInService']
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
              _shared_services_data_service__WEBPACK_IMPORTED_MODULE_4__['DataService']
            )
          );
        };
        AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineComponent']({
          type: AppComponent,
          selectors: [['app-root']],
          decls: 17,
          vars: 3,
          consts: [
            ['class', 'modal-blocker', 4, 'ngIf'],
            [3, 'loading', 'user', 'login', 'logout'],
            ['routerLink', '/donate', 1, 'action-header-login', 'site-button', 'div-home-page-flow', 'sticky-button'],
            [
              'width',
              '56px',
              'height',
              '68px',
              'viewBox',
              '0 0 56 68',
              'version',
              '1.1',
              'xmlns',
              'http://www.w3.org/2000/svg',
              0,
              'xmlns',
              'xlink',
              'http://www.w3.org/1999/xlink',
              1,
              'home-page-flow'
            ],
            ['id', 'Styleguide', 'stroke', 'none', 'stroke-width', '1', 'fill', 'none', 'fill-rule', 'evenodd'],
            ['id', 'Icons', 'transform', 'translate(-370.000000, -225.000000)', 'fill-rule', 'nonzero'],
            ['id', 'Group-15', 'transform', 'translate(370.127060, 225.132195)'],
            [
              'd',
              'M33.7859986,1.86374421 C41.8751185,1.86374421 44.8249321,12.0552254 39.8674809,18.8117049 C36.381502,23.5634392 32.27078,25.8469325 26.240275,29.7761609 C20.2086853,25.8469325 16.0972403,23.5634392 12.6127075,18.8117049 C7.65489479,12.0548639 10.6025391,1.86338267 18.6931052,1.86374421 C18.7108207,1.86374421 18.7288977,1.86410575 18.7462517,1.86410575 C23.8642271,1.8926675 26.240275,6.2036832 26.240275,6.2036832 C26.240275,6.2036832 28.6159613,1.8926675 33.7324905,1.86410575 C33.7505676,1.86410575 33.7679216,1.86374421 33.7859986,1.86374421 M33.7859986,0 L33.7216443,0.000361541069 C30.1557647,0.0202462999 27.6972855,1.73358942 26.240275,3.20867699 C24.7821798,1.73358942 22.3237006,0.0202462999 18.7574595,0.000361541069 L18.6931052,0 C14.7562845,0 11.4677069,2.03511468 9.66976316,5.58364027 C7.45279333,9.95973336 8.03162058,15.7190826 11.1097812,19.9147667 C14.3618432,24.3487064 18.1963477,26.8140549 23.0518443,29.9348774 C23.7470878,30.3824653 24.4701699,30.8470455 25.2225369,31.3376568 L26.2406365,32 L27.25729,31.3376568 C28.0100185,30.8474071 28.7327391,30.3824653 29.4279826,29.9356005 C34.282756,26.8140549 38.1165375,24.3487064 41.3700456,19.9144052 C44.4478447,15.7194441 45.0263104,9.96081799 42.8093406,5.58436335 C41.0110353,2.03547622 37.7228193,0 33.7859986,0 L33.7859986,0 Z',
              'id',
              'Shape-Copy-2',
              'fill',
              '#082551'
            ],
            [
              'd',
              'M38.6830724,13.4749972 C38.0908681,13.3762965 37.6920883,12.8162693 37.790066,12.2247882 C38.2839311,9.26304372 36.2748473,6.45206191 33.3127414,5.95855835 C32.7205371,5.85985764 32.3213957,5.29983053 32.4197349,4.7079878 C32.5177125,4.11614507 33.0770166,3.71591911 33.670667,3.81425828 C37.8142892,4.50444018 40.6238249,8.43764546 39.9340045,12.5816292 C39.8356653,13.1734719 39.2767228,13.5740594 38.6830724,13.4749972 Z',
              'id',
              'Path-Copy-3',
              'stroke',
              '#FFFFFF',
              'stroke-width',
              '0.5',
              'fill',
              '#16B3AB'
            ],
            ['id', 'Group', 'transform', 'translate(-0.000000, 17.200000)', 'fill', '#082551'],
            [
              'd',
              'M49.5045156,1.00378974 C51.5695069,1.00378974 53.2561302,2.684 53.2561302,4.75540426 L53.2561302,4.75540426 L53.2561302,21.9551139 C53.2561302,22.9298924 52.9162403,23.8726058 52.3005907,24.6229287 L52.3005907,24.6229287 L45.9517046,32.3698523 C45.0987735,33.408761 44.6306233,34.7170163 44.6306233,36.0637497 L44.6306233,36.0637497 L44.6306233,40.4053617 L46.5801802,40.4053617 C47.1124606,40.4053617 47.5421327,40.8350338 47.5421327,41.3673141 L47.5421327,41.3673141 L47.5421327,47.4981577 C47.5421327,48.030438 47.1124606,48.4601101 46.5801802,48.4601101 L46.5801802,48.4601101 L29.0726458,48.4601101 C28.5403655,48.4601101 28.1106934,48.030438 28.1106934,47.4981577 L28.1106934,47.4981577 L28.1106934,41.3673141 C28.1106934,40.8350338 28.5403655,40.4053617 29.0726458,40.4053617 L29.0726458,40.4053617 L30.7656821,40.4053617 L30.7656821,28.4514994 C30.7656821,26.5724856 31.528831,24.738363 32.8627384,23.4172816 L32.8627384,23.4172816 L41.5908536,14.7661227 C42.7131314,13.6502578 44.3805156,13.3873242 45.7529011,13.9901477 L45.7529011,13.9901477 L45.7529011,4.75540426 C45.7529011,2.684 47.4331114,1.00378974 49.5045156,1.00378974 Z M4.13639549,1.00378974 C6.20779975,1.00378974 7.88801001,2.684 7.88801001,4.75540426 L7.88801001,4.75540426 L7.88801001,13.9901477 C9.26039549,13.3873242 10.9277797,13.6502578 12.0500576,14.7725357 L12.0500576,14.7725357 L20.7717597,23.4172816 C22.1056671,24.738363 22.868816,26.5724856 22.868816,28.4514994 L22.868816,28.4514994 L22.868816,40.4053617 L24.5618523,40.4053617 C25.0941327,40.4053617 25.5238048,40.8350338 25.5238048,41.3673141 L25.5238048,41.3673141 L25.5238048,47.4981577 C25.5238048,48.030438 25.0941327,48.4601101 24.5618523,48.4601101 L24.5618523,48.4601101 L7.0543179,48.4601101 C6.52203755,48.4601101 6.09236546,48.030438 6.09236546,47.4981577 L6.09236546,47.4981577 L6.09236546,41.3673141 C6.09236546,40.8350338 6.52203755,40.4053617 7.0543179,40.4053617 L7.0543179,40.4053617 L9.01028786,40.4053617 L9.01028786,36.0637497 C9.01028786,34.7234293 8.54213767,33.408761 7.68920651,32.3698523 L7.68920651,32.3698523 L1.3403204,24.6229287 C0.724670839,23.8726058 0.384780976,22.9234793 0.384780976,21.9551139 L0.384780976,21.9551139 L0.384780976,4.75540426 C0.384780976,2.684 2.06499124,1.00378974 4.13639549,1.00378974 Z M45.6182278,42.3292666 L30.0345982,42.3292666 L30.0345982,46.5362053 L45.6182278,46.5362053 L45.6182278,42.3292666 Z M23.5998999,42.3292666 L8.01627034,42.3292666 L8.01627034,46.5362053 L23.5998999,46.5362053 L23.5998999,42.3292666 Z M49.5045156,2.9212816 C48.4976721,2.9212816 47.676806,3.74214768 47.676806,4.74899124 L47.676806,4.74899124 L47.676806,15.9076395 C48.2796295,17.286438 48.0166959,18.9538223 46.894418,20.0761001 L46.894418,20.0761001 L41.1355294,25.8285757 C40.7635745,26.2069437 40.1543379,26.2005307 39.77597,25.8285757 C39.397602,25.4566208 39.397602,24.8473842 39.77597,24.4690163 L39.77597,24.4690163 L45.5284456,18.7165407 C46.099204,18.1521952 46.2146383,17.2992641 45.8747484,16.6130713 C45.8619224,16.5874193 45.8490964,16.5681802 45.8362703,16.5425282 C45.7529011,16.3950288 45.6502929,16.2539424 45.5284456,16.1320951 C44.8422528,15.4459024 43.6301927,15.4459024 42.944,16.1320951 L42.944,16.1320951 L34.2158849,24.7832541 C33.2475194,25.7452065 32.689587,27.0855269 32.689587,28.4514994 L32.689587,28.4514994 L32.689587,40.4053617 L42.7067184,40.4053617 L42.7067184,36.0637497 C42.7067184,34.2809312 43.328781,32.5365907 44.4638849,31.1513792 L44.4638849,31.1513792 L50.812771,23.4044556 C51.1462478,23.0004355 51.3322253,22.4873942 51.3322253,21.9615269 L51.3322253,21.9615269 L51.3322253,4.74899124 C51.3322253,3.74214768 50.5113592,2.9212816 49.5045156,2.9212816 Z M4.12998248,2.92769462 C3.12313892,2.92769462 2.30227284,3.7485607 2.30227284,4.75540426 L2.30227284,4.75540426 L2.30227284,21.9615269 C2.30227284,22.4873942 2.48825031,23.0004355 2.82172716,23.4044556 L2.82172716,23.4044556 L9.17061327,31.1449662 C10.3057171,32.5301777 10.9277797,34.2745181 10.9277797,36.0509237 L10.9277797,36.0509237 L10.9277797,40.3925357 L20.9449111,40.3925357 L20.9449111,28.4386733 C20.9449111,27.0727009 20.3933917,25.7323805 19.4186133,24.770428 L19.4186133,24.770428 L10.6904981,16.1256821 C9.99789237,15.4394894 8.78583229,15.4394894 8.09963955,16.1256821 C7.97779224,16.2539424 7.87518398,16.3950288 7.79181477,16.5425282 C7.77898874,16.5617672 7.77257572,16.5810063 7.75974969,16.6002453 C7.63148936,16.8503529 7.5673592,17.1325257 7.5673592,17.4211114 C7.5673592,17.9149136 7.75333667,18.3702378 8.09963955,18.7165407 L8.09963955,18.7165407 L13.8521151,24.4690163 C14.2304831,24.8409712 14.2304831,25.4502078 13.8521151,25.8285757 C13.4801602,26.2069437 12.8709237,26.2069437 12.4925557,25.8285757 L12.4925557,25.8285757 L6.7400801,20.0761001 C6.03464831,19.3706683 5.64345432,18.4279549 5.64345432,17.4211114 C5.64345432,16.888831 5.75247559,16.3757897 5.95769212,15.9076395 L5.95769212,15.9076395 L5.95769212,4.75540426 C5.95769212,3.7485607 5.13682603,2.92769462 4.12998248,2.92769462 Z',
              'id',
              'Combined-Shape'
            ],
            [1, 'modal-blocker'],
            [3, 'mode', 4, 'ngIf'],
            [3, 'mode']
          ],
          template: function AppComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](0, AppComponent_div_0_Template, 2, 1, 'div', 0);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](1, 'app-header', 1);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'login',
                function AppComponent_Template_app_header_login_1_listener() {
                  return ctx.authService.requestToLogin('Login');
                }
              )('logout', function AppComponent_Template_app_header_logout_1_listener() {
                return ctx.authService.signOut();
              });
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](2, 'button', 2);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](3, 'div');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                4,
                ' \u05EA\u05E8\u05D5\u05DE\u05D4 \u05DC\u05E2\u05DE\u05D5\u05EA\u05D4 '
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnamespaceSVG']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](5, 'svg', 3);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](6, 'title');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](7, 'Group 15');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](8, 'g', 4);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](9, 'g', 5);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](10, 'g', 6);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](11, 'path', 7);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](12, 'path', 8);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](13, 'g', 9);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](14, 'path', 10);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnamespaceHTML']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](15, 'router-outlet');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](16, 'app-footer');
            }
            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngIf', ctx.loginMode);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('loading', ctx.loading)('user', ctx.user);
            }
          },
          directives: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__['NgIf'],
            _shell_header_header_component__WEBPACK_IMPORTED_MODULE_6__['HeaderComponent'],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__['RouterLink'],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__['RouterOutlet'],
            _shell_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__['FooterComponent'],
            _auth_login_popup_login_popup_component__WEBPACK_IMPORTED_MODULE_9__['LoginPopupComponent']
          ],
          styles: [
            '.modal-blocker[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 10;\n  background: rgba(0, 0, 0, 0.5);\n}\n\n.div-home-page-flow[_ngcontent-%COMP%] {\n  width: 238px;\n  height: 69px;\n  border-radius: 34.5px;\n  display: flex;\n  flex-grow: 8;\n  flex-direction: row-reverse;\n}\n\n.div-home-page-flow[_ngcontent-%COMP%]   .home-page-flow[_ngcontent-%COMP%] {\n  background-color: white;\n  width: 57.75px;\n  height: 57.75px;\n  padding: 7px;\n  border-radius: 50%;\n}\n\n.sticky-button[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 20%;\n  z-index: 3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxUZWhpbGFcXGxhc3RcXG91ckJyb1xcb3VyLWJyb3RoZXJzLXdlYi9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0FDQ0Y7O0FEQ0U7RUFDRSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDRSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbC1ibG9ja2VyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHotaW5kZXg6IDEwO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxufVxyXG5cclxuLmRpdi1ob21lLXBhZ2UtZmxvdyB7XHJcbiAgd2lkdGg6IDIzOHB4O1xyXG4gIGhlaWdodDogNjlweDtcclxuICBib3JkZXItcmFkaXVzOiAzNC41cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWdyb3c6IDg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG4gIC8vY29sb3I6ICMxNmIzYWI7XHJcbiAgLmhvbWUtcGFnZS1mbG93IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgd2lkdGg6IDU3Ljc1cHg7XHJcbiAgICBoZWlnaHQ6IDU3Ljc1cHg7XHJcbiAgICBwYWRkaW5nOiA3cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgfVxyXG59XHJcbi5zdGlja3ktYnV0dG9uIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAyMCU7XHJcbiAgei1pbmRleDogMztcclxufVxyXG4iLCIubW9kYWwtYmxvY2tlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxMDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4uZGl2LWhvbWUtcGFnZS1mbG93IHtcbiAgd2lkdGg6IDIzOHB4O1xuICBoZWlnaHQ6IDY5cHg7XG4gIGJvcmRlci1yYWRpdXM6IDM0LjVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1ncm93OiA4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG59XG4uZGl2LWhvbWUtcGFnZS1mbG93IC5ob21lLXBhZ2UtZmxvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB3aWR0aDogNTcuNzVweDtcbiAgaGVpZ2h0OiA1Ny43NXB4O1xuICBwYWRkaW5nOiA3cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLnN0aWNreS1idXR0b24ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMjAlO1xuICB6LWluZGV4OiAzO1xufSJdfQ== */'
          ]
        });
        /*@__PURE__*/ (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            AppComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                args: [
                  {
                    selector: 'app-root',
                    templateUrl: './app.component.html',
                    styleUrls: ['./app.component.scss']
                  }
                ]
              }
            ],
            function() {
              return [
                { type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__['AuthService'] },
                { type: _shared_services_signIn_service__WEBPACK_IMPORTED_MODULE_3__['SignInService'] },
                { type: _shared_services_data_service__WEBPACK_IMPORTED_MODULE_4__['DataService'] }
              ];
            },
            null
          );
        })();

        /***/
      },

    /***/ './src/app/app.module.ts':
      /*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
      /*! exports provided: AppModule */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'AppModule', function() {
          return AppModule;
        });
        /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/platform-browser */ './node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js'
        );
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/common/http */ './node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js'
        );
        /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/common */ './node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js'
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */ var _angular_common_locales_he__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @angular/common/locales/he */ './node_modules/@angular/common/locales/he.js'
        );
        /* harmony import */ var _angular_common_locales_he__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
          _angular_common_locales_he__WEBPACK_IMPORTED_MODULE_4__
        );
        /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @angular/forms */ './node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js'
        );
        /* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! @angular/fire */ './node_modules/@angular/fire/__ivy_ngcc__/es2015/index.js'
        );
        /* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! @angular/fire/database */ './node_modules/@angular/fire/__ivy_ngcc__/database/es2015/index.js'
        );
        /* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! @angular/fire/auth */ './node_modules/@angular/fire/__ivy_ngcc__/auth/es2015/index.js'
        );
        /* harmony import */ var _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! @angular/fire/analytics */ './node_modules/@angular/fire/__ivy_ngcc__/analytics/es2015/index.js'
        );
        /* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! @agm/core */ './node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js'
        );
        /* harmony import */ var _agm_js_marker_clusterer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! @agm/js-marker-clusterer */ './node_modules/@agm/js-marker-clusterer/__ivy_ngcc__/fesm2015/agm-js-marker-clusterer.js'
        );
        /* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ngx-toastr */ './node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js'
        );
        /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../environments/environment */ './src/environments/environment.ts'
        );
        /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ./app-routing.module */ './src/app/app-routing.module.ts'
        );
        /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ./app.component */ './src/app/app.component.ts'
        );
        /* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ./shared/services/auth.service */ './src/app/shared/services/auth.service.ts'
        );
        /* harmony import */ var _shared_services_data_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! ./shared/services/data.service */ './src/app/shared/services/data.service.ts'
        );
        /* harmony import */ var _shared_services_http_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
          /*! ./shared/services/http.service */ './src/app/shared/services/http.service.ts'
        );
        /* harmony import */ var _home_home_page_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
          /*! ./home/home-page.component */ './src/app/home/home-page.component.ts'
        );
        /* harmony import */ var _shared_components_contact_form_contact_form_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
          /*! ./shared/components/contact-form/contact-form.module */ './src/app/shared/components/contact-form/contact-form.module.ts'
        );
        /* harmony import */ var _shared_components_participations_buttons_participations_buttons_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
          /*! ./shared/components/participations-buttons/participations-buttons.module */ './src/app/shared/components/participations-buttons/participations-buttons.module.ts'
        );
        /* harmony import */ var _shell_shell_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
          /*! ./shell/shell.module */ './src/app/shell/shell.module.ts'
        );
        /* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
          /*! ./auth/auth.module */ './src/app/auth/auth.module.ts'
        );
        /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
          /*! @angular/platform-browser/animations */ './node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js'
        );
        /* harmony import */ var _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
          /*! @ngneat/svg-icon */ './node_modules/@ngneat/svg-icon/__ivy_ngcc__/fesm2015/ngneat-svg-icon.js'
        );

        //import { MapModule } from './map/map.module';
        //import { MapComponent } from './map/map.component';
        //import { AngularSvgIconModule } from 'angular-svg-icon';
        Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__['registerLocaleData'])(
          _angular_common_locales_he__WEBPACK_IMPORTED_MODULE_4___default.a
        );
        class AppModule {}
        AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__['ɵɵdefineNgModule']({
          type: AppModule,
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_15__['AppComponent']]
        });
        AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__['ɵɵdefineInjector']({
          factory: function AppModule_Factory(t) {
            return new (t || AppModule)();
          },
          providers: [
            { provide: _angular_core__WEBPACK_IMPORTED_MODULE_3__['LOCALE_ID'], useValue: 'he-IL' },
            _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_16__['AuthService'],
            _shared_services_data_service__WEBPACK_IMPORTED_MODULE_17__['DataService'],
            _shared_services_http_service__WEBPACK_IMPORTED_MODULE_18__['HttpService']
          ],
          imports: [
            [
              _shell_shell_module__WEBPACK_IMPORTED_MODULE_22__['ShellModule'],
              //MapModule,
              //MapComponent,
              _auth_auth_module__WEBPACK_IMPORTED_MODULE_23__['AuthModule'],
              _shared_components_participations_buttons_participations_buttons_module__WEBPACK_IMPORTED_MODULE_21__[
                'ParticipationsButtonsModule'
              ],
              _shared_components_contact_form_contact_form_module__WEBPACK_IMPORTED_MODULE_20__['ContactFormModule'],
              _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__['BrowserModule'],
              _angular_common_http__WEBPACK_IMPORTED_MODULE_1__['HttpClientModule'],
              _angular_fire__WEBPACK_IMPORTED_MODULE_6__['AngularFireModule'].initializeApp(
                _environments_environment__WEBPACK_IMPORTED_MODULE_13__['environment'].firebase
              ),
              _angular_fire_database__WEBPACK_IMPORTED_MODULE_7__['AngularFireDatabaseModule'],
              _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__['AngularFireAuthModule'],
              _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_9__['AngularFireAnalyticsModule'],
              _app_routing_module__WEBPACK_IMPORTED_MODULE_14__['AppRoutingModule'],
              _angular_forms__WEBPACK_IMPORTED_MODULE_5__['ReactiveFormsModule'],
              ngx_toastr__WEBPACK_IMPORTED_MODULE_12__['ToastrModule'].forRoot(),
              _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__['BrowserAnimationsModule'],
              _agm_core__WEBPACK_IMPORTED_MODULE_10__['AgmCoreModule'].forRoot({
                apiKey: 'AIzaSyBIQyGmuHzizv-MNxX4plVBLoErVopOEiE',
                language: 'iw',
                libraries: ['places']
              }),
              _agm_js_marker_clusterer__WEBPACK_IMPORTED_MODULE_11__['AgmJsMarkerClustererModule'],
              _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_25__['SvgIconsModule'].forRoot({
                icons: []
              })
            ]
          ]
        });
        (function() {
          (typeof ngJitMode === 'undefined' || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_3__['ɵɵsetNgModuleScope'](AppModule, {
              declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_15__['AppComponent'],
                _home_home_page_component__WEBPACK_IMPORTED_MODULE_19__['HomePageComponent']
              ],
              imports: [
                _shell_shell_module__WEBPACK_IMPORTED_MODULE_22__['ShellModule'],
                //MapModule,
                //MapComponent,
                _auth_auth_module__WEBPACK_IMPORTED_MODULE_23__['AuthModule'],
                _shared_components_participations_buttons_participations_buttons_module__WEBPACK_IMPORTED_MODULE_21__[
                  'ParticipationsButtonsModule'
                ],
                _shared_components_contact_form_contact_form_module__WEBPACK_IMPORTED_MODULE_20__['ContactFormModule'],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__['BrowserModule'],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_1__['HttpClientModule'],
                _angular_fire__WEBPACK_IMPORTED_MODULE_6__['AngularFireModule'],
                _angular_fire_database__WEBPACK_IMPORTED_MODULE_7__['AngularFireDatabaseModule'],
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__['AngularFireAuthModule'],
                _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_9__['AngularFireAnalyticsModule'],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_14__['AppRoutingModule'],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__['ReactiveFormsModule'],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_12__['ToastrModule'],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__['BrowserAnimationsModule'],
                _agm_core__WEBPACK_IMPORTED_MODULE_10__['AgmCoreModule'],
                _agm_js_marker_clusterer__WEBPACK_IMPORTED_MODULE_11__['AgmJsMarkerClustererModule'],
                _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_25__['SvgIconsModule']
              ]
            });
        })();
        /*@__PURE__*/ (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__['ɵsetClassMetadata'](
            AppModule,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__['NgModule'],
                args: [
                  {
                    declarations: [
                      _app_component__WEBPACK_IMPORTED_MODULE_15__['AppComponent'],
                      _home_home_page_component__WEBPACK_IMPORTED_MODULE_19__['HomePageComponent']
                    ],
                    imports: [
                      _shell_shell_module__WEBPACK_IMPORTED_MODULE_22__['ShellModule'],
                      //MapModule,
                      //MapComponent,
                      _auth_auth_module__WEBPACK_IMPORTED_MODULE_23__['AuthModule'],
                      _shared_components_participations_buttons_participations_buttons_module__WEBPACK_IMPORTED_MODULE_21__[
                        'ParticipationsButtonsModule'
                      ],
                      _shared_components_contact_form_contact_form_module__WEBPACK_IMPORTED_MODULE_20__[
                        'ContactFormModule'
                      ],
                      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__['BrowserModule'],
                      _angular_common_http__WEBPACK_IMPORTED_MODULE_1__['HttpClientModule'],
                      _angular_fire__WEBPACK_IMPORTED_MODULE_6__['AngularFireModule'].initializeApp(
                        _environments_environment__WEBPACK_IMPORTED_MODULE_13__['environment'].firebase
                      ),
                      _angular_fire_database__WEBPACK_IMPORTED_MODULE_7__['AngularFireDatabaseModule'],
                      _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__['AngularFireAuthModule'],
                      _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_9__['AngularFireAnalyticsModule'],
                      _app_routing_module__WEBPACK_IMPORTED_MODULE_14__['AppRoutingModule'],
                      _angular_forms__WEBPACK_IMPORTED_MODULE_5__['ReactiveFormsModule'],
                      ngx_toastr__WEBPACK_IMPORTED_MODULE_12__['ToastrModule'].forRoot(),
                      _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__['BrowserAnimationsModule'],
                      _agm_core__WEBPACK_IMPORTED_MODULE_10__['AgmCoreModule'].forRoot({
                        apiKey: 'AIzaSyBIQyGmuHzizv-MNxX4plVBLoErVopOEiE',
                        language: 'iw',
                        libraries: ['places']
                      }),
                      _agm_js_marker_clusterer__WEBPACK_IMPORTED_MODULE_11__['AgmJsMarkerClustererModule'],
                      _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_25__['SvgIconsModule'].forRoot({
                        icons: []
                      })
                    ],
                    providers: [
                      { provide: _angular_core__WEBPACK_IMPORTED_MODULE_3__['LOCALE_ID'], useValue: 'he-IL' },
                      _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_16__['AuthService'],
                      _shared_services_data_service__WEBPACK_IMPORTED_MODULE_17__['DataService'],
                      _shared_services_http_service__WEBPACK_IMPORTED_MODULE_18__['HttpService']
                    ],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_15__['AppComponent']]
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

    /***/ './src/app/auth/auth.module.ts':
      /*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
      /*! exports provided: AuthModule */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'AuthModule', function() {
          return AuthModule;
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */ var _registration_form_registration_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./registration-form/registration-form.component */ './src/app/auth/registration-form/registration-form.component.ts'
        );
        /* harmony import */ var _login_social_button_login_social_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./login-social-button/login-social-button.component */ './src/app/auth/login-social-button/login-social-button.component.ts'
        );
        /* harmony import */ var _login_popup_login_popup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./login-popup/login-popup.component */ './src/app/auth/login-popup/login-popup.component.ts'
        );
        /* harmony import */ var _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./login-form/login-form.component */ './src/app/auth/login-form/login-form.component.ts'
        );
        /* harmony import */ var _forgot_password_form_forgot_password_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./forgot-password-form/forgot-password-form.component */ './src/app/auth/forgot-password-form/forgot-password-form.component.ts'
        );
        /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! @angular/forms */ './node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js'
        );
        /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! @angular/common */ './node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js'
        );

        const api = [
          _registration_form_registration_form_component__WEBPACK_IMPORTED_MODULE_1__['RegistrationFormComponent'],
          _login_social_button_login_social_button_component__WEBPACK_IMPORTED_MODULE_2__['LoginSocialButtonComponent'],
          _login_popup_login_popup_component__WEBPACK_IMPORTED_MODULE_3__['LoginPopupComponent'],
          _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_4__['LoginFormComponent'],
          _forgot_password_form_forgot_password_form_component__WEBPACK_IMPORTED_MODULE_5__[
            'ForgotPasswordFormComponent'
          ]
        ];
        class AuthModule {}
        AuthModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineNgModule']({ type: AuthModule });
        AuthModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineInjector']({
          factory: function AuthModule_Factory(t) {
            return new (t || AuthModule)();
          },
          imports: [
            [
              _angular_forms__WEBPACK_IMPORTED_MODULE_6__['ReactiveFormsModule'],
              _angular_common__WEBPACK_IMPORTED_MODULE_7__['CommonModule']
            ]
          ]
        });
        (function() {
          (typeof ngJitMode === 'undefined' || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵsetNgModuleScope'](AuthModule, {
              declarations: [
                _registration_form_registration_form_component__WEBPACK_IMPORTED_MODULE_1__[
                  'RegistrationFormComponent'
                ],
                _login_social_button_login_social_button_component__WEBPACK_IMPORTED_MODULE_2__[
                  'LoginSocialButtonComponent'
                ],
                _login_popup_login_popup_component__WEBPACK_IMPORTED_MODULE_3__['LoginPopupComponent'],
                _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_4__['LoginFormComponent'],
                _forgot_password_form_forgot_password_form_component__WEBPACK_IMPORTED_MODULE_5__[
                  'ForgotPasswordFormComponent'
                ]
              ],
              imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__['ReactiveFormsModule'],
                _angular_common__WEBPACK_IMPORTED_MODULE_7__['CommonModule']
              ],
              exports: [
                _registration_form_registration_form_component__WEBPACK_IMPORTED_MODULE_1__[
                  'RegistrationFormComponent'
                ],
                _login_social_button_login_social_button_component__WEBPACK_IMPORTED_MODULE_2__[
                  'LoginSocialButtonComponent'
                ],
                _login_popup_login_popup_component__WEBPACK_IMPORTED_MODULE_3__['LoginPopupComponent'],
                _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_4__['LoginFormComponent'],
                _forgot_password_form_forgot_password_form_component__WEBPACK_IMPORTED_MODULE_5__[
                  'ForgotPasswordFormComponent'
                ]
              ]
            });
        })();
        /*@__PURE__*/ (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            AuthModule,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'],
                args: [
                  {
                    declarations: api,
                    exports: api,
                    imports: [
                      _angular_forms__WEBPACK_IMPORTED_MODULE_6__['ReactiveFormsModule'],
                      _angular_common__WEBPACK_IMPORTED_MODULE_7__['CommonModule']
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

    /***/ './src/app/auth/forgot-password-form/forgot-password-form.component.ts':
      /*!*****************************************************************************!*\
  !*** ./src/app/auth/forgot-password-form/forgot-password-form.component.ts ***!
  \*****************************************************************************/
      /*! exports provided: ForgotPasswordFormComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'ForgotPasswordFormComponent',
          function() {
            return ForgotPasswordFormComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/forms */ './node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js'
        );

        class ForgotPasswordFormComponent {
          constructor(fb) {
            this.fb = fb;
            this.submit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
          }
          ngOnInit() {
            this.form = this.fb.group({
              email: [
                '',
                [
                  _angular_forms__WEBPACK_IMPORTED_MODULE_1__['Validators'].required,
                  _angular_forms__WEBPACK_IMPORTED_MODULE_1__['Validators'].email
                ]
              ]
            });
          }
          get email() {
            return this.form.get('email');
          }
          onSubmit() {
            if (this.form.valid) {
              const parsedForm = {
                email: this.email.value
              };
              this.submit.emit(parsedForm);
              this.form.reset();
            } else {
              this.form.markAllAsTouched();
            }
          }
        }
        ForgotPasswordFormComponent.ɵfac = function ForgotPasswordFormComponent_Factory(t) {
          return new (t || ForgotPasswordFormComponent)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
              _angular_forms__WEBPACK_IMPORTED_MODULE_1__['FormBuilder']
            )
          );
        };
        ForgotPasswordFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineComponent']({
          type: ForgotPasswordFormComponent,
          selectors: [['app-forgot-password-form']],
          inputs: { loading: 'loading' },
          outputs: { submit: 'submit' },
          decls: 10,
          vars: 4,
          consts: [
            [1, 'login-form'],
            [1, 'body'],
            [1, 'title'],
            [1, 'description'],
            [3, 'formGroup'],
            [
              'type',
              'email',
              'placeholder',
              '\u05D0\u05D9\u05DE\u05D9\u05D9\u05DC',
              'formControlName',
              'email',
              1,
              'input'
            ],
            ['tabindex', '5', 1, 'site-button', 'main-button', 3, 'disabled', 'click']
          ],
          template: function ForgotPasswordFormComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div', 0);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](1, 'div', 1);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](2, 'div', 2);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                3,
                ' \u05E9\u05DB\u05D7\u05EA\u05D9 \u05E1\u05D9\u05E1\u05DE\u05D0 '
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](4, 'p', 3);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                5,
                ' \u05D4\u05DB\u05E0\u05E1 \u05DB\u05EA\u05D5\u05D1\u05EA \u05D0\u05D9\u05DE\u05D9\u05D9\u05DC \u05E2\u05DC \u05DE\u05E0\u05EA \u05DC\u05D0\u05E4\u05E1 \u05D0\u05EA \u05D4\u05E1\u05D9\u05E1\u05DE\u05D0. '
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementContainerStart'](6, 4);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](7, 'input', 5);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementContainerEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](8, 'button', 6);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'click',
                function ForgotPasswordFormComponent_Template_button_click_8_listener() {
                  return ctx.onSubmit();
                }
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](9, ' \u05E9\u05DC\u05D7 ');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            }
            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](6);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('formGroup', ctx.form);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵclassProp'](
                'invalid',
                !ctx.email.valid && ctx.email.touched
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('disabled', ctx.loading);
            }
          },
          directives: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__['NgControlStatusGroup'],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__['FormGroupDirective'],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__['DefaultValueAccessor'],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__['NgControlStatus'],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__['FormControlName']
          ],
          styles: [
            '\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvZm9yZ290LXBhc3N3b3JkLWZvcm0vZm9yZ290LXBhc3N3b3JkLWZvcm0uY29tcG9uZW50LnNjc3MifQ== */'
          ]
        });
        /*@__PURE__*/ (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            ForgotPasswordFormComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                args: [
                  {
                    selector: 'app-forgot-password-form',
                    templateUrl: './forgot-password-form.component.html',
                    styleUrls: ['./forgot-password-form.component.scss']
                  }
                ]
              }
            ],
            function() {
              return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__['FormBuilder'] }];
            },
            {
              loading: [
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

    /***/ './src/app/auth/login-form/login-form.component.ts':
      /*!*********************************************************!*\
  !*** ./src/app/auth/login-form/login-form.component.ts ***!
  \*********************************************************/
      /*! exports provided: LoginFormComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'LoginFormComponent', function() {
          return LoginFormComponent;
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/forms */ './node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js'
        );
        /* harmony import */ var _login_social_button_login_social_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../login-social-button/login-social-button.component */ './src/app/auth/login-social-button/login-social-button.component.ts'
        );

        class LoginFormComponent {
          constructor(fb) {
            this.fb = fb;
            this.haveNoUser = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            this.forgotPassword = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            this.signInWithEmailAndPassword = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            this.signInWithGoogle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            this.signInWithFacebook = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
          }
          ngOnInit() {
            this.form = this.fb.group({
              email: [
                '',
                [
                  _angular_forms__WEBPACK_IMPORTED_MODULE_1__['Validators'].required,
                  _angular_forms__WEBPACK_IMPORTED_MODULE_1__['Validators'].email
                ]
              ],
              password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__['Validators'].required]
            });
          }
          get email() {
            return this.form.get('email');
          }
          get password() {
            return this.form.get('password');
          }
          onSubmit() {
            if (this.form.valid) {
              const parsedForm = {
                email: this.email.value,
                password: this.password.value
              };
              this.signInWithEmailAndPassword.emit(parsedForm);
            } else {
              this.form.markAllAsTouched();
            }
          }
        }
        LoginFormComponent.ɵfac = function LoginFormComponent_Factory(t) {
          return new (t || LoginFormComponent)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
              _angular_forms__WEBPACK_IMPORTED_MODULE_1__['FormBuilder']
            )
          );
        };
        LoginFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineComponent']({
          type: LoginFormComponent,
          selectors: [['app-login-form']],
          inputs: { loading: 'loading' },
          outputs: {
            haveNoUser: 'haveNoUser',
            forgotPassword: 'forgotPassword',
            signInWithEmailAndPassword: 'signInWithEmailAndPassword',
            signInWithGoogle: 'signInWithGoogle',
            signInWithFacebook: 'signInWithFacebook'
          },
          decls: 21,
          vars: 8,
          consts: [
            [1, 'login-form'],
            [1, 'body'],
            [1, 'title'],
            [3, 'formGroup'],
            [
              'type',
              'email',
              'placeholder',
              '\u05D0\u05D9\u05DE\u05D9\u05D9\u05DC',
              'formControlName',
              'email',
              1,
              'input'
            ],
            [
              'type',
              'password',
              'placeholder',
              '\u05E1\u05D9\u05E1\u05DE\u05D0',
              'formControlName',
              'password',
              1,
              'input'
            ],
            [1, 'footer'],
            [1, 'nav-buttons'],
            [1, 'nav-button', 3, 'click'],
            [1, 'divider'],
            [1, 'social-buttons'],
            [1, 'social-button', 3, 'type', 'click'],
            ['tabindex', '5', 1, 'site-button', 'main-button', 3, 'disabled', 'click']
          ],
          template: function LoginFormComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div', 0);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](1, 'div', 1);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](2, 'div', 2);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                3,
                ' \u05E4\u05E8\u05D8\u05D9 \u05DE\u05E9\u05EA\u05DE\u05E9 '
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementContainerStart'](4, 3);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](5, 'input', 4);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](6, 'input', 5);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementContainerEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](7, 'div', 6);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](8, 'div', 7);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](9, 'button', 8);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'click',
                function LoginFormComponent_Template_button_click_9_listener() {
                  return ctx.haveNoUser.emit();
                }
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                10,
                ' \u05D0\u05D9\u05DF \u05DC\u05D9 \u05DE\u05E9\u05EA\u05DE\u05E9 '
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](11, 'div', 9);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](12, 'button', 8);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'click',
                function LoginFormComponent_Template_button_click_12_listener() {
                  return ctx.forgotPassword.emit();
                }
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                13,
                ' \u05E9\u05DB\u05D7\u05EA\u05D9 \u05E1\u05D9\u05E1\u05DE\u05D0 '
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](14, 'div', 10);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](15, 'app-login-social-button', 11);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'click',
                function LoginFormComponent_Template_app_login_social_button_click_15_listener() {
                  return ctx.signInWithFacebook.emit();
                }
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                16,
                ' \u05D4\u05EA\u05D7\u05D1\u05E8 \u05E2\u05DD \u05E4\u05D9\u05D9\u05E1\u05D1\u05D5\u05E7 '
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](17, 'app-login-social-button', 11);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'click',
                function LoginFormComponent_Template_app_login_social_button_click_17_listener() {
                  return ctx.signInWithGoogle.emit();
                }
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                18,
                ' \u05D4\u05EA\u05D7\u05D1\u05E8 \u05E2\u05DD \u05D2\u05D5\u05D2\u05DC '
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](19, 'button', 12);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'click',
                function LoginFormComponent_Template_button_click_19_listener() {
                  return ctx.onSubmit();
                }
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](20, ' \u05D4\u05EA\u05D7\u05D1\u05E8 ');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            }
            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](4);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('formGroup', ctx.form);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵclassProp'](
                'invalid',
                !ctx.email.valid && ctx.email.touched
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵclassProp'](
                'invalid',
                !ctx.password.valid && ctx.password.touched
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](9);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('type', 'facebook');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('type', 'google');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('disabled', ctx.loading);
            }
          },
          directives: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__['NgControlStatusGroup'],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__['FormGroupDirective'],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__['DefaultValueAccessor'],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__['NgControlStatus'],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__['FormControlName'],
            _login_social_button_login_social_button_component__WEBPACK_IMPORTED_MODULE_2__[
              'LoginSocialButtonComponent'
            ]
          ],
          styles: [
            '\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvbG9naW4tZm9ybS9sb2dpbi1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */'
          ]
        });
        /*@__PURE__*/ (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            LoginFormComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                args: [
                  {
                    selector: 'app-login-form',
                    templateUrl: './login-form.component.html',
                    styleUrls: ['./login-form.component.scss']
                  }
                ]
              }
            ],
            function() {
              return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__['FormBuilder'] }];
            },
            {
              loading: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input']
                }
              ],
              haveNoUser: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Output']
                }
              ],
              forgotPassword: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Output']
                }
              ],
              signInWithEmailAndPassword: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Output']
                }
              ],
              signInWithGoogle: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Output']
                }
              ],
              signInWithFacebook: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Output']
                }
              ]
            }
          );
        })();

        /***/
      },

    /***/ './src/app/auth/login-popup/login-popup.component.ts':
      /*!***********************************************************!*\
  !*** ./src/app/auth/login-popup/login-popup.component.ts ***!
  \***********************************************************/
      /*! exports provided: LoginPopupComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'LoginPopupComponent', function() {
          return LoginPopupComponent;
        });
        /* harmony import */ var src_app_shared_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! src/app/shared/constants */ './src/app/shared/constants.ts'
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! rxjs/operators */ './node_modules/rxjs/_esm2015/operators/index.js'
        );
        /* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../shared/services/auth.service */ './src/app/shared/services/auth.service.ts'
        );
        /* harmony import */ var _shared_services_signIn_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./../../shared/services/signIn.service */ './src/app/shared/services/signIn.service.ts'
        );
        /* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ngx-toastr */ './node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js'
        );
        /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! @angular/common */ './node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js'
        );
        /* harmony import */ var _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../login-form/login-form.component */ './src/app/auth/login-form/login-form.component.ts'
        );
        /* harmony import */ var _registration_form_registration_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../registration-form/registration-form.component */ './src/app/auth/registration-form/registration-form.component.ts'
        );
        /* harmony import */ var _forgot_password_form_forgot_password_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../forgot-password-form/forgot-password-form.component */ './src/app/auth/forgot-password-form/forgot-password-form.component.ts'
        );

        function LoginPopupComponent_app_login_form_10_Template(rf, ctx) {
          if (rf & 1) {
            const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵgetCurrentView']();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵelementStart'](0, 'app-login-form', 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵlistener'](
              'signInWithEmailAndPassword',
              function LoginPopupComponent_app_login_form_10_Template_app_login_form_signInWithEmailAndPassword_0_listener(
                $event
              ) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵrestoreView'](_r11);
                const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵnextContext']();
                return ctx_r10.signInWithEmailAndPassword($event);
              }
            )(
              'signInWithFacebook',
              function LoginPopupComponent_app_login_form_10_Template_app_login_form_signInWithFacebook_0_listener() {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵrestoreView'](_r11);
                const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵnextContext']();
                return ctx_r12.signInWithFacebook();
              }
            )(
              'signInWithGoogle',
              function LoginPopupComponent_app_login_form_10_Template_app_login_form_signInWithGoogle_0_listener() {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵrestoreView'](_r11);
                const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵnextContext']();
                return ctx_r13.signInWithGoogle();
              }
            )(
              'haveNoUser',
              function LoginPopupComponent_app_login_form_10_Template_app_login_form_haveNoUser_0_listener() {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵrestoreView'](_r11);
                const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵnextContext']();
                return (ctx_r14.mode = 'Register');
              }
            )(
              'forgotPassword',
              function LoginPopupComponent_app_login_form_10_Template_app_login_form_forgotPassword_0_listener() {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵrestoreView'](_r11);
                const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵnextContext']();
                return (ctx_r15.mode = 'Forgot');
              }
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵelementEnd']();
          }
          if (rf & 2) {
            const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵnextContext']();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵproperty']('loading', ctx_r7.loading);
          }
        }
        function LoginPopupComponent_app_registration_form_11_Template(rf, ctx) {
          if (rf & 1) {
            const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵgetCurrentView']();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵelementStart'](0, 'app-registration-form', 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵlistener'](
              'signUpWithEmailAndPassword',
              function LoginPopupComponent_app_registration_form_11_Template_app_registration_form_signUpWithEmailAndPassword_0_listener(
                $event
              ) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵrestoreView'](_r17);
                const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵnextContext']();
                return ctx_r16.createUserWithEmailAndPassword($event);
              }
            )(
              'signUpWithFacebook',
              function LoginPopupComponent_app_registration_form_11_Template_app_registration_form_signUpWithFacebook_0_listener() {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵrestoreView'](_r17);
                const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵnextContext']();
                return ctx_r18.signInWithFacebook();
              }
            )(
              'signUpWithGoogle',
              function LoginPopupComponent_app_registration_form_11_Template_app_registration_form_signUpWithGoogle_0_listener() {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵrestoreView'](_r17);
                const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵnextContext']();
                return ctx_r19.signInWithGoogle();
              }
            )(
              'haveUser',
              function LoginPopupComponent_app_registration_form_11_Template_app_registration_form_haveUser_0_listener() {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵrestoreView'](_r17);
                const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵnextContext']();
                return (ctx_r20.mode = 'Login');
              }
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵelementEnd']();
          }
          if (rf & 2) {
            const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵnextContext']();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵproperty']('loading', ctx_r8.loading);
          }
        }
        function LoginPopupComponent_app_forgot_password_form_12_Template(rf, ctx) {
          if (rf & 1) {
            const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵgetCurrentView']();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵelementStart'](0, 'app-forgot-password-form', 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵlistener'](
              'submit',
              function LoginPopupComponent_app_forgot_password_form_12_Template_app_forgot_password_form_submit_0_listener(
                $event
              ) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵrestoreView'](_r22);
                const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵnextContext']();
                return ctx_r21.resetPassword($event);
              }
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵelementEnd']();
          }
          if (rf & 2) {
            const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵnextContext']();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵproperty']('loading', ctx_r9.loading);
          }
        }
        //export type LoginKind='Host'|'Participate'|'Tell';
        class LoginPopupComponent {
          constructor(authService, signInService, toastr) {
            this.authService = authService;
            this.signInService = signInService;
            this.toastr = toastr;
            this.mode = 'Login';
            this.lastdate = this.signInService.lastLogin;
          }
          signInWithEmailAndPassword(form) {
            this.loading = true;
            this.authService
              .signInWithEmailAndPassword(form.email, form.password)
              .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['finalize'])(() => (this.loading = false)))
              .subscribe(
                () => this.loginSuccessSignIn(),
                error => {
                  const { code } = error;
                  if (
                    code === _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__['AuthErrors'].UserNotFound ||
                    code === _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__['AuthErrors'].WrongPassword
                  ) {
                    this.toastr.error('אימייל או סיסמא לא נכונים.');
                  } else {
                    this.handleError();
                  }
                }
              );
          }
          signInWithFacebook() {
            this.loading = true;
            this.authService
              .signInWithFacebook()
              .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['finalize'])(() => (this.loading = false)))
              .subscribe(
                () => this.loginSuccessSignIn(),
                error => {
                  if (
                    error.code !==
                    _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__['AuthErrors'].CancelledPopupRequest
                  ) {
                    this.handleError();
                  }
                }
              );
          }
          signInWithGoogle() {
            this.loading = true;
            this.authService
              .signInWithGoogle()
              .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['finalize'])(() => (this.loading = false)))
              .subscribe(
                () => this.loginSuccessSignIn(),
                error => {
                  if (
                    error.code !==
                    _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__['AuthErrors'].CancelledPopupRequest
                  ) {
                    this.handleError();
                  }
                }
              );
          }
          createUserWithEmailAndPassword(form) {
            this.loading = true;
            this.authService
              .createUserWithEmailAndPassword(form.email, form.password)
              .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['finalize'])(() => (this.loading = false)))
              .subscribe(
                () => this.loginSuccessRegister(),
                error => {
                  if (
                    error.code ===
                    _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__['AuthErrors'].EmailAlreadyInUse
                  ) {
                    this.toastr.warning('כתובת האימייל הזו נמצאת כבר בשימוש.');
                  } else {
                    this.handleError();
                  }
                }
              );
          }
          resetPassword(form) {
            this.loading = true;
            this.authService
              .sendPasswordResetEmail(form.email)
              .pipe(
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['finalize'])(() => {
                  this.loading = false;
                  this.toastr.success('נשלח בהצלחה מייל לאיפוס סיסמא.');
                })
              )
              .subscribe();
          }
          handleError() {
            this.toastr.error('אירעה שגיאה, אנא נסה שנית.');
          }
          // צריך טיפול בהתחברות לפי סוג ולפי תאריך
          // הפונקציה לא גמורה ומצריכה טיפול
          loginSuccessSignIn() {
            this.authService.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['take'])(1)).subscribe(() => {
              this.yearDate = new Date(this.lastdate);
              if (
                this.yearDate.getFullYear() < src_app_shared_constants__WEBPACK_IMPORTED_MODULE_0__['MEMORIAL_YEAR']
              ) {
                this.authService.closeLoginRegister();
                this.toastr.success(`התחברת בהצלחה!`);
              }
              // }
              else {
                this.authService.closeLogin();
              }
            });
          }
          loginSuccessRegister() {
            this.authService.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['take'])(1)).subscribe(() => {
              this.authService.closeLoginRegister();
              this.toastr.success(`התחברת בהצלחה!`);
            });
          }
        }
        LoginPopupComponent.ɵfac = function LoginPopupComponent_Factory(t) {
          return new (t || LoginPopupComponent)(
            _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵdirectiveInject'](
              _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__['AuthService']
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵdirectiveInject'](
              _shared_services_signIn_service__WEBPACK_IMPORTED_MODULE_4__['SignInService']
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵdirectiveInject'](
              ngx_toastr__WEBPACK_IMPORTED_MODULE_5__['ToastrService']
            )
          );
        };
        LoginPopupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵdefineComponent']({
          type: LoginPopupComponent,
          selectors: [['app-login-popup']],
          inputs: { mode: 'mode', user: 'user' },
          decls: 13,
          vars: 8,
          consts: [
            [1, 'login-popup-container'],
            [1, 'close-button', 3, 'click'],
            [1, 'fas', 'fa-times'],
            [1, 'tabs'],
            [1, 'site-button', 'tab', 3, 'click'],
            [1, 'content-container'],
            [3, 'ngSwitch'],
            [
              3,
              'loading',
              'signInWithEmailAndPassword',
              'signInWithFacebook',
              'signInWithGoogle',
              'haveNoUser',
              'forgotPassword',
              4,
              'ngSwitchCase'
            ],
            [
              3,
              'loading',
              'signUpWithEmailAndPassword',
              'signUpWithFacebook',
              'signUpWithGoogle',
              'haveUser',
              4,
              'ngSwitchCase'
            ],
            [3, 'loading', 'submit', 4, 'ngSwitchCase'],
            [
              3,
              'loading',
              'signInWithEmailAndPassword',
              'signInWithFacebook',
              'signInWithGoogle',
              'haveNoUser',
              'forgotPassword'
            ],
            [3, 'loading', 'signUpWithEmailAndPassword', 'signUpWithFacebook', 'signUpWithGoogle', 'haveUser'],
            [3, 'loading', 'submit']
          ],
          template: function LoginPopupComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵelementStart'](0, 'div', 0);
              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵelementStart'](1, 'button', 1);
              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵlistener'](
                'click',
                function LoginPopupComponent_Template_button_click_1_listener() {
                  return ctx.authService.closeLogin();
                }
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵelement'](2, 'i', 2);
              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵelementStart'](3, 'div', 3);
              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵelementStart'](4, 'button', 4);
              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵlistener'](
                'click',
                function LoginPopupComponent_Template_button_click_4_listener() {
                  return (ctx.mode = 'Login');
                }
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵtext'](5, ' \u05D4\u05EA\u05D7\u05D1\u05E8\u05D5\u05EA ');
              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵelementStart'](6, 'button', 4);
              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵlistener'](
                'click',
                function LoginPopupComponent_Template_button_click_6_listener() {
                  return (ctx.mode = 'Register');
                }
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵtext'](7, ' \u05D4\u05E8\u05E9\u05DE\u05D4 ');
              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵelementStart'](8, 'div', 5);
              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵelementContainerStart'](9, 6);
              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵtemplate'](
                10,
                LoginPopupComponent_app_login_form_10_Template,
                1,
                1,
                'app-login-form',
                7
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵtemplate'](
                11,
                LoginPopupComponent_app_registration_form_11_Template,
                1,
                1,
                'app-registration-form',
                8
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵtemplate'](
                12,
                LoginPopupComponent_app_forgot_password_form_12_Template,
                1,
                1,
                'app-forgot-password-form',
                9
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵelementContainerEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵelementEnd']();
            }
            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵadvance'](4);
              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵclassProp']('current', ctx.mode === 'Login');
              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵadvance'](2);
              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵclassProp']('current', ctx.mode === 'Register');
              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵadvance'](3);
              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵproperty']('ngSwitch', ctx.mode);
              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵadvance'](1);
              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵproperty']('ngSwitchCase', 'Login');
              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵadvance'](1);
              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵproperty']('ngSwitchCase', 'Register');
              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵadvance'](1);
              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵproperty']('ngSwitchCase', 'Forgot');
            }
          },
          directives: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__['NgSwitch'],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__['NgSwitchCase'],
            _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_7__['LoginFormComponent'],
            _registration_form_registration_form_component__WEBPACK_IMPORTED_MODULE_8__['RegistrationFormComponent'],
            _forgot_password_form_forgot_password_form_component__WEBPACK_IMPORTED_MODULE_9__[
              'ForgotPasswordFormComponent'
            ]
          ],
          styles: [
            '.login-popup-container[_ngcontent-%COMP%] {\n  position: fixed;\n  margin: auto;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  max-width: 500px;\n}\n@media only screen and (max-width: 768px) {\n  .login-popup-container[_ngcontent-%COMP%] {\n    max-width: 80%;\n  }\n}\n.login-popup-container[_ngcontent-%COMP%]   .close-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 30px;\n  padding: 10px;\n  border: none;\n  color: #ffffff;\n  background-color: #00a099;\n  cursor: pointer;\n}\n@media only screen and (min-width: 600px) {\n  .login-popup-container[_ngcontent-%COMP%]   .close-button[_ngcontent-%COMP%] {\n    transform: translateX(100%);\n  }\n}\n@media only screen and (max-width: 768px) {\n  .login-popup-container[_ngcontent-%COMP%]   .close-button[_ngcontent-%COMP%] {\n    right: 0;\n    padding: 5px;\n  }\n}\n.login-popup-container[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  border-top: 5px solid #00a099;\n}\n.login-popup-container[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%] {\n  height: 70px;\n  font-size: 36px;\n  flex: 1;\n  color: white;\n  border: 1px solid #00a099;\n  border-radius: 0px;\n}\n@media only screen and (max-width: 768px) {\n  .login-popup-container[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%] {\n    height: 45px;\n    font-size: 26px;\n  }\n}\n.login-popup-container[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab.current[_ngcontent-%COMP%] {\n  color: #00a099;\n  background-color: white;\n  border-radius: 0px;\n  border: 3px black solid;\n}\n.login-popup-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%] {\n  flex: 1;\n  position: relative;\n  background-color: white;\n  left: 0;\n}\n  .login-form .body {\n  padding: 15px;\n}\n@media only screen and (min-width: 768px) {\n    .login-form .body {\n    padding: 30px;\n  }\n}\n  .login-form .body .title {\n  font-size: 36px;\n  font-family: "arbel";\n  color: #15305a;\n  letter-spacing: 2px;\n  margin-bottom: 20px;\n}\n@media only screen and (max-width: 768px) {\n    .login-form .body .title {\n    font-size: 26px;\n    margin-bottom: 10px;\n  }\n}\n  .login-form .body .description {\n  margin: 10px 0;\n}\n  .login-form .body .input {\n  font-family: "Heebo";\n  padding: 10px;\n  height: 50px;\n  max-width: 490px;\n  width: 100%;\n  border-radius: 5px;\n  background-color: whitesmoke;\n  font-size: 16px;\n  color: #111111;\n  border: none;\n  margin-bottom: 10px;\n}\n@media only screen and (max-width: 768px) {\n    .login-form .body .input {\n    height: 38px;\n  }\n}\n  .login-form .body .input:focus {\n  background-color: white;\n  outline: 1px solid #00a099;\n}\n  .login-form .body .input.invalid {\n  border: 1px solid red;\n}\n  .login-form .footer {\n  margin-top: 5px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n@media only screen and (max-width: 768px) {\n    .login-form .footer {\n    justify-content: center;\n  }\n}\n  .login-form .footer .nav-buttons {\n  display: flex;\n  align-items: center;\n}\n  .login-form .footer .nav-buttons .nav-button {\n  font-size: 16px;\n  font-family: "Heebo";\n  color: #00a099;\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n}\n  .login-form .footer .divider {\n  margin: 0 10px;\n  width: 1px;\n  height: 15px;\n  background-color: gray;\n}\n  .login-form .social-buttons {\n  display: flex;\n  justify-content: space-between;\n  align-items: stretch;\n  flex-wrap: wrap;\n}\n@media only screen and (max-width: 600px) {\n    .login-form .social-buttons {\n    justify-content: center;\n  }\n}\n  .login-form .social-buttons .social-button {\n  flex: 0 0 210px;\n  margin-bottom: 5px;\n}\n  .login-form .main-button {\n  width: 500px;\n  height: 90px;\n  font-size: 36px;\n  letter-spacing: 2px;\n}\n@media only screen and (max-width: 768px) {\n    .login-form .main-button {\n    width: 100%;\n    height: 50px;\n    font-size: 26px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbi1wb3B1cC9DOlxcVXNlcnNcXFRlaGlsYVxcbGFzdFxcb3VyQnJvXFxvdXItYnJvdGhlcnMtd2ViL3NyY1xcYXBwXFxhdXRoXFxsb2dpbi1wb3B1cFxcbG9naW4tcG9wdXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2F1dGgvbG9naW4tcG9wdXAvbG9naW4tcG9wdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtBQ0NGO0FEQ0U7RUFSRjtJQVNJLGNBQUE7RUNFRjtBQUNGO0FEQUU7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FDRUo7QURBSTtFQVZGO0lBV0ksMkJBQUE7RUNHSjtBQUNGO0FEREk7RUFkRjtJQWVJLFFBQUE7SUFDQSxZQUFBO0VDSUo7QUFDRjtBRERFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtBQ0dKO0FEREk7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBRUEseUJBQUE7RUFDQSxrQkFBQTtBQ0VOO0FEQU07RUFURjtJQVVJLFlBQUE7SUFDQSxlQUFBO0VDR047QUFDRjtBRERNO0VBQ0UsY0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQ0dSO0FERUU7RUFDRSxPQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLE9BQUE7QUNBSjtBRE1JO0VBQ0UsYUFBQTtBQ0hOO0FES007RUFIRjtJQUlJLGFBQUE7RUNGTjtBQUNGO0FESU07RUFDRSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ0ZSO0FESVE7RUFQRjtJQVFJLGVBQUE7SUFDQSxtQkFBQTtFQ0RSO0FBQ0Y7QURJTTtFQUNFLGNBQUE7QUNGUjtBREtNO0VBQ0Usb0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ0hSO0FES1E7RUFiRjtJQWNJLFlBQUE7RUNGUjtBQUNGO0FESVE7RUFDRSx1QkFBQTtFQUNBLDBCQUFBO0FDRlY7QURLUTtFQUNFLHFCQUFBO0FDSFY7QURRSTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDTk47QURRTTtFQVBGO0lBUUksdUJBQUE7RUNMTjtBQUNGO0FET007RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUNMUjtBRE9RO0VBQ0UsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNMVjtBRFNNO0VBQ0UsY0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUNQUjtBRFdJO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0FDVE47QURXTTtFQU5GO0lBT0ksdUJBQUE7RUNSTjtBQUNGO0FEVU07RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUNSUjtBRFlJO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNWTjtBRFlNO0VBTkY7SUFPSSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGVBQUE7RUNUTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9sb2dpbi1wb3B1cC9sb2dpbi1wb3B1cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi1wb3B1cC1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIG1heC13aWR0aDogNTAwcHg7XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIG1heC13aWR0aDogODAlO1xyXG4gIH1cclxuXHJcbiAgLmNsb3NlLWJ1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMzBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAxNjAsIDE1Myk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnRhYnMge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYm9yZGVyLXRvcDogNXB4IHNvbGlkIHJnYigwLCAxNjAsIDE1Myk7XHJcblxyXG4gICAgLnRhYiB7XHJcbiAgICAgIGhlaWdodDogNzBweDtcclxuICAgICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgICBmbGV4OiAxO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIC8vYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigwLCAxNjAsIDE1Myk7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuXHJcbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmN1cnJlbnQge1xyXG4gICAgICAgIGNvbG9yOiByZ2IoMCwgMTYwLCAxNTMpO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgICAgICBib3JkZXI6IDNweCBibGFjayBzb2xpZDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNvbnRlbnQtY29udGFpbmVyIHtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgfVxyXG59XHJcblxyXG46Om5nLWRlZXAge1xyXG4gIC5sb2dpbi1mb3JtIHtcclxuICAgIC5ib2R5IHtcclxuICAgICAgcGFkZGluZzogMTVweDtcclxuXHJcbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgICAgICBmb250LWZhbWlseTogJ2FyYmVsJztcclxuICAgICAgICBjb2xvcjogIzE1MzA1YTtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblxyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuZGVzY3JpcHRpb24ge1xyXG4gICAgICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuaW5wdXQge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnSGVlYm8nO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgIG1heC13aWR0aDogNDkwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsIDI0NSwgMjQ1KTtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgY29sb3I6IHJnYigxNywgMTcsIDE3KTtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICAgaGVpZ2h0OiAzOHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIG91dGxpbmU6IDFweCBzb2xpZCByZ2IoMCwgMTYwLCAxNTMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5pbnZhbGlkIHtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZm9vdGVyIHtcclxuICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblxyXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5uYXYtYnV0dG9ucyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAubmF2LWJ1dHRvbiB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogJ0hlZWJvJztcclxuICAgICAgICAgIGNvbG9yOiByZ2IoMCwgMTYwLCAxNTMpO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuZGl2aWRlciB7XHJcbiAgICAgICAgbWFyZ2luOiAwIDEwcHg7XHJcbiAgICAgICAgd2lkdGg6IDFweDtcclxuICAgICAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5zb2NpYWwtYnV0dG9ucyB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuXHJcbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnNvY2lhbC1idXR0b24ge1xyXG4gICAgICAgIGZsZXg6IDAgMCAyMTBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAubWFpbi1idXR0b24ge1xyXG4gICAgICB3aWR0aDogNTAwcHg7XHJcbiAgICAgIGhlaWdodDogOTBweDtcclxuICAgICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG5cclxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLmxvZ2luLXBvcHVwLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbWFyZ2luOiBhdXRvO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmxvZ2luLXBvcHVwLWNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiA4MCU7XG4gIH1cbn1cbi5sb2dpbi1wb3B1cC1jb250YWluZXIgLmNsb3NlLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMzBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYTA5OTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xuICAubG9naW4tcG9wdXAtY29udGFpbmVyIC5jbG9zZS1idXR0b24ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAubG9naW4tcG9wdXAtY29udGFpbmVyIC5jbG9zZS1idXR0b24ge1xuICAgIHJpZ2h0OiAwO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgfVxufVxuLmxvZ2luLXBvcHVwLWNvbnRhaW5lciAudGFicyB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXItdG9wOiA1cHggc29saWQgIzAwYTA5OTtcbn1cbi5sb2dpbi1wb3B1cC1jb250YWluZXIgLnRhYnMgLnRhYiB7XG4gIGhlaWdodDogNzBweDtcbiAgZm9udC1zaXplOiAzNnB4O1xuICBmbGV4OiAxO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMGEwOTk7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmxvZ2luLXBvcHVwLWNvbnRhaW5lciAudGFicyAudGFiIHtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgZm9udC1zaXplOiAyNnB4O1xuICB9XG59XG4ubG9naW4tcG9wdXAtY29udGFpbmVyIC50YWJzIC50YWIuY3VycmVudCB7XG4gIGNvbG9yOiAjMDBhMDk5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICBib3JkZXI6IDNweCBibGFjayBzb2xpZDtcbn1cbi5sb2dpbi1wb3B1cC1jb250YWluZXIgLmNvbnRlbnQtY29udGFpbmVyIHtcbiAgZmxleDogMTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgbGVmdDogMDtcbn1cblxuOjpuZy1kZWVwIC5sb2dpbi1mb3JtIC5ib2R5IHtcbiAgcGFkZGluZzogMTVweDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgOjpuZy1kZWVwIC5sb2dpbi1mb3JtIC5ib2R5IHtcbiAgICBwYWRkaW5nOiAzMHB4O1xuICB9XG59XG46Om5nLWRlZXAgLmxvZ2luLWZvcm0gLmJvZHkgLnRpdGxlIHtcbiAgZm9udC1zaXplOiAzNnB4O1xuICBmb250LWZhbWlseTogXCJhcmJlbFwiO1xuICBjb2xvcjogIzE1MzA1YTtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgOjpuZy1kZWVwIC5sb2dpbi1mb3JtIC5ib2R5IC50aXRsZSB7XG4gICAgZm9udC1zaXplOiAyNnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cbn1cbjo6bmctZGVlcCAubG9naW4tZm9ybSAuYm9keSAuZGVzY3JpcHRpb24ge1xuICBtYXJnaW46IDEwcHggMDtcbn1cbjo6bmctZGVlcCAubG9naW4tZm9ybSAuYm9keSAuaW5wdXQge1xuICBmb250LWZhbWlseTogXCJIZWVib1wiO1xuICBwYWRkaW5nOiAxMHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1heC13aWR0aDogNDkwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICMxMTExMTE7XG4gIGJvcmRlcjogbm9uZTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgOjpuZy1kZWVwIC5sb2dpbi1mb3JtIC5ib2R5IC5pbnB1dCB7XG4gICAgaGVpZ2h0OiAzOHB4O1xuICB9XG59XG46Om5nLWRlZXAgLmxvZ2luLWZvcm0gLmJvZHkgLmlucHV0OmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIG91dGxpbmU6IDFweCBzb2xpZCAjMDBhMDk5O1xufVxuOjpuZy1kZWVwIC5sb2dpbi1mb3JtIC5ib2R5IC5pbnB1dC5pbnZhbGlkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xufVxuOjpuZy1kZWVwIC5sb2dpbi1mb3JtIC5mb290ZXIge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgOjpuZy1kZWVwIC5sb2dpbi1mb3JtIC5mb290ZXIge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG59XG46Om5nLWRlZXAgLmxvZ2luLWZvcm0gLmZvb3RlciAubmF2LWJ1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuOjpuZy1kZWVwIC5sb2dpbi1mb3JtIC5mb290ZXIgLm5hdi1idXR0b25zIC5uYXYtYnV0dG9uIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LWZhbWlseTogXCJIZWVib1wiO1xuICBjb2xvcjogIzAwYTA5OTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuOjpuZy1kZWVwIC5sb2dpbi1mb3JtIC5mb290ZXIgLmRpdmlkZXIge1xuICBtYXJnaW46IDAgMTBweDtcbiAgd2lkdGg6IDFweDtcbiAgaGVpZ2h0OiAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xufVxuOjpuZy1kZWVwIC5sb2dpbi1mb3JtIC5zb2NpYWwtYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgOjpuZy1kZWVwIC5sb2dpbi1mb3JtIC5zb2NpYWwtYnV0dG9ucyB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbn1cbjo6bmctZGVlcCAubG9naW4tZm9ybSAuc29jaWFsLWJ1dHRvbnMgLnNvY2lhbC1idXR0b24ge1xuICBmbGV4OiAwIDAgMjEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbjo6bmctZGVlcCAubG9naW4tZm9ybSAubWFpbi1idXR0b24ge1xuICB3aWR0aDogNTAwcHg7XG4gIGhlaWdodDogOTBweDtcbiAgZm9udC1zaXplOiAzNnB4O1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICA6Om5nLWRlZXAgLmxvZ2luLWZvcm0gLm1haW4tYnV0dG9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgZm9udC1zaXplOiAyNnB4O1xuICB9XG59Il19 */'
          ]
        });
        /*@__PURE__*/ (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵsetClassMetadata'](
            LoginPopupComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__['Component'],
                args: [
                  {
                    selector: 'app-login-popup',
                    templateUrl: './login-popup.component.html',
                    styleUrls: ['./login-popup.component.scss']
                  }
                ]
              }
            ],
            function() {
              return [
                { type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__['AuthService'] },
                { type: _shared_services_signIn_service__WEBPACK_IMPORTED_MODULE_4__['SignInService'] },
                { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__['ToastrService'] }
              ];
            },
            {
              mode: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_1__['Input']
                }
              ],
              user: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_1__['Input']
                }
              ]
            }
          );
        })();

        /***/
      },

    /***/ './src/app/auth/login-social-button/login-social-button.component.ts':
      /*!***************************************************************************!*\
  !*** ./src/app/auth/login-social-button/login-social-button.component.ts ***!
  \***************************************************************************/
      /*! exports provided: LoginSocialButtonComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'LoginSocialButtonComponent',
          function() {
            return LoginSocialButtonComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );

        const _c0 = ['*'];
        class LoginSocialButtonComponent {
          icon() {
            switch (this.type) {
              case 'facebook':
                return '/assets/img/facebook-login-icon.png';
              case 'google':
                return '/assets/img/google-login-icon.png';
            }
          }
        }
        LoginSocialButtonComponent.ɵfac = function LoginSocialButtonComponent_Factory(t) {
          return new (t || LoginSocialButtonComponent)();
        };
        LoginSocialButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineComponent']({
          type: LoginSocialButtonComponent,
          selectors: [['app-login-social-button']],
          inputs: { type: 'type' },
          ngContentSelectors: _c0,
          decls: 6,
          vars: 3,
          consts: [
            [1, 'icon'],
            [3, 'src'],
            [1, 'divider'],
            [1, 'text']
          ],
          template: function LoginSocialButtonComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵprojectionDef']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'button');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](1, 'div', 0);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](2, 'img', 1);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](3, 'div', 2);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](4, 'div', 3);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵprojection'](5);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            }
            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵclassMap']('button ' + ctx.type);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
                'src',
                ctx.icon(),
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵsanitizeUrl']
              );
            }
          },
          styles: [
            '.button[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: stretch;\n  border-radius: 5px;\n  border: none;\n  cursor: pointer;\n}\n.button[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  flex: 0 0 55px;\n  position: relative;\n}\n.button[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.button[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%] {\n  flex: 0 0 1px;\n  background-color: rgba(0, 0, 0, 0.2);\n}\n.button[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  flex: 1;\n  color: white;\n  font-size: 16px;\n  line-height: 40px;\n  font-family: "Heebo";\n}\n@media only screen and (max-width: 768px) {\n  .button[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n}\n.button.google[_ngcontent-%COMP%] {\n  background-color: #de4b39;\n}\n.button.facebook[_ngcontent-%COMP%] {\n  background-color: #3a5a98;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbi1zb2NpYWwtYnV0dG9uL0M6XFxVc2Vyc1xcVGVoaWxhXFxsYXN0XFxvdXJCcm9cXG91ci1icm90aGVycy13ZWIvc3JjXFxhcHBcXGF1dGhcXGxvZ2luLXNvY2lhbC1idXR0b25cXGxvZ2luLXNvY2lhbC1idXR0b24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2F1dGgvbG9naW4tc29jaWFsLWJ1dHRvbi9sb2dpbi1zb2NpYWwtYnV0dG9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNDRjtBRENFO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FDQ0o7QURDSTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtBQ0NOO0FER0U7RUFDRSxhQUFBO0VBQ0Esb0NBQUE7QUNESjtBRElFO0VBQ0UsT0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQ0ZKO0FESUk7RUFQRjtJQVFJLGVBQUE7RUNESjtBQUNGO0FESUU7RUFDRSx5QkFBQTtBQ0ZKO0FES0U7RUFDRSx5QkFBQTtBQ0hKIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9sb2dpbi1zb2NpYWwtYnV0dG9uL2xvZ2luLXNvY2lhbC1idXR0b24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9uIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAuaWNvbiB7XHJcbiAgICBmbGV4OiAwIDAgNTVweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogNTAlO1xyXG4gICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmRpdmlkZXIge1xyXG4gICAgZmxleDogMCAwIDFweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICB9XHJcblxyXG4gIC50ZXh0IHtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnSGVlYm8nO1xyXG5cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5nb29nbGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMiwgNzUsIDU3KTtcclxuICB9XHJcblxyXG4gICYuZmFjZWJvb2sge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU4LCA5MCwgMTUyKTtcclxuICB9XHJcbn1cclxuIiwiLmJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5idXR0b24gLmljb24ge1xuICBmbGV4OiAwIDAgNTVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmJ1dHRvbiAuaWNvbiBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuLmJ1dHRvbiAuZGl2aWRlciB7XG4gIGZsZXg6IDAgMCAxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cbi5idXR0b24gLnRleHQge1xuICBmbGV4OiAxO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIkhlZWJvXCI7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5idXR0b24gLnRleHQge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxufVxuLmJ1dHRvbi5nb29nbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGU0YjM5O1xufVxuLmJ1dHRvbi5mYWNlYm9vayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzYTVhOTg7XG59Il19 */'
          ],
          changeDetection: 0
        });
        /*@__PURE__*/ (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            LoginSocialButtonComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                args: [
                  {
                    selector: 'app-login-social-button',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__['ChangeDetectionStrategy'].OnPush,
                    templateUrl: './login-social-button.component.html',
                    styleUrls: ['./login-social-button.component.scss']
                  }
                ]
              }
            ],
            null,
            {
              type: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input']
                }
              ]
            }
          );
        })();

        /***/
      },

    /***/ './src/app/auth/registration-form/registration-form.component.ts':
      /*!***********************************************************************!*\
  !*** ./src/app/auth/registration-form/registration-form.component.ts ***!
  \***********************************************************************/
      /*! exports provided: RegistrationFormComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'RegistrationFormComponent',
          function() {
            return RegistrationFormComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/forms */ './node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js'
        );
        /* harmony import */ var _login_social_button_login_social_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../login-social-button/login-social-button.component */ './src/app/auth/login-social-button/login-social-button.component.ts'
        );
        /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @angular/common */ './node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js'
        );

        function RegistrationFormComponent_p_17_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'p', 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
              1,
              ' \u05D0\u05D7\u05D3 \u05D0\u05D5 \u05D9\u05D5\u05EA\u05E8 \u05DE\u05D4\u05E9\u05D3\u05D5\u05EA \u05D0\u05D9\u05E0\u05DD \u05EA\u05E7\u05D9\u05E0\u05D9\u05DD '
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }
        }
        class RegistrationFormComponent {
          constructor(fb) {
            this.fb = fb;
            this.haveUser = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            this.signUpWithEmailAndPassword = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            this.signUpWithGoogle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            this.signUpWithFacebook = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            this.formInvalid = false;
          }
          ngOnInit() {
            this.form = this.fb.group(
              {
                email: [
                  '',
                  [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__['Validators'].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__['Validators'].email
                  ]
                ],
                password: [
                  '',
                  [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__['Validators'].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__['Validators'].minLength(6)
                  ]
                ],
                passwordConfirm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__['Validators'].required]
              },
              { validator: this.checkPasswords }
            );
            this.form.valueChanges.subscribe(() => {
              this.formInvalid = false;
            });
          }
          checkPasswords(group) {
            return group.get('password').value === group.get('passwordConfirm').value ? null : { notSame: true };
          }
          get email() {
            return this.form.get('email');
          }
          get password() {
            return this.form.get('password');
          }
          get passwordConfirm() {
            return this.form.get('passwordConfirm');
          }
          onSubmit() {
            if (this.form.valid) {
              const parsedForm = {
                email: this.email.value,
                password: this.password.value
              };
              this.signUpWithEmailAndPassword.emit(parsedForm);
            } else {
              this.formInvalid = true;
              this.form.markAllAsTouched();
            }
          }
        }
        RegistrationFormComponent.ɵfac = function RegistrationFormComponent_Factory(t) {
          return new (t || RegistrationFormComponent)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
              _angular_forms__WEBPACK_IMPORTED_MODULE_1__['FormBuilder']
            )
          );
        };
        RegistrationFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineComponent']({
          type: RegistrationFormComponent,
          selectors: [['app-registration-form']],
          inputs: { loading: 'loading' },
          outputs: {
            haveUser: 'haveUser',
            signUpWithEmailAndPassword: 'signUpWithEmailAndPassword',
            signUpWithGoogle: 'signUpWithGoogle',
            signUpWithFacebook: 'signUpWithFacebook'
          },
          decls: 20,
          vars: 9,
          consts: [
            [1, 'login-form'],
            [1, 'body'],
            [1, 'title'],
            [3, 'formGroup'],
            [
              'type',
              'email',
              'placeholder',
              '\u05D0\u05D9\u05DE\u05D9\u05D9\u05DC',
              'formControlName',
              'email',
              1,
              'input'
            ],
            [
              'type',
              'password',
              'placeholder',
              '\u05E1\u05D9\u05E1\u05DE\u05D0 (\u05DC\u05E4\u05D7\u05D5\u05EA 6 \u05EA\u05D5\u05D5\u05D9\u05DD)',
              'formControlName',
              'password',
              1,
              'input'
            ],
            [
              'type',
              'password',
              'placeholder',
              '\u05D0\u05D9\u05E9\u05D5\u05E8 \u05E1\u05D9\u05E1\u05DE\u05D0',
              'formControlName',
              'passwordConfirm',
              1,
              'input'
            ],
            [1, 'footer'],
            [1, 'nav-buttons'],
            [1, 'nav-button', 3, 'click'],
            [1, 'social-buttons'],
            ['type', 'facebook', 1, 'social-button', 3, 'click'],
            ['type', 'google', 1, 'social-button', 3, 'click'],
            ['class', 'form-invalid-message', 4, 'ngIf'],
            ['tabindex', '5', 1, 'site-button', 'main-button', 3, 'disabled', 'click'],
            [1, 'form-invalid-message']
          ],
          template: function RegistrationFormComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div', 0);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](1, 'div', 1);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](2, 'div', 2);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                3,
                ' \u05E4\u05E8\u05D8\u05D9 \u05DE\u05E9\u05EA\u05DE\u05E9 '
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementContainerStart'](4, 3);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](5, 'input', 4);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](6, 'input', 5);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](7, 'input', 6);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementContainerEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](8, 'div', 7);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](9, 'div', 8);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](10, 'button', 9);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'click',
                function RegistrationFormComponent_Template_button_click_10_listener() {
                  return ctx.haveUser.emit();
                }
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                11,
                ' \u05D9\u05E9 \u05DC\u05D9 \u05DB\u05D1\u05E8 \u05DE\u05E9\u05EA\u05DE\u05E9 '
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](12, 'div', 10);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](13, 'app-login-social-button', 11);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'click',
                function RegistrationFormComponent_Template_app_login_social_button_click_13_listener() {
                  return ctx.signUpWithFacebook.emit();
                }
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                14,
                ' \u05D4\u05E8\u05E9\u05DD \u05E2\u05DD \u05E4\u05D9\u05D9\u05E1\u05D1\u05D5\u05E7 '
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](15, 'app-login-social-button', 12);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'click',
                function RegistrationFormComponent_Template_app_login_social_button_click_15_listener() {
                  return ctx.signUpWithGoogle.emit();
                }
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                16,
                ' \u05D4\u05E8\u05E9\u05DD \u05E2\u05DD \u05D2\u05D5\u05D2\u05DC '
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                17,
                RegistrationFormComponent_p_17_Template,
                2,
                0,
                'p',
                13
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](18, 'button', 14);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'click',
                function RegistrationFormComponent_Template_button_click_18_listener() {
                  return ctx.onSubmit();
                }
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](19, ' \u05D4\u05E8\u05E9\u05DD ');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            }
            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](4);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('formGroup', ctx.form);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵclassProp'](
                'invalid',
                !ctx.email.valid && ctx.email.touched
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵclassProp'](
                'invalid',
                !ctx.password.valid && ctx.password.touched
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵclassProp'](
                'invalid',
                (!ctx.password.valid || ctx.form.hasError('notSame')) && ctx.password.touched
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](10);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngIf', ctx.formInvalid);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('disabled', ctx.loading);
            }
          },
          directives: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__['NgControlStatusGroup'],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__['FormGroupDirective'],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__['DefaultValueAccessor'],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__['NgControlStatus'],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__['FormControlName'],
            _login_social_button_login_social_button_component__WEBPACK_IMPORTED_MODULE_2__[
              'LoginSocialButtonComponent'
            ],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__['NgIf']
          ],
          styles: [
            '\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvcmVnaXN0cmF0aW9uLWZvcm0vcmVnaXN0cmF0aW9uLWZvcm0uY29tcG9uZW50LnNjc3MifQ== */'
          ]
        });
        /*@__PURE__*/ (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            RegistrationFormComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                args: [
                  {
                    selector: 'app-registration-form',
                    templateUrl: './registration-form.component.html',
                    styleUrls: ['./registration-form.component.scss']
                  }
                ]
              }
            ],
            function() {
              return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__['FormBuilder'] }];
            },
            {
              loading: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input']
                }
              ],
              haveUser: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Output']
                }
              ],
              signUpWithEmailAndPassword: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Output']
                }
              ],
              signUpWithGoogle: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Output']
                }
              ],
              signUpWithFacebook: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Output']
                }
              ]
            }
          );
        })();

        /***/
      },

    /***/ './src/app/guards/role-based.guard.ts':
      /*!********************************************!*\
  !*** ./src/app/guards/role-based.guard.ts ***!
  \********************************************/
      /*! exports provided: RoleBasedGuard */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'RoleBasedGuard', function() {
          return RoleBasedGuard;
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! rxjs/operators */ './node_modules/rxjs/_esm2015/operators/index.js'
        );
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/router */ './node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js'
        );
        /* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../shared/services/auth.service */ './src/app/shared/services/auth.service.ts'
        );
        /* harmony import */ var _shared_services_participations_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../shared/services/participations.service */ './src/app/shared/services/participations.service.ts'
        );

        class RoleBasedGuard {
          constructor(router, authService, participationsService) {
            this.router = router;
            this.authService = authService;
            this.participationsService = participationsService;
            this.roleToMethod = {
              host: this.participationsService.isUserCanHost,
              tell: this.participationsService.isUserCanTell,
              participate: this.participationsService.isUserCanParticipate
            };
          }
          canActivate(next, state) {
            const validate = this.roleToMethod[next.data.role];
            return this.authService.user.pipe(
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__['take'])(1),
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__['map'])(user => {
                return validate(user) ? true : this.router.parseUrl('home');
              })
            );
          }
        }
        RoleBasedGuard.ɵfac = function RoleBasedGuard_Factory(t) {
          return new (t || RoleBasedGuard)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵinject'](
              _angular_router__WEBPACK_IMPORTED_MODULE_2__['Router']
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵinject'](
              _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__['AuthService']
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵinject'](
              _shared_services_participations_service__WEBPACK_IMPORTED_MODULE_4__['ParticipationsService']
            )
          );
        };
        RoleBasedGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineInjectable']({
          token: RoleBasedGuard,
          factory: RoleBasedGuard.ɵfac,
          providedIn: 'root'
        });
        /*@__PURE__*/ (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            RoleBasedGuard,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Injectable'],
                args: [
                  {
                    providedIn: 'root'
                  }
                ]
              }
            ],
            function() {
              return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__['Router'] },
                { type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__['AuthService'] },
                { type: _shared_services_participations_service__WEBPACK_IMPORTED_MODULE_4__['ParticipationsService'] }
              ];
            },
            null
          );
        })();

        /***/
      },

    /***/ './src/app/home/home-page.component.ts':
      /*!*********************************************!*\
  !*** ./src/app/home/home-page.component.ts ***!
  \*********************************************/
      /*! exports provided: HomePageComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'HomePageComponent', function() {
          return HomePageComponent;
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! rxjs */ './node_modules/rxjs/_esm2015/index.js'
        );
        /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! rxjs/operators */ './node_modules/rxjs/_esm2015/operators/index.js'
        );
        /* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../shared/services/auth.service */ './src/app/shared/services/auth.service.ts'
        );
        /* harmony import */ var _shared_services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../shared/services/data.service */ './src/app/shared/services/data.service.ts'
        );
        /* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ngx-toastr */ './node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js'
        );
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! @angular/router */ './node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js'
        );
        /* harmony import */ var _shared_components_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../shared/components/contact-form/contact-form.component */ './src/app/shared/components/contact-form/contact-form.component.ts'
        );
        /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! @angular/common */ './node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js'
        );

        class HomePageComponent {
          constructor(authService, dataService, toastr) {
            this.authService = authService;
            this.dataService = dataService;
            this.toastr = toastr;
            this.videoMuted = true;
            this.loadingUser = true;
            this.postingContact = false;
          }
          ngOnInit() {
            this.authService.user.subscribe(user => {
              this.user = user;
              this.loadingUser = false;
            });
            this.src1$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__['of'])(
              '../../assets/img/home-page/h-p-1.jpg',
              '../../assets/img/home-page/h-p-2.JPG',
              '../../assets/img/home-page/h-p-3.JPG',
              '../../assets/img/home-page/h-p-4.JPG',
              '../../assets/img/home-page/h-p-5.jpeg',
              '../../assets/img/home-page/h-p-6.jpg'
            ).pipe(
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['concatMap'])(url =>
                Object(rxjs__WEBPACK_IMPORTED_MODULE_1__['of'])(url).pipe(
                  Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['delay'])(5000)
                )
              ),
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['repeat'])()
            );
            this.src2$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__['of'])(
              '../../assets/img/home-page/h-p-7.jpg',
              '../../assets/img/home-page/h-p-8.jpg',
              '../../assets/img/home-page/h-p-9.jpg',
              '../../assets/img/home-page/h-p-10.jpeg',
              '../../assets/img/home-page/h-p-11.jpeg',
              '../../assets/img/home-page/h-p-12.jpg'
            ).pipe(
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['concatMap'])(url =>
                Object(rxjs__WEBPACK_IMPORTED_MODULE_1__['of'])(url).pipe(
                  Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['delay'])(5000)
                )
              ),
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['repeat'])()
            );
          }
          onContactSubmit(form) {
            const parsedContact = Object.assign(Object.assign({}, form), { date: Date.now() });
            this.postingContact = true;
            this.dataService
              .postContact(parsedContact, this.user)
              .then(() => this.toastr.success('שליחת הודעה בוצעה בהצלחה'))
              .catch(() => this.toastr.error('שליחת הודעה נכשלה'))
              .finally(() => (this.postingContact = false));
          }
        }
        HomePageComponent.ɵfac = function HomePageComponent_Factory(t) {
          return new (t || HomePageComponent)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
              _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__['AuthService']
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
              _shared_services_data_service__WEBPACK_IMPORTED_MODULE_4__['DataService']
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
              ngx_toastr__WEBPACK_IMPORTED_MODULE_5__['ToastrService']
            )
          );
        };
        HomePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineComponent']({
          type: HomePageComponent,
          selectors: [['app-home-page']],
          decls: 164,
          vars: 8,
          consts: [
            [1, 'home-page-first'],
            [1, 'home-page-title-1'],
            [1, 'home-page-image'],
            [
              'alt',
              'Metting Gallery Image 1',
              'data-aos',
              'fade-right',
              'data-aos-duration',
              '1000',
              1,
              'image',
              'image-1'
            ],
            [
              'alt',
              'Metting Gallery Image 1',
              'data-aos',
              'fade-right',
              'data-aos-duration',
              '1000',
              1,
              'image',
              'image-2'
            ],
            [1, 'home-page-title-2'],
            ['data-aos', 'zoom-in', 'data-aos-duration', '1000', 1, 'medium-heading', 'home-page-title'],
            [1, 'home-page-connect'],
            [1, 'home-page-life'],
            ['data-aos', 'fade-down', 'data-aos-duration', '1000'],
            [1, 'home-page-text'],
            [1, 'home-page-bold'],
            [
              'href',
              'http://bit.ly/volunteerOurBrothers',
              1,
              'action-header-support-us',
              'site-button',
              'home-page-donate',
              2,
              'margin-right',
              '6%'
            ],
            [1, 'home-page-buttons'],
            [1, 'home-page-pass-1'],
            [1, 'home-page-square-1'],
            [
              'width',
              '85px',
              'height',
              '20px',
              'viewBox',
              '0 0 85 20',
              'version',
              '1.1',
              'xmlns',
              'http://www.w3.org/2000/svg',
              0,
              'xmlns',
              'xlink',
              'http://www.w3.org/1999/xlink',
              1,
              'logo-home-page-meeting-1'
            ],
            ['id', 'Styleguide', 'stroke', 'none', 'stroke-width', '1', 'fill', 'none', 'fill-rule', 'evenodd'],
            ['id', 'Icons', 'transform', 'translate(-353.000000, -171.000000)', 'fill', '#ffffff'],
            ['id', 'Group-10', 'transform', 'translate(353.221608, 171.968664)'],
            [
              'd',
              'M57.3060402,9.44904262 C57.3060402,6.67192787 57.3032369,3.89465738 \n                57.3075975,1.11754262 C57.3091549,0.194018033 57.4091385,0.0895180328 \n                58.2977779,0.333714754 C58.916368,0.50362459 59.4871467,0.843444262\n                 60.1034008,1.02565738 C60.4572369,1.13031311 60.9256959,1.21067377 \n                 61.2295402,1.06552623 C64.2148762,-0.360096721 66.9966631,-0.122129508\n                  69.5948352,1.9608623 C70.4699254,2.66246066 70.4459418,2.62897705\n                   71.2953352,1.91865738 C75.8137533,-1.8601623 81.9495074,0.924739344 \n                   83.2117615,5.65932131 C83.3104992,6.02950984 83.3291877,6.42928852\n                    83.3307451,6.81551803 C83.3472533,10.6038377 83.3351057,14.3924689 \n                    83.3757261,18.180477 C83.3829172,18.8749115 83.0773598,18.9762967\n                     82.524491,18.9147803 C80.89345,18.7338131 79.8071795,17.5081574\n                      79.7738516,15.6827557 C79.7293107,13.2437475 79.7548516,10.8033377\n                       79.7366303,8.36370656 C79.7333598,7.89898525 79.7138926,7.42538689 79.623409,6.97156721 C79.2172451,4.93545246 77.7187369,3.84793607 75.5505566,3.98249344 C73.8257615,4.08964098 72.3728844,5.58752623 72.2934582,7.4746 C72.2182369,9.26278033 72.2524992,11.055477 72.2476713,12.8463049 C72.2431549,14.5852721 72.2325648,16.3245508 72.2610648,18.0633623 C72.2727451,18.7644934 71.9689008,18.9833049 71.3127779,18.9188295 C69.7066549,18.7607557 68.5568434,17.5537885 68.5359746,15.8944033 C68.5037369,13.3253541 68.5379992,10.7552148 68.4934582,8.18632131 C68.4746139,7.08977213 68.2716877,6.02655082 67.4674582,5.16407541 C66.3962943,4.0153541 65.082491,3.67989508 63.6375566,4.1248377 C62.0096303,4.62646885 61.1102451,5.88327213 61.0786303,7.56181311 C61.0339336,9.92295246 61.0526221,12.2853377 61.0337779,14.6471 C61.0294172,15.1647721 60.9862779,15.6824443 60.9527943,16.1998049 C60.8444008,17.8760098 59.5726467,18.6324279 58.3477697,18.8711738 C57.5218926,19.0322066 57.3082205,18.858559 57.3058844,18.0143049 C57.298409,15.1591656 57.3029254,12.304182 57.3029254,9.44904262 L57.3060402,9.44904262 Z',
              'id',
              'Fill-1'
            ],
            [
              'd',
              'M11.7912443,4.02317213 C11.4872443,4.00884426\n                 11.1832443,3.98252459 10.8792443,3.98221311 C8.38744098,\n                 3.97894262 5.89548197,3.99856557 3.40399016,3.97458197 \n                 C1.69118689,3.95791803 0.442014754,3.01212295 0.100793443,1.54912295\n                  C-0.151034426,0.470639344 0.0283754098,0.235942623 1.10670328,0.235786885 \n                  C5.36332623,0.23547541 9.62010492,0.230959016 13.8767279,0.241237705 \n                  C14.4186951,0.242483607 14.9724984,0.263508197 15.5001377,0.373770492\n                   C16.9850967,0.684467213 17.9871131,2.13531967 17.7265639,3.62012295 C17.6703426,3.94140984 17.4115066,4.26487705 17.1679328,4.50969672 C13.9113016,7.78517213 10.6403426,11.0466311 7.37499016,14.3132295 C7.17891639,14.509459 6.99872787,14.721418 6.67775246,15.0713607 C7.13437541,15.127582 7.41906393,15.1917459 7.70406393,15.1929918 C9.98811311,15.2023361 12.272318,15.186918 14.5562115,15.2096557 C15.201277,15.216041 15.8524164,15.2831639 16.4884492,15.3940492 C17.7927525,15.6214262 18.8145475,17.083959 18.6726705,18.3999426 C18.6164492,18.921041 18.2926705,18.9403525 17.9072197,18.9406639 C15.7787525,18.9420656 13.650441,18.9500082 11.5221295,18.948918 C9.05649016,18.9476721 6.59022787,18.9638689 4.12505574,18.9261803 C2.27099836,18.8979918 1.02322787,17.7274672 0.97432623,15.9604672 C0.962645902,15.5421557 1.12819508,14.9990984 1.41241639,14.7108279 C3.87151475,12.2187131 6.38122787,9.77659016 8.86524426,7.3092377 C9.88657213,6.2947623 10.8822033,5.25443443 11.8895148,4.22594262 C11.8568098,4.15835246 11.8239492,4.0907623 11.7912443,4.02317213',
              'id',
              'Fill-3'
            ],
            [
              'd',
              'M27.1872246,3.97039262 C24.1550115,3.77307295 21.5471836,\n                6.37467131 21.5251145,9.70107295 C21.5056016,12.6658516 24.1117164,15.1645074 \n                27.156077,15.1844418 C30.3203557,15.2051549 32.8992164,12.6066713\n                 32.8148066,9.33290902 C32.7412984,6.48929426 30.2456016,3.79300738 \n                 27.1872246,3.97039262 M27.147823,0.235179508 C32.318159,0.195622131 \n                 36.4456754,4.25959754 36.564659,9.44488443 C36.6831754,14.6124172 \n                 32.3667492,18.9244828 27.2537246,18.9374396 C22.1055033,18.9506467 \n                 17.7074705,14.6694172 17.7872082,9.58317951 C17.8713066,4.20446639 \n                 22.1431918,0.184253279 27.147823,0.235179508',
              'id',
              'Fill-6'
            ],
            [
              'd',
              'M46.8174795,3.97190328 C43.5580451,4.00850164 41.2352172,6.44673115 \n                41.2722828,9.79213279 C41.3046762,12.7196902 43.9118811,15.2118049 46.9173074\n                ,15.1881328 C50.0728648,15.163059 52.527291,12.6260918 52.4930287,9.42474754 \n                C52.4597008,6.30547705 49.99375,3.93623934 46.8174795,3.97190328 \n                M56.2324467,9.45573934 C56.2117336,14.8179443 52.0753402,18.9615016 \n                46.7657746,18.9390115 C41.7139549,18.9172721 37.5129303,14.6318377 \n                37.5278414,9.51569836 C37.5426762,4.40096066 41.7502418,0.255534426\n                 46.8651352,0.228611305 C52.2028893,0.200714754 56.203168,4.50281311\n                  56.2324467,9.45573934',
              'id',
              'Fill-8'
            ],
            ['src', '../../assets/svg/a.svg', 1, 'home-page-logo-connect2care'],
            [1, 'aaa'],
            [1, 'action-buttons', 'meeting-button-1'],
            ['href', 'https://connect2care.carmel6000.com/', 1, 'action-header-support-us', 'site-button'],
            [1, 'home-page-square-2'],
            [
              'width',
              '38px',
              'height',
              '54px',
              'viewBox',
              '0 0 38 54',
              'version',
              '1.1',
              'xmlns',
              'http://www.w3.org/2000/svg',
              0,
              'xmlns',
              'xlink',
              'http://www.w3.org/1999/xlink',
              1,
              'logo-home-page-meeting-2'
            ],
            ['id', 'Icons', 'transform', 'translate(-68.000000, -147.000000)'],
            ['id', 'Group-8', 'transform', 'translate(68.575096, 147.358781)'],
            [
              'd',
              'M22.7382248,21.6474247 C26.1900045,21.6474247 \n                29.3150045,23.0465349 31.5770595,25.3085899 C33.8391146,\n                27.570645 35.2382248,30.695645 35.2382248,34.1474247 L35.2382248,\n                34.1474247 L35.2382248,50.8309851 L1.5,50.8309851 L1.5,34.1474247 \n                C1.5,30.695645 2.89911016,27.570645 5.16116524,25.3085899 C7.42322031,\n                23.0465349 10.5482203,21.6474247 14,21.6474247 L14,21.6474247 Z',
              'id',
              'Rectangle',
              'stroke',
              '#ffffff',
              'stroke-width',
              '3'
            ],
            [
              'id',
              'Oval',
              'stroke',
              '#ffffff',
              'stroke-width',
              '3',
              'cx',
              '18.3691124',
              'cy',
              '10.9742106',
              'r',
              '9.47421059'
            ],
            ['id', 'Group', 'transform', 'translate(19.509578, 28.288414)', 'fill', '#ffffff'],
            ['transform', 'translate(0.014003, -0.002921)', 'id', 'Path'],
            ['transform', 'translate(0.068594, 0.002921)'],
            [
              'd',
              'M3.42281254,0.351398275 C1.86323567,0.351398275 0.816199463,1.61377246 0.816199463,3.1727075 C0.816199463,4.94167935 3.28760549,7.05523915 5.40550996,8.46662461 C7.52340705,7.05523915 9.96624003,4.9075954 9.99482038,3.1727075 C10.020494,1.61399379 9.01118483,0.351398275 7.45160722,0.351398275 C6.78625476,0.351398275 6.11147566,0.703373139 5.40550996,1.40902898 C4.69953689,0.703373139 4.08816522,0.351398275 3.42281254,0.351398275 Z'
            ],
            ['src', '../../assets/img/ourbrotherpng.png', 1, 'home-page-logo-our-brother'],
            ['routerLink', 'meetings', 1, 'aaa'],
            [1, 'action-buttons', 'meeting-button-2'],
            ['routerLink', '/meetings', 1, 'action-header-support-us', 'site-button', 'color-button'],
            [1, 'home-page-pass-2'],
            [1, 'site-quote'],
            ['data-aos', 'fade-up', 'data-aos-duration', '1000', 1, 'site-quote-text'],
            [1, 'home-page-toolbox-1'],
            [1, 'home-page-toolbox-2'],
            [1, 'home-page-toolbox-icons'],
            [
              'width',
              '61px',
              'height',
              '49px',
              'viewBox',
              '0 0 61 49',
              'version',
              '1.1',
              'xmlns',
              'http://www.w3.org/2000/svg',
              0,
              'xmlns',
              'xlink',
              'http://www.w3.org/1999/xlink',
              1,
              'group_5'
            ],
            ['id', 'Icons', 'transform', 'translate(-151.000000, -70.000000)', 'fill-rule', 'nonzero'],
            ['id', 'Group-5', 'transform', 'translate(151.942636, 70.690852)'],
            ['id', 'noun_Computer_3529589', 'transform', 'translate(0.000000, -0.000000)', 'fill', '#082551'],
            [
              'd',
              'M53.6116959,0 L5.23040936,0 C2.35368421,0 0,2.18947368 0,4.86549708 L0,34.0584795 L0,37.0994152 C0,39.471345 2.02678363,41.3567251 4.57660819,41.3567251 L22.8830409,41.3567251 L22.8830409,45.005848 L17.6526316,45.005848 C16.9334503,45.005848 16.3450292,45.5532164 16.3450292,46.2222222 C16.3450292,46.8912281 16.9334503,47.4385965 17.6526316,47.4385965 L41.1894737,47.4385965 C41.908655,47.4385965 42.497076,46.8912281 42.497076,46.2222222 C42.497076,45.5532164 41.908655,45.005848 41.1894737,45.005848 L35.9590643,45.005848 L35.9590643,41.3567251 L54.2654971,41.3567251 C56.8153216,41.3567251 58.8421053,39.471345 58.8421053,37.0994152 L58.8421053,34.0584795 L58.8421053,4.86549708 C58.8421053,2.18947368 56.4884211,0 53.6116959,0 Z M2.61520468,4.86549708 C2.61520468,3.52748538 3.79204678,2.43274854 5.23040936,2.43274854 L53.6116959,2.43274854 C55.0500585,2.43274854 56.2269006,3.52748538 56.2269006,4.86549708 L56.2269006,32.8421053 L2.61520468,32.8421053 L2.61520468,4.86549708 Z M33.3438596,45.005848 L25.4982456,45.005848 L25.4982456,41.3567251 L33.3438596,41.3567251 L33.3438596,45.005848 Z M56.2269006,37.0994152 C56.2269006,38.1333333 55.3769591,38.9239766 54.2654971,38.9239766 L4.57660819,38.9239766 C3.4651462,38.9239766 2.61520468,38.1333333 2.61520468,37.0994152 L2.61520468,35.2748538 L56.2269006,35.2748538 L56.2269006,37.0994152 Z',
              'id',
              'Shape'
            ],
            [
              'd',
              'M20.7351579,19.281121 C20.0901313,19.281121 19.5589329,18.7499227 19.5589329,18.1048961 C19.5589329,17.4598695 20.0901313,16.9286711 20.7351579,16.9286711 L34.7486766,16.9286711 L30.9544026,13.1343971 C30.4990897,12.6790842 30.4990897,11.9202294 30.9544026,11.4649165 C31.4097155,11.0096037 32.1685703,11.0096037 32.6238831,11.4649165 L38.4291224,17.2701558 C38.6567789,17.4978123 38.7706071,17.8013542 38.7706071,18.1048961 C38.7706071,18.408438 38.6567789,18.7119799 38.4291224,18.9396364 L32.6238831,24.7448756 C32.3962267,24.9725321 32.0926848,25.0863603 31.7891429,25.0863603 C31.4856009,25.0863603 31.182059,24.9725321 30.9544026,24.7448756 C30.4990897,24.2895628 30.4990897,23.530708 30.9544026,23.0753951 L34.7486766,19.281121 L20.7351579,19.281121 Z',
              'id',
              'Shape',
              'fill',
              '#16B3AB',
              'transform',
              'translate(29.164770, 18.104896) rotate(-90.000000) translate(-29.164770, -18.104896) '
            ],
            [
              'width',
              '59px',
              'height',
              '47px',
              'viewBox',
              '0 0 59 47',
              'version',
              '1.1',
              'xmlns',
              'http://www.w3.org/2000/svg',
              0,
              'xmlns',
              'xlink',
              'http://www.w3.org/1999/xlink',
              1,
              'group_16'
            ],
            ['id', 'Icons', 'transform', 'translate(-533.000000, -247.000000)'],
            ['id', 'Group-16', 'transform', 'translate(533.913103, 247.391213)'],
            [
              'd',
              'M54.7825147,8.785875 L38.4675218,8.785875 C37.9607866,3.85831166 33.791982,0 28.7333664,0 C23.6747509,0 19.4992257,3.8576396 18.9931625,8.785875 L2.68421822,8.785875 C1.20433627,8.785875 -1.42108547e-14,9.99021126 -1.42108547e-14,11.4700932 L-1.42108547e-14,43.3157818 C-1.42108547e-14,44.7956637 1.20433627,46 2.68421822,46 L54.7825147,46 C56.2623966,46 57.4667329,44.7956637 57.4667329,43.3157818 L57.4667329,11.4700932 C57.4667329,9.99021126 56.2623966,8.785875 54.7825147,8.785875 Z M28.7333664,2.01618794 C32.6797183,2.01618794 35.948631,4.97124741 36.4446133,8.78520293 L21.0221196,8.78520293 C21.5181019,4.97191947 24.7870146,2.01618794 28.7333664,2.01618794 Z M2.68421822,10.8020629 L19.9495076,10.8020629 L37.5172253,10.8020629 L37.5306665,10.8020629 L54.7825147,10.8020629 C55.150805,10.8020629 55.450545,11.1018029 55.450545,11.4700932 L55.450545,16.767291 L32.1387079,23.7278438 C31.6857377,22.882389 30.8046635,22.2990387 29.7804401,22.2990387 L27.6856208,22.2990387 C26.6607252,22.2990387 25.7776349,22.8837332 25.3253368,23.7312042 L2.01618794,16.8620518 L2.01618794,11.4700932 C2.01618794,11.1018029 2.31592788,10.8020629 2.68421822,10.8020629 Z M30.4491424,24.9832569 L30.4491424,29.8019461 C30.4491424,30.1702364 30.1494024,30.4699763 29.7811121,30.4699763 L27.6862928,30.4699763 C27.3180025,30.4699763 27.0182626,30.1702364 27.0182626,29.8019461 L27.0182626,24.9832569 C27.0182626,24.6149665 27.3180025,24.3152266 27.6862928,24.3152266 L29.7811121,24.3152266 C30.1487304,24.3152266 30.4491424,24.6149665 30.4491424,24.9832569 Z M54.7825147,43.9838121 L2.68421822,43.9838121 C2.31592788,43.9838121 2.01618794,43.6840721 2.01618794,43.3157818 L2.01618794,18.9635917 L25.0014026,25.7366391 L25.0014026,29.8019461 C25.0014026,31.281828 26.2057388,32.4861643 27.6856208,32.4861643 L29.7804401,32.4861643 C31.260322,32.4861643 32.4646583,31.281828 32.4646583,29.8019461 L32.4646583,25.7339509 L55.449874,18.8715192 L55.449874,43.3151097 C55.450545,43.6834001 55.150805,43.9838121 54.7825147,43.9838121 Z',
              'id',
              'Shape',
              'fill',
              '#082551',
              'fill-rule',
              'nonzero'
            ],
            [
              'id',
              'Line-2',
              'stroke',
              '#16B3AB',
              'stroke-width',
              '2',
              'stroke-linecap',
              'round',
              'points',
              '4.39931031 32.7409818 4.39931031 41.7409818 19.5221196 41.7409818'
            ],
            [
              'routerLink',
              '/questions',
              'width',
              '67px',
              'height',
              '60px',
              'viewBox',
              '0 0 67 60',
              'version',
              '1.1',
              'xmlns',
              'http://www.w3.org/2000/svg',
              0,
              'xmlns',
              'xlink',
              'http://www.w3.org/1999/xlink',
              1,
              'group_21'
            ],
            ['id', 'Icons', 'transform', 'translate(-411.000000, -311.000000)', 'fill-rule', 'nonzero'],
            ['id', 'Group-21', 'transform', 'translate(411.251041, 311.182511)'],
            [
              'd',
              'M60.7215672,0.35 L60.9370599,0.354601105 C63.580868,0.467709356 65.6947761,2.65191471 65.6947761,5.32320896 L65.6947761,5.32320896 L65.6947761,25.3039552 L65.6898127,25.5270513 C65.5776996,28.042313 63.5796522,30.0961478 61.0548905,30.2647329 L61.0548905,30.2647329 L60.728209,30.2865463 L60.728209,37.2536567 L60.7213665,37.3816694 C60.6760615,37.8036285 60.4089017,38.1732822 60.0132955,38.3463599 C59.8597294,38.4111673 59.6989372,38.4447015 59.5371642,38.4447015 C59.2386111,38.4447015 58.9482389,38.331779 58.7288901,38.1257241 L58.7288901,38.1257241 L50.2608931,30.2727612 L43.133,30.272 L43.133,27.89 L50.726791,27.8906716 L50.8549309,27.8976158 C51.1090614,27.9252492 51.3482332,28.0344944 51.5353221,28.2098903 L51.5353221,28.2098903 L58.3461194,34.5242249 L58.3461194,29.0817164 L58.3522831,28.9601564 C58.4134166,28.3605071 58.9217175,27.8906716 59.5371642,27.8906716 L59.5371642,27.8906716 L60.7215672,27.8906716 L60.8852965,27.8855754 C62.2389354,27.8010616 63.3126866,26.6759966 63.3126866,25.3039552 L63.3126866,25.3039552 L63.3126866,5.32320896 L63.3075867,5.15939553 C63.2230118,3.80511187 62.0970849,2.73208955 60.7215672,2.73208955 L60.7215672,2.73208955 L29.6805224,2.73208955 L29.5171137,2.73719275 C28.1661002,2.82182266 27.093806,3.94844916 27.093806,5.32320896 L27.093806,5.32320896 L27.093806,20.4949776 L36.3620522,20.4949776 L36.5774192,20.4995807 C39.2197484,20.6127362 41.3348209,22.7978169 41.3348209,25.467306 L41.3348209,25.467306 L41.3348209,45.446291 L41.3302171,45.6616511 C41.2170442,48.3038993 39.0316316,50.4190597 36.3620522,50.4190597 L36.3620522,50.4190597 L15.7834537,50.4190597 L7.31666374,58.2700345 L7.21779134,58.3523789 C7.01237785,58.5054209 6.76298919,58.5879179 6.50629104,58.5879179 C6.34369743,58.5879179 6.18185021,58.5544263 6.02981552,58.4883536 C5.59608971,58.2990229 5.31568657,57.8706506 5.31568657,57.3968731 L5.31568657,57.3968731 L5.31568657,50.4296622 L4.98889819,50.4079422 L4.76756316,50.3882795 C2.27537844,50.1107832 0.35,47.9890667 0.35,45.446291 L0.35,45.446291 L0.35,25.467306 L0.354603898,25.251975 C0.467780007,22.6100777 2.65325129,20.4949776 5.32276866,20.4949776 L5.32276866,20.4949776 L24.7117164,20.4949776 L24.7117164,5.32320896 L24.7163162,5.10776388 C24.8293901,2.46451214 27.0128953,0.35 29.6805224,0.35 L29.6805224,0.35 L60.7215672,0.35 Z M36.3620522,22.8770672 L5.32276866,22.8770672 L5.15913835,22.882171 C3.80627527,22.9668104 2.73208955,24.0935418 2.73208955,25.467306 L2.73208955,25.467306 L2.73208955,45.446291 L2.737195,45.6099147 C2.8218614,46.9627266 3.94894435,48.0369701 5.32276866,48.0369701 L5.32276866,48.0369701 L6.50673134,48.0369701 L6.628509,48.0431194 C7.22910163,48.1041126 7.69777612,48.6113299 7.69777612,49.2280149 L7.69777612,49.2280149 L7.69777612,54.6679588 L14.5062873,48.3548574 L14.6048301,48.2728344 C14.8096101,48.1202204 15.0585825,48.0369701 15.3162239,48.0369701 L15.3162239,48.0369701 L36.3620522,48.0369701 L36.5256759,48.0318647 C37.8784878,47.9471983 38.9527313,46.8201153 38.9527313,45.446291 L38.9527313,45.446291 L38.9527313,25.467306 L38.9476256,25.3037228 C38.8629537,23.9512379 37.7358008,22.8770672 36.3620522,22.8770672 L36.3620522,22.8770672 Z',
              'id',
              'Combined-Shape',
              'fill',
              '#082551'
            ],
            [
              'd',
              'M48.8995522,9.81073134 L35.3788657,9.81073134 C34.7708134,9.81073134 34.2781194,10.3034254 34.2781194,10.9114776 C34.2781194,11.5195299 34.7708134,12.0122239 35.3788657,12.0122239 L48.8995522,12.0122239 C49.5076045,12.0122239 50.0002985,11.5195299 50.0002985,10.9114776 C50.0002985,10.3034254 49.5071642,9.81073134 48.8995522,9.81073134 Z',
              'id',
              'Path',
              'fill',
              '#16B3AB'
            ],
            [
              'd',
              'M35.3788657,16.4134478 L43.6181716,16.4134478 C44.2262239,16.4134478 44.7189179,15.9207537 44.7189179,15.3127015 C44.7189179,14.7046493 44.2262239,14.2119552 43.6181716,14.2119552 L35.3788657,14.2119552 C34.7708134,14.2119552 34.2781194,14.7046493 34.2781194,15.3127015 C34.2781194,15.9207537 34.7708134,16.4134478 35.3788657,16.4134478 Z',
              'id',
              'Path',
              'fill',
              '#16B3AB'
            ],
            [
              'd',
              'M55.026306,12.0122239 C55.6343582,12.0122239 56.1270522,11.5195299 56.1270522,10.9114776 C56.1270522,10.3034254 55.6343582,9.81073134 55.026306,9.81073134 L52.4382313,9.81073134 C51.8301791,9.81073134 51.3374851,10.3034254 51.3374851,10.9114776 C51.3374851,11.5195299 51.8301791,12.0122239 52.4382313,12.0122239 L55.026306,12.0122239 Z',
              'id',
              'Path',
              'fill',
              '#16B3AB'
            ],
            [
              'd',
              'M46.4783507,15.3127015 C46.4783507,15.9207537 46.9710448,16.4134478 47.579097,16.4134478 L55.026306,16.4134478 C55.6343582,16.4134478 56.1270522,15.9207537 56.1270522,15.3127015 C56.1270522,14.7046493 55.6343582,14.2119552 55.026306,14.2119552 L47.579097,14.2119552 C46.9710448,14.2119552 46.4783507,14.7046493 46.4783507,15.3127015 Z',
              'id',
              'Path',
              'fill',
              '#16B3AB'
            ],
            [
              'd',
              'M21.0506716,26.7278806 L20.6341493,26.7278806 C17.9214701,26.7278806 15.714694,28.935097 15.714694,31.6477761 L15.714694,32.2699179 C15.714694,32.8779701 16.2073881,33.3706642 16.8154403,33.3706642 C17.4234925,33.3706642 17.9161866,32.8779701 17.9161866,32.2699179 L17.9161866,31.6477761 C17.9161866,30.149 19.1358134,28.9293731 20.6341493,28.9293731 L21.0506716,28.9293731 C22.5494478,28.9293731 23.7690746,30.149 23.7690746,31.6477761 C23.7690746,32.3989254 23.4538209,33.124097 22.9038881,33.6361642 L21.3073657,35.1243731 C20.312291,36.0516418 19.7416642,37.3637313 19.7416642,38.7233731 L19.7416642,39.3230597 C19.7416642,39.9311119 20.2343582,40.423806 20.8424104,40.423806 C21.4504627,40.423806 21.9431567,39.9311119 21.9431567,39.3230597 L21.9431567,38.7233731 C21.9431567,37.9722239 22.2584104,37.2470522 22.8083433,36.7349851 L24.4048657,35.2467761 C25.3999403,34.3199478 25.9705672,33.0078582 25.9705672,31.6477761 C25.9705672,28.935097 23.7633507,26.7278806 21.0506716,26.7278806 Z',
              'id',
              'Path',
              'fill',
              '#16B3AB'
            ],
            [
              'd',
              'M21.8608209,42.6120896 C21.83,42.5464851 21.7991791,42.484403 21.7595522,42.4227612 C21.7155224,42.3611194 21.6714925,42.3082836 21.6230597,42.2554478 C21.5702239,42.2070149 21.5129851,42.1581418 21.4513433,42.1185149 C21.3941045,42.0788881 21.3280597,42.0436642 21.2620149,42.0176866 C21.1959701,41.9908284 21.1299254,41.9692537 21.0594776,41.9556045 C20.9141791,41.9252239 20.7688806,41.9252239 20.6279851,41.9556045 C20.5575373,41.9688134 20.4870896,41.9908284 20.4210448,42.0176866 C20.355,42.0441045 20.2889552,42.0793284 20.2317164,42.1185149 C20.1700746,42.1581418 20.1128358,42.2065746 20.064403,42.2554478 C19.8574627,42.4623881 19.7429851,42.7437388 19.7429851,43.0347761 C19.7429851,43.3258134 19.8574627,43.6071642 20.064403,43.8145448 C20.1128358,43.8625373 20.1700746,43.9114104 20.2317164,43.9510373 C20.2889552,43.9906642 20.355,44.0214851 20.4210448,44.052306 C20.4870896,44.0787239 20.5575373,44.1002985 20.6279851,44.1139478 C20.6984328,44.1271567 20.7688806,44.1359627 20.8437313,44.1359627 C21.1299254,44.1359627 21.4161194,44.0170821 21.6230597,43.8149851 C21.825597,43.6076045 21.9444776,43.3262537 21.9444776,43.0352164 C21.9444776,42.9647687 21.9356716,42.8899179 21.9224627,42.8194701 C21.9092537,42.7485821 21.8872388,42.6781343 21.8608209,42.6120896 Z',
              'id',
              'Path',
              'fill',
              '#16B3AB'
            ],
            [
              'href',
              'https://docs.google.com/forms/d/e/1FAIpQLSeDL2wEJhAIrIEiL1LqhDmvDegSsVq09nosWcsY4z_4p-6Icw/viewform?usp=sf_link'
            ],
            [
              'width',
              '52px',
              'height',
              '45px',
              'viewBox',
              '0 0 52 45',
              'version',
              '1.1',
              'xmlns',
              'http://www.w3.org/2000/svg',
              0,
              'xmlns',
              'xlink',
              'http://www.w3.org/1999/xlink',
              1,
              'abroed-icon'
            ],
            ['id', 'Icons', 'transform', 'translate(-456.000000, -247.000000)', 'fill-rule', 'nonzero'],
            ['id', 'Group', 'transform', 'translate(456.740325, 247.814013)'],
            [
              'd',
              'M50.3187215,10.3570776 C50.0173516,9.18173516 49.113242,8.19726027 47.9378995,7.79543379 C47.9278539,7.79543379 47.9278539,7.79543379 47.9178082,7.78538813 L42.63379,6.04748858 C40.7351598,5.42465753 38.7059361,5.3543379 36.7671233,5.84657534 L33.2712329,6.74063927 L18.9863014,0.421917808 C18.0118721,-0.0100456621 16.8968037,-0.100456621 15.8621005,0.160730594 L12.7278539,0.964383562 C12.0146119,1.14520548 11.4721461,1.70776256 11.3013699,2.43105023 C11.1406393,3.1543379 11.3917808,3.88767123 11.9643836,4.35981735 L19.1872146,10.3369863 L10.9196347,12.4465753 C9.9652968,12.6876712 8.94063927,12.4063927 8.24748858,11.7031963 L4.82191781,8.22739726 C4.33972603,7.73515982 3.61643836,7.53424658 2.95342466,7.70502283 L0.753424658,8.26757991 C0.492237443,8.33789954 0.271232877,8.49863014 0.140639269,8.72968037 C-1.10732495e-13,8.96073059 -0.0301369863,9.23196347 0.0301369863,9.49315068 L2.2,18.0018265 C2.65205479,19.7899543 4.11872146,21.1762557 5.9369863,21.5278539 L12.3863014,22.7835616 C13.0392694,22.9141553 13.7123288,22.9744292 14.3853881,22.9744292 C15.2593607,22.9744292 16.1333333,22.8639269 16.9771689,22.652968 L22.030137,21.3671233 L18.6045662,30.7497717 C18.3534247,31.4328767 18.5041096,32.1863014 18.9863014,32.7287671 C19.3579909,33.1406393 19.890411,33.3716895 20.4328767,33.3716895 C20.5936073,33.3716895 20.7543379,33.3515982 20.9150685,33.3114155 L24.0694064,32.5077626 C25.1442922,32.2365297 26.0986301,31.5936073 26.7515982,30.6995434 L36.2547945,17.7406393 L47.686758,14.8273973 C48.6410959,14.5863014 49.4347032,13.9936073 49.9269406,13.1598174 C50.4191781,12.3260274 50.5598174,11.3114155 50.3187215,10.3570776 L50.3187215,10.3570776 Z M13.3305936,2.87305936 L16.3543379,2.09954338 C16.9570776,1.94885845 17.6,1.99908676 18.1726027,2.25022831 L30.1269406,7.53424658 L21.5981735,9.72420091 L13.3305936,2.87305936 Z M25.1242009,29.4840183 C24.7424658,30.0063927 24.1899543,30.3780822 23.5671233,30.5388128 L20.513242,31.3123288 L24.3808219,20.7442922 L33.1808219,18.4940639 L25.1242009,29.4840183 Z M48.1990868,12.1050228 C47.9780822,12.4767123 47.6164384,12.7479452 47.1844749,12.8584475 L16.4748858,20.6940639 C15.2694064,21.0054795 13.9835616,21.0356164 12.7680365,20.8045662 L6.31872146,19.5488584 C5.26392694,19.3479452 4.41004566,18.5442922 4.14885845,17.4995434 L2.23013699,9.9652968 L3.42557078,9.66392694 L6.82100457,13.109589 C8.01643836,14.3150685 9.77442922,14.8073059 11.4219178,14.3954338 L37.2694064,7.79543379 C38.8365297,7.39360731 40.4739726,7.45388128 42.0109589,7.95616438 L47.2849315,9.69406393 C47.8173516,9.88493151 48.2392694,10.3369863 48.369863,10.8593607 C48.4803653,11.2913242 48.4200913,11.7333333 48.1990868,12.1050228 Z',
              'id',
              'Shape',
              'fill',
              '#082551'
            ],
            [
              'd',
              'M44.1004566,41.9908676 L6.2283105,41.9908676 C5.67579909,41.9908676 5.22374429,42.4429224 5.22374429,42.9954338 C5.22374429,43.5479452 5.67579909,44 6.2283105,44 L44.1004566,44 C44.652968,44 45.1050228,43.5479452 45.1050228,42.9954338 C45.1050228,42.4429224 44.652968,41.9908676 44.1004566,41.9908676 Z',
              'id',
              'Path',
              'fill',
              '#16B3AB'
            ],
            [1, 'text-to-icon'],
            [1, 'home-page-icons-text'],
            [1, 'home-page-icons-text', 'abroad'],
            [1, 'contact-form'],
            [1, 'small-heading', 'conect-form-small-heading'],
            [1, 'medium-heading', 'conect-form-medium-heading'],
            [3, 'user', 'loading', 'submit']
          ],
          template: function HomePageComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](0, 'br');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](1, 'br');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](2, 'div', 0);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](3, 'div', 1);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](4, 'div', 2);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](5, 'img', 3);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpipe'](6, 'async');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](7, 'img', 4);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpipe'](8, 'async');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](9, 'br');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](10, 'br');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](11, 'br');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](12, 'div', 5);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](13, 'div', 6);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](14, 'span', 7);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](15, ' \u05DE\u05EA\u05D7\u05D1\u05E8\u05D9\u05DD ');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](16, 'span', 8);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](17, ' \u05D7\u05D9\u05D9\u05DD ');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](18, 'div', 9);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](19, 'p', 10);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                20,
                ' \u05D0\u05EA\u05DD \u05D4\u05D5\u05DC\u05DB\u05D9\u05DD \u05DC\u05E9\u05DE\u05D5\u05E2 \u05E1\u05D9\u05E4\u05D5\u05E8 \u05E9\u05E2\u05D5\u05D3 \u05DC\u05D0 \u05E9\u05DE\u05E2\u05EA\u05DD, \u05E1\u05D9\u05E4\u05D5\u05E8\u05DD \u05E9\u05DC \u05D4\u05D0\u05D7\u05D9\u05DD \u05D5\u05D4\u05D0\u05D7\u05D9\u05D5\u05EA \u05D4\u05E9\u05DB\u05D5\u05DC\u05D9\u05DD. '
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](21, 'br');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                22,
                ' \u05E2\u05DC \u05D0\u05DC\u05D5 \u05E9\u05DC\u05D1\u05E9\u05D5 \u05DE\u05D3\u05D9\u05DD \u05D5\u05D9\u05E6\u05D0\u05D5 \u05DC\u05E6\u05D1\u05D0 \u05D5\u05E2\u05DC \u05D0\u05DC\u05D5 \u05E9\u05E0\u05E9\u05D0\u05E8\u05D5 \u05D1\u05D1\u05D9\u05EA \u05D5\u05D7\u05D9\u05DB\u05D5 \u05DC\u05D4\u05DD. '
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](23, 'br');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                24,
                ' \u05E2\u05DC \u05DE\u05E9\u05E4\u05D7\u05D4 \u05E9\u05DC\u05DE\u05D4 \u05E9\u05D9\u05D5\u05DD \u05D0\u05D7\u05D3 \u05D4\u05EA\u05E4\u05E8\u05E7\u05D4. \u05D6\u05D4\u05D5 \u05E1\u05D9\u05E4\u05D5\u05E8 \u05E2\u05DC \u05D7\u05D9\u05D9\u05DD \u05E9\u05E0\u05D7\u05E6\u05D5 \u05D1\u05E8\u05D2\u05E2. '
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](25, 'br');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                26,
                ' \u05D4\u05E7\u05D5\u05DC \u05E9\u05DC\u05E0\u05D5 \u05DE\u05E1\u05E4\u05E8 \u05E1\u05D9\u05E4\u05D5\u05E8 \u05D0\u05D9\u05E9\u05D9, \u05DE\u05E9\u05E4\u05D7\u05EA\u05D9 \u05D5\u05DC\u05D0\u05D5\u05DE\u05D9. \u05E1\u05D9\u05E4\u05D5\u05E8\u05D4 \u05E9\u05DC \u05DE\u05D3\u05D9\u05E0\u05EA \u05D9\u05E9\u05E8\u05D0\u05DC. '
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](27, 'br');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                28,
                ' \u05D0\u05E0\u05D7\u05E0\u05D5 \u05D4\u05D0\u05D7\u05D9\u05DD, \u05D1\u05D5\u05D7\u05E8\u05D9\u05DD \u05DC\u05E9\u05EA\u05E3 \u05D0\u05EA\u05DB\u05DD; \u05D1\u05DB\u05D0\u05D1 \u05D5\u05D1\u05E9\u05DE\u05D7\u05D4, \u05D1\u05D4\u05EA\u05DE\u05D5\u05D3\u05D3\u05D5\u05EA, \u05D1\u05EA\u05E7\u05D5\u05D5\u05D4 \u05D5\u05D1\u05D2\u05E2\u05D2\u05D5\u05E2 \u05E9\u05D0\u05D9\u05E0\u05D5 \u05E4\u05D5\u05E1\u05E7. '
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](29, 'br');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                30,
                ' \u05D1\u05D7\u05E8\u05E0\u05D5 \u05DC\u05D4\u05E0\u05E6\u05D9\u05D7 \u05D0\u05D5\u05EA\u05DD \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA \u05DE\u05E4\u05D2\u05E9\u05D9\u05DD \u05D0\u05DC\u05D5. '
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](31, 'br');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                32,
                ' \u05D1\u05DE\u05E4\u05D2\u05E9\u05D9\u05DD \u05D1\u05DB\u05DC \u05E8\u05D7\u05D1\u05D9 \u05D4\u05D0\u05E8\u05E5, \u05D0\u05EA\u05DD \u05EA\u05E9\u05DE\u05E2\u05D5 \u05D0\u05EA \u05D4\u05E1\u05D9\u05E4\u05D5\u05E8 \u05E9\u05DC\u05E0\u05D5; '
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](33, 'br');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                34,
                ' \u05E2\u05DC \u05E1\u05E4\u05D4, \u05E2\u05DC \u05D4\u05D3\u05E9\u05D0, \u05D1\u05DE\u05E9\u05E8\u05D3, \u05D1\u05D7\u05E6\u05E8 \u05D0\u05D5 \u05D1\u05DB\u05DC \u05DE\u05E7\u05D5\u05DD \u05E9\u05EA\u05D1\u05D7\u05E8\u05D5. \u05D0\u05D7\u05D9\u05DD \u05D9\u05E4\u05EA\u05D7\u05D5 \u05D0\u05EA \u05DC\u05D9\u05D1\u05DD. '
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](35, 'br');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                36,
                ' \u05D9\u05E9\u05EA\u05E4\u05D5 \u05D0\u05EA\u05DB\u05DD \u05D1\u05E8\u05D2\u05E2\u05D9\u05DD \u05D4\u05DB\u05D9 \u05D0\u05D9\u05E0\u05D8\u05D9\u05DE\u05D9\u05D9\u05DD \u05D5\u05D0\u05D9\u05E9\u05D9\u05D9\u05DD \u05E9\u05DC\u05D4\u05DD \u05D5\u05D9\u05E1\u05E4\u05E8\u05D5 \u05DC\u05DB\u05DD \u05E2\u05DC \u05D4\u05D0\u05D7\u05D9\u05DD \u05E9\u05DC\u05D4\u05DD, \u05E9\u05D4\u05DD \u05DB\u05DC \u05DB\u05DA \u05D0\u05D4\u05D1\u05D5. '
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](37, 'br');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](38, 'span', 11);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                39,
                '\u05D4\u05D0\u05D7\u05D9\u05DD \u05E9\u05DC \u05DB\u05D5\u05DC\u05E0\u05D5'
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](40, 'br');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](41, 'a', 12);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                42,
                ' \u05D0\u05E0\u05D9 \u05E8\u05D5\u05E6\u05D4 \u05DC\u05D4\u05EA\u05E0\u05D3\u05D1'
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](43, 'div', 13);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](44, 'div', 14);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](45, 'div', 15);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnamespaceSVG']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](46, 'svg', 16);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](47, 'title');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](48, 'Group 10');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](49, 'g', 17);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](50, 'g', 18);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](51, 'g', 19);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](52, 'path', 20);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](53, 'path', 21);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](54, 'path', 22);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](55, 'path', 23);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnamespaceHTML']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](56, 'br');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](57, 'br');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](58, 'img', 24);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](59, 'br');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](60, 'div', 25);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                61,
                '\u05DE\u05E4\u05D2\u05E9\u05D9\u05DD \u05D5\u05D9\u05E8\u05D8\u05D5\u05D0\u05DC\u05D9\u05D9\u05DD'
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](62, 'p');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                63,
                ' \u05D1\u05DE\u05E4\u05D2\u05E9\u05D9\u05DD \u05D0\u05DC\u05D5 \u05E0\u05D9\u05EA\u05DF \u05DC\u05D4\u05D5\u05D1\u05D9\u05DC \u05DE\u05E4\u05D2\u05E9 \u05D5\u05DC\u05E1\u05E4\u05E8 \u05E1\u05D9\u05E4\u05D5\u05E8 \u05E2\u05DC \u05D4\u05D0\u05D7, \u05D4\u05D0\u05D7\u05D5\u05EA, \u05D4\u05D4\u05D5\u05E8\u05D4 \u05D5\u05D4\u05D7\u05D1\u05E8. \u05D5\u05DC\u05D4\u05E9\u05EA\u05EA\u05E3 \u05D1\u05DE\u05E4\u05D2\u05E9\u05D9\u05DD \u05D0\u05DC\u05D5. '
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](64, 'div', 26);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](65, 'a', 27);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                66,
                ' \u05DC\u05D9\u05E6\u05D9\u05E8\u05EA \u05DE\u05E4\u05D2\u05E9'
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](67, 'div', 28);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnamespaceSVG']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](68, 'svg', 29);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](69, 'g', 17);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](70, 'g', 30);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](71, 'g', 31);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](72, 'path', 32);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](73, 'circle', 33);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](74, 'g', 34);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](75, 'g', 35);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](76, 'g', 36);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](77, 'path', 37);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnamespaceHTML']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](78, 'br');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](79, 'br');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](80, 'img', 38);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](81, 'div', 39);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                82,
                '\u05DE\u05E4\u05D2\u05E9\u05D9\u05DD \u05E4\u05E8\u05D5\u05E0\u05D8\u05DC\u05D9\u05DD'
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](83, 'p');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                84,
                ' \u05D1\u05DE\u05E4\u05D2\u05E9\u05D9\u05DD \u05D0\u05DC\u05D5 \u05D0\u05D7\u05D9\u05D5\u05EA \u05D5\u05D0\u05D7\u05D9\u05DD \u05E9\u05DB\u05D5\u05DC\u05D9\u05DD \u05DE\u05E1\u05E4\u05E8\u05D9\u05DD \u05D0\u05EA \u05E1\u05D9\u05E4\u05D5\u05E8\u05DD \u05D4\u05D0\u05D9\u05E9\u05D9 \u05D5\u05DE\u05EA\u05D0\u05E8\u05D7\u05D9\u05DD \u05D1\u05D1\u05EA\u05D9\u05DD \u05D1\u05E8\u05D7\u05D1\u05D9 \u05D4\u05D0\u05E8\u05E5. '
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](85, 'div', 40);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](86, 'a', 41);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                87,
                ' \u05DC\u05D9\u05E6\u05D9\u05E8\u05EA \u05DE\u05E4\u05D2\u05E9'
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](88, 'div', 42);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](89, 'div', 43);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](90, 'div', 44);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                91,
                ' \u05D4\u05DE\u05E4\u05D2\u05E9\u05D9\u05DD \u05DE\u05D0\u05E4\u05E9\u05E8\u05D9\u05DD \u05D4\u05E6\u05E6\u05D4 \u05E0\u05D3\u05D9\u05E8\u05D4 \u05D5\u05D9\u05D9\u05D7\u05D5\u05D3\u05D9\u05EA \u05DC\u05D4\u05EA\u05DE\u05D5\u05D3\u05D3\u05D5\u05EA \u05D4\u05D0\u05D7\u05D9\u05DD \u05E2\u05DD \u05E0\u05E4\u05D9\u05DC\u05EA \u05D9\u05E7\u05D9\u05E8\u05D9\u05D4\u05DD \u05D5\u05DE\u05D0\u05E4\u05E9\u05E8\u05D9\u05DD \u05DC\u05E9\u05DE\u05D5\u05E2 \u05E1\u05D9\u05E4\u05D5\u05E8 \u05E9\u05DE\u05E2\u05DC\u05DD \u05DC\u05D0 \u05E1\u05D5\u05E4\u05E8 \u05D1\u05E6\u05D5\u05E8\u05D4 \u05E0\u05E8\u05D7\u05D1\u05EA \u05D5\u05E8\u05E9\u05DE\u05D9\u05EA '
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](92, 'br');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](93, 'div', 45);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                94,
                ' \u05D0\u05E8\u05D2\u05D6 \u05DB\u05DC\u05D9\u05DD\n'
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](95, 'div', 46);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                96,
                ' \u05DC\u05DE\u05D5\u05D1\u05D9\u05DC\u05D9 \u05DE\u05E4\u05D2\u05E9\n'
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](97, 'br');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](98, 'table', 47);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](99, 'tr');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](100, 'th');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnamespaceSVG']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](101, 'svg', 48);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](102, 'title');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](103, 'Group 5');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](104, 'g', 17);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](105, 'g', 49);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](106, 'g', 50);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](107, 'g', 51);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](108, 'path', 52);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](109, 'path', 53);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnamespaceHTML']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](110, 'th');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnamespaceSVG']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](111, 'svg', 54);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](112, 'title');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](113, 'Group 16');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](114, 'g', 17);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](115, 'g', 55);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](116, 'g', 56);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](117, 'path', 57);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](118, 'polyline', 58);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnamespaceHTML']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](119, 'th');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnamespaceSVG']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](120, 'svg', 59);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](121, 'title');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                122,
                ' \u05E9\u05D0\u05DC\u05D5\u05EA \u05D5\u05EA\u05E9\u05D5\u05D1\u05D5\u05EA '
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](123, 'g', 17);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](124, 'g', 60);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](125, 'g', 61);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](126, 'path', 62);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](127, 'path', 63);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](128, 'path', 64);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](129, 'path', 65);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](130, 'path', 66);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](131, 'path', 67);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](132, 'path', 68);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnamespaceHTML']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](133, 'th');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](134, 'a', 69);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnamespaceSVG']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](135, 'svg', 70);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](136, 'title');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                137,
                '\u05D4\u05D0\u05D7\u05D9\u05DD \u05E9\u05DC\u05E0\u05D5 \u05D1\u05D7\u05D5"\u05DC'
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](138, 'g', 17);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](139, 'g', 71);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](140, 'g', 72);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](141, 'path', 73);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](142, 'path', 74);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnamespaceHTML']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](143, 'tr', 75);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](144, 'th');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](145, 'div', 76);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                146,
                ' \u05E1\u05D3\u05E0\u05D0\u05D5\u05EA \u05DC\u05DE\u05D5\u05D1\u05D9\u05DC\u05D9 \u05DE\u05E4\u05D2\u05E9 '
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](147, 'th');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](148, 'div', 76);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                149,
                ' \u05E2\u05E8\u05DB\u05D5\u05EA \u05E2\u05D6\u05E8 '
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](150, 'th');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](151, 'div', 76);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                152,
                ' \u05E9\u05D0\u05DC\u05D5\u05EA \u05D5\u05EA\u05E9\u05D5\u05D1\u05D5\u05EA '
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](153, 'th');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](154, 'div', 77);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                155,
                ' \u05D4\u05D0\u05D7\u05D9\u05DD \u05E9\u05DC\u05E0\u05D5 \u05D1\u05D7\u05D5\u05DC '
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](156, 'br');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](157, 'div', 78);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](158, 'br');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](159, 'div', 79);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](160, '\u05E6\u05E8\u05D5 \u05E7\u05E9\u05E8');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](161, 'div', 80);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                162,
                '\u05D4\u05D6\u05DB\u05E8\u05D5\u05DF \u05E9\u05DC\u05E0\u05D5 - \u05D4\u05E9\u05D0\u05D9\u05E8\u05D5 \u05E4\u05E8\u05D8\u05D9\u05DD'
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](163, 'app-contact-form', 81);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'submit',
                function HomePageComponent_Template_app_contact_form_submit_163_listener($event) {
                  return ctx.onContactSubmit($event);
                }
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            }
            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](5);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵattribute'](
                'src',
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpipeBind1'](6, 4, ctx.src1$),
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵsanitizeUrl']
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵattribute'](
                'src',
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpipeBind1'](8, 6, ctx.src2$),
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵsanitizeUrl']
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](156);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('user', ctx.user)('loading', ctx.postingContact);
            }
          },
          directives: [
            _angular_router__WEBPACK_IMPORTED_MODULE_6__['RouterLink'],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__['RouterLinkWithHref'],
            _shared_components_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_7__['ContactFormComponent']
          ],
          pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__['AsyncPipe']],
          styles: [
            '.body[_ngcontent-%COMP%] {\n  background: url(\'Shape.svg\');\n  background-position: center;\n  width: 260.21px;\n  height: 550px;\n  opacity: 0.07;\n}\n\n.home-page-first[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row-reverse;\n}\n\n.home-page-first[_ngcontent-%COMP%]   .home-page-title-1[_ngcontent-%COMP%] {\n  flex-grow: 6;\n  padding-right: 120px;\n}\n\n.home-page-first[_ngcontent-%COMP%]   .home-page-title-2[_ngcontent-%COMP%] {\n  flex-grow: 4;\n}\n\n.home-page-first[_ngcontent-%COMP%]   .home-page-title-2[_ngcontent-%COMP%] {\n  padding-top: 60px;\n}\n\n.div-candle-icon[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.div-candle-icon[_ngcontent-%COMP%]   .candle-icon[_ngcontent-%COMP%] {\n  width: 260.21px;\n  height: 550px;\n  opacity: 0.07;\n}\n\n.image-1[_ngcontent-%COMP%] {\n  \n  width: auto;\n  position: absolute;\n  opacity: 1;\n  \n  width: 400px;\n  height: 400px;\n  border-radius: 5px;\n}\n\n.image-2[_ngcontent-%COMP%] {\n  opacity: 1;\n  position: relative;\n  left: 140px;\n  top: 140px;\n  width: 400px;\n  height: 400px;\n  border-radius: 5px;\n  border: 5px white solid;\n  \n}\n\n.home-page-title[_ngcontent-%COMP%] {\n  text-align: right;\n  font-size: 40px;\n  padding-right: 6%;\n}\n\n.home-page-title[_ngcontent-%COMP%]   .home-page-connect[_ngcontent-%COMP%] {\n  color: #16b3ab;\n}\n\n.home-page-title[_ngcontent-%COMP%]   .home-page-life[_ngcontent-%COMP%] {\n  color: #0f2b56;\n}\n\n.home-page-text[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #818181;\n  font-family: "Heebo";\n  padding-right: 6%;\n}\n\n.home-page-text[_ngcontent-%COMP%]   .home-page-bold[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.home-page-text[_ngcontent-%COMP%]   .home-page-donate[_ngcontent-%COMP%] {\n  color: #16b3ab;\n  margin-right: 6%;\n}\n\n.home-page-icons-toolbox[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.home-page-icons-text[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #15305a;\n  margin-top: -15px;\n}\n\n.abroad[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\n@media only screen and (max-width: 786px) {\n  .home-page-first[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n\n  .home-page-image[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n\n@media only screen and (max-width: 1440px) {\n  .home-page-buttons[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    padding-top: 100px;\n  }\n  .home-page-buttons[_ngcontent-%COMP%]   .home-page-pass-1[_ngcontent-%COMP%], .home-page-buttons[_ngcontent-%COMP%]   .home-page-pass-2[_ngcontent-%COMP%] {\n    content: "";\n    display: block;\n    height: 5px;\n    flex-grow: 1.5;\n  }\n  .home-page-buttons[_ngcontent-%COMP%]   .home-page-pass-1[_ngcontent-%COMP%] {\n    background-color: #15305a;\n  }\n  .home-page-buttons[_ngcontent-%COMP%]   .home-page-pass-2[_ngcontent-%COMP%] {\n    background-color: #16b3ab;\n  }\n  .home-page-buttons[_ngcontent-%COMP%]   .home-page-square-1[_ngcontent-%COMP%], .home-page-buttons[_ngcontent-%COMP%]   .home-page-square-2[_ngcontent-%COMP%] {\n    flex-grow: 3.5;\n    margin: 20px;\n    border-radius: 15px;\n    width: 0px;\n    height: 415px;\n  }\n  .home-page-buttons[_ngcontent-%COMP%]   .home-page-square-1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .home-page-buttons[_ngcontent-%COMP%]   .home-page-square-2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-family: "Heebo";\n    font-size: 16px;\n    color: #ffffff;\n    letter-spacing: 0;\n    text-align: center;\n    line-height: 22px;\n    font-weight: 500;\n    padding-left: 30px;\n    padding-right: 30px;\n  }\n  .home-page-buttons[_ngcontent-%COMP%]   .home-page-square-1[_ngcontent-%COMP%] {\n    background: #15305a;\n  }\n  .home-page-buttons[_ngcontent-%COMP%]   .home-page-square-2[_ngcontent-%COMP%] {\n    margin-right: 0px;\n    background: #16b3ab;\n  }\n}\n\n@media only screen and (max-width: 1024px) {\n  .home-page-buttons[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n  }\n  .home-page-buttons[_ngcontent-%COMP%]   .home-page-pass-1[_ngcontent-%COMP%], .home-page-buttons[_ngcontent-%COMP%]   .home-page-pass-2[_ngcontent-%COMP%] {\n    display: block;\n    height: 0px;\n    flex-grow: 1.3;\n  }\n  .home-page-buttons[_ngcontent-%COMP%]   .home-page-square-1[_ngcontent-%COMP%], .home-page-buttons[_ngcontent-%COMP%]   .home-page-square-2[_ngcontent-%COMP%] {\n    flex-grow: 10;\n    margin: 20px;\n    border-radius: 15px;\n    width: 0px;\n    height: 415px;\n  }\n  .home-page-buttons[_ngcontent-%COMP%]   .home-page-square-1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .home-page-buttons[_ngcontent-%COMP%]   .home-page-square-2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-family: "Heebo";\n    font-size: 16px;\n    color: #ffffff;\n    letter-spacing: 0;\n    text-align: center;\n    line-height: 22px;\n    font-weight: 500;\n    padding-left: 74px;\n    padding-right: 74px;\n  }\n  .home-page-buttons[_ngcontent-%COMP%]   .home-page-square-1[_ngcontent-%COMP%] {\n    background: #15305a;\n  }\n  .home-page-buttons[_ngcontent-%COMP%]   .home-page-square-2[_ngcontent-%COMP%] {\n    margin-right: 0px;\n    background: #16b3ab;\n  }\n}\n\n@media only screen and (max-width: 786px) {\n  .home-page-buttons[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n  }\n  .home-page-buttons[_ngcontent-%COMP%]   .home-page-pass-1[_ngcontent-%COMP%], .home-page-buttons[_ngcontent-%COMP%]   .home-page-pass-2[_ngcontent-%COMP%] {\n    display: block;\n    height: 0px;\n    flex-grow: 1.3;\n  }\n  .home-page-buttons[_ngcontent-%COMP%]   .home-page-pass-1[_ngcontent-%COMP%] {\n    flex-grow: 5;\n  }\n  .home-page-buttons[_ngcontent-%COMP%]   .home-page-pass-2[_ngcontent-%COMP%] {\n    flex-grow: 5;\n  }\n  .home-page-buttons[_ngcontent-%COMP%]   .home-page-square-1[_ngcontent-%COMP%], .home-page-buttons[_ngcontent-%COMP%]   .home-page-square-2[_ngcontent-%COMP%] {\n    margin: 20px;\n    border-radius: 15px;\n    width: 70%;\n    height: 70vh;\n  }\n  .home-page-buttons[_ngcontent-%COMP%]   .home-page-square-1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .home-page-buttons[_ngcontent-%COMP%]   .home-page-square-2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-family: "Heebo";\n    font-size: 16px;\n    color: #ffffff;\n    letter-spacing: 0;\n    text-align: center;\n    line-height: 22px;\n    font-weight: 500;\n    padding-left: 45px;\n    padding-right: 45px;\n  }\n  .home-page-buttons[_ngcontent-%COMP%]   .home-page-square-1[_ngcontent-%COMP%] {\n    background: #15305a;\n  }\n  .home-page-buttons[_ngcontent-%COMP%]   .home-page-square-2[_ngcontent-%COMP%] {\n    margin-right: 0px;\n    background: #16b3ab;\n  }\n}\n\n.logo-home-page-meeting-1[_ngcontent-%COMP%] {\n  float: left;\n  padding-left: 3px;\n  padding-top: 5px;\n  margin-top: 5px;\n  margin-left: 10px;\n  width: 70px;\n}\n\n.home-page-logo-connect2care[_ngcontent-%COMP%] {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 40%;\n}\n\n.aaa[_ngcontent-%COMP%] {\n  font-family: "Heebo";\n  font-size: 30px;\n  color: #ffffff;\n  letter-spacing: 0;\n  text-align: center;\n  font-weight: 700;\n}\n\n.meeting-button-1[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.logo-home-page-meeting-2[_ngcontent-%COMP%] {\n  float: left;\n  padding-left: 3px;\n  padding-top: 10px;\n  width: 70px;\n}\n\n.home-page-logo-our-brother[_ngcontent-%COMP%] {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 50%;\n}\n\n.home-page-meeting[_ngcontent-%COMP%] {\n  font-family: "Heebo";\n  font-size: 40px;\n  color: #ffffff;\n  letter-spacing: 0;\n  text-align: center;\n  font-weight: 700;\n}\n\n.meeting-button-2[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.meeting-button-2[_ngcontent-%COMP%]   .color-button[_ngcontent-%COMP%] {\n  background-color: #15305a;\n}\n\n.home-page-toolbox-1[_ngcontent-%COMP%], .home-page-toolbox-2[_ngcontent-%COMP%] {\n  font-family: "Arbel";\n  font-size: 32px;\n  letter-spacing: 0;\n  text-align: center;\n  font-weight: 700;\n}\n\n.home-page-toolbox-1[_ngcontent-%COMP%] {\n  color: #15305a;\n  text-align: center;\n}\n\n.home-page-toolbox-2[_ngcontent-%COMP%] {\n  color: #16b3ab;\n}\n\n.home-page-toolbox-icons[_ngcontent-%COMP%] {\n  margin-right: 32%;\n}\n\n.home-page-toolbox-icons[_ngcontent-%COMP%]   .text-to-icon[_ngcontent-%COMP%] {\n  margin-top: -30px;\n}\n\n.home-page-toolbox-icons[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  padding: 0px 25px 0px 25px;\n  cursor: pointer;\n}\n\n.home-page-toolbox-icons[_ngcontent-%COMP%]   .group_5[_ngcontent-%COMP%] {\n  width: 96.75px;\n  height: 78px;\n}\n\n.home-page-toolbox-icons[_ngcontent-%COMP%]   .group_16[_ngcontent-%COMP%] {\n  width: 97.44px;\n  height: 78px;\n}\n\n.home-page-toolbox-icons[_ngcontent-%COMP%]   .group_21[_ngcontent-%COMP%] {\n  width: 112.06px;\n  height: 100px;\n}\n\n.home-page-toolbox-icons[_ngcontent-%COMP%]   .abroed-icon[_ngcontent-%COMP%] {\n  width: 103.16px;\n  height: 68.23px;\n}\n\n@media only screen and (max-width: 786px) {\n  .home-page-toolbox-icons[_ngcontent-%COMP%] {\n    margin-right: 25%;\n  }\n}\n\n.conect-form-small-heading[_ngcontent-%COMP%] {\n  font-family: "Arbel";\n  font-size: 32px;\n  color: #15305a;\n  letter-spacing: 0;\n  text-align: right;\n  font-weight: 700;\n}\n\n.conect-form-medium-heading[_ngcontent-%COMP%] {\n  font-family: "Arbel";\n  font-size: 32px;\n  color: #16b3ab;\n  letter-spacing: 0;\n  text-align: right;\n  font-weight: 700;\n}\n\n.big-heading[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.talking-life[_ngcontent-%COMP%] {\n  color: #15305a;\n}\n\n.participations-buttons[_ngcontent-%COMP%] {\n  margin-top: 60px;\n}\n\n.see-more[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  font-size: 20px;\n  color: #2a2f35;\n  text-decoration: none;\n  margin-bottom: 70px;\n}\n\n@media only screen and (max-width: 768px) {\n  .see-more[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n    justify-content: center;\n  }\n}\n\n.see-more[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  cursor: pointer;\n  min-width: 100px;\n  margin-left: 200px;\n  text-decoration: none;\n  color: #818181;\n}\n\n@media only screen and (max-width: 768px) {\n  .see-more[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    margin-left: 0px;\n  }\n}\n\n.see-more[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\n.gallery-container[_ngcontent-%COMP%] {\n  padding-top: 90px;\n  padding-bottom: 130px;\n  overflow: hidden;\n  text-align: center;\n}\n\n.gallery-container[_ngcontent-%COMP%]   .gallery-images[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n}\n\n.gallery-container[_ngcontent-%COMP%]   .gallery-images[_ngcontent-%COMP%]   .images-row[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.gallery-container[_ngcontent-%COMP%]   .gallery-images[_ngcontent-%COMP%]   .images-row[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n  height: auto;\n  max-width: 100%;\n  margin: 10px;\n}\n\n@media only screen and (max-width: 1040px) {\n  .gallery-container[_ngcontent-%COMP%]   .gallery-images[_ngcontent-%COMP%]   .images-row[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 10px 15px;\n    margin: 0;\n  }\n}\n\n.gallery-container[_ngcontent-%COMP%]   .gallery-images[_ngcontent-%COMP%]   .circle-top-right[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  transform: translate(40%, -40%);\n}\n\n@media only screen and (max-width: 768px) {\n  .gallery-container[_ngcontent-%COMP%]   .gallery-images[_ngcontent-%COMP%]   .circle-top-right[_ngcontent-%COMP%] {\n    transform: translate(35%, -35%);\n  }\n}\n\n.gallery-container[_ngcontent-%COMP%]   .gallery-images[_ngcontent-%COMP%]   .circle-middle-left[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 0;\n  z-index: -1;\n  transform: translate(-25%, -50%);\n}\n\n@media only screen and (max-width: 768px) {\n  .gallery-container[_ngcontent-%COMP%]   .gallery-images[_ngcontent-%COMP%]   .circle-middle-left[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n.gallery-container[_ngcontent-%COMP%]   .gallery-images[_ngcontent-%COMP%]   .circle-bottom-right[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  z-index: -1;\n  transform: translate(30%, 30%);\n}\n\n@media only screen and (max-width: 768px) {\n  .gallery-container[_ngcontent-%COMP%]   .gallery-images[_ngcontent-%COMP%]   .circle-bottom-right[_ngcontent-%COMP%] {\n    right: unset;\n    left: -50%;\n  }\n}\n\n.contact-form[_ngcontent-%COMP%] {\n  padding-bottom: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXFRlaGlsYVxcbGFzdFxcb3VyQnJvXFxvdXItYnJvdGhlcnMtd2ViL3NyY1xcYXBwXFxob21lXFxob21lLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNEJBQUE7RUFNQSwyQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtBQ0pGOztBRE9BO0VBQ0UsYUFBQTtFQUNBLDJCQUFBO0FDSkY7O0FETUU7RUFDRSxZQUFBO0VBQ0Esb0JBQUE7QUNKSjs7QURPRTtFQUVFLFlBQUE7QUNOSjs7QURRRTtFQUNFLGlCQUFBO0FDTko7O0FEU0E7RUFDRSxrQkFBQTtBQ05GOztBRFFFO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0FDTko7O0FEVUE7RUFDRSw0QkFBQTtFQUVBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUVBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUNURjs7QURXQTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsNEJBQUE7QUNSRjs7QUR1QkE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ3BCRjs7QURxQkU7RUFDRSxjQUFBO0FDbkJKOztBRHFCRTtFQUNFLGNBQUE7QUNuQko7O0FEc0JBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0FDbkJGOztBRG9CRTtFQUNFLGlCQUFBO0FDbEJKOztBRG9CRTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQ2xCSjs7QURzQkE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtBQ25CRjs7QURzQkE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDbkJGOztBRHFCQTtFQUNFLGtCQUFBO0FDbEJGOztBRG9CQTtFQUNFO0lBQ0Usc0JBQUE7RUNqQkY7O0VEbUJBO0lBQ0Usa0JBQUE7RUNoQkY7QUFDRjs7QURtQkE7RUFDRTtJQVlFLGFBQUE7SUFDQSxtQkFBQTtJQUNBLGtCQUFBO0VDNUJGO0VEK0JFOztJQUVFLFdBQUE7SUFDQSxjQUFBO0lBQ0EsV0FBQTtJQUNBLGNBQUE7RUM3Qko7RUQrQkU7SUFFRSx5QkFBQTtFQzlCSjtFRGdDRTtJQUNFLHlCQUFBO0VDOUJKO0VEaUNFOztJQUdFLGNBQUE7SUFDQSxZQUFBO0lBRUEsbUJBQUE7SUFFQSxVQUFBO0lBQ0EsYUFBQTtFQ2xDSjtFRG1DSTs7SUFDRSxvQkFBQTtJQUNBLGVBQUE7SUFDQSxjQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtJQUNBLGlCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxrQkFBQTtJQUNBLG1CQUFBO0VDaENOO0VEbUNFO0lBQ0UsbUJBQUE7RUNqQ0o7RURvQ0U7SUFJRSxpQkFBQTtJQUNBLG1CQUFBO0VDckNKO0FBQ0Y7O0FENENBO0VBQ0U7SUFZRSxhQUFBO0lBQ0EsbUJBQUE7RUNyREY7RUR3REU7O0lBR0UsY0FBQTtJQUNBLFdBQUE7SUFDQSxjQUFBO0VDdkRKO0VEMERFOztJQUdFLGFBQUE7SUFDQSxZQUFBO0lBQ0EsbUJBQUE7SUFFQSxVQUFBO0lBQ0EsYUFBQTtFQzFESjtFRDJESTs7SUFDRSxvQkFBQTtJQUNBLGVBQUE7SUFDQSxjQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtJQUNBLGlCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxrQkFBQTtJQUNBLG1CQUFBO0VDeEROO0VEMkRFO0lBQ0UsbUJBQUE7RUN6REo7RUQ0REU7SUFJRSxpQkFBQTtJQUNBLG1CQUFBO0VDN0RKO0FBQ0Y7O0FEbUVBO0VBQ0U7SUFZRSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSxzQkFBQTtFQzVFRjtFRCtFRTs7SUFHRSxjQUFBO0lBQ0EsV0FBQTtJQUNBLGNBQUE7RUM5RUo7RURnRkU7SUFFRSxZQUFBO0VDL0VKO0VEaUZFO0lBQ0UsWUFBQTtFQy9FSjtFRGtGRTs7SUFJRSxZQUFBO0lBQ0EsbUJBQUE7SUFDQSxVQUFBO0lBQ0EsWUFBQTtFQ2xGSjtFRG1GSTs7SUFDRSxvQkFBQTtJQUNBLGVBQUE7SUFDQSxjQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtJQUNBLGlCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxrQkFBQTtJQUNBLG1CQUFBO0VDaEZOO0VEbUZFO0lBQ0UsbUJBQUE7RUNqRko7RURtRkU7SUFJRSxpQkFBQTtJQUNBLG1CQUFBO0VDcEZKO0FBQ0Y7O0FENEdBO0VBSUUsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FDN0dGOztBRCtHQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQzVHRjs7QUQ4R0E7RUFDRSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDM0dGOztBRDZHQTtFQUNFLGtCQUFBO0FDMUdGOztBRDJIQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQ3hIRjs7QUQwSEE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUN2SEY7O0FEK0hBO0VBQ0Usb0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQzVIRjs7QUQ4SEE7RUFDRSxrQkFBQTtBQzNIRjs7QUQ0SEU7RUFDRSx5QkFBQTtBQzFISjs7QUQ0SUE7O0VBRUUsb0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDeklGOztBRDZJQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQzFJRjs7QUQ0SUE7RUFDRSxjQUFBO0FDeklGOztBRDRJQTtFQUtFLGlCQUFBO0FDN0lGOztBRDhJRTtFQUNFLGlCQUFBO0FDNUlKOztBRDhJRTtFQUVFLDBCQUFBO0VBQ0EsZUFBQTtBQzdJSjs7QUQrSUU7RUFDRSxjQUFBO0VBQ0EsWUFBQTtBQzdJSjs7QUQrSUU7RUFDRSxjQUFBO0VBQ0EsWUFBQTtBQzdJSjs7QUQrSUU7RUFDRSxlQUFBO0VBQ0EsYUFBQTtBQzdJSjs7QUQrSUU7RUFDRSxlQUFBO0VBQ0EsZUFBQTtBQzdJSjs7QURnSkE7RUFDRTtJQUNFLGlCQUFBO0VDN0lGO0FBQ0Y7O0FEZ0pBO0VBQ0Usb0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQzlJRjs7QURpSkE7RUFDRSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDOUlGOztBRGdKQTtFQUNFLGdCQUFBO0FDN0lGOztBRGlKQTtFQUNFLGNBQUE7QUM5SUY7O0FEaUpBO0VBQ0UsZ0JBQUE7QUM5SUY7O0FEaUpBO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FDOUlGOztBRGdKRTtFQVJGO0lBU0ksbUJBQUE7SUFDQSx1QkFBQTtFQzdJRjtBQUNGOztBRCtJRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FDN0lKOztBRCtJSTtFQVBGO0lBUUksZ0JBQUE7RUM1SUo7QUFDRjs7QUQ4SUU7RUFDRSwwQkFBQTtBQzVJSjs7QURnSkE7RUFDRSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQzdJRjs7QUQrSUU7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0FDN0lKOztBRCtJSTtFQUNFLGtCQUFBO0FDN0lOOztBRCtJTTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQzdJUjs7QUQrSVE7RUFMRjtJQU1JLFdBQUE7SUFDQSxrQkFBQTtJQUNBLFNBQUE7RUM1SVI7QUFDRjs7QURnSkk7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsK0JBQUE7QUM5SU47O0FEZ0pNO0VBTkY7SUFPSSwrQkFBQTtFQzdJTjtBQUNGOztBRGdKSTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBRUEsZ0NBQUE7QUMvSU47O0FEaUpNO0VBUkY7SUFTSSxhQUFBO0VDOUlOO0FBQ0Y7O0FEaUpJO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtBQy9JTjs7QURpSk07RUFQRjtJQVFJLFlBQUE7SUFDQSxVQUFBO0VDOUlOO0FBQ0Y7O0FEeUtBO0VBQ0Usb0JBQUE7QUN0S0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib2R5IHtcclxuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy9zdmcvU2hhcGUuc3ZnJyk7XHJcbiAgLy9iYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIC8vYmFja2dyb3VuZDogbm8tcmVwZWF0IHVybChcIi4uLy4uL21lZGlhL2V4YW1wbGVzL2xpemFyZC5wbmdcIik7XHJcbiAgLy9iYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gIC8vIGNvbG9yOiByZWQ7XHJcbiAgLy96LWluZGV4OiAzMzMzO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICB3aWR0aDogMjYwLjIxcHg7XHJcbiAgaGVpZ2h0OiA1NTBweDtcclxuICBvcGFjaXR5OiAwLjA3O1xyXG59XHJcblxyXG4uaG9tZS1wYWdlLWZpcnN0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcclxuXHJcbiAgLmhvbWUtcGFnZS10aXRsZS0xIHtcclxuICAgIGZsZXgtZ3JvdzogNjtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEyMHB4O1xyXG4gIH1cclxuXHJcbiAgLmhvbWUtcGFnZS10aXRsZS0yIHtcclxuICAgIC8vZGlzcGxheTpmbGV4O1xyXG4gICAgZmxleC1ncm93OiA0O1xyXG4gIH1cclxuICAuaG9tZS1wYWdlLXRpdGxlLTIge1xyXG4gICAgcGFkZGluZy10b3A6IDYwcHg7XHJcbiAgfVxyXG59XHJcbi5kaXYtY2FuZGxlLWljb24ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgLmNhbmRsZS1pY29uIHtcclxuICAgIHdpZHRoOiAyNjAuMjFweDtcclxuICAgIGhlaWdodDogNTUwcHg7XHJcbiAgICBvcGFjaXR5OiAwLjA3O1xyXG4gIH1cclxufVxyXG5cclxuLmltYWdlLTEge1xyXG4gIC8qZ3JpZC1hcmVhOiAxIC8gMSAvIDMgLyAzOyovXHJcbiAgLy9oZWlnaHQ6IDQ5NXB4O1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBvcGFjaXR5OiAxO1xyXG4gIC8qIHZpc2liaWxpdHk6IHZpc2libGU7ICovXHJcblxyXG4gIHdpZHRoOiA0MDBweDtcclxuICBoZWlnaHQ6IDQwMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG4uaW1hZ2UtMiB7XHJcbiAgb3BhY2l0eTogMTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbGVmdDogMTQwcHg7XHJcbiAgdG9wOiAxNDBweDtcclxuICB3aWR0aDogNDAwcHg7XHJcbiAgaGVpZ2h0OiA0MDBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYm9yZGVyOiA1cHggd2hpdGUgc29saWQ7XHJcbiAgLypncmlkLWFyZWE6IDIgLyAyIC8gNCAvIDQ7Ki9cclxufVxyXG4vLyAuaG9tZS1wYWdlLWltYWdlIHtcclxuLy8gICBoZWlnaHQ6IDQ5NXB4O1xyXG4vLyAgIHdpZHRoOiA0OTVweDtcclxuLy8gICBvdmVyZmxvdzogaGlkZGVuO1xyXG4vLyAgIC5pbWFnZS0xIHtcclxuLy8gICAgIGhlaWdodDogNDk1cHg7XHJcbi8vICAgICB3aWR0aDogYXV0bztcclxuLy8gICB9XHJcbi8vICAgLmltYWdlLTIge1xyXG4vLyAgICAgaGVpZ2h0OiA0OTVweDtcclxuLy8gICAgIHdpZHRoOiBhdXRvO1xyXG4vLyAgIH1cclxuLy99XHJcbi5ob21lLXBhZ2UtdGl0bGUge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiA2JTtcclxuICAuaG9tZS1wYWdlLWNvbm5lY3Qge1xyXG4gICAgY29sb3I6ICMxNmIzYWI7XHJcbiAgfVxyXG4gIC5ob21lLXBhZ2UtbGlmZSB7XHJcbiAgICBjb2xvcjogIzBmMmI1NjtcclxuICB9XHJcbn1cclxuLmhvbWUtcGFnZS10ZXh0IHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgY29sb3I6ICM4MTgxODE7XHJcbiAgZm9udC1mYW1pbHk6ICdIZWVibyc7XHJcbiAgcGFkZGluZy1yaWdodDogNiU7XHJcbiAgLmhvbWUtcGFnZS1ib2xkIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICAuaG9tZS1wYWdlLWRvbmF0ZSB7XHJcbiAgICBjb2xvcjogIzE2YjNhYjtcclxuICAgIG1hcmdpbi1yaWdodDogNiU7XHJcbiAgfVxyXG59XHJcblxyXG4uaG9tZS1wYWdlLWljb25zLXRvb2xib3gge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4uaG9tZS1wYWdlLWljb25zLXRleHQge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBjb2xvcjogIzE1MzA1YTtcclxuICBtYXJnaW4tdG9wOiAtMTVweDtcclxufVxyXG4uYWJyb2FkIHtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3ODZweCkge1xyXG4gIC5ob21lLXBhZ2UtZmlyc3Qge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcbiAgLmhvbWUtcGFnZS1pbWFnZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0NDBweCkge1xyXG4gIC5ob21lLXBhZ2UtYnV0dG9ucyB7XHJcbiAgICAvLyAuaG9tZS1wYWdlLWNvbnRhaW5lcntcclxuICAgIC8vICAgd2lkdGg6IDEyMHZ3O1xyXG4gICAgLy8gICBoZWlnaHQ6IDEyMHZoO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAvLyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg2LCAxZnIpO1xyXG4gICAgLy8gZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgMWZyKSAwLjFmciByZXBlYXQoMiwgMWZyKTtcclxuICAgIC8vIGdyaWQtY29sdW1uLWdhcDogMS41JTtcclxuICAgIC8vIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgLy8gbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7XHJcblxyXG4gICAgLy8gZ3JpZC1yb3ctZ2FwOiAxLjUlO1xyXG4gICAgLmhvbWUtcGFnZS1wYXNzLTEsXHJcbiAgICAuaG9tZS1wYWdlLXBhc3MtMiB7XHJcbiAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgaGVpZ2h0OiA1cHg7XHJcbiAgICAgIGZsZXgtZ3JvdzogMS41O1xyXG4gICAgfVxyXG4gICAgLmhvbWUtcGFnZS1wYXNzLTEge1xyXG4gICAgICAvLyBncmlkLWFyZWE6IDMgLyAxIC8gNCAvIDI7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxNTMwNWE7XHJcbiAgICB9XHJcbiAgICAuaG9tZS1wYWdlLXBhc3MtMiB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxNmIzYWI7XHJcbiAgICAgIC8vIGdyaWQtYXJlYTogMyAvIDYgLyA0IC8gNztcclxuICAgIH1cclxuICAgIC5ob21lLXBhZ2Utc3F1YXJlLTEsXHJcbiAgICAuaG9tZS1wYWdlLXNxdWFyZS0yIHtcclxuICAgICAgLy8gZ3JpZC1hcmVhOiAyIC8gMiAvIDUgLyA0O1xyXG4gICAgICBmbGV4LWdyb3c6IDMuNTtcclxuICAgICAgbWFyZ2luOiAyMHB4O1xyXG5cclxuICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgLy8gd2lkdGg6IGF1dG87XHJcbiAgICAgIHdpZHRoOiAwcHg7XHJcbiAgICAgIGhlaWdodDogNDE1cHg7XHJcbiAgICAgIHAge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnSGVlYm8nO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMzBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmhvbWUtcGFnZS1zcXVhcmUtMSB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICMxNTMwNWE7XHJcbiAgICB9XHJcblxyXG4gICAgLmhvbWUtcGFnZS1zcXVhcmUtMiB7XHJcbiAgICAgIC8vIGdyaWQtYXJlYTogMiAvIDQgLyA1IC8gNjtcclxuICAgICAgLy9mbGV4LWdyb3c6IDI7XHJcbiAgICAgIC8vbWFyZ2luOiAyMHB4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICAgICAgYmFja2dyb3VuZDogIzE2YjNhYjtcclxuICAgICAgLy9ib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAvL3dpZHRoOiBhdXRvO1xyXG4gICAgICAvL2hlaWdodDogNzB2aDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAuaG9tZS1wYWdlLWJ1dHRvbnMge1xyXG4gICAgLy8gLmhvbWUtcGFnZS1jb250YWluZXJ7XHJcbiAgICAvLyAgIHdpZHRoOiAxMjB2dztcclxuICAgIC8vICAgaGVpZ2h0OiAxMjB2aDtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBkaXNwbGF5OiBncmlkO1xyXG4gICAgLy8gZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNiwgMWZyKTtcclxuICAgIC8vIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDFmcikgMC4xZnIgcmVwZWF0KDIsIDFmcik7XHJcbiAgICAvLyBncmlkLWNvbHVtbi1nYXA6IDEuNSU7XHJcbiAgICAvLyBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIC8vIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIC8vIGdyaWQtcm93LWdhcDogMS41JTtcclxuICAgIC5ob21lLXBhZ2UtcGFzcy0xLFxyXG4gICAgLmhvbWUtcGFnZS1wYXNzLTIge1xyXG4gICAgICAvL2NvbnRlbnQ6ICcnO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgaGVpZ2h0OiAwcHg7XHJcbiAgICAgIGZsZXgtZ3JvdzogMS4zO1xyXG4gICAgfVxyXG4gICAgLy8gfVxyXG4gICAgLmhvbWUtcGFnZS1zcXVhcmUtMSxcclxuICAgIC5ob21lLXBhZ2Utc3F1YXJlLTIge1xyXG4gICAgICAvLyBncmlkLWFyZWE6IDIgLyAyIC8gNSAvIDQ7XHJcbiAgICAgIGZsZXgtZ3JvdzogMTA7XHJcbiAgICAgIG1hcmdpbjogMjBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgLy8gd2lkdGg6IGF1dG87XHJcbiAgICAgIHdpZHRoOiAwcHg7XHJcbiAgICAgIGhlaWdodDogNDE1cHg7XHJcbiAgICAgIHAge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnSGVlYm8nO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDc0cHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogNzRweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmhvbWUtcGFnZS1zcXVhcmUtMSB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICMxNTMwNWE7XHJcbiAgICB9XHJcblxyXG4gICAgLmhvbWUtcGFnZS1zcXVhcmUtMiB7XHJcbiAgICAgIC8vIGdyaWQtYXJlYTogMiAvIDQgLyA1IC8gNjtcclxuICAgICAgLy9mbGV4LWdyb3c6IDI7XHJcbiAgICAgIC8vbWFyZ2luOiAyMHB4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICAgICAgYmFja2dyb3VuZDogIzE2YjNhYjtcclxuICAgICAgLy9ib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAvL3dpZHRoOiBhdXRvO1xyXG4gICAgICAvL2hlaWdodDogNzB2aDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3ODZweCkge1xyXG4gIC5ob21lLXBhZ2UtYnV0dG9ucyB7XHJcbiAgICAvLyAuaG9tZS1wYWdlLWNvbnRhaW5lcntcclxuICAgIC8vICAgd2lkdGg6IDEyMHZ3O1xyXG4gICAgLy8gICBoZWlnaHQ6IDEyMHZoO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAvLyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg2LCAxZnIpO1xyXG4gICAgLy8gZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgMWZyKSAwLjFmciByZXBlYXQoMiwgMWZyKTtcclxuICAgIC8vIGdyaWQtY29sdW1uLWdhcDogMS41JTtcclxuICAgIC8vIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgLy8gbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgIC8vIGdyaWQtcm93LWdhcDogMS41JTtcclxuICAgIC5ob21lLXBhZ2UtcGFzcy0xLFxyXG4gICAgLmhvbWUtcGFnZS1wYXNzLTIge1xyXG4gICAgICAvL2NvbnRlbnQ6ICcnO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgaGVpZ2h0OiAwcHg7XHJcbiAgICAgIGZsZXgtZ3JvdzogMS4zO1xyXG4gICAgfVxyXG4gICAgLmhvbWUtcGFnZS1wYXNzLTEge1xyXG4gICAgICAvLyBncmlkLWFyZWE6IDMgLyAxIC8gNCAvIDI7XHJcbiAgICAgIGZsZXgtZ3JvdzogNTtcclxuICAgIH1cclxuICAgIC5ob21lLXBhZ2UtcGFzcy0yIHtcclxuICAgICAgZmxleC1ncm93OiA1O1xyXG4gICAgICAvLyBncmlkLWFyZWE6IDMgLyA2IC8gNCAvIDc7XHJcbiAgICB9XHJcbiAgICAuaG9tZS1wYWdlLXNxdWFyZS0xLFxyXG4gICAgLmhvbWUtcGFnZS1zcXVhcmUtMiB7XHJcbiAgICAgIC8vIGdyaWQtYXJlYTogMiAvIDIgLyA1IC8gNDtcclxuICAgICAgLy9mbGV4LWdyb3c6IDEyO1xyXG4gICAgICBtYXJnaW46IDIwcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgIGhlaWdodDogNzB2aDtcclxuICAgICAgcCB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdIZWVibyc7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNDVweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA0NXB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuaG9tZS1wYWdlLXNxdWFyZS0xIHtcclxuICAgICAgYmFja2dyb3VuZDogIzE1MzA1YTtcclxuICAgIH1cclxuICAgIC5ob21lLXBhZ2Utc3F1YXJlLTIge1xyXG4gICAgICAvLyBncmlkLWFyZWE6IDIgLyA0IC8gNSAvIDY7XHJcbiAgICAgIC8vIGZsZXgtZ3JvdzogMjtcclxuICAgICAgLy8gbWFyZ2luOiAyMHB4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICAgICAgYmFja2dyb3VuZDogIzE2YjNhYjtcclxuICAgICAgLy8gYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgLy8gd2lkdGg6IGF1dG87XHJcbiAgICAgIC8vIGhlaWdodDogNzB2aDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIC5ob21lLXBhZ2UtcGFzcy0xIHtcclxuLy8gICBjb250ZW50OiAnJztcclxuLy8gICBkaXNwbGF5OiBibG9jaztcclxuLy8gICBoZWlnaHQ6IDVweDtcclxuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTUzMDVhO1xyXG4vLyB9XHJcbi8vIC5ob21lLXBhZ2UtcGFzcy0yIHtcclxuLy8gICBjb250ZW50OiAnJztcclxuLy8gICBkaXNwbGF5OiBibG9jaztcclxuLy8gICBoZWlnaHQ6IDVweDtcclxuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTZiM2FiO1xyXG4vLyB9XHJcbi8vIC5ob21lLXBhZ2Utc3F1YXJlLTEge1xyXG4vLyAgIGJhY2tncm91bmQ6ICMxNTMwNWE7XHJcbi8vICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuLy8gICB3aWR0aDogYXV0bztcclxuLy8gICBoZWlnaHQ6IDcwdmg7XHJcbi5sb2dvLWhvbWUtcGFnZS1tZWV0aW5nLTEge1xyXG4gIC8vIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgLy8gcGFkZGluZy1sZWZ0OiAxNS44OXB4O1xyXG4gIC8vIHBhZGRpbmctdG9wOiAxNS44OXB4O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHBhZGRpbmctbGVmdDogM3B4O1xyXG4gIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIHdpZHRoOiA3MHB4O1xyXG59XHJcbi5ob21lLXBhZ2UtbG9nby1jb25uZWN0MmNhcmUge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICB3aWR0aDogNDAlO1xyXG59XHJcbi5hYWEge1xyXG4gIGZvbnQtZmFtaWx5OiAnSGVlYm8nO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBsZXR0ZXItc3BhY2luZzogMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG4ubWVldGluZy1idXR0b24tMSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi8vIHAge1xyXG4vLyAgIGZvbnQtZmFtaWx5OiAnSGVlYm8nO1xyXG4vLyAgIGZvbnQtc2l6ZTogMTZweDtcclxuLy8gICBjb2xvcjogI2ZmZmZmZjtcclxuLy8gICBsZXR0ZXItc3BhY2luZzogMDtcclxuLy8gICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbi8vICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuLy8gfVxyXG4vLyAuaG9tZS1wYWdlLXNxdWFyZS0yIHtcclxuLy8gICBiYWNrZ3JvdW5kOiAjMTZiM2FiO1xyXG4vLyAgIC8vYmFja2dyb3VuZDogcmVkO1xyXG4vLyAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbi8vICAgd2lkdGg6IGF1dG87XHJcbi8vICAgaGVpZ2h0OiA3MHZoO1xyXG4ubG9nby1ob21lLXBhZ2UtbWVldGluZy0yIHtcclxuICBmbG9hdDogbGVmdDtcclxuICBwYWRkaW5nLWxlZnQ6IDNweDtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICB3aWR0aDogNzBweDtcclxufVxyXG4uaG9tZS1wYWdlLWxvZ28tb3VyLWJyb3RoZXIge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICB3aWR0aDogNTAlO1xyXG4gIC8vIHdpZHRoOiAzMDBweDtcclxuICAvLyAuaWNvbm5ubiB7XHJcbiAgLy8gICB3aWR0aDogMjAwcHg7XHJcbiAgLy8gICBoZWlnaHQ6IDE1MHB4O1xyXG4gIC8vIH1cclxufVxyXG5cclxuLmhvbWUtcGFnZS1tZWV0aW5nIHtcclxuICBmb250LWZhbWlseTogJ0hlZWJvJztcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuLm1lZXRpbmctYnV0dG9uLTIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAuY29sb3ItYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNTMwNWE7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBwIHtcclxuLy8gICBmb250LWZhbWlseTogJ0hlZWJvJztcclxuLy8gICBmb250LXNpemU6IDE2cHg7XHJcbi8vICAgY29sb3I6ICNmZmZmZmY7XHJcbi8vICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbi8vICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4vLyAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4vLyAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbi8vIH1cclxuXHJcbi8vIHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcFxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuLmhvbWUtcGFnZS10b29sYm94LTEsXHJcbi5ob21lLXBhZ2UtdG9vbGJveC0yIHtcclxuICBmb250LWZhbWlseTogJ0FyYmVsJztcclxuICBmb250LXNpemU6IDMycHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuLy9wb3NpdGlvbjphYnNvbHV0ZTtcclxuXHJcbi5ob21lLXBhZ2UtdG9vbGJveC0xIHtcclxuICBjb2xvcjogIzE1MzA1YTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmhvbWUtcGFnZS10b29sYm94LTIge1xyXG4gIGNvbG9yOiAjMTZiM2FiO1xyXG59XHJcblxyXG4uaG9tZS1wYWdlLXRvb2xib3gtaWNvbnMge1xyXG4gIC8vdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIC8vZGlzcGxheTogZmxleDtcclxuICAvL2ZsZXgtd3JhcDogd3JhcDtcclxuICAvL21hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogMzIlO1xyXG4gIC50ZXh0LXRvLWljb24ge1xyXG4gICAgbWFyZ2luLXRvcDogLTMwcHg7XHJcbiAgfVxyXG4gIHN2ZyB7XHJcbiAgICAvL3BhZGRpbmctbGVmdDogNTAlO1xyXG4gICAgcGFkZGluZzogMHB4IDI1cHggMHB4IDI1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIC5ncm91cF81IHtcclxuICAgIHdpZHRoOiA5Ni43NXB4O1xyXG4gICAgaGVpZ2h0OiA3OHB4O1xyXG4gIH1cclxuICAuZ3JvdXBfMTYge1xyXG4gICAgd2lkdGg6IDk3LjQ0cHg7XHJcbiAgICBoZWlnaHQ6IDc4cHg7XHJcbiAgfVxyXG4gIC5ncm91cF8yMSB7XHJcbiAgICB3aWR0aDogMTEyLjA2cHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gIH1cclxuICAuYWJyb2VkLWljb24ge1xyXG4gICAgd2lkdGg6IDEwMy4xNnB4O1xyXG4gICAgaGVpZ2h0OiA2OC4yM3B4O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc4NnB4KSB7XHJcbiAgLmhvbWUtcGFnZS10b29sYm94LWljb25zIHtcclxuICAgIG1hcmdpbi1yaWdodDogMjUlO1xyXG4gIH1cclxufVxyXG5cclxuLmNvbmVjdC1mb3JtLXNtYWxsLWhlYWRpbmcge1xyXG4gIGZvbnQtZmFtaWx5OiAnQXJiZWwnO1xyXG4gIGZvbnQtc2l6ZTogMzJweDtcclxuICBjb2xvcjogIzE1MzA1YTtcclxuICBsZXR0ZXItc3BhY2luZzogMDtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4uY29uZWN0LWZvcm0tbWVkaXVtLWhlYWRpbmcge1xyXG4gIGZvbnQtZmFtaWx5OiAnQXJiZWwnO1xyXG4gIGZvbnQtc2l6ZTogMzJweDtcclxuICBjb2xvcjogIzE2YjNhYjtcclxuICBsZXR0ZXItc3BhY2luZzogMDtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcbi5iaWctaGVhZGluZyB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufSAvLyB3aWR0aDogMzQyLjQycHg7XHJcbi8vIGhlaWdodDogMXB4O1xyXG5cclxuLnRhbGtpbmctbGlmZSB7XHJcbiAgY29sb3I6ICMxNTMwNWE7XHJcbn1cclxuXHJcbi5wYXJ0aWNpcGF0aW9ucy1idXR0b25zIHtcclxuICBtYXJnaW4tdG9wOiA2MHB4O1xyXG59XHJcblxyXG4uc2VlLW1vcmUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgY29sb3I6IHJnYig0MiwgNDcsIDUzKTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgbWFyZ2luLWJvdHRvbTogNzBweDtcclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgYSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtaW4td2lkdGg6IDEwMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwMHB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6ICM4MTgxODE7XHJcblxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBhOmhvdmVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIH1cclxufVxyXG5cclxuLmdhbGxlcnktY29udGFpbmVyIHtcclxuICBwYWRkaW5nLXRvcDogOTBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTMwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gIC5nYWxsZXJ5LWltYWdlcyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblxyXG4gICAgLmltYWdlcy1yb3cge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgICAuaW1hZ2Uge1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG5cclxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwNDBweCkge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNpcmNsZS10b3AtcmlnaHQge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDQwJSwgLTQwJSk7XHJcblxyXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMzUlLCAtMzUlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jaXJjbGUtbWlkZGxlLWxlZnQge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogNTAlO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICB6LWluZGV4OiAtMTtcclxuXHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0yNSUsIC01MCUpO1xyXG5cclxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuY2lyY2xlLWJvdHRvbS1yaWdodCB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgei1pbmRleDogLTE7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDMwJSwgMzAlKTtcclxuXHJcbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICByaWdodDogdW5zZXQ7XHJcbiAgICAgICAgbGVmdDogLTUwJTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gLmRpdi1ob21lLXBhZ2UtZmxvdyB7XHJcbi8vICAgd2lkdGg6IDIzOHB4O1xyXG4vLyAgIGhlaWdodDogNjlweDtcclxuLy8gICBib3JkZXItcmFkaXVzOiAzNC41cHg7XHJcbi8vICAgZGlzcGxheTogZmxleDtcclxuLy8gICBmbGV4LWdyb3c6IDg7XHJcbi8vICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG4vLyAgIC8vY29sb3I6ICMxNmIzYWI7XHJcbi8vICAgLmhvbWUtcGFnZS1mbG93IHtcclxuLy8gICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4vLyAgICAgd2lkdGg6IDU3Ljc1cHg7XHJcbi8vICAgICBoZWlnaHQ6IDU3Ljc1cHg7XHJcbi8vICAgICBwYWRkaW5nOiA3cHg7XHJcbi8vICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbi8vICAgfVxyXG4vLyB9XHJcbi8vIC5zdGlja3ktYnV0dG9ue1xyXG5cclxuLy8gICBwb3NpdGlvbjogZml4ZWQ7XHJcbi8vICAgdG9wOjIwJTtcclxuLy8gICB6LWluZGV4OiAzO1xyXG4vLyB9XHJcbi5jb250YWN0LWZvcm0ge1xyXG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG59XHJcbiIsIi5ib2R5IHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL3N2Zy9TaGFwZS5zdmdcIik7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgd2lkdGg6IDI2MC4yMXB4O1xuICBoZWlnaHQ6IDU1MHB4O1xuICBvcGFjaXR5OiAwLjA3O1xufVxuXG4uaG9tZS1wYWdlLWZpcnN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xufVxuLmhvbWUtcGFnZS1maXJzdCAuaG9tZS1wYWdlLXRpdGxlLTEge1xuICBmbGV4LWdyb3c6IDY7XG4gIHBhZGRpbmctcmlnaHQ6IDEyMHB4O1xufVxuLmhvbWUtcGFnZS1maXJzdCAuaG9tZS1wYWdlLXRpdGxlLTIge1xuICBmbGV4LWdyb3c6IDQ7XG59XG4uaG9tZS1wYWdlLWZpcnN0IC5ob21lLXBhZ2UtdGl0bGUtMiB7XG4gIHBhZGRpbmctdG9wOiA2MHB4O1xufVxuXG4uZGl2LWNhbmRsZS1pY29uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmRpdi1jYW5kbGUtaWNvbiAuY2FuZGxlLWljb24ge1xuICB3aWR0aDogMjYwLjIxcHg7XG4gIGhlaWdodDogNTUwcHg7XG4gIG9wYWNpdHk6IDAuMDc7XG59XG5cbi5pbWFnZS0xIHtcbiAgLypncmlkLWFyZWE6IDEgLyAxIC8gMyAvIDM7Ki9cbiAgd2lkdGg6IGF1dG87XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3BhY2l0eTogMTtcbiAgLyogdmlzaWJpbGl0eTogdmlzaWJsZTsgKi9cbiAgd2lkdGg6IDQwMHB4O1xuICBoZWlnaHQ6IDQwMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5pbWFnZS0yIHtcbiAgb3BhY2l0eTogMTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAxNDBweDtcbiAgdG9wOiAxNDBweDtcbiAgd2lkdGg6IDQwMHB4O1xuICBoZWlnaHQ6IDQwMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogNXB4IHdoaXRlIHNvbGlkO1xuICAvKmdyaWQtYXJlYTogMiAvIDIgLyA0IC8gNDsqL1xufVxuXG4uaG9tZS1wYWdlLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgcGFkZGluZy1yaWdodDogNiU7XG59XG4uaG9tZS1wYWdlLXRpdGxlIC5ob21lLXBhZ2UtY29ubmVjdCB7XG4gIGNvbG9yOiAjMTZiM2FiO1xufVxuLmhvbWUtcGFnZS10aXRsZSAuaG9tZS1wYWdlLWxpZmUge1xuICBjb2xvcjogIzBmMmI1Njtcbn1cblxuLmhvbWUtcGFnZS10ZXh0IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzgxODE4MTtcbiAgZm9udC1mYW1pbHk6IFwiSGVlYm9cIjtcbiAgcGFkZGluZy1yaWdodDogNiU7XG59XG4uaG9tZS1wYWdlLXRleHQgLmhvbWUtcGFnZS1ib2xkIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uaG9tZS1wYWdlLXRleHQgLmhvbWUtcGFnZS1kb25hdGUge1xuICBjb2xvcjogIzE2YjNhYjtcbiAgbWFyZ2luLXJpZ2h0OiA2JTtcbn1cblxuLmhvbWUtcGFnZS1pY29ucy10b29sYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uaG9tZS1wYWdlLWljb25zLXRleHQge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjMTUzMDVhO1xuICBtYXJnaW4tdG9wOiAtMTVweDtcbn1cblxuLmFicm9hZCB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3ODZweCkge1xuICAuaG9tZS1wYWdlLWZpcnN0IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG5cbiAgLmhvbWUtcGFnZS1pbWFnZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0NDBweCkge1xuICAuaG9tZS1wYWdlLWJ1dHRvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gIH1cbiAgLmhvbWUtcGFnZS1idXR0b25zIC5ob21lLXBhZ2UtcGFzcy0xLFxuLmhvbWUtcGFnZS1idXR0b25zIC5ob21lLXBhZ2UtcGFzcy0yIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogNXB4O1xuICAgIGZsZXgtZ3JvdzogMS41O1xuICB9XG4gIC5ob21lLXBhZ2UtYnV0dG9ucyAuaG9tZS1wYWdlLXBhc3MtMSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE1MzA1YTtcbiAgfVxuICAuaG9tZS1wYWdlLWJ1dHRvbnMgLmhvbWUtcGFnZS1wYXNzLTIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNmIzYWI7XG4gIH1cbiAgLmhvbWUtcGFnZS1idXR0b25zIC5ob21lLXBhZ2Utc3F1YXJlLTEsXG4uaG9tZS1wYWdlLWJ1dHRvbnMgLmhvbWUtcGFnZS1zcXVhcmUtMiB7XG4gICAgZmxleC1ncm93OiAzLjU7XG4gICAgbWFyZ2luOiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgd2lkdGg6IDBweDtcbiAgICBoZWlnaHQ6IDQxNXB4O1xuICB9XG4gIC5ob21lLXBhZ2UtYnV0dG9ucyAuaG9tZS1wYWdlLXNxdWFyZS0xIHAsXG4uaG9tZS1wYWdlLWJ1dHRvbnMgLmhvbWUtcGFnZS1zcXVhcmUtMiBwIHtcbiAgICBmb250LWZhbWlseTogXCJIZWVib1wiO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcbiAgfVxuICAuaG9tZS1wYWdlLWJ1dHRvbnMgLmhvbWUtcGFnZS1zcXVhcmUtMSB7XG4gICAgYmFja2dyb3VuZDogIzE1MzA1YTtcbiAgfVxuICAuaG9tZS1wYWdlLWJ1dHRvbnMgLmhvbWUtcGFnZS1zcXVhcmUtMiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gICAgYmFja2dyb3VuZDogIzE2YjNhYjtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLmhvbWUtcGFnZS1idXR0b25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgLmhvbWUtcGFnZS1idXR0b25zIC5ob21lLXBhZ2UtcGFzcy0xLFxuLmhvbWUtcGFnZS1idXR0b25zIC5ob21lLXBhZ2UtcGFzcy0yIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IDBweDtcbiAgICBmbGV4LWdyb3c6IDEuMztcbiAgfVxuICAuaG9tZS1wYWdlLWJ1dHRvbnMgLmhvbWUtcGFnZS1zcXVhcmUtMSxcbi5ob21lLXBhZ2UtYnV0dG9ucyAuaG9tZS1wYWdlLXNxdWFyZS0yIHtcbiAgICBmbGV4LWdyb3c6IDEwO1xuICAgIG1hcmdpbjogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIHdpZHRoOiAwcHg7XG4gICAgaGVpZ2h0OiA0MTVweDtcbiAgfVxuICAuaG9tZS1wYWdlLWJ1dHRvbnMgLmhvbWUtcGFnZS1zcXVhcmUtMSBwLFxuLmhvbWUtcGFnZS1idXR0b25zIC5ob21lLXBhZ2Utc3F1YXJlLTIgcCB7XG4gICAgZm9udC1mYW1pbHk6IFwiSGVlYm9cIjtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgcGFkZGluZy1sZWZ0OiA3NHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDc0cHg7XG4gIH1cbiAgLmhvbWUtcGFnZS1idXR0b25zIC5ob21lLXBhZ2Utc3F1YXJlLTEge1xuICAgIGJhY2tncm91bmQ6ICMxNTMwNWE7XG4gIH1cbiAgLmhvbWUtcGFnZS1idXR0b25zIC5ob21lLXBhZ2Utc3F1YXJlLTIge1xuICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICAgIGJhY2tncm91bmQ6ICMxNmIzYWI7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzg2cHgpIHtcbiAgLmhvbWUtcGFnZS1idXR0b25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAuaG9tZS1wYWdlLWJ1dHRvbnMgLmhvbWUtcGFnZS1wYXNzLTEsXG4uaG9tZS1wYWdlLWJ1dHRvbnMgLmhvbWUtcGFnZS1wYXNzLTIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogMHB4O1xuICAgIGZsZXgtZ3JvdzogMS4zO1xuICB9XG4gIC5ob21lLXBhZ2UtYnV0dG9ucyAuaG9tZS1wYWdlLXBhc3MtMSB7XG4gICAgZmxleC1ncm93OiA1O1xuICB9XG4gIC5ob21lLXBhZ2UtYnV0dG9ucyAuaG9tZS1wYWdlLXBhc3MtMiB7XG4gICAgZmxleC1ncm93OiA1O1xuICB9XG4gIC5ob21lLXBhZ2UtYnV0dG9ucyAuaG9tZS1wYWdlLXNxdWFyZS0xLFxuLmhvbWUtcGFnZS1idXR0b25zIC5ob21lLXBhZ2Utc3F1YXJlLTIge1xuICAgIG1hcmdpbjogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIHdpZHRoOiA3MCU7XG4gICAgaGVpZ2h0OiA3MHZoO1xuICB9XG4gIC5ob21lLXBhZ2UtYnV0dG9ucyAuaG9tZS1wYWdlLXNxdWFyZS0xIHAsXG4uaG9tZS1wYWdlLWJ1dHRvbnMgLmhvbWUtcGFnZS1zcXVhcmUtMiBwIHtcbiAgICBmb250LWZhbWlseTogXCJIZWVib1wiO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBwYWRkaW5nLWxlZnQ6IDQ1cHg7XG4gICAgcGFkZGluZy1yaWdodDogNDVweDtcbiAgfVxuICAuaG9tZS1wYWdlLWJ1dHRvbnMgLmhvbWUtcGFnZS1zcXVhcmUtMSB7XG4gICAgYmFja2dyb3VuZDogIzE1MzA1YTtcbiAgfVxuICAuaG9tZS1wYWdlLWJ1dHRvbnMgLmhvbWUtcGFnZS1zcXVhcmUtMiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gICAgYmFja2dyb3VuZDogIzE2YjNhYjtcbiAgfVxufVxuLmxvZ28taG9tZS1wYWdlLW1lZXRpbmctMSB7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nLWxlZnQ6IDNweDtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgd2lkdGg6IDcwcHg7XG59XG5cbi5ob21lLXBhZ2UtbG9nby1jb25uZWN0MmNhcmUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgd2lkdGg6IDQwJTtcbn1cblxuLmFhYSB7XG4gIGZvbnQtZmFtaWx5OiBcIkhlZWJvXCI7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5tZWV0aW5nLWJ1dHRvbi0xIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubG9nby1ob21lLXBhZ2UtbWVldGluZy0yIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmctbGVmdDogM3B4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgd2lkdGg6IDcwcHg7XG59XG5cbi5ob21lLXBhZ2UtbG9nby1vdXItYnJvdGhlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB3aWR0aDogNTAlO1xufVxuXG4uaG9tZS1wYWdlLW1lZXRpbmcge1xuICBmb250LWZhbWlseTogXCJIZWVib1wiO1xuICBmb250LXNpemU6IDQwcHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4ubWVldGluZy1idXR0b24tMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5tZWV0aW5nLWJ1dHRvbi0yIC5jb2xvci1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTUzMDVhO1xufVxuXG4uaG9tZS1wYWdlLXRvb2xib3gtMSxcbi5ob21lLXBhZ2UtdG9vbGJveC0yIHtcbiAgZm9udC1mYW1pbHk6IFwiQXJiZWxcIjtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uaG9tZS1wYWdlLXRvb2xib3gtMSB7XG4gIGNvbG9yOiAjMTUzMDVhO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5ob21lLXBhZ2UtdG9vbGJveC0yIHtcbiAgY29sb3I6ICMxNmIzYWI7XG59XG5cbi5ob21lLXBhZ2UtdG9vbGJveC1pY29ucyB7XG4gIG1hcmdpbi1yaWdodDogMzIlO1xufVxuLmhvbWUtcGFnZS10b29sYm94LWljb25zIC50ZXh0LXRvLWljb24ge1xuICBtYXJnaW4tdG9wOiAtMzBweDtcbn1cbi5ob21lLXBhZ2UtdG9vbGJveC1pY29ucyBzdmcge1xuICBwYWRkaW5nOiAwcHggMjVweCAwcHggMjVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmhvbWUtcGFnZS10b29sYm94LWljb25zIC5ncm91cF81IHtcbiAgd2lkdGg6IDk2Ljc1cHg7XG4gIGhlaWdodDogNzhweDtcbn1cbi5ob21lLXBhZ2UtdG9vbGJveC1pY29ucyAuZ3JvdXBfMTYge1xuICB3aWR0aDogOTcuNDRweDtcbiAgaGVpZ2h0OiA3OHB4O1xufVxuLmhvbWUtcGFnZS10b29sYm94LWljb25zIC5ncm91cF8yMSB7XG4gIHdpZHRoOiAxMTIuMDZweDtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cbi5ob21lLXBhZ2UtdG9vbGJveC1pY29ucyAuYWJyb2VkLWljb24ge1xuICB3aWR0aDogMTAzLjE2cHg7XG4gIGhlaWdodDogNjguMjNweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3ODZweCkge1xuICAuaG9tZS1wYWdlLXRvb2xib3gtaWNvbnMge1xuICAgIG1hcmdpbi1yaWdodDogMjUlO1xuICB9XG59XG4uY29uZWN0LWZvcm0tc21hbGwtaGVhZGluZyB7XG4gIGZvbnQtZmFtaWx5OiBcIkFyYmVsXCI7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgY29sb3I6ICMxNTMwNWE7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmNvbmVjdC1mb3JtLW1lZGl1bS1oZWFkaW5nIHtcbiAgZm9udC1mYW1pbHk6IFwiQXJiZWxcIjtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBjb2xvcjogIzE2YjNhYjtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uYmlnLWhlYWRpbmcge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4udGFsa2luZy1saWZlIHtcbiAgY29sb3I6ICMxNTMwNWE7XG59XG5cbi5wYXJ0aWNpcGF0aW9ucy1idXR0b25zIHtcbiAgbWFyZ2luLXRvcDogNjBweDtcbn1cblxuLnNlZS1tb3JlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogIzJhMmYzNTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBtYXJnaW4tYm90dG9tOiA3MHB4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuc2VlLW1vcmUge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbn1cbi5zZWUtbW9yZSBhIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtaW4td2lkdGg6IDEwMHB4O1xuICBtYXJnaW4tbGVmdDogMjAwcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICM4MTgxODE7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5zZWUtbW9yZSBhIHtcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xuICB9XG59XG4uc2VlLW1vcmUgYTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4uZ2FsbGVyeS1jb250YWluZXIge1xuICBwYWRkaW5nLXRvcDogOTBweDtcbiAgcGFkZGluZy1ib3R0b206IDEzMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZ2FsbGVyeS1jb250YWluZXIgLmdhbGxlcnktaW1hZ2VzIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uZ2FsbGVyeS1jb250YWluZXIgLmdhbGxlcnktaW1hZ2VzIC5pbWFnZXMtcm93IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmdhbGxlcnktY29udGFpbmVyIC5nYWxsZXJ5LWltYWdlcyAuaW1hZ2VzLXJvdyAuaW1hZ2Uge1xuICBoZWlnaHQ6IGF1dG87XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAxMHB4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDQwcHgpIHtcbiAgLmdhbGxlcnktY29udGFpbmVyIC5nYWxsZXJ5LWltYWdlcyAuaW1hZ2VzLXJvdyAuaW1hZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgICBtYXJnaW46IDA7XG4gIH1cbn1cbi5nYWxsZXJ5LWNvbnRhaW5lciAuZ2FsbGVyeS1pbWFnZXMgLmNpcmNsZS10b3AtcmlnaHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDQwJSwgLTQwJSk7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5nYWxsZXJ5LWNvbnRhaW5lciAuZ2FsbGVyeS1pbWFnZXMgLmNpcmNsZS10b3AtcmlnaHQge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDM1JSwgLTM1JSk7XG4gIH1cbn1cbi5nYWxsZXJ5LWNvbnRhaW5lciAuZ2FsbGVyeS1pbWFnZXMgLmNpcmNsZS1taWRkbGUtbGVmdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IC0xO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMjUlLCAtNTAlKTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmdhbGxlcnktY29udGFpbmVyIC5nYWxsZXJ5LWltYWdlcyAuY2lyY2xlLW1pZGRsZS1sZWZ0IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4uZ2FsbGVyeS1jb250YWluZXIgLmdhbGxlcnktaW1hZ2VzIC5jaXJjbGUtYm90dG9tLXJpZ2h0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiAtMTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMzAlLCAzMCUpO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuZ2FsbGVyeS1jb250YWluZXIgLmdhbGxlcnktaW1hZ2VzIC5jaXJjbGUtYm90dG9tLXJpZ2h0IHtcbiAgICByaWdodDogdW5zZXQ7XG4gICAgbGVmdDogLTUwJTtcbiAgfVxufVxuXG4uY29udGFjdC1mb3JtIHtcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XG59Il19 */'
          ]
        });
        /*@__PURE__*/ (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            HomePageComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                args: [
                  {
                    selector: 'app-home-page',
                    templateUrl: './home-page.component.html',
                    styleUrls: ['./home-page.component.scss']
                  }
                ]
              }
            ],
            function() {
              return [
                { type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__['AuthService'] },
                { type: _shared_services_data_service__WEBPACK_IMPORTED_MODULE_4__['DataService'] },
                { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__['ToastrService'] }
              ];
            },
            null
          );
        })();

        /***/
      },

    /***/ './src/app/shared/components/contact-form/contact-form.component.ts':
      /*!**************************************************************************!*\
  !*** ./src/app/shared/components/contact-form/contact-form.component.ts ***!
  \**************************************************************************/
      /*! exports provided: ContactFormComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'ContactFormComponent', function() {
          return ContactFormComponent;
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/forms */ './node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js'
        );
        /* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../services/utils.service */ './src/app/shared/services/utils.service.ts'
        );
        /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @angular/common */ './node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js'
        );

        function ContactFormComponent_p_6_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'p', 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
              1,
              ' \u05D0\u05D7\u05D3 \u05D0\u05D5 \u05D9\u05D5\u05EA\u05E8 \u05DE\u05D4\u05E9\u05D3\u05D5\u05EA \u05D0\u05D9\u05E0\u05DD \u05EA\u05E7\u05D9\u05E0\u05D9\u05DD\n'
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }
        }
        class ContactFormComponent {
          constructor(fb, utilsService) {
            this.fb = fb;
            this.utilsService = utilsService;
            this.submit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            this.formInvalid = false;
          }
          ngOnInit() {
            this.form = this.fb.group({
              name: [
                this.user && this.user.profile ? `${this.user.profile.firstName} ${this.user.profile.lastName}` : '',
                [
                  _angular_forms__WEBPACK_IMPORTED_MODULE_1__['Validators'].required,
                  _angular_forms__WEBPACK_IMPORTED_MODULE_1__['Validators'].maxLength(30),
                  _angular_forms__WEBPACK_IMPORTED_MODULE_1__['Validators'].pattern(this.utilsService.namePattern)
                ]
              ],
              phoneNumber: [
                (this.user && this.user.profile && this.user.profile.phoneNumber) || '',
                [
                  _angular_forms__WEBPACK_IMPORTED_MODULE_1__['Validators'].required,
                  _angular_forms__WEBPACK_IMPORTED_MODULE_1__['Validators'].pattern(this.utilsService.phonePattern)
                ]
              ],
              email: [
                (this.user && this.user.profile && this.user.profile.email) || '',
                [
                  _angular_forms__WEBPACK_IMPORTED_MODULE_1__['Validators'].required,
                  _angular_forms__WEBPACK_IMPORTED_MODULE_1__['Validators'].email
                ]
              ],
              subject: [
                '',
                [
                  _angular_forms__WEBPACK_IMPORTED_MODULE_1__['Validators'].required,
                  _angular_forms__WEBPACK_IMPORTED_MODULE_1__['Validators'].maxLength(30),
                  _angular_forms__WEBPACK_IMPORTED_MODULE_1__['Validators'].pattern(this.utilsService.subjectPattern)
                ]
              ],
              body: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__['Validators'].maxLength(300)]]
            });
            this.form.valueChanges.subscribe(() => {
              this.formInvalid = false;
            });
          }
          get name() {
            return this.form.get('name');
          }
          get phoneNumber() {
            return this.form.get('phoneNumber');
          }
          get email() {
            return this.form.get('email');
          }
          get subject() {
            return this.form.get('subject');
          }
          get body() {
            return this.form.get('body');
          }
          onSubmit() {
            if (this.form.valid) {
              const parsedForm = {
                name: this.name.value.trim(),
                email: this.email.value,
                phoneNumber: this.utilsService.toInternationalPhoneNumber(this.phoneNumber.value.replace(/-/g, '')),
                subject: this.subject.value.trim(),
                body: this.body.value
              };
              this.submit.emit(parsedForm);
              this.form.reset();
            } else {
              this.formInvalid = true;
              this.form.markAllAsTouched();
            }
          }
        }
        ContactFormComponent.ɵfac = function ContactFormComponent_Factory(t) {
          return new (t || ContactFormComponent)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
              _angular_forms__WEBPACK_IMPORTED_MODULE_1__['FormBuilder']
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
              _services_utils_service__WEBPACK_IMPORTED_MODULE_2__['UtilsService']
            )
          );
        };
        ContactFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineComponent']({
          type: ContactFormComponent,
          selectors: [['app-contact-form']],
          inputs: { user: 'user', loading: 'loading' },
          outputs: { submit: 'submit' },
          decls: 10,
          vars: 12,
          consts: [
            [1, 'contact-form-fields', 3, 'formGroup'],
            ['formControlName', 'name', 'placeholder', '\u05E9\u05DD \u05DE\u05DC\u05D0*', 1, 'form-field'],
            ['formControlName', 'phoneNumber', 'placeholder', '\u05D8\u05DC\u05E4\u05D5\u05DF*', 1, 'form-field'],
            ['formControlName', 'email', 'placeholder', '\u05D0\u05D9\u05DE\u05D9\u05D9\u05DC*', 1, 'form-field'],
            [
              'formControlName',
              'subject',
              'placeholder',
              '\u05E0\u05D5\u05E9\u05D0 \u05E4\u05E0\u05D9\u05D9\u05D4*',
              1,
              'form-field'
            ],
            [
              'formControlName',
              'body',
              'placeholder',
              '\u05EA\u05D5\u05DB\u05DF \u05D4\u05D5\u05D3\u05E2\u05D4',
              1,
              'form-field',
              'body'
            ],
            ['class', 'form-invalid-message', 4, 'ngIf'],
            [1, 'site-button', 'primary-button', 'contact-send-button', 3, 'click'],
            [1, 'form-invalid-message']
          ],
          template: function ContactFormComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'form', 0);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](1, 'input', 1);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](2, 'input', 2);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](3, 'input', 3);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](4, 'input', 4);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](5, 'textarea', 5);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                6,
                ContactFormComponent_p_6_Template,
                2,
                0,
                'p',
                6
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](7, 'button', 7);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'click',
                function ContactFormComponent_Template_button_click_7_listener() {
                  return ctx.onSubmit();
                }
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](8, ' \u05E9\u05DC\u05D7\n');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](9, 'br');
            }
            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('formGroup', ctx.form);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵclassProp']('invalid', !ctx.name.valid && ctx.name.touched);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵclassProp'](
                'invalid',
                !ctx.phoneNumber.valid && ctx.phoneNumber.touched
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵclassProp'](
                'invalid',
                !ctx.email.valid && ctx.email.touched
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵclassProp'](
                'invalid',
                !ctx.subject.valid && ctx.subject.touched
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngIf', ctx.formInvalid);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵclassProp']('disabled', !ctx.form.valid || ctx.loading);
            }
          },
          directives: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__['ɵangular_packages_forms_forms_y'],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__['NgControlStatusGroup'],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__['FormGroupDirective'],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__['DefaultValueAccessor'],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__['NgControlStatus'],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__['FormControlName'],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__['NgIf']
          ],
          styles: [
            '.contact-form-fields[_ngcontent-%COMP%] {\n  max-width: 1000px;\n  padding: 0 50px;\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n@media only screen and (max-width: 768px) {\n  .contact-form-fields[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n}\n@media only screen and (max-width: 768px) {\n  .contact-form-fields[_ngcontent-%COMP%]   textarea.form-field[_ngcontent-%COMP%] {\n    height: 170px;\n  }\n}\n.contact-form-fields[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%] {\n  margin-left: 15px;\n  margin-right: 15px;\n  margin-bottom: 25px;\n}\n@media only screen and (max-width: 768px) {\n  .contact-form-fields[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%] {\n    width: 45%;\n    margin-left: 7px;\n    margin-right: 7px;\n    margin-bottom: 14px;\n  }\n}\n@media only screen and (max-width: 768px) {\n  .contact-form-fields[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%] {\n    width: calc(100% - 20px);\n  }\n}\n.contact-send-button[_ngcontent-%COMP%] {\n  width: 250px;\n  height: 55px;\n  font-size: 36px;\n  font-family: "arbel";\n  margin-top: 15px;\n  background-color: #16b3ab;\n  text-align: center;\n}\n@media only screen and (max-width: 768px) {\n  .contact-send-button[_ngcontent-%COMP%] {\n    width: 145px;\n    height: 45px;\n    font-size: 25px;\n    margin-top: 7px;\n  }\n}\n.address[_ngcontent-%COMP%] {\n  margin-right: 100px;\n  color: #999999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY29udGFjdC1mb3JtL0M6XFxVc2Vyc1xcVGVoaWxhXFxsYXN0XFxvdXJCcm9cXG91ci1icm90aGVycy13ZWIvc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50c1xcY29udGFjdC1mb3JtXFxjb250YWN0LWZvcm0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2NvbnRhY3QtZm9ybS9jb250YWN0LWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FDQ0Y7QURDRTtFQVBGO0lBUUksVUFBQTtFQ0VGO0FBQ0Y7QURDSTtFQURGO0lBRUksYUFBQTtFQ0VKO0FBQ0Y7QURDRTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0NKO0FEQ0k7RUFMRjtJQU1JLFVBQUE7SUFDQSxnQkFBQTtJQUNBLGlCQUFBO0lBQ0EsbUJBQUE7RUNFSjtBQUNGO0FERUk7RUFERjtJQUVJLHdCQUFBO0VDQ0o7QUFDRjtBREdBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUNBRjtBREVFO0VBVEY7SUFVSSxZQUFBO0lBQ0EsWUFBQTtJQUNBLGVBQUE7SUFDQSxlQUFBO0VDQ0Y7QUFDRjtBRENBO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9jb250YWN0LWZvcm0vY29udGFjdC1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhY3QtZm9ybS1maWVsZHMge1xyXG4gIG1heC13aWR0aDogMTAwMHB4O1xyXG4gIHBhZGRpbmc6IDAgNTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcblxyXG4gIHRleHRhcmVhLmZvcm0tZmllbGQge1xyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICBoZWlnaHQ6IDE3MHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmZvcm0tZmllbGQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG5cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgd2lkdGg6IDQ1JTtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDdweDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiA3cHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDE0cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYm9keSB7XHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5jb250YWN0LXNlbmQtYnV0dG9uIHtcclxuICB3aWR0aDogMjUwcHg7XHJcbiAgaGVpZ2h0OiA1NXB4O1xyXG4gIGZvbnQtc2l6ZTogMzZweDtcclxuICBmb250LWZhbWlseTogJ2FyYmVsJztcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNmIzYWI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICB3aWR0aDogMTQ1cHg7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA3cHg7XHJcbiAgfVxyXG59XHJcbi5hZGRyZXNzIHtcclxuICBtYXJnaW4tcmlnaHQ6IDEwMHB4O1xyXG4gIGNvbG9yOiAjOTk5OTk5O1xyXG59XHJcbiIsIi5jb250YWN0LWZvcm0tZmllbGRzIHtcbiAgbWF4LXdpZHRoOiAxMDAwcHg7XG4gIHBhZGRpbmc6IDAgNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmNvbnRhY3QtZm9ybS1maWVsZHMge1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmNvbnRhY3QtZm9ybS1maWVsZHMgdGV4dGFyZWEuZm9ybS1maWVsZCB7XG4gICAgaGVpZ2h0OiAxNzBweDtcbiAgfVxufVxuLmNvbnRhY3QtZm9ybS1maWVsZHMgLmZvcm0tZmllbGQge1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuY29udGFjdC1mb3JtLWZpZWxkcyAuZm9ybS1maWVsZCB7XG4gICAgd2lkdGg6IDQ1JTtcbiAgICBtYXJnaW4tbGVmdDogN3B4O1xuICAgIG1hcmdpbi1yaWdodDogN3B4O1xuICAgIG1hcmdpbi1ib3R0b206IDE0cHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmNvbnRhY3QtZm9ybS1maWVsZHMgLmJvZHkge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcbiAgfVxufVxuXG4uY29udGFjdC1zZW5kLWJ1dHRvbiB7XG4gIHdpZHRoOiAyNTBweDtcbiAgaGVpZ2h0OiA1NXB4O1xuICBmb250LXNpemU6IDM2cHg7XG4gIGZvbnQtZmFtaWx5OiBcImFyYmVsXCI7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNmIzYWI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmNvbnRhY3Qtc2VuZC1idXR0b24ge1xuICAgIHdpZHRoOiAxNDVweDtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIG1hcmdpbi10b3A6IDdweDtcbiAgfVxufVxuXG4uYWRkcmVzcyB7XG4gIG1hcmdpbi1yaWdodDogMTAwcHg7XG4gIGNvbG9yOiAjOTk5OTk5O1xufSJdfQ== */'
          ],
          changeDetection: 0
        });
        /*@__PURE__*/ (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            ContactFormComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                args: [
                  {
                    selector: 'app-contact-form',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__['ChangeDetectionStrategy'].OnPush,
                    templateUrl: './contact-form.component.html',
                    styleUrls: ['./contact-form.component.scss']
                  }
                ]
              }
            ],
            function() {
              return [
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__['FormBuilder'] },
                { type: _services_utils_service__WEBPACK_IMPORTED_MODULE_2__['UtilsService'] }
              ];
            },
            {
              user: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input']
                }
              ],
              loading: [
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

    /***/ './src/app/shared/components/contact-form/contact-form.module.ts':
      /*!***********************************************************************!*\
  !*** ./src/app/shared/components/contact-form/contact-form.module.ts ***!
  \***********************************************************************/
      /*! exports provided: ContactFormModule */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'ContactFormModule', function() {
          return ContactFormModule;
        });
        /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/common */ './node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js'
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */ var _contact_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./contact-form.component */ './src/app/shared/components/contact-form/contact-form.component.ts'
        );
        /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @angular/forms */ './node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js'
        );

        class ContactFormModule {}
        ContactFormModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵdefineNgModule']({
          type: ContactFormModule
        });
        ContactFormModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵdefineInjector']({
          factory: function ContactFormModule_Factory(t) {
            return new (t || ContactFormModule)();
          },
          imports: [
            [
              _angular_forms__WEBPACK_IMPORTED_MODULE_3__['ReactiveFormsModule'],
              _angular_common__WEBPACK_IMPORTED_MODULE_0__['CommonModule']
            ]
          ]
        });
        (function() {
          (typeof ngJitMode === 'undefined' || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵsetNgModuleScope'](ContactFormModule, {
              declarations: [_contact_form_component__WEBPACK_IMPORTED_MODULE_2__['ContactFormComponent']],
              imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__['ReactiveFormsModule'],
                _angular_common__WEBPACK_IMPORTED_MODULE_0__['CommonModule']
              ],
              exports: [_contact_form_component__WEBPACK_IMPORTED_MODULE_2__['ContactFormComponent']]
            });
        })();
        /*@__PURE__*/ (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵsetClassMetadata'](
            ContactFormModule,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__['NgModule'],
                args: [
                  {
                    declarations: [_contact_form_component__WEBPACK_IMPORTED_MODULE_2__['ContactFormComponent']],
                    exports: [_contact_form_component__WEBPACK_IMPORTED_MODULE_2__['ContactFormComponent']],
                    imports: [
                      _angular_forms__WEBPACK_IMPORTED_MODULE_3__['ReactiveFormsModule'],
                      _angular_common__WEBPACK_IMPORTED_MODULE_0__['CommonModule']
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

    /***/ './src/app/shared/components/flip-card/filp-card.module.ts':
      /*!*****************************************************************!*\
  !*** ./src/app/shared/components/flip-card/filp-card.module.ts ***!
  \*****************************************************************/
      /*! exports provided: FilpCardModule */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'FilpCardModule', function() {
          return FilpCardModule;
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */ var _flip_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./flip-card.component */ './src/app/shared/components/flip-card/flip-card.component.ts'
        );
        /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/common */ './node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js'
        );

        class FilpCardModule {}
        FilpCardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineNgModule']({ type: FilpCardModule });
        FilpCardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineInjector']({
          factory: function FilpCardModule_Factory(t) {
            return new (t || FilpCardModule)();
          },
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__['CommonModule']]]
        });
        (function() {
          (typeof ngJitMode === 'undefined' || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵsetNgModuleScope'](FilpCardModule, {
              declarations: [_flip_card_component__WEBPACK_IMPORTED_MODULE_1__['FlipCardComponent']],
              imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__['CommonModule']],
              exports: [_flip_card_component__WEBPACK_IMPORTED_MODULE_1__['FlipCardComponent']]
            });
        })();
        /*@__PURE__*/ (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            FilpCardModule,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'],
                args: [
                  {
                    declarations: [_flip_card_component__WEBPACK_IMPORTED_MODULE_1__['FlipCardComponent']],
                    exports: [_flip_card_component__WEBPACK_IMPORTED_MODULE_1__['FlipCardComponent']],
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__['CommonModule']]
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

    /***/ './src/app/shared/components/flip-card/flip-card.component.ts':
      /*!********************************************************************!*\
  !*** ./src/app/shared/components/flip-card/flip-card.component.ts ***!
  \********************************************************************/
      /*! exports provided: FlipCardComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'FlipCardComponent', function() {
          return FlipCardComponent;
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

        function FlipCardComponent_ng_container_3_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementContainer'](0);
          }
        }
        const _c0 = function(a0, a1) {
          return { disabled: a0, hover: a1 };
        };
        class FlipCardComponent {
          constructor(elementRef, router) {
            this.elementRef = elementRef;
            this.router = router;
            this.hover = false;
          }
          clickout(event) {
            this.hover = !!this.elementRef.nativeElement.contains(event.target);
          }
          moveToPage() {
            this.router.navigate([this.backButtonUrl]);
          }
        }
        FlipCardComponent.ɵfac = function FlipCardComponent_Factory(t) {
          return new (t || FlipCardComponent)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef']
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
              _angular_router__WEBPACK_IMPORTED_MODULE_1__['Router']
            )
          );
        };
        FlipCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineComponent']({
          type: FlipCardComponent,
          selectors: [['app-flip-card']],
          hostBindings: function FlipCardComponent_HostBindings(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'click',
                function FlipCardComponent_click_HostBindingHandler($event) {
                  return ctx.clickout($event);
                },
                false,
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵresolveDocument']
              );
            }
          },
          inputs: {
            frontImage: 'frontImage',
            frontTitle: 'frontTitle',
            backText: 'backText',
            backButtonText: 'backButtonText',
            backButtonUrl: 'backButtonUrl',
            disabled: 'disabled'
          },
          decls: 13,
          vars: 8,
          consts: [
            [1, 'card-container', 3, 'ngClass'],
            [1, 'card-front'],
            [1, 'card-front-img'],
            [4, 'ngTemplateOutlet'],
            [1, 'front-title'],
            [1, 'card-back'],
            [1, 'back-text'],
            [1, 'back-button', 3, 'click'],
            [1, 'button-arrows'],
            [1, 'fas', 'fa-angle-double-left']
          ],
          template: function FlipCardComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div', 0);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](1, 'div', 1);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](2, 'div', 2);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                3,
                FlipCardComponent_ng_container_3_Template,
                1,
                0,
                'ng-container',
                3
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](4, 'div', 4);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](5);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](6, 'div', 5);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](7, 'div', 6);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](8);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](9, 'a', 7);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'click',
                function FlipCardComponent_Template_a_click_9_listener() {
                  return ctx.moveToPage();
                }
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](10);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](11, 'span', 8);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](12, 'i', 9);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            }
            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
                'ngClass',
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpureFunction2'](5, _c0, ctx.disabled, ctx.hover)
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](3);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngTemplateOutlet', ctx.frontImage);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate1'](' ', ctx.frontTitle, ' ');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](3);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate1'](' ', ctx.backText, ' ');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate1'](' ', ctx.backButtonText, ' ');
            }
          },
          directives: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__['NgClass'],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__['NgTemplateOutlet']
          ],
          styles: [
            '.card-container[_ngcontent-%COMP%] {\n  width: 230px;\n  height: 300px;\n  perspective: 800px;\n  transform-style: preserve-3d;\n}\n.card-container[_ngcontent-%COMP%]:not(.disabled):hover   .card-front[_ngcontent-%COMP%], .card-container[_ngcontent-%COMP%]:not(.disabled).hover   .card-front[_ngcontent-%COMP%] {\n  transform: rotateY(180deg);\n}\n.card-container[_ngcontent-%COMP%]:not(.disabled):hover   .card-back[_ngcontent-%COMP%], .card-container[_ngcontent-%COMP%]:not(.disabled).hover   .card-back[_ngcontent-%COMP%] {\n  transform: rotateY(360deg);\n}\n.card-container[_ngcontent-%COMP%]   .card-front[_ngcontent-%COMP%] {\n  transition: all 1s;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border-width: 2px;\n  border-color: #00a099;\n  border-style: solid;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 40px 20px 35px 20px;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  border-radius: 5px;\n}\n.card-container[_ngcontent-%COMP%]   .card-front[_ngcontent-%COMP%]   .card-front-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 155px;\n}\n.card-container[_ngcontent-%COMP%]   .card-front[_ngcontent-%COMP%]   .front-title[_ngcontent-%COMP%] {\n  padding: 0 30px;\n  font-size: 28px;\n  color: #00736d;\n  text-align: center;\n}\n.card-container[_ngcontent-%COMP%]   .card-back[_ngcontent-%COMP%] {\n  transition: all 1s;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #00a099;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 64px 20px 64px 20px;\n  transform: rotateY(180deg);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}\n.card-container[_ngcontent-%COMP%]   .card-back[_ngcontent-%COMP%]   .back-text[_ngcontent-%COMP%] {\n  font-size: 22px;\n  text-align: center;\n  color: white;\n  width: 160px;\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  line-height: 1.3;\n}\n.card-container[_ngcontent-%COMP%]   .card-back[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin-top: 35px;\n  background-color: white;\n  font-size: 20px;\n  color: #00a099;\n  padding: 8px 19px;\n}\n.card-container.disabled[_ngcontent-%COMP%] {\n  cursor: not-allowed;\n}\n.card-container.disabled[_ngcontent-%COMP%]   .card-front[_ngcontent-%COMP%] {\n  border-color: grey;\n}\n.card-container.disabled[_ngcontent-%COMP%]   .card-front[_ngcontent-%COMP%]   .front-title[_ngcontent-%COMP%] {\n  color: grey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZmxpcC1jYXJkL0M6XFxVc2Vyc1xcVGVoaWxhXFxsYXN0XFxvdXJCcm9cXG91ci1icm90aGVycy13ZWIvc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50c1xcZmxpcC1jYXJkXFxmbGlwLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2ZsaXAtY2FyZC9mbGlwLWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7QUNDRjtBREdJO0VBQ0UsMEJBQUE7QUNETjtBRElJO0VBQ0UsMEJBQUE7QUNGTjtBRE1FO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0Esa0JBQUE7QUNKSjtBRE1JO0VBQ0UsV0FBQTtFQUNBLGFBQUE7QUNKTjtBRE9JO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNMTjtBRFNFO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtBQ1BKO0FEU0k7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDUE47QURVSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ1JOO0FEWUU7RUFDRSxtQkFBQTtBQ1ZKO0FEWUk7RUFDRSxrQkFBQTtBQ1ZOO0FEV007RUFDRSxXQUFBO0FDVFIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9mbGlwLWNhcmQvZmxpcC1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtY29udGFpbmVyIHtcclxuICB3aWR0aDogMjMwcHg7XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxuICBwZXJzcGVjdGl2ZTogODAwcHg7XHJcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuXHJcbiAgJjpub3QoLmRpc2FibGVkKTpob3ZlcixcclxuICAmOm5vdCguZGlzYWJsZWQpLmhvdmVyIHtcclxuICAgIC5jYXJkLWZyb250IHtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQtYmFjayB7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgzNjBkZWcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNhcmQtZnJvbnQge1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDFzO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYigwLCAxNjAsIDE1Myk7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiA0MHB4IDIwcHggMzVweCAyMHB4O1xyXG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG5cclxuICAgIC5jYXJkLWZyb250LWltZyB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDE1NXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5mcm9udC10aXRsZSB7XHJcbiAgICAgIHBhZGRpbmc6IDAgMzBweDtcclxuICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgICBjb2xvcjogcmdiKDAsIDExNSwgMTA5KTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNhcmQtYmFjayB7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMXM7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMTYwLCAxNTMpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiA2NHB4IDIwcHggNjRweCAyMHB4O1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XHJcbiAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcblxyXG4gICAgLmJhY2stdGV4dCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgICB3aWR0aDogMTYwcHg7XHJcbiAgICAgIGZsZXg6IDE7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBsaW5lLWhlaWdodDogMS4zO1xyXG4gICAgfVxyXG5cclxuICAgIC5iYWNrLWJ1dHRvbiB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgbWFyZ2luLXRvcDogMzVweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIGNvbG9yOiByZ2IoMCwgMTYwLCAxNTMpO1xyXG4gICAgICBwYWRkaW5nOiA4cHggMTlweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuZGlzYWJsZWQge1xyXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuXHJcbiAgICAuY2FyZC1mcm9udCB7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogZ3JleTtcclxuICAgICAgLmZyb250LXRpdGxlIHtcclxuICAgICAgICBjb2xvcjogZ3JleTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIuY2FyZC1jb250YWluZXIge1xuICB3aWR0aDogMjMwcHg7XG4gIGhlaWdodDogMzAwcHg7XG4gIHBlcnNwZWN0aXZlOiA4MDBweDtcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbn1cbi5jYXJkLWNvbnRhaW5lcjpub3QoLmRpc2FibGVkKTpob3ZlciAuY2FyZC1mcm9udCwgLmNhcmQtY29udGFpbmVyOm5vdCguZGlzYWJsZWQpLmhvdmVyIC5jYXJkLWZyb250IHtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG59XG4uY2FyZC1jb250YWluZXI6bm90KC5kaXNhYmxlZCk6aG92ZXIgLmNhcmQtYmFjaywgLmNhcmQtY29udGFpbmVyOm5vdCguZGlzYWJsZWQpLmhvdmVyIC5jYXJkLWJhY2sge1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMzYwZGVnKTtcbn1cbi5jYXJkLWNvbnRhaW5lciAuY2FyZC1mcm9udCB7XG4gIHRyYW5zaXRpb246IGFsbCAxcztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci13aWR0aDogMnB4O1xuICBib3JkZXItY29sb3I6ICMwMGEwOTk7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiA0MHB4IDIwcHggMzVweCAyMHB4O1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5jYXJkLWNvbnRhaW5lciAuY2FyZC1mcm9udCAuY2FyZC1mcm9udC1pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxNTVweDtcbn1cbi5jYXJkLWNvbnRhaW5lciAuY2FyZC1mcm9udCAuZnJvbnQtdGl0bGUge1xuICBwYWRkaW5nOiAwIDMwcHg7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgY29sb3I6ICMwMDczNmQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jYXJkLWNvbnRhaW5lciAuY2FyZC1iYWNrIHtcbiAgdHJhbnNpdGlvbjogYWxsIDFzO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYTA5OTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDY0cHggMjBweCA2NHB4IDIwcHg7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG59XG4uY2FyZC1jb250YWluZXIgLmNhcmQtYmFjayAuYmFjay10ZXh0IHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDE2MHB4O1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDEuMztcbn1cbi5jYXJkLWNvbnRhaW5lciAuY2FyZC1iYWNrIC5iYWNrLWJ1dHRvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLXRvcDogMzVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICMwMGEwOTk7XG4gIHBhZGRpbmc6IDhweCAxOXB4O1xufVxuLmNhcmQtY29udGFpbmVyLmRpc2FibGVkIHtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cbi5jYXJkLWNvbnRhaW5lci5kaXNhYmxlZCAuY2FyZC1mcm9udCB7XG4gIGJvcmRlci1jb2xvcjogZ3JleTtcbn1cbi5jYXJkLWNvbnRhaW5lci5kaXNhYmxlZCAuY2FyZC1mcm9udCAuZnJvbnQtdGl0bGUge1xuICBjb2xvcjogZ3JleTtcbn0iXX0= */'
          ]
        });
        /*@__PURE__*/ (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            FlipCardComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                args: [
                  {
                    selector: 'app-flip-card',
                    templateUrl: './flip-card.component.html',
                    styleUrls: ['./flip-card.component.scss']
                  }
                ]
              }
            ],
            function() {
              return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef'] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__['Router'] }
              ];
            },
            {
              frontImage: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input']
                }
              ],
              frontTitle: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input']
                }
              ],
              backText: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input']
                }
              ],
              backButtonText: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input']
                }
              ],
              backButtonUrl: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input']
                }
              ],
              disabled: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input']
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

    /***/ './src/app/shared/components/participations-buttons/host-button/host-button.component.ts':
      /*!***********************************************************************************************!*\
  !*** ./src/app/shared/components/participations-buttons/host-button/host-button.component.ts ***!
  \***********************************************************************************************/
      /*! exports provided: HostButtonComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'HostButtonComponent', function() {
          return HostButtonComponent;
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */ var _services_participations_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../../services/participations.service */ './src/app/shared/services/participations.service.ts'
        );
        /* harmony import */ var _flip_card_flip_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../flip-card/flip-card.component */ './src/app/shared/components/flip-card/flip-card.component.ts'
        );

        function HostButtonComponent_ng_template_1_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnamespaceSVG']();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'svg', 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](1, 'title');
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](2, 'Group 9');
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](3, 'g', 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](4, 'g', 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](5, 'g', 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](6, 'path', 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](7, 'path', 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }
          if (rf & 2) {
            const ctx_r150 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵclassProp'](
              'disabled',
              ctx_r150.loading || !ctx_r150.participationService.isUserCanHost(ctx_r150.user)
            );
          }
        }
        class HostButtonComponent {
          constructor(participationService) {
            this.participationService = participationService;
          }
        }
        HostButtonComponent.ɵfac = function HostButtonComponent_Factory(t) {
          return new (t || HostButtonComponent)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
              _services_participations_service__WEBPACK_IMPORTED_MODULE_1__['ParticipationsService']
            )
          );
        };
        HostButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineComponent']({
          type: HostButtonComponent,
          selectors: [['app-host-button']],
          inputs: { user: 'user', loading: 'loading' },
          decls: 3,
          vars: 6,
          consts: [
            [3, 'disabled', 'frontImage', 'frontTitle', 'backText', 'backButtonText', 'backButtonUrl'],
            ['frontImage', ''],
            [
              'width',
              '100%',
              'height',
              '100%',
              'viewBox',
              '0 0 58 59',
              'version',
              '1.1',
              'xmlns',
              'http://www.w3.org/2000/svg',
              0,
              'xmlns',
              'xlink',
              'http://www.w3.org/1999/xlink',
              1,
              'image'
            ],
            ['id', 'Styleguide', 'stroke', 'none', 'stroke-width', '1', 'fill', 'none', 'fill-rule', 'evenodd'],
            ['id', 'Icons', 'transform', 'translate(-147.000000, -141.000000)', 'fill-rule', 'nonzero'],
            ['id', 'Group-9', 'transform', 'translate(147.261487, 141.689766)'],
            [
              'd',
              'M35.9192538,3.55271368e-14 C42.2396715,3.55271368e-14 47.3633824,5.12371087 47.3633824,11.4441285 C47.3633824,15.02013 45.723214,18.2130497 43.1541187,20.3116459 L45.9348626,20.3104793 C51.6249739,20.3104793 56.2540442,24.8533358 56.3930128,30.5099881 L56.396226,30.7718427 L56.396226,53.1277519 C56.396226,54.1566931 55.5968594,54.9989322 54.5852631,55.0673325 L54.4521604,55.0718175 L35.963569,55.0718175 L35.963569,52.4940397 L53.8180665,52.493903 L53.8184483,30.7718427 C53.8184483,26.4942443 50.4116061,23.0123565 46.1632439,22.8915016 L45.9348626,22.8882571 L27.5415869,22.8882571 L27.5415869,20.3104793 L28.6840343,20.3114714 C28.5346932,20.1894328 28.3881686,20.0634312 28.2446109,19.9335476 L28.0154593,19.7205103 L29.7960151,17.8564932 C31.4353406,19.422418 33.6058376,20.3104793 35.9192538,20.3104793 C40.8160041,20.3104793 44.7856046,16.3408788 44.7856046,11.4441285 C44.7856046,6.54737823 40.8160041,2.57777778 35.9192538,2.57777778 C31.5418579,2.57777778 27.8473753,5.76898605 27.1651397,10.0282056 L27.1303515,10.2659142 L24.5749376,9.92709542 C25.3247347,4.27203047 30.1639475,3.55271368e-14 35.9192538,3.55271368e-14 Z',
              'id',
              'Combined-Shape',
              'fill',
              '#16B3AB',
              1,
              'person'
            ],
            [
              'd',
              'M18.3691124,5.66901487 C24.4300015,5.66901487 29.343323,10.5823363 29.343323,16.6432255 C29.343323,20.4784667 27.3759447,23.8542022 24.3953476,25.8162723 L24.7085951,25.8164396 C31.3523761,25.8164396 36.7382248,31.2022882 36.7382248,37.8460692 L36.7382248,57.1407407 C36.7382248,57.6152965 36.3535213,58 35.8789655,58 L0.859259259,58 C0.384703474,58 4.61852778e-14,57.6152965 4.61852778e-14,57.1407407 L4.61852778e-14,37.8460692 C4.61852778e-14,31.2022882 5.38584864,25.8164396 12.0296296,25.8164396 L12.3428772,25.8162723 C9.36228009,23.8542022 7.3949018,20.4784667 7.3949018,16.6432255 C7.3949018,10.5823363 12.3082232,5.66901487 18.3691124,5.66901487 Z M24.7085951,28.3942174 L12.0296296,28.3942174 C6.89237494,28.3942174 2.7123677,32.4926809 2.5809634,37.5982524 L2.57777778,37.8460692 L2.5769998,55.4213993 L34.1599331,55.4213993 L34.160447,37.8460692 C34.160447,32.7088145 30.0619835,28.5288073 24.9564119,28.397403 L24.7085951,28.3942174 Z M18.3691124,8.24679265 C13.7318906,8.24679265 9.97267958,12.0060037 9.97267958,16.6432255 C9.97267958,21.2804473 13.7318906,25.0396583 18.3691124,25.0396583 C23.0063342,25.0396583 26.7655452,21.2804473 26.7655452,16.6432255 C26.7655452,12.0060037 23.0063342,8.24679265 18.3691124,8.24679265 Z',
              'id',
              'Combined-Shape',
              'fill',
              '#082551',
              1,
              'person',
              'person-rear'
            ]
          ],
          template: function HostButtonComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](0, 'app-flip-card', 0);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                1,
                HostButtonComponent_ng_template_1_Template,
                8,
                2,
                'ng-template',
                null,
                1,
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplateRefExtractor']
              );
            }
            if (rf & 2) {
              const _r149 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵreference'](2);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
                'disabled',
                ctx.loading || !ctx.participationService.isUserCanHost(ctx.user)
              )('frontImage', _r149)(
                'frontTitle',
                '\u05D0\u05E0\u05D9 \u05E8\u05D5\u05E6\u05D4 \u05DC\u05D0\u05E8\u05D7'
              )(
                'backText',
                '\u05DE\u05E2\u05D5\u05E0\u05D9\u05D9\u05DF \u05DC\u05E4\u05EA\u05D5\u05D7 \u05D0\u05EA \u05D1\u05D9\u05EA\u05DA \u05D5\u05DC\u05D0\u05E8\u05D7 \u05DE\u05E4\u05D2\u05E9?'
              )('backButtonText', '\u05DC\u05E4\u05E8\u05D8\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD')(
                'backButtonUrl',
                'host'
              );
            }
          },
          directives: [_flip_card_flip_card_component__WEBPACK_IMPORTED_MODULE_2__['FlipCardComponent']],
          styles: [
            '.image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.image.disabled[_ngcontent-%COMP%]   .person[_ngcontent-%COMP%] {\n  fill: #aaaaaa;\n}\n.image[_ngcontent-%COMP%]   .person-rear[_ngcontent-%COMP%] {\n  opacity: 0.81;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcGFydGljaXBhdGlvbnMtYnV0dG9ucy9ob3N0LWJ1dHRvbi9DOlxcVXNlcnNcXFRlaGlsYVxcbGFzdFxcb3VyQnJvXFxvdXItYnJvdGhlcnMtd2ViL3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXHBhcnRpY2lwYXRpb25zLWJ1dHRvbnNcXGhvc3QtYnV0dG9uXFxob3N0LWJ1dHRvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcGFydGljaXBhdGlvbnMtYnV0dG9ucy9ob3N0LWJ1dHRvbi9ob3N0LWJ1dHRvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDQ0Y7QURNSTtFQUNFLGFBQUE7QUNKTjtBRFFFO0VBQ0UsYUFBQTtBQ05KIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcGFydGljaXBhdGlvbnMtYnV0dG9ucy9ob3N0LWJ1dHRvbi9ob3N0LWJ1dHRvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWFnZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAvLyAucGVyc29uIHtcclxuICAvLyAgIGZpbGw6ICMwMGExOTk7XHJcbiAgLy8gfVxyXG5cclxuICAmLmRpc2FibGVkIHtcclxuICAgIC5wZXJzb24ge1xyXG4gICAgICBmaWxsOiAjYWFhYWFhO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnBlcnNvbi1yZWFyIHtcclxuICAgIG9wYWNpdHk6IDAuODE7XHJcbiAgfVxyXG59XHJcbiIsIi5pbWFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uaW1hZ2UuZGlzYWJsZWQgLnBlcnNvbiB7XG4gIGZpbGw6ICNhYWFhYWE7XG59XG4uaW1hZ2UgLnBlcnNvbi1yZWFyIHtcbiAgb3BhY2l0eTogMC44MTtcbn0iXX0= */'
          ],
          changeDetection: 0
        });
        /*@__PURE__*/ (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            HostButtonComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                args: [
                  {
                    selector: 'app-host-button',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__['ChangeDetectionStrategy'].OnPush,
                    templateUrl: './host-button.component.html',
                    styleUrls: ['./host-button.component.scss']
                  }
                ]
              }
            ],
            function() {
              return [{ type: _services_participations_service__WEBPACK_IMPORTED_MODULE_1__['ParticipationsService'] }];
            },
            {
              user: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input']
                }
              ],
              loading: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input']
                }
              ]
            }
          );
        })();

        /***/
      },

    /***/ './src/app/shared/components/participations-buttons/participate-button/participate-button.component.ts':
      /*!*************************************************************************************************************!*\
  !*** ./src/app/shared/components/participations-buttons/participate-button/participate-button.component.ts ***!
  \*************************************************************************************************************/
      /*! exports provided: ParticipateButtonComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'ParticipateButtonComponent',
          function() {
            return ParticipateButtonComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */ var _services_participations_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../../services/participations.service */ './src/app/shared/services/participations.service.ts'
        );
        /* harmony import */ var _flip_card_flip_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../flip-card/flip-card.component */ './src/app/shared/components/flip-card/flip-card.component.ts'
        );

        function ParticipateButtonComponent_ng_template_1_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnamespaceSVG']();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'svg', 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](1, 'title');
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](2, 'Group 11');
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](3, 'g', 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](4, 'g', 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](5, 'g', 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](6, 'path', 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](7, 'path', 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](8, 'path', 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }
          if (rf & 2) {
            const ctx_r152 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵclassProp'](
              'disabled',
              ctx_r152.loading || (ctx_r152.user && !ctx_r152.participationService.isUserCanParticipate(ctx_r152.user))
            );
          }
        }
        class ParticipateButtonComponent {
          constructor(participationService) {
            this.participationService = participationService;
          }
        }
        ParticipateButtonComponent.ɵfac = function ParticipateButtonComponent_Factory(t) {
          return new (t || ParticipateButtonComponent)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
              _services_participations_service__WEBPACK_IMPORTED_MODULE_1__['ParticipationsService']
            )
          );
        };
        ParticipateButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineComponent']({
          type: ParticipateButtonComponent,
          selectors: [['app-participate-button']],
          inputs: { user: 'user', loading: 'loading' },
          decls: 3,
          vars: 6,
          consts: [
            [3, 'disabled', 'frontImage', 'frontTitle', 'backText', 'backButtonText', 'backButtonUrl'],
            ['frontImage', ''],
            [
              'width',
              '100%',
              'height',
              '100%',
              'viewBox',
              '0 0 86 54',
              'version',
              '1.1',
              'xmlns',
              'http://www.w3.org/2000/svg',
              0,
              'xmlns',
              'xlink',
              'http://www.w3.org/1999/xlink',
              1,
              'image'
            ],
            ['id', 'Styleguide', 'stroke', 'none', 'stroke-width', '1', 'fill', 'none', 'fill-rule', 'evenodd'],
            ['id', 'Icons', 'transform', 'translate(-237.000000, -147.000000)', 'fill-rule', 'nonzero'],
            ['id', 'Group-11', 'transform', 'translate(237.162749, 147.358781)'],
            [
              'd',
              'M67.162778,1.40322581 C72.4584761,1.40322581 76.7514877,5.69623736 76.7514877,10.9919355 C76.7514877,14.1889323 75.1868996,17.0205 72.781652,18.7627099 C79.5133897,19.361595 84.8114076,24.9449928 84.9595348,31.7968019 L84.9627192,32.0916712 L84.9627192,48.7250326 C84.9627192,49.9226605 84.0306848,50.9026001 82.8523882,50.979079 L82.7038681,50.9838838 L60.0973694,50.9838838 L60.0973694,48.1774322 L82.1555038,48.1765408 L82.1562676,32.0916712 C82.1562676,26.3422286 77.5682492,21.6643751 71.8536974,21.5195959 L71.5807383,21.5161418 L61.9001889,21.5161418 C59.6130825,21.5161418 57.440178,22.2427082 55.6415984,23.5658732 L55.3746515,23.7688062 L53.6413447,21.5615866 C55.8721472,19.8097604 58.5997769,18.8050346 61.481456,18.7161421 C59.1116384,16.9713628 57.5740683,14.1612085 57.5740683,10.9919355 C57.5740683,5.69623736 61.8670799,1.40322581 67.162778,1.40322581 Z M67.162778,4.20967742 C63.4170403,4.20967742 60.38052,7.24619779 60.38052,10.9919355 C60.38052,14.7376732 63.4170403,17.7741935 67.162778,17.7741935 C70.9085157,17.7741935 73.9450361,14.7376732 73.9450361,10.9919355 C73.9450361,7.24619779 70.9085157,4.20967742 67.162778,4.20967742 Z',
              'id',
              'Combined-Shape',
              'fill',
              '#16B3AB',
              1,
              'person'
            ],
            [
              'd',
              'M13.5214333,1.40322581 C18.8171314,1.40322581 23.110143,5.69623736 23.110143,10.9919355 C23.110143,14.1889323 21.5455549,17.0205 19.1403073,18.7627099 C25.872045,19.361595 31.1700629,24.9449928 31.31819,31.7968019 L31.3213745,32.0916712 L31.3213745,48.7250326 C31.3213745,49.9226605 30.3893401,50.9026001 29.2110434,50.979079 L29.0625233,50.9838838 L6.45602465,50.9838838 L6.45602465,48.1774322 L28.5141591,48.1765408 L28.5149229,32.0916712 C28.5149229,26.3422286 23.9269045,21.6643751 18.2123527,21.5195959 L17.9393935,21.5161418 L8.25884421,21.5161418 C5.97173776,21.5161418 3.79883324,22.2427082 2.00025372,23.5658732 L1.73330674,23.7688062 L2.84217094e-14,21.5615866 C2.23080246,19.8097604 4.95843217,18.8050346 7.84011128,18.7161421 C5.47029372,16.9713628 3.93272362,14.1612085 3.93272362,10.9919355 C3.93272362,5.69623736 8.22573518,1.40322581 13.5214333,1.40322581 Z M13.5214333,4.20967742 C9.7756956,4.20967742 6.73917524,7.24619779 6.73917524,10.9919355 C6.73917524,14.7376732 9.7756956,17.7741935 13.5214333,17.7741935 C17.267171,17.7741935 20.3036914,14.7376732 20.3036914,10.9919355 C20.3036914,7.24619779 17.267171,4.20967742 13.5214333,4.20967742 Z',
              'id',
              'Combined-Shape-Copy',
              'fill',
              '#16B3AB',
              'transform',
              'translate(15.660687, 26.193555) scale(-1, 1) translate(-15.660687, -26.193555) ',
              1,
              'person'
            ],
            [
              'd',
              'M43.1501723,2.30926389e-14 C49.2110614,2.30926389e-14 54.1243829,4.91332144 54.1243829,10.9742106 C54.1243829,14.8094519 52.1570046,18.1851873 49.1764075,20.1472575 L49.489655,20.1474247 C56.133436,20.1474247 61.5192847,25.5332733 61.5192847,32.1770543 L61.5192847,51.4717259 C61.5192847,51.9462817 61.1345812,52.3309851 60.6600254,52.3309851 L25.6403192,52.3309851 C25.1657634,52.3309851 24.7810599,51.9462817 24.7810599,51.4717259 L24.7810599,32.1770543 C24.7810599,25.5332733 30.1669085,20.1474247 36.8106895,20.1474247 L37.1239371,20.1472575 C34.14334,18.1851873 32.1759617,14.8094519 32.1759617,10.9742106 C32.1759617,4.91332144 37.0892831,2.30926389e-14 43.1501723,2.30926389e-14 Z M49.489655,22.7252025 L36.8106895,22.7252025 C31.6734348,22.7252025 27.4934276,26.823666 27.3620233,31.9292375 L27.3588377,32.1770543 L27.3580597,49.7523844 L58.940993,49.7523844 L58.9415069,32.1770543 C58.9415069,27.0397996 54.8430434,22.8597924 49.7374718,22.7283881 L49.489655,22.7252025 Z M43.1501723,2.57777778 C38.5129505,2.57777778 34.7537395,6.33698879 34.7537395,10.9742106 C34.7537395,15.6114324 38.5129505,19.3706434 43.1501723,19.3706434 C47.7873941,19.3706434 51.5466051,15.6114324 51.5466051,10.9742106 C51.5466051,6.33698879 47.7873941,2.57777778 43.1501723,2.57777778 Z',
              'id',
              'Combined-Shape-Copy-3',
              'fill',
              '#082551',
              1,
              'person'
            ]
          ],
          template: function ParticipateButtonComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](0, 'app-flip-card', 0);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                1,
                ParticipateButtonComponent_ng_template_1_Template,
                9,
                2,
                'ng-template',
                null,
                1,
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplateRefExtractor']
              );
            }
            if (rf & 2) {
              const _r151 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵreference'](2);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
                'disabled',
                ctx.loading || (ctx.user && !ctx.participationService.isUserCanParticipate(ctx.user))
              )('frontImage', _r151)(
                'frontTitle',
                '\u05D0\u05E0\u05D9 \u05E8\u05D5\u05E6\u05D4 \u05DC\u05D4\u05E9\u05EA\u05EA\u05E3'
              )(
                'backText',
                '\u05DE\u05E2\u05D5\u05E0\u05D9\u05D9\u05DF \u05DC\u05D4\u05EA\u05D0\u05E8\u05D7 \u05D1\u05D0\u05D7\u05D3 \u05D4\u05DE\u05E4\u05D2\u05E9\u05D9\u05DD?'
              )('backButtonText', '\u05DC\u05E4\u05E8\u05D8\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD')(
                'backButtonUrl',
                'participate'
              );
            }
          },
          directives: [_flip_card_flip_card_component__WEBPACK_IMPORTED_MODULE_2__['FlipCardComponent']],
          styles: [
            '.image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.image.disabled[_ngcontent-%COMP%]   .person[_ngcontent-%COMP%] {\n  fill: #aaaaaa;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcGFydGljaXBhdGlvbnMtYnV0dG9ucy9wYXJ0aWNpcGF0ZS1idXR0b24vQzpcXFVzZXJzXFxUZWhpbGFcXGxhc3RcXG91ckJyb1xcb3VyLWJyb3RoZXJzLXdlYi9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxwYXJ0aWNpcGF0aW9ucy1idXR0b25zXFxwYXJ0aWNpcGF0ZS1idXR0b25cXHBhcnRpY2lwYXRlLWJ1dHRvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcGFydGljaXBhdGlvbnMtYnV0dG9ucy9wYXJ0aWNpcGF0ZS1idXR0b24vcGFydGljaXBhdGUtYnV0dG9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNDRjtBRE9JO0VBQ0UsYUFBQTtBQ0xOIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcGFydGljaXBhdGlvbnMtYnV0dG9ucy9wYXJ0aWNpcGF0ZS1idXR0b24vcGFydGljaXBhdGUtYnV0dG9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltYWdlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gIC8vIC5wZXJzb24ge1xyXG4gIC8vICAgZmlsbDogIzAwYTE5OTtcclxuICAvLyAgIG9wYWNpdHk6IDAuODg7XHJcbiAgLy8gfVxyXG5cclxuICAmLmRpc2FibGVkIHtcclxuICAgIC5wZXJzb24ge1xyXG4gICAgICBmaWxsOiAjYWFhYWFhO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIuaW1hZ2Uge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmltYWdlLmRpc2FibGVkIC5wZXJzb24ge1xuICBmaWxsOiAjYWFhYWFhO1xufSJdfQ== */'
          ],
          changeDetection: 0
        });
        /*@__PURE__*/ (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            ParticipateButtonComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                args: [
                  {
                    selector: 'app-participate-button',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__['ChangeDetectionStrategy'].OnPush,
                    templateUrl: './participate-button.component.html',
                    styleUrls: ['./participate-button.component.scss']
                  }
                ]
              }
            ],
            function() {
              return [{ type: _services_participations_service__WEBPACK_IMPORTED_MODULE_1__['ParticipationsService'] }];
            },
            {
              user: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input']
                }
              ],
              loading: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input']
                }
              ]
            }
          );
        })();

        /***/
      },

    /***/ './src/app/shared/components/participations-buttons/participations-buttons.component.ts':
      /*!**********************************************************************************************!*\
  !*** ./src/app/shared/components/participations-buttons/participations-buttons.component.ts ***!
  \**********************************************************************************************/
      /*! exports provided: ParticipationsButtonsComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'ParticipationsButtonsComponent',
          function() {
            return ParticipationsButtonsComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */ var _participate_button_participate_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./participate-button/participate-button.component */ './src/app/shared/components/participations-buttons/participate-button/participate-button.component.ts'
        );
        /* harmony import */ var _tell_button_tell_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./tell-button/tell-button.component */ './src/app/shared/components/participations-buttons/tell-button/tell-button.component.ts'
        );
        /* harmony import */ var _host_button_host_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./host-button/host-button.component */ './src/app/shared/components/participations-buttons/host-button/host-button.component.ts'
        );

        class ParticipationsButtonsComponent {}
        ParticipationsButtonsComponent.ɵfac = function ParticipationsButtonsComponent_Factory(t) {
          return new (t || ParticipationsButtonsComponent)();
        };
        ParticipationsButtonsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineComponent']({
          type: ParticipationsButtonsComponent,
          selectors: [['app-participations-buttons']],
          inputs: { user: 'user', loading: 'loading' },
          decls: 4,
          vars: 6,
          consts: [
            [1, 'participations-buttons'],
            ['data-aos', 'fade-left', 'data-aos-duration', '1000', 1, 'participation-button', 3, 'user', 'loading'],
            ['data-aos', 'fade-up', 'data-aos-duration', '1000', 1, 'participation-button', 3, 'user', 'loading'],
            ['data-aos', 'fade-right', 'data-aos-duration', '1000', 1, 'participation-button', 3, 'user', 'loading']
          ],
          template: function ParticipationsButtonsComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div', 0);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](1, 'app-participate-button', 1);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](2, 'app-tell-button', 2);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](3, 'app-host-button', 3);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            }
            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('user', ctx.user)('loading', ctx.loading);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('user', ctx.user)('loading', ctx.loading);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('user', ctx.user)('loading', ctx.loading);
            }
          },
          directives: [
            _participate_button_participate_button_component__WEBPACK_IMPORTED_MODULE_1__['ParticipateButtonComponent'],
            _tell_button_tell_button_component__WEBPACK_IMPORTED_MODULE_2__['TellButtonComponent'],
            _host_button_host_button_component__WEBPACK_IMPORTED_MODULE_3__['HostButtonComponent']
          ],
          styles: [
            '.participations-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  margin-bottom: 10px;\n}\n.participations-buttons[_ngcontent-%COMP%]   .participation-button[_ngcontent-%COMP%] {\n  margin-bottom: 25px;\n  margin-left: 33px;\n  margin-right: 33px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcGFydGljaXBhdGlvbnMtYnV0dG9ucy9DOlxcVXNlcnNcXFRlaGlsYVxcbGFzdFxcb3VyQnJvXFxvdXItYnJvdGhlcnMtd2ViL3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXHBhcnRpY2lwYXRpb25zLWJ1dHRvbnNcXHBhcnRpY2lwYXRpb25zLWJ1dHRvbnMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3BhcnRpY2lwYXRpb25zLWJ1dHRvbnMvcGFydGljaXBhdGlvbnMtYnV0dG9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDQ0Y7QURDRTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcGFydGljaXBhdGlvbnMtYnV0dG9ucy9wYXJ0aWNpcGF0aW9ucy1idXR0b25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhcnRpY2lwYXRpb25zLWJ1dHRvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHJcbiAgLnBhcnRpY2lwYXRpb24tYnV0dG9uIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMzNweDtcclxuICAgIG1hcmdpbi1yaWdodDogMzNweDtcclxuICB9XHJcbn1cclxuIiwiLnBhcnRpY2lwYXRpb25zLWJ1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLnBhcnRpY2lwYXRpb25zLWJ1dHRvbnMgLnBhcnRpY2lwYXRpb24tYnV0dG9uIHtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgbWFyZ2luLWxlZnQ6IDMzcHg7XG4gIG1hcmdpbi1yaWdodDogMzNweDtcbn0iXX0= */'
          ],
          changeDetection: 0
        });
        /*@__PURE__*/ (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            ParticipationsButtonsComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                args: [
                  {
                    selector: 'app-participations-buttons',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__['ChangeDetectionStrategy'].OnPush,
                    templateUrl: './participations-buttons.component.html',
                    styleUrls: ['./participations-buttons.component.scss']
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
              loading: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input']
                }
              ]
            }
          );
        })();

        /***/
      },

    /***/ './src/app/shared/components/participations-buttons/participations-buttons.module.ts':
      /*!*******************************************************************************************!*\
  !*** ./src/app/shared/components/participations-buttons/participations-buttons.module.ts ***!
  \*******************************************************************************************/
      /*! exports provided: ParticipationsButtonsModule */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'ParticipationsButtonsModule',
          function() {
            return ParticipationsButtonsModule;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */ var _participations_buttons_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./participations-buttons.component */ './src/app/shared/components/participations-buttons/participations-buttons.component.ts'
        );
        /* harmony import */ var _host_button_host_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./host-button/host-button.component */ './src/app/shared/components/participations-buttons/host-button/host-button.component.ts'
        );
        /* harmony import */ var _participate_button_participate_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./participate-button/participate-button.component */ './src/app/shared/components/participations-buttons/participate-button/participate-button.component.ts'
        );
        /* harmony import */ var _tell_button_tell_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./tell-button/tell-button.component */ './src/app/shared/components/participations-buttons/tell-button/tell-button.component.ts'
        );
        /* harmony import */ var _flip_card_filp_card_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../flip-card/filp-card.module */ './src/app/shared/components/flip-card/filp-card.module.ts'
        );

        class ParticipationsButtonsModule {}
        ParticipationsButtonsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineNgModule']({
          type: ParticipationsButtonsModule
        });
        ParticipationsButtonsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineInjector']({
          factory: function ParticipationsButtonsModule_Factory(t) {
            return new (t || ParticipationsButtonsModule)();
          },
          imports: [[_flip_card_filp_card_module__WEBPACK_IMPORTED_MODULE_5__['FilpCardModule']]]
        });
        (function() {
          (typeof ngJitMode === 'undefined' || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵsetNgModuleScope'](ParticipationsButtonsModule, {
              declarations: [
                _participations_buttons_component__WEBPACK_IMPORTED_MODULE_1__['ParticipationsButtonsComponent'],
                _host_button_host_button_component__WEBPACK_IMPORTED_MODULE_2__['HostButtonComponent'],
                _participate_button_participate_button_component__WEBPACK_IMPORTED_MODULE_3__[
                  'ParticipateButtonComponent'
                ],
                _tell_button_tell_button_component__WEBPACK_IMPORTED_MODULE_4__['TellButtonComponent']
              ],
              imports: [_flip_card_filp_card_module__WEBPACK_IMPORTED_MODULE_5__['FilpCardModule']],
              exports: [
                _participations_buttons_component__WEBPACK_IMPORTED_MODULE_1__['ParticipationsButtonsComponent'],
                _host_button_host_button_component__WEBPACK_IMPORTED_MODULE_2__['HostButtonComponent'],
                _participate_button_participate_button_component__WEBPACK_IMPORTED_MODULE_3__[
                  'ParticipateButtonComponent'
                ],
                _tell_button_tell_button_component__WEBPACK_IMPORTED_MODULE_4__['TellButtonComponent']
              ]
            });
        })();
        /*@__PURE__*/ (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            ParticipationsButtonsModule,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'],
                args: [
                  {
                    imports: [_flip_card_filp_card_module__WEBPACK_IMPORTED_MODULE_5__['FilpCardModule']],
                    declarations: [
                      _participations_buttons_component__WEBPACK_IMPORTED_MODULE_1__['ParticipationsButtonsComponent'],
                      _host_button_host_button_component__WEBPACK_IMPORTED_MODULE_2__['HostButtonComponent'],
                      _participate_button_participate_button_component__WEBPACK_IMPORTED_MODULE_3__[
                        'ParticipateButtonComponent'
                      ],
                      _tell_button_tell_button_component__WEBPACK_IMPORTED_MODULE_4__['TellButtonComponent']
                    ],
                    exports: [
                      _participations_buttons_component__WEBPACK_IMPORTED_MODULE_1__['ParticipationsButtonsComponent'],
                      _host_button_host_button_component__WEBPACK_IMPORTED_MODULE_2__['HostButtonComponent'],
                      _participate_button_participate_button_component__WEBPACK_IMPORTED_MODULE_3__[
                        'ParticipateButtonComponent'
                      ],
                      _tell_button_tell_button_component__WEBPACK_IMPORTED_MODULE_4__['TellButtonComponent']
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

    /***/ './src/app/shared/components/participations-buttons/tell-button/tell-button.component.ts':
      /*!***********************************************************************************************!*\
  !*** ./src/app/shared/components/participations-buttons/tell-button/tell-button.component.ts ***!
  \***********************************************************************************************/
      /*! exports provided: TellButtonComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'TellButtonComponent', function() {
          return TellButtonComponent;
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */ var _services_participations_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../../services/participations.service */ './src/app/shared/services/participations.service.ts'
        );
        /* harmony import */ var _flip_card_flip_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../flip-card/flip-card.component */ './src/app/shared/components/flip-card/flip-card.component.ts'
        );

        function TellButtonComponent_ng_template_1_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnamespaceSVG']();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'svg', 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](1, 'title');
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](2, 'Group 8');
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](3, 'g', 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](4, 'g', 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](5, 'g', 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](6, 'path', 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](7, 'circle', 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](8, 'g', 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](9, 'g', 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](10, 'g', 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](11, 'path', 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }
          if (rf & 2) {
            const ctx_r154 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵclassProp'](
              'disabled',
              ctx_r154.loading || (ctx_r154.user && !ctx_r154.participationService.isUserCanTell(ctx_r154.user))
            );
          }
        }
        class TellButtonComponent {
          constructor(participationService) {
            this.participationService = participationService;
          }
        }
        TellButtonComponent.ɵfac = function TellButtonComponent_Factory(t) {
          return new (t || TellButtonComponent)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
              _services_participations_service__WEBPACK_IMPORTED_MODULE_1__['ParticipationsService']
            )
          );
        };
        TellButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineComponent']({
          type: TellButtonComponent,
          selectors: [['app-tell-button']],
          inputs: { user: 'user', loading: 'loading' },
          decls: 3,
          vars: 6,
          consts: [
            [3, 'disabled', 'frontImage', 'frontTitle', 'backText', 'backButtonText', 'backButtonUrl'],
            ['frontImage', ''],
            [
              'width',
              '100%',
              'height',
              '100%',
              'viewBox',
              '0 0 38 54',
              'version',
              '1.1',
              'xmlns',
              'http://www.w3.org/2000/svg',
              0,
              'xmlns',
              'xlink',
              'http://www.w3.org/1999/xlink',
              1,
              'image'
            ],
            [
              'id',
              'Styleguide',
              'stroke',
              'none',
              'stroke-width',
              '1',
              'fill',
              'none',
              'fill-rule',
              'evenodd',
              1,
              'person'
            ],
            ['id', 'Icons', 'transform', 'translate(-68.000000, -147.000000)'],
            ['id', 'Group-8', 'transform', 'translate(68.575096, 147.358781)'],
            [
              'd',
              'M22.7382248,21.6474247 C26.1900045,21.6474247 29.3150045,23.0465349 31.5770595,25.3085899 C33.8391146,27.570645 35.2382248,30.695645 35.2382248,34.1474247 L35.2382248,34.1474247 L35.2382248,50.8309851 L1.5,50.8309851 L1.5,34.1474247 C1.5,30.695645 2.89911016,27.570645 5.16116524,25.3085899 C7.42322031,23.0465349 10.5482203,21.6474247 14,21.6474247 L14,21.6474247 Z',
              'id',
              'Rectangle',
              'stroke',
              '#082551',
              'stroke-width',
              '3'
            ],
            [
              'id',
              'Oval',
              'stroke',
              '#082551',
              'stroke-width',
              '3',
              'cx',
              '18.3691124',
              'cy',
              '10.9742106',
              'r',
              '9.47421059'
            ],
            ['id', 'Group', 'transform', 'translate(19.509578, 28.288414)', 'fill', '#16B3AB', 1, 'person'],
            ['transform', 'translate(0.014003, -0.002921)', 'id', 'Path'],
            ['transform', 'translate(0.068594, 0.002921)'],
            [
              'd',
              'M3.42281254,0.351398275 C1.86323567,0.351398275 0.816199463,1.61377246 0.816199463,3.1727075 C0.816199463,4.94167935 3.28760549,7.05523915 5.40550996,8.46662461 C7.52340705,7.05523915 9.96624003,4.9075954 9.99482038,3.1727075 C10.020494,1.61399379 9.01118483,0.351398275 7.45160722,0.351398275 C6.78625476,0.351398275 6.11147566,0.703373139 5.40550996,1.40902898 C4.69953689,0.703373139 4.08816522,0.351398275 3.42281254,0.351398275 Z'
            ]
          ],
          template: function TellButtonComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](0, 'app-flip-card', 0);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                1,
                TellButtonComponent_ng_template_1_Template,
                12,
                2,
                'ng-template',
                null,
                1,
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplateRefExtractor']
              );
            }
            if (rf & 2) {
              const _r153 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵreference'](2);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
                'disabled',
                ctx.loading || (ctx.user && !ctx.participationService.isUserCanTell(ctx.user))
              )('frontImage', _r153)(
                'frontTitle',
                '\u05D0\u05E0\u05D9 \u05E8\u05D5\u05E6\u05D4 \u05DC\u05E1\u05E4\u05E8'
              )(
                'backText',
                '\u05D0\u05D7/\u05D0\u05D7\u05D5\u05EA \u05E9\u05DB\u05D5\u05DC\u05D9\u05DD? \u05DE\u05E2\u05D5\u05E0\u05D9\u05D9\u05E0\u05D9\u05DD \u05DC\u05E1\u05E4\u05E8 \u05D0\u05EA \u05E1\u05E4\u05D5\u05E8\u05DB\u05DD \u05D4\u05D0\u05D9\u05E9\u05D9?'
              )('backButtonText', '\u05DC\u05E4\u05E8\u05D8\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD')(
                'backButtonUrl',
                'tell'
              );
            }
          },
          directives: [_flip_card_flip_card_component__WEBPACK_IMPORTED_MODULE_2__['FlipCardComponent']],
          styles: [
            '.image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.image.disabled[_ngcontent-%COMP%]   .person[_ngcontent-%COMP%] {\n  fill: #aaaaaa;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcGFydGljaXBhdGlvbnMtYnV0dG9ucy90ZWxsLWJ1dHRvbi9DOlxcVXNlcnNcXFRlaGlsYVxcbGFzdFxcb3VyQnJvXFxvdXItYnJvdGhlcnMtd2ViL3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXHBhcnRpY2lwYXRpb25zLWJ1dHRvbnNcXHRlbGwtYnV0dG9uXFx0ZWxsLWJ1dHRvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcGFydGljaXBhdGlvbnMtYnV0dG9ucy90ZWxsLWJ1dHRvbi90ZWxsLWJ1dHRvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDQ0Y7QURNSTtFQUNFLGFBQUE7QUNKTiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3BhcnRpY2lwYXRpb25zLWJ1dHRvbnMvdGVsbC1idXR0b24vdGVsbC1idXR0b24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1hZ2Uge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuXHJcbiAgLy8gLnBlcnNvbiB7XHJcbiAgLy8gICBmaWxsOiAjMDBhMTk5O1xyXG4gIC8vIH1cclxuXHJcbiAgJi5kaXNhYmxlZCB7XHJcbiAgICAucGVyc29uIHtcclxuICAgICAgZmlsbDogI2FhYWFhYTtcclxuICAgIH1cclxuICAgIC8vIC5hYWF7XHJcbiAgICAvLyAgIHRyYW5zZm9ybTojYWFhYWFhXHJcbiAgICAvLyB9XHJcbiAgfVxyXG59XHJcbiIsIi5pbWFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uaW1hZ2UuZGlzYWJsZWQgLnBlcnNvbiB7XG4gIGZpbGw6ICNhYWFhYWE7XG59Il19 */'
          ],
          changeDetection: 0
        });
        /*@__PURE__*/ (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            TellButtonComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                args: [
                  {
                    selector: 'app-tell-button',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__['ChangeDetectionStrategy'].OnPush,
                    templateUrl: './tell-button.component.html',
                    styleUrls: ['./tell-button.component.scss']
                  }
                ]
              }
            ],
            function() {
              return [{ type: _services_participations_service__WEBPACK_IMPORTED_MODULE_1__['ParticipationsService'] }];
            },
            {
              user: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input']
                }
              ],
              loading: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input']
                }
              ]
            }
          );
        })();

        /***/
      },

    /***/ './src/app/shared/constants.ts':
      /*!*************************************!*\
  !*** ./src/app/shared/constants.ts ***!
  \*************************************/
      /*! exports provided: MEMORIAL_YEAR, MIN_DATE, MAX_DATE */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'MEMORIAL_YEAR', function() {
          return MEMORIAL_YEAR;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'MIN_DATE', function() {
          return MIN_DATE;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'MAX_DATE', function() {
          return MAX_DATE;
        });
        const MEMORIAL_YEAR = 2020;
        const MIN_DATE = new Date(Date.UTC(MEMORIAL_YEAR, 3, 22));
        const MAX_DATE = new Date(Date.UTC(MEMORIAL_YEAR, 3, 28));

        /***/
      },

    /***/ './src/app/shared/services/analytics.service.ts':
      /*!******************************************************!*\
  !*** ./src/app/shared/services/analytics.service.ts ***!
  \******************************************************/
      /*! exports provided: AnalyticsService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'AnalyticsService', function() {
          return AnalyticsService;
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! src/environments/environment */ './src/environments/environment.ts'
        );
        /* harmony import */ var _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/fire/analytics */ './node_modules/@angular/fire/__ivy_ngcc__/analytics/es2015/index.js'
        );

        class AnalyticsService {
          constructor(angularFireAnalytics) {
            this.angularFireAnalytics = angularFireAnalytics;
          }
          logEvent(eventName, eventParams) {
            if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_1__['environment'].production) {
              console.log(eventName, eventParams);
            }
            this.angularFireAnalytics.logEvent(eventName, eventParams);
          }
        }
        AnalyticsService.ɵfac = function AnalyticsService_Factory(t) {
          return new (t || AnalyticsService)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵinject'](
              _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_2__['AngularFireAnalytics']
            )
          );
        };
        AnalyticsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineInjectable']({
          token: AnalyticsService,
          factory: AnalyticsService.ɵfac,
          providedIn: 'root'
        });
        /*@__PURE__*/ (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            AnalyticsService,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Injectable'],
                args: [
                  {
                    providedIn: 'root'
                  }
                ]
              }
            ],
            function() {
              return [{ type: _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_2__['AngularFireAnalytics'] }];
            },
            null
          );
        })();

        /***/
      },

    /***/ './src/app/shared/services/auth.service.ts':
      /*!*************************************************!*\
  !*** ./src/app/shared/services/auth.service.ts ***!
  \*************************************************/
      /*! exports provided: LoginMethod, AuthErrors, AuthService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'LoginMethod', function() {
          return LoginMethod;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'AuthErrors', function() {
          return AuthErrors;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'AuthService', function() {
          return AuthService;
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! rxjs */ './node_modules/rxjs/_esm2015/index.js'
        );
        /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! rxjs/operators */ './node_modules/rxjs/_esm2015/operators/index.js'
        );
        /* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! firebase/app */ './node_modules/firebase/app/dist/index.cjs.js'
        );
        /* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          firebase_app__WEBPACK_IMPORTED_MODULE_3__
        );
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @angular/router */ './node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js'
        );
        /* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @angular/fire/auth */ './node_modules/@angular/fire/__ivy_ngcc__/auth/es2015/index.js'
        );
        /* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./data.service */ './src/app/shared/services/data.service.ts'
        );
        /* harmony import */ var _analytics_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ./analytics.service */ './src/app/shared/services/analytics.service.ts'
        );

        var LoginMethod;
        (function(LoginMethod) {
          LoginMethod[(LoginMethod['EMAIL_PASS'] = 0)] = 'EMAIL_PASS';
          LoginMethod[(LoginMethod['FACEBOOK'] = 1)] = 'FACEBOOK';
          LoginMethod[(LoginMethod['GOOGLE'] = 2)] = 'GOOGLE';
        })(LoginMethod || (LoginMethod = {}));
        var AuthErrors;
        (function(AuthErrors) {
          AuthErrors['UserNotFound'] = 'auth/user-not-found';
          AuthErrors['WrongPassword'] = 'auth/wrong-password';
          AuthErrors['CancelledPopupRequest'] = 'auth/cancelled-popup-request';
          AuthErrors['EmailAlreadyInUse'] = 'auth/email-already-in-use';
        })(AuthErrors || (AuthErrors = {}));
        class AuthService {
          constructor(router, angularFireAuth, dataService, analyticsService) {
            this.router = router;
            this.angularFireAuth = angularFireAuth;
            this.dataService = dataService;
            this.analyticsService = analyticsService;
            this.firebaseUser = this.angularFireAuth.authState;
            //public firebaseSlain: Observable<firebase.User> = this.angularFireAuth.authState;
            this.needLogin$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__['Subject']();
            this.firstTimeGetUser = true;
            this.user = this.angularFireAuth.authState.pipe(
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['switchMap'])(authRes => {
                if (authRes) {
                  return this.dataService.getUserById(authRes.uid).pipe(
                    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['switchMap'])(user => {
                      return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__['from'])(
                        authRes.getIdTokenResult(this.firstTimeGetUser)
                      ).pipe(
                        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['tap'])(
                          () => (this.firstTimeGetUser = false)
                        ),
                        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['map'])(idTokenResult =>
                          Object.assign(Object.assign({}, user), {
                            isAdmin: !!idTokenResult.claims.admin,
                            isVolunteer: !!idTokenResult.claims.volunteer
                          })
                        )
                      );
                    })
                  );
                } else {
                  return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__['of'])(null);
                }
              })
            );
          }
          signInWithGoogle() {
            const provider = new firebase_app__WEBPACK_IMPORTED_MODULE_3__['auth'].GoogleAuthProvider();
            return this.socialSignIn(provider);
          }
          signInWithFacebook() {
            const provider = new firebase_app__WEBPACK_IMPORTED_MODULE_3__['auth'].FacebookAuthProvider();
            return this.socialSignIn(provider);
          }
          signInWithEmailAndPassword(email, password) {
            this.analyticsService.logEvent('SignInWithEmailAndPassword');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__['from'])(
              this.angularFireAuth.auth.signInWithEmailAndPassword(email, password)
            ).pipe(
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['tap'])(() =>
                this.analyticsService.logEvent('SignInWithEmailAndPasswordSuccess')
              ),
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['catchError'])(error => {
                this.analyticsService.logEvent('SignInWithEmailAndPasswordFailed', {
                  error
                });
                console.error(error);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__['throwError'])(error);
              })
            );
          }
          createUserWithEmailAndPassword(email, password) {
            this.analyticsService.logEvent('CreateUserWithEmailAndPassword');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__['from'])(
              this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password)
            ).pipe(
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['tap'])(() =>
                this.analyticsService.logEvent('CreateUserWithEmailAndPasswordSuccess')
              ),
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['catchError'])(error => {
                this.analyticsService.logEvent('CreateUserWithEmailAndPasswordFailed', {
                  error
                });
                console.error(error);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__['throwError'])(error);
              })
            );
          }
          sendPasswordResetEmail(email) {
            this.analyticsService.logEvent('SendPasswordResetEmail');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__['from'])(
              this.angularFireAuth.auth.sendPasswordResetEmail(email)
            ).pipe(
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['tap'])(() =>
                this.analyticsService.logEvent('SendPasswordResetEmailSuccess')
              ),
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['catchError'])(error => {
                this.analyticsService.logEvent('SendPasswordResetEmailFailed', {
                  error
                });
                console.error(error);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__['throwError'])(error);
              })
            );
          }
          signOut() {
            this.analyticsService.logEvent('SignOut');
            this.needLogin$.next(null);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__['from'])(this.angularFireAuth.auth.signOut()).pipe(
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['tap'])(() =>
                this.analyticsService.logEvent('SignOutSuccess')
              ),
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['catchError'])(error => {
                this.analyticsService.logEvent('SignOutFailed', { error });
                console.error(error);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__['throwError'])(error);
              })
            );
          }
          requestToLogin(mode = 'Register') {
            this.needLogin$.next(mode);
          }
          closeLogin() {
            this.needLogin$.next(null);
            this.router.navigate(['/home']);
          }
          closeLoginRegister() {
            this.needLogin$.next(null);
            this.router.navigate(['/meetings']);
          }
          socialSignIn(provider) {
            const telemetry = { provider: provider.providerId };
            this.analyticsService.logEvent('SocialSignIn', telemetry);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__['from'])(
              this.angularFireAuth.auth.signInWithPopup(provider)
            ).pipe(
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['tap'])(() =>
                this.analyticsService.logEvent('SocialSignInSuccess', telemetry)
              ),
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['catchError'])(error => {
                this.analyticsService.logEvent('SocialSignInFailed', telemetry);
                console.error(error);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__['throwError'])(error);
              })
            );
          }
        }
        AuthService.ɵfac = function AuthService_Factory(t) {
          return new (t || AuthService)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵinject'](
              _angular_router__WEBPACK_IMPORTED_MODULE_4__['Router']
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵinject'](
              _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__['AngularFireAuth']
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵinject'](
              _data_service__WEBPACK_IMPORTED_MODULE_6__['DataService']
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵinject'](
              _analytics_service__WEBPACK_IMPORTED_MODULE_7__['AnalyticsService']
            )
          );
        };
        AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineInjectable']({
          token: AuthService,
          factory: AuthService.ɵfac,
          providedIn: 'root'
        });
        /*@__PURE__*/ (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            AuthService,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Injectable'],
                args: [
                  {
                    providedIn: 'root'
                  }
                ]
              }
            ],
            function() {
              return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__['Router'] },
                { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__['AngularFireAuth'] },
                { type: _data_service__WEBPACK_IMPORTED_MODULE_6__['DataService'] },
                { type: _analytics_service__WEBPACK_IMPORTED_MODULE_7__['AnalyticsService'] }
              ];
            },
            null
          );
        })();

        /***/
      },

    /***/ './src/app/shared/services/data.service.ts':
      /*!*************************************************!*\
  !*** ./src/app/shared/services/data.service.ts ***!
  \*************************************************/
      /*! exports provided: DataService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'DataService', function() {
          return DataService;
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! rxjs */ './node_modules/rxjs/_esm2015/index.js'
        );
        /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! rxjs/operators */ './node_modules/rxjs/_esm2015/operators/index.js'
        );
        /* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../constants */ './src/app/shared/constants.ts'
        );
        /* harmony import */ var models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! models */ '../types/models/index.ts'
        );
        /* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @angular/fire/database */ './node_modules/@angular/fire/__ivy_ngcc__/database/es2015/index.js'
        );
        /* harmony import */ var _analytics_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./analytics.service */ './src/app/shared/services/analytics.service.ts'
        );
        /* harmony import */ var _participations_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ./participations.service */ './src/app/shared/services/participations.service.ts'
        );

        class DataService {
          constructor(angularFireDatabase, analyticsService, participationsService) {
            this.angularFireDatabase = angularFireDatabase;
            this.analyticsService = analyticsService;
            this.participationsService = participationsService;
          }
          getUserById(userId) {
            const telemetry = { userId };
            this.analyticsService.logEvent('GetUserById', telemetry);
            return this.angularFireDatabase
              .object(`users/${userId}`)
              .valueChanges()
              .pipe(
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['tap'])(() =>
                  this.analyticsService.logEvent('GetUserByIdSuccess', telemetry)
                ),
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['map'])(user => Object.assign({ id: userId }, user)),
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['map'])(user => {
                  this.parseBereavedParticipation(user);
                  this.parseParticipateParticipation(user);
                  this.parseHostParticipation(user);
                  return user;
                }),
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['catchError'])(error => {
                  this.analyticsService.logEvent(
                    'GetUserByIdFailed',
                    Object.assign(Object.assign({}, telemetry), { error })
                  );
                  console.error(error);
                  return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__['throwError'])(error);
                })
              );
          }
          updateUserLastSignIn(user) {
            const telemetry = { userId: user.id };
            this.analyticsService.logEvent('UpdateUserLastSignIn', telemetry);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__['from'])(
              this.angularFireDatabase.object(`users/${user.id}/lastSignInDate`).set(Date.now())
            ).pipe(
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['tap'])(() => {
                this.analyticsService.logEvent('UpdateUserLastSignInSuccess', telemetry);
              }),
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['map'])(() => true),
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['catchError'])(error => {
                this.analyticsService.logEvent(
                  'UpdateUserLastSignInFailed',
                  Object.assign(Object.assign({}, telemetry), { error })
                );
                console.error(error);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__['throwError'])(error);
              })
            );
          }
          createMeeting(user, meetingForm, year = _constants__WEBPACK_IMPORTED_MODULE_3__['MEMORIAL_YEAR']) {
            const parsedMeeting = Object.assign(Object.assign({}, meetingForm), {
              date: Date.parse(`${meetingForm.date}T${meetingForm.hour}`),
              count: 0,
              contact: {
                firstName: user.profile.firstName,
                lastName: user.profile.lastName,
                phoneNumber: user.profile.phoneNumber,
                email: user.profile.email
              }
            });
            const telemetry = { meeting: parsedMeeting, hostId: user.id, year };
            this.analyticsService.logEvent('CreateMeeting', telemetry);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__['from'])(
              this.angularFireDatabase.list(`events/${year}/${user.id}`).push(parsedMeeting)
            ).pipe(
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['tap'])(() => {
                this.analyticsService.logEvent('CreateMeetingSuccess', telemetry);
              }),
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['map'])(meetingSnapshot =>
                Object.assign(Object.assign({}, parsedMeeting), { hostId: user.id, id: meetingSnapshot.key })
              ),
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['catchError'])(error => {
                this.analyticsService.logEvent(
                  'CreateMeetingFailed',
                  Object.assign(Object.assign({}, telemetry), { error })
                );
                console.error(error);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__['throwError'])(error);
              })
            );
          }
          updateMeeting(
            hostId,
            meetingId,
            meetingForm,
            year = _constants__WEBPACK_IMPORTED_MODULE_3__['MEMORIAL_YEAR']
          ) {
            const parsedMeeting = Object.assign(Object.assign({}, meetingForm), {
              date: Date.parse(`${meetingForm.date}T${meetingForm.hour}`)
            });
            const telemetry = { meeting: parsedMeeting, hostId, meetingId, year };
            this.analyticsService.logEvent('UpdateMeeting', telemetry);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__['from'])(
              this.angularFireDatabase.object(`events/${year}/${hostId}/${meetingId}`).update(parsedMeeting)
            ).pipe(
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['tap'])(() => {
                this.analyticsService.logEvent('UpdateMeetingSuccess', telemetry);
              }),
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['map'])(() => true),
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['catchError'])(error => {
                this.analyticsService.logEvent(
                  'UpdateMeetingFailed',
                  Object.assign(Object.assign({}, telemetry), { error })
                );
                console.error(error);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__['throwError'])(error);
              })
            );
          }
          deleteMeeting(hostId, meetingId, year = _constants__WEBPACK_IMPORTED_MODULE_3__['MEMORIAL_YEAR']) {
            const telemetry = { hostId, meetingId, year };
            this.analyticsService.logEvent('DeleteMeeting', telemetry);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__['from'])(
              this.angularFireDatabase.object(`events/${year}/${hostId}/${meetingId}`).remove()
            ).pipe(
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['tap'])(() => {
                this.analyticsService.logEvent('DeleteMeetingSuccess', telemetry);
              }),
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['map'])(() => true),
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['catchError'])(error => {
                this.analyticsService.logEvent(
                  'DeleteMeetingFailed',
                  Object.assign(Object.assign({}, telemetry), { error })
                );
                console.error(error);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__['throwError'])(error);
              })
            );
          }
          updateUserMapGuideLastVisit(userId) {
            const now = Date.now();
            const telemetry = { now };
            this.analyticsService.logEvent('UserMapGuideLastVisit', telemetry);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__['from'])(
              this.angularFireDatabase.object(`users/${userId}/meetingMapGuideLastVisit`).set(now)
            ).pipe(
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['tap'])(() => {
                this.analyticsService.logEvent('UserMapGuideLastVisitSuccess', telemetry);
              }),
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['catchError'])(error => {
                this.analyticsService.logEvent(
                  'UserMapGuideLastVisitFailed',
                  Object.assign(Object.assign({}, telemetry), { error })
                );
                console.error(error);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__['throwError'])(error);
              })
            );
          }
          setUserRole(user, role) {
            const telemetry = { role };
            this.analyticsService.logEvent('SetUserType', telemetry);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__['from'])(
              this.angularFireDatabase.object(`users/${user.id}/role`).set(role)
            ).pipe(
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['tap'])(() =>
                this.analyticsService.logEvent('SetUserTypeSuccess', telemetry)
              ),
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['catchError'])(error => {
                this.analyticsService.logEvent(
                  'SetUserTypeFailed',
                  Object.assign(Object.assign({}, telemetry), { error })
                );
                console.error(error);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__['throwError'])(error);
              })
            );
          }
          setUserProfile(user, profile) {
            const telemetry = { userId: user.id };
            this.analyticsService.logEvent('SetUserProfile', telemetry);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__['from'])(
              this.angularFireDatabase.object(`users/${user.id}/profile`).set(profile)
            ).pipe(
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['tap'])(() =>
                this.analyticsService.logEvent('SetUserProfileSuccess', telemetry)
              ),
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['catchError'])(error => {
                this.analyticsService.logEvent(
                  'SetUserProfileFailed',
                  Object.assign(Object.assign({}, telemetry), { error })
                );
                console.error(error);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__['throwError'])(error);
              })
            );
          }
          setUserVolunteer(user, isVolunteer) {
            const telemetry = { isVolunteer };
            this.analyticsService.logEvent('SetUserVolunteer', telemetry);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__['from'])(
              this.angularFireDatabase.object(`users/${user.id}/isVolunteer`).set(isVolunteer)
            ).pipe(
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['tap'])(() =>
                this.analyticsService.logEvent('SetUserVolunteerSuccess', telemetry)
              ),
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['catchError'])(error => {
                this.analyticsService.logEvent(
                  'SetUserVolunteerFailed',
                  Object.assign(Object.assign({}, telemetry), { error })
                );
                console.error(error);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__['throwError'])(error);
              })
            );
          }
          bereavedVolunteer(volunteer, bereaved) {
            const telemetry = { volunteerId: volunteer.id, bereavedId: bereaved.id };
            this.analyticsService.logEvent('BereavedVolunteer', telemetry);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__['from'])(
              this.angularFireDatabase.object(`users/${bereaved.id}/volunteer`).set({
                id: volunteer.id,
                firstName: volunteer.profile.firstName,
                lastName: volunteer.profile.lastName
              })
            ).pipe(
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['tap'])(() =>
                this.analyticsService.logEvent('BereavedVolunteerSuccess', telemetry)
              ),
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['catchError'])(error => {
                this.analyticsService.logEvent(
                  'BereavedVolunteerFailed',
                  Object.assign(Object.assign({}, telemetry), { error })
                );
                console.error(error);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__['throwError'])(error);
              })
            );
          }
          removeVolunteer(bereaved) {
            const telemetry = { bereavedId: bereaved.id };
            this.analyticsService.logEvent('RemoveVolunteer', telemetry);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__['from'])(
              this.angularFireDatabase.object(`users/${bereaved.id}/volunteer`).remove()
            ).pipe(
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['tap'])(() =>
                this.analyticsService.logEvent('RemoveVolunteerSuccess', telemetry)
              ),
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['catchError'])(error => {
                this.analyticsService.logEvent(
                  'RemoveVolunteerFailed',
                  Object.assign(Object.assign({}, telemetry), { error })
                );
                console.error(error);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__['throwError'])(error);
              })
            );
          }
          setBereavedStatus(bereaved, status, year = _constants__WEBPACK_IMPORTED_MODULE_3__['MEMORIAL_YEAR']) {
            const telemetry = { userId: bereaved.id, status, year };
            this.analyticsService.logEvent('SetBereavedStatus', telemetry);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__['from'])(
              this.angularFireDatabase.object(`users/${bereaved.id}/bereavedParticipation/${year}/status`).set(status)
            ).pipe(
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['tap'])(() =>
                this.analyticsService.logEvent('SetBereavedStatusSuccess', telemetry)
              ),
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['catchError'])(error => {
                this.analyticsService.logEvent(
                  'SetBereavedStatusFailed',
                  Object.assign(Object.assign({}, telemetry), { error })
                );
                console.error(error);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__['throwError'])(error);
              })
            );
          }
          setBereavedNotes(bereaved, notes, year = _constants__WEBPACK_IMPORTED_MODULE_3__['MEMORIAL_YEAR']) {
            const telemetry = { userId: bereaved.id, notes, year };
            this.analyticsService.logEvent('SetBereavedNotes', telemetry);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__['from'])(
              this.angularFireDatabase.object(`users/${bereaved.id}/bereavedParticipation/${year}/notes`).set(notes)
            ).pipe(
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['tap'])(() =>
                this.analyticsService.logEvent('SetBereavedNotesSuccess', telemetry)
              ),
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['catchError'])(error => {
                this.analyticsService.logEvent(
                  'SetBereavedNotesFailed',
                  Object.assign(Object.assign({}, telemetry), { error })
                );
                console.error(error);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__['throwError'])(error);
              })
            );
          }
          setUserAddress(user, address) {
            const telemetry = { userId: user.id, address };
            this.analyticsService.logEvent('setUserAddress', telemetry);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__['from'])(
              this.angularFireDatabase.object(`users/${user.id}/profile/address`).set(address)
            ).pipe(
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['tap'])(() =>
                this.analyticsService.logEvent('setUserAddressSuccess', telemetry)
              ),
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['catchError'])(error => {
                this.analyticsService.logEvent(
                  'setUserAddressFailed',
                  Object.assign(Object.assign({}, telemetry), { error })
                );
                console.error(error);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__['throwError'])(error);
              })
            );
          }
          setUserBirthDate(user, birthDate) {
            const telemetry = { userId: user.id, birthDate };
            this.analyticsService.logEvent('setUserBirthDate', telemetry);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__['from'])(
              this.angularFireDatabase.object(`users/${user.id}/profile/birthDay`).set(birthDate)
            ).pipe(
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['tap'])(() =>
                this.analyticsService.logEvent('setUserBirthDateSuccess', telemetry)
              ),
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['catchError'])(error => {
                this.analyticsService.logEvent(
                  'setUserBirthDateFailed',
                  Object.assign(Object.assign({}, telemetry), { error })
                );
                console.error(error);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__['throwError'])(error);
              })
            );
          }
          setBereavedProfile(bereaved, bereavedProfile) {
            this.analyticsService.logEvent('SetBereavedProfile', {
              userId: bereaved.id
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__['from'])(
              this.angularFireDatabase.object(`users/${bereaved.id}/bereavedProfile`).set(bereavedProfile)
            ).pipe(
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['tap'])(() =>
                this.analyticsService.logEvent('SetBereavedProfileSuccess', {
                  userId: bereaved.id
                })
              ),
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['catchError'])(error => {
                this.analyticsService.logEvent('SetBereavedProfileFailed', {
                  userId: bereaved.id
                });
                console.error(error);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__['throwError'])(error);
              })
            );
          }
          setBereavedGuidance(bereaved, guidance, year = _constants__WEBPACK_IMPORTED_MODULE_3__['MEMORIAL_YEAR']) {
            const telemetry = { userId: bereaved.id, guidance, year };
            this.analyticsService.logEvent('SetBereavedGuidance', telemetry);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__['from'])(
              this.angularFireDatabase
                .object(`users/${bereaved.id}/bereavedParticipation/${year}/guidance`)
                .set(guidance)
            ).pipe(
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['tap'])(() =>
                this.analyticsService.logEvent('SetBereavedGuidanceSuccess', telemetry)
              ),
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['catchError'])(error => {
                this.analyticsService.logEvent(
                  'SetBereavedGuidanceFailed',
                  Object.assign(Object.assign({}, telemetry), { error })
                );
                console.error(error);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__['throwError'])(error);
              })
            );
          }
          getBereaveds(year = _constants__WEBPACK_IMPORTED_MODULE_3__['MEMORIAL_YEAR']) {
            const telemetry = { year };
            this.analyticsService.logEvent('GetBereaveds', telemetry);
            return this.angularFireDatabase
              .list(`users`, ref =>
                ref.orderByChild('role').equalTo(models__WEBPACK_IMPORTED_MODULE_4__['UserRole'].bereaved)
              )
              .snapshotChanges(['child_changed', 'child_removed']) // TODO: Workaround for loop
              .pipe(
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['map'])(usersSnapshot =>
                  usersSnapshot
                    .map(userSnapshot => Object.assign({ id: userSnapshot.key }, userSnapshot.payload.val()))
                    .filter(user => !!user.profile)
                    .map(user => {
                      this.parseBereavedParticipation(user, year);
                      return user;
                    })
                ),
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['tap'])(bereaveds =>
                  this.analyticsService.logEvent(
                    'GetBereavedsSuccess',
                    Object.assign(Object.assign({}, telemetry), { count: bereaveds.length })
                  )
                ),
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['catchError'])(error => {
                  this.analyticsService.logEvent(
                    'GetBereavedsFailed',
                    Object.assign(Object.assign({}, telemetry), { error })
                  );
                  console.error(error);
                  return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__['throwError'])(error);
                })
              );
          }
          getUsers() {
            const telemetry = {};
            this.analyticsService.logEvent('GetUsers');
            return this.angularFireDatabase
              .list(`users`)
              .snapshotChanges(['child_changed', 'child_removed']) // TODO: Workaround for loop
              .pipe(
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['map'])(usersSnapshot =>
                  usersSnapshot
                    .map(userSnapshot => Object.assign({ id: userSnapshot.key }, userSnapshot.payload.val()))
                    .filter(user => !!user.profile)
                ),
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['tap'])(users =>
                  this.analyticsService.logEvent(
                    'GetUsersSuccess',
                    Object.assign(Object.assign({}, telemetry), { count: users.length })
                  )
                ),
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['catchError'])(error => {
                  this.analyticsService.logEvent('GetUsersFailed');
                  console.error(error);
                  return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__['throwError'])(error);
                })
              );
          }
          getMeeting(hostId, meetingId, year = _constants__WEBPACK_IMPORTED_MODULE_3__['MEMORIAL_YEAR']) {
            const telemetry = { hostId, meetingId, year };
            this.analyticsService.logEvent('GetMeeting', telemetry);
            return this.angularFireDatabase
              .object(`events/${year}/${hostId}/${meetingId}`)
              .snapshotChanges()
              .pipe(
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['tap'])(() =>
                  this.analyticsService.logEvent('GetMeetingSuccess', telemetry)
                ),
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['map'])(meetingSnapshot =>
                  Object.assign(Object.assign({}, meetingSnapshot.payload.val()), { hostId, id: meetingSnapshot.key })
                ),
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['catchError'])(error => {
                  this.analyticsService.logEvent('GetMeetingFailed', telemetry);
                  console.error(error);
                  return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__['throwError'])(error);
                })
              );
          }
          getMeetingParticipates(hostId, meetingId, year = _constants__WEBPACK_IMPORTED_MODULE_3__['MEMORIAL_YEAR']) {
            const telemetry = { hostId, meetingId, year };
            this.analyticsService.logEvent('GetMeetingParticipates', telemetry);
            return this.angularFireDatabase
              .list(`eventsParticipates/${year}/${hostId}/${meetingId}`)
              .snapshotChanges()
              .pipe(
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['tap'])(() =>
                  this.analyticsService.logEvent('getMeetingParticipatesSuccess', telemetry)
                ),
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['map'])(participates =>
                  participates.map(participate => Object.assign({ id: participate.key }, participate.payload.val()))
                ),
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['catchError'])(error => {
                  this.analyticsService.logEvent('getMeetingParticipatesFailed', telemetry);
                  console.log(error);
                  return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__['throwError'])(error);
                })
              );
          }
          getMeetings(year = _constants__WEBPACK_IMPORTED_MODULE_3__['MEMORIAL_YEAR']) {
            const telemetry = { year };
            this.analyticsService.logEvent('GetMeetings', telemetry);
            return this.angularFireDatabase
              .list(`events/${year}`)
              .snapshotChanges()
              .pipe(
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['tap'])(() =>
                  this.analyticsService.logEvent('GetMeetingsSuccess', telemetry)
                ),
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['map'])(meetingsSnapshot => {
                  const meetings = [];
                  for (const hostMeetingsSnapshot of meetingsSnapshot) {
                    const hostId = hostMeetingsSnapshot.key;
                    const hostMeetings = this.firebaseMapToArray(hostMeetingsSnapshot.payload.val(), { hostId });
                    meetings.push(...hostMeetings);
                  }
                  return meetings;
                }),
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['catchError'])(error => {
                  this.analyticsService.logEvent('GetMeetingsFailed', telemetry);
                  console.log(error);
                  return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__['throwError'])(error);
                })
              );
          }
          getAllMeetings() {
            const telemetry = {};
            this.analyticsService.logEvent('GetAllMeetings', telemetry);
            return this.angularFireDatabase
              .list(`events`)
              .snapshotChanges()
              .pipe(
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['tap'])(() =>
                  this.analyticsService.logEvent('GetAllMeetingsSuccess', telemetry)
                ),
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['map'])(meetingsSnapshot => {
                  const meetings = [];
                  for (const yearlyMeetingsSnapshot of meetingsSnapshot) {
                    const yearlyMeetings = this.firebaseMapToArray(yearlyMeetingsSnapshot.payload.val());
                    for (const hostMeetingsMap of yearlyMeetings) {
                      const hostId = hostMeetingsMap.id;
                      delete hostMeetingsMap.id;
                      const hostMeetings = this.firebaseMapToArray(hostMeetingsMap, { hostId });
                      meetings.push(...hostMeetings);
                    }
                  }
                  return meetings;
                }),
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['catchError'])(error => {
                  this.analyticsService.logEvent('GetAllMeetingsFailed', telemetry);
                  console.log(error);
                  return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__['throwError'])(error);
                })
              );
          }
          getNoBerevedMeetings(year = _constants__WEBPACK_IMPORTED_MODULE_3__['MEMORIAL_YEAR']) {
            return this.getMeetings(year).pipe(
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['map'])(meetings =>
                meetings.filter(meeting => !meeting.bereaved)
              )
            );
          }
          bereavedJoinMeeting(bereaved, meeting, year = _constants__WEBPACK_IMPORTED_MODULE_3__['MEMORIAL_YEAR']) {
            const telemetry = {
              userId: bereaved.id,
              hostId: meeting.hostId,
              id: meeting.id,
              year
            };
            this.analyticsService.logEvent('BereavedJoinMeeting', telemetry);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__['combineLatest'])([
              this.getUserById(bereaved.id),
              this.getMeeting(meeting.hostId, meeting.id, year)
            ]).pipe(
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['take'])(1),
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['tap'])(([bereaved, meeting]) => {
                if (!this.participationsService.isBereavedCanParticipatingMeeting(bereaved, meeting)) {
                  throw new Error("Bereaved can't participate meeting.");
                }
              }),
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['switchMap'])(([b, m]) => {
                const meetingBereaved = {
                  id: b.id,
                  firstName: b.profile.firstName,
                  lastName: b.profile.lastName,
                  email: b.profile.email,
                  phoneNumber: b.profile.phoneNumber,
                  slains: b.bereavedProfile.slains
                };
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__['from'])(
                  this.angularFireDatabase.object(`events/${year}/${m.hostId}/${m.id}/bereaved`).set(meetingBereaved)
                );
              }),
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['tap'])(() =>
                this.analyticsService.logEvent('BereavedJoinMeetingSuccess', telemetry)
              ),
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['map'])(() => true),
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['catchError'])(error => {
                this.analyticsService.logEvent(
                  'BereavedJoinMeetingFailed',
                  Object.assign(Object.assign({}, telemetry), { error })
                );
                console.error(error);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__['throwError'])(error);
              })
            );
          }
          participateJoinMeeting(
            participate,
            meeting,
            accompanies,
            year = _constants__WEBPACK_IMPORTED_MODULE_3__['MEMORIAL_YEAR']
          ) {
            const telemetry = {
              userId: participate.id,
              hostId: meeting.hostId,
              id: meeting.id,
              year
            };
            this.analyticsService.logEvent('ParticipateJoinMeeting', telemetry);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__['combineLatest'])([
              this.getUserById(participate.id),
              this.getMeeting(meeting.hostId, meeting.id, year)
            ]).pipe(
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['take'])(1),
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['tap'])(([p, m]) => {
                if (!this.participationsService.isParticipateCanParticipatingMeeting(p, m)) {
                  throw new Error("Participate can't participate meeting.");
                }
              }),
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['switchMap'])(([p, m]) => {
                const meetingParticipate = {
                  firstName: p.profile.firstName,
                  lastName: p.profile.lastName,
                  email: p.profile.email,
                  phoneNumber: p.profile.phoneNumber,
                  accompanies
                };
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__['from'])(
                  this.angularFireDatabase
                    .object(`eventsParticipates/${year}/${m.hostId}/${m.id}/${p.id}`)
                    .set(meetingParticipate)
                );
              }),
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['tap'])(() =>
                this.analyticsService.logEvent('ParticipateJoinMeetingSuccess', telemetry)
              ),
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['map'])(() => true),
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['catchError'])(error => {
                this.analyticsService.logEvent(
                  'ParticipateJoinMeetingFailed',
                  Object.assign(Object.assign({}, telemetry), { error })
                );
                console.error(error);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__['throwError'])(error);
              })
            );
          }
          participateLeaveMeeting(user, meeting, year = _constants__WEBPACK_IMPORTED_MODULE_3__['MEMORIAL_YEAR']) {
            const telemetry = {
              userId: user.id,
              hostId: meeting.hostId,
              id: meeting.id,
              year
            };
            this.analyticsService.logEvent('ParticipateLeaveMeeting', telemetry);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__['from'])(
              this.angularFireDatabase
                .object(`eventsParticipates/${year}/${meeting.hostId}/${meeting.id}/${user.id}`)
                .remove()
            ).pipe(
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['tap'])(() =>
                this.analyticsService.logEvent('ParticipateLeaveMeetingSuccess', telemetry)
              ),
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['map'])(() => true),
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['catchError'])(error => {
                this.analyticsService.logEvent(
                  'ParticipateLeaveMeetingFailed',
                  Object.assign(Object.assign({}, telemetry), { error })
                );
                console.error(error);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__['throwError'])(error);
              })
            );
          }
          bereavedLeaveMeeting(bereaved, meeting, year = _constants__WEBPACK_IMPORTED_MODULE_3__['MEMORIAL_YEAR']) {
            const telemetry = {
              userId: bereaved.id,
              hostId: meeting.hostId,
              id: meeting.id,
              year
            };
            this.analyticsService.logEvent('BereavedLeaveMeeting', telemetry);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__['from'])(
              this.angularFireDatabase.object(`events/${year}/${meeting.hostId}/${meeting.id}/bereaved`).remove()
            ).pipe(
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['tap'])(() =>
                this.analyticsService.logEvent('BereavedLeaveMeetingSuccess', telemetry)
              ),
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['map'])(() => true),
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['catchError'])(error => {
                this.analyticsService.logEvent(
                  'BereavedLeaveMeetingFailed',
                  Object.assign(Object.assign({}, telemetry), { error })
                );
                console.error(error);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__['throwError'])(error);
              })
            );
          }
          postContact(contactForm, user) {
            contactForm.date = new Date().getTime();
            const telemetry = { userId: user && user.id };
            this.analyticsService.logEvent('PostContact', telemetry);
            return this.angularFireDatabase
              .list(`contacts/${user ? user.id : 'anonymous'}`)
              .push(contactForm)
              .then(
                result => {
                  this.analyticsService.logEvent('PostContactSuccess', telemetry);
                },
                error => {
                  this.analyticsService.logEvent(
                    'PostContactFailed',
                    Object.assign(Object.assign({}, telemetry), { error })
                  );
                  console.error(error);
                  throw error;
                }
              );
          }
          parseHostParticipation(user, year = _constants__WEBPACK_IMPORTED_MODULE_3__['MEMORIAL_YEAR']) {
            if (user.hostParticipation && user.hostParticipation[year] && user.hostParticipation[year]) {
              const meetings = this.firebaseMapToArray(user.hostParticipation[year].meetings, { hostId: user.id });
              const hostParticipation = {
                meetings
              };
              user.hostParticipation[year] = hostParticipation;
            }
          }
          parseParticipateParticipation(user, year = _constants__WEBPACK_IMPORTED_MODULE_3__['MEMORIAL_YEAR']) {
            if (
              user.participateParticipation &&
              user.participateParticipation[year] &&
              user.participateParticipation[year]
            ) {
              const participateMeetings = [];
              if (user.participateParticipation[year].meetings) {
                Array.from(Object.entries(user.participateParticipation[year].meetings)).forEach(
                  ([hostId, meetings]) => {
                    Array.from(Object.entries(meetings)).forEach(([id, meeting]) => {
                      participateMeetings.push({
                        id,
                        hostId,
                        title: meeting.title,
                        accompanies: meeting.accompanies
                      });
                    });
                  }
                );
              }
              const participateParticipation = {
                meetings: participateMeetings
              };
              user.participateParticipation[year] = participateParticipation;
            }
          }
          parseBereavedParticipation(user, year = _constants__WEBPACK_IMPORTED_MODULE_3__['MEMORIAL_YEAR']) {
            if (user.bereavedParticipation && user.bereavedParticipation[year] && user.bereavedParticipation[year]) {
              const bereavedMeetings = [];
              if (user.bereavedParticipation[year].meetings) {
                Array.from(Object.entries(user.bereavedParticipation[year].meetings)).forEach(([hostId, meetings]) => {
                  Array.from(Object.entries(meetings)).forEach(([id, meeting]) => {
                    bereavedMeetings.push({
                      id,
                      hostId,
                      title: meeting.title
                    });
                  });
                });
                user.bereavedParticipation[year].meetings = bereavedMeetings;
              }
            }
          }
          firebaseMapToArray(map, additionalData = {}) {
            if (map) {
              return Array.from(Object.entries(map)).map(([id, object]) =>
                Object.assign(Object.assign(Object.assign({}, object), { id }), additionalData)
              );
            }
          }
        }
        DataService.ɵfac = function DataService_Factory(t) {
          return new (t || DataService)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵinject'](
              _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__['AngularFireDatabase']
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵinject'](
              _analytics_service__WEBPACK_IMPORTED_MODULE_6__['AnalyticsService']
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵinject'](
              _participations_service__WEBPACK_IMPORTED_MODULE_7__['ParticipationsService']
            )
          );
        };
        DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineInjectable']({
          token: DataService,
          factory: DataService.ɵfac,
          providedIn: 'root'
        });
        /*@__PURE__*/ (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            DataService,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Injectable'],
                args: [
                  {
                    providedIn: 'root'
                  }
                ]
              }
            ],
            function() {
              return [
                { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__['AngularFireDatabase'] },
                { type: _analytics_service__WEBPACK_IMPORTED_MODULE_6__['AnalyticsService'] },
                { type: _participations_service__WEBPACK_IMPORTED_MODULE_7__['ParticipationsService'] }
              ];
            },
            null
          );
        })();

        /***/
      },

    /***/ './src/app/shared/services/http.service.ts':
      /*!*************************************************!*\
  !*** ./src/app/shared/services/http.service.ts ***!
  \*************************************************/
      /*! exports provided: HttpService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'HttpService', function() {
          return HttpService;
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! rxjs */ './node_modules/rxjs/_esm2015/index.js'
        );
        /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! rxjs/operators */ './node_modules/rxjs/_esm2015/operators/index.js'
        );
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @angular/common/http */ './node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js'
        );
        /* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @angular/fire/auth */ './node_modules/@angular/fire/__ivy_ngcc__/auth/es2015/index.js'
        );
        /* harmony import */ var _analytics_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./analytics.service */ './src/app/shared/services/analytics.service.ts'
        );

        class HttpService {
          constructor(httpClient, angularFireAuth, analyticsService) {
            this.httpClient = httpClient;
            this.angularFireAuth = angularFireAuth;
            this.analyticsService = analyticsService;
          }
          deleteUser(user) {
            const telemetry = { userId: user.id };
            this.analyticsService.logEvent('DeleteUser', telemetry);
            return this.angularFireAuth.idToken.pipe(
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['switchMap'])(idToken => {
                return this.httpClient
                  .delete(`https://europe-west1-our-brothers.cloudfunctions.net/api/user/${user.id}`, {
                    headers: {
                      Authorization: `Bearer ${idToken}`
                    }
                  })
                  .pipe(
                    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['tap'])(() =>
                      this.analyticsService.logEvent('DeleteUserSuccess', telemetry)
                    ),
                    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['catchError'])(error => {
                      this.analyticsService.logEvent(
                        'DeleteUserFailed',
                        Object.assign(Object.assign({}, telemetry), { error })
                      );
                      console.error(error);
                      return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__['throwError'])(error);
                    })
                  );
              })
            );
          }
        }
        HttpService.ɵfac = function HttpService_Factory(t) {
          return new (t || HttpService)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵinject'](
              _angular_common_http__WEBPACK_IMPORTED_MODULE_3__['HttpClient']
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵinject'](
              _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__['AngularFireAuth']
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵinject'](
              _analytics_service__WEBPACK_IMPORTED_MODULE_5__['AnalyticsService']
            )
          );
        };
        HttpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineInjectable']({
          token: HttpService,
          factory: HttpService.ɵfac,
          providedIn: 'root'
        });
        /*@__PURE__*/ (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            HttpService,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Injectable'],
                args: [
                  {
                    providedIn: 'root'
                  }
                ]
              }
            ],
            function() {
              return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__['HttpClient'] },
                { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__['AngularFireAuth'] },
                { type: _analytics_service__WEBPACK_IMPORTED_MODULE_5__['AnalyticsService'] }
              ];
            },
            null
          );
        })();

        /***/
      },

    /***/ './src/app/shared/services/participations.service.ts':
      /*!***********************************************************!*\
  !*** ./src/app/shared/services/participations.service.ts ***!
  \***********************************************************/
      /*! exports provided: ParticipationsService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'ParticipationsService', function() {
          return ParticipationsService;
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */ var models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! models */ '../types/models/index.ts'
        );
        /* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../constants */ './src/app/shared/constants.ts'
        );

        const isUserPresentInMeeting = meeting => ({ id, hostId }) => id === meeting.id && hostId === meeting.hostId;
        const isUserBereaved = user => user.role === models__WEBPACK_IMPORTED_MODULE_1__['UserRole'].bereaved;
        class ParticipationsService {
          isUserCanHost(user) {
            var _a, _b;
            return (
              !((_a = user) === null || _a === void 0 ? void 0 : _a.role) ||
              !isUserBereaved(user) ||
              ((_b = user) === null || _b === void 0 ? void 0 : _b.isAdmin)
            );
          }
          isUserCanParticipate(user) {
            var _a, _b;
            return (
              !((_a = user) === null || _a === void 0 ? void 0 : _a.role) ||
              !isUserBereaved(user) ||
              ((_b = user) === null || _b === void 0 ? void 0 : _b.isAdmin)
            );
          }
          isUserCanTell(user) {
            var _a, _b;
            return (
              !((_a = user) === null || _a === void 0 ? void 0 : _a.role) ||
              isUserBereaved(user) ||
              ((_b = user) === null || _b === void 0 ? void 0 : _b.isAdmin)
            );
          }
          isParticipating(participates, year) {
            return participates.some(p => {
              var _a, _b, _c;
              return !!((_c =
                (_b = (_a = p) === null || _a === void 0 ? void 0 : _a[year]) === null || _b === void 0
                  ? void 0
                  : _b.meetings) === null || _c === void 0
                ? void 0
                : _c.length);
            });
          }
          isUserParticipating(user, year) {
            var _a, _b, _c;
            return this.isParticipating(
              [
                (_a = user) === null || _a === void 0 ? void 0 : _a.participateParticipation,
                (_b = user) === null || _b === void 0 ? void 0 : _b.bereavedParticipation,
                (_c = user) === null || _c === void 0 ? void 0 : _c.hostParticipation
              ],
              year
            );
          }
          isParticipateParticipatingMeeting(
            user,
            meeting,
            year = _constants__WEBPACK_IMPORTED_MODULE_2__['MEMORIAL_YEAR']
          ) {
            var _a, _b, _c, _d;
            return (_d =
              (_c =
                (_b = (_a = user) === null || _a === void 0 ? void 0 : _a.participateParticipation) === null ||
                _b === void 0
                  ? void 0
                  : _b[year]) === null || _c === void 0
                ? void 0
                : _c.meetings) === null || _d === void 0
              ? void 0
              : _d.some(isUserPresentInMeeting(meeting));
          }
          isBereavedParticipatingMeeting(
            user,
            meeting,
            year = _constants__WEBPACK_IMPORTED_MODULE_2__['MEMORIAL_YEAR']
          ) {
            var _a, _b, _c, _d;
            return (_d =
              (_c =
                (_b = (_a = user) === null || _a === void 0 ? void 0 : _a.bereavedParticipation) === null ||
                _b === void 0
                  ? void 0
                  : _b[year]) === null || _c === void 0
                ? void 0
                : _c.meetings) === null || _d === void 0
              ? void 0
              : _d.some(isUserPresentInMeeting(meeting));
          }
          isHostParticipatingMeeting(user, meeting) {
            var _a;
            return ((_a = user) === null || _a === void 0 ? void 0 : _a.id) === meeting.hostId;
          }
          isUserParticipatingMeeting(user, meeting, year = _constants__WEBPACK_IMPORTED_MODULE_2__['MEMORIAL_YEAR']) {
            if (!user || !meeting) {
              return false;
            }
            return (
              this.isParticipateParticipatingMeeting(user, meeting, year) ||
              this.isBereavedParticipatingMeeting(user, meeting, year) ||
              this.isHostParticipatingMeeting(user, meeting)
            );
          }
          isUserCanParticipatingMeeting(user, meeting) {
            if (!user || !meeting) {
              return false;
            }
            if (this.isUserParticipatingMeeting(user, meeting)) {
              return false;
            }
            if (user.role === models__WEBPACK_IMPORTED_MODULE_1__['UserRole'].bereaved) {
              return this.isBereavedCanParticipatingMeeting(user, meeting);
            } else {
              return this.isParticipateCanParticipatingMeeting(user, meeting);
            }
          }
          isBereavedCanParticipatingMeeting(
            user,
            meeting,
            year = _constants__WEBPACK_IMPORTED_MODULE_2__['MEMORIAL_YEAR']
          ) {
            if (!user || !meeting || user.role !== models__WEBPACK_IMPORTED_MODULE_1__['UserRole'].bereaved) {
              return false;
            }
            if (this.isBereavedParticipatingMeeting(user, meeting, year)) {
              return false;
            }
            return (
              !meeting.bereaved &&
              this.isBereavedHaveAllDetails(user) &&
              this.isBereavedHaveSlainDetails(user) &&
              this.isBereavedAnsweredTrainingMeeting(user)
            );
          }
          isParticipateCanParticipatingMeeting(
            user,
            meeting,
            year = _constants__WEBPACK_IMPORTED_MODULE_2__['MEMORIAL_YEAR']
          ) {
            if (!user || !meeting || user.role === models__WEBPACK_IMPORTED_MODULE_1__['UserRole'].bereaved) {
              return false;
            }
            if (this.isParticipateParticipatingMeeting(user, meeting, year)) {
              return false;
            }
            return !meeting.invited && meeting.count <= meeting.capacity && this.isParticipateHaveAllDetails(user);
          }
          isUserHaveAllDetails(user) {
            if (!user) {
              return false;
            }
            if (user.role === models__WEBPACK_IMPORTED_MODULE_1__['UserRole'].bereaved) {
              return this.isBereavedHaveAllDetails(user);
            } else {
              return this.isParticipateHaveAllDetails(user);
            }
          }
          isParticipateHaveAllDetails(user) {
            var _a;
            if ((_a = user) === null || _a === void 0 ? void 0 : _a.profile) {
              const { email, firstName, lastName, phoneNumber } = user.profile;
              return !!(email && firstName && lastName && phoneNumber);
            }
            return false;
          }
          isBereavedHaveAllDetails(user) {
            if (!user) {
              return false;
            }
            return (
              this.isBereavedHaveProfileDetails(user) &&
              this.isBereavedHaveSlainDetails(user) &&
              this.isBereavedAnsweredTrainingMeeting(user)
            );
          }
          isBereavedHaveProfileDetails(user) {
            var _a;
            if ((_a = user) === null || _a === void 0 ? void 0 : _a.profile) {
              const { birthDay, address } = user.profile;
              return birthDay && address && this.isParticipateHaveAllDetails(user);
            }
            return false;
          }
          isBereavedHaveSlainDetails(user) {
            var _a;
            return !!((_a = user) === null || _a === void 0 ? void 0 : _a.bereavedProfile);
          }
          isBereavedAnsweredTrainingMeeting(user, year = _constants__WEBPACK_IMPORTED_MODULE_2__['MEMORIAL_YEAR']) {
            var _a, _b, _c, _d;
            return (_d =
              (_c =
                (_b = (_a = user) === null || _a === void 0 ? void 0 : _a.bereavedParticipation) === null ||
                _b === void 0
                  ? void 0
                  : _b[year]) === null || _c === void 0
                ? void 0
                : _c.guidance) === null || _d === void 0
              ? void 0
              : _d.answered;
          }
        }
        ParticipationsService.ɵfac = function ParticipationsService_Factory(t) {
          return new (t || ParticipationsService)();
        };
        ParticipationsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineInjectable']({
          token: ParticipationsService,
          factory: ParticipationsService.ɵfac,
          providedIn: 'root'
        });
        /*@__PURE__*/ (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            ParticipationsService,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Injectable'],
                args: [
                  {
                    providedIn: 'root'
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

    /***/ './src/app/shared/services/signIn.service.ts':
      /*!***************************************************!*\
  !*** ./src/app/shared/services/signIn.service.ts ***!
  \***************************************************/
      /*! exports provided: SignInService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'SignInService', function() {
          return SignInService;
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );

        class SignInService {}
        SignInService.ɵfac = function SignInService_Factory(t) {
          return new (t || SignInService)();
        };
        SignInService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineInjectable']({
          token: SignInService,
          factory: SignInService.ɵfac,
          providedIn: 'root'
        });
        /*@__PURE__*/ (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            SignInService,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Injectable'],
                args: [
                  {
                    providedIn: 'root'
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

    /***/ './src/app/shared/services/utils.service.ts':
      /*!**************************************************!*\
  !*** ./src/app/shared/services/utils.service.ts ***!
  \**************************************************/
      /*! exports provided: UtilsService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'UtilsService', function() {
          return UtilsService;
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../constants */ './src/app/shared/constants.ts'
        );

        class UtilsService {
          constructor() {
            this.phonePattern = /^05(\d-?){8}$/;
            // ^+927 (\d-?){10}$/
            this.namePattern = /^([A-Za-zא-ת\- '"])+$/;
            this.subjectPattern = /^([A-Za-zא-ת\- \?\!\(\)\[\]\#'"])+$/;
            this.meetingAudienceLabels = {
              all: 'כולם',
              schoolStudents: 'תלמידים',
              youthMovement: 'תנועות נוער',
              militaryPreparation: 'מכינות',
              soldiers: 'חיילים',
              students: 'סטודנטים'
            };
            this.ISRAEL_PHONE_PREFIX = '972';
            this.ISRAEL_PHONE_PREFIX_REGEX = new RegExp(`^(\\+${this.ISRAEL_PHONE_PREFIX})?(0)?`);
          }
          isMobile() {
            const agent = navigator.userAgent || navigator.vendor || window.opera;
            // tslint:disable-next-line: max-line-length
            return (
              /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
                agent
              ) ||
              /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
                agent.substr(0, 4)
              )
            );
          }
          toInternationalPhoneNumber(phoneNumber) {
            return phoneNumber.replace(this.ISRAEL_PHONE_PREFIX_REGEX, `+${this.ISRAEL_PHONE_PREFIX}`);
          }
          toLocalPhoneNumber(phoneNumber) {
            return phoneNumber.replace(this.ISRAEL_PHONE_PREFIX_REGEX, '0');
          }
          validateMeetingDate(control) {
            if (control.value) {
              const date = Number.parseInt(control.value.split('-')[2], 10);
              if (
                date <= _constants__WEBPACK_IMPORTED_MODULE_1__['MAX_DATE'].getDate() &&
                date >= _constants__WEBPACK_IMPORTED_MODULE_1__['MIN_DATE'].getDate()
              ) {
                return null;
              }
            }
            return {
              dateInvalid: true
            };
          }
          filteringMeetings(meetings, query) {
            if (!meetings) {
              return [];
            }
            if (!query || !query.trim()) {
              return meetings.slice();
            }
            const keywords = query.match(/([^\s]+)/g) || [];
            return meetings.filter(meeting =>
              keywords.every(
                keyword =>
                  meeting.title.includes(keyword) ||
                  meeting.address.formattedAddress.includes(keyword) ||
                  (meeting.bereaved &&
                    ((meeting.bereaved.firstName || '') + (meeting.bereaved.lastName || '')).includes(keyword))
              )
            );
          }
          filteringBereaveds(bereaveds, query, year = _constants__WEBPACK_IMPORTED_MODULE_1__['MEMORIAL_YEAR']) {
            if (!bereaveds) {
              return [];
            }
            if (!query || !query.trim()) {
              return bereaveds;
            }
            query = query.replace(/-/g, '');
            const keywords = query.match(/([^\s]+)/g) || [];
            return bereaveds.filter(bereaved => {
              return keywords.every(keyword => {
                var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
                if (bereaved.id.includes(keyword)) {
                  return true;
                } else if (bereaved.profile) {
                  const { firstName = '', lastName = '', address, email, phoneNumber } = bereaved.profile;
                  const fullName = firstName + lastName;
                  if (fullName.includes(keyword)) {
                    return true;
                  }
                  if ((_a = email) === null || _a === void 0 ? void 0 : _a.includes(keyword)) {
                    return true;
                  }
                  if (
                    (_c = (_b = address) === null || _b === void 0 ? void 0 : _b.formattedAddress) === null ||
                    _c === void 0
                      ? void 0
                      : _c.includes(keyword)
                  ) {
                    return true;
                  }
                  const parsedNumber =
                    (_d = phoneNumber) === null || _d === void 0
                      ? void 0
                      : _d.replace(`^\+${this.ISRAEL_PHONE_PREFIX}`, '0');
                  if ((_e = parsedNumber) === null || _e === void 0 ? void 0 : _e.includes(keyword)) {
                    return true;
                  }
                  if ((_f = bereaved.volunteer) === null || _f === void 0 ? void 0 : _f.id.includes(keyword)) {
                    return true;
                  }
                  if (
                    (
                      (((_g = bereaved.volunteer) === null || _g === void 0 ? void 0 : _g.firstName) || '') +
                      (((_h = bereaved.volunteer) === null || _h === void 0 ? void 0 : _h.lastName) || '')
                    ).includes(keyword)
                  ) {
                    return true;
                  }
                  const slain =
                    (_k = (_j = bereaved.bereavedProfile) === null || _j === void 0 ? void 0 : _j.slains) === null ||
                    _k === void 0
                      ? void 0
                      : _k.some(s => ((s.firstName || '') + (s.lastName || '')).includes(keyword));
                  if (slain) {
                    return true;
                  }
                  if (
                    (_o =
                      (_m = (_l = bereaved.bereavedParticipation) === null || _l === void 0 ? void 0 : _l[year]) ===
                        null || _m === void 0
                        ? void 0
                        : _m.meetings) === null || _o === void 0
                      ? void 0
                      : _o.some(({ title }) => title.includes(keyword))
                  ) {
                    return true;
                  }
                }
                return false;
              });
            });
          }
          // TODO: Reuse with filteringBereaveds
          filteringUsers(users, query, year = _constants__WEBPACK_IMPORTED_MODULE_1__['MEMORIAL_YEAR']) {
            if (!users) {
              return [];
            }
            if (!query || !query.trim()) {
              return users;
            }
            query = query.replace(/-/g, '');
            const keywords = query.match(/([^\s]+)/g) || [];
            return users.filter(bereaved => {
              return keywords.every(keyword => {
                var _a, _b, _c;
                if (bereaved.id.includes(keyword)) {
                  return true;
                } else if (bereaved.profile) {
                  const { firstName = '', lastName = '', email, phoneNumber } = bereaved.profile;
                  const fullName = firstName + lastName;
                  if (fullName.includes(keyword)) {
                    return true;
                  }
                  if ((_a = email) === null || _a === void 0 ? void 0 : _a.includes(keyword)) {
                    return true;
                  }
                  const parsedNumber =
                    (_b = phoneNumber) === null || _b === void 0
                      ? void 0
                      : _b.replace(`^\+${this.ISRAEL_PHONE_PREFIX}`, '0');
                  if ((_c = parsedNumber) === null || _c === void 0 ? void 0 : _c.includes(keyword)) {
                    return true;
                  }
                }
                return false;
              });
            });
          }
        }
        UtilsService.ɵfac = function UtilsService_Factory(t) {
          return new (t || UtilsService)();
        };
        UtilsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineInjectable']({
          token: UtilsService,
          factory: UtilsService.ɵfac,
          providedIn: 'root'
        });
        /*@__PURE__*/ (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            UtilsService,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Injectable'],
                args: [
                  {
                    providedIn: 'root'
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

    /***/ './src/app/shell/footer/footer.component.ts':
      /*!**************************************************!*\
  !*** ./src/app/shell/footer/footer.component.ts ***!
  \**************************************************/
      /*! exports provided: FooterComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'FooterComponent', function() {
          return FooterComponent;
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../../environments/environment */ './src/environments/environment.ts'
        );
        /* harmony import */ var _shared_services_participations_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../shared/services/participations.service */ './src/app/shared/services/participations.service.ts'
        );
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @angular/router */ './node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js'
        );

        class FooterComponent {
          constructor(participationsService) {
            this.participationsService = participationsService;
            this.version = _environments_environment__WEBPACK_IMPORTED_MODULE_1__['environment'].versions.version;
            this.revision = _environments_environment__WEBPACK_IMPORTED_MODULE_1__['environment'].versions.revision;
          }
        }
        FooterComponent.ɵfac = function FooterComponent_Factory(t) {
          return new (t || FooterComponent)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
              _shared_services_participations_service__WEBPACK_IMPORTED_MODULE_2__['ParticipationsService']
            )
          );
        };
        FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineComponent']({
          type: FooterComponent,
          selectors: [['app-footer']],
          inputs: { user: 'user' },
          decls: 92,
          vars: 3,
          consts: [
            [1, 'footer-container'],
            [1, 'footer'],
            [1, 'row'],
            [1, 'col', 'col-logo'],
            [1, 'logo-footer'],
            [1, 'col', 'col-links'],
            [1, 'title'],
            [1, 'links'],
            ['routerLink', 'home', 1, 'site-link'],
            ['routerLink', 'meetings', 1, 'site-link'],
            ['routerLink', 'about', 1, 'site-link'],
            ['routerLink', 'agenda', 1, 'site-link'],
            ['routerLink', 'questions', 1, 'site-link'],
            ['routerLink', 'gallery', 1, 'site-link'],
            ['routerLink', 'contact', 1, 'site-link'],
            [
              'href',
              '/assets/docs/\u05EA\u05E0\u05D0\u05D9%20\u05E9\u05D9\u05DE\u05D5\u05E9%20\u05D4\u05D0\u05D7\u05D9\u05DD%20\u05E9\u05DC\u05E0\u05D5.pdf',
              'target',
              '_blank',
              1,
              'site-link'
            ],
            [1, 'site-link', 3, 'routerLink'],
            ['routerLink', 'about', 1, 'site-link', 'link'],
            ['routerLink', 'team', 1, 'site-link', 'link'],
            ['routerLink', 'articles', 1, 'site-link', 'link'],
            ['routerLink', 'news', 1, 'site-link', 'link'],
            [1, 'col', 'col-details'],
            [1, 'details'],
            ['href', 'tel:+972584094624', 1, 'site-link'],
            ['href', 'mailto:info@ourbrothers.org', 1, 'site-link'],
            [1, 'socials'],
            ['href', 'https://www.facebook.com/ourbrotherss/', 'target', '_blank'],
            [
              'width',
              '10.02px',
              'height',
              '17.65px',
              'src',
              '../assets/img/facebook.png',
              1,
              'social-icon',
              'facebook-icon'
            ],
            ['href', 'mailto:info@ourbrothers.org'],
            ['width', '19.47px', 'height', '13.12px', 'src', '../assets/img/email.png', 1, 'social-icon', 'email-icon'],
            ['href', 'https://www.youtube.com/channel/UCgKTy9WBTcb2Udm0tqwIzAg', 'target', '_blank'],
            ['width', '19px', 'height', '15px', 'src', '../assets/img/youtube.png', 1, 'social-icon', 'youtube-icon'],
            ['href', 'tel:+972584094624'],
            [
              'width',
              '14.71px',
              'height',
              '14.71px',
              'src',
              '../../../assets/img/whatsapp.svg',
              1,
              'social-icon',
              'whatsapp-icon'
            ],
            ['href', 'https://instagram.com/ourbrothers2021?igshid=196ey1ufdoxz'],
            [
              'width',
              '14.12px',
              'height',
              '14.12px',
              'src',
              '../../../assets/svg/Combined Shape.svg',
              1,
              'social-icon',
              'instegram-icon'
            ],
            [1, 'hr'],
            [1, 'bottom-line'],
            [1, 'copyrights'],
            [1, 'version'],
            [1, 'footer-mobile'],
            [1, 'social-box'],
            [1, 'far', 'fa-envelope'],
            [1, 'fas', 'fa-phone'],
            ['href', 'https://wa.me/972584094624', 'target', '_blank', 1, 'site-link'],
            [1, 'fab', 'fa-whatsapp']
          ],
          template: function FooterComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div', 0);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](1, 'div', 1);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](2, 'div', 2);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](3, 'div', 3);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](4, 'div', 4);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](5, 'div', 5);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](6, 'div', 6);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](7, '\u05E0\u05D9\u05D5\u05D5\u05D8');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](8, 'div', 7);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](9, 'a', 8);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](10, '\u05D3\u05E3 \u05D4\u05D1\u05D9\u05EA');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](11, 'a', 9);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](12, '\u05DE\u05E4\u05D2\u05E9\u05D9\u05DD');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](13, 'a', 10);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                14,
                '\u05D0\u05D5\u05D3\u05D5\u05EA\u05D9\u05E0\u05D5'
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](15, 'a', 11);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                16,
                '\u05DE\u05D1\u05E0\u05D4 \u05D4\u05E2\u05E8\u05D1'
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](17, 'div', 5);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](18, 'div', 6);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](19, 'div', 7);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](20, 'a', 12);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](21, '\u05E9\u05D0\u05DC\u05D5\u05EA');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](22, 'a', 13);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](23, '\u05D2\u05DC\u05E8\u05D9\u05D4');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](24, 'a', 14);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](25, '\u05E6\u05D5\u05E8 \u05E7\u05E9\u05E8');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](26, 'a', 15);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                27,
                '\u05DE\u05D3\u05D9\u05E0\u05D9\u05D5\u05EA \u05E4\u05E8\u05D8\u05D9\u05D5\u05EA'
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](28, 'div', 5);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](29, 'div', 6);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](30, '\u05DE\u05E4\u05D2\u05E9\u05D9\u05DD');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](31, 'div', 7);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](32, 'a', 9);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                33,
                '\u05DE\u05E4\u05EA \u05DE\u05E4\u05D2\u05E9\u05D9\u05DD'
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](34, 'a', 16);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                35,
                ' \u05D0\u05E0\u05D9 \u05E8\u05D5\u05E6\u05D4 \u05DC\u05E1\u05E4\u05E8'
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](36, 'a', 16);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                37,
                ' \u05D0\u05E0\u05D9 \u05E8\u05D5\u05E6\u05D4 \u05DC\u05D0\u05E8\u05D7'
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](38, 'a', 16);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                39,
                ' \u05D0\u05E0\u05D9 \u05E8\u05D5\u05E6\u05D4 \u05DC\u05D4\u05E9\u05EA\u05EA\u05E3'
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](40, 'div', 5);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](41, 'div', 6);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                42,
                '\u05D0\u05D5\u05D3\u05D5\u05EA\u05D9\u05E0\u05D5'
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](43, 'div', 7);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](44, 'a', 17);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](45, '\u05E8\u05E7\u05E2');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](46, 'a', 18);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                47,
                ' \u05D4\u05E9\u05D5\u05EA\u05E4\u05D9\u05DD \u05E9\u05DC\u05E0\u05D5'
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](48, 'a', 19);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                49,
                '\u05E2\u05DC\u05D9\u05E0\u05D5 \u05D1\u05EA\u05E7\u05E9\u05D5\u05E8\u05EA'
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](50, 'a', 20);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                51,
                '\u05DB\u05D5\u05EA\u05D1\u05D9\u05DD \u05DC\u05E0\u05D5'
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](52, 'div', 21);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](53, 'div', 6);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                54,
                '\u05E4\u05E8\u05D8\u05D9 \u05D4\u05EA\u05E7\u05E9\u05E8\u05D5\u05EA'
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](55, 'div', 22);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](56, 'div');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](57, 'span');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](58, ' \u05D8\u05DC\u05E4\u05D5\u05DF: ');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](59, 'a', 23);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](60, '058-409-4624');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](61, 'div');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](62, 'span');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](63, ' \u05D0\u05D9\u05DE\u05D9\u05D9\u05DC: ');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](64, 'a', 24);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](65, 'info@ourbrothers.org');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](66, 'div', 25);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](67, 'a', 26);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](68, 'img', 27);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](69, 'a', 28);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](70, 'img', 29);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](71, 'a', 30);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](72, 'img', 31);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](73, 'a', 32);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](74, 'img', 33);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](75, 'a', 34);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](76, 'img', 35);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](77, 'div', 36);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](78, 'div', 37);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](79, 'div', 38);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                80,
                '\u00A9 2021 \u05DB\u05DC \u05D4\u05D6\u05DB\u05D5\u05D9\u05D5\u05EA \u05E9\u05DE\u05D5\u05E8\u05D5\u05EA \u05DC\u05D0\u05D7\u05D9\u05DD \u05E9\u05DC\u05E0\u05D5'
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](81, 'div', 39);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](82, 'div', 40);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](83, 'div', 41);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](84, 'a', 24);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](85, 'i', 42);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](86, 'div', 41);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](87, 'a', 23);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](88, 'i', 43);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](89, 'div', 41);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](90, 'a', 44);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](91, 'i', 45);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            }
            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](34);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
                'routerLink',
                ctx.participationsService.isUserCanTell(ctx.user) ? null : 'tell'
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
                'routerLink',
                ctx.participationsService.isUserCanHost(ctx.user) ? null : 'host'
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
                'routerLink',
                ctx.participationsService.isUserCanParticipate(ctx.user) ? null : 'participate'
              );
            }
          },
          directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__['RouterLinkWithHref']],
          styles: [
            '.footer-container[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  color: #999999;\n  text-align: center;\n  box-shadow: 0px 20px 30px 30px #00000010;\n}\n.footer-container[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%] {\n  display: inline-flex;\n  flex-direction: column;\n  text-align: right;\n  margin-top: 10px;\n}\n@media only screen and (max-width: 1000px) {\n  .footer-container[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%] {\n    display: flex;\n    margin-bottom: 55px;\n    text-align: center;\n  }\n}\n.footer-container[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  flex: 0 1 auto;\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n}\n.footer-container[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n  flex: 0 1 auto;\n  padding: 20px;\n}\n@media only screen and (max-width: 1000px) {\n  .footer-container[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n    padding-bottom: 0px;\n  }\n}\n.footer-container[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  min-height: 1.3em;\n  color: #00a099;\n  font-family: "arbel";\n}\n@media only screen and (max-width: 1000px) {\n  .footer-container[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n.footer-container[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col.col-logo[_ngcontent-%COMP%] {\n  align-self: center;\n  margin-top: 10px;\n}\n.footer-container[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col.col-logo[_ngcontent-%COMP%]   .logo-footer[_ngcontent-%COMP%] {\n  width: 190px;\n  height: 80px;\n  background-image: url(\'logo.png\');\n  background-size: 100%;\n  background-repeat: no-repeat;\n}\n@media only screen and (max-width: 1000px) {\n  .footer-container[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col.col-logo[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.footer-container[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col.col-links[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   .site-link[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  color: #999999;\n  transition: 0.2s;\n}\n.footer-container[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col.col-links[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   .site-link[_ngcontent-%COMP%]:hover {\n  color: #00a099;\n  transition: 0.1s;\n}\n@media only screen and (max-width: 1000px) {\n  .footer-container[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col.col-links[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   .site-link[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n}\n@media only screen and (max-width: 1000px) {\n  .footer-container[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col.col-links[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media only screen and (max-width: 1000px) {\n  .footer-container[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col.col-details[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.footer-container[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col.col-details[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.footer-container[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col.col-details[_ngcontent-%COMP%]   .socials[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n@media only screen and (max-width: 1000px) {\n  .footer-container[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col.col-details[_ngcontent-%COMP%]   .socials[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n.footer-container[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col.col-details[_ngcontent-%COMP%]   .socials[_ngcontent-%COMP%]   .social-icon[_ngcontent-%COMP%] {\n  margin: 0 5px;\n}\n.footer-container[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col.col-details[_ngcontent-%COMP%]   .socials[_ngcontent-%COMP%]   .social-icon.facebook-icon[_ngcontent-%COMP%] {\n  width: 10.02px;\n}\n.footer-container[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col.col-details[_ngcontent-%COMP%]   .socials[_ngcontent-%COMP%]   .social-icon.youtube-icon[_ngcontent-%COMP%] {\n  width: 19px;\n}\n.footer-container[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col.col-details[_ngcontent-%COMP%]   .socials[_ngcontent-%COMP%]   .social-icon.email-icon[_ngcontent-%COMP%] {\n  width: 19.47px;\n}\n@media only screen and (max-width: 1000px) {\n  .footer-container[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col.col-details[_ngcontent-%COMP%]   .socials[_ngcontent-%COMP%]   .social-icon[_ngcontent-%COMP%] {\n    margin-top: 12px;\n    text-align: center;\n  }\n}\n.footer-container[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .hr[_ngcontent-%COMP%] {\n  margin: 20px 0;\n  height: 1px;\n  background-color: #dbdbdb;\n}\n.footer-container[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .bottom-line[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  text-align: center;\n  font-size: 12px;\n  margin: 20px;\n  margin-top: 0;\n  color: #999999;\n}\n.footer-container[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .bottom-line[_ngcontent-%COMP%]   .fa-heart[_ngcontent-%COMP%] {\n  color: #00a099;\n}\n@media only screen and (max-width: 600px) {\n  .footer-container[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .version[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.footer-container[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .version[_ngcontent-%COMP%]   .version-link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #999999;\n}\n.footer-mobile[_ngcontent-%COMP%] {\n  display: none;\n}\n@media only screen and (max-width: 1000px) {\n  .footer-mobile[_ngcontent-%COMP%] {\n    display: flex;\n    position: fixed;\n    z-index: 2;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    padding: 5px;\n    background-color: #00a099;\n  }\n  .footer-mobile[_ngcontent-%COMP%]   .social-box[_ngcontent-%COMP%] {\n    flex: 1;\n    margin: 5px;\n    padding: 4px 0;\n    text-align: center;\n    background-color: white;\n    color: #00a099;\n  }\n  .footer-mobile[_ngcontent-%COMP%]   .social-box[_ngcontent-%COMP%]   .site-link[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hlbGwvZm9vdGVyL0M6XFxVc2Vyc1xcVGVoaWxhXFxsYXN0XFxvdXJCcm9cXG91ci1icm90aGVycy13ZWIvc3JjXFxhcHBcXHNoZWxsXFxmb290ZXJcXGZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hlbGwvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esd0NBQUE7QUNERjtBREdFO0VBQ0Usb0JBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNESjtBREdJO0VBTkY7SUFPSSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSxrQkFBQTtFQ0FKO0FBQ0Y7QURFSTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtBQ0FOO0FERU07RUFDRSxjQUFBO0VBQ0EsYUFBQTtBQ0FSO0FERVE7RUFKRjtJQUtJLG1CQUFBO0VDQ1I7QUFDRjtBRENRO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FDQ1Y7QURDVTtFQU5GO0lBT0ksZUFBQTtFQ0VWO0FBQ0Y7QURDUTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUNDVjtBREFVO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxpQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7QUNFWjtBRENVO0VBWEY7SUFZSSxhQUFBO0VDRVY7QUFDRjtBREdZO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNEZDtBREdjO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FDRGhCO0FESWM7RUFYRjtJQVlJLGVBQUE7RUNEZDtBQUNGO0FES1U7RUFuQkY7SUFvQkksYUFBQTtFQ0ZWO0FBQ0Y7QURPWTtFQURGO0lBRUksYUFBQTtFQ0paO0FBQ0Y7QURPVTtFQUNFLGVBQUE7QUNMWjtBRFFVO0VBQ0UsZUFBQTtBQ05aO0FET1k7RUFGRjtJQUdJLGtCQUFBO0VDSlo7QUFDRjtBREtZO0VBQ0UsYUFBQTtBQ0hkO0FESWM7RUFDRSxjQUFBO0FDRmhCO0FESWM7RUFDRSxXQUFBO0FDRmhCO0FESWM7RUFDRSxjQUFBO0FDRmhCO0FESWM7RUFYRjtJQVlJLGdCQUFBO0lBQ0Esa0JBQUE7RUNEZDtBQUNGO0FEUUk7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FDTk47QURTSTtFQUVFLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FDUk47QURVTTtFQUNFLGNBQUE7QUNSUjtBRGFNO0VBREY7SUFFSSxhQUFBO0VDVk47QUFDRjtBRFlNO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0FDVlI7QURnQkE7RUFDRSxhQUFBO0FDYkY7QURlRTtFQUhGO0lBSUksYUFBQTtJQUNBLGVBQUE7SUFDQSxVQUFBO0lBQ0EsU0FBQTtJQUNBLE9BQUE7SUFDQSxRQUFBO0lBQ0EsWUFBQTtJQUNBLHlCQUFBO0VDWkY7RURjRTtJQUNFLE9BQUE7SUFDQSxXQUFBO0lBQ0EsY0FBQTtJQUNBLGtCQUFBO0lBQ0EsdUJBQUE7SUFDQSxjQUFBO0VDWko7RURjSTtJQUNFLGNBQUE7RUNaTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2hlbGwvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRtb2JpbGVCcmVha3BvaW50OiAxMDAwcHg7XHJcblxyXG4uZm9vdGVyLWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMDtcclxuICByaWdodDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGNvbG9yOiAjOTk5OTk5O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3gtc2hhZG93OiAwcHggMjBweCAzMHB4IDMwcHggIzAwMDAwMDEwO1xyXG5cclxuICAuZm9vdGVyIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRtb2JpbGVCcmVha3BvaW50KSB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDU1cHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAucm93IHtcclxuICAgICAgZmxleDogMCAxIGF1dG87XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuXHJcbiAgICAgIC5jb2wge1xyXG4gICAgICAgIGZsZXg6IDAgMSBhdXRvO1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcblxyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJG1vYmlsZUJyZWFrcG9pbnQpIHtcclxuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgbWluLWhlaWdodDogMS4zZW07XHJcbiAgICAgICAgICBjb2xvcjogIzAwYTA5OTtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnYXJiZWwnO1xyXG5cclxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJG1vYmlsZUJyZWFrcG9pbnQpIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5jb2wtbG9nbyB7XHJcbiAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgLmxvZ28tZm9vdGVyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDE5MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaW1nL2xvZ28ucG5nKTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJG1vYmlsZUJyZWFrcG9pbnQpIHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYuY29sLWxpbmtzIHtcclxuICAgICAgICAgIC5saW5rcyB7XHJcbiAgICAgICAgICAgIC5zaXRlLWxpbmsge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICBjb2xvcjogIzk5OTk5OTtcclxuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzO1xyXG5cclxuICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDBhMDk5O1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4xcztcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJG1vYmlsZUJyZWFrcG9pbnQpIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRtb2JpbGVCcmVha3BvaW50KSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLmNvbC1kZXRhaWxzIHtcclxuICAgICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJG1vYmlsZUJyZWFrcG9pbnQpIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmRldGFpbHMge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnNvY2lhbHMge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJG1vYmlsZUJyZWFrcG9pbnQpIHtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnNvY2lhbC1pY29uIHtcclxuICAgICAgICAgICAgICBtYXJnaW46IDAgNXB4O1xyXG4gICAgICAgICAgICAgICYuZmFjZWJvb2staWNvbiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAuMDJweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgJi55b3V0dWJlLWljb24ge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDE5cHg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICYuZW1haWwtaWNvbiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTkuNDdweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkbW9iaWxlQnJlYWtwb2ludCkge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTJweDtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuaHIge1xyXG4gICAgICBtYXJnaW46IDIwcHggMDtcclxuICAgICAgaGVpZ2h0OiAxcHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkYmRiZGI7XHJcbiAgICB9XHJcblxyXG4gICAgLmJvdHRvbS1saW5lIHtcclxuICAgICAgLy9kaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBtYXJnaW46IDIwcHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgIGNvbG9yOiAjOTk5OTk5O1xyXG5cclxuICAgICAgLmZhLWhlYXJ0IHtcclxuICAgICAgICBjb2xvcjogIzAwYTA5OTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC52ZXJzaW9uIHtcclxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC52ZXJzaW9uLWxpbmsge1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBjb2xvcjogIzk5OTk5OTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmZvb3Rlci1tb2JpbGUge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJG1vYmlsZUJyZWFrcG9pbnQpIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYTA5OTtcclxuXHJcbiAgICAuc29jaWFsLWJveCB7XHJcbiAgICAgIGZsZXg6IDE7XHJcbiAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICBwYWRkaW5nOiA0cHggMDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgY29sb3I6ICMwMGEwOTk7XHJcblxyXG4gICAgICAuc2l0ZS1saW5rIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIuZm9vdGVyLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbiAgY29sb3I6ICM5OTk5OTk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm94LXNoYWRvdzogMHB4IDIwcHggMzBweCAzMHB4ICMwMDAwMDAxMDtcbn1cbi5mb290ZXItY29udGFpbmVyIC5mb290ZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAuZm9vdGVyLWNvbnRhaW5lciAuZm9vdGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbi1ib3R0b206IDU1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59XG4uZm9vdGVyLWNvbnRhaW5lciAuZm9vdGVyIC5yb3cge1xuICBmbGV4OiAwIDEgYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuLmZvb3Rlci1jb250YWluZXIgLmZvb3RlciAucm93IC5jb2wge1xuICBmbGV4OiAwIDEgYXV0bztcbiAgcGFkZGluZzogMjBweDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gIC5mb290ZXItY29udGFpbmVyIC5mb290ZXIgLnJvdyAuY29sIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICB9XG59XG4uZm9vdGVyLWNvbnRhaW5lciAuZm9vdGVyIC5yb3cgLmNvbCAudGl0bGUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1pbi1oZWlnaHQ6IDEuM2VtO1xuICBjb2xvcjogIzAwYTA5OTtcbiAgZm9udC1mYW1pbHk6IFwiYXJiZWxcIjtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gIC5mb290ZXItY29udGFpbmVyIC5mb290ZXIgLnJvdyAuY29sIC50aXRsZSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG59XG4uZm9vdGVyLWNvbnRhaW5lciAuZm9vdGVyIC5yb3cgLmNvbC5jb2wtbG9nbyB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5mb290ZXItY29udGFpbmVyIC5mb290ZXIgLnJvdyAuY29sLmNvbC1sb2dvIC5sb2dvLWZvb3RlciB7XG4gIHdpZHRoOiAxOTBweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZy9sb2dvLnBuZyk7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gIC5mb290ZXItY29udGFpbmVyIC5mb290ZXIgLnJvdyAuY29sLmNvbC1sb2dvIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4uZm9vdGVyLWNvbnRhaW5lciAuZm9vdGVyIC5yb3cgLmNvbC5jb2wtbGlua3MgLmxpbmtzIC5zaXRlLWxpbmsge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzk5OTk5OTtcbiAgdHJhbnNpdGlvbjogMC4ycztcbn1cbi5mb290ZXItY29udGFpbmVyIC5mb290ZXIgLnJvdyAuY29sLmNvbC1saW5rcyAubGlua3MgLnNpdGUtbGluazpob3ZlciB7XG4gIGNvbG9yOiAjMDBhMDk5O1xuICB0cmFuc2l0aW9uOiAwLjFzO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgLmZvb3Rlci1jb250YWluZXIgLmZvb3RlciAucm93IC5jb2wuY29sLWxpbmtzIC5saW5rcyAuc2l0ZS1saW5rIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gIC5mb290ZXItY29udGFpbmVyIC5mb290ZXIgLnJvdyAuY29sLmNvbC1saW5rcyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgLmZvb3Rlci1jb250YWluZXIgLmZvb3RlciAucm93IC5jb2wuY29sLWRldGFpbHMgLnRpdGxlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4uZm9vdGVyLWNvbnRhaW5lciAuZm9vdGVyIC5yb3cgLmNvbC5jb2wtZGV0YWlscyAuZGV0YWlscyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5mb290ZXItY29udGFpbmVyIC5mb290ZXIgLnJvdyAuY29sLmNvbC1kZXRhaWxzIC5zb2NpYWxzIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgLmZvb3Rlci1jb250YWluZXIgLmZvb3RlciAucm93IC5jb2wuY29sLWRldGFpbHMgLnNvY2lhbHMge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuLmZvb3Rlci1jb250YWluZXIgLmZvb3RlciAucm93IC5jb2wuY29sLWRldGFpbHMgLnNvY2lhbHMgLnNvY2lhbC1pY29uIHtcbiAgbWFyZ2luOiAwIDVweDtcbn1cbi5mb290ZXItY29udGFpbmVyIC5mb290ZXIgLnJvdyAuY29sLmNvbC1kZXRhaWxzIC5zb2NpYWxzIC5zb2NpYWwtaWNvbi5mYWNlYm9vay1pY29uIHtcbiAgd2lkdGg6IDEwLjAycHg7XG59XG4uZm9vdGVyLWNvbnRhaW5lciAuZm9vdGVyIC5yb3cgLmNvbC5jb2wtZGV0YWlscyAuc29jaWFscyAuc29jaWFsLWljb24ueW91dHViZS1pY29uIHtcbiAgd2lkdGg6IDE5cHg7XG59XG4uZm9vdGVyLWNvbnRhaW5lciAuZm9vdGVyIC5yb3cgLmNvbC5jb2wtZGV0YWlscyAuc29jaWFscyAuc29jaWFsLWljb24uZW1haWwtaWNvbiB7XG4gIHdpZHRoOiAxOS40N3B4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgLmZvb3Rlci1jb250YWluZXIgLmZvb3RlciAucm93IC5jb2wuY29sLWRldGFpbHMgLnNvY2lhbHMgLnNvY2lhbC1pY29uIHtcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuLmZvb3Rlci1jb250YWluZXIgLmZvb3RlciAuaHIge1xuICBtYXJnaW46IDIwcHggMDtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkYmRiZGI7XG59XG4uZm9vdGVyLWNvbnRhaW5lciAuZm9vdGVyIC5ib3R0b20tbGluZSB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbjogMjBweDtcbiAgbWFyZ2luLXRvcDogMDtcbiAgY29sb3I6ICM5OTk5OTk7XG59XG4uZm9vdGVyLWNvbnRhaW5lciAuZm9vdGVyIC5ib3R0b20tbGluZSAuZmEtaGVhcnQge1xuICBjb2xvcjogIzAwYTA5OTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmZvb3Rlci1jb250YWluZXIgLmZvb3RlciAudmVyc2lvbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuLmZvb3Rlci1jb250YWluZXIgLmZvb3RlciAudmVyc2lvbiAudmVyc2lvbi1saW5rIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzk5OTk5OTtcbn1cblxuLmZvb3Rlci1tb2JpbGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgLmZvb3Rlci1tb2JpbGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6IDI7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGEwOTk7XG4gIH1cbiAgLmZvb3Rlci1tb2JpbGUgLnNvY2lhbC1ib3gge1xuICAgIGZsZXg6IDE7XG4gICAgbWFyZ2luOiA1cHg7XG4gICAgcGFkZGluZzogNHB4IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGNvbG9yOiAjMDBhMDk5O1xuICB9XG4gIC5mb290ZXItbW9iaWxlIC5zb2NpYWwtYm94IC5zaXRlLWxpbmsge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59Il19 */'
          ]
        });
        /*@__PURE__*/ (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            FooterComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                args: [
                  {
                    selector: 'app-footer',
                    templateUrl: './footer.component.html',
                    styleUrls: ['./footer.component.scss']
                  }
                ]
              }
            ],
            function() {
              return [
                { type: _shared_services_participations_service__WEBPACK_IMPORTED_MODULE_2__['ParticipationsService'] }
              ];
            },
            {
              user: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input']
                }
              ]
            }
          );
        })();

        /***/
      },

    /***/ './src/app/shell/footer/footer.module.ts':
      /*!***********************************************!*\
  !*** ./src/app/shell/footer/footer.module.ts ***!
  \***********************************************/
      /*! exports provided: FooterModule */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'FooterModule', function() {
          return FooterModule;
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/router */ './node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js'
        );
        /* harmony import */ var _footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./footer.component */ './src/app/shell/footer/footer.component.ts'
        );

        const api = [_footer_component__WEBPACK_IMPORTED_MODULE_2__['FooterComponent']];
        class FooterModule {}
        FooterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineNgModule']({ type: FooterModule });
        FooterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineInjector']({
          factory: function FooterModule_Factory(t) {
            return new (t || FooterModule)();
          },
          providers: [],
          imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__['RouterModule']]]
        });
        (function() {
          (typeof ngJitMode === 'undefined' || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵsetNgModuleScope'](FooterModule, {
              declarations: [_footer_component__WEBPACK_IMPORTED_MODULE_2__['FooterComponent']],
              imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__['RouterModule']],
              exports: [_footer_component__WEBPACK_IMPORTED_MODULE_2__['FooterComponent']]
            });
        })();
        /*@__PURE__*/ (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            FooterModule,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'],
                args: [
                  {
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__['RouterModule']],
                    exports: api,
                    declarations: [...api],
                    providers: []
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

    /***/ './src/app/shell/header/header.component.ts':
      /*!**************************************************!*\
  !*** ./src/app/shell/header/header.component.ts ***!
  \**************************************************/
      /*! exports provided: HeaderComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'HeaderComponent', function() {
          return HeaderComponent;
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/router */ './node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js'
        );
        /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! rxjs/operators */ './node_modules/rxjs/_esm2015/operators/index.js'
        );
        /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @angular/common */ './node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js'
        );
        /* harmony import */ var _menu_item_menu_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./menu-item/menu-item.component */ './src/app/shell/header/menu-item/menu-item.component.ts'
        );

        function HeaderComponent_li_7_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'li', 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](1, 'app-menu-item', 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }
          if (rf & 2) {
            const menu_r415 = ctx.$implicit;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('menu', menu_r415);
          }
        }
        function HeaderComponent_button_11_Template(rf, ctx) {
          if (rf & 1) {
            const _r417 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵgetCurrentView']();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'button', 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
              'click',
              function HeaderComponent_button_11_Template_button_click_0_listener() {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵrestoreView'](_r417);
                const ctx_r416 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();
                return ctx_r416.onLogin();
              }
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](1, ' \u05D4\u05EA\u05D7\u05D1\u05E8 ');
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }
          if (rf & 2) {
            const ctx_r413 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('disabled', ctx_r413.loading);
          }
        }
        function HeaderComponent_button_12_Template(rf, ctx) {
          if (rf & 1) {
            const _r419 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵgetCurrentView']();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'button', 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
              'click',
              function HeaderComponent_button_12_Template_button_click_0_listener() {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵrestoreView'](_r419);
                const ctx_r418 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();
                return ctx_r418.onLogout();
              }
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](1, ' \u05D4\u05EA\u05E0\u05EA\u05E7 ');
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }
          if (rf & 2) {
            const ctx_r414 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('disabled', ctx_r414.loading);
          }
        }
        class HeaderComponent {
          constructor(router) {
            this.router = router;
            this.loading = true;
            this.login = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            this.logout = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            this.sideMenuOpen = false;
          }
          ngOnChanges() {
            this.menues = this.initMenues();
          }
          ngOnInit() {
            this.router.events
              .pipe(
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['filter'])(
                  event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__['NavigationStart']
                )
              )
              .subscribe(() => {
                this.sideMenuOpen = false;
              });
          }
          onLogin() {
            this.sideMenuOpen = false;
            this.login.emit();
          }
          onLogout() {
            this.sideMenuOpen = false;
            this.logout.emit();
          }
          trackByFn(index) {
            return index;
          }
          initMenues() {
            var _a, _b;
            const menues = [
              { route: 'home', title: 'דף הבית' },
              {
                title: 'מפגשים',
                subMenues: [
                  { route: 'meetings', title: 'מפגשים' },
                  { route: 'map', title: 'מפת מפגשים' },
                  { route: 'tell', title: 'אני רוצה לספר' },
                  { route: 'host', title: 'אני רוצה לארח' },
                  { route: 'participate', title: 'אני רוצה להשתתף' }
                ]
              },
              {
                title: 'אודותינו',
                subMenues: [
                  { route: 'about', title: 'רקע' },
                  { route: 'team', title: 'הצוות שלנו' },
                  { route: 'articles', title: 'עלינו בתקשורת' }
                ]
              },
              { route: 'agenda', title: 'מבנה הערב' },
              { route: 'questions', title: 'שאלות' },
              { route: 'gallery', title: 'גלריה' },
              { route: 'contact', title: 'צרו קשר' }
            ];
            if (
              ((_a = this.user) === null || _a === void 0 ? void 0 : _a.isAdmin) ||
              ((_b = this.user) === null || _b === void 0 ? void 0 : _b.isVolunteer)
            ) {
              menues.push({
                title: 'ניהול',
                subMenues: [
                  { route: 'admin-statistics', title: 'סטטיסטיקות' },
                  { route: 'admin-bereaveds', title: 'ניהול אחים' },
                  { route: 'admin-users', title: 'ניהול משתמשים' }
                ]
              });
            }
            return menues;
          }
        }
        HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
          return new (t || HeaderComponent)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
              _angular_router__WEBPACK_IMPORTED_MODULE_1__['Router']
            )
          );
        };
        HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineComponent']({
          type: HeaderComponent,
          selectors: [['app-header']],
          inputs: { user: 'user', loading: 'loading' },
          outputs: { login: 'login', logout: 'logout' },
          features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵNgOnChangesFeature']()],
          decls: 13,
          vars: 8,
          consts: [
            [1, 'header-container'],
            [1, 'nav-toggle', 'header-toggler', 3, 'click'],
            [1, 'bar'],
            [1, 'header'],
            ['routerLink', 'home', 1, 'logo-header'],
            [1, 'nav-content'],
            [1, 'links-header'],
            ['class', 'link-header', 4, 'ngFor', 'ngForOf', 'ngForTrackBy'],
            [1, 'action-buttons'],
            ['href', 'https://connect2care.carmel6000.com/#/', 1, 'action-header-support-us', 'site-button'],
            ['class', 'action-header-login site-button', 3, 'disabled', 'click', 4, 'ngIf'],
            [1, 'link-header'],
            [3, 'menu'],
            [1, 'action-header-login', 'site-button', 3, 'disabled', 'click']
          ],
          template: function HeaderComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'nav', 0);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](1, 'div', 1);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'click',
                function HeaderComponent_Template_div_click_1_listener() {
                  return (ctx.sideMenuOpen = !ctx.sideMenuOpen);
                }
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](2, 'span', 2);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](3, 'div', 3);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](4, 'a', 4);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](5, 'div', 5);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](6, 'ul', 6);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](7, HeaderComponent_li_7_Template, 2, 1, 'li', 7);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](8, 'div', 8);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](9, 'a', 9);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                10,
                ' \u05DE\u05EA\u05D7\u05D1\u05E8\u05D9\u05DD \u05D5\u05D6\u05D5\u05DB\u05E8\u05D9\u05DD'
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                11,
                HeaderComponent_button_11_Template,
                2,
                1,
                'button',
                10
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                12,
                HeaderComponent_button_12_Template,
                2,
                1,
                'button',
                10
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            }
            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵclassProp']('active', ctx.sideMenuOpen);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](3);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵclassProp']('open', ctx.sideMenuOpen);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngForOf', ctx.menues)(
                'ngForTrackBy',
                ctx.trackByFn
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](4);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngIf', !ctx.user);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngIf', ctx.user);
            }
          },
          directives: [
            _angular_router__WEBPACK_IMPORTED_MODULE_1__['RouterLinkWithHref'],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__['NgForOf'],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__['NgIf'],
            _menu_item_menu_item_component__WEBPACK_IMPORTED_MODULE_4__['MenuItemComponent']
          ],
          styles: [
            '.header-container[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  background-color: white;\n  z-index: 3;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);\n  padding: 1em 100px;\n}\n.header-container[_ngcontent-%COMP%]   .header-toggler[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 30px;\n  height: 25px;\n  cursor: pointer;\n}\n.header-container[_ngcontent-%COMP%]   .header-toggler[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%], .header-container[_ngcontent-%COMP%]   .header-toggler[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]::after, .header-container[_ngcontent-%COMP%]   .header-toggler[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]::before {\n  width: 30px;\n  height: 3px;\n  background-color: #00a099;\n  display: block;\n}\n.header-container[_ngcontent-%COMP%]   .header-toggler[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]::after, .header-container[_ngcontent-%COMP%]   .header-toggler[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  transition-property: transform, margin-top;\n  transition-duration: 0.2s;\n  transition-delay: 0s, 0.2s;\n}\n.header-container[_ngcontent-%COMP%]   .header-toggler[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%] {\n  position: relative;\n  top: 10px;\n  margin: 0 auto;\n}\n.header-container[_ngcontent-%COMP%]   .header-toggler[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]::before {\n  margin-top: -10px;\n}\n.header-container[_ngcontent-%COMP%]   .header-toggler[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]::after {\n  margin-top: 10px;\n}\n.header-container[_ngcontent-%COMP%]   .header-toggler[_ngcontent-%COMP%]   .bar.active[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0);\n}\n.header-container[_ngcontent-%COMP%]   .header-toggler[_ngcontent-%COMP%]   .bar.active[_ngcontent-%COMP%]::before, .header-container[_ngcontent-%COMP%]   .header-toggler[_ngcontent-%COMP%]   .bar.active[_ngcontent-%COMP%]::after {\n  margin-top: 0;\n  transition-delay: 0.2s, 0s;\n}\n.header-container[_ngcontent-%COMP%]   .header-toggler[_ngcontent-%COMP%]   .bar.active[_ngcontent-%COMP%]::before {\n  transform: rotate(45deg);\n}\n.header-container[_ngcontent-%COMP%]   .header-toggler[_ngcontent-%COMP%]   .bar.active[_ngcontent-%COMP%]::after {\n  transform: rotate(-45deg);\n}\n.header-container[_ngcontent-%COMP%]   .nav-toggle[_ngcontent-%COMP%] {\n  display: none;\n}\n.header-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  position: relative;\n}\n.header-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .logo-header[_ngcontent-%COMP%] {\n  cursor: pointer;\n  flex: 0 0 auto;\n  height: 55px;\n  width: 135px;\n  background-image: url(\'logo.png\');\n  background-size: contain;\n  background-repeat: no-repeat;\n}\n.header-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .logo-header[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.header-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .nav-content[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n}\n.header-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .nav-content[_ngcontent-%COMP%]   .links-header[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  list-style-type: none;\n}\n.header-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .nav-content[_ngcontent-%COMP%]   .links-header[_ngcontent-%COMP%]   .link-header[_ngcontent-%COMP%]:not(:last-of-type) {\n  margin-left: 20px;\n}\n.header-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .nav-content[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  display: flex;\n  align-items: center;\n  padding-right: 60px;\n}\n.header-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .nav-content[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .action-header-login[_ngcontent-%COMP%], .header-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .nav-content[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .action-header-support-us[_ngcontent-%COMP%] {\n  cursor: pointer;\n  background: #16b3ab;\n}\n.header-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .nav-content[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .action-header-support-us[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  background: #082551;\n}\n@media only screen and (max-width: 1200px) {\n  .header-container[_ngcontent-%COMP%] {\n    padding: 1em 25px;\n  }\n  .header-container[_ngcontent-%COMP%]   .nav-toggle[_ngcontent-%COMP%] {\n    display: inline-block;\n    position: absolute;\n    z-index: 4;\n  }\n  .header-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .header-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .nav-content[_ngcontent-%COMP%] {\n    width: 300px;\n    position: fixed;\n    z-index: 3;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    padding: 50px;\n    flex-direction: column;\n    background-color: white;\n    box-shadow: -10px 0px 2px 0px rgba(0, 160, 153, 0.75);\n    transition: transform 0.2s;\n    transform: translateX(calc(100% - -10px + 2px));\n  }\n  .header-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .nav-content.open[_ngcontent-%COMP%] {\n    transform: translateX(0);\n  }\n  .header-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .nav-content[_ngcontent-%COMP%]   .links-header[_ngcontent-%COMP%] {\n    flex: 0 0 auto;\n    flex-direction: column;\n    align-items: stretch;\n    margin: 1.5em 0;\n  }\n  .header-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .nav-content[_ngcontent-%COMP%]   .links-header[_ngcontent-%COMP%]   .link-header[_ngcontent-%COMP%] {\n    border-bottom: 1px solid #00a099;\n    padding: 0.5em 0;\n    margin: 0;\n  }\n  .header-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .nav-content[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .header-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .nav-content[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .action-header-support-us[_ngcontent-%COMP%], .header-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .nav-content[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .action-header-login[_ngcontent-%COMP%] {\n    margin: 0.5em auto;\n    width: 50%;\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hlbGwvaGVhZGVyL0M6XFxVc2Vyc1xcVGVoaWxhXFxsYXN0XFxvdXJCcm9cXG91ci1icm90aGVycy13ZWIvc3JjXFxhcHBcXHNoZWxsXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hlbGwvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQThERSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBRUEsdUJBQUE7RUFDQSxVQUFBO0VBQ0Esd0NBQUE7RUFDQSxrQkFBQTtBQy9ERjtBRFJFO0VBR0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ1FKO0FETkk7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQ1FOO0FETEk7RUFFRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7QUNNTjtBREhJO0VBRUUsa0JBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtBQ0lOO0FERk07RUFFRSxpQkFBQTtBQ0dSO0FEQU07RUFFRSxnQkFBQTtBQ0NSO0FERU07RUFDRSxrQ0FBQTtBQ0FSO0FERVE7RUFFRSxhQUFBO0VBQ0EsMEJBQUE7QUNEVjtBRElRO0VBQ0Usd0JBQUE7QUNGVjtBREtRO0VBQ0UseUJBQUE7QUNIVjtBRHFCRTtFQUNFLGFBQUE7QUNuQko7QURzQkU7RUFDRSxPQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNwQko7QURzQkk7RUFFRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUNBQUE7RUFDQSx3QkFBQTtFQUNBLDRCQUFBO0FDckJOO0FEdUJNO0VBQ0UsYUFBQTtBQ3JCUjtBRHlCSTtFQUNFLE9BQUE7RUFDQSxhQUFBO0FDdkJOO0FEeUJNO0VBQ0UsT0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7QUN2QlI7QUR5QlE7RUFDRSxpQkFBQTtBQ3ZCVjtBRDJCTTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ3pCUjtBRDJCUTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQ3pCVjtBRDJCUTtFQUVFLGlCQUFBO0VBQ0EsbUJBQUE7QUMxQlY7QURxQ0E7RUFDRTtJQUNFLGlCQUFBO0VDbkNGO0VEcUNFO0lBQ0UscUJBQUE7SUFDQSxrQkFBQTtJQUNBLFVBQUE7RUNuQ0o7RURzQ0U7SUFDRSx1QkFBQTtFQ3BDSjtFRHNDSTtJQUlFLFlBQUE7SUFDQSxlQUFBO0lBQ0EsVUFBQTtJQUNBLE1BQUE7SUFDQSxRQUFBO0lBQ0EsU0FBQTtJQUNBLGFBQUE7SUFDQSxzQkFBQTtJQUNBLHVCQUFBO0lBQ0EscURBQUE7SUFDQSwwQkFBQTtJQUNBLCtDQUFBO0VDdkNOO0VEeUNNO0lBQ0Usd0JBQUE7RUN2Q1I7RUQwQ007SUFDRSxjQUFBO0lBQ0Esc0JBQUE7SUFDQSxvQkFBQTtJQUNBLGVBQUE7RUN4Q1I7RUQwQ1E7SUFDRSxnQ0FBQTtJQUNBLGdCQUFBO0lBQ0EsU0FBQTtFQ3hDVjtFRDRDTTtJQUNFLHNCQUFBO0VDMUNSO0VENENROztJQUVFLGtCQUFBO0lBQ0EsVUFBQTtJQUNBLGtCQUFBO0VDMUNWO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGVsbC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnfnNyYy92YXJpYWJsZXMuc2Nzcyc7XHJcblxyXG4uaGVhZGVyLWNvbnRhaW5lciB7XHJcbiAgLmhlYWRlci10b2dnbGVyIHtcclxuICAgICRiYXJIZWlnaHQ6IDVweDtcclxuXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogJGJhckhlaWdodCAqIDU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgJWJhciB7XHJcbiAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICBoZWlnaHQ6IDNweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDE2MCwgMTUzKTtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcblxyXG4gICAgJWVkZ2UtYmFyIHtcclxuICAgICAgQGV4dGVuZCAlYmFyO1xyXG4gICAgICBjb250ZW50OiAnJztcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm0sIG1hcmdpbi10b3A7XHJcbiAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XHJcbiAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzLCAwLjJzO1xyXG4gICAgfVxyXG5cclxuICAgIC5iYXIge1xyXG4gICAgICBAZXh0ZW5kICViYXI7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgdG9wOiAkYmFySGVpZ2h0ICogMjtcclxuICAgICAgbWFyZ2luOiAwIGF1dG87XHJcblxyXG4gICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgIEBleHRlbmQgJWVkZ2UtYmFyO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC0oJGJhckhlaWdodCAqIDIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgQGV4dGVuZCAlZWRnZS1iYXI7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogJGJhckhlaWdodCAqIDI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xyXG5cclxuICAgICAgICAmOjpiZWZvcmUsXHJcbiAgICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMnMsIDBzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIC8vcGFkZGluZy1yaWdodDogNTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICB6LWluZGV4OiAzO1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgcGFkZGluZzogMWVtIDEwMHB4O1xyXG5cclxuICAubmF2LXRvZ2dsZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLmhlYWRlciB7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgLmxvZ28taGVhZGVyIHtcclxuICAgICAgLy9wYWRkaW5nLXJpZ2h0OiA1MHB4O1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIGZsZXg6IDAgMCBhdXRvO1xyXG4gICAgICBoZWlnaHQ6IDU1cHg7XHJcbiAgICAgIHdpZHRoOiAxMzVweDtcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvbG9nby5wbmcpO1xyXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcblxyXG4gICAgICAmOmZvY3VzIHtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLm5hdi1jb250ZW50IHtcclxuICAgICAgZmxleDogMTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICAgIC5saW5rcy1oZWFkZXIge1xyXG4gICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuXHJcbiAgICAgICAgLmxpbmstaGVhZGVyOm5vdCg6bGFzdC1vZi10eXBlKSB7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5hY3Rpb24tYnV0dG9ucyB7XHJcbiAgICAgICAgZmxleDogMCAwIGF1dG87XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDYwcHg7XHJcblxyXG4gICAgICAgICVoZWFkZXItYnV0dG9uIHtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICMxNmIzYWI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5hY3Rpb24taGVhZGVyLXN1cHBvcnQtdXMge1xyXG4gICAgICAgICAgQGV4dGVuZCAlaGVhZGVyLWJ1dHRvbjtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogIzA4MjU1MTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5hY3Rpb24taGVhZGVyLWxvZ2luIHtcclxuICAgICAgICAgIEBleHRlbmQgJWhlYWRlci1idXR0b247XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRoZWFkZXItbW9iaWxlLWJyZWFrcG9pbnQpIHtcclxuICAuaGVhZGVyLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAxZW0gMjVweDtcclxuXHJcbiAgICAubmF2LXRvZ2dsZSB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB6LWluZGV4OiA0O1xyXG4gICAgfVxyXG5cclxuICAgIC5oZWFkZXIge1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAgIC5uYXYtY29udGVudCB7XHJcbiAgICAgICAgJHNoYWRvdy13aWR0aDogLTEwcHg7XHJcbiAgICAgICAgJHNoYWRvdy1zcHJlYWQ6IDJweDtcclxuXHJcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICB6LWluZGV4OiAzO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgcGFkZGluZzogNTBweDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJveC1zaGFkb3c6ICRzaGFkb3ctd2lkdGggMHB4ICRzaGFkb3ctc3ByZWFkIDBweCByZ2JhKDAsIDE2MCwgMTUzLCAwLjc1KTtcclxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycztcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoY2FsYygxMDAlIC0gI3skc2hhZG93LXdpZHRofSArICN7JHNoYWRvdy1zcHJlYWR9KSk7XHJcblxyXG4gICAgICAgICYub3BlbiB7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubGlua3MtaGVhZGVyIHtcclxuICAgICAgICAgIGZsZXg6IDAgMCBhdXRvO1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gICAgICAgICAgbWFyZ2luOiAxLjVlbSAwO1xyXG5cclxuICAgICAgICAgIC5saW5rLWhlYWRlciB7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDE2MCwgMTUzKTtcclxuICAgICAgICAgICAgcGFkZGluZzogMC41ZW0gMDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmFjdGlvbi1idXR0b25zIHtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgICAgICAgLmFjdGlvbi1oZWFkZXItc3VwcG9ydC11cyxcclxuICAgICAgICAgIC5hY3Rpb24taGVhZGVyLWxvZ2luIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwLjVlbSBhdXRvO1xyXG4gICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi5oZWFkZXItY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgei1pbmRleDogMztcbiAgYm94LXNoYWRvdzogMCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgcGFkZGluZzogMWVtIDEwMHB4O1xufVxuLmhlYWRlci1jb250YWluZXIgLmhlYWRlci10b2dnbGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5oZWFkZXItY29udGFpbmVyIC5oZWFkZXItdG9nZ2xlciAuYmFyLCAuaGVhZGVyLWNvbnRhaW5lciAuaGVhZGVyLXRvZ2dsZXIgLmJhcjo6YWZ0ZXIsIC5oZWFkZXItY29udGFpbmVyIC5oZWFkZXItdG9nZ2xlciAuYmFyOjpiZWZvcmUge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGEwOTk7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmhlYWRlci1jb250YWluZXIgLmhlYWRlci10b2dnbGVyIC5iYXI6OmFmdGVyLCAuaGVhZGVyLWNvbnRhaW5lciAuaGVhZGVyLXRvZ2dsZXIgLmJhcjo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm0sIG1hcmdpbi10b3A7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDBzLCAwLjJzO1xufVxuLmhlYWRlci1jb250YWluZXIgLmhlYWRlci10b2dnbGVyIC5iYXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMTBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4uaGVhZGVyLWNvbnRhaW5lciAuaGVhZGVyLXRvZ2dsZXIgLmJhcjo6YmVmb3JlIHtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG59XG4uaGVhZGVyLWNvbnRhaW5lciAuaGVhZGVyLXRvZ2dsZXIgLmJhcjo6YWZ0ZXIge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLmhlYWRlci1jb250YWluZXIgLmhlYWRlci10b2dnbGVyIC5iYXIuYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbn1cbi5oZWFkZXItY29udGFpbmVyIC5oZWFkZXItdG9nZ2xlciAuYmFyLmFjdGl2ZTo6YmVmb3JlLCAuaGVhZGVyLWNvbnRhaW5lciAuaGVhZGVyLXRvZ2dsZXIgLmJhci5hY3RpdmU6OmFmdGVyIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgdHJhbnNpdGlvbi1kZWxheTogMC4ycywgMHM7XG59XG4uaGVhZGVyLWNvbnRhaW5lciAuaGVhZGVyLXRvZ2dsZXIgLmJhci5hY3RpdmU6OmJlZm9yZSB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbn1cbi5oZWFkZXItY29udGFpbmVyIC5oZWFkZXItdG9nZ2xlciAuYmFyLmFjdGl2ZTo6YWZ0ZXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xufVxuLmhlYWRlci1jb250YWluZXIgLm5hdi10b2dnbGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmhlYWRlci1jb250YWluZXIgLmhlYWRlciB7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5oZWFkZXItY29udGFpbmVyIC5oZWFkZXIgLmxvZ28taGVhZGVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmbGV4OiAwIDAgYXV0bztcbiAgaGVpZ2h0OiA1NXB4O1xuICB3aWR0aDogMTM1cHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaW1nL2xvZ28ucG5nKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuLmhlYWRlci1jb250YWluZXIgLmhlYWRlciAubG9nby1oZWFkZXI6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuLmhlYWRlci1jb250YWluZXIgLmhlYWRlciAubmF2LWNvbnRlbnQge1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmhlYWRlci1jb250YWluZXIgLmhlYWRlciAubmF2LWNvbnRlbnQgLmxpbmtzLWhlYWRlciB7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG4uaGVhZGVyLWNvbnRhaW5lciAuaGVhZGVyIC5uYXYtY29udGVudCAubGlua3MtaGVhZGVyIC5saW5rLWhlYWRlcjpub3QoOmxhc3Qtb2YtdHlwZSkge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cbi5oZWFkZXItY29udGFpbmVyIC5oZWFkZXIgLm5hdi1jb250ZW50IC5hY3Rpb24tYnV0dG9ucyB7XG4gIGZsZXg6IDAgMCBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLXJpZ2h0OiA2MHB4O1xufVxuLmhlYWRlci1jb250YWluZXIgLmhlYWRlciAubmF2LWNvbnRlbnQgLmFjdGlvbi1idXR0b25zIC5hY3Rpb24taGVhZGVyLWxvZ2luLCAuaGVhZGVyLWNvbnRhaW5lciAuaGVhZGVyIC5uYXYtY29udGVudCAuYWN0aW9uLWJ1dHRvbnMgLmFjdGlvbi1oZWFkZXItc3VwcG9ydC11cyB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZDogIzE2YjNhYjtcbn1cbi5oZWFkZXItY29udGFpbmVyIC5oZWFkZXIgLm5hdi1jb250ZW50IC5hY3Rpb24tYnV0dG9ucyAuYWN0aW9uLWhlYWRlci1zdXBwb3J0LXVzIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICMwODI1NTE7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAuaGVhZGVyLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMWVtIDI1cHg7XG4gIH1cbiAgLmhlYWRlci1jb250YWluZXIgLm5hdi10b2dnbGUge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogNDtcbiAgfVxuICAuaGVhZGVyLWNvbnRhaW5lciAuaGVhZGVyIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICAuaGVhZGVyLWNvbnRhaW5lciAuaGVhZGVyIC5uYXYtY29udGVudCB7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4OiAzO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgcGFkZGluZzogNTBweDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJveC1zaGFkb3c6IC0xMHB4IDBweCAycHggMHB4IHJnYmEoMCwgMTYwLCAxNTMsIDAuNzUpO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWChjYWxjKDEwMCUgLSAtMTBweCArIDJweCkpO1xuICB9XG4gIC5oZWFkZXItY29udGFpbmVyIC5oZWFkZXIgLm5hdi1jb250ZW50Lm9wZW4ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgfVxuICAuaGVhZGVyLWNvbnRhaW5lciAuaGVhZGVyIC5uYXYtY29udGVudCAubGlua3MtaGVhZGVyIHtcbiAgICBmbGV4OiAwIDAgYXV0bztcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgIG1hcmdpbjogMS41ZW0gMDtcbiAgfVxuICAuaGVhZGVyLWNvbnRhaW5lciAuaGVhZGVyIC5uYXYtY29udGVudCAubGlua3MtaGVhZGVyIC5saW5rLWhlYWRlciB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMGEwOTk7XG4gICAgcGFkZGluZzogMC41ZW0gMDtcbiAgICBtYXJnaW46IDA7XG4gIH1cbiAgLmhlYWRlci1jb250YWluZXIgLmhlYWRlciAubmF2LWNvbnRlbnQgLmFjdGlvbi1idXR0b25zIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIC5oZWFkZXItY29udGFpbmVyIC5oZWFkZXIgLm5hdi1jb250ZW50IC5hY3Rpb24tYnV0dG9ucyAuYWN0aW9uLWhlYWRlci1zdXBwb3J0LXVzLFxuLmhlYWRlci1jb250YWluZXIgLmhlYWRlciAubmF2LWNvbnRlbnQgLmFjdGlvbi1idXR0b25zIC5hY3Rpb24taGVhZGVyLWxvZ2luIHtcbiAgICBtYXJnaW46IDAuNWVtIGF1dG87XG4gICAgd2lkdGg6IDUwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn0iXX0= */'
          ]
        });
        /*@__PURE__*/ (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            HeaderComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                args: [
                  {
                    selector: 'app-header',
                    templateUrl: './header.component.html',
                    styleUrls: ['./header.component.scss']
                  }
                ]
              }
            ],
            function() {
              return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__['Router'] }];
            },
            {
              user: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input']
                }
              ],
              loading: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input']
                }
              ],
              login: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Output']
                }
              ],
              logout: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Output']
                }
              ]
            }
          );
        })();

        /***/
      },

    /***/ './src/app/shell/header/header.module.ts':
      /*!***********************************************!*\
  !*** ./src/app/shell/header/header.module.ts ***!
  \***********************************************/
      /*! exports provided: HeaderModule */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'HeaderModule', function() {
          return HeaderModule;
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/common */ './node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js'
        );
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/router */ './node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js'
        );
        /* harmony import */ var _menu_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./menu-item */ './src/app/shell/header/menu-item/index.ts'
        );
        /* harmony import */ var _header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./header.component */ './src/app/shell/header/header.component.ts'
        );

        const api = [_header_component__WEBPACK_IMPORTED_MODULE_4__['HeaderComponent']];
        class HeaderModule {}
        HeaderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineNgModule']({ type: HeaderModule });
        HeaderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineInjector']({
          factory: function HeaderModule_Factory(t) {
            return new (t || HeaderModule)();
          },
          providers: [],
          imports: [
            [
              _angular_common__WEBPACK_IMPORTED_MODULE_1__['CommonModule'],
              _angular_router__WEBPACK_IMPORTED_MODULE_2__['RouterModule'],
              _menu_item__WEBPACK_IMPORTED_MODULE_3__['MenuItemModule']
            ]
          ]
        });
        (function() {
          (typeof ngJitMode === 'undefined' || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵsetNgModuleScope'](HeaderModule, {
              declarations: [_header_component__WEBPACK_IMPORTED_MODULE_4__['HeaderComponent']],
              imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__['CommonModule'],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__['RouterModule'],
                _menu_item__WEBPACK_IMPORTED_MODULE_3__['MenuItemModule']
              ],
              exports: [_header_component__WEBPACK_IMPORTED_MODULE_4__['HeaderComponent']]
            });
        })();
        /*@__PURE__*/ (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            HeaderModule,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'],
                args: [
                  {
                    imports: [
                      _angular_common__WEBPACK_IMPORTED_MODULE_1__['CommonModule'],
                      _angular_router__WEBPACK_IMPORTED_MODULE_2__['RouterModule'],
                      _menu_item__WEBPACK_IMPORTED_MODULE_3__['MenuItemModule']
                    ],
                    exports: api,
                    declarations: [...api],
                    providers: []
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

    /***/ './src/app/shell/header/menu-item/index.ts':
      /*!*************************************************!*\
  !*** ./src/app/shell/header/menu-item/index.ts ***!
  \*************************************************/
      /*! exports provided: MenuItemModule, MenuItemComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _menu_item_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./menu-item.module */ './src/app/shell/header/menu-item/menu-item.module.ts'
        );
        /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, 'MenuItemModule', function() {
          return _menu_item_module__WEBPACK_IMPORTED_MODULE_0__['MenuItemModule'];
        });

        /* harmony import */ var _menu_item_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./menu-item.component */ './src/app/shell/header/menu-item/menu-item.component.ts'
        );
        /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, 'MenuItemComponent', function() {
          return _menu_item_component__WEBPACK_IMPORTED_MODULE_1__['MenuItemComponent'];
        });

        /***/
      },

    /***/ './src/app/shell/header/menu-item/menu-item.component.ts':
      /*!***************************************************************!*\
  !*** ./src/app/shell/header/menu-item/menu-item.component.ts ***!
  \***************************************************************/
      /*! exports provided: MenuItemComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'MenuItemComponent', function() {
          return MenuItemComponent;
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/common */ './node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js'
        );
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/router */ './node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js'
        );

        function MenuItemComponent_a_0_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'a', 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }
          if (rf & 2) {
            const ctx_r403 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('routerLink', ctx_r403.menu.route);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate'](ctx_r403.menu.title);
          }
        }
        function MenuItemComponent_div_1_div_5_a_2_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'a', 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }
          if (rf & 2) {
            const subMenu_r407 = ctx.$implicit;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('routerLink', subMenu_r407.route)(
              'routerLinkActive',
              'active'
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate'](subMenu_r407.title);
          }
        }
        function MenuItemComponent_div_1_div_5_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div', 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](1, 'div', 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
              2,
              MenuItemComponent_div_1_div_5_a_2_Template,
              2,
              3,
              'a',
              10
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }
          if (rf & 2) {
            const ctx_r405 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext'](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngForOf', ctx_r405.menu.subMenues);
          }
        }
        const _c0 = function(a0, a1) {
          return { 'fa-caret-up': a0, 'fa-caret-down': a1 };
        };
        function MenuItemComponent_div_1_Template(rf, ctx) {
          if (rf & 1) {
            const _r409 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵgetCurrentView']();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div', 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
              'mouseenter',
              function MenuItemComponent_div_1_Template_div_mouseenter_0_listener() {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵrestoreView'](_r409);
                const ctx_r408 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();
                return (ctx_r408.active = true);
              }
            )('mouseleave', function MenuItemComponent_div_1_Template_div_mouseleave_0_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵrestoreView'](_r409);
              const ctx_r410 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();
              return (ctx_r410.active = false);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](1, 'div', 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
              'click',
              function MenuItemComponent_div_1_Template_div_click_1_listener() {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵrestoreView'](_r409);
                const ctx_r411 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();
                return (ctx_r411.active = !ctx_r411.active);
              }
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](2, 'span', 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](4, 'i', 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
              5,
              MenuItemComponent_div_1_div_5_Template,
              3,
              1,
              'div',
              7
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }
          if (rf & 2) {
            const ctx_r404 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate1'](' ', ctx_r404.menu.title, ' ');
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
              'ngClass',
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpureFunction2'](3, _c0, ctx_r404.active, !ctx_r404.active)
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngIf', ctx_r404.active);
          }
        }
        class MenuItemComponent {}
        MenuItemComponent.ɵfac = function MenuItemComponent_Factory(t) {
          return new (t || MenuItemComponent)();
        };
        MenuItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineComponent']({
          type: MenuItemComponent,
          selectors: [['app-menu-item']],
          inputs: { menu: 'menu' },
          decls: 2,
          vars: 2,
          consts: [
            ['class', 'menu', 'routerLinkActive', 'active', 3, 'routerLink', 4, 'ngIf'],
            ['class', 'drop-down-menu', 3, 'mouseenter', 'mouseleave', 4, 'ngIf'],
            ['routerLinkActive', 'active', 1, 'menu', 3, 'routerLink'],
            [1, 'drop-down-menu', 3, 'mouseenter', 'mouseleave'],
            [1, 'anchor', 3, 'click'],
            [1, 'menu'],
            [1, 'fas', 3, 'ngClass'],
            ['class', 'content', 4, 'ngIf'],
            [1, 'content'],
            [1, 'menu-items'],
            ['class', 'menu-item', 3, 'routerLink', 'routerLinkActive', 4, 'ngFor', 'ngForOf'],
            [1, 'menu-item', 3, 'routerLink', 'routerLinkActive']
          ],
          template: function MenuItemComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](0, MenuItemComponent_a_0_Template, 2, 2, 'a', 0);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                1,
                MenuItemComponent_div_1_Template,
                6,
                6,
                'div',
                1
              );
            }
            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngIf', !ctx.menu.subMenues);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngIf', ctx.menu.subMenues);
            }
          },
          directives: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__['NgIf'],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__['RouterLinkWithHref'],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__['RouterLinkActive'],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__['NgClass'],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__['NgForOf']
          ],
          styles: [
            '.menu[_ngcontent-%COMP%] {\n  cursor: pointer;\n  text-decoration: none;\n  font-family: "Heebo";\n  color: #0f746f;\n  font-size: 18px;\n  letter-spacing: 0;\n  text-align: right;\n  font-weight: 500;\n}\n.menu[_ngcontent-%COMP%]:hover, .menu.active[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n@-webkit-keyframes currentPageBefore {\n  0% {\n    transform: translateX(-100%);\n  }\n  100% {\n    transform: translateX(0%);\n  }\n}\n@keyframes currentPageBefore {\n  0% {\n    transform: translateX(-100%);\n  }\n  100% {\n    transform: translateX(0%);\n  }\n}\n@-webkit-keyframes currentPageAfter {\n  0% {\n    transform: translateX(100%);\n  }\n  100% {\n    transform: translateX(0%);\n  }\n}\n@keyframes currentPageAfter {\n  0% {\n    transform: translateX(100%);\n  }\n  100% {\n    transform: translateX(0%);\n  }\n}\n.drop-down-menu[_ngcontent-%COMP%] {\n  position: relative;\n}\n.drop-down-menu[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  min-width: 170px;\n  min-height: 50px;\n  background-color: white;\n}\n@media only screen and (min-width: 1200px) {\n  .drop-down-menu[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    position: fixed;\n    z-index: 10;\n    padding: 1em 0.5em;\n    border-radius: 0.5em;\n    box-shadow: 0 0 10px -4px rgba(0, 0, 0, 0.75);\n  }\n}\n.drop-down-menu[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .menu-items[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  flex-wrap: wrap;\n}\n.drop-down-menu[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .menu-items[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%] {\n  padding: 0 0.5em;\n  background-color: white;\n  color: #00a099;\n  text-decoration: none;\n}\n.drop-down-menu[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .menu-items[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]:hover, .drop-down-menu[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .menu-items[_ngcontent-%COMP%]   .menu-item.active[_ngcontent-%COMP%] {\n  background-color: #00a099;\n  color: white;\n}\n.drop-down-menu[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .menu-items[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]:not(:last-child):after {\n  content: "";\n  display: block;\n  padding: 0 0.5em;\n  height: 1px;\n  background-color: lightgray;\n  opacity: 0.3;\n}\n.drop-down-menu[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .menu-triangle[_ngcontent-%COMP%] {\n  display: none;\n}\n@media only screen and (min-width: 1200px) {\n  .drop-down-menu[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .menu-triangle[_ngcontent-%COMP%] {\n    display: block;\n    position: absolute;\n    bottom: 100%;\n    left: 70%;\n    width: 0;\n    border-style: solid;\n    border-width: 0 7.5px 7px 7.5px;\n    border-color: transparent transparent #ffffff transparent;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hlbGwvaGVhZGVyL21lbnUtaXRlbS9DOlxcVXNlcnNcXFRlaGlsYVxcbGFzdFxcb3VyQnJvXFxvdXItYnJvdGhlcnMtd2ViL3NyY1xcYXBwXFxzaGVsbFxcaGVhZGVyXFxtZW51LWl0ZW1cXG1lbnUtaXRlbS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hlbGwvaGVhZGVyL21lbnUtaXRlbS9tZW51LWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDREY7QURLRTtFQUVFLGlCQUFBO0FDSko7QURxQkU7RUFDRTtJQUNFLDRCQUFBO0VDbkJKO0VEcUJFO0lBQ0UseUJBQUE7RUNuQko7QUFDRjtBRGFFO0VBQ0U7SUFDRSw0QkFBQTtFQ25CSjtFRHFCRTtJQUNFLHlCQUFBO0VDbkJKO0FBQ0Y7QURvQ0U7RUFDRTtJQUNFLDJCQUFBO0VDbENKO0VEb0NFO0lBQ0UseUJBQUE7RUNsQ0o7QUFDRjtBRDRCRTtFQUNFO0lBQ0UsMkJBQUE7RUNsQ0o7RURvQ0U7SUFDRSx5QkFBQTtFQ2xDSjtBQUNGO0FEdUNBO0VBQ0Usa0JBQUE7QUNwQ0Y7QURzQ0U7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUNwQ0o7QURzQ0k7RUFMRjtJQU1JLGVBQUE7SUFDQSxXQUFBO0lBQ0Esa0JBQUE7SUFDQSxvQkFBQTtJQUNBLDZDQUFBO0VDbkNKO0FBQ0Y7QURxQ0k7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7QUNuQ047QURxQ007RUFDRSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FDbkNSO0FEcUNRO0VBRUUseUJBQUE7RUFDQSxZQUFBO0FDcENWO0FEdUNRO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7QUNyQ1Y7QUQwQ0k7RUFDRSxhQUFBO0FDeENOO0FEMENNO0VBSEY7SUFJSSxjQUFBO0lBQ0Esa0JBQUE7SUFDQSxZQUFBO0lBQ0EsU0FBQTtJQUNBLFFBQUE7SUFDQSxtQkFBQTtJQUNBLCtCQUFBO0lBQ0EseURBQUE7RUN2Q047QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NoZWxsL2hlYWRlci9tZW51LWl0ZW0vbWVudS1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnfnNyYy92YXJpYWJsZXMuc2Nzcyc7XHJcblxyXG4ubWVudSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBmb250LWZhbWlseTogJ0hlZWJvJztcclxuICBjb2xvcjogIzBmNzQ2ZjtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAvL2ZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgLy8gcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAmOmhvdmVyLFxyXG4gICYuYWN0aXZlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkaGVhZGVyLW1vYmlsZS1icmVha3BvaW50KSB7XHJcbiAgICAvLyAmOmhvdmVyOjpiZWZvcmUsXHJcbiAgICAvLyAmLmFjdGl2ZTo6YmVmb3JlIHtcclxuICAgIC8vICAgY29udGVudDogJyc7XHJcbiAgICAvLyAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAxNjAsIDE1Myk7XHJcbiAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAvLyB0b3A6IDNweDtcclxuICAgIC8vIHdpZHRoOiAzM3B4O1xyXG4gICAgLy8gaGVpZ2h0OiAxcHg7XHJcbiAgICAvL2FuaW1hdGlvbi1uYW1lOiBjdXJyZW50UGFnZUJlZm9yZTtcclxuICAgIC8vIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XHJcbiAgICAvLyBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xyXG4gIH1cclxuXHJcbiAgQGtleWZyYW1lcyBjdXJyZW50UGFnZUJlZm9yZSB7XHJcbiAgICAwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vICY6aG92ZXI6OmFmdGVyLFxyXG4gIC8vICYuYWN0aXZlOjphZnRlciB7XHJcbiAgLy8gICBjb250ZW50OiAnJztcclxuICAvLyAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAxMTUsIDEwOSk7XHJcbiAgLy8gICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgLy8gd2lkdGg6IDMzcHg7XHJcbiAgLy8gaGVpZ2h0OiAxcHg7XHJcbiAgLy8gYm90dG9tOiAzcHg7XHJcbiAgLy8gbGVmdDogMDtcclxuICAvLyBhbmltYXRpb24tbmFtZTogY3VycmVudFBhZ2VBZnRlcjtcclxuICAvLyBhbmltYXRpb24tZHVyYXRpb246IDFzO1xyXG4gIC8vIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XHJcbiAgLy8gfVxyXG5cclxuICBAa2V5ZnJhbWVzIGN1cnJlbnRQYWdlQWZ0ZXIge1xyXG4gICAgMCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuLy8gfVxyXG5cclxuLmRyb3AtZG93bi1tZW51IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gIC5jb250ZW50IHtcclxuICAgIG1pbi13aWR0aDogMTcwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcblxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkaGVhZGVyLW1vYmlsZS1icmVha3BvaW50KSB7XHJcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgei1pbmRleDogMTA7XHJcbiAgICAgIHBhZGRpbmc6IDFlbSAwLjVlbTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMC41ZW07XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuICAgIH1cclxuXHJcbiAgICAubWVudS1pdGVtcyB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG4gICAgICAubWVudS1pdGVtIHtcclxuICAgICAgICBwYWRkaW5nOiAwIDAuNWVtO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGNvbG9yOiAjMDBhMDk5O1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHJcbiAgICAgICAgJjpob3ZlcixcclxuICAgICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhMDk5O1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjpub3QoOmxhc3QtY2hpbGQpOmFmdGVyIHtcclxuICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwIDAuNWVtO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwLjM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLm1lbnUtdHJpYW5nbGUge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG5cclxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkaGVhZGVyLW1vYmlsZS1icmVha3BvaW50KSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTogMTAwJTtcclxuICAgICAgICBsZWZ0OiA3MCU7XHJcbiAgICAgICAgd2lkdGg6IDA7XHJcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgICBib3JkZXItd2lkdGg6IDAgNy41cHggN3B4IDcuNXB4O1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgI2ZmZmZmZiB0cmFuc3BhcmVudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIubWVudSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LWZhbWlseTogXCJIZWVib1wiO1xuICBjb2xvcjogIzBmNzQ2ZjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4ubWVudTpob3ZlciwgLm1lbnUuYWN0aXZlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5Aa2V5ZnJhbWVzIGN1cnJlbnRQYWdlQmVmb3JlIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcbiAgfVxufVxuQGtleWZyYW1lcyBjdXJyZW50UGFnZUFmdGVyIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xuICB9XG59XG5cbi5kcm9wLWRvd24tbWVudSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5kcm9wLWRvd24tbWVudSAuY29udGVudCB7XG4gIG1pbi13aWR0aDogMTcwcHg7XG4gIG1pbi1oZWlnaHQ6IDUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLmRyb3AtZG93bi1tZW51IC5jb250ZW50IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogMTA7XG4gICAgcGFkZGluZzogMWVtIDAuNWVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgfVxufVxuLmRyb3AtZG93bi1tZW51IC5jb250ZW50IC5tZW51LWl0ZW1zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5kcm9wLWRvd24tbWVudSAuY29udGVudCAubWVudS1pdGVtcyAubWVudS1pdGVtIHtcbiAgcGFkZGluZzogMCAwLjVlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiAjMDBhMDk5O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uZHJvcC1kb3duLW1lbnUgLmNvbnRlbnQgLm1lbnUtaXRlbXMgLm1lbnUtaXRlbTpob3ZlciwgLmRyb3AtZG93bi1tZW51IC5jb250ZW50IC5tZW51LWl0ZW1zIC5tZW51LWl0ZW0uYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYTA5OTtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmRyb3AtZG93bi1tZW51IC5jb250ZW50IC5tZW51LWl0ZW1zIC5tZW51LWl0ZW06bm90KDpsYXN0LWNoaWxkKTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAwIDAuNWVtO1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xuICBvcGFjaXR5OiAwLjM7XG59XG4uZHJvcC1kb3duLW1lbnUgLmNvbnRlbnQgLm1lbnUtdHJpYW5nbGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLmRyb3AtZG93bi1tZW51IC5jb250ZW50IC5tZW51LXRyaWFuZ2xlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAxMDAlO1xuICAgIGxlZnQ6IDcwJTtcbiAgICB3aWR0aDogMDtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci13aWR0aDogMCA3LjVweCA3cHggNy41cHg7XG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjZmZmZmZmIHRyYW5zcGFyZW50O1xuICB9XG59Il19 */'
          ]
        });
        /*@__PURE__*/ (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            MenuItemComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                args: [
                  {
                    selector: 'app-menu-item',
                    templateUrl: './menu-item.component.html',
                    styleUrls: ['./menu-item.component.scss']
                  }
                ]
              }
            ],
            null,
            {
              menu: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input']
                }
              ]
            }
          );
        })();

        /***/
      },

    /***/ './src/app/shell/header/menu-item/menu-item.module.ts':
      /*!************************************************************!*\
  !*** ./src/app/shell/header/menu-item/menu-item.module.ts ***!
  \************************************************************/
      /*! exports provided: MenuItemModule */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'MenuItemModule', function() {
          return MenuItemModule;
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/common */ './node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js'
        );
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/router */ './node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js'
        );
        /* harmony import */ var _menu_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./menu-item.component */ './src/app/shell/header/menu-item/menu-item.component.ts'
        );

        //import { LoginFormComponent } from '../../../auth/login-form/login-form.component';
        const api = [
          _menu_item_component__WEBPACK_IMPORTED_MODULE_3__['MenuItemComponent']
          // LoginFormComponent
        ];
        class MenuItemModule {}
        MenuItemModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineNgModule']({ type: MenuItemModule });
        MenuItemModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineInjector']({
          factory: function MenuItemModule_Factory(t) {
            return new (t || MenuItemModule)();
          },
          imports: [
            [
              _angular_common__WEBPACK_IMPORTED_MODULE_1__['CommonModule'],
              _angular_router__WEBPACK_IMPORTED_MODULE_2__['RouterModule']
            ]
          ]
        });
        (function() {
          (typeof ngJitMode === 'undefined' || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵsetNgModuleScope'](MenuItemModule, {
              declarations: [
                _menu_item_component__WEBPACK_IMPORTED_MODULE_3__['MenuItemComponent']
                // LoginFormComponent
              ],
              imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__['CommonModule'],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__['RouterModule']
              ],
              exports: [
                _menu_item_component__WEBPACK_IMPORTED_MODULE_3__['MenuItemComponent']
                // LoginFormComponent
              ]
            });
        })();
        /*@__PURE__*/ (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            MenuItemModule,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'],
                args: [
                  {
                    declarations: [...api],
                    exports: api,
                    imports: [
                      _angular_common__WEBPACK_IMPORTED_MODULE_1__['CommonModule'],
                      _angular_router__WEBPACK_IMPORTED_MODULE_2__['RouterModule']
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

    /***/ './src/app/shell/shell.module.ts':
      /*!***************************************!*\
  !*** ./src/app/shell/shell.module.ts ***!
  \***************************************/
      /*! exports provided: ShellModule */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'ShellModule', function() {
          return ShellModule;
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */ var _header_header_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./header/header.module */ './src/app/shell/header/header.module.ts'
        );
        /* harmony import */ var _footer_footer_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./footer/footer.module */ './src/app/shell/footer/footer.module.ts'
        );

        class ShellModule {}
        ShellModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineNgModule']({ type: ShellModule });
        ShellModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineInjector']({
          factory: function ShellModule_Factory(t) {
            return new (t || ShellModule)();
          },
          imports: [
            _header_header_module__WEBPACK_IMPORTED_MODULE_1__['HeaderModule'],
            _footer_footer_module__WEBPACK_IMPORTED_MODULE_2__['FooterModule']
          ]
        });
        (function() {
          (typeof ngJitMode === 'undefined' || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵsetNgModuleScope'](ShellModule, {
              exports: [
                _header_header_module__WEBPACK_IMPORTED_MODULE_1__['HeaderModule'],
                _footer_footer_module__WEBPACK_IMPORTED_MODULE_2__['FooterModule']
              ]
            });
        })();
        /*@__PURE__*/ (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            ShellModule,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'],
                args: [
                  {
                    exports: [
                      _header_header_module__WEBPACK_IMPORTED_MODULE_1__['HeaderModule'],
                      _footer_footer_module__WEBPACK_IMPORTED_MODULE_2__['FooterModule']
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

    /***/ './src/environments/environment.ts':
      /*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
      /*! exports provided: environment */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'environment', function() {
          return environment;
        });
        /* harmony import */ var _versions_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./versions.json */ './src/environments/versions.json'
        );
        var _versions_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/ __webpack_require__.t(
          /*! ./versions.json */ './src/environments/versions.json',
          1
        );

        // This file can be replaced during build by using the `fileReplacements` array.
        // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
        // The list of file replacements can be found in `angular.json`.
        const environment = {
          production: false,
          versions: {
            version: _versions_json__WEBPACK_IMPORTED_MODULE_0__['version'],
            revision: _versions_json__WEBPACK_IMPORTED_MODULE_0__['revision']
          },
          firebase: {
            apiKey: 'AIzaSyBIQyGmuHzizv-MNxX4plVBLoErVopOEiE',
            authDomain: 'our-brothers.firebaseapp.com',
            databaseURL: 'https://our-brothers.firebaseio.com',
            projectId: 'our-brothers',
            storageBucket: 'our-brothers.appspot.com',
            messagingSenderId: '140734739420',
            appId: '1:140734739420:web:edb00f9ae409a68005d519',
            measurementId: 'G-D74EB6EMZG'
          }
        };
        /*
         * For easier debugging in development mode, you can import the following file
         * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
         *
         * This import should be commented out in production mode because it will have a negative impact
         * on performance if an error is thrown.
         */
        // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

        /***/
      },

    /***/ './src/environments/versions.json':
      /*!****************************************!*\
  !*** ./src/environments/versions.json ***!
  \****************************************/
      /*! exports provided: version, revision, default */
      /***/ function(module) {
        module.exports = JSON.parse('{"version":"1","revision":"1"}');

        /***/
      },

    /***/ './src/main.ts':
      /*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./environments/environment */ './src/environments/environment.ts'
        );
        /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./app/app.module */ './src/app/app.module.ts'
        );
        /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @angular/platform-browser */ './node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js'
        );

        if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__['environment'].production) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['enableProdMode'])();
        }
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__['platformBrowser']()
          .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__['AppModule'])
          .catch(err => console.error(err));

        /***/
      },

    /***/ 0:
      /*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! C:\Users\Tehila\last\ourBro\our-brothers-web\src\main.ts */ './src/main.ts'
        );

        /***/
      }
  },
  [[0, 'runtime', 'vendor']]
]);
//# sourceMappingURL=main-es2015.js.map