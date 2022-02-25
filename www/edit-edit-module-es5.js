(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-edit-module"], {
    /***/
    "A+w+":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit/edit.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function AW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Edit</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-item>\r\n    <ion-label position=\"floating\">Name</ion-label>\r\n    <ion-input [(ngModel)]=\"material\"></ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label position=\"floating\">Email</ion-label>\r\n    <ion-input [(ngModel)]=\"description\"></ion-input>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label position=\"floating\">Email</ion-label>\r\n    <ion-input [(ngModel)]=\"cagette\"></ion-input>\r\n  </ion-item>\r\n\r\n\r\n  <ion-button color=\"dark\" expand=\"block\" (click)=\"onUpdate()\">\r\n    Update\r\n  </ion-button>\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "F+s5":
    /*!*************************************!*\
      !*** ./src/app/edit/edit.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function FS5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "LQY8":
    /*!*********************************************!*\
      !*** ./src/app/edit/edit-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: EditPageRoutingModule */

    /***/
    function LQY8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditPageRoutingModule", function () {
        return EditPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _edit_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./edit.page */
      "fcqA");

      var routes = [{
        path: '',
        component: _edit_page__WEBPACK_IMPORTED_MODULE_3__["EditPage"]
      }];

      var EditPageRoutingModule = function EditPageRoutingModule() {
        _classCallCheck(this, EditPageRoutingModule);
      };

      EditPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], EditPageRoutingModule);
      /***/
    },

    /***/
    "fcqA":
    /*!***********************************!*\
      !*** ./src/app/edit/edit.page.ts ***!
      \***********************************/

    /*! exports provided: EditPage */

    /***/
    function fcqA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditPage", function () {
        return EditPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_edit_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./edit.page.html */
      "A+w+");
      /* harmony import */


      var _edit_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./edit.page.scss */
      "F+s5");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _crud_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../crud.service */
      "1vsn");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var EditPage = /*#__PURE__*/function () {
        function EditPage(router, activatedRoute, crud) {
          var _this = this;

          _classCallCheck(this, EditPage);

          this.router = router;
          this.activatedRoute = activatedRoute;
          this.crud = crud;
          this.material = "";
          this.description = "";
          this.cagette = "";
          this.id = this.activatedRoute.snapshot.paramMap.get('id');
          this.crud.getProduct(this.id).then(function (res) {
            _this.material = res['material'];
            _this.description = res['description'];
            _this.cagette = res['cagette'];
          });
        }

        _createClass(EditPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onUpdate",
          value: function onUpdate() {
            var _this2 = this;

            this.crud.updateProduct(this.id, this.material, this.description, this.cagette).then(function () {
              _this2.router.navigate(['/create']);
            });
          }
        }]);

        return EditPage;
      }();

      EditPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _crud_service__WEBPACK_IMPORTED_MODULE_4__["CrudService"]
        }];
      };

      EditPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-edit',
        template: _raw_loader_edit_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_edit_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], EditPage);
      /***/
    },

    /***/
    "zFnc":
    /*!*************************************!*\
      !*** ./src/app/edit/edit.module.ts ***!
      \*************************************/

    /*! exports provided: EditPageModule */

    /***/
    function zFnc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditPageModule", function () {
        return EditPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _edit_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./edit-routing.module */
      "LQY8");
      /* harmony import */


      var _edit_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./edit.page */
      "fcqA");

      var EditPageModule = function EditPageModule() {
        _classCallCheck(this, EditPageModule);
      };

      EditPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _edit_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditPageRoutingModule"]],
        declarations: [_edit_page__WEBPACK_IMPORTED_MODULE_6__["EditPage"]]
      })], EditPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=edit-edit-module-es5.js.map