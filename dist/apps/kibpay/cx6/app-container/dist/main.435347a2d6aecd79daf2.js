(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/naineshrawani/Downloads/bb-cxs/statics/kibpay-project/apps/kibpay/src/main.ts */"zUnb");


/***/ }),

/***/ "08P1":
/*!********************************************************************************************************************************!*\
  !*** /Users/naineshrawani/Downloads/bb-cxs/statics/kibpay-project/libs/widget-kibpay/src/kibpay-logo/kibpay-logo.component.ts ***!
  \********************************************************************************************************************************/
/*! exports provided: KibpayLogoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KibpayLogoComponent", function() { return KibpayLogoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _utilities_widget_kibpay_asset_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/widget-kibpay-asset.service */ "UjU1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "2kYt");




class KibpayLogoComponent {
    constructor(widgetKibpayAssetService) {
        this.widgetKibpayAssetService = widgetKibpayAssetService;
        this.logo = this.widgetKibpayAssetService.getAsset("logo.png");
    }
}
KibpayLogoComponent.ɵfac = function KibpayLogoComponent_Factory(t) { return new (t || KibpayLogoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_utilities_widget_kibpay_asset_service__WEBPACK_IMPORTED_MODULE_1__["WidgetKibpayAssetService"])); };
KibpayLogoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: KibpayLogoComponent, selectors: [["kp-kibpay-logo"]], decls: 3, vars: 3, consts: [[1, "logo-container"], ["alt", "kibpay-logo", 1, "logo", 3, "src"]], template: function KibpayLogoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx.logo), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]], styles: [".logo-container[_ngcontent-%COMP%] {\n  display: block;\n  padding-top: 68px;\n}\n@media only screen and (min-width: 768px) and (max-width: 1023px) and (orientation: portrait) {\n  .logo-container[_ngcontent-%COMP%] {\n    padding-top: 98px;\n  }\n}\n.logo-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  width: 116px;\n  height: 50px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYnMvd2lkZ2V0LWtpYnBheS9zcmMva2licGF5LWxvZ28va2licGF5LWxvZ28uY29tcG9uZW50LnNjc3MiLCJhcHBzL2tpYnBheS9zcmMvYXNzZXRzL3Njc3MvMS1oZWxwZXJzL19taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtBQURKO0FDd0JNO0VEekJOO0lBS1EsaUJBQUE7RUFBTjtBQUNGO0FBRUk7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQVIiLCJmaWxlIjoibGlicy93aWRnZXQta2licGF5L3NyYy9raWJwYXktbG9nby9raWJwYXktbG9nby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uLy4uL2FwcHMva2licGF5L3NyYy9hc3NldHMvc2Nzcy8xLWhlbHBlcnMvbWl4aW5zJztcblxuLmxvZ28tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nLXRvcDogNjhweDtcblxuICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQobWQsIHBvcnRyYWl0KSB7XG4gICAgICAgIHBhZGRpbmctdG9wOiA5OHB4O1xuICAgIH1cblxuICAgIC5sb2dvIHtcbiAgICAgICAgd2lkdGg6IDExNnB4O1xuICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIH1cbn0iLCIkc2NyZWVuLXh4cy1taW46IDBweDtcbiRzY3JlZW4teHMtbWluOiA0ODBweDtcbiRzY3JlZW4tc20tbWluOiA2NDBweDtcbiRzY3JlZW4tbWQtbWluOiA3NjhweDtcbiRzY3JlZW4tbGctbWluOiAxMDI0cHg7XG5cbiRzY3JlZW4teHhzLW1heDogJHNjcmVlbi14cy1taW4gLSAxO1xuJHNjcmVlbi14cy1tYXg6ICRzY3JlZW4tc20tbWluIC0gMTtcbiRzY3JlZW4tc20tbWF4OiAkc2NyZWVuLW1kLW1pbiAtIDE7XG4kc2NyZWVuLW1kLW1heDogJHNjcmVlbi1sZy1taW4gLSAxO1xuXG5AbWl4aW4gYnJlYWtwb2ludCgkcG9pbnQsICRvcmllbnRhdGlvbjogdW5kZWZpbmVkKSB7XG4gIEBpZiAkcG9pbnQgPT0geHhzIHtcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRzY3JlZW4teHhzLW1pbikgYW5kIChtYXgtd2lkdGg6ICRzY3JlZW4teHhzLW1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRwb2ludCA9PSB4cyB7XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkc2NyZWVuLXhzLW1pbikgYW5kIChtYXgtd2lkdGg6ICRzY3JlZW4teHMtbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJHBvaW50ID09IHNtIHtcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRzY3JlZW4tc20tbWluKSBhbmQgKG1heC13aWR0aDogJHNjcmVlbi1zbS1tYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxuICBAZWxzZSBpZiAkcG9pbnQgPT0gbWQge1xuICAgIEBpZiAkb3JpZW50YXRpb24ge1xuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkc2NyZWVuLW1kLW1pbikgYW5kIChtYXgtd2lkdGg6ICRzY3JlZW4tbWQtbWF4KSBhbmQgKG9yaWVudGF0aW9uIDogJG9yaWVudGF0aW9uKSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgICAgfVxuICAgIH0gQGVsc2Uge1xuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkc2NyZWVuLW1kLW1pbikgYW5kIChtYXgtd2lkdGg6ICRzY3JlZW4tbWQtbWF4KSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgICAgfVxuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkc2NyZWVuLWxnLW1pbikge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KibpayLogoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'kp-kibpay-logo',
                templateUrl: `./kibpay-logo.component.html`,
                styleUrls: [`./kibpay-logo.component.scss`]
            }]
    }], function () { return [{ type: _utilities_widget_kibpay_asset_service__WEBPACK_IMPORTED_MODULE_1__["WidgetKibpayAssetService"] }]; }, null); })();


/***/ }),

/***/ "2yaG":
/*!*****************************************************************************************************!*\
  !*** /Users/naineshrawani/Downloads/bb-cxs/statics/kibpay-project/libs/widget-kibpay/public_api.ts ***!
  \*****************************************************************************************************/
/*! exports provided: WidgetKibpayModule, WidgetKibpayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_widget_kibpay_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/widget-kibpay.module */ "rdZ4");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WidgetKibpayModule", function() { return _src_widget_kibpay_module__WEBPACK_IMPORTED_MODULE_0__["WidgetKibpayModule"]; });

/* harmony import */ var _src_widget_kibpay_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/widget-kibpay.component */ "UzyK");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WidgetKibpayComponent", function() { return _src_widget_kibpay_component__WEBPACK_IMPORTED_MODULE_1__["WidgetKibpayComponent"]; });





/***/ }),

/***/ "9E+j":
/*!********************************************************************************************************************************!*\
  !*** /Users/naineshrawani/Downloads/bb-cxs/statics/kibpay-project/libs/widget-kibpay/src/kibpay-knet/kibpay-knet.component.ts ***!
  \********************************************************************************************************************************/
/*! exports provided: KibpayKnetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KibpayKnetComponent", function() { return KibpayKnetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _utilities_widget_kibpay_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/widget-kibpay.constants */ "a5AY");
/* harmony import */ var _widget_kibpay_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../widget-kibpay.service */ "SdEz");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng6-toastr-notifications */ "81g+");
/* harmony import */ var _utilities_widget_kibpay_asset_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utilities/widget-kibpay-asset.service */ "UjU1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _kibpay_loader_kibpay_loader_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../kibpay-loader/kibpay-loader.component */ "mdfc");
/* harmony import */ var _kibpay_logo_kibpay_logo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../kibpay-logo/kibpay-logo.component */ "08P1");










function KibpayKnetComponent_kp_kibpay_loader_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "kp-kibpay-loader");
} }
function KibpayKnetComponent_kp_kibpay_logo_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "kp-kibpay-logo");
} }
function KibpayKnetComponent_div_4_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx_r3.iconSuccess), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function KibpayKnetComponent_div_4_img_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx_r4.iconError), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function KibpayKnetComponent_div_4_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Payment successful");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function KibpayKnetComponent_div_4_p_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Payment failed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function KibpayKnetComponent_div_4_ng_container_9_div_5_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.paymentInfo.payeeName);
} }
function KibpayKnetComponent_div_4_ng_container_9_div_5_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function KibpayKnetComponent_div_4_ng_container_9_div_5_span_9_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r15.paymentInfo.currency);
} }
function KibpayKnetComponent_div_4_ng_container_9_div_5_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, KibpayKnetComponent_div_4_ng_container_9_div_5_span_9_span_2_Template, 2, 1, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r11.paymentInfo.amount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.paymentInfo.currency);
} }
function KibpayKnetComponent_div_4_ng_container_9_div_5_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function KibpayKnetComponent_div_4_ng_container_9_div_5_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r13.paymentInfo.description);
} }
function KibpayKnetComponent_div_4_ng_container_9_div_5_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function KibpayKnetComponent_div_4_ng_container_9_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Send payment to");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, KibpayKnetComponent_div_4_ng_container_9_div_5_span_4_Template, 2, 1, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, KibpayKnetComponent_div_4_ng_container_9_div_5_span_5_Template, 2, 0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, KibpayKnetComponent_div_4_ng_container_9_div_5_span_9_Template, 3, 2, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, KibpayKnetComponent_div_4_ng_container_9_div_5_span_10_Template, 2, 0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, KibpayKnetComponent_div_4_ng_container_9_div_5_span_14_Template, 2, 1, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, KibpayKnetComponent_div_4_ng_container_9_div_5_span_15_Template, 2, 0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.paymentInfo && ctx_r8.paymentInfo.payeeName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx_r8.paymentInfo && ctx_r8.paymentInfo.payeeName));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.paymentInfo && ctx_r8.paymentInfo.amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx_r8.paymentInfo && ctx_r8.paymentInfo.amount));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.paymentInfo && ctx_r8.paymentInfo.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx_r8.paymentInfo && ctx_r8.paymentInfo.description));
} }
const _c0 = function (a0) { return { "arrow-up": a0 }; };
function KibpayKnetComponent_div_4_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KibpayKnetComponent_div_4_ng_container_9_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r16.showTransactionDetails = !ctx_r16.showTransactionDetails; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Transaction details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, KibpayKnetComponent_div_4_ng_container_9_div_5_Template, 16, 6, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r7.showTransactionDetails));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.showTransactionDetails);
} }
function KibpayKnetComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, KibpayKnetComponent_div_4_img_4_Template, 2, 3, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, KibpayKnetComponent_div_4_img_5_Template, 2, 3, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, KibpayKnetComponent_div_4_p_6_Template, 2, 0, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, KibpayKnetComponent_div_4_p_7_Template, 2, 0, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, KibpayKnetComponent_div_4_ng_container_9_Template, 6, 4, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.paymentInfo.state == ctx_r2.AppConstants.CREDITED);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.paymentInfo.state != ctx_r2.AppConstants.CREDITED);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.paymentInfo.state == ctx_r2.AppConstants.CREDITED);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.paymentInfo.state == ctx_r2.AppConstants.KNET_FAILED);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.paymentInfo.state == ctx_r2.AppConstants.CREDITED);
} }
const _c1 = function (a0) { return { "full-height": a0 }; };
class KibpayKnetComponent {
    constructor(widgetKibpayService, cdref, router, route, toastr, widgetKibpayAssetService) {
        this.widgetKibpayService = widgetKibpayService;
        this.cdref = cdref;
        this.router = router;
        this.route = route;
        this.toastr = toastr;
        this.widgetKibpayAssetService = widgetKibpayAssetService;
        this.AppConstants = _utilities_widget_kibpay_constants__WEBPACK_IMPORTED_MODULE_1__["AppConstants"];
        this.paymentInfo = {};
        this.isLoaded = false;
        this.showTransactionDetails = false;
        this.showSubmit = false;
        this.iconSuccess = this.widgetKibpayAssetService.getAsset("icon-success.png");
        this.iconError = this.widgetKibpayAssetService.getAsset("icon-error.png");
    }
    ngOnInit() {
        this.paymentInfo = {};
        this.isLoaded = false;
        this.checkParams();
    }
    checkParams() {
        let paramsObj = {};
        let tempUrl = this.router.url;
        if (this.router.url.includes("?")) {
            tempUrl = this.router.url.split("?")[0];
        }
        if (tempUrl.includes("success")) {
            paramsObj.action = "success";
        }
        else if (tempUrl.includes("failure")) {
            paramsObj.action = "failure";
        }
        this.route.queryParams.subscribe(params => {
            if (params.Id) {
                paramsObj.Id = params.Id;
            }
            if (params.trandata) {
                paramsObj.trandata = params.trandata;
            }
        });
        this.getPaymentResult(paramsObj);
    }
    getPaymentResult(paramsObj) {
        if (paramsObj.action && paramsObj.Id && paramsObj.trandata) {
            this.widgetKibpayService.getPaymentResult(paramsObj)
                .subscribe(response => {
                this.paymentInfo = response;
                this.isLoaded = true;
                this.cdref.detectChanges();
            }, error => {
                this.router.navigateByUrl("/error");
                this.toastr.errorToastr((error && error.message) ? error.message : "Error");
                this.showSubmit = true;
                this.isLoaded = true;
                this.cdref.detectChanges();
            });
        }
        else {
            this.router.navigateByUrl("/error");
        }
    }
}
KibpayKnetComponent.ɵfac = function KibpayKnetComponent_Factory(t) { return new (t || KibpayKnetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_widget_kibpay_service__WEBPACK_IMPORTED_MODULE_2__["WidgetKibpayService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__["ToastrManager"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_utilities_widget_kibpay_asset_service__WEBPACK_IMPORTED_MODULE_5__["WidgetKibpayAssetService"])); };
KibpayKnetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: KibpayKnetComponent, selectors: [["kp-kibpay-knet"]], decls: 5, vars: 6, consts: [[1, "payment-container"], [1, "main-container", "knet-container", 3, "ngClass"], [4, "ngIf"], [1, "md-3", "sm-hide"], [1, "md-6"], [1, "text-center"], ["class", "icon-container", "alt", "icon-success", 3, "src", 4, "ngIf"], ["class", "icon-container", "alt", "icon-error", 3, "src", 4, "ngIf"], ["class", "header-text success-header-text", 4, "ngIf"], ["class", "header-text", 4, "ngIf"], [1, "payment-item-container", "text-center"], ["alt", "icon-success", 1, "icon-container", 3, "src"], ["alt", "icon-error", 1, "icon-container", 3, "src"], [1, "header-text", "success-header-text"], [1, "header-text"], [1, "toggle-container", 3, "click"], [1, "toggle-text", "pointer"], [1, "toggle-anchor", 3, "ngClass"], ["class", "form-item-container m-b-16", 4, "ngIf"], [1, "form-item-container", "m-b-16"], [1, "form-item", "text-left"], ["for", "SendPaymentTo"], ["class", "custom-input", 4, "ngIf"], ["for", "amount"], [1, "custom-input"]], template: function KibpayKnetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, KibpayKnetComponent_kp_kibpay_loader_2_Template, 1, 0, "kp-kibpay-loader", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, KibpayKnetComponent_kp_kibpay_logo_3_Template, 1, 0, "kp-kibpay-logo", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, KibpayKnetComponent_div_4_Template, 11, 5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, !ctx.showSubmit));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoaded);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _kibpay_loader_kibpay_loader_component__WEBPACK_IMPORTED_MODULE_7__["KibpayLoaderComponent"], _kibpay_logo_kibpay_logo_component__WEBPACK_IMPORTED_MODULE_8__["KibpayLogoComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: [".icon-container[_ngcontent-%COMP%] {\n  width: 168px;\n  height: 168px;\n  position: relative;\n  margin: 40px auto 0 auto;\n  background-repeat: no-repeat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYnMvd2lkZ2V0LWtpYnBheS9zcmMva2licGF5LWtuZXQva2licGF5LWtuZXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtBQUNKOztBQUNBOzs7Ozs7RUFBQSIsImZpbGUiOiJsaWJzL3dpZGdldC1raWJwYXkvc3JjL2tpYnBheS1rbmV0L2tpYnBheS1rbmV0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmljb24tY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTY4cHg7XG4gICAgaGVpZ2h0OiAxNjhweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luOiA0MHB4IGF1dG8gMCBhdXRvO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG4vKi50aWNrIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIzYVdSMGFEMGlOalFpSUdobGFXZG9kRDBpTmpRaUlIWnBaWGRDYjNnOUlqQWdNQ0EyTkNBMk5DSWdabWxzYkQwaWJtOXVaU0lnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JajRLUEhCaGRHZ2dabWxzYkMxeWRXeGxQU0psZG1WdWIyUmtJaUJqYkdsd0xYSjFiR1U5SW1WMlpXNXZaR1FpSUdROUlrMDFNaTQzTWpnMklERTJMall4TVRORE5UTXVOVE0wT1NBeE55NDBNall6SURVekxqVXpORGtnTVRndU56UTNOeUExTWk0M01qZzJJREU1TGpVMk1qZE1NalV1TWpBeE9DQTBOeTR6T0RnM1F6STBMak01TlRVZ05EZ3VNakF6T0NBeU15NHdPRGd6SURRNExqSXdNemdnTWpJdU1qZ3lNU0EwTnk0ek9EZzNUREV4TGpJM01UTWdNell1TWpVNE0wTXhNQzQwTmpVeElETTFMalEwTXpNZ01UQXVORFkxTVNBek5DNHhNakU1SURFeExqSTNNVE1nTXpNdU16QTJPVU14TWk0d056YzJJRE15TGpRNU1Ua2dNVE11TXpnME9DQXpNaTQwT1RFNUlERTBMakU1TVNBek15NHpNRFk1VERJekxqYzBNVGtnTkRJdU9UWXhOa3cwT1M0NE1Ea2dNVFl1TmpFeE0wTTFNQzQyTVRVeUlERTFMamM1TmpJZ05URXVPVEl5TkNBeE5TNDNPVFl5SURVeUxqY3lPRFlnTVRZdU5qRXhNMW9pSUdacGJHdzlJbmRvYVhSbElpOCtDand2YzNablBnbz1cIikgNTJweCA0OHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn0qLyJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KibpayKnetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'kp-kibpay-knet',
                templateUrl: `./kibpay-knet.component.html`,
                styleUrls: ['./kibpay-knet.component.scss']
            }]
    }], function () { return [{ type: _widget_kibpay_service__WEBPACK_IMPORTED_MODULE_2__["WidgetKibpayService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__["ToastrManager"] }, { type: _utilities_widget_kibpay_asset_service__WEBPACK_IMPORTED_MODULE_5__["WidgetKibpayAssetService"] }]; }, null); })();


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
/* harmony import */ var _backbase_foundation_ang_data_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @backbase/foundation-ang/data-http */ "kPaE");
/* harmony import */ var _kibpay_widget_kibpay_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @kibpay/widget-kibpay-data */ "dNJL");


const environment = {
    production: false,
    mockProviders: [Object(_backbase_foundation_ang_data_http__WEBPACK_IMPORTED_MODULE_0__["createMocksInterceptor"])(), _kibpay_widget_kibpay_data__WEBPACK_IMPORTED_MODULE_1__["KibpayDataMocksProvider"]],
    //mockProviders: [createMocksInterceptor()]
    assetsStaticItemName: 'kp-kibpay-ang'
};


/***/ }),

/***/ "DU8W":
/*!**************************************************************************************************************************************!*\
  !*** /Users/naineshrawani/Downloads/bb-cxs/statics/kibpay-project/libs/widget-kibpay/src/kibpay-payment/kibpay-payment.component.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: KibpayPaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KibpayPaymentComponent", function() { return KibpayPaymentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _utilities_widget_kibpay_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/widget-kibpay.constants */ "a5AY");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "2kYt");




function KibpayPaymentComponent_ng_container_3_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.paymentInfo.payeeName);
} }
function KibpayPaymentComponent_ng_container_3_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function KibpayPaymentComponent_ng_container_3_span_13_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.paymentInfo.currency);
} }
function KibpayPaymentComponent_ng_container_3_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, KibpayPaymentComponent_ng_container_3_span_13_span_2_Template, 2, 1, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r4.paymentInfo.amount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.paymentInfo.currency);
} }
function KibpayPaymentComponent_ng_container_3_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function KibpayPaymentComponent_ng_container_3_span_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.paymentInfo.description);
} }
function KibpayPaymentComponent_ng_container_3_span_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function KibpayPaymentComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Payment request");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Send payment to");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, KibpayPaymentComponent_ng_container_3_span_8_Template, 2, 1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, KibpayPaymentComponent_ng_container_3_span_9_Template, 2, 0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, KibpayPaymentComponent_ng_container_3_span_13_Template, 3, 2, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, KibpayPaymentComponent_ng_container_3_span_14_Template, 2, 0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, KibpayPaymentComponent_ng_container_3_span_18_Template, 2, 1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, KibpayPaymentComponent_ng_container_3_span_19_Template, 2, 0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.paymentInfo && ctx_r0.paymentInfo.payeeName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx_r0.paymentInfo && ctx_r0.paymentInfo.payeeName));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.paymentInfo && ctx_r0.paymentInfo.amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx_r0.paymentInfo && ctx_r0.paymentInfo.amount));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.paymentInfo && ctx_r0.paymentInfo.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx_r0.paymentInfo && ctx_r0.paymentInfo.description));
} }
function KibpayPaymentComponent_div_4_ng_container_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("A notification will be sent to ", ctx_r12.paymentInfo.payeeName, "");
} }
function KibpayPaymentComponent_div_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "You've rejected the payment request");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, KibpayPaymentComponent_div_4_ng_container_1_div_3_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.paymentInfo.payeeName);
} }
function KibpayPaymentComponent_div_4_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "The payment request has already been paid");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function KibpayPaymentComponent_div_4_ng_container_3_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Contact ", ctx_r13.paymentInfo.payeeName, " if you wish to receive a new payment request");
} }
function KibpayPaymentComponent_div_4_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "The payment request has been expired");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, KibpayPaymentComponent_div_4_ng_container_3_div_3_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.paymentInfo.payeeName);
} }
function KibpayPaymentComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, KibpayPaymentComponent_div_4_ng_container_1_Template, 4, 1, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, KibpayPaymentComponent_div_4_span_2_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, KibpayPaymentComponent_div_4_ng_container_3_Template, 4, 1, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.paymentInfo.state == ctx_r1.AppConstants.REJECTED);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.paymentInfo.state == ctx_r1.AppConstants.CREDITED);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.paymentInfo.state == ctx_r1.AppConstants.EXPIRED);
} }
class KibpayPaymentComponent {
    constructor() {
        this.paymentInfo = {};
        this.AppConstants = _utilities_widget_kibpay_constants__WEBPACK_IMPORTED_MODULE_1__["AppConstants"];
    }
    ngOnInit() { }
}
KibpayPaymentComponent.ɵfac = function KibpayPaymentComponent_Factory(t) { return new (t || KibpayPaymentComponent)(); };
KibpayPaymentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: KibpayPaymentComponent, selectors: [["kp-kibpay-payment"]], inputs: { paymentInfo: "paymentInfo" }, decls: 6, vars: 2, consts: [[1, "md-3", "sm-hide"], [1, "md-6"], [4, "ngIf"], ["class", "payment-rejected-container", 4, "ngIf"], [1, "header-text"], [1, "payment-item-container"], [1, "form-item-container"], [1, "form-item"], ["for", "SendPaymentTo"], ["class", "custom-input", 4, "ngIf"], ["for", "amount"], [1, "custom-input"], [1, "payment-rejected-container"], ["class", "error-text", 4, "ngIf"], [1, "error-text"], ["class", "error-msg", 4, "ngIf"], [1, "error-msg"]], template: function KibpayPaymentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, KibpayPaymentComponent_ng_container_3_Template, 20, 6, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, KibpayPaymentComponent_div_4_Template, 4, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.paymentInfo.state == ctx.AppConstants.ACTIVE);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.paymentInfo.state != ctx.AppConstants.ACTIVE);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KibpayPaymentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'kp-kibpay-payment',
                templateUrl: `./kibpay-payment.component.html`,
                styles: []
            }]
    }], function () { return []; }, { paymentInfo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "E+it":
/*!*****************************************************************************************************************************!*\
  !*** /Users/naineshrawani/Downloads/bb-cxs/statics/kibpay-project/libs/widget-kibpay-data/src/widget-kibpay-data.module.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: CONFIG_VALUE, createKibpayDataServiceDataHttpConfig, KibpayDataModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONFIG_VALUE", function() { return CONFIG_VALUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createKibpayDataServiceDataHttpConfig", function() { return createKibpayDataServiceDataHttpConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KibpayDataModule", function() { return KibpayDataModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _backbase_foundation_ang_data_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @backbase/foundation-ang/data-http */ "kPaE");
/* harmony import */ var _widget_kibpay_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./widget-kibpay-data.service */ "awWJ");






const CONFIG_VALUE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]("KibpayData Data Service :: Custom Http Config");
function createKibpayDataServiceDataHttpConfig(globalConfig, serviceConfig) {
    return Object(_backbase_foundation_ang_data_http__WEBPACK_IMPORTED_MODULE_2__["createServiceDataHttpConfig"])(globalConfig, serviceConfig ? serviceConfig : { "servicePath": "" });
}
class KibpayDataModule {
    static forRoot(config) {
        return {
            ngModule: KibpayDataModule,
            providers: [
                {
                    provide: CONFIG_VALUE,
                    useValue: config,
                },
            ]
        };
    }
}
KibpayDataModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: KibpayDataModule });
KibpayDataModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function KibpayDataModule_Factory(t) { return new (t || KibpayDataModule)(); }, providers: [_widget_kibpay_data_service__WEBPACK_IMPORTED_MODULE_3__["KibpayDataService"], {
            provide: _widget_kibpay_data_service__WEBPACK_IMPORTED_MODULE_3__["KIBPAY_DATA_CONFIG"],
            useFactory: createKibpayDataServiceDataHttpConfig,
            deps: [_backbase_foundation_ang_data_http__WEBPACK_IMPORTED_MODULE_2__["DATA_HTTP_CONFIG"], [new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"](), CONFIG_VALUE]],
        }], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _backbase_foundation_ang_data_http__WEBPACK_IMPORTED_MODULE_2__["DataHttpModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](KibpayDataModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _backbase_foundation_ang_data_http__WEBPACK_IMPORTED_MODULE_2__["DataHttpModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KibpayDataModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _backbase_foundation_ang_data_http__WEBPACK_IMPORTED_MODULE_2__["DataHttpModule"]
                ],
                providers: [_widget_kibpay_data_service__WEBPACK_IMPORTED_MODULE_3__["KibpayDataService"], {
                        provide: _widget_kibpay_data_service__WEBPACK_IMPORTED_MODULE_3__["KIBPAY_DATA_CONFIG"],
                        useFactory: createKibpayDataServiceDataHttpConfig,
                        deps: [_backbase_foundation_ang_data_http__WEBPACK_IMPORTED_MODULE_2__["DATA_HTTP_CONFIG"], [new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"](), CONFIG_VALUE]],
                    }]
            }]
    }], null, null); })();


/***/ }),

/***/ "FAt9":
/*!**********************************************************************************************************************************!*\
  !*** /Users/naineshrawani/Downloads/bb-cxs/statics/kibpay-project/libs/widget-kibpay/src/kibpay-error/kibpay-error.component.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: KibpayErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KibpayErrorComponent", function() { return KibpayErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _kibpay_logo_kibpay_logo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../kibpay-logo/kibpay-logo.component */ "08P1");



class KibpayErrorComponent {
    constructor() { }
}
KibpayErrorComponent.ɵfac = function KibpayErrorComponent_Factory(t) { return new (t || KibpayErrorComponent)(); };
KibpayErrorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: KibpayErrorComponent, selectors: [["kp-kibpay-error"]], decls: 11, vars: 0, consts: [[1, "payment-container"], [1, "main-container", "full-height"], [1, "md-3", "sm-hide"], [1, "md-6"], [1, "payment-rejected-container"], [1, "error-text"], [1, "error-msg", "m-t-16"]], template: function KibpayErrorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "kp-kibpay-logo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "A problem has occured");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Please try again");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_kibpay_logo_kibpay_logo_component__WEBPACK_IMPORTED_MODULE_1__["KibpayLogoComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KibpayErrorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'kp-kibpay-error',
                templateUrl: `./kibpay-error.component.html`,
                styles: []
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "J7NV":
/*!************************************************************************************************************************************!*\
  !*** /Users/naineshrawani/Downloads/bb-cxs/statics/kibpay-project/libs/widget-kibpay-data/src/widget-kibpay-data-mocks.service.ts ***!
  \************************************************************************************************************************************/
/*! exports provided: KibpayDataMocksProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KibpayDataMocksProvider", function() { return KibpayDataMocksProvider; });
/* harmony import */ var _backbase_foundation_ang_data_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @backbase/foundation-ang/data-http */ "kPaE");
/* harmony import */ var _widget_kibpay_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./widget-kibpay-data.service */ "awWJ");


const examples = [
    {
        "urlPattern": "/client-api/{version}/kibpay/public/{Id}",
        "method": "GET",
        "responses": [
            {
                "status": 200,
                "body": {
                    "type": "KIBPAY_REQUEST",
                    "state": "ACTIVE",
                    "language": "en",
                    "payeeName": "Sam Smith",
                    "amount": "10.042",
                    "currency": "KWD",
                    "description": "Dinner and cinema",
                    "publicAcceptId": "k021ymcb1111111",
                    "publicRejectId": "k021ymcb2222222"
                },
                "type": "PaymentResponse"
            }
        ]
    },
    {
        "urlPattern": "/client-api/{version}/kibpay/public/{Id}?action=seen",
        "method": "PATCH",
        "responses": [
            {
                "status": 200,
                "body": {
                    "type": "KIBPAY_REQUEST",
                    "state": "SEEN",
                    "language": "en"
                },
                "type": "PaymentAction"
            }
        ]
    },
    {
        "urlPattern": "/client-api/{version}/kibpay/public/{Id}?action=accept",
        "method": "PATCH",
        "responses": [
            {
                "status": 200,
                "body": {
                    "type": "KIBPAY_REQUEST",
                    "state": "KNET_CREATED",
                    "language": "en",
                    "redirectUrl": "https://kpay.com.kw/payment/link/path?paymentId=1234"
                },
                "type": "PaymentAction"
            }
        ]
    },
    {
        "urlPattern": "/client-api/{version}/kibpay/public/{Id}?action=reject",
        "method": "PATCH",
        "responses": [
            {
                "status": 200,
                "body": {
                    "type": "KIBPAY_REQUEST",
                    "state": "REJECTED",
                    "language": "en"
                },
                "type": "PaymentAction"
            }
        ]
    },
    {
        "urlPattern": "/client-api/{version}/kibpay/public/{Id}?action=success&encryptedKnetPayload={encryptedKnetPayload}",
        "method": "PATCH",
        "responses": [
            {
                "status": 200,
                "body": {
                    "type": "KIBPAY_REQUEST",
                    "state": "CREDITED",
                    "language": "en",
                    "payeeName": "Sam Smith",
                    "amount": "10.042",
                    "currency": "KWD",
                    "description": "Dinner and cinema"
                },
                "type": "PaymentResponse"
            }
        ]
    },
    {
        "urlPattern": "/client-api/{version}/kibpay/public/{Id}?action=failure&encryptedKnetPayload={encryptedKnetPayload}",
        "method": "PATCH",
        "responses": [
            {
                "status": 200,
                "body": {
                    "type": "KIBPAY_REQUEST",
                    "state": "KNET_FAILED",
                    "language": "en",
                    "errorText": "Problem occurred while processing direct debit.",
                    "payeeName": "Sam Smith",
                    "amount": "10.042",
                    "currency": "KWD",
                    "description": "Dinner and cinema"
                },
                "type": "PaymentResponse"
            }
        ]
    }
];
const KibpayDataMocksProvider = Object(_backbase_foundation_ang_data_http__WEBPACK_IMPORTED_MODULE_0__["createMocks"])(examples, _widget_kibpay_data_service__WEBPACK_IMPORTED_MODULE_1__["KIBPAY_DATA_CONFIG"]);


/***/ }),

/***/ "SdEz":
/*!********************************************************************************************************************!*\
  !*** /Users/naineshrawani/Downloads/bb-cxs/statics/kibpay-project/libs/widget-kibpay/src/widget-kibpay.service.ts ***!
  \********************************************************************************************************************/
/*! exports provided: WidgetKibpayService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetKibpayService", function() { return WidgetKibpayService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "+kfY");
/*import { Injectable } from '@angular/core';
import { KibpayDataService, PaymentResponse, PaymentAction } from '@kibpay/widget-kibpay-data';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { HttpResponse } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class WidgetKibpayService {
    constructor(private readonly kibpayDataService : KibpayDataService) { }

    getPaymentInfo(publicIdPay: string) {
        return this.kibpayDataService.getPaymentInfo(publicIdPay, {}).pipe(
            switchMap((response: HttpResponse<PaymentResponse>): Observable<PaymentResponse | undefined> => {
                return response.body? of(response.body) : of({} as PaymentResponse);
            })
        );
    }

    processPaymentAction(params: any) {
        return this.kibpayDataService.processPaymentAction(params.Id, { action: params.action }).pipe(
            switchMap((response: HttpResponse<PaymentAction>): Observable<PaymentAction | undefined> => {
                return response.body? of(response.body) : of({} as PaymentAction);
            })
        );
    }

    getPaymentResult(params: any) {
        return this.kibpayDataService.getPaymentResult(params.Id, { action: params.action, encryptedKnetPayload: params.trandata }).pipe(
            switchMap((response: HttpResponse<PaymentResponse>): Observable<PaymentResponse | undefined> => {
                return response.body? of(response.body) : of({} as PaymentResponse);
            })
        );
    }
}*/



class WidgetKibpayService {
    constructor() { }
    getPaymentInfo(publicIdPay) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({
            "type": "KIBPAY_REQUEST",
            "state": "ACTIVE",
            "language": "en",
            "payeeName": "Sam Smith",
            "amount": "10.042",
            "currency": "KWD",
            "description": "Dinner and cinema",
            "publicAcceptId": "k021ymcb1111111",
            "publicRejectId": "k021ymcb2222222"
        });
    }
    processPaymentAction(paramsObj) {
        if (paramsObj.action == "seen") {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({
                "type": "KIBPAY_REQUEST",
                "state": "SEEN",
                "language": "en"
            });
        }
        else if (paramsObj.action == "accept") {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({
                "type": "KIBPAY_REQUEST",
                "state": "KNET_CREATED",
                "language": "en",
                "redirectUrl": "https://kpay.com.kw/payment/link/path?paymentId=1234"
            });
        }
        else if (paramsObj.action == "reject") {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({
                "type": "KIBPAY_REQUEST",
                "state": "REJECTED",
                "language": "en"
            });
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({});
        }
    }
    getPaymentResult(paramsObj) {
        if (paramsObj.action == "success") {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({
                "type": "KIBPAY_REQUEST",
                "state": "CREDITED",
                "language": "en",
                "payeeName": "Sam Smith",
                "amount": "10.042",
                "currency": "KWD",
                "description": "Dinner and cinema"
            });
        }
        else if (paramsObj.action == "failure") {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({
                "type": "KIBPAY_REQUEST",
                "state": "KNET_FAILED",
                "language": "en",
                "errorText": "Problem occurred while processing direct debit.",
                "payeeName": "Sam Smith",
                "amount": "10.042",
                "currency": "KWD",
                "description": "Dinner and cinema"
            });
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({});
        }
    }
}
WidgetKibpayService.ɵfac = function WidgetKibpayService_Factory(t) { return new (t || WidgetKibpayService)(); };
WidgetKibpayService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WidgetKibpayService, factory: WidgetKibpayService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WidgetKibpayService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _backbase_foundation_ang_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @backbase/foundation-ang/core */ "4HEl");



class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["kp-kibpay"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "bb-root");
    } }, directives: [_backbase_foundation_ang_core__WEBPACK_IMPORTED_MODULE_1__["ɵbb"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'kp-kibpay',
                template: '<bb-root></bb-root>'
            }]
    }], null, null); })();


/***/ }),

/***/ "Syyj":
/*!*********************************************************************************************************************************!*\
  !*** /Users/naineshrawani/Downloads/bb-cxs/statics/kibpay-project/libs/widget-kibpay-data/src/widget-kibpay-data.interfaces.ts ***!
  \*********************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "UjU1":
/*!************************************************************************************************************************************!*\
  !*** /Users/naineshrawani/Downloads/bb-cxs/statics/kibpay-project/libs/widget-kibpay/src/utilities/widget-kibpay-asset.service.ts ***!
  \************************************************************************************************************************************/
/*! exports provided: WidgetKibpayAssetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetKibpayAssetService", function() { return WidgetKibpayAssetService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _backbase_foundation_ang_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @backbase/foundation-ang/core */ "4HEl");



class WidgetKibpayAssetService {
    constructor(assetsService) {
        this.assetsService = assetsService;
        this.assetsResolver = this.assetsService.createAssetsResolver({
            widgetName: 'kp-widget-kibpay-ang',
            getURIFromAssetID: assetId => assetId
        });
    }
    getAsset(assetId) {
        return this.assetsResolver(assetId);
    }
}
WidgetKibpayAssetService.ɵfac = function WidgetKibpayAssetService_Factory(t) { return new (t || WidgetKibpayAssetService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_backbase_foundation_ang_core__WEBPACK_IMPORTED_MODULE_1__["AssetsService"])); };
WidgetKibpayAssetService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WidgetKibpayAssetService, factory: WidgetKibpayAssetService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WidgetKibpayAssetService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _backbase_foundation_ang_core__WEBPACK_IMPORTED_MODULE_1__["AssetsService"] }]; }, null); })();


/***/ }),

/***/ "UzyK":
/*!**********************************************************************************************************************!*\
  !*** /Users/naineshrawani/Downloads/bb-cxs/statics/kibpay-project/libs/widget-kibpay/src/widget-kibpay.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: WidgetKibpayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetKibpayComponent", function() { return WidgetKibpayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "sEIs");



class WidgetKibpayComponent {
    constructor() { }
}
WidgetKibpayComponent.ɵfac = function WidgetKibpayComponent_Factory(t) { return new (t || WidgetKibpayComponent)(); };
WidgetKibpayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WidgetKibpayComponent, selectors: [["kp-widget-kibpay"]], decls: 1, vars: 0, template: function WidgetKibpayComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WidgetKibpayComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'kp-widget-kibpay',
                templateUrl: `./widget-kibpay.component.html`,
                styles: []
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "e4iD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "vobO");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _backbase_foundation_ang_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @backbase/foundation-ang/core */ "4HEl");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "3oUN");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/effects */ "xeA8");
/* harmony import */ var _backbase_universal_ang_containers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @backbase/universal-ang/containers */ "uUBU");
/* harmony import */ var _backbase_universal_ang_layouts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @backbase/universal-ang/layouts */ "D/4l");
/* harmony import */ var _backbase_universal_ang_content__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @backbase/universal-ang/content */ "OHTH");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng6-toastr-notifications */ "81g+");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ "5lCh");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _kibpay_widget_kibpay__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @kibpay/widget-kibpay */ "2yaG");
/* harmony import */ var _backbase_foundation_ang_web_sdk__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @backbase/foundation-ang/web-sdk */ "xO6D");























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        ..._environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].mockProviders || [],
        { provide: _angular_common__WEBPACK_IMPORTED_MODULE_14__["APP_BASE_HREF"], useValue: '/kibpay' }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreModule"].forRoot({}),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__["EffectsModule"].forRoot([]),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _backbase_foundation_ang_core__WEBPACK_IMPORTED_MODULE_5__["BackbaseCoreModule"].forRoot({
                assets: {
                    assetsStaticItemName: _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].assetsStaticItemName,
                }
            }),
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([], { initialNavigation: false, useHash: false }),
            _backbase_universal_ang_containers__WEBPACK_IMPORTED_MODULE_9__["ContainersModule"],
            _backbase_universal_ang_layouts__WEBPACK_IMPORTED_MODULE_10__["LayoutContainerModule"],
            _backbase_universal_ang_content__WEBPACK_IMPORTED_MODULE_11__["ContentWidgetModule"],
            ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_12__["ToastrModule"].forRoot(),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"],
            _kibpay_widget_kibpay__WEBPACK_IMPORTED_MODULE_15__["WidgetKibpayModule"],
            _backbase_foundation_ang_web_sdk__WEBPACK_IMPORTED_MODULE_16__["WebSdkApiModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreRootModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__["EffectsRootModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _backbase_foundation_ang_core__WEBPACK_IMPORTED_MODULE_5__["BackbaseCoreModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _backbase_universal_ang_containers__WEBPACK_IMPORTED_MODULE_9__["ContainersModule"],
        _backbase_universal_ang_layouts__WEBPACK_IMPORTED_MODULE_10__["LayoutContainerModule"],
        _backbase_universal_ang_content__WEBPACK_IMPORTED_MODULE_11__["ContentWidgetModule"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_12__["ToastrModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"],
        _kibpay_widget_kibpay__WEBPACK_IMPORTED_MODULE_15__["WidgetKibpayModule"],
        _backbase_foundation_ang_web_sdk__WEBPACK_IMPORTED_MODULE_16__["WebSdkApiModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreModule"].forRoot({}),
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__["EffectsModule"].forRoot([]),
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _backbase_foundation_ang_core__WEBPACK_IMPORTED_MODULE_5__["BackbaseCoreModule"].forRoot({
                        assets: {
                            assetsStaticItemName: _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].assetsStaticItemName,
                        }
                    }),
                    _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([], { initialNavigation: false, useHash: false }),
                    _backbase_universal_ang_containers__WEBPACK_IMPORTED_MODULE_9__["ContainersModule"],
                    _backbase_universal_ang_layouts__WEBPACK_IMPORTED_MODULE_10__["LayoutContainerModule"],
                    _backbase_universal_ang_content__WEBPACK_IMPORTED_MODULE_11__["ContentWidgetModule"],
                    ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_12__["ToastrModule"].forRoot(),
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"],
                    _kibpay_widget_kibpay__WEBPACK_IMPORTED_MODULE_15__["WidgetKibpayModule"],
                    _backbase_foundation_ang_web_sdk__WEBPACK_IMPORTED_MODULE_16__["WebSdkApiModule"]
                ],
                providers: [
                    ..._environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].mockProviders || [],
                    { provide: _angular_common__WEBPACK_IMPORTED_MODULE_14__["APP_BASE_HREF"], useValue: '/kibpay' }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "a5AY":
/*!********************************************************************************************************************************!*\
  !*** /Users/naineshrawani/Downloads/bb-cxs/statics/kibpay-project/libs/widget-kibpay/src/utilities/widget-kibpay.constants.ts ***!
  \********************************************************************************************************************************/
/*! exports provided: AppConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConstants", function() { return AppConstants; });
class AppConstants {
    static get ENVIRONMENT_URL() { return '/client-api/v1/kibpay/public/{publicIdPay}'; }
    static get ACTIVE() { return 'ACTIVE'; }
    static get KNET_CREATED() { return 'KNET_CREATED'; }
    static get REJECTED() { return 'REJECTED'; }
    static get CREDITED() { return 'CREDITED'; }
    static get EXPIRED() { return 'EXPIRED'; }
    static get KNET_FAILED() { return 'KNET_FAILED'; }
}


/***/ }),

/***/ "awWJ":
/*!******************************************************************************************************************************!*\
  !*** /Users/naineshrawani/Downloads/bb-cxs/statics/kibpay-project/libs/widget-kibpay-data/src/widget-kibpay-data.service.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: KIBPAY_DATA_CONFIG, KibpayDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KIBPAY_DATA_CONFIG", function() { return KIBPAY_DATA_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KibpayDataService", function() { return KibpayDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "vobO");
/* harmony import */ var _backbase_foundation_ang_data_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @backbase/foundation-ang/data-http */ "kPaE");






const version = 'v1';
const KIBPAY_DATA_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]("KibpayData Data Service :: HTTP Config");
class KibpayDataService {
    constructor(http, config, toHttpParams) {
        this.http = http;
        this.config = config;
        this.toHttpParams = toHttpParams;
    }
    getPaymentInfo(publicIdPay, params, headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({})) {
        const uri = `${this.config.apiRoot}${this.config.servicePath}/client-api/${version}/kibpay/public/${publicIdPay}`;
        return this.http.request('get', uri, {
            params: this.toHttpParams(params || {}),
            headers,
            observe: 'response',
            responseType: 'json',
            withCredentials: false,
        });
    }
    processPaymentAction(Id, params, headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({})) {
        const uri = `${this.config.apiRoot}${this.config.servicePath}/client-api/${version}/kibpay/public/${Id}?action=${params.action}`;
        return this.http.request('patch', uri, {
            params: this.toHttpParams(params || {}),
            headers,
            observe: 'response',
            responseType: 'json',
            withCredentials: false,
        });
    }
    getPaymentResult(Id, params, headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({})) {
        const uri = `${this.config.apiRoot}${this.config.servicePath}/client-api/${version}/kibpay/public/${Id}?action=${params.action}&encryptedKnetPayload=${params.encryptedKnetPayload}`;
        return this.http.request('patch', uri, {
            params: this.toHttpParams(params || {}),
            headers,
            observe: 'response',
            responseType: 'json',
            withCredentials: false,
        });
    }
}
KibpayDataService.ɵfac = function KibpayDataService_Factory(t) { return new (t || KibpayDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](KIBPAY_DATA_CONFIG), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_backbase_foundation_ang_data_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_PARAMS_FACTORY"])); };
KibpayDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: KibpayDataService, factory: KibpayDataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KibpayDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [KIBPAY_DATA_CONFIG]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_backbase_foundation_ang_data_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_PARAMS_FACTORY"]]
            }] }]; }, null); })();


/***/ }),

/***/ "dNJL":
/*!**********************************************************************************************************!*\
  !*** /Users/naineshrawani/Downloads/bb-cxs/statics/kibpay-project/libs/widget-kibpay-data/public_api.ts ***!
  \**********************************************************************************************************/
/*! exports provided: KibpayDataModule, KibpayDataService, KibpayDataMocksProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_widget_kibpay_data_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/widget-kibpay-data.module */ "E+it");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KibpayDataModule", function() { return _src_widget_kibpay_data_module__WEBPACK_IMPORTED_MODULE_0__["KibpayDataModule"]; });

/* harmony import */ var _src_widget_kibpay_data_interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/widget-kibpay-data.interfaces */ "Syyj");
/* empty/unused harmony star reexport *//* harmony import */ var _src_widget_kibpay_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/widget-kibpay-data.service */ "awWJ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KibpayDataService", function() { return _src_widget_kibpay_data_service__WEBPACK_IMPORTED_MODULE_2__["KibpayDataService"]; });

/* harmony import */ var _src_widget_kibpay_data_mocks_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/widget-kibpay-data-mocks.service */ "J7NV");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KibpayDataMocksProvider", function() { return _src_widget_kibpay_data_mocks_service__WEBPACK_IMPORTED_MODULE_3__["KibpayDataMocksProvider"]; });







/***/ }),

/***/ "mdfc":
/*!************************************************************************************************************************************!*\
  !*** /Users/naineshrawani/Downloads/bb-cxs/statics/kibpay-project/libs/widget-kibpay/src/kibpay-loader/kibpay-loader.component.ts ***!
  \************************************************************************************************************************************/
/*! exports provided: KibpayLoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KibpayLoaderComponent", function() { return KibpayLoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");


class KibpayLoaderComponent {
    constructor() { }
}
KibpayLoaderComponent.ɵfac = function KibpayLoaderComponent_Factory(t) { return new (t || KibpayLoaderComponent)(); };
KibpayLoaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: KibpayLoaderComponent, selectors: [["kp-kibpay-loader"]], decls: 2, vars: 0, consts: [[1, "loader-container"], [1, "loader"]], template: function KibpayLoaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".loader-container[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  margin-top: -50px;\n  margin-left: -15px;\n  border: 5px solid #f3f3f3;\n  border-radius: 50%;\n  border-top: 5px solid #004F9D;\n  width: 50px;\n  height: 50px;\n  -webkit-animation: spin 1s linear infinite;\n  animation: spin 1s linear infinite;\n}\n@media only screen and (min-width: 0px) and (max-width: 479px) {\n  .loader-container[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%] {\n    margin-left: -25px;\n  }\n}\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n  }\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYnMvd2lkZ2V0LWtpYnBheS9zcmMva2licGF5LWxvYWRlci9raWJwYXktbG9hZGVyLmNvbXBvbmVudC5zY3NzIiwiYXBwcy9raWJwYXkvc3JjL2Fzc2V0cy9zY3NzLzEtaGVscGVycy9fbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUk7RUFDSSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwwQ0FBQTtFQUdBLGtDQUFBO0FBSFI7QUNGSTtFRFRBO0lBaUJRLGtCQUFBO0VBRlY7QUFDRjtBQUtJO0VBQ0k7SUFBSywrQkFBQTtFQUZYO0VBR007SUFBTyxpQ0FBQTtFQUFiO0FBQ0Y7QUFFSTtFQUNJO0lBQUssdUJBQUE7RUFDWDtFQUFNO0lBQU8seUJBQUE7RUFHYjtBQUNGIiwiZmlsZSI6ImxpYnMvd2lkZ2V0LWtpYnBheS9zcmMva2licGF5LWxvYWRlci9raWJwYXktbG9hZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vLi4vYXBwcy9raWJwYXkvc3JjL2Fzc2V0cy9zY3NzLzEtaGVscGVycy92YXJpYWJsZXMnO1xuQGltcG9ydCAnLi4vLi4vLi4vLi4vYXBwcy9raWJwYXkvc3JjL2Fzc2V0cy9zY3NzLzEtaGVscGVycy9taXhpbnMnO1xuXG4ubG9hZGVyLWNvbnRhaW5lciB7XG4gICAgLmxvYWRlciB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgbWFyZ2luLXRvcDogLTUwcHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMTVweDtcbiAgICAgICAgYm9yZGVyOiA1cHggc29saWQgI2YzZjNmMztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBib3JkZXItdG9wOiA1cHggc29saWQgJGNvbG9yLXRoZW1lLWJsdWU7XG4gICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcbiAgICAgICAgLW1vei1hbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xuICAgICAgICAtby1hbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xuICAgICAgICBhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xuXG4gICAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQoeHhzKSB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogLTI1cHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgQC13ZWJraXQta2V5ZnJhbWVzIHNwaW4ge1xuICAgICAgICAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cbiAgICAgICAgMTAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxuICAgIH1cbiAgICBcbiAgICBAa2V5ZnJhbWVzIHNwaW4ge1xuICAgICAgICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XG4gICAgICAgIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XG4gICAgfVxufSIsIiRzY3JlZW4teHhzLW1pbjogMHB4O1xuJHNjcmVlbi14cy1taW46IDQ4MHB4O1xuJHNjcmVlbi1zbS1taW46IDY0MHB4O1xuJHNjcmVlbi1tZC1taW46IDc2OHB4O1xuJHNjcmVlbi1sZy1taW46IDEwMjRweDtcblxuJHNjcmVlbi14eHMtbWF4OiAkc2NyZWVuLXhzLW1pbiAtIDE7XG4kc2NyZWVuLXhzLW1heDogJHNjcmVlbi1zbS1taW4gLSAxO1xuJHNjcmVlbi1zbS1tYXg6ICRzY3JlZW4tbWQtbWluIC0gMTtcbiRzY3JlZW4tbWQtbWF4OiAkc2NyZWVuLWxnLW1pbiAtIDE7XG5cbkBtaXhpbiBicmVha3BvaW50KCRwb2ludCwgJG9yaWVudGF0aW9uOiB1bmRlZmluZWQpIHtcbiAgQGlmICRwb2ludCA9PSB4eHMge1xuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHNjcmVlbi14eHMtbWluKSBhbmQgKG1heC13aWR0aDogJHNjcmVlbi14eHMtbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJHBvaW50ID09IHhzIHtcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRzY3JlZW4teHMtbWluKSBhbmQgKG1heC13aWR0aDogJHNjcmVlbi14cy1tYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkcG9pbnQgPT0gc20ge1xuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHNjcmVlbi1zbS1taW4pIGFuZCAobWF4LXdpZHRoOiAkc2NyZWVuLXNtLW1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG4gIEBlbHNlIGlmICRwb2ludCA9PSBtZCB7XG4gICAgQGlmICRvcmllbnRhdGlvbiB7XG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRzY3JlZW4tbWQtbWluKSBhbmQgKG1heC13aWR0aDogJHNjcmVlbi1tZC1tYXgpIGFuZCAob3JpZW50YXRpb24gOiAkb3JpZW50YXRpb24pIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgICB9XG4gICAgfSBAZWxzZSB7XG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRzY3JlZW4tbWQtbWluKSBhbmQgKG1heC13aWR0aDogJHNjcmVlbi1tZC1tYXgpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgICB9XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRzY3JlZW4tbGctbWluKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KibpayLoaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'kp-kibpay-loader',
                templateUrl: `./kibpay-loader.component.html`,
                styleUrls: [`./kibpay-loader.component.scss`]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "rdZ4":
/*!*******************************************************************************************************************!*\
  !*** /Users/naineshrawani/Downloads/bb-cxs/statics/kibpay-project/libs/widget-kibpay/src/widget-kibpay.module.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: WidgetKibpayModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetKibpayModule", function() { return WidgetKibpayModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _backbase_foundation_ang_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @backbase/foundation-ang/core */ "4HEl");
/* harmony import */ var _widget_kibpay_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./widget-kibpay.service */ "SdEz");
/* harmony import */ var _utilities_widget_kibpay_asset_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utilities/widget-kibpay-asset.service */ "UjU1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "nIj0");
/* harmony import */ var _kibpay_widget_kibpay_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @kibpay/widget-kibpay-data */ "dNJL");
/* harmony import */ var _kibpay_logo_kibpay_logo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./kibpay-logo/kibpay-logo.component */ "08P1");
/* harmony import */ var _kibpay_loader_kibpay_loader_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./kibpay-loader/kibpay-loader.component */ "mdfc");
/* harmony import */ var _kibpay_error_kibpay_error_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./kibpay-error/kibpay-error.component */ "FAt9");
/* harmony import */ var _widget_kibpay_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./widget-kibpay.component */ "UzyK");
/* harmony import */ var _kibpay_payer_kibpay_payer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./kibpay-payer/kibpay-payer.component */ "vvNh");
/* harmony import */ var _kibpay_payment_kibpay_payment_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./kibpay-payment/kibpay-payment.component */ "DU8W");
/* harmony import */ var _kibpay_knet_kibpay_knet_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./kibpay-knet/kibpay-knet.component */ "9E+j");
/* harmony import */ var _widget_kibpay_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./widget-kibpay-routing.module */ "t5G9");
/* harmony import */ var _widget_kibpay_data_src_widget_kibpay_data_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../widget-kibpay-data/src/widget-kibpay-data.module */ "E+it");


















class WidgetKibpayModule {
}
WidgetKibpayModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: WidgetKibpayModule });
WidgetKibpayModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function WidgetKibpayModule_Factory(t) { return new (t || WidgetKibpayModule)(); }, providers: [
        _widget_kibpay_service__WEBPACK_IMPORTED_MODULE_3__["WidgetKibpayService"],
        _utilities_widget_kibpay_asset_service__WEBPACK_IMPORTED_MODULE_4__["WidgetKibpayAssetService"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _widget_kibpay_routing_module__WEBPACK_IMPORTED_MODULE_14__["KibpayAppRoutingModule"],
            _backbase_foundation_ang_core__WEBPACK_IMPORTED_MODULE_2__["BackbaseCoreModule"].withConfig({
                classMap: { WidgetKibpayComponent: _widget_kibpay_component__WEBPACK_IMPORTED_MODULE_10__["WidgetKibpayComponent"] }
            }),
            _kibpay_widget_kibpay_data__WEBPACK_IMPORTED_MODULE_6__["KibpayDataModule"].forRoot({
                apiRoot: '/api',
                servicePath: '/dis-kibpay-service',
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](WidgetKibpayModule, { declarations: [_kibpay_logo_kibpay_logo_component__WEBPACK_IMPORTED_MODULE_7__["KibpayLogoComponent"],
        _kibpay_loader_kibpay_loader_component__WEBPACK_IMPORTED_MODULE_8__["KibpayLoaderComponent"],
        _kibpay_error_kibpay_error_component__WEBPACK_IMPORTED_MODULE_9__["KibpayErrorComponent"],
        _widget_kibpay_component__WEBPACK_IMPORTED_MODULE_10__["WidgetKibpayComponent"],
        _kibpay_payer_kibpay_payer_component__WEBPACK_IMPORTED_MODULE_11__["KibpayPayerComponent"],
        _kibpay_payment_kibpay_payment_component__WEBPACK_IMPORTED_MODULE_12__["KibpayPaymentComponent"],
        _kibpay_knet_kibpay_knet_component__WEBPACK_IMPORTED_MODULE_13__["KibpayKnetComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
        _widget_kibpay_routing_module__WEBPACK_IMPORTED_MODULE_14__["KibpayAppRoutingModule"], _backbase_foundation_ang_core__WEBPACK_IMPORTED_MODULE_2__["BackbaseCoreModule"], _widget_kibpay_data_src_widget_kibpay_data_module__WEBPACK_IMPORTED_MODULE_15__["KibpayDataModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WidgetKibpayModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _kibpay_logo_kibpay_logo_component__WEBPACK_IMPORTED_MODULE_7__["KibpayLogoComponent"],
                    _kibpay_loader_kibpay_loader_component__WEBPACK_IMPORTED_MODULE_8__["KibpayLoaderComponent"],
                    _kibpay_error_kibpay_error_component__WEBPACK_IMPORTED_MODULE_9__["KibpayErrorComponent"],
                    _widget_kibpay_component__WEBPACK_IMPORTED_MODULE_10__["WidgetKibpayComponent"],
                    _kibpay_payer_kibpay_payer_component__WEBPACK_IMPORTED_MODULE_11__["KibpayPayerComponent"],
                    _kibpay_payment_kibpay_payment_component__WEBPACK_IMPORTED_MODULE_12__["KibpayPaymentComponent"],
                    _kibpay_knet_kibpay_knet_component__WEBPACK_IMPORTED_MODULE_13__["KibpayKnetComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                    _widget_kibpay_routing_module__WEBPACK_IMPORTED_MODULE_14__["KibpayAppRoutingModule"],
                    _backbase_foundation_ang_core__WEBPACK_IMPORTED_MODULE_2__["BackbaseCoreModule"].withConfig({
                        classMap: { WidgetKibpayComponent: _widget_kibpay_component__WEBPACK_IMPORTED_MODULE_10__["WidgetKibpayComponent"] }
                    }),
                    _kibpay_widget_kibpay_data__WEBPACK_IMPORTED_MODULE_6__["KibpayDataModule"].forRoot({
                        apiRoot: '/api',
                        servicePath: '/dis-kibpay-service',
                    })
                ],
                providers: [
                    _widget_kibpay_service__WEBPACK_IMPORTED_MODULE_3__["WidgetKibpayService"],
                    _utilities_widget_kibpay_asset_service__WEBPACK_IMPORTED_MODULE_4__["WidgetKibpayAssetService"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "rrh4":
/*!**********************************************************************************************************************************!*\
  !*** /Users/naineshrawani/Downloads/bb-cxs/statics/kibpay-project/libs/widget-kibpay/src/utilities/widget-kibpay-seo.service.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: WidgetKibpaySeoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetKibpaySeoService", function() { return WidgetKibpaySeoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "e4iD");



class WidgetKibpaySeoService {
    constructor(meta) {
        this.meta = meta;
    }
    updateMetaTags(metaTags) {
        metaTags.forEach(m => this.meta.addTag(m));
    }
}
WidgetKibpaySeoService.ɵfac = function WidgetKibpaySeoService_Factory(t) { return new (t || WidgetKibpaySeoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Meta"])); };
WidgetKibpaySeoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WidgetKibpaySeoService, factory: WidgetKibpaySeoService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WidgetKibpaySeoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Meta"] }]; }, null); })();


/***/ }),

/***/ "t5G9":
/*!***************************************************************************************************************************!*\
  !*** /Users/naineshrawani/Downloads/bb-cxs/statics/kibpay-project/libs/widget-kibpay/src/widget-kibpay-routing.module.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: KibpayAppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KibpayAppRoutingModule", function() { return KibpayAppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _kibpay_payer_kibpay_payer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./kibpay-payer/kibpay-payer.component */ "vvNh");
/* harmony import */ var _kibpay_error_kibpay_error_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./kibpay-error/kibpay-error.component */ "FAt9");
/* harmony import */ var _kibpay_knet_kibpay_knet_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./kibpay-knet/kibpay-knet.component */ "9E+j");







const routes = [
    { path: 'pay', component: _kibpay_payer_kibpay_payer_component__WEBPACK_IMPORTED_MODULE_2__["KibpayPayerComponent"],
        data: {
            seo: {
                metaTags: [
                    { property: 'og:site_name', content: 'YouTube' },
                    { property: 'og:url', content: 'https://85dcd477f9e1.ngrok.io/kibpay/pay?Id=12345' },
                    { property: 'og:title', content: 'Unit Testing Angular with Jasmine &amp; Karma  tutorial | Chapter 1 - Introduction' },
                    { property: 'og:image', content: 'https://i.ytimg.com/vi/wrLicPUsfTc/hqdefault.jpg' },
                    { property: 'og:image:width', content: '300' },
                    { property: 'og:image:height', content: '300' },
                    { proprety: 'og:description', content: 'This video is introduction to Unit testing the Angular application using Jasmine and Karma.It explains:1. What is Jasmine?2. What is Karma?Tutorial Angular U...' },
                ]
            }
        }
    },
    { path: 'direct', component: _kibpay_payer_kibpay_payer_component__WEBPACK_IMPORTED_MODULE_2__["KibpayPayerComponent"] },
    { path: 'success', component: _kibpay_knet_kibpay_knet_component__WEBPACK_IMPORTED_MODULE_4__["KibpayKnetComponent"] },
    { path: 'failure', component: _kibpay_knet_kibpay_knet_component__WEBPACK_IMPORTED_MODULE_4__["KibpayKnetComponent"] },
    { path: 'error', component: _kibpay_error_kibpay_error_component__WEBPACK_IMPORTED_MODULE_3__["KibpayErrorComponent"] },
    { path: '**', redirectTo: 'error', pathMatch: 'full' }
];
class KibpayAppRoutingModule {
}
KibpayAppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: KibpayAppRoutingModule });
KibpayAppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function KibpayAppRoutingModule_Factory(t) { return new (t || KibpayAppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](KibpayAppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KibpayAppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vvNh":
/*!**********************************************************************************************************************************!*\
  !*** /Users/naineshrawani/Downloads/bb-cxs/statics/kibpay-project/libs/widget-kibpay/src/kibpay-payer/kibpay-payer.component.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: KibpayPayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KibpayPayerComponent", function() { return KibpayPayerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _utilities_widget_kibpay_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/widget-kibpay.constants */ "a5AY");
/* harmony import */ var _widget_kibpay_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../widget-kibpay.service */ "SdEz");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng6-toastr-notifications */ "81g+");
/* harmony import */ var _utilities_widget_kibpay_seo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utilities/widget-kibpay-seo.service */ "rrh4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "e4iD");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _kibpay_loader_kibpay_loader_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../kibpay-loader/kibpay-loader.component */ "mdfc");
/* harmony import */ var _kibpay_logo_kibpay_logo_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../kibpay-logo/kibpay-logo.component */ "08P1");
/* harmony import */ var _kibpay_payment_kibpay_payment_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../kibpay-payment/kibpay-payment.component */ "DU8W");












function KibpayPayerComponent_kp_kibpay_loader_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "kp-kibpay-loader");
} }
const _c0 = function (a0) { return { "full-height": a0 }; };
function KibpayPayerComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "kp-kibpay-logo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "kp-kibpay-payment", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, !ctx_r1.showSubmit));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("paymentInfo", ctx_r1.paymentInfo);
} }
function KibpayPayerComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KibpayPayerComponent_div_3_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.acceptPayment(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Continue to payment ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KibpayPayerComponent_div_3_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.rejectPayment(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Reject payment request ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r2.paymentInfo) === "{}");
} }
class KibpayPayerComponent {
    constructor(widgetKibpayService, cdref, router, route, toastr, seoService, metaTagService) {
        this.widgetKibpayService = widgetKibpayService;
        this.cdref = cdref;
        this.router = router;
        this.route = route;
        this.toastr = toastr;
        this.seoService = seoService;
        this.metaTagService = metaTagService;
        this.AppConstants = _utilities_widget_kibpay_constants__WEBPACK_IMPORTED_MODULE_1__["AppConstants"];
        this.paymentInfo = {};
        this.isLoaded = false;
        this.isDirectPayment = false;
        this.showSubmit = false;
    }
    ngOnInit() {
        this.route.data.subscribe(data => {
            let seoData = data['seo'];
            this.seoService.updateMetaTags(seoData['metaTags']);
        });
        this.paymentInfo = {};
        this.isLoaded = false;
        this.showSubmit = false;
        this.checkParams();
    }
    checkParams() {
        let publicIdPay = "";
        let tempUrl = this.router.url;
        if (this.router.url.includes("?")) {
            tempUrl = this.router.url.split("?")[0];
        }
        if (tempUrl.includes("pay") || tempUrl.includes("direct")) {
            this.route.queryParams.subscribe(params => {
                if (params.Id) {
                    publicIdPay = params.Id;
                }
            });
            if (tempUrl.includes("direct")) {
                this.isDirectPayment = true;
            }
        }
        this.getPaymentInfo(publicIdPay);
    }
    getPaymentInfo(publicIdPay) {
        if (publicIdPay) {
            this.widgetKibpayService.getPaymentInfo(publicIdPay)
                .subscribe(response => {
                this.paymentInfo = response;
                this.processSeenPayment();
            }, error => {
                this.toastr.errorToastr((error && error.message) ? error.message : "Error");
                this.isLoaded = true;
                this.cdref.detectChanges();
            });
        }
        else {
            this.router.navigateByUrl("/error");
        }
    }
    processSeenPayment() {
        let queryParams = {
            Id: this.paymentInfo.publicAcceptId,
            action: "seen"
        };
        this.widgetKibpayService.processPaymentAction(queryParams)
            .subscribe(response => {
            if (this.isDirectPayment) {
                this.acceptPayment();
            }
            else {
                this.isLoaded = true;
                this.showSubmit = true;
                this.cdref.detectChanges();
            }
        }, error => {
            this.toastr.errorToastr((error && error.message) ? error.message : "Error");
            this.isLoaded = true;
            this.cdref.detectChanges();
        });
    }
    acceptPayment() {
        this.isLoaded = false;
        let queryParams = {
            Id: this.paymentInfo.publicAcceptId,
            action: "accept"
        };
        this.widgetKibpayService.processPaymentAction(queryParams)
            .subscribe(response => {
            if (response === null || response === void 0 ? void 0 : response.redirectUrl) {
                window.open(response.redirectUrl, "_self");
            }
            else {
                this.toastr.errorToastr("Some error occured");
                this.isLoaded = true;
                this.cdref.detectChanges();
            }
        }, error => {
            this.toastr.errorToastr((error && error.message) ? error.message : "Error");
            this.isLoaded = true;
            this.cdref.detectChanges();
        });
    }
    rejectPayment() {
        this.isLoaded = false;
        this.showSubmit = false;
        let queryParams = {
            Id: this.paymentInfo.publicRejectId,
            action: "reject"
        };
        this.widgetKibpayService.processPaymentAction(queryParams)
            .subscribe(response => {
            this.paymentInfo.state = _utilities_widget_kibpay_constants__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].REJECTED;
            this.isLoaded = true;
            this.cdref.detectChanges();
        }, error => {
            this.toastr.errorToastr((error && error.message) ? error.message : "Error");
            this.isLoaded = true;
            this.cdref.detectChanges();
        });
    }
}
KibpayPayerComponent.ɵfac = function KibpayPayerComponent_Factory(t) { return new (t || KibpayPayerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_widget_kibpay_service__WEBPACK_IMPORTED_MODULE_2__["WidgetKibpayService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__["ToastrManager"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_utilities_widget_kibpay_seo_service__WEBPACK_IMPORTED_MODULE_5__["WidgetKibpaySeoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Meta"])); };
KibpayPayerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: KibpayPayerComponent, selectors: [["kp-kibpay-payer"]], decls: 4, vars: 3, consts: [[1, "payment-container"], [4, "ngIf"], ["class", "main-container", 3, "ngClass", 4, "ngIf"], ["class", "button-container", 4, "ngIf"], [1, "main-container", 3, "ngClass"], [3, "paymentInfo"], [1, "button-container"], ["bbbutton", "", "buttonsize", "md", "type", "button", 1, "btn-primary", "btn-md", "btn", "m-t-16", "pointer", 3, "disabled", "click"], ["bbbutton", "", "buttonsize", "md", "type", "button", 1, "btn-secondary", "btn-md", "btn", "btn", "m-t-16", "m-b-16", "pointer", 3, "click"]], template: function KibpayPayerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, KibpayPayerComponent_kp_kibpay_loader_1_Template, 1, 0, "kp-kibpay-loader", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, KibpayPayerComponent_div_2_Template, 3, 4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, KibpayPayerComponent_div_3_Template, 6, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoaded && !ctx.isDirectPayment);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showSubmit);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _kibpay_loader_kibpay_loader_component__WEBPACK_IMPORTED_MODULE_8__["KibpayLoaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _kibpay_logo_kibpay_logo_component__WEBPACK_IMPORTED_MODULE_9__["KibpayLogoComponent"], _kibpay_payment_kibpay_payment_component__WEBPACK_IMPORTED_MODULE_10__["KibpayPaymentComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["JsonPipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KibpayPayerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'kp-kibpay-payer',
                templateUrl: `./kibpay-payer.component.html`,
                styles: []
            }]
    }], function () { return [{ type: _widget_kibpay_service__WEBPACK_IMPORTED_MODULE_2__["WidgetKibpayService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__["ToastrManager"] }, { type: _utilities_widget_kibpay_seo_service__WEBPACK_IMPORTED_MODULE_5__["WidgetKibpaySeoService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Meta"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _backbase_foundation_ang_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @backbase/foundation-ang/core */ "4HEl");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "e4iD");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
const start = Object(_backbase_foundation_ang_core__WEBPACK_IMPORTED_MODULE_1__["registerSingleApp"])((extraProviders) => _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["platformBrowser"](extraProviders).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]));
if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].bootstrap) {
    const { services, pageModel } = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].bootstrap;
    start(services).then(app => {
        app.bootstrap(pageModel, { parentName: '', index: 0 });
    });
}
if ("BB" in window) {
    __webpack_require__.p = window.BB.config.staticResourcesRoot + "/kp-kibpay-ang/dist/";
}


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
//# sourceMappingURL=main.435347a2d6aecd79daf2.js.map