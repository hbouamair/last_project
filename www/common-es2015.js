(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "4vh3":
/*!*****************************************!*\
  !*** ./src/app/create/create.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@font-face {\n  font-family: \"acrom\";\n  src: url('Acrom-Medium.ttf');\n}\nion-content {\n  --overflow: hidden;\n}\nion-card {\n  border-radius: 14px;\n}\nion-card ion-label {\n  font-family: acrom;\n  color: #3D5A68;\n}\nion-label {\n  font-family: acrom;\n  color: #3D5A68;\n  font-size: 13px;\n}\n.titre ion-label {\n  font-size: 11px;\n  font-family: acrom;\n  color: #FF9302;\n}\n.icon {\n  text-align: center;\n}\n.icon ion-item {\n  --background: #E6ECEF;\n  text-align: center;\n}\n.add-inv {\n  margin: auto;\n  font-family: acrom;\n}\n.add-inv ion-item {\n  border: 1px solid #DCE8EE;\n  margin: 12px;\n  border-radius: 10px;\n}\n.add-inv ion-label {\n  font-family: acrom;\n  color: #B2C4CC;\n  font-size: 14px;\n}\n.add-inv ion-select {\n  font-family: acrom;\n  color: #3D5A68;\n  font-size: 14px;\n}\n.add-inv ion-input {\n  font-family: acrom;\n  color: #3D5A68;\n  font-size: 14px;\n}\n.add-inv ion-datetime {\n  font-family: acrom;\n  color: #3D5A68;\n  font-size: 14px;\n}\n.add-inv .btn-valid {\n  font-family: acrom;\n  color: #FFFF;\n  font-size: 14px;\n  --background: #3D5A68 ;\n  float: right;\n}\n.icons-buttom ion-row {\n  --background-color: #B2C4CC ;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n  float: right;\n}\n.icons-buttom ion-row ion-col {\n  align-items: center;\n  text-align: -webkit-center;\n  margin: 15px;\n}\n.icons-buttom ion-row ion-fab-button {\n  --background: #3D5A68;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNyZWF0ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtFQUNBLDRCQUFBO0FBQ0o7QUFFQTtFQUNJLGtCQUFBO0FBQUo7QUFHQTtFQUNJLG1CQUFBO0FBQUo7QUFDSTtFQUNJLGtCQUFBO0VBQ0osY0FBQTtBQUNKO0FBSUE7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBREo7QUFNSTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFIUjtBQU9BO0VBQ0ksa0JBQUE7QUFKSjtBQUtHO0VBQ0MscUJBQUE7RUFDQSxrQkFBQTtBQUhKO0FBTUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7QUFISjtBQUtJO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFIUjtBQU1JO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUpSO0FBTUk7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBSlI7QUFPSTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFMUjtBQVFJO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQU5SO0FBU0k7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FBUFI7QUFlQTtFQUNJLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUVBLFlBQUE7QUFiSjtBQWNJO0VBQ0ksbUJBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7QUFaUjtBQWNJO0VBQ0kscUJBQUE7QUFaUiIsImZpbGUiOiJjcmVhdGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ2Fjcm9tJztcclxuICAgIHNyYzogdXJsKCcuLi8uLi9hc3NldHMvZm9udHMvQWNyb20tTWVkaXVtLnR0ZicpO1xyXG4gIH1cclxuXHJcbmlvbi1jb250ZW50e1xyXG4gICAgLS1vdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG5pb24tY2FyZCB7XHJcbiAgICBib3JkZXItcmFkaXVzIDogMTRweCA7XHJcbiAgICBpb24tbGFiZWx7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6YWNyb20gO1xyXG4gICAgY29sb3IgOiMzRDVBNjggO1xyXG4gICAgXHJcblxyXG4gICAgfVxyXG59XHJcbmlvbi1sYWJlbHtcclxuICAgIGZvbnQtZmFtaWx5OmFjcm9tIDtcclxuICAgIGNvbG9yIDojM0Q1QTY4IDtcclxuICAgIGZvbnQtc2l6ZSA6MTNweCA7XHJcbn1cclxuXHJcblxyXG4udGl0cmV7XHJcbiAgICBpb24tbGFiZWx7XHJcbiAgICAgICAgZm9udC1zaXplIDogMTFweCA7XHJcbiAgICAgICAgZm9udC1mYW1pbHkgOiBhY3JvbSA7XHJcbiAgICAgICAgY29sb3IgOiAjRkY5MzAyIDtcclxuICAgIH1cclxufVxyXG5cclxuLmljb257XHJcbiAgICB0ZXh0LWFsaWduIDpjZW50ZXIgO1xyXG4gICBpb24taXRlbXtcclxuICAgIC0tYmFja2dyb3VuZCA6ICNFNkVDRUY7XHJcbiAgICB0ZXh0LWFsaWduIDogY2VudGVyIDtcclxuICAgfVxyXG59XHJcbi5hZGQtaW52e1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgZm9udC1mYW1pbHk6IGFjcm9tO1xyXG4gIFxyXG4gICAgaW9uLWl0ZW17XHJcbiAgICAgICAgYm9yZGVyIDogMXB4IHNvbGlkICNEQ0U4RUUgO1xyXG4gICAgICAgIG1hcmdpbjogMTJweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1sYWJlbHtcclxuICAgICAgICBmb250LWZhbWlseTogYWNyb207XHJcbiAgICAgICAgY29sb3I6ICNCMkM0Q0M7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG4gICAgaW9uLXNlbGVjdHtcclxuICAgICAgICBmb250LWZhbWlseTogYWNyb207XHJcbiAgICAgICAgY29sb3I6IzNENUE2ODtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcblxyXG4gICAgfVxyXG4gICAgaW9uLWlucHV0e1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBhY3JvbTtcclxuICAgICAgICBjb2xvcjojM0Q1QTY4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuXHJcbiAgICB9XHJcbiAgICBpb24tZGF0ZXRpbWV7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IGFjcm9tO1xyXG4gICAgICAgIGNvbG9yOiMzRDVBNjg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG5cclxuICAgIH1cclxuICAgIC5idG4tdmFsaWR7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IGFjcm9tO1xyXG4gICAgICAgIGNvbG9yOiNGRkZGO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAtLWJhY2tncm91bmQgOiAjM0Q1QTY4IDtcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG4uaWNvbnMtYnV0dG9te1xyXG4gICBcclxuXHJcbmlvbi1yb3cge1xyXG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yIDogI0IyQzRDQyA7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzIDogMTVweCA7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1cyA6IDE1cHggO1xyXG5cclxuICAgIGZsb2F0IDpyaWdodCA7XHJcbiAgICBpb24tY29se1xyXG4gICAgICAgIGFsaWduLWl0ZW1zIDogY2VudGVyIDtcclxuICAgICAgICB0ZXh0LWFsaWduOi13ZWJraXQtY2VudGVyIDtcclxuICAgICAgICBtYXJnaW46IDE1cHg7IFxyXG4gICAgfVxyXG4gICAgaW9uLWZhYi1idXR0b257XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kIDogIzNENUE2ODtcclxuICAgIH1cclxufVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "74mu":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
const hostContext = (selector, el) => {
  return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color, cssClassMap) => {
  return (typeof color === 'string' && color.length > 0) ? Object.assign({ 'ion-color': true, [`ion-color-${color}`]: true }, cssClassMap) : cssClassMap;
};
const getClassList = (classes) => {
  if (classes !== undefined) {
    const array = Array.isArray(classes) ? classes : classes.split(' ');
    return array
      .filter(c => c != null)
      .map(c => c.trim())
      .filter(c => c !== '');
  }
  return [];
};
const getClassMap = (classes) => {
  const map = {};
  getClassList(classes).forEach(c => map[c] = true);
  return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction, animation) => {
  if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
    const router = document.querySelector('ion-router');
    if (router) {
      if (ev != null) {
        ev.preventDefault();
      }
      return router.push(url, direction, animation);
    }
  }
  return false;
};




/***/ }),

/***/ "Ccx/":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/create/create.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<ion-content>\r\n<ion-content class=\"ion-padding\"   >\r\n\r\n <ion-card  *ngFor=\"let product of crud.Prodcuts\" >\r\n   <ion-card-content *ngIf=\"hideMe\"  >\r\n   \r\n        <ion-row class=\"titre padding\">\r\n          <ion-col size=\"4\">\r\n        <ion-label> Material</ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"5\" >\r\n            <ion-label> Description</ion-label>\r\n          </ion-col>\r\n          <ion-col >\r\n            <ion-label>Cagette</ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row padding>\r\n\r\n          <ion-col size=\"4\">\r\n        <ion-label> {{ product.material }}</ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"5\">\r\n            <ion-label>{{ product.description }}</ion-label>\r\n          </ion-col>\r\n          <ion-col   >\r\n            <ion-label> {{ product.cagette }}</ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n       \r\n        \r\n      </ion-card-content>\r\n      <ion-row *ngIf=\"hideMe\" style=\"background:#E6ECEF\" class=\"icon\" padding>\r\n\r\n        <ion-col>\r\n          <ion-item  [routerLink]=\"['/editProduct/', product.product_id]\"  lines=\"none\"><ion-icon name=\"create\"> </ion-icon> \r\n              <ion-label>Editer </ion-label> </ion-item>\r\n          </ion-col>\r\n        <ion-col>\r\n        <ion-item (click)=\"remove(product.product_id)\" lines=\"none\"><ion-icon name=\"trash\"> </ion-icon> \r\n            <ion-label>Supprimer </ion-label> </ion-item>\r\n        </ion-col>\r\n        \r\n      </ion-row>\r\n\r\n </ion-card> \r\n\r\n <ion-content *ngIf=\"hideMe\" class=\" icons-buttom ion-padding\">\r\n  \r\n  <ion-row>\r\n    <ion-col center >\r\n      <ion-fab-button (click)=\"hide()\" ><ion-icon  name=\"add\"> \r\n      </ion-icon>\r\n    </ion-fab-button>\r\n    <ion-label>ajouter un produit</ion-label>\r\n    </ion-col>\r\n \r\n\r\n  </ion-row>\r\n  \r\n\r\n\r\n</ion-content>\r\n\r\n\r\n<ion-content  class=\" add-inv ion-padding\">\r\n \r\n  <ion-item>\r\n    <ion-label position=\"floating\">Material</ion-label>\r\n    <ion-input [(ngModel)]=\"material\" type=\"text\" ></ion-input>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label position=\"floating\">Description</ion-label>\r\n     <ion-textarea [(ngModel)]=\"description\" type=\"text\" ></ion-textarea>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label position=\"floating\">cagette</ion-label>\r\n    <ion-input [(ngModel)]=\"cagette\" type=\"text\" ></ion-input>\r\n  </ion-item>\r\n  <ion-content *ngIf=\"!hideMe\" class=\" icons-buttom ion-padding\">\r\n  \r\n      <ion-row>\r\n        <ion-col >\r\n          <ion-fab-button (click)=\"createProduct()\">   <ion-icon name=\"save\"> \r\n          </ion-icon>\r\n        </ion-fab-button >\r\n        <ion-label>Enregistrer</ion-label>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-fab-button (click)=\"show()\" ><ion-icon src=\"../../assets/mdicons/retour.svg\"> \r\n          </ion-icon>\r\n        </ion-fab-button  >\r\n        <ion-label>retour</ion-label>\r\n          \r\n        </ion-col>\r\n    \r\n    \r\n      </ion-row>\r\n      \r\n    \r\n   \r\n    \r\n    \r\n\r\n\r\n</ion-content>\r\n</ion-content>\r\n\r\n\r\n  <!-- Create -->\r\n  \r\n\r\n");

/***/ }),

/***/ "FUI7":
/*!*********************************************************!*\
  !*** ./src/app/inventaire-list/inventaire-list.page.ts ***!
  \*********************************************************/
/*! exports provided: InventaireListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventaireListPage", function() { return InventaireListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_inventaire_list_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./inventaire-list.page.html */ "YB0A");
/* harmony import */ var _inventaire_list_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inventaire-list.page.scss */ "lMhb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _crud_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../crud.service */ "1vsn");





let InventaireListPage = class InventaireListPage {
    constructor(crud) {
        this.crud = crud;
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.crud.getAllInvent();
    }
    remove(inv) {
        this.crud.deleteInevent(inv);
    }
};
InventaireListPage.ctorParameters = () => [
    { type: _crud_service__WEBPACK_IMPORTED_MODULE_4__["CrudService"] }
];
InventaireListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-inventaire-list',
        template: _raw_loader_inventaire_list_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_inventaire_list_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], InventaireListPage);



/***/ }),

/***/ "JbSX":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-4927a4c1.js ***!
  \*********************************************************************/
/*! exports provided: c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createButtonActiveGesture; });
/* harmony import */ var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-7a8b7a1c.js */ "wEJo");
/* harmony import */ var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./haptic-27b3f981.js */ "qULd");
/* harmony import */ var _index_f49d994d_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-f49d994d.js */ "iWo5");




const createButtonActiveGesture = (el, isButton) => {
  let currentTouchedButton;
  let initialTouchedButton;
  const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
    if (typeof document === 'undefined') {
      return;
    }
    const target = document.elementFromPoint(x, y);
    if (!target || !isButton(target)) {
      clearActiveButton();
      return;
    }
    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };
  const setActiveButton = (button, hapticFeedbackFn) => {
    currentTouchedButton = button;
    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.add('ion-activated'));
    hapticFeedbackFn();
  };
  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.remove('ion-activated'));
    /**
     * Clicking on one button, but releasing on another button
     * does not dispatch a click event in browsers, so we
     * need to do it manually here. Some browsers will
     * dispatch a click if clicking on one button, dragging over
     * another button, and releasing on the original button. In that
     * case, we need to make sure we do not cause a double click there.
     */
    if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
      currentTouchedButton.click();
    }
    currentTouchedButton = undefined;
  };
  return Object(_index_f49d994d_js__WEBPACK_IMPORTED_MODULE_2__["createGesture"])({
    el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["a"]),
    onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["b"]),
    onEnd: () => {
      clearActiveButton(true);
      Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["h"])();
      initialTouchedButton = undefined;
    }
  });
};




/***/ }),

/***/ "M1gX":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/create-inv/create-inv.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-content class=\" add-inv ion-padding\">\n \n  \n    <ion-item>\n      <ion-label position=\"floating\">Titre</ion-label>\n      <ion-input [(ngModel)]=\"titre\" type=\"text\" ></ion-input>\n    </ion-item>\n  \n\n    <ion-item>\n      <ion-label position=\"floating\">Date</ion-label>\n      <ion-datetime [(ngModel)]=\"date\" displayFormat=\"MM/DD/YYYY\" min=\"2000-03-14\" max=\"2030-12-09\" value=\"2002-09-23T15:03:46.789\"> <ion-icon slot=\"end\" name=\"calendar\"></ion-icon></ion-datetime>\n      \n    </ion-item>\n   \n\n  <ion-item>\n      <ion-label position=\"floating\" >Type</ion-label>\n      <ion-select [(ngModel)]=\"type\" value=\"plannifié\">\n        <ion-select-option value=\"plannifié\">Plannifié</ion-select-option>\n        <ion-select-option value=\"termine\">Terminé</ion-select-option>\n        <ion-select-option value=\"attente\">en attente</ion-select-option>\n      </ion-select>\n    </ion-item>\n   \n\n  \n    <ion-button  class=\"btn-valid\" (click)=\"createInv()\" >Valider</ion-button>\n \n  \n\n</ion-content><");

/***/ }),

/***/ "O1uB":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/generate-inv/generate-inv.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-card>\n  <ion-card-header>\n    <ion-row>\n\n      <ion-col>\n    <ion-card-subtitle>Reference\n     \n    </ion-card-subtitle>\n    <ion-label> </ion-label>\n\n  </ion-col>\n   <ion-col>\n    <ion-card-subtitle>Type\n     \n    </ion-card-subtitle>\n    <ion-label slot=\"end\"> </ion-label>\n\n   </ion-col>\n  </ion-row>\n  </ion-card-header>\n\n  <ion-card-content>\n    \n    \n      <ion-button  class=\"upload\" (click)=\"inputFile.click()\">\n        <ion-label>Choisir un fichier &nbsp;</ion-label>   <ion-icon  src=\"../../assets/ms-excel.svg\"></ion-icon> \n      \n      <input #inputFile id=\"input-file\"  style=\"opacity:0\" type=\"file\" (change)=\"excelRead($event)\"\n      multiple/>\n    </ion-button>\n  </ion-card-content>\n</ion-card>\n\n");

/***/ }),

/***/ "YB0A":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/inventaire-list/inventaire-list.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<ion-item *ngFor=\"let inv of crud.Inventaire\">\n  <ion-label>\n    <h2><strong>{{ inv.titre }}</strong></h2>\n    <p>{{ inv.date }}</p>\n    <p>{{ inv.type }}</p>\n    <p>hamza </p>\n  </ion-label>\n\n  <div class=\"item-note\" item-end>\n    <ion-icon color=\"primary\" name=\"create\" style=\"zoom:1.3\" [routerLink]=\"['/edit/', inv.inventaire_id]\"></ion-icon>\n    \n    <ion-icon color=\"danger\" name=\"trash\" style=\"zoom:1.3\" (click)=\"remove(inv.inventaire_id)\"></ion-icon>\n  </div>\n</ion-item>");

/***/ }),

/***/ "acej":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-4392cd63.js ***!
  \**************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
/* harmony import */ var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers-dd7e4b7b.js */ "1vRN");


const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
  if (delegate) {
    return delegate.attachViewToDom(container, component, componentProps, cssClasses);
  }
  if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
    throw new Error('framework delegate is missing');
  }
  const el = (typeof component === 'string')
    ? container.ownerDocument && container.ownerDocument.createElement(component)
    : component;
  if (cssClasses) {
    cssClasses.forEach(c => el.classList.add(c));
  }
  if (componentProps) {
    Object.assign(el, componentProps);
  }
  container.appendChild(el);
  await new Promise(resolve => Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__["c"])(el, resolve));
  return el;
};
const detachComponent = (delegate, element) => {
  if (element) {
    if (delegate) {
      const container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }
    element.remove();
  }
  return Promise.resolve();
};




/***/ }),

/***/ "h3R7":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
  \***********************************************************************/
/*! exports provided: S */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SPINNERS; });
const spinners = {
  'bubbles': {
    dur: 1000,
    circles: 9,
    fn: (dur, index, total) => {
      const animationDelay = `${(dur * index / total) - dur}ms`;
      const angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circles': {
    dur: 1000,
    circles: 8,
    fn: (dur, index, total) => {
      const step = index / total;
      const animationDelay = `${(dur * step) - dur}ms`;
      const angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circular': {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: () => {
      return {
        r: 20,
        cx: 48,
        cy: 48,
        fill: 'none',
        viewBox: '24 24 48 48',
        transform: 'translate(0,0)',
        style: {}
      };
    }
  },
  'crescent': {
    dur: 750,
    circles: 1,
    fn: () => {
      return {
        r: 26,
        style: {}
      };
    }
  },
  'dots': {
    dur: 750,
    circles: 3,
    fn: (_, index) => {
      const animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          'left': `${9 - (9 * index)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 17,
        y2: 29,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  }
};
const SPINNERS = spinners;




/***/ }),

/***/ "j0MG":
/*!***********************************************!*\
  !*** ./src/app/create-inv/create-inv.page.ts ***!
  \***********************************************/
/*! exports provided: CreateInvPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateInvPage", function() { return CreateInvPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_create_inv_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./create-inv.page.html */ "M1gX");
/* harmony import */ var _create_inv_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-inv.page.scss */ "mkRS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _crud_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../crud.service */ "1vsn");





let CreateInvPage = class CreateInvPage {
    constructor(crud) {
        this.crud = crud;
        this.titre = "";
        this.type = "";
        this.hideMe = true;
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.crud.getAllInvent();
    }
    createInv() {
        this.crud.addInventai(this.titre, this.date, this.type);
        this.hideMe = true;
    }
};
CreateInvPage.ctorParameters = () => [
    { type: _crud_service__WEBPACK_IMPORTED_MODULE_4__["CrudService"] }
];
CreateInvPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-create-inv',
        template: _raw_loader_create_inv_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_create_inv_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CreateInvPage);



/***/ }),

/***/ "j8j1":
/*!***************************************************!*\
  !*** ./src/app/generate-inv/generate-inv.page.ts ***!
  \***************************************************/
/*! exports provided: GenerateInvPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenerateInvPage", function() { return GenerateInvPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_generate_inv_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./generate-inv.page.html */ "O1uB");
/* harmony import */ var _generate_inv_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./generate-inv.page.scss */ "nBgz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let GenerateInvPage = class GenerateInvPage {
    constructor() { }
    ngOnInit() {
    }
};
GenerateInvPage.ctorParameters = () => [];
GenerateInvPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-generate-inv',
        template: _raw_loader_generate_inv_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_generate_inv_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], GenerateInvPage);



/***/ }),

/***/ "lMhb":
/*!***********************************************************!*\
  !*** ./src/app/inventaire-list/inventaire-list.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnZlbnRhaXJlLWxpc3QucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "mkRS":
/*!*************************************************!*\
  !*** ./src/app/create-inv/create-inv.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@font-face {\n  font-family: \"acrom\";\n  src: url('Acrom-Medium.ttf');\n}\n.add-inv {\n  margin: auto;\n  font-family: acrom;\n}\n.add-inv ion-item {\n  border: 1px solid #DCE8EE;\n  margin: 12px;\n  border-radius: 10px;\n}\n.add-inv ion-label {\n  font-family: acrom;\n  color: #B2C4CC;\n  font-size: 14px;\n}\n.add-inv ion-select {\n  font-family: acrom;\n  color: #3D5A68;\n  font-size: 14px;\n}\n.add-inv ion-input {\n  font-family: acrom;\n  color: #3D5A68;\n  font-size: 14px;\n}\n.add-inv ion-datetime {\n  font-family: acrom;\n  color: #3D5A68;\n  font-size: 14px;\n}\n.add-inv .btn-valid {\n  font-family: acrom;\n  color: #FFFF;\n  font-size: 14px;\n  --background: #3D5A68 ;\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNyZWF0ZS1pbnYucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7RUFDQSw0QkFBQTtBQUNKO0FBQ0E7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUNJO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFDUjtBQUVJO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUFSO0FBRUk7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBQVI7QUFHSTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFEUjtBQUlJO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUZSO0FBS0k7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FBSFIiLCJmaWxlIjoiY3JlYXRlLWludi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnYWNyb20nO1xyXG4gICAgc3JjOiB1cmwoJy4uLy4uL2Fzc2V0cy9mb250cy9BY3JvbS1NZWRpdW0udHRmJyk7XHJcbiAgfVxyXG4uYWRkLWludntcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGZvbnQtZmFtaWx5OiBhY3JvbTtcclxuICBcclxuICAgIGlvbi1pdGVte1xyXG4gICAgICAgIGJvcmRlciA6IDFweCBzb2xpZCAjRENFOEVFIDtcclxuICAgICAgICBtYXJnaW46IDEycHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICBpb24tbGFiZWx7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IGFjcm9tO1xyXG4gICAgICAgIGNvbG9yOiAjQjJDNENDO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuICAgIGlvbi1zZWxlY3R7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IGFjcm9tO1xyXG4gICAgICAgIGNvbG9yOiMzRDVBNjg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG5cclxuICAgIH1cclxuICAgIGlvbi1pbnB1dHtcclxuICAgICAgICBmb250LWZhbWlseTogYWNyb207XHJcbiAgICAgICAgY29sb3I6IzNENUE2ODtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcblxyXG4gICAgfVxyXG4gICAgaW9uLWRhdGV0aW1le1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBhY3JvbTtcclxuICAgICAgICBjb2xvcjojM0Q1QTY4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuXHJcbiAgICB9XHJcbiAgICAuYnRuLXZhbGlke1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBhY3JvbTtcclxuICAgICAgICBjb2xvcjojRkZGRjtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kIDogIzNENUE2OCA7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuIl19 */");

/***/ }),

/***/ "nBgz":
/*!*****************************************************!*\
  !*** ./src/app/generate-inv/generate-inv.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@font-face {\n  font-family: \"acrom\";\n  src: url('Acrom-Medium.ttf');\n}\nion-card-header ion-card-subtitle {\n  color: #B2C4CC;\n  font-size: 12px;\n}\nion-card-header ion-label {\n  color: #3D5A68;\n  font-size: 16px;\n}\n.upload {\n  --background: #3D5A68;\n  width: 220px;\n  height: 50px;\n  font-size: 12px;\n  border-radius: 7px;\n}\n.upload ion-label {\n  font-family: acrom;\n}\n.upload ion-icon {\n  font-size: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGdlbmVyYXRlLWludi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxvQkFBQTtFQUNBLDRCQUFBO0FBQUo7QUFPSTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FBTFI7QUFPSTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FBTFI7QUFXQTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFSSjtBQVNJO0VBQ0ksa0JBQUE7QUFQUjtBQVNJO0VBQ0ksZ0JBQUE7QUFQUiIsImZpbGUiOiJnZW5lcmF0ZS1pbnYucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdhY3JvbSc7XHJcbiAgICBzcmM6IHVybCgnLi4vLi4vYXNzZXRzL2ZvbnRzL0Fjcm9tLU1lZGl1bS50dGYnKTtcclxuICB9XHJcbiAgXHJcblxyXG4gIGlvbi1jYXJkLWhlYWRlcntcclxuXHJcblxyXG4gICAgaW9uLWNhcmQtc3VidGl0bGV7XHJcbiAgICAgICAgY29sb3I6ICNCMkM0Q0M7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgfVxyXG4gICAgaW9uLWxhYmVse1xyXG4gICAgICAgIGNvbG9yOiAjM0Q1QTY4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweCA7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuLnVwbG9hZHtcclxuICAgIC0tYmFja2dyb3VuZDogIzNENUE2ODtcclxuICAgIHdpZHRoOiAyMjBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgIGlvbi1sYWJlbHtcclxuICAgICAgICBmb250LWZhbWlseTogYWNyb207XHJcbiAgICB9XHJcbiAgICBpb24taWNvbnsgXHJcbiAgICAgICAgZm9udC1zaXplOiAzMDBweDtcclxuICAgIH1cclxuICAgXHJcblxyXG59XHJcblxyXG4iXX0= */");

/***/ }),

/***/ "qULd":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, d, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hapticImpact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelectionEnd; });
const HapticEngine = {
  getEngine() {
    const win = window;
    return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
  },
  available() {
    return !!this.getEngine();
  },
  isCordova() {
    return !!window.TapticEngine;
  },
  isCapacitor() {
    const win = window;
    return !!win.Capacitor;
  },
  impact(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.impact({ style });
  },
  notification(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.notification({ style });
  },
  selection() {
    this.impact({ style: 'light' });
  },
  selectionStart() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionStart();
    }
    else {
      engine.gestureSelectionStart();
    }
  },
  selectionChanged() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionChanged();
    }
    else {
      engine.gestureSelectionChanged();
    }
  },
  selectionEnd() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionEnd();
    }
    else {
      engine.gestureSelectionEnd();
    }
  }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
  HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
  HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
  HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
  HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
  HapticEngine.impact(options);
};




/***/ }),

/***/ "xrCV":
/*!***************************************!*\
  !*** ./src/app/create/create.page.ts ***!
  \***************************************/
/*! exports provided: CreatePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePage", function() { return CreatePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_create_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./create.page.html */ "Ccx/");
/* harmony import */ var _create_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create.page.scss */ "4vh3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _crud_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../crud.service */ "1vsn");





let CreatePage = class CreatePage {
    constructor(crud) {
        this.crud = crud;
        this.material = "";
        this.description = "";
        this.cagette = "";
        this.hideMe = true;
        this.crud.databaseConn();
    }
    ngOnInit() { }
    ionViewDidEnter() {
        this.crud.getAllProducts();
    }
    createProduct() {
        this.crud.addProduct(this.material, this.description, this.cagette);
    }
    remove(product) {
        this.crud.deleteProduct(product);
    }
    hide() {
        this.hideMe = false;
    }
    show() {
        this.hideMe = true;
    }
};
CreatePage.ctorParameters = () => [
    { type: _crud_service__WEBPACK_IMPORTED_MODULE_4__["CrudService"] }
];
CreatePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-create',
        template: _raw_loader_create_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_create_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CreatePage);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map