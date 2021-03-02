(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["agenda-page-agenda-page-module"],{

/***/ "./src/app/agenda/page/agenda-page.component.ts":
/*!******************************************************!*\
  !*** ./src/app/agenda/page/agenda-page.component.ts ***!
  \******************************************************/
/*! exports provided: AgendaPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgendaPageComponent", function() { return AgendaPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _quotes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quotes.service */ "./src/app/agenda/page/quotes.service.ts");
/* harmony import */ var _videos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./videos.service */ "./src/app/agenda/page/videos.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/pipes/safe.pipe */ "./src/app/shared/pipes/safe.pipe.ts");







function AgendaPageComponent_ng_container_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "iframe", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "safe");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "iframe", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "safe");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "iframe", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "safe");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const page_r250 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, page_r250.page[0].src), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 5, page_r250.page[1].src), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 7, page_r250.page[2].src), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
} }
function AgendaPageComponent_ng_container_61_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const quote_r255 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "../../../assets/texts/" + quote_r255.writerId + ".pdf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](quote_r255.excerpt);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](quote_r255.writerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", quote_r255.recipientId, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](quote_r255.recipientName);
} }
function AgendaPageComponent_ng_container_61_Template(rf, ctx) { if (rf & 1) {
    const _r257 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function AgendaPageComponent_ng_container_61_Template_div_mouseenter_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r257); const ctx_r256 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r256.pauseQuoteCarousel(); })("mouseleave", function AgendaPageComponent_ng_container_61_Template_div_mouseleave_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r257); const ctx_r258 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r258.resumeQuoteCarousel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AgendaPageComponent_ng_container_61_ng_container_2_Template, 10, 5, "ng-container", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const page_r252 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", page_r252.page);
} }
class AgendaPageComponent {
    constructor(quotesService, videosService) {
        this.quotesService = quotesService;
        this.videosService = videosService;
        this.quotesSlideIndex = 1;
        this.videosSlideIndex = 1;
    }
    ngOnInit() {
        if (window.innerWidth <= 768) {
            this.pagedExcerpts = this.quotesService.smallPagePagedQuotes;
        }
        else {
            this.pagedExcerpts = this.quotesService.pagedQuotes;
        }
        this.pagedVideos = this.videosService.pagedVideos;
    }
    ngAfterViewInit() {
        this.showSlides(this.quotesSlideIndex, '.quotes');
        this.showSlides(this.videosSlideIndex, '.videos');
        this.startQuotesCarousel();
    }
    pauseQuoteCarousel() {
        this.sub.unsubscribe();
    }
    resumeQuoteCarousel() {
        this.sub.unsubscribe();
        this.startQuotesCarousel();
    }
    startQuotesCarousel() {
        this.sub = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(10000).subscribe(() => {
            this.plusSlides(1, '.quotes');
        });
    }
    plusSlides(n, className) {
        switch (className) {
            case '.quotes':
                this.showSlides((this.quotesSlideIndex += n), className);
                break;
            case '.videos':
                this.showSlides((this.videosSlideIndex += n), className);
                break;
        }
    }
    showSlides(n, className) {
        const slides = document.querySelectorAll(className);
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
        slides.forEach(slide => {
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
AgendaPageComponent.ɵfac = function AgendaPageComponent_Factory(t) { return new (t || AgendaPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_quotes_service__WEBPACK_IMPORTED_MODULE_2__["QuotesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_videos_service__WEBPACK_IMPORTED_MODULE_3__["VideosService"])); };
AgendaPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AgendaPageComponent, selectors: [["app-agenda-page"]], decls: 70, vars: 6, consts: [["src", "../../../assets/img/agenda-header.jpg", 1, "image-header"], [1, "site-divider"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "small-heading"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "medium-heading"], [1, "kits-container"], [1, "kit-card"], ["src", "../../../assets/svg/Group 17.svg", 1, "kit-icon"], [1, "kit-heading"], [1, "site-text", "kit-description"], ["href", "/assets/docs/\u05EA\u05E2\u05D5\u05D3\u05EA%20\u05D4\u05D5\u05E7\u05E8\u05D4.pdf", "target", "_blank", 1, "site-button", "download-button"], [1, "fas", "fa-angle-double-left"], ["src", "../../../assets/svg/Group 19.svg", 1, "kit-icon"], ["href", "/assets/docs/\u05D4\u05D6\u05DE\u05E0\u05D4%20\u05D4\u05D0\u05D7\u05D9\u05DD%20\u05E9\u05DC\u05E0\u05D5.pdf", "target", "_blank", 1, "site-button", "download-button"], ["src", "../../../assets/svg/Group 20.svg", 1, "kit-icon"], ["href", "/assets/docs/\u05E2\u05E8\u05DB\u05EA%20\u05D0\u05D9\u05E8\u05D5\u05D7%20-%20\u05D4\u05D0\u05D7\u05D9\u05DD%20\u05E9\u05DC\u05E0\u05D5.pdf", "target", "_blank", 1, "site-button", "download-button"], ["src", "../../../assets/svg/Group 18.svg", 1, "kit-icon"], ["href", "/assets/docs/\u05E2\u05E8\u05DB\u05EA%20\u05D0\u05D7\u05D9\u05DD%20\u05D5\u05D0\u05D7\u05D9\u05D5\u05EA%20-%20\u05D4\u05D0\u05D7\u05D9\u05DD%20\u05E9\u05DC\u05E0\u05D5.pdf", "target", "_blank", 1, "site-button", "download-button"], [1, "videos-container"], ["data-aos", "fade-left", "data-aos-duration", "1000", 1, "site-divider", "divider"], ["data-aos", "fade-left", "data-aos-duration", "2000", 1, "small-heading", "videos-header"], [4, "ngFor", "ngForOf"], [1, "videos-button", 3, "click"], ["src", "../../../assets/img/left_arrow_white.svg", 1, "icon"], [1, "pages-numbers-text"], ["src", "../../../assets/img/right_arrow_white.svg", 1, "icon"], [1, "quotes-container"], [1, "quote-carousel"], [1, "pages-number-container"], [1, "quotes-button", 3, "click"], ["src", "../../../assets/img/left_arrow.svg", 1, "icon"], [1, "pages-numbers-text-quote"], ["src", "../../../assets/img/right_arrow.svg", 1, "icon"], [1, "videos"], ["width", "336", "height", "189", "frameborder", "0", "allow", "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture ", "allowfullscreen", "", "data-aos", "fade-right", "data-aos-duration", "3000", 3, "src"], ["width", "336", "height", "189", "frameborder", "0", "allow", "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", "", "data-aos", "fade-down", "data-aos-duration", "3000", 3, "src"], ["width", "336", "height", "189", "frameborder", "0", "allow", "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", "", "data-aos", "fade-left", "data-aos-duration", "3000", 3, "src"], [1, "quotes", 3, "mouseenter", "mouseleave"], ["data-aos", "fade-up", "data-aos-duration", "1000", 4, "ngFor", "ngForOf"], ["data-aos", "fade-up", "data-aos-duration", "1000"], [1, "quote"], ["src", "../../../assets/img/apostrophy.png", 1, "apostrophy"], ["target", "_blank", 1, "site-text", "quote-text", 3, "href"], [1, "quote-divider"], [1, "site-text", "person-link"], ["target", "_blank", 1, "site-text", "person-link", 3, "href"]], template: function AgendaPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u05DE\u05D1\u05E0\u05D4 \u05D4\u05E2\u05E8\u05D1\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " \u05D4\u05DB\u05DC\u05D9\u05DD \u05DC\u05E7\u05D9\u05D9\u05DD \u05E2\u05E8\u05D1 \u05D1\u05DC\u05EA\u05D9 \u05E0\u05E9\u05DB\u05D7\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u05EA\u05E2\u05D5\u05D3\u05EA \u05D4\u05D5\u05E7\u05E8\u05D4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " \u05D1\u05E1\u05D5\u05E3 \u05D4\u05E2\u05E8\u05D1, \u05D9\u05E9 \u05D4\u05E0\u05D5\u05D4\u05D2\u05D9\u05DD \u05DC\u05D4\u05E2\u05E0\u05D9\u05E7 \u05DC\u05D0\u05D7/\u05D5\u05EA \u05D4\u05DE\u05E1\u05E4\u05E8\u05D9\u05DD \u05EA\u05E2\u05D5\u05D3\u05EA \u05D4\u05D5\u05E7\u05E8\u05D4 \u05E2\u05DC \u05D4\u05E9\u05D9\u05EA\u05D5\u05E3 \u05D1\u05E1\u05D9\u05E4\u05D5\u05E8 \u05D5\u05E4\u05EA\u05D9\u05D7\u05EA \u05D4\u05DC\u05D1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u05DC\u05D4\u05D5\u05E8\u05D3\u05D4\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u05D4\u05D6\u05DE\u05E0\u05D4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " \u05E1\u05D5\u05D2\u05D9\u05DD \u05E9\u05D5\u05E0\u05D9\u05DD \u05E9\u05DC \u05D4\u05D6\u05DE\u05E0\u05D5\u05EA \u05DC\u05E9\u05D9\u05EA\u05D5\u05E3 \u05D5\u05D4\u05D6\u05DE\u05E0\u05EA \u05E7\u05D4\u05DC \u05D4\u05E9\u05D5\u05DE\u05E2\u05D9\u05DD \u05DC\u05DE\u05E4\u05D2\u05E9\u05D9 \u05F3\u05D4\u05D0\u05D7\u05D9\u05DD \u05E9\u05DC\u05E0\u05D5\u05F3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u05DC\u05D4\u05D5\u05E8\u05D3\u05D4\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\u05E2\u05E8\u05DB\u05EA \u05D0\u05D9\u05E8\u05D5\u05D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " \u05D4\u05E2\u05E8\u05DB\u05D4 \u05DB\u05D5\u05DC\u05DC\u05EA \u05D1\u05EA\u05D5\u05DB\u05D4 \u05D8\u05D9\u05E4\u05D9\u05DD, \u05E8\u05E2\u05D9\u05D5\u05E0\u05D5\u05EA, \u05EA\u05D9\u05D0\u05D5\u05DD \u05E6\u05D9\u05E4\u05D9\u05D5\u05EA \u05D5\u05DB\u05DC\u05D9\u05DD \u05D8\u05DB\u05E0\u05D9\u05D9\u05DD \u05DC\u05E7\u05E8\u05D0\u05EA \u05D4\u05E2\u05E8\u05D1 \u05D5\u05D0\u05D7\u05E8\u05D9\u05D5 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\u05DC\u05D4\u05D5\u05E8\u05D3\u05D4\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "\u05E2\u05E8\u05DB\u05EA \u05D0\u05D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " \u05D4\u05E2\u05E8\u05DB\u05D4 \u05DB\u05D5\u05DC\u05DC\u05EA \u05D1\u05EA\u05D5\u05DB\u05D4 \u05D8\u05D9\u05E4\u05D9\u05DD, \u05E8\u05E2\u05D9\u05D5\u05E0\u05D5\u05EA \u05D5\u05DE\u05D9\u05D3\u05E2 \u05D4\u05D9\u05E2\u05D6\u05E8\u05D5 \u05DC\u05DA \u05DC\u05E1\u05E4\u05E8 \u05D0\u05EA \u05D4\u05E1\u05D9\u05E4\u05D5\u05E8 \u05E9\u05DC\u05DA \u05D1\u05E6\u05D5\u05E8\u05D4 \u05D4\u05D8\u05D5\u05D1\u05D4 \u05D1\u05D9\u05D5\u05EA\u05E8 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\u05DC\u05D4\u05D5\u05E8\u05D3\u05D4\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "section", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "\u05E1\u05E8\u05D8\u05D5\u05E0\u05D9\u05DD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, AgendaPageComponent_ng_container_47_Template, 8, 9, "ng-container", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AgendaPageComponent_Template_button_click_50_listener() { return ctx.plusSlides(1, ".videos"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AgendaPageComponent_Template_button_click_54_listener() { return ctx.plusSlides(0 - 1, ".videos"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "section", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " \u05D0\u05D7\u05D9\u05DD \u05DB\u05D5\u05EA\u05D1\u05D9\u05DD \u05E2\u05DC \u05D0\u05D7\u05D9\u05D4\u05DD ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, AgendaPageComponent_ng_container_61_Template, 3, 1, "ng-container", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AgendaPageComponent_Template_button_click_64_listener() { return ctx.plusSlides(1, ".quotes"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AgendaPageComponent_Template_button_click_68_listener() { return ctx.plusSlides(0 - 1, ".quotes"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pagedVideos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.pagedVideos.length, " / ", ctx.videosSlideIndex, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pagedExcerpts);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.pagedExcerpts.length, " / ", ctx.quotesSlideIndex, " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], pipes: [_shared_pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_5__["SafePipe"]], styles: [".kits-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(250px, 15%));\n  grid-gap: 1em;\n  place-content: center;\n  margin-bottom: 3em;\n  justify-content: center;\n}\n@media only screen and (max-width: 1600px) {\n  .kits-container[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(4, minmax(250px, 21%));\n  }\n}\n@media only screen and (max-width: 768px) {\n  .kits-container[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(1, 90%);\n  }\n}\n.kits-container[_ngcontent-%COMP%]   .kit-card[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  padding: 1em;\n  display: grid;\n  grid-template-columns: 100%;\n  grid-template-rows: 90px 40px auto 45px;\n}\n.kits-container[_ngcontent-%COMP%]   .kit-card[_ngcontent-%COMP%]   .kit-icon[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 75px;\n  margin-bottom: 0.5em;\n  justify-self: center;\n}\n.kits-container[_ngcontent-%COMP%]   .kit-card[_ngcontent-%COMP%]   .kit-heading[_ngcontent-%COMP%] {\n  color: #082551;\n  font-family: \"arbel\";\n  font-size: 25px;\n  text-align: center;\n  justify-self: center;\n  margin-bottom: 0.5em;\n}\n.kits-container[_ngcontent-%COMP%]   .kit-card[_ngcontent-%COMP%]   .kit-description[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 0;\n  margin-bottom: 15px;\n  width: 100%;\n}\n.kits-container[_ngcontent-%COMP%]   .kit-card[_ngcontent-%COMP%]   .download-button[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 22px;\n  margin-bottom: auto;\n  background-color: #082551;\n}\n.kits-container[_ngcontent-%COMP%]   .kit-card[_ngcontent-%COMP%]   .download-button[_ngcontent-%COMP%]   .fa-angle-double-left[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.videos-container[_ngcontent-%COMP%] {\n  background-color: var(--primary-color);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 0 40px 60px 40px;\n}\n.videos-container[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%]::after {\n  background-color: white;\n}\n.videos-container[_ngcontent-%COMP%]   .videos-header[_ngcontent-%COMP%] {\n  color: white;\n  margin-bottom: 2em;\n}\n.videos-container[_ngcontent-%COMP%]   .small-heading[_ngcontent-%COMP%] {\n  letter-spacing: 8px;\n}\n.videos-container[_ngcontent-%COMP%]   .videos-button[_ngcontent-%COMP%] {\n  background: transparent;\n  margin: 0 10px;\n  border: none;\n}\n.videos-container[_ngcontent-%COMP%]   .videos-button[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 25px;\n  height: 25px;\n  vertical-align: middle;\n  margin: 0 12px;\n  background: transparent;\n}\n.videos-container[_ngcontent-%COMP%]   .pages-numbers-text[_ngcontent-%COMP%] {\n  color: white;\n}\n.videos-container[_ngcontent-%COMP%]   .videos[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(3, auto);\n  grid-gap: 4em;\n  place-content: center;\n  width: 100%;\n  display: none;\n}\n@media only screen and (max-width: 768px) {\n  .videos-container[_ngcontent-%COMP%]   .videos[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(1, auto);\n  }\n}\n.quotes-container[_ngcontent-%COMP%]   .quotes[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 1em;\n  place-content: center;\n  width: 100%;\n  padding: 0 100px;\n  max-width: 1000px;\n  margin: auto;\n  display: none;\n}\n@media only screen and (max-width: 768px) {\n  .quotes-container[_ngcontent-%COMP%]   .quotes[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(1, auto);\n    padding: 0 65px;\n  }\n}\n.quotes-container[_ngcontent-%COMP%]   .quotes[_ngcontent-%COMP%]   .quote[_ngcontent-%COMP%] {\n  background-color: #efefef;\n  width: 100%;\n  padding: 1em;\n  display: grid;\n  grid-template-columns: 100%;\n  grid-template-rows: auto 1fr auto 25px 50px;\n  visibility: visible;\n  border-radius: 5px;\n}\n.quotes-container[_ngcontent-%COMP%]   .quotes[_ngcontent-%COMP%]   .quote[_ngcontent-%COMP%]   .apostrophy[_ngcontent-%COMP%] {\n  height: 30px;\n  margin-bottom: 15px;\n}\n.quotes-container[_ngcontent-%COMP%]   .quotes[_ngcontent-%COMP%]   .quote[_ngcontent-%COMP%]   .quote-text[_ngcontent-%COMP%] {\n  text-align: center;\n  justify-self: center;\n  text-decoration: none;\n  font-family: \"arbel\";\n  line-height: 25px;\n  margin-top: 5px;\n}\n.quotes-container[_ngcontent-%COMP%]   .quotes[_ngcontent-%COMP%]   .quote[_ngcontent-%COMP%]   .quote-divider[_ngcontent-%COMP%] {\n  justify-self: center;\n  height: 3px;\n  width: 80%;\n  background-color: var(--primary-color);\n  margin: 10px 0;\n}\n.quotes-container[_ngcontent-%COMP%]   .quotes[_ngcontent-%COMP%]   .quote[_ngcontent-%COMP%]   .person-link[_ngcontent-%COMP%] {\n  text-align: center;\n  justify-self: center;\n  font-size: 14px;\n  text-decoration: none;\n  line-height: 25px;\n  margin-top: 0;\n}\n.quotes-container[_ngcontent-%COMP%]   .pages-number-container[_ngcontent-%COMP%] {\n  padding-top: 15px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n@media only screen and (max-width: 768px) {\n  .quotes-container[_ngcontent-%COMP%]   .pages-number-container[_ngcontent-%COMP%] {\n    margin-bottom: 50px;\n  }\n}\n.quotes-container[_ngcontent-%COMP%]   .pages-number-container[_ngcontent-%COMP%]   .quotes-button[_ngcontent-%COMP%] {\n  align-self: center;\n  background: transparent;\n  margin: 0 25px;\n  border: none;\n}\n.quotes-container[_ngcontent-%COMP%]   .pages-number-container[_ngcontent-%COMP%]   .quotes-button[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 25px;\n  height: 25px;\n  vertical-align: middle;\n  margin: 0 12px;\n  background: transparent;\n}\n.quotes-container[_ngcontent-%COMP%]   .pages-number-container[_ngcontent-%COMP%]   .pages-numbers-text-quote[_ngcontent-%COMP%] {\n  color: #082551;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWdlbmRhL3BhZ2UvQzpcXFVzZXJzXFxUZWhpbGFcXERlc2t0b3BcXGdvb2QtcHJvamVjdFxcb3VyYnJvdGhlcnMtb3VyYnJvdGhlcnNcXG91ci1icm90aGVycy13ZWIvc3JjXFxhcHBcXGFnZW5kYVxccGFnZVxcYWdlbmRhLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FnZW5kYS9wYWdlL2FnZW5kYS1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLG9EQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQ0NGO0FEQ0U7RUFSRjtJQVNJLG9EQUFBO0VDRUY7QUFDRjtBREFFO0VBWkY7SUFhSSxxQ0FBQTtFQ0dGO0FBQ0Y7QURERTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSx1Q0FBQTtBQ0dKO0FEREk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7QUNHTjtBREFJO0VBRUUsY0FBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtBQ0NOO0FERUk7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUNBTjtBREdJO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQ0ROO0FER007RUFDRSxlQUFBO0FDRFI7QURPQTtFQUNFLHNDQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0FDSkY7QURNRTtFQUNFLHVCQUFBO0FDSko7QURPRTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQ0xKO0FEUUU7RUFDRSxtQkFBQTtBQ05KO0FEU0U7RUFDRSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FDUEo7QURTSTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUVBLGNBQUE7RUFDQSx1QkFBQTtBQ1JOO0FEV0U7RUFDRSxZQUFBO0FDVEo7QURZRTtFQUNFLHNDQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUNWSjtBRFlJO0VBUEY7SUFRSSxzQ0FBQTtFQ1RKO0FBQ0Y7QURjRTtFQUNFLHFDQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ1hKO0FEYUk7RUFWRjtJQVdJLHNDQUFBO0lBQ0EsZUFBQTtFQ1ZKO0FBQ0Y7QURXSTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSwyQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNUTjtBRFdNO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FDVFI7QURZTTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDVlI7QURhTTtFQUNFLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxzQ0FBQTtFQUNBLGNBQUE7QUNYUjtBRGNNO0VBQ0Usa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtBQ1pSO0FEaUJFO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ2ZKO0FEaUJJO0VBTkY7SUFPSSxtQkFBQTtFQ2RKO0FBQ0Y7QURnQkk7RUFDRSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUNkTjtBRGdCTTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUVBLGNBQUE7RUFDQSx1QkFBQTtBQ2ZSO0FEbUJJO0VBRUEsY0FBQTtBQ2xCSiIsImZpbGUiOiJzcmMvYXBwL2FnZW5kYS9wYWdlL2FnZW5kYS1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmtpdHMtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIG1pbm1heCgyNTBweCwgMTUlKSk7XHJcbiAgZ3JpZC1nYXA6IDFlbTtcclxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogM2VtO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE2MDBweCkge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgbWlubWF4KDI1MHB4LCAyMSUpKTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIDkwJSk7XHJcbiAgfVxyXG5cclxuICAua2l0LWNhcmQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxZW07XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA5MHB4IDQwcHggYXV0byA0NXB4O1xyXG5cclxuICAgIC5raXQtaWNvbiB7XHJcbiAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICBoZWlnaHQ6IDc1cHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xyXG4gICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAua2l0LWhlYWRpbmcge1xyXG4gICAgICAvLyBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICAgIGNvbG9yOiAjMDgyNTUxO1xyXG4gICAgICBmb250LWZhbWlseTogJ2FyYmVsJztcclxuICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcclxuICAgIH1cclxuXHJcbiAgICAua2l0LWRlc2NyaXB0aW9uIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAuZG93bmxvYWQtYnV0dG9uIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IGF1dG87XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwODI1NTE7XHJcblxyXG4gICAgICAuZmEtYW5nbGUtZG91YmxlLWxlZnQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnZpZGVvcy1jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDAgNDBweCA2MHB4IDQwcHg7XHJcblxyXG4gIC5kaXZpZGVyOjphZnRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICB9XHJcblxyXG4gIC52aWRlb3MtaGVhZGVyIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDJlbTtcclxuICB9XHJcblxyXG4gIC5zbWFsbC1oZWFkaW5nIHtcclxuICAgIGxldHRlci1zcGFjaW5nOiA4cHg7XHJcbiAgfVxyXG5cclxuICAudmlkZW9zLWJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIG1hcmdpbjogMCAxMHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG5cclxuICAgIC5pY29uIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICB3aWR0aDogMjVweDtcclxuICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG5cclxuICAgICAgbWFyZ2luOiAwIDEycHg7XHJcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgfVxyXG4gIH1cclxuICAucGFnZXMtbnVtYmVycy10ZXh0IHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcblxyXG4gIC52aWRlb3Mge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgYXV0byk7XHJcbiAgICBncmlkLWdhcDogNGVtO1xyXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG5cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgYXV0byk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ucXVvdGVzLWNvbnRhaW5lciB7XHJcbiAgLnF1b3RlcyB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xyXG4gICAgZ3JpZC1nYXA6IDFlbTtcclxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMCAxMDBweDtcclxuICAgIG1heC13aWR0aDogMTAwMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIGF1dG8pO1xyXG4gICAgICBwYWRkaW5nOiAwIDY1cHg7XHJcbiAgICB9XHJcbiAgICAucXVvdGUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgcGFkZGluZzogMWVtO1xyXG4gICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnIgYXV0byAyNXB4IDUwcHg7XHJcbiAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHJcbiAgICAgIC5hcG9zdHJvcGh5IHtcclxuICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnF1b3RlLXRleHQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdhcmJlbCc7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAucXVvdGUtZGl2aWRlciB7XHJcbiAgICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgaGVpZ2h0OiAzcHg7XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgICAgICBtYXJnaW46IDEwcHggMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnBlcnNvbi1saW5rIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAucGFnZXMtbnVtYmVyLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5xdW90ZXMtYnV0dG9uIHtcclxuICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgbWFyZ2luOiAwIDI1cHg7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuXHJcbiAgICAgIC5pY29uIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcblxyXG4gICAgICAgIG1hcmdpbjogMCAxMnB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnBhZ2VzLW51bWJlcnMtdGV4dC1xdW90ZSB7XHJcbiAgICAgLy8gY29sb3I6IHJlZDtcclxuICAgIGNvbG9yOiAjMDgyNTUxO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIua2l0cy1jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCBtaW5tYXgoMjUwcHgsIDE1JSkpO1xuICBncmlkLWdhcDogMWVtO1xuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDNlbTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE2MDBweCkge1xuICAua2l0cy1jb250YWluZXIge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIG1pbm1heCgyNTBweCwgMjElKSk7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmtpdHMtY29udGFpbmVyIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCA5MCUpO1xuICB9XG59XG4ua2l0cy1jb250YWluZXIgLmtpdC1jYXJkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMWVtO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogOTBweCA0MHB4IGF1dG8gNDVweDtcbn1cbi5raXRzLWNvbnRhaW5lciAua2l0LWNhcmQgLmtpdC1pY29uIHtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogNzVweDtcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xufVxuLmtpdHMtY29udGFpbmVyIC5raXQtY2FyZCAua2l0LWhlYWRpbmcge1xuICBjb2xvcjogIzA4MjU1MTtcbiAgZm9udC1mYW1pbHk6IFwiYXJiZWxcIjtcbiAgZm9udC1zaXplOiAyNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcbn1cbi5raXRzLWNvbnRhaW5lciAua2l0LWNhcmQgLmtpdC1kZXNjcmlwdGlvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4ua2l0cy1jb250YWluZXIgLmtpdC1jYXJkIC5kb3dubG9hZC1idXR0b24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA4MjU1MTtcbn1cbi5raXRzLWNvbnRhaW5lciAua2l0LWNhcmQgLmRvd25sb2FkLWJ1dHRvbiAuZmEtYW5nbGUtZG91YmxlLWxlZnQge1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi52aWRlb3MtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAwIDQwcHggNjBweCA0MHB4O1xufVxuLnZpZGVvcy1jb250YWluZXIgLmRpdmlkZXI6OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4udmlkZW9zLWNvbnRhaW5lciAudmlkZW9zLWhlYWRlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xufVxuLnZpZGVvcy1jb250YWluZXIgLnNtYWxsLWhlYWRpbmcge1xuICBsZXR0ZXItc3BhY2luZzogOHB4O1xufVxuLnZpZGVvcy1jb250YWluZXIgLnZpZGVvcy1idXR0b24ge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgbWFyZ2luOiAwIDEwcHg7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi52aWRlb3MtY29udGFpbmVyIC52aWRlb3MtYnV0dG9uIC5pY29uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBtYXJnaW46IDAgMTJweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG4udmlkZW9zLWNvbnRhaW5lciAucGFnZXMtbnVtYmVycy10ZXh0IHtcbiAgY29sb3I6IHdoaXRlO1xufVxuLnZpZGVvcy1jb250YWluZXIgLnZpZGVvcyB7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIGF1dG8pO1xuICBncmlkLWdhcDogNGVtO1xuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBub25lO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAudmlkZW9zLWNvbnRhaW5lciAudmlkZW9zIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCBhdXRvKTtcbiAgfVxufVxuXG4ucXVvdGVzLWNvbnRhaW5lciAucXVvdGVzIHtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbiAgZ3JpZC1nYXA6IDFlbTtcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMCAxMDBweDtcbiAgbWF4LXdpZHRoOiAxMDAwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgZGlzcGxheTogbm9uZTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnF1b3Rlcy1jb250YWluZXIgLnF1b3RlcyB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgYXV0byk7XG4gICAgcGFkZGluZzogMCA2NXB4O1xuICB9XG59XG4ucXVvdGVzLWNvbnRhaW5lciAucXVvdGVzIC5xdW90ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxZW07XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciBhdXRvIDI1cHggNTBweDtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLnF1b3Rlcy1jb250YWluZXIgLnF1b3RlcyAucXVvdGUgLmFwb3N0cm9waHkge1xuICBoZWlnaHQ6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4ucXVvdGVzLWNvbnRhaW5lciAucXVvdGVzIC5xdW90ZSAucXVvdGUtdGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1mYW1pbHk6IFwiYXJiZWxcIjtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cbi5xdW90ZXMtY29udGFpbmVyIC5xdW90ZXMgLnF1b3RlIC5xdW90ZS1kaXZpZGVyIHtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gIGhlaWdodDogM3B4O1xuICB3aWR0aDogODAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgbWFyZ2luOiAxMHB4IDA7XG59XG4ucXVvdGVzLWNvbnRhaW5lciAucXVvdGVzIC5xdW90ZSAucGVyc29uLWxpbmsge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gIG1hcmdpbi10b3A6IDA7XG59XG4ucXVvdGVzLWNvbnRhaW5lciAucGFnZXMtbnVtYmVyLWNvbnRhaW5lciB7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnF1b3Rlcy1jb250YWluZXIgLnBhZ2VzLW51bWJlci1jb250YWluZXIge1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIH1cbn1cbi5xdW90ZXMtY29udGFpbmVyIC5wYWdlcy1udW1iZXItY29udGFpbmVyIC5xdW90ZXMtYnV0dG9uIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgbWFyZ2luOiAwIDI1cHg7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5xdW90ZXMtY29udGFpbmVyIC5wYWdlcy1udW1iZXItY29udGFpbmVyIC5xdW90ZXMtYnV0dG9uIC5pY29uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBtYXJnaW46IDAgMTJweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG4ucXVvdGVzLWNvbnRhaW5lciAucGFnZXMtbnVtYmVyLWNvbnRhaW5lciAucGFnZXMtbnVtYmVycy10ZXh0LXF1b3RlIHtcbiAgY29sb3I6ICMwODI1NTE7XG59Il19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AgendaPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-agenda-page',
                templateUrl: './agenda-page.component.html',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                styleUrls: ['./agenda-page.component.scss']
            }]
    }], function () { return [{ type: _quotes_service__WEBPACK_IMPORTED_MODULE_2__["QuotesService"] }, { type: _videos_service__WEBPACK_IMPORTED_MODULE_3__["VideosService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/agenda/page/agenda-page.module.ts":
/*!***************************************************!*\
  !*** ./src/app/agenda/page/agenda-page.module.ts ***!
  \***************************************************/
/*! exports provided: AgendaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgendaPageModule", function() { return AgendaPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _quotes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./quotes.service */ "./src/app/agenda/page/quotes.service.ts");
/* harmony import */ var _agenda_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./agenda-page.component */ "./src/app/agenda/page/agenda-page.component.ts");
/* harmony import */ var _shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/pipes/pipes.module */ "./src/app/shared/pipes/pipes.module.ts");








const routes = [
    {
        path: '',
        component: _agenda_page_component__WEBPACK_IMPORTED_MODULE_4__["AgendaPageComponent"]
    }
];
class AgendaPageModule {
}
AgendaPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AgendaPageModule });
AgendaPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AgendaPageModule_Factory(t) { return new (t || AgendaPageModule)(); }, providers: [_quotes_service__WEBPACK_IMPORTED_MODULE_3__["QuotesService"]], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__["PipesModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AgendaPageModule, { declarations: [_agenda_page_component__WEBPACK_IMPORTED_MODULE_4__["AgendaPageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__["PipesModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AgendaPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__["PipesModule"]],
                providers: [_quotes_service__WEBPACK_IMPORTED_MODULE_3__["QuotesService"]],
                declarations: [_agenda_page_component__WEBPACK_IMPORTED_MODULE_4__["AgendaPageComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/agenda/page/quotes-data.ts":
/*!********************************************!*\
  !*** ./src/app/agenda/page/quotes-data.ts ***!
  \********************************************/
/*! exports provided: quotes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quotes", function() { return quotes; });
const quotes = [
    {
        excerpt: 'תעצמו לרגע את העיניים, ותנסו לדמיין- הוא עומד מולכם, גבוה, מסתיר את השמש…',
        writerName: '- אדוה קרא ואזאנא -',
        recipientName: 'כותבת על אחיה סמ"ר אמיר קרא ז"ל',
        writerId: '1',
        recipientId: 'https://www.izkor.gov.il/%D7%90%D7%9E%D7%99%D7%A8%20%D7%A7%D7%A8%D7%90/en_cc8ee9856efd39b78e87220ff64acff0'
    },
    {
        excerpt: 'זה לא סיוט ולא חלום בלהות, זאת המציאות והיא מתנפצת לה ביום אחד..',
        writerName: '- איילה פיקהולץ ברוך -',
        recipientName: 'כותבת על אחיה סמ"ר ירון פיקהולץ ז"ל',
        writerId: '2',
        recipientId: 'https://www.izkor.gov.il/%D7%A4%D7%99%D7%A7%D7%94%D7%95%D7%9C%D7%A5%20%D7%99%D7%A8%D7%95%D7%9F/en_e6ae54ecc643cb8398c6b2455a5c984a'
    },
    {
        excerpt: 'חולמת עלייך בלילות, נזכרת בקול ובריח שלך, מנסה לשמר אותם…',
        writerName: '- איילת אוסטרמן -',
        recipientName: 'כותבת על אחיה סמל אביעד דותן ז"ל',
        writerId: '3',
        recipientId: 'https://www.izkor.gov.il/%D7%90%D7%91%D7%99%D7%A2%D7%93%20%D7%93%D7%95%D7%AA%D7%9F/en_ca97f8ded1aad556d8b17b09ad084c86'
    },
    {
        excerpt: 'אח של חלל נזכר בחיוך, בחיבוק, בכל מה שהיה',
        writerName: '- איל שלו ודגנית לוין -',
        recipientName: 'כותבים על אחיהם סמ"ר שחר שלו ז"ל',
        writerId: '4',
        recipientId: 'https://www.izkor.gov.il/%D7%A9%D7%97%D7%A8%20%D7%A9%D7%9C%D7%95/en_869531140d93b66a56b89f6c15b748f6'
    },
    {
        excerpt: 'הזמן לא עוזר. כשהכאב מכה הוא מגיע בלי רחמים ועם עוצמות שאני לא מכיר..',
        writerName: '- איתי שפרן -',
        recipientName: 'כותב על אחיו רב"ט אלעד שפרן ז"ל',
        writerId: '5',
        recipientId: 'https://www.izkor.gov.il/%D7%90%D7%9C%D7%A2%D7%93%20%D7%A9%D7%A4%D7%A8%D7%9F/en_9a955e4b22ab5ea87eecfc972041216c'
    },
    {
        excerpt: 'מעגל עצב עצום נפתח, ובו בזמן מעגל אושר נסגר.',
        writerName: '- אמיר קלנגל -',
        recipientName: 'כותב על אחיו רס"ן יוחאי (ג\'וחא) קלנגל ז"ל',
        writerId: '6',
        recipientId: 'https://www.izkor.gov.il/%D7%99%D7%95%D7%97%D7%90%D7%99%20%D7%A7%D7%9C%D7%A0%D7%92%D7%9C/en_021e3002a0c61e9e30ddd68d00b41992'
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
        recipientId: 'https://www.izkor.gov.il/%D7%A2%D7%93%D7%99%20%D7%A1%D7%9C%D7%99%D7%9D/en_fa9d9b6bf5a7a25bc5d49efd2e0eb4fd'
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
        recipientId: 'https://www.izkor.gov.il/%D7%A0%D7%99%D7%A8-%D7%9E%D7%A8%D7%93%D7%9B%D7%99%20%D7%A9%D7%A8%D7%99%D7%99%D7%91%D7%9E%D7%9F/en_ac806f2538c5ff4b7f8e084e1d4f7b6f'
    },
    {
        excerpt: 'בדרך כלל ביום הזיכרון שואלים אותי איך זה מרגיש להיות אח שכול? ואני, מה יש לי להגיד?.. ',
        writerName: '- יהודה ליבוביץ -',
        recipientName: 'כותב על אחיו סמ"ר אלעזר ליבוביץ ז"ל',
        writerId: '14',
        recipientId: 'https://www.izkor.gov.il/%D7%A9%D7%9E%D7%90%D7%99-%D7%90%D7%9C%D7%A2%D7%96%D7%A8%20%D7%9C%D7%99%D7%91%D7%95%D7%91%D7%99%D7%A5/en_f3a8a45495401349bf554de09e65a690'
    },
    {
        excerpt: "אם הייתי יוצרת עולם הייתי משנה בו כמה מילים. המילה 'געגועים' הייתה נקשרת לעוגה טעימה.",
        writerName: '- מיכל שמואלי חזון -',
        recipientName: 'כותבת על אחיה רב"ט ניר חזון ז"ל',
        writerId: '15',
        recipientId: 'https://www.izkor.gov.il/%D7%A0%D7%99%D7%91%20%D7%97%D7%96%D7%95%D7%9F/en_79ee0dff5770147407268f19e01ace54'
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
        recipientId: 'https://www.izkor.gov.il/%D7%98%D7%9C-%D7%A0%D7%99%D7%A1%D7%99%D7%9D%20%D7%99%D7%A4%D7%A8%D7%97/en_47f74060b0ef5c817bfa358c6e8bbdea'
    },
    {
        excerpt: 'חלמתי בשבילך על עולם נפלא, ברכבת מהירה אל ארץ של קסמים בניתי לך חיים',
        writerName: '- ניר סגל -',
        recipientName: 'כותב על אחיו טוראי אמיר סגל ז"ל',
        writerId: '18',
        recipientId: 'https://www.izkor.gov.il/%D7%90%D7%9E%D7%99%D7%A8%20%D7%A1%D7%92%D7%9C/en_5e87dd9ae7fedc7b37a99732c8c11097'
    },
    {
        excerpt: 'יש רגעים שאתה פשוט רוצה להחזיר את הגלגל לאותו הלילה..',
        writerName: '- סהר דגורקר -',
        recipientName: 'כותב על אחיו סמ"ר ברק רפאל דגורקר ז"ל',
        writerId: '19',
        recipientId: 'https://www.izkor.gov.il/%D7%91%D7%A8%D7%A7-%D7%A8%D7%A4%D7%90%D7%9C%20%D7%93%D7%92%D7%95%D7%A8%D7%A7%D7%A8/en_93fcc5a075e8f3885dc6f0d8a1c31ebf'
    },
    {
        excerpt: 'הייתי מסתכלת עליו ומבינה שככה בדיוק אני ארצה להיות שאהיה גדולה',
        writerName: '- ספיר כהן -',
        recipientName: 'כותבת על אחיה סמ"ר עידן כהן ז"ל',
        writerId: '20',
        recipientId: 'https://www.izkor.gov.il/%D7%A2%D7%99%D7%93%D7%9F%20%D7%9B%D7%94%D7%9F/en_cf95a71e55b7764ba9b5fd1c71361fd3'
    },
    {
        excerpt: 'ואני, הפחד מהשכחה מלווה אותי. לא שלי, לא שלנו- של הסביבה.',
        writerName: '- עינת חסון -',
        recipientName: 'כותבת על אחיה סגן גונדר רפי אלקלעי ז"ל',
        writerId: '21',
        recipientId: 'https://www.izkor.gov.il/%D7%A8%D7%A4%D7%90%D7%9C%20%D7%90%D7%9C%D7%A7%D7%9C%D7%A2%D7%99/en_71ce1e3042c5339a412df4cdf646bd5b'
    },
    {
        excerpt: 'בעוד דקות בודדות ייחרב עליי עולמי וכל חיי יקבלו תפנית חדה..',
        writerName: "- פנינה צ'צ'יק - מנקר -",
        recipientName: 'כותבת על אחיה רב"ט שמחה מנקר ז"ל',
        writerId: '22',
        recipientId: 'https://www.izkor.gov.il/%D7%A9%D7%9E%D7%97%D7%94%20%D7%9E%D7%A0%D7%A7%D7%A8/en_ac8696871ce1eb7f4b911a9a798cceab'
    },
    {
        excerpt: 'לקח לי הרבה שנים לעבד את החסר, את האובדן והיום… אתה חלק מסיפור חיי..',
        writerName: '- ציפי וייל -',
        recipientName: 'כותבת על אחיה רב"ט אברהם שטיין ז"ל',
        writerId: '23',
        recipientId: 'https://www.izkor.gov.il/%D7%90%D7%91%D7%A8%D7%94%D7%9D%20%D7%A9%D7%98%D7%99%D7%99%D7%9F/en_6c2bbc24704d47a4f5cc5d999e0165ef'
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
        recipientId: 'https://www.izkor.gov.il/%D7%9E%D7%A8%D7%A9%D7%94%20%D7%92%D7%93/en_b4de16949869ea12307a532d4c0ccf2a'
    }
];


/***/ }),

/***/ "./src/app/agenda/page/quotes.service.ts":
/*!***********************************************!*\
  !*** ./src/app/agenda/page/quotes.service.ts ***!
  \***********************************************/
/*! exports provided: QuotesService, Quote */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotesService", function() { return QuotesService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Quote", function() { return Quote; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _quotes_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quotes-data */ "./src/app/agenda/page/quotes-data.ts");



class QuotesService {
    constructor() {
        this.pagedQuotes = [];
        this.smallPagePagedQuotes = [];
        this.quotes = _quotes_data__WEBPACK_IMPORTED_MODULE_1__["quotes"];
        for (let i = 0; i < this.quotes.length - 6; i += 6) {
            this.pagedQuotes.push({
                page: this.quotes.slice(i, i + 6)
            });
        }
        for (let i = 0; i < this.quotes.length - 3; i += 3) {
            this.smallPagePagedQuotes.push({
                page: this.quotes.slice(i, i + 3)
            });
        }
    }
    getTextFromSiblingURIbyId(id) {
        return `/assets/texts/${id}.pdf`;
    }
}
QuotesService.ɵfac = function QuotesService_Factory(t) { return new (t || QuotesService)(); };
QuotesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: QuotesService, factory: QuotesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuotesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
class Quote {
}


/***/ }),

/***/ "./src/app/agenda/page/videos-data.ts":
/*!********************************************!*\
  !*** ./src/app/agenda/page/videos-data.ts ***!
  \********************************************/
/*! exports provided: videos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "videos", function() { return videos; });
const videos = [
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
    }
];


/***/ }),

/***/ "./src/app/agenda/page/videos.service.ts":
/*!***********************************************!*\
  !*** ./src/app/agenda/page/videos.service.ts ***!
  \***********************************************/
/*! exports provided: VideosService, Video */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideosService", function() { return VideosService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Video", function() { return Video; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _videos_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./videos-data */ "./src/app/agenda/page/videos-data.ts");



class VideosService {
    constructor() {
        this.pagedVideos = [];
        this.videos = _videos_data__WEBPACK_IMPORTED_MODULE_1__["videos"];
        for (let i = 0; i < this.videos.length - 3; i += 3) {
            this.pagedVideos.push({
                page: this.videos.slice(i, i + 3)
            });
        }
    }
}
VideosService.ɵfac = function VideosService_Factory(t) { return new (t || VideosService)(); };
VideosService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: VideosService, factory: VideosService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VideosService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
class Video {
}


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
//# sourceMappingURL=agenda-page-agenda-page-module-es2015.js.map