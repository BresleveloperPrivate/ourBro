(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gallery-page-gallery-page-module"],{

/***/ "./src/app/gallery/page/gallery-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/gallery/page/gallery-page.component.ts ***!
  \********************************************************/
/*! exports provided: GalleryPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryPageComponent", function() { return GalleryPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




class GalleryPageComponent {
    constructor(_renderer2, _document) {
        this._renderer2 = _renderer2;
        this._document = _document;
    }
    ngOnInit() {
        const s = this._renderer2.createElement('script');
        s.type = 'text/javascript';
        s.src = 'https://cdn.jsdelivr.net/npm/publicalbum@latest/embed-ui.min.js';
        s.text = ``;
        this._renderer2.appendChild(this._document.body, s);
    }
}
GalleryPageComponent.ɵfac = function GalleryPageComponent_Factory(t) { return new (t || GalleryPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])); };
GalleryPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GalleryPageComponent, selectors: [["app-gallery-page"]], decls: 15, vars: 0, consts: [["src", "../../../assets/img/aboutHeader.jpg", 1, "image-header"], [1, "site-divider"], ["data-link", "https://photos.app.goo.gl/AXxdPYiNPb9oDozf8", "data-title", "\u05EA\u05DE\u05D5\u05E0\u05D5\u05EA \u05E9\u05DC \u05D0\u05D7\u05D9\u05DD", "data-description", "12 new photos added to shared album", "data-delay", "2", 1, "pa-gallery-player-widget", 2, "width", "100%", "height", "480px", "display", "none"], ["data", "https://lh3.googleusercontent.com/Mr1MsJsViwdhZqjc3nGXZ3k-6gY-K_mwNqbfXDctBB0ajnw75xKAVBhxs1x6lf8msf6LXL5w6WmSYAwgMqCJewAFAte0EdfKzdaav77zDszHPkvHnOLf4Rfk7KHvntUWdkFBh66R=w1920-h1080"], ["data", "https://lh3.googleusercontent.com/ReIRQnJ5Y3Pypm9ReRcumbGHxH60EWQn4EeTWd6YK-fNCt8C7pvZDgh3_BLt_zcifOE_xIYoX8LxgSCWENMJpePD1KiscYA6Ga2r_JdSDADUf5a6P3xpeOMlQ5ZELGnhzLVoPghJ=w1920-h1080"], ["data", "https://lh3.googleusercontent.com/k5Etm0CV4g8qZOY0OQB7Y5v1V_TXz2jSmD6l4E56cfTFRCHtf3bY_IJ6d8gb77ZX-cBUFKNgyovoLn7iAwrwl6vO7pvM9_BDgxNgsq6AifPewisxe0H3S4KvoeQpNXfhcG0JANlV=w1920-h1080"], ["data", "https://lh3.googleusercontent.com/kp-8038pJUQDSWIGE_D0oBkSbRYaQ0V89A0KVNzAePuIWj3sl12ARwI3WxLeSQnjGkYMzWk0DvjrR37yM-6TEOq4i71PXRSnXCxIRhvnFhTPmtnfp1nEEQV4Ofk7CC1aYG7AyPeH=w1920-h1080"], ["data", "https://lh3.googleusercontent.com/muvTobuFTuAng4F7TWldJosf8ZoLAEPseAEa1JCvqAJqD-zonK8vlGY41OyLp2oBS3S3cM8O3beus3yKBOh9WDUUOuGJOavARmnmMteIN_TU6H2vFOXBQKzqxlfBtZO7zneKH4u2=w1920-h1080"], ["data", "https://lh3.googleusercontent.com/5GRoCA4wb8WVvxYKUXYBZ4Wwp3jzCaPKuZwrsoJI52fr6_pyQiLnK8OB_ddjS7boLknSRlqAUVc39sBgbujCxsDZYnfg4TVpmUQLglhIcUrD8j2p5TXe7cx8Y5rl0qQVixpI2MEy=w1920-h1080"], ["data", "https://lh3.googleusercontent.com/pQ-tdUO120U4UxxWvf6MbFzc_320inoGZ_8PXOC18U3VG9bA_pKXzcTO2j2U688yYksZSXxjGGkKvJMeQo0bjLxXWVGT-WAfju2JiJuh4js2Yf83d4LTViF6_iDkEwSpHLrvQpwW=w1920-h1080"], ["data", "https://lh3.googleusercontent.com/hjbJBosqYYfcheZqB1wEl5NapoN3jM9iZ75YQ7OLZMWVQNq8k7FUEUI2t4XXvuV_DzjVNNVDrLCJ2Fn-JI5lBn0gExG-9o-_vFzOpW2ReH9J6KzkKQ7tflqJSvde9dssnggmbBy_=w1920-h1080"], ["data", "https://lh3.googleusercontent.com/HeKk9jV1ma3R2-_6vk1A6T7-XnmJf7fbcyXbWABWd7GTnKeCuz0XO6iUUXULHLklP7y2tpWDBg9V2AwFpNIkQ44S2fqxcoQkKU8SlkmzUSLmxqJh_9gQAU-S6eVyif2SGVpeJCcX=w1920-h1080"], ["data", "https://lh3.googleusercontent.com/VzhS_jOWQn_8v1lMVHB3wMl6n5uwFh0icizOYHA7z8yUo0oQzfcvxP8Xv1FI6UqGP3kSCGSUXxUl9zVdkpXcYKFCYbR6VK2-iNG7DYeOwjZLw5CyOzJiTHScEkZP6iM2uIxUhV8q=w1920-h1080"], ["data", "https://lh3.googleusercontent.com/ZefHXqoUceMeFJ8sMwFvvyEehZk3Kab0U30N3bJ7wrb5Lqw5xWMgUGpc51wfFDfd8pZyKRm9g7FmIpjJ8SwpEL4aYq1pI4Q0aFgZ9x3YjYu0UmJhmG2NesU-HG1Lq8Fw-KLZ83u-=w1920-h1080"], ["data", "https://lh3.googleusercontent.com/TD8I3FBdznZzhWn39BqhehFAwVm65wlHHMGeehI8MdStSK60dWOatRDn2K4NeYTTeyTJD3J8Zl9xnjztbT9AAFrdWDlt94MUQyDOcA-DK1I1h0J0QSmZ8kZdbX2d8reFngmR--Ac=w1920-h1080"]], template: function GalleryPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "object", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "object", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "object", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "object", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "object", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "object", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "object", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "object", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "object", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "object", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "object", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "object", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dhbGxlcnkvcGFnZS9nYWxsZXJ5LXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GalleryPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-gallery-page',
                templateUrl: './gallery-page.component.html',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                styleUrls: ['./gallery-page.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: Document, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/gallery/page/gallery-page.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/gallery/page/gallery-page.module.ts ***!
  \*****************************************************/
/*! exports provided: GalleryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryPageModule", function() { return GalleryPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _gallery_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gallery-page.component */ "./src/app/gallery/page/gallery-page.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





const routes = [
    {
        path: '',
        component: _gallery_page_component__WEBPACK_IMPORTED_MODULE_1__["GalleryPageComponent"]
    }
];
class GalleryPageModule {
}
GalleryPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: GalleryPageModule });
GalleryPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function GalleryPageModule_Factory(t) { return new (t || GalleryPageModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GalleryPageModule, { declarations: [_gallery_page_component__WEBPACK_IMPORTED_MODULE_1__["GalleryPageComponent"]], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GalleryPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                declarations: [_gallery_page_component__WEBPACK_IMPORTED_MODULE_1__["GalleryPageComponent"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=gallery-page-gallery-page-module-es2015.js.map