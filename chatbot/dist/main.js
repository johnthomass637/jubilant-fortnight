(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/chat-input/chat-input.component.css":
/*!*****************************************************!*\
  !*** ./src/app/chat-input/chat-input.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full-width {\n  width: 100%;\n  color: #3f51c0;\n  position: relative;\n}\n\n.sendIcon {\n  height: 22px;\n  position: absolute;\n  right: 5px;\n  bottom: 32px;\n}\n\n.available {\n  opacity: 1;\n  cursor: pointer;\n}\n\n.unavailable {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n\n.startRecIcon {\n  height: 35px;\n  position: absolute;\n  right: 38px;\n  bottom: 25px;\n  cursor: pointer;\n}\n\n.stopRecIcon {\n  height: 35px;\n  position: absolute;\n  right: 38px;\n  bottom: 25px;\n  cursor: pointer;\n}\n"

/***/ }),

/***/ "./src/app/chat-input/chat-input.component.html":
/*!******************************************************!*\
  !*** ./src/app/chat-input/chat-input.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"full-width\">\n  <mat-form-field class=\"full-width\">\n    <input\n      #input\n      matInput\n      placeholder=\"{{ placeHolderText }}\"\n      [(ngModel)]=\"finalTranscript\"\n      (keydown.enter)=\"sendMessage()\"\n      (ngModelChange)=\"onInput($event)\"\n    />\n  </mat-form-field>\n  <img\n    class=\"sendIcon\"\n    src=\"./assets/image/SendBtn.png\"\n    (click)=\"sendMessage()\"\n    [ngClass]=\"{ unavailable: sendIsDisabled, available: !sendIsDisabled }\"\n  />\n  <img\n    *ngIf=\"!recognizing\"\n    class=\"startRecIcon\"\n    src=\"./assets/image/MicrophoneBtn.png\"\n    (click)=\"startRecording($event)\"\n  />\n  <img\n    *ngIf=\"recognizing\"\n    class=\"stopRecIcon\"\n    src=\"./assets/image/StopBtn.png\"\n    (click)=\"startRecording($event)\"\n  />\n</div>\n"

/***/ }),

/***/ "./src/app/chat-input/chat-input.component.ts":
/*!****************************************************!*\
  !*** ./src/app/chat-input/chat-input.component.ts ***!
  \****************************************************/
/*! exports provided: ChatInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatInputComponent", function() { return ChatInputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_speech_recognizer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/speech-recognizer.service */ "./src/app/services/speech-recognizer.service.ts");
/* harmony import */ var _model_speech_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/speech-error */ "./src/app/model/speech-error.ts");
/* harmony import */ var _services_speech_synthesizer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/speech-synthesizer.service */ "./src/app/services/speech-synthesizer.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChatInputComponent = /** @class */ (function () {
    function ChatInputComponent(changeDetector, speechRecognizer, speechSynthesizer) {
        this.changeDetector = changeDetector;
        this.speechRecognizer = speechRecognizer;
        this.speechSynthesizer = speechSynthesizer;
        this.recognizing = false;
        this.finalTranscript = 'Hi';
        this.placeHolderText = '';
        this.inputHasText = true;
        this.sendIsDisabled = false;
        this.msgToRoot = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ChatInputComponent.prototype.ngOnInit = function () {
        this.speechRecognizer.initialize('en-US');
        this.initRecognition();
        this.initSynthesize();
    };
    ChatInputComponent.prototype.startRecording = function (event) {
        if (this.recognizing) {
            this.speechRecognizer.stop();
            return;
        }
        this.speechRecognizer.start(event.timeStamp);
    };
    ChatInputComponent.prototype.initRecognition = function () {
        var _this = this;
        this.speechRecognizer.onStart().subscribe(function (data) {
            _this.placeHolderText = 'Listening ...';
            _this.recognizing = true;
            _this.detectChanges();
        });
        this.speechRecognizer.onEnd().subscribe(function (data) {
            _this.placeHolderText = '';
            _this.recognizing = false;
            _this.detectChanges();
        });
        this.speechRecognizer.onResult().subscribe(function (data) {
            var message = data.content.trim();
            if (data.info === 'final_transcript' && message.length > 0) {
                _this.placeHolderText = '';
                _this.finalTranscript = message;
                _this.onInput(message);
                _this.detectChanges();
            }
        });
        this.speechRecognizer.onError().subscribe(function (data) {
            switch (data.error) {
                case _model_speech_error__WEBPACK_IMPORTED_MODULE_2__["SpeechError"].BLOCKED:
                case _model_speech_error__WEBPACK_IMPORTED_MODULE_2__["SpeechError"].NOT_ALLOWED:
                    console.log("Cannot run the demo.\n            Your browser is not authorized to access your microphone. Verify that your browser has access to your microphone and try again.\n            ");
                    break;
                case _model_speech_error__WEBPACK_IMPORTED_MODULE_2__["SpeechError"].NO_SPEECH:
                    console.log("No speech has been detected. Please try again.");
                    break;
                case _model_speech_error__WEBPACK_IMPORTED_MODULE_2__["SpeechError"].NO_MICROPHONE:
                    console.log("Microphone is not available. Plese verify the connection of your microphone and try again.");
                    break;
                default:
                    break;
            }
            _this.recognizing = false;
            _this.detectChanges();
        });
    };
    ChatInputComponent.prototype.initSynthesize = function () {
        this.speechSynthesizer.initSynthesis();
    };
    ChatInputComponent.prototype.sendMessage = function () {
        if (this.finalTranscript === '') {
            return false;
        }
        this.msgToRoot.emit(this.finalTranscript);
        this.finalTranscript = '';
        this.sendIsDisabled = true;
    };
    ChatInputComponent.prototype.onInput = function (event) {
        var passedString = event;
        if (/\S/.test(passedString)) {
            this.sendIsDisabled = false;
        }
        else {
            this.sendIsDisabled = true;
        }
    };
    ChatInputComponent.prototype.detectChanges = function () {
        this.changeDetector.detectChanges();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ChatInputComponent.prototype, "msgToRoot", void 0);
    ChatInputComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'chat-input',
            template: __webpack_require__(/*! ./chat-input.component.html */ "./src/app/chat-input/chat-input.component.html"),
            styles: [__webpack_require__(/*! ./chat-input.component.css */ "./src/app/chat-input/chat-input.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _services_speech_recognizer_service__WEBPACK_IMPORTED_MODULE_1__["SpeechRecognizerService"],
            _services_speech_synthesizer_service__WEBPACK_IMPORTED_MODULE_3__["SpeechSynthesizerService"]])
    ], ChatInputComponent);
    return ChatInputComponent;
}());



/***/ }),

/***/ "./src/app/chat-msg/chat-msg.component.css":
/*!*************************************************!*\
  !*** ./src/app/chat-msg/chat-msg.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".msg {\n  display: -webkit-box;\n  display: flex;\n  position: relative;\n  margin-right: 40px;\n  margin-bottom: 2px;\n  margin-bottom: 2px;\n  margin-left: 10px;\n  margin-top: 5px;\n  opacity: 0;\n  -webkit-transform: scale(0.5);\n          transform: scale(0.5);\n  -webkit-transition-property: opacity,-webkit-transform;\n  transition-property: opacity,-webkit-transform;\n  transition-property: transform,opacity;\n  transition-property: transform,opacity,-webkit-transform;\n  -webkit-transition-duration: 0.5s;\n          transition-duration: 0.5s;\n  -webkit-transition-timing-function: ease-in;\n          transition-timing-function: ease-in;\n}\n\n.show {\n  -webkit-transform: scale(1);\n          transform: scale(1);\n  opacity:1;\n}\n\n.card {\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  border-radius: 10px 20px 0px 20px;\n  padding: 10px 25px;\n  -webkit-box-pack: center;\n          justify-content: center;\n  text-align: center;\n}\n\n.icon {\n  margin-top: 10px;\n  color: white;\n  background: #3f51c0;\n  border-radius: 35px;\n  width: 35px !important;\n  height: 35px !important;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  padding: 0px;\n  -webkit-box-align: center;\n          align-items: center;\n  position: absolute;\n  z-index: 1;\n  margin-left: -35px;\n}\n\n.user {\n  background-color: #3f51c0;\n  color: white;\n}\n\n.bot {\n  min-width: 216px;\n  border-radius: 20px 10px 20px 0px;\n  background-color: white;\n  color: #5ea9f0;\n}\n\n.user-msg {\n  margin-left: 40px;\n  margin-right: 10px;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n          flex-direction: row-reverse;\n}\n\n.button-left {\n  float: left;\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\n.button-center {\n  width: 150px;\n}\n\nbutton:disabled {\n  cursor: not-allowed;\n}\n"

/***/ }),

/***/ "./src/app/chat-msg/chat-msg.component.html":
/*!**************************************************!*\
  !*** ./src/app/chat-msg/chat-msg.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngSwitch]=\"msg.sendBy\">\n  <div *ngSwitchCase=\"'bot'\" class=\"msg\" [class.show]=\"isVisible\">\n    <mat-card class=\"card bot\">\n      <mat-card class=\"icon\">\n        <i class=\"material-icons\">\n          android\n        </i>\n      </mat-card>\n      <mat-card-content>\n        {{msg.text}}\n      </mat-card-content>\n      <mat-card-content *ngFor=\"let option of msg.options\">\n        <button\n          mat-raised-button\n          color=\"primary\"\n\t\t  [ngClass]=\"{\n            'button-center': msg.options.length > 2,\n            'button-left': msg.options.length == 2\n          }\"\n          (click)=\"sendBtnMsg(option)\"\n          [disabled]=\"!isBtnEnable\"\n        >\n          {{ option }}\n        </button>\n      </mat-card-content>\n    </mat-card>\n  </div>\n  <div *ngSwitchCase=\"'user'\" class=\"msg user-msg\" [class.show]=\"isVisible\">\n    <mat-card class=\"card user\">\n      <mat-card-content>\n        {{msg.text}}\n      </mat-card-content>\n    </mat-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/chat-msg/chat-msg.component.ts":
/*!************************************************!*\
  !*** ./src/app/chat-msg/chat-msg.component.ts ***!
  \************************************************/
/*! exports provided: ChatMsgComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatMsgComponent", function() { return ChatMsgComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChatMsgComponent = /** @class */ (function () {
    function ChatMsgComponent() {
        this.msgToWindow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isVisible = false;
    }
    ChatMsgComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isBtnEnable = true;
        setTimeout(function () {
            _this.isVisible = true;
        }, 0);
    };
    ChatMsgComponent.prototype.sendBtnMsg = function (msg) {
        this.isBtnEnable = false;
        this.msgToWindow.emit(msg);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ChatMsgComponent.prototype, "msg", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ChatMsgComponent.prototype, "msgToWindow", void 0);
    ChatMsgComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'chat-msg',
            template: __webpack_require__(/*! ./chat-msg.component.html */ "./src/app/chat-msg/chat-msg.component.html"),
            styles: [__webpack_require__(/*! ./chat-msg.component.css */ "./src/app/chat-msg/chat-msg.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ChatMsgComponent);
    return ChatMsgComponent;
}());



/***/ }),

/***/ "./src/app/chat-window/chat-window.component.css":
/*!*******************************************************!*\
  !*** ./src/app/chat-window/chat-window.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chat-window {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  width: 100%;\n  /* background-color: #d219192e; */\n  padding: 5px;\n}\n\n.msgArea {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  overflow: auto;\n  height: 100%;\n}\n\n.input-area {\n  display: -webkit-box;\n  display: flex;\n  width: 100%;\n}\n"

/***/ }),

/***/ "./src/app/chat-window/chat-window.component.html":
/*!********************************************************!*\
  !*** ./src/app/chat-window/chat-window.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"chat-window\">\n  <ng-container  [ngTemplateOutlet]=\"template\">\n    <div class=\"msgArea\" #msgArea>\n      <ng-container\n        *ngFor=\"let msg of allMessages | async; let i = index\"\n        [ngTemplateOutlet]=\"defaultMsgTemplate\"\n        [ngTemplateOutletContext]=\"{\n                                       text: msg.content ,\n          sendBy: msg.sendBy,\n          options: msg.options\n                                    }\"\n      >\n\n      </ng-container>\n    </div>\n    <div class=\"input-area\">\n      <ng-container\n        class=\"input-area\"\n        [ngTemplateOutlet]=\"inputTemplate\"\n      ></ng-container>\n    </div>\n  </ng-container>\n</mat-card>\n\n<ng-template\n  #defaultMsgTemplate\n  let-text=\"text\"\n  let-object=\"object\"\n  let-sendBy=\"sendBy\"\n  let-options=\"options\"\n>\n  <chat-msg\n    [msg]=\"{ text: text, sendBy: sendBy, options: options }\"\n    (msgToWindow)=\"msgFromChatMsgBtn($event)\"\n  ></chat-msg>\n</ng-template>\n\n<ng-template #defaultInputTemplate>\n  <chat-input (change)=\"onChange($event.target)\"></chat-input>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/chat-window/chat-window.component.ts":
/*!******************************************************!*\
  !*** ./src/app/chat-window/chat-window.component.ts ***!
  \******************************************************/
/*! exports provided: ChatWindowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatWindowComponent", function() { return ChatWindowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChatWindowComponent = /** @class */ (function () {
    function ChatWindowComponent(dataService) {
        this.dataService = dataService;
        this.onMsgReceive = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ChatWindowComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.msgTemplate = this.msgTemplate
            ? this.msgTemplate
            : this.defaultMsgTemplate;
        this.inputTemplate = this.inputTemplate
            ? this.inputTemplate
            : this.defaultInputTemplate;
        this.dataService.init(this.serviceid);
        this.allMessages = this.dataService.conversation.asObservable().pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["scan"])(function (acc, val) {
            setTimeout(function () {
                _this.msgArea.nativeElement.scrollTop = _this.msgArea.nativeElement.scrollHeight;
            });
            if (_services_data_service__WEBPACK_IMPORTED_MODULE_2__["ESendBy"].bot === val[0].sendBy) {
                _this.onMsgReceive.emit(val[0].content);
            }
            return acc.concat(val);
        }));
        this.msg.subscribe(function (msg) {
            _this.dataService.converse(msg);
        });
    };
    ChatWindowComponent.prototype.onChange = function (target) {
        this.sendMsg(target.value);
        target.value = '';
    };
    ChatWindowComponent.prototype.sendMsg = function (msg) {
        this.msg.next(msg);
    };
    ChatWindowComponent.prototype.msgFromChatMsgBtn = function (msg) {
        this.sendMsg(msg);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], ChatWindowComponent.prototype, "template", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], ChatWindowComponent.prototype, "msgTemplate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], ChatWindowComponent.prototype, "inputTemplate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"])
    ], ChatWindowComponent.prototype, "msg", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ChatWindowComponent.prototype, "serviceid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ChatWindowComponent.prototype, "onMsgReceive", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('msgArea'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ChatWindowComponent.prototype, "msgArea", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('defaultMsgTemplate'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], ChatWindowComponent.prototype, "defaultMsgTemplate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('defaultInputTemplate'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], ChatWindowComponent.prototype, "defaultInputTemplate", void 0);
    ChatWindowComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'Chat-bot',
            template: __webpack_require__(/*! ./chat-window.component.html */ "./src/app/chat-window/chat-window.component.html"),
            styles: [__webpack_require__(/*! ./chat-window.component.css */ "./src/app/chat-window/chat-window.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], ChatWindowComponent);
    return ChatWindowComponent;
}());



/***/ }),

/***/ "./src/app/client/ApiAiClient.ts":
/*!***************************************!*\
  !*** ./src/app/client/ApiAiClient.ts ***!
  \***************************************/
/*! exports provided: ApiAiConstants, ApiAiClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiAiClient", function() { return ApiAiClient; });
/* harmony import */ var _ApiAiConstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ApiAiConstants */ "./src/app/client/ApiAiConstants.ts");
/* harmony import */ var _TextRequest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TextRequest */ "./src/app/client/TextRequest.ts");
/* harmony import */ var _Errors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Errors */ "./src/app/client/Errors.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApiAiConstants", function() { return _ApiAiConstants__WEBPACK_IMPORTED_MODULE_0__["ApiAiConstants"]; });





var ApiAiClient = /** @class */ (function () {
    function ApiAiClient(options) {
        if (!options || !options.serviceid) {
            throw new _Errors__WEBPACK_IMPORTED_MODULE_2__["ApiAiClientConfigurationError"]('Service ID is required for new ApiAi.Client instance');
        }
        this.serviceid = options.serviceid;
        // this.apiLang = options.lang || ApiAiConstants.DEFAULT_CLIENT_LANG;
        // this.apiVersion = options.version || ApiAiConstants.DEFAULT_API_VERSION;
        this.apiBaseUrl = options.baseUrl || _ApiAiConstants__WEBPACK_IMPORTED_MODULE_0__["ApiAiConstants"].DEFAULT_BASE_URL;
        this.session = options.session;
    }
    ApiAiClient.prototype.textRequest = function (request, options) {
        if (options === void 0) { options = {}; }
        if (!request) {
            throw new _Errors__WEBPACK_IMPORTED_MODULE_2__["ApiAiClientConfigurationError"]('Request should not be empty');
        }
        options.request = request;
        return new _TextRequest__WEBPACK_IMPORTED_MODULE_1__["default"](this, options).perform();
    };
    ApiAiClient.prototype.getAccessToken = function () {
        return this.serviceid;
    };
    // public getApiVersion(): string {
    //     return (this.apiVersion) ? this.apiVersion : ApiAiConstants.DEFAULT_API_VERSION;
    // }
    // public getApiLang(): ApiAiConstants.AVAILABLE_LANGUAGES {
    //     return (this.apiLang) ? this.apiLang : ApiAiConstants.DEFAULT_CLIENT_LANG;
    // }
    ApiAiClient.prototype.getApiBaseUrl = function () {
        return this.apiBaseUrl ? this.apiBaseUrl : _ApiAiConstants__WEBPACK_IMPORTED_MODULE_0__["ApiAiConstants"].DEFAULT_BASE_URL;
    };
    ApiAiClient.prototype.setSession = function (sessionId) {
        this.session = sessionId;
    };
    ApiAiClient.prototype.getSession = function () {
        return this.session;
    };
    return ApiAiClient;
}());



/***/ }),

/***/ "./src/app/client/ApiAiConstants.ts":
/*!******************************************!*\
  !*** ./src/app/client/ApiAiConstants.ts ***!
  \******************************************/
/*! exports provided: ApiAiConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiAiConstants", function() { return ApiAiConstants; });
var ApiAiConstants;
(function (ApiAiConstants) {
    var AVAILABLE_LANGUAGES;
    (function (AVAILABLE_LANGUAGES) {
        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES["EN"] = 'en'] = "EN";
        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES["DE"] = 'de'] = "DE";
        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES["ES"] = 'es'] = "ES";
        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES["PT_BR"] = 'pt-BR'] = "PT_BR";
        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES["ZH_HK"] = 'zh-HK'] = "ZH_HK";
        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES["ZH_CN"] = 'zh-CN'] = "ZH_CN";
        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES["ZH_TW"] = 'zh-TW'] = "ZH_TW";
        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES["NL"] = 'nl'] = "NL";
        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES["FR"] = 'fr'] = "FR";
        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES["IT"] = 'it'] = "IT";
        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES["JA"] = 'ja'] = "JA";
        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES["KO"] = 'ko'] = "KO";
        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES["PT"] = 'pt'] = "PT";
        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES["RU"] = 'ru'] = "RU";
        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES["UK"] = 'uk'] = "UK";
    })(AVAILABLE_LANGUAGES = ApiAiConstants.AVAILABLE_LANGUAGES || (ApiAiConstants.AVAILABLE_LANGUAGES = {}));
    // export const DEFAULT_BASE_URL: string = "https://api.dialogflow.com/v1/";
    ApiAiConstants.DEFAULT_BASE_URL = 'http://ice-xd.southindia.cloudapp.azure.com:14121/api/conversation/master/dialogue';
    ApiAiConstants.DEFAULT_API_VERSION = '20150910';
    ApiAiConstants.DEFAULT_CLIENT_LANG = AVAILABLE_LANGUAGES.EN;
})(ApiAiConstants || (ApiAiConstants = {}));


/***/ }),

/***/ "./src/app/client/Errors.ts":
/*!**********************************!*\
  !*** ./src/app/client/Errors.ts ***!
  \**********************************/
/*! exports provided: ApiAiBaseError, ApiAiClientConfigurationError, ApiAiRequestError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiAiBaseError", function() { return ApiAiBaseError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiAiClientConfigurationError", function() { return ApiAiClientConfigurationError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiAiRequestError", function() { return ApiAiRequestError; });
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ApiAiBaseError = /** @class */ (function (_super) {
    __extends(ApiAiBaseError, _super);
    function ApiAiBaseError(message) {
        var _this = _super.call(this, message) || this;
        _this.message = message;
        _this.stack = new Error().stack;
        return _this;
    }
    return ApiAiBaseError;
}(Error));

var ApiAiClientConfigurationError = /** @class */ (function (_super) {
    __extends(ApiAiClientConfigurationError, _super);
    function ApiAiClientConfigurationError(message) {
        var _this = _super.call(this, message) || this;
        _this.name = "ApiAiClientConfigurationError";
        return _this;
    }
    return ApiAiClientConfigurationError;
}(ApiAiBaseError));

var ApiAiRequestError = /** @class */ (function (_super) {
    __extends(ApiAiRequestError, _super);
    function ApiAiRequestError(message, code) {
        if (code === void 0) { code = null; }
        var _this = _super.call(this, message) || this;
        _this.message = message;
        _this.code = code;
        _this.name = "ApiAiRequestError";
        return _this;
    }
    return ApiAiRequestError;
}(ApiAiBaseError));



/***/ }),

/***/ "./src/app/client/Request.ts":
/*!***********************************!*\
  !*** ./src/app/client/Request.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Errors */ "./src/app/client/Errors.ts");
/* harmony import */ var _XhrRequest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./XhrRequest */ "./src/app/client/XhrRequest.ts");


var Request = /** @class */ (function () {
    // protected headers;
    function Request(apiAiClient, options) {
        this.apiAiClient = apiAiClient;
        this.options = options;
        this.uri = this.apiAiClient.getApiBaseUrl();
        this.requestMethod = _XhrRequest__WEBPACK_IMPORTED_MODULE_1__["default"].Method.POST;
        // this.headers = {
        //   Authorization: "Bearer " + this.apiAiClient.getAccessToken(),
        // };
        // this.options.lang = this.apiAiClient.getApiLang();
        this.options.serviceid = this.apiAiClient.getAccessToken();
        this.options.session = this.apiAiClient.getSession();
    }
    Request.handleSuccess = function (xhr) {
        return Promise.resolve(JSON.parse(xhr.responseText));
    };
    Request.handleError = function (xhr) {
        var error = new _Errors__WEBPACK_IMPORTED_MODULE_0__["ApiAiRequestError"](null);
        try {
            var serverResponse = JSON.parse(xhr.responseText);
            if (serverResponse.status && serverResponse.status.errorDetails) {
                error = new _Errors__WEBPACK_IMPORTED_MODULE_0__["ApiAiRequestError"](serverResponse.status.errorDetails, serverResponse.status.code);
            }
            else {
                error = new _Errors__WEBPACK_IMPORTED_MODULE_0__["ApiAiRequestError"](xhr.statusText, xhr.status);
            }
        }
        catch (e) {
            error = new _Errors__WEBPACK_IMPORTED_MODULE_0__["ApiAiRequestError"](xhr.statusText, xhr.status);
        }
        return Promise.reject(error);
    };
    Request.prototype.perform = function (overrideOptions) {
        if (overrideOptions === void 0) { overrideOptions = null; }
        var options = overrideOptions ? overrideOptions : this.options;
        return _XhrRequest__WEBPACK_IMPORTED_MODULE_1__["default"].ajax(this.requestMethod, this.uri, options)
            .then(Request.handleSuccess.bind(this))
            .catch(Request.handleError.bind(this));
    };
    return Request;
}());
/* harmony default export */ __webpack_exports__["default"] = (Request);


/***/ }),

/***/ "./src/app/client/TextRequest.ts":
/*!***************************************!*\
  !*** ./src/app/client/TextRequest.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Request */ "./src/app/client/Request.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var TextRequest = /** @class */ (function (_super) {
    __extends(TextRequest, _super);
    function TextRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return TextRequest;
}(_Request__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (TextRequest);


/***/ }),

/***/ "./src/app/client/XhrRequest.ts":
/*!**************************************!*\
  !*** ./src/app/client/XhrRequest.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var XhrRequest = /** @class */ (function () {
    function XhrRequest() {
    }
    // Method that performs the ajax request
    XhrRequest.ajax = function (method, url, args, headers, options) {
        if (args === void 0) { args = null; }
        if (headers === void 0) { headers = null; }
        if (options === void 0) { options = {}; }
        // Creating a promise
        return new Promise(function (resolve, reject) {
            // Instantiates the XMLHttpRequest
            var client = XhrRequest.createXMLHTTPObject();
            var uri = url;
            var payload = null;
            // Add given payload to get request
            if (args && (method === XhrRequest.Method.GET)) {
                uri += "?";
                var argcount = 0;
                for (var key in args) {
                    if (args.hasOwnProperty(key)) {
                        if (argcount++) {
                            uri += "&";
                        }
                        uri += encodeURIComponent(key) + "=" + encodeURIComponent(args[key]);
                    }
                }
            }
            else if (args) {
                if (!headers) {
                    headers = {};
                }
                headers["Content-Type"] = "application/json; charset=utf-8";
                payload = JSON.stringify(args);
            }
            for (var key in options) {
                if (key in client) {
                    client[key] = options[key];
                }
            }
            // hack: method[method] is somewhat like .toString for enum Method
            // should be made in normal way
            client.open(XhrRequest.Method[method], uri, true);
            // Add given headers
            if (headers) {
                for (var key in headers) {
                    if (headers.hasOwnProperty(key)) {
                        client.setRequestHeader(key, headers[key]);
                    }
                }
            }
            payload ? client.send(payload) : client.send();
            client.onload = function () {
                if (client.status >= 200 && client.status < 300) {
                    // Performs the function "resolve" when this.status is equal to 2xx
                    resolve(client);
                }
                else {
                    // Performs the function "reject" when this.status is different than 2xx
                    reject(client);
                }
            };
            client.onerror = function () {
                reject(client);
            };
        });
    };
    XhrRequest.get = function (url, payload, headers, options) {
        if (payload === void 0) { payload = null; }
        if (headers === void 0) { headers = null; }
        if (options === void 0) { options = {}; }
        return XhrRequest.ajax(XhrRequest.Method.GET, url, payload, headers, options);
    };
    XhrRequest.post = function (url, payload, headers, options) {
        if (payload === void 0) { payload = null; }
        if (headers === void 0) { headers = null; }
        if (options === void 0) { options = {}; }
        return XhrRequest.ajax(XhrRequest.Method.POST, url, payload, headers, options);
    };
    XhrRequest.put = function (url, payload, headers, options) {
        if (payload === void 0) { payload = null; }
        if (headers === void 0) { headers = null; }
        if (options === void 0) { options = {}; }
        return XhrRequest.ajax(XhrRequest.Method.PUT, url, payload, headers, options);
    };
    XhrRequest.delete = function (url, payload, headers, options) {
        if (payload === void 0) { payload = null; }
        if (headers === void 0) { headers = null; }
        if (options === void 0) { options = {}; }
        return XhrRequest.ajax(XhrRequest.Method.DELETE, url, payload, headers, options);
    };
    XhrRequest.createXMLHTTPObject = function () {
        var xmlhttp = null;
        for (var _i = 0, _a = XhrRequest.XMLHttpFactories; _i < _a.length; _i++) {
            var i = _a[_i];
            try {
                xmlhttp = i();
            }
            catch (e) {
                continue;
            }
            break;
        }
        return xmlhttp;
    };
    XhrRequest.XMLHttpFactories = [
        function () { return new XMLHttpRequest(); },
        function () { return new window["ActiveXObject"]("Msxml2.XMLHTTP"); },
        function () { return new window["ActiveXObject"]("Msxml3.XMLHTTP"); },
        function () { return new window["ActiveXObject"]("Microsoft.XMLHTTP"); }
    ];
    return XhrRequest;
}());
(function (XhrRequest) {
    var Method;
    (function (Method) {
        Method[Method["GET"] = "GET"] = "GET";
        Method[Method["POST"] = "POST"] = "POST";
        Method[Method["PUT"] = "PUT"] = "PUT";
        Method[Method["DELETE"] = "DELETE"] = "DELETE";
    })(Method = XhrRequest.Method || (XhrRequest.Method = {}));
})(XhrRequest || (XhrRequest = {}));
/* harmony default export */ __webpack_exports__["default"] = (XhrRequest);


/***/ }),

/***/ "./src/app/model/speech-error.ts":
/*!***************************************!*\
  !*** ./src/app/model/speech-error.ts ***!
  \***************************************/
/*! exports provided: SpeechError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeechError", function() { return SpeechError; });
var SpeechError;
(function (SpeechError) {
    SpeechError[SpeechError["NO_SPEECH"] = 0] = "NO_SPEECH";
    SpeechError[SpeechError["NO_MICROPHONE"] = 1] = "NO_MICROPHONE";
    SpeechError[SpeechError["NOT_ALLOWED"] = 2] = "NOT_ALLOWED";
    SpeechError[SpeechError["BLOCKED"] = 3] = "BLOCKED";
})(SpeechError || (SpeechError = {}));


/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: Message, ESendBy, DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return Message; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ESendBy", function() { return ESendBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _client_ApiAiClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../client/ApiAiClient */ "./src/app/client/ApiAiClient.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _speech_synthesizer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./speech-synthesizer.service */ "./src/app/services/speech-synthesizer.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Ai api Client

// RxJs modules


var Message = /** @class */ (function () {
    function Message(content, sendBy, options) {
        this.content = content;
        this.sendBy = sendBy;
        this.options = options;
    }
    return Message;
}());

var ESendBy;
(function (ESendBy) {
    ESendBy["user"] = "user";
    ESendBy["bot"] = "bot";
})(ESendBy || (ESendBy = {}));
var DataService = /** @class */ (function () {
    function DataService(speechSynthesizer) {
        this.speechSynthesizer = speechSynthesizer;
        this.conversation = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
    }
    DataService.prototype.converse = function (msg) {
        var _this = this;
        if (!isNaN(Number(msg.replace(/ /g, ''))) || msg.indexOf('/') > -1) {
            msg = msg.replace(/ /g, '');
        }
        var userMessage = new Message(msg, ESendBy.user, []);
        this.update(userMessage);
        return this.client.textRequest(msg).then(function (res) {
            var speech = res.response;
            var options = res.options;
            if (speech[0].indexOf('Anthem Bot') > -1) {
                options = ['Case creation', 'Case status inquiry', 'HRS Assessment'];
            }
            _this.speechSynthesizer.speak(speech, 'en-US');
            _this.client.setSession(res.session);
            var botMessage = new Message(speech, ESendBy.bot, options);
            _this.update(botMessage);
        });
    };
    DataService.prototype.update = function (msg) {
        this.conversation.next([msg]);
    };
    DataService.prototype.init = function (serviceid) {
        this.client = new _client_ApiAiClient__WEBPACK_IMPORTED_MODULE_1__["ApiAiClient"]({ serviceid: serviceid, session: null });
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_speech_synthesizer_service__WEBPACK_IMPORTED_MODULE_3__["SpeechSynthesizerService"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/services/speech-recognizer.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/speech-recognizer.service.ts ***!
  \*******************************************************/
/*! exports provided: SpeechRecognizerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeechRecognizerService", function() { return SpeechRecognizerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _model_speech_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/speech-error */ "./src/app/model/speech-error.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var webkitSpeechRecognition = window.webkitSpeechRecognition;
var SpeechRecognizerService = /** @class */ (function () {
    function SpeechRecognizerService() {
    }
    SpeechRecognizerService.prototype.initialize = function (language) {
        this.recognition = new webkitSpeechRecognition();
        this.recognition.continuous = true;
        this.recognition.interimResults = true;
        this.recognition.lang = language;
        this.recognition.continuous = true;
        this.recognition.interimResults = true;
    };
    SpeechRecognizerService.prototype.setLanguage = function (language) {
        this.recognition.lang = language;
    };
    SpeechRecognizerService.prototype.start = function (timestamp) {
        this.startTimestamp = timestamp;
        this.recognition.start();
    };
    SpeechRecognizerService.prototype.onStart = function () {
        var _this = this;
        if (!this.recognition) {
            this.initialize(this.language);
        }
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this.recognition.onstart = function () {
                console.log('started');
                observer.next({
                    info: 'info_speak_now'
                });
            };
        });
    };
    SpeechRecognizerService.prototype.onEnd = function () {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this.recognition.onend = function () {
                if (_this.ignoreOnEnd) {
                    return;
                }
                console.log('ended');
                observer.next({
                    info: 'info_start'
                });
            };
        });
    };
    SpeechRecognizerService.prototype.onResult = function () {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this.recognition.onresult = function (event) {
                var interimTranscript = '';
                var finalTranscript = '';
                for (var i = event.resultIndex; i < event.results.length; ++i) {
                    if (event.results[i].isFinal) {
                        finalTranscript += event.results[i][0].transcript;
                    }
                    else {
                        interimTranscript += event.results[i][0].transcript;
                    }
                }
                observer.next({
                    info: 'final_transcript',
                    content: finalTranscript
                });
                observer.next({
                    info: 'interim_transcript',
                    content: interimTranscript
                });
            };
        });
    };
    SpeechRecognizerService.prototype.onError = function () {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this.recognition.onerror = function (event) {
                var result;
                if (event.error === 'no-speech') {
                    result = _model_speech_error__WEBPACK_IMPORTED_MODULE_2__["SpeechError"].NO_SPEECH;
                    _this.ignoreOnEnd = true;
                }
                if (event.error === 'audio-capture') {
                    result = _model_speech_error__WEBPACK_IMPORTED_MODULE_2__["SpeechError"].NO_MICROPHONE;
                    _this.ignoreOnEnd = true;
                }
                if (event.error === 'not-allowed') {
                    if (event.timeStamp - _this.startTimestamp < 100) {
                        result = _model_speech_error__WEBPACK_IMPORTED_MODULE_2__["SpeechError"].BLOCKED;
                    }
                    else {
                        result = _model_speech_error__WEBPACK_IMPORTED_MODULE_2__["SpeechError"].NOT_ALLOWED;
                    }
                    _this.ignoreOnEnd = true;
                }
                observer.next({
                    error: result
                });
            };
        });
    };
    SpeechRecognizerService.prototype.stop = function () {
        this.recognition.stop();
    };
    SpeechRecognizerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], SpeechRecognizerService);
    return SpeechRecognizerService;
}());



/***/ }),

/***/ "./src/app/services/speech-synthesizer.service.ts":
/*!********************************************************!*\
  !*** ./src/app/services/speech-synthesizer.service.ts ***!
  \********************************************************/
/*! exports provided: SpeechSynthesizerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeechSynthesizerService", function() { return SpeechSynthesizerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SpeechSynthesizerService = /** @class */ (function () {
    function SpeechSynthesizerService() {
        this.initSynthesis();
    }
    SpeechSynthesizerService.prototype.initSynthesis = function () {
        this.message = new SpeechSynthesisUtterance();
        this.message.volume = 1;
        this.message.rate = 1;
        this.message.pitch = 0.2;
    };
    SpeechSynthesizerService.prototype.speak = function (message, language) {
        this.message.lang = language;
        this.message.text = message;
        speechSynthesis.speak(this.message);
    };
    SpeechSynthesizerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], SpeechSynthesizerService);
    return SpeechSynthesizerService;
}());



/***/ }),

/***/ "./src/demo/app.component.css":
/*!************************************!*\
  !*** ./src/demo/app.component.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .chat-window {\n  display: flex;\n  min-height: 500px;\n  max-height: 500px;\n  width: 100%;\n  border: 10px solid;\n  border-color: #3496eb;\n  width: 100%;\n}\n\n.container {\n  display: flex;\n  height: 200px;\n  width: 100px;\n}\n\n.message {\n  display: flex;\n  border-radius: 50px;\n  justify-content: center;\n  align-items: center;\n  padding: 5px 10px;\n}\n\n\n.maindiv{\n  width:100%;\n  height:300px;\n}\n\n.leftdiv {\n  position: absolute;\n  width:50%;\n  height:auto;\n  left: 0;\n  overflow-x: hidden;\n  z-index:   1;\n\n}\n.rightdiv {\n  position: absolute;\n  width: 42%;\n  padding-right: 39px;\n  margin-top: 30px;\n  margin-bottom: 50px;\n  height: auto;\n  right: 0;\n}\n\n.logo {\npadding-left:170px;\nheight : 53px;\nwidth: 25px;\n}\n\n.leftimg2 {\n  padding: 10px;\n \n}\n.image1{\npadding: 10px;\n}\n\n.image2{\n  padding-left: 10px;\n  height: 133px;\n}\n.image3{\n  height: 53px;\n}\n\n\n\n\n */\n\n .maindiv{\n  width:100%;\n  height:300px;\n}\n\n .leftdiv {\n  position: absolute;\n  width:50%;\n  height:auto;\n  left: 0;\n  overflow-x: hidden;\n  z-index:   1;\n\n}\n\n /* .rightdiv {\n  position: absolute;\n  width:50%;\n  height:auto; \n  right: 0;\n  padding-right:10%;\n  border-radius: 2%;\n  margin-right: 20px;\n\n} */\n\n .leftimg1 {\n\n  /* width: 10%; */\n  height: 10%;\n  padding-top: 05%;\n  /* padding-left:35%; */\n  padding-left: 10px;\n}\n\n .imageClass{\n  width: 35%;\n  float: left;\n  padding-top: 35px;\n  \n}\n\n .imageClass1{\n  width:65%;\n  float: right;\n  \n}\n\n .leftimg2 {\n  padding: 10px;\n  display: block;\n  margin: 0 auto; \n}\n\n .paragraphRight{\n  padding-top: 120px;\n  padding-left: 40%;\n  text-align: justify;\n  color: #909090;\n  font-family: \"SF Pro Display\";\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 18px;\n  /* Text style for \"Lorem Ipsu\" */\n  font-family: Helvetica;\n  font-weight: 400;\n}\n\n .paragraphDown{\n  padding-top: 30px;\n  padding-left: 30px;\n  text-align: justify;\n  color: #909090;\n  font-family: \"SF Pro Display\";\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 18px;\n  /* Text style for \"Lorem Ipsu\" */\n  font-family: Helvetica;\n  font-weight: 400;\n}\n\n .rightimg1{\n  padding-left: 30px;\n\n}\n\n .rightdiv {\n  position: absolute;\n  width:50%;\n  height:auto; \n  right: 0;\n  padding-right:10%;\n  border-radius: 2%;\n  margin-right: 20px;\n}\n\n .image3{\n   width: 35%;\n  float: left;\n  padding-top: 35px;\n  /* padding-left: 30px; */\n}\n\n .chat-window {\n  display: -webkit-box;\n  display: flex;\n  min-height: 450px;\n  max-height: 500px;\n  width: 100%;\n  border: 14px solid;\n  border-color: #2574bf;\n  border-radius: 20px;\n  width: 100%;\n}\n\n .container {\n  display: -webkit-box;\n  display: flex;\n  height: 200px;\n  width: 100px;\n}\n\n .message {\n  display: -webkit-box;\n  display: flex;\n  border-radius: 50px;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 5px 10px;\n}"

/***/ }),

/***/ "./src/demo/app.component.html":
/*!*************************************!*\
  !*** ./src/demo/app.component.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<script></script>\n\n<div class=\"maindiv\">\n  <div class=\"leftdiv\">\n    <h1></h1>\n    <div class=\"leftimg1\">\n      <img class=\"imageClass\" src=\"./assets/image/98-layers.png\" />\n      <div>\n        <img class=\"imageClass1\" src=\"./assets/image/43-layers.png\" />\n        <div class=\"paragraphRight\">\n          The Anthem Health Care Management Division has a singular dynamic\n          focus - to continually improve the system of health care delivery that\n          influences utilization and cost of services and measures performance.\n          Medical Management includes a collection of processes that help to\n          optimize the cost of quality care by effectively facilitating the\n          right care interventions to the right members, at the right time, and\n          in the right setting.\n        </div>\n      </div>\n      <div class=\"paragraphDown\">\n        <p>\n          Utilization Management (UM) is a process that allows Anthem to manage\n          the cost of health care benefits by assessing its appropriateness\n          before it is provided, by using evidence-based criteria or\n          guidelines.<br />\n        </p>\n        <p>\n          Pre- authorization review which is done as part of UM requests by\n          providers/practitioners of benefits are reviewed by Anthem registered\n          nurses to determine if requests meet applicable benefit coverage and\n          Anthem medical policy criteria.<br />\n        </p>\n        <p>\n          While both Payer(Anthem) and Provider(Physicians) want to give good\n          care for the patients, the providers have incentive to prescribe\n          arguably redundant treatment to avoid future questioning and even\n          mal-practice suits. On the other hand, the payer would like to pay\n          only for the treatments that are necessary. This tradeoff is where the\n          UM (Utilization management) system comes in.\n        </p>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"rightdiv\" style=\"width:33%;height:500px;\">\n    <div class=\"rightimg1\">\n      <img class=\"image3\" src=\"./assets/image/16-layers.png\" />\n    </div>\n    <Chat-bot\n      class=\"chat-window\"\n      [serviceid]=\"\n        '0AwytEuZlWShosO28uNtibIvw9onUxxN8lBLPpLuYIqBD5uu0j7QxZWkrpN0sJxD'\n      \"\n      [msg]=\"msg\"\n      [msgTemplate]=\"message\"\n      [inputTemplate]=\"input\"\n      (onMsgReceive)=\"onMsgReceive($event)\"\n    >\n      <ng-template #window> </ng-template>\n    </Chat-bot>\n\n    <ng-template\n      #message\n      let-text=\"text\"\n      let-object=\"object\"\n      let-sendBy=\"sendBy\"\n      let-options=\"options\"\n    >\n      <chat-msg\n        [msg]=\"{ text: text, sendBy: sendBy, options: options }\"\n      ></chat-msg>\n    </ng-template>\n    <ng-template #input>\n      <chat-input (msgToRoot)=\"msgFromChatInput($event)\"></chat-input>\n    </ng-template>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/demo/app.component.ts":
/*!***********************************!*\
  !*** ./src/demo/app.component.ts ***!
  \***********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
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
    function AppComponent() {
        this.msg = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.msgArray = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]();
    }
    AppComponent.prototype.msgFromChatInput = function (message) {
        this.msg.next(message);
    };
    AppComponent.prototype.onMsgReceive = function (msg) { };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/demo/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/demo/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/demo/app.module.ts":
/*!********************************!*\
  !*** ./src/demo/app.module.ts ***!
  \********************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/demo/app.component.ts");
/* harmony import */ var _app_chat_window_chat_window_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/chat-window/chat-window.component */ "./src/app/chat-window/chat-window.component.ts");
/* harmony import */ var _app_chat_msg_chat_msg_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app/chat-msg/chat-msg.component */ "./src/app/chat-msg/chat-msg.component.ts");
/* harmony import */ var _app_chat_input_chat_input_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app/chat-input/chat-input.component */ "./src/app/chat-input/chat-input.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_speech_recognizer_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/speech-recognizer.service */ "./src/app/services/speech-recognizer.service.ts");
/* harmony import */ var src_app_services_speech_synthesizer_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/speech-synthesizer.service */ "./src/app/services/speech-synthesizer.service.ts");
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
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _app_chat_window_chat_window_component__WEBPACK_IMPORTED_MODULE_3__["ChatWindowComponent"],
                _app_chat_msg_chat_msg_component__WEBPACK_IMPORTED_MODULE_4__["ChatMsgComponent"],
                _app_chat_input_chat_input_component__WEBPACK_IMPORTED_MODULE_5__["ChatInputComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"]
            ],
            providers: [src_app_services_speech_recognizer_service__WEBPACK_IMPORTED_MODULE_11__["SpeechRecognizerService"], src_app_services_speech_synthesizer_service__WEBPACK_IMPORTED_MODULE_12__["SpeechSynthesizerService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/demo/environments/environment.ts":
/*!**********************************************!*\
  !*** ./src/demo/environments/environment.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/demo/main.ts":
/*!**************************!*\
  !*** ./src/demo/main.ts ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.module */ "./src/demo/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/demo/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!********************************!*\
  !*** multi ./src/demo/main.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/aswinb/Downloads/totest/Chatbot/src/demo/main.ts */"./src/demo/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map