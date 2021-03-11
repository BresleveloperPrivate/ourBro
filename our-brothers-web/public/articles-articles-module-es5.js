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
  ['articles-articles-module'],
  {
    /***/
    './src/app/articles/articles.module.ts':
      /*!*********************************************!*\
    !*** ./src/app/articles/articles.module.ts ***!
    \*********************************************/

      /*! exports provided: ArticlesModule */

      /***/
      function srcAppArticlesArticlesModuleTs(module, __webpack_exports__, __webpack_require__) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'ArticlesModule', function() {
          return ArticlesModule;
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

        var _components_articles_container_articles_container_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./components/articles-container/articles-container.component */
          './src/app/articles/components/articles-container/articles-container.component.ts'
        );
        /* harmony import */

        var _components_article_article_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./components/article/article.component */
          './src/app/articles/components/article/article.component.ts'
        );
        /* harmony import */

        var _components_articles_switcher_articles_switcher_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./components/articles-switcher/articles-switcher.component */
          './src/app/articles/components/articles-switcher/articles-switcher.component.ts'
        );

        var routes = [
          {
            path: '',
            component:
              _components_articles_container_articles_container_component__WEBPACK_IMPORTED_MODULE_3__[
                'ArticlesContainerComponent'
              ]
          }
        ];

        var ArticlesModule = function ArticlesModule() {
          _classCallCheck(this, ArticlesModule);
        };

        ArticlesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineNgModule']({
          type: ArticlesModule
        });
        ArticlesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineInjector']({
          factory: function ArticlesModule_Factory(t) {
            return new (t || ArticlesModule)();
          },
          imports: [
            [
              _angular_common__WEBPACK_IMPORTED_MODULE_2__['CommonModule'],
              _angular_router__WEBPACK_IMPORTED_MODULE_1__['RouterModule'].forChild(routes)
            ]
          ]
        });

        (function() {
          (typeof ngJitMode === 'undefined' || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵsetNgModuleScope'](ArticlesModule, {
              declarations: [
                _components_articles_container_articles_container_component__WEBPACK_IMPORTED_MODULE_3__[
                  'ArticlesContainerComponent'
                ],
                _components_article_article_component__WEBPACK_IMPORTED_MODULE_4__['ArticleComponent'],
                _components_articles_switcher_articles_switcher_component__WEBPACK_IMPORTED_MODULE_5__[
                  'ArticlesSwitcherComponent'
                ]
              ],
              imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__['CommonModule'],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__['RouterModule']
              ]
            });
        })();
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            ArticlesModule,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'],
                args: [
                  {
                    declarations: [
                      _components_articles_container_articles_container_component__WEBPACK_IMPORTED_MODULE_3__[
                        'ArticlesContainerComponent'
                      ],
                      _components_article_article_component__WEBPACK_IMPORTED_MODULE_4__['ArticleComponent'],
                      _components_articles_switcher_articles_switcher_component__WEBPACK_IMPORTED_MODULE_5__[
                        'ArticlesSwitcherComponent'
                      ]
                    ],
                    imports: [
                      _angular_common__WEBPACK_IMPORTED_MODULE_2__['CommonModule'],
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
    './src/app/articles/assets/articles1.json':
      /*!************************************************!*\
    !*** ./src/app/articles/assets/articles1.json ***!
    \************************************************/

      /*! exports provided: articles, default */

      /***/
      function srcAppArticlesAssetsArticles1Json(module) {
        module.exports = JSON.parse(
          '{"articles":[{"imgUrl":"../../../../assets/img/articles/brothersMeeting.jpg","publishDate":"2019-03-28","title":"המיזם שמזמין אתכם לארח אח שכול: \\"פתחו את ביתכם ושמעו את סיפורים\\"","desc":"במיזם שיצרו האחים השכולים הם מאפשרים לציבור הרחב להזמין אותם לבתים, למרכזים קהילתיים ותנועות נוער כדי לשתף בסיפור החיים של האחים שאיבדו, הצחוקים, החלומות והחיים שלהם עם השכול. \\"המפגשים מפילים חומות ומקרבים, בואו לשמוע אותנו\\"","href":"https://www.mako.co.il/pzm-magazine/Article-ea95eddf6ffa961006.htm"},{"imgUrl":"../../../../assets/img/articles/nir.png","publishDate":"2017-04-24","title":"ניר בן עמרם מתארח בתכנית המוסף","desc":"ניר בן עמרם אחיו של טוראי חנן בן עמרם ז\\"ל מתארח בתכנית המוסף מספר על חייו ועל ההתמודדות.","href":"https://www.youtube.com/watch?v=78w4nU84n44"},{"imgUrl":"../../../../assets/img/articles/channel20.png","publishDate":"2019-04-01","title":"אליסף פרץ, מייסד מיזם \\"האחים שלנו\\" מתארח בערוץ 20","desc":"אליסף פרץ, מייסד מיזם \\"האחים שלנו\\" מתארח בערוץ 20","href":"https://www.youtube.com/watch?v=XEhJLuqhBz0"},{"imgUrl":"../../../../assets/img/articles/alisafKeshet.png","publishDate":"2019-03-29","title":"אליסף פרץ, מייסד מיזם \\"האחים שלנו\\" מתארח ב\'הבוקר של קשת\'","desc":"אליסף פרץ, מייסד מיזם \\"האחים שלנו\\" מתארח ב\'הבוקר של קשת\'","href":"https://www.youtube.com/watch?v=1RfvSEf3FSY&t=23s"},{"imgUrl":"../../../../assets/img/articles/alisafYnet.png","publishDate":"2019-04-01","title":"אליסף פרץ, מייסד מיזם \\"האחים שלנו\\" מתארח באולפן Ynet","desc":"אליסף פרץ, מייסד מיזם \\"האחים שלנו\\" מתארח באולפן Ynet","href":"https://www.youtube.com/watch?v=rn8vVLTE384&t=6s"},{"imgUrl":"../../../../assets/img/articles/sharonRani.png","publishDate":"2014-04-01","title":"אליסף פרץ, מייסד \\"האחים שלנו\\" והגב\' מרים פרץ מתארחים בתכנית שרון ורני בעם","desc":"אליסף פרץ, מייסד \\"האחים שלנו\\" והגב\' מרים פרץ מתארחים בתכנית שרון ורני בעם","href":"https://www.youtube.com/watch?v=7f8Glqy8bKA"},{"imgUrl":"../../../../assets/img/articles/chen.png","publishDate":"2019-04-29","title":"חן שגב מספרת על אחיה טל שגב ז\\"ל בתכנית אלף בית בפוליטיקה","desc":"חן שגב מספרת על אחיה טל שגב ז\\"ל בתכנית אלף בית בפוליטיקה.","href":"https://www.youtube.com/watch?v=RXTe5sMC8-M"},{"imgUrl":"../../../../assets/img/articles/untilTen.png","publishDate":"2018-04-15","title":"נוי פרי וחי אדיב מתארחים ב\\"עד 10\\" עם דני רופ","desc":"נוי פרי, אחות של טל יפרח ז\\"ל וחי אדיב, ראש עיריית הוד השרון ואחיו של שמוליק אדיב ז\\"ל מספרים על ההתמודדות שלהם בשכול.","href":"https://www.youtube.com/watch?v=cc5K7lay4ME"},{"imgUrl":"../../../../assets/img/articles/13.png","publishDate":"2018-03-25","title":"להיות אח שכול זה להיות שקוף","desc":"להיות אח שכול זה להיות שקוף- אליסף פרץ חושף ברגישות ובכנות נוגעת ללב איך זה מרגיש להיות אח שכול","href":"https://13tv.co.il/item/news/specials/talk/lc1yx-627402/"}]}'
        );
        /***/
      },

    /***/
    './src/app/articles/assets/articles2.json':
      /*!************************************************!*\
    !*** ./src/app/articles/assets/articles2.json ***!
    \************************************************/

      /*! exports provided: articles, default */

      /***/
      function srcAppArticlesAssetsArticles2Json(module) {
        module.exports = JSON.parse(
          '{"articles":[{"imgUrl":"../../../../assets/img/articles/painBrothers.png","publishDate":"2017-04-25","title":"אחים לכאב","desc":"קולן של המשפחות השכולות נשמע בדרך כלל דרך ההורים או בני הזוג של הנופלים • מיזם חדש יאפשר גם לאחים ולאחיות השכולים לחלוק את הרגשות והזיכרונות מנקודם מבטם • אליסף פרץ, שאיבד שניים מאחיו: \\"ההתמודדות של אחים היא שונה, כמו גם הסיפור שיש לנו לספר\\"","href":"https://www.yediot.co.il/articles/0,7340,L-4953409,00.html?utm_source=facebook&utm_medium=yediot+page&utm_campaign=facebook+page"},{"imgUrl":"../../../../assets/img/articles/matan.jpg","publishDate":"2018-04-02","title":"מסע ומתן","desc":"מסע ומתן-גם אתם יכולים להיות אנשים טובים באמצע הדרך\\r\\n","href":"https://www.yediot.co.il/articles/0,7340,L-5217670,00.html"},{"imgUrl":"../../../../assets/img/articles/kolHair.png","publishDate":"2018-03-25","title":"אירועי יום הזיכרון לחללי צה\\"ל בבית אבי חי","desc":"אירועי יום הזיכרון לחללי צה\\"ל בבית אבי חי- מפגש של אחים שכולים ופרויקט \'פנים. יום. זיכרון.\' ינסו להציג את סיפורם של הנופלים מזווית אישית ואינטימית","href":"https://www.kolhair.co.il/the-brand/49902/"},{"imgUrl":"../../../../assets/img/articles/inn.png","publishDate":"2018-04-17","title":"סבתא לשני נכדים אבל עדיין אחות שכולה","desc":"אחים שכולים שיתפו בסיפורים על יקיריהם שנפלו במסגרת מיזם \\"האחים שלנו\\" שהתקיים באפרת.","href":"https://www.inn.co.il/News/News.aspx/371069"},{"imgUrl":"../../../../assets/img/articles/firstMalor.jpg","publishDate":"2018-04-17","title":"המדינה שלנו היא סיפור הצלחה מטורף","desc":"\\"המדינה שלנו היא סיפור הצלחה מטורף\\"- אחרי ששכל את שני אחיו, אוריאל ואלירז, החליט אליסף פרץ להקדיש את זמנו לעשייה חברתית. לאחרונה יזם פרויקט מפגשים בסלון עם אחים שכולים, ומסע לאורכה של הארץ לרגל יום העצמאות השבעים. בריאיון איתו הוא מספר על ההתמודדות עם המוות, על סלידתו ממלחמה, וגם על הביקורות משמאל על אמו, מרים פרץ - כלת פרס ישראל","href":"https://www.makorrishon.co.il/news/36531/"},{"imgUrl":"../../../../assets/img/articles/israelWave.png","publishDate":"2018-04-17","title":"גלי ישראל- ראיון עם נוי פרי ודורון מדרוני","desc":"מעיין אדם מראיינת את נוי פרי אחות של סמ\\"ר טל יפרח ז\\"ל ודורון מדרוני לקראת יום הזיכרון ומפגשי \\"האחים שלנו\\"","href":"https://soundcloud.com/galey-israel/17-4-18a"},{"imgUrl":"../../../../assets/img/articles/amirnrg.png","publishDate":"2018-04-12","title":"גלי ישראל- ראיון עם אמיר קלנגל","desc":"יונתן דובב ואריה יואלי מראיינים את אמיר קלנגל אח של רס\\"ן יוחאי(ג\'וחא) קלנגל לקראת מפגשי \\"האחים שלנו \\"","href":"https://soundcloud.com/galey-israel/12-04-18a-3"},{"imgUrl":"../../../../assets/img/articles/103FM.png","publishDate":"2018-04-15","title":"אנחנו רוצים שתזכרו את האחים שלנו","desc":"\\"אנחנו רוצים שתזכרו את האחים שלנו\\"- דרור רפאל ויהודית גריסרו שוחחו עם אליסף פרץ, שאיבד את שני אחיו אוריאל ואלירז, ושאלו אותו איך זה מרגיש להיות אח שכול ביום הזיכרון - מה גורם לו לחשוב שלמרות כל הקשיים יש לנו ארץ נהדרת?","href":"https://103fm.maariv.co.il/programs/media.aspx?ZrqvnVq=HFJHFD&c41t4nzVQ=FGM"},{"imgUrl":"../../../../assets/img/articles/galatz.png","publishDate":"2018-03-29","title":"\\r\\nאחי הנופלים זוכרים: \'\'הרבצנו אחד לשני ואז התחבקנו ככה באמצע הקרבות של ג\'בלייה\'\'","desc":"אחי הנופלים זוכרים: \\"הרבצנו אחד לשני ואז התחבקנו ככה באמצע הקרבות של ג\'בלייה\\"- אליאסף פרץ, אחיו של סרן אוריאל ורס\\"ן אלירז, סיפר הבוקר (חמישי) לאילנה דיין על אחד הרגעים המרגשים שחווה עם אחיו בקרב: \\"רצתי למדרגות והוא רץ אליי והתחלנו להרביץ אחד לשני להרביץ אחד לשני - היינו צריכים להוציא אנרגיה. אנשים הסתכלו מהצד ולא הבינו עד שהתחבקנו לבסוף, באמצע הקרבות של ג\'בלייה, זה היה רגע של אחים\\". אריאלה שיפנבאור , אחותו של דני שנהרג בתאונת האימונים ברומניה, הסבירה בשיחה כי \\"הנושא הזה של זיכרון החללים שלנו זה קונצנזוס בחברה הישראלית שמחבר אותה\\", וטענה כי עם הזמן נטל ההנצחה יעבור לאחים משום ש\\"הגיל הממוצע של ההורים השכולים כיום הוא כ-80\\".","href":"https://glz.co.il/%D7%92%D7%9C%D7%A6/%D7%AA%D7%95%D7%9B%D7%A0%D7%99%D7%95%D7%AA/%D7%90%D7%99%D7%9C%D7%A0%D7%94-%D7%93%D7%99%D7%99%D7%9F/%D7%90%D7%99%D7%9C%D7%A0%D7%94-%D7%93%D7%99%D7%99%D7%9F29-03-2018-0801/%D7%90%D7%97%D7%99-%D7%94%D7%A0%D7%95%D7%A4%D7%9C%D7%99%D7%9D-%D7%96%D7%95%D7%9B%D7%A8%D7%99%D7%9D-%D7%94%D7%A8%D7%91%D7%A6%D7%A0%D7%95-%D7%90%D7%97%D7%93-%D7%9C%D7%A9%D7%A0%D7%99-%D7%95%D7%90%D7%96-%D7%94%D7%AA%D7%97%D7%91%D7%A7%D7%A0%D7%95-%D7%9B%D7%9B%D7%94-%D7%91%D7%90%D7%9E%D7%A6%D7%A2-%D7%94%D7%A7%D7%A8%D7%91%D7%95%D7%AA-%D7%A9%D7%9C-%D7%92%D7%91%D7%9C%D7%99%D7%99%D7%94"}]}'
        );
        /***/
      },

    /***/
    './src/app/articles/assets/articles3.json':
      /*!************************************************!*\
    !*** ./src/app/articles/assets/articles3.json ***!
    \************************************************/

      /*! exports provided: articles, default */

      /***/
      function srcAppArticlesAssetsArticles3Json(module) {
        module.exports = JSON.parse(
          '{"articles":[{"imgUrl":"../../../../assets/img/articles/amirAndShay.png","publishDate":"2017-04-14","title":"אמיר ושי קלנגל מספרים על יוחאי (ג\'וחא) קלנגל\\r\\n","desc":"אמיר ושי - אחים ,לחיים ולשכול מספרים סיפור שונה של חברות, התמודדות וחוויות מאחיהם- רס\\"ן יוחאי (ג׳וחא) קלנגל ז״ל.","href":"https://www.facebook.com/watch/?v=1315451758532445"},{"imgUrl":"../../../../assets/img/articles/HAC.jpg","publishDate":"2017-04-05","title":"אגודת הסטודנטים בהדסה מארחת את \'האחים שלנו\'","desc":"אגודת הסטודנטים במכללה האקדמית הדסה ארחה לרגל יום הזיכרון את רחלי ג\'ורג\'י, אחות של סגן ישי שכטר ז\\"ל שנפל במהלך היתקלות עם מחבלים בדרום לבנון ביוני, 1996.","href":"https://www.hac.ac.il/%D7%A2%D7%9C-%D7%94%D7%9E%D7%9B%D7%9C%D7%9C%D7%94/%D7%9B%D7%9C-%D7%9E%D7%94-%D7%A9%D7%A7%D7%95%D7%A8%D7%94/%D7%97%D7%93%D7%A9%D7%95%D7%AA/2017/%D7%9E%D7%A4%D7%92%D7%A9-%D7%A1%D7%98%D7%95%D7%93%D7%A0%D7%98%D7%99%D7%9D-%D7%A4%D7%A8%D7%95%D7%99%D7%A7%D7%98-%D7%94%D7%90%D7%97%D7%99%D7%9D-%D7%A9%D7%9C%D7%A0%D7%95/"},{"imgUrl":"../../../../assets/img/articles/sister.jpg","publishDate":"2018-04-14","title":"אחות שכולה זה להתעורר בוקר אחד עם בור בלב ","desc":"\\"אחות שכולה זה להתעורר בוקר אחד עם בור בלב - כששמעת שהוא מת\\"- עמותת \\"האחים שלנו\\" מפגישה בין האחים שאיבדו את יקיריהם במלחמות, במבצעים, בתאונות ובפיגועים, וקמו יום אחד עם שם תואר נוסף שאף אחד לא רוצה בו. \\"רק בשנים האחרונות הבנתי שאני גם אחות שכולה, ולא רק בת להורים שכולים\\"","href":"https://news.walla.co.il/item/3150156"},{"imgUrl":"../../../../assets/img/articles/brothers.jpg","publishDate":"2017-04-26","title":"\\"בעיני הוא גיבור\\": פרויקט מיוחד ייתן לאחים שכולים לספר על יקיריהם שנפלו","desc":"\\"בעיני הוא גיבור\\": פרויקט מיוחד ייתן לאחים שכולים לספר על יקיריהם שנפלו- אחיו של יצחק כהן נהרג ב-1948, כשעלה לירושלים עם שיירת מזון. אחיה של תמר עוזיאל נפל ב-2003 במסגרת מבצע בג\'נין. השניים, שהם גם קרובי משפחה, ישתתפו בפרויקט \\"האחים שלנו\\"","href":"https://www.maariv.co.il/news/israel/Article-582421"},{"imgUrl":"../../../../assets/img/articles/scream.png","publishDate":"2017-04-26","title":"צרחתי מעמקי נשמתי, למה דווקא אחי נהרג?","desc":"\\"צרחתי מעמקי נשמתי, למה דווקא אחי נהרג?\\"- אמיר קלנגל היה חייל משוחרר כשאחיו יוחאי (ג\'וחא) נהרג בתקרית בהר דב לפני כשנתיים.","href":"https://www.makorrishon.co.il/nrg/online/1/ART2/875/508.html?hp=1&cat=402&loc=4"},{"imgUrl":"../../../../assets/img/articles/prime20.png","publishDate":"2017-04-30","title":"ואז אני שומע צעקה, תקומו, תקומו, אחיכם נהרג","desc":"\\"ואז אני שומע צעקה, תקומו, תקומו, אחיכם נהרג\\"- במפגש האחים השכולים במעון ראש הממשלה, מספר אליסף פרץ על הרגעים בהם שמע על מותם של שני אחיו, אלירז ואוריאל. אף עין לא נשארה יבשה.","href":"https://www.20il.co.il/%D7%95%D7%90%D7%96-%D7%90%D7%A0%D7%99-%D7%A9%D7%95%D7%9E%D7%A2-%D7%A6%D7%A2%D7%A7%D7%94-%D7%A7%D7%95%D7%9E%D7%95-%D7%A7%D7%95%D7%9E%D7%95-%D7%90%D7%97%D7%99%D7%9B%D7%9D-%D7%A0%D7%94%D7%A8%D7%92/"},{"imgUrl":"../../../../assets/img/articles/chenSegev.png","publishDate":"01-04-2018","title":"האחים שלנו","desc":"\\"עמותת \'האחים שלנו\' פונה לאחים ואחיות שכולים במטרה לתת במה לאחים שכולים לספר ולשתף על קרוביהם אשר נפלו. העמותה התחילה לפני שנה כמיזם של אליאסף פרץ, אחיהם של אוריאל ואלירז פרץ ז\\"ל, אשר אסף סביבו מספר אחים שכולים. המיזם תפס חזק מאוד והשנה הוא הפך לעמותה\\", מספרת חן שגב, סטודנטית לעבודה סוציאלית ואחות שכולה לטל שגב ז\\"ל.","href":"https://bgu4u.co.il/newspaper/%D7%94%D7%90%D7%97%D7%99%D7%9D-%D7%A9%D7%9C%D7%A0%D7%95/"},{"imgUrl":"../../../../assets/img/articles/srugim.jpg","publishDate":"2017-05-01","title":"אח לזיכרון: אליסף פרץ בראיון זיכרון ותקווה על האחים שכבר לא איתנו","desc":"אח לזיכרון: אליסף פרץ בראיון זיכרון ותקווה על האחים שכבר לא איתנו. אליסף אחיהם של החללים אלירז ואוריאל הי\\"ד, הקים לראשונה מיזם זיכרון חדשני ומשאיר רגעים של תקווה. בראיון לסרוגים מספר על החיים בשכול, ועל התקווה החדשה","href":"https://www.srugim.co.il/193721-%d7%99%d7%95%d7%9d-%d7%94%d7%96%d7%99%d7%9b%d7%a8%d7%95%d7%9f-%d7%90%d7%9c%d7%99%d7%a1%d7%a3-%d7%a4%d7%a8%d7%a5"},{"imgUrl":"../../../../assets/img/articles/twoSisters.png","publishDate":"2017-03-29","title":"אחים שכולים במיזם חדש: \\"שמו אותנו בצד בהתמודדות עם השכול\\"","desc":"אחים שכולים במיזם חדש: \\"שמו אותנו בצד בהתמודדות עם השכול\\". לקראת יום הזיכרון יזמו אחים ואחיות לחללי צה\\"ל את המיזם \\"האחים שלנו\\", כדי לאפשר גם להם לספר על ההתמודדות עם האובדן והשכול. \\"כשבאו לשבעה אמרו לי \'תהיי חזקה בשביל אמא\', ואף אחד לא שאל אותי מה שלומי\\"","href":"https://www.ynet.co.il/articles/0,7340,L-4942174,00.html"}]}'
        );
        /***/
      },

    /***/
    './src/app/articles/assets/articles4.json':
      /*!************************************************!*\
    !*** ./src/app/articles/assets/articles4.json ***!
    \************************************************/

      /*! exports provided: articles, default */

      /***/
      function srcAppArticlesAssetsArticles4Json(module) {
        module.exports = JSON.parse(
          '{"articles":[{"imgUrl":"../../../../assets/img/articles/lielTamar.png","publishDate":"2018-04-12","title":"ליאל ותמר מתארחים ב\'עושים סדר\'","desc":"\\"זיכרון בסלון\\" גרסת האחים השכולים, הפרוייקט שמפגיש אחים שכולים עם הציבור. ליאל, אח של בניה רובל ז\\"ל ותמר, אחות של גבי עוזיאל ז\\"ל משתפים בתחושות לקראת מפגשי האחים שלנו.","href":"https://www.facebook.com/watch/?v=1648602338550717"},{"imgUrl":"../../../../assets/img/articles/daniel.png","publishDate":"2018-04-05","title":"דניאל סלים מתארחת בהעולם הבוקר","desc":"עמותת \\"האחים שלנו\\": אחים שכולים מתארחים ומספרים. דניאל, אחות של עדי סלים ז\\"ל משתפת בחוויותיה ממפגשי האחים שלנו","href":"https://www.facebook.com/watch/?v=1643945355683082"},{"imgUrl":"../../../../assets/img/articles/rikiEyal.png","publishDate":"2018-03-29","title":"האחים שלנו מתארחים בלפני החדשות","desc":"לפני החדשות- \\"האחים שלנו\\"- המפגשים המרגשים של האחים השכולים. ריקי מרשה ואייל בן מלך משתפים בחוויותיהם ממפגשי האחים שלנו.","href":"https://www.facebook.com/watch/?v=1633815530029398"},{"imgUrl":"../../../../assets/img/articles/noyDaum.jpg","publishDate":"2019-03-29","title":"\\"אתה מאבד אח, אבל גם את ההורים\\": על פרויקט \\"האחים שלנו\\"","desc":"\\"אתה מאבד אח, אבל גם את ההורים\\": טל יפרח ז\\"ל נפל בשג\'אעיה בצוק איתן, ואחותו נוי התארחה אצל חנוך דאום בערב הפתיחה של מיזם \\"האחים שלנו\\" להיכרות עם אחים שכולים והנופלים: \\"מטעין אותך בהרבה כוחות\\".","href":"https://13tv.co.il/item/entertainment/hatzinor/tal-berman/viral/ntr-1287929/"},{"imgUrl":"../../../../assets/img/articles/noyReshet.png","publishDate":"2019-03-29","title":"נוי פרי מתארחת בהערב ברשת","desc":"נוי, אחות של טל יפרח ז\\"ל משתפת בחוויותיה ממפגשי האחים שלנו.","href":"https://www.facebook.com/watch/?v=1645714648839486"},{"imgUrl":"../../../../assets/img/articles/threeBrothers.png","publishDate":"2018-04-17","title":"האחים שלנו בתכנית אנשים","desc":"אמיר, אח של יוחאי (ג\'וחא) קלנגל ז\\"ל ספיר, אחות של עידן כהן ז\\"ל וזוהר, אח של הדר בוכריס ז\\"ל משתפים במשמעות השכול והאחים שלנו עבורם","href":"https://www.facebook.com/watch/?v=1655771361167148"},{"imgUrl":"../../../../assets/img/articles/mako.png","publishDate":"2017-04-29","title":"\\"האחים שלנו\\": יחד באבל וגם ביצירה","desc":"אליסף פרץ, ששניים מאחיו נפלו בלבנון ובעזה, חיפש דרך חדשה שתאפשר לו ולאחים שכולים אחרים לספר על האח שנפל ועל ההתמודדות שלהם עם השכול לצד הצורך להישאר חזק בשביל ההורים. לפני מספר חודשים הוא הקים את מיזם \\"האחים שלנו\\"...","href":"https://www.mako.co.il/news-channel2/Weekend-Newscast-q2_2017/Article-ba85bb6d40bbb51004.htm"}]}'
        );
        /***/
      },

    /***/
    './src/app/articles/components/article/article.component.ts':
      /*!******************************************************************!*\
    !*** ./src/app/articles/components/article/article.component.ts ***!
    \******************************************************************/

      /*! exports provided: ArticleComponent */

      /***/
      function srcAppArticlesComponentsArticleArticleComponentTs(module, __webpack_exports__, __webpack_require__) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'ArticleComponent', function() {
          return ArticleComponent;
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

        var ArticleComponent = function ArticleComponent() {
          _classCallCheck(this, ArticleComponent);
        };

        ArticleComponent.ɵfac = function ArticleComponent_Factory(t) {
          return new (t || ArticleComponent)();
        };

        ArticleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineComponent']({
          type: ArticleComponent,
          selectors: [['article']],
          inputs: {
            articleItem: 'articleItem'
          },
          decls: 11,
          vars: 10,
          consts: [
            [1, 'article-item-img-container'],
            [1, 'article-item-img'],
            [1, 'article-item-date'],
            [1, 'article-item-title'],
            [1, 'article-item-desc'],
            ['target', '_blank', 1, 'article-item-link']
          ],
          template: function ArticleComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div', 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](1, 'img', 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](2, 'div', 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpipe'](4, 'date');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](5, 'div', 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](7, 'div', 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](9, 'a', 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                10,
                ' \u05DC\u05DB\u05EA\u05D1\u05D4 \u05D4\u05DE\u05DC\u05D0\u05D4\n'
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵattribute'](
                'src',
                ctx.articleItem.imgUrl,
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵsanitizeUrl']
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate1'](
                ' ',
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpipeBind4'](
                  4,
                  5,
                  ctx.articleItem.publishDate,
                  'mediumDate',
                  null,
                  'he'
                ),
                '\n'
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate1'](' ', ctx.articleItem.title, '\n');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate1'](' ', ctx.articleItem.desc, '\n');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵattribute'](
                'href',
                ctx.articleItem.href,
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵsanitizeUrl']
              );
            }
          },
          pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__['DatePipe']],
          styles: [
            '[_nghost-%COMP%] {\n  flex: 0 1 auto;\n  margin: 15px;\n  padding: 25px 20px;\n  max-width: 370px;\n  display: flex;\n  flex-direction: column;\n  justify-content: stretch;\n  background-color: white;\n  border: 2px solid #00a099;\n  border-radius: 5px;\n}\n[_nghost-%COMP%]:hover {\n  background-color: #00a099;\n}\n[_nghost-%COMP%]:hover   .article-item-date[_ngcontent-%COMP%] {\n  color: white;\n}\n[_nghost-%COMP%]:hover   .article-item-title[_ngcontent-%COMP%] {\n  color: white;\n}\n[_nghost-%COMP%]:hover   .article-item-desc[_ngcontent-%COMP%] {\n  color: white;\n}\n[_nghost-%COMP%]:hover   .article-item-link[_ngcontent-%COMP%] {\n  color: white;\n}\n[_nghost-%COMP%]   .article-item-img-container[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 0 0 auto;\n  width: 100%;\n  padding-top: 60%;\n  margin-bottom: 15px;\n}\n[_nghost-%COMP%]   .article-item-img-container[_ngcontent-%COMP%]   .article-item-img[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: white;\n}\n[_nghost-%COMP%]   .article-item-date[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  font-size: 16px;\n  font-family: "Heebo";\n  color: #4b4b4b;\n  margin-bottom: 15px;\n}\n@media only screen and (max-width: 768px) {\n  [_nghost-%COMP%]   .article-item-date[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n[_nghost-%COMP%]   .article-item-title[_ngcontent-%COMP%] {\n  flex: 0 0 60px;\n  font-size: 20px;\n  font-family: "Heebo";\n  font-weight: bold;\n  color: #082551;\n  margin-bottom: 15px;\n}\n@media only screen and (max-width: 768px) {\n  [_nghost-%COMP%]   .article-item-title[_ngcontent-%COMP%] {\n    font-size: 16px;\n    line-height: 1.3;\n  }\n}\n[_nghost-%COMP%]   .article-item-desc[_ngcontent-%COMP%] {\n  flex: 0 0 65px;\n  font-size: 16px;\n  font-family: "Heebo";\n  color: #4b4b4b;\n  line-height: 1.25;\n  margin-bottom: 25px;\n}\n@media only screen and (max-width: 768px) {\n  [_nghost-%COMP%]   .article-item-desc[_ngcontent-%COMP%] {\n    font-size: 14px;\n    text-overflow: ellipsis;\n    overflow: hidden;\n  }\n}\n[_nghost-%COMP%]   .article-item-link[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  font-size: 16px;\n  font-family: "Heebo";\n  font-weight: bold;\n  color: #082551;\n  text-decoration: none;\n}\n@media only screen and (max-width: 768px) {\n  [_nghost-%COMP%]   .article-item-link[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n[_nghost-%COMP%]   .article-item-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJ0aWNsZXMvY29tcG9uZW50cy9hcnRpY2xlL0M6XFxVc2Vyc1xcVGVoaWxhXFxsYXN0XFxvdXJCcm9cXG91ci1icm90aGVycy13ZWIvc3JjXFxhcHBcXGFydGljbGVzXFxjb21wb25lbnRzXFxhcnRpY2xlXFxhcnRpY2xlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcnRpY2xlcy9jb21wb25lbnRzL2FydGljbGUvYXJ0aWNsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHdCQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FDQ0Y7QURDRTtFQUNFLHlCQUFBO0FDQ0o7QURDSTtFQUNFLFlBQUE7QUNDTjtBRENJO0VBQ0UsWUFBQTtBQ0NOO0FEQ0k7RUFDRSxZQUFBO0FDQ047QURDSTtFQUNFLFlBQUE7QUNDTjtBREdFO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNESjtBREdJO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUNETjtBREtFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ0hKO0FES0k7RUFQRjtJQVFJLGVBQUE7RUNGSjtBQUNGO0FES0U7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUNISjtBREtJO0VBUkY7SUFTSSxlQUFBO0lBQ0EsZ0JBQUE7RUNGSjtBQUNGO0FES0U7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNISjtBREtJO0VBUkY7SUFTSSxlQUFBO0lBQ0EsdUJBQUE7SUFDQSxnQkFBQTtFQ0ZKO0FBQ0Y7QURLRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQ0hKO0FES0k7RUFSRjtJQVNJLGVBQUE7RUNGSjtBQUNGO0FESUk7RUFDRSwwQkFBQTtBQ0ZOIiwiZmlsZSI6InNyYy9hcHAvYXJ0aWNsZXMvY29tcG9uZW50cy9hcnRpY2xlL2FydGljbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZmxleDogMCAxIGF1dG87XHJcbiAgbWFyZ2luOiAxNXB4O1xyXG4gIHBhZGRpbmc6IDI1cHggMjBweDtcclxuICBtYXgtd2lkdGg6IDM3MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0cmV0Y2g7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDAsIDE2MCwgMTUzKTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDE2MCwgMTUzKTtcclxuXHJcbiAgICAuYXJ0aWNsZS1pdGVtLWRhdGUge1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgICAuYXJ0aWNsZS1pdGVtLXRpdGxlIHtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gICAgLmFydGljbGUtaXRlbS1kZXNjIHtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gICAgLmFydGljbGUtaXRlbS1saW5rIHtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmFydGljbGUtaXRlbS1pbWctY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZsZXg6IDAgMCBhdXRvO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nLXRvcDogNjAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuXHJcbiAgICAuYXJ0aWNsZS1pdGVtLWltZyB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5hcnRpY2xlLWl0ZW0tZGF0ZSB7XHJcbiAgICBmbGV4OiAwIDAgYXV0bztcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnSGVlYm8nO1xyXG4gICAgY29sb3I6IHJnYig3NSwgNzUsIDc1KTtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcblxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYXJ0aWNsZS1pdGVtLXRpdGxlIHtcclxuICAgIGZsZXg6IDAgMCA2MHB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdIZWVibyc7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjMDgyNTUxO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuMztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5hcnRpY2xlLWl0ZW0tZGVzYyB7XHJcbiAgICBmbGV4OiAwIDAgNjVweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnSGVlYm8nO1xyXG4gICAgY29sb3I6IHJnYig3NSwgNzUsIDc1KTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjI1O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYXJ0aWNsZS1pdGVtLWxpbmsge1xyXG4gICAgZmxleDogMCAwIGF1dG87XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LWZhbWlseTogJ0hlZWJvJztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICMwODI1NTE7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI6aG9zdCB7XG4gIGZsZXg6IDAgMSBhdXRvO1xuICBtYXJnaW46IDE1cHg7XG4gIHBhZGRpbmc6IDI1cHggMjBweDtcbiAgbWF4LXdpZHRoOiAzNzBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzdHJldGNoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAycHggc29saWQgIzAwYTA5OTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuOmhvc3Q6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhMDk5O1xufVxuOmhvc3Q6aG92ZXIgLmFydGljbGUtaXRlbS1kYXRlIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuOmhvc3Q6aG92ZXIgLmFydGljbGUtaXRlbS10aXRsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbjpob3N0OmhvdmVyIC5hcnRpY2xlLWl0ZW0tZGVzYyB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbjpob3N0OmhvdmVyIC5hcnRpY2xlLWl0ZW0tbGluayB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbjpob3N0IC5hcnRpY2xlLWl0ZW0taW1nLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxleDogMCAwIGF1dG87XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXRvcDogNjAlO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuOmhvc3QgLmFydGljbGUtaXRlbS1pbWctY29udGFpbmVyIC5hcnRpY2xlLWl0ZW0taW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuOmhvc3QgLmFydGljbGUtaXRlbS1kYXRlIHtcbiAgZmxleDogMCAwIGF1dG87XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1mYW1pbHk6IFwiSGVlYm9cIjtcbiAgY29sb3I6ICM0YjRiNGI7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIDpob3N0IC5hcnRpY2xlLWl0ZW0tZGF0ZSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG59XG46aG9zdCAuYXJ0aWNsZS1pdGVtLXRpdGxlIHtcbiAgZmxleDogMCAwIDYwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwiSGVlYm9cIjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMDgyNTUxO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICA6aG9zdCAuYXJ0aWNsZS1pdGVtLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuMztcbiAgfVxufVxuOmhvc3QgLmFydGljbGUtaXRlbS1kZXNjIHtcbiAgZmxleDogMCAwIDY1cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1mYW1pbHk6IFwiSGVlYm9cIjtcbiAgY29sb3I6ICM0YjRiNGI7XG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICA6aG9zdCAuYXJ0aWNsZS1pdGVtLWRlc2Mge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG59XG46aG9zdCAuYXJ0aWNsZS1pdGVtLWxpbmsge1xuICBmbGV4OiAwIDAgYXV0bztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LWZhbWlseTogXCJIZWVib1wiO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMwODI1NTE7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgOmhvc3QgLmFydGljbGUtaXRlbS1saW5rIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbn1cbjpob3N0IC5hcnRpY2xlLWl0ZW0tbGluazpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufSJdfQ== */'
          ],
          changeDetection: 0
        });
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            ArticleComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                args: [
                  {
                    selector: 'article',
                    templateUrl: './article.component.html',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__['ChangeDetectionStrategy'].OnPush,
                    styleUrls: ['./article.component.scss']
                  }
                ]
              }
            ],
            null,
            {
              articleItem: [
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
    './src/app/articles/components/articles-container/articles-container.component.ts':
      /*!****************************************************************************************!*\
    !*** ./src/app/articles/components/articles-container/articles-container.component.ts ***!
    \****************************************************************************************/

      /*! exports provided: ArticlesContainerComponent */

      /***/
      function srcAppArticlesComponentsArticlesContainerArticlesContainerComponentTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'ArticlesContainerComponent', function() {
          return ArticlesContainerComponent;
        });
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */

        var _assets_articles1_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../assets/articles1.json */
          './src/app/articles/assets/articles1.json'
        );

        var _assets_articles1_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/ __webpack_require__.t(
          /*! ../../assets/articles1.json */
          './src/app/articles/assets/articles1.json',
          1
        );
        /* harmony import */

        var _assets_articles2_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../assets/articles2.json */
          './src/app/articles/assets/articles2.json'
        );

        var _assets_articles2_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/ __webpack_require__.t(
          /*! ../../assets/articles2.json */
          './src/app/articles/assets/articles2.json',
          1
        );
        /* harmony import */

        var _assets_articles3_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../assets/articles3.json */
          './src/app/articles/assets/articles3.json'
        );

        var _assets_articles3_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/ __webpack_require__.t(
          /*! ../../assets/articles3.json */
          './src/app/articles/assets/articles3.json',
          1
        );
        /* harmony import */

        var _assets_articles4_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../assets/articles4.json */
          './src/app/articles/assets/articles4.json'
        );

        var _assets_articles4_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/ __webpack_require__.t(
          /*! ../../assets/articles4.json */
          './src/app/articles/assets/articles4.json',
          1
        );
        /* harmony import */

        var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @angular/common */
          './node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js'
        );
        /* harmony import */

        var _articles_switcher_articles_switcher_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../articles-switcher/articles-switcher.component */
          './src/app/articles/components/articles-switcher/articles-switcher.component.ts'
        );
        /* harmony import */

        var _article_article_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../article/article.component */
          './src/app/articles/components/article/article.component.ts'
        );

        function ArticlesContainerComponent_div_7_ng_container_1_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementContainerStart'](0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](1, 'article', 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementContainerEnd']();
          }

          if (rf & 2) {
            var articleItem_r237 = ctx.$implicit;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('articleItem', articleItem_r237);
          }
        }

        function ArticlesContainerComponent_div_7_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div', 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
              1,
              ArticlesContainerComponent_div_7_ng_container_1_Template,
              2,
              1,
              'ng-container',
              8
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }

          if (rf & 2) {
            var ctx_r235 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngForOf', ctx_r235.articles);
          }
        }

        var ArticlesContainerComponent = /*#__PURE__*/ (function() {
          function ArticlesContainerComponent() {
            _classCallCheck(this, ArticlesContainerComponent);

            this.articles = [];
            this.maxArticlesPages = 4;
            this.initialArticlesPage = 1;
            this.handleSelectedNumberUpdate(this.initialArticlesPage);
          }

          _createClass(ArticlesContainerComponent, [
            {
              key: 'handleSelectedNumberUpdate',
              value: function handleSelectedNumberUpdate(item) {
                var articlesFromJson = undefined;

                switch (item) {
                  case 1: {
                    articlesFromJson = _assets_articles1_json__WEBPACK_IMPORTED_MODULE_1__['articles'];
                    break;
                  }

                  case 2: {
                    articlesFromJson = _assets_articles2_json__WEBPACK_IMPORTED_MODULE_2__['articles'];
                    break;
                  }

                  case 3: {
                    articlesFromJson = _assets_articles3_json__WEBPACK_IMPORTED_MODULE_3__['articles'];
                    break;
                  }

                  case 4: {
                    articlesFromJson = _assets_articles4_json__WEBPACK_IMPORTED_MODULE_4__['articles'];
                    break;
                  }

                  default: {
                    articlesFromJson = _assets_articles1_json__WEBPACK_IMPORTED_MODULE_1__['articles'];
                    break;
                  }
                }

                this.articles = [];

                var _iterator = _createForOfIteratorHelper(articlesFromJson),
                  _step;

                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                    var jsonArticle = _step.value;
                    this.articles.push({
                      imgUrl: jsonArticle.imgUrl,
                      publishDate: new Date(jsonArticle.publishDate),
                      title: jsonArticle.title,
                      desc: jsonArticle.desc,
                      href: jsonArticle.href
                    });
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }
              }
            }
          ]);

          return ArticlesContainerComponent;
        })();

        ArticlesContainerComponent.ɵfac = function ArticlesContainerComponent_Factory(t) {
          return new (t || ArticlesContainerComponent)();
        };

        ArticlesContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineComponent']({
          type: ArticlesContainerComponent,
          selectors: [['articles-container']],
          decls: 9,
          vars: 3,
          consts: [
            ['src', '../../../assets/img/articlesHeader.jpg.png', 1, 'image-header'],
            [1, 'site-divider'],
            ['data-aos', 'fade-up', 'data-aos-duration', '1000', 1, 'small-heading'],
            ['data-aos', 'fade-up', 'data-aos-duration', '1000', 1, 'medium-heading'],
            [1, 'articles-container'],
            ['class', 'articles-list-container', 4, 'ngIf'],
            [3, 'initialNumber', 'maxNumber', 'selectedNumberUpdate'],
            [1, 'articles-list-container'],
            [4, 'ngFor', 'ngForOf'],
            [3, 'articleItem']
          ],
          template: function ArticlesContainerComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](0, 'img', 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](1, 'div', 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](2, 'h1', 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                3,
                ' \u05D0\u05D5\u05D3\u05D5\u05EA \u05D4\u05E2\u05DE\u05D5\u05EA\u05D4\n'
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](4, 'h2', 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                5,
                ' \u05E2\u05DC\u05D9\u05E0\u05D5 \u05D1\u05EA\u05E7\u05E9\u05D5\u05E8\u05EA\n'
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](6, 'div', 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                7,
                ArticlesContainerComponent_div_7_Template,
                2,
                1,
                'div',
                5
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](8, 'articles-switcher', 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'selectedNumberUpdate',
                function ArticlesContainerComponent_Template_articles_switcher_selectedNumberUpdate_8_listener($event) {
                  return ctx.handleSelectedNumberUpdate($event);
                }
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngIf', ctx.articles.length > 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('initialNumber', ctx.initialArticlesPage)(
                'maxNumber',
                ctx.maxArticlesPages
              );
            }
          },
          directives: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__['NgIf'],
            _articles_switcher_articles_switcher_component__WEBPACK_IMPORTED_MODULE_6__['ArticlesSwitcherComponent'],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__['NgForOf'],
            _article_article_component__WEBPACK_IMPORTED_MODULE_7__['ArticleComponent']
          ],
          styles: [
            '.articles-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.articles-container[_ngcontent-%COMP%]   .articles-list-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 400px);\n  justify-content: center;\n}\n@media only screen and (max-width: 1200px) {\n  .articles-container[_ngcontent-%COMP%]   .articles-list-container[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 300px);\n  }\n}\n@media only screen and (max-width: 1000px) {\n  .articles-container[_ngcontent-%COMP%]   .articles-list-container[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 200px);\n  }\n}\n.articles-container[_ngcontent-%COMP%]   .articles-list-container[_ngcontent-%COMP%]   .circle-top-right[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 30%;\n  transform: translate(40%, -40%);\n}\n@media only screen and (max-width: 1200px) {\n  .articles-container[_ngcontent-%COMP%]   .articles-list-container[_ngcontent-%COMP%]   .circle-top-right[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.articles-container[_ngcontent-%COMP%]   .articles-list-container[_ngcontent-%COMP%]   .circle-middle-left[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 70%;\n  right: 57%;\n  left: 105px;\n  z-index: -1;\n  transform: translate(-25%, -50%);\n}\n@media only screen and (max-width: 1600px) {\n  .articles-container[_ngcontent-%COMP%]   .articles-list-container[_ngcontent-%COMP%]   .circle-middle-left[_ngcontent-%COMP%] {\n    left: 20px;\n  }\n}\n@media only screen and (max-width: 1200px) {\n  .articles-container[_ngcontent-%COMP%]   .articles-list-container[_ngcontent-%COMP%]   .circle-middle-left[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJ0aWNsZXMvY29tcG9uZW50cy9hcnRpY2xlcy1jb250YWluZXIvQzpcXFVzZXJzXFxUZWhpbGFcXGxhc3RcXG91ckJyb1xcb3VyLWJyb3RoZXJzLXdlYi9zcmNcXGFwcFxcYXJ0aWNsZXNcXGNvbXBvbmVudHNcXGFydGljbGVzLWNvbnRhaW5lclxcYXJ0aWNsZXMtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcnRpY2xlcy9jb21wb25lbnRzL2FydGljbGVzLWNvbnRhaW5lci9hcnRpY2xlcy1jb250YWluZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQ0NGO0FEQ0U7RUFDRSxhQUFBO0VBQ0EsdUNBQUE7RUFDQSx1QkFBQTtBQ0NKO0FEQ0k7RUFMRjtJQU1JLHVDQUFBO0VDRUo7QUFDRjtBREFJO0VBVEY7SUFVSSx1Q0FBQTtFQ0dKO0FBQ0Y7QURESTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLCtCQUFBO0FDR047QURETTtFQUxGO0lBTUksYUFBQTtFQ0lOO0FBQ0Y7QURESTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUVBLGdDQUFBO0FDRU47QURBTTtFQVRGO0lBVUksVUFBQTtFQ0dOO0FBQ0Y7QURETTtFQWJGO0lBY0ksYUFBQTtFQ0lOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcnRpY2xlcy9jb21wb25lbnRzL2FydGljbGVzLWNvbnRhaW5lci9hcnRpY2xlcy1jb250YWluZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXJ0aWNsZXMtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gIC5hcnRpY2xlcy1saXN0LWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgNDAwcHgpO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMzAwcHgpO1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDIwMHB4KTtcclxuICAgIH1cclxuXHJcbiAgICAuY2lyY2xlLXRvcC1yaWdodCB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgcmlnaHQ6IDMwJTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNDAlLCAtNDAlKTtcclxuXHJcbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jaXJjbGUtbWlkZGxlLWxlZnQge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogNzAlO1xyXG4gICAgICByaWdodDogNTclO1xyXG4gICAgICBsZWZ0OiAxMDVweDtcclxuICAgICAgei1pbmRleDogLTE7XHJcblxyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMjUlLCAtNTAlKTtcclxuXHJcbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTYwMHB4KSB7XHJcbiAgICAgICAgbGVmdDogMjBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi5hcnRpY2xlcy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5hcnRpY2xlcy1jb250YWluZXIgLmFydGljbGVzLWxpc3QtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgNDAwcHgpO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC5hcnRpY2xlcy1jb250YWluZXIgLmFydGljbGVzLWxpc3QtY29udGFpbmVyIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAzMDBweCk7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gIC5hcnRpY2xlcy1jb250YWluZXIgLmFydGljbGVzLWxpc3QtY29udGFpbmVyIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAyMDBweCk7XG4gIH1cbn1cbi5hcnRpY2xlcy1jb250YWluZXIgLmFydGljbGVzLWxpc3QtY29udGFpbmVyIC5jaXJjbGUtdG9wLXJpZ2h0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMzAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg0MCUsIC00MCUpO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgLmFydGljbGVzLWNvbnRhaW5lciAuYXJ0aWNsZXMtbGlzdC1jb250YWluZXIgLmNpcmNsZS10b3AtcmlnaHQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbi5hcnRpY2xlcy1jb250YWluZXIgLmFydGljbGVzLWxpc3QtY29udGFpbmVyIC5jaXJjbGUtbWlkZGxlLWxlZnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNzAlO1xuICByaWdodDogNTclO1xuICBsZWZ0OiAxMDVweDtcbiAgei1pbmRleDogLTE7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0yNSUsIC01MCUpO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjAwcHgpIHtcbiAgLmFydGljbGVzLWNvbnRhaW5lciAuYXJ0aWNsZXMtbGlzdC1jb250YWluZXIgLmNpcmNsZS1taWRkbGUtbGVmdCB7XG4gICAgbGVmdDogMjBweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgLmFydGljbGVzLWNvbnRhaW5lciAuYXJ0aWNsZXMtbGlzdC1jb250YWluZXIgLmNpcmNsZS1taWRkbGUtbGVmdCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufSJdfQ== */'
          ],
          changeDetection: 0
        });
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            ArticlesContainerComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                args: [
                  {
                    selector: 'articles-container',
                    templateUrl: './articles-container.component.html',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__['ChangeDetectionStrategy'].OnPush,
                    styleUrls: ['./articles-container.component.scss']
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
        /***/
      },

    /***/
    './src/app/articles/components/articles-switcher/articles-switcher.component.ts':
      /*!**************************************************************************************!*\
    !*** ./src/app/articles/components/articles-switcher/articles-switcher.component.ts ***!
    \**************************************************************************************/

      /*! exports provided: ArticlesSwitcherComponent */

      /***/
      function srcAppArticlesComponentsArticlesSwitcherArticlesSwitcherComponentTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'ArticlesSwitcherComponent', function() {
          return ArticlesSwitcherComponent;
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

        var _c0 = function _c0(a0) {
          return {
            color: a0
          };
        };

        function ArticlesSwitcherComponent_ng_container_2_button_1_Template(rf, ctx) {
          if (rf & 1) {
            var _r244 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵgetCurrentView']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'button', 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
              'click',
              function ArticlesSwitcherComponent_ng_container_2_button_1_Template_button_click_0_listener() {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵrestoreView'](_r244);

                var i_r240 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']().index;

                var ctx_r242 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();

                return ctx_r242.handleItemClick(i_r240);
              }
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }

          if (rf & 2) {
            var i_r240 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']().index;

            var ctx_r241 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
              'ngStyle',
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpureFunction1'](
                2,
                _c0,
                i_r240 === ctx_r241.selectedNumber ? '#00a099' : 'gray'
              )
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate1'](' 0', i_r240, ' ');
          }
        }

        function ArticlesSwitcherComponent_ng_container_2_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementContainerStart'](0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
              1,
              ArticlesSwitcherComponent_ng_container_2_button_1_Template,
              2,
              4,
              'button',
              2
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementContainerEnd']();
          }

          if (rf & 2) {
            var i_r240 = ctx.index;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngIf', i_r240 !== 0);
          }
        }

        var ArticlesSwitcherComponent = /*#__PURE__*/ (function() {
          function ArticlesSwitcherComponent() {
            _classCallCheck(this, ArticlesSwitcherComponent);

            this.selectedNumberUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            this.startMarker = '<';
            this.endMarker = '>';
            this.counter = Array;
          }

          _createClass(ArticlesSwitcherComponent, [
            {
              key: 'ngOnInit',
              value: function ngOnInit() {
                this.selectedNumber = this.initialNumber;
              }
            },
            {
              key: 'handleNextItemSelected',
              value: function handleNextItemSelected() {
                this.selectedNumber = (this.selectedNumber++ % this.maxNumber) + 1;
                this.selectedNumberUpdate.emit(this.selectedNumber);
              }
            },
            {
              key: 'handlePreviousItemSelected',
              value: function handlePreviousItemSelected() {
                var tempSelectedNumber = this.selectedNumber - 1;
                this.selectedNumber = tempSelectedNumber === 0 ? this.maxNumber : tempSelectedNumber;
                this.selectedNumberUpdate.emit(this.selectedNumber);
              }
            },
            {
              key: 'handleItemClick',
              value: function handleItemClick(item) {
                this.selectedNumber = item;
                this.selectedNumberUpdate.emit(this.selectedNumber);
              }
            }
          ]);

          return ArticlesSwitcherComponent;
        })();

        ArticlesSwitcherComponent.ɵfac = function ArticlesSwitcherComponent_Factory(t) {
          return new (t || ArticlesSwitcherComponent)();
        };

        ArticlesSwitcherComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineComponent']({
          type: ArticlesSwitcherComponent,
          selectors: [['articles-switcher']],
          inputs: {
            maxNumber: 'maxNumber',
            initialNumber: 'initialNumber'
          },
          outputs: {
            selectedNumberUpdate: 'selectedNumberUpdate'
          },
          decls: 5,
          vars: 3,
          consts: [
            [1, 'item', 3, 'click'],
            [4, 'ngFor', 'ngForOf'],
            ['class', 'item', 3, 'ngStyle', 'click', 4, 'ngIf'],
            [1, 'item', 3, 'ngStyle', 'click']
          ],
          template: function ArticlesSwitcherComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'button', 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'click',
                function ArticlesSwitcherComponent_Template_button_click_0_listener() {
                  return ctx.handlePreviousItemSelected();
                }
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                2,
                ArticlesSwitcherComponent_ng_container_2_Template,
                2,
                1,
                'ng-container',
                1
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](3, 'button', 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'click',
                function ArticlesSwitcherComponent_Template_button_click_3_listener() {
                  return ctx.handleNextItemSelected();
                }
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate'](ctx.endMarker);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngForOf', ctx.counter(ctx.maxNumber + 1));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate'](ctx.startMarker);
            }
          },
          directives: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__['NgForOf'],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__['NgIf'],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__['NgStyle']
          ],
          styles: [
            '[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: row-reverse;\n  margin: 24px 0px 24px 0px;\n  cursor: pointer;\n  justify-content: center;\n}\n[_nghost-%COMP%]   .item[_ngcontent-%COMP%] {\n  margin: 0px 20px 0px 20px;\n  font-size: 16px;\n  font-weight: 500;\n  font-family: "Heebo";\n  color: gray;\n  cursor: pointer;\n  background: none;\n  border: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJ0aWNsZXMvY29tcG9uZW50cy9hcnRpY2xlcy1zd2l0Y2hlci9DOlxcVXNlcnNcXFRlaGlsYVxcbGFzdFxcb3VyQnJvXFxvdXItYnJvdGhlcnMtd2ViL3NyY1xcYXBwXFxhcnRpY2xlc1xcY29tcG9uZW50c1xcYXJ0aWNsZXMtc3dpdGNoZXJcXGFydGljbGVzLXN3aXRjaGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcnRpY2xlcy9jb21wb25lbnRzL2FydGljbGVzLXN3aXRjaGVyL2FydGljbGVzLXN3aXRjaGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLDJCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QUNDRjtBRENFO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9hcnRpY2xlcy9jb21wb25lbnRzL2FydGljbGVzLXN3aXRjaGVyL2FydGljbGVzLXN3aXRjaGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG4gIG1hcmdpbjogMjRweCAwcHggMjRweCAwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAuaXRlbSB7XHJcbiAgICBtYXJnaW46IDBweCAyMHB4IDBweCAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtZmFtaWx5OiAnSGVlYm8nO1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gIH1cclxufVxyXG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgbWFyZ2luOiAyNHB4IDBweCAyNHB4IDBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbjpob3N0IC5pdGVtIHtcbiAgbWFyZ2luOiAwcHggMjBweCAwcHggMjBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LWZhbWlseTogXCJIZWVib1wiO1xuICBjb2xvcjogZ3JheTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG59Il19 */'
          ],
          changeDetection: 0
        });
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            ArticlesSwitcherComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                args: [
                  {
                    selector: 'articles-switcher',
                    templateUrl: './articles-switcher.component.html',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__['ChangeDetectionStrategy'].OnPush,
                    styleUrls: ['./articles-switcher.component.scss']
                  }
                ]
              }
            ],
            null,
            {
              maxNumber: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input']
                }
              ],
              initialNumber: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input']
                }
              ],
              selectedNumberUpdate: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Output']
                }
              ]
            }
          );
        })();
        /***/
      }
  }
]);
//# sourceMappingURL=articles-articles-module-es5.js.map
