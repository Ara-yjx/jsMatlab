webpackJsonp([2],{

/***/ 110:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/matrix/matrix.module": [
		274,
		1
	],
	"../pages/variables/variables.module": [
		275,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 151;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var HelloIonicPage = (function () {
    function HelloIonicPage() {
    }
    HelloIonicPage = __decorate([
        core_1.Component({
            selector: 'page-hello-ionic',template:/*ion-inline-start:"D:\Ionic-Cli-Proj\src\pages\hello-ionic\hello-ionic.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Hato:</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <h3>月が綺麗ですね、レイ。</h3>\n\n  <p>\n    <!-- <button ion-button color="primary" menuToggle>Toggle Menu</button> -->\n  </p>\n\n</ion-content>\n'/*ion-inline-end:"D:\Ionic-Cli-Proj\src\pages\hello-ionic\hello-ionic.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], HelloIonicPage);
    return HelloIonicPage;
}());
exports.HelloIonicPage = HelloIonicPage;
//# sourceMappingURL=hello-ionic.js.map

/***/ }),

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ionic_angular_1 = __webpack_require__(31);
/**
 * Generated class for the ConsolePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var ConsolePage = (function () {
    function ConsolePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.outputText = [];
        this.inputText = "";
        console.log("CONSTRUCTOR CALLED");
        // this.dim = 0;
    }
    ConsolePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConsolePage');
        // setTimeout(() => {
        //   if(this.content) this.content.scrollToBottom(300);
        // }, 1000);
        if (this.content) {
            this.dim = this.content.getContentDimensions();
            this.content.scrollTo(0, this.dim.scrollHeight, 300);
        }
        ;
    };
    ConsolePage.prototype.ionViewWillLeave = function () {
        console.log('ionViewWillLeave ConsolePage');
    };
    ConsolePage.prototype.printcmd = function () {
        this.outputText.push(this.inputText);
        this.inputText = "";
        if (this.content) {
            this.dim = this.content.getContentDimensions();
            this.content.scrollTo(0, this.dim.scrollHeight, 300);
        }
        ;
        // Harah: using scrollTo(.., scrollHeight, ..) is better then scroolToBottom
        // because the latter does not always scroll to the very end
    };
    ConsolePage.prototype.clearcmd = function (fab) {
        fab.close();
        this.outputText = [];
        if (this.content) {
            this.dim = this.content.getContentDimensions();
            this.content.scrollTo(0, this.dim.scrollHeight, 300);
        }
        ;
    };
    __decorate([
        core_1.ViewChild(ionic_angular_1.Content),
        __metadata("design:type", ionic_angular_1.Content)
    ], ConsolePage.prototype, "content", void 0);
    ConsolePage = __decorate([
        core_1.Component({
            selector: 'page-console',template:/*ion-inline-start:"D:\Ionic-Cli-Proj\src\pages\console\console.html"*/'<!--\n  Generated template for the ConsolePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n\n  <ion-navbar>\n    <ion-title>console</ion-title>\n  </ion-navbar>\n\n</ion-header> -->\n\n\n<ion-content padding direction="y" class="has-footer" >\n  <ion-fab top right #fab>\n    <button ion-fab color="primary">\n      <ion-icon name="more"></ion-icon>\n    </button>\n    <ion-fab-list>\n      <button ion-fab (click)="clearcmd(fab)">\n        <ion-icon name="trash"></ion-icon>\n      </button>\n      <button ion-fab>\n        <ion-icon name="book"></ion-icon>\n      </button>\n    </ion-fab-list>\n  </ion-fab>\n  <!-- auto closing fab: -->\n  <!-- https://forum.ionicframework.com/t/ionic-close-fab-menu-when-button-pressed/73269/2 -->\n  <p></p>\n  <p></p>\n\n\n  <p *ngFor="let t of outputText">\n    {{ t }}\n  </p>\n\n</ion-content>\n<ion-footer>\n  <form (ngSubmit)="printcmd()">\n    <ion-grid no-padding no-margin>\n      <ion-row nowrap justify-content-end align-items-stretch>\n        <ion-col >\n        <!-- <div class="console_wrapper"> -->\n          <ion-item>\n            <ion-input type="text" clearInput\n            name="INPUTTEXT"\n            [(ngModel)]="inputText"\n            placeholder="type commands here =w="\n            class="inputText" no-padding no-margin>\n            </ion-input>\n          </ion-item>\n        <!-- </div> -->\n        </ion-col>\n        <ion-col col-auto>\n          <button ion-button type="submit" color="primary">run</button>\n\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n\n\n\n</ion-footer>\n'/*ion-inline-end:"D:\Ionic-Cli-Proj\src\pages\console\console.html"*/,
        }),
        __metadata("design:paramtypes", [ionic_angular_1.NavController, ionic_angular_1.NavParams])
    ], ConsolePage);
    return ConsolePage;
}());
exports.ConsolePage = ConsolePage;
//# sourceMappingURL=console.js.map

/***/ }),

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_dynamic_1 = __webpack_require__(198);
var app_module_1 = __webpack_require__(221);
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__(29);
var core_1 = __webpack_require__(0);
var ionic_angular_1 = __webpack_require__(31);
var app_component_1 = __webpack_require__(264);
var hello_ionic_1 = __webpack_require__(191);
var item_details_1 = __webpack_require__(273);
var console_1 = __webpack_require__(192);
var status_bar_1 = __webpack_require__(193);
var splash_screen_1 = __webpack_require__(196);
var variables_1 = __webpack_require__(99);
var AppModule = (function () {
    function AppModule() {
        this.allVars = [];
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.MyApp,
                hello_ionic_1.HelloIonicPage,
                item_details_1.ItemDetailsPage,
                // ListPage,
                console_1.ConsolePage,
                variables_1.VariablesPage
            ],
            imports: [
                platform_browser_1.BrowserModule,
                ionic_angular_1.IonicModule.forRoot(app_component_1.MyApp, {}, {
                    links: [
                        { loadChildren: '../pages/matrix/matrix.module#MatrixPageModule', name: 'MatrixPage', segment: 'matrix', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/variables/variables.module#VariablesPageModule', name: 'VariablesPage', segment: 'variables', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [ionic_angular_1.IonicApp],
            entryComponents: [
                app_component_1.MyApp,
                hello_ionic_1.HelloIonicPage,
                item_details_1.ItemDetailsPage,
                // ListPage,
                console_1.ConsolePage,
                variables_1.VariablesPage
            ],
            providers: [
                status_bar_1.StatusBar,
                splash_screen_1.SplashScreen,
                { provide: core_1.ErrorHandler, useClass: ionic_angular_1.IonicErrorHandler }
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 264:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ionic_angular_1 = __webpack_require__(31);
var hello_ionic_1 = __webpack_require__(191);
var console_1 = __webpack_require__(192);
var variables_1 = __webpack_require__(99);
var status_bar_1 = __webpack_require__(193);
var splash_screen_1 = __webpack_require__(196);
var MyApp = (function () {
    function MyApp(platform, menu, statusBar, splashScreen) {
        this.platform = platform;
        this.menu = menu;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        // make HelloIonicPage the root (or first) page
        this.rootPage = hello_ionic_1.HelloIonicPage;
        this.initializeApp();
        // set our app's pages
        this.pages = [
            { title: 'Variables', component: variables_1.VariablesPage },
            { title: 'Hello', component: hello_ionic_1.HelloIonicPage },
            // { title: 'My First List', component: ListPage },
            { title: 'Console', component: console_1.ConsolePage }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // close the menu when clicking a link from the menu
        this.menu.close();
        // navigate to the new page if it is not the current page
        this.nav.setRoot(page.component);
    };
    __decorate([
        core_1.ViewChild(ionic_angular_1.Nav),
        __metadata("design:type", ionic_angular_1.Nav)
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        core_1.Component({template:/*ion-inline-start:"D:\Ionic-Cli-Proj\src\app\app.html"*/'<script type="text/javascript" src="../../assets/js/interact.min.js"></script>\n<ion-menu [content]="content">\n\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Pages</ion-title>\n    </ion-toolbar>\n\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-header no-padding no-margin>\n  <ion-toolbar no-padding no-margin>\n    <ion-grid no-padding no-margin>\n      <ion-row nowrap no-padding no-margin>\n        <ion-col class="navbar_col" *ngFor="let p of pages"\n        no-padding no-margin>\n\n          <button ion-button\n          outline\n          class="navbar_button"\n          no-padding no-margin\n          color="dark"\n          size="small"\n          (click)="openPage(p)"\n\n          >\n            {{p.title}}\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n</ion-content>\n\n<ion-footer>\n  <!-- <ion-toolbar right>\n\n    <button ion-buttons\n    clear small round color="light"\n    ion-item *ngFor="let p of pages"\n    (click)="openPage(p)"\n    >\n      {{p.title}}\n    </button>\n\n  </ion-toolbar> -->\n\n\n\n</ion-footer>\n'/*ion-inline-end:"D:\Ionic-Cli-Proj\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [ionic_angular_1.Platform,
            ionic_angular_1.MenuController,
            status_bar_1.StatusBar,
            splash_screen_1.SplashScreen])
    ], MyApp);
    return MyApp;
}());
exports.MyApp = MyApp;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 273:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ionic_angular_1 = __webpack_require__(31);
var ItemDetailsPage = (function () {
    function ItemDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
    }
    ItemDetailsPage = __decorate([
        core_1.Component({
            selector: 'page-item-details',template:/*ion-inline-start:"D:\Ionic-Cli-Proj\src\pages\item-details\item-details.html"*/'<ion-header>\n  <ion-navbar>\n    <button menuToggle *ngIf="!selectedItem">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Item Details</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <h3 text-center *ngIf="selectedItem">\n    {{selectedItem.title}}\n    <ion-icon [name]="selectedItem.icon"></ion-icon>\n  </h3>\n  <h4 text-center *ngIf="selectedItem">\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </h4>\n</ion-content>\n'/*ion-inline-end:"D:\Ionic-Cli-Proj\src\pages\item-details\item-details.html"*/
        }),
        __metadata("design:paramtypes", [ionic_angular_1.NavController, ionic_angular_1.NavParams])
    ], ItemDetailsPage);
    return ItemDetailsPage;
}());
exports.ItemDetailsPage = ItemDetailsPage;
//# sourceMappingURL=item-details.js.map

/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ionic_angular_1 = __webpack_require__(31);
/**
 * Generated class for the VariablesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VariablesPage = (function () {
    function VariablesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // this.pm = PetryMatrix;
    }
    VariablesPage.prototype.ionViewDidLoad = function () {
        // this.pm.testlog();
    };
    VariablesPage = __decorate([
        core_1.Component({
            selector: 'page-variables',template:/*ion-inline-start:"D:\Ionic-Cli-Proj\src\pages\variables\variables.html"*/'<!--\n  Generated template for the VariablesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<script type="text/javascript" src="../../assets/js/interact.min.js"></script>\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>variables</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <p>RUA!!!</p>\n  <!-- <p>{{ }}</p> -->\n  <!-- <page-matrix></page-matrix> -->\n  <div id="drag-1" class="draggable">\n    <p> You can drag one element </p>\n  </div>\n  <div id="drag-2" class="draggable">\n    <p> with each pointer </p>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\Ionic-Cli-Proj\src\pages\variables\variables.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof ionic_angular_1.NavController !== "undefined" && ionic_angular_1.NavController) === "function" && _a || Object, typeof (_b = typeof ionic_angular_1.NavParams !== "undefined" && ionic_angular_1.NavParams) === "function" && _b || Object])
    ], VariablesPage);
    return VariablesPage;
    var _a, _b;
}());
exports.VariablesPage = VariablesPage;
//# sourceMappingURL=variables.js.map

/***/ })

},[197]);
//# sourceMappingURL=main.js.map