(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-auth-module"],{

/***/ "0ZEV":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/email-sign-in/email-sign-in.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"\">\r\n    <div *ngIf=\"isLogin\">\r\n      <h3>Login</h3>\r\n      <button\r\n      (click)=\"changeType('signup')\"\r\n      mat-stroked-button>\r\n        Create an account\r\n      </button>\r\n    </div>\r\n    <div *ngIf=\"isSignup\">\r\n      <h3>Signup</h3>\r\n      <button\r\n      (click)=\"changeType('login')\"\r\n      mat-stroked-button>\r\n        Already have an account?\r\n      </button>\r\n    </div>\r\n    <div *ngIf=\"isPasswordReset\">\r\n      <h3>Reset Password</h3>\r\n      <button\r\n      mat-stroked-button\r\n      (click)=\"changeType('login')\"\r\n      >\r\n        Back\r\n      </button>\r\n    </div>\r\n      <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\r\n        <mat-form-field \r\n        *ngIf=\"isSignup\"\r\n        [color]=\"name?.valid && 'primary'\">\r\n          <input matInput\r\n          formControlName=\"name\"\r\n          type=\"text\"\r\n          autocomplete=\"off\"\r\n          placeholder=\"Name\"\r\n          >\r\n          <mat-error *ngIf=\"email?.invalid && email?.dirty\">\r\n            Enter a valid email address\r\n          </mat-error>\r\n        </mat-form-field>\r\n        <mat-form-field [color]=\"email?.valid && 'primary'\">\r\n          <input matInput\r\n          formControlName=\"email\"\r\n          type=\"email\"\r\n          autocomplete=\"off\"\r\n          placeholder=\"Email\"\r\n          >\r\n          <mat-error *ngIf=\"email?.invalid && email?.dirty\">\r\n            Enter a valid email address\r\n          </mat-error>\r\n        </mat-form-field>\r\n  \r\n  \r\n        <mat-form-field\r\n        *ngIf=\"!isPasswordReset\"\r\n        [color]=\"password?.valid && 'primary'\">\r\n          <input matInput\r\n          formControlName=\"password\"\r\n          type=\"password\"\r\n          autocomplete=\"off\"\r\n          placeholder=\"Password\"\r\n          >\r\n          <mat-error *ngIf=\"password?.invalid && password?.dirty\">\r\n            Password must be atleast 6 characters long\r\n          </mat-error>\r\n        </mat-form-field>\r\n  \r\n  \r\n        <mat-form-field\r\n        \r\n        *ngIf=\"!isPasswordReset && !isLogin\"\r\n        [color]=\"password?.valid && 'primary'\">\r\n        \r\n          <input matInput\r\n          formControlName=\"confirmPassword\"\r\n          type=\"password\"\r\n          autocomplete=\"off\"\r\n          placeholder=\"Confirm Password\"\r\n          >\r\n          <mat-error *ngIf=\"passwordConfirm?.dirty && !passwordDoesMatch\">\r\n            Password does not match\r\n          </mat-error>\r\n        </mat-form-field>\r\n        <mat-error\r\n        class=\"server-error\"> {{serverMessage}}</mat-error>\r\n        <button\r\n        style=\"margin-bottom: 20px;\"\r\n        mat-raised-button\r\n        color=\"accent\"\r\n        type=\"submit\"\r\n  \r\n        [disabled]=\"form.invalid || !passwordDoesMatch || loading || !nameNotNeeded\"\r\n        >\r\n          Submit\r\n        </button>\r\n      </form>\r\n      <a\r\n      class=\"text-primary\"\r\n      style=\"margin-top: 20px; padding-top: 20px;\"\r\n      (click)=\"changeType('reset')\"> Forgot Password</a>\r\n  \r\n  </mat-card>\r\n  ");

/***/ }),

/***/ "1Qz+":
/*!*************************************************************!*\
  !*** ./src/app/auth/directives/google-sign-in.directive.ts ***!
  \*************************************************************/
/*! exports provided: GoogleSignInDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleSignInDirective", function() { return GoogleSignInDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_shared_models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/models/user */ "NlNA");
/* harmony import */ var app_shared_services_uielements_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/uielements.service */ "U9fw");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase */ "JZFu");
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







var GoogleSignInDirective = /** @class */ (function () {
    function GoogleSignInDirective(angularFireAuth, authService, router, uiElementsService) {
        this.angularFireAuth = angularFireAuth;
        this.authService = authService;
        this.router = router;
        this.uiElementsService = uiElementsService;
    }
    GoogleSignInDirective.prototype.onClick = function () {
        return __awaiter(this, void 0, void 0, function () {
            var authedUser, newUser, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        return [4 /*yield*/, this.angularFireAuth.signInWithPopup(new firebase__WEBPACK_IMPORTED_MODULE_5__["default"].auth.GoogleAuthProvider)];
                    case 1:
                        authedUser = _a.sent();
                        this.uiElementsService.addSpinner();
                        newUser = new app_shared_models_user__WEBPACK_IMPORTED_MODULE_3__["User"](authedUser.user.displayName, authedUser.user.email);
                        if (!authedUser.additionalUserInfo.isNewUser) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.authService.addNewUser(authedUser.user.uid, newUser)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        this.uiElementsService.removeSpinner();
                        this.uiElementsService.addSnackBar('Welcome ' + newUser.name);
                        this.router.navigate(['/profile']);
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _a.sent();
                        this.uiElementsService.addSnackBar(error_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    GoogleSignInDirective.ctorParameters = function () { return [
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"] },
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: app_shared_services_uielements_service__WEBPACK_IMPORTED_MODULE_4__["UIElementsService"] }
    ]; };
    GoogleSignInDirective.propDecorators = {
        onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click',] }]
    };
    GoogleSignInDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appGoogleSignIn]'
        }),
        __metadata("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            app_shared_services_uielements_service__WEBPACK_IMPORTED_MODULE_4__["UIElementsService"]])
    ], GoogleSignInDirective);
    return GoogleSignInDirective;
}());



/***/ }),

/***/ "1XVB":
/*!***********************************************!*\
  !*** ./src/app/auth/auth/auth.component.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("button img {\n  width: 1.25em;\n}\n\n:host {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9hdXRoL2F1dGguY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDRSxhQUFBO0FBQU47O0FBS0U7RUFDRSxrQkFBQTtBQUZKIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9hdXRoL2F1dGguY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b257XHJcbiAgICBpbWcge1xyXG4gICAgICB3aWR0aDogMS4yNWVtO1xyXG4gICAgfVxyXG4gIFxyXG4gIH1cclxuICBcclxuICA6aG9zdCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gICJdfQ== */");

/***/ }),

/***/ "6epW":
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/auth.component */ "VFgG");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _auth_auth_component__WEBPACK_IMPORTED_MODULE_2__["AuthComponent"] }
];
var AuthRoutingModule = /** @class */ (function () {
    function AuthRoutingModule() {
    }
    AuthRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AuthRoutingModule);
    return AuthRoutingModule;
}());



/***/ }),

/***/ "HfJs":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth/auth.component.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div >\n      <!-- <button mat-raised-button appGoogleSignIn>\n        <img src=\"/assets/google-logo.svg\" > Login with google\n      </button>\n        <h5>OR</h5> -->\n      <app-email-sign-in></app-email-sign-in>\n    </div>\n  </div>\n  </div>\n");

/***/ }),

/***/ "NRjc":
/*!*****************************************************************!*\
  !*** ./src/app/auth/email-sign-in/email-sign-in.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".forgot {\n  margin-top: 30px;\n}\n\nmat-card {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n  margin: 0 auto;\n}\n\nmat-form-field {\n  width: 100%;\n  margin-bottom: 16px;\n}\n\n.server-error {\n  margin: 8px 0;\n}\n\ninput {\n  height: 2em;\n}\n\ninput div.mat-form-field-infix {\n  padding: 3em 0;\n}\n\ninput div.mat-form-field-infix input.mat-input-element {\n  vertical-align: top;\n}\n\ndiv.mat-form-field-wrapper {\n  padding-bottom: 1.15em;\n}\n\na:hover {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9lbWFpbC1zaWduLWluL2VtYWlsLXNpZ24taW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQUNKOztBQUNFO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FBRUo7O0FBQ0U7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7QUFFSjs7QUFDRTtFQUNFLGFBQUE7QUFFSjs7QUFDRTtFQUNFLFdBQUE7QUFFSjs7QUFESTtFQUNFLGNBQUE7QUFHTjs7QUFGTTtFQUNFLG1CQUFBO0FBSVI7O0FBQ0U7RUFDRSxzQkFBQTtBQUVKOztBQUNFO0VBQ0UsZUFBQTtBQUVKIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9lbWFpbC1zaWduLWluL2VtYWlsLXNpZ24taW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9yZ290e1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICB9XHJcbiAgbWF0LWNhcmR7XHJcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIG1hdC1mb3JtLWZpZWxke1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gIH1cclxuICBcclxuICAuc2VydmVyLWVycm9ye1xyXG4gICAgbWFyZ2luOiA4cHggMDtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXR7XHJcbiAgICBoZWlnaHQ6IDJlbTtcclxuICAgIGRpdi5tYXQtZm9ybS1maWVsZC1pbmZpeHtcclxuICAgICAgcGFkZGluZzogM2VtIDA7XHJcbiAgICAgIGlucHV0Lm1hdC1pbnB1dC1lbGVtZW50e1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgZGl2Lm1hdC1mb3JtLWZpZWxkLXdyYXBwZXJ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMS4xNWVtO1xyXG4gIH1cclxuICBcclxuICBhOmhvdmVye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICAiXX0= */");

/***/ }),

/***/ "NlNA":
/*!***************************************!*\
  !*** ./src/app/shared/models/user.ts ***!
  \***************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(name, email) {
        this.name = name;
        this.email = email;
        this.address = '';
    }
    return User;
}());



/***/ }),

/***/ "VFgG":
/*!*********************************************!*\
  !*** ./src/app/auth/auth/auth.component.ts ***!
  \*********************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var _raw_loader_auth_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./auth.component.html */ "HfJs");
/* harmony import */ var _auth_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.component.scss */ "1XVB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthComponent = /** @class */ (function () {
    function AuthComponent(angularFireAuth) {
        this.angularFireAuth = angularFireAuth;
    }
    AuthComponent.prototype.ngOnInit = function () {
    };
    AuthComponent.ctorParameters = function () { return [
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] }
    ]; };
    AuthComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-auth',
            template: _raw_loader_auth_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_auth_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]])
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "Yj9t":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-routing.module */ "6epW");
/* harmony import */ var _directives_google_sign_in_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./directives/google-sign-in.directive */ "1Qz+");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/auth.component */ "VFgG");
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/shared.module */ "PCNd");
/* harmony import */ var _email_sign_in_email_sign_in_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./email-sign-in/email-sign-in.component */ "zYDS");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_directives_google_sign_in_directive__WEBPACK_IMPORTED_MODULE_3__["GoogleSignInDirective"], _auth_auth_component__WEBPACK_IMPORTED_MODULE_4__["AuthComponent"], _email_sign_in_email_sign_in_component__WEBPACK_IMPORTED_MODULE_6__["EmailSignInComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _auth_routing_module__WEBPACK_IMPORTED_MODULE_2__["AuthRoutingModule"],
                app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "zYDS":
/*!***************************************************************!*\
  !*** ./src/app/auth/email-sign-in/email-sign-in.component.ts ***!
  \***************************************************************/
/*! exports provided: EmailSignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailSignInComponent", function() { return EmailSignInComponent; });
/* harmony import */ var _raw_loader_email_sign_in_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./email-sign-in.component.html */ "0ZEV");
/* harmony import */ var _email_sign_in_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./email-sign-in.component.scss */ "NRjc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_shared_services_database_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/shared/services/database.service */ "WAaD");
/* harmony import */ var app_shared_services_uielements_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/shared/services/uielements.service */ "U9fw");
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









var EmailSignInComponent = /** @class */ (function () {
    function EmailSignInComponent(fb, uiElementsService, databaseService, angularFireAuth, router, angularFirestore) {
        this.fb = fb;
        this.uiElementsService = uiElementsService;
        this.databaseService = databaseService;
        this.angularFireAuth = angularFireAuth;
        this.router = router;
        this.angularFirestore = angularFirestore;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({});
        this.type = 'signup';
        this.serverMessage = '';
        this.loading = false;
    }
    ;
    EmailSignInComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            name: ['', []],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(6)]],
            confirmPassword: ['', []]
        });
    };
    EmailSignInComponent.prototype.changeType = function (val) {
        this.type = val;
    };
    Object.defineProperty(EmailSignInComponent.prototype, "isSignup", {
        get: function () {
            return this.type === 'signup';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailSignInComponent.prototype, "isLogin", {
        get: function () {
            return this.type === 'login';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailSignInComponent.prototype, "isPasswordReset", {
        get: function () {
            return this.type === 'reset';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailSignInComponent.prototype, "email", {
        get: function () {
            return this.form.get('email');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailSignInComponent.prototype, "name", {
        get: function () {
            return this.form.get('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailSignInComponent.prototype, "password", {
        get: function () {
            return this.form.get('password');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailSignInComponent.prototype, "passwordConfirm", {
        get: function () {
            return this.form.get('confirmPassword');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailSignInComponent.prototype, "passwordDoesMatch", {
        get: function () {
            var _a, _b;
            if (this.type !== 'signup') {
                return true;
            }
            else {
                return ((_a = this.password) === null || _a === void 0 ? void 0 : _a.value) == ((_b = this.passwordConfirm) === null || _b === void 0 ? void 0 : _b.value);
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailSignInComponent.prototype, "nameNotNeeded", {
        get: function () {
            if (this.type !== 'signup') {
                return true;
            }
            else {
                return this.name.value != '';
            }
        },
        enumerable: false,
        configurable: true
    });
    EmailSignInComponent.prototype.onSubmit = function () {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function () {
            var email, name, password, resultOfAwait, error_1;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        this.loading = true;
                        this.uiElementsService.addSpinner();
                        email = (_a = this.email) === null || _a === void 0 ? void 0 : _a.value;
                        name = (_b = this.name) === null || _b === void 0 ? void 0 : _b.value;
                        password = (_c = this.password) === null || _c === void 0 ? void 0 : _c.value;
                        _e.label = 1;
                    case 1:
                        _e.trys.push([1, 9, , 10]);
                        if (!(this.type === 'signup')) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.angularFireAuth.createUserWithEmailAndPassword(email, password)];
                    case 2:
                        resultOfAwait = _e.sent();
                        console.log(resultOfAwait);
                        return [4 /*yield*/, this.angularFirestore
                                .collection('users')
                                .doc((_d = resultOfAwait.user) === null || _d === void 0 ? void 0 : _d.uid)
                                .set({
                                email: email,
                                address: '',
                                name: name
                            })];
                    case 3:
                        _e.sent();
                        this.uiElementsService.addSnackBar('Welcome ' + name);
                        this.uiElementsService.removeSpinner();
                        this.router.navigate(['/profile']);
                        _e.label = 4;
                    case 4:
                        if (!(this.type === 'login')) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.angularFireAuth.signInWithEmailAndPassword(email, password)];
                    case 5:
                        _e.sent();
                        // this.snackService.authSuccess('Login');
                        this.uiElementsService.addSnackBar('Welcome');
                        this.uiElementsService.removeSpinner();
                        this.router.navigate(['/profile']);
                        _e.label = 6;
                    case 6:
                        if (!(this.type === 'reset')) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.angularFireAuth.sendPasswordResetEmail(email)];
                    case 7:
                        _e.sent();
                        this.uiElementsService.removeSpinner();
                        this.uiElementsService.addSnackBar('Check your Emails for the link');
                        _e.label = 8;
                    case 8: return [3 /*break*/, 10];
                    case 9:
                        error_1 = _e.sent();
                        this.serverMessage = error_1;
                        this.uiElementsService.removeSpinner();
                        return [3 /*break*/, 10];
                    case 10:
                        this.loading = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    EmailSignInComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: app_shared_services_uielements_service__WEBPACK_IMPORTED_MODULE_8__["UIElementsService"] },
        { type: app_shared_services_database_service__WEBPACK_IMPORTED_MODULE_7__["DatabaseService"] },
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] }
    ]; };
    EmailSignInComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-email-sign-in',
            template: _raw_loader_email_sign_in_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_email_sign_in_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            app_shared_services_uielements_service__WEBPACK_IMPORTED_MODULE_8__["UIElementsService"],
            app_shared_services_database_service__WEBPACK_IMPORTED_MODULE_7__["DatabaseService"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]])
    ], EmailSignInComponent);
    return EmailSignInComponent;
}());



/***/ })

}]);
//# sourceMappingURL=auth-auth-module.js.map