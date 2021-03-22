(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /app/src/main.ts */"zUnb");


/***/ }),

/***/ "0oYm":
/*!***************************************************!*\
  !*** ./src/app/components/menu/menu.component.ts ***!
  \***************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _svg_svg_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../svg/svg.component */ "4/Rz");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class MenuComponent {
    constructor() {
        this.isMenuOpen = true;
        this.menuOpenChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    changeMenuOpen() {
        this.menuOpenChanged.emit(this.isMenuOpen);
    }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(); };
MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["rfr-menu"]], inputs: { isMenuOpen: "isMenuOpen" }, outputs: { menuOpenChanged: "menuOpenChanged" }, decls: 23, vars: 11, consts: [[1, "menu-icon", 3, "name", "routerLink", "click"], [1, "logo-icon"], [1, "menu-options-div"], [1, "tasks-list-option", 3, "routerLink", "click"], [1, "menu-icon", 3, "name"], [1, "add-task-option", 3, "routerLink"], [1, "login-option", 3, "routerLink"], [1, "app-settings-option", 3, "routerLink"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "rfr-svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_rfr_svg_click_0_listener() { return ctx.changeMenuOpen(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Logo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_a_click_4_listener() { return ctx.changeMenuOpen(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "rfr-svg", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Taks list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "rfr-svg", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Add task");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "rfr-svg", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "rfr-svg", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "App settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Reusable buttons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", "menu-return-icon")("routerLink", "/");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", "menu-tasks-list-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "../addTask");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", "menu-add-task-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "../login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", "menu-login-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "../settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", "menu-app-settings-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "../buttons-test");
    } }, directives: [_svg_svg_component__WEBPACK_IMPORTED_MODULE_1__["SvgComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: [".menu-options-div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: rgba(255, 255, 255, 0.8);\n  -webkit-backdrop-filter: blur(6px);\n          backdrop-filter: blur(6px);\n}\n\n.tasks-list-option[_ngcontent-%COMP%], .add-task-option[_ngcontent-%COMP%], .login-option[_ngcontent-%COMP%], .app-settings-option[_ngcontent-%COMP%] {\n  width: 46%;\n  text-decoration: none;\n  font-size: 22px;\n  display: flex;\n  align-items: center;\n  margin: 0 0 0 30px;\n  color: #000;\n}\n\n.tasks-list-option[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%], .add-task-option[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%], .login-option[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%], .app-settings-option[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  text-align: left;\n  align-items: flex-end;\n  margin: 0px 16px 0px 0px;\n  width: 40px;\n  justify-content: end;\n}\n\n.login-option[_ngcontent-%COMP%] {\n  background: linear-gradient(93.88deg, #FE6F6F 0.66%, #3B7CCC 94.89%);\n  border-radius: 45px;\n  padding: 8px 14px;\n  color: white;\n  width: 105px;\n}\n\n.menu-icon[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  text-align: left;\n  max-width: 24px;\n  margin: 15px;\n  display: flex;\n  align-items: flex-end;\n  justify-content: end;\n}\n\n.logo-icon[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  text-align: right;\n  height: auto;\n  margin: 15px 20px 0 0;\n}\n\nsvg[_ngcontent-%COMP%] {\n  width: 49px;\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  height: auto;\n  margin: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL21lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLGtDQUFBO1VBQUEsMEJBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFDRjs7QUFBRTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0Esd0JBQUE7RUFDQSxXQUFBO0VBQ0Ysb0JBQUE7QUFFRjs7QUFFQTtFQUNFLG9FQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUFDRjs7QUFDQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFFRiIsImZpbGUiOiJtZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lbnUtb3B0aW9ucy1kaXYge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDZweCk7XHJcbn1cclxuXHJcbi50YXNrcy1saXN0LW9wdGlvbiwgLmFkZC10YXNrLW9wdGlvbiwgLmxvZ2luLW9wdGlvbiwgLmFwcC1zZXR0aW5ncy1vcHRpb24ge1xyXG4gIHdpZHRoOiA0NiU7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAwIDAgMCAzMHB4O1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIC5tZW51LWljb24ge1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgIG1hcmdpbjogMHB4IDE2cHggMHB4IDBweDtcclxuICAgIHdpZHRoOjQwcHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XHJcbiAgfVxyXG59XHJcblxyXG4ubG9naW4tb3B0aW9ue1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5My44OGRlZywgI0ZFNkY2RiAwLjY2JSwgIzNCN0NDQyA5NC44OSUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDQ1cHg7XHJcbiAgcGFkZGluZzogOHB4IDE0cHg7XHJcbiAgY29sb3I6d2hpdGU7XHJcbiAgd2lkdGg6MTA1cHg7XHJcbn1cclxuXHJcbi5tZW51LWljb24ge1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIG1heC13aWR0aDogMjRweDtcclxuICBtYXJnaW46IDE1cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XHJcbn1cclxuXHJcbi5sb2dvLWljb24ge1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBoZWlnaHQ6YXV0bztcclxuICBtYXJnaW46IDE1cHggMjBweCAwIDA7XHJcbn1cclxuc3Zne1xyXG4gIHdpZHRoOjQ5cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDowcHg7XHJcbiAgcmlnaHQ6MHB4O1xyXG4gIGhlaWdodDogYXV0bztcclxuICBtYXJnaW46MTVweDtcclxufVxyXG5cclxuIl19 */"] });


/***/ }),

/***/ "2PIz":
/*!**************************************************************!*\
  !*** ./src/app/pages/app-settings/app-settings.component.ts ***!
  \**************************************************************/
/*! exports provided: AppSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSettingsComponent", function() { return AppSettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AppSettingsComponent {
    constructor() { }
    ngOnInit() {
    }
}
AppSettingsComponent.ɵfac = function AppSettingsComponent_Factory(t) { return new (t || AppSettingsComponent)(); };
AppSettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppSettingsComponent, selectors: [["app-app-settings"]], decls: 2, vars: 0, template: function AppSettingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "app-settings works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAtc2V0dGluZ3MuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "4/Rz":
/*!*************************************************!*\
  !*** ./src/app/components/svg/svg.component.ts ***!
  \*************************************************/
/*! exports provided: SvgComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvgComponent", function() { return SvgComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function SvgComponent__svg_svg_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("fill", ctx_r0.color);
} }
function SvgComponent__svg_svg_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("fill", ctx_r1.color);
} }
function SvgComponent__svg_svg_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("fill", ctx_r2.color);
} }
function SvgComponent__svg_svg_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("fill", ctx_r3.color);
} }
function SvgComponent__svg_svg_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("fill", ctx_r4.color);
} }
function SvgComponent__svg_svg_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("fill", ctx_r5.color);
} }
function SvgComponent__svg_svg_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("fill", ctx_r6.color);
} }
function SvgComponent__svg_svg_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("fill", ctx_r7.color);
} }
function SvgComponent__svg_svg_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "g", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "g", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "circle", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "path", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "animateTransform", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("stroke", ctx_r8.color);
} }
function SvgComponent__svg_svg_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("fill", ctx_r9.color);
} }
function SvgComponent__svg_svg_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "g", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("stroke", ctx_r10.color);
} }
class SvgComponent {
    constructor() {
        this.size = 1;
        this.color = 'black';
    }
    ngOnInit() { }
}
SvgComponent.ɵfac = function SvgComponent_Factory(t) { return new (t || SvgComponent)(); };
SvgComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SvgComponent, selectors: [["rfr-svg"]], inputs: { name: "name", size: "size", color: "color" }, decls: 11, vars: 11, consts: [["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", 4, "ngIf"], ["width", "24", "height", "24", "viewBox", "-2 -2 42 42", "xmlns", "http://www.w3.org/2000/svg", 4, "ngIf"], ["xmlns", "http://www.w3.org/2000/svg", "width", "12px", "height", "12px", "viewBox", "0 0 30.239 30.239", 4, "ngIf"], ["viewBox", "0.0 18.0 85.0 30.0", "fill", "none", "width", "15px", "height", "15px", "xmlns", "http://www.w3.org/2000/svg", 4, "ngIf"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24"], ["d", "M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"], ["d", "M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7.753 18.305c-.261-.586-.789-.991-1.871-1.241-2.293-.529-4.428-.993-3.393-2.945 3.145-5.942.833-9.119-2.489-9.119-3.388 0-5.644 3.299-2.489 9.119 1.066 1.964-1.148 2.427-3.393 2.945-1.084.25-1.608.658-1.867 1.246-1.405-1.723-2.251-3.919-2.251-6.31 0-5.514 4.486-10 10-10s10 4.486 10 10c0 2.389-.845 4.583-2.247 6.305z"], ["d", "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z"], ["d", "M22 2v20h-20v-20h20zm2-2h-24v24h24v-24zm-4 7h-8v1h8v-1zm0 5h-8v1h8v-1zm0 5h-8v1h8v-1zm-10.516-11.304l-.71-.696-2.553 2.607-1.539-1.452-.698.71 2.25 2.135 3.25-3.304zm0 5l-.71-.696-2.552 2.607-1.539-1.452-.698.709 2.249 2.136 3.25-3.304zm0 5l-.71-.696-2.552 2.607-1.539-1.452-.698.709 2.249 2.136 3.25-3.304z"], ["d", "M24 14.187v-4.374c-2.148-.766-2.726-.802-3.027-1.529-.303-.729.083-1.169 1.059-3.223l-3.093-3.093c-2.026.963-2.488 1.364-3.224 1.059-.727-.302-.768-.889-1.527-3.027h-4.375c-.764 2.144-.8 2.725-1.529 3.027-.752.313-1.203-.1-3.223-1.059l-3.093 3.093c.977 2.055 1.362 2.493 1.059 3.224-.302.727-.881.764-3.027 1.528v4.375c2.139.76 2.725.8 3.027 1.528.304.734-.081 1.167-1.059 3.223l3.093 3.093c1.999-.95 2.47-1.373 3.223-1.059.728.302.764.88 1.529 3.027h4.374c.758-2.131.799-2.723 1.537-3.031.745-.308 1.186.099 3.215 1.062l3.093-3.093c-.975-2.05-1.362-2.492-1.059-3.223.3-.726.88-.763 3.027-1.528zm-4.875.764c-.577 1.394-.068 2.458.488 3.578l-1.084 1.084c-1.093-.543-2.161-1.076-3.573-.49-1.396.581-1.79 1.693-2.188 2.877h-1.534c-.398-1.185-.791-2.297-2.183-2.875-1.419-.588-2.507-.045-3.579.488l-1.083-1.084c.557-1.118 1.066-2.18.487-3.58-.579-1.391-1.691-1.784-2.876-2.182v-1.533c1.185-.398 2.297-.791 2.875-2.184.578-1.394.068-2.459-.488-3.579l1.084-1.084c1.082.538 2.162 1.077 3.58.488 1.392-.577 1.785-1.69 2.183-2.875h1.534c.398 1.185.792 2.297 2.184 2.875 1.419.588 2.506.045 3.579-.488l1.084 1.084c-.556 1.121-1.065 2.187-.488 3.58.577 1.391 1.689 1.784 2.875 2.183v1.534c-1.188.398-2.302.791-2.877 2.183zm-7.125-5.951c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3zm0-2c-2.762 0-5 2.238-5 5s2.238 5 5 5 5-2.238 5-5-2.238-5-5-5z"], ["d", "M16 2c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6zm0-2c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm-5.405 16.4l-1.472 1.6h-3.123v2h-2v2h-2v-2.179l5.903-5.976c-.404-.559-.754-1.158-1.038-1.795l-6.865 6.95v5h6v-2h2v-2h2l2.451-2.663c-.655-.249-1.276-.562-1.856-.937zm7.405-11.4c.551 0 1 .449 1 1s-.449 1-1 1-1-.449-1-1 .449-1 1-1zm0-1c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2z"], ["d", "M16 9v-4l8 7-8 7v-4h-8v-6h8zm-2 10v-.083c-1.178.685-2.542 1.083-4 1.083-4.411 0-8-3.589-8-8s3.589-8 8-8c1.458 0 2.822.398 4 1.083v-2.245c-1.226-.536-2.577-.838-4-.838-5.522 0-10 4.477-10 10s4.478 10 10 10c1.423 0 2.774-.302 4-.838v-2.162z"], ["d", "M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"], ["width", "24", "height", "24", "viewBox", "-2 -2 42 42", "xmlns", "http://www.w3.org/2000/svg"], ["fill", "none", "fill-rule", "evenodd"], ["transform", "translate(1 1)", "stroke-width", "4"], ["stroke-opacity", ".5", "cx", "18", "cy", "18", "r", "18"], ["d", "M36 18c0-9.94-8.06-18-18-18"], ["attributeName", "transform", "type", "rotate", "from", "0 18 18", "to", "360 18 18", "dur", "1s", "repeatCount", "indefinite"], ["xmlns", "http://www.w3.org/2000/svg", "width", "12px", "height", "12px", "viewBox", "0 0 30.239 30.239"], ["d", "M20.194,3.46c-4.613-4.613-12.121-4.613-16.734,0c-4.612,4.614-4.612,12.121,0,16.735\n\t\tc4.108,4.107,10.506,4.547,15.116,1.34c0.097,0.459,0.319,0.897,0.676,1.254l6.718,6.718c0.979,0.977,2.561,0.977,3.535,0\n\t\tc0.978-0.978,0.978-2.56,0-3.535l-6.718-6.72c-0.355-0.354-0.794-0.577-1.253-0.674C24.743,13.967,24.303,7.57,20.194,3.46z\n\t\t M18.073,18.074c-3.444,3.444-9.049,3.444-12.492,0c-3.442-3.444-3.442-9.048,0-12.492c3.443-3.443,9.048-3.443,12.492,0\n\t\tC21.517,9.026,21.517,14.63,18.073,18.074z"], ["viewBox", "0.0 18.0 85.0 30.0", "fill", "none", "width", "15px", "height", "15px", "xmlns", "http://www.w3.org/2000/svg"], ["clip-path", "url(#p.0)"], ["stroke-width", "8.0", "stroke-linejoin", "round", "stroke-linecap", "butt", "d", "m0 0l13.952756 0l0 0l20.929134 0l48.83465 0l0 29.304462l0 0l0 12.559055l0 8.372704l-48.83465 0l-21.082893 16.740211l0.153759 -16.740211l-13.952756 0l0 -8.372704l0 -12.559055l0 0z", "fill-rule", "evenodd"]], template: function SvgComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SvgComponent__svg_svg_0_Template, 2, 1, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SvgComponent__svg_svg_1_Template, 2, 1, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SvgComponent__svg_svg_2_Template, 2, 1, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SvgComponent__svg_svg_3_Template, 2, 1, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SvgComponent__svg_svg_4_Template, 2, 1, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SvgComponent__svg_svg_5_Template, 2, 1, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SvgComponent__svg_svg_6_Template, 2, 1, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SvgComponent__svg_svg_7_Template, 2, 1, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SvgComponent__svg_svg_8_Template, 6, 1, "svg", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SvgComponent__svg_svg_9_Template, 3, 1, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SvgComponent__svg_svg_10_Template, 3, 1, "svg", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.name == "menu-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.name == "menu-my-account-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.name == "menu-add-task-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.name == "menu-tasks-list-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.name == "menu-app-settings-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.name == "menu-login-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.name == "menu-logout-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.name == "menu-return-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.name == "loader");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.name == "magnifier");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.name == "speech_bubble");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdmcuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "6NlH":
/*!**************************************************************************!*\
  !*** ./src/app/pages/success-added-task/success-added-task.component.ts ***!
  \**************************************************************************/
/*! exports provided: SuccessAddedTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessAddedTaskComponent", function() { return SuccessAddedTaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class SuccessAddedTaskComponent {
    constructor() { }
    ngOnInit() {
    }
}
SuccessAddedTaskComponent.ɵfac = function SuccessAddedTaskComponent_Factory(t) { return new (t || SuccessAddedTaskComponent)(); };
SuccessAddedTaskComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SuccessAddedTaskComponent, selectors: [["app-success-added-task"]], decls: 12, vars: 0, consts: [[1, "main"], [1, "logo"], [1, "logo__text"], [1, "info-text"], [1, "buttons"], [1, "see-task"], [1, "back"]], template: function SuccessAddedTaskComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "noffi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "That's all! Your task has been added");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "See task");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Back to the tasks list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".main[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n  box-sizing: border-box;\n  background: #F8F8F8;\n}\n\n.logo[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  margin-bottom: 0.7rem;\n}\n\n.logo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 1rem 1rem 0 0;\n  font-size: 1.5rem;\n  font-weight: 900;\n}\n\n.info-text[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 0.5rem;\n}\n\n.info-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: transparent;\n  background-image: linear-gradient(92.92deg, #3E7DCD 7.89%, #F47176 88.6%);\n  -webkit-background-clip: text;\n          background-clip: text;\n  font-weight: 900;\n  font-size: 2.2rem;\n}\n\n.buttons[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 0.5rem;\n}\n\n.buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 1rem;\n  border: none;\n  border-radius: 10px;\n  padding: 0.5rem;\n  margin: 0 0.5rem;\n}\n\n.see-task[_ngcontent-%COMP%] {\n  background: linear-gradient(235.25deg, #535252 16.85%, #343434 61.61%);\n  color: #fff;\n}\n\n.back[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #504F4F;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3N1Y2Nlc3MtYWRkZWQtdGFzay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLHlFQUFBO0VBQ0EsNkJBQUE7VUFBQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxzRUFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtBQUNGIiwiZmlsZSI6InN1Y2Nlc3MtYWRkZWQtdGFzay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluIHtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJhY2tncm91bmQ6ICNGOEY4Rjg7XHJcbn1cclxuXHJcbi5sb2dvIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMC43cmVtO1xyXG59XHJcblxyXG4ubG9nbyBwIHtcclxuICBtYXJnaW46IDFyZW0gMXJlbSAwIDA7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxufVxyXG5cclxuLmluZm8tdGV4dCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDAuNXJlbTtcclxufVxyXG5cclxuLmluZm8tdGV4dCBwIHtcclxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkyLjkyZGVnLCAjM0U3RENEIDcuODklLCAjRjQ3MTc2IDg4LjYlKTtcclxuICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICBmb250LXNpemU6IDIuMnJlbTtcclxufVxyXG5cclxuLmJ1dHRvbnMge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwLjVyZW07XHJcbn1cclxuXHJcbi5idXR0b25zIGJ1dHRvbiB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDAuNXJlbTtcclxuICBtYXJnaW46IDAgMC41cmVtO1xyXG59XHJcblxyXG4uc2VlLXRhc2sge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyMzUuMjVkZWcsICM1MzUyNTIgMTYuODUlLCAjMzQzNDM0IDYxLjYxJSk7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5iYWNrIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGNvbG9yOiAjNTA0RjRGO1xyXG59Il19 */"] });


/***/ }),

/***/ "6ovx":
/*!**************************************************************!*\
  !*** ./src/app/pages/task-details/task-details.component.ts ***!
  \**************************************************************/
/*! exports provided: TaskDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskDetailsComponent", function() { return TaskDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class TaskDetailsComponent {
    constructor() { }
    ngOnInit() {
    }
}
TaskDetailsComponent.ɵfac = function TaskDetailsComponent_Factory(t) { return new (t || TaskDetailsComponent)(); };
TaskDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TaskDetailsComponent, selectors: [["rfr-task-details"]], decls: 114, vars: 0, consts: [[1, "Title"], [1, "SubTitle", "Photos"], [1, "Photo-contanier"], [1, "Photo"], [1, "Task-option-contanier-A"], [1, "Task-option-A", "BTNsmall"], [1, "Task-option-A", "counter"], [1, "Task-option-A", "BTNbig"], [1, "AdvertDetalis-contanier"], [1, "SubTitle", "Description"], [1, "Detalis-contanier"], [1, "SubTitle", "Location"], [1, "Location-contanier"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24"], ["d", "M12 2c3.196 0 6 2.618 6 5.602 0 3.093-2.493 7.132-6 12.661-3.507-5.529-6-9.568-6-12.661 0-2.984 2.804-5.602 6-5.602m0-2c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"], [2, "display", "flex", "align-items", "center", "margin", "36px 0px 0px 26px"], [1, "BiggerSubtitle"], [1, "NewComment"], [1, "Comment-contanier"], [1, "Comment-block"], [1, "InComment-button-contanier"], [1, "Comment-block", "No-comment"], [1, "More-comment-button"]], template: function TaskDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "See details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Photos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u2764");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\uD83C\uDFF4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "+1234");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "See grouped");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\uD83D\uDDD1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Added yesterday at 11:32 AM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Category: Pavement damage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h4", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " I found some missing cubes paving stones in the sidewalk. It\u2019s quite dangerous. I almost twist my ankle!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h4", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "svg", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "path", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " \u015Arem, ul. Mickiewicza 12 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "View in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Google maps ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h2", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Comment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Add new comment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "John");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "2 hours ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "[edited]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "I almost twist my ankle too!!!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "\u2B05Reply");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "John");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "2 hours ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "[edited]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "I almost twist my ankle too!!!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "\u2B05Reply");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "John");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "2 hours ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "[edited]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "I almost twist my ankle too!!!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "\u2B05Reply");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "John");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "2 hours ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "[edited]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "I almost twist my ankle too!!!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "\u2B05Reply");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "See more comments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["body[_ngcontent-%COMP%] {\n  font-family: Roboto;\n  font-style: normal;\n  background: #F8F8F8;\n}\n\n.Title[_ngcontent-%COMP%] {\n  font-weight: 900;\n  font-size: 31px;\n  line-height: 36px;\n  color: #000000;\n  margin: 50px 0px 0px 26px;\n}\n\n.SubTitle[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 14.9665px;\n  line-height: 18px;\n  display: flex;\n  width: 60%;\n  align-items: center;\n  margin: 22px auto 12px 26px;\n  color: #000000;\n  opacity: 0.65;\n}\n\n.Photo-contanier[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 0px;\n  padding: 0px 26px 0px 26px;\n  overflow-x: auto;\n}\n\n.Photo[_ngcontent-%COMP%] {\n  min-width: 97px;\n  max-width: 97px;\n  height: 101px;\n  background: red;\n  border-radius: 10px;\n  margin: auto 8px 8px 0px;\n  display: block;\n}\n\n.AdvertDetalis-contanier[_ngcontent-%COMP%] {\n  font-weight: 500;\n  line-height: 9px;\n  display: flex;\n  width: 50%;\n  flex-direction: column;\n  float: left;\n  margin: 5px 0px 15px 26px;\n}\n\n.AdvertDetalis-contanier[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin: 0px 0px 3px 0px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  border: none;\n  font-weight: bold;\n  text-align: center;\n  color: #323232;\n}\n\n.Task-option-A[_ngcontent-%COMP%] {\n  background: #F1F1F1;\n  border-radius: 41px;\n  height: 29px;\n  margin: 2px;\n  float: right;\n}\n\n.BTNsmall[_ngcontent-%COMP%] {\n  width: 29px;\n  max-width: 29px;\n  min-width: 29px;\n}\n\n.BTNbig[_ngcontent-%COMP%] {\n  padding: 4px 10px;\n}\n\n.counter[_ngcontent-%COMP%] {\n  font-weight: 500;\n  text-align: center;\n  display: inline-block;\n  padding: 4px 10px;\n  height: 21px;\n}\n\n.Task-option-contanier-A[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  float: right;\n  height: auto;\n  width: auto;\n  margin: 0px 10px 0px 26px;\n}\n\n.Detalis-contanier[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 15px;\n  line-height: 18px;\n  color: #575757;\n  margin: 0px 10px 0px 26px;\n}\n\n.Location-contanier[_ngcontent-%COMP%] {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin: 0px auto 0px 26px;\n}\n\n.Location-contanier[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  width: 305px;\n  height: auto;\n  padding: 16px 9px;\n  background: #F1F1F1;\n  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);\n  border-radius: 10px;\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 16px;\n  display: flex;\n  align-items: center;\n  position: relative;\n  color: #9F9F9F;\n  max-width: calc(90%-26px);\n}\n\n.Location-contanier[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  height: 20px;\n  width: auto;\n  fill: #9F9F9F;\n  margin: 0px 8px 0px 0px;\n}\n\n.Location-contanier[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 75px;\n  height: 36px;\n  background: #E7E7E7;\n  border-radius: 8px;\n  font-weight: bold;\n  font-size: 9px;\n  line-height: 12px;\n  display: block;\n  border: none;\n  text-align: left;\n  position: absolute;\n  right: 8px;\n  color: #808080;\n  filter: drop-shadow(0px 1px 10px rgba(0, 0, 0, 0.05));\n}\n\n.BiggerSubtitle[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 24px;\n  line-height: 28px;\n  display: flex;\n  align-items: center;\n  color: #3E3E3E;\n}\n\n.NewComment[_ngcontent-%COMP%] {\n  background: #F1F1F1;\n  box-shadow: 0px 1px 9px -3px rgba(0, 0, 0, 0.13);\n  border-radius: 6px;\n  padding: 7px 6px;\n  font-weight: 700;\n  font-size: 10px;\n  line-height: 12px;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  margin: 0px 0px 0px 15px;\n  color: #B5B5B5;\n}\n\n.Comment-block[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  width: 323px;\n  max-width: 90%;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  display: inline-block;\n  background: #FFFFFF;\n  box-shadow: 0px 1px 9px -3px rgba(0, 0, 0, 0.13);\n  border-radius: 8px;\n  position: relative;\n  width: 100%;\n  margin: 0px 0px 17px 0px;\n}\n\n.Comment-block[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 17.5846px;\n  line-height: 21px;\n  display: flex;\n  float: left;\n  align-items: center;\n  margin: 9px 4px 0px 8px;\n  color: #3C3C3C;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n\n.Comment-block[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 0px;\n  font-weight: bold;\n  font-size: 8px;\n  line-height: 9px;\n  display: flex;\n  margin: 9px 0px 0px 0px;\n  color: rgba(60, 60, 60, 0.88);\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n\n.Comment-block[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 7px;\n  margin: 2px 0px;\n  line-height: 5px;\n  display: flex;\n  align-items: center;\n  color: rgba(60, 60, 60, 0.88);\n}\n\n.Comment-block[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 10px 0px 32px 8px;\n  color: #3c3c3cc9;\n  font-weight: bold;\n  font-size: 11px;\n  line-height: 12px;\n}\n\n.Comment-block[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 8px;\n  line-height: 9px;\n  display: flex;\n  align-items: center;\n  background: none;\n  margin: 0px 0px 0px 3px;\n  border: none;\n  color: #6C6C6C;\n}\n\n.Comment-contanier[_ngcontent-%COMP%] {\n  justify-content: center;\n  display: flex;\n  flex-direction: column;\n  padding: 0px 0px 0px 26px;\n}\n\n.No-comment[_ngcontent-%COMP%] {\n  max-width: 80%;\n}\n\n.InComment-button-contanier[_ngcontent-%COMP%] {\n  display: flex;\n  position: absolute;\n  bottom: 6px;\n  right: 8px;\n}\n\n.More-comment-button[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 13px;\n  line-height: 15px;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  color: rgba(60, 60, 60, 0.7);\n  margin: 9px auto 18px auto;\n  background: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Rhc2stZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUNBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7QUFFSjs7QUFBQTtFQUNJLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FBR0o7O0FBREE7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7QUFJSjs7QUFGQTtFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0VBQ0EsY0FBQTtBQUtKOztBQUhBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUFNSjs7QUFMSTtFQUNJLHVCQUFBO0FBT1I7O0FBSkE7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFPSjs7QUFMQTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFRSjs7QUFMQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQVFKOztBQU5BO0VBQ0ksaUJBQUE7QUFTSjs7QUFQQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQVVKOztBQVBBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQVVKOztBQVJBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxjQUFBO0VBQ0EseUJBQUE7QUFVQTs7QUFMQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLHlCQUFBO0FBUUE7O0FBUEE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQVNKOztBQVBBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUFTSjs7QUFQQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxxREFBQTtBQVNKOztBQU5BO0VBQ0ksaUJBQUE7RUFDSixlQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFFQSxjQUFBO0FBUUE7O0FBTkM7RUFDRyxtQkFBQTtFQUNKLGdEQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLGNBQUE7QUFTQTs7QUFOQTtFQUNJLGtCQUFBO0VBQW9CLFdBQUE7RUFDeEIsWUFBQTtFQUNBLGNBQUE7RUFDQSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0RBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQW9CLFdBQUE7RUFDcEIsd0JBQUE7QUFXQTs7QUFWQTtFQUNJLGlCQUFBO0VBQ0osb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7QUFZQTs7QUFWQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLDZCQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0FBWUE7O0FBVEE7RUFDSSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQVdKOztBQVRBO0VBQ0kseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBV0o7O0FBVEE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQVdBOztBQVJBO0VBQ0ksdUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtBQVdKOztBQVRBO0VBQ0ksY0FBQTtBQVlKOztBQVZBO0VBQ1EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFhUjs7QUFYQTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7QUFjSiIsImZpbGUiOiJ0YXNrLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5e1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGJhY2tncm91bmQ6ICNGOEY4Rjg7XHJcbn1cclxuLlRpdGxle1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIGZvbnQtc2l6ZTogMzFweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICBtYXJnaW46IDUwcHggMHB4IDBweCAyNnB4O1xyXG59XHJcbi5TdWJUaXRsZXtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxNC45NjY1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbjoyMnB4IGF1dG8gMTJweCAyNnB4O1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICBvcGFjaXR5OiAwLjY1O1xyXG59XHJcbi5QaG90by1jb250YW5pZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBwYWRkaW5nOiAwcHggMjZweCAwcHggMjZweDtcclxuICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbn1cclxuLlBob3Rve1xyXG4gICAgbWluLXdpZHRoOiA5N3B4O1xyXG4gICAgbWF4LXdpZHRoOiA5N3B4O1xyXG4gICAgaGVpZ2h0OiAxMDFweDtcclxuICAgIGJhY2tncm91bmQ6IHJlZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBtYXJnaW46YXV0byA4cHggOHB4IDBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5BZHZlcnREZXRhbGlzLWNvbnRhbmllcntcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBsaW5lLWhlaWdodDogOXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW46NXB4IDBweCAxNXB4IDI2cHg7XHJcbiAgICBoNntcclxuICAgICAgICBtYXJnaW46MHB4IDBweCAzcHggMHB4O1xyXG4gICAgfVxyXG59XHJcbmJ1dHRvbntcclxuICAgIGJvcmRlcjpub25lO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzMyMzIzMjtcclxufVxyXG4uVGFzay1vcHRpb24tQXtcclxuICAgIGJhY2tncm91bmQ6ICNGMUYxRjE7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0MXB4O1xyXG4gICAgaGVpZ2h0OjI5cHg7XHJcbiAgICBtYXJnaW46MnB4O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgXHJcbn1cclxuLkJUTnNtYWxse1xyXG4gICAgd2lkdGg6MjlweDtcclxuICAgIG1heC13aWR0aDoyOXB4O1xyXG4gICAgbWluLXdpZHRoOjI5cHg7XHJcbn1cclxuLkJUTmJpZ3tcclxuICAgIHBhZGRpbmc6NHB4IDEwcHg7XHJcbn1cclxuLmNvdW50ZXJ7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzo0cHggMTBweDtcclxuICAgIGhlaWdodDogMjFweDtcclxuICAgIFxyXG59XHJcbi5UYXNrLW9wdGlvbi1jb250YW5pZXItQXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIG1hcmdpbjowcHggMTBweCAwcHggMjZweDtcclxufVxyXG4uRGV0YWxpcy1jb250YW5pZXJ7XHJcbmZvbnQtd2VpZ2h0OiA1MDA7XHJcbmZvbnQtc2l6ZTogMTVweDtcclxubGluZS1oZWlnaHQ6IDE4cHg7XHJcblxyXG5jb2xvcjogIzU3NTc1NztcclxubWFyZ2luOjBweCAxMHB4IDBweCAyNnB4O1xyXG59XHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLkxvY2F0aW9uLWNvbnRhbmllcntcclxud2lkdGg6IGZpdC1jb250ZW50O1xyXG5tYXJnaW46IDBweCBhdXRvIDBweCAyNnB4O1xyXG5kaXZ7XHJcbiAgICB3aWR0aDogMzA1cHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBwYWRkaW5nOjE2cHggOXB4O1xyXG4gICAgYmFja2dyb3VuZDogI0YxRjFGMTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAxcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgY29sb3I6ICM5RjlGOUY7XHJcbiAgICBtYXgtd2lkdGg6IGNhbGMoOTAlLTI2cHgpO1xyXG59XHJcbnN2Z3tcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIHdpZHRoOmF1dG87XHJcbiAgICBmaWxsOiM5RjlGOUY7XHJcbiAgICBtYXJnaW46MHB4IDhweCAwcHggMHB4O1xyXG59XHJcbmJ1dHRvbntcclxuICAgIHdpZHRoOiA3NXB4O1xyXG4gICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgYmFja2dyb3VuZDogI0U3RTdFNztcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiA5cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTJweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiA4cHg7XHJcbiAgICBjb2xvcjogIzgwODA4MDtcclxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDFweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4wNSkpO1xyXG59fVxyXG5cclxuLkJpZ2dlclN1YnRpdGxle1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbmZvbnQtc2l6ZTogMjRweDtcclxubGluZS1oZWlnaHQ6IDI4cHg7XHJcbmRpc3BsYXk6IGZsZXg7XHJcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG5jb2xvcjogIzNFM0UzRTtcclxuXHJcbn0uTmV3Q29tbWVudHtcclxuICAgIGJhY2tncm91bmQ6ICNGMUYxRjE7XHJcbmJveC1zaGFkb3c6IDBweCAxcHggOXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjEzKTtcclxuYm9yZGVyLXJhZGl1czogNnB4O1xyXG5wYWRkaW5nOjdweCA2cHg7XHJcbmZvbnQtd2VpZ2h0OiA3MDA7XHJcbmZvbnQtc2l6ZTogMTBweDtcclxubGluZS1oZWlnaHQ6IDEycHg7XHJcbmRpc3BsYXk6IGZsZXg7XHJcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxubWFyZ2luOjBweCAwcHggMHB4IDE1cHg7XHJcbmNvbG9yOiAjQjVCNUI1O1xyXG59XHJcblxyXG4uQ29tbWVudC1ibG9ja3tcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgd2lkdGg6MTAwJTtcclxud2lkdGg6IDMyM3B4O1xyXG5tYXgtd2lkdGg6IDkwJTtcclxuaGVpZ2h0OiBmaXQtY29udGVudDtcclxuZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5iYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG5ib3gtc2hhZG93OiAwcHggMXB4IDlweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4xMyk7XHJcbmJvcmRlci1yYWRpdXM6IDhweDtcclxucG9zaXRpb246IHJlbGF0aXZlOyB3aWR0aDoxMDAlO1xyXG5tYXJnaW46IDBweCAwcHggMTdweCAwcHg7XHJcbmgze1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbmZvbnQtc2l6ZTogMTcuNTg0NnB4O1xyXG5saW5lLWhlaWdodDogMjFweDtcclxuZGlzcGxheTogZmxleDtcclxuZmxvYXQ6IGxlZnQ7XHJcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbm1hcmdpbjo5cHggNHB4IDBweCA4cHg7XHJcbmNvbG9yOiAjM0MzQzNDO1xyXG5oZWlnaHQ6IGZpdC1jb250ZW50O1xyXG59XHJcbmg1e1xyXG5tYXJnaW46MHB4O1xyXG5mb250LXdlaWdodDogYm9sZDtcclxuZm9udC1zaXplOiA4cHg7XHJcbmxpbmUtaGVpZ2h0OiA5cHg7XHJcbmRpc3BsYXk6IGZsZXg7XHJcbm1hcmdpbjo5cHggMHB4IDBweCAwcHg7XHJcbmNvbG9yOiByZ2JhKDYwLCA2MCwgNjAsIDAuODgpO1xyXG53aWR0aDpmaXQtY29udGVudDtcclxuaGVpZ2h0OiBmaXQtY29udGVudDtcclxuXHJcbn1cclxuaDZ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogN3B4O1xyXG4gICAgbWFyZ2luOiAycHggMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgY29sb3I6IHJnYmEoNjAsIDYwLCA2MCwgMC44OCk7XHJcbn1cclxuaDR7XHJcbiAgICBtYXJnaW46IDEwcHggMHB4IDMycHggOHB4O1xyXG4gICAgY29sb3I6ICMzYzNjM2NjOTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEycHg7XHJcbn1cclxuYnV0dG9ue1xyXG5mb250LXdlaWdodDogNTAwO1xyXG5mb250LXNpemU6IDhweDtcclxubGluZS1oZWlnaHQ6IDlweDtcclxuZGlzcGxheTogZmxleDtcclxuYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYmFja2dyb3VuZDpub25lO1xyXG5tYXJnaW46MHB4IDBweCAwcHggM3B4O1xyXG5ib3JkZXI6bm9uZTtcclxuY29sb3I6ICM2QzZDNkM7XHJcbn1cclxufVxyXG4uQ29tbWVudC1jb250YW5pZXJ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcGFkZGluZzogMHB4IDBweCAwcHggMjZweDtcclxufVxyXG4uTm8tY29tbWVudHtcclxuICAgIG1heC13aWR0aDogODAlO1xyXG59XHJcbi5JbkNvbW1lbnQtYnV0dG9uLWNvbnRhbmllcntcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IDZweDtcclxuICAgICAgICByaWdodDogOHB4O1xyXG59XHJcbi5Nb3JlLWNvbW1lbnQtYnV0dG9ue1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHJnYmEoNjAsIDYwLCA2MCwgMC43KTtcclxuICAgIG1hcmdpbjogOXB4IGF1dG8gMThweCBhdXRvO1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxufSJdfQ== */"] });


/***/ }),

/***/ "7psr":
/*!*******************************************************!*\
  !*** ./src/app/components/button/button.component.ts ***!
  \*******************************************************/
/*! exports provided: ButtonComponent, BtnType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BtnType", function() { return BtnType; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _svg_svg_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../svg/svg.component */ "4/Rz");



function ButtonComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r13.label);
} }
function ButtonComponent_div_1_rfr_svg_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "rfr-svg", 17);
} }
function ButtonComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ButtonComponent_div_1_div_1_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ButtonComponent_div_1_rfr_svg_2_Template, 1, 0, "rfr-svg", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx_r0.width ? "min-width:" + ctx_r0.width : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.loading);
} }
function ButtonComponent_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r15.label);
} }
function ButtonComponent_div_2_rfr_svg_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "rfr-svg", 17);
} }
function ButtonComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ButtonComponent_div_2_div_1_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ButtonComponent_div_2_rfr_svg_2_Template, 1, 0, "rfr-svg", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx_r1.width ? "min-width:" + ctx_r1.width : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.loading);
} }
function ButtonComponent_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r17.label);
} }
function ButtonComponent_div_3_rfr_svg_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "rfr-svg", 21);
} }
function ButtonComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ButtonComponent_div_3_div_1_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ButtonComponent_div_3_rfr_svg_2_Template, 1, 0, "rfr-svg", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx_r2.width ? "min-width:" + ctx_r2.width : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.loading);
} }
function ButtonComponent_div_4_rfr_svg_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "rfr-svg", 23);
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", ctx_r19.icon);
} }
function ButtonComponent_div_4_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r20.label);
} }
function ButtonComponent_div_4_rfr_svg_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "rfr-svg", 17);
} }
function ButtonComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ButtonComponent_div_4_rfr_svg_1_Template, 1, 1, "rfr-svg", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ButtonComponent_div_4_div_2_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ButtonComponent_div_4_rfr_svg_3_Template, 1, 0, "rfr-svg", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx_r3.width ? "min-width:" + ctx_r3.width : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("mediumPositive ", ctx_r3.loading ? " mediumPositive-loading" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.loading);
} }
function ButtonComponent_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r22.label);
} }
function ButtonComponent_div_5_rfr_svg_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "rfr-svg", 21);
} }
function ButtonComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ButtonComponent_div_5_div_1_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ButtonComponent_div_5_rfr_svg_2_Template, 1, 0, "rfr-svg", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx_r4.width ? "min-width:" + ctx_r4.width : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.loading);
} }
function ButtonComponent_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r24.label);
} }
function ButtonComponent_div_6_rfr_svg_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "rfr-svg", 21);
} }
function ButtonComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ButtonComponent_div_6_div_1_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ButtonComponent_div_6_rfr_svg_2_Template, 1, 0, "rfr-svg", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx_r5.width ? "min-width:" + ctx_r5.width : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r5.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.loading);
} }
function ButtonComponent_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r26.label);
} }
function ButtonComponent_div_7_rfr_svg_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "rfr-svg", 17);
} }
function ButtonComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ButtonComponent_div_7_div_1_Template, 2, 1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ButtonComponent_div_7_rfr_svg_2_Template, 1, 0, "rfr-svg", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx_r6.width ? "min-width:" + ctx_r6.width : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r6.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.loading);
} }
function ButtonComponent_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r28.label);
} }
function ButtonComponent_div_8_rfr_svg_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "rfr-svg", 21);
} }
function ButtonComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ButtonComponent_div_8_div_1_Template, 2, 1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ButtonComponent_div_8_rfr_svg_2_Template, 1, 0, "rfr-svg", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx_r7.width ? "min-width:" + ctx_r7.width : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r7.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.loading);
} }
function ButtonComponent_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r30.label);
} }
function ButtonComponent_div_9_rfr_svg_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "rfr-svg", 21);
} }
function ButtonComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ButtonComponent_div_9_div_1_Template, 2, 1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ButtonComponent_div_9_rfr_svg_2_Template, 1, 0, "rfr-svg", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx_r8.width ? "min-width:" + ctx_r8.width : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r8.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.loading);
} }
function ButtonComponent_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r32.label);
} }
function ButtonComponent_div_10_rfr_svg_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "rfr-svg", 21);
} }
function ButtonComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ButtonComponent_div_10_div_1_Template, 2, 1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ButtonComponent_div_10_rfr_svg_2_Template, 1, 0, "rfr-svg", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx_r9.width ? "min-width:" + ctx_r9.width : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r9.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.loading);
} }
function ButtonComponent_div_11_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r34.label);
} }
function ButtonComponent_div_11_rfr_svg_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "rfr-svg", 21);
} }
function ButtonComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ButtonComponent_div_11_div_1_Template, 2, 1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ButtonComponent_div_11_rfr_svg_2_Template, 1, 0, "rfr-svg", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx_r10.width ? "min-width:" + ctx_r10.width : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r10.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.loading);
} }
function ButtonComponent_div_12_rfr_svg_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "rfr-svg", 41);
} if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", ctx_r36.icon);
} }
function ButtonComponent_div_12_rfr_svg_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "rfr-svg", 21);
} }
function ButtonComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ButtonComponent_div_12_rfr_svg_1_Template, 1, 1, "rfr-svg", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ButtonComponent_div_12_rfr_svg_2_Template, 1, 0, "rfr-svg", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r11.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.loading);
} }
function ButtonComponent_div_13_rfr_svg_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "rfr-svg", 44);
} if (rf & 2) {
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", ctx_r38.icon);
} }
function ButtonComponent_div_13_rfr_svg_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "rfr-svg", 21);
} }
function ButtonComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ButtonComponent_div_13_rfr_svg_1_Template, 1, 1, "rfr-svg", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ButtonComponent_div_13_rfr_svg_2_Template, 1, 0, "rfr-svg", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r12.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.loading);
} }
class ButtonComponent {
    constructor() {
        this.type = BtnType.bigPositive;
        this.icon = null;
        this.label = null;
        this.width = null; // we use it when text in button is longer than min-width and we want to show loading
        this.loading = false; // true or false
        this.meta = {
            clicked: false,
            btnClasses: [],
            hasContent: false,
        };
    }
    ngOnInit() { }
    ngOnChanges(changes) { }
    clickHandler(event) {
        if (this.loading) {
            event.preventDefault();
            event.stopPropagation();
        }
    }
}
ButtonComponent.ɵfac = function ButtonComponent_Factory(t) { return new (t || ButtonComponent)(); };
ButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ButtonComponent, selectors: [["rfr-button"]], inputs: { type: "type", icon: "icon", label: "label", width: "width", loading: "loading" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 14, vars: 15, consts: [[1, "general", 3, "click"], ["class", "bigPositive", 3, "style", 4, "ngIf"], ["class", "bigNeutral", 3, "style", 4, "ngIf"], ["class", "bigPassive", 3, "style", 4, "ngIf"], [3, "class", "style", 4, "ngIf"], ["class", "mediumNeutral", 3, "style", 4, "ngIf"], ["class", "mediumPassive", 3, "style", 4, "ngIf"], ["class", "smallPositive", 3, "style", 4, "ngIf"], ["class", "smallPositive2", 3, "style", 4, "ngIf"], ["class", "smallNeutral", 3, "style", 4, "ngIf"], ["class", "smallNeutral2", 3, "style", 4, "ngIf"], ["class", "smallNumber", 3, "style", 4, "ngIf"], ["class", "smallIcon", 4, "ngIf"], ["class", "smallIcon2", 4, "ngIf"], [1, "bigPositive"], [4, "ngIf"], ["class", "rotate", "name", "loader", "color", "white", 4, "ngIf"], ["name", "loader", "color", "white", 1, "rotate"], [1, "bigNeutral"], [1, "bigPassive"], ["class", "rotate", "name", "loader", "color", "black", 4, "ngIf"], ["name", "loader", "color", "black", 1, "rotate"], ["class", "icon-and-content", "color", "white", "style", "line-height: 0px; margin-right: 13px", 3, "name", 4, "ngIf"], ["color", "white", 1, "icon-and-content", 2, "line-height", "0px", "margin-right", "13px", 3, "name"], [1, "mediumNeutral"], [1, "mediumPassive"], [1, "smallPositive"], ["class", "smallPositive-text", 4, "ngIf"], [1, "smallPositive-text"], [1, "smallPositive2"], ["class", "smallPositive2-text", 4, "ngIf"], [1, "smallPositive2-text"], [1, "smallNeutral"], ["class", "smallNeutral-text", 4, "ngIf"], [1, "smallNeutral-text"], [1, "smallNeutral2"], [1, "smallNumber"], ["class", "smallNumber-text", 4, "ngIf"], [1, "smallNumber-text"], [1, "smallIcon"], ["color", "#bfbfbf", 3, "name", 4, "ngIf"], ["color", "#bfbfbf", 3, "name"], [1, "smallIcon2"], ["color", "#323232", 3, "name", 4, "ngIf"], ["color", "#323232", 3, "name"]], template: function ButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ButtonComponent_Template_div_click_0_listener($event) { return ctx.clickHandler($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ButtonComponent_div_1_Template, 3, 4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ButtonComponent_div_2_Template, 3, 4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ButtonComponent_div_3_Template, 3, 4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ButtonComponent_div_4_Template, 4, 8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ButtonComponent_div_5_Template, 3, 4, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ButtonComponent_div_6_Template, 3, 4, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ButtonComponent_div_7_Template, 3, 4, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ButtonComponent_div_8_Template, 3, 4, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ButtonComponent_div_9_Template, 3, 4, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ButtonComponent_div_10_Template, 3, 4, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ButtonComponent_div_11_Template, 3, 4, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ButtonComponent_div_12_Template, 3, 2, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ButtonComponent_div_13_Template, 3, 2, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("no-clickable", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type == "bigPositive");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type == "bigNeutral");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type == "bigPassive");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type == "mediumPositive");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type == "mediumNeutral");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type == "mediumPassive");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type == "smallPositive");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type == "smallPositive2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type == "smallNeutral");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type == "smallNeutral2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type == "smallNumber");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type == "smallIcon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type == "smallIcon2");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _svg_svg_component__WEBPACK_IMPORTED_MODULE_2__["SvgComponent"]], styles: ["rfr-svg[_ngcontent-%COMP%] {\n  line-height: 0;\n}\n\n.general[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.disabled[_ngcontent-%COMP%] {\n  filter: grayscale(1) brightness(1.2);\n}\n\n.no-clickable[_ngcontent-%COMP%] {\n  cursor: default;\n}\n\n.bigPositive[_ngcontent-%COMP%] {\n  background: linear-gradient(93.88deg, #fe6f6f 0.66%, #3b7ccc 94.89%);\n  mix-blend-mode: normal;\n  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.15);\n  border-radius: 10px;\n  font-weight: bold;\n  font-size: 21px;\n  line-height: 25px;\n  color: #ffffff;\n  min-width: 277px;\n  height: 51px;\n  padding: 0 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.bigNeutral[_ngcontent-%COMP%] {\n  filter: drop-shadow(0px 1px 10px rgba(0, 0, 0, 0.1));\n  background: linear-gradient(235.25deg, #5e5d5d 16.85%, #343434 61.61%);\n  border-radius: 10px;\n  font-weight: bold;\n  font-size: 20px;\n  line-height: 23px;\n  color: #fbfbfb;\n  padding: 0 20px;\n  height: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.bigPassive[_ngcontent-%COMP%] {\n  background: #f1f1f1;\n  border-radius: 10px;\n  font-weight: bold;\n  font-size: 20px;\n  line-height: 23px;\n  color: #bfbfbf;\n  padding: 0 20px;\n  height: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.mediumPositive[_ngcontent-%COMP%] {\n  background: linear-gradient(93.88deg, #fe6f6f 0.66%, #3b7ccc 94.89%);\n  border-radius: 45px;\n  font-weight: 500;\n  font-size: 19px;\n  line-height: 22px;\n  color: #ffffff;\n  height: 38px;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  min-width: 102px;\n  padding: 0 20px;\n}\n\n.mediumPositive-loading[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n\n.mediumNeutral[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 7px;\n  font-weight: bold;\n  font-size: 15px;\n  line-height: 18px;\n  align-items: center;\n  color: #504f4f;\n  padding: 0 15px;\n  height: 38px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.mediumPassive[_ngcontent-%COMP%] {\n  background: #e7e7e7;\n  border-radius: 8px;\n  font-weight: bold;\n  font-size: 10px;\n  line-height: 12px;\n  text-align: left !important;\n  color: #808080;\n  filter: drop-shadow(0px 1px 10px rgba(0, 0, 0, 0.05));\n  width: 61px;\n  height: 38px;\n  display: flex;\n  padding: 0 7px;\n  justify-content: center;\n  align-items: center;\n}\n\n.smallPositive[_ngcontent-%COMP%] {\n  background: linear-gradient(93.88deg, #fe6f6f 0.66%, #3b7ccc 94.89%);\n  border-radius: 7px;\n  font-weight: bold;\n  font-size: 15px;\n  height: 28px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0 15px;\n  color: white;\n}\n\n.smallPositive2[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 24px;\n  font-weight: bold;\n  font-size: 14.6667px;\n  height: 28px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-width: 85px;\n  padding: 0 20px;\n}\n\n.smallPositive2-text[_ngcontent-%COMP%] {\n  background: linear-gradient(93.88deg, #fe6f6f 0.66%, #3b7ccc 94.89%);\n  -webkit-background-clip: text;\n          background-clip: text;\n  -webkit-text-fill-color: transparent;\n  margin: 0;\n}\n\n.smallNeutral[_ngcontent-%COMP%] {\n  background: #ededed;\n  border-radius: 7px;\n  height: 28px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0 10px;\n  color: #bfbfbf;\n  font-weight: bold;\n  font-size: 15px;\n  line-height: 15px;\n}\n\n.smallNeutral2[_ngcontent-%COMP%] {\n  background: #f7f7f7;\n  border-radius: 24px;\n  height: 28px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0 10px;\n  color: #323232;\n  font-weight: bold;\n  font-size: 10px;\n  line-height: 12px;\n}\n\n.smallNumber[_ngcontent-%COMP%] {\n  background: #f7f7f7;\n  border-radius: 24px;\n  height: 28px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0 10px;\n  color: #323232;\n  font-weight: bold;\n  font-size: 18px;\n  line-height: 18px;\n}\n\n.smallIcon[_ngcontent-%COMP%] {\n  background: #ededed;\n  border-radius: 7px;\n  height: 28px;\n  width: 28px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.smallIcon2[_ngcontent-%COMP%] {\n  background: #f7f7f7;\n  border-radius: 24px;\n  height: 28px;\n  width: 28px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2J1dHRvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7QUFDSjs7QUFFQTtFQUNJLG9DQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0FBQ0o7O0FBSUE7RUFDSSxvRUFBQTtFQUNBLHNCQUFBO0VBQ0EsNENBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQURKOztBQU1BO0VBQ0ksb0RBQUE7RUFDQSxzRUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUhKOztBQVFBO0VBQ0ksbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFMSjs7QUFVQTtFQUNJLG9FQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFQSjs7QUFVQTtFQUNJLHVCQUFBO0FBUEo7O0FBWUE7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFFQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBVko7O0FBZUE7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtFQUNBLGNBQUE7RUFDQSxxREFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBWko7O0FBaUJBO0VBQ0ksb0VBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBZEo7O0FBbUJBO0VBQ0ksbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQWhCSjs7QUFtQkE7RUFDSSxvRUFBQTtFQUNBLDZCQUFBO1VBQUEscUJBQUE7RUFDQSxvQ0FBQTtFQUNBLFNBQUE7QUFoQko7O0FBcUJBO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFsQko7O0FBdUJBO0VBQ0ksbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFwQko7O0FBeUJBO0VBQ0ksbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBRUEsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUF2Qko7O0FBNEJBO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUF6Qko7O0FBOEJBO0VBQ0ksbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUEzQkoiLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicmZyLXN2ZyB7XHJcbiAgICBsaW5lLWhlaWdodDogMDtcclxufVxyXG5cclxuLmdlbmVyYWwge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uZGlzYWJsZWQge1xyXG4gICAgZmlsdGVyOiBncmF5c2NhbGUoMSkgYnJpZ2h0bmVzcygxLjIpO1xyXG59XHJcblxyXG4ubm8tY2xpY2thYmxlIHtcclxuICAgIGN1cnNvcjogZGVmYXVsdDtcclxufVxyXG5cclxuLy8gLS0tLS0tLS0tLSBWYXJpYW50cyAtLS0tLS0tLS1cclxuXHJcbi5iaWdQb3NpdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTMuODhkZWcsICNmZTZmNmYgMC42NiUsICMzYjdjY2MgOTQuODklKTtcclxuICAgIG1peC1ibGVuZC1tb2RlOiBub3JtYWw7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMjFweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBtaW4td2lkdGg6IDI3N3B4O1xyXG4gICAgaGVpZ2h0OiA1MXB4O1xyXG4gICAgcGFkZGluZzogMCAyMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4uYmlnTmV1dHJhbCB7XHJcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAxcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSkpO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDIzNS4yNWRlZywgIzVlNWQ1ZCAxNi44NSUsICMzNDM0MzQgNjEuNjElKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xyXG4gICAgY29sb3I6ICNmYmZiZmI7XHJcbiAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbi5iaWdQYXNzaXZlIHtcclxuICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjNweDtcclxuICAgIGNvbG9yOiAjYmZiZmJmO1xyXG4gICAgcGFkZGluZzogMCAyMHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4ubWVkaXVtUG9zaXRpdmUge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkzLjg4ZGVnLCAjZmU2ZjZmIDAuNjYlLCAjM2I3Y2NjIDk0Ljg5JSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0NXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBoZWlnaHQ6IDM4cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1pbi13aWR0aDogMTAycHg7XHJcbiAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbn1cclxuXHJcbi5tZWRpdW1Qb3NpdGl2ZS1sb2FkaW5nIHtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbi5tZWRpdW1OZXV0cmFsIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjNTA0ZjRmO1xyXG4gICAgLy8gbWluLXdpZHRoOiAxODZweDtcclxuICAgIHBhZGRpbmc6IDAgMTVweDtcclxuICAgIGhlaWdodDogMzhweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuLm1lZGl1bVBhc3NpdmUge1xyXG4gICAgYmFja2dyb3VuZDogI2U3ZTdlNztcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzgwODA4MDtcclxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDFweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4wNSkpO1xyXG4gICAgd2lkdGg6IDYxcHg7XHJcbiAgICBoZWlnaHQ6IDM4cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcGFkZGluZzogMCA3cHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuLnNtYWxsUG9zaXRpdmUge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkzLjg4ZGVnLCAjZmU2ZjZmIDAuNjYlLCAjM2I3Y2NjIDk0Ljg5JSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGhlaWdodDogMjhweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwIDE1cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuLnNtYWxsUG9zaXRpdmUyIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE0LjY2NjdweDtcclxuICAgIGhlaWdodDogMjhweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtaW4td2lkdGg6IDg1cHg7XHJcbiAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbn1cclxuXHJcbi5zbWFsbFBvc2l0aXZlMi10ZXh0IHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5My44OGRlZywgI2ZlNmY2ZiAwLjY2JSwgIzNiN2NjYyA5NC44OSUpO1xyXG4gICAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbi5zbWFsbE5ldXRyYWwge1xyXG4gICAgYmFja2dyb3VuZDogI2VkZWRlZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgIGhlaWdodDogMjhweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICBjb2xvcjogI2JmYmZiZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbn1cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuLnNtYWxsTmV1dHJhbDIge1xyXG4gICAgYmFja2dyb3VuZDogI2Y3ZjdmNztcclxuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XHJcbiAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgY29sb3I6ICMzMjMyMzI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxMnB4O1xyXG59XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbi5zbWFsbE51bWJlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjRweDtcclxuICAgIGhlaWdodDogMjhweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICBjb2xvcjogIzMyMzIzMjtcclxuXHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG59XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbi5zbWFsbEljb24ge1xyXG4gICAgYmFja2dyb3VuZDogI2VkZWRlZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgIGhlaWdodDogMjhweDtcclxuICAgIHdpZHRoOiAyOHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4uc21hbGxJY29uMiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjRweDtcclxuICAgIGhlaWdodDogMjhweDtcclxuICAgIHdpZHRoOiAyOHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4iXX0= */"] });
// https://www.figma.com/file/oFEKDz4jCWB4YmcrvFQiFl/Reusable-components?node-id=0%3A1
var BtnType;
(function (BtnType) {
    BtnType["bigPositive"] = "bigPositive";
    BtnType["bigNeutral"] = "bigNeutral";
    BtnType["bigPassive"] = "bigPassive";
    BtnType["mediumPositive"] = "mediumPositive";
    BtnType["mediumNeutral"] = "mediumNeutral";
    BtnType["mediumPassive"] = "mediumPassive";
    BtnType["smallPositive"] = "smallPositive";
    BtnType["smallNeutral"] = "smallNeutral";
    BtnType["smallNumber"] = "smallNumber";
    BtnType["smallIcon"] = "smallIcon";
    BtnType["smallPositive2"] = "smallPositive2";
    BtnType["smallNeutral2"] = "smallNeutral2";
    BtnType["smallIcon2"] = "smallIcon2";
})(BtnType || (BtnType = {}));


/***/ }),

/***/ "9KET":
/*!*******************************************************!*\
  !*** ./src/app/components/layout/layout.component.ts ***!
  \*******************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../menu/menu.component */ "0oYm");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _svg_svg_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../svg/svg.component */ "4/Rz");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





const _c0 = function (a0) { return { display: a0 }; };
class LayoutComponent {
    constructor() {
        this.screenHeader = "Tasks list";
        this.isMenuOpen = false;
    }
    ngOnInit() {
    }
    menuOpenChangedHandler(isMenuOpen) {
        this.isMenuOpen = isMenuOpen;
    }
}
LayoutComponent.ɵfac = function LayoutComponent_Factory(t) { return new (t || LayoutComponent)(); };
LayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LayoutComponent, selectors: [["rfr-layout"]], inputs: { isMenuOpen: "isMenuOpen" }, decls: 7, vars: 6, consts: [[3, "ngStyle", "menuOpenChanged"], [1, "title-div"], [1, "menu-icon", 3, "name", "routerLink", "click"], [1, "logo-icon"], [1, "screen-header"]], template: function LayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "rfr-menu", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("menuOpenChanged", function LayoutComponent_Template_rfr_menu_menuOpenChanged_0_listener($event) { return ctx.menuOpenChangedHandler($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "rfr-svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LayoutComponent_Template_rfr_svg_click_2_listener() { return ctx.isMenuOpen = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "noffi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx.isMenuOpen === false ? "none" : ""));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", "menu-icon")("routerLink", "../menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.screenHeader);
    } }, directives: [_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__["MenuComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _svg_svg_component__WEBPACK_IMPORTED_MODULE_3__["SvgComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]], styles: [".title-div[_ngcontent-%COMP%] {\n  background: #F8F8F8;\n  width: 100%;\n  height: 100px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n\n.menu-icon[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  text-align: left;\n  margin: 15px 0 0 15px;\n}\n\n.logo-icon[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  text-align: right;\n  font-weight: 900;\n  font-size: 1.5rem;\n  margin: 15px 20px 0 0;\n}\n\n.screen-header[_ngcontent-%COMP%] {\n  flex-basis: 100%;\n  font-size: 28px;\n  font-weight: 900;\n  margin: 10px 0 10px 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0FBQ0YiLCJmaWxlIjoibGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlLWRpdiB7XHJcbiAgYmFja2dyb3VuZDogI0Y4RjhGODtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi5tZW51LWljb24ge1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIG1hcmdpbjogMTVweCAwIDAgMTVweDtcclxufVxyXG5cclxuLmxvZ28taWNvbiB7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgbWFyZ2luOiAxNXB4IDIwcHggMCAwO1xyXG59XHJcblxyXG4uc2NyZWVuLWhlYWRlciB7XHJcbiAgZmxleC1iYXNpczogMTAwJTtcclxuICBmb250LXNpemU6IDI4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICBtYXJnaW46IDEwcHggMCAxMHB4IDE1cHg7XHJcbn1cclxuIl19 */"] });


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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BDcq":
/*!**********************************************************!*\
  !*** ./src/app/pages/tasks-list/tasks-list.component.ts ***!
  \**********************************************************/
/*! exports provided: TasksListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksListComponent", function() { return TasksListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/layout/layout.component */ "9KET");


class TasksListComponent {
    constructor() { }
    ngOnInit() {
    }
}
TasksListComponent.ɵfac = function TasksListComponent_Factory(t) { return new (t || TasksListComponent)(); };
TasksListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TasksListComponent, selectors: [["app-tasks-list"]], decls: 62, vars: 0, consts: [[1, "top-bar"], [1, "active-button"], [1, "cancelled-button"], [1, "serch-icon"], ["type", "text", 1, "serch-bar"], [1, "tasks"], [1, "task"], [1, "task__image"], ["src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAolBMVEX33x4AAABiWAv/5x/64h7Ltxj95B9PRwlVTAlgVgv/6B9YTwpUSwldUwpaUQpdVArv2B2RgxLs1R3ItRihkRPCrxfjzRuwnxW2pBZ8bw6GeRDVwBqYiRLgyhuolxS7qRZuYwx9cQ80LwbZxBoqJgV0aA2bjBKEdw9HQAgbGANvZA1oXQwVEwNFPgg7NQesmxUgHQQmIgQKCQE1MAYWFAMuKQUrvzLYAAANZUlEQVR4nO1daYOiuBaNJMSwhUXFBRVtR60uu9tZ3vz/v/YScEMCBMUy9HA+dbVbjne/uYkAdOjQoUOHDh06dOjQ4fcAwu9ewWuBUTxPKCKMgReGAfsHQu9eVWNA2DtqHwsEEPRGu6lmE2JbKz8OIf4tSCIczgl1fAxwOCOWY2gJDJeS1TFsP0cEFzPiaFo/QHBMXC0Dg5L1ALabIw79PqdFhxD7RMvDICsdvnuVjwPhs9hoAOeWgCDnaM9bK0UcbE+s6NJciiR4enT77pU+CDigxpkDGtiFBDXNWbdSinh4IUXHYYGKnmAdW5gPIP+GVKAZxfQSit6711sbt47FGe/dEnaJlCdtEyKe3DqWmVNBUDP2LWOIsnYnVlGXUosw0CRgtszXwG2F3bFsRtsfR5vQ88LRcKVpdvDuNdcCHhUHPy48i0zHGwChCaLhp5XIkGzaJcRS6VmzkQcxhmF8k4hbbWGY1Ll4Qov4OWQbe5ghGG9T4WmtYoiQvo3ZSgsIGpTuFqwmhF48tWnWUsmiBQwRGq0I8xh4LGRoWIcJq/UxinyL5hyR3YKQD/UVMYw1FluhQT4HjB32Jqv7KjF5+KC8CLE3I0wwNEYiKzTIVseIVftDkhcfh+urHvHhwEnyFuIBdMit3zoMGD+48ElRcmON1JYhQvO0jnD3EI3uywhqxAm/mV2cnVK1zRB525NiciW9S2dcMvR4E8oXmd8ZjtpKihfuefFWgKJsOkPWIWRGuiuRH4OtdKzAunWWmjHFMFMoOXTEFBRNnMIUIBX9UGUR4tG1P0GPcHErQttnCgqjVXmBr7lbpSV4Q1CzInN+9ZauO+AK6pOqOkPzFGaYIajZwLv+SfZcgAOjsvpV2gixfkvQ2JrLs8EZZAKZkxV2gbMgusJGiBYZC3N26KyQjrbgFqhVClDrjxQmyDLQjInRUXxibO1ZFoCG/Up+mh2r3NPHdx0ma3FK2Gzm/XGwLQ8RLZAgju+MzE1zboPqkGkoreog8oJKZRsEKMh5kVXCUwuZBMdlXfwT6CpUmSDAa6GQ6NZjJijhQw17qPY+d05HU1gzxs+rNkGDTBdKCxAAT0iCcB8TalUmaBBeMb6bQjnwTsSQjFmeFonL+CscslWeH0ChSEf7LLhhvbwbTIkz3CjPDwA4EygiYZk2jAvCvGG41CLafrzBLeDH0jWBoGwW3OBlz8lwrAsopcZh6h8HIUhHaJDyJLFAhDyDhpcw6A6DKwsMOTAvhhHiDe9oqXTnyQtRmI/niQTHV9E6dHqMPATxFSyMLKJ4ODtYH0uVCYJVAIe5msHOSDDVU2rZh/18mWDnz6YrxyYWdVzXUnqEBk1XGOR09F6CV5qOw6yQOoyXcQoi9FPpZA369s7MtUTtUU6ChbDnSidreEzoyLwfPOD1PI6lCLp0oLKGArSxNTv07riQJSNYOhJ0feo6UFlDGQ6G5pijbMJG5+Zdw6YIhqV0Rc+Al1RzZ6afUVJnj5hsK1qi6VehtosBp2SUjlEmsTZWvBiuSrY57J3SLoYD+g7v+m5ug4JhBCyQH6oJGpbaLoYjTUYtL7OJzfff0ba6JaN6xyIB5iLUDuZtTkpYIMR+dVON+MprKEPA3aWxN2+cCp2zeqlkNvasoXYrBvPSEQtnGFzjgjtFdzsXQjgH1VsyKfAndyc01q8ydD1019gXwfZBCzT00rewoqujIRECXtVsrGOMlPehKVCcMCPhJd5bS+Zl1uV7L64991qhoYCPbafjJMHnSWjulHuZUh117dmiJQIEl8YFCc4idANU2ldjBbC/UL4fcwO4MlKGJ1Ks5kXirnDKnxzGXrsO/MCUjRWleun4kJX7RbkMpX6E22J/Z+C0D0pTh2NojPOxyAhXMTBbJb4UaWB3UodjR4hXw0Xwx3oAcCtavzdI+RizJO6zbA2UFBRJe3vqD+N3L1oeCMCTxJJdUK6j86p827U/VZ4jyQKNAnN1FRkZIBRVpaOWNmqRlqJJfzi9MHRm5TrKldnS4jbUSxew4te5MrICAIdlOmqQQwxaFizwrfpNsHDv6SJie6+3LhgCfJ3IM1asKJwW6ahrGbvWHdD2AITwWhWyUFh06se17NkAtI0fY2g4093xLEOXuxkRO0o0v430AHcztuFclNQKUfbIiGE41LLpbLxpJz2O29EZOoTA4386xGagzmG7nk/0ELYtRcsCXkf0LGaVO/aXswy8BAC3nFwK78yQHvHpfKgzalf1V4Gr8zz19jXe5G1bUC8FTAMgD/bheWDGYYnZ78PxnMTw3v61sLcOE+83sMEUmLsXesnXjBQusfyXjnDx8ZvTMM6r7yTCvHvhso8c25ajGdP19ITt50yv/GiE86j8SIQh2MTD2fbzc7vd++NBAF55KRFi5SEdY37QcDB37S0w4RnVn4oWM/8eFQeBGD193u9l8YMON+aLSKIBSUR4+vDN8FCnfEeDXg4fZa1iZG5m+ZekLOfhS5rM/AoBurx87fw0b41XIz2/0n7JOs2NVsAvwdprniPiO9skc+1BHV2pxxB76zJ+HM0PHfEQ4foPf3O1GMJRFT+Gf5reMw9YomY/fidAHYbQlyDI0OyeHT5Sfnry4dfXYIgPcgR7vXGTFJH23GlreYbQkCXY6x3NhxeUXyBTUusJ25ZmaG7lCfZ6k8akyLcOnd0Tpi3LEA7rEOz1oqY8Kp++eOpmDkmGaFOPYK/X0Cn+xM9sn/HOkgzNX3UZas2YIr8G4rm7uOQY4kldgswUmwiLyR0Cz12uIscQ/VmfYSN6yvOZJy8bk2L4iAh7vUbuKiBPXz0ixdD8KKTx/XvBAz+aOGSb3FXy5KV/MgxRICZxGLHCFwab8X2xyLBupBfGL7qw4+feSYYhPor49cPTyAPC5uZOyP9GzXhSjybHJp+CDEO4EhA0bnuyKJuUN1VBoREhT+e4UjL8N/+cX3ffrHnNeT4aGyfDvrZ5WtmlPI1AhLkWl7k+PbJsruGORg0ogwRDUcb2V97OYGKLbqPHUpr4rmQYCppVU0HqGrL/j9XbMZFhKOhdiBwc9A8qbpc8KENhwabmVokMQ8FT9u2ZvpVhGOWfYv9eDMP8U5oqcL8Aj8ZDv7le04shlXmLqsPnk40vglReagkY9tpx2EYyLxX3uuN2jFNLaWnBdsUqaINHlevTiBkyf9OCUw1SDGHxnuE6VF1XpRiK8rYLDhuotM+R7Jf+VUKx9xGrzLGhjvBOXYOU7eqXCpFjHSrKUXZnRpB93+MQKel0pHfXZHa4PyIF5Si9QwoFbd88jIVycqyxj/+HDMXeVrUbUuQZouBvKYq9pVpirCFDFAg6wyL8VOoWijrzNAjYchR7Y4Xq43pTX6bkzFDviQmfplFzcg/qksZoKXM8ru5sIgZ7OYo/VbmPoi5DJsaFnDV+KKKo9RkCZOo/ZSiu1HA3DzDkG6IDGY5DJZocDzHkHCPRxvAdlDhN/SBDztHzq/zqTxX09GGGgPvVcUWuqsJVqM8wZBzNgbBbfMYvBSzxOYZcWRfrEoqNDWE+jmcZco5BcRKwfb8Qn2eYcCyU4+/BkMFcFLQA3q+mDTFkic5cyPD9P6bUFEMmRmFP9fB2NW2Oobh4vJ8O+3o0yBBgUfxvdrkPoFGGYwHDt480iLaVCvs0MCz1jMJJ2/KXNApxW0G0v2uJGUIWEcolAgUMv+6HaGEknCYWaZYmYog9nrmUn6KA/+TfrPokcjPAYCo2erzLL0o0eIiX6WOlI7tQ4Gq+JuQjmEhKdA4TfuYXlfvVSgT1SzO4rKpF79LSy6C5YHWiCef7PASGN/v434t/L1C4Gf4FvvSm/5cPv2ghWFS2bsUgG8n/KqRoimrFl3DKUDDjm17D7N5RmKLC51axkDm571X8UbC7BGPBe708p4F3Of8yS1Eowt7NomAkcI+9kcijQuE28edr81KMcqliZusLAdFu0k3AF560YNjmBhOQOPHuHV8qQ3P0I/+RhwBejrpEwu2yG1eKxSURw2xxc0cEfysift5LUxqvoEk01ZOfPFrEBUeXMxHsf0UUe/2d7iGc3L2h+98KnvTtpf1EXPSxvd6PfwXSPeH7rV7hijsGvn30S0+XvrYALhoprEA23pvSh/CFeHE0hPSRRd1bTrG0q/HqkX7hCHoV7tsOMrNChXh5QlP3ED1HLrODDx2RTfDaUJGurraezgQzbYLyQwoFdWbDqLmo76L3kJ5PuMOXNDDqmqK4mivohVbgi6p7XOu6h6ILO4RJdQW+7PeE61As3pbGi6JT6UWIvq5RimWHte4LjwwQqHV7y68vnd9DaC21qopfPjR12W+K50VfvCFj6tWTk27lD5YgeJTLb/qvubatfHFoWb6oP6UO8GI0Kc7mz/jQ3zMojMGyeHH92JQ0G2xu1mWC/Hu9ed90KcbRTOQQ+8OwznEJBFE0F899ffN18N5Bb1aKB/H88HHi+fev/nYZgfr3ObL3wZuJr/UvWvFHf7rUvVfdDFlvcbwqRyC5Rxlgmcsxi94IY8hVO72SGZmvvNyzQ4cOHTp06NChQ4cOHTp06NChQ4cOHTp06NChQ4cO/xX8H0i5zGwh2fjWAAAAAElFTkSuQmCC", "alt", ""], [1, "task__content"], [1, "task__location"], [1, "task__date-time"], [1, "task__category"], [1, "task__description"], [1, "bottom-bar"], [1, ""], [1, "icon"]], template: function TasksListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "rfr-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Cancelled");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "section", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "article", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u015Arem, ul. Mickiewicza 12");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "13:22 04.12.2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h3", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Pavement damage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "I found some missing cubes paving stones in the sidewalk ...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "+1234");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\u2690");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\u2661");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "See details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "article", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\u015Arem, ul. Mickiewicza 12");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "13:22 04.12.2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h3", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Pavement damage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "I found some missing cubes paving stones in the sidewalk ...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "+1234");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "\u2690");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "\u2661");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "See details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__["LayoutComponent"]], styles: [".tasks[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100vw;\n  height: 100vh;\n  box-sizing: border-box;\n  background: #F8F8F8;\n}\n\n.task[_ngcontent-%COMP%] {\n  display: flex;\n  position: relative;\n  height: 11rem;\n  background: #fff;\n  margin: 1rem 1rem 0;\n  border-radius: 10px;\n}\n\n.task__image[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 6rem;\n  margin: 1rem;\n}\n\n.task__image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 10px;\n}\n\n.task__content[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 1rem 1rem 0 0;\n  height: 6rem;\n}\n\n.task__location[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 0;\n  background: #FBFBFB;\n  padding: 0.2rem;\n  border-radius: 10px;\n  font-size: 0.5rem;\n  color: #9F9F9F;\n}\n\n.task__date-time[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: #FBFBFB;\n  padding: 0.2rem;\n  margin: 0 0 0 0.5rem;\n  border-radius: 10px;\n  font-size: 0.5rem;\n  color: #9F9F9F;\n}\n\n.task__category[_ngcontent-%COMP%] {\n  margin: 0.5rem 0;\n  font-weight: bold;\n  font-size: 1rem;\n  font-weight: bold;\n}\n\n.task__description[_ngcontent-%COMP%] {\n  margin: 0;\n  margin-top: 0.5rem;\n  font-size: 0.8rem;\n}\n\n.bottom-bar[_ngcontent-%COMP%] {\n  display: flex;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  margin: 0 1rem 1rem;\n}\n\n.bottom-bar[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  text-align: center;\n  background: #FBFBFB;\n  padding: 0.2rem;\n  margin: 0 0.4rem;\n  font-weight: bold;\n  font-size: 1rem;\n  border: none;\n  border-radius: 10px;\n}\n\n.bottom-bar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: transparent;\n  background-image: linear-gradient(92.92deg, #3E7DCD 7.89%, #F47176 88.6%);\n  -webkit-background-clip: text;\n          background-clip: text;\n}\n\n.top-bar[_ngcontent-%COMP%] {\n  display: flex;\n  background-color: #F8F8F8;\n}\n\n.active-button[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 0.5rem 0.8rem;\n  margin: 0 0 0 1rem;\n  font-weight: bold;\n  font-size: 1rem;\n  border: none;\n  border-radius: 10px;\n  color: #fff;\n  background: linear-gradient(92.92deg, #3E7DCD 7.89%, #F47176 88.6%);\n}\n\n.cancelled-button[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 0.5rem 0.8rem;\n  margin: 0 0 0 0.5rem;\n  background: #EDEDED;\n  color: #BFBFBF;\n  font-weight: bold;\n  font-size: 1rem;\n  border: none;\n  border-radius: 10px;\n}\n\n.serch-bar[_ngcontent-%COMP%] {\n  border: none;\n  background: #F8F8F8;\n  width: 4rem;\n}\n\n.serch-icon[_ngcontent-%COMP%] {\n  text-align: center;\n  background: #EDEDED;\n  color: #BFBFBF;\n  padding: 0.5rem 0.8rem;\n  margin: 0 0.5rem;\n  font-weight: bold;\n  font-size: 1rem;\n  border: none;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Rhc2tzLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EseUVBQUE7RUFDQSw2QkFBQTtVQUFBLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EseUJBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxtRUFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFDRiIsImZpbGUiOiJ0YXNrcy1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhc2tzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBiYWNrZ3JvdW5kOiAjRjhGOEY4O1xyXG59XHJcblxyXG4udGFzayB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiAxMXJlbTtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIG1hcmdpbjogMXJlbSAxcmVtIDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLnRhc2tfX2ltYWdlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiA2cmVtO1xyXG4gIG1hcmdpbjogMXJlbTtcclxufVxyXG5cclxuLnRhc2tfX2ltYWdlIGltZyB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi50YXNrX19jb250ZW50IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDFyZW0gMXJlbSAwIDA7XHJcbiAgaGVpZ2h0OiA2cmVtO1xyXG59XHJcblxyXG4udGFza19fbG9jYXRpb24ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW46IDA7XHJcbiAgYmFja2dyb3VuZDogI0ZCRkJGQjtcclxuICBwYWRkaW5nOiAwLjJyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBmb250LXNpemU6IDAuNXJlbTtcclxuICBjb2xvcjogIzlGOUY5RjtcclxufVxyXG5cclxuLnRhc2tfX2RhdGUtdGltZSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJhY2tncm91bmQ6ICNGQkZCRkI7XHJcbiAgcGFkZGluZzogMC4ycmVtO1xyXG4gIG1hcmdpbjogMCAwIDAgMC41cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAwLjVyZW07XHJcbiAgY29sb3I6ICM5RjlGOUY7XHJcbn1cclxuXHJcbi50YXNrX19jYXRlZ29yeSB7XHJcbiAgbWFyZ2luOiAwLjVyZW0gMDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi50YXNrX19kZXNjcmlwdGlvbiB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxufVxyXG5cclxuLmJvdHRvbS1iYXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIG1hcmdpbjogMCAxcmVtIDFyZW07XHJcbn1cclxuXHJcbi5ib3R0b20tYmFyICp7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6ICNGQkZCRkI7XHJcbiAgcGFkZGluZzogMC4ycmVtO1xyXG4gIG1hcmdpbjogMCAwLjRyZW07XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4uYm90dG9tLWJhciBidXR0b24ge1xyXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTIuOTJkZWcsICMzRTdEQ0QgNy44OSUsICNGNDcxNzYgODguNiUpO1xyXG4gIGJhY2tncm91bmQtY2xpcDogdGV4dDtcclxufVxyXG5cclxuLnRvcC1iYXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y4RjhGODtcclxufVxyXG5cclxuLmFjdGl2ZS1idXR0b24ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwLjVyZW0gMC44cmVtO1xyXG4gIG1hcmdpbjogMCAwIDAgMXJlbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkyLjkyZGVnLCAjM0U3RENEIDcuODklLCAjRjQ3MTc2IDg4LjYlKTtcclxufVxyXG5cclxuLmNhbmNlbGxlZC1idXR0b24ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwLjVyZW0gMC44cmVtO1xyXG4gIG1hcmdpbjogMCAwIDAgMC41cmVtO1xyXG4gIGJhY2tncm91bmQ6ICNFREVERUQ7XHJcbiAgY29sb3I6ICNCRkJGQkY7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4uc2VyY2gtYmFyIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogI0Y4RjhGODtcclxuICB3aWR0aDogNHJlbTtcclxufVxyXG5cclxuLnNlcmNoLWljb24ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiAjRURFREVEO1xyXG4gIGNvbG9yOiAjQkZCRkJGO1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAwLjhyZW07XHJcbiAgbWFyZ2luOiAwIDAuNXJlbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "BQc1":
/*!*************************************************************************************!*\
  !*** ./src/app/components/reusable-buttons-test/reusable-buttons-test.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ReusableButtonsTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReusableButtonsTestComponent", function() { return ReusableButtonsTestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _button_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../button/button.component */ "7psr");


class ReusableButtonsTestComponent {
    constructor() { }
    ngOnInit() {
    }
}
ReusableButtonsTestComponent.ɵfac = function ReusableButtonsTestComponent_Factory(t) { return new (t || ReusableButtonsTestComponent)(); };
ReusableButtonsTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReusableButtonsTestComponent, selectors: [["app-reusable-buttons-test"]], decls: 88, vars: 13, consts: [[2, "background", "#bbb"], [1, "group"], ["type", "bigPositive", "label", "Login"], ["type", "bigPositive", "label", "Test width", "width", "150px"], ["type", "bigPositive", "label", "Very loong loong zzzz labe lTest"], ["type", "bigPositive", "label", "Test", 3, "loading"], ["type", "bigNeutral", "label", "Login"], ["type", "bigNeutral", "label", "Test width", "width", "150px"], ["type", "bigNeutral", "label", "Very loong loong zzzz labe lTest"], ["type", "bigNeutral", "label", "Test", 3, "loading"], ["type", "bigPassive", "label", "Login"], ["type", "bigPassive", "label", "Test width", "width", "150px"], ["type", "bigPassive", "label", "Very loong loong zzzz labe lTest"], ["type", "bigPassive", "label", "Test", 3, "loading"], ["type", "mediumPositive", "icon", "menu-logout-icon", "label", "Login"], ["type", "mediumPositive", "icon", "menu-logout-icon", "label", "mediumPositive", "width", "200px"], ["type", "mediumPositive", "icon", "menu-logout-icon", "label", "Very loong loong zzzz labe lTest"], ["type", "mediumPositive", "icon", "menu-logout-icon", "label", "Test", 3, "loading"], ["type", "mediumNeutral", "label", "Login"], ["type", "mediumNeutral", "label", "Test width", "width", "150px"], ["type", "mediumNeutral", "label", "Very loong loong zzzz labe lTest"], ["type", "mediumNeutral", "label", "Test", 3, "loading"], ["type", "mediumPassive", "label", "Login"], ["type", "mediumPassive", "label", "Test width", "width", "150px"], ["type", "mediumPassive", "label", "View in google maps"], ["type", "mediumPassive", "label", "Test", 3, "loading"], ["type", "smallPositive", "label", "Login"], ["type", "smallPositive", "label", "Test width", "width", "150px"], ["type", "smallPositive", "label", "View in google maps"], ["type", "smallPositive", "label", "Test", 3, "loading"], ["type", "smallPositive2", "label", "Login"], ["type", "smallPositive2", "label", "Test width", "width", "150px"], ["type", "smallPositive2", "label", "View in google maps"], ["type", "smallPositive2", "label", "Test", 3, "loading"], ["type", "smallNeutral", "label", "Login"], ["type", "smallNeutral", "label", "Test width", "width", "150px"], ["type", "smallNeutral", "label", "View in google maps"], ["type", "smallNeutral", "label", "Test", 3, "loading"], ["type", "smallNeutral2", "label", "Login"], ["type", "smallNeutral2", "label", "Test width", "width", "150px"], ["type", "smallNeutral2", "label", "View in google maps"], ["type", "smallNeutral2", "label", "Test", 3, "loading"], ["type", "smallNumber", "label", "+1234"], ["type", "smallNumber", "label", "number", "width", "150px"], ["type", "smallNumber", "label", "-12323454543543"], ["type", "smallNumber", "label", "+1234", 3, "loading"], ["type", "smallIcon", "icon", "magnifier"], ["type", "smallIcon", "icon", "magnifier", 3, "loading"], ["type", "smallIcon2", "icon", "speech_bubble"], ["type", "smallIcon2", "icon", "speech_bubble", 3, "loading"]], template: function ReusableButtonsTestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "bigPositive");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "rfr-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "rfr-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "rfr-button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "rfr-button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "bigNeutral");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "rfr-button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "rfr-button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "rfr-button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "rfr-button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "bigPassive");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "rfr-button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "rfr-button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "rfr-button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "rfr-button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "mediumPositive");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "rfr-button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "rfr-button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "rfr-button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "rfr-button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "mediumNeutral");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "rfr-button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "rfr-button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "rfr-button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "rfr-button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "mediumPassive");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "rfr-button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "rfr-button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "rfr-button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "rfr-button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "smallPositive");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "rfr-button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "rfr-button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "rfr-button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "rfr-button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "smallPositive2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "rfr-button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "rfr-button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "rfr-button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "rfr-button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "smallNeutral");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "rfr-button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "rfr-button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "rfr-button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "rfr-button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "smallNeutral2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "rfr-button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "rfr-button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "rfr-button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "rfr-button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "smallNumber");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "rfr-button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "rfr-button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "rfr-button", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "rfr-button", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "smallIcon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "rfr-button", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "rfr-button", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "smallIcon2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "rfr-button", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "rfr-button", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("loading", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("loading", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("loading", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("loading", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("loading", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("loading", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("loading", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("loading", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("loading", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("loading", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("loading", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("loading", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("loading", true);
    } }, directives: [_button_button_component__WEBPACK_IMPORTED_MODULE_1__["ButtonComponent"]], styles: [".group[_ngcontent-%COMP%] {\n  border-bottom: 1px solid black;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  padding: 20px;\n  flex-direction: column;\n}\n\n.group[_ngcontent-%COMP%]   rfr-button[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3JldXNhYmxlLWJ1dHRvbnMtdGVzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDhCQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0FBQ0oiLCJmaWxlIjoicmV1c2FibGUtYnV0dG9ucy10ZXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyb3VwIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmdyb3VwIHJmci1idXR0b24ge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLy8gYnV0dG9ue1xyXG4vLyAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuLy8gICAgIGJvcmRlcjpub25lO1xyXG4vLyAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4vLyAgICAgbWFyZ2luOmF1dG87XHJcbi8vICAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4vLyAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4vLyAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4vLyB9XHJcbi8vIC5WZXJzaW9uMXtcclxuLy8gICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5My44OGRlZywgI0ZFNkY2RiAwLjY2JSwgIzNCN0NDQyA5NC44OSUpO1xyXG4vLyAgICAgbWl4LWJsZW5kLW1vZGU6IG5vcm1hbDtcclxuLy8gICAgIGJveC1zaGFkb3c6IDBweCAxcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4vLyAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuLy8gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4vLyAgICAgZm9udC1zaXplOiAyMXB4O1xyXG4vLyAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbi8vICAgICBjb2xvcjogI0ZGRkZGRjtcclxuLy8gICAgIHdpZHRoOjMxN3B4O1xyXG4vLyAgICAgaGVpZ2h0OjUxcHg7XHJcbi8vIH1cclxuLy8gLlZlcnNpb24ye1xyXG4vLyAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpKTtcclxuLy8gICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyMzUuMjVkZWcsICM1RTVENUQgMTYuODUlLCAjMzQzNDM0IDYxLjYxJSk7XHJcbi8vICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4vLyAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbi8vICAgICBmb250LXNpemU6IDIwcHg7XHJcbi8vICAgICBsaW5lLWhlaWdodDogMjNweDtcclxuLy8gICAgIGNvbG9yOiAjRkJGQkZCO1xyXG4vLyAgICAgd2lkdGg6MTUycHg7XHJcbi8vICAgICBoZWlnaHQ6IDUwcHg7XHJcbi8vIH1cclxuLy8gLlZlcnNpb24ze1xyXG4vLyAgICAgYmFja2dyb3VuZDogI0YxRjFGMTtcclxuLy8gICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbi8vICAgICBmb250LXdlaWdodDogYm9sZDtcclxuLy8gICAgIGZvbnQtc2l6ZTogMjBweDtcclxuLy8gICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xyXG4vLyAgICAgY29sb3I6ICNCRkJGQkY7XHJcbi8vICAgICB3aWR0aDoxNTJweDtcclxuLy8gICAgIGhlaWdodDogNTBweDtcclxuLy8gfVxyXG4vLyAuVmVyc2lvbjR7XHJcbi8vICAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4vLyAgICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4vLyAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbi8vICAgICBmb250LXNpemU6IDE1cHg7XHJcbi8vICAgICBsaW5lLWhlaWdodDogMThweDtcclxuLy8gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbi8vICAgICBjb2xvcjogIzUwNEY0RjtcclxuLy8gICAgIHdpZHRoOiAyMTZweDtcclxuLy8gICAgIGhlaWdodDogMzhweDtcclxuLy8gfVxyXG4vLyAuVmVyc2lvbjV7XHJcbi8vICAgICBiYWNrZ3JvdW5kOiAjRTdFN0U3O1xyXG4vLyAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4vLyAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbi8vICAgICBmb250LXNpemU6IDEwcHg7XHJcbi8vICAgICBsaW5lLWhlaWdodDogMTJweDtcclxuLy8gICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcclxuLy8gICAgIGNvbG9yOiAjODA4MDgwO1xyXG4vLyAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjA1KSk7XHJcbi8vICAgICB3aWR0aDo3NXB4O1xyXG4vLyAgICAgaGVpZ2h0OjM4cHg7fVxyXG4vLyAuVmVyc2lvbjZ7XHJcbi8vICAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4vLyAgICAgYm9yZGVyLXJhZGl1czogMjRweDtcclxuLy8gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4vLyAgICAgZm9udC1zaXplOiAxNC42NjY3cHg7XHJcbi8vICAgICBsaW5lLWhlaWdodDogMTdweDtcclxuLy8gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbi8vICAgICB3aWR0aDoxMDVweDtcclxuLy8gICAgIGhlaWdodDoyOHB4O1xyXG4vLyB9XHJcbi8vIC5WZXJzaW9uN3tcclxuLy8gICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5My44OGRlZywgI0ZFNkY2RiAwLjY2JSwgIzNCN0NDQyA5NC44OSUpO1xyXG4vLyAgICAgYm9yZGVyLXJhZGl1czogNDVweDtcclxuLy8gICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbi8vICAgICBmb250LXNpemU6IDE5cHg7XHJcbi8vICAgICBsaW5lLWhlaWdodDogMjJweDtcclxuLy8gICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4vLyAgICAgd2lkdGg6IDE0MnB4O1xyXG4vLyAgICAgaGVpZ2h0OiAzOHB4O1xyXG4vLyAgICAgdGV4dC1pbmRlbnQ6IDEzcHg7XHJcbi8vICAgICBzdmd7XHJcbi8vICAgICAgICAgZmlsbDojZmZmZmZmO1xyXG4vLyAgICAgICAgIHdpZHRoOiAyMXB4O1xyXG4vLyAgICAgICAgIGhlaWdodDogMjFweDtcclxuLy8gICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4vLyAgICAgICAgIGxlZnQ6IDE0cHg7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuLy8gLlZlcnNpb244e1xyXG4vLyAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1KSk7XHJcbi8vICAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4vLyAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuLy8gICAgIHdpZHRoOiA5N3B4O1xyXG4vLyAgICAgaGVpZ2h0OiAxMDFweDtcclxuLy8gICAgIHN2Z3tcclxuLy8gICAgICAgICB3aWR0aDoyNXB4O1xyXG4vLyAgICAgICAgIGhlaWdodDoyNXB4O1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcbi8vIC5WZXJzaW9uOXtcclxuLy8gICAgIGJhY2tncm91bmQ6ICNGN0Y3Rjc7XHJcbi8vICAgICBib3JkZXItcmFkaXVzOiA0MXB4O1xyXG4vLyAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbi8vICAgICBmb250LXNpemU6IDEwcHg7XHJcbi8vICAgICBsaW5lLWhlaWdodDogMTJweDtcclxuLy8gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbi8vICAgICBjb2xvcjogIzMyMzIzMjtcclxuLy8gICAgIHdpZHRoOmF1dG87XHJcbi8vICAgICBoZWlnaHQ6MjlweDtcclxuLy8gICAgIHBhZGRpbmc6IDBweCA4cHg7XHJcbi8vIH1cclxuLy8gLlZlcnNpb24xMHtcclxuLy8gICAgIGJhY2tncm91bmQ6ICNGN0Y3Rjc7XHJcbi8vICAgICBib3JkZXItcmFkaXVzOiA0MXB4O1xyXG4vLyAgICAgaGVpZ2h0OjI5cHg7XHJcbi8vICAgICB3aWR0aDogMjlweDtcclxuLy8gICAgIHN2Z3tcclxuLy8gICAgICAgICB3aWR0aDogMTVweDtcclxuLy8gICAgICAgICBtYXJnaW46IGF1dG87XHJcbi8vICAgICAgICAgZGlzcGxheTogZmxleDtcclxuLy8gICAgICAgICBmaWxsOiMzMjMyMzI7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuLy8gLlZlcnNpb24xMXtcclxuLy8gICAgIGJhY2tncm91bmQ6ICNGN0Y3Rjc7XHJcbi8vICAgICBib3JkZXItcmFkaXVzOiA0MXB4O1xyXG4vLyAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuLy8gICAgIGZvbnQtc2l6ZTogMThweDtcclxuLy8gICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xyXG4vLyAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuLy8gICAgIGNvbG9yOiAjMzIzMjMyO1xyXG4vLyAgICAgd2lkdGg6YXV0bztcclxuLy8gICAgIGhlaWdodDoyOXB4O1xyXG4vLyAgICAgcGFkZGluZzogMHB4IDhweDtcclxuLy8gfVxyXG4vLyBmb250e1xyXG4vLyAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMzRTdEQ0QgMCUsICNGNDcxNzYgMTAwJSk7XHJcbi8vICAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzNFN0RDRCAwJSwgI0Y0NzE3NiAxMDAlKTtcclxuLy8gICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzNFN0RDRCAwJSwgI0Y0NzE3NiAxMDAlKTtcclxuLy8gICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4vLyAgICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4vLyB9XHJcblxyXG4vLyBkaXZ7XHJcbi8vICAgICB3aWR0aDoxMDAlO1xyXG4vLyAgICAgbWFyZ2luOjBweCAwcHggMzBweCAwcHg7XHJcbi8vICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4vLyB9XHJcbiJdfQ== */"] });


/***/ }),

/***/ "D8EZ":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class LoginComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["rfr-login"]], decls: 2, vars: 0, template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "login works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyJ9 */"] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'road-fault-reporter';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "UV7a":
/*!*********************************************************************!*\
  !*** ./src/app/components/services-test/services-test.component.ts ***!
  \*********************************************************************/
/*! exports provided: ServicesTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesTestComponent", function() { return ServicesTestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_task_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/task.service */ "i6c7");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function ServicesTestComponent_li_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", item_r1.key, ": ", item_r1.value, "");
} }
class ServicesTestComponent {
    constructor(taskService) {
        this.taskService = taskService;
    }
    ngOnInit() { }
    addNewTask() {
        this.taskService.addNewTask();
    }
    readTask() {
        this.taskService.readTasksList().subscribe((task) => {
            this.tasks = task;
        });
    }
}
ServicesTestComponent.ɵfac = function ServicesTestComponent_Factory(t) { return new (t || ServicesTestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_task_service__WEBPACK_IMPORTED_MODULE_1__["TaskService"])); };
ServicesTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ServicesTestComponent, selectors: [["app-services-test"]], decls: 11, vars: 3, consts: [[3, "click"], [4, "ngFor", "ngForOf"]], template: function ServicesTestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "services-test works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ServicesTestComponent_Template_button_click_2_listener() { return ctx.addNewTask(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Add new task");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Tasks:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ServicesTestComponent_Template_button_click_6_listener() { return ctx.readTask(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Show tasks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ServicesTestComponent_li_9_Template, 2, 2, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "keyvalue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 1, ctx.tasks));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["KeyValuePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXJ2aWNlcy10ZXN0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "W4ST":
/*!******************************************************!*\
  !*** ./src/app/pages/add-task/add-task.component.ts ***!
  \******************************************************/
/*! exports provided: AddTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTaskComponent", function() { return AddTaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AddTaskComponent {
    constructor() { }
    ngOnInit() {
    }
}
AddTaskComponent.ɵfac = function AddTaskComponent_Factory(t) { return new (t || AddTaskComponent)(); };
AddTaskComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddTaskComponent, selectors: [["rfr-add-task"]], decls: 34, vars: 0, consts: [[1, "main"], [1, "logo"], [1, "logo__text"], [1, "task"], [1, "section-title"], [1, "task-configuration"], [1, "task-configuration__title"], [1, "task-configuration__photo-container"], [1, "task-configuration--image"], [1, "task-configuration--help-text"], ["name", "description", "id", "", "cols", "30", "rows", "10", "placeholder", "What happened ? ...", 1, "task-configuration--description"], ["type", "text", "placeholder", "Pavement damage", 1, "task-configuration--category"], [1, "task-configuration__location-container"], ["type", "text", "placeholder", "Manually type", 1, "task-configuration--location"], [1, "send-ticket"]], template: function AddTaskComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "noffi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Add new task");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Add photo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Add some photo so we can verify this report");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "textarea", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Auto detect");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Send ticket");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".main[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  background: #F8F8F8;\n}\n\n.logo[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  margin-bottom: 0.7rem;\n}\n\n.logo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 1rem 1rem 0 0;\n  font-size: 1.5rem;\n  font-weight: 900;\n}\n\n.task[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin: 0 2rem;\n}\n\n.section-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 900;\n  font-size: 1.9rem;\n}\n\n.task-configuration[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin: 0.5rem 0;\n}\n\n.task-configuration__title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.9rem;\n  opacity: 0.65;\n}\n\n.task-configuration__photo-container[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.task-configuration--image[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 0.5rem;\n  width: 10rem;\n  height: 6.2rem;\n  background: #fff;\n  border-radius: 10px;\n  cursor: pointer;\n}\n\n.task-configuration--image[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 3rem;\n}\n\n.task-configuration--help-text[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0.5rem 0 0 0.5rem;\n  height: 6.2rem;\n  background: linear-gradient(235.25deg, #535252 16.85%, #343434 61.61%);\n  border-radius: 10px;\n}\n\n.task-configuration--help-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0.5rem;\n  text-align: center;\n  color: #fff;\n  font-size: 1rem;\n}\n\n.task-configuration--description[_ngcontent-%COMP%] {\n  height: 6rem;\n  padding: 0.5rem;\n  margin-top: 0.5rem;\n  border: none;\n  border-radius: 10px;\n  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.26);\n}\n\n.task-configuration--category[_ngcontent-%COMP%] {\n  height: 1.5rem;\n  padding: 0.5rem;\n  margin-top: 0.5rem;\n  border: none;\n  border-radius: 10px;\n  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.26);\n}\n\n.task-configuration__location-container[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 0.5rem;\n}\n\n.task-configuration__location-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: linear-gradient(235.25deg, #535252 16.85%, #343434 61.61%);\n  color: #fff;\n  width: 9rem;\n  height: 3rem;\n  padding: 0.5rem;\n  margin-right: 0.5rem;\n  border: none;\n  border-radius: 10px;\n  outline: none;\n  cursor: pointer;\n}\n\n.task-configuration--location[_ngcontent-%COMP%] {\n  width: 9rem;\n  padding: 0.5rem;\n  text-align: center;\n  border: none;\n  border-radius: 10px;\n  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.26);\n}\n\n.send-ticket[_ngcontent-%COMP%] {\n  border: none;\n  background: linear-gradient(93.88deg, #FE6F6F 0.66%, #3B7CCC 94.89%);\n  color: #fff;\n  font-weight: bold;\n  border-radius: 10px;\n  height: 3rem;\n  margin: 2rem 0 1rem 0;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FkZC10YXNrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLHNFQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUNBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0Usc0VBQUE7RUFDQSxXQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQUFGOztBQUdBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlDQUFBO0FBQUY7O0FBR0E7RUFDRSxZQUFBO0VBQ0Esb0VBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUFBRiIsImZpbGUiOiJhZGQtdGFzay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBiYWNrZ3JvdW5kOiAjRjhGOEY4O1xyXG59XHJcblxyXG4ubG9nbyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIG1hcmdpbi1ib3R0b206IDAuN3JlbTtcclxufVxyXG5cclxuLmxvZ28gcCB7XHJcbiAgbWFyZ2luOiAxcmVtIDFyZW0gMCAwO1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbn1cclxuXHJcbi50YXNrIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWFyZ2luOiAwIDJyZW07XHJcbn1cclxuXHJcbi5zZWN0aW9uLXRpdGxlIHtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICBmb250LXNpemU6IDEuOXJlbTtcclxufVxyXG5cclxuLnRhc2stY29uZmlndXJhdGlvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1hcmdpbjogMC41cmVtIDA7XHJcbn1cclxuXHJcbi50YXNrLWNvbmZpZ3VyYXRpb25fX3RpdGxlIHtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgb3BhY2l0eTogMC42NTtcclxufVxyXG5cclxuLnRhc2stY29uZmlndXJhdGlvbl9fcGhvdG8tY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4udGFzay1jb25maWd1cmF0aW9uLS1pbWFnZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcclxuICB3aWR0aDogMTByZW07XHJcbiAgaGVpZ2h0OiA2LjJyZW07XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnRhc2stY29uZmlndXJhdGlvbi0taW1hZ2UgcCB7XHJcbiAgZm9udC1zaXplOiAzcmVtO1xyXG59XHJcblxyXG4udGFzay1jb25maWd1cmF0aW9uLS1oZWxwLXRleHQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW46IDAuNXJlbSAwIDAgMC41cmVtO1xyXG4gIGhlaWdodDogNi4ycmVtO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyMzUuMjVkZWcsICM1MzUyNTIgMTYuODUlLCAjMzQzNDM0IDYxLjYxJSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLnRhc2stY29uZmlndXJhdGlvbi0taGVscC10ZXh0IHAge1xyXG4gIG1hcmdpbjogMCAwLjVyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5cclxuLnRhc2stY29uZmlndXJhdGlvbi0tZGVzY3JpcHRpb24ge1xyXG4gIGhlaWdodDogNnJlbTtcclxuICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMjYpO1xyXG59XHJcblxyXG4udGFzay1jb25maWd1cmF0aW9uLS1jYXRlZ29yeSB7XHJcbiAgaGVpZ2h0OiAxLjVyZW07XHJcbiAgcGFkZGluZzogMC41cmVtO1xyXG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBib3gtc2hhZG93OiAwIDFweCA4cHggcmdiYSgwLCAwLCAwLCAwLjI2KTtcclxufVxyXG5cclxuLnRhc2stY29uZmlndXJhdGlvbl9fbG9jYXRpb24tY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcclxufVxyXG5cclxuLnRhc2stY29uZmlndXJhdGlvbl9fbG9jYXRpb24tY29udGFpbmVyIGJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDIzNS4yNWRlZywgIzUzNTI1MiAxNi44NSUsICMzNDM0MzQgNjEuNjElKTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBcclxuICB3aWR0aDogOXJlbTtcclxuICBoZWlnaHQ6IDNyZW07XHJcbiAgcGFkZGluZzogMC41cmVtO1xyXG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4udGFzay1jb25maWd1cmF0aW9uLS1sb2NhdGlvbiB7XHJcbiAgd2lkdGg6IDlyZW07XHJcbiAgcGFkZGluZzogMC41cmVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBib3gtc2hhZG93OiAwIDFweCA4cHggcmdiYSgwLCAwLCAwLCAwLjI2KTtcclxufVxyXG5cclxuLnNlbmQtdGlja2V0IHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkzLjg4ZGVnLCAjRkU2RjZGIDAuNjYlLCAjM0I3Q0NDIDk0Ljg5JSk7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBoZWlnaHQ6IDNyZW07XHJcbiAgbWFyZ2luOiAycmVtIDAgMXJlbSAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "YV3U":
/*!******************************************************************!*\
  !*** ./src/app/pages/welcome-screen/welcome-screen.component.ts ***!
  \******************************************************************/
/*! exports provided: WelcomeScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeScreenComponent", function() { return WelcomeScreenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class WelcomeScreenComponent {
    constructor() { }
    ngOnInit() {
    }
}
WelcomeScreenComponent.ɵfac = function WelcomeScreenComponent_Factory(t) { return new (t || WelcomeScreenComponent)(); };
WelcomeScreenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WelcomeScreenComponent, selectors: [["app-welcome-screen"]], decls: 173, vars: 0, consts: [[1, "Title"], [1, "location-contanier"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24"], ["d", "M12 2c3.196 0 6 2.618 6 5.602 0 3.093-2.493 7.132-6 12.661-3.507-5.529-6-9.568-6-12.661 0-2.984 2.804-5.602 6-5.602m0-2c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"], [1, "Version1"], ["id", "a8904fed-7223-4ff2-9071-b444910320a0", "data-name", "Layer 1", "xmlns", "http://www.w3.org/2000/svg", "width", "1137", "height", "518.05664", "viewBox", "0 0 1137 518.05664"], ["d", "M175.76416,701.583l-1.95117-.43946c21.75586-96.751,76.43017-184.60937,153.95117-247.3916A444.114,444.114,0,0,1,1039.919,699.96289l-1.94922.44336C991.916,498.19727,814.69531,356.97168,607,356.97168,402.02637,356.97168,220.66553,501.90137,175.76416,701.583Z", "transform", "translate(-31.5 -190.97168)", "fill", "#3f3d56"], ["cx", "899.63335", "cy", "219.90276", "r", "54.31516", "fill", "#ff6584"], ["x", "877", "y", "437.05664", "width", "2", "height", "79", "fill", "#3f3d56"], ["d", "M928.95773,638.096c.12732,27.62433-19.30786,50.10833-19.30786,50.10833s-19.6416-22.3039-19.76892-49.92823,19.30786-50.10833,19.30786-50.10833S928.83041,610.47163,928.95773,638.096Z", "transform", "translate(-31.5 -190.97168)", "fill", "#3b7ccc"], ["d", "M928.95773,638.096c.12732,27.62433-19.30786,50.10833-19.30786,50.10833s-19.6416-22.3039-19.76892-49.92823,19.30786-50.10833,19.30786-50.10833S928.83041,610.47163,928.95773,638.096Z", "transform", "translate(-31.5 -190.97168)", "opacity", "0.1"], ["cx", "501.02166", "cy", "248.742", "r", "31.2479", "fill", "#3b7ccc", "opacity", "0.4"], ["cx", "443.18972", "cy", "263.66637", "r", "21.92017", "fill", "#3b7ccc", "opacity", "0.4"], ["cx", "208.18972", "cy", "326.66637", "r", "21.92017", "fill", "#3b7ccc", "opacity", "0.4"], ["cx", "856.31222", "cy", "246.17134", "r", "31.2479", "fill", "#3b7ccc", "opacity", "0.4"], ["d", "M88.13058,698.24412c1.694,6.26184,7.4961,10.14,7.4961,10.14s3.05572-6.27434,1.36177-12.53618-7.49609-10.14-7.49609-10.14S86.43664,691.98227,88.13058,698.24412Z", "transform", "translate(-31.5 -190.97168)", "fill", "#3f3d56"], ["d", "M90.61972,696.89838c4.64821,4.52485,5.216,11.4806,5.216,11.4806s-6.9685-.38049-11.61672-4.90534-5.216-11.48059-5.216-11.48059S85.9715,692.37353,90.61972,696.89838Z", "transform", "translate(-31.5 -190.97168)", "fill", "#3b7ccc"], ["d", "M700.13058,698.24412c1.69395,6.26184,7.4961,10.14,7.4961,10.14s3.05572-6.27434,1.36177-12.53618-7.49609-10.14-7.49609-10.14S698.43664,691.98227,700.13058,698.24412Z", "transform", "translate(-31.5 -190.97168)", "fill", "#3f3d56"], ["d", "M702.61972,696.89838c4.64821,4.52485,5.216,11.4806,5.216,11.4806s-6.9685-.38049-11.61672-4.90534-5.216-11.48059-5.216-11.48059S697.9715,692.37353,702.61972,696.89838Z", "transform", "translate(-31.5 -190.97168)", "fill", "#3b7ccc"], ["points", "68.137 460.203 64 453.308 102.614 420.21 201.908 420.21 201.908 429.863 166.052 468.478 124.679 476.752 68.137 460.203", "fill", "#3f3d56"], ["points", "219 439.633 219 418.056 206 418.056 206 424.86 201.908 420.21 168.81 453.308 163.293 458.824 156.398 486.406 168.81 516.745 232.247 516.745 232.247 454.687 219 439.633", "fill", "#ccc"], ["x", "64", "y", "453.30771", "width", "104.80978", "height", "63.4375", "fill", "#f2f2f2"], ["x", "132.26427", "y", "473.30431", "width", "22.06522", "height", "19.30707", "fill", "#3f3d56"], ["x", "103.99321", "y", "472.61477", "width", "19.30707", "height", "44.13043", "fill", "#ccc"], ["points", "81.928 479.51 81.928 472.615 73.654 472.615 73.654 479.51 81.238 479.51 81.928 479.51", "fill", "#3f3d56"], ["points", "81.238 485.026 73.654 485.026 73.654 491.922 81.928 491.922 81.928 485.026 81.238 485.026", "fill", "#3f3d56"], ["x", "87.44429", "y", "472.61477", "width", "8.27446", "height", "6.89538", "fill", "#3f3d56"], ["x", "87.44429", "y", "485.02646", "width", "8.27446", "height", "6.89538", "fill", "#3f3d56"], ["points", "198.46 480.2 198.46 473.304 190.185 473.304 190.185 480.2 197.77 480.2 198.46 480.2", "fill", "#3f3d56"], ["points", "197.77 485.716 190.185 485.716 190.185 492.611 198.46 492.611 198.46 485.716 197.77 485.716", "fill", "#3f3d56"], ["x", "203.97622", "y", "473.30431", "width", "8.27446", "height", "6.89538", "fill", "#3f3d56"], ["x", "203.97622", "y", "485.716", "width", "8.27446", "height", "6.89538", "fill", "#3f3d56"], ["points", "467.137 460.203 463 453.308 501.614 420.21 600.908 420.21 600.908 429.863 565.052 468.478 523.679 476.752 467.137 460.203", "fill", "#3f3d56"], ["points", "618 439.633 618 418.056 605 418.056 605 424.86 600.908 420.21 567.81 453.308 562.293 458.824 555.398 486.406 567.81 516.745 631.247 516.745 631.247 454.687 618 439.633", "fill", "#ccc"], ["x", "463", "y", "453.30771", "width", "104.80978", "height", "63.4375", "fill", "#f2f2f2"], ["x", "531.26427", "y", "473.30431", "width", "22.06522", "height", "19.30707", "fill", "#3f3d56"], ["x", "502.99321", "y", "472.61477", "width", "19.30707", "height", "44.13043", "fill", "#ccc"], ["points", "480.928 479.51 480.928 472.615 472.654 472.615 472.654 479.51 480.238 479.51 480.928 479.51", "fill", "#3f3d56"], ["points", "480.238 485.026 472.654 485.026 472.654 491.922 480.928 491.922 480.928 485.026 480.238 485.026", "fill", "#3f3d56"], ["x", "486.44429", "y", "472.61477", "width", "8.27446", "height", "6.89538", "fill", "#3f3d56"], ["x", "486.44429", "y", "485.02646", "width", "8.27446", "height", "6.89538", "fill", "#3f3d56"], ["points", "597.46 480.2 597.46 473.304 589.185 473.304 589.185 480.2 596.77 480.2 597.46 480.2", "fill", "#3f3d56"], ["points", "596.77 485.716 589.185 485.716 589.185 492.611 597.46 492.611 597.46 485.716 596.77 485.716", "fill", "#3f3d56"], ["x", "602.97622", "y", "473.30431", "width", "8.27446", "height", "6.89538", "fill", "#3f3d56"], ["x", "602.97622", "y", "485.716", "width", "8.27446", "height", "6.89538", "fill", "#3f3d56"], ["points", "280.515 344.361 273.62 338.844 312.234 304.367 410.148 304.367 410.148 334.707 346.711 377.459 280.515 344.361", "fill", "#3f3d56"], ["points", "428 323.707 428 305.056 415 305.056 415 309.624 410.148 304.367 378.429 338.844 366.018 347.119 346.773 487.722 375.796 516.745 443.246 516.745 443.246 340.223 428 323.707", "fill", "#ccc"], ["x", "273.61957", "y", "338.84439", "width", "104.80978", "height", "177.90082", "fill", "#f2f2f2"], ["x", "314.30231", "y", "473.30431", "width", "19.30707", "height", "43.4409", "fill", "#ccc"], ["points", "293.616 485.716 293.616 478.821 285.342 478.821 285.342 485.716 292.927 485.716 293.616 485.716", "fill", "#3f3d56"], ["points", "292.927 491.232 285.342 491.232 285.342 498.128 293.616 498.128 293.616 491.232 292.927 491.232", "fill", "#3f3d56"], ["x", "299.13247", "y", "478.82062", "width", "8.27446", "height", "6.89538", "fill", "#3f3d56"], ["x", "299.13247", "y", "491.2323", "width", "8.27446", "height", "6.89538", "fill", "#3f3d56"], ["points", "350.158 485.716 350.158 478.821 341.884 478.821 341.884 485.716 349.469 485.716 350.158 485.716", "fill", "#3f3d56"], ["points", "349.469 491.232 341.884 491.232 341.884 498.128 350.158 498.128 350.158 491.232 349.469 491.232", "fill", "#3f3d56"], ["x", "355.67459", "y", "478.82062", "width", "8.27446", "height", "6.89538", "fill", "#3f3d56"], ["x", "355.67459", "y", "491.2323", "width", "8.27446", "height", "6.89538", "fill", "#3f3d56"], ["points", "408.079 347.808 408.079 340.913 399.805 340.913 399.805 347.808 407.39 347.808 408.079 347.808", "fill", "#3f3d56"], ["points", "407.39 353.325 399.805 353.325 399.805 360.22 408.079 360.22 408.079 353.325 407.39 353.325", "fill", "#3f3d56"], ["x", "413.59579", "y", "340.91301", "width", "8.27446", "height", "6.89538", "fill", "#3f3d56"], ["x", "413.59579", "y", "353.32469", "width", "8.27446", "height", "6.89538", "fill", "#3f3d56"], ["points", "408.079 386.423 408.079 379.527 399.805 379.527 399.805 386.423 407.39 386.423 408.079 386.423", "fill", "#3f3d56"], ["points", "407.39 391.939 399.805 391.939 399.805 398.834 408.079 398.834 408.079 391.939 407.39 391.939", "fill", "#3f3d56"], ["x", "413.59579", "y", "379.52714", "width", "8.27446", "height", "6.89538", "fill", "#3f3d56"], ["x", "413.59579", "y", "391.93882", "width", "8.27446", "height", "6.89538", "fill", "#3f3d56"], ["points", "408.079 425.037 408.079 418.141 399.805 418.141 399.805 425.037 407.39 425.037 408.079 425.037", "fill", "#3f3d56"], ["points", "407.39 430.553 399.805 430.553 399.805 437.448 408.079 437.448 408.079 430.553 407.39 430.553", "fill", "#3f3d56"], ["x", "413.59579", "y", "418.14127", "width", "8.27446", "height", "6.89538", "fill", "#3f3d56"], ["x", "413.59579", "y", "430.55295", "width", "8.27446", "height", "6.89538", "fill", "#3f3d56"], ["points", "408.079 463.651 408.079 456.755 399.805 456.755 399.805 463.651 407.39 463.651 408.079 463.651", "fill", "#3f3d56"], ["points", "407.39 469.167 399.805 469.167 399.805 476.062 408.079 476.062 408.079 469.167 407.39 469.167", "fill", "#3f3d56"], ["x", "413.59579", "y", "456.7554", "width", "8.27446", "height", "6.89538", "fill", "#3f3d56"], ["x", "413.59579", "y", "469.16708", "width", "8.27446", "height", "6.89538", "fill", "#3f3d56"], ["x", "285.34171", "y", "347.80839", "width", "79.98641", "height", "16.54891", "fill", "#3f3d56"], ["x", "285.34171", "y", "380.90621", "width", "79.98641", "height", "16.54891", "fill", "#3f3d56"], ["x", "285.34171", "y", "414.00404", "width", "79.98641", "height", "16.54891", "fill", "#3f3d56"], ["x", "285.34171", "y", "447.10187", "width", "79.98641", "height", "16.54891", "fill", "#3f3d56"], ["points", "683.515 344.361 676.62 338.844 715.234 304.367 813.148 304.367 813.148 334.707 749.711 377.459 683.515 344.361", "fill", "#3f3d56"], ["points", "831 323.707 831 305.056 818 305.056 818 309.624 813.148 304.367 781.429 338.844 769.018 347.119 749.773 487.722 778.796 516.745 846.246 516.745 846.246 340.223 831 323.707", "fill", "#ccc"], ["x", "676.61957", "y", "338.84439", "width", "104.80978", "height", "177.90082", "fill", "#f2f2f2"], ["x", "717.30231", "y", "473.30431", "width", "19.30707", "height", "43.4409", "fill", "#ccc"], ["points", "696.616 485.716 696.616 478.821 688.342 478.821 688.342 485.716 695.927 485.716 696.616 485.716", "fill", "#3f3d56"], ["points", "695.927 491.232 688.342 491.232 688.342 498.128 696.616 498.128 696.616 491.232 695.927 491.232", "fill", "#3f3d56"], ["x", "702.13247", "y", "478.82062", "width", "8.27446", "height", "6.89538", "fill", "#3f3d56"], ["x", "702.13247", "y", "491.2323", "width", "8.27446", "height", "6.89538", "fill", "#3f3d56"], ["points", "753.158 485.716 753.158 478.821 744.884 478.821 744.884 485.716 752.469 485.716 753.158 485.716", "fill", "#3f3d56"], ["points", "752.469 491.232 744.884 491.232 744.884 498.128 753.158 498.128 753.158 491.232 752.469 491.232", "fill", "#3f3d56"], ["x", "758.67459", "y", "478.82062", "width", "8.27446", "height", "6.89538", "fill", "#3f3d56"], ["x", "758.67459", "y", "491.2323", "width", "8.27446", "height", "6.89538", "fill", "#3f3d56"], ["points", "811.079 347.808 811.079 340.913 802.805 340.913 802.805 347.808 810.39 347.808 811.079 347.808", "fill", "#3f3d56"], ["points", "810.39 353.325 802.805 353.325 802.805 360.22 811.079 360.22 811.079 353.325 810.39 353.325", "fill", "#3f3d56"], ["x", "816.59579", "y", "340.91301", "width", "8.27446", "height", "6.89538", "fill", "#3f3d56"], ["x", "816.59579", "y", "353.32469", "width", "8.27446", "height", "6.89538", "fill", "#3f3d56"], ["points", "811.079 386.423 811.079 379.527 802.805 379.527 802.805 386.423 810.39 386.423 811.079 386.423", "fill", "#3f3d56"], ["points", "810.39 391.939 802.805 391.939 802.805 398.834 811.079 398.834 811.079 391.939 810.39 391.939", "fill", "#3f3d56"], ["x", "816.59579", "y", "379.52714", "width", "8.27446", "height", "6.89538", "fill", "#3f3d56"], ["x", "816.59579", "y", "391.93882", "width", "8.27446", "height", "6.89538", "fill", "#3f3d56"], ["points", "811.079 425.037 811.079 418.141 802.805 418.141 802.805 425.037 810.39 425.037 811.079 425.037", "fill", "#3f3d56"], ["points", "810.39 430.553 802.805 430.553 802.805 437.448 811.079 437.448 811.079 430.553 810.39 430.553", "fill", "#3f3d56"], ["x", "816.59579", "y", "418.14127", "width", "8.27446", "height", "6.89538", "fill", "#3f3d56"], ["x", "816.59579", "y", "430.55295", "width", "8.27446", "height", "6.89538", "fill", "#3f3d56"], ["points", "811.079 463.651 811.079 456.755 802.805 456.755 802.805 463.651 810.39 463.651 811.079 463.651", "fill", "#3f3d56"], ["points", "810.39 469.167 802.805 469.167 802.805 476.062 811.079 476.062 811.079 469.167 810.39 469.167", "fill", "#3f3d56"], ["x", "816.59579", "y", "456.7554", "width", "8.27446", "height", "6.89538", "fill", "#3f3d56"], ["x", "816.59579", "y", "469.16708", "width", "8.27446", "height", "6.89538", "fill", "#3f3d56"], ["x", "688.34171", "y", "347.80839", "width", "79.98641", "height", "16.54891", "fill", "#3f3d56"], ["x", "688.34171", "y", "380.90621", "width", "79.98641", "height", "16.54891", "fill", "#3f3d56"], ["x", "688.34171", "y", "414.00404", "width", "79.98641", "height", "16.54891", "fill", "#3f3d56"], ["x", "688.34171", "y", "447.10187", "width", "79.98641", "height", "16.54891", "fill", "#3f3d56"], ["points", "904.515 344.361 897.62 338.844 936.234 304.367 1034.148 304.367 1034.148 334.707 970.711 377.459 904.515 344.361", "fill", "#3f3d56"], ["points", "1052 323.707 1052 305.056 1039 305.056 1039 309.624 1034.148 304.367 1002.429 338.844 990.018 347.119 970.773 487.722 999.796 516.745 1067.246 516.745 1067.246 340.223 1052 323.707", "fill", "#ccc"], ["x", "897.61957", "y", "338.84439", "width", "104.80978", "height", "177.90082", "fill", "#f2f2f2"], ["x", "938.30231", "y", "473.30431", "width", "19.30707", "height", "43.4409", "fill", "#ccc"], ["points", "917.616 485.716 917.616 478.821 909.342 478.821 909.342 485.716 916.927 485.716 917.616 485.716", "fill", "#3f3d56"], ["points", "916.927 491.232 909.342 491.232 909.342 498.128 917.616 498.128 917.616 491.232 916.927 491.232", "fill", "#3f3d56"], ["x", "923.13247", "y", "478.82062", "width", "8.27446", "height", "6.89538", "fill", "#3f3d56"], ["x", "923.13247", "y", "491.2323", "width", "8.27446", "height", "6.89538", "fill", "#3f3d56"], ["points", "974.158 485.716 974.158 478.821 965.884 478.821 965.884 485.716 973.469 485.716 974.158 485.716", "fill", "#3f3d56"], ["points", "973.469 491.232 965.884 491.232 965.884 498.128 974.158 498.128 974.158 491.232 973.469 491.232", "fill", "#3f3d56"], ["x", "979.67459", "y", "478.82062", "width", "8.27446", "height", "6.89538", "fill", "#3f3d56"], ["x", "979.67459", "y", "491.2323", "width", "8.27446", "height", "6.89538", "fill", "#3f3d56"], ["points", "1032.079 347.808 1032.079 340.913 1023.805 340.913 1023.805 347.808 1031.39 347.808 1032.079 347.808", "fill", "#3f3d56"], ["points", "1031.39 353.325 1023.805 353.325 1023.805 360.22 1032.079 360.22 1032.079 353.325 1031.39 353.325", "fill", "#3f3d56"], ["x", "1037.59579", "y", "340.91301", "width", "8.27446", "height", "6.89538", "fill", "#3f3d56"], ["x", "1037.59579", "y", "353.32469", "width", "8.27446", "height", "6.89538", "fill", "#3f3d56"], ["points", "1032.079 386.423 1032.079 379.527 1023.805 379.527 1023.805 386.423 1031.39 386.423 1032.079 386.423", "fill", "#3f3d56"], ["points", "1031.39 391.939 1023.805 391.939 1023.805 398.834 1032.079 398.834 1032.079 391.939 1031.39 391.939", "fill", "#3f3d56"], ["x", "1037.59579", "y", "379.52714", "width", "8.27446", "height", "6.89538", "fill", "#3f3d56"], ["x", "1037.59579", "y", "391.93882", "width", "8.27446", "height", "6.89538", "fill", "#3f3d56"], ["points", "1032.079 425.037 1032.079 418.141 1023.805 418.141 1023.805 425.037 1031.39 425.037 1032.079 425.037", "fill", "#3f3d56"], ["points", "1031.39 430.553 1023.805 430.553 1023.805 437.448 1032.079 437.448 1032.079 430.553 1031.39 430.553", "fill", "#3f3d56"], ["x", "1037.59579", "y", "418.14127", "width", "8.27446", "height", "6.89538", "fill", "#3f3d56"], ["x", "1037.59579", "y", "430.55295", "width", "8.27446", "height", "6.89538", "fill", "#3f3d56"], ["points", "1032.079 463.651 1032.079 456.755 1023.805 456.755 1023.805 463.651 1031.39 463.651 1032.079 463.651", "fill", "#3f3d56"], ["points", "1031.39 469.167 1023.805 469.167 1023.805 476.062 1032.079 476.062 1032.079 469.167 1031.39 469.167", "fill", "#3f3d56"], ["x", "1037.59579", "y", "456.7554", "width", "8.27446", "height", "6.89538", "fill", "#3f3d56"], ["x", "1037.59579", "y", "469.16708", "width", "8.27446", "height", "6.89538", "fill", "#3f3d56"], ["x", "909.34171", "y", "347.80839", "width", "79.98641", "height", "16.54891", "fill", "#3f3d56"], ["x", "909.34171", "y", "380.90621", "width", "79.98641", "height", "16.54891", "fill", "#3f3d56"], ["x", "909.34171", "y", "414.00404", "width", "79.98641", "height", "16.54891", "fill", "#3f3d56"], ["x", "909.34171", "y", "447.10187", "width", "79.98641", "height", "16.54891", "fill", "#3f3d56"], ["y", "516.05664", "width", "1137", "height", "2", "fill", "#3f3d56"], ["x", "252", "y", "437.05664", "width", "2", "height", "79", "fill", "#3f3d56"], ["d", "M303.95773,638.096c.12732,27.62433-19.30786,50.10833-19.30786,50.10833s-19.6416-22.3039-19.76892-49.92823,19.30786-50.10833,19.30786-50.10833S303.83041,610.47163,303.95773,638.096Z", "transform", "translate(-31.5 -190.97168)", "fill", "#3b7ccc"], ["x", "452", "y", "437.05664", "width", "2", "height", "79", "fill", "#3f3d56"], ["d", "M503.95773,638.096c.12732,27.62433-19.30786,50.10833-19.30786,50.10833s-19.6416-22.3039-19.76892-49.92823,19.30786-50.10833,19.30786-50.10833S503.83041,610.47163,503.95773,638.096Z", "transform", "translate(-31.5 -190.97168)", "fill", "#3b7ccc"], ["x", "851", "y", "437.05664", "width", "2", "height", "79", "fill", "#3f3d56"], ["d", "M902.95773,638.096c.12732,27.62433-19.30786,50.10833-19.30786,50.10833s-19.6416-22.3039-19.76892-49.92823,19.30786-50.10833,19.30786-50.10833S902.83041,610.47163,902.95773,638.096Z", "transform", "translate(-31.5 -190.97168)", "fill", "#3b7ccc"], ["cx", "587.5", "cy", "163.5", "rx", "38", "ry", "8.55", "fill", "#3b7ccc"], ["d", "M662,234.97168c0,24.30053-44,93-44,93s-44-68.69947-44-93a44,44,0,0,1,88,0Z", "transform", "translate(-31.5 -190.97168)", "fill", "#3b7ccc"], ["cx", "586.5", "cy", "44", "r", "25", "fill", "#f2f2f2"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "viewBox", "0 0 675.7 247", "width", "675.7pt", "height", "247pt", 1, "noffi-logo", 2, "isolation", "isolate"], ["id", "_clipPath_sQ4W74cfH8mMRgZsHACvL419LQh1Vq73"], ["width", "675.7", "height", "247"], ["clip-path", "url(#_clipPath_sQ4W74cfH8mMRgZsHACvL419LQh1Vq73)"], ["d", " M 432.941 247 L 377.719 247 L 377.719 126.171 L 348.498 126.171 L 377.719 87.236 L 377.719 70.34 L 377.719 70.34 Q 377.719 36.915 397.618 18.457 L 397.618 18.457 L 397.618 18.457 Q 417.517 0 453.317 0 L 453.317 0 L 453.317 0 L 516.659 0 L 484.273 43.159 Q 473.882 43.159 463.98 43.159 L 463.98 43.159 L 463.98 43.159 Q 432.941 43.159 432.941 71.258 L 432.941 71.258 L 432.941 87.236 L 480.49 87.236 L 451.274 126.171 L 432.941 126.171 L 432.941 247 Z  M 558.712 247 L 503.489 247 L 503.489 126.171 L 474.273 126.171 L 503.489 87.236 L 503.489 70.34 L 503.489 70.34 Q 503.489 36.915 523.388 18.457 L 523.388 18.457 L 523.388 18.457 Q 543.287 0 579.087 0 L 579.087 0 L 579.087 0 L 638.951 0 L 606.508 43.159 Q 599.652 43.159 589.75 43.159 L 589.75 43.159 L 589.75 43.159 Q 558.712 43.159 558.712 71.258 L 558.712 71.258 L 558.712 87.236 L 599.652 87.236 L 599.652 126.171 L 558.712 126.171 L 558.712 247 Z  M 670.2 0 L 669.724 175 L 625.165 175 L 625.165 55 L 670.2 0 Z ", "fill", "rgb(0,0,0)"], ["d", " M 647.614 190.897 L 647.614 190.897 L 647.614 190.897 Q 660.27 190.897 667.985 198.794 L 667.985 198.794 L 667.985 198.794 Q 675.7 206.692 675.7 218.997 L 675.7 218.997 L 675.7 218.997 Q 675.7 231.118 667.985 239.015 L 667.985 239.015 L 667.985 239.015 Q 660.27 246.912 647.614 246.912 L 647.614 246.912 L 647.614 246.912 Q 635.132 246.912 627.417 239.015 L 627.417 239.015 L 627.417 239.015 Q 619.702 231.118 619.702 218.997 L 619.702 218.997 L 619.702 218.997 Q 619.702 206.875 627.417 198.886 L 627.417 198.886 L 627.417 198.886 Q 635.132 190.897 647.614 190.897 Z ", "fill", "rgb(0,0,0)"], ["d", " M 0 73.386 L 44.404 73.386 L 44.404 88.123 L 44.404 92.793 Q 64.811 70.237 96.645 70.237 L 96.645 70.237 L 96.645 70.237 Q 124.724 70.237 138.437 86.14 L 138.437 86.14 L 138.437 86.14 Q 152.151 102.042 152.477 133.69 L 152.477 133.69 L 152.477 181.52 L 152.477 243.748 L 105.297 243.748 L 105.297 134.792 L 105.297 134.792 Q 105.297 120.307 98.767 113.772 L 98.767 113.772 L 98.767 113.772 Q 92.237 107.238 77.055 107.238 L 77.055 107.238 L 77.055 107.238 Q 57.138 107.238 47.18 123.613 L 47.18 123.613 L 47.18 243.748 L 0 243.748 L 0 73.386 Z  M 168.881 159.04 L 168.881 156.993 L 168.881 156.993 Q 168.881 131.643 179.003 111.804 L 179.003 111.804 L 179.003 111.804 Q 189.124 91.966 208.143 81.101 L 208.143 81.101 L 208.143 81.101 Q 227.162 70.237 252.303 70.237 L 252.303 70.237 L 252.303 70.237 Q 288.055 70.237 310.665 91.336 L 310.665 91.336 L 310.665 91.336 Q 333.275 112.434 335.887 148.648 L 335.887 148.648 L 336.214 160.299 L 336.214 160.299 Q 336.214 199.504 313.522 223.201 L 313.522 223.201 L 313.522 223.201 Q 290.83 246.897 252.629 246.897 L 252.629 246.897 L 252.629 246.897 Q 214.428 246.897 191.655 223.28 L 191.655 223.28 L 191.655 223.28 Q 168.881 199.662 168.881 159.04 L 168.881 159.04 Z  M 216.061 160.299 L 216.061 160.299 L 216.061 160.299 Q 216.061 184.547 225.529 197.379 L 225.529 197.379 L 225.529 197.379 Q 234.998 210.211 252.629 210.211 L 252.629 210.211 L 252.629 210.211 Q 269.77 210.211 279.402 197.536 L 279.402 197.536 L 279.402 197.536 Q 289.034 184.862 289.034 156.993 L 289.034 156.993 L 289.034 156.993 Q 289.034 133.218 279.402 120.149 L 279.402 120.149 L 279.402 120.149 Q 269.77 107.081 252.303 107.081 L 252.303 107.081 L 252.303 107.081 Q 234.998 107.081 225.529 120.071 L 225.529 120.071 L 225.529 120.071 Q 216.061 133.06 216.061 160.299 Z ", "fill", "rgb(0,0,0)"]], template: function WelcomeScreenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Hello!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Choose your city");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "My city");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Pozna\u0144 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Change city");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "svg", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "best place");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "circle", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "rect", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "circle", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "circle", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "circle", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "circle", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "path", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "path", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "path", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "path", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "polygon", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "polygon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "rect", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "rect", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "rect", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "polygon", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "polygon", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "rect", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "rect", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "polygon", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "polygon", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "rect", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "rect", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "polygon", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "polygon", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "rect", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "rect", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "rect", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "polygon", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "polygon", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "rect", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "rect", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "polygon", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "polygon", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "rect", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "rect", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "polygon", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "polygon", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "rect", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "rect", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "polygon", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "polygon", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "rect", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "rect", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "polygon", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "polygon", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "rect", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "rect", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "polygon", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "polygon", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "rect", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "rect", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "polygon", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "polygon", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "rect", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "rect", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "polygon", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "polygon", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "rect", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "rect", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "polygon", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "polygon", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "rect", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "rect", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "rect", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "rect", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "rect", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "rect", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "polygon", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "polygon", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "rect", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "rect", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "polygon", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "polygon", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "rect", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "rect", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "polygon", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "polygon", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "rect", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "rect", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "polygon", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "polygon", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "rect", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "rect", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "polygon", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "polygon", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "rect", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "rect", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "polygon", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "polygon", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "rect", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "rect", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "polygon", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "polygon", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "rect", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "rect", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "rect", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "rect", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "rect", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "rect", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "polygon", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "polygon", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "rect", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "rect", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "polygon", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "polygon", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "rect", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "rect", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "polygon", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "polygon", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "rect", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "rect", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "polygon", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "polygon", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "rect", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "rect", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "polygon", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "polygon", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "rect", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "rect", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "polygon", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "polygon", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "rect", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "rect", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "polygon", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "polygon", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "rect", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "rect", 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "rect", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "rect", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "rect", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](153, "rect", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "rect", 141);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](155, "rect", 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](156, "path", 143);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "rect", 144);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "path", 145);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](159, "rect", 146);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](160, "path", 147);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](161, "ellipse", 148);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "path", 149);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](163, "circle", 150);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "svg", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "defs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "clipPath", 152);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](167, "rect", 153);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "g", 154);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](170, "path", 155);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](171, "path", 156);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "path", 157);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["body[_ngcontent-%COMP%] {\n  font-family: Roboto;\n  font-style: normal;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-weight: 900;\n  font-size: 38px;\n  line-height: 45px;\n  background: linear-gradient(93.88deg, #FE6F6F 0.66%, #3B7CCC 94.89%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-weight: 900;\n  font-size: 28px;\n  line-height: 33px;\n  color: rgba(0, 0, 0, 0.8);\n}\n\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%] {\n  line-height: 90%;\n  text-align: Left;\n  Vertical-align: Top;\n}\n\n.Title[_ngcontent-%COMP%] {\n  margin-top: 80px;\n  margin-left: 47px;\n}\n\n.noffi-logo[_ngcontent-%COMP%] {\n  width: 49px;\n  position: fixed;\n  top: 0px;\n  right: 0px;\n  height: auto;\n  margin: 15px;\n}\n\n#a8904fed-7223-4ff2-9071-b444910320a0[_ngcontent-%COMP%] {\n  width: 100%;\n  max-height: 40%;\n  position: absolute;\n  bottom: -3px;\n  right: 0px;\n  height: auto;\n}\n\n.location-contanier[_ngcontent-%COMP%] {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin: 45px auto;\n}\n\n.location-contanier[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 14.97px;\n  line-height: 18px;\n  display: flex;\n  align-items: center;\n  color: #000000;\n  opacity: 0.65;\n  margin: 0px 0px 12px 14px;\n}\n\n.location-contanier[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  width: 305px;\n  height: auto;\n  padding: 16px 9px;\n  background: #F1F1F1;\n  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);\n  border-radius: 10px;\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 16px;\n  display: flex;\n  max-width: 85%;\n  align-items: center;\n  position: relative;\n  color: #9F9F9F;\n  margin: auto;\n}\n\n.location-contanier[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  height: 20px;\n  width: auto;\n  fill: #9F9F9F;\n  margin: 0px 8px 0px 0px;\n}\n\n.location-contanier[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 75px;\n  height: 36px;\n  background: #E7E7E7;\n  border-radius: 8px;\n  font-weight: bold;\n  font-size: 10px;\n  line-height: 12px;\n  display: block;\n  border: none;\n  position: absolute;\n  right: 8px;\n  color: #808080;\n  filter: drop-shadow(0px 1px 10px rgba(0, 0, 0, 0.05));\n}\n\n.Version1[_ngcontent-%COMP%] {\n  background: linear-gradient(93.88deg, #FE6F6F 0.66%, #3B7CCC 94.89%);\n  mix-blend-mode: normal;\n  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.15);\n  border-radius: 10px;\n  font-weight: bold;\n  font-size: 21px;\n  line-height: 25px;\n  color: #FFFFFF;\n  width: 317px;\n  height: 51px;\n  max-width: 80%;\n  border: none;\n  display: block;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3dlbGNvbWUtc2NyZWVuLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUNBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFHQSxvRUFBQTtFQUNBLDZCQUFBO0VBQ0Esb0NBQUE7QUFFSjs7QUFDQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QUFFSjs7QUFBQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUdKOztBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtBQUdKOztBQURBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBSUo7O0FBRkU7RUFDTSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBS1I7O0FBRkU7RUFDTSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxpQkFBQTtBQUtSOztBQUpNO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtBQU1SOztBQUpJO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkNBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUFNUjs7QUFISTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBS1I7O0FBSEk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLHFEQUFBO0FBS1I7O0FBREU7RUFDTSxvRUFBQTtFQUNBLHNCQUFBO0VBQ0EsNENBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQUlSIiwiZmlsZSI6IndlbGNvbWUtc2NyZWVuLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuaDF7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgZm9udC1zaXplOiAzOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDQ1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCg5My44OGRlZywgI0ZFNkY2RiAwLjY2JSwgIzNCN0NDQyA5NC44OSUpO1xyXG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoOTMuODhkZWcsICNGRTZGNkYgMC42NiUsICMzQjdDQ0MgOTQuODklKTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5My44OGRlZywgI0ZFNkY2RiAwLjY2JSwgIzNCN0NDQyA5NC44OSUpO1xyXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbmgye1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzM3B4O1xyXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcclxufVxyXG5oMSwgaDJ7XHJcbiAgICBsaW5lLWhlaWdodDogOTAlO1xyXG4gICAgdGV4dC1hbGlnbjogTGVmdDtcclxuICAgIFZlcnRpY2FsLWFsaWduOiBUb3A7XHJcbn1cclxuXHJcbi5UaXRsZXtcclxuICAgIG1hcmdpbi10b3A6ODBweDtcclxuICAgIG1hcmdpbi1sZWZ0OjQ3cHg7XHJcbn1cclxuLm5vZmZpLWxvZ297XHJcbiAgICB3aWR0aDo0OXB4O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOjBweDtcclxuICAgIHJpZ2h0OjBweDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1hcmdpbjoxNXB4O1xyXG4gIH1cclxuICAjYTg5MDRmZWQtNzIyMy00ZmYyLTkwNzEtYjQ0NDkxMDMyMGEwe1xyXG4gICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgbWF4LWhlaWdodDogNDAlO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206LTNweDtcclxuICAgICAgICByaWdodDowcHg7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLmxvY2F0aW9uLWNvbnRhbmllcntcclxuICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICAgICAgbWFyZ2luOjQ1cHggYXV0bztcclxuICAgICAgaDR7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNC45N3B4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgICBvcGFjaXR5OiAwLjY1O1xyXG4gICAgICAgIG1hcmdpbjogMHB4IDBweCAxMnB4IDE0cHg7XHJcbiAgICAgIH1cclxuICAgIGRpdntcclxuICAgICAgICB3aWR0aDogMzA1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIHBhZGRpbmc6MTZweCA5cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI0YxRjFGMTtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggMXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA4NSU7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgY29sb3I6ICM5RjlGOUY7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG5cclxuICAgIH1cclxuICAgIHN2Z3tcclxuICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgd2lkdGg6YXV0bztcclxuICAgICAgICBmaWxsOiM5RjlGOUY7XHJcbiAgICAgICAgbWFyZ2luOjBweCA4cHggMHB4IDBweDtcclxuICAgIH1cclxuICAgIGJ1dHRvbntcclxuICAgICAgICB3aWR0aDogNzVweDtcclxuICAgICAgICBoZWlnaHQ6IDM2cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI0U3RTdFNztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxMnB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGJvcmRlcjpub25lO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICByaWdodDo4cHg7XHJcbiAgICAgICAgY29sb3I6ICM4MDgwODA7XHJcbiAgICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjA1KSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuVmVyc2lvbjF7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkzLjg4ZGVnLCAjRkU2RjZGIDAuNjYlLCAjM0I3Q0NDIDk0Ljg5JSk7XHJcbiAgICAgICAgbWl4LWJsZW5kLW1vZGU6IG5vcm1hbDtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggMXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjFweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgICAgICB3aWR0aDozMTdweDtcclxuICAgICAgICBoZWlnaHQ6NTFweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDgwJTtcclxuICAgICAgICBib3JkZXI6bm9uZTtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbn0iXX0= */"] });


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/service-worker */ "Jho9");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/login/login.component */ "D8EZ");
/* harmony import */ var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/register/register.component */ "fNfI");
/* harmony import */ var _pages_add_task_add_task_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/add-task/add-task.component */ "W4ST");
/* harmony import */ var _pages_tasks_list_tasks_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/tasks-list/tasks-list.component */ "BDcq");
/* harmony import */ var _pages_task_details_task_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/task-details/task-details.component */ "6ovx");
/* harmony import */ var _pages_edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/edit-task/edit-task.component */ "pnAd");
/* harmony import */ var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/layout/layout.component */ "9KET");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/menu/menu.component */ "0oYm");
/* harmony import */ var _pages_app_settings_app_settings_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/app-settings/app-settings.component */ "2PIz");
/* harmony import */ var _components_svg_svg_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/svg/svg.component */ "4/Rz");
/* harmony import */ var _components_reusable_buttons_test_reusable_buttons_test_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/reusable-buttons-test/reusable-buttons-test.component */ "BQc1");
/* harmony import */ var _components_services_test_services_test_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/services-test/services-test.component */ "UV7a");
/* harmony import */ var _pages_success_added_task_success_added_task_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/success-added-task/success-added-task.component */ "6NlH");
/* harmony import */ var _components_button_button_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/button/button.component */ "7psr");
/* harmony import */ var _pages_welcome_screen_welcome_screen_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/welcome-screen/welcome-screen.component */ "YV3U");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ "fXoL");























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_20__["CommonModule"],
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_3__["ServiceWorkerModule"].register('ngsw-worker.js', {
                enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production,
            }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _pages_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
        _pages_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"],
        _pages_add_task_add_task_component__WEBPACK_IMPORTED_MODULE_7__["AddTaskComponent"],
        _pages_tasks_list_tasks_list_component__WEBPACK_IMPORTED_MODULE_8__["TasksListComponent"],
        _pages_task_details_task_details_component__WEBPACK_IMPORTED_MODULE_9__["TaskDetailsComponent"],
        _pages_edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_10__["EditTaskComponent"],
        _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_11__["LayoutComponent"],
        _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_12__["MenuComponent"],
        _pages_app_settings_app_settings_component__WEBPACK_IMPORTED_MODULE_13__["AppSettingsComponent"],
        _components_svg_svg_component__WEBPACK_IMPORTED_MODULE_14__["SvgComponent"],
        _components_reusable_buttons_test_reusable_buttons_test_component__WEBPACK_IMPORTED_MODULE_15__["ReusableButtonsTestComponent"],
        _components_services_test_services_test_component__WEBPACK_IMPORTED_MODULE_16__["ServicesTestComponent"],
        _pages_success_added_task_success_added_task_component__WEBPACK_IMPORTED_MODULE_17__["SuccessAddedTaskComponent"],
        _components_button_button_component__WEBPACK_IMPORTED_MODULE_18__["ButtonComponent"],
        _pages_welcome_screen_welcome_screen_component__WEBPACK_IMPORTED_MODULE_19__["WelcomeScreenComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_20__["CommonModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_3__["ServiceWorkerModule"]] }); })();


/***/ }),

/***/ "fNfI":
/*!******************************************************!*\
  !*** ./src/app/pages/register/register.component.ts ***!
  \******************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class RegisterComponent {
    constructor() { }
    ngOnInit() {
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["rfr-register"]], decls: 2, vars: 0, template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "register works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "i6c7":
/*!******************************************!*\
  !*** ./src/app/services/task.service.ts ***!
  \******************************************/
/*! exports provided: TaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskService", function() { return TaskService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _models_task_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/task.model */ "tnjF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class TaskService {
    constructor() { }
    createId() {
        let result = '';
        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let charactersLength = characters.length;
        for (var i = 0; i <= 40; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
    addNewTask() {
        let task = new _models_task_model__WEBPACK_IMPORTED_MODULE_1__["Task"]();
        // Adding localization
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                let latitude = position.coords.latitude;
                let longitude = position.coords.longitude;
                let localization = { latitude, longitude };
                task.geoLocalization = localization;
            });
        }
        else {
            task.geoLocalization = undefined;
            console.log('The location could not be found');
        }
        // task.category = 'Pavment damage';
        // task.description = 'I found broken street light';
        // task.hash = `${new Date().getTime()}${this.createId()}`;
        // task.id = this.createId();
        // task.id_city = 44;
        // task.id_country = 1;
        // task.id_province = 45;
        // task.index = 234562;
        // task.reportTime = new Date();
        // task.votesDowm = 20;
        // task.votesUp = 5;
        console.log(task);
        //Database conection here
        this.databaseTask = task;
        console.log(this.databaseTask);
    }
    readTasksList() {
        //Database connection here
        let task = this.databaseTask;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(task);
    }
}
TaskService.ɵfac = function TaskService_Factory(t) { return new (t || TaskService)(); };
TaskService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: TaskService, factory: TaskService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "pnAd":
/*!********************************************************!*\
  !*** ./src/app/pages/edit-task/edit-task.component.ts ***!
  \********************************************************/
/*! exports provided: EditTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTaskComponent", function() { return EditTaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class EditTaskComponent {
    constructor() { }
    ngOnInit() {
    }
}
EditTaskComponent.ɵfac = function EditTaskComponent_Factory(t) { return new (t || EditTaskComponent)(); };
EditTaskComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditTaskComponent, selectors: [["rfr-edit-task"]], decls: 2, vars: 0, template: function EditTaskComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "edit-task works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LXRhc2suY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "tnjF":
/*!**************************************!*\
  !*** ./src/app/models/task.model.ts ***!
  \**************************************/
/*! exports provided: Task */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Task", function() { return Task; });
class Task {
}


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/menu/menu.component */ "0oYm");
/* harmony import */ var _components_reusable_buttons_test_reusable_buttons_test_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/reusable-buttons-test/reusable-buttons-test.component */ "BQc1");
/* harmony import */ var _components_services_test_services_test_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/services-test/services-test.component */ "UV7a");
/* harmony import */ var _pages_add_task_add_task_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/add-task/add-task.component */ "W4ST");
/* harmony import */ var _pages_app_settings_app_settings_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/app-settings/app-settings.component */ "2PIz");
/* harmony import */ var _pages_edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/edit-task/edit-task.component */ "pnAd");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/login/login.component */ "D8EZ");
/* harmony import */ var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/register/register.component */ "fNfI");
/* harmony import */ var _pages_success_added_task_success_added_task_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/success-added-task/success-added-task.component */ "6NlH");
/* harmony import */ var _pages_task_details_task_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/task-details/task-details.component */ "6ovx");
/* harmony import */ var _pages_tasks_list_tasks_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/tasks-list/tasks-list.component */ "BDcq");
/* harmony import */ var _pages_welcome_screen_welcome_screen_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/welcome-screen/welcome-screen.component */ "YV3U");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ "fXoL");















const routes = [
    { path: '', redirectTo: 'tasks', pathMatch: 'full' },
    { path: 'menu', component: _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__["MenuComponent"] },
    { path: 'login', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
    { path: 'register', component: _pages_register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"] },
    { path: 'addTask', component: _pages_add_task_add_task_component__WEBPACK_IMPORTED_MODULE_4__["AddTaskComponent"] },
    { path: 'editTask', component: _pages_edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_6__["EditTaskComponent"] },
    { path: 'tasks', component: _pages_tasks_list_tasks_list_component__WEBPACK_IMPORTED_MODULE_11__["TasksListComponent"] },
    { path: 'taskDetails', component: _pages_task_details_task_details_component__WEBPACK_IMPORTED_MODULE_10__["TaskDetailsComponent"] },
    { path: 'settings', component: _pages_app_settings_app_settings_component__WEBPACK_IMPORTED_MODULE_5__["AppSettingsComponent"] },
    { path: 'buttons-test', component: _components_reusable_buttons_test_reusable_buttons_test_component__WEBPACK_IMPORTED_MODULE_2__["ReusableButtonsTestComponent"] },
    { path: 'service-test', component: _components_services_test_services_test_component__WEBPACK_IMPORTED_MODULE_3__["ServicesTestComponent"] },
    { path: 'success-added-task', component: _pages_success_added_task_success_added_task_component__WEBPACK_IMPORTED_MODULE_9__["SuccessAddedTaskComponent"] },
    { path: 'welcome-screen', component: _pages_welcome_screen_welcome_screen_component__WEBPACK_IMPORTED_MODULE_12__["WelcomeScreenComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, { useHash: true })], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map