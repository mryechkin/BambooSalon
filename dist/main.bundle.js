webpackJsonp([1,5],{

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppointmentsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppointmentsComponent = (function () {
    function AppointmentsComponent(dataService) {
        var _this = this;
        this.dataService = dataService;
        this.pageData = {};
        this.bookingData = {};
        this.dataService.getDataFromUrl('assets/data/appointments.json').subscribe(function (res) {
            _this.pageData = res;
        }, function (error) { return console.log('Error fetching page data: ' + error); });
        this.dataService.getDataFromUrl('assets/data/footer.json').subscribe(function (res) {
            _this.bookingData = res;
        }, function (error) { return console.log('Error fetching page data: ' + error); });
    }
    AppointmentsComponent.prototype.ngOnInit = function () {
    };
    return AppointmentsComponent;
}());
AppointmentsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-appointments',
        template: __webpack_require__(531),
        styles: [__webpack_require__(502)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _a || Object])
], AppointmentsComponent);

var _a;
//# sourceMappingURL=appointments.component.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactComponent = (function () {
    function ContactComponent(dataService) {
        var _this = this;
        this.dataService = dataService;
        this.pageData = {};
        this.position = [];
        this.dataService.getDataFromUrl('assets/data/contact.json').subscribe(function (res) {
            _this.pageData = res;
            if (_this.pageData) {
                _this.position = [_this.pageData.lat, _this.pageData.lng];
            }
        }, function (error) { return console.log('Error fetching page data: ' + error); });
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-contact',
        template: __webpack_require__(533),
        styles: [__webpack_require__(504)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _a || Object])
], ContactComponent);

var _a;
//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmploymentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EmploymentComponent = (function () {
    function EmploymentComponent() {
    }
    EmploymentComponent.prototype.ngOnInit = function () {
    };
    return EmploymentComponent;
}());
EmploymentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-employment',
        template: __webpack_require__(534),
        styles: [__webpack_require__(505)]
    }),
    __metadata("design:paramtypes", [])
], EmploymentComponent);

//# sourceMappingURL=employment.component.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FaqComponent = (function () {
    function FaqComponent(dataService) {
        var _this = this;
        this.dataService = dataService;
        this.pageData = {};
        this.dataService.getDataFromUrl('assets/data/faq.json').subscribe(function (res) {
            _this.pageData = res;
        }, function (error) { return console.log('Error fetching page data: ' + error); });
    }
    FaqComponent.prototype.ngOnInit = function () {
    };
    return FaqComponent;
}());
FaqComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-faq',
        template: __webpack_require__(535),
        styles: [__webpack_require__(506)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _a || Object])
], FaqComponent);

var _a;
//# sourceMappingURL=faq.component.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GalleryComponent = (function () {
    function GalleryComponent(dataService) {
        var _this = this;
        this.dataService = dataService;
        this.pageData = {};
        this.dataService.getDataFromUrl('assets/data/gallery.json').subscribe(function (res) {
            _this.pageData = res;
        }, function (error) { return console.log('Error fetching page data: ' + error); });
    }
    GalleryComponent.prototype.ngOnInit = function () {
    };
    return GalleryComponent;
}());
GalleryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-gallery',
        template: __webpack_require__(537),
        styles: [__webpack_require__(508)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _a || Object])
], GalleryComponent);

var _a;
//# sourceMappingURL=gallery.component.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(dataService) {
        var _this = this;
        this.dataService = dataService;
        this.pageData = {};
        this.bookingData = {};
        this.bannerSlidesConfig = {
            accessibility: false,
            arrows: false,
            autoplay: true,
            fade: true
        };
        this.reviewSlidesConfig = {
            arrows: false,
            autoplay: true,
            autoplaySpeed: 5000,
            dots: true
        };
        this.bannerSlides = [
            { img: 'assets/images/banner1.jpg' },
            { img: 'assets/images/banner2.jpg' },
            { img: 'assets/images/banner3.jpg' },
            { img: 'assets/images/banner4.jpg' },
            { img: 'assets/images/banner5.jpg' },
            { img: 'assets/images/banner6.jpg' },
            { img: 'assets/images/banner7.jpg' }
        ];
        this.dataService.getDataFromUrl('assets/data/home.json').subscribe(function (res) {
            _this.pageData = res;
        }, function (error) { return console.log('Error fetching page data: ' + error); });
        this.dataService.getDataFromUrl('assets/data/footer.json').subscribe(function (res) {
            _this.bookingData = res;
        }, function (error) { return console.log('Error fetching page data: ' + error); });
    }
    HomeComponent.prototype.ngOnInit = function () { };
    HomeComponent.prototype.Array = function (len) {
        return Array(len);
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(539),
        styles: [__webpack_require__(510)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductsComponent = (function () {
    function ProductsComponent(dataService) {
        var _this = this;
        this.dataService = dataService;
        this.pageData = {};
        this.bannerSlidesConfig = {
            accessibility: false,
            arrows: false,
            autoplay: true,
            fade: true
        };
        this.bannerSlides = [
            { img: 'assets/images/products1.jpg' },
            { img: 'assets/images/products2.jpg' },
            { img: 'assets/images/products3.jpg' }
        ];
        this.dataService.getDataFromUrl('assets/data/products.json').subscribe(function (res) {
            _this.pageData = res;
        }, function (error) { return console.log('Error fetching page data: ' + error); });
    }
    ProductsComponent.prototype.ngOnInit = function () {
    };
    return ProductsComponent;
}());
ProductsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-products',
        template: __webpack_require__(540),
        styles: [__webpack_require__(511)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _a || Object])
], ProductsComponent);

var _a;
//# sourceMappingURL=products.component.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ServicesComponent = (function () {
    function ServicesComponent(dataService) {
        var _this = this;
        this.dataService = dataService;
        this.pageData = {};
        this.dataService.getDataFromUrl('assets/data/services.json').subscribe(function (res) {
            _this.pageData = res;
        }, function (error) { return console.log('Error fetching page data: ' + error); });
    }
    ServicesComponent.prototype.ngOnInit = function () {
    };
    return ServicesComponent;
}());
ServicesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-services',
        template: __webpack_require__(541),
        styles: [__webpack_require__(512)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _a || Object])
], ServicesComponent);

var _a;
//# sourceMappingURL=services.component.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TeamComponent = (function () {
    function TeamComponent(dataService) {
        var _this = this;
        this.dataService = dataService;
        this.pageData = {};
        this.bannerSlidesConfig = {
            accessibility: false,
            arrows: false,
            autoplay: true,
            fade: true
        };
        this.bannerSlides = [
            { img: 'assets/images/team1.jpg' },
            { img: 'assets/images/team2.jpg' }
        ];
        this.dataService.getDataFromUrl('assets/data/team.json').subscribe(function (res) {
            _this.pageData = res;
        }, function (error) { return console.log('Error fetching page data: ' + error); });
    }
    TeamComponent.prototype.ngOnInit = function () {
    };
    return TeamComponent;
}());
TeamComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-team',
        template: __webpack_require__(542),
        styles: [__webpack_require__(513)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _a || Object])
], TeamComponent);

var _a;
//# sourceMappingURL=team.component.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThebaldbarberComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ThebaldbarberComponent = (function () {
    function ThebaldbarberComponent(dataService) {
        var _this = this;
        this.dataService = dataService;
        this.pageData = {};
        this.imagesLeft = [
            'assets/images/thebaldbarber/thebaldbarber1.jpg',
            'assets/images/thebaldbarber/thebaldbarber2.jpg',
            'assets/images/thebaldbarber/thebaldbarber3.jpg',
            'assets/images/thebaldbarber/thebaldbarber5.jpg'
        ];
        this.imagesRight = [
            'assets/images/thebaldbarber/thebaldbarber6.jpg',
            'assets/images/thebaldbarber/thebaldbarber7.jpg',
            'assets/images/thebaldbarber/thebaldbarber8.jpg',
            'assets/images/thebaldbarber/thebaldbarber9.jpg'
        ];
        this.dataService.getDataFromUrl('assets/data/thebaldbarber.json').subscribe(function (res) {
            _this.pageData = res;
        }, function (error) { return console.log('Error fetching page data: ' + error); });
    }
    ThebaldbarberComponent.prototype.ngOnInit = function () {
    };
    ThebaldbarberComponent.prototype.openLink = function (url) {
        window.open(url, '_blank');
        return false;
    };
    return ThebaldbarberComponent;
}());
ThebaldbarberComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-thebaldbarber',
        template: __webpack_require__(543),
        styles: [__webpack_require__(514)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _a || Object])
], ThebaldbarberComponent);

var _a;
//# sourceMappingURL=thebaldbarber.component.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrainingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TrainingComponent = (function () {
    function TrainingComponent() {
    }
    TrainingComponent.prototype.ngOnInit = function () {
    };
    return TrainingComponent;
}());
TrainingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-training',
        template: __webpack_require__(544),
        styles: [__webpack_require__(515)]
    }),
    __metadata("design:paramtypes", [])
], TrainingComponent);

//# sourceMappingURL=training.component.js.map

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DataService = (function () {
    function DataService(http) {
        var _this = this;
        this.http = http;
        this.getDataFromUrl = function (url) {
            return _this.http.get(url).map(function (res) { return res.json(); });
        };
    }
    return DataService;
}());
DataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], DataService);

var _a;
//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ 416:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 416;


/***/ }),

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(439);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__appointments_appointments_component__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contact_contact_component__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__employment_employment_component__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__faq_faq_component__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__gallery_gallery_component__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__products_products_component__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_services_component__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__team_team_component__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__thebaldbarber_thebaldbarber_component__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__training_training_component__ = __webpack_require__(133);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'appointments',
        component: __WEBPACK_IMPORTED_MODULE_2__appointments_appointments_component__["a" /* AppointmentsComponent */]
    },
    {
        path: 'contact',
        component: __WEBPACK_IMPORTED_MODULE_4__contact_contact_component__["a" /* ContactComponent */]
    },
    {
        path: 'employment',
        component: __WEBPACK_IMPORTED_MODULE_5__employment_employment_component__["a" /* EmploymentComponent */]
    },
    {
        path: 'faq',
        component: __WEBPACK_IMPORTED_MODULE_6__faq_faq_component__["a" /* FaqComponent */]
    },
    {
        path: 'gallery',
        component: __WEBPACK_IMPORTED_MODULE_7__gallery_gallery_component__["a" /* GalleryComponent */]
    },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'products',
        component: __WEBPACK_IMPORTED_MODULE_8__products_products_component__["a" /* ProductsComponent */]
    },
    {
        path: 'services',
        component: __WEBPACK_IMPORTED_MODULE_9__services_services_component__["a" /* ServicesComponent */]
    },
    {
        path: 'team',
        component: __WEBPACK_IMPORTED_MODULE_10__team_team_component__["a" /* TeamComponent */]
    },
    {
        path: 'thebaldbarber',
        component: __WEBPACK_IMPORTED_MODULE_11__thebaldbarber_thebaldbarber_component__["a" /* ThebaldbarberComponent */]
    },
    {
        path: 'training',
        component: __WEBPACK_IMPORTED_MODULE_12__training_training_component__["a" /* TrainingComponent */]
    },
    {
        path: '**',
        redirectTo: '/home'
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(122);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */])) {
                return;
            }
            window.scrollTo(0, 0);
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(530),
        styles: [__webpack_require__(501)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_slick__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_moment__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__data_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngui_map__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing_module__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_home_component__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__footer_footer_component__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__header_header_component__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__appointments_appointments_component__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__team_team_component__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__training_training_component__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__employment_employment_component__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_services_component__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__products_products_component__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__gallery_gallery_component__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__thebaldbarber_thebaldbarber_component__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__contact_contact_component__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__booking_booking_component__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__faq_faq_component__ = __webpack_require__(126);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_10__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_11__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_12__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_13__appointments_appointments_component__["a" /* AppointmentsComponent */],
            __WEBPACK_IMPORTED_MODULE_14__team_team_component__["a" /* TeamComponent */],
            __WEBPACK_IMPORTED_MODULE_15__training_training_component__["a" /* TrainingComponent */],
            __WEBPACK_IMPORTED_MODULE_16__employment_employment_component__["a" /* EmploymentComponent */],
            __WEBPACK_IMPORTED_MODULE_17__services_services_component__["a" /* ServicesComponent */],
            __WEBPACK_IMPORTED_MODULE_18__products_products_component__["a" /* ProductsComponent */],
            __WEBPACK_IMPORTED_MODULE_19__gallery_gallery_component__["a" /* GalleryComponent */],
            __WEBPACK_IMPORTED_MODULE_20__thebaldbarber_thebaldbarber_component__["a" /* ThebaldbarberComponent */],
            __WEBPACK_IMPORTED_MODULE_21__contact_contact_component__["a" /* ContactComponent */],
            __WEBPACK_IMPORTED_MODULE_22__booking_booking_component__["a" /* BookingComponent */],
            __WEBPACK_IMPORTED_MODULE_23__faq_faq_component__["a" /* FaqComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_8__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4_ngx_slick__["a" /* SlickModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_5_angular2_moment__["MomentModule"],
            __WEBPACK_IMPORTED_MODULE_7__ngui_map__["a" /* NguiMapModule */].forRoot({
                apiUrl: 'https://maps.google.com/maps/api/js?libraries=visualization,places,drawing'
            })
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__data_service__["a" /* DataService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__(19);
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
    function BookingComponent(dataService) {
        var _this = this;
        this.dataService = dataService;
        this.pageData = {};
        this.dataService.getDataFromUrl('assets/data/footer.json').subscribe(function (res) {
            _this.pageData = res;
        }, function (error) { return console.log('Error fetching page data: ' + error); });
    }
    BookingComponent.prototype.ngOnInit = function () {
    };
    BookingComponent.prototype.openLink = function (url) {
        window.open(url, '_blank');
        return false;
    };
    return BookingComponent;
}());
BookingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-booking',
        template: __webpack_require__(532),
        styles: [__webpack_require__(503)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _a || Object])
], BookingComponent);

var _a;
//# sourceMappingURL=booking.component.js.map

/***/ }),

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FooterComponent = (function () {
    function FooterComponent(dataService) {
        var _this = this;
        this.dataService = dataService;
        this.pageData = {};
        this.dataService.getDataFromUrl('assets/data/footer.json').subscribe(function (res) {
            _this.pageData = res;
        }, function (error) { return console.log('Error fetching page data: ' + error); });
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(536),
        styles: [__webpack_require__(507)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _a || Object])
], FooterComponent);

var _a;
//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ 438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(538),
        styles: [__webpack_require__(509)]
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ 439:
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

/***/ 501:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 502:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 503:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 504:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 505:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 506:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 507:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 508:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 509:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 510:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 511:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 512:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, ".service-name {\n  font-weight: 400; }\n\n.subtitle-note {\n  font-size: 1.1em; }\n\n.box {\n  margin-bottom: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 513:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 514:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, ".service-name {\n  font-size: 1.1em;\n  font-weight: 400; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 515:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 521:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 179,
	"./af.js": 179,
	"./ar": 186,
	"./ar-dz": 180,
	"./ar-dz.js": 180,
	"./ar-kw": 181,
	"./ar-kw.js": 181,
	"./ar-ly": 182,
	"./ar-ly.js": 182,
	"./ar-ma": 183,
	"./ar-ma.js": 183,
	"./ar-sa": 184,
	"./ar-sa.js": 184,
	"./ar-tn": 185,
	"./ar-tn.js": 185,
	"./ar.js": 186,
	"./az": 187,
	"./az.js": 187,
	"./be": 188,
	"./be.js": 188,
	"./bg": 189,
	"./bg.js": 189,
	"./bm": 190,
	"./bm.js": 190,
	"./bn": 191,
	"./bn.js": 191,
	"./bo": 192,
	"./bo.js": 192,
	"./br": 193,
	"./br.js": 193,
	"./bs": 194,
	"./bs.js": 194,
	"./ca": 195,
	"./ca.js": 195,
	"./cs": 196,
	"./cs.js": 196,
	"./cv": 197,
	"./cv.js": 197,
	"./cy": 198,
	"./cy.js": 198,
	"./da": 199,
	"./da.js": 199,
	"./de": 202,
	"./de-at": 200,
	"./de-at.js": 200,
	"./de-ch": 201,
	"./de-ch.js": 201,
	"./de.js": 202,
	"./dv": 203,
	"./dv.js": 203,
	"./el": 204,
	"./el.js": 204,
	"./en-SG": 205,
	"./en-SG.js": 205,
	"./en-au": 206,
	"./en-au.js": 206,
	"./en-ca": 207,
	"./en-ca.js": 207,
	"./en-gb": 208,
	"./en-gb.js": 208,
	"./en-ie": 209,
	"./en-ie.js": 209,
	"./en-il": 210,
	"./en-il.js": 210,
	"./en-nz": 211,
	"./en-nz.js": 211,
	"./eo": 212,
	"./eo.js": 212,
	"./es": 215,
	"./es-do": 213,
	"./es-do.js": 213,
	"./es-us": 214,
	"./es-us.js": 214,
	"./es.js": 215,
	"./et": 216,
	"./et.js": 216,
	"./eu": 217,
	"./eu.js": 217,
	"./fa": 218,
	"./fa.js": 218,
	"./fi": 219,
	"./fi.js": 219,
	"./fo": 220,
	"./fo.js": 220,
	"./fr": 223,
	"./fr-ca": 221,
	"./fr-ca.js": 221,
	"./fr-ch": 222,
	"./fr-ch.js": 222,
	"./fr.js": 223,
	"./fy": 224,
	"./fy.js": 224,
	"./ga": 225,
	"./ga.js": 225,
	"./gd": 226,
	"./gd.js": 226,
	"./gl": 227,
	"./gl.js": 227,
	"./gom-latn": 228,
	"./gom-latn.js": 228,
	"./gu": 229,
	"./gu.js": 229,
	"./he": 230,
	"./he.js": 230,
	"./hi": 231,
	"./hi.js": 231,
	"./hr": 232,
	"./hr.js": 232,
	"./hu": 233,
	"./hu.js": 233,
	"./hy-am": 234,
	"./hy-am.js": 234,
	"./id": 235,
	"./id.js": 235,
	"./is": 236,
	"./is.js": 236,
	"./it": 238,
	"./it-ch": 237,
	"./it-ch.js": 237,
	"./it.js": 238,
	"./ja": 239,
	"./ja.js": 239,
	"./jv": 240,
	"./jv.js": 240,
	"./ka": 241,
	"./ka.js": 241,
	"./kk": 242,
	"./kk.js": 242,
	"./km": 243,
	"./km.js": 243,
	"./kn": 244,
	"./kn.js": 244,
	"./ko": 245,
	"./ko.js": 245,
	"./ku": 246,
	"./ku.js": 246,
	"./ky": 247,
	"./ky.js": 247,
	"./lb": 248,
	"./lb.js": 248,
	"./lo": 249,
	"./lo.js": 249,
	"./lt": 250,
	"./lt.js": 250,
	"./lv": 251,
	"./lv.js": 251,
	"./me": 252,
	"./me.js": 252,
	"./mi": 253,
	"./mi.js": 253,
	"./mk": 254,
	"./mk.js": 254,
	"./ml": 255,
	"./ml.js": 255,
	"./mn": 256,
	"./mn.js": 256,
	"./mr": 257,
	"./mr.js": 257,
	"./ms": 259,
	"./ms-my": 258,
	"./ms-my.js": 258,
	"./ms.js": 259,
	"./mt": 260,
	"./mt.js": 260,
	"./my": 261,
	"./my.js": 261,
	"./nb": 262,
	"./nb.js": 262,
	"./ne": 263,
	"./ne.js": 263,
	"./nl": 265,
	"./nl-be": 264,
	"./nl-be.js": 264,
	"./nl.js": 265,
	"./nn": 266,
	"./nn.js": 266,
	"./pa-in": 267,
	"./pa-in.js": 267,
	"./pl": 268,
	"./pl.js": 268,
	"./pt": 270,
	"./pt-br": 269,
	"./pt-br.js": 269,
	"./pt.js": 270,
	"./ro": 271,
	"./ro.js": 271,
	"./ru": 272,
	"./ru.js": 272,
	"./sd": 273,
	"./sd.js": 273,
	"./se": 274,
	"./se.js": 274,
	"./si": 275,
	"./si.js": 275,
	"./sk": 276,
	"./sk.js": 276,
	"./sl": 277,
	"./sl.js": 277,
	"./sq": 278,
	"./sq.js": 278,
	"./sr": 280,
	"./sr-cyrl": 279,
	"./sr-cyrl.js": 279,
	"./sr.js": 280,
	"./ss": 281,
	"./ss.js": 281,
	"./sv": 282,
	"./sv.js": 282,
	"./sw": 283,
	"./sw.js": 283,
	"./ta": 284,
	"./ta.js": 284,
	"./te": 285,
	"./te.js": 285,
	"./tet": 286,
	"./tet.js": 286,
	"./tg": 287,
	"./tg.js": 287,
	"./th": 288,
	"./th.js": 288,
	"./tl-ph": 289,
	"./tl-ph.js": 289,
	"./tlh": 290,
	"./tlh.js": 290,
	"./tr": 291,
	"./tr.js": 291,
	"./tzl": 292,
	"./tzl.js": 292,
	"./tzm": 294,
	"./tzm-latn": 293,
	"./tzm-latn.js": 293,
	"./tzm.js": 294,
	"./ug-cn": 295,
	"./ug-cn.js": 295,
	"./uk": 296,
	"./uk.js": 296,
	"./ur": 297,
	"./ur.js": 297,
	"./uz": 299,
	"./uz-latn": 298,
	"./uz-latn.js": 298,
	"./uz.js": 299,
	"./vi": 300,
	"./vi.js": 300,
	"./x-pseudo": 301,
	"./x-pseudo.js": 301,
	"./yo": 302,
	"./yo.js": 302,
	"./zh-cn": 303,
	"./zh-cn.js": 303,
	"./zh-hk": 304,
	"./zh-hk.js": 304,
	"./zh-tw": 305,
	"./zh-tw.js": 305
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 521;


/***/ }),

/***/ 530:
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div id=\"wrapper\">\n  <router-outlet></router-outlet>\n  <app-booking></app-booking>\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ 531:
/***/ (function(module, exports) {

module.exports = "<section class=\"main style1\">\n  <header>\n    <h2>{{ pageData.title }}</h2>\n    <p>\n      <a href=\"{{ bookingData.scheduleAppointmentURL }}\" class=\"button special icon fa-calendar\">{{ bookingData.scheduleAppointmentButton }}</a>\n    </p>\n  </header>\n</section>\n\n<section class=\"main style1\">\n  <div class=\"inner\" *ngIf=\"pageData.sections && pageData.sections.length\">\n    <ng-container *ngFor=\"let section of pageData.sections; let i = index\" [attr.data-index]=\"i\">\n      <h3>{{ section.title }}</h3>\n      <p [innerHTML]=\"section.description\"></p>\n      <hr *ngIf=\"i < pageData.sections.length - 1\">\n    </ng-container>\n  </div>\n</section>"

/***/ }),

/***/ 532:
/***/ (function(module, exports) {

module.exports = "<!-- Section -->\n<section class=\"main style2 booking\">\n  <header class=\"small\">\n    <h2>{{ pageData.bookOnlineButtonText }}</h2>\n    <ul class=\"actions\">\n      <li>\n        <a href=\"{{ pageData.scheduleAppointmentURL }}\" class=\"button icon fa-check-circle\">{{ pageData.scheduleAppointmentButton }}</a>\n      </li>\n    </ul>\n  </header>\n  <footer>\n    <ul class=\"icons\">\n      <li><a (click)=\"openLink(pageData.facebookURL)\" href=\"#\" class=\"icon alt fa-facebook\"><span class=\"label\">Facebook</span></a></li>\n      <li><a (click)=\"openLink(pageData.instagramURL)\" href=\"#\" class=\"icon alt fa-instagram\"><span class=\"label\">Instagram</span></a></li>\n      <li><a href=\"{{pageData.phoneURL}}\" class=\"icon alt fa-phone\"><span class=\"label\">Phone</span></a></li>\n      <li><a href=\"{{pageData.emailURL}}\" class=\"icon alt fa-envelope\"><span class=\"label\">Email</span></a></li>\n    </ul>\n  </footer>\n</section>"

/***/ }),

/***/ 533:
/***/ (function(module, exports) {

module.exports = "<section class=\"main style1\">\n  <header>\n    <h2>{{ pageData.title }}</h2>\n    <p [innerHTML]=\"pageData.subtitle\"></p>\n  </header>\n  <footer>\n    <div class=\"row contact-info\">\n      <div class=\"col-xs-12 col-sm-4 text-center\">\n        <div class=\"icon alt fa-phone fa-lg accent4\"></div>\n        <div>{{ pageData.phone }}</div>\n      </div>\n      <div class=\"col-xs-12 col-sm-4 text-center\">\n        <div class=\"icon alt fa-map-marker fa-lg accent4\"></div>\n        <div [innerHTML]=\"pageData.address\"></div>\n      </div>\n      <div class=\"col-xs-12 col-sm-4 text-center\">\n        <div class=\"icon alt fa-envelope fa-lg accent4\"></div>\n        <div>{{ pageData.email }}</div>\n      </div>\n    </div>\n    <hr>\n    <ngui-map zoom=\"17\" center=\"{{ pageData.lat }}, {{ pageData.lng }}\">\n      <marker [position]=\"position\"></marker>\n    </ngui-map>\n  </footer>\n</section>"

/***/ }),

/***/ 534:
/***/ (function(module, exports) {

module.exports = "<p>\n  employment works!\n</p>\n"

/***/ }),

/***/ 535:
/***/ (function(module, exports) {

module.exports = "<section class=\"main style1\">\n  <header>\n    <h2>{{ pageData.title }}</h2>\n    <p>\n      <span class=\"icon fa-question-circle-o accent3 fa-2x\"></span>\n    </p>\n  </header>\n  <div class=\"inner\" *ngIf=\"pageData.questions && pageData.questions.length\">\n    <ng-container *ngFor=\"let q of pageData.questions; let i = index\" [attr.data-index]=\"i\">\n      <h4><span class=\"icon fa-question-circle accent3\"></span> {{ q.question }}</h4>\n      <p [innerHTML]=\"q.answer\"></p>\n      <hr *ngIf=\"i < pageData.questions.length - 1\">\n    </ng-container>\n  </div>\n</section>"

/***/ }),

/***/ 536:
/***/ (function(module, exports) {

module.exports = "<footer id=\"footer\">\n  {{ pageData.copyright }}\n</footer>"

/***/ }),

/***/ 537:
/***/ (function(module, exports) {

module.exports = "<section class=\"main style1\">\n  <header>\n    <h2>{{ pageData.title }}</h2>\n    <p>{{ pageData.subtitle }}</p>\n  </header>\n  <div class=\"inner\">\n    <div class=\"box alt\" *ngIf=\"pageData.gallery && pageData.gallery.length\">\n      <div class=\"col-xs-6 col-sm-4 col-lg-3\" *ngFor=\"let img of pageData.gallery\">\n        <span class=\"image fit\">\n          <a data-fancybox=\"gallery\" href=\"{{ img }}\"><img src=\"{{ img }}\"></a>\n        </span>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ 538:
/***/ (function(module, exports) {

module.exports = "<header id=\"header\">\n  <!-- Logo -->\n  <div class=\"logo\">\n    <a routerLink=\"home\">\n      <img src=\"assets/images/logo-circle-small.png\" border=\"0\"/> <img src=\"assets/images/logo-top.png\">\n    </a>\n  </div>\n  <!-- Nav -->\n  <nav id=\"nav\">\n    <ul>\n      <li routerLinkActive=\"current\"><a routerLink=\"appointments\">Appointments</a></li>\n      <li routerLinkActive=\"current\"><a routerLink=\"team\">Our Team</a></li>\n      <!-- <li>\n        <a href=\"#\" class=\"icon fa-angle-down\">About Us</a>\n        <ul>\n          <li><a routerLink=\"team\">Our Team</a></li>\n          <li><a routerLink=\"training\">Stylist Training</a></li>\n          <li><a routerLink=\"employment\">Employment</a></li>\n        </ul>\n      </li> -->\n      <li routerLinkActive=\"current\">\n        <a href=\"#\" class=\"icon fa-angle-down\">Services</a>\n        <ul>\n          <li><a routerLink=\"services\">Our Services</a></li>\n          <li><a routerLink=\"faq\">FAQ</a></li>\n        </ul>\n      </li> \n      <li routerLinkActive=\"current\"><a routerLink=\"products\">Products</a></li>\n      <li routerLinkActive=\"current\"><a routerLink=\"gallery\">Gallery</a></li>\n      <li routerLinkActive=\"current\"><a routerLink=\"thebaldbarber\">The Bald Barber</a></li>\n      <li routerLinkActive=\"current\"><a routerLink=\"contact\">Contact</a></li>\n    </ul>\n  </nav>\n</header>"

/***/ }),

/***/ 539:
/***/ (function(module, exports) {

module.exports = "<!-- Banner -->\n<section class=\"main style1\">\n  <ngx-slick class=\"image\" [config]=\"bannerSlidesConfig\">\n    <img ngxSlickItem *ngFor=\"let slide of bannerSlides\" src=\"{{ slide.img }}\" alt=\"\" />\n  </ngx-slick>\n  <header class=\"intro\">\n    <h2>{{ pageData.introTitle }}</h2>\n    <div>\n      <img class=\"separator\" src=\"assets/images/logo-bottom.png\" border=\"0\" />\n    </div>\n    <p>{{ pageData.introText }}</p>\n  </header>\n  <footer>\n    <ul class=\"actions\">\n      <li>\n        <a href=\"{{ bookingData.scheduleAppointmentURL }}\" class=\"button special icon fa-calendar\">{{ bookingData.scheduleAppointmentButton }}</a>\n      </li>\n    </ul>\n  </footer>\n</section>\n\n<!-- Services -->\n<section class=\"main style1\" *ngIf=\"pageData.services && pageData.services.length\">\n  <div class=\"inner\">\n    <header class=\"small\">\n      <h3 class=\"text-center\">{{ pageData.servicesTitle }}</h3>\n    </header>\n  </div>\n  <div class=\"features\">\n    <section *ngFor=\"let service of pageData.services\">\n      <span class=\"icon {{ service.icon }} major {{ service.class }}\"></span>\n      <h3>{{ service.title }}</h3>\n      <p>{{ service.description }}</p>\n    </section>\n  </div>\n  <footer>\n    <ul class=\"actions\">\n      <li><a routerLink=\"/services\" class=\"button special next\">{{ pageData.servicesButtonText }}</a></li>\n    </ul>\n  </footer>\n</section>\n\n<!-- Reviews -->\n<section class=\"main style1\" *ngIf=\"pageData.reviews && pageData.reviews.length\">\n  <div class=\"inner\">\n    <header class=\"small\">\n      <h3 class=\"text-center\">{{ pageData.reviewsTitle }}</h3>\n    </header>\n    <hr>\n    <ngx-slick [config]=\"reviewSlidesConfig\">\n      <div ngxSlickItem *ngFor=\"let review of pageData.reviews\">\n        <header>\n          <h4>{{ review.name }}</h4>\n          <p>\n            <span class=\"icon fa-star accent5\" *ngFor=\"let i of Array(review.rating).fill(1)\"></span>\n            <span class=\"review-date\">{{ review.date | amTimeAgo }}</span>\n          </p>\n        </header>\n        <p>{{ review.text }}</p>\n      </div>\n    </ngx-slick>\n  </div>\n</section>"

/***/ }),

/***/ 540:
/***/ (function(module, exports) {

module.exports = "<section class=\"main style1\">\n  <header>\n    <h2>{{ pageData.title }}</h2>\n  </header>\n  <ngx-slick class=\"image\" data-position=\"center\" [config]=\"bannerSlidesConfig\">\n    <img ngxSlickItem *ngFor=\"let slide of bannerSlides\" src=\"{{ slide.img }}\" alt=\"\" />\n  </ngx-slick>\n  <div class=\"inner\" *ngIf=\"pageData.products && pageData.products.length\">\n    <ng-container *ngFor=\"let product of pageData.products; let i = index\" [attr.data-index]=\"i\">\n      <h3>{{ product.name }}</h3>\n      <p [innerHTML]=\"product.description\"></p>\n      <hr *ngIf=\"i < pageData.products.length - 1\">\n    </ng-container>\n  </div>\n</section>\n\n<section class=\"main style1\">\n  <div class=\"inner\" *ngIf=\"pageData.note\">\n    <h4><span class=\"icon fa-asterisk accent1\"></span> Please Note</h4>\n    <div class=\"box\">\n      <p [innerHTML]=\"pageData.note\"></p>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ 541:
/***/ (function(module, exports) {

module.exports = "<section class=\"main style1\">\n  <header class=\"small\">\n    <h2>{{ pageData.title }}</h2>\n    <p [innerHTML]=\"pageData.subtitle\"></p>\n    <div class=\"box\">\n      <p class=\"subtitle-note\" [innerHTML]=\"pageData.subtitleNote\"></p>\n    </div>\n  </header>\n  <div class=\"inner\" *ngIf=\"pageData.services && pageData.services.length\">\n    <div class=\"row\">\n      <div class=\"col-xs-12 col-sm-4 col-md-4 text-center\">\n        <h5>Tier 1</h5>\n        <p class=\"no-bottom-margin\">\n          {{ pageData.tier1.join(', ')}}\n        </p>\n      </div>\n      <div class=\"col-xs-12 col-sm-4 col-md-4 text-center\">\n        <h5>Tier 2</h5>\n        <p class=\"no-bottom-margin\">\n          {{ pageData.tier2.join(', ')}}\n        </p>\n      </div>\n      <div class=\"col-xs-12 col-sm-4 col-md-4 text-center\">\n        <h5>Tier 3</h5>\n        <p class=\"no-bottom-margin\">\n          {{ pageData.tier3.join(', ')}}\n        </p>\n      </div>\n      <!-- <div class=\"col-xs-12 col-sm-6 col-md-3 text-center\">\n        <h5>Tier 4 (Senior)</h5>\n        <p class=\"no-bottom-margin\">\n          {{ pageData.tier4.join(', ')}}\n        </p>\n      </div> -->\n    </div>\n    <hr>\n    <div class=\"table-wrapper\">\n      <table>\n        <thead>\n          <th>Service</th>\n          <th>Tier 1 ($)</th>\n          <th>Tier 2 ($)</th>\n          <th>Tier 3 ($)</th>\n          <!-- <th>Tier 4 ($)</th> -->\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let service of pageData.services\">\n            <td class=\"service-name\">{{ service.name }}</td>\n            <td>{{ service.price1 || '-' }}</td>\n            <td>{{ service.price2 || '-' }}</td>\n            <td>{{ service.price3 || '-' }}</td>\n            <!-- <td>{{ service.price4 || '-'}}</td> -->\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <div class=\"box\" *ngIf=\"pageData.hst\">\n      <p>{{ pageData.hst }}</p>\n    </div>\n  </div>\n</section>\n\n<section class=\"main style1\">\n  <div class=\"inner\" *ngIf=\"pageData.note\">\n    <h4><span class=\"icon fa-asterisk accent1\"></span> Please Note</h4>\n    <div class=\"box\">\n      <p [innerHTML]=\"pageData.note\"></p>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ 542:
/***/ (function(module, exports) {

module.exports = "<section class=\"main style1\">\n  <header>\n    <h2>{{ pageData.title }}</h2>\n    <p>{{ pageData.intro }}</p>\n  </header>\n  <ngx-slick class=\"image\" data-position=\"center\" [config]=\"bannerSlidesConfig\">\n    <img ngxSlickItem *ngFor=\"let slide of bannerSlides\" src=\"{{ slide.img }}\" alt=\"\" />\n  </ngx-slick>\n  <div class=\"inner\">\n    <blockquote>\n      {{ pageData.quote }}\n    </blockquote>\n    <hr>\n    <div class=\"posts\" *ngIf=\"pageData && pageData.team && pageData.team.length\">\n      <article *ngFor=\"let member of pageData.team\">\n        <a class=\"image\">\n          <img src=\"{{ member.imageUrl }}\" border=\"0\"/>\n        </a>\n        <header>\n          <h3>{{ member.name }}</h3>\n          <p>{{ member.title }}</p>\n        </header>\n        <p *ngIf=\"member.logoUrl\" class=\"team-logo\">\n          <img src=\"{{ member.logoUrl }}\" border=\"0\" />\n        </p>\n        <p [innerHTML]=\"member.bio\"></p>\n      </article>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ 543:
/***/ (function(module, exports) {

module.exports = "<section class=\"main style1\">\n  <header>\n    <h2>{{ pageData.title }}</h2>\n    <p>\n      <img src=\"assets/images/thebaldbarber-white.jpg\" border=\"0\" />\n    </p>\n  </header>\n  <div class=\"inner\">\n\n    <div class=\"row\">\n      <div class=\"col-xs-12 col-md-4 col-md-push-4\">\n        <div class=\"table-wrapper\">\n          <table>\n            <thead>\n              <th>Service</th>\n              <th>Price ($)</th>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let service of pageData.services\">\n                <td>\n                  <div class=\"service-name\">{{ service.name }}</div>\n                  <div *ngIf=\"service.duration\">Duration: {{ service.duration }}</div>\n                </td>\n                <td>{{ service.price || '-' }}</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n\n      <div class=\"col-xs-12 col-md-4 col-md-pull-4\">\n        <div class=\"box alt\" *ngIf=\"imagesLeft && imagesLeft.length\">\n          <div class=\"row\">\n            <div class=\"col-xs-6 col-sm-3 col-md-6\" *ngFor=\"let imageSrc of imagesLeft\">\n              <span class=\"image fit\">\n                <img src=\"{{ imageSrc }}\" />\n              </span>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-xs-12 col-md-4\">\n        <div class=\"box alt\" *ngIf=\"imagesRight && imagesRight.length\">\n          <div class=\"row\">\n            <div class=\"col-xs-6 col-sm-3 col-md-6\" *ngFor=\"let imageSrc of imagesRight\">\n              <span class=\"image fit\">\n                <img src=\"{{ imageSrc }}\" />\n              </span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <hr>\n    <div class=\"text-center ig-label\">\n      <a (click)=\"openLink('https://www.instagram.com/thebaldbarber_kw')\" href=\"#\" class=\"icon alt fa-instagram fa-lg accent2\">\n        <span class=\"label\">Instagram</span>\n      </a>\n      <em>thebaldbarber_kw</em>\n    </div>\n    <hr>\n\n  </div>\n</section>"

/***/ }),

/***/ 544:
/***/ (function(module, exports) {

module.exports = "<p>\n  training works!\n</p>\n"

/***/ }),

/***/ 834:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(417);


/***/ })

},[834]);
//# sourceMappingURL=main.bundle.js.map