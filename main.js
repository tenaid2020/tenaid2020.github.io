(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\HOME\Documents\My portfolio\Projects\T - M - S\V1.2.1\material-dashboard-angular2-master\src\main.ts */"zUnb");


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./home.component.html */ "Gd4t");
/* harmony import */ var _home_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.component.scss */ "bdh1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var app_shared_services_response_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/services/response.service */ "KHAO");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = /** @class */ (function () {
    function HomeComponent(responseService) {
        this.responseService = responseService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.isHandset = this.responseService.getResponseObservable();
    };
    HomeComponent.ctorParameters = function () { return [
        { type: app_shared_services_response_service__WEBPACK_IMPORTED_MODULE_3__["ResponseService"] }
    ]; };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-home',
            template: _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_home_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [app_shared_services_response_service__WEBPACK_IMPORTED_MODULE_3__["ResponseService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "A3xY":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyB88t8_wbN3qAsPL9X7TEYQu83Jv9oBrdk",
        authDomain: "tenaid-5269b.firebaseapp.com",
        projectId: "tenaid-5269b",
        storageBucket: "tenaid-5269b.appspot.com",
        messagingSenderId: "384432208347",
        appId: "1:384432208347:web:de6985f00ae4cc3b5a8ffe",
        measurementId: "G-0KYCX3MHMN"
    }
};


/***/ }),

/***/ "D44p":
/*!*************************************************!*\
  !*** ./src/app/shared/shell/shell.component.ts ***!
  \*************************************************/
/*! exports provided: ShellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShellComponent", function() { return ShellComponent; });
/* harmony import */ var _raw_loader_shell_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./shell.component.html */ "dUb4");
/* harmony import */ var _shell_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shell.component.css */ "kYU4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/filter */ "fjAU");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_Subscription__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/Subscription */ "NTzu");
/* harmony import */ var rxjs_Subscription__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_Subscription__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! perfect-scrollbar */ "t/UT");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _services_response_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/response.service */ "KHAO");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ShellComponent = /** @class */ (function () {
    function ShellComponent(location, responseService, afAuth, router) {
        this.location = location;
        this.responseService = responseService;
        this.afAuth = afAuth;
        this.router = router;
        this.isHandset = this.responseService.getResponseObservable();
        this.yScrollStack = [];
        this.subscript = new rxjs_Subscription__WEBPACK_IMPORTED_MODULE_6__["Subscription"]();
    }
    ShellComponent.prototype.ngOnInit = function () {
        var _this = this;
        var isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;
        this.subscript = this.afAuth.authState.subscribe(function (value) {
            console.log(value);
            if (value) {
                _this.isLogged = true;
            }
            else {
                _this.isLogged = false;
            }
        });
        if (isWindows && !document.getElementsByTagName('body')[0].classList.contains('sidebar-mini')) {
            // if we are on windows OS we activate the perfectScrollbar function
            document.getElementsByTagName('body')[0].classList.add('perfect-scrollbar-on');
        }
        else {
            document.getElementsByTagName('body')[0].classList.remove('perfect-scrollbar-off');
        }
        var elemMainPanel = document.querySelector('.main-panel');
        var elemSidebar = document.querySelector('.sidebar .sidebar-wrapper');
        this.location.subscribe(function (ev) {
            _this.lastPoppedUrl = ev.url;
        });
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationStart"]) {
                if (event.url != _this.lastPoppedUrl)
                    _this.yScrollStack.push(window.scrollY);
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationEnd"]) {
                if (event.url == _this.lastPoppedUrl) {
                    _this.lastPoppedUrl = undefined;
                    window.scrollTo(0, _this.yScrollStack.pop());
                }
                else
                    window.scrollTo(0, 0);
            }
        });
        this._router = this.router.events.filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationEnd"]; }).subscribe(function (event) {
            elemMainPanel.scrollTop = 0;
            elemSidebar.scrollTop = 0;
        });
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            var ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__["default"](elemMainPanel);
            ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__["default"](elemSidebar);
        }
        var window_width = jquery__WEBPACK_IMPORTED_MODULE_9__(window).width();
        var $sidebar = jquery__WEBPACK_IMPORTED_MODULE_9__('.sidebar');
        var $sidebar_responsive = jquery__WEBPACK_IMPORTED_MODULE_9__('body > .navbar-collapse');
        var $sidebar_img_container = $sidebar.find('.sidebar-background');
        if (window_width > 767) {
            if (jquery__WEBPACK_IMPORTED_MODULE_9__('.fixed-plugin .dropdown').hasClass('show-dropdown')) {
                jquery__WEBPACK_IMPORTED_MODULE_9__('.fixed-plugin .dropdown').addClass('open');
            }
        }
        jquery__WEBPACK_IMPORTED_MODULE_9__('.fixed-plugin a').click(function (event) {
            // Alex if we click on switch, stop propagation of the event, so the dropdown will not be hide, otherwise we set the  section active
            if (jquery__WEBPACK_IMPORTED_MODULE_9__(this).hasClass('switch-trigger')) {
                if (event.stopPropagation) {
                    event.stopPropagation();
                }
                else if (window.event) {
                    window.event.cancelBubble = true;
                }
            }
        });
        jquery__WEBPACK_IMPORTED_MODULE_9__('.fixed-plugin .badge').click(function () {
            var $full_page_background = jquery__WEBPACK_IMPORTED_MODULE_9__('.full-page-background');
            jquery__WEBPACK_IMPORTED_MODULE_9__(this).siblings().removeClass('active');
            jquery__WEBPACK_IMPORTED_MODULE_9__(this).addClass('active');
            var new_color = jquery__WEBPACK_IMPORTED_MODULE_9__(this).data('color');
            if ($sidebar.length !== 0) {
                $sidebar.attr('data-color', new_color);
            }
            if ($sidebar_responsive.length != 0) {
                $sidebar_responsive.attr('data-color', new_color);
            }
        });
        jquery__WEBPACK_IMPORTED_MODULE_9__('.fixed-plugin .img-holder').click(function () {
            var $full_page_background = jquery__WEBPACK_IMPORTED_MODULE_9__('.full-page-background');
            jquery__WEBPACK_IMPORTED_MODULE_9__(this).parent('li').siblings().removeClass('active');
            jquery__WEBPACK_IMPORTED_MODULE_9__(this).parent('li').addClass('active');
            var new_image = jquery__WEBPACK_IMPORTED_MODULE_9__(this).find("img").attr('src');
            if ($sidebar_img_container.length != 0) {
                $sidebar_img_container.fadeOut('fast', function () {
                    $sidebar_img_container.css('background-image', 'url("' + new_image + '")');
                    $sidebar_img_container.fadeIn('fast');
                });
            }
            if ($full_page_background.length != 0) {
                $full_page_background.fadeOut('fast', function () {
                    $full_page_background.css('background-image', 'url("' + new_image + '")');
                    $full_page_background.fadeIn('fast');
                });
            }
            if ($sidebar_responsive.length != 0) {
                $sidebar_responsive.css('background-image', 'url("' + new_image + '")');
            }
        });
    };
    ShellComponent.prototype.ngAfterViewInit = function () {
        this.runOnRouteChange();
    };
    ShellComponent.prototype.isMaps = function (path) {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice(1);
        if (path == titlee) {
            return false;
        }
        else {
            return true;
        }
    };
    ShellComponent.prototype.runOnRouteChange = function () {
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            var elemMainPanel = document.querySelector('.main-panel');
            var ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__["default"](elemMainPanel);
            ps.update();
        }
    };
    ShellComponent.prototype.isMac = function () {
        var bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    };
    ShellComponent.prototype.ngOnDestroy = function () {
        this.subscript.unsubscribe();
    };
    ShellComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
        { type: _services_response_service__WEBPACK_IMPORTED_MODULE_10__["ResponseService"] },
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuth"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    ShellComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-shell',
            template: _raw_loader_shell_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_shell_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
            _services_response_service__WEBPACK_IMPORTED_MODULE_10__["ResponseService"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuth"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], ShellComponent);
    return ShellComponent;
}());



/***/ }),

/***/ "EtQq":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./navbar.component.html */ "zRkE");
/* harmony import */ var _navbar_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar.component.css */ "cIR/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var rxjs_Subscription__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/Subscription */ "NTzu");
/* harmony import */ var rxjs_Subscription__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_Subscription__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(location, element, afAuth, router) {
        this.element = element;
        this.afAuth = afAuth;
        this.router = router;
        this.listTitles = ['home', 'authentication'];
        this.mobile_menu_visible = 0;
        this.subscript = new rxjs_Subscription__WEBPACK_IMPORTED_MODULE_6__["Subscription"]();
        this.location = location;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        //   this.listTitles = ROUTES.filter(listTitle => listTitle);
        this.subscript = this.afAuth.authState.subscribe(function (user) {
            if (user) {
                _this.isLogged = true;
            }
            else {
                _this.isLogged = false;
            }
        });
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
        this.router.events.subscribe(function (event) {
            _this.currentPage = _this.location.prepareExternalUrl(_this.location.path());
            _this.sidebarClose();
            var $layer = document.getElementsByClassName('close-layer')[0];
            if ($layer) {
                $layer.remove();
                _this.mobile_menu_visible = 0;
            }
        });
    };
    NavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        body.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    ;
    NavbarComponent.prototype.sidebarClose = function () {
        var body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
    };
    ;
    NavbarComponent.prototype.sidebarToggle = function () {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        var $toggle = document.getElementsByClassName('navbar-toggler')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
        var body = document.getElementsByTagName('body')[0];
        if (this.mobile_menu_visible == 1) {
            // $('html').removeClass('nav-open');
            body.classList.remove('nav-open');
            if ($layer) {
                $layer.remove();
            }
            setTimeout(function () {
                $toggle.classList.remove('toggled');
            }, 400);
            this.mobile_menu_visible = 0;
        }
        else {
            setTimeout(function () {
                $toggle.classList.add('toggled');
            }, 430);
            var $layer = document.createElement('div');
            $layer.setAttribute('class', 'close-layer');
            if (body.querySelectorAll('.main-panel')) {
                document.getElementsByClassName('main-panel')[0].appendChild($layer);
            }
            else if (body.classList.contains('off-canvas-sidebar')) {
                document.getElementsByClassName('wrapper-full-page')[0].appendChild($layer);
            }
            setTimeout(function () {
                $layer.classList.add('visible');
            }, 100);
            $layer.onclick = function () {
                body.classList.remove('nav-open');
                this.mobile_menu_visible = 0;
                $layer.classList.remove('visible');
                setTimeout(function () {
                    $layer.remove();
                    $toggle.classList.remove('toggled');
                }, 400);
            }.bind(this);
            body.classList.add('nav-open');
            this.mobile_menu_visible = 1;
        }
    };
    ;
    NavbarComponent.prototype.getTitle = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(1);
        }
        for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        return 'Dashboard';
    };
    NavbarComponent.prototype.goto = function (page) {
        this.router.navigate(['/authentication']);
    };
    NavbarComponent.prototype.signout = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.afAuth.signOut()];
                    case 1:
                        _a.sent();
                        this.router.navigate(['/authentication']);
                        return [2 /*return*/];
                }
            });
        });
    };
    NavbarComponent.prototype.ngOnDestroy = function () {
        this.subscript.unsubscribe();
    };
    NavbarComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-navbar',
            template: _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_navbar_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "F1ZI":
/*!****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "Gd4t":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n    <div class=\"container-fluid\" style=\"margin-left: 0; margin-right: 0;\">\r\n    <div class=\"row\" style=\"overflow-x: hidden;\">\r\n      <div class=\"col-md-6\">\r\n        <h1 style=\"margin-bottom: 2rem; text-align: center;\" class=\"main-title\">WHAT IS TENAID?</h1>\r\n        <div class=\"row\">\r\n        <p style=\"margin-bottom: 10px; margin-left: 25px;\">Tenaid is a management app that helps Landlords manage thier tenants in a simple and effective way.</p>\r\n      </div>\r\n      <div class=\"row\" style=\"margin-top: 30px; margin-bottom: 30px;\">\r\n        <div class=\"col\">\r\n          <div class=\"row\">\r\n            <div class=\"col-1\">\r\n                <img src=\"assets/img/smartphone64.png\">\r\n              \r\n            </div>\r\n            <div class=\"col\">\r\n                <span style=\"font-size: 20px; margin-left: 50px;\" class=\"titleThing\">Automatic SMS</span>\r\n              <p style=\"margin-left: 50px;\">SMSs are sent automatically to tenants that have not paid their rent.</p>\r\n            </div>\r\n              \r\n    \r\n          </div>\r\n          \r\n        </div>\r\n        <div class=\"col\">\r\n            <div class=\"row\">\r\n              <div class=\"col-1\">\r\n                  <img  src=\"assets/img/megaphone.png\">\r\n                \r\n              </div>\r\n              <div class=\"col\" style=\"margin-top: 2px;\">\r\n                  <span style=\"font-size: 20px; margin-left: 50px;\" class=\"titleThing\">Announcements</span>\r\n                <p style=\"margin-left: 50px;\">Announcements can be sent straight to tenants through an easy SMS publishing system</p>\r\n              </div>\r\n                \r\n      \r\n            </div>\r\n            \r\n          </div>\r\n      </div>\r\n    \r\n      <div class=\"row\">\r\n        <div class=\"col\">\r\n          <div class=\"row\">\r\n            <div class=\"col-1\">\r\n                <img src=\"assets/img/budget.png\">\r\n              \r\n            </div>\r\n            <div class=\"col\">\r\n                <span style=\"font-size: 20px; margin-left: 50px;\" class=\"titleThing\">Calculations</span>\r\n              <p style=\"margin-left: 50px;\">Calculations, including interest per day, are done automatically</p>\r\n            </div>\r\n              \r\n    \r\n          </div>\r\n          \r\n        </div>\r\n        <div class=\"col\">\r\n            <div class=\"row\">\r\n              <div class=\"col-1\">\r\n                  <img src=\"assets/img/graph.png\">\r\n                \r\n              </div>\r\n              <div class=\"col\" style=\"margin-top: 2px;\">\r\n                  <span style=\"font-size: 20px; margin-left: 50px;\" class=\"titleThing\">Performance</span>\r\n                  <p style=\"margin-left: 50px;\">Track your business performance from anwhere</p>\r\n              </div>\r\n                \r\n      \r\n            </div>\r\n            \r\n          </div>\r\n      </div>\r\n    \r\n      </div>\r\n    \r\n      <div *ngIf=\"!(isHandset |async)\" class=\"col-md-6\">\r\n        <img class=\"img-column2\" src=\"../../../assets/img/server-1.png\">\r\n      </div>\r\n      </div>\r\n    </div>\r\n    </div>\r\n    \r\n    \r\n    \r\n    \r\n    <div class=\"section\">\r\n        <div class=\"container-fluid\" style=\"margin-left: 0; margin-right: 0;\">\r\n    \r\n    <div class=\"row gray-back\">\r\n    \r\n          <div *ngIf=\"!(isHandset |async)\" class=\"col-md-6\">\r\n    <img  class=\"img-column\"  src=\"../../../assets/img/insurance.png\">\r\n    \r\n            </div>\r\n          \r\n            <div class=\"col-md-6\">\r\n              <div style=\"display: block; text-align: center; margin-left: auto; margin-right: auto;\">\r\n                <h2 class=\"green-house\">MANAGEMENT ON A WHOLE NEW LEVEL</h2>\r\n                <div class=\"green-paragraph\" style=\"text-align: justify; margin-left: auto; margin-right: auto;\">\r\n                <p >\r\n                  With the rise of technology in today's world, many tasks are much easier to perform.\r\n                  TMS is making it easier for landlords to keep track of their tenants, by relieving them \r\n                  of certain tasks that are time consuming. With TMS, tasks like reminding tenants of rent that is \r\n                  due, calculating rent payment interest, amongst others, are a thing of the past.\r\n                </p>\r\n              </div>\r\n    \r\n              <div class=\"row\">\r\n                  <button role=\"link\" s\r\n                  tyle=\"margin-left: auto; margin-right: auto;\"  \r\n                  type=\"button\"\r\n                  routerLink=\"/authentication\" \r\n                  class=\"btn btn-info btn-round\">Register</button>\r\n              </div>\r\n            </div>\r\n            </div>\r\n          \r\n    \r\n      \r\n    </div>\r\n    </div>\r\n    </div>\r\n    </div>");

/***/ }),

/***/ "KHAO":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/response.service.ts ***!
  \*****************************************************/
/*! exports provided: ResponseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseService", function() { return ResponseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResponseService = /** @class */ (function () {
    function ResponseService(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
    }
    /**
     * Get the breakpointObserver observable.
     */
    ResponseService.prototype.getResponseObservable = function () {
        return this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (_a) {
            var matches = _a.matches;
            if (matches) {
                return true;
            }
            else {
                return false;
            }
        }));
    };
    ResponseService.ctorParameters = function () { return [
        { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"] }
    ]; };
    ResponseService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]])
    ], ResponseService);
    return ResponseService;
}());



/***/ }),

/***/ "N/25":
/*!***********************************************!*\
  !*** ./src/app/auth/services/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ "JZFu");
/* harmony import */ var _shared_services_uielements_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/uielements.service */ "U9fw");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/internal/observable/of */ "I65S");
/* harmony import */ var rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_8__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};









var AuthService = /** @class */ (function () {
    function AuthService(angularFireAuth, angularFireStore, uiElementsService, router) {
        this.angularFireAuth = angularFireAuth;
        this.angularFireStore = angularFireStore;
        this.uiElementsService = uiElementsService;
        this.router = router;
        this.authSubject = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.setUser();
    }
    /**
  * update the current user when the authentication state changes
  */
    AuthService.prototype.setUser = function () {
        var _this = this;
        this.user$ = this.angularFireAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(function (user) {
            if (user) {
                return _this.getUser(user.uid);
            }
            else {
                return Object(rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_8__["of"])(null);
            }
        }));
        this.user$.subscribe(function (usr) {
            _this.currentUser = usr;
        });
    };
    /**
     * takes care of google login
     */
    AuthService.prototype.onGoogleLogin = function () {
        var _this = this;
        this.angularFireAuth
            .signInWithPopup(new firebase__WEBPACK_IMPORTED_MODULE_3__["default"].auth.GoogleAuthProvider)
            .then(function (res) { return __awaiter(_this, void 0, void 0, function () {
            var user, result, error_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.uiElementsService.addSpinner();
                        user = {
                            name: res.user.displayName,
                            email: res.user.email,
                            uid: res.user.uid
                        };
                        if (!res.additionalUserInfo.isNewUser) return [3 /*break*/, 4];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.addNewUser(user.uid, user)];
                    case 2:
                        result = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        this.uiElementsService.addSnackBar(error_1);
                        return [3 /*break*/, 4];
                    case 4:
                        this.uiElementsService.removeSpinner();
                        this.uiElementsService.addSnackBar('Welcome ' + res.user.displayName);
                        window.setTimeout(function () {
                            _this.router.navigate(['/profile']);
                        }, 100);
                        return [2 /*return*/];
                }
            });
        }); })
            .catch(function (err) {
        });
    };
    /**
     * Add a new user to the 'Users' collection.
     * @param user User. The details of the user to be added to the database.
     */
    AuthService.prototype.addNewUser = function (userId, user) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.angularFireStore
                        .collection('users')
                        .doc(userId)
                        .set(Object.assign({}, user))];
            });
        });
    };
    /**
     * Log user out and redirect to authentication page.
     */
    AuthService.prototype.logOut = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.angularFireAuth.signOut()];
                    case 1:
                        _a.sent();
                        this.router.navigate(['/authentication']);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Assign value to currentUser.
     * @param user User. The user being set
     */
    // setUser(user: User){
    //   this.currentUser = user;
    // }
    /**
     * Get a copy of the user assigned.
     */
    AuthService.prototype.getUser = function (userId) {
        return this.angularFireStore
            .collection('users')
            .doc(userId).valueChanges();
    };
    /**
     *  Update the user's profile details. (Note this will update the values of the auth, and not the collection 'Users')
     * @param data {displayName: sting, photoURL: string}. Update the users profile values
     */
    AuthService.prototype.updateUserProfile = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                user = firebase__WEBPACK_IMPORTED_MODULE_3__["default"].auth().currentUser;
                return [2 /*return*/, user.updateProfile({
                        displayName: data.displayName,
                        photoURL: data.photoURL
                    })];
            });
        });
    };
    AuthService.ctorParameters = function () { return [
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"] },
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
        { type: _shared_services_uielements_service__WEBPACK_IMPORTED_MODULE_4__["UIElementsService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"],
            _shared_services_uielements_service__WEBPACK_IMPORTED_MODULE_4__["UIElementsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "PC/O":
/*!*******************************************!*\
  !*** ./src/app/auth/guards/auth.guard.ts ***!
  \*******************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shared_services_uielements_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/uielements.service */ "U9fw");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/auth.service */ "N/25");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuthGuard = /** @class */ (function () {
    function AuthGuard(angularFireAuth, uiElementsService, authService, router) {
        this.angularFireAuth = angularFireAuth;
        this.uiElementsService = uiElementsService;
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        // const user = await this.angularFireAuth.currentUser;
        // const isLoggedIn = !!user;
        // if(!isLoggedIn){
        //   this.uiElementsService.addSnackBar('Must be logged in');
        //   console.log(isLoggedIn);
        //   window.setTimeout(() => {
        //     this.router.navigate(['/authentication'])
        //   }, 100)
        // }
        // return isLoggedIn;
        var _this = this;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.authService.user$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (authState) {
            if (authState) {
                _this.authService.authSubject.next(true);
                return true;
            }
            else {
                _this.uiElementsService.addSnackBar('Must be logged in');
                _this.router.navigate(['/authentication'], {
                    queryParams: { ref: state.url, test: 'login guard' }
                });
                return false;
            }
        }));
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"] },
        { type: _shared_services_uielements_service__WEBPACK_IMPORTED_MODULE_5__["UIElementsService"] },
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"],
            _shared_services_uielements_service__WEBPACK_IMPORTED_MODULE_5__["UIElementsService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shell_shell_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shell/shell.component */ "D44p");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navbar/navbar.component */ "EtQq");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "sRhs");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ "jQpT");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};



























var components = [_shell_shell_component__WEBPACK_IMPORTED_MODULE_2__["ShellComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]];
var modules = [ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerModule"],
    _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_24__["MatSnackBarModule"],
    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_22__["MatButtonToggleModule"],
    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__["MatDialogModule"],
    _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"],
    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_26__["FlexLayoutModule"],
    _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
    _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"],
    _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__["MatDividerModule"],
    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__["MatTooltipModule"],
    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_15__["MatSlideToggleModule"],
    _angular_router__WEBPACK_IMPORTED_MODULE_21__["RouterModule"],
    _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"],
    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__["MatProgressSpinnerModule"],
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatFormFieldModule"],
    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
    _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
    _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"],
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
    _angular_forms__WEBPACK_IMPORTED_MODULE_20__["ReactiveFormsModule"]];
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: __spreadArrays(components),
            imports: __spreadArrays([
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ], modules),
            exports: __spreadArrays(components, modules),
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.css */ "A3xY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_uielements_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/services/uielements.service */ "U9fw");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(uiElementsService) {
        this.uiElementsService = uiElementsService;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.ctorParameters = function () { return [
        { type: _shared_services_uielements_service__WEBPACK_IMPORTED_MODULE_3__["UIElementsService"] }
    ]; };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-root',
            template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_shared_services_uielements_service__WEBPACK_IMPORTED_MODULE_3__["UIElementsService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "U9fw":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/uielements.service.ts ***!
  \*******************************************************/
/*! exports provided: UIElementsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIElementsService", function() { return UIElementsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UIElementsService = /** @class */ (function () {
    function UIElementsService(snackBarService, spinnerService) {
        this.snackBarService = snackBarService;
        this.spinnerService = spinnerService;
    }
    /**
     * Display snackbar
     * @param msg string. The content to be shown on the snackBar
     */
    UIElementsService.prototype.addSnackBar = function (msg) {
        var _this = this;
        this.snackBarService.open(msg, 'Ok', {
            duration: 5000
        });
    };
    /**
     * Display loading spinner.
     */
    UIElementsService.prototype.addSpinner = function () {
        this.spinnerService.show();
    };
    /**
     * Hide loading spinner
     */
    UIElementsService.prototype.removeSpinner = function () {
        this.spinnerService.hide();
    };
    UIElementsService.ctorParameters = function () { return [
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"] }
    ]; };
    UIElementsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"]])
    ], UIElementsService);
    return UIElementsService;
}());



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-shell >\r\n    <router-outlet></router-outlet>\r\n    <!-- <mat-spinner \r\n    style=\"position: fixed; top: 50%; left: 50%; z-index: 100;\"\r\n    ></mat-spinner> -->\r\n    <ngx-spinner\r\n      bdColor=\"rgba(51,51,51,0.8)\"\r\n      size=\"medium\"\r\n      style=\"position: fixed; top: 50%; left: 50%; z-index: 100;\"\r\n      color=\"#fff\"\r\n      type=\"ball-scale-multiple\">\r\n      <p style=\"font-size: 20px; color: white\">Loading...</p>\r\n    </ngx-spinner>\r\n</app-shell>\r\n\r\n");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routing */ "beVS");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @agm/core */ "pxUr");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/shared.module */ "PCNd");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! environments/environment */ "AytR");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_10__["AngularFireModule"].initializeApp(environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].firebaseConfig),
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__["AngularFirestoreModule"],
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_12__["AngularFireAuthModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_7__["AgmCoreModule"].forRoot({
                    apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
                })
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "bdh1":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("p {\n  max-width: 820px;\n  font-size: 1.2rem;\n}\n\n.titleThing {\n  font-family: \"Anton\", sans-serif;\n}\n\n.main-title {\n  font-family: \"Ubuntu Condensed\", sans-serif;\n}\n\n.gray-back {\n  background-color: #f9f9f2;\n  width: 100%;\n}\n\n.img-column {\n  display: block;\n  max-height: 500px;\n  float: right;\n}\n\n.img-column2 {\n  display: block;\n  max-height: 500px;\n  float: left;\n}\n\n.pad1 {\n  padding-top: 250px;\n  padding-bottom: 250px;\n}\n\n.green-house {\n  font-family: \"Passion One\", cursive;\n}\n\n.green-paragraph {\n  max-width: 550px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0NBQUE7QUFDSjs7QUFFQTtFQUNJLDJDQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtFQUNBLFdBQUE7QUFDSjs7QUFDQTtFQUNJLGNBQUE7RUFFQSxpQkFBQTtFQUNKLFlBQUE7QUFDQTs7QUFFQTtFQUNJLGNBQUE7RUFFQSxpQkFBQTtFQUNKLFdBQUE7QUFBQTs7QUFJQTtFQUNJLGtCQUFBO0VBQ0EscUJBQUE7QUFESjs7QUFJQTtFQUVBLG1DQUFBO0FBRkE7O0FBTUE7RUFDSSxnQkFBQTtBQUhKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicHtcclxuICAgIG1heC13aWR0aDogODIwcHg7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxufVxyXG5cclxuLnRpdGxlVGhpbmd7XHJcbiAgICBmb250LWZhbWlseTogJ0FudG9uJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLm1haW4tdGl0bGV7XHJcbiAgICBmb250LWZhbWlseTogJ1VidW50dSBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uZ3JheS1iYWNre1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmMjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5pbWctY29sdW1ue1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgIFxyXG4gICAgbWF4LWhlaWdodDogNTAwcHg7XHJcbmZsb2F0OiByaWdodDtcclxuXHJcbn1cclxuLmltZy1jb2x1bW4ye1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgIFxyXG4gICAgbWF4LWhlaWdodDogNTAwcHg7XHJcbmZsb2F0OiBsZWZ0O1xyXG5cclxufVxyXG5cclxuLnBhZDF7XHJcbiAgICBwYWRkaW5nLXRvcDogMjUwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjUwcHg7XHJcbn1cclxuXHJcbi5ncmVlbi1ob3VzZXtcclxuLy8gICAgZm9udC1mYW1pbHk6ICdMdWNraWVzdCBHdXknLCBjdXJzaXZlO1xyXG5mb250LWZhbWlseTogJ1Bhc3Npb24gT25lJywgY3Vyc2l2ZTtcclxuLy9mb250LWZhbWlseTogJ0NoYW5nYSBPbmUnLCBjdXJzaXZlO1xyXG59XHJcblxyXG4uZ3JlZW4tcGFyYWdyYXBoe1xyXG4gICAgbWF4LXdpZHRoOiA1NTBweDtcclxufSJdfQ== */");

/***/ }),

/***/ "beVS":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/guards/auth.guard */ "PC/O");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
    },
    { path: 'authentication', loadChildren: function () { return Promise.all(/*! import() | auth-auth-module */[__webpack_require__.e("common"), __webpack_require__.e("auth-auth-module")]).then(__webpack_require__.bind(null, /*! ./auth/auth.module */ "Yj9t")).then(function (m) { return m.AuthModule; }); }
    },
    {
        path: 'profile',
        loadChildren: function () { return Promise.all(/*! import() | profile-profile-module */[__webpack_require__.e("common"), __webpack_require__.e("profile-profile-module")]).then(__webpack_require__.bind(null, /*! ./profile/profile.module */ "cRhG")).then(function (m) { return m.ProfileModule; }); },
        canActivate: [_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, {
                    useHash: true
                })
            ],
            exports: [],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "cIR/":
/*!****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "crnd":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "crnd";

/***/ }),

/***/ "dUb4":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/shell/shell.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\r\n    <div \r\n        *ngIf=\"((isHandset | async) || ((afAuth.authState) | async))\"\r\n    class=\"sidebar\" data-color=\"danger\" data-background-color=\"white\" data-image=\"./assets/img/sidebar-1.jpg\">\r\n        <app-sidebar></app-sidebar>\r\n        <div class=\"sidebar-background\" style=\"background-image: url(./assets/img/sidebar-4.jpg)\"></div>\r\n    </div>\r\n    <!-- <div [ngClass]=\"{'main-panel-overide': !isLogged, 'main-panel': isLogged}\"> -->\r\n        <div class=\"main-panel\" [ngStyle]=\"{'width': isLogged ? '' : '100%'}\">\r\n        <app-navbar></app-navbar>\r\n        <ng-content ></ng-content>\r\n        \r\n        <!-- <div *ngIf=\"isMaps('maps')\">\r\n            <app-footer></app-footer>\r\n        </div> -->\r\n    </div>\r\n\r\n</div>\r\n<!-- Buy-Modal-angular -->\r\n<div class=\"modal modal-angular fade\" id=\"buy\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\r\n<div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n        <div class=\"modal-body text-center\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n            <h4 class=\"margin-top\">\r\n                Free Version\r\n            </h4>\r\n            <div class=\"separator\"></div>\r\n            <a href=\"https://www.creative-tim.com/product/material-dashboard\" class=\"modal-button\" target=\"_blank\">\r\n                <div class=\"wrapper-card\">\r\n                    <div class=\"image-container\">\r\n                        <img src=\"./assets/img/html.png\" alt=\"unloaded\">\r\n                    </div>\r\n                    Html5\r\n                    <div class=\"separator\"></div>\r\n                    <div class=\"product-type\">\r\n                        FREE\r\n                    </div>\r\n                </div>\r\n            </a>\r\n            <a href=\"https://www.creative-tim.com/product/material-dashboard-angular2\" class=\"modal-button\" target=\"_blank\">\r\n                <div class=\"wrapper-card\">\r\n                    <div class=\"image-container image-angular-cli\">\r\n                        <img src=\"./assets/img/angular.png\" alt=\"unloaded\">\r\n                    </div>\r\n                    Angular\r\n                    <div class=\"separator\"></div>\r\n                    <div class=\"product-type\">\r\n                        FREE\r\n                    </div>\r\n                </div>\r\n            </a>\r\n            <h4>\r\n                PRO Version\r\n            </h4>\r\n            <div class=\"separator\"></div>\r\n            <a href=\"https://www.creative-tim.com/product/material-dashboard-pro\" class=\"modal-button\" target=\"_blank\">\r\n                <div class=\"image-container\">\r\n                    <img src=\"./assets/img/html.png\" alt=\"unloaded\">\r\n                </div>\r\n                Html5\r\n                <div class=\"separator\"></div>\r\n                <div class=\"price\">\r\n                    from\r\n                    <span>\r\n                        49\r\n                        <i class=\"fa fa-usd\" aria-hidden=\"true\"></i>\r\n                    </span>\r\n                </div>\r\n            </a>\r\n            <a href=\"https://www.creative-tim.com/product/material-dashboard-pro-angular2\" class=\"modal-button\" target=\"_blank\">\r\n                <div class=\"image-container image-angular-cli\">\r\n                    <img src=\"./assets/img/angular.png\" alt=\"unloaded\">\r\n                </div>\r\n                Angular\r\n                <div class=\"separator\"></div>\r\n                <div class=\"price\">\r\n                    from\r\n                    <span>\r\n                        59\r\n                        <i class=\"fa fa-usd\" aria-hidden=\"true\"></i>\r\n                    </span>\r\n                </div>\r\n            </a>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n</div>\r\n");

/***/ }),

/***/ "jGP6":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"footer \">\n    <div class=\"container-fluid\">\n        <nav class=\"pull-left\">\n            <ul>\n                <li>\n                    <a href=\"https://www.creative-tim.com\">\n                        Creative Tim\n                    </a>\n                </li>\n                <li>\n                    <a href=\"https://creative-tim.com/about-us\">\n                        About Us\n                    </a>\n                </li>\n                <li>\n                    <a href=\"http://blog.creative-tim.com\">\n                        Blog\n                    </a>\n                </li>\n                <li>\n                    <a href=\"https://www.creative-tim.com/license\">\n                        Licenses\n                    </a>\n                </li>\n            </ul>\n        </nav>\n        <div class=\"copyright pull-right\">\n            &copy;\n            {{test | date: 'yyyy'}}, made with love by\n            <a href=\"https://www.creative-tim.com\" target=\"_blank\">Creative Tim</a> for a better web.\n        </div>\n    </div>\n</footer>\n");

/***/ }),

/***/ "jQpT":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./footer.component.html */ "jGP6");
/* harmony import */ var _footer_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.component.css */ "F1ZI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.ctorParameters = function () { return []; };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-footer',
            template: _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_footer_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "kYU4":
/*!**************************************************!*\
  !*** ./src/app/shared/shell/shell.component.css ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9zaGVsbC9zaGVsbC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "nwwT":
/*!******************************************************!*\
  !*** ./src/app/shared/sidebar/sidebar.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "sRhs":
/*!*****************************************************!*\
  !*** ./src/app/shared/sidebar/sidebar.component.ts ***!
  \*****************************************************/
/*! exports provided: ROUTES_LOGGED, ROUTES_N_LOGGED, SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES_LOGGED", function() { return ROUTES_LOGGED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES_N_LOGGED", function() { return ROUTES_N_LOGGED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _raw_loader_sidebar_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./sidebar.component.html */ "xWrl");
/* harmony import */ var _sidebar_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar.component.css */ "nwwT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var ROUTES_LOGGED = [
    { path: '/profile', title: 'Dashboard', icon: 'dashboard', class: '' },
];
var ROUTES_N_LOGGED = [
    { path: '/authentication', title: 'Login', icon: '', class: '' }
];
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(angularFireAuth, router) {
        this.angularFireAuth = angularFireAuth;
        this.router = router;
    }
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.angularFireAuth.authState
            .subscribe(function (user) {
            if (user) {
                _this.menuItems = ROUTES_LOGGED.filter(function (menuItem) { return menuItem; });
                _this.isLogged = true;
            }
            else {
                _this.menuItems = ROUTES_N_LOGGED.filter(function (menuItem) { return menuItem; });
                _this.isLogged = false;
            }
        });
    };
    SidebarComponent.prototype.isMobileMenu = function () {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
    ;
    SidebarComponent.prototype.logout = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.angularFireAuth.signOut()];
                    case 1:
                        _a.sent();
                        this.router.navigate(['/authentication']);
                        return [2 /*return*/];
                }
            });
        });
    };
    SidebarComponent.ctorParameters = function () { return [
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-sidebar',
            template: _raw_loader_sidebar_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_sidebar_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "xWrl":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/sidebar/sidebar.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"logo\">\r\n    <a href=\"javascript:void(0)\" routerLink=\"/\" class=\"simple-text\">\r\n        <div class=\"logo-img\">\r\n            \r\n        </div>\r\n        TENAID\r\n    </a>\r\n</div>\r\n<div class=\"sidebar-wrapper\">\r\n    <ul class=\"nav\">\r\n        <li routerLinkActive=\"active\" *ngFor=\"let menuItem of menuItems\" class=\"{{menuItem.class}} nav-item\">\r\n            <a class=\"nav-link\" [routerLink]=\"[menuItem.path]\">\r\n                <i class=\"material-icons\">{{menuItem.icon}}</i>\r\n                <p>{{menuItem.title}}</p>\r\n            </a>\r\n        </li>\r\n    </ul>\r\n    <div *ngIf=\"isMobileMenu()\">\r\n   \r\n        <ul class=\"nav navbar-nav nav-mobile-menu\">\r\n            <li *ngIf=\"isLogged\" (click)=\"logout()\">\r\n                <a class=\"nav-link\" >\r\n                    <i class=\"material-icons\">logout</i>\r\n                    <p>Logout</p>\r\n                </a>\r\n            </li>\r\n        </ul>\r\n      </div>\r\n</div>\r\n");

/***/ }),

/***/ "zRkE":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-transparent  navbar-absolute fixed-top\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"navbar-wrapper\">\r\n          <a \r\n          routerLink=\"/\"\r\n          class=\"navbar-brand\" href=\"javascript:void(0)\">\r\n              {{(currentPage === 'profile') ? getTitle() : 'TENAID'}}\r\n            \r\n            </a>\r\n        </div>\r\n        <button mat-raised-button class=\"navbar-toggler\" type=\"button\" (click)=\"sidebarToggle()\">\r\n            <span class=\"sr-only\">Toggle navigation</span>\r\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\r\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\r\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\r\n        </button>\r\n        <div class=\"collapse navbar-collapse justify-content-end\" id=\"navigation\">\r\n          \r\n            <ul class=\"navbar-nav\">\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" routerLink=\"/profile\" href=\"javascript:void(0)\">\r\n                        <i class=\"material-icons\">dashboard</i>Dashboard\r\n                        <p>\r\n                            <span class=\"d-lg-none d-md-block\">Stats</span>\r\n                        </p>\r\n                    </a>\r\n                </li>\r\n                \r\n                <li *ngIf=\"!isLogged;else logout\" class=\"nav-item\">\r\n                    <a (click)=\"goto('/authentication')\" class=\"nav-link\" href=\"javascript:void(0)\">\r\n                        <i  class=\"material-icons\">login</i>Login\r\n                        <p>\r\n                            <span class=\"d-lg-none d-md-block\">Account</span>\r\n                        </p>\r\n                    </a>\r\n                </li>\r\n                <ng-template #logout>\r\n                    <li  class=\"nav-item\">\r\n                        <a (click)=\"signout()\" class=\"nav-link\" href=\"javascript:void(0)\">\r\n                            <i  class=\"material-icons\">logout</i>Logout\r\n                            <p>\r\n                                <span class=\"d-lg-none d-md-block\">Account</span>\r\n                            </p>\r\n                        </a>\r\n                    </li>\r\n                </ng-template>\r\n                \r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>\r\n\r\n<!--\r\n\r\n<nav class=\"navbar navbar-transparent navbar-absolute\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"navbar-header\">\r\n            <button mat-raised-button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" (click)=\"sidebarToggle()\">\r\n                <span class=\"sr-only\">Toggle navigation</span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n            </button>\r\n            <a class=\"navbar-brand\" href=\"javascript:void(0)\">{{getTitle()}}</a>\r\n        </div>\r\n        <div class=\"collapse navbar-collapse\">\r\n            <ul class=\"nav navbar-nav navbar-right\">\r\n                <li>\r\n                    <a href=\"javascript:void(0)\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                        <i class=\"material-icons\">dashboard</i>\r\n                        <p class=\"hidden-lg hidden-md\">Dashboard</p>\r\n                    </a>\r\n                </li>\r\n                <li class=\"dropdown\">\r\n                    <a href=\"javascript:void(0)\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                        <i class=\"material-icons\">notifications</i>\r\n                        <span class=\"notification\">5</span>\r\n                        <p class=\"hidden-lg hidden-md\">Notifications</p>\r\n                    </a>\r\n                    <ul class=\"dropdown-menu\">\r\n                        <li><a href=\"javascript:void(0)\">Mike John responded to your email</a></li>\r\n                        <li><a href=\"javascript:void(0)\">You have 5 new tasks</a></li>\r\n                        <li><a href=\"javascript:void(0)\">You're now friend with Andrew</a></li>\r\n                        <li><a href=\"javascript:void(0)\">Another Notification</a></li>\r\n                        <li><a href=\"javascript:void(0)\">Another One</a></li>\r\n                    </ul>\r\n                </li>\r\n                <li>\r\n                    <a href=\"javascript:void(0)\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                       <i class=\"material-icons\">person</i>\r\n                       <p class=\"hidden-lg hidden-md\">Profile</p>\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n\r\n            <form class=\"navbar-form navbar-right\" role=\"search\">\r\n                <div class=\"form-group form-black is-empty\">\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\r\n                    <span class=\"material-input\"></span>\r\n                </div>\r\n                <button mat-raised-button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\r\n                    <i class=\"material-icons\">search</i><div class=\"ripple-container\"></div>\r\n                </button>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</nav> -->\r\n");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "yLV6");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);
/*!

=========================================================
* Material Dashboard Angular - v2.4.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-angular2
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-angular2/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map