webpackJsonp([0],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/customer/components/chat-history/chat-history.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".poppaDiv {\n  height: 100%;\n  width: 100%;\n  overflow: scroll;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding: 1em;\n}\n\nh4 {\n  border-bottom: 2px solid;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/customer/components/chat-history/chat-history.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"poppaDiv\">\n  <h1>Chat Log</h1>\n  <div *ngFor=\"let chat of chatHistory\">\n    <!-- <span>Subject: {{chat.subjectHeading}}</span>\n    <span>From: {{chat.sender}}</span>\n    <span>To: {{chat.recipient}}</span>\n    <span>Location: {{chat.location}}</span>\n    <span>Time: {{chat.time}}</span>\n    <span>Body: {{chat.body}}</span> -->\n    <h4>{{ chat.sender}}: {{ chat.subjectHeading }} @ {{ chat.time }}</h4>\n    <h5>{{ chat.body }}</h5>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/customer/components/chat-history/chat-history.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatHistoryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChatHistoryComponent = (function () {
    function ChatHistoryComponent() {
        console.log(this.chatHistory);
    }
    ChatHistoryComponent.prototype.formatDate = function (timeDate) {
        return timeDate.toDateString();
    };
    return ChatHistoryComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ChatHistoryComponent.prototype, "chatHistory", void 0);
ChatHistoryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'chat-history',
        template: __webpack_require__("../../../../../src/app/customer/components/chat-history/chat-history.component.html"),
        styles: [__webpack_require__("../../../../../src/app/customer/components/chat-history/chat-history.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ChatHistoryComponent);

//# sourceMappingURL=chat-history.component.js.map

/***/ }),

/***/ "../../../../../src/app/customer/components/chat-history/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__chat_history_component__ = __webpack_require__("../../../../../src/app/customer/components/chat-history/chat-history.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__chat_history_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/customer/components/close-to-you/close-to-you.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".poppaDiv {\n  border: 2px solid;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.stylistInfo {\n  /*border: 2px solid red;*/\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/customer/components/close-to-you/close-to-you.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"poppaDiv\">\n  <h4>\n    <span class=\"glyphicon glyphicon-scissors\">\n      {{stylistInformation.name}}\n      {{stylistInformation.phonenumber}}\n    </span>\n  </h4>\n  <div class=\"stylistInfo\">\n    <h5>{{stylistInformation.site_url}}</h5>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/customer/components/close-to-you/close-to-you.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CloseToYouComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CloseToYouComponent = (function () {
    function CloseToYouComponent() {
    }
    return CloseToYouComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CloseToYouComponent.prototype, "stylistInformation", void 0);
CloseToYouComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'close-to-you',
        template: __webpack_require__("../../../../../src/app/customer/components/close-to-you/close-to-you.component.html"),
        styles: [__webpack_require__("../../../../../src/app/customer/components/close-to-you/close-to-you.component.css")]
    })
], CloseToYouComponent);

//# sourceMappingURL=close-to-you.component.js.map

/***/ }),

/***/ "../../../../../src/app/customer/components/close-to-you/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__close_to_you_component__ = __webpack_require__("../../../../../src/app/customer/components/close-to-you/close-to-you.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__close_to_you_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/customer/components/customer-dropdown/customer-dropdown.component.html":
/***/ (function(module, exports) {

module.exports = "<select (change)=\"onSelect($event.target.value)\">\n  <option *ngFor=\"let item of items\">\n   {{item.value}}</option>\n</select>\n"

/***/ }),

/***/ "../../../../../src/app/customer/components/customer-dropdown/customer-dropdown.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerDropDownComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CustomerDropDownComponent = (function () {
    function CustomerDropDownComponent(router) {
        this.router = router;
        this.items = [
            { value: 'Home' },
            { value: 'Messages' },
            { value: 'Settings' },
            { value: 'Logout' },
        ];
    }
    CustomerDropDownComponent.prototype.onSelect = function (item) {
        this.selected = item;
        switch (this.selected) {
            case "Home":
                this.router.navigate(["/home"]);
                break;
            case "Messages":
                console.log('router', this.router);
                this.router.navigate(["/messages"]);
                break;
            case "Settings":
                this.router.navigate(["/customerProfile", this.customerId]);
                break;
            case "Logout":
                this.router.navigate(["/login"]);
                break;
        }
    };
    return CustomerDropDownComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], CustomerDropDownComponent.prototype, "customerId", void 0);
CustomerDropDownComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'customer-dropdown',
        template: __webpack_require__("../../../../../src/app/customer/components/customer-dropdown/customer-dropdown.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object])
], CustomerDropDownComponent);

var _a;
//# sourceMappingURL=customer-dropdown.component.js.map

/***/ }),

/***/ "../../../../../src/app/customer/components/customer-dropdown/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__customer_dropdown_component__ = __webpack_require__("../../../../../src/app/customer/components/customer-dropdown/customer-dropdown.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__customer_dropdown_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/customer/components/customer-home/customer-home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".poppaDiv {\n  border: 2px solid red;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.stylistContainer {\n  border: 2px solid red;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 55%;\n          flex: 1 1 55%;\n  height: 100%;\n}\n\n.mapContainer {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 43%;\n          flex: 1 1 43%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.map {\n  width: 100%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/customer/components/customer-home/customer-home.component.html":
/***/ (function(module, exports) {

module.exports = "<customer-navbar\n  [customerId]=\"customerProfile.id\"\n  [searchLocation]=\"searchLocation\"\n  (locationChange)=\"onSearchLocationChange($event)\"\n>\n</customer-navbar>\n<div class=\"poppaDiv\">\n  <div class=\"stylistContainer\">\n    <div *ngFor=\"let stylist of stylistsCloseToYou\">\n      <close-to-you\n        [stylistInformation]=\"stylist\"\n        [routerLink]=\"['/stylistProfile', stylist.id]\"\n      >\n      </close-to-you>\n    </div>\n  </div>\n\n  <div class=\"mapContainer\">\n    <customer-map\n      class=\"map\"\n      [searchLocation]=\"searchLocation\"\n    >\n    </customer-map>\n  </div>\n</div>\n\n<div *ngIf=\"!!bookingsDue\">\n  <div *ngFor=\"let booking of bookingsDue\">\n    I OWE {{booking.name}} MONEY!!!!\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/customer/components/customer-home/customer-home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerHomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CustomerHomeComponent = (function () {
    function CustomerHomeComponent(requestService, locationService, stylistService, bookingService, stateService) {
        this.requestService = requestService;
        this.locationService = locationService;
        this.stylistService = stylistService;
        this.bookingService = bookingService;
        this.stateService = stateService;
        this.isProfileFetched = false;
        this.getLocationCoordinates(this.latitude, this.longitude);
    }
    CustomerHomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.customerProfile = this.stateService.retrieveCustomer();
        this.isProfileFetched = true;
        this.getLocationCoordinates(this.latitude, this.longitude);
        this.getLocationFromCoordinates(this.latitude, this.longitude);
        this.searchLocation = this.currentLocation;
        this.pinStylistsAtLocation(this.searchLocation);
        // instead of using socket.io, check for bookings due on interval
        setInterval(function () { return _this.checkForBookingsDue(4); }, 5000);
    };
    CustomerHomeComponent.prototype.pinStylistsAtLocation = function (location) {
        var _this = this;
        this.stylistService.getStylistsInLocation(this.currentLocation)
            .subscribe(function (data) {
            _this.stylistsCloseToYou = data;
        }, function (err) { return console.log(err); });
    };
    CustomerHomeComponent.prototype.onSearchLocationChange = function (location) {
        this.searchLocation = location;
        console.log('New search location is:', this.searchLocation);
    };
    CustomerHomeComponent.prototype.getLocationCoordinates = function (lat, lng) {
        var _this = this;
        this.locationService.getCurrentPosition(lat, lng)
            .subscribe(function (res) {
            console.log(res);
            _this.currentLocation = res;
        });
    };
    CustomerHomeComponent.prototype.getLocationFromCoordinates = function (lat, lng) {
        var _this = this;
        this.locationService.getLocationFromCoordinates(lat, lng)
            .subscribe(function (res) {
            console.log(res);
            _this.currentLocation = res;
        });
    };
    CustomerHomeComponent.prototype.checkForBookingsDue = function (id) {
        var _this = this;
        this.bookingService.fetchDueBookings(id)
            .subscribe(function (data) {
            console.log('fetching dues....', data);
            _this.bookingsDue = data;
        }, function (err) {
            console.log(err);
        });
    };
    return CustomerHomeComponent;
}());
CustomerHomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'customer-home',
        template: __webpack_require__("../../../../../src/app/customer/components/customer-home/customer-home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/customer/components/customer-home/customer-home.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services__["e" /* LocationService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services__["a" /* RequestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services__["a" /* RequestService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services__["e" /* LocationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services__["e" /* LocationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services__["f" /* StylistService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services__["f" /* StylistService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__services__["b" /* BookingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services__["b" /* BookingService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__services__["c" /* StateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services__["c" /* StateService */]) === "function" && _e || Object])
], CustomerHomeComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=customer-home.component.js.map

/***/ }),

/***/ "../../../../../src/app/customer/components/customer-home/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__customer_home_component__ = __webpack_require__("../../../../../src/app/customer/components/customer-home/customer-home.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__customer_home_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/customer/components/customer-inbox/customer-inbox.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".poppaDiv {\n  height: 50%;\n  width: 100%;\n  overflow: scroll;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding: 1em;\n}\n\nh1 {\n  border-bottom: 2px solid;\n}\n\nh4 {\n  margin-right: 2em;\n  padding-right: 2em;\n  border-bottom: 2px solid;\n}\n\n.rowBody {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin: .5em;\n}\n.rowItem {\n  width: 100%;\n}\n\n.title {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.messageUser {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 90%;\n          flex: 1 1 90%;\n  -ms-flex-item-align: right;\n      -ms-grid-row-align: right;\n      align-self: right;\n}\n\n.buttonContainer {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 10%;\n          flex: 1 1 10%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n  width: 100%;\n}\n\nbutton {\n  background-color: rgba(173, 216, 230, 0.9);\n  border-radius: 10px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/customer/components/customer-inbox/customer-inbox.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"poppaDiv\">\n  <h1>Inbox</h1>\n  <div *ngFor=\"let conversation of messages\" class=\"rowItem\">\n    <div class=\"rowBody\">\n      <div class=\"title\" (click)=\"openHistory.emit(conversation.slice().reverse())\">\n        <div class=\"messageUser\">\n          <h4>{{conversation[0].recipient}}: </h4>\n          <span>\n            {{ conversation[0].subjectHeading }} @ {{ conversation[0].time }}\n          </span>\n        </div>\n        <div class=\"buttonContainer\">\n          <button (click)=\"deleteChat.emit(conversation)\">Delete</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/customer/components/customer-inbox/customer-inbox.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerInboxComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CustomerInboxComponent = (function () {
    function CustomerInboxComponent() {
        this.openHistory = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.deleteChat = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    return CustomerInboxComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CustomerInboxComponent.prototype, "messages", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], CustomerInboxComponent.prototype, "openHistory", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], CustomerInboxComponent.prototype, "deleteChat", void 0);
CustomerInboxComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'customer-inbox',
        template: __webpack_require__("../../../../../src/app/customer/components/customer-inbox/customer-inbox.component.html"),
        styles: [__webpack_require__("../../../../../src/app/customer/components/customer-inbox/customer-inbox.component.css")]
    })
], CustomerInboxComponent);

//# sourceMappingURL=customer-inbox.component.js.map

/***/ }),

/***/ "../../../../../src/app/customer/components/customer-inbox/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__customer_inbox_component__ = __webpack_require__("../../../../../src/app/customer/components/customer-inbox/customer-inbox.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__customer_inbox_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/customer/components/customer-map/customer-map.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sebm-google-map-container {\n  height: 400px;\n  width: 450px;\n}\n\n.map-title {\n  font-family: Helvetica;\n  text-align: center;\n}\n\n.map-container {\n  float: right;\n  padding-right: 150px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/customer/components/customer-map/customer-map.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"map-container\" style=\"flex: 1 1;\">\n  <sebm-google-map\n    [latitude]=\"lat\"\n    [longitude]=\"lng\"\n    [zoom]=\"zoom\"\n    [disableDefaultUI]=\"false\"\n    [zoomControl]=\"false\"\n    (mapClick)=\"mapClicked($event)\">\n    <sebm-google-map-marker\n        *ngFor=\"let stylist of stylists; let i = index;\"\n        (markerClick)=\"clickedMarker(stylist.label, i)\"\n        [latitude]=\"stylist.latitude\"\n        [longitude]=\"stylist.longitude\"\n        [label]=\"stylist.label\"\n        [iconUrl]=\"icon\">\n      <sebm-google-map-info-window>\n        <p (click)=\"goToStylist(stylist.id)\"><strong>{{stylist.label.text}} Info</strong></p>\n      </sebm-google-map-info-window>\n    </sebm-google-map-marker>\n  </sebm-google-map>\n</div>"

/***/ }),

/***/ "../../../../../src/app/customer/components/customer-map/customer-map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerMapComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CustomerMapComponent = (function () {
    function CustomerMapComponent(locationService, stylistService, router) {
        this.locationService = locationService;
        this.stylistService = stylistService;
        this.router = router;
        this.zoom = 14;
        this.icon = {
            url: "https://maxcdn.icons8.com/Share/icon/Healthcare//scissors1600.png",
            scaledSize: {
                height: 45,
                width: 45
            },
            labelOrigin: {
                x: 0,
                y: 0
            },
        };
    }
    CustomerMapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getLatLng(function (lat, lng) { return _this.getLocationFromCoordinates(lat, lng, function (location) { return _this.getStylistsInLocation(location); }); });
        this.getLatLng(function (lat, lng) { return _this.getLocationFromCoordinates(lat, lng, function (location) { return _this.adjustMapViewForLocation(location); }); });
    };
    CustomerMapComponent.prototype.ngOnChanges = function (changes) {
        this.adjustMapViewForLocation(this.searchLocation);
        this.getStylistsInLocation(this.searchLocation);
    };
    CustomerMapComponent.prototype.getLatLng = function (next) {
        var _this = this;
        this.locationService.getCurrentPosition(null, null)
            .subscribe(function (res) {
            _this.lat = res.coords.latitude;
            _this.lng = res.coords.longitude;
            next(_this.lat, _this.lng);
            console.log("Latitude is: " + _this.lat + ", longitude is: " + _this.lng);
        });
    };
    CustomerMapComponent.prototype.adjustMapViewForLocation = function (location) {
        var _this = this;
        this.locationService.getCoordinatesFromLocation(location)
            .subscribe(function (res) {
            console.log(res);
            console.log(JSON.stringify(res));
            _this.lat = res.lat;
            _this.lng = res.lng;
            console.log("Latitude is: " + _this.lat + ", longitude is: " + _this.lng);
        });
    };
    CustomerMapComponent.prototype.getStylistsInLocation = function (location) {
        var _this = this;
        this.stylistService.getStylistsInLocation(location)
            .subscribe(function (data) {
            console.log('Loc is', location);
            _this.stylists = data;
            _this.stylists.map(function (stylist) {
                stylist.label = {
                    color: 'black',
                    fontWeight: 'bold',
                    text: stylist.name
                };
            });
        }, function (err) { return console.log(err); });
    };
    CustomerMapComponent.prototype.getLocationFromCoordinates = function (lat, lng, next) {
        var _this = this;
        this.locationService.getLocationFromCoordinates(lat, lng)
            .subscribe(function (location) {
            _this.currentLocation = location;
            next(_this.currentLocation);
        }, function (err) { return console.log(err); });
    };
    CustomerMapComponent.prototype.goToStylist = function (id) {
        this.router.navigateByUrl("/stylistProfile/" + id);
    };
    CustomerMapComponent.prototype.clickedMarker = function (label, index) {
        console.log("clicked the marker: " + (label || index));
    };
    // helper function to get coordinates of a point on map
    CustomerMapComponent.prototype.mapClicked = function ($event) {
        var lat = $event.coords.lat;
        var lng = $event.coords.lng;
        console.log("lat: " + lat + ", lng: " + lng);
    };
    return CustomerMapComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], CustomerMapComponent.prototype, "searchLocation", void 0);
CustomerMapComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'customer-map',
        template: __webpack_require__("../../../../../src/app/customer/components/customer-map/customer-map.component.html"),
        styles: [__webpack_require__("../../../../../src/app/customer/components/customer-map/customer-map.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services__["e" /* LocationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services__["e" /* LocationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services__["f" /* StylistService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services__["f" /* StylistService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _c || Object])
], CustomerMapComponent);

var _a, _b, _c;
//# sourceMappingURL=customer-map.component.js.map

/***/ }),

/***/ "../../../../../src/app/customer/components/customer-map/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__customer_map_component__ = __webpack_require__("../../../../../src/app/customer/components/customer-map/customer-map.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__customer_map_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/customer/components/customer-message/customer-message.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".poppaDiv {\n  height: 100%;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\n.inboxContainer {\n  height: 35%;\n  width: 100%;\n  overflow: scroll;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/customer/components/customer-message/customer-message.component.html":
/***/ (function(module, exports) {

module.exports = "<customer-navbar></customer-navbar>\n<div class=\"poppaDiv\">\n  <div class=\"inboxContainer\">\n    <customer-inbox\n      [messages]=\"stateService.retrieveCustomer().messages\"\n      (openHistory)=\"setCurrentChat($event)\"\n      (deleteChat)=\"deleteChat($event)\"\n    >\n    </customer-inbox>\n  </div>\n  <chat-history [chatHistory]=\"currentChat\"></chat-history>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/customer/components/customer-message/customer-message.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerMessageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CustomerMessageComponent = (function () {
    function CustomerMessageComponent(stateService, messageService) {
        this.stateService = stateService;
        this.messageService = messageService;
    }
    CustomerMessageComponent.prototype.setCurrentChat = function (conversation) {
        this.currentChat = conversation;
    };
    CustomerMessageComponent.prototype.deleteChat = function (conversation) {
        var messageIds = conversation.map(function (message) {
            return message.id;
        });
        this.messageService.deleteChatHistory(messageIds)
            .subscribe(function (res) { return console.log(res); }, function (err) { return console.log(err); });
    };
    return CustomerMessageComponent;
}());
CustomerMessageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'customer-message',
        template: __webpack_require__("../../../../../src/app/customer/components/customer-message/customer-message.component.html"),
        styles: [__webpack_require__("../../../../../src/app/customer/components/customer-message/customer-message.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services__["c" /* StateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services__["c" /* StateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services__["h" /* MessageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services__["h" /* MessageService */]) === "function" && _b || Object])
], CustomerMessageComponent);

var _a, _b;
//# sourceMappingURL=customer-message.component.js.map

/***/ }),

/***/ "../../../../../src/app/customer/components/customer-message/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__customer_message_component__ = __webpack_require__("../../../../../src/app/customer/components/customer-message/customer-message.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__customer_message_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/customer/components/customer-navbar/customer-navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".poppaDiv {\n  height: 25%;\n  width: 90%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-left: 3em;\n  margin-top: 3em;\n}\n\nh1 {\n  text-shadow: 3px 3px 1px rgba(173, 216, 230, 0.9);\n  width: 100%;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1;\n          flex: 1 1;\n  -ms-flex-item-align: center;\n      -ms-grid-row-align: center;\n      align-self: center;\n}\n\n.title {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1;\n          flex: 1 1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  width: 100%;\n}\n\n.container-fluid,\n.miniContainer {\n  width: 100%;\n  height: 20%;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 100%;\n          flex: 1 1 100%;\n  border-bottom: 2px solid black;\n  margin-bottom: 2em;\n}\n\n.superNav {\n  width: 100%;\n  box-shadow: 5px 5px 3px rgba(173, 216, 230, 0.9);\n}\n\n.unorderedList {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  list-style: none;\n}\n\n.superForm {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\ninput {\n  width: 25em;\n  background-color: #d3d3d3;\n}\n\nli,\n.customer {\n  width: 40%;\n}\n\nli,\n.formElement {\n  width: 49%;\n}\n\n.form-control {\n  width: 40ch;\n}\n\n.dropdown {\n  position: relative;\n  display: absolute;\n  width: 33%;\n}\n\n.dropdown-content {\n  display: none;\n  position: absolute;\n  background-color: #f9f9f9;\n  min-width: 25ch;\n  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n  padding: 0ch 3ch 0ch 0ch;\n  z-index: 1;\n}\n\n.dropdown:hover .dropdown-content {\n  display: block;\n}\n\n.dropdownUl * {\n  list-style-type: none;\n  width: 100%;\n  height: 100%;\n  box-shadow: 3px 3px 1px rgba(173, 216, 230, 0.9);\n}\n\n.dropdownUl *:hover {\n  list-style-type: none;\n  color: rgba(173, 216, 230, 0.9);\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/customer/components/customer-navbar/customer-navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"poppaDiv\">\n  <div class=\"miniContainer\">\n    <div class=\"title\">\n      <div>\n        <h1>Ding Dong: It's Cut Time</h1>\n      </div>\n    </div>\n\n    <nav class=\"superNav\">\n      <ul class=\"unorderedList\">\n        <li class=\"customer\">\n          <h4>Welcome {{ currentCustomer }}, where are you located?</h4>\n        </li>\n        <li class=\"\">\n          <form class=\"superForm\">\n            <div>\n              <input\n                placeholder=\"Enter your location\"\n                #streetAddress\n                (ngModelChange)=\"locationChange.emit(streetAddress)\"\n              >\n              <button class=\"btn btn-default\" (click)=\"handleSearchLocationChange(streetAddress.value)\">Search</button>\n            </div>\n          </form>\n        </li>\n\n        <div class=\"dropdown\">\n          <span class=\"caret\">Username</span>\n            <div class=\"dropdown-content\">\n              <ul class=\"dropdownUl\">\n                <li [routerLink]=\"['/home']\"><h4>Home</h4></li>\n                <li [routerLink]=\"['/messages']\"><h4>Messages</h4></li>\n                <li [routerLink]=\"['/customerProfile', customerId]\"><h4>Settings</h4></li>\n                <li [routerLink]=\"['/login']\"><h4>Logout</h4></li>\n              </ul>\n            </div>\n        </div>\n      </ul>\n    </nav>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/customer/components/customer-navbar/customer-navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerNavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CustomerNavbarComponent = (function () {
    function CustomerNavbarComponent(stylistService, locationService) {
        this.stylistService = stylistService;
        this.locationService = locationService;
        this.locationChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.logo = 'put logo url here';
        this.currentCustomer = 'Matt';
        this.isDropDownHidden = true;
    }
    CustomerNavbarComponent.prototype.handleSearchLocationChange = function (newLocation) {
        console.log('new location:', newLocation);
        this.searchLocation = newLocation;
        this.locationChange.emit(newLocation);
    };
    return CustomerNavbarComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], CustomerNavbarComponent.prototype, "customerId", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], CustomerNavbarComponent.prototype, "searchLocation", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], CustomerNavbarComponent.prototype, "locationChange", void 0);
CustomerNavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'customer-navbar',
        template: __webpack_require__("../../../../../src/app/customer/components/customer-navbar/customer-navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/customer/components/customer-navbar/customer-navbar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services__["f" /* StylistService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services__["f" /* StylistService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services__["e" /* LocationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services__["e" /* LocationService */]) === "function" && _b || Object])
], CustomerNavbarComponent);

var _a, _b;
//# sourceMappingURL=customer-navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/customer/components/customer-navbar/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__customer_navbar_component__ = __webpack_require__("../../../../../src/app/customer/components/customer-navbar/customer-navbar.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__customer_navbar_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/customer/components/customer-profile/customer-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<customer-navbar [customerId]=\"customerId\"></customer-navbar>\n<h1>{{profile.name}}'s profile</h1>\n<img [src]=\"profile.image_url\" />\n<button>Edit</button>\n<p>Location</p>\n<div>\n  Longitude: {{profile.longitude}},\n  Latitude: {{profile.latitude}}\n  <button>Edit</button>\n</div>\n<div>\n  <p (click)=\"showAccountView()\">Edit your account information</p>\n  <p (click)=\"showPaymentView()\">Payment methods</p>\n</div>\n<div *ngIf=\"showView\">\n  Username<input name=\"username\" ngModel />\n  Password<input name=\"password\" ngModel />\n  <button (click)=\"handleDeleteAccount()\">Delete my account</button>\n  <button (click)=\"handleSaveChanges()\">Save changes</button>\n</div>\n<!-- <div *ngIf=\"!showView && profile.payments.length > 0\">\n  You don't have any payment methods\n  <button>Add a payment method</button>\n</div>\n<div *ngIf=\"!showView && profile.payments.length === 0\">\n  Render profile.payments here\n  <button>Edit</button>\n  <button>Delete</button>\n  <button>Add a payment method</button>\n</div> -->\n<payment-input [customerName]=\"profile.name\"></payment-input>\n"

/***/ }),

/***/ "../../../../../src/app/customer/components/customer-profile/customer-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CustomerProfileComponent = (function () {
    function CustomerProfileComponent(route, requestService, deletionService, stateService, router) {
        this.route = route;
        this.requestService = requestService;
        this.deletionService = deletionService;
        this.stateService = stateService;
        this.router = router;
        this.showView = true;
    }
    CustomerProfileComponent.prototype.ngOnInit = function () {
        this.profile = this.stateService.retrieveCustomer();
    };
    CustomerProfileComponent.prototype.showAccountView = function () {
        this.showView = true;
    };
    CustomerProfileComponent.prototype.showPaymentView = function () {
        this.showView = false;
    };
    CustomerProfileComponent.prototype.handleDeleteAccount = function () {
        var _this = this;
        this.deletionService.deleteAccount(this.profile.id)
            .subscribe(function (res) { return console.log(res); }, function (err) { return console.log(err); }, function () { return _this.router.navigate(["/login"]); });
    };
    CustomerProfileComponent.prototype.handleSaveChanges = function () {
        console.log('TODO: PUT the changes');
    };
    return CustomerProfileComponent;
}());
CustomerProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'customer-profile',
        template: __webpack_require__("../../../../../src/app/customer/components/customer-profile/customer-profile.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services__["a" /* RequestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services__["a" /* RequestService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services__["g" /* DeletionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services__["g" /* DeletionService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services__["c" /* StateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services__["c" /* StateService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _e || Object])
], CustomerProfileComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=customer-profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/customer/components/customer-profile/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__customer_profile_component__ = __webpack_require__("../../../../../src/app/customer/components/customer-profile/customer-profile.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__customer_profile_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/customer/components/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__customer_home__ = __webpack_require__("../../../../../src/app/customer/components/customer-home/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__customer_home__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__customer_navbar__ = __webpack_require__("../../../../../src/app/customer/components/customer-navbar/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__customer_navbar__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__customer_dropdown__ = __webpack_require__("../../../../../src/app/customer/components/customer-dropdown/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__customer_dropdown__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__close_to_you__ = __webpack_require__("../../../../../src/app/customer/components/close-to-you/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__close_to_you__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__customer_map__ = __webpack_require__("../../../../../src/app/customer/components/customer-map/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__customer_map__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__customer_message__ = __webpack_require__("../../../../../src/app/customer/components/customer-message/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_5__customer_message__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__customer_inbox__ = __webpack_require__("../../../../../src/app/customer/components/customer-inbox/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_6__customer_inbox__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__stylist_profile__ = __webpack_require__("../../../../../src/app/customer/components/stylist-profile/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_7__stylist_profile__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__customer_profile__ = __webpack_require__("../../../../../src/app/customer/components/customer-profile/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_8__customer_profile__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__chat_history__ = __webpack_require__("../../../../../src/app/customer/components/chat-history/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_9__chat_history__["a"]; });










//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/customer/components/stylist-profile/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylist_profile_component__ = __webpack_require__("../../../../../src/app/customer/components/stylist-profile/stylist-profile.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__stylist_profile_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/customer/components/stylist-profile/stylist-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<customer-navbar></customer-navbar>\n<div *ngIf=\"!!isProfileFetched\">\n  <div class=\"poppadiv\">\n    <div>\n      <h2 class=\"name\">{{ stylistProfile.name }}</h2>\n    </div>\n    <div class=\"profile\" >\n      <div class=\"locationWrapper\">\n        <img class=\"profileImage\" [src]=stylistProfile.image_url />\n        <h4>You can find me @</h4>\n        <div class=\"latLong\">\n          <!-- Longitude: {{stylistProfile.longitude}}, Latitude: {{stylistProfile.latitude}} -->\n          <p>{{ stylistProfile.billingaddress }}</p>\n          <p>{{ stylistProfile.phonenumber }}</p>\n        </div>\n      </div>\n\n      <div class=\"servicesContainer\">\n        <h4>Services I provide</h4>\n        <div class=\"listStyles\">\n          <div class=\"styleItems\" *ngFor=\"let style of ['hard', 'coded', 'styles']\">\n            <h5>{{style}}</h5>\n          </div>\n        </div>\n        <div class=\"aboutMe\">\n          <h4>About Me</h4>\n          <div class=\"paragraph\">\n            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n          </div>\n        </div>\n\n        <h4>Link to personal site:</h4>\n        <div class=\"container row personalContainer\">\n          <a href=\"stylistProfile.site_url\">{{stylistProfile.site_url}}</a>\n        </div>\n      </div>\n      <div class=\"buttonContainer\">\n        <button (click)=\"toggleModal()\">Request a cut</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"container row modalWrapper\" [style.display]=\"getStyle()\">\n  <div class=\"bigWrapper\">\n    <form #directMessage=\"ngForm\" class=\"container row modalContent\">\n      <span (click)=\"toggleModal()\">&times;</span>\n      <div class=\"container row miniWrapper\">\n        <h4>Send a message</h4>\n        <div class=\"row location modeitem\">\n          Where would you like your hair cut? <input name=\"location\" ngModel/>\n        </div>\n        <div class=\"row heading modeitem\">\n          Header:\n          <input name=\"subjectHeading\" placeholder=\"Subject Heading\" ngModel/>\n          <br>\n          <br>\n          Time: <input name=\"time\" ngModel />\n        </div>\n        <div class=\"row message modeitem\">\n          <textarea name=\"body\" ngModel>Body of the message</textarea>\n          <button (click)=\"submitMessage(directMessage.value)\">Send</button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/customer/components/stylist-profile/stylist-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StylistProfileComponent; });
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StylistProfileComponent = (function () {
    function StylistProfileComponent(route, requestService, messageService, bookingService) {
        this.route = route;
        this.requestService = requestService;
        this.messageService = messageService;
        this.bookingService = bookingService;
        this.isProfileFetched = false;
        this.isShowModal = false;
        this.modalStyle = 'none';
    }
    StylistProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) { return _this.stylistId = +params['id']; }, function (err) { return console.log(err); });
        this.requestService.getStylistById(this.stylistId)
            .subscribe(function (data) {
            _this.stylistProfile = data;
        }, function (err) { return console.log(err); }, function () { return _this.isProfileFetched = true; });
    };
    StylistProfileComponent.prototype.toggleModal = function () {
        this.isShowModal = !this.isShowModal;
    };
    StylistProfileComponent.prototype.getStyle = function () {
        if (this.isShowModal === false) {
            return 'none';
        }
        else {
            return 'block';
        }
    };
    StylistProfileComponent.prototype.decorateSenderAndRecipient = function (message) {
        message = __assign({}, message, { id_sender: 1, id_recipient: this.stylistId });
        return message;
    };
    StylistProfileComponent.prototype.submitMessage = function (message) {
        message = this.decorateSenderAndRecipient(message);
        this.messageService.postMessage(message)
            .subscribe(function (res) { return console.log(res); }, function (err) { return console.log(err); });
        this.addBooking(message);
    };
    StylistProfileComponent.prototype.addBooking = function (message) {
        var booking = {
            id_users: 1,
            id_stylists: this.stylistId,
            isconfirmed: false,
            time: message.time,
            location: message.location
        };
        this.bookingService.addBooking(booking)
            .subscribe(function (res) { return console.log(res); }, function (err) { return console.log(err); });
    };
    return StylistProfileComponent;
}());
StylistProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'stylist-profile',
        template: __webpack_require__("../../../../../src/app/customer/components/stylist-profile/stylist-profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/customer/components/stylist-profile/stylist.profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services__["a" /* RequestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services__["a" /* RequestService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services__["h" /* MessageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services__["h" /* MessageService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services__["b" /* BookingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services__["b" /* BookingService */]) === "function" && _d || Object])
], StylistProfileComponent);

var _a, _b, _c, _d;
// | 55 |    1 | dnalounge         | dnalounge         | 375 11th St, San Francisco, CA
// 56 |    0 | castro            | castro            | 429 Castro St, San Francisco, CA                      | 415-621-6120 | castrotheatre@gmail.com     | -122.4347591 | 37.7620333 | castrotheatre.com      | NULL   | update me |
//# sourceMappingURL=stylist-profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/customer/components/stylist-profile/stylist.profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".poppadiv {\n  border: 3px solid black;\n  border-radius: 20px;\n  box-shadow: 10px 10px 5px rgba(173, 216, 230, 0.9);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 100%;\n  width: 93%;\n  margin: 5ch;\n}\n\n.name {\n  width: 100%;\n  height: 10%;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1;\n          flex: 1 1;\n}\n\n.profile {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  padding: 1.5em;\n}\n\n.profileImage {\n  border-radius: 150px;\n  padding-top: 5ch;\n}\n\n.locationWrapper {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1;\n          flex: 1 1;\n  width: 30%;\n  padding: 1em;\n  height: 100%;\n}\n.servicesContainer {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 50%;\n          flex: 1 1 50%;\n  width: 65%;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\n.buttonContainer {\n  width: 1%;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 1%;\n          flex: 1 1 1%;\n}\n\n\n.latLong {\n  border-top: 2px solid;\n  height: 50%;\n  width: 100%;\n}\n\n\n.personalContainer {\n  padding: 1em;\n  margin: 1em;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n}\n\n\n.heading {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1;\n          flex: 1 1;\n}\n\n.location {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1;\n          flex: 1 1;\n}\n\n.message {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1;\n          flex: 1 1;\n}\n\ntextarea {\n  width: 75ch;\n  height: 25ch;\n}\n\n.button {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1;\n          flex: 1 1;\n  -ms-flex-item-align: right;\n      -ms-grid-row-align: right;\n      align-self: right;\n}\n\n.listStyles {\n  border-bottom: 2px solid black;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: left;\n      -ms-flex-pack: left;\n          justify-content: left;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n\n.styleItems {\n  padding: 3px;\n  margin: 3px;\n}\n\n.linktosite {\n  border: 1px solid black;\n  width: 75%;\n}\n/*\n.link {\n  flex: 1 1 50%;\n  border: 2px solid red;\n}\n*/\n.paragraph {\n  overflow: scroll;\n  width: 100%;\n  border-top: 2px solid;\n}\n\n.modalWrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  color: black;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding-top: 1em;\n  margin-top: 1em;\n  display: none;\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgba(173, 216, 230, 0.9);\n}\n\n.modalContent {\n  border: 2px solid black;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1;\n          flex: 1 1;\n  width: 82%;\n  height: 80%;\n  padding: 5ch;\n  margin: 5ch;\n  margin-left: 12ch;\n  position: absolute;\n  /*margin-left: -35%;\n  margin-top: -35%;*/\n  /*top: 50%;\n  left: 50%;*/\n  background-color: white;\n}\n\n.modeitem {\n  padding: 1ch;\n  margin: 1ch;\n}\n\ninput, textarea {\n  background-color: #d3d3d3;\n}\n\n.bigWrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/customer/customer.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_google_maps_core__ = __webpack_require__("../../../../angular2-google-maps/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_google_maps_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_google_maps_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ui_ui_module__ = __webpack_require__("../../../../../src/app/ui/ui.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components__ = __webpack_require__("../../../../../src/app/customer/components/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var CustomerModule = (function () {
    function CustomerModule() {
    }
    return CustomerModule;
}());
CustomerModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["c" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4_angular2_google_maps_core__["AgmCoreModule"].forRoot({
                apiKey: 'AIzaSyDiVQjsDczrtUuAdadrUB2lFn39QEWK43A' // TODO: Hide key
            }),
            __WEBPACK_IMPORTED_MODULE_5__ui_ui_module__["a" /* UiModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__components__["a" /* CustomerHomeComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components__["b" /* CustomerNavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components__["c" /* CustomerDropDownComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components__["d" /* CloseToYouComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components__["e" /* CustomerMapComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components__["f" /* CustomerMessageComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components__["g" /* CustomerInboxComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components__["h" /* StylistProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components__["i" /* CustomerProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components__["j" /* ChatHistoryComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__services__["d" /* StripeService */],
            __WEBPACK_IMPORTED_MODULE_6__services__["e" /* LocationService */],
            __WEBPACK_IMPORTED_MODULE_6__services__["f" /* StylistService */],
            __WEBPACK_IMPORTED_MODULE_6__services__["g" /* DeletionService */],
            __WEBPACK_IMPORTED_MODULE_6__services__["h" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_6__services__["c" /* StateService */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_7__components__["b" /* CustomerNavbarComponent */]
        ]
    })
], CustomerModule);

//# sourceMappingURL=customer.module.js.map

/***/ }),

/***/ "../../../../../src/app/customer/customer.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components__ = __webpack_require__("../../../../../src/app/customer/components/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return customerRoutes; });

var customerRoutes = [
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_0__components__["a" /* CustomerHomeComponent */]
    },
    {
        path: 'messages',
        component: __WEBPACK_IMPORTED_MODULE_0__components__["f" /* CustomerMessageComponent */]
    },
    {
        path: 'stylistProfile/:id',
        component: __WEBPACK_IMPORTED_MODULE_0__components__["h" /* StylistProfileComponent */]
    },
    {
        path: 'customerProfile/:id',
        component: __WEBPACK_IMPORTED_MODULE_0__components__["i" /* CustomerProfileComponent */]
    },
    {
        path: 'closeToYou',
        component: __WEBPACK_IMPORTED_MODULE_0__components__["d" /* CloseToYouComponent */]
    }
];
//# sourceMappingURL=customer.routes.js.map

/***/ }),

/***/ "../../../../../src/app/registration/components/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__registration_header__ = __webpack_require__("../../../../../src/app/registration/components/registration-header/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__registration_header__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__signin_form__ = __webpack_require__("../../../../../src/app/registration/components/signin-form/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__signin_form__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signin_input__ = __webpack_require__("../../../../../src/app/registration/components/signin-input/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__signin_input__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_form__ = __webpack_require__("../../../../../src/app/registration/components/signup-form/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_3__signup_form__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_stylist_form__ = __webpack_require__("../../../../../src/app/registration/components/signup-stylist-form/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__signup_stylist_form__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__signup_user__ = __webpack_require__("../../../../../src/app/registration/components/signup-user/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_5__signup_user__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__signup_stylist__ = __webpack_require__("../../../../../src/app/registration/components/signup-stylist/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_6__signup_stylist__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__username_password__ = __webpack_require__("../../../../../src/app/registration/components/username-password/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_7__username_password__["a"]; });








//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/registration/components/registration-header/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__registration_header_component__ = __webpack_require__("../../../../../src/app/registration/components/registration-header/registration-header.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__registration_header_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/registration/components/registration-header/registration-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationHeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegistrationHeaderComponent = (function () {
    function RegistrationHeaderComponent() {
    }
    return RegistrationHeaderComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], RegistrationHeaderComponent.prototype, "headerText", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], RegistrationHeaderComponent.prototype, "logo", void 0);
RegistrationHeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'registration-header',
        template: "\n    <div class=\"page-header\" style=\"margin: auto; text-align: center\">\n      <h1>Ding Dong: It's Cut Time</h1>\n    </div>\n  "
    })
], RegistrationHeaderComponent);

//# sourceMappingURL=registration-header.component.js.map

/***/ }),

/***/ "../../../../../src/app/registration/components/signin-form/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__signin_form_component__ = __webpack_require__("../../../../../src/app/registration/components/signin-form/signin-form.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__signin_form_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/registration/components/signin-form/signin-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".poppaDiv {\n  border-top: 2px solid black;\n  width: 100%;\n  height: 70vh;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\nh1 {\n  padding: 1em;\n}\n\ninput {\n  background-color: #d3d3d3;\n}\n\n.myForm {\n  width: 50%;\n  height: 50%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.buttonContainer {\n  padding: 1em;\n}\n\n.woo {\n  margin: 6em;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/registration/components/signin-form/signin-form.component.html":
/***/ (function(module, exports) {

module.exports = "<registration-header headerText=\"Login Page\" logo=\"insert logo url here\"></registration-header>\n<div class=\"container row poppaDiv\">\n  <!-- <div class=\"container row\"> -->\n    <form class=\"myForm\" (ngSubmit)=\"handleLogin(f)\" #f=\"ngForm\">\n      <label><h1>Login</h1></label>\n      <label for=\"form-group\">Username</label>\n        <input\n          type=\"text\"\n          id=\"username\"\n          ngModel\n          name=\"username\">\n      <br>\n      <label for=\"form-group\">Password</label>\n        <input\n          type=\"password\"\n          id=\"password\"\n          ngModel\n          name=\"password\">\n      <br>\n      <div class=\"row buttonContainer\">\n        <button\n          class=\"btn btn-primary btn-group\"\n          [routerLink]=\"['/signupuser']\"\n        >User Signup</button>\n        <button\n          class=\"btn btn-primary btn-group\"\n          [routerLink]=\"['/signupstylist']\"\n        >Stylist Signup</button>\n        <button\n          class=\"btn btn-primary btn-group\"\n          type=\"submit\"\n        >Login</button>\n      </div>\n    </form>\n<!--   </div> -->\n\n  <div class=\"container row panel panel-default woo\">\n    <p class=\"panel-body\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"</p>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/registration/components/signin-form/signin-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInFormComponent; });
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignInFormComponent = (function () {
    function SignInFormComponent(router, requestService, stateService) {
        this.router = router;
        this.requestService = requestService;
        this.stateService = stateService;
        this.logo = 'placeholder for logo url';
    }
    SignInFormComponent.prototype.ngOnInit = function () {
        console.log(this.requestService, this.stateService);
    };
    SignInFormComponent.prototype.setUserData = function (userInput) {
        this.userInformationData = __assign({}, this.userInformationData, userInput);
    };
    SignInFormComponent.prototype.handleLogin = function (form) {
        var _this = this;
        this.requestService.getStylistByName(form.value.username, form.value.password)
            .subscribe(function (data) {
            if (data[0].type === 1) {
                _this.stateService.addCustomer(data[0]);
                _this.router.navigate(['/home']);
            }
            else if (data[0].type === 0) {
                _this.stateService.addCustomer(data[0]);
                _this.router.navigate(['/stylisthome']);
            }
            else {
                _this.router.navigate(['/login']);
            }
        });
    };
    return SignInFormComponent;
}());
SignInFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'signin-form',
        template: __webpack_require__("../../../../../src/app/registration/components/signin-form/signin-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/registration/components/signin-form/signin-form.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services__["a" /* RequestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services__["a" /* RequestService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services__["c" /* StateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services__["c" /* StateService */]) === "function" && _c || Object])
], SignInFormComponent);

var _a, _b, _c;
//# sourceMappingURL=signin-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/registration/components/signin-input/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__signin_input_component__ = __webpack_require__("../../../../../src/app/registration/components/signin-input/signin-input.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__signin_input_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/registration/components/signin-input/signin-input.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInInputComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SignInInputComponent = (function () {
    function SignInInputComponent() {
        this.onInputChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    return SignInInputComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], SignInInputComponent.prototype, "headerText", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], SignInInputComponent.prototype, "onInputChange", void 0);
SignInInputComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'signin-input',
        template: "\n    <h2>{{headerText}}</h2>\n    <div class=\"input-group\">\n      <span class=\"input-group-addon\" id=\"basic-addon1\">@</span>\n      <input\n        class=\"form-control\"\n        #input\n        (change)=\"onInputChange.emit(input.value)\"\n      />\n    </div>\n  "
    })
], SignInInputComponent);

//# sourceMappingURL=signin-input.component.js.map

/***/ }),

/***/ "../../../../../src/app/registration/components/signup-form/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__signup_form_component__ = __webpack_require__("../../../../../src/app/registration/components/signup-form/signup-form.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__signup_form_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/registration/components/signup-form/signup-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <registration-header headerText=\"Sign Up Page\" logo=\"placeholder logo url\"></registration-header>\n  <div class=\"container row\" style=\"margin: auto\">\n    <form\n      (ngSubmit)=\"handleSignUp(signUpFormData)\" #signUpFormData=\"ngForm\">\n      <div class=\"input-group\">\n        <!-- Signup as Customer -->\n        <span class=\"input-group-addon\" style=\"height: 10px;\">\n          <h5>Signup as a Customer</h5>\n        </span>\n          <input\n            class=\"form-control\"\n            name=\"type\"\n            type=\"radio\"\n            checked=\"checked\"\n            [value]=\"1\"\n            [(ngModel)]=\"userInformationData.type\"\n            (change)=\"clearForm()\"\n          >\n        <!-- Signup as Stylist -->\n        <span class=\"input-group-addon\">\n          <h5>Sign up as a Stylist</h5>\n        </span>\n          <input\n            class=\"form-control\"\n            name=\"type\"\n            type=\"radio\"\n            [value]=\"0\"\n            [(ngModel)]=\"userInformationData.type\"\n            (change)=\"clearForm()\"\n          >\n      </div>\n      <username-password (onInputsChange)=\"handleAccountInput($event)\"></username-password>\n      <signup-stylist-form\n        *ngIf=\"this.userInformationData.type===0\"\n        (handleStylistFormChange)=\"handleStylistInput($event)\"\n        [styling]=\"styling\"\n      >\n      </signup-stylist-form>\n      <button class=\"btn btn-primary\" type=\"submit\">Register</button>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/registration/components/signup-form/signup-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_request_service__ = __webpack_require__("../../../../../src/app/services/request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interfaces_registration_data__ = __webpack_require__("../../../../../src/app/registration/interfaces/registration-data/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpFormComponent; });
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignUpFormComponent = (function () {
    function SignUpFormComponent(requestService, router) {
        this.requestService = requestService;
        this.router = router;
        // hardcoded styling data
        this.styling = ['Fade', 'Perm', 'Hair Coloring', 'Taper Fade', 'Bangs', 'Buzz Cut', 'Pompadour'];
        this.userInformationData = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__interfaces_registration_data__["createDefaultUserInformationData"])();
    }
    SignUpFormComponent.prototype.handleAccountInput = function (accountInformation) {
        this.userInformationData = __assign({}, this.userInformationData, accountInformation);
    };
    SignUpFormComponent.prototype.handleStylistInput = function (stylistInformationData) {
        this.userInformationData = __assign({}, this.userInformationData, { stylistInformationData: stylistInformationData });
    };
    SignUpFormComponent.prototype.handleSignUp = function () {
        var _this = this;
        console.log('posting ', this.userInformationData);
        this.requestService.postStylist(this.userInformationData)
            .subscribe(function (res) {
            console.log('Succesfully posted: ', res);
            _this.router.navigate(['/home']);
        }, function (err) { return console.log('Error posting: ', err); });
    };
    SignUpFormComponent.prototype.clearForm = function () {
        this.userInformationData = __assign({}, this.userInformationData, { stylistInformationData: null });
    };
    return SignUpFormComponent;
}());
SignUpFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'signup-form',
        template: __webpack_require__("../../../../../src/app/registration/components/signup-form/signup-form.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_request_service__["a" /* RequestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_request_service__["a" /* RequestService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object])
], SignUpFormComponent);

var _a, _b;
//# sourceMappingURL=signup-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/registration/components/signup-stylist-form/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__signup_stylist_form_component__ = __webpack_require__("../../../../../src/app/registration/components/signup-stylist-form/signup-stylist-form.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__signup_stylist_form_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/registration/components/signup-stylist-form/signup-stylist-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container row\" style=\"padding-top: 20px;\">\n  <form\n    #stylistForm=\"ngForm\"\n    (change)=\"handleStylistFormChange.emit(stylistForm.value)\"\n  >\n    <div class=\"input-group\">\n      <span class=\"input-group-addon\" id=\"basic-addon1\"><h4>Where are you servicing?</h4></span>\n      <input\n        class=\"form-control\"\n        name=\"serviceLocation\"\n        ngModel\n        style=\"height: 55px\"\n      >\n    </div>\n    <!-- <div class=\"container row\">\n      <span class=\"input-group-addon\">\n      Gender Male\n        <input\n          type=\"radio\"\n          name=\"gender\"\n          value=\"male\"\n          ngModel\n        >\n      Gender Female\n        <input type=\"radio\"\n          name=\"gender\"\n          value=\"female\"\n          ngModel\n        >\n      </span>\n    </div> -->\n    <div>\n      <span class=\"input-group-addon\"><h4>Link to personal site (Optional)</h4></span>\n      <input\n        class=\"form-control\"\n        ngModel\n        name=\"personalUrl\"\n      >\n    </div>\n    <div class=\"container row\">\n\n      <div class=\"input-group\" style=\"display: flex; flex-wrap: wrap; justify-content: center;\">\n        <div style=\"flex 1 1; width: 33%\" *ngFor=\"let style of styling; let index = index\" name=\"style\">\n          <span class=\"input-group-addon\">\n          <input\n            name=\"styleType\"\n            type=\"checkbox\"\n            [value]=\"styling[index]\"\n            (change)=\"onChange(stylistForm.value, $event.target.value, index)\"\n          >\n          <label for=\"style\">\n            <h4>{{style}}</h4>\n          </label>\n          </span>\n        </div>\n      </div>\n\n    </div>\n  </form>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/registration/components/signup-stylist-form/signup-stylist-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpStylistFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SignUpStylistFormComponent = (function () {
    function SignUpStylistFormComponent() {
        this.handleStylistFormChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    SignUpStylistFormComponent.prototype.onChange = function (form, checkboxVal, index) {
        if (!form.styling) {
            form.styling = [];
        }
        else {
            if (form.styling.indexOf(checkboxVal) !== -1) {
                form.styling.splice(index, 1);
                return;
            }
        }
        form.styling[index] = checkboxVal; // .length is now inaccurate
    };
    return SignUpStylistFormComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SignUpStylistFormComponent.prototype, "styling", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], SignUpStylistFormComponent.prototype, "handleStylistFormChange", void 0);
SignUpStylistFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'signup-stylist-form',
        template: __webpack_require__("../../../../../src/app/registration/components/signup-stylist-form/signup-stylist-form.component.html")
    })
], SignUpStylistFormComponent);

//# sourceMappingURL=signup-stylist-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/registration/components/signup-stylist/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__signup_stylist_component__ = __webpack_require__("../../../../../src/app/registration/components/signup-stylist/signup-stylist.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__signup_stylist_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/registration/components/signup-stylist/signup-stylist.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h3 {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 100%;\n          flex: 1 1 100%;\n}\n\ninput {\n  background-color: #d3d3d3;\n}\n\n.poppaDiv {\n  width: 100%;\n  height: 100vh;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\n.myForm {\n  height: 100%;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 100%;\n          flex: 1 1 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  border-top: 2px solid black;\n}\n\n.spanContainer {\n  padding: 2em;\n  height: 25%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.spanContainer > * {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 25%;\n          flex: 1 1 25%;\n  padding: .10em;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/registration/components/signup-stylist/signup-stylist.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container poppaDiv\">\n  <registration-header\n    [routerLink]=\"['/login']\"\n    headerText=\"Login Page\"\n    logo=\"insert logo url here\"></registration-header>\n  <form class=\"myForm\" (ngSubmit)=\"handleSignup(f)\" #f=\"ngForm\">\n    <div>\n      <h3>Please Enter Your User Info</h3>\n    </div>\n    <label for=\"form-group\">Username</label>\n      <input\n        type=\"text\"\n        id=\"username\"\n        ngModel\n        name=\"username\">\n    <br>\n    <label for=\"form-group\">Password</label>\n      <input\n        type=\"password\"\n        id=\"password\"\n        ngModel\n        name=\"password\">\n    <br>\n    <label for=\"form-group\">Email Address</label>\n      <input\n        type=\"email\"\n        id=\"email\"\n        ngModel\n        name=\"email\">\n    <br>\n    <label for=\"form-group\">Billing Address</label>\n      <input\n        type=\"address\"\n        id=\"address\"\n        ngModel\n        name=\"address\">\n    <br>\n    <label for=\"form-group\">Link to Personal Site (optional)</label>\n      <input\n        type=\"url\"\n        id=\"url\"\n        ngModel\n        name=\"url\">\n    <br>\n    <label for=\"form-group\">Please select a list of services you offer</label>\n      <span class=\"spanContainer\">\n        <span *ngFor=\"let service of stylesPlaceHolder\">\n          <input\n            type=\"checkbox\"\n            id=\"service\"\n            ngModel\n            [name]=\"service\"\n          >{{ service }}\n        </span>\n    </span>\n<!-- <div *ngFor=\"let stylist of stylistsCloseToYou\"> -->\n    <button\n      class=\"btn btn-primary btn-group\"\n      type=\"submit\"\n    >Submit</button>\n  </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/registration/components/signup-stylist/signup-stylist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupStylistComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupStylistComponent = (function () {
    function SignupStylistComponent(requestService, stateService, router) {
        this.requestService = requestService;
        this.stateService = stateService;
        this.router = router;
        this.stylesPlaceHolder = ['fade', 'mullet', 'bowl cut', 'fade', 'mullet', 'bowl cut'];
    }
    SignupStylistComponent.prototype.handleSignup = function (form) {
        var _this = this;
        var newStylist = {
            name: form.value.username,
            password: form.value.password,
            email: form.value.email,
            type: 1,
            billingaddress: form.value.address,
            styles: [1, 2, 3, 4]
        };
        this.requestService.postStylist(newStylist)
            .subscribe(function (data) {
            _this.requestService.getStylistByName(newStylist.name, newStylist.password)
                .subscribe(function (woo) {
                _this.stateService.addCustomer(woo[0]);
                _this.router.navigate(['/home']);
            });
        });
    };
    return SignupStylistComponent;
}());
SignupStylistComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'signup-stylist',
        template: __webpack_require__("../../../../../src/app/registration/components/signup-stylist/signup-stylist.component.html"),
        styles: [__webpack_require__("../../../../../src/app/registration/components/signup-stylist/signup-stylist.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services__["a" /* RequestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services__["a" /* RequestService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services__["c" /* StateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services__["c" /* StateService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _c || Object])
], SignupStylistComponent);

var _a, _b, _c;
//# sourceMappingURL=signup-stylist.component.js.map

/***/ }),

/***/ "../../../../../src/app/registration/components/signup-user/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__signup_user_component__ = __webpack_require__("../../../../../src/app/registration/components/signup-user/signup-user.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__signup_user_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/registration/components/signup-user/signup-user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h3 {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 100%;\n          flex: 1 1 100%;\n}\n\ninput {\n  background-color: #d3d3d3;\n}\n\n.poppaDiv {\n  width: 100%;\n  height: 65vh;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\n.myForm {\n  height: 80%;\n  width: 65%;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 100%;\n          flex: 1 1 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  border-top: 2px solid;\n  margin-top: 0px;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/registration/components/signup-user/signup-user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container poppaDiv\">\n  <registration-header\n    [routerLink]=\"['/login']\"\n    headerText=\"Login Page\"\n    logo=\"insert logo url here\"></registration-header>\n  <form class=\"myForm\" (ngSubmit)=\"handleSignup(f)\" #f=\"ngForm\">\n    <div>\n      <h3>Please Enter Your User Info</h3>\n    </div>\n    <label for=\"form-group\">Username</label>\n      <input\n        type=\"text\"\n        id=\"username\"\n        ngModel\n        name=\"username\">\n    <br>\n    <label for=\"form-group\">Password</label>\n      <input\n        type=\"password\"\n        id=\"password\"\n        ngModel\n        name=\"password\">\n    <br>\n    <label for=\"form-group\">Email Address</label>\n      <input\n        type=\"email\"\n        id=\"email\"\n        ngModel\n        name=\"email\">\n    <br>\n    <button\n      class=\"btn btn-primary btn-group\"\n      type=\"submit\"\n    >Submit</button>\n  </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/registration/components/signup-user/signup-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupUserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupUserComponent = (function () {
    function SignupUserComponent(requestService, stateService, router) {
        this.requestService = requestService;
        this.stateService = stateService;
        this.router = router;
    }
    SignupUserComponent.prototype.ngOnInit = function () { };
    SignupUserComponent.prototype.handleSignup = function (form) {
        var _this = this;
        var newUser = {
            name: form.value.username,
            password: form.value.password,
            email: form.value.email,
            type: 1
        };
        this.requestService.postStylist(newUser)
            .subscribe(function (data) {
            _this.requestService.getStylistByName(newUser.name, newUser.password)
                .subscribe(function (woo) {
                _this.stateService.addCustomer(woo[0]);
                _this.router.navigate(['/home']);
            });
        });
    };
    return SignupUserComponent;
}());
SignupUserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'signup-user',
        template: __webpack_require__("../../../../../src/app/registration/components/signup-user/signup-user.component.html"),
        styles: [__webpack_require__("../../../../../src/app/registration/components/signup-user/signup-user.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services__["a" /* RequestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services__["a" /* RequestService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services__["c" /* StateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services__["c" /* StateService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _c || Object])
], SignupUserComponent);

;
var _a, _b, _c;
//# sourceMappingURL=signup-user.component.js.map

/***/ }),

/***/ "../../../../../src/app/registration/components/username-password/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__username_password_component__ = __webpack_require__("../../../../../src/app/registration/components/username-password/username-password.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__username_password_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/registration/components/username-password/username-password.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container row\" style=\"margin: auto;\">\n  <div class=\"input-group\" style=\"margin: auto;\">\n    <signin-input\n      style=\"margin: auto;\"\n      headerText=\"Username\"\n      (onInputChange)=\"emitUsernameInputChange($event)\"\n    >\n    </signin-input>\n  </div>\n  <div class=\"input-group\" style=\"margin: auto;\">\n    <signin-input\n      style=\"margin: auto\"\n      headerText=\"Password\"\n      (onInputChange)=\"emitPasswordInputChange($event)\"\n    >\n    </signin-input>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/registration/components/username-password/username-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsernamePasswordComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UsernamePasswordComponent = (function () {
    function UsernamePasswordComponent() {
        this.onInputsChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    UsernamePasswordComponent.prototype.emitInputChange = function () {
        this.onInputsChange.emit({
            name: this.name,
            password: this.password
        });
    };
    UsernamePasswordComponent.prototype.emitUsernameInputChange = function (name) {
        this.name = name;
        this.emitInputChange();
    };
    UsernamePasswordComponent.prototype.emitPasswordInputChange = function (password) {
        this.password = password;
        this.emitInputChange();
    };
    return UsernamePasswordComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], UsernamePasswordComponent.prototype, "onInputsChange", void 0);
UsernamePasswordComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'username-password',
        template: __webpack_require__("../../../../../src/app/registration/components/username-password/username-password.component.html")
    })
], UsernamePasswordComponent);

//# sourceMappingURL=username-password.component.js.map

/***/ }),

/***/ "../../../../../src/app/registration/interfaces/registration-data/account-information.interface.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=account-information.interface.js.map

/***/ }),

/***/ "../../../../../src/app/registration/interfaces/registration-data/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_information_data_interface__ = __webpack_require__("../../../../../src/app/registration/interfaces/registration-data/user-information-data.interface.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "createDefaultUserInformationData", function() { return __WEBPACK_IMPORTED_MODULE_0__user_information_data_interface__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stylist_information_data_interface__ = __webpack_require__("../../../../../src/app/registration/interfaces/registration-data/stylist-information-data.interface.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stylist_information_data_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__stylist_information_data_interface__);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account_information_interface__ = __webpack_require__("../../../../../src/app/registration/interfaces/registration-data/account-information.interface.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account_information_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__account_information_interface__);
/* unused harmony namespace reexport */



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/registration/interfaces/registration-data/stylist-information-data.interface.ts":
/***/ (function(module, exports) {

;
//# sourceMappingURL=stylist-information-data.interface.js.map

/***/ }),

/***/ "../../../../../src/app/registration/interfaces/registration-data/user-information-data.interface.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createDefaultUserInformationData; });
var createDefaultUserInformationData = function () { return ({
    name: null,
    password: null,
    type: 1
}); };
//# sourceMappingURL=user-information-data.interface.js.map

/***/ }),

/***/ "../../../../../src/app/registration/registration.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components__ = __webpack_require__("../../../../../src/app/registration/components/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var RegistrationModule = (function () {
    function RegistrationModule() {
    }
    return RegistrationModule;
}());
RegistrationModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["c" /* CommonModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__components__["a" /* SignInFormComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components__["b" /* SignInInputComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components__["c" /* UsernamePasswordComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components__["d" /* RegistrationHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components__["e" /* SignUpStylistFormComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components__["f" /* SignUpFormComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components__["g" /* SignupUserComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components__["h" /* SignupStylistComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__services__["c" /* StateService */]
        ]
    })
], RegistrationModule);

//# sourceMappingURL=registration.module.js.map

/***/ }),

/***/ "../../../../../src/app/registration/registration.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components__ = __webpack_require__("../../../../../src/app/registration/components/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return registrationRoutes; });

var registrationRoutes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_0__components__["a" /* SignInFormComponent */]
    },
    {
        path: 'signup',
        component: __WEBPACK_IMPORTED_MODULE_0__components__["f" /* SignUpFormComponent */]
    },
    {
        path: 'signupuser',
        component: __WEBPACK_IMPORTED_MODULE_0__components__["g" /* SignupUserComponent */]
    },
    {
        path: 'signupstylist',
        component: __WEBPACK_IMPORTED_MODULE_0__components__["h" /* SignupStylistComponent */]
    }
];
//# sourceMappingURL=registration.routes.js.map

/***/ }),

/***/ "../../../../../src/app/root/components/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__root__ = __webpack_require__("../../../../../src/app/root/components/root/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__root__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/root/components/root/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__root_component__ = __webpack_require__("../../../../../src/app/root/components/root/root.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__root_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/root/components/root/root.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/root/components/root/root.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/root/components/root/root.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RootComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RootComponent = (function () {
    function RootComponent() {
        this.title = 'app works!';
    }
    return RootComponent;
}());
RootComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/root/components/root/root.component.html"),
        styles: [__webpack_require__("../../../../../src/app/root/components/root/root.component.css")]
    })
], RootComponent);

//# sourceMappingURL=root.component.js.map

/***/ }),

/***/ "../../../../../src/app/root/root.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__root_routes__ = __webpack_require__("../../../../../src/app/root/root.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__registration_registration_module__ = __webpack_require__("../../../../../src/app/registration/registration.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__customer_customer_module__ = __webpack_require__("../../../../../src/app/customer/customer.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__stylist_stylist_module__ = __webpack_require__("../../../../../src/app/stylist/stylist.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_request_service__ = __webpack_require__("../../../../../src/app/services/request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components__ = __webpack_require__("../../../../../src/app/root/components/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RootModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var RootModule = (function () {
    function RootModule() {
    }
    return RootModule;
}());
RootModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_10__components__["a" /* RootComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__root_routes__["a" /* rootRoutes */]),
            __WEBPACK_IMPORTED_MODULE_6__registration_registration_module__["a" /* RegistrationModule */],
            __WEBPACK_IMPORTED_MODULE_7__customer_customer_module__["a" /* CustomerModule */],
            __WEBPACK_IMPORTED_MODULE_8__stylist_stylist_module__["a" /* StylistHomeModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_9__services_request_service__["a" /* RequestService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_10__components__["a" /* RootComponent */]]
    })
], RootModule);

//# sourceMappingURL=root.module.js.map

/***/ }),

/***/ "../../../../../src/app/root/root.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__registration_registration_routes__ = __webpack_require__("../../../../../src/app/registration/registration.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__customer_customer_routes__ = __webpack_require__("../../../../../src/app/customer/customer.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stylist_stylist_routes__ = __webpack_require__("../../../../../src/app/stylist/stylist.routes.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return rootRoutes; });



// import routes a module's routes file and deconstruct here
var rootRoutes = __WEBPACK_IMPORTED_MODULE_0__registration_registration_routes__["a" /* registrationRoutes */].concat(__WEBPACK_IMPORTED_MODULE_1__customer_customer_routes__["a" /* customerRoutes */], __WEBPACK_IMPORTED_MODULE_2__stylist_stylist_routes__["a" /* stylistRoutes */]);
//# sourceMappingURL=root.routes.js.map

/***/ }),

/***/ "../../../../../src/app/services/booking.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookingService = (function () {
    function BookingService(http) {
        this.http = http;
    }
    BookingService.prototype.addBooking = function (booking) {
        return this.http.post("/api/bookings", booking)
            .map(function (res) { return res; });
    };
    BookingService.prototype.fetchBookingsForStylist = function (id) {
        return this.http.get("/api/bookings/" + id)
            .map(function (res) { return res.json(); });
    };
    BookingService.prototype.fetchDueBookings = function (id) {
        return this.http.get("/api/bookings/complete/" + id)
            .map(function (res) { return res.json(); });
    };
    BookingService.prototype.confirmBooking = function (id) {
        return this.http.put("/api/bookings/" + id, id)
            .map(function (res) { return res.json(); });
    };
    BookingService.prototype.deleteBooking = function (id) {
        return this.http.delete("/api/bookings/" + id)
            .map(function (res) { return res; });
    };
    BookingService.prototype.completeBooking = function (id) {
        return this.http.put("/api/bookings/complete/" + id, id)
            .map(function (res) { return res.json(); });
    };
    return BookingService;
}());
BookingService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], BookingService);

var _a;
//# sourceMappingURL=booking.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/deletion.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeletionService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DeletionService = (function () {
    function DeletionService(http) {
        this.http = http;
    }
    DeletionService.prototype.deleteAccount = function (userId) {
        return this.http.delete("/user/" + userId);
    };
    return DeletionService;
}());
DeletionService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], DeletionService);

var _a;
//# sourceMappingURL=deletion.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__request_service__ = __webpack_require__("../../../../../src/app/services/request.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__request_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stripe_service__ = __webpack_require__("../../../../../src/app/services/stripe.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__stripe_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__location_service__ = __webpack_require__("../../../../../src/app/services/location.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_2__location_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stylist_service__ = __webpack_require__("../../../../../src/app/services/stylist.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_3__stylist_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__deletion_service__ = __webpack_require__("../../../../../src/app/services/deletion.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_4__deletion_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__booking_service__ = __webpack_require__("../../../../../src/app/services/booking.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_5__booking_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__message_service__ = __webpack_require__("../../../../../src/app/services/message.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_6__message_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__state_service__ = __webpack_require__("../../../../../src/app/services/state.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_7__state_service__["a"]; });








//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/services/location.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LocationService = (function () {
    function LocationService(http) {
        this.http = http;
    }
    // wraps the Geolocation API into an observable
    // returns an observable of Position
    LocationService.prototype.getCurrentPosition = function (lat, lng) {
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
            navigator.geolocation.getCurrentPosition(function (position) {
                observer.next(position);
                observer.complete();
            }, function (error) {
                console.log('Geolocation service: ' + error.message);
                observer.next({
                    coords: {
                        latitude: lat || 48.85777,
                        longitude: lng || 2.3528626,
                        accuracy: 50,
                        altitude: null,
                        altitudeAccuracy: null,
                        heading: null,
                        speed: null
                    },
                    timestamp: null
                });
                observer.complete();
            });
        });
    };
    LocationService.prototype.getCoordinatesFromLocation = function (location) {
        console.log('getCoordinatesForLocation arrived!');
        return this.http.get("/api/coordinates/" + location)
            .map(this.fetchData)
            .catch(this.handleError);
    };
    LocationService.prototype.getLocationFromCoordinates = function (lat, lng) {
        var latlng = String(lat || 48.8567696) + "," + String(lng || 2.3529625);
        console.log('LATLNG is:', latlng);
        return this.http.get("/api/streetaddress/" + latlng)
            .map(this.fetchData)
            .catch(this.handleError);
    };
    LocationService.prototype.fetchData = function (res) {
        var data = res.json();
        return data || {};
    };
    LocationService.prototype.handleError = function (error) {
        var errorMessage;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errorMessage = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errorMessage = error.message ? error.message : error.toString();
        }
        console.error(errorMessage);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errorMessage);
    };
    return LocationService;
}());
LocationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], LocationService);

var _a;
//# sourceMappingURL=location.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/message.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MessageService = (function () {
    function MessageService(http) {
        this.http = http;
    }
    MessageService.prototype.postMessage = function (message) {
        return this.http.post('/api/messages', message);
    };
    MessageService.prototype.getMessages = function (id) {
        var _this = this;
        return this.http.get("/api/messages/" + id)
            .map(function (res) { return _this.convertToArray(res.json()); });
    };
    MessageService.prototype.deleteChatHistory = function (ids) {
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ body: ids });
        return this.http.delete('/api/messages', requestOptions);
    };
    MessageService.prototype.convertToArray = function (obj) {
        return Object.keys(obj).map(function (key) { return obj[key]; });
    };
    return MessageService;
}());
MessageService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], MessageService);

var _a;
//# sourceMappingURL=message.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/request.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RequestService = (function () {
    function RequestService(http) {
        this.http = http;
    }
    RequestService.prototype.postLocation = function (location) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        return this.http.post('/location', location, { headers: headers });
    };
    RequestService.prototype.postStylist = function (stylist) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        return this.http.post('http://localhost:4200/api/userstylist', stylist, { headers: headers });
    };
    RequestService.prototype.getStyles = function () {
        return this.http.get("/api/stylistServices")
            .map(function (response) {
            return response.json();
        });
    };
    RequestService.prototype.getStylistById = function (id) {
        return this.http.get("/api/userStylist/" + id)
            .map(function (response) {
            return response.json();
        });
    };
    RequestService.prototype.getStylistByName = function (name, password) {
        return this.http.get("/api/validate/" + name + "/" + password)
            .map(function (response) {
            return response.json();
        });
    };
    RequestService.prototype.getStylistByLocation = function (location) {
        return this.http.get("/api/stylists/" + location)
            .map(function (response) {
            return response.json();
        });
    };
    return RequestService;
}());
RequestService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], RequestService);

var _a;
//# sourceMappingURL=request.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/state.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__message_service__ = __webpack_require__("../../../../../src/app/services/message.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var customerProfile;
var StateService = (function () {
    function StateService(messageService) {
        this.messageService = messageService;
    }
    StateService.prototype.addCustomer = function (stylist) {
        customerProfile = {
            billingaddress: stylist.billingaddress,
            email: stylist.email,
            gender: stylist.gender,
            id: stylist.id,
            image_url: stylist.image_url,
            latitude: stylist.latitude,
            longitude: stylist.longitude,
            name: stylist.name,
            password: stylist.password,
            phonenumber: stylist.phonenumber,
            site_url: stylist.site_url,
            type: stylist.type
        };
        this.messageService.getMessages(stylist.id)
            .subscribe(function (data) { return customerProfile.messages = data; }, function (err) { return console.log(err); });
    };
    StateService.prototype.retrieveCustomer = function () {
        return customerProfile;
    };
    return StateService;
}());
StateService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__message_service__["a" /* MessageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__message_service__["a" /* MessageService */]) === "function" && _a || Object])
], StateService);

var _a;
//# sourceMappingURL=state.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/stripe.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StripeService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StripeService = (function () {
    function StripeService(_http) {
        this._http = _http;
    }
    StripeService.prototype.postToken = function (token) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        return this._http.post('http://127.0.0.1:4200/api/stripe', { stripeToken: token }, { headers: headers })
            .map(function (res) { return res.json(); })
            .subscribe(function (data) { return data; });
    };
    return StripeService;
}());
StripeService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], StripeService);

var _a;
//# sourceMappingURL=stripe.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/stylist.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__location_service__ = __webpack_require__("../../../../../src/app/services/location.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StylistService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StylistService = (function () {
    function StylistService(http, locationService) {
        this.http = http;
        this.locationService = locationService;
        this.url = "/api/stylists/" + location;
    }
    StylistService.prototype.getStylistsInLocation = function (location) {
        return this.http.get("/api/stylists/" + location)
            .map(function (res) { return res.json(); });
    };
    return StylistService;
}());
StylistService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__location_service__["a" /* LocationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__location_service__["a" /* LocationService */]) === "function" && _b || Object])
], StylistService);

var _a, _b;
//# sourceMappingURL=stylist.service.js.map

/***/ }),

/***/ "../../../../../src/app/stylist/components/booking/booking.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"bookingInformation.isconfirmed===1\">\n  **color this div green, booking has been confirmed** {{bookingInformation.customer}} at time: {{bookingInformation.time}} at location: {{bookingInformation.location}}\n  <button (click)=\"completeBooking.emit(bookingInformation.id)\">Request Payment</button>\n</div>\n<div *ngIf=\"bookingInformation.isconfirmed===0\">\n  **color this div red, booking has not been confirmed**{{bookingInformation.customer}} at time: {{bookingInformation.time}} at location: {{bookingInformation.location}}\n  <button (click)=\"confirmBooking.emit(bookingInformation.id)\">Confirm this booking</button>\n  <button (click)=\"deleteBooking.emit(bookingInformation.id)\">Delete this booking</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/stylist/components/booking/booking.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interfaces__ = __webpack_require__("../../../../../src/app/stylist/interfaces/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BookingComponent = (function () {
    function BookingComponent() {
        this.confirmBooking = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.deleteBooking = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.completeBooking = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    return BookingComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__interfaces__["IBookingInformation"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__interfaces__["IBookingInformation"]) === "function" && _a || Object)
], BookingComponent.prototype, "bookingInformation", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], BookingComponent.prototype, "confirmBooking", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], BookingComponent.prototype, "deleteBooking", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], BookingComponent.prototype, "completeBooking", void 0);
BookingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'booking',
        template: __webpack_require__("../../../../../src/app/stylist/components/booking/booking.component.html")
    })
], BookingComponent);

var _a;
//# sourceMappingURL=booking.component.js.map

/***/ }),

/***/ "../../../../../src/app/stylist/components/booking/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__booking_component__ = __webpack_require__("../../../../../src/app/stylist/components/booking/booking.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__booking_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/stylist/components/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylist_home__ = __webpack_require__("../../../../../src/app/stylist/components/stylist-home/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__stylist_home__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__booking__ = __webpack_require__("../../../../../src/app/stylist/components/booking/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__booking__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/stylist/components/stylist-home/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylist_home_component__ = __webpack_require__("../../../../../src/app/stylist/components/stylist-home/stylist-home.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__stylist_home_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/stylist/components/stylist-home/stylist-home.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Hello world</h2>\n<customer-navbar></customer-navbar>\nBookings:\n<div *ngFor=\"let booking of bookings; let i = index;\">\n  <booking\n    [bookingInformation]=\"booking\"\n    (confirmBooking)=\"confirmBooking($event, i)\"\n    (deleteBooking)=\"deleteBooking($event, i)\"\n    (completeBooking)=\"completeBooking($event, i)\"\n  ></booking>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/stylist/components/stylist-home/stylist-home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services___ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StylistHomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StylistHomeComponent = (function () {
    function StylistHomeComponent(requestService, bookingService, stateService) {
        this.requestService = requestService;
        this.bookingService = bookingService;
        this.stateService = stateService;
        this.isProfileFetched = false;
    }
    StylistHomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.stylistProfile = this.stateService.retrieveCustomer();
        this.bookingService.fetchBookingsForStylist(this.stylistProfile.id)
            .subscribe(function (data) { return _this.bookings = data; }, function (err) { return console.log(err); }, function () { return _this.isProfileFetched = true; });
    };
    StylistHomeComponent.prototype.confirmBooking = function (id, index) {
        console.log('TODO: color this booking div green');
        this.bookingService.confirmBooking(id)
            .subscribe(function (result) { return console.log(result); }, function (err) { return console.log(err); });
    };
    StylistHomeComponent.prototype.deleteBooking = function (id, index) {
        this.bookings.splice(index, 1);
        this.bookingService.deleteBooking(id)
            .subscribe(function (result) { return console.log(result); }, function (err) { return console.log(err); });
    };
    StylistHomeComponent.prototype.completeBooking = function (id, index) {
        this.bookings.splice(index, 1);
        this.bookingService.completeBooking(id)
            .subscribe(function (result) { return console.log(result); }, function (err) { return console.log(err); });
    };
    return StylistHomeComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], StylistHomeComponent.prototype, "stylistProfile", void 0);
StylistHomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'stylist-home',
        template: __webpack_require__("../../../../../src/app/stylist/components/stylist-home/stylist-home.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services___["a" /* RequestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services___["a" /* RequestService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services___["b" /* BookingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services___["b" /* BookingService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services___["c" /* StateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services___["c" /* StateService */]) === "function" && _c || Object])
], StylistHomeComponent);

var _a, _b, _c;
//# sourceMappingURL=stylist-home.component.js.map

/***/ }),

/***/ "../../../../../src/app/stylist/interfaces/booking-information.interface.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=booking-information.interface.js.map

/***/ }),

/***/ "../../../../../src/app/stylist/interfaces/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__booking_information_interface__ = __webpack_require__("../../../../../src/app/stylist/interfaces/booking-information.interface.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__booking_information_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__booking_information_interface__);
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__booking_information_interface__, "IBookingInformation")) __webpack_require__.d(__webpack_exports__, "IBookingInformation", function() { return __WEBPACK_IMPORTED_MODULE_0__booking_information_interface__["IBookingInformation"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/stylist/stylist.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components__ = __webpack_require__("../../../../../src/app/stylist/components/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__customer_customer_module__ = __webpack_require__("../../../../../src/app/customer/customer.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StylistHomeModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var StylistHomeModule = (function () {
    function StylistHomeModule() {
    }
    return StylistHomeModule;
}());
StylistHomeModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__customer_customer_module__["a" /* CustomerModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__components__["a" /* StylistHomeComponent */],
            __WEBPACK_IMPORTED_MODULE_2__components__["b" /* BookingComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__services__["a" /* RequestService */],
            __WEBPACK_IMPORTED_MODULE_4__services__["b" /* BookingService */]
        ]
    })
], StylistHomeModule);

//# sourceMappingURL=stylist.module.js.map

/***/ }),

/***/ "../../../../../src/app/stylist/stylist.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components__ = __webpack_require__("../../../../../src/app/stylist/components/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return stylistRoutes; });

var stylistRoutes = [
    {
        path: 'stylisthome',
        component: __WEBPACK_IMPORTED_MODULE_0__components__["a" /* StylistHomeComponent */]
    }
];
//# sourceMappingURL=stylist.routes.js.map

/***/ }),

/***/ "../../../../../src/app/ui/payment/components/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__payment_input__ = __webpack_require__("../../../../../src/app/ui/payment/components/payment-input/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__payment_input__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/ui/payment/components/payment-input/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__payment_input_component__ = __webpack_require__("../../../../../src/app/ui/payment/components/payment-input/payment-input.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__payment_input_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/ui/payment/components/payment-input/payment-input.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentInputComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PaymentInputComponent = (function () {
    function PaymentInputComponent(stripeService) {
        this.stripeService = stripeService;
    }
    PaymentInputComponent.prototype.openCheckout = function () {
        var stripeService = this.stripeService;
        var handler = window.StripeCheckout.configure({
            key: 'pk_test_sQaWXln9tozJFEdLFrFHgNUU',
            locale: 'auto',
            token: function (token) {
                // You can access the token ID with `token.id`.
                // Get the token ID to your server-side code for use.
                stripeService.postToken(token.id);
            }
        });
        handler.open({
            name: 'Ding Dong It\'s Cut Time',
            description: "Payment method for: " + this.customerName,
            amount: 2000
        });
    };
    return PaymentInputComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], PaymentInputComponent.prototype, "customerName", void 0);
PaymentInputComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'payment-input',
        template: "<button (click)=\"openCheckout()\">Purchase</button>"
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services__["d" /* StripeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services__["d" /* StripeService */]) === "function" && _a || Object])
], PaymentInputComponent);

var _a;
//# sourceMappingURL=payment-input.component.js.map

/***/ }),

/***/ "../../../../../src/app/ui/payment/payment.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components__ = __webpack_require__("../../../../../src/app/ui/payment/components/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var PaymentModule = (function () {
    function PaymentModule() {
    }
    return PaymentModule;
}());
PaymentModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__components__["a" /* PaymentInputComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__components__["a" /* PaymentInputComponent */]
        ]
    })
], PaymentModule);

//# sourceMappingURL=payment.module.js.map

/***/ }),

/***/ "../../../../../src/app/ui/ui.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__payment_payment_module__ = __webpack_require__("../../../../../src/app/ui/payment/payment.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UiModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var UiModule = (function () {
    function UiModule() {
    }
    return UiModule;
}());
UiModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__payment_payment_module__["a" /* PaymentModule */]
        ]
    })
], UiModule);

//# sourceMappingURL=ui.module.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_root_root_module__ = __webpack_require__("../../../../../src/app/root/root.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_root_root_module__["a" /* RootModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map