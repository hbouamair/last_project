(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["footer-footer-module"],{

/***/ "8rUy":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-footer>\n  <ion-toolbar class=\"qr-scan\" >\n   <ion-fab-button  (click)=\"scan()\" > <ion-icon name=\"scan\"></ion-icon></ion-fab-button>\n  <span class=\"qr\">Scanner  Qr Code</span> \n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ "A7BC":
/*!***************************************!*\
  !*** ./src/app/footer/footer.page.ts ***!
  \***************************************/
/*! exports provided: FooterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterPage", function() { return FooterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_footer_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./footer.page.html */ "8rUy");
/* harmony import */ var _footer_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer.page.scss */ "jiVj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _product_scan_product_scan_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../product-scan/product-scan.component */ "vKMn");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _crud_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../crud.service */ "1vsn");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "WdVq");








const options = {
    preferFrontCamera: false,
    showFlipCameraButton: false,
    showTorchButton: true,
    torchOn: false,
    prompt: 'Scanner Le code Qr du produit',
    resultDisplayDuration: 500,
    formats: 'QR_CODE,PDF_417 ',
    orientation: 'portrait',
};
let FooterPage = class FooterPage {
    constructor(crud, modalController, alertController, toastController, barcodeCtrl) {
        this.crud = crud;
        this.modalController = modalController;
        this.alertController = alertController;
        this.toastController = toastController;
        this.barcodeCtrl = barcodeCtrl;
    }
    ngOnInit() {
    }
    scan() {
        this.barcodeCtrl
            .scan(options)
            .then((barcodeData) => {
            this.Scanning(barcodeData.text);
        })
            .catch((err) => {
            this.error(err);
        });
    }
    Scanning(idProduct) {
        console.log('idProduct## ' + idProduct);
        this.crud.getProduct(idProduct).then((data) => {
            if (data) {
                this.presentModal(data, null);
            }
            else
                this.error('Une erreur interne est survenue,Merci de reprendre le scann');
        }, (error) => {
            this.error('Une erreur interne est survenue,merci de réessayer ultérieurement');
        });
    }
    presentModal(item, card) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _product_scan_product_scan_component__WEBPACK_IMPORTED_MODULE_4__["ProductScanComponent"],
                componentProps: {
                    item: item,
                },
            });
            return yield modal.present();
        });
    }
    error(text) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: text,
                duration: 2000,
                color: 'danger',
            });
            toast.present();
        });
    }
};
FooterPage.ctorParameters = () => [
    { type: _crud_service__WEBPACK_IMPORTED_MODULE_6__["CrudService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_7__["BarcodeScanner"] }
];
FooterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-footer',
        template: _raw_loader_footer_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_footer_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FooterPage);



/***/ }),

/***/ "PpLr":
/*!*****************************************!*\
  !*** ./src/app/footer/footer.module.ts ***!
  \*****************************************/
/*! exports provided: FooterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterPageModule", function() { return FooterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _footer_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer-routing.module */ "dPpK");
/* harmony import */ var _footer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer.page */ "A7BC");







let FooterPageModule = class FooterPageModule {
};
FooterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _footer_routing_module__WEBPACK_IMPORTED_MODULE_5__["FooterPageRoutingModule"]
        ],
        declarations: [_footer_page__WEBPACK_IMPORTED_MODULE_6__["FooterPage"]]
    })
], FooterPageModule);



/***/ }),

/***/ "SQkA":
/*!**********************************************************!*\
  !*** ./src/app/product-scan/product-scan.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LXNjYW4uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "dPpK":
/*!*************************************************!*\
  !*** ./src/app/footer/footer-routing.module.ts ***!
  \*************************************************/
/*! exports provided: FooterPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterPageRoutingModule", function() { return FooterPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _footer_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer.page */ "A7BC");




const routes = [
    {
        path: '',
        component: _footer_page__WEBPACK_IMPORTED_MODULE_3__["FooterPage"]
    }
];
let FooterPageRoutingModule = class FooterPageRoutingModule {
};
FooterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FooterPageRoutingModule);



/***/ }),

/***/ "jiVj":
/*!*****************************************!*\
  !*** ./src/app/footer/footer.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-footer {\n  --background: #3D5A68;\n}\nion-footer ion-toolbar {\n  padding-top: 4px;\n  text-align: -webkit-center;\n  --background:#3D5A68;\n}\nion-footer .qr {\n  color: #FFFFFF;\n  width: 10px !important;\n  font-family: acrom;\n  font-size: 10px;\n}\nion-footer ion-fab-button {\n  border-radius: 50%;\n  border: 3px solid #344C57;\n  box-shadow: 0 0 0 3px #668391;\n  --background:linear-gradient(#FFB701,#FF9302);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGZvb3Rlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFFSSxxQkFBQTtBQUZKO0FBR0k7RUFDRSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0Esb0JBQUE7QUFETjtBQUlJO0VBQ0UsY0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBRk47QUFNSTtFQUVDLGtCQUFBO0VBRUEseUJBQUE7RUFDQyw2QkFBQTtFQUNBLDZDQUFBO0FBTk4iLCJmaWxlIjoiZm9vdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuaW9uLWZvb3RlcntcclxuXHJcbiAgICAtLWJhY2tncm91bmQgOiAjM0Q1QTY4O1xyXG4gICAgaW9uLXRvb2xiYXJ7XHJcbiAgICAgIHBhZGRpbmctdG9wOiA0cHg7XHJcbiAgICAgIHRleHQtYWxpZ246IC13ZWJraXQtY2VudGVyO1xyXG4gICAgICAtLWJhY2tncm91bmQ6IzNENUE2ODtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnFye1xyXG4gICAgICBjb2xvcjojRkZGRkZGIDtcclxuICAgICAgd2lkdGg6IDEwcHggIWltcG9ydGFudDtcclxuICAgICAgZm9udC1mYW1pbHk6IGFjcm9tO1xyXG4gICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICB9XHJcbiAgIFxyXG4gIFxyXG4gICAgaW9uLWZhYi1idXR0b257XHJcbiAgXHJcbiAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIFxyXG4gICAgIGJvcmRlcjogM3B4IHNvbGlkICMzNDRDNTc7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDNweCAgIzY2ODM5MTtcclxuICAgICAgLS1iYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCgjRkZCNzAxLCNGRjkzMDIpO1xyXG4gICAgfVxyXG4gIH0iXX0= */");

/***/ }),

/***/ "tMXm":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product-scan/product-scan.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\n  <ion-row>\n    <ion-col size=\"2\">\n    <i \n    class=\"fa fa-arrow-left fa-2x\"\n    (click) =\"dismiss()\" >\n  </i>\n</ion-col>\n<ion-col>\ndetails de produit \n\n</ion-col>\n  </ion-row>\n</ion-header>\n<ion-content [fullscreen]=\"true\" >\n  <ion-item-group>\n    <ion-card>\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-item>\n            <i class=\"fas fa-circle icon-lbl\">\n            </i> material\n            <ion-label>{{item.material}} </ion-label>\n          </ion-item>\n\n        </ion-col>\n        <ion-col size=\"12\">\n          <ion-item>\n            <i class=\"fas fa-circle icon-lbl\">\n            </i> description\n            <ion-label>{{item.description}} </ion-label>\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col size=\"12\">\n          <ion-item>\n            <i class=\"fas fa-circle icon-lbl\">\n            </i> cagette\n            <ion-label>{{item.cagette}} </ion-label>\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n\n      <ion-row> <ion-button (click) =\"saveCagette(item)\" >enregistrer </ion-button></ion-row>\n    </ion-card>\n\n  </ion-item-group>\n\n</ion-content>\n");

/***/ }),

/***/ "vKMn":
/*!********************************************************!*\
  !*** ./src/app/product-scan/product-scan.component.ts ***!
  \********************************************************/
/*! exports provided: ProductScanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductScanComponent", function() { return ProductScanComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_product_scan_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./product-scan.component.html */ "tMXm");
/* harmony import */ var _product_scan_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-scan.component.scss */ "SQkA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _crud_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../crud.service */ "1vsn");






let ProductScanComponent = class ProductScanComponent {
    constructor(navParams, toastController, alertController, modalController, crud) {
        this.navParams = navParams;
        this.toastController = toastController;
        this.alertController = alertController;
        this.modalController = modalController;
        this.crud = crud;
    }
    ngOnInit() { }
    ionViewWillEnter() {
        this.item = this.navParams.get('item');
    }
    dismiss() {
        this.modalController.dismiss({
            dismissed: true,
        });
    }
    saveCagette(cagette) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let vcagette = '';
            this.crud.addCagette(cagette);
        });
    }
};
ProductScanComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _crud_service__WEBPACK_IMPORTED_MODULE_5__["CrudService"] }
];
ProductScanComponent.propDecorators = {
    item: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ProductScanComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-product-scan',
        template: _raw_loader_product_scan_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_product_scan_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProductScanComponent);



/***/ })

}]);
//# sourceMappingURL=footer-footer-module-es2015.js.map