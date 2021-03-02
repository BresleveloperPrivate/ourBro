function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gallery-page-gallery-page-module"], {
  /***/
  "./src/app/gallery/page/gallery-page.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/gallery/page/gallery-page.component.ts ***!
    \********************************************************/

  /*! exports provided: GalleryPageComponent */

  /***/
  function srcAppGalleryPageGalleryPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GalleryPageComponent", function () {
      return GalleryPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var GalleryPageComponent = function GalleryPageComponent() {
      _classCallCheck(this, GalleryPageComponent);
    };

    GalleryPageComponent.ɵfac = function GalleryPageComponent_Factory(t) {
      return new (t || GalleryPageComponent)();
    };

    GalleryPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GalleryPageComponent,
      selectors: [["app-gallery-page"]],
      decls: 6,
      vars: 0,
      consts: [["src", "../../../assets/img/aboutHeader.jpg", 1, "image-header"], [1, "site-divider"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "small-heading"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "medium-heading"]],
      template: function GalleryPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u05D4\u05E2\u05DE\u05D5\u05D3 \u05D1\u05D1\u05E0\u05D9\u05D9\u05D4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u05D9\u05E2\u05DC\u05D4 \u05D1\u05E7\u05E8\u05D5\u05D1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dhbGxlcnkvcGFnZS9nYWxsZXJ5LXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"],
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GalleryPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-gallery-page',
          templateUrl: './gallery-page.component.html',
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          styleUrls: ['./gallery-page.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/gallery/page/gallery-page.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/gallery/page/gallery-page.module.ts ***!
    \*****************************************************/

  /*! exports provided: GalleryPageModule */

  /***/
  function srcAppGalleryPageGalleryPageModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GalleryPageModule", function () {
      return GalleryPageModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _gallery_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./gallery-page.component */
    "./src/app/gallery/page/gallery-page.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [{
      path: '',
      component: _gallery_page_component__WEBPACK_IMPORTED_MODULE_1__["GalleryPageComponent"]
    }];

    var GalleryPageModule = function GalleryPageModule() {
      _classCallCheck(this, GalleryPageModule);
    };

    GalleryPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: GalleryPageModule
    });
    GalleryPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function GalleryPageModule_Factory(t) {
        return new (t || GalleryPageModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GalleryPageModule, {
        declarations: [_gallery_page_component__WEBPACK_IMPORTED_MODULE_1__["GalleryPageComponent"]],
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GalleryPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
          declarations: [_gallery_page_component__WEBPACK_IMPORTED_MODULE_1__["GalleryPageComponent"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=gallery-page-gallery-page-module-es5.js.map