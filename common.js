(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "WAaD":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/database.service.ts ***!
  \*****************************************************/
/*! exports provided: DatabaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatabaseService", function() { return DatabaseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "JZFu");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DatabaseService = /** @class */ (function () {
    function DatabaseService(angularFirestore) {
        this.angularFirestore = angularFirestore;
    }
    /**
     * Create with no specific id.
     * @param collection string. The name of the collection.
     * @param data any. The data to be passed in.
     */
    DatabaseService.prototype.createGeneric = function (collection, data) {
        return this.angularFirestore
            .collection(collection)
            .add(Object.assign({}, data));
    };
    /**
     * Create with Id specified.
     * @param collection string. The name of the collection.
     * @param data any. The data to be passed in.
     * @param id string. The id of the document
     */
    DatabaseService.prototype.createWithIdorUpdate = function (collection, data, id) {
        return this.angularFirestore
            .collection(collection)
            .doc(id)
            .set(Object.assign({}, data), { merge: true });
    };
    DatabaseService.prototype.updateSingleField = function (collection, data, id, fieldName) {
    };
    /**
     * Delete an item from the database
     * @param collection string. The name of the collection.
     * @param id string. The value of the id.
     */
    DatabaseService.prototype.delete = function (collection, id) {
        return this.angularFirestore
            .collection(collection)
            .doc(id)
            .delete();
    };
    /**
     * Read particular document from database.
     * @param collection string. The name of the collection.
     * @param id string. The value of the id.
     */
    DatabaseService.prototype.read = function (collection, id) {
        return this.angularFirestore
            .collection(collection)
            .doc(id)
            .valueChanges();
    };
    /**
     * Read multiple items from database.
     * @param collection string. The name of the collection.
     * @param field string. The name of the field.
     * @param value any. The value of the field.
     */
    DatabaseService.prototype.readMultiple = function (collection, field, value) {
        return this.angularFirestore
            .collection(collection, function (ref) { return ref.where(field, '==', value); })
            .valueChanges({ idField: 'id' });
    };
    /**
     * Remove an item from an array in firebase.
     * @param collection string. The name of the collection.
     * @param dataId string. The Id of the data.
     * @param value any. The value of the item to be removed.
     */
    DatabaseService.prototype.removeFromArray = function (collection, dataId, value) {
        return this.angularFirestore
            .collection(collection)
            .doc(dataId)
            .update({ tenants: firebase__WEBPACK_IMPORTED_MODULE_2__["default"].firestore.FieldValue.arrayRemove(value) });
    };
    DatabaseService.ctorParameters = function () { return [
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"] }
    ]; };
    DatabaseService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])
    ], DatabaseService);
    return DatabaseService;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map