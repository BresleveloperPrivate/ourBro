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
  ['agenda-page-agenda-page-module'],
  {
    /***/
    './src/app/agenda/page/agenda-page.component.ts':
      /*!******************************************************!*\
    !*** ./src/app/agenda/page/agenda-page.component.ts ***!
    \******************************************************/

      /*! exports provided: AgendaPageComponent */

      /***/
      function srcAppAgendaPageAgendaPageComponentTs(module, __webpack_exports__, __webpack_require__) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'AgendaPageComponent', function() {
          return AgendaPageComponent;
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

        var _quotes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./quotes.service */
          './src/app/agenda/page/quotes.service.ts'
        );
        /* harmony import */

        var _videos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./videos.service */
          './src/app/agenda/page/videos.service.ts'
        );
        /* harmony import */

        var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @angular/common */
          './node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js'
        );
        /* harmony import */

        var _shared_pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../shared/pipes/safe.pipe */
          './src/app/shared/pipes/safe.pipe.ts'
        );

        function AgendaPageComponent_ng_container_56_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementContainerStart'](0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](1, 'div', 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](2, 'iframe', 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpipe'](3, 'safe');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](4, 'iframe', 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpipe'](5, 'safe');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](6, 'iframe', 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpipe'](7, 'safe');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementContainerEnd']();
          }

          if (rf & 2) {
            var page_r248 = ctx.$implicit;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
              'src',
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpipeBind1'](3, 3, page_r248.page[0].src),
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵsanitizeResourceUrl']
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
              'src',
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpipeBind1'](5, 5, page_r248.page[1].src),
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵsanitizeResourceUrl']
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
              'src',
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpipeBind1'](7, 7, page_r248.page[2].src),
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵsanitizeResourceUrl']
            );
          }
        }

        function AgendaPageComponent_ng_container_70_ng_container_2_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementContainerStart'](0, 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](1, 'div', 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](2, 'img', 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](3, 'a', 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](5, 'div', 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](6, 'a', 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](8, 'a', 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementContainerEnd']();
          }

          if (rf & 2) {
            var quote_r253 = ctx.$implicit;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
              'href',
              '../../../assets/texts/' + quote_r253.writerId + '.pdf',
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵsanitizeUrl']
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate'](quote_r253.excerpt);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate'](quote_r253.writerName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
              'href',
              quote_r253.recipientId,
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵsanitizeUrl']
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate'](quote_r253.recipientName);
          }
        }

        function AgendaPageComponent_ng_container_70_Template(rf, ctx) {
          if (rf & 1) {
            var _r255 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵgetCurrentView']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementContainerStart'](0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](1, 'div', 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
              'mouseenter',
              function AgendaPageComponent_ng_container_70_Template_div_mouseenter_1_listener() {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵrestoreView'](_r255);

                var ctx_r254 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();

                return ctx_r254.pauseQuoteCarousel();
              }
            )('mouseleave', function AgendaPageComponent_ng_container_70_Template_div_mouseleave_1_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵrestoreView'](_r255);

              var ctx_r256 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();

              return ctx_r256.resumeQuoteCarousel();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
              2,
              AgendaPageComponent_ng_container_70_ng_container_2_Template,
              10,
              5,
              'ng-container',
              38
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementContainerEnd']();
          }

          if (rf & 2) {
            var page_r250 = ctx.$implicit;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngForOf', page_r250.page);
          }
        }

        var AgendaPageComponent = /*#__PURE__*/ (function() {
          function AgendaPageComponent(quotesService, videosService) {
            _classCallCheck(this, AgendaPageComponent);

            this.quotesService = quotesService;
            this.videosService = videosService;
            this.quotesSlideIndex = 1;
            this.videosSlideIndex = 1;
          }

          _createClass(AgendaPageComponent, [
            {
              key: 'ngOnInit',
              value: function ngOnInit() {
                if (window.innerWidth <= 768) {
                  this.pagedExcerpts = this.quotesService.smallPagePagedQuotes;
                } else {
                  this.pagedExcerpts = this.quotesService.pagedQuotes;
                }

                this.pagedVideos = this.videosService.pagedVideos;
              }
            },
            {
              key: 'ngAfterViewInit',
              value: function ngAfterViewInit() {
                this.showSlides(this.quotesSlideIndex, '.quotes');
                this.showSlides(this.videosSlideIndex, '.videos');
                this.startQuotesCarousel();
              }
            },
            {
              key: 'pauseQuoteCarousel',
              value: function pauseQuoteCarousel() {
                this.sub.unsubscribe();
              }
            },
            {
              key: 'resumeQuoteCarousel',
              value: function resumeQuoteCarousel() {
                this.sub.unsubscribe();
                this.startQuotesCarousel();
              }
            },
            {
              key: 'startQuotesCarousel',
              value: function startQuotesCarousel() {
                var _this = this;

                this.sub = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__['interval'])(10000).subscribe(function() {
                  _this.plusSlides(1, '.quotes');
                });
              }
            },
            {
              key: 'plusSlides',
              value: function plusSlides(n, className) {
                switch (className) {
                  case '.quotes':
                    this.showSlides((this.quotesSlideIndex += n), className);
                    break;

                  case '.videos':
                    this.showSlides((this.videosSlideIndex += n), className);
                    break;
                }
              }
            },
            {
              key: 'showSlides',
              value: function showSlides(n, className) {
                var slides = document.querySelectorAll(className);

                if (n > slides.length) {
                  switch (className) {
                    case '.quotes':
                      this.quotesSlideIndex = 1;
                      break;

                    case '.videos':
                      this.videosSlideIndex = 1;
                      break;
                  }
                }

                if (n < 1) {
                  switch (className) {
                    case '.quotes':
                      this.quotesSlideIndex = slides.length;
                      break;

                    case '.videos':
                      this.videosSlideIndex = slides.length;
                      break;
                  }
                }

                slides.forEach(function(slide) {
                  slide.style.display = 'none';
                });

                switch (className) {
                  case '.quotes':
                    slides[this.quotesSlideIndex - 1].style.display = 'grid';
                    break;

                  case '.videos':
                    slides[this.videosSlideIndex - 1].style.display = 'grid';
                    break;
                }
              }
            }
          ]);

          return AgendaPageComponent;
        })();

        AgendaPageComponent.ɵfac = function AgendaPageComponent_Factory(t) {
          return new (t || AgendaPageComponent)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
              _quotes_service__WEBPACK_IMPORTED_MODULE_2__['QuotesService']
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
              _videos_service__WEBPACK_IMPORTED_MODULE_3__['VideosService']
            )
          );
        };

        AgendaPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineComponent']({
          type: AgendaPageComponent,
          selectors: [['app-agenda-page']],
          decls: 79,
          vars: 6,
          consts: [
            ['src', '../../../assets/img/agenda-header.jpg', 1, 'image-header'],
            [1, 'site-divider'],
            ['data-aos', 'fade-up', 'data-aos-duration', '1000', 1, 'small-heading'],
            ['data-aos', 'fade-up', 'data-aos-duration', '1000', 1, 'medium-heading'],
            [1, 'kits-container'],
            [1, 'kit-card'],
            ['src', '../../../assets/svg/Group 17.svg', 1, 'kit-icon'],
            [1, 'kit-heading'],
            [1, 'site-text', 'kit-description'],
            [
              'href',
              '/assets/docs/\u05EA\u05E2\u05D5\u05D3\u05EA%20\u05D4\u05D5\u05E7\u05E8\u05D4.pdf',
              'target',
              '_blank',
              1,
              'site-button',
              'download-button'
            ],
            [1, 'fas', 'fa-angle-double-left'],
            ['src', '../../../assets/svg/Group 19.svg', 1, 'kit-icon'],
            [
              'href',
              '/assets/docs/\u05D4\u05D6\u05DE\u05E0\u05D4%20\u05D4\u05D0\u05D7\u05D9\u05DD%20\u05E9\u05DC\u05E0\u05D5.pdf',
              'target',
              '_blank',
              1,
              'site-button',
              'download-button'
            ],
            ['src', '../../../assets/svg/Group 20.svg', 1, 'kit-icon'],
            [
              'href',
              '/assets/docs/\u05E2\u05E8\u05DB\u05EA%20\u05D0\u05D9\u05E8\u05D5\u05D7%20-%20\u05D4\u05D0\u05D7\u05D9\u05DD%20\u05E9\u05DC\u05E0\u05D5.pdf',
              'target',
              '_blank',
              1,
              'site-button',
              'download-button'
            ],
            ['src', '../../../assets/svg/Group 18.svg', 1, 'kit-icon'],
            [
              'href',
              '/assets/docs/\u05E2\u05E8\u05DB\u05EA%20\u05D0\u05D7\u05D9\u05DD%20\u05D5\u05D0\u05D7\u05D9\u05D5\u05EA%20-%20\u05D4\u05D0\u05D7\u05D9\u05DD%20\u05E9\u05DC\u05E0\u05D5.pdf',
              'target',
              '_blank',
              1,
              'site-button',
              'download-button'
            ],
            ['src', '../../../assets/svg/Group 10.svg', 1, 'kit-icon'],
            [1, 'videos-container'],
            ['data-aos', 'fade-left', 'data-aos-duration', '1000', 1, 'site-divider', 'divider'],
            ['data-aos', 'fade-left', 'data-aos-duration', '2000', 1, 'small-heading', 'videos-header'],
            [4, 'ngFor', 'ngForOf'],
            [1, 'videos-button', 3, 'click'],
            ['src', '../../../assets/img/left_arrow_white.svg', 1, 'icon'],
            [1, 'pages-numbers-text'],
            ['src', '../../../assets/img/right_arrow_white.svg', 1, 'icon'],
            [1, 'quotes-container'],
            [1, 'quote-carousel'],
            [1, 'pages-number-container'],
            [1, 'quotes-button', 3, 'click'],
            ['src', '../../../assets/img/left_arrow.svg', 1, 'icon'],
            [1, 'pages-numbers-text-quote'],
            ['src', '../../../assets/img/right_arrow.svg', 1, 'icon'],
            [1, 'videos'],
            [
              'width',
              '336',
              'height',
              '189',
              'frameborder',
              '0',
              'allow',
              'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture ',
              'allowfullscreen',
              '',
              'data-aos',
              'fade-right',
              'data-aos-duration',
              '3000',
              3,
              'src'
            ],
            [
              'width',
              '336',
              'height',
              '189',
              'frameborder',
              '0',
              'allow',
              'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture',
              'allowfullscreen',
              '',
              'data-aos',
              'fade-down',
              'data-aos-duration',
              '3000',
              3,
              'src'
            ],
            [
              'width',
              '336',
              'height',
              '189',
              'frameborder',
              '0',
              'allow',
              'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture',
              'allowfullscreen',
              '',
              'data-aos',
              'fade-left',
              'data-aos-duration',
              '3000',
              3,
              'src'
            ],
            [1, 'quotes', 3, 'mouseenter', 'mouseleave'],
            ['data-aos', 'fade-up', 'data-aos-duration', '1000', 4, 'ngFor', 'ngForOf'],
            ['data-aos', 'fade-up', 'data-aos-duration', '1000'],
            [1, 'quote'],
            ['src', '../../../assets/img/apostrophy.png', 1, 'apostrophy'],
            ['target', '_blank', 1, 'site-text', 'quote-text', 3, 'href'],
            [1, 'quote-divider'],
            [1, 'site-text', 'person-link'],
            ['target', '_blank', 1, 'site-text', 'person-link', 3, 'href']
          ],
          template: function AgendaPageComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](0, 'img', 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](1, 'div', 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](2, 'h1', 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                3,
                ' \u05DE\u05D1\u05E0\u05D4 \u05D4\u05E2\u05E8\u05D1\n'
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](4, 'h2', 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                5,
                ' \u05D4\u05DB\u05DC\u05D9\u05DD \u05DC\u05E7\u05D9\u05D9\u05DD \u05E2\u05E8\u05D1 \u05D1\u05DC\u05EA\u05D9 \u05E0\u05E9\u05DB\u05D7\n'
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](6, 'section', 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](7, 'div', 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](8, 'img', 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](9, 'div', 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                10,
                '\u05EA\u05E2\u05D5\u05D3\u05EA \u05D4\u05D5\u05E7\u05E8\u05D4'
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](11, 'div', 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                12,
                ' \u05D1\u05E1\u05D5\u05E3 \u05D4\u05E2\u05E8\u05D1, \u05D9\u05E9 \u05D4\u05E0\u05D5\u05D4\u05D2\u05D9\u05DD \u05DC\u05D4\u05E2\u05E0\u05D9\u05E7 \u05DC\u05D0\u05D7/\u05D5\u05EA \u05D4\u05DE\u05E1\u05E4\u05E8\u05D9\u05DD \u05EA\u05E2\u05D5\u05D3\u05EA \u05D4\u05D5\u05E7\u05E8\u05D4 \u05E2\u05DC \u05D4\u05E9\u05D9\u05EA\u05D5\u05E3 \u05D1\u05E1\u05D9\u05E4\u05D5\u05E8 \u05D5\u05E4\u05EA\u05D9\u05D7\u05EA \u05D4\u05DC\u05D1 '
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](13, 'a', 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](14, '\u05DC\u05D4\u05D5\u05E8\u05D3\u05D4\xA0');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](15, 'i', 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](16, 'div', 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](17, 'img', 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](18, 'div', 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](19, '\u05D4\u05D6\u05DE\u05E0\u05D4');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](20, 'div', 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                21,
                ' \u05E1\u05D5\u05D2\u05D9\u05DD \u05E9\u05D5\u05E0\u05D9\u05DD \u05E9\u05DC \u05D4\u05D6\u05DE\u05E0\u05D5\u05EA \u05DC\u05E9\u05D9\u05EA\u05D5\u05E3 \u05D5\u05D4\u05D6\u05DE\u05E0\u05EA \u05E7\u05D4\u05DC \u05D4\u05E9\u05D5\u05DE\u05E2\u05D9\u05DD \u05DC\u05DE\u05E4\u05D2\u05E9\u05D9 \u05F3\u05D4\u05D0\u05D7\u05D9\u05DD \u05E9\u05DC\u05E0\u05D5\u05F3 '
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](22, 'a', 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](23, '\u05DC\u05D4\u05D5\u05E8\u05D3\u05D4\xA0');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](24, 'i', 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](25, 'div', 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](26, 'img', 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](27, 'div', 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                28,
                '\u05E2\u05E8\u05DB\u05EA \u05D0\u05D9\u05E8\u05D5\u05D7'
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](29, 'div', 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                30,
                ' \u05D4\u05E2\u05E8\u05DB\u05D4 \u05DB\u05D5\u05DC\u05DC\u05EA \u05D1\u05EA\u05D5\u05DB\u05D4 \u05D8\u05D9\u05E4\u05D9\u05DD, \u05E8\u05E2\u05D9\u05D5\u05E0\u05D5\u05EA, \u05EA\u05D9\u05D0\u05D5\u05DD \u05E6\u05D9\u05E4\u05D9\u05D5\u05EA \u05D5\u05DB\u05DC\u05D9\u05DD \u05D8\u05DB\u05E0\u05D9\u05D9\u05DD \u05DC\u05E7\u05E8\u05D0\u05EA \u05D4\u05E2\u05E8\u05D1 \u05D5\u05D0\u05D7\u05E8\u05D9\u05D5 '
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](31, 'a', 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](32, '\u05DC\u05D4\u05D5\u05E8\u05D3\u05D4\xA0');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](33, 'i', 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](34, 'div', 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](35, 'img', 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](36, 'div', 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](37, '\u05E2\u05E8\u05DB\u05EA \u05D0\u05D7');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](38, 'div', 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                39,
                ' \u05D4\u05E2\u05E8\u05DB\u05D4 \u05DB\u05D5\u05DC\u05DC\u05EA \u05D1\u05EA\u05D5\u05DB\u05D4 \u05D8\u05D9\u05E4\u05D9\u05DD, \u05E8\u05E2\u05D9\u05D5\u05E0\u05D5\u05EA \u05D5\u05DE\u05D9\u05D3\u05E2 \u05D4\u05D9\u05E2\u05D6\u05E8\u05D5 \u05DC\u05DA \u05DC\u05E1\u05E4\u05E8 \u05D0\u05EA \u05D4\u05E1\u05D9\u05E4\u05D5\u05E8 \u05E9\u05DC\u05DA \u05D1\u05E6\u05D5\u05E8\u05D4 \u05D4\u05D8\u05D5\u05D1\u05D4 \u05D1\u05D9\u05D5\u05EA\u05E8 '
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](40, 'a', 16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](41, '\u05DC\u05D4\u05D5\u05E8\u05D3\u05D4\xA0');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](42, 'i', 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](43, 'div', 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](44, 'img', 17);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](45, 'div', 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                46,
                '\u05E2\u05E8\u05DB\u05EA \u05DE\u05D5\u05D1\u05D9\u05DC \u05DE\u05E4\u05D2\u05E9'
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](47, 'div', 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                48,
                ' \u05E2\u05E8\u05DB\u05EA \u05DE\u05D5\u05D1\u05D9\u05DC \u05DE\u05E4\u05D2\u05E9 \u05D5\u05D9\u05E8\u05D8\u05D5\u05D0\u05DC\u05D9 \u05D4\u05DB\u05D5\u05DC\u05DC\u05EA \u05D8\u05D9\u05E4\u05D9\u05DD \u05DC\u05D4\u05E2\u05D1\u05E8\u05EA \u05DE\u05E4\u05D2\u05E9 \u05DE\u05D5\u05E6\u05DC\u05D7, \u05D4\u05E1\u05D1\u05E8 \u05D8\u05DB\u05E0\u05D9 \u05E2\u05DC \u05D4\u05E4\u05DC\u05D8\u05E4\u05D5\u05E8\u05DE\u05D4 \u05D5\u05D0\u05E8\u05D2\u05D6 \u05DB\u05DC\u05D9\u05DD \u05E2\u05D1\u05D5\u05E8 \u05DE\u05E2\u05D1\u05D9\u05E8 \u05D4\u05DE\u05E4\u05D2\u05E9. '
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](49, 'a', 16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](50, '\u05DC\u05D4\u05D5\u05E8\u05D3\u05D4\xA0');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](51, 'i', 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](52, 'section', 18);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](53, 'div', 19);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](54, 'div', 20);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](55, '\u05E1\u05E8\u05D8\u05D5\u05E0\u05D9\u05DD');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                56,
                AgendaPageComponent_ng_container_56_Template,
                8,
                9,
                'ng-container',
                21
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](57, 'div');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](58, 'br');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](59, 'button', 22);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'click',
                function AgendaPageComponent_Template_button_click_59_listener() {
                  return ctx.plusSlides(1, '.videos');
                }
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](60, 'img', 23);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](61, 'span', 24);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](62);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](63, 'button', 22);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'click',
                function AgendaPageComponent_Template_button_click_63_listener() {
                  return ctx.plusSlides(0 - 1, '.videos');
                }
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](64, 'img', 25);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](65, 'section', 26);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](66, 'div', 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](67, 'h2', 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                68,
                ' \u05D0\u05D7\u05D9\u05DD \u05DB\u05D5\u05EA\u05D1\u05D9\u05DD \u05E2\u05DC \u05D0\u05D7\u05D9\u05D4\u05DD '
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](69, 'div', 27);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                70,
                AgendaPageComponent_ng_container_70_Template,
                3,
                1,
                'ng-container',
                21
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](71, 'div', 28);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](72, 'br');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](73, 'button', 29);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'click',
                function AgendaPageComponent_Template_button_click_73_listener() {
                  return ctx.plusSlides(1, '.quotes');
                }
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](74, 'img', 30);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](75, 'span', 31);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](76);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](77, 'button', 29);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'click',
                function AgendaPageComponent_Template_button_click_77_listener() {
                  return ctx.plusSlides(0 - 1, '.quotes');
                }
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](78, 'img', 32);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](56);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngForOf', ctx.pagedVideos);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate2'](
                ' ',
                ctx.pagedVideos.length,
                ' / ',
                ctx.videosSlideIndex,
                ' '
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngForOf', ctx.pagedExcerpts);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate2'](
                ' ',
                ctx.pagedExcerpts.length,
                ' / ',
                ctx.quotesSlideIndex,
                ' '
              );
            }
          },
          directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__['NgForOf']],
          pipes: [_shared_pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_5__['SafePipe']],
          styles: [
            '.kits-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(250px, 15%));\n  grid-gap: 1em;\n  place-content: center;\n  margin-bottom: 3em;\n  justify-content: center;\n}\n@media only screen and (max-width: 1600px) {\n  .kits-container[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(4, minmax(250px, 21%));\n  }\n}\n@media only screen and (max-width: 768px) {\n  .kits-container[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(1, 90%);\n  }\n}\n.kits-container[_ngcontent-%COMP%]   .kit-card[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  padding: 1em;\n  display: grid;\n  grid-template-columns: 100%;\n  grid-template-rows: 90px 40px auto 45px;\n}\n.kits-container[_ngcontent-%COMP%]   .kit-card[_ngcontent-%COMP%]   .kit-icon[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 75px;\n  margin-bottom: 0.5em;\n  justify-self: center;\n}\n.kits-container[_ngcontent-%COMP%]   .kit-card[_ngcontent-%COMP%]   .kit-heading[_ngcontent-%COMP%] {\n  color: #082551;\n  font-family: "arbel";\n  font-size: 25px;\n  text-align: center;\n  justify-self: center;\n  margin-bottom: 0.5em;\n}\n.kits-container[_ngcontent-%COMP%]   .kit-card[_ngcontent-%COMP%]   .kit-description[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 0;\n  margin-bottom: 15px;\n  width: 100%;\n}\n.kits-container[_ngcontent-%COMP%]   .kit-card[_ngcontent-%COMP%]   .download-button[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 22px;\n  margin-bottom: auto;\n  background-color: #082551;\n}\n.kits-container[_ngcontent-%COMP%]   .kit-card[_ngcontent-%COMP%]   .download-button[_ngcontent-%COMP%]   .fa-angle-double-left[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.videos-container[_ngcontent-%COMP%] {\n  background-color: var(--primary-color);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 0 40px 60px 40px;\n}\n.videos-container[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%]::after {\n  background-color: white;\n}\n.videos-container[_ngcontent-%COMP%]   .videos-header[_ngcontent-%COMP%] {\n  color: white;\n  margin-bottom: 2em;\n}\n.videos-container[_ngcontent-%COMP%]   .small-heading[_ngcontent-%COMP%] {\n  letter-spacing: 8px;\n}\n.videos-container[_ngcontent-%COMP%]   .videos-button[_ngcontent-%COMP%] {\n  background: transparent;\n  margin: 0 10px;\n  border: none;\n}\n.videos-container[_ngcontent-%COMP%]   .videos-button[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 25px;\n  height: 25px;\n  vertical-align: middle;\n  margin: 0 12px;\n  background: transparent;\n}\n.videos-container[_ngcontent-%COMP%]   .pages-numbers-text[_ngcontent-%COMP%] {\n  color: white;\n}\n.videos-container[_ngcontent-%COMP%]   .videos[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(3, auto);\n  grid-gap: 4em;\n  place-content: center;\n  width: 100%;\n  display: none;\n}\n@media only screen and (max-width: 768px) {\n  .videos-container[_ngcontent-%COMP%]   .videos[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(1, auto);\n  }\n}\n.quotes-container[_ngcontent-%COMP%]   .quotes[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 1em;\n  place-content: center;\n  width: 100%;\n  padding: 0 100px;\n  max-width: 1000px;\n  margin: auto;\n  display: none;\n}\n@media only screen and (max-width: 768px) {\n  .quotes-container[_ngcontent-%COMP%]   .quotes[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(1, auto);\n    padding: 0 65px;\n  }\n}\n.quotes-container[_ngcontent-%COMP%]   .quotes[_ngcontent-%COMP%]   .quote[_ngcontent-%COMP%] {\n  background-color: #efefef;\n  width: 100%;\n  padding: 1em;\n  display: grid;\n  grid-template-columns: 100%;\n  grid-template-rows: auto 1fr auto 25px 50px;\n  visibility: visible;\n  border-radius: 5px;\n}\n.quotes-container[_ngcontent-%COMP%]   .quotes[_ngcontent-%COMP%]   .quote[_ngcontent-%COMP%]   .apostrophy[_ngcontent-%COMP%] {\n  height: 30px;\n  margin-bottom: 15px;\n}\n.quotes-container[_ngcontent-%COMP%]   .quotes[_ngcontent-%COMP%]   .quote[_ngcontent-%COMP%]   .quote-text[_ngcontent-%COMP%] {\n  text-align: center;\n  justify-self: center;\n  text-decoration: none;\n  font-family: "arbel";\n  line-height: 25px;\n  margin-top: 5px;\n}\n.quotes-container[_ngcontent-%COMP%]   .quotes[_ngcontent-%COMP%]   .quote[_ngcontent-%COMP%]   .quote-divider[_ngcontent-%COMP%] {\n  justify-self: center;\n  height: 3px;\n  width: 80%;\n  background-color: var(--primary-color);\n  margin: 10px 0;\n}\n.quotes-container[_ngcontent-%COMP%]   .quotes[_ngcontent-%COMP%]   .quote[_ngcontent-%COMP%]   .person-link[_ngcontent-%COMP%] {\n  text-align: center;\n  justify-self: center;\n  font-size: 14px;\n  text-decoration: none;\n  line-height: 25px;\n  margin-top: 0;\n}\n.quotes-container[_ngcontent-%COMP%]   .pages-number-container[_ngcontent-%COMP%] {\n  padding-top: 15px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n@media only screen and (max-width: 768px) {\n  .quotes-container[_ngcontent-%COMP%]   .pages-number-container[_ngcontent-%COMP%] {\n    margin-bottom: 50px;\n  }\n}\n.quotes-container[_ngcontent-%COMP%]   .pages-number-container[_ngcontent-%COMP%]   .quotes-button[_ngcontent-%COMP%] {\n  align-self: center;\n  background: transparent;\n  margin: 0 25px;\n  border: none;\n}\n.quotes-container[_ngcontent-%COMP%]   .pages-number-container[_ngcontent-%COMP%]   .quotes-button[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 25px;\n  height: 25px;\n  vertical-align: middle;\n  margin: 0 12px;\n  background: transparent;\n}\n.quotes-container[_ngcontent-%COMP%]   .pages-number-container[_ngcontent-%COMP%]   .pages-numbers-text-quote[_ngcontent-%COMP%] {\n  color: #082551;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWdlbmRhL3BhZ2UvQzpcXFVzZXJzXFxUZWhpbGFcXGxhc3RcXG91ckJyb1xcb3VyLWJyb3RoZXJzLXdlYi9zcmNcXGFwcFxcYWdlbmRhXFxwYWdlXFxhZ2VuZGEtcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWdlbmRhL3BhZ2UvYWdlbmRhLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esb0RBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FDQ0Y7QURDRTtFQVJGO0lBU0ksb0RBQUE7RUNFRjtBQUNGO0FEQUU7RUFaRjtJQWFJLHFDQUFBO0VDR0Y7QUFDRjtBRERFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLHVDQUFBO0FDR0o7QURESTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtBQ0dOO0FEQUk7RUFFRSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0FDQ047QURFSTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQ0FOO0FER0k7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FDRE47QURHTTtFQUNFLGVBQUE7QUNEUjtBRE9BO0VBQ0Usc0NBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7QUNKRjtBRE1FO0VBQ0UsdUJBQUE7QUNKSjtBRE9FO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FDTEo7QURRRTtFQUNFLG1CQUFBO0FDTko7QURTRTtFQUNFLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUNQSjtBRFNJO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBRUEsY0FBQTtFQUNBLHVCQUFBO0FDUk47QURXRTtFQUNFLFlBQUE7QUNUSjtBRFlFO0VBQ0Usc0NBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQ1ZKO0FEWUk7RUFQRjtJQVFJLHNDQUFBO0VDVEo7QUFDRjtBRGNFO0VBQ0UscUNBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDWEo7QURhSTtFQVZGO0lBV0ksc0NBQUE7SUFDQSxlQUFBO0VDVko7QUFDRjtBRFdJO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLDJDQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ1ROO0FEV007RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUNUUjtBRFlNO0VBQ0Usa0JBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNWUjtBRGFNO0VBQ0Usb0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLHNDQUFBO0VBQ0EsY0FBQTtBQ1hSO0FEY007RUFDRSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FDWlI7QURpQkU7RUFDRSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDZko7QURpQkk7RUFORjtJQU9JLG1CQUFBO0VDZEo7QUFDRjtBRGdCSTtFQUNFLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQ2ROO0FEZ0JNO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBRUEsY0FBQTtFQUNBLHVCQUFBO0FDZlI7QURtQkk7RUFFQSxjQUFBO0FDbEJKIiwiZmlsZSI6InNyYy9hcHAvYWdlbmRhL3BhZ2UvYWdlbmRhLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIua2l0cy1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgbWlubWF4KDI1MHB4LCAxNSUpKTtcclxuICBncmlkLWdhcDogMWVtO1xyXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAzZW07XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTYwMHB4KSB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCBtaW5tYXgoMjUwcHgsIDIxJSkpO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgOTAlKTtcclxuICB9XHJcblxyXG4gIC5raXQtY2FyZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDFlbTtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDkwcHggNDBweCBhdXRvIDQ1cHg7XHJcblxyXG4gICAgLmtpdC1pY29uIHtcclxuICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgIGhlaWdodDogNzVweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XHJcbiAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5raXQtaGVhZGluZyB7XHJcbiAgICAgIC8vIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgICAgY29sb3I6ICMwODI1NTE7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnYXJiZWwnO1xyXG4gICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5raXQtZGVzY3JpcHRpb24ge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5kb3dubG9hZC1idXR0b24ge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogYXV0bztcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzA4MjU1MTtcclxuXHJcbiAgICAgIC5mYS1hbmdsZS1kb3VibGUtbGVmdCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4udmlkZW9zLWNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMCA0MHB4IDYwcHggNDBweDtcclxuXHJcbiAgLmRpdmlkZXI6OmFmdGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuXHJcbiAgLnZpZGVvcy1oZWFkZXIge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMmVtO1xyXG4gIH1cclxuXHJcbiAgLnNtYWxsLWhlYWRpbmcge1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDhweDtcclxuICB9XHJcblxyXG4gIC52aWRlb3MtYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgbWFyZ2luOiAwIDEwcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcblxyXG4gICAgLmljb24ge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcblxyXG4gICAgICBtYXJnaW46IDAgMTJweDtcclxuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5wYWdlcy1udW1iZXJzLXRleHQge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuXHJcbiAgLnZpZGVvcyB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBhdXRvKTtcclxuICAgIGdyaWQtZ2FwOiA0ZW07XHJcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcblxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCBhdXRvKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5xdW90ZXMtY29udGFpbmVyIHtcclxuICAucXVvdGVzIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XHJcbiAgICBncmlkLWdhcDogMWVtO1xyXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAwIDEwMHB4O1xyXG4gICAgbWF4LXdpZHRoOiAxMDAwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG5cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgYXV0byk7XHJcbiAgICAgIHBhZGRpbmc6IDAgNjVweDtcclxuICAgIH1cclxuICAgIC5xdW90ZSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBwYWRkaW5nOiAxZW07XHJcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciBhdXRvIDI1cHggNTBweDtcclxuICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG5cclxuICAgICAgLmFwb3N0cm9waHkge1xyXG4gICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAucXVvdGUtdGV4dCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBmb250LWZhbWlseTogJ2FyYmVsJztcclxuICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5xdW90ZS1kaXZpZGVyIHtcclxuICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcclxuICAgICAgICBoZWlnaHQ6IDNweDtcclxuICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICAgICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAucGVyc29uLWxpbmsge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5wYWdlcy1udW1iZXItY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnF1b3Rlcy1idXR0b24ge1xyXG4gICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICBtYXJnaW46IDAgMjVweDtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG5cclxuICAgICAgLmljb24ge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB3aWR0aDogMjVweDtcclxuICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuXHJcbiAgICAgICAgbWFyZ2luOiAwIDEycHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAucGFnZXMtbnVtYmVycy10ZXh0LXF1b3RlIHtcclxuICAgICAvLyBjb2xvcjogcmVkO1xyXG4gICAgY29sb3I6ICMwODI1NTE7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi5raXRzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIG1pbm1heCgyNTBweCwgMTUlKSk7XG4gIGdyaWQtZ2FwOiAxZW07XG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogM2VtO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTYwMHB4KSB7XG4gIC5raXRzLWNvbnRhaW5lciB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgbWlubWF4KDI1MHB4LCAyMSUpKTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAua2l0cy1jb250YWluZXIge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIDkwJSk7XG4gIH1cbn1cbi5raXRzLWNvbnRhaW5lciAua2l0LWNhcmQge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxZW07XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA5MHB4IDQwcHggYXV0byA0NXB4O1xufVxuLmtpdHMtY29udGFpbmVyIC5raXQtY2FyZCAua2l0LWljb24ge1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA3NXB4O1xuICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG59XG4ua2l0cy1jb250YWluZXIgLmtpdC1jYXJkIC5raXQtaGVhZGluZyB7XG4gIGNvbG9yOiAjMDgyNTUxO1xuICBmb250LWZhbWlseTogXCJhcmJlbFwiO1xuICBmb250LXNpemU6IDI1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xufVxuLmtpdHMtY29udGFpbmVyIC5raXQtY2FyZCAua2l0LWRlc2NyaXB0aW9uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5raXRzLWNvbnRhaW5lciAua2l0LWNhcmQgLmRvd25sb2FkLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDgyNTUxO1xufVxuLmtpdHMtY29udGFpbmVyIC5raXQtY2FyZCAuZG93bmxvYWQtYnV0dG9uIC5mYS1hbmdsZS1kb3VibGUtbGVmdCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLnZpZGVvcy1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgNDBweCA2MHB4IDQwcHg7XG59XG4udmlkZW9zLWNvbnRhaW5lciAuZGl2aWRlcjo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi52aWRlb3MtY29udGFpbmVyIC52aWRlb3MtaGVhZGVyIHtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tYm90dG9tOiAyZW07XG59XG4udmlkZW9zLWNvbnRhaW5lciAuc21hbGwtaGVhZGluZyB7XG4gIGxldHRlci1zcGFjaW5nOiA4cHg7XG59XG4udmlkZW9zLWNvbnRhaW5lciAudmlkZW9zLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBtYXJnaW46IDAgMTBweDtcbiAgYm9yZGVyOiBub25lO1xufVxuLnZpZGVvcy1jb250YWluZXIgLnZpZGVvcy1idXR0b24gLmljb24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIG1hcmdpbjogMCAxMnB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbi52aWRlb3MtY29udGFpbmVyIC5wYWdlcy1udW1iZXJzLXRleHQge1xuICBjb2xvcjogd2hpdGU7XG59XG4udmlkZW9zLWNvbnRhaW5lciAudmlkZW9zIHtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgYXV0byk7XG4gIGdyaWQtZ2FwOiA0ZW07XG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC52aWRlb3MtY29udGFpbmVyIC52aWRlb3Mge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIGF1dG8pO1xuICB9XG59XG5cbi5xdW90ZXMtY29udGFpbmVyIC5xdW90ZXMge1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xuICBncmlkLWdhcDogMWVtO1xuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwIDEwMHB4O1xuICBtYXgtd2lkdGg6IDEwMDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBub25lO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAucXVvdGVzLWNvbnRhaW5lciAucXVvdGVzIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCBhdXRvKTtcbiAgICBwYWRkaW5nOiAwIDY1cHg7XG4gIH1cbn1cbi5xdW90ZXMtY29udGFpbmVyIC5xdW90ZXMgLnF1b3RlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDFlbTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIGF1dG8gMjVweCA1MHB4O1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4ucXVvdGVzLWNvbnRhaW5lciAucXVvdGVzIC5xdW90ZSAuYXBvc3Ryb3BoeSB7XG4gIGhlaWdodDogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbi5xdW90ZXMtY29udGFpbmVyIC5xdW90ZXMgLnF1b3RlIC5xdW90ZS10ZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LWZhbWlseTogXCJhcmJlbFwiO1xuICBsaW5lLWhlaWdodDogMjVweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuLnF1b3Rlcy1jb250YWluZXIgLnF1b3RlcyAucXVvdGUgLnF1b3RlLWRpdmlkZXIge1xuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgaGVpZ2h0OiAzcHg7XG4gIHdpZHRoOiA4MCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICBtYXJnaW46IDEwcHggMDtcbn1cbi5xdW90ZXMtY29udGFpbmVyIC5xdW90ZXMgLnF1b3RlIC5wZXJzb24tbGluayB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBsaW5lLWhlaWdodDogMjVweDtcbiAgbWFyZ2luLXRvcDogMDtcbn1cbi5xdW90ZXMtY29udGFpbmVyIC5wYWdlcy1udW1iZXItY29udGFpbmVyIHtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAucXVvdGVzLWNvbnRhaW5lciAucGFnZXMtbnVtYmVyLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgfVxufVxuLnF1b3Rlcy1jb250YWluZXIgLnBhZ2VzLW51bWJlci1jb250YWluZXIgLnF1b3Rlcy1idXR0b24ge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBtYXJnaW46IDAgMjVweDtcbiAgYm9yZGVyOiBub25lO1xufVxuLnF1b3Rlcy1jb250YWluZXIgLnBhZ2VzLW51bWJlci1jb250YWluZXIgLnF1b3Rlcy1idXR0b24gLmljb24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIG1hcmdpbjogMCAxMnB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbi5xdW90ZXMtY29udGFpbmVyIC5wYWdlcy1udW1iZXItY29udGFpbmVyIC5wYWdlcy1udW1iZXJzLXRleHQtcXVvdGUge1xuICBjb2xvcjogIzA4MjU1MTtcbn0iXX0= */'
          ],
          changeDetection: 0
        });
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            AgendaPageComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                args: [
                  {
                    selector: 'app-agenda-page',
                    templateUrl: './agenda-page.component.html',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__['ChangeDetectionStrategy'].OnPush,
                    styleUrls: ['./agenda-page.component.scss']
                  }
                ]
              }
            ],
            function() {
              return [
                {
                  type: _quotes_service__WEBPACK_IMPORTED_MODULE_2__['QuotesService']
                },
                {
                  type: _videos_service__WEBPACK_IMPORTED_MODULE_3__['VideosService']
                }
              ];
            },
            null
          );
        })();
        /***/
      },

    /***/
    './src/app/agenda/page/agenda-page.module.ts':
      /*!***************************************************!*\
    !*** ./src/app/agenda/page/agenda-page.module.ts ***!
    \***************************************************/

      /*! exports provided: AgendaPageModule */

      /***/
      function srcAppAgendaPageAgendaPageModuleTs(module, __webpack_exports__, __webpack_require__) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'AgendaPageModule', function() {
          return AgendaPageModule;
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

        var _quotes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./quotes.service */
          './src/app/agenda/page/quotes.service.ts'
        );
        /* harmony import */

        var _agenda_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./agenda-page.component */
          './src/app/agenda/page/agenda-page.component.ts'
        );
        /* harmony import */

        var _shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../shared/pipes/pipes.module */
          './src/app/shared/pipes/pipes.module.ts'
        );

        var routes = [
          {
            path: '',
            component: _agenda_page_component__WEBPACK_IMPORTED_MODULE_4__['AgendaPageComponent']
          }
        ];

        var AgendaPageModule = function AgendaPageModule() {
          _classCallCheck(this, AgendaPageModule);
        };

        AgendaPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineNgModule']({
          type: AgendaPageModule
        });
        AgendaPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineInjector']({
          factory: function AgendaPageModule_Factory(t) {
            return new (t || AgendaPageModule)();
          },
          providers: [_quotes_service__WEBPACK_IMPORTED_MODULE_3__['QuotesService']],
          imports: [
            [
              _angular_common__WEBPACK_IMPORTED_MODULE_1__['CommonModule'],
              _angular_router__WEBPACK_IMPORTED_MODULE_2__['RouterModule'].forChild(routes),
              _shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__['PipesModule']
            ]
          ]
        });

        (function() {
          (typeof ngJitMode === 'undefined' || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵsetNgModuleScope'](AgendaPageModule, {
              declarations: [_agenda_page_component__WEBPACK_IMPORTED_MODULE_4__['AgendaPageComponent']],
              imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__['CommonModule'],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__['RouterModule'],
                _shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__['PipesModule']
              ]
            });
        })();
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            AgendaPageModule,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'],
                args: [
                  {
                    imports: [
                      _angular_common__WEBPACK_IMPORTED_MODULE_1__['CommonModule'],
                      _angular_router__WEBPACK_IMPORTED_MODULE_2__['RouterModule'].forChild(routes),
                      _shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__['PipesModule']
                    ],
                    providers: [_quotes_service__WEBPACK_IMPORTED_MODULE_3__['QuotesService']],
                    declarations: [_agenda_page_component__WEBPACK_IMPORTED_MODULE_4__['AgendaPageComponent']]
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
    './src/app/agenda/page/quotes-data.ts':
      /*!********************************************!*\
    !*** ./src/app/agenda/page/quotes-data.ts ***!
    \********************************************/

      /*! exports provided: quotes */

      /***/
      function srcAppAgendaPageQuotesDataTs(module, __webpack_exports__, __webpack_require__) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'quotes', function() {
          return quotes;
        });

        var quotes = [
          {
            excerpt: 'תעצמו לרגע את העיניים, ותנסו לדמיין- הוא עומד מולכם, גבוה, מסתיר את השמש…',
            writerName: '- אדוה קרא ואזאנא -',
            recipientName: 'כותבת על אחיה סמ"ר אמיר קרא ז"ל',
            writerId: '1',
            recipientId:
              'https://www.izkor.gov.il/%D7%90%D7%9E%D7%99%D7%A8%20%D7%A7%D7%A8%D7%90/en_cc8ee9856efd39b78e87220ff64acff0'
          },
          {
            excerpt: 'זה לא סיוט ולא חלום בלהות, זאת המציאות והיא מתנפצת לה ביום אחד..',
            writerName: '- איילה פיקהולץ ברוך -',
            recipientName: 'כותבת על אחיה סמ"ר ירון פיקהולץ ז"ל',
            writerId: '2',
            recipientId:
              'https://www.izkor.gov.il/%D7%A4%D7%99%D7%A7%D7%94%D7%95%D7%9C%D7%A5%20%D7%99%D7%A8%D7%95%D7%9F/en_e6ae54ecc643cb8398c6b2455a5c984a'
          },
          {
            excerpt: 'חולמת עלייך בלילות, נזכרת בקול ובריח שלך, מנסה לשמר אותם…',
            writerName: '- איילת אוסטרמן -',
            recipientName: 'כותבת על אחיה סמל אביעד דותן ז"ל',
            writerId: '3',
            recipientId:
              'https://www.izkor.gov.il/%D7%90%D7%91%D7%99%D7%A2%D7%93%20%D7%93%D7%95%D7%AA%D7%9F/en_ca97f8ded1aad556d8b17b09ad084c86'
          },
          {
            excerpt: 'אח של חלל נזכר בחיוך, בחיבוק, בכל מה שהיה',
            writerName: '- איל שלו ודגנית לוין -',
            recipientName: 'כותבים על אחיהם סמ"ר שחר שלו ז"ל',
            writerId: '4',
            recipientId:
              'https://www.izkor.gov.il/%D7%A9%D7%97%D7%A8%20%D7%A9%D7%9C%D7%95/en_869531140d93b66a56b89f6c15b748f6'
          },
          {
            excerpt: 'הזמן לא עוזר. כשהכאב מכה הוא מגיע בלי רחמים ועם עוצמות שאני לא מכיר..',
            writerName: '- איתי שפרן -',
            recipientName: 'כותב על אחיו רב"ט אלעד שפרן ז"ל',
            writerId: '5',
            recipientId:
              'https://www.izkor.gov.il/%D7%90%D7%9C%D7%A2%D7%93%20%D7%A9%D7%A4%D7%A8%D7%9F/en_9a955e4b22ab5ea87eecfc972041216c'
          },
          {
            excerpt: 'מעגל עצב עצום נפתח, ובו בזמן מעגל אושר נסגר.',
            writerName: '- אמיר קלנגל -',
            recipientName: 'כותב על אחיו רס"ן יוחאי (ג\'וחא) קלנגל ז"ל',
            writerId: '6',
            recipientId:
              'https://www.izkor.gov.il/%D7%99%D7%95%D7%97%D7%90%D7%99%20%D7%A7%D7%9C%D7%A0%D7%92%D7%9C/en_021e3002a0c61e9e30ddd68d00b41992'
          },
          {
            excerpt: 'אפילו מים רבים לא יוכלו לכבות געגוע צף ועולה ככתם שמן',
            writerName: '- געגוע/ מאיה ויינברג -',
            recipientName: '',
            writerId: '7',
            recipientId: ''
          },
          {
            excerpt: 'והחלל, כמו געגוע מתרחב ומתרחב ומתרוקן',
            writerName: '- געגוע/ טובה נאוס -',
            recipientName: '',
            writerId: '8',
            recipientId: ''
          },
          {
            excerpt: 'דברים שאני לא יכול לשכוח- "ממשלת ישראל מודיעה בתדהמה" ',
            writerName: '- דברים שאני לא יכול לשכוח/ נעם חורב -',
            recipientName: '',
            writerId: '9',
            recipientId: ''
          },
          {
            excerpt: 'אני לא אשכח את הדרך שלך, את אהבת הארץ, את שמחת החיים ואת החיוך הכובש…',
            writerName: '- דניאל סלים -',
            recipientName: 'כותבת על אחיה רס"ב עדי סלים ז"ל',
            writerId: '10',
            recipientId:
              'https://www.izkor.gov.il/%D7%A2%D7%93%D7%99%20%D7%A1%D7%9C%D7%99%D7%9D/en_fa9d9b6bf5a7a25bc5d49efd2e0eb4fd'
          },
          {
            excerpt: 'הנה מרפא עומד ליד כותלי, חודר לבוא לחדרי נשמתי שבו ונרפאו כוחותי השבורים.',
            writerName: '- המרפא/ הרב קוק -',
            recipientName: '',
            writerId: '11',
            recipientId: ''
          },
          {
            excerpt: 'השקט הזה, העמוק, שאלוהים נותן לאחים השכולים, הכוחות ששם בהם..',
            writerName: '- ויש את האחים והאחיות/ חלי ראובן -',
            recipientName: '',
            writerId: '12',
            recipientId: ''
          },
          {
            excerpt: ' 1,567,800 דקות בלעדיו והוא, לא חזר שוב הביתה…',
            writerName: '- טל שרייבמן-פולק -',
            recipientName: 'כותבת על אחיה סגן ניר שרייבמן ז"ל ',
            writerId: '13',
            recipientId:
              'https://www.izkor.gov.il/%D7%A0%D7%99%D7%A8-%D7%9E%D7%A8%D7%93%D7%9B%D7%99%20%D7%A9%D7%A8%D7%99%D7%99%D7%91%D7%9E%D7%9F/en_ac806f2538c5ff4b7f8e084e1d4f7b6f'
          },
          {
            excerpt: 'בדרך כלל ביום הזיכרון שואלים אותי איך זה מרגיש להיות אח שכול? ואני, מה יש לי להגיד?.. ',
            writerName: '- יהודה ליבוביץ -',
            recipientName: 'כותב על אחיו סמ"ר אלעזר ליבוביץ ז"ל',
            writerId: '14',
            recipientId:
              'https://www.izkor.gov.il/%D7%A9%D7%9E%D7%90%D7%99-%D7%90%D7%9C%D7%A2%D7%96%D7%A8%20%D7%9C%D7%99%D7%91%D7%95%D7%91%D7%99%D7%A5/en_f3a8a45495401349bf554de09e65a690'
          },
          {
            excerpt: "אם הייתי יוצרת עולם הייתי משנה בו כמה מילים. המילה 'געגועים' הייתה נקשרת לעוגה טעימה.",
            writerName: '- מיכל שמואלי חזון -',
            recipientName: 'כותבת על אחיה רב"ט ניר חזון ז"ל',
            writerId: '15',
            recipientId:
              'https://www.izkor.gov.il/%D7%A0%D7%99%D7%91%20%D7%97%D7%96%D7%95%D7%9F/en_79ee0dff5770147407268f19e01ace54'
          },
          {
            excerpt: 'מנגנת שיר געגועים והמיתר נקרע, קורע את לבי',
            writerName: '- מעצבן אותי הגעגוע/ לי יה. סין -',
            recipientName: '',
            writerId: '16',
            recipientId: ''
          },
          {
            excerpt: 'הדמעות חונקות, הכאב עצום מדי בכדי להכיל אותו…',
            writerName: '- נוי פרי -',
            recipientName: 'כותבת על אחיה סמ"ר טל יפרח ז"ל',
            writerId: '17',
            recipientId:
              'https://www.izkor.gov.il/%D7%98%D7%9C-%D7%A0%D7%99%D7%A1%D7%99%D7%9D%20%D7%99%D7%A4%D7%A8%D7%97/en_47f74060b0ef5c817bfa358c6e8bbdea'
          },
          {
            excerpt: 'חלמתי בשבילך על עולם נפלא, ברכבת מהירה אל ארץ של קסמים בניתי לך חיים',
            writerName: '- ניר סגל -',
            recipientName: 'כותב על אחיו טוראי אמיר סגל ז"ל',
            writerId: '18',
            recipientId:
              'https://www.izkor.gov.il/%D7%90%D7%9E%D7%99%D7%A8%20%D7%A1%D7%92%D7%9C/en_5e87dd9ae7fedc7b37a99732c8c11097'
          },
          {
            excerpt: 'יש רגעים שאתה פשוט רוצה להחזיר את הגלגל לאותו הלילה..',
            writerName: '- סהר דגורקר -',
            recipientName: 'כותב על אחיו סמ"ר ברק רפאל דגורקר ז"ל',
            writerId: '19',
            recipientId:
              'https://www.izkor.gov.il/%D7%91%D7%A8%D7%A7-%D7%A8%D7%A4%D7%90%D7%9C%20%D7%93%D7%92%D7%95%D7%A8%D7%A7%D7%A8/en_93fcc5a075e8f3885dc6f0d8a1c31ebf'
          },
          {
            excerpt: 'הייתי מסתכלת עליו ומבינה שככה בדיוק אני ארצה להיות שאהיה גדולה',
            writerName: '- ספיר כהן -',
            recipientName: 'כותבת על אחיה סמ"ר עידן כהן ז"ל',
            writerId: '20',
            recipientId:
              'https://www.izkor.gov.il/%D7%A2%D7%99%D7%93%D7%9F%20%D7%9B%D7%94%D7%9F/en_cf95a71e55b7764ba9b5fd1c71361fd3'
          },
          {
            excerpt: 'ואני, הפחד מהשכחה מלווה אותי. לא שלי, לא שלנו- של הסביבה.',
            writerName: '- עינת חסון -',
            recipientName: 'כותבת על אחיה סגן גונדר רפי אלקלעי ז"ל',
            writerId: '21',
            recipientId:
              'https://www.izkor.gov.il/%D7%A8%D7%A4%D7%90%D7%9C%20%D7%90%D7%9C%D7%A7%D7%9C%D7%A2%D7%99/en_71ce1e3042c5339a412df4cdf646bd5b'
          },
          {
            excerpt: 'בעוד דקות בודדות ייחרב עליי עולמי וכל חיי יקבלו תפנית חדה..',
            writerName: "- פנינה צ'צ'יק - מנקר -",
            recipientName: 'כותבת על אחיה רב"ט שמחה מנקר ז"ל',
            writerId: '22',
            recipientId:
              'https://www.izkor.gov.il/%D7%A9%D7%9E%D7%97%D7%94%20%D7%9E%D7%A0%D7%A7%D7%A8/en_ac8696871ce1eb7f4b911a9a798cceab'
          },
          {
            excerpt: 'לקח לי הרבה שנים לעבד את החסר, את האובדן והיום… אתה חלק מסיפור חיי..',
            writerName: '- ציפי וייל -',
            recipientName: 'כותבת על אחיה רב"ט אברהם שטיין ז"ל',
            writerId: '23',
            recipientId:
              'https://www.izkor.gov.il/%D7%90%D7%91%D7%A8%D7%94%D7%9D%20%D7%A9%D7%98%D7%99%D7%99%D7%9F/en_6c2bbc24704d47a4f5cc5d999e0165ef'
          },
          {
            excerpt: 'אם יקרה לך משהו, אין לי טעם לחיים, אין לי טעם למחר..',
            writerName: '- שום דבר לא יפגע בי/ ארז שטרק -',
            recipientName: '',
            writerId: '24',
            recipientId: ''
          },
          {
            excerpt: '... נטע בהם תקווה, רסיסים של שמחה, יהיה רצון שידעו לאזן בין זיכרון לאבל..',
            writerName: '- תפילה לשלום המשפחות השכולות/ הרב שי פירון -',
            recipientName: '',
            writerId: '25',
            recipientId: ''
          },
          {
            excerpt: 'הוא מוביל אותך לכל אורך דרכך, מלחש ברוך ומלטף. הוא חש אותך כאחד מאבריך...',
            writerName: '-ריקי מרשה-',
            recipientName: 'כותבת על אחיה רס"ן גדי מרשה ז"ל',
            writerId: '26',
            recipientId:
              'https://www.izkor.gov.il/%D7%9E%D7%A8%D7%A9%D7%94%20%D7%92%D7%93/en_b4de16949869ea12307a532d4c0ccf2a'
          }
        ];
        /***/
      },

    /***/
    './src/app/agenda/page/quotes.service.ts':
      /*!***********************************************!*\
    !*** ./src/app/agenda/page/quotes.service.ts ***!
    \***********************************************/

      /*! exports provided: QuotesService, Quote */

      /***/
      function srcAppAgendaPageQuotesServiceTs(module, __webpack_exports__, __webpack_require__) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'QuotesService', function() {
          return QuotesService;
        });
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'Quote', function() {
          return Quote;
        });
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */

        var _quotes_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./quotes-data */
          './src/app/agenda/page/quotes-data.ts'
        );

        var QuotesService = /*#__PURE__*/ (function() {
          function QuotesService() {
            _classCallCheck(this, QuotesService);

            this.pagedQuotes = [];
            this.smallPagePagedQuotes = [];
            this.quotes = _quotes_data__WEBPACK_IMPORTED_MODULE_1__['quotes'];

            for (var i = 0; i < this.quotes.length - 6; i += 6) {
              this.pagedQuotes.push({
                page: this.quotes.slice(i, i + 6)
              });
            }

            for (var _i = 0; _i < this.quotes.length - 3; _i += 3) {
              this.smallPagePagedQuotes.push({
                page: this.quotes.slice(_i, _i + 3)
              });
            }
          }

          _createClass(QuotesService, [
            {
              key: 'getTextFromSiblingURIbyId',
              value: function getTextFromSiblingURIbyId(id) {
                return '/assets/texts/'.concat(id, '.pdf');
              }
            }
          ]);

          return QuotesService;
        })();

        QuotesService.ɵfac = function QuotesService_Factory(t) {
          return new (t || QuotesService)();
        };

        QuotesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineInjectable']({
          token: QuotesService,
          factory: QuotesService.ɵfac,
          providedIn: 'root'
        });
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            QuotesService,
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
              return [];
            },
            null
          );
        })();

        var Quote = function Quote() {
          _classCallCheck(this, Quote);
        };
        /***/
      },

    /***/
    './src/app/agenda/page/videos-data.ts':
      /*!********************************************!*\
    !*** ./src/app/agenda/page/videos-data.ts ***!
    \********************************************/

      /*! exports provided: videos */

      /***/
      function srcAppAgendaPageVideosDataTs(module, __webpack_exports__, __webpack_require__) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'videos', function() {
          return videos;
        });

        var videos = [
          {
            src: 'https://www.youtube.com/embed/eWZ1xA8cWKY'
          },
          {
            src: 'https://www.youtube.com/embed/JNpnqiGBrZk'
          },
          {
            src: 'https://www.youtube.com/embed/wJ-8oqZWUMw'
          },
          {
            src: 'https://www.youtube.com/embed/l788HDtDVEI'
          },
          {
            src: 'https://www.youtube.com/embed/Xz74XHVN0hw'
          },
          {
            src: 'https://www.youtube.com/embed/NFCfgt0BmFs'
          },
          {
            src: 'https://www.youtube.com/embed/YF8C3M7gCDU'
          },
          {
            src: 'https://www.youtube.com/embed/Acym42GzeOI'
          },
          {
            src: 'https://www.youtube.com/embed/3JYH4MnDzHo '
          },
          {
            src: 'https://www.youtube.com/embed/kIx_3V_xaSQ'
          },
          {
            src: 'https://www.youtube.com/embed/zTj8aZESzIg'
          },
          {
            src: 'https://www.youtube.com/embed/LHv_pxWs9Ts'
          },
          {
            src: 'https://www.youtube.com/embed/-EMmxu6NzxM'
          },
          {
            src: 'https://www.youtube.com/embed/S0iVGHQ9zJU'
          },
          {
            src: 'https://www.youtube.com/embed/p9Tit-VNv9o'
          },
          {
            src: 'https://www.youtube.com/embed/9u87FmwHgzo'
          },
          {
            src: 'https://www.youtube.com/embed/XVH-QgHDG4c'
          },
          {
            src: 'https://www.youtube.com/embed/8dzNM4KMTrU'
          },
          {
            src: 'https://www.youtube.com/embed/dp1XbwYQsps'
          },
          {
            src: 'https://www.youtube.com/embed/7SfQqVxud4I'
          },
          {
            src: 'https://www.youtube.com/embed/Rzwb2BmLNb4'
          },
          {
            src: 'https://www.youtube.com/embed/e_F5ItijXNI'
          },
          {
            src: 'https://www.youtube.com/embed/fBFY5zYnBMU'
          },
          {
            src: 'https://www.youtube.com/embed/UbEvFHe8UFo'
          },
          {
            src: 'https://www.youtube.com/embed/3ubiorokgTs'
          },
          {
            src: 'https://www.youtube.com/embed/smnA24xAPKY'
          },
          {
            src: 'https://www.youtube.com/watch?v=a6YqpDrbqV8&list=UUgKTy9WBTcb2Udm0tqwIzAg'
          },
          {
            src: 'https://www.youtube.com/watch?v=1a4uza1tSzM&list=UUgKTy9WBTcb2Udm0tqwIzAg'
          },
          {
            src: 'https://www.youtube.com/watch?v=WkGy1AD8c9M&list=UUgKTy9WBTcb2Udm0tqwIzAg'
          },
          {
            src: 'https://www.youtube.com/watch?v=J3-cyjiZo8g&list=UUgKTy9WBTcb2Udm0tqwIzAg'
          },
          {
            src: 'https://www.youtube.com/watch?v=YhagkDf7IWg&list=UUgKTy9WBTcb2Udm0tqwIzAg'
          },
          {
            src: 'https://www.youtube.com/watch?v=N8wiO1fDlzg&list=UUgKTy9WBTcb2Udm0tqwIzAg&index=22'
          },
          {
            src: 'https://www.youtube.com/watch?v=3VDvVLS4DPE&list=UUgKTy9WBTcb2Udm0tqwIzAg&index=23'
          },
          {
            src: 'https://www.youtube.com/watch?v=zcH62F_lpsU&list=UUgKTy9WBTcb2Udm0tqwIzAg&index=24'
          },
          {
            src: 'https://www.youtube.com/watch?v=2YRrjkU12aM&list=UUgKTy9WBTcb2Udm0tqwIzAg&index=25'
          },
          {
            src: 'https://www.youtube.com/watch?v=nvT649ziaTs&list=UUgKTy9WBTcb2Udm0tqwIzAg&index=26'
          },
          {
            src: 'https://www.youtube.com/watch?v=B0VyopUroCc&list=UUgKTy9WBTcb2Udm0tqwIzAg&index=27'
          },
          {
            src: 'https://www.youtube.com/watch?v=zTj8aZESzIg&list=UUgKTy9WBTcb2Udm0tqwIzAg&index=28'
          },
          {
            src: 'https://www.youtube.com/watch?v=e_F5ItijXNI&list=UUgKTy9WBTcb2Udm0tqwIzAg&index=29'
          },
          {
            src: 'https://www.youtube.com/watch?v=LHv_pxWs9Ts&list=UUgKTy9WBTcb2Udm0tqwIzAg&index=30'
          },
          {
            src: 'https://www.youtube.com/watch?v=-EMmxu6NzxM&list=UUgKTy9WBTcb2Udm0tqwIzAg&index=31'
          },
          {
            src: 'https://www.youtube.com/watch?v=kIx_3V_xaSQ&list=UUgKTy9WBTcb2Udm0tqwIzAg&index=32'
          },
          {
            src: 'https://www.youtube.com/watch?v=3JYH4MnDzHo&list=UUgKTy9WBTcb2Udm0tqwIzAg&index=33'
          },
          {
            src: 'https://www.youtube.com/watch?v=p9Tit-VNv9o&list=UUgKTy9WBTcb2Udm0tqwIzAg&index=34'
          },
          {
            src: 'https://www.youtube.com/watch?v=RXTe5sMC8-M&list=UUgKTy9WBTcb2Udm0tqwIzAg&index=35'
          },
          {
            src: 'https://www.youtube.com/watch?v=9u87FmwHgzo&list=UUgKTy9WBTcb2Udm0tqwIzAg&index=36'
          },
          {
            src: 'https://www.youtube.com/watch?v=XVH-QgHDG4c&list=UUgKTy9WBTcb2Udm0tqwIzAg&index=37'
          },
          {
            src: 'https://www.youtube.com/watch?v=8dzNM4KMTrU&list=UUgKTy9WBTcb2Udm0tqwIzAg&index=38'
          },
          {
            src: 'https://www.youtube.com/watch?v=dp1XbwYQsps&list=UUgKTy9WBTcb2Udm0tqwIzAg&index=39'
          },
          {
            src: 'https://www.youtube.com/watch?v=Rzwb2BmLNb4&list=UUgKTy9WBTcb2Udm0tqwIzAg&index=40'
          },
          {
            src: 'https://www.youtube.com/watch?v=l788HDtDVEI&list=UUgKTy9WBTcb2Udm0tqwIzAg&index=41'
          },
          {
            src: 'https://www.youtube.com/watch?v=7SfQqVxud4I&list=UUgKTy9WBTcb2Udm0tqwIzAg&index=42'
          },
          {
            src: 'https://www.youtube.com/watch?v=fBFY5zYnBMU&list=UUgKTy9WBTcb2Udm0tqwIzAg&index=43'
          },
          {
            src: 'https://www.youtube.com/watch?v=RK5a9skfBnY&list=UUgKTy9WBTcb2Udm0tqwIzAg&index=44'
          },
          {
            src: 'https://www.youtube.com/watch?v=Xz74XHVN0hw&list=UUgKTy9WBTcb2Udm0tqwIzAg&index=45'
          },
          {
            src: 'https://www.youtube.com/watch?v=ieuGa3lNn6c&list=UUgKTy9WBTcb2Udm0tqwIzAg&index=46'
          },
          {
            src: 'https://www.youtube.com/watch?v=S0iVGHQ9zJU&list=UUgKTy9WBTcb2Udm0tqwIzAg&index=47'
          },
          {
            src: 'https://www.youtube.com/watch?v=smnA24xAPKY&list=UUgKTy9WBTcb2Udm0tqwIzAg&index=48'
          }, ///////////////
          {
            src: ' https://www.youtube.com/watch?v=Jyu55oeO-uM&list=UUgKTy9WBTcb2Udm0tqwIzAg&index=49'
          },
          {
            src: 'https://www.youtube.com/watch?v=IFVlP5rpkXs&list=UUgKTy9WBTcb2Udm0tqwIzAg&index=50'
          },
          {
            src: 'https://www.youtube.com/watch?v=cc5K7lay4ME&list=UUgKTy9WBTcb2Udm0tqwIzAg&index=51'
          },
          {
            src: 'https://www.youtube.com/watch?v=MZ0Nw6ItOaw&list=UUgKTy9WBTcb2Udm0tqwIzAg&index=52'
          },
          {
            src: 'https://www.youtube.com/watch?v=2OFtpErTfuY&list=UUgKTy9WBTcb2Udm0tqwIzAg&index=53'
          },
          {
            src: 'https://www.youtube.com/watch?v=a0qedhGcvZ0&list=UUgKTy9WBTcb2Udm0tqwIzAg&index=54'
          },
          {
            src: 'https://www.youtube.com/watch?v=dXaq55K4oqc&list=UUgKTy9WBTcb2Udm0tqwIzAg&index=55'
          },
          {
            src: 'https://www.youtube.com/watch?v=0dhxIVWs_NU&list=UUgKTy9WBTcb2Udm0tqwIzAg&index=56'
          },
          {
            src: 'https://www.youtube.com/watch?v=oBHocz92CLs&list=UUgKTy9WBTcb2Udm0tqwIzAg&index=57'
          },
          {
            src: 'https://www.youtube.com/watch?v=EfvWzt6v-iw&list=UUgKTy9WBTcb2Udm0tqwIzAg&index=58'
          },
          {
            src: 'https://www.youtube.com/watch?v=_FIuAEDakPM&list=UUgKTy9WBTcb2Udm0tqwIzAg&index=59'
          },
          {
            src: 'https://www.youtube.com/watch?v=z3yuuBt-jbk&list=UUgKTy9WBTcb2Udm0tqwIzAg&index=60'
          },
          {
            src: 'https://www.youtube.com/watch?v=9jPstlNleGo&list=UUgKTy9WBTcb2Udm0tqwIzAg&index=61'
          },
          {
            src: 'https://www.youtube.com/watch?v=3ubiorokgTs&list=UUgKTy9WBTcb2Udm0tqwIzAg&index=62'
          },
          {
            src: 'https://www.youtube.com/watch?v=eWZ1xA8cWKY&list=UUgKTy9WBTcb2Udm0tqwIzAg&index=63'
          },
          {
            src: 'https://www.youtube.com/watch?v=7f8Glqy8bKA&list=UUgKTy9WBTcb2Udm0tqwIzAg&index=64'
          },
          {
            src: 'https://www.youtube.com/watch?v=3JYH4MnDzHo&list=UUgKTy9WBTcb2Udm0tqwIzAg&index=33'
          },
          {
            src: 'https://www.youtube.com/watch?v=p9Tit-VNv9o&list=UUgKTy9WBTcb2Udm0tqwIzAg&index=34'
          },
          {
            src: 'https://www.youtube.com/watch?v=RXTe5sMC8-M&list=UUgKTy9WBTcb2Udm0tqwIzAg&index=35'
          },
          {
            src: 'https://www.youtube.com/watch?v=9u87FmwHgzo&list=UUgKTy9WBTcb2Udm0tqwIzAg&index=36'
          },
          {
            src: 'https://www.youtube.com/watch?v=XVH-QgHDG4c&list=UUgKTy9WBTcb2Udm0tqwIzAg&index=37'
          },
          {
            src: 'https://www.youtube.com/watch?v=8dzNM4KMTrU&list=UUgKTy9WBTcb2Udm0tqwIzAg&index=38'
          },
          {
            src: 'https://www.youtube.com/watch?v=dp1XbwYQsps&list=UUgKTy9WBTcb2Udm0tqwIzAg&index=39'
          },
          {
            src: 'https://www.youtube.com/watch?v=Rzwb2BmLNb4&list=UUgKTy9WBTcb2Udm0tqwIzAg&index=40'
          },
          {
            src: 'https://www.youtube.com/watch?v=l788HDtDVEI&list=UUgKTy9WBTcb2Udm0tqwIzAg&index=41'
          },
          {
            src: 'https://www.youtube.com/watch?v=7SfQqVxud4I&list=UUgKTy9WBTcb2Udm0tqwIzAg&index=42'
          },
          {
            src: 'https://www.youtube.com/watch?v=fBFY5zYnBMU&list=UUgKTy9WBTcb2Udm0tqwIzAg&index=43'
          },
          {
            src: 'https://www.youtube.com/watch?v=RK5a9skfBnY&list=UUgKTy9WBTcb2Udm0tqwIzAg&index=44'
          },
          {
            src: 'https://www.youtube.com/watch?v=Xz74XHVN0hw&list=UUgKTy9WBTcb2Udm0tqwIzAg&index=45'
          } // https://www.youtube.com/watch?v=rn8vVLTE384&list=UUgKTy9WBTcb2Udm0tqwIzAg&index=65
          // https://www.youtube.com/watch?v=1RfvSEf3FSY&list=UUgKTy9WBTcb2Udm0tqwIzAg&index=66
          // https://www.youtube.com/watch?v=XEhJLuqhBz0&list=UUgKTy9WBTcb2Udm0tqwIzAg&index=67
          // https://www.youtube.com/watch?v=Acym42GzeOI&list=UUgKTy9WBTcb2Udm0tqwIzAg&index=68
          // https://www.youtube.com/watch?v=NFCfgt0BmFs&list=UUgKTy9WBTcb2Udm0tqwIzAg&index=69
          // https://www.youtube.com/watch?v=YF8C3M7gCDU&list=UUgKTy9WBTcb2Udm0tqwIzAg&index=70
          // https://www.youtube.com/watch?v=wJ-8oqZWUMw&list=UUgKTy9WBTcb2Udm0tqwIzAg&index=71
          // https://www.youtube.com/watch?v=BlMJDjbhjk0&list=UUgKTy9WBTcb2Udm0tqwIzAg&index=72
          // https://www.youtube.com/watch?v=JNpnqiGBrZk&list=UUgKTy9WBTcb2Udm0tqwIzAg&index=73
          // https://www.youtube.com/watch?v=78w4nU84n44&list=UUgKTy9WBTcb2Udm0tqwIzAg&index=74
          // https://www.youtube.com/watch?v=MXs8wMmLj28&list=UUgKTy9WBTcb2Udm0tqwIzAg&index=75
        ];
        /***/
      },

    /***/
    './src/app/agenda/page/videos.service.ts':
      /*!***********************************************!*\
    !*** ./src/app/agenda/page/videos.service.ts ***!
    \***********************************************/

      /*! exports provided: VideosService, Video */

      /***/
      function srcAppAgendaPageVideosServiceTs(module, __webpack_exports__, __webpack_require__) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'VideosService', function() {
          return VideosService;
        });
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'Video', function() {
          return Video;
        });
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */

        var _videos_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./videos-data */
          './src/app/agenda/page/videos-data.ts'
        );

        var VideosService = function VideosService() {
          _classCallCheck(this, VideosService);

          this.pagedVideos = [];
          this.videos = _videos_data__WEBPACK_IMPORTED_MODULE_1__['videos'];

          for (var i = 0; i < this.videos.length - 3; i += 3) {
            this.pagedVideos.push({
              page: this.videos.slice(i, i + 3)
            });
          }
        };

        VideosService.ɵfac = function VideosService_Factory(t) {
          return new (t || VideosService)();
        };

        VideosService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineInjectable']({
          token: VideosService,
          factory: VideosService.ɵfac,
          providedIn: 'root'
        });
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            VideosService,
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
              return [];
            },
            null
          );
        })();

        var Video = function Video() {
          _classCallCheck(this, Video);
        };
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
//# sourceMappingURL=agenda-page-agenda-page-module-es5.js.map
