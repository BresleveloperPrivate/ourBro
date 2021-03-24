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
  ['team-page-team-page-module'],
  {
    /***/
    './src/app/team/page/members.ts':
      /*!**************************************!*\
    !*** ./src/app/team/page/members.ts ***!
    \**************************************/

      /*! exports provided: members */

      /***/
      function srcAppTeamPageMembersTs(module, __webpack_exports__, __webpack_require__) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'members', function() {
          return members;
        });

        var members = [
          {
            name: 'אליסף פרץ',
            title: 'ועד מנהל ומייסד העמותה',
            frontImage: '/assets/img/about/b-1-1.jpg',
            backImage: '/assets/img/about/b-1-2.jpg',
            email: 'elyasaf@ourbrothers.org',
            slains: [
              {
                pre: 'אחיהם של סגן',
                title: 'אוריאל פרץ ז"ל',
                link:
                  'https://www.izkor.gov.il/%D7%90%D7%95%D7%A8%D7%99%D7%90%D7%9C%20%D7%A4%D7%A8%D7%A5/en_9311332ca81acef28a7b72d240cf7ac2'
              },
              {
                pre: 'ושל רס"ן',
                title: 'אלירז פרץ ז"ל',
                link:
                  'https://www.izkor.gov.il/%D7%90%D7%9C%D7%99%D7%A8%D7%96%20%D7%A4%D7%A8%D7%A5/en_43424c15c8bf5ae87b6a533fea005de8'
              }
            ]
          },
          {
            name: 'נוי פרי',
            title: 'ועד מנהל ומייסדת העמותה',
            frontImage: '/assets/img/about/b-2-1.jpg',
            backImage: '/assets/img/about/b-2-2.jpg',
            email: 'noy@ourbrothers.org',
            slains: [
              {
                pre: 'אחות של סמ"ר',
                title: 'טל יפרח ז"ל',
                link:
                  'https://www.izkor.gov.il/%D7%98%D7%9C-%D7%A0%D7%99%D7%A1%D7%99%D7%9D%20%D7%99%D7%A4%D7%A8%D7%97/en_47f74060b0ef5c817bfa358c6e8bbdea'
              }
            ]
          },
          {
            name: 'מתן בר נוי',
            title: 'ועד מנהל ומייסד העמותה',
            frontImage: '/assets/img/about/b-3-1.jpg'
          }, // {
          //   name: 'רוני ארנהלט',
          //   title: 'מנהלת העמותה',
          //   frontImage: '/assets/img/about/b-4-1.jpg',
          //   email: 'roni@ourbrothers.org'
          // },
          {
            name: 'איילה אזולאי  ',
            title: 'חברת ועד מנהל   ',
            frontImage: '/assets/img/about/b-20-1.jpg'
          },
          {
            name: 'דניאל סלים',
            title: 'חברת עמותה',
            frontImage: '/assets/img/about/b-9-1.jpg',
            backImage: '/assets/img/about/b-9-2.jpg',
            slains: [
              {
                pre: 'אחות של רס"ל',
                title: 'עדי סלים ז"ל',
                link:
                  'https://www.izkor.gov.il/%D7%A2%D7%93%D7%99%20%D7%A1%D7%9C%D7%99%D7%9D/en_fa9d9b6bf5a7a25bc5d49efd2e0eb4fd'
              }
            ]
          },
          {
            name: 'נטע באלוה',
            title: 'חברת עמותה',
            frontImage: '/assets/img/about/b-10-1.jpg',
            backImage: '/assets/img/about/b-10-2.jpg',
            slains: [
              {
                pre: 'אחות של סמ"ר',
                title: 'נדב באלוה ז"ל',
                link:
                  'https://www.izkor.gov.il/%D7%A0%D7%93%D7%91%20%D7%91%D7%90%D7%9C%D7%95%D7%94/en_d3d9d988f9a65e2878a7bb52b3eef2e2'
              }
            ]
          },
          {
            name: 'אדוה הורביץ',
            title: 'חברת עמותה',
            frontImage: '/assets/img/about/b-11-1.jpg',
            backImage: '/assets/img/about/b-11-2.jpg',
            slains: [
              {
                pre: 'אחות של סמ"ר',
                title: 'אילון הורביץ ז"ל',
                link:
                  'https://www.izkor.gov.il/%D7%90%D7%99%D7%9C%D7%95%D7%9F-%D7%99%D7%A2%D7%A7%D7%91%20%D7%94%D7%95%D7%A8%D7%91%D7%99%D7%A5/en_0c1f91343a46d60dad38900be1d49151'
              }
            ]
          },
          {
            name: 'אמיר קלנגל',
            title: 'חבר עמותה ומייסד',
            frontImage: '/assets/img/about/b-5-1.jpg',
            backImage: '/assets/img/about/b-5-2.jpg',
            slains: [
              {
                pre: 'אחיו של רס"ן',
                title: 'יוחאי גוחא קלנגל ז"ל',
                link:
                  'https://www.izkor.gov.il/%D7%99%D7%95%D7%97%D7%90%D7%99%20%D7%A7%D7%9C%D7%A0%D7%92%D7%9C/en_021e3002a0c61e9e30ddd68d00b41992'
              }
            ]
          },
          {
            name: 'ליאור אטיאס',
            title: 'חברת עמותה',
            frontImage: '/assets/img/about/b-12-1.jpg'
          },
          {
            name: ' עירית מוזס',
            title: 'חברת עמותה ',
            frontImage: 'assets/img/about/b-17-1.JPG',
            backImage: '/assets/img/about/b-17-2.jpg',
            slains: [
              {
                pre: ' אחות של סגן אלוף ',
                title: ' רוני שלומי ז"ל',
                link:
                  'https://www.izkor.gov.il/%D7%A0%D7%99%D7%A8-%D7%9E%D7%A8%D7%93%D7%9B%D7%99%20%D7%A9%D7%A8%D7%99%D7%99%D7%91%D7%9E%D7%9F/en_ac806f2538c5ff4b7f8e084e1d4f7b6f'
              }
            ]
          },
          {
            name: 'טל שרייבמן פולק',
            title: 'חברת עמותה ומייסדת',
            frontImage: '/assets/img/about/b-16-1.jpg',
            backImage: '/assets/img/about/b-16-2.jpg',
            slains: [
              {
                pre: 'אחות של סגן ',
                title: 'ניר שריימן ז"ל',
                link:
                  'https://www.izkor.gov.il/%D7%A0%D7%99%D7%A8-%D7%9E%D7%A8%D7%93%D7%9B%D7%99%20%D7%A9%D7%A8%D7%99%D7%99%D7%91%D7%9E%D7%9F/en_ac806f2538c5ff4b7f8e084e1d4f7b6f'
              }
            ]
          },
          {
            name: 'עודד פרומוביץ',
            title: 'חבר עמותה',
            frontImage: '/assets/img/about/b-7-1.jpg',
            backImage: '/assets/img/about/b-7-2.jpg',
            slains: [
              {
                pre: 'אחיו של סמל',
                title: 'רז פרומוביץ ז"ל',
                link:
                  'https://www.izkor.gov.il/%D7%A8%D7%96%20%D7%A4%D7%A8%D7%95%D7%9E%D7%95%D7%91%D7%99%D7%A5/en_2944f34e109efa1ce73b1a3e1e02fe00'
              }
            ]
          },
          {
            name: 'גילי מרמלשטיין',
            title: 'חברת עמותה',
            frontImage: '/assets/img/about/b-6-1.jpg',
            backImage: '/assets/img/about/b-6-2.jpg',
            slains: [
              {
                pre: 'אחות של סרן',
                title: 'הראל מרמלשטיין ז"ל',
                link:
                  'https://www.izkor.gov.il/%D7%94%D7%A8%D7%90%D7%9C%20%D7%9E%D7%A8%D7%9E%D7%9C%D7%A9%D7%98%D7%99%D7%99%D7%9F/en_a82c4af6403d114af961ebad891dd927'
              }
            ]
          },
          {
            name: 'שני רווה ',
            title: 'מנהלת פעילות ',
            frontImage: '/assets/img/about/b-18-1.jpg',
            email: 'shani@ourbrothers.org'
          }, // {
          //   name: 'ירין רובל',
          //   title: 'חבר עמותה',
          //   frontImage: '/assets/img/about/b-8-1.jpg',
          //   backImage: '/assets/img/about/b-8-2.jpg',
          //   slains: [{
          //     pre: 'אחיו של סמ"ר ',
          //     title: 'בניה רובל ז"ל',
          //     link: 'https://www.izkor.gov.il/%D7%91%D7%A0%D7%99%D7%94-%D7%A0%D7%A4%D7%AA%D7%9C%D7%99%20%D7%A8%D7%95%D7%91%D7%9C/en_d161c395a28ef32b307c3af3c1e83113',
          //   }]
          // },
          // {
          //   name: 'טלי לזניק',
          //   title: 'חברת עמותה ומייסדת',
          //   frontImage: '/assets/img/about/b-13-1.jpg'
          // },
          {
            name: ' שירן ליזרוביץ ',
            title: 'מנהלת מתנדבים ושותפויות',
            email: 'volunteer@ourbrothers.org',
            frontImage: '/assets/img/about/b-19-1.jpg'
          },
          {
            name: 'נופית חי',
            title: 'מעצבת אתר',
            frontImage: '/assets/img/about/b-15-1.jpg'
          } // {
          //   name: 'גיל חנן',
          //   title: 'מנהל אתר',
          //   frontImage: '/assets/img/about/b-14-1.jpg'
          // },
        ];
        /***/
      },

    /***/
    './src/app/team/page/team-page.component.ts':
      /*!**************************************************!*\
    !*** ./src/app/team/page/team-page.component.ts ***!
    \**************************************************/

      /*! exports provided: TeamPageComponent */

      /***/
      function srcAppTeamPageTeamPageComponentTs(module, __webpack_exports__, __webpack_require__) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'TeamPageComponent', function() {
          return TeamPageComponent;
        });
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */

        var _members__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./members */
          './src/app/team/page/members.ts'
        );
        /* harmony import */

        var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/common */
          './node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js'
        );
        /* harmony import */

        var _team_card_team_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../team-card/team-card.component */
          './src/app/team/team-card/team-card.component.ts'
        );

        function TeamPageComponent_app_team_card_7_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](0, 'app-team-card', 6);
          }

          if (rf & 2) {
            var member_r231 = ctx.$implicit;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('member', member_r231);
          }
        }

        var TeamPageComponent = function TeamPageComponent() {
          _classCallCheck(this, TeamPageComponent);

          this.members = _members__WEBPACK_IMPORTED_MODULE_1__['members'];
        };

        TeamPageComponent.ɵfac = function TeamPageComponent_Factory(t) {
          return new (t || TeamPageComponent)();
        };

        TeamPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineComponent']({
          type: TeamPageComponent,
          selectors: [['app-team-page']],
          decls: 8,
          vars: 1,
          consts: [
            ['src', '../../../assets/img/aboutHeader.jpg', 1, 'image-header'],
            [1, 'site-divider'],
            [1, 'small-heading'],
            [1, 'medium-heading'],
            [1, 'cards'],
            ['class', 'card', 'data-aos', 'zoom-in', 'data-aos-duration', '1500', 3, 'member', 4, 'ngFor', 'ngForOf'],
            ['data-aos', 'zoom-in', 'data-aos-duration', '1500', 1, 'card', 3, 'member']
          ],
          template: function TeamPageComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](0, 'img', 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](1, 'div', 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](2, 'div', 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                3,
                '\u05D0\u05D5\u05D3\u05D5\u05EA \u05D4\u05E2\u05DE\u05D5\u05EA\u05D4'
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](4, 'div', 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                5,
                '\u05D4\u05E6\u05D5\u05D5\u05EA \u05E9\u05DC\u05E0\u05D5'
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](6, 'div', 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                7,
                TeamPageComponent_app_team_card_7_Template,
                1,
                1,
                'app-team-card',
                5
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngForOf', ctx.members);
            }
          },
          directives: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__['NgForOf'],
            _team_card_team_card_component__WEBPACK_IMPORTED_MODULE_3__['TeamCardComponent']
          ],
          styles: [
            '.cards[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  width: 60%;\n  margin: auto;\n  justify-content: space-around;\n}\n@media only screen and (max-width: 1440px) {\n  .cards[_ngcontent-%COMP%] {\n    width: 75%;\n  }\n}\n@media only screen and (max-width: 768px) {\n  .cards[_ngcontent-%COMP%] {\n    width: 85%;\n  }\n}\n.cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  margin-bottom: 50px;\n}\n@media only screen and (max-width: 768px) {\n  .cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVhbS9wYWdlL0M6XFxVc2Vyc1xcVGVoaWxhXFxsYXN0XFxvdXJCcm9cXG91ci1icm90aGVycy13ZWIvc3JjXFxhcHBcXHRlYW1cXHBhZ2VcXHRlYW0tcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdGVhbS9wYWdlL3RlYW0tcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtBQ0NGO0FEQ0U7RUFQRjtJQVFJLFVBQUE7RUNFRjtBQUNGO0FEQUU7RUFYRjtJQVlJLFVBQUE7RUNHRjtBQUNGO0FEREU7RUFDRSxtQkFBQTtBQ0dKO0FEREk7RUFIRjtJQUlJLG1CQUFBO0VDSUo7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3RlYW0vcGFnZS90ZWFtLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZHMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIHdpZHRoOiA2MCU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0NDBweCkge1xyXG4gICAgd2lkdGg6IDc1JTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIHdpZHRoOiA4NSU7XHJcbiAgfVxyXG5cclxuICAuY2FyZCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG5cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLmNhcmRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICB3aWR0aDogNjAlO1xuICBtYXJnaW46IGF1dG87XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDQwcHgpIHtcbiAgLmNhcmRzIHtcbiAgICB3aWR0aDogNzUlO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jYXJkcyB7XG4gICAgd2lkdGg6IDg1JTtcbiAgfVxufVxuLmNhcmRzIC5jYXJkIHtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmNhcmRzIC5jYXJkIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG59Il19 */'
          ],
          changeDetection: 0
        });
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            TeamPageComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                args: [
                  {
                    selector: 'app-team-page',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__['ChangeDetectionStrategy'].OnPush,
                    templateUrl: './team-page.component.html',
                    styleUrls: ['./team-page.component.scss']
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
    './src/app/team/page/team-page.module.ts':
      /*!***********************************************!*\
    !*** ./src/app/team/page/team-page.module.ts ***!
    \***********************************************/

      /*! exports provided: TeamPageModule */

      /***/
      function srcAppTeamPageTeamPageModuleTs(module, __webpack_exports__, __webpack_require__) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'TeamPageModule', function() {
          return TeamPageModule;
        });
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */

        var _team_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./team-page.component */
          './src/app/team/page/team-page.component.ts'
        );
        /* harmony import */

        var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/router */
          './node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js'
        );
        /* harmony import */

        var _team_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../team.module */
          './src/app/team/team.module.ts'
        );
        /* harmony import */

        var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @angular/common */
          './node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js'
        );

        var routes = [
          {
            path: '',
            component: _team_page_component__WEBPACK_IMPORTED_MODULE_1__['TeamPageComponent']
          }
        ];

        var TeamPageModule = function TeamPageModule() {
          _classCallCheck(this, TeamPageModule);
        };

        TeamPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineNgModule']({
          type: TeamPageModule
        });
        TeamPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineInjector']({
          factory: function TeamPageModule_Factory(t) {
            return new (t || TeamPageModule)();
          },
          imports: [
            [
              _team_module__WEBPACK_IMPORTED_MODULE_3__['TeamModule'],
              _angular_router__WEBPACK_IMPORTED_MODULE_2__['RouterModule'].forChild(routes),
              _angular_common__WEBPACK_IMPORTED_MODULE_4__['CommonModule']
            ]
          ]
        });

        (function() {
          (typeof ngJitMode === 'undefined' || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵsetNgModuleScope'](TeamPageModule, {
              declarations: [_team_page_component__WEBPACK_IMPORTED_MODULE_1__['TeamPageComponent']],
              imports: [
                _team_module__WEBPACK_IMPORTED_MODULE_3__['TeamModule'],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__['RouterModule'],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__['CommonModule']
              ]
            });
        })();
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            TeamPageModule,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'],
                args: [
                  {
                    imports: [
                      _team_module__WEBPACK_IMPORTED_MODULE_3__['TeamModule'],
                      _angular_router__WEBPACK_IMPORTED_MODULE_2__['RouterModule'].forChild(routes),
                      _angular_common__WEBPACK_IMPORTED_MODULE_4__['CommonModule']
                    ],
                    declarations: [_team_page_component__WEBPACK_IMPORTED_MODULE_1__['TeamPageComponent']]
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
    './src/app/team/team-card/team-card.component.ts':
      /*!*******************************************************!*\
    !*** ./src/app/team/team-card/team-card.component.ts ***!
    \*******************************************************/

      /*! exports provided: TeamCardComponent */

      /***/
      function srcAppTeamTeamCardTeamCardComponentTs(module, __webpack_exports__, __webpack_require__) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'TeamCardComponent', function() {
          return TeamCardComponent;
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

        function TeamCardComponent_div_11_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div', 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](1, 'span', 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](3, 'a', 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }

          if (rf & 2) {
            var slain_r229 = ctx.$implicit;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate'](slain_r229.pre);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
              'href',
              slain_r229.link,
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵsanitizeUrl']
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate'](slain_r229.title);
          }
        }

        function TeamCardComponent_div_12_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div', 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](1, 'a', 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](2, 'img', 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }

          if (rf & 2) {
            var ctx_r228 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
              'href',
              'mailto:' + ctx_r228.member.email,
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵsanitizeUrl']
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate'](ctx_r228.member.email);
          }
        }

        var TeamCardComponent = /*#__PURE__*/ (function() {
          function TeamCardComponent(elementRef) {
            _classCallCheck(this, TeamCardComponent);

            this.elementRef = elementRef;
            this.slains = 0;
          }

          _createClass(TeamCardComponent, [
            {
              key: 'clickout',
              value: function clickout(event) {
                this.hover = !!this.elementRef.nativeElement.contains(event.target);
              }
            },
            {
              key: 'ngOnInit',
              value: function ngOnInit() {
                this.slains = this.member.slains && this.member.slains.length;
              }
            }
          ]);

          return TeamCardComponent;
        })();

        TeamCardComponent.ɵfac = function TeamCardComponent_Factory(t) {
          return new (t || TeamCardComponent)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef']
            )
          );
        };

        TeamCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineComponent']({
          type: TeamCardComponent,
          selectors: [['app-team-card']],
          hostBindings: function TeamCardComponent_HostBindings(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'click',
                function TeamCardComponent_click_HostBindingHandler($event) {
                  return ctx.clickout($event);
                },
                false,
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵresolveDocument']
              );
            }
          },
          inputs: {
            member: 'member'
          },
          decls: 13,
          vars: 18,
          consts: [
            [1, 'card', 3, 'mouseenter', 'mouseleave'],
            [1, 'header'],
            [1, 'image', 'front-image'],
            [1, 'image', 'back-image'],
            [1, 'member-name'],
            [1, 'member-title'],
            [1, 'slains'],
            ['class', 'slain', 4, 'ngFor', 'ngForOf'],
            ['class', 'member-email', 4, 'ngIf'],
            [1, 'slain'],
            [1, 'slain-pre'],
            ['target', '_blank', 1, 'slain-link', 3, 'href'],
            [1, 'member-email'],
            [1, 'member-email-link', 3, 'href'],
            ['src', '/assets/img/about/email.svg', 1, 'member-email-img']
          ],
          template: function TeamCardComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div', 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'mouseenter',
                function TeamCardComponent_Template_div_mouseenter_0_listener() {
                  return (ctx.hover = true);
                }
              )('mouseleave', function TeamCardComponent_Template_div_mouseleave_0_listener() {
                return (ctx.hover = false);
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](1, 'div', 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](2, 'div', 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](3, 'div', 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](4, 'div');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](5, 'div');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](6, 'div', 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](8, 'div', 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](10, 'div', 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                11,
                TeamCardComponent_div_11_Template,
                5,
                3,
                'div',
                7
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                12,
                TeamCardComponent_div_12_Template,
                4,
                2,
                'div',
                8
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵstyleProp'](
                'background-image',
                'url(' + ctx.member.frontImage + ')',
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefaultStyleSanitizer']
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵstyleProp'](
                'background-image',
                'url(' + ctx.member.backImage + ')',
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefaultStyleSanitizer']
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵclassProp']('hover', ctx.hover);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵclassMap']('body');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵclassMap']('member-details ' + ('slains-' + ctx.slains));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵclassProp']('hover', ctx.hover);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate'](ctx.member.name);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate'](ctx.member.title);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵclassProp']('hover', ctx.hover);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngForOf', ctx.member.slains);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngIf', ctx.member.email);
            }
          },
          directives: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__['NgForOf'],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__['NgIf']
          ],
          styles: [
            '.card[_ngcontent-%COMP%] {\n  position: relative;\n}\n.card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  height: 235px;\n  width: 235px;\n  position: relative;\n}\n@media only screen and (max-width: 768px) {\n  .card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n    width: 130px;\n    height: 130px;\n  }\n}\n.card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background-repeat: no-repeat;\n  background-position: center top;\n  background-size: cover;\n  border-radius: 5px;\n  transition: all 0.3s ease-in-out;\n}\n.card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .image.back-image[_ngcontent-%COMP%] {\n  opacity: 0;\n  position: absolute;\n  top: 0;\n}\n.card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .image.back-image.hover[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.card[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%] {\n  position: relative;\n  text-align: center;\n}\n.card[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .member-details[_ngcontent-%COMP%] {\n  width: 100%;\n  font-size: 18px;\n  padding-top: 7px;\n  padding-bottom: 10px;\n  color: #999999;\n  background-color: white;\n  border-bottom: 3px solid #00a099;\n  transition: all 0.3s ease-out;\n  border-radius: 5px;\n}\n@media only screen and (max-width: 768px) {\n  .card[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .member-details[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n}\n.card[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .member-details[_ngcontent-%COMP%]   .member-name[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.card[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .member-details.hover[_ngcontent-%COMP%] {\n  color: white;\n  background-color: #00a099;\n  transform: translateY(-22px);\n}\n@media only screen and (max-width: 768px) {\n  .card[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .member-details.hover[_ngcontent-%COMP%] {\n    transform: translateY(-11px);\n  }\n}\n.card[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .member-details.hover.slains-2[_ngcontent-%COMP%] {\n  transform: translateY(-44px);\n}\n@media only screen and (max-width: 768px) {\n  .card[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .member-details.hover.slains-2[_ngcontent-%COMP%] {\n    transform: translateY(-22px);\n  }\n}\n.card[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .slains[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 38px;\n  font-size: 16px;\n  padding-top: 5px;\n  padding-bottom: 10px;\n  color: white;\n  background-color: #00a099;\n  position: absolute;\n  bottom: 0;\n  opacity: 0;\n  transition: all 0.3s ease-out;\n}\n@media only screen and (max-width: 768px) {\n  .card[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .slains[_ngcontent-%COMP%] {\n    min-height: 24px;\n    font-size: 8px;\n  }\n}\n.card[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .slains.hover[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.card[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .slains[_ngcontent-%COMP%]   .member-email[_ngcontent-%COMP%]   .member-email-img[_ngcontent-%COMP%] {\n  height: 15px;\n  width: 15px;\n  margin-left: 10px;\n  vertical-align: sub;\n}\n@media only screen and (max-width: 768px) {\n  .card[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .slains[_ngcontent-%COMP%]   .member-email[_ngcontent-%COMP%]   .member-email-img[_ngcontent-%COMP%] {\n    height: 8px;\n    width: 8px;\n  }\n}\n.card[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .slains[_ngcontent-%COMP%]   .member-email[_ngcontent-%COMP%]   .member-email-link[_ngcontent-%COMP%] {\n  color: white;\n}\n.card[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .slains[_ngcontent-%COMP%]   .slain[_ngcontent-%COMP%]   .slain-link[_ngcontent-%COMP%] {\n  margin-right: 3px;\n  color: white;\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVhbS90ZWFtLWNhcmQvQzpcXFVzZXJzXFxUZWhpbGFcXGxhc3RcXG91ckJyb1xcb3VyLWJyb3RoZXJzLXdlYi9zcmNcXGFwcFxcdGVhbVxcdGVhbS1jYXJkXFx0ZWFtLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RlYW0vdGVhbS1jYXJkL3RlYW0tY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FDQ0Y7QURDRTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNDSjtBRENJO0VBTEY7SUFNSSxZQUFBO0lBQ0EsYUFBQTtFQ0VKO0FBQ0Y7QURBSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtBQ0VOO0FEQU07RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0FDRVI7QURBUTtFQUNFLFVBQUE7QUNFVjtBRElFO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtBQ0ZKO0FESUk7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQ0FBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7QUNGTjtBRElNO0VBWEY7SUFZSSxlQUFBO0VDRE47QUFDRjtBREdNO0VBQ0UsaUJBQUE7QUNEUjtBRElNO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7QUNGUjtBRElRO0VBTEY7SUFNSSw0QkFBQTtFQ0RSO0FBQ0Y7QURHUTtFQUNFLDRCQUFBO0FDRFY7QURHVTtFQUhGO0lBSUksNEJBQUE7RUNBVjtBQUNGO0FES0k7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSw2QkFBQTtBQ0hOO0FES007RUFiRjtJQWNJLGdCQUFBO0lBQ0EsY0FBQTtFQ0ZOO0FBQ0Y7QURJTTtFQUNFLFVBQUE7QUNGUjtBRE1RO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDSlY7QURNVTtFQU5GO0lBT0ksV0FBQTtJQUNBLFVBQUE7RUNIVjtBQUNGO0FETVE7RUFDRSxZQUFBO0FDSlY7QURTUTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0FDUFYiLCJmaWxlIjoic3JjL2FwcC90ZWFtL3RlYW0tY2FyZC90ZWFtLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAuaGVhZGVyIHtcclxuICAgIGhlaWdodDogMjM1cHg7XHJcbiAgICB3aWR0aDogMjM1cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICB3aWR0aDogMTMwcHg7XHJcbiAgICAgIGhlaWdodDogMTMwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmltYWdlIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIHRvcDtcclxuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuXHJcbiAgICAgICYuYmFjay1pbWFnZSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG5cclxuICAgICAgICAmLmhvdmVyIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYm9keSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgLm1lbWJlci1kZXRhaWxzIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgcGFkZGluZy10b3A6IDdweDtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICAgIGNvbG9yOiAjOTk5OTk5O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICMwMGEwOTk7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcblxyXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubWVtYmVyLW5hbWUge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYTA5OTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIycHgpO1xyXG5cclxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTExcHgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5zbGFpbnMtMiB7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTQ0cHgpO1xyXG5cclxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMnB4KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc2xhaW5zIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDM4cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYTA5OTtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xyXG5cclxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiA4cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuaG92ZXIge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5tZW1iZXItZW1haWwge1xyXG4gICAgICAgIC5tZW1iZXItZW1haWwtaW1nIHtcclxuICAgICAgICAgIGhlaWdodDogMTVweDtcclxuICAgICAgICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogc3ViO1xyXG5cclxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiA4cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubWVtYmVyLWVtYWlsLWxpbmsge1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLnNsYWluIHtcclxuICAgICAgICAuc2xhaW4tbGluayB7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDNweDtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIuY2FyZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5jYXJkIC5oZWFkZXIge1xuICBoZWlnaHQ6IDIzNXB4O1xuICB3aWR0aDogMjM1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmNhcmQgLmhlYWRlciB7XG4gICAgd2lkdGg6IDEzMHB4O1xuICAgIGhlaWdodDogMTMwcHg7XG4gIH1cbn1cbi5jYXJkIC5oZWFkZXIgLmltYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIHRvcDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbn1cbi5jYXJkIC5oZWFkZXIgLmltYWdlLmJhY2staW1hZ2Uge1xuICBvcGFjaXR5OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbn1cbi5jYXJkIC5oZWFkZXIgLmltYWdlLmJhY2staW1hZ2UuaG92ZXIge1xuICBvcGFjaXR5OiAxO1xufVxuLmNhcmQgLmJvZHkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jYXJkIC5ib2R5IC5tZW1iZXItZGV0YWlscyB7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHBhZGRpbmctdG9wOiA3cHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBjb2xvcjogIzk5OTk5OTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjMDBhMDk5O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuY2FyZCAuYm9keSAubWVtYmVyLWRldGFpbHMge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgfVxufVxuLmNhcmQgLmJvZHkgLm1lbWJlci1kZXRhaWxzIC5tZW1iZXItbmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmNhcmQgLmJvZHkgLm1lbWJlci1kZXRhaWxzLmhvdmVyIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhMDk5O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIycHgpO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuY2FyZCAuYm9keSAubWVtYmVyLWRldGFpbHMuaG92ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTFweCk7XG4gIH1cbn1cbi5jYXJkIC5ib2R5IC5tZW1iZXItZGV0YWlscy5ob3Zlci5zbGFpbnMtMiB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNDRweCk7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jYXJkIC5ib2R5IC5tZW1iZXItZGV0YWlscy5ob3Zlci5zbGFpbnMtMiB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMnB4KTtcbiAgfVxufVxuLmNhcmQgLmJvZHkgLnNsYWlucyB7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAzOHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGEwOTk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmNhcmQgLmJvZHkgLnNsYWlucyB7XG4gICAgbWluLWhlaWdodDogMjRweDtcbiAgICBmb250LXNpemU6IDhweDtcbiAgfVxufVxuLmNhcmQgLmJvZHkgLnNsYWlucy5ob3ZlciB7XG4gIG9wYWNpdHk6IDE7XG59XG4uY2FyZCAuYm9keSAuc2xhaW5zIC5tZW1iZXItZW1haWwgLm1lbWJlci1lbWFpbC1pbWcge1xuICBoZWlnaHQ6IDE1cHg7XG4gIHdpZHRoOiAxNXB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgdmVydGljYWwtYWxpZ246IHN1Yjtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmNhcmQgLmJvZHkgLnNsYWlucyAubWVtYmVyLWVtYWlsIC5tZW1iZXItZW1haWwtaW1nIHtcbiAgICBoZWlnaHQ6IDhweDtcbiAgICB3aWR0aDogOHB4O1xuICB9XG59XG4uY2FyZCAuYm9keSAuc2xhaW5zIC5tZW1iZXItZW1haWwgLm1lbWJlci1lbWFpbC1saW5rIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmNhcmQgLmJvZHkgLnNsYWlucyAuc2xhaW4gLnNsYWluLWxpbmsge1xuICBtYXJnaW4tcmlnaHQ6IDNweDtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn0iXX0= */'
          ],
          changeDetection: 0
        });
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            TeamCardComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                args: [
                  {
                    selector: 'app-team-card',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__['ChangeDetectionStrategy'].OnPush,
                    templateUrl: './team-card.component.html',
                    styleUrls: ['./team-card.component.scss']
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
              member: [
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

    /***/
    './src/app/team/team.module.ts':
      /*!*************************************!*\
    !*** ./src/app/team/team.module.ts ***!
    \*************************************/

      /*! exports provided: TeamModule */

      /***/
      function srcAppTeamTeamModuleTs(module, __webpack_exports__, __webpack_require__) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'TeamModule', function() {
          return TeamModule;
        });
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */

        var _team_card_team_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./team-card/team-card.component */
          './src/app/team/team-card/team-card.component.ts'
        );
        /* harmony import */

        var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/common */
          './node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js'
        );

        var TeamModule = function TeamModule() {
          _classCallCheck(this, TeamModule);
        };

        TeamModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineNgModule']({
          type: TeamModule
        });
        TeamModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineInjector']({
          factory: function TeamModule_Factory(t) {
            return new (t || TeamModule)();
          },
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__['CommonModule']]]
        });

        (function() {
          (typeof ngJitMode === 'undefined' || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵsetNgModuleScope'](TeamModule, {
              declarations: [_team_card_team_card_component__WEBPACK_IMPORTED_MODULE_1__['TeamCardComponent']],
              imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__['CommonModule']],
              exports: [_team_card_team_card_component__WEBPACK_IMPORTED_MODULE_1__['TeamCardComponent']]
            });
        })();
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            TeamModule,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'],
                args: [
                  {
                    declarations: [_team_card_team_card_component__WEBPACK_IMPORTED_MODULE_1__['TeamCardComponent']],
                    exports: [_team_card_team_card_component__WEBPACK_IMPORTED_MODULE_1__['TeamCardComponent']],
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
      }
  }
]);
//# sourceMappingURL=team-page-team-page-module-es5.js.map
